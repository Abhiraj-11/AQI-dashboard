import {
  AccountCircle,
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
import {
  auth,
  createUserWithEmailAndPassword,
  googleProvider,
  signInWithPopup,
} from "../firebase/FirebaseConfig";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const createUser = () => {
    if (name !== "" && email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((value) => {
          navigate("/");
        })
        .catch((error) => console.error(error));
    }
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  console.log(name, email, password);
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
            backgroundColor: "#3bb398",
            width: "40%",
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
            <Typography variant="h2" sx={{ color: "white" }}>
              Welcome Back!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                width: "70%",
                textAlign: "center",
                margin: "0.5rem",
              }}
            >
              To keep connected with us please login with your personal info
            </Typography>
            <Link to="/SignIn">
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
                Sign In
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            width: "60%",
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
            <Typography variant="h2" sx={{ color: "#3bb398" }}>
              Create Account
            </Typography>
            <Box>
              <FacebookRounded
                fontSize="large"
                sx={{ px: 1, pt: 1, "&:hover": { cursor: "pointer" } }}
              />
              <Google
                onClick={signupWithGoogle}
                fontSize="large"
                sx={{
                  px: 1,
                  pt: 1,
                  "&:hover": { cursor: "pointer" },
                }}
              />
              <LinkedIn
                fontSize="large"
                sx={{ px: 1, pt: 1, "&:hover": { cursor: "pointer" } }}
              />
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
              or use your email for registration:
            </Typography>
            <TextField
              type="text"
              value={name}
              variant="filled"
              size="small"
              placeholder="Name"
              color="success"
              fullWidth
              onChange={(e) => setName(e.target.value)}
              sx={{ py: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              value={email}
              type="email"
              variant="filled"
              placeholder="Email"
              color="success"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
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
            <Link to="/">
              <Button
                type="submit"
                variant="contained"
                size="large"
                onClick={createUser}
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
                Sign Up
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
