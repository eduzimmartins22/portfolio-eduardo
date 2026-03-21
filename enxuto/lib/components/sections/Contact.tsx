"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Theme, fadeUp } from "../../theme";

type ContactProps = { t: Theme };

export function Contact({ t }: ContactProps) {
  return (
    <section id="contato" className="max-w-5xl mx-auto px-6 py-24 text-center space-y-6">
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold">Vamos trabalhar juntos?</h2>
        <p className={`${t.textMuted} max-w-md mx-auto text-lg italic`}>
          Estou disponível para projetos freelance e oportunidades de trabalho. Entre em contato!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:eduardomartinscardoso44@gmail.com"
            className={`p-3 rounded-full border ${t.iconBtn} transition-all`}
            title="E-mail"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/eduzimmartins22"
            target="_blank"
            className={`p-3 rounded-full border ${t.iconBtn} transition-all`}
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-martins-5a1426277/"
            target="_blank"
            className={`p-3 rounded-full border ${t.iconBtn} transition-all`}
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
        <p className={`${t.textFaint} text-sm pt-8`}>
          © {new Date().getFullYear()} Eduardo Martins. Todos os direitos reservados.
        </p>
      </motion.div>
    </section>
  );
}