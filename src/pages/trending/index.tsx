import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { IMAGE_URL_W500 } from "api";
import React, { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

interface TrendingMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
  trending_rank: number;
}

// Mock data - replace with actual API call
const mockTrendingMovies: TrendingMovie[] = [
  {
    id: 912649,
    title: "V/H/S/99",
    poster_path: "/AjHvzlBCNAPqLTT97F7O0VU3yI3.jpg",
    vote_average: 7.2,
    release_date: "2022-10-20",
    overview:
      "A teenage gang clash in a village leads to a series of gruesome events that unfolds during a night of chaotic rave.",
    trending_rank: 1,
  },
  {
    id: 507086,
    title: "Five Nights at Freddy's",
    poster_path: "/A4j8S6moPS2jPDxMaFT2kDfBFRy.jpg",
    vote_average: 7.6,
    release_date: "2023-10-27",
    overview:
      "A troubled security guard begins working at Freddy Fazbear's Pizza. During his first night on the job, he realizes the night shift won't be so easy to get through.",
    trending_rank: 2,
  },
  {
    id: 76341,
    title: "Mad Max Fury Road",
    poster_path: "/8UlWHLMpgZm9bx6UR8tacaPEsEb.jpg",
    vote_average: 8.1,
    release_date: "2015-05-14",
    overview:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
    trending_rank: 3,
  },
];

const Trending: React.FC = () => {
  const [timeWindow, setTimeWindow] = useState<"day" | "week">("week");
  const [mediaType, setMediaType] = useState<"all" | "movie" | "tv">("all");

  const handleTimeWindowChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: "day" | "week"
  ) => {
    if (newValue !== null) {
      setTimeWindow(newValue);
    }
  };

  const handleMediaTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: "all" | "movie" | "tv"
  ) => {
    if (newValue !== null) {
      setMediaType(newValue);
    }
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
          <TrendingUpIcon sx={{ fontSize: 32, color: "primary.main" }} />
          <Typography variant="h4">Trending Now</Typography>
        </Stack>

        <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
              Time Window
            </Typography>
            <ToggleButtonGroup
              value={timeWindow}
              exclusive
              onChange={handleTimeWindowChange}
            >
              <ToggleButton value="day">Today</ToggleButton>
              <ToggleButton value="week">This Week</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
              Type
            </Typography>
            <ToggleButtonGroup
              value={mediaType}
              exclusive
              onChange={handleMediaTypeChange}
            >
              <ToggleButton value="all">All</ToggleButton>
              <ToggleButton value="movie">Movies</ToggleButton>
              <ToggleButton value="tv">TV Shows</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>

        <Grid container spacing={2}>
          {mockTrendingMovies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea href={`#/movie/${movie.id}`}>
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={IMAGE_URL_W500 + movie.poster_path}
                      alt={movie.title}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        bgcolor: "success.main",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <TrendingUpIcon sx={{ fontSize: 16 }} />
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        #{movie.trending_rank}
                      </Typography>
                    </Box>
                  </Box>
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {movie.title}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                    <Rating value={movie.vote_average / 2} readOnly precision={0.1} />
                    <Typography variant="body2" color="textSecondary">
                      {movie.vote_average.toFixed(1)}/10
                    </Typography>
                  </Stack>
                  <Typography variant="caption" color="textSecondary" display="block" sx={{ mb: 1 }}>
                    {new Date(movie.release_date).getFullYear()}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {movie.overview.substring(0, 80)}...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Trending;

