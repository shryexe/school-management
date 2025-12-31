export default function LogosRow() {
  const logos = [
    { name: 'Stanford', icon: 'S' },
    { name: 'Harvard', icon: 'H' },
    { name: 'MIT', icon: 'M' },
    { name: 'Oxford', icon: 'O' },
    { name: 'Cambridge', icon: 'C' },
    { name: 'Yale', icon: 'Y' },
  ]

  return (
    <section className="w-full px-6 lg:px-20 py-12 border-t border-border-gray">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-dark-gray mb-8">
          Trusted by leading educational institutions worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 opacity-40 grayscale hover:opacity-60 transition-opacity"
            >
              <div className="w-8 h-8 bg-dark-gray rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">{logo.icon}</span>
              </div>
              <span className="text-lg font-semibold text-dark-gray">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
