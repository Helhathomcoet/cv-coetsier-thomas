import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import NavButton from './NavButton';

const sections = ['Accueil', 'Projets', 'Présentation', 'Contact']; // Remplacez ceci par vos pages réelles

const NavBar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#264653', boxShadow: 'none' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 20 }}>
          <TerminalIcon fontSize="large" />
          <Typography variant="h5" sx={{ ml: 2 }}>
            Coetsier Thomas
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
            mr: 20,
          }}
        >
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              sx={{ textDecoration: 'none', mr: 5 }}
              color={'#FFFFFF'}
            >
              <NavButton text={section} />
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
