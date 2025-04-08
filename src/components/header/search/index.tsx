import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  Box,
  Divider,
  FormControl,
  InputAdornment,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchMovieQuery } from "services/search";

const Search: React.FC = () => {
  const [qType, setQType] = useState("0");
  const [query, setQuery] = useState<string>("");
  const [q, setQ] = useState<string>("");
  const { data: results = [], isLoading } = useSearchMovieQuery(q, {
    skip: q.length < 3,
  });

  const handleChange = (event: SelectChangeEvent) => {
    setQType(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setQ(query);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <Box
      sx={{
        margin: "0 0.5rem",
        display: "flex",
        flexDirection: "row",
        width: "600px",
        height: "36px",
      }}
    >
      <FormControl
        size="small"
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "32px",
        }}
      >
        <Select value={qType} onChange={handleChange}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={2}>Titles</MenuItem>
          <MenuItem value={3}>TV Episodes</MenuItem>
          <MenuItem value={4}>Celebs</MenuItem>
          <MenuItem value={5}>Companies</MenuItem>
          <MenuItem value={6}>Keywords</MenuItem>
          <Divider />
          <MenuItem value={7}>Advanced Search</MenuItem>
        </Select>
        <Autocomplete
          sx={{
            width: 582,
            display: "flex",
            minHeight: "2.25rem",
            "& .MuiOutlinedInput-root": {
              padding: "0px!important",
            },
          }}
          forcePopupIcon={false}
          disableClearable
          clearOnEscape
          loading={isLoading}
          options={results}
          onInputChange={(e, newValue) => {
            setQuery(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              style={{ padding: 0 }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon width="24px" height="24px" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
          getOptionLabel={(option) => option.original_title}
          renderOption={(props, option) => (
            <Box>
              <Link href={`/title/${option.id}`}>
                <span>{option.original_title}</span>
              </Link>
            </Box>
          )}
        />
      </FormControl>
    </Box>
  );
};

export default Search;
