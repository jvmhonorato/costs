import styles from './Input.module.css'

export default function Input({value, text, type, name, placeholder, handleOnChange}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}/>
        </div>
    )
}