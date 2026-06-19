import './Link.css'

const Link = (props) => {
  const {text, link} = props;
  return (
    <a className="link" href={link} target="_blank" rel="noopener noreferrer">{text}</a>
  )
}

export default Link
