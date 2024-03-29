import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.css"


export function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        alt=""
      />
      <div className={styles.profile}>

        <Avatar
          hasBorder
          src="https://github.com/Hugovarellaa.png"
          alt=""
        />
        <strong>Hugo Alves Varella</strong>
        <span>Web Development</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil</a>
      </footer>
    </aside>
  )
}