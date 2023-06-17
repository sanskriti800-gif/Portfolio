import React from 'react'
import './WorkCardStyles.css'
import { NavLink } from 'react-router-dom'
import Proj1 from '../assets/project-img1.png'
import Proj2 from '../assets/project-img2.png'
import Proj3 from '../assets/apnaPlatform_home.png'
import Proj4 from '../assets/project-img4.png'
import Proj5 from '../assets/project-img5.png'


const ProjectCardData = [
    {
        img: Proj1,
        title: "YouTube Clone",
        text: "This is based on Youtube clone which has the funtionality as similar as youTube. This is build up with the use of ReactJs, RapidAPI, and Material UI 5",
        view: "https://leafy-marigold-409750.netlify.app",
        src: "https://github.com/sanskriti800-gif/Youtube-Clone"
    },
    {
        img: Proj4,
        title: "Sanskriti",
        text: "India's languages, religions, dance, music, architecture, food and customs differ from place to place.This application is to explore and get guidance in our Sanskriti, promote india’s cultural legacy.This is build up with the use of  ReactJs, Rapid API, Material UI 5, Google Map API",
        view: "https://sanskriti-culture-of-india.netlify.app/",
        src: "https://github.com/sanskriti800-gif/Sanskriti-The-Culture-of-India"
    },
    {
        img: Proj5,
        title: "Portfolio",
        text: "It is my portfolio describing me with all my contact details and my projects.",
        view: "https://about-me-sanskriti-gupta.netlify.app",
        src: "https://github.com/sanskriti800-gif/Portfolio"
    },
    {
        img: Proj2,
        title: "Asha Diary",
        text: "It is about making VHIR register online and disease identification for helping Asha workers. This is build up with the use of Python(Numpy, Pandas), Machine Learning, Java, XML, MySql",
        view: "https://github.com/sanskriti800-gif/AshaDiary",
        src: "https://github.com/sanskriti800-gif/AshaDiary"
    },
    {
        img: Proj3,
        title: "ApnaPlatform",
        text: "Interview preparation platform where you can interact with people of same domain and sharing you ideas with them and reduce fear of public speaking. This is build up with the use of ReactJs, Zegocloud, Firebase",
        view: "https://apnaplatform.netlify.app/",
        src: "https://github.com/sanskriti800-gif/ApnaPlatform"
    }
]


export default ProjectCardData