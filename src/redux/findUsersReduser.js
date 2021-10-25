const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id: 1, photoURL: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146', followed: false, fullName: 'Vladimir S.', status: 'Good morning!', location: {city: 'Novosibirsk', country: 'Russia'}},
        {id: 2, photoURL: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146', followed: true, fullName: 'Dmitry P.', status: 'Life is good!', location: {city: 'Novosibirsk', country: 'Russia'}},
        {id: 3, photoURL: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146', followed: true, fullName: 'Margo T.', status: '...', location: {city: 'Krasnodar', country: 'Russia'}}
      ],
      newPostText: ''
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
            
        default:
            return state;
    }
}

export const followActionCreator = (usersId) => ({type: FOLLOW, usersId});

export const unfollowActionCreator = (usersId) => ({type: UNFOLLOW, usersId});

export const setUsersActionCreator = (users) => ({type: SET_USERS, users});