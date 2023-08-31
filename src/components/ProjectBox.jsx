const ProjectBox = ({project}) => {
    return (
        <div className="project-box">
            <h2>{project.project_name}</h2>
            <p>{project.project_details}</p>
            <button>Visit</button>
        </div>
    )
}

export default ProjectBox