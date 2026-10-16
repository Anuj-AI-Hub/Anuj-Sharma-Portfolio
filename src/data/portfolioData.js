import { Brush, FileSpreadsheet, FileText, FolderGit2, Presentation } from 'lucide-react';

export const profile = {
  name: 'ANUJ SHARMA',
  title: 'Data Science | Data Analytics | Machine Learning',
  intro: 'I turn data into insights and insights into better decisions.',
  summary:
    'Exploring data analytics, visualization, statistical thinking, and machine learning to solve real-world problems.',
  email: 'anujsharma.email@example.com',
  linkedin: 'https://www.linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skillGroups = [
  {
    title: 'Data Analytics',
    items: [
      'Exploratory Data Analysis (EDA)',
      'Data Cleaning',
      'Data Visualization',
      'Data Interpretation',
      'Feature Engineering',
    ],
  },
  {
    title: 'Programming and Data',
    items: ['Python', 'SQL: MySQL and SQLite', 'Pandas', 'NumPy'],
  },
  {
    title: 'Visualization and Tools',
    items: ['Matplotlib', 'Seaborn', 'Jupyter Notebook'],
  },
  {
    title: 'Productivity & Collaboration',
    items: [
      { label: 'Microsoft Excel', icon: FileSpreadsheet },
      { label: 'Google Sheets', icon: FileSpreadsheet },
      { label: 'Google Docs', icon: FileText },
      { label: 'Google Slides', icon: Presentation },
      { label: 'Canva', icon: Brush },
      { label: 'GitHub', icon: FolderGit2 },
    ],
  },
  {
    title: 'Machine Learning',
    items: [
      'Supervised Learning',
      'Regression and Classification',
      'Model Evaluation',
      'Scikit-learn',
      'End-to-End ML Pipeline',
    ],
  },
];

export const projectFilters = ['All', 'Data Analytics', 'Machine Learning', 'NLP', 'Computer Vision'];

export const projects = [
  {
    title: 'House Price Prediction',
    category: 'Machine Learning',
    summary:
      'A regression-focused project for predicting house values based on key property and location-related features.',
    description:
      'This project focuses on a house price prediction workflow covering dataset exploration, preprocessing, feature selection, and model training with regression techniques. It is structured as a learning-oriented ML project and is suitable for showcasing a standard end-to-end predictive pipeline.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'EDA', 'Regression'],
    repo: 'https://github.com/yourusername/house-price-prediction',
    demo: 'https://yourdemo-link.example.com/house-price-prediction',
    metrics: 'Metrics to be updated after validation',
    accent: 'cyan',
    image: '/project-thumbs/house-price.svg',
  },
  {
    title: 'Fraud Detection',
    category: 'Data Analytics',
    summary:
      'A classification project focused on identifying potentially fraudulent transactions using analytical exploration and model evaluation.',
    description:
      'The objective is to detect suspicious or anomalous transaction patterns by exploring the dataset, cleaning and preparing variables, and testing classification models. Accuracy and scoring details should be added only after verified evaluation results are available.',
    tags: ['SQL', 'Python', 'Classification', 'EDA', 'Model Evaluation'],
    repo: 'https://github.com/yourusername/fraud-detection',
    demo: '',
    metrics: 'Evaluation metrics to be confirmed',
    accent: 'violet',
    image: '/project-thumbs/fraud-detection.svg',
  },
  {
    title: 'Movie Recommendation System',
    category: 'Machine Learning',
    summary:
      'A recommendation engine that suggests relevant movies based on user preference patterns and item similarity.',
    description:
      'Recommendations are generated using a similarity-based strategy that compares user or item relationships to produce relevant suggestions. This project demonstrates skills in data preparation, feature selection, and recommender logic in a practical setting.',
    tags: ['Python', 'Pandas', 'Recommendation', 'Data Processing'],
    repo: 'https://github.com/yourusername/movie-recommendation',
    demo: '',
    metrics: 'Implementation details available in project repository',
    accent: 'amber',
    image: '/project-thumbs/movie-recommendation.svg',
  },
  {
    title: 'Text Query Label Predictor',
    category: 'NLP',
    summary:
      'An NLP text classification project for predicting labels from user text queries using preprocessing and feature extraction.',
    description:
      'This project focuses on cleaning raw query text, transforming it into a structured representation, and applying a classification model to predict labels. It demonstrates practical NLP workflow knowledge including preprocessing, feature extraction, and evaluation.',
    tags: ['NLP', 'Text Preprocessing', 'Scikit-learn', 'Classification'],
    repo: 'https://github.com/yourusername/text-query-label-predictor',
    demo: '',
    metrics: 'Model metrics pending verification',
    accent: 'cyan',
    image: '/project-thumbs/text-query-label.svg',
  },
  {
    title: 'Health Condition Prediction',
    category: 'Machine Learning',
    summary:
      'An educational classification project exploring health-related prediction using tabular data patterns.',
    description:
      'This is a learning-focused health prediction project designed to practice classification workflows. It should be treated as an educational exercise only and not as a medical diagnosis tool or clinical decision system.',
    tags: ['Classification', 'Feature Engineering', 'Python', 'ML Pipeline'],
    repo: 'https://github.com/yourusername/health-condition-prediction',
    demo: '',
    metrics: 'Educational project; validation required',
    accent: 'violet',
    image: '/project-thumbs/health-condition.svg',
  },
  {
    title: 'Cat vs Dog Image Classification',
    category: 'Computer Vision',
    summary:
      'A computer vision project using TensorFlow/Keras to classify images of cats and dogs.',
    description:
      'This project demonstrates image preprocessing, model training, and binary classification workflow for visual recognition tasks. It is included as a project exploration area in computer vision and can be expanded with verified implementation notes.',
    tags: ['TensorFlow', 'Keras', 'Computer Vision', 'Image Classification'],
    repo: 'https://github.com/yourusername/cat-vs-dog-classification',
    demo: '',
    metrics: 'Model accuracy to be confirmed',
    accent: 'amber',
    image: '/project-thumbs/cat-vs-dog.svg',
  },
  {
    title: 'Face Augmentation',
    category: 'Computer Vision',
    summary:
      'A computer vision application designed to augment or transform facial images through image-processing techniques.',
    description:
      'This project is focused on exploring image augmentation and transformation strategies for face-related visual tasks. It highlights practical image processing understanding and experimentation in computer vision workflows.',
    tags: ['OpenCV', 'Computer Vision', 'Image Processing'],
    repo: 'https://github.com/yourusername/face-augmentation',
    demo: '',
    metrics: 'Project details to be verified',
    accent: 'cyan',
    image: '/project-thumbs/face-augmentation.svg',
  },
  {
    title: 'Hand Gesture Controlled System',
    category: 'Computer Vision',
    summary:
      'An OpenCV and MediaPipe project for controlling digital interaction using hand gestures.',
    description:
      'This project uses hand landmark tracking to interpret gesture-based input, enabling a form of computer interaction without traditional hardware controls. It showcases practical CV and real-time vision application design.',
    tags: ['OpenCV', 'MediaPipe', 'Gesture Recognition', 'Computer Vision'],
    repo: 'https://github.com/yourusername/hand-gesture-controller',
    demo: '',
    metrics: 'Interaction logic to be validated',
    accent: 'violet',
    image: '/project-thumbs/gesture-system.svg',
  },
];

