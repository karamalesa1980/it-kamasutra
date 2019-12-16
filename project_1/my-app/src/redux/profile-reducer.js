const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    {id: 1, post: 'Hi Yuriy', like: '15'},
    {id: 2, post: 'Hi Anton', like: '25'},
    {id: 3, post: 'Hi Tema', like: '5'}
  ],
  
  newpostText: 'karamalesa!!!',
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      let newpost = state.newpostText;
      return {...state,
        newpostText: '',
        posts: [...state.posts, { id: 4, post: newpost, like: 3 }]
      }; // копируем state
      
    }
    case UPDATE_NEW_POST_TEXT: {
      return {...state,
        newpostText: action.newtext
      }; // копируем state
      
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

