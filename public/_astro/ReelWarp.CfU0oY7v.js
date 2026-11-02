import{r as e}from"./rolldown-runtime.hePW80VL.js";import{n as t}from"./scheduler.BfXE1MsE.js";import{Jt as n,Nt as r,dn as i,dt as a,hn as o,nn as s,nt as c,pn as l}from"./three.module.BXU1Nt8E.js";import{a as u,d,m as f,n as p,o as m,p as h,r as g,s as _,t as v}from"./use-overlay.BhrbAUQS.js";var y=e(t(),1),b=f(),x=48,S=30,C=`
uniform vec4 uFrom, uTo;      // rectangles (x, y, largeur, hauteur) en pixels de la scène
uniform vec2 uRes;            // taille de la scène en pixels
uniform float uRatio, uTwist;
varying vec2 vUv;
varying vec2 vWH;

void main() {
  vec2 q = position.xy + 0.5;                                  // 0..1 sur le plan
  // Avancement PROPRE À CE SOMMET : le seuil du fondu dépend de sa place, les coins ne partent donc pas ensemble.
  // Le coin bas-droite (celui autour duquel la vidéo se replie) mène la danse, le haut-gauche suit.
  float w = 1.0 - (pow(q.x, 0.75) + pow(1.0 - q.y, 1.5)) * 0.5;
  float t = smoothstep(w * 0.35, 0.65 + w * 0.35, uRatio);

  vec4 rect = mix(uFrom, uTo, t);
  vec2 p = rect.xy + q * rect.zw;

  // Vrillage : nul à 0 et à 1 (smoothstep(0,1,t) y vaut t), maximal au milieu du trajet
  float rot = (smoothstep(0.0, 1.0, t) - t) * uTwist;
  vec2 c = rect.xy + rect.zw * 0.5;
  float s = sin(rot), co = cos(rot);
  p = c + mat2(co, s, -s, co) * (p - c);

  vUv = vec2(q.x, 1.0 - q.y);   // l'axe Y est inversé plus bas : la texture doit l'être aussi
  vWH = rect.zw;
  // pixels de la scène (origine coin haut-gauche) → repère de la caméra orthographique
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p.x - uRes.x * 0.5, uRes.y * 0.5 - p.y, 0.0, 1.0);
}`,w=`
precision highp float;
uniform sampler2D uTex;
uniform vec2 uTexSize;
uniform float uRadius, uOpacity;
varying vec2 vUv;
varying vec2 vWH;

void main() {
  // « cover » : on garde le cadrage de object-fit: cover du DOM
  float pr = vWH.x / max(1.0, vWH.y), tr = uTexSize.x / max(1.0, uTexSize.y);
  vec2 s = pr > tr ? vec2(1.0, tr / pr) : vec2(pr / tr, 1.0);
  vec3 col = texture2D(uTex, (vUv - 0.5) * s + 0.5).rgb;

  // coins arrondis de 4 px, constants quelle que soit la taille du rectangle
  vec2 p = (vUv - 0.5) * vWH;
  vec2 d = abs(p) - (vWH * 0.5 - uRadius);
  float dist = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - uRadius;
  float a = 1.0 - smoothstep(-1.0, 1.0, dist);
  gl_FragColor = vec4(col, a * uOpacity);
}`;function T({stage:e,box:t,fig:u,video:f}){let{size:p,gl:m,scene:g,camera:_}=h(),v=(0,y.useRef)(null),T=(0,y.useMemo)(()=>new n({vertexShader:C,fragmentShader:w,transparent:!0,depthTest:!1,depthWrite:!1,side:2,uniforms:{uFrom:{value:new l},uTo:{value:new l},uRes:{value:new i(1,1)},uRatio:{value:1},uTwist:{value:.5},uTex:{value:null},uTexSize:{value:new i(16,10)},uRadius:{value:4},uOpacity:{value:0}}}),[]),E=(0,y.useMemo)(()=>new r(1,1,x,S),[]);(0,y.useEffect)(()=>()=>{T.dispose(),E.dispose()},[T,E]);let[D,O]=(0,y.useState)(!1);return(0,y.useEffect)(()=>{let t=!0,n=(t,n,r)=>{t.minFilter=c,t.magFilter=c,t.generateMipmaps=!1,t.colorSpace=``;let i=T.uniforms.uTex.value;T.uniforms.uTex.value=t,T.uniforms.uTexSize.value.set(n||16,r||10),e.classList.add(`is-gl`),O(!0),i?.dispose()};f.poster&&new s().load(f.poster,e=>{if(!t||T.uniforms.uTex.value instanceof o){e.dispose();return}let r=e.image;n(e,r?.width??16,r?.height??10)});let r=()=>{t&&n(new o(f),f.videoWidth,f.videoHeight)};return f.readyState>=2?r():f.addEventListener(`loadeddata`,r,{once:!0}),()=>{t=!1,f.removeEventListener(`loadeddata`,r),T.uniforms.uTex.value?.dispose(),T.uniforms.uTex.value=null,e.classList.remove(`is-gl`)}},[f,T,e]),(0,y.useEffect)(()=>{m.compile(g,_)},[m,g,_]),d(()=>{let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=u.getBoundingClientRect();if(r.width<4)return;let o=r.left-n.left,s=r.top-n.top;T.uniforms.uTo.value.set(o,s,r.width,r.height),T.uniforms.uFrom.value.set(o+r.width-r.width*3,s+r.height-r.height*3,r.width*3,r.height*3);let c=a.clamp(i.width/r.width,1,3);T.uniforms.uRatio.value=(3-c)/2,T.uniforms.uRes.value.set(p.width,p.height),T.uniforms.uOpacity.value=+!!D,T.uniforms.uTex.value&&f.videoWidth&&T.uniforms.uTexSize.value.set(f.videoWidth,f.videoHeight),v.current&&(v.current.renderOrder=1)}),(0,y.useEffect)(()=>{m.setClearAlpha(0)},[m]),(0,b.jsx)(`mesh`,{ref:v,frustumCulled:!1,geometry:E,material:T})}function E({twist:e=.5}){let t=(0,y.useRef)(null),[n,r]=(0,y.useState)(null),[i,a]=(0,y.useState)(!0),o=u(`reel`),s=v();return(0,y.useEffect)(()=>{if(!(matchMedia(`(min-width: 810px)`).matches&&!matchMedia(`(prefers-reduced-motion: reduce)`).matches&&`WebGLRenderingContext`in window)||!t.current)return;let e=t.current.closest(`[data-reel-stage]`),n=e?.querySelector(`.reel__box`),i=e?.querySelector(`[data-reel-video]`),o=i?.querySelector(`video`);if(!e||!n||!i||!o)return;r({stage:e,box:n,fig:i,video:o});let s=!0,c=document.hidden,l=()=>a(s&&!c),u=()=>{c=document.hidden,l()};document.addEventListener(`visibilitychange`,u);let d=new IntersectionObserver(([e])=>{s=e.isIntersecting,l()},{rootMargin:`20% 0px`});d.observe(e);let f=matchMedia(`(min-width: 810px)`),p=()=>{f.matches||(e.classList.remove(`is-gl`),r(null))};return f.addEventListener(`change`,p),()=>{document.removeEventListener(`visibilitychange`,u),d.disconnect(),f.removeEventListener(`change`,p)}},[]),(0,b.jsx)(`div`,{ref:t,style:{position:`absolute`,inset:0,zIndex:2,pointerEvents:`none`},"aria-hidden":`true`,children:n&&(0,b.jsxs)(_,{orthographic:!0,camera:{position:[0,0,10],near:.1,far:100},dpr:g(2),gl:{antialias:p(!0),alpha:!0,powerPreference:`high-performance`},frameloop:i&&!s?`always`:`never`,onCreated:({gl:e})=>o.surCreation(e.domElement),style:{position:`absolute`,inset:0,pointerEvents:`none`},children:[(0,b.jsx)(m,{name:`reel`}),(0,b.jsx)(T,{...n})]},o.cle)})}export{E as default};