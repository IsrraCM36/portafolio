import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurText from '@components/BlurText/BlurText';
import ProjectCard from './components/ProjectCard';
import CasiSat from '@assets/img/casisatv2.png'
import Fortisiip from '@assets/img/proyect2.png'
import Clever from '@assets/img/clever.png'
import { ArrowRight } from "lucide-react"

const projects = [

  {
    title: "Colaboracion en Medicinas Ultra",
    description: "Durante mi estancia en Clever Cloud participé en el desarrollo de la web de Medicinas Ultra, colaborando en el diseño de la interfaz, la organización del catálogo de productos y la mejora del buscador para optimizar la accesibilidad y la experiencia del usuario.",
    image: Clever,
    technologies: ["Vue.js", "JavaScript", "PHP", "Bootstrap"],
    liveUrl: "https://www.medicinasultra.com/inicio"
  },
  {
    title: "FortiSiip",
    description: "Sistema de gestión de personal en ASP.NET y C# que permite administrar empleados, generar informes, gestionar vacaciones y evaluar desempeño. Usa MySQL en Linux y aumenta la eficiencia administrativa en un 30 %.",
    image: Fortisiip,
    technologies: ["Visual Studio", "C#", "SQL Server"],
    githubUrl: "https://github.com/tuusuario/chat-app",
    liveUrl: "https://tuchat.com"
  },

  {
    title: "CasiSAT",
    description: "App de gestión de gastos personales en Flutter y Firebase que permite registrar gastos, ver estadísticas en gráficos y exportar reportes en PDF o Microsoft Excel. Incluye autenticación segura y almacenamiento en la nube.",
    image: CasiSat,
    technologies: ["Flutter", "FireBase", "Dart"],
    githubUrl: "https://github.com/IsrraDex36/casi-sat-app-m-vil"
  }
];

const Proyects = () => {
  const navigate = useNavigate();

  const handleViewMoreProjects = () => {
    navigate('/proyectos');
  };

  return (
    <div className='py-20 min-h-screen flex flex-col items-center justify-start'>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className=" text-center mb-16">
          <BlurText
            text="Proyectos"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-5xl font-bold mb-4 justify-center"
          />
          <BlurText
            text="Aquí hay algunos de mis proyectos más destacables:"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-xl justify-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
        <div className="flex justify-center">
           <button 
                onClick={handleViewMoreProjects}
                className="mt-12 px-6 py-3 bg-black/40 cursor-pointer text-white text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 group"
            >
                <span className="flex items-center gap-2">
                    <BlurText
                        text="Ver más proyectos"
                        delay={300}
                        animateBy="words"
                        direction="top"
                        className=""
                    />
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform " />
                </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Proyects
