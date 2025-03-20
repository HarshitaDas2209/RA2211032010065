// src/pages/FeedPage.js
import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const feedPosts = [
  { id: 1, content: 'Post about tech trends' },
  { id: 2, content: 'Post about web development' },
  { id: 3, content: 'Post about cybersecurity' },
];

function FeedPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        📰 Live Feed
      </Typography>
      {feedPosts.map((post) => (
        <Card key={post.id} variant="outlined" style={{ marginBottom: 10 }}>
          <CardContent>
            <Typography variant="body1">{post.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default FeedPage;
