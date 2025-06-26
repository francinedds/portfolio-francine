import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ArrowRightIcon, ArrowLeftIcon, MoonIcon, SunIcon, GithubLogoIcon, LinkedinLogoIcon, EnvelopeIcon, CodeIcon, DesktopIcon, BrainIcon } from "@phosphor-icons/react";

import girlTechDark from './assets/girl-tech-black.png';
import girlTechLight from './assets/girl-tech-white.png';
import chatDark from './assets/chat-black.png';
import chatLight from './assets/chat-white.png';

import './App.css';

const Sobre = () => (
  <motion.section
    key="sobre"
    className="section"
    initial={{ x: 300 }}
    animate={{ x: 0 }}
    exit={{ x: -300 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-full md:w-1/2 text-center mt-40">
      <h1>Olá, me chamo Francine!</h1>
      <p className="text-sm">
        Sou graduanda em Tecnologia da Informação, desenvolvedora front-end com foco em <strong>React.js</strong>. 
        Possuo experiência prática em desenvolvimento de sistemas com Delphi e Firebird, além de suporte técnico. 
        Entusiasta de UI/UX e design de interfaces com Figma. Atualmente, estou aprofundando habilidades em 
        tecnologias modernas do ecossistema <strong>JavaScript</strong> através da Rocketseat.
      </p>
    </div>
    <div className="flex mt-4 mb-50">
      <button className="button-cv">
        <a href="/meucv.pdf" download>
          Meu CV
        </a>
      </button>
    </div>

      <div className="grid gap-6 md:grid-cols-3 text-xs justify-items-center">
        
        {/* Linguagens & Tecnologias */}
        <div>
          <h4 className="font-medium mb-2 flex flex-col items-center justify-center">
            <CodeIcon size={24} className="mb-1" />
            Linguagens & Tecnologias
          </h4>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-gray-500">
            {[
              'JavaScript', 'TypeScript', 'HTML', 'CSS', 
              'React.js', 'Delphi', 'Firebird'
            ].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>

        {/* Frameworks & Ferramentas */}
        <div>
          <h4 className="font-medium mb-2 flex flex-col items-center justify-center">
            <DesktopIcon size={24} className="mb-1" />
            Frameworks & Ferramentas
          </h4>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-gray-500">
            {['TailwindCSS', 'Git', 'GitHub', 'Figma'].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>

        {/* Outros conhecimentos */}
        <div>
          <h4 className="font-medium mb-2 flex flex-col items-center justify-center">
            <BrainIcon size={24} className="mb-1" />
            Outros conhecimentos
          </h4>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-gray-500">
            {['UI/UX', 'Web Design', 'Suporte Técnico', 'Design Gráfico'].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>

      </div>
  </motion.section>
);

const Projetos = ({ theme }) => {
  return (
    <motion.section
      key="projetos"
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
        {[
          {
            title: 'Calendar Moonphase',
            description: 'Aplicação que exibe as fases da lua em um calendário interativo, permitindo aos usuários visualizar as fases lunares de qualquer data.',
            stack: ['React', 'Vite', 'TailwindCSS'],
            demo: 'https://calendar-moonphase.vercel.app',
            repo: 'https://github.com/francinedds/calendar-moonphase',
            highlights: [
              'Visualização interativa das fases lunares',
              'Interface limpa e responsiva',
              'Desenvolvido com React e Vite para desempenho otimizado',
            ],
          },
          {
            title: 'Recipes',
            description: 'Aplicativo para visualização e busca de receitas culinárias, com interface intuitiva e consumo de API.',
            stack: ['React', 'Vite', 'TailwindCSS'],
            demo: 'https://recipes-ruddy-xi.vercel.app',
            repo: 'https://github.com/francinedds/recipes',
            highlights: [
              'Interface amigável para navegação entre receitas',
              'Funcionalidade de busca eficiente',
              'Desenvolvido com React e Vite para melhor desempenho',
            ],
          },
          {
            title: 'Search Countries',
            description: 'Aplicativo que permite pesquisar informações sobre diferentes países, incluindo dados como população, área e idioma.',
            stack: ['React', 'Vite', 'TailwindCSS'],
            demo: 'https://search-countries.vercel.app',
            repo: 'https://github.com/francinedds/search-countries',
            highlights: [
              'Busca rápida e precisa de informações sobre países',
              'Interface limpa e fácil de usar',
              'Com consumo de API',
            ],
          },
          {
            title: 'Memory Game',
            description: 'Jogo de memória interativo onde o usuário deve encontrar pares de cartas correspondentes.',
            stack: ['React', 'Vite', 'TailwindCSS'],
            demo: 'https://memory-game.vercel.app',
            repo: 'https://github.com/francinedds/memory-game',
            highlights: [
              'Jogo interativo com indicativo de ganhador/empate',
              'Interface simples e envolvente',
              'Desenvolvido com React e Vite para melhor desempenho',
            ],
          },
        ].map((project, idx) => (
          <div
            key={idx}
            className="projects-card"
          >
            <h2 className="text-xl font-semibold mb-1">
              {project.title}
            </h2>
            <p className="text-sm">{project.description}</p>
            <p className="text-xs mt-2">
              <strong>Tecnologias:</strong> {project.stack.join(', ')}
            </p>
            <ul className="mt-3 list-disc list-inside text-sm space-y-1">
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-[#F858E8] font-semibold hover:underline"
              >
                Deploy
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="text-[#F858E8] font-semibold hover:underline"
              >
                Repositório
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

const Contato = ({ theme }) => (
  <motion.section
    key="contato"
    className="section"
    initial={{ x: 300 }}
    animate={{ x: 0 }}
    exit={{ x: -300 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-20 h-20 rounded-full p-2 border-2 flex items-center justify-center mb-2 mt-[-300px] sm:mt-0">
      <img 
        src={theme === 'dark' ? chatLight : chatDark} 
        alt="Ilustração temática"
        className="w-12 h-12 object-cover"
      />
    </div>

    <h1>Meus contatos</h1>
    <p className="text-center">Me envie uma mensagem nas redes sociais ou por email.</p>
    <div className="gap-4 mt-4">
      <a href="https://www.linkedin.com/in/francinedds" target="_blank" rel="noopener noreferrer" className="button-social">
        <LinkedinLogoIcon size={24} /> LinkedIn
      </a>
      <a href="https://github.com/francinedds" target="_blank" rel="noopener noreferrer" className="button-social">
        <GithubLogoIcon size={24} /> GitHub
      </a>
      <a href="mailto:francined71@gmail.com" className="button-social">
        <EnvelopeIcon size={24} /> E-mail
      </a>
    </div>
  </motion.section>
);

function App() {
  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState('light');
  const next = () => setIndex((prev) => Math.min(prev + 1, 2));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const goTo = (i) => setIndex(i);
  
  const sections = [<Sobre />, <Projetos theme={theme} />, <Contato theme={theme} />];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="app">
      <header className="header flex gap-4 justify-center py-4">
        <button onClick={() => goTo(0)}>Sobre</button>
        <button onClick={() => goTo(1)}>Projetos</button>
        <button onClick={() => goTo(2)}>Contato</button>
        <button onClick={toggleTheme} className="toggle-button">
          {theme === 'light' ? <MoonIcon size={24} weight="fill" /> : <SunIcon size={24} weight="fill"/>}
        </button>
      </header>

      <main className="slider relative">
        <AnimatePresence mode="wait">
          {sections[index]}
        </AnimatePresence>

        <div className="nav-arrows absolute bottom-4 right-4 flex gap-2">
          {index > 0 && (
            <button className="arrow-button" onClick={prev}>
              <ArrowLeftIcon size={20} />
            </button>
          )}
          {index < sections.length - 1 && (
            <button className="arrow-button" onClick={next}>
              <ArrowRightIcon size={20} />
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
