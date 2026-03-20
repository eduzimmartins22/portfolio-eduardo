import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Eduardo Martins
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Desenvolvedor Frontend especializado em React, criando aplicações modernas,
          performáticas e focadas na experiência do usuário.
          <br />
          Experiência real com e-commerce, landing pages e sistemas IoT.
        </motion.p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://wa.me/5527997475627" target="_blank">
            <Button>Falar no WhatsApp</Button>
          </a>
          <a href="/CURRICULO.pdf" download>
            <Button variant="outline">
              Baixar CV <Download className="ml-2" size={16} />
            </Button>
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section className="max-w-5xl mx-auto mt-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sobre mim</h2>
          <p className="text-gray-400">
            Sou desenvolvedor frontend com experiência em projetos reais para clientes,
            atuando na criação de interfaces modernas, responsivas e funcionais.
            <br /><br />
            Já desenvolvi e-commerces, landing pages e sistemas integrados com IoT,
            sempre focando em performance, usabilidade e código limpo.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-400">
            <li>React</li>
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>HTML & CSS</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>
      </section>

      {/* PROJETO DESTAQUE - IOT */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Projeto em Destaque</h2>

        <Card className="bg-gray-900 border-none">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Casa Inteligente (IoT)</h3>
            <p className="text-gray-400">
              Sistema de automação residencial com controle em tempo real,
              permitindo gerenciar dispositivos como luzes, fumaça e bomba d'água.
              <br /><br />
              Integração com ESP8266 via rede Wi-Fi, com comunicação direta entre
              interface web e hardware.
            </p>
            <span className="text-sm text-gray-500">
              Tecnologias: React, ESP8266, Web Server, IoT
            </span>
          </CardContent>
        </Card>
      </section>

      {/* PROJETOS */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Projetos</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* ECOMMERCE */}
          <Card className="bg-gray-900 border-none">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">E-commerce Ugo Celulares</h3>
              <p className="text-gray-400">
                Desenvolvimento de e-commerce completo para cliente real,
                com foco em conversão e experiência do usuário.
              </p>
              <span className="text-sm text-gray-500">
                React • Tailwind • API
              </span>
              <div className="flex gap-3">
                <a href="https://ugocelulares.comm.seg.br/" target="_blank">
                  <Button size="sm">
                    Ver Projeto <ExternalLink className="ml-2" size={16} />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* LANDING PAGE */}
          <Card className="bg-gray-900 border-none">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Landing Page - Buzz Digital</h3>
              <p className="text-gray-400">
                Landing page desenvolvida para cliente de marketing digital,
                com foco em conversão e captação de leads.
              </p>
              <span className="text-sm text-gray-500">
                React • Tailwind
              </span>
              <div className="flex gap-3">
                <a href="https://portif-lio-cliente.vercel.app/" target="_blank">
                  <Button size="sm">
                    Ver Projeto <ExternalLink className="ml-2" size={16} />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTATO */}
      <section className="max-w-5xl mx-auto mt-20 text-center space-y-6">
        <h2 className="text-2xl font-semibold">Contato</h2>

        <p className="text-gray-400">
          Vamos trabalhar juntos? Entre em contato comigo.
        </p>

        <div className="flex justify-center gap-6">
          <a href="mailto:eduardomartinscardoso44@gmail.com"><Mail /></a>
          <a href="https://github.com/eduzimmartins22" target="_blank"><Github /></a>
          <a href="https://www.linkedin.com/in/eduardo-martins-5a1426277/" target="_blank"><Linkedin /></a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Eduardo Martins. Todos os direitos reservados.
        </p>
      </section>
    </div>
  );
}
