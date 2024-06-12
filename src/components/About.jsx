import { Box, Button, Container, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box my={10}>
          <Typography
            variant="h3"
            fontWeight="bold"
            component="h1"
            gutterBottom
          >
            About Us
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Welcome to AQI Dashboard
          </Typography>
          <Typography paragraph>
            At AQI Dashboard, we are dedicated to providing accurate and
            real-time air quality monitoring to help you stay informed about the
            air you breathe. Our platform integrates advanced sensor technology
            with user-friendly features to deliver comprehensive air quality
            data that you can trust.
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography paragraph>
            Our mission is to empower individuals and communities with the
            knowledge and tools they need to make informed decisions about their
            environment. By offering precise and timely air quality information,
            we aim to promote healthier lifestyles and foster a greater
            awareness of environmental issues.
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            What We Offer
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            Real-Time Air Quality Monitoring
          </Typography>
          <Typography paragraph>
            Using a combination of high-quality sensors, including the MQ135 for
            detecting various gases, the MQ7 for carbon monoxide levels, and the
            GP2Y1010AU0F for PM2.5 particulate matter, our system provides
            real-time updates on air quality. Our sensors are strategically
            placed to ensure accurate and comprehensive data collection.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            Interactive Graphs
          </Typography>
          <Typography paragraph>
            We believe that understanding air quality data should be easy and
            accessible. Our website features interactive graphs that display
            historical and current air quality trends. These visualizations help
            you track changes over time and identify patterns in air pollution.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            User-Friendly Interface
          </Typography>
          <Typography paragraph>
            Our platform is designed with you in mind. With a straightforward
            sign-up and login process, you can easily access your personalized
            dashboard. Whether you are a concerned citizen, a researcher, or a
            policy maker, our intuitive interface ensures that you can navigate
            through the data effortlessly.
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Why Air Quality Matters
          </Typography>
          <Typography paragraph>
            Air quality is a critical component of public health and
            environmental well-being. Poor air quality can lead to numerous
            health issues, including respiratory problems, cardiovascular
            diseases, and even premature death. By staying informed about the
            air quality in your area, you can take proactive steps to protect
            yourself and your loved ones.
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Join Our Community
          </Typography>
          <Typography paragraph>
            Become part of a community that values clean air and healthy living.
            Sign up today to start monitoring the air quality in your area and
            contribute to a cleaner, healthier world.
          </Typography>
          <Link to="/signUp">
            <Button
              variant="contained"
              color="primary"
              type="button"
              sx={{ mb: 2 }}
            >
              Sign Up
            </Button>
          </Link>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions, feedback, or suggestions, please do not
            hesitate to reach out to us at paulabhiraj56@gmail.com. We are
            always here to help and improve our services based on your needs.
          </Typography>
          <Typography paragraph>
            Thank you for choosing AQI Dashboard – together, we can breathe
            easier.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default About;
