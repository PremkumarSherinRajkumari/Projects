import React, { useState, useEffect } from 'react';
import photo1 from '../Photo1.jpg'; 
import photo2 from '../Photo2.jpg'; 
import photo3 from '../Photo3.jpg'; 

const Main = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      const images = [photo1, photo2, photo3];
      let index = 0;

      setInterval(() => {
        index = (index + 1) % images.length;
        setCurrentImage(index);
      }, 5000);
    };

    // Call only the image-changing function
    changeImage();
  }, []);

  return (
    
      
    <div id='main'>
      <img className="homeimage" src={[photo1, photo2, photo3][currentImage]} alt="" />
      
        <div className="container1">
          <h1 className="intro">Welcome to VersaFrame Studios!!</h1>
        
      </div>
    </div>
   
  );
};

export default Main;
