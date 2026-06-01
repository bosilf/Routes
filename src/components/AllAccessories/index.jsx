import { pageContents } from '../../data/pageContent'
import ItemCard from '../ItemCard'
import styles from './sub-page-content.module.css'


const AllAccessories = () => {
  const items = pageContents.filter(page => page.title === "single" || page.title === "stack")

  return (
    <ul className={styles.gridContainer}>
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </ul>
  )
}

export default AllAccessories
