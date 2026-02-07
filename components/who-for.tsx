import { Users, Zap, Rocket } from "lucide-react"

const audiences = [
  {
    icon: Users,
    title: "Creators With Proven Audiences",
    description:
      "You have consistent views and engagement. Your audience trusts you, but you lack a system to turn that trust into a business.",
  },
  {
    icon: Zap,
    title: "Influencers Tired of Sponsorships",
    description:
      "You're done waiting for brands to approve your scripts. You want revenue you control and income that scales.",
  },
  {
    icon: Rocket,
    title: "Visionaries Ready to Scale",
    description:
      "You want to own the upside of a digital product business without spending 40 hours a week learning tech and funnels.",
  },
]

export function WhoFor() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Who This Is For
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
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
