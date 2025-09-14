import { Routes, Route, Link } from 'react-router-dom'
import Principal from '@pages/Principal'
import Proyectos from '@pages/Proyectos'

export default function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </main>
    </div>
  )
}
