import { motion } from 'framer-motion';
import girlTechDark from '../assets/girl-tech-black.png';
import girlTechLight from '../assets/girl-tech-white.png';
import ProjectCard from './ProjectCard';

const Projects = ({ theme }) => {
  const projects = [
    {
      title: 'Calendar Moonphase',
      description: 'Aplicação que exibe as fases da lua...',
      stack: ['React', 'Vite', 'TailwindCSS'],
      demo: 'https://calendar-moonphase.vercel.app',
      repo: 'https://github.com/francinedds/calendar-moonphase',
      highlights: [
        'Visualização das fases lunares',
        'Interface limpa e responsiva',
        'Desenvolvido com React e Vite para desempenho otimizado',
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
