import logoImg from "../images/Logo.svg"
import styles from "./Header.module.css"


export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={logoImg} alt="" className={styles.logo} />
      <span>Ignite Feed</span>
    </div>
  )
}