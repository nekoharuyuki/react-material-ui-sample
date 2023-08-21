import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./components/pages/dashboard/Dashboard'))

// Pages
const Login = React.lazy(() => import('./components/pages/sign-in/SignIn'))

const App: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;