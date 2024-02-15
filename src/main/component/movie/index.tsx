import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { retrieveMovieDetails } from '../../slice/movie'
import Bottom from './bottom'
import Top from './top'
import { useAppDispatch } from '../../../hook'

const Movie: React.FC = () => {
  const { id } = useParams()

  const dispatch = useAppDispatch()

  useEffect(() => {
    void dispatch(retrieveMovieDetails(Number(id)))
  }, [dispatch, id])

  return (
    <Grid container>
      <Top />
      <Bottom />
    </Grid>
  )
}

export default Movie
