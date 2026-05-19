export const CASES = {
  "shared-inbox": {
    title: "Shared Inbox & Email Follow-Up Administration Process",
    label: "Email Inbox Processing & Task Assignment Workflow",

    type: "Practical case based on real operational workflows",

    context: "Operations team handling daily client requests, order updates, and internal coordination using Microsoft 365 tools.",

    scope: [
      "50+ emails per day",
      "Shared inbox environment",
      "Daily operational workload",
      "Coordination across team members"
    ],

    desc: `Structured email management workflow to convert incoming requests into assigned tasks and ensure consistent follow-up across the team.`,

    summary: [
      "Organized 50+ incoming emails per day into a clear workflow",
      "Converted emails into assigned tasks with deadlines",
      "Improved team visibility and reduced missed responses"
    ],

    before: [
      "No task tracking system",
      "Emails used as main workflow",
      "No ownership of requests",
      "No visibility of pending work"
    ],

    after: [
      "Tasks tracked in Planner",
      "Clear ownership assigned",
      "Centralized team visibility",
      "Structured follow-up process"
    ],

    problem: `The team managed a shared inbox receiving 50+ emails per day, including orders, delivery changes, and client requests.
There was no clear system to assign responsibility or track progress.

As a result:

• Emails were missed or answered late  
• Multiple people responded to the same request  
• Tasks were hidden inside email threads  
• No visibility of pending work`,

    approach: `To solve this, I focused on three key principles:

• Create clear ownership of every request  
• Make all work visible to the team  
• Keep the system simple and easy to use  

The solution was designed using existing Microsoft 365 tools without adding complexity.`,

    implementation: [
      "Created a dedicated Team and channel for operations",
      "Added a Planner board to centralize all incoming requests",
      "Defined workflow stages: New, In Progress, Waiting, Done",
      "Converted incoming emails into Planner tasks",
      "Assigned responsibility for each request",
      "Added deadlines to ensure follow-up",
      "Used Planner within Teams as the central workspace"
    ],

    result: [
      "Full visibility of incoming requests",
      "Clear ownership across the team",
      "Reduced missed or duplicated responses",
      "Faster and more consistent follow-up"
    ],

    tools: [
      { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
      { name: "Planner", icon: "/app-logos/workflow_tools/logo_planner.svg" },
      { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
    ],
  },

  "document-management": {
    title: "Document Management & Shared Library Organization",
    label: "Shared Document Structure & Version Control System",

    type: "Practical case based on real operational workflows",

    context: "Teams working with shared files across OneDrive, SharePoint, and Microsoft Teams without standardized structure.",

    scope: [
      "Multiple shared folders",
      "Cross-team collaboration",
      "High document usage",
      "Version control challenges"
    ],

    desc: `Structured shared document environments to improve access, reduce duplication, and ensure version clarity across teams.`,

    summary: [
      "Centralized shared documents into a clear structure",
      "Reduced duplicate files and version confusion",
      "Made information easier to find and maintain"
    ],

    before: [
      "Files scattered across multiple locations",
      "Duplicate documents and unclear versions",
      "No naming conventions",
      "Time lost searching for files"
    ],

    after: [
      "Centralized document libraries",
      "Clear folder hierarchy",
      "Consistent naming conventions",
      "Faster document access"
    ],

    problem: `Shared folders across OneDrive, Teams, and SharePoint lacked structure and consistency.
Files were duplicated, scattered, and poorly named.

As a result:

• Difficulty finding the correct documents  
• Multiple versions of the same file  
• Time lost searching or recreating files  
• No clear ownership of shared information`,

    approach: `The focus was to create a simple and scalable structure:

• Centralize document storage  
• Define clear naming and organization rules  
• Make file access intuitive for any team member  

All changes were designed to be easy to adopt without disrupting daily work.`,

    implementation: [
      "Analyzed existing folder structures and identified duplication issues",
      "Designed a clear folder hierarchy by department and function",
      "Defined simple naming conventions for files and folders",
      "Centralized documents into shared libraries (SharePoint / Teams)",
      "Removed duplicate and outdated files",
      "Ensured only one active version per document",
      "Guided team on correct document storage practices"
    ],

    result: [
      "Faster access to documents",
      "Reduced duplication and version conflicts",
      "Clear and consistent file organization",
      "Improved collaboration across teams",
      "Less time spent searching for information"
    ],

    tools: [
      { name: "SharePoint", icon: "/app-logos/core_tools/logo_sharepoint.svg" },
      { name: "OneDrive", icon: "/app-logos/core_tools/logo_one-drive.svg" },
      { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
      { name: "Word", icon: "/app-logos/productivity_tools/logo_word.svg" },
    ],
  },

  "task-tracking": {
    title: "Task Tracking & Team Workflow Management",
    label: "Task Management & Follow-Up System",

    type: "Practical case based on real operational workflows",

    context: "Teams managing daily tasks across emails, chats, and informal communication without centralized tracking.",

    scope: [
      "Multiple task sources",
      "Team coordination",
      "Daily operations tracking",
      "Deadline management"
    ],

    desc: `Centralized task tracking system to improve visibility, ownership, and follow-up across daily operations.`,

    summary: [
      "Centralized tasks into one shared system",
      "Improved ownership and deadline tracking",
      "Reduced missed tasks and follow-up gaps"
    ],

    before: [
      "Tasks managed through emails and chats",
      "No centralized task overview",
      "Unclear responsibilities",
      "Missed deadlines"
    ],

    after: [
      "Centralized task board",
      "Clear ownership and responsibilities",
      "Tracked deadlines and priorities",
      "Improved team coordination"
    ],

    problem: `Tasks were managed across emails, chats, and informal communication without a structured system.

As a result:

• Tasks were lost or forgotten  
• No clear overview of ongoing work  
• Deadlines were not tracked  
• Limited visibility across the team`,

    approach: `The goal was to create clarity and control:

• Make all tasks visible in one place  
• Assign clear ownership  
• Track deadlines and progress  

The system needed to be simple, practical, and easy to maintain daily.`,

    implementation: [
      "Analyzed how tasks were handled across emails and Teams",
      "Created a centralized task board using Planner / Lists",
      "Defined clear task stages (New, In Progress, Completed)",
      "Assigned responsibility for each task",
      "Added deadlines and priorities",
      "Used Teams for centralized communication",
      "Promoted daily updates and usage"
    ],

    result: [
      "Clear visibility of tasks and responsibilities",
      "Improved follow-up and accountability",
      "Reduced missed deadlines",
      "Better coordination across the team",
      "More structured daily operations"
    ],

    tools: [
      { name: "Planner", icon: "/app-logos/workflow_tools/logo_planner.svg" },
      { name: "Lists", icon: "/app-logos/core_tools/logo_sharepoint-lists.svg" },
      { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
      { name: "OneNote", icon: "/app-logos/productivity_tools/logo_one-note.svg" },
    ],
  },

  "administrative-support": {
    title: "Daily Administrative Process Optimization",
    label: "Structured Administrative Workflow & Task Support",

    type: "Practical case based on real operational workflows",

    context: "Back-office administrative environment with repetitive daily tasks handled manually across multiple tools.",

    scope: [
      "Repetitive daily tasks",
      "Manual processes",
      "Cross-tool workflows",
      "Operational support activities"
    ],

    desc: `Optimized repetitive administrative processes to reduce manual work, improve consistency, and increase operational efficiency.`,

    summary: [
      "Standardized repetitive administrative tasks",
      "Reduced duplicated work and manual errors",
      "Improved consistency in daily operations"
    ],

    before: [
      "Manual repetitive processes",
      "Inconsistent task execution",
      "Duplicate work across team members",
      "No structured workflows"
    ],

    after: [
      "Standardized workflows",
      "Reduced manual effort",
      "Improved task consistency",
      "Better operational visibility"
    ],

    problem: `Daily administrative work was handled manually across different tools without structure.

As a result:

• Time lost on repetitive tasks  
• Errors due to inconsistent handling  
• Duplicate work across team members  
• Limited visibility on daily operations`,

    approach: `The approach focused on simplifying and standardizing:

• Identify repetitive tasks  
• Create clear workflows  
• Reduce manual effort  
• Ensure consistent execution  

All improvements were designed to be practical and easy to maintain.`,

    implementation: [
      "Identified repetitive administrative tasks",
      "Standardized task handling with simple templates",
      "Organized recurring tasks into clear workflows",
      "Used Excel and Forms to structure data input",
      "Reduced duplication by centralizing processes",
      "Improved clarity on responsibilities",
      "Ensured consistency in task execution"
    ],

    result: [
      "Reduced time spent on repetitive work",
      "Fewer errors in daily operations",
      "More consistent workflows",
      "Improved efficiency in back-office processes",
      "Better visibility of daily activities"
    ],

    tools: [
      { name: "Excel", icon: "/app-logos/productivity_tools/logo_excel.svg" },
      { name: "Forms", icon: "/app-logos/productivity_tools/logo_forms.svg" },
      { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
      { name: "Power Automate", icon: "/app-logos/workflow_tools/logo_power-automate.svg" },
    ],
  }
}