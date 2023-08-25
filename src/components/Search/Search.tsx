import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

interface Props {
  setSearchQuery: (query: string) => void;
}

export const Search = ({ setSearchQuery }: Props) => {
  return (
    <>
      <TextField
        id="search-input"
        label="Search"
        variant="outlined"
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </>
  );
};
