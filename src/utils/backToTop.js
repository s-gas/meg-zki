const backToTop = (mode = "auto") => {
  window.scrollTo(
    {
      top: 0,
      behavior: mode,
    }
  );
}

export default backToTop
