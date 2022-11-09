/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Matcap from "../components/Matcap";
import { Suspense, useEffect } from "react";
import Bricks from "../components/Bricks";
import Lights from "../components/Lights";
import { Maincraft } from "../components/Maincraft";
import Camera from "../components/Camera";
import * as THREE from "three";
import Camera2 from "../components/Camera2";

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
      <div id="desktop" className={styles.canvas}>
        <Canvas shadows={true} shadowMap>
          {/* <mesh position={[3, 0, -8]} rotateY={Math.PI * 0.25}>
            <boxBufferGeometry args={[5, 5, 5]} />
            <meshNormalMaterial flatShading={true} />
          </mesh> */}
          <Suspense fallback={null}>
            <Matcap />
          </Suspense>
          <Lights />
          <Suspense fallback={null}>
            <Camera />
            {/* <Bricks /> */}
            <Maincraft />
            {/* <Environment files={"/models/recursos/hdr/decor_shop_1k.hdr"} /> */}
          </Suspense>

          <OrbitControls target={[0, 0, 0]} />
        </Canvas>
      </div>
      <div id="movil" className={styles.canvas}>
        <Canvas shadows={true} shadowMap>
          {/* <mesh position={[3, 0, -8]} rotateY={Math.PI * 0.25}>
            <boxBufferGeometry args={[5, 5, 5]} />
            <meshNormalMaterial flatShading={true} />
          </mesh> */}
          <Suspense fallback={null}>
            <Matcap />
          </Suspense>
          <Lights />
          <Suspense fallback={null}>
            <Camera2 />
            {/* <Bricks /> */}
            <Maincraft />
            {/* <Environment files={"/models/recursos/hdr/decor_shop_1k.hdr"} /> */}
          </Suspense>

          <OrbitControls target={[0, 0, 0]} />
        </Canvas>
      </div>
      <div className={styles.title2}>
        <a href="#">©2022 - Digital Studio® </a>
      </div>
    </div>
  );
}
