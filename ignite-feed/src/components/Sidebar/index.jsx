import styles from "./styles.module.css";

export function Sidebar() {
  return (
    <aside className={styles.siderbar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        {/* <img src="https://github.com/Hugovarellaa.png" alt="Image github" /> */}
        <strong>Hugo Alves Varella</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
