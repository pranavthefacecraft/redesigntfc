uniform sampler2D uLogoTexture;
varying vec2 vUv;

uniform float uRotationAngle;

void main() {
    vec2 uv = vec2(vUv.x * 5.5, vUv.y * 7.0);
    uv.y -= 0.65;
    uv.x -= 0.45;

  
    float angle = radians(uRotationAngle); 
    float cosAngle = cos(angle);
    float sinAngle = sin(angle);
    uv = vec2(
        uv.x * cosAngle - uv.y * sinAngle,
        uv.x * sinAngle + uv.y * cosAngle
    );

    vec2 maskVec2 = step(uv, vec2(1.0)) * step(vec2(0.0), uv); 
    float mask = maskVec2.x * maskVec2.y;

    vec4 color = texture(uLogoTexture, uv);

  
    vec4 bgColor = vec4(0.694, 0.675, 0.961, 1.0) * 1.07;
    vec4 finalColor = mix(bgColor, color, mask * color.a); 

    gl_FragColor = finalColor;
}
