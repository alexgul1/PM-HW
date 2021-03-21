import {sortByDate} from "../utils/dateUtils";

const SET_EXPERIENCE = 'resume_builder/experience/set';

export const setExperience = (payload) => ({
  type: SET_EXPERIENCE,
  payload
})

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (SET_EXPERIENCE): {
      return action.payload.companies.sort(sortByDate);
    }
    default:
      return state
  }
}

export default reducer;
