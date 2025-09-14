// Componentes principales
import PrincipalComponent from '@components/PrincipalComponent/PrincipalComponent';
import Skills from '@/components/Skills/Skills';
import Proyects from '@/components/Proyects/Proyects';
import ExperienceTimeline from '@/components/TimeLine/TimeLine';
import ProfileImage from '@/components/ProfileImage/ProfileImage';
import Navbar from '@/components/Navbar/Navbar';

// Componentes de animación y efectos
import BlurText from '@components/BlurText/BlurText';
import CountUp from '@/components/CountUp/CountUp';

// Datos
import { itemExperience, formacion } from '@/data/experienceData';


export default function Principal() {
  return (
    <>
      {/* ============================================ */}
      {/* ESTILOS GLOBALES */}
      {/* ============================================ */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* ============================================ */}
      {/* CONTENEDOR PRINCIPAL */}
      {/* ============================================ */}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-slate-950 overflow-hidden">
        {/* Efecto de fondo con gradiente radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] blur-3xl opacity-30 pointer-events-none"></div>
        
        {/* ============================================ */}
        {/* NAVEGACIÓN */}
        {/* ============================================ */}
        <Navbar />
        
        {/* ============================================ */}
        {/* SECCIÓN 1: INICIO / HERO */}
        {/* ============================================ */}
        <section id="home">
          <PrincipalComponent />
        </section>

        {/* ============================================ */}
        {/* SECCIÓN 2: HABILIDADES */}
        {/* ============================================ */}
        <section id="skills" className="min-h-screen py-20">
          <Skills />
        </section>
        {/* ============================================ */}
        {/* SECCIÓN 3: EXPERIENCIA PROFESIONAL */}
        {/* ============================================ */}
        <section id="experience">
          <div className="w-full mt-30 flex justify-center px-4">
            <div className="w-full max-w-5xl flex flex-col items-center">
              
              {/* Encabezado de la sección */}
              <div className="mb-10 mt-20 text-center flex flex-col items-center">
                <BlurText
                  text="Mi experiencia profesional"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-4xl sm:text-4xl md:text-5xl font-bold mb-2 justify-center"
                />
                <BlurText
                  text="Proyectos y empresas donde he desarrollado mis habilidades"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto justify-center"
                />
              </div>

              {/* Contador de años de experiencia */}
              <div className="mb-8 mt-6 text-center">
                <div 
                  className="inline-flex items-center justify-center gap-1 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg opacity-0 translate-y-4 transition-all duration-700 ease-out delay-[1200ms] animate-[slideUp_0.8s_ease-out_1.2s_forwards]" 
                  style={{
                    animation: 'slideUp 0.8s ease-out 1.2s forwards',
                    animationFillMode: 'forwards'
                  }}
                >
                  <span className="text-4xl font-bold text-white">+</span>
                  <CountUp
                    from={0}
                    to={2}
                    direction="up"
                    duration={1}
                    delay={1.1}
                    fontSize="text-4xl"
                    color="text-white"
                    fontWeight="font-bold"
                    className="tabular-nums"
                  />
                  <span className="text-lg text-gray-300 font-medium ml-2">años de experiencia</span>
                </div>
              </div>

              {/* Timeline de experiencia profesional */}
              <ExperienceTimeline items={itemExperience} />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECCIÓN 4: PROYECTOS */}
        {/* ============================================ */}
        <section id="projects" className="min-h-screen py-20">
          <Proyects />
        </section>
        {/* ============================================ */}
        {/* SECCIÓN 5: FORMACIÓN ACADÉMICA */}
        {/* ============================================ */}
        <section id="education">
          <div className="w-full mt-0 flex justify-center px-4">
            <div className="w-full max-w-5xl flex flex-col items-center">
              
              {/* Encabezado de la sección */}
              <div className="mb-10 mt-20 text-center flex flex-col items-center">
                <BlurText
                  text="Formación Académica"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 justify-center"
                />
                <BlurText
                  text="Mi recorrido académico y profesional como desarrollador"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto justify-center"
                />
              </div>

              {/* Timeline de formación académica */}
              <ExperienceTimeline items={formacion} />
            </div>
          </div>
        </section>
        {/* ============================================ */}
        {/* SECCIÓN 6: SOBRE MÍ / PERFIL */}
        {/* ============================================ */}
        <section id="about">
          <ProfileImage />
        </section>
        
      </div>
    </>
  );
}
