import API from "../utils/API";

const REQUESTED = 'photo_gallery/album/user_stats_requested';
const RECEIVED = 'photo_gallery/album/user_stats_received';

const requested = () => ({
  type: REQUESTED
});

const received = (data) => ({
  type: RECEIVED,
  payload: data
})

export const loadUserInfo = (albumId) => (dispatch) => {
  dispatch(requested());

  API
    .get(`/albums/${albumId}?_expand=user`)
    .then(({data}) => dispatch(received(data)))
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
        isUserStatsLoading: true
      }
    case RECEIVED:
      const {user: { name, username }} = action.payload;

      return {
        ...state,
        isUserStatsLoading: false,
        data: {
          name,
          username
        }
      }
    default:
      return state
  }
}

export default reducer;
