import Link from './Link'
import About from './About'
import Awards from './Awards'
import SayHi from './SayHi'
import './Sections.css'

const Sections = () => {
  return (
    <div className="sections">
      <About />
      <Awards />
      <SayHi />
    </div>
  )
}

export default Sections
