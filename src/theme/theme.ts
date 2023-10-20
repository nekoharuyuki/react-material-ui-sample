import { createContext, useState, useMemo } from "react";
import { createTheme, Theme } from "@mui/material/styles";
import { themeSettings } from "./create-themesettings";

// カラーデザイントークンの型
type ColorTokens = {
  [key: string]: {
    [key: number]: string;
  };
};

// カラーデザイントークンを生成
export const tokens = (): ColorTokens => {
  // カラーデザイントークンの定義
  const designTokens: ColorTokens = {
    grey: {
      50:  "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    primary: {
      100: "#d0d1d5",
      200: "#a1a4ab",
      300: "#727681",
      400: "#1F2A40",
      500: "#141b2d",
      600: "#101624",
      700: "#0c101b",
      800: "#080b12",
      900: "#040509",
    },
    greenAccent: {
      100: "#dbf5ee",
      200: "#b7ebde",
      300: "#94e2cd",
      400: "#70d8bd",
      500: "#4cceac",
      600: "#3da58a",
      700: "#2e7c67",
      800: "#1e5245",
      900: "#0f2922",
    },
    redAccent: {
      100: "#f8dcdb",
      200: "#f1b9b7",
      300: "#e99592",
      400: "#e2726e",
      500: "#db4f4a",
      600: "#af3f3b",
      700: "#832f2c",
      800: "#58201e",
      900: "#2c100f",
    },
    blueAccent: {
      100: "#e1e2fe",
      200: "#c3c6fd",
      300: "#a4a9fc",
      400: "#868dfb",
      500: "#6870fa",
      600: "#535ac8",
      700: "#3e4396",
      800: "#2a2d64",
      900: "#151632",
    },
  };
  return designTokens;
};

// カラーモード切り替えのためのコンテキスト
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// カラーモードを切り替えるためのフック
export const useMode = (): [Theme, { toggleColorMode: () => void }] => {
  const [mode, setMode] = useState<"dark" | "light">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)) as Theme, [mode]);

  return [theme, colorMode];
};
