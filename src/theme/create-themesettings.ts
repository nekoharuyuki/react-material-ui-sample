import { tokens } from "./theme";

// テーマ設定の型
type ThemeSettings = {
  palette: {
    fontFamily: string;
    mode: "dark" | "light";
    primary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      dark: string;
      main: string;
      light: string;
      contrastText: string;
    };
    neutral: {
      dark: string;
      main: string;
      light: string;
    };
    background: {
      paper: string;
      default: string;
    };
  };
  typography: {
    fontFamily: string;
    fontSize: number;
    h1: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
      lineHeight: number;
    };
    h2: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
      lineHeight: number;
    };
    h3: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
      lineHeight: number;
    };
    h4: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
      lineHeight: number;
    };
    h5: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
      lineHeight: number;
    };
    h6: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
      lineHeight: number;
    };
  };
};

// テーマ設定を生成
export const themeSettings = (mode: "dark" | "light"): ThemeSettings => {
  const colors = tokens();
  return {
    palette: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
              light: '#7383A2',
              dark: '#002f6c',
              contrastText: colors.primary[100],
            },
            secondary: {
              main: colors.blueAccent[300],
              light: '#FF6428',
              dark: colors.blueAccent[300],
              contrastText: '#FFF',
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              paper: colors.primary[400],
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
              light: '#7383A2',
              dark: '#002f6c',
              contrastText: colors.primary[500],
            },
            secondary: {
              main: colors.blueAccent[600],
              light: '#FF6428',
              dark: '#c41c00',
              contrastText: '#FFF',
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              paper: colors.grey[50],
              default: colors.grey[100],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: 40,
        lineHeight: 1.2
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: 32,
        lineHeight: 1.2
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 1.2
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 1.2
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 1.2
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 1.2
      },
    },
  };
};
