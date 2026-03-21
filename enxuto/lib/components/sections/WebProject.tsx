"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Megaphone, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Theme, fadeUp } from "../../theme";

type WebProjectsProps = { t: Theme };

export function WebProjects({ t }: WebProjectsProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-8 mt-4">
      <motion.h2
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
        className="text-2xl font-semibold mb-6"
      >
        Projetos Web
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* UGO */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
          <Card className={`${t.bgCard} border ${t.border} ${t.bgCardHov} transition-colors h-full`}>
            <CardContent className="p-6 space-y-4 flex flex-col h-full">
              <div className="flex justify-center">
                <Image src="/images/ugo.png" alt="E-commerce Ugo Celulares" width={600} height={600} className="rounded-xl w-48 h-48 object-cover" />
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart size={14} className="text-emerald-500" />
                <span className="text-xs text-emerald-500 font-medium uppercase tracking-wider">E-commerce</span>
              </div>
              <h3 className="text-lg font-semibold">Ugo Celulares</h3>
              <p className={`${t.textMuted} text-base leading-relaxed flex-1`}>
                E-commerce completo para cliente real, com foco em conversão e experiência do usuário.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind", "API"].map((tag) => (
                  <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${t.tag}`}>{tag}</span>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <a href="https://ugocelulares.comm.seg.br/" target="_blank" className="flex-1">
                  <Button size="sm" className={`w-full ${t.btnPrimary} border-0`}>
                    Ver Projeto <ExternalLink className="ml-2" size={13} />
                  </Button>
                </a>
                <a href="https://github.com/eduzimmartins22/UGOsite" target="_blank">
                  <Button size="sm" variant="outline" className={`${t.btnOutline}`}>
                    <Github size={14} />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* BUZZ */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}>
          <Card className={`${t.bgCard} border ${t.border} ${t.bgCardHov} transition-colors h-full`}>
            <CardContent className="p-6 space-y-4 flex flex-col h-full">
              <div className="flex justify-center">
                <Image src="/images/buzz.png" alt="Landing Page Buzz Digital" width={600} height={600} className="rounded-xl w-48 h-48 object-cover" />
              </div>
              <div className="flex items-center gap-2">
                <Megaphone size={14} className="text-amber-500" />
                <span className="text-xs text-amber-500 font-medium uppercase tracking-wider">Landing Page</span>
              </div>
              <h3 className="text-lg font-semibold">Buzz Digital</h3>
              <p className={`${t.textMuted} text-base leading-relaxed flex-1`}>
                Landing page para cliente de marketing digital, com foco em conversão e captação de leads.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind"].map((tag) => (
                  <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${t.tag}`}>{tag}</span>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <a href="https://portif-lio-cliente.vercel.app/" target="_blank" className="flex-1">
                  <Button size="sm" className={`w-full ${t.btnPrimary} border-0`}>
                    Ver Projeto <ExternalLink className="ml-2" size={13} />
                  </Button>
                </a>
                <a href="https://github.com/eduzimmartins22/Portif-lioCliente" target="_blank">
                  <Button size="sm" variant="outline" className={`${t.btnOutline}`}>
                    <Github size={14} />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}