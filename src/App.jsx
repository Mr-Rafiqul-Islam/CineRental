import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Home from "./pages/Home";
import { CartReducer, initialState } from "./reducers/CartReducer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [ state, dispatch ] = useReducer(CartReducer, initialState);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Home />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
