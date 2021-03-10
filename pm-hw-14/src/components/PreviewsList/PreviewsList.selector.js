import {createSelector, createStructuredSelector} from "reselect";

const PreviewsListSelector = (state) => state.previewsList;

const isLoadingSelector = createSelector(
  PreviewsListSelector,
  ({isLoading}) => isLoading
);

const isAddLoadingSelector = createSelector(
  PreviewsListSelector,
  ({isAddLoading}) => isAddLoading
)

const isAllUploadedSelector = createSelector(
  PreviewsListSelector,
  ({isAllUploaded}) => isAllUploaded
)

const dataSelector = createSelector(
  PreviewsListSelector,
  ({data}) => data
)

const selector = createStructuredSelector({
  isLoading: isLoadingSelector,
  isAddLoading: isAddLoadingSelector,
  isAllUploaded: isAllUploadedSelector,
  data: dataSelector
});

export default selector;
