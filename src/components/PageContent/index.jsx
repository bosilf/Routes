import { pageContents } from '../../data/pageContent'
import styles from './page-content.module.css'


const PageContent = ({ title }) => {

  const currentPage = pageContents.find(page => page.title === title)

  if (!currentPage) return <p>the page could not be found</p>
  return (
    <section className={styles.pageContent}>
      <h1>{currentPage.title}</h1>
      <h2>{currentPage.title}</h2>
      <p>{currentPage.description}</p>
    </section>
  )
}

export default PageContent