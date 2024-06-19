import React, { useEffect, useState } from 'react';

const BigCard = ({data}) => {
  const { source, author, title, description, url, urlToImage, publishedAt}=data;
  const defaultImgLink = "https://tutorialslink.com/images/default-news-image.png";
  const [imgSrc, setImgSrc] = useState(urlToImage);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(()=>{setIsLoaded(false)},[urlToImage])
  const handleImageLoad = () => {
    console.log("This is Loaded")
    setIsLoaded(true);
  };

  const handleImageError = () => {
    console.log("This is error")
    setImgSrc(defaultImgLink);
  };

  return (
    <div className="flex md:flex-row flex-col mx-auto my-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="md:w-1/2">
        <img
          className={`w-full h-full object-cover object-center rounded-l-lg ${isLoaded ? '' : 'hidden'}`}
          src={urlToImage}
          alt={title}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {!isLoaded && (
          <img className="w-full h-full object-cover object-center  rounded-l-lg" src={defaultImgLink} alt="default" />
        )}
      </div>
      <div className="modalRight md:w-1/2 md:max-h-[22rem] overflow-auto p-6 flex flex-col justify-between">
      <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">By {author} | {source.name}</p>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
        <div className='flex justify-between item-center mt-4'>
          
          <p className="text-sm text-gray-600 dark:text-gray-400">{new Date(publishedAt).toLocaleDateString()}</p>
          <a href={url} target='__blank' className="inline-block text-xs px-3 py-1 text-white bg-blue-600 rounded-full hover:bg-blue-700 dark:hover:bg-blue-500">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
