import { action } from "typesafe-actions";
import { UserActionTypes } from "./types";

export const doLogin = () => action(UserActionTypes.DO_LOGIN);
export const loginOut = () => action(UserActionTypes.LOGIN_OUT);
