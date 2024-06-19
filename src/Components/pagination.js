import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { pageIncrement,pageDecrement } from '../utils/pageSlice';
const Pagination = (props) => {
    const currentpageNumber=useSelector((store)=>store.pageNumber.pageNumber)
    const total_pages=props.total
    const dispatch=useDispatch();
    const incrementPage=()=>{
        dispatch(pageIncrement())
    }
    const decrementPage=()=>{
        dispatch(pageDecrement())
    }
  return (
    <>
<div className='w-full flex justify-center p-8'>
<nav aria-label="Page navigation example">
  <ul className="flex items-center -space-x-px h-10 text-base">
    <li>
      <button onClick={decrementPage} disabled={currentpageNumber===1} className="disabled:opacity-50 disabled:dark:hover:bg-gray-800 disabled:dark:hover:text-gray-400 disabled:hover:bg-white disabled:hover:text-gray-500 flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
        </svg>
      </button>
    </li>
    <li>
      <div className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" style={{borderRight:0}}>
      {currentpageNumber}
      </div>
    </li>
    <li>
      <div className="flex items-center justify-center px-1 h-10 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 " style={{borderLeft:0,borderRight:0}}>/</div>
    </li>
    <li>
      <div className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 " style={{borderLeft:0}}>

        {total_pages}
      </div>
    </li>
  
    <li>
      <button disabled={currentpageNumber===total_pages} onClick={incrementPage} className="disabled:opacity-50 disabled:dark:hover:bg-gray-800 disabled:dark:hover:text-gray-400 disabled:hover:bg-white disabled:hover:text-gray-500 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
      </button>
    </li>
  </ul>
</nav>
</div> 
    </>
  )
}

export default Pagination