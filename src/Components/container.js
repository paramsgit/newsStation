import Card from "./card";
import Modal from "./modal";
import Loading from "./loading";
import { tempData } from "./temp";
import Pagination from "./pagination";
import { OpenModal } from "../utils/appSlice";
import { pageReset } from "../utils/pageSlice";
import { dummyModal } from "../utils/constants";
import React, { useEffect, useState } from "react";
import { articlesPerPage } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const Container = () => {
  const [total_pages, settotal_pages] = useState(1);
  const [newsData, setnewsData] = useState(tempData);
  const [currData, setcurrData] = useState(tempData);
  const [dataLoading, setdataLoading] = useState(false);
  const [modalData, setmodalData] = useState(dummyModal);
  const [newsDataLength, setnewsDataLength] = useState(1);
  const searchValue = useSelector((store) => store.search.searchInput);
  const isModalOpen = useSelector((store) => store.app.isModalOpen);
  const currentpageNumber = useSelector((store) => store.pageNumber.pageNumber);

  const apikey = process.env.REACT_APP_API
  const headlineUrl = process.env.REACT_APP_NEWS_HEADLINE_URL

  const dispatch = useDispatch();
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);


  var url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2024-06-18&' +
    'sortBy=popularity&' +
    'apiKey=c13230209389409686a555cdd92be729';

  const showmodal = () => {
    dispatch(OpenModal());
  };

  useEffect(() => {
    paginateArticles()
  }, [currentpageNumber])

  const paginateArticles = () => {
    console.log("iam called ")
    const startIndex = (currentpageNumber - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    setcurrData(newsData.slice(startIndex, endIndex));
  };

  useEffect(() => {
    dispatch(pageReset())
    setcurrData(newsData.slice(0, articlesPerPage));
    let totalPages = (newsDataLength) / articlesPerPage;
    if ((newsDataLength) % articlesPerPage)
      totalPages = Math.ceil(totalPages + 1);
    settotal_pages(totalPages)
  }, [newsData])

  useEffect(() => {
    getHeadLines()
  }, [])

  useEffect(() => {
    if (searchValue) {
      getNews()
    }
  }, [searchValue])

  const getNews = async () => {
    setdataLoading(true)
    try {
      const response = await fetch(headlineUrl + `/everything?q=${searchValue}&from=${formattedDate}sortBy${'popularity'}&apiKey=${apikey}`)
      const data = await response.json()
      console.log(data)
      if (data.articles) {
        setnewsData(data.articles);
        setnewsDataLength(data.totalResults)

      }

    } catch (error) {
      console.log(error)
    }
    setdataLoading(false)

  }

  const getHeadLines = async () => {
    setdataLoading(true)
    try {
      const response = await fetch(headlineUrl + `/top-headlines?country=in&apiKey=${apikey}`)
      const data = await response.json()
      if (data.articles) {
        setnewsData(data.articles);
        let len = data?.articles?.length;
        setnewsDataLength(len)
      }
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    setdataLoading(false)
  }


  return (
    <div
      className={`pt-20 transition-all duration-500 ease-in-out bg-slate-100 dark:bg-[#232323]`}
    >

      <Modal isVisible={isModalOpen} data={modalData} />
      {dataLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap justify-evenly p-5">
          {currData && currData.map((t) => {
            return <Card key={t.title} data={t} setmodalData={setmodalData} showmodal={showmodal} />
          })}

        </div>
      )}

      <Pagination total={total_pages} />
    </div>
  );
};

export default Container;
