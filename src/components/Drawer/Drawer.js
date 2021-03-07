import styles from './styles.module.css'
import { IconButton } from '../IconButton/IconButton'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import Close from './close.svg'

export const Drawer = ({ show, onClose }) => {
  const menuRef = useRef(undefined)

  useEffect(() => {
    const listener = (e) => {
      if (!e.composedPath().includes(menuRef.current)) {
        onClose()
      }
    }
    document.addEventListener('click', listener)
    return () => document.removeEventListener('click', listener)
  }, [])

  return (
    <div
      id={'navigation-drawer'}
      ref={menuRef}
      className={clsx(
        `${styles.drawerContainer} min-w-drawer inset-y-0 transition-all p-5 fixed`,
        show ? 'left-0' : '-left-72'
      )}
      aria-expanded={show}>
      <nav className="w-full h-full" aria-label={'Navigation'}>
        <IconButton
          style={{ marginTop: '-11px' }}
          aria-label={'Close menu'}
          onClick={onClose}
          aria-controls={'navigation-drawer'}>
          <Close
            className={clsx(
              'transition-all transform ease-out delay-75',
              show ? 'rotate-0' : 'rotate-180'
            )}
          />
        </IconButton>
      </nav>
    </div>
  )
}
