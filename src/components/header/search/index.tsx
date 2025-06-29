import { Autocomplete, TextField } from "@mui/material";
import { SearchCard } from "components/header/search/SearchCard";
import React, { useEffect, useState } from "react";
import { useSearchMovieQuery } from "services/search";

const Search: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [q, setQ] = useState<string>("");
  const { data = [], isLoading } = useSearchMovieQuery(q, {
    skip: q.length < 3,
    refetchOnMountOrArgChange: true,
  });

  const results =
    q.length < 3 ? [] : [...data].sort((a, b) => b.popularity - a.popularity);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setQ(query);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <Autocomplete
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      forcePopupIcon={false}
      disableClearable
      clearOnEscape
      sx={{ width: 582 }}
      loading={isLoading}
      loadingText="TODO"
      noOptionsText={!isLoading && query && `See all results for "${query}"`}
      options={results}
      inputValue={query}
      onInputChange={(_, newValue) => {
        setQuery(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
      getOptionLabel={(option) => option.original_title}
      renderOption={(_, option) => (
        <SearchCard
          option={option}
          key={option.id}
          onSelect={() => {
            setQuery("");
            setOpen(false);
          }}
        />
      )}
    />
  );
};

export default Search;
