// Pagination.js
import React from 'react';
import "../styles/pagination.css"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='container'>
    <div className="pagination">
      <button
        className={currentPage === 1 ? 'disabled' : ''}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      ><span>Prev</span>
        
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={currentPage === number ? 'active' : ''}
          onClick={() => onPageChange(number)}
        >
          <span>{number}</span>
          
        </button>
      ))}
      <button
        className={currentPage === totalPages ? 'disabled' : ''}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
      </button>
    </div>
    </div>
  );
};

export default Pagination;


// Handling pagination with next url


// const Pagination = ({ prev,next, onPageChange }) => {

//   return (
//     <div className='container'>
//     <div className="pagination">
//       <button
//         className={prev ? '' :'disabled' }
//         onClick={() => onPageChange(prev)}
//         disabled={!prev}
//       ><span>Prev</span>
        
//       </button>
//       <button
//         className={next? '' : 'disabled'}
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={!next}
//       >
//         <span>Next</span>
//       </button>
//     </div>
//     </div>
//   );
// };

// export default Pagination;
