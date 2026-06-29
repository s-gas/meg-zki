import './Link.css'

const Link = (props) => {
  const {text, link, arrow} = props;
  if (!arrow) {
    return (
      <a className="link" href={link} target="_blank" rel="noopener noreferrer">{text}</a>
    )
  }
  return (
    <div className="link-arrow">
      <a className="link" href={link} target="_blank" rel="noopener noreferrer">{text}</a>
      <svg width="9" height="9" viewBox="0 0 9 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.432 6.112L7.264 6.16L7.152 2.08L0.784 8.432L0 7.648L6.352 1.296L2.272 1.168L2.32 0L8.208 0.224L8.432 6.112Z" />
      </svg>
    </div>
  )
}

export default Link
