import { CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import Header from "components/header";
import { darkTheme } from "constants/theme";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "router";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Toolbar />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
