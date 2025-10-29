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
      <h1>Olá! Me chamo Francine.</h1>
      <p className="text-sm">
        Graduanda em Tecnologia da Informação, com foco em desenvolvimento front-end utilizando <strong>React.js</strong>. 
        Possui conhecimentos em UI/UX, desenvolvimento de sistemas e suporte técnico. 
        Atualmente desenvolvendo habilidades no ecossistema <strong>JavaScript</strong>, com ênfase em capacitações oferecidas pela
        Rocketseat.
      </p>
    </div>

    <div className="flex mt-4 mb-50">
      <button className="button-cv">
        <a href="/meucv.pdf" download>Meu CV</a>
      </button>
    </div>

    <div className="grid gap-6 md:grid-cols-3 text-xs justify-items-center">
      <Section title="Linguagens & Tecnologias" icon={<CodeIcon size={24} />} items={[
        'HTML', 'CSS', 'JavaScript', 'React.js', 'React Native', 'Next.js', 'TypeScript', 'Node.js',
      ]} />
      <Section title="Frameworks & Ferramentas" icon={<DesktopIcon size={24} />} items={[
        'TailwindCSS', 'Git & GitHub', 'Figma'
      ]} />
      <Section title="Outros conhecimentos" icon={<BrainIcon size={24} />} items={[
        'UI/UX', 'Design Gráfico', 'Suporte Técnico', 'SQLite'
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
