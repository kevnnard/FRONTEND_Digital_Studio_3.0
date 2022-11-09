/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Lights from "../components/dashboard/Lights";
import { Maincraft } from "../components/dashboard/Maincraft";
import Camera from "../components/dashboard/Camera";

export default function Home() {
  let audio;
  const initAudioPlayer2 = () => {
    audio = new Audio();
    audio.src = "/music/Young.mp3";
    audio.loop = true;
    audio.play();
  };

  useEffect(() => {
    initAudioPlayer2();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Digital Studio® - Agencia de desarrollo web, movil, diseño 3D y
          maketing digital
        </title>
        <meta
          name="description"
          content="Digital Studio® - Es una agencia de desarrollo web, movil y maketing digital, somos una agencia para cualquier tipo de empresa pequeña, mediana o grande."
        />
        <link rel="icon" href="/images/brand/icon2.png" />
      </Head>
      <div className={styles.canvas}>
        <Canvas shadows={true} shadowMap>
          <Lights />
          <Suspense fallback={null}>
            <Camera />
            <Maincraft />
          </Suspense>

          <OrbitControls target={[0, 0, 0]} />
        </Canvas>
      </div>
      <div className={styles.title2}>
        <a href="#">Digital Studio® </a>
      </div>
    </div>
  );
}
