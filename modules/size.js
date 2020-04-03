const WINDOWSIZE = "loading/WINDOWSIZE";

export const setWindowSize = (x, y) => ({ type: WINDOWSIZE, x, y });

const initialState = { x: 0, y: 0 };

const size = (state = initialState, action) => {
  switch (action.type) {
    case WINDOWSIZE:
      state = { x: action.x, y: action.y };
      return state;
    default:
      return state;
  }
};

export default size;
