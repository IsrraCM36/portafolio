import { Routes, Route, Link } from 'react-router-dom'
import Principal from '@pages/Principal'
import Proyectos from '@pages/Proyectos'
import { LenisProvider } from '@/context/LenisContext'

export default function App() {
  return (
    <LenisProvider 
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false, // Mejor rendimiento en móviles
      }}
    >
      <div className="min-h-screen">
        <main>
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/proyectos" element={<Proyectos />} />
          </Routes>
        </main>
      </div>
    </LenisProvider>
  )
}
