
// import './App.css';
// import PublicRoutes from './PublicRoutes';
// import {BrowserRouter} from "react-router-dom";


// function App() {
//   return (
//    <BrowserRouter>
//    <PublicRoutes />
//    </BrowserRouter>
//   );
// }

// export default App;





import './App.css';
import PublicRoutes from './PublicRoutes';
import { BrowserRouter } from "react-router-dom";
import Mycontext from './context';
import { useState } from 'react';
import Header from "./component/header";

function App() {
  const [backgroundColor, setbackgroundColor] = useState("black")
  return (
    <Mycontext.Provider
      value={{
        backgroundColor: backgroundColor,
        changeColor: setbackgroundColor
      }}
    >
      <Header/>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>

    </Mycontext.Provider>
  );
}
export default App;

