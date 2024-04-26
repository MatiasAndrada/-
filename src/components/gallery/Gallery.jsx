import React, { useState } from "react";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleClosePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`relative cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-105	`}
          onClick={() => handleImageClick(imageUrl)}
        >
          <img
            src={imageUrl}
            alt={`Image rocket ${index + 1}`}
            className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-lg "
          />
        </div>
      ))}

      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-60"
          onClick={handleClosePreview}
        >
          <div className="rounded-lg shadow-xl shadow-blue-950">
            <img
              src={selectedImage}
              alt="Selected"
              className="h-4/5 md:h-[60vh] rounded-lg" // Aquí ajustamos la altura de la imagen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
