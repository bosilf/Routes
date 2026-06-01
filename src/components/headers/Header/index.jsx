import DesktopMenu from '../DesktopMenu'
import MobileMenu from '../MobileMenu'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.mobile}>
                <MobileMenu />
            </nav>
            <nav>
                <DesktopMenu />
            </nav>
        </header>
    )
}

export default Header