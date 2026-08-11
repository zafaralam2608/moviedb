import {AppBar, Button, Container, IconButton, Toolbar} from "@mui/material";
import Search from "components/header/search";
import React from "react";
import {Menu} from "@mui/icons-material";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton>
            <Menu />
          </IconButton>
          <Button href="#/" sx={{ backgroundColor: "#f5c518", fontWeight: 900, color: "#000", letterSpacing: 1, textTransform: "none", m: 1 }}>
            MovieDB
          </Button>
          <Search />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
