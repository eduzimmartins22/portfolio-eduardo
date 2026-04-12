"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, ArrowRight, Sparkles } from "lucide-react";
import { Theme, fadeUp } from "../../theme";

type LaunchedCourseProps = { t: Theme };

export function LaunchedCourse({ t }: LaunchedCourseProps) {
  return (
    <section id="course" className="max-w-5xl mx-auto px-6 py-12 mt-8">
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
            <Music className={`${t.accent}`} size={24} />
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold">Escalas Musicais</h2>
            <Sparkles className="text-yellow-400 animate-pulse" size={20} />
          </div>
        </div>
        <p className={`${t.textMuted} text-sm ml-12`}>Seu novo curso para iniciantes em flauta</p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={1}
      >
        <Card
          className={`relative overflow-hidden border-2 ${t.inProgress} bg-gradient-to-br transition-all hover:shadow-lg hover:border-green-500/40`}
        >
          {/* Gradiente decorativo de fundo */}
          <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5" />

          <CardContent className="p-8 space-y-6 relative z-10">
            {/* Header com badge */}
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl font-bold">Flauta para Iniciantes</h3>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-semibold ${t.wipBadge} bg-green-500/15 text-green-400 border-green-500/30`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    LANÇADO
                  </span>
                </div>
              </div>
            </div>

            {/* Descrição detalhada */}
            <div className="space-y-4">
              <p className={`${t.textMuted} text-base leading-relaxed`}>
                Um app educativo completo para aprender, praticar e testar seus conhecimentos sobre
                escalas musicais maiores e menores. Agora em um curso estruturado com gamificação, feedback
                imediato e dicas de teoria musical. Ideal para iniciantes que desejam dominar as fundações
                da música através da flauta.
              </p>

              {/* Pontos-chave do curso */}
              <div className="grid md:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2">
                  <span className={`text-lg ${t.accent} flex-shrink-0`}>🎵</span>
                  <span className={`${t.textMuted} text-sm`}>Aprenda escalas maiores e menores</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className={`text-lg ${t.accent} flex-shrink-0`}>🎮</span>
                  <span className={`${t.textMuted} text-sm`}>Jogo interativo com gamificação</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className={`text-lg ${t.accent} flex-shrink-0`}>⚡</span>
                  <span className={`${t.textMuted} text-sm`}>Feedback imediato e instantâneo</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className={`text-lg ${t.accent} flex-shrink-0`}>📚</span>
                  <span className={`${t.textMuted} text-sm`}>Dicas e teoria musical completa</span>
                </div>
              </div>
            </div>

            {/* Tags de tecnologia */}
            <div className="flex flex-wrap gap-2">
              {["Flutter", "Dart", "Educativo", "Música", "Gamificação"].map((tag) => (
                <span key={tag} className={`text-xs px-3 py-1 rounded-full ${t.tag}`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="https://pay.kiwify.com.br/QVTc7tn" target="_blank" className="flex-1">
                <Button className={`w-full font-semibold ${t.btnPrimary} border-0 h-11 text-base`}>
                  Acessar o Curso <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <Button
                variant="outline"
                className={`${t.btnOutline} font-semibold`}
                onClick={() => {
                  const courseSection = document.getElementById("course");
                  if (courseSection) {
                    courseSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Saiba Mais
              </Button>
            </div>

            {/* Nota sobre disponibilidade */}
            <div
              className={`text-xs ${t.textFaint} border-l-2 ${t.accent} border-opacity-30 pl-3 py-2`}
            >
              <p>
                🚀 <strong>Disponível agora!</strong> Acesso imediato ao conteúdo completo com suporte
                e atualizações contínuas.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
