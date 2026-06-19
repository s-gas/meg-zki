import { useState } from 'react'
import './Navbar.css'
import ButtonScrollTop from './ButtonScrollTop'
import ButtonGif from './ButtonGif'

const Info = () => {
  return (
    <div className="info">
      <ButtonScrollTop className="name" text="MEG KRAWIELITZKI" />
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


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="info-time">
        <Info />
        <Time />
      </div>
      <ButtonGif /> 
    </div>
  )
}

export default Navbar
