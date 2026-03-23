import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import { IMAGE_URL_W185 } from "api";
import { popular } from "constants/data";
import React, { useRef } from "react";

const Dashboard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* Left Button */}
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          top: "40%",
          left: 0,
          zIndex: 1,
          bgcolor: "white",
          "&:hover": { bgcolor: "grey.200" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Scrollable Image List */}
      <Box
        ref={scrollRef}
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "minmax(170px, 1fr)",
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: 1,

          // Hide scrollbar
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, Edge
          },
        }}
      >
        {popular.results.map((item) => (
          <Card key={item.id} sx={{ width: "170px", margin: "10px" }}>
            <CardMedia
              component="img"
              sx={{ height: "225px", width: "150px", margin: "10px auto 0" }}
              src={`${IMAGE_URL_W185}${item.profile_path}`}
              alt={item.original_name}
            />
            <CardHeader
              title={item.original_name}
              titleTypographyProps={{ fontSize: "1rem" }}
              subheader={item.known_for_department}
              subheaderTypographyProps={{ fontSize: "0.8rem" }}
            />
          </Card>
        ))}
      </Box>

      {/* Right Button */}
      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          top: "40%",
          right: 0,
          zIndex: 1,
          bgcolor: "white",
          "&:hover": { bgcolor: "grey.200" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Dashboard;
