"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Theme } from "../../theme";

type HeroProps = { t: Theme };

export function Hero({ t }: HeroProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-28 text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className={`inline-block text-xs font-medium border px-3 py-1 rounded-full mb-6 ${t.badge}`}>
          🌿 Disponível para projetos e contratos
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        Eduardo Martins
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`text-xl ${t.textMuted} max-w-2xl mx-auto leading-relaxed italic`}
      >
        Desenvolvedor Frontend especializado em React e TypeScript criando aplicações modernas,
        performáticas e focadas na experiência do usuário.
        Experiência real com e-commerce, landing pages, sistemas IoT e apps mobile.
        Sempre buscando inovação, usabilidade e código limpo.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-4 flex-wrap"
      >
        <a href="https://wa.me/5527997475627" target="_blank">
          <Button className={`${t.btnPrimary} font-semibold px-6 border-0`}>Falar no WhatsApp</Button>
        </a>
        <a href="/CURRICULO.pdf" download>
          <Button variant="outline" className={`${t.btnOutline} px-6`}>
            Baixar CV <Download className="ml-2" size={16} />
          </Button>
        </a>
      </motion.div>
    </section>
  );
}