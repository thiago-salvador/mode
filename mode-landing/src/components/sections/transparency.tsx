import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { Github, Folder, ExternalLink } from "lucide-react";

interface TransparencyItem {
  icon: "github" | "assets";
  title: string;
  description: string;
  preview: string;
  link: string;
  label: string;
}

const transparencyItems: TransparencyItem[] = [
  {
    icon: "github",
    title: "Production GitHub Repository",
    description: "Clean, documented code with proper Git history. See how we structure projects for maintainability and scalability.",
    preview: "Explore our coding standards and architecture",
    link: "https://github.com/mode-studio/sample-project",
    label: "GitHub Repo",
  },
  {
    icon: "assets",
    title: "Complete Design Assets",
    description: "All graphics, icons, images, and visual assets organized and ready to use. Everything you need to maintain brand consistency.",
    preview: "Browse asset library and style guide",
    link: "#",
    label: "Assets",
  },
];

const IconComponent = ({ type }: { type: "github" | "assets" }) => {
  const iconProps = { className: "w-8 h-8 text-white" };

  switch (type) {
    case "github":
      return <Github {...iconProps} />;
    case "assets":
      return <Folder {...iconProps} />;
  }
};

const getGradient = (type: "github" | "assets") => {
  switch (type) {
    case "github":
      return "from-gray-700 to-gray-900";
    case "assets":
      return "from-emerald-500 to-teal-600";
  }
};

export function Transparency() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            eyebrow="Complete transparency"
            title="See exactly what you're getting"
          />
        </FadeIn>

        <div className="mt-12 text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-textSecondary leading-relaxed">
            Unlike other agencies that hide their work behind NDAs, we show you real examples.
            Here&apos;s what every client receives—no surprises, no black boxes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {transparencyItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(item.icon)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${getGradient(item.icon)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent type={item.icon} />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold mb-3 text-gray-900 relative">
                {item.title}
              </h3>
              <p className="text-textSecondary leading-relaxed mb-6 relative">
                {item.description}
              </p>

              {/* Preview Link */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accentFrom hover:text-accentTo transition-colors group/link relative"
              >
                <span>{item.preview}</span>
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>

              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  Included
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 max-w-2xl">
            <p className="text-lg text-gray-700 font-medium mb-2">
              Every project includes full documentation, code comments, and deployment guides
            </p>
            <p className="text-sm text-gray-600">
              You&apos;ll never be locked in or dependent on us to make changes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
