import styles from "./Sidebar.module.css"

export function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        alt=""
      />
      <div className={styles.profile}>
        <strong>Hugo Varella</strong>
        <span>Web Development</span>
      </div>
      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}