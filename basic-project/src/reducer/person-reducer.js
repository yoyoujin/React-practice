export const personReducer = (person, action) => {
  // 전달받은 person 기존 객체를 action에 따라서 새로운 person 객체를 만들어 return
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) =>
          mentor.name === prev ? { ...mentor, name: current } : mentor
        ),
      };
    }
    case 'added': {
      const { name, title } = action;
      return { ...person, mentors: [...person.mentors, { name, title }] };
    }
    case 'deleted': {
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
      };
    }
    default: {
      throw Error(`알 수 없는 액션타입 🥹 : ${action.type}`);
    }
  }
};
