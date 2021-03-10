import {createSelector, createStructuredSelector} from "reselect";

const PhotoPreviewsSelector = (state) => state.photos;

const isLoadingSelector = createSelector(
  PhotoPreviewsSelector,
  ({isLoading}) => isLoading
);

const isAddLoadingSelector = createSelector(
  PhotoPreviewsSelector,
  ({isAddLoading}) => isAddLoading
)

const dataSelector = createSelector(
  PhotoPreviewsSelector,
  ({data}) => data
)

const selector = createStructuredSelector({
  isLoading: isLoadingSelector,
  isAddLoading: isAddLoadingSelector,
  data: dataSelector
});

export default selector;
