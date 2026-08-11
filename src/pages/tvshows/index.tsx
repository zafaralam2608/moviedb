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

interface TVShow {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
  overview: string;
  status: "airing" | "returning" | "ended";
}

// Mock data - replace with actual API call
const mockTVShows: TVShow[] = [
  {
    id: 1399,
    name: "Breaking Bad",
    poster_path: "/ggFHVNu6YYI5L9pCfOacMV6FAoL.jpg",
    vote_average: 9.5,
    first_air_date: "2008-01-20",
    overview:
      "A high school chemistry teacher turned methamphetamine kingpin. Walter White, an underappreciated high school chemistry teacher whose salary is barely enough to support his pregnant wife and their son with cerebral palsy.",
    status: "ended",
  },
  {
    id: 1396,
    name: "Game of Thrones",
    poster_path: "/jIhL6mlT7AblhbHJBKDF1PPP8td.jpg",
    vote_average: 9.2,
    first_air_date: "2011-04-18",
    overview:
      "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war.",
    status: "ended",
  },
  {
    id: 1668,
    name: "Friends",
    poster_path: "/a3sRNEXBLs5JZyHJu3Xo0YX6Eua.jpg",
    vote_average: 8.9,
    first_air_date: "1994-09-22",
    overview:
      "A televised retrospective of stories from a therapist's perspective on his relationships.",
    status: "ended",
  },
  {
    id: 1404,
    name: "The Office",
    poster_path: "/askg3SMvNqNC9vtKysLvQYYW64R.jpg",
    vote_average: 9.0,
    first_air_date: "2005-03-24",
    overview:
      "A mockumentary about the daily lives of office employees in the Scranton, Pennsylvania branch of Dunder Mifflin.",
    status: "ended",
  },
];

const TVShows: React.FC = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState<"all" | "airing" | "returning" | "ended">(
    "all"
  );

  const handleStatusChange = (
    event: React.SyntheticEvent,
    newValue: "all" | "airing" | "returning" | "ended"
  ) => {
    setStatus(newValue);
    setPage(1);
  };

  const filteredShows =
    status === "all" ? mockTVShows : mockTVShows.filter((show) => show.status === status);

  const getStatusColor = (showStatus: string) => {
    switch (showStatus) {
      case "airing":
        return "success";
      case "returning":
        return "warning";
      case "ended":
        return "error";
      default:
        return "default";
    }
  };

  const getStatusText = (showStatus: string) => {
    switch (showStatus) {
      case "airing":
        return "Currently Airing";
      case "returning":
        return "Returning";
      case "ended":
        return "Ended";
      default:
        return "";
    }
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          TV Shows
        </Typography>

        <Tabs value={status} onChange={handleStatusChange} sx={{ mb: 3 }}>
          <Tab label="All" value="all" />
          <Tab label="Currently Airing" value="airing" />
          <Tab label="Returning" value="returning" />
          <Tab label="Ended" value="ended" />
        </Tabs>

        <Grid container spacing={2}>
          {filteredShows.map((show) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={show.id}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea href={`#/tvshow/${show.id}`}>
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={IMAGE_URL_W500 + show.poster_path}
                      alt={show.name}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        bgcolor:
                          show.status === "airing"
                            ? "success.main"
                            : show.status === "returning"
                              ? "warning.main"
                              : "error.main",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "0.75rem",
                      }}
                    >
                      {getStatusText(show.status)}
                    </Box>
                  </Box>
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {show.name}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                    <Rating value={show.vote_average / 2} readOnly precision={0.1} />
                    <Typography variant="body2" color="textSecondary">
                      {show.vote_average.toFixed(1)}/10
                    </Typography>
                  </Stack>
                  <Typography variant="caption" color="textSecondary" display="block" sx={{ mb: 1 }}>
                    {new Date(show.first_air_date).getFullYear()}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {show.overview.substring(0, 80)}...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredShows.length > 0 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={10}
              page={page}
              onChange={(e, newPage) => setPage(newPage)}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TVShows;

