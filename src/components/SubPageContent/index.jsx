import styles from './sub-page.content.module.css'
import { pageContents } from '../../data/pageContent'
import ItemCard from '../ItemCard'


const SubPageContent = ({ title }) => {
  const matchingItems = pageContents.filter(page => page.title === title)

  if (matchingItems.length === 0) return <p>the page could not be found</p>

  return (
      <ul className={styles.subPageContent}>
        {matchingItems.map((item, index) => (
          <ItemCard key={index} item={item}/>
        ))}
      </ul>
  )
}

export default SubPageContent