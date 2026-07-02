import { useState, useEffect } from 'react'

const Section = ({children}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`flex flex-col gap-7 w-82 text-[18px] transition-all duration-2000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  )
}

export default Section
