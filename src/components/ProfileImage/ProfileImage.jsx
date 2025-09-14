/* Sobre mí — Card estilo Terminal (sin lanyard) */
import profileImage from "@assets/img/me.png";
import { useState, useEffect } from "react";
import BlurText from "@components/BlurText/BlurText";
import FadeContent from "@components/FadeContent/FadeContent"; 

export default function AboutMe() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [typedText, setTypedText] = useState("");
  
  const commands = [
    'echo "Desarrollador de Software"',
    'cat stack.txt',
    'printf "ship rápido, UI limpia, foco en valor\\n"'
  ];

  // Animación del cursor parpadeante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Animación de escritura de comandos
  useEffect(() => {
    const typeCommand = () => {
      const command = commands[currentCommand];
      let index = 0;
      setTypedText("");
      
      const typeInterval = setInterval(() => {
        if (index < command.length) {
          setTypedText(command.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentCommand((prev) => (prev + 1) % commands.length);
          }, 2000);
        }
      }, 100);
    };

    const timeout = setTimeout(typeCommand, 1000);
    return () => clearTimeout(timeout);
  }, [currentCommand]);

  return (
    <section className="w-full flex justify-center px-4 py-20">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Texto (izquierda) */}
        <FadeContent 
          duration={800}
          delay={200}
          threshold={0.2}
          className="text-left"
        >
          <BlurText
                text="Sobre mí"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight"
              /> 
          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            Soy <span className="font-semibold text-white">Jonathan Isrrael Caballero Morales</span>, aunque la mayoría me conoce como <span className="font-semibold text-white">Isrra</span>. Descubrí la programación a los 15 años y desde entonces he cultivado una mentalidad de aprendizaje continuo orientada a construir soluciones reales, funcionales y escalables.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            Colaboré con <span className="font-semibold text-white">Clever Cloud</span>, participando en el desarrollo e implementación de mejoras para distintos proyectos. Esa experiencia reforzó mis bases técnicas y mi forma de trabajar: orden, comunicación y foco en el valor.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            Mi objetivo es aportar en equipos donde la creatividad, la calidad y el impacto importen; y seguir creciendo como desarrollador con una propuesta profesional que me distinga.
          </p>
        </FadeContent>

        {/* Card estilo TERMINAL (derecha) */}
        <FadeContent 
          duration={800}
          delay={400}
          threshold={0.2}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[320px] sm:w-[380px] md:w-[440px]">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/95 to-black/90 backdrop-blur-xl border border-gray-800/60 shadow-2xl shadow-black/60">
              {/* Barra superior tipo terminal */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800/50 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="flex items-center gap-2.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/90" />
                  <div className="h-3 w-3 rounded-full bg-amber-400/90" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400/90" />
                </div>
                <span className="text-[11px] text-gray-400 font-mono tracking-wide font-medium">
                  isrra@portfolio — zsh
                </span>
                <div className="w-8" />
              </div>

              {/* Contenido */}
              <div className="p-6 bg-gradient-to-b from-gray-900/60 to-black/80">
                {/* Foto + nombre */}
                <div className="flex items-center gap-5 mb-6">
                  <img
                    src={profileImage}
                    alt="Foto: Jonathan Isrrael Caballero Morales"
                    className="h-18 w-18 sm:h-22 sm:w-22 rounded-2xl object-cover shadow-2xl"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] sm:text-xs text-emerald-400/90 tracking-tight mb-1.5 font-medium">
                      ~/about
                    </p>
                    <h3 className="font-semibold text-white text-base sm:text-lg leading-tight truncate mb-1">
                      Jonathan Isrrael Caballero Morales
                    </h3>
                    <p className="text-[13px] sm:text-sm text-gray-300/90 font-medium">
                      Desarrollador de Software
                    </p>
                  </div>
                </div>

                {/* Separador elegante */}
                <div className="mb-6">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700/80 to-transparent" />
                </div>

                {/* Terminal interactivo */}
                <div className="space-y-3 font-mono text-[12px] sm:text-[13px] leading-relaxed">
                  {/* Comando animado */}
                  <div className="flex items-center">
                    <span className="text-emerald-400 mr-2 font-medium">$</span>
                    <span className="text-gray-200">{typedText}</span>
                    {showCursor && <span className="text-emerald-400">|</span>}
                  </div>

                  {/* Outputs estáticos */}
                  <div className="ml-4 space-y-3">
                    <p className="text-gray-100 font-medium">Desarrollador de Software</p>
                    
                    <div className="rounded-xl border border-gray-700/60 bg-gray-800/40 px-4 py-3.5 backdrop-blur-sm">
                      <div className="flex flex-wrap gap-2.5">
                        {['JS', 'TS', 'Vue', 'React'].map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-medium border border-emerald-500/25"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-100 font-medium italic">
                      "ship rápido, UI limpia, foco en valor"
                    </p>
                  </div>
                </div>
              </div>

              {/* Textura sutil */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                }}
              />
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
