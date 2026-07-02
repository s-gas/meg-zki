import { useState, useEffect } from 'react'
import ButtonScrollTop from './ButtonScrollTop'
import ButtonGif from './ButtonGif'

const Info = () => {
  return (
    <div>
      <ButtonScrollTop text="MEG KRAWIELITZKI" />
      <p>Digital Designer</p>
    </div>
  )
}

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeString = time.toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  return (
    <div>
      <p>{timeString}</p>
      <p>[DE]</p>
    </div>
  )
}


const Navbar = () => {
  return (
    <div>
      <div>
        <Info />
        <Time />
      </div>
      <ButtonGif /> 
    </div>
  )
}

export default Navbar
