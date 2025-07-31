"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  Heart,
  BarChart3,
  Smartphone,
  Users,
  Shield,
  Zap,
  Clock,
  Target,
  CheckCircle,
  Play,
  ArrowRight,
  Stethoscope,
  UserCheck,
  Lock,
  Eye,
  MessageCircle,
  TrendingUp,
  Activity,
  Lightbulb,
  Database,
  Cpu,
  UserPlus,
} from "lucide-react"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function SpectrumLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100"
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/spectrum-hub-logo.png"
                alt="Spectrum Hub - Logotipo da plataforma"
                width={180}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#pais"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Seção para pais e responsáveis"
              >
                Para Pais
              </a>
              <a
                href="#terapeutas"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Seção para terapeutas e profissionais"
              >
                Para Terapeutas
              </a>
              <a
                href="#como-funciona"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Como funciona a plataforma"
              >
                Como Funciona
              </a>
              <Button variant="outline" className="mr-2" aria-label="Fazer login na plataforma Spectrum Hub">
                Login
              </Button>
              <Button aria-label="Começar gratuitamente no Spectrum Hub">Começar Grátis</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <motion.div className="absolute top-20 left-10 text-blue-400 opacity-20" {...floatingAnimation}>
            <Brain className="w-16 h-16" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 text-purple-400 opacity-20"
            animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Heart className="w-12 h-12" />
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-1/4 text-pink-400 opacity-20"
            animate={{ y: [-5, 15, -5], rotate: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <BarChart3 className="w-14 h-14" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Spectrum Hub —{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Tecnologia que entende o autismo
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transformamos dados do dia a dia em insights clínicos que ajudam pais e terapeutas a cuidar com mais
                precisão, empatia e ciência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                  aria-label="Começar gratuitamente no Spectrum Hub - Cadastro gratuito"
                >
                  Comece agora gratuitamente
                  <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3"
                  aria-label="Assistir demonstração da plataforma Spectrum Hub"
                >
                  <Play className="mr-2 w-5 h-5" aria-hidden="true" />
                  Assista à demonstração
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main header SVG */}
                <div className="relative">
                  <Image
                    src="/images/spectrumhub-header.svg"
                    alt="Spectrum Hub - Plataforma inteligente para cuidado com autismo"
                    width={700}
                    height={500}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                    quality={100}
                  />
                </div>

                {/* Floating success indicator */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  aria-label="Indicador de sucesso"
                >
                  <CheckCircle className="w-6 h-6" />
                </motion.div>

                {/* Data sync indicator */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  aria-label="Indicador de sincronização de dados"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" aria-hidden="true"></div>
                    <span className="text-sm font-medium text-gray-700">Dados em tempo real</span>
                    <BarChart3 className="w-4 h-4 text-blue-500" aria-hidden="true" />
                  </div>
                </motion.div>

                {/* Insights indicator */}
                <motion.div
                  className="absolute top-1/2 -left-8 bg-purple-500 text-white p-3 rounded-full shadow-lg"
                  animate={{
                    x: [-5, 5, -5],
                    y: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  aria-label="Indicador de insights de IA"
                >
                  <Brain className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revolution Section */}
      <section className="py-20 bg-white" aria-labelledby="revolution-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 id="revolution-title" className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Chegou o futuro do cuidado com o autismo
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Unimos ciência comportamental, inteligência artificial e tecnologia vestível para transformar informações
              cotidianas em decisões terapêuticas personalizadas.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Cpu,
                title: "IA que identifica padrões",
                description: "Fornece sugestões práticas baseadas em dados",
              },
              {
                icon: Smartphone,
                title: "Integração com smartwatches",
                description: "Registros diários automatizados e precisos",
              },
              {
                icon: Users,
                title: "Acompanhamento multiprofissional",
                description: "Todos os profissionais em um único lugar",
              },
              {
                icon: Shield,
                title: "Dados seguros",
                description: "Insights em tempo real com máxima segurança",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parents Section */}
      <section id="pais" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" aria-labelledby="parents-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* AI Chat indicator */}
                <motion.div
                  className="absolute top-6 -left-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white p-3 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  aria-label="Indicador de chat com IA ativo"
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.div>
                <Image
                  src="/images/chat-spectrumhub.svg"
                  alt="Interface de chat com inteligência artificial do Spectrum Hub para orientação de pais e responsáveis sobre TEA"
                  width={650}
                  height={450}
                  className="w-full h-auto drop-shadow-2xl"
                  quality={100}
                />
                <div
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                  aria-label="Status da IA"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" aria-hidden="true"></div>
                    <span className="text-sm font-medium text-gray-700">IA ativa</span>
                    <Brain className="w-4 h-4 text-purple-500" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="parents-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Seu copiloto na jornada do cuidado
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                O Spectrum Hub ajuda você a entender melhor seu filho com TEA. Com poucos cliques, você registra o que
                vive no dia a dia — sono, crises, rotinas, humor — e a plataforma devolve com gráficos, alertas e
                sugestões validadas por especialistas.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Clock, text: "Registro rápido de rotina e comportamento" },
                  { icon: Target, text: "Alertas personalizados e sugestão de ações" },
                  { icon: MessageCircle, text: "Comunicação direta com os profissionais envolvidos" },
                  { icon: TrendingUp, text: "Visualização da evolução ao longo do tempo" },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                aria-label="Experimentar Spectrum Hub como pai ou responsável - Cadastro gratuito"
              >
                Quero experimentar como pai ou responsável
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapists Section */}
      <section id="terapeutas" className="py-20 bg-white" aria-labelledby="therapists-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="therapists-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O prontuário inteligente para decisões clínicas
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                O Spectrum Hub organiza automaticamente os dados registrados pela família e pelos dispositivos
                integrados. Você acompanha o progresso, identifica padrões de comportamento, compartilha devolutivas com
                os responsáveis e define estratégias personalizadas com base em evidências.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Database, text: "Prontuário compartilhado entre profissionais" },
                  { icon: Lightbulb, text: "Sugestões automáticas com base no histórico do paciente" },
                  { icon: Zap, text: "Redução de tempo com análise e relatórios" },
                  { icon: Activity, text: "Visualização de métricas clínicas e comportamentais" },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                aria-label="Usar Spectrum Hub como terapeuta - Cadastro profissional"
              >
                Quero usar como terapeuta
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <button
                      className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/20 transition-colors cursor-pointer"
                      aria-label="Reproduzir vídeo demonstrativo do prontuário"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                    <p className="text-white/80 text-sm">Veja o prontuário em ação</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex space-x-2" aria-hidden="true">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="como-funciona"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
        aria-labelledby="how-it-works-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 id="how-it-works-title" className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Como Funciona
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: UserCheck,
                title: "Registro de dados",
                description: "O responsável registra eventos do dia a dia ou usa smartwatch para monitorar sinais",
              },
              {
                step: "2",
                icon: Cpu,
                title: "Análise automática",
                description: "O sistema coleta, organiza e analisa os dados automaticamente",
              },
              {
                step: "3",
                icon: Stethoscope,
                title: "Intervenções profissionais",
                description: "Os profissionais acessam as informações e sugerem intervenções",
              },
              {
                step: "4",
                icon: BarChart3,
                title: "Acompanhamento visual",
                description: "Todos acompanham o progresso por meio de um painel visual e interativo",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="h-full text-center p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto"
                      aria-hidden="true"
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      aria-label={`Passo ${step.step}`}
                    >
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>

                {index < 3 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-white" aria-labelledby="innovation-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 id="innovation-title" className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ciência que gera impacto real
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cada dado registrado é interpretado com base em modelos científicos de análise comportamental e
              neurodesenvolvimento. O Spectrum Hub gera insights personalizados, fundamentados e acionáveis para
              promover um cuidado mais eficaz.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Brain,
                title: "Baseado em ABA, neurociência e psicologia",
                description: "Fundamentação científica sólida em cada análise",
              },
              {
                icon: Cpu,
                title: "IA com aprendizado contínuo",
                description: "Algoritmos que evoluem com cada interação",
              },
              {
                icon: Eye,
                title: "Interface simples e acessível",
                description: "Projetado para todos os perfis de usuários",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center p-8 border-0 bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300">
                  <div
                    className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6"
                    aria-hidden="true"
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" aria-labelledby="security-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="security-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Privacidade, ética e confiança no centro
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Tratamos os dados com responsabilidade máxima. Toda a arquitetura foi pensada para proteger as
                informações pessoais e clínicas dos usuários, com criptografia ponta a ponta e controle de acesso por
                perfil.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Lock, title: "Criptografia ponta a ponta" },
                { icon: Shield, title: "Conformidade LGPD" },
                { icon: Eye, title: "Controle de acesso" },
                { icon: UserCheck, title: "Auditoria completa" },
              ].map((security, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <div
                      className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <security.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{security.title}</h3>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multiprofessional Section */}
      <section className="py-20 bg-white" aria-labelledby="multiprofessional-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeInUp}>
            <h2 id="multiprofessional-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Multiprofissional e Integrado
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              O cuidado com o TEA é coletivo. Por isso, o Spectrum Hub permite que psicólogos, fonoaudiólogos,
              terapeutas ocupacionais, educadores e pais trabalhem juntos de forma integrada e coordenada.
            </p>

            <div className="relative">
              <Image
                src="/images/multiprofessional-spectrumhub.png"
                alt="Profissional de saúde utilizando a plataforma Spectrum Hub em tablet, demonstrando a tecnologia integrada para cuidado multiprofissional com TEA"
                width={500}
                height={497.82}
                className="max-w-md md:max-w-lg h-auto drop-shadow-2xl mx-auto"
                quality={90}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden"
        aria-labelledby="cta-title"
      >
        <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center" {...fadeInUp}>
            <h2 id="cta-title" className="text-3xl md:text-5xl font-bold mb-6">
              Comece hoje a transformar a jornada terapêutica
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Crie sua conta gratuita e experimente o futuro do cuidado com o autismo. Tecnologia e ciência trabalhando
              por quem mais importa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 font-semibold"
                aria-label="Começar agora no Spectrum Hub - Cadastro gratuito"
              >
                <UserPlus className="mr-2 w-5 h-5" aria-hidden="true" />
                Quero começar agora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/spectrum-hub-logo.png"
                  alt="Spectrum Hub - Logotipo"
                  width={120}
                  height={28}
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-gray-400">Tecnologia que entende o autismo e transforma dados em cuidado.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#pais" className="hover:text-white transition-colors" aria-label="Seção para pais">
                    Para Pais
                  </a>
                </li>
                <li>
                  <a
                    href="#terapeutas"
                    className="hover:text-white transition-colors"
                    aria-label="Seção para terapeutas"
                  >
                    Para Terapeutas
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="hover:text-white transition-colors"
                    aria-label="Informações sobre segurança"
                  >
                    Segurança
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors" aria-label="Planos e preços">
                    Preços
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#help" className="hover:text-white transition-colors" aria-label="Central de ajuda">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors" aria-label="Entre em contato">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white transition-colors" aria-label="Blog do Spectrum Hub">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#community" className="hover:text-white transition-colors" aria-label="Comunidade">
                    Comunidade
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-white transition-colors"
                    aria-label="Política de privacidade"
                  >
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-white transition-colors" aria-label="Termos de uso">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#lgpd" className="hover:text-white transition-colors" aria-label="Conformidade LGPD">
                    LGPD
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Spectrum Hub. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
