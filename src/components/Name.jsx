import { useState } from 'react'

const Name = () => {
  const [image, setImage] = useState(false);

  const handleEnter = () => {
    console.log("enter");
    setImage(true);
  }

  const handleLeave = () => {
    console.log("leave");
    setImage(false);
  }

  return (
    <span className="relative underline" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      Meg
      <img className={`absolute ${image ? "opacity-100" : "opacity-0 pointer-events-none"}`} src="/images/mk.jpg" alt="" />
    </span>
  )
}

export default Name
