import Image from "next/image"

export function FounderStory() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-primary">
              <Image
                src="/images/martin.jpg"
                alt="Martin Georgev, founder of Launch Fellow"
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl text-balance">
                Why I Built Launch Fellow
              </h2>
              <p className="mt-1 text-sm font-medium text-primary">Martin Georgev, Founder</p>
            </div>
          </div>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              {"I watched creators with massive, loyal audiences struggle to pay their bills. They had trust and influence, but their income relied on late sponsor checks and 2% affiliate links."}
            </p>
            <p>
              {"They thought this was normal. It wasn't."}
            </p>
            <p>
              {"The problem wasn't their content; it was the lack of a system. So I built Launch Fellow. I started acting as a \u201Cshadow partner\u201D for creators\u2014building the products, funnels, and systems their audiences were already asking for."}
            </p>
            <p>
              {"Now, I run Launch Fellow as a dedicated partnership agency. No upfront costs. We share the upside. Because if you've already built the audience, you deserve to own the profit."}
            </p>
          </div>

          {/* Certificate */}
          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-background/50">
            <Image
              src="/images/certificate.png"
              alt="Consulting.com certification - Operator frameworks and systems by Iman Gadzhi"
              width={800}
              height={600}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Certified in Operator frameworks and systems by Consulting.com
          </p>
        </div>
      </div>
    </section>
  )
}
