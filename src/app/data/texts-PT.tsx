const TextsPT = () => {
  const headerTexts = {
    home: 'Home',
    about: 'Sobre',
    skills: 'Proficiências',
    experiences: 'Experiências',
    contact: 'Contato',
  }
  const homeTexts = {
    mainText: 'Olá! Eu sou Rodrigo Dias, ',
    introduction:
      'Graduando em Análise e Desenvolvimento de Sistemas, com foco no desenvolvimento de apps web e mobile de pequena e larga escala',
    connectButtonText: 'Vamos nos conectar!',
    cvButtonText: 'Download CV',
    toRotate: [
      'Desenvolvedor Mobile',
      'Desenvolvedor Backend',
      'Desenvolvedor Frontend',
      'Desenvolvedor Full Stack',
      'Desenvolvedor DevOps',
    ],
    isEn: false,
  }
  const skillsTexts = [
    {
      title: 'React',
      description:
        ' SPAs e MPAs responsívas com componentização e paginação geral',
    },
    {
      title: 'Nodejs',
      description:
        'Desenvolvimento e manuntenção de APIs com containerização e integração para bancos de dados e outros serviços',
    },
    {
      title: 'React-Native',
      description:
        'Desenvolvimento e manuntenção de apps com componentização and paginação',
    },
    {
      title: 'TailwindCss',
      description:
        'Estilização básica e integrações customizadas de CSS, tanto em React quanto React-Native(nativewind)',
    },
    {
      title: 'Prisma',
      description:
        'Design, estruturação e integração de bancos de dados para as linguagens suportadas pelo Prisma',
    },
    {
      title: 'Expo',
      description:
        'Desenvolvimento completo de apps com a utilização das ferramentas do Expo, como Expo-Router e Api-Routes',
    },
    {
      title: 'Go',
      description:
        'Desenvolvimento e manuntenção de APIs com containerização e integração para bancos de dados e outros serviços',
    },
    {
      title: 'DevOps',
      description:
        'Estruturação geral e  terraformação para apps usando features básicas de AWS, Supabase e Vercel',
    },
    {
      title: 'Docker',
      description:
        'Containerização direta para desenvolvimento, testes e implementação com Ubuntu desktop e server',
    },
    {
      title: 'Inglês',
      description:
        'Inglês fluente tanto escrito quanto falado, com experiência utilizando o inglês no ambiente de trabalho',
    },
  ]
  const skillsTitle = 'Proficiências'

  const experienceTexts = [
    {
      id: 1,
      category: 'education',
      year: '1/2024 - em andamento',
      title: 'Análise e Desenvolvimento de Sistemas - UTFPR Ponta Grossa',
      desc: 'Graduação superior',
    },
    {
      id: 2,
      category: 'education',
      year: '1/2019 - Locked on 2023',
      title: 'Engenharia elétrica - UTFPR Ponta Grossa',
      desc: 'Trancado',
    },

    {
      id: 3,
      category: 'work',
      year: '1/2024 - em andamento',
      title: 'Desenvolvedor Mobile - Fit-Experience',
      desc: 'Desenvolvimento completo baseado em React-Native e Expo',
    },
    {
      id: 4,
      category: 'work',
      year: '12/2022 - 1/2024',
      title: 'Estagiário - Copel CSL',
      desc: 'Redirecionamento digital e controle de dados de manutenção de equipamentos elétricos',
    },
    {
      id: 5,
      category: 'work',
      year: '4/2022 - 4/2024',
      title: 'Desenvolvedor Backend - Andre Sena Fitness Experience',
      desc: ' CRUD, geração e manutenção de rotas e funcionalidades de email',
    },
  ]
  const experienceTitle = 'Experiência'

  const contactTexts = {
    title: 'Contato',
    contactText:
      'Caso você queira me enviar um email sobre sugestões, oportunidadess ou se tem algo que eu possa lhe ajudar, clique no botão abaixo',
    buttonText: 'Enviar Email',
    bottomContactText: 'Ou fale comigo em qualquer um dos acima',
  }
  const footerTexts = {
    hoverCardText: 'Construido com',
    yearStateText: '2024',
    codeLinkText: 'Codigo fonte',
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
export default TextsPT
