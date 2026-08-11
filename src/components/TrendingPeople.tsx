import { ArrowBackIos, ArrowForwardIos, Add } from "@mui/icons-material";
import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import { IMAGE_URL_W185 } from "api";
import React, { useRef } from "react";

interface TrendingPeopleProps {
  data: Array<{
    id: number;
    profile_path: string;
    original_name: string;
    known_for_department: string;
  }>;
}

const TrendingPeople: React.FC<TrendingPeopleProps> = ({ data }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -220 : 220,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Section Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3, ml: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          Trending people
          <ArrowForwardIos sx={{ fontSize: "1rem" }} />
        </Typography>
      </Box>

      {/* Scrollable Container */}
      <Box sx={{ position: "relative" }}>
        {/* Left Button */}
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            top: "50%",
            left: -20,
            transform: "translateY(-50%)",
            zIndex: 1,
            bgcolor: "rgba(255, 255, 255, 0.9)",
            color: "black",
            "&:hover": { bgcolor: "rgba(255, 255, 255, 1)" },
          }}
        >
          <ArrowBackIos fontSize="small" />
        </IconButton>

        {/* Scrollable Image List */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollBehavior: "smooth",
            px: 2,
            pb: 1,
            mx: 4,

            // Hide scrollbar
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari, Edge
            },
          }}
        >
          {data.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: "170px",
                gap: 1,
              }}
            >
              {/* Rank Badge */}
              <Box
                sx={{
                  position: "relative",
                  width: "140px",
                  height: "140px",
                }}
              >
                {/* Plus Icon - Top Left */}
                <IconButton
                  size="small"
                  sx={{
                    position: "absolute",
                    top: -5,
                    left: -5,
                    zIndex: 2,
                    bgcolor: "rgba(0, 0, 0, 0.7)",
                    color: "white",
                    width: "32px",
                    height: "32px",
                    "&:hover": { bgcolor: "rgba(0, 0, 0, 0.9)" },
                  }}
                >
                  <Add sx={{ fontSize: "1rem" }} />
                </IconButton>

                {/* Circular Image */}
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src={`${IMAGE_URL_W185}${item.profile_path}`}
                  alt={item.original_name}
                />

                {/* Rank Circle - Bottom Right */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -8,
                    right: -8,
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    bgcolor: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid white",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    zIndex: 2,
                  }}
                >
                  {index + 5}
                </Box>
              </Box>

              {/* Name */}
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  textAlign: "center",
                  mt: 1,
                }}
              >
                {item.original_name}
              </Typography>

              {/* Rank Change */}
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#888",
                  textAlign: "center",
                }}
              >
                {item.known_for_department}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Right Button */}
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            top: "50%",
            right: -20,
            transform: "translateY(-50%)",
            zIndex: 1,
            bgcolor: "rgba(255, 255, 255, 0.9)",
            color: "black",
            "&:hover": { bgcolor: "rgba(255, 255, 255, 1)" },
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TrendingPeople;

