import { useEffect } from 'react'
import BentoCard from '@/components/BentoGrid/BentoGrid'
/* import BentoCertif from '@/components/BentoCertif/BentoCertif' */

export default function Proyectos() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
     <BentoCard />
     {/* <BentoCertif /> */}
    </div>
  )
}
