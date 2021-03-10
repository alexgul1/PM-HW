import API from "../utils/API";

const REQUESTED = 'photo_gallery/photo_previews/requested';
const RECEIVED = 'photo_gallery/photo_previews/received';
const ADD_LOAD_REQUESTED = 'photo_gallery/photo_previews/add_load_requested';
const ADD_LOAD_RECEIVED = 'photo_gallery/photo_previews/add_load_received';
const ALL_UPLOADED = 'photo_gallery/photo_previews/all_uploaded';
const CLEANED = 'photo_gallery/user/user_stats_cleaned';


/*TODO  clear store(reset to initial) when move out from page*/


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

const allUploaded = () => ({
  type: ALL_UPLOADED
})

export const cleaned = () => ({
  type: CLEANED
})

export const loadPhotos = (albumId) => (dispatch) => {
  dispatch(requested());

  let url = '/photos?_page=1&_limit=6';
  if (albumId !== undefined) {
    url += `&albumId=${albumId}`;
  }

  /*TODO added handler on non-existing album*/
  API
    .get(url)
    .then(({data}) => dispatch(received(data)));
}

export const additionalLoadPhoto = (page, albumId) => (dispatch) => {
  dispatch(addLoadRequested());

  let url = `/photos?_page=${page}&_limit=6`;
  if (albumId !== undefined) {
    url += `&albumId=${albumId}`;
  }

  API
    .get(url)
    .then(({data}) => {
      if (data.length === 0) {
        dispatch(allUploaded())
      }
      dispatch(addLoadReceived(data))
    });
}

const initialState = {
  isLoading: false,
  isAddLoading: false,
  isAllUploaded: false,
  data: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED:
      return {
        ...state,
        isLoading: true,
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
    case ALL_UPLOADED:
      return {
        ...state,
        isAllUploaded: true
      }
    case CLEANED:
      return initialState;
    default:
      return state;
  }
}

export default reducer
