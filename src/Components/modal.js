import BigCard from './modalCard'
import { useDispatch } from 'react-redux'
import { CloseModal } from '../utils/appSlice'
import React,{useRef,useState,useEffect} from 'react'

const Modal = (props) => {
  const {data}=props;
  
 
    const dispatch=useDispatch()
    const closeModal=()=>{

        dispatch(CloseModal())
    }
 
    
  return (
    <div className={`${props.isVisible ? "":"hidden" } m-0 p-0`}>

<div className="fixed flex md:items-center justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-[#000000c4]">
  
    <div  className="md:pt-16 relative w-auto max-w-4xl max-h-full">
      <div className='flex justify-end'>
    <button className='absolute pt-10 p-4' onClick={()=>closeModal()}>
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-x-circle-fill text-gray-500 dark:text-slate-700" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg>
      </button></div>
      <BigCard data={data}/>
      
    </div>
</div>


    </div>
  )
}

export default Modal