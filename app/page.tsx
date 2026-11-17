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
        <div className="mx-auto flex max-w-4xl flex-col gap-1 px-6 py-6 text-sm text-muted-foreground">
          <p>{`© ${new Date().getFullYear()} ${profile.name}`}</p>
          <p className="text-xs">Built, run and deployed from the terminal (Vercel CLI).</p>
        </div>
      </footer>
    </>
  )
}
