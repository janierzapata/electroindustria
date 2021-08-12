import { useState } from "react";
import { Login } from "./components/login/Login";
import { Page } from "./components/page/Page";


function App() {

  const [state, setstate] = useState(false)

  return (
    <div >
      { state?
       
      <Page />:<Login />

      }
    </div>
  );
}

export default App;
