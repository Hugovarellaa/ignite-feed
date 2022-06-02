import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Hugovarellaa.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hugo Varela</strong>
              <time title="11 de Maio as 08:00h" dateTime="2022-05-11 08:00:00">
                Cercar de 1 hora atras
              </time>
            </div>

            <button title="Deletar comentarios">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, Parabens!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
