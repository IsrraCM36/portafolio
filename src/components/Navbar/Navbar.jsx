import { useState, useEffect } from 'react';
import { 
  User, 
  Zap, 
  Briefcase, 
  FolderOpen, 
  BookOpen, 
  Moon, 
  Sun 
} from 'lucide-react';
import { useLenisContext } from '@/context/LenisContext';
import { useActiveSection } from '@/hooks/useActiveSection';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  
  // Obtener funciones de Lenis del contexto
  const { scrollTo } = useLenisContext();

  // Secciones para monitorear (en el orden correcto según la página)
  const sections = ['home', 'experience', 'projects', 'skills', 'education', 'about'];
  
  // Detectar sección activa automáticamente
  const activeSection = useActiveSection(sections, {
    rootMargin: '-10% 0px -70% 0px',
    threshold: 0.3
  });

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-based navigation highlighting
  useEffect(() => {
    const sections = ['home', 'skills', 'experience', 'projects', 'education', 'about'];
    
    // Responsive observer options based on screen size
    const getObserverOptions = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      if (isMobile) {
        // Mobile: Very sensitive detection
        return {
          root: null,
          rootMargin: '0px',
          threshold: 0
        };
      } else if (isTablet) {
        // Tablet: Sensitive detection
        return {
          root: null,
          rootMargin: '0px',
          threshold: 0
        };
      } else {
        // Desktop: Standard detection
        return {
          root: null,
          rootMargin: '0px',
          threshold: 0
        };
      }
    };

    const observerCallback = (entries) => {
      let bestSection = null;
      let bestScore = -1;

      entries.forEach((entry) => {
        const rect = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        const sectionId = entry.target.id;
        
        // Check if any part of the section is visible
        const isVisible = rect.top < viewportHeight && rect.bottom > 0;
        
        if (isVisible) {
          // Calculate how much of the section is in viewport
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(viewportHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityRatio = visibleHeight / viewportHeight;
          
          // Prioritize sections that are more centered in viewport
          const sectionCenter = rect.top + rect.height / 2;
          const viewportCenter = viewportHeight / 2;
          const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
          const centerScore = Math.max(0, 1 - distanceFromCenter / (viewportHeight / 2));
          
          // Combined score with higher weight on visibility
          const score = visibilityRatio * 0.8 + centerScore * 0.2;
          
          if (score > bestScore) {
            bestScore = score;
            bestSection = sectionId;
          }
        }
      });

      if (bestSection) {
        // Map section IDs to nav item IDs
        const navItemMap = {
          'home': 'home',
          'skills': 'skills',
          'experience': 'experience',
          'projects': 'projects',
          'education': 'education',
          'about': 'profile'
        };
        
        const navItemId = navItemMap[bestSection];
        if (navItemId && navItemId !== activeItem) {
          setActiveItem(navItemId);
        }
      }
    };

    let observer = new IntersectionObserver(observerCallback, getObserverOptions());

    // Observe all sections
    const observeSections = () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    };

    observeSections();

    // Re-initialize observer on window resize for responsive behavior
    const handleResize = () => {
      // Disconnect current observer
      observer.disconnect();
      
      // Create new observer with updated options
      observer = new IntersectionObserver(observerCallback, getObserverOptions());
      
      // Re-observe all sections
      observeSections();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const navItems = [
    {
      id: 'home',
      icon: User,
      tooltip: 'Inicio',
      section: 'home'
    },
    {
      id: 'experience',
      icon: Briefcase,
      tooltip: 'Experiencia',
      section: 'experience'
    },
    {
      id: 'projects',
      icon: FolderOpen,
      tooltip: 'Proyectos',
      section: 'projects'
    },
    {
      id: 'skills',
      icon: Zap,
      tooltip: 'Habilidades',
      section: 'skills'
    },
    {
      id: 'education',
      icon: BookOpen,
      tooltip: 'Formación',
      section: 'education'
    },
    {
      id: 'profile',
      icon: 'profile',
      tooltip: 'Sobre mí',
      isProfile: true,
      section: 'about'
    }
  ];

  const handleItemClick = (itemId, sectionId) => {
    if (itemId === 'theme') {
      setIsDarkMode(!isDarkMode);
    } else {
      // Usar Lenis para smooth scroll a la sección
      if (sectionId) {
        scrollTo(`#${sectionId}`, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          offset: -50 // Pequeño offset para no cubrir el contenido con la navbar
        });
      }
    }
  };

  return (
    <nav 
      className={`
        /* Desktop: Left sidebar */
        fixed left-5 top-1/2 -translate-y-1/2 z-[1000]
        bg-white/[0.062] backdrop-blur-[10px] rounded-[30px] 
        px-2 py-2.5 flex justify-center items-center
        shadow-[18px_24px_54px_-22px_rgba(0,0,0,0.64)]
        transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        
        /* Tablet: Top horizontal */
        md:max-lg:fixed md:max-lg:left-1/2 md:max-lg:-translate-x-1/2 
        md:max-lg:top-8 md:max-lg:translate-y-0
        md:max-lg:px-6 md:max-lg:py-3 md:max-lg:rounded-[35px]
        
        /* Mobile: Bottom navigation */
        max-md:fixed max-md:bottom-5 max-md:left-1/2 max-md:-translate-x-1/2 
        max-md:top-auto max-md:translate-y-0
        max-md:px-3 max-md:py-2 max-md:rounded-[25px]
      `}
    >
      <div className="flex flex-col gap-[15px] items-center md:max-lg:flex-row md:max-lg:gap-[25px] max-md:flex-row max-md:gap-[12px]">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.section;
          
          return (
            <div
              key={item.id}
              className={`
                dock-item group relative cursor-pointer
                transition-all duration-300 ease-in-out
                hover:scale-100
                /* Mobile: Smaller touch targets */
                max-md:p-1
                ${isActive ? 'opacity-100' : 'opacity-60'}
                hover:opacity-100
              `}
              onClick={() => handleItemClick(item.id, item.section)}
            >
              {/* Icon Container */}
              <div 
                className={`
                  w-[35px] h-[35px] rounded-full flex justify-center items-center
                  bg-sky-100/10 transition-all duration-300 ease-in-out
                  shadow-[0_5px_15px_rgba(0,0,0,0.2)]
                  ${item.isThemeToggle && isDarkMode ? 'text-yellow-400' : 'text-white'}
                  
                  /* Efecto de opacidad basado en estado activo */
                  ${isActive ? 'opacity-100' : 'opacity-60'}
                  
                  /* Desktop hover effects */
                  lg:group-hover:bg-white/20 lg:group-hover:scale-[1.2] lg:group-hover:translate-x-[22px]
                  lg:group-hover:opacity-100
                  
                  /* Tablet hover effects */
                  md:max-lg:group-hover:bg-white/20 md:max-lg:group-hover:scale-[1.15] md:max-lg:group-hover:-translate-y-[6px]
                  md:max-lg:group-hover:opacity-100
                  
                  /* Mobile: No hover effects, smaller size */
                  max-md:w-[32px] max-md:h-[32px] max-md:active:scale-95
                  max-md:active:opacity-100
                `}
              >
                {item.isProfile ? (
                  <img 
                    src="/jcm_logo.png" 
                    alt="Perfil" 
                    className={`
                      w-[110%] h-[110%] object-cover rounded-full scale-110 max-md:w-[100%] max-md:h-[100%] max-md:scale-100
                      transition-all duration-300 ease-in-out
                      ${isActive ? 'opacity-100' : 'opacity-60'}
                      group-hover:opacity-100
                    `}
                  />
                ) : (
                  <IconComponent 
                    size={20} 
                    className={`
                      transition-all duration-300 ease-in-out
                      ${item.isThemeToggle && isDarkMode ? 'text-yellow-400' : 'text-white'}
                      max-md:w-[18px] max-md:h-[18px]
                      ${isActive ? 'opacity-100' : 'opacity-60'}
                      group-hover:opacity-100
                    `}
                  />
                )}
              </div>



              {/* Tooltip */}
              <span 
                className="
                  /* Desktop: Right tooltip */
                  absolute left-[210%] top-1/2 -translate-y-1/2
                  bg-gray-200/90 text-black px-2.5 py-1.5 rounded-lg
                  text-xs whitespace-nowrap shadow-[0_4px_10px_rgba(0,0,0,0.1)]
                  opacity-0 invisible -translate-x-1 
                  transition-all duration-300 ease-in-out
                  lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-x-0
                  before:content-[''] before:absolute before:-left-1.5 before:top-1/2 
                  before:-translate-y-1/2 before:border-[6px] before:border-transparent
                  before:border-r-gray-200/90
                  
                  /* Tablet: Top tooltip */
                  md:max-lg:left-1/2 md:max-lg:-translate-x-1/2 md:max-lg:top-auto 
                  md:max-lg:bottom-[140%] md:max-lg:translate-y-0 md:max-lg:px-3 md:max-lg:py-2
                  md:max-lg:text-[11px] md:max-lg:rounded-md md:max-lg:bg-gray-800/95 md:max-lg:text-white
                  md:max-lg:shadow-[0_8px_20px_rgba(0,0,0,0.3)] md:max-lg:backdrop-blur-sm
                  md:max-lg:group-hover:opacity-100 md:max-lg:group-hover:visible md:max-lg:group-hover:-translate-y-1
                  md:max-lg:before:left-1/2 md:max-lg:before:-translate-x-1/2 
                  md:max-lg:before:top-full md:max-lg:before:border-t-gray-800/95 
                  md:max-lg:before:border-r-transparent md:max-lg:before:border-l-transparent
                  md:max-lg:before:border-b-transparent
                  
                  /* Mobile: Hide tooltips */
                  max-md:hidden
                "
              >
                {item.tooltip}
              </span>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .dock-item.clicked .icon {
          animation: jumpRight 0.4s ease-out forwards;
        }

        @keyframes jumpRight {
          0% { transform: translateX(0); }
          50% { transform: translateX(35px); }
          100% { transform: translateX(2px); }
        }

        .dock-item:hover ~ .dock-item .icon {
          transform: scale(1.2) translateX(3px);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
