import * as THREE from 'https://cdn.skypack.dev/three@0.128.0';

const xf_addTexture = (texturePath, isEnv, colorMod) => {
    var texLoader = new THREE.TextureLoader()
    const imgPlath = "./";
    const tex = texLoader.load(imgPlath + texturePath);
    tex.flipY = true
    if (colorMod) {
        tex.colorSpace = THREE.SRGBColorSpace;
    } else {
        tex.colorSpace = THREE.LinearSRGBColorSpace
    }
    if (isEnv == 1) {
        tex.mapping = THREE.EquirectangularReflectionMapping//Specialized for metal reflection mapping
    }
    if (isEnv == 2) {
        tex.mapping = THREE.EquirectangularRefractionMapping//Specialized for glass reflection mapping
    }
    return (tex)
}

const xf_repeatTexture = (texture, repeatNum) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeatNum, repeatNum);
}

const xf_offsetTexture = (texture, speed) => {
    let move = 0
    texture.offset = new THREE.Vector2(move, 0);

    setInterval(() => {
        texture.offset = new THREE.Vector2(0, 0);
        move + 0.1
    }, speed);
}

export { xf_addTexture, xf_repeatTexture }