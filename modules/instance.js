const AXIOSINIT = "instance/AXIOSINIT";

export const axiosInit = (axios) => ({ type: AXIOSINIT, axios });

const initialState = {};

const instance = (state = initialState, action) => {
  switch (action.type) {
    case AXIOSINIT:
      state = action.axios;
      return state;
    default:
      return state;
  }
};

export default instance;
