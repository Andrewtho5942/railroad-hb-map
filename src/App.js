import React, { useEffect, useState } from "react";
 

export default function App() {
  const [scaleFactor, setScaleFactor] = useState(1);

useEffect(() => {
  const handleResize = () => {
    console.log("resized");
    const newScaleFactor = window.innerWidth / 1600;
    setScaleFactor(newScaleFactor);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

useEffect(() => {
  const handleOnLoad = () => {
    console.log("init scale sized");
    const newScaleFactor = window.innerWidth / 1600;
    setScaleFactor(newScaleFactor);
  };

  window.addEventListener('load', handleOnLoad);

  return () => {
    window.removeEventListener('load', handleOnLoad);
  };
}, []);

  return (
    <div style={{ backgroundColor: '#6B7280', height: '100vh', overflow: 'hidden' }}>
      <iframe
        id="RCR"  
        title="Railroad Intersection Map Window"
        width="1600"
        height="800"
        src="map.html"
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: '0 0' }}
      />
    </div>
  );
}