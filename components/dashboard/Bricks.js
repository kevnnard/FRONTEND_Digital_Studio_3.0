import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
function Bricks() {
  const matCAP = useLoader(
    TextureLoader,
    "/models/recursos/bricks/basecolor.jpg"
  );
  const matCAPNormal = useLoader(
    TextureLoader,
    "/models/recursos/bricks/normal.jpg"
  );
  const matCAPAu = useLoader(TextureLoader, "/models/recursos/bricks/ao.jpg");

  const matCAPRou = useLoader(
    TextureLoader,
    "/models/recursos/bricks/roughness.jpg"
  );
  const matCAPDis = useLoader(
    TextureLoader,
    "/models/recursos/bricks/displacement.png"
  );
  //   matCAP.minFilter = THREE.NearestFilter;
  //   matCAP.magFilter = THREE.NearestFilter;

  return (
    <mesh position={[0, 0, 0]}>
      <boxBufferGeometry args={[5, 5, 5, 120, 120, 120]} />
      <meshStandardMaterial
        map={matCAP}
        normalMap={matCAPNormal}
        aoMap={matCAPAu}
        roughnessMap={matCAPRou}
        displacementMap={matCAPDis}
        displacementScale={0.01}
      />
    </mesh>
  );
}

export default Bricks;