export const analyticsOverview = {
  kpis: [
    { label: 'Engagement', value: '78%', detail: 'Illustrative sample' },
    { label: 'Conversion', value: '24%', detail: 'Sample funnel' },
    { label: 'Retention', value: '68%', detail: 'Monthly trend' },
    { label: 'Avg. Session', value: '31 min', detail: 'Example value' },
  ],
  barData: [
    { month: 'Jan', value: 240 },
    { month: 'Feb', value: 310 },
    { month: 'Mar', value: 290 },
    { month: 'Apr', value: 420 },
    { month: 'May', value: 460 },
    { month: 'Jun', value: 520 },
  ],
  lineData: [
    { label: 'Jan', value: 30 },
    { label: 'Feb', value: 42 },
    { label: 'Mar', value: 34 },
    { label: 'Apr', value: 58 },
    { label: 'May', value: 62 },
    { label: 'Jun', value: 77 },
  ],
  pieData: [
    { name: 'Python', value: 34 },
    { name: 'SQL', value: 28 },
    { name: 'Visualization', value: 22 },
    { name: 'Reporting', value: 16 },
  ],
  insights: [
    'Customer engagement suggests ongoing interest in dashboard-driven decision support.',
    'Higher conversion points align with stronger reporting and data storytelling.',
    'The strongest lift appears in the mid-quarter analytics cycle and follow-up action review.',
  ],
};

export const experience = [
  {
    title: 'Data Analytics Internship / Training',
    company: 'TIPS-G, Alwar',
    period: '2024 – 2025',
    details: [
      'Hands-on training and project-based learning in data analytics workflows.',
      'Explored practical methods for data cleaning, exploratory analysis, and visualization.',
      'Worked with Python, SQL, and common data tools to strengthen analytical problem-solving.',
    ],
  },
];

export const education = [
  {
    title: 'B.A.',
    institution: 'Raj Rishi Bhartrihari Matsya University',
    period: 'Completed',
  },
  {
    title: 'Diploma in Data Science / AI & Machine Learning',
    institution: 'TIPS-G, Alwar',
    period: '2024–2026 expected completion',
  },
];

export const certificates = [
  { name: 'Python Programming', provider: 'Kaggle' },
  { name: 'Pandas', provider: 'Kaggle' },
  { name: 'Introduction to Artificial Intelligence', provider: 'Simplilearn' },
  { name: 'Introduction to Large Language Models', provider: 'Simplilearn' },
  { name: 'Introduction to Programming', provider: 'Platform-based learning' },
];

export const services = [
  'Data Cleaning and Preparation',
  'Exploratory Data Analysis',
  'Data Visualization and Reporting',
  'SQL-Based Data Extraction',
  'Machine Learning Model Development',
];

export const contactLinks = {
  email: 'mailto:anujsharma.email@example.com',
  linkedin: 'https://www.linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
};
