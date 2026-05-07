"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music2, ArrowRight, Users, BookOpen, Shield, Database, ExternalLink } from "lucide-react";
import { Theme, fadeUp } from "../../theme";

type MazoFluteProjectProps = { t: Theme };

export function MazoFluteProject({ t }: MazoFluteProjectProps) {
  return (
    <section id="mazo-flute" className="max-w-5xl mx-auto px-6 py-12">

      {/* Título da seção */}
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
            <Music2 className={`${t.accent}`} size={22} />
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold">Mazo Flute</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 font-semibold">
              PLATAFORMA WEB
            </span>
          </div>
        </div>
        <p className={`${t.textMuted} text-sm ml-12`}>
          Plataforma completa de ensino de flauta transversa — desenvolvida do zero
        </p>
      </motion.div>

      {/* Card principal */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={1}
      >
        <Card className={`relative overflow-hidden border-2 ${t.card} transition-all hover:shadow-lg hover:border-blue-500/30`}>
          <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-blue-500/5 via-transparent to-amber-500/5" />

          <CardContent className="p-8 space-y-8 relative z-10">

            {/* Apresentação visual do projeto */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Lado esquerdo — descrição */}
              <div className="flex-1 space-y-4">
                <p className={`${t.textMuted} text-base leading-relaxed`}>
                  O <strong className="text-foreground">Mazo Flute</strong> nasceu da necessidade real de organizar
                  o ensino de flauta transversa. É uma plataforma web completa, com sistema de autenticação,
                  painel do professor, área do aluno e banco de dados em nuvem — tudo desenvolvido com
                  HTML, CSS e JavaScript puro + Firebase.
                </p>
                <p className={`${t.textMuted} text-base leading-relaxed`}>
                  O professor gerencia módulos, aprova avanços e cadastra alunos. O aluno acompanha
                  sua jornada mês a mês, acessa materiais, marca objetivos e solicita evolução de módulo.
                  Cada funcionalidade foi construída com base em uma necessidade real de um curso ativo.
                </p>
              </div>

              {/* Lado direito — preview do site */}
              <div className="w-full md:w-64 flex-shrink-0">
                <a
                  href="https://mazoflute.comm.seg.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block rounded-xl border-2 ${t.inProgress} overflow-hidden hover:border-amber-400/50 transition-all group`}
                >
                  <div className="bg-[#0f1b2d] p-4 text-center space-y-2">
                    {/* Mini logo */}
                    <div className="text-3xl">🎵</div>
                    <div className="text-amber-300 font-bold text-sm tracking-widest">MAZO FLUTE</div>
                    <div className="text-amber-600/60 text-xs tracking-wider">CURSO DE FLAUTA TRANSVERSA</div>
                    <div className={`mt-3 text-xs ${t.textMuted} flex items-center justify-center gap-1`}>
                      <ExternalLink size={10} />
                      mazoflute.comm.seg.br
                    </div>
                  </div>
                  <div className={`p-3 text-center text-xs ${t.textFaint} group-hover:text-amber-400 transition-colors flex items-center justify-center gap-1`}>
                    Visitar plataforma <ArrowRight size={12} />
                  </div>
                </a>
              </div>
            </div>

            {/* Funcionalidades em grid */}
            <div>
              <h4 className={`text-sm font-semibold mb-4 ${t.textMuted} uppercase tracking-wider`}>
                O que foi construído
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className={`flex items-start gap-3 p-3 rounded-lg ${t.accentBg} bg-opacity-50`}>
                  <Shield size={16} className={`${t.accent} mt-0.5 flex-shrink-0`} />
                  <div>
                    <div className="text-sm font-semibold">Autenticação por perfil</div>
                    <div className={`text-xs ${t.textMuted}`}>Login separado para professor e aluno, com validação no Firebase</div>
                  </div>
                </div>
                <div className={`flex items-start gap-3 p-3 rounded-lg ${t.accentBg} bg-opacity-50`}>
                  <Users size={16} className={`${t.accent} mt-0.5 flex-shrink-0`} />
                  <div>
                    <div className="text-sm font-semibold">Painel do professor</div>
                    <div className={`text-xs ${t.textMuted}`}>Cadastro de alunos, senhas individuais, aprovação de avanço de módulo</div>
                  </div>
                </div>
                <div className={`flex items-start gap-3 p-3 rounded-lg ${t.accentBg} bg-opacity-50`}>
                  <BookOpen size={16} className={`${t.accent} mt-0.5 flex-shrink-0`} />
                  <div>
                    <div className="text-sm font-semibold">Jornada mensal do aluno</div>
                    <div className={`text-xs ${t.textMuted}`}>10 módulos progressivos com checklist, progresso e materiais em PDF</div>
                  </div>
                </div>
                <div className={`flex items-start gap-3 p-3 rounded-lg ${t.accentBg} bg-opacity-50`}>
                  <Database size={16} className={`${t.accent} mt-0.5 flex-shrink-0`} />
                  <div>
                    <div className="text-sm font-semibold">Firebase Firestore</div>
                    <div className={`text-xs ${t.textMuted}`}>Dados em nuvem em tempo real — funciona em qualquer dispositivo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "Firebase", "Firestore", "Arquitetura modular", "Responsivo"].map((tag) => (
                <span key={tag} className={`text-xs px-3 py-1 rounded-full ${t.tag}`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Destaque — o que torna especial */}
            <div className={`text-sm ${t.textMuted} border-l-2 border-amber-500/40 pl-4 py-2 space-y-1`}>
              <p className="font-semibold text-foreground">Por que esse projeto é diferente?</p>
              <p>
                Não é um projeto de portfólio fictício — é uma plataforma em uso real, com alunos ativos,
                desenvolvida iterativamente com base no feedback do professor Eduardo, que é também o criador
                do conteúdo. Cada funcionalidade resolveu um problema concreto do dia a dia do curso.
              </p>
            </div>

            {/* Botão */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://mazoflute.comm.seg.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className={`w-full font-semibold ${t.btnPrimary} border-0 h-11 text-base`}>
                  Visitar a Plataforma <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
            </div>

          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
