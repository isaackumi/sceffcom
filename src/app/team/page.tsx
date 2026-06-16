'use client'

import { siteContent } from '@/data/content'
import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'

function MemberCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="editorial-card flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage">
        <User className="h-5 w-5 text-forest" aria-hidden />
      </div>
      <div>
        <h4 className="font-medium text-ink">{name}</h4>
        <p className="mt-0.5 text-sm text-ink-muted">{role}</p>
      </div>
    </div>
  )
}

export default function TeamPage() {
  const tm = siteContent.teamMembers
  const hasExtendedTeam =
    tm.advisoryBoard.length > 0 ||
    tm.associateMembers.length > 0 ||
    tm.team.length > 0 ||
    tm.regionalLeaders.length > 0 ||
    tm.internationalRepresentatives.length > 0

  return (
    <div className="min-h-screen bg-cream">
      <PageHeader eyebrow="Team" title="Our Team" description={tm.intro} variant="forest" />

      <section className="section-padding border-b border-border">
        <div className="container">
          <p className="section-eyebrow mb-8">Leadership</p>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,280px)_1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-border">
              <Image
                src={tm.founder.image}
                alt={tm.founder.name}
                fill
                className="object-cover"
                sizes="280px"
                priority
              />
            </div>
            <div>
              <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">{tm.founder.name}</h2>
              <p className="mt-2 font-medium text-terracotta">{tm.founder.title}</p>
              <p className="mt-2 text-sm italic text-ink-muted">{tm.founder.subtitle}</p>
              <p className="mt-6 text-[17px] leading-relaxed text-ink-muted">{tm.founder.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {!hasExtendedTeam && (
        <section className="section-padding bg-sage text-center">
          <div className="container max-w-xl">
            <p className="text-[16px] leading-relaxed text-ink-muted">{tm.registeredNote}</p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Enquire about training
            </Link>
          </div>
        </section>
      )}

      {tm.advisoryBoard.length > 0 && (
        <section className="section-padding border-b border-border">
          <div className="container">
            <p className="section-eyebrow mb-6">Advisory Board</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tm.advisoryBoard.map((m) => (
                <MemberCard key={m.name} name={m.name} role={m.role} />
              ))}
            </div>
          </div>
        </section>
      )}

      {tm.associateMembers.length > 0 && (
        <section className="section-padding border-b border-border bg-parchment">
          <div className="container">
            <p className="section-eyebrow mb-6">Associate Members</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {tm.associateMembers.map((m) => (
                <MemberCard key={m.name} name={m.name} role={m.role} />
              ))}
            </div>
          </div>
        </section>
      )}

      {tm.team.length > 0 && (
        <section className="section-padding border-b border-border">
          <div className="container">
            <p className="section-eyebrow mb-6">Operations</p>
            <div className="grid gap-4 md:grid-cols-2">
              {tm.team.map((t) => (
                <div key={t.role} className="editorial-card">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-faint">{t.role}</p>
                  <p className="mt-2 font-medium text-ink">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tm.regionalLeaders.length > 0 && (
        <section className="section-padding border-b border-border bg-sage">
          <div className="container">
            <p className="section-eyebrow mb-6">Regional Representatives</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tm.regionalLeaders.map((r) => (
                <MemberCard key={r.region} name={r.name} role={r.region} />
              ))}
            </div>
          </div>
        </section>
      )}

      {tm.internationalRepresentatives.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <p className="section-eyebrow mb-6">International</p>
            <div className="grid gap-4 md:grid-cols-2">
              {tm.internationalRepresentatives.map((int) => (
                <div key={int.country} className="editorial-card">
                  <h4 className="font-medium text-ink">{int.country}</h4>
                  <p className="mt-2 text-ink-muted">{int.names.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
