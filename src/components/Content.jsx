import Home from '../fragments/Home'
import ProjectsFragment from '../fragments/Projects'
import ProjectFrafment from '../fragments/Projects'

const Content = (props) => {
    return (
        <div className="main-content">
            <Home data={props.data.home} className={props.position===1 ? "main-content-container home-fragment menu-active" : "main-content-container home-fragment menu-inactive"}/> 
            <ProjectsFragment data={props.data.projects} className={props.position===2 ? "main-content-container project-fragment menu-active" : "main-content-container project-fragment menu-inactive"}/> 
        </div>
    )
}

export default Content