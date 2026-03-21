"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Github, X } from "lucide-react";
import Image from "next/image";
import { Theme, fadeUp } from "../../theme";

type MobileAppsProps = { t: Theme };

function PhoneFrame({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  return (
    <div
      className="relative flex-shrink-0 cursor-zoom-in group"
      style={{ width: 110, height: 224 }}
      onClick={onClick}
    >
      {/* corpo do celular */}
      <div className="absolute inset-0 rounded-[2.2rem] bg-[#1a1a1a] shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-transform duration-200 group-hover:scale-105" />
      {/* borda interna */}
      <div className="absolute inset-[3px] rounded-[2rem] bg-[#111]" />
      {/* tela */}
      <div className="absolute inset-[5px] rounded-[1.8rem] overflow-hidden bg-black">
        <Image src={src} alt={alt} fill className="object-cover object-top" />
        {/* overlay de hover */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded-full">
            Ampliar
          </span>
        </div>
      </div>
      {/* notch */}
      <div className="absolute top-[7px] left-1/2 -translate-x-1/2 w-10 h-[10px] bg-[#1a1a1a] rounded-full z-10" />
      {/* botão lateral direito */}
      <div className="absolute right-[-3px] top-16 w-[3px] h-8 bg-[#333] rounded-l-sm" />
      {/* botões laterais esquerdo */}
      <div className="absolute left-[-3px] top-14 w-[3px] h-5 bg-[#333] rounded-r-sm" />
      <div className="absolute left-[-3px] top-[4.5rem] w-[3px] h-5 bg-[#333] rounded-r-sm mt-1" />
    </div>
  );
}

function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* backdrop embaçado */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

        {/* frame do celular ampliado */}
        <motion.div
          className="relative z-10"
          style={{ width: 260, height: 530 }}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 260 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* corpo */}
          <div className="absolute inset-0 rounded-[3.2rem] bg-[#1a1a1a] shadow-[0_24px_80px_rgba(0,0,0,0.7)]" />
          {/* borda interna */}
          <div className="absolute inset-[4px] rounded-[3rem] bg-[#111]" />
          {/* tela */}
          <div className="absolute inset-[7px] rounded-[2.6rem] overflow-hidden bg-black">
            <Image src={src} alt={alt} fill className="object-cover object-top" />
          </div>
          {/* notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-[14px] bg-[#1a1a1a] rounded-full z-10" />
          {/* botão direito */}
          <div className="absolute right-[-5px] top-28 w-[5px] h-14 bg-[#333] rounded-l-sm" />
          {/* botões esquerdo */}
          <div className="absolute left-[-5px] top-24 w-[5px] h-10 bg-[#333] rounded-r-sm" />
          <div className="absolute left-[-5px] top-40 w-[5px] h-10 bg-[#333] rounded-r-sm" />

          {/* botão fechar */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function MobileApps({ t }: MobileAppsProps) {
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (src: string, alt: string) => {
    setModalSrc(src);
    setModalAlt(alt);
  };

  const closeModal = () => setModalSrc(null);

  return (
    <section id="apps" className="max-w-5xl mx-auto px-6 py-8 mt-4">
      {modalSrc && <ImageModal src={modalSrc} alt={modalAlt} onClose={closeModal} />}

      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
        className="mb-6"
      >
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
              <div className="flex justify-center gap-6">
                <PhoneFrame src="/images/isaac1.png" alt="ISAAC - Login" onClick={() => openModal("/images/isaac1.png", "ISAAC - Login")} />
                <PhoneFrame src="/images/isaac2.png" alt="ISAAC - Chamados" onClick={() => openModal("/images/isaac2.png", "ISAAC - Chamados")} />
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
              <div className="flex justify-center gap-6">
                <PhoneFrame src="/images/jonas1.png" alt="Jonas Barber - Home" onClick={() => openModal("/images/jonas1.png", "Jonas Barber - Home")} />
                <PhoneFrame src="/images/jonas2.png" alt="Jonas Barber - Pacotes" onClick={() => openModal("/images/jonas2.png", "Jonas Barber - Pacotes")} />
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
  );
}