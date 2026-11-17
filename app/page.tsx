import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import {
  ContactSection,
  EducationSection,
  LanguagesSection,
  ProjectSection,
} from '@/components/profile-sections'
import { profile } from '@/lib/profile'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <EducationSection />
        <LanguagesSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <footer className="border-t">
        <p className="mx-auto max-w-4xl px-6 py-6 text-sm text-muted-foreground">
          {`© ${new Date().getFullYear()} ${profile.name}`}
        </p>
      </footer>
    </>
  )
}
