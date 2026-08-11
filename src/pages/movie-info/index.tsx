import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { IMAGE_URL_ORIGINAL } from "api";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

interface MovieDetails {
  title: string;
  budget: number;
  revenue: number;
  runtime: number;
  status: string;
  release_date: string;
  language: string;
  country: string;
  production_countries: Array<{ name: string; iso_3166_1: string }>;
  spoken_languages: Array<{ name: string; iso_639_1: string }>;
  imdb_id?: string;
  homepage?: string;
  tagline?: string;
  keywords: string[];
}

// Mock data - replace with actual API call
const mockMovieDetails: MovieDetails = {
  title: "Inception",
  budget: 160000000,
  revenue: 839000000,
  runtime: 148,
  status: "Released",
  release_date: "2010-07-16",
  language: "English",
  country: "USA",
  production_countries: [{ name: "United States", iso_3166_1: "US" }],
  spoken_languages: [
    { name: "English", iso_639_1: "en" },
    { name: "Japanese", iso_639_1: "ja" },
    { name: "French", iso_639_1: "fr" },
  ],
  imdb_id: "tt1375666",
  homepage: "https://www.warnerbros.com/movies/inception",
  tagline: "Your mind is the scene of the crime",
  keywords: ["dream", "reality", "heist", "mind-bending", "sci-fi"],
};

const MovieInfo: React.FC = () => {
  const { id } = useParams();
  const [tabValue, setTabValue] = useState(0);
  const details = mockMovieDetails;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Movie Info
        </Typography>

        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Overview" />
          <Tab label="Box Office" />
          <Tab label="Production" />
        </Tabs>

        {/* Overview Tab */}
        {tabValue === 0 && (
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                {details.tagline && (
                  <>
                    <Grid item xs={12}>
                      <Typography variant="h6" sx={{ fontStyle: "italic", color: "primary.main" }}>
                        "{details.tagline}"
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                  </>
                )}

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    Status
                  </Typography>
                  <Typography variant="body2">{details.status}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    Release Date
                  </Typography>
                  <Typography variant="body2">
                    {new Date(details.release_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    Runtime
                  </Typography>
                  <Typography variant="body2">
                    {Math.floor(details.runtime / 60)}h {details.runtime % 60}m
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    Language
                  </Typography>
                  <Typography variant="body2">{details.language}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    Country
                  </Typography>
                  <Typography variant="body2">
                    {details.production_countries.map((c) => c.name).join(", ")}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    Spoken Languages
                  </Typography>
                  <Typography variant="body2">
                    {details.spoken_languages.map((l) => l.name).join(", ")}
                  </Typography>
                </Grid>

                {details.homepage && (
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      Official Website
                    </Typography>
                    <Typography
                      component="a"
                      href={details.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="body2"
                      sx={{ color: "primary.main", textDecoration: "none", cursor: "pointer" }}
                    >
                      {details.homepage}
                    </Typography>
                  </Grid>
                )}

                {details.keywords && details.keywords.length > 0 && (
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                      Keywords
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                      {details.keywords.map((keyword) => (
                        <Box
                          key={keyword}
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            bgcolor: "background.default",
                            borderRadius: 1,
                            mb: 1,
                          }}
                        >
                          <Typography variant="body2">{keyword}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>
        )}

        {/* Box Office Tab */}
        {tabValue === 1 && (
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 2, bgcolor: "background.default", borderRadius: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                      Budget
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {formatCurrency(details.budget)}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 2, bgcolor: "background.default", borderRadius: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                      Worldwide Box Office
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {formatCurrency(details.revenue)}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 2, bgcolor: "background.default", borderRadius: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                      Profit
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "success.main" }}>
                      {formatCurrency(details.revenue - details.budget)}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 2, bgcolor: "background.default", borderRadius: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                      ROI
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {(((details.revenue - details.budget) / details.budget) * 100).toFixed(1)}%
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )}

        {/* Production Tab */}
        {tabValue === 2 && (
          <Card>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
                Production Details
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Production company and location information would be displayed here.
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default MovieInfo;

