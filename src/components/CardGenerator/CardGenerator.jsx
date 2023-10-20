import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { RadioGroup } from '@mui/material';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const cardStyles = {
  borderRadius: '10px',
  width: '337px',
  height: '212px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  padding: '16px',
  boxShadow: '0px 3px 6px #00000029',
  position: 'relative',
};

const cardHeaderStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  marginBottom: '20px',
};

const cardNumberStyles = {
  fontSize: '1.4rem',
  letterSpacing: '0.15rem',
  margin: '10px 0',
  color: 'white',
  fontWeight: 'bold',
};

const cardDetailsStyles = {
  fontSize: '1.1rem',
  color: 'white',
};

const fieldSpacing = {
  marginBottom: '18px',
};

const circleButtonStyles = {
  width: '40px !important',
  height: '40px !important',
  borderRadius: '50% !important',
};

const colorOptions = [
  {
    label: 'Visa Blue',
    value: 'linear-gradient(45deg, #003C7E 30%, #007AC0 90%)',
  },
  {
    label: 'MasterCard Red',
    value: 'linear-gradient(45deg, #FF6E00 30%, #D40C00 90%)',
  },
  {
    label: 'Platinum',
    value: 'linear-gradient(45deg, #727B81 30%, #B7BFC2 90%)',
  },
];

function CardGenerator() {
  const [cardHolderName, setCardHolderName] = useState('');
  const [refreshRate, setRefreshRate] = useState('');
  const [cardColor, setCardColor] = useState(
    'linear-gradient(45deg, #003C7E 30%, #007AC0 90%)'
  );
  const [createCard, setCreateCard] = useState(false);

  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };

  const handleRefreshRateChange = (event) => {
    setRefreshRate(event.target.value);
  };

  const handleCardColorChange = (colorValue) => {
    setCardColor(colorValue);
  };

  const handleCreateCard = () => {
    setCreateCard(true);
  };

  const cardNumber = '**** **** **** 1234';
  const expirationDate = '12/23';
  const cvv = '123';

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Virtual Card</h1>
      <div style={fieldSpacing}>
        <TextField
          label="Cardholder Name"
          variant="outlined"
          fullWidth
          value={cardHolderName}
          onChange={handleCardHolderNameChange}
        />
      </div>
      <div style={fieldSpacing}>
        <div style={{ marginBottom: '8px' }}>
          <Typography variant="subtitle1">Select Card Color</Typography>
        </div>
        <Grid container spacing={2}>
          {colorOptions.map((option) => (
            <Grid item key={option.label}>
              <Button
                variant="outlined"
                style={{
                  ...circleButtonStyles,
                  background: option.value,
                }}
                onClick={() => handleCardColorChange(option.value)}
              >
                &nbsp;
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
      <div style={fieldSpacing}>
        <TextField
          label="Refresh Rate"
          variant="outlined"
          fullWidth
          select
          value={refreshRate}
          onChange={handleRefreshRateChange}
        >
          <MenuItem value="">Select Refresh Rate</MenuItem>
          <MenuItem value="Daily">Daily</MenuItem>
          <MenuItem value="Weekly">Weekly</MenuItem>
          <MenuItem value="Yearly">Yearly</MenuItem>
        </TextField>
      </div>
      <div style={fieldSpacing}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateCard}
        >
          Create My Card
        </Button>
      </div>
      {createCard && (
         <Card style = {{...cardStyles,background: cardColor}} sx={{
          minWidth: 275, backgroundColor: '#DA70D6', width: '337px',
          height: '232px', borderRadius: '10px',

      }}>

          <CardContent>
              <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                  One Card
              </Typography>
              <Typography variant="h5" component="div" style={{ textAlign: 'left' }}>
                  5244  2150  8252  6420
              </Typography>


              <Typography textAlign='left' fontWeight='bold' marginTop='60px'>
                  John Dee
                  <Typography style={{ textAlign: 'left' }}>
                      Valid Till : 10/25
                  </Typography>
              </Typography>

          </CardContent>
      </Card>

      )}
    </div>
  );
}

export default CardGenerator;
