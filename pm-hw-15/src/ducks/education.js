const SET_EDUCATION = 'resume_builder/education/set';

export const setEducation = (payload) => ({
  type: SET_EDUCATION,
  payload
})

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (SET_EDUCATION): {
      return action.payload.schools;
    }
    default:
      return state
  }
}

export default reducer;
