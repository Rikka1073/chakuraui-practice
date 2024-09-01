import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoding] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoding(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            navigate("/home");
          } else {
            alert("ユーザーが見つかりません");
          }
        })
        .catch(() => {
          alert("ログインできません");
        })
        .finally(() => {
          setLoding(false);
        });
      return { login };
    },
    [navigate]
  );
  return { login, loading };
};
