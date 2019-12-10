const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
  switch(action.type) {
    case ADD_POST:
      let newpost = {
        id: 4,
        message: state.newpostText,
        like: 3
      };
      state.posts.push(newpost);
      state.newpostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newpostText = action.newtext;
      return state;
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

