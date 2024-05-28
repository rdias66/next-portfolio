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
      year: '1/2024 - ongoing',
      title: 'Systems Analysis and Development - UTFPR Ponta Grossa',
      desc: "Bachelor's degree.",
    },
    {
      id: 2,
      category: 'education',
      year: '1/2019 - Locked on 2023',
      title: 'Electrical engineering - UTFPR Ponta Grossa',
      desc: 'Locked',
    },
    {
      id: 3,
      category: 'work',
      year: '1/2024 - ongoing',
      title: 'Mobile Developer - Fit-Experience',
      desc: 'Full app development based on React-Native and Expo.',
    },
    {
      id: 4,
      category: 'work',
      year: '12/2022 - 1/2024',
      title: 'Intern - Copel CSL',
      desc: 'Maintenance digital redirection and data control of electrical equipment.',
    },
    {
      id: 5,
      category: 'work',
      year: '4/2022 - 4/2024',
      title: 'Back-end developer - Andre Sena Fitness Experience',
      desc: 'CRUD, route creation and handling and email features.',
    },
  ]

  const experienceTitle = 'Experience'

  const contactTexts = {
    title: 'Contact',
    contactText:
      'In case you want to email me regarding sugestions, oportunities or if there is something I can help you with, you can click on the button below',
    buttonText: 'Send Email',
    bottomContactText: 'Or contact me in any of the above',
  }

  const footerTexts = {
    hoverCardText: 'Built with',
    yearStateText: 'in development  |  2024',
    codeLinkText: 'Source code',
  }

  return {
    headerTexts,
    homeTexts,
    skillsTexts,
    skillsTitle,
    experienceTexts,
    experienceTitle,
    contactTexts,
    footerTexts,
  }
}

export default TextsEN
