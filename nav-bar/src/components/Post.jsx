import React, { useState, useEffect } from "react";
import "./Post.css";
import ronaldo from "../components/ronaldo.jpg";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { PiPlugBold } from "react-icons/pi";
import UserInfo from "./UserInfo";
import rony from "../components/rony sauna.jpg"

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/api/photos");
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }

        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  const placeholderImages = [ronaldo];


  return (
    <div className="container-placeholder">
      <h2>#HashTraining</h2>
      <div className="gallery">
        {photos.map((photo, index) => (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.description} className="photo-image" />
            <div className="photo-buttons" role="button">
              <FaRegHeart />
              <FaRegComment />
              <PiPlugBold />
            </div>
          </div>
        ))}
        <div className="placeholder-container">
          {placeholderImages.map((url, index) => (
            <div key={index}>
              <UserInfo
                user={{
                  photo: rony,
                  name: "Cristiano Ronaldo" ,
                }}
              />
              <img
                src={url}
                alt={`Placeholder ${index + 1}`}
                className="placeholder-image"
              />
              <div className="photo-buttons">
                <FaRegHeart />
                <FaRegComment />
                <PiPlugBold />
              </div>
              <div className="description">
                {"Cristiano Ronaldo"} {/* Ir buscar dados BackEnd */}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
