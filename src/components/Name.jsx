const Name = ({setPortraitVisible}) => {

  const handleEnter = () => {
    setPortraitVisible(true);
  }

  const handleLeave = () => {
    setPortraitVisible(false);
  }

  return (
    <span className="underline underline-offset-2 decoration-ink/30" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      Meg
    </span>
  )
}

export default Name
