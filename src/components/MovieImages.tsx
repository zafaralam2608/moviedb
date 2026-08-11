import {
  Box,
  Card,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  Modal,
  Typography,
} from "@mui/material";
import { IMAGE_URL_ORIGINAL } from "api";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

interface MovieImage {
  id: string;
  file_path: string;
  width: number;
  height: number;
}

interface MovieImagesProps {
  images: MovieImage[];
  title: string;
}

const MovieImages: React.FC<MovieImagesProps> = ({ images, title }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleOpen = (imagePath: string) => {
    setSelectedImage(imagePath);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Photos ({images.length})
      </Typography>

      <ImageList cols={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap={8}>
        {images.map((image) => (
          <ImageListItem key={image.id}>
            <Card
              onClick={() => handleOpen(image.file_path)}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={IMAGE_URL_ORIGINAL + image.file_path}
                alt={`${title} image`}
                sx={{ aspectRatio: "16 / 9", objectFit: "cover" }}
              />
            </Card>
          </ImageListItem>
        ))}
      </ImageList>

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
            bgcolor: "rgba(0, 0, 0, 0.9)",
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
          <CardMedia
            component="img"
            image={IMAGE_URL_ORIGINAL + selectedImage}
            alt="Full size"
            sx={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default MovieImages;

