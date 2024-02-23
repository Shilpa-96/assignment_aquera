import React, { useEffect, useState } from 'react';
import "../styles/planetsdirectory.css";
import PlanetsCard from './PlanetsCard';
import Pagination from "./Pagination"
import Loading from './Loading';

export default function PlanetsDirectory() {
    const [data,setData] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1);
    const [loading,setLoading] =useState(false);

     // Handling pagination with next url*************
    // const [currentPageUrl,setCurrentPageUrl] = useState("https://swapi.dev/api/planets/?format=json")

    useEffect(() => {
    fetchData();
  }, [currentPage]);

    const fetchData=async()=>{
      setLoading(true);
      setTimeout(async()=>{
        const response = await fetch(`https://swapi.dev/api/planets/?page=${currentPage}&format=json`);

        // Handling pagination with next url*************** 
        // const response = await fetch(currentPageUrl);

        const dataresult = await response.json()
        setData(dataresult.results);
        setTotalPages(Math.ceil(dataresult.count / 10));
        setLoading(false)
      },2000);
        
    }
    const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handling pagination with next url**********

  // const handlePageChange1=(url)=>{
  //   setCurrentPageUrl(url)
  // }

  return (
    <>
    <div className='planets_container'>
    {loading? <Loading/> :(
    <div className="planets-directory">
      { (data.map((planet, index) => (
        <PlanetsCard key={index} planet={planet} />
      )))
      }
      </div>
     )}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

       {/* <Pagination prev={dataresult.previous} next={dataresult.next} onPageChange={handlePageChange} /> */}
         {/* Handling pagination with next url*********** */}
      
    
    </div>
    
    </>
  );
}
