import React from 'react';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avartar
          image='https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          name='Bob'
          size={300}
        />
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
}

function Avartar({ image, name, size }) {
  return (
    <div>
      <img src={image} alt={`${name}`} width={size} height={size} style={{ borderRadius: '50%' }} />
    </div>
  );
}
