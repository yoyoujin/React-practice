function personReducer(person, action) {
  // 받아온 person이라는 기존 객체를 action했는지 확인(더했는지, 업데이트했는지, 삭제했는지 등등)해서
  // 새로운 person이라는 객체를 반환하도록 하는 함수를 만듬!
  switch ((action, type)) {
    case 'updated':
      {
        const { prev, current } = action;
        // const prev = action.prev
        // const prev = action.current
        // 위와 같음, 구조분해 할당으로 표현함
      }
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };

    case 'added': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [{ name, title }, ...person.mentors],
      };
    }

    case 'deleted': {
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
      };
    }
    default: {
      throw Error(`알 수 없는 액션타입! : ${action.type}`);
    }
  }
}
