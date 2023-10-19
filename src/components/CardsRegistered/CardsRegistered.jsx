import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardCover from '@mui/joy/CardCover'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';


export default function CardsRegistered() {
    return (
        <Card sx={{
            minWidth: 275, backgroundColor: 'pink', width: '337px',
            height: '232px', borderRadius: '10px', margin: '20px',
            
        }}>

            

            <CardContent>
                <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                    One Card
                </Typography>
                <Typography variant="h5" component="div">
                    5244  2150  8252  6420
                </Typography>


                <Typography textAlign='left' fontWeight='bold' marginTop='60px'>
                    John Dee
                    <Typography>
                        Valid Till : 10/25
                    </Typography>
                </Typography>





            </CardContent>
        </Card>
    );
}
