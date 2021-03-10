import API from "../utils/API";

const REQUESTED = 'photo_gallery/user/user_stats_requested';
const RECEIVED = 'photo_gallery/user/user_stats_received';
const CLEANED = 'photo_gallery/user/user_stats_cleaned';

const requested = () => ({
  type: REQUESTED
});

const received = (data) => ({
  type: RECEIVED,
  payload: data
});

export const cleaned = () => ({
  type: CLEANED
})

/*TODO added handler on non-existing album*/
export const loadUserInfo = (albumId) => (dispatch) => {
  dispatch(requested());

  API
    .get(`/albums/${albumId}?_expand=user`)
    .then(({data}) => dispatch(received(data)));
}

const initialState = {
  isLoading: false,
  data: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVED:
      const {user: { name, username }} = action.payload;

      return {
        ...state,
        isLoading: false,
        data: {
          name,
          username
        }
      };
    case CLEANED:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
