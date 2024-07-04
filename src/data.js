import xox from './assets/xox.png'
import portflio from './assets/portfolio.jpg'
import erp from './assets/odoo-logo-main-banner.jpeg'
const data = {
    about_me: {
        name: 'Gnana Prakash',
        about: "With a strong foundation in software development and a solid knowledge of the ODOO framework, I bring expertise in both ERP systems and full-stack development using the MERN (MongoDB, Express.js, React, Node.js) stack. My professional journey has been characterized by a commitment to delivering high-quality solutions, continuous learning, and contributing to process improvement."
    },
    projects: {
        self_interest: [
            {
                project_image: portflio,
                project_name: 'My First portfolio',
                project_details: "I created my first portfolio when i doing my graduation which show case my project i have done",
                main_app_frame: false,
                languages_used: ['html','css'],
                redirect_url: 'https://gnana-prakash.github.io/',
                background_image: 'https://images.pexels.com/photos/3824262/pexels-photo-3824262.jpeg'
    
            },
            {
                project_image: false,
                project_name: 'Pip Application',
                project_details: "During my graduation i made and app which show any YouTube video in picture in picture mode",
                main_app_frame: 'Android studio',
                languages_used: ['java','xml'],
                redirect_url: 'https://gnana-prakash.github.io/pipyoutube',
            },
            {
                project_image: xox,
                project_name: 'Tic Tac Toe',
                project_details: 'Made small game by using react front end framework',
                main_app_frame: 'React Js',
                languages_used: ['javascript','JSX','css'],
                redirect_url: 'https://purplehexcode.github.io/bingo',
            }
        ],
        real_time: [
            {
                project_image: erp,
                project_name: 'Business Development',
                project_details: "I worked on some modules on odoo framework such as HR, Project module.\
                During this project i also worked on UI/UX of landing page in the previous company",
                main_app_frame: 'Odoo',
                languages_used: ['python','xml'],
                redirect_url: false
            },

        ]
    }
        
}

export default data