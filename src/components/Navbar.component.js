import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose, AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { IoHammerOutline, IoDocumentsOutline } from "react-icons/io5";
import { IconContext } from 'react-icons';
import './Navbar.css';

const sidebarData = [
    {
        title: 'HOME',
        path: '/',
        icon: < AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'RESUME',
        path: '/resume',
        icon: < IoDocumentsOutline />,
        cName: 'nav-text'
    },
    {
        title: 'APPLICATIONS',
        path: '/application',
        icon: < IoHammerOutline />,
        cName: 'nav-text'
    },
    {
        title: 'CONTACT',
        path: '/contact',
        icon: < AiOutlinePhone/>,
        cName: 'nav-text'
    },
]


export default function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>

            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul class='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                    <Link to='#' className='menu-bars'>
                        <AiOutlineClose /> 
                    </Link>
                    </li> 
                    {sidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        {/* 
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/resume">RESUME</Link></li>
            <li><Link to="/application">APPLICATION</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
        */}

    </>
    )
}