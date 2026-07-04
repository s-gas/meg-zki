import ButtonScrollTop from './ButtonScrollTop'

const Footer = () => {
  return (
    <div className="flex justify-between mt-30 items-end">
      <p className="text-xs text-ink/60">© Meg Krawielitzki 2026</p>
      <div className="flex items-end gap-2">
        <p className="font-tiempos italic font-light text-sm text-ink/60">Back to top</p>
        <ButtonScrollTop />
      </div>
    </div>
  )
}

export default Footer
