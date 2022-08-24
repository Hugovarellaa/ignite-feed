import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./styles/global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/Hugovarellaa.png",
      name: "Hugo Alves Varella",
      role: "Development Full Stack",
    },
    content: [
      { type: "paragraph", content: "Fala hugo 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      {
        type: "link", content: "👉 jane.design/doctorcare"
      }
    ],
    publishedAt: new Date("2022-08-23 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "@CTO Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      {
        type: "link", content: "👉 jane.design/doctorcare"
      }
    ],
    publishedAt: new Date("2022-08-13 14:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/maykbrito.png",
      name: "Mayk brito",
      role: "Educator Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      {
        type: "link", content: "👉 jane.design/doctorcare"
      }
    ],
    publishedAt: new Date("2022-08-22 10:00:00"),
  },
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Sidebar />
        <main>
          {
            posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </div>
  );
} 
