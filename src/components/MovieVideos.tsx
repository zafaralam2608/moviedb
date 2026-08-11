import {
  Box,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

interface MovieVideo {
  id: string;
  key: string;
  name: string;
  type: string;
  site: string;
}

interface MovieVideosProps {
  videos: MovieVideo[];
  title: string;
}

const MovieVideos: React.FC<MovieVideosProps> = ({ videos, title }) => {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<MovieVideo | null>(null);

  const handleOpen = (video: MovieVideo) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  const getVideoThumbnail = (videoKey: string) => {
    if (selectedVideo?.site === "YouTube") {
      return `https://img.youtube.com/vi/${videoKey}/hqdefault.jpg`;
    }
    return "";
  };

  const getVideoEmbedUrl = (video: MovieVideo) => {
    if (video.site === "YouTube") {
      return `https://www.youtube.com/embed/${video.key}`;
    }
    return "";
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Videos ({videos.length})
      </Typography>

      <Grid container spacing={2}>
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
            <Card
              onClick={() => handleOpen(video)}
              sx={{
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={getVideoThumbnail(video.key)}
                alt={video.name}
                sx={{ aspectRatio: "16 / 9", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(0, 0, 0, 0.3)",
                }}
              >
                <PlayCircleOutlineIcon
                  sx={{ fontSize: 60, color: "white" }}
                />
              </Box>
              <Box sx={{ p: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {video.name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {video.type}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0, 0, 0, 0.95)",
            zIndex: 1300,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedVideo && (
            <Box sx={{ width: "90%", maxWidth: "900px" }}>
              <Typography
                variant="body1"
                sx={{ color: "white", mb: 2, textAlign: "center" }}
              >
                {selectedVideo.name}
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={getVideoEmbedUrl(selectedVideo)}
                  title={selectedVideo.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default MovieVideos;

