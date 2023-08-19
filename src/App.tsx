import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

// Containers
const DefaultLayout = React.lazy(() => import('./components/pages/dashboard/Dashboard'))

// Pages
const Login = React.lazy(() => import('./components/pages/sign-in/SignIn'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

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