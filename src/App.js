import { Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Project from './routes/Project';
import Success from './routes/Success';
import pdf from './components/HeroImg/SanskritiGupta_Resume.pdf'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/SanskritiGupta_Resume.pdf' element={pdf}/>
      </Routes>
    </div>
  );
}

export default App;
