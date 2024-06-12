import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Avatar,
} from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Box my={10} display="flex" flexDirection="column" alignItems="center">
          <Avatar
            alt="User Avatar"
            src="/path/to/avatar.jpg"
            sx={{ width: 15, height: 15, mb: 2 }}
          />
          <Typography variant="h4" component="h1" gutterBottom>
            Profile
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Welcome, Abhiraj Paul
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  label="Name"
                  variant="outlined"
                  value="Abhiraj Paul"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  value="paulabhiraj56@gmail.com"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="bio"
                  label="Bio"
                  multiline
                  rows={4}
                  variant="outlined"
                  value="A passionate coder"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  label="New Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
