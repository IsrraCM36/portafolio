import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import BlurText from '@components/BlurText/BlurText';
import FadeContent from '@components/FadeContent/FadeContent';
import MovieXD from '@assets/img/peliculasxd.png';
import PokedexApi from '@assets/img/pokedexapi.png';
import ClimaApi from '@assets/img/clima-api.png';
import GeminiApi from '@assets/img/gemini-api.png';
import TetrisJuego from '@assets/img/tetrisjicm.png';
import GitQuick from '@assets/img/gitimat.png';
import { techIcons } from '@components/Proyects/data/techIcons';

const projectItems = [
  {
    title: "MOVIEXD - Catálogo de Películas con Vue",
    description:
      "Single Page App (SPA) interactiva que consume la API de TMDB para mostrar películas populares, con búsqueda en tiempo real, filtros por género y reproductor de tráilers. Desarrollada con Vue 3, Vite y CSS moderno, destacando componentes reactivos y diseño responsive.",
    media: { type: "img", src: MovieXD },
    technologies: ["Vue.js", "JavaScript", "CSS3", "Vite"],
    githubUrl: "https://github.com/IsrraDex36/pelisxd/tree/main",
    liveUrl: "https://pelisxd.netlify.app/",
    className: "md:col-span-2",
  },
  {
    type: "quote",
    content: "La creatividad es la inteligencia divirtiéndose",
    author: "Albert Einstein",
    className: "md:col-span-1",
  },
  {
    type: "gif-quote-split",
    gifMedia: { type: "gif", src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGM1OXY5NncybTYxcWN0MmRrOWc5ZzhpcGY4cDg4Y2p1c2lwcTVscCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/78XCFBGOlS6keY1Bil/giphy.gif" },
    quoteContent: "El futuro pertenece a quienes creen en la belleza de sus sueños",
    quoteAuthor: "Eleanor Roosevelt",
    className: "",
  },
  {
    title: "API Pokedex",
    description:
      "Pokédex interactiva que consume la API oficial de Pokémon para mostrar información completa de cada criatura. Incluye estadísticas detalladas, tipos, habilidades, evoluciones y sprites animados. Interfaz responsive con búsqueda avanzada y filtros por generación.",
    media: { type: "img", src: PokedexApi },
    technologies: ["HTML5", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/IsrraDex36/PokedexApi",
    liveUrl: "https://peppy-biscotti-ade567.netlify.app/",
    className: "",
  },
  {
    title: "Clima Api",
    description:
      "Aplicación meteorológica que integra la API de OpenWeatherMap para proporcionar información climática en tiempo real. Muestra temperatura actual, condiciones atmosféricas, humedad, velocidad del viento y pronóstico extendido. Búsqueda por ciudad con geolocalización automática y diseño adaptativo.",
    media: { type: "img", src: ClimaApi },
    technologies: ["HTML5", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/IsrraDex36/Clima-Api",
    liveUrl: "https://clima-api-jicm.netlify.app/",
    className: "",
  },
  {
    type: "mini-grid",
    cards: [
      {
        type: "quote",
        content: "La única forma de hacer un gran trabajo es amar lo que haces",
        author: "Steve Jobs",
      },
      {
        type: "gif", 
        src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YjIzZjM0aWdoempwb2N6enl5YzRiN2wwMXV2ZzJsYXoyZXI1eXl3biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OumCa12QC9CIvBe2c1/giphy.gif",
      },
      {
        type: "gif",
        src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3djljOTR3bWMxaGhqNHdhamtudHh1czZnZnk1bDZ1M2ZtcHp4NHVpMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UqAlDtPrxUIT1yYmFp/giphy.gif",
      },
      {
        type: "quote",
        content: "Cualquier tonto puede escribir código que una computadora entienda. Los buenos programadores escriben código que los humanos pueden entender",
        author: "Martin Fowler",
      }
    ],
    className: "md:col-span-2",
  },
  {
    type: "quote-gif-split",
    quoteContent: "No tengas miedo de renunciar a lo bueno para perseguir lo grandioso",
    quoteAuthor: "John D. Rockefeller",
    gifMedia: { type: "gif", src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MnVubmVueTBsY29naGt4NnRpeDlpMjJseHNkZGl0c3pxM3JqczFmdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kanka5wfr3BxGpLRQu/giphy.gif" },
    className: "",
  },
  {
    title: "Tetris juego clásico",
    description:
      "Tetris Vue - Clon moderno del clásico juego, desarrollado con Vue.js. Gráficos mejorados, efectos visuales, sistema de puntuación y controles intuitivos.",
    media: { type: "img", src: TetrisJuego },
    technologies: ["Vite", "JavaScript", "Vue.js", "CSS3"],
    githubUrl: "https://github.com/IsrraDex36/tetrisjicm",
    liveUrl: "https://tetris-vue.netlify.app/",
    className: "",
  },
  {
    title: "GitQuick",
    description:
      "GitQuick: aprende Git fácil con comandos y ejemplos prácticos.",
    media: { type: "img", src: GitQuick },
    technologies: ["CSS3", "Vite", "Vue.js", "JavaScript"],
    githubUrl: "https://github.com/IsrraDex36/GitQuick",
    liveUrl: "https://gitquickguide.netlify.app/",
    className: "",
  },
  {
    type: "gif-quote-split",
    gifMedia: { type: "gif", src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N2dvbWVoMHF6ZWlqdHBqMmh2Nzh1d3J1a3NiNWR4NTV1NXRjNjBhOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AqVx0YGEyRajOI3Pkm/giphy.gif" },
    quoteContent: "10K+ líneas de código escritas con pasión",
    quoteAuthor: "Desarrollador Dedicado",
    className: "",
  },
  {
    title: "Gemini api",
    description:
      "Aplicación full-stack desarrollada con Vue.js y Node.js que integra la API de Gemini AI de Google para generación inteligente de texto. Cuenta con chat interactivo en tiempo real, animaciones fluidas, historial de conversaciones, y una interfaz moderna y responsive. Implementa autenticación, manejo de estados y optimización de rendimiento.",
    media: { type: "img", src: GeminiApi },
    technologies: ["Node.js", "Vue.js", "JavaScript", "Vite"],
    githubUrl: "https://github.com/IsrraDex36/gemini-writer",
    liveUrl: "https://writer-gemini-api.netlify.app/",
    className: "md:col-span-2",
  },
  {
    type: "mini-grid",
    cards: [
      {
        type: "quote",
        content: "La práctica hace al maestro",
        author: "Proverbio",
      },
      {
        type: "gif", 
        src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b3hzdDEzYWo4bHhvcDhmajNpNHhqb3liZW13YWxtMG5odmZ5bzFrayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JqmupuTVZYaQX5s094/giphy.gif",
      },
      {
        type: "gif",
        src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a29rc28wZWt3dHk1aTl5NzU0Z2Y4cTg4YWxic2kwY3E0Z2FzOHdweSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/iEw5gfk0q6oWOlJruu/giphy.gif",
      },
      {
        type: "quote",
        content: "El código limpio es simple y directo",
        author: "Robert C. Martin",
      }
    ],
    className: "md:col-span-2",
  },
];

function clsx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProjectBentoCard({ title, description, media, technologies, githubUrl, liveUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "group overflow-hidden bg-black/30 backdrop-blur-md border border-gray-900 rounded-xl flex flex-col cursor-pointer h-full",
        "hover:border-gray-700 transition-all duration-300"
      )}
    >
      {/* Imagen */}
      <div className="relative overflow-hidden w-full h-[200px]">
        {media && (
          <img
            src={media.src}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="p-3 flex flex-col">
          <h3 className="text-base font-bold text-white mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-gray-300 text-xs leading-relaxed mb-2">
            {description}
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-1 mb-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-1.5 py-0.5 rounded-lg border border-gray-800 bg-black/50 text-gray-300 flex items-center gap-1"
              >
                <span className="text-gray-400 text-xs">
                  {techIcons[tech] || null}
                </span>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Spacer to push footer to bottom */}
        <div className="flex-1"></div>

        {/* Footer con botones */}
        <div className="px-3 pb-3 flex gap-1.5 justify-end">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 bg-black hover:bg-gray-900 text-gray-200 transition-colors text-sm px-3 py-1.5 rounded-lg border border-gray-800"
          >
            <ExternalLink className="w-3 h-3" />
            Ver
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 bg-black hover:bg-gray-900 text-gray-200 transition-colors text-sm px-3 py-1.5 rounded-lg border border-gray-800"
          >
            <Github className="w-3 h-3" />
            Código
          </a>
        )}
        </div>
      </div>
    </motion.div>
  );
}

// Quote Card Component
function QuoteCard({ content, author }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "group overflow-hidden bg-gradient-to-br from-stone-900/90 to-neutral-900/90 backdrop-blur-md border border-stone-700/50 rounded-xl flex flex-col cursor-pointer h-full",
        "hover:border-stone-600/70 transition-all duration-300"
      )}
    >
      <div className="p-4 flex-1 flex flex-col justify-center items-center text-center">
        <div className="text-4xl text-stone-300 mb-3 font-serif">"</div>
        <p className="text-stone-100 text-sm font-medium leading-relaxed mb-3 italic">
          {content}
        </p>
        <p className="text-stone-400 text-xs">— {author}</p>
      </div>
    </motion.div>
  );
}

