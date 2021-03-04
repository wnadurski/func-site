import styles from './styles.module.css'
import Hamburger from './hamburger.svg'
import { IconButton } from '../IconButton/IconButton'

export const Menu = ({ children }) => {
  return <div className={'topbar ' + styles.topbar}>{children}</div>
}

export const HamburgerButton = ({ className }) => {
  return (
    <IconButton aria-label="Menu" className={className}>
      <Hamburger className={styles.icon} />
    </IconButton>
  )
}
