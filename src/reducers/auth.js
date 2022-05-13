import { AUTH, LOGOUT } from '../constants/actionTypes';
const authReducer = (state = { authUser: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));

      return { ...state, authUser: action?.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authUser: null };
    default:
      return state;
  }
};
export default authReducer;
