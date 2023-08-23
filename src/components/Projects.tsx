import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectCard from './ProjectCard';
import { Grid, Typography } from '@mui/material';

function Projects() {
  const projects = [
    {
      img: "./public/assets/HolOnBoard.jpg",
      title: "HolOnBoard",
      description: <div>
        <Typography variant="body1">
          "HolOnBoard" représente un projet novateur axé sur la Réalité Mixte, un domaine englobant la gamme complète entre la Réalité Virtuelle (VR) et la Réalité Augmentée (AR). L'objectif de ce projet était de démontrer l'application pratique et interactive de la Réalité Mixte et de la technologie Hololens 2 dans le contexte logistique. En collaboration étroite avec notre client, nous avons développé une application en Réalité Mixte pour l'accueil des nouveaux employés, en adoptant une méthodologie Scrum.
        </Typography>
        <br />
        <Typography variant="body1">
          Du point de vue technique, notre approche a été axée sur l'utilisation d'Azure en tant qu'infrastructure, incluant une API, une base de données SQL, ainsi que Azure Spatial Anchor, une ressource typiquement exploitée en Réalité Mixte pour positionner des points géographiques dans l'espace. Notre équipe (composée de 2 étudiants) a conçu une interface d'administration sous React pour la création de circuits, une application HoloLens 2 basée sur Unity (en utilisant le langage C#) pour le rôle d'opérateur et le positionnement d'ancres, ainsi qu'une application HoloLens 2 pour les nouveaux employés, simulant leur expérience d'arrivée dans l'entreprise.
        </Typography>
        <br />
        <Typography variant="body1">
          N'hésitez pas à cliquer sur l'image pour découvrir une vidéo de ces trois applications en action.
        </Typography>
      </div>,
      projectUrl: "lien-vers-projet-1",
    },

    {
      img: "./public/assets/PonyTail Survivor.jpg",
      title: "PonyTail Survivor",
      description: <div>
        <Typography variant="body1">
          "PonyTail Survivor" est une application créée dans le contexte d'un hackathon axé sur le thème "Dev Vs Wild". En alignement avec ce thème, notre concept pour l'application était de développer une application mobile capable d'identifier les éléments essentiels à la survie à partir d'une photo, tels qu'un couteau, du bois, etc.
        </Typography>
        <br />
        <Typography variant="body1">
          Pour concrétiser cette idée, nous avons opté pour le développement en Flutter et avons utilisé l'infrastructure Azure. Nous avons tiré parti d'un stockage NoSQL (table Azure) et du blobstorage pour enregistrer les photos prises par le téléphone. Ces images étaient ensuite envoyées à un modèle d'intelligence artificielle pré-entraîné des cognitives services Azure. Ce modèle nous retournait des informations sous forme de tags correspondant aux éléments identifiés sur la photo. Ces tags ont été utilisées pour mettre en évidence les éléments considérés essentiels en situation de survie. Cependant, nous avons poussé les limites en envoyant toutes les données obtenues du "cognitive service for vision" à l'API de chatGPT, où nous avons utilisé ces données conjointement avec une amorce préconstruite pour générer un guide de survie adapté aux éléments présents sur la photo.
        </Typography>
        <br />
        <Typography variant="body1">
          Ce projet ambitieux nous a valu la deuxième place lors du hackathon, malgré notre petite équipe composée de seulement trois membres.
        </Typography>
      </div>,
      projectUrl: "lien-vers-projet-3",
    },
    {
      img: "./public/assets/KotApplication.jpg",
      title: "KotApplication",
      
      description: <div>
        <Typography variant="body1">
          "KotApplication" représente un projet mobile élaboré dans le cadre d'un cours axé sur le développement mobile. Ce projet nous a accordé une liberté créative pendant une période de deux mois, au cours de laquelle j'ai choisi de créer une application en Flutter. Ma réflexion rapide m'a conduite à identifier une niche intéressante : les colocations étudiantes, également appelées "Kot" en Belgique. Cette thématique me touchait personnellement et offrait la possibilité de tester activement mon application dans un contexte pertinent.
        </Typography>
        <br />
        <Typography variant="body1">
          Du point de vue technique, cette application s'appuie sur divers outils. Firebase a été choisi comme backend en raison de son support en temps réel. J'ai utilisé Firebase pour gérer les données, son blobStorage pour les images, ainsi que son système d'authentification pour les connexions des utilisateurs. Ensuite, j'ai développé entièrement l'application en Flutter. L'objectif principal était de permettre la gestion efficace de la vie en colocation ("Kot"), en incluant un calendrier, une liste d'événements à venir, des tâches assignées à chacun des colocataires, ainsi qu'un système de chat pour faciliter les communications.
        </Typography>
        <br />
        <Typography variant="body1">
          Je vous encourage à consulter la vidéo dédiée au projet, même si elle a été créée dans un contexte scolaire. Elle vous offrira une meilleure compréhension du contenu et du fonctionnement de l'application.
        </Typography>
      </div>,
      projectUrl: "lien-vers-projet-2",
    },
  ];

  return (
    <div style={{ marginTop: "100px" }}>
      <Grid container alignItems="center" justifyContent="center" >
        <Grid item xs={12} md={2} />
        <Grid item xs={12} md={4} >
          <Typography variant="h3" mt={2} className='gradient-title'>
            Mes Projets
          </Typography>
          <Typography variant="h6" mt={1}>
            Voici une liste non exhaustive de mes projets professionnels, scolaires et personnels.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} />
      </Grid>
      <Grid container alignItems="center" justifyContent="center" >
        <Grid item xs={12} md={1.5} />
        <Grid item xs={12} md={9} >
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                img={project.img}
                title={project.title}
                description={project.description}
                projectUrl={project.projectUrl}
                reversed={index % 2 == 1}
              />
            </div>
          ))}
        </Grid>
        <Grid item xs={12} md={1.5} />
      </Grid>
    </div>
  );
}

export default Projects;
