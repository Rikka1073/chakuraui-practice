import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
};
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>();

  const onselectUser = useCallback((props: Props) => {
    const { id, users } = props;
    const targetUsr = users.find((user) => {
      user.id === id;
    });
    setSelectedUser(targetUsr);
    return { onselectUser, selectedUser };
  }, []);
};
