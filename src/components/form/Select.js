
import styles from './Select.module.css'

export default function Select({options, name,value, text, handleOnChange}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select 
             name={name}
            id={name}
            onChange={handleOnChange}
            value={value || ''}
            
            >
                <option> Selecione  uma opção</option>
                {options.map((option)=> (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}
//Esquema das opções do select envolve o ProjectForm.js o db.json e o Select.js