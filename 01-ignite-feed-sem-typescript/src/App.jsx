import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import "./styles/global.css"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Sidebar />
        <main>
          <h1>Post</h1>
          <h1>Post</h1>
          <h1>Post</h1>
          <h1>Post</h1>
        </main>
      </div>
    </div>
  )
}