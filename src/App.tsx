import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./components/pages/dashboard/Dashboard'))

// Pages
const SignIn = React.lazy(() => import('./components/pages/sign-in/SignIn'))
const SignUp = React.lazy(() => import('./components/pages/admin/Sign-up/SignUp'))

const App: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;