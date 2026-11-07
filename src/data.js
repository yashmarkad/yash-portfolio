// Update these links with your actual profiles before publishing.
export const profile = {
  name: 'Yash Markad',
  role: 'AI Engineer · Generative AI · Agentic AI',
  email: 'yashmarkad41510@gmail.com',
  phone: '+91 72493 63053',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/yash-markad-4a5727353',
  github: 'https://github.com/yashmarkad',
}

export const skills = [
  { group: 'Programming', items: ['Python', 'Java', 'SQL'] },
  { group: 'Generative AI', items: ['LLMs', 'Agentic AI', 'Multi-Agent Systems', 'RAG', 'Prompt Engineering', 'MCP', 'A2A', 'A2UI', 'AG-UI'] },
  { group: 'Frameworks & APIs', items: ['CrewAI', 'CrewAI Enterprise', 'LangChain', 'FastAPI', 'Hugging Face', 'OpenAI API', 'Vertex AI'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'S3', 'Bedrock', 'EC2', 'DynamoDB', 'Transcribe', 'Docker', 'GitHub Actions', 'Jenkins'] },
  { group: 'Data & Vector Search', items: ['PostgreSQL', 'FAISS', 'ChromaDB', 'Pinecone', 'HydraDB'] },
  { group: 'Enterprise Integrations', items: ['Microsoft Graph API', 'SharePoint', 'Outlook', 'Microsoft Fabric', 'ServiceNow'] },
]

export const projects = [
  {
    number: '01',
    title: 'TAM Concierge',
    type: 'Enterprise AI · Agentic workflows',
    featured: true,
    description: 'An AI-powered support assistant that helps Technical Account Managers draft context-aware responses, identify sentiment, and deflect routine IT issues while keeping a human reviewer in control.',
    details: ['Built the CrewAI layer behind a single REST API for the TechSpace CIM experience.', 'Integrated Digital Twin through MCP to draft replies using historical email context.', 'Added sentiment scoring, category routing, confidence scoring, and knowledge links.', 'Designed an A2UI analytics experience with agent-selected components and computed metrics.'],
    stack: ['CrewAI Enterprise', 'MCP', 'FastAPI', 'A2UI', 'Microsoft Fabric'],
    impact: 'Phase 1 launched 7 September 2026',
    visual: '✳',
  },
  {
    number: '02',
    title: 'Earnings Intelligence',
    type: 'Workflow automation · Financial research',
    description: 'A scheduled multi-agent workflow that tracks earnings calls, prepares calendar invitations, and turns earnings materials into structured intelligence reports.',
    details: ['Built weekly discovery of upcoming earnings calls from company and investor-relations sources.', 'Automated Outlook invitations through Microsoft Graph.', 'Extracted financials, guidance, demand signals, AI signals, and M&A news into structured JSON.', 'Added idempotent updates, retries, and failure isolation.'],
    stack: ['CrewAI Enterprise', 'Parallel AI', 'Microsoft Graph', 'SharePoint', 'Outlook'],
    impact: 'Automated recurring research and reporting',
    visual: '↗',
  },
  {
    number: '03',
    title: 'Return Fraud & Defect Detection',
    type: 'Computer vision · Machine learning',
    description: 'A transfer-learning solution that inspects returned-product images to identify potential product mismatches and physical defects.',
    details: ['Built a ResNet-50 transfer-learning model using approximately 3,000 images.', 'Reached 86% reported accuracy on the project dataset.', 'Served predictions through FastAPI and deployed on AWS EC2.'],
    stack: ['Python', 'ResNet-50', 'Computer Vision', 'FastAPI', 'AWS EC2'],
    impact: '86% reported model accuracy',
    visual: '◉',
  },
  {
    number: '04',
    title: 'Tender Intelligence',
    type: 'RAG · Document intelligence',
    description: 'A retrieval-augmented pipeline that processes tender and contract documents and surfaces key terms and useful summaries.',
    details: ['Built a LangChain-based document retrieval and generation workflow.', 'Focused on extracting relevant terms and concise summaries from large document sets.'],
    stack: ['LangChain', 'RAG', 'Python', 'LLMs'],
    impact: 'Structured insights from lengthy documents',
    visual: '⌘',
  },
  {
    number: '05',
    title: 'Diabetic Retinopathy Detection',
    type: 'Deep learning · Medical imaging',
    description: 'A CNN-based image classification project that grades diabetic retinopathy severity from retinal images.',
    details: ['Trained a multi-class CNN classifier.', 'Achieved 98.29% reported accuracy on the project evaluation.', 'Built a web interface for image upload and prediction.'],
    stack: ['Python', 'CNN', 'Deep Learning', 'Computer Vision'],
    impact: '98.29% reported model accuracy',
    visual: '◎',
  },
  {
    number: '06',
    title: 'AI Productivity Tools',
    type: 'Generative AI · Internal automation',
    description: 'A collection of AI-enabled utilities for document generation, meeting scheduling, podcast creation, and presentation generation.',
    details: ['Created a document generator that returns files through AWS S3 pre-signed URLs.', 'Built natural-language meeting scheduling with Microsoft Graph.', 'Developed a CrewAI podcast pipeline with ElevenLabs text-to-speech.', 'Built MCP-based tools for PowerPoint and content generation.'],
    stack: ['CrewAI', 'AWS S3', 'Microsoft Graph', 'MCP', 'ElevenLabs'],
    impact: 'Reduced manual document work by about 40%',
    visual: '✧',
  },
]

export const experience = [
  {
    role: 'AI Developer',
    company: 'Genpact',
    location: 'Noida, India',
    period: 'Sep 2025 — Present',
    summary: 'Building enterprise-grade AI assistants, multi-agent workflows, and intelligent automation systems.',
    bullets: ['Led the TAM Concierge solution from design through security reviews and Phase 1 launch.', 'Developed earnings intelligence automation for recurring research and reporting.', 'Worked across enterprise APIs, MCP integrations, human-in-the-loop patterns, and AI-powered analytics.'],
  },
  {
    role: 'Trainee AI Developer',
    company: 'Nile Technologies Pvt. Ltd.',
    location: 'Noida, India',
    period: 'Jul 2025 — Aug 2025',
    summary: 'Worked on applied AI projects across computer vision, conversational AI, and document intelligence.',
    bullets: ['Built a ResNet-50 return-fraud and defect-detection model.', 'Developed a RAG-based public service desk assistant and tender intelligence pipeline.', 'Created an emotion-aware wellness bot and a multimodal generative interface.'],
  },
]

export const education = [
  { degree: 'PG-Diploma in Artificial Intelligence', institution: 'CDAC Noida', period: 'Feb 2025 — Aug 2025', result: '81.20%' },
  { degree: 'Bachelor of Engineering, Mechanical Engineering', institution: 'Savitribai Phule Pune University', period: 'Feb 2021 — Jun 2024', result: 'CGPA 8.99 / 10' },
]