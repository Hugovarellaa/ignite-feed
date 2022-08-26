import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.postContainer}>
      <header>
        <div className={styles.author}>

          <Avatar
            hasBorder
            src="//github.com/Hugovarellaa.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Hugo Alves Varella</strong>
            <span>Web Development</span>
          </div>
        </div>

        <time
          dateTime="2022-08-26 16:00"
          title="26 de Agosto de 2022 às 13:10"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href=""> 👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#uiux {" "}</a>
          <a href="#">#userexperience</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu feedback" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}