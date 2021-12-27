const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const UPDATE_CURRENT_PAGE = "UPDATE-CURRENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const IS_FETCHING = "IS-FETCHING";
const FOLLOWING_PROGRESS = "FOLLOWING-PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

export const findUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalUserCount: action.totalUserCount };

    case UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case IS_FETCHING:
      return { ...state, isFetching: !state.isFetching };

    case FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id)
      };

    default:
      return state;
  }
};

export const follow = (usersId) => ({ type: FOLLOW, usersId });

export const unfollow = (usersId) => ({ type: UNFOLLOW, usersId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setUsersTotalCount = (totalUserCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalUserCount,
});

export const updateCurrentPage = (currentPage) => ({
  type: UPDATE_CURRENT_PAGE,
  currentPage,
});

export const isFetchingData = () => ({ type: IS_FETCHING });

export const followingProgress = (isFetching, id) => ({
  type: FOLLOWING_PROGRESS,
  isFetching,
  id,
});
