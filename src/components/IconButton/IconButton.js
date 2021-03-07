import styles from './styles.module.css'
import Ripples from 'react-ripples'

export const IconButton = ({ className, children, onClick, ...props }) => {
  return (
    <button className={styles.button + ' ' + className} {...props}>
      <Ripples className={styles['react-ripples']} color="#2b2b2b10" onClick={onClick}>
        {children}
      </Ripples>
    </button>
  )
}
