import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { HemisphereLight } from "three";

function CameraHelper() {
  const camera = new PerspectiveCamera25(0, 15, 12);
  return <group position={[camera]}></group>;
}

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./004chairs.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.04} />
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 15, 12], fov: 25 }}>
        <Suspense fallback={null}>
          <Model />
          <directionalLight position={[10, 10, 0]} intensity={1.5} />
          <directionalLight position={[-10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, 20, 0]} intensity={1.5} />
          <directionalLight position={[0, -10, 0]} intensity={0.25} />

          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
}
