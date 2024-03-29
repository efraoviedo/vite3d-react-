import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
    const textRef = useRef();
  useFrame(state => 
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 1)
  );
  return (
    <mesh fallback={null}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach="background" args={["violet"]} />
          <Text ref={textRef} fontSize={0.4} background="yellow" color="#555">
            GranEfra
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
