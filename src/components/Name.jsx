const Name = ({setPortraitVisible}) => {

  const handleEnter = () => {
    setPortraitVisible(true);
  }

  const handleLeave = () => {
    setPortraitVisible(false);
  }

  return (
    <span className="underline" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      Meg
    </span>
  )
}

export default Name
