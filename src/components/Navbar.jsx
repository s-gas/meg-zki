import { useState } from 'react'
import starImg from '../assets/star.png'
import './Navbar.css'

const handleScrollTop = () => {
  console.log("scroll top");
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
}

const Info = () => {
  return (
    <div className="info">
      <button className="name" onClick={handleScrollTop}>MEG KRAWIELITZKI</button>
      <p className="profession">Digital Designer</p>
    </div>
  )
}

const Time = () => {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date())
  }, 1000);

  const timeString = time.toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  return (
    <div className="time-country">
      <p className="time">{timeString}</p>
      <p className="country">[DE]</p>
    </div>
  )
}

const Star = () => {
  return <img className="star" src={starImg} alt="star" />
}

const Navbar = () => {
  return (
    <div className="navbar">
      <Info />
      <Time />
      <Star /> 
    </div>
  )
}

export default Navbar
