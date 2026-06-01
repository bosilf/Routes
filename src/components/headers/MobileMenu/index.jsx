import { NavLink, useLocation } from 'react-router-dom'
import PerleLogoSimple from '../../PerleLogoSimple'
import styles from './mobile.module.css'
import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";

const MobileMenu = () => {
  const location = useLocation()
  const [dropdown, setDropdown] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isHome = location.pathname === "/"
    
  const activeClass = ({isActive}) =>
    isActive ? `${styles.navItem} ${styles.active}` : styles.navItem

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setDropdown(false)
  }

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
  }

  return (
    <div className={styles.nav} aria-label='mobile menu'>
      <button aria-label={isMenuOpen ? "close menu" : "open menu"} aria-expanded={isMenuOpen} className={`${styles.mobileIcon} ${isMenuOpen ? styles.active : "" }`} onClick={toggleMenu}>
        <span className={`${styles.line} ${styles.line1} ${isMenuOpen ? styles.active : ""} ${isHome ? styles.isHome : ""}`}></span>
        <span className={`${styles.line} ${styles.line2} ${isMenuOpen ? styles.active : ""} ${isHome ? styles.isHome : ""}`}></span>
        <span className={`${styles.line} ${styles.line3} ${isMenuOpen ? styles.active : ""} ${isHome ? styles.isHome : ""}`}></span>
      </button>

      <div 
        className={`${styles.mobileMenuTop} ${isMenuOpen ? styles.active : ""}`} 
        aria-hidden={!isMenuOpen}
      >
        <div className={`${styles.mobileMenuContent} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={`${styles.mobile} ${isHome ? styles.isHome : ""}`}>
            <li><NavLink onClick={toggleMenu} to="/" className={activeClass}>home</NavLink></li>
            <li><NavLink onClick={toggleMenu} to="/about" className={activeClass}>about</NavLink></li>
            <li><NavLink onClick={toggleMenu} to="/contact" className={activeClass}>contact</NavLink></li>
            
            <li className={styles.dropdownTrigger}>
              <button onClick={toggleDropdown} className={styles.menuButton}>
                accessories
                <span className={`${styles.arrow} ${dropdown ? styles.rotated : ""}`}>
                  <IoIosArrowForward />
                </span>
              </button>
              
              {dropdown && (
                <ul className={`${styles.dropdownMenu} ${isHome ? styles.isHome : ""}`}>
                  <li><NavLink onClick={toggleMenu} to="/accessories" className={activeClass}>all accessories</NavLink></li>
                  <li><NavLink onClick={toggleMenu} to="/accessories/single" className={activeClass}>single</NavLink></li>
                  <li><NavLink onClick={toggleMenu} to="/accessories/stack" className={activeClass}>stack</NavLink></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.menuShut} ${isMenuOpen ? styles.active : "" }`} onClick={toggleMenu}></div>
    </div>
  )
}

export default MobileMenu;
