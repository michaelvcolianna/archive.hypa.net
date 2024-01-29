export default function ContentBlock({ classes = undefined, children }) {
  return <div id="content" className={classes}>{children}</div>
}
