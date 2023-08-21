import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import GenericTemplate from '../../templates/GenericTemplate';
import Accounts from './Account';

export default function Admin() {
  return (
    <GenericTemplate title={'アカウント管理'}>
      <Box sx={{ display: 'flex' }}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Accounts />
            </Paper>
          </Grid>
        </Container>
      </Box>
    </GenericTemplate>
  );
}
