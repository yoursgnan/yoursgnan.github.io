import ProjectBox from '../components/ProjectBox'

const ProjectsFragment = (props) => {
    return (
        <div className={props.className}>
            <h1>Projects</h1>
            <div className="projects-container">
                {
                    props.data.map(object=><ProjectBox project={object}/>)
                }
            </div>
            <div className='empty-div'></div>
        </div>
    )
}

export default ProjectsFragment