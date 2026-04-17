export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages & Query',
    icon: '{ }',
    skills: ['Python', 'SQL'],
  },
  {
    id: 'data-tools',
    label: 'Data & Analysis',
    icon: '📊',
    skills: ['Pandas', 'NumPy', 'Data Analysis (EDA)', 'Matplotlib/Seaborn', 'Statistics', 'Excel'],
  },
  {
    id: 'ai llm workflows',
    label: 'AI & LLM Workflows',
    icon: '🤖',
    skills: ['Prompt Engineering', 'LLM Evaluation', 'Blind Evaluation', 'Claude', 'ChatGPT', 'MCP'],
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    icon: '🤖',
    skills: ['scikit-learn', 'Classification', 'Clustering', 'Model Evaluation (F1, Confusion Matrix)'],
  },
  {
    id: 'bi-tools',
    label: 'BI & Visualization',
    icon: '📈',
    skills: ['PowerBI', 'Looker Studio', 'Plotly/Dash'],
  },
  {
    id: 'databases',
    label: 'Databases & Cloud',
    icon: '🗄️',
    skills: ['BigQuery', 'PostgreSQL ', "MongoDB"],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    icon: '⚙️',
    skills: ['Git', 'Docker', 'Label Studio', 'Jira'],
  },
];
