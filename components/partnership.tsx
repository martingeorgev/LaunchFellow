import { CheckCircle2 } from "lucide-react"

const features = [
  "Free Audit showing your biggest revenue opportunities",
  "Digital Product built specifically for your brand",
  "All Backend Systems handled invisibly by Launch Fellow",
  "Launch & Optimization managed by experts",
  "Zero Upfront Cost, Zero Fees, Zero Risk",
]

export function Partnership() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-primary/20 bg-card p-8 md:p-12">
          <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            The Partnership:{" "}
            <span className="text-primary">Your Shadow Operating Partner</span>
          </h2>
          <ul className="mt-10 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-base text-foreground md:text-lg">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <p className="font-heading text-lg font-semibold text-muted-foreground">
              Investment
            </p>
            <p className="mt-2 font-heading text-5xl font-bold text-primary">
              $0 Upfront
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
