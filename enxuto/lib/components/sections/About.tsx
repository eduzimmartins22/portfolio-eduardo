"use client";
import { motion } from "framer-motion";
import { Theme, fadeUp } from "../../theme";

type AboutProps = { t: Theme };

const stack = [
  { cat: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { cat: "Mobile",   items: ["Flutter", "Dart"] },
  { cat: "Backend",  items: ["Node.js", "Python", "SQL"] },
  { cat: "Outros",   items: ["Firebase", "IoT", "ESP8266", "Git"] },
];

export function About({ t }: AboutProps) {
  return (
    <section id="sobre" className="max-w-5xl mx-auto px-6 py-16">

      {/* Divisor sutil */}
      <div className={`w-16 h-px mb-12 ${t.barFill}`} />

      <div className="grid md:grid-cols-2 gap-16">

        {/* Sobre mim */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true }} custom={0}
          className="space-y-5"
        >
          <h2 className="text-2xl font-semibold">Sobre mim</h2>

          <p className={`${t.textMuted} leading-relaxed text-base`}>
            Tenho 21 anos e sou desenvolvedor Frontend com experiência real em projetos
            para clientes — e-commerces, landing pages, sistemas IoT e plataformas web
            completas. Atuo como freelancer e em contratos PJ.
          </p>

          <p className={`${t.textMuted} leading-relaxed text-base`}>
            Fora do código, toco flauta transversa há mais de 10 anos e já formei
            mais de 20 alunos. Essa experiência me ensinou a comunicar ideias com
            clareza — o que faz toda diferença quando trabalho com clientes.
          </p>

          <p className={`${t.textMuted} leading-relaxed text-base`}>
            Gosto de projetos que resolvem problemas reais. Cada linha de código
            que escrevo existe por uma razão prática.
          </p>
        </motion.div>

        {/* Stack */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true }} custom={1}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">Stack</h2>

          <div className="space-y-5">
            {stack.map((group) => (
              <div key={group.cat}>
                <p className={`text-xs uppercase tracking-widest font-medium ${t.textFaint} mb-2`}>
                  {group.cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={`text-sm px-3 py-1 rounded-full ${t.tag}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
