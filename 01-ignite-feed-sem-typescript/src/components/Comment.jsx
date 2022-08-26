import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.commentContainer}>
      <Avatar
        src="https://github.com/Hugovarellaa.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hugo Alves Varella</strong>
              <time
                dateTime="2022-08-26 16:00"
                title="Cerca de 1h Atrás"
              >
                Publicado Há 1H
              </time>
            </div>
            <button>
              <Trash title="Deletar comentário" size={24} />
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
    </div >
  )
}