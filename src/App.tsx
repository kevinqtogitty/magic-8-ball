import React from 'react';
import { OrbitControls, Sky, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Flex, Box } from '@react-three/flex';

import { Html } from '@react-three/drei';
import { Magic8Ball } from './components/Magic8Ball';
import Form from './components/Form';
import ChosenOption from './components/ChosenOption';
import Options from './components/Options';

function App() {
  const ThreeScene = () => {
    return (
      <Canvas camera={{ position: [0, 0, 10] }}>
        {/**
         * Cameras
         */}

        {/**
         * Lights
         */}
        <ambientLight />
        <directionalLight position={[3, 3, 1]} color="#f3e99b" intensity={2} />

        {/**
         * Controls
         */}

        <OrbitControls />
        {/**
         * Helpers
         */}

        {/**
         * Environment
         */}
        <Stars />

        {/**
         * Objects
         */}
        <Flex
          position={[-1.5, 2, 0]}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          size={[4, 0, 0]}
        >
          <Box>
            <ChosenOption />
          </Box>
          <Box centerAnchor>
            <Magic8Ball scale={1.5} />
          </Box>
        </Flex>
        <Html fullscreen className="threeHtml">
          <Form />
        </Html>
        <Options />
      </Canvas>
    );
  };

  return (
    <div className="canvasFulLScreened">
      <ThreeScene />
    </div>
  );
}

export default App;
