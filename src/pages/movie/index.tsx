import {
  ConfirmationNumber,
  KeyboardArrowDownOutlined,
  PermMedia,
  Subscriptions,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  ButtonGroup,
  CardActionArea,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { IMAGE_URL_ORIGINAL, IMAGE_URL_W500 } from "api";
import { Crew } from "models/credit";
import { MovieDetailsFull } from "models/movie";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetchMovieQuery } from "services/movie";

const Movie: React.FC = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error("Invalid Movie ID");
  }

  const { data = MovieDetailsFull } = useFetchMovieQuery(id, { skip: !id });
  const { credits, images, videos } = data;
  const movieVideosCount = videos.results?.length || 0;
  const { backdrops, logos, posters } = images;
  const movieImagesCount = backdrops.length + logos.length + posters.length;
  const videosTxt = `${movieVideosCount < 100 ? movieVideosCount : "99+"}  VIDEOS`;
  const imagesTxt = `${movieImagesCount < 100 ? movieImagesCount : "99+"}  PHOTOS`;

  const actors = credits.cast
    .filter((person) => person.known_for_department === "Acting")
    .map((actor) => actor.name)
    .slice(0, 3);
  const starsTxt = `Stars:    ${actors.join("  -  ")}`;

  const directors =
    credits.crew
      .filter((person) => person.department === "Directing")
      .filter((director) => director.job === "Director") || [];
  const directing = directors.length ? directors[0] : Crew;
  const directorTxt = `Director:  ${directing.name}`;

  const writing = credits.crew.filter(
    (person) => person.department === "Writing",
  );
  const writers = writing
    .filter((writer) => writer.job === "Writer")
    .map((writer) => writer.name)
    .slice(0, 3);
  const writersTxt = `Writers:    ${writers.join("  -  ")}`;

  return (
    <Grid container>
      <Grid container justifyContent="center">
        <Grid container direction="column" width="1280px">
          <Toolbar>TODO ActionBar</Toolbar>
          <Toolbar>{data.original_title}</Toolbar>
          <Grid container>
            <Grid container sx={{ margin: "0 24px 8px 24px" }}>
              <Grid>
                <CardMedia
                  component="img"
                  image={IMAGE_URL_W500 + data.poster_path}
                  alt="poster"
                  width="284.44px"
                  height="420.96px"
                />
              </Grid>
              <Grid sx={{ margin: "0 4px" }}>
                <CardMedia
                  component="img"
                  image={IMAGE_URL_ORIGINAL + data.backdrop_path}
                  alt="video"
                  width="746.44px"
                  height="419.87px"
                />
              </Grid>
              <ButtonGroup
                orientation="vertical"
                sx={{
                  width: "193.13px",
                  height: "420.96px",
                  justifyContent: "space-evenly",
                }}
              >
                <CardActionArea sx={{ textAlign: "center" }} href="#/">
                  <Subscriptions sx={{ fontSize: 40 }} />
                  <Typography paragraph variant="caption">
                    {videosTxt}
                  </Typography>
                </CardActionArea>
                <CardActionArea sx={{ textAlign: "center" }} href="#/">
                  <PermMedia sx={{ fontSize: 40 }} />
                  <Typography paragraph variant="caption">
                    {imagesTxt}
                  </Typography>
                </CardActionArea>
              </ButtonGroup>
            </Grid>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                padding: "0 24px 8px 24px",
              }}
            >
              <Grid
                container
                direction="column"
                sx={{ width: "727px", justifyContent: "left" }}
              >
                <Grid container direction="column" sx={{ padding: "16px 0" }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ paddingBottom: "8px" }}
                  >
                    {data.genres.map((item) => (
                      <Chip key={`chip-${item.name}`} label={item.name} />
                    ))}
                  </Stack>
                  <Typography paragraph variant="body1">
                    {data.overview}
                  </Typography>
                </Grid>
                <Grid container direction="column">
                  <Divider />
                  <Typography variant="body1" sx={{ margin: "10px" }}>
                    <b>{directorTxt}</b>
                  </Typography>
                  <Divider />
                  <Typography variant="body1" sx={{ margin: "10px" }}>
                    <b>{writersTxt}</b>
                  </Typography>
                  <Divider />
                  <Typography variant="body1" sx={{ margin: "10px" }}>
                    <b>{starsTxt}</b>
                  </Typography>
                  <Divider />
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                sx={{
                  width: "425px",
                  justifyContent: "left",
                  paddingTop: "16px",
                }}
              >
                <Grid container direction="column">
                  <Accordion
                    sx={{ marginBottom: "8px", padding: "0 16px 0 12px" }}
                  >
                    <AccordionSummary expandIcon={<ConfirmationNumber />}>
                      See Showtimes
                    </AccordionSummary>
                  </Accordion>
                  <Stack direction="row">
                    <Accordion
                      sx={{
                        width: "100%",
                        marginRight: "2px",
                        padding: "0 16px 0 12px",
                      }}
                    >
                      <AccordionSummary>+ Add to Watchlist</AccordionSummary>
                    </Accordion>
                    <IconButton
                      sx={{ width: "48px", height: "48px", padding: "1px 6px" }}
                    >
                      <KeyboardArrowDownOutlined />
                    </IconButton>
                  </Stack>
                </Grid>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ marginTop: "12px", height: "36px" }}
                >
                  <a
                    href="#/"
                    style={{ textDecoration: "none", marginRight: "16px" }}
                  >
                    User reviews
                  </a>
                  <a
                    href="#/"
                    style={{ textDecoration: "none", marginRight: "16px" }}
                  >
                    Critic reviews
                  </a>
                  <a href="#/" style={{ textDecoration: "none" }}>
                    Metascore
                  </a>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Movie;
