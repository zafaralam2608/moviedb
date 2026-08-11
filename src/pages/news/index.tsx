import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface News {
  id: number;
  title: string;
  image?: string;
  excerpt: string;
  category: string;
  published_date: string;
  author: string;
  source: string;
}

// Mock data - replace with actual API call
const mockNews: News[] = [
  {
    id: 1,
    title: "New Movie Breaks Box Office Records",
    image: "/news1.jpg",
    excerpt:
      "The latest blockbuster has shattered all expectations, becoming the highest-grossing film of the year...",
    category: "box-office",
    published_date: "2024-01-15",
    author: "John Doe",
    source: "MovieDB News",
  },
  {
    id: 2,
    title: "Award Season Predictions: Who Will Win?",
    image: "/news2.jpg",
    excerpt:
      "As award season approaches, industry experts share their predictions for the major categories...",
    category: "awards",
    published_date: "2024-01-14",
    author: "Jane Smith",
    source: "Entertainment Weekly",
  },
  {
    id: 3,
    title: "Behind the Scenes: How This Action Sequence Was Created",
    image: "/news3.jpg",
    excerpt:
      "Discover the incredible techniques and technologies used to create the most memorable scene in the film...",
    category: "behind-the-scenes",
    published_date: "2024-01-13",
    author: "Mike Johnson",
    source: "Hollywood Daily",
  },
  {
    id: 4,
    title: "Interview: Director Discusses New Film",
    image: "/news4.jpg",
    excerpt:
      "We sit down with the director to talk about their creative vision and the challenges of filmmaking...",
    category: "interviews",
    published_date: "2024-01-12",
    author: "Sarah Wilson",
    source: "Cinephile Magazine",
  },
];

const News: React.FC = () => {
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const categories = [
    { id: "all", label: "All News" },
    { id: "box-office", label: "Box Office" },
    { id: "awards", label: "Awards" },
    { id: "interviews", label: "Interviews" },
    { id: "behind-the-scenes", label: "Behind the Scenes" },
  ];

  const filteredNews =
    category === "all" ? mockNews : mockNews.filter((item) => item.category === category);

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Entertainment News
        </Typography>

        <Tabs
          value={category}
          onChange={(e, newValue) => {
            setCategory(newValue);
            setPage(1);
          }}
          sx={{ mb: 3 }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories.map((cat) => (
            <Tab
              key={cat.id}
              label={cat.label}
              value={cat.id}
            />
          ))}
        </Tabs>

        <Grid container spacing={3}>
          {filteredNews.map((newsItem) => (
            <Grid item xs={12} md={6} lg={4} key={newsItem.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                {newsItem.image && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={newsItem.image}
                    alt={newsItem.title}
                  />
                )}
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        px: 1,
                        py: 0.5,
                        borderRadius: 0.5,
                      }}
                    >
                      {newsItem.category
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      cursor: "pointer",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {newsItem.title}
                  </Typography>

                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2, flexGrow: 1 }}>
                    {newsItem.excerpt}
                  </Typography>

                  <Stack spacing={1}>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ fontSize: "0.75rem", color: "textSecondary" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <AccessTimeIcon sx={{ fontSize: 14 }} />
                        <Typography variant="caption">
                          {new Date(newsItem.published_date).toLocaleDateString()}
                        </Typography>
                      </Box>
                      <Typography variant="caption">•</Typography>
                      <Typography variant="caption">By {newsItem.author}</Typography>
                    </Stack>
                    <Button size="small" href={`#/news/${newsItem.id}`}>
                      Read More
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredNews.length > 0 && (
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

export default News;

