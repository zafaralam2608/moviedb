import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Rating,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
  created_at: string;
  author_details?: {
    avatar_path?: string;
    rating?: number;
  };
  helpful_count?: number;
}

interface MovieReviewsProps {
  reviews: Review[];
}

const MovieReviews: React.FC<MovieReviewsProps> = ({ reviews }) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  if (!reviews || reviews.length === 0) {
    return (
      <Box sx={{ py: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          User Reviews
        </Typography>
        <Typography color="textSecondary">No reviews yet</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        User Reviews ({reviews.length})
      </Typography>

      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Grid item xs={12} key={review.id}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Avatar sx={{ bgcolor: "primary.main" }}>
                    {getInitials(review.author)}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                        {review.author}
                      </Typography>
                      {review.author_details?.rating && (
                        <Rating
                          value={review.author_details.rating / 2}
                          readOnly
                          precision={0.5}
                          size="small"
                        />
                      )}
                    </Box>
                    <Typography variant="caption" color="textSecondary">
                      {new Date(review.created_at).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" paragraph>
                  {review.content}
                </Typography>

                {review.content.length > 300 && (
                  <Typography
                    variant="body2"
                    color="primary"
                    sx={{ cursor: "pointer", fontWeight: "bold" }}
                  >
                    Read More
                  </Typography>
                )}

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <ThumbUpIcon fontSize="small" />
                  <Typography variant="caption" color="textSecondary">
                    {review.helpful_count || 0} found this helpful
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieReviews;

