export interface Profile {
  name: string;
  role: string;
  headline: string;
  location: string;
  bio: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  github: string;
  linkedin: string;
  avatar: string;
  openToWork: boolean;
  statusText: string;
  university: string;
  graduationYear: number;
  cgpa: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  roleType: string;
  status: "Completed" | "In Progress" | "Certified";
  description: string;
  skills: string[];
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  score?: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "AI & ML" | "Data Science" | "Computer Vision" | "Algorithms";
  summary: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics?: string;
}

export interface ActivityItem {
  title: string;
  organization: string;
  role: string;
  icon: string;
  summary: string;
  bulletPoints: string[];
}

export const profile: Profile = {
  name: "Barath E",
  role: "B.Tech Artificial Intelligence & Machine Learning Student",
  headline: "Building intelligent systems with Python, Machine Learning, Data Science & Computer Vision.",
  location: "Chennai, Tamil Nadu, India",
  bio: "Artificial Intelligence & Machine Learning undergraduate with hands-on experience in Python, Machine Learning, Data Analysis, and software development projects. Active LeetCode problem solver and NCC Cadet, demonstrating strong analytical, leadership, and problem-solving abilities. Seeking opportunities to contribute technical skills and gain industry experience through internships and collaborative engineering projects.",
  email: "barath5366@gmail.com",
  phone: "+918754605821",
  phoneDisplay: "+91 87546 05821",
  github: "https://github.com/BarathElumalai22",
  linkedin: "https://www.linkedin.com/in/barath-e-421a88380",
  avatar: "/barath.jpg",
  openToWork: true,
  statusText: "Open to AI / ML & Data Science Internships",
  university: "Mewar University",
  graduationYear: 2028,
  cgpa: "8.0 / 10.0",
};

export const stats = [
  { label: "Academic CGPA", value: "8.0 / 10", caption: "Mewar University (Sem IV)" },
  { label: "LeetCode Practice", value: "150+", caption: "DSA Problems Solved" },
  { label: "Industrial Trainings", value: "3", caption: "XtraGrad & CTTC" },
  { label: "Core AI Tooling", value: "10+", caption: "Python, OpenCV & Scikit" },
  { label: "Languages", value: "4", caption: "Tamil, English, Hindi, Arabic" },
];

