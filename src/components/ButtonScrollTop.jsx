const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const ButtonScrollTop = (props) => {
  const {className, text} = props;
  return (
    <button className={className} onClick={handleScrollTop}>{text}</button>
  )
}

export default ButtonScrollTop
