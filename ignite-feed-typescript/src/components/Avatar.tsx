import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
  alt?: string;
}

export function Avatar({ src, hasBorder = false, alt = "" }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarHasBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  )
}