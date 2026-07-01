"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Theme, fadeUp } from "../../theme";

type ContactProps = { t: Theme };

export function Contact({ t }: ContactProps) {
  return (
    <section id="contato" className="max-w-5xl mx-auto px-6 py-24">

      {/* Divisor */}
      <div className={`w-16 h-px mb-16 ${t.barFill}`} />

      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show"
        viewport={{ once: true }} custom={0}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Texto */}
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold">Vamos trabalhar juntos?</h2>
          <p className={`${t.textMuted} text-lg leading-relaxed`}>
            Estou disponível para projetos freelance, contratos PJ e oportunidades de
            colaboração. Se você tem uma ideia ou um problema para resolver, me conta —
            respondo em até 24h.
          </p>
          <a href="https://wa.me/5527997475627" target="_blank">
            <Button className={`${t.btnPrimary} font-semibold px-6 border-0 mt-2`}>
              <MessageCircle className="mr-2" size={16} />
              Falar no WhatsApp agora
            </Button>
          </a>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {[
            {
              icon: <Mail size={18} />,
              label: "E-mail",
              value: "eduardomartinscardoso44@gmail.com",
              href: "mailto:eduardomartinscardoso44@gmail.com",
            },
            {
              icon: <Github size={18} />,
              label: "GitHub",
              value: "github.com/eduzimmartins22",
              href: "https://github.com/eduzimmartins22",
            },
            {
              icon: <Linkedin size={18} />,
              label: "LinkedIn",
              value: "Eduardo Martins",
              href: "https://www.linkedin.com/in/eduardo-martins-5a1426277/",
            },
          ].map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              className={`flex items-center gap-4 p-4 rounded-xl border ${t.border} ${t.bgCard} hover:border-opacity-80 transition-all group`}
            >
              <div className={`p-2 rounded-lg ${t.accentBg} ${t.accent}`}>
                {icon}
              </div>
              <div>
                <p className={`text-xs ${t.textFaint} uppercase tracking-wider`}>{label}</p>
                <p className={`text-sm font-medium group-hover:${t.accent} transition-colors`}>{value}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      <p className={`${t.textFaint} text-sm mt-20 text-center`}>
        © {new Date().getFullYear()} Eduardo Martins. Todos os direitos reservados.
      </p>
    </section>
  );
}
