import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { ChangeEvent, FormEvent, useState } from "react"
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

interface Content {
  type: "paragraph" | "link" | string;
  content: string;
}

interface postsProps {
  author: Author
  publishedAt: Date;
  content: Content[]
}

export function Post({ author, content, publishedAt }: postsProps) {
  const formattedDate = format(publishedAt, "MM 'de' LLLL 'às' HH':'mm'h'", {
    locale: ptBR
  })

  const formattedDateDistanceToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const [comments, setComments] = useState([""])
  const [newComment, setNewComment] = useState("")

  function handleCreateNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewComment(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setComments(oldState => [...oldState, newComment])
    setNewComment("")

  }

  function deleteComment(commentText: string) {
    const deletedComment = comments.filter(comment => {
      return comment !== commentText
    })
    setComments(deletedComment)
  }


  return (
    <article className={styles.postContainer}>
      <header>
        <div className={styles.author}>

          <Avatar hasBorder src={author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time dateTime={publishedAt.toISOString()} title={formattedDate}>{formattedDateDistanceToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          }
          if (line.type === "link") {
            return <p key={line.content}><a>{line.content}</a></p>
          }
        })}
      </div>


      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" value={newComment} onChange={handleCreateNewComment} />
        <footer>
          <button type="submit" disabled={!newComment}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => (
            <Comment key={comment} comment={comment} onDeleteComment={deleteComment} />
          ))
        }

      </div>
    </article>
  )
}