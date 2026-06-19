const Link = (props) => {
  const {text, link} = props;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="external-link">{text}</a>
  )
}

export default Link
