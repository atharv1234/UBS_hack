import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Innovators - UBS Hackathon
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AfterRegistration() {
  const [tpu, settpu] = useState("");
  const [maxupto, setmaxupto] = useState("");
  const [refresh, setrefresh] = useState("");
  const [details, setDetails] = useState("Hello Owrld");
  const handleChangetpu = (e) => {
    settpu(e.target.value);
  };
  const handleChangemaxupto = (e) => {
    setmaxupto(e.target.value);
  };
  const handleChangerefresh = (e) => {
    setrefresh(e.target.value);
  };

  const handleClick = () => {
    setDetails(
      "event.currentTarget jhadsjkklskdlsa loremsjdnajksdnkajsndjkands"
    );
  };
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Pay Per use
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <FormControl sx={{ m: 2, minWidth: 400 }}>
                <InputLabel id="tpu">Transaction Per Use</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="tpu"
                  value={tpu}
                  label="Transaction Per Use"
                  onChange={handleChangetpu}
                >
                  <MenuItem value={1}>1 CHF</MenuItem>
                  <MenuItem value={2}>2 CHF</MenuItem>
                  <MenuItem value={3}>3 CHF</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 2, minWidth: 400 }}>
                <InputLabel id="maxupto">MaxUpto</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  value={maxupto}
                  onChange={handleChangemaxupto}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={10}>10 CHF</MenuItem>
                  <MenuItem value={20}>20 CHF</MenuItem>
                  <MenuItem value={30}>30 CHF</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 2, minWidth: 400 }}>
                <InputLabel id="refresh">Refresh</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  value={refresh}
                  onChange={handleChangerefresh}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                onClick={handleClick}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                See Details
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
      <div
        style={{
          backgroundColor: "grey",
          height: "fit-content",
          textAlign: "center",
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {tpu}
        {refresh}
        {maxupto}
        {details}
      </div>
    </div>
  );
}
