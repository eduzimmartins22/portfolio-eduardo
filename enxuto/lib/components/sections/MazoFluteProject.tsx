"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, ArrowRight } from "lucide-react";
import { Theme, fadeUp } from "../../theme";

type MazoFluteProjectProps = { t: Theme };

export function MazoFluteProject({ t }: MazoFluteProjectProps) {
  return (
    <section id="mazo-flute" className="max-w-5xl mx-auto px-6 py-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className={`p-2 rounded-lg ${t.accentBg}`}>
            <Music className={`${t.accent}`} size={20} />
          </div>
          <h2 className="text-2xl font-bold">Mazo Flute</h2>
        </div>

        <p className={`${t.muted}`}>
          Plataforma completa de ensino de flauta transversa com sistema de login,
          área do aluno e do professor, organização de estudos e materiais didáticos.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={1}
      >
        <Card className={`${t.card}`}>
          <CardContent className="p-6 space-y-4">

            <p>
              O <strong>Mazo Flute</strong> foi desenvolvido para centralizar o aprendizado musical,
              oferecendo uma experiência moderna e organizada para alunos e professores.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Sistema de login com Firebase</li>
              <li>Área exclusiva para alunos</li>
              <li>Painel de controle para professores</li>
              <li>Materiais de estudo (PDFs, exercícios, partituras)</li>
              <li>Interface responsiva e intuitiva</li>
            </ul>

            <div className="flex gap-4 flex-wrap pt-4">
              <Button className="flex items-center gap-2">
                Ver Projeto <ArrowRight size={16} />
              </Button>

              <Button variant="outline">
                Ver Código
              </Button>
            </div>

          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
