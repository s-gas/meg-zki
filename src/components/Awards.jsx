import Link from './Link'
import SectionHeader from './SectionHeader'
import SectionFooter from './SectionFooter'

const Awards = () => {
  const awards = [
    {
      text: "BIMA Awards 2022: Aardman",
      link: "https://bima.co.uk/aardman-com-where-ux-meets-wonk-true/",
    },
    {
      text: "BIMA Awards 2022: UK Sport",
      link: "https://bima.co.uk/uk-sport-levelling-the-playing-field-in-elite-sport-true/",
    },
    {
      text: "Lovie Awards 2022 (Silver)",
      link: "https://winners.lovieawards.com/search/?sw=aardman&sort=&pg=1#w233749",
    },
    {
      text: "The Webby Awards 2022 (Honoree)",
      link: "https://winners.webbyawards.com/2022/websites-and-mobile-sites/general-desktop-mobile-sites/corporate-communications/213808/aardmancom--full-of-character",
    },
    {
      text: "CSS Design Awards 2022 (SOTD)",
      link: "https://www.cssdesignawards.com/sites/aardman/41131/",
    },
    {
      text: "Sports Business Awards 2022 (Bronze)",
      link: "https://sportsbusinessawards.co.uk/winners-2022/",
    },
    {
      text: "Awwwards 2022 (Honourable Mention)",
      link: "https://www.awwwards.com/sites/aardman",
    },
    {
      text: "The Drum Awards 2021 (Winner)",
      link: "https://www.thedrum.com/awards-case-study/how-uk-sport-encouraging-more-young-people-diverse-backgrounds-become-olympians",
    },
  ];

  return (
    <>
      <SectionHeader>(AWARDS)</SectionHeader>
      <div>
        { awards.map((award, i) => (
          <div key={i}><Link text={award.text} link={award.link} arrow="true"/></div>
        ))}
      </div>
      <SectionFooter>All awards were earned during my time working in-house and represent the collective achievement of an entire team (˶ᵔ ᵕ ᵔ˶)</SectionFooter>
    </>
  )
}

export default Awards
