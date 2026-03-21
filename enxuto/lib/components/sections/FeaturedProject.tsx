"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Github } from "lucide-react";
import Image from "next/image";
import { Theme, fadeUp } from "../../theme";

type FeaturedProjectProps = { t: Theme };

export function FeaturedProject({ t }: FeaturedProjectProps) {
  return (
    <section id="projetos" className="max-w-5xl mx-auto px-6 py-8">
      <motion.h2
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
        className="text-2xl font-semibold mb-6"
      >
        Projeto em Destaque
      </motion.h2>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
        <Card className={`${t.bgCard} border ${t.border} ${t.bgCardHov} transition-colors overflow-hidden`}>
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-64 flex-shrink-0 flex items-center justify-center p-6">
                <Image
                  src="/images/IOT.png"
                  alt="Casa Inteligente IoT"
                  width={600}
                  height={600}
                  className="rounded-xl w-48 h-48 object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <Wifi size={16} className={t.accent} />
                  <span className={`text-xs font-medium uppercase tracking-wider ${t.accent}`}>Destaque</span>
                </div>
                <h3 className="text-xl font-semibold">Casa Inteligente (IoT)</h3>
                <p className={`${t.textMuted} text-base leading-relaxed`}>
                  Sistema de automação residencial com controle em tempo real,
                  permitindo gerenciar dispositivos como luzes, fumaça e bomba de água.
                  Integração com ESP8266 via rede Wi-Fi.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["React", "ESP8266", "Web Server", "IoT"].map((tag) => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${t.tag}`}>{tag}</span>
                  ))}
                </div>
                <div className="flex gap-2 pt-1">
                  <a href="https://github.com/eduzimmartins22/Casa-Inteligente-" target="_blank">
                    <Button size="sm" variant="outline" className={`${t.btnOutline} text-xs`}>
                      <Github size={13} className="mr-1" /> Código
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}