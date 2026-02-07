const links = ["Process", "Services", "Benefits", "Partnership"]

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <span className="font-heading text-lg font-bold text-foreground">
              Launch<span className="text-primary">Fellow</span>
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              Your shadow partner for creator revenue.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-6">
            {links.map((link) => (
              <span
                key={link}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                {link}
              </span>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>{"© 2026 Launch Fellow. All rights reserved."}</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-foreground transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-foreground transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
