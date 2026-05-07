"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { Theme, fadeUp } from "../../theme";

type LaunchedCourseProps = { t: Theme };

export function LaunchedCourse({ t }: LaunchedCourseProps) {
  return (
    <section id="course" className="max-w-5xl mx-auto px-6 py-12 mt-8">
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show"
        viewport={{ once: true }} custom={0}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className={`p-2 rounded-lg ${t.accentBg}`}>
            <Music className={`${t.accent}`} size={24} />
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold">Escalas Musicais</h2>
            <Sparkles className="text-yellow-400 animate-pulse" size={20} />
          </div>
        </div>
        <p className={`${t.textMuted} text-sm ml-12`}>Curso para iniciantes em flauta transversa</p>
      </motion.div>

      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show"
        viewport={{ once: true }} custom={1}
      >
        <Card className={`relative overflow-hidden border-2 ${t.inProgress} bg-gradient-to-br transition-all hover:shadow-lg hover:border-green-500/40`}>
          <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5" />

          <CardContent className="p-0 relative z-10">
            <div className="flex flex-col md:flex-row">

              {/* Foto da flauta */}
              <div className="md:w-56 flex-shrink-0 overflow-hidden rounded-tl-xl rounded-bl-xl">
                <Image
                  src="/images/flauta.jpg"
                  alt="Eduardo tocando flauta"
                  width={400}
                  height={500}
                  className="w-full h-56 md:h-full object-cover object-top"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-8 space-y-5 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl font-bold">Flauta para Iniciantes</h3>
                  <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-semibold bg-green-500/15 text-green-400 border border-green-500/30`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    LANÇADO
                  </span>
                </div>

                <p className={`${t.textMuted} text-base leading-relaxed`}>
                  App educativo com gamificação para aprender escalas musicais maiores e menores.
                  Feedback imediato, teoria musical e progressão estruturada. Ideal para quem
                  está começando do zero na flauta.
                </p>

                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    { ico: "🎵", txt: "Escalas maiores e menores" },
                    { ico: "🎮", txt: "Jogo interativo com gamificação" },
                    { ico: "⚡", txt: "Feedback imediato" },
                    { ico: "📚", txt: "Teoria musical completa" },
                  ].map(({ ico, txt }) => (
                    <div key={txt} className="flex items-center gap-2">
                      <span className="text-base">{ico}</span>
                      <span className={`${t.textMuted} text-sm`}>{txt}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Dart", "Educativo", "Música", "Gamificação"].map((tag) => (
                    <span key={tag} className={`text-xs px-3 py-1 rounded-full ${t.tag}`}>{tag}</span>
                  ))}
                </div>

                <a href="https://pay.kiwify.com.br/QVTc7tn" target="_blank" className="block">
                  <Button className={`font-semibold ${t.btnPrimary} border-0 h-11 text-base`}>
                    Acessar o Curso <ArrowRight className="ml-2" size={18} />
                  </Button>
                </a>

                <p className={`text-xs ${t.textFaint} border-l-2 border-green-500/30 pl-3`}>
                  🚀 <strong>Disponível agora</strong> — acesso imediato com suporte e atualizações contínuas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
