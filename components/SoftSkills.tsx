import React from "react"
import { ClipboardList, MailCheck, Laptop, Bot, FolderCheck } from "lucide-react"

// NEW IMPORT ADDED
import { useLocation } from "react-router-dom"

type Tool = {
  name: string
  icon: string
}

type CasePreviewItem = {
  icon: string
  label: string
  slug: string
  desc: string
  problem: string
  solution: string[]
  tools: Tool[]
}

type SoftSkillsProps = {
  data: {
    eyebrow: string
    title: string
    items: CasePreviewItem[]
  }
}

const iconMap: Record<string, React.ReactNode> = {
  folder: <FolderCheck size={22} strokeWidth={2} />,
  mail: <MailCheck size={22} strokeWidth={2} />,
  task: <ClipboardList size={22} strokeWidth={2} />,
  laptop: <Laptop size={22} strokeWidth={2} />,
  bot: <Bot size={22} strokeWidth={2} />,
}

export default function SoftSkills({ data }: SoftSkillsProps) {

  // NEW VARIABLE ADDED
  const location = useLocation()
  return (
    <section id="skills" className="py-16 bg-white pb-4 sm:py-20">
      <div className="text-center">
        <h3 className="text-sm font-medium text-[#0067B8] uppercase tracking-widest">
          {data.eyebrow}
        </h3>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333131]">
          {data.title}
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="space-y-16">
          {data.items.map((skill, index) => (
            <div
              key={skill.label}
              className={`flex flex-col sm:flex-row items-start gap-6 ${index !== data.items.length - 1 ? "pb-12 border-b border-gray-200" : ""
                }`}
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#F7F7F7] text-[#0067B8] border border-gray-300">
                {iconMap[skill.icon] || iconMap.folder}
              </div>

              <div className="flex-1 text-left">
                <h4 className="text-xl font-bold text-[#333131]">
                  {skill.label}
                </h4>

                <p className="text-[#333131] mt-2">
                  {skill.desc}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs text-[#333131] uppercase font-semibold mb-1">
                      Problem
                    </p>
                    <p className="text-gray-600">
                      {skill.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#333131] uppercase font-semibold mb-1">
                      How I support
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      {skill.solution.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs text-[#333131] uppercase font-semibold mb-3">
                    Tools
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {skill.tools.map((tool, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 px-2 py-1 rounded-sm bg-[#F7F7F7] border border-gray-200"
                      >
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-4 h-4 object-contain"
                        />
                        <span className="text-xs font-medium text-gray-700">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    // href={`/case/${skill.slug}`}
                    // NEW HREF ADDED
                    href={`/case/${skill.slug}${location.search}`}
                    className="text-sm font-regular text-[#0067B8] underline"
                  >
                    View Case Study →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}