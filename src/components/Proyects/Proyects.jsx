import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import BlurText from '@components/BlurText/BlurText';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projectsData';
import { ArrowRight } from "lucide-react"

const Proyects = () => {
  const navigate = useNavigate();

  const handleViewMoreProjects = () => {
    navigate('/proyectos');
  };

  const projectsList = useMemo(() => 
    projects.map((project, index) => (
      <ProjectCard
        key={index}
        {...project}
      />
    )), [projects]
  );

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
          {projectsList}
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
