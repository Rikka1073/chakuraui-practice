import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { LoginUserProvider } from "../provider/LoginUserProvider";

export const Router = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/user_managment" element={<UserManagement />} />
        <Route path="/home/setting" element={<Setting />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
