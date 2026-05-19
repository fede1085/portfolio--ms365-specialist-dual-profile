import { OFFICE_CASES } from "./officeStudyCases";

export const resumeData = {
  name: "Federico Mosqueira",
  location: "Antwerp, Belgium",
  languages: ["Spanish (native)", "English (B2)", "Dutch (basic A1)"],
  availability: ["Immediate", "Part-time", "Open to full-time"],
  contact: "fede1985.mosqueira@gmail.com | +31 6 42656946",
  address: "2018 - Antwerpen, Belgium",
  nationality: "Uruguayan",
  marital_status: "Married",

  professional_profile: {
    // title: "Back-Office Assistant | Operations Support",
    title: "Office Administrator | Operations Support",
    summary:
      "Administrative Support professional with strong digital skills, focused on Microsoft 365 organization, productivity and workflow improvement."
    //  "I support daily operations by organizing information, managing documents and supporting administrative workflows to be more clear and efficient using Microsoft 365 tools."
    // I assist teams with daily administrative coordination and help manage tasks, emails and shared information across teams.
  },

  value_proposition: [
    "Back-office operations support focused on bringing clarity, structure and reliability to daily administrative work. I help teams keep documents, tasks and communication organized using Microsoft 365 and simple ways of organizing daily work, including document handling and data organization."
  ],

  tool_stack: {
    core_tools: [
      "OneDrive",
      "Outlook",
      "SharePoint Lists",
      "SharePoint",
      "Teams"
    ],

    extended_toolset: [
      "Word",
      "Excel",
      "PowerPoint",
      "OneNote",
      "Copilot",
      "Forms"
    ],

    workflow_tools: [
      "Planner",
      "Power Apps",
      "Power Automate"
    ],

    admin_tools: [
      "MS365 Admin Center",
      "Teams Admin Center",
      "SharePoint Admin Center"
    ]
  },

  experience: [
    {
      role: "Administrative & Operations Support",
      location: "Antwerp",
      period: "2024–Present",
      highlights: [
        "Supported day-to-day organization of documents and information across digital tools",
        "Worked within Microsoft 365 applications and tools to assist daily operations, document handling and team coordination",
        "Helped organize daily work and keep administrative tasks clear and easy to follow"
      ]
    }
  ],

  personal_skills: [
    {
      title: "Analytical Thinking",
      description: "Understand how work flows and how to keep it organized."
    },
    {
      title: "Problem Solving",
      description: "Approach administrative challenges with practical and structured solutions."
    },
    {
      title: "Collaboration & Teamwork",
      description: "Work effectively with teams across shared environments."
    },
    {
      title: "Critical Thinking",
      description: "Evaluate information and make clear, practical decisions."
    },
    {
      title: "Digital Curiosity",
      description: "Interest in tools that improve productivity and daily work."
    },
    {
      title: "User-Focused Mindset",
      description: "Understand how tools support real users and daily operations."
    },
    {
      title: "Self-Management & Initiative",
      description: "Organize work independently and take initiative when needed."
    },
    {
      title: "Continuous Learning",
      description: "Adapt quickly and keep improving in digital environments."
    }
  ],

  services_portfolio: [],
  workflow_methodology: [],
  monetization_strategies: [],

  case_studies_preview: {
    eyebrow: "How I Help",
    title: "Operational Support & Back-Office Solutions",
    items: [
      {
        icon: "folder",
        label: "Organize Documents, Folders & Shared Libraries",
        slug: "document-management",
        desc: "Keep files, folders and shared information clear and easy to follow.",
        problem: "Scattered files, duplicate versions and unclear structures.",
        solution: [
          "Organize shared folders and document libraries",
          "Ensure teams find the correct version quickly",
          "Keep shared information clear and consistent",
        ],
        tools: [
          { name: "SharePoint", icon: "/app-logos/core_tools/logo_sharepoint.svg" },
          { name: "OneDrive", icon: "/app-logos/core_tools/logo_one-drive.svg" },
          { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
          { name: "Word", icon: "/app-logos/productivity_tools/logo_word.svg" },
        ],
      },
      {
        icon: "mail",
        label: "Manage Shared Inboxes & Email Follow-Up",
        slug: "shared-inbox",
        desc: "Bring structure to busy inboxes and daily communication.",
        problem: "Unclear ownership, lost emails and slow responses.",
        solution: [
          "Organize incoming emails into clear categories",
          "Assign responsibility and follow-up",
          "Turn emails into clear tasks for follow-up",
        ],
        tools: [
          { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
          { name: "Planner", icon: "/app-logos/workflow_tools/logo_planner.svg" },
          { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
        ],
      },
      {
        icon: "task",
        label: "Track Tasks, Requests & Project Progress",
        slug: "task-tracking",
        desc: "Help manage tasks, emails and shared information across teams.",
        problem: "Tasks lost in emails and missed deadlines.",
        solution: [
          "Organize requests and daily work into clear task lists",
          "Track responsibilities and progress across teams",
          "Keep deadlines visible and follow-ups clear",
        ],
        tools: [
          { name: "Planner", icon: "/app-logos/workflow_tools/logo_planner.svg" },
          { name: "Lists", icon: "/app-logos/core_tools/logo_sharepoint-lists.svg" },
          { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
          { name: "OneNote", icon: "/app-logos/productivity_tools/logo_one-note.svg" },
        ],
      },
      {
        icon: "laptop",
        label: "Support Daily Administrative Work",
        slug: "administrative-support",
        desc: "Reduce repetitive tasks and keep daily work consistent.",
        problem: "Manual tasks, duplicated work and lack of clarity.",
        solution: [
          "Keep repetitive tasks simple and organized",
          "Use office tools to track tasks and follow-ups",
          "Reduce errors in daily work",
        ],
        tools: [
          { name: "Excel", icon: "/app-logos/productivity_tools/logo_excel.svg" },
          { name: "Forms", icon: "/app-logos/productivity_tools/logo_forms.svg" },
          { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
        ],
      },
    ],
  },

  case_studies: OFFICE_CASES,
};