import { motion } from 'framer-motion';
import { CodeIcon, DesktopIcon, BrainIcon } from "@phosphor-icons/react";

const About = () => (
  <motion.section
    key="About"
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
        Entusiasta de UI/UX e design gráfico. <br /> Atualmente, estou aprofundando habilidades em 
        tecnologias modernas do ecossistema <strong>JavaScript</strong> através da Rocketseat.
      </p>
    </div>

    <div className="flex mt-4 mb-50">
      <button className="button-cv">
        <a href="/meucv.pdf" download>Meu CV</a>
      </button>
    </div>

    <div className="grid gap-6 md:grid-cols-3 text-xs justify-items-center">
      <Section title="Linguagens & Tecnologias" icon={<CodeIcon size={24} />} items={[
        'HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript', 'Next.js', 'Node.js', 'Delphi', 'Firebird'
      ]} />
      <Section title="Frameworks & Ferramentas" icon={<DesktopIcon size={24} />} items={[
        'TailwindCSS', 'Git & GitHub', 'Figma'
      ]} />
      <Section title="Outros conhecimentos" icon={<BrainIcon size={24} />} items={[
        'UI/UX', 'Web Design', 'Design Gráfico', 'Suporte Técnico'
      ]} />
    </div>
  </motion.section>
);

const Section = ({ title, icon, items }) => (
  <div>
    <h4 className="font-medium mb-2 flex flex-col items-center justify-center">
      {icon}
      {title}
    </h4>
    <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-gray-500">
      {items.map((item, i) => <span key={i}>{item}</span>)}
    </div>
  </div>
);

export default About;
