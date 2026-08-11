import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    slug: "invoisen-ai",
    title: "Invoisen – AI-Powered Invoice Management SaaS",
    tagline: "Next.js, React, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, AI API",
    category: "Full-Stack",
    featured: true,
    shortDescription:
      "Built a full-stack AI-powered invoice management platform with secure user authentication, client autofill, tax assistance, and PDF export.",
    fullDescription:
      "Invoisen is a full-stack AI-powered invoice management SaaS platform. Features AI invoice generation, client autofill, tax assistance, PDF export, email sharing, invoice history, and a responsive dashboard.",
    problem:
      "Manual invoice generation is error-prone, slow, and hard to manage across multiple clients, leading to billing discrepancies.",
    solution:
      "Built a full-stack AI-powered invoice management platform with secure user authentication, AI item suggestions, client lookup, tax calculations, and PDF export.",
    keyFeatures: [
      "Built a full-stack AI-powered invoice management platform with secure user authentication.",
      "Integrated AI features for invoice generation, client autofill, and tax assistance.",
      "Developed PDF export, email sharing, invoice history, and a responsive dashboard."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AI API"],
    role: "Lead Full-Stack Developer",
    challenges: [
      "Ensuring sub-100ms client-side PDF rendering for complex multi-page invoices.",
      "Designing a robust state management system for tax calculations and line-item discounts."
    ],
    outcome:
      "Delivered a production-ready application featuring AI invoice generation, client autofill, tax assistance, and instant PDF export.",
    githubUrl: "https://github.com/premkumar-io/Invoisen-Ai",
    liveUrl: "https://github.com/premkumar-io/Invoisen-Ai",
    architectureSummary:
      "Client (Next.js SPA) <-> REST API (Express.js / Node.js) <-> Database (MongoDB) + AI API Engine"
  },
  {
    slug: "insurance-predictor-ai",
    title: "Insure – AI-Powered Insurance Risk Predictor",
    tagline: "Python, FastAPI, Streamlit, Scikit-learn, Pandas",
    category: "AI/ML",
    featured: true,
    shortDescription:
      "Built an AI-powered platform to predict insurance premium risk categories using a Random Forest model with real-time predictions dashboard.",
    fullDescription:
      "Insure is an AI-powered platform designed to predict insurance premium risk categories using a Random Forest model. Implemented automated feature engineering, validation, confidence scoring, probability analysis, and an interactive dashboard with real-time predictions and API integration.",
    problem:
      "Traditional insurance underwriting processes are slow and opaque, requiring manual processing that delays quote generation for customers.",
    solution:
      "Trained high-accuracy Random Forest predictive ML algorithms to serve immediate, automated risk categorization and premium quotes via FastAPI.",
    keyFeatures: [
      "Built an AI-powered platform to predict insurance premium risk categories using a Random Forest model.",
      "Implemented automated feature engineering, validation, confidence scoring, and probability analysis.",
      "Developed an interactive dashboard with real-time predictions, risk visualization, and API integration."
    ],
    technologies: ["Python", "FastAPI", "Streamlit", "Scikit-learn", "Pandas", "Random Forest"],
    role: "ML Engineer & Developer",
    challenges: [
      "Optimizing feature encoding and scaling to handle non-linear health and demographic interactions.",
      "Building a ultra-lightweight FastAPI backend returning confidence scores with negligible latency."
    ],
    outcome:
      "Delivered an interactive predictive dashboard with automated feature engineering, confidence scoring, and API integration.",
    githubUrl: "https://github.com/premkumar-io/Insure-Ai",
    liveUrl: "https://github.com/premkumar-io/Insure-Ai",
    architectureSummary:
      "Dashboard (Streamlit) <-> API Gateway (FastAPI) <-> Random Forest Model (Scikit-learn)"
  },
  {
    slug: "chatbot-ai",
    title: "ChatBot-AI – Intelligent AI Assistant Platform",
    tagline: "TypeScript, React, Node.js, Express.js, NLP, Cloud Computing",
    category: "AI/ML",
    featured: true,
    shortDescription:
      "Smart AI ChatBot platform built using Artificial Intelligence, Natural Language Processing (NLP), and cloud deployment architectures.",
    fullDescription:
      "ChatBot-AI is an intelligent conversational AI platform. Built using cutting-edge AI technologies, Natural Language Processing (NLP), RESTful API backends, and cloud infrastructure for real-time user query processing.",
    problem:
      "Modern users demand instant, accurate, and context-aware responses to queries, requiring real-time NLP capabilities and scalable backend microservices.",
    solution:
      "Designed and deployed a full-stack AI chatbot architecture integrating Natural Language Processing, REST APIs, and scalable cloud hosting.",
    keyFeatures: [
      "Integrated Natural Language Processing (NLP) to understand and respond to user queries in real-time.",
      "Designed system architecture using RESTful APIs and Node.js/Express.js backend services.",
      "Deployed scalable cloud architecture with secure user authentication and conversation state management."
    ],
    technologies: ["TypeScript", "React", "Node.js", "Express.js", "NLP", "REST APIs", "Cloud Computing"],
    role: "AI Cloud Intern & Developer",
    challenges: [
      "Handling real-time token processing and low-latency response delivery for concurrent user sessions.",
      "Structuring modular REST API routing for seamless integration between frontend UI and NLP engine."
    ],
    outcome:
      "Successfully built and deployed an AI chatbot platform capable of understanding and answering queries in real-time.",
    githubUrl: "https://github.com/premkumar-io/ChatBot-AI",
    liveUrl: "https://github.com/premkumar-io/ChatBot-AI",
    architectureSummary:
      "Frontend UI (React / TypeScript) <-> REST API (Node.js) <-> NLP Engine & Cloud Hosting"
  },
  {
    slug: "laptop-price-prediction",
    title: "Laptop-Price-Prediction – ML Regression Model",
    tagline: "Python, Jupyter Notebook, Scikit-learn, Pandas, NumPy, Matplotlib",
    category: "AI/ML",
    featured: false,
    shortDescription:
      "Machine learning model evaluating hardware specifications, brand features, and RAM/CPU configurations to accurately predict laptop market prices.",
    fullDescription:
      "Laptop-Price-Prediction is a machine learning project that predicts laptop prices based on technical specifications such as processor type, RAM, storage, GPU, brand, and operating system.",
    problem:
      "Predicting fair laptop market value is difficult due to non-linear hardware feature combinations and rapid specification changes.",
    solution:
      "Applied regression algorithms in Python with Scikit-learn to perform exploratory data analysis, feature engineering, model training, and price evaluation.",
    keyFeatures: [
      "Performed comprehensive Exploratory Data Analysis (EDA) and data cleaning on laptop hardware datasets.",
      "Trained and evaluated multiple regression algorithms including Linear Regression and Random Forest Regressor.",
      "Engineered feature pipelines for hardware specifications (CPU speed, RAM capacity, GPU models, SSD storage)."
    ],
    technologies: ["Python", "Jupyter Notebook", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    role: "Data Scientist & ML Developer",
    challenges: [
      "Handling categorical feature encoding for high-cardinality brand and processor model names.",
      "Optimizing regression hyper-parameters to minimize Mean Absolute Error (MAE)."
    ],
    outcome:
      "Achieved high R² evaluation score on test datasets, providing reliable hardware price estimations.",
    githubUrl: "https://github.com/premkumar-io/Laptop-Price-Prediction",
    liveUrl: "https://github.com/premkumar-io/Laptop-Price-Prediction",
    architectureSummary:
      "Data Ingestion -> Cleaning & EDA -> Feature Engineering -> Model Training (Scikit-Learn) -> Price Prediction"
  },
  {
    slug: "python-tutorial-dsa",
    title: "Python-Tutorial & Data Structures Repository",
    tagline: "Python, Algorithms, Data Structures, OOP, Problem Solving",
    category: "Algorithms",
    featured: false,
    shortDescription:
      "Centralized code repository covering core computer science algorithms, data structures, object-oriented programming, and interview problem sets.",
    fullDescription:
      "Python-Tutorial is an organized algorithmic repository containing fundamental data structures, search/sort algorithms, dynamic programming, and Python concepts designed for competitive coding and technical interviews.",
    problem:
      "Mastering computer science fundamentals requires clean, well-documented implementation of core data structures and algorithmic paradigms.",
    solution:
      "Created a structured repository of algorithmic solutions in Python covering arrays, linked lists, trees, graphs, sorting, searching, and OOP patterns.",
    keyFeatures: [
      "Implemented fundamental data structures (Arrays, Linked Lists, Stacks, Queues, Binary Trees, Graphs).",
      "Wrote optimal algorithmic implementations for Sorting (QuickSort, MergeSort) and Searching (Binary Search).",
      "Included comprehensive Python tutorials and OOP design patterns with time/space complexity analysis."
    ],
    technologies: ["Python", "Data Structures", "Algorithms", "OOP", "Recursion", "Dynamic Programming"],
    role: "Author & Maintainer",
    challenges: [
      "Writing clean, readable code implementations with optimal O(N log N) and O(N) time complexities.",
      "Structuring modular topic directories for quick reference during coding assessments."
    ],
    outcome:
      "Maintained an active open-source GitHub repository serving as a practical reference for algorithmic problem solving.",
    githubUrl: "https://github.com/premkumar-io/Python-Tutorial",
    liveUrl: "https://github.com/premkumar-io/Python-Tutorial",
    architectureSummary:
      "Topic Modules -> Data Structures -> Algorithmic Implementations -> Test Scenarios & Complexity Analysis"
  }
];
