const Gif = ({visible}) => {
  return (
    <div className={`mt-40 sm:mt-0 sm:fixed sm:inset-0 sm:z-10 ${visible ? "sm:flex" : "sm:hidden"} sm:flex sm:items-center sm:justify-center`}>
      <img src="/images/mk.gif" className="sm:w-1/2" alt="mockups of past projects"/>
    </div>
  )
}

export default Gif
