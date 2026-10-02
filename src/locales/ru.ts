const ru = {
  meta: {
    title: 'Кирилл Сербин - Frontend Developer',
    description:
      'Frontend Developer - Vue 3, TypeScript, Pinia, REST API. Коммерческий опыт разработки и развития веб-приложений.',
  },
  actions: {
    language: 'Язык резюме',
    russian: 'Русский',
    english: 'English',
    print: 'Экспорт в PDF',
  },
  accessibility: {
    skipToResume: 'К содержанию резюме',
    resume: 'Резюме',
  },
  profile: {
    eyebrow: 'Резюме',
    name: 'Кирилл Сербин',
    title: 'Frontend Developer',
    specialization: 'Vue 3 / TypeScript',
    photoAlt: 'Кирилл Сербин',
  },
  sections: {
    about: 'Обо мне',
    contacts: 'Контакты',
    skills: 'Технический стек',
    languages: 'Языки',
    experience: 'Опыт работы',
    projects: 'Pet-проекты',
    education: 'Образование',
  },
  about:
    'Frontend-разработчик: создаю корпоративные веб-приложения на Vue 3 и TypeScript, интегрирую REST API, поддерживаю Vue 2 и миграцию на Vue 3. Работаю с компонентами, формами, таблицами и отчётностью; читаю Go-код и участвую в полном цикле разработки.',
  stackLabel: 'Стек:',
  contacts: [
    {
      id: 'phone',
      kind: 'phone',
      label: 'Телефон',
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
      items: ['Go - базовый', 'Чтение кода', 'Debug API', 'Dexie / IndexedDB', 'Fastify', 'SQLite'],
    },
    {
      id: 'development',
      title: 'Development',
      items: ['Git', 'GitLab', 'GitFlow', 'Code Review', 'CI/CD', 'Vite'],
    },
  ],
  languages: [
    { name: 'Русский', level: 'Родной' },
    { name: 'Английский', level: 'B1' },
    { name: 'Немецкий', level: 'A1' },
  ],
  experience: [
    {
      id: 'sibneftecart',
      company: 'ООО «Сибнефтекарт»',
      role: 'Frontend-разработчик',
      period: '06/2025 - н. в.',
      description:
        'Личные кабинеты владельцев топливных карт и систем автоматизации АЗС и нефтебаз.',
      responsibilities: [
        'Разрабатываю модули, компоненты и composables на Vue 3, TypeScript и Pinia.',
        'Миграция проекта с Vue 2 на Vue 3 с переносом функциональности без изменения бизнес-логики.',
        'Самостоятельная реализация новых функциональных модулей: от проработки структуры компонентов до интеграции с backend API.',
        'Анализ и отладка клиент-серверного взаимодействия; при необходимости работа с backend-кодом на Go для поиска причин ошибок, понимания контрактов API и внесения небольших изменений.',
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
      company: 'Проект для ООО «Газпром трансгаз Томск»',
      role: 'Frontend-разработчик',
      period: '02/2025 - 06/2025',
      description: 'Система адаптивного планирования обучения.',
      responsibilities: [
        'Разработка с нуля клиентской части на Vue 3 (Composition API) и JavaScript: проектирование структуры приложения, маршрутизации и клиентской бизнес-логики.',
        'Интегрировал API, создавал UI-компоненты по макетам Figma и дорабатывал интерфейсы административной части на PHP/Laravel.',
        'Работал в кросс-функциональной команде по GitFlow; MVP передан заказчику за три месяца.',
      ],
      stack: ['Vue 3', 'JavaScript', 'SCSS', 'Axios', 'REST API', 'Figma', 'GitLab', 'PHP/Laravel'],
    },
  ],
  projects: [
    {
      id: 'vkleika',
      name: 'Вклейка',
      description:
        'Коллекционная футбольная web-игра: альбомы, карточки, мини-игры, аккаунты и синхронизация прогресса.',
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
        'Футбольный менеджер с карьерой, симуляцией матчей, трансферами и фоновыми расчётами в Web Worker.',
      stack: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Vitest', 'Web Workers'],
    },
    {
      id: 'ai-helpers',
      name: 'AI-хелперы и автоматизация рутины',
      description:
        'Telegram-боты, автоматизация, интеграции с AI API и вспомогательные скрипты (в т.ч. заказы на фрилансе).',
      stack: ['Python', 'Telegram API', 'asyncio', 'REST API', 'AI API и пр.'],
    },
  ],
  education: [
    {
      id: 'asap-education',
      institution: 'ASAP Education, курс',
      period: '02/2025 - 07/2025',
      qualification: '«Frontend-разработчик»',
    },
    {
      id: 'tomsk-polytechnic-university',
      institution: 'Томский политехнический университет, высшее',
      period: '2012 - 2016',
      qualification: 'Институт природных ресурсов',
    },
  ],
}

export default ru
