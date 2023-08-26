import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

interface Props {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Search = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <TextField
      id='search-input'
      label='Search'
      variant='outlined'
      onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      value={searchQuery}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
