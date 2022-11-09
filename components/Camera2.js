import { PerspectiveCamera } from "@react-three/drei";
import React from "react";

function Camera2() {
  return <PerspectiveCamera makeDefault position={[35, 15, 20]} fov={50} />;
}

export default Camera2;
