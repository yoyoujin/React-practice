import { createContext, useState } from 'react';

// 데이터를 이 컨텍스트에 담고있음!
export const DarkModeContext = createContext();

// 우산 컴포넌트
// children을 감싸는 , 데이터를 감싸는 우산역할
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
