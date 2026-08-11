import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface RatingData {
  rating: number;
  count: number;
  percentage: number;
}

// Mock data - replace with actual API call
const mockRatingData: RatingData[] = [
  { rating: 10, count: 45230, percentage: 18 },
  { rating: 9, count: 38920, percentage: 15 },
  { rating: 8, count: 52340, percentage: 21 },
  { rating: 7, count: 48230, percentage: 19 },
  { rating: 6, count: 32450, percentage: 13 },
  { rating: 5, count: 15340, percentage: 6 },
  { rating: 4, count: 8230, percentage: 3 },
  { rating: 3, count: 4560, percentage: 2 },
  { rating: 2, count: 2340, percentage: 1 },
  { rating: 1, count: 3450, percentage: 2 },
];

const mockDemographics = [
  { name: "Males", value: 58, color: "#8884d8" },
  { name: "Females", value: 42, color: "#82ca9d" },
];

const Ratings: React.FC = () => {
  const { id } = useParams();
  const averageRating = 8.8;
  const totalRatings = 250680;

  const chartData = mockRatingData.map((item) => ({
    rating: item.rating,
    count: item.count,
  }));

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Ratings & Reviews
        </Typography>

        {/* Summary Section */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: "bold" }}>
                  {averageRating.toFixed(1)}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  Average Rating
                </Typography>
                <Stack direction="row" spacing={0.5} sx={{ mt: 1, justifyContent: "center" }}>
                  {[...Array(10)].map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 4,
                        height: 4,
                        bgcolor: i < 9 ? "primary.main" : "divider",
                        borderRadius: "50%",
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" color="textSecondary">
                  Total Ratings
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
                  {(totalRatings / 1000).toFixed(0)}K
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" color="textSecondary">
                  Weighted Average
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
                  {(averageRating * 10).toFixed(0)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Button variant="contained" fullWidth>
                  Rate This
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Distribution Chart */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
            Rating Distribution
          </Typography>
          <Card>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="rating" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Box>

        {/* Rating Breakdown */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
            Rating Breakdown
          </Typography>
          <Stack spacing={2}>
            {mockRatingData.map((item) => (
              <Box key={item.rating}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2">{item.rating} Stars</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.count.toLocaleString()} ({item.percentage}%)
                  </Typography>
                </Box>
                <LinearProgress variant="determinate" value={item.percentage} />
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Demographics */}
        <Box>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
            Gender Demographics
          </Typography>
          <Card>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mockDemographics}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, value }) => `${name} ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mockDemographics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Ratings;

