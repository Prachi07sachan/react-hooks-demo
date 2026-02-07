import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function Child() {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}

export default function UseContextDemo() {
  const [theme, setTheme] = useState("light");

  return (
    <section>
      <h3>useContext</h3>
      <ThemeContext.Provider value={theme}>
        <Child />
        <button onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }>
          Toggle Theme
        </button>
      </ThemeContext.Provider>
    </section>
  );
}
