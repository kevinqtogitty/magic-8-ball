import { animated, useTransition } from '@react-spring/three';
import { Text3D, useTexture } from '@react-three/drei';
import React from 'react';
import useOptions, { OptionObject } from '../state/useOptions';
import { Flex, Box } from '@react-three/flex';
import THREE from 'three';

const Options: React.FC = () => {
  const options = useOptions((state) => state.options);
  const removeOption = useOptions((state) => state.removeOption);

  const matcap = useTexture('/matcaps/736655_D9D8D5_2F281F_B1AEAB.png');

  const transitions = useTransition(options, {
    from: { position: new THREE.Vector3(0, -10, 0), opacity: 0 },
    enter: (option) => [
      { position: option.positionEnter, opacity: option.opacity }
    ],
    leave: { position: new THREE.Vector3(0, -10, 0), opacity: 0 }
  });

  const handleRemoveOption = (optionToRemove: string) => {
    const optionsFiltered: OptionObject[] = options.filter(
      (option) => option.optionText != optionToRemove
    );
    removeOption(optionsFiltered);
  };
  return (
    <Flex
      flexDirection="row"
      justifyContent="flex-start"
      flexWrap="wrap"
      size={[15, 1, 0]}
      position={[-4, 1, 0]}
    >
      {transitions(
        (spring, item) =>
          item && (
            <Box margin={0.2}>
              <animated.group position={spring.position}>
                <animated.mesh>
                  <Text3D
                    font={'./fonts/Neuropol_Regular.json'}
                    bevelEnabled
                    bevelSize={0.05}
                    letterSpacing={0.1}
                    size={0.4}
                  >
                    {item.optionText}{' '}
                    <animated.mesh position={[-0.6, 0, 0]}>
                      <Text3D
                        font={'./fonts/Neuropol_Regular.json'}
                        bevelEnabled
                        bevelSize={0.05}
                        letterSpacing={0.1}
                        size={0.3}
                        onClick={() => handleRemoveOption(item.optionText)}
                      >
                        x
                        <meshMatcapMaterial matcap={matcap} color="hotpink" />
                      </Text3D>
                    </animated.mesh>
                    <meshMatcapMaterial matcap={matcap} />
                  </Text3D>
                </animated.mesh>
              </animated.group>
            </Box>
          )
      )}
    </Flex>
  );
};

export default Options;
