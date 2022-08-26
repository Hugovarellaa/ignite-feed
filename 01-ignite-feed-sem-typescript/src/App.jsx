import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./styles/global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.appContainer}>
        <Sidebar />
        <main>Post</main>
      </div>
    </div>
  )
}