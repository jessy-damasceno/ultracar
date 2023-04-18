import { Box, Typography } from '@mui/material';
import type { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: FC = () => {
  const error = useRouteError() as any;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="background.default"
    >
      <img src="/ultracar_logo.png" alt="Logo da empresa" width={300} />
      <Typography variant="h2" component="h2" align="center" mt={4} mb={2}>
        Oops!
      </Typography>
      <Typography variant="h5" align="center" mb={4}>
        Parece que algo deu errado.
      </Typography>
      <Typography variant="body1" align="center" mb={4}>
        <i>{error.statusText || error.message}</i>
      </Typography>
    </Box>
  );
};

export default ErrorPage;
