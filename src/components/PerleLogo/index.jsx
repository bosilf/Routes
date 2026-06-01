import { NavLink } from 'react-router-dom'
import styles from './logo.module.css'

const PerleLogo = ({variant = ""}) => {
  return (
    <div className={variant}>
      <span className={styles.text}>perle</span>
      <span className={styles.cursive}>pd</span>
      <span className={styles.text}>dámor</span>
    </div>
  )
}

export default PerleLogo