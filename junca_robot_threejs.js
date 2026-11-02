const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/EXRLoader.ZZJu5hrK.js","_astro/three.module.BXU1Nt8E.js","_astro/rolldown-runtime.hePW80VL.js","_astro/scramble.B_wRDRhM.js","_astro/gsap.CvDoa17S.js","_astro/SplitText.D2RYeBm1.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper.CxFQXtKk.js";import{t}from"./RobotHero.astro_astro_type_script_index_0_lang.DJFvXF7j.js";import{A as n,B as r,C as i,H as a,Jt as o,K as s,Kt as c,Mt as l,Nt as u,P as d,Qt as f,R as p,Rt as m,S as h,U as g,Ut as _,Vt as v,_ as y,_t as b,b as x,cn as S,ct as C,dn as w,dt as T,fn as E,g as D,gn as O,gt as k,h as ee,ht as A,i as te,it as ne,kt as re,l as ie,ln as j,m as ae,mt as oe,nn as M,nt as N,ot as se,pn as P,pt as F,q as ce,qt as le,st as ue,t as I,vt as de,x as fe,y as L,z as R}from"./three.module.BXU1Nt8E.js";import{r as pe,t as z}from"./Pass.BjQvpECQ.js";var me=new WeakMap,he=new URL(`/_astro/draco_decoder.C32yEggz.wasm`,``+import.meta.url).toString(),ge=new URL(`/_astro/draco_wasm_wrapper.DxJM36Ib.js`,``+import.meta.url).toString(),_e=new URL(`/_astro/draco_decoder.fzg4nYZr.js`,``+import.meta.url).toString();new URL(`/_astro/draco_wasm_wrapper.fZCQGLGb.js`,``+import.meta.url).toString(),new URL(`/_astro/draco_decoder.Z1_iN-Ht.wasm`,``+import.meta.url).toString();var ve=class extends ue{constructor(e){super(e),this.decoderPaths={js:ge,wasm:he,dep_js:_e},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL=``,this.defaultAttributeIDs={position:`POSITION`,normal:`NORMAL`,color:`COLOR`,uv:`TEX_COORD`},this.defaultAttributeTypes={position:`Float32Array`,normal:`Float32Array`,color:`Float32Array`,uv:`Float32Array`}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e==`object`?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=C.resolveURL(`draco_wasm_wrapper.js`,e),t.wasm=C.resolveURL(`draco_decoder.wasm`,e),t.dep_js=C.resolveURL(`draco_decoder.js`,e)),this}setDecoderConfig(e){return console.warn(`THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194.`),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,r){let i=new d(this.manager);i.setPath(this.path),i.setResponseType(`arraybuffer`),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,e=>{this.parse(e,t,r)},n,r)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,c,n).catch(n)}decodeDracoFile(e,t,n,r,i=se,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:i};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(me.has(e)){let t=me.get(e);if(t.key===n)return t.promise;if(e.byteLength===0)throw Error(`THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.`)}let r,i=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(i,a).then(n=>(r=n,new Promise((n,a)=>{r._callbacks[i]={resolve:n,reject:a},r.postMessage({type:`decode`,id:i,taskConfig:t,buffer:e},[e])}))).then(e=>this._createGeometry(e.geometry));return o.catch(()=>!0).then(()=>{r&&i&&this._releaseTask(r,i)}),me.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new y;e.index&&t.setIndex(new D(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:r,array:i,itemSize:a,stride:o,vertexColorSpace:c}=e.attributes[n],l;if(a===o)l=new D(i,a);else{let e=new s(i,o);l=new ce(e,a,0)}r===`color`&&(this._assignVertexColorSpace(l,c),l.normalized=!(i instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==`srgb`)return;let n=new h;for(let t=0,r=e.count;t<r;t++)n.fromBufferAttribute(e,t),i.colorSpaceToWorking(n,c),e.setXYZ(t,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new d(this.manager);return n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((t,r)=>{n.load(e,t,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!=`object`||this.decoderConfig.type===`js`,t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw Error(`THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.`);t.push(this._loadLibrary(n.dep_js,`text`))}else t.push(this._loadLibrary(n.js,`text`)),t.push(this._loadLibrary(n.wasm,`arraybuffer`));return this.decoderPending=Promise.all(t).then(t=>{let n=t[0];e||(this.decoderConfig.wasmBinary=t[1]);let r=ye.toString(),i=[`/* draco decoder */`,n,``,`/* worker */`,r.substring(r.indexOf(`{`)+1,r.lastIndexOf(`}`))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([i]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let e=new Worker(this.workerSourceURL);e._callbacks={},e._taskCosts={},e._taskLoad=0,e.postMessage({type:`init`,decoderConfig:this.decoderConfig}),e.onmessage=function(t){let n=t.data;switch(n.type){case`decode`:e._callbacks[n.id].resolve(n);break;case`error`:e._callbacks[n.id].reject(n);break;default:console.error(`THREE.DRACOLoader: Unexpected message, "`+n.type+`"`)}},this.workerPool.push(e)}else this.workerPool.sort(function(e,t){return e._taskLoad>t._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log(`Task load: `,this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==``&&URL.revokeObjectURL(this.workerSourceURL),this}};function ye(){let e,t;onmessage=function(r){let i=r.data;switch(i.type){case`init`:e=i.decoderConfig,t=new Promise(function(t){e.onModuleLoaded=function(e){t({draco:e})},DracoDecoderModule(e)});break;case`decode`:let r=i.buffer,a=i.taskConfig;t.then(e=>{let t=e.draco,o=new t.Decoder;try{let e=n(t,o,new Int8Array(r),a),s=e.attributes.map(e=>e.array.buffer);e.index&&s.push(e.index.array.buffer),self.postMessage({type:`decode`,id:i.id,geometry:e},s)}catch(e){console.error(e),self.postMessage({type:`error`,id:i.id,error:e.message})}finally{t.destroy(o)}})}};function n(e,t,n,a){let o=a.attributeIDs,s=a.attributeTypes,c,l,u=t.GetEncodedGeometryType(n);if(u===e.TRIANGULAR_MESH)c=new e.Mesh,l=t.DecodeArrayToMesh(n,n.byteLength,c);else if(u===e.POINT_CLOUD)c=new e.PointCloud,l=t.DecodeArrayToPointCloud(n,n.byteLength,c);else throw Error(`THREE.DRACOLoader: Unexpected geometry type.`);if(!l.ok()||c.ptr===0)throw Error(`THREE.DRACOLoader: Decoding failed: `+l.error_msg());let d={index:null,attributes:[]};for(let n in o){let r=self[s[n]],l,u;if(a.useUniqueIDs)u=o[n],l=t.GetAttributeByUniqueId(c,u);else{if(u=t.GetAttributeId(c,e[o[n]]),u===-1)continue;l=t.GetAttribute(c,u)}let f=i(e,t,c,n,r,l);n===`color`&&(f.vertexColorSpace=a.vertexColorSpace),d.attributes.push(f)}return u===e.TRIANGULAR_MESH&&(d.index=r(e,t,c)),e.destroy(c),d}function r(e,t,n){let r=n.num_faces()*3,i=r*4,a=e._malloc(i);t.GetTrianglesUInt32Array(n,i,a);let o=new Uint32Array(e.HEAPF32.buffer,a,r).slice();return e._free(a),{array:o,itemSize:1}}function i(e,t,n,r,i,o){let s=n.num_points(),c=o.num_components(),l=a(e,i),u=c*i.BYTES_PER_ELEMENT,d=Math.ceil(u/4)*4,f=d/i.BYTES_PER_ELEMENT,p=s*u,m=s*d,h=e._malloc(p);t.GetAttributeDataArrayForAllPoints(n,o,l,p,h);let g=new i(e.HEAPF32.buffer,h,p/i.BYTES_PER_ELEMENT),_;if(u===d)_=g.slice();else{_=new i(m/i.BYTES_PER_ELEMENT);let e=0;for(let t=0,n=g.length;t<n;t++){for(let n=0;n<c;n++)_[e+n]=g[t*c+n];e+=f}}return e._free(h),{name:r,count:s,itemSize:c,array:_,stride:f}}function a(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}}var be={body:[`Cube.001`,`Slice`,`Slice.001`,`Slice.002`,`Slice.003`,`Box`,`trappe`],neck:[`Cou`],leds:[`Boutons LEDS`],head:[`Cube_Plate`,`Cube_Plate.001`,`Cube_Plate_Piece.001`,`Slice.004`,`Slice.005`,`Slice.006`,`Slice.007`,`Slice.008`],fanHub:[`Cylinder`],fanBlades:[`fan_blades`]},B={camera:{fov:32,azimuth:84*Math.PI/180,elevation:4*Math.PI/180,headFill:.76,drop:.34,shiftX:.55},orbit:{strength:.04,easePerFrame:.1},follow:{slowest:.02,slow:.04,fast:.1,headYaw:.3,headPitch:.1,headRoll:.08,bodyYaw:.03,bodyPitch:.015,bodyRoll:.004},errance:{ampX:.6,ampY:.35,fX:.05,fY:.037},son:{defaut:!1,master:.8,musique:.5,robot:.7,ui:.6,toucheGain:.12,fanGain:.05,allumageGain:.1,swooshGain:.14},orientation:{enabled:!0,demanderIOS:!0,plage:18,amorti:6,recentrage:.08,signeY:1},idle:{head:[{axis:`y`,amp:.012,f:.23/(2*Math.PI)},{axis:`x`,amp:.025,f:.51/(2*Math.PI)},{axis:`z`,amp:.018,f:.23/(2*Math.PI)}],body:[{axis:`y`,amp:.006,f:.51/(2*Math.PI)}],bobAmplitude:.0012,bobFrequency:1.2/(2*Math.PI)},fan:{idleRPM:62,hoverRPM:340,spinUp:1.8,spinDown:.9},env:{exr:new URL(`/robot/env.exr`,location.origin).href,intensity:1.37,rotationY:2.47,ambient:6684672,ambientIntensity:.65,exposure:.98},bake:{ao:new URL(`/robot/junca_ao.webp`,location.origin).href+`?v=`+t,lightmap:new URL(`/robot/junca_lightmap_1024.webp`,location.origin).href+`?v=`+t,aoIntensity:.32,lightmapIntensity:.29},decor:{fboHeightRatio:.75,noiseSpeed:.5,domeRadius:40,dodge:6174251,dodgeAmount:.2,floor:197379,envIntensity:.28,gain:.68,strata:2.5,phase:.41,maskMin:.12,extrapolation:1.7,zenith:.7,glow:{color:12059392,amount:1.5,u:.45,v:.62,radius:.105},brume:`cartes`,clouds:{count:24,size:1.2,devant:.9,profondeur:1.8,sway:.2,softness:.55,resolution:.25,upsampleSeuil:.04,opacity:.75,color:9384736,octaves:5,seuil:[.42,.8],driftSpeed:1.3,hauteurBiais:1.7,bandRatio:.6},fog:{enabled:!0,topOffset:0,feather:.3,amount:1.1,veil:.45,scale:1.3,drift:.01,color:5902344},bloom:{threshold:1.23,amount:.3},grain:.155,contrast:1.17,dark:{enabled:!0,base:0,grey:4589062,red:0,redMix:0,amount:4,envIntensity:.28,bloomThreshold:1.23}},plongee:{enabled:!0,etapes:[{id:`approche`,poids:3},{id:`plongee`,poids:12},{id:`traversee`,poids:2},{id:`sortie`,poids:1}],azimutFinal:90*Math.PI/180,flou:.55,vitesseRef:1.1,distanceFinale:.073,lentille:.35,lentilleTraversee:.55,lentilleBords:0,amorti:9,debug:!0,auto:{enabled:!0,seuilBas:.12,seuilHaut:.88,duree:.8,courbe:[.48,.09,.22,1]}},section:{forceMax:.15,gain:1,onde:2,flou:.5,amorti:10,forcer:0,bombe:.16,bombeFin:.45,bombeRelache:!1,bombeBords:1},perf:{nuages:!0,bloom:!0,cielChaqueImage:!0,grain:!0},pointer:{effect:`trail-avion`},ripple:{resolution:512,refraction:.75,dispersion:.5,ombrage:.4,reflet:.95,brillance:80,lumiereSouris:1,caustiques:.2,passes:2,amorti:.977,apparition:.36,couronne:9,rayon:.005,force:.02,variation:0,eclaboussures:.6,pluie:0},trailAvion:{life:.7,push:25,curlScale:.1,curlStrength:3,velScale:1.8,accelDissip:.8,radiusScale:.2,radiusBase:4,maxRadius:100,amount:6,rgbShift:.3,multiplier:5,colorMultiplier:10,shade:1},trail:{scale:.25,lowScale:.125,dissipation:[.975,.95,.8],push:25,curlScale:.02,curlStrength:3,amount:20,rgbShift:1,multiplier:1.25,colorMultiplier:1,shade:1.25,radiusMax:100,radiusDistance:100,domeDistortion:.1},screen:{aspect:16/9,glow:400198},render:{maxDPR:1.5,maxPixels:3686400,msaa:4,dprScroll:1.25,dprSections:1.5,dprTextures:null,fxaa:!1,reposHz:60,reposApres:.8,scrollApres:.5},surfaceDetail:!0,surface:{default:{scale:60,roughness:.12,normal:0,brush:2.2},mat_case_alu:{scale:170,roughness:.015,normal:0,brush:1.6},mat_case_anod:{scale:5,roughness:.1,normal:0,brush:2},mat_chrome:{scale:120,roughness:.04,normal:0,brush:5}}},xe=new URL(`/robot/junca_robot.glb`,location.origin).href+`?v=`+t,Se=e=>new h().setRGB((e>>16&255)/255,(e>>8&255)/255,(e&255)/255),Ce=`
float nrand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 ip = floor(p); vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);
  float res = mix(mix(nrand(ip), nrand(ip + vec2(1.0, 0.0)), u.x),
                  mix(nrand(ip + vec2(0.0, 1.0)), nrand(ip + vec2(1.0, 1.0)), u.x), u.y);
  return res * res;                       // relevé : au carré → distribution tirée vers 0
}
const mat2 mtx = mat2(0.80, 0.60, -0.60, 0.80);
float fbm(vec2 p, float time, float speed) {
  float f = 0.0;
  f += 0.500000 * vnoise(p - time * speed);
  p = mtx * p * 2.02;  f += 0.031250 * vnoise(p);
  p = mtx * p * 2.01;  f += 0.250000 * vnoise(p);
  p = mtx * p * 2.03;  f += 0.125000 * vnoise(p);
  p = mtx * p * 2.01;  f += 0.062500 * vnoise(p - time * (speed * 5.0));
  p = mtx * p * 2.04;  f += 0.015625 * vnoise(p + time * (speed * 5.0));
  return f / 0.96875;
}
float pattern(vec2 p, float time, float speed) {
  float f1 = fbm(p, time, speed);
  float f2 = fbm(p + f1, time, speed);
  return fbm(p + f2, time, speed);
}
`,we=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Te=`
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uSpeed;
${Ce}
float contrast(float x, float k) { return 0.5 + k * (x - 0.5); }
void main() {
  vec2 pos = vUv * 4.0; pos.x *= 1.5;
  float n = pattern(pos, uTime, uSpeed * 0.1);
  float base = 0.4;
  float refl = (n >= 0.999) ? n : min(base * base / (1.0 - n), 1.0);   // blendReflect
  float c = mix(base, refl, 0.5);
  c = contrast(c, 2.0) * 2.0;
  gl_FragColor = vec4(vec3(0.9 - c), 1.0);
}
`,Ee=class{constructor(){this.skyScene=new le,this.skyCamera=new re(-1,1,1,-1,0,1),this.skyMaterial=new o({vertexShader:we,fragmentShader:Te,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uSpeed:{value:B.decor.noiseSpeed}}});let e=new F(new u(2,2),this.skyMaterial);e.frustumCulled=!1,this.skyScene.add(e),this.skyRT=new O(64,64,{minFilter:N,magFilter:N,wrapS:b,wrapT:b,depthBuffer:!1,type:R});let t=B.decor;this.uniforms={tSky:{value:this.skyRT.texture},tTrail:{value:null},uTrailAmt:{value:B.trail.domeDistortion},uDodge:{value:Se(t.dodge)},uDodgeAmt:{value:t.dodgeAmount},uFloor:{value:new h(t.floor)},uGain:{value:t.gain},uStrata:{value:t.strata},uPhase:{value:t.phase},uMaskMin:{value:t.maskMin},uExtrap:{value:t.extrapolation},uZenith:{value:t.zenith},uFront:{value:.25},uDark:{value:+!!t.dark.enabled},uDarkBase:{value:new h(t.dark.base)},uDarkGrey:{value:new h(t.dark.grey)},uDarkRed:{value:new h(t.dark.red)},uDarkMix:{value:new w(t.dark.redMix,t.dark.amount)},uGlowColor:{value:new h(t.glow.color)},uGlow:{value:new P(t.glow.u,t.glow.v,t.glow.radius,t.glow.amount)},uResolution:{value:new w(1,1)}};let n=new k({color:16777215,roughness:1,metalness:0,side:1,envMapIntensity:t.dark.enabled?t.dark.envIntensity:t.envIntensity,dithering:!0,fog:!1,name:`dome`});n.onBeforeCompile=e=>{Object.assign(e.uniforms,this.uniforms),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vSkyUv;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
vSkyUv = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`
          #include <common>
          varying vec2 vSkyUv;
          uniform sampler2D tSky, tTrail;
          uniform float uTrailAmt, uDodgeAmt, uGain, uStrata, uPhase, uMaskMin, uExtrap, uZenith, uFront;
          uniform vec3 uDodge, uFloor, uGlowColor, uDarkBase, uDarkGrey, uDarkRed;
          uniform vec4 uGlow;
          uniform float uDark;
          uniform vec2 uDarkMix;
          uniform vec2 uResolution;
        `).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
  vec3 darkCol = vec3(0.0);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
  totalEmissiveRadiance += darkCol;`).replace(`#include <map_fragment>`,`
          #include <map_fragment>
          {
            vec2 uv = vSkyUv;
            // le fluide de la souris déforme légèrement les UV (relevé : fluid.rg × −0.1)
            vec2 sUv = gl_FragCoord.xy / uResolution;
            vec4 trail = texture2D(tTrail, sUv);
            uv += (trail.rg - 0.5) * -uTrailAmt * (trail.b + trail.a) * 0.5;

            vec2 skyUv = uv, skyUv2 = uv;
            skyUv.x += 0.5; skyUv2.x -= 0.75;
            vec3 n1 = texture2D(tSky, skyUv * 2.0).rgb;
            vec3 n2 = texture2D(tSky, skyUv2).rgb;
            // masque d'azimut : n1 face caméra, n2 dans le dos
            float m = smoothstep(0.30, 0.50, abs(fract(uv.x - uFront + 0.5) - 0.5) * 2.0);
            vec3 nm = mix(n1, n2, m);

            // le masque est une dent de scie sur l'élévation (mod(v × 5)): avec son
            // fov de 55° la couture tombe hors du sujet. Avec nos 32°, elle traverserait la tête.
            // On garde le PRINCIPE (masque d'élévation qui module la Negation) avec une bande
            // douce autour de l'horizon : près de l'horizon le blanc domine, loin le bruit creuse.
            // relevé: mod((v − phase) × 5, 1), forcé à 1 au-dessus de v − phase = 0.6.
            // Sa dent de scie a une COUTURE DURE (c'est sa « strate quasi noire » sous l'horizon,
            // cachée à l'origine par des blocs) ; elle tombait dans notre cadre. Même principe en
            // sinusoïde : continu, le bas de l'image reste clair, le haut se creuse.
            float v = uv.y - uPhase;
            float skyMask = mix(uMaskMin, 1.0, 0.5 - 0.5 * cos(6.2831853 * v * uStrata));
            skyMask = max(skyMask, step(0.6, v));
            vec3 col = mix(vec3(1.0), 1.0 - nm, skyMask);       // Negation sur base blanche
            col += vec3(smoothstep(0.45, 0.595, v)) * uZenith;  // remontée vers le zénith
            col = mix(vec3(1.0), col, skyMask * uExtrap);       // extrapolation : contraste
            col *= 1.15;
            col *= clamp(col, 0.0, 1.0);                        // écrase les gris, garde les blancs
            // la lueur rouge : une source dans la brume, côté caméra (u relatif à uFront)
            vec2 gd = vec2(fract(uv.x - uFront - uGlow.x + 0.5) - 0.5, (uv.y - uGlow.y) * 2.0);
            float glow = exp(-dot(gd, gd) / (uGlow.z * uGlow.z));
            col = mix(col, col * uGlowColor * 1.6 + uGlowColor * 0.35, glow * uGlow.w);

            // ── mode sombre : la densité du bruit (1 − ciel) devient une fumée qui s'AJOUTE au noir,
            // grise dans les masses, rouge dans les noyaux denses et autour de la lueur.
            if (uDark > 0.5) {
              float dens = clamp((0.78 - nm.r) / 0.42, 0.0, 1.0);
              dens *= mix(0.35, 1.0, skyMask);
              float redMask = clamp(dens * dens * 0.8 + glow * 1.5, 0.0, 1.0) * uDarkMix.x;
              vec3 smoke = mix(uDarkGrey, uDarkRed, redMask) * dens * uDarkMix.y;
              // ÉMISSIF, pas diffus : sinon l'environnement (fenêtres froides de l'HDRI) teinte la fumée en bleu.
              darkCol = (uDarkBase + smoke + uGlowColor * glow * uGlow.w * 0.6) * uGain;
              col = vec3(0.0);
            }
            diffuseColor.rgb = col * uGain;
          }
        `).replace(`vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;`,`vec3 totalDiffuse = reflectedLight.indirectDiffuse;`).replace(`#include <opaque_fragment>`,`
          #include <opaque_fragment>
          {
            vec3 c = gl_FragColor.rgb;
            vec3 dodge = min(c / (1.0 - min(uDodge, vec3(0.98))), vec3(64.0));
            c = mix(c, dodge, uDodgeAmt * (1.0 - uDark));     // pas de dodge en mode sombre
            c = max(c, uFloor);
            gl_FragColor = vec4(c, 0.0);
          }
        `)},n.customProgramCacheKey=()=>`junca-dome`,this.material=n,this.dome=new F(new r(t.domeRadius,10),n),this.dome.name=`dome`,this.dome.frustumCulled=!1,this.dome.renderOrder=-10}setSize(e,t,n){let r=Math.max(64,Math.round(t*B.decor.fboHeightRatio));this.skyRT.setSize(r,r),this.uniforms.uResolution.value.set(e*n,t*n)}setTrail(e){this.uniforms.tTrail.value=e}update(e){this.skyMaterial.uniforms.uTime.value=e}renderSky(e){let t=e.getRenderTarget();e.setRenderTarget(this.skyRT),e.render(this.skyScene,this.skyCamera),e.setRenderTarget(t)}dispose(){this.skyRT.dispose(),this.skyMaterial.dispose(),this.material.dispose(),this.dome.geometry.dispose()}},V=e=>new h(e),H={mat_case_alu:()=>new k({name:`mat_case_alu`,color:V(4653056),metalness:.83,roughness:.39,side:2}),mat_case_anod:()=>new k({name:`mat_case_anod`,color:V(16711680),metalness:1,roughness:.67,side:2}),mat_chrome:()=>new k({name:`mat_chrome`,color:V(11647170),metalness:1,roughness:.04}),mat_fan:()=>new k({name:`mat_fan`,color:V(2567477),metalness:.9,roughness:.48}),mat_grille:()=>new k({name:`mat_grille`,color:V(131587),metalness:.8,roughness:.62}),mat_rubber:()=>new k({name:`mat_rubber`,color:V(131587),metalness:0,roughness:.85}),mat_pencil:()=>new k({name:`mat_pencil`,color:V(8145415),metalness:0,roughness:.55}),mat_graphite:()=>new k({name:`mat_graphite`,color:V(197380),metalness:.3,roughness:.4}),mat_glass:()=>new A({name:`mat_glass`,color:V(1184274),metalness:0,roughness:.045,opacity:.3,transparent:!0,clearcoat:1,clearcoatRoughness:.03,side:2,depthWrite:!1}),Screen:()=>new k({name:`Screen`,color:V(257),roughness:.62,metalness:0}),ScreenGlow:()=>new k({name:`ScreenGlow`,color:V(0),emissive:V(400198),emissiveIntensity:0,transparent:!0,opacity:.55,depthWrite:!1})};for(let e of[`LED_pwr`,`LED_net`,`LED_sync`,`LED_err`])H[e]=()=>new k({name:e,color:V(65793),emissive:V(764762),emissiveIntensity:1.4,roughness:.35,metalness:0});H.OLED_strip=()=>new k({name:`OLED_strip`,color:V(1),emissive:V(3568334),emissiveIntensity:1.1,roughness:.5,metalness:0});var De={body:`mat_case_alu`,head:`mat_case_alu`,neck:`mat_chrome`,fanHub:`mat_chrome`,fanBlades:`mat_fan`,leds:`LED_pwr`},Oe=new Set([`Screen`,`ScreenGlow`,`mat_glass`]);function ke(e){let t=e.onBeforeCompile;e.onBeforeCompile=(e,n)=>{t&&t(e,n),e.fragmentShader=e.fragmentShader.replace(`irradiance += lightMapIrradiance;`,``).replace(`#include <aomap_fragment>`,`
        #include <aomap_fragment>
        #ifdef USE_LIGHTMAP
          vec3 lmTexel = texture2D( lightMap, vLightMapUv ).rgb;
          reflectedLight.indirectDiffuse *= mix( vec3( 1.0 ), lmTexel, lightMapIntensity );
        #endif
      `)},e.customProgramCacheKey=()=>`junca-mul-lightmap`}var Ae=class{constructor(){this.cache=new Map,this.missing=new Set,this.usedFallback=!1,this.bake=null}get(e){if(!this.cache.has(e)){let t=H[e];if(!t)return this.missing.add(e),this.get(`mat_case_alu`);let n=t();Oe.has(e)||ke(n),this.cache.set(e,n)}return this.cache.get(e)}apply(e,t){let n=e.material&&e.material.name;if(e.userData.__srcMaterial=n||null,n&&H[n])return e.material=this.get(n),n;n&&this.missing.add(n),this.usedFallback=!0;let r=De[t]||`mat_case_alu`;return e.material=this.get(r),r}async loadBake({ao:e,lightmap:t,aoIntensity:n=1,lightmapIntensity:r=.8}){let i=new M,a=async e=>{let t=await i.loadAsync(e);return t.colorSpace=c,t.channel=1,t.flipY=!1,t.anisotropy=4,t},o=null,s=null;try{o=await a(e)}catch(e){console.warn(`AO cuite absente :`,e.message)}try{s=await a(t)}catch(e){console.warn(`lightmap cuit absent :`,e.message)}for(let[e,t]of this.cache)Oe.has(e)||(o&&(t.aoMap=o,t.aoMapIntensity=n),s&&(t.lightMap=s,t.lightMapIntensity=r),t.needsUpdate=!0);return this.bake={ao:o,lightmap:s},this.bake}dispose(){for(let e of this.cache.values())e.dispose()}},je=class{constructor(e,t=4,{tactile:n=!1}={}){this.el=e,this.damping=t,this.raw={x:0,y:0},this.value={x:0,y:0},this.present=n,this.tactile=n,this._move=e=>{let t=e.touches?e.touches[0]:e;t&&(this.raw.x=t.clientX/window.innerWidth*2-1,this.raw.y=-(t.clientY/window.innerHeight*2-1),this.present=!0)},this._leave=()=>{this.raw.x=0,this.raw.y=0,this.present=!1},!n&&(window.addEventListener(`pointermove`,this._move,{passive:!0}),document.addEventListener(`pointerleave`,this._leave),window.addEventListener(`blur`,this._leave))}update(e){this.value.x=T.damp(this.value.x,this.raw.x,this.damping,e),this.value.y=T.damp(this.value.y,this.raw.y,this.damping,e)}dispose(){window.removeEventListener(`pointermove`,this._move),document.removeEventListener(`pointerleave`,this._leave),window.removeEventListener(`blur`,this._leave)}},Me=T.lerp,Ne=(e,t,n)=>{let r=T.clamp((e-t)/(n-t),0,1);return r*r*(3-2*r)},Pe=new E(0,1,0),Fe=class{constructor(e){this.headPivot=new p,this.headPivot.name=`headPivot`,this.bodyPivot=new p,this.bodyPivot.name=`bodyPivot`,this.root=new p,this.root.name=`robot`,this.root.add(this.bodyPivot,this.headPivot);let t=new E,n=e.neck&&e.neck.length?e.neck:e.head,r=new ae;for(let e of n)r.expandByObject(e);if(r.getCenter(t),t.y=r.max.y,!e.neck||!e.neck.length){let n=new ae;for(let t of e.head)n.expandByObject(t);n.getCenter(t),t.y=n.min.y}this.headPivot.position.copy(t),this.pivotSource=e.neck&&e.neck.length?`sommet du cou`:`BASE DE LA TÊTE (cou absent)`,this.pivotPosition=t.clone();for(let n of e.head)n.position.sub(t),this.headPivot.add(n);for(let t of[`body`,`neck`,`fanHub`])for(let n of e[t]||[])this.bodyPivot.add(n);this.blades=(e.fanBlades||[])[0]||null,this.blades&&this.bodyPivot.add(this.blades),this.baseY=this.root.position.y,this.f={slowest:{x:0,y:0},slow:{x:0,y:0},fast:{x:0,y:0}},this.additive={head:{x:0,y:0,z:0},body:{x:0,y:0,z:0},bob:0},this.facing=new E(1,0,0),this.pitchAxis=new E(0,0,1),this.rollAxis=new E(1,0,0),this._qy=new m,this._qp=new m,this._qr=new m,this.fanSpeed=0,this.fanTarget=B.fan.idleRPM/60,this.attention=0,this.gain=1}setFacing(e){let t=e.clone().setY(0);return t.lengthSq()<1e-8?!1:(this.facing.copy(t.normalize()),this.rollAxis.copy(this.facing),this.pitchAxis.crossVectors(this.facing,Pe).normalize(),!0)}addImpulse(e,t,n){this.additive[e][t]+=n}setFanTarget(e){this.fanTarget=e/60}_compose(e,t,n,r){this._qy.setFromAxisAngle(Pe,t),this._qp.setFromAxisAngle(this.pitchAxis,n),this._qr.setFromAxisAngle(this.rollAxis,r),e.quaternion.copy(this._qy).multiply(this._qp).multiply(this._qr)}update(e,t,n){let r=B,i=t=>1-(1-t)**(e*60);for(let[e,t]of[[`slowest`,r.follow.slowest],[`slow`,r.follow.slow],[`fast`,r.follow.fast]]){let r=i(t),a=this.f[e];a.x+=(n.x-a.x)*r,a.y+=(n.y-a.y)*r}let a=this.f.slow,o={x:0,y:0,z:0},s={x:0,y:0,z:0};for(let e of r.idle.head)o[e.axis]+=e.amp*Math.sin(t*e.f*Math.PI*2);for(let e of r.idle.body)s[e.axis]+=e.amp*Math.sin(t*e.f*Math.PI*2);let c=r.idle.bobAmplitude*Math.sin(t*r.idle.bobFrequency*Math.PI*2),l=r.follow,u=Ne(a.x,-1,1),d=Ne(a.y,-1,1),f=o.y+Me(-l.headYaw,l.headYaw,u)*this.gain+this.additive.head.y,p=o.x+Me(-l.headPitch,l.headPitch,d)*this.gain+this.additive.head.x,m=o.z+Me(l.headRoll,-l.headRoll,u)*this.gain+this.additive.head.z,h=s.y+Me(-l.bodyYaw,l.bodyYaw,u)*this.gain+this.additive.body.y,g=s.x+Me(-l.bodyPitch,l.bodyPitch,d)*this.gain+this.additive.body.x,_=s.z+Me(l.bodyRoll,-l.bodyRoll,u)*this.gain;this._compose(this.headPivot,f,p,m),this._compose(this.bodyPivot,h,g,_),this.headAngles={yaw:f,pitch:p,roll:m},this.root.position.y=this.baseY+c+this.additive.bob;let v=this.fanTarget>this.fanSpeed?B.fan.spinUp:B.fan.spinDown;this.fanSpeed=T.damp(this.fanSpeed,this.fanTarget,v,e),this.blades&&(this.blades.rotation.x-=this.fanSpeed*Math.PI*2*e);for(let t of[`head`,`body`])for(let n of[`x`,`y`,`z`])this.additive[t][n]*=.02**e;this.additive.bob*=.02**e}},Ie=e=>new h(e);function Le(e,{w:t,h:n,pos:r,rot:i=[0,0,0],color:a=16777215,power:o=1}){let s=new F(new u(t,n),new oe({color:Ie(a)}));return s.material.color.multiplyScalar(o),s.position.set(...r),s.rotation.set(...i),e.add(s),s}function Re(){let e=new le,t=new F(new ee(12,8,12),new k({side:1,color:Ie(920847),roughness:1}));return e.add(t),Le(e,{w:1.3,h:2.4,pos:[5.9,.9,1.6],rot:[0,-Math.PI/2,0],color:12113663,power:18}),Le(e,{w:1.3,h:2.4,pos:[5.9,.9,-1.2],rot:[0,-Math.PI/2,0],color:12113663,power:18}),Le(e,{w:1.6,h:2.2,pos:[-5.9,.8,.4],rot:[0,Math.PI/2,0],color:12113663,power:18}),Le(e,{w:.3,h:.3,pos:[-1.4,3.2,1.1],rot:[Math.PI/2,0,0],color:16753494,power:900}),Le(e,{w:4.2,h:.6,pos:[.4,.3,-5.9],rot:[0,0,0],color:12201511,power:5}),Le(e,{w:2.6,h:1.8,pos:[.6,3.9,.2],rot:[Math.PI/2,0,0],color:15922431,power:1.6}),e}async function ze(t,n){let r=new I(t);if(r.compileEquirectangularShader(),n)try{let{EXRLoader:t}=await e(async()=>{let{EXRLoader:e}=await import(`./EXRLoader.ZZJu5hrK.js`);return{EXRLoader:e}},__vite__mapDeps([0,1,2])),i=await new t().loadAsync(n);i.mapping=303;let a=r.fromEquirectangular(i),o=`${i.image.width}×${i.image.height}`;return i.dispose(),r.dispose(),{texture:a.texture,source:`EXR ${o}`}}catch(e){console.warn(`HDRI indisponible, retombée sur le studio procédural :`,e.message)}let i=r.fromScene(Re(),.02);return r.dispose(),{texture:i.texture,source:`studio procédural`}}var Be=`
varying vec3 vWPos;
varying vec3 vWNrm;

// hash entier : pas de sin(), ~10x moins cher. Sur un shader appelé douze fois
// par pixel, c'est la différence entre 120 fps et 20.
float h31(vec3 p){
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float vnoise(vec3 p){
  vec3 i = floor(p), f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h31(i+vec3(0,0,0)), h31(i+vec3(1,0,0)), u.x),
                 mix(h31(i+vec3(0,1,0)), h31(i+vec3(1,1,0)), u.x), u.y),
             mix(mix(h31(i+vec3(0,0,1)), h31(i+vec3(1,0,1)), u.x),
                 mix(h31(i+vec3(0,1,1)), h31(i+vec3(1,1,1)), u.x), u.y), u.z);
}
float fbm3(vec3 p){
  float f = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) { f += a * vnoise(p); p *= 2.03; a *= 0.5; }
  return f / 0.875;
}
// Projection par AXE DOMINANT plutôt que triplanaire à trois échantillons.
// Sur du hard surface les faces sont quasi planes : une seule projection suffit,
// et le raccord ne se voit que sur les congés, où le bruit est de toute façon
// écrasé par la courbure. Trois fois moins de travail par pixel — c'est ce qui
// ramène la scène de 36 à ~100 fps.
float tri(vec3 p, vec3 n){
  vec3 a = abs(n);
  if (a.x >= a.y && a.x >= a.z) return fbm3(vec3(p.y, p.z, 0.0));
  if (a.y >= a.z)               return fbm3(vec3(p.z, p.x, 0.0));
  return fbm3(vec3(p.x, p.y, 0.0));
}
`;function Ve(e,t={}){let n={uDetailScale:{value:t.scale??210},uRoughVar:{value:t.roughness??.22},uNormalAmt:{value:t.normal??0},uBrushAniso:{value:t.brush??3.5}};e.userData.detail=n;let r=e.onBeforeCompile;return e.onBeforeCompile=(e,t)=>{r&&r(e,t),Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${Be}`).replace(`#include <begin_vertex>`,`
        #include <begin_vertex>
        vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vWNrm = normalize(mat3(modelMatrix) * objectNormal);
      `),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${Be}
        uniform float uDetailScale, uRoughVar, uNormalAmt, uBrushAniso;`).replace(`#include <roughnessmap_fragment>`,`
        #include <roughnessmap_fragment>
        {
          vec3 n = normalize(vWNrm);
          // anisotropie : le grain est étiré sur un axe, comme un métal brossé
          vec3 p = vWPos * uDetailScale;
          p.y /= uBrushAniso;
          float d = tri(p, n);
          // atténuation à la distance : sous le pixel, un bruit non filtré
          // scintille à chaque frame. On le fond vers sa moyenne quand il
          // devient plus fin que l'échantillonnage écran.
          float px = length(fwidth(vWPos)) * uDetailScale;
          float fade = 1.0 - smoothstep(0.35, 1.2, px);
          roughnessFactor = clamp(roughnessFactor + (d - 0.5) * uRoughVar * fade, 0.02, 1.0);
        }
      `).replace(`#include <normal_fragment_maps>`,`
        #include <normal_fragment_maps>
        if (uNormalAmt > 0.0001) {
          vec3 n = normalize(vWNrm);
          float e = 1.0 / uDetailScale;
          vec3 p = vWPos * uDetailScale;
          float c  = tri(p, n);
          vec3 g = vec3(tri(p + vec3(1.0,0.0,0.0), n) - c,
                        tri(p + vec3(0.0,1.0,0.0), n) - c,
                        tri(p + vec3(0.0,0.0,1.0), n) - c);
          normal = normalize(normal - g * uNormalAmt);
        }
      `)},e.customProgramCacheKey=()=>`junca-surface-detail+lightmap`,e.needsUpdate=!0,e}var He=(e,t,n)=>e+(t-e)*n,Ue=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,We=`
precision highp float;
varying vec2 vUv;
uniform sampler2D u_prevPaintTexture, u_lowPaintTexture;
uniform vec4  u_drawFrom, u_drawTo;      // xy : pixels du FBO, z : rayon, w : poids
uniform vec2  u_vel, u_paintTexelSize, u_scrollOffset;
uniform vec3  u_dissipations;
uniform float u_pushStrength, u_curlScale, u_curlStrength;

vec2 sdSegment(in vec2 p, in vec2 a, in vec2 b) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
  return vec2(length(pa - ba * h), h);
}
vec2 hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy) * 2.0 - 1.0;
}
// bruit gradient d'iq, avec ses dérivées analytiques : (valeur, d/dx, d/dy)
vec3 noised(in vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  vec2 du = 30.0 * f * f * (f * (f - 2.0) + 1.0);
  vec2 ga = hash(i + vec2(0.0, 0.0)), gb = hash(i + vec2(1.0, 0.0));
  vec2 gc = hash(i + vec2(0.0, 1.0)), gd = hash(i + vec2(1.0, 1.0));
  float va = dot(ga, f - vec2(0.0, 0.0)), vb = dot(gb, f - vec2(1.0, 0.0));
  float vc = dot(gc, f - vec2(0.0, 1.0)), vd = dot(gd, f - vec2(1.0, 1.0));
  return vec3(va + u.x * (vb - va) + u.y * (vc - va) + u.x * u.y * (va - vb - vc + vd),
              ga + u.x * (gb - ga) + u.y * (gc - ga) + u.x * u.y * (ga - gb - gc + gd)
              + du * (u.yx * (va - vb - vc + vd) + vec2(vb, vc) - va));
}
void main() {
  vec2 res = sdSegment(gl_FragCoord.xy, u_drawFrom.xy, u_drawTo.xy);
  vec2 radiusWeight = mix(u_drawFrom.zw, u_drawTo.zw, res.y);
  float d = 1.0 - smoothstep(-0.01, radiusWeight.x, res.x);
  vec4 lowData = texture2D(u_lowPaintTexture, vUv - u_scrollOffset);
  vec2 velInv = (0.5 - lowData.xy) * u_pushStrength;
  vec3 noise3 = noised(gl_FragCoord.xy * u_curlScale * (1.0 - lowData.xy));
  vec2 noise = noised(gl_FragCoord.xy * u_curlScale * (2.0 - lowData.xy * (0.5 + noise3.x) + noise3.yz * 0.1)).yz;
  velInv += noise * (lowData.z + lowData.w) * u_curlStrength;
  vec4 data = texture2D(u_prevPaintTexture, vUv - u_scrollOffset + velInv * u_paintTexelSize);
  data.xy -= 0.5;
  vec4 delta = (u_dissipations.xxyz - 1.0) * data;
  vec2 newVel = u_vel * d;
  delta += vec4(newVel, radiusWeight.yy * d);
  delta.zw = sign(delta.zw) * max(vec2(0.004), abs(delta.zw));
  data += delta;
  data.xy += 0.5;
  gl_FragColor = clamp(data, vec4(0.0), vec4(1.0));
}
`,Ge=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tMap;
uniform vec2 uDelta;
void main() {
  vec4 s = vec4(0.0);
  s += texture2D(tMap, vUv - 4.0 * uDelta) * 0.0162;
  s += texture2D(tMap, vUv - 3.0 * uDelta) * 0.0540;
  s += texture2D(tMap, vUv - 2.0 * uDelta) * 0.1216;
  s += texture2D(tMap, vUv - 1.0 * uDelta) * 0.1946;
  s += texture2D(tMap, vUv)                * 0.2270;
  s += texture2D(tMap, vUv + 1.0 * uDelta) * 0.1946;
  s += texture2D(tMap, vUv + 2.0 * uDelta) * 0.1216;
  s += texture2D(tMap, vUv + 3.0 * uDelta) * 0.0540;
  s += texture2D(tMap, vUv + 4.0 * uDelta) * 0.0162;
  gl_FragColor = s;
}
`,Ke=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tMap;
void main() { gl_FragColor = texture2D(tMap, vUv); }
`;function qe(e,t){return new O(e,t,{minFilter:N,magFilter:N,type:R,wrapS:x,wrapT:x,depthBuffer:!1})}var Je=class{constructor(){let e=B.trail;this.prev=qe(4,4),this.curr=qe(4,4),this.low=qe(4,4),this.lowBlur=qe(4,4),this.size=new w(4,4),this.lowSize=new w(4,4),this.paint=new o({vertexShader:Ue,fragmentShader:We,depthTest:!1,depthWrite:!1,uniforms:{u_prevPaintTexture:{value:null},u_lowPaintTexture:{value:null},u_drawFrom:{value:new P(-100,-100,0,0)},u_drawTo:{value:new P(-100,-100,0,0)},u_vel:{value:new w},u_paintTexelSize:{value:new w},u_scrollOffset:{value:new w},u_dissipations:{value:new E(...e.dissipation)},u_pushStrength:{value:e.push},u_curlScale:{value:e.curlScale},u_curlStrength:{value:e.curlStrength}}}),this.blur=new o({vertexShader:Ue,fragmentShader:Ge,depthTest:!1,depthWrite:!1,uniforms:{tMap:{value:null},uDelta:{value:new w}}}),this.copy=new o({vertexShader:Ue,fragmentShader:Ke,depthTest:!1,depthWrite:!1,uniforms:{tMap:{value:null}}}),this.quad=new z(this.paint),this.last=new w(-1e4,-1e4),this.vel=new w,this.hasLast=!1,this.needsClear=!0}get texture(){return this.curr.texture}setSize(e,t){let n=B.trail,r=Math.max(4,Math.floor(e*n.scale)),i=Math.max(4,Math.floor(t*n.scale)),a=Math.max(4,Math.floor(e*n.lowScale)),o=Math.max(4,Math.floor(t*n.lowScale));this.prev.setSize(r,i),this.curr.setSize(r,i),this.low.setSize(a,o),this.lowBlur.setSize(a,o),this.size.set(r,i),this.lowSize.set(a,o),this.paint.uniforms.u_paintTexelSize.value.set(1/r,1/i),this.cssW=e,this.cssH=t,this.needsClear=!0}get avion(){return B.pointer.effect===`trail-avion`}update(e,t,n,r,i,a){let o=this.avion,s=o?B.trailAvion:B.trail,c=this.paint.uniforms,l=e.getRenderTarget();if(o){let e=s.life;c.u_dissipations.value.set(He(.95,.992,e),He(.9,.998,e),He(.4,.7,e))}else c.u_dissipations.value.set(...s.dissipation);if(c.u_pushStrength.value=s.push,c.u_curlScale.value=s.curlScale,c.u_curlStrength.value=s.curlStrength,this.needsClear){e.setClearColor(new h(.5,.5,0),0);for(let t of[this.prev,this.curr,this.low,this.lowBlur])e.setRenderTarget(t),e.clear();this.copy.uniforms.tMap.value=null,this.needsClear=!1,this.hasLast=!1}let u=(t.x*.5+.5)*this.size.x,d=(t.y*.5+.5)*this.size.y,f=0;if(n){if(this.hasLast){let e=u-this.last.x,t=d-this.last.y,n=Math.hypot(e/this.size.x*i,t/this.size.y*a);o?(f=Math.min(n,s.maxRadius)*s.radiusScale+s.radiusBase,this.vel.x=this.vel.x*s.accelDissip+e*s.velScale,this.vel.y=this.vel.y*s.accelDissip+t*s.velScale):(f=Math.min(n/s.radiusDistance,1)*s.radiusMax/a*this.size.y,this.vel.x=this.vel.x*.8+e*r*.8,this.vel.y=this.vel.y*.8+t*r*.8),c.u_drawFrom.value.set(this.last.x,this.last.y,f,1)}else c.u_drawFrom.value.set(u,d,0,0),this.vel.set(0,0);c.u_drawTo.value.set(u,d,f,1),this.last.set(u,d),this.hasLast=!0}else c.u_drawFrom.value.set(-1e4,-1e4,0,0),c.u_drawTo.value.set(-1e4,-1e4,0,0),this.vel.multiplyScalar(o?s.accelDissip:.8),this.hasLast=!1;c.u_vel.value.copy(this.vel),c.u_prevPaintTexture.value=this.prev.texture,c.u_lowPaintTexture.value=this.lowBlur.texture,this.quad.material=this.paint,e.setRenderTarget(this.curr),this.quad.render(e),this.quad.material=this.blur,this.blur.uniforms.tMap.value=this.curr.texture,this.blur.uniforms.uDelta.value.set(2/this.lowSize.x,0),e.setRenderTarget(this.lowBlur),this.quad.render(e),this.blur.uniforms.tMap.value=this.lowBlur.texture,this.blur.uniforms.uDelta.value.set(0,2/this.lowSize.y),e.setRenderTarget(this.low),this.quad.render(e),[this.low,this.lowBlur]=[this.lowBlur,this.low],[this.prev,this.curr]=[this.curr,this.prev],e.setRenderTarget(l)}dispose(){for(let e of[this.prev,this.curr,this.low,this.lowBlur])e.dispose();this.quad.dispose()}},Ye=B.ripple.resolution,Xe=16,Ze=`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Qe=`precision highp float; varying vec2 vUv; uniform sampler2D uTexture; uniform vec4 uDrops[${Xe}]; uniform int uCount; uniform float uAspect;
void main(){ vec4 info = texture2D(uTexture, vUv);
  for (int i = 0; i < ${Xe}; i++) { if (i >= uCount) break; vec4 d = uDrops[i];
    float k = max(0.0, 1.0 - length((vUv - d.xy) * vec2(uAspect, 1.0)) / d.z); info.r += (0.5 - cos(k * 3.141592) * 0.5) * d.w; }
  gl_FragColor = info; }`,U=`precision highp float; varying vec2 vUv; uniform sampler2D uTexture; uniform vec2 uDelta; uniform float uDecay;
