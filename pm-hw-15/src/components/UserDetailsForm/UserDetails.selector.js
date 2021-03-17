import {createSelector} from "reselect";

const infoSelector = (state) => state.info;

const selector = createSelector(
  infoSelector,
  (info) => info
)

export default selector;

