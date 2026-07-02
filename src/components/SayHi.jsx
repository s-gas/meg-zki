import Link from './Link'
import SerifItalic from './SerifItalic'
import SectionHeader from './SectionHeader'

const SayHi = () => {
  return (
    <>
      <SectionHeader>(SAY HI)</SectionHeader>
      <div>
        <div><Link text="megankrawielitzki@gmail.com" link="mailto:megankrawielitzki@gmail.com" /></div>
        <div><Link text="LinkedIn" link="https://www.linkedin.com/in/meg-krawielitzki-6a096bba/" arrow="true"/></div>
        <div><Link text="Instagram" link="https://www.instagram.com/meg.zki/" arrow="true"/></div>
      </div>
    </>
  )
}

export default SayHi
