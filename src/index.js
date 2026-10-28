import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

// react-snap captures browser DOM, not a React 18 server-rendered hydration payload.
// Keep its static HTML for direct visits/crawlers, then mount the interactive app.
const root = createRoot(rootElement);
root.render(<StrictApp />);
