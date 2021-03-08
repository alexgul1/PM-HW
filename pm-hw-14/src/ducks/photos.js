import API from "../utils/API";

const REQUESTED = 'album_explorer/photos/requested';
const RECEIVED = 'album_explorer/photos/received';
const ADD_LOAD_REQUESTED = 'album_explorer/photos/add_load_requested';
const ADD_LOAD_RECEIVED = 'album_explorer/photos/add_load_received';

const requested = () => ({
  type: REQUESTED
});

const received = (data) => ({
  type: RECEIVED,
  payload: data
});

const addLoadRequested = () => ({
  type: ADD_LOAD_REQUESTED
});

const addLoadReceived = (data) => ({
  type: ADD_LOAD_RECEIVED,
  payload: data
});

export const loadPhotos = () => (dispatch) => {
  dispatch(requested());

  API
    .get('/photos?_page=1&_limit=6')
    .then(({data}) => dispatch(received(data)));
}

export const additionalLoadPhoto = (page) => (dispatch) => {
  dispatch(addLoadRequested());

  API
    .get(`/photos?_page=${page}&_limit=6`)
    .then(({data}) => dispatch(addLoadReceived(data)));
}

const initialState = {
  isLoading: false,
  isAddLoading: false,
  data: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case ADD_LOAD_REQUESTED: {
      return {
        ...state,
        isAddLoading: true
      }
    }
    case RECEIVED:
      const data = action.payload.map(({id, title, thumbnailUrl: url}) => ({id, title, url}));

      return {
        ...state,
        isLoading: false,
        data
      }
    case ADD_LOAD_RECEIVED: {
      const filteredData = action.payload.map(({id, title, thumbnailUrl: url}) => ({id, title, url}));

      return {
        ...state,
        isAddLoading: false,
        data: [
          ...state.data,
          ...filteredData
        ]
      }
    }
    default:
      return state;
  }
}

export default reducer
