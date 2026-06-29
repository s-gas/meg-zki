import './Button.css'

const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const ButtonScrollTop = (props) => {
  const {className, text, arrow} = props;
  if (arrow) {
    return (
      <button className="button" onClick={handleScrollTop}>
        <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.73145 1.46558V25.4656M16.7314 10.037L8.73145 1.46558L0.731445 10.037" stroke="#0A0A0A" stroke-width="2"/>
        </svg>
      </button>
    )
  }
  return (
    <button className="button" onClick={handleScrollTop}>{text}</button>
  )
}

export default ButtonScrollTop
