import { useEffect, useState } from 'react'
import { useLenisContext } from '@/context/LenisContext'

/**
 * Hook para detectar la sección activa durante el scroll
 * @param {Array} sections - Array de IDs de secciones a monitorear
 * @param {Object} options - Opciones de configuración
 * @returns {string} - ID de la sección actualmente activa
 */
export const useActiveSection = (sections = [], options = {}) => {
  const [activeSection, setActiveSection] = useState(sections[0] || '')
  const { lenis } = useLenisContext()

  useEffect(() => {
    if (!sections.length) return

    // Función para detectar la sección activa basada en posición del scroll
    const detectActiveSection = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const offset = windowHeight * 0.3 // 30% del viewport

      let currentSection = sections[0]

      // Verificar si estamos cerca del final de la página
      const isNearBottom = scrollY + windowHeight >= documentHeight - 100

      // Si estamos cerca del final, activar la última sección
      if (isNearBottom) {
        currentSection = sections[sections.length - 1]
      } else {
        // Iterar por las secciones y encontrar cuál está más cerca del centro
        for (let i = 0; i < sections.length; i++) {
          const element = document.getElementById(sections[i])
          if (!element) continue

          const rect = element.getBoundingClientRect()
          const elementTop = scrollY + rect.top
          const elementBottom = elementTop + rect.height

          // Si el scroll está dentro de esta sección (con offset)
          if (scrollY + offset >= elementTop && scrollY + offset < elementBottom) {
            currentSection = sections[i]
            break
          }

          // Para la última sección, usar un offset más flexible
          if (i === sections.length - 1 && scrollY + windowHeight * 0.5 >= elementTop) {
            currentSection = sections[i]
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    // Ejecutar inmediatamente
    detectActiveSection()

    // Crear un throttle para mejorar el rendimiento
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          detectActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    // Escuchar eventos de scroll
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Si Lenis está disponible, también escuchar sus eventos
    if (lenis) {
      lenis.on('scroll', detectActiveSection)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (lenis) {
        lenis.off('scroll', detectActiveSection)
      }
    }
  }, [sections, activeSection, lenis])

  return activeSection
}

export default useActiveSection