import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import DashboardPage from '../../pages/Dashboard';

function PageBody() {
  return (
    <Box
      sx={{
        position: 'relative',
        top: '60px',
        height: 'calc(100vh - 60px)',
        overflowX: 'hidden',
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Box>
  );
}

export default PageBody;
