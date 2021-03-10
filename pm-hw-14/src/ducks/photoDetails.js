import API from "../utils/API";

const REQUESTED = 'photo_gallery/photo_details/requested';
const RECEIVED = 'photo_gallery/photo_details/received';
const NOT_RECEIVED = 'photo_gallery/photo_details/not_received';
const CLEANED = 'photo_gallery/photo_details/cleaned';

const requested = () => ({
  type: REQUESTED
})

const received = (data) => ({
  type: RECEIVED,
  payload: data
})

const notReceived = () => ({
  type: NOT_RECEIVED
})

export const cleaned = () => ({
  type: CLEANED
})


export const loadDetails = (id) => (dispatch) => {
  dispatch(requested());

  API
    .get(`/photos/${id}?_expand=album`)
    .then(({data}) => dispatch(received(data)))
    .catch(() => dispatch(notReceived()));
};

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
      }
    case RECEIVED:
      const {albumId, id, title, url, album: {title: albumTitle}} = action.payload;

      return  {
        isLoading: false,
        data: {
          albumId,
          id,
          title,
          url,
          albumTitle
        }
      }

    case NOT_RECEIVED:
      return {
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
