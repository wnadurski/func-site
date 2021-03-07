import styles from './styles.module.css'
import Hamburger from './hamburger.svg'
import { IconButton } from '../IconButton/IconButton'

export const Menu = ({ children }) => {
  return <div className={'topbar ' + styles.topbar}>{children}</div>
}

export const HamburgerButton = ({ className, ...props }) => {
  return (
    <IconButton aria-label="Menu" className={className + ' ' + styles.hamburgerButton} {...props}>
      <Hamburger className={styles.icon} />
    </IconButton>
  )
}
