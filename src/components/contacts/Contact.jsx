"use client";
import React, { useRef, useState } from "react";
import Info from "./Info";
import Image from "next/image";
import Form from "./Form";

const Contact = () => {
  const [sending, setSending] = useState(true);
  const [videoEnd, setVideoEnd] = useState(true);
  const videoRef = useRef(null);

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.currentTime >= video.duration - 0.4) {
      setVideoEnd(true);
    } else {
      setVideoEnd(false);
    }
  };
  return (
    <section className="bg-white">
      <div className="px-4 mx-auto max-w-screen-md">
        <Info />

        {videoEnd && sending ? (
          <Form
            sendStateOfSubmit={(x) => {
              setSending(x);
            }}
          />
        ) : (
          <>
            <video
              className="border-2 rounded-full border-black"
              autoPlay
              muted
              ref={videoRef}
              onTimeUpdate={handleVideoTimeUpdate}
            >
              <source src="/images/success-tick.mp4" type="video/mp4"></source>
            </video>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;
