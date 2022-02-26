import * as THREE from 'https://unpkg.com/three/build/three.module.js'
//import './fragmentShader.js';
//import './vertexShader.js';

var camera, scene, renderer;
//var geometry, material, mesh,
var sphere;
var pointLight;
var vShader, fShader;
// create the sphere's material
//var sphereMaterial = new THREE.MeshLambertMaterial(
//    {
//        // a gorgeous red.
//        color: 0xCC0000
//    });
var loader = new THREE.FileLoader();
var attributes = {
    displacement: {
        type: 'f', // a float
        value: [] // an empty array
    }
};

init();

function init() {

    //camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    //camera.position.z = 1;

    //scene = new THREE.Scene();

    //geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    //material = new THREE.MeshNormalMaterial();

    //mesh = new THREE.Mesh(geometry, material);
    //scene.add(mesh);

    // set the scene size
    var WIDTH = 400,
        HEIGHT = 300;

    // set some camera attributes
    var VIEW_ANGLE = 45,
        ASPECT = WIDTH / HEIGHT,
        NEAR = 0.1,
        FAR = 10000;

    // get the DOM element to attach to
    // - assume we've got jQuery to hand
    //var $container = $('#container');

    // create a WebGL renderer, camera
    // and a scene
    renderer = new THREE.WebGLRenderer();
    camera = new THREE.PerspectiveCamera(
        VIEW_ANGLE,
        ASPECT,
        NEAR,
        FAR);

    scene = new THREE.Scene();

    // the camera starts at 0,0,0 so pull it back
    camera.position.z = 300;

    // start the renderer
    renderer.setSize(WIDTH, HEIGHT);

    // attach the render-supplied DOM element
    //$container.append(renderer.domElement);
    document.body.appendChild(renderer.domElement);

    var numFilesLeft = 2;

    function finishIfDone() {
        --numFilesLeft;
        if (numFilesLeft === 0) {
            finishInit();
        }
    }
    loader.load('./assets/js/fragmentShader.js', function (data) { fShader = data; finishIfDone(); });
    loader.load('./assets/js/vertexShader.js', function (data) { vShader = data; finishIfDone(); });
}

function finishInit() {
    // set up the sphere vars
    var sphereMaterial = new THREE.ShaderMaterial({
        //attributes: attributes,
        uniforms: {

            time: { value: 1.0 },
            resolution: { value: new THREE.Vector2() }

        },

        vertexShader: vShader,

        fragmentShader: fShader

    });
    var radius = 50, segments = 16, rings = 16;

    var geometry = new THREE.BufferGeometry();

    // create a new mesh with sphere geometry -
    // we will cover the sphereMaterial next!
    sphere = new THREE.Mesh(

        new THREE.SphereGeometry(radius,
            segments,
            rings),

        sphereMaterial);
    //var geometry = new THREE.BufferGeometry();
    //// create a simple square shape. We duplicate the top left and bottom right
    //// vertices because each vertex needs to appear once per triangle.
    var vertices = new Float32Array([
       -1.0, -1.0, 1.0,
       1.0, -1.0, 1.0,
       1.0, 1.0, 1.0,

       1.0, 1.0, 1.0,
       -1.0, 1.0, 1.0,
       -1.0, -1.0, 1.0
    ]);

    //// itemSize = 3 because there are 3 values (components) per vertex
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    //var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    //var mesh = new THREE.Mesh(geometry, material);

    // now populate the array of attributes
    // var vertices = sphere.geometry.vertices;
    // var values = attributes.displacement.value
    // for (var v = 0; v < vertices.length; v++) {
    //     values.push(Math.random() * 30);
    // }
    // sphere.attributes = attributes;

    //geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    //var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    //var mesh = new THREE.Mesh(geometry, material);

    //sphereMaterial.setAttribute('displacement', attributes);
   

    // add the sphere to the scene
    scene.add(sphere);
    //scene.add(mesh);

    // create a point light
    pointLight = new THREE.PointLight(0xFFFFFF);

    // set its position
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;

    // add to the scene
    scene.add(pointLight);

    //renderer = new THREE.WebGLRenderer({ antialias: true });
    //renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);
    onWindowResize();

    window.addEventListener('resize', onWindowResize, false);
    animate();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    //composer.setSize(window.innerWidth, window.innerHeight);

}

//function addSphere(scene) {
//    // set up the sphere vars
//    var radius = 50, segments = 16, rings = 16;

//    // create a new mesh with sphere geometry -
//    // we will cover the sphereMaterial next!
//    var sphere = new THREE.Mesh(
//        new THREE.SphereGeometry(radius,
//            segments,
//            rings),

//        sphereMaterial);

//    // add the sphere to the scene
//    scene.add(sphere);

//}

function animate() {

    // changes to the vertices
    //sphere.geometry.__dirtyVertices = true;

    //// changes to the normals
    //sphere.geometry.__dirtyNormals = true;

    requestAnimationFrame(animate);
    
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.02;
    //mesh.rotation.x += 0.01;
    //mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

}