// Stat Card Component
function StatCard({ title, value, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "group overflow-hidden bg-gradient-to-br from-neutral-800/90 to-zinc-900/90 backdrop-blur-md border border-neutral-700/50 rounded-xl flex flex-col cursor-pointer h-full",
        "hover:border-neutral-600/70 transition-all duration-300"
      )}
    >
      <div className="p-4 flex-1 flex flex-col justify-center items-center text-center">
        <h3 className="text-neutral-300 text-xs font-medium mb-2">{title}</h3>
        <div className="text-white text-2xl font-bold mb-1">{value}</div>
        <p className="text-neutral-400 text-xs">{subtitle}</p>
      </div>
    </motion.div>
  );
}

// Skill Card Component
function SkillCard({ title, skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "group overflow-hidden bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-md border border-slate-700/50 rounded-xl flex flex-col cursor-pointer h-full",
        "hover:border-slate-600/70 transition-all duration-300"
      )}
    >
      <div className="p-4 flex-1 flex flex-col justify-center">
        <h3 className="text-slate-200 text-sm font-bold mb-3 text-center">
          {title}
        </h3>
        <div className="flex flex-wrap gap-1 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-100 border border-slate-600/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Status Card Component
function StatusCard({ title, content }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "group overflow-hidden bg-gradient-to-br from-zinc-800/90 to-stone-900/90 backdrop-blur-md border border-zinc-700/50 rounded-xl flex flex-col cursor-pointer h-full",
        "hover:border-zinc-600/70 transition-all duration-300"
      )}
    >
      <div className="p-4 flex-1 flex flex-col justify-center items-center text-center">
        <div className="w-2 h-2 bg-neutral-400 rounded-full mb-2" />
        <h3 className="text-zinc-300 text-xs font-medium mb-2">{title}</h3>
        <p className="text-white text-sm font-semibold">{content}</p>
      </div>
    </motion.div>
  );
}

