import React from 'react';

function BorderedImageFrame(props) {
  return (
    <img src={props.imgurl} style={{ border: '4px solid red' }} />
  )
}

export default BorderedImageFrame;