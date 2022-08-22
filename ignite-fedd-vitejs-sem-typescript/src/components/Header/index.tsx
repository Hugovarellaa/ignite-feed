import logoImg from "../../images/Logo.svg"
import styles from "./Header.styles.module.css"


export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logoImg} alt="" />
      <h2>Ignite Feed</h2>
    </header>
  )
}