import './Header.css'

import HeaderImage from '../../assets/AnjaliPic2.jpeg'
import data from './data'

export default function Header(){
    return(
        <header id='header'>
            <div className='container header_container'>
               <div className='header_profile'>
                <img src={HeaderImage} alt=''/>
               </div>
               <h3>Anjali.</h3>
               <h4>Designer and Developer.</h4>
               <p>
                I am recognized as a learner and a perfectionist.I like learning what I do not know and perfecting what I do.I am skilled in React.js and have a good knowledge of JAVA.
               </p>
               <div className='header_cta'>
                <a href='#contact' className='btn'>Let's Talk!!!!</a>
                <a href='#portfolio' className='btn'>My work</a>
               </div>
               <div className='header_socials'>
                {
                    data.map(item=><a key={item.id} href={item.link} target='_blank' rel='nonopener noreferrer'>{item.icon}</a>)
                }
               </div>
            </div>
        </header>
    )
}