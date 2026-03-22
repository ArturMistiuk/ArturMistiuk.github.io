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
    skills: ['Pandas', 'NumPy', 'Data Analysis (EDA)', 'A/B Testing', 'Statistics', 'Excel'],
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    icon: '🤖',
    skills: ['Machine Learning', 'TensorFlow', 'scikit-learn'],
  },
  {
    id: 'bi-tools',
    label: 'BI & Visualization',
    icon: '📈',
    skills: ['PowerBI', 'Looker Studio'],
  },
  {
    id: 'databases',
    label: 'Databases & Cloud',
    icon: '🗄️',
    skills: ['BigQuery', 'SQL databases', "MongoDB"],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    icon: '⚙️',
    skills: ['Docker', 'Git', 'dbt', 'Claude'],
  },
];
