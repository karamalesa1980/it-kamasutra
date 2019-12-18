const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
   users: [
     {id: 1, avatarUrl: 'https://vokrug.tv/pic/person/4/a/0/6/4a0628baf22d46d29e456a58892d3291.jpeg', followed: false, fullname: 'Yuriy P.', status: 'I am a Web_Developer', location: {city: 'Severodonetsk', country: 'Ukraine'}},
     {id: 2, avatarUrl: 'http://m.kino-teatr.ru/acter/foto/ros/347764.jpg', followed: false, fullname: 'Marina P.', status: 'I am a Web_Developer', location: {city: 'Severodonetsk', country: 'Ukraine'}},
     {id: 3, avatarUrl: 'https://uznayvse.ru/images/stories/uzn_1375118183.jpg', followed: false, fullname: 'Artem P.', status: 'I am a Web_Developer', location: {city: 'Severodonetsk', country: 'Ukraine'}},
   ]
  
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: 
      return {...state, users: [...state.users, action.users]}    
     
    default:              // default: не забывай а то ошибка.
      return state;  
  }
}

export default usersReducer;

export const followAC = (userId) => {
  return {
    type: FOLLOW, userId
  }
}


export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW, userId
  }
}

export const setUsersAC = (users) => {
  return {
    type: SET_USERS, users
  }
}


