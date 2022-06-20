import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Foooter';
import Projects from './components/pages/Projects';



function App() {


    return (
    <div >
      <Router>
        <Navbar/>
   
        <Container customClass="min-height">
         <Routes>
          <Route exact path="/" element={<Home/>}/>
           
          <Route exact path="/company" element={<Company/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/newproject" element={<NewProject/>}/>
         
         </Routes>
        </Container>
        <Footer/>

      </Router>
    
    </div>
  );
}

export default App;



