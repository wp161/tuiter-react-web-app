import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {API_PATH} from "./services/tuits-service";

function App() {
    console.log(API_PATH)
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
              <Route path="/*" element={<Labs/>}/>
              <Route path="/hello" element={<HelloWorld/>}/>
              <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     {/*<img src={logo} className="App-logo" alt="logo" />*/}
    //     {/*<p>*/}
    //     {/*  Edit <code>src/App.js</code> and save to reload.*/}
    //     {/*</p>*/}
    //     {/*<a*/}
    //     {/*  className="App-link"*/}
    //     {/*  href="https://reactjs.org"*/}
    //     {/*  target="_blank"*/}
    //     {/*  rel="noopener noreferrer"*/}
    //     {/*>*/}
    //     {/*  Learn React*/}
    //     {/*</a>*/}
    //   </header>
    // </div>
  );
}

export default App;
