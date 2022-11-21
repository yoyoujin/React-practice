import React from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    setPerson(() => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if(mentor.name === prev) {
          return {...mentor, name: current}
        }
        return mentor;
      })
    }))
  }

  const handleAdd = (() => {
    const name = prompt(`추가할 멘토의 이름은 무엇인가요?`)
    const title = prompt(`추가할 멘토의 직함은 무엇인가요?`)

    setPerson((person) => ({
      ...person,
      mentors: [{name, title},...person.mentor];
    }))
  })

  const handleDelete = () => {
    const deleteName = prompt(`삭제할 멘토의 이름은 무엇인가요?`);

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter(mentor => {
        mentor.name !== deleteName
      })
    }))
  }
}

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
      title: '시니어개발자',
    },
  ],
};
