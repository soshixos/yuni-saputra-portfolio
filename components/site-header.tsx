import { Sprout } from 'lucide-react'
import { profile } from '@/lib/profile'

const links = [
  { href: '#education', label: 'Education' },
  { href: '#languages', label: 'Languages' },
  { href: '#project', label: 'Project' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-heading font-semibold">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sprout className="size-4" aria-hidden="true" />
          </span>
          {profile.name}
        </a>
        <nav aria-label="Sections" className="hidden sm:block">
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