void main(){ vec4 info = texture2D(uTexture, vUv); vec2 dx = vec2(uDelta.x, 0.0), dy = vec2(0.0, uDelta.y);
  float n4 = texture2D(uTexture, vUv - dx).r + texture2D(uTexture, vUv + dx).r + texture2D(uTexture, vUv - dy).r + texture2D(uTexture, vUv + dy).r;
  float n8 = texture2D(uTexture, vUv - dx - dy).r + texture2D(uTexture, vUv - dx + dy).r + texture2D(uTexture, vUv + dx - dy).r + texture2D(uTexture, vUv + dx + dy).r;
  float avg = (n4 * 4.0 + n8) / 20.0;
  info.g += (avg - info.r) * 2.0; info.g *= uDecay; info.r += info.g; gl_FragColor = info; }`,$e=class{constructor(){let e={type:R,format:v,minFilter:N,magFilter:N,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1};this.read=new O(Ye,Ye,e),this.write=new O(Ye,Ye,e),this.delta=new w(1/Ye,1/Ye),this.scene=new le,this.camera=new re(-1,1,1,-1,0,1),this.drop=new o({vertexShader:Ze,fragmentShader:Qe,depthTest:!1,depthWrite:!1,uniforms:{uTexture:{value:null},uDrops:{value:Array.from({length:Xe},()=>new P)},uCount:{value:0},uAspect:{value:1}}}),this.update=new o({vertexShader:Ze,fragmentShader:U,depthTest:!1,depthWrite:!1,uniforms:{uTexture:{value:null},uDelta:{value:this.delta},uDecay:{value:B.ripple.amorti}}}),this.quad=new F(new u(2,2),this.update),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.aspect=1,this.frames=0,this.gouttes=[],this.differees=[],this.last=null,this.light=0,this.cleared=!1}get texture(){return this.read.texture}setSize(e,t){this.aspect=e/Math.max(t,1)}get calme(){let e=B.ripple;return Math.min(240,Math.max(60,Math.ceil(Math.log(.005)/(Math.max(1,Math.round(e.passes))*Math.log(Math.min(e.amorti,.999))))))}goutte(e,t,n,r){this.gouttes.push(e,t,n,r)}splash(){let e=B.ripple;this.frames=this.calme,this.goutte(.5,.5,.45,e.apparition);let t=Math.round(e.couronne);for(let n=0;n<t;n++){let r=n/t*Math.PI*2+Math.random()*.4,i=.26+Math.random()*.06;this.differees.push({f:7+n%3*3,g:[.5+Math.cos(r)*i/this.aspect,.5+Math.sin(r)*i,.06+Math.random()*.03,e.apparition*.4]})}}_pass(e,t){this.quad.material=t,e.setRenderTarget(this.write),e.render(this.scene,this.camera);let n=this.read;this.read=this.write,this.write=n}_verser(e){let t=this.gouttes;if(!t.length)return;let n=this.drop.uniforms;for(let r=0;r<t.length;r+=64){let i=Math.min(Xe,(t.length-r)/4);for(let e=0;e<i;e++)n.uDrops.value[e].set(t[r+e*4],t[r+e*4+1],t[r+e*4+2],t[r+e*4+3]);n.uCount.value=i,n.uAspect.value=this.aspect,n.uTexture.value=this.read.texture,this._pass(e,this.drop)}t.length=0}step(e,t,n){let r=B.ripple,i=e.getRenderTarget();this.cleared||=(e.setRenderTarget(this.read),e.clear(),e.setRenderTarget(this.write),e.clear(),!0);for(let e=this.differees.length-1;e>=0;e--){let t=this.differees[e];--t.f<=0&&(this.goutte(...t.g),this.differees.splice(e,1))}let a=t.x*.5+.5,o=t.y*.5+.5;if(n){let e=this.last;if(e){let t=Math.hypot((a-e.x)*this.aspect,o-e.y);if(t>.002){let n=Math.min(24,Math.max(1,Math.ceil(t/.012))),i=Math.min(1,.35+t*6);for(let t=1;t<=n;t++){let s=t/n,c=e.x+(a-e.x)*s,l=e.y+(o-e.y)*s,u=r.rayon*(1+(Math.random()*2-1)*r.variation*.6);if(this.goutte(c,l,u,r.force*i*(u/r.rayon)),Math.random()<r.eclaboussures*.5){let e=Math.random()*Math.PI*2,t=r.rayon*(1.2+Math.random()*1.6);this.goutte(c+Math.cos(e)*t/this.aspect,l+Math.sin(e)*t,r.rayon*.3,r.force*i*.5)}}this.frames=this.calme}}else this.frames=Math.max(this.frames,1);this.last={x:a,y:o},r.pluie>0&&Math.random()<r.pluie/60&&(this.goutte(.05+Math.random()*.9,.05+Math.random()*.9,r.rayon*(.35+Math.random()*.3),r.force*.45),this.frames=Math.max(this.frames,Math.min(90,this.calme)))}else this.last=null;this._verser(e),this.light+=((n?r.lumiereSouris:0)-this.light)*.12;let s=!1;if(this.frames>0){this.update.uniforms.uDecay.value=r.amorti;for(let t=0;t<Math.round(r.passes);t++)this.update.uniforms.uTexture.value=this.read.texture,this._pass(e,this.update);this.frames--,s=!0}return e.setRenderTarget(i),this.lightUv={x:a,y:o,k:this.light},this.active=s,s}dispose(){this.read.dispose(),this.write.dispose(),this.drop.dispose(),this.update.dispose(),this.quad.geometry.dispose()}},et=`
  attribute vec3 a_pos;
  attribute vec3 a_rand;
  attribute float a_scale;
  uniform float u_time;
  uniform float u_size;
  uniform float u_groundY;
  uniform float u_band;
  uniform float u_sway;
  varying vec2 vUv;
  varying float vOpacity;
  varying vec2 vScroll;
  varying float v_viewZ;
  void main(){
    vUv = uv;
    float size = u_size * a_scale;
    // plus dense au ras du sol, fond vite en montant (brume qui hugge le sol)
    float h = clamp((a_pos.y - u_groundY) / u_band, 0.0, 1.0);
    vOpacity = pow(1.0 - h, 1.6);
    vScroll = vec2(u_time * 0.012 + a_rand.x * 10.0, u_time * 0.007 + a_rand.y * 10.0);
    // léger balancement world-space → la brume vit et roule
    vec3 p = a_pos;
    p.x += sin(u_time * 0.18 + a_rand.x * 6.2831) * u_sway;
    p.z += cos(u_time * 0.14 + a_rand.y * 6.2831) * u_sway;
    p.y += sin(u_time * 0.11 + a_rand.z * 6.2831) * u_sway * 0.4;
    // billboard espace-vue (face caméra)
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    v_viewZ = mv.z;
    // GARDE near-plane : si le centre passe derrière/trop près de la caméra, on JETTE le quad
    // (sinon projection dégénérée → interpolation NaN → carré noir à l'écran).
    if (mv.z > -u_size * 0.05) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    mv.xy += position.xy * size;
    gl_Position = projectionMatrix * mv;
  }
