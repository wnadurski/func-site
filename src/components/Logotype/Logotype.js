import styles from './styles.module.css'

export const Logotype = () => {
  return (
    <div className={styles.logotype}>
      <span className={styles.lambda}>λ</span>
      <span className={styles.func}>func</span>
      <span className={styles.dot}>.</span>
      <span className={styles.site}>site</span>
    </div>
  )
}
