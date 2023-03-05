import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Tab, Tabs } from '@mui/material';
import { Settings } from '@mui/icons-material';

const pages = ['/', '/dashboard'];

function Navigation() {
  const [pageIndex, setPageIndex] = React.useState(0);
  const location = useLocation();

  React.useEffect(() => {
    if (pages.indexOf(location.pathname) !== -1) {
      setPageIndex(pages.indexOf(location.pathname));
    }
  }, [location.pathname]);

  const changePage = (event: React.SyntheticEvent, newPage: number) => {
    setPageIndex(newPage);
  };

  return (
    <Box m={2}>
      <Tabs
        value={pageIndex}
        onChange={changePage}
        sx={{
          '& .MuiTab-root': {
            fontWeight: 'fontWeightBold',
          },
        }}
      >
        <Tab sx={{ minHeight: '56px' }} component={Link} label="Home" to="/" />
        <Tab
          sx={{ minHeight: '56px' }}
          component={Link}
          label="Dashboard"
          to="/dashboard"
          icon={<Settings fontSize="small" />}
          iconPosition="end"
        />
      </Tabs>
    </Box>
  );
}

export default Navigation;
