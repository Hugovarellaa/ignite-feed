import { PencilLine } from "phosphor-react"
import styles from "./Sidebar.styles.module.css"

export function SideBar() {
  return (
    <aside className={styles.sidebarContainer}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="//github.com/Hugovarellaa.png" alt="" />
        <strong>Hugo Alves Varella</strong>
        <span>Web Developmen</span>
      </div>

      <footer>
        {/* Botao de editar perfil */}
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}