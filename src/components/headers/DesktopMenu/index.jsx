import { useState } from 'react'
import PerleLogo from '../../PerleLogo'
import styles from './desktop.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import PerleLogoSimple from '../../PerleLogoSimple'
import { IoIosArrowForward } from "react-icons/io";


const DesktopMenu = () => {
  const location = useLocation()
  const  [dropdown, setDropdown] = useState(false)

  const isHome = location.pathname === "/"

  const activeClass = ({isActive}) =>
    isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
  
  return (
    <ul className={`${styles.desktop} ${isHome ? styles.isHome : ""}`}>
      <li><NavLink to="/" className={activeClass}>home</NavLink></li>
      <li><NavLink to="/about" className={activeClass}>about</NavLink></li>
      <NavLink to="/" className={activeClass}>
        <PerleLogo variant={styles.logo} />
        <PerleLogoSimple variant={styles.logoSmall} />
      </NavLink>
      <li><NavLink to="/contact" className={activeClass}>contact</NavLink></li>
      <li
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        className={styles.dropdownTrigger}
      >
        <NavLink to="/accessories" className={activeClass}>Accessories<span className={styles.arrow}><IoIosArrowForward /></span></NavLink>
        {dropdown && (
          <ul className={`${styles.dropdownMenu} ${isHome ? styles.isHome : ""}`}>
            <li><NavLink to="/accessories/single" className={activeClass}>single</NavLink></li>
            <li><NavLink to="/accessories/stack" className={activeClass}>stack</NavLink></li>
          </ul>
        )}
      </li>
    </ul>
  )
}

export default DesktopMenu