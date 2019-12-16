const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
  users: [
    {id: 1, followed: false, fullname: 'Yuriy P.', status: 'I am a Web_Developer', location: {city: 'Severodonetsk', country: 'Ukraine'}},
    {id: 2, followed: false, fullname: 'Marina P.', status: 'I am a Web_Developer', location: {city: 'Severodonetsk', country: 'Ukraine'}},
    {id: 3, followed: false, fullname: 'Artem P.', status: 'I am a Web_Developer', location: {city: 'Severodonetsk', country: 'Ukraine'}},
  ],
  
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
     
    default:              // default: не забывай а то ошибка.
      return state;  
  }
}

export default usersReducer;

export const followAC = () => {
  return {
    type: FOLLOW,
  }
}


export const unfollowAC = () => {
  return {
    type: UNFOLLOW,
  }
}

