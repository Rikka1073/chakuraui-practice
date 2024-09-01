import { FC, memo } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/layout/user/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <>
      <HeaderLayout children />
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <UserCard imageUrl="https://picsum.photos/800" userName="トーマス" fullName="Totia Masafumi" />
        </WrapItem>
      </Wrap>
    </>
  );
});
