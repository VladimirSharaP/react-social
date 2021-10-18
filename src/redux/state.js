let renderEntireTree = () => {

}

let state = {
    profile: {
      postData: [
        {id: 1, message: 'Hi petuch!', likesCount: 12},
        {id: 2, message: 'EBAT` TVOY LISIY CHEREP!', likesCount: 18},
        {id: 3, message: 'YA EGO VSE EBAL!', likesCount: 7}
      ],
      newPostText: ''
    },
    dialogs: {
      dialogsData: [
        {id: 1, name: 'Volodya'},
        {id: 2, name: 'Sanya'},
        {id: 3, name: 'Sergo'},
        {id: 4, name: 'Mark'}
      ],
      messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Darova'},
        {id: 3, message: 'Privetylchenko'},
        {id: 4, message: 'Privet'}
      ]
    }
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profile.newPostText,
    likesCount: 0
  };

  state.profile.postData.push(newPost);
  state.profile.newPostText = '';
  renderEntireTree(state);
};

export let updateNewPostText = (newPostText) => {
  state.profile.newPostText = newPostText;
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
}


export default state;