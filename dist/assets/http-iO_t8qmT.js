import{J as w,w as he,y as q,K as de}from"./index-vBIxONE0.js";var D=function(r,e,n){if(n||arguments.length===2)for(var i=0,a=e.length,o;i<a;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return r.concat(o||Array.prototype.slice.call(e))},le=function(){function r(e,n,i){this.name=e,this.version=n,this.os=i,this.type="browser"}return r}(),pe=function(){function r(e){this.version=e,this.type="node",this.name="node",this.os=process.platform}return r}(),ye=function(){function r(e,n,i,a){this.name=e,this.version=n,this.os=i,this.bot=a,this.type="bot-device"}return r}(),ve=function(){function r(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return r}(),be=function(){function r(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return r}(),me=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,we=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,N=3,ge=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",me]],L=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function et(r){return r?U(r):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new be:typeof navigator<"u"?U(navigator.userAgent):_e()}function Ee(r){return r!==""&&ge.reduce(function(e,n){var i=n[0],a=n[1];if(e)return e;var o=a.exec(r);return!!o&&[i,o]},!1)}function U(r){var e=Ee(r);if(!e)return null;var n=e[0],i=e[1];if(n==="searchbot")return new ve;var a=i[1]&&i[1].split(".").join("_").split("_").slice(0,3);a?a.length<N&&(a=D(D([],a,!0),Oe(N-a.length),!0)):a=[];var o=a.join("."),f=Re(r),d=we.exec(r);return d&&d[1]?new ye(n,o,f,d[1]):new le(n,o,f)}function Re(r){for(var e=0,n=L.length;e<n;e++){var i=L[e],a=i[0],o=i[1],f=o.exec(r);if(f)return a}return null}function _e(){var r=typeof process<"u"&&process.version;return r?new pe(process.version.slice(1)):null}function Oe(r){for(var e=[],n=0;n<r;n++)e.push("0");return e}const Ae=r=>JSON.stringify(r,(e,n)=>typeof n=="bigint"?n.toString()+"n":n),Se=r=>{const e=/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,n=r.replace(e,'$1"$2n"$3');return JSON.parse(n,(i,a)=>typeof a=="string"&&a.match(/^\d+n$/)?BigInt(a.substring(0,a.length-1)):a)};function Te(r){if(typeof r!="string")throw new Error(`Cannot safe json parse value of type ${typeof r}`);try{return Se(r)}catch{return r}}function j(r){return typeof r=="string"?r:Ae(r)||""}const Be="PARSE_ERROR",Pe="INVALID_REQUEST",xe="METHOD_NOT_FOUND",Ie="INVALID_PARAMS",X="INTERNAL_ERROR",P="SERVER_ERROR",Ce=[-32700,-32600,-32601,-32602,-32603],R={[Be]:{code:-32700,message:"Parse error"},[Pe]:{code:-32600,message:"Invalid Request"},[xe]:{code:-32601,message:"Method not found"},[Ie]:{code:-32602,message:"Invalid params"},[X]:{code:-32603,message:"Internal error"},[P]:{code:-32e3,message:"Server error"}},G=P;function Me(r){return Ce.includes(r)}function W(r){return Object.keys(R).includes(r)?R[r]:R[G]}function De(r){const e=Object.values(R).find(n=>n.code===r);return e||R[G]}function Ne(r,e,n){return r.message.includes("getaddrinfo ENOTFOUND")||r.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${n} RPC url at ${e}`):r}var Le={},v={},F;function Ue(){if(F)return v;F=1,Object.defineProperty(v,"__esModule",{value:!0}),v.isBrowserCryptoAvailable=v.getSubtleCrypto=v.getBrowerCrypto=void 0;function r(){return(w===null||w===void 0?void 0:w.crypto)||(w===null||w===void 0?void 0:w.msCrypto)||{}}v.getBrowerCrypto=r;function e(){const i=r();return i.subtle||i.webkitSubtle}v.getSubtleCrypto=e;function n(){return!!r()&&!!e()}return v.isBrowserCryptoAvailable=n,v}var b={},H;function je(){if(H)return b;H=1,Object.defineProperty(b,"__esModule",{value:!0}),b.isBrowser=b.isNode=b.isReactNative=void 0;function r(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}b.isReactNative=r;function e(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}b.isNode=e;function n(){return!r()&&!e()}return b.isBrowser=n,b}(function(r){Object.defineProperty(r,"__esModule",{value:!0});const e=he;e.__exportStar(Ue(),r),e.__exportStar(je(),r)})(Le);function z(r=3){const e=Date.now()*Math.pow(10,r),n=Math.floor(Math.random()*Math.pow(10,r));return e+n}function We(r=6){return BigInt(z(r))}function Fe(r,e,n){return{id:n||z(),jsonrpc:"2.0",method:r,params:e}}function tt(r,e){return{id:r,jsonrpc:"2.0",result:e}}function He(r,e,n){return{id:r,jsonrpc:"2.0",error:$e(e,n)}}function $e(r,e){return typeof r>"u"?W(X):(typeof r=="string"&&(r=Object.assign(Object.assign({},W(P)),{message:r})),typeof e<"u"&&(r.data=e),Me(r.code)&&(r=De(r.code)),r)}class K{}class rt extends K{constructor(e){super()}}class ke extends K{constructor(){super()}}class Je extends ke{constructor(e){super()}}const Ve="^https?:",qe="^wss?:";function Xe(r){const e=r.match(new RegExp(/^\w+:/,"gi"));if(!(!e||!e.length))return e[0]}function Q(r,e){const n=Xe(r);return typeof n>"u"?!1:new RegExp(e).test(n)}function $(r){return Q(r,Ve)}function nt(r){return Q(r,qe)}function st(r){return new RegExp("wss?://localhost(:d{2,5})?").test(r)}function Y(r){return typeof r=="object"&&"id"in r&&"jsonrpc"in r&&r.jsonrpc==="2.0"}function ot(r){return Y(r)&&"method"in r}function Ge(r){return Y(r)&&(ze(r)||Z(r))}function ze(r){return"result"in r}function Z(r){return"error"in r}class it extends Je{constructor(e){super(e),this.events=new q.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async request(e,n){return this.requestStrict(Fe(e.method,e.params||[],e.id||We().toString()),n)}async requestStrict(e,n){return new Promise(async(i,a)=>{if(!this.connection.connected)try{await this.open()}catch(o){a(o)}this.events.on(`${e.id}`,o=>{Z(o)?a(o.error):i(o.result)});try{await this.connection.send(e,n)}catch(o){a(o)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),Ge(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.connection.on("register_error",e=>this.onClose()),this.hasRegisteredEventListeners=!0)}}var B={exports:{}};(function(r,e){var n=typeof self<"u"?self:w,i=function(){function o(){this.fetch=!1,this.DOMException=n.DOMException}return o.prototype=n,new o}();(function(o){(function(f){var d={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function ee(t){return t&&DataView.prototype.isPrototypeOf(t)}if(d.arrayBuffer)var te=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],re=ArrayBuffer.isView||function(t){return t&&te.indexOf(Object.prototype.toString.call(t))>-1};function g(t){if(typeof t!="string"&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function x(t){return typeof t!="string"&&(t=String(t)),t}function O(t){var s={next:function(){var c=t.shift();return{done:c===void 0,value:c}}};return d.iterable&&(s[Symbol.iterator]=function(){return s}),s}function h(t){this.map={},t instanceof h?t.forEach(function(s,c){this.append(c,s)},this):Array.isArray(t)?t.forEach(function(s){this.append(s[0],s[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(s){this.append(s,t[s])},this)}h.prototype.append=function(t,s){t=g(t),s=x(s);var c=this.map[t];this.map[t]=c?c+", "+s:s},h.prototype.delete=function(t){delete this.map[g(t)]},h.prototype.get=function(t){return t=g(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(g(t))},h.prototype.set=function(t,s){this.map[g(t)]=x(s)},h.prototype.forEach=function(t,s){for(var c in this.map)this.map.hasOwnProperty(c)&&t.call(s,this.map[c],c,this)},h.prototype.keys=function(){var t=[];return this.forEach(function(s,c){t.push(c)}),O(t)},h.prototype.values=function(){var t=[];return this.forEach(function(s){t.push(s)}),O(t)},h.prototype.entries=function(){var t=[];return this.forEach(function(s,c){t.push([c,s])}),O(t)},d.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);function A(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function I(t){return new Promise(function(s,c){t.onload=function(){s(t.result)},t.onerror=function(){c(t.error)}})}function ne(t){var s=new FileReader,c=I(s);return s.readAsArrayBuffer(t),c}function se(t){var s=new FileReader,c=I(s);return s.readAsText(t),c}function oe(t){for(var s=new Uint8Array(t),c=new Array(s.length),p=0;p<s.length;p++)c[p]=String.fromCharCode(s[p]);return c.join("")}function C(t){if(t.slice)return t.slice(0);var s=new Uint8Array(t.byteLength);return s.set(new Uint8Array(t)),s.buffer}function M(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?typeof t=="string"?this._bodyText=t:d.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:d.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:d.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():d.arrayBuffer&&d.blob&&ee(t)?(this._bodyArrayBuffer=C(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):d.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||re(t))?this._bodyArrayBuffer=C(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||(typeof t=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):d.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},d.blob&&(this.blob=function(){var t=A(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?A(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(ne)}),this.text=function(){var t=A(this);if(t)return t;if(this._bodyBlob)return se(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(oe(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},d.formData&&(this.formData=function(){return this.text().then(ce)}),this.json=function(){return this.text().then(JSON.parse)},this}var ie=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function ae(t){var s=t.toUpperCase();return ie.indexOf(s)>-1?s:t}function m(t,s){s=s||{};var c=s.body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,s.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,!c&&t._bodyInit!=null&&(c=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=s.credentials||this.credentials||"same-origin",(s.headers||!this.headers)&&(this.headers=new h(s.headers)),this.method=ae(s.method||this.method||"GET"),this.mode=s.mode||this.mode||null,this.signal=s.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&c)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(c)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})};function ce(t){var s=new FormData;return t.trim().split("&").forEach(function(c){if(c){var p=c.split("="),l=p.shift().replace(/\+/g," "),u=p.join("=").replace(/\+/g," ");s.append(decodeURIComponent(l),decodeURIComponent(u))}}),s}function ue(t){var s=new h,c=t.replace(/\r?\n[\t ]+/g," ");return c.split(/\r?\n/).forEach(function(p){var l=p.split(":"),u=l.shift().trim();if(u){var _=l.join(":").trim();s.append(u,_)}}),s}M.call(m.prototype);function y(t,s){s||(s={}),this.type="default",this.status=s.status===void 0?200:s.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in s?s.statusText:"OK",this.headers=new h(s.headers),this.url=s.url||"",this._initBody(t)}M.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},y.error=function(){var t=new y(null,{status:0,statusText:""});return t.type="error",t};var fe=[301,302,303,307,308];y.redirect=function(t,s){if(fe.indexOf(s)===-1)throw new RangeError("Invalid status code");return new y(null,{status:s,headers:{location:t}})},f.DOMException=o.DOMException;try{new f.DOMException}catch{f.DOMException=function(s,c){this.message=s,this.name=c;var p=Error(s);this.stack=p.stack},f.DOMException.prototype=Object.create(Error.prototype),f.DOMException.prototype.constructor=f.DOMException}function S(t,s){return new Promise(function(c,p){var l=new m(t,s);if(l.signal&&l.signal.aborted)return p(new f.DOMException("Aborted","AbortError"));var u=new XMLHttpRequest;function _(){u.abort()}u.onload=function(){var E={status:u.status,statusText:u.statusText,headers:ue(u.getAllResponseHeaders()||"")};E.url="responseURL"in u?u.responseURL:E.headers.get("X-Request-URL");var T="response"in u?u.response:u.responseText;c(new y(T,E))},u.onerror=function(){p(new TypeError("Network request failed"))},u.ontimeout=function(){p(new TypeError("Network request failed"))},u.onabort=function(){p(new f.DOMException("Aborted","AbortError"))},u.open(l.method,l.url,!0),l.credentials==="include"?u.withCredentials=!0:l.credentials==="omit"&&(u.withCredentials=!1),"responseType"in u&&d.blob&&(u.responseType="blob"),l.headers.forEach(function(E,T){u.setRequestHeader(T,E)}),l.signal&&(l.signal.addEventListener("abort",_),u.onreadystatechange=function(){u.readyState===4&&l.signal.removeEventListener("abort",_)}),u.send(typeof l._bodyInit>"u"?null:l._bodyInit)})}return S.polyfill=!0,o.fetch||(o.fetch=S,o.Headers=h,o.Request=m,o.Response=y),f.Headers=h,f.Request=m,f.Response=y,f.fetch=S,Object.defineProperty(f,"__esModule",{value:!0}),f})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var a=i;e=a.fetch,e.default=a.fetch,e.fetch=a.fetch,e.Headers=a.Headers,e.Request=a.Request,e.Response=a.Response,r.exports=e})(B,B.exports);var Ke=B.exports;const k=de(Ke),Qe={Accept:"application/json","Content-Type":"application/json"},Ye="POST",J={headers:Qe,method:Ye},V=10;class at{constructor(e,n=!1){if(this.url=e,this.disableProviderPing=n,this.events=new q.EventEmitter,this.isAvailable=!1,this.registering=!1,!$(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e,this.disableProviderPing=n}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e,n){this.isAvailable||await this.register();try{const i=j(e),o=await(await k(this.url,Object.assign(Object.assign({},J),{body:i}))).json();this.onPayload({data:o})}catch(i){this.onError(e.id,i)}}async register(e=this.url){if(!$(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const n=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=n||this.events.listenerCount("open")>=n)&&this.events.setMaxListeners(n+1),new Promise((i,a)=>{this.events.once("register_error",o=>{this.resetMaxListeners(),a(o)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return a(new Error("HTTP connection is missing or invalid"));i()})})}this.url=e,this.registering=!0;try{if(!this.disableProviderPing){const n=j({id:1,jsonrpc:"2.0",method:"test",params:[]});await k(e,Object.assign(Object.assign({},J),{body:n}))}this.onOpen()}catch(n){const i=this.parseError(n);throw this.events.emit("register_error",i),this.onClose(),i}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const n=typeof e.data=="string"?Te(e.data):e.data;this.events.emit("payload",n)}onError(e,n){const i=this.parseError(n),a=i.message||i.toString(),o=He(e,a);this.events.emit("payload",o)}parseError(e,n=this.url){return Ne(e,n,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>V&&this.events.setMaxListeners(V)}}export{at as H,rt as I,it as J,Te as a,st as b,Le as c,et as d,ot as e,He as f,Ge as g,tt as h,nt as i,ze as j,Z as k,Fe as l,We as m,z as n,Ne as p,j as s};