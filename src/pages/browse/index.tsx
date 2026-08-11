import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Rating,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { IMAGE_URL_W500 } from "api";
import React, { useState } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
  genres: string[];
}

// Mock data - replace with actual API call
const mockMovies: Movie[] = [
  {
    id: 278,
    title: "The Shawshank Redemption",
    poster_path: "/q6y0Go1tsGEsmJy/ZimUdo8f0o.jpg",
    vote_average: 9.3,
    release_date: "1994-09-23",
    overview: "Two imprisoned men bond over a number of years.",
    genres: ["Drama"],
  },
  {
    id: 238,
    title: "The Godfather",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZQeQa.jpg",
    vote_average: 9.2,
    release_date: "1972-03-14",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.",
    genres: ["Crime", "Drama"],
  },
  {
    id: 27205,
    title: "Inception",
    poster_path: "/9gk7adHYeDMPS6QW4UZSYcOQCXw.jpg",
    vote_average: 8.8,
    release_date: "2010-07-16",
    overview: "A skilled thief who steals corporate secrets through the use of dream-sharing technology.",
    genres: ["Action", "Sci-Fi"],
  },
];

const BrowseMovies: React.FC = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
    setPage(1);
  };

  const handleGenreChange = (event: SelectChangeEvent) => {
    setGenre(event.target.value);
    setPage(1);
  };

  const handleYearChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
    setPage(1);
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Browse Movies
        </Typography>

        {/* Filters Section */}
        <Box sx={{ mb: 4, p: 3, bgcolor: "background.paper", borderRadius: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Sort By</InputLabel>
                <Select value={sortBy} label="Sort By" onChange={handleSortChange}>
                  <MenuItem value="popularity.desc">Most Popular</MenuItem>
                  <MenuItem value="vote_average.desc">Top Rated</MenuItem>
                  <MenuItem value="release_date.desc">Newest</MenuItem>
                  <MenuItem value="title.asc">A-Z</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Genre</InputLabel>
                <Select value={genre} label="Genre" onChange={handleGenreChange}>
                  <MenuItem value="">All Genres</MenuItem>
                  <MenuItem value="action">Action</MenuItem>
                  <MenuItem value="comedy">Comedy</MenuItem>
                  <MenuItem value="drama">Drama</MenuItem>
                  <MenuItem value="horror">Horror</MenuItem>
                  <MenuItem value="scifi">Sci-Fi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Release Year</InputLabel>
                <Select value={year} label="Release Year" onChange={handleYearChange}>
                  <MenuItem value="">All Years</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2021">2021</MenuItem>
                  <MenuItem value="2020">2020</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Movies Grid */}
        <Grid container spacing={2}>
          {mockMovies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea href={`#/movie/${movie.id}`}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={IMAGE_URL_W500 + movie.poster_path}
                    alt={movie.title}
                  />
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
                  <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                    {movie.genres.map((g) => (
                      <Chip key={g} label={g} size="small" />
                    ))}
                  </Stack>
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
            count={100}
            page={page}
            onChange={(e, newPage) => setPage(newPage)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BrowseMovies;

