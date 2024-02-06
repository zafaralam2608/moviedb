import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Link, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'

const ActionBar: React.FC = () => {
  return (
    <Grid container>
      <Link href="#" color="inherit">Cast & crew</Link>
      <Link href="#" color="inherit">User reviews</Link>
      <Link href="#" color="inherit">Trivia</Link>
      <Link href="#" color="inherit">FAQ</Link>
      <Search sx={{ mr: 1 }} />
      <Typography component="a" variant="h6" href="#" noWrap sx={{ textDecoration: 'none' }}>
        All topics
      </Typography>
    </Grid>
  )
}

export default ActionBar
