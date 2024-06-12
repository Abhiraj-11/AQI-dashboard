import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Box my={10}>
          <Typography
            variant="h3"
            fontWeight="bold"
            component="h1"
            gutterBottom
          >
            Contact Us
          </Typography>
          <Typography paragraph>
            We are here to assist you! If you have any questions, feedback, or
            suggestions, please reach out to us using the form below or contact
            us at paulabhiraj56@gmail.com. Your input is invaluable to us as we
            strive to improve our services and better meet your needs.
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  label="Name"
                  variant="outlined"
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
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="subject"
                  label="Subject"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ mb: 2 }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Typography paragraph>Alternatively, you can reach us at:</Typography>
          <Typography variant="body1">Email: abhirajpaul3@gmail.com</Typography>
          <Typography variant="body1">Phone: +91 600175022</Typography>
          <Typography variant="body1">
            Address: Assam Engineering College, Jalukbari, Guwahati-781013
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
