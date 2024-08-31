import { memo } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Setting = memo(() => {
  return (
    <>
      <HeaderLayout children />
      <p>設定ページです</p>{" "}
    </>
  );
});
