import React from 'react';
import "../styles/loading.css"
export default function Loading() {
  return (
    <div className='loading_container'>
       <div className="loader">
      <div style={{'--i': 1}}></div>
      <div style={{'--i': 2}}></div>
      <div style={{'--i': 3}}></div>
      <div style={{'--i': 4}}></div>
    </div>
    </div>
  );
}
