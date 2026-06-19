import './Button.css'

const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const ButtonScrollTop = (props) => {
  const {className, text} = props;
  return (
    <button className="button" onClick={handleScrollTop}>{text}</button>
  )
}

export default ButtonScrollTop
