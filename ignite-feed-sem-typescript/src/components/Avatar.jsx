import styles from "./Avatar.module.css";

export function Avatar({ src, hasBorder = false }) {
  return (
    <img
      src={src} alt=""
      className={hasBorder ? styles.hasBorderAvatar : styles.avatar}
    />
  )
}