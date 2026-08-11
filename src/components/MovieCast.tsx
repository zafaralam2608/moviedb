import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { IMAGE_URL_W500 } from "api";
import React from "react";

interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path?: string;
  order: number;
}

interface MovieCastProps {
  cast: CastMember[];
}

const MovieCast: React.FC<MovieCastProps> = ({ cast }) => {
  const topCast = cast.slice(0, 12);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Cast ({cast.length})
      </Typography>

      <Grid container spacing={2}>
        {topCast.map((member) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={member.id}>
            <Card
              sx={{
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardActionArea href={`#/person/${member.id}`}>
                {member.profile_path ? (
                  <CardMedia
                    component="img"
                    image={IMAGE_URL_W500 + member.profile_path}
                    alt={member.name}
                    sx={{ aspectRatio: "2/3", objectFit: "cover" }}
                  />
                ) : (
                  <Box
                    sx={{
                      aspectRatio: "2/3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "background.default",
                    }}
                  >
                    <Avatar sx={{ width: 60, height: 60, bgcolor: "primary.main" }}>
                      {getInitials(member.name)}
                    </Avatar>
                  </Box>
                )}
              </CardActionArea>
              <CardContent sx={{ p: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {member.name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {member.character}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {cast.length > 12 && (
        <Box sx={{ mt: 3 }}>
          <Typography
            component="a"
            href="#/cast"
            sx={{
              color: "primary.main",
              cursor: "pointer",
              textDecoration: "none",
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            View All {cast.length} Cast Members
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default MovieCast;

