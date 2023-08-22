import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

interface DownloadCvWidgetProps {
  logo: React.ReactNode;
  title: string;
  downloadUrl: string;
}

const DownloadCvWidget: React.FC<DownloadCvWidgetProps> = ({ logo, title, downloadUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleContactClick = () => {
    window.location.href = downloadUrl;
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

export default DownloadCvWidget;
