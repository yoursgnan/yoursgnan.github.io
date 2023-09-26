import ProjectBox from '../components/ProjectBox'

const ProjectsFragment = ({data}) => {
    return (
        <div id="projects">
        
            <h2 class="main-project-heading">Real time Projects</h2>
            <div className="projects-container">
                {
                    data.real_time.map(object=><ProjectBox project={object} key={object.project_name}/>)
                }
            </div>
        
            <h2 class="main-project-heading">Self Interest Projects</h2>
            <div className="projects-container">
                {
                    data.self_interest.map(object=><ProjectBox project={object} key={object.project_name}/>)
                }
            </div>
        </div>
        
    )
}

export default ProjectsFragment