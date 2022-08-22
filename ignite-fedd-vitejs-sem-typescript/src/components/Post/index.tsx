import { Comment } from "../Comment"
import styles from "./Post.styles.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="//github.com/Hugovarellaa.png" alt="" className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>Hugo Alves Varella</strong>
            <span>Web development</span>
          </div>
        </div>

        <time dateTime="2022-08-22 16:58" title="22 de Agosto 2022 16:58">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>
          Fala galeraa 👋
        </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 {" "}jane.design/doctorcare
        </p>
        <p>
          <a href="#">
            #novoprojeto
          </a>

          <a href="">
            {" "} #nlw {" "}
          </a>
          {""}
          <a href="">
            #rocketseat
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.CommentList}>
        <Comment />
      </div>
    </article>
  )
}