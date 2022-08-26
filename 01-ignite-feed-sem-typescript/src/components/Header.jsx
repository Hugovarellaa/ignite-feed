import styles from "./Header.module.css"

import logoImg from "../assets/Logo.svg"

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={logoImg} alt="" />
      <span>Ignite Feed</span>
    </div>
  )
}