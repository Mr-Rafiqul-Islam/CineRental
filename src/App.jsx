import { useState } from "react";
import { MovieContext } from "./context";
import Home from "./pages/Home";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <MovieContext.Provider value={{ cartData, setCartData }}>
      <Home />
    </MovieContext.Provider>
  );
}

export default App;
