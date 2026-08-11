import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

interface Company {
  id: number;
  name: string;
  logo_path?: string;
  type: string;
  country?: string;
  website?: string;
}

// Mock data - replace with actual API call
const mockCompanies = {
  production: [
    {
      id: 923,
      name: "Warner Bros.",
      logo_path: "/currently_you_are_able_to_read_this.jpg",
      type: "Production",
      country: "USA",
      website: "www.warnerbros.com",
    },
    {
      id: 119,
      name: "Legendary Pictures",
      logo_path: "/currently_you_are_able_to_read_this.jpg",
      type: "Production",
      country: "USA",
      website: "www.legendarypictures.com",
    },
  ],
  distribution: [
    {
      id: 923,
      name: "Warner Bros.",
      logo_path: "/currently_you_are_able_to_read_this.jpg",
      type: "Distribution",
      country: "USA",
      website: "www.warnerbros.com",
    },
  ],
  special_effects: [
    {
      id: 1,
      name: "Double Negative",
      logo_path: "/currently_you_are_able_to_read_this.jpg",
      type: "VFX",
      website: "www.dneg.com",
    },
    {
      id: 2,
      name: "Framestore",
      logo_path: "/currently_you_are_able_to_read_this.jpg",
      type: "VFX",
      website: "www.framestore.com",
    },
  ],
};

const Companies: React.FC = () => {
  const { id } = useParams();

  const CompanyCard: React.FC<{ company: Company }> = ({ company }) => (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {company.name}
        </Typography>
        <Stack spacing={1} sx={{ mb: 2 }}>
          <Chip label={company.type} size="small" />
          {company.country && <Typography variant="body2">Country: {company.country}</Typography>}
        </Stack>
        {company.website && (
          <Link
            href={`https://${company.website}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="body2"
          >
            {company.website}
          </Link>
        )}
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Production & Release Companies
        </Typography>

        {/* Production Companies */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Production Companies
          </Typography>
          <Grid container spacing={2}>
            {mockCompanies.production.map((company) => (
              <Grid item xs={12} sm={6} md={4} key={company.id}>
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Distribution Companies */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Distribution Companies
          </Typography>
          <Grid container spacing={2}>
            {mockCompanies.distribution.map((company) => (
              <Grid item xs={12} sm={6} md={4} key={company.id}>
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Special Effects */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Special Effects & Services
          </Typography>
          <Grid container spacing={2}>
            {mockCompanies.special_effects.map((company) => (
              <Grid item xs={12} sm={6} md={4} key={company.id}>
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Companies;

