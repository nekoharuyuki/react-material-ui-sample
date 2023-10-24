import { FC } from "react";
import { Box, Container, Stack, Typography } from '@mui/material';
import { SettingsNotifications } from "./settings-notifications";
import { SettingsPassword } from "./settings-password";

export const SettingsPage: FC = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">
            Settings
          </Typography>
          <SettingsNotifications />
          <SettingsPassword />
        </Stack>
      </Container>
    </Box>
  )
};
