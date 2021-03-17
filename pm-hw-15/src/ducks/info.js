const SET_INFO = 'resume_builder/info/set';

export const setInfo = (payload) => ({
  type: SET_INFO,
  payload
})

const initialState = {
  firstName: '',
  lastName: '',
  position: '',
  phone: '',
  email: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INFO:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default reducer;