// GIF Card Component
function GifCard({ media }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-xl cursor-pointer",
        "border border-neutral-700/50 bg-black/20 backdrop-blur-xl",
        "hover:border-neutral-600/70 hover:bg-black/30 transition-all duration-300",
        "shadow-2xl hover:shadow-3xl"
      )}
    >
      <div className="absolute inset-0">
        <img
          src={media.src}
          alt="Animación decorativa"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 via-stone-500/5 to-transparent rounded-xl" />
      </div>
    </motion.div>
  );
}

// 🔥 Nueva tarjeta: dos GIFs apilados verticalmente en el mismo espacio
function SplitGifCard({ medias = [] }) {
  const [top, bottom] = medias;
  return (
    <div
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-xl",
        "border border-neutral-700/50 bg-black/20 backdrop-blur-xl",
        "transition-all duration-300 shadow-2xl"
      )}
    >
      {/* Top half */}
      <div className="relative flex-1 overflow-hidden">
        {top && (
          <img
            src={top.src}
            alt="Gif superior"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>

      {/* Separador visual sutil */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-neutral-600/40 to-transparent" />

      {/* Bottom half */}
      <div className="relative flex-1 overflow-hidden">
        {bottom && (
          <img
            src={bottom.src}
            alt="Gif inferior"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/20" />
      </div>

      {/* Halo suave al hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 via-stone-500/5 to-transparent rounded-xl" />
      </div>
    </div>
  );
}

// 🔥 Nueva tarjeta: GIF arriba, Quote abajo
function GifQuoteSplitCard({ gifMedia, quoteContent, quoteAuthor }) {
  return (
    <div
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-xl",
        "border border-neutral-700/50 bg-black/20 backdrop-blur-xl",
        "transition-all duration-300 shadow-2xl"
      )}
    >
      {/* Top half - GIF */}
      <div className="relative flex-1 overflow-hidden">
        {gifMedia && (
          <img
            src={gifMedia.src}
            alt="Gif"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>

      {/* Separador visual sutil */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-neutral-600/40 to-transparent" />

      {/* Bottom half - Quote */}
      <div className="relative flex-1 flex flex-col justify-center items-center text-center p-3 bg-gradient-to-br from-stone-900/90 to-neutral-900/90">
        <div className="text-2xl text-stone-300 mb-2 font-serif">"</div>
        <p className="text-stone-100 text-xs font-medium leading-relaxed mb-2 italic">
          {quoteContent}
        </p>
        <p className="text-stone-400 text-xs">— {quoteAuthor}</p>
      </div>
    </div>
  );
}

// Mini Grid Card Component - 4 cards in one container
function MiniGridCard({ cards }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "group overflow-hidden bg-transparent h-full"
      )}
    >
      <div className="p-3 h-full">
        <div className="grid grid-cols-2 gap-2 h-full">
          {cards.map((card, index) => (
            <div key={index} className="h-full">
              {card.type === "quote" ? (
                <div className="bg-gradient-to-br from-stone-900/90 to-neutral-900/90 backdrop-blur-md border border-stone-700/50 rounded-lg p-2 h-full flex flex-col justify-center items-center text-center">
                  <div className="text-lg text-stone-300 mb-1 font-serif">"</div>
                  <p className="text-stone-100 text-xs font-medium leading-relaxed mb-1 italic">
                    {card.content}
                  </p>
                  <p className="text-stone-400 text-xs">— {card.author}</p>
                </div>
              ) : card.type === "gif" ? (
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-neutral-700/50 bg-black/20 backdrop-blur-xl">
                  <div className="absolute inset-0">
                    <img
                      src={card.src}
                      alt="Animación decorativa"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// 🔥 Nueva tarjeta: Quote arriba, GIF abajo
function QuoteGifSplitCard({ quoteContent, quoteAuthor, gifMedia }) {
  return (
    <div
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-xl",
        "border border-neutral-700/50 bg-black/20 backdrop-blur-xl",
        "transition-all duration-300 shadow-2xl"
      )}
    >
      {/* Top half - Quote */}
      <div className="relative flex-1 flex flex-col justify-center items-center text-center p-3 bg-gradient-to-br from-stone-900/90 to-neutral-900/90">
        <div className="text-2xl text-stone-300 mb-2 font-serif">"</div>
        <p className="text-stone-100 text-xs font-medium leading-relaxed mb-2 italic">
          {quoteContent}
        </p>
        <p className="text-stone-400 text-xs">— {quoteAuthor}</p>
      </div>

      {/* Separador visual sutil */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-neutral-600/40 to-transparent" />

      {/* Bottom half - GIF */}
      <div className="relative flex-1 overflow-hidden">
        {gifMedia && (
          <img
            src={gifMedia.src}
            alt="Gif"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/20" />
      </div>
    </div>
  );
}

export default function ProjectBentoGrid() {
  const handleGoBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-950 via-black to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Header Section */}
        <header className="relative mb-12">
          {/* Back Button (no afecta el centrado) */}
          <button
            onClick={handleGoBack}
            className="group inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Regresar</span>
          </button>

         {/* Título y descripción realmente centrados */}
        <div className="w-full grid place-items-center pt-12 sm:pt-16 text-center px-4">
        <h1 className="max-w-none">
            <BlurText
            text="Mis Proyectos"
            delay={150}
            animateBy="words"
            direction="top"
            className="block mx-auto text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            />
        </h1>
        </div>

        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-[450px]">
          {projectItems.map((item, index) => (
            <FadeContent
              key={index}
              delay={index * 100}
              duration={800}
              threshold={0.1}
              className={clsx("relative group", item.className)}
            >
              {item.type === "gif-split" ? (
                <SplitGifCard {...item} />
              ) : item.type === "gif-quote-split" ? (
                <GifQuoteSplitCard {...item} />
              ) : item.type === "quote-gif-split" ? (
                <QuoteGifSplitCard {...item} />
              ) : item.type === "mini-grid" ? (
                <MiniGridCard {...item} />
              ) : item.type === "gif" ? (
                <GifCard {...item} />
              ) : item.type === "quote" ? (
                <QuoteCard {...item} />
              ) : item.type === "stat" ? (
                <StatCard {...item} />
              ) : item.type === "skill" ? (
                <SkillCard {...item} />
              ) : item.type === "status" ? (
                <StatusCard {...item} />
              ) : (
                <ProjectBentoCard {...item} />
              )}
            </FadeContent>
          ))}
        </div>
      </div>
    </div>
  );
}
