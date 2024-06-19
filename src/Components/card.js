import React, { useEffect, useState } from 'react';

const Card = ({ data, showmodal, setmodalData, setrefresh, refresh, showDltBtn }) => {
  const { title, description, urlToImage } = data;

  const defaultImgLink = 'https://tutorialslink.com/images/default-news-image.png'
  const [imgSrc, setImgSrc] = useState(defaultImgLink);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSaveButton, setshowSaveButton] = useState(true);
  useEffect(() => { checkIsSaved() }, [])
  
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setImgSrc(defaultImgLink);
  };

  const OpenModal = () => {
    setmodalData(data);
    setTimeout(() => {
      showmodal()
    }, 300);
  };

  function isSaved(targetString) {
    const news = localStorage.getItem('favourite');

    if (news) {
      const newsSet = new Set(JSON.parse(news).map(item => JSON.stringify(item)));
      return [...newsSet].some(item => {
        const parsedBook = JSON.parse(item);
        return parsedBook.title === targetString;
      });
    }

    return false;
  }


  function checkIsSaved() {
    if (isSaved(title)) {
      setshowSaveButton(false)
    }
    else setshowSaveButton(true)
  }

  const addToShelf = () => {
    const favourites = localStorage.getItem('favourite');
    let newsSet;

    if (favourites) {
      newsSet = new Set(JSON.parse(favourites).map(favourite => JSON.stringify(favourite)));
    } else {
      newsSet = new Set();
    }

    const newData = data;

    newsSet.add(JSON.stringify(newData));

    localStorage.setItem('favourite', JSON.stringify([...newsSet].map(news => JSON.parse(news))));
    setshowSaveButton(false)
  };

  const removeFromSaved = () => {
    const books = localStorage.getItem('favourite');

    if (books) {
      let bookSet = new Set(JSON.parse(books).map(book => JSON.stringify(book)));
      bookSet.forEach(book => {
        const parsedBook = JSON.parse(book);
        if (parsedBook.title === title) {
          bookSet.delete(book);
        }
      });

      localStorage.setItem('favourite', JSON.stringify([...bookSet].map(book => JSON.parse(book))));
    } else {
      console.log('No books in the shelf.');
    }
    if (setrefresh)
      setrefresh(!refresh)
    setshowSaveButton(true)
  };

  const handleSave = () => {
    console.log(data)
    addToShelf()
  }


  if (title == '[Removed]' || title == null)
    return null

  return (
    <div className="max-w-xs mx-2 my-4 bg-transparent rounded-lg dark:border-gray-700">
      <div className=' flex justify-end'>
        <div className=' absolute p-2'>
          <button className={`${!showSaveButton && 'hidden'} p-2 bg-white rounded-full opacity-50 filledHeart`} onClick={() => { handleSave() }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart text-gray-400" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </button>
          <button className={`${showSaveButton && 'hidden text-white opacity-100'} text-pink-500 p-2 bg-white rounded-full opacity-50 filledHeart`} onClick={() => { removeFromSaved() }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg>
          </button>

        </div>
      </div>
      <div className={`flex justify-end  ${!showDltBtn && 'hidden'}`}>
        <div className=' absolute p-2'>
          <button className={` p-2 bg-white rounded-full opacity-50`} onClick={() => { removeFromSaved() }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart text-gray-400" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </button>
        </div>
      </div>
      <img
        className={`newsImg rounded-lg ${isLoaded ? '' : 'hidden'}`}
        src={urlToImage}
        alt=""
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {!isLoaded && (
        <img className="newsImg rounded-lg" src={defaultImgLink} alt="" />
      )}

      <div className="py-5" onClick={() => OpenModal()}>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white font-[Ubuntu] cursor-pointer">
          {title && (title.length <= 60 ? title : title.substring(0, 60) + '...')}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description != null && (description.length <= 100 ? description : description.substring(0, 100) + '...')}
        </p>
      </div>
    </div>
  );
};

export default Card;
