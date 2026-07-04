import { useState } from 'react'
import ButtonScrollTop from './ButtonScrollTop'

const Footer = () => {
  const [opacity, setOpacity] = useState(0);

  const opacityLevel = `opacity-${opacity}`;

  const year = new Date().getFullYear();

  return (
    <div className="flex justify-between mt-30 items-end">
      <p className="text-xs text-ink/60">{`© Meg Krawielitzki ${year}`}</p>
      <div className="flex items-end gap-2">
        <p className={`font-tiempos italic font-light text-sm text-ink/60 ${opacityLevel}`}>Back to top</p>
        <ButtonScrollTop onMouseEnter={() => setOpacity(100)} onMouseLeave={() => setOpacity(0)}/>
      </div>
    </div>
  )
}

export default Footer
