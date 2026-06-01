import styles from './layout.module.css'
import { Outlet } from 'react-router-dom'
import Footer from "../../components/Footer"
import Header from "../../components/headers/Header"


const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout