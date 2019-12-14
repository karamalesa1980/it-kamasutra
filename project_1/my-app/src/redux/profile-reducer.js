const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    {id: 1, message: 'Hi Yuriy', like: '15'},
    {id: 2, message: 'Hi Anton', like: '25'},
    {id: 3, message: 'Hi Tema', like: '5'}
  ],
  
  newpostText: 'karamalesa!!!',
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      let newpost = {
        id: 4,
        message: state.newpostText,
        like: 3
      };
      let stateCopy = {...state}; // копируем state
      stateCopy.posts = [...state.posts]; // копируем state.posts
      stateCopy.posts.push(newpost);
      stateCopy.newpostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state}; // копируем state

      stateCopy.newpostText = action.newtext;
      return stateCopy;
    }  
    default:              // default: не забывай а то ошибка.
      return state;  
  }
}

export default profileReducer;

export const addpostactionCreator = () => {
  return {
    type: ADD_POST
  }
}



export const updatenewpostTextactionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newtext: text
  }
}

