import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post({ author, content, publishedAt }) {
  const dateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH':'mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeDateNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })


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
              return <p key={line}>{line.content}</p>
            } if (line.type === "link") {
              return <p key={line}><a href={line}>{line.content}</a></p>
            }
          })
        }
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}