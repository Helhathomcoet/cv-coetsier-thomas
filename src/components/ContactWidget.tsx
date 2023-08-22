import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

interface ContactWidgetProps {
  logo: React.ReactNode;
  title: string;
  contactUrl: string;
}

const ContactWidget: React.FC<ContactWidgetProps> = ({ logo, title, contactUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleContactClick = () => {
    window.location.href = contactUrl;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 1.2,
        borderRadius: '30px',
        backgroundColor: isHovered ? '#F4A261' : 'rgba(231, 111, 81, 0.75)' ,
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out',
        width: '100px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleContactClick}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '10px' }}>{logo}</div>
        <Typography variant="body2" align="center">
          {title}
        </Typography>
      </div>
    </Box>
  );
};

export default ContactWidget;
