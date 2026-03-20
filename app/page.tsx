"use client";
import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail, Github, Linkedin, ExternalLink, Download,
  Wifi, ShoppingCart, Megaphone, Smartphone, Clock, Sun, Moon
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "HTML & CSS", level: 95 },
  { name: "Python", level: 60 },
  { name: "SQL", level: 65 },
];

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  const t = {
    bg:         dark ? "bg-[#1a1f14]"        : "bg-[#f5f0e8]",
    bgCard:     dark ? "bg-[#242b1c]/80"     : "bg-[#ede8dc]/80",
    bgCardHov:  dark ? "hover:border-[#6b8c42]/40" : "hover:border-[#5a7a32]/40",
    border:     dark ? "border-[#3d4f28]/50" : "border-[#c8b89a]/60",
    nav:        dark ? "bg-[#1a1f14]/85"     : "bg-[#f5f0e8]/85",
    navBorder:  dark ? "border-[#3d4f28]/40" : "border-[#c8b89a]/50",
    text:       dark ? "text-[#e8e0d0]"      : "text-[#2c2416]",
    textMuted:  dark ? "text-[#a89880]"      : "text-[#6b5a42]",
    textFaint:  dark ? "text-[#6b5a42]"      : "text-[#a89880]",
    accent:     dark ? "text-[#8fbe4a]"      : "text-[#4a7a1e]",
    accentBg:   dark ? "bg-[#8fbe4a]/10"     : "bg-[#4a7a1e]/10",
    badge:      dark ? "bg-[#3d4f28]/60 border-[#6b8c42]/30 text-[#a8c870]"
                     : "bg-[#d4e8b0]/60 border-[#6b8c42]/40 text-[#3a5a1a]",
    tag:        dark ? "bg-[#3d4f28]/60 text-[#c8d8a8]" : "bg-[#c8d8a8]/60 text-[#3a5a1a]",
    bar:        dark ? "bg-[#3d4f28]"        : "bg-[#c8b89a]",
    barFill:    dark ? "bg-[#8fbe4a]"        : "bg-[#4a7a1e]",
    btnPrimary: dark ? "bg-[#6b8c42] hover:bg-[#7da04e] text-[#f5f0e8]"
                     : "bg-[#4a7a1e] hover:bg-[#5a8a2e] text-[#f5f0e8]",
    btnOutline: dark ? "border-[#6b8c42]/50 hover:border-[#8fbe4a] text-[#c8d8a8]"
                     : "border-[#6b8c42]/60 hover:border-[#4a7a1e] text-[#3a5a1a]",
    iconBtn:    dark ? "border-[#3d4f28] hover:border-[#6b8c42] hover:bg-[#3d4f28]/50"
                     : "border-[#c8b89a] hover:border-[#6b8c42] hover:bg-[#c8d8a8]/30",
    inProgress: dark ? "border-[#8fbe4a]/15 hover:border-[#8fbe4a]/30 bg-[#242b1c]/50"
                     : "border-[#6b8c42]/20 hover:border-[#6b8c42]/40 bg-[#ede8dc]/50",
    wipBadge:   dark ? "bg-[#8fbe4a]/10 text-[#8fbe4a] border-[#8fbe4a]/20"
                     : "bg-[#4a7a1e]/10 text-[#4a7a1e] border-[#4a7a1e]/20",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Crimson+Pro:wght@300;400;500&display=swap');
        * { font-family: 'Crimson Pro', Georgia, serif; }
        h1, h2, h3, nav span { font-family: 'Lora', Georgia, serif; }
      `}</style>

      <div className={`min-h-screen ${t.bg} ${t.text} transition-colors duration-500`}>

        {/* NAV */}
        <nav className={`fixed top-0 left-0 right-0 z-50 ${t.nav} backdrop-blur-md border-b ${t.navBorder} transition-colors duration-500`}>
          <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
            <span className={`font-bold tracking-tight text-lg ${t.accent}`}>EM</span>
            <div className={`flex gap-6 text-sm ${t.textMuted}`}>
              <a href="#sobre" className={`hover:${t.accent} transition-colors`}>Sobre</a>
              <a href="#projetos" className={`hover:${t.accent} transition-colors`}>Projetos</a>
              <a href="#apps" className={`hover:${t.accent} transition-colors`}>Apps</a>
              <a href="#contato" className={`hover:${t.accent} transition-colors`}>Contato</a>
            </div>
            <button
              onClick={() => setDark(!dark)}
              className={`p-2 rounded-full border ${t.iconBtn} transition-all duration-300`}
              title={dark ? "Modo claro" : "Modo escuro"}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </nav>

        <div className="pt-14">

          {/* HERO */}
          <section className="max-w-5xl mx-auto px-6 py-28 text-center space-y-6">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <span className={`inline-block text-xs font-medium border px-3 py-1 rounded-full mb-6 ${t.badge}`}>
                🌿 Disponível para projetos freelance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              Eduardo Martins
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className={`text-xl ${t.textMuted} max-w-2xl mx-auto leading-relaxed italic`}
            >
              Desenvolvedor Frontend especializado em React, criando aplicações modernas,
              performáticas e focadas na experiência do usuário.
              Experiência real com e-commerce, landing pages, sistemas IoT e apps mobile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
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

          {/* SOBRE + SKILLS */}
          <section id="sobre" className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
              <h2 className="text-2xl font-semibold mb-4">Sobre mim</h2>
              <p className={`${t.textMuted} leading-relaxed text-lg`}>
                Sou desenvolvedor frontend com experiência em projetos reais para clientes,
                atuando na criação de interfaces modernas, responsivas e funcionais.
              </p>
              <p className={`${t.textMuted} leading-relaxed text-lg mt-4`}>
                Já desenvolvi e-commerces, landing pages, sistemas integrados com IoT e
                aplicativos mobile com Flutter, sempre focando em performance, usabilidade e código limpo.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
              <h2 className="text-2xl font-semibold mb-6">Skills</h2>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className={t.text}>{skill.name}</span>
                      <span className={t.textFaint}>{skill.level}%</span>
                    </div>
                    <div className={`h-1.5 ${t.bar} rounded-full overflow-hidden`}>
                      <motion.div
                        className={`h-full ${t.barFill} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* PROJETO DESTAQUE */}
          <section id="projetos" className="max-w-5xl mx-auto px-6 py-8">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} className="text-2xl font-semibold mb-6">
              Projeto em Destaque
            </motion.h2>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
              <Card className={`${t.bgCard} border ${t.border} ${t.bgCardHov} transition-colors overflow-hidden`}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-64 flex-shrink-0 flex items-center justify-center p-6">
                      <Image src="/images/IOT.png" alt="Casa Inteligente IoT" width={600} height={600} className="rounded-xl w-48 h-48 object-cover" />
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

          {/* PROJETOS WEB */}
          <section className="max-w-5xl mx-auto px-6 py-8 mt-4">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} className="text-2xl font-semibold mb-6">
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
                    <p className={`${t.textMuted} text-base leading-relaxed flex-1`}>E-commerce completo para cliente real, com foco em conversão e experiência do usuário.</p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Tailwind", "API"].map((tag) => (
                        <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${t.tag}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-2">
                      <a href="https://ugocelulares.comm.seg.br/" target="_blank" className="flex-1">
                        <Button size="sm" className={`w-full ${t.btnPrimary} border-0`}>Ver Projeto <ExternalLink className="ml-2" size={13} /></Button>
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
                    <p className={`${t.textMuted} text-base leading-relaxed flex-1`}>Landing page para cliente de marketing digital, com foco em conversão e captação de leads.</p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Tailwind"].map((tag) => (
                        <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${t.tag}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-2">
                      <a href="https://portif-lio-cliente.vercel.app/" target="_blank" className="flex-1">
                        <Button size="sm" className={`w-full ${t.btnPrimary} border-0`}>Ver Projeto <ExternalLink className="ml-2" size={13} /></Button>
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

          {/* APPS MOBILE */}
          <section id="apps" className="max-w-5xl mx-auto px-6 py-8 mt-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} className="mb-6">
              <div className="flex items-center gap-3">
                <Smartphone size={20} className={t.accent} />
                <h2 className="text-2xl font-semibold">Aplicativos Mobile</h2>
              </div>
              <p className={`${t.textFaint} text-sm mt-1 ml-8`}>Desenvolvidos com Flutter — iOS & Android</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">

              {/* ISAAC */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
                <Card className={`${t.bgCard} border ${t.border} ${t.bgCardHov} transition-colors h-full`}>
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <div className="flex justify-center gap-4">
                      <Image src="/images/isaac1.png" alt="ISAAC - Login" width={400} height={800} className="rounded-2xl w-36 h-64 object-cover object-top" />
                      <Image src="/images/isaac2.png" alt="ISAAC - Chamados" width={400} height={800} className="rounded-2xl w-36 h-64 object-cover object-top" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      <span className="text-xs text-sky-400 font-medium uppercase tracking-wider">App Mobile · Cliente Isaac</span>
                    </div>
                    <h3 className="text-lg font-semibold">ISAAC — Suporte Técnico</h3>
                    <p className={`${t.textMuted} text-base leading-relaxed flex-1`}>
                      App de chamados para manutenção com perfis de cliente e técnico.
                      Abertura de chamados por tópicos, rastreamento via Google Maps e status em tempo real.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Flutter", "Google Maps", "WhatsApp API", "Geolocalização"].map((tag) => (
                        <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${t.tag}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-1">
                      <Button size="sm" className={`flex-1 opacity-50 cursor-default ${t.btnPrimary} border-0`} disabled>
                        <Smartphone className="mr-2" size={13} /> iOS & Android
                      </Button>
                      <a href="https://github.com/eduzimmartins22/isaac" target="_blank">
                        <Button size="sm" variant="outline" className={`${t.btnOutline}`}>
                          <Github size={14} />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* JONAS */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}>
                <Card className={`${t.bgCard} border ${t.border} ${t.bgCardHov} transition-colors h-full`}>
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <div className="flex justify-center gap-4">
                      <Image src="/images/jonas1.png" alt="Jonas Barber - Home" width={400} height={800} className="rounded-2xl w-36 h-64 object-cover object-top" />
                      <Image src="/images/jonas2.png" alt="Jonas Barber - Pacotes" width={400} height={800} className="rounded-2xl w-36 h-64 object-cover object-top" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-xs text-amber-400 font-medium uppercase tracking-wider">App Mobile · Jonas Barber</span>
                    </div>
                    <h3 className="text-lg font-semibold">Tio Jonas — Controle de Cortes</h3>
                    <p className={`${t.textMuted} text-base leading-relaxed flex-1`}>
                      Gestão de pacotes de cortes para barbearia. O cabeleireiro cadastra
                      clientes e pacotes; o cliente confirma o uso de cada serviço com barra visual de progresso.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Flutter", "Firebase", "Gestão de Pacotes"].map((tag) => (
                        <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${t.tag}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-1">
                      <Button size="sm" className={`flex-1 opacity-50 cursor-default ${t.btnPrimary} border-0`} disabled>
                        <Smartphone className="mr-2" size={13} /> iOS & Android
                      </Button>
                      <a href="https://github.com/eduzimmartins22/JonasProj" target="_blank">
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

          {/* EM DESENVOLVIMENTO */}
          <section className="max-w-5xl mx-auto px-6 py-8 mt-4">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} className="text-2xl font-semibold mb-6">
              Em Desenvolvimento
            </motion.h2>
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
            <div className="grid md:grid-cols-2 gap-6 mt-6">
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

          {/* CONTATO */}
          <section id="contato" className="max-w-5xl mx-auto px-6 py-24 text-center space-y-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} className="space-y-6">
              <h2 className="text-3xl font-semibold">Vamos trabalhar juntos?</h2>
              <p className={`${t.textMuted} max-w-md mx-auto text-lg italic`}>
                Estou disponível para projetos freelance e oportunidades de trabalho. Entre em contato!
              </p>
              <div className="flex justify-center gap-4">
                <a href="mailto:eduardomartinscardoso44@gmail.com"
                  className={`p-3 rounded-full border ${t.iconBtn} transition-all`} title="E-mail">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/eduzimmartins22" target="_blank"
                  className={`p-3 rounded-full border ${t.iconBtn} transition-all`} title="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/eduardo-martins-5a1426277/" target="_blank"
                  className={`p-3 rounded-full border ${t.iconBtn} transition-all`} title="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
              <p className={`${t.textFaint} text-sm pt-8`}>
                © {new Date().getFullYear()} Eduardo Martins. Todos os direitos reservados.
              </p>
            </motion.div>
          </section>

        </div>
      </div>
    </>
  );
}