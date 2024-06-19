 export const SkeltonCard=()=>{


    return(
        <div className="max-w-sm mx-2 my-4 bg-transparent rounded-lg dark:border-gray-700">
        
        <div className="w-[20rem] h-[12rem] bg-green-700 rounded-xl loading1"></div>
          {/* <img
            className={`newsImg rounded-lg ${isLoaded ? '' : 'hidden'}`}
            src={urlToImage}
            alt=""
            onLoad={handleImageLoad}
            onError={handleImageError}
          /> */}
        
        
        <div className="py-5" >
          <h5 className="mb-2 text-sm text-transparent rounded-full loading2">
            Hello World
          </h5>
          <p className="mb-3 font-normal text-transparent rounded-full loading3">
            World is rising          </p>
        </div>
      </div>
    )
 }