import { Box, Grid, Typography } from "@mui/material"


function AboutMe() {
    return (
        <div style={{ marginTop: "50px", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }} >
                <Typography variant="h3" mt={2} className='gradient-title' marginLeft={"80px"} >
                    À propos de moi
                </Typography>
            </Box>
            <Grid container alignItems="center" justifyContent="center">

                <Grid item xs={12} md={1.5}></Grid>
                <Grid item xs={12} md={9} >
                    <Grid container alignItems="center" justifyContent="center">

                        <Grid item xs={12} md={6}>


                            <div style={{ display: "flex", justifyContent: "center" }} >
                                <Typography variant="h4" mt={2} padding={"20px"} >
                                    Mes skills
                                </Typography>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }} >
                                <img src="./cv-coetsier-thomas/Skills.png" alt="working" style={{ width: "50%", borderRadius: "10px", padding: "20px" }} />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", marginLeft: '25px' }} >

                                <img src="./cv-coetsier-thomas/at-work.jpg" alt="working" style={{ width: "100%", borderRadius: "20px" }} />
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{ padding: "40px" }} >
                        <Typography variant="h6" mt={1} marginTop={"25px"}>
                            Je m'appelle Thomas Coetsier, j'ai 21 ans et je viens d'obtenir mon diplome de Bachelier (Bac +3) en Technologie de l'informatique. Je m'apprête à débuter mon parcours à Epitech en Master Msc-pro en spécialisation Big Data et Intelligence Artificielle.
                        </Typography>
                        <Typography variant="h6" mt={1} marginTop={"15px"}>
                            Dans cette perspective, je suis à la recherche d'une opportunité d'alternance (idéalement dans les environs de Lille, Baisieux ou Villeneuve d'Ascq) pour renforcer mes compétences et acquérir davantage d'expérience dans ce domaine. Je suis ouvert à toutes les propositions, mais je suis particulièrement attiré par l'innovation, la recherche et le développement, que j'ai pu expérimenter lors d'un stage de 4 mois au
                            <a href="https://www.mic-belgique.be/" > MIC </a>
                            sur un projet de réalité mixte avec HoloLens 2. Je considère que mon véritable atout réside dans ma capacité d'adaptation rapide et ma facilité à maîtriser de nouvelles technologies.                        </Typography>
                        <Typography variant="h6" mt={1} marginTop={"15px"}>
                            Passionné par l'informatique depuis mon plus jeune âge, je suis toujours en quête de nouveaux défis à relever. J'ai un fort désir d'apprendre et une grande curiosité. Je suis également très motivé et je m'investis beaucoup dans les projets qui me sont confiés.
                        </Typography>
                    </div>

                </Grid>
                <Grid item xs={12} md={1.5}></Grid>

            </Grid>
        </div>
    )
}

export default AboutMe