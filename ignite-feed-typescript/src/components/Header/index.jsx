import igniteLogo from "../../assets/images/logo.svg"

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" className={styles.logo} />
      <strong>Ignite Feed</strong>
    </header>
  );
}
