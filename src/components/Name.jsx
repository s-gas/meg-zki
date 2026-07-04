import { useState } from 'react'

const Name = () => {
  const [image, setImage] = useState(false);

  const handleEnter = () => {
    setImage(true);
  }

  const handleLeave = () => {
    setImage(false);
  }

  return (
    <span className="underline relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      Meg
      <img className={`absolute -top-20 left-28 max-w-none w-70 ${image ? "opacity-100" : "opacity-0 pointer-events-none"}`} src="/images/mk.jpg" alt="" />
    </span>
  )
}

export default Name
