///**
// * Multiply each vertex by the model-view matrix
// * and the projection matrix (both provided by
// * Three.js) to get a final vertex position
// */
//void main() {
//    gl_Position = projectionMatrix *
//        modelViewMatrix *
//        vec4(position, 1.0);
//}  
// create a shared variable for the
// VS and FS containing the normal
//varying vec3 vNormal;

//void main() {

//    // set the vNormal value with
//    // the attribute value passed
//    // in by Three.js
//    vNormal = normal;

//    gl_Position = projectionMatrix *
//        modelViewMatrix *
//        vec4(position, 1.0);
//}

attribute float displacement;
varying vec3 vNormal;

void main() {

    vNormal = normal;

    // push the displacement into the three
    // slots of a 3D vector so it can be
    // used in operations with other 3D
    // vectors like positions and normals
    vec3 newPosition = position +
        normal *
        vec3(displacement);

    gl_Position = projectionMatrix *
        modelViewMatrix *
        vec4(newPosition, 1.0);
}

