import logoIgnite from "../images/Logo.svg"
import styles from "./Header.module.css"

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={logoIgnite} alt="" />
      <span>Ignite Feed</span>
    </div>
  )
}