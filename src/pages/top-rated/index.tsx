import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Rating,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { IMAGE_URL_W500 } from "api";
import React, { useState } from "react";

interface MovieItem {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
}

// Mock data - replace with actual API call
const mockTopRatedMovies: MovieItem[] = [
  {
    id: 238,
    title: "The Godfather",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZQeQa.jpg",
    vote_average: 9.2,
    release_date: "1972-03-14",
    overview:
      "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.",
  },
  {
    id: 240,
    title: "The Godfather Part II",
    poster_path: "/hoPArIvg2FWKNsD4JlqQKaHxX6d.jpg",
    vote_average: 9.0,
    release_date: "1974-12-20",
    overview:
      "The early life and rise of Vito Corleone and his struggle against the rival gFamily, the Tattaglias.",
  },
  {
    id: 278,
    title: "The Shawshank Redemption",
    poster_path: "/q6y0Go1tsGEsmJy/ZimUdo8f0o.jpg",
    vote_average: 9.3,
    release_date: "1994-09-23",
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: 250,
    title: "Inception",
    poster_path: "/9gk7adHYeDMPS6QW4UZSYcOQCXw.jpg",
    vote_average: 8.8,
    release_date: "2010-07-16",
    overview:
      "A skilled thief who steals corporate secrets through the use of dream-sharing technology.",
  },
  {
    id: 680,
    title: "Pulp Fiction",
    poster_path: "/dM2w364MScsjFjS91SeGSvdw9f.jpg",
    vote_average: 8.9,
    release_date: "1994-10-14",
    overview:
      "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
  },
  {
    id: 550,
    title: "Fight Club",
    poster_path: "/fDeG1rNvjGccoqygen7UejDOSGD.jpg",
    vote_average: 8.8,
    release_date: "1999-10-15",
    overview:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club.",
  },
];

const TopRatedMovies: React.FC = () => {
  const [page, setPage] = useState(1);
  const [mediaType, setMediaType] = useState<"movie" | "tv">("movie");

  const handleTabChange = (event: React.SyntheticEvent, newValue: "movie" | "tv") => {
    setMediaType(newValue);
    setPage(1);
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Top Rated
        </Typography>

        <Tabs
          value={mediaType}
          onChange={handleTabChange}
          sx={{ mb: 3 }}
          aria-label="media type"
        >
          <Tab label="Movies" value="movie" />
          <Tab label="TV Shows" value="tv" />
        </Tabs>

        <Grid container spacing={2}>
          {mockTopRatedMovies.map((movie, index) => (
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
                        left: 8,
                        bgcolor: "rgba(0, 0, 0, 0.8)",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      <Typography variant="h6">#{index + 1}</Typography>
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

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={50}
            page={page}
            onChange={(e, newPage) => setPage(newPage)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TopRatedMovies;

