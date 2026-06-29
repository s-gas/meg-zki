import Link from './Link'

const About = () => {
  return (
    <div className="section" id="about">
      <p className="title">(ABOUT)</p>
      <p className="content">I’m Meg 👋 an independent digital designer driven by a concept-first approach when developing brand identities and crafting meaningful experiences. Originally from the UK and now residing in Berlin. Previously at <Link text="Fiasco Design" link="https://fiasco.design/" /> and  <Link text="true" link="https://www.truedigital.co.uk/" />.</p>
      <p className="content">Awarded a Master’s in Visual & Experience Design from the University of Europe for Applied Sciences under the direction of <Link text="Prof. Dr. Peter Crnokrak" link="https://theluxuryofprotest.com/" />.</p>
      <p className="content">Lately, I’ve been exploring the world of data-driven, generative, and interactive installation design.</p>
      <p className="footer">Get in touch for full portfolio and availability.</p>
    </div>
  )
}

export default About
