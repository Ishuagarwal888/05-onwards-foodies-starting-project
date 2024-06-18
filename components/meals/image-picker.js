"use client";
import { useRef, useState } from "react";
import s from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [image, setImage] = useState();
  const inputImage = useRef();
  const handlePickClick = () => {
    inputImage.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={s.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={s.controls}>
        <div className={s.preview}>
          {!image ? (
            <p>No Image picked yet.</p>
          ) : (
            <Image src={image} alt="user image" fill />
          )}
        </div>
        <input
          className={s.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputImage}
          onChange={handleImageChange}
          required
        />
        <button type="button" className={s.button} onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
