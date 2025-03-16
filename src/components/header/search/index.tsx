import { Autocomplete, Box, Link, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchMovieQuery } from "services/search";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [q, setQ] = useState<string>("");
  const { data: results = [], isLoading } = useSearchMovieQuery(q, {
    skip: q.length < 3,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setQ(query);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <Autocomplete
      forcePopupIcon={false}
      disableClearable
      clearOnEscape
      sx={{ width: 582 }}
      loading={isLoading}
      options={results}
      onInputChange={(e, newValue) => {
        setQuery(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
      getOptionLabel={(option) => option.original_title}
      renderOption={(props, option) => (
        <Box>
          <Link href={`/title/${option.id}`}>
            <Typography>{option.original_title}</Typography>
          </Link>
        </Box>
      )}
    />
  );
};

export default Search;
