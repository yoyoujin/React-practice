import React from 'react';
import Avartar from './Avartar';

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className='profile'>
      <Avartar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

// 위와같이 구조분해 할당을 사용할 수 있음
// export default function Profile(props) {
//   // props라는 객체로 전달됨
//   return (
//     <div className='profile'>
//       <img className='photo' src={props.image} alt='avatar' />
//       <h1>{props.name}</h1>
//       <p>{props.title}</p>
//     </div>
//   );
// }
