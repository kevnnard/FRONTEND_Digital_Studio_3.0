import { PerspectiveCamera } from "@react-three/drei";
import React from "react";

function Camera() {
  return <PerspectiveCamera makeDefault position={[35, 18, 20]} fov={15} />;
}

export default Camera;
