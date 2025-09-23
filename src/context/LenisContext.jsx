import { createContext, useContext } from 'react'
import useLenis from '@/hooks/useLenis'

const LenisContext = createContext()

export const LenisProvider = ({ children, options = {} }) => {
  const lenisInstance = useLenis(options)

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  )
}

export const useLenisContext = () => {
  const context = useContext(LenisContext)
  if (!context) {
    throw new Error('useLenisContext must be used within a LenisProvider')
  }
  return context
}

export default LenisContext