import { Box } from "@mui/material";
import TrendingPeople from "components/TrendingPeople";
import { popular } from "constants/data";
import React from "react";

const Dashboard = () => {
  return (
    <Box sx={{ py: 4 }}>
      <TrendingPeople data={popular.results} />
    </Box>
  );
};

export default Dashboard;
