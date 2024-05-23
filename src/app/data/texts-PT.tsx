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
      'Desenvolvedor FrontEnd',
      'Desenvolvedor Full stack',
      'Entusiasta DevOps',
    ],
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
  return { headerTexts, homeTexts, skillsTexts, skillsTitle }
}
export default TextsPT
