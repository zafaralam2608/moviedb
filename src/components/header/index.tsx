import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import Search from "components/header/search";
import React from "react";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button href="../">MovieDB</Button>
          <Button>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Menu
            </Typography>
          </Button>
          <Search />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
