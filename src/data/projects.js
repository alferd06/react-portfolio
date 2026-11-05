// src/data/projects.js
export const projects = [
  {
      id: 1,
      title: 'Cinema Ticket Booking App',
      icon: 'movie',
      category: 'mobile',
      problem:
        'Exam task: a Flutter movie ticket booking flow using only setState and Navigator arguments.',
      solution:
        'Team-built CineGo. I built the cinema list and detail, ticket purchase, and purchase history screens.',
      impact:
        'A working booking flow, plus practice resolving shared data-model conflicts across teammates.',
      stack: ['Flutter', 'Dart'],
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Student Directory App',
      icon: 'school',
      category: 'mobile',
      problem:
        'Midterm task: keep a student list in sync across three Flutter pages without external state-management packages.',
      solution:
        'Team-built grid, add-student form, and profile page. I built the Add Student page with validation and consent gating.',
      impact:
        'Adds and deletes show instantly, and deletion is blocked when only three students remain.',
      stack: ['Flutter', 'Dart'],
      githubUrl: '#',
    },
    {
    id: 3,
    title: 'GDP vs. Public Health Indicators',
    icon: 'monitoring',
    category: 'data',
    problem:
      'Do GDP per capita and health spending explain life expectancy and infant mortality across countries (2013-2023)?',
    solution:
      'Python/pandas ETL into a star schema from four World Bank indicators, analyzed with K-Means and roll-ups.',
    impact:
      'Exploratory: GDP tracks life expectancy strongly; health spending (% of GDP) was a weaker signal than expected.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'Jupyter'],
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Soil-Based Crop Recommendation',
    icon: 'grass',
    category: 'data',
    problem:
      'Which crop suits a given soil and climate? A small exercise using N, P, K, temperature, humidity, and rainfall.',
    solution:
      'Random Forest classifier behind a Streamlit app that recommends a crop from those six inputs.',
    impact:
      '99.32% accuracy and a deployed app; a prototype, not a field-ready tool.',
    stack: ['Python', 'scikit-learn', 'Streamlit'],
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Multi-Crop Yield Prediction',
    icon: 'agriculture',
    category: 'data',
    problem:
      'Yield models are usually tested on one crop in one country. Does XGBoost hold up across 101 countries and 10 crops?',
    solution:
      'XGBoost tuned with a custom Genetic Algorithm on 25,932 FAO/World Bank records (1990-2013).',
    impact:
      'R2 rose from 0.9685 to 0.9830 and RMSE fell 26.5%, in about 9 minutes versus an estimated 33 days for grid search.',
    stack: ['Python', 'XGBoost', 'Genetic Algorithm'],
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Plant Recognition System',
    icon: 'camera',
    category: 'data',
    problem:
      'Seedlings of chili, tomato, and similar crops are hard for beginners to tell apart from weeds like nutsedge.',
    solution:
      'Teachable Machine image classifier in a web page that identifies a plant from a camera shot or uploaded photo.',
    impact:
      'Fairly satisfactory results; a small dataset limited accuracy, so more photos is the next step.',
    stack: ['Teachable Machine', 'Python (Pickle)', 'HTML/JS'],
    githubUrl: '#',
  },
];