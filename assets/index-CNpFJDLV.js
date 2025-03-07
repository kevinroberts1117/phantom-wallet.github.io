import{g as B,S as J,a as Q,b as X,E as Y,P as Z,T as $,V as C}from"./index-Cp35p-MO.js";function ee(i){if(i.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),e=0;e<t.length;e++)t[e]=255;for(var n=0;n<i.length;n++){var r=i.charAt(n),s=r.charCodeAt(0);if(t[s]!==255)throw new TypeError(r+" is ambiguous");t[s]=n}var a=i.length,f=i.charAt(0),E=Math.log(a)/Math.log(256),m=Math.log(256)/Math.log(a);function c(o){if(o instanceof Uint8Array||(ArrayBuffer.isView(o)?o=new Uint8Array(o.buffer,o.byteOffset,o.byteLength):Array.isArray(o)&&(o=Uint8Array.from(o))),!(o instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(o.length===0)return"";for(var h=0,M=0,_=0,p=o.length;_!==p&&o[_]===0;)_++,h++;for(var w=(p-_)*m+1>>>0,u=new Uint8Array(w);_!==p;){for(var y=o[_],S=0,v=w-1;(y!==0||S<M)&&v!==-1;v--,S++)y+=256*u[v]>>>0,u[v]=y%a>>>0,y=y/a>>>0;if(y!==0)throw new Error("Non-zero carry");M=S,_++}for(var A=w-M;A!==w&&u[A]===0;)A++;for(var I=f.repeat(h);A<w;++A)I+=i.charAt(u[A]);return I}function l(o){if(typeof o!="string")throw new TypeError("Expected String");if(o.length===0)return new Uint8Array;for(var h=0,M=0,_=0;o[h]===f;)M++,h++;for(var p=(o.length-h)*E+1>>>0,w=new Uint8Array(p);o[h];){var u=t[o.charCodeAt(h)];if(u===255)return;for(var y=0,S=p-1;(u!==0||y<_)&&S!==-1;S--,y++)u+=a*w[S]>>>0,w[S]=u%256>>>0,u=u/256>>>0;if(u!==0)throw new Error("Non-zero carry");_=y,h++}for(var v=p-_;v!==p&&w[v]===0;)v++;for(var A=new Uint8Array(M+(p-v)),I=M;v!==p;)A[I++]=w[v++];return A}function G(o){var h=l(o);if(h)return h;throw new Error("Non-base"+a+" character")}return{encode:c,decodeUnsafe:l,decode:G}}var te=ee;const ne=te,ie="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";var re=ne(ie);const b=B(re);let z;const se=new Uint8Array(16);function ae(){if(!z&&(z=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!z))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return z(se)}const d=[];for(let i=0;i<256;++i)d.push((i+256).toString(16).slice(1));function oe(i,t=0){return d[i[t+0]]+d[i[t+1]]+d[i[t+2]]+d[i[t+3]]+"-"+d[i[t+4]]+d[i[t+5]]+"-"+d[i[t+6]]+d[i[t+7]]+"-"+d[i[t+8]]+d[i[t+9]]+"-"+d[i[t+10]]+d[i[t+11]]+d[i[t+12]]+d[i[t+13]]+d[i[t+14]]+d[i[t+15]]}const ce=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),L={randomUUID:ce};function de(i,t,e){if(L.randomUUID&&!t&&!i)return L.randomUUID();i=i||{};const n=i.random||(i.rng||ae)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,oe(n)}function R(i){return i.version===void 0}function j(i){return R(i)?i.serialize({verifySignatures:!1,requireAllSignatures:!1}):i.serialize()}var V=function(i,t,e,n){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function f(c){try{m(n.next(c))}catch(l){a(l)}}function E(c){try{m(n.throw(c))}catch(l){a(l)}}function m(c){c.done?s(c.value):r(c.value).then(f,E)}m((n=n.apply(i,t||[])).next())})};function k(i){return V(this,void 0,void 0,function*(){try{return yield i.request({method:"wallet_getSnaps"}),!0}catch{return!1}})}function le(){return V(this,void 0,void 0,function*(){try{const i=window.ethereum;if(!i)return null;if(i.providers&&Array.isArray(i.providers)){const t=i.providers;for(const e of t)if(yield k(e))return e}if(i.detected&&Array.isArray(i.detected)){const t=i.detected;for(const e of t)if(yield k(e))return e}return(yield k(i))?i:null}catch(i){return console.error(i),null}})}const he="solana:mainnet",ue="solana:devnet",fe="solana:testnet",me="solana:localnet",q=[he,ue,fe,me];function O(i){return q.includes(i)}var T=function(i,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!n:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(i):n?n.value:t.get(i)},x=function(i,t,e,n,r){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?i!==t||!r:!t.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?r.call(i,e):r?r.value=e:t.set(i,e),e},U,K,N,W,F,H;const _e=q,ve=[J,Q,X];class P{get address(){return T(this,U,"f")}get publicKey(){return T(this,K,"f").slice()}get chains(){return T(this,N,"f").slice()}get features(){return T(this,W,"f").slice()}get label(){return T(this,F,"f")}get icon(){return T(this,H,"f")}constructor({address:t,publicKey:e,label:n,icon:r}){U.set(this,void 0),K.set(this,void 0),N.set(this,void 0),W.set(this,void 0),F.set(this,void 0),H.set(this,void 0),new.target===P&&Object.freeze(this),x(this,U,t,"f"),x(this,K,e,"f"),x(this,N,_e,"f"),x(this,W,ve,"f"),x(this,F,n,"f"),x(this,H,r,"f")}}U=new WeakMap,K=new WeakMap,N=new WeakMap,W=new WeakMap,F=new WeakMap,H=new WeakMap;var g=function(i,t,e,n){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function f(c){try{m(n.next(c))}catch(l){a(l)}}function E(c){try{m(n.throw(c))}catch(l){a(l)}}function m(c){c.done?s(c.value):r(c.value).then(f,E)}m((n=n.apply(i,t||[])).next())})};class D extends Y{constructor(t){super(),this._network="mainnet-beta",this._iframeParams={},this._element=null,this._iframe=null,this._publicKey=null,this._account=null,this._isConnected=!1,this._connectHandler=null,this._messageHandlers={},this._handleEvent=e=>{var n,r;switch(e.type){case"connect":{this._collapseIframe(),!((n=e.data)===null||n===void 0)&&n.publicKey?(this._publicKey=e.data.publicKey,this._isConnected=!0,this._connectHandler&&(this._connectHandler.resolve(),this._connectHandler=null),this._connected()):(this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected());return}case"disconnect":{this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected();return}case"accountChanged":{!((r=e.data)===null||r===void 0)&&r.publicKey?(this._publicKey=e.data.publicKey,this.emit("accountChanged",this.publicKey),this._standardConnected()):(this.emit("accountChanged",void 0),this._standardDisconnected());return}default:return}},this._handleResize=e=>{e.resizeMode==="full"?e.params.mode==="fullscreen"?this._expandIframe():e.params.mode==="hide"&&this._collapseIframe():e.resizeMode==="coordinates"&&this._resizeIframe(e.params)},this._handleMessage=e=>{var n;if(((n=e.data)===null||n===void 0?void 0:n.channel)!=="solflareIframeToWalletAdapter")return;const r=e.data.data||{};if(r.type==="event")this._handleEvent(r.event);else if(r.type==="resize")this._handleResize(r);else if(r.type==="response"&&this._messageHandlers[r.id]){const{resolve:s,reject:a}=this._messageHandlers[r.id];delete this._messageHandlers[r.id],r.error?a(r.error):s(r.result)}},this._removeElement=()=>{this._element&&(this._element.remove(),this._element=null)},this._removeDanglingElements=()=>{const e=document.getElementsByClassName("solflare-metamask-wallet-adapter-iframe");for(const n of e)n.parentElement&&n.remove()},this._injectElement=()=>{this._removeElement(),this._removeDanglingElements();const e=Object.assign(Object.assign({},this._iframeParams),{mm:!0,v:1,cluster:this._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||""}),n=Object.keys(e).map(s=>`${s}=${encodeURIComponent(e[s])}`).join("&"),r=`${D.IFRAME_URL}?${n}`;this._element=document.createElement("div"),this._element.className="solflare-metamask-wallet-adapter-iframe",this._element.innerHTML=`
      <iframe src='${r}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `,document.body.appendChild(this._element),this._iframe=this._element.querySelector("iframe"),window.addEventListener("message",this._handleMessage,!1)},this._collapseIframe=()=>{this._iframe&&(this._iframe.style.top="",this._iframe.style.right="",this._iframe.style.height="2px",this._iframe.style.width="2px")},this._expandIframe=()=>{this._iframe&&(this._iframe.style.top="0px",this._iframe.style.bottom="0px",this._iframe.style.left="0px",this._iframe.style.right="0px",this._iframe.style.width="100%",this._iframe.style.height="100%")},this._resizeIframe=e=>{this._iframe&&(this._iframe.style.top=isFinite(e.top)?`${e.top}px`:"",this._iframe.style.bottom=isFinite(e.bottom)?`${e.bottom}px`:"",this._iframe.style.left=isFinite(e.left)?`${e.left}px`:"",this._iframe.style.right=isFinite(e.right)?`${e.right}px`:"",this._iframe.style.width=isFinite(e.width)?`${e.width}px`:e.width,this._iframe.style.height=isFinite(e.height)?`${e.height}px`:e.height)},this._sendIframeMessage=e=>{if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");return new Promise((n,r)=>{var s,a;const f=de();this._messageHandlers[f]={resolve:n,reject:r},(a=(s=this._iframe)===null||s===void 0?void 0:s.contentWindow)===null||a===void 0||a.postMessage({channel:"solflareWalletAdapterToIframe",data:Object.assign({id:f},e)},"*")})},this._connected=()=>{this._isConnected=!0,this.emit("connect",this.publicKey),this._standardConnected()},this._disconnected=()=>{this._publicKey=null,this._isConnected=!1,window.removeEventListener("message",this._handleMessage,!1),this._removeElement(),this.emit("disconnect"),this._standardDisconnected()},this._standardConnected=()=>{if(!this.publicKey)return;const e=this.publicKey.toString();(!this._account||this._account.address!==e)&&(this._account=new P({address:e,publicKey:this.publicKey.toBytes()}),this.emit("standard_change",{accounts:this.standardAccounts}))},this._standardDisconnected=()=>{this._account&&(this._account=null,this.emit("standard_change",{accounts:this.standardAccounts}))},t!=null&&t.network&&(this._network=t==null?void 0:t.network),window.SolflareMetaMaskParams&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),window.SolflareMetaMaskParams)),t!=null&&t.params&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),t==null?void 0:t.params))}get publicKey(){return this._publicKey?new Z(this._publicKey):null}get standardAccount(){return this._account}get standardAccounts(){return this._account?[this._account]:[]}get isConnected(){return this._isConnected}get connected(){return this.isConnected}get autoApprove(){return!1}connect(){return g(this,void 0,void 0,function*(){this.connected||(this._injectElement(),yield new Promise((t,e)=>{this._connectHandler={resolve:t,reject:e}}))})}disconnect(){return g(this,void 0,void 0,function*(){yield this._sendIframeMessage({method:"disconnect"}),this._disconnected()})}signTransaction(t){var e;return g(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const n=j(t),r=yield this._sendIframeMessage({method:"signTransactionV2",params:{transaction:b.encode(n)}}),{transaction:s}=r;return R(t)?$.from(b.decode(s)):C.deserialize(b.decode(s))}catch(n){throw new Error(((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n))||"Failed to sign transaction")}})}signAllTransactions(t){var e;return g(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const n=t.map(s=>j(s)),{transactions:r}=yield this._sendIframeMessage({method:"signAllTransactionsV2",params:{transactions:n.map(s=>b.encode(s))}});return r.map((s,a)=>R(t[a])?$.from(b.decode(s)):C.deserialize(b.decode(s)))}catch(n){throw new Error(((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n))||"Failed to sign transactions")}})}signAndSendTransaction(t,e){var n;return g(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const r=j(t),{signature:s}=yield this._sendIframeMessage({method:"signAndSendTransaction",params:{transaction:b.encode(r),options:e}});return s}catch(r){throw new Error(((n=r==null?void 0:r.toString)===null||n===void 0?void 0:n.call(r))||"Failed to sign and send transaction")}})}signMessage(t,e="utf8"){var n;return g(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const{signature:r}=yield this._sendIframeMessage({method:"signMessage",params:{data:b.encode(t),display:e}});return Uint8Array.from(b.decode(r))}catch(r){throw new Error(((n=r==null?void 0:r.toString)===null||n===void 0?void 0:n.call(r))||"Failed to sign message")}})}sign(t,e="utf8"){return g(this,void 0,void 0,function*(){return yield this.signMessage(t,e)})}static isSupported(){return g(this,void 0,void 0,function*(){return!!(yield le())})}standardSignAndSendTransaction(...t){return g(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(t.length===1){const{transaction:n,account:r,chain:s,options:a}=t[0],{minContextSlot:f,preflightCommitment:E,skipPreflight:m,maxRetries:c}=a||{};if(r!==this._account)throw new Error("invalid account");if(!O(s))throw new Error("invalid chain");const l=yield this.signAndSendTransaction(C.deserialize(n),{preflightCommitment:E,minContextSlot:f,maxRetries:c,skipPreflight:m});e.push({signature:b.decode(l)})}else if(t.length>1)for(const n of t)e.push(...yield this.standardSignAndSendTransaction(n));return e})}standardSignTransaction(...t){return g(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(t.length===1){const{transaction:n,account:r,chain:s}=t[0];if(r!==this._account)throw new Error("invalid account");if(s&&!O(s))throw new Error("invalid chain");const a=yield this.signTransaction(C.deserialize(n));e.push({signedTransaction:a.serialize()})}else if(t.length>1){let n;for(const a of t){if(a.account!==this._account)throw new Error("invalid account");if(a.chain){if(!O(a.chain))throw new Error("invalid chain");if(n){if(a.chain!==n)throw new Error("conflicting chain")}else n=a.chain}}const r=t.map(({transaction:a})=>C.deserialize(a)),s=yield this.signAllTransactions(r);e.push(...s.map(a=>({signedTransaction:a.serialize()})))}return e})}standardSignMessage(...t){return g(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(t.length===1){const{message:n,account:r}=t[0];if(r!==this._account)throw new Error("invalid account");const s=yield this.signMessage(n);e.push({signedMessage:n,signature:s})}else if(t.length>1)for(const n of t)e.push(...yield this.standardSignMessage(n));return e})}}D.IFRAME_URL="https://widget.solflare.com/";export{P as StandardSolflareMetaMaskWalletAccount,D as default};
