const SET_AUTH_USER_DATA = 'SET-USER-DATA';

let initialState = {
    authUser: {
        userId: null,
        email: null,
        login: null,
    },
    isAuth: false,
    isFetching: false
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                authUser: action.authUser,
                isAuth: true
            };

             
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, authUser: {userId, email, login}});
