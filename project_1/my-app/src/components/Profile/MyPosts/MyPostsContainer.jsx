import MyPosts from './MyPosts';
import { updatenewpostTextactionCreator, addpostactionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux'

// const MyPostsContainer = (props) => {

//   let state = props.store.getState();

//   let addpost = () => {
//     props.store.dispatch(addpostactionCreator())
//   }

//   let onpostChange = (text) => {
//     const action = updatenewpostTextactionCreator(text);
//     props.store.dispatch(action)
//   }

//   return (
//    <MyPosts updatenewpostText={onpostChange} addpost={addpost} profileReducer={state.profileReducer}/>
//   )
// }

let mapStateToProps = (state) => {
  return {
    profileReducer: state.profileReducer
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addpost: () => {
      dispatch(addpostactionCreator());},
      updatenewpostText: (text) => {
      dispatch(updatenewpostTextactionCreator(text));}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

 

export default MyPostsContainer;