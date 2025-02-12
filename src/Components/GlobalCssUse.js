import styles from "../css/GlobalCssUse.module.css"

export default function GlobalCssUse() {
  return (
    // <div className="tt">GlobalCssUse</div>  global css
    <div className={styles.modulecolor}>GlobalCssUse</div>  // module css
  )
}
