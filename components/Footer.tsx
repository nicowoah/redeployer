export default function Footer() {
  return (
    <footer className="bg-white border-t border-hairline-soft py-9">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm bg-white" />
            </div>
            <span className="font-display font-bold text-text-primary tracking-tight">Redeployer</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center font-sans text-text-muted">
            <span>© {new Date().getFullYear()} Redeployer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
