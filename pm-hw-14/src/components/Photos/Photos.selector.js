import {createSelector, createStructuredSelector} from "reselect";

const PhotosSelector = (state) => state.photos;

const isLoadingSelector = createSelector(
  PhotosSelector,
  ({isLoading}) => isLoading
);

const isAddLoadingSelector = createSelector(
  PhotosSelector,
  ({isAddLoading}) => isAddLoading
)

const dataSelector = createSelector(
  PhotosSelector,
  ({data}) => data
)

const selector = createStructuredSelector({
  isLoading: isLoadingSelector,
  isAddLoading: isAddLoadingSelector,
  data: dataSelector
});

export default selector;
