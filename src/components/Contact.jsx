import { motion } from 'framer-motion';
import { LinkedinLogoIcon, GithubLogoIcon, EnvelopeIcon } from "@phosphor-icons/react";
import chatDark from '../assets/chat-black.png';
import chatLight from '../assets/chat-white.png';

const Contact = ({ theme }) => (
  <motion.section
    key="Contact"
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

export default Contact;
