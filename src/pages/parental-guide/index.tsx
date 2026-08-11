import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WarningIcon from "@mui/icons-material/Warning";
import React from "react";
import { useParams } from "react-router-dom";

interface ParentalGuideItem {
  category: string;
  severity: "None" | "Mild" | "Moderate" | "Severe";
  description: string;
  details: string[];
}

// Mock data - replace with actual API call
const mockParentalGuide: ParentalGuideItem[] = [
  {
    category: "Violence & Gore",
    severity: "Severe",
    description: "Contains intense violence and some gore",
    details: [
      "Several fight scenes with blood",
      "Gun violence and shootouts",
      "Explosions with visible injuries",
      "Intense action sequences",
    ],
  },
  {
    category: "Profanity",
    severity: "Moderate",
    description: "Contains frequent use of strong language",
    details: [
      "Multiple uses of f-word and other strong profanities",
      "Mild name-calling",
      "Some religious exclamations",
    ],
  },
  {
    category: "Alcohol/Drug Use",
    severity: "Mild",
    description: "Contains some drinking and implied drug use",
    details: [
      "Characters shown drinking alcohol",
      "Implied recreational drug use in one scene",
      "No graphic drug use depicted",
    ],
  },
  {
    category: "Sexual Content",
    severity: "Mild",
    description: "Contains some sexual content",
    details: [
      "One kiss scene",
      "Partial nudity in one scene",
      "Suggestive dialogue",
      "No explicit sexual scenes",
    ],
  },
  {
    category: "Frightening Scenes",
    severity: "Moderate",
    description: "Contains some potentially frightening scenes",
    details: [
      "Intense dream sequences",
      "Disorienting visuals and sound design",
      "Suspenseful moments",
      "Some disturbing imagery",
    ],
  },
];

const severityColors: Record<string, "error" | "warning" | "info" | "success"> = {
  None: "success",
  Mild: "info",
  Moderate: "warning",
  Severe: "error",
};

const severityValues: Record<string, number> = {
  None: 0,
  Mild: 33,
  Moderate: 66,
  Severe: 100,
};

const ParentalGuide: React.FC = () => {
  const { id } = useParams();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Alert severity="warning" icon={<WarningIcon />} sx={{ mb: 4 }}>
          <AlertTitle>Parental Guide</AlertTitle>
          This guide contains spoilers and may reveal plot points of the movie. Parents are
          advised to review this information to help make informed decisions about whether the
          content is appropriate for their children.
        </Alert>

        <Typography variant="h4" sx={{ mb: 4 }}>
          Parental Guide for This Movie
        </Typography>

        <Grid container spacing={2} sx={{ mb: 4 }}>
          {mockParentalGuide.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.category}>
              <Card>
                <CardContent>
                  <Box sx={{ mb: 1 }}>
                    <Chip
                      label={item.severity}
                      color={severityColors[item.severity]}
                      size="small"
                    />
                  </Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    {item.category}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={severityValues[item.severity]}
                    sx={{ my: 1 }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
          Detailed Breakdown
        </Typography>

        <Stack spacing={2}>
          {mockParentalGuide.map((item) => (
            <Accordion
              key={item.category}
              expanded={expanded === item.category}
              onChange={handleChange(item.category)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Chip
                    label={item.severity}
                    color={severityColors[item.severity]}
                    size="small"
                  />
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {item.category}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                    Details:
                  </Typography>
                  <Stack spacing={1}>
                    {item.details.map((detail, index) => (
                      <Typography key={index} variant="body2" color="textSecondary">
                        • {detail}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>

        {/* Age Recommendations */}
        <Card sx={{ mt: 6 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Age Recommendations
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Alert severity="error">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Not for Children
                  </Typography>
                  <Typography variant="caption">Under 13</Typography>
                </Alert>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Alert severity="warning">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Parental Guidance
                  </Typography>
                  <Typography variant="caption">13+</Typography>
                </Alert>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Alert severity="info">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Teens & Up
                  </Typography>
                  <Typography variant="caption">16+</Typography>
                </Alert>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Alert severity="success">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    General Audience
                  </Typography>
                  <Typography variant="caption">All Ages</Typography>
                </Alert>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ParentalGuide;

