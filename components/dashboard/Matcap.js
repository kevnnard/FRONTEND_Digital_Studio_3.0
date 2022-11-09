import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useLoader } from "@react-three/fiber";

function Matcap() {
  const matCAP = useLoader(TextureLoader, "/models/recursos/matcaps/sun.jpg");
  return (
    <mesh position={[60, 0, 0]}>
      <sphereBufferGeometry args={[4, 20, 20]} />
      <meshMatcapMaterial matcap={matCAP} />
    </mesh>
  );
}

export default Matcap;
