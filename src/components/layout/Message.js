import styles from './Message.module.css'
import { useState,useEffect } from 'react'

export default function Message({type,msg}){
   const [visible,setVisible] = useState(false)


   //useEffect sempre será ligado a alguem nesse caso a [msg]
   useEffect(()=>{
    //condição sem mensagem? visibilidade falsa não exibe e retorna
    if(!msg){
    setVisible(false)
    return
    }
   //Se tem menssagem visibilidade true começa o time
    setVisible(true)
   //Encerra o time depois de 3 segundos
    const timer = setTimeout(()=>{
            setVisible(false)
    },3000)
   //Retorna o ciclo
    return () => clearTimeout(timer)

   },[msg])


    return(
        <>
       {visible && ( <div className={`${styles.message} ${styles[type]}`}>{msg}</div>)}
       
       </>
    )
}