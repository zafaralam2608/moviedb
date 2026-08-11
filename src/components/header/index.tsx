import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Search from "components/header/search";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button href="#/" sx={{ mr: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MovieDB
            </Typography>
          </Button>

          {/* Navigation Menu */}
          <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}>
            <Button color="inherit" href="#/">
              Home
            </Button>
            <Button color="inherit" href="#/trending">
              Trending
            </Button>
            <Button color="inherit" href="#/top-rated">
              Top Rated
            </Button>
            <Button color="inherit" href="#/browse">
              Browse
            </Button>
            <Button color="inherit" href="#/tvshows">
              TV Shows
            </Button>
            <Button
              color="inherit"
              onClick={handleMenuOpen}
              endIcon={<MenuIcon />}
            >
              More
            </Button>
          </Stack>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}>
            <Button
              color="inherit"
              onClick={handleMenuOpen}
              startIcon={<MenuIcon />}
            >
              Menu
            </Button>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem component="a" href="#/advanced-search" onClick={handleMenuClose}>
              Advanced Search
            </MenuItem>
            <MenuItem component="a" href="#/news" onClick={handleMenuClose}>
              News
            </MenuItem>
            <MenuItem component="a" href="#/watchlist" onClick={handleMenuClose}>
              My Watchlist
            </MenuItem>
            <MenuItem component="a" href="#/profile" onClick={handleMenuClose}>
              Profile
            </MenuItem>
          </Menu>

          <Box sx={{ flexGrow: 1 }} />

          {/* Search and Watchlist */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Search />
            <Button color="inherit" href="#/watchlist" sx={{ whiteSpace: "nowrap", display: { xs: "none", sm: "inline-flex" } }}>
              Watchlist
            </Button>
            <Button color="inherit" href="#/profile" sx={{ whiteSpace: "nowrap", display: { xs: "none", sm: "inline-flex" } }}>
              Profile
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
