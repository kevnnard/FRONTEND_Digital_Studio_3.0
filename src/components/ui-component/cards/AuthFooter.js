// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://digitalstudio.com.co" target="_blank" underline="hover">
      ® Digital Studio
    </Typography>
    <Typography variant="subtitle2" component={Link} href="https://developer-kevnnard.netlify.app" target="_blank" underline="hover">
      Creado por &copy; Kevnnard.com
    </Typography>
  </Stack>
);

export default AuthFooter;
