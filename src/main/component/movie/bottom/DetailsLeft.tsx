import React from 'react'
import {
  AccordionSummary, Avatar, CardActionArea, CardHeader, Divider, Typography
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { KeyboardArrowRightOutlined } from '@mui/icons-material'
import { useAppSelector } from '../../../../hook'
import { IMAGE_URL_W185 } from '../../../../api'
import CardScroll from '../../../common/CardScroll'

const DetailsLeft: React.FC = () => {
  const { data } = useAppSelector(state => state.movie)
  const { credits } = data
  const { cast, crew } = credits

  const directorNames = crew.filter((person) => person.known_for_department === 'Directing')
    .filter((person) => person.department === 'Directing')
    .filter((director) => director.job === 'Director')
    .slice(0, 3)
    .map((director) => director.name)
    .join('  -  ')

  const writerNames = crew.filter((person) => person.known_for_department === 'Writing')
    .filter((writer) => writer.department === 'Writing')
    .slice(0, 3)
    .map((writer) => writer.name)
    .join('  -  ')

  return (
    <Grid container sx={{ width: '860px', justifyContent: 'left' }}>
      <Grid container sx={{ marginBottom: '8px', padding: '24px 0' }}>
        <AccordionSummary
          sx={{ width: '100%', margin: '0 24px', border: '1px' }}
          expandIcon={<KeyboardArrowRightOutlined />}
        >
          Awards 0 nominations
        </AccordionSummary>
      </Grid>
      <Grid container sx={{ marginBottom: '8px', padding: '24px 0' }}>
        <CardActionArea sx={{ textAlign: 'left' }} href="#/">
          <Typography paragraph variant="h4">Videos</Typography>
        </CardActionArea>
        <Grid sx={{ height: '282px' }}>TODO Vid</Grid>
      </Grid>
      <Grid container sx={{ width: '100%', marginBottom: '8px', padding: '24px 0' }}>
        <CardActionArea sx={{ textAlign: 'left', padding: '0 24px', marginBottom: '24px' }} href="#/">
          <Typography paragraph variant="h4">Photos</Typography>
        </CardActionArea>
        <CardScroll />
      </Grid>
      <Grid container sx={{ marginBottom: '8px', padding: '24px 0' }}>
        <CardActionArea sx={{ textAlign: 'left' }} href="#/">
          <Typography paragraph variant="h4">Top cast</Typography>
        </CardActionArea>
      </Grid>
      <Grid container direction="column" sx={{ marginBottom: '8px', padding: '24px 0' }}>
        <Grid container>
          {
            cast.slice(0, 18).map((actor) => (
              <CardHeader
                key={actor.id}
                avatar={<Avatar src={IMAGE_URL_W185 + actor.profile_path}/>}
                title={actor.name}
                subheader={actor.character}
              />
            ))
          }
        </Grid>
        <Divider />
        <Typography variant="body1" sx={{ margin: '10px' }}><b>Directors</b>    {directorNames}</Typography>
        <Divider />
        <Typography variant="body1" sx={{ margin: '10px' }}><b>Writers</b>    {writerNames}</Typography>
        <Divider />
        <Typography variant="body1" sx={{ margin: '10px' }}><b>All cast & crew</b></Typography>
        <Divider />
      </Grid>
    </Grid>
  )
}

export default DetailsLeft
