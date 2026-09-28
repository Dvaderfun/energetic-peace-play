(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Vo="180",Gh=0,ml=1,Hh=2,Xc=1,qc=2,Cn=3,$n=0,ke=1,Ie=2,qn=0,qi=1,Or=2,gl=3,vl=4,Wh=5,oi=100,Xh=101,qh=102,Yh=103,$h=104,Zh=200,Kh=201,Jh=202,jh=203,Ga=204,Ha=205,Qh=206,tu=207,eu=208,nu=209,iu=210,su=211,ru=212,au=213,ou=214,Wa=0,Xa=1,qa=2,$i=3,Ya=4,$a=5,Za=6,Ka=7,Go=0,lu=1,cu=2,Yn=0,hu=1,uu=2,du=3,Yc=4,fu=5,pu=6,mu=7,$c=300,Zi=301,Ki=302,Ja=303,ja=304,$r=306,Ji=1e3,ci=1001,Qa=1002,Qe=1003,gu=1004,Zs=1005,vn=1006,ea=1007,hi=1008,Mn=1009,Zc=1010,Kc=1011,Ls=1012,Ho=1013,fi=1014,_n=1015,Gs=1016,Wo=1017,Xo=1018,Is=1020,Jc=35902,jc=35899,Qc=1021,th=1022,un=1023,Us=1026,Ns=1027,qo=1028,Yo=1029,eh=1030,$o=1031,Zo=1033,Pr=33776,Dr=33777,Lr=33778,Ir=33779,to=35840,eo=35841,no=35842,io=35843,so=36196,ro=37492,ao=37496,oo=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,vo=37817,_o=37818,xo=37819,yo=37820,Mo=37821,So=36492,bo=36494,Eo=36495,To=36283,wo=36284,Ao=36285,Ro=36286,vu=3200,_u=3201,Ko=0,xu=1,Xn="",Le="srgb",pi="srgb-linear",kr="linear",xe="srgb",xi=7680,_l=519,yu=512,Mu=513,Su=514,nh=515,bu=516,Eu=517,Tu=518,wu=519,Co=35044,ih=35048,xl="300 es",xn=2e3,zr=2001;class is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yl=1234567;const Ts=Math.PI/180,ji=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[s&255]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function oe(s,t,e){return Math.max(t,Math.min(e,s))}function Jo(s,t){return(s%t+t)%t}function Au(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ru(s,t,e){return s!==t?(e-s)/(t-s):0}function ws(s,t,e){return(1-e)*s+e*t}function Cu(s,t,e,n){return ws(s,t,1-Math.exp(-e*n))}function Pu(s,t=1){return t-Math.abs(Jo(s,t*2)-t)}function Du(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Lu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Iu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Uu(s,t){return s+Math.random()*(t-s)}function Nu(s){return s*(.5-Math.random())}function Fu(s){s!==void 0&&(yl=s);let t=yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ou(s){return s*Ts}function ku(s){return s*ji}function zu(s){return(s&s-1)===0&&s!==0}function Bu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Vu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gu(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ml={DEG2RAD:Ts,RAD2DEG:ji,generateUUID:yn,clamp:oe,euclideanModulo:Jo,mapLinear:Au,inverseLerp:Ru,lerp:ws,damp:Cu,pingpong:Pu,smoothstep:Du,smootherstep:Lu,randInt:Iu,randFloat:Uu,randFloatSpread:Nu,seededRandom:Fu,degToRad:Ou,radToDeg:ku,isPowerOfTwo:zu,ceilPowerOfTwo:Bu,floorPowerOfTwo:Vu,setQuaternionFromProperEuler:Gu,normalize:ve,denormalize:hn};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let g=1-o;const p=l*d+c*f+u*m+h*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,p*v);g=Math.sin(g*A)/R,o=Math.sin(o*A)/R}const y=o*v;if(l=l*g+d*y,c=c*g+f*y,u=u*g+m*y,h=h*g+_*y,g===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-o*f,t[e+2]=c*m+u*f+o*d-l*h,t[e+3]=u*m-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-r*i),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new w,Sl=new Hs;class se{constructor(t,e,n,i,r,a,o,l,c){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],v=i[1],x=i[4],y=i[7],R=i[2],A=i[5],P=i[8];return r[0]=a*_+o*v+l*R,r[3]=a*g+o*x+l*A,r[6]=a*p+o*y+l*P,r[1]=c*_+u*v+h*R,r[4]=c*g+u*x+h*A,r[7]=c*p+u*y+h*P,r[2]=d*_+f*v+m*R,r[5]=d*g+f*x+m*A,r[8]=d*p+f*y+m*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,m=e*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ia.makeScale(t,e)),this}rotate(t){return this.premultiply(ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new se;function sh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hu(){const s=Fs("canvas");return s.style.display="block",s}const bl={};function Os(s){s in bl||(bl[s]=!0,console.warn(s))}function Wu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const El=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xu(){const s={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?kr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[pi]:{primaries:t,whitePoint:n,transfer:kr,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),s}const de=Xu();function Ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let yi;class qu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{yi===void 0&&(yi=Fs("canvas")),yi.width=t.width,yi.height=t.height;const i=yi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yu=0;class jo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=yn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(sa(i[a].image)):r.push(sa(i[a]))}else r=sa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function sa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $u=0;const ra=new w;class Ue extends is{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=ci,i=ci,r=vn,a=hi,o=un,l=Mn,c=Ue.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=yn(),this.name="",this.source=new jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ji:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ji:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=$c;Ue.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,i=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(f+1)/2,R=(p+1)/2,A=(u+d)/4,P=(h+_)/4,L=(m+g)/4;return x>y&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=P/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=L/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=P/r,i=L/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zu extends is{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Ue(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new jo(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Zu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rh extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ku extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(t.matrixWorld),this.union(Ks)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Js.subVectors(this.max,os),Mi.subVectors(t.a,os),Si.subVectors(t.b,os),bi.subVectors(t.c,os),zn.subVectors(Si,Mi),Bn.subVectors(bi,Si),jn.subVectors(Mi,bi);let e=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-jn.z,jn.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,jn.z,0,-jn.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-jn.y,jn.x,0];return!aa(e,Mi,Si,bi,Js)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,Mi,Si,bi,Js))?!1:(js.crossVectors(zn,Bn),e=[js.x,js.y,js.z],aa(e,Mi,Si,bi,Js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const En=[new w,new w,new w,new w,new w,new w,new w,new w],an=new w,Ks=new sn,Mi=new w,Si=new w,bi=new w,zn=new w,Bn=new w,jn=new w,os=new w,Js=new w,js=new w,Qn=new w;function aa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Qn.fromArray(s,r);const o=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ju=new sn,ls=new w,oa=new w;class vi{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ju.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);const e=ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ls,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(oa)),this.expandByPoint(ls.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Tn=new w,la=new w,Qs=new w,Vn=new w,ca=new w,tr=new w,ha=new w;class Ws{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){la.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(la);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Qs),o=Vn.dot(this.direction),l=-Vn.dot(Qs),c=Vn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=r*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(la).addScaledVector(Qs,d),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,r){ca.subVectors(e,t),tr.subVectors(n,t),ha.crossVectors(ca,tr);let a=this.direction.dot(ha),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);const l=o*this.direction.dot(tr.crossVectors(Vn,tr));if(l<0)return null;const c=o*this.direction.dot(ca.cross(Vn));if(c<0||l+c>a)return null;const u=-o*Vn.dot(ha);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,i,r,a,o,l,c,u,h,d,f,m,_,g){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,u,h,d,f,m,_,g)}set(t,e,n,i,r,a,o,l,c,u,h,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ei.setFromMatrixColumn(t,0).length(),r=1/Ei.setFromMatrixColumn(t,1).length(),a=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,f=a*h,m=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d+_*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-m,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,f=a*h,m=o*u,_=o*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=m*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ju,t,Qu)}lookAt(t,e,n){const i=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Gn.crossVectors(n,Ze),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Gn.crossVectors(n,Ze)),Gn.normalize(),er.crossVectors(Ze,Gn),i[0]=Gn.x,i[4]=er.x,i[8]=Ze.x,i[1]=Gn.y,i[5]=er.y,i[9]=Ze.y,i[2]=Gn.z,i[6]=er.z,i[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],x=n[7],y=n[11],R=n[15],A=i[0],P=i[4],L=i[8],E=i[12],b=i[1],U=i[5],O=i[9],H=i[13],Z=i[2],G=i[6],W=i[10],Q=i[14],$=i[3],st=i[7],Et=i[11],Pt=i[15];return r[0]=a*A+o*b+l*Z+c*$,r[4]=a*P+o*U+l*G+c*st,r[8]=a*L+o*O+l*W+c*Et,r[12]=a*E+o*H+l*Q+c*Pt,r[1]=u*A+h*b+d*Z+f*$,r[5]=u*P+h*U+d*G+f*st,r[9]=u*L+h*O+d*W+f*Et,r[13]=u*E+h*H+d*Q+f*Pt,r[2]=m*A+_*b+g*Z+p*$,r[6]=m*P+_*U+g*G+p*st,r[10]=m*L+_*O+g*W+p*Et,r[14]=m*E+_*H+g*Q+p*Pt,r[3]=v*A+x*b+y*Z+R*$,r[7]=v*P+x*U+y*G+R*st,r[11]=v*L+x*O+y*W+R*Et,r[15]=v*E+x*H+y*Q+R*Pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*u-r*l*u)+g*(+e*c*h-e*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-i*o*u-e*l*h+e*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=h*g*c-_*d*c+_*l*f-o*g*f-h*l*p+o*d*p,x=m*d*c-u*g*c-m*l*f+a*g*f+u*l*p-a*d*p,y=u*_*c-m*h*c+m*o*f-a*_*f-u*o*p+a*h*p,R=m*h*l-u*_*l-m*o*d+a*_*d+u*o*g-a*h*g,A=e*v+n*x+i*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=v*P,t[1]=(_*d*r-h*g*r-_*i*f+n*g*f+h*i*p-n*d*p)*P,t[2]=(o*g*r-_*l*r+_*i*c-n*g*c-o*i*p+n*l*p)*P,t[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*f-n*l*f)*P,t[4]=x*P,t[5]=(u*g*r-m*d*r+m*i*f-e*g*f-u*i*p+e*d*p)*P,t[6]=(m*l*r-a*g*r-m*i*c+e*g*c+a*i*p-e*l*p)*P,t[7]=(a*d*r-u*l*r+u*i*c-e*d*c-a*i*f+e*l*f)*P,t[8]=y*P,t[9]=(m*h*r-u*_*r-m*n*f+e*_*f+u*n*p-e*h*p)*P,t[10]=(a*_*r-m*o*r+m*n*c-e*_*c-a*n*p+e*o*p)*P,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*f-e*o*f)*P,t[12]=R*P,t[13]=(u*_*i-m*h*i+m*n*d-e*_*d-u*n*g+e*h*g)*P,t[14]=(m*o*i-a*_*i-m*n*l+e*_*l+a*n*g-e*o*g)*P,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*d+e*o*d)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,m=r*h,_=a*u,g=a*h,p=o*h,v=l*c,x=l*u,y=l*h,R=n.x,A=n.y,P=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+y)*R,i[2]=(m-x)*R,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(d+p))*A,i[6]=(g+v)*A,i[7]=0,i[8]=(m+x)*P,i[9]=(g-v)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ei.set(i[0],i[1],i[2]).length();const a=Ei.set(i[4],i[5],i[6]).length(),o=Ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);const c=1/r,u=1/a,h=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,e.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=xn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===xn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===zr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=xn,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===xn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===zr)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ei=new w,on=new me,ju=new w(0,0,0),Qu=new w(1,1,1),Gn=new w,er=new w,Ze=new w,wl=new me,Al=new Hs;class dn{constructor(t=0,e=0,n=0,i=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Al.setFromEuler(this),this.setFromQuaternion(Al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let td=0;const Rl=new w,Ti=new Hs,wn=new me,nr=new w,cs=new w,ed=new w,nd=new Hs,Cl=new w(1,0,0),Pl=new w(0,1,0),Dl=new w(0,0,1),Ll={type:"added"},id={type:"removed"},wi={type:"childadded",child:null},ua={type:"childremoved",child:null};class be extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new w,e=new dn,n=new Hs,i=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new se}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Cl,t)}rotateY(t){return this.rotateOnAxis(Pl,t)}rotateZ(t){return this.rotateOnAxis(Dl,t)}translateOnAxis(t,e){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cl,t)}translateY(t){return this.translateOnAxis(Pl,t)}translateZ(t){return this.translateOnAxis(Dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nr.copy(t):nr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(cs,nr,this.up):wn.lookAt(nr,cs,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(wn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ll),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(id),ua.child=t,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ll),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}be.DEFAULT_UP=new w(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new w,An=new w,da=new w,Rn=new w,Ai=new w,Ri=new w,Il=new w,fa=new w,pa=new w,ma=new w,ga=new ye,va=new ye,_a=new ye;class rn{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),An.subVectors(n,e),da.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(An),l=ln.dot(da),c=An.dot(An),u=An.dot(da),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return ga.setScalar(0),va.setScalar(0),_a.setScalar(0),ga.fromBufferAttribute(t,e),va.fromBufferAttribute(t,n),_a.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ga,r.x),a.addScaledVector(va,r.y),a.addScaledVector(_a,r.z),a}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),An.subVectors(t,e),ln.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),An.subVectors(this.a,this.b),ln.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ai.subVectors(i,n),Ri.subVectors(r,n),fa.subVectors(t,n);const l=Ai.dot(fa),c=Ri.dot(fa);if(l<=0&&c<=0)return e.copy(n);pa.subVectors(t,i);const u=Ai.dot(pa),h=Ri.dot(pa);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ai,a);ma.subVectors(t,r);const f=Ai.dot(ma),m=Ri.dot(ma);if(m>=0&&f<=m)return e.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ri,o);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Il.subVectors(r,i),o=(h-u)/(h-u+(f-m)),e.copy(i).addScaledVector(Il,o);const p=1/(g+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function xa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=Jo(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=xa(a,r,t+1/3),this.g=xa(a,r,t),this.b=xa(a,r,t-1/3)}return de.colorSpaceToWorking(this,i),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return de.workingToColorSpace(Fe.copy(this),t),Math.round(oe(Fe.r*255,0,255))*65536+Math.round(oe(Fe.g*255,0,255))*256+Math.round(oe(Fe.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,i=Fe.g,r=Fe.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Le){de.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,i=Fe.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(ir);const n=ws(Hn.h,ir.h,e),i=ws(Hn.s,ir.s,e),r=ws(Hn.l,ir.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Qt;Qt.NAMES=ah;let sd=0;class In extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=qi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Ha,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Ha&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class di extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new w,sr=new et;let rd=0;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Co,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Co&&(t.usage=this.usage),t}}class oh extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lh extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ad=0;const nn=new me,ya=new be,Ci=new w,Ke=new sn,hs=new sn,De=new w;class pe extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sh(t)?lh:oh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(Ke.min,hs.min),Ke.expandByPoint(De),De.addVectors(Ke.max,hs.max),Ke.expandByPoint(De)):(Ke.expandByPoint(hs.min),Ke.expandByPoint(hs.max))}Ke.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)De.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(t,c),De.add(Ci)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new w,l[L]=new w;const c=new w,u=new w,h=new w,d=new et,f=new et,m=new et,_=new w,g=new w;function p(L,E,b){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(U),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(U),o[L].add(_),o[E].add(_),o[b].add(_),l[L].add(g),l[E].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,E=v.length;L<E;++L){const b=v[L],U=b.start,O=b.count;for(let H=U,Z=U+O;H<Z;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const x=new w,y=new w,R=new w,A=new w;function P(L){R.fromBufferAttribute(i,L),A.copy(R);const E=o[L];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),y.crossVectors(A,E);const U=y.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,U)}for(let L=0,E=v.length;L<E;++L){const b=v[L],U=b.start,O=b.count;for(let H=U,Z=U+O;H<Z;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,r=new w,a=new w,o=new w,l=new w,c=new w,u=new w,h=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new ze(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new me,ti=new Ws,rr=new vi,Nl=new w,ar=new w,or=new w,lr=new w,Ma=new w,cr=new w,Fl=new w,hr=new w;class fe extends be{constructor(t=new pe,e=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ma.fromBufferAttribute(h,t),a?cr.addScaledVector(Ma,u):cr.addScaledVector(Ma.sub(e),u))}e.add(cr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(rr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(rr,Nl)===null||ti.origin.distanceToSquared(Nl)>(t.far-t.near)**2))&&(Ul.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,R=x;y<R;y+=3){const A=o.getX(y),P=o.getX(y+1),L=o.getX(y+2);i=ur(this,p,t,n,c,u,h,A,P,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);i=ur(this,a,t,n,c,u,h,v,x,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,R=x;y<R;y+=3){const A=y,P=y+1,L=y+2;i=ur(this,p,t,n,c,u,h,A,P,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,x=g+1,y=g+2;i=ur(this,a,t,n,c,u,h,v,x,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function od(s,t,e,n,i,r,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===$n,o),l===null)return null;hr.copy(o),hr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:s}}function ur(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ar),s.getVertexPosition(l,or),s.getVertexPosition(c,lr);const u=od(s,t,e,n,ar,or,lr,Fl);if(u){const h=new w;rn.getBarycoord(Fl,ar,or,lr,h),i&&(u.uv=rn.getInterpolatedAttribute(i,o,l,c,h,new et)),r&&(u.uv1=rn.getInterpolatedAttribute(r,o,l,c,h,new et)),a&&(u.normal=rn.getInterpolatedAttribute(a,o,l,c,h,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new w,materialIndex:0};rn.getNormal(ar,or,lr,d.normal),u.face=d,u.barycoord=h}return u}class Zn extends pe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(h,2));function m(_,g,p,v,x,y,R,A,P,L,E){const b=y/P,U=R/L,O=y/2,H=R/2,Z=A/2,G=P+1,W=L+1;let Q=0,$=0;const st=new w;for(let Et=0;Et<W;Et++){const Pt=Et*U-H;for(let Ct=0;Ct<G;Ct++){const kt=Ct*b-O;st[_]=kt*v,st[g]=Pt*x,st[p]=Z,c.push(st.x,st.y,st.z),st[_]=0,st[g]=0,st[p]=A>0?1:-1,u.push(st.x,st.y,st.z),h.push(Ct/P),h.push(1-Et/L),Q+=1}}for(let Et=0;Et<L;Et++)for(let Pt=0;Pt<P;Pt++){const Ct=d+Pt+G*Et,kt=d+Pt+G*(Et+1),te=d+(Pt+1)+G*(Et+1),Kt=d+(Pt+1)+G*Et;l.push(Ct,kt,Kt),l.push(kt,te,Kt),$+=6}o.addGroup(f,$,E),f+=$,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function He(s){const t={};for(let e=0;e<s.length;e++){const n=Qi(s[e]);for(const i in n)t[i]=n[i]}return t}function ld(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ch(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const cd={clone:Qi,merge:He};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hh extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new w,Ol=new et,kl=new et;class qe extends hh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Ol,kl),e.subVectors(kl,Ol)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Di=1;class dd extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qe(Pi,Di,t,e);i.layers=this.layers,this.add(i);const r=new qe(Pi,Di,t,e);r.layers=this.layers,this.add(r);const a=new qe(Pi,Di,t,e);a.layers=this.layers,this.add(a);const o=new qe(Pi,Di,t,e);o.layers=this.layers,this.add(o);const l=new qe(Pi,Di,t,e);l.layers=this.layers,this.add(l);const c=new qe(Pi,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class uh extends Ue{constructor(t=[],e=Zi,n,i,r,a,o,l,c,u){super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fd extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new uh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Zn(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:qn});r.uniforms.tEquirect.value=e;const a=new fe(i,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=vn),new dd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class _e extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pd={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class tl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=e}clone(){return new tl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dh extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class md{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Co,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new w;class Br{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Br(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class As extends In{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Li;const us=new w,Ii=new w,Ui=new w,Ni=new et,ds=new et,fh=new me,dr=new w,fs=new w,fr=new w,zl=new et,ba=new et,Bl=new et;class Ur extends be{constructor(t=new As){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new md(e,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new Br(n,3,0,!1)),Li.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=Li,this.material=t,this.center=new et(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),fh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Ui.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;pr(dr.set(-.5,-.5,0),Ui,a,Ii,i,r),pr(fs.set(.5,-.5,0),Ui,a,Ii,i,r),pr(fr.set(.5,.5,0),Ui,a,Ii,i,r),zl.set(0,0),ba.set(1,0),Bl.set(1,1);let o=t.ray.intersectTriangle(dr,fs,fr,!1,us);if(o===null&&(pr(fs.set(-.5,.5,0),Ui,a,Ii,i,r),ba.set(0,1),o=t.ray.intersectTriangle(dr,fr,fs,!1,us),o===null))return;const l=t.ray.origin.distanceTo(us);l<t.near||l>t.far||e.push({distance:l,point:us.clone(),uv:rn.getInterpolation(us,dr,fs,fr,zl,ba,Bl,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function pr(s,t,e,n,i,r){Ni.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ds.x=r*Ni.x-i*Ni.y,ds.y=i*Ni.x+r*Ni.y):ds.copy(Ni),s.copy(t),s.x+=ds.x,s.y+=ds.y,s.applyMatrix4(fh)}class gd extends Ue{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Qe,u=Qe,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vl extends ze{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fi=new me,Gl=new me,mr=[],Hl=new sn,vd=new me,ps=new fe,ms=new vi;class Gi extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fi),Hl.copy(t.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Hl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fi),ms.copy(t.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(n),t.ray.intersectsSphere(ms)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fi),Gl.multiplyMatrices(n,Fi),ps.matrixWorld=Gl,ps.raycast(t,mr);for(let a=0,o=mr.length;a<o;a++){const l=mr[a];l.instanceId=r,l.object=this,e.push(l)}mr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gd(new Float32Array(i*this.count),i,this.count,qo,_n));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ea=new w,_d=new w,xd=new se;class si{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ea.subVectors(n,e).cross(_d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xd.getNormalMatrix(t),i=this.coplanarPoint(Ea).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new vi,yd=new et(.5,.5),gr=new w;class el{constructor(t=new si,e=new si,n=new si,i=new si,r=new si,a=new si){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],v=r[12],x=r[13],y=r[14],R=r[15];if(i[0].setComponents(c-a,f-u,p-m,R-v).normalize(),i[1].setComponents(c+a,f+u,p+m,R+v).normalize(),i[2].setComponents(c+o,f+h,p+_,R+x).normalize(),i[3].setComponents(c-o,f-h,p-_,R-x).normalize(),n)i[4].setComponents(l,d,g,y).normalize(),i[5].setComponents(c-l,f-d,p-g,R-y).normalize();else if(i[4].setComponents(c-l,f-d,p-g,R-y).normalize(),e===xn)i[5].setComponents(c+l,f+d,p+g,R+y).normalize();else if(e===zr)i[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){ei.center.set(0,0,0);const e=yd.distanceTo(t.center);return ei.radius=.7071067811865476+e,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(gr.x=i.normal.x>0?t.max.x:t.min.x,gr.y=i.normal.y>0?t.max.y:t.min.y,gr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ui extends In{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Vr=new w,Gr=new w,Wl=new me,gs=new Ws,vr=new vi,Ta=new w,Xl=new w;class Po extends be{constructor(t=new pe,e=new ui){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Vr.fromBufferAttribute(e,i-1),Gr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Vr.distanceTo(Gr);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(i),vr.radius+=r,t.ray.intersectsSphere(vr)===!1)return;Wl.copy(i).invert(),gs.copy(t.ray).applyMatrix4(Wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=u.getX(_),v=u.getX(_+1),x=_r(this,t,gs,l,p,v,_);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),p=_r(this,t,gs,l,_,g,m-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=_r(this,t,gs,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=_r(this,t,gs,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _r(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(Vr.fromBufferAttribute(o,i),Gr.fromBufferAttribute(o,r),e.distanceSqToSegment(Vr,Gr,Ta,Xl)>n)return;Ta.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ta);if(!(c<t.near||c>t.far))return{distance:c,point:Xl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const ql=new w,Yl=new w;class Hr extends Po{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)ql.fromBufferAttribute(e,i),Yl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ql.distanceTo(Yl);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ph extends In{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $l=new me,Do=new Ws,xr=new vi,yr=new w;class mh extends be{constructor(t=new pe,e=new ph){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(i),xr.radius+=r,t.ray.intersectsSphere(xr)===!1)return;$l.copy(i).invert(),Do.copy(t.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);yr.fromBufferAttribute(h,g),Zl(yr,g,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,_=f;m<_;m++)yr.fromBufferAttribute(h,m),Zl(yr,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zl(s,t,e,n,i,r,a){const o=Do.distanceSqToPoint(s);if(o<e){const l=new w;Do.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Zr extends Ue{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gh extends Ue{constructor(t,e,n=fi,i,r,a,o=Qe,l=Qe,c,u=Us,h=1){if(u!==Us&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vh extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Te extends pe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;v(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new re(h,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function v(){const y=new w,R=new w;let A=0;const P=(e-t)/n;for(let L=0;L<=r;L++){const E=[],b=L/r,U=b*(e-t)+t;for(let O=0;O<=i;O++){const H=O/i,Z=H*l+o,G=Math.sin(Z),W=Math.cos(Z);R.x=U*G,R.y=-b*n+g,R.z=U*W,h.push(R.x,R.y,R.z),y.set(G,P,W).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-b),E.push(m++)}_.push(E)}for(let L=0;L<i;L++)for(let E=0;E<r;E++){const b=_[E][L],U=_[E+1][L],O=_[E+1][L+1],H=_[E][L+1];(t>0||E!==0)&&(u.push(b,U,H),A+=3),(e>0||E!==r-1)&&(u.push(U,O,H),A+=3)}c.addGroup(p,A,0),p+=A}function x(y){const R=m,A=new et,P=new w;let L=0;const E=y===!0?t:e,b=y===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;const U=m;for(let O=0;O<=i;O++){const Z=O/i*l+o,G=Math.cos(Z),W=Math.sin(Z);P.x=E*W,P.y=g*b,P.z=E*G,h.push(P.x,P.y,P.z),d.push(0,b,0),A.x=G*.5+.5,A.y=W*.5*b+.5,f.push(A.x,A.y),m++}for(let O=0;O<i;O++){const H=R+O,Z=U+O;y===!0?u.push(Z,Z+1,H):u.push(Z+1,Z,H),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kr extends pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new w,y=new w,R=new w;for(let A=0;A<e.length;A+=3)f(e[A+0],x),f(e[A+1],y),f(e[A+2],R),l(x,y,R,v)}function l(v,x,y,R){const A=R+1,P=[];for(let L=0;L<=A;L++){P[L]=[];const E=v.clone().lerp(y,L/A),b=x.clone().lerp(y,L/A),U=A-L;for(let O=0;O<=U;O++)O===0&&L===A?P[L][O]=E:P[L][O]=E.clone().lerp(b,O/U)}for(let L=0;L<A;L++)for(let E=0;E<2*(A-L)-1;E++){const b=Math.floor(E/2);E%2===0?(d(P[L][b+1]),d(P[L+1][b]),d(P[L][b])):(d(P[L][b+1]),d(P[L+1][b+1]),d(P[L+1][b]))}}function c(v){const x=new w;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function u(){const v=new w;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=g(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;a.push(y,1-R)}m(),h()}function h(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],R=a[v+4],A=Math.max(x,y,R),P=Math.min(x,y,R);A>.9&&P<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function m(){const v=new w,x=new w,y=new w,R=new w,A=new et,P=new et,L=new et;for(let E=0,b=0;E<r.length;E+=9,b+=6){v.set(r[E+0],r[E+1],r[E+2]),x.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),A.set(a[b+0],a[b+1]),P.set(a[b+2],a[b+3]),L.set(a[b+4],a[b+5]),R.copy(v).add(x).add(y).divideScalar(3);const U=g(R);_(A,b+0,v,U),_(P,b+2,x,U),_(L,b+4,y,U)}}function _(v,x,y,R){R<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=R/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.vertices,t.indices,t.radius,t.details)}}class bn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new et:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new w,i=[],r=[],a=[],o=new w,l=new me;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(oe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(oe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class nl extends bn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new et){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Md extends nl{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function il(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Mr=new w,wa=new il,Aa=new il,Ra=new il;class Lo extends bn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new w){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(Mr.subVectors(i[0],i[1]).add(i[0]),c=Mr);const h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Mr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Mr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),wa.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,_,g),Aa.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,_,g),Ra.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(wa.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Aa.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ra.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(wa.calc(l),Aa.calc(l),Ra.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new w().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Kl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Sd(s,t){const e=1-s;return e*e*t}function bd(s,t){return 2*(1-s)*s*t}function Ed(s,t){return s*s*t}function Rs(s,t,e,n){return Sd(s,t)+bd(s,e)+Ed(s,n)}function Td(s,t){const e=1-s;return e*e*e*t}function wd(s,t){const e=1-s;return 3*e*e*s*t}function Ad(s,t){return 3*(1-s)*s*s*t}function Rd(s,t){return s*s*s*t}function Cs(s,t,e,n,i){return Td(s,t)+wd(s,e)+Ad(s,n)+Rd(s,i)}class _h extends bn{constructor(t=new et,e=new et,n=new et,i=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new et){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,i.x,r.x,a.x,o.x),Cs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cd extends bn{constructor(t=new w,e=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new w){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,i.x,r.x,a.x,o.x),Cs(t,i.y,r.y,a.y,o.y),Cs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xh extends bn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pd extends bn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yh extends bn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Rs(t,i.x,r.x,a.x),Rs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mh extends bn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Rs(t,i.x,r.x,a.x),Rs(t,i.y,r.y,a.y),Rs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sh extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Kl(o,l.x,c.x,u.x,h.x),Kl(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new et().fromArray(i))}return this}}var Wr=Object.freeze({__proto__:null,ArcCurve:Md,CatmullRomCurve3:Lo,CubicBezierCurve:_h,CubicBezierCurve3:Cd,EllipseCurve:nl,LineCurve:xh,LineCurve3:Pd,QuadraticBezierCurve:yh,QuadraticBezierCurve3:Mh,SplineCurve:Sh});class Dd extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Wr[i.type]().fromJSON(i))}return this}}class Jl extends Dd{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xh(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new yh(this.currentPoint.clone(),new et(t,e),new et(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new _h(this.currentPoint.clone(),new et(t,e),new et(n,i),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Sh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new nl(t,e,n,i,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hi extends Jl{constructor(t){super(t),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Jl().fromJSON(i))}return this}}function Ld(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=bh(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Od(s,t,r,e)),s.length>80*e){o=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=e;d<i;d+=e){const f=s[d],m=s[d+1];f<o&&(o=f),m<l&&(l=m),f>u&&(u=f),m>h&&(h=m)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return ks(r,a,e,o,l,c,0),a}function bh(s,t,e,n,i){let r;if(i===$d(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=jl(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=jl(a/n|0,s[a],s[a+1],r);return r&&ts(r,r.next)&&(Bs(r),r=r.next),r}function gi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ts(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ks(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Gd(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Ud(s,n,i,r):Id(s)){t.push(l.i,s.i,c.i),Bs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Nd(gi(s),t),ks(s,t,e,n,i,r,2)):a===2&&Fd(s,t,e,n,i,r):ks(gi(s),t,e,n,i,r,1);break}}}function Id(s){const t=s.prev,e=s,n=s.next;if(Ee(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(i,r,a),h=Math.min(o,l,c),d=Math.max(i,r,a),f=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Ss(i,o,r,l,a,c,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ud(s,t,e,n){const i=s.prev,r=s,a=s.next;if(Ee(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,u=i.y,h=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(u,h,d),_=Math.max(o,l,c),g=Math.max(u,h,d),p=Io(f,m,t,e,n),v=Io(_,g,t,e,n);let x=s.prevZ,y=s.nextZ;for(;x&&x.z>=p&&y&&y.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Ss(o,u,l,h,c,d,x.x,x.y)&&Ee(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Ss(o,u,l,h,c,d,y.x,y.y)&&Ee(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Ss(o,u,l,h,c,d,x.x,x.y)&&Ee(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Ss(o,u,l,h,c,d,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Nd(s,t){let e=s;do{const n=e.prev,i=e.next.next;!ts(n,i)&&Th(n,e,e.next,i)&&zs(n,i)&&zs(i,n)&&(t.push(n.i,e.i,i.i),Bs(e),Bs(e.next),e=s=i),e=e.next}while(e!==s);return gi(e)}function Fd(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xd(a,o)){let l=wh(a,o);a=gi(a,a.next),l=gi(l,l.next),ks(a,t,e,n,i,r,0),ks(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Od(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=bh(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Wd(c))}i.sort(kd);for(let r=0;r<i.length;r++)e=zd(i[r],e);return e}function kd(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function zd(s,t){const e=Bd(s,t);if(!e)return t;const n=wh(e,s);return gi(n,n.next),gi(e,e.next)}function Bd(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(ts(s,e))return e;do{if(ts(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const h=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,a=e.x<e.next.x?e:e.next,h===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Eh(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const h=Math.abs(i-e.y)/(n-e.x);zs(e,s)&&(h<u||h===u&&(e.x>a.x||e.x===a.x&&Vd(a,e)))&&(a=e,u=h)}e=e.next}while(e!==o);return a}function Vd(s,t){return Ee(s.prev,s,t.prev)<0&&Ee(t.next,s,s.next)<0}function Gd(s,t,e,n){let i=s;do i.z===0&&(i.z=Io(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Hd(i)}function Hd(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Io(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Wd(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Eh(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Ss(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Eh(s,t,e,n,i,r,a,o)}function Xd(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!qd(s,t)&&(zs(s,t)&&zs(t,s)&&Yd(s,t)&&(Ee(s.prev,s,t.prev)||Ee(s,t.prev,t))||ts(s,t)&&Ee(s.prev,s,s.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ts(s,t){return s.x===t.x&&s.y===t.y}function Th(s,t,e,n){const i=br(Ee(s,t,e)),r=br(Ee(s,t,n)),a=br(Ee(e,n,s)),o=br(Ee(e,n,t));return!!(i!==r&&a!==o||i===0&&Sr(s,e,t)||r===0&&Sr(s,n,t)||a===0&&Sr(e,s,n)||o===0&&Sr(e,t,n))}function Sr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function br(s){return s>0?1:s<0?-1:0}function qd(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Th(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function zs(s,t){return Ee(s.prev,s,s.next)<0?Ee(s,t,s.next)>=0&&Ee(s,s.prev,t)>=0:Ee(s,t,s.prev)<0||Ee(s,s.next,t)<0}function Yd(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function wh(s,t){const e=Uo(s.i,s.x,s.y),n=Uo(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function jl(s,t,e,n){const i=Uo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Bs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Uo(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $d(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Zd{static triangulate(t,e,n=2){return Ld(t,e,n)}}class Dn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Dn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Ql(t),tc(n,t);let a=t.length;e.forEach(Ql);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,tc(n,e[l]);const o=Zd.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ql(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function tc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ps extends pe{constructor(t=new Hi([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new re(i,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Kd;let x,y=!1,R,A,P,L;p&&(x=p.getSpacedPoints(u),y=!0,d=!1,R=p.computeFrenetFrames(u,!1),A=new w,P=new w,L=new w),d||(g=0,f=0,m=0,_=0);const E=o.extractPoints(c);let b=E.shape;const U=E.holes;if(!Dn.isClockWise(b)){b=b.reverse();for(let ht=0,rt=U.length;ht<rt;ht++){const at=U[ht];Dn.isClockWise(at)&&(U[ht]=at.reverse())}}function H(ht){const at=10000000000000001e-36;let it=ht[0];for(let bt=1;bt<=ht.length;bt++){const nt=bt%ht.length,ut=ht[nt],Jt=ut.x-it.x,Zt=ut.y-it.y,C=Jt*Jt+Zt*Zt,S=Math.max(Math.abs(ut.x),Math.abs(ut.y),Math.abs(it.x),Math.abs(it.y)),V=at*S*S;if(C<=V){ht.splice(nt,1),bt--;continue}it=ut}}H(b),U.forEach(H);const Z=U.length,G=b;for(let ht=0;ht<Z;ht++){const rt=U[ht];b=b.concat(rt)}function W(ht,rt,at){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(rt,at)}const Q=b.length;function $(ht,rt,at){let it,bt,nt;const ut=ht.x-rt.x,Jt=ht.y-rt.y,Zt=at.x-ht.x,C=at.y-ht.y,S=ut*ut+Jt*Jt,V=ut*C-Jt*Zt;if(Math.abs(V)>Number.EPSILON){const K=Math.sqrt(S),ct=Math.sqrt(Zt*Zt+C*C),J=rt.x-Jt/K,Lt=rt.y+ut/K,Mt=at.x-C/ct,It=at.y+Zt/ct,Ot=((Mt-J)*C-(It-Lt)*Zt)/(ut*C-Jt*Zt);it=J+ut*Ot-ht.x,bt=Lt+Jt*Ot-ht.y;const pt=it*it+bt*bt;if(pt<=2)return new et(it,bt);nt=Math.sqrt(pt/2)}else{let K=!1;ut>Number.EPSILON?Zt>Number.EPSILON&&(K=!0):ut<-Number.EPSILON?Zt<-Number.EPSILON&&(K=!0):Math.sign(Jt)===Math.sign(C)&&(K=!0),K?(it=-Jt,bt=ut,nt=Math.sqrt(S)):(it=ut,bt=Jt,nt=Math.sqrt(S/2))}return new et(it/nt,bt/nt)}const st=[];for(let ht=0,rt=G.length,at=rt-1,it=ht+1;ht<rt;ht++,at++,it++)at===rt&&(at=0),it===rt&&(it=0),st[ht]=$(G[ht],G[at],G[it]);const Et=[];let Pt,Ct=st.concat();for(let ht=0,rt=Z;ht<rt;ht++){const at=U[ht];Pt=[];for(let it=0,bt=at.length,nt=bt-1,ut=it+1;it<bt;it++,nt++,ut++)nt===bt&&(nt=0),ut===bt&&(ut=0),Pt[it]=$(at[it],at[nt],at[ut]);Et.push(Pt),Ct=Ct.concat(Pt)}let kt;if(g===0)kt=Dn.triangulateShape(G,U);else{const ht=[],rt=[];for(let at=0;at<g;at++){const it=at/g,bt=f*Math.cos(it*Math.PI/2),nt=m*Math.sin(it*Math.PI/2)+_;for(let ut=0,Jt=G.length;ut<Jt;ut++){const Zt=W(G[ut],st[ut],nt);Bt(Zt.x,Zt.y,-bt),it===0&&ht.push(Zt)}for(let ut=0,Jt=Z;ut<Jt;ut++){const Zt=U[ut];Pt=Et[ut];const C=[];for(let S=0,V=Zt.length;S<V;S++){const K=W(Zt[S],Pt[S],nt);Bt(K.x,K.y,-bt),it===0&&C.push(K)}it===0&&rt.push(C)}}kt=Dn.triangulateShape(ht,rt)}const te=kt.length,Kt=m+_;for(let ht=0;ht<Q;ht++){const rt=d?W(b[ht],Ct[ht],Kt):b[ht];y?(P.copy(R.normals[0]).multiplyScalar(rt.x),A.copy(R.binormals[0]).multiplyScalar(rt.y),L.copy(x[0]).add(P).add(A),Bt(L.x,L.y,L.z)):Bt(rt.x,rt.y,0)}for(let ht=1;ht<=u;ht++)for(let rt=0;rt<Q;rt++){const at=d?W(b[rt],Ct[rt],Kt):b[rt];y?(P.copy(R.normals[ht]).multiplyScalar(at.x),A.copy(R.binormals[ht]).multiplyScalar(at.y),L.copy(x[ht]).add(P).add(A),Bt(L.x,L.y,L.z)):Bt(at.x,at.y,h/u*ht)}for(let ht=g-1;ht>=0;ht--){const rt=ht/g,at=f*Math.cos(rt*Math.PI/2),it=m*Math.sin(rt*Math.PI/2)+_;for(let bt=0,nt=G.length;bt<nt;bt++){const ut=W(G[bt],st[bt],it);Bt(ut.x,ut.y,h+at)}for(let bt=0,nt=U.length;bt<nt;bt++){const ut=U[bt];Pt=Et[bt];for(let Jt=0,Zt=ut.length;Jt<Zt;Jt++){const C=W(ut[Jt],Pt[Jt],it);y?Bt(C.x,C.y+x[u-1].y,x[u-1].x+at):Bt(C.x,C.y,h+at)}}}j(),lt();function j(){const ht=i.length/3;if(d){let rt=0,at=Q*rt;for(let it=0;it<te;it++){const bt=kt[it];Nt(bt[2]+at,bt[1]+at,bt[0]+at)}rt=u+g*2,at=Q*rt;for(let it=0;it<te;it++){const bt=kt[it];Nt(bt[0]+at,bt[1]+at,bt[2]+at)}}else{for(let rt=0;rt<te;rt++){const at=kt[rt];Nt(at[2],at[1],at[0])}for(let rt=0;rt<te;rt++){const at=kt[rt];Nt(at[0]+Q*u,at[1]+Q*u,at[2]+Q*u)}}n.addGroup(ht,i.length/3-ht,0)}function lt(){const ht=i.length/3;let rt=0;Dt(G,rt),rt+=G.length;for(let at=0,it=U.length;at<it;at++){const bt=U[at];Dt(bt,rt),rt+=bt.length}n.addGroup(ht,i.length/3-ht,1)}function Dt(ht,rt){let at=ht.length;for(;--at>=0;){const it=at;let bt=at-1;bt<0&&(bt=ht.length-1);for(let nt=0,ut=u+g*2;nt<ut;nt++){const Jt=Q*nt,Zt=Q*(nt+1),C=rt+it+Jt,S=rt+bt+Jt,V=rt+bt+Zt,K=rt+it+Zt;le(C,S,V,K)}}}function Bt(ht,rt,at){l.push(ht),l.push(rt),l.push(at)}function Nt(ht,rt,at){ce(ht),ce(rt),ce(at);const it=i.length/3,bt=v.generateTopUV(n,i,it-3,it-2,it-1);I(bt[0]),I(bt[1]),I(bt[2])}function le(ht,rt,at,it){ce(ht),ce(rt),ce(it),ce(rt),ce(at),ce(it);const bt=i.length/3,nt=v.generateSideWallUV(n,i,bt-6,bt-3,bt-2,bt-1);I(nt[0]),I(nt[1]),I(nt[3]),I(nt[1]),I(nt[2]),I(nt[3])}function ce(ht){i.push(l[ht*3+0]),i.push(l[ht*3+1]),i.push(l[ht*3+2])}function I(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Jd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Wr[i.type]().fromJSON(i)),new Ps(n,t.options)}}const Kd={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new et(r,a),new et(o,l),new et(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new et(a,1-l),new et(c,1-h),new et(d,1-m),new et(_,1-p)]:[new et(o,1-l),new et(u,1-h),new et(f,1-m),new et(g,1-p)]}};function Jd(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class sl extends Kr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sl(t.radius,t.detail)}}class rl extends pe{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=oe(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,h=new w,d=new et,f=new w,m=new w,_=new w;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){const x=n+v*u*i,y=Math.sin(x),R=Math.cos(x);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*y,h.y=t[A].y,h.z=t[A].x*R,a.push(h.x,h.y,h.z),d.x=v/e,d.y=A/(t.length-1),o.push(d.x,d.y);const P=l[3*A+0]*y,L=l[3*A+1],E=l[3*A+0]*R;c.push(P,L,E)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){const y=x+v*t.length,R=y,A=y+t.length,P=y+t.length+1,L=y+1;r.push(R,A,L),r.push(P,L,A)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.points,t.segments,t.phiStart,t.phiLength)}}class al extends Kr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new al(t.radius,t.detail)}}class cn extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const v=p*d-a;for(let x=0;x<c;x++){const y=x*h-r;m.push(y,-v,0),_.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const x=v+c*p,y=v+c*(p+1),R=v+1+c*(p+1),A=v+1+c*p;f.push(x,y,A),f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xr extends pe{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=t;const d=(e-t)/i,f=new w,m=new et;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=r+g/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const v=p+g,x=v,y=v+n+1,R=v+n+2,A=v+1;o.push(x,y,A),o.push(y,R,A)}}this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ol extends pe{constructor(t=new Hi([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new re(i,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(a,2));function c(u){const h=i.length/3,d=u.extractPoints(e);let f=d.shape;const m=d.holes;Dn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const v=m[g];Dn.isClockWise(v)===!0&&(m[g]=v.reverse())}const _=Dn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){const v=f[g];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,p=_.length;g<p;g++){const v=_[g],x=v[0]+h,y=v[1]+h,R=v[2]+h;n.push(x,y,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return jd(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new ol(n,t.curveSegments)}}function jd(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class gn extends pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new w,d=new w,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const A=R/e;h.x=-t*Math.cos(i+A*r)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(i+A*r)*Math.sin(a+x*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(A+y,1-x),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const x=u[p][v+1],y=u[p][v],R=u[p+1][v],A=u[p+1][v+1];(p!==0||a>0)&&f.push(x,y,A),(p!==n-1||l<Math.PI)&&f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ll extends pe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new w,h=new w,d=new w;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*r,g=f/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;a.push(_,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class qr extends pe{constructor(t=new Mh(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,l=new w,c=new et;let u=new w;const h=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new re(h,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function _(){for(let x=0;x<e;x++)g(x);g(r===!1?e:0),v(),p()}function g(x){u=t.getPointAt(x/e,u);const y=a.normals[x],R=a.binormals[x];for(let A=0;A<=i;A++){const P=A/i*Math.PI*2,L=Math.sin(P),E=-Math.cos(P);l.x=E*y.x+L*R.x,l.y=E*y.y+L*R.y,l.z=E*y.z+L*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let y=1;y<=i;y++){const R=(i+1)*(x-1)+(y-1),A=(i+1)*x+(y-1),P=(i+1)*x+y,L=(i+1)*(x-1)+y;m.push(R,A,L),m.push(A,P,L)}}function v(){for(let x=0;x<=e;x++)for(let y=0;y<=i;y++)c.x=x/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new qr(new Wr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Se extends In{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ah extends Se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Qd extends In{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tf extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ef extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ca={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class nf{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Rh=new nf;class cl{constructor(t){this.manager=t!==void 0?t:Rh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}cl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi=new WeakMap;class sf extends cl{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ca.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let h=Oi.get(a);h===void 0&&(h=[],Oi.set(a,h)),h.push({onLoad:e,onError:i})}return a}const o=Fs("img");function l(){u(),e&&e(this);const h=Oi.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Oi.delete(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),Ca.remove(`image:${t}`);const d=Oi.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(h)}Oi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ca.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Ch extends cl{constructor(t){super(t)}load(t,e,n,i){const r=new Ue,a=new sf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Jr extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rf extends Jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Pa=new me,ec=new w,nc=new w;class hl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(ec),nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nc),e.updateMatrixWorld(),Pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class af extends hl{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=ji*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class of extends Jr{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new af}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ic=new me,vs=new w,Da=new w;class lf extends hl{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(vs),Da.copy(n.position),Da.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Da),n.updateMatrixWorld(),i.makeTranslation(-vs.x,-vs.y,-vs.z),ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic,n.coordinateSystem,n.reversedDepth)}}class Vs extends Jr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ph extends hh{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class cf extends hl{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hf extends Jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new cf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uf extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const sc=new me;class df{constructor(t,e,n=0,i=1/0){this.ray=new Ws(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sc),this}intersectObject(t,e=!0,n=[]){return No(t,this,n,e),n.sort(rc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)No(t[i],this,n,e);return n.sort(rc),n}}function rc(s,t){return s.distance-t.distance}function No(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)No(r[a],t,e,!0)}}function ac(s,t,e,n){const i=ff(n);switch(e){case Qc:return s*t;case qo:return s*t/i.components*i.byteLength;case Yo:return s*t/i.components*i.byteLength;case eh:return s*t*2/i.components*i.byteLength;case $o:return s*t*2/i.components*i.byteLength;case th:return s*t*3/i.components*i.byteLength;case un:return s*t*4/i.components*i.byteLength;case Zo:return s*t*4/i.components*i.byteLength;case Pr:case Dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Lr:case Ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case eo:case io:return Math.max(s,16)*Math.max(t,8)/4;case to:case no:return Math.max(s,8)*Math.max(t,8)/2;case so:case ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case co:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ho:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case uo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case po:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case mo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case go:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case vo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case _o:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case yo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case So:case bo:case Eo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case To:case wo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ao:case Ro:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ff(s){switch(s){case Mn:case Zc:return{byteLength:1,components:1};case Ls:case Kc:case Gs:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case fi:case Ho:case _n:return{byteLength:4,components:1};case Jc:case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);function Dh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function pf(s){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ep=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Im=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:vf,alphamap_pars_fragment:_f,alphatest_fragment:xf,alphatest_pars_fragment:yf,aomap_fragment:Mf,aomap_pars_fragment:Sf,batching_pars_vertex:bf,batching_vertex:Ef,begin_vertex:Tf,beginnormal_vertex:wf,bsdfs:Af,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:If,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Ff,color_vertex:Of,common:kf,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Bf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Gf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Zf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:op,envmap_vertex:Jf,fog_vertex:jf,fog_pars_vertex:Qf,fog_fragment:tp,fog_pars_fragment:ep,gradientmap_pars_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:ap,lights_toon_fragment:lp,lights_toon_pars_fragment:cp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:yp,map_fragment:Mp,map_pars_fragment:Sp,map_particle_fragment:bp,map_particle_pars_fragment:Ep,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:wp,morphinstance_vertex:Ap,morphcolor_vertex:Rp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Dp,normal_fragment_begin:Lp,normal_fragment_maps:Ip,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:Fp,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:kp,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:Vp,opaque_fragment:Gp,packing:Hp,premultiplied_alpha_fragment:Wp,project_vertex:Xp,dithering_fragment:qp,dithering_pars_fragment:Yp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Jp,shadowmap_vertex:jp,shadowmask_pars_fragment:Qp,skinbase_vertex:tm,skinning_pars_vertex:em,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:am,tonemapping_pars_fragment:om,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:hm,uv_pars_vertex:um,uv_vertex:dm,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:vm,cube_vert:_m,cube_frag:xm,depth_vert:ym,depth_frag:Mm,distanceRGBA_vert:Sm,distanceRGBA_frag:bm,equirect_vert:Em,equirect_frag:Tm,linedashed_vert:wm,linedashed_frag:Am,meshbasic_vert:Rm,meshbasic_frag:Cm,meshlambert_vert:Pm,meshlambert_frag:Dm,meshmatcap_vert:Lm,meshmatcap_frag:Im,meshnormal_vert:Um,meshnormal_frag:Nm,meshphong_vert:Fm,meshphong_frag:Om,meshphysical_vert:km,meshphysical_frag:zm,meshtoon_vert:Bm,meshtoon_frag:Vm,points_vert:Gm,points_frag:Hm,shadow_vert:Wm,shadow_frag:Xm,sprite_vert:qm,sprite_frag:Ym},At={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},fn={basic:{uniforms:He([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:He([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:He([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:He([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:He([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:He([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:He([At.points,At.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:He([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:He([At.common,At.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:He([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:He([At.sprite,At.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:He([At.common,At.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:He([At.lights,At.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};fn.physical={uniforms:He([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Er={r:0,b:0,g:0},ni=new dn,$m=new me;function Zm(s,t,e,n,i,r,a){const o=new Qt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const R=m(x);R===null?p(o,l):R&&R.isColor&&(p(R,1),y=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,y){const R=m(y);R&&(R.isCubeTexture||R.mapping===$r)?(u===void 0&&(u=new fe(new Zn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Qi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ni.copy(y.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(ni)),u.material.toneMapped=de.getTransfer(R.colorSpace)!==xe,(h!==R||d!==R.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,f=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new fe(new cn(2,2),new Sn({name:"BackgroundMaterial",uniforms:Qi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=de.getTransfer(R.colorSpace)!==xe,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=R,d=R.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Er,ch(s)),n.buffers.color.setClear(Er.r,Er.g,Er.b,y,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:g,dispose:v}}function Km(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(b,U,O,H,Z){let G=!1;const W=h(H,O,U);r!==W&&(r=W,c(r.object)),G=f(b,H,O,Z),G&&m(b,H,O,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(b,U,O,H),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function u(b){return s.deleteVertexArray(b)}function h(b,U,O){const H=O.wireframe===!0;let Z=n[b.id];Z===void 0&&(Z={},n[b.id]=Z);let G=Z[U.id];G===void 0&&(G={},Z[U.id]=G);let W=G[H];return W===void 0&&(W=d(l()),G[H]=W),W}function d(b){const U=[],O=[],H=[];for(let Z=0;Z<e;Z++)U[Z]=0,O[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:H,object:b,attributes:{},index:null}}function f(b,U,O,H){const Z=r.attributes,G=U.attributes;let W=0;const Q=O.getAttributes();for(const $ in Q)if(Q[$].location>=0){const Et=Z[$];let Pt=G[$];if(Pt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(Pt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(Pt=b.instanceColor)),Et===void 0||Et.attribute!==Pt||Pt&&Et.data!==Pt.data)return!0;W++}return r.attributesNum!==W||r.index!==H}function m(b,U,O,H){const Z={},G=U.attributes;let W=0;const Q=O.getAttributes();for(const $ in Q)if(Q[$].location>=0){let Et=G[$];Et===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(Et=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(Et=b.instanceColor));const Pt={};Pt.attribute=Et,Et&&Et.data&&(Pt.data=Et.data),Z[$]=Pt,W++}r.attributes=Z,r.attributesNum=W,r.index=H}function _(){const b=r.newAttributes;for(let U=0,O=b.length;U<O;U++)b[U]=0}function g(b){p(b,0)}function p(b,U){const O=r.newAttributes,H=r.enabledAttributes,Z=r.attributeDivisors;O[b]=1,H[b]===0&&(s.enableVertexAttribArray(b),H[b]=1),Z[b]!==U&&(s.vertexAttribDivisor(b,U),Z[b]=U)}function v(){const b=r.newAttributes,U=r.enabledAttributes;for(let O=0,H=U.length;O<H;O++)U[O]!==b[O]&&(s.disableVertexAttribArray(O),U[O]=0)}function x(b,U,O,H,Z,G,W){W===!0?s.vertexAttribIPointer(b,U,O,Z,G):s.vertexAttribPointer(b,U,O,H,Z,G)}function y(b,U,O,H){_();const Z=H.attributes,G=O.getAttributes(),W=U.defaultAttributeValues;for(const Q in G){const $=G[Q];if($.location>=0){let st=Z[Q];if(st===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(st=b.instanceColor)),st!==void 0){const Et=st.normalized,Pt=st.itemSize,Ct=t.get(st);if(Ct===void 0)continue;const kt=Ct.buffer,te=Ct.type,Kt=Ct.bytesPerElement,j=te===s.INT||te===s.UNSIGNED_INT||st.gpuType===Ho;if(st.isInterleavedBufferAttribute){const lt=st.data,Dt=lt.stride,Bt=st.offset;if(lt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<$.locationSize;Nt++)p($.location+Nt,lt.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Nt=0;Nt<$.locationSize;Nt++)g($.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let Nt=0;Nt<$.locationSize;Nt++)x($.location+Nt,Pt/$.locationSize,te,Et,Dt*Kt,(Bt+Pt/$.locationSize*Nt)*Kt,j)}else{if(st.isInstancedBufferAttribute){for(let lt=0;lt<$.locationSize;lt++)p($.location+lt,st.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<$.locationSize;lt++)g($.location+lt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let lt=0;lt<$.locationSize;lt++)x($.location+lt,Pt/$.locationSize,te,Et,Pt*Kt,Pt/$.locationSize*lt*Kt,j)}}else if(W!==void 0){const Et=W[Q];if(Et!==void 0)switch(Et.length){case 2:s.vertexAttrib2fv($.location,Et);break;case 3:s.vertexAttrib3fv($.location,Et);break;case 4:s.vertexAttrib4fv($.location,Et);break;default:s.vertexAttrib1fv($.location,Et)}}}}v()}function R(){L();for(const b in n){const U=n[b];for(const O in U){const H=U[O];for(const Z in H)u(H[Z].object),delete H[Z];delete U[O]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const U=n[b.id];for(const O in U){const H=U[O];for(const Z in H)u(H[Z].object),delete H[Z];delete U[O]}delete n[b.id]}function P(b){for(const U in n){const O=n[U];if(O[b.id]===void 0)continue;const H=O[b.id];for(const Z in H)u(H[Z].object),delete H[Z];delete O[b.id]}}function L(){E(),a=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Jm(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==un&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const L=P===Gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Mn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==_n&&!L)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function Qm(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new si,o=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):c();else{const v=r?0:n,x=v*4;let y=p.clippingState||null;l.value=y,y=u(m,d,x,f);for(let R=0;R!==x;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function t0(s){let t=new WeakMap;function e(a,o){return o===Ja?a.mapping=Zi:o===ja&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ja||o===ja)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fd(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Wi=4,oc=[.125,.215,.35,.446,.526,.582],li=20,La=new Ph,lc=new Qt;let Ia=null,Ua=0,Na=0,Fa=!1;const ri=(1+Math.sqrt(5))/2,ki=1/ri,cc=[new w(-ri,ki,0),new w(ri,ki,0),new w(-ki,0,ri),new w(ki,0,ri),new w(0,ri,-ki),new w(0,ri,ki),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],e0=new w;class Fo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=e0}=r;Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,Ua,Na),this._renderer.xr.enabled=Fa,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Gs,format:un,colorSpace:pi,depthBuffer:!1},i=hc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n0(r)),this._blurMaterial=i0(r,t,e)}return i}_compileMaterial(t){const e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,La)}_sceneToCubeUV(t,e,n,i,r){const l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(lc),h.toneMapping=Yn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const _=new di({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new fe(new Zn,_);let p=!1;const v=t.background;v?v.isColor&&(_.color.copy(v),t.background=null,p=!0):(_.color.copy(lc),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const R=this._cubeSize;Tr(i,y*R,x>2?R:0,R,R),h.setRenderTarget(i),p&&h.render(g,l),h.render(t,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Zi||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new fe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,La)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cc[(i-r-1)%cc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new fe(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*li-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):li;g>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${li}`);const p=[];let v=0;for(let P=0;P<li;++P){const L=P/_,E=Math.exp(-L*L/2);p.push(E),P===0?v+=E:P<g&&(v+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const y=this._sizeLods[i],R=3*y*(i>x-Wi?i-x+Wi:0),A=4*(this._cubeSize-y);Tr(e,R,A,3*y,2*y),l.setRenderTarget(e),l.render(h,La)}}function n0(s){const t=[],e=[],n=[];let i=s;const r=s-Wi+1+oc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Wi?l=oc[a-s+Wi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),x=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,L=A>2?0:-1,E=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];v.set(E,_*m*A),x.set(d,g*m*A);const b=[A,A,A,A,A,A];y.set(b,p*m*A)}const R=new pe;R.setAttribute("position",new ze(v,_)),R.setAttribute("uv",new ze(x,g)),R.setAttribute("faceIndex",new ze(y,p)),t.push(R),i>Wi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hc(s,t,e){const n=new mi(s,t,e);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function i0(s,t,e){const n=new Float32Array(li),i=new w(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function uc(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function dc(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function s0(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ja||l===ja,u=l===Zi||l===Ki;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Fo(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Fo(s)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function r0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Os("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function a0(s,t,e,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){const R=v[x+0],A=v[x+1],P=v[x+2];d.push(R,A,A,P,P,R)}}else if(m!==void 0){const v=m.array;_=m.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const R=x+0,A=x+1,P=x+2;d.push(R,A,A,P,P,R)}}else return;const g=new(sh(d)?lh:oh)(d,1);g.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function o0(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function u(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function h(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function l0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function c0(s,t,e){const n=new WeakMap,i=new ye;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let b=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let R=o.attributes.position.count*y,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*A*4*h),L=new rh(P,R,A,h);L.type=_n,L.needsUpdate=!0;const E=y*4;for(let U=0;U<h;U++){const O=p[U],H=v[U],Z=x[U],G=R*A*4*U;for(let W=0;W<O.count;W++){const Q=W*E;m===!0&&(i.fromBufferAttribute(O,W),P[G+Q+0]=i.x,P[G+Q+1]=i.y,P[G+Q+2]=i.z,P[G+Q+3]=0),_===!0&&(i.fromBufferAttribute(H,W),P[G+Q+4]=i.x,P[G+Q+5]=i.y,P[G+Q+6]=i.z,P[G+Q+7]=0),g===!0&&(i.fromBufferAttribute(Z,W),P[G+Q+8]=i.x,P[G+Q+9]=i.y,P[G+Q+10]=i.z,P[G+Q+11]=Z.itemSize===4?i.w:1)}}d={count:h,texture:L,size:new et(R,A)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function h0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Lh=new Ue,fc=new gh(1,1),Ih=new rh,Uh=new Ku,Nh=new uh,pc=[],mc=[],gc=new Float32Array(16),vc=new Float32Array(9),_c=new Float32Array(4);function ss(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=pc[i];if(r===void 0&&(r=new Float32Array(i),pc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function jr(s,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function u0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function d0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function f0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function p0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function m0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;_c.set(n),s.uniformMatrix2fv(this.addr,!1,_c),Ce(e,n)}}function g0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;vc.set(n),s.uniformMatrix3fv(this.addr,!1,vc),Ce(e,n)}}function v0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;gc.set(n),s.uniformMatrix4fv(this.addr,!1,gc),Ce(e,n)}}function _0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function x0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function y0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function M0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function S0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function b0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function E0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function T0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function w0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(fc.compareFunction=nh,r=fc):r=Lh,e.setTexture2D(t||r,i)}function A0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Uh,i)}function R0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Nh,i)}function C0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ih,i)}function P0(s){switch(s){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return v0;case 5124:case 35670:return _0;case 35667:case 35671:return x0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return b0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function D0(s,t){s.uniform1fv(this.addr,t)}function L0(s,t){const e=ss(t,this.size,2);s.uniform2fv(this.addr,e)}function I0(s,t){const e=ss(t,this.size,3);s.uniform3fv(this.addr,e)}function U0(s,t){const e=ss(t,this.size,4);s.uniform4fv(this.addr,e)}function N0(s,t){const e=ss(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function F0(s,t){const e=ss(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function O0(s,t){const e=ss(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function k0(s,t){s.uniform1iv(this.addr,t)}function z0(s,t){s.uniform2iv(this.addr,t)}function B0(s,t){s.uniform3iv(this.addr,t)}function V0(s,t){s.uniform4iv(this.addr,t)}function G0(s,t){s.uniform1uiv(this.addr,t)}function H0(s,t){s.uniform2uiv(this.addr,t)}function W0(s,t){s.uniform3uiv(this.addr,t)}function X0(s,t){s.uniform4uiv(this.addr,t)}function q0(s,t,e){const n=this.cache,i=t.length,r=jr(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Lh,r[a])}function Y0(s,t,e){const n=this.cache,i=t.length,r=jr(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Uh,r[a])}function $0(s,t,e){const n=this.cache,i=t.length,r=jr(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Nh,r[a])}function Z0(s,t,e){const n=this.cache,i=t.length,r=jr(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ih,r[a])}function K0(s){switch(s){case 5126:return D0;case 35664:return L0;case 35665:return I0;case 35666:return U0;case 35674:return N0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return k0;case 35667:case 35671:return z0;case 35668:case 35672:return B0;case 35669:case 35673:return V0;case 5125:return G0;case 36294:return H0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return Z0}}class J0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P0(e.type)}}class j0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=K0(e.type)}}class Q0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function xc(s,t){s.seq.push(t),s.map[t.id]=t}function tg(s,t,e){const n=s.name,i=n.length;for(Oa.lastIndex=0;;){const r=Oa.exec(n),a=Oa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){xc(e,c===void 0?new J0(o,s,t):new j0(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new Q0(o),xc(e,h)),e=h}}}class Nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);tg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function yc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const eg=37297;let ng=0;function ig(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Mc=new se;function sg(s){de._getMatrix(Mc,de.workingColorSpace,s);const t=`mat3( ${Mc.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(s)){case kr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Sc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ig(s.getShaderSource(t),o)}else return r}function rg(s,t){const e=sg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ag(s,t){let e;switch(t){case hu:e="Linear";break;case uu:e="Reinhard";break;case du:e="Cineon";break;case Yc:e="ACESFilmic";break;case pu:e="AgX";break;case mu:e="Neutral";break;case fu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wr=new w;function og(){de.getLuminanceCoefficients(wr);const s=wr.x.toFixed(4),t=wr.y.toFixed(4),e=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function cg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function bs(s){return s!==""}function bc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ec(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(s){return s.replace(ug,fg)}const dg=new Map;function fg(s,t){let e=ae[t];if(e===void 0){const n=dg.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oo(e)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(s){return s.replace(pg,mg)}function mg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function vg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zi:case Ki:t="ENVMAP_TYPE_CUBE";break;case $r:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _g(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ki&&(t="ENVMAP_MODE_REFRACTION"),t}function xg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Go:t="ENVMAP_BLENDING_MULTIPLY";break;case lu:t="ENVMAP_BLENDING_MIX";break;case cu:t="ENVMAP_BLENDING_ADD";break}return t}function yg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Mg(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=gg(e),c=vg(e),u=_g(e),h=xg(e),d=yg(e),f=lg(e),m=cg(r),_=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(g=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Yn?ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,rg("linearToOutputTexel",e.outputColorSpace),og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),a=Oo(a),a=bc(a,e),a=Ec(a,e),o=Oo(o),o=bc(o,e),o=Ec(o,e),a=Tc(a),o=Tc(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+g+a,y=v+p+o,R=yc(i,i.VERTEX_SHADER,x),A=yc(i,i.FRAGMENT_SHADER,y);i.attachShader(_,R),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(U){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",H=i.getShaderInfoLog(R)||"",Z=i.getShaderInfoLog(A)||"",G=O.trim(),W=H.trim(),Q=Z.trim();let $=!0,st=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,A);else{const Et=Sc(i,R,"vertex"),Pt=Sc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+Et+`
`+Pt)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||Q==="")&&(st=!1);st&&(U.diagnostics={runnable:$,programLog:G,vertexShader:{log:W,prefix:g},fragmentShader:{log:Q,prefix:p}})}i.deleteShader(R),i.deleteShader(A),L=new Nr(i,_),E=hg(i,_)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,eg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ng++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let Sg=0;class bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Eg(t),e.set(t,n)),n}}class Eg{constructor(t){this.id=Sg++,this.code=t,this.usedTimes=0}}function Tg(s,t,e,n,i,r,a){const o=new Qo,l=new bg,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,b,U,O,H){const Z=O.fog,G=H.geometry,W=E.isMeshStandardMaterial?O.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),$=Q&&Q.mapping===$r?Q.image.height:null,st=m[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Pt=Et!==void 0?Et.length:0;let Ct=0;G.morphAttributes.position!==void 0&&(Ct=1),G.morphAttributes.normal!==void 0&&(Ct=2),G.morphAttributes.color!==void 0&&(Ct=3);let kt,te,Kt,j;if(st){const he=fn[st];kt=he.vertexShader,te=he.fragmentShader}else kt=E.vertexShader,te=E.fragmentShader,l.update(E),Kt=l.getVertexShaderID(E),j=l.getFragmentShaderID(E);const lt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),Bt=H.isInstancedMesh===!0,Nt=H.isBatchedMesh===!0,le=!!E.map,ce=!!E.matcap,I=!!Q,ht=!!E.aoMap,rt=!!E.lightMap,at=!!E.bumpMap,it=!!E.normalMap,bt=!!E.displacementMap,nt=!!E.emissiveMap,ut=!!E.metalnessMap,Jt=!!E.roughnessMap,Zt=E.anisotropy>0,C=E.clearcoat>0,S=E.dispersion>0,V=E.iridescence>0,K=E.sheen>0,ct=E.transmission>0,J=Zt&&!!E.anisotropyMap,Lt=C&&!!E.clearcoatMap,Mt=C&&!!E.clearcoatNormalMap,It=C&&!!E.clearcoatRoughnessMap,Ot=V&&!!E.iridescenceMap,pt=V&&!!E.iridescenceThicknessMap,_t=K&&!!E.sheenColorMap,Ht=K&&!!E.sheenRoughnessMap,zt=!!E.specularMap,Tt=!!E.specularColorMap,ne=!!E.specularIntensityMap,N=ct&&!!E.transmissionMap,xt=ct&&!!E.thicknessMap,St=!!E.gradientMap,dt=!!E.alphaMap,ft=E.alphaTest>0,ot=!!E.alphaHash,Ft=!!E.extensions;let jt=Yn;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(jt=s.toneMapping);const ge={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:kt,fragmentShader:te,defines:E.defines,customVertexShaderID:Kt,customFragmentShaderID:j,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&H._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&H.instanceColor!==null,instancingMorph:Bt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:pi,alphaToCoverage:!!E.alphaToCoverage,map:le,matcap:ce,envMap:I,envMapMode:I&&Q.mapping,envMapCubeUVHeight:$,aoMap:ht,lightMap:rt,bumpMap:at,normalMap:it,displacementMap:d&&bt,emissiveMap:nt,normalMapObjectSpace:it&&E.normalMapType===xu,normalMapTangentSpace:it&&E.normalMapType===Ko,metalnessMap:ut,roughnessMap:Jt,anisotropy:Zt,anisotropyMap:J,clearcoat:C,clearcoatMap:Lt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:It,dispersion:S,iridescence:V,iridescenceMap:Ot,iridescenceThicknessMap:pt,sheen:K,sheenColorMap:_t,sheenRoughnessMap:Ht,specularMap:zt,specularColorMap:Tt,specularIntensityMap:ne,transmission:ct,transmissionMap:N,thicknessMap:xt,gradientMap:St,opaque:E.transparent===!1&&E.blending===qi&&E.alphaToCoverage===!1,alphaMap:dt,alphaTest:ft,alphaHash:ot,combine:E.combine,mapUv:le&&_(E.map.channel),aoMapUv:ht&&_(E.aoMap.channel),lightMapUv:rt&&_(E.lightMap.channel),bumpMapUv:at&&_(E.bumpMap.channel),normalMapUv:it&&_(E.normalMap.channel),displacementMapUv:bt&&_(E.displacementMap.channel),emissiveMapUv:nt&&_(E.emissiveMap.channel),metalnessMapUv:ut&&_(E.metalnessMap.channel),roughnessMapUv:Jt&&_(E.roughnessMap.channel),anisotropyMapUv:J&&_(E.anisotropyMap.channel),clearcoatMapUv:Lt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&_(E.sheenRoughnessMap.channel),specularMapUv:zt&&_(E.specularMap.channel),specularColorMapUv:Tt&&_(E.specularColorMap.channel),specularIntensityMapUv:ne&&_(E.specularIntensityMap.channel),transmissionMapUv:N&&_(E.transmissionMap.channel),thicknessMapUv:xt&&_(E.thicknessMap.channel),alphaMapUv:dt&&_(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(it||Zt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&(le||dt),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Dt,skinning:H.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Ct,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,decodeVideoTexture:le&&E.map.isVideoTexture===!0&&de.getTransfer(E.map.colorSpace)===xe,decodeVideoTextureEmissive:nt&&E.emissiveMap.isVideoTexture===!0&&de.getTransfer(E.emissiveMap.colorSpace)===xe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ie,flipSided:E.side===ke,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)b.push(U),b.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(v(b,E),x(b,E),b.push(s.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function v(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function x(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const b=m[E.type];let U;if(b){const O=fn[b];U=cd.clone(O.uniforms)}else U=E.uniforms;return U}function R(E,b){let U;for(let O=0,H=u.length;O<H;O++){const Z=u[O];if(Z.cacheKey===b){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new Mg(s,b,E,r),u.push(U)),U}function A(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function P(E){l.remove(E)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:L}}function wg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ag(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ac(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,f,m,_,g){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},s[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function o(h,d,f,m,_,g){const p=a(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,m,_,g){const p=a(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||Ag),n.length>1&&n.sort(d||Ac),i.length>1&&i.sort(d||Ac)}function u(){for(let h=t,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Rg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Rc,s.set(n,[a])):i>=r.length?(a=new Rc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Cg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Qt};break;case"SpotLight":e={position:new w,direction:new w,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new w,halfWidth:new w,halfHeight:new w};break}return s[t.id]=e,e}}}function Pg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Dg=0;function Lg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ig(s){const t=new Cg,e=Pg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const i=new w,r=new me,a=new me;function o(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,x=0,y=0,R=0,A=0,P=0;c.sort(Lg);for(let E=0,b=c.length;E<b;E++){const U=c[E],O=U.color,H=U.intensity,Z=U.distance,G=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=O.r*H,h+=O.g*H,d+=O.b*H;else if(U.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(U.sh.coefficients[W],H);P++}else if(U.isDirectionalLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,$=e.get(U);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=U.shadow.matrix,v++}n.directional[f]=W,f++}else if(U.isSpotLight){const W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(O).multiplyScalar(H),W.distance=Z,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,n.spot[_]=W;const Q=U.shadow;if(U.map&&(n.spotLightMap[R]=U.map,R++,Q.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[_]=Q.matrix,U.castShadow){const $=e.get(U);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=G,y++}_++}else if(U.isRectAreaLight){const W=t.get(U);W.color.copy(O).multiplyScalar(H),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=W,g++}else if(U.isPointLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){const Q=U.shadow,$=e.get(U);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=U.shadow.matrix,x++}n.point[m]=W,m++}else if(U.isHemisphereLight){const W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(H),W.groundColor.copy(U.groundColor).multiplyScalar(H),n.hemi[p]=W,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==x||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,L.directionalLength=f,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=x,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=P,n.version=Dg++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),h++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Cc(s){const t=new Ig(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ug(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Cc(s),t.set(i,[o])):r>=a.length?(o=new Cc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Og(s,t,e){let n=new el;const i=new et,r=new et,a=new ye,o=new tf({depthPacking:_u}),l=new ef,c={},u=e.maxTextureSize,h={[$n]:ke,[ke]:$n,[Ie]:Ie},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Ng,fragmentShader:Fg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new pe;m.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let p=this.type;this.render=function(A,P,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const E=s.getRenderTarget(),b=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),O=s.state;O.setBlending(qn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=p!==Cn&&this.type===Cn,Z=p===Cn&&this.type!==Cn;for(let G=0,W=A.length;G<W;G++){const Q=A[G],$=Q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const st=$.getFrameExtents();if(i.multiply(st),r.copy($.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/st.x),i.x=r.x*st.x,$.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/st.y),i.y=r.y*st.y,$.mapSize.y=r.y)),$.map===null||H===!0||Z===!0){const Pt=this.type!==Cn?{minFilter:Qe,magFilter:Qe}:{};$.map!==null&&$.map.dispose(),$.map=new mi(i.x,i.y,Pt),$.map.texture.name=Q.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const Et=$.getViewportCount();for(let Pt=0;Pt<Et;Pt++){const Ct=$.getViewport(Pt);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),O.viewport(a),$.updateMatrices(Q,Pt),n=$.getFrustum(),y(P,L,$.camera,Q,this.type)}$.isPointLightShadow!==!0&&this.type===Cn&&v($,L),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(E,b,U)};function v(A,P){const L=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new mi(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(P,null,L,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(P,null,L,f,_,null)}function x(A,P,L,E){let b=null;const U=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)b=U;else if(b=L.isPointLight===!0?l:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=b.uuid,H=P.uuid;let Z=c[O];Z===void 0&&(Z={},c[O]=Z);let G=Z[H];G===void 0&&(G=b.clone(),Z[H]=G,P.addEventListener("dispose",R)),b=G}if(b.visible=P.visible,b.wireframe=P.wireframe,E===Cn?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:h[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=s.properties.get(b);O.light=L}return b}function y(A,P,L,E,b){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Cn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const H=t.update(A),Z=A.material;if(Array.isArray(Z)){const G=H.groups;for(let W=0,Q=G.length;W<Q;W++){const $=G[W],st=Z[$.materialIndex];if(st&&st.visible){const Et=x(A,st,E,b);A.onBeforeShadow(s,A,P,L,H,Et,$),s.renderBufferDirect(L,null,H,Et,A,$),A.onAfterShadow(s,A,P,L,H,Et,$)}}}else if(Z.visible){const G=x(A,Z,E,b);A.onBeforeShadow(s,A,P,L,H,G,null),s.renderBufferDirect(L,null,H,G,A,null),A.onAfterShadow(s,A,P,L,H,G,null)}}const O=A.children;for(let H=0,Z=O.length;H<Z;H++)y(O[H],P,L,E,b)}function R(A){A.target.removeEventListener("dispose",R);for(const L in c){const E=c[L],b=A.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const kg={[Wa]:Xa,[qa]:Za,[Ya]:Ka,[$i]:$a,[Xa]:Wa,[Za]:qa,[Ka]:Ya,[$a]:$i};function zg(s,t){function e(){let N=!1;const xt=new ye;let St=null;const dt=new ye(0,0,0,0);return{setMask:function(ft){St!==ft&&!N&&(s.colorMask(ft,ft,ft,ft),St=ft)},setLocked:function(ft){N=ft},setClear:function(ft,ot,Ft,jt,ge){ge===!0&&(ft*=jt,ot*=jt,Ft*=jt),xt.set(ft,ot,Ft,jt),dt.equals(xt)===!1&&(s.clearColor(ft,ot,Ft,jt),dt.copy(xt))},reset:function(){N=!1,St=null,dt.set(-1,0,0,0)}}}function n(){let N=!1,xt=!1,St=null,dt=null,ft=null;return{setReversed:function(ot){if(xt!==ot){const Ft=t.get("EXT_clip_control");ot?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),xt=ot;const jt=ft;ft=null,this.setClear(jt)}},getReversed:function(){return xt},setTest:function(ot){ot?lt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(ot){St!==ot&&!N&&(s.depthMask(ot),St=ot)},setFunc:function(ot){if(xt&&(ot=kg[ot]),dt!==ot){switch(ot){case Wa:s.depthFunc(s.NEVER);break;case Xa:s.depthFunc(s.ALWAYS);break;case qa:s.depthFunc(s.LESS);break;case $i:s.depthFunc(s.LEQUAL);break;case Ya:s.depthFunc(s.EQUAL);break;case $a:s.depthFunc(s.GEQUAL);break;case Za:s.depthFunc(s.GREATER);break;case Ka:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=ot}},setLocked:function(ot){N=ot},setClear:function(ot){ft!==ot&&(xt&&(ot=1-ot),s.clearDepth(ot),ft=ot)},reset:function(){N=!1,St=null,dt=null,ft=null,xt=!1}}}function i(){let N=!1,xt=null,St=null,dt=null,ft=null,ot=null,Ft=null,jt=null,ge=null;return{setTest:function(he){N||(he?lt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(he){xt!==he&&!N&&(s.stencilMask(he),xt=he)},setFunc:function(he,tn,Ye){(St!==he||dt!==tn||ft!==Ye)&&(s.stencilFunc(he,tn,Ye),St=he,dt=tn,ft=Ye)},setOp:function(he,tn,Ye){(ot!==he||Ft!==tn||jt!==Ye)&&(s.stencilOp(he,tn,Ye),ot=he,Ft=tn,jt=Ye)},setLocked:function(he){N=he},setClear:function(he){ge!==he&&(s.clearStencil(he),ge=he)},reset:function(){N=!1,xt=null,St=null,dt=null,ft=null,ot=null,Ft=null,jt=null,ge=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,x=null,y=null,R=null,A=null,P=new Qt(0,0,0),L=0,E=!1,b=null,U=null,O=null,H=null,Z=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec($)[1]),W=Q>=1):$.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=Q>=2);let st=null,Et={};const Pt=s.getParameter(s.SCISSOR_BOX),Ct=s.getParameter(s.VIEWPORT),kt=new ye().fromArray(Pt),te=new ye().fromArray(Ct);function Kt(N,xt,St,dt){const ft=new Uint8Array(4),ot=s.createTexture();s.bindTexture(N,ot),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<St;Ft++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(xt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return ot}const j={};j[s.TEXTURE_2D]=Kt(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(s.DEPTH_TEST),a.setFunc($i),at(!1),it(ml),lt(s.CULL_FACE),ht(qn);function lt(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function Dt(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function Bt(N,xt){return h[N]!==xt?(s.bindFramebuffer(N,xt),h[N]=xt,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=xt),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function Nt(N,xt){let St=f,dt=!1;if(N){St=d.get(xt),St===void 0&&(St=[],d.set(xt,St));const ft=N.textures;if(St.length!==ft.length||St[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Ft=ft.length;ot<Ft;ot++)St[ot]=s.COLOR_ATTACHMENT0+ot;St.length=ft.length,dt=!0}}else St[0]!==s.BACK&&(St[0]=s.BACK,dt=!0);dt&&s.drawBuffers(St)}function le(N){return m!==N?(s.useProgram(N),m=N,!0):!1}const ce={[oi]:s.FUNC_ADD,[Xh]:s.FUNC_SUBTRACT,[qh]:s.FUNC_REVERSE_SUBTRACT};ce[Yh]=s.MIN,ce[$h]=s.MAX;const I={[Zh]:s.ZERO,[Kh]:s.ONE,[Jh]:s.SRC_COLOR,[Ga]:s.SRC_ALPHA,[iu]:s.SRC_ALPHA_SATURATE,[eu]:s.DST_COLOR,[Qh]:s.DST_ALPHA,[jh]:s.ONE_MINUS_SRC_COLOR,[Ha]:s.ONE_MINUS_SRC_ALPHA,[nu]:s.ONE_MINUS_DST_COLOR,[tu]:s.ONE_MINUS_DST_ALPHA,[su]:s.CONSTANT_COLOR,[ru]:s.ONE_MINUS_CONSTANT_COLOR,[au]:s.CONSTANT_ALPHA,[ou]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(N,xt,St,dt,ft,ot,Ft,jt,ge,he){if(N===qn){_===!0&&(Dt(s.BLEND),_=!1);return}if(_===!1&&(lt(s.BLEND),_=!0),N!==Wh){if(N!==g||he!==E){if((p!==oi||y!==oi)&&(s.blendEquation(s.FUNC_ADD),p=oi,y=oi),he)switch(N){case qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Or:s.blendFunc(s.ONE,s.ONE);break;case gl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Or:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case gl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,x=null,R=null,A=null,P.set(0,0,0),L=0,g=N,E=he}return}ft=ft||xt,ot=ot||St,Ft=Ft||dt,(xt!==p||ft!==y)&&(s.blendEquationSeparate(ce[xt],ce[ft]),p=xt,y=ft),(St!==v||dt!==x||ot!==R||Ft!==A)&&(s.blendFuncSeparate(I[St],I[dt],I[ot],I[Ft]),v=St,x=dt,R=ot,A=Ft),(jt.equals(P)===!1||ge!==L)&&(s.blendColor(jt.r,jt.g,jt.b,ge),P.copy(jt),L=ge),g=N,E=!1}function rt(N,xt){N.side===Ie?Dt(s.CULL_FACE):lt(s.CULL_FACE);let St=N.side===ke;xt&&(St=!St),at(St),N.blending===qi&&N.transparent===!1?ht(qn):ht(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const dt=N.stencilWrite;o.setTest(dt),dt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(N){b!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),b=N)}function it(N){N!==Gh?(lt(s.CULL_FACE),N!==U&&(N===ml?s.cullFace(s.BACK):N===Hh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),U=N}function bt(N){N!==O&&(W&&s.lineWidth(N),O=N)}function nt(N,xt,St){N?(lt(s.POLYGON_OFFSET_FILL),(H!==xt||Z!==St)&&(s.polygonOffset(xt,St),H=xt,Z=St)):Dt(s.POLYGON_OFFSET_FILL)}function ut(N){N?lt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function Jt(N){N===void 0&&(N=s.TEXTURE0+G-1),st!==N&&(s.activeTexture(N),st=N)}function Zt(N,xt,St){St===void 0&&(st===null?St=s.TEXTURE0+G-1:St=st);let dt=Et[St];dt===void 0&&(dt={type:void 0,texture:void 0},Et[St]=dt),(dt.type!==N||dt.texture!==xt)&&(st!==St&&(s.activeTexture(St),st=St),s.bindTexture(N,xt||j[N]),dt.type=N,dt.texture=xt)}function C(){const N=Et[st];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{s.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{s.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{s.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{s.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{s.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{s.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{s.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(){try{s.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{s.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(N){kt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),kt.copy(N))}function Ht(N){te.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),te.copy(N))}function zt(N,xt){let St=c.get(xt);St===void 0&&(St=new WeakMap,c.set(xt,St));let dt=St.get(N);dt===void 0&&(dt=s.getUniformBlockIndex(xt,N.name),St.set(N,dt))}function Tt(N,xt){const dt=c.get(xt).get(N);l.get(xt)!==dt&&(s.uniformBlockBinding(xt,dt,N.__bindingPointIndex),l.set(xt,dt))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},st=null,Et={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,x=null,y=null,R=null,A=null,P=new Qt(0,0,0),L=0,E=!1,b=null,U=null,O=null,H=null,Z=null,kt.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Dt,bindFramebuffer:Bt,drawBuffers:Nt,useProgram:le,setBlending:ht,setMaterial:rt,setFlipSided:at,setCullFace:it,setLineWidth:bt,setPolygonOffset:nt,setScissorTest:ut,activeTexture:Jt,bindTexture:Zt,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:V,texImage2D:Ot,texImage3D:pt,updateUBOMapping:zt,uniformBlockBinding:Tt,texStorage2D:Mt,texStorage3D:It,texSubImage2D:K,texSubImage3D:ct,compressedTexSubImage2D:J,compressedTexSubImage3D:Lt,scissor:_t,viewport:Ht,reset:ne}}function Bg(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return f?new OffscreenCanvas(C,S):Fs("canvas")}function _(C,S,V){let K=1;const ct=Zt(C);if((ct.width>V||ct.height>V)&&(K=V/Math.max(ct.width,ct.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(K*ct.width),Lt=Math.floor(K*ct.height);h===void 0&&(h=m(J,Lt));const Mt=S?m(J,Lt):h;return Mt.width=J,Mt.height=Lt,Mt.getContext("2d").drawImage(C,0,0,J,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+J+"x"+Lt+")."),Mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(C,S,V,K,ct=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===s.RED&&(V===s.FLOAT&&(J=s.R32F),V===s.HALF_FLOAT&&(J=s.R16F),V===s.UNSIGNED_BYTE&&(J=s.R8)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.R8UI),V===s.UNSIGNED_SHORT&&(J=s.R16UI),V===s.UNSIGNED_INT&&(J=s.R32UI),V===s.BYTE&&(J=s.R8I),V===s.SHORT&&(J=s.R16I),V===s.INT&&(J=s.R32I)),S===s.RG&&(V===s.FLOAT&&(J=s.RG32F),V===s.HALF_FLOAT&&(J=s.RG16F),V===s.UNSIGNED_BYTE&&(J=s.RG8)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RG8UI),V===s.UNSIGNED_SHORT&&(J=s.RG16UI),V===s.UNSIGNED_INT&&(J=s.RG32UI),V===s.BYTE&&(J=s.RG8I),V===s.SHORT&&(J=s.RG16I),V===s.INT&&(J=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGB8UI),V===s.UNSIGNED_SHORT&&(J=s.RGB16UI),V===s.UNSIGNED_INT&&(J=s.RGB32UI),V===s.BYTE&&(J=s.RGB8I),V===s.SHORT&&(J=s.RGB16I),V===s.INT&&(J=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),V===s.UNSIGNED_INT&&(J=s.RGBA32UI),V===s.BYTE&&(J=s.RGBA8I),V===s.SHORT&&(J=s.RGBA16I),V===s.INT&&(J=s.RGBA32I)),S===s.RGB&&(V===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),S===s.RGBA){const Lt=ct?kr:de.getTransfer(K);V===s.FLOAT&&(J=s.RGBA32F),V===s.HALF_FLOAT&&(J=s.RGBA16F),V===s.UNSIGNED_BYTE&&(J=Lt===xe?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(C,S){let V;return C?S===null||S===fi||S===Is?V=s.DEPTH24_STENCIL8:S===_n?V=s.DEPTH32F_STENCIL8:S===Ls&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fi||S===Is?V=s.DEPTH_COMPONENT24:S===_n?V=s.DEPTH_COMPONENT32F:S===Ls&&(V=s.DEPTH_COMPONENT16),V}function R(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==vn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),L(S),S.isVideoTexture&&u.delete(S)}function P(C){const S=C.target;S.removeEventListener("dispose",P),b(S)}function L(C){const S=n.get(C);if(S.__webglInit===void 0)return;const V=C.source,K=d.get(V);if(K){const ct=K[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(C),Object.keys(K).length===0&&d.delete(V)}n.remove(C)}function E(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const V=C.source,K=d.get(V);delete K[S.__cacheKey],a.memory.textures--}function b(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let ct=0;ct<S.__webglFramebuffer[K].length;ct++)s.deleteFramebuffer(S.__webglFramebuffer[K][ct]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=C.textures;for(let K=0,ct=V.length;K<ct;K++){const J=n.get(V[K]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(V[K])}n.remove(C)}let U=0;function O(){U=0}function H(){const C=U;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),U+=1,C}function Z(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function G(C,S){const V=n.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,C,S);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function W(C,S){const V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){j(V,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function Q(C,S){const V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){j(V,C,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function $(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){lt(V,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}const st={[Ji]:s.REPEAT,[ci]:s.CLAMP_TO_EDGE,[Qa]:s.MIRRORED_REPEAT},Et={[Qe]:s.NEAREST,[gu]:s.NEAREST_MIPMAP_NEAREST,[Zs]:s.NEAREST_MIPMAP_LINEAR,[vn]:s.LINEAR,[ea]:s.LINEAR_MIPMAP_NEAREST,[hi]:s.LINEAR_MIPMAP_LINEAR},Pt={[yu]:s.NEVER,[wu]:s.ALWAYS,[Mu]:s.LESS,[nh]:s.LEQUAL,[Su]:s.EQUAL,[Tu]:s.GEQUAL,[bu]:s.GREATER,[Eu]:s.NOTEQUAL};function Ct(C,S){if(S.type===_n&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===vn||S.magFilter===ea||S.magFilter===Zs||S.magFilter===hi||S.minFilter===vn||S.minFilter===ea||S.minFilter===Zs||S.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,st[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,st[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,st[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Et[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Et[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Pt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qe||S.minFilter!==Zs&&S.minFilter!==hi||S.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function kt(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const K=S.source;let ct=d.get(K);ct===void 0&&(ct={},d.set(K,ct));const J=Z(S);if(J!==C.__cacheKey){ct[J]===void 0&&(ct[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ct[J].usedTimes++;const Lt=ct[C.__cacheKey];Lt!==void 0&&(ct[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&E(S)),C.__cacheKey=J,C.__webglTexture=ct[J].texture}return V}function te(C,S,V){return Math.floor(Math.floor(C/V)/S)}function Kt(C,S,V,K){const J=C.updateRanges;if(J.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,V,K,S.data);else{J.sort((pt,_t)=>pt.start-_t.start);let Lt=0;for(let pt=1;pt<J.length;pt++){const _t=J[Lt],Ht=J[pt],zt=_t.start+_t.count,Tt=te(Ht.start,S.width,4),ne=te(_t.start,S.width,4);Ht.start<=zt+1&&Tt===ne&&te(Ht.start+Ht.count-1,S.width,4)===Tt?_t.count=Math.max(_t.count,Ht.start+Ht.count-_t.start):(++Lt,J[Lt]=Ht)}J.length=Lt+1;const Mt=s.getParameter(s.UNPACK_ROW_LENGTH),It=s.getParameter(s.UNPACK_SKIP_PIXELS),Ot=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let pt=0,_t=J.length;pt<_t;pt++){const Ht=J[pt],zt=Math.floor(Ht.start/4),Tt=Math.ceil(Ht.count/4),ne=zt%S.width,N=Math.floor(zt/S.width),xt=Tt,St=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,ne,N,xt,St,V,K,S.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Mt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,It),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ot)}}function j(C,S,V){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);const ct=kt(C,S),J=S.source;e.bindTexture(K,C.__webglTexture,s.TEXTURE0+V);const Lt=n.get(J);if(J.version!==Lt.__version||ct===!0){e.activeTexture(s.TEXTURE0+V);const Mt=de.getPrimaries(de.workingColorSpace),It=S.colorSpace===Xn?null:de.getPrimaries(S.colorSpace),Ot=S.colorSpace===Xn||Mt===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let pt=_(S.image,!1,i.maxTextureSize);pt=Jt(S,pt);const _t=r.convert(S.format,S.colorSpace),Ht=r.convert(S.type);let zt=x(S.internalFormat,_t,Ht,S.colorSpace,S.isVideoTexture);Ct(K,S);let Tt;const ne=S.mipmaps,N=S.isVideoTexture!==!0,xt=Lt.__version===void 0||ct===!0,St=J.dataReady,dt=R(S,pt);if(S.isDepthTexture)zt=y(S.format===Ns,S.type),xt&&(N?e.texStorage2D(s.TEXTURE_2D,1,zt,pt.width,pt.height):e.texImage2D(s.TEXTURE_2D,0,zt,pt.width,pt.height,0,_t,Ht,null));else if(S.isDataTexture)if(ne.length>0){N&&xt&&e.texStorage2D(s.TEXTURE_2D,dt,zt,ne[0].width,ne[0].height);for(let ft=0,ot=ne.length;ft<ot;ft++)Tt=ne[ft],N?St&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,_t,Ht,Tt.data):e.texImage2D(s.TEXTURE_2D,ft,zt,Tt.width,Tt.height,0,_t,Ht,Tt.data);S.generateMipmaps=!1}else N?(xt&&e.texStorage2D(s.TEXTURE_2D,dt,zt,pt.width,pt.height),St&&Kt(S,pt,_t,Ht)):e.texImage2D(s.TEXTURE_2D,0,zt,pt.width,pt.height,0,_t,Ht,pt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,zt,ne[0].width,ne[0].height,pt.depth);for(let ft=0,ot=ne.length;ft<ot;ft++)if(Tt=ne[ft],S.format!==un)if(_t!==null)if(N){if(St)if(S.layerUpdates.size>0){const Ft=ac(Tt.width,Tt.height,S.format,S.type);for(const jt of S.layerUpdates){const ge=Tt.data.subarray(jt*Ft/Tt.data.BYTES_PER_ELEMENT,(jt+1)*Ft/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,jt,Tt.width,Tt.height,1,_t,ge)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,Tt.width,Tt.height,pt.depth,_t,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,zt,Tt.width,Tt.height,pt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?St&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,Tt.width,Tt.height,pt.depth,_t,Ht,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,zt,Tt.width,Tt.height,pt.depth,0,_t,Ht,Tt.data)}else{N&&xt&&e.texStorage2D(s.TEXTURE_2D,dt,zt,ne[0].width,ne[0].height);for(let ft=0,ot=ne.length;ft<ot;ft++)Tt=ne[ft],S.format!==un?_t!==null?N?St&&e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,_t,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,zt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?St&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,_t,Ht,Tt.data):e.texImage2D(s.TEXTURE_2D,ft,zt,Tt.width,Tt.height,0,_t,Ht,Tt.data)}else if(S.isDataArrayTexture)if(N){if(xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,zt,pt.width,pt.height,pt.depth),St)if(S.layerUpdates.size>0){const ft=ac(pt.width,pt.height,S.format,S.type);for(const ot of S.layerUpdates){const Ft=pt.data.subarray(ot*ft/pt.data.BYTES_PER_ELEMENT,(ot+1)*ft/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ot,pt.width,pt.height,1,_t,Ht,Ft)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,_t,Ht,pt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,zt,pt.width,pt.height,pt.depth,0,_t,Ht,pt.data);else if(S.isData3DTexture)N?(xt&&e.texStorage3D(s.TEXTURE_3D,dt,zt,pt.width,pt.height,pt.depth),St&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,_t,Ht,pt.data)):e.texImage3D(s.TEXTURE_3D,0,zt,pt.width,pt.height,pt.depth,0,_t,Ht,pt.data);else if(S.isFramebufferTexture){if(xt)if(N)e.texStorage2D(s.TEXTURE_2D,dt,zt,pt.width,pt.height);else{let ft=pt.width,ot=pt.height;for(let Ft=0;Ft<dt;Ft++)e.texImage2D(s.TEXTURE_2D,Ft,zt,ft,ot,0,_t,Ht,null),ft>>=1,ot>>=1}}else if(ne.length>0){if(N&&xt){const ft=Zt(ne[0]);e.texStorage2D(s.TEXTURE_2D,dt,zt,ft.width,ft.height)}for(let ft=0,ot=ne.length;ft<ot;ft++)Tt=ne[ft],N?St&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,_t,Ht,Tt):e.texImage2D(s.TEXTURE_2D,ft,zt,_t,Ht,Tt);S.generateMipmaps=!1}else if(N){if(xt){const ft=Zt(pt);e.texStorage2D(s.TEXTURE_2D,dt,zt,ft.width,ft.height)}St&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Ht,pt)}else e.texImage2D(s.TEXTURE_2D,0,zt,_t,Ht,pt);g(S)&&p(K),Lt.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function lt(C,S,V){if(S.image.length!==6)return;const K=kt(C,S),ct=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+V);const J=n.get(ct);if(ct.version!==J.__version||K===!0){e.activeTexture(s.TEXTURE0+V);const Lt=de.getPrimaries(de.workingColorSpace),Mt=S.colorSpace===Xn?null:de.getPrimaries(S.colorSpace),It=S.colorSpace===Xn||Lt===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Ot=S.isCompressedTexture||S.image[0].isCompressedTexture,pt=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let ot=0;ot<6;ot++)!Ot&&!pt?_t[ot]=_(S.image[ot],!0,i.maxCubemapSize):_t[ot]=pt?S.image[ot].image:S.image[ot],_t[ot]=Jt(S,_t[ot]);const Ht=_t[0],zt=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type),ne=x(S.internalFormat,zt,Tt,S.colorSpace),N=S.isVideoTexture!==!0,xt=J.__version===void 0||K===!0,St=ct.dataReady;let dt=R(S,Ht);Ct(s.TEXTURE_CUBE_MAP,S);let ft;if(Ot){N&&xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,ne,Ht.width,Ht.height);for(let ot=0;ot<6;ot++){ft=_t[ot].mipmaps;for(let Ft=0;Ft<ft.length;Ft++){const jt=ft[Ft];S.format!==un?zt!==null?N?St&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,0,0,jt.width,jt.height,zt,jt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,ne,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?St&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,0,0,jt.width,jt.height,zt,Tt,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,ne,jt.width,jt.height,0,zt,Tt,jt.data)}}}else{if(ft=S.mipmaps,N&&xt){ft.length>0&&dt++;const ot=Zt(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,ne,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(pt){N?St&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,_t[ot].width,_t[ot].height,zt,Tt,_t[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ne,_t[ot].width,_t[ot].height,0,zt,Tt,_t[ot].data);for(let Ft=0;Ft<ft.length;Ft++){const ge=ft[Ft].image[ot].image;N?St&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,0,0,ge.width,ge.height,zt,Tt,ge.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,ne,ge.width,ge.height,0,zt,Tt,ge.data)}}else{N?St&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,zt,Tt,_t[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ne,zt,Tt,_t[ot]);for(let Ft=0;Ft<ft.length;Ft++){const jt=ft[Ft];N?St&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,0,0,zt,Tt,jt.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,ne,zt,Tt,jt.image[ot])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),J.__version=ct.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Dt(C,S,V,K,ct,J){const Lt=r.convert(V.format,V.colorSpace),Mt=r.convert(V.type),It=x(V.internalFormat,Lt,Mt,V.colorSpace),Ot=n.get(S),pt=n.get(V);if(pt.__renderTarget=S,!Ot.__hasExternalTextures){const _t=Math.max(1,S.width>>J),Ht=Math.max(1,S.height>>J);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,J,It,_t,Ht,S.depth,0,Lt,Mt,null):e.texImage2D(ct,J,It,_t,Ht,0,Lt,Mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),nt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,ct,pt.__webglTexture,0,bt(S)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,ct,pt.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(C,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const K=S.depthTexture,ct=K&&K.isDepthTexture?K.type:null,J=y(S.stencilBuffer,ct),Lt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=bt(S);nt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt,J,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,J,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,J,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Lt,s.RENDERBUFFER,C)}else{const K=S.textures;for(let ct=0;ct<K.length;ct++){const J=K[ct],Lt=r.convert(J.format,J.colorSpace),Mt=r.convert(J.type),It=x(J.internalFormat,Lt,Mt,J.colorSpace),Ot=bt(S);V&&nt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,It,S.width,S.height):nt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot,It,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,It,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const ct=K.__webglTexture,J=bt(S);if(S.depthTexture.format===Us)nt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0);else if(S.depthTexture.format===Ns)nt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function le(C){const S=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const ct=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",ct)};K.addEventListener("dispose",ct),S.__depthDisposeCallback=ct}S.__boundDepthTexture=K}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const K=C.texture.mipmaps;K&&K.length>0?Nt(S.__webglFramebuffer[0],C):Nt(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),Bt(S.__webglDepthbuffer[K],C,!1);else{const ct=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,J)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Bt(S.__webglDepthbuffer,C,!1);else{const ct=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,J)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(C,S,V){const K=n.get(C);S!==void 0&&Dt(K.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&le(C)}function I(C){const S=C.texture,V=n.get(C),K=n.get(S);C.addEventListener("dispose",P);const ct=C.textures,J=C.isWebGLCubeRenderTarget===!0,Lt=ct.length>1;if(Lt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[Mt]=[];for(let It=0;It<S.mipmaps.length;It++)V.__webglFramebuffer[Mt][It]=s.createFramebuffer()}else V.__webglFramebuffer[Mt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)V.__webglFramebuffer[Mt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let Mt=0,It=ct.length;Mt<It;Mt++){const Ot=n.get(ct[Mt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&nt(C)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ct.length;Mt++){const It=ct[Mt];V.__webglColorRenderbuffer[Mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[Mt]);const Ot=r.convert(It.format,It.colorSpace),pt=r.convert(It.type),_t=x(It.internalFormat,Ot,pt,It.colorSpace,C.isXRRenderTarget===!0),Ht=bt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,V.__webglColorRenderbuffer[Mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ct(s.TEXTURE_CUBE_MAP,S);for(let Mt=0;Mt<6;Mt++)if(S.mipmaps&&S.mipmaps.length>0)for(let It=0;It<S.mipmaps.length;It++)Dt(V.__webglFramebuffer[Mt][It],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,It);else Dt(V.__webglFramebuffer[Mt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);g(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let Mt=0,It=ct.length;Mt<It;Mt++){const Ot=ct[Mt],pt=n.get(Ot);let _t=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,pt.__webglTexture),Ct(_t,Ot),Dt(V.__webglFramebuffer,C,Ot,s.COLOR_ATTACHMENT0+Mt,_t,0),g(Ot)&&p(_t)}e.unbindTexture()}else{let Mt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Mt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Mt,K.__webglTexture),Ct(Mt,S),S.mipmaps&&S.mipmaps.length>0)for(let It=0;It<S.mipmaps.length;It++)Dt(V.__webglFramebuffer[It],C,S,s.COLOR_ATTACHMENT0,Mt,It);else Dt(V.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,Mt,0);g(S)&&p(Mt),e.unbindTexture()}C.depthBuffer&&le(C)}function ht(C){const S=C.textures;for(let V=0,K=S.length;V<K;V++){const ct=S[V];if(g(ct)){const J=v(C),Lt=n.get(ct).__webglTexture;e.bindTexture(J,Lt),p(J),e.unbindTexture()}}}const rt=[],at=[];function it(C){if(C.samples>0){if(nt(C)===!1){const S=C.textures,V=C.width,K=C.height;let ct=s.COLOR_BUFFER_BIT;const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=n.get(C),Mt=S.length>1;if(Mt)for(let Ot=0;Ot<S.length;Ot++)e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const It=C.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ot=0;Ot<S.length;Ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),Mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ot]);const pt=n.get(S[Ot]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,V,K,0,0,V,K,ct,s.NEAREST),l===!0&&(rt.length=0,at.length=0,rt.push(s.COLOR_ATTACHMENT0+Ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&(rt.push(J),at.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,at)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Mt)for(let Ot=0;Ot<S.length;Ot++){e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ot]);const pt=n.get(S[Ot]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.TEXTURE_2D,pt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function bt(C){return Math.min(i.maxSamples,C.samples)}function nt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ut(C){const S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Jt(C,S){const V=C.colorSpace,K=C.format,ct=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==pi&&V!==Xn&&(de.getTransfer(V)===xe?(K!==un||ct!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=$,this.rebindTextures=ce,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=nt}function Vg(s,t){function e(n,i=Xn){let r;const a=de.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===Wo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zc)return s.BYTE;if(n===Kc)return s.SHORT;if(n===Ls)return s.UNSIGNED_SHORT;if(n===Ho)return s.INT;if(n===fi)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===Gs)return s.HALF_FLOAT;if(n===Qc)return s.ALPHA;if(n===th)return s.RGB;if(n===un)return s.RGBA;if(n===Us)return s.DEPTH_COMPONENT;if(n===Ns)return s.DEPTH_STENCIL;if(n===qo)return s.RED;if(n===Yo)return s.RED_INTEGER;if(n===eh)return s.RG;if(n===$o)return s.RG_INTEGER;if(n===Zo)return s.RGBA_INTEGER;if(n===Pr||n===Dr||n===Lr||n===Ir)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===so||n===ro)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ao)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===vo||n===_o||n===xo||n===yo||n===Mo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===So||n===bo||n===Eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===So)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===wo||n===Ao||n===Ro)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===To)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new vh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sn({vertexShader:Gg,fragmentShader:Hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xg extends is{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new Wg,p={},v=e.getContextAttributes();let x=null,y=null;const R=[],A=[],P=new et;let L=null;const E=new qe;E.viewport=new ye;const b=new qe;b.viewport=new ye;const U=[E,b],O=new uf;let H=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let lt=R[j];return lt===void 0&&(lt=new Sa,R[j]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(j){let lt=R[j];return lt===void 0&&(lt=new Sa,R[j]=lt),lt.getGripSpace()},this.getHand=function(j){let lt=R[j];return lt===void 0&&(lt=new Sa,R[j]=lt),lt.getHandSpace()};function G(j){const lt=A.indexOf(j.inputSource);if(lt===-1)return;const Dt=R[lt];Dt!==void 0&&(Dt.update(j.inputSource,j.frame,c||a),Dt.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Q);for(let j=0;j<R.length;j++){const lt=A[j];lt!==null&&(A[j]=null,R[j].disconnect(lt))}H=null,Z=null,g.reset();for(const j in p)delete p[j];t.setRenderTarget(x),f=null,d=null,h=null,i=null,y=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,e)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(x=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Bt=null,Nt=null;v.depth&&(Nt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=v.stencil?Ns:Us,Bt=v.stencil?Is:fi);const le={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(le),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new mi(d.textureWidth,d.textureHeight,{format:un,type:Mn,depthTexture:new gh(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Dt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Dt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new mi(f.framebufferWidth,f.framebufferHeight,{format:un,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(j){for(let lt=0;lt<j.removed.length;lt++){const Dt=j.removed[lt],Bt=A.indexOf(Dt);Bt>=0&&(A[Bt]=null,R[Bt].disconnect(Dt))}for(let lt=0;lt<j.added.length;lt++){const Dt=j.added[lt];let Bt=A.indexOf(Dt);if(Bt===-1){for(let le=0;le<R.length;le++)if(le>=A.length){A.push(Dt),Bt=le;break}else if(A[le]===null){A[le]=Dt,Bt=le;break}if(Bt===-1)break}const Nt=R[Bt];Nt&&Nt.connect(Dt)}}const $=new w,st=new w;function Et(j,lt,Dt){$.setFromMatrixPosition(lt.matrixWorld),st.setFromMatrixPosition(Dt.matrixWorld);const Bt=$.distanceTo(st),Nt=lt.projectionMatrix.elements,le=Dt.projectionMatrix.elements,ce=Nt[14]/(Nt[10]-1),I=Nt[14]/(Nt[10]+1),ht=(Nt[9]+1)/Nt[5],rt=(Nt[9]-1)/Nt[5],at=(Nt[8]-1)/Nt[0],it=(le[8]+1)/le[0],bt=ce*at,nt=ce*it,ut=Bt/(-at+it),Jt=ut*-at;if(lt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Jt),j.translateZ(ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Nt[10]===-1)j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Zt=ce+ut,C=I+ut,S=bt-Jt,V=nt+(Bt-Jt),K=ht*I/C*Zt,ct=rt*I/C*Zt;j.projectionMatrix.makePerspective(S,V,K,ct,Zt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Pt(j,lt){lt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(lt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let lt=j.near,Dt=j.far;g.texture!==null&&(g.depthNear>0&&(lt=g.depthNear),g.depthFar>0&&(Dt=g.depthFar)),O.near=b.near=E.near=lt,O.far=b.far=E.far=Dt,(H!==O.near||Z!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,Z=O.far),O.layers.mask=j.layers.mask|6,E.layers.mask=O.layers.mask&3,b.layers.mask=O.layers.mask&5;const Bt=j.parent,Nt=O.cameras;Pt(O,Bt);for(let le=0;le<Nt.length;le++)Pt(Nt[le],Bt);Nt.length===2?Et(O,E,b):O.projectionMatrix.copy(E.projectionMatrix),Ct(j,O,Bt)};function Ct(j,lt,Dt){Dt===null?j.matrix.copy(lt.matrixWorld):(j.matrix.copy(Dt.matrixWorld),j.matrix.invert(),j.matrix.multiply(lt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ji*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(j){return p[j]};let kt=null;function te(j,lt){if(u=lt.getViewerPose(c||a),m=lt,u!==null){const Dt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Bt=!1;Dt.length!==O.cameras.length&&(O.cameras.length=0,Bt=!0);for(let I=0;I<Dt.length;I++){const ht=Dt[I];let rt=null;if(f!==null)rt=f.getViewport(ht);else{const it=h.getViewSubImage(d,ht);rt=it.viewport,I===0&&(t.setRenderTargetTextures(y,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(y))}let at=U[I];at===void 0&&(at=new qe,at.layers.enable(I),at.viewport=new ye,U[I]=at),at.matrix.fromArray(ht.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ht.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(rt.x,rt.y,rt.width,rt.height),I===0&&(O.matrix.copy(at.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Bt===!0&&O.cameras.push(at)}const Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const I=h.getDepthInformation(Dt[0]);I&&I.isValid&&I.texture&&g.init(I,i.renderState)}if(Nt&&Nt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let I=0;I<Dt.length;I++){const ht=Dt[I].camera;if(ht){let rt=p[ht];rt||(rt=new vh,p[ht]=rt);const at=h.getCameraImage(ht);rt.sourceTexture=at}}}}for(let Dt=0;Dt<R.length;Dt++){const Bt=A[Dt],Nt=R[Dt];Bt!==null&&Nt!==void 0&&Nt.update(Bt,lt,c||a)}kt&&kt(j,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),m=null}const Kt=new Dh;Kt.setAnimationLoop(te),this.setAnimationLoop=function(j){kt=j},this.dispose=function(){}}}const ii=new dn,qg=new me;function Yg(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ch(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,ii.copy(y),ii.x*=-1,ii.y*=-1,ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),g.envMapRotation.value.setFromMatrix4(qg.makeRotationFromEuler(ii)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $g(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(m(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",g));const R=x.program;n.updateUBOMapping(v,R);const A=t.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function u(v){const x=h();v.__bindingPointIndex=x;const y=s.createBuffer(),R=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],y=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,P=y.length;A<P;A++){const L=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,b=L.length;E<b;E++){const U=L[E];if(f(U,A,E,R)===!0){const O=U.__offset,H=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let G=0;G<H.length;G++){const W=H[G],Q=_(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,O+Z,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,Z),Z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,y,R){const A=v.value,P=x+"_"+y;if(R[P]===void 0)return typeof A=="number"||typeof A=="boolean"?R[P]=A:R[P]=A.clone(),!0;{const L=R[P];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[P]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function m(v){const x=v.uniforms;let y=0;const R=16;for(let P=0,L=x.length;P<L;P++){const E=Array.isArray(x[P])?x[P]:[x[P]];for(let b=0,U=E.length;b<U;b++){const O=E[b],H=Array.isArray(O.value)?O.value:[O.value];for(let Z=0,G=H.length;Z<G;Z++){const W=H[Z],Q=_(W),$=y%R,st=$%Q.boundary,Et=$+st;y+=st,Et!==0&&R-Et<Q.storage&&(y+=R-Et),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=Q.storage}}}const A=y%R;return A>0&&(y+=R-A),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Zg{constructor(t={}){const{canvas:e=Hu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=Le;let A=0,P=0,L=null,E=-1,b=null;const U=new ye,O=new ye;let H=null;const Z=new Qt(0);let G=0,W=e.width,Q=e.height,$=1,st=null,Et=null;const Pt=new ye(0,0,W,Q),Ct=new ye(0,0,W,Q);let kt=!1;const te=new el;let Kt=!1,j=!1;const lt=new me,Dt=new w,Bt=new ye,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function ce(){return L===null?$:1}let I=n;function ht(T,z){return e.getContext(T,z)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vo}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){const z="webgl2";if(I=ht(z,T),I===null)throw ht(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let rt,at,it,bt,nt,ut,Jt,Zt,C,S,V,K,ct,J,Lt,Mt,It,Ot,pt,_t,Ht,zt,Tt,ne;function N(){rt=new r0(I),rt.init(),zt=new Vg(I,rt),at=new jm(I,rt,t,zt),it=new zg(I,rt),at.reversedDepthBuffer&&d&&it.buffers.depth.setReversed(!0),bt=new l0(I),nt=new wg,ut=new Bg(I,rt,it,nt,at,zt,bt),Jt=new t0(y),Zt=new s0(y),C=new pf(I),Tt=new Km(I,C),S=new a0(I,C,bt,Tt),V=new h0(I,S,C,bt),pt=new c0(I,at,ut),Mt=new Qm(nt),K=new Tg(y,Jt,Zt,rt,at,Tt,Mt),ct=new Yg(y,nt),J=new Rg,Lt=new Ug(rt),Ot=new Zm(y,Jt,Zt,it,V,f,l),It=new Og(y,V,at),ne=new $g(I,bt,at,it),_t=new Jm(I,rt,bt),Ht=new o0(I,rt,bt),bt.programs=K.programs,y.capabilities=at,y.extensions=rt,y.properties=nt,y.renderLists=J,y.shadowMap=It,y.state=it,y.info=bt}N();const xt=new Xg(y,I);this.xr=xt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(W,Q,!1))},this.getSize=function(T){return T.set(W,Q)},this.setSize=function(T,z,Y=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,Q=z,e.width=Math.floor(T*$),e.height=Math.floor(z*$),Y===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(W*$,Q*$).floor()},this.setDrawingBufferSize=function(T,z,Y){W=T,Q=z,$=Y,e.width=Math.floor(T*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(Pt)},this.setViewport=function(T,z,Y,q){T.isVector4?Pt.set(T.x,T.y,T.z,T.w):Pt.set(T,z,Y,q),it.viewport(U.copy(Pt).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(Ct)},this.setScissor=function(T,z,Y,q){T.isVector4?Ct.set(T.x,T.y,T.z,T.w):Ct.set(T,z,Y,q),it.scissor(O.copy(Ct).multiplyScalar($).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(T){it.setScissorTest(kt=T)},this.setOpaqueSort=function(T){st=T},this.setTransparentSort=function(T){Et=T},this.getClearColor=function(T){return T.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,Y=!0){let q=0;if(T){let B=!1;if(L!==null){const mt=L.texture.format;B=mt===Zo||mt===$o||mt===Yo}if(B){const mt=L.texture.type,wt=mt===Mn||mt===fi||mt===Ls||mt===Is||mt===Wo||mt===Xo,Ut=Ot.getClearColor(),Rt=Ot.getClearAlpha(),Wt=Ut.r,Xt=Ut.g,Vt=Ut.b;wt?(m[0]=Wt,m[1]=Xt,m[2]=Vt,m[3]=Rt,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Wt,_[1]=Xt,_[2]=Vt,_[3]=Rt,I.clearBufferiv(I.COLOR,0,_))}else q|=I.COLOR_BUFFER_BIT}z&&(q|=I.DEPTH_BUFFER_BIT),Y&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Ot.dispose(),J.dispose(),Lt.dispose(),nt.dispose(),Jt.dispose(),Zt.dispose(),V.dispose(),Tt.dispose(),ne.dispose(),K.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Ye),xt.removeEventListener("sessionend",Un),$e.stop()};function St(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=bt.autoReset,z=It.enabled,Y=It.autoUpdate,q=It.needsUpdate,B=It.type;N(),bt.autoReset=T,It.enabled=z,It.autoUpdate=Y,It.needsUpdate=q,It.type=B}function ft(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ot(T){const z=T.target;z.removeEventListener("dispose",ot),Ft(z)}function Ft(T){jt(T),nt.remove(T)}function jt(T){const z=nt.get(T).programs;z!==void 0&&(z.forEach(function(Y){K.releaseProgram(Y)}),T.isShaderMaterial&&K.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Y,q,B,mt){z===null&&(z=Nt);const wt=B.isMesh&&B.matrixWorld.determinant()<0,Ut=qs(T,z,Y,q,B);it.setMaterial(q,wt);let Rt=Y.index,Wt=1;if(q.wireframe===!0){if(Rt=S.getWireframeAttribute(Y),Rt===void 0)return;Wt=2}const Xt=Y.drawRange,Vt=Y.attributes.position;let M=Xt.start*Wt,D=(Xt.start+Xt.count)*Wt;mt!==null&&(M=Math.max(M,mt.start*Wt),D=Math.min(D,(mt.start+mt.count)*Wt)),Rt!==null?(M=Math.max(M,0),D=Math.min(D,Rt.count)):Vt!=null&&(M=Math.max(M,0),D=Math.min(D,Vt.count));const F=D-M;if(F<0||F===1/0)return;Tt.setup(B,q,Ut,Y,Rt);let k,X=_t;if(Rt!==null&&(k=C.get(Rt),X=Ht,X.setIndex(k)),B.isMesh)q.wireframe===!0?(it.setLineWidth(q.wireframeLinewidth*ce()),X.setMode(I.LINES)):X.setMode(I.TRIANGLES);else if(B.isLine){let tt=q.linewidth;tt===void 0&&(tt=1),it.setLineWidth(tt*ce()),B.isLineSegments?X.setMode(I.LINES):B.isLineLoop?X.setMode(I.LINE_LOOP):X.setMode(I.LINE_STRIP)}else B.isPoints?X.setMode(I.POINTS):B.isSprite&&X.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),X.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))X.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const tt=B._multiDrawStarts,yt=B._multiDrawCounts,gt=B._multiDrawCount,qt=Rt?C.get(Rt).bytesPerElement:1,ee=nt.get(q).currentProgram.getUniforms();for(let Yt=0;Yt<gt;Yt++)ee.setValue(I,"_gl_DrawID",Yt),X.render(tt[Yt]/qt,yt[Yt])}else if(B.isInstancedMesh)X.renderInstances(M,F,B.count);else if(Y.isInstancedBufferGeometry){const tt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,yt=Math.min(Y.instanceCount,tt);X.renderInstances(M,F,yt)}else X.render(M,F)};function ge(T,z,Y){T.transparent===!0&&T.side===Ie&&T.forceSinglePass===!1?(T.side=ke,T.needsUpdate=!0,On(T,z,Y),T.side=$n,T.needsUpdate=!0,On(T,z,Y),T.side=Ie):On(T,z,Y)}this.compile=function(T,z,Y=null){Y===null&&(Y=T),p=Lt.get(Y),p.init(z),x.push(p),Y.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==Y&&T.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const q=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const mt=B.material;if(mt)if(Array.isArray(mt))for(let wt=0;wt<mt.length;wt++){const Ut=mt[wt];ge(Ut,Y,B),q.add(Ut)}else ge(mt,Y,B),q.add(mt)}),p=x.pop(),q},this.compileAsync=function(T,z,Y=null){const q=this.compile(T,z,Y);return new Promise(B=>{function mt(){if(q.forEach(function(wt){nt.get(wt).currentProgram.isReady()&&q.delete(wt)}),q.size===0){B(T);return}setTimeout(mt,10)}rt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let he=null;function tn(T){he&&he(T)}function Ye(){$e.stop()}function Un(){$e.start()}const $e=new Dh;$e.setAnimationLoop(tn),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(T){he=T,xt.setAnimationLoop(T),T===null?$e.stop():$e.start()},xt.addEventListener("sessionstart",Ye),xt.addEventListener("sessionend",Un),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(z),z=xt.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,z,L),p=Lt.get(T,x.length),p.init(z),x.push(p),lt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),te.setFromProjectionMatrix(lt,xn,z.reversedDepth),j=this.localClippingEnabled,Kt=Mt.init(this.clippingPlanes,j),g=J.get(T,v.length),g.init(),v.push(g),xt.enabled===!0&&xt.isPresenting===!0){const mt=y.xr.getDepthSensingMesh();mt!==null&&Nn(mt,z,-1/0,y.sortObjects)}Nn(T,z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(st,Et),le=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,le&&Ot.addToRenderList(g,T),this.info.render.frame++,Kt===!0&&Mt.beginShadows();const Y=p.state.shadowsArray;It.render(Y,T,z),Kt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,B=g.transmissive;if(p.setupLights(),z.isArrayCamera){const mt=z.cameras;if(B.length>0)for(let wt=0,Ut=mt.length;wt<Ut;wt++){const Rt=mt[wt];Xs(q,B,T,Rt)}le&&Ot.render(T);for(let wt=0,Ut=mt.length;wt<Ut;wt++){const Rt=mt[wt];rs(g,T,Rt,Rt.viewport)}}else B.length>0&&Xs(q,B,T,z),le&&Ot.render(T),rs(g,T,z);L!==null&&P===0&&(ut.updateMultisampleRenderTarget(L),ut.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(y,T,z),Tt.resetDefaultState(),E=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],Kt===!0&&Mt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Nn(T,z,Y,q){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){q&&Bt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(lt);const wt=V.update(T),Ut=T.material;Ut.visible&&g.push(T,wt,Ut,Y,Bt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||te.intersectsObject(T))){const wt=V.update(T),Ut=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Bt.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Bt.copy(wt.boundingSphere.center)),Bt.applyMatrix4(T.matrixWorld).applyMatrix4(lt)),Array.isArray(Ut)){const Rt=wt.groups;for(let Wt=0,Xt=Rt.length;Wt<Xt;Wt++){const Vt=Rt[Wt],M=Ut[Vt.materialIndex];M&&M.visible&&g.push(T,wt,M,Y,Bt.z,Vt)}}else Ut.visible&&g.push(T,wt,Ut,Y,Bt.z,null)}}const mt=T.children;for(let wt=0,Ut=mt.length;wt<Ut;wt++)Nn(mt[wt],z,Y,q)}function rs(T,z,Y,q){const B=T.opaque,mt=T.transmissive,wt=T.transparent;p.setupLightsView(Y),Kt===!0&&Mt.setGlobalState(y.clippingPlanes,Y),q&&it.viewport(U.copy(q)),B.length>0&&Fn(B,z,Y),mt.length>0&&Fn(mt,z,Y),wt.length>0&&Fn(wt,z,Y),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Xs(T,z,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new mi(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Gs:Mn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const mt=p.state.transmissionRenderTarget[q.id],wt=q.viewport||U;mt.setSize(wt.z*y.transmissionResolutionScale,wt.w*y.transmissionResolutionScale);const Ut=y.getRenderTarget(),Rt=y.getActiveCubeFace(),Wt=y.getActiveMipmapLevel();y.setRenderTarget(mt),y.getClearColor(Z),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),le&&Ot.render(Y);const Xt=y.toneMapping;y.toneMapping=Yn;const Vt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Kt===!0&&Mt.setGlobalState(y.clippingPlanes,q),Fn(T,Y,q),ut.updateMultisampleRenderTarget(mt),ut.updateRenderTargetMipmap(mt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let M=!1;for(let D=0,F=z.length;D<F;D++){const k=z[D],X=k.object,tt=k.geometry,yt=k.material,gt=k.group;if(yt.side===Ie&&X.layers.test(q.layers)){const qt=yt.side;yt.side=ke,yt.needsUpdate=!0,_i(X,Y,q,tt,yt,gt),yt.side=qt,yt.needsUpdate=!0,M=!0}}M===!0&&(ut.updateMultisampleRenderTarget(mt),ut.updateRenderTargetMipmap(mt))}y.setRenderTarget(Ut,Rt,Wt),y.setClearColor(Z,G),Vt!==void 0&&(q.viewport=Vt),y.toneMapping=Xt}function Fn(T,z,Y){const q=z.isScene===!0?z.overrideMaterial:null;for(let B=0,mt=T.length;B<mt;B++){const wt=T[B],Ut=wt.object,Rt=wt.geometry,Wt=wt.group;let Xt=wt.material;Xt.allowOverride===!0&&q!==null&&(Xt=q),Ut.layers.test(Y.layers)&&_i(Ut,z,Y,Rt,Xt,Wt)}}function _i(T,z,Y,q,B,mt){T.onBeforeRender(y,z,Y,q,B,mt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,z,Y,q,T,mt),B.transparent===!0&&B.side===Ie&&B.forceSinglePass===!1?(B.side=ke,B.needsUpdate=!0,y.renderBufferDirect(Y,z,q,B,T,mt),B.side=$n,B.needsUpdate=!0,y.renderBufferDirect(Y,z,q,B,T,mt),B.side=Ie):y.renderBufferDirect(Y,z,q,B,T,mt),T.onAfterRender(y,z,Y,q,B,mt)}function On(T,z,Y){z.isScene!==!0&&(z=Nt);const q=nt.get(T),B=p.state.lights,mt=p.state.shadowsArray,wt=B.state.version,Ut=K.getParameters(T,B.state,mt,z,Y),Rt=K.getProgramCacheKey(Ut);let Wt=q.programs;q.environment=T.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(T.isMeshStandardMaterial?Zt:Jt).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",ot),Wt=new Map,q.programs=Wt);let Xt=Wt.get(Rt);if(Xt!==void 0){if(q.currentProgram===Xt&&q.lightsStateVersion===wt)return Kn(T,Ut),Xt}else Ut.uniforms=K.getUniforms(T),T.onBeforeCompile(Ut,y),Xt=K.acquireProgram(Ut,Rt),Wt.set(Rt,Xt),q.uniforms=Ut.uniforms;const Vt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Vt.clippingPlanes=Mt.uniform),Kn(T,Ut),q.needsLights=as(T),q.lightsStateVersion=wt,q.needsLights&&(Vt.ambientLightColor.value=B.state.ambient,Vt.lightProbe.value=B.state.probe,Vt.directionalLights.value=B.state.directional,Vt.directionalLightShadows.value=B.state.directionalShadow,Vt.spotLights.value=B.state.spot,Vt.spotLightShadows.value=B.state.spotShadow,Vt.rectAreaLights.value=B.state.rectArea,Vt.ltc_1.value=B.state.rectAreaLTC1,Vt.ltc_2.value=B.state.rectAreaLTC2,Vt.pointLights.value=B.state.point,Vt.pointLightShadows.value=B.state.pointShadow,Vt.hemisphereLights.value=B.state.hemi,Vt.directionalShadowMap.value=B.state.directionalShadowMap,Vt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Vt.spotShadowMap.value=B.state.spotShadowMap,Vt.spotLightMatrix.value=B.state.spotLightMatrix,Vt.spotLightMap.value=B.state.spotLightMap,Vt.pointShadowMap.value=B.state.pointShadowMap,Vt.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Xt,q.uniformsList=null,Xt}function kn(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Nr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Kn(T,z){const Y=nt.get(T);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function qs(T,z,Y,q,B){z.isScene!==!0&&(z=Nt),ut.resetTextureUnits();const mt=z.fog,wt=q.isMeshStandardMaterial?z.environment:null,Ut=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:pi,Rt=(q.isMeshStandardMaterial?Zt:Jt).get(q.envMap||wt),Wt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Vt=!!Y.morphAttributes.position,M=!!Y.morphAttributes.normal,D=!!Y.morphAttributes.color;let F=Yn;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(F=y.toneMapping);const k=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,X=k!==void 0?k.length:0,tt=nt.get(q),yt=p.state.lights;if(Kt===!0&&(j===!0||T!==b)){const Ve=T===b&&q.id===E;Mt.setState(q,T,Ve)}let gt=!1;q.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==yt.state.version||tt.outputColorSpace!==Ut||B.isBatchedMesh&&tt.batching===!1||!B.isBatchedMesh&&tt.batching===!0||B.isBatchedMesh&&tt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&tt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&tt.instancing===!1||!B.isInstancedMesh&&tt.instancing===!0||B.isSkinnedMesh&&tt.skinning===!1||!B.isSkinnedMesh&&tt.skinning===!0||B.isInstancedMesh&&tt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&tt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&tt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&tt.instancingMorph===!1&&B.morphTexture!==null||tt.envMap!==Rt||q.fog===!0&&tt.fog!==mt||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Mt.numPlanes||tt.numIntersection!==Mt.numIntersection)||tt.vertexAlphas!==Wt||tt.vertexTangents!==Xt||tt.morphTargets!==Vt||tt.morphNormals!==M||tt.morphColors!==D||tt.toneMapping!==F||tt.morphTargetsCount!==X)&&(gt=!0):(gt=!0,tt.__version=q.version);let qt=tt.currentProgram;gt===!0&&(qt=On(q,z,B));let ee=!1,Yt=!1,Pe=!1;const ue=qt.getUniforms(),Be=tt.uniforms;if(it.useProgram(qt.program)&&(ee=!0,Yt=!0,Pe=!0),q.id!==E&&(E=q.id,Yt=!0),ee||b!==T){it.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ue.setValue(I,"projectionMatrix",T.projectionMatrix),ue.setValue(I,"viewMatrix",T.matrixWorldInverse);const Xe=ue.map.cameraPosition;Xe!==void 0&&Xe.setValue(I,Dt.setFromMatrixPosition(T.matrixWorld)),at.logarithmicDepthBuffer&&ue.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ue.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Yt=!0,Pe=!0)}if(B.isSkinnedMesh){ue.setOptional(I,B,"bindMatrix"),ue.setOptional(I,B,"bindMatrixInverse");const Ve=B.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ue.setValue(I,"boneTexture",Ve.boneTexture,ut))}B.isBatchedMesh&&(ue.setOptional(I,B,"batchingTexture"),ue.setValue(I,"batchingTexture",B._matricesTexture,ut),ue.setOptional(I,B,"batchingIdTexture"),ue.setValue(I,"batchingIdTexture",B._indirectTexture,ut),ue.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&ue.setValue(I,"batchingColorTexture",B._colorsTexture,ut));const en=Y.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&pt.update(B,Y,qt),(Yt||tt.receiveShadow!==B.receiveShadow)&&(tt.receiveShadow=B.receiveShadow,ue.setValue(I,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Be.envMap.value=Rt,Be.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(Be.envMapIntensity.value=z.environmentIntensity),Yt&&(ue.setValue(I,"toneMappingExposure",y.toneMappingExposure),tt.needsLights&&Me(Be,Pe),mt&&q.fog===!0&&ct.refreshFogUniforms(Be,mt),ct.refreshMaterialUniforms(Be,q,$,Q,p.state.transmissionRenderTarget[T.id]),Nr.upload(I,kn(tt),Be,ut)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Nr.upload(I,kn(tt),Be,ut),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ue.setValue(I,"center",B.center),ue.setValue(I,"modelViewMatrix",B.modelViewMatrix),ue.setValue(I,"normalMatrix",B.normalMatrix),ue.setValue(I,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ve=q.uniformsGroups;for(let Xe=0,ta=Ve.length;Xe<ta;Xe++){const Jn=Ve[Xe];ne.update(Jn,qt),ne.bind(Jn,qt)}}return qt}function Me(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function as(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,z,Y){const q=nt.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),nt.get(T.texture).__webglTexture=z,nt.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const Y=nt.get(T);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};const Ys=I.createFramebuffer();this.setRenderTarget=function(T,z=0,Y=0){L=T,A=z,P=Y;let q=!0,B=null,mt=!1,wt=!1;if(T){const Rt=nt.get(T);if(Rt.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Rt.__webglFramebuffer===void 0)ut.setupRenderTarget(T);else if(Rt.__hasExternalTextures)ut.rebindTextures(T,nt.get(T.texture).__webglTexture,nt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Vt=T.depthTexture;if(Rt.__boundDepthTexture!==Vt){if(Vt!==null&&nt.has(Vt)&&(T.width!==Vt.image.width||T.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(T)}}const Wt=T.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(wt=!0);const Xt=nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xt[z])?B=Xt[z][Y]:B=Xt[z],mt=!0):T.samples>0&&ut.useMultisampledRTT(T)===!1?B=nt.get(T).__webglMultisampledFramebuffer:Array.isArray(Xt)?B=Xt[Y]:B=Xt,U.copy(T.viewport),O.copy(T.scissor),H=T.scissorTest}else U.copy(Pt).multiplyScalar($).floor(),O.copy(Ct).multiplyScalar($).floor(),H=kt;if(Y!==0&&(B=Ys),it.bindFramebuffer(I.FRAMEBUFFER,B)&&q&&it.drawBuffers(T,B),it.viewport(U),it.scissor(O),it.setScissorTest(H),mt){const Rt=nt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Rt.__webglTexture,Y)}else if(wt){const Rt=z;for(let Wt=0;Wt<T.textures.length;Wt++){const Xt=nt.get(T.textures[Wt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Wt,Xt.__webglTexture,Y,Rt)}}else if(T!==null&&Y!==0){const Rt=nt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rt.__webglTexture,Y)}E=-1},this.readRenderTargetPixels=function(T,z,Y,q,B,mt,wt,Ut=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt){it.bindFramebuffer(I.FRAMEBUFFER,Rt);try{const Wt=T.textures[Ut],Xt=Wt.format,Vt=Wt.type;if(!at.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-q&&Y>=0&&Y<=T.height-B&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ut),I.readPixels(z,Y,q,B,zt.convert(Xt),zt.convert(Vt),mt))}finally{const Wt=L!==null?nt.get(L).__webglFramebuffer:null;it.bindFramebuffer(I.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(T,z,Y,q,B,mt,wt,Ut=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt)if(z>=0&&z<=T.width-q&&Y>=0&&Y<=T.height-B){it.bindFramebuffer(I.FRAMEBUFFER,Rt);const Wt=T.textures[Ut],Xt=Wt.format,Vt=Wt.type;if(!at.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const M=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,M),I.bufferData(I.PIXEL_PACK_BUFFER,mt.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ut),I.readPixels(z,Y,q,B,zt.convert(Xt),zt.convert(Vt),0);const D=L!==null?nt.get(L).__webglFramebuffer:null;it.bindFramebuffer(I.FRAMEBUFFER,D);const F=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Wu(I,F,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,M),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,mt),I.deleteBuffer(M),I.deleteSync(F),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,Y=0){const q=Math.pow(2,-Y),B=Math.floor(T.image.width*q),mt=Math.floor(T.image.height*q),wt=z!==null?z.x:0,Ut=z!==null?z.y:0;ut.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,wt,Ut,B,mt),it.unbindTexture()};const $s=I.createFramebuffer(),Qr=I.createFramebuffer();this.copyTextureToTexture=function(T,z,Y=null,q=null,B=0,mt=null){mt===null&&(B!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),mt=B,B=0):mt=0);let wt,Ut,Rt,Wt,Xt,Vt,M,D,F;const k=T.isCompressedTexture?T.mipmaps[mt]:T.image;if(Y!==null)wt=Y.max.x-Y.min.x,Ut=Y.max.y-Y.min.y,Rt=Y.isBox3?Y.max.z-Y.min.z:1,Wt=Y.min.x,Xt=Y.min.y,Vt=Y.isBox3?Y.min.z:0;else{const en=Math.pow(2,-B);wt=Math.floor(k.width*en),Ut=Math.floor(k.height*en),T.isDataArrayTexture?Rt=k.depth:T.isData3DTexture?Rt=Math.floor(k.depth*en):Rt=1,Wt=0,Xt=0,Vt=0}q!==null?(M=q.x,D=q.y,F=q.z):(M=0,D=0,F=0);const X=zt.convert(z.format),tt=zt.convert(z.type);let yt;z.isData3DTexture?(ut.setTexture3D(z,0),yt=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ut.setTexture2DArray(z,0),yt=I.TEXTURE_2D_ARRAY):(ut.setTexture2D(z,0),yt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const gt=I.getParameter(I.UNPACK_ROW_LENGTH),qt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ee=I.getParameter(I.UNPACK_SKIP_PIXELS),Yt=I.getParameter(I.UNPACK_SKIP_ROWS),Pe=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,k.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,k.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vt);const ue=T.isDataArrayTexture||T.isData3DTexture,Be=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const en=nt.get(T),Ve=nt.get(z),Xe=nt.get(en.__renderTarget),ta=nt.get(Ve.__renderTarget);it.bindFramebuffer(I.READ_FRAMEBUFFER,Xe.__webglFramebuffer),it.bindFramebuffer(I.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let Jn=0;Jn<Rt;Jn++)ue&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nt.get(T).__webglTexture,B,Vt+Jn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nt.get(z).__webglTexture,mt,F+Jn)),I.blitFramebuffer(Wt,Xt,wt,Ut,M,D,wt,Ut,I.DEPTH_BUFFER_BIT,I.NEAREST);it.bindFramebuffer(I.READ_FRAMEBUFFER,null),it.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||nt.has(T)){const en=nt.get(T),Ve=nt.get(z);it.bindFramebuffer(I.READ_FRAMEBUFFER,$s),it.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qr);for(let Xe=0;Xe<Rt;Xe++)ue?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,en.__webglTexture,B,Vt+Xe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,en.__webglTexture,B),Be?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ve.__webglTexture,mt,F+Xe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ve.__webglTexture,mt),B!==0?I.blitFramebuffer(Wt,Xt,wt,Ut,M,D,wt,Ut,I.COLOR_BUFFER_BIT,I.NEAREST):Be?I.copyTexSubImage3D(yt,mt,M,D,F+Xe,Wt,Xt,wt,Ut):I.copyTexSubImage2D(yt,mt,M,D,Wt,Xt,wt,Ut);it.bindFramebuffer(I.READ_FRAMEBUFFER,null),it.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Be?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(yt,mt,M,D,F,wt,Ut,Rt,X,tt,k.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(yt,mt,M,D,F,wt,Ut,Rt,X,k.data):I.texSubImage3D(yt,mt,M,D,F,wt,Ut,Rt,X,tt,k):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,mt,M,D,wt,Ut,X,tt,k.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,mt,M,D,k.width,k.height,X,k.data):I.texSubImage2D(I.TEXTURE_2D,mt,M,D,wt,Ut,X,tt,k);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pe),mt===0&&z.generateMipmaps&&I.generateMipmap(yt),it.unbindTexture()},this.initRenderTarget=function(T){nt.get(T).__webglFramebuffer===void 0&&ut.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ut.setTextureCube(T,0):T.isData3DTexture?ut.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ut.setTexture2DArray(T,0):ut.setTexture2D(T,0),it.unbindTexture()},this.resetState=function(){A=0,P=0,L=null,it.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}class Kg extends dh{constructor(){super();const t=new Zn;t.deleteAttribute("uv");const e=new Se({side:ke}),n=new Se,i=new Vs(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new fe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Gi(t,n,6),o=new be;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new fe(t,zi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new fe(t,zi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new fe(t,zi(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new fe(t,zi(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const d=new fe(t,zi(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new fe(t,zi(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function zi(s){return new Qd({color:0,emissive:16777215,emissiveIntensity:s})}function Jg(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new pe;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const h=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Pc(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][d]);const m=Pc(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Pc(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new ze(a,e,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<e;m++){const _=u.getComponent(d,m);o.setComponent(d+h,m,_)}}else a.set(u.array,l);l+=u.count*e}return i!==void 0&&(o.gpuType=i),o}function jg(s){const t=[],e=[],n=[],i=[],r=[],a=new _e;a.name="Hostomel airport",s.add(a);let o=14261;const l=()=>(o=o*1664525+1013904223>>>0,o/4294967296),c=(M,D={})=>new Se({color:M,roughness:.94,...D}),u=new Ch;function h(M){const D={};for(const[F,k]of[["map","diff"],["normalMap","nor_gl"],["roughnessMap","rough"]]){const X=u.load(`/energetic-peace-play/assets/world/${M}_${k}_1k.jpg`);X.wrapS=X.wrapT=Ji,X.anisotropy=8,F==="map"&&(X.colorSpace=Le),D[F]=X}return D}const d={asphalt:h("asphalt_02"),concrete:h("concrete_floor_02"),corrugated:h("corrugated_iron")};function f(M,D,F,k={}){const X=c(M,{...D,normalScale:new et(.52,.52),...k});return X.userData.metreTile=F,X}const m={concrete:f(10200488,d.concrete,3.5),darkConcrete:f(7043197,d.concrete,3.5),olive:c(4344376),oliveLight:c(6910299),metal:c(6647398,{metalness:.45,roughness:.7}),darkMetal:c(3160371,{metalness:.55,roughness:.65}),rust:c(7492413),rubber:c(1449242),glass:c(1518123,{metalness:.6,roughness:.23}),window:c(8952202,{emissive:7832936,emissiveIntensity:.22,metalness:.5,roughness:.35}),cream:c(12238256),white:c(13159353),yellow:c(13019712),blue:c(4414832),sand:c(7828573),bark:c(3226420),leaf:c(3492667),lamp:c(15257221,{emissive:16761436,emissiveIntensity:2.5})},_=new Zn(1,1,1),g=new gn(1,16,12);function p(M,D,F=a,k=!0){const X=new fe(M,D);return X.castShadow=k,X.receiveShadow=!0,F.add(X),X}function v(M,D,F,k,X,tt,yt,gt=a,qt=!1){const ee=p(_,yt,gt);return ee.position.set(M,D,F),ee.scale.set(k,X,tt),qt&&t.push(new sn(new w(M-k/2,D-X/2,F-tt/2),new w(M+k/2,D+X/2,F+tt/2))),ee}function x(M,D,F,k,X=a,tt=8){const yt=new w(...M),gt=new w(...D),qt=gt.clone().sub(yt),ee=p(new Te(F,F,qt.length(),tt),k,X);return ee.position.copy(yt).add(gt).multiplyScalar(.5),ee.quaternion.setFromUnitVectors(new w(0,1,0),qt.normalize()),ee}function y(M,D,F,k,X,tt,yt,gt=a){const qt=p(g,yt,gt);return qt.position.set(M,D,F),qt.scale.set(k,X,tt),qt}function R(M,D,F){const k=document.createElement("canvas");k.width=M,k.height=D,F(k.getContext("2d"),M,D);const X=new Zr(k);return X.colorSpace=Le,X.anisotropy=8,X}const A=R(512,512,(M,D,F)=>{M.fillStyle="#616858",M.fillRect(0,0,D,F);for(let k=0;k<2e4;k++){const X=44+l()*50;M.fillStyle=`rgba(${X},${X+9},${X-7},.5)`,M.fillRect(l()*D,l()*F,1+l()*5,1+l()*5)}});A.wrapS=A.wrapT=Ji,A.repeat.set(90,90);const P=p(new cn(1100,1100),c(9477019,{map:A}),a,!1);P.rotation.x=-Math.PI/2;const L=p(new cn(126,215),f(10530227,d.concrete,4,{metalness:.12,roughness:.38,normalScale:new et(.28,.28)}),a,!1);L.rotation.x=-Math.PI/2,L.position.set(-1,.018,-19),v(3,.025,-21,26,.03,310,f(8621974,d.asphalt,4,{metalness:.08,roughness:.36,normalScale:new et(.45,.45)}),a);const E=c(4870475);for(let M=-116;M<87;M+=13)v(-2,.041,M,122,.008,.065,E);for(let M=-60;M<=60;M+=13)v(M,.042,-15,.055,.008,207,E);const b=c(12172456),U=c(10721108);for(let M=-157;M<110;M+=17)v(3,.054,M,.5,.012,8.8,b);for(const M of[-8.4,14.4])v(M,.052,-25,.25,.012,275,b);for(let M=-5;M<13;M+=2.8)v(M,.058,55,1.25,.012,13,b);v(-21,.055,-14,.18,.012,94,U),v(27,.055,-31,.18,.012,127,U),v(-40,.056,-51,41,.013,.16,U);const O=R(256,256,(M,D,F)=>{M.translate(D/2,F/2),M.beginPath();for(let tt=0;tt<=48;tt++){const yt=tt/48*Math.PI*2,gt=1+.11*Math.sin(yt*5+.7)+.08*Math.cos(yt*9-.4),qt=Math.cos(yt)*116*gt,ee=Math.sin(yt)*89*gt;tt?M.lineTo(qt,ee):M.moveTo(qt,ee)}M.closePath(),M.clip();const k=M.createLinearGradient(0,-90,0,90);k.addColorStop(0,"rgba(145,168,178,.38)"),k.addColorStop(.52,"rgba(105,127,138,.66)"),k.addColorStop(1,"rgba(60,76,84,.13)"),M.fillStyle=k,M.fillRect(-128,-128,D,F);for(let tt=0;tt<24;tt++){const yt=(l()-.5)*150;M.strokeStyle=`rgba(220,234,239,${.025+l()*.08})`,M.lineWidth=.5+l()*2,M.beginPath(),M.moveTo((l()-.5)*180,yt),M.lineTo((l()-.5)*180,yt+l()*3),M.stroke()}M.globalCompositeOperation="destination-in",M.scale(1,.77);const X=M.createRadialGradient(0,0,55,0,0,150);X.addColorStop(0,"rgba(255,255,255,1)"),X.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=X,M.fillRect(-128,-180,256,360)}),H=new Ah({map:O,metalness:.24,roughness:.14,transparent:!0,opacity:.75,depthWrite:!1,side:Ie}),Z=[[-11,25,8,2.7],[3,18,10,3],[15,8,6,2.5],[-5,-7,8,3.5],[21,-21,7,2.8],[-24,-33,9,3],[-37,-55,6,2.2],[10,-61,8,3],[-22,-74,5,2.1]];for(let M=0;M<22;M++)Z.push([(l()-.5)*105,l()*155-98,2.5+l()*7,1.2+l()*2.8]);for(const[M,D,F,k]of Z){const X=p(new cn(F,k),H,a,!1);X.rotation.set(-Math.PI/2,0,(l()-.5)*.8),X.position.set(M,.083,D),X.receiveShadow=!1}const G=R(256,256,(M,D,F)=>{const k=M.createRadialGradient(D/2,F/2,5,D/2,F/2,124);k.addColorStop(0,"rgba(8,13,10,.7)"),k.addColorStop(.5,"rgba(11,16,12,.42)"),k.addColorStop(1,"rgba(12,17,12,0)"),M.fillStyle=k,M.fillRect(0,0,D,F)}),W=new di({map:G,transparent:!0,depthWrite:!1,opacity:.7});for(let M=0;M<25;M++){const D=p(new cn(3+l()*10,2+l()*10),W,a,!1);D.rotation.x=-Math.PI/2,D.rotation.z=l()*6,D.position.set((l()-.5)*103,.062,l()*173-111)}const Q=R(128,128,(M,D,F)=>{const k=M.createRadialGradient(D/2,F/2,4,D/2,F/2,D/2);k.addColorStop(0,"rgba(11,16,12,.8)"),k.addColorStop(.48,"rgba(11,16,12,.48)"),k.addColorStop(1,"rgba(11,16,12,0)"),M.fillStyle=k,M.fillRect(0,0,D,F)}),$=new di({map:Q,transparent:!0,depthWrite:!1,opacity:.6,polygonOffset:!0,polygonOffsetFactor:-1});function st(M,D,F,k,X=0){const tt=p(new cn(F,k),$,a,!1);return tt.rotation.set(-Math.PI/2,0,X),tt.position.set(M,.079,D),tt}st(-9,32,7.8,15,-.32),st(-36,-30,10,27,-.55),st(0,30,2.2,1.7),st(18,-29,2.2,1.7),st(-22,4,11,4.7),st(41,5,4.7,11),st(39,-5,4.7,11),st(-56,-30,4.7,11),st(40,-34,29,28),st(45,-65,15,15);function Et(M,D,F,k,X="#ddd8bd",tt="#323e35"){const yt=R(1024,256,(gt,qt,ee)=>{gt.fillStyle=tt,gt.fillRect(0,0,qt,ee),gt.strokeStyle=X,gt.lineWidth=4,gt.strokeRect(10,10,qt-20,ee-20),gt.fillStyle=X,gt.textAlign="center",gt.textBaseline="middle",gt.font=`900 ${D?88:112}px Arial`,gt.fillText(M,qt/2,D?105:132,qt-64),D&&(gt.font="500 33px Arial",gt.fillText(D,qt/2,195,qt-64))});return p(new cn(F,k),new Se({map:yt,roughness:.9,emissive:X,emissiveIntensity:.055}))}const Pt=Et("33","",9,7,"#b9bca8","#4d544e");Pt.rotation.x=-Math.PI/2,Pt.position.set(3,.067,36);const Ct=-36,kt=-78,te=43,Kt=40,j=7.5,lt=11.5,Dt=c(10596001,{...d.corrugated,side:Ie,metalness:.6,roughness:.86,normalScale:new et(.7,.7)}),Bt=[],Nt=[],le=[],ce=40;for(let M=0;M<=ce;M++){const D=M/ce*Math.PI,F=Math.cos(D)*te/2,k=j+Math.sin(D)*lt;if(Bt.push(F,k,-Kt/2,F,k,Kt/2),le.push(M/ce*17,0,M/ce*17,10),M<ce){const X=M*2;Nt.push(X,X+1,X+2,X+1,X+3,X+2)}}const I=new pe;I.setAttribute("position",new re(Bt,3)),I.setAttribute("uv",new re(le,2)),I.setIndex(Nt),I.computeVertexNormals(),p(I,Dt).position.set(Ct,0,kt),v(Ct-te/2,j/2,kt,.65,j,Kt,m.concrete,a,!0),v(Ct+te/2,j/2,kt,.65,j,Kt,m.concrete,a,!0),v(Ct,3.75,kt-Kt/2,te,7.5,.8,m.darkConcrete,a,!0);const rt=new Hi;rt.moveTo(-te/2,j);for(let M=ce;M>=0;M--){const D=M/ce*Math.PI;rt.lineTo(Math.cos(D)*te/2,j+Math.sin(D)*lt)}rt.lineTo(-te/2,j),p(new ol(rt),m.darkConcrete).position.set(Ct,0,kt-Kt/2+.05),v(Ct,.045,kt,te-1,.045,Kt,f(11450281,d.concrete,4));for(let M=-Kt/2+.3;M<=Kt/2;M+=5){const D=[];for(let F=0;F<=32;F++){const k=F/32*Math.PI;D.push(new w(Math.cos(k)*(te/2-.2)+Ct,j+Math.sin(k)*lt-.1,kt+M))}p(new qr(new Lo(D),32,.11,5,!1),m.darkMetal),x([Ct-te/2+.25,0,kt+M],[Ct-te/2+.25,j,kt+M],.14,m.darkMetal),x([Ct+te/2-.25,0,kt+M],[Ct+te/2-.25,j,kt+M],.14,m.darkMetal)}for(let M=1;M<17;M++){const D=M/17*Math.PI,F=Ct+Math.cos(D)*te/2,k=j+Math.sin(D)*lt+.035;x([F,k,kt-Kt/2],[F,k,kt+Kt/2],.032,m.cream,a,4)}x([Ct-20.7,8,kt+19.65],[Ct+20.7,8,kt+19.65],.18,m.darkMetal);for(let M=-20;M<20;M+=5)x([Ct+M,8,kt+19.6],[Ct+M+2.5,10.1,kt+19.6],.065,m.metal),x([Ct+M+2.5,10.1,kt+19.6],[Ct+M+5,8,kt+19.6],.065,m.metal);Et("ГОСТОМЕЛЬ","АНТОНОВ  /  ВАНТАЖНИЙ ТЕРМІНАЛ",14,3.25).position.set(Ct,13.2,kt+Kt/2+.11);for(const M of[Ct-16,Ct+16]){v(M,6.5,kt+19.4,1.2,.22,.6,m.lamp);const D=new Vs(16761974,18,19,2);D.position.set(M,5.8,kt+17),a.add(D)}v(Ct-18.5,3,kt+19.6,4.4,6,.3,m.olive),v(Ct+18.5,3,kt+19.6,4.4,6,.3,m.olive);for(let M=Ct-15;M<Ct+18;M+=5)v(M,1.35,kt-17.6,3.9,2.7,2.1,m.olive,a,!0),v(M,2.72,kt-17.6,4,.1,2.2,m.metal);v(-26,.8,-80,3.8,.14,1.6,m.darkMetal);for(const M of[-27.55,-24.45])for(const D of[-80.6,-79.4])v(M,.4,D,.08,.8,.08,m.metal);v(-26,.884,-79.8,.48,.018,.6,m.white),v(-26.3,.89,-80.1,.5,.014,.62,m.cream).rotation.y=.15,x([-24.7,.87,-80],[-24.7,1.5,-80],.04,m.darkMetal),v(-24.7,1.5,-80,.38,.06,.22,m.lamp),v(-27.2,1.1,-80.1,.7,.42,.42,m.olive),v(-27.2,1.16,-79.88,.46,.2,.02,c(9615268,{emissive:8510369,emissiveIntensity:.72})),x([-27.45,1.3,-80.2],[-27.45,3.1,-80.2],.02,m.darkMetal),v(40,4.3,-34,23,8.6,22,m.concrete,a,!0),v(40,8.72,-34,24.4,.28,23.5,m.darkMetal),v(40,.35,-34,24,.7,23,m.darkConcrete);for(let M=30.5;M<51;M+=3.1)for(const D of[3.1,6.3])v(M,D,-22.97,2.05,1.55,.045,m.glass),v(M,D,-22.92,.08,1.65,.08,m.metal);for(let M=-42;M<-24;M+=3.8)for(const D of[3.1,6.3])v(28.46,D,M,.055,1.7,2.4,m.glass);v(40,1.45,-22.86,3.5,2.9,.14,m.darkMetal),v(40,1.85,-22.75,2.8,1.5,.06,m.glass),v(40,3.2,-20.6,7.5,.22,4.5,m.metal);for(const M of[36.5,43.5])x([M,0,-18.5],[M,3.15,-18.5],.09,m.darkMetal);Et("ТЕРМІНАЛ 02","ГОСТОМЕЛЬ · UKKM",9.8,2.3).position.set(40,7.7,-22.82);for(let M=0;M<4;M++)v(33+M*4.7,9.15,-36,2.3,.7,2.8,m.metal),x([33+M*4.7,9,-40],[33+M*4.7,10.8,-40],.22,m.metal);const nt=45,ut=-65;v(nt,10.5,ut,6.5,21,7,m.concrete,a,!0),v(nt,2.5,ut,10.5,5,10.5,m.darkConcrete,a,!0);for(let M=6;M<20;M+=3.2)v(nt,M,ut+3.53,1,1.5,.06,m.glass);v(nt,21.25,ut,13.4,.6,12.2,m.darkMetal);const Jt=p(new Te(6.1,6.8,4.2,8),m.glass);Jt.position.set(nt,23.6,ut),Jt.rotation.y=Math.PI/8;const Zt=p(new Te(7.1,7.1,.55,8),m.cream);Zt.position.set(nt,26,ut),Zt.rotation.y=Math.PI/8;for(let M=0;M<8;M++){const D=M/8*Math.PI*2+Math.PI/8;x([nt+Math.cos(D)*6.8,21.5,ut+Math.sin(D)*6.8],[nt+Math.cos(D)*6.1,25.8,ut+Math.sin(D)*6.1],.11,m.metal)}for(let M=0;M<4;M++){const D=ut-5.9+M*3.9;x([nt-6.7,21.5,D],[nt-6.7,22.5,D],.04,m.metal),x([nt+6.7,21.5,D],[nt+6.7,22.5,D],.04,m.metal)}x([nt-6.7,22.5,ut-5.9],[nt-6.7,22.5,ut+5.9],.04,m.metal),x([nt+6.7,22.5,ut-5.9],[nt+6.7,22.5,ut+5.9],.04,m.metal),x([nt,26.2,ut],[nt,33,ut],.07,m.darkMetal),x([nt-2,28.2,ut],[nt+2,28.2,ut],.045,m.metal),y(nt,33.05,ut,.12,.12,.12,c(12008485,{emissive:16723984,emissiveIntensity:2}));const C=new _e;C.position.set(nt-3,27,ut),a.add(C),v(0,.4,0,2.8,.7,.3,m.metal,C),r.push({object:C,speed:.3}),v(22.4,.92,-34.7,1.4,1.84,.82,m.olive);const S=c(9615268,{emissive:8510369,emissiveIntensity:.72});v(22.4,1.4,-34.26,.88,.5,.04,S),v(22.4,.87,-34.22,.9,.09,.22,m.darkMetal),x([22.8,1.83,-34.7],[22.8,4.5,-34.7],.028,m.darkMetal),Et("ЗВ’ЯЗОК","СТАНЦІЯ 07",1.3,.36,"#c4c29b","#3c4439").position.set(22.4,.48,-34.27),v(32,.87,-48.15,1.15,1.74,.7,m.darkMetal),v(32,1.23,-47.78,.83,.49,.035,S),v(32,.79,-47.73,.88,.07,.25,m.metal),Et("АРХІВ","ДОСТУП  /  04",1.1,.32,"#ded39e","#394239").position.set(32,.4,-47.78);const ct=new Ps(new Hi([new et(-.62,0),new et(.62,0),new et(.62,.25),new et(.22,.8),new et(.2,1.12),new et(-.2,1.12),new et(-.22,.8),new et(-.62,.25)]),{depth:4.5,bevelEnabled:!1});ct.translate(0,0,-2.25);function J(M,D,F=0){const k=p(ct,m.concrete);k.position.set(M,.04,D),k.rotation.y=F;const X=Math.abs(Math.sin(F))>.7;t.push(new sn(new w(M-(X?2.3:.65),0,D-(X?.65:2.3)),new w(M+(X?2.3:.65),1.17,D+(X?.65:2.3))));for(const tt of[-1.45,1.45]){const yt=v(0,.72,tt,.018,.2,.72,m.yellow,k);yt.position.x=.272;const gt=yt.clone();gt.position.x=-.272,k.add(gt)}}for(const[M,D,F]of[[-3,12,Math.PI/2],[14,4,Math.PI/2],[-13,-4,.1],[6,-20,Math.PI/2],[19,-48,Math.PI/2],[-8,-41,0],[-3,-62,Math.PI/2],[16,-78,Math.PI/2],[-45,-3,0]])J(M,D,F);function Lt(M,D,F,k=!1){const X=new _e;X.position.set(M,0,D),X.rotation.y=k?Math.PI/2:0,a.add(X);const tt=f(F,d.corrugated,2.8,{metalness:.35,roughness:.9,normalScale:new et(.35,.35)});v(0,1.45,0,2.7,2.9,8.7,tt,X);for(let qt=-4.2;qt<=4.2;qt+=.43)v(-1.37,1.45,qt,.07,2.65,.07,tt,X),v(1.37,1.45,qt,.07,2.65,.07,tt,X);for(const qt of[-1.2,1.2])for(const ee of[-4.3,4.3])v(qt,1.45,ee,.16,2.95,.16,m.rust,X);for(const qt of[-.75,.75])x([qt,.25,4.39],[qt,2.6,4.39],.028,m.metal,X);const yt=k?4.4:1.4,gt=k?1.4:4.4;t.push(new sn(new w(M-yt,0,D-gt),new w(M+yt,2.95,D+gt)))}Lt(-22,4,6712913,!0),Lt(41,5,6838855),Lt(39,-5,4742240),Lt(-56,-30,4740934);function Mt(M,D,F=1,k=a){const X=new _e;X.position.set(M,0,D),X.scale.setScalar(F),k.add(X),v(0,.55,0,1.3,1.1,1.1,m.olive,X);for(const tt of[-.45,.45])v(tt,.56,0,.08,1.15,1.16,m.darkMetal,X);return v(0,1.12,0,1.4,.08,1.17,m.oliveLight,X),v(0,.6,.558,.42,.18,.02,m.cream,X),X}for(const[M,D,F]of[[-18,7,1],[-19.5,7,1],[-18.8,8.4,1],[32,-14,1.3],[-10,-21,1.2],[-47,-67,1.2],[-45,-67,1.2],[-47,-65,1],[13,-52,1.1]])Mt(M,D,F);function It(M,D){const F=new _e;F.position.set(M,0,D),a.add(F),v(0,.42,0,1.35,.84,.85,m.yellow,F),v(0,.86,0,1.4,.09,.89,m.darkMetal,F);for(const k of[-.43,.43])v(k,.43,.438,.12,.9,.035,m.darkMetal,F);return v(0,.48,.457,.39,.09,.016,m.cream,F),v(0,.48,.459,.09,.39,.016,m.cream,F),F}It(-4,30),It(18,-29),It(-19,-72);const Ot=new gn(1,8,5);function pt(M,D,F=0){const k=new _e;k.position.set(M,0,D),k.rotation.y=F,a.add(k);for(let tt=0;tt<3;tt++)for(let yt=0;yt<6;yt++){const gt=p(Ot,m.sand,k);gt.position.set((yt-2.5)*.74+tt%2*.3,.19+tt*.28,(l()-.5)*.12),gt.scale.set(.43,.21,.34),gt.rotation.y=(l()-.5)*.1}const X=Math.abs(Math.cos(F))>.7;t.push(new sn(new w(M-(X?2.6:.5),0,D-(X?.5:2.6)),new w(M+(X?2.6:.5),.96,D+(X?.5:2.6))))}pt(-12,23),pt(21,-13),pt(-18,-46),pt(9,-85);const _t=new _e;_t.position.set(-36,.1,-30),_t.rotation.y=-.55,a.add(_t);const Ht=p(new Te(1.48,1.48,19,24),m.cream,_t);Ht.rotation.x=Math.PI/2,Ht.position.y=3,y(0,3,-9.45,1.47,1.46,2.7,m.cream,_t),y(0,3,9.3,1.45,1.45,2,m.cream,_t);const zt=y(0,3.65,-10.35,1.17,.7,1.35,m.glass,_t);zt.rotation.x=-.1;for(const M of[-1.47,1.47]){v(M,3.3,0,.03,.31,18.5,m.blue,_t),v(M*1.001,3.57,0,.034,.12,18.5,m.yellow,_t);for(let D=-6;D<=6;D+=1.5)v(M*1.005,3.95,D,.035,.36,.54,m.glass,_t)}function Tt(M,D,F,k){const X=new Hi(M.map(gt=>new et(gt[0],gt[1]))),tt=new Ps(X,{depth:D,bevelEnabled:!1}),yt=p(tt,F,k);return yt.rotation.x=-Math.PI/2,yt}const ne=Tt([[-1.2,3],[-15,-.5],[-15.5,-2.3],[-1.2,-1],[1.2,-1],[15.5,-2.3],[15,-.5],[1.2,3]],.18,m.cream,_t);ne.position.y=3.55;const N=Tt([[-.7,-8],[-6,-10],[-6,-11.1],[6,-11.1],[6,-10],[.7,-8]],.13,m.cream,_t);N.position.y=4.4;const xt=new Hi([new et(7.2,3.8),new et(10.8,3.8),new et(10.1,9.1),new et(8.8,9.1)]),St=p(new Ps(xt,{depth:.22,bevelEnabled:!1}),m.cream,_t);St.rotation.y=-Math.PI/2,St.position.x=.11,v(0,7.9,9.6,.245,.48,1.2,m.blue,_t);for(const M of[-9,-4.8,4.8,9]){y(M,3.2,-.5,.69,.69,2.3,m.cream,_t);const D=p(new Te(.5,.56,.3,12),m.darkMetal,_t);D.rotation.x=Math.PI/2,D.position.set(M,3.2,-2.6);const F=new _e;F.position.set(M,3.2,-2.82),F.rotation.z=M,_t.add(F);for(let k=0;k<4;k++){const X=v(0,.98,0,.18,1.85,.07,m.darkMetal,F);X.rotation.z=k*Math.PI/2,X.position.set(Math.sin(-k*Math.PI/2)*.98,Math.cos(k*Math.PI/2)*.98,0)}y(M,3.2,-2.9,.22,.22,.4,m.darkMetal,_t)}for(const[M,D]of[[-2,3],[2,3],[0,-7]]){x([M,.65,D],[M,2.8,D],.13,m.darkMetal,_t);const F=p(new Te(.62,.62,.36,12),m.rubber,_t);F.rotation.z=Math.PI/2,F.position.set(M,.63,D)}t.push(new sn(new w(-39,0,-35),new w(-33,3,-25)));const dt=new _e;dt.name="Insertion helicopter",dt.position.set(-28,0,38),dt.rotation.y=-.32,a.add(dt);const ft=c(6647902,{metalness:.12,roughness:.78}),ot=c(2702140,{emissive:2573895,emissiveIntensity:.16,metalness:.3,roughness:.34,side:Ie});y(0,3.1,0,2.05,2.04,4.4,ft,dt),y(0,3.22,-3.3,1.86,1.7,2,ft,dt);function Ft(M,D){const F=M.map(ee=>new w(...ee)),k=(ee,Yt)=>D(F[0].clone().multiplyScalar((1-ee)*(1-Yt)).addScaledVector(F[1],ee*(1-Yt)).addScaledVector(F[2],ee*Yt).addScaledVector(F[3],(1-ee)*Yt)),X=[],tt=[],yt=8;for(let ee=0;ee<=yt;ee++)for(let Yt=0;Yt<=yt;Yt++){const Pe=k(Yt/yt,ee/yt);X.push(Pe.x,Pe.y,Pe.z)}for(let ee=0;ee<yt;ee++)for(let Yt=0;Yt<yt;Yt++){const Pe=ee*(yt+1)+Yt,ue=Pe+yt+1;tt.push(Pe,ue,Pe+1,ue,ue+1,Pe+1)}const gt=new pe;gt.setAttribute("position",new re(X,3)),gt.setIndex(tt),gt.computeVertexNormals();const qt=p(gt,ot,dt,!1);qt.receiveShadow=!1;for(const ee of[Yt=>k(Yt,0),Yt=>k(1,Yt),Yt=>k(1-Yt,1),Yt=>k(0,1-Yt)]){const Yt=Array.from({length:9},(Pe,ue)=>ee(ue/8));p(new qr(new Lo(Yt),8,.04,5,!1),m.darkMetal,dt)}}for(const M of[-1,1])Ft([[M*.08,3.48,-5.31],[M*1.35,3.48,-4.85],[M*1.13,4.36,-4.64],[M*.08,4.38,-5.03]],D=>(D.z=-3.3-2*Math.sqrt(Math.max(.01,1-(D.x/1.86)**2-((D.y-3.22)/1.7)**2))-.05,D)),Ft([[M*1.35,3.48,-4.6],[M*1.79,3.43,-2.7],[M*1.54,4.3,-2.7],[M*1.13,4.25,-4.1]],D=>(D.x=M*(1.86*Math.sqrt(Math.max(.01,1-((D.y-3.22)/1.7)**2-((D.z+3.3)/2)**2))+.05),D));x([0,3.42,-5.36],[0,4.47,-5.08],.065,m.darkMetal,dt),x([-.94,3.55,-4.98],[-.22,3.56,-5.29],.022,m.darkMetal,dt),x([.94,3.55,-4.98],[.22,3.56,-5.29],.022,m.darkMetal,dt);for(const M of[-1,1]){for(const X of[-1.4,-.15,1.15])v(M*2.03,3.85,X,.035,.72,.86,m.darkMetal,dt),v(M*2.056,3.85,X,.04,.59,.73,m.glass,dt);x([M*1.45,1.3,1.5],[M*2.45,.65,2.3],.13,m.darkMetal,dt),x([M*1.75,2.6,2.3],[M*2.45,.65,2.3],.105,m.metal,dt);const D=p(new Te(.43,.43,.32,16),m.rubber,dt);D.rotation.z=Math.PI/2,D.position.set(M*2.53,.46,2.3);const F=p(new Te(.17,.17,.33,16),m.metal,dt);F.rotation.z=Math.PI/2,F.position.set(M*2.53,.46,2.3),x([M*.8,1.5,-3.45],[M*.8,.42,-3.9],.085,m.metal,dt);const k=p(new Te(.3,.3,.2,14),m.rubber,dt);k.rotation.z=Math.PI/2,k.position.set(M*.82,.33,-3.9)}v(2.056,2.85,2.55,.04,2.45,1.4,m.darkMetal,dt),v(2.1,1.49,2.55,.65,.08,1.8,m.metal,dt),v(2.11,1.05,2.6,.5,.07,1,m.darkMetal,dt),v(2.11,.65,2.6,.5,.07,1,m.darkMetal,dt);for(const M of[1.8,3.3])x([2.11,1.45,M],[2.11,4.1,M],.055,m.oliveLight,dt);const jt=new w(0,3.5,3.2),ge=new w(0,4.8,12.2),he=ge.clone().sub(jt),tn=p(new Te(.31,.91,he.length(),12),ft,dt);tn.position.copy(jt).add(ge).multiplyScalar(.5),tn.quaternion.setFromUnitVectors(new w(0,1,0),he.normalize()),v(0,4.43,9.7,5.9,.12,1.02,ft,dt);const Ye=Tt([[11.6,4.5],[13.1,4.5],[12.6,8],[11.5,7.65]],.17,ft,dt);Ye.rotation.set(0,-Math.PI/2,0),Ye.position.set(.08,0,0);for(const M of[-.72,.72]){y(M,5.12,-.3,.62,.66,2.45,m.oliveLight,dt);const D=p(new Te(.36,.41,.65,12),m.darkMetal,dt);D.rotation.x=Math.PI/2,D.position.set(M,5.17,1.85)}x([0,4.6,-.1],[0,6.45,-.1],.17,m.metal,dt);const Un=new _e;Un.name="main-rotor",Un.position.set(0,6.4,-.1),dt.add(Un);for(let M=0;M<5;M++){const D=new _e;D.rotation.y=M*Math.PI*2/5,Un.add(D),v(0,-.03,5.3,.3,.065,10.15,m.darkMetal,D),v(0,-.03,10.05,.3,.07,.55,m.yellow,D),x([0,-.2,.1],[0,0,1.8],.047,m.metal,D)}r.push({object:Un,speed:13});const $e=new _e;$e.name="tail-rotor",$e.position.set(.55,6.6,12),dt.add($e);for(let M=0;M<3;M++){const D=v(0,0,.75,.07,.13,1.5,m.darkMetal,$e);D.rotation.x=M*Math.PI*2/3,D.position.set(0,-Math.sin(M*Math.PI*2/3)*.75,Math.cos(M*Math.PI*2/3)*.75)}r.push({object:$e,speed:24,axis:"x"}),x([0,1.75,-4.6],[0,1.3,-5.7],.05,m.darkMetal,dt),y(0,1.77,-4.5,.27,.22,.18,m.lamp,dt);const Nn=[];for(const M of[-70,70]){for(let D=-117;D<76;D+=8)x([M,0,D],[M,3.25,D],.055,m.metal);for(let D=.35;D<3;D+=.4)Nn.push(M,D,-117,M,D,75);for(let D=-117;D<75;D+=1.1)Nn.push(M,.1,D,M,3.1,D+3);for(let D=-117;D<75;D+=1.1)Nn.push(M,3.1,D,M,.1,D+3)}const rs=new pe;rs.setAttribute("position",new re(Nn,3)),a.add(new Hr(rs,new ui({color:5265999,transparent:!0,opacity:.5})));const Xs=new Te(.035,.075,8.5,7);for(const[M,D]of[[-61,23],[59,23],[24,-10],[-62,-48],[60,-48],[21,-91]])p(Xs,m.metal).position.set(M,4.25,D),x([M,8.15,D],[M-1.6,8.1,D],.055,m.metal),v(M-1.5,8.06,D,.65,.12,.32,m.lamp);for(let M=-111;M<85;M+=12)for(const D of[-10.1,16.1])v(D,.13,M,.18,.26,.18,m.darkMetal),y(D,.27,M,.095,.07,.095,c(10464913,{emissive:11524789,emissiveIntensity:1.7}));const Fn=270,_i=new Gi(new Te(.18,.35,1,5),m.bark,Fn),On=new sl(1,1),kn=On.attributes.position;for(let M=0;M<kn.count;M++){const D=kn.getX(M),F=kn.getY(M),k=kn.getZ(M),X=1+Math.sin(D*8.6+k*5.1)*.09+Math.cos(F*7.8-D*3.1)*.07;kn.setXYZ(M,D*X,F*X,k*X)}On.computeVertexNormals();const Kn=new Gi(On,m.leaf,Fn*3),qs=new Qt,Me=new be;for(let M=0;M<Fn;M++){const D=l()*Math.PI*2,F=160+l()*170,k=Math.sin(D)*F,X=Math.cos(D)*F-45,tt=8+l()*15;Me.position.set(k,tt/2,X),Me.scale.set(1,tt,1),Me.rotation.set(0,l()*6,.02*(l()-.5)),Me.updateMatrix(),_i.setMatrixAt(M,Me.matrix);for(let yt=0;yt<3;yt++)Me.position.set(k+Math.sin(yt*2.1+D)*tt*.065,tt*(.64+yt*.09),X+Math.cos(yt*2.1+D)*tt*.065),Me.scale.set(tt*(.2-yt*.025),tt*(.23-yt*.025),tt*(.17-yt*.018)),Me.updateMatrix(),Kn.setMatrixAt(M*3+yt,Me.matrix),qs.setHSL(.2+l()*.12,.1+l()*.2,.48+l()*.35),Kn.setColorAt(M*3+yt,qs)}_i.castShadow=!1,Kn.castShadow=!1,a.add(_i,Kn);const as=[];for(let M=0;M<36;M++){const D=M%2?1:-1,F=D*(74+l()*36),k=-112+l()*194,X=5+l()*10;as.push(F,0,k,F+.4,X,k);for(let tt=0;tt<4;tt++){const yt=l()*6.28,gt=X*(.4+tt*.13);as.push(F+.2,gt,k,F+Math.sin(yt)*3,gt+2.8,k+Math.cos(yt)*3)}}const Ys=new pe;Ys.setAttribute("position",new re(as,3)),a.add(new Hr(Ys,new ui({color:3489849})));for(let M=0;M<9;M++){const D=-190+M*42,F=-190-l()*38,k=8+l()*9;v(D,k/2,F,28+l()*20,k,20,m.darkConcrete)}const $s=R(128,128,(M,D,F)=>{const k=M.createRadialGradient(D/2,F/2,0,D/2,F/2,D/2);k.addColorStop(0,"rgba(255,255,255,.5)"),k.addColorStop(.37,"rgba(255,255,255,.38)"),k.addColorStop(.7,"rgba(255,255,255,.14)"),k.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=k,M.fillRect(0,0,D,F)}),Qr=R(128,256,(M,D,F)=>{M.save(),M.translate(D/2,F*.63),M.scale(1,2);const k=M.createRadialGradient(0,0,0,0,0,60);k.addColorStop(0,"rgba(255,242,159,.97)"),k.addColorStop(.25,"rgba(255,171,47,.8)"),k.addColorStop(.5,"rgba(239,76,13,.4)"),k.addColorStop(1,"rgba(154,30,0,0)"),M.fillStyle=k,M.fillRect(-64,-100,128,200),M.restore()});function T(M,D,F=1){i.push([M,D]);for(let tt=0;tt<6;tt++){const yt=new As({map:Qr,color:16758859,transparent:!0,depthWrite:!1,blending:Or,opacity:.68}),gt=new Ur(yt);gt.position.set(M+(l()-.5)*F,.8+l()*F*.55,D+(l()-.5)*F),gt.scale.set(F*(1+l()*.7),F*(2.2+l()*1.2),1),a.add(gt),n.push({sprite:gt,phase:l()*6.28,height:gt.scale.y,width:gt.scale.x})}const k=new Vs(16745256,16*F,14*F,2);k.position.set(M,1.3,D),a.add(k);for(let tt=0;tt<15;tt++){const yt=new As({map:$s,color:3488823,transparent:!0,depthWrite:!1,opacity:.48}),gt=new Ur(yt),qt=tt/15;gt.position.set(M,1+qt*24*F,D),a.add(gt),e.push({sprite:gt,x:M,z:D,phase:qt,size:F,sway:l()*6.28})}const X=p(new cn(F*10,F*10),W,a,!1);X.rotation.x=-Math.PI/2,X.position.set(M,.074,D)}T(-46,-28,1.15),T(53,-82,1.5),T(-67,-111,1.8);function z(M,D,F){for(let k=0;k<16;k++){const X=new Ur(new As({map:$s,color:3687242,transparent:!0,depthWrite:!1,opacity:.2})),tt=k/16;X.position.set(M,1+tt*20*F,D),a.add(X),e.push({sprite:X,x:M,z:D,phase:tt,size:F,sway:l()*6.28,opacityScale:.64})}}z(12,-67,1.45),z(-53,-62,1.15);const Y=c(5857637),q=new Gi(_,Y,300);for(let M=0;M<300;M++){const D=(l()-.5)*119,F=l()*189-111,k=.1+l()*.7;Me.position.set(D,k*.23,F),Me.rotation.set(l()*.4,l()*6.28,l()*.4),Me.scale.set(k,k*.45,k*(.6+l())),Me.updateMatrix(),q.setMatrixAt(M,Me.matrix)}q.castShadow=!0,q.receiveShadow=!0,a.add(q);const B=46,mt=new Gi(new Te(.2,.2,.6,12),c(16777215,{metalness:.48,roughness:.43}),B),wt=new Gi(new Te(.185,.185,.018,12),m.metal,B),Ut=[2106661,2506592,5533750,6516337],Rt=new w;for(let M=0;M<B;M++){const D=M<8?[-7,-3,3,7,-11,13,-4,10][M]:(l()-.5)*104,F=M<8?[26,21,23,15,9,4,-3,-9][M]:l()*162-99,k=l()*Math.PI*2;Rt.set(Math.cos(k),0,Math.sin(k)),Me.position.set(D,.22,F),Me.quaternion.setFromUnitVectors(new w(0,1,0),Rt),Me.scale.set(1,.78+l()*.22,1),Me.updateMatrix(),mt.setMatrixAt(M,Me.matrix),mt.setColorAt(M,new Qt(Ut[M%Ut.length])),Me.position.addScaledVector(Rt,.28),Me.scale.set(1,1,1),Me.updateMatrix(),wt.setMatrixAt(M,Me.matrix)}mt.castShadow=wt.castShadow=!0,a.add(mt,wt),a.updateMatrixWorld(!0);const Wt=new Set([dt,...r.map(M=>M.object)]),Xt=new Map;function Vt(M){if(!Wt.has(M)){if(M.isMesh&&!M.isInstancedMesh&&!Array.isArray(M.material)&&!M.material.transparent){const D=`${M.material.uuid}:${M.castShadow}:${M.receiveShadow}`;let F=Xt.get(D);F||(F={material:M.material,castShadow:M.castShadow,receiveShadow:M.receiveShadow,meshes:[]},Xt.set(D,F)),F.meshes.push(M)}for(const D of M.children)Vt(D)}}Vt(a);for(const M of Xt.values()){if(M.meshes.length<2&&!M.material.userData.metreTile)continue;const D=M.meshes.map(X=>{const tt=X.geometry.index?X.geometry.toNonIndexed():X.geometry.clone();tt.applyMatrix4(X.matrixWorld);const yt=M.material.userData.metreTile;if(yt){const gt=tt.attributes.position,qt=tt.attributes.normal,ee=tt.attributes.uv;for(let Yt=0;Yt<gt.count;Yt++){const Pe=Math.abs(qt.getX(Yt)),ue=Math.abs(qt.getY(Yt)),Be=Math.abs(qt.getZ(Yt));ue>Pe&&ue>Be?ee.setXY(Yt,gt.getX(Yt)/yt,gt.getZ(Yt)/yt):Pe>Be?ee.setXY(Yt,gt.getZ(Yt)/yt,gt.getY(Yt)/yt):ee.setXY(Yt,gt.getX(Yt)/yt,gt.getY(Yt)/yt)}ee.needsUpdate=!0}return tt}),F=Jg(D,!1);for(const X of D)X.dispose();if(!F)continue;const k=new fe(F,M.material);k.name="Static airport structure",k.castShadow=M.castShadow,k.receiveShadow=M.receiveShadow,a.add(k);for(const X of M.meshes)X.removeFromParent()}return{colliders:t,helicopter:dt,fires:i,group:a,bounds:{minX:-65,maxX:65,minZ:-108,maxZ:65},update(M,D){for(const F of r)F.object.rotation[F.axis||"y"]+=M*F.speed;for(const F of n){const k=.87+Math.sin(D*9+F.phase)*.1+Math.sin(D*17+F.phase*2)*.06;F.sprite.scale.y=F.height*k,F.sprite.scale.x=F.width*(1.08-k*.1),F.sprite.material.opacity=.56+k*.1}for(const F of e){const k=(F.phase+D*.028)%1;F.sprite.position.set(F.x+k*6*F.size+Math.sin(D*.25+F.sway)*k,1.5+k*26*F.size,F.z+k*2.5);const X=(2+k*10)*F.size;F.sprite.scale.set(X,X*1.15,1),F.sprite.material.opacity=Math.sin(k*Math.PI)*.53*(F.opacityScale??1),F.sprite.material.rotation=F.sway+D*.018}},dispose(){const M=new Set,D=new Set,F=new Set;a.traverse(k=>{if(k.geometry&&M.add(k.geometry),k.material)for(const X of Array.isArray(k.material)?k.material:[k.material]){D.add(X);for(const tt of Object.values(X))tt?.isTexture&&F.add(tt)}});for(const k of M)k.dispose();for(const k of D)k.dispose();for(const k of F)k.dispose();a.removeFromParent()}}}const dl=s=>`/energetic-peace-play/assets/cans/${s}`,es={stalker:{base:"#142321",accent:"#72bc50",ink:"#121e1d",fabric:4345397,liquid:10473562,source:"nonstop-green-reference.png"},ally:{base:"#087795",accent:"#30b2cc",ink:"#e7e9dc",fabric:4016440,liquid:7327974,source:"nonstop-original-reference.png"},zero:{base:"#d9e0de",accent:"#00a5ba",ink:"#12374e",fabric:3752517,liquid:14674662,source:"nonstop-zero-reference.png"},black:{base:"#111613",accent:"#98cf36",ink:"#e1e6cf",fabric:2698535,liquid:13228122,flavor:"ENERGY"},mango:{base:"#ea9b27",accent:"#57b6a0",ink:"#173d3a",fabric:5720115,liquid:16033084,flavor:"MANGO LOCO"},pink:{base:"#de7095",accent:"#eed1a1",ink:"#e6ce9b",fabric:4995907,liquid:15895472,flavor:"PIPELINE PUNCH"},violet:{base:"#683f91",accent:"#ded3f4",ink:"#e8def2",fabric:4076874,liquid:11898592,flavor:"ULTRA VIOLET"},blue:{base:"#69abc9",accent:"#e4f1f3",ink:"#e4f1f3",fabric:3490892,liquid:10935536,flavor:"ULTRA BLUE"},white:{base:"#e2e3dc",accent:"#999f98",ink:"#717975",fabric:7634038,liquid:15660010,flavor:"ZERO ULTRA"}},ka=new Map,za=new Map,Qg=new Map,Fh=new Map;let Fr,Dc=!1;const Bi=new Se({color:12568774,metalness:.86,roughness:.26}),pn=new Se({color:2370602,metalness:.7,roughness:.39}),Ba=new Se({color:2370346,metalness:.82,roughness:.35}),Pn=new Se({color:1448728,metalness:.08,roughness:.91}),Ar=new Se({color:3423536,roughness:1}),Ds=new Se({color:9279373,metalness:.85,roughness:.3}),tv=new Se({color:4554630,emissive:1522753,metalness:.72,roughness:.12});function ns(s,t){return za.has(s)||za.set(s,t()),za.get(s)}function we(s,t,e){return ns(`box-${s}-${t}-${e}`,()=>new Zn(s,t,e))}function We(s,t,e,n=16){return ns(`cyl-${s}-${t}-${e}-${n}`,()=>new Te(s,t,e,n))}function _s(s){return ns(`sphere-${s}`,()=>new gn(s,10,7))}function Xi(s,t,e=48){return ns(`torus-${s}-${t}-${e}`,()=>new ll(s,t,6,e))}function $t(s,t,e,n=0,i=0,r=0){const a=new fe(t,e);return a.position.set(n,i,r),a.castShadow=!0,a.receiveShadow=!0,s.add(a),a}function fl(s){let t=s>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function ev(s){const t=new Zr(s);return t.colorSpace=Le,t.anisotropy=4,t}let xs;function nv(){if(xs)return xs;const s=document.createElement("canvas");s.width=512,s.height=256;const t=s.getContext("2d");t.fillStyle="#929292",t.fillRect(0,0,512,256);const e=fl(802);for(let n=0;n<3500;n++){const i=Math.floor(120+e()*64);t.strokeStyle=`rgb(${i},${i},${i})`;const r=e()*512,a=e()*256;t.beginPath(),t.moveTo(r,a),t.lineTo(r+e()*.5,a+e()*10),t.stroke()}for(let n=0;n<220;n++){const i=e()*512,r=e()*256,a=.3+e()*1.1;t.fillStyle="#4e4e4e",t.beginPath(),t.arc(i,r,a,0,Math.PI*2),t.fill(),t.strokeStyle="#cecece",t.lineWidth=.3,t.stroke()}return xs=new Zr(s),xs.wrapS=Ji,xs}function mn(s,t,e,n,i,r,a="Arial",o=900,l){s.fillStyle=r,s.font=`${o} ${i}px ${a}`,s.textAlign="center",s.textBaseline="middle",l?s.fillText(t,e,n,l):s.fillText(t,e,n)}function iv(s,t,e,n,i,r){s.save(),s.translate(t,e),s.scale(n/300,i/430),s.fillStyle=r;for(let a=0;a<3;a++){const o=a*97;s.beginPath(),s.moveTo(o+5,32),s.lineTo(o+50,5),s.lineTo(o+82,12),s.lineTo(o+95,36),s.lineTo(o+75,59),s.lineTo(o+81,100),s.lineTo(o+68,119),s.lineTo(o+72,172),s.lineTo(o+58,192),s.lineTo(o+57,246),s.lineTo(o+48,270),s.lineTo(o+35,418-a*27),s.lineTo(o+23,310),s.lineTo(o+29,255),s.lineTo(o+18,216),s.lineTo(o+27,173),s.lineTo(o+16,137),s.lineTo(o+22,85),s.lineTo(o+10,58),s.lineTo(o-8,49),s.closePath(),s.fill()}s.restore()}function Lc(s,t,e){const n=document.createElement("canvas");n.width=t[2],n.height=t[3];const i=n.getContext("2d",{willReadFrequently:!0});i.drawImage(s,...t,0,0,n.width,n.height);const r=i.getImageData(0,0,n.width,n.height);for(let a=0;a<r.data.length;a+=4)Math.max(r.data[a],r.data[a+1],r.data[a+2])<25&&(r.data[a+3]=0);return i.putImageData(r,0,0),e&&(i.globalCompositeOperation="source-in",i.fillStyle=e,i.fillRect(0,0,n.width,n.height),i.globalCompositeOperation="source-over"),n}function Oh(s,t){const e=es[t],n=1024;if(Fr){const i=Lc(Fr,[0,0,281,397],t==="black"?null:e.accent),r=Lc(Fr,[290,71,591,116],t==="black"?null:e.ink);s.drawImage(i,n-195,137,390,505),s.drawImage(r,n-359,669,718,141)}else iv(s,n-173,128,350,510,e.accent),mn(s,"MONSTER",n,743,130,e.ink,"Georgia",700,735);mn(s,t==="black"?"E N E R G Y":e.flavor,n,850,43,e.accent,"Arial",600,690),mn(s,t==="white"||t==="blue"||t==="violet"?"ZERO SUGAR · 500 ml":"ENERGY DRINK · 500 ml",n,946,24,e.ink,"Arial",600)}function sv(){if(Dc)return;Dc=!0;const s=new Image;s.onload=()=>{Fr=s;for(const[t,{ctx:e,texture:n}]of Fh)kh(e,t),Oh(e,t),pl(e,t),n.needsUpdate=!0},s.src=dl("monster-logo-reference.webp")}function kh(s,t){const e=es[t];s.fillStyle=e.base,s.fillRect(0,0,2048,1024);const n=fl(109+t.length);if(t==="stalker"){s.fillStyle=e.accent,s.fillRect(0,0,2048,280);for(let i=0;i<85;i++){const r=n()*2048,a=320+n()*704;s.fillStyle=["#27362e","#40503d","#132223"][i%3],s.beginPath(),s.ellipse(r,a,30+n()*70,15+n()*70,n()*6,0,Math.PI*2),s.fill()}}else if(t==="ally"||t==="zero"){s.lineWidth=220;for(let i=-2;i<8;i++)s.strokeStyle=i%2?e.accent:t==="zero"?"#f0f0e9":"#123974",s.beginPath(),s.moveTo(i*370,1090),s.lineTo(i*370+900,-70),s.stroke()}else if(t!=="black"){s.save(),s.globalAlpha=t==="white"?.21:.24,s.strokeStyle=e.ink,s.lineWidth=2.2;for(let i=0;i<100;i++){const r=n()*2048,a=n()*1024,o=20+n()*82;s.beginPath();for(let l=0;l<30;l++){const c=l/29*Math.PI*2,u=o*(.8+.2*Math.cos(c*7)),h=r+Math.cos(c)*u,d=a+Math.sin(c)*u;l===0?s.moveTo(h,d):s.lineTo(h,d)}s.stroke()}s.restore()}s.fillStyle=t==="white"?"#7c817b":"#ced3bc",s.font="18px Arial",s.textAlign="left";for(let i=0;i<21;i++)s.fillText(i%3===0?"ENERGY • TAURINE • CAFFEINE":"500 ml   /   KEEP COOL   /   RECYCLE",75,210+i*22);for(let i=0;i<65;i++)s.fillRect(90+i*4,760,i%3?1:3,124);mn(s,"5 901234 500000",220,911,21,t==="white"?"#4e5851":"#d6dec9","Arial",500)}function pl(s,t){const e=fl(733+t.length);s.save(),s.globalAlpha=.11;for(let n=0;n<460;n++){s.strokeStyle=n%3?"#e9efdf":"#07100d";const i=e()*2048,r=e()*1024;s.lineWidth=.8+e(),s.beginPath(),s.moveTo(i,r),s.lineTo(i+e()*6,r+e()*24),s.stroke()}s.restore()}function rv(s,t){const e=es[t],n=1024;mn(s,"NON",n,t==="stalker"?128:412,208,e.ink,"Arial",900),mn(s,"STOP",n,t==="stalker"?308:606,208,e.ink,"Arial",900),t==="stalker"?(mn(s,"S.T.A.L.K.E.R.",n,790,93,"#d7dfcd","Impact",700,700),mn(s,"LIMITED EDITION",n,890,32,"#d7dfcd")):(s.fillStyle="#e32827",s.fillRect(724,719,600,85),mn(s,"ORIGINAL",n,760,76,"#ffffff","Arial",500),t==="zero"&&mn(s,"ZERO SUGAR",n,859,57,e.ink,"Arial",700))}function av(s,t,e){const n=t.width*.5,i=t.width*.255,r=t.height*.165,a=t.height*.746,o=520,l=1528;for(let c=o;c<l;c++){const u=(c-1024)/2048*Math.PI*2,h=n+Math.sin(u)*i;s.drawImage(t,h,r,1.3,a,c,0,1.6,1024)}pl(s,e)}function Ic(s){if(ka.has(s))return ka.get(s);const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d");kh(e,s);const n=es[s];n.source?rv(e,s):Oh(e,s),pl(e,s);const i=ev(t);if(Qg.set(s,t),n.source){const o=new Image;o.onload=()=>{av(e,o,s),i.needsUpdate=!0},o.src=dl(n.source)}else Fh.set(s,{ctx:e,texture:i}),sv();const r=nv(),a=new Se({map:i,metalness:s==="white"||s==="zero"?.52:.38,roughness:.54,roughnessMap:r,bumpMap:r,bumpScale:.003});return ka.set(s,a),a}function Uc(s,t,e,n,i){const r=new w(...t),a=new w(...e),o=r.distanceTo(a),l=$t(s,We(n*.88,n,o),i);return l.position.copy(r).add(a).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new w(0,1,0),a.sub(r).normalize()),l}function zh(){const s=new _e,t=$t(s,we(.105,.132,.36),Ba,0,0,.07);t.name="carbine-receiver",$t(s,we(.108,.026,.31),Ds,0,.08,.08),$t(s,we(.078,.105,.22),Pn,0,.015,-.22),$t(s,we(.112,.145,.045),Pn,0,-.015,-.342);const e=$t(s,we(.071,.18,.077),Pn,0,-.12,-.04);e.rotation.x=-.23;const n=$t(s,we(.072,.25,.11),pn,0,-.17,.118);n.rotation.x=.12;for(let h=0;h<3;h++)$t(s,we(.075,.012,.112),Ds,0,-.11-h*.055,.116);$t(s,we(.117,.112,.29),pn,0,.005,.37);for(let h=0;h<5;h++)$t(s,we(.125,.023,.024),Pn,0,.074,.275+h*.045);const i=$t(s,We(.027,.027,.3,12),Ba,0,.009,.61);i.rotation.x=Math.PI/2;const r=$t(s,We(.039,.033,.105,12),pn,0,.009,.797);r.rotation.x=Math.PI/2;const a=$t(s,We(.019,.019,.003,12),Pn,0,.009,.851);a.rotation.x=Math.PI/2;const o=$t(s,we(.018,.11,.035),Ba,0,.07,.52);o.name="front-sight";const l=$t(s,We(.052,.052,.16,12),pn,0,.137,.015);l.rotation.x=Math.PI/2;const c=$t(s,We(.039,.039,.006,12),tv,0,.137,.097);c.rotation.x=Math.PI/2,$t(s,we(.022,.028,.08),Ds,.061,.022,.025);const u=new be;return u.position.set(0,.009,.86),s.add(u),s.userData.muzzle=u,s}function ai(s="stalker"){if(s==="sidr")return ov();const t=s==="orange"?"mango":es[s]?s:"black",e=es[t],n=new _e;n.name=`can-${t}`;const i=new _e;n.add(i);const r=new Se({color:e.fabric,roughness:.96,metalness:.02}),a=new Se({color:e.accent,metalness:.38,roughness:.55}),o=$t(i,We(.395,.395,1.35,40),Ic(t),0,1.3,0);o.rotation.y=Math.PI,o.name="beverage-can";const l=$t(i,We(.395,.353,.072,40),Bi,0,.59,0),c=$t(i,Xi(.35,.021),Bi,0,.557,0);c.rotation.x=Math.PI/2;const u=new _e;i.add(u),$t(u,We(.356,.395,.092,40),Ic(t),0,2.021,0),$t(u,We(.349,.349,.017,40),Bi,0,2.068,0);const h=$t(u,Xi(.35,.017),Bi,0,2.078,0);h.rotation.x=Math.PI/2;const d=$t(u,Xi(.304,.004),pn,0,2.078,0);d.rotation.x=Math.PI/2;const f=$t(u,We(.094,.094,.005,20),pn,0,2.079,.163);f.scale.x=.73;const m=new _e;m.position.set(0,2.087,.063),u.add(m);const _=$t(m,Xi(.08,.017,24),Bi,0,0,-.088);_.rotation.x=Math.PI/2,_.scale.y=1.46,$t(u,We(.028,.028,.016,12),Ds,0,2.081,.063),$t(i,we(.36,.47,.16),r,0,1.21,-.41),$t(i,we(.28,.19,.045),Ar,0,1.13,-.514);for(const G of[-1,1]){const W=$t(i,we(.04,.74,.023),Ar,G*.28,1.37,-.292);W.rotation.z=G*-.11,$t(i,we(.043,.047,.023),Ds,G*.286,1.53,-.315)}const g=[];for(const G of[-1,1]){const W=new _e;W.position.set(G*.2,.635,0),i.add(W),g.push(W),$t(W,_s(.097),pn,0,-.022,0),$t(W,We(.09,.082,.205,12),r,0,-.154,0),$t(W,_s(.085),Pn,0,-.266,.024),$t(W,we(.13,.127,.073),pn,0,-.269,.087),$t(W,We(.073,.071,.195,12),r,0,-.395,0),$t(W,we(.173,.121,.272),Pn,0,-.566,.064),$t(W,we(.183,.034,.292),pn,0,-.618,.064);for(let Q=0;Q<3;Q++)$t(W,we(.122,.01,.024),Ar,0,-.505,.01+Q*.045)}const p=new _e;i.add(p);const v=[.426,1.47,0],x=[.516,1.145,.19],y=[.326,1.095,.423],R=[-.426,1.47,0],A=[-.478,1.11,.205],P=[.215,1.105,.668],L=["mango","pink","violet","blue","white","zero"].includes(t);for(const[G,W,Q]of[[v,x,y],[R,A,P]]){$t(p,_s(.107),pn,...G),Uc(p,G,W,.073,r),$t(p,_s(.074),Pn,...W),Uc(p,W,Q,.065,r),$t(p,_s(.078),Pn,...Q);const $=$t(p,we(.044,.133,.119),L?a:Ar,G[0]*1.15,G[1]-.095,.026);if($.rotation.z=G[0]>0?.2:-.2,L)for(let st=0;st<(t==="white"||t==="zero"?3:2);st++)$t(p,we(.01,.013,.091),Bi,G[0]*1.2,G[1]-.073-st*.027,.027)}const E=zh();E.position.set(.3,1.176,.47),p.add(E);let b=0,U=!1,O=0,H=0;const Z=[o,l];for(const G of Z)G.userData.character=n;return n.userData.kind=t,n.userData.hitMeshes=Z,n.userData.muzzle=E.userData.muzzle,n.userData.weapon=E,n.userData.body=o,n.userData.radius=.53,n.userData.height=2.1,n.userData.lid=u,n.userData.liquid=e.liquid,n.userData.setDead=(G=!0)=>{U=G,G||(b=0,O=0,u.visible=!0,i.scale.set(1,1,1),i.rotation.x=0)},n.userData.isDead=()=>U,n.userData.hit=(G=1)=>{O=Math.min(1,O+G)},n.userData.talk=G=>{H=G},n.userData.setTab=G=>{_.visible=G},n.userData.animate=(G,W,Q=!1)=>{if(m.rotation.x=H*.95,U){b=Math.min(1,b+G*2.3);const st=1-(1-b)**3;i.rotation.z=st*1.51,i.position.y=st*.3,i.rotation.x=0,i.scale.set(1+st*.1,1-st*.22,1+st*.1),p.rotation.x=st*-.34,g[0].rotation.x=st*.3,g[1].rotation.x=st*-.28;return}O*=Math.exp(-G*9),i.rotation.x=-O*.24,i.scale.set(1,1+H*.025,1);const $=Q?Math.sin(W*10.8):0;g[0].rotation.x=$*.52,g[1].rotation.x=-$*.52,i.position.y=Q?Math.abs(Math.sin(W*10.8))*.053:Math.sin(W*1.7)*.005,i.rotation.z=Q?Math.sin(W*10.8)*.033:Math.sin(W*1.3)*.009,p.rotation.x=Math.sin(W*(Q?10.8:1.8))*(Q?.025:.008)},n}function ov(){const s=ai("white");s.name="masked-sidr",s.userData.kind="sidr",s.userData.revealed=!1;const t=s.children[0],e=s.userData.body,n=s.userData.lid,i=t.children.find(_=>_!==e&&_.isMesh&&_.position.y===.59),r=new _e;r.visible=!1,t.add(r);const a=new Ah({color:10705697,transparent:!0,opacity:.87,roughness:.23,metalness:0,clearcoat:.7,clearcoatRoughness:.13,depthWrite:!0}),o=new Se({color:12093772,metalness:.04,roughness:.34}),l=new Se({color:3156516,roughness:.67}),c=[[0,-.75],[.29,-.75],[.37,-.7],[.41,-.6],[.41,.27],[.39,.46],[.3,.57],[.17,.65],[.15,.72],[.15,.85],[.16,.87]].map(([_,g])=>new et(_,g)),u=ns("sidr-pet-profile",()=>new rl(c,40)),h=$t(r,u,a,0,1.33,0);for(const _ of[.65,.72,.79]){const g=$t(r,Xi(.397,.012),o,0,_,0);g.rotation.x=Math.PI/2}const d=$t(r,We(.176,.165,.22,32),l,0,2.19,0);for(const _ of[2.11,2.16,2.21,2.26]){const g=$t(r,Xi(.173,.008),o,0,_,0);g.rotation.x=Math.PI/2}const f=new Ch().load(dl("mister-sidr-label-reference.png"));f.colorSpace=Le,f.anisotropy=4;const m=$t(r,ns("sidr-label-arc",()=>new Te(.421,.421,1.14,36,1,!0,-.83,1.66)),new Se({map:f,side:Ie,roughness:.8,metalness:0}),0,1.23,0);return m.castShadow=!1,s.userData.reveal=()=>{s.userData.revealed||(s.userData.revealed=!0,s.name="mister-sidr",e.visible=!1,i.visible=!1,n.visible=!1,s.userData.hitMeshes=[h,d],r.visible=!0,s.userData.liquid=11037490)},s}class lv{constructor(t,e,n=1.5,i=.55){this.cell=n,this.minX=e.minX,this.minZ=e.minZ,this.width=Math.floor((e.maxX-e.minX)/n)+1,this.height=Math.floor((e.maxZ-e.minZ)/n)+1;const r=this.width*this.height;this.blocked=new Uint8Array(r),this.g=new Float32Array(r),this.parent=new Int32Array(r),this.seen=new Int32Array(r),this.closed=new Int32Array(r),this.search=0;for(let a=0;a<this.height;a++)for(let o=0;o<this.width;o++){const l=this.minX+o*n,c=this.minZ+a*n;this.blocked[a*this.width+o]=+t.some(u=>u.min.y<1.85&&u.max.y>0&&l+i>u.min.x&&l-i<u.max.x&&c+i>u.min.z&&c-i<u.max.z)}}cellAt(t,e){const n=Math.round((t-this.minX)/this.cell),i=Math.round((e-this.minZ)/this.cell);return n<0||i<0||n>=this.width||i>=this.height?-1:i*this.width+n}pointAt(t){return[this.minX+t%this.width*this.cell,this.minZ+Math.floor(t/this.width)*this.cell]}freeNear(t,e){const n=this.cellAt(t,e);if(n<0)return-1;if(!this.blocked[n])return n;const i=n%this.width,r=Math.floor(n/this.width);for(let a=1;a<=5;a++){let o=-1,l=1/0;for(let c=-a;c<=a;c++)for(let u=-a;u<=a;u++){const h=i+u,d=r+c;if(h<0||d<0||h>=this.width||d>=this.height)continue;const f=d*this.width+h;if(this.blocked[f])continue;const m=(this.minX+h*this.cell-t)**2+(this.minZ+d*this.cell-e)**2;m<l&&(o=f,l=m)}if(o>=0)return o}return-1}canTraverse(t,e,n,i){const r=Math.max(1,Math.ceil(Math.hypot(n-t,i-e)/(this.cell*.4)));for(let a=1;a<=r;a++){const o=this.cellAt(t+(n-t)*a/r,e+(i-e)*a/r);if(o<0||this.blocked[o])return!1}return!0}findPath(t,e,n,i){const r=this.freeNear(t,e),a=this.freeNear(n,i);if(r<0||a<0)return[];if(r===a||this.canTraverse(t,e,n,i))return[[n,i]];const o=++this.search,l=this.width,c=a%l,u=Math.floor(a/l),h=[],d=_=>{const g=Math.abs(_%l-c),p=Math.abs(Math.floor(_/l)-u);return g+p+(Math.SQRT2-2)*Math.min(g,p)},f=_=>{let g=h.length;for(h.push(_);g>0;){const p=g-1>>1;if(h[p].f<=_.f)break;h[g]=h[p],g=p}h[g]=_},m=()=>{const _=h[0],g=h.pop();if(h.length){let p=0;for(;p*2+1<h.length;){let v=p*2+1;if(v+1<h.length&&h[v+1].f<h[v].f&&v++,h[v].f>=g.f)break;h[p]=h[v],p=v}h[p]=g}return _};for(this.seen[r]=o,this.g[r]=0,this.parent[r]=-1,f({index:r,f:d(r)});h.length;){const _=m().index;if(this.closed[_]===o)continue;if(_===a){const v=[];let x=a;for(;x!==r&&x>=0;)v.push(this.pointAt(x)),x=this.parent[x];v.reverse();const y=[],R=[t,e];for(let A=0;A<v.length;){let P=A;for(;P+1<v.length&&this.canTraverse(R[0],R[1],...v[P+1]);)P++;y.push(v[P]),R[0]=v[P][0],R[1]=v[P][1],A=P+1}return this.canTraverse(...R,n,i)&&y.push([n,i]),y}this.closed[_]=o;const g=_%l,p=Math.floor(_/l);for(let v=-1;v<=1;v++)for(let x=-1;x<=1;x++){if(!x&&!v)continue;const y=g+x,R=p+v;if(y<0||R<0||y>=l||R>=this.height)continue;const A=R*l+y;if(this.blocked[A]||this.closed[A]===o||x&&v&&(this.blocked[p*l+y]||this.blocked[R*l+g]))continue;const P=this.g[_]+(x&&v?Math.SQRT2:1);this.seen[A]===o&&P>=this.g[A]||(this.seen[A]=o,this.g[A]=P,this.parent[A]=_,f({index:A,f:P+d(A)}))}}return[]}}class cv{constructor(){this.ctx=null,this.master=null,this.effects=null,this.ambience=null,this.voiceBus=null,this.musicBus=null,this.reverb=null,this.noise=null,this.wind=null,this.rumble=null,this.rotor=null,this.fireRoar=null,this.volume=.55,this.musicVolume=.7,this.muted=!1,this.disposed=!1,this.distantTimer=8,this.battleTimer=3,this.sirenTimer=24,this.heartTimer=0,this.nonstopActive=!1,this.intensity=0,this.listener={x:0,z:0,yaw:0},this.fires=[],this.ambientNodes=[]}async start(){if(this.disposed)return!1;const t=globalThis.AudioContext||globalThis.webkitAudioContext;if(!t)return!1;try{return this.ctx||this._create(t),this.ctx.state==="suspended"&&await this.ctx.resume(),this.ctx.state==="running"}catch{return!1}}_create(t){const e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.muted?0:this.volume,this.masterFilter=e.createBiquadFilter(),this.masterFilter.type="lowpass",this.masterFilter.frequency.value=2e4,this.masterFilter.connect(this.master);const n=e.createDynamicsCompressor();n.threshold.value=-3,n.knee.value=0,n.ratio.value=20,n.attack.value=.001,n.release.value=.12,this.master.connect(n),n.connect(e.destination),this.effects=e.createGain(),this.effects.gain.value=1.6,this.effectsMuffle=e.createBiquadFilter(),this.effectsMuffle.type="lowpass",this.effectsMuffle.frequency.value=2e4,this.effects.connect(this.effectsMuffle),this.effectsMuffle.connect(this.masterFilter),this.ambience=e.createGain(),this.ambience.gain.value=.12,this.ambience.connect(this.effectsMuffle),this.voiceBus=e.createGain(),this.voiceBus.gain.value=.45,this.voiceBus.connect(this.masterFilter),this.musicBus=e.createGain(),this.musicDuck=e.createGain(),this.musicGain=e.createGain(),this.musicGain.gain.value=this.musicVolume;const i=e.createDynamicsCompressor();i.threshold.value=-20,i.ratio.value=3,i.attack.value=.02,i.release.value=.3,this.musicBus.connect(this.musicDuck),this.musicDuck.connect(this.musicGain),this.musicGain.connect(i),i.connect(this.masterFilter),this.noise=e.createBuffer(1,e.sampleRate*3,e.sampleRate);const r=this.noise.getChannelData(0);for(let v=0;v<r.length;v++)r[v]=Math.random()*2-1;this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(2.8);const a=e.createGain();a.gain.value=.55,this.reverb.connect(a),a.connect(this.masterFilter);const o=e.createGain();o.gain.value=.16,this.effectsMuffle.connect(o),o.connect(this.reverb);const l=e.createBufferSource();l.buffer=this.noise,l.loop=!0;const c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=440,c.Q.value=.4,this.wind=e.createGain(),this.wind.gain.value=.45,l.connect(c),c.connect(this.wind),this.wind.connect(this.ambience),l.start();const u=e.createOscillator();u.type="sine",u.frequency.value=39,this.rumble=e.createGain(),this.rumble.gain.value=.035,u.connect(this.rumble),this.rumble.connect(this.ambience),u.start();const h=e.createBufferSource();h.buffer=this.noise,h.loop=!0;const d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=520;const f=e.createGain();f.gain.value=.5;const m=e.createOscillator();m.frequency.value=4.6;const _=e.createGain();_.gain.value=.5,m.connect(_),_.connect(f.gain),this.rotor=e.createGain(),this.rotor.gain.value=0,h.connect(d),d.connect(f),f.connect(this.rotor),this.rotor.connect(this.ambience),h.start(0,1.1),m.start();const g=e.createBufferSource();g.buffer=this.noise,g.loop=!0;const p=e.createBiquadFilter();p.type="lowpass",p.frequency.value=260,this.fireRoar=e.createGain(),this.fireRoar.gain.value=0,g.connect(p),p.connect(this.fireRoar),this.fireRoar.connect(this.ambience),g.start(0,2.1),this.ambientNodes=[l,c,this.wind,u,this.rumble,h,d,f,m,_,this.rotor,g,p,this.fireRoar,n,i,a,o]}_impulse(t){const e=this.ctx,n=Math.floor(e.sampleRate*t),i=e.createBuffer(2,n,e.sampleRate);for(let r=0;r<2;r++){const a=i.getChannelData(r);let o=0;for(let l=0;l<n;l++){const c=l/n;o+=(Math.random()*2-1-o)*(.5-c*.35),a[l]=o*(1-c)**3.1*(l<e.sampleRate*.012?l/(e.sampleRate*.012):1)}}return i}setMuted(t){this.muted=!!t,this._applyVolume()}setVolume(t){const e=Number(t);Number.isFinite(e)&&(this.volume=Math.max(0,Math.min(1,e))),this._applyVolume()}setMusicVolume(t){const e=Number(t);Number.isFinite(e)&&(this.musicVolume=Math.max(0,Math.min(1,e))),this.musicGain&&this.musicGain.gain.setTargetAtTime(this.musicVolume,this.ctx.currentTime,.05)}_applyVolume(){!this.ctx||!this.master||this.ctx.state==="closed"||this.master.gain.setTargetAtTime(this.muted?0:this.volume,this.ctx.currentTime,.035)}_active(){return this.ctx?.state==="running"&&!this.muted&&this.volume>0&&!this.disposed}active(){return this._active()}voiceReady(){return this._active()&&!!this.voiceBus}setPaused(t){this.ctx&&this.masterFilter.frequency.setTargetAtTime(t?650:2e4,this.ctx.currentTime,.08)}duck(t){if(!this.ctx)return;const e=this.ctx.currentTime;for(const[n,i,r]of[[this.musicDuck.gain,.5,1],[this.ambience.gain,.075,.12]])n.cancelScheduledValues(e),n.setTargetAtTime(i,e,.06),n.setTargetAtTime(r,e+t,.5)}setListener(t,e,n){this.listener.x=t,this.listener.z=e,this.listener.yaw=n}setFires(t){this.fires=t}setRotor(t){this.rotor&&this.rotor.gain.setTargetAtTime(Math.max(0,t)*.9,this.ctx.currentTime,.3)}_spatial(t){if(!t)return{pan:0,gain:1,clarity:1,distance:0};const{x:e,z:n,yaw:i}=this.listener,r=t.x-e,a=t.z-n,o=Math.hypot(r,a)||1,l=(r*Math.cos(i)-a*Math.sin(i))/o;return{pan:Math.max(-1,Math.min(1,l*.85)),gain:1/(1+o/14),clarity:1/(1+o/40),distance:o}}_tone({frequency:t=140,endFrequency:e=t,duration:n=.15,gain:i=.08,type:r="sine",delay:a=0,pan:o=0,attack:l=.004}={}){if(!this._active())return;const c=this.ctx,u=c.currentTime+a,h=c.createOscillator(),d=c.createGain();h.type=r,h.frequency.setValueAtTime(t,u),h.frequency.exponentialRampToValueAtTime(Math.max(15,e),u+n),d.gain.setValueAtTime(1e-4,u),d.gain.exponentialRampToValueAtTime(Math.max(2e-4,i),u+l),d.gain.exponentialRampToValueAtTime(1e-4,u+Math.max(n,l+.01)),h.connect(d);const f=c.createStereoPanner?c.createStereoPanner():null;f?(f.pan.value=o,d.connect(f),f.connect(this.effects)):d.connect(this.effects),h.onended=()=>{h.disconnect(),d.disconnect(),f?.disconnect()},h.start(u),h.stop(u+Math.max(n,l+.01)+.025)}_noiseBurst({duration:t=.16,gain:e=.12,frequency:n=2800,endFrequency:i=n,filterType:r="lowpass",delay:a=0,pan:o=0,attack:l=.004,target:c=this.effects}={}){if(!this._active())return;const u=this.ctx,h=u.currentTime+a,d=u.createBufferSource();d.buffer=this.noise;const f=u.createBiquadFilter();f.type=r,f.Q.value=.65,f.frequency.setValueAtTime(n,h),f.frequency.exponentialRampToValueAtTime(Math.max(30,i),h+t);const m=u.createGain();m.gain.setValueAtTime(1e-4,h),m.gain.exponentialRampToValueAtTime(Math.max(2e-4,e),h+l),m.gain.exponentialRampToValueAtTime(1e-4,h+Math.max(t,l+.01)),d.connect(f),f.connect(m);const _=u.createStereoPanner?u.createStereoPanner():null;_?(_.pan.value=o,m.connect(_),_.connect(c)):m.connect(c),d.onended=()=>{d.disconnect(),f.disconnect(),m.disconnect(),_?.disconnect()},d.start(h,Math.random()*Math.max(0,2.9-t)),d.stop(h+Math.max(t,l+.01)+.025)}shot(t=!1,e=null){const n=this._spatial(e),i=t?.14+.6*n.gain:1,r=t?e?n.pan:(Math.random()-.5)*1.1:-.1,a=.88+Math.random()*.24,o=t?.35+n.clarity*.65:1;this._noiseBurst({duration:.014,gain:.18*i,frequency:6500*o,endFrequency:3200,filterType:"highpass",pan:r,attack:.001}),this._noiseBurst({duration:.055,gain:.27*i,frequency:2200*o*a,endFrequency:500,filterType:"bandpass",pan:r,attack:.001}),this._noiseBurst({duration:.16,gain:.19*i,frequency:420*a,endFrequency:90,pan:r,attack:.002}),this._noiseBurst({duration:.34,gain:.057*i,frequency:1600*o,endFrequency:380,delay:.035+Math.random()*.018,pan:r,attack:.006}),this._tone({frequency:95*a,endFrequency:41,duration:.105,gain:.08*i,type:"triangle",pan:r}),t||(this._noiseBurst({duration:.018,gain:.035,frequency:4300,filterType:"highpass",delay:.065,pan:.17,attack:.001}),this._tone({frequency:2040+Math.random()*160,endFrequency:1150,duration:.09,gain:.014,type:"triangle",delay:.11,pan:.24}))}hit(){this._tone({frequency:1320+Math.random()*360,endFrequency:560,duration:.13,gain:.062,type:"triangle",pan:(Math.random()-.5)*.5}),this._noiseBurst({duration:.075,gain:.055,frequency:2200,filterType:"highpass"})}canHit(){this._tone({frequency:2350+Math.random()*300,endFrequency:1800,duration:.16,gain:.04,type:"triangle"}),this._tone({frequency:3900,endFrequency:3500,duration:.09,gain:.018})}fizz(t=null){const e=this._spatial(t);this._noiseBurst({duration:1.3,gain:.02+.09*e.gain,frequency:5200,endFrequency:2600,filterType:"highpass",pan:e.pan}),this._tone({frequency:950,endFrequency:260,duration:.07,gain:.03+.06*e.gain,type:"triangle",pan:e.pan})}crumple(t=null){const e=this._spatial(t),n=.12+.88*e.gain;this._noiseBurst({duration:.085,gain:.13*n,frequency:1250,endFrequency:320,filterType:"bandpass",pan:e.pan,attack:.001});for(let i=0;i<4;i++)this._noiseBurst({duration:.027+i*.007,gain:.032*n,frequency:1700+Math.random()*1700,endFrequency:650,filterType:"bandpass",delay:.035+i*.036,pan:e.pan,attack:.001});this._noiseBurst({duration:.48,gain:.028*n,frequency:4900,endFrequency:2100,filterType:"highpass",delay:.1,pan:e.pan}),this._tone({frequency:210,endFrequency:68,duration:.23,gain:.065*n,type:"triangle",pan:e.pan})}defeat(t=null,e=!1){const n=this._spatial(t);this.crumple(t),e?this._noiseBurst({duration:.18,gain:.055*n.gain,frequency:900,endFrequency:240,delay:.1,pan:n.pan}):(this._noiseBurst({duration:.18,gain:.045*n.gain,frequency:4800,endFrequency:1100,filterType:"bandpass",delay:.08,pan:n.pan}),this._tone({frequency:380,endFrequency:150,duration:.14,gain:.035*n.gain,type:"triangle",delay:.14,pan:n.pan}))}whiz(){this._noiseBurst({duration:.16,gain:.05,frequency:5200,endFrequency:1800,filterType:"bandpass",pan:(Math.random()-.5)*1.6})}grenadeWarn(t=null){const e=this._spatial(t);for(const n of[0,.14])this._tone({frequency:1500,duration:.06,gain:.035,type:"square",delay:n,pan:e.pan})}laser(t=null){const e=this._spatial(t);this._tone({frequency:520,endFrequency:1900,duration:1.1,gain:.02+.02*e.gain,attack:.9,pan:e.pan})}explosion(t=null){const e=this._spatial(t),n=t?.25+.75*e.gain:1;this._noiseBurst({duration:1.25,gain:.31*n,frequency:2100*(t?.4+e.clarity*.6:1),endFrequency:70,pan:e.pan}),this._tone({frequency:96,endFrequency:24,duration:.95,gain:.24*n,pan:e.pan})}reload(){this._noiseBurst({duration:.075,gain:.09,frequency:2800,filterType:"highpass"}),this._tone({frequency:310,endFrequency:190,duration:.065,gain:.055,type:"triangle",delay:.23}),this._noiseBurst({duration:.09,gain:.12,frequency:3600,delay:.68}),this._tone({frequency:660,endFrequency:240,duration:.09,gain:.035,type:"triangle",delay:.69})}landing(){this._noiseBurst({duration:.36,gain:.11,frequency:450,endFrequency:80,attack:.02}),this._tone({frequency:92,endFrequency:37,duration:.26,gain:.095,type:"triangle"}),this._noiseBurst({duration:.14,gain:.035,frequency:2600,endFrequency:900,filterType:"bandpass",delay:.08})}radio(){this._noiseBurst({duration:.14,gain:.055,frequency:1800,filterType:"bandpass"}),this._tone({frequency:1080,duration:.07,gain:.025,delay:.04}),this._tone({frequency:810,duration:.09,gain:.021,delay:.12})}uploadBeep(){this._tone({frequency:1250,duration:.05,gain:.02,type:"square"})}nonstop(t){t!==this.nonstopActive&&(this.nonstopActive=t,this.ctx&&this.effectsMuffle.frequency.setTargetAtTime(t?1500:2e4,this.ctx.currentTime,t?.05:.3),t?(this._noiseBurst({duration:.55,gain:.12,frequency:300,endFrequency:6e3,filterType:"bandpass",attack:.45,target:this.masterFilter}),this._tone({frequency:62,endFrequency:30,duration:.9,gain:.2}),this.heartTimer=.4):this._tone({frequency:40,endFrequency:110,duration:.4,gain:.08}))}victory(){[196,233.08,293.66,392,349.23].forEach((t,e)=>{this._tone({frequency:t,duration:1.75,gain:.06,delay:e*.38}),this._tone({frequency:t/2,duration:1.8,gain:.032,delay:e*.38})})}_siren(){const t=this.ctx,e=t.currentTime,n=t.createOscillator(),i=t.createBiquadFilter(),r=t.createGain(),a=t.createStereoPanner?t.createStereoPanner():null;n.type="sawtooth",n.frequency.setValueAtTime(170,e),n.frequency.linearRampToValueAtTime(520,e+4),n.frequency.setValueAtTime(520,e+8),n.frequency.linearRampToValueAtTime(190,e+13),i.type="lowpass",i.frequency.value=850,r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.16,e+3),r.gain.setValueAtTime(.16,e+9),r.gain.linearRampToValueAtTime(0,e+13),n.connect(i),i.connect(r),a?(a.pan.value=(Math.random()-.5)*1.4,r.connect(a),a.connect(this.ambience)):r.connect(this.ambience),n.onended=()=>{n.disconnect(),i.disconnect(),r.disconnect(),a?.disconnect()},n.start(e),n.stop(e+13.2)}update(t,e=0){if(!this._active())return;const n=Math.max(0,Math.min(Number(t)||0,.1)),i=Math.max(0,Math.min(1,Number(e)||0));this.intensity+=(i-this.intensity)*Math.min(1,n*2);const r=this.ctx.currentTime;if(this.wind.gain.setTargetAtTime(.4+Math.sin(r*.31)*.12,r,.25),this.rumble.gain.setTargetAtTime(.035+this.intensity*.06,r,.4),this.distantTimer-=n,this.distantTimer<=0){const l=(Math.random()-.5)*1.6;this._noiseBurst({duration:1.8,gain:.07+this.intensity*.035,frequency:230,endFrequency:55,pan:l}),this._tone({frequency:55,endFrequency:29,duration:1.25,gain:.035,pan:l}),this.distantTimer=7+Math.random()*9}if(this.battleTimer-=n,this.battleTimer<=0){const l=(Math.random()-.5)*1.8,c=3+Math.floor(Math.random()*6),u=.08+Math.random()*.05;for(let h=0;h<c;h++)this._noiseBurst({duration:.08,gain:.016+this.intensity*.01,frequency:700,endFrequency:240,pan:l,delay:h*u}),this._tone({frequency:90,endFrequency:50,duration:.1,gain:.012,pan:l,delay:h*u});this.battleTimer=(this.intensity>.3?2.5:5)+Math.random()*6}this.sirenTimer-=n,this.sirenTimer<=0&&(this.intensity<.4&&this._siren(),this.sirenTimer=55+Math.random()*60);let a=1/0;for(const[l,c]of this.fires)a=Math.min(a,Math.hypot(l-this.listener.x,c-this.listener.z));const o=Number.isFinite(a)?1/(1+a/5):0;this.fireRoar.gain.setTargetAtTime(o*1.4,r,.4),Math.random()<o*n*14&&this._noiseBurst({duration:.025,gain:.025*o,frequency:2600+Math.random()*2e3,filterType:"highpass"}),this.nonstopActive&&(this.heartTimer-=n,this.heartTimer<=0&&(this._tone({frequency:64,endFrequency:40,duration:.14,gain:.2}),this._tone({frequency:58,endFrequency:38,duration:.12,gain:.12,delay:.17}),this.heartTimer=.72))}dispose(){this.disposed=!0;for(const t of this.ambientNodes){if(typeof t.stop=="function")try{t.stop()}catch{}t.disconnect()}this.ambientNodes=[],this.master?.disconnect(),this.effects?.disconnect(),this.ambience?.disconnect(),this.voiceBus?.disconnect(),this.musicBus?.disconnect(),this.ctx&&this.ctx.state!=="closed"&&this.ctx.close().catch(()=>{}),this.ctx=null}}const hv=s=>440*2**((s-69)/12),uv=[[38,"m"],[34,"M"],[43,"m"],[45,"M"]],dv=[[38,"m"],[34,"M"],[43,"m"],[34,"M"]],fv=[[0,0,65,4],[0,4,64,4],[0,8,62,8],[1,0,65,4],[1,4,67,4],[1,8,69,8],[2,0,70,4],[2,4,69,4],[2,8,67,8],[3,0,64,12],[3,12,61,4]],Nc=[0,0,12,0,0,0,7,0,0,0,12,0,3,0,7,0],pv=new Set([0,3,6,8,11,14]),Fc={0:1,3:.5,6:.7,8:.9,11:.5,14:.65},ys={silence:{bpm:80,layers:{}},menu:{bpm:70,layers:{pad:1.1,piano:1.4,choir:.5}},explore:{bpm:84,layers:{pad:.55,pulse:.4,choir:.12}},combat:{bpm:128,layers:{pad:.14,pulse:.22,ostinato:.38,drums:.4,brass:.34,horn:.27}},boss:{bpm:136,layers:{pad:.16,pulse:.25,ostinato:.45,drums:.45,brass:.45,horn:.34,choir:.27}},hold:{bpm:132,layers:{pad:.14,pulse:.25,ostinato:.4,drums:.45,brass:.36,horn:.25,tick:.25}},sad:{bpm:58,layers:{pad:.55,piano:.85,choir:.4}},ending:{bpm:62,layers:{pad:.55,piano:1,choir:.5,horn:.22}}},Oc=["pad","pulse","ostinato","drums","brass","horn","piano","choir","tick"];class mv{constructor(t){this.audio=t,this.state="silence",this.bus=null,this.layers={},this.step=0,this.next=0,this.bpm=ys.silence.bpm,this.loop=0}setState(t){!ys[t]||t===this.state||(this.state=t,this._applyLayers(t==="silence"?1.2:.9))}sting(t){if(!this.audio.active())return;this.bus||this._setup();const e=this.audio.ctx.currentTime+.03,n=this.stingBus;t==="chapter"?(this._taiko(n,e,1.2,!0),this._taiko(n,e+.42,.8,!1),this._taiko(n,e+.84,1.1,!0),this._brass(n,[38,45,50,53],e,2.6,1.5),this._choir(n,[62,65,69],e+.2,2.4)):t==="clear"?(this._horn(n,62,e,.5),this._horn(n,69,e+.35,1.5)):t==="betrayal"?(this._boom(n,e),this._brass(n,[38,39],e,3.6,1.4),this._choir(n,[62,63,69],e+.3,3.2)):t==="death"?(this._boom(n,e),[[50,53,57],[45,48,52],[38,41,45]].forEach((i,r)=>this._brass(n,i,e+r*.65,.8,1.2-r*.25))):t==="nonstop"&&(this._boom(n,e),this._taiko(n,e,1.3,!0))}update(){if(!this.audio.active())return;this.bus||this._setup();const t=this.audio.ctx.currentTime;for(this.next<t&&(this.next=t+.05);this.next<t+.2;){const e=60/this.bpm/4;this._schedule(this.step%64,this.next,e),this.next+=e,this.step++,this.step%16===0&&(this.bpm=ys[this.state].bpm),this.step%64===0&&this.loop++}}_setup(){const t=this.audio.ctx;this.bus=t.createGain(),this.bus.connect(this.audio.musicBus),this.send=t.createGain(),this.send.gain.value=.45,this.send.connect(this.audio.reverb);for(const e of Oc){const n=t.createGain();n.gain.value=0,n.connect(this.bus),n.connect(this.send),this.layers[e]=n}this.stingBus=t.createGain(),this.stingBus.connect(this.bus),this.stingBus.connect(this.send),this._applyLayers(.1)}_applyLayers(t){if(!this.bus)return;const e=this.audio.ctx.currentTime,n=ys[this.state].layers;for(const i of Oc)this.layers[i].gain.setTargetAtTime(n[i]||0,e,t)}_schedule(t,e,n){const i=ys[this.state].layers,r=f=>(i[f]||0)>0||this.layers[f].gain.value>.02,a=Math.floor(t/16),o=t%16,[l,c]=(this.state==="ending"?dv:uv)[a],u=c==="m"?3:4,h=n*16,d=this.layers;if(o===0&&r("pad")&&this._pad(d.pad,[l+12,l+12+u,l+19,l+24],e,h),o%2===0&&r("pulse")&&this._pulse(d.pulse,l,e,n*1.6,o%8===0?1:.6),r("ostinato")){const f=Nc[o]===3?u:Nc[o],m=l+12>52?l:l+12;this._spiccato(d.ostinato,m+f,e,n,pv.has(o)?1:.55)}r("drums")&&(Fc[o]&&this._taiko(d.drums,e,Fc[o],o===0||o===8),a===3&&o>=12&&this._taiko(d.drums,e,.3+(o-12)*.15,!1),(o===4||o===12)&&this._snare(d.drums,e,.5)),o===0&&r("brass")&&this._brass(d.brass,[l,l+7,l+12],e,h*.95,a===3?1.2:1);for(const[f,m,_,g]of fv)f!==a||m!==o||(r("horn")&&this.loop%2===1&&this._horn(d.horn,_,e,g*n),r("piano")&&this._piano(d.piano,_,e,g*n*1.4,1));r("piano")&&o===0&&this._piano(d.piano,l+12,e,h,.5),r("piano")&&o===8&&this._piano(d.piano,l+19,e,h*.5,.35),o===0&&(a===0||a===2)&&r("choir")&&this._choir(d.choir,[l+24,l+24+u,l+31],e,h*2),o%4===0&&r("tick")&&this._tick(d.tick,e)}_voice(t,{notes:e,waves:n,t:i,dur:r,attack:a=.01,release:o=.2,peak:l=.1,cutoff:c=[800,2400,900],q:u=.7,formants:h,vibrato:d=!1,decay:f=!1}){const m=this.audio.ctx,_=m.createGain(),g=[_];let p;if(h){p=m.createGain(),g.push(p);for(const[R,A]of h){const P=m.createBiquadFilter(),L=m.createGain();P.type="bandpass",P.frequency.value=R,P.Q.value=5,L.gain.value=A,p.connect(P),P.connect(L),L.connect(_),g.push(P,L)}}else{const R=m.createBiquadFilter();R.type="lowpass",R.Q.value=u,R.frequency.setValueAtTime(c[0],i),R.frequency.linearRampToValueAtTime(c[1],i+a),R.frequency.exponentialRampToValueAtTime(c[2],i+Math.max(r,a)+o),R.connect(_),p=R,g.push(R)}const v=i+Math.max(r,a)+o;_.gain.setValueAtTime(0,i),_.gain.linearRampToValueAtTime(l,i+a),f?_.gain.exponentialRampToValueAtTime(5e-4,v):(_.gain.linearRampToValueAtTime(l*.8,i+Math.max(r,a)),_.gain.linearRampToValueAtTime(0,v)),_.connect(t);let x;if(d){x=m.createOscillator();const R=m.createGain();x.frequency.value=5.2,R.gain.setValueAtTime(0,i),R.gain.linearRampToValueAtTime(11,i+.35),x.connect(R),g.push(x,R),x.depth=R,x.start(i),x.stop(v+.05)}const y=[];for(const R of e)for(const A of n){const P=m.createOscillator(),L=m.createGain();P.type=A.type,P.frequency.value=hv(R)*(A.ratio||1),P.detune.value=A.detune||0,L.gain.value=(A.gain??1)/Math.sqrt(e.length),P.connect(L),L.connect(p),x&&x.depth.connect(P.detune),P.start(i),P.stop(v+.05),g.push(P,L),y.push(P)}y[0].onended=()=>{for(const R of g)R.disconnect()}}_noise(t,e,{duration:n,peak:i,type:r="lowpass",frequency:a=800}){const o=this.audio.ctx,l=o.createBufferSource(),c=o.createBiquadFilter(),u=o.createGain();l.buffer=this.audio.noise,c.type=r,c.frequency.value=a,u.gain.setValueAtTime(i,e),u.gain.exponentialRampToValueAtTime(5e-4,e+n),l.connect(c),c.connect(u),u.connect(t),l.onended=()=>{l.disconnect(),c.disconnect(),u.disconnect()},l.start(e,Math.random()*2),l.stop(e+n+.05)}_drum(t,e,n,i,r,a,o){const l=this.audio.ctx,c=l.createOscillator(),u=l.createGain();c.frequency.setValueAtTime(n,e),c.frequency.exponentialRampToValueAtTime(i,e+r),u.gain.setValueAtTime(o,e),u.gain.exponentialRampToValueAtTime(5e-4,e+a),c.connect(u),u.connect(t),c.onended=()=>{c.disconnect(),u.disconnect()},c.start(e),c.stop(e+a+.05)}_pad(t,e,n,i){this._voice(t,{notes:e,t:n,dur:i,attack:Math.max(.6,i*.35),release:1.2,peak:.07,cutoff:[500,1500,700],waves:[{type:"sawtooth",detune:-9,gain:.6},{type:"sawtooth",detune:9,gain:.6}]})}_pulse(t,e,n,i,r){this._voice(t,{notes:[e],t:n,dur:i,attack:.01,release:.08,peak:.12*r,cutoff:[300,700,200],waves:[{type:"sawtooth",gain:.5},{type:"sine",gain:1}]})}_spiccato(t,e,n,i,r){this._voice(t,{notes:[e],t:n,dur:i*.55,attack:.004,release:.05,peak:.1*r,cutoff:[1200,3200,600],q:1,waves:[{type:"sawtooth",detune:-6,gain:.6},{type:"sawtooth",detune:6,gain:.6},{type:"triangle",ratio:.5,gain:.5}]})}_brass(t,e,n,i,r){this._voice(t,{notes:e,t:n,dur:i,attack:Math.min(i*.4,1.2),release:.6,peak:.09*r,cutoff:[180,1500,500],q:1.4,waves:[{type:"sawtooth",detune:-5,gain:.5},{type:"sawtooth",gain:.5},{type:"sawtooth",detune:5,gain:.5},{type:"square",ratio:.5,gain:.35}]})}_horn(t,e,n,i){this._voice(t,{notes:[e],t:n,dur:i,attack:.07,release:.25,peak:.07,cutoff:[700,1700,900],vibrato:!0,waves:[{type:"sawtooth",gain:.7},{type:"triangle",gain:.6}]})}_piano(t,e,n,i,r){this._voice(t,{notes:[e],t:n,dur:Math.max(i,1.8),attack:.004,release:.1,peak:.12*r,cutoff:[4200,4200,1400],decay:!0,waves:[{type:"triangle",gain:1},{type:"sine",ratio:2,gain:.35},{type:"sine",ratio:3,gain:.12}]})}_choir(t,e,n,i){this._voice(t,{notes:e,t:n,dur:i,attack:1.2,release:1.6,peak:.55,formants:[[750,1],[1200,.7],[2600,.25]],waves:[{type:"sawtooth",detune:-8,gain:.6},{type:"sawtooth",gain:.6},{type:"sawtooth",detune:8,gain:.6}]})}_taiko(t,e,n,i){this._drum(t,e,i?95:135,i?38:50,.28,i?1.1:.7,.45*n),this._noise(t,e,{duration:.1,peak:.15*n,frequency:900})}_snare(t,e,n){this._noise(t,e,{duration:.12,peak:.06*n,type:"highpass",frequency:1400}),this._drum(t,e,230,180,.05,.06,.03*n)}_tick(t,e){this._drum(t,e,2600,2500,.02,.03,.05)}_boom(t,e){this._drum(t,e,70,28,1.8,2.2,.6),this._noise(t,e,{duration:1.6,peak:.25,frequency:200})}}const ko={а:[800,1250],я:[800,1250],о:[520,900],у:[340,720],ю:[340,720],е:[520,1750],є:[520,1750],и:[420,1850],і:[300,2250],ї:[300,2250],a:[800,1250],o:[520,900],u:[340,720],e:[520,1750],i:[300,2250],y:[420,1850]},kc=new Set("сзцшжчщsczxf"),gv=new Set("пбтдкгґpbtdkg"),vv=/[a-zа-щьюяіїєґ]/,zc={stalker:{pitch:118,range:3,rate:11.5,wave:"sawtooth",formant:.92,gain:.5},iskra:{pitch:250,range:5,rate:15,wave:"triangle",formant:1.14,gain:.62},zero:{pitch:96,range:2.5,rate:10,wave:"sawtooth",formant:.86,gain:.5},white:{pitch:78,range:1.5,rate:8.5,wave:"sawtooth",formant:.8,gain:.5,double:{ratio:1.008,type:"sawtooth"}},sidr:{pitch:68,range:1.2,rate:9,wave:"sawtooth",formant:.76,gain:.45,double:{ratio:1.012,type:"triangle"}},pilot:{pitch:150,range:4,rate:16.5,wave:"square",formant:1,gain:.34},broadcast:{pitch:165,range:0,rate:12,wave:"square",formant:1,gain:.3},grunt:{pitch:86,range:6,rate:14,wave:"square",formant:.8,gain:.34,double:{ratio:.5,type:"square"}},punch:{pitch:190,range:7,rate:17,wave:"square",formant:1.05,gain:.32,double:{ratio:.5,type:"square"}}};function _v(s){const t=[];let e="",n=[];const i=a=>{n.forEach((o,l)=>{o.mark=a,o.index=l,o.count=n.length}),n=[]},r=a=>{t.length&&(t.at(-1).gap=Math.max(t.at(-1).gap,a)),e=""};for(const a of s.toLowerCase())if(ko[a]||/\d/.test(a)){const o={vowel:ko[a]?a:"а",onset:e,gap:0,mark:"plain",index:0,count:1};t.push(o),n.push(o),e=""}else vv.test(a)?e+=a:a===" "?r(.035):",—:;".includes(a)?r(.16):a==="…"?(r(.45),i("trail")):".!?".includes(a)&&(r(.3),i(a==="!"?"exclaim":a==="?"?"question":"plain"));return i("plain"),t}function xv(s){let t=2166136261;for(const e of s)t=Math.imul(t^e.codePointAt(0),16777619);return(t>>>0)%1e3/1e3}function Bh(s,t,e){const n=zc[t]||zc.grunt,i=e==="weak",r=1/(n.rate*(i?.62:1)),a=_v(s),o=[];let l=0;for(const c of a){const u=c.count>1?c.index/(c.count-1):0;let h=(xv(c.onset+c.vowel)-.5)*2*n.range-u*1.6;c.mark==="exclaim"&&(h+=2.5),c.mark==="question"&&c.index>=c.count-3&&(h+=(c.index-c.count+4)*2),c.mark==="trail"&&(h-=u*2),i&&(h-=3);const d=r*(c.mark==="exclaim"?.9:1);o.push({...c,time:l,duration:d,semitones:h}),l+=d+c.gap*(i?1.6:1)}return{profile:n,plan:o,total:l,peak:n.gain*(i?.55:1)*(a.some(c=>c.mark==="exclaim")?1.15:1)}}function yv(s,t,e){return Math.max(2.4,s.length*.052+1,Bh(s,t,e).total+.75)}function Mv(s,t){const e=s.createWaveShaper(),n=new Float32Array(1024);for(let i=0;i<n.length;i++){const r=i/511.5-1;n[i]=Math.tanh(r*t)/Math.tanh(t)}return e.curve=n,e}function Sv(s,t,e,n){const i=s.ctx,r=[],a=i.createGain();r.push(a);const o=(..._)=>{for(let g=0;g<_.length-1;g++)_[g].connect(_[g+1]);return r.push(..._.slice(1)),_.at(-1)},l=(_,g,p=.7)=>{const v=i.createBiquadFilter();return v.type=_,v.frequency.value=g,v.Q.value=p,v};if(t==="near"){const _=i.createGain();return _.gain.value=2.5,o(a,l("highpass",110),_).connect(s.voiceBus),{input:a,nodes:r}}const c=t==="tape",u=t==="speaker",h=o(a,l("highpass",u?520:380),l("lowpass",c?2300:u?2700:3100,1.1),Mv(i,u?5:3),i.createGain());if(h.gain.value=u?1:1.3,h.connect(s.voiceBus),u&&s.reverb){const _=i.createGain();_.gain.value=.9,h.connect(_),_.connect(s.reverb),r.push(_);const g=i.createDelay(1),p=i.createGain(),v=i.createGain();g.delayTime.value=.21,p.gain.value=.34,v.gain.value=.45,h.connect(g),g.connect(p),p.connect(g),g.connect(v),v.connect(s.voiceBus),r.push(g,p,v)}const d=i.createBufferSource(),f=l(c?"highpass":"bandpass",c?4200:1900,c?.7:.9),m=i.createGain();return d.buffer=s.noise,d.loop=!0,m.gain.setValueAtTime(0,Math.max(0,e-.05)),m.gain.linearRampToValueAtTime(c?.018:.012,e),m.gain.setValueAtTime(c?.018:.012,n),m.gain.linearRampToValueAtTime(0,n+.12),d.connect(f),f.connect(m),m.connect(s.voiceBus),d.start(Math.max(0,e-.05),Math.random()*2),d.stop(n+.2),r.push(d,f,m),{input:a,nodes:r,hiss:d}}function bv(s,t,e,{via:n="near",mood:i}={}){const{profile:r,plan:a,total:o,peak:l}=Bh(t,e,i),c=s.voiceReady(),u=c?()=>s.ctx.currentTime:()=>performance.now()/1e3,h=n==="near"?.03:.16,d=u()+h,f=d+o,m=[];let _;if(c){const p=s.ctx;_=Sv(s,n,d,f);const v=p.createGain(),x=p.createBiquadFilter(),y=p.createBiquadFilter(),R=p.createGain(),A=p.createGain();v.gain.value=0,x.type=y.type="bandpass",x.Q.value=4.5,y.Q.value=6,R.gain.value=.75,A.gain.value=.16,x.connect(v),y.connect(R),R.connect(v),A.connect(v),v.connect(_.input);const P=[{ratio:1,type:r.wave,gain:1}];r.double&&P.push({...r.double,gain:.55});const L=P.map(O=>{const H=p.createOscillator(),Z=p.createGain();return H.type=O.type,Z.gain.value=O.gain,H.connect(Z),Z.connect(x),Z.connect(y),Z.connect(A),_.nodes.push(Z),{osc:H,ratio:O.ratio}}),E=p.createBufferSource(),b=p.createBiquadFilter(),U=p.createGain();E.buffer=s.noise,E.loop=!0,b.type="bandpass",b.Q.value=1.2,U.gain.value=0,E.connect(b),b.connect(U),U.connect(_.input);for(const O of a){const H=d+O.time,Z=O.duration,G=r.pitch*2**(O.semitones/12),[W,Q]=ko[O.vowel];for(const{osc:st,ratio:Et}of L)st.frequency.setValueAtTime(G*Et*1.05,H),st.frequency.linearRampToValueAtTime(G*Et,H+Z*.7);x.frequency.setValueAtTime(W*r.formant,H),y.frequency.setValueAtTime(Q*r.formant,H),v.gain.setValueAtTime(0,H),v.gain.linearRampToValueAtTime(l,H+.012),v.gain.linearRampToValueAtTime(l*.55,H+Z*.65),v.gain.linearRampToValueAtTime(0,H+Z*.95);const $=[...O.onset].find(st=>kc.has(st)||gv.has(st));if($&&H-.034>d-h){const st=kc.has($);b.frequency.setValueAtTime(st?4600:1700,H-.034),U.gain.setValueAtTime(0,H-.034),U.gain.linearRampToValueAtTime(l*(st?.5:.75),H-.03),U.gain.linearRampToValueAtTime(0,st?H+.004:H-.016)}}for(const{osc:O}of L)O.start(d),O.stop(f+.05),m.push(O);E.start(Math.max(0,d-.04),Math.random()*2),E.stop(f+.05),m.push(E),_.hiss&&m.push(_.hiss),_.nodes.push(v,x,y,R,A,E,b,U),m[0].onended=()=>setTimeout(()=>{for(const O of _.nodes)O.disconnect()},1500)}let g=!1;return{duration:o+h,level(p=u()){if(g)return 0;const v=p-d;if(v<0||v>o)return 0;for(const x of a){if(v<x.time)return 0;if(v<x.time+x.duration)return Math.sin(Math.PI*(v-x.time)/x.duration)}return 0},stop(){if(!g){g=!0;for(const p of m)try{p.stop()}catch{}}}}}function Ev(s,t=1600){const e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),r=new Float32Array(t),a=new pe,o=(p,v,x)=>{const y=new ze(v,x);return y.setUsage(ih),a.setAttribute(p,y),y},l=o("position",e,3),c=o("tint",n,3),u=o("alpha",i,1),h=o("psize",r,1);a.setDrawRange(0,0);const d=new Sn({uniforms:{scale:{value:400}},vertexShader:`attribute vec3 tint; attribute float alpha; attribute float psize; uniform float scale;
      varying vec3 vTint; varying float vAlpha;
      void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.0, psize * scale / -mv.z); vTint = tint; vAlpha = alpha; }`,fragmentShader:`varying vec3 vTint; varying float vAlpha;
      void main(){ vec2 c = gl_PointCoord - 0.5; float d = dot(c, c); if (d > 0.25) discard;
        gl_FragColor = vec4(vTint, vAlpha * (1.0 - d * 2.2)); }`,transparent:!0,depthWrite:!1}),f=new mh(a,d);f.frustumCulled=!1,f.renderOrder=2,s.add(f);const m=[],_=new Qt;function g(p,v,x,y,R,A,P,L=.6,E=.05,b=9){m.length>=t&&m.shift(),_.setHex(P,pi),m.push({x:p,y:v,z:x,vx:y,vy:R,vz:A,r:_.r,g:_.g,b:_.b,life:L,max:L,size:E,gravity:b})}return{points:f,emit:g,setScale(p){d.uniforms.scale.value=p},burst(p,v,x=8,{life:y=.45,size:R=x>20?.16:.05,speed:A=1,gravity:P=8}={}){for(let L=0;L<x;L++)g(p.x,p.y,p.z,(Math.random()-.5)*7*A,Math.random()*5*A,(Math.random()-.5)*7*A,v,y*(.7+Math.random()*.6),R,P)},spray(p,v,x,y=10,{speed:R=4,spread:A=1.6,life:P=.7,size:L=.045,lift:E=1.2}={}){for(let b=0;b<y;b++){const U=R*(.6+Math.random()*.7);g(p.x,p.y,p.z,v.x*U+(Math.random()-.5)*A,v.y*U+Math.random()*E,v.z*U+(Math.random()-.5)*A,x,P*(.7+Math.random()*.6),L*(.7+Math.random()*.6),9.5)}},update(p){let v=0;for(let x=m.length-1;x>=0;x--){const y=m[x];if(y.life-=p,y.life<=0){m.splice(x,1);continue}y.vy-=y.gravity*p,y.x+=y.vx*p,y.y+=y.vy*p,y.z+=y.vz*p,y.y<.03&&(y.y=.03,y.vy=0,y.vx*=.8,y.vz*=.8)}for(const x of m)e[v*3]=x.x,e[v*3+1]=x.y,e[v*3+2]=x.z,n[v*3]=x.r,n[v*3+1]=x.g,n[v*3+2]=x.b,i[v]=Math.min(1,x.life/x.max*1.6),r[v]=x.size,v++;a.setDrawRange(0,v),l.needsUpdate=c.needsUpdate=u.needsUpdate=h.needsUpdate=!0},clear(){m.length=0,a.setDrawRange(0,0)}}}const Vi=[{kicker:"ПРОЛОГ · СЬОМА ДОБА ВІЙНИ",title:"ПОЛИЦЯ БЕЗ ЦУКРУ",text:"Monster і NonStop воюють за енергетичний ринок. Обидва штаби обіцяють перемир’я, але кожна спроба переговорів закінчується новим обстрілом."},{kicker:"ОПЕРАТИВНЕ ЗВЕДЕННЯ",title:"АЕРОДРОМ ГОСТОМЕЛЬ",text:"На станції 07 зберігається журнал перехоплень. Він може довести, хто зірвав переговори. Шістка NonStop має забрати диск до світанку."},{kicker:"ГРУПА «ШІСТКА»",title:"ТИ — СТАЛКЕР",text:"Поруч радистка Іскра. Наказ віддав генерал Нуль — NonStop Original Zero Sugar. Білий Monster контролює аеродром. Один із них бреше."}],je=[{id:0,title:"Гостомель",kicker:"ОПЕРАЦІЯ 01 · ВИСАДКА",description:"Шістка NonStop висаджується біля смуги, щоб забрати журнал переговорів зі станції 07.",location:[21,-34],start:[0,34],objectives:{combat:"Прорвати оборону смуги",reach:"Дійти з Іскрою до станції зв’язку",hold:"Тримати станцію, поки Іскра качає дані"},interaction:"ПІДКЛЮЧИТИ ІСКРУ ДО СТАНЦІЇ",lines:{start:"landing",clear:"clear0",hold:"hack0"},hold:{seconds:30,radius:18,waves:[{at:.04,spawn:[{kind:"black",x:-6,z:-2},{kind:"black",x:16,z:-11},{kind:"black",x:-15,z:-15}]},{at:.5,spawn:[{kind:"black",x:13,z:10},{kind:"black",x:-6,z:-2},{kind:"black",x:16,z:-11}]}],lines:[{at:.45,name:"hack1"},{at:.82,name:"hack2"}]},enemies:[{kind:"black",x:-12,z:14,hp:65},{kind:"black",x:13,z:10,hp:65},{kind:"black",x:-6,z:-2,hp:65},{kind:"black",x:16,z:-11,hp:65},{kind:"black",x:-15,z:-15,hp:65}]},{id:1,title:"Нуль цукру",kicker:"ОПЕРАЦІЯ 02 · АРХІВ",description:"Накладні зі станції вказують на архів. Іскра підозрює, що постачаннями керували з обох штабів.",location:[32,-47],start:[21,-34],objectives:{combat:"Прорвати охорону архіву",reach:"Відкрити архів за терміналом"},interaction:"ВІДКРИТИ АРХІВ",lines:{start:"arrival1",clear:"clear1"},enemies:[{kind:"black",x:13,z:-19,hp:70},{kind:"orange",x:24,z:-23,hp:105},{kind:"blue",x:37,z:-19,hp:95},{kind:"black",x:15,z:-38,hp:70},{kind:"pink",x:24,z:-42,hp:110}]},{id:2,title:"Частота 142",kicker:"ОПЕРАЦІЯ 03 · ЕФІР",description:"Копія архіву чекає на частоті 142. Нуль переслідує Шістку; Білий вивозить власний вантаж.",location:[-26,-78],start:[29,-48],objectives:{combat:"Пробитися до ангара",reach:"Увімкнути аварійний передавач",hold:"Тримати передавач до кінця трансляції"},interaction:"УВІМКНУТИ ПЕРЕДАВАЧ · ЧАСТОТА 142",lines:{start:"alone2",clear:"clear2",hold:"upload0"},hold:{seconds:40,radius:18,waves:[{at:.04,spawn:[{kind:"black",x:-12,z:-54},{kind:"black",x:-43,z:-60},{kind:"black",x:-17,z:-62}]},{at:.4,spawn:[{kind:"black",x:-12,z:-54},{kind:"pink",x:-43,z:-60},{kind:"orange",x:-10,z:-60}]},{at:.72,spawn:[{kind:"black",x:-43,z:-60},{kind:"blue",x:-4,z:-52}]}],lines:[{at:.35,name:"upload1"},{at:.66,name:"upload2"},{at:.93,name:"upload3"}]},enemies:[{kind:"black",x:-12,z:-54,hp:75},{kind:"orange",x:-43,z:-60,hp:110},{kind:"pink",x:-17,z:-66,hp:110},{kind:"sidr",x:-33,z:-76,hp:300,aggro:44},{kind:"zero",x:-26,z:-63,hp:240,aggro:50,deferred:!0}]}],Bc={СТАЛКЕР:{kind:"stalker",voice:"stalker",via:"near"},ІСКРА:{kind:"ally",voice:"iskra",via:"near"},"ГЕНЕРАЛ НУЛЬ":{kind:"zero",voice:"zero",via:"radio"},БІЛИЙ:{kind:"white",voice:"white",via:"radio"},"МІСТЕР СИДР":{kind:"sidr",voice:"sidr",via:"near"},ПІЛОТ:{kind:"stalker",voice:"pilot",via:"radio"},ЕФІР:{kind:"zero",voice:"broadcast",via:"radio"},ЧОРНИЙ:{kind:"black",voice:"grunt",via:"near"},ПАНЧ:{kind:"pink",voice:"punch",via:"near"},"ЗАПИС · БІЛИЙ":{kind:"white",voice:"white",via:"tape"},"ЗАПИС · НУЛЬ":{kind:"zero",voice:"zero",via:"tape"},"ЗАПИС · ІСКРА":{kind:"ally",voice:"iskra",via:"tape"}},Rr={intro:[{speaker:"ГЕНЕРАЛ НУЛЬ",text:"Шістко, слухайте. Станція 07, журнал переговорів. Забрати диск і вийти тією самою смугою. Контакт із Білим забороняю."},{speaker:"СТАЛКЕР",text:"Він командує аеродромом. Як ми обійдемо його?"},{speaker:"ГЕНЕРАЛ НУЛЬ",text:"Білий вийшов на переговори. Його частини відійшли. У вас двадцять хвилин."},{speaker:"ІСКРА",text:"Записую ефір. Якщо переговори зірвуть, матимемо доказ. Візьми мій язичок; повернеш після виходу.",event:"tab"},{speaker:"ПІЛОТ",text:"Висота мала. Дим на смузі. Висадка зараз!",event:"land"}],landing:[{speaker:"ІСКРА",text:"Контакт попереду! Чорні тримають підступи до станції. Дим праворуч, бетонні блоки ліворуч."},{speaker:"СТАЛКЕР",text:"Вони чекали саме тут. Нуль дав нам хибну розвідку."},{speaker:"ІСКРА",text:"Спершу виживемо. Я прикрию правий фланг — рухайся до станції."}],clear0:[{speaker:"ІСКРА",text:"Смуга чиста. На станції 07 перевірю, хто віддав наказ лишити тут гарнізон."}],hack0:[{speaker:"ІСКРА",text:"З’єднання є. Тридцять секунд на копію. Тримай входи, інакше вони зірвуть передачу."},{speaker:"ІСКРА",text:"Вони заходять з боку термінала. Не дай їм дістатися консолі!"}],hack1:[{speaker:"ІСКРА",text:"У журналі є накладні. Постачальник — наш штаб. Отримувач — люди Білого."},{speaker:"СТАЛКЕР",text:"Нуль передав їм боєприпаси?"}],hack2:[{speaker:"ІСКРА",text:"Копія майже готова. Не відходь від станції!"}],terminal:[{speaker:"ІСКРА",text:"Однакові номери рейсів у накладних NonStop і Monster. І третій підпис: «МС». У нас такого підрозділу немає."},{speaker:"СТАЛКЕР",text:"Зроби копію. Передамо напряму штабу."},{speaker:"ІСКРА",text:"У накладних печатка Нуля. Він може перехопити передачу."},{speaker:"ГЕНЕРАЛ НУЛЬ",text:"Іскро, доповідь. Що на станції?"},{speaker:"ІСКРА",text:"Журнал стертий, пане генерале. Шукаємо резервну копію."},{speaker:"ГЕНЕРАЛ НУЛЬ",text:"В архіві за терміналом. Диск не відкривати. Чекайте мого прибуття."},{speaker:"СТАЛКЕР",text:"Ти йому збрехала."},{speaker:"ІСКРА",text:"Дані вже в моїй рації. Якщо Нуль правий, ми вибачимося після війни."}],arrival1:[{speaker:"ІСКРА",text:"Офіцери Monster перекрили архів. Манго тримає лівий прохід. Блакитний на даху, стеж за променем."},{speaker:"СТАЛКЕР",text:"Зачищу підхід. Ти відкриєш сховище."}],clear1:[{speaker:"ІСКРА",text:"Підхід чистий. Архів за цією стіною. Відкриваю, прикрий."}],betrayal:[{speaker:"ІСКРА",text:"Архів відкрито. Це не перехоплення — це угода. Слухай запис."},{speaker:"ЗАПИС · НУЛЬ",text:"Обидві армії виснажені. Після перемир’я безцукрова лінійка має дістатися нам."},{speaker:"ЗАПИС · БІЛИЙ",text:"Я приберу власних офіцерів. Ти — свою Шістку. Тоді підпишемо частки."},{speaker:"ЗАПИС · НУЛЬ",text:"Виконаю. Але вантаж «МС» лишається запечатаним до мого прибуття."},{speaker:"ІСКРА",text:"Сталкере, копія на частоті 142. Передавач в ангарі. Я зробила це до входу в архів."},{speaker:"ГЕНЕРАЛ НУЛЬ",text:"Я наказав чекати. Ти відкрила диск і збрехала мені в ефірі."},{speaker:"СТАЛКЕР",text:"Нуль, відведи зброю від Іскри."},{speaker:"ГЕНЕРАЛ НУЛЬ",text:"Вона вже передала дані. Пробачте.",event:"shot"},{speaker:"ІСКРА",text:"Частота… сто сорок два. Не дай їм стерти запис.",mood:"weak"},{speaker:"СТАЛКЕР",text:"Іскро! Тримайся. Іскро!"},{speaker:"ГЕНЕРАЛ НУЛЬ",text:"Віддай рацію, Сталкере. Ця війна скінчиться сьогодні."},{speaker:"СТАЛКЕР",text:"Так. Але не за твоїм планом."}],alone2:[{speaker:"ГЕНЕРАЛ НУЛЬ",text:"Сталкере, Білий забирає вантаж із ангара. Він порушив угоду. Дай мені диск — я зупиню його.",via:"speaker"},{speaker:"СТАЛКЕР",text:"Ти вбив Іскру за цей диск. До передавача я дійду сам."},{speaker:"ГЕНЕРАЛ НУЛЬ",text:"Тоді ми зустрінемося на смузі. Наказ — перехопити Шістку.",via:"speaker"}],unmask:[{speaker:"ГЕНЕРАЛ НУЛЬ",text:"Білий! Твої офіцери вже стріляють у мене. Відкрий контейнер «МС». Зараз."},{speaker:"БІЛИЙ",text:"Ти все ще думаєш, що ми ділимо ринок? Ви обидва звільняли для мене полиці."},{speaker:"БІЛИЙ",text:"Біла банка була потрібна, щоб Monster виконував мої накази. Подивися, що під нею.",event:"unmask"},{speaker:"СТАЛКЕР",text:"«Мистер Сидр». Після отруєнь його напій вилучали з продажу. Він сховав пляшку в білій банці Monster."},{speaker:"МІСТЕР СИДР",text:"Нулю потрібен безцукровий контракт. Мені потрібні всі його покупці. Архів спалити; свідків не лишати."},{speaker:"ГЕНЕРАЛ НУЛЬ",text:"Усі підрозділи NonStop: вогонь по пляшці. Шістку беру сам."}],sidrPhase:[{speaker:"МІСТЕР СИДР",text:"Monster, перекрийте ангар. Нуль не має забрати мій вантаж.",via:"near"}],zeroPhase:[{speaker:"ГЕНЕРАЛ НУЛЬ",text:"Охорона! Передавач знищити. Сталкера взяти живим.",via:"near"}],clear2:[{speaker:"СТАЛКЕР",text:"Передавач цілий. Іскро, зараз усі почують твою копію."}],upload0:[{speaker:"ЕФІР",text:"Частота 142. Відкритий канал для обох штабів. Відтворення архіву."},{speaker:"ЗАПИС · ІСКРА",text:"Це радистка Шістки, Іскра. Публікую повні накладні й запис угоди. Перевірте підписи самі."},{speaker:"МІСТЕР СИДР",text:"Вимкніть передавач! Жодного сигналу за межі смуги!",via:"speaker"}],upload1:[{speaker:"ЕФІР",text:"Накладні, серія ZERO. Підписи Нуля і Білого. Додаток «МС» — окремий канал постачання."}],upload2:[{speaker:"ЗАПИС · ІСКРА",text:"Язичок мав повернутися до мене після виходу. Збережи його, Сталкере, якщо я не встигну."}],upload3:[{speaker:"ЕФІР",text:"Трансляцію підтверджено. Штаб Monster на зв’язку. Штаб NonStop на зв’язку."}],ending:[{speaker:"ЕФІР",text:"Наказ обох штабів: припинити вогонь. Затримати Нуля й особу під позивним Білий."},{speaker:"ЧОРНИЙ",text:"Наказ прийнято. Зброю покладено.",via:"radio"},{speaker:"СТАЛКЕР",text:"Іскро, запис дійшов."}]},Tv={reload:{speaker:"СТАЛКЕР",chance:.4,lines:["Міняю магазин!","Прикрий. Перезаряджаюсь."]},kill:{speaker:"СТАЛКЕР",chance:.22,lines:["Ціль вибула.","Сектор чистіший."]},lid:{speaker:"СТАЛКЕР",chance:.45,lines:["Точне влучання.","Мінус один."]},hurt:{speaker:"СТАЛКЕР",chance:1,lines:["Потрібне укриття.","Отримав влучання."]},nonstop:{speaker:"СТАЛКЕР",chance:1,lines:["Тисну вперед!","Йду на прорив!"]},allyKill:{speaker:"ІСКРА",chance:.4,lines:["Правий фланг чистий.","Ціль зняла. Рухайся."]},allyWarnHealth:{speaker:"ІСКРА",chance:1,lines:["Сталкере, відійди в укриття!","Тебе притисли. Зміни позицію!"]},grenadeWarn:{speaker:"ІСКРА",chance:1,lines:["Граната! Відійди!","Манго кинув гранату!"]},sniperWarn:{speaker:"ІСКРА",chance:1,lines:["Снайпер на тобі. За бетон!","Блакитний цілиться!"]},stationAttack:{speaker:"ІСКРА",chance:1,lines:["Вони біля консолі! Відтисни їх!","Сталкере, станцію зараз захоплять!"]},idle:{speaker:"ІСКРА",chance:1,lines:["Станція попереду. Не стій на відкритому.","Рухайся до маркера, я за тобою."]},spotted:{speaker:"ЧОРНИЙ",chance:.5,lines:["NonStop на смузі! Вогонь!","Контакт біля блоків!"]},punch:{speaker:"ПАНЧ",chance:1,lines:["Обходжу зліва!","Впритул, за мною!"]},taunt:{speaker:"ГЕНЕРАЛ НУЛЬ",via:"speaker",chance:1,lines:["Сталкере, архів не поверне Іскру.","Останній шанс покласти рацію.","Білий обдурив нас обох. Та ти все ще під моїм наказом."]},sidrTaunt:{speaker:"МІСТЕР СИДР",via:"near",chance:1,lines:["Нуль іде за тобою, Сталкере. Я лише закрию вихід.","Монстрам потрібен був лідер. Вони навіть не спитали, хто під етикеткою."]}},wv=[{kind:"stalker",stages:[{name:"СТАЛКЕР",role:"ТВІЙ ПОЗИВНИЙ",description:"NonStop S.T.A.L.K.E.R., Шістка. Говорить мало, стріляє точно. Перед висадкою трусить ногою і каже, що це вертоліт."}]},{kind:"ally",stages:[{name:"ІСКРА",role:"РАДИСТКА ШІСТКИ",description:"NonStop Original. Чує ефір краще за будь-яку станцію. Носить на удачу власний язичок і жартує, коли страшно."},{from:2,name:"ІСКРА",role:"ЗАГИНУЛА · ОПЕРАЦІЯ 02",stamp:"СПИСАНО",description:"Встигла скинути копію архіву на частоту 142. Останні слова в ефірі стосувалися не архіву."}]},{kind:"black",stages:[{name:"ЧОРНІ",role:"РЯДОВІ MONSTER",description:"Класичні чорні Monster. Тримають смугу, бо так наказали. Що буде з ними після війни, їм не казали."}]},{kind:"orange",stages:[{name:"???",role:"ДАНИХ НЕМАЄ",locked:!0,description:"Розвідка бачить біля термінала кольорові банки. Подробиці — після контакту."},{from:1,name:"ОФІЦЕРИ",role:"МАНГО · ПАНЧ · БЛАКИТНИЙ",description:"Манго кидає гранати: червоне коло на землі — тікай. Панч іде впритул. Блакитний — снайпер, перед пострілом дає промінь."}]},{kind:"white",stages:[{name:"???",role:"ДАНИХ НЕМАЄ",locked:!0,description:"Хтось у штабі Monster підписує накази білим чорнилом. Більше нічого не відомо."},{from:1,name:"БІЛИЙ",role:"ПІДПИС НА НАКЛАДНИХ",description:"Monster Ultra White. Його печатка стоїть на документах зі станції 07 — поруч із печаткою NonStop."},{from:2,name:"БІЛИЙ",role:"ЗМОВНИК",stamp:"ЦІЛЬ",description:"Використав офіцерів Monster і Нуля, щоб звільнити безцукровий ринок. У накладних фігурує підпис «МС»."},{from:3,name:"МІСТЕР СИДР",role:"ОСОБА ПІД МАСКОЮ",stamp:"ВИКРИТО",visual:"sidr",description:"Російський сидр під оболонкою Білого Monster. Продав Нулю союз, а Monster — образ командира; планував прибрати обох після війни."}]},{kind:"zero",stages:[{name:"ГЕНЕРАЛ НУЛЬ",role:"КОМАНДИР ШІСТКИ",description:"NonStop Zero. Тридцять років у строю, кожного в Шістці знає на ім’я. Обіцяє: двадцять хвилин — і вдома."},{from:2,name:"ГЕНЕРАЛ НУЛЬ",role:"ЗРАДНИК",stamp:"ПЕРЕГЛЯНУТО",description:"Підписав угоду за частку ринку й убив Іскру, коли вона передала доказ. Потім воював із Білим за контроль над архівом."}]}];function Av(s=0){return wv.map(t=>({kind:t.kind,...t.stages.filter(e=>(e.from??0)<=s).at(-1)}))}function zo(s){const t=Bc[s.speaker]||Bc.ЧОРНИЙ;return{...t,via:s.via||t.via}}const Ms='<svg viewBox="0 0 24 24" fill="currentColor"><path d="m13.5 1-10 13H11l-1 9 11-14h-8.5z"/></svg>',Rv='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v5m0 10v5M2 12h5m10 0h5"/><circle cx="12" cy="12" r="6"/></svg>',Cv='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/></svg>',Pv='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m9 3-1 3-3 1-2 4 2 3 1 4 4 3 3-1 4-1 3-4-1-3-1-4-4-2-3 1Z"/><circle cx="12" cy="12" r="3"/></svg>',Dv=["ІСКРА: «Сталкере! Не смій мені тут видихатися!»","ІСКРА: «Вставай! Хто мені язичок поверне?»","В ефірі тиша. Ніхто не кличе."];function Lv(s){document.querySelector("#app").innerHTML=`
    <main id="game-shell">
      <div id="viewport" aria-label="Тривимірна сцена аеропорту"></div>
      <div class="grain" aria-hidden="true"></div><div class="vignette" aria-hidden="true"></div><div class="nonstop-overlay" aria-hidden="true"></div>
      <div id="loading"><span class="loading-bolt">${Ms}</span><span>ВСТАНОВЛЕННЯ ЗВ’ЯЗКУ<span class="loading-dots">...</span></span></div>
      <section id="menu" class="screen">
        <header class="topbar">
          <a class="brand" href="#" aria-label="Головне меню"><span class="brand-icon">${Ms}</span><span>NONSTOP<span class="brand-small">INTERACTIVE OPERATIONS</span></span></a>
          <nav class="main-nav" aria-label="Головна навігація"><button class="nav-item active" data-action="campaign">КАМПАНІЯ</button><button class="nav-item" data-action="dossier">ДОСЬЄ</button><button class="nav-item" data-action="controls">КЕРУВАННЯ</button></nav>
          <div class="top-tools"><span class="build-label">BUILD 01.10 <i></i></span><button class="icon-button sound-button" title="Увімкнути / вимкнути звук" aria-label="Увімкнути / вимкнути звук">${Cv}</button><button class="icon-button" data-action="settings" title="Налаштування" aria-label="Налаштування">${Pv}</button></div>
        </header>
        <div class="menu-copy">
          <div class="eyebrow"><span class="tiny-cross">+</span> СЮЖЕТНА КАМПАНІЯ <span class="eyebrow-rule"></span> 01 — 03</div>
          <h1>ЕНЕРГЕТИЧНЕ<br><span>ПЕРЕМИР’Я</span><span class="title-period">.</span></h1>
          <p class="tagline">НУЛЬ ЦУКРУ. <span>НУЛЬ ДОВІРИ.</span></p>
          <p class="intro-copy">Monster і NonStop воюють за ринок енергетиків. Перемир’я зривається знову й знову.<br>Шістка летить у Гостомель по журнал переговорів. Диск покаже, хто зрадив обидві армії.<br>Ти — Сталкер. Поруч радистка Іскра. Наказ віддав генерал Нуль.</p>
          <div class="deploy-actions"><button id="start-button" class="primary-button"><span>${Rv} ПОЧАТИ ОПЕРАЦІЮ</span><span class="button-arrow">↗</span></button><button id="continue-button" class="continue-button" hidden>ПРОДОВЖИТИ КАМПАНІЮ <span>→</span></button></div>
          <div class="menu-details"><span><i class="status-dot"></i> ОДИНОЧНА КАМПАНІЯ</span><span>3 РОЗДІЛИ</span><span>THREE.JS</span></div>
        </div>
        <div class="scene-coordinate"><span class="coordinate-cross">+</span><div>50°35′24.0″N 30°11′31.2″E<small>UKRAINE / HOSTOMEL AIRPORT</small></div></div>
        <div class="hero-tag"><span class="hero-tag-line"></span><div><span class="mono">ПОЗИВНИЙ</span><strong>STALKER</strong><small><i></i> NONSTOP / ШІСТКА</small></div></div>
        <div class="scene-caption"><span class="record-dot"></span> LIVE FEED <span class="scene-caption-line"></span> ГОСТОМЕЛЬ, 05:47</div>
        <footer class="menu-footer"><div class="operation-card"><span class="operation-number">01</span><div><span class="mono">ПЕРША ОПЕРАЦІЯ</span><strong>ТУМАН НАД ГОСТОМЕЛЕМ</strong><p>Аеропорт «Антонов» <span>/</span> Висадка</p></div><span class="operation-icon">↗</span></div><div class="footer-note"><span class="small-bolt">${Ms}</span><p>ЗВЕДЕННЯ ШТАБУ, 05:40:<br><strong>СМУГА ПОРОЖНЯ. ОПІР НЕ ОЧІКУЄТЬСЯ.</strong></p></div><span class="fiction-note">ХУДОЖНЯ ПАРОДІЯ<br>НЕОФІЦІЙНИЙ ФАН-ПРОЄКТ</span></footer>
      </section>
      <section id="hud" hidden aria-label="Ігровий інтерфейс">
        <div class="hud-top"><div class="mission-box"><span id="chapter-kicker" class="mono"></span><h2 id="chapter-title"></h2><p id="objective-text"></p><div id="hold-box" hidden><div class="meter hold-meter"><i id="hold-bar"></i></div><span id="hold-status"></span></div><div id="enemy-count"></div></div><div class="compass"><span>SW</span><span>W</span><b id="bearing">000</b><span>N</span><span>NE</span></div><button class="hud-pause icon-button" data-action="pause" aria-label="Пауза">Ⅱ</button></div>
        <div id="crosshair"><i></i><i></i><i></i><i></i><span></span></div><div id="hit-marker">×</div><div id="damage-flash"></div><div id="damage-dir" aria-hidden="true"><i></i></div>
        <div id="target-marker"><span>◇</span><small id="target-distance"></small></div>
        <div id="interaction" hidden><kbd>E</kbd><span id="interaction-text"></span></div>
        <div id="notification" role="status"></div><div id="kill-notice"></div>
        <div class="hud-bottom"><div class="player-status"><span class="player-callsign">${Ms} STALKER <small>NONSTOP</small></span><div class="health-row"><span>+</span><div class="meter health-meter"><i id="health-bar"></i></div><b id="health-number">100</b></div><div class="energy-row">${Ms}<div class="meter energy-meter"><i id="energy-bar"></i></div><span>ЕНЕРГІЯ</span></div><div class="nonstop-row"><kbd>F</kbd><div class="meter nonstop-meter"><i id="nonstop-bar"></i></div><span id="nonstop-label">NONSTOP</span></div></div><div class="hud-help"><kbd>W A S D</kbd> РУХ <kbd>R</kbd> МАГАЗИН <kbd>Q</kbd> ГРАНАТА <kbd>F</kbd> NONSTOP <kbd>ESC</kbd> ПАУЗА</div><div class="ammo-status"><span class="weapon-label">ШТУРМОВА ГВИНТІВКА <b>5.56</b></span><div><strong id="ammo-number">30</strong><span class="ammo-divider">/</span><span id="reserve-number">180</span></div><span id="grenade-count">◈ 3 ГРАНАТИ</span><span id="reload-status"></span></div></div>
        <canvas id="minimap" width="180" height="180" aria-label="Мапа аеропорту"></canvas>
      </section>
       <section id="cinematic" hidden><div class="cinematic-top"><span id="cinematic-kicker"></span><span>NONSTOP OPERATIONS</span></div><div id="cinematic-card" hidden><span id="card-progress"></span><span id="card-kicker"></span><h2 id="card-title"></h2><p id="card-text"></p></div><div class="cinematic-title"><span id="cinematic-number"></span><h2 id="cinematic-heading"></h2></div><button id="skip-button"><kbd>SPACE</kbd> ПРОПУСТИТИ</button></section>
      <div id="dialogue" hidden aria-live="polite"><div id="dialogue-portrait"><span class="dossier-can"></span><i class="radio-badge">РАЦІЯ</i></div><div><span id="dialogue-speaker"></span><p id="dialogue-text"></p></div><div class="radio-waves"><i></i><i></i><i></i><i></i><i></i></div></div>
      <section id="pause" class="overlay" hidden><div class="pause-panel"><span class="eyebrow">ЗВ’ЯЗОК ПРИЗУПИНЕНО</span><h2>ПАУЗА</h2><p>Зв’язок утримується. Повертайся, коли будеш готовий.</p><button class="primary-button" data-action="resume"><span>ПОВЕРНУТИСЯ ДО БОЮ</span><span>→</span></button><button class="outline-button" data-action="controls">КЕРУВАННЯ</button><button class="outline-button" data-action="settings">НАЛАШТУВАННЯ</button><button class="text-button" data-action="menu">ДО ГОЛОВНОГО МЕНЮ</button></div></section>
      <section id="death" class="overlay" hidden><div class="pause-panel"><span class="eyebrow">СИГНАЛ ВТРАЧЕНО</span><h2>БАНКУ<br>ЗІМ’ЯТО.</h2><p id="death-text"></p><button class="primary-button" data-action="retry"><span>З КОНТРОЛЬНОЇ ТОЧКИ</span><span>↻</span></button><button class="text-button" data-action="menu">ДО ГОЛОВНОГО МЕНЮ</button></div></section>
       <section id="ending" class="overlay" hidden><div class="ending-panel"><span class="eyebrow">ЗВЕДЕННЯ · 07:12 · ГОСТОМЕЛЬ</span><h2>ЕНЕРГЕТИЧНЕ<br><em>ПЕРЕМИР’Я.</em></h2><div class="ending-stamp">ПІДПИСАНО</div><p>О 06:58 архів пішов у відкритий ефір. О 07:05 штаби Monster і NonStop оголосили припинення вогню.</p><p class="ending-story">Генерала Нуля затримали за вбивство Іскри й угоду з ворогом. Білу оболонку знайшли в ангарі: під нею ховався «Мистер Сидр». Він продав обом сторонам різні обіцянки й воював за власний ринок. Його вантаж і архів опечатали.<br><br>Чорні Monster на смузі склали зброю. Втрати Шістки за операцію: одна банка. Позивний — Іскра.<br><br>Її язичок Сталкер залишив при собі.</p><span class="ending-dedication">ІСКРІ.</span><div class="ending-stats" id="ending-stats"></div><button class="primary-button" data-action="menu"><span>ПОВЕРНУТИСЯ НА БАЗУ</span><span>→</span></button></div></section>
      <dialog id="info-dialog"><button class="dialog-close icon-button" aria-label="Закрити">×</button><div id="dialog-content"></div></dialog>
      <div id="touch-controls" hidden><div class="touch-move"><button data-key="KeyW">▲</button><div><button data-key="KeyA">◀</button><button data-key="KeyS">▼</button><button data-key="KeyD">▶</button></div></div><div class="touch-actions"><button data-key="KeyE">E</button><button data-key="KeyR">R</button><button data-key="KeyQ">Q</button><button data-key="KeyF">F</button><button id="touch-fire">ВОГОНЬ</button></div></div>
      <div id="fatal-error" class="overlay" hidden><div class="pause-panel"><span class="eyebrow">НЕ ВДАЛОСЯ ЗАПУСТИТИ 3D</span><h2>НЕМАЄ СИГНАЛУ</h2><p id="error-detail"></p><button class="primary-button" onclick="location.reload()">СПРОБУВАТИ ЗНОВУ</button></div></div>
    </main>`;const t=h=>document.getElementById(h),e=(h,d)=>{t(h).hidden=!d},n=t("info-dialog"),i=`<span class="eyebrow">ПОЛЬОВИЙ ПОСІБНИК</span><h2>КЕРУВАННЯ</h2><p class="modal-intro">Вид від першої особи. Натисни на поле бою, щоб захопити курсор. На сенсорному екрані — кнопки руху й проведення правою частиною екрана для огляду.</p><div class="controls-grid">${[["W A S D","Пересування"],["МИША","Огляд"],["ЛКМ","Стріляти"],["ПКМ","Прицілюватися"],["SHIFT","Бігти"],["SPACE","Стрибок / пропустити сцену"],["R","Перезарядити"],["Q","Кинути гранату"],["F","NONSTOP: сповільнити бій, коли шкала повна"],["E","Взаємодія / поповнити запас"],["ESC","Пауза"]].map(([h,d])=>`<div><kbd>${h}</kbd><span>${d}</span></div>`).join("")}</div><p class="modal-tip">Перед пострілом ворог блимає дулом, снайпер дає промінь. Сховайся або зрушся з місця — куля піде повз. Червоне коло на землі — граната. Влучання у верх банки зриває кришку. Вбивства заряджають шкалу NONSTOP.</p>`;function r(h){if(h==="controls"&&(t("dialog-content").innerHTML=i),h==="dossier"){const d=Av(s.getProgress()).map(f=>`<article class="dossier-card ${f.visual||f.kind}${f.locked?" locked":""}"><span class="dossier-can"></span><div><span class="mono">${f.role}</span><h3>${f.name}</h3><p>${f.description}</p></div>${f.stamp?`<span class="dossier-stamp">${f.stamp}</span>`:""}</article>`).join("");t("dialog-content").innerHTML=`<span class="eyebrow">ОСОБОВІ СПРАВИ / ОНОВЛЮЮТЬСЯ ПІД ЧАС КАМПАНІЇ</span><h2>ОСОБОВІ<br>СПРАВИ.</h2><p class="modal-intro">Справи доповнюються, коли ти дізнаєшся більше.</p><div class="dossier-grid">${d}</div><p class="modal-tip">Художня пародія. Бренди належать своїм власникам; проєкт не пов’язаний з їхніми виробниками. Аеропорт — художня інтерпретація, не точна реконструкція.</p>`}if(h==="settings"){const d=s.getSettings();t("dialog-content").innerHTML=`<span class="eyebrow">КОНФІГУРАЦІЯ ОПЕРАЦІЇ</span><h2>НАЛАШТУВАННЯ</h2><div class="settings-list"><label><span>Гучність <output id="volume-value">${Math.round(d.volume*100)}%</output></span><input id="volume-setting" type="range" min="0" max="100" value="${d.volume*100}"></label><label><span>Музика <output id="music-value">${Math.round(d.music*100)}%</output></span><input id="music-setting" type="range" min="0" max="100" value="${d.music*100}"></label><label><span>Чутливість миші <output id="sensitivity-value">${d.sensitivity.toFixed(1)}</output></span><input id="sensitivity-setting" type="range" min="0.3" max="2" step="0.1" value="${d.sensitivity}"></label><label><span>Якість графіки</span><select id="quality-setting"><option value="high">Висока — тіні та повна роздільність</option><option value="medium">Збалансована — менше навантаження</option><option value="low">Низька — максимальна швидкодія</option></select></label><label class="toggle-label"><span>Зменшити хитання камери</span><input id="motion-setting" type="checkbox" ${d.reducedMotion?"checked":""}></label></div><p class="modal-tip">Налаштування зберігаються автоматично. Кампанія зберігає прогрес на початку кожного розділу.</p>`,t("quality-setting").value=d.quality,t("volume-setting").oninput=f=>{s.settings({volume:+f.target.value/100}),t("volume-value").value=`${f.target.value}%`},t("music-setting").oninput=f=>{s.settings({music:+f.target.value/100}),t("music-value").value=`${f.target.value}%`},t("sensitivity-setting").oninput=f=>{s.settings({sensitivity:+f.target.value}),t("sensitivity-value").value=(+f.target.value).toFixed(1)},t("quality-setting").onchange=f=>s.settings({quality:f.target.value}),t("motion-setting").onchange=f=>s.settings({reducedMotion:f.target.checked})}n.open||n.showModal()}document.querySelectorAll("[data-action]").forEach(h=>h.addEventListener("click",()=>{const d=h.dataset.action;["dossier","controls","settings"].includes(d)?r(d):s.action(d)})),t("start-button").onclick=()=>s.action("start"),t("continue-button").onclick=()=>s.action("continue"),t("skip-button").onclick=()=>s.action("skip"),document.querySelector(".sound-button").onclick=()=>s.action("sound"),document.querySelector(".dialog-close").onclick=()=>n.close(),n.addEventListener("click",h=>{h.target===n&&n.close()}),document.querySelector(".brand").onclick=h=>h.preventDefault();const a=[...document.querySelectorAll(".radio-waves i")];let o,l=-1,c="",u="";return{el:t,show:e,openModal:r,isModal:()=>n.open,cinematicCard(h,d,f){t("card-progress").textContent=`${String(d).padStart(2,"0")} / ${String(f).padStart(2,"0")}`,t("card-kicker").textContent=h.kicker,t("card-title").textContent=h.title,t("card-text").textContent=h.text,e("cinematic-card",!0)},ready(){t("loading").classList.add("loaded"),setTimeout(()=>e("loading",!1),450)},menu(h){["hud","cinematic","pause","death","ending","dialogue","touch-controls"].forEach(d=>e(d,!1)),e("menu",!0),e("continue-button",h),this.nonstop(0,!1)},playing(h){["menu","cinematic","pause","death","ending"].forEach(d=>e(d,!1)),e("hud",!0),e("touch-controls",h)},chapter(h,d,f="combat"){const m=je[h];t("chapter-kicker").textContent=m.kicker,t("chapter-title").textContent=m.title,t("objective-text").textContent=m.objectives[f]||m.objectives.reach,e("hold-box",f==="hold"),t("enemy-count").textContent=d?`ВОРОГІВ У СЕКТОРІ: ${d}`:f==="reach"?"СЕКТОР ЧИСТИЙ · РУХАЙСЯ ДО МАРКЕРА":f==="hold"?"ТРИМАЙ ПОЗИЦІЮ":""},hold(h,d){const f=`${Math.round(h*100)}${d}`;f!==c&&(c=f,t("hold-bar").style.width=`${Math.round(h*100)}%`,t("hold-box").dataset.status=d,t("hold-status").textContent=d==="far"?`${Math.round(h*100)}% · ПОВЕРНИСЯ ДО ПОЗИЦІЇ`:d==="contested"?`${Math.round(h*100)}% · ВОРОГ БІЛЯ ПОЗИЦІЇ`:h>=1?"100% · ДОБИЙ ЗАЛИШКИ":`${Math.round(h*100)}%`)},dialogue(h){if(e("dialogue",!!h),!h)return;const d=zo(h);t("dialogue-speaker").textContent=h.speaker,t("dialogue-text").textContent=h.text,t("dialogue-portrait").className=`${d.kind} via-${d.via}`},talk(h){const d=Math.round(h*6);d!==l&&(l=d,a.forEach((f,m)=>{f.style.transform=`scaleY(${.25+h*(.5+m*7%5/6)})`}),t("dialogue").classList.toggle("talking",h>.05))},nonstop(h,d){`${h}${d}`!==u&&(u=`${h}${d}`,t("nonstop-bar").style.width=`${h}%`,t("nonstop-label").textContent=d?"NONSTOP · АКТИВНО":h>=100?"NONSTOP · ГОТОВО":"NONSTOP",t("game-shell").classList.toggle("nonstop-ready",h>=100&&!d),t("game-shell").classList.toggle("nonstop-active",d))},damageDir(h){const d=t("damage-dir");d.style.transform=`translate(-50%,-50%) rotate(${h}rad)`,d.classList.remove("flash"),d.offsetWidth,d.classList.add("flash")},death(h){t("death-text").textContent=Dv[Math.min(h,2)],e("death",!0)},notify(h){t("notification").textContent=h,t("notification").classList.add("visible"),clearTimeout(o),o=setTimeout(()=>t("notification").classList.remove("visible"),3200)},sound(h){document.querySelector(".sound-button").classList.toggle("muted",h),document.querySelector(".sound-button").setAttribute("aria-pressed",String(!h))},fatal(h){e("loading",!1),e("fatal-error",!0),t("error-detail").textContent=h}}}const Es=30,Cr=180,Iv=1.65,Vc=6,Vh="energetic-truce-save-v1",Gc={black:{hp:65,speed:2.1,keep:[8,16],windup:.45,lock:.45,cooldown:[1.3,2.1],range:52,damage:6,dodge:5},orange:{hp:100,speed:1.9,keep:[11,20],windup:.45,lock:.45,cooldown:[1.6,2.4],range:45,damage:6,dodge:5,grenade:[6,9]},pink:{hp:100,speed:4.4,keep:[0,3],windup:.3,lock:.3,cooldown:[.8,1.2],range:10,damage:10,dodge:4,charge:!0},blue:{hp:90,speed:1.7,keep:[22,40],windup:1.3,lock:.3,cooldown:[2.4,3.2],range:70,damage:24,dodge:1.2,laser:!0},sidr:{hp:300,speed:2.3,keep:[9,17],windup:.48,lock:.28,cooldown:[1.7,2.3],range:55,damage:6,dodge:5,burst:3,boss:!0},zero:{hp:240,speed:1.2,keep:[6,14],windup:.5,lock:.5,cooldown:[1.8,2.4],range:45,damage:5,dodge:5,burst:3,boss:!0}};function Oe(s,t,e){return Math.min(e,Math.max(t,s))}function Uv(s,t){const e=Math.min(Es-s,t);return{magazine:s+e,reserve:t-e}}function Nv(s,t,e){const n=t>1.8,i=n?57:31,r=e>48?.75:1;return{damage:Math.round(i*r),critical:n}}function Fv(s,t,e){return(s.laser?.9:t<13?.72:t<30?.52:.36)*(1-Oe(e/s.dodge,0,s.laser?.92:.6))}function Ov(s,t,e,n){return n?s:Math.min(1,s+t/e)}function kv(s,t,e){return s.filter(n=>n.at>t&&n.at<=e)}function Va(s,t){return Oe(s+({kill:20,crit:10,ally:4}[t]||0),0,100)}function Yr(s){try{const t=JSON.parse(s.getItem(Vh));if(!t||!Number.isInteger(t.chapter)||t.chapter<0||t.chapter>2)return null;const e=t.completed===!0,n=Number.isInteger(t.seen)?Oe(t.seen,0,3):0;return{chapter:t.chapter,completed:e,seen:Math.max(n,e?3:t.chapter)}}catch{return null}}function Hc(s,t,e=!1){const n=Math.max(Yr(s)?.seen??0,e?3:t);try{s.setItem(Vh,JSON.stringify({chapter:t,completed:e,seen:n}))}catch{}}function zv(s){return s?s.seen:0}function Bv(s,t,e,n=4.5){return s.every(i=>i.dead)&&Math.hypot(t.x-e[0],t.z-e[1])<=n}let ie={volume:.55,music:.7,sensitivity:1,quality:"high",reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,muted:!1};try{ie={...ie,...JSON.parse(localStorage.getItem("energetic-truce-settings")||"{}")}}catch{}ie.volume=Oe(Number(ie.volume)||0,0,1);ie.music=Number.isFinite(Number(ie.music))?Oe(Number(ie.music),0,1):.7;ie.sensitivity=Oe(Number(ie.sensitivity)||1,.3,2);["low","medium","high"].includes(ie.quality)||(ie.quality="high");const Gt=new cv;Gt.setVolume(ie.volume);Gt.setMusicVolume(ie.music);Gt.setMuted(ie.muted);const Je=new mv(Gt);let Bo;const vt=Lv({action:s=>Bo?.action(s),getSettings:()=>ie,getProgress:()=>zv(Yr(localStorage)),settings:s=>{Object.assign(ie,s),Gt.setVolume(ie.volume),Gt.setMusicVolume(ie.music);try{localStorage.setItem("energetic-truce-settings",JSON.stringify(ie))}catch{}Bo?.applyQuality()}}),Vv=[22.4,-33.2],Gv=[[-4,30],[18,-29],[-19,-72]],Wc={black:"#e09877",orange:"#f0a64a",pink:"#f08fb0",blue:"#8fc8e8",sidr:"#d99a47",zero:"#f8ce90"};class Hv{constructor(){this.renderer=new Zg({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(innerWidth,innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qc,this.renderer.toneMapping=Yc,this.renderer.toneMappingExposure=1.16,this.renderer.outputColorSpace=Le,vt.el("viewport").append(this.renderer.domElement),this.scene=new dh,this.scene.background=new Qt(8885661),this.scene.fog=new tl(8885661,.0082),this.camera=new qe(55,innerWidth/innerHeight,.08,1100),this.scene.add(new rf(13096153,3160894,1.85)),this.sun=new hf(14476519,2.15),this.sun.position.set(-48,74,-60),this.sun.castShadow=!0,Object.assign(this.sun.shadow.camera,{left:-70,right:70,top:85,bottom:-85,near:1,far:250}),this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.06,this.sun.target.position.set(0,0,-25),this.scene.add(this.sun,this.sun.target);const t=new Fo(this.renderer),e=new Kg,n=t.fromScene(e,.08);this.scene.environment=n.texture,this.scene.environmentIntensity=.42,e.dispose(),t.dispose(),this.createSky(),this.world=jg(this.scene),this.createInsertionVisuals(),this.createAftermathVisuals(),this.navigator=new lv(this.world.colliders,this.world.bounds),Gt.setFires(this.world.fires),this.helicopterBase=this.world.helicopter.position.clone(),this.player=ai("stalker"),this.player.position.set(0,0,30),this.player.rotation.y=.25,this.scene.add(this.player),this.ally=ai("ally"),this.ally.position.set(-3.3,0,26.5),this.ally.rotation.y=.5,this.scene.add(this.ally),this.generalCutscene=ai("zero"),this.generalCutscene.visible=!1,this.scene.add(this.generalCutscene),this.scene.add(this.camera),this.viewModel=new _e,this.camera.add(this.viewModel),this.viewWeapon=zh(),this.viewWeapon.rotation.y=Math.PI,this.viewWeapon.scale.setScalar(.76),this.viewModel.add(this.viewWeapon);const i=new Se({color:4939831,roughness:.92}),r=new Se({color:2502181,roughness:.88});for(const a of[-1,1]){const o=new fe(new Te(.065,.09,.48,10),i);o.position.set(a*.21,-.31,.19),o.rotation.x=-.54,o.rotation.z=a*.28,this.viewModel.add(o);const l=new fe(new gn(.084,10,8),r);l.position.set(a*.13,-.13,-.05),this.viewModel.add(l)}this.viewModel.visible=!1,this.keyLight=new of(15068103,35,25,.64,.8,1.5),this.keyLight.position.set(4,6,36),this.keyLight.target=this.player,this.scene.add(this.keyLight),this.rimLight=new Vs(15841397,9,16),this.rimLight.position.set(-3,3,26),this.scene.add(this.rimLight),this.raycaster=new df,this.ray=new Ws,this.v1=new w,this.v2=new w,this.v3=new w,this.temp=new w,this.cameraTarget=new w,this.desiredCamera=new w,this.mode="menu",this.resumeMode="playing",this.chapter=0,this.phase="combat",this.holdProgress=0,this.enemies=[],this.effects=[],this.grenadeObjects=[],this.enemyGrenades=[],this.debris=[],this.keys=new Set,this.touch=matchMedia("(pointer: coarse)").matches,this.mouseDown=!1,this.aiming=!1,this.yaw=0,this.pitch=.08,this.health=100,this.energy=100,this.ammo=Es,this.reserve=Cr,this.grenades=3,this.reloadTimer=0,this.shotCooldown=0,this.hurtTimer=0,this.hitTimer=0,this.killTimer=0,this.velocityY=0,this.shake=0,this.safeTime=0,this.hitstop=0,this.nonstop=0,this.nonstopTime=0,this.combatHeat=0,this.allyCooldown=1,this.idleTimer=0,this.tauntTimer=14,this.lastObjectiveDistance=1/0,this.weaponKick=0,this.allyNav={path:[],index:0,timer:0},this.unmaskTriggered=!1,this.elapsed=0,this.playTime=0,this.kills=0,this.shots=0,this.hits=0,this.dialogueQueue=[],this.dialogueTimer=0,this.storyLine=!1,this.cinematic=null,this.speech=null,this.talker=null,this.lastTalker=null,this.barkCooldowns={},this.barkGlobal=0,this.barkIndex={},this.objectiveRing=this.makeObjective(),this.scene.add(this.objectiveRing),this.objectiveRing.visible=!1,this.flashLights=Array.from({length:3},()=>{const a=new Vs(16762231,0,4);return a.userData.remaining=0,this.scene.add(a),a}),this.particles=Ev(this.scene),this.createCombatAssets(),this.createDust(),this.createRain(),this.bindEvents(),this.applyQuality(),this.showMenu(),this.last=performance.now(),this.frame=this.frame.bind(this),requestAnimationFrame(this.frame)}createSky(){const t=new fe(new gn(600,32,16),new Sn({side:ke,depthWrite:!1,uniforms:{},vertexShader:"varying vec3 vWorld; void main(){vWorld=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(vWorld,1.);}",fragmentShader:`varying vec3 vWorld;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){vec2 i=floor(p),f=fract(p); f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
    void main(){vec3 d=normalize(vWorld);float h=max(d.y,0.);vec3 col=mix(vec3(.52,.58,.62),vec3(.29,.35,.39),pow(h,.58));vec2 uv=d.xz/(h+.2)*2.3;float n=noise(uv)*.55+noise(uv*2.1)*.3+noise(uv*4.2)*.15;float cloud=smoothstep(.39,.67,n)*smoothstep(.02,.25,h);col=mix(col,vec3(.62,.67,.69),cloud*.46);float breakInClouds=pow(max(dot(d,normalize(vec3(-.5,.2,-.7))),0.),10.);col+=vec3(.055,.063,.066)*breakInClouds;gl_FragColor=vec4(col,1.);}`}));t.renderOrder=-1,this.scene.add(t)}createDust(){const e=new Float32Array(540);for(let i=0;i<180;i++)e[i*3]=(Math.random()-.5)*125,e[i*3+1]=Math.random()*18,e[i*3+2]=Math.random()*170-100;const n=new pe;n.setAttribute("position",new ze(e,3)),this.dust=new mh(n,new ph({color:11714756,size:.05,transparent:!0,opacity:.14,depthWrite:!1})),this.scene.add(this.dust)}createRain(){const e=new Float32Array(2520);this.rainDrops=Array.from({length:420},()=>({x:(Math.random()-.5)*34,y:Math.random()*20-7,z:(Math.random()-.5)*42,speed:16+Math.random()*9,length:.17+Math.random()*.22}));const n=new pe;this.rainPosition=new ze(e,3),this.rainPosition.setUsage(ih),n.setAttribute("position",this.rainPosition),this.rain=new Hr(n,new ui({color:12373459,transparent:!0,opacity:.23,depthWrite:!1,fog:!1})),this.rain.frustumCulled=!1,this.scene.add(this.rain)}updateRain(t){if(ie.quality==="low")return;const e=this.camera.position;if(this.rain.visible=!(e.x>-57.5&&e.x<-14.5&&e.z>-98&&e.z<-58&&e.y<18)&&!(e.x>28&&e.x<52&&e.z>-45&&e.z<-23&&e.y<10),!this.rain.visible)return;this.rain.position.copy(e);const n=this.rainPosition.array;for(let i=0;i<this.rainDrops.length;i++){const r=this.rainDrops[i];r.y-=r.speed*t,r.x+=2.7*t,r.y<-7&&(r.y=13+Math.random()*2,r.x=(Math.random()-.5)*34,r.z=(Math.random()-.5)*42),r.x>17&&(r.x-=34);const a=i*6;n[a]=r.x,n[a+1]=r.y,n[a+2]=r.z,n[a+3]=r.x-.035,n[a+4]=r.y+r.length,n[a+5]=r.z}this.rainPosition.needsUpdate=!0}createInsertionVisuals(){this.insertionVisuals=new _e,this.insertionVisuals.visible=!1,this.scene.add(this.insertionVisuals),this.insertionFlights=[],this.insertionParachutes=[];for(const[n,i,r,a,o]of[[0,-34,17,5,.9],[1,11,32,-49,.55],[2,39,27,-32,.46]]){const l=this.world.helicopter.clone(!0);l.position.set(i,r,a),l.rotation.y=-.7,l.scale.setScalar(o),l.traverse(c=>{c.isMesh&&(c.castShadow=!1)}),this.insertionVisuals.add(l),this.insertionFlights.push({mesh:l,rotor:l.getObjectByName("main-rotor"),tail:l.getObjectByName("tail-rotor"),x:i,y:r,z:a,index:n})}const t=new Se({color:2700087,roughness:.94,side:Ie}),e=new ui({color:7898246,transparent:!0,opacity:.7});for(const[n,i,r,a]of[[0,-8,25,-21],[1,9,31,-30],[2,25,23,-39],[3,-25,35,-50],[4,38,32,-17]]){const o=new _e;this.insertionVisuals.add(o);const l=new fe(new gn(2.05,14,7,0,Math.PI*2,0,Math.PI/2),t);l.scale.y=.58,l.castShadow=!1,o.add(l);const c=[];for(let d=0;d<8;d++){const f=d*Math.PI/4;c.push(Math.cos(f)*2.02,0,Math.sin(f)*2.02,Math.cos(f)*.28,-3.05,Math.sin(f)*.28)}const u=new pe;u.setAttribute("position",new re(c,3)),o.add(new Hr(u,e));const h=ai("black");h.scale.setScalar(.72),h.position.y=-4.55,o.add(h),this.insertionParachutes.push({mesh:o,x:i,y:r,z:a,index:n})}}updateInsertionVisuals(t,e){const n=Math.max(0,e-Vi.length*4.8);for(const i of this.insertionFlights)i.mesh.position.set(i.x+n*.32,i.y+Math.sin(e*.75+i.index)*.22,i.z-n*.42),i.rotor.rotation.y+=t*13,i.tail.rotation.x+=t*24;for(const i of this.insertionParachutes)i.mesh.position.set(i.x+n*.17,i.y-n*.62,i.z+n*.08),i.mesh.rotation.y=Math.sin(e*.32+i.index)*.08}createAftermathVisuals(){this.aftermath=new _e,this.aftermath.visible=!1,this.scene.add(this.aftermath);for(const[t,e,n,i]of[["black",6.2,22.3,.35],["blue",8.8,14.3,-.7]]){const r=ai(t);r.position.set(e,0,n),r.rotation.y=i,r.userData.setDead(!0),r.userData.animate(1,0,!1),this.aftermath.add(r)}}createCombatAssets(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,248,220,1)"),n.addColorStop(.25,"rgba(255,190,110,.8)"),n.addColorStop(1,"rgba(255,120,40,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const i=new Zr(t);i.colorSpace=Le,this.glintMaterial=new As({map:i,transparent:!0,depthWrite:!1,blending:Or}),this.laserMaterial=new ui({color:16734780,transparent:!0,opacity:.75,depthWrite:!1}),this.grenadeGeometry=new gn(.13,10,8),this.grenadeMaterial=new Se({color:8018476,metalness:.5,roughness:.6}),this.warnGeometry=new Xr(.82,1,40),this.warnMaterial=new di({color:16734780,transparent:!0,opacity:.7,side:Ie,depthWrite:!1}),this.lidGeometry=new Te(.35,.37,.06,24),this.lidMaterial=new Se({color:12568774,metalness:.86,roughness:.26}),this.maskShardGeometry=new Te(.43,.43,1.22,6,1,!0,0,Math.PI/3),this.maskShardMaterial=new Se({color:15001311,metalness:.38,roughness:.56,side:Ie})}makeObjective(){const t=new _e,e=new fe(new Xr(1.25,1.32,56),new di({color:13888645,side:Ie,transparent:!0,opacity:.6,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.y=.12,t.add(e);const n=new fe(new al(.24),new di({color:13888645,wireframe:!0}));return n.position.y=2.4,t.add(n),t}applyQuality(){const t=ie.quality==="low"?.7:ie.quality==="medium"?1:Math.min(devicePixelRatio,1.5);this.renderer.setPixelRatio(t),this.renderer.setSize(innerWidth,innerHeight),this.renderer.shadowMap.enabled=ie.quality!=="low",this.dust.visible=ie.quality!=="low",this.rain.visible=ie.quality!=="low",this.particles.setScale(this.renderer.getDrawingBufferSize(new et).y*.5)}bindEvents(){addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.particles.setScale(this.renderer.getDrawingBufferSize(new et).y*.5)});for(const e of["pointerdown","keydown"])addEventListener(e,()=>{this.mode==="menu"&&Gt.start()},{capture:!0});addEventListener("keydown",e=>{if(!vt.isModal()&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),!e.repeat)){if(this.keys.add(e.code),e.code==="Escape"){(this.mode==="playing"||this.mode==="cinematic")&&this.pause();return}if(this.mode==="cinematic"&&e.code==="Space"){this.finishCinematic();return}this.mode==="playing"&&(e.code==="KeyR"&&this.reload(),e.code==="KeyQ"&&this.throwGrenade(),e.code==="KeyE"&&this.interact(),e.code==="KeyF"&&this.activateNonstop(),e.code==="Space"&&this.player.position.y<.04&&(this.velocityY=5))}}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>{this.keys.clear(),this.mouseDown=!1,(this.mode==="playing"||this.mode==="cinematic")&&this.pause()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.mode==="playing"||this.mode==="cinematic")&&this.pause()}),document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&(this.mode==="playing"||this.mode==="cinematic")&&!this.touch&&this.pause()}),document.addEventListener("pointerlockerror",()=>{this.mode==="playing"&&vt.notify("Затисни ліву кнопку на полі бою для огляду. WASD — рух.")}),addEventListener("mousemove",e=>{this.mode==="playing"&&(document.pointerLockElement===this.renderer.domElement||this.dragging)&&(this.yaw-=e.movementX*.0022*ie.sensitivity,this.pitch=Oe(this.pitch+e.movementY*.0022*ie.sensitivity,-.7,.9))}),this.renderer.domElement.addEventListener("mousedown",e=>{this.mode==="playing"&&(document.pointerLockElement||(this.lockPointer(),this.dragging=!0),e.button===0&&(this.mouseDown=!0,this.shoot()),e.button===2&&(this.aiming=!0))}),addEventListener("mouseup",e=>{e.button===0&&(this.mouseDown=!1,this.dragging=!1),e.button===2&&(this.aiming=!1)}),this.renderer.domElement.addEventListener("contextmenu",e=>e.preventDefault()),document.querySelectorAll("[data-key]").forEach(e=>{e.addEventListener("pointerdown",i=>{i.preventDefault();const r=e.dataset.key;this.keys.add(r),e.setPointerCapture(i.pointerId),r==="KeyE"&&this.interact(),r==="KeyR"&&this.reload(),r==="KeyQ"&&this.throwGrenade(),r==="KeyF"&&this.activateNonstop()});const n=()=>this.keys.delete(e.dataset.key);e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n)}),vt.el("touch-fire").addEventListener("pointerdown",e=>{e.preventDefault(),this.mouseDown=!0,this.shoot(),e.target.setPointerCapture(e.pointerId)}),vt.el("touch-fire").addEventListener("pointerup",()=>this.mouseDown=!1),vt.el("touch-fire").addEventListener("pointercancel",()=>this.mouseDown=!1);let t;this.renderer.domElement.addEventListener("touchstart",e=>{this.mode==="playing"&&(t=e.changedTouches[0])},{passive:!0}),this.renderer.domElement.addEventListener("touchmove",e=>{if(this.mode==="playing"&&t){const n=e.changedTouches[0];this.yaw-=(n.clientX-t.clientX)*.006,this.pitch=Oe(this.pitch+(n.clientY-t.clientY)*.005,-.7,.9),t=n}},{passive:!0}),this.renderer.domElement.addEventListener("touchend",()=>t=null)}lockPointer(){if(!this.touch)try{this.renderer.domElement.requestPointerLock()?.catch(()=>{})}catch{}}action(t){if(t==="start"||t==="continue"){Gt.start(),this.lockPointer(),this.playTime=0,this.kills=0,this.shots=0,this.hits=0;const e=Yr(localStorage),n=t==="continue"&&e&&!e.completed?e.chapter:0;this.beginChapter(n,!0),n===0?this.startCinematic("intro",()=>this.enterPlay(!0)):this.enterPlay(!0)}if(t==="skip"&&this.finishCinematic(),t==="pause"&&this.pause(),t==="resume"&&(Gt.start(),Gt.setPaused(!1),this.mode=this.resumeMode,vt.show("pause",!1),this.mode==="playing"&&vt.playing(this.touch),this.lockPointer()),t==="retry"&&(Gt.start(),this.lockPointer(),this.beginChapter(this.chapter,!0),this.enterPlay(!1)),t==="menu"&&this.showMenu(),t==="sound"){ie.muted=!ie.muted,Gt.setMuted(ie.muted),ie.muted||Gt.start(),vt.sound(ie.muted);try{localStorage.setItem("energetic-truce-settings",JSON.stringify(ie))}catch{}}}showMenu(){this.mode="menu",document.exitPointerLock?.(),this.keys.clear(),this.mouseDown=!1,this.aiming=!1,this.clearEnemies(),this.clearEffects(),this.stopSpeech(),this.dialogueQueue=[],this.dialogueTimer=0,this.cinematic=null,this.player.visible=!0,this.viewModel.visible=!1,this.generalCutscene.visible=!1,this.insertionVisuals.visible=!1,this.aftermath.visible=!1,this.world.helicopter.visible=!0,this.player.userData.setDead(!1),this.ally.userData.setDead(!1),this.ally.visible=!0,this.ally.userData.setTab(!0),this.player.position.set(1.8,0,31),this.player.rotation.set(0,.2,0),this.ally.position.set(-3.3,0,26.5),this.ally.rotation.set(0,.45,0),this.world.helicopter.position.copy(this.helicopterBase),this.objectiveRing.visible=!1,this.keyLight.visible=!0,this.rimLight.visible=!0,this.camera.position.set(4.4,2.75,37.4),this.camera.lookAt(-2.3,1.1,29.2),this.camera.fov=42,this.camera.updateProjectionMatrix(),this.nonstopTime=0,Gt.nonstop(!1),Gt.setPaused(!1),Je.setState("menu");const t=Yr(localStorage);vt.menu(!!t&&!t.completed),vt.sound(ie.muted)}clearEnemies(){for(const t of this.enemies)this.scene.remove(t.mesh),t.laser&&(this.scene.remove(t.laser),t.laser.geometry.dispose());this.enemies=[]}clearEffects(){for(const t of this.effects)this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose();for(const t of this.grenadeObjects)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();for(const t of this.enemyGrenades)this.scene.remove(t.mesh,t.ring);for(const t of this.debris)this.scene.remove(t.mesh);this.effects=[],this.grenadeObjects=[],this.enemyGrenades=[],this.debris=[],this.particles.clear();for(const t of this.flashLights)t.intensity=0,t.userData.remaining=0}beginChapter(t,e=!1){this.chapter=t,this.phase="combat",this.holdProgress=0,this.pendingWaves=[],this.clearEnemies(),this.clearEffects(),this.stopSpeech(),this.dialogueQueue=[],this.dialogueTimer=0,vt.dialogue(null),this.health=100,this.energy=100,this.ammo=Es,this.reserve=Cr,this.grenades=3,this.reloadTimer=0,this.shotCooldown=0,this.hurtTimer=0,this.velocityY=0,this.safeTime=3,this.shake=0,this.nonstop=0,this.nonstopTime=0,Gt.nonstop(!1),this.combatHeat=0,this.idleTimer=0,this.tauntTimer=14,this.allyCooldown=1.5,this.lastObjectiveDistance=1/0,this.keys.clear(),this.mouseDown=!1,this.aiming=!1,this.player.visible=!1,this.viewModel.visible=!1,this.generalCutscene.visible=!1,this.insertionVisuals.visible=!1,this.aftermath.visible=!1,this.player.userData.setDead(!1),this.keyLight.visible=!1,this.rimLight.visible=!1,this.unmaskTriggered=!1,this.allyNav={path:[],index:0,timer:0};const n=je[t];e&&(this.player.position.set(n.start[0],0,n.start[1]),this.yaw=t===2?1:0,this.pitch=.06),this.player.rotation.set(0,this.yaw+Math.PI,0),this.ally.visible=!0,this.ally.userData.setDead(t===2),this.ally.userData.setTab(!1),t===2?this.ally.position.set(29,0,-48):this.ally.position.copy(this.player.position).add(new w(-1.5,0,-2.3)),n.enemies.filter(i=>!i.deferred).forEach((i,r)=>this.spawnEnemy(i,r)),this.objectiveRing.position.set(n.location[0],0,n.location[1]),this.objectiveRing.visible=!0,vt.chapter(t,this.enemies.length,this.phase),Hc(localStorage,t),this.updateCamera(1,!0)}spawnEnemy(t,e=0,n=0){const i=Gc[t.kind]||Gc.black,r=ai(t.kind);let a=t.x+(Math.random()-.5)*n*2,o=t.z+(Math.random()-.5)*n*2;for(let u=0;u<=10&&this.blocked(a,o,.6,0);u++)for(let h=0;h<8;h++){const d=t.x+Math.cos(h*Math.PI/4)*u,f=t.z+Math.sin(h*Math.PI/4)*u;if(!this.blocked(d,f,.6,0)){a=d,o=f;break}}r.position.set(a,0,o),r.rotation.y=Math.atan2(this.player.position.x-a,this.player.position.z-o);const l=new Ur(this.glintMaterial);l.scale.setScalar(.01),l.visible=!1,r.userData.muzzle.add(l);const c={mesh:r,kind:t.kind,type:i,hp:t.hp??i.hp,maxHp:t.hp??i.hp,dead:!1,cooldown:1.5+e*.4,windup:0,burstLeft:0,burstTimer:0,lockPos:new w,targetEnemy:null,phase:e*2.1,lastPos:r.position.clone(),stuck:0,aggro:t.aggro??76,engaged:!1,spotted:!1,summoned:!1,grenadeTimer:i.grenade?i.grenade[0]*.6:0,leaks:[],glint:l,laser:null,nav:{path:[],index:0,timer:0,goalX:NaN,goalZ:NaN}};return r.traverse(u=>{u.isMesh&&(u.userData.enemy=c)}),this.enemies.push(c),this.scene.add(r),c}enterPlay(t=!1){this.mode="playing",this.cinematic=null,this.world.helicopter.position.copy(this.helicopterBase),this.world.helicopter.visible=!0,this.player.visible=!1,this.viewModel.visible=!0,this.generalCutscene.visible=!1,vt.playing(this.touch),vt.chapter(this.chapter,this.enemies.filter(e=>!e.dead).length,this.phase),this.safeTime=2,this.updateCamera(1,!0),t&&(this.queueDialogue(je[this.chapter].lines.start),Je.sting("chapter"))}pause(){this.mode!=="playing"&&this.mode!=="cinematic"||(this.resumeMode=this.mode,this.mode="paused",this.mouseDown=!1,this.aiming=!1,this.keys.clear(),vt.show("pause",!0),vt.show("touch-controls",!1),Gt.setPaused(!0),document.exitPointerLock?.())}lineTime(t){const e=zo(t);return yv(t.text,e.voice,t.mood)}say(t,e=null){const n=zo(t);this.stopSpeech(),vt.dialogue(t),(n.via==="radio"||n.via==="tape")&&Gt.radio(),this.speech=bv(Gt,t.text,n.voice,{via:n.via,mood:t.mood}),this.talker=e||this.meshFor(t.speaker,n),Gt.duck(this.speech.duration)}meshFor(t,e){return e.via==="tape"?null:t==="СТАЛКЕР"?this.player:t==="ІСКРА"?this.ally.visible&&!this.ally.userData.isDead()?this.ally:null:t==="ГЕНЕРАЛ НУЛЬ"&&this.generalCutscene.visible?this.generalCutscene:t==="БІЛИЙ"||t==="МІСТЕР СИДР"?this.enemies.find(i=>i.kind==="sidr"&&!i.dead)?.mesh||null:this.enemies.find(i=>i.kind===e.kind&&i.mesh.position.distanceTo(this.player.position)<40&&(i.type.boss||!i.dead))?.mesh||null}stopSpeech(){this.speech?.stop(),this.speech=null,this.talker=null}queueDialogue(t){Rr[t]&&(this.dialogueQueue.push(...Rr[t].map(e=>({line:e}))),(this.dialogueTimer<=0||!this.storyLine)&&this.nextDialogue())}nextDialogue(){const t=this.dialogueQueue.shift();if(!t){vt.dialogue(null),this.speech=null,this.talker=null,this.dialogueTimer=0,this.storyLine=!1;return}this.say(t.line,t.mesh),this.storyLine=!t.bark,this.dialogueTimer=this.lineTime(t.line)*(t.bark?.8:1)}bark(t,e=null,n=!1){const i=Tv[t];return!i||this.mode!=="playing"||this.dialogueQueue.length||this.dialogueTimer>0&&(this.storyLine||!n)||(this.barkCooldowns[t]||0)>this.elapsed||!n&&this.barkGlobal>this.elapsed||i.speaker==="ІСКРА"&&(this.chapter>=2||this.ally.userData.isDead())||(this.barkCooldowns[t]=this.elapsed+(n?6:12),Math.random()>i.chance)?!1:(this.barkIndex[t]=((this.barkIndex[t]??Math.floor(Math.random()*i.lines.length))+1)%i.lines.length,this.barkGlobal=this.elapsed+4,this.dialogueQueue.push({line:{speaker:i.speaker,text:i.lines[this.barkIndex[t]],via:i.via},mesh:e,bark:!0}),this.nextDialogue(),!0)}updateTalk(){const t=this.speech?this.speech.level():0;this.lastTalker&&this.lastTalker!==this.talker&&this.lastTalker.userData.talk(0),this.talker?.userData.talk(t),this.lastTalker=this.talker,vt.talk(t)}startCinematic(t,e){this.mode="cinematic",this.keys.clear(),this.mouseDown=!1,this.aiming=!1,this.dialogueQueue=[],this.dialogueTimer=0,this.stopSpeech(),vt.dialogue(null);const n=t==="intro"?Vi.length*4.8:0;this.cinematic={name:t,done:e,time:0,line:-1,lineEnd:n,total:n+Rr[t].reduce((a,o)=>a+this.lineTime(o),0),card:-1},vt.show("menu",!1),vt.show("hud",!1),vt.show("touch-controls",!1),vt.show("cinematic",!0),vt.show("cinematic-card",t==="intro"),vt.el("cinematic").classList.toggle("prologue",t==="intro"),this.viewModel.visible=!1,this.player.visible=!1;const i={intro:["01 / ВИСАДКА","ЖУРНАЛ ПЕРЕГОВОРІВ","05:47"],terminal:["02 / СТАНЦІЯ 07","ТРЕТІЙ ПІДПИС","06:21"],betrayal:["03 / АРХІВ","ЦІНА УГОДИ","06:40"],unmask:["04 / АНГАР","ХТО ПІД МАСКОЮ","06:52"],ending:["ЕПІЛОГ","ЕНЕРГЕТИЧНЕ ПЕРЕМИР’Я","07:05"]},r=i[t]||i.intro;if(vt.el("cinematic-number").textContent=r[0],vt.el("cinematic-heading").textContent=r[1],vt.el("cinematic-kicker").textContent=`ГОСТОМЕЛЬ · ${r[2]} · УКРАЇНА`,t==="intro"&&(this.world.helicopter.visible=!1,this.insertionVisuals.visible=!0,this.ally.visible=!0,this.ally.userData.setTab(!0)),t==="ending"&&(this.aftermath.visible=!0),t==="betrayal"&&(this.ally.position.copy(this.player.position).add(new w(-1.2,0,-3.2)),this.ally.rotation.y=.35,this.generalCutscene.position.copy(this.player.position).add(new w(2.1,0,-5.2)),this.generalCutscene.rotation.y=-.4,this.generalCutscene.visible=!0),t==="unmask"){const a=this.enemies.find(o=>o.kind==="sidr"&&!o.dead);if(a){const o=a.mesh.position,l=[[0,7],[7,0],[-7,0],[0,-7]],c=l.find(([u,h])=>!this.blocked(o.x+u,o.z+h,.5)&&this.lineOfSight(new w(o.x+u,1.72,o.z+h),o.clone().add(new w(0,1.35,0))))||l[0];this.unmaskCamera=new w(o.x+c[0],1.72,o.z+c[1]),a.mesh.rotation.y=Math.atan2(c[0],c[1])}}Je.setState(t==="ending"?"ending":"explore")}finishCinematic(){if(!this.cinematic)return;const{done:t,name:e}=this.cinematic;this.cinematic=null,vt.show("cinematic",!1),vt.dialogue(null),this.stopSpeech(),vt.show("cinematic-card",!1),vt.el("cinematic").classList.remove("prologue"),e==="unmask"&&this.revealSidr(),this.world.helicopter.position.copy(this.helicopterBase),this.world.helicopter.visible=!0,this.player.visible=!1,this.generalCutscene.visible=!1,e==="intro"&&(this.insertionVisuals.visible=!1,this.ally.visible=!0,this.ally.userData.setTab(!1)),e==="betrayal"&&this.ally.userData.setDead(!0),t()}cinematicEvent(t){if(t==="tab"&&this.ally.userData.setTab(!1),t==="land"&&(this.cinematic.landingAt=this.cinematic.time,vt.el("cinematic-heading").textContent="ВИСАДКА",Gt.landing()),t==="shot"){this.generalCutscene.updateMatrixWorld(!0);const e=this.generalCutscene.userData.muzzle.getWorldPosition(new w),n=this.ally.position.clone().add(new w(0,1.4,0));this.tracer(e,n,15056781),this.flash(e,12),Gt.shot(!0,e),Gt.canHit(),Gt.fizz(n),this.ally.userData.setDead(!0),this.particles.spray(n,new w(-.5,.3,.6),this.ally.userData.liquid,26,{speed:3.5}),Je.setState("sad"),Je.sting("betrayal")}t==="unmask"&&this.revealSidr()}revealSidr(){const t=this.enemies.find(i=>i.kind==="sidr");if(!t||t.mesh.userData.revealed)return;const e=t.mesh.position.clone().add(new w(0,1.4,0));t.mesh.userData.reveal(),t.engaged=!0;for(let i=0;i<6;i++){const r=t.mesh.rotation.y+i*Math.PI/3,a=new fe(this.maskShardGeometry,this.maskShardMaterial);a.position.copy(e),a.rotation.y=r,a.castShadow=!0,this.scene.add(a),this.debris.push({mesh:a,velocity:new w(Math.sin(r)*(2+Math.random()*2),2+Math.random()*2,Math.cos(r)*(2+Math.random()*2)),spin:new w(3+Math.random()*4,0,3+Math.random()*4),life:2.4})}const n=je[2].enemies.find(i=>i.kind==="zero");if(n&&!this.enemies.some(i=>i.kind==="zero")){const i=this.spawnEnemy(n,0);i.engaged=!0}this.particles.spray(e,new w(0,1,0),15066844,38,{speed:4,spread:3,life:1}),Gt.crumple(e),Gt.fizz(e),Je.sting("betrayal"),vt.el("cinematic-heading").textContent="МІСТЕР СИДР",vt.notify("БІЛИЙ — МАСКА · СПРАВЖНЯ ЦІЛЬ: МІСТЕР СИДР")}updateCinematic(t){const e=this.cinematic;if(e){if(e.time+=t,e.name==="intro"&&this.updateInsertionVisuals(t,e.time),e.name==="intro"&&e.time<e.lineEnd&&e.line<0){const n=Math.min(Vi.length-1,Math.floor(e.time/4.8));n!==e.card&&(e.card=n,vt.cinematicCard(Vi[n],n+1,Vi.length))}else e.name==="intro"&&e.line<0&&(vt.show("cinematic-card",!1),vt.el("cinematic").classList.remove("prologue"));if(e.time>=e.lineEnd){const n=Rr[e.name][++e.line];if(!n){this.finishCinematic();return}e.lineEnd=e.time+this.lineTime(n),this.say(n),this.cinematicEvent(n.event)}if(e.name==="intro"){const n=this.player.position;if(e.landingAt===void 0){const i=Math.max(0,e.time-Vi.length*4.8);this.camera.position.set(-16+i*.08,3.8,51-i*.09),this.camera.lookAt(-3,8,-27),this.camera.fov=67}else{const i=Oe((e.time-e.landingAt)/2.4,0,1),r=i*i*(3-2*i),a=ie.reducedMotion?0:(1-r)*Math.sin(e.time*19)*.035;this.camera.position.set(n.x-3.5*(1-r),1.72+3.8*(1-r)+a,n.z+6*(1-r)),this.camera.lookAt(n.x-.6,1.42,n.z-22),this.camera.fov=58}}else if(e.name==="unmask"){const n=this.enemies.find(i=>i.kind==="sidr");n&&this.unmaskCamera&&(this.camera.position.copy(this.unmaskCamera),this.camera.lookAt(n.mesh.position.x-1.1,1.35,n.mesh.position.z)),this.camera.fov=36}else if(e.name==="betrayal"){const n=this.player.position;this.camera.position.set(n.x,1.72,n.z),this.camera.lookAt(this.ally.position.x+.4,1.32,this.ally.position.z-.3),this.camera.fov=56}else if(e.name==="ending"){const n=ie.reducedMotion?0:Math.min(e.time,12)*.018;this.camera.position.set(1+n,.9,32),this.camera.lookAt(3,.85,-10),this.camera.fov=55}else{const n=this.player.position,i=.45+Math.sin(e.time*.065)*.25;this.camera.position.set(n.x,1.72,n.z),this.camera.lookAt(n.x+Math.sin(i),1.2,n.z-8),this.camera.fov=55}this.camera.updateProjectionMatrix()}}blocked(t,e,n,i=0){for(const r of this.world.colliders)if(i+1.85>r.min.y&&i<r.max.y&&t+n>r.min.x&&t-n<r.max.x&&e+n>r.min.z&&e-n<r.max.z)return!0;return!1}moveActor(t,e,n,i=.5){const r=this.world.bounds?.minX??-63,a=this.world.bounds?.maxX??63,o=Oe(t.position.x+e,r,a),l=Oe(t.position.z+n,-103,61);this.blocked(o,t.position.z,i,t.position.y)||(t.position.x=o),this.blocked(t.position.x,l,i,t.position.y)||(t.position.z=l)}navigateActor(t,e,n,i,r,a){const o=t.position,l=Math.hypot(e-o.x,n-o.z);if(l<.08)return!1;if(this.navigator.canTraverse(o.x,o.z,e,n))return a.path=[],a.index=0,this.moveActor(t,(e-o.x)/l*i*r,(n-o.z)/l*i*r),!0;for(a.timer-=r,(!a.path.length||a.timer<=0||Math.hypot(e-a.goalX,n-a.goalZ)>3)&&(a.path=this.navigator.findPath(o.x,o.z,e,n),a.index=0,a.timer=.8+Math.random()*.45,a.goalX=e,a.goalZ=n);a.index<a.path.length-1&&Math.hypot(a.path[a.index][0]-o.x,a.path[a.index][1]-o.z)<.85;)a.index++;const c=a.path[a.index];if(!c)return!1;const u=c[0]-o.x,h=c[1]-o.z,d=Math.hypot(u,h);return d<.08?!1:(this.moveActor(t,u/d*i*r,h/d*i*r),!0)}coverDistance(t,e,n){this.ray.set(t,e);let i=n;for(const r of this.world.colliders){const a=this.ray.intersectBox(r,this.temp);if(a){const o=t.distanceTo(a);o<i&&(i=o)}}return i}lineOfSight(t,e){const n=e.clone().sub(t),i=n.length();return this.coverDistance(t,n.normalize(),i)>=i-.2}updatePlayer(t){let e=0,n=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(n-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(n+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1);const i=e!==0||n!==0,r=i&&(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"))&&this.energy>3&&!this.aiming;if(this.energy=Oe(this.energy+(r?-19:14)*t,0,100),i){const a=Math.hypot(e,n),o=(r?8.4:this.aiming?3.2:5.2)*t,l=(e*Math.cos(this.yaw)+n*Math.sin(this.yaw))/a*o,c=(n*Math.cos(this.yaw)-e*Math.sin(this.yaw))/a*o;this.moveActor(this.player,l,c)}if(this.velocityY-=13*t,this.player.position.y=Math.max(0,this.player.position.y+this.velocityY*t),this.player.position.y===0&&(this.velocityY=0),this.player.rotation.y=this.yaw+Math.PI,this.player.userData.animate(t,this.elapsed,i),this.shotCooldown=Math.max(0,this.shotCooldown-t),this.safeTime=Math.max(0,this.safeTime-t),this.reloadTimer>0&&(this.reloadTimer-=t,this.reloadTimer<=0)){const a=Uv(this.ammo,this.reserve);this.ammo=a.magazine,this.reserve=a.reserve}this.mouseDown&&!r&&this.shoot(),this.hurtTimer+=t,this.hurtTimer>5&&(this.health=Math.min(100,this.health+7.5*t)),this.updateCamera(t),this.updateHUD()}updateAlly(t){if(this.chapter>=2||this.ally.userData.isDead()){this.ally.userData.animate(t,this.elapsed,!1);return}const e=this.phase==="hold"&&this.chapter===0,n=this.ally.position,i=this.player.position,[r,a]=e?Vv:[i.x-2,i.z+2],o=r-n.x,l=a-n.z,u=Math.hypot(o,l)>(e?.4:3);if(u?(this.navigateActor(this.ally,r,a,4.8,t,this.allyNav),this.ally.rotation.y=Math.atan2(o,l)):e&&(this.ally.rotation.y=Math.PI),this.ally.userData.animate(t,this.elapsed,u),this.allyCooldown-=t,e||this.allyCooldown>0||this.safeTime>0)return;const h=n.clone().add(new w(0,1.3,0)),d=this.enemies.filter(p=>!p.dead&&p.engaged&&p.mesh.position.distanceTo(n)<38).sort((p,v)=>p.mesh.position.distanceTo(n)-v.mesh.position.distanceTo(n)).find(p=>this.lineOfSight(h,p.mesh.position.clone().add(new w(0,1.2,0))));if(this.allyCooldown=d?1.1+Math.random()*.8:.5,!d)return;const f=d.mesh.position;this.ally.rotation.y=Math.atan2(f.x-n.x,f.z-n.z),this.ally.updateMatrixWorld(!0);const m=this.ally.userData.muzzle.getWorldPosition(new w),_=f.clone().add(new w(0,1.1+Math.random()*.5,0)),g=Math.random()<.42;g||_.add(new w((Math.random()-.5)*2,Math.random(),(Math.random()-.5)*2)),this.tracer(m,_,10148074),this.flash(m,6),Gt.shot(!0,n),g&&this.damageEnemy(d,13,_,!1,"ally",_.clone().sub(m).normalize())}updateCamera(t,e=!1){const n=this.keys.has("KeyW")||this.keys.has("KeyA")||this.keys.has("KeyS")||this.keys.has("KeyD"),i=n&&!ie.reducedMotion?Math.abs(Math.sin(this.elapsed*10.8))*.035:0;this.desiredCamera.copy(this.player.position).add(new w(0,1.72+i,0)),this.camera.position.lerp(this.desiredCamera,e?1:1-Math.exp(-18*t)),this.v2.set(-Math.sin(this.yaw)*Math.cos(this.pitch),-Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch)),this.v3.copy(this.camera.position).addScaledVector(this.v2,30),this.shake>.001&&!ie.reducedMotion&&(this.v3.x+=(Math.random()-.5)*this.shake,this.v3.y+=(Math.random()-.5)*this.shake),this.camera.lookAt(this.v3),this.shake*=Math.exp(-10*t),this.weaponKick*=Math.exp(-14*t);const r=this.aiming?new w(0,-.27,-.62):new w(.22,-.43,-.69);r.z+=this.weaponKick*.11,this.viewModel.position.lerp(r,e?1:1-Math.exp(-14*t)),this.viewModel.rotation.x=-this.weaponKick*.12+(n&&!ie.reducedMotion?Math.sin(this.elapsed*10.8)*.007:0),this.viewModel.rotation.y=n&&!ie.reducedMotion?Math.sin(this.elapsed*5.4)*.012:0;const a=(this.aiming?43:66)+(this.nonstopTime>0?4:0);this.camera.fov=Ml.lerp(this.camera.fov,a,e?1:1-Math.exp(-12*t)),this.camera.updateProjectionMatrix()}shoot(){if(this.mode!=="playing"||this.shotCooldown>0||this.reloadTimer>0)return;if(this.ammo===0){this.reload();return}const t=this.nonstopTime>0;this.ammo--,this.shots++,this.shotCooldown=t?.095:.13,this.shake=.09,this.weaponKick=Math.min(1.4,this.weaponKick+.55),this.combatHeat=6,Gt.shot(),this.scene.updateMatrixWorld(!0),this.camera.updateMatrixWorld(!0),this.raycaster.setFromCamera(new et(0,0),this.camera);const e=this.raycaster.ray.origin.clone(),n=this.raycaster.ray.direction.clone(),i=this.coverDistance(e,n,110),r=this.enemies.filter(d=>!d.dead).flatMap(d=>d.mesh.userData.hitMeshes),a=this.raycaster.intersectObjects(r,!1).find(d=>d.distance<i+.03),o=a?a.point.clone():e.clone().addScaledVector(n,i),l=this.viewWeapon.userData.muzzle.getWorldPosition(new w),c=o.clone().sub(l).normalize(),u=this.coverDistance(l,c,l.distanceTo(o)),h=u<l.distanceTo(o)-.12;if(h&&o.copy(l).addScaledVector(c,u),this.tracer(l,o,16179360),this.flash(l),a&&!h){const d=a.object.userData.enemy,f=Nv(d.kind,a.point.y-d.mesh.position.y,a.distance);this.damageEnemy(d,Math.round(f.damage*(t?1.25:1)),a.point,f.critical,"player",n),this.hits++}else this.particles.burst(o,12958357,4);ie.reducedMotion||(this.pitch=Oe(this.pitch-.005-Math.random()*.004,-.7,.9),this.yaw+=(Math.random()-.5)*.004),this.ammo===0&&this.reserve>0&&vt.notify("МАГАЗИН ПОРОЖНІЙ · R — ПЕРЕЗАРЯДИТИ")}damageEnemy(t,e,n,i=!1,r="player",a=null){if(t.dead)return;if(t.kind==="sidr"&&!t.mesh.userData.revealed){this.triggerUnmask();return}t.hp-=e,t.engaged=!0,t.mesh.userData.hit(i?1:.55);const o=t.mesh.userData.liquid,l=a?a.clone().setY(Math.max(a.y,0)).normalize():new w(0,1,0);if(this.particles.spray(n,l,o,i?16:9,{speed:i?4.5:3}),t.leaks.length<4&&t.leaks.push({local:t.mesh.worldToLocal(n.clone()),time:1.6,emit:0}),r==="player"&&(this.hitTimer=.17,vt.el("hit-marker").classList.toggle("critical",i),Gt.hit(),Gt.canHit(),this.combatHeat=6),r==="rival"&&t.type.boss&&(t.hp=Math.max(1,t.hp)),t.hp>0)return;t.dead=!0,t.windup=0,t.burstLeft=0,t.glint.visible=!1,t.laser&&(t.laser.visible=!1);const c=t.type.boss,u=t.mesh.position;c?(t.mesh.userData.weapon.visible=!1,t.mesh.rotation.z=.28,Gt.defeat(u,!0)):(t.mesh.userData.setDead(!0),Gt.defeat(u),i&&this.popLid(t)),r==="player"?(this.kills++,this.reserve=Math.min(Cr,this.reserve+18),this.hitstop=.055,this.nonstopTime<=0&&(this.nonstop=Va(Va(this.nonstop,"kill"),i?"crit":"")),vt.el("kill-notice").textContent=c?"ПРОТИВНИК ЗДАВСЯ · ЗБРОЮ СКЛАДЕНО":`${i?"КРИШКУ ЗІРВАНО · ":""}ЦІЛЬ ЗНЕШКОДЖЕНО · +18 НАБОЇВ`,c||this.bark(i?"lid":"kill")):r==="ally"?(this.nonstopTime<=0&&(this.nonstop=Va(this.nonstop,"ally")),vt.el("kill-notice").textContent=c?"ПРОТИВНИК ЗДАВСЯ":"ІСКРА · ЦІЛЬ ЗНЕШКОДЖЕНО",this.bark("allyKill")):vt.el("kill-notice").textContent="ВОРОЖИЙ ВОГОНЬ · ЦІЛЬ ВИБУЛА",this.killTimer=2;const h=this.enemies.filter(d=>!d.dead).length;vt.chapter(this.chapter,h,this.phase),h===0&&this.phase==="combat"&&this.sectorClear()}popLid(t){const e=t.mesh.userData.lid;if(!e.visible)return;e.visible=!1;const n=t.mesh.position.clone().add(new w(0,2.05,0)),i=new fe(this.lidGeometry,this.lidMaterial);i.position.copy(n),i.castShadow=!0,this.scene.add(i),this.debris.push({mesh:i,velocity:new w((Math.random()-.5)*3,6+Math.random()*2,(Math.random()-.5)*3),spin:new w(8+Math.random()*6,0,5),life:4}),this.particles.spray(n,new w(0,1,0),t.mesh.userData.liquid,26,{speed:6,spread:2.4,life:.9,size:.05}),Gt.fizz(n)}sectorClear(){this.phase="reach",this.idleTimer=0,this.lastObjectiveDistance=1/0,vt.chapter(this.chapter,0,this.phase),vt.notify(this.chapter===2?"ШЛЯХ ДО ПЕРЕДАВАЧА ВІЛЬНИЙ":"СЕКТОР ЧИСТИЙ · РУХАЙСЯ ДО МАРКЕРА"),this.queueDialogue(je[this.chapter].lines.clear),Je.sting("clear")}reload(){if(!(this.mode!=="playing"||this.reloadTimer>0||this.ammo===Es)){if(this.reserve===0){vt.notify("ЗАПАС ВИЧЕРПАНО · ШУКАЙ ЖОВТИЙ ЯЩИК");return}this.reloadTimer=Iv,Gt.reload(),this.enemies.some(t=>!t.dead&&t.engaged)&&this.bark("reload",this.player)}}throwGrenade(){if(this.mode!=="playing"||this.grenades<=0)return;this.grenades--;const t=new fe(new gn(.13,10,8),new Se({color:5859393,metalness:.6,roughness:.6}));t.position.copy(this.player.position).add(new w(0,1.45,0));const e=new w(-Math.sin(this.yaw),0,-Math.cos(this.yaw));t.position.addScaledVector(e,.8),this.scene.add(t),this.grenadeObjects.push({mesh:t,velocity:e.multiplyScalar(14).add(new w(0,6-this.pitch*5,0)),time:1.75}),vt.notify("ГРАНАТА!")}explode(t){Gt.explosion(t),this.shake=Math.max(this.shake,1.2/(1+this.player.position.distanceTo(t)/8)),this.particles.burst(t,15181146,45,{life:1.1,size:.16}),this.particles.burst(t,4934980,30,{life:1.6,size:.22,speed:.6,gravity:-1}),this.flash(t,35,7,.35)}updateGrenades(t){for(let e=this.grenadeObjects.length-1;e>=0;e--){const n=this.grenadeObjects[e];n.time-=t,n.velocity.y-=13*t;const i=n.mesh.position.clone().addScaledVector(n.velocity,t);if(this.blocked(i.x,i.z,.15,i.y)?(n.velocity.x*=-.45,n.velocity.z*=-.45):n.mesh.position.copy(i),n.mesh.position.y<.16&&(n.mesh.position.y=.16,n.velocity.y=Math.abs(n.velocity.y)*.35,n.velocity.x*=.94,n.velocity.z*=.94),n.mesh.rotation.x+=t*5,n.time<=0){const r=n.mesh.position.clone();this.explode(r);for(const o of this.enemies){if(o.dead)continue;const l=o.mesh.position.clone().add(new w(0,1,0)),c=l.distanceTo(r);if(c<9){const u=l.clone().sub(r).normalize();this.coverDistance(r,u,c)>=c-.1&&this.damageEnemy(o,Math.round(175*(1-c/11)),l,!0,"player",u)}}const a=this.player.position.distanceTo(r);a<5&&this.hurt(45*(1-a/5),r),this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.grenadeObjects.splice(e,1)}}}updateEnemies(t){const e=this.player.position;for(const n of this.enemies){if(this.updateLeaks(n,t),n.dead){n.mesh.userData.animate(t,this.elapsed,!1);continue}if(n.kind==="sidr"&&!n.mesh.userData.revealed){n.mesh.userData.animate(t,this.elapsed,!1);continue}const i=n.type,r=n.mesh.position;n.targetEnemy=this.rivalFor(n);const a=n.targetEnemy?.mesh.position||e,o=a.x-r.x,l=a.z-r.z,c=Math.hypot(o,l);let u=!1;if(n.cooldown-=t,!n.engaged&&c<n.aggro&&(n.engaged=!0),n.engaged){n.mesh.rotation.y=Math.atan2(o,l);const h=r.clone().add(new w(0,1.25,0)),d=a.clone().add(new w(0,1.2,0)),f=this.lineOfSight(h,d);f&&!n.spotted&&(n.spotted=!0,n.kind==="black"&&this.bark("spotted",n.mesh),n.kind==="pink"&&this.bark("punch",n.mesh));const[m,_]=i.keep,g=i.speed*t;if(!(n.windup>0&&!i.charge))if(c>_||!f)u=this.navigateActor(n.mesh,a.x,a.z,i.speed,t,n.nav);else if(c<m)this.moveActor(n.mesh,-o/Math.max(c,1)*g*.8,-l/Math.max(c,1)*g*.8),u=!0;else{const x=Math.sin(this.elapsed*.6+n.phase)*.65;this.moveActor(n.mesh,-l/c*x*t,o/c*x*t),u=Math.abs(x)>.25}if(n.windup>0){n.windup-=t,n.windup>i.lock&&n.lockPos.copy(a);const x=1-n.windup/i.windup;n.glint.visible=!0,n.glint.scale.setScalar(.25+x*.55+Math.sin(this.elapsed*40)*.08),n.laser&&this.updateLaser(n,f),n.windup<=0&&(n.glint.visible=!1,n.laser&&(n.laser.visible=!1),n.burstLeft=i.burst||1,n.burstTimer=0,n.cooldown=i.cooldown[0]+Math.random()*(i.cooldown[1]-i.cooldown[0]))}else n.burstLeft<=0&&f&&c<i.range&&n.cooldown<=0&&this.safeTime<=0&&(n.windup=i.windup,n.lockPos.copy(a),i.laser&&(n.laser||this.makeLaser(n),Gt.laser(r),this.bark("sniperWarn",null,!0)));n.burstLeft>0&&(n.burstTimer-=t,n.burstTimer<=0&&(this.enemyShot(n),n.burstLeft--,n.burstTimer=.12));const v=i.grenade||(n.kind==="sidr"&&n.hp<n.maxHp*.3?[5,7]:null);v&&f&&c>7&&c<30&&this.safeTime<=0&&(n.grenadeTimer-=t,n.grenadeTimer<=0&&(this.enemyGrenade(n),n.grenadeTimer=v[0]+Math.random()*(v[1]-v[0]))),i.boss&&this.bossPhase(n)}u&&r.distanceToSquared(n.lastPos)<3e-5?n.stuck+=t:n.stuck=Math.max(0,n.stuck-t*.25),n.stuck>.5&&(n.nav.timer=0,n.stuck=0),n.lastPos.copy(r),n.mesh.userData.animate(t,this.elapsed,u)}}rivalFor(t){if(this.chapter!==2)return null;const e=t.kind==="zero"?this.enemies.find(l=>l.kind==="sidr"&&l.mesh.userData.revealed&&!l.dead):this.enemies.find(l=>l.kind==="zero"&&!l.dead);if(!e)return null;const n=t.mesh.position.distanceTo(e.mesh.position),i=t.mesh.position.distanceTo(this.player.position);if(!(t.kind==="sidr"||t.kind==="zero"?n<42&&(n<i*1.2||i>16):n<22&&i>18))return null;const a=t.mesh.position.clone().add(new w(0,1.3,0)),o=e.mesh.position.clone().add(new w(0,1.3,0));return this.lineOfSight(a,o)?e:null}makeLaser(t){const e=new pe().setFromPoints([new w,new w]);t.laser=new Po(e,this.laserMaterial),t.laser.frustumCulled=!1,this.scene.add(t.laser)}updateLaser(t,e){const n=t.mesh.userData.muzzle.getWorldPosition(this.v1),i=this.v2.copy(t.lockPos).add(this.temp.set(0,1.2,0)),r=this.v3.copy(i).sub(n),a=r.length();r.normalize();const o=e?a:this.coverDistance(n,r,a),l=t.laser.geometry.attributes.position;l.setXYZ(0,n.x,n.y,n.z),l.setXYZ(1,n.x+r.x*o,n.y+r.y*o,n.z+r.z*o),l.needsUpdate=!0,t.laser.visible=Math.sin(this.elapsed*(t.windup<t.type.lock?60:18))>-.3}enemyShot(t){if(this.mode!=="playing")return;const e=t.mesh.position,n=this.player.position;t.mesh.updateMatrixWorld(!0);const i=t.targetEnemy&&!t.targetEnemy.dead?t.targetEnemy:null,r=i?.mesh.position||n,a=t.mesh.userData.muzzle.getWorldPosition(new w),o=r.clone().add(new w(0,1.2,0)),l=Math.hypot(r.x-e.x,r.z-e.z),c=this.lineOfSight(e.clone().add(new w(0,1.25,0)),o),u=Math.hypot(r.x-t.lockPos.x,r.z-t.lockPos.z),h=c&&this.safeTime<=0&&Math.random()<Fv(t.type,l,u);h||o.add(new w((Math.random()-.5)*2.6,Math.random()*1.3,(Math.random()-.5)*2.6));const d=o.clone().sub(a),f=d.length();d.normalize();const m=a.clone().addScaledVector(d,this.coverDistance(a,d,f+6));this.tracer(a,m,t.type.laser?16747108:15440996),this.flash(a,6),Gt.shot(!0,e),this.combatHeat=6,h&&i?this.damageEnemy(i,t.type.damage*1.7,o,!1,"rival",d):h?this.hurt(t.type.damage*(this.nonstopTime>0?.7:1),e):c&&l<35&&Gt.whiz()}enemyGrenade(t){const e=t.mesh.position.clone().add(new w(0,1.6,0)),n=this.player.position.clone();n.x+=(Math.random()-.5)*2,n.z+=(Math.random()-.5)*2,n.y=.16;const i=new fe(this.grenadeGeometry,this.grenadeMaterial),r=new fe(this.warnGeometry,this.warnMaterial);i.position.copy(e),r.rotation.x=-Math.PI/2,r.position.set(n.x,.09,n.z),r.scale.setScalar(.3),this.scene.add(i,r),this.enemyGrenades.push({mesh:i,ring:r,from:e,to:n,time:0,flight:1,fuse:1.1}),Gt.grenadeWarn(n),this.bark("grenadeWarn",null,!0)}updateEnemyGrenades(t){for(let e=this.enemyGrenades.length-1;e>=0;e--){const n=this.enemyGrenades[e];n.time+=t;const i=Math.min(1,n.time/n.flight);if(n.mesh.position.lerpVectors(n.from,n.to,i),n.mesh.position.y+=Math.sin(i*Math.PI)*3.5,n.mesh.rotation.x+=t*6,n.ring.scale.setScalar(.3+Math.min(1,n.time/n.flight)*4.2),n.ring.material.opacity=.45+Math.sin(n.time*(n.time>n.flight?26:10))*.25,n.time<n.flight+n.fuse)continue;const r=n.to.clone();this.explode(r);const a=this.player.position.distanceTo(r);a<4.6&&this.hurt(42*(1-a/5.5),r),this.scene.remove(n.mesh,n.ring),this.enemyGrenades.splice(e,1)}}bossPhase(t){if(!(t.summoned||t.hp>t.maxHp*(t.kind==="sidr"?.6:.5))&&(t.summoned=!0,this.queueDialogue(t.kind==="sidr"?"sidrPhase":"zeroPhase"),t.kind==="sidr")){vt.notify("ПІДКРІПЛЕННЯ MONSTER · АНГАР");for(const[e,n]of[[-12,-54],[-43,-60]]){const i=this.spawnEnemy({kind:"black",x:e,z:n},0,2);i.engaged=!0}vt.chapter(this.chapter,this.enemies.filter(e=>!e.dead).length,this.phase)}}updateLeaks(t,e){for(let n=t.leaks.length-1;n>=0;n--){const i=t.leaks[n];if(i.time-=e,i.emit-=e,i.time<=0){t.leaks.splice(n,1);continue}if(i.emit>0)continue;i.emit=.07;const r=t.mesh.localToWorld(this.temp.copy(i.local)),a=this.v3.set(r.x-t.mesh.position.x,0,r.z-t.mesh.position.z).normalize();this.particles.spray(r,a,t.mesh.userData.liquid,2,{speed:1.6*Math.min(1,i.time),spread:.4,life:.5,lift:.3,size:.035})}}hurt(t,e=null){if(this.mode!=="playing"||this.safeTime>0)return;const n=this.health;if(this.health=Math.max(0,this.health-t),this.hurtTimer=0,this.shake=.25,Gt.hit(),this.combatHeat=6,e){const i=e.x-this.player.position.x,r=e.z-this.player.position.z,a=-Math.sin(this.yaw)*i-Math.cos(this.yaw)*r,o=Math.cos(this.yaw)*i-Math.sin(this.yaw)*r;vt.damageDir(Math.atan2(o,a))}n>=30&&this.health<30&&this.health>0&&(this.bark("allyWarnHealth",null,!0)||this.bark("hurt",this.player,!0)),this.health<=0&&(this.mode="dead",this.player.userData.setDead(!0),this.mouseDown=!1,this.keys.clear(),this.stopSpeech(),this.dialogueQueue=[],this.dialogueTimer=0,this.nonstopTime=0,Gt.nonstop(!1),vt.nonstop(this.nonstop,!1),Je.setState("silence"),Je.sting("death"),vt.death(this.chapter),vt.show("hud",!1),vt.show("dialogue",!1),vt.show("touch-controls",!1),document.exitPointerLock?.())}canInteract(){const t=je[this.chapter].location,e=this.player.position;return this.chapter===2?this.phase==="reach"&&Bv(this.enemies,e,t):this.phase!=="combat"&&this.phase!=="reach"||Math.hypot(e.x-t[0],e.z-t[1])>4.5?!1:!this.enemies.some(n=>!n.dead&&Math.hypot(n.mesh.position.x-t[0],n.mesh.position.z-t[1])<11)}nearSupply(){return Gv.some(([t,e])=>Math.hypot(this.player.position.x-t,this.player.position.z-e)<3.1)}interact(){if(this.mode==="playing"){if(this.canInteract()){je[this.chapter].hold?this.startHold():this.completeChapter();return}this.nearSupply()&&(this.ammo=Es,this.reserve=Cr,this.grenades=3,this.reloadTimer=0,this.health=100,Gt.reload(),vt.notify("БОЄЗАПАС І ЦІЛІСНІСТЬ ВІДНОВЛЕНО"))}}startHold(){this.phase="hold",this.holdProgress=0,this.pendingWaves=[],vt.chapter(this.chapter,this.enemies.filter(t=>!t.dead).length,this.phase),vt.hold(0,"ok"),this.queueDialogue(je[this.chapter].lines.hold),vt.notify(this.chapter===0?"ІСКРА КАЧАЄ ДАНІ · ТРИМАЙ СТАНЦІЮ":"ТРАНСЛЯЦІЯ ПОЧАЛАСЯ · ТРИМАЙ ПЕРЕДАВАЧ")}updateHold(t){const e=je[this.chapter],n=e.hold,[i,r]=e.location,a=Math.hypot(this.player.position.x-i,this.player.position.z-r)>n.radius,o=this.enemies.some(c=>!c.dead&&Math.hypot(c.mesh.position.x-i,c.mesh.position.z-r)<6),l=this.holdProgress;this.holdProgress=Ov(l,t,n.seconds,a||o),this.pendingWaves.push(...kv(n.waves,l,this.holdProgress)),this.pendingWaves.length&&this.enemies.filter(c=>!c.dead).length<=1&&(this.pendingWaves.shift().spawn.forEach((u,h)=>{const d=this.spawnEnemy(u,h,2);d.engaged=!0}),vt.notify("ПІДКРІПЛЕННЯ ВОРОГА"),vt.chapter(this.chapter,this.enemies.filter(u=>!u.dead).length,this.phase));for(const c of n.lines)c.at>l&&c.at<=this.holdProgress&&this.queueDialogue(c.name);Math.floor(l*20)!==Math.floor(this.holdProgress*20)&&Gt.uploadBeep(),o&&this.chapter===0&&this.bark("stationAttack",null,!0),vt.hold(this.holdProgress,a?"far":o?"contested":"ok"),this.holdProgress>=1&&!this.pendingWaves.length&&this.enemies.every(c=>c.dead)&&this.completeChapter()}completeChapter(){this.phase="done",this.chapter===0?(this.beginChapter(1),this.startCinematic("terminal",()=>this.enterPlay(!0))):this.chapter===1?(this.ally.position.copy(this.player.position).add(new w(-2,0,1)),this.startCinematic("betrayal",()=>{this.beginChapter(2),this.enterPlay(!0),vt.notify("ЧАСТОТА 142 · ПЕРЕДАВАЧ В АНГАРІ")})):(Hc(localStorage,2,!0),this.startCinematic("ending",()=>this.endCampaign()))}endCampaign(){this.mode="ending",document.exitPointerLock?.(),Je.setState("ending"),vt.show("hud",!1),vt.show("dialogue",!1),vt.show("ending",!0),this.objectiveRing.visible=!1,vt.el("ending-stats").textContent=`ЧАС У БОЮ: ${Math.floor(this.playTime/60)} ХВ ${Math.floor(this.playTime%60)} С · ЗНЕШКОДЖЕНО: ${this.kills} · ТОЧНІСТЬ: ${this.shots?Math.round(this.hits/this.shots*100):0}%`}activateNonstop(){this.mode!=="playing"||this.nonstop<100||this.nonstopTime>0||(this.nonstopTime=Vc,Gt.nonstop(!0),Je.sting("nonstop"),vt.nonstop(100,!0),this.bark("nonstop",this.player,!0))}updateNonstop(t){this.nonstopTime>0&&(this.nonstopTime-=t,this.nonstop=Math.max(0,100*this.nonstopTime/Vc),this.nonstopTime<=0&&(this.nonstopTime=0,this.nonstop=0,Gt.nonstop(!1))),vt.nonstop(Math.round(this.nonstop),this.nonstopTime>0)}updateChatter(t){if(this.phase==="reach"&&this.chapter<2){const[e,n]=je[this.chapter].location,i=Math.hypot(this.player.position.x-e,this.player.position.z-n);i<this.lastObjectiveDistance-.5?(this.lastObjectiveDistance=i,this.idleTimer=0):this.idleTimer+=t,this.idleTimer>22&&(this.idleTimer=0,this.bark("idle"))}if(this.chapter===2&&this.phase==="combat"){const e=this.enemies.find(n=>n.kind==="sidr"&&!n.dead);if(e&&!this.unmaskTriggered&&e.mesh.position.distanceTo(this.player.position)<27&&this.lineOfSight(this.player.position.clone().add(new w(0,1.65,0)),e.mesh.position.clone().add(new w(0,1.35,0)))){this.triggerUnmask();return}if(this.tauntTimer-=t,this.tauntTimer<=0){const n=this.enemies.find(i=>i.kind==="zero"&&!i.dead);e?.mesh.userData.revealed&&e.engaged&&e.mesh.position.distanceTo(this.player.position)<30&&Math.random()<.5?this.bark("sidrTaunt",e.mesh):n&&this.bark("taunt"),this.tauntTimer=16+Math.random()*8}}}triggerUnmask(){this.unmaskTriggered||this.mode!=="playing"||(this.unmaskTriggered=!0,this.startCinematic("unmask",()=>this.enterPlay(!1)))}musicState(){return this.phase==="hold"?"hold":this.enemies.some(e=>!e.dead&&e.type.boss&&e.engaged&&e.mesh.position.distanceTo(this.player.position)<50)?"boss":this.combatHeat>0&&this.enemies.some(e=>!e.dead)?"combat":"explore"}tracer(t,e,n){const i=new pe().setFromPoints([t,e]),r=new ui({color:n,transparent:!0,opacity:.85}),a=new Po(i,r);this.scene.add(a),this.effects.push({mesh:a,life:.065,maxLife:.065})}flash(t,e=12,n=3,i=.065){const r=this.flashLights.reduce((a,o)=>o.userData.remaining<a.userData.remaining?o:a);r.position.copy(t),r.intensity=e,r.distance=n,r.userData.remaining=i}updateEffects(t){for(const e of this.flashLights)e.userData.remaining-=t,e.intensity=e.userData.remaining>0?e.intensity*Math.exp(-t*16):0;for(let e=this.effects.length-1;e>=0;e--){const n=this.effects[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry?.dispose(),n.mesh.material?.dispose(),this.effects.splice(e,1);continue}n.mesh.material.opacity=n.life/n.maxLife}for(let e=this.debris.length-1;e>=0;e--){const n=this.debris[e];n.life-=t,n.velocity.y-=13*t,n.mesh.position.addScaledVector(n.velocity,t),n.mesh.rotation.x+=n.spin.x*t,n.mesh.rotation.z+=n.spin.z*t,n.mesh.position.y<.04&&(n.mesh.position.y=.04,n.velocity.set(n.velocity.x*.5,Math.abs(n.velocity.y)*.3,n.velocity.z*.5),n.spin.multiplyScalar(.5)),n.life<.5&&n.mesh.scale.setScalar(Math.max(.01,n.life*2)),n.life<=0&&(this.scene.remove(n.mesh),this.debris.splice(e,1))}this.particles.update(t)}updateHUD(){vt.el("health-bar").style.width=`${this.health}%`,vt.el("health-number").textContent=Math.ceil(this.health),vt.el("energy-bar").style.width=`${this.energy}%`,vt.el("health-bar").style.background=this.health<30?"#e89173":"#d2e5b9",vt.el("ammo-number").textContent=String(this.ammo).padStart(2,"0"),vt.el("reserve-number").textContent=this.reserve,vt.el("grenade-count").textContent=`◈ ${this.grenades} ГРАНАТИ`,vt.el("reload-status").textContent=this.reloadTimer>0?`ПЕРЕЗАРЯДЖАННЯ ${this.reloadTimer.toFixed(1)}`:"",vt.el("damage-flash").style.opacity=Math.max(this.hurtTimer<.4?(.4-this.hurtTimer)*.8:0,this.health<30?.12:0),vt.el("hit-marker").style.opacity=this.hitTimer>0?"1":"0",vt.el("kill-notice").style.opacity=this.killTimer>0?"1":"0",vt.el("crosshair").classList.toggle("aiming",this.aiming),vt.el("bearing").textContent=String(Math.round(Ml.radToDeg(-this.yaw)%360+360)%360).padStart(3,"0");const t=this.canInteract(),e=this.nearSupply();vt.show("interaction",t||e),vt.el("interaction-text").textContent=t?je[this.chapter].interaction:"ПОПОВНИТИ БОЄЗАПАС";const n=je[this.chapter].location,i=this.v1.set(n[0],2.9,n[1]).project(this.camera),r=i.z>-1&&i.z<1;vt.show("target-marker",r),r&&(vt.el("target-marker").style.left=`${Oe((i.x*.5+.5)*innerWidth,35,innerWidth-35)}px`,vt.el("target-marker").style.top=`${Oe((-i.y*.5+.5)*innerHeight,130,innerHeight-140)}px`,vt.el("target-distance").textContent=`${Math.round(Math.hypot(this.player.position.x-n[0],this.player.position.z-n[1]))} М`),this.drawMinimap()}drawMinimap(){const t=vt.el("minimap"),e=t.getContext("2d"),n=t.width;e.clearRect(0,0,n,n),e.save(),e.beginPath(),e.arc(n/2,n/2,n/2,0,Math.PI*2),e.clip(),e.fillStyle="#14251feb",e.fillRect(0,0,n,n);const i=1.6,r=n/2-this.player.position.x*i,a=n/2-this.player.position.z*i;e.strokeStyle="#6e84652b",e.lineWidth=1;for(let c=-80;c<100;c+=10)e.beginPath(),e.moveTo(r+c*i,0),e.lineTo(r+c*i,n),e.stroke();for(let c=-140;c<120;c+=10)e.beginPath(),e.moveTo(0,a+c*i),e.lineTo(n,a+c*i),e.stroke();e.fillStyle="#75856655";for(const c of this.world.colliders)e.fillRect(r+c.min.x*i,a+c.min.z*i,(c.max.x-c.min.x)*i,(c.max.z-c.min.z)*i);for(const c of this.enemies)c.dead||(e.fillStyle=Wc[c.kind]||Wc.black,e.beginPath(),e.arc(r+c.mesh.position.x*i,a+c.mesh.position.z*i,c.type.boss?3.2:2.3,0,Math.PI*2),e.fill());e.strokeStyle="#ff5a3c";for(const c of this.enemyGrenades)e.beginPath(),e.arc(r+c.to.x*i,a+c.to.z*i,4.6*i,0,Math.PI*2),e.stroke();this.chapter<2&&!this.ally.userData.isDead()&&(e.fillStyle="#8fd3e8",e.beginPath(),e.arc(r+this.ally.position.x*i,a+this.ally.position.z*i,2.3,0,Math.PI*2),e.fill());const[o,l]=je[this.chapter].location;e.strokeStyle="#d3ec85",e.lineWidth=1.5,e.strokeRect(r+o*i-3,a+l*i-3,6,6),e.translate(n/2,n/2),e.rotate(-this.yaw),e.fillStyle="#e2f5bb",e.beginPath(),e.moveTo(0,-7),e.lineTo(4,5),e.lineTo(0,3),e.lineTo(-4,5),e.closePath(),e.fill(),e.restore(),e.fillStyle="#b4cba0",e.font="9px monospace",e.fillText("N",n/2-3,14)}frame(t){requestAnimationFrame(this.frame);const e=Math.min((t-this.last)/1e3,.045);this.last=t;let n=e;this.hitstop>0&&(this.hitstop-=e,n=e*.06);const i=this.mode!=="paused"&&this.mode!=="dead";i&&(this.elapsed+=n,this.world.update(n,this.elapsed),this.dust.rotation.y=Math.sin(this.elapsed*.008)*.025,this.objectiveRing.children[1].rotation.y+=n*.7,this.objectiveRing.children[1].position.y=2.35+Math.sin(this.elapsed*2)*.1),Gt.setListener(this.camera.position.x,this.camera.position.z,this.mode==="playing"?this.yaw:0);const r=this.world.helicopter.position.distanceTo(this.camera.position);if(this.mode==="menu"){this.player.userData.animate(n,this.elapsed,!1),this.ally.userData.animate(n,this.elapsed,!1);const a=innerWidth/innerHeight>1,o=a?4.4:3.1;this.camera.position.set(o+(ie.reducedMotion?0:Math.sin(this.elapsed*.13)*.2),2.75,a?37.4:39.1),this.camera.lookAt(a?-2.3:-1.7,1.1,29.2),Gt.update(e,.08),Gt.setRotor(.35)}if(this.mode==="playing"){this.playTime+=e,this.hitTimer-=n,this.killTimer-=n,this.combatHeat=Math.max(0,this.combatHeat-e);const a=this.nonstopTime>0?.35:1;this.updatePlayer(n),this.mode==="playing"&&(this.updateAlly(n),this.updateEnemies(n*a),this.updateEnemyGrenades(n*a)),this.updateGrenades(n*a),this.updateEffects(n*a),this.mode==="playing"&&this.phase==="hold"&&this.updateHold(n),this.dialogueTimer>0&&(this.dialogueTimer-=e,this.dialogueTimer<=0&&this.nextDialogue()),this.updateChatter(e),this.updateNonstop(e),this.mode==="playing"&&Je.setState(this.musicState()),Gt.update(e,this.enemies.some(o=>!o.dead)?.65:.15),Gt.setRotor(.4/(1+r/6))}if(this.mode==="cinematic"){this.updateCinematic(n),this.player.userData.animate(n,this.elapsed,!1),this.ally.userData.animate(n,this.elapsed,!1);for(const a of this.enemies)a.dead&&a.mesh.userData.animate(n,this.elapsed,!1);this.updateEffects(n),Gt.update(e,.15),Gt.setRotor(this.cinematic?.name==="intro"?this.cinematic.landingAt===void 0?1:.28+.72*(1-Oe((this.cinematic.time-this.cinematic.landingAt)/2.4,0,1)):.4/(1+r/6))}(this.mode==="dead"||this.mode==="ending")&&(this.player.userData.animate(n,this.elapsed,!1),this.particles.update(e),Gt.update(e,.1)),i&&this.updateRain(n),this.updateTalk(),Je.update(),this.renderer.render(this.scene,this.camera)}}try{Bo=new Hv,Rh.onLoad=()=>vt.ready(),setTimeout(()=>vt.ready(),1300)}catch(s){console.error(s),vt.fatal("Для гри потрібні WebGL 2 і ввімкнене апаратне прискорення. Відкрий сторінку в актуальному Chrome, Edge або Firefox. "+s.message)}
