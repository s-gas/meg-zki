import Section from './Section'
import About from './About'
import Awards from './Awards'
import SayHi from './SayHi'

const Sections = () => {
  return (
    <div className="flex justify-between mt-68">
      <Section>
        <About />
      </Section>
      <Section>
        <Awards />
      </Section>
      <Section>
        <SayHi />
      </Section>
    </div>
  )
}

export default Sections
