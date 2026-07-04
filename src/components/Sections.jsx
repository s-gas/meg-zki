import Section from './Section'
import About from './About'
import Awards from './Awards'
import SayHi from './SayHi'

const Sections = () => {
  return (
    <div className="flex flex-col gap-20 lg:flex-row lg:gap-2 justify-between mt-20 md:mt-40 lg:mt-68">
      <Section>
        <About />
      </Section>
      <Section>
        <Awards />
      </Section>
      <Section size="small">
        <SayHi />
      </Section>
    </div>
  )
}

export default Sections
