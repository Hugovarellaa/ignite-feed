import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react"
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

const comment = [

]

export function Post({ author, content, publishedAt, id }) {
  const [comment, setComment] = useState([
    "Post muito bacana em!"
  ])
  const [newCommentText, setNewCommentText] = useState("")

  const dateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH':'mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeDateNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event) {
    event.preventDefault()
    setComment(oldState => [...oldState, newCommentText])
    setNewCommentText("")
  }

  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.postContainer}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="" hasBorder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time dateTime={publishedAt.toISOString()} title={dateFormatted}>{publishedDateRelativeDateNow}</time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === "paragraph") {
              return <p key={line.content}>{line.content}</p>;
            } if (line.type === "link") {
              return <p key={line.content}>{line.content}</p>
            }
          })
        }
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder="Deixe seu comentário" onChange={handleNewCommentChange} value={newCommentText} />

        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList} >
        {
          comment.map(comment => (
            <Comment content={comment} key={comment} />
          ))
        }
      </div>
    </article>
  )
}