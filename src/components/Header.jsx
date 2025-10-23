import { MoonIcon, SunIcon } from "@phosphor-icons/react";

const Header = ({ theme, onToggleTheme, onNavigate, currentIndex }) => {
  const buttons = [
    { label: "Sobre", index: 0 },
    { label: "Projetos", index: 1 },
    { label: "Contato", index: 2 },
  ];

  return (
    <header className="header flex gap-4 justify-center py-4 items-center">
      {buttons.map(({ label, index }) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={`transition-colors ${
            currentIndex === index
              ? "text-[#F858E8] font-semibold"
              : "text-gray-500 hover:text-[#F858E8]"
          }`}
        >
          {label}
        </button>
      ))}

      <button onClick={onToggleTheme} className="toggle-button ml-4">
        {theme === "light" ? (
          <MoonIcon size={24} weight="fill" />
        ) : (
          <SunIcon size={24} weight="fill" />
        )}
      </button>
    </header>
  );
};

export default Header;
