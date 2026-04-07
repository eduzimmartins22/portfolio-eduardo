"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Smartphone } from "lucide-react";
import { Theme, fadeUp } from "../../theme";

type InProgressProps = { t: Theme };

export function InProgress({ t }: InProgressProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-8 mt-4">
      <motion.h2
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
        className="text-2xl font-semibold mb-6"
      >
        Em Desenvolvimento
      </motion.h2>

      {/* Emanuel Sneakers */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
        <Card className={`border ${t.inProgress} transition-colors h-full`}>
          <CardContent className="p-6 space-y-4 flex flex-col h-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart size={14} className="text-amber-500" />
                <span className="text-xs text-amber-500 font-medium uppercase tracking-wider">E-commerce · Cliente Emanuel</span>
              </div>
              <span className={`text-xs border px-2 py-0.5 rounded-full ${t.wipBadge}`}>Em processo</span>
            </div>
            <h3 className="text-lg font-semibold">Projeto Emanuel — Sneakers 👟</h3>
            <p className={`${t.textMuted} text-base leading-relaxed`}>
              E-commerce completo para revenda de sneakers e derivados, com identidade visual
              focada em streetwear e experiência de compra fluida.
            </p>
            <ul className={`${t.textMuted} text-sm space-y-1`}>
              <li>🏪 Página institucional — quem somos, revendedores</li>
              <li>👟 Catálogo de produtos com filtros</li>
              <li>🚚 Tela de acompanhamento de entrega</li>
              <li>🛒 Carrinho de compras completo</li>
              <li>💳 Gateway de pagamento integrado</li>
              <li>↩️ Política de reembolso e contato</li>
            </ul>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js", "Tailwind", "Gateway de Pagamento", "Em breve"].map((tag) => (
                <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${t.tag} opacity-50`}>{tag}</span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Escalas Musicais */}
      <div className="max-w-5xl mx-auto px-6 py-8 mt-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
          <Card className={`border ${t.inProgress} transition-colors h-full`}>
            <CardContent className="p-6 space-y-4 flex flex-col h-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Smartphone size={14} className="text-amber-500" />
                  <span className="text-xs text-amber-500 font-medium uppercase tracking-wider">App Mobile</span>
                </div>
                <span className={`text-xs border px-2 py-0.5 rounded-full ${t.wipBadge}`}>Em processo</span>
              </div>
              <h3 className="text-lg font-semibold">Escalas Musicais — Flauta para Iniciantes</h3>
              <p className={`${t.textMuted} text-base leading-relaxed flex-1`}>
                App educativo para aprender, praticar e testar conhecimentos sobre escalas musicais
                maiores e menores. Jogo interativo onde o usuário monta escalas, recebe feedback
                imediato, acessa dicas de teoria musical e explora relações entre escalas.
                Em breve como curso de flauta para iniciantes.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Dart", "Educativo", "Música", "Em breve"].map((tag) => (
                  <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${t.tag} opacity-50`}>{tag}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}