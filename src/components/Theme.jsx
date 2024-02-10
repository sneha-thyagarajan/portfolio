import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";



export const tokens = (mode) => ({
    ...(mode === "dark"
      ? {
        black: {
            100: "#cccccc",
            200: "#999999",
            300: "#666666",
            400: "#333333",
            500: "#000000",
            600: "#000000",
            700: "#000000",
            800: "#000000",
            900: "#000000"
        },
        
        
        blue: {
            100: "#d6ebff",
            200: "#add6ff",
            300: "#85c2ff",
            400: "#5cadff",
            500: "#3399ff",
            600: "#297acc",
            700: "#1f5c99",
            800: "#143d66",
            900: "#0a1f33"
        },
        
        }
      : {
        black: {
            100: "#000000",
            200: "#000000",
            300: "#000000",
            400: "#000000",
            500: "#000000",
            600: "#333333",
            700: "#666666",
            800: "#999999",
            900: "#cccccc",
        },
        
        
        blue: {
            100: "#0a1f33",
            200: "#143d66",
            300: "#1f5c99",
            400: "#297acc",
            500: "#3399ff",
            600: "#5cadff",
            700: "#85c2ff",
            800: "#add6ff",
            900: "#d6ebff",
        },
        
        }),
  });

  export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                main: colors.black[500],
              },
              secondary: {
                main: colors.blue[500],
              },
              neutral: {
                dark: colors.black[700],
                main: colors.black[500],
                light: colors.black[100],
              },
              background: {
                default: colors.black[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                main: colors.black[100],
              },
              secondary: {
                main: colors.blue[500],
              },
              neutral: {
                dark: colors.black[700],
                main: colors.black[500],
                light: colors.black[100],
              },
              background: {
                default: "#fcfcfc",
              },
            }),
      },
      typography: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };
  
  // context for color mode
  export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });
  
  export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };