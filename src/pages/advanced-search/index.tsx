import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Typography,
  Checkbox,
  Slider,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const AdvancedSearch: React.FC = () => {
  const [filters, setFilters] = useState({
    title: "",
    genres: [] as string[],
    yearRange: [1900, 2024] as [number, number],
    ratingRange: [0, 10] as [number, number],
    sortBy: "popularity",
    releaseType: [] as string[],
  });

  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Animation",
    "Adventure",
    "Crime",
    "Documentary",
    "Fantasy",
  ];

  const releaseTypes = ["Movie", "TV Series", "TV Mini-Series", "TV Special"];

  const handleGenreToggle = (genre: string) => {
    setFilters((prev) => ({
      ...prev,
      genres: prev.genres.includes(genre)
        ? prev.genres.filter((g) => g !== genre)
        : [...prev.genres, genre],
    }));
  };

  const handleReleaseTypeToggle = (type: string) => {
    setFilters((prev) => ({
      ...prev,
      releaseType: prev.releaseType.includes(type)
        ? prev.releaseType.filter((t) => t !== type)
        : [...prev.releaseType, type],
    }));
  };

  const handleSearch = () => {
    console.log("Searching with filters:", filters);
    // Handle search
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Advanced Search
        </Typography>

        <Card>
          <CardContent>
            <Grid container spacing={3}>
              {/* Title Search */}
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
                  Search
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Movie, TV show, actor name, keyword..."
                  value={filters.title}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, title: e.target.value }))
                  }
                  variant="outlined"
                />
              </Grid>

              {/* Genres */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
                  Genres
                </Typography>
                <FormGroup>
                  <Grid container spacing={1}>
                    {genres.map((genre) => (
                      <Grid item xs={6} key={genre}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={filters.genres.includes(genre)}
                              onChange={() => handleGenreToggle(genre)}
                            />
                          }
                          label={genre}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </FormGroup>
              </Grid>

              {/* Release Type */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
                  Release Type
                </Typography>
                <FormGroup>
                  {releaseTypes.map((type) => (
                    <FormControlLabel
                      key={type}
                      control={
                        <Checkbox
                          checked={filters.releaseType.includes(type)}
                          onChange={() => handleReleaseTypeToggle(type)}
                        />
                      }
                      label={type}
                    />
                  ))}
                </FormGroup>
              </Grid>

              {/* Release Year Range */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
                  Release Year: {filters.yearRange[0]} - {filters.yearRange[1]}
                </Typography>
                <Slider
                  value={filters.yearRange}
                  onChange={(e, newValue) =>
                    setFilters((prev) => ({
                      ...prev,
                      yearRange: newValue as [number, number],
                    }))
                  }
                  min={1900}
                  max={2024}
                  marks={[
                    { value: 1900, label: "1900" },
                    { value: 2024, label: "2024" },
                  ]}
                  valueLabelDisplay="auto"
                />
              </Grid>

              {/* Rating Range */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
                  IMDb Rating: {filters.ratingRange[0]} - {filters.ratingRange[1]}
                </Typography>
                <Slider
                  value={filters.ratingRange}
                  onChange={(e, newValue) =>
                    setFilters((prev) => ({
                      ...prev,
                      ratingRange: newValue as [number, number],
                    }))
                  }
                  min={0}
                  max={10}
                  step={0.1}
                  marks={[
                    { value: 0, label: "0" },
                    { value: 10, label: "10" },
                  ]}
                  valueLabelDisplay="auto"
                />
              </Grid>

              {/* Sort By */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
                  Sort By
                </Typography>
                <TextField
                  select
                  fullWidth
                  value={filters.sortBy}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
                  }
                >
                  <MenuItem value="popularity">Popularity</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                  <MenuItem value="year">Release Year</MenuItem>
                  <MenuItem value="title">Title</MenuItem>
                </TextField>
              </Grid>

              {/* Buttons */}
              <Grid item xs={12}>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<SearchIcon />}
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => {
                      setFilters({
                        title: "",
                        genres: [],
                        yearRange: [1900, 2024],
                        ratingRange: [0, 10],
                        sortBy: "popularity",
                        releaseType: [],
                      });
                    }}
                  >
                    Clear All
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default AdvancedSearch;

