import React from 'react';
import { Typography } from '@mui/material';

interface SkillWidgetProps {
  logo: React.ReactNode; // Utilisez React.ReactNode comme type pour l'icône
  title: string;
  description: string;
}

const SkillWidget: React.FC<SkillWidgetProps> = ({ logo, title, description }) => {
  return (
    <div style={{ padding: "5px" }} >
      <div style={{ marginRight: '20px'  }}>{logo}</div>
      <Typography variant="h4" align="left" marginTop={"10px"}>
        {title}
      </Typography>
      <Typography variant="body1" align="left" marginTop={"10px"}>
        {description}</Typography>
    </div>
  );
};

export default SkillWidget;
