import API from "../utils/API";

const REQUESTED = 'photo_gallery/user/requested';
const RECEIVED = 'photo_gallery/user/received';
const CLEANED = 'photo_gallery/user/cleaned';
const NOT_RECEIVED = 'photo_gallery/user/not_received';

const requested = () => ({
  type: REQUESTED
});

const received = (data) => ({
  type: RECEIVED,
  payload: data
});

const notReceived = () => ({
  type: NOT_RECEIVED
})

export const cleaned = () => ({
  type: CLEANED
})

export const loadUserInfo = (albumId) => (dispatch) => {
  dispatch(requested());

  API
    .get(`/albums/${albumId}?_expand=user`)
    .then(({data}) => dispatch(received(data)))
    .catch(() => dispatch(notReceived()));
}

const initialState = {
  isLoading: false,
  data: {}
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
    case NOT_RECEIVED:
      return {
        ...state,
        isLoading: false,
        data: {}
      }
    case CLEANED:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
