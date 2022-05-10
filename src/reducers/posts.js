import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  LIKEPOST,
  DELETE,
} from '../constants/actionTypes';
const initialState = {
  posts: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, posts: action.payload };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case LIKEPOST:
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id == action.payload._id ? action.payload : post
        ),
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id != action.payload),
      };
    default:
      return state;
  }
};
export default reducer;
