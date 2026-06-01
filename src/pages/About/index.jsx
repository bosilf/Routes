import PageContent from '../../components/PageContent'
import { aboutTitle } from '../../data/pageContent'
import styles from './about.module.css'

const About = () => {
    return (
        <main className={styles.about}>
            <PageContent title={aboutTitle} />
        </main>
)
}

export default About