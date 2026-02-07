import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-heading text-xl font-bold text-foreground">
          Launch<span className="text-primary">Fellow</span>
        </span>
        <Button size="sm" className="rounded-full px-5 text-sm font-semibold" asChild>
          <a href="https://calendly.com/martin-monetize" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </Button>
      </div>
    </header>
  )
}
