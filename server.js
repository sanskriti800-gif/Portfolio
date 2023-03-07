
// Requiring express.js
const express = require('express')

// Changing the module to object to use its inbuilt functions
const app = express()

// Port number to run the port
const port_no = 3128

// Server Setup
app.listen(port_no, () => {
    console.log('port running atport number : 3007')
})

const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

//server used to send send emails
app.use(cors());
app.use(express.json());
app.use("/", router);

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  host: 'localhost',
  port: 3128,
  secure: true,
  auth: {
    user: "gupta.sanskriti08@gmail.com",
    pass: "hsjqurmupzyxnavm"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "gupta.sanskriti08@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
