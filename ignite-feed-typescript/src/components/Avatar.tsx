import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = false, ...rest }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarHasBorder : styles.avatar}
      {...rest}
    />
  )
}