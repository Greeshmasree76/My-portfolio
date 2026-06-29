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
  phone: '+91 6300876232',
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
      title: 'Web Development Course',
      issuer: 'Rinex Organization',
      year: '2024',
      type: 'Course Completion',
      date: '06 Sep 2024',
      certificateId: 'WD24-RNC0-9089',
      link: '/certificates/rinex-web-development-course.pdf'
    },
    {
      title: 'Web Development Achievement',
      issuer: 'Rinex Organization',
      year: '2024',
      type: 'Achievement Certificate',
      date: '06 Sep 2024',
      certificateId: 'WD24-RNG0-9084',
      link: '/certificates/rinex-web-development-achievement.pdf'
    },
    {
      title: 'Web Development Internship',
      issuer: 'Rinex Technologies',
      year: '2024',
      type: 'Internship Completion',
      date: '06 Sep 2024 - 30 Oct 2024',
      certificateId: 'WD24-RNI0-9089',
      link: '/certificates/rinex-web-development-internship.pdf'
    },
    {
      title: 'Artificial Intelligence with Python',
      issuer: 'SkillForge E-Learning Solutions Pvt Ltd',
      year: '2024',
      type: 'Course Completion',
      date: '15 Jan 2024 - 15 Mar 2024',
      certificateId: '3129940314',
      link: '/certificates/skillforge-ai-python-course.jpg'
    },
    {
      title: 'Artificial Intelligence with Python Internship',
      issuer: 'SkillForge E-Learning Solutions Pvt Ltd',
      year: '2024',
      type: 'Internship Completion',
      date: '15 Jan 2024 - 15 Mar 2024',
      certificateId: '869718651',
      link: '/certificates/skillforge-ai-python-internship.jpg'
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
      title: 'Safe-Birth-AI',
      category: 'Healthcare Analytics',
      icon: 'Activity',
      description:
        'A full-stack risk prediction system that analyzes patient inputs and displays risk levels through a clean dashboard.',
      problem:
        'Manual risk checking is slow and inconsistent. This system helps identify high-risk records faster using structured inputs, prediction logic, and visual reports.',
      features: [
        'Secure login and register flow',
        'Risk prediction result',
        'Dashboard cards and charts',
        'Report management'
      ],
      stack: ['React', 'Node.js', 'MongoDB', 'JWT'],
      live: "https://safebirthai-frontend.vercel.app/",
      github: 'https://github.com/Greeshmasree76/RiskPrediction.git',
      resumeBullet:
        'Built and deployed a full-stack risk prediction dashboard with authentication, prediction logic, analytics cards, charts, and report management.'
    },
    {
      title: 'MediQueue – Doctor Appointment & Queue Management System',
      category: 'Healthcare Management',
      icon: 'CalendarClock',
      description:
        'A web-based healthcare application that simplifies doctor appointment booking and queue management. Users can search doctors by specialty and location, view hospitals, book appointments, generate queue tokens, and monitor queue status through an intuitive interface.',
      problem:
        'Patients often face long waiting times and difficulty finding the right doctor. MediQueue provides a digital appointment booking and queue management system that helps reduce waiting time and improves the overall patient experience.',
      features: [
        'Patient login interface',
        'Search doctors by location & specialty',
        'View hospitals and doctors list',
        'Book appointments',
        'Queue token generation',
        'Live queue/status display',
        'Responsive design'
      ],
      stack: ['HTML5', 'CSS3', 'JavaScript (Vanilla JS)'],
      live: 'https://greeshmasree76.github.io/mediqueue/',
      github: 'https://github.com/Greeshmasree76/mediqueue',
      resumeBullet:
        'Developed a responsive healthcare appointment and queue management application using HTML, CSS, and Vanilla JavaScript, featuring doctor search, appointment booking, queue token generation, and live status updates.'
    }
  ]
};
