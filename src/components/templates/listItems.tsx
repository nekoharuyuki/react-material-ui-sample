import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from '@mui/material/Link';

export const mainListItems = (
  <React.Fragment>
    <Link href="#" color="inherit" underline="none">
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="管理画面トップ" />
      </ListItemButton>
    </Link>
    <Link href="#" color="inherit" underline="none">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="ダッシュボード" />
      </ListItemButton>
    </Link>
    <Link href="#" color="inherit" underline="none">
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="分析" />
      </ListItemButton>
    </Link>
    <Link href="#" color="inherit" underline="none">
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="リスト" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset disableSticky>
      オプション機能
    </ListSubheader>
    <Link href="#" color="inherit" underline="none">
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="アカウント情報" />
      </ListItemButton>
    </Link>
    <Link href="#" color="inherit" underline="none">
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="設定" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const tertiaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      管理者設定
    </ListSubheader>
    <Link href="#" color="inherit" underline="none">
      <ListItemButton>
        <ListItemIcon>
          <AdminPanelSettingsIcon />
        </ListItemIcon>
        <ListItemText primary="アカウント管理" />
      </ListItemButton>
    </Link>
    <Link href="#" color="inherit" underline="none">
      <ListItemButton>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="お知らせ設定" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);