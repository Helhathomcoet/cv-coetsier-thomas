import { useEffect, useState } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import SkillWidget from './SkillWidget';
import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactWidget from './ContactWidget';
import DownloadIcon from '@mui/icons-material/Download';
import DownloadCvWidget from './DownloadCvWidget';

export default function MainDescription() {
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Au chargement de la page, après un court délai, définissez isLoaded à true
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);
    return (
        <div style={{ marginTop: '150px'  }}>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} md={2} />
                <Grid item xs={12} md={4} style={{ opacity: isLoaded ? 1 : 0, transform: `translateX(${isLoaded ? 0 : '-20px'})`, transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'}}>
                    <div >
                        <Typography variant="h5">
                            Hey ! Je me présente -
                        </Typography>
                        <Typography variant="h2" fontFamily={'Montserrat, sans-serif'} className='gradient-title'>
                            Thomas Coetsier
                        </Typography>
                        <Typography variant="h4">
                            Étudiant passionné en informatique, je suis actuellement à la recherche d'une alternance.
                        </Typography>
                    </div>
                    
                    <Grid container justifyContent="left" marginTop={"20px"}>
                        <Grid item xs={12} sm={6} md={2.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <ContactWidget logo={<GitHubIcon />} title="GitHub" contactUrl='https://github.com/Helhathomcoet' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <ContactWidget logo={<LinkedInIcon />} title="Linkedin" contactUrl='https://www.linkedin.com/in/thomas-coetsier-0aaa161ba/' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <ContactWidget logo={<SendIcon />} title="E-mail" contactUrl='mailto:thomcoet@gmail.com' />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid>
                        <Grid item xs={12} md={2}></Grid>
                        <Grid item xs={12} md={7.5}>
                            <DownloadCvWidget logo={<DownloadIcon />} title="Télécharger mon CV" downloadUrl='/cv-coetsier-thomas/CV Thomas Coetsier.pdf' />
                        </Grid>
                    </Grid>


                </Grid>
                <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'right', alignItems: 'right' ,opacity: isLoaded ? 1 : 0, transform: `translateX(${isLoaded ? 0 : '20px'})`, transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'}}>
                    <img src="/cv-coetsier-thomas/Photo CV.jpg" alt="Photo de CV" style={{ width: '70%', height: 'auto', borderRadius: '100px' }} />
                </Grid>
                <Grid item xs={12} md={2} />

            </Grid>
            <Grid container spacing={3} style={{opacity: isLoaded ? 1 : 0, transform: `translateY(${isLoaded ? 0 : '20px'})`, transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'}}>
                <Grid item xs />
                <Grid item xs={8}>
                    <Grid container justifyContent="center" spacing="50px" marginTop={"50px"} >
                        <Box sx={{ display: 'flex', justifyContent: 'center', borderRadius: '30px', border: '3px solid #ccc', p: 2 }}>
                            <Grid item xs={12} sm={6} md={4} >
                                <SkillWidget logo={<TerminalIcon style={{fontSize:"50px"}} />} title="Développeur Fullstack" description="En tant qu'étudiant et à titre personnel, j'ai eu l'occasion de mener à bien des projets divers et variés touchant à plein de technologie." />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} >
                                <SkillWidget logo={<SchoolIcon style={{fontSize:"50px" }} />} title="Étudiant" description="Actuellement diplomé d'un Bachelier (équivalent d'une Licence) en Technologie de l'informatique. Je suis en phase de rentrer en Master spécialisation BigData-Intelligence artificielle à Epitech." />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} >
                                <SkillWidget logo={<GroupsIcon style={{fontSize:"50px"}}/>} title="Animateur Scout" description="Sur le côté, je suis également animateur scout. Je suis donc habitué à travailler en groupe, à organiser des évenements et à gérer des groupes de jeunes." />
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs />
            </Grid>


        </div>
    );
}
