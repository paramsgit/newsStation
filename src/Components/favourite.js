import Card from "./card";
import Modal from "./modal";
import Loading from "./loading";
import { OpenModal } from "../utils/appSlice";
import { dummyModal } from "../utils/constants";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Favourite = () => {
  const dispatch = useDispatch();
  const [refresh, setrefresh] = useState(1);
  const [newsData, setnewsData] = useState();
  const [total_pages, settotal_pages] = useState(1);
  const [modalData, setmodalData] = useState(dummyModal);
  const isModalOpen = useSelector((store) => store.app.isModalOpen);

    useEffect(()=>{
        const savedData = localStorage.getItem('favourite')
        if (!savedData) { }
        else {
            setnewsData(JSON.parse(savedData))
        }
    },[refresh])

  const showmodal = () => {
    dispatch(OpenModal());
  };
    
  return (
    <div
      className={`pt-20 min-h-screen transition-all duration-500 ease-in-out bg-slate-100 dark:bg-[#232323]`}
    >
      <Modal isVisible={isModalOpen} data={modalData} />
      {false ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap justify-evenly p-5">
          {newsData && newsData.map((t)=>{
            return <Card key={t.title} data={t} setmodalData={setmodalData} showmodal={showmodal} setrefresh={setrefresh} refresh={refresh} showDltBtn={true}/>
          })}
          {!newsData || newsData.length==0 && <div className="dark:text-white text-gray-800">
            You will find your saved items here.
            </div>}
        </div>
      )}

      {/* <Pagination total={total_pages} /> */}
    </div>
  )
}

export default Favourite