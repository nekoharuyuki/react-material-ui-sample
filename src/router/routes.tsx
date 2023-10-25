import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "../layout/Layout";

// サンプルページ
import { ImageListPage } from "../pages/imagelist/ImageListPage";
import { ImageNewPage } from "../pages/imagenew/ImageNewPage";
import { SettingPlanPage } from "../pages/sample/SettingPlanPage";
import { SettingEmailPage } from "../pages/sample/SettingEmailPage";
import { SettingPasswordPage } from "../pages/sample/SettingPasswordPage";
import { SettingNotificationDesktopPage } from "../pages/sample/SettingNotificationDesktopPage";
import { SettingNotificationEmailPage } from "../pages/sample/SettingNotificationEmailPage";

import { TopPage } from "../pages/top/TopPage";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Admin } from "../pages/admin/Admin";
import { UserManagementPage } from "../pages/user/UserManagementPage";
import { SignIn } from "../pages/signin/SignIn";
import { SettingsPage } from "../pages/setting/settings"
import { AccountPage } from "../pages/setting/account/account"

export const AppRoutes: FC = () => {
  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/images" element={<ImageListPage />} />
            <Route path="/images/new" element={<ImageNewPage />} />
            <Route path="/settings/plan" element={<SettingPlanPage />} />
            <Route path="/settings/email" element={<SettingEmailPage />} />
            <Route path="/settings/password" element={<SettingPasswordPage />} />
            <Route
              path="/settings/notification-desktop"
              element={<SettingNotificationDesktopPage />}
            />
            <Route
              path="/settings/notification-email"
              element={<SettingNotificationEmailPage />}
            />

            <Route path="/" element={<TopPage />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/UserManagement" element={<UserManagementPage />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Settings" element={<SettingsPage />} />
            <Route path="/Account" element={<AccountPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};
