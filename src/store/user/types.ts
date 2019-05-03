export enum UserActionTypes {
  DO_LOGIN = "@@user/do_login",
  LOGIN_OUT = "@@user/login_out"
}

// 用户的state--
export interface UserState {
  name: string;
  password: string;
  login: boolean;
}
