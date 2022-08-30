import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import "./global.css"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.appContainer}>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </div>


    </div>
  )
}