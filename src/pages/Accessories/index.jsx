import styles from './accessories.module.css'
import { NavLink, Outlet, useLocation } from "react-router-dom"
import PageContent from "../../components/PageContent"
import { accessoriesTitle } from '../../data/pageContent'
import AllAccessories from '../../components/AllAccessories'


const Accessories = () => {
  const location = useLocation()
  
  const isExactMainPage = location.pathname === '/accessories'

  const activeClass = ({isActive}) =>
      isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
  return (
    <main className={styles.accessories}>
      <PageContent title={accessoriesTitle} />
      <section className={styles.section}>
        <nav className={styles.nav}>
          <NavLink className={activeClass} to='/accessories' end>all accessories</NavLink>
          <NavLink className={activeClass} to='/accessories/single'>single</NavLink>
          <NavLink className={activeClass} to='/accessories/stack'>stack</NavLink>
        </nav>
        {isExactMainPage ? <AllAccessories /> : <Outlet />}
      </section>
    </main>
  )
}

export default Accessories
