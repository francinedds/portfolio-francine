import { motion } from 'framer-motion';
import girlTechDark from '../assets/girl-tech-black.png';
import girlTechLight from '../assets/girl-tech-white.png';
import ProjectCard from './ProjectCard';

const Projects = ({ theme }) => {
  const projects = [
    // Projeto #1
    {
      title: 'Login FullStack',
      description: 'Projeto de autenticação fullstack com framework Next.js.',
      stack: ['Next', 'Express', 'TailwindCSS', 'MySQL'],
      demo: 'https://login-fullstack-kappa.vercel.app/signup', 
      repo: 'https://github.com/francinedds/login-fullstack',
      highlights: [
        'Autenticação de usuários com JWT',
        'Integração com backend Node.js',
        'Banco de dados MySQL',
      ],
    },

    // Projeto #2
    {
      title: 'Akademi',
      description: 'Projeto desenvolvido como um desafio técnico para uma fintech.',
      stack: ['Next', 'TailwindCSS'],
      demo: 'https://akademi-eight.vercel.app/students', 
      repo: 'https://github.com/francinedds/akademi',
      highlights: [
        'Roteamento de páginas Next.js',
        'Tabela com paginação',
        'Filtro do tipo dropdown',
      ],
    },

    // Projeto #3
    {
      title: 'De Grão em Grão',
      description: 'App cafeteria mobile-first em Next.js com catálogo de produtos.',
      stack: ['Next', 'TailwindCSS'],
      demo: 'https://cafeteria-next-app.vercel.app/',
      repo: 'https://github.com/francinedds/cafeteria-next-app', 
      highlights: [
        'Layout mobile-first',
        'Context API para adicionar/excluir itens',
        'Componentização clara e clean',
      ],
    },

    // Projeto #4
    {
      title: 'Calendar Moonphase',
      description: 'Aplicação que exibe as fases da lua.',
      stack: ['React', 'Vite', 'TailwindCSS'],
      demo: 'https://calendar-moonphase.vercel.app',
      repo: 'https://github.com/francinedds/calendar-moonphase',
      highlights: [
        'Visualização das fases lunares',
        'Interface limpa e responsiva',
        'Desenvolvido com foco em uso em desktop',
      ],
    },
    
  ];

  return (
    <motion.section
      key="Projects"
      className="section"
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-24 h-24 rounded-full p-2 border-2 flex items-center justify-center mb-2 mt-[800px] sm:mt-0">
        <img
          src={theme === 'dark' ? girlTechLight : girlTechDark}
          alt="Ilustração temática"
          className="w-16 h-16 object-cover"
        />
      </div>

      <h1 className="text-center">Meus projetos recentes</h1>
      <p className="text-center">Aqui estão alguns projetos que desenvolvi.</p>

      <div className="w-full max-w-4xl mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </motion.section>
  );
};

export default Projects;
