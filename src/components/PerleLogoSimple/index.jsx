import styles from './logo.module.css'

export default function PerleLogoSimple({ variant = "" }) {
  return (
    <div 
      className={variant}
    >
      <span className={styles.cursive}>pd</span>
    </div>
  )
}