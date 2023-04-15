import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useUserAuth } from '../utils/UserAuthContext';

const bull = (


  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
    const {user} = useUserAuth()

    console.log(user);
  return (
    <center>
      <Card sx={{ minWidth: 400 ,maxWidth: 500 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="h5" component="div">
          {user.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          GDSC member
        </Typography>
       
      </CardContent>
    </Card>
    </center>
  );
}