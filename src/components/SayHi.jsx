import Link from './Link'

const SayHi = () => {
  return (
    <div className="section" id="say-hi">
      <p className="section-title">(SAY HI)</p>
      <div className="section-content">
        <div><Link text="megankrawielitzki@gmail.com" link="mailto:megankrawielitzki@gmail.com" /></div>
        <div><Link text="LinkedIn" link="https://www.linkedin.com/in/meg-krawielitzki-6a096bba/" arrow="true"/></div>
        <div><Link text="Instagram" link="https://www.instagram.com/meg.zki/" arrow="true"/></div>
      </div>
    </div>
  )
}

export default SayHi
