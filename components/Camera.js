import { PerspectiveCamera } from "@react-three/drei";
import React from "react";

function Camera() {
  return <PerspectiveCamera makeDefault position={[35, 15, 20]} fov={20} />;
}

export default Camera;
