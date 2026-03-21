"use client";
import { Sun, Moon } from "lucide-react";
import { Theme } from "../theme";

type NavbarProps = {
  t: Theme;
  dark: boolean;
  setDark: (val: boolean) => void;
};

export function Navbar({ t, dark, setDark }: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${t.nav} backdrop-blur-md border-b ${t.navBorder} transition-colors duration-500`}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className={`font-bold tracking-tight text-lg ${t.accent}`}>EM</span>
        <div className={`flex gap-6 text-sm ${t.textMuted}`}>
          <a href="#sobre" className={`hover:${t.accent} transition-colors`}>Sobre</a>
          <a href="#projetos" className={`hover:${t.accent} transition-colors`}>Projetos</a>
          <a href="#apps" className={`hover:${t.accent} transition-colors`}>Apps</a>
          <a href="#contato" className={`hover:${t.accent} transition-colors`}>Contato</a>
        </div>
        <button
          onClick={() => setDark(!dark)}
          className={`p-2 rounded-full border ${t.iconBtn} transition-all duration-300`}
          title={dark ? "Modo claro" : "Modo escuro"}
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
}