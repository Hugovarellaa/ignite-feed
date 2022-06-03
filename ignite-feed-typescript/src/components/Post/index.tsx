import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface PostProps {
  post: {
    author: {
      name: string;
      role: string;
      avatarUrl: string;
    };
    content: Content[];
    publishedAt: Date;
  };
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["Post muito bacana, hein!"]);
  const [newCommentText, setNewCommentText] = useState("");
  const isNewCommentEmpty = newCommentText.length === 0;

  const publishedAtDateFormatted = format(
    post.publishedAt,
    "dd 'de' LLL 'as' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedAtDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setComments((oldState) => [...oldState, newCommentText]);
    setNewCommentText("");
  }

  function deleteComment(comment: string) {
    setComments((oldState) =>
      oldState.filter((oldState) => oldState !== comment)
    );
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
    event.target.setCustomValidity("");
  }

  function handleNewCommentTextInvalid(
    event: InvalidEvent<HTMLTextAreaElement>
  ) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishedAtDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedAtDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href={line.content}>{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentTextInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              content={comment}
              key={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
