import styles from './styles.module.css'
import Ripples from 'react-ripples'

export const IconButton = ({ className, children, ...props }) => {
  return (
    <div className={styles.button + ' ' + className} role="button" {...props}>
      <Ripples className={styles['react-ripples']} color="#2b2b2b10">
        {children}
      </Ripples>
    </div>
  )
}
