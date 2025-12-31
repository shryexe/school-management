import Dashboard from './Dashboard'

export default function Hero() {
  return (
    <section className="w-full px-6 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-light-gray-bg rounded-full mb-6">
            <span className="text-xs font-semibold text-accent">New</span>
            <span className="w-1 h-1 bg-dark-gray rounded-full"></span>
            <span className="text-xs text-dark-gray">Smart school dashboard</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-black leading-tight mb-6">
            Simplify School Management, Empower Education
          </h1>
          
          <p className="text-lg text-dark-gray mb-8 leading-relaxed">
            An all-in-one platform for managing students, fees, schedules, and performance. 
            Designed for schools, teachers, and administrators.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button className="px-6 py-3 text-sm font-medium text-white bg-accent rounded-lg hover:bg-black transition-colors">
              Start for Schools
            </button>
            <button className="px-6 py-3 text-sm font-medium text-black border border-border-gray rounded-lg hover:bg-light-gray-bg transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Demo
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-xs font-medium text-white"
                  style={{ backgroundColor: `hsl(${i * 60}, 40%, 60%)` }}
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-dark-gray">
              <span className="font-semibold text-black">15k+</span> students & educators
            </p>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-2xl">
          <Dashboard />
        </div>
      </div>
    </section>
  )
}
