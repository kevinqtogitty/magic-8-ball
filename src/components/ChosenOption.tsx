import { animated } from '@react-spring/three';
import { Float, Text3D } from '@react-three/drei';
import { useTexture } from '@react-three/drei/core/useTexture';
import React, { useRef } from 'react';
import { Mesh } from 'three';
import useOptions from '../state/useOptions';

const ChosenOption: React.FC = () => {
  const chosenOption = useOptions((state) => state.chosenOption);
  const textRef = useRef<Mesh>(null!);

  const matcap = useTexture('/matcaps/736655_D9D8D5_2F281F_B1AEAB.png');

  return (
    <Float>
      <animated.mesh ref={textRef}>
        <Text3D
          font={'./fonts/Neuropol_Regular.json'}
          bevelEnabled
          bevelSize={0.05}
          letterSpacing={0.1}
          size={0.6}
          scale={1.5}
        >
          {chosenOption}
          <meshMatcapMaterial matcap={matcap} />
        </Text3D>
      </animated.mesh>
    </Float>
  );
};

export default ChosenOption;
