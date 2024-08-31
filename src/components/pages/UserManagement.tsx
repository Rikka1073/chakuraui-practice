import { memo } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";

export const UserManagement = memo(() => {
  return (
    <>
      <HeaderLayout children />
      <p>ユーザー管理ページです</p>
    </>
  );
});
