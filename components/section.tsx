import type { LucideIcon } from 'lucide-react'

export function Section({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string
  title: string
  icon: LucideIcon
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20">
      <div className="mx-auto max-w-4xl px-6 py-14 md:py-16">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}
