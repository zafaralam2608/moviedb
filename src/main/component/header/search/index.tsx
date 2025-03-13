import {Autocomplete, Box, Link, TextField, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {data} from '../../../constant/data'
import {type SearchMultiResults} from '../../../interfaces/search'

const Search: React.FC = () => {
  const [results, setResults] = useState<SearchMultiResults[]>([])

  useEffect(() => {
    setResults(data.results)
  }, [])

  return (
    <Autocomplete
      forcePopupIcon={false}
      disableClearable
      sx={{width: 582}}
      options={results}
      renderInput={(params) => <TextField {...params} />}
      getOptionLabel={(option) => option.original_title}
      renderOption={(props, option) =>
        <Box>
          <Link href={`/title/${option.id}`}>
            <Typography>{option.original_title}</Typography>
          </Link>
        </Box>
      }
    />
  )
}

export default Search
