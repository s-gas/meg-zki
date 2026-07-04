import { useState, useEffect } from 'react'
import SerifItalic from './SerifItalic'

const Main = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  });

  return (
    <main className={`mt-20 sm:mt-90 transition-all duration-2000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <p className="text-[clamp(1rem,5.5vw,20rem)] font-medium leading-none text-stroke">Berlin-based digital designer creating <SerifItalic>human-centred</SerifItalic> experiences that blend <SerifItalic>form</SerifItalic> and <SerifItalic>functionality</SerifItalic>.</p>
      <p className="indent-[clamp(1rem,7vw,20rem)] text-[clamp(1rem,5.5vw,20rem)] font-medium leading-none text-stroke">With expertise in <SerifItalic>creative concepting</SerifItalic>, <SerifItalic>user interface design</SerifItalic>, and <SerifItalic>visual identities</SerifItalic>, taking ideas from concept right through to production.</p>
    </main>
  )
}

export default Main
