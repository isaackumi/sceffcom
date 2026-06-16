'use client'

import { siteContent } from '@/data/content'
import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'

function MemberCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex items-start gap-4 border border-border bg-stone p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-stone-dark">
        <User className="h-5 w-5 text-gold" aria-hidden />
      </div>
      <div>
        <h4 className="font-medium text-midnight">{name}</h4>
        <p className="mt-0.5 text-sm text-slate">{role}</p>
      </div>
    </div>
  )
}

export default function TeamPage() {
  const tm = siteContent.teamMembers
  const hasExtended =
    tm.advisoryBoard.length > 0 ||
    tm.associateMembers.length > 0 ||
    tm.team.length > 0 ||
    tm.regionalLeaders.length > 0 ||
    tm.internationalRepresentatives.length > 0

  return (
    <div className="min-h-screen bg-stone">
      <PageHeader eyebrow="Team" title="Our Team" description={tm.intro} dark />

      <section className="section-pad border-b border-border bg-stone">
        <div className="container-editorial grid items-start gap-12 lg:grid-cols-12">
          <div className="relative aspect-square lg:col-span-4">
            <Image src={tm.founder.image} alt={tm.founder.name} fill className="object-cover" sizes="400px" priority />
          </div>
          <div className="lg:col-span-8">
            <p className="label-gold mb-4">Leadership</p>
            <h2 className="headline-section">{tm.founder.name}</h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-gold">{tm.founder.title}</p>
            <p className="mt-2 text-sm italic text-slate">{tm.founder.subtitle}</p>
            <p className="body-lead mt-8">{tm.founder.bio}</p>
          </div>
        </div>
      </section>

      {!hasExtended && (
        <section className="section-pad bg-stone-dark text-center">
          <div className="container-editorial max-w-xl">
            <p className="text-slate">{tm.registeredNote}</p>
            <Link href="/contact" className="btn-gold mt-8 inline-flex">Enquire about training</Link>
          </div>
        </section>
      )}

      {tm.advisoryBoard.length > 0 && (
        <section className="section-pad border-b border-border">
          <div className="container-editorial">
            <p className="label-gold mb-8">Advisory Board</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tm.advisoryBoard.map((m) => (
                <MemberCard key={m.name} name={m.name} role={m.role} />
              ))}
            </div>
          </div>
        </section>
      )}

      {tm.associateMembers.length > 0 && (
        <section className="section-pad border-b border-border bg-stone-dark">
          <div className="container-editorial">
            <p className="label-gold mb-8">Associate Members</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {tm.associateMembers.map((m) => (
                <MemberCard key={m.name} name={m.name} role={m.role} />
              ))}
            </div>
          </div>
        </section>
      )}

      {tm.team.length > 0 && (
        <section className="section-pad border-b border-border">
          <div className="container-editorial">
            <p className="label-gold mb-8">Operations</p>
            <div className="grid gap-4 md:grid-cols-2">
              {tm.team.map((t) => (
                <div key={t.role} className="border border-border p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-faint">{t.role}</p>
                  <p className="mt-2 font-medium text-midnight">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tm.regionalLeaders.length > 0 && (
        <section className="section-pad border-b border-border bg-stone-dark">
          <div className="container-editorial">
            <p className="label-gold mb-8">Regional Representatives</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tm.regionalLeaders.map((r) => (
                <MemberCard key={r.region} name={r.name} role={r.region} />
              ))}
            </div>
          </div>
        </section>
      )}

      {tm.internationalRepresentatives.length > 0 && (
        <section className="section-pad">
          <div className="container-editorial">
            <p className="label-gold mb-8">International</p>
            <div className="grid gap-4 md:grid-cols-2">
              {tm.internationalRepresentatives.map((int) => (
                <div key={int.country} className="border border-border p-6">
                  <h4 className="font-medium text-midnight">{int.country}</h4>
                  <p className="mt-2 text-slate">{int.names.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
