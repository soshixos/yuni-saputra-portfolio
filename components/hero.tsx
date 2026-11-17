import { ArrowDown, Leaf } from 'lucide-react'
import { profile } from '@/lib/profile'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b bg-secondary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-3 py-1 text-sm font-medium text-secondary-foreground">
          <Leaf className="size-4 text-primary" aria-hidden="true" />
          {profile.title}
        </p>
        <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight md:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80 md:text-xl">
          {profile.intro}
        </p>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {profile.interest}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-lg bg-primary px-5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in touch
          </a>
          <a
            href="#education"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-primary/25 bg-background px-5 font-medium text-secondary-foreground transition-colors hover:bg-accent"
          >
            Learn more
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
