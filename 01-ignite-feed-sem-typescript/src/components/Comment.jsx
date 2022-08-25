import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.commentContainer}>
      <Avatar
        src="//github.com/Hugovarellaa.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hugo Alves Varella</strong>
              <time
                dateTime="2022-08-25 11:15:000"
                title="25 de Agosto de 2022 às 11:15"
              >
                Cerca de 1h atrás
              </time>

            </div>
            <button>
              <Trash title="Deleta comentário" size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
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