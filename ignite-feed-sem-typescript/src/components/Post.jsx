import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.postContainer}>
      <header>
        <div className={styles.author}>
          <img src="//github.com/Hugovarellaa.png" alt="" className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>Hugo Varella</strong>
            <span>We development</span>
          </div>
        </div>
        <time dateTime="2022-08-23  16:00" title="23 de Agosto de 2022 ">Públicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p> 👉 jane.design/doctorcare</p>
        <p>
          <a href="">
            #novoprojeto
          </a>
          <a href="">
            {" "}#nlw{" "}
          </a>
          <a href="">
            #rocketseat
          </a>
        </p>
      </div>
    </article>
  )
}