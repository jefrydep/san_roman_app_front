import { Iuser } from "@/interfaces/interfaces";
import { AuthState } from "./AuthProvider";

type AuthActionType =
  | { type: "[Auth] - Login"; payload: Iuser }
  | { type: "[Auth] - logout" };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case "[Auth] - Login":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };

    case "[Auth] - logout":
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
      };
    default:
      return state;
  }
};
