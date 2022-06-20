import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'


//criamos um props pra linkar o 'to' e o 'text' pra que esse button possa ser chamado em qualquer componente
export default function LinkButton(props) {
    return(
        <Link className={styles.btn} to={props.to}>
        {props.text}
        </Link>
    )
}