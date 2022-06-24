import styles from './SubmitButton.module.css'

export default function SubmitButton(props) {
    return(
        <div >
           <button className={styles.btn}>{props.text}</button>
        </div>
    )
}