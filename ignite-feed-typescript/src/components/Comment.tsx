import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  comment: string;
  onDeleteComment: (comment: string) => void
}

export function Comment({ comment, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleAddLike() {
    setLikeCount(likeCount + 1)
  }

  function handleDeleteComment() {
    onDeleteComment(comment)
  }

  return (
    <div className={styles.comment}>

      <Avatar src="https://github.com/Hugovarellaa.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hugo Alves Varella</strong>
              <time title="30 de Agosto às 14:10" dateTime="30-08-2022 às 14:10">Cerca de 1H atrás</time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleAddLike}>
            <ThumbsUp size={20} />
            aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>
  )
}