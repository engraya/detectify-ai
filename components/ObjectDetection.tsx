"use client";

import React, {useEffect, useRef, useState} from "react";
import Webcam from "react-webcam";
import {load as cocoSSDLoad} from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import { renderPredictions } from "../utils/render-prediction";
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import LoadingSpinner from "./LoadingSpinner";




let detectInterval;

const ObjectDetection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  async function runCoco() {
    setIsLoading(true); // Set loading state to true when model loading starts
    const net = await cocoSSDLoad();
    setIsLoading(false); // Set loading state to false when model loading completes

    detectInterval = setInterval(() => {
      runObjectDetection(net); // will build this next
    }, 5);
  }

  async function runObjectDetection(net : any) {
    if (
      canvasRef?.current &&
      webcamRef?.current !== null &&
      webcamRef?.current?.video?.readyState === 4
    ) {
      canvasRef.current.width = webcamRef?.current?.video?.videoWidth;
      canvasRef.current.height = webcamRef?.current?.video?.videoHeight;

      // find detected objects
      const detectedObjects = await net.detect(
        webcamRef?.current?.video,
        undefined,
        0.6
      );

      //   console.log(detectedObjects);

      const context = canvasRef.current.getContext("2d");
      // @ts-ignore
      renderPredictions(detectedObjects, context);
    }
  }

  const showmyVideo = () => {
    if (
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const myVideoWidth = webcamRef.current.video.videoWidth;
      const myVideoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = myVideoWidth;
      webcamRef.current.video.height = myVideoHeight;
    }
  };

  useEffect(() => {
    runCoco();
    showmyVideo();
  }, []);

  return (
    <div className="mt-2">
      {isLoading ? (
        <>
          <LoadingSpinner/>
        </>
      ) : (
        <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
          {/* webcam */}
          <Webcam
            ref={webcamRef}
            className="rounded-md w-full h-[500px] lg:h-[720px]"
            muted
          />
          {/* canvas */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-99999 h-[500px] w-full lg:h-[720px]"
          />
        </div>
      )}
    </div>
  );
};

export default ObjectDetection;