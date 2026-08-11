import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { IMAGE_URL_W500 } from "api";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

interface SearchResult {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  profile_path?: string;
  overview?: string;
  release_date?: string;
  media_type: string;
}

const SearchResults: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const query = searchParams.get("q") || "";
  const mediaType = searchParams.get("type") || "movie";

  // Mock search results - replace with actual API call
  const mockResults: SearchResult[] = [
    {
      id: 1,
      title: "Inception",
      media_type: "movie",
      poster_path: "/9gk7adHYeDMPS6QW4UZSYcOQCXw.jpg",
      overview:
        "A skilled thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      release_date: "2010-07-16",
    },
    {
      id: 2,
      title: "The Matrix",
      media_type: "movie",
      poster_path: "/f89U3ADr1oRBt0RnRa7z4oDMjoS.jpg",
      overview:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      release_date: "1999-03-31",
    },
    {
      id: 3,
      title: "Interstellar",
      media_type: "movie",
      poster_path: "/gEU2QniE6E77NI6lCu244gwTeDe.jpg",
      overview:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      release_date: "2014-11-07",
    },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: e.target.value, type: mediaType });
    setPage(1);
  };

  const handleMediaTypeChange = (type: string) => {
    setSearchParams({ q: query, type });
    setPage(1);
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Search Results
        </Typography>

        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            placeholder="Search movies, TV shows, actors..."
            value={query}
            onChange={handleSearchChange}
            sx={{ mb: 2 }}
          />
          <Stack direction="row" spacing={2}>
            <Typography
              component="span"
              onClick={() => handleMediaTypeChange("movie")}
              sx={{
                cursor: "pointer",
                fontWeight: mediaType === "movie" ? "bold" : "normal",
                color: mediaType === "movie" ? "primary.main" : "inherit",
              }}
            >
              Movies
            </Typography>
            <Typography
              component="span"
              onClick={() => handleMediaTypeChange("tv")}
              sx={{
                cursor: "pointer",
                fontWeight: mediaType === "tv" ? "bold" : "normal",
                color: mediaType === "tv" ? "primary.main" : "inherit",
              }}
            >
              TV Shows
            </Typography>
            <Typography
              component="span"
              onClick={() => handleMediaTypeChange("person")}
              sx={{
                cursor: "pointer",
                fontWeight: mediaType === "person" ? "bold" : "normal",
                color: mediaType === "person" ? "primary.main" : "inherit",
              }}
            >
              People
            </Typography>
          </Stack>
        </Box>

        <Grid container spacing={2}>
          {mockResults.map((result) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={result.id}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea href={`#/movie/${result.id}`}>
                  {result.poster_path && (
                    <CardMedia
                      component="img"
                      height="300"
                      image={IMAGE_URL_W500 + result.poster_path}
                      alt={result.title || result.name}
                    />
                  )}
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {result.title || result.name}
                    </Typography>
                    {result.release_date && (
                      <Typography variant="caption" color="textSecondary">
                        {new Date(result.release_date).getFullYear()}
                      </Typography>
                    )}
                    <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                      {result.overview?.substring(0, 100)}...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={10}
            page={page}
            onChange={(e, newPage) => setPage(newPage)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchResults;

