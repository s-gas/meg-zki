const Portrait = ({visible}) => {
  return (
      <img
        className={`sm:absolute sm:-top-20 sm:left-28 sm:max-w-none sm:w-70 ${visible ? "sm:flex" : "sm:hidden"}`}
        src="/images/mk.jpg" 
        alt="Portrait of Meg Krawielitzki" 
      />
  )
}

export default Portrait
