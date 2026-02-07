import { Mail, Instagram, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Scarcity Badge */}
        <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Limited to 3 partnerships per month
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
          Ready to Turn Your Audience Into Revenue?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Get in touch and let us show you the revenue hiding in your audience.
        </p>

        {/* Primary CTA - Calendly */}
        <div className="mt-10">
          <Button size="lg" className="gap-2 rounded-full px-10 py-6 text-lg font-semibold" asChild>
            <a
              href="https://calendly.com/martin-monetize"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="h-5 w-5" />
              Book a Free Strategy Call
            </a>
          </Button>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-10 flex max-w-xs items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm text-muted-foreground">or reach out directly</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Secondary contacts */}
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 rounded-full px-8 text-base font-semibold text-foreground bg-transparent"
            asChild
          >
            <a href="mailto:martin.monetize@gmail.com">
              <Mail className="h-4 w-4" />
              martin.monetize@gmail.com
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 rounded-full px-8 text-base font-semibold text-foreground bg-transparent"
            asChild
          >
            <a
              href="https://www.instagram.com/martin__monetize/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
              @martin__monetize
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
