import styles from "./Avatar.module.css"

export function Avatar({ src, hasBorder = false }) {
  return (
    <img
      className={hasBorder ? styles.avatarHasBorder : styles.avatar}
      src={src}
      alt=""
    />
  )
}