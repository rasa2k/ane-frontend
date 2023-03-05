import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@dhi/react-components-lab';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
