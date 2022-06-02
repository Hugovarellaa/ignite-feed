import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Posts } from "./Post";

import styles from "./styles/App.module.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Posts />
        </main>
      </div>
    </>
  );
}
