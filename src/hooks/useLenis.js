import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'

/**
 * Hook personalizado para implementar Lenis smooth scrolling
 * @param {Object} options - Opciones de configuración para Lenis
 * @returns {Object} - Instancia de Lenis y funciones útiles
 */
export const useLenis = (options = {}) => {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Configuración por defecto optimizada para tu portafolio
    const defaultOptions = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Deshabilitado en mobile para mejor rendimiento
      touchMultiplier: 2,
      infinite: false,
      ...options
    }

    // Crear instancia de Lenis
    lenisRef.current = new Lenis(defaultOptions)

    // Función de animación usando requestAnimationFrame
    function raf(time) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Integración con GSAP ScrollTrigger si está disponible
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
      try {
        const { ScrollTrigger } = gsap
        if (ScrollTrigger) {
          lenisRef.current.on('scroll', ScrollTrigger.update)
          
          // Deshabilitamos el lag del ScrollTrigger para un scroll más fluido
          gsap.ticker.lagSmoothing(0)
        }
      } catch (error) {
        console.log('ScrollTrigger not available, continuing without integration')
      }
    }

    // Cleanup
    return () => {
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [options])

  // Funciones útiles para controlar Lenis
  const scrollTo = (target, options = {}) => {
    lenisRef.current?.scrollTo(target, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options
    })
  }

  const scrollToTop = () => {
    scrollTo(0, { duration: 1 })
  }

  const stop = () => {
    lenisRef.current?.stop()
  }

  const start = () => {
    lenisRef.current?.start()
  }

  return {
    lenis: lenisRef.current,
    scrollTo,
    scrollToTop,
    stop,
    start
  }
}

export default useLenis