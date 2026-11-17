import {
  ArrowUpRight,
  ClipboardList,
  GraduationCap,
  Languages,
  Mail,
} from 'lucide-react'
import { profile } from '@/lib/profile'
import { Section } from '@/components/section'

export function EducationSection() {
  return (
    <Section id="education" title="Education" icon={GraduationCap}>
      <ol className="relative flex flex-col gap-4 border-l-2 border-accent pl-6">
        {profile.education.map((item) => (
          <li key={item.degree} className="relative rounded-xl border bg-card p-5">
            <span
              aria-hidden="true"
              className="absolute -left-[33px] top-6 size-4 rounded-full border-4 border-background bg-primary"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <span className="rounded-full bg-secondary px-3 py-0.5 text-sm font-medium text-secondary-foreground">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-muted-foreground">{item.school}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function LanguagesSection() {
  return (
    <Section id="languages" title="Languages" icon={Languages}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {profile.languages.map((language) => (
          <li key={language.name} className="rounded-xl border bg-card p-5">
            <h3 className="text-lg font-semibold">{language.name}</h3>
            {language.level && (
              <p className="mt-1 text-muted-foreground">{language.level}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function ProjectSection() {
  const { project } = profile
  return (
    <Section id="project" title="Project" icon={ClipboardList}>
      <article className="flex flex-col gap-4 rounded-2xl border bg-secondary p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
        <div>
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="mt-1 text-muted-foreground">{project.description}</p>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 shrink-0 items-center gap-2 self-start rounded-lg bg-primary px-5 font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:self-auto"
          >
            View {project.name}
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </article>
    </Section>
  )
}

export function ContactSection() {
  return (
    <Section id="contact" title="Contact" icon={Mail}>
      <div className="rounded-2xl bg-primary p-8 text-primary-foreground md:p-10">
        <p className="text-balance font-heading text-2xl font-semibold md:text-3xl">
          Reach me via Handshake.
        </p>
      </div>
    </Section>
  )
}
