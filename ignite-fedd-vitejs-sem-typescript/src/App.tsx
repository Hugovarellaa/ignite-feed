import styles from "./App.styles.module.css"
import { Header } from "./components/Header"
import { SideBar } from "./components/Sidebar"

import "./global.css"


export function App() {
  return (
    <div>
      <Header />


      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <h1>POST</h1>
          <h1>POST</h1>
          <h1>POST</h1>
        </main>
      </div>
    </div>
  )
}