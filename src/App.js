import React from 'react';
import imageInSrc from './imageInSrc.jpg';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

          <h1 className="title">Your name here</h1>


          <img src={imageInSrc} alt="imageInSrc" />


          <img src={"/imageInPublic.jpg"} alt="imageInPublic"/>

          </div>

          <video width="320" height="240" controls>

          <source src="myVideo.mp4" type="video/mp4" />


          </video>
    </div>
  );
}

export default App;
