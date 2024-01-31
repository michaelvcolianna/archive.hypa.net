export default function ContentBlock({ classes = undefined, title = undefined, children }) {
  return (
    <div id="content" className={classes}>
      {title && <h2>{title}</h2>}

      {children}
    </div>
  )
}
