import React from "react";

export default function App() {
  return (
    <div style={{ backgroundColor: '#6B7280', height: '100vh', overflow: 'hidden' }}>
      <iframe
        id="RCR"  
        title="Railroad Intersection Map Window"
        width="1600"
        height="800"
        src="map.html"
        style={{ transformOrigin: '0 0', width: '100%', height: '100%' }}
      />
    </div>
  );
}

