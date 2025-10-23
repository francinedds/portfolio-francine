const ProjectCard = ({ title, description, stack, demo, repo, highlights }) => (
  <div className="projects-card">
    <h2 className="text-xl font-semibold mb-1">{title}</h2>
    <p className="text-sm">{description}</p>
    <p className="text-xs mt-2">
      <strong>Tecnologias:</strong> {stack.join(', ')}
    </p>
    <ul className="mt-3 list-disc list-inside text-sm space-y-1">
      {highlights.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
    <div className="mt-4 flex gap-4 text-sm">
      {demo && <a href={demo} target="_blank" rel="noreferrer" className="text-[#F858E8] font-semibold hover:underline">Deploy</a>}
      {repo && <a href={repo} target="_blank" rel="noreferrer" className="text-[#F858E8] font-semibold hover:underline">Repositório</a>}
    </div>
  </div>
);

export default ProjectCard;
