import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      name: "Hugo Alves Varella",
      avatarUrl: "http://github.com/Hugovarellaa.png",
      role: "Web Developer"
    },
    publishedAt: new Date("2022-08-30 18:00:00"),
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: " 👉 jane.design/doctorcare"
      }
    ]
  },
  {
    id: 2,
    author: {
      name: "Diego Fernandes",
      avatarUrl: "http://github.com/diego3g.png",
      role: "@CTO Rocketseat"
    },
    publishedAt: new Date("2022-08-28 20:00:00"),
    content: [
      {
        type: "paragraph",
        content: "Fala Dev"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: " 👉 jane.design/doctorcare"
      }
    ]
  },
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.appContainer}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>


    </div>
  )
}