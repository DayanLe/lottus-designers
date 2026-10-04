import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { LazyMotion } from 'motion/react';
import App from './App.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <LazyMotion features={() => import('./motionFeatures').then((mod) => mod.default)}>
        <App />
      </LazyMotion>
    </LanguageProvider>
  </StrictMode>,
);

