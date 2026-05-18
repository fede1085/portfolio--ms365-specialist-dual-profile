export const PORTFOLIO_CASES = {
  "tenant-structure-design": {
    title: "Microsoft 365 Tenant Structure Design",
    label: "Tenant Structure & Workspace Blueprint",
    type: "Portfolio case based on Microsoft 365 information architecture",

    context:
      "Small or growing teams using Microsoft 365 without a clear structure for users, groups, Teams, SharePoint sites, mailboxes and permissions.",

    scope: [
      "Microsoft 365 tenant structure",
      "Users, groups and shared workspaces",
      "Teams and SharePoint organization",
      "Operational ownership and access planning",
    ],

    desc:
      "Designed a clear Microsoft 365 tenant structure that translates business roles, departments and workflows into an organized digital workplace.",

    summary: [
      "Mapped business structure into Microsoft 365 components",
      "Created a clearer model for users, groups, Teams and mailboxes",
      "Prepared a practical blueprint before implementation",
    ],

    before: [
      "Unclear user and group structure",
      "Teams and SharePoint created without a naming logic",
      "Permissions managed manually",
      "No clear ownership of digital workspaces",
    ],

    after: [
      "Clear tenant structure",
      "Defined users, groups and Teams logic",
      "Better access boundaries",
      "Reusable structure for future setup or automation",
    ],

    problem:
      `Microsoft 365 environments often grow without planning.

Users, groups, Teams, shared mailboxes and permissions are created as needed, but without a clear structure.

As a result:

• Ownership becomes unclear
• Permissions are hard to understand
• Teams and SharePoint sites become duplicated
• The tenant becomes difficult to manage as the business grows`,

    approach:
      `The approach was to translate the business structure into a simple Microsoft 365 model.

The focus was on:

• Departments
• Roles
• Responsibilities
• Collaboration spaces
• Access boundaries

The goal was not to over-engineer the tenant, but to create a practical structure that people can understand and maintain.`,

    implementation: [
      "Mapped departments and roles into a basic tenant model",
      "Defined which Teams and SharePoint spaces were needed",
      "Outlined group and mailbox ownership",
      "Created a simple naming logic for workspaces",
      "Prepared the structure before any technical setup",
      "Documented the logic for future review or automation",
    ],

    result: [
      "Clearer Microsoft 365 structure",
      "Better understanding of ownership and access",
      "Reduced risk of duplicated workspaces",
      "Stronger foundation for future automation",
    ],

    tools: [
      { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
      { name: "SharePoint", icon: "/app-logos/core_tools/logo_sharepoint.svg" },
      { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
      { name: "Excel", icon: "/app-logos/productivity_tools/logo_excel.svg" },
    ],
  },

  "sharepoint-teams-architecture": {
    title: "SharePoint & Teams Workspace Architecture",
    label: "Collaboration Spaces & Document Structure",
    type: "Portfolio case based on Microsoft 365 workspace organization",

    context:
      "Teams working across Microsoft Teams, SharePoint, OneDrive and shared files without a clear structure for collaboration or document ownership.",

    scope: [
      "Teams structure",
      "SharePoint sites",
      "Document libraries",
      "Folder and ownership logic",
    ],

    desc:
      "Structured Teams and SharePoint workspaces so documents, conversations and ownership are easier to follow.",

    summary: [
      "Designed Teams around departments, workflows or projects",
      "Structured SharePoint sites and document libraries",
      "Improved clarity around ownership and information location",
    ],

    before: [
      "Files spread across Teams, SharePoint, OneDrive and personal folders",
      "Unclear document ownership",
      "Repeated or duplicated folders",
      "No consistent workspace logic",
    ],

    after: [
      "Clear Teams and SharePoint structure",
      "Defined purpose for each workspace",
      "Better document location and ownership",
      "Simpler collaboration model",
    ],

    problem:
      `Without a clear structure, Teams and SharePoint can become confusing.

Files are stored in many places, conversations happen in different channels, and people are unsure where information belongs.

As a result:

• Documents are difficult to find
• People duplicate folders and files
• Teams become too broad or unclear
• SharePoint sites lack purpose`,

    approach:
      `The approach was to organize collaboration spaces around real work.

The structure was based on:

• Departments
• Workflows
• Projects
• Ownership
• Access needs

The goal was to make each workspace easy to understand before adding more tools or automation.`,

    implementation: [
      "Reviewed the main collaboration needs",
      "Defined Teams by department, project or workflow",
      "Mapped SharePoint sites to clear business purposes",
      "Structured document libraries around daily work",
      "Defined simple ownership rules",
      "Created a clear structure for folders, files and shared spaces",
    ],

    result: [
      "Easier document access",
      "Clearer collaboration spaces",
      "Less confusion between Teams, SharePoint and OneDrive",
      "Better structure for future growth",
    ],

    tools: [
      { name: "SharePoint", icon: "/app-logos/core_tools/logo_sharepoint.svg" },
      { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
      { name: "OneDrive", icon: "/app-logos/core_tools/logo_one-drive.svg" },
      { name: "Lists", icon: "/app-logos/core_tools/logo_sharepoint-lists.svg" },
    ],
  },

  "identity-groups-permissions": {
    title: "Users, Groups & Permissions Model",
    label: "Identity, Groups & Access Structure",
    type: "Portfolio case based on Microsoft 365 access planning",

    context:
      "Microsoft 365 environment where access is handled manually or inconsistently across users, groups, Teams and SharePoint sites.",

    scope: [
      "User role mapping",
      "Microsoft 365 groups",
      "Security groups",
      "Permission matrices",
    ],

    desc:
      "Created a clear access model based on users, departments, groups and responsibility instead of random manual permissions.",

    summary: [
      "Mapped users to roles and departments",
      "Defined group purpose and access boundaries",
      "Prepared permission matrices for review or automation",
    ],

    before: [
      "Permissions assigned directly to users",
      "Groups without clear purpose",
      "Difficult to know who has access to what",
      "No clear access review structure",
    ],

    after: [
      "Users mapped to roles and groups",
      "Clearer permission model",
      "Groups with defined purpose",
      "Better access documentation",
    ],

    problem:
      `Permissions become difficult to manage when access is given manually or without a clear structure.

Direct user permissions, unclear groups and undocumented access decisions make the environment harder to control.

As a result:

• Access is difficult to review
• Users may have unnecessary permissions
• Groups are hard to understand
• Changes become risky as the company grows`,

    approach:
      `The approach was to build a simple access model before implementation.

The focus was on:

• Who needs access
• Why they need it
• Which group should provide it
• Who owns the access decision

The model was designed to be understandable by both business users and technical administrators.`,

    implementation: [
      "Mapped users by department and role",
      "Identified common access needs",
      "Defined Microsoft 365 groups and security groups",
      "Created a simple permission matrix",
      "Separated ownership from access usage",
      "Prepared the structure for documentation or future automation",
    ],

    result: [
      "Clearer access structure",
      "Less manual permission handling",
      "Better visibility of group purpose",
      "Stronger foundation for access review",
    ],

    tools: [
      { name: "SharePoint", icon: "/app-logos/core_tools/logo_sharepoint.svg" },
      { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
      { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
      { name: "Excel", icon: "/app-logos/productivity_tools/logo_excel.svg" },
    ],
  },

  "outlook-shared-mailbox-workflows": {
    title: "Outlook & Shared Mailbox Workflow Design",
    label: "Shared Inbox Triage & Follow-Up Structure",
    type: "Portfolio case based on Microsoft 365 operational workflow design",

    context:
      "Teams using shared mailboxes for client requests, internal coordination, operational follow-up and daily communication.",

    scope: [
      "Shared mailbox structure",
      "Inbox triage",
      "Ownership and backup ownership",
      "Follow-up workflow",
    ],

    desc:
      "Turned shared mailboxes into structured operational workflows with clearer ownership, categories and follow-up logic.",

    summary: [
      "Defined shared mailbox ownership",
      "Created triage and follow-up logic",
      "Connected email intake with task visibility",
    ],

    before: [
      "Emails lost in shared inboxes",
      "Unclear responsibility",
      "Slow follow-up",
      "No clear escalation process",
    ],

    after: [
      "Clear mailbox ownership",
      "Defined triage logic",
      "Better follow-up visibility",
      "Stronger connection between email and tasks",
    ],

    problem:
      `Shared mailboxes often become messy when several people work from the same inbox.

Without ownership and follow-up rules, emails can be missed, duplicated or answered late.

As a result:

• Nobody knows who owns each request
• Emails stay unread or unresolved
• Follow-up depends on memory
• Important requests get buried`,

    approach:
      `The approach was to treat the shared mailbox as an intake workflow.

The structure focused on:

• Ownership
• Categories
• Triage
• Escalation
• Follow-up

The goal was to keep the system simple enough for daily use.`,

    implementation: [
      "Defined mailbox owners and backup owners",
      "Created basic folder and category logic",
      "Mapped email types to follow-up actions",
      "Connected important emails to task tracking",
      "Defined when requests should move to Teams or Planner",
      "Created a simple operating model for daily mailbox work",
    ],

    result: [
      "Clearer inbox ownership",
      "Fewer missed requests",
      "More consistent follow-up",
      "Better operational visibility",
    ],

    tools: [
      { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
      { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
      { name: "Planner", icon: "/app-logos/workflow_tools/logo_planner.svg" },
      { name: "Lists", icon: "/app-logos/core_tools/logo_sharepoint-lists.svg" },
    ],
  },

  "automation-ready-blueprints": {
    title: "Automation-Ready Microsoft 365 Blueprints",
    label: "Structured Data for Documentation & Automation",
    type: "Portfolio case based on Microsoft 365 planning and automation readiness",

    context:
      "Microsoft 365 setup planning where users, groups, mailboxes, permissions and workspaces need to be documented before possible automation.",

    scope: [
      "CSV-style planning tables",
      "Naming conventions",
      "Users, groups and mailboxes",
      "Automation preparation",
    ],

    desc:
      "Prepared structured Microsoft 365 planning data that can support documentation, review and future automation.",

    summary: [
      "Created structured planning tables",
      "Applied naming and ownership logic",
      "Prepared data for safer automation planning",
    ],

    before: [
      "Manual setup difficult to repeat",
      "No clear source of truth",
      "Naming decisions made case by case",
      "Automation risky because data is unstructured",
    ],

    after: [
      "Structured setup blueprint",
      "Reusable planning data",
      "Consistent naming logic",
      "Better preparation for PowerShell or Microsoft Graph",
    ],

    problem:
      `Manual Microsoft 365 setup becomes difficult to scale when there is no structured data behind it.

Users, groups, mailboxes and permissions may be created one by one, without a reusable plan.

As a result:

• Setup is hard to repeat
• Reviews are difficult
• Naming becomes inconsistent
• Automation becomes risky`,

    approach:
      `The approach was to prepare a clear blueprint before automation.

The focus was on structured data:

• Users
• Groups
• Mailboxes
• Permissions
• Ownership
• Naming conventions

This makes the setup easier to review before anything is created.`,

    implementation: [
      "Prepared CSV-style matrices for users, groups and mailboxes",
      "Defined naming conventions",
      "Mapped ownership and access logic",
      "Structured data for review before implementation",
      "Prepared the blueprint for possible PowerShell or Microsoft Graph usage",
      "Reduced uncertainty before technical execution",
    ],

    result: [
      "Clearer implementation plan",
      "More consistent Microsoft 365 setup",
      "Better documentation",
      "Safer foundation for future automation",
    ],

    tools: [
      { name: "Excel", icon: "/app-logos/productivity_tools/logo_excel.svg" },
      { name: "Forms", icon: "/app-logos/productivity_tools/logo_forms.svg" },
      { name: "SharePoint", icon: "/app-logos/core_tools/logo_sharepoint.svg" },
      { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
    ],
  },
};