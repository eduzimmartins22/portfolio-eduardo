"use client";
import { motion } from "framer-motion";
import { Theme, skills, fadeUp } from "../../theme";

type AboutProps = { t: Theme };

export function About({ t }: AboutProps) {
  return (
    <section id="sobre" className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      {/* Sobre mim */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
        <h2 className="text-2xl font-semibold mb-4">Sobre mim</h2>
        <p className={`${t.textMuted} leading-relaxed text-lg`}>
          Sou desenvolvedor frontend com experiência em projetos reais para clientes,
          atuando na criação de interfaces modernas, responsivas e funcionais freelancer e contratos PJ.
        </p>
        <p className={`${t.textMuted} leading-relaxed text-lg mt-4`}>
          Já desenvolvi e-commerces, landing pages, sistemas integrados com IoT e
          aplicativos mobile com Flutter, sempre focando em performance, usabilidade e experiência do usuário.
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="space-y-3">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className={t.text}>{skill.name}</span>
                <span className={t.textFaint}>{skill.level}%</span>
              </div>
              <div className={`h-1.5 ${t.bar} rounded-full overflow-hidden`}>
                <motion.div
                  className={`h-full ${t.barFill} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}