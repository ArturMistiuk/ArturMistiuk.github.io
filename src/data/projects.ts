export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;      // path relative to /public/ — use EITHER image OR video
  video?: string;      // path relative to /public/ OR external URL
  imageAlt: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'stockholm-job-market',
    title: 'Stockholm Job Market Analyzer',
    description:
      'End-to-end data pipeline and dashboard tracking data roles in Stockholm. Ingests job ads from Platsbanken API and LinkedIn/Indeed, deduplicates cross-platform records, extracts skills via regex matching, and classifies seniority. Features KPI cards, skills ranking with experience distribution, and a skill co-occurrence heatmap.',
    image: '/projects/stockholm-jobs.png',
    imageAlt: 'Stockholm Job Market Analyzer dashboard',
    tags: ['Python', 'SQL', 'Fly.io', 'Pandas', 'API'],
    githubUrl: 'https://github.com/ArturMistiuk/Stockholm-Job-Market-Analyzer',
    liveDemoUrl: 'https://stockholm-job-market.fly.dev/', // TODO: add live demo URL from Fly.io
    featured: true,
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation (KMeans Clustering)',
    description:
      'Applied unsupervised machine learning to segment customers into meaningful clusters based on purchasing behavior. Results can be used directly for targeted marketing campaigns and customer lifetime value optimization.',
    image: '/projects/customer_segmentation.png',
    imageAlt: 'Customer segmentation cluster visualization',
    tags: ['Python', 'scikit-learn', 'KMeans', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/ArturMistiuk/Customer_Segmentation',
  },
  {
    id: 'wavelip',
    title: 'WaveLip',
    description:
      'WaveLip - a fully autonomous deepfake creator on your computer, providing you with the tools to seamlessly generate synthetic media. Utilizes two pre-trained deep learning models, as well as Python scripts for scraping videos from YouTube.',
    video: '/projects/Trump.mp4',
    imageAlt: 'WaveLip video demonstration',
    tags: ['Python', 'FFmpeg', 'Wav2Lip', 'Tortoise'],
    githubUrl: 'https://github.com/ArturMistiuk/WaveLip',
  },
  {
    id: 'eda-business',
    title: 'Insightful Analytics: Optimizing Business Through EDA',
    description:
      'In-depth Exploratory Data Analysis on company sales data to uncover actionable insights for stakeholders. Covers data cleaning, feature engineering, statistical summaries, and rich visualizations to support strategic decisions.',
    image: '/projects/EDA.png',
    imageAlt: 'EDA business analytics charts',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA'],
    githubUrl: 'https://github.com/ArturMistiuk/Company_Sales_Analysis_Insights_and_Visualization',
  },
  {
    id: 'causes-of-death',
    title: 'Causes of Death: Sweden vs Ukraine',
    description:
      'Comparative analysis and visualization of mortality data for Sweden and Ukraine. Highlights key differences in leading causes of death, demographic trends, and influencing factors through interactive charts.',
    image: '/projects/Causes_of_death.png',
    imageAlt: 'Causes of death comparison visualization',
    tags: ['Python', 'Plotly', 'Pandas', 'Data Visualization'],
    githubUrl: 'https://github.com/ArturMistiuk/Data_Visualization',
  },
  {
    id: 'solar-panel',
    title: 'Solar Panel Farm Optimization via NASA API',
    description:
      'Used NASA API to gather irradiance and climate data for specific geographic coordinates to identify optimal locations for solar panel installation. Combines geospatial analysis with energy output modeling.',
    image: '/projects/nasa.jpg',
    imageAlt: 'Solar irradiance map from NASA data',
    tags: ['Python', 'NASA API', 'Pandas', 'Geospatial', 'REST API'],
    githubUrl: 'https://github.com/ArturMistiuk/NASA_Project',
  },
  {
    id: 'gender-prediction',
    title: 'Gender Prediction from Photos (SVM)',
    description:
      'Computer vision project that predicts gender from facial images using a Support Vector Machine model. Includes image preprocessing pipeline, feature extraction, and model evaluation with precision/recall metrics.',
    image: '/projects/Gender_Predictions.png',
    imageAlt: 'Gender prediction model results',
    tags: ['Python', 'scikit-learn', 'SVM', 'OpenCV', 'Machine Learning'],
    githubUrl: 'https://github.com/ArturMistiuk/Gender_Prediction_from_Photos',
  },
];
