import React from 'react';
import './index.scss'
import {Link, NavLink} from "react-router-dom";
import LogoS from '../../assets/images/logo-a.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faSkype} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo'/>
                <h3 className='sub_logo'>Alexei</h3>
                {/*<img className='sub-logo' src={LogoSubtitle} alt='logo S'/>*/}
            </Link>
            <nav>
                <NavLink exact='true' activeclasscame='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclasscame='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclasscame='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/alexei-cocu-004b50184/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/AlexeiCocu'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://join.skype.com/invite/O0AijIGDyg8c'>
                        <FontAwesomeIcon icon={faSkype} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;