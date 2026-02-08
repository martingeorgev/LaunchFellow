import Image from "next/image"

const stats = [
  { label: "Revenue Generated", value: "$50,000+" },
  { label: "Engagement Rate", value: "2x" },
  { label: "Upfront Cost", value: "$0" },
]

const screenshots = [
  {
    src: "/testimonial1.png",
    alt: "DM conversation with Tom Coll showing excitement about Day 1 sales results",
  },
  {
    src: "/testimonials2.png",
    alt: "DM conversation with Tom Coll about pre-launch prep and 2x engagement on teaser stories",
  },
  {
    src: "/Reviews.png",
    alt: "4.63 star rating from 520 reviews with recent 5-star feedback",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Testimonials of Our Last Client
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our creator partners are saying after their launches
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <p className="font-heading text-2xl font-bold text-primary md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* DM Screenshots */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {screenshots.slice(0, 2).map((shot) => (
            <div
              key={shot.src}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <Image
                src={shot.src || "/placeholder.svg"}
                alt={shot.alt}
                width={460}
                height={920}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>

        {/* Reviews Screenshot */}
        <div className="mt-8 mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-card">
          <Image
            src={screenshots[2].src || "/placeholder.svg"}
            alt={screenshots[2].alt}
            width={870}
            height={500}
            className="h-auto w-full"
          />
        </div>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          520 verified ratings across our services
        </p>
      </div>
    </section>
  )
}
