import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import {ContextProvider} from "./hooks/use-state-context.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ContextProvider>
          <App/>
      </ContextProvider>
  </StrictMode>,
)
