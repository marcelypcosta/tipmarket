import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Router.tsx'
import { ModeProvider } from '@/features/mode/context/ContextMode.tsx'
import { CategoryProvider } from '@/features/categorys';
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModeProvider>
      <CategoryProvider>
        <Toaster richColors/>
        <Router />
      </CategoryProvider>
    </ModeProvider>
  </StrictMode>,
)
