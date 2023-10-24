import { FC, useState, useEffect, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar as MuiToolbar,
  IconButton,
  Typography,
  Theme,
  useMediaQuery
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Menu as MenuIcon } from "@mui/icons-material";
import { NavigationDrawer } from "../components/NavigationDrawer";
import { AppNavigationList } from "../components/AppNavigationList/AppNavigationList";
import { Link } from "react-router-dom";
import Topbar from "../components/templates/Topbar";
import { useAuthContext } from "../lib/firebase/Auth";

const Copyright = () => {
  return (
    <Typography variant="body2" color="#3d3d3d" align="center">
      {'Copyright '}
      <Link color="inherit" to="https://nekoharuyuki.github.io/Privacy.Policy.io/">
        Neko Haruyuki
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  padding: theme.spacing(0, 2.5),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 2.5)
  }
}));

export const Layout: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isPc = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));

  // URLが変わった時に、SPの場合は閉じる
  const { pathname } = useLocation();
  useEffect(
    () => {
      if (!isPc && isOpen) {
        setIsOpen(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* アプリケーションバー */}
      <AppBar
        position="fixed"
        sx={{
          // PC表示のpermanentでAppBarよりもzIndexが大きかったので+1して上に上げる
          zIndex: (theme) => (isPc ? theme.zIndex.drawer + 1 : undefined)
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
          sx={{
            width: 1300,
            display: "flex",
            justifyContent: "flex-end",
          }}
          >
            <Topbar />
          </Box>
        </Toolbar>
      </AppBar>
      {/* NavigationDrawer */}
      <NavigationDrawer
        isOpen={isOpen}
        variant={isPc ? "permanent" : "temporary"}
        PaddingComponent={Toolbar}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {AppNavigationList}
      </NavigationDrawer>
      {/* 右側レイアウト */}
      <Box sx={{ flex: "1 1 0", display: "flex", flexDirection: "column" }}>
        <Toolbar />
        <Box sx={{ flex: "1 1 auto", padding: 2, overflow: "hidden" }}>
          <Outlet />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: (theme) => theme.spacing(1, 2),
            backgroundColor: "#eee"
          }}
        >
          <Copyright />
        </Box>
      </Box>
    </Box>
  );
};
