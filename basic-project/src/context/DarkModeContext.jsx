import { createContext, useState } from 'react';

export const DarkModeContext = createContext();
// 데이터를 이 컨텍스트에 담고있음

export const DarkModeProvider = ({ children }) => {
  // 데이터를 보여주는 우산 컴포넌트

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
    // value - 자식컴포넌트와 공유하고 싶은 것들 , children - 자식 컴포넌트
  );
};
