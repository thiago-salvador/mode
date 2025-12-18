"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { content } from "@/lib/content";

// Fallback team members if content.team.members is empty
const teamMembers = content.team?.members || [
  {
    name: "Thiago Salvador",
    role: "Co-Founder & AI Specialist",
    bio: "10+ years building products | Ex-Startup Lisboa | AI Product Expert",
    image: "/team/thiago-salvador.jpg",
    linkedin: "https://www.linkedin.com/in/salvadorthiago/",
  },
  {
    name: "Annika Löwe",
    role: "Co-Founder & Business Development",
    bio: "Former YC Product Lead | 50+ founders helped | Launch specialist",
    image: "/team/annika-lowe.jpg",
    linkedin: "https://www.linkedin.com/in/annika-l%C3%B6we-618b1863/",
  },
];

// Team Member Card Component
function TeamMemberCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard className="h-full hover:scale-105 transition-all duration-300 group">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with Gradient Glow */}
          <div className="relative w-32 h-32 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-2xl font-bold text-textPrimary mb-2 group-hover:gradient-text transition-all duration-300">
            {member.name}
          </h3>

          {/* Role */}
          <p className="text-sm font-semibold text-textSecondary uppercase tracking-wider mb-4">
            {member.role}
          </p>

          {/* Bio */}
          <p className="text-textMuted text-sm mb-6 leading-relaxed">
            {member.bio}
          </p>

          {/* LinkedIn Link */}
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/30"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function Team() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="eyebrow text-center mb-4">
            {content.team?.eyebrow || "Meet the team"}
          </div>
          <h2 className="heading-1 text-textPrimary mb-6 max-w-3xl mx-auto">
            {content.team?.title || "Built by founders, for founders"}
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed">
            We&apos;ve been in your shoes. We know the frustration of slow agencies and the pressure to ship fast. That&apos;s why we built Mode.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Why We Started Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <GlassCard className="bg-gradient-to-r from-pink-50/50 to-orange-50/50 border-2 border-pink-100">
            <h3 className="text-xl font-bold mb-4 text-center text-textPrimary">
              Why we started Mode
            </h3>
            <p className="text-textSecondary leading-relaxed text-center">
              After shipping 20+ MVPs and seeing countless founders struggle with slow development cycles,
              we built Mode to solve one problem:{" "}
              <span className="font-bold gradient-text">how do you ship a testable product in 2 weeks, not 6 months?</span>{" "}
              Every feature, every process, every decision we make is designed to help you launch faster.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
