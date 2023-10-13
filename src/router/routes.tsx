import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "../layout/Layout";

// サンプルページ
import { ImageListPage } from "../pages/sample/ImageListPage";
import { ImageNewPage } from "../pages/sample/ImageNewPage";
import { SettingPlanPage } from "../pages/sample/SettingPlanPage";
import { SettingEmailPage } from "../pages/sample/SettingEmailPage";
import { SettingPasswordPage } from "../pages/sample/SettingPasswordPage";
import { SettingNotificationDesktopPage } from "../pages/sample/SettingNotificationDesktopPage";
import { SettingNotificationEmailPage } from "../pages/sample/SettingNotificationEmailPage";

import { TopPage } from "../pages/top/TopPage";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Admin } from "../pages/admin/Admin";
import { SignUp } from "../pages/admin/signup/SignUp";

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
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Admin" element={<Admin />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};
