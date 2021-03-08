import {createSelector, createStructuredSelector} from "reselect";

const photoDetailsSelector = (state) => state.photoDetails;

const isLoadingSelector = createSelector(
  photoDetailsSelector,
  ({isLoading}) => isLoading
);

const dataSelector = createSelector(
  photoDetailsSelector,
  ({data}) => data
);

const selector = createStructuredSelector({
  isLoading: isLoadingSelector,
  data: dataSelector
});

export default selector;
