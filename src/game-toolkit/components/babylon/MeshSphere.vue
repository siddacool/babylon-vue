<script lang="ts">
import { defineComponent } from 'vue';
import { Mesh } from '@babylonjs/core';
import {
  BABYLON_COMPONENT_MESH,
  BABYLON_COMPONENT_MESH_SPHERE,
} from '../../helpers/constants';

// Creates a sphere mesh. Please consider using the same method from the MeshBuilder class instead
// @param name — defines the name of the mesh to create
// @param segments — sets the sphere number of horizontal stripes (positive integer, default 32)
// @param diameter — sets the diameter size (float) of the sphere (default 1)
// @param scene — defines the hosting scene
// @param updatable — defines if the mesh must be flagged as updatable
// @param sideOrientation — defines the mesh side orientation (https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation)

export default defineComponent({
  name: BABYLON_COMPONENT_MESH,
  plug: Mesh,
  variant: BABYLON_COMPONENT_MESH_SPHERE,
  props: {
    name: {
      type: String,
      reuired: true,
    },
    segments: {
      type: Number,
      default: 16,
    },
    diameter: {
      type: Number,
      default: 1,
    },
    updatable: {
      type: Boolean,
      default: false,
    },
    sideOrientation: {
      type: Number,
      default: Mesh.FRONTSIDE,
    },
    x: {
      type: Number,
    },
    y: {
      type: Number,
    },
    z: {
      type: Number,
    },
  },
});
</script>
