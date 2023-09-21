import { useState } from "react"
import directory from '../assets/directory.png'

const ProjectBox = ({project}) => {
    const [expanded,setExpanded] = useState(false)
    return (
        <div className="project-box">
            <div className="project-image-banner">
                <img src={project.project_image?project.project_image:directory} width={60} height={60} className="project-image"/>
            </div>
            <div>
                <div className="project-banner-wrapper">
                    <h3>{project.project_name}</h3>
                </div>
                <div className="project-info-container">
                    <p className="project-details-content">
                        {project.project_details.slice(0,80)}
                        {!expanded && <span>...</span>}
                        {expanded && <span>{project.project_details.slice(81,-1)}</span>}
                        <a onClick={()=>setExpanded(!expanded)}>{expanded ? " read less" : " read more"}</a>
                        
                    </p>
                    <p className="text-bubble primary">{project.main_app_frame}</p>
                    <div className="visit-languages-container">
                        <div className="project-languages-container">
                        {
                            project.languages_used.map((language)=>{
                                return <p className="text-bubble">{language}</p>
                            })
                        }
                        </div>
                        <div>
                        {
                            project.redirect_url.redirect_url!=false && <a href={project.redirect_url} target="new">visit</a>
                        }
                        </div>
                    </div>
                    
                </div>
            </div>
                    
        </div>
    )
}

export default ProjectBox