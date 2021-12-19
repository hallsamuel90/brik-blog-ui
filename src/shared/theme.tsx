import { createTheme } from "@mui/material"

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#1d1e1e",
    },
    secondary: {
      main: "#e91e63",
    },
  },
}

export const theme = createTheme(themeOptions)

export type BrikTheme = typeof theme
