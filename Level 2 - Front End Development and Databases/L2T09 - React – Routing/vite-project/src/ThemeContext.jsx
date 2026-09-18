import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, totalPrice, setTotalPrice }}
    >
      {children}
    </ThemeContext.Provider>
  );
};