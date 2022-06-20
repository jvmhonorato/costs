import styles from './Footer.module.css'
import {FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2022</p>
        </footer>
    )
}

//importamos os modulos icons e tambem o Footer.module.css, adicionamos estilos e todas as tag do footer  as legendas estão la no arquivo Footer.module.css