import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Input,
  Button,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          fontFamily: "Quicksand",
          margin: "64px 0",
        }}
      >
        Welcome back!
      </Typography>
      {/* <Typography>Login</Typography> */}
      <Box>
        <Typography sx={{ fontWeight: "500" }}>Email</Typography>
        <Input
          label="Your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          variant="filled"
          sx={{ width: "300px", margin: "16px" }}
        />
        <Typography sx={{ fontWeight: "500" }}>Password</Typography>
        <Input
          label="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          variant="filled"
          type={showPassword ? "text" : "password"}
          sx={{ width: "300px", margin: "16px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Link href="/" passHref>
          <Typography
            sx={{ fontSize: "0.8rem", marginLeft: "200px", marginTop: "10px" }}
          >
            Forgot your password?
          </Typography>
        </Link>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: "275px",
          borderRadius: "8px",
          margin: "16px 0",
          textTransform: "capitalize",
          fontSize: "1.1rem",
        }}
      >
        Login
      </Button>
      <Box sx={{ display: "flex", alignItems: "center", margin: "64px 0" }}>
        <Divider
          sx={{ width: "90px", margin: "8px 16px ", borderColor: "#525252" }}
        />
        Or, sign in with
        <Divider
          sx={{ width: "90px", margin: "8px 16px ", borderColor: "#525252" }}
        />
      </Box>
      <Box
        sx={{
          border: "solid 3px #525252",
          width: "75px",
          height: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
        }}
      >
        <Image src={"/Google.svg"} height={48} width={48} alt="Google Logo" />
      </Box>
    </Box>
  );
};

export default LoginPage;
