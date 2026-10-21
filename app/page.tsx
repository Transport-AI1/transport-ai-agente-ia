
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  Clock,
  Headphones,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  Zap,
} from "lucide-react";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const suggestions = [
  "¿Qué servicios ofrecéis?",
  "¿Cuánto cuesta una página web?",
  "Quiero automatizar mi empresa",
];

function getReply(question: string) {
  const q = question.toLowerCase();

  if (
    q.includes("precio") ||
    q.includes("cuánto") ||
    q.includes("cuesta") ||
    q.includes("presupuesto")
  ) {
    return "El precio depende de las necesidades de cada empresa. En Transport AI desarrollamos páginas web profesionales, agentes de IA y automatizaciones a medida. Si me cuentas qué necesitas, puedo ayudarte a preparar una propuesta personalizada.";
  }

  if (
    q.includes("servicio") ||
    q.includes("ofrec") ||
    q.includes("hacéis") ||
    q.includes("haceis")
  ) {
    return "En Transport AI ayudamos a las empresas a trabajar de forma más inteligente con páginas web profesionales, agentes de inteligencia artificial, automatización de tareas, integraciones y software personalizado.";
  }

  if (
    q.includes("automat") ||
    q.includes("proceso") ||
    q.includes("tiempo")
  ) {
    return "Podemos ayudarte a automatizar tareas repetitivas, organizar solicitudes de clientes, conectar herramientas y reducir el trabajo manual. Cuéntame qué tareas realizáis actualmente y estudiaremos cómo mejorarlas.";
  }

  if (
    q.includes("contact") ||
    q.includes("whatsapp") ||
    q.includes("persona") ||
    q.includes("hablar")
  ) {
    return "¡Claro! Puedes hablar directamente con el equipo de Transport AI por WhatsApp. Pulsa el botón de contacto y cuéntanos qué proyecto tienes en mente.";
  }

  if (
    q.includes("web") ||
    q.includes("página") ||
    q.includes("pagina") ||
    q.includes("sitio")
  ) {
    return "Creamos páginas web modernas, adaptadas a móviles y orientadas a convertir visitas en clientes. También podemos integrar un agente de IA para responder preguntas y atender consultas automáticamente.";
  }

  return "Gracias por tu consulta. Puedo orientarte sobre páginas web, agentes de inteligencia artificial y automatización empresarial. Si me explicas un poco más lo que necesitas, te daré una respuesta más concreta. También puedes contactar directamente con nuestro equipo.";
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "¡Hola! 👋 Soy el asistente virtual de Transport AI. Puedo ayudarte a conocer nuestros servicios, resolver dudas y encontrar una solución para tu empresa. ¿Qué te gustaría saber?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  function sendMessage(text: string) {
    const question = text.trim();
    if (!question || typing) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", content: question },
    ]);
    setInput("");
    setTyping(true);

    window.setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        { role: "assistant", content: getReply(question) },
      ]);
      setTyping(false);
    }, 650);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  const whatsappUrl =
    "https://wa.me/34659980603?text=" +
    encodeURIComponent(
      "Hola, he probado la demo del agente de IA de Transport AI y quiero información."
    );

  return (
    <main className="min-h-screen overflow-hidden bg-[#070b14] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-250px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-[#070b14]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 shadow-lg shadow-blue-500/25">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">
                Transport <span className="text-blue-400">AI</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Tecnología inteligente
              </div>
            </div>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium transition hover:border-blue-400 hover:bg-blue-400/10"
          >
            <MessageCircle size={17} />
            <span className="hidden sm:inline">Hablar con el equipo</span>
            <span className="sm:hidden">Contacto</span>
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            DEMOSTRACIÓN INTERACTIVA · AGENTE DE IA
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Tu web puede atender clientes
            <span className="mt-2 block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              incluso cuando tú no estás.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            Un asistente inteligente que responde preguntas, explica tus
            servicios y ayuda a tus visitantes a dar el siguiente paso.
            Disponible directamente desde tu página web.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-4 font-semibold shadow-xl shadow-blue-500/20 transition hover:bg-blue-400"
            >
              Probar el asistente <ArrowRight size={19} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-4 font-semibold transition hover:bg-white/5"
            >
              Solicitar información
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
            <div>
              <MessageCircle className="mb-3 text-blue-400" size={23} />
              <p className="text-sm font-semibold">Atención automática</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Respuestas inmediatas
              </p>
            </div>
            <div>
              <Clock className="mb-3 text-violet-400" size={23} />
              <p className="text-sm font-semibold">Siempre disponible</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Sin horarios de oficina
              </p>
            </div>
            <div>
              <Zap className="mb-3 text-emerald-400" size={23} />
              <p className="text-sm font-semibold">Más oportunidades</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Facilita el contacto
              </p>
            </div>
          </div>
        </div>

        <div id="demo" className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0d1422] shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600">
                  <Bot size={25} />
                </div>
                <div>
                  <p className="font-semibold">Asistente de Transport AI</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    En línea · Demo interactiva
                  </p>
                </div>
              </div>
              <div className="rounded-full border border-white/10 p-2 text-slate-400">
                <ShieldCheck size={19} />
              </div>
            </div>

            <div className="border-b border-white/10 bg-white/[0.025] px-5 py-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Sparkles size={14} className="text-blue-400" />
                Prueba una conversación de ejemplo
              </div>
            </div>

            <div
              className="flex h-[340px] flex-col gap-4 overflow-y-auto p-5 sm:h-[390px]"
              aria-live="polite"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2.5 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                      <Bot size={17} />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "rounded-tr-sm bg-blue-600 text-white"
                        : "rounded-tl-sm border border-white/10 bg-white/[0.045] text-slate-200"
                    }`}
                  >
                    {message.content}
                  </div>

                  {message.role === "user" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-slate-300">
                      <User size={16} />
                    </div>
                  )}
                </div>
              ))}

              {typing && (
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <Bot size={17} />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-slate-400">
                    El asistente está respondiendo...
                  </div>
                </div>
              )}
            </div>

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 px-5 pb-4">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => sendMessage(suggestion)}
                    className="rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-3 py-2 text-left text-xs text-blue-200 transition hover:border-blue-400/50 hover:bg-blue-400/10"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-3 border-t border-white/10 bg-black/10 p-4"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Escribe tu consulta..."
                aria-label="Escribe tu consulta"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/60"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Enviar mensaje"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={18} />
              </button>
            </form>

            <div className="px-5 pb-4 text-center text-[10px] text-slate-500">
              Demostración con respuestas predefinidas · No conecta con una IA
              externa
            </div>
          </div>

          <div className="relative mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
            <Check size={14} className="text-emerald-400" />
            Diseño adaptable a móviles, tabletas y ordenadores
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Una nueva forma de atender
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Más que un chat en tu página web
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Diseñamos asistentes adaptados al negocio, a sus servicios y a
              las preguntas reales de sus clientes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Headphones,
                title: "Atención al cliente",
                text: "Responde preguntas frecuentes y orienta a cada visitante.",
              },
              {
                icon: Building2,
                title: "Adaptado a tu negocio",
                text: "Un asistente diseñado para tus servicios y procesos.",
              },
              {
                icon: Zap,
                title: "Automatización",
                text: "Puede ampliarse con integraciones y flujos de trabajo según el proyecto.",
              },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-violet-500/10 p-7 sm:flex-row">
            <div>
              <h3 className="text-xl font-bold">
                ¿Quieres un asistente para tu empresa?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Cuéntanos tu idea y estudiaremos una solución adaptada a tus
                necesidades.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#080d18] transition hover:bg-blue-100"
            >
              Contactar por WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-7 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Transport AI · Demostración de agente de
        inteligencia artificial
      </footer>
    </main>
  );
}
