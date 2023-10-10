import './App.css';
import React, { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'

import { AppRoutes } from "./router/routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const App: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
      <AppRoutes />
      </Suspense>
    </HashRouter>
  );
};

export default App;