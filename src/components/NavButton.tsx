import React, { useState } from 'react';
import { Button } from '@mui/material';

interface NavButtonProps {
  text: string;
}

const NavButton: React.FC<NavButtonProps> = ({ text }) => {

  const yOffset= -64; // Décalage pour compenser la hauteur de la navbar

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
      setIsHovered(true);
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
  };

  const handleNavClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const element = document.querySelector(`#${text}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };



  return (
    <Button
      color="inherit"
      className='navButton'
      onClick={handleNavClick}
      style={{  backdropFilter: isHovered ? 'brightness(1.8)' : "", borderRadius:"10px", transition: "300ms"  }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    >
      {text}
    </Button>
  );
};

export default NavButton;
