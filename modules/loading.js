const SHOWLOADING = "loading/SHOWLOADING";
const HIDELOADING = "loading/HIDELOADING";

export const showLoading = () => ({ type: SHOWLOADING });
export const hideLoading = () => ({ type: HIDELOADING });

const initialState = false;

const loading = (state = initialState, action) => {
  switch (action.type) {
    case SHOWLOADING:
      state = true;
      return state;
    case HIDELOADING:
      state = false;
      return state;
    default:
      return state;
  }
};

export default loading;
