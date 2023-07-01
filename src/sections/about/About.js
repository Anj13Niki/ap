import './About.css'
import AboutImage from '../../assets/AnjaliPic5.jpeg'
import cv from '../../assets/AnjaliLatestResumeUpdated1.pdf'
import { FaDownload } from 'react-icons/fa';
export default function About(){
    return(
        <section id='about'>
            <div className='container about_container'>
                <div className='about_left'>
                    <div className='potrait'>
                        <img src={AboutImage} alt=''/>
                    </div>
                    
                </div>
                <div className='about_right'>
                    <h2>About Me</h2>
                    <div className='about_cards'></div>
                    <p>Currently, I have completed my Bachelor's in Technology with a specialization in Computer Science and Engineering.Apart from this I have completed an eight week online training in Web Development from Internshala.And this helped me a lot in completing my projects.well versed with computer science fundamentals.</p>
                    <p>I know this is a bit cliche but I am very dedicated to seeing my task to the completion.I have completed 4 projects with the help of React and 3 projects with the help of React.js.</p>
                    <p>I have good knowledge of JAVA, JS, React.js,CSS, Bootstrap, MySQL, PHP, Figma, SCSS and Firebase.I'm a UI/UX designer & a front-end developer, passionate about building and designing beautiful and functional websites.</p> 
                    
                    <a href={cv} download className='btn'>Download CV<FaDownload/></a>
                </div>
            </div>
        </section>
    )
}