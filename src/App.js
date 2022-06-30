import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Foooter';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';



function App() {


    return (
    <div >
      <Router>
        <Navbar/>
   
        <Container customClass="min-height">
         <Routes>
          <Route exact path="/" element={<Home/>}/>
           
          <Route  path="/company" element={<Company/>}/>
          <Route  path="/contact" element={<Contact/>}/>
          <Route  path="/projects" element={<Projects/>}/>
          <Route  path="/newproject" element={<NewProject/>}/>
          <Route  path="/project/:id" element={<Project/>}/>
         </Routes>
        </Container>
        <Footer/>

      </Router>
    
    </div>
  );
}

export default App;



