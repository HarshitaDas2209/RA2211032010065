// src/pages/TopUsersPage.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const topUsers = [
  { id: 1, name: 'John Doe', posts: 120 },
  { id: 2, name: 'Alice Smith', posts: 115 },
  { id: 3, name: 'Helen Moore', posts: 108 },
  { id: 4, name: 'Jack Anderson', posts: 105 },
  { id: 5, name: 'Paul Walker', posts: 102 },
];

function TopUsersPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        🏆 Top Users
      </Typography>
      <List>
        {topUsers.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={`${user.name}`} secondary={`Posts: ${user.posts}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default TopUsersPage;
