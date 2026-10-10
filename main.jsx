import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DemoShell from './shell/DemoShell';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DemoShell>
      <App />
    </DemoShell>
  </React.StrictMode>
);
