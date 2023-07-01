import './Navbar.css'
import Logo from '../../assets/LOGO.png'
import DarkMode from '../darkmode/DarkMode'
import {IoIosColorPalette} from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RxCross1} from 'react-icons/rx';
import { useState } from 'react';
// import data from './data'
export default function Navbar(){
    const[click,setClick] = useState(false);
    const handleClick=()=>{
        setClick(!click)
    }
    return(
        <div className='nav'>
            <h2>Anjali.</h2>
            <ul className={click?"nav_menu active":"nav_menu"}>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#portfolio'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <DarkMode/>
           <div className='hamburger' onClick={handleClick}> {click? <RxCross1 id='theme_icon'/>:<GiHamburgerMenu id='theme_icon'/>}</div>
            
           
        </div>
    )
}