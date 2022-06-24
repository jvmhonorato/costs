import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'



export default function NewProject(){

  
    const navigate = useNavigate()


// função vai criar dados no backend no arquivo json
    function createPost(project){
        // initialize costs and services 
        project.cost= 0
        project.services = []
       fetch("http://localhost:5000/projects",{
       method: "POST",
       headers:{
        'content-type': 'application/json',
       },body: JSON.stringify(project),
     })
     .then((resp) => resp.json())
     .then((data)=>{console.log(data)
    //redirect
    navigate('/projects',{state:{message: 'Projeto enviado com sucesso!'}})   
    })
     .catch(err => console.log(err)) 
    }

    return( 
            <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <p>Formulário</p>
            <ProjectForm 
            handleSubmit={createPost} 
            btntext="Criar Projeto"
            />
            </div>
    )
}