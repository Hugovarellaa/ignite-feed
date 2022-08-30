import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.postContainer}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/Hugovarellaa.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Hugo Alves Varella</strong>
            <span>Web Development</span>
          </div>
        </div>
        <time dateTime="2022-08-30 14:10:00" title="30 de Agosto às 14:10">Públicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>
          <a href="#"> 👉 jane.design/doctorcare</a>
        </p>
      </div>


      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>

        </footer>
      </form>
    </article>
  )
}