`,W=e=>`
  precision highp float;
  #include <packing>
  uniform vec3 u_color;
  uniform float u_opacity;
  uniform sampler2D u_depthTexture;
  uniform vec2 u_resolution;
  uniform float u_near;
  uniform float u_far;
  uniform float u_softness;
  uniform float u_softEnabled;
  uniform float u_seuilA;
  uniform float u_seuilB;
  varying vec2 vUv;
  varying float vOpacity;
  varying vec2 vScroll;
  varying float v_viewZ;
  float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i), b = hash(i + vec2(1.0, 0.0)), c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  float fbm(vec2 p){
    float v = 0.0, amp = 0.55;
    for (int i = 0; i < ${e}; i++){ v += amp * vnoise(p); p *= 2.0; amp *= 0.5; }
    return v;
  }
  void main(){
    // carte ronde à bord très doux — hors du disque, on sort AVANT le fbm : le quad gaspille
    // 21 % de sa surface dans ses coins, et ces cartes sont énormes à l'écran.
    float r = length(vUv - 0.5) * 2.0;
    if (r > 1.0 || vOpacity < 0.004) discard;
    float edge = smoothstep(1.0, 0.1, r);
    edge *= edge;
    // nuage fbm animé
    float n = fbm(vUv * 3.0 + vScroll);
    n = smoothstep(u_seuilA, u_seuilB, n);
    float a = edge * n * vOpacity * u_opacity;
    // soft-particle depth fade : estompe la carte là où elle s'approche de la géométrie opaque
    vec2 sUv = gl_FragCoord.xy / u_resolution;
    float sceneDepth = texture2D(u_depthTexture, sUv).x;
    float sceneViewZ = perspectiveDepthToViewZ(sceneDepth, u_near, u_far);
    float fade = clamp((v_viewZ - sceneViewZ) / u_softness, 0.0, 1.0);
    a *= mix(1.0, fade, u_softEnabled);
    gl_FragColor = vec4(u_color, a);
  }
