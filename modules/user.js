const USER = "user/USER";

export const setUser = (user) => ({ type: USER, user });

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      state = action.user;
      return state;
    default:
      return state;
  }
};

export default user;
