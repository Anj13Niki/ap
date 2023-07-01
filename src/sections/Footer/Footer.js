import './Footer.css'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import data from '../Header/data'
export default function Footer(){
    return(
        <footer id='#footer'>
            <div className='footer-container'>
                <div className='footer-left'>
                    <h4><FaPhoneAlt  id='icon'/><a href='tel:+91 7651961433'>Call me at +91 7651961433</a></h4>
                    <p><MdEmail id='icon'/>anjalirawat3443@gmail.com</p>
                </div>
                <div className='footer-mid'>
                    <p> Made with &#128151; by Anjali.</p>
                </div>
                <div className='footer-right'>
                {
                    data.map(item=><a key={item.id} href={item.link} target='_blank' rel='nonopener noreferrer'>{item.icon}</a>)
                }
                </div>
            </div>
        </footer>
    )
}