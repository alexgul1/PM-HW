import {createSelector, createStructuredSelector} from "reselect";

const UserInfoSelector = (state) => state.user;

const isLoadingSelector = createSelector(
  UserInfoSelector,
  ({isLoading}) => isLoading
)

const dataSelector = createSelector(
  UserInfoSelector,
  ({data}) => data
)

const selector = createStructuredSelector({
  isLoading: isLoadingSelector,
  data: dataSelector
})

export default selector;
