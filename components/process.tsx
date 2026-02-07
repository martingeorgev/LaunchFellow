import { Search, Package, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit Your Channel",
    description:
      'We analyze your audience data to find the "hidden" revenue. No guessing. We find exactly what your audience is hungry to buy right now.',
  },
  {
    icon: Package,
    number: "02",
    title: "Build The Product",
    description:
      "Launch Fellow creates the digital product. You don't write, design, or code anything. We handle the heavy lifting of development.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch and Scale",
    description:
      "We set up the backend and launch to your audience. When sales happen, we split the revenue. You keep the majority; we keep a share for managing the growth.",
  },
]

export function Process() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          You Did the Hard Part
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          Now let us handle the revenue. Here's exactly how we partner with you.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <span className="font-heading text-6xl font-bold text-primary/15">
                {step.number}
              </span>
              <div className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
