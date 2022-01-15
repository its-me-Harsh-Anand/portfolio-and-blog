import Layout from '@/components/Layout'
import ProjectCard from '@/components/ProjectCard'
import React, {useEffect, useState} from 'react'
import { sortByDateProjects } from '../utils/index.js'
import style from "@/styles/projects.module.css"

function Projects() {
    const [projects, setProjects] = useState([])

    const api = 'https://api.github.com/users/its-me-Harsh-Anand/repos'
    useEffect(()=>{
        fetch(api)
        .then((response)=> response.json())
        .then((data)=> setProjects(data.sort(sortByDateProjects)))
    }, [api])
    
    return (
        <Layout title="Projects">
            <h1 className={style.heading}>My projects</h1>
            <div className={style.projectmain}>
            {
                projects.map(project => {
                    return project.fork || <ProjectCard 
                            pname = {(project.name.charAt(0).toUpperCase() + project.name.slice(1)).replaceAll("-", " ")} 
                            purl = {project.html_url} 
                            pdescription = {project.description}
                            phomepage = {project.homepage}
                            pdate = {project.created_at}
                            />
                    
                })
            }
            </div>
        </Layout>
    )
}

export default projects
