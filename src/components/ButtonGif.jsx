import { useState, useEffect } from 'react'
import backToTop from '../utils/backToTop'

const StarSvg = ({style}) => {
  return (
    <svg style={style} width="32" height="32" viewBox="0 0 320 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M320 226.245L218.762 218.762L226.245 320L160 242.971L93.7552 320L101.458 218.762L0 226.245L77.249 160L0 93.7552L101.458 101.458L93.7552 0L160 77.249L226.245 0L218.762 101.458L320 93.7552L242.971 160L320 226.245Z" />
    </svg>
  )
}

const ButtonGif = ({setGifOpacity}) => {
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    setRotation(window.scrollY * 0.2);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <button 
      className="hover:text-ink-hover cursor-pointer"
      onClick={() => backToTop()}
      onMouseEnter={() => setGifOpacity(100)}
      onMouseLeave={() => setGifOpacity(0)}
    >
      <StarSvg style={{ transform: `rotate(${rotation}deg)` }}/>
    </button>
  );
}

export default ButtonGif
