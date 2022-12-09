import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Homepage from "./Homepage";
// import background from './images/img-bg.png';

function App() {
  // const myStyle={
  //   backgroundImage: `url(${background})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   height: '100%',
  //   width: '100%'
  // };
  return (
    <div className="App" >
      <Homepage />
    </div>
    // style={myStyle}
  );
}

export default App;
