var pl="170",ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hu=0,$l=1,uu=2;var oh=1,ml=2,gn=3,kn=0,Se=1,Je=2,On=0,Pi=1,Kl=2,jl=3,Ql=4,du=5,ti=100,fu=101,pu=102,mu=103,gu=104,_u=200,xu=201,yu=202,vu=203,Zo=204,Jo=205,Mu=206,bu=207,Su=208,wu=209,Tu=210,Eu=211,Au=212,Cu=213,Ru=214,$o=0,Ko=1,jo=2,Ui=3,Qo=4,ta=5,ea=6,na=7,ah=0,Pu=1,Iu=2,Fn=0,Lu=1,Du=2,Uu=3,gl=4,Nu=5,Ou=6,Fu=7;var lh=300,Ni=301,Oi=302,ia=303,sa=304,Wr=306,ra=1e3,_n=1001,oa=1002,Ke=1003,Bu=1004;var Os=1005;var ze=1006,mo=1007;var xn=1008;var bn=1009,ch=1010,hh=1011,ys=1012,_l=1013,ii=1014,yn=1015,Ps=1016,xl=1017,yl=1018,Fi=1020,uh=35902,dh=1021,fh=1022,$e=1023,ph=1024,mh=1025,Ii=1026,Bi=1027,gh=1028,vl=1029,_h=1030,Ml=1031;var bl=1033,ar=33776,lr=33777,cr=33778,hr=33779,aa=35840,la=35841,ca=35842,ha=35843,ua=36196,da=37492,fa=37496,pa=37808,ma=37809,ga=37810,_a=37811,xa=37812,ya=37813,va=37814,Ma=37815,ba=37816,Sa=37817,wa=37818,Ta=37819,Ea=37820,Aa=37821,ur=36492,Ca=36494,Ra=36495,xh=36283,Pa=36284,Ia=36285,La=36286;var dr=2300,Da=2301,go=2302,tc=2400,ec=2401,nc=2402;var ku=3200,zu=3201;var yh=0,Vu=1,nn="",Me="srgb",Ji="srgb-linear",Xr="linear",ee="srgb";var fi=7680;var ic=519,Hu=512,Gu=513,Wu=514,vh=515,Xu=516,qu=517,Yu=518,Zu=519,sc=35044;var rc="300 es",vn=2e3,fr=2001,Sn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oc=1234567,ps=Math.PI/180,vs=180/Math.PI;function ci(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function Sl(i,t){return(i%t+t)%t}function Ju(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function $u(i,t,e){return i!==t?(e-i)/(t-i):0}function ms(i,t,e){return(1-e)*i+e*t}function Ku(i,t,e,n){return ms(i,t,1-Math.exp(-e*n))}function ju(i,t=1){return t-Math.abs(Sl(i,t*2)-t)}function Qu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ed(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nd(i,t){return i+Math.random()*(t-i)}function id(i){return i*(.5-Math.random())}function sd(i){i!==void 0&&(oc=i);let t=oc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rd(i){return i*ps}function od(i){return i*vs}function ad(i){return(i&i-1)===0&&i!==0}function ld(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mh={DEG2RAD:ps,RAD2DEG:vs,generateUUID:ci,clamp:fe,euclideanModulo:Sl,mapLinear:Ju,inverseLerp:$u,lerp:ms,damp:Ku,pingpong:ju,smoothstep:Qu,smootherstep:td,randInt:ed,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:rd,radToDeg:od,isPowerOfTwo:ad,ceilPowerOfTwo:ld,floorPowerOfTwo:cd,setQuaternionFromProperEuler:hd,normalize:Te,denormalize:Ai},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],x=s[4],y=s[7],D=s[2],T=s[5],R=s[8];return r[0]=o*_+a*b+l*D,r[3]=o*m+a*x+l*T,r[6]=o*p+a*y+l*R,r[1]=c*_+h*b+f*D,r[4]=c*m+h*x+f*T,r[7]=c*p+h*y+f*R,r[2]=d*_+u*b+g*D,r[5]=d*m+u*x+g*T,r[8]=d*p+u*y+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,g=e*f+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_o.makeScale(t,e)),this}rotate(t){return this.premultiply(_o.makeRotation(-t)),this}translate(t,e){return this.premultiply(_o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_o=new kt;function bh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){let i=pr("canvas");return i.style.display="block",i}var ac={};function ds(i){i in ac||(ac[i]=!0,console.warn(i))}function dd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function fd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Jt={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=Mn(i.r),i.g=Mn(i.g),i.b=Mn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===nn?Xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var lc=[.64,.33,.3,.6,.15,.06],cc=[.2126,.7152,.0722],hc=[.3127,.329],uc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[Ji]:{primaries:lc,whitePoint:hc,transfer:Xr,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:cc,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:lc,whitePoint:hc,transfer:ee,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:cc,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}});var pi,Ua=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=pr("canvas")),pi.width=t.width,pi.height=t.height;let n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},md=0,mr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xo(s[o].image)):r.push(xo(s[o]))}else r=xo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gd=0,Fe=class i extends Sn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_n,s=_n,r=ze,o=xn,a=$e,l=bn,c=i.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ci(),this.name="",this.source=new mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ra:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ra:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=lh;Fe.DEFAULT_ANISOTROPY=1;var ne=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(u+1)/2,D=(p+1)/2,T=(h+d)/4,R=(f+_)/4,w=(g+m)/4;return x>y&&x>D?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=R/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=w/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=w/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Na=class extends Sn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new mr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Na{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gr=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oa=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==d||c!==u||h!==g){let m=1-a,p=l*d+c*u+h*g+f*_,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let D=Math.sqrt(x),T=Math.atan2(D,p*b);m=Math.sin(m*T)/D,a=Math.sin(a*T)/D}let y=a*b;if(l=l*m+d*y,c=c*m+u*y,h=h*m+g*y,f=f*m+_*y,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=D,c*=D,h*=D,f*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*u-c*d,t[e+1]=l*g+h*d+c*f-a*u,t[e+2]=c*g+h*u+a*d-l*f,t[e+3]=h*g-a*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),d=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yo.copy(this).projectOnVector(t),this.sub(yo)}reflect(t){return this.sub(yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yo=new V,fc=new je,Tn=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(r,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),Bs.subVectors(this.max,as),mi.subVectors(t.a,as),gi.subVectors(t.b,as),_i.subVectors(t.c,as),Pn.subVectors(gi,mi),In.subVectors(_i,gi),Yn.subVectors(mi,_i);let e=[0,-Pn.z,Pn.y,0,-In.z,In.y,0,-Yn.z,Yn.y,Pn.z,0,-Pn.x,In.z,0,-In.x,Yn.z,0,-Yn.x,-Pn.y,Pn.x,0,-In.y,In.x,0,-Yn.y,Yn.x,0];return!vo(e,mi,gi,_i,Bs)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,mi,gi,_i,Bs))?!1:(ks.crossVectors(Pn,In),e=[ks.x,ks.y,ks.z],vo(e,mi,gi,_i,Bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},hn=[new V,new V,new V,new V,new V,new V,new V,new V],Xe=new V,Fs=new Tn,mi=new V,gi=new V,_i=new V,Pn=new V,In=new V,Yn=new V,as=new V,Bs=new V,ks=new V,Zn=new V;function vo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zn.fromArray(i,r);let a=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var _d=new Tn,ls=new V,Mo=new V,Ms=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);let e=ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(Mo)),this.expandByPoint(ls.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},un=new V,bo=new V,zs=new V,Ln=new V,So=new V,Vs=new V,wo=new V,bs=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bo.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(bo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(zs),a=Ln.dot(this.direction),l=-Ln.dot(zs),c=Ln.lengthSq(),h=Math.abs(1-o*o),f,d,u,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let _=1/h;f*=_,d*=_,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(bo).addScaledVector(zs,d),u}intersectSphere(t,e){un.subVectors(t.center,this.origin);let n=un.dot(this.direction),s=un.dot(un)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,s,r){So.subVectors(e,t),Vs.subVectors(n,t),wo.crossVectors(So,Vs);let o=this.direction.dot(wo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);let l=a*this.direction.dot(Vs.crossVectors(Ln,Vs));if(l<0)return null;let c=a*this.direction.dot(So.cross(Ln));if(c<0||l+c>o)return null;let h=-a*Ln.dot(wo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,s,r,o,a,l,c,h,f,d,u,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,d,u,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,f,d,u,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),o=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*h,u=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,g=c*h,_=c*f;e[0]=d+_*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,g=c*h,_=c*f;e[0]=d-_*a,e[4]=-o*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,u=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-u,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*f,e[8]=g*f+u,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*f+g,e[10]=d-_*f}else if(t.order==="XZY"){let d=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+_,e[5]=o*h,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xd,t,yd)}lookAt(t,e,n){let s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Dn.crossVectors(n,Ne),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Dn.crossVectors(n,Ne)),Dn.normalize(),Hs.crossVectors(Ne,Dn),s[0]=Dn.x,s[4]=Hs.x,s[8]=Ne.x,s[1]=Dn.y,s[5]=Hs.y,s[9]=Ne.y,s[2]=Dn.z,s[6]=Hs.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],x=n[7],y=n[11],D=n[15],T=s[0],R=s[4],w=s[8],v=s[12],M=s[1],O=s[5],N=s[9],H=s[13],q=s[2],j=s[6],J=s[10],nt=s[14],G=s[3],yt=s[7],Mt=s[11],bt=s[15];return r[0]=o*T+a*M+l*q+c*G,r[4]=o*R+a*O+l*j+c*yt,r[8]=o*w+a*N+l*J+c*Mt,r[12]=o*v+a*H+l*nt+c*bt,r[1]=h*T+f*M+d*q+u*G,r[5]=h*R+f*O+d*j+u*yt,r[9]=h*w+f*N+d*J+u*Mt,r[13]=h*v+f*H+d*nt+u*bt,r[2]=g*T+_*M+m*q+p*G,r[6]=g*R+_*O+m*j+p*yt,r[10]=g*w+_*N+m*J+p*Mt,r[14]=g*v+_*H+m*nt+p*bt,r[3]=b*T+x*M+y*q+D*G,r[7]=b*R+x*O+y*j+D*yt,r[11]=b*w+x*N+y*J+D*Mt,r[15]=b*v+x*H+y*nt+D*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*f-s*c*f-r*a*d+n*c*d+s*a*u-n*l*u)+_*(+e*l*u-e*c*d+r*o*d-s*o*u+s*c*h-r*l*h)+m*(+e*c*f-e*a*u-r*o*f+n*o*u+r*a*h-n*c*h)+p*(-s*a*h-e*l*f+e*a*d+s*o*f-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=f*m*c-_*d*c+_*l*u-a*m*u-f*l*p+a*d*p,x=g*d*c-h*m*c-g*l*u+o*m*u+h*l*p-o*d*p,y=h*_*c-g*f*c+g*a*u-o*_*u-h*a*p+o*f*p,D=g*f*l-h*_*l-g*a*d+o*_*d+h*a*m-o*f*m,T=e*b+n*x+s*y+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=b*R,t[1]=(_*d*r-f*m*r-_*s*u+n*m*u+f*s*p-n*d*p)*R,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*R,t[3]=(f*l*r-a*d*r-f*s*c+n*d*c+a*s*u-n*l*u)*R,t[4]=x*R,t[5]=(h*m*r-g*d*r+g*s*u-e*m*u-h*s*p+e*d*p)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*u+e*l*u)*R,t[8]=y*R,t[9]=(g*f*r-h*_*r-g*n*u+e*_*u+h*n*p-e*f*p)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*u-e*a*u)*R,t[12]=D*R,t[13]=(h*_*s-g*f*s+g*n*d-e*_*d-h*n*m+e*f*m)*R,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,g=r*f,_=o*h,m=o*f,p=a*f,b=l*c,x=l*h,y=l*f,D=n.x,T=n.y,R=n.z;return s[0]=(1-(_+p))*D,s[1]=(u+y)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(u-y)*T,s[5]=(1-(d+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+x)*R,s[9]=(m-b)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=xi.set(s[0],s[1],s[2]).length(),o=xi.set(s[4],s[5],s[6]).length(),a=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);let c=1/r,h=1/o,f=1/a;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=f,qe.elements[9]*=f,qe.elements[10]*=f,e.setFromRotationMatrix(qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),u,g;if(a===vn)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fr)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vn){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-r),d=(e+t)*c,u=(n+s)*h,g,_;if(a===vn)g=(o+r)*f,_=-2*f;else if(a===fr)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xi=new V,qe=new ce,xd=new V(0,0,0),yd=new V(1,1,1),Dn=new V,Hs=new V,Ne=new V,pc=new ce,mc=new je,sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mc.setFromEuler(this),this.setFromQuaternion(mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vd=0,gc=new V,yi=new je,dn=new ce,Gs=new V,cs=new V,Md=new V,bd=new je,_c=new V(1,0,0),xc=new V(0,1,0),yc=new V(0,0,1),vc={type:"added"},Sd={type:"removed"},vi={type:"childadded",child:null},To={type:"childremoved",child:null},Re=class i extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new sn,n=new je,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new kt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(xc,t)}rotateZ(t){return this.rotateOnAxis(yc,t)}translateOnAxis(t,e){return gc.copy(t).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(xc,t)}translateZ(t){return this.translateOnAxis(yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(cs,Gs,this.up):dn.lookAt(Gs,cs,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(dn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vc),vi.child=t,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sd),To.child=t,this.dispatchEvent(To),To.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vc),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,Md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new V(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=new V,fn=new V,Eo=new V,pn=new V,Mi=new V,bi=new V,Mc=new V,Ao=new V,Co=new V,Ro=new V,Po=new ne,Io=new ne,Lo=new ne,ei=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ye.subVectors(t,e),s.cross(Ye);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ye.subVectors(s,e),fn.subVectors(n,e),Eo.subVectors(t,e);let o=Ye.dot(Ye),a=Ye.dot(fn),l=Ye.dot(Eo),c=fn.dot(fn),h=fn.dot(Eo),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Po.setScalar(0),Io.setScalar(0),Lo.setScalar(0),Po.fromBufferAttribute(t,e),Io.fromBufferAttribute(t,n),Lo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Po,r.x),o.addScaledVector(Io,r.y),o.addScaledVector(Lo,r.z),o}static isFrontFacing(t,e,n,s){return Ye.subVectors(n,e),fn.subVectors(t,e),Ye.cross(fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ye.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Mi.subVectors(s,n),bi.subVectors(r,n),Ao.subVectors(t,n);let l=Mi.dot(Ao),c=bi.dot(Ao);if(l<=0&&c<=0)return e.copy(n);Co.subVectors(t,s);let h=Mi.dot(Co),f=bi.dot(Co);if(h>=0&&f<=h)return e.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Mi,o);Ro.subVectors(t,r);let u=Mi.dot(Ro),g=bi.dot(Ro);if(g>=0&&u<=g)return e.copy(r);let _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(bi,a);let m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return Mc.subVectors(r,s),a=(f-h)/(f-h+(u-g)),e.copy(s).addScaledVector(Mc,a);let p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Mi,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function Do(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Sl(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Do(o,r,t+1/3),this.g=Do(o,r,t),this.b=Do(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=Sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return Jt.fromWorkingColorSpace(ve.copy(this),t),Math.round(fe(ve.r*255,0,255))*65536+Math.round(fe(ve.g*255,0,255))*256+Math.round(fe(ve.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(ve.copy(this),e);let n=ve.r,s=ve.g,r=ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Me){Jt.fromWorkingColorSpace(ve.copy(this),t);let e=ve.r,n=ve.g,s=ve.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(Ws);let n=ms(Un.h,Ws.h,e),s=ms(Un.s,Ws.s,e),r=ms(Un.l,Ws.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ve=new Yt;Yt.NAMES=Sh;var wd=0,zn=class extends Sn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=ci(),this.name="",this.blending=Pi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Jo,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Jo&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ki=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new V,Xs=new ht,Ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xs.fromBufferAttribute(this,e),Xs.applyMatrix3(t),this.setXY(e,Xs.x,Xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sc&&(t.usage=this.usage),t}};var xr=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yr=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},Td=0,ke=new ce,Uo=new Re,Si=new V,Oe=new Tn,hs=new Tn,_e=new V,we=class i extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bh(t)?yr:xr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Uo.lookAt(t),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(Oe.min,hs.min),Oe.expandByPoint(_e),_e.addVectors(Oe.max,hs.max),Oe.expandByPoint(_e)):(Oe.expandByPoint(hs.min),Oe.expandByPoint(hs.max))}Oe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_e.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(t,c),_e.add(Si)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new V,l[w]=new V;let c=new V,h=new V,f=new V,d=new ht,u=new ht,g=new ht,_=new V,m=new V;function p(w,v,M){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,v),f.fromBufferAttribute(n,M),d.fromBufferAttribute(r,w),u.fromBufferAttribute(r,v),g.fromBufferAttribute(r,M),h.sub(c),f.sub(c),u.sub(d),g.sub(d);let O=1/(u.x*g.y-g.x*u.y);isFinite(O)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(O),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(O),a[w].add(_),a[v].add(_),a[M].add(_),l[w].add(m),l[v].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let w=0,v=b.length;w<v;++w){let M=b[w],O=M.start,N=M.count;for(let H=O,q=O+N;H<q;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let x=new V,y=new V,D=new V,T=new V;function R(w){D.fromBufferAttribute(s,w),T.copy(D);let v=a[w];x.copy(v),x.sub(D.multiplyScalar(D.dot(v))).normalize(),y.crossVectors(T,v);let O=y.dot(l[w])<0?-1:1;o.setXYZW(w,x.x,x.y,x.z,O)}for(let w=0,v=b.length;w<v;++w){let M=b[w],O=M.start,N=M.count;for(let H=O,q=O+N;H<q;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,f=new V;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[u++]}return new Ce(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bc=new ce,Jn=new bs,qs=new Ms,Sc=new V,Ys=new V,Zs=new V,Js=new V,No=new V,$s=new V,wc=new V,Ks=new V,qt=class extends Re{constructor(t=new we,e=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(No.fromBufferAttribute(f,t),o?$s.addScaledVector(No,h):$s.addScaledVector(No.sub(e),h))}e.add($s)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(qs.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(qs,Sc)===null||Jn.origin.distanceToSquared(Sc)>(t.far-t.near)**2))&&(bc.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(bc),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,u.start),x=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=b,D=x;y<D;y+=3){let T=a.getX(y),R=a.getX(y+1),w=a.getX(y+2);s=js(this,p,t,n,c,h,f,T,R,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){let b=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=js(this,o,t,n,c,h,f,b,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,u.start),x=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=b,D=x;y<D;y+=3){let T=y,R=y+1,w=y+2;s=js(this,p,t,n,c,h,f,T,R,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){let b=m,x=m+1,y=m+2;s=js(this,o,t,n,c,h,f,b,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ed(i,t,e,n,s,r,o,a){let l;if(t.side===Se?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===kn,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ks);return c<e.near||c>e.far?null:{distance:c,point:Ks.clone(),object:i}}function js(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ys),i.getVertexPosition(l,Zs),i.getVertexPosition(c,Js);let h=Ed(i,t,e,n,Ys,Zs,Js,wc);if(h){let f=new V;ei.getBarycoord(wc,Ys,Zs,Js,f),s&&(h.uv=ei.getInterpolatedAttribute(s,a,l,c,f,new ht)),r&&(h.uv1=ei.getInterpolatedAttribute(r,a,l,c,f,new ht)),o&&(h.normal=ei.getInterpolatedAttribute(o,a,l,c,f,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new V,materialIndex:0};ei.getNormal(Ys,Zs,Js,d.normal),h.face=d,h.barycoord=f}return h}var En=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(f,2));function g(_,m,p,b,x,y,D,T,R,w,v){let M=y/R,O=D/w,N=y/2,H=D/2,q=T/2,j=R+1,J=w+1,nt=0,G=0,yt=new V;for(let Mt=0;Mt<J;Mt++){let bt=Mt*O-H;for(let Dt=0;Dt<j;Dt++){let Vt=Dt*M-N;yt[_]=Vt*b,yt[m]=bt*x,yt[p]=q,c.push(yt.x,yt.y,yt.z),yt[_]=0,yt[m]=0,yt[p]=T>0?1:-1,h.push(yt.x,yt.y,yt.z),f.push(Dt/R),f.push(1-Mt/w),nt+=1}}for(let Mt=0;Mt<w;Mt++)for(let bt=0;bt<R;bt++){let Dt=d+bt+j*Mt,Vt=d+bt+j*(Mt+1),B=d+(bt+1)+j*(Mt+1),U=d+(bt+1)+j*Mt;l.push(Dt,Vt,U),l.push(Vt,B,U),G+=6}a.addGroup(u,G,v),u+=G,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ee(i){let t={};for(let e=0;e<i.length;e++){let n=zi(i[e]);for(let s in n)t[s]=n[s]}return t}function Ad(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Cd={clone:zi,merge:Ee},Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=Ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},vr=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Nn=new V,Tc=new ht,Ec=new ht,be=class extends vr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Tc,Ec),e.subVectors(Ec,Tc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},wi=-90,Ti=1,Fa=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new be(wi,Ti,t,e);s.layers=this.layers,this.add(s);let r=new be(wi,Ti,t,e);r.layers=this.layers,this.add(r);let o=new be(wi,Ti,t,e);o.layers=this.layers,this.add(o);let a=new be(wi,Ti,t,e);a.layers=this.layers,this.add(a);let l=new be(wi,Ti,t,e);l.layers=this.layers,this.add(l);let c=new be(wi,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Mr=class extends Fe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ni,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ba=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new En(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:On});r.uniforms.tEquirect.value=e;let o=new qt(s,r),a=e.minFilter;return e.minFilter===xn&&(e.minFilter=ze),new Fa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Oo=new V,Id=new V,Ld=new kt,Ze=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Oo.subVectors(n,e).cross(Id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Oo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ld.getNormalMatrix(t),s=this.coplanarPoint(Oo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$n=new Ms,Qs=new V,Ss=class{constructor(t=new Ze,e=new Ze,n=new Ze,s=new Ze,r=new Ze,o=new Ze){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],u=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-u,y-p).normalize(),n[1].setComponents(l+r,d+c,m+u,y+p).normalize(),n[2].setComponents(l+o,d+h,m+g,y+b).normalize(),n[3].setComponents(l-o,d-h,m-g,y-b).normalize(),n[4].setComponents(l-a,d-f,m-_,y-x).normalize(),e===vn)n[5].setComponents(l+a,d+f,m+_,y+x).normalize();else if(e===fr)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Qs.x=s.normal.x>0?t.max.x:t.min.x,Qs.y=s.normal.y>0?t.max.y:t.min.y,Qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Th(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dd(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],_=f[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let _=f[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Vi=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,d=e/l,u=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let b=p*d-o;for(let x=0;x<c;x++){let y=x*f-r;g.push(y,-b,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let x=b+c*p,y=b+c*(p+1),D=b+1+c*(p+1),T=b+1+c*p;u.push(x,y,T),u.push(y,D,T)}this.setIndex(u),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nd=`#ifdef USE_ALPHAHASH
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
#endif`,Od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
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
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
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
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
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
#endif`,Zd=`#ifdef USE_BUMPMAP
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sf=`#define PI 3.141592653589793
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
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,of=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bf=`#ifdef USE_GRADIENTMAP
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
}`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
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
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
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
#endif`,Df=`struct PhysicalMaterial {
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
}`,Uf=`
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wf=`#if defined( USE_POINTS_UV )
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
#endif`,Xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
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
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yp=`float getShadowMask() {
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
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Np=`uniform sampler2D t2D;
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`#include <common>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hp=`#define DISTANCE
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
}`,Gp=`#define DISTANCE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`uniform float scale;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Jp=`uniform vec3 diffuse;
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
}`,$p=`#define LAMBERT
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
}`,Kp=`#define LAMBERT
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
}`,jp=`#define MATCAP
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
}`,Qp=`#define MATCAP
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
}`,tm=`#define NORMAL
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
}`,em=`#define NORMAL
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
}`,nm=`#define PHONG
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
}`,im=`#define PHONG
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
}`,sm=`#define STANDARD
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
}`,rm=`#define STANDARD
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
}`,om=`#define TOON
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
}`,am=`#define TOON
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
}`,lm=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,um=`uniform vec3 color;
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
}`,dm=`uniform float rotation;
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
}`,fm=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Ud,alphahash_pars_fragment:Nd,alphamap_fragment:Od,alphamap_pars_fragment:Fd,alphatest_fragment:Bd,alphatest_pars_fragment:kd,aomap_fragment:zd,aomap_pars_fragment:Vd,batching_pars_vertex:Hd,batching_vertex:Gd,begin_vertex:Wd,beginnormal_vertex:Xd,bsdfs:qd,iridescence_fragment:Yd,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:jd,color_fragment:Qd,color_pars_fragment:tf,color_pars_vertex:ef,color_vertex:nf,common:sf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:of,displacementmap_pars_vertex:af,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,colorspace_fragment:uf,colorspace_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Af,envmap_vertex:_f,fog_vertex:xf,fog_pars_vertex:yf,fog_fragment:vf,fog_pars_fragment:Mf,gradientmap_pars_fragment:bf,lightmap_pars_fragment:Sf,lights_lambert_fragment:wf,lights_lambert_pars_fragment:Tf,lights_pars_begin:Ef,lights_toon_fragment:Cf,lights_toon_pars_fragment:Rf,lights_phong_fragment:Pf,lights_phong_pars_fragment:If,lights_physical_fragment:Lf,lights_physical_pars_fragment:Df,lights_fragment_begin:Uf,lights_fragment_maps:Nf,lights_fragment_end:Of,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:Bf,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:zf,map_fragment:Vf,map_pars_fragment:Hf,map_particle_fragment:Gf,map_particle_pars_fragment:Wf,metalnessmap_fragment:Xf,metalnessmap_pars_fragment:qf,morphinstance_vertex:Yf,morphcolor_vertex:Zf,morphnormal_vertex:Jf,morphtarget_pars_vertex:$f,morphtarget_vertex:Kf,normal_fragment_begin:jf,normal_fragment_maps:Qf,normal_pars_fragment:tp,normal_pars_vertex:ep,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:op,iridescence_pars_fragment:ap,opaque_fragment:lp,packing:cp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:dp,dithering_pars_fragment:fp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:_p,shadowmap_vertex:xp,shadowmask_pars_fragment:yp,skinbase_vertex:vp,skinning_pars_vertex:Mp,skinning_vertex:bp,skinnormal_vertex:Sp,specularmap_fragment:wp,specularmap_pars_fragment:Tp,tonemapping_fragment:Ep,tonemapping_pars_fragment:Ap,transmission_fragment:Cp,transmission_pars_fragment:Rp,uv_pars_fragment:Pp,uv_pars_vertex:Ip,uv_vertex:Lp,worldpos_vertex:Dp,background_vert:Up,background_frag:Np,backgroundCube_vert:Op,backgroundCube_frag:Fp,cube_vert:Bp,cube_frag:kp,depth_vert:zp,depth_frag:Vp,distanceRGBA_vert:Hp,distanceRGBA_frag:Gp,equirect_vert:Wp,equirect_frag:Xp,linedashed_vert:qp,linedashed_frag:Yp,meshbasic_vert:Zp,meshbasic_frag:Jp,meshlambert_vert:$p,meshlambert_frag:Kp,meshmatcap_vert:jp,meshmatcap_frag:Qp,meshnormal_vert:tm,meshnormal_frag:em,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:sm,meshphysical_frag:rm,meshtoon_vert:om,meshtoon_frag:am,points_vert:lm,points_frag:cm,shadow_vert:hm,shadow_frag:um,sprite_vert:dm,sprite_frag:fm},Ct={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},en={basic:{uniforms:Ee([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ee([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ee([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ee([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ee([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ee([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ee([Ct.points,Ct.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ee([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ee([Ct.common,Ct.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ee([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ee([Ct.sprite,Ct.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ee([Ct.common,Ct.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ee([Ct.lights,Ct.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};en.physical={uniforms:Ee([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var tr={r:0,b:0,g:0},Kn=new sn,pm=new ce;function mm(i,t,e,n,s,r,o){let a=new Yt(0),l=r===!0?0:1,c,h,f=null,d=0,u=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function _(b){let x=!1,y=g(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),x=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,x){let y=g(x);y&&(y.isCubeTexture||y.mapping===Wr)?(h===void 0&&(h=new qt(new En(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:zi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Kn.copy(x.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pm.makeRotationFromEuler(Kn)),h.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ee,(f!==y||d!==y.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,d=y.version,u=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new qt(new Vi(2,2),new rn({name:"BackgroundMaterial",uniforms:zi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(tr,wh(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m}}function gm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,O,N,H,q){let j=!1,J=f(H,N,O);r!==J&&(r=J,c(r.object)),j=u(M,H,N,q),j&&g(M,H,N,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(M,O,N,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,O,N){let H=N.wireframe===!0,q=n[M.id];q===void 0&&(q={},n[M.id]=q);let j=q[O.id];j===void 0&&(j={},q[O.id]=j);let J=j[H];return J===void 0&&(J=d(l()),j[H]=J),J}function d(M){let O=[],N=[],H=[];for(let q=0;q<e;q++)O[q]=0,N[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:H,object:M,attributes:{},index:null}}function u(M,O,N,H){let q=r.attributes,j=O.attributes,J=0,nt=N.getAttributes();for(let G in nt)if(nt[G].location>=0){let Mt=q[G],bt=j[G];if(bt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),Mt===void 0||Mt.attribute!==bt||bt&&Mt.data!==bt.data)return!0;J++}return r.attributesNum!==J||r.index!==H}function g(M,O,N,H){let q={},j=O.attributes,J=0,nt=N.getAttributes();for(let G in nt)if(nt[G].location>=0){let Mt=j[G];Mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor));let bt={};bt.attribute=Mt,Mt&&Mt.data&&(bt.data=Mt.data),q[G]=bt,J++}r.attributes=q,r.attributesNum=J,r.index=H}function _(){let M=r.newAttributes;for(let O=0,N=M.length;O<N;O++)M[O]=0}function m(M){p(M,0)}function p(M,O){let N=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;N[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),q[M]!==O&&(i.vertexAttribDivisor(M,O),q[M]=O)}function b(){let M=r.newAttributes,O=r.enabledAttributes;for(let N=0,H=O.length;N<H;N++)O[N]!==M[N]&&(i.disableVertexAttribArray(N),O[N]=0)}function x(M,O,N,H,q,j,J){J===!0?i.vertexAttribIPointer(M,O,N,q,j):i.vertexAttribPointer(M,O,N,H,q,j)}function y(M,O,N,H){_();let q=H.attributes,j=N.getAttributes(),J=O.defaultAttributeValues;for(let nt in j){let G=j[nt];if(G.location>=0){let yt=q[nt];if(yt===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),yt!==void 0){let Mt=yt.normalized,bt=yt.itemSize,Dt=t.get(yt);if(Dt===void 0)continue;let Vt=Dt.buffer,B=Dt.type,U=Dt.bytesPerElement,L=B===i.INT||B===i.UNSIGNED_INT||yt.gpuType===_l;if(yt.isInterleavedBufferAttribute){let E=yt.data,W=E.stride,et=yt.offset;if(E.isInstancedInterleavedBuffer){for(let z=0;z<G.locationSize;z++)p(G.location+z,E.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=E.meshPerAttribute*E.count)}else for(let z=0;z<G.locationSize;z++)m(G.location+z);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let z=0;z<G.locationSize;z++)x(G.location+z,bt/G.locationSize,B,Mt,W*U,(et+bt/G.locationSize*z)*U,L)}else{if(yt.isInstancedBufferAttribute){for(let E=0;E<G.locationSize;E++)p(G.location+E,yt.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let E=0;E<G.locationSize;E++)m(G.location+E);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let E=0;E<G.locationSize;E++)x(G.location+E,bt/G.locationSize,B,Mt,bt*U,bt/G.locationSize*E*U,L)}}else if(J!==void 0){let Mt=J[nt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(G.location,Mt);break;case 3:i.vertexAttrib3fv(G.location,Mt);break;case 4:i.vertexAttrib4fv(G.location,Mt);break;default:i.vertexAttrib1fv(G.location,Mt)}}}}b()}function D(){w();for(let M in n){let O=n[M];for(let N in O){let H=O[N];for(let q in H)h(H[q].object),delete H[q];delete O[N]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let O=n[M.id];for(let N in O){let H=O[N];for(let q in H)h(H[q].object),delete H[q];delete O[N]}delete n[M.id]}function R(M){for(let O in n){let N=n[O];if(N[M.id]===void 0)continue;let H=N[M.id];for(let q in H)h(H[q].object),delete H[q];delete N[M.id]}}function w(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:v,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function _m(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];e.update(u,n,1)}function l(c,h,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==$e&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let w=R===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==bn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yn&&!w)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:D,maxSamples:T}}function ym(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ze,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,x=b*4,y=p.clippingState||null;l.value=y,y=h(g,d,x,u);for(let D=0;D!==x;++D)y[D]=e[D];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=u+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=u;x!==_;++x,y+=4)o.copy(f[x]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function vm(i){let t=new WeakMap;function e(o,a){return a===ia?o.mapping=Ni:a===sa&&(o.mapping=Oi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ia||a===sa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ba(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var br=class extends vr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ci=4,Ac=[.125,.215,.35,.446,.526,.582],ni=20,Fo=new br,Cc=new Yt,Bo=null,ko=0,zo=0,Vo=!1,Qn=(1+Math.sqrt(5))/2,Ei=1/Qn,Rc=[new V(-Qn,Ei,0),new V(Qn,Ei,0),new V(-Ei,0,Qn),new V(Ei,0,Qn),new V(0,Qn,-Ei),new V(0,Qn,Ei),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Hi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Bo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bo,ko,zo),this._renderer.xr.enabled=Vo,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Ps,format:$e,colorSpace:Ji,depthBuffer:!1},s=Pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mm(r)),this._blurMaterial=bm(r,t,e)}return s}_compileMaterial(t){let e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,n,s){let a=new be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Cc),h.toneMapping=Fn,h.autoClear=!1;let u=new ki({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),g=new qt(new En,u),_=!1,m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,_=!0):(u.color.copy(Cc),_=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;er(s,b*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ni||t.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Fo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rc[(s-r-1)%Rc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new qt(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ni-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ni;m>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);let p=[],b=0;for(let R=0;R<ni;++R){let w=R/_,v=Math.exp(-w*w/2);p.push(v),R===0?b+=v:R<m&&(b+=2*v)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let y=this._sizeLods[s],D=3*y*(s>x-Ci?s-x+Ci:0),T=4*(this._cubeSize-y);er(e,D,T,3*y,2*y),l.setRenderTarget(e),l.render(f,Fo)}};function Mm(i){let t=[],e=[],n=[],s=i,r=i-Ci+1+Ac.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ci?l=Ac[o-i+Ci-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*u),x=new Float32Array(m*g*u),y=new Float32Array(p*g*u);for(let T=0;T<u;T++){let R=T%3*2/3-1,w=T>2?0:-1,v=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];b.set(v,_*g*T),x.set(d,m*g*T);let M=[T,T,T,T,T,T];y.set(M,p*g*T)}let D=new we;D.setAttribute("position",new Ce(b,_)),D.setAttribute("uv",new Ce(x,m)),D.setAttribute("faceIndex",new Ce(y,p)),t.push(D),s>Ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pc(i,t,e){let n=new wn(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bm(i,t,e){let n=new Float32Array(ni),s=new V(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wl(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ic(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Lc(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function Sm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ia||l===sa,h=l===Ni||l===Oi;if(c||h){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Hi(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new Hi(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function wm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Tm(i,t,e,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let u=f.morphAttributes;for(let g in u){let _=u[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(f){let d=[],u=f.index,g=f.attributes.position,_=0;if(u!==null){let b=u.array;_=u.version;for(let x=0,y=b.length;x<y;x+=3){let D=b[x+0],T=b[x+1],R=b[x+2];d.push(D,T,T,R,R,D)}}else if(g!==void 0){let b=g.array;_=g.version;for(let x=0,y=b.length/3-1;x<y;x+=3){let D=x+0,T=x+1,R=x+2;d.push(D,T,T,R,R,D)}}else return;let m=new(bh(d)?yr:xr)(d,1);m.version=_;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Em(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,d*o,g),e.update(u,n,g))}function h(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function f(d,u,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,u[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=u[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Am(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cm(i,t,e){let n=new WeakMap,s=new ne;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],x=0;u===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,D=1;y>t.maxTextureSize&&(D=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*D*4*f),R=new gr(T,y,D,f);R.type=yn,R.needsUpdate=!0;let w=x*4;for(let M=0;M<f;M++){let O=m[M],N=p[M],H=b[M],q=y*D*4*M;for(let j=0;j<O.count;j++){let J=j*w;u===!0&&(s.fromBufferAttribute(O,j),T[q+J+0]=s.x,T[q+J+1]=s.y,T[q+J+2]=s.z,T[q+J+3]=0),g===!0&&(s.fromBufferAttribute(N,j),T[q+J+4]=s.x,T[q+J+5]=s.y,T[q+J+6]=s.z,T[q+J+7]=0),_===!0&&(s.fromBufferAttribute(H,j),T[q+J+8]=s.x,T[q+J+9]=s.y,T[q+J+10]=s.z,T[q+J+11]=H.itemSize===4?s.w:1)}}d={count:f,texture:R,size:new ht(y,D)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Sr=class extends Fe{constructor(t,e,n,s,r,o,a,l,c,h=Ii){if(h!==Ii&&h!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=ii),n===void 0&&h===Bi&&(n=Fi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Eh=new Fe,Dc=new Sr(1,1),Ah=new gr,Ch=new Oa,Rh=new Mr,Uc=[],Nc=[],Oc=new Float32Array(16),Fc=new Float32Array(9),Bc=new Float32Array(4);function $i(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Uc[s];if(r===void 0&&(r=new Float32Array(s),Uc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qr(i,t){let e=Nc[t];e===void 0&&(e=new Int32Array(t),Nc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function Lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function Um(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Bc.set(n),i.uniformMatrix2fv(this.addr,!1,Bc),me(e,n)}}function Nm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Fc.set(n),i.uniformMatrix3fv(this.addr,!1,Fc),me(e,n)}}function Om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Oc.set(n),i.uniformMatrix4fv(this.addr,!1,Oc),me(e,n)}}function Fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Vm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dc.compareFunction=vh,r=Dc):r=Eh,e.setTexture2D(t||r,s)}function qm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ch,s)}function Ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Rh,s)}function Zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ah,s)}function Jm(i){switch(i){case 5126:return Pm;case 35664:return Im;case 35665:return Lm;case 35666:return Dm;case 35674:return Um;case 35675:return Nm;case 35676:return Om;case 5124:case 35670:return Fm;case 35667:case 35671:return Bm;case 35668:case 35672:return km;case 35669:case 35673:return zm;case 5125:return Vm;case 36294:return Hm;case 36295:return Gm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return Zm}}function $m(i,t){i.uniform1fv(this.addr,t)}function Km(i,t){let e=$i(t,this.size,2);i.uniform2fv(this.addr,e)}function jm(i,t){let e=$i(t,this.size,3);i.uniform3fv(this.addr,e)}function Qm(i,t){let e=$i(t,this.size,4);i.uniform4fv(this.addr,e)}function tg(i,t){let e=$i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function eg(i,t){let e=$i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ng(i,t){let e=$i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ig(i,t){i.uniform1iv(this.addr,t)}function sg(i,t){i.uniform2iv(this.addr,t)}function rg(i,t){i.uniform3iv(this.addr,t)}function og(i,t){i.uniform4iv(this.addr,t)}function ag(i,t){i.uniform1uiv(this.addr,t)}function lg(i,t){i.uniform2uiv(this.addr,t)}function cg(i,t){i.uniform3uiv(this.addr,t)}function hg(i,t){i.uniform4uiv(this.addr,t)}function ug(i,t,e){let n=this.cache,s=t.length,r=qr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Eh,r[o])}function dg(i,t,e){let n=this.cache,s=t.length,r=qr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ch,r[o])}function fg(i,t,e){let n=this.cache,s=t.length,r=qr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Rh,r[o])}function pg(i,t,e){let n=this.cache,s=t.length,r=qr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ah,r[o])}function mg(i){switch(i){case 5126:return $m;case 35664:return Km;case 35665:return jm;case 35666:return Qm;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return og;case 5125:return ag;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}var ka=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jm(e.type)}},za=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mg(e.type)}},Va=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ho=/(\w+)(\])?(\[|\.)?/g;function kc(i,t){i.seq.push(t),i.map[t.id]=t}function gg(i,t,e){let n=i.name,s=n.length;for(Ho.lastIndex=0;;){let r=Ho.exec(n),o=Ho.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kc(e,c===void 0?new ka(a,i,t):new za(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Va(a),kc(e,f)),e=f}}}var Di=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);gg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function zc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _g=37297,xg=0;function yg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Vc=new kt;function vg(i){Jt._getMatrix(Vc,Jt.workingColorSpace,i);let t=`mat3( ${Vc.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Xr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+yg(i.getShaderSource(t),o)}else return s}function Mg(i,t){let e=vg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bg(i,t){let e;switch(t){case Lu:e="Linear";break;case Du:e="Reinhard";break;case Uu:e="Cineon";break;case gl:e="ACESFilmic";break;case Ou:e="AgX";break;case Fu:e="Neutral";break;case Nu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nr=new V;function Sg(){Jt.getLuminanceCoefficients(nr);let i=nr.x.toFixed(4),t=nr.y.toFixed(4),e=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Tg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fs(i){return i!==""}function Gc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(i){return i.replace(Ag,Rg)}var Cg=new Map;function Rg(i,t){let e=Xt[t];if(e===void 0){let n=Cg.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ha(e)}var Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(i){return i.replace(Pg,Ig)}function Ig(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ni:case Oi:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ug(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function Ng(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ah:t="ENVMAP_BLENDING_MULTIPLY";break;case Pu:t="ENVMAP_BLENDING_MIX";break;case Iu:t="ENVMAP_BLENDING_ADD";break}return t}function Og(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Fg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Lg(e),c=Dg(e),h=Ug(e),f=Ng(e),d=Og(e),u=wg(e),g=Tg(r),_=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(m=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Mg("linearToOutputTexel",e.outputColorSpace),Sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),o=Ha(o),o=Gc(o,e),o=Wc(o,e),a=Ha(a),a=Gc(a,e),a=Wc(a,e),o=Xc(o),a=Xc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=b+m+o,y=b+p+a,D=zc(s,s.VERTEX_SHADER,x),T=zc(s,s.FRAGMENT_SHADER,y);s.attachShader(_,D),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(O){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(D).trim(),q=s.getShaderInfoLog(T).trim(),j=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,T);else{let nt=Hc(s,D,"vertex"),G=Hc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+N+`
`+nt+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||q==="")&&(J=!1);J&&(O.diagnostics={runnable:j,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(D),s.deleteShader(T),w=new Di(s,_),v=Eg(s,_)}let w;this.getUniforms=function(){return w===void 0&&R(this),w};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,_g)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}var Bg=0,Ga=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wa(t),e.set(t,n)),n}},Wa=class{constructor(t){this.id=Bg++,this.code=t,this.usedTimes=0}};function kg(i,t,e,n,s,r,o){let a=new _r,l=new Ga,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,M,O,N,H){let q=N.fog,j=H.geometry,J=v.isMeshStandardMaterial?N.environment:null,nt=(v.isMeshStandardMaterial?e:t).get(v.envMap||J),G=nt&&nt.mapping===Wr?nt.image.height:null,yt=g[v.type];v.precision!==null&&(u=s.getMaxPrecision(v.precision),u!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,bt=Mt!==void 0?Mt.length:0,Dt=0;j.morphAttributes.position!==void 0&&(Dt=1),j.morphAttributes.normal!==void 0&&(Dt=2),j.morphAttributes.color!==void 0&&(Dt=3);let Vt,B,U,L;if(yt){let te=en[yt];Vt=te.vertexShader,B=te.fragmentShader}else Vt=v.vertexShader,B=v.fragmentShader,l.update(v),U=l.getVertexShaderID(v),L=l.getFragmentShaderID(v);let E=i.getRenderTarget(),W=i.state.buffers.depth.getReversed(),et=H.isInstancedMesh===!0,z=H.isBatchedMesh===!0,rt=!!v.map,Z=!!v.matcap,tt=!!nt,A=!!v.aoMap,st=!!v.lightMap,it=!!v.bumpMap,ot=!!v.normalMap,k=!!v.displacementMap,F=!!v.emissiveMap,ft=!!v.metalnessMap,P=!!v.roughnessMap,S=v.anisotropy>0,Q=v.clearcoat>0,ct=v.dispersion>0,dt=v.iridescence>0,gt=v.sheen>0,At=v.transmission>0,St=S&&!!v.anisotropyMap,Tt=Q&&!!v.clearcoatMap,Bt=Q&&!!v.clearcoatNormalMap,C=Q&&!!v.clearcoatRoughnessMap,X=dt&&!!v.iridescenceMap,xt=dt&&!!v.iridescenceThicknessMap,ut=gt&&!!v.sheenColorMap,pt=gt&&!!v.sheenRoughnessMap,_t=!!v.specularMap,Lt=!!v.specularColorMap,Wt=!!v.specularIntensityMap,Y=At&&!!v.transmissionMap,Et=At&&!!v.thicknessMap,mt=!!v.gradientMap,vt=!!v.alphaMap,It=v.alphaTest>0,Rt=!!v.alphaHash,Ht=!!v.extensions,he=Fn;v.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(he=i.toneMapping);let xe={shaderID:yt,shaderType:v.type,shaderName:v.name,vertexShader:Vt,fragmentShader:B,defines:v.defines,customVertexShaderID:U,customFragmentShaderID:L,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:z,batchingColor:z&&H._colorsTexture!==null,instancing:et,instancingColor:et&&H.instanceColor!==null,instancingMorph:et&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:E===null?i.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ji,alphaToCoverage:!!v.alphaToCoverage,map:rt,matcap:Z,envMap:tt,envMapMode:tt&&nt.mapping,envMapCubeUVHeight:G,aoMap:A,lightMap:st,bumpMap:it,normalMap:ot,displacementMap:d&&k,emissiveMap:F,normalMapObjectSpace:ot&&v.normalMapType===Vu,normalMapTangentSpace:ot&&v.normalMapType===yh,metalnessMap:ft,roughnessMap:P,anisotropy:S,anisotropyMap:St,clearcoat:Q,clearcoatMap:Tt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:C,dispersion:ct,iridescence:dt,iridescenceMap:X,iridescenceThicknessMap:xt,sheen:gt,sheenColorMap:ut,sheenRoughnessMap:pt,specularMap:_t,specularColorMap:Lt,specularIntensityMap:Wt,transmission:At,transmissionMap:Y,thicknessMap:Et,gradientMap:mt,opaque:v.transparent===!1&&v.blending===Pi&&v.alphaToCoverage===!1,alphaMap:vt,alphaTest:It,alphaHash:Rt,combine:v.combine,mapUv:rt&&_(v.map.channel),aoMapUv:A&&_(v.aoMap.channel),lightMapUv:st&&_(v.lightMap.channel),bumpMapUv:it&&_(v.bumpMap.channel),normalMapUv:ot&&_(v.normalMap.channel),displacementMapUv:k&&_(v.displacementMap.channel),emissiveMapUv:F&&_(v.emissiveMap.channel),metalnessMapUv:ft&&_(v.metalnessMap.channel),roughnessMapUv:P&&_(v.roughnessMap.channel),anisotropyMapUv:St&&_(v.anisotropyMap.channel),clearcoatMapUv:Tt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(v.sheenRoughnessMap.channel),specularMapUv:_t&&_(v.specularMap.channel),specularColorMapUv:Lt&&_(v.specularColorMap.channel),specularIntensityMapUv:Wt&&_(v.specularIntensityMap.channel),transmissionMapUv:Y&&_(v.transmissionMap.channel),thicknessMapUv:Et&&_(v.thicknessMap.channel),alphaMapUv:vt&&_(v.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ot||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(rt||vt),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:W,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:rt&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ee,decodeVideoTextureEmissive:F&&v.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(v.emissiveMap.colorSpace)===ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Je,flipSided:v.side===Se,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ht&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&v.extensions.multiDraw===!0||z)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function p(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)M.push(O),M.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(b(M,v),x(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function b(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function x(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){let M=g[v.type],O;if(M){let N=en[M];O=Cd.clone(N.uniforms)}else O=v.uniforms;return O}function D(v,M){let O;for(let N=0,H=h.length;N<H;N++){let q=h[N];if(q.cacheKey===M){O=q,++O.usedTimes;break}}return O===void 0&&(O=new Fg(i,M,v,r),h.push(O)),O}function T(v){if(--v.usedTimes===0){let M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function R(v){l.remove(v)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:w}}function zg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Vg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,d,u,g,_,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,d,u,g,_,m){let p=o(f,d,u,g,_,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function l(f,d,u,g,_,m){let p=o(f,d,u,g,_,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||Vg),n.length>1&&n.sort(d||Yc),s.length>1&&s.sort(d||Yc)}function h(){for(let f=t,d=i.length;f<d;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Hg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Zc,i.set(n,[o])):s>=r.length?(o=new Zc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Yt};break;case"SpotLight":e={position:new V,direction:new V,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function Wg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Xg=0;function qg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yg(i){let t=new Gg,e=Wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new ce,o=new ce;function a(c){let h=0,f=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,b=0,x=0,y=0,D=0,T=0,R=0;c.sort(qg);for(let v=0,M=c.length;v<M;v++){let O=c[v],N=O.color,H=O.intensity,q=O.distance,j=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=N.r*H,f+=N.g*H,d+=N.b*H;else if(O.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(O.sh.coefficients[J],H);R++}else if(O.isDirectionalLight){let J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let nt=O.shadow,G=e.get(O);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=j,n.directionalShadowMatrix[u]=O.shadow.matrix,b++}n.directional[u]=J,u++}else if(O.isSpotLight){let J=t.get(O);J.position.setFromMatrixPosition(O.matrixWorld),J.color.copy(N).multiplyScalar(H),J.distance=q,J.coneCos=Math.cos(O.angle),J.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),J.decay=O.decay,n.spot[_]=J;let nt=O.shadow;if(O.map&&(n.spotLightMap[D]=O.map,D++,nt.updateMatrices(O),O.castShadow&&T++),n.spotLightMatrix[_]=nt.matrix,O.castShadow){let G=e.get(O);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=j,y++}_++}else if(O.isRectAreaLight){let J=t.get(O);J.color.copy(N).multiplyScalar(H),J.halfWidth.set(O.width*.5,0,0),J.halfHeight.set(0,O.height*.5,0),n.rectArea[m]=J,m++}else if(O.isPointLight){let J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),J.distance=O.distance,J.decay=O.decay,O.castShadow){let nt=O.shadow,G=e.get(O);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,G.shadowCameraNear=nt.camera.near,G.shadowCameraFar=nt.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=O.shadow.matrix,x++}n.point[g]=J,g++}else if(O.isHemisphereLight){let J=t.get(O);J.skyColor.copy(O.color).multiplyScalar(H),J.groundColor.copy(O.groundColor).multiplyScalar(H),n.hemi[p]=J,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let w=n.hash;(w.directionalLength!==u||w.pointLength!==g||w.spotLength!==_||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==b||w.numPointShadows!==x||w.numSpotShadows!==y||w.numSpotMaps!==D||w.numLightProbes!==R)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,w.directionalLength=u,w.pointLength=g,w.spotLength=_,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=b,w.numPointShadows=x,w.numSpotShadows=y,w.numSpotMaps=D,w.numLightProbes=R,n.version=Xg++)}function l(c,h){let f=0,d=0,u=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let x=c[p];if(x.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isSpotLight){let y=n.spot[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Jc(i){let t=new Yg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Jc(i),t.set(s,[a])):r>=o.length?(a=new Jc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xa=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`;function Kg(i,t,e){let n=new Ss,s=new ht,r=new ht,o=new ne,a=new Xa({depthPacking:zu}),l=new qa,c={},h=e.maxTextureSize,f={[kn]:Se,[Se]:kn,[Je]:Je},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Jg,fragmentShader:$g}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new we;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh;let p=this.type;this.render=function(T,R,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=i.getRenderTarget(),M=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),N=i.state;N.setBlending(On),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=p!==gn&&this.type===gn,q=p===gn&&this.type!==gn;for(let j=0,J=T.length;j<J;j++){let nt=T[j],G=nt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let yt=G.getFrameExtents();if(s.multiply(yt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/yt.x),s.x=r.x*yt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/yt.y),s.y=r.y*yt.y,G.mapSize.y=r.y)),G.map===null||H===!0||q===!0){let bt=this.type!==gn?{minFilter:Ke,magFilter:Ke}:{};G.map!==null&&G.map.dispose(),G.map=new wn(s.x,s.y,bt),G.map.texture.name=nt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let Mt=G.getViewportCount();for(let bt=0;bt<Mt;bt++){let Dt=G.getViewport(bt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),N.viewport(o),G.updateMatrices(nt,bt),n=G.getFrustum(),y(R,w,G.camera,nt,this.type)}G.isPointLightShadow!==!0&&this.type===gn&&b(G,w),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,M,O)};function b(T,R){let w=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,w,d,_,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,w,u,_,null)}function x(T,R,w,v){let M=null,O=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)M=O;else if(M=w.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let N=M.uuid,H=R.uuid,q=c[N];q===void 0&&(q={},c[N]=q);let j=q[H];j===void 0&&(j=M.clone(),q[H]=j,R.addEventListener("dispose",D)),M=j}if(M.visible=R.visible,M.wireframe=R.wireframe,v===gn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let N=i.properties.get(M);N.light=w}return M}function y(T,R,w,v,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let H=t.update(T),q=T.material;if(Array.isArray(q)){let j=H.groups;for(let J=0,nt=j.length;J<nt;J++){let G=j[J],yt=q[G.materialIndex];if(yt&&yt.visible){let Mt=x(T,yt,v,M);T.onBeforeShadow(i,T,R,w,H,Mt,G),i.renderBufferDirect(w,null,H,Mt,T,G),T.onAfterShadow(i,T,R,w,H,Mt,G)}}}else if(q.visible){let j=x(T,q,v,M);T.onBeforeShadow(i,T,R,w,H,j,null),i.renderBufferDirect(w,null,H,j,T,null),T.onAfterShadow(i,T,R,w,H,j,null)}}let N=T.children;for(let H=0,q=N.length;H<q;H++)y(N[H],R,w,v,M)}function D(T){T.target.removeEventListener("dispose",D);for(let w in c){let v=c[w],M=T.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}var jg={[$o]:Ko,[jo]:ea,[Qo]:na,[Ui]:ta,[Ko]:$o,[ea]:jo,[na]:Qo,[ta]:Ui};function Qg(i,t){function e(){let Y=!1,Et=new ne,mt=null,vt=new ne(0,0,0,0);return{setMask:function(It){mt!==It&&!Y&&(i.colorMask(It,It,It,It),mt=It)},setLocked:function(It){Y=It},setClear:function(It,Rt,Ht,he,xe){xe===!0&&(It*=he,Rt*=he,Ht*=he),Et.set(It,Rt,Ht,he),vt.equals(Et)===!1&&(i.clearColor(It,Rt,Ht,he),vt.copy(Et))},reset:function(){Y=!1,mt=null,vt.set(-1,0,0,0)}}}function n(){let Y=!1,Et=!1,mt=null,vt=null,It=null;return{setReversed:function(Rt){if(Et!==Rt){let Ht=t.get("EXT_clip_control");Et?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);let he=It;It=null,this.setClear(he)}Et=Rt},getReversed:function(){return Et},setTest:function(Rt){Rt?E(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(Rt){mt!==Rt&&!Y&&(i.depthMask(Rt),mt=Rt)},setFunc:function(Rt){if(Et&&(Rt=jg[Rt]),vt!==Rt){switch(Rt){case $o:i.depthFunc(i.NEVER);break;case Ko:i.depthFunc(i.ALWAYS);break;case jo:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case ta:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Rt}},setLocked:function(Rt){Y=Rt},setClear:function(Rt){It!==Rt&&(Et&&(Rt=1-Rt),i.clearDepth(Rt),It=Rt)},reset:function(){Y=!1,mt=null,vt=null,It=null,Et=!1}}}function s(){let Y=!1,Et=null,mt=null,vt=null,It=null,Rt=null,Ht=null,he=null,xe=null;return{setTest:function(te){Y||(te?E(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(te){Et!==te&&!Y&&(i.stencilMask(te),Et=te)},setFunc:function(te,Ge,ln){(mt!==te||vt!==Ge||It!==ln)&&(i.stencilFunc(te,Ge,ln),mt=te,vt=Ge,It=ln)},setOp:function(te,Ge,ln){(Rt!==te||Ht!==Ge||he!==ln)&&(i.stencilOp(te,Ge,ln),Rt=te,Ht=Ge,he=ln)},setLocked:function(te){Y=te},setClear:function(te){xe!==te&&(i.clearStencil(te),xe=te)},reset:function(){Y=!1,Et=null,mt=null,vt=null,It=null,Rt=null,Ht=null,he=null,xe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,u=[],g=null,_=!1,m=null,p=null,b=null,x=null,y=null,D=null,T=null,R=new Yt(0,0,0),w=0,v=!1,M=null,O=null,N=null,H=null,q=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,nt=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=nt>=1):G.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=nt>=2);let yt=null,Mt={},bt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Vt=new ne().fromArray(bt),B=new ne().fromArray(Dt);function U(Y,Et,mt,vt){let It=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(Y,Rt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<mt;Ht++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(Et+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return Rt}let L={};L[i.TEXTURE_2D]=U(i.TEXTURE_2D,i.TEXTURE_2D,1),L[i.TEXTURE_CUBE_MAP]=U(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[i.TEXTURE_2D_ARRAY]=U(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),L[i.TEXTURE_3D]=U(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),E(i.DEPTH_TEST),o.setFunc(Ui),it(!1),ot($l),E(i.CULL_FACE),A(On);function E(Y){h[Y]!==!0&&(i.enable(Y),h[Y]=!0)}function W(Y){h[Y]!==!1&&(i.disable(Y),h[Y]=!1)}function et(Y,Et){return f[Y]!==Et?(i.bindFramebuffer(Y,Et),f[Y]=Et,Y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Et),Y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function z(Y,Et){let mt=u,vt=!1;if(Y){mt=d.get(Et),mt===void 0&&(mt=[],d.set(Et,mt));let It=Y.textures;if(mt.length!==It.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Ht=It.length;Rt<Ht;Rt++)mt[Rt]=i.COLOR_ATTACHMENT0+Rt;mt.length=It.length,vt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(mt)}function rt(Y){return g!==Y?(i.useProgram(Y),g=Y,!0):!1}let Z={[ti]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[pu]:i.FUNC_REVERSE_SUBTRACT};Z[mu]=i.MIN,Z[gu]=i.MAX;let tt={[_u]:i.ZERO,[xu]:i.ONE,[yu]:i.SRC_COLOR,[Zo]:i.SRC_ALPHA,[Tu]:i.SRC_ALPHA_SATURATE,[Su]:i.DST_COLOR,[Mu]:i.DST_ALPHA,[vu]:i.ONE_MINUS_SRC_COLOR,[Jo]:i.ONE_MINUS_SRC_ALPHA,[wu]:i.ONE_MINUS_DST_COLOR,[bu]:i.ONE_MINUS_DST_ALPHA,[Eu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[Cu]:i.CONSTANT_ALPHA,[Ru]:i.ONE_MINUS_CONSTANT_ALPHA};function A(Y,Et,mt,vt,It,Rt,Ht,he,xe,te){if(Y===On){_===!0&&(W(i.BLEND),_=!1);return}if(_===!1&&(E(i.BLEND),_=!0),Y!==du){if(Y!==m||te!==v){if((p!==ti||y!==ti)&&(i.blendEquation(i.FUNC_ADD),p=ti,y=ti),te)switch(Y){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}b=null,x=null,D=null,T=null,R.set(0,0,0),w=0,m=Y,v=te}return}It=It||Et,Rt=Rt||mt,Ht=Ht||vt,(Et!==p||It!==y)&&(i.blendEquationSeparate(Z[Et],Z[It]),p=Et,y=It),(mt!==b||vt!==x||Rt!==D||Ht!==T)&&(i.blendFuncSeparate(tt[mt],tt[vt],tt[Rt],tt[Ht]),b=mt,x=vt,D=Rt,T=Ht),(he.equals(R)===!1||xe!==w)&&(i.blendColor(he.r,he.g,he.b,xe),R.copy(he),w=xe),m=Y,v=!1}function st(Y,Et){Y.side===Je?W(i.CULL_FACE):E(i.CULL_FACE);let mt=Y.side===Se;Et&&(mt=!mt),it(mt),Y.blending===Pi&&Y.transparent===!1?A(On):A(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let vt=Y.stencilWrite;a.setTest(vt),vt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),F(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?E(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(Y){M!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),M=Y)}function ot(Y){Y!==hu?(E(i.CULL_FACE),Y!==O&&(Y===$l?i.cullFace(i.BACK):Y===uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),O=Y}function k(Y){Y!==N&&(J&&i.lineWidth(Y),N=Y)}function F(Y,Et,mt){Y?(E(i.POLYGON_OFFSET_FILL),(H!==Et||q!==mt)&&(i.polygonOffset(Et,mt),H=Et,q=mt)):W(i.POLYGON_OFFSET_FILL)}function ft(Y){Y?E(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function P(Y){Y===void 0&&(Y=i.TEXTURE0+j-1),yt!==Y&&(i.activeTexture(Y),yt=Y)}function S(Y,Et,mt){mt===void 0&&(yt===null?mt=i.TEXTURE0+j-1:mt=yt);let vt=Mt[mt];vt===void 0&&(vt={type:void 0,texture:void 0},Mt[mt]=vt),(vt.type!==Y||vt.texture!==Et)&&(yt!==mt&&(i.activeTexture(mt),yt=mt),i.bindTexture(Y,Et||L[Y]),vt.type=Y,vt.texture=Et)}function Q(){let Y=Mt[yt];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function gt(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function St(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function C(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function X(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xt(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ut(Y){Vt.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Vt.copy(Y))}function pt(Y){B.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),B.copy(Y))}function _t(Y,Et){let mt=c.get(Et);mt===void 0&&(mt=new WeakMap,c.set(Et,mt));let vt=mt.get(Y);vt===void 0&&(vt=i.getUniformBlockIndex(Et,Y.name),mt.set(Y,vt))}function Lt(Y,Et){let vt=c.get(Et).get(Y);l.get(Et)!==vt&&(i.uniformBlockBinding(Et,vt,Y.__bindingPointIndex),l.set(Et,vt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},yt=null,Mt={},f={},d=new WeakMap,u=[],g=null,_=!1,m=null,p=null,b=null,x=null,y=null,D=null,T=null,R=new Yt(0,0,0),w=0,v=!1,M=null,O=null,N=null,H=null,q=null,Vt.set(0,0,i.canvas.width,i.canvas.height),B.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:E,disable:W,bindFramebuffer:et,drawBuffers:z,useProgram:rt,setBlending:A,setMaterial:st,setFlipSided:it,setCullFace:ot,setLineWidth:k,setPolygonOffset:F,setScissorTest:ft,activeTexture:P,bindTexture:S,unbindTexture:Q,compressedTexImage2D:ct,compressedTexImage3D:dt,texImage2D:X,texImage3D:xt,updateUBOMapping:_t,uniformBlockBinding:Lt,texStorage2D:Bt,texStorage3D:C,texSubImage2D:gt,texSubImage3D:At,compressedTexSubImage2D:St,compressedTexSubImage3D:Tt,scissor:ut,viewport:pt,reset:Wt}}function $c(i,t,e,n){let s=t0(n);switch(e){case dh:return i*t;case ph:return i*t;case mh:return i*t*2;case gh:return i*t/s.components*s.byteLength;case vl:return i*t/s.components*s.byteLength;case _h:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case fh:return i*t*3/s.components*s.byteLength;case $e:return i*t*4/s.components*s.byteLength;case bl:return i*t*4/s.components*s.byteLength;case ar:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case la:case ha:return Math.max(i,16)*Math.max(t,8)/4;case aa:case ca:return Math.max(i,8)*Math.max(t,8)/2;case ua:case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ur:case Ca:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xh:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ia:case La:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function t0(i){switch(i){case bn:case ch:return{byteLength:1,components:1};case ys:case hh:case Ps:return{byteLength:2,components:1};case xl:case yl:return{byteLength:2,components:4};case ii:case _l:case yn:return{byteLength:4,components:1};case uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function e0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return u?new OffscreenCanvas(P,S):pr("canvas")}function _(P,S,Q){let ct=1,dt=ft(P);if((dt.width>Q||dt.height>Q)&&(ct=Q/Math.max(dt.width,dt.height)),ct<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let gt=Math.floor(ct*dt.width),At=Math.floor(ct*dt.height);f===void 0&&(f=g(gt,At));let St=S?g(gt,At):f;return St.width=gt,St.height=At,St.getContext("2d").drawImage(P,0,0,gt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+gt+"x"+At+")."),St}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,S,Q,ct,dt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let gt=S;if(S===i.RED&&(Q===i.FLOAT&&(gt=i.R32F),Q===i.HALF_FLOAT&&(gt=i.R16F),Q===i.UNSIGNED_BYTE&&(gt=i.R8)),S===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(gt=i.R8UI),Q===i.UNSIGNED_SHORT&&(gt=i.R16UI),Q===i.UNSIGNED_INT&&(gt=i.R32UI),Q===i.BYTE&&(gt=i.R8I),Q===i.SHORT&&(gt=i.R16I),Q===i.INT&&(gt=i.R32I)),S===i.RG&&(Q===i.FLOAT&&(gt=i.RG32F),Q===i.HALF_FLOAT&&(gt=i.RG16F),Q===i.UNSIGNED_BYTE&&(gt=i.RG8)),S===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(gt=i.RG8UI),Q===i.UNSIGNED_SHORT&&(gt=i.RG16UI),Q===i.UNSIGNED_INT&&(gt=i.RG32UI),Q===i.BYTE&&(gt=i.RG8I),Q===i.SHORT&&(gt=i.RG16I),Q===i.INT&&(gt=i.RG32I)),S===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),Q===i.UNSIGNED_INT&&(gt=i.RGB32UI),Q===i.BYTE&&(gt=i.RGB8I),Q===i.SHORT&&(gt=i.RGB16I),Q===i.INT&&(gt=i.RGB32I)),S===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),Q===i.UNSIGNED_INT&&(gt=i.RGBA32UI),Q===i.BYTE&&(gt=i.RGBA8I),Q===i.SHORT&&(gt=i.RGBA16I),Q===i.INT&&(gt=i.RGBA32I)),S===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),S===i.RGBA){let At=dt?Xr:Jt.getTransfer(ct);Q===i.FLOAT&&(gt=i.RGBA32F),Q===i.HALF_FLOAT&&(gt=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(gt=At===ee?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function y(P,S){let Q;return P?S===null||S===ii||S===Fi?Q=i.DEPTH24_STENCIL8:S===yn?Q=i.DEPTH32F_STENCIL8:S===ys&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ii||S===Fi?Q=i.DEPTH_COMPONENT24:S===yn?Q=i.DEPTH_COMPONENT32F:S===ys&&(Q=i.DEPTH_COMPONENT16),Q}function D(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ke&&P.minFilter!==ze?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){let S=P.target;S.removeEventListener("dispose",T),w(S),S.isVideoTexture&&h.delete(S)}function R(P){let S=P.target;S.removeEventListener("dispose",R),M(S)}function w(P){let S=n.get(P);if(S.__webglInit===void 0)return;let Q=P.source,ct=d.get(Q);if(ct){let dt=ct[S.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&v(P),Object.keys(ct).length===0&&d.delete(Q)}n.remove(P)}function v(P){let S=n.get(P);i.deleteTexture(S.__webglTexture);let Q=P.source,ct=d.get(Q);delete ct[S.__cacheKey],o.memory.textures--}function M(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(S.__webglFramebuffer[ct]))for(let dt=0;dt<S.__webglFramebuffer[ct].length;dt++)i.deleteFramebuffer(S.__webglFramebuffer[ct][dt]);else i.deleteFramebuffer(S.__webglFramebuffer[ct]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ct])}else{if(Array.isArray(S.__webglFramebuffer))for(let ct=0;ct<S.__webglFramebuffer.length;ct++)i.deleteFramebuffer(S.__webglFramebuffer[ct]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ct=0;ct<S.__webglColorRenderbuffer.length;ct++)S.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ct]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let Q=P.textures;for(let ct=0,dt=Q.length;ct<dt;ct++){let gt=n.get(Q[ct]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(Q[ct])}n.remove(P)}let O=0;function N(){O=0}function H(){let P=O;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),O+=1,P}function q(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function j(P,S){let Q=n.get(P);if(P.isVideoTexture&&k(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){let ct=P.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(Q,P,S);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+S)}function J(P,S){let Q=n.get(P);if(P.version>0&&Q.__version!==P.version){B(Q,P,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+S)}function nt(P,S){let Q=n.get(P);if(P.version>0&&Q.__version!==P.version){B(Q,P,S);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+S)}function G(P,S){let Q=n.get(P);if(P.version>0&&Q.__version!==P.version){U(Q,P,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+S)}let yt={[ra]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},Mt={[Ke]:i.NEAREST,[Bu]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[mo]:i.LINEAR_MIPMAP_NEAREST,[xn]:i.LINEAR_MIPMAP_LINEAR},bt={[Hu]:i.NEVER,[Zu]:i.ALWAYS,[Gu]:i.LESS,[vh]:i.LEQUAL,[Wu]:i.EQUAL,[Yu]:i.GEQUAL,[Xu]:i.GREATER,[qu]:i.NOTEQUAL};function Dt(P,S){if(S.type===yn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ze||S.magFilter===mo||S.magFilter===Os||S.magFilter===xn||S.minFilter===ze||S.minFilter===mo||S.minFilter===Os||S.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,yt[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,yt[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,yt[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Mt[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Mt[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,bt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ke||S.minFilter!==Os&&S.minFilter!==xn||S.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Vt(P,S){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",T));let ct=S.source,dt=d.get(ct);dt===void 0&&(dt={},d.set(ct,dt));let gt=q(S);if(gt!==P.__cacheKey){dt[gt]===void 0&&(dt[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),dt[gt].usedTimes++;let At=dt[P.__cacheKey];At!==void 0&&(dt[P.__cacheKey].usedTimes--,At.usedTimes===0&&v(S)),P.__cacheKey=gt,P.__webglTexture=dt[gt].texture}return Q}function B(P,S,Q){let ct=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ct=i.TEXTURE_3D);let dt=Vt(P,S),gt=S.source;e.bindTexture(ct,P.__webglTexture,i.TEXTURE0+Q);let At=n.get(gt);if(gt.version!==At.__version||dt===!0){e.activeTexture(i.TEXTURE0+Q);let St=Jt.getPrimaries(Jt.workingColorSpace),Tt=S.colorSpace===nn?null:Jt.getPrimaries(S.colorSpace),Bt=S.colorSpace===nn||St===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let C=_(S.image,!1,s.maxTextureSize);C=F(S,C);let X=r.convert(S.format,S.colorSpace),xt=r.convert(S.type),ut=x(S.internalFormat,X,xt,S.colorSpace,S.isVideoTexture);Dt(ct,S);let pt,_t=S.mipmaps,Lt=S.isVideoTexture!==!0,Wt=At.__version===void 0||dt===!0,Y=gt.dataReady,Et=D(S,C);if(S.isDepthTexture)ut=y(S.format===Bi,S.type),Wt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,ut,C.width,C.height):e.texImage2D(i.TEXTURE_2D,0,ut,C.width,C.height,0,X,xt,null));else if(S.isDataTexture)if(_t.length>0){Lt&&Wt&&e.texStorage2D(i.TEXTURE_2D,Et,ut,_t[0].width,_t[0].height);for(let mt=0,vt=_t.length;mt<vt;mt++)pt=_t[mt],Lt?Y&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,pt.width,pt.height,X,xt,pt.data):e.texImage2D(i.TEXTURE_2D,mt,ut,pt.width,pt.height,0,X,xt,pt.data);S.generateMipmaps=!1}else Lt?(Wt&&e.texStorage2D(i.TEXTURE_2D,Et,ut,C.width,C.height),Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,X,xt,C.data)):e.texImage2D(i.TEXTURE_2D,0,ut,C.width,C.height,0,X,xt,C.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Lt&&Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,ut,_t[0].width,_t[0].height,C.depth);for(let mt=0,vt=_t.length;mt<vt;mt++)if(pt=_t[mt],S.format!==$e)if(X!==null)if(Lt){if(Y)if(S.layerUpdates.size>0){let It=$c(pt.width,pt.height,S.format,S.type);for(let Rt of S.layerUpdates){let Ht=pt.data.subarray(Rt*It/pt.data.BYTES_PER_ELEMENT,(Rt+1)*It/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Rt,pt.width,pt.height,1,X,Ht)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,pt.width,pt.height,C.depth,X,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,ut,pt.width,pt.height,C.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,pt.width,pt.height,C.depth,X,xt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,ut,pt.width,pt.height,C.depth,0,X,xt,pt.data)}else{Lt&&Wt&&e.texStorage2D(i.TEXTURE_2D,Et,ut,_t[0].width,_t[0].height);for(let mt=0,vt=_t.length;mt<vt;mt++)pt=_t[mt],S.format!==$e?X!==null?Lt?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,pt.width,pt.height,X,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,ut,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?Y&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,pt.width,pt.height,X,xt,pt.data):e.texImage2D(i.TEXTURE_2D,mt,ut,pt.width,pt.height,0,X,xt,pt.data)}else if(S.isDataArrayTexture)if(Lt){if(Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,ut,C.width,C.height,C.depth),Y)if(S.layerUpdates.size>0){let mt=$c(C.width,C.height,S.format,S.type);for(let vt of S.layerUpdates){let It=C.data.subarray(vt*mt/C.data.BYTES_PER_ELEMENT,(vt+1)*mt/C.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,C.width,C.height,1,X,xt,It)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,X,xt,C.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,C.width,C.height,C.depth,0,X,xt,C.data);else if(S.isData3DTexture)Lt?(Wt&&e.texStorage3D(i.TEXTURE_3D,Et,ut,C.width,C.height,C.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,X,xt,C.data)):e.texImage3D(i.TEXTURE_3D,0,ut,C.width,C.height,C.depth,0,X,xt,C.data);else if(S.isFramebufferTexture){if(Wt)if(Lt)e.texStorage2D(i.TEXTURE_2D,Et,ut,C.width,C.height);else{let mt=C.width,vt=C.height;for(let It=0;It<Et;It++)e.texImage2D(i.TEXTURE_2D,It,ut,mt,vt,0,X,xt,null),mt>>=1,vt>>=1}}else if(_t.length>0){if(Lt&&Wt){let mt=ft(_t[0]);e.texStorage2D(i.TEXTURE_2D,Et,ut,mt.width,mt.height)}for(let mt=0,vt=_t.length;mt<vt;mt++)pt=_t[mt],Lt?Y&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,X,xt,pt):e.texImage2D(i.TEXTURE_2D,mt,ut,X,xt,pt);S.generateMipmaps=!1}else if(Lt){if(Wt){let mt=ft(C);e.texStorage2D(i.TEXTURE_2D,Et,ut,mt.width,mt.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,X,xt,C)}else e.texImage2D(i.TEXTURE_2D,0,ut,X,xt,C);m(S)&&p(ct),At.__version=gt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function U(P,S,Q){if(S.image.length!==6)return;let ct=Vt(P,S),dt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Q);let gt=n.get(dt);if(dt.version!==gt.__version||ct===!0){e.activeTexture(i.TEXTURE0+Q);let At=Jt.getPrimaries(Jt.workingColorSpace),St=S.colorSpace===nn?null:Jt.getPrimaries(S.colorSpace),Tt=S.colorSpace===nn||At===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Bt=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,X=[];for(let vt=0;vt<6;vt++)!Bt&&!C?X[vt]=_(S.image[vt],!0,s.maxCubemapSize):X[vt]=C?S.image[vt].image:S.image[vt],X[vt]=F(S,X[vt]);let xt=X[0],ut=r.convert(S.format,S.colorSpace),pt=r.convert(S.type),_t=x(S.internalFormat,ut,pt,S.colorSpace),Lt=S.isVideoTexture!==!0,Wt=gt.__version===void 0||ct===!0,Y=dt.dataReady,Et=D(S,xt);Dt(i.TEXTURE_CUBE_MAP,S);let mt;if(Bt){Lt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,_t,xt.width,xt.height);for(let vt=0;vt<6;vt++){mt=X[vt].mipmaps;for(let It=0;It<mt.length;It++){let Rt=mt[It];S.format!==$e?ut!==null?Lt?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,Rt.width,Rt.height,ut,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,_t,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,Rt.width,Rt.height,ut,pt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,_t,Rt.width,Rt.height,0,ut,pt,Rt.data)}}}else{if(mt=S.mipmaps,Lt&&Wt){mt.length>0&&Et++;let vt=ft(X[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,_t,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(C){Lt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,X[vt].width,X[vt].height,ut,pt,X[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,_t,X[vt].width,X[vt].height,0,ut,pt,X[vt].data);for(let It=0;It<mt.length;It++){let Ht=mt[It].image[vt].image;Lt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,Ht.width,Ht.height,ut,pt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,_t,Ht.width,Ht.height,0,ut,pt,Ht.data)}}else{Lt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ut,pt,X[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,_t,ut,pt,X[vt]);for(let It=0;It<mt.length;It++){let Rt=mt[It];Lt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,ut,pt,Rt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,_t,ut,pt,Rt.image[vt])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),gt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function L(P,S,Q,ct,dt,gt){let At=r.convert(Q.format,Q.colorSpace),St=r.convert(Q.type),Tt=x(Q.internalFormat,At,St,Q.colorSpace),Bt=n.get(S),C=n.get(Q);if(C.__renderTarget=S,!Bt.__hasExternalTextures){let X=Math.max(1,S.width>>gt),xt=Math.max(1,S.height>>gt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,gt,Tt,X,xt,S.depth,0,At,St,null):e.texImage2D(dt,gt,Tt,X,xt,0,At,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,dt,C.__webglTexture,0,it(S)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,dt,C.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function E(P,S,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){let ct=S.depthTexture,dt=ct&&ct.isDepthTexture?ct.type:null,gt=y(S.stencilBuffer,dt),At=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=it(S);ot(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,gt,S.width,S.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,gt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,gt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,P)}else{let ct=S.textures;for(let dt=0;dt<ct.length;dt++){let gt=ct[dt],At=r.convert(gt.format,gt.colorSpace),St=r.convert(gt.type),Tt=x(gt.internalFormat,At,St,gt.colorSpace),Bt=it(S);Q&&ot(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Tt,S.width,S.height):ot(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt,Tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function W(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ct=n.get(S.depthTexture);ct.__renderTarget=S,(!ct.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);let dt=ct.__webglTexture,gt=it(S);if(S.depthTexture.format===Ii)ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(S.depthTexture.format===Bi)ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function et(P){let S=n.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let ct=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ct){let dt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ct.removeEventListener("dispose",dt)};ct.addEventListener("dispose",dt),S.__depthDisposeCallback=dt}S.__boundDepthTexture=ct}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");W(S.__webglFramebuffer,P)}else if(Q){S.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ct]),S.__webglDepthbuffer[ct]===void 0)S.__webglDepthbuffer[ct]=i.createRenderbuffer(),E(S.__webglDepthbuffer[ct],P,!1);else{let dt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=S.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,gt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),E(S.__webglDepthbuffer,P,!1);else{let ct=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function z(P,S,Q){let ct=n.get(P);S!==void 0&&L(ct.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&et(P)}function rt(P){let S=P.texture,Q=n.get(P),ct=n.get(S);P.addEventListener("dispose",R);let dt=P.textures,gt=P.isWebGLCubeRenderTarget===!0,At=dt.length>1;if(At||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=S.version,o.memory.textures++),gt){Q.__webglFramebuffer=[];for(let St=0;St<6;St++)if(S.mipmaps&&S.mipmaps.length>0){Q.__webglFramebuffer[St]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)Q.__webglFramebuffer[St][Tt]=i.createFramebuffer()}else Q.__webglFramebuffer[St]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Q.__webglFramebuffer=[];for(let St=0;St<S.mipmaps.length;St++)Q.__webglFramebuffer[St]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(At)for(let St=0,Tt=dt.length;St<Tt;St++){let Bt=n.get(dt[St]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ot(P)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let St=0;St<dt.length;St++){let Tt=dt[St];Q.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[St]);let Bt=r.convert(Tt.format,Tt.colorSpace),C=r.convert(Tt.type),X=x(Tt.internalFormat,Bt,C,Tt.colorSpace,P.isXRRenderTarget===!0),xt=it(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,X,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Q.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),E(Q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,S);for(let St=0;St<6;St++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)L(Q.__webglFramebuffer[St][Tt],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Tt);else L(Q.__webglFramebuffer[St],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let St=0,Tt=dt.length;St<Tt;St++){let Bt=dt[St],C=n.get(Bt);e.bindTexture(i.TEXTURE_2D,C.__webglTexture),Dt(i.TEXTURE_2D,Bt),L(Q.__webglFramebuffer,P,Bt,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),m(Bt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(St=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,ct.__webglTexture),Dt(St,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)L(Q.__webglFramebuffer[Tt],P,S,i.COLOR_ATTACHMENT0,St,Tt);else L(Q.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,St,0);m(S)&&p(St),e.unbindTexture()}P.depthBuffer&&et(P)}function Z(P){let S=P.textures;for(let Q=0,ct=S.length;Q<ct;Q++){let dt=S[Q];if(m(dt)){let gt=b(P),At=n.get(dt).__webglTexture;e.bindTexture(gt,At),p(gt),e.unbindTexture()}}}let tt=[],A=[];function st(P){if(P.samples>0){if(ot(P)===!1){let S=P.textures,Q=P.width,ct=P.height,dt=i.COLOR_BUFFER_BIT,gt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(P),St=S.length>1;if(St)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),St){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);let Bt=n.get(S[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Bt,0)}i.blitFramebuffer(0,0,Q,ct,0,0,Q,ct,dt,i.NEAREST),l===!0&&(tt.length=0,A.length=0,tt.push(i.COLOR_ATTACHMENT0+Tt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(tt.push(gt),A.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);let Bt=n.get(S[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function it(P){return Math.min(s.maxSamples,P.samples)}function ot(P){let S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function k(P){let S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function F(P,S){let Q=P.colorSpace,ct=P.format,dt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==Ji&&Q!==nn&&(Jt.getTransfer(Q)===ee?(ct!==$e||dt!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),S}function ft(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=nt,this.setTextureCube=G,this.rebindTextures=z,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=L,this.useMultisampledRTT=ot}function n0(i,t){function e(n,s=nn){let r,o=Jt.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return i.BYTE;if(n===hh)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Ps)return i.HALF_FLOAT;if(n===dh)return i.ALPHA;if(n===fh)return i.RGB;if(n===$e)return i.RGBA;if(n===ph)return i.LUMINANCE;if(n===mh)return i.LUMINANCE_ALPHA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===gh)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===_h)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===ar||n===lr||n===cr||n===hr)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===la||n===ca||n===ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ua||n===da)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pa||n===ma||n===ga||n===_a||n===xa||n===ya||n===va||n===Ma||n===ba||n===Sa||n===wa||n===Ta||n===Ea||n===Aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ma)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ga)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_a)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===va)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ma)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ea)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Aa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ur||n===Ca||n===Ra)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ur)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xh||n===Pa||n===Ia||n===La)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ur)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===La)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ya=class extends be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ve=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},i0={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(i0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},s0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r0=`
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

}`,Za=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new rn({vertexShader:s0,fragmentShader:r0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ja=class extends Sn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null,_=new Za,m=e.getContextAttributes(),p=null,b=null,x=[],y=[],D=new ht,T=null,R=new be;R.viewport=new ne;let w=new be;w.viewport=new ne;let v=[R,w],M=new Ya,O=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let U=x[B];return U===void 0&&(U=new gs,x[B]=U),U.getTargetRaySpace()},this.getControllerGrip=function(B){let U=x[B];return U===void 0&&(U=new gs,x[B]=U),U.getGripSpace()},this.getHand=function(B){let U=x[B];return U===void 0&&(U=new gs,x[B]=U),U.getHandSpace()};function H(B){let U=y.indexOf(B.inputSource);if(U===-1)return;let L=x[U];L!==void 0&&(L.update(B.inputSource,B.frame,c||o),L.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",j);for(let B=0;B<x.length;B++){let U=y[B];U!==null&&(y[B]=null,x[B].disconnect(U))}O=null,N=null,_.reset(),t.setRenderTarget(p),u=null,d=null,f=null,s=null,b=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",q),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let U={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,U),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new wn(u.framebufferWidth,u.framebufferHeight,{format:$e,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let U=null,L=null,E=null;m.depth&&(E=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=m.stencil?Bi:Ii,L=m.stencil?Fi:ii);let W={colorFormat:e.RGBA8,depthFormat:E,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(W),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new wn(d.textureWidth,d.textureHeight,{format:$e,type:bn,depthTexture:new Sr(d.textureWidth,d.textureHeight,L,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(B){for(let U=0;U<B.removed.length;U++){let L=B.removed[U],E=y.indexOf(L);E>=0&&(y[E]=null,x[E].disconnect(L))}for(let U=0;U<B.added.length;U++){let L=B.added[U],E=y.indexOf(L);if(E===-1){for(let et=0;et<x.length;et++)if(et>=y.length){y.push(L),E=et;break}else if(y[et]===null){y[et]=L,E=et;break}if(E===-1)break}let W=x[E];W&&W.connect(L)}}let J=new V,nt=new V;function G(B,U,L){J.setFromMatrixPosition(U.matrixWorld),nt.setFromMatrixPosition(L.matrixWorld);let E=J.distanceTo(nt),W=U.projectionMatrix.elements,et=L.projectionMatrix.elements,z=W[14]/(W[10]-1),rt=W[14]/(W[10]+1),Z=(W[9]+1)/W[5],tt=(W[9]-1)/W[5],A=(W[8]-1)/W[0],st=(et[8]+1)/et[0],it=z*A,ot=z*st,k=E/(-A+st),F=k*-A;if(U.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(F),B.translateZ(k),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),W[10]===-1)B.projectionMatrix.copy(U.projectionMatrix),B.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{let ft=z+k,P=rt+k,S=it-F,Q=ot+(E-F),ct=Z*rt/P*ft,dt=tt*rt/P*ft;B.projectionMatrix.makePerspective(S,Q,ct,dt,ft,P),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function yt(B,U){U===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(U.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let U=B.near,L=B.far;_.texture!==null&&(_.depthNear>0&&(U=_.depthNear),_.depthFar>0&&(L=_.depthFar)),M.near=w.near=R.near=U,M.far=w.far=R.far=L,(O!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),O=M.near,N=M.far),R.layers.mask=B.layers.mask|2,w.layers.mask=B.layers.mask|4,M.layers.mask=R.layers.mask|w.layers.mask;let E=B.parent,W=M.cameras;yt(M,E);for(let et=0;et<W.length;et++)yt(W[et],E);W.length===2?G(M,R,w):M.projectionMatrix.copy(R.projectionMatrix),Mt(B,M,E)};function Mt(B,U,L){L===null?B.matrix.copy(U.matrixWorld):(B.matrix.copy(L.matrixWorld),B.matrix.invert(),B.matrix.multiply(U.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(U.projectionMatrix),B.projectionMatrixInverse.copy(U.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=vs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let bt=null;function Dt(B,U){if(h=U.getViewerPose(c||o),g=U,h!==null){let L=h.views;u!==null&&(t.setRenderTargetFramebuffer(b,u.framebuffer),t.setRenderTarget(b));let E=!1;L.length!==M.cameras.length&&(M.cameras.length=0,E=!0);for(let et=0;et<L.length;et++){let z=L[et],rt=null;if(u!==null)rt=u.getViewport(z);else{let tt=f.getViewSubImage(d,z);rt=tt.viewport,et===0&&(t.setRenderTargetTextures(b,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),t.setRenderTarget(b))}let Z=v[et];Z===void 0&&(Z=new be,Z.layers.enable(et),Z.viewport=new ne,v[et]=Z),Z.matrix.fromArray(z.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(z.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(rt.x,rt.y,rt.width,rt.height),et===0&&(M.matrix.copy(Z.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),E===!0&&M.cameras.push(Z)}let W=s.enabledFeatures;if(W&&W.includes("depth-sensing")){let et=f.getDepthInformation(L[0]);et&&et.isValid&&et.texture&&_.init(t,et,s.renderState)}}for(let L=0;L<x.length;L++){let E=y[L],W=x[L];E!==null&&W!==void 0&&W.update(E,U,c||o)}bt&&bt(B,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),g=null}let Vt=new Th;Vt.setAnimationLoop(Dt),this.setAnimationLoop=function(B){bt=B},this.dispose=function(){}}},jn=new sn,o0=new ce;function a0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Se&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Se&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),x=b.envMap,y=b.envMapRotation;x&&(m.envMap.value=x,jn.copy(y),jn.x*=-1,jn.y*=-1,jn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(o0.makeRotationFromEuler(jn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Se&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){let y=x.program;n.uniformBlockBinding(b,y)}function c(b,x){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let D=x.program;n.updateUBOMapping(b,D);let T=t.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){let x=f();b.__bindingPointIndex=x;let y=i.createBuffer(),D=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let x=s[b.id],y=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,R=y.length;T<R;T++){let w=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,M=w.length;v<M;v++){let O=w[v];if(u(O,T,v,D)===!0){let N=O.__offset,H=Array.isArray(O.value)?O.value:[O.value],q=0;for(let j=0;j<H.length;j++){let J=H[j],nt=_(J);typeof J=="number"||typeof J=="boolean"?(O.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,N+q,O.__data)):J.isMatrix3?(O.__data[0]=J.elements[0],O.__data[1]=J.elements[1],O.__data[2]=J.elements[2],O.__data[3]=0,O.__data[4]=J.elements[3],O.__data[5]=J.elements[4],O.__data[6]=J.elements[5],O.__data[7]=0,O.__data[8]=J.elements[6],O.__data[9]=J.elements[7],O.__data[10]=J.elements[8],O.__data[11]=0):(J.toArray(O.__data,q),q+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(b,x,y,D){let T=b.value,R=x+"_"+y;if(D[R]===void 0)return typeof T=="number"||typeof T=="boolean"?D[R]=T:D[R]=T.clone(),!0;{let w=D[R];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return D[R]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function g(b){let x=b.uniforms,y=0,D=16;for(let R=0,w=x.length;R<w;R++){let v=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,O=v.length;M<O;M++){let N=v[M],H=Array.isArray(N.value)?N.value:[N.value];for(let q=0,j=H.length;q<j;q++){let J=H[q],nt=_(J),G=y%D,yt=G%nt.boundary,Mt=G+yt;y+=yt,Mt!==0&&D-Mt<nt.storage&&(y+=D-Mt),N.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=nt.storage}}}let T=y%D;return T>0&&(y+=D-T),b.__size=y,b.__cache={},this}function _(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){let x=b.target;x.removeEventListener("dispose",m);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var wr=class{constructor(t={}){let{canvas:e=ud(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=Fn,this.toneMappingExposure=1;let y=this,D=!1,T=0,R=0,w=null,v=-1,M=null,O=new ne,N=new ne,H=null,q=new Yt(0),j=0,J=e.width,nt=e.height,G=1,yt=null,Mt=null,bt=new ne(0,0,J,nt),Dt=new ne(0,0,J,nt),Vt=!1,B=new Ss,U=!1,L=!1,E=new ce,W=new ce,et=new V,z=new ne,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function tt(){return w===null?G:1}let A=n;function st(I,$){return e.getContext(I,$)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),A===null){let $="webgl2";if(A=st($,I),A===null)throw st($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let it,ot,k,F,ft,P,S,Q,ct,dt,gt,At,St,Tt,Bt,C,X,xt,ut,pt,_t,Lt,Wt,Y;function Et(){it=new wm(A),it.init(),Lt=new n0(A,it),ot=new xm(A,it,t,Lt),k=new Qg(A,it),ot.reverseDepthBuffer&&d&&k.buffers.depth.setReversed(!0),F=new Am(A),ft=new zg,P=new e0(A,it,k,ft,ot,Lt,F),S=new vm(y),Q=new Sm(y),ct=new Dd(A),Wt=new gm(A,ct),dt=new Tm(A,ct,F,Wt),gt=new Rm(A,dt,ct,F),ut=new Cm(A,ot,P),C=new ym(ft),At=new kg(y,S,Q,it,ot,Wt,C),St=new a0(y,ft),Tt=new Hg,Bt=new Zg(it),xt=new mm(y,S,Q,k,gt,u,l),X=new Kg(y,gt,ot),Y=new l0(A,F,ot,k),pt=new _m(A,it,F),_t=new Em(A,it,F),F.programs=At.programs,y.capabilities=ot,y.extensions=it,y.properties=ft,y.renderLists=Tt,y.shadowMap=X,y.state=k,y.info=F}Et();let mt=new Ja(y,A);this.xr=mt,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let I=it.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=it.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(I){I!==void 0&&(G=I,this.setSize(J,nt,!1))},this.getSize=function(I){return I.set(J,nt)},this.setSize=function(I,$,at=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=I,nt=$,e.width=Math.floor(I*G),e.height=Math.floor($*G),at===!0&&(e.style.width=I+"px",e.style.height=$+"px"),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(J*G,nt*G).floor()},this.setDrawingBufferSize=function(I,$,at){J=I,nt=$,G=at,e.width=Math.floor(I*at),e.height=Math.floor($*at),this.setViewport(0,0,I,$)},this.getCurrentViewport=function(I){return I.copy(O)},this.getViewport=function(I){return I.copy(bt)},this.setViewport=function(I,$,at,lt){I.isVector4?bt.set(I.x,I.y,I.z,I.w):bt.set(I,$,at,lt),k.viewport(O.copy(bt).multiplyScalar(G).round())},this.getScissor=function(I){return I.copy(Dt)},this.setScissor=function(I,$,at,lt){I.isVector4?Dt.set(I.x,I.y,I.z,I.w):Dt.set(I,$,at,lt),k.scissor(N.copy(Dt).multiplyScalar(G).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(I){k.setScissorTest(Vt=I)},this.setOpaqueSort=function(I){yt=I},this.setTransparentSort=function(I){Mt=I},this.getClearColor=function(I){return I.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(I=!0,$=!0,at=!0){let lt=0;if(I){let K=!1;if(w!==null){let wt=w.texture.format;K=wt===bl||wt===Ml||wt===vl}if(K){let wt=w.texture.type,Pt=wt===bn||wt===ii||wt===ys||wt===Fi||wt===xl||wt===yl,Ut=xt.getClearColor(),Nt=xt.getClearAlpha(),zt=Ut.r,Gt=Ut.g,Ot=Ut.b;Pt?(g[0]=zt,g[1]=Gt,g[2]=Ot,g[3]=Nt,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=zt,_[1]=Gt,_[2]=Ot,_[3]=Nt,A.clearBufferiv(A.COLOR,0,_))}else lt|=A.COLOR_BUFFER_BIT}$&&(lt|=A.DEPTH_BUFFER_BIT),at&&(lt|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Tt.dispose(),Bt.dispose(),ft.dispose(),S.dispose(),Q.dispose(),gt.dispose(),Wt.dispose(),Y.dispose(),At.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Hl),mt.removeEventListener("sessionend",Gl),qn.stop()};function vt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let I=F.autoReset,$=X.enabled,at=X.autoUpdate,lt=X.needsUpdate,K=X.type;Et(),F.autoReset=I,X.enabled=$,X.autoUpdate=at,X.needsUpdate=lt,X.type=K}function Rt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ht(I){let $=I.target;$.removeEventListener("dispose",Ht),he($)}function he(I){xe(I),ft.remove(I)}function xe(I){let $=ft.get(I).programs;$!==void 0&&($.forEach(function(at){At.releaseProgram(at)}),I.isShaderMaterial&&At.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,at,lt,K,wt){$===null&&($=rt);let Pt=K.isMesh&&K.matrixWorld.determinant()<0,Ut=au(I,$,at,lt,K);k.setMaterial(lt,Pt);let Nt=at.index,zt=1;if(lt.wireframe===!0){if(Nt=dt.getWireframeAttribute(at),Nt===void 0)return;zt=2}let Gt=at.drawRange,Ot=at.attributes.position,$t=Gt.start*zt,se=(Gt.start+Gt.count)*zt;wt!==null&&($t=Math.max($t,wt.start*zt),se=Math.min(se,(wt.start+wt.count)*zt)),Nt!==null?($t=Math.max($t,0),se=Math.min(se,Nt.count)):Ot!=null&&($t=Math.max($t,0),se=Math.min(se,Ot.count));let re=se-$t;if(re<0||re===1/0)return;Wt.setup(K,lt,Ut,at,Nt);let Ae,jt=pt;if(Nt!==null&&(Ae=ct.get(Nt),jt=_t,jt.setIndex(Ae)),K.isMesh)lt.wireframe===!0?(k.setLineWidth(lt.wireframeLinewidth*tt()),jt.setMode(A.LINES)):jt.setMode(A.TRIANGLES);else if(K.isLine){let Ft=lt.linewidth;Ft===void 0&&(Ft=1),k.setLineWidth(Ft*tt()),K.isLineSegments?jt.setMode(A.LINES):K.isLineLoop?jt.setMode(A.LINE_LOOP):jt.setMode(A.LINE_STRIP)}else K.isPoints?jt.setMode(A.POINTS):K.isSprite&&jt.setMode(A.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)jt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))jt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ft=K._multiDrawStarts,cn=K._multiDrawCounts,Qt=K._multiDrawCount,We=Nt?ct.get(Nt).bytesPerElement:1,di=ft.get(lt).currentProgram.getUniforms();for(let Ue=0;Ue<Qt;Ue++)di.setValue(A,"_gl_DrawID",Ue),jt.render(Ft[Ue]/We,cn[Ue])}else if(K.isInstancedMesh)jt.renderInstances($t,re,K.count);else if(at.isInstancedBufferGeometry){let Ft=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,cn=Math.min(at.instanceCount,Ft);jt.renderInstances($t,re,cn)}else jt.render($t,re)};function te(I,$,at){I.transparent===!0&&I.side===Je&&I.forceSinglePass===!1?(I.side=Se,I.needsUpdate=!0,Ns(I,$,at),I.side=kn,I.needsUpdate=!0,Ns(I,$,at),I.side=Je):Ns(I,$,at)}this.compile=function(I,$,at=null){at===null&&(at=I),p=Bt.get(at),p.init($),x.push(p),at.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),I!==at&&I.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();let lt=new Set;return I.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let wt=K.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){let Ut=wt[Pt];te(Ut,at,K),lt.add(Ut)}else te(wt,at,K),lt.add(wt)}),x.pop(),p=null,lt},this.compileAsync=function(I,$,at=null){let lt=this.compile(I,$,at);return new Promise(K=>{function wt(){if(lt.forEach(function(Pt){ft.get(Pt).currentProgram.isReady()&&lt.delete(Pt)}),lt.size===0){K(I);return}setTimeout(wt,10)}it.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ge=null;function ln(I){Ge&&Ge(I)}function Hl(){qn.stop()}function Gl(){qn.start()}let qn=new Th;qn.setAnimationLoop(ln),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(I){Ge=I,mt.setAnimationLoop(I),I===null?qn.stop():qn.start()},mt.addEventListener("sessionstart",Hl),mt.addEventListener("sessionend",Gl),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera($),$=mt.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,$,w),p=Bt.get(I,x.length),p.init($),x.push(p),W.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),B.setFromProjectionMatrix(W),L=this.localClippingEnabled,U=C.init(this.clippingPlanes,L),m=Tt.get(I,b.length),m.init(),b.push(m),mt.enabled===!0&&mt.isPresenting===!0){let wt=y.xr.getDepthSensingMesh();wt!==null&&po(wt,$,-1/0,y.sortObjects)}po(I,$,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(yt,Mt),Z=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,Z&&xt.addToRenderList(m,I),this.info.render.frame++,U===!0&&C.beginShadows();let at=p.state.shadowsArray;X.render(at,I,$),U===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset();let lt=m.opaque,K=m.transmissive;if(p.setupLights(),$.isArrayCamera){let wt=$.cameras;if(K.length>0)for(let Pt=0,Ut=wt.length;Pt<Ut;Pt++){let Nt=wt[Pt];Xl(lt,K,I,Nt)}Z&&xt.render(I);for(let Pt=0,Ut=wt.length;Pt<Ut;Pt++){let Nt=wt[Pt];Wl(m,I,Nt,Nt.viewport)}}else K.length>0&&Xl(lt,K,I,$),Z&&xt.render(I),Wl(m,I,$);w!==null&&(P.updateMultisampleRenderTarget(w),P.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(y,I,$),Wt.resetDefaultState(),v=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],U===!0&&C.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function po(I,$,at,lt){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)at=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||B.intersectsSprite(I)){lt&&z.setFromMatrixPosition(I.matrixWorld).applyMatrix4(W);let Pt=gt.update(I),Ut=I.material;Ut.visible&&m.push(I,Pt,Ut,at,z.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||B.intersectsObject(I))){let Pt=gt.update(I),Ut=I.material;if(lt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),z.copy(I.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),z.copy(Pt.boundingSphere.center)),z.applyMatrix4(I.matrixWorld).applyMatrix4(W)),Array.isArray(Ut)){let Nt=Pt.groups;for(let zt=0,Gt=Nt.length;zt<Gt;zt++){let Ot=Nt[zt],$t=Ut[Ot.materialIndex];$t&&$t.visible&&m.push(I,Pt,$t,at,z.z,Ot)}}else Ut.visible&&m.push(I,Pt,Ut,at,z.z,null)}}let wt=I.children;for(let Pt=0,Ut=wt.length;Pt<Ut;Pt++)po(wt[Pt],$,at,lt)}function Wl(I,$,at,lt){let K=I.opaque,wt=I.transmissive,Pt=I.transparent;p.setupLightsView(at),U===!0&&C.setGlobalState(y.clippingPlanes,at),lt&&k.viewport(O.copy(lt)),K.length>0&&Us(K,$,at),wt.length>0&&Us(wt,$,at),Pt.length>0&&Us(Pt,$,at),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Xl(I,$,at,lt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[lt.id]===void 0&&(p.state.transmissionRenderTarget[lt.id]=new wn(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ps:bn,minFilter:xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let wt=p.state.transmissionRenderTarget[lt.id],Pt=lt.viewport||O;wt.setSize(Pt.z,Pt.w);let Ut=y.getRenderTarget();y.setRenderTarget(wt),y.getClearColor(q),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),Z&&xt.render(at);let Nt=y.toneMapping;y.toneMapping=Fn;let zt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),p.setupLightsView(lt),U===!0&&C.setGlobalState(y.clippingPlanes,lt),Us(I,at,lt),P.updateMultisampleRenderTarget(wt),P.updateRenderTargetMipmap(wt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ot=0,$t=$.length;Ot<$t;Ot++){let se=$[Ot],re=se.object,Ae=se.geometry,jt=se.material,Ft=se.group;if(jt.side===Je&&re.layers.test(lt.layers)){let cn=jt.side;jt.side=Se,jt.needsUpdate=!0,ql(re,at,lt,Ae,jt,Ft),jt.side=cn,jt.needsUpdate=!0,Gt=!0}}Gt===!0&&(P.updateMultisampleRenderTarget(wt),P.updateRenderTargetMipmap(wt))}y.setRenderTarget(Ut),y.setClearColor(q,j),zt!==void 0&&(lt.viewport=zt),y.toneMapping=Nt}function Us(I,$,at){let lt=$.isScene===!0?$.overrideMaterial:null;for(let K=0,wt=I.length;K<wt;K++){let Pt=I[K],Ut=Pt.object,Nt=Pt.geometry,zt=lt===null?Pt.material:lt,Gt=Pt.group;Ut.layers.test(at.layers)&&ql(Ut,$,at,Nt,zt,Gt)}}function ql(I,$,at,lt,K,wt){I.onBeforeRender(y,$,at,lt,K,wt),I.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),K.onBeforeRender(y,$,at,lt,I,wt),K.transparent===!0&&K.side===Je&&K.forceSinglePass===!1?(K.side=Se,K.needsUpdate=!0,y.renderBufferDirect(at,$,lt,K,I,wt),K.side=kn,K.needsUpdate=!0,y.renderBufferDirect(at,$,lt,K,I,wt),K.side=Je):y.renderBufferDirect(at,$,lt,K,I,wt),I.onAfterRender(y,$,at,lt,K,wt)}function Ns(I,$,at){$.isScene!==!0&&($=rt);let lt=ft.get(I),K=p.state.lights,wt=p.state.shadowsArray,Pt=K.state.version,Ut=At.getParameters(I,K.state,wt,$,at),Nt=At.getProgramCacheKey(Ut),zt=lt.programs;lt.environment=I.isMeshStandardMaterial?$.environment:null,lt.fog=$.fog,lt.envMap=(I.isMeshStandardMaterial?Q:S).get(I.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&I.envMap===null?$.environmentRotation:I.envMapRotation,zt===void 0&&(I.addEventListener("dispose",Ht),zt=new Map,lt.programs=zt);let Gt=zt.get(Nt);if(Gt!==void 0){if(lt.currentProgram===Gt&&lt.lightsStateVersion===Pt)return Zl(I,Ut),Gt}else Ut.uniforms=At.getUniforms(I),I.onBeforeCompile(Ut,y),Gt=At.acquireProgram(Ut,Nt),zt.set(Nt,Gt),lt.uniforms=Ut.uniforms;let Ot=lt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ot.clippingPlanes=C.uniform),Zl(I,Ut),lt.needsLights=cu(I),lt.lightsStateVersion=Pt,lt.needsLights&&(Ot.ambientLightColor.value=K.state.ambient,Ot.lightProbe.value=K.state.probe,Ot.directionalLights.value=K.state.directional,Ot.directionalLightShadows.value=K.state.directionalShadow,Ot.spotLights.value=K.state.spot,Ot.spotLightShadows.value=K.state.spotShadow,Ot.rectAreaLights.value=K.state.rectArea,Ot.ltc_1.value=K.state.rectAreaLTC1,Ot.ltc_2.value=K.state.rectAreaLTC2,Ot.pointLights.value=K.state.point,Ot.pointLightShadows.value=K.state.pointShadow,Ot.hemisphereLights.value=K.state.hemi,Ot.directionalShadowMap.value=K.state.directionalShadowMap,Ot.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ot.spotShadowMap.value=K.state.spotShadowMap,Ot.spotLightMatrix.value=K.state.spotLightMatrix,Ot.spotLightMap.value=K.state.spotLightMap,Ot.pointShadowMap.value=K.state.pointShadowMap,Ot.pointShadowMatrix.value=K.state.pointShadowMatrix),lt.currentProgram=Gt,lt.uniformsList=null,Gt}function Yl(I){if(I.uniformsList===null){let $=I.currentProgram.getUniforms();I.uniformsList=Di.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function Zl(I,$){let at=ft.get(I);at.outputColorSpace=$.outputColorSpace,at.batching=$.batching,at.batchingColor=$.batchingColor,at.instancing=$.instancing,at.instancingColor=$.instancingColor,at.instancingMorph=$.instancingMorph,at.skinning=$.skinning,at.morphTargets=$.morphTargets,at.morphNormals=$.morphNormals,at.morphColors=$.morphColors,at.morphTargetsCount=$.morphTargetsCount,at.numClippingPlanes=$.numClippingPlanes,at.numIntersection=$.numClipIntersection,at.vertexAlphas=$.vertexAlphas,at.vertexTangents=$.vertexTangents,at.toneMapping=$.toneMapping}function au(I,$,at,lt,K){$.isScene!==!0&&($=rt),P.resetTextureUnits();let wt=$.fog,Pt=lt.isMeshStandardMaterial?$.environment:null,Ut=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ji,Nt=(lt.isMeshStandardMaterial?Q:S).get(lt.envMap||Pt),zt=lt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Gt=!!at.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Ot=!!at.morphAttributes.position,$t=!!at.morphAttributes.normal,se=!!at.morphAttributes.color,re=Fn;lt.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(re=y.toneMapping);let Ae=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,jt=Ae!==void 0?Ae.length:0,Ft=ft.get(lt),cn=p.state.lights;if(U===!0&&(L===!0||I!==M)){let Be=I===M&&lt.id===v;C.setState(lt,I,Be)}let Qt=!1;lt.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==cn.state.version||Ft.outputColorSpace!==Ut||K.isBatchedMesh&&Ft.batching===!1||!K.isBatchedMesh&&Ft.batching===!0||K.isBatchedMesh&&Ft.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ft.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ft.instancing===!1||!K.isInstancedMesh&&Ft.instancing===!0||K.isSkinnedMesh&&Ft.skinning===!1||!K.isSkinnedMesh&&Ft.skinning===!0||K.isInstancedMesh&&Ft.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ft.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ft.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ft.instancingMorph===!1&&K.morphTexture!==null||Ft.envMap!==Nt||lt.fog===!0&&Ft.fog!==wt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==C.numPlanes||Ft.numIntersection!==C.numIntersection)||Ft.vertexAlphas!==zt||Ft.vertexTangents!==Gt||Ft.morphTargets!==Ot||Ft.morphNormals!==$t||Ft.morphColors!==se||Ft.toneMapping!==re||Ft.morphTargetsCount!==jt)&&(Qt=!0):(Qt=!0,Ft.__version=lt.version);let We=Ft.currentProgram;Qt===!0&&(We=Ns(lt,$,K));let di=!1,Ue=!1,rs=!1,oe=We.getUniforms(),tn=Ft.uniforms;if(k.useProgram(We.program)&&(di=!0,Ue=!0,rs=!0),lt.id!==v&&(v=lt.id,Ue=!0),di||M!==I){k.buffers.depth.getReversed()?(E.copy(I.projectionMatrix),fd(E),pd(E),oe.setValue(A,"projectionMatrix",E)):oe.setValue(A,"projectionMatrix",I.projectionMatrix),oe.setValue(A,"viewMatrix",I.matrixWorldInverse);let Cn=oe.map.cameraPosition;Cn!==void 0&&Cn.setValue(A,et.setFromMatrixPosition(I.matrixWorld)),ot.logarithmicDepthBuffer&&oe.setValue(A,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&oe.setValue(A,"isOrthographic",I.isOrthographicCamera===!0),M!==I&&(M=I,Ue=!0,rs=!0)}if(K.isSkinnedMesh){oe.setOptional(A,K,"bindMatrix"),oe.setOptional(A,K,"bindMatrixInverse");let Be=K.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),oe.setValue(A,"boneTexture",Be.boneTexture,P))}K.isBatchedMesh&&(oe.setOptional(A,K,"batchingTexture"),oe.setValue(A,"batchingTexture",K._matricesTexture,P),oe.setOptional(A,K,"batchingIdTexture"),oe.setValue(A,"batchingIdTexture",K._indirectTexture,P),oe.setOptional(A,K,"batchingColorTexture"),K._colorsTexture!==null&&oe.setValue(A,"batchingColorTexture",K._colorsTexture,P));let os=at.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&ut.update(K,at,We),(Ue||Ft.receiveShadow!==K.receiveShadow)&&(Ft.receiveShadow=K.receiveShadow,oe.setValue(A,"receiveShadow",K.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(tn.envMap.value=Nt,tn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&$.environment!==null&&(tn.envMapIntensity.value=$.environmentIntensity),Ue&&(oe.setValue(A,"toneMappingExposure",y.toneMappingExposure),Ft.needsLights&&lu(tn,rs),wt&&lt.fog===!0&&St.refreshFogUniforms(tn,wt),St.refreshMaterialUniforms(tn,lt,G,nt,p.state.transmissionRenderTarget[I.id]),Di.upload(A,Yl(Ft),tn,P)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Di.upload(A,Yl(Ft),tn,P),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&oe.setValue(A,"center",K.center),oe.setValue(A,"modelViewMatrix",K.modelViewMatrix),oe.setValue(A,"normalMatrix",K.normalMatrix),oe.setValue(A,"modelMatrix",K.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){let Be=lt.uniformsGroups;for(let Cn=0,Rn=Be.length;Cn<Rn;Cn++){let Jl=Be[Cn];Y.update(Jl,We),Y.bind(Jl,We)}}return We}function lu(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function cu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,$,at){ft.get(I.texture).__webglTexture=$,ft.get(I.depthTexture).__webglTexture=at;let lt=ft.get(I);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=at===void 0,lt.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,$){let at=ft.get(I);at.__webglFramebuffer=$,at.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(I,$=0,at=0){w=I,T=$,R=at;let lt=!0,K=null,wt=!1,Pt=!1;if(I){let Nt=ft.get(I);if(Nt.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(A.FRAMEBUFFER,null),lt=!1;else if(Nt.__webglFramebuffer===void 0)P.setupRenderTarget(I);else if(Nt.__hasExternalTextures)P.rebindTextures(I,ft.get(I.texture).__webglTexture,ft.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ot=I.depthTexture;if(Nt.__boundDepthTexture!==Ot){if(Ot!==null&&ft.has(Ot)&&(I.width!==Ot.image.width||I.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(I)}}let zt=I.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Pt=!0);let Gt=ft.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Gt[$])?K=Gt[$][at]:K=Gt[$],wt=!0):I.samples>0&&P.useMultisampledRTT(I)===!1?K=ft.get(I).__webglMultisampledFramebuffer:Array.isArray(Gt)?K=Gt[at]:K=Gt,O.copy(I.viewport),N.copy(I.scissor),H=I.scissorTest}else O.copy(bt).multiplyScalar(G).floor(),N.copy(Dt).multiplyScalar(G).floor(),H=Vt;if(k.bindFramebuffer(A.FRAMEBUFFER,K)&&lt&&k.drawBuffers(I,K),k.viewport(O),k.scissor(N),k.setScissorTest(H),wt){let Nt=ft.get(I.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+$,Nt.__webglTexture,at)}else if(Pt){let Nt=ft.get(I.texture),zt=$||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Nt.__webglTexture,at||0,zt)}v=-1},this.readRenderTargetPixels=function(I,$,at,lt,K,wt,Pt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=ft.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut){k.bindFramebuffer(A.FRAMEBUFFER,Ut);try{let Nt=I.texture,zt=Nt.format,Gt=Nt.type;if(!ot.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-lt&&at>=0&&at<=I.height-K&&A.readPixels($,at,lt,K,Lt.convert(zt),Lt.convert(Gt),wt)}finally{let Nt=w!==null?ft.get(w).__webglFramebuffer:null;k.bindFramebuffer(A.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(I,$,at,lt,K,wt,Pt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=ft.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut){let Nt=I.texture,zt=Nt.format,Gt=Nt.type;if(!ot.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=I.width-lt&&at>=0&&at<=I.height-K){k.bindFramebuffer(A.FRAMEBUFFER,Ut);let Ot=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ot),A.bufferData(A.PIXEL_PACK_BUFFER,wt.byteLength,A.STREAM_READ),A.readPixels($,at,lt,K,Lt.convert(zt),Lt.convert(Gt),0);let $t=w!==null?ft.get(w).__webglFramebuffer:null;k.bindFramebuffer(A.FRAMEBUFFER,$t);let se=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await dd(A,se,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ot),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,wt),A.deleteBuffer(Ot),A.deleteSync(se),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,$=null,at=0){I.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,I=arguments[1]);let lt=Math.pow(2,-at),K=Math.floor(I.image.width*lt),wt=Math.floor(I.image.height*lt),Pt=$!==null?$.x:0,Ut=$!==null?$.y:0;P.setTexture2D(I,0),A.copyTexSubImage2D(A.TEXTURE_2D,at,0,0,Pt,Ut,K,wt),k.unbindTexture()},this.copyTextureToTexture=function(I,$,at=null,lt=null,K=0){I.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,I=arguments[1],$=arguments[2],K=arguments[3]||0,at=null);let wt,Pt,Ut,Nt,zt,Gt,Ot,$t,se,re=I.isCompressedTexture?I.mipmaps[K]:I.image;at!==null?(wt=at.max.x-at.min.x,Pt=at.max.y-at.min.y,Ut=at.isBox3?at.max.z-at.min.z:1,Nt=at.min.x,zt=at.min.y,Gt=at.isBox3?at.min.z:0):(wt=re.width,Pt=re.height,Ut=re.depth||1,Nt=0,zt=0,Gt=0),lt!==null?(Ot=lt.x,$t=lt.y,se=lt.z):(Ot=0,$t=0,se=0);let Ae=Lt.convert($.format),jt=Lt.convert($.type),Ft;$.isData3DTexture?(P.setTexture3D($,0),Ft=A.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(P.setTexture2DArray($,0),Ft=A.TEXTURE_2D_ARRAY):(P.setTexture2D($,0),Ft=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,$.unpackAlignment);let cn=A.getParameter(A.UNPACK_ROW_LENGTH),Qt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),We=A.getParameter(A.UNPACK_SKIP_PIXELS),di=A.getParameter(A.UNPACK_SKIP_ROWS),Ue=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,re.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,re.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Nt),A.pixelStorei(A.UNPACK_SKIP_ROWS,zt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Gt);let rs=I.isDataArrayTexture||I.isData3DTexture,oe=$.isDataArrayTexture||$.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let tn=ft.get(I),os=ft.get($),Be=ft.get(tn.__renderTarget),Cn=ft.get(os.__renderTarget);k.bindFramebuffer(A.READ_FRAMEBUFFER,Be.__webglFramebuffer),k.bindFramebuffer(A.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Rn=0;Rn<Ut;Rn++)rs&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ft.get(I).__webglTexture,K,Gt+Rn),I.isDepthTexture?(oe&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ft.get($).__webglTexture,K,se+Rn),A.blitFramebuffer(Nt,zt,wt,Pt,Ot,$t,wt,Pt,A.DEPTH_BUFFER_BIT,A.NEAREST)):oe?A.copyTexSubImage3D(Ft,K,Ot,$t,se+Rn,Nt,zt,wt,Pt):A.copyTexSubImage2D(Ft,K,Ot,$t,se+Rn,Nt,zt,wt,Pt);k.bindFramebuffer(A.READ_FRAMEBUFFER,null),k.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else oe?I.isDataTexture||I.isData3DTexture?A.texSubImage3D(Ft,K,Ot,$t,se,wt,Pt,Ut,Ae,jt,re.data):$.isCompressedArrayTexture?A.compressedTexSubImage3D(Ft,K,Ot,$t,se,wt,Pt,Ut,Ae,re.data):A.texSubImage3D(Ft,K,Ot,$t,se,wt,Pt,Ut,Ae,jt,re):I.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,K,Ot,$t,wt,Pt,Ae,jt,re.data):I.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,K,Ot,$t,re.width,re.height,Ae,re.data):A.texSubImage2D(A.TEXTURE_2D,K,Ot,$t,wt,Pt,Ae,jt,re);A.pixelStorei(A.UNPACK_ROW_LENGTH,cn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Qt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,We),A.pixelStorei(A.UNPACK_SKIP_ROWS,di),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ue),K===0&&$.generateMipmaps&&A.generateMipmap(Ft),k.unbindTexture()},this.copyTextureToTexture3D=function(I,$,at=null,lt=null,K=0){return I.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,lt=arguments[1]||null,I=arguments[2],$=arguments[3],K=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,$,at,lt,K)},this.initRenderTarget=function(I){ft.get(I).__webglFramebuffer===void 0&&P.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?P.setTextureCube(I,0):I.isData3DTexture?P.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?P.setTexture2DArray(I,0):P.setTexture2D(I,0),k.unbindTexture()},this.resetState=function(){T=0,R=0,w=null,k.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var Gi=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Tr=class extends Fe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},He=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new V,s=[],r=[],o=[],a=new V,l=new ce;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(fe(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(fe(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ws=class extends He{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$a=class extends ws{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Tl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ir=new V,Go=new Tl,Wo=new Tl,Xo=new Tl,Ts=class extends He{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new V){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ir.subVectors(s[0],s[1]).add(s[0]),c=ir);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ir),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Go.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,_,m),Wo.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,_,m),Xo.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Go.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Wo.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Xo.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Go.calc(l),Wo.calc(l),Xo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kc(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function c0(i,t){let e=1-i;return e*e*t}function h0(i,t){return 2*(1-i)*i*t}function u0(i,t){return i*i*t}function _s(i,t,e,n){return c0(i,t)+h0(i,e)+u0(i,n)}function d0(i,t){let e=1-i;return e*e*e*t}function f0(i,t){let e=1-i;return 3*e*e*i*t}function p0(i,t){return 3*(1-i)*i*i*t}function m0(i,t){return i*i*i*t}function xs(i,t,e,n,s){return d0(i,t)+f0(i,e)+p0(i,n)+m0(i,s)}var Er=class extends He{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xs(t,s.x,r.x,o.x,a.x),xs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ka=class extends He{constructor(t=new V,e=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xs(t,s.x,r.x,o.x,a.x),xs(t,s.y,r.y,o.y,a.y),xs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ar=class extends He{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends He{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends He{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,s.x,r.x,o.x),_s(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends He{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,s.x,r.x,o.x),_s(t,s.y,r.y,o.y),_s(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},An=class extends He{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Kc(a,l.x,c.x,h.x,f.x),Kc(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},Pr=Object.freeze({__proto__:null,ArcCurve:$a,CatmullRomCurve3:Ts,CubicBezierCurve:Er,CubicBezierCurve3:Ka,EllipseCurve:ws,LineCurve:Ar,LineCurve3:ja,QuadraticBezierCurve:Cr,QuadraticBezierCurve3:Rr,SplineCurve:An}),Qa=class extends He{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pr[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Pr[s.type]().fromJSON(s))}return this}},Pe=class extends Qa{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ar(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Cr(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Er(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new An(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new ws(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ir=class i extends we{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=fe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new V,d=new ht,u=new V,g=new V,_=new V,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,u.x=p*1,u.y=-m,u.z=p*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(g)}for(let b=0;b<=e;b++){let x=n+b*h*s,y=Math.sin(x),D=Math.cos(x);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*y,f.y=t[T].y,f.z=t[T].x*D,o.push(f.x,f.y,f.z),d.x=b/e,d.y=T/(t.length-1),a.push(d.x,d.y);let R=l[3*T+0]*y,w=l[3*T+1],v=l[3*T+0]*D;c.push(R,w,v)}}for(let b=0;b<e;b++)for(let x=0;x<t.length-1;x++){let y=x+b*t.length,D=y,T=y+t.length,R=y+t.length+1,w=y+1;r.push(D,T,w),r.push(R,w,T)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Wi=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],g=0,_=[],m=n/2,p=0;b(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Kt(f,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(u,2));function b(){let y=new V,D=new V,T=0,R=(e-t)/n;for(let w=0;w<=r;w++){let v=[],M=w/r,O=M*(e-t)+t;for(let N=0;N<=s;N++){let H=N/s,q=H*l+a,j=Math.sin(q),J=Math.cos(q);D.x=O*j,D.y=-M*n+m,D.z=O*J,f.push(D.x,D.y,D.z),y.set(j,R,J).normalize(),d.push(y.x,y.y,y.z),u.push(H,1-M),v.push(g++)}_.push(v)}for(let w=0;w<s;w++)for(let v=0;v<r;v++){let M=_[v][w],O=_[v+1][w],N=_[v+1][w+1],H=_[v][w+1];(t>0||v!==0)&&(h.push(M,O,H),T+=3),(e>0||v!==r-1)&&(h.push(O,N,H),T+=3)}c.addGroup(p,T,0),p+=T}function x(y){let D=g,T=new ht,R=new V,w=0,v=y===!0?t:e,M=y===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,m*M,0),d.push(0,M,0),u.push(.5,.5),g++;let O=g;for(let N=0;N<=s;N++){let q=N/s*l+a,j=Math.cos(q),J=Math.sin(q);R.x=v*J,R.y=m*M,R.z=v*j,f.push(R.x,R.y,R.z),d.push(0,M,0),T.x=j*.5+.5,T.y=J*.5*M+.5,u.push(T.x,T.y),g++}for(let N=0;N<s;N++){let H=D+N,q=O+N;y===!0?h.push(q,q+1,H):h.push(q+1,q,H),w+=3}c.addGroup(p,w,y===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ue=class extends Pe{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Pe().fromJSON(s))}return this}},g0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ph(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,d,u;if(n&&(r=M0(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)f=i[g],d=i[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return Es(r,o,e,a,l,u,0),o}};function Ph(i,t,e,n,s){let r,o;if(s===L0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=jc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=jc(r,i[r],i[r+1],o);return o&&Yr(o,o.next)&&(Cs(o),o=o.next),o}function si(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yr(e,e.next)||le(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Es(i,t,e,n,s,r,o){if(!i)return;!o&&r&&E0(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?x0(i,n,s,r):_0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Cs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=y0(si(i),t,e),Es(i,t,e,n,s,r,2)):o===2&&v0(i,t,e,n,s,r):Es(si(i),t,e,n,s,r,1);break}}}function _0(i){let t=i.prev,e=i,n=i.next;if(le(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,u=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&Ri(s,a,r,l,o,c,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function x0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(le(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,d=o.y,u=a<l?a<c?a:c:l<c?l:c,g=h<f?h<d?h:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,m=h>f?h>d?h:d:f>d?f:d,p=tl(u,g,t,e,n),b=tl(_,m,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=p&&y&&y.z<=b;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ri(a,h,l,f,c,d,x.x,x.y)&&le(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=u&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ri(a,h,l,f,c,d,y.x,y.y)&&le(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ri(a,h,l,f,c,d,x.x,x.y)&&le(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=b;){if(y.x>=u&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ri(a,h,l,f,c,d,y.x,y.y)&&le(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function y0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Yr(s,r)&&Ih(s,n,n.next,r)&&As(s,r)&&As(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Cs(n),Cs(n.next),n=i=r),n=n.next}while(n!==i);return si(n)}function v0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&R0(o,a)){let l=Lh(o,a);o=si(o,o.next),l=si(l,l.next),Es(o,t,e,n,s,r,0),Es(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function M0(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ph(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(C0(c));for(s.sort(b0),r=0;r<s.length;r++)e=S0(s[r],e);return e}function b0(i,t){return i.x-t.x}function S0(i,t){let e=w0(i,t);if(!e)return t;let n=Lh(e,i);return si(n,n.next),si(e,e.next)}function w0(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ri(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),As(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&T0(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function T0(i,t){return le(i.prev,i,t.prev)<0&&le(t.next,i,i.next)<0}function E0(i,t,e,n){let s=i;do s.z===0&&(s.z=tl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,A0(s)}function A0(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function tl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function C0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ri(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function R0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!P0(i,t)&&(As(i,t)&&As(t,i)&&I0(i,t)&&(le(i.prev,i,t.prev)||le(i,t.prev,t))||Yr(i,t)&&le(i.prev,i,i.next)>0&&le(t.prev,t,t.next)>0)}function le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yr(i,t){return i.x===t.x&&i.y===t.y}function Ih(i,t,e,n){let s=rr(le(i,t,e)),r=rr(le(i,t,n)),o=rr(le(e,n,i)),a=rr(le(e,n,t));return!!(s!==r&&o!==a||s===0&&sr(i,e,t)||r===0&&sr(i,n,t)||o===0&&sr(e,i,n)||a===0&&sr(e,t,n))}function sr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function rr(i){return i>0?1:i<0?-1:0}function P0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ih(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function As(i,t){return le(i.prev,i,i.next)<0?le(i,t,i.next)>=0&&le(i,i.prev,t)>=0:le(i,t,i.prev)<0||le(i,i.next,t)<0}function I0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lh(i,t){let e=new el(i.i,i.x,i.y),n=new el(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function jc(i,t,e,n){let s=new el(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function el(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function L0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Bn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Qc(t),th(n,t);let o=t.length;e.forEach(Qc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,th(n,e[l]);let a=g0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Qc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function th(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Lr=class i extends we{constructor(t=new ue([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:D0,x,y=!1,D,T,R,w;p&&(x=p.getSpacedPoints(h),y=!0,d=!1,D=p.computeFrenetFrames(h,!1),T=new V,R=new V,w=new V),d||(m=0,u=0,g=0,_=0);let v=a.extractPoints(c),M=v.shape,O=v.holes;if(!Bn.isClockWise(M)){M=M.reverse();for(let Z=0,tt=O.length;Z<tt;Z++){let A=O[Z];Bn.isClockWise(A)&&(O[Z]=A.reverse())}}let H=Bn.triangulateShape(M,O),q=M;for(let Z=0,tt=O.length;Z<tt;Z++){let A=O[Z];M=M.concat(A)}function j(Z,tt,A){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(tt,A)}let J=M.length,nt=H.length;function G(Z,tt,A){let st,it,ot,k=Z.x-tt.x,F=Z.y-tt.y,ft=A.x-Z.x,P=A.y-Z.y,S=k*k+F*F,Q=k*P-F*ft;if(Math.abs(Q)>Number.EPSILON){let ct=Math.sqrt(S),dt=Math.sqrt(ft*ft+P*P),gt=tt.x-F/ct,At=tt.y+k/ct,St=A.x-P/dt,Tt=A.y+ft/dt,Bt=((St-gt)*P-(Tt-At)*ft)/(k*P-F*ft);st=gt+k*Bt-Z.x,it=At+F*Bt-Z.y;let C=st*st+it*it;if(C<=2)return new ht(st,it);ot=Math.sqrt(C/2)}else{let ct=!1;k>Number.EPSILON?ft>Number.EPSILON&&(ct=!0):k<-Number.EPSILON?ft<-Number.EPSILON&&(ct=!0):Math.sign(F)===Math.sign(P)&&(ct=!0),ct?(st=-F,it=k,ot=Math.sqrt(S)):(st=k,it=F,ot=Math.sqrt(S/2))}return new ht(st/ot,it/ot)}let yt=[];for(let Z=0,tt=q.length,A=tt-1,st=Z+1;Z<tt;Z++,A++,st++)A===tt&&(A=0),st===tt&&(st=0),yt[Z]=G(q[Z],q[A],q[st]);let Mt=[],bt,Dt=yt.concat();for(let Z=0,tt=O.length;Z<tt;Z++){let A=O[Z];bt=[];for(let st=0,it=A.length,ot=it-1,k=st+1;st<it;st++,ot++,k++)ot===it&&(ot=0),k===it&&(k=0),bt[st]=G(A[st],A[ot],A[k]);Mt.push(bt),Dt=Dt.concat(bt)}for(let Z=0;Z<m;Z++){let tt=Z/m,A=u*Math.cos(tt*Math.PI/2),st=g*Math.sin(tt*Math.PI/2)+_;for(let it=0,ot=q.length;it<ot;it++){let k=j(q[it],yt[it],st);E(k.x,k.y,-A)}for(let it=0,ot=O.length;it<ot;it++){let k=O[it];bt=Mt[it];for(let F=0,ft=k.length;F<ft;F++){let P=j(k[F],bt[F],st);E(P.x,P.y,-A)}}}let Vt=g+_;for(let Z=0;Z<J;Z++){let tt=d?j(M[Z],Dt[Z],Vt):M[Z];y?(R.copy(D.normals[0]).multiplyScalar(tt.x),T.copy(D.binormals[0]).multiplyScalar(tt.y),w.copy(x[0]).add(R).add(T),E(w.x,w.y,w.z)):E(tt.x,tt.y,0)}for(let Z=1;Z<=h;Z++)for(let tt=0;tt<J;tt++){let A=d?j(M[tt],Dt[tt],Vt):M[tt];y?(R.copy(D.normals[Z]).multiplyScalar(A.x),T.copy(D.binormals[Z]).multiplyScalar(A.y),w.copy(x[Z]).add(R).add(T),E(w.x,w.y,w.z)):E(A.x,A.y,f/h*Z)}for(let Z=m-1;Z>=0;Z--){let tt=Z/m,A=u*Math.cos(tt*Math.PI/2),st=g*Math.sin(tt*Math.PI/2)+_;for(let it=0,ot=q.length;it<ot;it++){let k=j(q[it],yt[it],st);E(k.x,k.y,f+A)}for(let it=0,ot=O.length;it<ot;it++){let k=O[it];bt=Mt[it];for(let F=0,ft=k.length;F<ft;F++){let P=j(k[F],bt[F],st);y?E(P.x,P.y+x[h-1].y,x[h-1].x+A):E(P.x,P.y,f+A)}}}B(),U();function B(){let Z=s.length/3;if(d){let tt=0,A=J*tt;for(let st=0;st<nt;st++){let it=H[st];W(it[2]+A,it[1]+A,it[0]+A)}tt=h+m*2,A=J*tt;for(let st=0;st<nt;st++){let it=H[st];W(it[0]+A,it[1]+A,it[2]+A)}}else{for(let tt=0;tt<nt;tt++){let A=H[tt];W(A[2],A[1],A[0])}for(let tt=0;tt<nt;tt++){let A=H[tt];W(A[0]+J*h,A[1]+J*h,A[2]+J*h)}}n.addGroup(Z,s.length/3-Z,0)}function U(){let Z=s.length/3,tt=0;L(q,tt),tt+=q.length;for(let A=0,st=O.length;A<st;A++){let it=O[A];L(it,tt),tt+=it.length}n.addGroup(Z,s.length/3-Z,1)}function L(Z,tt){let A=Z.length;for(;--A>=0;){let st=A,it=A-1;it<0&&(it=Z.length-1);for(let ot=0,k=h+m*2;ot<k;ot++){let F=J*ot,ft=J*(ot+1),P=tt+st+F,S=tt+it+F,Q=tt+it+ft,ct=tt+st+ft;et(P,S,Q,ct)}}}function E(Z,tt,A){l.push(Z),l.push(tt),l.push(A)}function W(Z,tt,A){z(Z),z(tt),z(A);let st=s.length/3,it=b.generateTopUV(n,s,st-3,st-2,st-1);rt(it[0]),rt(it[1]),rt(it[2])}function et(Z,tt,A,st){z(Z),z(tt),z(st),z(tt),z(A),z(st);let it=s.length/3,ot=b.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);rt(ot[0]),rt(ot[1]),rt(ot[3]),rt(ot[1]),rt(ot[2]),rt(ot[3])}function z(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function rt(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return U0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Pr[s.type]().fromJSON(s)),new i(n,t.options)}},D0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],u=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-f),new ht(d,1-g),new ht(_,1-p)]:[new ht(a,1-l),new ht(h,1-f),new ht(u,1-g),new ht(m,1-p)]}};function U0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Dr=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new V,d=new V,u=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let b=[],x=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let D=0;D<=e;D++){let T=D/e;f.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(T+y,1-x),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let x=h[p][b+1],y=h[p][b],D=h[p+1][b],T=h[p+1][b+1];(p!==0||o>0)&&u.push(x,y,T),(p!==n-1||l<Math.PI)&&u.push(y,D,T)}this.setIndex(u),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xi=class i extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new V,f=new V,d=new V;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){let _=g/s*r,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){let _=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,p=(s+1)*(u-1)+g,b=(s+1)*u+g;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ur=class i extends we{constructor(t=new Rr(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new V,l=new V,c=new ht,h=new V,f=[],d=[],u=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Kt(f,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(u,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),b(),p()}function m(x){h=t.getPointAt(x/e,h);let y=o.normals[x],D=o.binormals[x];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,w=Math.sin(R),v=-Math.cos(R);l.x=v*y.x+w*D.x,l.y=v*y.y+w*D.y,l.z=v*y.z+w*D.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let y=1;y<=s;y++){let D=(s+1)*(x-1)+(y-1),T=(s+1)*x+(y-1),R=(s+1)*x+y,w=(s+1)*(x-1)+y;g.push(D,T,w),g.push(T,R,w)}}function b(){for(let x=0;x<=e;x++)for(let y=0;y<=s;y++)c.x=x/e,c.y=y/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Pr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Nr=class extends zn{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Yt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var on=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qi=class extends on{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function or(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function N0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nl=class extends Yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ec:r=t,a=2*e-n;break;case nc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ec:o=t,l=2*n-e;break;case nc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-u)*m+(1.5+u)*_+.5*g,y=u*m-u*_;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+b*o[c+D]+x*o[l+D]+y*o[f+D];return r}},il=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},sl=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case dr:e=this.InterpolantFactoryMethodDiscrete;break;case Da:e=this.InterpolantFactoryMethodLinear;break;case go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return Da;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&N0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===go,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let _=e[f+g];if(_!==e[d+g]||_!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=Da;var ri=class extends Qe{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=dr;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Qe{};rl.prototype.ValueTypeName="color";var ol=class extends Qe{};ol.prototype.ValueTypeName="number";var al=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)je.slerpFlat(r,0,o,c-a,o,c,l);return r}},Or=class extends Qe{InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends Qe{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=dr;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends Qe{};ll.prototype.ValueTypeName="vector";var eh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},cl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],g=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},O0=new cl,Zi=class{constructor(t){this.manager=t!==void 0?t:O0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var mn={},hl=class extends Error{constructor(t,e){super(t),this.response=e}},Fr=class extends Zi{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=eh.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(mn[t]!==void 0){mn[t].push({onLoad:e,onProgress:n,onError:s});return}mn[t]=[],mn[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=mn[t],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=d?parseInt(d):0,g=u!==0,_=0,m=new ReadableStream({start(p){b();function b(){f.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;let D=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:u});for(let T=0,R=h.length;T<R;T++){let w=h[T];w.onProgress&&w.onProgress(D)}p.enqueue(y),b()}},x=>{p.error(x)})}}});return new Response(m)}else throw new hl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,u=new TextDecoder(d);return c.arrayBuffer().then(g=>u.decode(g))}}}).then(c=>{eh.add(t,c);let h=mn[t];delete mn[t];for(let f=0,d=h.length;f<d;f++){let u=h[f];u.onLoad&&u.onLoad(c)}}).catch(c=>{let h=mn[t];if(h===void 0)throw this.manager.itemError(t),c;delete mn[t];for(let f=0,d=h.length;f<d;f++){let u=h[f];u.onError&&u.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Br=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var qo=new ce,nh=new V,ih=new V,kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var sh=new ce,us=new V,Yo=new V,ul=class extends kr{constructor(){super(new be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),us.setFromMatrixPosition(t.matrixWorld),n.position.copy(us),Yo.copy(n.position),Yo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Yo),n.updateMatrixWorld(),s.makeTranslation(-us.x,-us.y,-us.z),sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh)}},zr=class extends Br{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ul}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},dl=class extends kr{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new dl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var El="\\[\\]\\.:\\/",F0=new RegExp("["+El+"]","g"),Al="[^"+El+"]",B0="[^"+El.replace("\\.","")+"]",k0=/((?:WC+[\/:])*)/.source.replace("WC",Al),z0=/(WCOD+)?/.source.replace("WCOD",B0),V0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Al),H0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Al),G0=new RegExp("^"+k0+z0+V0+H0+"$"),W0=["material","materials","bones","map"],fl=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(F0,"")}static parseTrackName(t){let e=G0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);W0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=fl;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W_=new Float32Array(1);var Rs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var rh=new ht,Hr=class{constructor(t=new ht(1/0,1/0),e=new ht(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=rh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rh).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var an=class{constructor(){this.type="ShapePath",this.color=new Yt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Pe,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){let b=[];for(let x=0,y=p.length;x<y;x++){let D=p[x],T=new ue;T.curves=D.curves,b.push(T)}return b}function n(p,b){let x=b.length,y=!1;for(let D=x-1,T=0;T<x;D=T++){let R=b[D],w=b[T],v=w.x-R.x,M=w.y-R.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(R=b[T],v=-v,w=b[D],M=-M),p.y<R.y||p.y>w.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{let O=M*(p.x-R.x)-v*(p.y-R.y);if(O===0)return!0;if(O<0)continue;y=!y}}else{if(p.y!==R.y)continue;if(w.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=w.x)return!0}}return y}let s=Bn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,c=[];if(r.length===1)return a=r[0],l=new ue,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;let f=[],d=[],u=[],g=0,_;d[g]=void 0,u[g]=[];for(let p=0,b=r.length;p<b;p++)a=r[p],_=a.getPoints(),o=s(_),o=t?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new ue,p:_},d[g].s.curves=a.curves,h&&g++,u[g]=[]):u[g].push({h:a,p:_[0]});if(!d[0])return e(r);if(d.length>1){let p=!1,b=0;for(let x=0,y=d.length;x<y;x++)f[x]=[];for(let x=0,y=d.length;x<y;x++){let D=u[x];for(let T=0;T<D.length;T++){let R=D[T],w=!0;for(let v=0;v<d.length;v++)n(R.p,d[v].p)&&(x!==v&&b++,w?(w=!1,f[v].push(R)):p=!0);w&&f[x].push(R)}}b>0&&p===!1&&(u=f)}let m;for(let p=0,b=d.length;p<b;p++){l=d[p].s,c.push(l),m=u[p];for(let x=0,y=m.length;x<y;x++)l.holes.push(m[x].h)}return c}},Gr=class extends Sn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);var Uh={type:"change"},Rl={type:"start"},Oh={type:"end"},Zr=new bs,Nh=new Ze,X0=Math.cos(70*Mh.DEG2RAD),ge=new V,Ie=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cl=1e-6,Jr=class extends Gr{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new je,this._lastTargetPosition=new V,this._quat=new je().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rs,this._sphericalDelta=new Rs,this._scale=1,this._panOffset=new V,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new V,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Y0.bind(this),this._onPointerDown=q0.bind(this),this._onPointerUp=Z0.bind(this),this._onContextMenu=e_.bind(this),this._onMouseWheel=K0.bind(this),this._onKeyDown=j0.bind(this),this._onTouchStart=Q0.bind(this),this._onTouchMove=t_.bind(this),this._onMouseDown=J0.bind(this),this._onMouseMove=$0.bind(this),this._interceptControlDown=n_.bind(this),this._interceptControlUp=i_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uh),this.update(),this.state=ie.NONE}update(t=null){let e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ie:n>Math.PI&&(n-=Ie),s<-Math.PI?s+=Ie:s>Math.PI&&(s-=Ie),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ge.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Zr.origin.copy(this.object.position),Zr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zr.direction))<X0?this.object.lookAt(this.target):(Nh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zr.intersectPlane(Nh,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cl||this._lastTargetPosition.distanceToSquared(this.target)>Cl?(this.dispatchEvent(Uh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ie/60*this.autoRotateSpeed*t:Ie/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ge.copy(s).sub(this.target);let r=ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ie*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ie*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ie*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ie*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ie*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ie*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ie*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ie*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function q0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Y0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Z0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Oh),this.state=ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function J0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case ai.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case ai.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Rl)}function $0(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function K0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(Rl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Oh))}function j0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Q0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Rl)}function t_(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function e_(i){this.enabled!==!1&&i.preventDefault()}function n_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var $r=class extends Gi{constructor(){super();let t=new En;t.deleteAttribute("uv");let e=new on({side:Se}),n=new on,s=new zr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new qt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new qt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new qt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new qt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new qt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new qt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let f=new qt(t,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let d=new qt(t,Ki(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let u=new qt(t,Ki(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let g=new qt(t,Ki(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new qt(t,Ki(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new qt(t,Ki(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new qt(t,Ki(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ki(i){let t=new ki;return t.color.setScalar(i),t}function Fh(i,t=Math.PI/3){let e=Math.cos(t),n=(1+1e-10)*100,s=[new V,new V,new V],r=new V,o=new V,a=new V,l=new V;function c(_){let m=~~(_.x*n),p=~~(_.y*n),b=~~(_.z*n);return`${m},${p},${b}`}let h=i.index?i.toNonIndexed():i,f=h.attributes.position,d={};for(let _=0,m=f.count/3;_<m;_++){let p=3*_,b=s[0].fromBufferAttribute(f,p+0),x=s[1].fromBufferAttribute(f,p+1),y=s[2].fromBufferAttribute(f,p+2);r.subVectors(y,x),o.subVectors(b,x);let D=new V().crossVectors(r,o).normalize();for(let T=0;T<3;T++){let R=s[T],w=c(R);w in d||(d[w]=[]),d[w].push(D)}}let u=new Float32Array(f.count*3),g=new Ce(u,3,!1);for(let _=0,m=f.count/3;_<m;_++){let p=3*_,b=s[0].fromBufferAttribute(f,p+0),x=s[1].fromBufferAttribute(f,p+1),y=s[2].fromBufferAttribute(f,p+2);r.subVectors(y,x),o.subVectors(b,x),a.crossVectors(r,o).normalize();for(let D=0;D<3;D++){let T=s[D],R=c(T),w=d[R];l.set(0,0,0);for(let v=0,M=w.length;v<M;v++){let O=w[v];a.dot(O)>e&&l.add(O)}l.normalize(),g.setXYZ(p+D,l.x,l.y,l.z)}}return h.setAttribute("normal",g),h}function Bh(i,t,e){let n=-i/2,s=-t/2,r=new ue;return r.moveTo(n+e,s),r.lineTo(n+i-e,s),r.absarc(n+i-e,s+e,e,-Math.PI/2,0,!1),r.lineTo(n+i,s+t-e),r.absarc(n+i-e,s+t-e,e,0,Math.PI/2,!1),r.lineTo(n+e,s+t),r.absarc(n+e,s+t-e,e,Math.PI/2,Math.PI,!1),r.lineTo(n,s+e),r.absarc(n+e,s+e,e,Math.PI,Math.PI*1.5,!1),r}function s_(i,t,e,n){let s=n/2,r=new Pe;return r.moveTo(i-e/2+s,t-s),r.lineTo(i+e/2-s,t-s),r.absarc(i+e/2-s,t,s,-Math.PI/2,Math.PI/2,!1),r.lineTo(i-e/2+s,t+s),r.absarc(i-e/2+s,t,s,Math.PI/2,Math.PI*1.5,!1),r}function Pl(i,t,e){let n=new Pe;return n.absarc(i,t,e,0,Math.PI*2,!0),n}var Kr={placa:()=>{let i=Bh(22,9,1.1);return i.holes.push(Pl(-9.6,0,.32),Pl(9.6,0,.32)),{outline:i,thickness:1.4,bevel:.14,area:{x:0,y:0,w:17.4,h:6.6},label:"Placa"}},llavero:()=>{let n=new ue;return n.moveTo(-8.6/2+1.95,-3.9/2),n.lineTo(8.6/2-.5,-3.9/2),n.absarc(8.6/2-.5,-3.9/2+.5,.5,-Math.PI/2,0,!1),n.lineTo(8.6/2,3.9/2-.5),n.absarc(8.6/2-.5,3.9/2-.5,.5,0,Math.PI/2,!1),n.lineTo(-8.6/2+1.95,3.9/2),n.absarc(-8.6/2+1.95,0,1.95,Math.PI/2,Math.PI*1.5,!1),n.holes.push(Pl(-8.6/2+1.95,0,.36)),{outline:n,thickness:.6,bevel:.09,area:{x:.9,y:0,w:5.6,h:2.9},label:"Llavero",extras(s,r){let o=new qt(new Xi(1.15,.09,14,56),new on({color:12170926,metalness:1,roughness:.28}));o.position.set(-8.6/2+1.95,.6+1.15*.96,0),o.rotation.set(0,.5,0),s.add(o)}}},posavasos:()=>{let i=new ue;return i.absarc(0,0,5,0,Math.PI*2,!1),{outline:i,thickness:.9,bevel:.12,area:{x:0,y:0,w:6.8,h:6.8},label:"Posavasos"}},tabla:()=>{let i=Bh(32,17,2.4);return i.holes.push(s_(-12.6,0,4.2,1.7)),{outline:i,thickness:1.8,bevel:.2,area:{x:3,y:0,w:21,h:11},label:"Tabla"}},corazon:()=>{let t=[];for(let d=0;d<260;d++){let u=d/260*Math.PI*2;t.push(new ht(16*Math.pow(Math.sin(u),3)*.42,(13*Math.cos(u)-5*Math.cos(2*u)-2*Math.cos(3*u)-Math.cos(4*u))*.42))}let e=Math.min(...t.map(d=>d.y)),n=e+.95,s=t.map(d=>d.y>=n),r=s.indexOf(!1),o=s.lastIndexOf(!1),a=t.slice(0,r),l=t[r-1],c=t[o+1],h=new ht(0,e+.05);for(let d=0;d<=12;d++){let u=d/12;a.push(new ht((1-u)*(1-u)*l.x+2*(1-u)*u*h.x+u*u*c.x,(1-u)*(1-u)*l.y+2*(1-u)*u*h.y+u*u*c.y))}a=a.concat(t.slice(o+1));{let d=[];for(let u=0;u<a.length;u++){let g=a[u],_=a[(u+1)%a.length];d.push(new ht(g.x*.75+_.x*.25,g.y*.75+_.y*.25),new ht(g.x*.25+_.x*.75,g.y*.25+_.y*.75))}a=d}return{outline:new ue(a),thickness:1.1,bevel:.14,area:{x:0,y:.5,w:7.4,h:4.2},label:"Corazón"}}};var r_=Me,Is=class i extends Zi{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,o=new Fr(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(B,U){if(B.nodeType!==1)return;let L=y(B),E=!1,W=null;switch(B.nodeName){case"svg":U=g(B,U);break;case"style":r(B);break;case"g":U=g(B,U);break;case"path":U=g(B,U),B.hasAttribute("d")&&(W=s(B));break;case"rect":U=g(B,U),W=l(B);break;case"polygon":U=g(B,U),W=c(B);break;case"polyline":U=g(B,U),W=h(B);break;case"circle":U=g(B,U),W=f(B);break;case"ellipse":U=g(B,U),W=d(B);break;case"line":U=g(B,U),W=u(B);break;case"defs":E=!0;break;case"use":U=g(B,U);let rt=(B.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),Z=B.viewportElement.getElementById(rt);Z?n(Z,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+rt);break;default:}W&&(U.fill!==void 0&&U.fill!=="none"&&W.color.setStyle(U.fill,r_),T(W,bt),N.push(W),W.userData={node:B,style:U});let et=B.childNodes;for(let z=0;z<et.length;z++){let rt=et[z];E&&rt.nodeName!=="style"&&rt.nodeName!=="defs"||n(rt,U)}L&&(q.pop(),q.length>0?bt.copy(q[q.length-1]):bt.identity())}function s(B){let U=new an,L=new ht,E=new ht,W=new ht,et=!0,z=!1,rt=B.getAttribute("d");if(rt===""||rt==="none")return null;let Z=rt.match(/[a-df-z][^a-df-z]*/ig);for(let tt=0,A=Z.length;tt<A;tt++){let st=Z[tt],it=st.charAt(0),ot=st.slice(1).trim();et===!0&&(z=!0,et=!1);let k;switch(it){case"M":k=m(ot);for(let F=0,ft=k.length;F<ft;F+=2)L.x=k[F+0],L.y=k[F+1],E.x=L.x,E.y=L.y,F===0?U.moveTo(L.x,L.y):U.lineTo(L.x,L.y),F===0&&W.copy(L);break;case"H":k=m(ot);for(let F=0,ft=k.length;F<ft;F++)L.x=k[F],E.x=L.x,E.y=L.y,U.lineTo(L.x,L.y),F===0&&z===!0&&W.copy(L);break;case"V":k=m(ot);for(let F=0,ft=k.length;F<ft;F++)L.y=k[F],E.x=L.x,E.y=L.y,U.lineTo(L.x,L.y),F===0&&z===!0&&W.copy(L);break;case"L":k=m(ot);for(let F=0,ft=k.length;F<ft;F+=2)L.x=k[F+0],L.y=k[F+1],E.x=L.x,E.y=L.y,U.lineTo(L.x,L.y),F===0&&z===!0&&W.copy(L);break;case"C":k=m(ot);for(let F=0,ft=k.length;F<ft;F+=6)U.bezierCurveTo(k[F+0],k[F+1],k[F+2],k[F+3],k[F+4],k[F+5]),E.x=k[F+2],E.y=k[F+3],L.x=k[F+4],L.y=k[F+5],F===0&&z===!0&&W.copy(L);break;case"S":k=m(ot);for(let F=0,ft=k.length;F<ft;F+=4)U.bezierCurveTo(_(L.x,E.x),_(L.y,E.y),k[F+0],k[F+1],k[F+2],k[F+3]),E.x=k[F+0],E.y=k[F+1],L.x=k[F+2],L.y=k[F+3],F===0&&z===!0&&W.copy(L);break;case"Q":k=m(ot);for(let F=0,ft=k.length;F<ft;F+=4)U.quadraticCurveTo(k[F+0],k[F+1],k[F+2],k[F+3]),E.x=k[F+0],E.y=k[F+1],L.x=k[F+2],L.y=k[F+3],F===0&&z===!0&&W.copy(L);break;case"T":k=m(ot);for(let F=0,ft=k.length;F<ft;F+=2){let P=_(L.x,E.x),S=_(L.y,E.y);U.quadraticCurveTo(P,S,k[F+0],k[F+1]),E.x=P,E.y=S,L.x=k[F+0],L.y=k[F+1],F===0&&z===!0&&W.copy(L)}break;case"A":k=m(ot,[3,4],7);for(let F=0,ft=k.length;F<ft;F+=7){if(k[F+5]==L.x&&k[F+6]==L.y)continue;let P=L.clone();L.x=k[F+5],L.y=k[F+6],E.x=L.x,E.y=L.y,o(U,k[F],k[F+1],k[F+2],k[F+3],k[F+4],P,L),F===0&&z===!0&&W.copy(L)}break;case"m":k=m(ot);for(let F=0,ft=k.length;F<ft;F+=2)L.x+=k[F+0],L.y+=k[F+1],E.x=L.x,E.y=L.y,F===0?U.moveTo(L.x,L.y):U.lineTo(L.x,L.y),F===0&&W.copy(L);break;case"h":k=m(ot);for(let F=0,ft=k.length;F<ft;F++)L.x+=k[F],E.x=L.x,E.y=L.y,U.lineTo(L.x,L.y),F===0&&z===!0&&W.copy(L);break;case"v":k=m(ot);for(let F=0,ft=k.length;F<ft;F++)L.y+=k[F],E.x=L.x,E.y=L.y,U.lineTo(L.x,L.y),F===0&&z===!0&&W.copy(L);break;case"l":k=m(ot);for(let F=0,ft=k.length;F<ft;F+=2)L.x+=k[F+0],L.y+=k[F+1],E.x=L.x,E.y=L.y,U.lineTo(L.x,L.y),F===0&&z===!0&&W.copy(L);break;case"c":k=m(ot);for(let F=0,ft=k.length;F<ft;F+=6)U.bezierCurveTo(L.x+k[F+0],L.y+k[F+1],L.x+k[F+2],L.y+k[F+3],L.x+k[F+4],L.y+k[F+5]),E.x=L.x+k[F+2],E.y=L.y+k[F+3],L.x+=k[F+4],L.y+=k[F+5],F===0&&z===!0&&W.copy(L);break;case"s":k=m(ot);for(let F=0,ft=k.length;F<ft;F+=4)U.bezierCurveTo(_(L.x,E.x),_(L.y,E.y),L.x+k[F+0],L.y+k[F+1],L.x+k[F+2],L.y+k[F+3]),E.x=L.x+k[F+0],E.y=L.y+k[F+1],L.x+=k[F+2],L.y+=k[F+3],F===0&&z===!0&&W.copy(L);break;case"q":k=m(ot);for(let F=0,ft=k.length;F<ft;F+=4)U.quadraticCurveTo(L.x+k[F+0],L.y+k[F+1],L.x+k[F+2],L.y+k[F+3]),E.x=L.x+k[F+0],E.y=L.y+k[F+1],L.x+=k[F+2],L.y+=k[F+3],F===0&&z===!0&&W.copy(L);break;case"t":k=m(ot);for(let F=0,ft=k.length;F<ft;F+=2){let P=_(L.x,E.x),S=_(L.y,E.y);U.quadraticCurveTo(P,S,L.x+k[F+0],L.y+k[F+1]),E.x=P,E.y=S,L.x=L.x+k[F+0],L.y=L.y+k[F+1],F===0&&z===!0&&W.copy(L)}break;case"a":k=m(ot,[3,4],7);for(let F=0,ft=k.length;F<ft;F+=7){if(k[F+5]==0&&k[F+6]==0)continue;let P=L.clone();L.x+=k[F+5],L.y+=k[F+6],E.x=L.x,E.y=L.y,o(U,k[F],k[F+1],k[F+2],k[F+3],k[F+4],P,L),F===0&&z===!0&&W.copy(L)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(L.copy(W),U.currentPath.currentPoint.copy(L),et=!0);break;default:console.warn(st)}z=!1}return U}function r(B){if(!(!B.sheet||!B.sheet.cssRules||!B.sheet.cssRules.length))for(let U=0;U<B.sheet.cssRules.length;U++){let L=B.sheet.cssRules[U];if(L.type!==1)continue;let E=L.selectorText.split(/,/gm).filter(Boolean).map(W=>W.trim());for(let W=0;W<E.length;W++){let et=Object.fromEntries(Object.entries(L.style).filter(([,z])=>z!==""));H[E[W]]=Object.assign(H[E[W]]||{},et)}}}function o(B,U,L,E,W,et,z,rt){if(U==0||L==0){B.lineTo(rt.x,rt.y);return}E=E*Math.PI/180,U=Math.abs(U),L=Math.abs(L);let Z=(z.x-rt.x)/2,tt=(z.y-rt.y)/2,A=Math.cos(E)*Z+Math.sin(E)*tt,st=-Math.sin(E)*Z+Math.cos(E)*tt,it=U*U,ot=L*L,k=A*A,F=st*st,ft=k/it+F/ot;if(ft>1){let Bt=Math.sqrt(ft);U=Bt*U,L=Bt*L,it=U*U,ot=L*L}let P=it*F+ot*k,S=(it*ot-P)/P,Q=Math.sqrt(Math.max(0,S));W===et&&(Q=-Q);let ct=Q*U*st/L,dt=-Q*L*A/U,gt=Math.cos(E)*ct-Math.sin(E)*dt+(z.x+rt.x)/2,At=Math.sin(E)*ct+Math.cos(E)*dt+(z.y+rt.y)/2,St=a(1,0,(A-ct)/U,(st-dt)/L),Tt=a((A-ct)/U,(st-dt)/L,(-A-ct)/U,(-st-dt)/L)%(Math.PI*2);B.currentPath.absellipse(gt,At,U,L,St,St+Tt,et===0,E)}function a(B,U,L,E){let W=B*L+U*E,et=Math.sqrt(B*B+U*U)*Math.sqrt(L*L+E*E),z=Math.acos(Math.max(-1,Math.min(1,W/et)));return B*E-U*L<0&&(z=-z),z}function l(B){let U=x(B.getAttribute("x")||0),L=x(B.getAttribute("y")||0),E=x(B.getAttribute("rx")||B.getAttribute("ry")||0),W=x(B.getAttribute("ry")||B.getAttribute("rx")||0),et=x(B.getAttribute("width")),z=x(B.getAttribute("height")),rt=1-.551915024494,Z=new an;return Z.moveTo(U+E,L),Z.lineTo(U+et-E,L),(E!==0||W!==0)&&Z.bezierCurveTo(U+et-E*rt,L,U+et,L+W*rt,U+et,L+W),Z.lineTo(U+et,L+z-W),(E!==0||W!==0)&&Z.bezierCurveTo(U+et,L+z-W*rt,U+et-E*rt,L+z,U+et-E,L+z),Z.lineTo(U+E,L+z),(E!==0||W!==0)&&Z.bezierCurveTo(U+E*rt,L+z,U,L+z-W*rt,U,L+z-W),Z.lineTo(U,L+W),(E!==0||W!==0)&&Z.bezierCurveTo(U,L+W*rt,U+E*rt,L,U+E,L),Z}function c(B){function U(et,z,rt){let Z=x(z),tt=x(rt);W===0?E.moveTo(Z,tt):E.lineTo(Z,tt),W++}let L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,E=new an,W=0;return B.getAttribute("points").replace(L,U),E.currentPath.autoClose=!0,E}function h(B){function U(et,z,rt){let Z=x(z),tt=x(rt);W===0?E.moveTo(Z,tt):E.lineTo(Z,tt),W++}let L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,E=new an,W=0;return B.getAttribute("points").replace(L,U),E.currentPath.autoClose=!1,E}function f(B){let U=x(B.getAttribute("cx")||0),L=x(B.getAttribute("cy")||0),E=x(B.getAttribute("r")||0),W=new Pe;W.absarc(U,L,E,0,Math.PI*2);let et=new an;return et.subPaths.push(W),et}function d(B){let U=x(B.getAttribute("cx")||0),L=x(B.getAttribute("cy")||0),E=x(B.getAttribute("rx")||0),W=x(B.getAttribute("ry")||0),et=new Pe;et.absellipse(U,L,E,W,0,Math.PI*2);let z=new an;return z.subPaths.push(et),z}function u(B){let U=x(B.getAttribute("x1")||0),L=x(B.getAttribute("y1")||0),E=x(B.getAttribute("x2")||0),W=x(B.getAttribute("y2")||0),et=new an;return et.moveTo(U,L),et.lineTo(E,W),et.currentPath.autoClose=!1,et}function g(B,U){U=Object.assign({},U);let L={};if(B.hasAttribute("class")){let z=B.getAttribute("class").split(/\s/).filter(Boolean).map(rt=>rt.trim());for(let rt=0;rt<z.length;rt++)L=Object.assign(L,H["."+z[rt]])}B.hasAttribute("id")&&(L=Object.assign(L,H["#"+B.getAttribute("id")]));function E(z,rt,Z){Z===void 0&&(Z=function(A){return A.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),A}),B.hasAttribute(z)&&(U[rt]=Z(B.getAttribute(z))),L[z]&&(U[rt]=Z(L[z])),B.style&&B.style[z]!==""&&(U[rt]=Z(B.style[z]))}function W(z){return Math.max(0,Math.min(1,x(z)))}function et(z){return Math.max(0,x(z))}return E("fill","fill"),E("fill-opacity","fillOpacity",W),E("fill-rule","fillRule"),E("opacity","opacity",W),E("stroke","stroke"),E("stroke-opacity","strokeOpacity",W),E("stroke-width","strokeWidth",et),E("stroke-linejoin","strokeLineJoin"),E("stroke-linecap","strokeLineCap"),E("stroke-miterlimit","strokeMiterLimit",et),E("visibility","visibility"),U}function _(B,U){return B-(U-B)}function m(B,U,L){if(typeof B!="string")throw new TypeError("Invalid input: "+typeof B);let E={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},W=0,et=1,z=2,rt=3,Z=W,tt=!0,A="",st="",it=[];function ot(P,S,Q){let ct=new SyntaxError('Unexpected character "'+P+'" at index '+S+".");throw ct.partial=Q,ct}function k(){A!==""&&(st===""?it.push(Number(A)):it.push(Number(A)*Math.pow(10,Number(st)))),A="",st=""}let F,ft=B.length;for(let P=0;P<ft;P++){if(F=B[P],Array.isArray(U)&&U.includes(it.length%L)&&E.FLAGS.test(F)){Z=et,A=F,k();continue}if(Z===W){if(E.WHITESPACE.test(F))continue;if(E.DIGIT.test(F)||E.SIGN.test(F)){Z=et,A=F;continue}if(E.POINT.test(F)){Z=z,A=F;continue}E.COMMA.test(F)&&(tt&&ot(F,P,it),tt=!0)}if(Z===et){if(E.DIGIT.test(F)){A+=F;continue}if(E.POINT.test(F)){A+=F,Z=z;continue}if(E.EXP.test(F)){Z=rt;continue}E.SIGN.test(F)&&A.length===1&&E.SIGN.test(A[0])&&ot(F,P,it)}if(Z===z){if(E.DIGIT.test(F)){A+=F;continue}if(E.EXP.test(F)){Z=rt;continue}E.POINT.test(F)&&A[A.length-1]==="."&&ot(F,P,it)}if(Z===rt){if(E.DIGIT.test(F)){st+=F;continue}if(E.SIGN.test(F)){if(st===""){st+=F;continue}st.length===1&&E.SIGN.test(st)&&ot(F,P,it)}}E.WHITESPACE.test(F)?(k(),Z=W,tt=!1):E.COMMA.test(F)?(k(),Z=W,tt=!0):E.SIGN.test(F)?(k(),Z=et,A=F):E.POINT.test(F)?(k(),Z=z,A=F):ot(F,P,it)}return k(),it}let p=["mm","cm","in","pt","pc","px"],b={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(B){let U="px";if(typeof B=="string"||B instanceof String)for(let E=0,W=p.length;E<W;E++){let et=p[E];if(B.endsWith(et)){U=et,B=B.substring(0,B.length-et.length);break}}let L;return U==="px"&&e.defaultUnit!=="px"?L=b.in[e.defaultUnit]/e.defaultDPI:(L=b[U][e.defaultUnit],L<0&&(L=b[U].in*e.defaultDPI)),L*parseFloat(B)}function y(B){if(!(B.hasAttribute("transform")||B.nodeName==="use"&&(B.hasAttribute("x")||B.hasAttribute("y"))))return null;let U=D(B);return q.length>0&&U.premultiply(q[q.length-1]),bt.copy(U),q.push(U),U}function D(B){let U=new kt,L=j;if(B.nodeName==="use"&&(B.hasAttribute("x")||B.hasAttribute("y"))){let E=x(B.getAttribute("x")),W=x(B.getAttribute("y"));U.translate(E,W)}if(B.hasAttribute("transform")){let E=B.getAttribute("transform").split(")");for(let W=E.length-1;W>=0;W--){let et=E[W].trim();if(et==="")continue;let z=et.indexOf("("),rt=et.length;if(z>0&&z<rt){let Z=et.slice(0,z),tt=m(et.slice(z+1));switch(L.identity(),Z){case"translate":if(tt.length>=1){let A=tt[0],st=0;tt.length>=2&&(st=tt[1]),L.translate(A,st)}break;case"rotate":if(tt.length>=1){let A=0,st=0,it=0;A=tt[0]*Math.PI/180,tt.length>=3&&(st=tt[1],it=tt[2]),J.makeTranslation(-st,-it),nt.makeRotation(A),G.multiplyMatrices(nt,J),J.makeTranslation(st,it),L.multiplyMatrices(J,G)}break;case"scale":if(tt.length>=1){let A=tt[0],st=A;tt.length>=2&&(st=tt[1]),L.scale(A,st)}break;case"skewX":tt.length===1&&L.set(1,Math.tan(tt[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":tt.length===1&&L.set(1,0,0,Math.tan(tt[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":tt.length===6&&L.set(tt[0],tt[2],tt[4],tt[1],tt[3],tt[5],0,0,1);break}}U.premultiply(L)}}return U}function T(B,U){function L(z){Mt.set(z.x,z.y,1).applyMatrix3(U),z.set(Mt.x,Mt.y)}function E(z){let rt=z.xRadius,Z=z.yRadius,tt=Math.cos(z.aRotation),A=Math.sin(z.aRotation),st=new V(rt*tt,rt*A,0),it=new V(-Z*A,Z*tt,0),ot=st.applyMatrix3(U),k=it.applyMatrix3(U),F=j.set(ot.x,k.x,0,ot.y,k.y,0,0,0,1),ft=J.copy(F).invert(),Q=nt.copy(ft).transpose().multiply(ft).elements,ct=O(Q[0],Q[1],Q[4]),dt=Math.sqrt(ct.rt1),gt=Math.sqrt(ct.rt2);if(z.xRadius=1/dt,z.yRadius=1/gt,z.aRotation=Math.atan2(ct.sn,ct.cs),!((z.aEndAngle-z.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let St=J.set(dt,0,0,0,gt,0,0,0,1),Tt=nt.set(ct.cs,ct.sn,0,-ct.sn,ct.cs,0,0,0,1),Bt=St.multiply(Tt).multiply(F),C=X=>{let{x:xt,y:ut}=new V(Math.cos(X),Math.sin(X),0).applyMatrix3(Bt);return Math.atan2(ut,xt)};z.aStartAngle=C(z.aStartAngle),z.aEndAngle=C(z.aEndAngle),R(U)&&(z.aClockwise=!z.aClockwise)}}function W(z){let rt=v(U),Z=M(U);z.xRadius*=rt,z.yRadius*=Z;let tt=rt>Number.EPSILON?Math.atan2(U.elements[1],U.elements[0]):Math.atan2(-U.elements[3],U.elements[4]);z.aRotation+=tt,R(U)&&(z.aStartAngle*=-1,z.aEndAngle*=-1,z.aClockwise=!z.aClockwise)}let et=B.subPaths;for(let z=0,rt=et.length;z<rt;z++){let tt=et[z].curves;for(let A=0;A<tt.length;A++){let st=tt[A];st.isLineCurve?(L(st.v1),L(st.v2)):st.isCubicBezierCurve?(L(st.v0),L(st.v1),L(st.v2),L(st.v3)):st.isQuadraticBezierCurve?(L(st.v0),L(st.v1),L(st.v2)):st.isEllipseCurve&&(yt.set(st.aX,st.aY),L(yt),st.aX=yt.x,st.aY=yt.y,w(U)?E(st):W(st))}}}function R(B){let U=B.elements;return U[0]*U[4]-U[1]*U[3]<0}function w(B){let U=B.elements,L=U[0]*U[3]+U[1]*U[4];if(L===0)return!1;let E=v(B),W=M(B);return Math.abs(L/(E*W))>Number.EPSILON}function v(B){let U=B.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function M(B){let U=B.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}function O(B,U,L){let E,W,et,z,rt,Z=B+L,tt=B-L,A=Math.sqrt(tt*tt+4*U*U);return Z>0?(E=.5*(Z+A),rt=1/E,W=B*rt*L-U*rt*U):Z<0?W=.5*(Z-A):(E=.5*A,W=-.5*A),tt>0?et=tt+A:et=tt-A,Math.abs(et)>2*Math.abs(U)?(rt=-2*U/et,z=1/Math.sqrt(1+rt*rt),et=rt*z):Math.abs(U)===0?(et=1,z=0):(rt=-.5*et/U,et=1/Math.sqrt(1+rt*rt),z=rt*et),tt>0&&(rt=et,et=-z,z=rt),{rt1:E,rt2:W,cs:et,sn:z}}let N=[],H={},q=[],j=new kt,J=new kt,nt=new kt,G=new kt,yt=new ht,Mt=new V,bt=new kt,Dt=new DOMParser().parseFromString(t,"image/svg+xml");return n(Dt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:N,xml:Dt.documentElement}}static createShapes(t){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(_,m,p,b){let x=_.x,y=m.x,D=p.x,T=b.x,R=_.y,w=m.y,v=p.y,M=b.y,O=(T-D)*(R-v)-(M-v)*(x-D),N=(y-x)*(R-v)-(w-R)*(x-D),H=(M-v)*(y-x)-(T-D)*(w-R),q=O/H,j=N/H;if(H===0&&O!==0||q<=0||q>=1||j<0||j>1)return null;if(O===0&&H===0){for(let J=0;J<2;J++)if(o(J===0?p:b,_,m),s.loc==n.ORIGIN){let nt=J===0?p:b;return{x:nt.x,y:nt.y,t:s.t}}else if(s.loc==n.BETWEEN){let nt=+(x+s.t*(y-x)).toPrecision(10),G=+(R+s.t*(w-R)).toPrecision(10);return{x:nt,y:G,t:s.t}}return null}else{for(let G=0;G<2;G++)if(o(G===0?p:b,_,m),s.loc==n.ORIGIN){let yt=G===0?p:b;return{x:yt.x,y:yt.y,t:s.t}}let J=+(x+q*(y-x)).toPrecision(10),nt=+(R+q*(w-R)).toPrecision(10);return{x:J,y:nt,t:q}}}function o(_,m,p){let b=p.x-m.x,x=p.y-m.y,y=_.x-m.x,D=_.y-m.y,T=b*D-y*x;if(_.x===m.x&&_.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(_.x===p.x&&_.y===p.y){s.loc=n.DESTINATION,s.t=1;return}if(T<-Number.EPSILON){s.loc=n.LEFT;return}if(T>Number.EPSILON){s.loc=n.RIGHT;return}if(b*y<0||x*D<0){s.loc=n.BEHIND;return}if(Math.sqrt(b*b+x*x)<Math.sqrt(y*y+D*D)){s.loc=n.BEYOND;return}let R;b!==0?R=y/b:R=D/x,s.loc=n.BETWEEN,s.t=R}function a(_,m){let p=[],b=[];for(let x=1;x<_.length;x++){let y=_[x-1],D=_[x];for(let T=1;T<m.length;T++){let R=m[T-1],w=m[T],v=r(y,D,R,w);v!==null&&p.find(M=>M.t<=v.t+Number.EPSILON&&M.t>=v.t-Number.EPSILON)===void 0&&(p.push(v),b.push(new ht(v.x,v.y)))}}return b}function l(_,m,p){let b=new ht;m.getCenter(b);let x=[];return p.forEach(y=>{y.boundingBox.containsPoint(b)&&a(_,y.points).forEach(T=>{x.push({identifier:y.identifier,isCW:y.isCW,point:T})})}),x.sort((y,D)=>y.point.x-D.point.x),x}function c(_,m,p,b,x){(x==null||x==="")&&(x="nonzero");let y=new ht;_.boundingBox.getCenter(y);let D=[new ht(p,y.y),new ht(b,y.y)],T=l(D,_.boundingBox,m);T.sort((N,H)=>N.point.x-H.point.x);let R=[],w=[];T.forEach(N=>{N.identifier===_.identifier?R.push(N):w.push(N)});let v=R[0].point.x,M=[],O=0;for(;O<w.length&&w[O].point.x<v;)M.length>0&&M[M.length-1]===w[O].identifier?M.pop():M.push(w[O].identifier),O++;if(M.push(_.identifier),x==="evenodd"){let N=M.length%2===0,H=M[M.length-2];return{identifier:_.identifier,isHole:N,for:H}}else if(x==="nonzero"){let N=!0,H=null,q=null;for(let j=0;j<M.length;j++){let J=M[j];N?(q=m[J].isCW,N=!1,H=J):q!==m[J].isCW&&(q=m[J].isCW,N=!0)}return{identifier:_.identifier,isHole:N,for:H}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let h=999999999,f=-999999999,d=t.subPaths.map(_=>{let m=_.getPoints(),p=-999999999,b=999999999,x=-999999999,y=999999999;for(let D=0;D<m.length;D++){let T=m[D];T.y>p&&(p=T.y),T.y<b&&(b=T.y),T.x>x&&(x=T.x),T.x<y&&(y=T.x)}return f<=x&&(f=x+1),h>=y&&(h=y-1),{curves:_.curves,points:m,isCW:Bn.isClockWise(m),identifier:-1,boundingBox:new Hr(new ht(y,b),new ht(x,p))}});d=d.filter(_=>_.points.length>1);for(let _=0;_<d.length;_++)d[_].identifier=_;let u=d.map(_=>c(_,d,h,f,t.userData?t.userData.style.fillRule:void 0)),g=[];return d.forEach(_=>{if(!u[_.identifier].isHole){let p=new ue;p.curves=_.curves,u.filter(x=>x.isHole&&x.for===_.identifier).forEach(x=>{let y=d[x.identifier],D=new Pe;D.curves=y.curves,p.holes.push(D)}),g.push(p)}}),g}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,o,a)===0)return null;let l=new we;return l.setAttribute("position",new Kt(r,3)),l.setAttribute("normal",new Kt(o,3)),l.setAttribute("uv",new Kt(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,s,r,o,a,l){let c=new ht,h=new ht,f=new ht,d=new ht,u=new ht,g=new ht,_=new ht,m=new ht,p=new ht,b=new ht,x=new ht,y=new ht,D=new ht,T=new ht,R=new ht,w=new ht,v=new ht;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,t=tt(t);let M=t.length;if(M<2)return 0;let O=t[0].equals(t[M-1]),N,H=t[0],q,j=e.strokeWidth/2,J=1/(M-1),nt=0,G,yt,Mt,bt,Dt=!1,Vt=0,B=l*3,U=l*2;L(t[0],t[1],c).multiplyScalar(j),m.copy(t[0]).sub(c),p.copy(t[0]).add(c),b.copy(m),x.copy(p);for(let A=1;A<M;A++){N=t[A],A===M-1?O?q=t[1]:q=void 0:q=t[A+1];let st=c;if(L(H,N,st),f.copy(st).multiplyScalar(j),y.copy(N).sub(f),D.copy(N).add(f),G=nt+J,yt=!1,q!==void 0){L(N,q,h),f.copy(h).multiplyScalar(j),T.copy(N).sub(f),R.copy(N).add(f),Mt=!0,f.subVectors(q,H),st.dot(f)<0&&(Mt=!1),A===1&&(Dt=Mt),f.subVectors(q,N),f.normalize();let it=Math.abs(st.dot(f));if(it>Number.EPSILON){let ot=j/it;f.multiplyScalar(-ot),d.subVectors(N,H),u.copy(d).setLength(ot).add(f),w.copy(u).negate();let k=u.length(),F=d.length();d.divideScalar(F),g.subVectors(q,N);let ft=g.length();switch(g.divideScalar(ft),d.dot(w)<F&&g.dot(w)<ft&&(yt=!0),v.copy(u).add(N),w.add(N),bt=!1,yt?Mt?(R.copy(w),D.copy(w)):(T.copy(w),y.copy(w)):et(),e.strokeLineJoin){case"bevel":z(Mt,yt,G);break;case"round":rt(Mt,yt),Mt?W(N,y,T,G,0):W(N,R,D,G,1);break;case"miter":case"miter-clip":default:let P=j*e.strokeMiterLimit/k;if(P<1)if(e.strokeLineJoin!=="miter-clip"){z(Mt,yt,G);break}else rt(Mt,yt),Mt?(g.subVectors(v,y).multiplyScalar(P).add(y),_.subVectors(v,T).multiplyScalar(P).add(T),E(y,G,0),E(g,G,0),E(N,G,.5),E(N,G,.5),E(g,G,0),E(_,G,0),E(N,G,.5),E(_,G,0),E(T,G,0)):(g.subVectors(v,D).multiplyScalar(P).add(D),_.subVectors(v,R).multiplyScalar(P).add(R),E(D,G,1),E(g,G,1),E(N,G,.5),E(N,G,.5),E(g,G,1),E(_,G,1),E(N,G,.5),E(_,G,1),E(R,G,1));else yt?(Mt?(E(p,nt,1),E(m,nt,0),E(v,G,0),E(p,nt,1),E(v,G,0),E(w,G,1)):(E(p,nt,1),E(m,nt,0),E(v,G,1),E(m,nt,0),E(w,G,0),E(v,G,1)),Mt?T.copy(v):R.copy(v)):Mt?(E(y,G,0),E(v,G,0),E(N,G,.5),E(N,G,.5),E(v,G,0),E(T,G,0)):(E(D,G,1),E(v,G,1),E(N,G,.5),E(N,G,.5),E(v,G,1),E(R,G,1)),bt=!0;break}}else et()}else et();!O&&A===M-1&&Z(t[0],b,x,Mt,!0,nt),nt=G,H=N,m.copy(T),p.copy(R)}if(!O)Z(N,y,D,Mt,!1,G);else if(yt&&r){let A=v,st=w;Dt!==Mt&&(A=w,st=v),Mt?(bt||Dt)&&(st.toArray(r,0*3),st.toArray(r,3*3),bt&&A.toArray(r,1*3)):(bt||!Dt)&&(st.toArray(r,1*3),st.toArray(r,3*3),bt&&A.toArray(r,0*3))}return Vt;function L(A,st,it){return it.subVectors(st,A),it.set(-it.y,it.x).normalize()}function E(A,st,it){r&&(r[B]=A.x,r[B+1]=A.y,r[B+2]=0,o&&(o[B]=0,o[B+1]=0,o[B+2]=1),B+=3,a&&(a[U]=st,a[U+1]=it,U+=2)),Vt+=3}function W(A,st,it,ot,k){c.copy(st).sub(A).normalize(),h.copy(it).sub(A).normalize();let F=Math.PI,ft=c.dot(h);Math.abs(ft)<1&&(F=Math.abs(Math.acos(ft))),F/=n,f.copy(st);for(let P=0,S=n-1;P<S;P++)d.copy(f).rotateAround(A,F),E(f,ot,k),E(d,ot,k),E(A,ot,.5),f.copy(d);E(d,ot,k),E(it,ot,k),E(A,ot,.5)}function et(){E(p,nt,1),E(m,nt,0),E(y,G,0),E(p,nt,1),E(y,G,0),E(D,G,1)}function z(A,st,it){st?A?(E(p,nt,1),E(m,nt,0),E(y,G,0),E(p,nt,1),E(y,G,0),E(w,G,1),E(y,it,0),E(T,it,0),E(w,it,.5)):(E(p,nt,1),E(m,nt,0),E(D,G,1),E(m,nt,0),E(w,G,0),E(D,G,1),E(D,it,1),E(w,it,0),E(R,it,1)):A?(E(y,it,0),E(T,it,0),E(N,it,.5)):(E(D,it,1),E(R,it,0),E(N,it,.5))}function rt(A,st){st&&(A?(E(p,nt,1),E(m,nt,0),E(y,G,0),E(p,nt,1),E(y,G,0),E(w,G,1),E(y,nt,0),E(N,G,.5),E(w,G,1),E(N,G,.5),E(T,nt,0),E(w,G,1)):(E(p,nt,1),E(m,nt,0),E(D,G,1),E(m,nt,0),E(w,G,0),E(D,G,1),E(D,nt,1),E(w,G,0),E(N,G,.5),E(N,G,.5),E(w,G,0),E(R,nt,1)))}function Z(A,st,it,ot,k,F){switch(e.strokeLineCap){case"round":k?W(A,it,st,F,.5):W(A,st,it,F,.5);break;case"square":if(k)c.subVectors(st,A),h.set(c.y,-c.x),f.addVectors(c,h).add(A),d.subVectors(h,c).add(A),ot?(f.toArray(r,1*3),d.toArray(r,0*3),d.toArray(r,3*3)):(f.toArray(r,1*3),a[3*2+1]===1?d.toArray(r,3*3):f.toArray(r,3*3),d.toArray(r,0*3));else{c.subVectors(it,A),h.set(c.y,-c.x),f.addVectors(c,h).add(A),d.subVectors(h,c).add(A);let ft=r.length;ot?(f.toArray(r,ft-1*3),d.toArray(r,ft-2*3),d.toArray(r,ft-4*3)):(d.toArray(r,ft-2*3),f.toArray(r,ft-1*3),d.toArray(r,ft-4*3))}break;case"butt":default:break}}function tt(A){let st=!1;for(let ot=1,k=A.length-1;ot<k;ot++)if(A[ot].distanceTo(A[ot+1])<s){st=!0;break}if(!st)return A;let it=[];it.push(A[0]);for(let ot=1,k=A.length-1;ot<k;ot++)A[ot].distanceTo(A[ot+1])>=s&&it.push(A[ot]);return it.push(A[A.length-1]),it}}};function kh(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Vn(i){let t=kh(i),e=new Uint8Array(512),n=Array.from({length:256},(o,a)=>a);for(let o=255;o>0;o--){let a=t()*(o+1)|0;[n[o],n[a]]=[n[a],n[o]]}for(let o=0;o<512;o++)e[o]=n[o&255];let s=o=>o*o*o*(o*(o*6-15)+10),r=(o,a,l)=>{switch(o&7){case 0:return a+l;case 1:return-a+l;case 2:return a-l;case 3:return-a-l;case 4:return a;case 5:return-a;case 6:return l;default:return-l}};return function(o,a){let l=Math.floor(o)&255,c=Math.floor(a)&255;o-=Math.floor(o),a-=Math.floor(a);let h=s(o),f=s(a),d=e[l]+c,u=e[l+1]+c,g=r(e[d],o,a)+h*(r(e[u],o-1,a)-r(e[d],o,a)),_=r(e[d+1],o,a-1)+h*(r(e[u+1],o-1,a-1)-r(e[d+1],o,a-1));return(g+f*(_-g))*1.41}}var hi={nogal:{base:[92,62,44],dark:[40,24,15],light:[128,90,64],rings:2.9,contrast:.8,warp:.7,fiber:.9,pores:.6,swirl:.2},roble:{base:[198,156,100],dark:[146,104,58],light:[224,190,138],rings:2.4,contrast:.6,warp:.42,fiber:.95,pores:1,swirl:.05},cerezo:{base:[172,98,62],dark:[116,56,30],light:[202,132,92],rings:1.8,contrast:.5,warp:.38,fiber:.7,pores:.35,swirl:.05},olivo:{base:[190,148,92],dark:[62,38,20],light:[222,188,132],rings:1.5,contrast:.7,warp:1.5,fiber:.6,pores:.4,swirl:.8},arce:{base:[232,211,168],dark:[196,160,112],light:[246,232,198],rings:2,contrast:.36,warp:.32,fiber:.7,pores:.2,swirl:0},abedul:{base:[200,152,98],dark:[158,112,66],light:[222,186,134],rings:5.2,contrast:.36,warp:.1,fiber:.95,pores:.22,swirl:0,vertical:!0},paulonia:{base:[212,174,122],dark:[160,114,70],light:[230,200,152],rings:2.3,contrast:.6,warp:.34,fiber:.9,pores:.16,swirl:0,vertical:!0,knots:1}},jr=(i,t=0,e=1)=>i<t?t:i>e?e:i,ji=(i,t,e)=>i+(t-i)*e;function zh(i,t,e,n,s,r=7,o){let a=hi[i]||hi.roble;o===void 0&&(o=!!a.vertical);let l=Vn(r*31+3),c=Vn(r*17+11),h=Vn(r*5+29),f=(w,v)=>l(w,v)*.55+l(w*2.03,v*2.03)*.28+l(w*4.1,v*4.1)*.12+l(w*8.3,v*8.3)*.05,d=document.createElement("canvas");d.width=t,d.height=e;let u=d.getContext("2d"),g=u.createImageData(t,e),_=g.data,m=new Float32Array(t*e),p=n/t,b=s/e,x=r%13*3.7,y=kh(r*97+13),D=[],T=o?s:n,R=o?n:s;for(let w=0;w<(a.knots||0);w++)D.push({x:x*1.9+(.15+y()*.7)*T,y:x+(.2+y()*.6)*R,rx:.55+y()*.3,ry:.32+y()*.15});for(let w=0;w<e;w++)for(let v=0;v<t;v++){let M=o?w*b+x*1.9:v*p+x*1.9,O=o?v*p+x:w*b+x,N=f(M*.09,O*.22)*a.warp,H=a.swirl>.4?f(M*.14+9.1,O*.2+4.2)*1.7*a.swirl:0,q=(O*.55+N+H)*a.rings,j=Math.abs(Math.sin(q*Math.PI+c(M*.05,O*.7)*1.1)),J=Math.pow(1-j,2.4),nt=f(M*.05+3,O*.11+8)*.5+.5,G=h(M*.45,O*22)*.5+.5,yt=h(M*.12+40,O*70)*.5+.5,Mt=G*.6+yt*.4,bt=c(M*2.4+70,O*46),Dt=bt>.52?jr((bt-.52)*3.2)*a.pores:0,Vt=0;if(a.swirl>.4){let z=Math.abs(f(M*.2+15,O*.3+2.4));Vt=Math.pow(1-jr(z*5.5),4.2)*.7}let B=0;for(let z=0;z<D.length;z++){let rt=D[z],Z=(M-rt.x)/rt.rx,tt=(O-rt.y)/rt.ry,A=Math.sqrt(Z*Z+tt*tt);A<1?B=Math.max(B,.55+.45*(1-A)):A<2.6&&(B=Math.max(B,.3*Math.pow(1-(A-1)/1.6,2)*(.6+.4*Math.abs(Math.sin(A*9)))))}let U=B*.9+J*a.contrast*.62+(1-nt)*.34+(1-Mt)*a.fiber*.3+Dt*.3+Vt*.4;U=jr(U);let L,E,W;if(U<.5){let z=U*2;L=ji(a.light[0],a.base[0],z),E=ji(a.light[1],a.base[1],z),W=ji(a.light[2],a.base[2],z)}else{let z=(U-.5)*2;L=ji(a.base[0],a.dark[0],z),E=ji(a.base[1],a.dark[1],z),W=ji(a.base[2],a.dark[2],z)}let et=(w*t+v)*4;_[et]=L,_[et+1]=E,_[et+2]=W,_[et+3]=255,m[w*t+v]=jr(.55+(Mt-.5)*.5-Dt*.5-J*.12,0,1)}return u.putImageData(g,0,0),{canvas:d,height:m}}var Vh=i=>{let t=1e9,e=1e9,n=-1e9,s=-1e9;return i.forEach(r=>{t=Math.min(t,r.x),n=Math.max(n,r.x),e=Math.min(e,r.y),s=Math.max(s,r.y)}),{x0:t,y0:e,x1:n,y1:s,w:n-t,h:s-e,a:(n-t)*(s-e)}};function o_(i,t){let e='<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+i.vb.join(" ")+'">'+i.items.map(u=>'<path d="'+u.d+'"'+(u.tf?' transform="'+u.tf+'"':"")+"/>").join("")+"</svg>",n=new Is().parse(e),s=[];if(n.paths.forEach(u=>Is.createShapes(u).forEach(g=>{let _=g.extractPoints(24);_.shape.length>2&&(s.push({pts:_.shape,bb:Vh(_.shape)}),_.holes.forEach(m=>{m.length>2&&s.push({pts:m,bb:Vh(m),hole:!0})}))})),!s.length)throw new Error("La silueta no tiene contornos");let r=s.filter(u=>!u.hole).sort((u,g)=>g.bb.a-u.bb.a)[0]||s.sort((u,g)=>g.bb.a-u.bb.a)[0],o=u=>u!==r&&u.bb.x0>=r.bb.x0-1e-6&&u.bb.x1<=r.bb.x1+1e-6&&u.bb.y0>=r.bb.y0-1e-6&&u.bb.y1<=r.bb.y1+1e-6,a=s.filter(o),l=t/Math.max(1e-6,r.bb.w),c=(r.bb.x0+r.bb.x1)/2,h=(r.bb.y0+r.bb.y1)/2,f=u=>u.map(g=>new ht((g.x-c)*l,-(g.y-h)*l)),d=new ue(f(r.pts));return a.forEach(u=>d.holes.push(new Pe(f(u.pts)))),{shape:d,W:r.bb.w*l,H:r.bb.h*l}}function Hh(i){return()=>{let{shape:t,W:e,H:n}=o_(i.svg,Math.max(2,Math.min(60,i.w||10))),s=i.area||{x:0,y:0,w:.7,h:.4},r=Math.max(.2,Math.min(4,i.t||.6)),o=(i.materials||[]).length&&!hi[i.materials[0]],a={kind:["stack","row","column","wreath"].includes(i.layout)?i.layout:"stack"};return{label:i.label,home:{polar:.8,azim:-.12},parts:[{type:"slab",outline:t,thickness:r,bevel:Math.min(Math.max(.02,i.bevel||.08),r/3),mat:"state",sideFlat:!!o,engrave:{area:{x:(s.x||0)*e,y:(s.y||0)*n,w:Math.max(.5,s.w*e),h:Math.max(.5,s.h*n)},rot:i.rot||0,layout:a}}]}}}function Qr(i,t,e){let n=-i/2,s=-t/2,r=new ue;return r.moveTo(n+e,s),r.lineTo(n+i-e,s),r.absarc(n+i-e,s+e,e,-Math.PI/2,0,!1),r.lineTo(n+i,s+t-e),r.absarc(n+i-e,s+t-e,e,0,Math.PI/2,!1),r.lineTo(n+e,s+t),r.absarc(n+e,s+t-e,e,Math.PI/2,Math.PI,!1),r.lineTo(n,s+e),r.absarc(n+e,s+e,e,Math.PI,Math.PI*1.5,!1),r}function Gh(i){let t=new ue;return t.absarc(0,0,i,0,Math.PI*2,!1),t}function Wh(i,t){let e=i.map(([o,a])=>new ht(a,o)),n=(t||i).map(([o,a])=>new ht(-a,o)),s=new An(e).getPoints(Math.max(60,e.length*10)),r=new An(n.slice().reverse()).getPoints(Math.max(60,n.length*10));return new ue(s.concat(r))}var eo=[[-8,0],[-7.92,.3],[-7.55,.58],[-6.8,.74],[-5.7,.77],[-4.2,.64],[-2.6,.5],[-.8,.41],[1,.38]];function a_(){let i=eo.concat([[2.6,.44],[3.6,.68],[4.4,1]]),t=i.map(([h,f])=>new ht(f,h)),e=new An(t).getPoints(90),n=new ue(e),s=7.9,r=5.6,o=[.82,.28,-.28,-.82],a=.15;n.lineTo(1,s),o.forEach((h,f)=>{n.absarc(h,s,a,0,Math.PI,!1),n.lineTo(h-a,r+.1),f<o.length-1&&(n.quadraticCurveTo(h-a-.13,r-.1,h-a-.26,r+.1),n.lineTo(h-a-.26,s))});let l=i.map(([h,f])=>new ht(-f,h)).reverse(),c=new An(l).getPoints(90);return n.lineTo(-1,4.4),c.forEach(h=>n.lineTo(h.x,h.y)),n}var l_=eo.concat([[2.8,.42],[3.8,.72],[4.6,1.15],[5.6,1.52],[6.8,1.6],[7.6,1.22],[8.05,.55],[8.15,.02]]),c_=eo.concat([[2.4,.46],[3.4,.55],[4.8,.58],[6.8,.58],[7.9,.42],[8.15,.02]]),h_=eo.concat([[2.4,.5],[3.4,.8],[4.8,1],[6.4,.98],[7.6,.62],[8.15,.1]]);function u_(){let s=new ue;return s.moveTo(-5,-.62),s.lineTo(-3.5,-.62),s.bezierCurveTo(-2.95,-.62,-2.95,-1.2,-2.4,-1.2),s.lineTo(6.2-.35,-1.2),s.absarc(6.2-.35,-1.2+.35,.35,-Math.PI/2,0,!1),s.lineTo(6.2,1.2-.35),s.absarc(6.2-.35,1.2-.35,.35,0,Math.PI/2,!1),s.lineTo(-2.4,1.2),s.bezierCurveTo(-2.95,1.2,-2.95,.62,-3.5,.62),s.lineTo(-5,.62),s.lineTo(-5,-.62),s}var Qi=i=>new on(i),Xh={felpudo:()=>({label:"Felpudo",home:{polar:.8,azim:-.1},parts:[{type:"slab",outline:Qr(60,40,1),thickness:1.7,bevel:.3,mat:"state",sideFlat:!0,engrave:{area:{x:0,y:1,w:42,h:25},rot:0,layout:{kind:"stack",motifH:.42,motifW:.98,shares:[.5,.5],upper:!0,track:.07,textW:.66}}}]}),lineafina:()=>({label:"Cuadro de línea fina",home:{polar:.78,azim:-.14},parts:[{type:"slab",outline:Qr(30,30,.2),thickness:.7,bevel:.05,mat:"state",vertical:!0,engrave:{area:{x:0,y:0,w:25.5,h:25.5},rot:0,layout:{kind:"stack",motifH:.84,shares:[1],textW:.56}}}]}),posacorcho:()=>({label:"Posavasos de corcho",home:{polar:.7,azim:-.2},parts:[{type:"slab",outline:Gh(5),thickness:.5,bevel:.07,mat:"state",sideFlat:!0,engrave:{area:{x:0,y:0,w:9,h:9},rot:0,layout:{kind:"wreath",inner:.62,shares:[1,0,0]}}}]}),llaverocuero:()=>({label:"Llavero de cuero",home:{polar:.9,azim:-.2},parts:[{type:"slab",outline:u_(),thickness:.3,bevel:.06,mat:"state",sideFlat:!0,pos:[.6,0,0],engrave:{area:{x:3,y:0,w:6.4,h:1.7},rot:0,layout:{kind:"row"}}},{type:"slab",outline:Qr(3.4,1.24,.3),thickness:.3,bevel:.06,mat:"state",sideFlat:!0,pos:[-3.3,.45,0]},{type:"mesh",pos:[-2.55,.62,0],build:()=>{let i=new Ve,t=Qi({color:13684424,metalness:1,roughness:.22}),e=new qt(new Wi(.3,.34,.1,28),t);e.position.y=.05;let n=new qt(new Dr(.27,24,10,0,Math.PI*2,0,Math.PI/2),t);return n.position.y=.08,n.scale.y=.55,i.add(e,n),i}},{type:"mesh",pos:[-6.3,.3,0],build:()=>{let i=new qt(new Xi(1.5,.085,14,72),Qi({color:13026493,metalness:1,roughness:.2}));return i.rotation.x=Math.PI/2,i}}]}),vela:()=>({label:"Vela con tapa grabada",home:{polar:1.22,azim:-.3},parts:[{type:"mesh",build:()=>{let i=new Ve,t=[[.001,0],[3.3,0],[3.7,.18],[3.7,9],[3.46,9],[3.46,.4],[.001,.4]].map(([r,o])=>new ht(r,o)),e=new qt(new Ir(t,64),new qi({color:16054262,roughness:.05,metalness:0,transparent:!0,opacity:.16,side:Je,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.3,depthWrite:!1}));e.renderOrder=3;let n=(r,o,a)=>{let l=new qt(new Wi(3.44,3.44,o-r,56),Qi({color:a,roughness:.62}));return l.position.y=(r+o)/2,l.castShadow=!0,l};i.add(n(.4,3.2,3088408),n(3.2,6,7031347),n(6,8.2,14205340));let s=new qt(new Wi(.07,.09,1.1,8),Qi({color:3090466,roughness:.9}));return s.position.y=8.55,i.add(s,e),i}},{type:"slab",outline:Gh(3.35),thickness:.7,bevel:.1,mat:"state",vertical:!0,pos:[1.9,3.35*Math.cos(.21)+.15,4.1],rotX:Math.PI/2-.21,engrave:{area:{x:0,y:0,w:6,h:6},rot:0,layout:{kind:"wreath",inner:.6,shares:[.5,.27,.23],bodyFont:"serif"}}}]}),cajavino:()=>({label:"Caja de vino",home:{polar:1.18,azim:-.4},parts:[{type:"slab",outline:Qr(10.6,36,.25),thickness:10.2,bevel:.14,upright:!0,mat:"state",vertical:!0,pos:[0,36/2,0],engrave:{area:{x:0,y:-.8,w:8.8,h:30.4},rot:0,layout:{kind:"column",shares:[.17,.5,.12],wrap:[!1,!0,!1],motifH:.06,bodyFont:"serif",paraK:.86}}},{type:"mesh",pos:[0,36-5.1,0],build:()=>new qt(new En(10.639999999999999,.12,10.239999999999998),Qi({color:7626815,roughness:.9}))},{type:"mesh",pos:[0,36,0],build:()=>{let n=new Ts([[-2.6,-.8,0],[-2.8,2.4,0],[-1.5,5.4,0],[1.5,5.4,0],[2.8,2.4,0],[2.6,-.8,0]].map(r=>new V(...r))),s=new qt(new Ur(n,56,.3,10),Qi({color:14075035,roughness:.85}));return s.castShadow=!0,s}}]}),cubiertos:()=>{let i={area:{x:0,y:-4.7,w:4.6,h:.86},rot:90,layout:{kind:"row"}},t=(e,n)=>({type:"slab",outline:e,thickness:.22,bevel:.05,mat:"state",sideFlat:!0,pos:[n,.11,0],texScale:1.6,engrave:i});return{label:"Cubiertos infantiles",home:{polar:.74,azim:-.12},parts:[t(a_(),-4.6),t(Wh(l_),0),t(Wh(c_,h_),4.6)]}}},to={};function no(i){(i||[]).forEach(t=>{t&&t.id&&t.svg&&(to[t.id]=Object.assign({},t,{piece:Hh(t)}))})}function qh(i){let t=Kr[i](),e=[{type:"slab",outline:t.outline,thickness:t.thickness,bevel:t.bevel,mat:"state",engrave:{area:t.area,rot:0,layout:{kind:"old"}}}];return t.extras&&e.push({type:"extras",fn:t.extras}),{label:t.label,home:{polar:.82,azim:-.12},parts:e,legacy:!0}}function Il(i){return Xh[i]?Xh[i]():to[i]&&to[i].piece?to[i].piece():Kr[i]?qh(i):qh("placa")}function Yh(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var io=(i,t=0,e=1)=>i<t?t:i>e?e:i,ts=(i,t)=>{let e=document.createElement("canvas");return e.width=i,e.height=t,e},Ll={coco:{kind:"coir"},corcho:{kind:"cork"},"cuero-marron":{kind:"leather",rgb:[106,66,39]},"cuero-lila":{kind:"leather",rgb:[205,182,228]},"cuero-negro":{kind:"leather",rgb:[46,41,39]},acero:{kind:"steel"}},Dl=i=>!!(hi[i]||Ll[i]),d_={roughness:.64,metalness:0,clearcoat:.22,clearcoatRoughness:.42,normal:1.15},f_={rgb:[22,12,6],k:[.86,.9,.93],mode:"burn",burn:.82,depth:1.15,strength:3.4};function p_(i,t,e,n,s){let r=Yh(s*13+5),o=Vn(s*7+1),a=ts(i,t),l=a.getContext("2d"),c=ts(i,t),h=c.getContext("2d");l.fillStyle="#4a3622",l.fillRect(0,0,i,t),h.fillStyle="#000",h.fillRect(0,0,i,t);let f=["#a88863","#9a7b55","#b69669","#8d6e4a","#a3835a","#82633f","#b79b72","#96774f","#a58a62"],d=Math.max(i,t)/1024,u=Math.round(i*t/(5*d*d));l.lineCap="round",h.lineCap="round";for(let m=0;m<u;m++){let p=r()*i,b=r()*t,y=o(p/d*.035,b/d*.035)*2.6+1.3+(r()-.5)*(r()<.2?3.1:.95),D=(6+r()*15)*d,T=(.7+r()*.9)*d,R=(r()-.5)*1.6,w=p+Math.cos(y+R)*D*.55,v=b+Math.sin(y+R)*D*.55,M=p+Math.cos(y)*D,O=b+Math.sin(y)*D;l.globalAlpha=.5+r()*.42,l.strokeStyle=f[r()*f.length|0],l.lineWidth=T,l.beginPath(),l.moveTo(p,b),l.quadraticCurveTo(w,v,M,O),l.stroke(),h.globalAlpha=.3+r()*.5,h.strokeStyle="#fff",h.lineWidth=T,h.beginPath(),h.moveTo(p,b),h.quadraticCurveTo(w,v,M,O),h.stroke()}l.globalAlpha=1,h.globalAlpha=1;let g=h.getImageData(0,0,i,t).data,_=new Float32Array(i*t);for(let m=0,p=0;m<_.length;m++,p+=4)_[m]=g[p]/255;return{canvas:a,height:_}}function m_(i,t,e,n,s){let r=Yh(s*7+3),o=ts(i,t),a=o.getContext("2d"),l=ts(i,t),c=l.getContext("2d");a.fillStyle="#9c7048",a.fillRect(0,0,i,t),c.fillStyle="#555",c.fillRect(0,0,i,t);let h=[[176,128,80],[166,118,72],[186,138,90],[156,108,64],[172,124,78],[194,148,100]],f=Math.max(i,t)/1024,d=Math.round(i*t/(28*f*f));for(let _=0;_<d;_++){let m=r()*i,p=r()*t,b=(1.4+r()*4.2)*f,x=b*(.55+r()*.6),y=r()*Math.PI,D=h[r()*h.length|0],T=r()<.075;a.fillStyle=T?"rgba(74,46,24,.85)":`rgba(${D[0]},${D[1]},${D[2]},${.75+r()*.25})`,a.beginPath(),a.ellipse(m,p,b,x,y,0,Math.PI*2),a.fill();let R=T?.1:.45+r()*.45;c.fillStyle=`rgba(${R*255|0},${R*255|0},${R*255|0},.9)`,c.beginPath(),c.ellipse(m,p,b,x,y,0,Math.PI*2),c.fill()}let u=c.getImageData(0,0,i,t).data,g=new Float32Array(i*t);for(let _=0,m=0;_<g.length;_++,m+=4)g[_]=u[m]/255;return{canvas:o,height:g}}function g_(i,t,e,n,s,r){let o=Vn(s*11+1),a=Vn(s*3+9),l=ts(i,t),c=l.getContext("2d"),h=c.createImageData(i,t),f=h.data,d=new Float32Array(i*t),u=e/i,g=n/t;for(let _=0;_<t;_++)for(let m=0;m<i;m++){let p=m*u,b=_*g,x=Math.abs(o(p*16,b*16))*.6+Math.abs(o(p*34+5,b*34+5))*.4,y=io((x-.12)/.55),D=a(p*.5,b*.5)*.045,T=.9+y*.13+D,R=(_*i+m)*4;f[R]=io(r[0]*T,0,255),f[R+1]=io(r[1]*T,0,255),f[R+2]=io(r[2]*T,0,255),f[R+3]=255,d[_*i+m]=y}return c.putImageData(h,0,0),{canvas:l,height:d}}function __(i,t,e,n,s){let r=Vn(s*5+2),o=ts(i,t),a=o.getContext("2d"),l=a.createImageData(i,t),c=l.data,h=new Float32Array(i*t),f=e/i,d=n/t;for(let u=0;u<t;u++)for(let g=0;g<i;g++){let _=g*f,m=u*d,p=r(_*70,m*1.1)*.5+r(_*160+3,m*2.3)*.3,b=.96+p*.04,x=(u*i+g)*4;c[x]=204*b,c[x+1]=207*b,c[x+2]=211*b,c[x+3]=255,h[u*i+g]=.5+p*.12}return a.putImageData(l,0,0),{canvas:o,height:h}}function Ul(i,t,e,n,s,r=7,o={}){if(hi[i]){let c=zh(i,t,e,n,s,r,o.vertical);return Object.assign(c,{props:d_,ink:f_})}let a=Ll[i]||Ll.coco;if(a.kind==="coir"){let c=p_(t,e,n,s,r);return Object.assign(c,{props:{roughness:.97,metalness:0,clearcoat:0,clearcoatRoughness:.5,normal:2.1},ink:{rgb:[62,38,22],k:[.8,.84,.88],mode:"burn",burn:.78,depth:.25,strength:1.2}})}if(a.kind==="cork"){let c=m_(t,e,n,s,r);return Object.assign(c,{props:{roughness:.9,metalness:0,clearcoat:0,clearcoatRoughness:.5,normal:1.25},ink:{rgb:[18,12,8],k:[.9,.92,.94],mode:"burn",burn:.95,depth:.5,strength:2.4}})}if(a.kind==="leather"){let c=g_(t,e,n,s,r,a.rgb);return Object.assign(c,{props:{roughness:.58,metalness:0,clearcoat:.12,clearcoatRoughness:.5,normal:.9},ink:{rgb:[20,14,11],k:[.88,.9,.92],mode:"burn",burn:.9,depth:.6,strength:2.6}})}let l=__(t,e,n,s,r);return Object.assign(l,{props:{roughness:.18,metalness:1,clearcoat:0,clearcoatRoughness:.4,normal:.12},ink:{rgb:[238,240,242],k:[.8,.8,.8],mode:"etch",burn:.85,depth:.5,strength:2.2}})}function Ls(i,t,e,n,s,r){i.save(),i.translate(t,e),i.rotate(n),i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(s*.5,-r,s,0),i.quadraticCurveTo(s*.5,r,0,0),i.fill(),i.restore()}function x_(i,t,e,n){for(let s=0;s<5;s++){let r=s/5*Math.PI*2-Math.PI/2;i.beginPath(),i.arc(t+Math.cos(r)*n*.95,e+Math.sin(r)*n*.95,n*.62,0,Math.PI*2),i.fill()}}function y_(i,t,e){let n=Math.min(t,e)/2;i.lineCap="round",i.lineWidth=n*.014;let s=n*.9;[1,-1].forEach(r=>{let o=r===1?Math.PI*.52:Math.PI*.48,a=r===1?Math.PI*1.43:-Math.PI*.43;i.beginPath(),i.arc(0,0,s,o,a,r!==1),i.stroke();let l=19;for(let c=0;c<=l;c++){let h=c/l,f=o+(a-o)*h,d=Math.cos(f)*s,u=Math.sin(f)*s,g=r===1?f+Math.PI/2:f-Math.PI/2,_=n*(.085+.03*Math.sin(h*Math.PI)),m=n*.026;Ls(i,d,u,g+.7,_,m),Ls(i,d,u,g-.7,_,m)}[.16,.38,.62,.86].forEach((c,h)=>{let f=o+(a-o)*c,d=Math.cos(f)*s*(h%2?1.04:.96),u=Math.sin(f)*s*(h%2?1.04:.96);x_(i,d,u,n*(h===2?.03:.022))})})}function v_(i,t,e){i.lineCap="round",i.lineWidth=Math.max(1.5,e*.05);let n=7,s=e*.22;i.beginPath();for(let r=0;r<=24;r++){let o=r/24,a=-t/2+o*t,l=-Math.sin(o*Math.PI)*s+s*.35;r?i.lineTo(a,l):i.moveTo(a,l)}i.stroke();for(let r=1;r<=n;r++){let o=r/(n+1),a=-t/2+o*t,l=-Math.sin(o*Math.PI)*s+s*.35,c=-Math.cos(o*Math.PI)*s*Math.PI/t,h=Math.atan(c),f=e*(.42+.14*Math.sin(o*Math.PI)),d=e*.1;Ls(i,a,l,h-.75,f,d),Ls(i,a,l,h+.75,f,d)}Ls(i,t/2-t*.02,s*.35,0,e*.4,e*.1)}function M_(i,t,e){let n=Math.min(t,e);i.beginPath(),i.moveTo(0,n*.42),i.bezierCurveTo(-n*.62,n*.02,-n*.5,-n*.46,-n*.2,-n*.38),i.bezierCurveTo(-n*.08,-n*.34,0,-n*.24,0,-n*.2),i.bezierCurveTo(0,-n*.24,n*.08,-n*.34,n*.2,-n*.38),i.bezierCurveTo(n*.5,-n*.46,n*.62,n*.02,0,n*.42),i.fill()}function b_(i,t,e){let n=Math.min(t,e)*.48,s=n*.45;i.lineJoin="round",i.lineWidth=n*.14,i.beginPath();for(let r=0;r<10;r++){let o=-Math.PI/2+r*Math.PI/5,a=r%2?s:n,l=Math.cos(o)*a,c=Math.sin(o)*a;r?i.lineTo(l,c):i.moveTo(l,c)}i.closePath(),i.stroke()}function S_(i,t,e){let n=Math.min(t,e*1.1)*.5;i.lineJoin="round",i.lineCap="round",i.lineWidth=n*.15,i.beginPath(),i.moveTo(-n,n*.62),i.lineTo(-n*1,-n*.3),i.lineTo(-n*.45,n*.12),i.lineTo(0,-n*.62),i.lineTo(n*.45,n*.12),i.lineTo(n,-n*.3),i.lineTo(n,n*.62),i.closePath(),i.stroke(),i.beginPath(),i.moveTo(-n,n*.34),i.lineTo(n,n*.34),i.stroke(),[[-n,-n*.3],[0,-n*.62],[n,-n*.3]].forEach(([s,r])=>{i.beginPath(),i.arc(s,r-n*.12,n*.12,0,Math.PI*2),i.fill()})}function w_(i,t,e){let n=t,s=Math.min(e,t*.4),r=l=>(l-.5)*n,o=l=>(l-1)*s+s/2;i.lineCap="round",i.lineJoin="round",i.fillRect(r(.02),o(.985),r(.98)-r(.02),s*.035),i.lineWidth=s*.032,i.beginPath(),i.moveTo(r(.06),o(.98)),i.lineTo(r(.02),o(.12)),i.stroke(),i.lineWidth=s*.012;for(let l=0;l<9;l++)i.beginPath(),i.moveTo(r(.02),o(.12+l*.016)),i.lineTo(r(.12+l*.022),o(.98)),i.stroke();let a=(l,c,h,f)=>i.fillRect(r(l),o(c),h*n,f*s);a(.3,.42,.045,.56),a(.3,.3,.05,.06),a(.315,.2,.02,.1),a(.45,.28,.055,.7),a(.455,.14,.045,.14),a(.4625,.04,.03,.1),i.beginPath(),i.moveTo(r(.46),o(.04)),i.lineTo(r(.4775),o(-.04)),i.lineTo(r(.495),o(.04)),i.fill(),a(.38,.62,.05,.36),a(.52,.55,.06,.43),a(.585,.68,.05,.3),a(.64,.58,.04,.4),i.beginPath(),i.arc(r(.665),o(.58),.026*n,Math.PI,0),i.fill(),a(.775,.5,.012,.48),a(.845,.58,.012,.4),i.beginPath(),i.ellipse(r(.78),o(.42),.085*n,.1*s,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(r(.88),o(.5),.075*n,.09*s,0,0,Math.PI*2),i.fill()}function T_(i,t,e){let n=Math.min(t,e)/2;i.lineWidth=n*.03,i.beginPath(),i.arc(0,0,n*.97,0,Math.PI*2),i.stroke(),i.lineWidth=n*.014,i.beginPath(),i.arc(0,0,n*.9,0,Math.PI*2),i.stroke()}function E_(i,t,e){let n=Math.min(e,t*1.05),s=n;i.lineCap="round",i.lineJoin="round",i.lineWidth=Math.max(1.4,s*.0058);let r=-n/2,o=n/2;function a(l,c,h,f){let d=c+h*.12,u=h*.085,g=h*.108;i.beginPath(),i.ellipse(l,d,u,g,0,0,Math.PI*2),i.stroke(),i.beginPath(),f==="long"?(i.moveTo(l-u*1.25,d+g*2.1),i.bezierCurveTo(l-u*1.45,d-g*.4,l-u*1.1,d-g*1.25,l,d-g*1.15),i.bezierCurveTo(l+u*1.1,d-g*1.25,l+u*1.45,d-g*.4,l+u*1.25,d+g*2.1)):f==="short"?(i.moveTo(l-u*1.08,d+g*.1),i.bezierCurveTo(l-u*1.2,d-g*1.1,l+u*1.2,d-g*1.2,l+u*1.08,d+g*.1)):i.arc(l,d-g*.2,u*1.05,Math.PI*1.02,Math.PI*1.98),i.stroke();let _=d+g,m=h*.3;i.beginPath(),i.moveTo(l-h*.03,_),i.lineTo(l-h*.03,_+h*.05),i.moveTo(l+h*.03,_),i.lineTo(l+h*.03,_+h*.05),i.stroke(),i.beginPath(),i.moveTo(l-h*.03,_+h*.05),i.bezierCurveTo(l-m*.5,_+h*.06,l-m*.95,_+h*.08,l-m,_+h*.2),i.lineTo(l-m*1.05,o),i.moveTo(l+h*.03,_+h*.05),i.bezierCurveTo(l+m*.5,_+h*.06,l+m*.95,_+h*.08,l+m,_+h*.2),i.lineTo(l+m*1.05,o),i.stroke()}a(-s*.27,r+s*.14,s*.85,"long"),a(s*.3,r+s*.04,s*.9,"short"),a(0,r+s*.3,s*.5,"curl")}function A_(i,t){let e=[];for(let n=0;n<=t;n++){let s=n/t*(i.length-1),r=Math.min(i.length-2,Math.floor(s)),o=s-r,a=i[Math.max(0,r-1)],l=i[r],c=i[r+1],h=i[Math.min(i.length-1,r+2)],f=(d,u,g,_)=>.5*(2*u+(-d+g)*o+(2*d-5*u+4*g-_)*o*o+(-d+3*u-3*g+_)*o*o*o);e.push({x:f(a[0],l[0],c[0],h[0]),y:f(a[1],l[1],c[1],h[1])})}return e}function C_(i,t,e){let n=Math.min(t,e)/2;i.lineCap="round",i.lineJoin="round",i.lineWidth=n*.03,i.beginPath(),i.arc(0,0,n*.965,0,Math.PI*2),i.stroke(),i.save(),i.beginPath(),i.arc(0,0,n*.93,0,Math.PI*2),i.clip(),i.lineWidth=n*.01;for(let u=0;u<8;u++){let g=n*(-.02+u*.062);i.beginPath(),i.moveTo(n*(.28+u*.012),g+n*.03),i.lineTo(n*.98,g-n*.06),i.stroke()}let s=n*.5,r=n*-.5,o=n*.1;i.lineWidth=n*.015,i.beginPath(),i.arc(s,r,o,0,Math.PI*2),i.stroke(),i.lineWidth=n*.01;for(let u=0;u<16;u++){let g=u/16*Math.PI*2,_=o*1.45,m=o*(u%2?2:2.5);i.beginPath(),i.moveTo(s+Math.cos(g)*_,r+Math.sin(g)*_),i.lineTo(s+Math.cos(g)*m,r+Math.sin(g)*m),i.stroke()}let a=A_([[-1.05,.3],[-.78,.02],[-.62,-.38],[-.4,-.64],[-.05,-.74],[.24,-.6],[.32,-.38],[.2,-.26],[.08,-.34],[.14,-.43],[.22,-.4]],90),l=a.map((u,g)=>{let _=a[Math.min(a.length-1,g+1)],m=a[Math.max(0,g-1)],p=_.x-m.x,b=_.y-m.y,x=Math.hypot(p,b)||1;return{x:-b/x,y:p/x}});for(let u=0;u<15;u++)i.lineWidth=n*(u===0?.026:.011+.002*(u%3)),i.beginPath(),a.forEach((g,_)=>{let m=_/(a.length-1),p=m<.7?1:1-.82*((m-.7)/.3),b=u*.036*p*n,x=g.x*n+l[_].x*b,y=g.y*n+l[_].y*b;_?i.lineTo(x,y):i.moveTo(x,y)}),i.stroke();[[-.1,-.84,.018],[.05,-.8,.012],[.16,-.72,.014]].forEach(([u,g,_])=>{i.beginPath(),i.arc(u*n,g*n,_*n,0,Math.PI*2),i.fill()});let c=n*-.3,h=n*.34;i.lineWidth=n*.012;for(let u=0;u<4;u++)i.beginPath(),i.arc(c,h,n*(.27+u*.035),Math.PI*1.02,Math.PI*1.9),i.stroke();i.lineWidth=n*.015,i.beginPath();for(let u=0;u<=1;u+=.01){let g=u*Math.PI*5.2,_=n*(.012+.2*u),m=c+Math.cos(g)*_,p=h+Math.sin(g)*_;u?i.lineTo(m,p):i.moveTo(m,p)}i.stroke();let f=n*.24,d=n*.2;i.beginPath(),i.ellipse(f,d,n*.19,n*.15,-.3,0,Math.PI*2),i.fill(),i.save(),i.fillStyle="#000",[[-.07,.05],[.06,.06]].forEach(([u,g])=>{i.beginPath(),i.arc(f+n*u,d+n*g,n*.032,0,Math.PI*2),i.fill()}),i.restore(),[[-.07,.05],[.06,.06]].forEach(([u,g])=>{i.beginPath(),i.arc(f+n*u,d+n*g,n*.011,0,Math.PI*2),i.fill()});for(let u=0;u<8;u++){let g=u<4?-1:1,_=u%4,m=f+g*n*(.03+_*.045),p=d+n*.1,b=Math.PI/2-g*(.15+_*.3),x=n*(.4+_%2*.08),y=34;for(let D=0;D<y;D++){let T=D/y;b+=g*-1*(.02+.2*T*T)*(_%2?.9:1.1);let R=m+Math.cos(b)*x/y,w=p+Math.sin(b)*x/y;i.lineWidth=n*(.05*(1-T)+.009),i.beginPath(),i.moveTo(m,p),i.lineTo(R,w),i.stroke(),m=R,p=w}}i.restore()}var ui={laurel:{label:"Corona de ramas",draw:y_},rama:{label:"Rama",draw:v_},corazon:{label:"Corazón",draw:M_},estrella:{label:"Estrella",draw:b_},corona:{label:"Corona",draw:S_},ciudad:{label:"Ciudad",draw:w_},circulo:{label:"Marco",draw:T_},familia:{label:"Familia (ejemplo)",draw:E_},mar:{label:"Mar (ola y pulpo)",draw:C_,pictorial:!0}};function es(i,t,e,n,s,r){let o=ui[t];!o||s<2||r<2||(i.save(),i.translate(e,n),i.fillStyle="#fff",i.strokeStyle="#fff",o.draw(i,s,r),i.restore())}var Le={caveat:{family:"Caveat",weight:700,size:1.25,label:"Manuscrita"},playfair:{family:"Playfair Display",weight:700,size:1,label:"Elegante"},cabinet:{family:"Instrument Sans",weight:700,size:1,label:"Moderna"},typewriter:{family:"Special Elite",weight:400,size:.95,label:"Máquina"},vibes:{family:"Great Vibes",weight:400,size:1.5,label:"Caligrafía"},serif:{family:"Playfair Display",weight:400,size:1,label:"Serif fina"}},Jh=typeof CanvasRenderingContext2D<"u"&&"letterSpacing"in CanvasRenderingContext2D.prototype;function Hn(i,t){let e=Le[i]||Le.playfair;return!document.fonts||!document.fonts.load?Promise.resolve():document.fonts.load(e.weight+' 48px "'+e.family+'"',t||"AaÑñ@áéíóú").catch(function(){})}function Zh(i,t,e,n){if(n<1)return i.slice();let s=new Float32Array(i.length),r=new Float32Array(i.length),o=2*n+1;for(let a=0;a<e;a++){let l=0,c=a*t;for(let h=-n;h<=n;h++)l+=i[c+Math.min(t-1,Math.max(0,h))];for(let h=0;h<t;h++)s[c+h]=l/o,l+=i[c+Math.min(t-1,h+n+1)]-i[c+Math.max(0,h-n)]}for(let a=0;a<t;a++){let l=0;for(let c=-n;c<=n;c++)l+=s[Math.min(e-1,Math.max(0,c))*t+a];for(let c=0;c<e;c++)r[c*t+a]=l/o,l+=s[Math.min(e-1,c+n+1)*t+a]-s[Math.max(0,c-n)*t+a]}return r}function Ol(i,t,e,n,s,r){let o=document.createElement("canvas");o.width=i,o.height=t;let a=o.getContext("2d",{willReadFrequently:!0});a.fillStyle="#000",a.fillRect(0,0,i,t);let l=Le[s]||Le.playfair,c=n.map(b=>(b||"").trim()).filter(Boolean),h=new Float32Array(i*t);if(!c.length)return h;let f=e.w*i,d=e.h*t,u=e.x*i,g=e.y*t,_=c.length===1?[1]:[.62,.38];a.fillStyle="#fff",a.textAlign="center",a.textBaseline="alphabetic";let m=g;c.forEach((b,x)=>{let y=d*_[x],D=y*.78*l.size*(x===1?.9:1);Jh&&(a.letterSpacing=s==="cabinet"||s==="typewriter"?D*.02+"px":"0px"),a.font=l.weight+" "+D+'px "'+l.family+'"';let T=a.measureText(b),R=f*.94;T.width>R&&(D*=R/T.width,a.font=l.weight+" "+D+'px "'+l.family+'"',T=a.measureText(b));let w=T.actualBoundingBoxAscent||D*.72,v=T.actualBoundingBoxDescent||D*.2,M=m+y/2+(w-v)/2;a.fillText(b,u+f/2,M),m+=y});let p=a.getImageData(0,0,i,t).data;for(let b=0,x=0;b<h.length;b++,x+=4)h[b]=p[x]/255;return h}function Fl(i,t,e,n,s,r){let o=Object.assign({depth:1,strength:3.2,burn:.8,rgb:[22,12,6],k:[.86,.9,.93],mode:"burn"},r||{}),a=Zh(s,i,t,Math.max(1,Math.round(i/700))),l=Zh(s,i,t,Math.max(3,Math.round(i/170))),c=o.mode==="etch",h=document.createElement("canvas");h.width=i,h.height=t;let f=h.getContext("2d"),d=f.createImageData(i,t),u=e.data,g=d.data,_=new Float32Array(i*t);for(let D=0,T=0;D<a.length;D++,T+=4){let R=a[D],w=Math.max(0,l[D]-R)*.55,v=Math.min(1,R*o.burn+w*.35);for(let M=0;M<3;M++)g[T+M]=c?u[T+M]*(1-v*o.k[M])+o.rgb[M]*v*o.k[M]:u[T+M]*(1-v*o.k[M])+o.rgb[M]*v*.2;g[T+3]=255,_[D]=n[D]*.35-R*o.depth}f.putImageData(d,0,0);let m=document.createElement("canvas");m.width=i,m.height=t;let p=m.getContext("2d"),b=p.createImageData(i,t),x=b.data,y=o.strength;for(let D=0;D<t;D++){let T=Math.max(0,D-1)*i,R=Math.min(t-1,D+1)*i,w=D*i;for(let v=0;v<i;v++){let M=Math.max(0,v-1),O=Math.min(i-1,v+1),N=(_[w+M]-_[w+O])*y,H=(_[R+v]-_[T+v])*y,q=1/Math.sqrt(N*N+H*H+1);N*=q,H*=q;let j=(w+v)*4;x[j]=(N*.5+.5)*255,x[j+1]=(H*.5+.5)*255,x[j+2]=(q*.5+.5)*255,x[j+3]=255}}return p.putImageData(b,0,0),{albedo:h,normal:m}}function ns(i,t,e,n,s,r,o,a,l,c){c=c||{},c.upper&&(t=t.toUpperCase());let h=o*.78*e.size*(l||1),f=a==="cabinet"||a==="typewriter",d=c.track!=null?c.track:f?.02:0,u=()=>{Jh&&(i.letterSpacing=h*d+"px"),i.font=e.weight+" "+h+'px "'+e.family+'"'};u();let g=i.measureText(t);g.width>r&&(h*=r/g.width,u(),g=i.measureText(t));let _=g.actualBoundingBoxAscent||h*.72,m=g.actualBoundingBoxDescent||h*.2;i.textAlign="center",i.textBaseline="alphabetic",i.fillText(t,n,s+(_-m)/2)}function R_(i,t,e,n,s,r,o,a){let l=String(t).split(/\n/);i.textAlign="center",i.textBaseline="alphabetic";let c=Math.min(o*.34,r*.16)*e.size*(a||1),h=[],f=0;for(let u=0;u<40&&(i.font=e.weight+" "+c+'px "'+e.family+'"',h=[],l.forEach(g=>{let _="";g.split(/\s+/).forEach(m=>{let p=_?_+" "+m:m;_&&i.measureText(p).width>r?(h.push(_),_=m):_=p}),h.push(_)}),f=c*1.28,!(h.length*f<=o&&h.every(g=>i.measureText(g).width<=r*1.001)||(c*=.93,c<6)));u++);let d=h.length*f;h.forEach((u,g)=>i.fillText(u,n,s-d/2+f*(g+.78)))}function Nl(i,t,e,n,s,r){let o=Math.min(s/t.width,r/t.height),a=t.width*o,l=t.height*o;i.save(),i.globalCompositeOperation="lighter",i.drawImage(t,e-a/2,n-l/2,a,l),i.restore()}function Bl(i,t,e,n,s){let r=document.createElement("canvas");r.width=i,r.height=t;let o=r.getContext("2d",{willReadFrequently:!0});o.fillStyle="#000",o.fillRect(0,0,i,t);let a=e.area,l=a.w*i,c=a.h*t,h=e.layout||{kind:"stack"},f=Le[s]||Le.playfair,d=Le[h.bodyFont]||f,u=(n.lines||[]).map(w=>(w||"").trim()),g=u.map((w,v)=>w?v:-1).filter(w=>w>=0),_=n.motif||"",m=n.img||null,p=!!(m||_);o.save(),o.translate((a.x+a.w/2)*i,(a.y+a.h/2)*t),o.rotate(-((e.rot||0)*Math.PI)/180),o.fillStyle="#fff",o.strokeStyle="#fff";let b=(w,v,M,O)=>{m?Nl(o,m,w,v,M,O):_&&es(o,_,w,v,M,O)},x=w=>w===0?f:d,y=w=>w===0?s:h.bodyFont||s,D=h.kind||"stack";if(D==="stack"){let w=p?(g.length?h.motifH==null?.42:h.motifH:1)*c:0,v=p&&g.length?c*.04:0;b(0,-c/2+w/2,l*(h.motifW||.92),w);let M=c-w-v,O=-c/2+w+v,N=h.shares||{1:[1],2:[.62,.38],3:[.5,.25,.25]}[g.length]||[1],H=g.reduce((j,J,nt)=>j+(N[nt]||.3),0)||1,q=O;g.forEach((j,J)=>{let nt=M*(N[J]||.3)/H;ns(o,u[j],x(J===0?0:1),0,q+nt/2,l*(h.textW||.94),nt,y(J===0?0:1),J===1?.9:1,{upper:h.upper,track:h.track}),q+=nt})}else if(D==="wreath"){let w=Math.min(l,c);if(m)Nl(o,m,0,u[0]?-w*.07:0,w*.8,w*(u[0]?.7:.8)),u[0]&&ns(o,u[0],f,0,w*.4,w*.7,w*.16,s,1);else if(_&&ui[_]&&ui[_].pictorial){let v=u[0];es(o,_,0,v?-w*.07:0,v?w*.82:w,v?w*.82:w),v&&ns(o,v,f,0,w*.405,w*.6,w*.14,s,1)}else{_&&es(o,_,0,0,w,w);let v=w*(h.inner||.62),M=h.shares||[.5,.26,.24],O=-v/2;u.forEach((N,H)=>{let q=v*M[H];N&&ns(o,N,x(H),0,O+q/2,v*(H===0?1.06:.96),q,y(H),H===0?1:.9),O+=q})}}else if(D==="column"){let w=c*(h.motifH||.075),v=p?w*1.5:0;_&&!m?(b(0,-c/2+w/2,l*.58,w),o.save(),o.scale(1,-1),b(0,-c/2+w/2,l*.58,w),o.restore()):m&&Nl(o,m,0,0,l*.9,c*.5);let M=c-v*2,O=h.shares||[.2,.5,.2],N=(M-O.reduce((q,j)=>q+j,0)*M)/2,H=-c/2+v;O.forEach((q,j)=>{let J=M*q;u[j]&&(h.wrap&&h.wrap[j]?R_(o,u[j],x(j),0,H+J/2,l*.92,J,h.paraK):ns(o,u[j],x(j),0,H+J/2,l*.94,J,y(j),j===0?1:.9)),H+=J+N})}else if(D==="row")if(p&&!g.length)b(0,0,l*.96,c*.96);else{let w=p?Math.min(c*.95,l*.42):0,v=p?w*1.25:0,M=l-v;p&&b(-l/2+w/2,0,w,w);let O=h.shares||{1:[1],2:[.62,.38]}[g.length]||[.5,.25,.25],N=g.reduce((q,j,J)=>q+(O[J]||.3),0)||1,H=-c/2;g.forEach((q,j)=>{let J=c*(O[j]||.3)/N;ns(o,u[q],x(j===0?0:1),v/2,H+J/2,M*.96,J*.98,y(j===0?0:1),1),H+=J})}o.restore();let T=o.getImageData(0,0,i,t).data,R=new Float32Array(i*t);for(let w=0,v=0;w<R.length;w++,v+=4)R[w]=T[v]/255;return R}var $h="g3d-oriented",P_=()=>!!(window.matchMedia&&window.matchMedia("(hover:none)").matches);function so(){try{return window.sessionStorage.getItem($h)==="1"}catch{return!1}}function ro(){try{window.sessionStorage.setItem($h,"1")}catch{}}function oo(){let i=document.createElement("span");return i.className="g3d-orbit",i.setAttribute("aria-hidden","true"),i.innerHTML='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 12h17"/><path d="M7.5 7.8 3.3 12l4.2 4.2"/><path d="M16.5 7.8l4.2 4.2-4.2 4.2"/><circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/></svg><span></span>',i.lastChild.textContent=P_()?"Desliza para girar":"Arrastra para girar",i}function ao(i){return i<=0||i>=1?0:.6*Math.sin(2*Math.PI*i)*Math.sin(Math.PI*i)}var lo=2e3;var I_=i=>1-Math.pow(1-i,3);function Ds(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}function Kh(i){let t=i.outline.getPoints(48),e=1e9,n=1e9,s=-1e9,r=-1e9;t.forEach(c=>{e=Math.min(e,c.x),s=Math.max(s,c.x),n=Math.min(n,c.y),r=Math.max(r,c.y)});let o=s-e,a=r-n,l=i.engrave&&i.engrave.area;return{W:o,H:a,minX:e,minY:n,pts:t,area:l?{x:(l.x-l.w/2-e)/o,y:1-(l.y+l.h/2-n)/a,w:l.w/o,h:l.h/a}:null}}function L_(i){let t=Il(i),e=t.parts.find(n=>n.type==="slab"&&n.engrave)||t.parts.find(n=>n.type==="slab");return Object.assign({piece:t,part:e},Kh(e))}function jh(i,t,e){let n=e/Math.max(i,t);return[Math.max(64,Math.round(i*n)),Math.max(64,Math.round(t*n))]}function D_(i){let t=i.thickness,e=i.bevel,n=new Lr(i.outline,{depth:t-2*e,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelOffset:-e,bevelSegments:4,curveSegments:40,steps:1});n.computeBoundingBox();let s=n.boundingBox,r=n.attributes.position,o=n.attributes.uv;for(let a=0;a<r.count;a++)o.setXY(a,(r.getX(a)-s.min.x)/(s.max.x-s.min.x),(r.getY(a)-s.min.y)/(s.max.y-s.min.y));if(n=Fh(n,.62),i.sideFlat){let a=n.attributes.normal;for(let l=0;l<r.count;l++)Math.abs(a.getZ(l))<.35&&o.setXY(l,.04,.04)}return i.upright?n.translate(0,0,-t/2+e):(n.rotateX(-Math.PI/2),n.translate(0,-t/2+e,0)),n}function Qh(i){try{let t=getComputedStyle(i.stage).backgroundColor;if(t&&t!=="transparent"&&t!=="rgba(0, 0, 0, 0)")return t}catch{}return typeof i.o.bg=="string"&&i.o.bg||"#e4e0da"}var Gn=class{constructor(t,e){this.stage=t,this.o=Object.assign({shape:"placa",wood:"roble",font:"playfair",text:"",text2:"",bg:"#e4e0da",label:"",reduced:!1,maxTex:1024},e||{}),this.state={shape:this.o.shape,wood:this.o.wood,font:this.o.font,text:this.o.text,text2:this.o.text2,text3:this.o.text3||"",motif:this.o.motif||"",img:this.o.img||null,ghost:!!this.o.ghost},this.cache=new Map,this.timer=0,this.raf=0,this.anim=null,this.dead=!1,this.ready=!1}async init(){let t=this.stage;this.renderer=new wr({antialias:!0,alpha:!0,powerPreference:"high-performance"});let e=this.renderer;e.setClearColor(0,0),e.toneMapping=gl,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=ml,this.dpr=Math.min(window.devicePixelRatio||1,2),e.setPixelRatio(this.dpr);let n=this.canvas=e.domElement;n.className="g3d__canvas",n.tabIndex=0,n.setAttribute("role","img"),n.style.touchAction="pan-y",t.appendChild(n),this.scene=new Gi;let s=new Hi(e);this.scene.environment=s.fromScene(new $r,.04).texture,this.scene.environmentIntensity=.62,s.dispose(),this.camera=new be(28,1,1,400),this.key=new Vr(16773598,2),this.key.castShadow=!0,this.key.shadow.mapSize.set(1024,1024),this.key.shadow.radius=5,this.key.shadow.bias=-4e-4,this.scene.add(this.key,this.key.target),this.ground=new qt(new Vi(160,160),new Nr({opacity:.26})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.scene.add(this.ground),this.group=new Ve,this.scene.add(this.group),this.controls=new Jr(this.camera,n);let r=this.controls;return r.enableDamping=!0,r.dampingFactor=.09,r.enablePan=!1,r.enableZoom=!1,r.rotateSpeed=.75,r.minPolarAngle=.12,r.maxPolarAngle=1.48,r.addEventListener("start",()=>{this.anim=null,this.interacting=!0,this.loop()}),r.addEventListener("end",()=>{this.interacting=!1}),r.addEventListener("change",()=>this.render()),n.addEventListener("keydown",o=>this.onKey(o)),n.addEventListener("webglcontextlost",o=>{o.preventDefault(),this.stage.dispatchEvent(new CustomEvent("g3d:lost"))}),n.addEventListener("webglcontextrestored",()=>{this.build(!0)}),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),await Hn(this.state.font,this.state.text||"Aa"),await this.build(!1),this.resize(),this.intro(),this.ready=!0,this.updateLabel(),this.orbitHint(),this}orbitHint(){if(so())return;let t=oo();this.stage.appendChild(t);let e=0,n=()=>{!t.isConnected||t.classList.contains("is-off")||(clearTimeout(e),this.teasing=!1,ro(),t.classList.add("is-off"),setTimeout(()=>t.remove(),700))};this.controls.addEventListener("start",n),this.canvas.addEventListener("keydown",s=>{/^Arrow/.test(s.key)&&n()}),this.o.reduced||(e=setTimeout(()=>this.tease(),1700))}tease(){if(this.dead||this.interacting||this.anim||this.o.reduced||document.hidden)return;let t=this.currentPose(),e=performance.now();this.teasing=!0;let n=s=>{if(this.dead||!this.teasing||this.interacting){this.teasing=!1;return}let r=Math.min(1,(s-e)/lo);this.setPose(t.polar,t.azim+ao(r),t.dist),this.render(),r<1?requestAnimationFrame(n):this.teasing=!1};requestAnimationFrame(n)}async build(){let t=this.piece=Il(this.state.shape);this.group.children.slice().forEach(h=>{this.group.remove(h),h.traverse(f=>{f.geometry&&f.geometry.dispose()})}),(this.slabs||[]).forEach(h=>{["map","normalMap"].forEach(f=>h.mat[f]&&h.mat[f].dispose()),h.mat.dispose()});let e=this.rig=new Ve;this.slabs=[],t.parts.forEach((h,f)=>{if(h.type==="slab"){let d=Kh(h),u=D_(h),g=new qi({roughness:.64,metalness:0,clearcoat:.22,clearcoatRoughness:.42,normalScale:new ht(1.15,1.15)}),_=new qt(u,g);_.castShadow=!0,_.receiveShadow=!0;let m=h.pos||[0,h.upright?0:h.thickness/2,0];_.position.set(m[0],m[1],m[2]),h.rotX&&(_.rotation.x=h.rotX),e.add(_),this.slabs.push({part:h,idx:f,mesh:_,mat:g,W:d.W,H:d.H,minX:d.minX,minY:d.minY,area:d.area})}else if(h.type==="mesh"){let d=h.build(),u=h.pos||[0,0,0];d.position.set(u[0],u[1],u[2]),d.traverse(g=>{g.isMesh&&(g.castShadow=g.castShadow||!g.material.transparent,g.receiveShadow=!0)}),e.add(d)}else h.type==="extras"&&h.fn(e)}),this.group.add(e);let n=new Tn().setFromObject(e),s=n.getCenter(new V),r=n.getSize(new V);e.position.set(-s.x,-n.min.y,-s.z),this.ext=r,this.T=r.y;let o=this.slabs.find(h=>h.part.engrave)||this.slabs[0];this.info={W:r.x,H:r.z,T:r.y,piece:t,main:o};let a=Math.max(r.x,r.z,r.y*.8);this.key.position.set(-a*.55,a*.82+r.y*.3,a*.62),this.key.target.position.set(0,r.y/2,0);let l=this.key.shadow.camera,c=a*.9;l.left=-c,l.right=c,l.top=c,l.bottom=-c,l.near=1,l.far=a*4+r.y,l.updateProjectionMatrix(),this.frame(),await this.paint(!0)}frame(){let t=this.ext,e=this.camera,n=this.piece.home||{polar:.82,azim:-.12},s=e.aspect||1,r=Math.tan(e.fov*Math.PI/360),o=r*s,a=n.polar,l=n.azim,c=t.x*Math.cos(l)+t.z*Math.abs(Math.sin(l)),h=t.z*Math.cos(a)*.92+t.y*Math.sin(a)+Math.sin(a)*c*.04,f=c/2*1.24/o,d=h/2*1.4/r;this.dist=Math.max(f,d),this.home={polar:a,azim:l,dist:this.dist},this.target=new V(0,t.y/2,0),this.controls.target.copy(this.target),this.setPose(this.home.polar,this.home.azim,this.home.dist),this.ground.position.y=0}setPose(t,e,n){let s=this.target;this.camera.position.set(s.x+n*Math.sin(t)*Math.sin(e),s.y+n*Math.cos(t),s.z+n*Math.sin(t)*Math.cos(e)),this.camera.lookAt(s),this.controls.update()}currentPose(){let t=this.camera.position.clone().sub(this.target),e=t.length();return{polar:Math.acos(t.y/e),azim:Math.atan2(t.x,t.z),dist:e}}repaint(){return clearTimeout(this.timer),this.flush()}async paint(){let t=this.state,e=new Set([t.font]);if(this.slabs.forEach(r=>{let o=r.part.engrave&&r.part.engrave.layout;o&&o.bodyFont&&e.add(o.bodyFont)}),await Promise.all([...e].map(r=>Hn(r,t.text+t.text2+t.text3||"Aa"))),this.dead)return;let n=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),s=(r,o)=>{let a=new Tr(r);return a.colorSpace=o?Me:nn,a.anisotropy=n,a.minFilter=xn,a.magFilter=ze,a.generateMipmaps=!0,a.wrapS=a.wrapT=_n,a};this.slabs.forEach(r=>{let o=r.part,a=o.engrave,l=o.mat==="state"?t.wood:o.mat;Dl(l)||(l="roble");let[c,h]=jh(r.W,r.H,Math.round(this.o.maxTex*(o.texScale||1))),f=l+"|"+t.shape+"|"+r.idx+"|"+c,d=this.cache.get(f);if(!d){let x=Ul(l,c,h,r.W,r.H,7+r.idx*3,{vertical:o.vertical});d={data:x.canvas.getContext("2d").getImageData(0,0,c,h),height:x.height,props:x.props,ink:x.ink},this.cache.set(f,d),this.cache.size>10&&this.cache.delete(this.cache.keys().next().value)}let u=new Float32Array(c*h);a&&(a.layout&&a.layout.kind==="old"?u=Ol(c,h,r.area,[t.text,t.text2],t.font):u=Bl(c,h,{area:r.area,rot:a.rot,layout:a.layout},{lines:[t.text,t.text2,t.text3],motif:t.motif,img:t.img},t.font));let g=Object.assign({},d.ink);t.ghost&&(g.burn*=.36,g.depth*=.26);let{albedo:_,normal:m}=Fl(c,h,d.data,d.height,u,g),p=r.mat,b=d.props;p.map&&p.map.dispose(),p.normalMap&&p.normalMap.dispose(),p.map=s(_,!0),p.normalMap=s(m,!1),p.roughness=b.roughness,p.metalness=b.metalness,p.clearcoat=b.clearcoat,p.clearcoatRoughness=b.clearcoatRoughness,p.normalScale.set(b.normal,b.normal),p.needsUpdate=!0,r===this.info.main&&(this.flatCanvas=_)}),this.render()}set(t){let e=this.state,n=e.shape;Object.assign(e,t),"shape"in t&&t.shape!==n&&(this.dirtyShape=!0),clearTimeout(this.timer),this.timer=setTimeout(()=>this.flush(),this.dirtyShape?0:80),this.updateLabel()}flush(){let t=async()=>{this.dead||(this.dirtyShape?(this.dirtyShape=!1,await this.build()):await this.paint())};return this.job=(this.job||Promise.resolve()).then(t,t),this.job}apply(t){let e=this.state,n=e.shape;return Object.assign(e,t),"shape"in t&&t.shape!==n&&(this.dirtyShape=!0),clearTimeout(this.timer),this.updateLabel(),this.flush()}updateLabel(){let t=this.state;this.canvas.setAttribute("aria-label",(this.o.label||"Pieza")+(t.text&&!t.ghost?" con el texto «"+t.text+(t.text2?" · "+t.text2:"")+"»":"")+". Vista 3D: arrastra o usa las flechas para girarla.")}tween(t,e){if(this.o.reduced){this.setPose(t.polar,t.azim,t.dist),this.render();return}let n=this.currentPose(),s=performance.now();this.anim={from:n,to:t,t0:s,ms:e},this.loop()}intro(){this.o.reduced||(this.setPose(this.home.polar-.16,this.home.azim-.55,this.home.dist*1.12),this.tween(this.home,1e3))}view(t){let e=this.home;t==="detail"?this.tween({polar:.42,azim:-.06,dist:e.dist*.62},520):this.tween(e,520)}onKey(t){let e=this.currentPose(),n=t.key,s=0,r=0;if(n==="ArrowLeft")s=-.18;else if(n==="ArrowRight")s=.18;else if(n==="ArrowUp")r=-.12;else if(n==="ArrowDown")r=.12;else return;t.preventDefault(),this.tween({polar:Math.min(1.48,Math.max(.12,e.polar+r)),azim:e.azim+s,dist:e.dist},160)}loop(){if(this.raf||this.dead)return;let t=e=>{this.raf=0;let n=!1;if(this.anim){let s=this.anim,r=Math.min(1,(e-s.t0)/s.ms),o=I_(r),a=s.to.azim-s.from.azim;this.setPose(s.from.polar+(s.to.polar-s.from.polar)*o,s.from.azim+a*o,s.from.dist+(s.to.dist-s.from.dist)*o),r>=1?this.anim=null:n=!0}if(this.interacting||this.controls.enableDamping){let s=this.camera.position.clone();this.controls.update(),(this.interacting||s.distanceToSquared(this.camera.position)>1e-9)&&(n=!0)}this.render(),n&&(this.raf=requestAnimationFrame(t))};this.raf=requestAnimationFrame(t)}resize(){let t=this.stage.clientWidth,e=this.stage.clientHeight;if(!(!t||!e)){if(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.info&&!this.anim&&!this.interacting){let n=this.currentPose(),s=n.dist/(this.home?this.home.dist:n.dist);this.frame(),this.ready&&Math.abs(s-1)>.01&&this.setPose(this.home.polar,this.home.azim,this.home.dist)}this.render()}}render(){this.dead||!this.renderer||this.renderer.render(this.scene,this.camera)}snapshot(t){t=t||720;let e=this.renderer,n=this.camera,s={w:this.canvas.width,h:this.canvas.height,aspect:n.aspect,pose:this.currentPose(),dpr:e.getPixelRatio()};this.anim=null,e.setPixelRatio(1),e.setSize(t,t,!1),n.aspect=1,n.updateProjectionMatrix();let r=this.home;this.frame(),this.home=r,this.setPose(r.polar,r.azim,this.dist*1),e.render(this.scene,n);let o=document.createElement("canvas");o.width=t,o.height=t;let a=o.getContext("2d");return a.fillStyle=Qh(this),a.fillRect(0,0,t,t),a.drawImage(this.canvas,0,0,t,t),e.setPixelRatio(s.dpr),this.resize(),this.setPose(s.pose.polar,s.pose.azim,s.pose.dist),this.render(),new Promise(l=>o.toBlob(c=>l(c),"image/jpeg",.86))}dispose(){this.dead=!0,clearTimeout(this.timer),cancelAnimationFrame(this.raf),this.ro&&this.ro.disconnect(),this.controls&&this.controls.dispose(),(this.slabs||[]).forEach(t=>{["map","normalMap"].forEach(e=>t.mat[e]&&t.mat[e].dispose()),t.mat.dispose(),t.mesh.geometry.dispose()}),this.renderer&&(this.renderer.dispose(),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas))}},is=class{constructor(t,e){this.stage=t,this.o=Object.assign({shape:"placa",wood:"roble",font:"playfair",text:"",text2:"",bg:"#e4e0da",label:"",maxTex:768},e||{}),this.state={shape:this.o.shape,wood:this.o.wood,font:this.o.font,text:this.o.text,text2:this.o.text2,text3:this.o.text3||"",motif:this.o.motif||"",img:this.o.img||null,ghost:!!this.o.ghost},this.timer=0}async init(){let t=this.canvas=document.createElement("canvas");return t.className="g3d__canvas g3d__canvas--flat",t.setAttribute("role","img"),this.stage.appendChild(t),await this.draw(),this}set(t){Object.assign(this.state,t),clearTimeout(this.timer),this.timer=setTimeout(()=>this.draw(),80)}repaint(){return clearTimeout(this.timer),this.draw()}async draw(){let t=this.state,e=L_(t.shape),{W:n,H:s,area:r,pts:o,part:a}=e,[l,c]=jh(n,s,this.o.maxTex),h=a.engrave;await Promise.all([t.font,h&&h.layout&&h.layout.bodyFont].filter(Boolean).map(R=>Hn(R,t.text+t.text2+t.text3||"Aa")));let f=a.mat==="state"?t.wood:a.mat;Dl(f)||(f="roble");let d=Ul(f,l,c,n,s,7,{vertical:a.vertical}),u=new Float32Array(l*c);h&&h.layout&&h.layout.kind==="old"?u=Ol(l,c,r,[t.text,t.text2],t.font):h&&(u=Bl(l,c,{area:r,rot:h.rot,layout:h.layout},{lines:[t.text,t.text2,t.text3],motif:t.motif,img:t.img},t.font));let g=Object.assign({},d.ink);t.ghost&&(g.burn*=.34);let{albedo:_}=Fl(l,c,d.canvas.getContext("2d").getImageData(0,0,l,c),d.height,u,g),m=720,p=60,b=(m-p*2)/Math.max(n,s);this.canvas.width=this.canvas.height=m;let x=this.canvas.getContext("2d");x.clearRect(0,0,m,m);let y=m/2-(e.minX+n/2)*b,D=m/2+(e.minY+s/2)*b,T=new Path2D;o.forEach((R,w)=>{let v=y+R.x*b,M=D-R.y*b;w?T.lineTo(v,M):T.moveTo(v,M)}),T.closePath(),x.save(),x.shadowColor="rgba(40,24,10,.35)",x.shadowBlur=24,x.shadowOffsetY=12,x.fillStyle="#000",x.fill(T),x.restore(),x.save(),x.clip(T),x.drawImage(_,y+e.minX*b,D-(e.minY+s)*b,n*b,s*b),x.restore(),this.canvas.setAttribute("aria-label",(this.o.label||"Pieza")+(t.text&&!t.ghost?" con el texto «"+t.text+"»":""))}snapshot(t){t=t||720;let e=document.createElement("canvas");e.width=e.height=t;let n=e.getContext("2d");return n.fillStyle=Qh(this),n.fillRect(0,0,t,t),n.drawImage(this.canvas,0,0,t,t),new Promise(s=>e.toBlob(r=>s(r),"image/jpeg",.86))}view(){}dispose(){clearTimeout(this.timer),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};function De(i,t){return i=String(i||"").normalize("NFC").replace(/[^\p{L}\p{N} @._\-&'’",:;!¡?¿+#\/()%·♥]/gu,"").replace(/\s+/g," ").trimStart(),i.slice(0,t||24)}var co={placa:["Marta & Leo","Córdoba 2026"],llavero:["Nora",""],posavasos:["Casa Pepe",""],corazon:["Lucía","siempre"],tabla:["Cocina de Ana","desde 1987"],felpudo:["Bienvenidos a","casa de Marta","","ciudad"],lineafina:["Feliz día de la madre","","","familia"],posacorcho:["","","","mar"],llaverocuero:["Nora","","","estrella"],vela:["Gracias","Helena","6 de marzo de 2026","laurel"],cajavino:["Papá","Gracias por guiarme y estar a mi lado en todos los grandes momentos de mi vida. Te quiero","Daniel & María · 2026","rama"],cubiertos:["Salma","","","corona"]},kl={vela:1};function tu(i,t){let e=["","",""];return t&&(e[kl[i]||0]=t),e}function eu(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function U_(i){return new Promise((t,e)=>{let n=URL.createObjectURL(i),s=new Image;s.onload=()=>{URL.revokeObjectURL(n),t(s)},s.onerror=()=>{URL.revokeObjectURL(n),e(new Error("No se ha podido leer la imagen."))},s.src=n})}function N_(i,t,e,n){n=Math.max(1,Math.round(n));let s=new Float32Array(i.length),r=new Float32Array(i.length),o=(a,l,c)=>{let h=c?t:e,f=c?e:t;for(let d=0;d<f;d++){let u=0,g=_=>c?d*t+Math.min(h-1,Math.max(0,_)):Math.min(h-1,Math.max(0,_))*t+d;for(let _=-n;_<=n;_++)u+=a[g(_)];for(let _=0;_<h;_++)l[c?d*t+_:_*t+d]=u/(2*n+1),u+=a[g(_+n+1)]-a[g(_-n)]}};return o(i,s,!0),o(s,r,!1),o(r,s,!0),o(s,r,!1),r}var zl=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function O_(i,t){let e=0;for(let a=0;a<256;a++)e+=a*i[a];let n=0,s=0,r=0,o=128;for(let a=0;a<256;a++){if(s+=i[a],!s)continue;let l=t-s;if(!l)break;n+=a*i[a];let c=n/s,h=(e-n)/l,f=s*l*(c-h)*(c-h);f>r&&(r=f,o=a)}return o}async function ho(i,t){let e=await U_(i),n=Math.min(1,720/Math.max(e.naturalWidth,e.naturalHeight)),s=Math.max(8,Math.round(e.naturalWidth*n)),r=Math.max(8,Math.round(e.naturalHeight*n)),o=eu(s,r),a=o.getContext("2d",{willReadFrequently:!0});a.fillStyle="#fff",a.fillRect(0,0,s,r),a.drawImage(e,0,0,s,r);let l=a.getImageData(0,0,s,r).data,c=new Float32Array(s*r);for(let T=0,R=0;T<c.length;T++,R+=4)c[T]=(.2126*l[R]+.7152*l[R+1]+.0722*l[R+2])/255;let h=new Float32Array(s*r);if(t==="linea"){let T=N_(c,s,r,Math.max(2,Math.min(s,r)*.012));for(let R=0;R<h.length;R++){let w=Math.min(1,c[R]/Math.max(.02,T[R]));h[R]=zl(.9,.55,w)}}else{let T=new Uint32Array(256);for(let N=0;N<c.length;N++)T[Math.min(255,Math.round(c[N]*255))]++;let R=O_(T,c.length)/255,w=0,v=0;for(let N=0;N<s;N++)w+=c[N]+c[(r-1)*s+N],v+=2;for(let N=0;N<r;N++)w+=c[N*s]+c[N*s+s-1],v+=2;let M=w/v<R,O=.07;for(let N=0;N<h.length;N++)h[N]=M?zl(R-O,R+O,c[N]):zl(R+O,R-O,c[N])}let f=s,d=r,u=-1,g=-1;for(let T=0;T<r;T++)for(let R=0;R<s;R++)h[T*s+R]>.25&&(R<f&&(f=R),R>u&&(u=R),T<d&&(d=T),T>g&&(g=T));if(u<f||g<d)throw new Error("No se ve ningún dibujo en la imagen. Prueba con una con más contraste.");let _=Math.round(Math.max(u-f,g-d)*.04)+2;f=Math.max(0,f-_),d=Math.max(0,d-_),u=Math.min(s-1,u+_),g=Math.min(r-1,g+_);let m=u-f+1,p=g-d+1,b=eu(m,p),x=b.getContext("2d"),y=x.createImageData(m,p),D=y.data;for(let T=0;T<p;T++)for(let R=0;R<m;R++){let w=Math.round(255*h[(T+d)*s+R+f]),v=(T*m+R)*4;D[v]=D[v+1]=D[v+2]=w,D[v+3]=255}return x.putImageData(y,0,0),b}var uo=12,nu=3,F_=6*1024*1024,B_={laurel:1,circulo:1,corazon:.9,estrella:1,corona:.75,rama:.4,ciudad:.5,familia:.7},iu={text:[.04,.9],motif:[.06,1],img:[.06,1]},Wn=(i,t,e)=>Math.min(e,Math.max(t,i)),fo=i=>Math.round(i*1e4)/1e4;function Zt(i,t,e){let n=document.createElement(i);for(let s in t||{}){let r=t[s];r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s.slice(0,2)==="on"?n.addEventListener(s.slice(2),r):n.setAttribute(s,r===!0?"":r))}return(e||[]).forEach(s=>{s&&n.appendChild(typeof s=="string"?document.createTextNode(s):s)}),n}var ss=(i,t)=>{let e=document.createElement("canvas");return e.width=Math.max(1,Math.round(i)),e.height=Math.max(1,Math.round(t)),e};function k_(i){return new Promise(t=>{if(!i)return t(null);let e=new Image;e.onload=()=>t(e),e.onerror=()=>t(null),e.src=i})}function z_(i,t){return new Promise((e,n)=>{let s=URL.createObjectURL(i),r=new Image;r.onload=()=>{URL.revokeObjectURL(s);let o=Math.min(1,t/Math.max(r.naturalWidth,r.naturalHeight)),a=ss(r.naturalWidth*o,r.naturalHeight*o);a.getContext("2d").drawImage(r,0,0,a.width,a.height),e(a)},r.onerror=()=>{URL.revokeObjectURL(s),n(new Error("No se ha podido leer la imagen."))},r.src=s})}function V_(i){let t=ss(i.width,i.height),e=i.getContext("2d").getImageData(0,0,i.width,i.height),n=t.getContext("2d"),s=n.createImageData(i.width,i.height),r=s.data;for(let o=0;o<r.length;o+=4)r[o]=r[o+1]=r[o+2]=255,r[o+3]=e.data[o];return n.putImageData(s,0,0),t}function su(i,t){let e=ss(i.width,i.height),n=e.getContext("2d");return n.drawImage(i,0,0),n.globalCompositeOperation="source-in",n.fillStyle=t,n.fillRect(0,0,e.width,e.height),e}async function ru(i,t){let e=t.object,n=e.area,s=i.querySelector("[data-g3d-stage]"),r=i.querySelector("[data-g3d2-ui]"),o=e.print==="mono",a=e.colors&&e.colors.length?e.colors:["#1c1a17"],l=(t.fonts2d&&t.fonts2d.length?t.fonts2d:Object.keys(Le).map(C=>({id:C,label:Le[C].label}))).filter(C=>Le[C.id]),c=(t.motifs2d||[]).filter(C=>ui[C.id]),h=e.allow||{},f=t.maxChars||30,d="g"+Math.random().toString(36).slice(2,7),u=await k_(e.base);i.setAttribute("data-g3d2","");let g=[],_=null,m=0,p=0,b="",x=new Set,y=C=>g.find(X=>X.id===C)||null,D=new Map,T=ss(8,8).getContext("2d"),R=(C,X)=>Object.assign({id:++m,t:C,x:.5,y:.5,r:0,c:a[0]},X);function w(C){let X=u?u.naturalWidth/u.naturalHeight:1,xt=.04,ut=C*(1-2*xt),pt=ut/X;pt>C*(1-2*xt)&&(pt=C*(1-2*xt),ut=pt*X);let _t={x:(C-ut)/2,y:(C-pt)/2,w:ut,h:pt};return{base:_t,area:{x:_t.x+n.x*ut,y:_t.y+n.y*pt,w:n.w*ut,h:n.h*pt}}}function v(C,X){let xt=Le[C.f]||Le.playfair;return xt.weight+" "+X+'px "'+xt.family+'"'}function M(C,X){if(C.t==="text"){let ut=C.sz*X.h;return T.font=v(C,ut),{w:Math.max(ut*.8,T.measureText(C.s||"").width),h:ut*1.2,px:ut}}let xt=C.sz*X.w;return{w:xt,h:C.t==="motif"?xt*(B_[C.m]||.8):xt/(C.ar||1)}}function O(C,X,xt){let ut=C.m+"|"+C.c+"|"+Math.round(X)+"x"+Math.round(xt),pt=D.get(ut);if(!pt){let _t=ss(X,xt);es(_t.getContext("2d"),C.m,_t.width/2,_t.height/2,_t.width,_t.height),pt=su(_t,C.c),D.size>24&&D.clear(),D.set(ut,pt)}return pt}function N(C,X,xt){let ut=M(X,xt);if(!(X.t==="text"&&!X.s)){if(C.save(),C.translate(xt.x+X.x*xt.w,xt.y+X.y*xt.h),C.rotate(X.r*Math.PI/180),X.t==="text")C.fillStyle=X.c,C.font=v(X,ut.px),C.textAlign="center",C.textBaseline="middle",C.fillText(X.s,0,ut.px*.04);else if(X.t==="motif")C.drawImage(O(X,ut.w,ut.h),-ut.w/2,-ut.h/2,ut.w,ut.h);else{let pt=X.bmp;o&&(X.tints||(X.tints={}),pt=X.tints[X.c]||(X.tints[X.c]=su(X.ink,X.c))),pt&&C.drawImage(pt,-ut.w/2,-ut.h/2,ut.w,ut.h)}C.restore()}}function H(C,X){let xt=M(C,X);return{cx:X.x+C.x*X.w,cy:X.y+C.y*X.h,w:xt.w,h:xt.h,r:C.r*Math.PI/180}}function q(C,X,xt){let ut=w(X);if(C.clearRect(0,0,X,X),C.fillStyle=t.bg||"#efe9dd",C.fillRect(0,0,X,X),u&&C.drawImage(u,ut.base.x,ut.base.y,ut.base.w,ut.base.h),C.save(),C.beginPath(),C.rect(ut.area.x,ut.area.y,ut.area.w,ut.area.h),C.clip(),g.forEach(_t=>N(C,_t,ut.area)),C.restore(),!xt)return;if(C.save(),C.lineWidth=3,C.strokeStyle="rgba(255,255,255,.85)",C.strokeRect(ut.area.x,ut.area.y,ut.area.w,ut.area.h),C.lineWidth=1.5,C.strokeStyle="rgba(28,26,23,.75)",C.setLineDash([6,5]),C.strokeRect(ut.area.x,ut.area.y,ut.area.w,ut.area.h),C.restore(),!g.length){C.save(),C.globalAlpha=.4,C.fillStyle="#1c1a17",C.textAlign="center",C.textBaseline="middle";let _t=Math.min(ut.area.h*.22,ut.area.w*.14);C.font="700 "+_t+'px "Instrument Sans", system-ui, sans-serif',C.fillText("Tu diseño aquí",ut.area.x+ut.area.w/2,ut.area.y+ut.area.h/2),C.restore()}let pt=y(_);if(pt){let _t=H(pt,ut.area);C.save(),C.translate(_t.cx,_t.cy),C.rotate(_t.r);let Lt=_t.w/2+6,Wt=_t.h/2+6;[[3,"#fff",[]],[1.5,"#1c1a17",[5,4]]].forEach(([Y,Et,mt])=>{C.lineWidth=Y,C.strokeStyle=Et,C.setLineDash(mt),C.strokeRect(-Lt,-Wt,Lt*2,Wt*2),C.beginPath(),C.moveTo(0,-Wt),C.lineTo(0,-Wt-20),C.stroke()}),C.setLineDash([]),[[Lt,Wt],[0,-Wt-20]].forEach(([Y,Et])=>{C.beginPath(),C.arc(Y,Et,9,0,Math.PI*2),C.fillStyle="#fff",C.fill(),C.lineWidth=2,C.strokeStyle="#1c1a17",C.stroke()}),C.restore()}}let j=Zt("canvas",{class:"g3d__canvas g3d2__canvas",tabindex:"0",role:"application","aria-label":"Lienzo del diseño. Arrastra los elementos para moverlos; con un elemento elegido, las flechas lo mueven y Supr lo quita."});s.appendChild(j);let J=j.getContext("2d"),nt=0,G=1,yt=0;function Mt(){nt=Math.max(160,Math.round(s.getBoundingClientRect().width)),G=Math.min(2,window.devicePixelRatio||1),j.width=j.height=Math.round(nt*G),bt(!0)}function bt(C){let X=()=>{yt=0,J.setTransform(G,0,0,G,0,0),q(J,nt,!0)};C?(yt&&cancelAnimationFrame(yt),X()):yt||(yt=requestAnimationFrame(X))}window.ResizeObserver?new ResizeObserver(()=>{let C=Math.round(s.getBoundingClientRect().width);C&&C!==nt&&Mt()}).observe(s):window.addEventListener("resize",Mt);let Dt=C=>{let X=j.getBoundingClientRect();return{x:(C.clientX-X.left)/X.width*nt,y:(C.clientY-X.top)/X.height*nt}},Vt=(C,X)=>{let xt=C.x-X.cx,ut=C.y-X.cy,pt=Math.cos(-X.r),_t=Math.sin(-X.r);return{x:xt*pt-ut*_t,y:xt*_t+ut*pt}};function B(C){let X=w(nt).area;for(let xt=g.length-1;xt>=0;xt--){let ut=H(g[xt],X),pt=Vt(C,ut),_t=8;if(Math.abs(pt.x)<=ut.w/2+_t&&Math.abs(pt.y)<=ut.h/2+_t)return g[xt]}return null}let U=null;j.addEventListener("pointerdown",C=>{let X=Dt(C),xt=w(nt).area,ut=y(_),pt=C.pointerType==="touch"?26:14;if(U=null,ut){let _t=H(ut,xt),Lt=Vt(X,_t);Math.hypot(Lt.x-(_t.w/2+6),Lt.y-(_t.h/2+6))<pt?U={mode:"size",id:ut.id,d0:Math.max(8,Math.hypot(X.x-_t.cx,X.y-_t.cy)),sz0:ut.sz}:Math.hypot(Lt.x,Lt.y+(_t.h/2+26))<pt&&(U={mode:"rot",id:ut.id})}if(!U){let _t=B(X);if(_t){let Lt=H(_t,xt);U={mode:"move",id:_t.id,dx:X.x-Lt.cx,dy:X.y-Lt.cy},W(_t.id)}else W(null)}U&&(j.setPointerCapture(C.pointerId),C.preventDefault(),j.focus({preventScroll:!0}))}),j.addEventListener("pointermove",C=>{if(!U)return;let X=y(U.id);if(!X)return;let xt=Dt(C),ut=w(nt).area;if(U.mode==="move")X.x=Wn((xt.x-U.dx-ut.x)/ut.w,0,1),X.y=Wn((xt.y-U.dy-ut.y)/ut.h,0,1);else if(U.mode==="size"){let pt=H(X,ut),_t=iu[X.t];X.sz=Wn(U.sz0*(Math.hypot(xt.x-pt.cx,xt.y-pt.cy)/U.d0),_t[0],_t[1])}else{let pt=H(X,ut),_t=Math.atan2(xt.y-pt.cy,xt.x-pt.cx)*180/Math.PI+90;_t=(_t+540)%360-180;let Lt=Math.round(_t/45)*45;Math.abs(_t-Lt)<4&&(_t=Lt),X.r=Math.round(_t*10)/10}E(),dt(),bt()});let L=C=>{if(U){U=null;try{j.releasePointerCapture(C.pointerId)}catch{}}};j.addEventListener("pointerup",L),j.addEventListener("pointercancel",L),j.addEventListener("keydown",C=>{let X=y(_);if(!X)return;let xt=C.shiftKey?.05:.01;if(C.key==="ArrowLeft")X.x=Wn(X.x-xt,0,1);else if(C.key==="ArrowRight")X.x=Wn(X.x+xt,0,1);else if(C.key==="ArrowUp")X.y=Wn(X.y-xt,0,1);else if(C.key==="ArrowDown")X.y=Wn(X.y+xt,0,1);else if(C.key==="Delete"||C.key==="Backspace"){z(X.id),C.preventDefault();return}else if(C.key==="Escape"){W(null);return}else return;C.preventDefault(),E(),bt()});function E(){p++}function W(C){if(_===C){bt();return}_=C,j.style.touchAction=C?"none":"",P(),ct(),bt()}function et(C){return g.length>=uo?(k("Has llegado al máximo de elementos ("+uo+"). Quita alguno para añadir otro.",!0),null):(g.push(C),E(),W(C.id),P(),C)}function z(C){g=g.filter(X=>X.id!==C),E(),_===C&&(_=null,j.style.touchAction=""),P(),ct(),bt(),tt.text&&tt.text.focus({preventScroll:!0})}let rt=C=>C.t==="text"?C.s?"«"+(C.s.length>22?C.s.slice(0,20)+"…":C.s)+"»":"Texto vacío":C.t==="motif"?(ui[C.m]||{}).label||"Motivo":"Tu imagen",Z=C=>C.t==="text"?"Texto":C.t==="motif"?"Motivo":"Imagen",tt={},A=Zt("p",{class:"g3d-help","aria-live":"polite"}),st=Zt("ul",{class:"g3d2-layers","aria-label":"Elementos del diseño"}),it=Zt("div",{class:"g3d2-panel",hidden:!0}),ot={};function k(C,X){b=C||"",A.textContent=b,A.classList.toggle("is-bad",!!X)}let F=Zt("div",{class:"g3d2-tools"});if(h.text&&(tt.text=Zt("button",{type:"button",class:"g3d2-btn",text:"+ Texto",onclick:()=>{let C=l[0]?l[0].id:"playfair";Hn(C,"Tu texto"),et(R("text",{s:"Tu texto",f:C,sz:.2}))&&ot.text&&(ot.text.focus(),ot.text.select())}}),F.appendChild(tt.text)),h.image){let C=Zt("input",{type:"file",accept:"image/png,image/jpeg,image/webp","aria-label":"Subir una imagen"});C.addEventListener("change",()=>{let X=C.files&&C.files[0];C.value="",X&&gt(X)}),tt.image=Zt("label",{class:"g3d2-btn g3d2-btn--file"},[Zt("span",{text:"+ Imagen"}),C]),F.appendChild(tt.image)}let ft=c.length?Zt("div",{class:"g3d2-motifs",role:"group","aria-label":"Añadir un motivo"},c.map(C=>Zt("button",{type:"button",class:"g3d2-chip",text:C.label,onclick:()=>et(R("motif",{m:C.id,sz:.4}))}))):null;function P(){st.textContent="",g.forEach(C=>{let X=Zt("button",{type:"button",class:"g3d2-layer","aria-pressed":C.id===_?"true":"false",onclick:()=>{W(C.id),j.focus({preventScroll:!0})}},[Zt("span",{class:"g3d2-layer__k",text:Z(C)}),Zt("span",{class:"g3d2-layer__n",text:rt(C)})]);X.dataset.id=C.id,st.appendChild(Zt("li",null,[X]))}),st.hidden=!g.length}function S(C,X,xt,ut,pt,_t,Lt){let Wt=Zt("output",{text:Lt(pt)}),Y=Zt("input",{type:"range",min:X,max:xt,step:ut,value:pt,"aria-label":C});return Y.addEventListener("input",()=>{_t(parseFloat(Y.value)),Wt.textContent=Lt(parseFloat(Y.value)),E(),bt()}),{wrap:Zt("label",{class:"g3d2-range"},[Zt("span",{text:C}),Y,Wt]),inp:Y,out:Wt,fmt:Lt}}function Q(C){return a.length<2||C.t==="img"&&!o?null:Zt("div",{class:"g3d2-inks",role:"group","aria-label":"Color"},a.map(X=>{let xt=Zt("button",{type:"button",class:"g3d2-ink",style:"--c:"+X,"aria-label":"Color "+X,"aria-pressed":C.c===X?"true":"false",onclick:()=>{C.c=X,E(),bt(),xt.parentNode.querySelectorAll(".g3d2-ink").forEach(ut=>ut.setAttribute("aria-pressed",ut===xt?"true":"false"))}});return xt}))}function ct(){it.textContent="",ot={};let C=y(_);if(it.hidden=!C,!C)return;let X=[];if(C.t==="text"){let pt=Zt("input",{type:"text",maxlength:String(f),autocomplete:"off",spellcheck:"false","aria-label":"Texto",value:C.s});pt.addEventListener("input",()=>{C.s=De(pt.value,f),pt.value!==C.s&&(pt.value=C.s),E();let _t=st.querySelector('[data-id="'+C.id+'"] .g3d2-layer__n');_t&&(_t.textContent=rt(C)),bt()}),pt.addEventListener("keydown",_t=>{_t.key==="Enter"&&_t.preventDefault()}),ot.text=pt,X.push(Zt("div",{class:"g3d-field"},[Zt("label",{text:"Texto"}),pt])),l.length>1&&X.push(Zt("div",{class:"g3d-field",role:"group","aria-label":"Tipografía"},[Zt("span",{class:"g3d-label",text:"Tipografía"}),Zt("div",{class:"g3d-chips"},l.map(_t=>{let Lt=Zt("button",{type:"button",class:"g3d2-font g3d-chip--"+_t.id,"aria-pressed":C.f===_t.id?"true":"false",text:_t.label,onclick:()=>{C.f=_t.id,E(),Lt.parentNode.querySelectorAll(".g3d2-font").forEach(Wt=>Wt.setAttribute("aria-pressed",Wt===Lt?"true":"false")),Hn(_t.id,C.s).then(()=>bt())}});return Lt}))]))}let xt=Q(C);xt&&X.push(Zt("div",{class:"g3d-field"},[Zt("span",{class:"g3d-label",text:"Color"}),xt]));let ut=iu[C.t];ot.sz=S("Tamaño",ut[0],ut[1],.005,C.sz,pt=>{C.sz=pt},pt=>Math.round((pt-ut[0])/(ut[1]-ut[0])*100)+" %"),ot.rot=S("Giro",-180,180,1,C.r,pt=>{C.r=pt},pt=>Math.round(pt)+"°"),X.push(Zt("div",{class:"g3d-field g3d2-ranges"},[ot.sz.wrap,ot.rot.wrap])),X.push(Zt("div",{class:"g3d2-actions"},[Zt("button",{type:"button",class:"g3d2-link",text:"Al frente",onclick:()=>{let pt=g.indexOf(C);g.splice(pt,1),g.push(C),E(),P(),bt()}}),Zt("button",{type:"button",class:"g3d2-link",text:"Detrás",onclick:()=>{let pt=g.indexOf(C);g.splice(pt,1),g.unshift(C),E(),P(),bt()}}),Zt("button",{type:"button",class:"g3d2-link g3d2-link--danger",text:"Quitar",onclick:()=>z(C.id)})])),X.forEach(pt=>it.appendChild(pt))}function dt(){let C=y(_);!C||!ot.sz||(ot.sz.inp.value=C.sz,ot.sz.out.textContent=ot.sz.fmt(C.sz),ot.rot.inp.value=C.r,ot.rot.out.textContent=ot.rot.fmt(C.r))}async function gt(C){if(C.size>F_){k("La imagen pesa demasiado (máximo 6 MB).",!0);return}if(g.filter(_t=>_t.t==="img").length>=nu){k("Puedes poner hasta "+nu+" imágenes. Quita alguna para añadir otra.",!0);return}if(g.length>=uo){k("Has llegado al máximo de elementos ("+uo+").",!0);return}k("Preparando la imagen…");let X;try{if(o){let _t=V_(await ho(C,"logo"));X=R("img",{ink:_t,ar:_t.width/_t.height})}else{let _t=await z_(C,1100);X=R("img",{bmp:_t,ar:_t.width/_t.height})}}catch(_t){k(_t.message||"No se ha podido leer la imagen.",!0);return}X.sz=X.ar>=1?.6:Wn(.6*X.ar*1.2,.2,.6),k(o?"Se imprime a un solo color: funciona mejor con logotipos de trazo oscuro sobre fondo claro.":""),et(X);let xt=(t.api||{}).image;if(!xt){X.err="sin servidor";return}let ut=new FormData;ut.append("file",C);let pt=fetch(xt,{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest"},credentials:"same-origin",body:ut}).then(_t=>_t.json().then(Lt=>({ok:_t.ok&&Lt.ok!==!1,j:Lt}))).then(_t=>{_t.ok?(X.k=_t.j.token,X.err=""):(X.err=_t.j&&_t.j.error||"No se ha podido subir la imagen.",k(X.err,!0))}).catch(()=>{X.err="No se ha podido subir la imagen. Comprueba tu conexión.",k(X.err,!0)}).then(()=>{x.delete(pt),i._g3dUpload=x.size?Promise.all(Array.from(x)):null,E()});x.add(pt),i._g3dUpload=Promise.all(Array.from(x))}r.textContent="";let At=[F];ft&&At.push(Zt("p",{class:"g3d-label g3d2-sub",text:"Motivos"}),ft),At.push(st,it,A),At.push(Zt("p",{class:"g3d-help"},["Lo que quede fuera del recuadro punteado no se imprime."])),At.forEach(C=>r.appendChild(C)),P(),await Promise.all(l.map(C=>Hn(C.id))),Mt();let St=()=>g.filter(C=>!(C.t==="text"&&!C.s)).map(C=>{let X={t:C.t,x:fo(C.x),y:fo(C.y),sz:fo(C.sz),r:Math.round(C.r*10)/10,c:C.c};return C.t==="text"?(X.s=C.s,X.f=C.f):C.t==="motif"?X.m=C.m:(X.k=C.k||"",X.a=fo(C.ar||1)),X}),Bt={sync:()=>bt(!0),viewer:null,snapshot:C=>new Promise(X=>{let xt=C||720,ut=ss(xt,xt),pt=ut.getContext("2d");try{q(pt,xt,!1),ut.toBlob(_t=>X(_t),"image/jpeg",.86)}catch{X(null)}}),state:()=>({ghost:!1,img:null,d:St().map(C=>C.k?Object.assign({},C,{k:1}):C),rev:p}),imageToken:()=>"",uploading:()=>i._g3dUpload||null,design:()=>({v:1,layers:St()}),problem:()=>{if(x.size)return"Espera un momento: se está subiendo una imagen.";let C=g.find(X=>X.t==="img"&&!X.k);return C?C.err||"Una de las imágenes no se ha podido subir. Quítala o súbela de nuevo.":""},count:()=>St().length,selectedBox:()=>{let C=y(_);return C?H(C,w(nt).area):null},set:()=>{},dispose:()=>{yt&&cancelAnimationFrame(yt),j.remove()}};return i.setAttribute("data-g3d-state","ready"),i._g3d=Bt,i.dispatchEvent(new CustomEvent("g3d:ready",{detail:Bt})),Bt}var Xn=(i,t,e)=>Math.min(e,Math.max(t,i));var ou=i=>i*i*(3-2*i),H_=i=>i>=1?1:1-Math.pow(2,-9*i),Vl=class extends Gn{constructor(t,e){super(t,e),this.box={cx:0,cy:0,w:320,h:220},this.pose={polar:.86,azim:-.12},this.sway=0,this.k=1,this.cw=0,this.ch=0}async init(){return await super.init(),this.controls.enabled=!1,this.controls.dispose(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.canvas.style.touchAction="auto",this}intro(){}orbitHint(){}tween(){}frame(){this.target=new V(0,this.T/2,0),this.controls.target.copy(this.target),this.home={polar:this.pose.polar,azim:this.pose.azim,dist:60},this.place()}resize(){let t=this.stage.clientWidth,e=this.stage.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.cw=t,this.ch=e,this.place())}place(){if(this.dead||!this.info||!this.cw||!this.target)return;let t=this.box,e=this.camera,n=this.T||1,{W:s,H:r}=this.info,o=Math.tan(e.fov*Math.PI/360),a=o*e.aspect,l=this.pose.polar,c=this.pose.azim+this.sway,h=r*Math.cos(l)+n*Math.sin(l),f=(s*Math.cos(c)+r*Math.abs(Math.sin(c)))*1.05,d=Math.max(f*this.cw/(2*a*Math.max(40,t.w)),h*this.ch/(2*o*Math.max(40,t.h))),u=this.target;e.position.set(u.x+d*Math.sin(l)*Math.sin(c),u.y+d*Math.cos(l),u.z+d*Math.sin(l)*Math.cos(c)),e.lookAt(u),e.setViewOffset(this.cw,this.ch,-(t.cx-this.cw/2),-(t.cy-this.ch/2),this.cw,this.ch),this.group.scale.setScalar(this.k),this.render()}};async function G_(i,t){t.custom&&t.custom.length&&no(t.custom);let e=!!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches),n=i.querySelector("[data-g3d-canvas]"),s=Array.prototype.slice.call(i.querySelectorAll("[data-ch]")).map(W=>({el:W,view:W.querySelector("[data-view]"),shape:W.getAttribute("data-shape"),wood:W.getAttribute("data-wood"),font:W.getAttribute("data-font")||"",polar:parseFloat(W.getAttribute("data-polar"))||.86,azim:parseFloat(W.getAttribute("data-azim"))||0,max:parseInt(W.getAttribute("data-max"),10)||24,lines:parseInt(W.getAttribute("data-lines"),10)||1}));if(!n||!s.length)return null;let r=i.querySelector("[data-g3d-scene-text]"),o=Array.prototype.slice.call(i.querySelectorAll("[data-g3d-go]")),a=W=>{let et=co[W.shape]||["Tu nombre","","",""],z=De(r?r.value:"",W.max),rt={motif:et[3]||"",img:null,font:W.font||t.font||"playfair"};if(z){let Z=tu(W.shape,z);return Object.assign(rt,{text:Z[0],text2:Z[1],text3:Z[2],ghost:!1})}return Object.assign(rt,{text:De(et[0],W.max),text2:W.lines>1?De(et[1]||"",160):"",text3:W.lines>2?De(et[2]||"",40):"",ghost:!0})};if(!Ds())return i.setAttribute("data-g3d-scene-state","flat"),null;let l=0,c=s[0],h=new Vl(n,Object.assign({shape:c.shape,wood:c.wood,label:t.label||"Pieza grabada",reduced:e,maxTex:1024},a(c)));try{await h.init()}catch(W){return window.console&&console.warn("Grabarte 3D: escenario no disponible",W),i.setAttribute("data-g3d-scene-state","flat"),null}h.canvas.setAttribute("aria-hidden","true"),h.canvas.removeAttribute("role"),h.canvas.tabIndex=-1;let f=[],d=[],u=!0,g=window.matchMedia?window.matchMedia("(max-width:1000px)"):{matches:!1};function _(){u=!g.matches;let W=i.getBoundingClientRect().top+window.scrollY;f=s.map(z=>z.el.getBoundingClientRect().top+window.scrollY-W);let et=u?.84:.9;d=s.map(z=>{let rt=z.view.getBoundingClientRect(),Z=z.el.getBoundingClientRect();return{cx:rt.left+rt.width/2,cy:rt.top-Z.top+rt.height/2,w:rt.width*et,h:rt.height*et}})}let m=0,p=0,b=null,x=0,y=so(),D=()=>{y||(y=!0,x=0,ro(),i.classList.add("is-oriented"),setTimeout(()=>i.querySelectorAll(".g3d-orbit").forEach(W=>W.remove()),700))};y&&i.classList.add("is-oriented");let T=W=>{b&&W&&W.currentTarget&&(W.currentTarget.style.cursor="grab"),b=null};s.forEach(W=>{let et=W.view;et.style.touchAction="pan-y",et.style.cursor="grab",et.tabIndex=0,y||et.appendChild(oo()),et.addEventListener("pointerdown",z=>{if(!z.button){b={x:z.clientX,y:z.clientY,ux:m,uy:p,moved:!1},x=0;try{et.setPointerCapture(z.pointerId)}catch{}et.style.cursor="grabbing"}}),et.addEventListener("pointermove",z=>{if(!b)return;let rt=z.clientX-b.x,Z=z.clientY-b.y;!b.moved&&Math.abs(rt)>4&&(b.moved=!0,D()),m=b.ux+rt*.009,p=Xn(b.uy+Z*.006,-.5,.45)}),et.addEventListener("pointerup",T),et.addEventListener("pointercancel",T),et.addEventListener("keydown",z=>{let rt=z.key,Z=0,tt=0;if(rt==="ArrowLeft")Z=-.2;else if(rt==="ArrowRight")Z=.2;else if(rt==="ArrowUp")tt=-.12;else if(rt==="ArrowDown")tt=.12;else return;z.preventDefault(),x=0,D(),m+=Z,p=Xn(p+tt,-.5,.45)})});let R=0,w=!1,v=0,M=0,O=0,N=1150;async function H(W){if(v=W,!w){w=!0;try{for(;R!==v;){let et=v,z=s[et];try{await h.apply(Object.assign({shape:z.shape,wood:z.wood},a(z)))}catch(rt){window.console&&console.warn("Grabarte 3D: no se pudo cambiar la pieza",rt)}R=et,l=et,O=performance.now(),N=1150,m=0,p=0}}finally{w=!1}}}let q="",j="",J="",nt="";function G(){if(!f.length)return;let W=h.ch||window.innerHeight,et=Math.max(0,-i.getBoundingClientRect().top),z=0,rt,Z=0,tt=0,A=1,st=1,it="none";if(u){let dt=f.length-1;for(;dt>0&&et<f[dt];)dt--;let gt=dt<f.length-1?f[dt+1]-et:1/0,At=d[dt].cy-d[dt].h/2;z=gt<=At?dt+1:dt,rt=d[z];let St=f[z+1]!=null?f[z+1]-et:1/0,Tt=Math.max(0,f[z]-et),Bt=isFinite(St)?Math.max(0,W-St):0;it=Tt>.5||Bt>.5?"inset("+Tt.toFixed(1)+"px 0 "+Bt.toFixed(1)+"px 0)":"none";let C=f[z+1]!=null?f[z+1]-f[z]:0,X=C?Xn((et-f[z])/C,0,1):0;Z=s[z].azim+(e?0:(X-.5)*.18),tt=s[z].polar}else{let dt=-1;for(let At=0;At<d.length;At++){let St=Math.abs(f[At]-et+d[At].cy-.4*W),Tt=1-ou(Xn((St-.2*W)/(.3*W),0,1));Tt>dt&&(dt=Tt,z=At)}let gt=f[z]-et+d[z].cy;rt={cx:d[z].cx,cy:gt,w:d[z].w,h:d[z].h},A=e?dt>.5?1:0:dt,st=.95+.05*A,Z=s[z].azim+(e?0:Xn((gt-.4*W)/W,-.6,.6)*.45),tt=s[z].polar}let ot=Xn((performance.now()-O)/(e?700:N),0,1),k=e?1:H_(ot),F=ou(Xn(ot/(e?.9:.3),0,1));A*=F,st*=.9+.1*k,Z+=(1-k)*.5,k<.999&&(rt={cx:rt.cx,cy:rt.cy+(1-k)*(u?.07*W:26),w:rt.w,h:rt.h});let ft=0;if(x){let dt=(performance.now()-x)/lo;dt>=1?x=0:ft=ao(dt)}let P={polar:Xn(tt+p,.12,1.48),azim:Z+m+ft};R!==z&&(H(z),A=0),w&&R!==z&&(A=0);let S=A.toFixed(3);S!==J&&(J=S,n.style.opacity=S);let Q=e||A>=.999?"":"blur("+((1-F)*6).toFixed(1)+"px)";Q!==nt&&(nt=Q,n.style.filter=Q),it!==j&&(j=it,n.style.clipPath=it);let ct=[rt.cx,rt.cy,rt.w,rt.h,P.polar,P.azim,h.sway,st].map(dt=>dt.toFixed(3)).join("|");h.box=rt,h.pose=P,h.k=st,ct!==q&&(q=ct,h.place())}function yt(){let W=De(r?r.value:"",40);o.forEach(et=>{let z=et.getAttribute("data-base")||et.getAttribute("href");et.setAttribute("data-base",z),et.setAttribute("href",z+(W?(z.indexOf("?")<0?"?":"&")+"texto="+encodeURIComponent(W):""))})}r&&r.addEventListener("input",()=>{h.set(a(s[R])),yt()});let Mt=!0,bt=0,Dt=performance.now();function Vt(W){bt=0,!(!Mt||document.hidden)&&(e||(h.sway=Math.sin((W-Dt)/3200)*.04,b||(m*=.994,p*=.994)),G(),bt=requestAnimationFrame(Vt))}let B=()=>{!bt&&Mt&&(bt=requestAnimationFrame(Vt))};"IntersectionObserver"in window&&new IntersectionObserver(W=>{Mt=W[0].isIntersecting,B()},{rootMargin:"200px 0px"}).observe(i),document.addEventListener("visibilitychange",B),"ResizeObserver"in window&&new ResizeObserver(()=>{clearTimeout(L),L=setTimeout(()=>{_(),q="",G()},60)}).observe(i),window.addEventListener("scroll",()=>{e&&G()},{passive:!0});let U=0,L=0;window.addEventListener("resize",()=>{clearTimeout(U),U=setTimeout(()=>{_(),q="",G()},120)}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{_(),q="",G()}),_(),G(),i.setAttribute("data-g3d-scene-state","ready"),requestAnimationFrame(()=>{M=performance.now(),O=M,N=1500,i.classList.add("is-live"),B()}),!y&&!e&&setTimeout(()=>{y||b||l!==0||document.hidden||i.getBoundingClientRect().top<-.3*window.innerHeight||(x=performance.now(),B())},2600),B();let E={viewer:h,chapters:s,textFor:a,set:W=>h.set(W),state:()=>Object.assign({},h.state),current:()=>l,enterAt:()=>O,turn:()=>({ux:m,uy:p}),update:G,dispose:()=>h.dispose()};return i._g3dScene=E,i.dispatchEvent(new CustomEvent("g3d:scene-ready",{detail:E})),E}var $x="1.0.0";async function Kx(i,t){if(t.kind==="2d")return ru(i,t);t.custom&&t.custom.length&&no(t.custom);let e=i.querySelector("[data-g3d-stage]"),n=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=N=>i.querySelector(N),r={text:s("[data-g3d-text]"),text2:s("[data-g3d-text2]"),text3:s("[data-g3d-text3]"),font:()=>{let N=i.querySelector('input[name$="[font]"]:checked');return N?N.value:t.font},wood:()=>{let N=i.querySelector('input[name$="[wood]"]:checked');return N?N.value:t.wood},shape:()=>{let N=i.querySelector('input[name$="[shape]"]:checked');return N?N.value:t.shape},hasMotifs:!!i.querySelector('input[name$="[motif]"]'),motif:()=>{let N=i.querySelector('input[name$="[motif]"]:checked');return N?N.value:""},file:s("[data-g3d-image]")},o=()=>r.text&&r.text.maxLength>0?r.text.maxLength:t.maxChars,a=N=>!!N&&!(N.closest(".g3d-field")||{}).hidden,l=(N,H)=>a(N)?De(N.value,N.maxLength>0?N.maxLength:H):"",c=()=>a(r.text2),h=null,f=0,d="",u=s("[data-g3d-upload]"),g=s("[data-g3d-image-help]"),_=s("[data-g3d-image-label]"),m=s("[data-g3d-image-clear]"),p=s("[data-g3d-image-token]"),b=g?g.textContent:"",x=(N,H)=>{g&&(g.textContent=N||b,g.classList.toggle("is-bad",!!H))},y=()=>{h=null,d="",f++,r.file&&(r.file.value=""),p&&(p.value=""),m&&(m.hidden=!0),_&&(_.textContent="Subir imagen"),i._g3dUpload=null,x("")},D=()=>({text:l(r.text,t.maxChars),text2:l(r.text2,t.maxChars2||32),text3:l(r.text3,t.maxChars3||32),motif:r.motif(),img:h,ghost:!1}),T=()=>{let N=D();if(N.text||N.text2||N.text3||N.img)return N;let H=co[r.shape()]||["Tu nombre","","",""];return{text:De(H[0],o()),text2:c()||r.text3?De(H[1],t.maxChars2||32):"",text3:r.text3?De(H[2]||"",t.maxChars3||32):"",motif:r.hasMotifs?N.motif:H[3]||"",img:null,ghost:!0}};try{let N=new URLSearchParams(window.location.search).get("texto"),H=[r.text,r.text2,r.text3][kl[r.shape()]||0]||r.text;N&&H&&!H.value&&(H.value=De(N,H.maxLength>0?H.maxLength:o()))}catch{}let R={shape:r.shape(),wood:r.wood(),font:r.font(),bg:t.bg,label:t.label,reduced:n,...T(),custom:t.custom,maxTex:window.innerWidth>900&&(window.devicePixelRatio||1)>=1.5?1280:1024},w;try{w=Ds()?await new Gn(e,R).init():await new is(e,R).init()}catch(N){window.console&&console.warn("Grabarte 3D: WebGL no disponible, vista plana",N),e.querySelectorAll("canvas").forEach(H=>H.remove()),w=await new is(e,R).init()}i.setAttribute("data-g3d-state",w instanceof Gn?"ready":"flat");let v=()=>w.set(Object.assign(T(),{font:r.font(),wood:r.wood(),shape:r.shape()}));if(i.addEventListener("input",N=>{N.target.matches("[data-g3d-text],[data-g3d-text2],[data-g3d-text3]")&&v()}),i.addEventListener("change",N=>{N.target.matches("input[type=radio]")&&v()}),i.querySelectorAll("[data-g3d-view]").forEach(N=>N.addEventListener("click",()=>{w.view(N.getAttribute("data-g3d-view")),i.querySelectorAll("[data-g3d-view]").forEach(H=>H.setAttribute("aria-pressed",H===N?"true":"false"))})),r.file){let N=u&&u.getAttribute("data-mode")||t.imageMode||"logo";r.file.addEventListener("change",async()=>{let H=r.file.files&&r.file.files[0];if(!H)return;if(H.size>6*1024*1024){y(),x("La imagen pesa demasiado (máximo 6 MB).",!0);return}let q=++f;x("Preparando la imagen…");try{let nt=await ho(H,N);if(q!==f)return;h=nt,m&&(m.hidden=!1),_&&(_.textContent="Cambiar imagen"),x((H.name.length>34?H.name.slice(0,31)+"…":H.name)+(r.hasMotifs?" · sustituye al motivo elegido":"")),v()}catch(nt){y(),x(nt.message||"No se ha podido leer la imagen.",!0);return}p&&(p.value=""),d="";let j=(t.api||{}).image;if(!j)return;let J=new FormData;J.append("file",H),i._g3dUpload=fetch(j,{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest"},credentials:"same-origin",body:J}).then(nt=>nt.json().then(G=>({ok:nt.ok&&G.ok!==!1,j:G}))).then(nt=>q!==f?null:nt.ok?(d=nt.j.token,p&&(p.value=d),d):(x(nt.j&&nt.j.error||"No se ha podido subir la imagen.",!0),null)).catch(()=>(q===f&&x("No se ha podido subir la imagen. Comprueba tu conexión.",!0),null))}),m&&m.addEventListener("click",()=>{y(),v(),r.file.focus()})}let O={sync:v,viewer:w,snapshot:async N=>{if(!w.state.ghost)return w.snapshot(N);w.set(D()),await w.repaint();try{return await w.snapshot(N)}finally{w.set(T())}},state:()=>Object.assign({},w.state,{img:h?"i"+f:null}),imageToken:()=>d,uploading:()=>i._g3dUpload||null,set:N=>w.set(N),dispose:()=>w.dispose()};return i._g3d=O,i.dispatchEvent(new CustomEvent("g3d:ready",{detail:O})),O}export{Le as FONTS,is as FlatViewer,$x as VERSION,Gn as Viewer,De as cleanText,Kx as mount,G_ as mountScene,no as registerCustom,Ds as webglAvailable};
