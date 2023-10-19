import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
// import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import '../../styles/registerCard.css'
const options = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  // Add more options as needed
];

const MultiSelect = () => {

    const labelStyle = {
        fontSize: '30px', // Customize the font size
        fontWeight: 'bold', // Customize the font weight
        color: 'blue', // Customize the text color
        // Add more custom styles as needed
      };
  const [selectedOptions, setSelectedOptions] = useState([]);
//   const classes = useStyles();     
  const handleOptionChange = (event, value) => {
    setSelectedOptions(value);
  };

  return (
    <div className='registerCard'>
    <div className="container">
    <Typography variant="body1" style={labelStyle}>
      Register Card with Banks
    </Typography>
    <Autocomplete
      className='autocomplete'
      multiple
      id="multi-select"
      options={options}
      getOptionLabel={(option) => option.label}
      value={selectedOptions}
      onChange={handleOptionChange}
      renderInput={(params) => (
          <TextField {...params} label="Select Options" variant="filled" />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
          <Chip
            label={option.label}
            {...getTagProps({ index })}
            onDelete={() => {
              const newOptions = [...selectedOptions];
              newOptions.splice(index, 1);
              setSelectedOptions(newOptions);
            }}
          />
          ))
        }
        />
        <Button variant="contained" color="primary">
            Send
        </Button>
        </div>
    </div>    
  );
};

export default MultiSelect;