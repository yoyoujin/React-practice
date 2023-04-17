import React, { useReducer } from 'react';
import { personReducer } from './reducer/person-reducer';

const AppMentors = () => {
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  // useReducer(리듀서함수, 초기값)
  // dispatch: 리듀서함수를 호출할 수 있음

  const handleChangeName = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'updated', prev, current });
    // personReducer 함수에 두번째 인자로 전달됨!
  };

  const handleAddMentor = () => {
    const name = prompt(`새롭게 추가할 멘토의 이름은 무엇인가요?`);
    const title = prompt(`새롭게 추가할 멘토의 타이틀은 무엇인가요?`);
    dispatch({ type: 'added', name, title });
  };

  const handleDeleteMentor = () => {
    const name = prompt(`삭제하고싶은 멘토의 이름은 무엇인가요?`);
    dispatch({ type: 'deleted', name });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} : {mentor.title}
          </li>
        ))}
      </ul>
      <button onClick={handleChangeName}>멘토 이름 바꾸기</button>
      <button onClick={handleAddMentor}>멘토 추가하기</button>
      <button onClick={handleDeleteMentor}>멘토 삭제하기</button>
    </div>
  );
};

export default AppMentors;

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '주니어개발자',
    },
  ],
};
