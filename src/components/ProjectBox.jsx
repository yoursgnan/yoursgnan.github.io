const ProjectBox = ({project}) => {
    return (
        <div className="project-box">

            <div className="project-banner-wrapper">
                <h3>{project.project_name}</h3>
            </div>
            <p>{project.project_details}</p>
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
    )
}

export default ProjectBox