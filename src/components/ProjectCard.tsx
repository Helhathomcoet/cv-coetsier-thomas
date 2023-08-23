import { Box, Grid, Typography } from "@mui/material";

interface ProjectCardProps {
  img: string;
  title: string;
  description: React.ReactNode;
  projectUrl: string;
  reversed?: boolean;
}

function ProjectCard({ img, title, description, projectUrl, reversed }: ProjectCardProps) {
  const tiltAmount = 5;


  if (reversed == undefined) reversed = false;



  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {

    const card = event.currentTarget;
    card.style.transition = "none";
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / card.offsetWidth;
    const y = (event.clientY - rect.top) / card.offsetHeight;
    const rotationX = (y - 0.5) * tiltAmount;
    const rotationY = (0.5 - x) * tiltAmount;

    card.style.transform = `perspective(500px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  };
  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.transition = "transform 0.5s ease-in-out"; // Ajout de la transition ralentie
    card.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
    setTimeout(() => {
      card.style.transition = "transform 0.3s ease-in-out"; // Rétablir la transition normale
    }, 200); // Délai correspondant à la durée de la transition ralentie
  };

  const handleProjectClick = () => {
    if(projectUrl == '') return console.log('No project url');
    projectUrl && window.open(projectUrl, "_blank");
  };

  if (!reversed) {
    return (

      <Box className="project-card" p={3} style={{ position: "relative", display: "flex", marginTop: '10px' }}>
        <Grid container alignItems={"center"}>
          <Grid item xs={12} sm={6} md={6} style={{ position: "relative" }}>
            <div>
              <img src={img} alt={title} onClick={handleProjectClick} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ width: "100%", height: "auto", marginLeft: "auto", marginRight: "auto", display: "block", borderRadius: "20px", objectFit: "cover" }} />
              <div style={{ position: "absolute", top: 20, left: 20, padding: "10px 20px", borderRadius: "20px", background: "#222222", color: "#FFFFFF" }}>
                <Typography variant="h5">{title}</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="body1" mt={1} style={{ padding: "5px 40px", fontSize: "16px" }}>
              {description}
            </Typography>
          </Grid>

        </Grid>


      </Box>
    );
  }
  else {
    return (

      <Box className="project-card" p={3} style={{ position: "relative", display: "flex", marginTop: '10px' }}>
        <Grid container alignItems={"center"}>

          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="body1" mt={1} style={{ padding: "5px 40px", fontSize: "16px" }}>
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ position: "relative" }}>
            <div>
              <img src={img} alt={title} onClick={handleProjectClick} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ width: "100%", height: "auto", marginLeft: "auto", marginRight: "auto", display: "block", borderRadius: "20px", objectFit: "cover" }} />
              <div style={{ position: "absolute", top: 20, right: 20, padding: "10px 20px", borderRadius: "20px", background: "#222222", color: "#FFFFFF" }}>
                <Typography variant="h5">{title}</Typography>
              </div>
            </div>
          </Grid>
        </Grid>


      </Box>
    );
  }


}

export default ProjectCard;
