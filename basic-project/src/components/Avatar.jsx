import React from 'react';

const Avatar = ({ image, tag }) => {
  return (
    <>
      <img className='photo' src={image} alt='avatar' />
      {tag && <span className='tag'>New</span>}
    </>
  );
};

export default Avatar;
