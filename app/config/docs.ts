import { MainNavItem, SidebarNavItem } from "@/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  chartsNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Find Work",
      href: "/jobs",
    },
    {
      title: "My Jobs",
      href: "/jobs",
    },
    {
      title: "Messages",
      href: "/messages",
    },
    {
      title: "Proposals",
      href: "/proposals",
    },
    {
      title: "Contracts",
      href: "/contracts",
    },
    {
      title: "Reports",
      href: "/reports",
    },
    {
      title: "Settings",
      href: "/settings",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Overview",
          href: "/docs",
          items: [],
        },
        {
          title: "Creating an Account",
          href: "/docs/create-account",
          items: [],
        },
        {
          title: "Profile Setup",
          href: "/docs/profile-setup",
          items: [],
        },
      ],
    },
    {
      title: "Freelancing",
      items: [
        {
          title: "Finding Jobs",
          href: "/docs/finding-jobs",
          items: [],
        },
        {
          title: "Submitting Proposals",
          href: "/docs/submitting-proposals",
          items: [],
        },
        {
          title: "Managing Contracts",
          href: "/docs/managing-contracts",
          items: [],
        },
        {
          title: "Earnings & Withdrawals",
          href: "/docs/earnings",
          items: [],
        },
      ],
    },
    {
      title: "Clients",
      items: [
        {
          title: "Posting Jobs",
          href: "/docs/posting-jobs",
          items: [],
        },
        {
          title: "Reviewing Proposals",
          href: "/docs/reviewing-proposals",
          items: [],
        },
        {
          title: "Managing Contracts",
          href: "/docs/client-managing-contracts",
          items: [],
        },
        {
          title: "Payments & Invoices",
          href: "/docs/payments",
          items: [],
        },
      ],
    },
    {
      title: "Account Settings",
      items: [
        {
          title: "Profile & Visibility",
          href: "/docs/profile-visibility",
          items: [],
        },
        {
          title: "Security & Privacy",
          href: "/docs/security-privacy",
          items: [],
        },
        {
          title: "Notification Settings",
          href: "/docs/notifications",
          items: [],
        },
      ],
    },
  ],
  chartsNav: [
    {
      title: "Earnings & Reports",
      items: [
        {
          title: "Earnings Overview",
          href: "/docs/charts/earnings-overview",
          items: [],
        },
        {
          title: "Work Hours Report",
          href: "/docs/charts/work-hours-report",
          items: [],
        },
        {
          title: "Client Spending Report",
          href: "/docs/charts/client-spending",
          items: [],
        },
      ],
    },
    {
      title: "Analytics",
      items: [
        {
          title: "Job Success Score",
          href: "/docs/charts/job-success-score",
          items: [],
        },
        {
          title: "Proposals Sent",
          href: "/docs/charts/proposals-sent",
          items: [],
        },
        {
          title: "Contract Performance",
          href: "/docs/charts/contract-performance",
          items: [],
        },
      ],
    },
  ],
};
