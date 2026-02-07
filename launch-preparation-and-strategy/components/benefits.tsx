import { DollarSign, Settings, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    number: "1",
    title: "Owned Revenue Streams",
    description:
      "Stop waiting on sponsors. We build digital products your audience actually wants. You own the transaction, the customer data, and the long-term revenue.",
  },
  {
    icon: Settings,
    number: "2",
    title: "Zero Operational Burden",
    description:
      "You keep creating content. Launch Fellow handles product creation, backend systems, funnels, tech, and optimization. You don't have to manage a team or learn a single line of code.",
  },
  {
    icon: TrendingUp,
    number: "3",
    title: "Revenue From Day One",
    description:
      "We don't charge you a dime upfront. No service fees. No hidden costs. We only make money when you make money. We share revenue from the products we build together.",
  },
]

export function Benefits() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
          What You Get with Launch Fellow
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {benefits.map((item) => (
            <div key={item.title} className="relative rounded-2xl border border-border bg-card p-8">
              <span className="font-heading text-5xl font-bold text-primary/20">
                {item.number}
              </span>
              <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
