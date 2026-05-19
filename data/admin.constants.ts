import { ADMIN_CASES } from "./adminStudyCases";

export const resumeData = {
  name: "Federico Mosqueira",
  location: "Antwerp, Belgium",
  languages: ["Spanish (native)", "English (fluent)", "Dutch (basic)"],
  availability: ["Freelance", "Contract"],
  contact: "hello@federicomosqueira.site | +31 6 42656946",
  address: "2018 - Antwerpen, Belgium",
  nationality: "Uruguayan",
  marital_status: "Married",

  professional_profile: {
    // title: "Back-Office Assistant | Operations Support",
    title: "Workplace Specialist | Information Architecture",
    summary:
      "Digital workplace specialist focused on organizing Microsoft 365 workspaces, information structures and operational workflows for clearer team collaboration."
    //  "I support daily operations by organizing information, managing documents and supporting administrative workflows to be more clear and efficient using Microsoft 365 tools."
    // I assist teams with daily administrative coordination and help manage tasks, emails and shared information across teams.
  },

  value_proposition: [
    "I help small teams and growing businesses structure their digital workplace using Microsoft 365. My focus is on organizing information, documents, shared spaces and daily workflows so teams can work with more clarity, less confusion and better operational control."
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
      role: "Digital Workplace & Operations Structure",
      location: "Antwerp",
      period: "2024–Present",
      highlights: [
        "Designed practical Microsoft 365 workspace structures for documents, tasks and team collaboration",
        "Organized information flows across tools such as SharePoint, Teams, Outlook and Planner",
        "Helped translate operational needs into clear digital structures that are easy for teams to use"
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
    title: "Microsoft 365 Workplace & Information Architecture",
    items: [
      {
        icon: "laptop",
        label: "Design Microsoft 365 Tenant Structures",
        slug: "tenant-structure-design",
        desc: "Turn business structure into a clear Microsoft 365 environment.",
        problem: "Microsoft 365 grows randomly, with unclear users, groups, Teams, mailboxes and permissions.",
        solution: [
          "Map departments, roles and responsibilities into a practical tenant structure",
          "Design users, groups, Teams, shared mailboxes and access boundaries",
          "Create a clear blueprint before implementation or automation",
        ],
        tools: [
          { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
          { name: "SharePoint", icon: "/app-logos/core_tools/logo_sharepoint.svg" },
          { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
          { name: "Excel", icon: "/app-logos/productivity_tools/logo_excel.svg" },
        ],
      },
      {
        icon: "folder",
        label: "Structure SharePoint & Teams Workspaces",
        slug: "sharepoint-teams-architecture",
        desc: "Organize collaboration spaces, document libraries and team ownership.",
        problem: "Files and conversations are spread across Teams, SharePoint, OneDrive and personal folders.",
        solution: [
          "Design Teams around departments, workflows or projects",
          "Structure SharePoint sites and document libraries with clear purpose",
          "Define ownership, access scope and simple information architecture",
        ],
        tools: [
          { name: "SharePoint", icon: "/app-logos/core_tools/logo_sharepoint.svg" },
          { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
          { name: "OneDrive", icon: "/app-logos/core_tools/logo_one-drive.svg" },
          { name: "Lists", icon: "/app-logos/core_tools/logo_sharepoint-lists.svg" },
        ],
      },
      {
        icon: "task",
        label: "Model Users, Groups & Permissions",
        slug: "identity-groups-permissions",
        desc: "Create clean access models based on roles, groups and responsibility.",
        problem: "Permissions are assigned manually, directly to users, or without clear ownership.",
        solution: [
          "Map users to departments, roles and access needs",
          "Design Microsoft 365 groups and security groups with clear purpose",
          "Prepare permission matrices for review, documentation or automation",
        ],
        tools: [
          { name: "SharePoint", icon: "/app-logos/core_tools/logo_sharepoint.svg" },
          { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
          { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
          { name: "Excel", icon: "/app-logos/productivity_tools/logo_excel.svg" },
        ],
      },
      {
        icon: "mail",
        label: "Design Outlook & Shared Mailbox Workflows",
        slug: "outlook-shared-mailbox-workflows",
        desc: "Turn shared inboxes into structured operational workflows.",
        problem: "Shared mailboxes become messy, with lost emails, unclear ownership and slow follow-up.",
        solution: [
          "Define mailbox owners, backup owners and responsibility flows",
          "Structure folders, categories, triage and escalation logic",
          "Connect email intake with Teams coordination and task follow-up",
        ],
        tools: [
          { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
          { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
          { name: "Planner", icon: "/app-logos/workflow_tools/logo_planner.svg" },
          { name: "Lists", icon: "/app-logos/core_tools/logo_sharepoint-lists.svg" },
        ],
      },
      {
        icon: "folder",
        label: "Prepare Automation-Ready Tenant Blueprints",
        slug: "automation-ready-blueprints",
        desc: "Create structured data that can support validation, documentation and future automation.",
        problem: "Manual Microsoft 365 setup is hard to repeat, review or scale when the business grows.",
        solution: [
          "Prepare CSV-style matrices for users, groups, mailboxes and permissions",
          "Apply consistent naming conventions and ownership logic",
          "Support safer PowerShell or Microsoft Graph automation planning",
        ],
        tools: [
          { name: "Excel", icon: "/app-logos/productivity_tools/logo_excel.svg" },
          { name: "Forms", icon: "/app-logos/productivity_tools/logo_forms.svg" },
          { name: "SharePoint", icon: "/app-logos/core_tools/logo_sharepoint.svg" },
          { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
        ],
      },
    ],
  },

  case_studies: ADMIN_CASES,
};