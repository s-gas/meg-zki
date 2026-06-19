import './Button.css'

const StarSvg = () => {
  return (
    <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      width="40" height="40" viewBox="-264 -264 528 528">
      <polygon transform="scale(1.09,1.09)"
        points="-36.16358,-87.30662 0,-233.85776 36.16358,-87.30662 165.36241,-165.36241 87.30662,-36.16358 233.85776,0 87.30662,36.16358 165.36241,165.36241 36.16358,87.30662 0,233.85776 -36.16358,87.30662 -165.36241,165.36241 -87.30662,36.16358 -233.85776,0 -87.30662,-36.16358 -165.36241,-165.36241 -36.16358,-87.30662 "
        fill="currentColor"
      />
    </svg>
  )
}

const ButtonGif = () => {
  return (
    <button className="button">
      <StarSvg />
    </button>
  )
}

export default ButtonGif
