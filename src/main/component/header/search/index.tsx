import {Autocomplete, TextField} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {data} from '../../../constant/data'
import {type SearchMultiResults} from '../../../interfaces/search'
import {useNavigate} from "react-router-dom";

const Search: React.FC = () => {
  // const navigate = useNavigate();
  const [results, setResults] = useState<SearchMultiResults[]>([])

  useEffect(() => {
    setResults(data.results)
  }, [])

  return (
    <Autocomplete
      // freeSolo
      forcePopupIcon={false}
      disableClearable
      // isOptionEqualToValue={(option, value) => }
      sx={{width: 582}}
      onChange={(event , value) => {
        // navigate(`/title/${value.id}`)
        console.log(`/title/${value.id}`)
        // navigate(`/search/${value.id}`)
      }}
      options={results}
      renderInput={(params) => <TextField {...params} />}
      getOptionLabel={(option) => option.original_title}
      // renderOption={(props, option) => {}
    />
  )
}

export default Search
