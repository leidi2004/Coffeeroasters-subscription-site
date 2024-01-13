import { Link } from "react-router-dom"
import styles from "./Nav.module.scss"
import { useState } from "react"
import logo from "../../../assets/img/shared/desktop/logo.svg"

export const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  
  const menuClass = mobileMenu ? styles.nav__menu_display : styles.nav__menu_hidden;
  return (
    <nav className={styles.nav}>
        <div className={styles.nav__container}>
          <img src={logo} alt="" className={styles.nav__icon}/>
        </div>
        <button type="button" className={styles.button}>
          <span className={styles.button__lines}></span>
          <span className={styles.button__lines}></span>
          <span className={styles.button__lines}></span>
        </button>
        <ul className={styles.nav__links}>
            <li><Link to="/" className={styles.nav__link}>Home</Link></li>
            <li><Link to="/about-us" className={styles.nav__link}>About Us</Link></li>
            <li><Link to="/create-plan" className={styles.nav__link}>Create Your Plan</Link></li>
        </ul>
    </nav>
  )
}
