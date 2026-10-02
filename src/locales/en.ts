const en = {
  meta: {
    title: 'Kirill Serbin - Frontend Developer',
    description:
      'Frontend Developer specializing in Vue 3, TypeScript, Pinia, and REST API, with commercial web application development experience.',
  },
  actions: {
    language: 'Resume language',
    russian: 'Русский',
    english: 'English',
    print: 'Export to PDF',
  },
  accessibility: {
    skipToResume: 'Skip to resume content',
    resume: 'Resume',
  },
  profile: {
    eyebrow: 'Resume',
    name: 'Kirill Serbin',
    title: 'Frontend Developer',
    specialization: 'Vue 3 / TypeScript',
    photoAlt: 'Kirill Serbin',
  },
  sections: {
    about: 'About me',
    contacts: 'Contacts',
    skills: 'Technical skills',
    languages: 'Languages',
    experience: 'Work experience',
    projects: 'Pet projects',
    education: 'Education',
  },
  about:
    'Frontend developer building enterprise web applications with Vue 3 and TypeScript, integrating REST APIs, maintaining Vue 2 projects, and migrating them to Vue 3. Experienced with components, forms, tables, and reporting; able to read Go code and contribute throughout the full development lifecycle.',
  stackLabel: 'Stack:',
  contacts: [
    {
      id: 'phone',
      kind: 'phone',
      label: 'Phone',
      value: '+7-923-433-18-16',
      href: 'tel:+79234331816',
    },
    {
      id: 'email',
      kind: 'email',
      label: 'Email',
      value: 'serbin_kirill1807@mail.ru',
      href: 'mailto:serbin_kirill1807@mail.ru',
    },
    {
      id: 'telegram',
      kind: 'telegram',
      label: 'Telegram',
      value: '@madrid_ka',
      href: 'https://t.me/madrid_ka',
    },
    {
      id: 'github',
      kind: 'github',
      label: 'GitHub',
      value: 'github.com/Madridka',
      href: 'https://github.com/Madridka',
    },
  ],
  skills: [
    {
      id: 'frontend',
      title: 'Frontend',
      items: ['Vue 3', 'Composition API', 'Vue 2', 'TypeScript', 'JavaScript', 'Pinia', 'PrimeVue'],
    },
    {
      id: 'ui-styling',
      title: 'UI / Styling',
      items: ['Tailwind CSS', 'SCSS', 'Responsive UI', 'Figma'],
    },
    { id: 'api', title: 'API', items: ['REST API', 'Axios'] },
    {
      id: 'backend',
      title: 'Backend',
      items: [
        'Go - basic',
        'Code reading',
        'API debugging',
        'Dexie / IndexedDB',
        'Fastify',
        'SQLite',
      ],
    },
    {
      id: 'development',
      title: 'Development',
      items: ['Git', 'GitLab', 'GitFlow', 'Code Review', 'CI/CD', 'Vite'],
    },
  ],
  languages: [
    { name: 'Russian', level: 'Native' },
    { name: 'English', level: 'B1' },
    { name: 'German', level: 'A1' },
  ],
  experience: [
    {
      id: 'sibneftecart',
      company: 'Sibneftecard LLC',
      role: 'Frontend Developer',
      period: '06/2025 - Present',
      description:
        'Customer portals for fuel card holders and automation systems for filling stations and oil storage facilities.',
      responsibilities: [
        'Develop modules, components, and composables with Vue 3, TypeScript, and Pinia.',
        'Migrate the project from Vue 2 to Vue 3 while preserving existing functionality and business logic.',
        'Independently deliver new functional modules, from designing the component structure to integrating backend APIs.',
        'Analyze and debug client-server interactions; when needed, work with the Go backend code to identify root causes, understand API contracts, and make small changes.',
      ],
      stack: [
        'Vue 3',
        'TypeScript',
        'Pinia',
        'PrimeVue',
        'Tailwind CSS',
        'Axios',
        'REST API',
        'Go',
        'GitLab',
      ],
    },
    {
      id: 'gazprom-transgaz-project',
      company: 'Project for Gazprom Transgaz Tomsk LLC',
      role: 'Frontend Developer',
      period: '02/2025 - 06/2025',
      description: 'Adaptive learning planning system.',
      responsibilities: [
        'Built the frontend from scratch with Vue 3 (Composition API) and JavaScript, designing the application structure, routing, and client-side business logic.',
        'Integrated APIs, created UI components from Figma designs, and enhanced administrative interfaces built with PHP/Laravel.',
        'Worked in a cross-functional team using GitFlow; delivered the MVP to the client within three months.',
      ],
      stack: ['Vue 3', 'JavaScript', 'SCSS', 'Axios', 'REST API', 'Figma', 'GitLab', 'PHP/Laravel'],
    },
  ],
  projects: [
    {
      id: 'vkleika',
      name: 'Vkleika',
      description:
        'A collectible football web game featuring albums, cards, mini-games, user accounts, and progress synchronization.',
      stack: [
        'Vue 3',
        'TypeScript',
        'Pinia',
        'Tailwind CSS',
        'Dexie / IndexedDB',
        'Fastify',
        'SQLite',
        'Vitest',
      ],
    },
    {
      id: 'fm-simulator',
      name: 'FM Simulator',
      description:
        'A football management game with career progression, match simulation, transfers, and background calculations in a Web Worker.',
      stack: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Vitest', 'Web Workers'],
    },
    {
      id: 'ai-helpers',
      name: 'AI helpers and workflow automation',
      description:
        'Telegram bots, workflow automation, AI API integrations, and utility scripts, including freelance projects.',
      stack: ['Python', 'Telegram API', 'asyncio', 'REST API', 'AI APIs, etc.'],
    },
  ],
  education: [
    {
      id: 'asap-education',
      institution: 'ASAP Education, course',
      period: '02/2025 - 07/2025',
      qualification: 'Frontend Developer',
    },
    {
      id: 'tomsk-polytechnic-university',
      institution: 'Tomsk Polytechnic University, higher education',
      period: '2012 - 2016',
      qualification: 'Institute of Natural Resources',
    },
  ],
}

export default en
