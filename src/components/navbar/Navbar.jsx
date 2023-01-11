import { useState } from 'react'
import './navbar.scss'
import { AiOutlineRocket, AiOutlineBars, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { RiCloseLine } from 'react-icons/ri'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [showSubMenu, setShowSubMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
        
        
    }

    const hideMenu = () => {
        setShowMenu(false)
        setShowSubMenu(false)
    }


    return (
        <nav className='nav-bar'>
            <div className="logo">
                <AiOutlineRocket color='#fff' size={35} />
                <p className='logo-text'>Dev<span>.com</span> </p>
            </div>

            <menu>
                <div className={showMenu ? 'nav-wrapper show-nav-wrapper' : 'nav-wrapper'}
                    onClick={hideMenu}
                >

                </div>
                <ul className='nav-links' id={showMenu ? 'mobile__nav-links' : 'hide__mobile-nav-links'}>
                    <li onClick={hideMenu}><a href="#">Home</a></li>
                    <li onClick={hideMenu}><a href="#">Features</a></li>
                    <li onClick={hideMenu}><a href="#">Download</a></li>
                    <li className='submenu-link ' onClick={()=> setShowSubMenu(true)}>
                        <a href="#">Settings</a>
                        <AiOutlineArrowRight  color='#fff' size={18} />
                    </li>
                    <li className='nav-btn' onClick={hideMenu}>
                        <a className='btn btn-dark'
                            href="#">Get Started
                        </a></li>
                </ul>
                {/* ---------------------------submenu ---------------------- */}
                <ul className='nav-links submenu' id={showSubMenu ? 'submenu-nav-links' : 'hide-submenu-nav-links'}>
                
                    <li className='submenu-link' onClick={()=> setShowSubMenu(false)}>
                    <AiOutlineArrowLeft color='#fff' size={18} />
                        <a href="#">Back to Menu</a>
                    </li>
                    <li onClick={hideMenu}><a href="#">Profile Setting</a></li>
                    <li onClick={hideMenu}><a href="#">Account Setting</a></li>
                    <li onClick={hideMenu}><a href="#">User Setting</a></li>
                </ul>
            </menu>
            <div className="menu-icons" onClick={toggleMenu}>
                {
                    showMenu ? (
                        <RiCloseLine color='#fff' size={30}  onClick={hideMenu}/>
                    ) : (
                        <AiOutlineBars color='#fff' size={27} />
                    )
                }


            </div>
        </nav>
    )
}

export default Navbar