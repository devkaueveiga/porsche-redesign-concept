export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-4 md:px-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <div className="text-xl md:text-2xl mb-6 font-light tracking-[0.3em]">PORSCHE</div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Engineering excellence and motorsport heritage since 1948.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] font-light text-gray-500">
              Models
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  911
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Taycan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cayenne
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Panamera
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] font-light text-gray-500">
              Services
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Find a Dealer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Schedule Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Porsche Exclusive
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Motorsport
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] font-light text-gray-500">
              Connect
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
          <div>© 2026 Dr. Ing. h.c. F. Porsche AG. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors tracking-wide">
              Legal
            </a>
            <a href="#" className="hover:text-white transition-colors tracking-wide">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors tracking-wide">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}