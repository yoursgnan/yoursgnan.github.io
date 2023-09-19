import { useState } from "react"

const expand_less = <span class="material-symbols-outlined">expand_less</span>
    
const expand_more = <span class="material-symbols-outlined">expand_more</span>

const ProjectBox = ({project}) => {
    
    return (
        <div className="project-box">

            <div className="project-banner-wrapper">
                <h3>{project.project_name}</h3>
            </div>
            <div className="project-info-container">
                <p className="project-details-content">{project.project_details}</p>
                <p className="text-bubble primary">{project.main_app_frame}</p>
                <div className="project-languages-container">
                {
                    project.languages_used.map((language)=>{
                        return <p className="text-bubble">{language}</p>
                    })
                }
                </div>
                <div>
                {
                    project.redirect_url.redirect_url!=false && <a href={project.redirect_url} target="new">Visit</a>
                }
                </div>
            </div>        
        </div>
    )
}

export default ProjectBox