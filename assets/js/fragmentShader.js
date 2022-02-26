//uniform float STRETCH_2D = -0.211324865405187;    //(1/Math.sqrt(2+1)-1)/2;
//uniform float STRETCH_3D = -1.0 / 6.0;            //(1/Math.sqrt(3+1)-1)/3;
//uniform float STRETCH_4D = -0.138196601125011;    //(1/Math.sqrt(4+1)-1)/4;
//uniform float SQUISH_2D = 0.366025403784439;      //(Math.sqrt(2+1)-1)/2;
//uniform float SQUISH_3D = 1.0 / 3.0;              //(Math.sqrt(3+1)-1)/3;
//uniform float SQUISH_4D = 0.309016994374947;      //(Math.sqrt(4+1)-1)/4;
//uniform float NORM_2D = 1.0 / 47.0;
//uniform float NORM_3D = 1.0 / 103.0;
//uniform float NORM_4D = 1.0 / 30.0;

//        uniform float[] perm2D;

//        uniform float[] gradients2D = 
//        {
//             5,  2,    2,  5,
//            -5,  2,   -2,  5,
//             5, -2,    2, -5,
//            -5, -2,   -2, -5,
//        };


/**
 * Set the colour to a lovely pink.
 * Note that the color is a 4D Float
 * Vector, R,G,B and A and each part
 * runs from 0.0 to 1.0
 */
//void main() {
//    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
//}

// same name and type as VS
varying vec3 vNormal;

void main() {

    // calc the dot product and clamp
    // 0 -> 1 rather than -1 -> 1
    vec3 light = vec3(0.5, 0.2, 1.0);

    // ensure it's normalized
    light = normalize(light);

    // calculate the dot product of
    // the light to the vertex normal
    float dProd = max(0.0, dot(vNormal, light));

    // feed into our frag colour
    gl_FragColor = vec4(dProd + 1.0, dProd, dProd, 1.0);
    //gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);

}

