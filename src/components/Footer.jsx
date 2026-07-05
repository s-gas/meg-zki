import { useState } from 'react'
import ButtonScrollTop from './ButtonScrollTop'

const Footer = () => {
  const [hover, setHover] = useState(false);

  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-between mt-30 items-end">
      <p className="text-xs text-ink/60">{`© Meg Krawielitzki ${year}`}</p>
      <div className="flex items-end gap-2">
        <p className={`font-tiempos italic font-light text-sm text-ink/60 ${hover ? "opacity-100" : "opacity-0"}`}>Back to top</p>
        <ButtonScrollTop onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}/>
      </div>
    </footer>
  )
}

export default Footer
