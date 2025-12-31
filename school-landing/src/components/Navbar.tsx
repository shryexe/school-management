export default function Navbar() {
  const navLinks = ['Home', 'Features', 'Platform', 'Plans', 'Resources']

  return (
    <nav className="w-full px-6 lg:px-20 py-4 flex items-center justify-between bg-white border-b border-border-gray">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
          </div>
          <span className="text-xl font-semibold text-black">EduFlow</span>
        </div>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="text-dark-gray hover:text-black transition-colors text-sm font-medium">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 text-sm font-medium text-black border border-border-gray rounded-lg hover:bg-light-gray-bg transition-colors">
          Sign In
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-black transition-colors">
          Enroll Now
        </button>
      </div>
    </nav>
  )
}
