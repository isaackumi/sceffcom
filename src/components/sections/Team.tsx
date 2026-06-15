import { siteContent } from '@/data/content'
import { User, Users, MapPin, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function MemberCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5 text-primary-600" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  const tm = siteContent.teamMembers

  return (
    <section id="team" className="py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
            <Users className="w-8 h-8 text-primary-500" /> Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{tm.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tm.advisoryBoard.map((m) => (
            <MemberCard key={m.name} name={m.name} role={m.role} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {tm.regionalLeaders.map((r) => (
            <MemberCard key={r.region} name={r.name} role={r.region} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-300"
          >
            View Full Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
