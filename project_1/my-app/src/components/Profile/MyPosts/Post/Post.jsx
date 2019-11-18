import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div>
     
      <div className={classes.item}>
        <img src="avatar.jpg"></img><br/>
        {props.message}
        <p>Leo in vitae turpis massa sed.
          Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin.
          Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
          Risus commodo viverra maecenas accumsan lacus.
          Aliquet nibh praesent tristique magna sit amet purus gravida.
          Habitant morbi tristique senectus et netus et.
          Ornare quam viverra orci sagittis eu volutpat odio.
          Diam maecenas ultricies mi eget mauris pharetra et ultrices neque.
          Porttitor massa id neque aliquam vestibulum.
          Accumsan lacus vel facilisis volutpat est velit egestas dui id.
          Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus.
        </p>
        <span>Like: {props.like}</span>
      </div>
    </div>
  )
}

export default Post;