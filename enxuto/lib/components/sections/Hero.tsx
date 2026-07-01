"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Theme } from "../../theme";

type HeroProps = { t: Theme };

export function Hero({ t }: HeroProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Texto — lado esquerdo */}
        <div className="flex-1 space-y-6 text-left">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`inline-block text-xs font-medium border px-3 py-1 rounded-full ${t.badge}`}>
              🌿 Disponível para novos projetos — respondo em até 24h
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <p className={`text-sm uppercase tracking-widest font-medium ${t.textFaint}`}>
              Desenvolvedor Frontend
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Eduardo<br />Martins
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${t.textMuted} text-lg leading-relaxed max-w-md`}
          >
            Ajudo negócios a lançar sites e apps que realmente convertem —
            com React, TypeScript e atenção aos detalhes que fazem a diferença
            entre um projeto comum e um produto que os clientes usam de verdade.
            Já entreguei e-commerces, apps mobile e sistemas web para clientes reais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-3 flex-wrap"
          >
            <a href="https://wa.me/5527997475627" target="_blank">
              <Button className={`${t.btnPrimary} font-semibold px-6 border-0`}>
                Falar no WhatsApp <ArrowRight className="ml-2" size={15} />
              </Button>
            </a>
            <a href="/CURRICULO.pdf" download>
              <Button variant="outline" className={`${t.btnOutline} px-6`}>
                Baixar CV <Download className="ml-2" size={15} />
              </Button>
            </a>
          </motion.div>

          {/* Números rápidos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-8 pt-2"
          >
            <div>
              <p className="text-2xl font-bold">+10</p>
              <p className={`text-xs ${t.textFaint} uppercase tracking-wider`}>Projetos entregues</p>
            </div>
            <div className={`w-px ${t.border} border-l`} />
            <div>
              <p className="text-2xl font-bold">21</p>
              <p className={`text-xs ${t.textFaint} uppercase tracking-wider`}>Anos de idade</p>
            </div>
            <div className={`w-px ${t.border} border-l`} />
            <div>
              <p className="text-2xl font-bold">+20</p>
              <p className={`text-xs ${t.textFaint} uppercase tracking-wider`}>Alunos formados</p>
            </div>
          </motion.div>
        </div>

        {/* Foto — lado direito */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Borda decorativa */}
            <div className={`absolute -inset-1 rounded-2xl ${t.accentBg} opacity-60`} />
            <div className={`absolute -inset-0.5 rounded-2xl border-2 border-dashed opacity-20`}
                 style={{ borderColor: 'currentColor' }} />
            <Image
              src="/images/perfil.png"
              alt="Eduardo Martins"
              width={280}
              height={380}
              className="relative rounded-2xl object-cover object-top w-56 h-72 md:w-64 md:h-80"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
