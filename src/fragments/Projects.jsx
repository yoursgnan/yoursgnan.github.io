import ProjectBox from '../components/ProjectBox'

const ProjectsFragment = ({data}) => {
    return (
        <div className='box-container project-box-container'>
            <h2>Real time Projects</h2>
            <div className="projects-container">
                {
                    data.real_time.map(object=><ProjectBox project={object}/>)
                }
            </div>
            <div className='empty-div'></div>
            <h2>Self Interest Projects</h2>
            <div className="projects-container">
                {
                    data.self_interest.map(object=><ProjectBox project={object}/>)
                }
            </div>
        </div>
    )
}

export default ProjectsFragment