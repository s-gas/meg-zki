import Link from './Link'

const SayHi = () => {
  return (
    <div className="section" id="say-hi">
      <p className="title">(SAY HI)</p>
      <div>
        <div><Link text="megankrawielitzki@gmail.com" link="mailto:megankrawielitzki@gmail.com" /></div>
        <div><Link text="LinkedIn" link="https://www.linkedin.com/in/meg-krawielitzki-6a096bba/" /></div>
        <div><Link text="Instagram" link="https://www.instagram.com/meg.zki/" /></div>
      </div>
    </div>
  )
}

export default SayHi
