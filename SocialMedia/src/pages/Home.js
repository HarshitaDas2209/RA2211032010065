// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        📊 Social Media Analytics Dashboard
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/top-users">
        Top Users
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/trending-posts" style={{ marginLeft: 10 }}>
        Trending Posts
      </Button>
      <Button variant="contained" component={Link} to="/feed" style={{ marginLeft: 10 }}>
        Live Feed
      </Button>
    </Container>
  );
}

export default Home;
