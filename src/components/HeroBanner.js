import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    <Box className="hero-content">
      <Typography color="white" fontWeight="600" fontSize="26px">Fitness Club</Typography>
      <Typography color="white" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography color="white" fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
      </Stack>
    </Box>
    <Typography fontWeight={600} color="white" sx={{ opacity: '0.5', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>Exercise</Typography>
  </Box>
);

export default HeroBanner;
