import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { data } from '../../../constant/data'
import { type SearchMultiResults } from '../../../interfaces/search'

const Search: React.FC = () => {
  const [results, setResults] = useState<SearchMultiResults[]>([])

  useEffect(() => { setResults(data.results) }, [])

  return (
    <Autocomplete
      sx={{ width: 582 }}
      options={results}
      renderInput={(params) => <TextField {...params} />}
      getOptionLabel={(option) => option.title}
    />
  )
}

export default Search
