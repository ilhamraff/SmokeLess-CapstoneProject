/*! For license information please see 334.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkcapstone_project=self.webpackChunkcapstone_project||[]).push([[334],{8334:(e,t,n)=>{n.d(t,{D:()=>se,KR:()=>ie,c7:()=>ae,qk:()=>oe});var r=n(8461),s=n(6743),o=n(5125);const i="firebasestorage.googleapis.com",a="storageBucket";class u extends s.g{constructor(e,t,n=0){super(h(e),`Firebase Storage: ${t} (${h(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var c,l;function h(e){return"storage/"+e}function d(){return new u(c.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function p(e){return new u(c.INVALID_ARGUMENT,e)}function _(){return new u(c.APP_DELETED,"The Firebase app was deleted.")}function f(e,t){return new u(c.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function g(e){throw new u(c.INTERNAL_ERROR,"Internal error: "+e)}!function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"}(c||(c={}));class m{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=m.makeFromUrl(e,t)}catch(t){return new m(e,"")}if(""===n.path)return n;throw r=e,new u(c.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)",s=new RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}const a=t.replace(/[.]/g,"\\."),l=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp(`^https?://${t===i?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let t=0;t<l.length;t++){const r=l[t],s=r.regex.exec(e);if(s){const e=s[r.indices.bucket];let t=s[r.indices.path];t||(t=""),n=new m(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new u(c.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class w{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function b(e){return"string"==typeof e||e instanceof String}function R(e){return T()&&e instanceof Blob}function T(){return"undefined"!=typeof Blob}function E(e,t,n,r){if(r<t)throw p(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw p(`Invalid value for '${e}'. Expected ${n} or less.`)}function k(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function y(e){const t=encodeURIComponent;let n="?";for(const r in e)e.hasOwnProperty(r)&&(n=n+(t(r)+"=")+t(e[r])+"&");return n=n.slice(0,-1),n}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(l||(l={}));class A{constructor(e,t,n,r,s,o,i,a,u,c,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=i,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,r=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==s){const e=d();e.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,e)):r(e)}else t.canceled?r(this.appDelete_?_():new u(c.CANCELED,"User canceled the upload/download.")):r(new u(c.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))};this.canceled_?e(0,new O(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,s=null,o=null,i=!1,a=0;function u(){return 2===a}let c=!1;function l(...e){c||(c=!0,t.apply(null,e))}function h(t){s=setTimeout((()=>{s=null,e(p,u())}),t)}function d(){o&&clearTimeout(o)}function p(e,...t){if(c)return void d();if(e)return d(),void l.call(null,e,...t);if(u()||i)return d(),void l.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let _=!1;function f(e){_||(_=!0,d(),c||(null!==s?(e||(a=2),clearTimeout(s),h(0)):e||(a=1)))}return h(0),o=setTimeout((()=>{i=!0,f(!0)}),n),f}(((e,t)=>{if(t)return void e(!1,new O(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===l.NO_ERROR,s=n.getStatus();if(!t||function(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),s=-1!==t.indexOf(e);return n||r||s}(s,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===l.ABORT;return void e(!1,new O(!1,null,t))}const o=-1!==this.successCodes_.indexOf(s);e(!0,new O(o,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class O{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function v(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function U(...e){const t=v();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(T())return new Blob(e);throw new u(c.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}const I={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class N{constructor(e,t){this.data=e,this.contentType=t||null}}function C(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<=127?t.push(r):r<=2047?t.push(192|r>>6,128|63&r):55296==(64512&r)?n<e.length-1&&56320==(64512&e.charCodeAt(n+1))?(r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)):t.push(239,191,189):56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function x(e,t){switch(e){case I.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r)throw f(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case I.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r)throw f(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=function(e){if("undefined"==typeof atob)throw new u(c.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw f(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class D{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw f(I.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;var r,s;null!=n&&(this.base64=(s=";base64",(r=n).length>=7&&r.substring(r.length-7)===s),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class L{constructor(e,t){let n=0,r="";R(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(R(this.data_)){const o=(n=this.data_,r=e,s=t,n.webkitSlice?n.webkitSlice(r,s):n.mozSlice?n.mozSlice(r,s):n.slice?n.slice(r,s):null);return null===o?null:new L(o)}var n,r,s;{const n=new Uint8Array(this.data_.buffer,e,t-e);return new L(n,!0)}}static getBlob(...e){if(T()){const t=e.map((e=>e instanceof L?e.data_:e));return new L(U.apply(null,t))}{const t=e.map((e=>b(e)?function(e,t){switch(e){case I.RAW:return new N(C(t));case I.BASE64:case I.BASE64URL:return new N(x(e,t));case I.DATA_URL:return new N(function(e){const t=new D(e);return t.base64?x(I.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw f(I.DATA_URL,"Malformed data URL.")}return C(t)}(t.rest)}(t),new D(t).contentType)}throw d()}(I.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let s=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[s++]=e[t]})),new L(r,!0)}}uploadData(){return this.data_}}function P(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}function S(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function B(e,t){return t}class F{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||B}}let M=null;function V(){if(M)return M;const e=[];e.push(new F("bucket")),e.push(new F("generation")),e.push(new F("metageneration")),e.push(new F("name","fullPath",!0));const t=new F("name");t.xform=function(e,t){return function(e){return!b(e)||e.length<2?e:S(e)}(t)},e.push(t);const n=new F("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new F("timeCreated")),e.push(new F("updated")),e.push(new F("md5Hash",null,!0)),e.push(new F("cacheControl",null,!0)),e.push(new F("contentDisposition",null,!0)),e.push(new F("contentEncoding",null,!0)),e.push(new F("contentLanguage",null,!0)),e.push(new F("contentType",null,!0)),e.push(new F("metadata","customMetadata",!0)),M=e,M}function j(e,t,n){const r=P(t);return null===r?null:function(e,t,n){const r={type:"file"},s=n.length;for(let e=0;e<s;e++){const s=n[e];r[s.local]=s.xform(r,t[s.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,s=new m(n,r);return t._makeStorageReference(s)}})}(r,e),r}(e,r,n)}class K{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function $(e){if(!e)throw d()}function q(e){return function(t,n){let r;var s,o;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new u(c.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new u(c.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new u(c.QUOTA_EXCEEDED,"Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,r=new u(c.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function z(e,t,n,r,s){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();i["Content-Type"]="multipart/related; boundary="+a;const l=function(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return t&&t.type()||"application/octet-stream"}(0,t)),r}(t,r,s),h="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+function(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}(l,n)+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",d="\r\n--"+a+"--",p=L.getBlob(h,r,d);if(null===p)throw new u(c.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.");const _={name:l.fullPath},f=k(o,e.host,e._protocol),g=e.maxUploadRetryTime,m=new K(f,"POST",function(e,t){return function(n,r){const s=j(e,r,t);return $(null!==s),s}}(e,n),g);return m.urlParams=_,m.headers=i,m.body=p.uploadData(),m.errorHandler=q(t),m}let H=null;class W{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=l.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=l.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=l.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw g("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw g("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw g("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw g("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw g("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class X extends W{initXhr(){this.xhr_.responseType="text"}}function Z(){return H?H():new X}class G{constructor(e,t){this._service=e,this._location=t instanceof m?t:m.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new G(e,t)}get root(){const e=new m(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return S(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new m(this._location.bucket,e);return new G(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new u(c.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function J(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=k(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,o=new K(r,"GET",function(e,t){return function(n,r){const s=j(e,r,t);return $(null!==s),function(e,t,n,r){const s=P(t);if(null===s)return null;if(!b(s.downloadTokens))return null;const o=s.downloadTokens;if(0===o.length)return null;const i=encodeURIComponent;return o.split(",").map((t=>{const s=e.bucket,o=e.fullPath;return k("/b/"+i(s)+"/o/"+i(o),n,r)+y({alt:"media",token:t})}))[0]}(s,r,e.host,e._protocol)}}(e,n),s);return o.errorHandler=function(e){const t=q(e);return function(n,r){let s=t(n,r);var o;return 404===n.getStatus()&&(o=e.path,s=new u(c.OBJECT_NOT_FOUND,"Object '"+o+"' does not exist.")),s.serverResponse=r.serverResponse,s}}(t),o}(e.storage,e._location,V());return e.storage.makeRequestWithTokens(t,Z).then((e=>{if(null===e)throw new u(c.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e}))}function Y(e,t){if(e instanceof ee){const n=e;if(null==n._bucket)throw new u(c.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?");const r=new G(n,n._bucket);return null!=t?Y(r,t):r}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new m(e._location.bucket,n);return new G(e.storage,r)}(e,t):e}function Q(e,t){const n=null==t?void 0:t[a];return null==n?null:m.makeFromBucketSpec(n,e)}class ee{constructor(e,t,n,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=i,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?m.makeFromBucketSpec(r,this._host):Q(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=m.makeFromBucketSpec(this._url,e):this._bucket=Q(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){E("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){E("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new G(this,e)}_makeRequest(e,t,n,r,s=!0){if(this._deleted)return new w(_());{const o=function(e,t,n,r,s,o,i=!0){const a=y(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new A(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,i)}(e,this._appId,n,r,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const te="@firebase/storage",ne="0.12.5",re="storage";function se(e,t,n){return function(e,t,n){e._throwIfRoot("uploadBytes");const r=z(e.storage,e._location,V(),new L(t,!0),n);return e.storage.makeRequestWithTokens(r,Z).then((t=>({metadata:t,ref:e})))}(e=(0,s.Ku)(e),t,n)}function oe(e){return J(e=(0,s.Ku)(e))}function ie(e,t){return function(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof ee)return new G(e,t);throw p("To use ref(service, url), the first argument must be a Storage instance.")}return Y(e,t)}(e=(0,s.Ku)(e),t)}function ae(e=(0,r.Sx)(),t){e=(0,s.Ku)(e);const n=(0,r.j6)(e,re).getImmediate({identifier:t}),o=(0,s.yU)("storage");return o&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken="string"==typeof o?o:(0,s.Fy)(o,e.app.options.projectId))}(e,t,n,r)}(n,...o),n}(0,r.om)(new o.uA(re,(function(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new ee(n,s,o,t,r.MF)}),"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(te,ne,""),(0,r.KO)(te,ne,"esm2017")}}]);
//# sourceMappingURL=334.bundle.js.map