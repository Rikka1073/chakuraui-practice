import { FC, memo, useEffect } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/layout/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <HeaderLayout children />
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => {
            return (
              <WrapItem key={user.id} mx="auto">
                <UserCard imageUrl="https://picsum.photos/800" userName={user.username} fullName={user.name} />
              </WrapItem>
            );
          })}
        </Wrap>
      )}
    </>
  );
});
