import Link from './Link'

const SayHi = () => {
  return (
    <div className="section" id="say-hi">
      <p className="title">(SAY HI)</p>
      <Link text="megankrawielitzki@gmail.com" link="mailto:megankrawielitzki@gmail.com" />
      <Link text="LinkedIn" link="https://www.linkedin.com/in/meg-krawielitzki-6a096bba/" />
      <Link text="Instagram" link="https://www.instagram.com/meg.zki/" />
    </div>
  )
}

export default SayHi
