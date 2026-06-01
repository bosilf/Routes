import { NavLink } from "react-router-dom";
import { getImageURL } from "../../utils/functions";
import styles from './item-card.module.css'

export default function ItemCard({ item }) {
  if (!item.image) return null;
  return (
    <li>
      <article className={styles.card}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={getImageURL(item.image)} alt={item.title} />
        </div>
        <div className={styles.cardGrid}>
          <h3 className={styles.name}>{item.description}</h3>
          <p>material</p>
          <p>{item.material ? item.material.join(", ") : "N/A"}</p>
          <p>price</p>
          <NavLink to="/contact" >inquires only</NavLink>
        </div>
      </article>
    </li>
  )
}