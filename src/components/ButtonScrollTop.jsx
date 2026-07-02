const handleScrollTop = (type) => {
  window.scrollTo({
    top: 0,
    behavior: type,
  });
}

const ButtonScrollTop = (props) => {
  const {text, arrow} = props;
  if (arrow) {
    return (
      <button className="cursor-pointer" onClick={() => handleScrollTop("smooth")}>
        <svg className="hover:text-ink-hover" width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.73145 1.46558V25.4656M16.7314 10.037L8.73145 1.46558L0.731445 10.037" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
    )
  }
  return (
    <button className="cursor-pointer hover:text-ink-hover" onClick={() => handleScrollTop("auto")}>{text}</button>
  )
}

export default ButtonScrollTop
