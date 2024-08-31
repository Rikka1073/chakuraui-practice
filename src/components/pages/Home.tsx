import { memo } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Home = memo(() => {
  return (
    <>
      <HeaderLayout children />
      <p>HOMEページです</p>
    </>
  );
});
