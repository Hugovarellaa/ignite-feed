import styles from "./header.module.css";
import "../styles/global.css";

export function Header() {
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
    </header>
  );
}
