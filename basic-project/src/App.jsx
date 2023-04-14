import './App.css';

function App() {
  const list = ['사과', '바나나', '오렌지', '딸기', '포도'];
  return (
    <div className='App'>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
