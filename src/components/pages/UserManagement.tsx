import { FC, memo, useCallback, useEffect } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/layout/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserModal } from "../organisms/layout/user/UserModal";
import { useSelectUser } from "../../hooks/useSelectUsers";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onselectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => {
    getUsers();
  }, []);

  const onClickUser = useCallback(
    (id: number) => {
      console.log(id);
      onselectUser({ id, users, onOpen });
    },
    [users, onselectUser, onOpen]
  );
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
                <UserCard imageUrl="https://picsum.photos/800" userName={user.username} fullName={user.name} onClick={onClickUser} id={user.id} />
              </WrapItem>
            );
          })}
        </Wrap>
      )}
      <UserModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  );
});
