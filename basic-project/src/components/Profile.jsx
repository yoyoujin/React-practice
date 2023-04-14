import React from 'react';

const Profile = ({ image, name, title, tag }) => {
  return (
    <div className='profile'>
      <img className='photo' src={image} alt='avatar' />
      {tag && <span className='tag'>New</span>}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
};

export default Profile;