`;function G(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var tt=class{constructor({center:e,radius:t,groundY:n,band:r,front:i}){let s=B.decor.clouds,c=s.count,l=G(96),d=new Float32Array(c*3),p=new Float32Array(c*3),m=new Float32Array(c),_=i?i.x:0,v=i?i.z:1;for(let i=0;i<c;i++){let a=l()*Math.PI*2,o=t*(.15+Math.sqrt(l())*1.05),c=Math.cos(a)*o,u=Math.sin(a)*o,f=c*_+u*v,h=f*s.profondeur+t*s.devant;d[i*3]=e.x+(c-f*_)+h*_,d[i*3+1]=n+l()**+(s.hauteurBiais??1.7)*r,d[i*3+2]=e.z+(u-f*v)+h*v,p[i*3]=l(),p[i*3+1]=l(),p[i*3+2]=l(),m[i]=.7+l()*.9}let y=new u(1,1),b=new g;b.index=y.index,b.setAttribute(`position`,y.attributes.position),b.setAttribute(`uv`,y.attributes.uv),b.setAttribute(`a_pos`,new a(d,3)),b.setAttribute(`a_rand`,new a(p,3)),b.setAttribute(`a_scale`,new a(m,1)),b.instanceCount=c,b.boundingSphere=new f(e.clone(),t*(4+s.profondeur+s.devant)),this.material=new o({uniforms:{u_time:{value:0},u_size:{value:t*s.size},u_groundY:{value:n},u_band:{value:r},u_sway:{value:t*s.sway},u_color:{value:new h(s.color)},u_opacity:{value:s.opacity},u_depthTexture:{value:null},u_resolution:{value:new w(1,1)},u_near:{value:.01},u_far:{value:200},u_softness:{value:t*s.softness},u_softEnabled:{value:1},u_seuilA:{value:s.seuil[0]},u_seuilB:{value:s.seuil[1]}},vertexShader:et,fragmentShader:W(Math.max(1,Math.round(s.octaves))),transparent:!0,depthWrite:!1,depthTest:!1,blending:1,name:`clouds`}),this.mesh=new F(b,this.material),this.mesh.frustumCulled=!1,this.mesh.name=`clouds`,this.scene=new le,this.scene.add(this.mesh),this.radius=t,this.t0=null,this.target=new O(4,4,{type:R,minFilter:N,magFilter:N,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1})}get texture(){return this.target.texture}setSize(e,t){let n=B.decor.clouds.resolution,r=Math.max(4,Math.round(e*n)),i=Math.max(4,Math.round(t*n));this.target.setSize(r,i),this.material.uniforms.u_resolution.value.set(r,i)}render(e,t,n){let r=this.material.uniforms;r.u_depthTexture.value=n,r.u_near.value=t.near,r.u_far.value=t.far;let i=e.getRenderTarget();e.setRenderTarget(this.target),e.setClearColor(0,0),e.clear(),e.render(this.scene,t),e.setRenderTarget(i)}update(e){this.t0===null&&(this.t0=e),this.material.uniforms.u_time.value=(e-this.t0)*B.decor.clouds.driftSpeed}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.target.dispose()}},K={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new w(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},nt=1024,rt=`
uniform sampler2D tSection;   // papier + texte, statique
uniform sampler2D tBande;     // la piste entière du bandeau : logos blancs, alpha seul
uniform vec4 uBande;          // x = gauche de la piste (uv de section), y = largeur de la piste (uv), z = bas de la bande (v), w = haut (v)
vec3 sec_l2s(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
vec3 sec_s2l(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
// ⚠ SANS BRANCHE : un texture2D dans un if non uniforme a des dérivées indéfinies sur les pixels de
// la frontière, le GPU y prend un niveau de mipmap aberrant et l'alpha moyen de toute la bande assombrit
// ces pixels — mesuré : des tirets qui dessinaient la frontière de la bande, courbée par la lentille.
// La bande est donc échantillonnée partout, et masquée ; et le retour sRGB à vide est évité par un mix,
// pas par un if (l'aller-retour s2l(l2s(x)) décale le papier d'un rien, ce qui se voit aussi).
vec3 lireSection(vec2 uv) {
  vec3 col = texture2D(tSection, uv).rgb;
  float bx = (uv.x - uBande.x) / max(uBande.y, 1e-6);
  float by = (uv.y - uBande.z) / max(uBande.w - uBande.z, 1e-6);
  float dedans = step(0.0, bx) * step(bx, 1.0) * step(0.0, by) * step(by, 1.0) * step(1e-6, uBande.y);
  float a = texture2D(tBande, vec2(bx, by)).a * dedans;
  // le CSS compose « difference » en sRGB : blanc − papier = 1 − papier, sur des valeurs non linéaires
  vec3 s = sec_l2s(col);
  vec3 d = sec_s2l(mix(s, 1.0 - s, a));
  return mix(col, d, step(0.0001, a));
}
`;function q(e){let t=[],n=document.createRange(),r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),i;for(;i=r.nextNode();){let e=i.textContent,r=/\S+/g,a,o=-1,s=-1;for(;a=r.exec(e);){let r=a.index,c=r+a[0].length;if(o<0){o=r,s=c;continue}n.setStart(i,o),n.setEnd(i,c),n.getClientRects().length>1&&(n.setEnd(i,s),t.push({text:e.slice(o,s),rect:n.getBoundingClientRect()}),o=r),s=c}o>=0&&(n.setStart(i,o),n.setEnd(i,s),t.push({text:e.slice(o,s),rect:n.getBoundingClientRect()}))}return t}function J(e){return new Promise(t=>{let n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=e})}function it(e){let t=[...e.querySelectorAll(`h1, h2, h3, h4, p, li, span, a`)];return t.filter(e=>(e.textContent||``).trim().length&&!t.some(t=>t!==e&&e.contains(t)&&(t.textContent||``).trim().length))}var at=class{constructor({section:e,textes:t=null,bande:n=null,nom:r=e.className}){this.section=e,this.nom=r,this.cadre=e.closest(`.page-white`)||e.parentElement||e,this.textes=t?[...e.querySelectorAll(t)]:it(e),this.piste=n?.piste||null,this.items=n?.items||[],this.Hs=1,this.decalY=0,this.place={haut:0,hauteur:1},this.W=1,this.H=1,this.k=1,this.pret=!1,this.charge=!1,this.rect=null,this.papier=null,this.motif=null,this.canvasFond=document.createElement(`canvas`),this.canvasBande=document.createElement(`canvas`),this.texFond=null,this.texBande=null,this.bande=new P(0,0,0,0),this.pisteW=0,this.pisteH=0,this._chargement=this._charger(),this._surPolices=()=>{this.pret&&this.rasteriser()},document.fonts?.addEventListener?.(`loadingdone`,this._surPolices)}get texture(){return this.texFond}_textures(){this.texFond?.dispose(),this.texBande?.dispose(),this.texFond=new L(this.canvasFond),this.texFond.colorSpace=c,this.texFond.generateMipmaps=!0,this.texFond.minFilter=ne,this.texFond.magFilter=N,this.texBande=new L(this.canvasBande),this.texBande.colorSpace=``,this.texBande.generateMipmaps=!0,this.texBande.minFilter=ne,this.texBande.magFilter=N}async _charger(){let e=getComputedStyle(this.cadre).backgroundImage,t=e&&e.match(/url\(["']?([^"')]+)["']?\)/);this.papier=t?await J(t[1]):null,await Promise.all(this.items.map(e=>e.complete?null:new Promise(t=>{e.onload=e.onerror=t}))),await document.fonts?.ready,this.charge=!0,this.ecrit()&&this.rasteriser()}ecrit(){return this.textes.every(e=>!e.classList.contains(`scr-wait`)&&!e.querySelector(`.scr-char`))}preparer(){return this.pret||!this.charge||!this.ecrit()||this.rasteriser(),this.pret}setSize(e,t,n){let r=this.W!==e||this.k!==n;this.W=e,this.H=t,this.k=n,this.pret&&r&&this.rasteriser()}_origine(){let e=this.cadre.getBoundingClientRect();return{x:e.left,y:e.top}}_motif(e){if(!this.papier)return null;(!this.motif||this.motif.ctx!==e)&&(this.motif={ctx:e,p:e.createPattern(this.papier,`repeat`)});let t=nt/this.papier.naturalWidth*this.k;return this.motif.p.setTransform(new DOMMatrix().translate(0,-this.decalY*this.k).scale(t)),this.motif.p}rasteriser(){let{W:e,k:t}=this,n=this._origine(),r=this.section.getBoundingClientRect();this.decalY=r.top-n.y,this.Hs=Math.max(1,r.height);let i=Math.max(4,Math.round(e*t)),a=Math.max(4,Math.round(this.Hs*t)),o=this.canvasFond;(o.width!==i||o.height!==a)&&(o.width=i,o.height=a,this.motif=null);let s=o.getContext(`2d`);s.setTransform(1,0,0,1,0,0),s.fillStyle=getComputedStyle(this.cadre).backgroundColor||`#fbfbfb`,s.fillRect(0,0,i,a);let c=this._motif(s);c&&(s.fillStyle=c,s.fillRect(0,0,i,a)),s.setTransform(t,0,0,t,0,0),s.textBaseline=`alphabetic`;for(let e of this.textes){let t=getComputedStyle(e);s.font=`${t.fontStyle} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`,s.fillStyle=t.color,`letterSpacing`in s&&(s.letterSpacing=t.letterSpacing===`normal`?`0px`:t.letterSpacing);let r=t.textTransform===`uppercase`;for(let t of q(e)){let e=r?t.text.toUpperCase():t.text,i=s.measureText(e).fontBoundingBoxAscent??t.rect.height*.8;s.fillText(e,t.rect.left-n.x,t.rect.top-n.y-this.decalY+i)}}if(this.piste&&this.items.length){let e=this.piste.getBoundingClientRect();this.pisteW=e.width,this.pisteH=e.height;let n=Math.max(4,Math.round(e.width*t)),r=Math.max(4,Math.round(e.height*t)),i=this.canvasBande;(i.width!==n||i.height!==r)&&(i.width=n,i.height=r);let a=i.getContext(`2d`);a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,n,r),a.setTransform(t,0,0,t,0,0);for(let t of this.items){let n=t.getBoundingClientRect();a.drawImage(t,n.left-e.left,n.top-e.top,n.width,n.height)}}else this.pisteW=0,this.canvasBande.width=4,this.canvasBande.height=4;this._textures(),this.pret=!0}update(){let e=this.section.getBoundingClientRect(),{W:t,H:n,Hs:r}=this;if(this.place.haut=e.top/n,this.place.hauteur=r/n,this.rect=e,!this.pret||!this.piste||!this.pisteW){this.bande.set(0,0,0,0);return}let i=this.piste.getBoundingClientRect();this.bande.set((i.left-e.left+(e.left-this._origine().x))/t,i.width/t,1-(i.bottom-e.top)/r,1-(i.top-e.top)/r)}dispose(){document.fonts?.removeEventListener?.(`loadingdone`,this._surPolices),this.texFond?.dispose(),this.texBande?.dispose()}},ot=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,st=`
float hash13(vec3 p3) {
  p3 = fract(p3 * .1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
`,ct=`
// ── DISTORSION DE LENTILLE — fonctions DH et DV. k1 vaut toujours 0,
// donc la formule effective est f = 1 + force · r³, avec r la distance au centre en uv.
// « bords » n'est pas une force mais un interrupteur de recadrage : à 0 on zoome de 0,3655 × force
// pour manger les bords noirs que la distorsion crée, à 1 on les assume.
vec2 lentille(vec2 uv, float force, float bords) {
  if (force <= 0.0) return uv;
  vec2 c = uv - 0.5;
  float r2 = dot(c, c);
  float f = 1.0 + r2 * (force * sqrt(r2));
  vec2 d = c * f + 0.5;
  float n = mix(0.3655, 0.0, bords);
  return d * (1.0 - force * n) + force * n * 0.5;
}
`,lt=`
uniform vec3 uOnde; // x = force s, y = amplitude de l'onde, z = longueur du flou
uniform float uRampe;        // 0 → 1 : l'onde s'installe (une section qui vient de passer en WebGL ne doit pas sauter)
vec4 sectionOndulee(vec2 uv, float bruit) {
  float s = uOnde.x * uRampe;
  // à l'arrêt, huit lectures identiques ne valent pas une : branche sur un uniforme, sans divergence
  if (abs(s) < 0.0005) {
    float dedans = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    return vec4(lireSection(uv), 1.0) * dedans;
  }
  uv.x += cos(uv.y * 6.2831853) * uOnde.y * s * s;
  vec2 bit = vec2(0.0, -s * uOnde.z / 8.0);
  uv += bit * bruit;
  vec4 acc = vec4(0.0);
  for (int i = 0; i < 8; i++) {
    float dedans = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    acc += vec4(lireSection(uv), 1.0) * dedans;
    uv += bit;
  }
  return acc / 8.0;   // prémultiplié : rgb déjà pondéré par la couverture
}
`,ut=`
precision highp float;
#include <packing>
varying vec2 vUv;
uniform sampler2D tScene, tTrail, tBloom, tFog, tRipple, tClouds, tDepth;
uniform vec2  uCloudRes;      // taille, en pixels, de la cible des nuages
uniform float uNear, uFar, uUpSeuil;
uniform float uBloomAmount;
uniform vec2  uResolution;
uniform float uTime, uAmount, uRgbShift, uMultiplier, uColorMultiplier, uShadeTrail, uGrain, uContrast;
uniform float uRippleOn, uTrailOn, uRefr, uDisp, uShade, uSpec, uShine, uCaus;
uniform vec2  uRippleDelta;
uniform vec3  uLight;
uniform float uFlou;          // flou de mouvement radial : la plongée est un travelling, pas un panoramique
uniform vec2  uLentille;      // x = force, y = bords (0 = on recadre les bords noirs, 1 = on les montre)
uniform vec2  uPaintTexel;
uniform vec3  uFloor, uFogColor;
uniform vec4  uFog;          // x = haut (uv), y = dégradé, z = échelle, w = force
uniform vec2  uFogMix;       // x = occultation, y = dérive
uniform float uPlat;         // 0 : la scène ; 1 : la section à plat, telle que le DOM la montrera
${st}
${rt}
${lt}
${ct}

// ── SURÉCHANTILLONNAGE GUIDÉ PAR LA PROFONDEUR (« nearest-depth upsampling »).
// Les nuages sont rendus à une fraction de la résolution (clouds.js). Un simple bilinéaire y
// fait déborder la fumée sur la silhouette du robot : les quatre texels voisins mélangent du
// « devant » et du « derrière », et le mélange gagne sur le bord. Mesuré à 0,25 : un liseré
// d'environ quatre pixels sur les arêtes claires.
// On compare donc la profondeur LINÉAIRE des quatre texels basse résolution à celle du pixel
// plein écran. Tant qu'ils sont d'accord — au cœur d'une surface — le bilinéaire est meilleur,
// il lisse. Dès qu'ils divergent, c'est-à-dire exactement sur une discontinuité de profondeur,
// on prend celui qui colle. Le seuil est relatif à la distance : une même erreur en mètres ne
// veut pas dire la même chose à 30 cm et à 40 m.
float zLin(vec2 uv) { return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, uNear, uFar); }

vec4 nuagesUp(vec2 uv) {
  float zRef = zLin(uv);
  vec2 texel = 1.0 / uCloudRes;
  vec2 base = (floor(uv * uCloudRes - 0.5) + 0.5) * texel;
  float ecartMax = 0.0, meilleur = 1e20;
  vec2 uvChoisi = uv;
  for (int j = 0; j < 2; j++) for (int i = 0; i < 2; i++) {
    vec2 u2 = base + vec2(float(i), float(j)) * texel;
    float e = abs(zLin(u2) - zRef);
    ecartMax = max(ecartMax, e);
    if (e < meilleur) { meilleur = e; uvChoisi = u2; }
  }
  return texture2D(tClouds, ecartMax > uUpSeuil * zRef ? uvChoisi : uv);
}

void main() {
  vec3 col; float alpha;
  vec2 vUvL = lentille(vUv, uLentille.x, uLentille.y);
  vec2 uvEff = vUvL;         // uv après l'effet de pointeur : les nuages la suivent

  if (uRippleOn > 0.5) {
    // ── ONDULATION LIQUIDE — transcription du fragment d'affichage de LiquidMedia.tsx
    // Seule adaptation : l'image n'est pas une figure DOM mais la scène entière, donc le
    // « cadre » (cover + parallaxe) n'a pas lieu d'être et l'échantillonnage est direct.
    vec2 dx = vec2(uRippleDelta.x, 0.0), dy = vec2(0.0, uRippleDelta.y);
    float hL = texture2D(tRipple, vUvL - dx).r, hR = texture2D(tRipple, vUvL + dx).r;
    float hD = texture2D(tRipple, vUvL - dy).r, hU = texture2D(tRipple, vUvL + dy).r;
    vec2 grad = vec2(hR - hL, hU - hD);
    // réfraction, éteinte en fondu sur les 8 % du bord : poussée fort elle allait chercher
    // des pixels hors de l'image et étirait ceux du bord en bavures
    vec2 off = grad * uRefr * smoothstep(0.0, 0.08, min(min(vUvL.x, 1.0 - vUvL.x), min(vUvL.y, 1.0 - vUvL.y)));
    uvEff = vUvL + off;
    vec4 mid = texture2D(tScene, uvEff);
    // dispersion : le rouge dévie un peu plus que le vert, le bleu un peu moins
    col = vec3(texture2D(tScene, vUvL + off * (1.0 + uDisp)).r, mid.g, texture2D(tScene, vUvL + off * (1.0 - uDisp)).b);
    alpha = mid.a;
    vec3 n = normalize(vec3(-grad * 40.0, 1.0));
    vec3 lFixe = normalize(vec3(-0.4, 0.7, 0.6));
    vec3 lPointeur = normalize(vec3((uLight.xy - vUvL) * vec2(uResolution.x / uResolution.y, 1.0), 0.35));
    vec3 l = normalize(mix(lFixe, lPointeur, uLight.z));
    float ombre = dot(n, l) - l.z;                       // nul sur l'eau plate
    vec3 h = normalize(l + vec3(0.0, 0.0, 1.0));
    float reflet = max(pow(max(dot(n, h), 0.0), uShine) - pow(h.z, uShine), 0.0) * uSpec;
    float caus = 0.0;
    if (uCaus > 0.0) caus = max(4.0 * texture2D(tRipple, vUv).r - (hL + hR + hD + hU), 0.0) * uCaus * 25.0;
    col = col * (1.0 + ombre * uShade) + reflet + caus;
  } else if (uTrailOn < 0.5) {
    // ── aucun effet de pointeur : la scène telle quelle (levier de mesure, et repli)
    vec4 c0 = texture2D(tScene, vUvL);
    col = c0.rgb; alpha = c0.a;
  } else {
    // ── la distorsion de trail, relevé intégral
    vec4 trail = texture2D(tTrail, vUvL);
    float weight = (trail.z + trail.w) * 0.5;
    // MESURÉ (2026-09-15, 2573×1433) : les neuf échantillons pleine résolution coûtaient +5 ms par image,
    // souris immobile comprise — ils étaient pris PARTOUT, y compris là où il n'y a aucune encre, c'est-à-dire
    // presque tout l'écran. Sans encre la vitesse est nulle et les neuf lectures tombent sur le même texel :
    // un seul suffit. La branche dépend d'une texture SANS mipmaps (cible de rendu) : pas de LOD à casser.
    if (weight < 0.002) {
      vec4 c0 = texture2D(tScene, vUvL);
      col = c0.rgb; alpha = c0.a;
    } else {
      vec2 vel = (0.5 - trail.xy - 0.001) * 2.0 * weight;
      vec2 velocity = vel * uAmount / 4.0 * uPaintTexel * uMultiplier;
      vec3 bnoise = vec3(hash13(vec3(gl_FragCoord.xy, 17.0)), hash13(vec3(gl_FragCoord.yx, 29.0)), 0.0);
      vec2 uv = vUvL + bnoise.xy * velocity;
      vec4 acc = vec4(0.0);
      for (int i = 0; i < 9; i++) { acc += texture2D(tScene, uv); uv += velocity; }
      acc /= 9.0;
      col = acc.rgb; alpha = acc.a;
      col += sin(vec3(vel.x + vel.y) * 40.0 + vec3(0.0, 2.0, 4.0) * uRgbShift)
             * smoothstep(0.4, -0.9, weight) * uShadeTrail * max(abs(vel.x), abs(vel.y)) * uColorMultiplier;
    }
  }

  // ── FLOU DE MOUVEMENT. La plongée est un TRAVELLING : le flou juste est donc radial,
  // le long de (uv − centre), pas directionnel. Six échantillons suffisent, le bruit bleu
  // du grain masque le banding. À l'origine motionBlur est une constante par section ;
  // ici il suit la vitesse réelle du scroll, donc il n'existe que si le visiteur va vite.
  if (uFlou > 0.001) {
    vec2 r = (uvEff - 0.5) * uFlou;
    vec3 acc = col; float n = 1.0;
    for (int i = 1; i <= 6; i++) {
      float t = float(i) / 6.0;
      acc += texture2D(tScene, uvEff - r * t).rgb;
      n += 1.0;
    }
    col = acc / n;
  }

  // ── LES NUAGES, rendus à part en demi-résolution (clouds.js) : texture RGBA prémultipliée,
  // déjà occultée par le robot grâce à son propre tampon de profondeur. On la compose ICI,
  // avant le tone mapping, pour retrouver exactement ce que donnait leur rendu dans la scène :
  // l'alpha accumulé décide de la part de robot, donc de la part d'AgX.
  vec4 nuages = nuagesUp(uvEff);
  col = col * (1.0 - nuages.a) + nuages.rgb;
  alpha = alpha * (1.0 - nuages.a) + nuages.a;

  // ── le robot passe par AgX ; le dôme (alpha 0) garde sa valeur d'affichage
  vec3 mapped = col;
  #if defined( TONE_MAPPING )
    mapped = toneMapping(col);
  #endif
  col = mix(col, mapped, clamp(alpha, 0.0, 1.0));

  // ── bloom puis contraste projet
  col += texture2D(tBloom, vUvL).rgb * uBloomAmount;

  // ── brume de premier plan : le bruit du décor, devant le sujet, sous le ventilateur.
  // Même conversion densité que le mode sombre du dôme ((0.78 − bruit) / 0.42) pour que
  // les deux couches soient de la même matière, mais à une autre échelle et avec une
  // dérive propre : c'est cette parallaxe qui donne le relief.
  if (uFog.w > 0.0) {
    float mask = 1.0 - smoothstep(uFog.x - uFog.y, uFog.x, vUv.y);
    if (mask > 0.001) {
      float ratio = uResolution.x / max(uResolution.y, 1.0);
      vec2 fuv = vUv * vec2(uFog.z * ratio, uFog.z) + uTime * uFogMix.y * vec2(1.0, -0.55);
      float s = texture2D(tFog, fuv).r;
      float dens = clamp((0.78 - s) / 0.42, 0.0, 1.0) * mask * mask * uFog.w;
      col = col * (1.0 - uFogMix.x * dens) + uFogColor * dens;
    }
  }
  col = 0.5 + uContrast * (col - 0.5);
  col = max(col, uFloor);
  if (uGrain > 0.0) {
    float n = hash13(vec3(gl_FragCoord.xy, mod(uTime * 60.0, 977.0)));
    col *= (1.0 - uGrain) + uGrain * (0.5 + n);
  }

  // la section à plat, à travers la lentille (qui retombe à 0 quand le DOM reprend), avec la
  // courbure au scroll : hors de la texture (onde aux bords), on garde la scène derrière
  if (uPlat > 0.001) {
    vec4 sec = sectionOndulee(vUvL, hash13(vec3(gl_FragCoord.xy, 3.0)));
    col = mix(col, sec.rgb + col * (1.0 - sec.a), uPlat);
  }

  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`,dt=`
precision highp float;
varying vec2 vUv;
uniform float uHaut;         // haut de la section dans le cadre, en hauteurs de viewport (≤ 0 en montant)
uniform float uHauteur;      // hauteur de la section, en hauteurs de viewport
uniform float uTime;
uniform vec2 uBombe; // le bombé: force, bords — la même lentille que la composition
${st}
${rt}
${lt}
${ct}
void main() {
  // le bombé s'applique en repère VIEWPORT,
  // avant le placement de la section : c'est ce qui rend la phase B continue avec la fin de la plongée
  // …et chaque section l'attrape avec SA rampe d'entrée (la même que l'onde) : une section reprise au DOM
  // à plat se bombe en entrant, au lieu de sauter d'un coup
  vec2 vUvL = mix(vUv, lentille(vUv, uBombe.x, uBombe.y), uRampe);
  // écran → texture : la section couvre, en v (0 en bas), [1 − haut − hauteur, 1 − haut]
  vec2 uv = vec2(vUvL.x, (vUvL.y - (1.0 - uHaut - uHauteur)) / max(uHauteur, 1e-6));
  vec4 sec = sectionOndulee(uv, hash13(vec3(gl_FragCoord.xy, mod(uTime * 60.0, 977.0))));
  // ⚠ l'encodage sRGB doit se faire sur la couleur NON prémultipliée : encoder papier·a donnait un
  // liseré plus clair que le papier sur le bord flou de la section (mesuré à l'image). On dé-multiplie,
  // on encode, on re-multiplie : c'est ce que la toile (premultipliedAlpha) attend.
  vec3 c = sec.a > 0.0 ? sec.rgb / sec.a : vec3(0.0);
  gl_FragColor = vec4(c, sec.a);
  #include <colorspace_fragment>
  gl_FragColor.rgb *= gl_FragColor.a;
}
`,ft=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tMap;
uniform float uThreshold;
void main() {
  vec4 c = texture2D(tMap, vUv);
  vec3 col = c.rgb;
  #if defined( TONE_MAPPING )
    col = mix(col, toneMapping(col), clamp(c.a, 0.0, 1.0));
  #endif
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  gl_FragColor = vec4(col * smoothstep(uThreshold, uThreshold + 0.3, l), 1.0);
}
`,pt=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tMap;
uniform vec2 uDelta;
void main() {
  vec4 s = vec4(0.0);
  s += texture2D(tMap, vUv - 4.0 * uDelta) * 0.0162; s += texture2D(tMap, vUv - 3.0 * uDelta) * 0.0540;
  s += texture2D(tMap, vUv - 2.0 * uDelta) * 0.1216; s += texture2D(tMap, vUv - 1.0 * uDelta) * 0.1946;
  s += texture2D(tMap, vUv) * 0.2270;
  s += texture2D(tMap, vUv + 1.0 * uDelta) * 0.1946; s += texture2D(tMap, vUv + 2.0 * uDelta) * 0.1216;
  s += texture2D(tMap, vUv + 3.0 * uDelta) * 0.0540; s += texture2D(tMap, vUv + 4.0 * uDelta) * 0.0162;
  gl_FragColor = s;
}
`,mt=class{constructor(e){this.renderer=e,this.target=new O(4,4,{type:R,samples:B.render.msaa,depthBuffer:!0,stencilBuffer:!1,minFilter:N,magFilter:N}),this.target.depthTexture=new n(4,4,j),this.target.depthTexture.minFilter=this.target.depthTexture.magFilter=de;let t=B.decor,r=B.trail,i=B.ripple;this.material=new o({vertexShader:ot,fragmentShader:ut,depthTest:!1,depthWrite:!1,toneMapped:!0,uniforms:{tScene:{value:this.target.texture},tTrail:{value:null},uResolution:{value:new w(4,4)},uTime:{value:0},uAmount:{value:r.amount},uRgbShift:{value:r.rgbShift},uMultiplier:{value:r.multiplier},uColorMultiplier:{value:r.colorMultiplier},uShadeTrail:{value:r.shade},uPaintTexel:{value:new w(1,1)},tRipple:{value:null},uRippleOn:{value:0},uTrailOn:{value:1},uRippleDelta:{value:new w(1/256,1/256)},uRefr:{value:i.refraction},uDisp:{value:i.dispersion},uShade:{value:i.ombrage},uSpec:{value:i.reflet},uShine:{value:i.brillance},uCaus:{value:i.caustiques},uLight:{value:new E(.5,.5,0)},uLentille:{value:new w(0,0)},uFlou:{value:0},uGrain:{value:t.grain},uContrast:{value:t.contrast},tFog:{value:null},tClouds:{value:null},tDepth:{value:null},uCloudRes:{value:new w(1,1)},uNear:{value:.01},uFar:{value:200},uUpSeuil:{value:B.decor.clouds.upsampleSeuil},uFog:{value:new P(.3,t.fog.feather,t.fog.scale,t.fog.enabled?t.fog.amount:0)},uFogMix:{value:new w(t.fog.veil,t.fog.drift)},uFogColor:{value:new h(t.fog.color)},uFloor:{value:new h(t.dark.enabled?t.dark.base:t.floor)},tSection:{value:null},tBande:{value:null},uBande:{value:new P},uPlat:{value:0},uOnde:{value:new E(0,2,1)},uRampe:{value:1}}}),this.quad=new z(this.material);let a=e=>new O(e,e,{type:R,depthBuffer:!1,minFilter:N,magFilter:N});this.bloomA=a(4),this.bloomB=a(4),this.bright=new o({vertexShader:ot,fragmentShader:ft,depthTest:!1,depthWrite:!1,toneMapped:!0,uniforms:{tMap:{value:this.target.texture},uThreshold:{value:t.dark.enabled?t.dark.bloomThreshold:t.bloom.threshold}}}),this.blur=new o({vertexShader:ot,fragmentShader:pt,depthTest:!1,depthWrite:!1,uniforms:{tMap:{value:null},uDelta:{value:new w}}}),this.material.uniforms.tBloom={value:this.bloomA.texture},this.material.uniforms.uBloomAmount={value:t.bloom.amount},this.fxaaOn=!1,this.sortie=new O(4,4,{type:S,depthBuffer:!1,minFilter:N,magFilter:N}),this.sortie.texture.colorSpace=c,this.fxaa=new o({...K,uniforms:{tDiffuse:{value:this.sortie.texture},resolution:{value:new w(1/4,1/4)}},depthTest:!1,depthWrite:!1}),this.fxaa.fragmentShader=this.fxaa.fragmentShader.replace(/}\s*$/,`
#include <colorspace_fragment>
}`);let s=this.material.uniforms;this.sectionMat=new o({vertexShader:ot,fragmentShader:dt,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0,blending:5,blendEquation:100,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205,uniforms:{tSection:{value:null},tBande:{value:null},uBande:{value:new P},uOnde:s.uOnde,uRampe:{value:1},uHaut:{value:0},uHauteur:{value:1},uTime:{value:0},uBombe:{value:new w(0,0)}}})}get depthTexture(){return this.target.depthTexture}setMSAA(e){if(this.target.samples===e)return;let t=this.target.width,r=this.target.height;this.target.dispose(),this.target=new O(t,r,{type:R,samples:e,depthBuffer:!0,stencilBuffer:!1,minFilter:N,magFilter:N}),this.target.depthTexture=new n(t,r,j),this.target.depthTexture.minFilter=this.target.depthTexture.magFilter=de,this.material.uniforms.tScene.value=this.target.texture,this.bright.uniforms.tMap.value=this.target.texture}setSize(e,t){this.target.setSize(e,t),this.sortie.setSize(e,t),this.fxaa.uniforms.resolution.value.set(1/e,1/t),this.target.depthTexture.image.width=e,this.target.depthTexture.image.height=t,this.material.uniforms.uResolution.value.set(e,t);let n=B.decor.clouds.resolution;this.material.uniforms.uCloudRes.value.set(Math.max(4,Math.round(e*n)),Math.max(4,Math.round(t*n)));let r=Math.max(4,e>>2),i=Math.max(4,t>>2);this.bloomA.setSize(r,i),this.bloomB.setSize(r,i),this.bloomSize=new w(r,i)}setTrail(e){this.trail=e}setLentille(e,t){this.material.uniforms.uLentille.value.set(e,t)}setFlou(e){this.material.uniforms.uFlou.value=e}setSection(e,t){this.material.uniforms.tSection.value=e,this.material.uniforms.uPlat.value=e?t:0}setBande(e,t){this.material.uniforms.tBande.value=e,this.material.uniforms.uBande.value.copy(t)}setOnde(e,t,n){this.material.uniforms.uOnde.value.set(e,t,n)}composeSections(e,t,n=null){let r=this.renderer,i=this.sectionMat.uniforms;i.uBombe.value.set(n?n.force:0,n?n.bords:0),r.setRenderTarget(null),r.setClearColor(0,0),r.clear(),this.quad.material=this.sectionMat,i.uTime.value=t;for(let t of e)i.tSection.value=t.texture,i.tBande.value=t.texBande||null,t.bande?i.uBande.value.copy(t.bande):i.uBande.value.set(0,0,0,0),i.uHaut.value=t.haut,i.uHauteur.value=t.hauteur,i.uRampe.value=t.rampe??1,this.quad.render(r)}setTrailPreset(e){let t=e?B.trailAvion:B.trail,n=this.material.uniforms;n.uAmount.value=t.amount,n.uRgbShift.value=t.rgbShift,n.uMultiplier.value=t.multiplier,n.uColorMultiplier.value=t.colorMultiplier,n.uShadeTrail.value=t.shade}setFXAA(e){this.fxaaOn=!!e}setTrailOn(e){this.material.uniforms.uTrailOn.value=+!!e}setRipple(e){let t=this.material.uniforms;if(!e){t.uRippleOn.value=0;return}let n=B.ripple;t.tRipple.value=e.texture,t.uRippleDelta.value.copy(e.delta),t.uRippleOn.value=1,t.uRefr.value=n.refraction,t.uDisp.value=n.dispersion,t.uShade.value=n.ombrage,t.uSpec.value=n.reflet,t.uShine.value=n.brillance,t.uCaus.value=n.caustiques,e.lightUv&&t.uLight.value.set(e.lightUv.x,e.lightUv.y,e.lightUv.k)}setClouds(e){this.material.uniforms.tClouds.value=e}setFog(e){this.material.uniforms.tFog.value=e}setFogTop(e){this.material.uniforms.uFog.value.x=e}renderScene(e,t){let n=this.renderer,r=this.material.uniforms;r.tDepth.value=this.target.depthTexture,r.uNear.value=t.near,r.uFar.value=t.far,r.uUpSeuil.value=B.decor.clouds.upsampleSeuil,n.setRenderTarget(this.target),n.setClearColor(0,0),n.clear(),n.render(e,t);let i={calls:n.info.render.calls,triangles:n.info.render.triangles};if(!B.perf.bloom)return r.uBloomAmount.value=0,i;r.uBloomAmount.value=B.decor.bloom.amount,this.quad.material=this.bright,n.setRenderTarget(this.bloomA),this.quad.render(n),this.quad.material=this.blur;for(let e=0;e<2;e++)this.blur.uniforms.tMap.value=this.bloomA.texture,this.blur.uniforms.uDelta.value.set(1.5/this.bloomSize.x,0),n.setRenderTarget(this.bloomB),this.quad.render(n),this.blur.uniforms.tMap.value=this.bloomB.texture,this.blur.uniforms.uDelta.value.set(0,1.5/this.bloomSize.y),n.setRenderTarget(this.bloomA),this.quad.render(n);return i}compose(e){let t=this.renderer;this.material.uniforms.uTime.value=e,this.material.uniforms.uGrain.value=B.perf.grain?B.decor.grain:0,this.trail&&(this.material.uniforms.tTrail.value=this.trail.texture,this.material.uniforms.uPaintTexel.value.set(1/this.trail.size.x,1/this.trail.size.y)),this.quad.material=this.material,this.fxaaOn&&(t.setRenderTarget(this.sortie),t.clear(),this.quad.render(t),this.quad.material=this.fxaa),t.setRenderTarget(null),t.clear(),this.quad.render(t)}dispose(){this.target.dispose(),this.sortie.dispose(),this.material.dispose(),this.sectionMat.dispose(),this.fxaa.dispose(),this.quad.dispose()}};function ht(e){let t=document.createElement(`canvas`);t.width=512,t.height=288;let n=t.getContext(`2d`);return n.fillStyle=`#04070c`,n.fillRect(0,0,t.width,t.height),n.font=`500 22px ui-monospace, Menlo, monospace`,n.textBaseline=`top`,e.forEach((e,t)=>{n.fillStyle=t===0?`#e9eef5`:e.startsWith(`>`)?`#ed3327`:`#7fb2e8`,n.fillText(e,22,20+t*30)}),t}var gt=class{constructor(e,t){this.mesh=e,this.material=t;let n=e.geometry.getAttribute(`uv`),r=1e9,i=-1e9,a=1e9,o=-1e9;if(n)for(let e=0;e<n.count;e++){let t=n.getX(e),s=n.getY(e);r=Math.min(r,t),i=Math.max(i,t),a=Math.min(a,s),o=Math.max(o,s)}let s=n&&i-r>1e-4&&o-a>1e-4;this.uvRect=s?new P(r,a,i-r,o-a):new P(0,0,1,1),this.degenerate=!s;let l=ht([`JUNCA OS  v0.1`,``,`> boot sequence`,`  env ........ ok`,`  lightmap ... ok`,`  rig ........ ok`,``,`> awaiting input _`]),u=new L(l);u.colorSpace=c,u.minFilter=N,u.flipY=!1,this.default=u,this.uniforms={tLeftSide:{value:u},tRightSide:{value:u},uOn:{value:0},uGlitch:{value:0},uSplit:{value:0},uTime:{value:0},uUvRect:{value:this.uvRect},uMouse:{value:new w},uTint:{value:new h(B.screen.glow)},tSection:{value:u},tBande:{value:u},uBande:{value:new P},uSectionOn:{value:0},uSectionLook:{value:1},uSectionFit:{value:new w(1,1)}};let d=this.uniforms;t.emissive.set(16777215),t.emissiveIntensity=1,t.onBeforeCompile=e=>{Object.assign(e.uniforms,d),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vScreenUv;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
vScreenUv = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`
          #include <common>
          ${rt}
          uniform sampler2D tLeftSide, tRightSide;
          uniform float uOn, uGlitch, uTime, uSplit, uSectionOn, uSectionLook;
          uniform vec2 uSectionFit;
          uniform vec4 uUvRect;
          uniform vec2 uMouse;
          uniform vec3 uTint;
          varying vec2 vScreenUv;
          float shash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        `).replace(`#include <emissivemap_fragment>`,`
          #include <emissivemap_fragment>
          {
            vec2 m0 = clamp((vScreenUv - uUvRect.xy) / uUvRect.zw, 0.0, 1.0);
            // zone utile : marge de 8 % en largeur et 11 % en hauteur, le contenu ne touche jamais les bords
            vec2 pad = vec2(0.08, 0.11);
            vec2 m = (m0 - pad) / (1.0 - 2.0 * pad);
            float inside = step(0.0, m.x) * step(m.x, 1.0) * step(0.0, m.y) * step(m.y, 1.0);
            m = clamp(m, 0.0, 1.0);
            // deux moitiés: gauche / droite
            float band = shash(vec2(floor(m.y * 90.0), floor(uTime * 8.0)));
            float glitchLine = step(0.985 - uGlitch * 0.2, band) * uGlitch;
            vec2 gUv = m + vec2(glitchLine * (shash(vec2(uTime, m.y)) - 0.5) * 0.15, 0.0);
            vec3 content = (uSplit < 0.5) ? texture2D(tLeftSide, gUv).rgb : ((m.x < 0.5)
              ? texture2D(tLeftSide,  vec2(gUv.x * 2.0, gUv.y)).rgb
              : texture2D(tRightSide, vec2(gUv.x * 2.0 - 1.0, gUv.y)).rgb);
            // grille de pixels et balayage : c'est ce qui fait « dalle »
            float scan = 0.85 + 0.15 * sin(m.y * 288.0 * 3.14159 + uTime * 6.0);
            float sub  = 0.9 + 0.1 * step(0.5, fract(m.x * 512.0));
            vec3 tv = content * scan * sub;
            // split RVB pendant le glitch
            tv.r = mix(tv.r, texture2D(tLeftSide, vec2(gUv.x + 0.01, gUv.y)).r, uGlitch * 0.6);
            // vignette de dalle
            float vig = inside * smoothstep(0.0, 0.04, m.x) * smoothstep(1.0, 0.96, m.x) * smoothstep(0.0, 0.05, m.y) * smoothstep(1.0, 0.95, m.y);
            // ── la section suivante, sans marge intérieure : au bout de la plongée le bord de la
            // dalle est le bord du cadre, une marge s'y verrait. Hors de la texture : le blanc de la page.
            vec2 sUv = (m0 - 0.5) * uSectionFit + 0.5;
            sUv.x += glitchLine * (shash(vec2(uTime, m0.y)) - 0.5) * 0.15;
            float dedans = step(0.0, sUv.x) * step(sUv.x, 1.0) * step(0.0, sUv.y) * step(sUv.y, 1.0);
            // la cible de la section a sa ligne 0 en bas (repère GL) ; la dalle a son v = 0 en haut
            vec3 sec = mix(vec3(1.0), lireSection(vec2(sUv.x, 1.0 - sUv.y)), dedans);
            float scanS = mix(1.0, scan * sub, uSectionLook);
            float vigS = mix(1.0, smoothstep(0.0, 0.04, m0.x) * smoothstep(1.0, 0.96, m0.x) * smoothstep(0.0, 0.05, m0.y) * smoothstep(1.0, 0.95, m0.y), uSectionLook);
            vec3 tvSection = (sec * scanS * 1.6 + uTint * 0.06 * uSectionLook) * vigS;
            // veille : fond quasi noir teinté ; allumé : contenu
            vec3 idle = uTint * 0.03;
            vec3 allume = mix((tv * 1.6 + uTint * 0.06) * vig, tvSection, uSectionOn);
            totalEmissiveRadiance = mix(idle, allume, uOn);
            diffuseColor.rgb = vec3(0.012);
          }
        `)},t.customProgramCacheKey=()=>`junca-screen`,t.needsUpdate=!0}set on(e){this.uniforms.uOn.value=e}get on(){return this.uniforms.uOn.value}set glitch(e){this.uniforms.uGlitch.value=e}get glitch(){return this.uniforms.uGlitch.value}set split(e){this.uniforms.uSplit.value=+!!e}set leftSide(e){this.uniforms.tLeftSide.value=e||this.default}set rightSide(e){this.uniforms.tRightSide.value=e||this.default}set section(e){this.uniforms.tSection.value=e||this.default}setBande(e,t){this.uniforms.tBande.value=e||this.default,this.uniforms.uBande.value.copy(t)}set sectionOn(e){this.uniforms.uSectionOn.value=+!!e}get sectionOn(){return this.uniforms.uSectionOn.value>.5}set sectionLook(e){this.uniforms.uSectionLook.value=e}setSectionFit(e,t){let n=Math.min(1,e/t),r=Math.min(1,t/e);this.uniforms.uSectionFit.value.set(1/n,1/r)}update(e,t){this.uniforms.uTime.value=e,this.uniforms.uMouse.value.set(t.x,t.y)}},_t=640,vt=360,Y=`#ed3327`,yt=`#d9dee6`,bt=`#6f7885`,xt=`#04070c`,St=[{type:`clear`},{type:`type`,text:`Hello there!`,color:yt,size:46,speed:.07,center:!0},{type:`wait`,s:1.2},{type:`erase`,speed:.035},{type:`clear`},{type:`type`,text:`I'm the Junca assistant robot.`,color:yt,size:22},{type:`type`,text:`What do you need?`,color:yt,size:22},{type:`wait`,s:2.2},{type:`clear`},{type:`type`,text:`> services`,color:Y,size:20,speed:.05},{type:`list`,color:yt,size:20,every:.35,lines:[`01  Web design & UX`,`02  Framer & custom builds`,`03  3D & motion design`,`04  Brand identity`,`05  SEO & GEO`]},{type:`wait`,s:3.5},{type:`clear`},{type:`type`,text:`> status`,color:Y,size:20,speed:.05},{type:`list`,color:yt,size:20,every:.25,lines:[`env ......... ok`,`lightmap .... ok`,`rig ......... ok`,`fan ......... {fan} rpm`,`uptime ...... {uptime}`]},{type:`wait`,s:3},{type:`clear`},{type:`type`,text:`> awaiting input _`,color:Y,size:20,blink:!0},{type:`wait`,s:4}],Ct=class{constructor(){this.canvas=document.createElement(`canvas`),this.canvas.width=_t,this.canvas.height=vt,this.ctx=this.canvas.getContext(`2d`),this.texture=new L(this.canvas),this.texture.colorSpace=c,this.texture.minFilter=N,this.texture.flipY=!1,this.lines=[],this.step=-1,this.stepT=0,this.charT=0,this.listIdx=0,this.footer=``,this.vars={fan:0,uptime:`0:00`},this.onChar=null,this.blink=0,this.dirty=!0,this.t0=0,this._next(0)}set state(e){e!==this.footer&&(this.footer=e,this.dirty=!0)}_next(e){this.step=(this.step+1)%St.length,this.stepT=e,this.charT=0,this.listIdx=0;let t=St[this.step];t.type===`clear`&&(this.lines=[],this.dirty=!0),t.type===`type`&&(this.lines.push({text:t.text,color:t.color,size:t.size,shown:0,blink:!!t.blink,center:!!t.center}),this.dirty=!0)}_sub(e){return e.replace(`{fan}`,String(Math.round(this.vars.fan))).replace(`{uptime}`,this.vars.uptime)}update(e,t,n){this.t0||=e,Object.assign(this.vars,n);let r=Math.floor(e-this.t0);this.vars.uptime=`${Math.floor(r/60)}:${String(r%60).padStart(2,`0`)}`;let i=St[this.step],a=e-this.stepT;if(i.type===`clear`)this._next(e);else if(i.type===`wait`)a>=i.s&&this._next(e);else if(i.type===`type`){let t=this.lines[this.lines.length-1],n=i.speed??.04,r=Math.min(t.text.length,Math.floor(a/n));r!==t.shown&&(r>t.shown&&t.text[r-1]!==` `&&this.onChar?.(`type`),t.shown=r,this.dirty=!0),r>=t.text.length&&a>=t.text.length*n+.25&&this._next(e)}else if(i.type===`erase`){let t=this.lines[this.lines.length-1];if(!t)this._next(e);else{let n=Math.max(0,t.text.length-Math.floor(a/(i.speed??.04)));n!==t.shown&&(n<t.shown&&this.onChar?.(`erase`),t.shown=n,this.dirty=!0),n<=0&&a>=t.text.length*(i.speed??.04)+.15&&this._next(e)}}else if(i.type===`list`){let t=Math.min(i.lines.length,Math.floor(a/i.every)+1);for(;this.listIdx<t;)this.lines.push({text:i.lines[this.listIdx],color:i.color,size:i.size,shown:999,live:i.lines[this.listIdx].includes(`{`)}),this.listIdx++,this.dirty=!0,this.onChar?.(`line`);this.listIdx>=i.lines.length&&a>=i.lines.length*i.every+.3&&this._next(e)}let o=Math.floor(e*2)%2;o!==this.blink&&(this.blink=o,this.dirty=!0),this.lines.some(e=>e.live)&&Math.floor(e*4)!==Math.floor((e-t)*4)&&(this.dirty=!0),this.dirty&&=(this.draw(),!1)}draw(){let e=this.ctx;e.fillStyle=xt,e.fillRect(0,0,_t,vt),e.textBaseline=`top`;let t=34;for(let n of this.lines){e.font=`500 ${n.size}px 'Geist Mono', ui-monospace, Menlo, monospace`,e.fillStyle=n.color;let r=this._sub(n.text).slice(0,n.shown);n.blink&&this.blink&&(r=r.replace(/_$/,` `));let i=n.shown<n.text.length&&this.blink?`▌`:``;if(n.center){let t=e.measureText(this._sub(n.text)).width;e.fillText(r+i,(_t-t)/2,(vt-n.size)/2);continue}e.fillText(r+i,34,t),t+=n.size*1.45}e.font=`400 14px 'Geist Mono', ui-monospace, Menlo, monospace`,e.fillStyle=bt,e.fillText(`JUNCA OS  v0.1`,34,326),this.footer&&(e.fillStyle=Y,e.textAlign=`right`,e.fillText(this.footer.toUpperCase(),606,326),e.textAlign=`left`),this.texture.needsUpdate=!0}},wt=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(`div`),this.domElement.classList.add(`controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-`+ ++e.nextNameID,this.$widget=document.createElement(a),this.$widget.classList.add(`widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle(`disabled`,e),this.$disable.toggleAttribute(`disabled`,e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Tt=class extends wt{constructor(e,t,n){super(e,t,n,`boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Et(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!n&&`#`+n}var Dt={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:Et,toHexString:Et},Ot={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},kt=[Dt,Ot,{isPrimitive:!1,match:Array.isArray,fromHexString(e,t,n=1){let r=Ot.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(255&r)/255*n},toHexString:([e,t,n],r=1)=>Ot.toHexString(e*(r=255/r)<<16^t*r<<8^n*r<<0)},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=Ot.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(255&r)/255*n},toHexString:({r:e,g:t,b:n},r=1)=>Ot.toHexString(e*(r=255/r)<<16^t*r<<8^n*r<<0)}],At=class extends wt{constructor(e,t,n,r){var i;super(e,t,n,`color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(i=this.initialValue,kt.find(e=>e.match(i))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=Et(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},jt=class extends wt{constructor(e,t,n){super(e,t,n,`function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},Mt=class extends wt{constructor(e,t,n,r,i,a){super(e,t,n,`number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},t,n,r,i,a,o=!1,s=e=>{if(o){let r=e.clientX-t,i=e.clientY-n;Math.abs(i)>5?(e.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(r)>5&&c()}if(!o){let t=e.clientY-r;a-=t*this._step*this._arrowKeyMultiplier(e),i+a>this._max?a=this._max-i:i+a<this._min&&(a=this._min-i),this._snapClampSetValue(i+a)}r=e.clientY},c=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,s),window.removeEventListener(`mouseup`,c)};this.$input.addEventListener(`input`,()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))}),this.$input.addEventListener(`keydown`,t=>{t.code===`Enter`&&this.$input.blur(),t.code===`ArrowUp`&&(t.preventDefault(),e(this._step*this._arrowKeyMultiplier(t))),t.code===`ArrowDown`&&(t.preventDefault(),e(this._step*this._arrowKeyMultiplier(t)*-1))}),this.$input.addEventListener(`wheel`,t=>{this._inputFocused&&(t.preventDefault(),e(this._step*this._normalizeMouseWheel(t)))},{passive:!1}),this.$input.addEventListener(`mousedown`,e=>{t=e.clientX,n=r=e.clientY,o=!0,i=this.getValue(),a=0,window.addEventListener(`mousemove`,s),window.addEventListener(`mouseup`,c)}),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`hasSlider`);let e=e=>{let t=this.$slider.getBoundingClientRect(),n=(r=e,i=t.left,a=t.right,o=this._min,s=this._max,(r-i)/(a-i)*(s-o)+o);var r,i,a,o,s;this._snapClampSetValue(n)},t=t=>{e(t.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,t),window.removeEventListener(`mouseup`,n)},r,i,a=!1,o=t=>{t.preventDefault(),this._setDraggingStyle(!0),e(t.touches[0].clientX),a=!1},s=t=>{if(a){let e=t.touches[0].clientX-r,n=t.touches[0].clientY-i;Math.abs(e)>Math.abs(n)?o(t):(window.removeEventListener(`touchmove`,s),window.removeEventListener(`touchend`,c))}else t.preventDefault(),e(t.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,s),window.removeEventListener(`touchend`,c)},l=this._callOnFinishChange.bind(this),u;this.$slider.addEventListener(`mousedown`,r=>{this._setDraggingStyle(!0),e(r.clientX),window.addEventListener(`mousemove`,t),window.addEventListener(`mouseup`,n)}),this.$slider.addEventListener(`touchstart`,e=>{e.touches.length>1||(this._hasScrollBar?(r=e.touches[0].clientX,i=e.touches[0].clientY,a=!0):o(e),window.addEventListener(`touchmove`,s,{passive:!1}),window.addEventListener(`touchend`,c))},{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(l,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`active`,e),document.body.classList.toggle(`lil-gui-dragging`,e),document.body.classList.toggle(`lil-gui-`+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Nt=class extends wt{constructor(e,t,n,r){super(e,t,n,`option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`display`),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(e=>{let t=document.createElement(`option`);t.innerHTML=e,this.$select.appendChild(t)}),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}},Pt=class extends wt{constructor(e,t,n){super(e,t,n,`string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Ft=!1,X=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`div`),this.$title.classList.add(`title`),this.$title.setAttribute(`role`,`button`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.setAttribute(`tabindex`,0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`keydown`,e=>{e.code!==`Enter`&&e.code!==`Space`||(e.preventDefault(),this.$title.click())}),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),o&&this.domElement.classList.add(`allow-touch-styles`),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add(`root`),!Ft&&a&&(function(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}(`.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}`),Ft=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation())}add(e,t,n,r,i){if(Object(n)===n)return new Nt(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new Mt(this,e,t,n,r,i);case`boolean`:return new Tt(this,e,t);case`string`:return new Pt(this,e,t);case`function`:return new jt(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new At(this,e,t,n)}addFolder(t){return new e({parent:this,title:t})}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof jt||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof jt)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`closed`,this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}},Z=e=>`#`+e.getHexString(),It=(e,t)=>e.set(t),Lt=e=>`#`+[e.r,e.g,e.b].map(e=>Math.round(e*255).toString(16).padStart(2,`0`)).join(``),Rt=(e,t)=>{let n=parseInt(t.slice(1),16);e.setRGB((n>>16&255)/255,(n>>8&255)/255,(n&255)/255)};function zt(e){let{scene:t,renderer:n,lib:r,background:i,post:a,rig:o,ripple:s,clouds:c,TUNING:l}=e,u=new X({title:`Junca — réglages`,width:320});u.domElement.style.zIndex=300;let d={materials:{},env:{},bake:{},decor:{},fog:{},clouds:{},ripple:{},pointer:{},follow:{},section:{},perf:{},plongeeAuto:{}},f=u.addFolder(`Matériaux`);for(let[e,t]of r.cache){if([`Screen`,`ScreenGlow`].includes(e))continue;let n=f.addFolder(e);n.close();let r=d.materials[e]={color:Z(t.color),metalness:t.metalness,roughness:t.roughness};if(n.addColor(r,`color`).onChange(e=>It(t.color,e)),n.add(r,`metalness`,0,1,.01).onChange(e=>{t.metalness=e}),n.add(r,`roughness`,0,1,.01).onChange(e=>{t.roughness=e}),t.userData.detail){let e=t.userData.detail;Object.assign(r,{grainScale:e.uDetailScale.value,grainRoughness:e.uRoughVar.value,grainBrush:e.uBrushAniso.value}),n.add(r,`grainScale`,5,300,1).name(`grain : échelle`).onChange(t=>{e.uDetailScale.value=t}),n.add(r,`grainRoughness`,0,.5,.005).name(`grain : rugosité ±`).onChange(t=>{e.uRoughVar.value=t}),n.add(r,`grainBrush`,1,8,.1).name(`grain : brossage`).onChange(t=>{e.uBrushAniso.value=t})}t.transparent&&(r.opacity=t.opacity,n.add(r,`opacity`,0,1,.01).onChange(e=>{t.opacity=e})),`clearcoat`in t&&(r.clearcoat=t.clearcoat,n.add(r,`clearcoat`,0,1,.01).onChange(e=>{t.clearcoat=e}))}let p=u.addFolder(`Environnement & lumière`),m=t.children.find(e=>e.isAmbientLight),h=d.env={intensity:t.environmentIntensity,rotationY:t.environmentRotation.y,exposure:n.toneMappingExposure,ambientColor:m?Z(m.color):`#55aaff`,ambientIntensity:m?m.intensity:0};p.add(h,`intensity`,0,4,.01).name(`HDRI : intensité`).onChange(e=>{t.environmentIntensity=e}),p.add(h,`rotationY`,0,Math.PI*2,.01).name(`HDRI : rotation`).onChange(e=>{t.environmentRotation.y=e}),p.add(h,`exposure`,.2,3,.01).name(`exposition (AgX)`).onChange(e=>{n.toneMappingExposure=e}),m&&(p.addColor(h,`ambientColor`).name(`ambiant : couleur`).onChange(e=>It(m.color,e)),p.add(h,`ambientIntensity`,0,2,.01).name(`ambiant : intensité`).onChange(e=>{m.intensity=e}));let g=d.bake={aoIntensity:l.bake.aoIntensity,lightmapIntensity:l.bake.lightmapIntensity},_=e=>{for(let[t,n]of r.cache)(n.aoMap||n.lightMap)&&e(n)};p.add(g,`aoIntensity`,0,1,.01).name(`AO cuite`).onChange(e=>_(t=>{t.aoMapIntensity=e})),p.add(g,`lightmapIntensity`,0,1,.01).name(`lightmap cuit`).onChange(e=>_(t=>{t.lightMapIntensity=e}));let v=u.addFolder(`Décor`);v.close();let y=i.uniforms,b=a.material.uniforms,x=d.decor={dark:y.uDark.value>.5,base:Z(y.uDarkBase.value),grey:Z(y.uDarkGrey.value),red:Z(y.uDarkRed.value),redMix:y.uDarkMix.value.x,amount:y.uDarkMix.value.y,glowColor:Z(y.uGlowColor.value),glowAmount:y.uGlow.value.w,glowU:y.uGlow.value.x,glowV:y.uGlow.value.y,glowRadius:y.uGlow.value.z,domeEnv:i.material.envMapIntensity,gain:y.uGain.value,strata:y.uStrata.value,phase:y.uPhase.value,maskMin:y.uMaskMin.value,extrapolation:y.uExtrap.value,dodge:Lt(y.uDodge.value),dodgeAmount:y.uDodgeAmt.value,bloomAmount:b.uBloomAmount.value,bloomThreshold:a.bright.uniforms.uThreshold.value,contrast:b.uContrast.value,grain:b.uGrain.value,noiseSpeed:i.skyMaterial.uniforms.uSpeed.value};v.add(x,`dark`).name(`mode sombre`).onChange(e=>{y.uDark.value=+!!e}),v.addColor(x,`base`).name(`noir de base`).onChange(e=>It(y.uDarkBase.value,e)),v.addColor(x,`grey`).name(`fumée grise`).onChange(e=>It(y.uDarkGrey.value,e)),v.addColor(x,`red`).name(`fumée rouge`).onChange(e=>It(y.uDarkRed.value,e)),v.add(x,`redMix`,0,1,.01).name(`part de rouge`).onChange(e=>{y.uDarkMix.value.x=e}),v.add(x,`amount`,0,5,.05).name(`densité fumée`).onChange(e=>{y.uDarkMix.value.y=e}),v.addColor(x,`glowColor`).name(`lueur : couleur`).onChange(e=>It(y.uGlowColor.value,e)),v.add(x,`glowAmount`,0,1.5,.01).name(`lueur : force`).onChange(e=>{y.uGlow.value.w=e}),v.add(x,`glowU`,-.5,.5,.01).name(`lueur : azimut`).onChange(e=>{y.uGlow.value.x=e}),v.add(x,`glowV`,.2,.8,.01).name(`lueur : hauteur`).onChange(e=>{y.uGlow.value.y=e}),v.add(x,`glowRadius`,.03,.4,.005).name(`lueur : rayon`).onChange(e=>{y.uGlow.value.z=e}),v.add(x,`domeEnv`,0,2,.01).name(`dôme : env`).onChange(e=>{i.material.envMapIntensity=e}),v.add(x,`gain`,0,3,.01).name(`dôme : gain`).onChange(e=>{y.uGain.value=e}),v.add(x,`strata`,.5,8,.1).name(`strates : période`).onChange(e=>{y.uStrata.value=e}),v.add(x,`phase`,0,1,.01).name(`strates : phase`).onChange(e=>{y.uPhase.value=e}),v.add(x,`maskMin`,0,1,.01).name(`strates : min`).onChange(e=>{y.uMaskMin.value=e}),v.add(x,`extrapolation`,.5,3,.05).name(`contraste bruit`).onChange(e=>{y.uExtrap.value=e}),v.add(x,`noiseSpeed`,0,3,.05).name(`vitesse du bruit`).onChange(e=>{i.skyMaterial.uniforms.uSpeed.value=e}),v.addColor(x,`dodge`).name(`dodge (mode clair)`).onChange(e=>Rt(y.uDodge.value,e)),v.add(x,`dodgeAmount`,0,1,.01).name(`dodge : force`).onChange(e=>{y.uDodgeAmt.value=e}),v.add(x,`bloomAmount`,0,2,.01).name(`bloom : force`).onChange(e=>{b.uBloomAmount.value=e}),v.add(x,`bloomThreshold`,0,1.5,.01).name(`bloom : seuil`).onChange(e=>{a.bright.uniforms.uThreshold.value=e}),v.add(x,`contrast`,.6,2,.01).name(`contraste final`).onChange(e=>{b.uContrast.value=e}),v.add(x,`grain`,0,.3,.005).name(`grain`).onChange(e=>{b.uGrain.value=e});let S=u.addFolder(`Brume de premier plan`);S.close();let C=l.decor.fog,w=d.fog={amount:b.uFog.value.w,veil:b.uFogMix.value.x,feather:b.uFog.value.y,topOffset:C.topOffset,scale:b.uFog.value.z,drift:b.uFogMix.value.y,color:Z(b.uFogColor.value)};if(S.add(w,`amount`,0,3,.01).name(`densité`).onChange(e=>{b.uFog.value.w=e}),S.add(w,`veil`,0,1,.01).name(`occultation`).onChange(e=>{b.uFogMix.value.x=e}),S.add(w,`feather`,.02,.9,.01).name(`dégradé`).onChange(e=>{b.uFog.value.y=e}),S.add(w,`topOffset`,-.4,.6,.01).name(`haut / ventilateur`).onChange(e=>{C.topOffset=e}),S.add(w,`scale`,.4,6,.05).name(`échelle du motif`).onChange(e=>{b.uFog.value.z=e}),S.add(w,`drift`,-.06,.06,.002).name(`dérive`).onChange(e=>{b.uFogMix.value.y=e}),S.addColor(w,`color`).name(`couleur`).onChange(e=>It(b.uFogColor.value,e)),c){let e=u.addFolder(`Nuages`);e.close();let t=c.material.uniforms,n=l.decor.clouds,r=d.clouds={opacity:t.u_opacity.value,color:Z(t.u_color.value),size:t.u_size.value,band:t.u_band.value,sway:t.u_sway.value,softness:t.u_softness.value,seuilA:t.u_seuilA.value,seuilB:t.u_seuilB.value,driftSpeed:n.driftSpeed};e.add(r,`opacity`,0,1.5,.01).name(`densité`).onChange(e=>{t.u_opacity.value=e}),e.addColor(r,`color`).name(`couleur`).onChange(e=>It(t.u_color.value,e)),e.add(r,`size`,c.radius*.2,c.radius*4,c.radius*.02).name(`taille des cartes`).onChange(e=>{t.u_size.value=e}),e.add(r,`band`,t.u_band.value*.1,t.u_band.value*4,t.u_band.value*.02).name(`hauteur de nappe`).onChange(e=>{t.u_band.value=e}),e.add(r,`sway`,0,c.radius,c.radius*.01).name(`balancement`).onChange(e=>{t.u_sway.value=e}),e.add(r,`softness`,c.radius*.02,c.radius*3,c.radius*.01).name(`fondu au contact`).onChange(e=>{t.u_softness.value=e}),e.add(r,`seuilA`,0,1,.01).name(`seuil bas du bruit`).onChange(e=>{t.u_seuilA.value=e}),e.add(r,`seuilB`,0,1.5,.01).name(`seuil haut du bruit`).onChange(e=>{t.u_seuilB.value=e}),e.add(r,`driftSpeed`,0,4,.05).name(`vitesse`).onChange(e=>{n.driftSpeed=e})}let T=u.addFolder(`Effet de pointeur`);T.close();let E=d.pointer={effect:l.pointer.effect};T.add(E,`effect`,[`ripple`,`trail`,`trail-avion`,`none`]).name(`effet`).onChange(e=>{l.pointer.effect=e,e===`ripple`&&s&&s.splash()});let D=d.ripple={...l.ripple},O=(e,t,n,r,i)=>T.add(D,e,t,n,r).name(i).onChange(t=>{l.ripple[e]=t});O(`refraction`,0,2.5,.05,`réfraction`),O(`dispersion`,0,1,.01,`dispersion chromatique`),O(`ombrage`,0,2,.05,`ombrage`),O(`reflet`,0,2,.05,`reflets`),O(`brillance`,8,300,1,`finesse des reflets`),O(`caustiques`,0,3,.05,`caustiques`),O(`lumiereSouris`,0,1,1,`lumière au pointeur`),O(`passes`,1,4,1,`vitesse des ondes`),O(`amorti`,.95,.995,.001,`durée de vie`),O(`rayon`,.005,.08,.001,`gouttes : taille`),O(`force`,.02,.3,.005,`gouttes : force`),O(`variation`,0,1,.05,`gouttes : variété`),O(`eclaboussures`,0,1,.05,`éclaboussures`),O(`pluie`,0,20,1,`pluie (par seconde)`),O(`apparition`,0,.5,.01,`éclaboussure d’apparition`),O(`couronne`,0,12,1,`couronne`),s&&T.add({rejouer:()=>s.splash()},`rejouer`).name(`rejouer l’éclaboussure`);let k=T.addFolder(`trail avion`);k.close();let ee=d.trailAvion={...l.trailAvion},A=(e,t,n,r,i)=>k.add(ee,e,t,n,r).name(i).onChange(t=>{l.trailAvion[e]=t});A(`life`,0,1,.01,`durée de vie`),A(`push`,0,60,.5,`poussée`),A(`curlScale`,.01,1,.01,`curl : échelle`),A(`curlStrength`,0,10,.1,`curl : force`),A(`velScale`,0,5,.05,`vitesse injectée`),A(`radiusScale`,0,1,.01,`rayon : × vitesse`),A(`radiusBase`,0,20,.5,`rayon : plancher (px)`),A(`amount`,0,30,.5,`distorsion`),A(`rgbShift`,0,2,.01,`frange RVB`),A(`multiplier`,0,20,.25,`multiplicateur`),A(`colorMultiplier`,0,30,.5,`multiplicateur couleur`),A(`shade`,0,3,.05,`ombrage`);let te=u.addFolder(`Suivi de la souris`);te.close();let ne=d.follow={...l.follow},re=(e,t,n)=>te.add(ne,e,0,t,.005).name(n).onChange(t=>{l.follow[e]=t});re(`headYaw`,.8,`tête : lacet`),re(`headPitch`,.5,`tête : tangage`),re(`headRoll`,.3,`tête : roulis`),re(`bodyYaw`,.3,`buste : lacet`),re(`bodyPitch`,.2,`buste : tangage`),re(`bodyRoll`,.1,`buste : roulis`),te.add(ne,`slow`,.01,.3,.005).name(`inertie (lerp/image)`).onChange(e=>{l.follow.slow=e}),o&&te.add({regard:o.facing.toArray().map(e=>e.toFixed(2)).join(`, `)},`regard`).name(`axe du regard`).disable();let ie=u.addFolder(`Plongée forcée`);ie.close();let j=d.plongeeAuto={...l.plongee.auto};ie.add(j,`enabled`).name(`activée`).onChange(e=>{l.plongee.auto.enabled=e}),ie.add(j,`seuilBas`,0,.6,.01).name(`seuil à la descente`).onChange(e=>{l.plongee.auto.seuilBas=e}),ie.add(j,`seuilHaut`,.4,1,.01).name(`seuil à la montée`).onChange(e=>{l.plongee.auto.seuilHaut=e}),ie.add(j,`duree`,.3,2.5,.05).name(`durée du vol (s)`).onChange(e=>{l.plongee.auto.duree=e});let ae=u.addFolder(`Section suivante — courbure au scroll`);ae.close();let oe=d.section={...l.section},M=(e,t,n,r,i)=>ae.add(oe,e,t,n,r).name(i).onChange(t=>{l.section[e]=t});M(`forceMax`,0,.5,.005,`force max`),M(`gain`,0,4,.05,`gain sur le delta`),M(`onde`,0,6,.05,`onde`),M(`flou`,0,3,.05,`flou directionnel`),M(`amorti`,1,30,.5,`amorti (par seconde)`),M(`forcer`,-.3,.3,.005,`figer la force (test, 0 = off)`),M(`bombe`,0,.5,.005,`bombé`),M(`bombeBords`,0,1,.05,`bombé : bords (0 = recadré/zoom, 1 = assumés)`),M(`bombeFin`,0,1,.05,`bombé relâché sous (part visible)`),ae.add(oe,`bombeRelache`).name(`bombé relâché avec la section clients`).onChange(e=>{l.section.bombeRelache=e});let N=u.addFolder(`Son`);N.close();let se=d.son={...l.son},P=(t,n,r,i,a)=>N.add(se,t,n,r,i).name(a).onChange(n=>{l.son[t]=n,e.son?.appliquerVolumes()});P(`master`,0,1,.01,`général`),P(`musique`,0,1,.01,`musique`),P(`robot`,0,1,.01,`robot`),P(`ui`,0,1,.01,`écran`),P(`toucheGain`,0,.5,.005,`frappe`),P(`fanGain`,0,.3,.005,`turbine`),P(`allumageGain`,0,.5,.005,`allumage de l’écran`),P(`swooshGain`,0,.5,.005,`swoosh de la plongée`);let F=u.addFolder(`Coût — leviers de mesure`);F.close();let ce=d.perf={...l.perf,msaa:l.render.msaa};F.add(ce,`nuages`).name(`nuages`).onChange(e=>{l.perf.nuages=e}),F.add(ce,`bloom`).name(`bloom`).onChange(e=>{l.perf.bloom=e}),F.add(ce,`cielChaqueImage`).name(`ciel : chaque image`).onChange(e=>{l.perf.cielChaqueImage=e}),F.add(ce,`grain`).name(`grain`).onChange(e=>{l.perf.grain=e}),F.add(ce,`msaa`,[0,2,4]).name(`MSAA`).onChange(e=>{l.render.msaa=+e}),E.effect=l.pointer.effect;let le={text:``},ue={copier:async()=>{let e=JSON.stringify(d,null,2);console.log(`%cConfiguration Junca`,`font-weight:700`,`
`+e);try{await navigator.clipboard.writeText(e),ue._flash(`copié dans le presse-papiers`)}catch{ue._flash(`voir la console (presse-papiers refusé)`)}le.text=e,de.updateDisplay()},_flash(e){I.name(`Copier la config — `+e),setTimeout(()=>I.name(`Copier la config`),2200)}},I=u.add(ue,`copier`).name(`Copier la config`),de=u.add(le,`text`).name(`JSON`).disable();return window.addEventListener(`keydown`,e=>{(e.key===`g`||e.key===`G`)&&u.show(u._hidden)}),{gui:u,state:d}}var Bt=()=>typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,Q=()=>typeof window<`u`&&window.matchMedia(`(max-width: 809px)`).matches;function Vt(){let e=Q(),t=typeof window<`u`&&window.matchMedia(`(pointer: coarse)`).matches,n=e?`mobile`:t?`tactile`:`bureau`,r=n===`mobile`&&typeof navigator<`u`&&navigator.deviceMemory>0&&navigator.deviceMemory<=4;return{petit:e,tactile:t,palier:n,modeste:r,maxDPR:{bureau:1.5,tactile:1.25,mobile:r?1.5:2}[n],dprScroll:{bureau:1.25,tactile:1.25,mobile:r?1.5:2}[n],dprSections:{bureau:1.5,tactile:1.25,mobile:r?1.5:2}[n],dprTextures:{bureau:1.5,tactile:1.5,mobile:2}[n],msaa:{bureau:2,tactile:0,mobile:r?2:4}[n],fxaa:n===`tactile`,nuages:!0,nuagesMobile:n===`mobile`?{bandRatio:1.15,opacity:.95,devant:1.6,profondeur:1.3,hauteurBiais:1.1,count:30}:null,pointeur:n===`bureau`?null:`none`,flouSection:n===`mobile`?0:null,bombe:n===`mobile`?.08:null,cadrage:n===`mobile`?{headFill:1.1,drop:-.15}:null,assets:n===`mobile`?{exr:`env_256.exr`,ao:`junca_ao_512.webp`}:null,reposHz:60,panneau:n===`bureau`,survol:n===`bureau`}}var Ht=class{constructor({renderer:e,hote:t,image:n,reduit:r=Bt()}){this.renderer=e,this.image=n,this.reduit=r,this.enMarche=!1,this.raisons={cache:!1,horsEcran:!1,couvert:!1,suspendu:!1},this._nettoyage=[],this._surVisibilite=()=>this.poser(`cache`,document.hidden),document.addEventListener(`visibilitychange`,this._surVisibilite),this._nettoyage.push(()=>document.removeEventListener(`visibilitychange`,this._surVisibilite)),this.raisons.cache=document.hidden;let i=(Array.isArray(t)?t:[t]).filter(Boolean);if(i.length&&typeof IntersectionObserver==`function`){let e=new Set;this._io=new IntersectionObserver(t=>{for(let n of t)n.isIntersecting?e.add(n.target):e.delete(n.target);this.poser(`horsEcran`,e.size===0)},{rootMargin:`10% 0px`});for(let e of i)this._io.observe(e);this._nettoyage.push(()=>this._io.disconnect())}let a=window.matchMedia(`(prefers-reduced-motion: reduce)`);this._surMq=e=>{this.reduit=e.matches,this.reevaluer(),this.reduit&&this.rendreUneImage()},a.addEventListener(`change`,this._surMq),this._nettoyage.push(()=>a.removeEventListener(`change`,this._surMq))}poser(e,t){this.raisons[e]!==t&&(this.raisons[e]=t,this.reevaluer())}couvert(e){this.poser(`couvert`,e)}suspendre(e){this.poser(`suspendu`,e)}get doitTourner(){return!this.reduit&&!Object.values(this.raisons).some(Boolean)}reevaluer(){let e=this.doitTourner;e!==this.enMarche&&(this.enMarche=e,this.renderer.setAnimationLoop(e?this._boucle:null),e&&(this._dernier=performance.now()))}plafondHz=0;_boucle=()=>{let e=performance.now();if(this.plafondHz>0&&e-this._dernier<1e3/this.plafondHz-1.5)return;let t=Math.min((e-this._dernier)/1e3,1/20);this._dernier=e,this.image(t)};rendreUneImage(){this.image(0)}dispose(){this.renderer.setAnimationLoop(null),this.enMarche=!1;for(let e of this._nettoyage)e();this._nettoyage.length=0}};function Ut(e,t){let n=n=>{e.isConnected&&(n.preventDefault(),console.warn(`[robot-hero] contexte WebGL perdu — remontage de la scène`),setTimeout(()=>{try{t()}catch(e){console.error(`[robot-hero] remontage impossible`,e)}},0))};return e.addEventListener(`webglcontextlost`,n,!1),()=>e.removeEventListener(`webglcontextlost`,n,!1)}var Wt=T.lerp,Gt=(e,t,n)=>T.clamp((e-t)/(n-t),0,1),$=e=>e*e*(3-2*e),Kt=class{constructor({hote:e,cible:t}){this.hote=e,this.cible=t,this.brut=0,this.valeur=0,this.vitesse=0,this.etapes=[],this.mesurer()}mesurer(){let e=B.plongee,t=e.etapes.reduce((e,t)=>e+t.poids,0),n=0;this.etapes=e.etapes.map(e=>{let r=e.poids/t,i={...e,de:n,a:n+r};return n=i.a,i})}etape(e){let t=this.etapes.find(t=>t.id===e);return t?Gt(this.valeur,t.de,t.a):0}lire(){let e=this.hote.getBoundingClientRect(),t=Math.max(1,e.height);this.brut=T.clamp(-e.top/t,0,1)}update(e){this.lire();let t=this.valeur;this.valeur=e>0?T.damp(this.valeur,this.brut,B.plongee.amorti,e):this.brut;let n=e>0?Math.abs(this.valeur-t)/e:0;return this.vitesse=e>0?T.damp(this.vitesse,n,8,e):n,this.valeur}get etat(){let e=B.plongee,t=$(this.etape(`approche`)),n=$(this.etape(`plongee`)),r=this.etape(`traversee`),i=this.etape(`sortie`),a=$(Math.min(1,t*.25+n*.75)),o=this.etapes[1],s=this.etapes[2],c=$(r);return{approche:t,dive:n,trav:r,sortie:i,vol:a,plat:c,gain:1-$(r),lentille:Wt(0,e.lentille,n)*(1-c)+e.lentilleTraversee*4*r*(1-r)+B.section.bombe*c,lentilleBords:Wt(e.lentilleBords,B.section.bombeBords,c),dalle:$(Gt(this.valeur,o.de+(o.a-o.de)*.12,s.a)),look:1-$(Gt(this.valeur,o.de+(o.a-o.de)*.7,s.a)),titre:1-$(Gt(this.valeur,0,this.etapes[0].a*.8))}}};function qt(e){let t=document.createElement(`div`);t.style.cssText=`position:fixed;bottom:0;left:0;height:4px;width:100%;z-index:400;pointer-events:none`,e.etapes.forEach((e,n)=>{let r=document.createElement(`div`);r.style.cssText=`position:absolute;top:0;height:100%;left:${e.de*100}%;width:${(e.a-e.de)*100}%;background:${n%2?`#4a7`:`#47a`}`,r.title=e.id,t.appendChild(r)});let n=document.createElement(`div`);n.style.cssText=`position:absolute;bottom:0;width:0;height:0;border-style:solid;border-width:0 6px 10px 6px;border-color:transparent transparent #ed3327 transparent;margin-left:-6px`,t.appendChild(n);let r=document.createElement(`div`);return r.style.cssText=`position:fixed;bottom:10px;left:50%;transform:translateX(-50%);z-index:400;font:11px ui-monospace,Menlo,monospace;color:#fff;opacity:.6;pointer-events:none`,document.body.append(t,r),()=>{n.style.left=e.valeur*100+`%`;let t=e.etapes.find(t=>e.valeur>=t.de&&e.valeur<t.a)||e.etapes.at(-1);r.textContent=`${t.id}  ${(e.valeur*100).toFixed(0)} %`}}function Jt(e,t,n,r){let i=3*e,a=3*(n-e)-i,o=1-i-a,s=3*t,c=3*(r-t)-s,l=1-s-c,u=e=>((o*e+a)*e+i)*e,d=e=>((l*e+c)*e+s)*e;return e=>{let t=e;for(let n=0;n<8;n++){let n=u(t)-e;if(Math.abs(n)<1e-5)break;t-=n/(3*o*t*t+2*a*t+i||1e-6)}return d(T.clamp(t,0,1))}}var Yt=new Set([` `,`ArrowDown`,`ArrowUp`,`PageDown`,`PageUp`,`Home`,`End`]),Xt=class{constructor({hote:e,lenis:t=null}){this.hote=e,this.lenis=t,this.anim=null,this.dernierBrut=null,this.dernierInput=-1e9,this.grace=-1e9,this.tactile=typeof window<`u`&&window.matchMedia(`(pointer: coarse)`).matches,this.reduit=typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,this.courbe=Jt(...B.plongee.auto.courbe||[.48,.09,.22,1]),this.horloge=0,this._molette=e=>{this.dernierInput=this.horloge,this.anim&&e.preventDefault()},this._clavier=e=>{Yt.has(e.key)&&(this.dernierInput=this.horloge,this.anim&&e.preventDefault())},this._toucher=e=>{this.anim&&e.preventDefault()},window.addEventListener(`wheel`,this._molette,{passive:!1}),window.addEventListener(`keydown`,this._clavier,{passive:!1}),window.addEventListener(`touchmove`,this._toucher,{passive:!1})}get enVol(){return!!this.anim}update(e,t){this.horloge=t;let n=B.plongee.auto;if(this.lenis)return this._updateTactile(e,t,n);if(this.anim){let r=T.clamp((t-this.anim.t0)/Math.max(.05,n.duree),0,1);window.scrollTo({top:this.anim.de+(this.anim.a-this.anim.de)*this.courbe(r),behavior:`instant`}),r>=1&&(this.anim=null,this.grace=t+.3),this.dernierBrut=e;return}if(this.dernierBrut===null){this.dernierBrut=e;return}let r=Math.sign(e-this.dernierBrut);if(this.dernierBrut=e,!n.enabled||this.tactile||this.reduit||r===0||t-this.dernierInput>.25||t<this.grace)return;let i=this.hote.getBoundingClientRect(),a=window.scrollY+i.top,o=i.height;r>0&&e>=n.seuilBas&&e<.999?this._lancer(a+o,t):r<0&&e<=n.seuilHaut&&e>.001&&this._lancer(a,t)}_lancer(e,t){this.anim={de:window.scrollY,a:e,t0:t}}_updateTactile(e,t,n){let r=this.lenis;if(this._zone(r),this.anim){this.dernierBrut=e;return}if(this.dernierBrut===null){this.dernierBrut=e;return}let i=Math.sign(e-this.dernierBrut);if(this.dernierBrut=e,!n.enabled||this.reduit||i===0||r.isTouching||r.isScrolling!==`smooth`||t<this.grace)return;let a=this.hote.getBoundingClientRect(),o=window.scrollY+a.top,s=a.height,c=i>0&&e>=n.seuilBas&&e<.999?o+s:i<0&&e<=n.seuilHaut&&e>.001?o:null;c!==null&&(this.anim={a:c},r.scrollTo(c,{duration:Math.max(.05,n.duree),easing:this.courbe,lock:!0,force:!0,onComplete:()=>{this.anim=null,this.grace=this.horloge+.3}}))}_zone(e){if(e.isTouching)return;let t=this.hote.getBoundingClientRect(),n=window.scrollY+t.top+t.height+window.innerHeight,r=window.scrollY<n-1;e.options.syncTouch!==r&&(e.options.syncTouch=r)}dispose(){window.removeEventListener(`wheel`,this._molette),window.removeEventListener(`keydown`,this._clavier),window.removeEventListener(`touchmove`,this._toucher),this.anim=null}},Zt=`1.3.26`;function Qt(e,t,n){return Math.max(e,Math.min(t,n))}function $t(e,t,n){return(1-n)*e+n*t}function en(e,t,n,r){return $t(e,t,1-Math.exp(-n*r))}function tn(e,t){return(e%t+t)%t}var nn=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=Qt(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=en(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}};function rn(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var an=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=rn(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},on=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},sn=100/6,cn={passive:!1};function ln(e,t){return e===1?sn:e===2?t:1}var un=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new on;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,cn),this.element.addEventListener(`touchstart`,this.onTouchStart,cn),this.element.addEventListener(`touchmove`,this.onTouchMove,cn),this.element.addEventListener(`touchend`,this.onTouchEnd,cn)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,cn),this.element.removeEventListener(`touchstart`,this.onTouchStart,cn),this.element.removeEventListener(`touchmove`,this.onTouchMove,cn),this.element.removeEventListener(`touchend`,this.onTouchEnd,cn)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=ln(r,this.window.width),a=ln(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},dn=e=>Math.min(1,1.001-2**(-10*e)),fn=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia(`(prefers-reduced-motion: reduce)`);isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new nn;emitter=new on;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:l=.1,infinite:u=!1,orientation:d=`vertical`,gestureOrientation:f=d===`horizontal`?`both`:`vertical`,touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:h=!0,prevent:g,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:w=C,stopInertiaOnNavigate:T=!1,respectReducedMotion:E=!0}={}){window.lenisVersion=Zt,window.lenis||(window.lenis={}),window.lenis.version=Zt,d===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!e||e===document.documentElement)&&(e=window),typeof s==`number`&&typeof c!=`function`?c=dn:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:h,prevent:g,virtualScroll:_,overscroll:v,autoRaf:y,anchors:b,autoToggle:x,allowNestedScroll:S,naiveDimensions:w,stopInertiaOnNavigate:T,respectReducedMotion:E},this.dimensions=new an(e,t,{autoResize:h}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new un(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=decodeURIComponent(e.hash);this.scrollTo(n,t);return}}if(this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)){this.reset();return}};onPointerDown=e=>{e.button===1&&this.reset()};isTouchOnSelectionHandle(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let n=e.targetTouches[0]??e.changedTouches[0];if(!n)return!1;let r=t.getRangeAt(0).getClientRects();if(r.length===0)return!1;let i=r[0],a=r[r.length-1],o=Math.hypot(n.clientX-i.left,n.clientY-i.top)<=40,s=Math.hypot(n.clientX-a.right,n.clientY-a.bottom)<=40;return o||s}onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);if(i&&this.isIos&&(r.type===`touchstart`&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type===`touchend`&&(this._isDraggingSelection=!1);return}this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty(`overflow`);return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty(`overflow`,`clip`);return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?n=!0:(a=1,o=void 0,s=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=e,p=t;if(typeof f==`string`&&[`top`,`left`,`start`,`#`].includes(f))f=0;else if(typeof f==`string`&&[`bottom`,`right`,`end`].includes(f))f=this.limit;else{let e=null;if(typeof f==`string`?(e=f.startsWith(`#`)?document.getElementById(f.slice(1)):document.querySelector(f),e||(f===`#top`?f=0:console.warn(`Lenis: Target not found`,f))):f instanceof HTMLElement&&f?.nodeType&&(e=f),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);f=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof f==`number`){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=f-this.animatedScroll;e>this.limit/2?f-=this.limit:e<-this.limit/2&&(f+=this.limit)}}else f=Qt(0,f,this.limit);if(f===this.targetScroll){c?.(this),l?.(this);return}if(this.userData=d??{},n){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o==`number`&&typeof s!=`function`?s=dn:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,x;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,x=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,x=u;else return!1;return!x&&(g>=_||g<=0)||(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?tn(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}},pn=class{constructor({demanderIOS:e=!1}={}){this.cible={x:0,y:0},this.ref=null,this.dernier=-1e9,this.disponible=!1,this._sur=e=>this._recevoir(e),this._geste=null,typeof DeviceOrientationEvent<`u`&&typeof DeviceOrientationEvent.requestPermission==`function`?e&&(this._geste=()=>{this._retirerGeste(),DeviceOrientationEvent.requestPermission().then(e=>{e===`granted`&&window.addEventListener(`deviceorientation`,this._sur,{passive:!0})}).catch(()=>{})},window.addEventListener(`touchend`,this._geste,{passive:!0}),window.addEventListener(`click`,this._geste,{passive:!0})):window.addEventListener(`deviceorientation`,this._sur,{passive:!0})}_retirerGeste(){this._geste&&=(window.removeEventListener(`touchend`,this._geste),window.removeEventListener(`click`,this._geste),null)}_recevoir(e){if(e.beta==null||e.gamma==null)return;let t=B.orientation,n=screen.orientation&&screen.orientation.angle||window.orientation||0,r=Math.abs(n)===90||n===270,i=r?e.gamma:e.beta,a=r?-e.beta:e.gamma;this.ref||={beta:i,gamma:a},this.dernier=performance.now(),this.disponible=!0;let o=T.clamp((a-this.ref.gamma)/t.plage,-1,1),s=T.clamp((i-this.ref.beta)/t.plage,-1,1)*t.signeY;this._brut={x:o,y:s,beta:i,gamma:a}}get active(){return B.orientation.enabled&&this.disponible&&performance.now()-this.dernier<1500}update(e){if(!this._brut||!this.ref)return this.cible;let t=B.orientation;return this.cible.x=T.damp(this.cible.x,this._brut.x,t.amorti,e),this.cible.y=T.damp(this.cible.y,this._brut.y,t.amorti,e),this.ref.beta=T.damp(this.ref.beta,this._brut.beta,t.recentrage,e),this.ref.gamma=T.damp(this.ref.gamma,this._brut.gamma,t.recentrage,e),this.cible}dispose(){window.removeEventListener(`deviceorientation`,this._sur),this._retirerGeste()}},mn=`junca-son`,hn=class{constructor({defaut:e=!0}={}){this.ctx=null;let t=null;try{t=localStorage.getItem(mn)}catch{}this.voulu=t===null?e:t===`on`,this.onChange=null,this._gestes=[`pointerdown`,`touchend`,`keydown`,`wheel`],this._debloquer=()=>{this._retirerGestes(),this.voulu&&this.demarrer()};for(let e of this._gestes)window.addEventListener(e,this._debloquer,{passive:!0});this._visibilite=()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.voulu&&this.ctx.resume())},document.addEventListener(`visibilitychange`,this._visibilite)}_retirerGestes(){for(let e of this._gestes)window.removeEventListener(e,this._debloquer)}get actif(){return this.voulu}set actif(e){this.voulu=!!e;try{localStorage.setItem(mn,e?`on`:`off`)}catch{}e&&!this.ctx&&this.demarrer(),this.ctx&&(e&&this.ctx.resume(),this.master.gain.setTargetAtTime(e?B.son.master:0,this.ctx.currentTime,.08)),this.onChange?.(this.voulu)}demarrer(){if(this.ctx)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e,n=B.son,r=t.currentTime;this.master=t.createGain(),this.master.gain.value=this.voulu?n.master:0,this.analyser=t.createAnalyser(),this.analyser.fftSize=256,this._niveauBuf=new Uint8Array(256),this.master.connect(this.analyser).connect(t.destination),this.busRobot=t.createGain(),this.busRobot.gain.value=n.robot,this.busRobot.connect(this.master),this.busUi=t.createGain(),this.busUi.gain.value=n.ui,this.busUi.connect(this.master),this.busMusique=t.createGain(),this.busMusique.gain.value=0,this.busMusique.connect(this.master),this.busMusique.gain.setTargetAtTime(n.musique,r+.5,1.6);let i=t.sampleRate*2,a=t.createBuffer(1,i,t.sampleRate),o=a.getChannelData(0);for(let e=0;e<i;e++)o[e]=Math.random()*2-1;this.bruit=a;let s=()=>{let e=t.createBufferSource();return e.buffer=a,e.loop=!0,e.start(),e};this.fanFiltre=t.createBiquadFilter(),this.fanFiltre.type=`lowpass`,this.fanFiltre.frequency.value=200,this.fanFiltre.Q.value=.7,this.fanGain=t.createGain(),this.fanGain.gain.value=0,s().connect(this.fanFiltre).connect(this.fanGain).connect(this.busRobot),this.swooshFiltre=t.createBiquadFilter(),this.swooshFiltre.type=`bandpass`,this.swooshFiltre.frequency.value=500,this.swooshFiltre.Q.value=1.1,this.swooshGain=t.createGain(),this.swooshGain.gain.value=0,s().connect(this.swooshFiltre).connect(this.swooshGain).connect(this.busRobot),this._swooshPrec=0;let c=t.createBiquadFilter();c.type=`lowpass`,c.frequency.value=320,c.Q.value=.9;let l=t.createGain();l.gain.value=1,c.connect(l).connect(this.busMusique);for(let[e,n,r]of[[55,0,.5],[110,-4,.35],[110,4,.35],[164.81,-3,.22],[164.81,3,.22]]){let i=t.createOscillator();i.type=e===55?`sine`:`triangle`,i.frequency.value=e,i.detune.value=n;let a=t.createGain();a.gain.value=r*.09,i.connect(a).connect(c),i.start()}let u=t.createOscillator();u.frequency.value=.05;let d=t.createGain();d.gain.value=140,u.connect(d).connect(c.frequency),u.start();let f=t.createOscillator();f.frequency.value=.083;let p=t.createGain();p.gain.value=.18,f.connect(p).connect(l.gain),f.start();let m=t.createBiquadFilter();m.type=`lowpass`,m.frequency.value=480;let h=t.createGain();h.gain.value=.012,s().connect(m).connect(h).connect(this.busMusique),this.voulu&&t.resume()}update(e,{rpm:t=0,plongee:n=0}={}){if(!this.ctx||this.ctx.state!==`running`)return;let r=B.son,i=this.ctx.currentTime,a=Math.min(1,t/340),o=Math.min(1,t/30);this.fanGain.gain.setTargetAtTime(r.fanGain*(.85+.15*a)*o,i,.15),this.fanFiltre.frequency.setTargetAtTime(1e3+a*300,i,.2);let s=Math.min(1,Math.max(0,n))**1.6;this.swooshGain.gain.setTargetAtTime(r.swooshGain*s,i,s>this._swooshPrec?.04:.22),this.swooshFiltre.frequency.setTargetAtTime(500+s*2400,i,.06),this._swooshPrec=s}_clic(e,t,n,r){let i=this.ctx;if(!i||i.state!==`running`)return;let a=i.currentTime,o=i.createBufferSource();o.buffer=this.bruit;let s=i.createBiquadFilter();s.type=`bandpass`,s.frequency.value=e*(.85+Math.random()*.3),s.Q.value=2.5;let c=i.createGain();c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(5e-4,a+t),o.connect(s).connect(c).connect(r),o.start(a),o.stop(a+t+.02)}touche(e=`type`){let t=B.son;e===`erase`?this._clic(2100,.02,t.toucheGain*.5,this.busUi):e===`line`?this._clic(2600,.03,t.toucheGain*.9,this.busUi):this._clic(3200,.016,t.toucheGain,this.busUi)}allumage(){let e=this.ctx;if(!e||e.state!==`running`)return;let t=e.currentTime,n=B.son,r=e.createBufferSource();r.buffer=this.bruit;let i=e.createBiquadFilter();i.type=`bandpass`,i.Q.value=3,i.frequency.setValueAtTime(300,t),i.frequency.exponentialRampToValueAtTime(3200,t+.5);let a=e.createGain();a.gain.setValueAtTime(5e-4,t),a.gain.exponentialRampToValueAtTime(n.allumageGain,t+.35),a.gain.exponentialRampToValueAtTime(5e-4,t+.7),r.connect(i).connect(a).connect(this.busRobot),r.start(t),r.stop(t+.8)}niveau(){if(!this.analyser||!this.ctx||this.ctx.state!==`running`)return 0;this.analyser.getByteTimeDomainData(this._niveauBuf);let e=0;for(let t=0;t<this._niveauBuf.length;t++){let n=(this._niveauBuf[t]-128)/128;e+=n*n}return Math.sqrt(e/this._niveauBuf.length)}appliquerVolumes(){if(!this.ctx)return;let e=B.son,t=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.voulu?e.master:0,t,.05),this.busRobot.gain.setTargetAtTime(e.robot,t,.05),this.busUi.gain.setTargetAtTime(e.ui,t,.05),this.busMusique.gain.setTargetAtTime(e.musique,t,.05)}dispose(){this._retirerGestes(),document.removeEventListener(`visibilitychange`,this._visibilite);try{this.ctx?.close()}catch{}this.ctx=null}},gn=class{constructor(e){this.gl=e.getContext(),this.ext=this.gl.getExtension(`EXT_disjoint_timer_query_webgl2`),this.attente=[],this.gpu=[],this.js=[],this.dts=[],this.el=document.createElement(`div`),this.el.style.cssText=`position:fixed;left:12px;top:12px;z-index:400;padding:8px 10px;background:rgba(0,0,0,.72);color:#fff;font:11px/1.5 ui-monospace,Menlo,monospace;white-space:pre;pointer-events:none;border-radius:4px`,document.body.appendChild(this.el),this._dernierAff=0}debut(){if(this.ext){for(let e=this.attente.length-1;e>=0;e--){let t=this.attente[e];this.gl.getQueryParameter(t,this.gl.QUERY_RESULT_AVAILABLE)&&(this.gl.getParameter(this.ext.GPU_DISJOINT_EXT)||this._push(this.gpu,this.gl.getQueryParameter(t,this.gl.QUERY_RESULT)/1e6),this.gl.deleteQuery(t),this.attente.splice(e,1))}this.q=this.gl.createQuery(),this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,this.q),this.t0=performance.now()}}fin(e,t=``){this.ext&&this.q&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.attente.push(this.q),this.q=null),this._push(this.js,performance.now()-this.t0),this._push(this.dts,e*1e3);let n=performance.now();if(n-this._dernierAff<250)return;this._dernierAff=n;let r=e=>{if(!e.length)return NaN;let t=[...e].sort((e,t)=>e-t);return t[t.length>>1]},i=e=>{if(!e.length)return NaN;let t=[...e].sort((e,t)=>e-t);return t[Math.min(t.length-1,Math.floor(t.length*.9))]},a=r(this.gpu),o=i(this.gpu),s=r(this.js),c=r(this.dts);this.el.textContent=`GPU   ${a.toFixed(2)} ms  (p90 ${o.toFixed(2)})   budget 120 Hz : 8,33 — 60 Hz : 16,7\nJS    ${s.toFixed(2)} ms  (boucle image)\nimage ${c.toFixed(1)} ms  →  ${(1e3/c).toFixed(0)} i/s\n`+t}_push(e,t){e.push(t),e.length>90&&e.shift()}dispose(){this.el.remove()}};function _n(e,t,n,r){let i=3*e,a=3*(n-e)-i,o=1-i-a,s=3*t,c=3*(r-t)-s,l=1-s-c,u=e=>((o*e+a)*e+i)*e,d=e=>((l*e+c)*e+s)*e;return e=>{let t=e;for(let n=0;n<8;n++){let n=u(t)-e;if(Math.abs(n)<1e-5)break;t-=n/(3*o*t*t+2*a*t+i||1e-6)}return d(T.clamp(t,0,1))}}var vn=_n(.35,0,0,1);async function yn(n={}){let r={hote:`#robot-app`,pin:`[data-hero]`,suite:`[data-suite]`,titre:`[data-hero-titre]`,etat:`#state`,hud:`#hud`,chargement:`#robot-chargement`,panneau:!0,chrono:!0,mesure:!1,alpha:!0,...n},i=document.querySelector(r.hote);if(!i)return null;let a=Vt();B.render.maxDPR=a.maxDPR,B.render.dprScroll=a.dprScroll,B.render.dprSections=a.dprSections,B.render.dprTextures=a.dprTextures,B.render.msaa=a.msaa,B.render.fxaa=a.fxaa,B.render.reposHz=a.reposHz,B.perf.nuages=a.nuages,a.nuagesMobile&&Object.assign(B.decor.clouds,a.nuagesMobile),a.pointeur&&(B.pointer.effect=a.pointeur),a.flouSection!==null&&(B.section.flou=a.flouSection),a.bombe!==null&&(B.section.bombe=a.bombe),a.cadrage&&Object.assign(B.camera,a.cadrage);let o=new URLSearchParams(location.search),s=[`localhost`,`127.0.0.1`].includes(location.hostname)||o.has(`hud`)||o.has(`panneau`);if(o.has(`msaa`)&&(B.render.msaa=+o.get(`msaa`)),o.has(`dpr`)){let e=+o.get(`dpr`);B.render.maxDPR=B.render.dprScroll=B.render.dprSections=e,B.render.dprTextures=Math.max(B.render.dprTextures||0,e)}if(o.has(`fxaa`)&&(B.render.fxaa=o.get(`fxaa`)!==`0`),a.assets&&(B.env.exr=new URL(`/robot/`+a.assets.exr,location.origin).href,B.bake.ao=new URL(`/robot/`+a.assets.ao,location.origin).href+`?v=`+t),o.has(`env`)&&(B.env.exr=new URL(`/robot/`+o.get(`env`),location.origin).href),o.has(`lightmap`)&&(B.bake.lightmap=new URL(`/robot/`+o.get(`lightmap`),location.origin).href),o.has(`nuages`)&&(B.perf.nuages=o.get(`nuages`)!==`0`),o.has(`cadrage`)){let[e,t]=o.get(`cadrage`).split(`,`).map(Number);e&&(B.camera.headFill=e),Number.isNaN(t)||(B.camera.drop=t)}if(o.has(`pointeur`)&&(B.pointer.effect=o.get(`pointeur`)),o.has(`orientation`)&&(B.orientation.demanderIOS=o.get(`orientation`)!==`0`),o.has(`nappe`)){let[e,t,n,r]=o.get(`nappe`).split(`,`).map(Number);Object.assign(B.decor.clouds,...[[`devant`,e],[`bandRatio`,t],[`profondeur`,n],[`hauteurBiais`,r]].filter(([,e])=>e>0).map(([e,t])=>({[e]:t})))}let u=Bt(),d=new te({antialias:!1,alpha:r.alpha,powerPreference:`high-performance`});d.outputColorSpace=c,d.autoClear=!1,d.toneMapping=6,d.toneMappingExposure=B.env.exposure,d.info.autoReset=!1,i.appendChild(d.domElement);let f=new le,p=new l(B.camera.fov,1,.01,200),m=new Ee,g=new Ae,v=new je(i,6,{tactile:a.tactile}),y={x:0,y:0},b=a.tactile?new pn({demanderIOS:B.orientation.demanderIOS}):null,x=e=>{if(!a.tactile)return v.raw;if(b?.active)return b.cible;let t=B.errance;return y.x=t.ampX*Math.sin(e*t.fX*Math.PI*2),y.y=t.ampY*Math.sin(e*t.fY*Math.PI*2+1.3),y},S=new Je,C=new $e,D=new mt(d);new fe;let O=()=>B.pointer.effect===`ripple`,k=r.mesure?new gn(d):null,ee=await ze(d,B.env.exr);f.environment=ee.texture,f.environmentIntensity=B.env.intensity,f.environmentRotation.set(0,B.env.rotationY,0),f.add(new ie(new h(B.env.ambient),B.env.ambientIntensity)),f.add(m.dome),m.setTrail(S.texture),D.setTrail(S),D.setFog(m.skyRT.texture);let A=e=>e.replace(/\s/g,`_`).replace(/[\[\]\.:\/]/g,``),ne=new ve().setDecoderPath(new URL(`/robot/draco/`,location.origin).href),re=await new pe().setDRACOLoader(ne).loadAsync(xe);ne.dispose();let j=new Map;for(let e of[...re.scene.children]){let t=[];e.traverse(e=>{e.isMesh&&t.push(e)}),t.length&&j.set(A(e.name),{node:e,meshes:t})}let oe={},M={},N=[];for(let[e,t]of Object.entries(be)){oe[e]=[],M[e]=[];for(let n of t){let t=j.get(A(n));if(!t){N.push(`${e}: ${n}`);continue}oe[e].push(t.node);for(let n of t.meshes)M[e].push(n),g.apply(n,e)}}let se=new Set(Object.values(oe).flat()),P=[];for(let[e,t]of j)se.has(t.node)||P.push(e);let F=0,ce=0;for(let e of j.values())for(let t of e.meshes)ce++,t.geometry.getAttribute(`uv1`)&&F++;let ue=await g.loadBake(B.bake),I=null,de=null,L=new Ct,R=a.palier===`mobile`?null:new hn({defaut:B.son.defaut});L.onChar=R?e=>R.touche(e):null;for(let e of j.values())for(let t of e.meshes)t.userData.__srcMaterial===`Screen`&&(I=new gt(t,t.material),I.leftSide=L.texture),t.userData.__srcMaterial===`ScreenGlow`&&(de=t);if(B.surfaceDetail)for(let e of g.cache.values())[`Screen`,`ScreenGlow`,`mat_glass`].includes(e.name)||Ve(e,B.surface[e.name]||B.surface.default);let z=new Fe(oe);f.add(z.root),z.root.updateMatrixWorld(!0);let me=new E(1,0,0);if(I){let e=I.mesh.geometry.getAttribute(`normal`),t=new E;for(let n=0;n<e.count;n++)t.add(new E(e.getX(n),e.getY(n),e.getZ(n)));t.lengthSq()>1e-8&&me.copy(t.normalize().transformDirection(I.mesh.matrixWorld))}let he=z.setFacing(me)&&!!I,ge=new ae().setFromObject(z.root),_e=ge.getCenter(new E);z.root.position.sub(new E(_e.x,ge.min.y,_e.z)),z.baseY=z.root.position.y,z.root.updateMatrixWorld(!0);let ye=new ae;for(let e of M.head)ye.expandByObject(e);let Se=ye.getCenter(new E),Ce=ye.max.y-ye.min.y,we=ye.getSize(new E).length()*.5,Te=Se.clone().setY(Se.y-Ce*B.camera.drop),V=Te.clone(),H=[new E,new E,new E,new E],De=new E,Oe=new E,ke=new E,Me=new E,Ne=(()=>{let e=I.mesh.geometry,t=e.getAttribute(`position`),n=e.getAttribute(`normal`),r=new E;for(let e=0;e<n.count;e++)r.add(ke.set(n.getX(e),n.getY(e),n.getZ(e)));r.normalize();let i=new E(0,1,0).addScaledVector(r,-r.y).normalize(),a=new E().crossVectors(r,i).normalize(),o=1e9,s=-1e9,c=1e9,l=-1e9,u=-1e9;for(let e=0;e<t.count;e++){ke.set(t.getX(e),t.getY(e),t.getZ(e));let n=ke.dot(a),d=ke.dot(i);o=Math.min(o,n),s=Math.max(s,n),c=Math.min(c,d),l=Math.max(l,d),u=Math.max(u,ke.dot(r))}return{n:r,up:i,right:a,r0:o,r1:s,u0:c,u1:l,d:u}})();function Pe(){let e=I.mesh;e.updateMatrixWorld(!0);let t=Ne,n=(n,r,i)=>H[n].copy(t.n).multiplyScalar(t.d).addScaledVector(t.right,r).addScaledVector(t.up,i).applyMatrix4(e.matrixWorld);return n(0,t.r0,t.u0),n(1,t.r0,t.u1),n(2,t.r1,t.u1),n(3,t.r1,t.u0),Oe.copy(H[0]).add(H[1]).add(H[2]).add(H[3]).multiplyScalar(.25),De.copy(t.n).transformDirection(e.matrixWorld).normalize(),Me.copy(t.up).transformDirection(e.matrixWorld).normalize(),{coins:H,centre:Oe,normale:De,haut:Me,demiHauteur:H[0].distanceTo(H[1])*.5,demiLargeur:H[1].distanceTo(H[2])*.5}}let Ie=new E,Le=1,Re=new E,Be=new E,He=new E(0,1,0),Ue=new E,We=new E,Ge=new E,Ke=new E,qe=new E(0,1,0);function Ye(e=0){let t=T.degToRad(p.fov)*.5,n=Math.atan(Math.tan(t)*p.aspect);Le=we/(Math.sin(Math.min(t,n))*B.camera.headFill);let{azimuth:r,elevation:i}=B.camera;if(Re.set(Math.sin(r)*Math.cos(i),Math.sin(i),Math.cos(r)*Math.cos(i)),Be.crossVectors(Re,He).normalize(),V.copy(Te).addScaledVector(Be,we*B.camera.shiftX*+(p.aspect>1)),Ie.copy(V).addScaledVector(Re,Le),e>0&&I){let r=Pe();We.copy(r.centre),Ue.copy(r.normale);let i=Math.min(r.demiLargeur/Math.tan(n),r.demiHauteur/Math.tan(t));Ke.copy(We),Ge.copy(We).addScaledVector(Ue,i),V.lerp(Ke,e),Ie.lerp(Ge,e),qe.set(0,1,0).lerp(r.haut,e).normalize()}else qe.set(0,1,0);p.up.copy(qe)}let Xe=new ae;for(let e of[...M.fanHub,...M.fanBlades])Xe.expandByObject(e);let Ze=Xe.isEmpty()?ye.getCenter(new E).setY(ye.min.y):Xe.getCenter(new E).setY(Xe.max.y),Qe=new E,U=null,et=!1,W=null,G=4,K=4,nt=0;function rt(e=nt||B.render.maxDPR){let t=window.innerWidth,n=window.innerHeight,r=Math.min(e,window.devicePixelRatio||1),i=Math.min(1,Math.sqrt(B.render.maxPixels/(t*n*r*r)));nt=e,d.setPixelRatio(r*i),d.setSize(t,n,!1),p.aspect=t/n,p.updateProjectionMatrix(),G=Math.round(t*r*i),K=Math.round(n*r*i),D.setSize(G,K),S.setSize(G,K),C.setSize(G,K),U?.setSize(G,K),m.setSize(t,n,r*i),Ye()}let q=null,J=null,it=[],ot=()=>{let e=Math.min(B.render.dprTextures||Math.max(B.render.maxDPR,B.render.dprSections),window.devicePixelRatio||1);return e*Math.min(1,Math.sqrt(B.render.maxPixels/(window.innerWidth*window.innerHeight*e*e)))},st=()=>{rt();for(let e of it)e.setSize(window.innerWidth,window.innerHeight,ot());W?.mesurer(),q&&q.rendreUneImage()},ct=0,lt=()=>{clearTimeout(ct),ct=setTimeout(st,120)};window.addEventListener(`resize`,a.tactile?lt:st),rt(),D.setFXAA(B.render.fxaa);let ut={scroll:-1e9,pointeur:-1e9},dt=()=>{ut.pointeur=performance.now()},ft=()=>{ut.scroll=performance.now()};if(window.addEventListener(`pointermove`,dt,{passive:!0}),window.addEventListener(`wheel`,dt,{passive:!0}),window.addEventListener(`touchstart`,dt,{passive:!0}),window.addEventListener(`scroll`,ft,{passive:!0}),B.decor.brume===`cartes`){let e=new ae().setFromObject(z.root),t=e.getSize(new E);p.position.copy(Ie),p.lookAt(V),p.updateMatrixWorld(!0);let n=Ze.clone().project(p),r=new E(n.x,-1,n.z).unproject(p).y,i=new E().subVectors(Ie,V).setY(0).normalize();U=new tt({center:e.getCenter(new E).setY(r),radius:Math.max(t.x,t.z)*.85,groundY:r,band:Math.max((Ze.y-r)*B.decor.clouds.bandRatio,1e-4),front:i}),D.setClouds(U.texture),U.setSize(G,K),s&&console.log(`nuages : sol ${r.toFixed(3)} → haut du ventilateur ${Ze.y.toFixed(3)} (nappe ${(Ze.y-r).toFixed(3)})`)}B.decor.brume!==`ecran`&&(D.material.uniforms.uFog.value.w=0);let pt=document.querySelector(r.pin),ht=document.querySelector(r.suite),_t=document.querySelector(r.titre),vt=null,Y=null,yt=!1;_t&&e(()=>import(`./scramble.B_wRDRhM.js`).then(e=>e.s).then(e=>{Y={S:e,s:null}}),__vite__mapDeps([3,2,4,5])).catch(()=>{});let bt=()=>{if(!Y||Y.s)return!!Y?.s;try{return Y.s=Y.S.prepare(_t,{lines:!1}),Y.S.show(Y.s),!0}catch(e){return console.warn(`[robot] scramble indisponible`,e),Y=null,!1}},xt=e=>{if(e&&!yt){_t&&_t.style.opacity===`0`&&(_t.style.opacity=`1`);return}if(!Y||!bt()){_t&&(_t.style.opacity=e?`1`:`0`);return}!e&&!yt&&(yt=!0,Y.S.erase(Y.s,{duration:.55})),e&&yt&&(yt=!1,Y.S.play(Y.s,{duration:.7,mode:`decode`}))};if(ht&&I&&!u){J=new at({section:ht,nom:`clients`,textes:`.clients__label, .clients__text`,bande:{piste:ht.querySelector(`.marquee__track`),items:[...ht.querySelectorAll(`.marquee__track li img`)]}}),it.push(J);for(let e of r.textes||[]){let t=document.querySelector(e);t&&it.push(new at({section:t,nom:e}))}for(let e of it)e.setSize(window.innerWidth,window.innerHeight,ot())}let St=null,wt=null;B.plongee.enabled&&pt&&!u&&(W=new Kt({hote:pt,cible:ht}),a.tactile&&(wt=new fn({autoRaf:!0,syncTouch:!0,syncTouchLerp:.05,touchMultiplier:1,allowNestedScroll:!0}),document.documentElement.classList.add(`robot-lenis`)),St=new Xt({hote:pt,lenis:wt}),B.plongee.debug&&r.chrono&&(vt=qt(W)));let Tt=!1,Et=0,Dt={s:0,scrollY:window.scrollY};function Ot(e){let t=B.section,n=window.scrollY,r=Math.max(1,window.innerHeight),i=e>0?(n-Dt.scrollY)/r*(1/60/e):0;Dt.scrollY=n;let a=t.forcer?t.forcer:T.clamp(i*t.gain,-t.forceMax,t.forceMax);Dt.s=e>0?T.damp(Dt.s,a,t.amorti,e):a,D.setOnde(Dt.s,t.onde,t.flou)}let kt=new _,At=new w,jt=M.head,Mt=[...M.fanHub,...M.fanBlades],Nt=null,Pt=document.querySelector(r.etat);function Ft(){return!a.survol||!v.present?null:(At.set(v.raw.x,v.raw.y),kt.setFromCamera(At,p),kt.intersectObjects(jt,!0).length?`head`:kt.intersectObjects(Mt,!0).length?`fan`:null)}let X={name:`boot`,glitch:0,screenOn:0},Z=e=>{X.name=e,Pt&&(Pt.textContent=e)};function It(e,t){e===`head`&&(X.glitch=Math.max(X.glitch,.25)),z.setFanTarget(e===`fan`?B.fan.hoverRPM:B.fan.idleRPM),X.name!==`boot`&&Z(e===`head`?`attentif`:e===`fan`?`refroidissement`:`au repos`),document.body.style.cursor=e?`pointer`:``}let Lt=()=>{q&&!q.enMarche&&q.rendreUneImage()};window.addEventListener(`scroll`,Lt,{passive:!0});let Rt=()=>v.present?Nt===`head`?`attentif`:Nt===`fan`?`refroidissement`:`au repos`:`absent`,Q={t0:null,done:!1};z.setFanTarget(0),z.fanSpeed=0,I&&(I.on=0);let Wt=document.querySelector(r.hud),Gt=0,$=0,Jt=0;if(u&&(Q.done=!0,Q.t0=0,z.setFanTarget(B.fan.idleRPM),z.fanSpeed=0,I&&(I.on=1),Z(`au repos`),I)){L.state=`au repos`;for(let e=0;e<=90;e++)L.update(e*.1,.1,{fan:B.fan.idleRPM})}let Yt=new w,Zt=0,Qt=()=>{};function $t(e){let t=Zt+=e;v.update(e);let n=performance.now(),r=B.render,o=n-ut.scroll<r.scrollApres*1e3||!!St?.enVol,s=!!(W&&J&&W.brut>=.999&&W.valeur>=.95),c=s?Math.max(r.maxDPR,r.dprSections):o?Math.min(r.maxDPR,r.dprScroll):r.maxDPR;e>0&&Math.abs(c-nt)>.001&&rt(c);let l=Q.done&&!o&&n-ut.pointeur>r.reposApres*1e3&&!s;if(q&&(q.plafondHz=l?r.reposHz:0),Q.done){let e=Rt();e!==X.name&&Z(e)}else{if(Q.t0===null){if(document.documentElement.classList.contains(`is-preloading`))return Qt();Q.t0=t}let e=t-Q.t0;if(e>.5&&z.setFanTarget(B.fan.idleRPM),I){let t=T.clamp((e-1.1)/.9,0,1),n=t<1?Math.sin(e*47)>.2?1:.35:1;I.on=vn(t)*n,e>1.1&&e<1.3&&(X.glitch=.8)}e>1.15&&e<1.2&&z.addImpulse(`head`,`y`,.03),!Q.sonEcran&&e>1.1&&I&&(Q.sonEcran=!0,R?.allumage()),e>2.4&&(Q.done=!0,Z(`au repos`),O()&&C.splash())}X.glitch=T.damp(X.glitch,0,3.5,e),I&&(I.glitch=X.glitch,I.update(t,v.value),Q.done&&(L.state=X.name,L.update(t,e,{fan:z.fanSpeed*60}))),de&&(de.material.emissiveIntensity=(I?I.on:0)*1.2);let u=Q.done?Ft():null;if(u!==Nt&&(It(u,Nt),Nt=u),z.attention=T.damp(z.attention,+(Nt===`head`),4,e),b?.update(e),z.update(e,t,x(t)),R?.update(e,{rpm:z.fanSpeed*60,plongee:W?W.vitesse/B.plongee.vitesseRef:0}),W){St?.update(W.brut,t),W.update(e);let n=W.etat;if(Ye(n.vol),z.gain=n.gain,D.setLentille(n.lentille,n.lentilleBords),D.setFlou(Math.min(W.vitesse/B.plongee.vitesseRef,1)*B.plongee.flou*(.2+.8*n.dive)),Et=n.vol,J&&J.pret){let e=n.dalle>.01;if(e){J.update();let e=Pe();I.setSectionFit(p.aspect,e.demiLargeur/e.demiHauteur),I.section=J.texture,I.setBande(J.texBande,J.bande)}I.sectionOn=e,I.sectionLook=n.look,e&&!Tt&&(Tt=!0,X.glitch=Math.max(X.glitch,.9)),!e&&Tt&&(Tt=!1),D.setSection(J.texture,n.plat),D.setBande(J.texBande,J.bande)}xt(n.titre>.5),vt?.()}Ot(e);let h=[],g=W&&W.brut>=.999&&W.valeur>=.95,_=0;if(g){let e=Math.max(1,window.innerHeight);if(J&&B.section.bombeRelache){let t=J.section.getBoundingClientRect();_=B.section.bombe*T.smoothstep(t.bottom/e,B.section.bombeFin,1)}else _=B.section.bombe;for(let n of it){if(!n.charge)continue;let r=n.section.getBoundingClientRect();if(n===J){n.pret&&r.bottom>0&&(n.update(),h.push({s:n,rampe:1}));continue}if(r.top<1.5*e&&!n.pret&&n.preparer(),!n.pret){n.depuis=null;continue}if(!(r.bottom<=e+.5&&r.bottom>0)){n.depuis=null;continue}n.depuis??=t;let i=Math.min(T.clamp((e-r.bottom)/(.12*e),0,1),T.clamp((t-n.depuis)/.3,0,1));n.update(),h.push({s:n,rampe:i})}i.style.visibility=h.length?``:`hidden`}else i.style.visibility=``;if(g){h.length&&(k?.debut(),d.info.reset(),D.composeSections(h.map(({s:e,rampe:t})=>({texture:e.texture,texBande:e.texBande,bande:e.bande,haut:e.place.haut,hauteur:e.place.hauteur,rampe:t})),t,{force:_,bords:B.section.bombeBords}),k?.fin(e,`${h.length} section(s) seule(s) : ${h.map(e=>e.s.nom).join(`, `)}   ${G}×${K}`)),$+=e,Gt++,($>.5||e===0)&&(Jt=e?Math.round(Gt/$):0,Gt=0,$=0,Wt&&(Wt.textContent=`${e?Jt+` fps`:`image fixe`}   ${h.length} section(s)   ${G}×${K}`));return}let y=B.orbit,w=1-(1-y.easePerFrame)**(e*60),E=y.strength*(1-Et),ee=T.clamp(v.raw.y,-1,1)*E,A=T.clamp(-v.raw.x,-1,1)*E;Yt.x+=(ee-Yt.x)*w,Yt.y+=(A-Yt.y)*w,p.position.copy(Ie),p.lookAt(V),p.translateZ(-Le),p.rotateY(-Yt.y),p.rotateX(Yt.x),p.translateZ(Le),Qe.copy(Ze).project(p),D.setFogTop(Qe.y*.5+.5+B.decor.fog.topOffset),Qt=()=>{p.position.copy(Ie),p.lookAt(V),m.update(t),et||=(m.renderSky(d),!0),D.renderScene(f,p),D.setClouds(null),D.compose(t)},k?.debut(),d.info.reset(),B.render.msaa!==D.target.samples&&D.setMSAA(B.render.msaa);let te=B.perf;if(B.pointer.effect===`none`)D.setRipple(null),D.setTrailOn(!1),m.uniforms.uTrailAmt.value=0;else if(O()){let e=C.step(d,v.raw,v.present);D.setRipple(e?C:null),D.setTrailOn(!0),m.uniforms.uTrailAmt.value=0}else D.setRipple(null),D.setTrailOn(!0),D.setTrailPreset(S.avion),m.setTrail(S.texture),m.uniforms.uTrailAmt.value=B.trail.domeDistortion;m.update(t),(te.cielChaqueImage||!et)&&(m.renderSky(d),et=!0);let ne=D.renderScene(f,p);U&&te.nuages?(U.update(t),U.render(d,p,D.depthTexture),D.setClouds(U.texture)):D.setClouds(null),D.compose(t),B.pointer.effect!==`none`&&!O()&&S.update(d,v.raw,v.present,e,window.innerWidth,window.innerHeight),k?.fin(e,`${ne.calls} draw calls   ${G}×${K}   MSAA ${D.target.samples}${D.fxaaOn?` + FXAA`:``}   DPR ${d.getPixelRatio().toFixed(2)}${l?` (repos, `+r.reposHz+` Hz)`:o?` (scroll)`:``}   palier ${a.palier}   pointeur ${B.pointer.effect}   nuages ${te.nuages?`on`:`off`}   bloom ${te.bloom?`on`:`off`}   ciel ${te.cielChaqueImage?`chaque image`:`figé`}`),$+=e,Gt++,($>.5||e===0)&&(Jt=e?Math.round(Gt/$):0,Gt=0,$=0,Wt&&(Wt.textContent=`${e?Jt+` fps`:`image fixe`}   ${ne.calls} draw calls   ${(ne.triangles/1e3).toFixed(1)}k tris   ${G}×${K}`))}q=new Ht({renderer:d,hote:[pt||i,...it.map(e=>e.section)],image:$t,reduit:u}),q.reevaluer(),u&&q.rendreUneImage();let en=Ut(d.domElement,()=>{tn.dispose(),document.querySelector(r.chargement)?.classList.remove(`gone`),yn()});document.querySelector(r.chargement)?.classList.add(`gone`),s&&(console.group(`%cContrat de nommage`,`font-weight:700`),console.log(`pivot tête :`,z.pivotPosition.toArray().map(e=>+e.toFixed(4)).join(`, `)),console.log(`regard : ${z.facing.toArray().map(e=>+e.toFixed(3)).join(`, `)}${he?` (normale de l'écran)`:` — ÉCRAN INTROUVABLE, +X par défaut`}`),N.length&&console.warn(`Nœuds ATTENDUS et ABSENTS du .glb :
  `+N.join(`
  `)),P.length&&console.warn(`Nœuds PRÉSENTS mais non déclarés dans PARTS :
  `+P.join(`
  `)),g.usedFallback&&console.warn(`Matériau absent sur certains meshes : retombée par groupe.`),g.missing.size&&console.warn(`Matériaux inconnus du code :`,[...g.missing].join(`, `)),console.log(`environnement :`,ee.source),console.log(`UV1 : ${F}/${ce} meshes — AO ${ue.ao?`ok`:`ABSENTE`}, lightmap ${ue.lightmap?`ok`:`ABSENT`}`),console.log(I?`Screen : uv ${I.uvRect.toArray().map(e=>+e.toFixed(3)).join(`, `)}${I.degenerate?` (DÉGÉNÉRÉES)`:``}`:`Screen : ABSENT`),console.groupEnd());let tn={renderer:d,scene:f,camera:p,rig:z,plongee:W,forcee:St,lenis:wt,orientation:b,content:L,son:R,sectionTex:J,sections:it,onde:Dt,lib:g,missing:N,orphans:P,groups:oe,groupMeshes:M,target:V,headBox:ye,fanTop:Ze,screen:I,background:m,trail:S,ripple:C,clouds:U,post:D,state:X,pilote:q,TUNING:B};window.__junca=tn,a.panneau&&r.panneau&&(tn.panel=zt(tn));let nn=!1;return tn.dispose=()=>{if(!nn){nn=!0,q.dispose(),St?.dispose(),b?.dispose(),R?.dispose();try{wt?.destroy()}catch{}document.documentElement.classList.remove(`robot-lenis`),k?.dispose(),en(),window.removeEventListener(`resize`,a.tactile?lt:st),clearTimeout(ct),window.removeEventListener(`pointermove`,dt),window.removeEventListener(`wheel`,dt),window.removeEventListener(`touchstart`,dt),window.removeEventListener(`scroll`,ft),window.removeEventListener(`scroll`,Lt),v.dispose(),tn.panel?.gui?.destroy();for(let e of[S,C,U,D,m,...it])try{e?.dispose?.()}catch{}ee?.texture?.dispose?.();for(let e of g.cache.values())e.dispose();for(let e of[ue?.ao,ue?.lightmap,I?.material?.map])e?.dispose?.();f.traverse(e=>{e.isMesh&&e.geometry?.dispose?.()}),L?.dispose?.(),d.domElement.remove(),d.dispose(),d.forceContextLoss?.(),window.__junca===tn&&delete window.__junca}},tn}export{yn as start};