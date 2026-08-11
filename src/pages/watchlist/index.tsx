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
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { IMAGE_URL_W500 } from "api";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";

interface WatchlistItem {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
  status: "watchlist" | "watching" | "completed";
  addedDate: string;
}

// Mock data - replace with actual data from Redux or API
const mockWatchlist: WatchlistItem[] = [
  {
    id: 238,
    title: "The Godfather",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZQeQa.jpg",
    vote_average: 9.2,
    release_date: "1972-03-14",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.",
    status: "completed",
    addedDate: "2024-01-15",
  },
  {
    id: 278,
    title: "The Shawshank Redemption",
    poster_path: "/q6y0Go1tsGEsmJy/ZimUdo8f0o.jpg",
    vote_average: 9.3,
    release_date: "1994-09-23",
    overview: "Two imprisoned men bond over a number of years.",
    status: "watching",
    addedDate: "2024-01-10",
  },
  {
    id: 27205,
    title: "Inception",
    poster_path: "/9gk7adHYeDMPS6QW4UZSYcOQCXw.jpg",
    vote_average: 8.8,
    release_date: "2010-07-16",
    overview: "A skilled thief who steals corporate secrets through the use of dream-sharing technology.",
    status: "watchlist",
    addedDate: "2024-01-08",
  },
];

const Watchlist: React.FC = () => {
  const [status, setStatus] = useState<"watchlist" | "watching" | "completed">(
    "watchlist"
  );
  const [watchlist, setWatchlist] = useState(mockWatchlist);

  const handleTabChange = (
    event: React.SyntheticEvent,
    newValue: "watchlist" | "watching" | "completed"
  ) => {
    setStatus(newValue);
  };

  const handleRemove = (id: number) => {
    setWatchlist(watchlist.filter((item) => item.id !== id));
  };

  const filteredItems = watchlist.filter((item) => item.status === status);

  const getStatusLabel = () => {
    switch (status) {
      case "watching":
        return "Currently Watching";
      case "completed":
        return "Completed";
      default:
        return "Watchlist";
    }
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          My {getStatusLabel()}
        </Typography>

        <Tabs value={status} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Watchlist" value="watchlist" />
          <Tab label="Watching" value="watching" />
          <Tab label="Completed" value="completed" />
        </Tabs>

        {filteredItems.length === 0 ? (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" color="textSecondary">
              No items in {getStatusLabel().toLowerCase()}
            </Typography>
            <Button variant="contained" href="#/browse" sx={{ mt: 2 }}>
              Browse Movies
            </Button>
          </Box>
        ) : (
          <Grid container spacing={2}>
            {filteredItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card sx={{ height: "100%" }}>
                  <CardActionArea href={`#/movie/${item.id}`}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={IMAGE_URL_W500 + item.poster_path}
                      alt={item.title}
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                      <Rating
                        value={item.vote_average / 2}
                        readOnly
                        precision={0.1}
                      />
                      <Typography variant="body2" color="textSecondary">
                        {item.vote_average.toFixed(1)}/10
                      </Typography>
                    </Stack>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      display="block"
                      sx={{ mb: 1 }}
                    >
                      {new Date(item.release_date).getFullYear()}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      display="block"
                      sx={{ mb: 2 }}
                    >
                      Added: {new Date(item.addedDate).toLocaleDateString()}
                    </Typography>
                    <Button
                      size="small"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleRemove(item.id)}
                      fullWidth
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Watchlist;

