import { MailCheck, Home } from "lucide-react"
import { useParams } from "react-router-dom"
import Header from './Header';

type Tool = {
  name: string
  icon: string
}

type CaseData = {
  title: string
  label: string
  type?: string
  context: string
  scope: string[]
  desc: string
  summary: string[]
  before: string[]
  after: string[]
  problem: string
  approach: string
  implementation: string[]
  result: string[]
  tools: Tool[]
}

type StudyCasesProps = {
  name: string
  cases: Record<string, CaseData>
}

export default function StudyCases({ name, cases }: StudyCasesProps) {

  const { slug } = useParams()

  const caseData = slug ? cases[slug] : undefined

  const caseKeys = Object.keys(cases)
  const currentIndex = caseKeys.indexOf(slug ?? "")

  const prevCase = caseKeys[currentIndex - 1]
  const nextCase = caseKeys[currentIndex + 1]

  if (!caseData) {
    return <div className="p-10">Case not found</div>
  }

  const skill = {
    icon: <MailCheck size={22} strokeWidth={2} />,
    label: caseData.label,
    desc: caseData.desc,
    problem: caseData.problem,
    summary: caseData.summary,
    approach: caseData.approach,
    solution: caseData.implementation,
    result: caseData.result,
    tools: caseData.tools,

    // 🔥 NUEVO
    context: caseData.context,
    scope: caseData.scope,
    before: caseData.before,
    after: caseData.after,
  }

  return (
    <>
      <section id="skills" className="bg-white pb-4">
        <Header name={name} />

        <div className="bg-[#F7F7F7] py-20 mb-20 border-b border-gray-200">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h3 className="text-sm font-medium text-[#0067B8] uppercase tracking-widest">
              Case Study
            </h3>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333131] mt-2">
              {caseData.title}
            </h2>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 px-6 sm:px-6 lg:px-8 mb-16">
          <div className="space-y-16">

            <div className="flex flex-col sm:flex-row items-start gap-6 pb-12">
              <div className="flex-1 text-left">

                <div className="mb-12 pb-12 border-b border-gray-200">
                  <p className="text-[#333131] mt-2">
                    {skill.desc}
                  </p>
                </div>

                <div className="space-y-14">

                  {/* Key Impact */}
                  <div>
                    <p className="text-xs text-[#333131] uppercase font-semibold mb-2">
                      Key Impact
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      {skill.summary.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Context */}
                  <div>
                    <p className="text-xs text-[#333131] uppercase font-semibold mb-4">
                      Context
                    </p>
                    <p className="text-gray-600">
                      {skill.context}
                    </p>
                  </div>

                  {/* Scope */}
                  <div>
                    <p className="text-xs text-[#333131] uppercase font-semibold mb-4">
                      Scope
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      {skill.scope.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Problem */}
                  <div>
                    <p className="text-xs text-[#333131] uppercase font-semibold mb-4">
                      Problem
                    </p>
                    <p className="text-gray-600 whitespace-pre-line">
                      {skill.problem}
                    </p>
                  </div>

                  {/* Before / After */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div>
                      <p className="text-xs text-[#333131] uppercase font-semibold mb-4">
                        Before
                      </p>
                      <ul className="space-y-1 text-gray-600">
                        {skill.before.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs text-[#333131] uppercase font-semibold mb-4">
                        After
                      </p>
                      <ul className="space-y-1 text-gray-600">
                        {skill.after.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Approach */}
                  <div>
                    <p className="text-xs text-[#333131] uppercase font-semibold mb-4">
                      Approach
                    </p>
                    <p className="text-gray-600 whitespace-pre-line">
                      {skill.approach}
                    </p>
                  </div>

                  {/* Implementation */}
                  <div>
                    <p className="text-xs text-[#333131] uppercase font-semibold mb-4">
                      How I support
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      {skill.solution.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div>
                    <p className="text-xs text-[#333131] uppercase font-semibold mb-4">
                      Result
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      {skill.result.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div>
                    <p className="text-xs text-[#333131] uppercase font-semibold mb-4">
                      Tools
                    </p>

                    <div className="flex flex-wrap gap-2">
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

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 BARRA FLOTANTE */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-sm px-4 py-2">

          {prevCase && (
            <a
              href={`/case/${prevCase}`}
              className="text-sm text-[#0067B8] font-regular underline"
            >
              ← Previous
            </a>
          )}

          <a
            href="/"
            className="flex items-center gap-1 text-sm font-regular text-[#333131] px-3 underline"
          >
            <Home size={16} />
          </a>

          {nextCase && (
            <a
              href={`/case/${nextCase}`}
              className="text-sm text-[#0067B8] font-regular underline"
            >
              Next →
            </a>
          )}

        </div>
      </div>
    </>
  )
}