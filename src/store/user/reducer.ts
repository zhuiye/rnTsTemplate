import { Reducer } from "redux";
import { UserState, UserActionTypes } from "./types";

// Type-safe initialState!
const initialState: UserState = {
  name: "hengcheng",
  password: "123456",
  login: false
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.DO_LOGIN: {
      return { ...state, login: true };
    }
    case UserActionTypes.LOGIN_OUT: {
      return { ...state, login: false };
    }

    default: {
      return state;
    }
  }
};
// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as userReducer };
