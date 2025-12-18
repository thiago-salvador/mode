import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { Linkedin, Github } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
}

const team: TeamMember[] = [
  {
    name: "Thiago Salvador",
    role: "co-Founder & AI Specialist",
    bio: "10+ years building products. Ex-Startup Lisboa, specialized in rapid MVP development and AI integration.",
    image: "/team/thiago-salvador.jpg",
    linkedin: "https://www.linkedin.com/in/salvadorthiago/",
  },
  {
    name: "Annika Löwe",
    role: "Co-Founder & Business Development",
    bio: "Former product lead at YC-backed startups. Helped 50+ founders validate and launch their ideas.",
    image: "/team/annika-lowe.jpg",
    linkedin: "https://www.linkedin.com/in/annika-l%C3%B6we-618b1863/",
  },
];

export function Team() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            eyebrow="The team"
            title="Built by founders, for founders"
          />
        </FadeIn>

        <div className="mt-12 text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-textSecondary leading-relaxed">
            We&apos;ve been in your shoes. We know the frustration of slow agencies, unreliable freelancers,
            and the pressure to ship fast. That&apos;s why we built Mode—to help ambitious founders launch faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* Photo */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <h3 className="font-heading text-2xl font-bold mb-2 text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-accentFrom uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-textSecondary leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors group"
                    >
                      <Github className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-bold mb-4 text-center text-gray-900">
              Why we started Mode
            </h3>
            <p className="text-gray-700 leading-relaxed text-center">
              After shipping 20+ MVPs and seeing countless founders struggle with slow development cycles,
              we built Mode to solve one problem: <span className="font-semibold">how do you ship a testable product in 2 weeks, not 6 months?</span> Every feature, every process, every decision we make is designed to help you launch faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
