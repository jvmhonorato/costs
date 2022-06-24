import React,{useEffect, useState} from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

export default function ProjectForm({projectData,handleSubmit,btntext}) {

const [categories, setCategories] = useState([])
const [project,setProject] = useState(projectData || {})

const submit =(e)=>{
    e.preventDefault()
    //console.log(project)
    handleSubmit(project)
}
//função vai pegar o valor atual e project e transformar no valor que for digitado que passara a ser o valor atual
function handleChange(e){
    setProject({ ...project, [e.target.name]: e.target.value})
    
}

//função cria um objeto id: de categoria e atribui um name: a ela
function handleCategory(e){
    setProject({ ...project,
         category:{
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
    },
  })
    
}

//Comando pra fazer a API do select option:1: Faz o request busca os dados da porta 5000 categories 2: diz o metodo (get), 3: diz o type (json),4: os dados da resposta transformou em json, 5:pegou os dados em json e colocou no hook setCatergories, 6: usou o catch pra enviar erro caso haja, 7: mandou o hook categories e atribuiu a proprieade options de <Select/> OBS: usar o fecth dentro de useEffect pra que haja loop infinito no navegador

//usar useEffect() pra o fetch não gerar loop no navegador
    useEffect(() => {
        fetch("http://localhost:5000/categories",{
    method:"GET",
    headers:{
        "content-type":"application/json"
    }
}).then((resp) => resp.json())
  .then((data) =>{setCategories(data)})
  .catch((err) => console.log(err))
    },[])

    return(
        <form onSubmit={submit} className={styles.form}>
           <Input 
           type="text" 
           text="Nome do projeto" 
           name="name" 
           placeholder="Insira o nome do projeto"
           handleOnChange={handleChange}
           value={project.name ? project.name : '' }
           
           />
           <Input 
           type="number" 
           text="Orçamento do projeto" 
           name="budget" 
           placeholder="Insira o orçamento do total"
           handleOnChange={handleChange}
           value={project.budget ? project.budget : ''}
           />
          <Select 
          name="category_id" 
          text="Selecione uma categoria" 
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : '' }
          />
         <SubmitButton text={btntext}/>
        </form>
    )
}

//Envolvemos todos os <input> em <div> 2: Atribuimos valores a todas as propriedades do Input que vieram do  componente Input.js atraves de props 3: importamos o componente SubmitButton.js com um props pra ficar dinâmico, pegamos a propriedade dinâmica text e transformamos em props tambem aqui no arquivo ProjectForm .js pra que ela possa ir pra outro arquivo, em Newproject.js atribuíos valor a propriedade btntext que antes era text