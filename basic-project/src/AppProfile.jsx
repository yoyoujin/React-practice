import React from 'react';
import Profile from './components/Profile';

const AppProfile = () => {
  return (
    <>
      <Profile
        image='https://images.unsplash.com/photo-1681198643373-604e60c42c5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
        name='동산'
        title='프론트엔드 개발자'
        tag={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1680903126160-4bc46509d7a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        name='밤'
        title='백엔드 개발자'
        tag={false}
      />
      <Profile
        image='https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        name='오로라'
        title='데이터 개발자'
        tag={true}
      />
    </>
  );
};

export default AppProfile;
