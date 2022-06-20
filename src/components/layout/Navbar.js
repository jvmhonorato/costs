import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'


export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                <img src={logo} alt="costs"/>
                </Link>
                <ul className={styles.list}>
                 <li className={styles.item}>
                  <Link to="/">Home</Link>
                 </li>
                 <li className={styles.item}>
                   <Link to="/projects">Projects</Link>
                 </li>
                 <li className={styles.item}>
                  <Link to="/company">Company</Link>
                  </li>
                 <li className={styles.item}>
                   <Link to="/contact">Contact</Link>
                 </li>
            
               
                </ul>
            </Container>

        </nav>
    )
}

//envolver links em container, usar uma tag <img> com src da imagem dentro, envolvemos cada link em um <li> e todos dentro de <ul>