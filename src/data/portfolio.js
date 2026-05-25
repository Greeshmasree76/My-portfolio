export const defaultPortfolio = {
  initials: 'GS',
  name: 'Greeshma Sree Putti',
  shortName: 'Greeshma Sree',
  role: 'Java Full Stack Developer',

  headline:
    'I build practical full-stack web applications with clean UI, structured backend logic, and real-world problem solving.',

  about:
    'Computer Science graduate focused on Java programming, DSA, backend logic, and full-stack project development. I build practical applications with clean interfaces and clear problem-solving.',

  location: 'India',
  email: 'puttigreeshmasree@gmail.com',
  phone: '+91 XXXXX XXXXX',
  resumeFile: '/Greeshma_Sree_Resume.pdf',

  links: {
    github: 'https://github.com/Greeshmasree76',
    linkedin: 'https://www.linkedin.com/in/greeshma-sree-putti-9292502bb/',
    leetcode: 'https://leetcode.com/u/greeshu__76/'
  },

  stats: [
    { label: 'Projects', value: '2' },
    { label: 'Core Stack', value: 'Java + Node.js' },
    { label: 'Focus', value: 'Problem Solving' }
  ],

  skills: {
    Frontend: ['HTML', 'CSS', 'JavaScript'],
    Backend: ['Java', 'Node.js'],
    Programming: ['Java Programming', 'DSA'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Vercel', 'AI Tools']
  },

  softSkills: ['Communication', 'Problem Solving', 'Teamwork'],

  experience: [
    {
      role: 'Full Stack Web Development Intern',
      company: 'Rinex',
      duration: '3 Months',
      points: [
        'Built web applications using HTML, CSS, JavaScript, and MongoDB.',
        'Developed REST APIs and integrated frontend with backend.',
        'Debugged, tested, and optimized application performance.',
        'Used Git for version control and team collaboration.'
      ]
    },
    {
      role: 'Artificial Intelligence Intern',
      company: 'Skill Forge',
      duration: '3 Months',
      points: [
        'Worked on AI concepts using Python, including data preprocessing and basic model building.',
        'Implemented machine learning algorithms for simple prediction tasks.'
      ]
    }
  ],

  certifications: [
    {
      title: 'Web Development',
      issuer: 'Rinex',
      year: '2024',
      link: ''
    },
    {
      title: 'Artificial Intelligence with Python',
      issuer: 'Skill Forge',
      year: '2025',
      link: ''
    }
  ],

  interests: ['Web Development', 'Problem Solving', 'Data Structures', 'AI Tools'],

  education: [
    {
      degree: 'B.Tech in Computer Science Engineering',
      college: 'Mohan Babu University',
      duration: '2023 - 2027',
      details:
        'Focused on Java, data structures, database management, web development, and full-stack project building.'
    }
  ],

  projects: [
    {
      title: 'Risk Prediction Dashboard',
      category: 'Healthcare Analytics',
      icon: 'Activity',

      description:
        'A full-stack risk prediction system that analyzes patient inputs and displays risk levels through a clean dashboard.',

      problem:
        'Manual risk checking is slow and inconsistent. This system helps identify high-risk records faster using structured inputs, prediction logic, and visual reports.',

      features: [
        'Secure login and register flow',
        'Patient risk input form',
        'Risk prediction result',
        'Dashboard cards and charts',
        'Report management'
      ],

      stack: ['React', 'Node.js', 'MongoDB', 'JWT'],

      live: 'https://riskprediction-frontend.vercel.app',
      github: 'https://github.com/Greeshmasree76/RiskPrediction.git',

      resumeBullet:
        'Built and deployed a full-stack risk prediction dashboard with authentication, prediction logic, analytics cards, charts, and report management.'
    },

    {
      title: 'Ghost Appointment - Spot-Fill Orchestrator',
      category: 'Real-Time Scheduling',
      icon: 'CalendarClock',

      description:
        'A real-time appointment waitlist system that fills cancelled slots by notifying priority users and allowing the first valid user to claim the slot.',

      problem:
        'Clinics and service providers lose time when users cancel or miss appointments. This system reduces empty slots by instantly offering the vacancy to waitlisted users.',

      features: [
        'Real-time cancellation detection',
        'Priority-based waitlist queue',
        'Socket.io slot-claim updates',
        'Notify next 5 waitlisted users',
        'Race-safe first-claim booking flow'
      ],

      stack: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],

      live: '',
      github: '',

      resumeBullet:
        'Reduced resource idle time by implementing a WebSocket-based priority queue for instant vacancy fulfillment.'
    }
  ]
};