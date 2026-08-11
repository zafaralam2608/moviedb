import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import { IMAGE_URL_W500 } from "api";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface UserProfile {
  id: number;
  username: string;
  avatar_path?: string;
  bio?: string;
  joined_date: string;
  ratings_count: number;
  reviews_count: number;
  watchlist_count: number;
  favorite_movies: Array<{
    id: number;
    title: string;
    poster_path: string;
  }>;
}

// Mock data - replace with actual API call
const mockUserProfile: UserProfile = {
  id: 1,
  username: "MovieLover2024",
  avatar_path: "/avatar.jpg",
  bio: "Passionate about movies and storytelling. Always looking for hidden gems!",
  joined_date: "2020-03-15",
  ratings_count: 245,
  reviews_count: 38,
  watchlist_count: 42,
  favorite_movies: [
    {
      id: 238,
      title: "The Godfather",
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZQeQa.jpg",
    },
    {
      id: 278,
      title: "The Shawshank Redemption",
      poster_path: "/q6y0Go1tsGEsmJy/ZimUdo8f0o.jpg",
    },
    {
      id: 27205,
      title: "Inception",
      poster_path: "/9gk7adHYeDMPS6QW4UZSYcOQCXw.jpg",
    },
  ],
};

const UserProfile: React.FC = () => {
  const user = mockUserProfile;

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Profile Header */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Grid container spacing={3} alignItems="flex-start">
              <Grid item xs={12} sm="auto">
                <Avatar
                  sx={{ width: 150, height: 150, bgcolor: "primary.main" }}
                >
                  {user.username[0].toUpperCase()}
                </Avatar>
              </Grid>
              <Grid item xs={12} sm>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {user.username}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Member since {new Date(user.joined_date).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Button variant="contained" startIcon={<EditIcon />}>
                    Edit Profile
                  </Button>
                </Box>
                {user.bio && (
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {user.bio}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Stats */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
                  {user.ratings_count}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Ratings
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
                  {user.reviews_count}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Reviews
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
                  {user.watchlist_count}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Watchlist
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Button variant="contained" fullWidth href="#/watchlist">
                  View Watchlist
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Favorite Movies */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FavoriteIcon sx={{ color: "error.main" }} />
              Favorite Movies
            </Box>
          </Typography>
          <Grid container spacing={2}>
            {user.favorite_movies.map((movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <Card>
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
                    <Button size="small" color="error" startIcon={<FavoriteIcon />}>
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;

