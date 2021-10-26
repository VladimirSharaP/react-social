const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const UPDATE_CURRENT_PAGE = 'UPDATE-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};

export const findUsersReduser = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.usersId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
            

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.usersId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };

        case SET_USERS: 
            return {...state, users: [...state.users, ...action.users]};
            
        case SET_USERS_TOTAL_COUNT: 
            return {...state, totalUsersCount: action.totalUsersCount};

        case UPDATE_CURRENT_PAGE: 
            return {...state, currentPage: action.currentPage};
            
        default:
            return state;
    }
}

export const followActionCreator = (usersId) => ({type: FOLLOW, usersId});

export const unfollowActionCreator = (usersId) => ({type: UNFOLLOW, usersId});

export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export const setUsersTotalCountActionCreator = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount});

export const updateCurrentPageActionCreator = (currentPage) => ({type: UPDATE_CURRENT_PAGE, currentPage});