import { CheckCircle2 } from "lucide-react"

const steps = [
  "We audit your channel",
  "We identify what your audience wants to buy",
  "We create the products",
  "We build the backend",
  "We handle the systems",
  "We split the revenue",
]

export function Engine() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            The Audience Equity Engine
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {"There's a different path. One where your audience becomes a financial asset. Where the people who trust you buy from you, not through you."}
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-base font-medium text-foreground">
                {step}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            You keep creating content. When products sell, we split the revenue.
          </p>
          <p className="mt-1 text-lg font-semibold text-foreground">
            You get the majority. Launch Fellow gets a share for running the
            entire engine.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {["No upfront costs", "No service fees", "No risk"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
