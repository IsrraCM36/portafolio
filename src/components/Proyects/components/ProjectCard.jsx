import { ExternalLink, Github } from "lucide-react";
import { techIcons } from '../data/techIcons';
import FadeContent from "@/components/FadeContent/FadeContent";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl
}) {
  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <div className="group overflow-hidden bg-black/30 backdrop-blur-md border border-gray-900 w-[380px] rounded-xl flex flex-col">
        
        {/* Imagen */}
        <div className="relative overflow-hidden w-full h-[280px]">
          <img
            src={image || "/placeholder.svg"}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Contenido */}
        <div className="p-4 flex-1">
          <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3 h-[140px] overflow-y-auto">
            {description}
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-lg border border-gray-800 bg-black/50 text-gray-300 flex items-center gap-1.5"
              >
                <span className="text-gray-400">
                  {techIcons[tech] || null}
                </span>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer con botones */}
        <div className="px-4 pb-4 flex gap-2 justify-end">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-black hover:bg-gray-900 text-gray-200 transition-colors text-sm px-3 py-1.5 rounded-lg border border-gray-800"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Ver
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-black hover:bg-gray-900 text-gray-200 transition-colors text-sm px-3 py-1.5 rounded-lg border border-gray-800"
            >
              <Github className="w-3.5 h-3.5" />
              Código
            </a>
          )}
        </div>
      </div>
    </FadeContent>
  );
}
