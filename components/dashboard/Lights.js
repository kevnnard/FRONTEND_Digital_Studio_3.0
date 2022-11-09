import { Environment } from "@react-three/drei";
import React from "react";

function Lights() {
  return (
    <>
      {/* <ambientLight /> */}
      <directionalLight
        position={[20, -2, -5]}
        color={"rgb(250, 214, 165)"}
        intensity={0.7}
        target-position={[10, 10, 10]}
        castShadow={true}
        shadow-bias={-0.001}
      />

      {/* <pointLight position={[5, 5, 5]} color={"#f00"} intensity={0.5} /> */}
      <ambientLight color={"#fff"} intensity={0.2} />
    </>
  );
}
export default Lights;
