import React from 'react'
import {
  Accordion, AccordionSummary, Grid, IconButton, Stack
} from '@mui/material'
import { ConfirmationNumber, KeyboardArrowDownOutlined } from '@mui/icons-material'

const SummaryRight: React.FC = () => {
  return (
    <Grid container direction="column" sx={{ width: '425px', justifyContent: 'left', paddingTop: '16px' }}>
      <Grid container direction="column">
        <Accordion sx={{ marginBottom: '8px', padding: '0 16px 0 12px' }}>
          <AccordionSummary expandIcon={<ConfirmationNumber />}>See Showtimes</AccordionSummary>
        </Accordion>
        <Stack direction="row">
          <Accordion sx={{ width: '100%', marginRight: '2px', padding: '0 16px 0 12px' }}>
            <AccordionSummary>+ Add to Watchlist</AccordionSummary>
          </Accordion>
          <IconButton sx={{ width: '48px', height: '48px', padding: '1px 6px' }}>
            <KeyboardArrowDownOutlined />
          </IconButton>
        </Stack>
      </Grid>
      <Stack direction="row" spacing={1} sx={{ marginTop: '12px', height: '36px' }}>
        <a href="#/" style={{ textDecoration: 'none', marginRight: '16px' }}>User reviews</a>
        <a href="#/" style={{ textDecoration: 'none', marginRight: '16px' }}>Critic reviews</a>
        <a href="#/" style={{ textDecoration: 'none' }}>Metascore</a>
      </Stack>
    </Grid>
  )
}

export default SummaryRight
