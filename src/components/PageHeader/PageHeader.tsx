import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Navigation from '../Navigation/Navigation';

interface HeaderProps {
  appName?: string;
}

function PageHeader({ appName }: HeaderProps) {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        borderBottomColor: 'darkGrey.light',
      }}
    >
      <Toolbar>
        <Button to="/" component={Link} style={{ padding: 0, minWidth: 'auto' }}>
          <AcUnitIcon fontSize="large" color="success" />
        </Button>
        <Typography
          color={'secondary.main'}
          sx={{
            fontWeight: 'fontWeightBold',
            margin: '0 16px',
            display: 'flex',
            flexGrow: 1,
          }}
        >
          {appName}
        </Typography>

        <Navigation />

        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: '50%',
            width: 35,
            height: 35,
            fontSize: '13px',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          RS
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default PageHeader;
