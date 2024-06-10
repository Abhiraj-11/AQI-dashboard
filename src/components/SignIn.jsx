import {
  Email,
  FacebookRounded,
  Google,
  LinkedIn,
  Lock,
} from "@mui/icons-material";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase/FirebaseConfig";
import { Link, useNavigate } from "react-router-dom";

const SignIn = ({ login, setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Sign in successfully");
        setLogin(true);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box p={7} sx={{ backgroundColor: "#d8f0eb" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "",
          height: "44rem",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2" sx={{ color: "#3bb398" }}>
              Login to Your Account
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "gray",
                width: "70%",
                textAlign: "center",
                margin: "0.5rem",
              }}
            >
              Login using social networks
            </Typography>
            <Box>
              <FacebookRounded fontSize="large" sx={{ px: 1, pt: 1 }} />
              <Google fontSize="large" sx={{ px: 1, pt: 1 }} />
              <LinkedIn fontSize="large" sx={{ px: 1, pt: 1 }} />
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "gray",
                width: "70%",
                textAlign: "center",
                margin: "0.5rem",
              }}
            >
              ---------------or--------------
            </Typography>
            <TextField
              type="email"
              value={email}
              variant="filled"
              placeholder="Email"
              color="success"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{ py: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="password"
              value={password}
              variant="filled"
              placeholder="Password"
              color="success"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              sx={{ py: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              onClick={signInUser}
              sx={{
                backgroundColor: "#3bb398",
                borderColor: "white",
                borderRadius: "30px",
                width: "8rem",
                margin: "0.5rem",
                "&:hover": {
                  backgroundColor: "#33a289",
                  borderColor: "white",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#3bb398",
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2" fontWeight="bold" sx={{ color: "white" }}>
              New Here?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                width: "70%",
                textAlign: "center",
                margin: "1rem",
              }}
            >
              Sign up and discover the great feautres our website provide to
              host data for sensors
            </Typography>
            <Link to="/SignUp">
              <Button
                type="button"
                variant="outlined"
                size="large"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "30px",
                  width: "8rem",
                  margin: "0.5rem",
                  "&:hover": {
                    backgroundColor: "#33a289",
                    borderColor: "white",
                  },
                }}
              >
                Sign Up
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
