export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  challenges: string[];
  solutions: string[];
}

export const projects: Project[] = [
  {
    slug: "gemini-ai-magic",
    title: "Gemini AI magic in Sheets, Docs and Forms",
    description:
      "A Generative AI assistant that automates content creation and enhances productivity in Google Workspace tools.",
    fullDescription:
      "A Generative AI assistant that automates content creation and enhances productivity in Google Workspace tools. Built AI integrations using Google Apps Script, Gen AI, and CLASP, reducing manual effort in data processing by 50%. Achieved 6+ million downloads and received 300+ reviews on the Google Workspace Marketplace, demonstrating strong adoption and positive user feedback.",
    image: "/projects/ai.jpg",
    techStack: [
      "React.js",
      "Redux",
      "Apps Script",
      "Gen AI",
      "GCP",
      "Clasp",
      "Tailwind",
    ],
    impact: "6M+ downloads, 50% manual effort reduction",
    liveUrl:
      "https://workspace.google.com/marketplace/app/ai_assist_for_gemini_in_sheets_docs_and/985356259375?flow_type=2",
    challenges: [
      "Integrating Generative AI within the execution limits of Google Workspace.",
      "Ensuring consistent data cleaning and transformation across large datasets.",
      "Handling a massive scale of 6M+ users reliably.",
    ],
    solutions: [
      "Leveraged Google Cloud Platform and efficient API routing for Gen AI requests.",
      "Developed robust macros to clean, transform, and standardize raw data.",
      "Optimized the React.js and Redux frontend for a seamless user experience inside Workspace.",
    ],
  },
  {
    slug: "smart-certificates",
    title: "Smart Certificates",
    description:
      "A productivity tool for Google Workspace designed to automate the creation, delivery, and management of digital certificates.",
    fullDescription:
      "The Smart Certificates add-on integrates directly with Google Forms, using Google Slides as a template engine to generate personalized certificates (in PDF or Image format) based on form responses or quiz scores. Engineered a high-scale document automation pipeline using Google Apps Script and REST APIs to integrate Google Forms, Slides, and Gmail, enabling the automated generation and delivery of personalized certificates for 130,000+ users with a 99.9% success rate.",
    image: "/projects/saas.jpg",
    techStack: [
      "React.js",
      "ShadCN",
      "Tailwind CSS",
      "Apps Script",
      "OAuth 2.0",
      "Clasp",
    ],
    impact: "160,000+ users, 99.9% delivery success rate",
    liveUrl:
      "https://workspace.google.com/marketplace/app/smart_certificates/1054114585510",
    challenges: [
      "Handling high-volume certificate generation without hitting API limits.",
      "Ensuring reliable delivery of emails with attachments.",
    ],
    solutions: [
      "Implemented batch processing and retry logic for high-volume, reliable certificate generation.",
      "Engineered a high-scale document automation pipeline serving 130,000+ users at a 99.9% delivery success rate.",
      "Integrated OAuth 2.0 for secure access to Google Workspace APIs.",
    ],
  },
  {
    slug: "adminplus-workspace-platform",
    title: "AdminPlus - Workspace Platform",
    description:
      "Simplifies and automates Google Workspace administration through a centralized console for managing users, services, and security.",
    fullDescription:
      "AdminPlus simplifies and automates Google Workspace administration through a centralized console for managing users, services, and security. Developed and deployed core modules improving admin workflow efficiency by 40%. Integrated Google Workspace APIs and Google Datastore, reducing manual admin tasks by 60%.",
    image: "/projects/analytics.jpg",
    techStack: [
      "React.js",
      "Material UI",
      "Redux",
      "Node.js",
      "Express.js",
      "Datastore",
    ],
    impact: "Reduced manual admin tasks by 60%",
    challenges: [
      "Optimizing complex dashboard rendering for a large number of administrative components.",
      "Synchronizing real-time data across Google Workspace APIs.",
    ],
    solutions: [
      "Enhanced dashboard performance by optimizing component rendering, cutting load times by 35%.",
      "Built AppSheet-powered admin modules for Google Workspace, driving real-time API automation.",
      "Developed secure, robust core modules using Node.js and Express.js.",
    ],
  },
  {
    slug: "leadclose-ai",
    title: "LeadClose.ai",
    description:
      "A voice-first WhatsApp marketing and sales automation platform using AI-driven voice agents for lead qualification.",
    fullDescription:
      "LeadClose.ai is designed to bridge the gap between text-based chat and human-like voice interactions. It leverages the official WhatsApp Business API to allow businesses to conduct voice calls, deploy AI-driven voice agents for lead qualification, and manage customer relations through a centralized team inbox.",
    image: "/projects/gas.jpg",
    techStack: [
      "Next.js",
      "Node.js",
      "Tailwind",
      "WhatsApp API",
      "Gemini APIs",
      "Gen AI",
    ],
    impact: "Automated real-time lead qualification",
    challenges: [
      "Bridging text-based chat with human-like voice interactions.",
      "Orchestrating real-time Speech-to-Text (STT) and Natural Language Processing (NLP).",
    ],
    solutions: [
      "Contributed to the engineering of a cutting-edge WhatsApp Sales CRM.",
      "Orchestrated Next.js and Node.js to deploy AI-driven Voice Agents.",
      "Integrated Gemini APIs for advanced natural language understanding and lead qualification.",
    ],
  },
];
