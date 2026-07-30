export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-9">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-accent/15 border border-accent/35 flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm bg-accent" />
            </div>
            <span className="font-display font-bold text-text-primary tracking-tight">Redeployer</span>
          </div>

          {/* Copyright + email */}
          <div className="flex items-center gap-5 font-sans text-text-muted">
            <span>© 2026 Redeployer</span>
            <span className="w-px h-3 bg-gray-200" />
            <a
              href="mailto:hello@redeployer.co"
              className="hover:text-text-secondary transition-colors duration-200"
            >
              hello@redeployer.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
