import React, { useState } from 'react'
import { SkeltonCard } from './skeltonCard'
import { articlesPerPage } from '../utils/constants';
const Loading = () => {
  const cardArray=[]
  let index=0;
  for(let i=0;i<articlesPerPage;i++){
    cardArray.push(i)
  }
  return (
    <div className='pt-8 w-full min-h-screen bg-slate-100 dark:bg-[#232323] text-gray-900 dark:text-white flex justify-center'>
      <div className='flex flex-wrap justify-evenly'>
      {cardArray.map((c)=>{
        return <SkeltonCard key={c}/>
      })}   
    </div>
    </div>
  )
}

export default Loading