const TextsEN = () => {
  const headerTexts = {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experiences: 'Experiencies',
    contact: 'Contact',
  }
  const homeTexts = {
    mainText: 'Hi! Im Rodrigo Dias, ',
    introduction:
      'Bachelors degree student in Systems Analysis and Development, focusing on web and mobile development of small to large scale apps.',
    connectButtonText: 'Lets connect!',
    cvButtonText: 'Download CV',
    toRotate: [
      'Mobile Developer',
      'Backend Developer',
      'FrontEnd Developer',
      'Full stack Developer',
      'DevOps Enthusiast',
    ],
  }
  const skillsTexts = [
    {
      title: 'React',
      description:
        'Responsive SPAs, MPAs, and general componentization and pagination',
    },
    {
      title: 'Nodejs',
      description:
        'API development and maintenance. Familiar with containerization and integration for databases, as well as other services',
    },
    {
      title: 'React-Native',
      description:
        'App development and maintenance with componentization and pagination',
    },
    {
      title: 'TailwindCss',
      description:
        'Basic styling and custom css integrations both in React and React-Native(nativewind) ',
    },
    {
      title: 'Prisma',
      description:
        "Database design, structuring and integration for Prisma's suported languages",
    },
    {
      title: 'Expo',
      description:
        'Full app development with the usage of expos tools such as Expo-Router and Api-Routes',
    },
    {
      title: 'Go',
      description:
        'API development and maintenance. Familiar with containerization and integration for databases, as well as other services',
    },
    {
      title: 'DevOps',
      description:
        'General structure and terraforming for apps using basic AWS features, Supabase and Vercel',
    },
    {
      title: 'Docker',
      description:
        'Direct containerization for development, testing, and deployment with ubuntu desktop and server',
    },
    {
      title: 'English',
      description:
        'Fluent English both spoken and written, with experience using English in the work environment',
    },
  ]
  const skillsTitle = 'Skills'

  const experienceTexts = [
    {
      id: 1,
      category: 'education',
      year: '2024 - ongoing',
      title: 'System Analysis and Development - UTFPR Ponta Grossa',
      desc: "Bachelor's degree.",
    },
    {
      id: 2,
      category: 'education',
      year: '2019 - Locked on 2023',
      title: 'Electrical engineering - UTFPR Ponta Grossa',
      desc: 'Locked',
    },
    {
      id: 3,
      category: 'education',
      year: '2022 - 2024',
      title: 'Intern - Copel CSL',
      desc: 'Maintenance redirection of electrical equipment.',
    },
    {
      id: 4,
      category: 'experience',
      year: '2022 - present',
      title: 'Back-end developer - Andre Sena Fitness Experience',
      desc: 'CRUD, route handling and email features.',
    },
    {
      id: 5,
      category: 'experience',
      year: '6/2017 - 1/2018',
      title: 'Intern - ETEC Escolástica Rosa',
      desc: 'General IT intern, focused on network maintenance, data handling using Excel and general day-to-day arrands.',
    },
    {
      id: 6,
      category: 'experience',
      year: '1/2017 - 5/2017',
      title: 'Assistant Teacher - Logic Minds Educação Tecnológica ',
      desc: 'Assistant teacher for classes regardind robotics, initial programming and tech in general for children ages 8 to 17.',
    },
  ]
  return { headerTexts, homeTexts, skillsTexts, skillsTitle, experienceTexts }
}

export default TextsEN
