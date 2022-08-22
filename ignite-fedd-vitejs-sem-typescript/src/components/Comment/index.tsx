import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.styles.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="//github.com/Hugovarellaa.png" alt="" className={styles.avatar} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hugo Alves Varella</strong>
              <time>Cerca de 2h</time>
            </div>
            <button title="Deleta comentarios">
              <Trash size={24} />
            </button>
          </header>
          <p>
            Muito bom Devon, parabéns!! 👏👏
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}