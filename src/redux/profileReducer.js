const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    userProfile: null,
    postData: [
        {id: 1, message: 'Hi!', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 18},
        {id: 3, message: 'Nice!', likesCount: 7}
      ],
      newPostText: ''
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            };

        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});

export const updateNewPostText = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, text: newPostText});

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
