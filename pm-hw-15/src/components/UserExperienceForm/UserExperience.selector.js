import {createSelector} from "reselect";

const infoSelector = (state) => state.experience;

const selector = createSelector(
  infoSelector,
  (experiences) => experiences
)

export default selector;

