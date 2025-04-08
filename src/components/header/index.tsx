import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Search from "components/header/search";
import React from "react";

const Header: React.FC = () => {
  return (
    <AppBar
      sx={{
        padding: "4px 0",
      }}
    >
      <Toolbar disableGutters sx={{ margin: "0 120px", padding: "0 12px" }}>
        <Button
          href="../"
          sx={{
            width: "64px",
            height: "32px",
            padding: 0,
            margin: "0 8px 0 0",
          }}
        >
          MovieDB
        </Button>
        <Button
          sx={{
            width: "96px",
            height: "32px",
            padding: 0,
            margin: 0,
            textTransform: "none",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "32px",
              padding: "0 16px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <MenuIcon sx={{ width: "24px", height: "24px" }} />
            <span
              style={{
                width: "36px",
                height: "18px",
                marginLeft: "0.25rem",
                lineHeight: "1.15rem",
                fontSize: "0.875rem",
                letterSpacing: ".02em",
                fontWeight: 500,
              }}
            >
              Menu
            </span>
          </Box>
        </Button>
        <Search />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
