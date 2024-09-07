import React, { useEffect } from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export function Eagle(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF('./models/eagle/scene-transformed.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Check if the action exists before attempting to play it
    if (actions?.Object_7) {
      actions.Object_7.play();
    } else {
      console.warn('Action Object_7 is not available.');
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.CH_NPC_MOB_GEagle_A02_MI_IRS}
          skeleton={nodes.Object_7.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload('./models/eagle/scene-transformed.glb');
