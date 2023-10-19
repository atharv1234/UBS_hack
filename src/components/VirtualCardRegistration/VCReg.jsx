import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const defaultTheme = createTheme();

export default function VirtualCardRegistration() {
    const [bank, setBank] = React.useState('');

    const handleChange = (event) => {
        setBank(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            account_num: data.get('account_num'),
            dob: data.get('dob'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 7,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Virtual Card Registration
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}
                        border={0.25}
                        padding={5}
                        width={800}
                        marginTop={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-evenly'}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="select-bank" required>Bank</InputLabel>


                            <Select
                                labelId="select-bank"
                                id="select-bank"
                                value={bank}
                                label="Select your Bank"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>HDFC</MenuItem>
                                <MenuItem value={2}>HSBC</MenuItem>
                                <MenuItem value={3}>UBS</MenuItem>
                            </Select>
                        </FormControl>

                        <br></br>

                        <TextField
                            required
                            id="nationality"
                            label="Nationality"
                            fullWidth
                        />
                        <br></br>

                        <TextField
                            required
                            id="dob"
                            label="Enter your Date Of Birth"
                        />
                        <br></br>
                        <TextField
                            required
                            id="passport_num"
                            label="Enter your Passport Number"
                        />
                        <br></br>
                        <TextField
                            required
                            id="email"
                            label="Enter your Email ID"
                        />
                        <br></br>

                        <TextField
                            required
                            id="birth_place"
                            label="Enter your Birth Place"
                        />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>

    )

}