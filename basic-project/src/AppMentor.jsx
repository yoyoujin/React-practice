import React, { useState } from 'react';

const AppMentor = () => {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentor: {
      name: '밥',
      title: '시니어개발자',
    },
  });

  const handleNameChange = () => {
    const name = prompt(`what's your mentor's name?`);
    setPerson((person) => ({ ...person, mentor: { ...person.mentor, name } }));
  };

  const handleTitleChange = () => {
    const title = prompt(`what's your mentor's title?`);
    setPerson((person) => ({ ...person, mentor: { ...person.mentor, title } }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button onClick={handleNameChange}>멘토 이름 바꾸기</button>
      <button onClick={handleTitleChange}>멘토 타이틀 바꾸기</button>
    </div>
  );
};

export default AppMentor;
