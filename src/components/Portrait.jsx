const Portrait = ({visible}) => {
  return (
      <img className={`sm:absolute sm:-top-20 sm:left-28 sm:max-w-none sm:w-70 ${visible ? "sm:opacity-100" : "sm:opacity-0 sm:pointer-events-none"}`} src="/images/mk.jpg" alt="" />
  )
}

export default Portrait
