import { Autocomplete, TextField } from "@mui/material";
import { SearchCard } from "components/header/search/SearchCard";
import React, { useEffect, useState } from "react";
import { useSearchMovieQuery } from "services/search";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [q, setQ] = useState<string>("");
  const { data = [], isLoading } = useSearchMovieQuery(q, {
    skip: q.length < 3,
    refetchOnMountOrArgChange: true,
  });

  const results = [...data].sort((a, b) => b.popularity - a.popularity);

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
      loadingText="TODO"
      noOptionsText={!isLoading && query && `See all results for "${query}"`}
      options={results}
      onInputChange={(_, newValue) => {
        setQuery(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
      getOptionLabel={(option) => option.original_title}
      renderOption={(_, option) => (
        <SearchCard option={option} key={option.id} />
      )}
    />
  );
};

export default Search;
