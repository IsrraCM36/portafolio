import React, { useState } from "react";
import profileImage from "@assets/img/me.png";
import RandomizedTextEffect from "@components/DecryptedText/DecryptedText";
import DownloadDialog from "@components/DownloadDialog/DownloadDialog";
import FloatingIcons from "@components/FloatingIcons/FloatingIcons";
import { Mail, LinkedinIcon, GithubIcon, FileText } from "lucide-react";

const ProfileSection = () => {
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);

  const handleDownloadClick = () => {
    // Solo abre el diálogo; NO descarga todavía
    setIsDownloadDialogOpen(true);
  };

  const handleDownloadComplete = () => {
    // Descarga exactamente al 100%
    const link = document.createElement("a");
    link.href = "/pdf/CV-JICM.pdf";
    link.download = "CV-JICM.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-white min-h-screen p-0">
      <div className="w-full min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-7xl mx-auto p-6 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 items-center">
          {/* Foto */}
          <div className="md:order-2 flex justify-center mb-4 md:mb-0">
            <div className="relative w-64 md:w-80 overflow-visible">
              <img
                src={profileImage}
                alt="Jonathan Caballero"
                className="w-full h-auto rounded-lg relative z-5"
              />
              <FloatingIcons />
            </div>
          </div>

          {/* Info */}
          <div className="md:order-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl leading-tight mb-4 md:mb-5">
              <RandomizedTextEffect text="Jonathan Isrrael" />
              <RandomizedTextEffect text="Caballero Morales" />
            </h1>

            <div className="mb-4 md:mb-6">
              <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-2 bg-gray-800/30 border border-gray-700 rounded-full">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full" />
                <span className="text-xs tracking-wider uppercase">
                  Desarrollador Full Stack
                </span>
              </div>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-gray-400 max-w-2xl mb-4 md:mb-6 mx-auto md:mx-0">
              Desarrollador full-stack especializado en React, Node.js y bases de datos, con experiencia construyendo aplicaciones escalables y mantenibles.
              Me enfoco en la arquitectura, el rendimiento y la calidad del código para entregar soluciones sólidas y eficientes.
            </p>

            {/* Contacto */}
            <div className="flex gap-2 flex-wrap justify-center md:justify-start">
              <a
                href="mailto:jonathanisrrael3609@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-black/40 border border-gray-700 rounded-xl text-white text-xs transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 hover:bg-black/60 hover:border-gray-600 hover:shadow-xl hover:shadow-black/30 hover:scale-105"
              >
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Contáctame</span>
                <span className="sm:hidden">Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jonathan-ism"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-black/40 border border-gray-700 rounded-xl text-white text-xs transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 hover:bg-black/60 hover:border-gray-600 hover:shadow-xl hover:shadow-black/30 hover:scale-105"
              >
                <LinkedinIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                LinkedIn
              </a>

              <a
                href="https://github.com/IsrraDex36"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-black/40 border border-gray-700 rounded-xl text-white text-xs transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 hover:bg-black/60 hover:border-gray-600 hover:shadow-xl hover:shadow-black/30 hover:scale-105"
              >
                <GithubIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                GitHub
              </a>

              <button
                type="button"
                onClick={handleDownloadClick}
                className="inline-flex cursor-pointer items-center gap-1.5 px-3 py-2 bg-black/40 border border-gray-700 rounded-xl text-white text-xs transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 hover:bg-black/60 hover:border-gray-600 hover:shadow-xl hover:shadow-black/30 hover:scale-105"
              >
                <FileText className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Descargar CV</span>
                <span className="sm:hidden">CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Download Dialog */}
      <DownloadDialog
        isOpen={isDownloadDialogOpen}
        onClose={() => setIsDownloadDialogOpen(false)}
        onComplete={handleDownloadComplete}
      />
    </div>
  );
};

export default ProfileSection;
