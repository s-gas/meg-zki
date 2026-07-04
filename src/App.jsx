import { useState } from 'react'
import Navbar from './components/Navbar'
import Gif from './components/Gif'
import Main from './components/Main'
import Sections from './components/Sections'
import Footer from './components/Footer'

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-canvas)_0%,var(--color-canvas)_60%,var(--color-accent)_100%)]">
      </div>
      <div className="px-6 py-5">
        <Navbar setGifVisible={setVisible}/>
        <Gif visible={visible}/>
        <Main />
        <Sections />
        <Footer />
      </div>
    </>
  )
}

export default App
