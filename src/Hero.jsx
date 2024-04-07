import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/photoservices';



const Hero = () => {
  const [images, setImages] = useState(null);

    useEffect(() => {
            PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' , height: '650px' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    const caption = (item) => {
      return (
          <React.Fragment>
              <div className="text-4xl ml-6 mb-20 font-bold text-white">{item.title}</div>
              {/* <p className="text-white">{item.alt}</p> */}
          </React.Fragment>
      );
  }

    return (
      <div className=''>
      <div className="card mb-10">
      <style>
        {`
          .p-galleria-nav-prev::before,
          .p-galleria-nav-next::before {
            font-size: 36px; /* Make the arrows larger */
            color: #000000; /* Set color to black */
          }
        `}
      </style>
      <Galleria value={images} numVisible={5} circular
        showThumbnails={false} showItemNavigators  item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} />
    </div>
    </ div>
    )
};

export default Hero;