export const experience: ExperienceItem[] = [
  {
    title: "Artificial Intelligence Intern",
    company: "XtraGrad",
    period: "Ex-Intern",
    roleType: "Internship",
    status: "Completed",
    description: "Contributed to artificial intelligence models, computer vision pipelines, and production machine learning workflows.",
    skills: ["Artificial Intelligence", "Machine Learning", "Python", "Deep Learning", "Model Evaluation"],
    highlights: [
      "Assisted in developing and testing neural network architectures for classification and pattern recognition.",
      "Conducted preprocessing, augmentation, and feature extraction across custom datasets.",
      "Collaborated with cross-functional development teams following agile development methodology.",
    ],
  },
  {
    title: "Artificial Intelligence & Machine Learning Training",
    company: "CTTC Bhubaneswar",
    period: "Intensive Program",
    roleType: "Industrial Training",
    status: "Certified",
    description: "Hands-on specialized training covering supervised and unsupervised learning, NLP, neural architectures, and scikit-learn.",
    skills: ["Machine Learning", "NLP", "Scikit-Learn", "Model Optimization", "Python"],
    highlights: [
      "Trained predictive algorithms including Random Forests, Support Vector Machines, and Gradient Boosting.",
      "Implemented Natural Language Processing (NLP) tokenization, text embeddings, and sentiment classification.",
      "Gained deep foundational knowledge of model evaluation metrics (Precision, Recall, ROC-AUC, F1-Score).",
    ],
  },
  {
    title: "Data Analysis Training",
    company: "CTTC Bhubaneswar",
    period: "Intensive Program",
    roleType: "Industrial Training",
    status: "Certified",
    description: "Comprehensive training in statistical data analysis, exploratory data inspection, Pandas dataframes, and data visualization.",
    skills: ["Data Analysis", "Pandas", "NumPy", "Exploratory Data Analysis", "Data Cleansing"],
    highlights: [
      "Performed advanced data wrangling and statistical validation across high-dimensional datasets using Pandas & NumPy.",
      "Created structured reporting dashboards and visual correlation heatmaps to extract actionable insights.",
      "Engineered automated preprocessing scripts to handle missing values, outliers, and normalization.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Mewar University",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    duration: "2024 – 2028",
    score: "CGPA: 8.0 / 10.0 (up to Semester IV)",
    details: [
      "Specializing in Artificial Intelligence, Deep Learning, and Mathematical Foundations for ML.",
      "Active participant in technical symposiums, coding challenges, and collegiate innovation labs.",
      "Core Coursework: Data Structures & Algorithms, Discrete Mathematics, Probability & Statistics, Object-Oriented Programming, Database Management Systems.",
    ],
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "Higher Secondary & Secondary Schooling",
    duration: "2012 – 2024",
    details: [
      "Solid mathematical, logical, and computational science foundation.",
      "Active participant in extracurricular science exhibitions, sports, and school leadership bodies.",
    ],
  },
];

export const skillCategories = {
  "Programming Languages": [
    { name: "Python", level: "Expert", desc: "Core language, scripting, OOP, scientific libraries, async routines" },
    { name: "SQL", level: "Intermediate", desc: "Complex queries, joins, relational schema design, aggregations" },
    { name: "HTML", level: "Proficient", desc: "Semantic structure, web accessibility, markup standards" },
    { name: "CSS", level: "Proficient", desc: "Responsive layout design, modern styling, Flexbox & Grid" },
  ],
  "AI & ML": [
    { name: "Machine Learning", level: "Advanced", desc: "Supervised & unsupervised algorithms, regression, classification, clustering" },
    { name: "Artificial Intelligence", level: "Advanced", desc: "Heuristic search, decision trees, expert systems, intelligent workflows" },
    { name: "Natural Language Processing (NLP)", level: "Intermediate", desc: "Tokenization, TF-IDF, semantic embeddings, sentiment analysis" },
    { name: "Large Language Models (LLMs)", level: "Intermediate", desc: "Prompt engineering, RAG pipelines, API integration, context retrieval" },
  ],
  "Data Science": [
    { name: "Pandas", level: "Advanced", desc: "DataFrame manipulation, aggregations, time-series, indexing" },
    { name: "NumPy", level: "Advanced", desc: "Vectorized operations, multi-dimensional array math, linear algebra" },
    { name: "Data Analysis", level: "Advanced", desc: "EDA, hypothesis testing, correlation analysis, data cleansing" },
  ],
  "Core Concepts": [
    { name: "Data Structures & Algorithms", level: "Advanced", desc: "Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Sorting algorithms" },
    { name: "Problem Solving", level: "Advanced", desc: "Competitive programming logic, algorithmic time/space optimization" },
    { name: "Object-Oriented Programming (OOP)", level: "Advanced", desc: "Encapsulation, inheritance, polymorphism, clean architecture" },
  ],
  "Tools & Platforms": [
    { name: "Git", level: "Proficient", desc: "Distributed version control, commit history, branch management" },
    { name: "GitHub", level: "Proficient", desc: "Pull requests, code review, repository management, collaborative workflows" },
    { name: "VS Code", level: "Proficient", desc: "Primary code editor, extensions, workspace configuration, interactive debugging" },
    { name: "PyCharm", level: "Proficient", desc: "Python IDE, refactoring, virtual environment workflows" },
    { name: "Anaconda", level: "Proficient", desc: "Conda package distribution, isolated data science environments" },
    { name: "Jupyter Notebook", level: "Proficient", desc: "Interactive data visualization, model experimentation, exploratory workflows" },
    { name: "Google Colab", level: "Proficient", desc: "Cloud GPU/TPU acceleration, reproducible deep learning training" },
  ],
  "Computer Vision": [
    { name: "Pandas", level: "Advanced", desc: "Feature dataset structuring and metadata tabular tracking for vision datasets" },
    { name: "NumPy", level: "Advanced", desc: "Matrix image pixel transformations, tensor reshaping, coordinate computations" },
    { name: "Data Analysis", level: "Advanced", desc: "Vision metric benchmarking, precision-recall curve analysis, error analysis" },
    { name: "OpenCV", level: "Intermediate", desc: "Real-time image filtering, contour detection, edge analysis, video streaming" },
  ],
  "Soft Skills (Strengthened by NCC)": [
    { name: "Leadership", level: "Cadet", desc: "Initiative taking, squad coordination, driving team alignment under pressure" },
    { name: "Teamwork & Collaboration", level: "Cadet", desc: "High cohesion and operational coordination in collective projects" },
    { name: "Discipline", level: "Cadet", desc: "Precision execution, dedication to code quality, consistent daily practice" },
    { name: "Time Management", level: "Cadet", desc: "Balancing intensive engineering academics, daily DSA solving, and project milestones" },
    { name: "Decision Making", level: "Cadet", desc: "Rapid analytical situational assessment and sound technical judgment" },
    { name: "Problem Solving", level: "Cadet", desc: "Decomposing complex friction points into structured, actionable resolution steps" },
    { name: "Communication Skills", level: "Cadet", desc: "Clear, concise technical and verbal briefing across diverse teams" },
    { name: "Adaptability", level: "Cadet", desc: "Swift accommodation of dynamic environments, shifting priorities, and new tech" },
    { name: "Responsibility", level: "Cadet", desc: "High accountability for project deliverables, team ethics, and dependable execution" },
    { name: "Stress Management", level: "Cadet", desc: "Maintaining composure, clarity of thought, and emotional resilience under pressure" },
  ],
};

export const projects: ProjectItem[] = [
  {
    id: "ai-vision-core",
    title: "DeepVision: Real-Time Object & Gesture Detection",
    category: "Computer Vision",
    summary: "Real-time edge computer vision engine for spatial object tracking and hand landmark recognition.",
    description: "Built a low-latency video processing pipeline utilizing Python, OpenCV, and NumPy to perform real-time contour identification, object tracking, and gesture interaction. Benchmarked across varying illumination conditions with robust filtering.",
    techStack: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    githubUrl: "https://github.com/BarathElumalai22",
    metrics: "60+ FPS Real-time Stream",
  },
  {
    id: "medquery-rag",
    title: "MedQuery: LLM Clinical QA & Retrieval Engine",
    category: "AI & ML",
    summary: "Context-aware conversational intelligence system utilizing LLMs and vector retrieval for biomedical questions.",
    description: "Developed an interactive Natural Language Processing pipeline leveraging large language models and semantic embeddings. Features smart prompt formatting, hallucination mitigation, and retrieval augmented answers for healthcare reference materials.",
    techStack: ["Python", "LLMs", "NLP", "Pandas", "API Integration"],
    githubUrl: "https://github.com/BarathElumalai22",
    metrics: "94% Retrieval Accuracy",
  },
  {
    id: "pulse-analytics",
    title: "InsightPulse: Automated EDA & Predictive Modeling Suite",
    category: "Data Science",
    summary: "Automated tabular data analysis engine that delivers deep statistical profiling and predictive models.",
    description: "Constructed an end-to-end data science toolkit that ingests raw tabular datasets, performs missing-value imputation, detects outliers, and generates correlation matrices alongside automated Scikit-Learn classification/regression benchmarks.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
    githubUrl: "https://github.com/BarathElumalai22",
    metrics: "Automated 20+ Statistical Tests",
  },
  {
    id: "algorun-visualizer",
    title: "AlgoRun: Interactive DSA Logic Visualizer",
    category: "Algorithms",
    summary: "Dynamic execution visualizer for fundamental Data Structures and Sorting/Searching algorithms.",
    description: "Interactive algorithm visualizer built to demonstrate the step-by-step memory changes and pointer traversals in Binary Search Trees, Graph BFS/DFS, and dynamic programming formulations.",
    techStack: ["Python", "Algorithms", "DSA", "Logic Flow"],
    githubUrl: "https://github.com/BarathElumalai22",
    metrics: "150+ LeetCode Pattern Tested",
  },
];

export const activities: ActivityItem[] = [
  {
    title: "National Cadet Corps (NCC)",
    organization: "NCC Senior Division",
    role: "NCC Cadet",
    icon: "Shield",
    summary: "Trained under disciplined military corps leadership, drills, and national cohesion camps.",
    bulletPoints: [
      "Participated in rigorous physical drills, ceremonial parades, and field survival camps.",
      "Cultivated deep personal discipline, situational leadership, and swift decision-making under pressure.",
      "Spearheaded squad collaboration and team coordination in high-stakes training environments.",
    ],
  },
  {
    title: "Competitive Problem Solving",
    organization: "LeetCode & Coding Platforms",
    role: "Active DSA Solver",
    icon: "Code",
    summary: "Daily commitment to algorithmic problem decomposition and data structures mastery.",
    bulletPoints: [
      "Consistent problem solving covering Arrays, Strings, Trees, Linked Lists, Graphs, and Hash Tables.",
      "Optimizing time and space complexity with focus on O(N) and O(log N) optimal approaches.",
      "Strengthened mathematical reasoning, edge-case coverage, and clean modular code design.",
    ],
  },
];

export const languages = [
  { name: "Tamil", level: "Native Proficiency", flag: "IN" },
  { name: "English", level: "Professional Working Proficiency", flag: "US" },
  { name: "Hindi", level: "Professional Working Proficiency", flag: "IN" },
  { name: "Arabic", level: "Basic / Elementary Proficiency", flag: "AE" },
];

export const resumeJson = {
  candidate: {
    name: "Barath E",
    title: "B.Tech Artificial Intelligence & Machine Learning Student",
    contact: {
      email: "barath5366@gmail.com",
      phone: "+91 8754605821",
      location: "Chennai, Tamil Nadu, India",
      github: "https://github.com/BarathElumalai22",
      linkedin: "https://www.linkedin.com/in/barath-e-421a88380",
    },
    education: {
      degree: "B.Tech Artificial Intelligence & Machine Learning",
      university: "Mewar University",
      tenure: "2024 - 2028",
      cgpa: "8.0 / 10.0 (up to Semester IV)",
      school: "Kendriya Vidyalaya (2012 - 2024)",
    },
    credentials: [
      "Ex-Intern @ XtraGrad (Artificial Intelligence Internship)",
      "CTTC Bhubaneswar: AI & Machine Learning Certified Training",
      "CTTC Bhubaneswar: Data Analysis Certified Training",
      "NCC Cadet (National Cadet Corps)",
    ],
    technicalSkills: {
      languages: ["Python", "SQL", "HTML5", "CSS3"],
      ai_ml: ["Machine Learning", "Artificial Intelligence", "NLP", "LLMs"],
      dataScience: ["Pandas", "NumPy", "Data Analysis"],
      computerVision: ["OpenCV", "Image Processing"],
      tools: ["Git", "GitHub", "VS Code", "PyCharm", "Anaconda", "Jupyter", "Google Colab"],
      core: ["Data Structures & Algorithms", "Problem Solving", "Object-Oriented Programming (OOP)"],
    },
    languages: ["Tamil (Native)", "English (Professional)", "Hindi (Professional)", "Arabic (Basic)"],
    availability: "Immediate for 2025/2026 AI/ML & Data Internships",
  },
};
