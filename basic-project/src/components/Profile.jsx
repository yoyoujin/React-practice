import React from 'react';
import Avatar from './Avatar';

const Profile = ({ image, name, title, tag }) => {
  return (
    <div className='profile'>
      <Avatar image={image} tag={tag} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
};

export default Profile;
