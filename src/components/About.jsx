import Link from './Link'
import Name from './Name'

const About = () => {
  return (
    <div>
      <p>(ABOUT)</p>
      <p>I’m <Name /> 👋 an independent digital designer driven by a concept-first approach when developing brand identities and crafting meaningful experiences. Originally from the UK and now residing in Berlin. Previously at <Link text="Fiasco Design" link="https://fiasco.design/" /> and  <Link text="true" link="https://www.truedigital.co.uk/" />.</p>
      <p>Awarded a Master’s in Visual & Experience Design from the University of Europe for Applied Sciences under the direction of <Link text="Prof. Dr. Peter Crnokrak" link="https://theluxuryofprotest.com/" />.</p>
      <p>Lately, I’ve been exploring the world of data-driven, generative, and interactive installation design.</p>
      <p>Get in touch for full portfolio and availability.</p>
    </div>
  )
}

export default About
