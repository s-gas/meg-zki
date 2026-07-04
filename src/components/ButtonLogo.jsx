import backToTop from '../utils/backToTop'

const ButtonLogo = ({children}) => {
  return (
    <button className="cursor-pointer hover:text-ink-hover" onClick={() => backToTop()}>{children}</button>
  )
}

export default ButtonLogo
