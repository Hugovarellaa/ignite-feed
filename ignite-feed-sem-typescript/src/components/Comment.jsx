import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="//github.com/Hugovarellaa.png"
        alt=""
        className={styles.avatar}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.commentHeader}>
            <div className={styles.authorAndTime}>
              <strong>Hugo Alves Varella</strong>
              <time dateTime="2022-08-23 16:00" title="23 de Agosto de 2022">Cerca de 3h</time>
            </div>

            <button title="Deleta comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Adorei seu novo portita Devon!</p>
        </div>



        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}