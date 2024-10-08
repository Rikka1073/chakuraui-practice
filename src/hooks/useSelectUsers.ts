import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onselectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUsr = users.find((user) => {
      return user.id === id;
    });
    setSelectedUser(targetUsr!);
    onOpen();
  }, []);
  return { onselectUser, selectedUser };
};
