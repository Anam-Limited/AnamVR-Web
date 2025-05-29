import { Linkedin, GalleryHorizontalEnd, Code, Brain } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ishaanJain from "../src/assets/ishaan_jain.webp";

interface Team {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  backgroundColor: string;
  workHighlights: string[];
  icon: React.ReactNode;
  socialLinks: {
    linkedin?: string;
    portfolio?: string;
  };
}

const teams: Team[] = [
  {
    id: "ishaan-jain",
    name: "Ishaan Jain",
    role: "Website Developer",
    bio: "Built the AnamVR website and implemented the user interface for our mental wellness platform.",
    image: ishaanJain,
    backgroundColor: "bg-gradient-to-br from-amber-400 to-yellow-600",
    icon: <Code className="w-5 h-5" />,
    workHighlights: [
      "Designed & developed AnamVR website",
      "Built responsive user interface",
      "Implemented modern web technologies",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/ishaanj9",
      portfolio: "https://jaini.me",
    },
  },
  {
    id: "agustina-alvarez",
    name: "Agustina Alvarez",
    role: "Content Contributor",
    bio: "Agustina is a Dialectical Behavioural Therapist based in Córdoba, Argentina. She has contributed several mindfulness exercises to the app, drawing on her area of expertise.",
    image: "/placeholder.svg?height=400&width=300",
    backgroundColor: "bg-gradient-to-br from-green-500 to-emerald-600",
    icon: <Brain className="w-5 h-5" />,
    workHighlights: [
      "Developed therapeutic VR content",
      "Validated anxiety management techniques",
      "Created evidence-based interventions",
    ],
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/agustina-alvarez-ulfohn-520922191/",
    },
  },
  {
    id: "ishaan-jain",
    name: "Ishaan Jain",
    role: "Website Developer",
    bio: "Built the AnamVR website and implemented the user interface for our mental wellness platform.",
    image: ishaanJain,
    backgroundColor: "bg-gradient-to-br from-amber-400 to-yellow-600",
    icon: <Code className="w-5 h-5" />,
    workHighlights: [
      "Designed & developed AnamVR website",
      "Built responsive user interface",
      "Implemented modern web technologies",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/ishaanj9",
      portfolio: "https://jaini.me",
    },
  },
  {
    id: "ishaan-jain",
    name: "Ishaan Jain",
    role: "Website Developer",
    bio: "Built the AnamVR website and implemented the user interface for our mental wellness platform.",
    image: ishaanJain,
    backgroundColor: "bg-gradient-to-br from-amber-400 to-yellow-600",
    icon: <Code className="w-5 h-5" />,
    workHighlights: [
      "Designed & developed AnamVR website",
      "Built responsive user interface",
      "Implemented modern web technologies",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/ishaanj9",
      portfolio: "https://jaini.me",
    },
  },
  {
    id: "ishaan-jain",
    name: "Ishaan Jain",
    role: "Website Developer",
    bio: "Built the AnamVR website and implemented the user interface for our mental wellness platform.",
    image: ishaanJain,
    backgroundColor: "bg-gradient-to-br from-amber-400 to-yellow-600",
    icon: <Code className="w-5 h-5" />,
    workHighlights: [
      "Designed & developed AnamVR website",
      "Built responsive user interface",
      "Implemented modern web technologies",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/ishaanj9",
      portfolio: "https://jaini.me",
    },
  },
  {
    id: "ishaan-jain",
    name: "Ishaan Jain",
    role: "Website Developer",
    bio: "Built the AnamVR website and implemented the user interface for our mental wellness platform.",
    image: ishaanJain,
    backgroundColor: "bg-gradient-to-br from-amber-400 to-yellow-600",
    icon: <Code className="w-5 h-5" />,
    workHighlights: [
      "Designed & developed AnamVR website",
      "Built responsive user interface",
      "Implemented modern web technologies",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/ishaanj9",
      portfolio: "https://jaini.me",
    },
  },
];

export default function TeamPage() {
  // Animation hooks for each team member card
  const teamMemberAnimations = teams.map((_, index) =>
    useScrollAnimation({ delay: index * 200 })
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="pt-40 pb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2b2b2b] mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-800">
              Team
            </span>
          </h1>
          <p className="text-xl text-[#2b2b2b] max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet. Et similique quisquam ab internos
            distinctio aut tenetur dolores quo voluptatem debitis quo fuga
            galisum ut numquam libero qui dignissimos aspernatur.
          </p>
        </div>
      </div>

      {/* teams Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teams.map((team, index) => (
            <div
              key={team.id}
              ref={teamMemberAnimations[index].ref}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                teamMemberAnimations[index].isVisible
                  ? "animate-slide-up"
                  : "opacity-0"
              }`}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={team.image || "/placeholder.svg"}
                  alt={team.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Role Icon */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white">
                  {team.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2b2b2b] mb-1">
                  {team.name}
                </h3>
                <p className="text-lg font-semibold text-[#7745b8] mb-3">
                  {team.role}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {team.bio}
                </p>

                {/* Work Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Key Contributions:
                  </h4>
                  {team.workHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Social Links */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
                  {team.socialLinks.linkedin && (
                    <a
                      href={team.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                  {team.socialLinks.portfolio && (
                    <a
                      href={team.socialLinks.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100 transition-colors text-sm font-medium"
                    >
                      <GalleryHorizontalEnd className="w-4 h-4" />
                      Portfolio
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
