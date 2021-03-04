import styles from './styles.module.css'

export const TopBar = ({ children }) => {
  return <div className={'topbar ' + styles.topbar}>{children}</div>
}
