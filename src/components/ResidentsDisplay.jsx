// ResidentsDisplay.js
import React, { useState, useEffect } from 'react';

import "../styles/residentdisplay.css"
import BouncingLoader from './BouncingLoader';
const ResidentsDisplay = ({ residents }) => {
  const [residentData, setResidentData] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchResidents = async () => {
      if(residents.length){
        const promises = residents.map(async (residentUrl) => {
        const response = await fetch(residentUrl);
        return await response.json();
      });
      const data = await Promise.all(promises);
      setResidentData(data);
      }
      
      setLoading(false);
    };

    setTimeout(()=>{
      fetchResidents();
    },2000)
    
  }, [residents]);

  return (
    <>
    {loading ? <BouncingLoader/> : (
      <div className="residents-display">
      <h3>Residents:</h3>
      <ul>
        {!residents.length ? <span>No residents available</span> : residentData.map((resident, index) => (
          <li key={index}>
            <strong>Name:</strong> {resident.name}<br />
            <strong>Height:</strong> {resident.height}<br />
            <strong>Mass:</strong> {resident.mass}<br />
            <strong>Gender:</strong> {resident.gender}
          </li>
        ))}
      </ul>
    </div>)
        }
        </>
  );
};

export default ResidentsDisplay;
