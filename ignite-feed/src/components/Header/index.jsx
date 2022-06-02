import styles from "./header.module.css";
import "../styles/global.css";
import igniteLogo from "../../assets/images/logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" className={styles.logo} />
      <strong>Ignite Feed</strong>
    </header>
  );
}
