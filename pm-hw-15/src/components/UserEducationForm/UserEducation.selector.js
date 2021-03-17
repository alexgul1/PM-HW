import {createSelector} from "reselect";

const infoSelector = (state) => state.education;

const selector = createSelector(
  infoSelector,
  (educations) => educations
)

export default selector;

