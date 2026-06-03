import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#3b82f6",
    },

    secondary: {
      main: "#8b5cf6",
    },

    background: {
      default: "#020617",
      paper: "rgba(255,255,255,0.08)",
    },
  },

  typography: {
    fontFamily:
      "'Inter', 'Segoe UI', sans-serif",

    h2: {
      fontWeight: 800,
    },

    h3: {
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 20,
  },
});

export default theme;