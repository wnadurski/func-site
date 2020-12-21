import styles from "./styles.module.css";
import Hamburger from "./hamburger.svg";
import Ripples from "react-ripples";

export const Menu = ({ children }) => {
  return <div className={"topbar " + styles.topbar}>{children}</div>;
};

export const HamburgerButton = ({className}) => {
  return (
    <div className={styles.hamburgerButton + " " + className} role="button" aria-label="Menu">
      <Ripples className={styles['react-ripples']} color="#2b2b2b10">
        <Hamburger className={styles.icon} />
      </Ripples>
    </div>
  );
};
