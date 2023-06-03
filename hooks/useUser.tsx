import { UserContext } from "@/context/user/UserContext";
import { useContext } from "react";
export const useUsers = () => {
  const users = useContext(UserContext);
  if (!users) throw new Error("useUser must be used within a userProvider");
  return users;
};
