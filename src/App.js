import React, { useState } from 'react';
import './App.css';
import MindARViewer from './mindar-viewer';
import MindARThreeViewer from './mindar-three-viewer';

function App() {
  const [started, setStarted] = useState("aframe");

  return (
      <div className="App">
          {started === 'aframe' && (
          <div style={{ width: "100vw", height: "100vh" }} className="container">
              <MindARViewer/>
              <video></video>
          </div>
          )}
        {/*<div className="control-buttons">
          {started === null && <button onClick={() => {setStarted('aframe')}}>Start AFRAME version</button>}
          {started === null && <button onClick={() => {setStarted('three')}}>Start ThreeJS version</button>}
          {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
        </div>

        {started === 'aframe' && (
            <div className="container">
              <MindARViewer/>
              <video></video>
            </div>
        )}

        {started === 'three' && (
            <div className="container">
              <MindARThreeViewer />
            </div>
        )}*/}
      </div>
  );
}

export default App;
