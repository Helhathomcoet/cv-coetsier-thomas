import { Typography, Box, Link, IconButton, Button, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
    return (
        <Box sx={{ py: 3, textAlign: 'center' }}>
            <div className='divider'>
                <Box padding="50px 20px" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={1.5}></Grid>
                        <Grid item xs={12} md={3} >
                            <Typography variant="h3" sx={{ ml: 2 }}>
                                Intéressé(e) de travailler avec moi ?
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} ></Grid>
                        <Grid item xs={12} md={3} >
                            <Button variant="contained" href="mailto:thomcoet@gmail.com" sx={{
                                fontSize: "25px", borderRadius: "20px", background: 'linear-gradient(45deg, #E76F51, #E9C46A)',
                                color: '#FFFFFF',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #E9C46A, #E76F51)',
                                },
                            }}>
                                Envoyez-moi un mail <SendIcon style={{ marginLeft: "10px" }}></SendIcon>
                            </Button></Grid>
                        <Grid item xs={12} md={1.5}></Grid>
                    </Grid>
                </Box>
            </div>



            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "10px" }}>
                <Link href="https://www.linkedin.com/in/thomas-coetsier-0aaa161ba/" target="_blank" rel="noopener noreferrer" sx={{ mr: 2 }}>
                    <IconButton href="https://www.linkedin.com/in/thomas-coetsier-0aaa161ba/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            background: 'linear-gradient(45deg, #E76F51, #E9C46A)',
                            color: '#FFFFFF',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #E9C46A, #E76F51)',
                            },
                        }}>
                        <LinkedInIcon />
                    </IconButton>
                </Link>
                <Link href="https://github.com/Helhathomcoet" target="_blank" rel="noopener noreferrer">
                    <IconButton
                        href="https://github.com/Helhathomcoet"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            background: 'linear-gradient(45deg, #E76F51, #E9C46A)',
                            color: '#FFFFFF',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #E9C46A, #E76F51)',
                            },
                        }}
                    >
                        <GitHubIcon />
                    </IconButton>
                </Link>
            </div>

            <Typography variant="body2">
                &copy; {new Date().getFullYear()} Coetsier Thomas
            </Typography>
        </Box>
    );
};

export default Footer;
