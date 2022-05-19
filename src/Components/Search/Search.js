import TextField from "@mui/material/TextField";

const Search = props => {
    const {onChange, value} = props;

    return <TextField
        label='Search'
        variant='standard'
        type='search'
        fullWidth
        value={value}
        onChange={onChange}
        sx={{
            mb: '1.5rem'
        }}
    />
}

export default Search
