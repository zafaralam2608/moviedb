import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import { IMAGE_URL_W500 } from "api";
import React from "react";
import { useParams } from "react-router-dom";

interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path?: string;
  billing_order: number;
}

interface CrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path?: string;
}

// Mock data - replace with actual API call
const mockCast: CastMember[] = [
  {
    id: 1,
    name: "Leonardo DiCaprio",
    character: "Cobb",
    profile_path: "/8Xx8J1wMhT9dCLMJ1x3Mz2uoutz.jpg",
    billing_order: 1,
  },
  {
    id: 2,
    name: "Joseph Gordon-Levitt",
    character: "Arthur",
    profile_path: "/1agL5WdYxgOaE1yHgCNsQWxr8pJ.jpg",
    billing_order: 2,
  },
  {
    id: 3,
    name: "Ellen Page",
    character: "Ariadne",
    profile_path: "/8UlWHLMpgZm9bx6UR8tacaPEsEb.jpg",
    billing_order: 3,
  },
  {
    id: 4,
    name: "Tom Hardy",
    character: "Eames",
    profile_path: "/6UlCKqHqJpFpqRzK0aNlJhp5Z6k.jpg",
    billing_order: 4,
  },
];

const mockCrew: CrewMember[] = [
  {
    id: 1,
    name: "Christopher Nolan",
    job: "Director, Screenwriter, Producer",
    department: "Directing",
    profile_path: "/4B8zGgPfY54z1E0ZM8z3YuqhE1n.jpg",
  },
  {
    id: 2,
    name: "Hans Zimmer",
    job: "Original Music Composer",
    department: "Sound",
    profile_path: "/kJJm8X1KsC3bRcq1OL1R2rYqUhB.jpg",
  },
  {
    id: 3,
    name: "Hoyte van Hoytema",
    job: "Director of Photography",
    department: "Camera",
    profile_path: "/5R5nKEuNLWk5RJPq5V6P1QUhGnD.jpg",
  },
];

const FullCast: React.FC = () => {
  const { id } = useParams();

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Cast & Crew
        </Typography>

        {/* Cast Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
            Cast ({mockCast.length})
          </Typography>
          <TableContainer component={Card}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "background.default" }}>
                  <TableCell>Actor</TableCell>
                  <TableCell>Character</TableCell>
                  <TableCell align="center">Billing Order</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockCast.map((actor) => (
                  <TableRow key={actor.id}>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        {actor.profile_path ? (
                          <Avatar
                            alt={actor.name}
                            src={`${IMAGE_URL_W500}${actor.profile_path}`}
                          />
                        ) : (
                          <Avatar sx={{ bgcolor: "primary.main" }}>
                            {getInitials(actor.name)}
                          </Avatar>
                        )}
                        <Typography
                          component="a"
                          href={`#/person/${actor.id}`}
                          sx={{
                            color: "primary.main",
                            textDecoration: "none",
                            fontWeight: "bold",
                            cursor: "pointer",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          {actor.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{actor.character}</TableCell>
                    <TableCell align="center">{actor.billing_order}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Crew Section */}
        <Box>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
            Crew ({mockCrew.length})
          </Typography>
          <Grid container spacing={2}>
            {mockCrew.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.id}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                      {member.profile_path ? (
                        <Avatar
                          alt={member.name}
                          src={`${IMAGE_URL_W500}${member.profile_path}`}
                          sx={{ width: 80, height: 80 }}
                        />
                      ) : (
                        <Avatar sx={{ width: 80, height: 80, bgcolor: "primary.main" }}>
                          {getInitials(member.name)}
                        </Avatar>
                      )}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          component="a"
                          href={`#/person/${member.id}`}
                          sx={{
                            color: "primary.main",
                            textDecoration: "none",
                            fontWeight: "bold",
                            cursor: "pointer",
                            display: "block",
                            mb: 1,
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Chip
                          label={member.department}
                          size="small"
                          sx={{ mb: 1, display: "block" }}
                        />
                      </Box>
                    </Box>
                    <Typography variant="body2" color="textSecondary">
                      {member.job}
                    </Typography>
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

export default FullCast;

