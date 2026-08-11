import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { IMAGE_URL_ORIGINAL, IMAGE_URL_W500 } from "api";
import React from "react";
import { useParams } from "react-router-dom";

interface PersonDetails {
  id: number;
  name: string;
  profile_path: string;
  biography: string;
  birthday?: string;
  deathday?: string;
  place_of_birth?: string;
  known_for_department: string;
  popularity: number;
  credits: Array<{
    id: number;
    title: string;
    character: string;
    release_date: string;
    poster_path: string;
  }>;
}

// Mock data - replace with actual API call
const mockPerson: PersonDetails = {
  id: 1,
  name: "Leonardo DiCaprio",
  profile_path: "/8Xx8J1wMhT9dCLMJ1x3Mz2uoutz.jpg",
  biography:
    "Leonardo Wilhelm DiCaprio is an American actor and film producer. His early film roles included television appearances such as the sitcom Parenthood from 1990–1991. DiCaprio's breakout film role was Arnie Grape in What's Eating Gilbert Grape in 1993, which earned him a Golden Globe nomination.",
  birthday: "1974-11-11",
  place_of_birth: "Los Angeles, California, USA",
  known_for_department: "Acting",
  popularity: 98.5,
  credits: [
    {
      id: 27205,
      title: "Inception",
      character: "Cobb",
      release_date: "2010-07-16",
      poster_path: "/9gk7adHYeDMPS6QW4UZSYcOQCXw.jpg",
    },
    {
      id: 24428,
      title: "The Wolf of Wall Street",
      character: "Jordan Belfort",
      release_date: "2013-12-25",
      poster_path: "/cWDW0MtyOkiHrjHDJNbIeJRbSG.jpg",
    },
    {
      id: 271110,
      title: "The Great Gatsby",
      character: "Jay Gatsby",
      release_date: "2013-05-10",
      poster_path: "/xu9zaAevzQ4aucK7PREPlz3qiy6.jpg",
    },
  ],
};

const PersonDetails: React.FC = () => {
  const { id } = useParams();
  const person = mockPerson; // Replace with actual data fetching

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto", px: 2 }}>
        {/* Header Section */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                image={IMAGE_URL_ORIGINAL + person.profile_path}
                alt={person.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              {person.name}
            </Typography>

            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Known For
                </Typography>
                <Chip label={person.known_for_department} />
              </Box>

              {person.birthday && (
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Date of Birth
                  </Typography>
                  <Typography variant="body2">
                    {new Date(person.birthday).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Typography>
                </Box>
              )}

              {person.place_of_birth && (
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Place of Birth
                  </Typography>
                  <Typography variant="body2">{person.place_of_birth}</Typography>
                </Box>
              )}

              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Popularity
                </Typography>
                <Typography variant="body2">{person.popularity.toFixed(1)}</Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Biography
                </Typography>
                <Typography variant="body2">{person.biography}</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Filmography Section */}
        <Box>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Filmography
          </Typography>
          <Grid container spacing={2}>
            {person.credits.map((credit) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={credit.id}>
                <Card>
                  <CardActionArea href={`#/movie/${credit.id}`}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={IMAGE_URL_W500 + credit.poster_path}
                      alt={credit.title}
                    />
                  </CardActionArea>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      {credit.title}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {credit.character}
                    </Typography>
                    <Typography variant="caption" display="block" color="textSecondary">
                      {new Date(credit.release_date).getFullYear()}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonDetails;

