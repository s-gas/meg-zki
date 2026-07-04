import ButtonGif from './ButtonGif'
import Info from './Info'
import Time from './Time'

const Navbar = ({setGifVisible}) => {
  return (
    <nav className="fixed z-50 top-0 left-0 right-0 flex justify-between items-start pt-5 px-6 font-tiempos font-light">
      <div className="flex justify-between gap-48">
        <Info />
        <Time />
      </div>
      <ButtonGif setGifVisible={setGifVisible}/> 
    </nav>
  )
}

export default Navbar
