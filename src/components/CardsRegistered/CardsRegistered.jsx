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
        <div style={{
            display : 'flex'
        }}>
            <Card sx={{
                minWidth: 275, backgroundColor: '#DA70D6', width: '337px',
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
            <Card sx={{
                minWidth: 275, width: '337px', backgroundColor: '#DA70D6',
                height: '232px', borderRadius: '10px', margin: '20px',

            }}>
                <Typography backgroundColor='#28282B' width='100%' marginTop='28px' color="#28282B" fontSize='25px'>K</Typography>
                
                <Box marginTop='10px' marginLeft='10px' display="flex" >
                    
                {/* <div display='flex' justifyContent="space-around" width='100%' > */}
                    <div style={{width:"300px",height:"25px",
  background: 'repeating-linear-gradient(60deg, black, black 10px, white 10px, white 20px)'}}></div>
                <div><Typography alignSelf='center' marginLeft="2px" marginRight="20px">866</Typography></div>
                {/* </div> */}
                
              
                </Box>
                
               <Box display='flex' justifyContent='space-between' width='90%' marginTop='70px' marginLeft='10px' >
                <Typography>Customer Signature</Typography>
                <Typography>One Card</Typography>
               </Box>
                
            </Card>
        </div>
    );
}
