import PerleLogoSimple from '../PerleLogoSimple'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <PerleLogoSimple className={styles.logo} />
            <section className={styles.grid}>
            </section>
        </footer>
    )
}

export default Footer