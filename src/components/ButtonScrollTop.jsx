import './ButtonScrollTop.css'

const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const ButtonScrollTop = (props) => {
  const {className, text} = props;
  return (
    <button className="button-scroll-top" onClick={handleScrollTop}>{text}</button>
  )
}

export default ButtonScrollTop
