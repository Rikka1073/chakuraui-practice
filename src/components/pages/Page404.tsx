import { memo } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Page404 = memo(() => {
  return (
    <>
      <HeaderLayout children />
      <p>404ページです</p>
    </>
  );
});
