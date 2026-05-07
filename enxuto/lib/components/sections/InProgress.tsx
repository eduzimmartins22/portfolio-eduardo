"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Theme, fadeUp } from "../../theme";

type InProgressProps = { t: Theme };

export function InProgress({ t }: InProgressProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-8 mt-4">

      {/* Divisor */}
      <div className={`w-16 h-px mb-10 ${t.barFill}`} />

      <motion.h2
        variants={fadeUp} initial="hidden" whileInView="show"
        viewport={{ once: true }} custom={0}
        className={`text-sm uppercase tracking-widest font-medium ${t.textFaint} mb-6`}
      >
        Em desenvolvimento
      </motion.h2>

      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show"
        viewport={{ once: true }} custom={1}
      >
        <Card className={`border ${t.inProgress} transition-colors`}>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <ShoppingCart size={14} className="text-amber-500" />
                <span className="text-xs text-amber-500 font-medium uppercase tracking-wider">
                  E-commerce · Cliente Emanuel
                </span>
              </div>
              <span className={`text-xs border px-2 py-0.5 rounded-full ${t.wipBadge}`}>
                Em processo
              </span>
            </div>

            <h3 className="text-lg font-semibold">Projeto Emanuel — Sneakers 👟</h3>

            <p className={`${t.textMuted} text-sm leading-relaxed`}>
              E-commerce completo para revenda de sneakers com identidade visual focada em
              streetwear — catálogo com filtros, carrinho, gateway de pagamento e acompanhamento de entrega.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js", "Tailwind", "Gateway de Pagamento"].map((tag) => (
                <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${t.tag} opacity-60`}>
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
