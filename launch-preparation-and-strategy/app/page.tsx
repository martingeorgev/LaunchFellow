import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Engine } from "@/components/engine"
import { WhoFor } from "@/components/who-for"
import { Benefits } from "@/components/benefits"
import { FounderStory } from "@/components/founder-story"
import { Testimonials } from "@/components/testimonials"
import { Process } from "@/components/process"
import { Partnership } from "@/components/partnership"
import { CTA } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Engine />
        <WhoFor />
        <Benefits />
        <FounderStory />
        <Testimonials />
        <Process />
        <Partnership />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
