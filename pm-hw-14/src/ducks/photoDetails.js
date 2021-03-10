import API from "../utils/API";

const REQUESTED = 'photo_gallery/photo_details/requested';
const RECEIVED = 'photo_gallery/photo_details/received';

const requested = () => ({
  type: REQUESTED
})

const received = (data) => ({
  type: RECEIVED,
  payload: data
})

export const loadDetails = (id) => (dispatch) => {
  dispatch(requested());

  API
    .get(`/photos/${id}?_expand=album`)
    .then(({data}) => dispatch(received(data)));
};

const initialState = {
  isLoading: false,
  data: undefined
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
    default:
      return state;
  }
}

export default reducer;
