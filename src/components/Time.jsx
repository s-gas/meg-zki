import { useState, useEffect } from 'react'

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
    <div className="hidden sm:flex gap-2">
      <p className="w-15">{timeString}</p>
      <p>[DE]</p>
    </div>
  )
}

export default Time
