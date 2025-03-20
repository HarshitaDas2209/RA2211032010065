// src/pages/TrendingPostsPage.js
import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const trendingPosts = [
  { id: 1, content: 'Post about climate change', comments: 300 },
  { id: 2, content: 'Post about AI future', comments: 285 },
  { id: 3, content: 'Post about healthy food', comments: 250 },
];

function TrendingPostsPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        🔥 Trending Posts
      </Typography>
      {trendingPosts.map((post) => (
        <Card key={post.id} variant="outlined" style={{ marginBottom: 10 }}>
          <CardContent>
            <Typography variant="h6">{post.content}</Typography>
            <Typography color="textSecondary">Comments: {post.comments}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default TrendingPostsPage;
