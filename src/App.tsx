import './App.css';
import React, { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { AppRoutes } from "./router/routes";
import { AuthProvider } from "./lib/firebase/Auth";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme/theme";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const App: React.FC = () => {
  const [theme, colorMode] = useMode();

  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <AuthProvider>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AppRoutes />
            </ThemeProvider>
          </ColorModeContext.Provider>
        </AuthProvider>
      </Suspense>
    </HashRouter>
  );
};


export default App;