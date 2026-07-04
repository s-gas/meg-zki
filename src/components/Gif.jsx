const Gif = ({visible}) => {
  return (
    <div className={`mt-40 sm:mt-0 sm:fixed sm:inset-0 sm:z-10 ${visible ? "sm:opacity-100" : "sm:opacity-0 sm:pointer-events-none"} sm:flex sm:items-center sm:justify-center`}>
      <img src="/images/mk.gif" className="sm:w-1/2"/>
    </div>
  )
}

export default Gif
