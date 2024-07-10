"use client";

import React, { useRef } from 'react';
import Webcam from 'react-webcam';

export default function WebCam() {
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: "user",
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc); // Do something with the imageSrc
  };

  return (
    <div className="flex justify-center items-center ">
      <Webcam
        audio={false}
        height={300}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={videoConstraints}
        className='rounded-full p-10'
        style={{ borderRadius: '50%', width: '300px', height: '300px', objectFit: 'cover' }}
      />
    </div>
  );
}
