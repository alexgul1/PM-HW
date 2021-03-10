import {createSelector, createStructuredSelector} from "reselect";

const PreviewsListSelector = (state) => state.photos;

const isLoadingSelector = createSelector(
  PreviewsListSelector,
  ({isLoading}) => isLoading
);

const isAddLoadingSelector = createSelector(
  PreviewsListSelector,
  ({isAddLoading}) => isAddLoading
)

const dataSelector = createSelector(
  PreviewsListSelector,
  ({data}) => data
)

const selector = createStructuredSelector({
  isLoading: isLoadingSelector,
  isAddLoading: isAddLoadingSelector,
  data: dataSelector
});

export default selector;
