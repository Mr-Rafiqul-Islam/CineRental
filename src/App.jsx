import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Home from "./pages/Home";
import { CartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [ state, dispatch ] = useReducer(CartReducer, initialState);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Home />
        <ToastContainer />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
