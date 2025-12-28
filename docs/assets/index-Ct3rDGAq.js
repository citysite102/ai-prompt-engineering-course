(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))d(C);new MutationObserver(C=>{for(const D of C)if(D.type==="childList")for(const w of D.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&d(w)}).observe(document,{childList:!0,subtree:!0});function E(C){const D={};return C.integrity&&(D.integrity=C.integrity),C.referrerPolicy&&(D.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?D.credentials="include":C.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function d(C){if(C.ep)return;C.ep=!0;const D=E(C);fetch(C.href,D)}})();var sf={exports:{}},Ta={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function a1(){if(A0)return Ta;A0=1;var z=Symbol.for("react.transitional.element"),j=Symbol.for("react.fragment");function E(d,C,D){var w=null;if(D!==void 0&&(w=""+D),C.key!==void 0&&(w=""+C.key),"key"in C){D={};for(var K in C)K!=="key"&&(D[K]=C[K])}else D=C;return C=D.ref,{$$typeof:z,type:d,key:w,ref:C!==void 0?C:null,props:D}}return Ta.Fragment=j,Ta.jsx=E,Ta.jsxs=E,Ta}var x0;function u1(){return x0||(x0=1,sf.exports=a1()),sf.exports}var s=u1(),of={exports:{}},X={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function i1(){if(S0)return X;S0=1;var z=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),w=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),tt=Symbol.iterator;function Yt(r){return r===null||typeof r!="object"?null:(r=tt&&r[tt]||r["@@iterator"],typeof r=="function"?r:null)}var xt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dt=Object.assign,Al={};function L(r,T,_){this.props=r,this.context=T,this.refs=Al,this.updater=_||xt}L.prototype.isReactComponent={},L.prototype.setState=function(r,T){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,T,"setState")},L.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function rt(){}rt.prototype=L.prototype;function ct(r,T,_){this.props=r,this.context=T,this.refs=Al,this.updater=_||xt}var Lt=ct.prototype=new rt;Lt.constructor=ct,Dt(Lt,L.prototype),Lt.isPureReactComponent=!0;var Nl=Array.isArray;function Zt(){}var F={H:null,A:null,T:null,S:null},Vt=Object.prototype.hasOwnProperty;function Ml(r,T,_){var U=_.ref;return{$$typeof:z,type:r,key:T,ref:U!==void 0?U:null,props:_}}function Ve(r,T){return Ml(r.type,T,r.props)}function _l(r){return typeof r=="object"&&r!==null&&r.$$typeof===z}function wt(r){var T={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(_){return T[_]})}var ze=/\/+/g;function Ul(r,T){return typeof r=="object"&&r!==null&&r.key!=null?wt(""+r.key):T.toString(36)}function xl(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Zt,Zt):(r.status="pending",r.then(function(T){r.status==="pending"&&(r.status="fulfilled",r.value=T)},function(T){r.status==="pending"&&(r.status="rejected",r.reason=T)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function p(r,T,_,U,Q){var J=typeof r;(J==="undefined"||J==="boolean")&&(r=null);var at=!1;if(r===null)at=!0;else switch(J){case"bigint":case"string":case"number":at=!0;break;case"object":switch(r.$$typeof){case z:case j:at=!0;break;case q:return at=r._init,p(at(r._payload),T,_,U,Q)}}if(at)return Q=Q(r),at=U===""?"."+Ul(r,0):U,Nl(Q)?(_="",at!=null&&(_=at.replace(ze,"$&/")+"/"),p(Q,T,_,"",function(jn){return jn})):Q!=null&&(_l(Q)&&(Q=Ve(Q,_+(Q.key==null||r&&r.key===Q.key?"":(""+Q.key).replace(ze,"$&/")+"/")+at)),T.push(Q)),1;at=0;var Xt=U===""?".":U+":";if(Nl(r))for(var St=0;St<r.length;St++)U=r[St],J=Xt+Ul(U,St),at+=p(U,T,_,J,Q);else if(St=Yt(r),typeof St=="function")for(r=St.call(r),St=0;!(U=r.next()).done;)U=U.value,J=Xt+Ul(U,St++),at+=p(U,T,_,J,Q);else if(J==="object"){if(typeof r.then=="function")return p(xl(r),T,_,U,Q);throw T=String(r),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return at}function N(r,T,_){if(r==null)return r;var U=[],Q=0;return p(r,U,"","",function(J){return T.call(_,J,Q++)}),U}function Y(r){if(r._status===-1){var T=r._result;T=T(),T.then(function(_){(r._status===0||r._status===-1)&&(r._status=1,r._result=_)},function(_){(r._status===0||r._status===-1)&&(r._status=2,r._result=_)}),r._status===-1&&(r._status=0,r._result=T)}if(r._status===1)return r._result.default;throw r._result}var ft=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},mt={map:N,forEach:function(r,T,_){N(r,function(){T.apply(this,arguments)},_)},count:function(r){var T=0;return N(r,function(){T++}),T},toArray:function(r){return N(r,function(T){return T})||[]},only:function(r){if(!_l(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return X.Activity=H,X.Children=mt,X.Component=L,X.Fragment=E,X.Profiler=C,X.PureComponent=ct,X.StrictMode=d,X.Suspense=M,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,X.__COMPILER_RUNTIME={__proto__:null,c:function(r){return F.H.useMemoCache(r)}},X.cache=function(r){return function(){return r.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(r,T,_){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var U=Dt({},r.props),Q=r.key;if(T!=null)for(J in T.key!==void 0&&(Q=""+T.key),T)!Vt.call(T,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&T.ref===void 0||(U[J]=T[J]);var J=arguments.length-2;if(J===1)U.children=_;else if(1<J){for(var at=Array(J),Xt=0;Xt<J;Xt++)at[Xt]=arguments[Xt+2];U.children=at}return Ml(r.type,Q,U)},X.createContext=function(r){return r={$$typeof:w,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:D,_context:r},r},X.createElement=function(r,T,_){var U,Q={},J=null;if(T!=null)for(U in T.key!==void 0&&(J=""+T.key),T)Vt.call(T,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(Q[U]=T[U]);var at=arguments.length-2;if(at===1)Q.children=_;else if(1<at){for(var Xt=Array(at),St=0;St<at;St++)Xt[St]=arguments[St+2];Q.children=Xt}if(r&&r.defaultProps)for(U in at=r.defaultProps,at)Q[U]===void 0&&(Q[U]=at[U]);return Ml(r,J,Q)},X.createRef=function(){return{current:null}},X.forwardRef=function(r){return{$$typeof:K,render:r}},X.isValidElement=_l,X.lazy=function(r){return{$$typeof:q,_payload:{_status:-1,_result:r},_init:Y}},X.memo=function(r,T){return{$$typeof:S,type:r,compare:T===void 0?null:T}},X.startTransition=function(r){var T=F.T,_={};F.T=_;try{var U=r(),Q=F.S;Q!==null&&Q(_,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(Zt,ft)}catch(J){ft(J)}finally{T!==null&&_.types!==null&&(T.types=_.types),F.T=T}},X.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},X.use=function(r){return F.H.use(r)},X.useActionState=function(r,T,_){return F.H.useActionState(r,T,_)},X.useCallback=function(r,T){return F.H.useCallback(r,T)},X.useContext=function(r){return F.H.useContext(r)},X.useDebugValue=function(){},X.useDeferredValue=function(r,T){return F.H.useDeferredValue(r,T)},X.useEffect=function(r,T){return F.H.useEffect(r,T)},X.useEffectEvent=function(r){return F.H.useEffectEvent(r)},X.useId=function(){return F.H.useId()},X.useImperativeHandle=function(r,T,_){return F.H.useImperativeHandle(r,T,_)},X.useInsertionEffect=function(r,T){return F.H.useInsertionEffect(r,T)},X.useLayoutEffect=function(r,T){return F.H.useLayoutEffect(r,T)},X.useMemo=function(r,T){return F.H.useMemo(r,T)},X.useOptimistic=function(r,T){return F.H.useOptimistic(r,T)},X.useReducer=function(r,T,_){return F.H.useReducer(r,T,_)},X.useRef=function(r){return F.H.useRef(r)},X.useState=function(r){return F.H.useState(r)},X.useSyncExternalStore=function(r,T,_){return F.H.useSyncExternalStore(r,T,_)},X.useTransition=function(){return F.H.useTransition()},X.version="19.2.3",X}var T0;function vf(){return T0||(T0=1,of.exports=i1()),of.exports}var pl=vf(),df={exports:{}},za={},rf={exports:{}},mf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function c1(){return z0||(z0=1,(function(z){function j(p,N){var Y=p.length;p.push(N);t:for(;0<Y;){var ft=Y-1>>>1,mt=p[ft];if(0<C(mt,N))p[ft]=N,p[Y]=mt,Y=ft;else break t}}function E(p){return p.length===0?null:p[0]}function d(p){if(p.length===0)return null;var N=p[0],Y=p.pop();if(Y!==N){p[0]=Y;t:for(var ft=0,mt=p.length,r=mt>>>1;ft<r;){var T=2*(ft+1)-1,_=p[T],U=T+1,Q=p[U];if(0>C(_,Y))U<mt&&0>C(Q,_)?(p[ft]=Q,p[U]=Y,ft=U):(p[ft]=_,p[T]=Y,ft=T);else if(U<mt&&0>C(Q,Y))p[ft]=Q,p[U]=Y,ft=U;else break t}}return N}function C(p,N){var Y=p.sortIndex-N.sortIndex;return Y!==0?Y:p.id-N.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;z.unstable_now=function(){return D.now()}}else{var w=Date,K=w.now();z.unstable_now=function(){return w.now()-K}}var M=[],S=[],q=1,H=null,tt=3,Yt=!1,xt=!1,Dt=!1,Al=!1,L=typeof setTimeout=="function"?setTimeout:null,rt=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;function Lt(p){for(var N=E(S);N!==null;){if(N.callback===null)d(S);else if(N.startTime<=p)d(S),N.sortIndex=N.expirationTime,j(M,N);else break;N=E(S)}}function Nl(p){if(Dt=!1,Lt(p),!xt)if(E(M)!==null)xt=!0,Zt||(Zt=!0,wt());else{var N=E(S);N!==null&&xl(Nl,N.startTime-p)}}var Zt=!1,F=-1,Vt=5,Ml=-1;function Ve(){return Al?!0:!(z.unstable_now()-Ml<Vt)}function _l(){if(Al=!1,Zt){var p=z.unstable_now();Ml=p;var N=!0;try{t:{xt=!1,Dt&&(Dt=!1,rt(F),F=-1),Yt=!0;var Y=tt;try{l:{for(Lt(p),H=E(M);H!==null&&!(H.expirationTime>p&&Ve());){var ft=H.callback;if(typeof ft=="function"){H.callback=null,tt=H.priorityLevel;var mt=ft(H.expirationTime<=p);if(p=z.unstable_now(),typeof mt=="function"){H.callback=mt,Lt(p),N=!0;break l}H===E(M)&&d(M),Lt(p)}else d(M);H=E(M)}if(H!==null)N=!0;else{var r=E(S);r!==null&&xl(Nl,r.startTime-p),N=!1}}break t}finally{H=null,tt=Y,Yt=!1}N=void 0}}finally{N?wt():Zt=!1}}}var wt;if(typeof ct=="function")wt=function(){ct(_l)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,Ul=ze.port2;ze.port1.onmessage=_l,wt=function(){Ul.postMessage(null)}}else wt=function(){L(_l,0)};function xl(p,N){F=L(function(){p(z.unstable_now())},N)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(p){p.callback=null},z.unstable_forceFrameRate=function(p){0>p||125<p?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vt=0<p?Math.floor(1e3/p):5},z.unstable_getCurrentPriorityLevel=function(){return tt},z.unstable_next=function(p){switch(tt){case 1:case 2:case 3:var N=3;break;default:N=tt}var Y=tt;tt=N;try{return p()}finally{tt=Y}},z.unstable_requestPaint=function(){Al=!0},z.unstable_runWithPriority=function(p,N){switch(p){case 1:case 2:case 3:case 4:case 5:break;default:p=3}var Y=tt;tt=p;try{return N()}finally{tt=Y}},z.unstable_scheduleCallback=function(p,N,Y){var ft=z.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ft+Y:ft):Y=ft,p){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=Y+mt,p={id:q++,callback:N,priorityLevel:p,startTime:Y,expirationTime:mt,sortIndex:-1},Y>ft?(p.sortIndex=Y,j(S,p),E(M)===null&&p===E(S)&&(Dt?(rt(F),F=-1):Dt=!0,xl(Nl,Y-ft))):(p.sortIndex=mt,j(M,p),xt||Yt||(xt=!0,Zt||(Zt=!0,wt()))),p},z.unstable_shouldYield=Ve,z.unstable_wrapCallback=function(p){var N=tt;return function(){var Y=tt;tt=N;try{return p.apply(this,arguments)}finally{tt=Y}}}})(mf)),mf}var E0;function f1(){return E0||(E0=1,rf.exports=c1()),rf.exports}var hf={exports:{}},qt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function s1(){if(N0)return qt;N0=1;var z=vf();function j(M){var S="https://react.dev/errors/"+M;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var q=2;q<arguments.length;q++)S+="&args[]="+encodeURIComponent(arguments[q])}return"Minified React error #"+M+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(){}var d={d:{f:E,r:function(){throw Error(j(522))},D:E,C:E,L:E,m:E,X:E,S:E,M:E},p:0,findDOMNode:null},C=Symbol.for("react.portal");function D(M,S,q){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:H==null?null:""+H,children:M,containerInfo:S,implementation:q}}var w=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function K(M,S){if(M==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,qt.createPortal=function(M,S){var q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(j(299));return D(M,S,null,q)},qt.flushSync=function(M){var S=w.T,q=d.p;try{if(w.T=null,d.p=2,M)return M()}finally{w.T=S,d.p=q,d.d.f()}},qt.preconnect=function(M,S){typeof M=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,d.d.C(M,S))},qt.prefetchDNS=function(M){typeof M=="string"&&d.d.D(M)},qt.preinit=function(M,S){if(typeof M=="string"&&S&&typeof S.as=="string"){var q=S.as,H=K(q,S.crossOrigin),tt=typeof S.integrity=="string"?S.integrity:void 0,Yt=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;q==="style"?d.d.S(M,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:H,integrity:tt,fetchPriority:Yt}):q==="script"&&d.d.X(M,{crossOrigin:H,integrity:tt,fetchPriority:Yt,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},qt.preinitModule=function(M,S){if(typeof M=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var q=K(S.as,S.crossOrigin);d.d.M(M,{crossOrigin:q,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&d.d.M(M)},qt.preload=function(M,S){if(typeof M=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var q=S.as,H=K(q,S.crossOrigin);d.d.L(M,q,{crossOrigin:H,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},qt.preloadModule=function(M,S){if(typeof M=="string")if(S){var q=K(S.as,S.crossOrigin);d.d.m(M,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:q,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else d.d.m(M)},qt.requestFormReset=function(M){d.d.r(M)},qt.unstable_batchedUpdates=function(M,S){return M(S)},qt.useFormState=function(M,S,q){return w.H.useFormState(M,S,q)},qt.useFormStatus=function(){return w.H.useHostTransitionStatus()},qt.version="19.2.3",qt}var M0;function o1(){if(M0)return hf.exports;M0=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(j){console.error(j)}}return z(),hf.exports=s1(),hf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function d1(){if(_0)return za;_0=1;var z=f1(),j=vf(),E=o1();function d(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)l+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function D(t){var l=t,e=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(e=l.return),t=l.return;while(t)}return l.tag===3?e:null}function w(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function K(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function M(t){if(D(t)!==t)throw Error(d(188))}function S(t){var l=t.alternate;if(!l){if(l=D(t),l===null)throw Error(d(188));return l!==t?null:t}for(var e=t,n=l;;){var a=e.return;if(a===null)break;var u=a.alternate;if(u===null){if(n=a.return,n!==null){e=n;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===e)return M(a),t;if(u===n)return M(a),l;u=u.sibling}throw Error(d(188))}if(e.return!==n.return)e=a,n=u;else{for(var i=!1,c=a.child;c;){if(c===e){i=!0,e=a,n=u;break}if(c===n){i=!0,n=a,e=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===e){i=!0,e=u,n=a;break}if(c===n){i=!0,n=u,e=a;break}c=c.sibling}if(!i)throw Error(d(189))}}if(e.alternate!==n)throw Error(d(190))}if(e.tag!==3)throw Error(d(188));return e.stateNode.current===e?t:l}function q(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=q(t),l!==null)return l;t=t.sibling}return null}var H=Object.assign,tt=Symbol.for("react.element"),Yt=Symbol.for("react.transitional.element"),xt=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),Al=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),rt=Symbol.for("react.consumer"),ct=Symbol.for("react.context"),Lt=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Zt=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Ml=Symbol.for("react.activity"),Ve=Symbol.for("react.memo_cache_sentinel"),_l=Symbol.iterator;function wt(t){return t===null||typeof t!="object"?null:(t=_l&&t[_l]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Symbol.for("react.client.reference");function Ul(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ze?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Dt:return"Fragment";case L:return"Profiler";case Al:return"StrictMode";case Nl:return"Suspense";case Zt:return"SuspenseList";case Ml:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case xt:return"Portal";case ct:return t.displayName||"Context";case rt:return(t._context.displayName||"Context")+".Consumer";case Lt:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return l=t.displayName||null,l!==null?l:Ul(t.type)||"Memo";case Vt:l=t._payload,t=t._init;try{return Ul(t(l))}catch{}}return null}var xl=Array.isArray,p=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ft=[],mt=-1;function r(t){return{current:t}}function T(t){0>mt||(t.current=ft[mt],ft[mt]=null,mt--)}function _(t,l){mt++,ft[mt]=t.current,t.current=l}var U=r(null),Q=r(null),J=r(null),at=r(null);function Xt(t,l){switch(_(J,l),_(Q,t),_(U,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?Zd(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=Zd(l),t=Vd(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}T(U),_(U,t)}function St(){T(U),T(Q),T(J)}function jn(t){t.memoizedState!==null&&_(at,t);var l=U.current,e=Vd(l,t.type);l!==e&&(_(Q,t),_(U,e))}function Ea(t){Q.current===t&&(T(U),T(Q)),at.current===t&&(T(at),pa._currentValue=Y)}var Vu,bf;function Ee(t){if(Vu===void 0)try{throw Error()}catch(e){var l=e.stack.trim().match(/\n( *(at )?)/);Vu=l&&l[1]||"",bf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vu+t+bf}var wu=!1;function Ku(t,l){if(!t||wu)return"";wu=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(l){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(g){var v=g}Reflect.construct(t,[],x)}else{try{x.call()}catch(g){v=g}t.call(x.prototype)}}else{try{throw Error()}catch(g){v=g}(x=t())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(g){if(g&&v&&typeof g.stack=="string")return[g.stack,v.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var f=i.split(`
`),y=c.split(`
`);for(a=n=0;n<f.length&&!f[n].includes("DetermineComponentFrameRoot");)n++;for(;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;if(n===f.length||a===y.length)for(n=f.length-1,a=y.length-1;1<=n&&0<=a&&f[n]!==y[a];)a--;for(;1<=n&&0<=a;n--,a--)if(f[n]!==y[a]){if(n!==1||a!==1)do if(n--,a--,0>a||f[n]!==y[a]){var b=`
`+f[n].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=n&&0<=a);break}}}finally{wu=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Ee(e):""}function G0(t,l){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==l&&l!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Ku(t.type,!1);case 11:return Ku(t.type.render,!1);case 1:return Ku(t.type,!0);case 31:return Ee("Activity");default:return""}}function pf(t){try{var l="",e=null;do l+=G0(t,e),e=t,t=t.return;while(t);return l}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ju=Object.prototype.hasOwnProperty,ku=z.unstable_scheduleCallback,Iu=z.unstable_cancelCallback,H0=z.unstable_shouldYield,B0=z.unstable_requestPaint,Pt=z.unstable_now,q0=z.unstable_getCurrentPriorityLevel,Af=z.unstable_ImmediatePriority,xf=z.unstable_UserBlockingPriority,Na=z.unstable_NormalPriority,Y0=z.unstable_LowPriority,Sf=z.unstable_IdlePriority,L0=z.log,X0=z.unstable_setDisableYieldValue,On=null,tl=null;function Pl(t){if(typeof L0=="function"&&X0(t),tl&&typeof tl.setStrictMode=="function")try{tl.setStrictMode(On,t)}catch{}}var ll=Math.clz32?Math.clz32:V0,Q0=Math.log,Z0=Math.LN2;function V0(t){return t>>>=0,t===0?32:31-(Q0(t)/Z0|0)|0}var Ma=256,_a=262144,Ca=4194304;function Ne(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ja(t,l,e){var n=t.pendingLanes;if(n===0)return 0;var a=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=n&134217727;return c!==0?(n=c&~u,n!==0?a=Ne(n):(i&=c,i!==0?a=Ne(i):e||(e=c&~t,e!==0&&(a=Ne(e))))):(c=n&~u,c!==0?a=Ne(c):i!==0?a=Ne(i):e||(e=n&~t,e!==0&&(a=Ne(e)))),a===0?0:l!==0&&l!==a&&(l&u)===0&&(u=a&-a,e=l&-l,u>=e||u===32&&(e&4194048)!==0)?l:a}function Dn(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function w0(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tf(){var t=Ca;return Ca<<=1,(Ca&62914560)===0&&(Ca=4194304),t}function Wu(t){for(var l=[],e=0;31>e;e++)l.push(t);return l}function Un(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function K0(t,l,e,n,a,u){var i=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,y=t.hiddenUpdates;for(e=i&~e;0<e;){var b=31-ll(e),x=1<<b;c[b]=0,f[b]=-1;var v=y[b];if(v!==null)for(y[b]=null,b=0;b<v.length;b++){var g=v[b];g!==null&&(g.lane&=-536870913)}e&=~x}n!==0&&zf(t,n,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~l))}function zf(t,l,e){t.pendingLanes|=l,t.suspendedLanes&=~l;var n=31-ll(l);t.entangledLanes|=l,t.entanglements[n]=t.entanglements[n]|1073741824|e&261930}function Ef(t,l){var e=t.entangledLanes|=l;for(t=t.entanglements;e;){var n=31-ll(e),a=1<<n;a&l|t[n]&l&&(t[n]|=l),e&=~a}}function Nf(t,l){var e=l&-l;return e=(e&42)!==0?1:$u(e),(e&(t.suspendedLanes|l))!==0?0:e}function $u(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mf(){var t=N.p;return t!==0?t:(t=window.event,t===void 0?32:m0(t.type))}function _f(t,l){var e=N.p;try{return N.p=t,l()}finally{N.p=e}}var te=Math.random().toString(36).slice(2),Ut="__reactFiber$"+te,Kt="__reactProps$"+te,we="__reactContainer$"+te,Pu="__reactEvents$"+te,J0="__reactListeners$"+te,k0="__reactHandles$"+te,Cf="__reactResources$"+te,Rn="__reactMarker$"+te;function ti(t){delete t[Ut],delete t[Kt],delete t[Pu],delete t[J0],delete t[k0]}function Ke(t){var l=t[Ut];if(l)return l;for(var e=t.parentNode;e;){if(l=e[we]||e[Ut]){if(e=l.alternate,l.child!==null||e!==null&&e.child!==null)for(t=$d(t);t!==null;){if(e=t[Ut])return e;t=$d(t)}return l}t=e,e=t.parentNode}return null}function Je(t){if(t=t[Ut]||t[we]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function Gn(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(d(33))}function ke(t){var l=t[Cf];return l||(l=t[Cf]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function jt(t){t[Rn]=!0}var jf=new Set,Of={};function Me(t,l){Ie(t,l),Ie(t+"Capture",l)}function Ie(t,l){for(Of[t]=l,t=0;t<l.length;t++)jf.add(l[t])}var I0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Df={},Uf={};function W0(t){return Ju.call(Uf,t)?!0:Ju.call(Df,t)?!1:I0.test(t)?Uf[t]=!0:(Df[t]=!0,!1)}function Oa(t,l,e){if(W0(l))if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var n=l.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+e)}}function Da(t,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+e)}}function Rl(t,l,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(l,e,""+n)}}function sl(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rf(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function $0(t,l,e){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return a.call(this)},set:function(i){e=""+i,u.call(this,i)}}),Object.defineProperty(t,l,{enumerable:n.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function li(t){if(!t._valueTracker){var l=Rf(t)?"checked":"value";t._valueTracker=$0(t,l,""+t[l])}}function Gf(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var e=l.getValue(),n="";return t&&(n=Rf(t)?t.checked?"true":"false":t.value),t=n,t!==e?(l.setValue(t),!0):!1}function Ua(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var F0=/[\n"\\]/g;function ol(t){return t.replace(F0,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function ei(t,l,e,n,a,u,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),l!=null?i==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+sl(l)):t.value!==""+sl(l)&&(t.value=""+sl(l)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),l!=null?ni(t,i,sl(l)):e!=null?ni(t,i,sl(e)):n!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+sl(c):t.removeAttribute("name")}function Hf(t,l,e,n,a,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),l!=null||e!=null){if(!(u!=="submit"&&u!=="reset"||l!=null)){li(t);return}e=e!=null?""+sl(e):"",l=l!=null?""+sl(l):e,c||l===t.value||(t.value=l),t.defaultValue=l}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=c?t.checked:!!n,t.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),li(t)}function ni(t,l,e){l==="number"&&Ua(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function We(t,l,e,n){if(t=t.options,l){l={};for(var a=0;a<e.length;a++)l["$"+e[a]]=!0;for(e=0;e<t.length;e++)a=l.hasOwnProperty("$"+t[e].value),t[e].selected!==a&&(t[e].selected=a),a&&n&&(t[e].defaultSelected=!0)}else{for(e=""+sl(e),l=null,a=0;a<t.length;a++){if(t[a].value===e){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}l!==null||t[a].disabled||(l=t[a])}l!==null&&(l.selected=!0)}}function Bf(t,l,e){if(l!=null&&(l=""+sl(l),l!==t.value&&(t.value=l),e==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=e!=null?""+sl(e):""}function qf(t,l,e,n){if(l==null){if(n!=null){if(e!=null)throw Error(d(92));if(xl(n)){if(1<n.length)throw Error(d(93));n=n[0]}e=n}e==null&&(e=""),l=e}e=sl(l),t.defaultValue=e,n=t.textContent,n===e&&n!==""&&n!==null&&(t.value=n),li(t)}function $e(t,l){if(l){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=l;return}}t.textContent=l}var P0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yf(t,l,e){var n=l.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?n?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":n?t.setProperty(l,e):typeof e!="number"||e===0||P0.has(l)?l==="float"?t.cssFloat=e:t[l]=(""+e).trim():t[l]=e+"px"}function Lf(t,l,e){if(l!=null&&typeof l!="object")throw Error(d(62));if(t=t.style,e!=null){for(var n in e)!e.hasOwnProperty(n)||l!=null&&l.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var a in l)n=l[a],l.hasOwnProperty(a)&&e[a]!==n&&Yf(t,a,n)}else for(var u in l)l.hasOwnProperty(u)&&Yf(t,u,l[u])}function ai(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ra(t){return lr.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Gl(){}var ui=null;function ii(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fe=null,Pe=null;function Xf(t){var l=Je(t);if(l&&(t=l.stateNode)){var e=t[Kt]||null;t:switch(t=l.stateNode,l.type){case"input":if(ei(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),l=e.name,e.type==="radio"&&l!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+ol(""+l)+'"][type="radio"]'),l=0;l<e.length;l++){var n=e[l];if(n!==t&&n.form===t.form){var a=n[Kt]||null;if(!a)throw Error(d(90));ei(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(l=0;l<e.length;l++)n=e[l],n.form===t.form&&Gf(n)}break t;case"textarea":Bf(t,e.value,e.defaultValue);break t;case"select":l=e.value,l!=null&&We(t,!!e.multiple,l,!1)}}}var ci=!1;function Qf(t,l,e){if(ci)return t(l,e);ci=!0;try{var n=t(l);return n}finally{if(ci=!1,(Fe!==null||Pe!==null)&&(xu(),Fe&&(l=Fe,t=Pe,Pe=Fe=null,Xf(l),t)))for(l=0;l<t.length;l++)Xf(t[l])}}function Hn(t,l){var e=t.stateNode;if(e===null)return null;var n=e[Kt]||null;if(n===null)return null;e=n[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(d(231,l,typeof e));return e}var Hl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fi=!1;if(Hl)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){fi=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{fi=!1}var le=null,si=null,Ga=null;function Zf(){if(Ga)return Ga;var t,l=si,e=l.length,n,a="value"in le?le.value:le.textContent,u=a.length;for(t=0;t<e&&l[t]===a[t];t++);var i=e-t;for(n=1;n<=i&&l[e-n]===a[u-n];n++);return Ga=a.slice(t,1<n?1-n:void 0)}function Ha(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function Vf(){return!1}function Jt(t){function l(e,n,a,u,i){this._reactName=e,this._targetInst=a,this.type=n,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ba:Vf,this.isPropagationStopped=Vf,this}return H(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),l}var _e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qa=Jt(_e),qn=H({},_e,{view:0,detail:0}),er=Jt(qn),oi,di,Yn,Ya=H({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yn&&(Yn&&t.type==="mousemove"?(oi=t.screenX-Yn.screenX,di=t.screenY-Yn.screenY):di=oi=0,Yn=t),oi)},movementY:function(t){return"movementY"in t?t.movementY:di}}),wf=Jt(Ya),nr=H({},Ya,{dataTransfer:0}),ar=Jt(nr),ur=H({},qn,{relatedTarget:0}),ri=Jt(ur),ir=H({},_e,{animationName:0,elapsedTime:0,pseudoElement:0}),cr=Jt(ir),fr=H({},_e,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sr=Jt(fr),or=H({},_e,{data:0}),Kf=Jt(or),dr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hr(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=mr[t])?!!l[t]:!1}function mi(){return hr}var yr=H({},qn,{key:function(t){if(t.key){var l=dr[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=Ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rr[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(t){return t.type==="keypress"?Ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vr=Jt(yr),gr=H({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=Jt(gr),br=H({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),pr=Jt(br),Ar=H({},_e,{propertyName:0,elapsedTime:0,pseudoElement:0}),xr=Jt(Ar),Sr=H({},Ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tr=Jt(Sr),zr=H({},_e,{newState:0,oldState:0}),Er=Jt(zr),Nr=[9,13,27,32],hi=Hl&&"CompositionEvent"in window,Ln=null;Hl&&"documentMode"in document&&(Ln=document.documentMode);var Mr=Hl&&"TextEvent"in window&&!Ln,kf=Hl&&(!hi||Ln&&8<Ln&&11>=Ln),If=" ",Wf=!1;function $f(t,l){switch(t){case"keyup":return Nr.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tn=!1;function _r(t,l){switch(t){case"compositionend":return Ff(l);case"keypress":return l.which!==32?null:(Wf=!0,If);case"textInput":return t=l.data,t===If&&Wf?null:t;default:return null}}function Cr(t,l){if(tn)return t==="compositionend"||!hi&&$f(t,l)?(t=Zf(),Ga=si=le=null,tn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return kf&&l.locale!=="ko"?null:l.data;default:return null}}var jr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pf(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!jr[t.type]:l==="textarea"}function ts(t,l,e,n){Fe?Pe?Pe.push(n):Pe=[n]:Fe=n,l=_u(l,"onChange"),0<l.length&&(e=new qa("onChange","change",null,e,n),t.push({event:e,listeners:l}))}var Xn=null,Qn=null;function Or(t){Bd(t,0)}function La(t){var l=Gn(t);if(Gf(l))return t}function ls(t,l){if(t==="change")return l}var es=!1;if(Hl){var yi;if(Hl){var vi="oninput"in document;if(!vi){var ns=document.createElement("div");ns.setAttribute("oninput","return;"),vi=typeof ns.oninput=="function"}yi=vi}else yi=!1;es=yi&&(!document.documentMode||9<document.documentMode)}function as(){Xn&&(Xn.detachEvent("onpropertychange",us),Qn=Xn=null)}function us(t){if(t.propertyName==="value"&&La(Qn)){var l=[];ts(l,Qn,t,ii(t)),Qf(Or,l)}}function Dr(t,l,e){t==="focusin"?(as(),Xn=l,Qn=e,Xn.attachEvent("onpropertychange",us)):t==="focusout"&&as()}function Ur(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return La(Qn)}function Rr(t,l){if(t==="click")return La(l)}function Gr(t,l){if(t==="input"||t==="change")return La(l)}function Hr(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var el=typeof Object.is=="function"?Object.is:Hr;function Zn(t,l){if(el(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var e=Object.keys(t),n=Object.keys(l);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var a=e[n];if(!Ju.call(l,a)||!el(t[a],l[a]))return!1}return!0}function is(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cs(t,l){var e=is(t);t=0;for(var n;e;){if(e.nodeType===3){if(n=t+e.textContent.length,t<=l&&n>=l)return{node:e,offset:l-t};t=n}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=is(e)}}function fs(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?fs(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function ss(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=Ua(t.document);l instanceof t.HTMLIFrameElement;){try{var e=typeof l.contentWindow.location.href=="string"}catch{e=!1}if(e)t=l.contentWindow;else break;l=Ua(t.document)}return l}function gi(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var Br=Hl&&"documentMode"in document&&11>=document.documentMode,ln=null,bi=null,Vn=null,pi=!1;function os(t,l,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;pi||ln==null||ln!==Ua(n)||(n=ln,"selectionStart"in n&&gi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vn&&Zn(Vn,n)||(Vn=n,n=_u(bi,"onSelect"),0<n.length&&(l=new qa("onSelect","select",null,l,e),t.push({event:l,listeners:n}),l.target=ln)))}function Ce(t,l){var e={};return e[t.toLowerCase()]=l.toLowerCase(),e["Webkit"+t]="webkit"+l,e["Moz"+t]="moz"+l,e}var en={animationend:Ce("Animation","AnimationEnd"),animationiteration:Ce("Animation","AnimationIteration"),animationstart:Ce("Animation","AnimationStart"),transitionrun:Ce("Transition","TransitionRun"),transitionstart:Ce("Transition","TransitionStart"),transitioncancel:Ce("Transition","TransitionCancel"),transitionend:Ce("Transition","TransitionEnd")},Ai={},ds={};Hl&&(ds=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function je(t){if(Ai[t])return Ai[t];if(!en[t])return t;var l=en[t],e;for(e in l)if(l.hasOwnProperty(e)&&e in ds)return Ai[t]=l[e];return t}var rs=je("animationend"),ms=je("animationiteration"),hs=je("animationstart"),qr=je("transitionrun"),Yr=je("transitionstart"),Lr=je("transitioncancel"),ys=je("transitionend"),vs=new Map,xi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xi.push("scrollEnd");function Sl(t,l){vs.set(t,l),Me(l,[t])}var Xa=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},dl=[],nn=0,Si=0;function Qa(){for(var t=nn,l=Si=nn=0;l<t;){var e=dl[l];dl[l++]=null;var n=dl[l];dl[l++]=null;var a=dl[l];dl[l++]=null;var u=dl[l];if(dl[l++]=null,n!==null&&a!==null){var i=n.pending;i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a}u!==0&&gs(e,a,u)}}function Za(t,l,e,n){dl[nn++]=t,dl[nn++]=l,dl[nn++]=e,dl[nn++]=n,Si|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Ti(t,l,e,n){return Za(t,l,e,n),Va(t)}function Oe(t,l){return Za(t,null,null,l),Va(t)}function gs(t,l,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e);for(var a=!1,u=t.return;u!==null;)u.childLanes|=e,n=u.alternate,n!==null&&(n.childLanes|=e),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&l!==null&&(a=31-ll(e),t=u.hiddenUpdates,n=t[a],n===null?t[a]=[l]:n.push(l),l.lane=e|536870912),u):null}function Va(t){if(50<ra)throw ra=0,Dc=null,Error(d(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var an={};function Xr(t,l,e,n){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nl(t,l,e,n){return new Xr(t,l,e,n)}function zi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bl(t,l){var e=t.alternate;return e===null?(e=nl(t.tag,l,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=l,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,l=t.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function bs(t,l){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,l=e.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function wa(t,l,e,n,a,u){var i=0;if(n=t,typeof t=="function")zi(t)&&(i=1);else if(typeof t=="string")i=Km(t,e,U.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ml:return t=nl(31,e,l,a),t.elementType=Ml,t.lanes=u,t;case Dt:return De(e.children,a,u,l);case Al:i=8,a|=24;break;case L:return t=nl(12,e,l,a|2),t.elementType=L,t.lanes=u,t;case Nl:return t=nl(13,e,l,a),t.elementType=Nl,t.lanes=u,t;case Zt:return t=nl(19,e,l,a),t.elementType=Zt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ct:i=10;break t;case rt:i=9;break t;case Lt:i=11;break t;case F:i=14;break t;case Vt:i=16,n=null;break t}i=29,e=Error(d(130,t===null?"null":typeof t,"")),n=null}return l=nl(i,e,l,a),l.elementType=t,l.type=n,l.lanes=u,l}function De(t,l,e,n){return t=nl(7,t,n,l),t.lanes=e,t}function Ei(t,l,e){return t=nl(6,t,null,l),t.lanes=e,t}function ps(t){var l=nl(18,null,null,0);return l.stateNode=t,l}function Ni(t,l,e){return l=nl(4,t.children!==null?t.children:[],t.key,l),l.lanes=e,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var As=new WeakMap;function rl(t,l){if(typeof t=="object"&&t!==null){var e=As.get(t);return e!==void 0?e:(l={value:t,source:l,stack:pf(l)},As.set(t,l),l)}return{value:t,source:l,stack:pf(l)}}var un=[],cn=0,Ka=null,wn=0,ml=[],hl=0,ee=null,Cl=1,jl="";function ql(t,l){un[cn++]=wn,un[cn++]=Ka,Ka=t,wn=l}function xs(t,l,e){ml[hl++]=Cl,ml[hl++]=jl,ml[hl++]=ee,ee=t;var n=Cl;t=jl;var a=32-ll(n)-1;n&=~(1<<a),e+=1;var u=32-ll(l)+a;if(30<u){var i=a-a%5;u=(n&(1<<i)-1).toString(32),n>>=i,a-=i,Cl=1<<32-ll(l)+a|e<<a|n,jl=u+t}else Cl=1<<u|e<<a|n,jl=t}function Mi(t){t.return!==null&&(ql(t,1),xs(t,1,0))}function _i(t){for(;t===Ka;)Ka=un[--cn],un[cn]=null,wn=un[--cn],un[cn]=null;for(;t===ee;)ee=ml[--hl],ml[hl]=null,jl=ml[--hl],ml[hl]=null,Cl=ml[--hl],ml[hl]=null}function Ss(t,l){ml[hl++]=Cl,ml[hl++]=jl,ml[hl++]=ee,Cl=l.id,jl=l.overflow,ee=t}var Rt=null,yt=null,P=!1,ne=null,yl=!1,Ci=Error(d(519));function ae(t){var l=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kn(rl(l,t)),Ci}function Ts(t){var l=t.stateNode,e=t.type,n=t.memoizedProps;switch(l[Ut]=t,l[Kt]=n,e){case"dialog":I("cancel",l),I("close",l);break;case"iframe":case"object":case"embed":I("load",l);break;case"video":case"audio":for(e=0;e<ha.length;e++)I(ha[e],l);break;case"source":I("error",l);break;case"img":case"image":case"link":I("error",l),I("load",l);break;case"details":I("toggle",l);break;case"input":I("invalid",l),Hf(l,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":I("invalid",l);break;case"textarea":I("invalid",l),qf(l,n.value,n.defaultValue,n.children)}e=n.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||l.textContent===""+e||n.suppressHydrationWarning===!0||Xd(l.textContent,e)?(n.popover!=null&&(I("beforetoggle",l),I("toggle",l)),n.onScroll!=null&&I("scroll",l),n.onScrollEnd!=null&&I("scrollend",l),n.onClick!=null&&(l.onclick=Gl),l=!0):l=!1,l||ae(t,!0)}function zs(t){for(Rt=t.return;Rt;)switch(Rt.tag){case 5:case 31:case 13:yl=!1;return;case 27:case 3:yl=!0;return;default:Rt=Rt.return}}function fn(t){if(t!==Rt)return!1;if(!P)return zs(t),P=!0,!1;var l=t.tag,e;if((e=l!==3&&l!==27)&&((e=l===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Jc(t.type,t.memoizedProps)),e=!e),e&&yt&&ae(t),zs(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));yt=Wd(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));yt=Wd(t)}else l===27?(l=yt,be(t.type)?(t=Fc,Fc=null,yt=t):yt=l):yt=Rt?gl(t.stateNode.nextSibling):null;return!0}function Ue(){yt=Rt=null,P=!1}function ji(){var t=ne;return t!==null&&($t===null?$t=t:$t.push.apply($t,t),ne=null),t}function Kn(t){ne===null?ne=[t]:ne.push(t)}var Oi=r(null),Re=null,Yl=null;function ue(t,l,e){_(Oi,l._currentValue),l._currentValue=e}function Ll(t){t._currentValue=Oi.current,T(Oi)}function Di(t,l,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,n!==null&&(n.childLanes|=l)):n!==null&&(n.childLanes&l)!==l&&(n.childLanes|=l),t===e)break;t=t.return}}function Ui(t,l,e,n){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;t:for(;u!==null;){var c=u;u=a;for(var f=0;f<l.length;f++)if(c.context===l[f]){u.lanes|=e,c=u.alternate,c!==null&&(c.lanes|=e),Di(u.return,e,t),n||(i=null);break t}u=c.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(d(341));i.lanes|=e,u=i.alternate,u!==null&&(u.lanes|=e),Di(i,e,t),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function sn(t,l,e,n){t=null;for(var a=l,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(d(387));if(i=i.memoizedProps,i!==null){var c=a.type;el(a.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(a===at.current){if(i=a.alternate,i===null)throw Error(d(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(pa):t=[pa])}a=a.return}t!==null&&Ui(l,t,e,n),l.flags|=262144}function Ja(t){for(t=t.firstContext;t!==null;){if(!el(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ge(t){Re=t,Yl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gt(t){return Es(Re,t)}function ka(t,l){return Re===null&&Ge(t),Es(t,l)}function Es(t,l){var e=l._currentValue;if(l={context:l,memoizedValue:e,next:null},Yl===null){if(t===null)throw Error(d(308));Yl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else Yl=Yl.next=l;return e}var Qr=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(e,n){t.push(n)}};this.abort=function(){l.aborted=!0,t.forEach(function(e){return e()})}},Zr=z.unstable_scheduleCallback,Vr=z.unstable_NormalPriority,Et={$$typeof:ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ri(){return{controller:new Qr,data:new Map,refCount:0}}function Jn(t){t.refCount--,t.refCount===0&&Zr(Vr,function(){t.controller.abort()})}var kn=null,Gi=0,on=0,dn=null;function wr(t,l){if(kn===null){var e=kn=[];Gi=0,on=qc(),dn={status:"pending",value:void 0,then:function(n){e.push(n)}}}return Gi++,l.then(Ns,Ns),l}function Ns(){if(--Gi===0&&kn!==null){dn!==null&&(dn.status="fulfilled");var t=kn;kn=null,on=0,dn=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function Kr(t,l){var e=[],n={status:"pending",value:null,reason:null,then:function(a){e.push(a)}};return t.then(function(){n.status="fulfilled",n.value=l;for(var a=0;a<e.length;a++)(0,e[a])(l)},function(a){for(n.status="rejected",n.reason=a,a=0;a<e.length;a++)(0,e[a])(void 0)}),n}var Ms=p.S;p.S=function(t,l){dd=Pt(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&wr(t,l),Ms!==null&&Ms(t,l)};var He=r(null);function Hi(){var t=He.current;return t!==null?t:ht.pooledCache}function Ia(t,l){l===null?_(He,He.current):_(He,l.pool)}function _s(){var t=Hi();return t===null?null:{parent:Et._currentValue,pool:t}}var rn=Error(d(460)),Bi=Error(d(474)),Wa=Error(d(542)),$a={then:function(){}};function Cs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function js(t,l,e){switch(e=t[e],e===void 0?t.push(l):e!==l&&(l.then(Gl,Gl),l=e),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,Ds(t),t;default:if(typeof l.status=="string")l.then(Gl,Gl);else{if(t=ht,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=l,t.status="pending",t.then(function(n){if(l.status==="pending"){var a=l;a.status="fulfilled",a.value=n}},function(n){if(l.status==="pending"){var a=l;a.status="rejected",a.reason=n}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,Ds(t),t}throw qe=l,rn}}function Be(t){try{var l=t._init;return l(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(qe=e,rn):e}}var qe=null;function Os(){if(qe===null)throw Error(d(459));var t=qe;return qe=null,t}function Ds(t){if(t===rn||t===Wa)throw Error(d(483))}var mn=null,In=0;function Fa(t){var l=In;return In+=1,mn===null&&(mn=[]),js(mn,t,l)}function Wn(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function Pa(t,l){throw l.$$typeof===tt?Error(d(525)):(t=Object.prototype.toString.call(l),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function Us(t){function l(m,o){if(t){var h=m.deletions;h===null?(m.deletions=[o],m.flags|=16):h.push(o)}}function e(m,o){if(!t)return null;for(;o!==null;)l(m,o),o=o.sibling;return null}function n(m){for(var o=new Map;m!==null;)m.key!==null?o.set(m.key,m):o.set(m.index,m),m=m.sibling;return o}function a(m,o){return m=Bl(m,o),m.index=0,m.sibling=null,m}function u(m,o,h){return m.index=h,t?(h=m.alternate,h!==null?(h=h.index,h<o?(m.flags|=67108866,o):h):(m.flags|=67108866,o)):(m.flags|=1048576,o)}function i(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function c(m,o,h,A){return o===null||o.tag!==6?(o=Ei(h,m.mode,A),o.return=m,o):(o=a(o,h),o.return=m,o)}function f(m,o,h,A){var G=h.type;return G===Dt?b(m,o,h.props.children,A,h.key):o!==null&&(o.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Vt&&Be(G)===o.type)?(o=a(o,h.props),Wn(o,h),o.return=m,o):(o=wa(h.type,h.key,h.props,null,m.mode,A),Wn(o,h),o.return=m,o)}function y(m,o,h,A){return o===null||o.tag!==4||o.stateNode.containerInfo!==h.containerInfo||o.stateNode.implementation!==h.implementation?(o=Ni(h,m.mode,A),o.return=m,o):(o=a(o,h.children||[]),o.return=m,o)}function b(m,o,h,A,G){return o===null||o.tag!==7?(o=De(h,m.mode,A,G),o.return=m,o):(o=a(o,h),o.return=m,o)}function x(m,o,h){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Ei(""+o,m.mode,h),o.return=m,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Yt:return h=wa(o.type,o.key,o.props,null,m.mode,h),Wn(h,o),h.return=m,h;case xt:return o=Ni(o,m.mode,h),o.return=m,o;case Vt:return o=Be(o),x(m,o,h)}if(xl(o)||wt(o))return o=De(o,m.mode,h,null),o.return=m,o;if(typeof o.then=="function")return x(m,Fa(o),h);if(o.$$typeof===ct)return x(m,ka(m,o),h);Pa(m,o)}return null}function v(m,o,h,A){var G=o!==null?o.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return G!==null?null:c(m,o,""+h,A);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Yt:return h.key===G?f(m,o,h,A):null;case xt:return h.key===G?y(m,o,h,A):null;case Vt:return h=Be(h),v(m,o,h,A)}if(xl(h)||wt(h))return G!==null?null:b(m,o,h,A,null);if(typeof h.then=="function")return v(m,o,Fa(h),A);if(h.$$typeof===ct)return v(m,o,ka(m,h),A);Pa(m,h)}return null}function g(m,o,h,A,G){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return m=m.get(h)||null,c(o,m,""+A,G);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Yt:return m=m.get(A.key===null?h:A.key)||null,f(o,m,A,G);case xt:return m=m.get(A.key===null?h:A.key)||null,y(o,m,A,G);case Vt:return A=Be(A),g(m,o,h,A,G)}if(xl(A)||wt(A))return m=m.get(h)||null,b(o,m,A,G,null);if(typeof A.then=="function")return g(m,o,h,Fa(A),G);if(A.$$typeof===ct)return g(m,o,h,ka(o,A),G);Pa(o,A)}return null}function O(m,o,h,A){for(var G=null,lt=null,R=o,V=o=0,$=null;R!==null&&V<h.length;V++){R.index>V?($=R,R=null):$=R.sibling;var et=v(m,R,h[V],A);if(et===null){R===null&&(R=$);break}t&&R&&et.alternate===null&&l(m,R),o=u(et,o,V),lt===null?G=et:lt.sibling=et,lt=et,R=$}if(V===h.length)return e(m,R),P&&ql(m,V),G;if(R===null){for(;V<h.length;V++)R=x(m,h[V],A),R!==null&&(o=u(R,o,V),lt===null?G=R:lt.sibling=R,lt=R);return P&&ql(m,V),G}for(R=n(R);V<h.length;V++)$=g(R,m,V,h[V],A),$!==null&&(t&&$.alternate!==null&&R.delete($.key===null?V:$.key),o=u($,o,V),lt===null?G=$:lt.sibling=$,lt=$);return t&&R.forEach(function(Te){return l(m,Te)}),P&&ql(m,V),G}function B(m,o,h,A){if(h==null)throw Error(d(151));for(var G=null,lt=null,R=o,V=o=0,$=null,et=h.next();R!==null&&!et.done;V++,et=h.next()){R.index>V?($=R,R=null):$=R.sibling;var Te=v(m,R,et.value,A);if(Te===null){R===null&&(R=$);break}t&&R&&Te.alternate===null&&l(m,R),o=u(Te,o,V),lt===null?G=Te:lt.sibling=Te,lt=Te,R=$}if(et.done)return e(m,R),P&&ql(m,V),G;if(R===null){for(;!et.done;V++,et=h.next())et=x(m,et.value,A),et!==null&&(o=u(et,o,V),lt===null?G=et:lt.sibling=et,lt=et);return P&&ql(m,V),G}for(R=n(R);!et.done;V++,et=h.next())et=g(R,m,V,et.value,A),et!==null&&(t&&et.alternate!==null&&R.delete(et.key===null?V:et.key),o=u(et,o,V),lt===null?G=et:lt.sibling=et,lt=et);return t&&R.forEach(function(n1){return l(m,n1)}),P&&ql(m,V),G}function dt(m,o,h,A){if(typeof h=="object"&&h!==null&&h.type===Dt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Yt:t:{for(var G=h.key;o!==null;){if(o.key===G){if(G=h.type,G===Dt){if(o.tag===7){e(m,o.sibling),A=a(o,h.props.children),A.return=m,m=A;break t}}else if(o.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Vt&&Be(G)===o.type){e(m,o.sibling),A=a(o,h.props),Wn(A,h),A.return=m,m=A;break t}e(m,o);break}else l(m,o);o=o.sibling}h.type===Dt?(A=De(h.props.children,m.mode,A,h.key),A.return=m,m=A):(A=wa(h.type,h.key,h.props,null,m.mode,A),Wn(A,h),A.return=m,m=A)}return i(m);case xt:t:{for(G=h.key;o!==null;){if(o.key===G)if(o.tag===4&&o.stateNode.containerInfo===h.containerInfo&&o.stateNode.implementation===h.implementation){e(m,o.sibling),A=a(o,h.children||[]),A.return=m,m=A;break t}else{e(m,o);break}else l(m,o);o=o.sibling}A=Ni(h,m.mode,A),A.return=m,m=A}return i(m);case Vt:return h=Be(h),dt(m,o,h,A)}if(xl(h))return O(m,o,h,A);if(wt(h)){if(G=wt(h),typeof G!="function")throw Error(d(150));return h=G.call(h),B(m,o,h,A)}if(typeof h.then=="function")return dt(m,o,Fa(h),A);if(h.$$typeof===ct)return dt(m,o,ka(m,h),A);Pa(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,o!==null&&o.tag===6?(e(m,o.sibling),A=a(o,h),A.return=m,m=A):(e(m,o),A=Ei(h,m.mode,A),A.return=m,m=A),i(m)):e(m,o)}return function(m,o,h,A){try{In=0;var G=dt(m,o,h,A);return mn=null,G}catch(R){if(R===rn||R===Wa)throw R;var lt=nl(29,R,null,m.mode);return lt.lanes=A,lt.return=m,lt}finally{}}}var Ye=Us(!0),Rs=Us(!1),ie=!1;function qi(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yi(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ce(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fe(t,l,e){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(nt&2)!==0){var a=n.pending;return a===null?l.next=l:(l.next=a.next,a.next=l),n.pending=l,l=Va(t),gs(t,null,e),l}return Za(t,n,l,e),Va(t)}function $n(t,l,e){if(l=l.updateQueue,l!==null&&(l=l.shared,(e&4194048)!==0)){var n=l.lanes;n&=t.pendingLanes,e|=n,l.lanes=e,Ef(t,e)}}function Li(t,l){var e=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var a=null,u=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,e=e.next}while(e!==null);u===null?a=u=l:u=u.next=l}else a=u=l;e={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=l:t.next=l,e.lastBaseUpdate=l}var Xi=!1;function Fn(){if(Xi){var t=dn;if(t!==null)throw t}}function Pn(t,l,e,n){Xi=!1;var a=t.updateQueue;ie=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var f=c,y=f.next;f.next=null,i===null?u=y:i.next=y,i=f;var b=t.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==i&&(c===null?b.firstBaseUpdate=y:c.next=y,b.lastBaseUpdate=f))}if(u!==null){var x=a.baseState;i=0,b=y=f=null,c=u;do{var v=c.lane&-536870913,g=v!==c.lane;if(g?(W&v)===v:(n&v)===v){v!==0&&v===on&&(Xi=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var O=t,B=c;v=l;var dt=e;switch(B.tag){case 1:if(O=B.payload,typeof O=="function"){x=O.call(dt,x,v);break t}x=O;break t;case 3:O.flags=O.flags&-65537|128;case 0:if(O=B.payload,v=typeof O=="function"?O.call(dt,x,v):O,v==null)break t;x=H({},x,v);break t;case 2:ie=!0}}v=c.callback,v!==null&&(t.flags|=64,g&&(t.flags|=8192),g=a.callbacks,g===null?a.callbacks=[v]:g.push(v))}else g={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(y=b=g,f=x):b=b.next=g,i|=v;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;g=c,c=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);b===null&&(f=x),a.baseState=f,a.firstBaseUpdate=y,a.lastBaseUpdate=b,u===null&&(a.shared.lanes=0),me|=i,t.lanes=i,t.memoizedState=x}}function Gs(t,l){if(typeof t!="function")throw Error(d(191,t));t.call(l)}function Hs(t,l){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Gs(e[t],l)}var hn=r(null),tu=r(0);function Bs(t,l){t=Il,_(tu,t),_(hn,l),Il=t|l.baseLanes}function Qi(){_(tu,Il),_(hn,hn.current)}function Zi(){Il=tu.current,T(hn),T(tu)}var al=r(null),vl=null;function se(t){var l=t.alternate;_(Tt,Tt.current&1),_(al,t),vl===null&&(l===null||hn.current!==null||l.memoizedState!==null)&&(vl=t)}function Vi(t){_(Tt,Tt.current),_(al,t),vl===null&&(vl=t)}function qs(t){t.tag===22?(_(Tt,Tt.current),_(al,t),vl===null&&(vl=t)):oe()}function oe(){_(Tt,Tt.current),_(al,al.current)}function ul(t){T(al),vl===t&&(vl=null),T(Tt)}var Tt=r(0);function lu(t){for(var l=t;l!==null;){if(l.tag===13){var e=l.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Wc(e)||$c(e)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Xl=0,Z=null,st=null,Nt=null,eu=!1,yn=!1,Le=!1,nu=0,ta=0,vn=null,Jr=0;function pt(){throw Error(d(321))}function wi(t,l){if(l===null)return!1;for(var e=0;e<l.length&&e<t.length;e++)if(!el(t[e],l[e]))return!1;return!0}function Ki(t,l,e,n,a,u){return Xl=u,Z=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,p.H=t===null||t.memoizedState===null?So:cc,Le=!1,u=e(n,a),Le=!1,yn&&(u=Ls(l,e,n,a)),Ys(t),u}function Ys(t){p.H=na;var l=st!==null&&st.next!==null;if(Xl=0,Nt=st=Z=null,eu=!1,ta=0,vn=null,l)throw Error(d(300));t===null||Mt||(t=t.dependencies,t!==null&&Ja(t)&&(Mt=!0))}function Ls(t,l,e,n){Z=t;var a=0;do{if(yn&&(vn=null),ta=0,yn=!1,25<=a)throw Error(d(301));if(a+=1,Nt=st=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}p.H=To,u=l(e,n)}while(yn);return u}function kr(){var t=p.H,l=t.useState()[0];return l=typeof l.then=="function"?la(l):l,t=t.useState()[0],(st!==null?st.memoizedState:null)!==t&&(Z.flags|=1024),l}function Ji(){var t=nu!==0;return nu=0,t}function ki(t,l,e){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~e}function Ii(t){if(eu){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}eu=!1}Xl=0,Nt=st=Z=null,yn=!1,ta=nu=0,vn=null}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?Z.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function zt(){if(st===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var l=Nt===null?Z.memoizedState:Nt.next;if(l!==null)Nt=l,st=t;else{if(t===null)throw Z.alternate===null?Error(d(467)):Error(d(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Nt===null?Z.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function la(t){var l=ta;return ta+=1,vn===null&&(vn=[]),t=js(vn,t,l),l=Z,(Nt===null?l.memoizedState:Nt.next)===null&&(l=l.alternate,p.H=l===null||l.memoizedState===null?So:cc),t}function uu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return la(t);if(t.$$typeof===ct)return Gt(t)}throw Error(d(438,String(t)))}function Wi(t){var l=null,e=Z.updateQueue;if(e!==null&&(l=e.memoCache),l==null){var n=Z.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(l={data:n.data.map(function(a){return a.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),e===null&&(e=au(),Z.updateQueue=e),e.memoCache=l,e=l.data[l.index],e===void 0)for(e=l.data[l.index]=Array(t),n=0;n<t;n++)e[n]=Ve;return l.index++,e}function Ql(t,l){return typeof l=="function"?l(t):l}function iu(t){var l=zt();return $i(l,st,t)}function $i(t,l,e){var n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var a=t.baseQueue,u=n.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}l.baseQueue=a=u,n.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{l=a.next;var c=i=null,f=null,y=l,b=!1;do{var x=y.lane&-536870913;if(x!==y.lane?(W&x)===x:(Xl&x)===x){var v=y.revertLane;if(v===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),x===on&&(b=!0);else if((Xl&v)===v){y=y.next,v===on&&(b=!0);continue}else x={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=x,i=u):f=f.next=x,Z.lanes|=v,me|=v;x=y.action,Le&&e(u,x),u=y.hasEagerState?y.eagerState:e(u,x)}else v={lane:x,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=v,i=u):f=f.next=v,Z.lanes|=x,me|=x;y=y.next}while(y!==null&&y!==l);if(f===null?i=u:f.next=c,!el(u,t.memoizedState)&&(Mt=!0,b&&(e=dn,e!==null)))throw e;t.memoizedState=u,t.baseState=i,t.baseQueue=f,n.lastRenderedState=u}return a===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Fi(t){var l=zt(),e=l.queue;if(e===null)throw Error(d(311));e.lastRenderedReducer=t;var n=e.dispatch,a=e.pending,u=l.memoizedState;if(a!==null){e.pending=null;var i=a=a.next;do u=t(u,i.action),i=i.next;while(i!==a);el(u,l.memoizedState)||(Mt=!0),l.memoizedState=u,l.baseQueue===null&&(l.baseState=u),e.lastRenderedState=u}return[u,n]}function Xs(t,l,e){var n=Z,a=zt(),u=P;if(u){if(e===void 0)throw Error(d(407));e=e()}else e=l();var i=!el((st||a).memoizedState,e);if(i&&(a.memoizedState=e,Mt=!0),a=a.queue,lc(Vs.bind(null,n,a,t),[t]),a.getSnapshot!==l||i||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,gn(9,{destroy:void 0},Zs.bind(null,n,a,e,l),null),ht===null)throw Error(d(349));u||(Xl&127)!==0||Qs(n,l,e)}return e}function Qs(t,l,e){t.flags|=16384,t={getSnapshot:l,value:e},l=Z.updateQueue,l===null?(l=au(),Z.updateQueue=l,l.stores=[t]):(e=l.stores,e===null?l.stores=[t]:e.push(t))}function Zs(t,l,e,n){l.value=e,l.getSnapshot=n,ws(l)&&Ks(t)}function Vs(t,l,e){return e(function(){ws(l)&&Ks(t)})}function ws(t){var l=t.getSnapshot;t=t.value;try{var e=l();return!el(t,e)}catch{return!0}}function Ks(t){var l=Oe(t,2);l!==null&&Ft(l,t,2)}function Pi(t){var l=Qt();if(typeof t=="function"){var e=t;if(t=e(),Le){Pl(!0);try{e()}finally{Pl(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ql,lastRenderedState:t},l}function Js(t,l,e,n){return t.baseState=e,$i(t,st,typeof n=="function"?n:Ql)}function Ir(t,l,e,n,a){if(su(t))throw Error(d(485));if(t=l.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};p.T!==null?e(!0):u.isTransition=!1,n(u),e=l.pending,e===null?(u.next=l.pending=u,ks(l,u)):(u.next=e.next,l.pending=e.next=u)}}function ks(t,l){var e=l.action,n=l.payload,a=t.state;if(l.isTransition){var u=p.T,i={};p.T=i;try{var c=e(a,n),f=p.S;f!==null&&f(i,c),Is(t,l,c)}catch(y){tc(t,l,y)}finally{u!==null&&i.types!==null&&(u.types=i.types),p.T=u}}else try{u=e(a,n),Is(t,l,u)}catch(y){tc(t,l,y)}}function Is(t,l,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(n){Ws(t,l,n)},function(n){return tc(t,l,n)}):Ws(t,l,e)}function Ws(t,l,e){l.status="fulfilled",l.value=e,$s(l),t.state=e,l=t.pending,l!==null&&(e=l.next,e===l?t.pending=null:(e=e.next,l.next=e,ks(t,e)))}function tc(t,l,e){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do l.status="rejected",l.reason=e,$s(l),l=l.next;while(l!==n)}t.action=null}function $s(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function Fs(t,l){return l}function Ps(t,l){if(P){var e=ht.formState;if(e!==null){t:{var n=Z;if(P){if(yt){l:{for(var a=yt,u=yl;a.nodeType!==8;){if(!u){a=null;break l}if(a=gl(a.nextSibling),a===null){a=null;break l}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){yt=gl(a.nextSibling),n=a.data==="F!";break t}}ae(n)}n=!1}n&&(l=e[0])}}return e=Qt(),e.memoizedState=e.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:l},e.queue=n,e=po.bind(null,Z,n),n.dispatch=e,n=Pi(!1),u=ic.bind(null,Z,!1,n.queue),n=Qt(),a={state:l,dispatch:null,action:t,pending:null},n.queue=a,e=Ir.bind(null,Z,a,u,e),a.dispatch=e,n.memoizedState=t,[l,e,!1]}function to(t){var l=zt();return lo(l,st,t)}function lo(t,l,e){if(l=$i(t,l,Fs)[0],t=iu(Ql)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var n=la(l)}catch(i){throw i===rn?Wa:i}else n=l;l=zt();var a=l.queue,u=a.dispatch;return e!==l.memoizedState&&(Z.flags|=2048,gn(9,{destroy:void 0},Wr.bind(null,a,e),null)),[n,u,t]}function Wr(t,l){t.action=l}function eo(t){var l=zt(),e=st;if(e!==null)return lo(l,e,t);zt(),l=l.memoizedState,e=zt();var n=e.queue.dispatch;return e.memoizedState=t,[l,n,!1]}function gn(t,l,e,n){return t={tag:t,create:e,deps:n,inst:l,next:null},l=Z.updateQueue,l===null&&(l=au(),Z.updateQueue=l),e=l.lastEffect,e===null?l.lastEffect=t.next=t:(n=e.next,e.next=t,t.next=n,l.lastEffect=t),t}function no(){return zt().memoizedState}function cu(t,l,e,n){var a=Qt();Z.flags|=t,a.memoizedState=gn(1|l,{destroy:void 0},e,n===void 0?null:n)}function fu(t,l,e,n){var a=zt();n=n===void 0?null:n;var u=a.memoizedState.inst;st!==null&&n!==null&&wi(n,st.memoizedState.deps)?a.memoizedState=gn(l,u,e,n):(Z.flags|=t,a.memoizedState=gn(1|l,u,e,n))}function ao(t,l){cu(8390656,8,t,l)}function lc(t,l){fu(2048,8,t,l)}function $r(t){Z.flags|=4;var l=Z.updateQueue;if(l===null)l=au(),Z.updateQueue=l,l.events=[t];else{var e=l.events;e===null?l.events=[t]:e.push(t)}}function uo(t){var l=zt().memoizedState;return $r({ref:l,nextImpl:t}),function(){if((nt&2)!==0)throw Error(d(440));return l.impl.apply(void 0,arguments)}}function io(t,l){return fu(4,2,t,l)}function co(t,l){return fu(4,4,t,l)}function fo(t,l){if(typeof l=="function"){t=t();var e=l(t);return function(){typeof e=="function"?e():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function so(t,l,e){e=e!=null?e.concat([t]):null,fu(4,4,fo.bind(null,l,t),e)}function ec(){}function oo(t,l){var e=zt();l=l===void 0?null:l;var n=e.memoizedState;return l!==null&&wi(l,n[1])?n[0]:(e.memoizedState=[t,l],t)}function ro(t,l){var e=zt();l=l===void 0?null:l;var n=e.memoizedState;if(l!==null&&wi(l,n[1]))return n[0];if(n=t(),Le){Pl(!0);try{t()}finally{Pl(!1)}}return e.memoizedState=[n,l],n}function nc(t,l,e){return e===void 0||(Xl&1073741824)!==0&&(W&261930)===0?t.memoizedState=l:(t.memoizedState=e,t=md(),Z.lanes|=t,me|=t,e)}function mo(t,l,e,n){return el(e,l)?e:hn.current!==null?(t=nc(t,e,n),el(t,l)||(Mt=!0),t):(Xl&42)===0||(Xl&1073741824)!==0&&(W&261930)===0?(Mt=!0,t.memoizedState=e):(t=md(),Z.lanes|=t,me|=t,l)}function ho(t,l,e,n,a){var u=N.p;N.p=u!==0&&8>u?u:8;var i=p.T,c={};p.T=c,ic(t,!1,l,e);try{var f=a(),y=p.S;if(y!==null&&y(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var b=Kr(f,n);ea(t,l,b,fl(t))}else ea(t,l,n,fl(t))}catch(x){ea(t,l,{then:function(){},status:"rejected",reason:x},fl())}finally{N.p=u,i!==null&&c.types!==null&&(i.types=c.types),p.T=i}}function Fr(){}function ac(t,l,e,n){if(t.tag!==5)throw Error(d(476));var a=yo(t).queue;ho(t,a,l,Y,e===null?Fr:function(){return vo(t),e(n)})}function yo(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ql,lastRenderedState:Y},next:null};var e={};return l.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ql,lastRenderedState:e},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function vo(t){var l=yo(t);l.next===null&&(l=t.alternate.memoizedState),ea(t,l.next.queue,{},fl())}function uc(){return Gt(pa)}function go(){return zt().memoizedState}function bo(){return zt().memoizedState}function Pr(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var e=fl();t=ce(e);var n=fe(l,t,e);n!==null&&(Ft(n,l,e),$n(n,l,e)),l={cache:Ri()},t.payload=l;return}l=l.return}}function tm(t,l,e){var n=fl();e={lane:n,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},su(t)?Ao(l,e):(e=Ti(t,l,e,n),e!==null&&(Ft(e,t,n),xo(e,l,n)))}function po(t,l,e){var n=fl();ea(t,l,e,n)}function ea(t,l,e,n){var a={lane:n,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(su(t))Ao(l,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=l.lastRenderedReducer,u!==null))try{var i=l.lastRenderedState,c=u(i,e);if(a.hasEagerState=!0,a.eagerState=c,el(c,i))return Za(t,l,a,0),ht===null&&Qa(),!1}catch{}finally{}if(e=Ti(t,l,a,n),e!==null)return Ft(e,t,n),xo(e,l,n),!0}return!1}function ic(t,l,e,n){if(n={lane:2,revertLane:qc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},su(t)){if(l)throw Error(d(479))}else l=Ti(t,e,n,2),l!==null&&Ft(l,t,2)}function su(t){var l=t.alternate;return t===Z||l!==null&&l===Z}function Ao(t,l){yn=eu=!0;var e=t.pending;e===null?l.next=l:(l.next=e.next,e.next=l),t.pending=l}function xo(t,l,e){if((e&4194048)!==0){var n=l.lanes;n&=t.pendingLanes,e|=n,l.lanes=e,Ef(t,e)}}var na={readContext:Gt,use:uu,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt};na.useEffectEvent=pt;var So={readContext:Gt,use:uu,useCallback:function(t,l){return Qt().memoizedState=[t,l===void 0?null:l],t},useContext:Gt,useEffect:ao,useImperativeHandle:function(t,l,e){e=e!=null?e.concat([t]):null,cu(4194308,4,fo.bind(null,l,t),e)},useLayoutEffect:function(t,l){return cu(4194308,4,t,l)},useInsertionEffect:function(t,l){cu(4,2,t,l)},useMemo:function(t,l){var e=Qt();l=l===void 0?null:l;var n=t();if(Le){Pl(!0);try{t()}finally{Pl(!1)}}return e.memoizedState=[n,l],n},useReducer:function(t,l,e){var n=Qt();if(e!==void 0){var a=e(l);if(Le){Pl(!0);try{e(l)}finally{Pl(!1)}}}else a=l;return n.memoizedState=n.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},n.queue=t,t=t.dispatch=tm.bind(null,Z,t),[n.memoizedState,t]},useRef:function(t){var l=Qt();return t={current:t},l.memoizedState=t},useState:function(t){t=Pi(t);var l=t.queue,e=po.bind(null,Z,l);return l.dispatch=e,[t.memoizedState,e]},useDebugValue:ec,useDeferredValue:function(t,l){var e=Qt();return nc(e,t,l)},useTransition:function(){var t=Pi(!1);return t=ho.bind(null,Z,t.queue,!0,!1),Qt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,e){var n=Z,a=Qt();if(P){if(e===void 0)throw Error(d(407));e=e()}else{if(e=l(),ht===null)throw Error(d(349));(W&127)!==0||Qs(n,l,e)}a.memoizedState=e;var u={value:e,getSnapshot:l};return a.queue=u,ao(Vs.bind(null,n,u,t),[t]),n.flags|=2048,gn(9,{destroy:void 0},Zs.bind(null,n,u,e,l),null),e},useId:function(){var t=Qt(),l=ht.identifierPrefix;if(P){var e=jl,n=Cl;e=(n&~(1<<32-ll(n)-1)).toString(32)+e,l="_"+l+"R_"+e,e=nu++,0<e&&(l+="H"+e.toString(32)),l+="_"}else e=Jr++,l="_"+l+"r_"+e.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:uc,useFormState:Ps,useActionState:Ps,useOptimistic:function(t){var l=Qt();l.memoizedState=l.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=e,l=ic.bind(null,Z,!0,e),e.dispatch=l,[t,l]},useMemoCache:Wi,useCacheRefresh:function(){return Qt().memoizedState=Pr.bind(null,Z)},useEffectEvent:function(t){var l=Qt(),e={impl:t};return l.memoizedState=e,function(){if((nt&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}},cc={readContext:Gt,use:uu,useCallback:oo,useContext:Gt,useEffect:lc,useImperativeHandle:so,useInsertionEffect:io,useLayoutEffect:co,useMemo:ro,useReducer:iu,useRef:no,useState:function(){return iu(Ql)},useDebugValue:ec,useDeferredValue:function(t,l){var e=zt();return mo(e,st.memoizedState,t,l)},useTransition:function(){var t=iu(Ql)[0],l=zt().memoizedState;return[typeof t=="boolean"?t:la(t),l]},useSyncExternalStore:Xs,useId:go,useHostTransitionStatus:uc,useFormState:to,useActionState:to,useOptimistic:function(t,l){var e=zt();return Js(e,st,t,l)},useMemoCache:Wi,useCacheRefresh:bo};cc.useEffectEvent=uo;var To={readContext:Gt,use:uu,useCallback:oo,useContext:Gt,useEffect:lc,useImperativeHandle:so,useInsertionEffect:io,useLayoutEffect:co,useMemo:ro,useReducer:Fi,useRef:no,useState:function(){return Fi(Ql)},useDebugValue:ec,useDeferredValue:function(t,l){var e=zt();return st===null?nc(e,t,l):mo(e,st.memoizedState,t,l)},useTransition:function(){var t=Fi(Ql)[0],l=zt().memoizedState;return[typeof t=="boolean"?t:la(t),l]},useSyncExternalStore:Xs,useId:go,useHostTransitionStatus:uc,useFormState:eo,useActionState:eo,useOptimistic:function(t,l){var e=zt();return st!==null?Js(e,st,t,l):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:Wi,useCacheRefresh:bo};To.useEffectEvent=uo;function fc(t,l,e,n){l=t.memoizedState,e=e(n,l),e=e==null?l:H({},l,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var sc={enqueueSetState:function(t,l,e){t=t._reactInternals;var n=fl(),a=ce(n);a.payload=l,e!=null&&(a.callback=e),l=fe(t,a,n),l!==null&&(Ft(l,t,n),$n(l,t,n))},enqueueReplaceState:function(t,l,e){t=t._reactInternals;var n=fl(),a=ce(n);a.tag=1,a.payload=l,e!=null&&(a.callback=e),l=fe(t,a,n),l!==null&&(Ft(l,t,n),$n(l,t,n))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var e=fl(),n=ce(e);n.tag=2,l!=null&&(n.callback=l),l=fe(t,n,e),l!==null&&(Ft(l,t,e),$n(l,t,e))}};function zo(t,l,e,n,a,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,i):l.prototype&&l.prototype.isPureReactComponent?!Zn(e,n)||!Zn(a,u):!0}function Eo(t,l,e,n){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(e,n),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(e,n),l.state!==t&&sc.enqueueReplaceState(l,l.state,null)}function Xe(t,l){var e=l;if("ref"in l){e={};for(var n in l)n!=="ref"&&(e[n]=l[n])}if(t=t.defaultProps){e===l&&(e=H({},e));for(var a in t)e[a]===void 0&&(e[a]=t[a])}return e}function No(t){Xa(t)}function Mo(t){console.error(t)}function _o(t){Xa(t)}function ou(t,l){try{var e=t.onUncaughtError;e(l.value,{componentStack:l.stack})}catch(n){setTimeout(function(){throw n})}}function Co(t,l,e){try{var n=t.onCaughtError;n(e.value,{componentStack:e.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function oc(t,l,e){return e=ce(e),e.tag=3,e.payload={element:null},e.callback=function(){ou(t,l)},e}function jo(t){return t=ce(t),t.tag=3,t}function Oo(t,l,e,n){var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;t.payload=function(){return a(u)},t.callback=function(){Co(l,e,n)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Co(l,e,n),typeof a!="function"&&(he===null?he=new Set([this]):he.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function lm(t,l,e,n,a){if(e.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(l=e.alternate,l!==null&&sn(l,e,a,!0),e=al.current,e!==null){switch(e.tag){case 31:case 13:return vl===null?Su():e.alternate===null&&At===0&&(At=3),e.flags&=-257,e.flags|=65536,e.lanes=a,n===$a?e.flags|=16384:(l=e.updateQueue,l===null?e.updateQueue=new Set([n]):l.add(n),Gc(t,n,a)),!1;case 22:return e.flags|=65536,n===$a?e.flags|=16384:(l=e.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([n])},e.updateQueue=l):(e=l.retryQueue,e===null?l.retryQueue=new Set([n]):e.add(n)),Gc(t,n,a)),!1}throw Error(d(435,e.tag))}return Gc(t,n,a),Su(),!1}if(P)return l=al.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=a,n!==Ci&&(t=Error(d(422),{cause:n}),Kn(rl(t,e)))):(n!==Ci&&(l=Error(d(423),{cause:n}),Kn(rl(l,e))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,n=rl(n,e),a=oc(t.stateNode,n,a),Li(t,a),At!==4&&(At=2)),!1;var u=Error(d(520),{cause:n});if(u=rl(u,e),da===null?da=[u]:da.push(u),At!==4&&(At=2),l===null)return!0;n=rl(n,e),e=l;do{switch(e.tag){case 3:return e.flags|=65536,t=a&-a,e.lanes|=t,t=oc(e.stateNode,n,t),Li(e,t),!1;case 1:if(l=e.type,u=e.stateNode,(e.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(he===null||!he.has(u))))return e.flags|=65536,a&=-a,e.lanes|=a,a=jo(a),Oo(a,t,e,n),Li(e,a),!1}e=e.return}while(e!==null);return!1}var dc=Error(d(461)),Mt=!1;function Ht(t,l,e,n){l.child=t===null?Rs(l,null,e,n):Ye(l,t.child,e,n)}function Do(t,l,e,n,a){e=e.render;var u=l.ref;if("ref"in n){var i={};for(var c in n)c!=="ref"&&(i[c]=n[c])}else i=n;return Ge(l),n=Ki(t,l,e,i,u,a),c=Ji(),t!==null&&!Mt?(ki(t,l,a),Zl(t,l,a)):(P&&c&&Mi(l),l.flags|=1,Ht(t,l,n,a),l.child)}function Uo(t,l,e,n,a){if(t===null){var u=e.type;return typeof u=="function"&&!zi(u)&&u.defaultProps===void 0&&e.compare===null?(l.tag=15,l.type=u,Ro(t,l,u,n,a)):(t=wa(e.type,null,n,l,l.mode,a),t.ref=l.ref,t.return=l,l.child=t)}if(u=t.child,!pc(t,a)){var i=u.memoizedProps;if(e=e.compare,e=e!==null?e:Zn,e(i,n)&&t.ref===l.ref)return Zl(t,l,a)}return l.flags|=1,t=Bl(u,n),t.ref=l.ref,t.return=l,l.child=t}function Ro(t,l,e,n,a){if(t!==null){var u=t.memoizedProps;if(Zn(u,n)&&t.ref===l.ref)if(Mt=!1,l.pendingProps=n=u,pc(t,a))(t.flags&131072)!==0&&(Mt=!0);else return l.lanes=t.lanes,Zl(t,l,a)}return rc(t,l,e,n,a)}function Go(t,l,e,n){var a=n.children,u=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((l.flags&128)!==0){if(u=u!==null?u.baseLanes|e:e,t!==null){for(n=l.child=t.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~u}else n=0,l.child=null;return Ho(t,l,u,e,n)}if((e&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ia(l,u!==null?u.cachePool:null),u!==null?Bs(l,u):Qi(),qs(l);else return n=l.lanes=536870912,Ho(t,l,u!==null?u.baseLanes|e:e,e,n)}else u!==null?(Ia(l,u.cachePool),Bs(l,u),oe(),l.memoizedState=null):(t!==null&&Ia(l,null),Qi(),oe());return Ht(t,l,a,e),l.child}function aa(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function Ho(t,l,e,n,a){var u=Hi();return u=u===null?null:{parent:Et._currentValue,pool:u},l.memoizedState={baseLanes:e,cachePool:u},t!==null&&Ia(l,null),Qi(),qs(l),t!==null&&sn(t,l,n,!0),l.childLanes=a,null}function du(t,l){return l=mu({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function Bo(t,l,e){return Ye(l,t.child,null,e),t=du(l,l.pendingProps),t.flags|=2,ul(l),l.memoizedState=null,t}function em(t,l,e){var n=l.pendingProps,a=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(P){if(n.mode==="hidden")return t=du(l,n),l.lanes=536870912,aa(null,t);if(Vi(l),(t=yt)?(t=Id(t,yl),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:ee!==null?{id:Cl,overflow:jl}:null,retryLane:536870912,hydrationErrors:null},e=ps(t),e.return=l,l.child=e,Rt=l,yt=null)):t=null,t===null)throw ae(l);return l.lanes=536870912,null}return du(l,n)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(Vi(l),a)if(l.flags&256)l.flags&=-257,l=Bo(t,l,e);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(d(558));else if(Mt||sn(t,l,e,!1),a=(e&t.childLanes)!==0,Mt||a){if(n=ht,n!==null&&(i=Nf(n,e),i!==0&&i!==u.retryLane))throw u.retryLane=i,Oe(t,i),Ft(n,t,i),dc;Su(),l=Bo(t,l,e)}else t=u.treeContext,yt=gl(i.nextSibling),Rt=l,P=!0,ne=null,yl=!1,t!==null&&Ss(l,t),l=du(l,n),l.flags|=4096;return l}return t=Bl(t.child,{mode:n.mode,children:n.children}),t.ref=l.ref,l.child=t,t.return=l,t}function ru(t,l){var e=l.ref;if(e===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(d(284));(t===null||t.ref!==e)&&(l.flags|=4194816)}}function rc(t,l,e,n,a){return Ge(l),e=Ki(t,l,e,n,void 0,a),n=Ji(),t!==null&&!Mt?(ki(t,l,a),Zl(t,l,a)):(P&&n&&Mi(l),l.flags|=1,Ht(t,l,e,a),l.child)}function qo(t,l,e,n,a,u){return Ge(l),l.updateQueue=null,e=Ls(l,n,e,a),Ys(t),n=Ji(),t!==null&&!Mt?(ki(t,l,u),Zl(t,l,u)):(P&&n&&Mi(l),l.flags|=1,Ht(t,l,e,u),l.child)}function Yo(t,l,e,n,a){if(Ge(l),l.stateNode===null){var u=an,i=e.contextType;typeof i=="object"&&i!==null&&(u=Gt(i)),u=new e(n,u),l.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=sc,l.stateNode=u,u._reactInternals=l,u=l.stateNode,u.props=n,u.state=l.memoizedState,u.refs={},qi(l),i=e.contextType,u.context=typeof i=="object"&&i!==null?Gt(i):an,u.state=l.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(fc(l,e,i,n),u.state=l.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&sc.enqueueReplaceState(u,u.state,null),Pn(l,n,u,a),Fn(),u.state=l.memoizedState),typeof u.componentDidMount=="function"&&(l.flags|=4194308),n=!0}else if(t===null){u=l.stateNode;var c=l.memoizedProps,f=Xe(e,c);u.props=f;var y=u.context,b=e.contextType;i=an,typeof b=="object"&&b!==null&&(i=Gt(b));var x=e.getDerivedStateFromProps;b=typeof x=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,b||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||y!==i)&&Eo(l,u,n,i),ie=!1;var v=l.memoizedState;u.state=v,Pn(l,n,u,a),Fn(),y=l.memoizedState,c||v!==y||ie?(typeof x=="function"&&(fc(l,e,x,n),y=l.memoizedState),(f=ie||zo(l,e,f,n,v,y,i))?(b||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(l.flags|=4194308)):(typeof u.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=n,l.memoizedState=y),u.props=n,u.state=y,u.context=i,n=f):(typeof u.componentDidMount=="function"&&(l.flags|=4194308),n=!1)}else{u=l.stateNode,Yi(t,l),i=l.memoizedProps,b=Xe(e,i),u.props=b,x=l.pendingProps,v=u.context,y=e.contextType,f=an,typeof y=="object"&&y!==null&&(f=Gt(y)),c=e.getDerivedStateFromProps,(y=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==x||v!==f)&&Eo(l,u,n,f),ie=!1,v=l.memoizedState,u.state=v,Pn(l,n,u,a),Fn();var g=l.memoizedState;i!==x||v!==g||ie||t!==null&&t.dependencies!==null&&Ja(t.dependencies)?(typeof c=="function"&&(fc(l,e,c,n),g=l.memoizedState),(b=ie||zo(l,e,b,n,v,g,f)||t!==null&&t.dependencies!==null&&Ja(t.dependencies))?(y||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,g,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,g,f)),typeof u.componentDidUpdate=="function"&&(l.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(l.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(l.flags|=1024),l.memoizedProps=n,l.memoizedState=g),u.props=n,u.state=g,u.context=f,n=b):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(l.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(l.flags|=1024),n=!1)}return u=n,ru(t,l),n=(l.flags&128)!==0,u||n?(u=l.stateNode,e=n&&typeof e.getDerivedStateFromError!="function"?null:u.render(),l.flags|=1,t!==null&&n?(l.child=Ye(l,t.child,null,a),l.child=Ye(l,null,e,a)):Ht(t,l,e,a),l.memoizedState=u.state,t=l.child):t=Zl(t,l,a),t}function Lo(t,l,e,n){return Ue(),l.flags|=256,Ht(t,l,e,n),l.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(t){return{baseLanes:t,cachePool:_s()}}function yc(t,l,e){return t=t!==null?t.childLanes&~e:0,l&&(t|=cl),t}function Xo(t,l,e){var n=l.pendingProps,a=!1,u=(l.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(Tt.current&2)!==0),i&&(a=!0,l.flags&=-129),i=(l.flags&32)!==0,l.flags&=-33,t===null){if(P){if(a?se(l):oe(),(t=yt)?(t=Id(t,yl),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:ee!==null?{id:Cl,overflow:jl}:null,retryLane:536870912,hydrationErrors:null},e=ps(t),e.return=l,l.child=e,Rt=l,yt=null)):t=null,t===null)throw ae(l);return $c(t)?l.lanes=32:l.lanes=536870912,null}var c=n.children;return n=n.fallback,a?(oe(),a=l.mode,c=mu({mode:"hidden",children:c},a),n=De(n,a,e,null),c.return=l,n.return=l,c.sibling=n,l.child=c,n=l.child,n.memoizedState=hc(e),n.childLanes=yc(t,i,e),l.memoizedState=mc,aa(null,n)):(se(l),vc(l,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(u)l.flags&256?(se(l),l.flags&=-257,l=gc(t,l,e)):l.memoizedState!==null?(oe(),l.child=t.child,l.flags|=128,l=null):(oe(),c=n.fallback,a=l.mode,n=mu({mode:"visible",children:n.children},a),c=De(c,a,e,null),c.flags|=2,n.return=l,c.return=l,n.sibling=c,l.child=n,Ye(l,t.child,null,e),n=l.child,n.memoizedState=hc(e),n.childLanes=yc(t,i,e),l.memoizedState=mc,l=aa(null,n));else if(se(l),$c(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var y=i.dgst;i=y,n=Error(d(419)),n.stack="",n.digest=i,Kn({value:n,source:null,stack:null}),l=gc(t,l,e)}else if(Mt||sn(t,l,e,!1),i=(e&t.childLanes)!==0,Mt||i){if(i=ht,i!==null&&(n=Nf(i,e),n!==0&&n!==f.retryLane))throw f.retryLane=n,Oe(t,n),Ft(i,t,n),dc;Wc(c)||Su(),l=gc(t,l,e)}else Wc(c)?(l.flags|=192,l.child=t.child,l=null):(t=f.treeContext,yt=gl(c.nextSibling),Rt=l,P=!0,ne=null,yl=!1,t!==null&&Ss(l,t),l=vc(l,n.children),l.flags|=4096);return l}return a?(oe(),c=n.fallback,a=l.mode,f=t.child,y=f.sibling,n=Bl(f,{mode:"hidden",children:n.children}),n.subtreeFlags=f.subtreeFlags&65011712,y!==null?c=Bl(y,c):(c=De(c,a,e,null),c.flags|=2),c.return=l,n.return=l,n.sibling=c,l.child=n,aa(null,n),n=l.child,c=t.child.memoizedState,c===null?c=hc(e):(a=c.cachePool,a!==null?(f=Et._currentValue,a=a.parent!==f?{parent:f,pool:f}:a):a=_s(),c={baseLanes:c.baseLanes|e,cachePool:a}),n.memoizedState=c,n.childLanes=yc(t,i,e),l.memoizedState=mc,aa(t.child,n)):(se(l),e=t.child,t=e.sibling,e=Bl(e,{mode:"visible",children:n.children}),e.return=l,e.sibling=null,t!==null&&(i=l.deletions,i===null?(l.deletions=[t],l.flags|=16):i.push(t)),l.child=e,l.memoizedState=null,e)}function vc(t,l){return l=mu({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function mu(t,l){return t=nl(22,t,null,l),t.lanes=0,t}function gc(t,l,e){return Ye(l,t.child,null,e),t=vc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function Qo(t,l,e){t.lanes|=l;var n=t.alternate;n!==null&&(n.lanes|=l),Di(t.return,l,e)}function bc(t,l,e,n,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:a,treeForkCount:u}:(i.isBackwards=l,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=e,i.tailMode=a,i.treeForkCount=u)}function Zo(t,l,e){var n=l.pendingProps,a=n.revealOrder,u=n.tail;n=n.children;var i=Tt.current,c=(i&2)!==0;if(c?(i=i&1|2,l.flags|=128):i&=1,_(Tt,i),Ht(t,l,n,e),n=P?wn:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qo(t,e,l);else if(t.tag===19)Qo(t,e,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(e=l.child,a=null;e!==null;)t=e.alternate,t!==null&&lu(t)===null&&(a=e),e=e.sibling;e=a,e===null?(a=l.child,l.child=null):(a=e.sibling,e.sibling=null),bc(l,!1,a,e,u,n);break;case"backwards":case"unstable_legacy-backwards":for(e=null,a=l.child,l.child=null;a!==null;){if(t=a.alternate,t!==null&&lu(t)===null){l.child=a;break}t=a.sibling,a.sibling=e,e=a,a=t}bc(l,!0,e,null,u,n);break;case"together":bc(l,!1,null,null,void 0,n);break;default:l.memoizedState=null}return l.child}function Zl(t,l,e){if(t!==null&&(l.dependencies=t.dependencies),me|=l.lanes,(e&l.childLanes)===0)if(t!==null){if(sn(t,l,e,!1),(e&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(d(153));if(l.child!==null){for(t=l.child,e=Bl(t,t.pendingProps),l.child=e,e.return=l;t.sibling!==null;)t=t.sibling,e=e.sibling=Bl(t,t.pendingProps),e.return=l;e.sibling=null}return l.child}function pc(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&Ja(t)))}function nm(t,l,e){switch(l.tag){case 3:Xt(l,l.stateNode.containerInfo),ue(l,Et,t.memoizedState.cache),Ue();break;case 27:case 5:jn(l);break;case 4:Xt(l,l.stateNode.containerInfo);break;case 10:ue(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,Vi(l),null;break;case 13:var n=l.memoizedState;if(n!==null)return n.dehydrated!==null?(se(l),l.flags|=128,null):(e&l.child.childLanes)!==0?Xo(t,l,e):(se(l),t=Zl(t,l,e),t!==null?t.sibling:null);se(l);break;case 19:var a=(t.flags&128)!==0;if(n=(e&l.childLanes)!==0,n||(sn(t,l,e,!1),n=(e&l.childLanes)!==0),a){if(n)return Zo(t,l,e);l.flags|=128}if(a=l.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),_(Tt,Tt.current),n)break;return null;case 22:return l.lanes=0,Go(t,l,e,l.pendingProps);case 24:ue(l,Et,t.memoizedState.cache)}return Zl(t,l,e)}function Vo(t,l,e){if(t!==null)if(t.memoizedProps!==l.pendingProps)Mt=!0;else{if(!pc(t,e)&&(l.flags&128)===0)return Mt=!1,nm(t,l,e);Mt=(t.flags&131072)!==0}else Mt=!1,P&&(l.flags&1048576)!==0&&xs(l,wn,l.index);switch(l.lanes=0,l.tag){case 16:t:{var n=l.pendingProps;if(t=Be(l.elementType),l.type=t,typeof t=="function")zi(t)?(n=Xe(t,n),l.tag=1,l=Yo(null,l,t,n,e)):(l.tag=0,l=rc(null,l,t,n,e));else{if(t!=null){var a=t.$$typeof;if(a===Lt){l.tag=11,l=Do(null,l,t,n,e);break t}else if(a===F){l.tag=14,l=Uo(null,l,t,n,e);break t}}throw l=Ul(t)||t,Error(d(306,l,""))}}return l;case 0:return rc(t,l,l.type,l.pendingProps,e);case 1:return n=l.type,a=Xe(n,l.pendingProps),Yo(t,l,n,a,e);case 3:t:{if(Xt(l,l.stateNode.containerInfo),t===null)throw Error(d(387));n=l.pendingProps;var u=l.memoizedState;a=u.element,Yi(t,l),Pn(l,n,null,e);var i=l.memoizedState;if(n=i.cache,ue(l,Et,n),n!==u.cache&&Ui(l,[Et],e,!0),Fn(),n=i.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:i.cache},l.updateQueue.baseState=u,l.memoizedState=u,l.flags&256){l=Lo(t,l,n,e);break t}else if(n!==a){a=rl(Error(d(424)),l),Kn(a),l=Lo(t,l,n,e);break t}else{switch(t=l.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(yt=gl(t.firstChild),Rt=l,P=!0,ne=null,yl=!0,e=Rs(l,null,n,e),l.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Ue(),n===a){l=Zl(t,l,e);break t}Ht(t,l,n,e)}l=l.child}return l;case 26:return ru(t,l),t===null?(e=l0(l.type,null,l.pendingProps,null))?l.memoizedState=e:P||(e=l.type,t=l.pendingProps,n=Cu(J.current).createElement(e),n[Ut]=l,n[Kt]=t,Bt(n,e,t),jt(n),l.stateNode=n):l.memoizedState=l0(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return jn(l),t===null&&P&&(n=l.stateNode=Fd(l.type,l.pendingProps,J.current),Rt=l,yl=!0,a=yt,be(l.type)?(Fc=a,yt=gl(n.firstChild)):yt=a),Ht(t,l,l.pendingProps.children,e),ru(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&P&&((a=n=yt)&&(n=Um(n,l.type,l.pendingProps,yl),n!==null?(l.stateNode=n,Rt=l,yt=gl(n.firstChild),yl=!1,a=!0):a=!1),a||ae(l)),jn(l),a=l.type,u=l.pendingProps,i=t!==null?t.memoizedProps:null,n=u.children,Jc(a,u)?n=null:i!==null&&Jc(a,i)&&(l.flags|=32),l.memoizedState!==null&&(a=Ki(t,l,kr,null,null,e),pa._currentValue=a),ru(t,l),Ht(t,l,n,e),l.child;case 6:return t===null&&P&&((t=e=yt)&&(e=Rm(e,l.pendingProps,yl),e!==null?(l.stateNode=e,Rt=l,yt=null,t=!0):t=!1),t||ae(l)),null;case 13:return Xo(t,l,e);case 4:return Xt(l,l.stateNode.containerInfo),n=l.pendingProps,t===null?l.child=Ye(l,null,n,e):Ht(t,l,n,e),l.child;case 11:return Do(t,l,l.type,l.pendingProps,e);case 7:return Ht(t,l,l.pendingProps,e),l.child;case 8:return Ht(t,l,l.pendingProps.children,e),l.child;case 12:return Ht(t,l,l.pendingProps.children,e),l.child;case 10:return n=l.pendingProps,ue(l,l.type,n.value),Ht(t,l,n.children,e),l.child;case 9:return a=l.type._context,n=l.pendingProps.children,Ge(l),a=Gt(a),n=n(a),l.flags|=1,Ht(t,l,n,e),l.child;case 14:return Uo(t,l,l.type,l.pendingProps,e);case 15:return Ro(t,l,l.type,l.pendingProps,e);case 19:return Zo(t,l,e);case 31:return em(t,l,e);case 22:return Go(t,l,e,l.pendingProps);case 24:return Ge(l),n=Gt(Et),t===null?(a=Hi(),a===null&&(a=ht,u=Ri(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=e),a=u),l.memoizedState={parent:n,cache:a},qi(l),ue(l,Et,a)):((t.lanes&e)!==0&&(Yi(t,l),Pn(l,null,null,e),Fn()),a=t.memoizedState,u=l.memoizedState,a.parent!==n?(a={parent:n,cache:n},l.memoizedState=a,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=a),ue(l,Et,n)):(n=u.cache,ue(l,Et,n),n!==a.cache&&Ui(l,[Et],e,!0))),Ht(t,l,l.pendingProps.children,e),l.child;case 29:throw l.pendingProps}throw Error(d(156,l.tag))}function Vl(t){t.flags|=4}function Ac(t,l,e,n,a){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(gd())t.flags|=8192;else throw qe=$a,Bi}else t.flags&=-16777217}function wo(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!i0(l))if(gd())t.flags|=8192;else throw qe=$a,Bi}function hu(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?Tf():536870912,t.lanes|=l,xn|=l)}function ua(t,l){if(!P)switch(t.tailMode){case"hidden":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function vt(t){var l=t.alternate!==null&&t.alternate.child===t.child,e=0,n=0;if(l)for(var a=t.child;a!==null;)e|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)e|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=e,l}function am(t,l,e){var n=l.pendingProps;switch(_i(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(l),null;case 1:return vt(l),null;case 3:return e=l.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),l.memoizedState.cache!==n&&(l.flags|=2048),Ll(Et),St(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(fn(l)?Vl(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,ji())),vt(l),null;case 26:var a=l.type,u=l.memoizedState;return t===null?(Vl(l),u!==null?(vt(l),wo(l,u)):(vt(l),Ac(l,a,null,n,e))):u?u!==t.memoizedState?(Vl(l),vt(l),wo(l,u)):(vt(l),l.flags&=-16777217):(t=t.memoizedProps,t!==n&&Vl(l),vt(l),Ac(l,a,t,n,e)),null;case 27:if(Ea(l),e=J.current,a=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==n&&Vl(l);else{if(!n){if(l.stateNode===null)throw Error(d(166));return vt(l),null}t=U.current,fn(l)?Ts(l):(t=Fd(a,n,e),l.stateNode=t,Vl(l))}return vt(l),null;case 5:if(Ea(l),a=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==n&&Vl(l);else{if(!n){if(l.stateNode===null)throw Error(d(166));return vt(l),null}if(u=U.current,fn(l))Ts(l);else{var i=Cu(J.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}u[Ut]=l,u[Kt]=n;t:for(i=l.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===l)break t;for(;i.sibling===null;){if(i.return===null||i.return===l)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}l.stateNode=u;t:switch(Bt(u,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Vl(l)}}return vt(l),Ac(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,e),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==n&&Vl(l);else{if(typeof n!="string"&&l.stateNode===null)throw Error(d(166));if(t=J.current,fn(l)){if(t=l.stateNode,e=l.memoizedProps,n=null,a=Rt,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}t[Ut]=l,t=!!(t.nodeValue===e||n!==null&&n.suppressHydrationWarning===!0||Xd(t.nodeValue,e)),t||ae(l,!0)}else t=Cu(t).createTextNode(n),t[Ut]=l,l.stateNode=t}return vt(l),null;case 31:if(e=l.memoizedState,t===null||t.memoizedState!==null){if(n=fn(l),e!==null){if(t===null){if(!n)throw Error(d(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(557));t[Ut]=l}else Ue(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;vt(l),t=!1}else e=ji(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return l.flags&256?(ul(l),l):(ul(l),null);if((l.flags&128)!==0)throw Error(d(558))}return vt(l),null;case 13:if(n=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=fn(l),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(d(318));if(a=l.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(d(317));a[Ut]=l}else Ue(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;vt(l),a=!1}else a=ji(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return l.flags&256?(ul(l),l):(ul(l),null)}return ul(l),(l.flags&128)!==0?(l.lanes=e,l):(e=n!==null,t=t!==null&&t.memoizedState!==null,e&&(n=l.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==a&&(n.flags|=2048)),e!==t&&e&&(l.child.flags|=8192),hu(l,l.updateQueue),vt(l),null);case 4:return St(),t===null&&Qc(l.stateNode.containerInfo),vt(l),null;case 10:return Ll(l.type),vt(l),null;case 19:if(T(Tt),n=l.memoizedState,n===null)return vt(l),null;if(a=(l.flags&128)!==0,u=n.rendering,u===null)if(a)ua(n,!1);else{if(At!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(u=lu(t),u!==null){for(l.flags|=128,ua(n,!1),t=u.updateQueue,l.updateQueue=t,hu(l,t),l.subtreeFlags=0,t=e,e=l.child;e!==null;)bs(e,t),e=e.sibling;return _(Tt,Tt.current&1|2),P&&ql(l,n.treeForkCount),l.child}t=t.sibling}n.tail!==null&&Pt()>pu&&(l.flags|=128,a=!0,ua(n,!1),l.lanes=4194304)}else{if(!a)if(t=lu(u),t!==null){if(l.flags|=128,a=!0,t=t.updateQueue,l.updateQueue=t,hu(l,t),ua(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!P)return vt(l),null}else 2*Pt()-n.renderingStartTime>pu&&e!==536870912&&(l.flags|=128,a=!0,ua(n,!1),l.lanes=4194304);n.isBackwards?(u.sibling=l.child,l.child=u):(t=n.last,t!==null?t.sibling=u:l.child=u,n.last=u)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Pt(),t.sibling=null,e=Tt.current,_(Tt,a?e&1|2:e&1),P&&ql(l,n.treeForkCount),t):(vt(l),null);case 22:case 23:return ul(l),Zi(),n=l.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(l.flags|=8192):n&&(l.flags|=8192),n?(e&536870912)!==0&&(l.flags&128)===0&&(vt(l),l.subtreeFlags&6&&(l.flags|=8192)):vt(l),e=l.updateQueue,e!==null&&hu(l,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==e&&(l.flags|=2048),t!==null&&T(He),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),Ll(Et),vt(l),null;case 25:return null;case 30:return null}throw Error(d(156,l.tag))}function um(t,l){switch(_i(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return Ll(Et),St(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return Ea(l),null;case 31:if(l.memoizedState!==null){if(ul(l),l.alternate===null)throw Error(d(340));Ue()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if(ul(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(d(340));Ue()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return T(Tt),null;case 4:return St(),null;case 10:return Ll(l.type),null;case 22:case 23:return ul(l),Zi(),t!==null&&T(He),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return Ll(Et),null;case 25:return null;default:return null}}function Ko(t,l){switch(_i(l),l.tag){case 3:Ll(Et),St();break;case 26:case 27:case 5:Ea(l);break;case 4:St();break;case 31:l.memoizedState!==null&&ul(l);break;case 13:ul(l);break;case 19:T(Tt);break;case 10:Ll(l.type);break;case 22:case 23:ul(l),Zi(),t!==null&&T(He);break;case 24:Ll(Et)}}function ia(t,l){try{var e=l.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var a=n.next;e=a;do{if((e.tag&t)===t){n=void 0;var u=e.create,i=e.inst;n=u(),i.destroy=n}e=e.next}while(e!==a)}}catch(c){it(l,l.return,c)}}function de(t,l,e){try{var n=l.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&t)===t){var i=n.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,a=l;var f=e,y=c;try{y()}catch(b){it(a,f,b)}}}n=n.next}while(n!==u)}}catch(b){it(l,l.return,b)}}function Jo(t){var l=t.updateQueue;if(l!==null){var e=t.stateNode;try{Hs(l,e)}catch(n){it(t,t.return,n)}}}function ko(t,l,e){e.props=Xe(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(n){it(t,l,n)}}function ca(t,l){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof e=="function"?t.refCleanup=e(n):e.current=n}}catch(a){it(t,l,a)}}function Ol(t,l){var e=t.ref,n=t.refCleanup;if(e!==null)if(typeof n=="function")try{n()}catch(a){it(t,l,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(a){it(t,l,a)}else e.current=null}function Io(t){var l=t.type,e=t.memoizedProps,n=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":e.autoFocus&&n.focus();break t;case"img":e.src?n.src=e.src:e.srcSet&&(n.srcset=e.srcSet)}}catch(a){it(t,t.return,a)}}function xc(t,l,e){try{var n=t.stateNode;Mm(n,t.type,e,l),n[Kt]=l}catch(a){it(t,t.return,a)}}function Wo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&be(t.type)||t.tag===4}function Sc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&be(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tc(t,l,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,l?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,l):(l=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.appendChild(t),e=e._reactRootContainer,e!=null||l.onclick!==null||(l.onclick=Gl));else if(n!==4&&(n===27&&be(t.type)&&(e=t.stateNode,l=null),t=t.child,t!==null))for(Tc(t,l,e),t=t.sibling;t!==null;)Tc(t,l,e),t=t.sibling}function yu(t,l,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,l?e.insertBefore(t,l):e.appendChild(t);else if(n!==4&&(n===27&&be(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(yu(t,l,e),t=t.sibling;t!==null;)yu(t,l,e),t=t.sibling}function $o(t){var l=t.stateNode,e=t.memoizedProps;try{for(var n=t.type,a=l.attributes;a.length;)l.removeAttributeNode(a[0]);Bt(l,n,e),l[Ut]=t,l[Kt]=e}catch(u){it(t,t.return,u)}}var wl=!1,_t=!1,zc=!1,Fo=typeof WeakSet=="function"?WeakSet:Set,Ot=null;function im(t,l){if(t=t.containerInfo,wc=Hu,t=ss(t),gi(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var a=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{e.nodeType,u.nodeType}catch{e=null;break t}var i=0,c=-1,f=-1,y=0,b=0,x=t,v=null;l:for(;;){for(var g;x!==e||a!==0&&x.nodeType!==3||(c=i+a),x!==u||n!==0&&x.nodeType!==3||(f=i+n),x.nodeType===3&&(i+=x.nodeValue.length),(g=x.firstChild)!==null;)v=x,x=g;for(;;){if(x===t)break l;if(v===e&&++y===a&&(c=i),v===u&&++b===n&&(f=i),(g=x.nextSibling)!==null)break;x=v,v=x.parentNode}x=g}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(Kc={focusedElem:t,selectionRange:e},Hu=!1,Ot=l;Ot!==null;)if(l=Ot,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,Ot=t;else for(;Ot!==null;){switch(l=Ot,u=l.alternate,t=l.flags,l.tag){case 0:if((t&4)!==0&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)a=t[e],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,e=l,a=u.memoizedProps,u=u.memoizedState,n=e.stateNode;try{var O=Xe(e.type,a);t=n.getSnapshotBeforeUpdate(O,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(B){it(e,e.return,B)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,e=t.nodeType,e===9)Ic(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ic(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=l.sibling,t!==null){t.return=l.return,Ot=t;break}Ot=l.return}}function Po(t,l,e){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Jl(t,e),n&4&&ia(5,e);break;case 1:if(Jl(t,e),n&4)if(t=e.stateNode,l===null)try{t.componentDidMount()}catch(i){it(e,e.return,i)}else{var a=Xe(e.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(a,l,t.__reactInternalSnapshotBeforeUpdate)}catch(i){it(e,e.return,i)}}n&64&&Jo(e),n&512&&ca(e,e.return);break;case 3:if(Jl(t,e),n&64&&(t=e.updateQueue,t!==null)){if(l=null,e.child!==null)switch(e.child.tag){case 27:case 5:l=e.child.stateNode;break;case 1:l=e.child.stateNode}try{Hs(t,l)}catch(i){it(e,e.return,i)}}break;case 27:l===null&&n&4&&$o(e);case 26:case 5:Jl(t,e),l===null&&n&4&&Io(e),n&512&&ca(e,e.return);break;case 12:Jl(t,e);break;case 31:Jl(t,e),n&4&&ed(t,e);break;case 13:Jl(t,e),n&4&&nd(t,e),n&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=ym.bind(null,e),Gm(t,e))));break;case 22:if(n=e.memoizedState!==null||wl,!n){l=l!==null&&l.memoizedState!==null||_t,a=wl;var u=_t;wl=n,(_t=l)&&!u?kl(t,e,(e.subtreeFlags&8772)!==0):Jl(t,e),wl=a,_t=u}break;case 30:break;default:Jl(t,e)}}function td(t){var l=t.alternate;l!==null&&(t.alternate=null,td(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&ti(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,kt=!1;function Kl(t,l,e){for(e=e.child;e!==null;)ld(t,l,e),e=e.sibling}function ld(t,l,e){if(tl&&typeof tl.onCommitFiberUnmount=="function")try{tl.onCommitFiberUnmount(On,e)}catch{}switch(e.tag){case 26:_t||Ol(e,l),Kl(t,l,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:_t||Ol(e,l);var n=gt,a=kt;be(e.type)&&(gt=e.stateNode,kt=!1),Kl(t,l,e),va(e.stateNode),gt=n,kt=a;break;case 5:_t||Ol(e,l);case 6:if(n=gt,a=kt,gt=null,Kl(t,l,e),gt=n,kt=a,gt!==null)if(kt)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(e.stateNode)}catch(u){it(e,l,u)}else try{gt.removeChild(e.stateNode)}catch(u){it(e,l,u)}break;case 18:gt!==null&&(kt?(t=gt,Jd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),Cn(t)):Jd(gt,e.stateNode));break;case 4:n=gt,a=kt,gt=e.stateNode.containerInfo,kt=!0,Kl(t,l,e),gt=n,kt=a;break;case 0:case 11:case 14:case 15:de(2,e,l),_t||de(4,e,l),Kl(t,l,e);break;case 1:_t||(Ol(e,l),n=e.stateNode,typeof n.componentWillUnmount=="function"&&ko(e,l,n)),Kl(t,l,e);break;case 21:Kl(t,l,e);break;case 22:_t=(n=_t)||e.memoizedState!==null,Kl(t,l,e),_t=n;break;default:Kl(t,l,e)}}function ed(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Cn(t)}catch(e){it(l,l.return,e)}}}function nd(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Cn(t)}catch(e){it(l,l.return,e)}}function cm(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new Fo),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new Fo),l;default:throw Error(d(435,t.tag))}}function vu(t,l){var e=cm(t);l.forEach(function(n){if(!e.has(n)){e.add(n);var a=vm.bind(null,t,n);n.then(a,a)}})}function It(t,l){var e=l.deletions;if(e!==null)for(var n=0;n<e.length;n++){var a=e[n],u=t,i=l,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(be(c.type)){gt=c.stateNode,kt=!1;break t}break;case 5:gt=c.stateNode,kt=!1;break t;case 3:case 4:gt=c.stateNode.containerInfo,kt=!0;break t}c=c.return}if(gt===null)throw Error(d(160));ld(u,i,a),gt=null,kt=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)ad(l,t),l=l.sibling}var Tl=null;function ad(t,l){var e=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:It(l,t),Wt(t),n&4&&(de(3,t,t.return),ia(3,t),de(5,t,t.return));break;case 1:It(l,t),Wt(t),n&512&&(_t||e===null||Ol(e,e.return)),n&64&&wl&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?n:e.concat(n))));break;case 26:var a=Tl;if(It(l,t),Wt(t),n&512&&(_t||e===null||Ol(e,e.return)),n&4){var u=e!==null?e.memoizedState:null;if(n=t.memoizedState,e===null)if(n===null)if(t.stateNode===null){t:{n=t.type,e=t.memoizedProps,a=a.ownerDocument||a;l:switch(n){case"title":u=a.getElementsByTagName("title")[0],(!u||u[Rn]||u[Ut]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(n),a.head.insertBefore(u,a.querySelector("head > title"))),Bt(u,n,e),u[Ut]=t,jt(u),n=u;break t;case"link":var i=a0("link","href",a).get(n+(e.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&u.getAttribute("rel")===(e.rel==null?null:e.rel)&&u.getAttribute("title")===(e.title==null?null:e.title)&&u.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(c,1);break l}}u=a.createElement(n),Bt(u,n,e),a.head.appendChild(u);break;case"meta":if(i=a0("meta","content",a).get(n+(e.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(e.content==null?null:""+e.content)&&u.getAttribute("name")===(e.name==null?null:e.name)&&u.getAttribute("property")===(e.property==null?null:e.property)&&u.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&u.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(c,1);break l}}u=a.createElement(n),Bt(u,n,e),a.head.appendChild(u);break;default:throw Error(d(468,n))}u[Ut]=t,jt(u),n=u}t.stateNode=n}else u0(a,t.type,t.stateNode);else t.stateNode=n0(a,n,t.memoizedProps);else u!==n?(u===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):u.count--,n===null?u0(a,t.type,t.stateNode):n0(a,n,t.memoizedProps)):n===null&&t.stateNode!==null&&xc(t,t.memoizedProps,e.memoizedProps)}break;case 27:It(l,t),Wt(t),n&512&&(_t||e===null||Ol(e,e.return)),e!==null&&n&4&&xc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(It(l,t),Wt(t),n&512&&(_t||e===null||Ol(e,e.return)),t.flags&32){a=t.stateNode;try{$e(a,"")}catch(O){it(t,t.return,O)}}n&4&&t.stateNode!=null&&(a=t.memoizedProps,xc(t,a,e!==null?e.memoizedProps:a)),n&1024&&(zc=!0);break;case 6:if(It(l,t),Wt(t),n&4){if(t.stateNode===null)throw Error(d(162));n=t.memoizedProps,e=t.stateNode;try{e.nodeValue=n}catch(O){it(t,t.return,O)}}break;case 3:if(Du=null,a=Tl,Tl=ju(l.containerInfo),It(l,t),Tl=a,Wt(t),n&4&&e!==null&&e.memoizedState.isDehydrated)try{Cn(l.containerInfo)}catch(O){it(t,t.return,O)}zc&&(zc=!1,ud(t));break;case 4:n=Tl,Tl=ju(t.stateNode.containerInfo),It(l,t),Wt(t),Tl=n;break;case 12:It(l,t),Wt(t);break;case 31:It(l,t),Wt(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 13:It(l,t),Wt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(bu=Pt()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 22:a=t.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,y=wl,b=_t;if(wl=y||a,_t=b||f,It(l,t),_t=b,wl=y,Wt(t),n&8192)t:for(l=t.stateNode,l._visibility=a?l._visibility&-2:l._visibility|1,a&&(e===null||f||wl||_t||Qe(t)),e=null,l=t;;){if(l.tag===5||l.tag===26){if(e===null){f=e=l;try{if(u=f.stateNode,a)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var x=f.memoizedProps.style,v=x!=null&&x.hasOwnProperty("display")?x.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(O){it(f,f.return,O)}}}else if(l.tag===6){if(e===null){f=l;try{f.stateNode.nodeValue=a?"":f.memoizedProps}catch(O){it(f,f.return,O)}}}else if(l.tag===18){if(e===null){f=l;try{var g=f.stateNode;a?kd(g,!0):kd(f.stateNode,!1)}catch(O){it(f,f.return,O)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;e===l&&(e=null),l=l.return}e===l&&(e=null),l.sibling.return=l.return,l=l.sibling}n&4&&(n=t.updateQueue,n!==null&&(e=n.retryQueue,e!==null&&(n.retryQueue=null,vu(t,e))));break;case 19:It(l,t),Wt(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 30:break;case 21:break;default:It(l,t),Wt(t)}}function Wt(t){var l=t.flags;if(l&2){try{for(var e,n=t.return;n!==null;){if(Wo(n)){e=n;break}n=n.return}if(e==null)throw Error(d(160));switch(e.tag){case 27:var a=e.stateNode,u=Sc(t);yu(t,u,a);break;case 5:var i=e.stateNode;e.flags&32&&($e(i,""),e.flags&=-33);var c=Sc(t);yu(t,c,i);break;case 3:case 4:var f=e.stateNode.containerInfo,y=Sc(t);Tc(t,y,f);break;default:throw Error(d(161))}}catch(b){it(t,t.return,b)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function ud(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;ud(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function Jl(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)Po(t,l.alternate,l),l=l.sibling}function Qe(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:de(4,l,l.return),Qe(l);break;case 1:Ol(l,l.return);var e=l.stateNode;typeof e.componentWillUnmount=="function"&&ko(l,l.return,e),Qe(l);break;case 27:va(l.stateNode);case 26:case 5:Ol(l,l.return),Qe(l);break;case 22:l.memoizedState===null&&Qe(l);break;case 30:Qe(l);break;default:Qe(l)}t=t.sibling}}function kl(t,l,e){for(e=e&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var n=l.alternate,a=t,u=l,i=u.flags;switch(u.tag){case 0:case 11:case 15:kl(a,u,e),ia(4,u);break;case 1:if(kl(a,u,e),n=u,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(y){it(n,n.return,y)}if(n=u,a=n.updateQueue,a!==null){var c=n.stateNode;try{var f=a.shared.hiddenCallbacks;if(f!==null)for(a.shared.hiddenCallbacks=null,a=0;a<f.length;a++)Gs(f[a],c)}catch(y){it(n,n.return,y)}}e&&i&64&&Jo(u),ca(u,u.return);break;case 27:$o(u);case 26:case 5:kl(a,u,e),e&&n===null&&i&4&&Io(u),ca(u,u.return);break;case 12:kl(a,u,e);break;case 31:kl(a,u,e),e&&i&4&&ed(a,u);break;case 13:kl(a,u,e),e&&i&4&&nd(a,u);break;case 22:u.memoizedState===null&&kl(a,u,e),ca(u,u.return);break;case 30:break;default:kl(a,u,e)}l=l.sibling}}function Ec(t,l){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Jn(e))}function Nc(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Jn(t))}function zl(t,l,e,n){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)id(t,l,e,n),l=l.sibling}function id(t,l,e,n){var a=l.flags;switch(l.tag){case 0:case 11:case 15:zl(t,l,e,n),a&2048&&ia(9,l);break;case 1:zl(t,l,e,n);break;case 3:zl(t,l,e,n),a&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Jn(t)));break;case 12:if(a&2048){zl(t,l,e,n),t=l.stateNode;try{var u=l.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){it(l,l.return,f)}}else zl(t,l,e,n);break;case 31:zl(t,l,e,n);break;case 13:zl(t,l,e,n);break;case 23:break;case 22:u=l.stateNode,i=l.alternate,l.memoizedState!==null?u._visibility&2?zl(t,l,e,n):fa(t,l):u._visibility&2?zl(t,l,e,n):(u._visibility|=2,bn(t,l,e,n,(l.subtreeFlags&10256)!==0||!1)),a&2048&&Ec(i,l);break;case 24:zl(t,l,e,n),a&2048&&Nc(l.alternate,l);break;default:zl(t,l,e,n)}}function bn(t,l,e,n,a){for(a=a&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var u=t,i=l,c=e,f=n,y=i.flags;switch(i.tag){case 0:case 11:case 15:bn(u,i,c,f,a),ia(8,i);break;case 23:break;case 22:var b=i.stateNode;i.memoizedState!==null?b._visibility&2?bn(u,i,c,f,a):fa(u,i):(b._visibility|=2,bn(u,i,c,f,a)),a&&y&2048&&Ec(i.alternate,i);break;case 24:bn(u,i,c,f,a),a&&y&2048&&Nc(i.alternate,i);break;default:bn(u,i,c,f,a)}l=l.sibling}}function fa(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var e=t,n=l,a=n.flags;switch(n.tag){case 22:fa(e,n),a&2048&&Ec(n.alternate,n);break;case 24:fa(e,n),a&2048&&Nc(n.alternate,n);break;default:fa(e,n)}l=l.sibling}}var sa=8192;function pn(t,l,e){if(t.subtreeFlags&sa)for(t=t.child;t!==null;)cd(t,l,e),t=t.sibling}function cd(t,l,e){switch(t.tag){case 26:pn(t,l,e),t.flags&sa&&t.memoizedState!==null&&Jm(e,Tl,t.memoizedState,t.memoizedProps);break;case 5:pn(t,l,e);break;case 3:case 4:var n=Tl;Tl=ju(t.stateNode.containerInfo),pn(t,l,e),Tl=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=sa,sa=16777216,pn(t,l,e),sa=n):pn(t,l,e));break;default:pn(t,l,e)}}function fd(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function oa(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var n=l[e];Ot=n,od(n,t)}fd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sd(t),t=t.sibling}function sd(t){switch(t.tag){case 0:case 11:case 15:oa(t),t.flags&2048&&de(9,t,t.return);break;case 3:oa(t);break;case 12:oa(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,gu(t)):oa(t);break;default:oa(t)}}function gu(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var n=l[e];Ot=n,od(n,t)}fd(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:de(8,l,l.return),gu(l);break;case 22:e=l.stateNode,e._visibility&2&&(e._visibility&=-3,gu(l));break;default:gu(l)}t=t.sibling}}function od(t,l){for(;Ot!==null;){var e=Ot;switch(e.tag){case 0:case 11:case 15:de(8,e,l);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var n=e.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Jn(e.memoizedState.cache)}if(n=e.child,n!==null)n.return=e,Ot=n;else t:for(e=t;Ot!==null;){n=Ot;var a=n.sibling,u=n.return;if(td(n),n===e){Ot=null;break t}if(a!==null){a.return=u,Ot=a;break t}Ot=u}}}var fm={getCacheForType:function(t){var l=Gt(Et),e=l.data.get(t);return e===void 0&&(e=t(),l.data.set(t,e)),e},cacheSignal:function(){return Gt(Et).controller.signal}},sm=typeof WeakMap=="function"?WeakMap:Map,nt=0,ht=null,k=null,W=0,ut=0,il=null,re=!1,An=!1,Mc=!1,Il=0,At=0,me=0,Ze=0,_c=0,cl=0,xn=0,da=null,$t=null,Cc=!1,bu=0,dd=0,pu=1/0,Au=null,he=null,Ct=0,ye=null,Sn=null,Wl=0,jc=0,Oc=null,rd=null,ra=0,Dc=null;function fl(){return(nt&2)!==0&&W!==0?W&-W:p.T!==null?qc():Mf()}function md(){if(cl===0)if((W&536870912)===0||P){var t=_a;_a<<=1,(_a&3932160)===0&&(_a=262144),cl=t}else cl=536870912;return t=al.current,t!==null&&(t.flags|=32),cl}function Ft(t,l,e){(t===ht&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&(Tn(t,0),ve(t,W,cl,!1)),Un(t,e),((nt&2)===0||t!==ht)&&(t===ht&&((nt&2)===0&&(Ze|=e),At===4&&ve(t,W,cl,!1)),Dl(t))}function hd(t,l,e){if((nt&6)!==0)throw Error(d(327));var n=!e&&(l&127)===0&&(l&t.expiredLanes)===0||Dn(t,l),a=n?rm(t,l):Rc(t,l,!0),u=n;do{if(a===0){An&&!n&&ve(t,l,0,!1);break}else{if(e=t.current.alternate,u&&!om(e)){a=Rc(t,l,!1),u=!1;continue}if(a===2){if(u=l,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){l=i;t:{var c=t;a=da;var f=c.current.memoizedState.isDehydrated;if(f&&(Tn(c,i).flags|=256),i=Rc(c,i,!1),i!==2){if(Mc&&!f){c.errorRecoveryDisabledLanes|=u,Ze|=u,a=4;break t}u=$t,$t=a,u!==null&&($t===null?$t=u:$t.push.apply($t,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){Tn(t,0),ve(t,l,0,!0);break}t:{switch(n=t,u=a,u){case 0:case 1:throw Error(d(345));case 4:if((l&4194048)!==l)break;case 6:ve(n,l,cl,!re);break t;case 2:$t=null;break;case 3:case 5:break;default:throw Error(d(329))}if((l&62914560)===l&&(a=bu+300-Pt(),10<a)){if(ve(n,l,cl,!re),ja(n,0,!0)!==0)break t;Wl=l,n.timeoutHandle=wd(yd.bind(null,n,e,$t,Au,Cc,l,cl,Ze,xn,re,u,"Throttled",-0,0),a);break t}yd(n,e,$t,Au,Cc,l,cl,Ze,xn,re,u,null,-0,0)}}break}while(!0);Dl(t)}function yd(t,l,e,n,a,u,i,c,f,y,b,x,v,g){if(t.timeoutHandle=-1,x=l.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gl},cd(l,u,x);var O=(u&62914560)===u?bu-Pt():(u&4194048)===u?dd-Pt():0;if(O=km(x,O),O!==null){Wl=u,t.cancelPendingCommit=O(Td.bind(null,t,l,u,e,n,a,i,c,f,b,x,null,v,g)),ve(t,u,i,!y);return}}Td(t,l,u,e,n,a,i,c,f)}function om(t){for(var l=t;;){var e=l.tag;if((e===0||e===11||e===15)&&l.flags&16384&&(e=l.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var n=0;n<e.length;n++){var a=e[n],u=a.getSnapshot;a=a.value;try{if(!el(u(),a))return!1}catch{return!1}}if(e=l.child,l.subtreeFlags&16384&&e!==null)e.return=l,l=e;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function ve(t,l,e,n){l&=~_c,l&=~Ze,t.suspendedLanes|=l,t.pingedLanes&=~l,n&&(t.warmLanes|=l),n=t.expirationTimes;for(var a=l;0<a;){var u=31-ll(a),i=1<<u;n[u]=-1,a&=~i}e!==0&&zf(t,e,l)}function xu(){return(nt&6)===0?(ma(0),!1):!0}function Uc(){if(k!==null){if(ut===0)var t=k.return;else t=k,Yl=Re=null,Ii(t),mn=null,In=0,t=k;for(;t!==null;)Ko(t.alternate,t),t=t.return;k=null}}function Tn(t,l){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,jm(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Wl=0,Uc(),ht=t,k=e=Bl(t.current,null),W=l,ut=0,il=null,re=!1,An=Dn(t,l),Mc=!1,xn=cl=_c=Ze=me=At=0,$t=da=null,Cc=!1,(l&8)!==0&&(l|=l&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=l;0<n;){var a=31-ll(n),u=1<<a;l|=t[a],n&=~u}return Il=l,Qa(),e}function vd(t,l){Z=null,p.H=na,l===rn||l===Wa?(l=Os(),ut=3):l===Bi?(l=Os(),ut=4):ut=l===dc?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,il=l,k===null&&(At=1,ou(t,rl(l,t.current)))}function gd(){var t=al.current;return t===null?!0:(W&4194048)===W?vl===null:(W&62914560)===W||(W&536870912)!==0?t===vl:!1}function bd(){var t=p.H;return p.H=na,t===null?na:t}function pd(){var t=p.A;return p.A=fm,t}function Su(){At=4,re||(W&4194048)!==W&&al.current!==null||(An=!0),(me&134217727)===0&&(Ze&134217727)===0||ht===null||ve(ht,W,cl,!1)}function Rc(t,l,e){var n=nt;nt|=2;var a=bd(),u=pd();(ht!==t||W!==l)&&(Au=null,Tn(t,l)),l=!1;var i=At;t:do try{if(ut!==0&&k!==null){var c=k,f=il;switch(ut){case 8:Uc(),i=6;break t;case 3:case 2:case 9:case 6:al.current===null&&(l=!0);var y=ut;if(ut=0,il=null,zn(t,c,f,y),e&&An){i=0;break t}break;default:y=ut,ut=0,il=null,zn(t,c,f,y)}}dm(),i=At;break}catch(b){vd(t,b)}while(!0);return l&&t.shellSuspendCounter++,Yl=Re=null,nt=n,p.H=a,p.A=u,k===null&&(ht=null,W=0,Qa()),i}function dm(){for(;k!==null;)Ad(k)}function rm(t,l){var e=nt;nt|=2;var n=bd(),a=pd();ht!==t||W!==l?(Au=null,pu=Pt()+500,Tn(t,l)):An=Dn(t,l);t:do try{if(ut!==0&&k!==null){l=k;var u=il;l:switch(ut){case 1:ut=0,il=null,zn(t,l,u,1);break;case 2:case 9:if(Cs(u)){ut=0,il=null,xd(l);break}l=function(){ut!==2&&ut!==9||ht!==t||(ut=7),Dl(t)},u.then(l,l);break t;case 3:ut=7;break t;case 4:ut=5;break t;case 7:Cs(u)?(ut=0,il=null,xd(l)):(ut=0,il=null,zn(t,l,u,7));break;case 5:var i=null;switch(k.tag){case 26:i=k.memoizedState;case 5:case 27:var c=k;if(i?i0(i):c.stateNode.complete){ut=0,il=null;var f=c.sibling;if(f!==null)k=f;else{var y=c.return;y!==null?(k=y,Tu(y)):k=null}break l}}ut=0,il=null,zn(t,l,u,5);break;case 6:ut=0,il=null,zn(t,l,u,6);break;case 8:Uc(),At=6;break t;default:throw Error(d(462))}}mm();break}catch(b){vd(t,b)}while(!0);return Yl=Re=null,p.H=n,p.A=a,nt=e,k!==null?0:(ht=null,W=0,Qa(),At)}function mm(){for(;k!==null&&!H0();)Ad(k)}function Ad(t){var l=Vo(t.alternate,t,Il);t.memoizedProps=t.pendingProps,l===null?Tu(t):k=l}function xd(t){var l=t,e=l.alternate;switch(l.tag){case 15:case 0:l=qo(e,l,l.pendingProps,l.type,void 0,W);break;case 11:l=qo(e,l,l.pendingProps,l.type.render,l.ref,W);break;case 5:Ii(l);default:Ko(e,l),l=k=bs(l,Il),l=Vo(e,l,Il)}t.memoizedProps=t.pendingProps,l===null?Tu(t):k=l}function zn(t,l,e,n){Yl=Re=null,Ii(l),mn=null,In=0;var a=l.return;try{if(lm(t,a,l,e,W)){At=1,ou(t,rl(e,t.current)),k=null;return}}catch(u){if(a!==null)throw k=a,u;At=1,ou(t,rl(e,t.current)),k=null;return}l.flags&32768?(P||n===1?t=!0:An||(W&536870912)!==0?t=!1:(re=t=!0,(n===2||n===9||n===3||n===6)&&(n=al.current,n!==null&&n.tag===13&&(n.flags|=16384))),Sd(l,t)):Tu(l)}function Tu(t){var l=t;do{if((l.flags&32768)!==0){Sd(l,re);return}t=l.return;var e=am(l.alternate,l,Il);if(e!==null){k=e;return}if(l=l.sibling,l!==null){k=l;return}k=l=t}while(l!==null);At===0&&(At=5)}function Sd(t,l){do{var e=um(t.alternate,t);if(e!==null){e.flags&=32767,k=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!l&&(t=t.sibling,t!==null)){k=t;return}k=t=e}while(t!==null);At=6,k=null}function Td(t,l,e,n,a,u,i,c,f){t.cancelPendingCommit=null;do zu();while(Ct!==0);if((nt&6)!==0)throw Error(d(327));if(l!==null){if(l===t.current)throw Error(d(177));if(u=l.lanes|l.childLanes,u|=Si,K0(t,e,u,i,c,f),t===ht&&(k=ht=null,W=0),Sn=l,ye=t,Wl=e,jc=u,Oc=a,rd=n,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,gm(Na,function(){return _d(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||n){n=p.T,p.T=null,a=N.p,N.p=2,i=nt,nt|=4;try{im(t,l,e)}finally{nt=i,N.p=a,p.T=n}}Ct=1,zd(),Ed(),Nd()}}function zd(){if(Ct===1){Ct=0;var t=ye,l=Sn,e=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||e){e=p.T,p.T=null;var n=N.p;N.p=2;var a=nt;nt|=4;try{ad(l,t);var u=Kc,i=ss(t.containerInfo),c=u.focusedElem,f=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&fs(c.ownerDocument.documentElement,c)){if(f!==null&&gi(c)){var y=f.start,b=f.end;if(b===void 0&&(b=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(b,c.value.length);else{var x=c.ownerDocument||document,v=x&&x.defaultView||window;if(v.getSelection){var g=v.getSelection(),O=c.textContent.length,B=Math.min(f.start,O),dt=f.end===void 0?B:Math.min(f.end,O);!g.extend&&B>dt&&(i=dt,dt=B,B=i);var m=cs(c,B),o=cs(c,dt);if(m&&o&&(g.rangeCount!==1||g.anchorNode!==m.node||g.anchorOffset!==m.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)){var h=x.createRange();h.setStart(m.node,m.offset),g.removeAllRanges(),B>dt?(g.addRange(h),g.extend(o.node,o.offset)):(h.setEnd(o.node,o.offset),g.addRange(h))}}}}for(x=[],g=c;g=g.parentNode;)g.nodeType===1&&x.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<x.length;c++){var A=x[c];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Hu=!!wc,Kc=wc=null}finally{nt=a,N.p=n,p.T=e}}t.current=l,Ct=2}}function Ed(){if(Ct===2){Ct=0;var t=ye,l=Sn,e=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||e){e=p.T,p.T=null;var n=N.p;N.p=2;var a=nt;nt|=4;try{Po(t,l.alternate,l)}finally{nt=a,N.p=n,p.T=e}}Ct=3}}function Nd(){if(Ct===4||Ct===3){Ct=0,B0();var t=ye,l=Sn,e=Wl,n=rd;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?Ct=5:(Ct=0,Sn=ye=null,Md(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(he=null),Fu(e),l=l.stateNode,tl&&typeof tl.onCommitFiberRoot=="function")try{tl.onCommitFiberRoot(On,l,void 0,(l.current.flags&128)===128)}catch{}if(n!==null){l=p.T,a=N.p,N.p=2,p.T=null;try{for(var u=t.onRecoverableError,i=0;i<n.length;i++){var c=n[i];u(c.value,{componentStack:c.stack})}}finally{p.T=l,N.p=a}}(Wl&3)!==0&&zu(),Dl(t),a=t.pendingLanes,(e&261930)!==0&&(a&42)!==0?t===Dc?ra++:(ra=0,Dc=t):ra=0,ma(0)}}function Md(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,Jn(l)))}function zu(){return zd(),Ed(),Nd(),_d()}function _d(){if(Ct!==5)return!1;var t=ye,l=jc;jc=0;var e=Fu(Wl),n=p.T,a=N.p;try{N.p=32>e?32:e,p.T=null,e=Oc,Oc=null;var u=ye,i=Wl;if(Ct=0,Sn=ye=null,Wl=0,(nt&6)!==0)throw Error(d(331));var c=nt;if(nt|=4,sd(u.current),id(u,u.current,i,e),nt=c,ma(0,!1),tl&&typeof tl.onPostCommitFiberRoot=="function")try{tl.onPostCommitFiberRoot(On,u)}catch{}return!0}finally{N.p=a,p.T=n,Md(t,l)}}function Cd(t,l,e){l=rl(e,l),l=oc(t.stateNode,l,2),t=fe(t,l,2),t!==null&&(Un(t,2),Dl(t))}function it(t,l,e){if(t.tag===3)Cd(t,t,e);else for(;l!==null;){if(l.tag===3){Cd(l,t,e);break}else if(l.tag===1){var n=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(he===null||!he.has(n))){t=rl(e,t),e=jo(2),n=fe(l,e,2),n!==null&&(Oo(e,n,l,t),Un(n,2),Dl(n));break}}l=l.return}}function Gc(t,l,e){var n=t.pingCache;if(n===null){n=t.pingCache=new sm;var a=new Set;n.set(l,a)}else a=n.get(l),a===void 0&&(a=new Set,n.set(l,a));a.has(e)||(Mc=!0,a.add(e),t=hm.bind(null,t,l,e),l.then(t,t))}function hm(t,l,e){var n=t.pingCache;n!==null&&n.delete(l),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,ht===t&&(W&e)===e&&(At===4||At===3&&(W&62914560)===W&&300>Pt()-bu?(nt&2)===0&&Tn(t,0):_c|=e,xn===W&&(xn=0)),Dl(t)}function jd(t,l){l===0&&(l=Tf()),t=Oe(t,l),t!==null&&(Un(t,l),Dl(t))}function ym(t){var l=t.memoizedState,e=0;l!==null&&(e=l.retryLane),jd(t,e)}function vm(t,l){var e=0;switch(t.tag){case 31:case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(e=a.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(l),jd(t,e)}function gm(t,l){return ku(t,l)}var Eu=null,En=null,Hc=!1,Nu=!1,Bc=!1,ge=0;function Dl(t){t!==En&&t.next===null&&(En===null?Eu=En=t:En=En.next=t),Nu=!0,Hc||(Hc=!0,pm())}function ma(t,l){if(!Bc&&Nu){Bc=!0;do for(var e=!1,n=Eu;n!==null;){if(t!==0){var a=n.pendingLanes;if(a===0)var u=0;else{var i=n.suspendedLanes,c=n.pingedLanes;u=(1<<31-ll(42|t)+1)-1,u&=a&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(e=!0,Rd(n,u))}else u=W,u=ja(n,n===ht?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||Dn(n,u)||(e=!0,Rd(n,u));n=n.next}while(e);Bc=!1}}function bm(){Od()}function Od(){Nu=Hc=!1;var t=0;ge!==0&&Cm()&&(t=ge);for(var l=Pt(),e=null,n=Eu;n!==null;){var a=n.next,u=Dd(n,l);u===0?(n.next=null,e===null?Eu=a:e.next=a,a===null&&(En=e)):(e=n,(t!==0||(u&3)!==0)&&(Nu=!0)),n=a}Ct!==0&&Ct!==5||ma(t),ge!==0&&(ge=0)}function Dd(t,l){for(var e=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-ll(u),c=1<<i,f=a[i];f===-1?((c&e)===0||(c&n)!==0)&&(a[i]=w0(c,l)):f<=l&&(t.expiredLanes|=c),u&=~c}if(l=ht,e=W,e=ja(t,t===l?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,e===0||t===l&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Iu(n),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Dn(t,e)){if(l=e&-e,l===t.callbackPriority)return l;switch(n!==null&&Iu(n),Fu(e)){case 2:case 8:e=xf;break;case 32:e=Na;break;case 268435456:e=Sf;break;default:e=Na}return n=Ud.bind(null,t),e=ku(e,n),t.callbackPriority=l,t.callbackNode=e,l}return n!==null&&n!==null&&Iu(n),t.callbackPriority=2,t.callbackNode=null,2}function Ud(t,l){if(Ct!==0&&Ct!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(zu()&&t.callbackNode!==e)return null;var n=W;return n=ja(t,t===ht?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(hd(t,n,l),Dd(t,Pt()),t.callbackNode!=null&&t.callbackNode===e?Ud.bind(null,t):null)}function Rd(t,l){if(zu())return null;hd(t,l,!0)}function pm(){Om(function(){(nt&6)!==0?ku(Af,bm):Od()})}function qc(){if(ge===0){var t=on;t===0&&(t=Ma,Ma<<=1,(Ma&261888)===0&&(Ma=256)),ge=t}return ge}function Gd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ra(""+t)}function Hd(t,l){var e=l.ownerDocument.createElement("input");return e.name=l.name,e.value=l.value,t.id&&e.setAttribute("form",t.id),l.parentNode.insertBefore(e,l),t=new FormData(t),e.parentNode.removeChild(e),t}function Am(t,l,e,n,a){if(l==="submit"&&e&&e.stateNode===a){var u=Gd((a[Kt]||null).action),i=n.submitter;i&&(l=(l=i[Kt]||null)?Gd(l.formAction):i.getAttribute("formAction"),l!==null&&(u=l,i=null));var c=new qa("action","action",null,n,a);t.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ge!==0){var f=i?Hd(a,i):new FormData(a);ac(e,{pending:!0,data:f,method:a.method,action:u},null,f)}}else typeof u=="function"&&(c.preventDefault(),f=i?Hd(a,i):new FormData(a),ac(e,{pending:!0,data:f,method:a.method,action:u},u,f))},currentTarget:a}]})}}for(var Yc=0;Yc<xi.length;Yc++){var Lc=xi[Yc],xm=Lc.toLowerCase(),Sm=Lc[0].toUpperCase()+Lc.slice(1);Sl(xm,"on"+Sm)}Sl(rs,"onAnimationEnd"),Sl(ms,"onAnimationIteration"),Sl(hs,"onAnimationStart"),Sl("dblclick","onDoubleClick"),Sl("focusin","onFocus"),Sl("focusout","onBlur"),Sl(qr,"onTransitionRun"),Sl(Yr,"onTransitionStart"),Sl(Lr,"onTransitionCancel"),Sl(ys,"onTransitionEnd"),Ie("onMouseEnter",["mouseout","mouseover"]),Ie("onMouseLeave",["mouseout","mouseover"]),Ie("onPointerEnter",["pointerout","pointerover"]),Ie("onPointerLeave",["pointerout","pointerover"]),Me("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Me("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Me("onBeforeInput",["compositionend","keypress","textInput","paste"]),Me("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Me("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Me("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ha));function Bd(t,l){l=(l&4)!==0;for(var e=0;e<t.length;e++){var n=t[e],a=n.event;n=n.listeners;t:{var u=void 0;if(l)for(var i=n.length-1;0<=i;i--){var c=n[i],f=c.instance,y=c.currentTarget;if(c=c.listener,f!==u&&a.isPropagationStopped())break t;u=c,a.currentTarget=y;try{u(a)}catch(b){Xa(b)}a.currentTarget=null,u=f}else for(i=0;i<n.length;i++){if(c=n[i],f=c.instance,y=c.currentTarget,c=c.listener,f!==u&&a.isPropagationStopped())break t;u=c,a.currentTarget=y;try{u(a)}catch(b){Xa(b)}a.currentTarget=null,u=f}}}}function I(t,l){var e=l[Pu];e===void 0&&(e=l[Pu]=new Set);var n=t+"__bubble";e.has(n)||(qd(l,t,2,!1),e.add(n))}function Xc(t,l,e){var n=0;l&&(n|=4),qd(e,t,n,l)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Qc(t){if(!t[Mu]){t[Mu]=!0,jf.forEach(function(e){e!=="selectionchange"&&(Tm.has(e)||Xc(e,!1,t),Xc(e,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[Mu]||(l[Mu]=!0,Xc("selectionchange",!1,l))}}function qd(t,l,e,n){switch(m0(l)){case 2:var a=$m;break;case 8:a=Fm;break;default:a=nf}e=a.bind(null,l,e,t),a=void 0,!fi||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(l,e,{capture:!0,passive:a}):t.addEventListener(l,e,!0):a!==void 0?t.addEventListener(l,e,{passive:a}):t.addEventListener(l,e,!1)}function Zc(t,l,e,n,a){var u=n;if((l&1)===0&&(l&2)===0&&n!==null)t:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var c=n.stateNode.containerInfo;if(c===a)break;if(i===4)for(i=n.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;c!==null;){if(i=Ke(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){n=u=i;continue t}c=c.parentNode}}n=n.return}Qf(function(){var y=u,b=ii(e),x=[];t:{var v=vs.get(t);if(v!==void 0){var g=qa,O=t;switch(t){case"keypress":if(Ha(e)===0)break t;case"keydown":case"keyup":g=vr;break;case"focusin":O="focus",g=ri;break;case"focusout":O="blur",g=ri;break;case"beforeblur":case"afterblur":g=ri;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ar;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=pr;break;case rs:case ms:case hs:g=cr;break;case ys:g=xr;break;case"scroll":case"scrollend":g=er;break;case"wheel":g=Tr;break;case"copy":case"cut":case"paste":g=sr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Jf;break;case"toggle":case"beforetoggle":g=Er}var B=(l&4)!==0,dt=!B&&(t==="scroll"||t==="scrollend"),m=B?v!==null?v+"Capture":null:v;B=[];for(var o=y,h;o!==null;){var A=o;if(h=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||h===null||m===null||(A=Hn(o,m),A!=null&&B.push(ya(o,A,h))),dt)break;o=o.return}0<B.length&&(v=new g(v,O,null,e,b),x.push({event:v,listeners:B}))}}if((l&7)===0){t:{if(v=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",v&&e!==ui&&(O=e.relatedTarget||e.fromElement)&&(Ke(O)||O[we]))break t;if((g||v)&&(v=b.window===b?b:(v=b.ownerDocument)?v.defaultView||v.parentWindow:window,g?(O=e.relatedTarget||e.toElement,g=y,O=O?Ke(O):null,O!==null&&(dt=D(O),B=O.tag,O!==dt||B!==5&&B!==27&&B!==6)&&(O=null)):(g=null,O=y),g!==O)){if(B=wf,A="onMouseLeave",m="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(B=Jf,A="onPointerLeave",m="onPointerEnter",o="pointer"),dt=g==null?v:Gn(g),h=O==null?v:Gn(O),v=new B(A,o+"leave",g,e,b),v.target=dt,v.relatedTarget=h,A=null,Ke(b)===y&&(B=new B(m,o+"enter",O,e,b),B.target=h,B.relatedTarget=dt,A=B),dt=A,g&&O)l:{for(B=zm,m=g,o=O,h=0,A=m;A;A=B(A))h++;A=0;for(var G=o;G;G=B(G))A++;for(;0<h-A;)m=B(m),h--;for(;0<A-h;)o=B(o),A--;for(;h--;){if(m===o||o!==null&&m===o.alternate){B=m;break l}m=B(m),o=B(o)}B=null}else B=null;g!==null&&Yd(x,v,g,B,!1),O!==null&&dt!==null&&Yd(x,dt,O,B,!0)}}t:{if(v=y?Gn(y):window,g=v.nodeName&&v.nodeName.toLowerCase(),g==="select"||g==="input"&&v.type==="file")var lt=ls;else if(Pf(v))if(es)lt=Gr;else{lt=Ur;var R=Dr}else g=v.nodeName,!g||g.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?y&&ai(y.elementType)&&(lt=ls):lt=Rr;if(lt&&(lt=lt(t,y))){ts(x,lt,e,b);break t}R&&R(t,v,y),t==="focusout"&&y&&v.type==="number"&&y.memoizedProps.value!=null&&ni(v,"number",v.value)}switch(R=y?Gn(y):window,t){case"focusin":(Pf(R)||R.contentEditable==="true")&&(ln=R,bi=y,Vn=null);break;case"focusout":Vn=bi=ln=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,os(x,e,b);break;case"selectionchange":if(Br)break;case"keydown":case"keyup":os(x,e,b)}var V;if(hi)t:{switch(t){case"compositionstart":var $="onCompositionStart";break t;case"compositionend":$="onCompositionEnd";break t;case"compositionupdate":$="onCompositionUpdate";break t}$=void 0}else tn?$f(t,e)&&($="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&($="onCompositionStart");$&&(kf&&e.locale!=="ko"&&(tn||$!=="onCompositionStart"?$==="onCompositionEnd"&&tn&&(V=Zf()):(le=b,si="value"in le?le.value:le.textContent,tn=!0)),R=_u(y,$),0<R.length&&($=new Kf($,t,null,e,b),x.push({event:$,listeners:R}),V?$.data=V:(V=Ff(e),V!==null&&($.data=V)))),(V=Mr?_r(t,e):Cr(t,e))&&($=_u(y,"onBeforeInput"),0<$.length&&(R=new Kf("onBeforeInput","beforeinput",null,e,b),x.push({event:R,listeners:$}),R.data=V)),Am(x,t,y,e,b)}Bd(x,l)})}function ya(t,l,e){return{instance:t,listener:l,currentTarget:e}}function _u(t,l){for(var e=l+"Capture",n=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Hn(t,e),a!=null&&n.unshift(ya(t,a,u)),a=Hn(t,l),a!=null&&n.push(ya(t,a,u))),t.tag===3)return n;t=t.return}return[]}function zm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yd(t,l,e,n,a){for(var u=l._reactName,i=[];e!==null&&e!==n;){var c=e,f=c.alternate,y=c.stateNode;if(c=c.tag,f!==null&&f===n)break;c!==5&&c!==26&&c!==27||y===null||(f=y,a?(y=Hn(e,u),y!=null&&i.unshift(ya(e,y,f))):a||(y=Hn(e,u),y!=null&&i.push(ya(e,y,f)))),e=e.return}i.length!==0&&t.push({event:l,listeners:i})}var Em=/\r\n?/g,Nm=/\u0000|\uFFFD/g;function Ld(t){return(typeof t=="string"?t:""+t).replace(Em,`
`).replace(Nm,"")}function Xd(t,l){return l=Ld(l),Ld(t)===l}function ot(t,l,e,n,a,u){switch(e){case"children":typeof n=="string"?l==="body"||l==="textarea"&&n===""||$e(t,n):(typeof n=="number"||typeof n=="bigint")&&l!=="body"&&$e(t,""+n);break;case"className":Da(t,"class",n);break;case"tabIndex":Da(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Da(t,e,n);break;case"style":Lf(t,n,u);break;case"data":if(l!=="object"){Da(t,"data",n);break}case"src":case"href":if(n===""&&(l!=="a"||e!=="href")){t.removeAttribute(e);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(e);break}n=Ra(""+n),t.setAttribute(e,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(e==="formAction"?(l!=="input"&&ot(t,l,"name",a.name,a,null),ot(t,l,"formEncType",a.formEncType,a,null),ot(t,l,"formMethod",a.formMethod,a,null),ot(t,l,"formTarget",a.formTarget,a,null)):(ot(t,l,"encType",a.encType,a,null),ot(t,l,"method",a.method,a,null),ot(t,l,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(e);break}n=Ra(""+n),t.setAttribute(e,n);break;case"onClick":n!=null&&(t.onclick=Gl);break;case"onScroll":n!=null&&I("scroll",t);break;case"onScrollEnd":n!=null&&I("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(e=n.__html,e!=null){if(a.children!=null)throw Error(d(60));t.innerHTML=e}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}e=Ra(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(e,""+n):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":n===!0?t.setAttribute(e,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(e,n):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(e,n):t.removeAttribute(e);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(e):t.setAttribute(e,n);break;case"popover":I("beforetoggle",t),I("toggle",t),Oa(t,"popover",n);break;case"xlinkActuate":Rl(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Rl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Rl(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Rl(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Rl(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Rl(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Rl(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Rl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Rl(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Oa(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=tr.get(e)||e,Oa(t,e,n))}}function Vc(t,l,e,n,a,u){switch(e){case"style":Lf(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(e=n.__html,e!=null){if(a.children!=null)throw Error(d(60));t.innerHTML=e}}break;case"children":typeof n=="string"?$e(t,n):(typeof n=="number"||typeof n=="bigint")&&$e(t,""+n);break;case"onScroll":n!=null&&I("scroll",t);break;case"onScrollEnd":n!=null&&I("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Gl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Of.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(a=e.endsWith("Capture"),l=e.slice(2,a?e.length-7:void 0),u=t[Kt]||null,u=u!=null?u[e]:null,typeof u=="function"&&t.removeEventListener(l,u,a),typeof n=="function")){typeof u!="function"&&u!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(l,n,a);break t}e in t?t[e]=n:n===!0?t.setAttribute(e,""):Oa(t,e,n)}}}function Bt(t,l,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":I("error",t),I("load",t);var n=!1,a=!1,u;for(u in e)if(e.hasOwnProperty(u)){var i=e[u];if(i!=null)switch(u){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,l));default:ot(t,l,u,i,e,null)}}a&&ot(t,l,"srcSet",e.srcSet,e,null),n&&ot(t,l,"src",e.src,e,null);return;case"input":I("invalid",t);var c=u=i=a=null,f=null,y=null;for(n in e)if(e.hasOwnProperty(n)){var b=e[n];if(b!=null)switch(n){case"name":a=b;break;case"type":i=b;break;case"checked":f=b;break;case"defaultChecked":y=b;break;case"value":u=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,l));break;default:ot(t,l,n,b,e,null)}}Hf(t,u,c,f,y,i,a,!1);return;case"select":I("invalid",t),n=i=u=null;for(a in e)if(e.hasOwnProperty(a)&&(c=e[a],c!=null))switch(a){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":n=c;default:ot(t,l,a,c,e,null)}l=u,e=i,t.multiple=!!n,l!=null?We(t,!!n,l,!1):e!=null&&We(t,!!n,e,!0);return;case"textarea":I("invalid",t),u=a=n=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":n=c;break;case"defaultValue":a=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:ot(t,l,i,c,e,null)}qf(t,n,a,u);return;case"option":for(f in e)if(e.hasOwnProperty(f)&&(n=e[f],n!=null))switch(f){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ot(t,l,f,n,e,null)}return;case"dialog":I("beforetoggle",t),I("toggle",t),I("cancel",t),I("close",t);break;case"iframe":case"object":I("load",t);break;case"video":case"audio":for(n=0;n<ha.length;n++)I(ha[n],t);break;case"image":I("error",t),I("load",t);break;case"details":I("toggle",t);break;case"embed":case"source":case"link":I("error",t),I("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in e)if(e.hasOwnProperty(y)&&(n=e[y],n!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,l));default:ot(t,l,y,n,e,null)}return;default:if(ai(l)){for(b in e)e.hasOwnProperty(b)&&(n=e[b],n!==void 0&&Vc(t,l,b,n,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(n=e[c],n!=null&&ot(t,l,c,n,e,null))}function Mm(t,l,e,n){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,c=null,f=null,y=null,b=null;for(g in e){var x=e[g];if(e.hasOwnProperty(g)&&x!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":f=x;default:n.hasOwnProperty(g)||ot(t,l,g,null,n,x)}}for(var v in n){var g=n[v];if(x=e[v],n.hasOwnProperty(v)&&(g!=null||x!=null))switch(v){case"type":u=g;break;case"name":a=g;break;case"checked":y=g;break;case"defaultChecked":b=g;break;case"value":i=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,l));break;default:g!==x&&ot(t,l,v,g,n,x)}}ei(t,i,c,f,y,b,u,a);return;case"select":g=i=c=v=null;for(u in e)if(f=e[u],e.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":g=f;default:n.hasOwnProperty(u)||ot(t,l,u,null,n,f)}for(a in n)if(u=n[a],f=e[a],n.hasOwnProperty(a)&&(u!=null||f!=null))switch(a){case"value":v=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==f&&ot(t,l,a,u,n,f)}l=c,e=i,n=g,v!=null?We(t,!!e,v,!1):!!n!=!!e&&(l!=null?We(t,!!e,l,!0):We(t,!!e,e?[]:"",!1));return;case"textarea":g=v=null;for(c in e)if(a=e[c],e.hasOwnProperty(c)&&a!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ot(t,l,c,null,n,a)}for(i in n)if(a=n[i],u=e[i],n.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":v=a;break;case"defaultValue":g=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(d(91));break;default:a!==u&&ot(t,l,i,a,n,u)}Bf(t,v,g);return;case"option":for(var O in e)if(v=e[O],e.hasOwnProperty(O)&&v!=null&&!n.hasOwnProperty(O))switch(O){case"selected":t.selected=!1;break;default:ot(t,l,O,null,n,v)}for(f in n)if(v=n[f],g=e[f],n.hasOwnProperty(f)&&v!==g&&(v!=null||g!=null))switch(f){case"selected":t.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:ot(t,l,f,v,n,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in e)v=e[B],e.hasOwnProperty(B)&&v!=null&&!n.hasOwnProperty(B)&&ot(t,l,B,null,n,v);for(y in n)if(v=n[y],g=e[y],n.hasOwnProperty(y)&&v!==g&&(v!=null||g!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,l));break;default:ot(t,l,y,v,n,g)}return;default:if(ai(l)){for(var dt in e)v=e[dt],e.hasOwnProperty(dt)&&v!==void 0&&!n.hasOwnProperty(dt)&&Vc(t,l,dt,void 0,n,v);for(b in n)v=n[b],g=e[b],!n.hasOwnProperty(b)||v===g||v===void 0&&g===void 0||Vc(t,l,b,v,n,g);return}}for(var m in e)v=e[m],e.hasOwnProperty(m)&&v!=null&&!n.hasOwnProperty(m)&&ot(t,l,m,null,n,v);for(x in n)v=n[x],g=e[x],!n.hasOwnProperty(x)||v===g||v==null&&g==null||ot(t,l,x,v,n,g)}function Qd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _m(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,e=performance.getEntriesByType("resource"),n=0;n<e.length;n++){var a=e[n],u=a.transferSize,i=a.initiatorType,c=a.duration;if(u&&c&&Qd(i)){for(i=0,c=a.responseEnd,n+=1;n<e.length;n++){var f=e[n],y=f.startTime;if(y>c)break;var b=f.transferSize,x=f.initiatorType;b&&Qd(x)&&(f=f.responseEnd,i+=b*(f<c?1:(c-y)/(f-y)))}if(--n,l+=8*(u+i)/(a.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wc=null,Kc=null;function Cu(t){return t.nodeType===9?t:t.ownerDocument}function Zd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vd(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function Jc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var kc=null;function Cm(){var t=window.event;return t&&t.type==="popstate"?t===kc?!1:(kc=t,!0):(kc=null,!1)}var wd=typeof setTimeout=="function"?setTimeout:void 0,jm=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,Om=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(t){return Kd.resolve(null).then(t).catch(Dm)}:wd;function Dm(t){setTimeout(function(){throw t})}function be(t){return t==="head"}function Jd(t,l){var e=l,n=0;do{var a=e.nextSibling;if(t.removeChild(e),a&&a.nodeType===8)if(e=a.data,e==="/$"||e==="/&"){if(n===0){t.removeChild(a),Cn(l);return}n--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")n++;else if(e==="html")va(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,va(e);for(var u=e.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Rn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||e.removeChild(u),u=i}}else e==="body"&&va(t.ownerDocument.body);e=a}while(e);Cn(l)}function kd(t,l){var e=t;t=0;do{var n=e.nextSibling;if(e.nodeType===1?l?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(l?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),n&&n.nodeType===8)if(e=n.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=n}while(e)}function Ic(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var e=l;switch(l=l.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Ic(e),ti(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function Um(t,l,e,n){for(;t.nodeType===1;){var a=e;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Rn])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=gl(t.nextSibling),t===null)break}return null}function Rm(t,l,e){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=gl(t.nextSibling),t===null))return null;return t}function Id(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=gl(t.nextSibling),t===null))return null;return t}function Wc(t){return t.data==="$?"||t.data==="$~"}function $c(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Gm(t,l){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||e.readyState!=="loading")l();else{var n=function(){l(),e.removeEventListener("DOMContentLoaded",n)};e.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function gl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var Fc=null;function Wd(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(l===0)return gl(t.nextSibling);l--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||l++}t=t.nextSibling}return null}function $d(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(l===0)return t;l--}else e!=="/$"&&e!=="/&"||l++}t=t.previousSibling}return null}function Fd(t,l,e){switch(l=Cu(e),t){case"html":if(t=l.documentElement,!t)throw Error(d(452));return t;case"head":if(t=l.head,!t)throw Error(d(453));return t;case"body":if(t=l.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function va(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ti(t)}var bl=new Map,Pd=new Set;function ju(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $l=N.d;N.d={f:Hm,r:Bm,D:qm,C:Ym,L:Lm,m:Xm,X:Zm,S:Qm,M:Vm};function Hm(){var t=$l.f(),l=xu();return t||l}function Bm(t){var l=Je(t);l!==null&&l.tag===5&&l.type==="form"?vo(l):$l.r(t)}var Nn=typeof document>"u"?null:document;function t0(t,l,e){var n=Nn;if(n&&typeof l=="string"&&l){var a=ol(l);a='link[rel="'+t+'"][href="'+a+'"]',typeof e=="string"&&(a+='[crossorigin="'+e+'"]'),Pd.has(a)||(Pd.add(a),t={rel:t,crossOrigin:e,href:l},n.querySelector(a)===null&&(l=n.createElement("link"),Bt(l,"link",t),jt(l),n.head.appendChild(l)))}}function qm(t){$l.D(t),t0("dns-prefetch",t,null)}function Ym(t,l){$l.C(t,l),t0("preconnect",t,l)}function Lm(t,l,e){$l.L(t,l,e);var n=Nn;if(n&&t&&l){var a='link[rel="preload"][as="'+ol(l)+'"]';l==="image"&&e&&e.imageSrcSet?(a+='[imagesrcset="'+ol(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(a+='[imagesizes="'+ol(e.imageSizes)+'"]')):a+='[href="'+ol(t)+'"]';var u=a;switch(l){case"style":u=Mn(t);break;case"script":u=_n(t)}bl.has(u)||(t=H({rel:"preload",href:l==="image"&&e&&e.imageSrcSet?void 0:t,as:l},e),bl.set(u,t),n.querySelector(a)!==null||l==="style"&&n.querySelector(ga(u))||l==="script"&&n.querySelector(ba(u))||(l=n.createElement("link"),Bt(l,"link",t),jt(l),n.head.appendChild(l)))}}function Xm(t,l){$l.m(t,l);var e=Nn;if(e&&t){var n=l&&typeof l.as=="string"?l.as:"script",a='link[rel="modulepreload"][as="'+ol(n)+'"][href="'+ol(t)+'"]',u=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=_n(t)}if(!bl.has(u)&&(t=H({rel:"modulepreload",href:t},l),bl.set(u,t),e.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(ba(u)))return}n=e.createElement("link"),Bt(n,"link",t),jt(n),e.head.appendChild(n)}}}function Qm(t,l,e){$l.S(t,l,e);var n=Nn;if(n&&t){var a=ke(n).hoistableStyles,u=Mn(t);l=l||"default";var i=a.get(u);if(!i){var c={loading:0,preload:null};if(i=n.querySelector(ga(u)))c.loading=5;else{t=H({rel:"stylesheet",href:t,"data-precedence":l},e),(e=bl.get(u))&&Pc(t,e);var f=i=n.createElement("link");jt(f),Bt(f,"link",t),f._p=new Promise(function(y,b){f.onload=y,f.onerror=b}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ou(i,l,n)}i={type:"stylesheet",instance:i,count:1,state:c},a.set(u,i)}}}function Zm(t,l){$l.X(t,l);var e=Nn;if(e&&t){var n=ke(e).hoistableScripts,a=_n(t),u=n.get(a);u||(u=e.querySelector(ba(a)),u||(t=H({src:t,async:!0},l),(l=bl.get(a))&&tf(t,l),u=e.createElement("script"),jt(u),Bt(u,"link",t),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Vm(t,l){$l.M(t,l);var e=Nn;if(e&&t){var n=ke(e).hoistableScripts,a=_n(t),u=n.get(a);u||(u=e.querySelector(ba(a)),u||(t=H({src:t,async:!0,type:"module"},l),(l=bl.get(a))&&tf(t,l),u=e.createElement("script"),jt(u),Bt(u,"link",t),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function l0(t,l,e,n){var a=(a=J.current)?ju(a):null;if(!a)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(l=Mn(e.href),e=ke(a).hoistableStyles,n=e.get(l),n||(n={type:"style",instance:null,count:0,state:null},e.set(l,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Mn(e.href);var u=ke(a).hoistableStyles,i=u.get(t);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=a.querySelector(ga(t)))&&!u._p&&(i.instance=u,i.state.loading=5),bl.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},bl.set(t,e),u||wm(a,t,e,i.state))),l&&n===null)throw Error(d(528,""));return i}if(l&&n!==null)throw Error(d(529,""));return null;case"script":return l=e.async,e=e.src,typeof e=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=_n(e),e=ke(a).hoistableScripts,n=e.get(l),n||(n={type:"script",instance:null,count:0,state:null},e.set(l,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function Mn(t){return'href="'+ol(t)+'"'}function ga(t){return'link[rel="stylesheet"]['+t+"]"}function e0(t){return H({},t,{"data-precedence":t.precedence,precedence:null})}function wm(t,l,e,n){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?n.loading=1:(l=t.createElement("link"),n.preload=l,l.addEventListener("load",function(){return n.loading|=1}),l.addEventListener("error",function(){return n.loading|=2}),Bt(l,"link",e),jt(l),t.head.appendChild(l))}function _n(t){return'[src="'+ol(t)+'"]'}function ba(t){return"script[async]"+t}function n0(t,l,e){if(l.count++,l.instance===null)switch(l.type){case"style":var n=t.querySelector('style[data-href~="'+ol(e.href)+'"]');if(n)return l.instance=n,jt(n),n;var a=H({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),jt(n),Bt(n,"style",a),Ou(n,e.precedence,t),l.instance=n;case"stylesheet":a=Mn(e.href);var u=t.querySelector(ga(a));if(u)return l.state.loading|=4,l.instance=u,jt(u),u;n=e0(e),(a=bl.get(a))&&Pc(n,a),u=(t.ownerDocument||t).createElement("link"),jt(u);var i=u;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Bt(u,"link",n),l.state.loading|=4,Ou(u,e.precedence,t),l.instance=u;case"script":return u=_n(e.src),(a=t.querySelector(ba(u)))?(l.instance=a,jt(a),a):(n=e,(a=bl.get(u))&&(n=H({},e),tf(n,a)),t=t.ownerDocument||t,a=t.createElement("script"),jt(a),Bt(a,"link",n),t.head.appendChild(a),l.instance=a);case"void":return null;default:throw Error(d(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(n=l.instance,l.state.loading|=4,Ou(n,e.precedence,t));return l.instance}function Ou(t,l,e){for(var n=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,u=a,i=0;i<n.length;i++){var c=n[i];if(c.dataset.precedence===l)u=c;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(l=e.nodeType===9?e.head:e,l.insertBefore(t,l.firstChild))}function Pc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function tf(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var Du=null;function a0(t,l,e){if(Du===null){var n=new Map,a=Du=new Map;a.set(e,n)}else a=Du,n=a.get(e),n||(n=new Map,a.set(e,n));if(n.has(t))return n;for(n.set(t,null),e=e.getElementsByTagName(t),a=0;a<e.length;a++){var u=e[a];if(!(u[Rn]||u[Ut]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(l)||"";i=t+i;var c=n.get(i);c?c.push(u):n.set(i,[u])}}return n}function u0(t,l,e){t=t.ownerDocument||t,t.head.insertBefore(e,l==="title"?t.querySelector("head > title"):null)}function Km(t,l,e){if(e===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;switch(l.rel){case"stylesheet":return t=l.disabled,typeof l.precedence=="string"&&t==null;default:return!0}case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function i0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Jm(t,l,e,n){if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=Mn(n.href),u=l.querySelector(ga(a));if(u){l=u._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=Uu.bind(t),l.then(t,t)),e.state.loading|=4,e.instance=u,jt(u);return}u=l.ownerDocument||l,n=e0(n),(a=bl.get(a))&&Pc(n,a),u=u.createElement("link"),jt(u);var i=u;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Bt(u,"link",n),e.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,l),(l=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=Uu.bind(t),l.addEventListener("load",e),l.addEventListener("error",e))}}var lf=0;function km(t,l){return t.stylesheets&&t.count===0&&Gu(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var n=setTimeout(function(){if(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+l);0<t.imgBytes&&lf===0&&(lf=62500*_m());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>lf?50:800)+l);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function Uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ru=null;function Gu(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ru=new Map,l.forEach(Im,t),Ru=null,Uu.call(t))}function Im(t,l){if(!(l.state.loading&4)){var e=Ru.get(t);if(e)var n=e.get(null);else{e=new Map,Ru.set(t,e);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),n=i)}n&&e.set(null,n)}a=l.instance,i=a.getAttribute("data-precedence"),u=e.get(i)||n,u===n&&e.set(null,a),e.set(i,a),this.count++,n=Uu.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),l.state.loading|=4}}var pa={$$typeof:ct,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Wm(t,l,e,n,a,u,i,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wu(0),this.hiddenUpdates=Wu(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function c0(t,l,e,n,a,u,i,c,f,y,b,x){return t=new Wm(t,l,e,i,f,y,b,x,c),l=1,u===!0&&(l|=24),u=nl(3,null,null,l),t.current=u,u.stateNode=t,l=Ri(),l.refCount++,t.pooledCache=l,l.refCount++,u.memoizedState={element:n,isDehydrated:e,cache:l},qi(u),t}function f0(t){return t?(t=an,t):an}function s0(t,l,e,n,a,u){a=f0(a),n.context===null?n.context=a:n.pendingContext=a,n=ce(l),n.payload={element:e},u=u===void 0?null:u,u!==null&&(n.callback=u),e=fe(t,n,l),e!==null&&(Ft(e,t,l),$n(e,t,l))}function o0(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<l?e:l}}function ef(t,l){o0(t,l),(t=t.alternate)&&o0(t,l)}function d0(t){if(t.tag===13||t.tag===31){var l=Oe(t,67108864);l!==null&&Ft(l,t,67108864),ef(t,67108864)}}function r0(t){if(t.tag===13||t.tag===31){var l=fl();l=$u(l);var e=Oe(t,l);e!==null&&Ft(e,t,l),ef(t,l)}}var Hu=!0;function $m(t,l,e,n){var a=p.T;p.T=null;var u=N.p;try{N.p=2,nf(t,l,e,n)}finally{N.p=u,p.T=a}}function Fm(t,l,e,n){var a=p.T;p.T=null;var u=N.p;try{N.p=8,nf(t,l,e,n)}finally{N.p=u,p.T=a}}function nf(t,l,e,n){if(Hu){var a=af(n);if(a===null)Zc(t,l,n,Bu,e),h0(t,n);else if(t1(a,t,l,e,n))n.stopPropagation();else if(h0(t,n),l&4&&-1<Pm.indexOf(t)){for(;a!==null;){var u=Je(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Ne(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-ll(i);c.entanglements[1]|=f,i&=~f}Dl(u),(nt&6)===0&&(pu=Pt()+500,ma(0))}}break;case 31:case 13:c=Oe(u,2),c!==null&&Ft(c,u,2),xu(),ef(u,2)}if(u=af(n),u===null&&Zc(t,l,n,Bu,e),u===a)break;a=u}a!==null&&n.stopPropagation()}else Zc(t,l,n,null,e)}}function af(t){return t=ii(t),uf(t)}var Bu=null;function uf(t){if(Bu=null,t=Ke(t),t!==null){var l=D(t);if(l===null)t=null;else{var e=l.tag;if(e===13){if(t=w(l),t!==null)return t;t=null}else if(e===31){if(t=K(l),t!==null)return t;t=null}else if(e===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return Bu=t,null}function m0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q0()){case Af:return 2;case xf:return 8;case Na:case Y0:return 32;case Sf:return 268435456;default:return 32}default:return 32}}var cf=!1,pe=null,Ae=null,xe=null,Aa=new Map,xa=new Map,Se=[],Pm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h0(t,l){switch(t){case"focusin":case"focusout":pe=null;break;case"dragenter":case"dragleave":Ae=null;break;case"mouseover":case"mouseout":xe=null;break;case"pointerover":case"pointerout":Aa.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(l.pointerId)}}function Sa(t,l,e,n,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:l,domEventName:e,eventSystemFlags:n,nativeEvent:u,targetContainers:[a]},l!==null&&(l=Je(l),l!==null&&d0(l)),t):(t.eventSystemFlags|=n,l=t.targetContainers,a!==null&&l.indexOf(a)===-1&&l.push(a),t)}function t1(t,l,e,n,a){switch(l){case"focusin":return pe=Sa(pe,t,l,e,n,a),!0;case"dragenter":return Ae=Sa(Ae,t,l,e,n,a),!0;case"mouseover":return xe=Sa(xe,t,l,e,n,a),!0;case"pointerover":var u=a.pointerId;return Aa.set(u,Sa(Aa.get(u)||null,t,l,e,n,a)),!0;case"gotpointercapture":return u=a.pointerId,xa.set(u,Sa(xa.get(u)||null,t,l,e,n,a)),!0}return!1}function y0(t){var l=Ke(t.target);if(l!==null){var e=D(l);if(e!==null){if(l=e.tag,l===13){if(l=w(e),l!==null){t.blockedOn=l,_f(t.priority,function(){r0(e)});return}}else if(l===31){if(l=K(e),l!==null){t.blockedOn=l,_f(t.priority,function(){r0(e)});return}}else if(l===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qu(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var e=af(t.nativeEvent);if(e===null){e=t.nativeEvent;var n=new e.constructor(e.type,e);ui=n,e.target.dispatchEvent(n),ui=null}else return l=Je(e),l!==null&&d0(l),t.blockedOn=e,!1;l.shift()}return!0}function v0(t,l,e){qu(t)&&e.delete(l)}function l1(){cf=!1,pe!==null&&qu(pe)&&(pe=null),Ae!==null&&qu(Ae)&&(Ae=null),xe!==null&&qu(xe)&&(xe=null),Aa.forEach(v0),xa.forEach(v0)}function Yu(t,l){t.blockedOn===l&&(t.blockedOn=null,cf||(cf=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,l1)))}var Lu=null;function g0(t){Lu!==t&&(Lu=t,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Lu===t&&(Lu=null);for(var l=0;l<t.length;l+=3){var e=t[l],n=t[l+1],a=t[l+2];if(typeof n!="function"){if(uf(n||e)===null)continue;break}var u=Je(e);u!==null&&(t.splice(l,3),l-=3,ac(u,{pending:!0,data:a,method:e.method,action:n},n,a))}}))}function Cn(t){function l(f){return Yu(f,t)}pe!==null&&Yu(pe,t),Ae!==null&&Yu(Ae,t),xe!==null&&Yu(xe,t),Aa.forEach(l),xa.forEach(l);for(var e=0;e<Se.length;e++){var n=Se[e];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Se.length&&(e=Se[0],e.blockedOn===null);)y0(e),e.blockedOn===null&&Se.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(n=0;n<e.length;n+=3){var a=e[n],u=e[n+1],i=a[Kt]||null;if(typeof u=="function")i||g0(e);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[Kt]||null)c=i.formAction;else if(uf(a)!==null)continue}else c=i.action;typeof c=="function"?e[n+1]=c:(e.splice(n,3),n-=3),g0(e)}}}function b0(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function l(){a!==null&&(a(),a=null),n||setTimeout(e,20)}function e(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(e,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),a!==null&&(a(),a=null)}}}function ff(t){this._internalRoot=t}Xu.prototype.render=ff.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(d(409));var e=l.current,n=fl();s0(e,n,t,l,null,null)},Xu.prototype.unmount=ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;s0(t.current,2,null,t,null,null),xu(),l[we]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var l=Mf();t={blockedOn:null,target:t,priority:l};for(var e=0;e<Se.length&&l!==0&&l<Se[e].priority;e++);Se.splice(e,0,t),e===0&&y0(t)}};var p0=j.version;if(p0!=="19.2.3")throw Error(d(527,p0,"19.2.3"));N.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=S(l),t=t!==null?q(t):null,t=t===null?null:t.stateNode,t};var e1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:p,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{On=Qu.inject(e1),tl=Qu}catch{}}return za.createRoot=function(t,l){if(!C(t))throw Error(d(299));var e=!1,n="",a=No,u=Mo,i=_o;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(a=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(i=l.onRecoverableError)),l=c0(t,1,!1,null,null,e,n,null,a,u,i,b0),t[we]=l.current,Qc(t),new ff(l)},za.hydrateRoot=function(t,l,e){if(!C(t))throw Error(d(299));var n=!1,a="",u=No,i=Mo,c=_o,f=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),l=c0(t,1,!0,l,e??null,n,a,f,u,i,c,b0),l.context=f0(null),e=l.current,n=fl(),n=$u(n),a=ce(n),a.callback=null,fe(e,a,n),e=n,l.current.lanes=e,Un(l,e),Dl(l),t[we]=l.current,Qc(t),new Xu(l)},za.version="19.2.3",za}var C0;function r1(){if(C0)return df.exports;C0=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(j){console.error(j)}}return z(),df.exports=d1(),df.exports}var m1=r1();const El={title:"把 AI 用對的提示技巧：從提問、推理到工作應用",subtitle:"課程全長約 2.5 小時 | 涵蓋 Agent、Vibe Coding 與自動化工作流 | 打造你的 AI 數位職能",targetAudience:"希望建立 AI 工作流的白領上班族、PM、行銷、人資，以及想掌握 Agent 趨勢的管理者",chapters:[{id:"ch1",title:"章節一｜核心語法：Prompt 的結構化溝通術",description:"從與 AI 的溝通演進開始，掌握 R/T/F 框架與五大原則，學會如何精準下指令。",units:[{id:"1-1",title:"單元 1-1｜Prompt 的結構化框架：角色、任務、格式",objectives:["理解 R / T / F（角色 / 任務 / 格式）是寫 Prompt 的基本骨架","掌握 2022 至 2025 的 Prompt 演進與未來的 Agent 趨勢","至少完成 1～2 個「自己工作情境」的 R/T/F 範本"],flow:[{title:"1. Prompt 的演進：從咒語時代到代理人時代",content:`了解歷史，你才知道為什麼我們現在「這樣寫」。

## 2023：咒語時代
在 GPT-3.5 剛爆紅時，大家流行背誦複雜的「魔法指令」。當時 AI 比較笨，需要很多小撇步（例如：請一步一步思考、如果你做錯我會懲罰你）來繞過它的邏輯缺陷。

## 2024-2025：對話與推理時代
隨著模型變聰明（Gemini 1.5 Pro, GPT-4o, o1），AI 已經能理解複雜邏輯。重點不再是背咒語，而是**「清晰的結構化溝通」**。就像跟一位聰明的實習生交辦事項，邏輯越清楚，效果越好。

## 2026 預測：代理人 (Agent) 時代
未來的 AI 不只是「說話」，還會「做事」。
• **主動性**：AI 不只是變動回答，它會主動幫你操作瀏覽器、訂票、寫信。
• **工具使用**：未來的重點是「如何定義目標」與「如何授權」，而不是糾結於文字修辭。`},{title:"2. 工欲善其事：ChatGPT 與 Gemini 介面導覽",content:`# 🔵 ChatGPT (OpenAI)
• **Canvas (畫布模式)**：寫長文章或寫程式時的神器。它會開啟右側視窗，你可以直接反白某一段文字，要求「這段幫我加註解」或「這裡語氣改委婉」，不用每次都重新生成整篇文章。
• **Search (搜尋功能)**：現在 ChatGPT 可以聯網搜尋最新的股票、天氣與新聞，並附上引用來源，變成了更強的搜尋引擎。
• **Advanced Voice Mode (進階語音)**：極低延遲的語音對話，能聽出你的情緒，很適合用來練習英文口說或模擬面試。

# 🌟 Gemini (Google)
• **Workspace 整合**：上班族最強功能。你可以在 Gemini 裡直接 @Google Drive, @Docs, @Gmail。例如：「@Gmail 幫我找上週來自 HR 的信，並整理成重點」。
• **Gemini Live (即時互動)**：這不只是語音，更是「視覺」互動。打開手機鏡頭對著壞掉的腳踏車鍊條，問它「這怎麼修？」，它能即時看著畫面指導你。
• **Grounding (查證按鈕)**：回覆下方有「G」圖示，按下去會進行 Google 搜尋比對。綠色代表有來源支持，橘色代表可能是 AI 幻覺，這對工作求證非常重要。`},{title:"3. 為什麼 AI 聽不懂人話？(LLM 原理)",content:`大家最常犯的錯，就是把 AI 當成搜尋引擎。
它本質上是一個**「預測引擎」**。

它不是在「回答問題」，而是在**「預測下一個字機率最高的是什麼」**。
• 如果你的 Prompt 寫「蘋果」，它預測下一字可能是「手機」或「水果」。
• 如果你寫「紅色的富士蘋果」，它的預測範圍只是縮小了。

所以，Prompt Engineering 的本質，就是透過文字**「限縮預測的可能性」**。`},{title:"4. 關鍵參數：Temperature (創意參數)",content:`還記得電影《星際效應》嗎？主角 Cooper 調整機器人 TARS 的幽默與誠實度設定。

在 AI 世界裡，我們真的有這個參數，叫做 **Temperature**。

## Temperature (0 ~ 1)
• **設定為 0 (低)**：AI 會變成嚴肅的機器人。每次回答都一樣，精準、無聊。**適合：程式除錯、資料提取、數學題。**
• **設定為 1 (高)**：AI 會變成充滿創意的詩人。回答多變、甚至會產生幻覺（胡說八道）。**適合：寫小說、發想行銷點目。**

## 哪裡可以設定？
一般的 ChatGPT/Gemini 聊天介面通常把這個藏起來了（預設大約是 0.7）。如果你需要精準控制，請使用 **Google AI Studio** 與 **OpenAI Playground**，這些開發者後台可以讓你手動調整這些參數。`},{title:"5. 結構化框架 (R/T/F) 與任務設計細節",content:`# 1. 什麼是 R / T / F 架構？
這是一切 Prompt 的骨架，缺一不可：
• **角色 (Role)**：賦予 AI 人設。設定「你是一位資深資料分析師」比「你是一個 AI」能產出更專業的回答。
• **任務 (Task)**：核心指令。你要它做什麼？(請見下方詳解)
• **格式 (Format)**：你要的產出形式。是表格？條列？還是一封 Email 草稿？

# 2. 深入解析：任務設計
在 R/T/F 中，最容易失敗的是 Task。請記住這個公式：

**Task = 動詞 + 受詞 + 背景資訊**

• ❌ **模糊指令**：「幫我寫這封信。」（寫給誰？為了什麼？）
• ✅ **精準指令**：「請**撰寫 (動詞)** 一封 **婉拒信 (受詞)**，背景資訊是：**對方是長期合作廠商，但這次報價太高，希望能保留未來議價空間**。」

背景資訊越豐富，AI 就不需要「猜」，幻覺就會越少。`}],prompts:[{title:"❌ 常見模糊指令",content:"幫我寫一篇 AI 的文章",type:"bad"},{title:"✅ DEMO A：內訓課程簡報大綱 (R/T/F)",context:"情境：你是企業內訓講師，要幫新進工程師安排「AI 入門」2 小時課程。",content:`你現在是一位有 5 年企業內訓經驗的「企業培訓講師」(Role)，熟悉台灣科技業工程師的工作情境。
服務對象是「一到三年資歷的新進工程師」，多半對 AI 有聽過，但沒有系統學過。

我需要你協助的任務是 (Task)：
為一堂 2 小時的〈AI 入門與實務應用〉設計課程大綱。

請依照以下格式整理 (Format)：
1. 第一部分：課程目標（3 點）
2. 第二部分：課程章節（3～4 個章節，每個章節說明重點與時間分配）
3. 第三部分：每個章節的簡單活動或討論設計（每章 1 個，貼近台灣職場情境）

回覆請使用自然、口語化的繁體中文，適合放進簡報。`,type:"good"}],outputTask:{description:"請選擇一件你下週需要完成的工作（例如：寫週報、回覆客訴、規劃活動），運用 R/T/F 架構寫出一個完整的 Prompt。",example:`Role: 你是擁有 10 年經驗的數位行銷經理。
Task: 我需要撰寫一份「Q3 社群成效週報」給總經理看。
Context: 本週 IG 互動率下降 10%，但官網導流上升 5%。我們主打的「中秋活動」效果不如預期。
Format: 請用條列式摘要，包含「本週亮點」、「成效檢討」、「下週行動」三個區塊。`}},{id:"1-2",title:"單元 1-2｜示範比說明更有效：Zero-shot 與 Few-shot",objectives:["分辨 Zero-shot 跟 Few-shot 的差別與使用時機","理解原理：為什麼 AI 看範例會比看說明書學得快？","掌握 Few-shot 的「多樣性」設計，避免 AI 變笨"],flow:[{title:"1. 原理：為什麼範例如此強大？",content:`從大型語言模型 (LLM) 原理來看，它是一個「模式識別機器」。

**說明 (Instructions) 是一種「翻譯」**：
當你寫「請用嚴肅的語氣」，AI 必須先理解什麼叫「嚴肅」，然後再嘗試去模仿。這裡面有很大的解讀誤差空間。

**範例 (Examples) 是一種「複製」**：
當你直接貼一段嚴肅的文字給它， AI 會直接分析這段文字的用詞頻率、句型結構，然後**直接複製這個模式**。這就是所謂的「上下文學習」，AI 其實沒有學會新知識，就是當下看懂了你的套路。`},{title:"2. Zero-shot vs Few-shot 使用時機",content:`• **Zero-shot (零樣本)**：直接問。適合通用知識（例如：解釋什麼是生成式 AI、寫一首詩）。因為這些資料訓練庫裡已經有很多了。
• **Few-shot (少樣本)**：給 3~5 個例子. 適合**特定任務或公司內部規範**（例如：將這段文字轉成我們公司的 JSON 格式、模仿老闆的語氣寫信）。這是訓練資料裡沒有的，你必須當場教它。`},{title:"3. 關鍵技巧：範例的「多樣性」",content:`這是一個進階但超重要的觀念。假設你要訓練 AI 回覆客服信件：

**❌ 錯誤的 Few-shot**：
你給了 3 個範例，全部都是「同意退款」。
➡️ **結果**：AI 會以為你的規則是「只要客戶來信，通通退款」。它學到了錯誤的規律。

**✅ 正確的 Few-shot**：
你要給 3 個「不同類型」的範例：
1. 客戶罵人 ➡️ 安撫並補償 (負面案例)
2. 客戶詢問 ➡️ 清楚引導 (中性案例)
3. 客戶稱讚 ➡️ 感謝並推廣 (正面案例)

這樣 AI 才能學會**「判斷邏輯」**，而不只是死記硬背答案。`}],prompts:[{title:"🎯 DEMO 1: Zero-shot (解釋名詞)",content:`你現在是一位擅長把技術講白話的「軟體產品經理」。
用台灣一般辦公室上班族聽得懂的方式，向「客服與行政同仁」說明：什麼是「生成式 AI」。

請控制在 300 字內，並依照以下格式輸出：
1. 一句話重點
2. 三個重點說明
3. 一個貼近台灣職場的實際例子`,type:"demo"},{title:"🎯 DEMO 2: Few-shot (風格模仿)",context:"【上下文學習】讓 AI 直接複製你的寫作模式，而不是用形容詞去猜。",content:`以下是我們公司過去的兩則內部公告範例：
"""
範例 1：各位同仁好，本季的績效考核即將開始... (略)
範例 2：嗨大家，福委會報告，下週五下午有下午茶... (略)
"""

任務：
請用與上述範例「相同的語氣、結構與格式」，幫我寫一則新的公告。
主題：公司 2025 年開始啟動「AI 應用培訓計畫」。
受眾：全體同仁。
目的：讓大家知道未來會有培訓，並請大家填寫需求調查問卷。`,type:"demo"}],outputTask:{description:"請設計一個 Few-shot Prompt，包含至少 2 個範例（最好是一正一反，或不同類型），教導 AI 學習你獨特的「回信風格」或「貼文風格」。",example:`任務：請模仿我的語氣回覆讀者留言.

範例 1 (鼓勵型)：
讀者："文章寫得很棒！"
回覆："太感謝了！如果有幫助到你，歡迎分享給需要的朋友喔！💪"

範例 2 (問題型)：
讀者："這段程式碼好像有錯？"
回覆："哎呀！感謝指正，我晚點確認一下再更新上來。你是卡在哪一行呢？🤔"

Input (新的讀者留言)：
"請問這堂課適合新手嗎？"`}},{id:"1-3",title:"單元 1-3｜寫好 Prompt 的 5 個原則：越具體，越好用",objectives:["使用精準的動詞來驅動 AI","建立一套「寫 Prompt 前的自我檢查表」","掌握新一代模型 (Gemini 3/GPT-5) 的溝通趨勢"],flow:[{title:"1. 動詞大補帖：拒絕模糊指令",content:`AI像專業的執行者，雖然能力很強，但你要給明確指令。請把模糊的動詞換成精準的動詞：

## ❌ NG 模糊動詞
• **處理 (Handle)**：太籠統，是要回信？還是存檔？
• **弄一下 (Fix/Do)**：是要重寫？還是只改錯字？
• **想一想 (Think about)**：太發散， AI 會開始寫散文。

## ✅ 精準動詞 (Google 建議)
• **Summarize (總結)**：把長文變短。
• **Extract (提取)**：從雜亂資料抓出關鍵字。
• **Classify (分類)**：貼上標籤 (如：重要/不重要)。
• **Translate (翻譯)**：不只語言，也可以是「把程式碼轉成虛擬碼」。

## ✅ 進階動詞 (專家建議)
• **Critique (批評)**：請 AI 擔任反對者，找出漏洞。
• **Simulate (模擬)**：請 AI 扮演某個情境。
• **Draft (起草)**：寫第一版草稿。
• **Brainstorm (發想)**：列出多種可能性。`},{title:"2. 五大原則實戰案例解析",content:`每次按下 Enter 前，請用以下案例檢查你的 Prompt：

## 1. 目的
• [Bad] 幫我寫一封信。
• [Good] 幫我寫一封「委婉拒絕客戶殺價，但希望能保留未來合作機會」的信。

## 2. 對象
• [Bad] 解釋量子力學。
• [Good] 用「小學五年級學生」聽得懂的比喻，解釋量子力學。

## 3. 範圍
• [Bad] 給我一些行銷點子。
• [Good] 給我 5 個「低預算」且「一週內能執行」的 IG 行銷點子。
(Tips: 多用「要做什麼」，少用「不要做什麼」).

## 4. 格式
• [Bad] 整理這份資料。
• [Good] 將資料整理成表格，欄位包含：姓名、電話、備註。

## 5. 互動
• [Bad] (直接送出)
• [Good] ...在開始執行前，請先回覆你對任務的理解，並列出 3 個你需要我補充的問題。`},{title:"3. 下一代 Prompting 趨勢 (Gemini 3 / GPT-5)",content:`隨著模型進化到 推理等級（如 o1, Gemini 1.5 Pro），Prompt 的寫法正在從「指揮官」變成「與專家協作」：

• **少一點格式束縛**：對於聰明的模型，過多的限制反而會讓它「變笨」。試著給它更多「思考空間」，例如：「請先分析問題，再決定用什麼格式回答我」，而不是一開始就鎖死格式。
• **多一點目標導向**：以前我們要教 AI How (一步步怎麼做)，未來我們更強調 What (我要什麼成果)，中間的過程讓 AI 自己決定工具。
• **多模態優先**：不要浪費時間描述圖表。直接截圖、錄音丟給它，這會是未來溝通的常態。`}],prompts:[{title:"✅ 5 原則整合：AI 導入建議",context:"運用 Analyze, List, Recommend 等精準動詞。",content:`你現在是一位「數位轉型顧問」(Role)，熟悉台灣中小企業。

【目的】我要準備一份 10 分鐘的簡報，向老闆報告「明年從哪裡開始導入 AI」。
【情境】台灣 B2B 服務業，約 120 人。行銷、人資、業務部都有興趣，但預算有限。

請協助我完成以下任務：
1. Analyze (分析)：適合這三個部門的低成本 AI 應用。
2. List (列出)：3～5 個可以在半年內啟動的場景。
3. Summarize (總結)：預期效益與風險。

【格式要求】
輸出一份簡報大綱，條列式呈現。

【互動】
先不用輸出簡報，請第一步先回覆你理解到的任務，並提出 3 個你需要我補充的小問題。`,type:"good"},{title:"🎯 5 原則練習：精準受眾",context:"同一件事，對不同人說，關鍵在於『換位思考』。",content:`任務：公司決定取消今年的員工旅遊，改發 5000 元獎金。
請幫我撰寫兩封不同語氣的公告信：

1. 對象 A (資深員工)：他們很在意福利縮水。請強調「獎金的靈活性」與「公司對個人的尊重」，語氣要誠實、像朋友。
2. 對象 B (新進實習生)：他們比較在意現金。請強調「即時入帳」與「自由運用」，語氣要輕快、激勵。`,type:"demo"}],outputTask:{description:"請找出一個你過去「失敗」或「覺得 AI 講廢話」的 Prompt，運用 5 大原則（尤其是改用精準動詞與定義受眾）進行優化。",example:`❌ Bad Prompt:
"幫我規劃一個員工旅遊。"

✅ Optimized Prompt:
"Role: 你是專業的活動企劃.
Objective: 規劃一個適合「30-40 歲工程師」的員工旅遊.
Scope: 地點在宜蘭，兩天一夜，預算每人 5000 元. 行程要鬆散，不要爬山，要有溫泉.
Format: 請用表格呈現行程，包含時間、地點、預估花費。"`}}]},{id:"ch2",title:"章節二｜深度推理：引導 AI 的思維鏈與決策",description:"學習運用 CoT 與 ToT 思維模型，讓 AI 進行深度思考、邏輯推理與多視角決策。",units:[{id:"2-1",title:"單元 2-1｜展開式思考：Chain of Thought (CoT)",objectives:["理解 Chain of Thought (CoT) 原理：為什麼「過程」能減少幻覺","Show your work：現代模型 (o1/Gemini 1.5) 的 CoT 應用變化","掌握 Zero-shot 的變體與 Plan-and-Solve 技巧"],flow:[{title:"1. 為什麼「強迫 AI 碎碎念」能變聰明？",content:`LLM 是「單向接龍」的生物，它不能回頭修改前面的字。
如果問題很複雜（例如數學題：23 x 45 + 12），若是 AI 直接跳出答案，它只能「憑直覺猜」，很容易錯。

**思維鏈 (Chain of Thought, CoT)** 的原理是：
透過產出中間步驟，例如「先算 23x45=1035，再算 1035+12...」。
這些中間生成的文字，會變成**「短期記憶」**幫助 AI 在推導最後答案時有依據。這就就像人類算數學需要計算紙一樣。`},{title:"2. 現代觀點：看得見的思考過程",content:`到了 2025 年，像 **OpenAI o1** 或 **Gemini 1.5 Pro** 這類「推理模型」，它們內部已經內建了 CoT。

**介面長什麼樣？**
• **ChatGPT (o1)**：回答上方會出現一個灰色的 **「Thinking (思考中)」** 下拉選單。點開來，你會看到 AI 自言自語：「我應該先查證這個法規...不對，應該先看判例...」。
• **Gemini**：雖然預設隱藏，但你可以透過 **「查看草稿」** 或要求它列出思考步驟，來檢視它的邏輯路徑。

**為什麼還要自己寫 Prompt？**
透過顯式的 CoT 指令，你可以「控制」它的思考路徑，例如規定它「先分析成本，再分析效益」，而不只是讓它自由發揮。`},{title:"3. Zero-shot 為什麼叫 Zero？還有哪些招式？",content:`• **Zero-shot**：代表「零樣本」。你沒有給它任何參考答案，只靠一句咒語讓它覺醒。
• **Plan-and-Solve (計畫並執行)**：這是 Zero-shot CoT 的進化版。指令是：**「先制定一個計畫，然後再執行它。」** 
這比單純的「一步一步想」更強，因為它強迫 AI 先有全局視野，再進入細節。`},{title:"4. 未來趨勢：會「自我進化」的 AI",content:`我們正從單純的「思維鏈 (CoT)」邁向**「持續演化」**。

## 📄 最新論文：Evo-Memory (2025)
Google DeepMind 提出了一種新架構，讓 AI 能夠**「自主升級」**，而不只是重複執行錯誤：

1. **執行與反思**：AI 執行任務後，會根據結果（成功或失敗）進行檢討。
2. **更新記憶**：它會把「這次做對的技巧」或「做錯的教訓」，寫入長期的 Evo-Memory 中。
3. **自主進步**：下次遇到類似任務時，它會調用這份「優化過的記憶」，而不從零開始。

**💡 對我們的啟發**
這告訴我們，未來的 Prompt Engineering 不只是寫完就算了，是要設計一個**「回饋機制」**。例如要求 AI：「執行完後，請列出這次執行的 3 個優點與 1 個缺點，並記住它以便下次改進。」讓 AI 從重複錯誤的機器，變成會寫 SOP 的專家。`}],prompts:[{title:"🤝 反思夥伴 (Reflection)",context:"這招能讓模型自我糾錯，大幅提升品質。",content:`任務：請幫我撰寫一篇推廣「線上英文課程」的行銷 Email。

【第一步：撰寫】
請先根據一般行銷邏輯，寫出第一版草稿。

【第二步：反思 (Reflection)】
請扮演一位「挑剔的資深文案總監」，針對第一版草稿提出 3 個批評 (Critique)。例如：標題不夠吸引人？Call to Action 不清楚？

【第三步：優化】
根據上述的批評，重新撰寫第二版更完美的 Email。`,type:"good"},{title:"🧠 Plan-and-Solve (比 CoT 更進階)",context:"強迫 AI 先宏觀規劃，再微觀執行。",content:`任務：規劃一場 500 人的公司尾牙。

請依照「Plan-and-Solve」模式進行：
1. 【Plan】：先列出舉辦尾牙需要的 5 大關鍵模組（如場地、餐飲...）。
2. 【Solve】：針對每個模組，分別提出 3 個具體的執行建議與預算預估。

注意：請確保所有建議都符合「年輕化、活潑」的主題。`,type:"structure"},{title:"🧠 CoT 經典應用：邏輯推理",context:"Zero-shot CoT，一句話觸發推理。",content:`Q: 停車場有 3 輛紅車，藍車是紅車的 2 倍少 1 輛，白車是藍車與紅車總和的 3 倍。請問停車場共有幾輛車？

A: Let's think step by step. (讓我們一步一步思考)`,type:"demo"}],outputTask:{description:"請運用 Plan-and-Solve 技巧，處理一個你需要邏輯推演的任務（如：估算專案時程、規劃行銷預算）。",example:`Prompt:
"我需要估算開發一個『內部請假系統』App 大約需要多少工時。
請使用 Plan-and-Solve 策略：

1. [Plan]: 先列出開發這個 App 必備的 4 個核心功能模組。
2. [Solve]: 針對每個模組，以『資深工程師』的角度估算所需的開發天數，並說明理由。
3. [Summarize]: 加總並加上 20% 的緩衝時間 (Buffer)，告訴我總時程預估。"`}},{id:"2-2",title:"單元 2-2｜七大提問技巧：Step-back & 組合技",objectives:["Step-back Prompting：跳脫細節的策略思考","掌握 7 種提問框架並學會「組合使用」","學會「追問與質疑」，不被 AI 的第一版回答呼嚨"],flow:[{title:"1. Step-back Prompting：抽象化思維",content:`當你卡在細節無法解決時，試著拉高層次。Step-back 的本質是運用**「抽象化思維」**來輔助思考與評估。

這不是老派的「先看森林」，而是**「升維思考，降維打擊」**。

**運作機制**：
1. **具體問題**：我該怎麼寫這個 Python 腳本？
2. **抽象原理**：寫出好維護的腳本有哪些設計模式？
3. **具體解法**：好，請用 Factory Pattern 重構我的腳本。

**現代案例：App 用戶留存**
• ❌ **直接問**：「用戶一直流失怎麼辦？」(AI 給出通用的廢話)
• ✅ **Step-back**：「請介紹關於『養成習慣』的經典行為心理學模型，如 Hook Model。」(找出底層邏輯)
• ✅ **應用**：「請用 Hook Model 的四個階段，分析我的 App 流程缺失。」`},{title:"2. 七大技巧實戰速查 (雙情境範例)",content:`以下是 7 種最常用的提問方式，每個技巧都附上不同情境的用法：

**1. Clarify (澄清)**：
• [管理] 專案定義：「在你開始規劃前，請先告訴我你對『數位轉型』的定義是什麼？」
• [執行]範圍確認：「請列出你認為這個任務『不做什麼』(Out of Scope)？」

**2. Compare (比較)**：
• [決議] 方案選擇：「請比較 A 方案與 B 方案的『隱藏成本』。」
• [評估] 效益評估：「請比較『短期快速上線』與『長期系統穩定』的優缺點。」

**3. Structure (結構化)**：
• [邏輯] 邏輯窮盡：「請用 MECE (完全窮盡、互不包含) 架構列出所有可能性。」
• [流程] 時間順序：「請依照『事前準備、事中執行、事後檢討』的三階段來規劃。」

**4. Reverse (反向思考)**：
• [避險] 預想失敗：「假設一年後這個專案徹底失敗了，請列出 5 個最可能導致失敗的原因。」
• [辯證] 魔鬼代言人：「請扮演反對者，針對我的提案提出最尖銳的 3 個質疑。」

**5. Example (舉例)**：
• [創意] 跨界借鏡：「請給我 3 個『非科技業』但成功轉型的案例。」
• [借鑑] 歷史為鑑：「過去有哪些類似的產品上市失敗的案例？我們能學到什麼？」

**6. Role Play (角色扮演)**：
• **設定細節**：不只要給職稱，更是要設定**個性**、**語氣** 與**盲點**。
• [模擬面試]：「你現在是 Google 的資深面試官，請用嚴格但建設性的態度，針對我的履歷進行壓力面試。」

**7. Constraint (限制)**：
• [創意] 強制聯想：「請用『三國演義』的人物關係來解釋『區塊鏈』。」
• [精簡] 字數限制：「請將這篇 2000 字的文章總結為 50 字的電梯簡報。」`},{title:"3. 追問與質疑的藝術",content:`Prompt Engineering 不是「一次定生死」。高手與新手的差別，往往在於**「得到第一個答案後，你做了什麼？」**

AI 的第一版回答通常是「安全的、通用的、平庸的」。要得到鑽石，你必須學會**追問**與**質疑**：

• **技巧 A：擠牙膏**
當回答太籠統時，請追問：「請針對第 2 點，舉出具體的『數據佐證』或『執行步驟』，不要給我大方向。」

• **技巧 B：挑戰它**
當你覺得怪怪的，請直接質疑：「你確定這條法規適用於台灣嗎？請再次查證並引用來源。」或「這個方案聽起來太理想了，請列出潛在的 3 個致命缺點。」

• **技巧 C：換限制**
當答案不可行時，改變條件：「如果我們的預算只是原本的一半，你會怎麼修改這個計畫？」`},{title:"4. 組合技：讓 Prompt 威力加倍",content:`單一技巧專門解決特定問題，真正的高手會將它們串聯起來，形成一套工作流：

🔥 **組合技 A：除霧導航 (Clarify ➡️ Structure)**
適合：老闆指令模糊，或是任務範圍太大的時候。
1. **[Clarify]**：「在你執行之前，請先列出你對這個任務還有哪些疑問？」
2. **[Structure]**：「很好，確認無誤後，請依照時間軸列出執行大綱。」

🔥 **組合技 B：模擬戰場 (Role Play ➡️ Reverse ➡️ Refine)**
適合：重要提案前的演練，確保無懈可擊。
1. **[Role Play]**：「請扮演挑剔的財務長，個性保守，最在意投資報酬率。」
2. **[Reverse]**：「請看過我的提案，並指出這份預算表中，最不合理的 3 個地方。」
3. **[Refine]**：「根據你剛才的批評，請幫我優化這份預算表的說帖，讓它更有說服力。」`}],prompts:[{title:"🧠 Step-back：行銷策略應用",context:"先取出「抽象原則」，再套用到「具體情境」。",content:`【Step 1: Step-back】
針對「針對 Z 世代 (Gen Z) 的品牌行銷」，有哪些心理學原理或消費行為理論是目前公認有效的？請列出 3 個關鍵理論。

【Step 2: Apply】
好，我們是一家傳統的老牌文具店。請運用上述提到的 3 個理論，幫我發想一個「讓 Z 世代覺得寫字很酷」的社群行銷活動。`,type:"structure"},{title:"🗣️ 追問示範：優化答案的過程",context:"模擬與 AI 的多輪對話，從平庸到卓越。",content:`(Round 1)
User: 幫我寫一個請假的理由。
AI: (給出一個普通的生病理由...)

(Round 2 - 增加限制)
User: 不行，這個理由太常見了。我需要一個「聽起來很緊急，但不需要附上醫生證明」的理由。

(Round 3 - 質疑與修飾)
User: 這個有點太誇張了，主管可能會懷疑. 請幫我把語氣改得「誠實、愧疚」一點，並強調我會把工作交接好。`,type:"demo"},{title:"磚 組合技：Clarify + Structure",context:"先對焦定義，再展開架構，避免雞同鴨講。",content:`我想要寫一份「年度部門檢討報告」。

1. [Clarify]: 在你開始寫之前，請先列出你認為一份「高績效團隊的檢討報告」應該包含哪些關鍵要素？請先回答這題。

2. [Structure]: (等 AI 回答後) 很好，請依照你提到的要素，幫我建立這份報告的目錄大綱 (Outline)，並在每個章節標註重點提示。`,type:"structure"}],outputTask:{description:"請運用「組合技 B (Role Play + Reverse)」，拿你目前手邊正在進行的一個提案或計畫，請 AI 擔任反對者來攻擊你。",example:`Prompt 1 (Role Play & Reverse):
"你現在是公司的『資安長 (CISO)』，你的個性非常謹慎，對任何雲端工具都抱持懷疑態度。
請看過我這份『導入 AI 協作工具』的計畫草案，並無情地列出 3 個你認為會有資安漏洞的地方。"

Prompt 2 (Refine):
"好，針對你剛才提出的資安疑慮，請幫我撰寫一段『說帖』，讓我可以在會議上回應資安長的質疑，並提出具體的補強措施 (如：企業版帳號、資料不落地設定)。"`}},{id:"2-3",title:"單元 2-3｜樹狀思考與多角色決策：打破線性邏輯 (ToT)",objectives:["掌握樹狀思考 (ToT) 的核心機制：發散、評估與回溯","學會運用「三段式指令流」引導 AI 進行複雜的事故應變","理解多角色辯論的原理與實作，擴張決策視野","建立「思考視角」而非「背誦指令」的長期 AI 協作觀點"],flow:[{title:"1. 核心概念：不要只是走一條路",content:`一般的提問 (CoT) 像是「一路想到底」。但對於高風險、沒有唯一正解的決策，我們需要**「樹狀思考」 (Tree of Thoughts, ToT)**。

🌿 **結構化本質對照圖**

➡️ **線性思考 (CoT)**：
[問題] ➝ [想法 A] ➝ [想法 A1] ➝ [結論]
*(風險：如果想法 A 一開始只是走偏了，後面的推導全是錯的)*

🌳 **樹狀思考 (ToT)**：
[問題]
  ├─ [路徑 A] ➝ [評估: 成本太高] ➝ **(回溯)** ❌
  ├─ [路徑 B] ➝ [評估: 可行性高] ➝ [深入路徑 B1] ✅
  └─ [路徑 C] ➝ [評估: 法律風險] ➝ **(回溯)** ❌

**🎯 職場資深專案經理的比喻**
一個厲害的專案經理在面對高風險任務時，不會只拿出一份計畫。他會在腦中同時跑 3～5 套劇本（分支）。如果預演發現路徑 A 會在第二週導致預算超支，他會立即「回溯」，重新在腦中修訂路徑 B. ToT 就是讓 AI 扮演這位經理，在給你最終提案前，先在內部進行多次「沙盤推演」與「淘汰不合適的路徑」。`},{title:"2. 判斷準則：什麼時候該用 ToT？",content:`記住一個簡單的原則：**越是「兩難」或「高風險」的事，越適合 ToT。**

• ❌ **不需要**：算數學、寫簡單摘要、既定流程的行政申請。
• ✅ **非常適合**：公關危機應變、產品重大轉型決策、複雜的人事衝突處理、下半年的預算分配。這些事情都沒有「對錯」，只是有「風險與代價的平衡」。`},{title:"3. 實戰演練：事故應變工作流",content:`ToT 成功的關鍵在於**「不要一次問完」**。將任務拆解為連續的指令引導， AI 才能在每個階段發揮最高邏輯水平。

### 第一階段：開路 (生成方案)
要求 AI 扮演專業指揮角色，在嚴苛限制下提出三條「本質不同」的路徑。這能防止 AI 給出三個長得很像的敷衍答案。

> **[指令範例：Prompt 1]**
> 你是資深事故應變指揮官。
> 情境：公司網站首頁當機，原因不明，IT 主管失聯。目標：1 小時內恢復服務，或至少顯著降低客訴。
> 限制：人力極度短缺（2 人內可執行）、不能假設有額外工程資源。
> 
> 請提出「3 條本質不同」的解決路徑（例如：技術修復 / 公關溝通 / 替代方案）。
> 每條路徑必須包含：核心假設、前 15 分鐘行動、30 分鐘內可觀察指標、主要風險。
> 輸出格式：用表格。規則：不要給泛泛建議。

### 第二階段：評估與篩選
提供明確的打分標準，強迫 AI 進行「殘酷淘汰」。**「明確淘汰至少一條路徑」**是關鍵，這能逼出 AI 的判斷力。

> **[指令範例：Prompt 2]**
> 根據你剛剛的 3 條路徑，請用以下評估標準打分（1-5 分）：
> - 成效反應時間、執行成本、風險、客訴緩解效果、可逆性。
> 接著：
> 1) 明確淘汰至少 1 條路徑（寫淘汰原因）
> 2) 保留 1-2 條作為優先/備援
> 輸出：評分表 + 決策結論（3 行內）。

### 第三階段：深化與執行
針對最終勝出的路徑，要求 AI 輸出細化到分鐘的行動計畫。這時 AI 的注意力已完全收縮。

> **[指令範例：Prompt 3]**
> 請針對「優先路徑」輸出 60 分鐘行動計畫（以 10 分鐘為一格）。
> 每一格要包含：負責人（A/B）、具體行動、預期產出、備援計畫。
> 另外補上：對外公告（50-80 字，穩定不甩鍋）、客服/業務內部溝通口徑。`},{title:"4. 擴增思路：多角色辯論 (圓桌模式)",content:`除了線性推導，另一種擴張思路的方式是**「多角色辯論」**。這也是 ToT 的一種變體，重點在於製造**「邏輯衝突」**。

**原理說明：為何有效？**
AI 模型傾向於當「好人」，容易隨聲附和你的想法（模式崩塌）。當你強制它扮演互相競爭的角色（如：衝鋒陷陣的業務 vs. 守護荷包的財務 vs. 怕出事的法務），這些角色代表了現實世界不同的利益角度，能幫你挖掘出隱藏在盲點裡的「地雷」與「新機會」。

> **[指令範例：多角色辯論]**
> 我們正在評估：「是否要取消實體辦公室，改為永久全遠端工作」。
> 請模擬以下三個角色進行一場圓桌辯論：
> 1. 【樂觀的 HR 人才專家】：強調人才招募優勢與租金成本節省。
> 2. 【憂慮的資深技術主管】：擔心團隊凝聚力下降與溝通消失。
> 3. 【現實的財務總監】：在乎生產力波動與隱藏的設備補貼成本。
> 最後，請作為「決策主持人」，總結這場辯論中「最值得妥協的平衡點」是什麼？`},{title:"5. 總結：為何在強大模型時代，我們仍然需要 ToT 思維？",content:`隨著模型持續進化（如 o1 已經內建部分推理能力），很多人會覺得：「我直接問就好，幹嘛這麼麻煩？」

請記住：**ToT 不是一種「咒語」，而是一種「思考視角」。**

即使 AI 變得很強，它本質上只是一個機率預測機器. 如果你不主動引導它去「開路」、去「辯論」、去「淘汰」，它往往會給你一個最平庸、最大眾化的答案。**使用 ToT 思維，代表你從一個「提問者」，升級為一個「思考框架的設計者」。** 這種引導 AI 深入死角、反覆驗證的能力，正是未來數位職能的核心。`}],prompts:[{title:"⚖️ 決策應用：高階人才招聘 (Hire or No-hire)",context:"針對爭議性極高的面試結果，進行樹狀分析。",content:`請針對「是否錄用應徵者 X 擔任技術總監」進行 Tree of Thoughts 分析。
該應徵者技術極強 (10/10)，但性格強勢，面試中與兩位現有主管產生語言衝突。

請分三階段推演：
1. 【開路】：提出「直接錄用」、「直接婉拒」、「錄用但設 3 個月外部教練輔導期」三條路徑。
2. 【評估】：設定「團隊士氣衝擊」、「長期技術成長」、「離職風險代價」三個指標打分。
3. 【決策】：請考慮「目前公司急需技術突破」的背景，選出最推薦路徑並撰寫給 CEO 的說帖。`,type:"structure"},{title:"📈 預算應用：Q4 行銷預算分配",context:"面對不確定的市場，同時演練多種預算配置策略。",content:`我們有 100 萬的 Q4 預算。
請模擬「保守穩健型」、「激進擴張型」、「混合測試型」三種行銷策略。
請針對這三種策略：
- 預估的流量與轉換率範圍
- 最大的潛在浪費點
- 如果執行兩週後效果不如預期，該如何回溯與調整？
最後，比較這三種策略後，推薦一份針對「新品牌推廣期」的最佳預算配置建議。`,type:"demo"}],outputTask:{description:"請挑選一個你目前工作中遇到的「兩難議題」，模仿上述的「三段式指令流」或「多角色辯論」與 AI 進行推演。重點在於引導 AI 說出你原本沒想到的風險點。",example:`Action:
"我使用三段式指令處理了『是否要更換長期合作但報價上漲的供應商』。
在評估階段，AI 幫我算出：雖然換廠商省下 10% 成本，但『切換期的教育成本』風險評分極高.
這讓我也最終決定採用備援計畫：與原廠商進行第二輪議價談判。" `}},{id:"2-4",title:"單元 2-4｜上下文工程與情境提示：掌握 AI 的長短期記憶 (Context & Memory)",objectives:["掌握上下文三大關鍵原則，特別是現代模型的「角色持久性」判斷","理解為什麼「對話太長」會導致 AI 失去判斷力與產生幻覺","學會透過「脈絡提取器」與「雜訊清理」維持對話品質","理解情境提示 (Contextual Prompting) 的三個層次與「公式化」應用","掌握防止 AI 偏離規範的隱性脈絡注入技巧"],flow:[{title:"1. 為什麼 AI「聊久了反而變笨」？",content:`這是一個學員常有的真實體感。原因有三點：

**1️⃣ 上下文視窗 (Context Window) 是有限的**
模型每一次回答，都只能「看到」一定長度的上下文。超過的內容不是被忽略，就是被壓縮。

**2️⃣ 注意力稀釋 (Attention Dilution)**
模型也是有「注意力」的. 如果你在對話中穿插了太多閒聊、嘗試過但最後放棄的錯誤方案，模型在計算機率時，會被這些雜訊誤導。`},{title:"2. 核心比喻：行李箱理論與「過期地圖」",content:`上下文工程，就像是整理出國的行李箱。

**🎒 空間有限**
你不能把整個家都帶走。Context Window 就是行李箱大小。

**⚠️ 雜訊效應 (最容易被忽略的風險)**
想像一個聊了三週的行銷專案對話，裡面包含了五次需求的更迭、三份報價單的修改、以及無數次『算了，這版不要』的廢話。
這就像行李箱塞滿了**過期的地圖、吃一半的零食袋、還有沒洗的髒衣服**。當你最後緊急要找『護照 (目前的最終共識)』時， AI 會因為行李箱太勞而翻不到，甚至拿出一張舊的地圖指引你走錯路。

👉 **對話時間長短不代表深度，有時候它只是「雜物堆積」的象徵。**`},{title:"3. 實戰技巧：雜訊清理與脈絡提取",content:`當對話開始失焦時，你不需要開新對話，只需要執行**「記憶清理」**。

• **原則：Context ≠ 全部資訊**
回答品質提升的秘訣，往往不在於多貼資料，而在於**「刪掉 30% 不相關的上下文」**。

### 案例演示：提取目前共識 (Extractor)
> **[Demo: 脈絡提取器]**
> 「我們剛才進行了一段很長的討論，包含多個被否決的方案與雜訊。請幫我執行『脈絡提取器』任務：
> 1. 忽略所有已否決、暫緩或純閒聊的內容。
> 2. 僅提取目前的『最終決議』、『核心目標』與『待執行清單』。
> 3. 將其整理成一份精簡的摘要，以便我能將其貼入另一個新對話中繼續執行。」`},{title:"4. 升維思考：情境提示 (Contextual Prompting) 的三個層次",content:`除了清理現有的記憶，我們更要學會**「高品質地注入新情境」**。我們可以由淺入深來理解：

**Level 1 (淺層)：短期事實補強**
貼上剛剛發生的新聞、今天的匯率。因為這些不在 AI 的訓練資料裡，你必須「餵」給它，它才知道。

**Level 2 (中層)：隱性脈絡與規則**
這包含公司內部的「潛規則」、專案的歷史包袱、或是老闆的特殊喜好。這些是「網路上查不到」的資訊。如果你不貼上去，AI 給出的建議就會因為缺乏脈絡而變得「不接地氣」。

**Level 3 (深層)：RAM 運作模型**
從技術面看，LLM 就像是一個只有 RAM (記憶體) 沒有硬碟的電腦。Contextual Prompting 的本質，就是**「在有限的記憶體中，精準地載入必要的資料」**，讓 AI 在這一次的運算中能調用這些 knowledge，而不產生幻覺。

👉 **公式：Prompt = [參考資料] + [任務指令]**`},{title:"5. 應用場景：背景、重點、影響、行動 (BRIA) 框架",content:`當你要主動提供 Context時，請依照以下框架組織資料，AI 的理解度最高。這不僅是給資料，更是給 AI **「導航地圖」**。

#### 🧱 BRIA 框架定義：
- **[B] Background (背景)**：任務的起源。為什麼要做這件事？
- **[R] Reference (參考/重點)**：關鍵事實、數據或特定段落。
- **[I] Impact (影響)**：目標受眾是誰？如果失敗了會怎樣？
- **[A] Action (行動)**：具體要 AI 產出的格式與內容。

#### 🧪 實戰案例對比：撰寫專案延期通知

**❌ 缺乏脈絡的原始指令 (Bad Context)**
> 「我們 App 上線延後兩週，幫我寫封信跟老闆報告。」
> *結果：AI 產出的信件語氣可能太隨便，或亂編延誤原因，導致你還得大改。*

**✅ 運用 BRIA 框架的精準指令 (Good Context)**
> 你是這項專案的 PM。請撰寫一封專業的延期報告 Email。
>
> **[B] Background**: 此 App 原定下週一上線，但測試發現核心支付功能有資安漏洞。
> **[R] Reference**: 技術團隊評估修復需 5 個工作天，重新回測需 3 個工作天。
> **[I] Impact**: 老闆非常在意「資訊安全」，且下個月有股東大會，品質優於速度。
> **[A] Action**: 請產出 Email 草稿，包含：1. 現況說明 2. 延期主因 3. 具體修復時程 4. 行動方案。語氣要專業、誠誠、不卑不亢。
> *結果：AI 能精準抓到「安全第一」的重點，產出的內容幾乎可以直接寄出。*

👉 **結論：脈絡越多，AI 猜測的成分就越少，回答就會越接地氣。**`},{title:"6. 遺忘與開局的藝術：操控 AI 記憶的動作",content:`### 🔘 動作一：階段性結案 (Checkpoint Summary)
在一場複雜對話中，要求 AI 進行一次「Checkpoint 彙整」，摘錄目前的共識，拋棄過程中的雜訊。

### 🔘 動作二：無痕開局 (Temporary Chat)
當任務「與平常風格迥異」時使用，避免污染 AI 對你的長期偏好設定。

### 🔘 動作三：記憶重設 (New Chat)
**不要捨不得舊紀錄**. 當發現 AI 開始引用過時數據，請直接**開啟新對話**。放棄舊對話，是為了獲得更高品質的新答案。`}],prompts:[{title:"📊 雜訊過濾：跨部門週報資訊壓縮",context:"從雜亂的各部門匯報中，僅提取具有「風險」的資訊。",content:`【Context (本週部門進度報告)】:
"""
行銷部：FB 廣告活動進行中，CTR 下降 5%，預算已使用 80%，素材需更換。
產品部：Feature A 因為支付套件 Bug 延遲 1 週，目前已修復 90%。Feature B 進度正常。
客服部：本週處理 150 件工單，其中 10 件是關於 Feature A Bug 的投訴，整體滿意度 4.5。
"""

【Task (任務)】:
你是專案營運總監. 請幫我執行「雜訊修剪」規則：
1. 忽略所有「進度正常 (On Track)」或「滿意度高」的小事。
2. **僅提取**：那些可能導致「上線延遲」或「預算浪費」的異常數據與風險。
3. **輸出**：給總經理看的一句話重點 (One-sentence summary) 與 3 個待辦行動。`,type:"demo"},{title:"📂 脈絡注入：專案歷史分析 (Contextual)",context:"將「專案歷史」作為情境貼入，避免重蹈覆轍。",content:`【Context (專案歷史紀錄)】:
"""
我們公司過去三次推行 CRM 系統都失敗。
第一次失敗原因：業務人員覺得介面太難用。
第二次失敗原因：系統與既有的 ERP 無法串接。
第三次失敗原因：導入顧問不懂我們產業的特殊流程。
"""

【Task (任務)】:
我們下個月要啟動第四次導入計畫。
請根據上述的「歷史失敗脈絡」，幫我列出 3 個這次必須優先解決的「關鍵風險」，以及對應的預防措施。`,type:"structure"},{title:"🎭 語氣複製：品牌範例注入 (Few-shot Context)",context:"【連貫性提醒】這只是單元 1-2 的 Few-shot 應用。給範例永遠比用形容詞更精準。",content:`【Context (我們過去的高互動貼文範例)】:
"""
範例 1: "這週末去露營了嗎？⛺️ 記得帶上我們的防蚊液，別讓紅豆冰毀了你的網美照！"
範例 2: "下雨天只是想窩在家？☕️ 泡杯熱可可，配上這款新出的毛毯，根本是人間天堂～"
"""

【Task (任務)】:
請先分析上述貼文的「語氣特徵」(如：emoji 使用習慣、說話口吻)。
接著，請用完全相同的風格（不要只是寫得活潑，要模仿上述範例的節奏），幫我寫一篇推廣「不鏽鋼保溫瓶」的 IG 貼文。`,type:"demo"}],outputTask:{description:"請檢視你目前最長的一個對話串，運用「脈絡提取器 (Extractor)」抓出共識；接著挑選一份公司內部的「隱性資料」（如：過往成功提案、老闆演講稿）作為 Context，開啟一個 New Chat 進行測試。",example:`Action Report:
"我發現舊對話裡塞滿了過期預算案。
1. 我先用 Extractor 抓出 Q3 最終定案的目標。
2. 複製摘要後開 New Chat。
3. 注入『老闆過去對 Q4 展望的演講稿』作為 Context。
結果：AI 產出的 Q4 計畫草案，語氣居然跟我老闆一模一樣，且邏輯完全對齊 Q3 的結案。" `}}]},{id:"ch3",title:"章節三｜高階技能：資料處理、程式與多模態",description:"從資料分析、程式原型到多模態應用，解決實際工作痛點。",units:[{id:"3-1",title:"單元 3-1｜定調產出：結構化輸出與任務拆解的邏輯",objectives:["理解結構化輸出不僅是檔案格式，更是「內容規格」與「邏輯模組」","掌握將非結構化資料轉化為「指定段落（如 CTA）」的引導技巧","學會透過「輸入與輸出定調」進行任務拆解，確保複雜任務成功率"],flow:[{title:"1. 結構化輸出的真面目：不只是格式，更是「規格」",content:`很多人以為結構化只是把文字變成表格。其實，真正的結構化是定義內容的**「骨架」**。

• **技術格式 (Storage)**：JSON, CSV, Markdown Table。這是為了讓「電腦」或「試算表」好讀。
• **內容規格 (Schema)**：這是為了讓「大腦」好讀。例如：
定義**欄位**：不要只是寫摘要，要寫「產品名、痛點、競品」。
定義**段落**：會議記錄必須包含「決議結論」與「Call to Action」。
定義**權重**：優點寫 3 點，缺點寫 1 點。

👉 **觀念：結構化輸出的本質是「封閉式問答」，你規定了 AI 只能在你的格子裡填空。**`},{title:"2. 實戰 A：會議逐字稿 ➡️ 重點模組化",content:`面對雜亂的對話，我們要的不是「總結」，而是「模組化」。

> **[原始逐字稿範例]**
> 「小明：那個...A 計畫預算好像超標了。小華：對啊，老闆說不能超過 10 萬。小明：那把廣告預算砍掉好了？小華：不行啦，廣告很重要，我們換個場地試試看...對了下週五要開會喔。」

> **[指令：模組化提取]**
> 請閱讀上述對話，並依照以下「結構化規格」輸出：
> 1. 【核心爭執】：一句話描述雙方分歧點。
> 2. 【已達成共識】：目前雙方都同意的事情。
> 3. 【Call to Action】：下一個具體動作、負責人與時間。
> 4. 【情緒警示】：若對話出現焦慮或衝突，請標註為 [警告]，否則標註 [正常]。`},{title:"3. 實戰 B：開放式問卷 ➡️ 標籤化數據",content:`將感性的文字轉化為理性的標籤，方便數據統計。

> **[原始客戶評論]**
> 「這款手機外型很好看，但電池真的噴很快，用不到半天就是沒電了，超煩。不過拍照真的很強。」

> **[指令：標籤化提取]**
> 你是一個資料清洗專家. 請將評論轉換為 CSV 格式。欄位包含：
> [產品], [優點標籤], [缺點標籤], [情緒分數(1-5)], [建議行動]
> 規則：優缺點標籤請使用 2-4 個字的關鍵字（如：續航力、外型）。`},{title:"4. 複雜任務的崩潰與解決：定調每一階段的輸入、輸出",content:`當你要求一個「非常複雜的結構化產出」時，AI 的幻覺會顯著增加。為什麼？因為 AI 的運算力被分散了：它必須同時思考邏輯、檢查格式、搜索資料。

這就是為什麼**「單純強調格式結構」是不夠的，必須搭配「任務拆解」並嚴格「定調每一階段的輸入與輸出」**。透過**「邏輯隔離」**讓 AI 每一階段的行李箱都只裝必要的東西，避免雜訊污染下一階段的判斷。

### 實戰 Demo：市場競爭力分析管線 (Market Pipeline)
與其一次要 AI 給出完整的分析表，不如拆成三段，每一段都有清楚的定調：

#### 階段一：事實掃描 (Fact Extraction)
- **任務重點**: 僅提取事實，禁止評價。
- **Input**: 產品網頁原文、規格書。
- **Output**: 乾淨的關鍵事實清單。

**模擬產品資料 (可供練習複製使用)：**
\`\`\`
【產品一：Lumina Vlog X100｜隨身 4K Vlog 相機】

想要輕鬆紀錄每一段旅行，而不想背著笨重單眼出門？Lumina Vlog X100 專為創作者與日常紀錄設計，兼具高畫質與機動性。

．主要特色：
- 4K/60fps 高畫質錄影，適合 Vlog、教學影片與開箱拍攝
- 雙向翻轉螢幕，自拍取景不求人
- 支援一鍵直出直式影片，友善 Reels 與 Shorts

．核心規格：
- 感光元件：1/1.7 吋 CMOS 感光元件，背照式設計
- 有效畫素：約 1600 萬畫素（16MP）
- 內建儲存空間：64GB eMMC 快閃記憶體
- 記憶卡擴充：支援 microSD 卡，最高至 512GB
- 鏡頭焦段：等效 24–70mm F1.8–2.8
- 螢幕尺寸：3.0 吋可翻轉觸控螢幕

．價格與銷售資訊：
- 建議售價：新台幣 18,900 元（含稅）
- 上市優惠：首月早鳥 NT$16,900，隨機附贈 128GB microSD 卡
- 保固：原廠保固 2 年

．適合族群：
- 內容創作者、YouTuber、新手接案攝影師
- 想從手機升級到獨立相機的使用者
\`\`\`

> **[Prompt 1]**: 「請閱讀以下資料，僅抓取關於『儲存空間』、『感光元件尺寸』與『定價』的原始數據，用條列式呈現，不要寫任何形容詞。」

#### 階段二：邏輯映射與標註 (Logic Mapping)
- **任務重點**: 拿事實對比標準，給予評等。
- **Input**: 階段一的清單 + 我方的產品標準。
- **Output**: 帶有標籤的事實分析。

> **[Prompt 2]**: 「基於上述數據，與我方標準 (32GB/1200萬畫素) 進行比較。若優於我方請標註【優勢】，低於我方請標註【劣勢】。請不要進行額外的文案潤飾。」

#### 階段三：格式化呈現 (Presentation)
- **任務重點**: 最終視覺呈現與行動建議。
- **Input**: 階段二的分析結果。
- **Output**: 最終的 Markdown 表格 + Call to Action。

> **[Prompt 3]**: 「請將上述分析結果整理成 Markdown 表格，並在表格下方增加一個『本月因應對策』段落，列出 2 個我們應該立即執行的 Call to Action。」

👉 **結論：讓 AI 每一次專心處理『一進一出』，複雜的產出就會變得極度穩定且精準。**`}],prompts:[{title:"📊 結構化規格定義 (Schema Define)",context:"這不只是格式，是強迫 AI 思考特定維度的範例。",content:`請閱讀以下專案進度，並依照「模組化規格」產出：

【規格說明】
1. [Status]: 僅限使用「燈號(🔴/🟡/🟢)」呈現。
2. [Critical Info]: 提取對專案上線有「直接阻礙」的事實。
3. [Decision Point]: 列出目前需要老闆下決定的 2 個選項。
4. [CTA]: 下週五前的 3 個行動清單。

【輸入資料】
專案：AI 智能客服系統導入
進度筆記：
- 前端介面開發進度 90%，UX 測試回饋良好。
- 模型訓練遇到瓶頸，目前對於「法規類」問題的準確度僅 65%，低於預期的 85%。
- 伺服器採購因全球供應鏈影響，硬體交期從原定的 2 週延長至 6 週。
- 財務部反應目前的訂閱費用超標 15%，需要評估是否縮減測試規模。
- 內部測試發現手機號碼驗證功能有 Bug，導致 20% 測試帳號無法登入。`,type:"structure"}],outputTask:{description:`請挑選一個你手邊最「感性」或「雜亂」的文字資料（如：產品評論、小組討論紀錄）。
1. 定義 4 個你需要的「結構化規格欄位」。
2. 運用「定調輸入、輸出」的流水線邏輯，先請 AI 提取乾淨事實，再要求它映射到你的欄位中。`,example:`Action Report:
"我處理了 50 筆關於『線上課程心得』的留言。
規格定義：[滿意度(1-5)], [最推薦章節], [待改進點], [購課動機標籤].
心得：透過定調每一階段的輸出，我發現 AI 對於『購課動機標籤』的精準度顯著提升，因為它在第二階段不需要分心去理解原始的冗長心得，只需要處理第一階段提取出的關鍵詞。" `}},{id:"3-2",title:"單元 3-2｜需求到功能：AI 協作開發 (Vibe Coding)",objectives:["觀念建立：不用懂語法，但要懂邏輯","風險管理：資安、幻覺與技術債","協作場景：從需求描述、跨語言翻譯到除錯"],flow:[{title:"1. 觀念篇：寫程式，一定要懂程式碼嗎？",content:`這是一個常見的焦慮。答案是：**不用懂「語法」，但要懂「邏輯」**。
• **語法**：像是英文的文法，要不要加分號、括號。這件事 AI 做得比人類好，交給它就好。
• **邏輯**：像是「如果發生 A，就是執行 B，否則執行 C」。這是人類必須告訴 AI 的規則。

**不同背景的使用策略**：
| 你的背景 | 優勢 | 可以做什麼 | 可能遇到的困難 |
|---|---|---|---|
| **完全不懂程式** | 創意不受限，能想到工程師沒想到的應用 | 簡單的自動化工具 (Excel 巨集)、資料整理腳本、網頁小遊戲 | 遇到錯誤 (Error) 時不知道怎麼修，容易卡關 |
| **懂一點邏輯 (Excel/No-code)** | 能看懂流程圖，知道資料怎麼流動 | 網頁爬蟲、API 串接、複雜的資料分析 | 環境設定 (安裝 Python/Node.js) 通常是最難的一關 |
| **專業工程師** | 判斷力準確，能一眼看出 AI 寫錯 | 複雜系統開發、重構程式碼、寫測試 | 容易過度依賴，有時會忽略資安風險 |`},{title:"2. 開發起手式：Vibe Coding 的黃金 Prompt 結構",content:`網路上有許多針對不同語言的詳細教程。但在這堂課，我們聚焦於最核心的**「Prompt 結構」**。只需要掌握這個公式，你在任何工具 (Replit/Cursor/Gemini) 都能通用：

**核心公式：Role + Tech + Feature + UI/UX + Data**

1. **[規格 - Tech Stack]**
清楚定義技術邊界。例如：「使用 Python 寫一個爬蟲，在 Google Colab 執行」或是「用單一 HTML 檔案，包含 Tailwind CSS」。
2. **[功能 - Feature Logic]**
描述核心邏輯. 例如：「輸入網址後，自動抓取標題與 H1，並存成 CSV」。
3. **[介面 - UI/UX Interaction]**
描述長項與互動。例如：「畫面要是深色模式 (Dark Mode)，按鈕要圓角，操作成功要有綠色打勾動畫」。
4. **[資料 - Data Structure]**
(重要) 請它生成假資料。例如：「請預設生成 5 筆模擬的客戶資料，讓我可以先看到畫面效果」。`},{title:"3. 實作 Demo：雲端與本地的神器組合",content:`光說不練是假把戲。以下是我在實務中最常使用的開發組合，分成兩種情境：快速做原型與正式開發，你可以依照需求選擇最佳路徑。

# 🚀 情境一：雲端快速開發（適合：原型驗證 / 入門開始）
這條路線最推薦給初學者，因為：不用安裝軟體、不用設定環境，只要打開瀏覽器就能開始做。

## 🔧 工具 1：Google AI Studio（Build / App 模式）
### 亮點：
• 不再只是聊天或生成程式碼
• 可以快速產出 **可操作的 Web App 原型**
### 用途示例：
• 產生想法 ➝ Build ➝ 馬上看到互動畫面
• 適合 Demo、驗證 UX、測試思路

**一句話總結：**
👉 最快速看到成果的方式，適合新手與 PM 做 PoC。

## 🔧 工具 2：Replit + AI Agent（雲端全端開發）
### 亮點：
• 在雲端直接寫前端／後端
• AI Agent 可：建立專案、安裝套件、排錯、部署
• 甚至可以在 **手機或平板** 開發
### 用途示例：
• 小型 Web 應用
• API Demo
• 自動部署預覽網址

**一句話總結：**
👉 你的「代班工程師」，在瀏覽器完成從 0 ➝ 上線的流程。

## 🔧 工具 3：Manus（跨平台任務型代理）
### 亮點：
• 不只寫程式
• 也能處理周邊任務：查資料、彙整表格、協同輸出
### 專長場景：
• 例如：「幫我查三家競品 ➝ 整理成表格 ➝ 再做簡單網站呈現。」

**一句話總結：**
👉 更像「會寫程式的專案助理」，整合跨工具流程。

# 🖥️ 情境二：本地深度開發（適合：正式專案 / 長期維護）
當你的需求進入以下階段：程式碼開始變多、串接資料庫或 API、需要多人協作或版本控制、想追求更流暢的開發體驗，就建議切換到本地開發模式。

## 🧰 主力工具組合：VS Code + AI Extension
VS Code 幾乎是目前軟體開發的主流編輯器，優勢在於：
• 豐富的 Extension
• 與 Git 深度整合
• 可客製化工作區
• 支援多語言、多框架

搭配 AI Extension（例如：Claude、GitHub Copilot、Gemini），你可以讓它扮演：代碼補全助手、Debug 夥伴、重構建議者、文件生成者。

## 🆕 新興工具：Google Antigravity
除此之外，Google 最新推出的 Antigravity 也逐漸成為本地開發的輔助工具：
• 協助分析專案與產生程式碼
• 幫忙建立檔案結構
• 在特定階段提供除錯或架構建議

**一句話總結：**
👉 不是 VS Code 的替代品，而是可並行使用的輔助開發助手。`},{title:"4. 實務地雷區：Vibe Coding 並非萬能",content:`很多人以為 AI 寫程式是魔法，但其實有很高的風險：
• **資安風險**：絕不要把你的 API Key (如 OpenAI Key) 或公司密碼直接貼到 Prompt 裡。AI 有時會把這些機密寫進公開的程式碼中。
• **幻覺風險**：AI 喜歡「發明」不存在的套件或函式庫。當它給你一段程式碼，執行後卻報錯說「Module not found」，通常是因為它瞎掰了一個套件。
• **技術債**：這是初學者最容易忽視的。AI 寫的程式碼可能「現在能跑」，但結構混亂。長期下來，這個程式會變得極難修改或維護，變成一次性工具。`},{title:"5. 多元協作模式：不同角色的應用場景",content:`AI Code Gen 服務不只是給工程師用的，它是所有人的瑞士刀：

**1. 產品經理 (PM) & 設計師**
• **Prototype 驗證**：不用等工程師有空，自己用 AI 寫一個「會動的」網頁，驗證按鈕動畫、轉場效果是否如預期。
• **動畫參數調教**：用 AI 寫 CSS Animation，調整貝茲曲線，直接把參數給工程師。

**2. 行銷與營運 (Ops)**
• **自動化工具**：寫 Python 腳本自動批次改圖檔名、自動抓競品價格、自動整理 Excel 報表。

**3. 學習者 (Learner)**
• **代碼解釋**：看到天書般的程式碼？請 AI 用「白話文」解釋每一行在做什麼。
• **錯誤修復**：遇到紅字報錯？直接把錯誤訊息丟進去，讓 AI 告訴你少裝了什麼套件。`}],prompts:[{title:"🚀 Side Project 起手式：Vibe Coding",context:"先定義技術規格與功能需求，成功率會大幅提升。",content:`我想要開發一個簡單的「匯率通知機器人」。

【1. 技術規格 (Tech Stack)】
- 語言：Python
- 執行環境：Google Colab
- 通知方式：Line Notify API

【2. 功能需求 (Feature)】
1. 爬取台灣銀行即時美金賣出匯率。
2. 如果匯率低於 31.5，發送 Line 通知給我。

【3. 資料結構 (Data)】
- 請模擬一個包含「時間、幣別、匯率」的 Dictionary 格式，先讓我確認資料抓取的邏輯.

請幫我寫出第一版的程式碼，並告訴我如何申請 Line Notify Token。`,type:"structure"},{title:"🔄 跨語言翻譯：Python 轉 JavaScript",context:"打破技術棧的限制，讓 AI 幫你寫不熟悉的語言。",content:`這是我原本用 Python 寫的資料處理邏輯：
\`\`\`python
def process_data(data):
 return [d for d in data if d['price'] > 100]
\`\`\`

請幫我將這段邏輯改寫成 **JavaScript (ES6)** 版本，我要用在網頁前端。
並請解釋這兩種語言在處理陣列 (List/Array) 時的語法差異。`,type:"demo"}],outputTask:{description:"請嘗試用自然語言描述一個你想要的簡單工具（如：房貸試算機、抽籤程式），並明確指定「技術規格」要求 AI 產出程式碼。",example:`Prompt:
"我要做一個『午餐吃什麼』的隨機抽籤網頁。
1. [UI]: 畫面中間有一個大按鈕寫『幫我選』。下方會顯示結果。
2. [Data]: 預設清單包含：麥當勞、7-11、排骨飯、牛肉麵 (請用 Array 儲存，方便我之後修改)。
3. [Tech]: 請給我一個單一的 HTML 檔，包含 CSS 美化 (不用太華麗，乾淨就好) 和 JS 邏輯。"`}},{id:"3-3",title:"單元 3-3｜模態理解力：圖片、音訊、影片",objectives:["理解多模態 (Multimodal) 的應用與限制","能將「截圖／錄音」轉成摘要、待辦清單","掌握「AI 視覺分析」的精準度問題"],flow:[{title:"1. 什麼是多模態？從「描述」到「直觀」",content:`以前要跟 AI 討論 UI，你要寫：「左邊有選單、右邊有內容...」。現在不用了。

**圖，就是 Prompt 的一部分。**

**1. UI / 產品開發**
手繪草圖 ➡️ 拍照上傳 ➡️ 指令：「請依照這張圖，產出 HTML + CSS。」

**2. 競品與市場分析**
這不僅是搜尋，更是「理解」。
截圖競品首頁 ➡️ 上傳 ➡️ 指令：「請從視覺層級與 CTA 設計，解讀它的定價策略與目標客群。」`},{title:"2. 多模態 Prompt 的新結構公式",content:`在多模態場景下，Prompt 不再只是文字，而是三個部分的組合：

**公式：【輸入素材】＋【任務指令】＋【角色設定】**

### 🔹 實例示範
❌ **模糊 Prompt**：
「幫我看看這張圖」

✅ **多模態 Prompt**：
「這是一張競品網站首頁截圖 (Context)，
請從『定價策略』與『目標客群』兩個角度分析 (Task)，
並指出可能的優勢與風險。」

👉 **圖片不會自己說話，是 Prompt 在決定它「怎麼被解讀」。**`},{title:"3. 音訊與影片：現實用法與「安全應用場景」",content:`了解結構後，我們要知道 AI 對於不同媒材的「能力邊界」在哪裡。

### 🎙️ 音訊最穩的用法
音訊模型最強的是「語意理解」，而不是聲紋辨識。
• **會議重點**：從 2 小時廢話中抓出重點。
• **決議結論**：到底最後決定做什麼？
• **待辦事項**：誰要在什麼時候交什麼？

### 🎬 影片適合做的事
• **流程摘要**：例如「這段烹飪影片的步驟是什麼」。
• **教學步驟整理**：把軟體操作影片轉成文字 SOP。
• **使用說明轉文字**：把開箱影片變成說明書。

### ❌ 不適合的期待
目前的模型還不是專業的監視器或法官：
• **精準時間點**：它難以精確告訴你「第 3 分 21 秒」發生什麼。
• **細微動作判斷**：例如「眼神是否有飄移」、「微表情」。
• **法律或安全關鍵判讀**：車禍肇責判定、醫療診斷。

👉 **觀念：影片理解 = 流程理解，不是監視器。**`},{title:"4. 關鍵提醒：多模態不是魔法",content:`**1. 多模態不是魔法**
它並非 100% 精準。特別是遇到「很細的文字」、「模糊圖片」或「專業圖表」，你必須**人工介入**，指出你關心的區域或補充說明。

**2. 脈絡消耗**
圖片和影片的資訊量巨大. 傳一張高解析度圖片或一段長影片，會消耗大量的 Token (使用額度)。請盡量裁切圖片重點，或壓縮影片，以避免對話額度瞬間用完。`}],prompts:[{title:"🖼️ 讀圖：策略簡報解讀",context:"直接上傳圖片，讓 AI 幫你抓重點。",content:`Context: (上傳一張複雜的策略圖表)

你現在是一位策略顧問。
請幫我解讀這張圖表：
1. 它的核心結論是什麼？
2. 數據呈現了什麼趨勢？
3. 如果老闆問我這張圖的 Insight，我該怎麼用一句話回答？`,type:"demo"},{title:"🎨 視覺分析：UI 草圖轉程式",context:"結合視覺辨識與程式撰寫能力。",content:`Context: (上傳一張我在白板上手繪的登入畫面草圖)

這是我想要的 App 登入畫面草稿。
請分析這張圖的元件配置：
1. Logo 在何處？
2. 有哪些輸入框？
3. 按鈕的文字是什麼？

確認無誤後，請幫我寫出對應的 HTML/Tailwind CSS 程式碼，還原這張圖的設計。`,type:"structure"}],outputTask:{description:"請找一張「資訊量很大」的圖片（如：股市走勢圖、網站首頁截圖），上傳給 AI，並要求它針對特定目標進行分析。",example:`Prompt:
"這是我們部門群組大家在討論『週五下午茶要吃什麼』的對話紀錄 (截圖)。
請幫我整理成一個統計表格。
欄位需求：
1. 推薦人 (Who)
2. 推薦店家 (Store)
3. 推薦理由 (Reason - 簡短摘要)
4. 預估價位 (Price - 若沒提到請填 TBD)"`}},{id:"3-4",title:"單元 3-4｜處理龐大資訊量：多文件比較與長文本",objectives:["學會定義「可衡量」的比較標準，而不只是列出名詞","掌握防止假引用的「原文逐字」與「直接引號」規則","建立高風險場景的「信心等級」與「推論標註」機制"],flow:[{title:"1. 情境：為什麼多文件比較這麼難？",content:`在職場上我們常遇到需要比較多份文件的情境：
• **評選廠商**：比較三家廠商的報價單、規格書與合約。
• **履歷篩選**：從 50 份 PDF 履歷中挑出最適合的 3 人。
• **競品分析**：閱讀 5 家競爭對手的年度報告。

**❌ 常見的失敗用法**
直接把所有 PDF 丟進去，問 AI：「請比較這幾份文件，哪一個比較好？」

AI 通常會給你一個「四平八穩」但「毫無價值」的回答，例如：「A 廠商便宜，B 廠商服務好，各有優缺點」。這是因為你沒有告訴 AI **「比較標準」** 是什麼。垃圾進，垃圾出。`},{title:"2. 第一步：定義比較基準",content:`要讓比較有意義，你必須先定義「維度」與「衡量方式」。

**❌ 模糊的標準**
- 價格
- 品質
*(AI 會看著辦，結果通常很空泛)*

**✅ 具體的標準**
- **價格競爭力**：請計算包含維護費的「5 年總持有成本」。
- **品質穩定度**：請找出合約中關於「服務保證條款 (SLA)」的賠償細節。
- **服務彈性**：是否提供「24 小時真人客服」與「客製化報表」？

👉 **觀念：你定義得越細，AI 的比較表就會越有價值。**`},{title:"3. 第二步：角色定錨",content:`有了標準還不夠，你還需要給 AI 一個 **「觀點」**。中立的比較通常沒用，因為老闆要的是 **「取捨」**。

請試著加上這段指令：

> *請你扮演**「企業採購決策顧問」**，目標是協助高層在 10 分鐘內做選擇。請以**「比較與取捨」**為優先，而非中立描述。*

這樣 AI 就不會只是列出規格，而是會告訴你：「雖然 A 比較貴，但考慮到售後服務，長遠來看更劃算」。這就是觀點的力量。`},{title:"4. 第三步：嚴格的引用規則",content:`當文件很長（例如合約）， AI 為了總結，有時會用自己的話重寫一遍，這在法律或高風險場景非常危險。我們需要「防止假引用」。

請加上嚴格限制：

> **「請只允許引用『原文逐字片段』，並使用『直接引號』標示。如果無法逐字引用，請標示【無法確認】。」**

這就像在法庭上呈堂證供，不能用「我聽說」，只能用「錄音檔逐字稿」。`},{title:"5. 第四步：自我檢查機制",content:`最後，要求 AI 進行 **「自我審查」**，標示出它不確定的地方，而不是自信地胡說八道。

請在 Prompt 的最後加上：

> *在完成分析後，請再次檢查：*
> *1. 是否有任何結論未被文件明確支持？*
> *2. 哪些地方是推論而非事實？請將這些地方標註為【推論】。*
> *3. 請在每個結論後標示可信度等級：(高/中/低)。*

**這樣做的優點**：你得到的不是一份「可能是真的」報告，而是一份「風險可控」的決策輔助文件。`},{title:"6. 迷思破解：關於 Context Window",content:`很多學員會問：『Gemini 1.5 Pro 都可以吃 200 萬字了，為什麼還要學切分？』

答案是：**Context 很大，代表「吃得下」，但不代表「消化得好」。**

當資訊量過大時，模型容易發生 **「迷失中間」** 現象，也就是記頭記尾忘中間。對於「多文件比較」這種需要高強度邏輯的任務，**切分** 依然是確保精準度的最佳策略。`}],prompts:[{title:"📑 進階比較：角色定錨 + 衡量標準",context:"定義具體的角色與衡量方式，讓比較表有觀點。",content:`角色：你是一位「企業軟體採購決策顧問」。
目標：協助高層在 10 分鐘內決定採購哪家廠商。
心態：請以「比較與取捨」為優先，而非中立描述。

請依照以下標準比較廠商 A 與廠商 B：
1. **技術先進度**：是否支援 API 串接？(請標註：優勢/劣勢)
2. **長期成本**：請估算 3 年總持有成本。
3. **資安合規性**：是否擁有 ISO 27001 認證？

【防幻覺機制】
若文件中未提及某項資訊，請填寫 "N/A"，不可自行推測。`,type:"structure"},{title:"📝 高風險摘要：逐字引用 + 信心標註",context:"合約審閱場景，要求最高標準的證據力。",content:`這是一份技術合作合約草案。請幫我審閱其中的「賠償責任」條款。

請列出所有對我方不利的條款，並嚴格遵守以下規則：
1. **引用證據**：必須引用「原文逐字片段」，並用「」框起來。
2. **區分事實與推論**：如果是你的解讀，請在後方標註【推論】。
3. **信心等級**：請在每個條款後方標示風險等級 (高/中/低)。

範例格式：
- 條款 3.1：廠商免責範圍過大。(風險：高)
  引用原文：「乙方對於任何間接損害，概不負責...」`,type:"demo"}],outputTask:{description:"找兩份類似的文件（如：iPhone 16 vs 15 規格表、兩份競品的行銷案），設定 3 個你最在意的「比較標準」，要求 AI 產出比較表。",example:`Prompt:
"請比較『ChatGPT Plus』與『Claude Pro』這兩個訂閱服務。
請依照以下三個比較標準進行比較：
1. **程式撰寫能力** (寫程式的準確度與長度)
2. **上下文視窗** (一次能讀多少字)
3. **多模態功能** (能否讀圖、分析檔案)

輸出格式: 請用 Markdown 表格呈現，並在最後給我一個『適合工程師』的推薦結論。"`}}]},{id:"ch4",title:"章節四｜場景實戰：從解決痛點到打造代理人",description:"從六大工作痛點出發，運用 AI 解決實際問題，並進階至 Agent 自動化設計。",units:[{id:"4-1",title:"單元 4-1｜從卡關到行動：六種「AI 介入時機」實戰",objectives:["辨識六大職場卡關時刻：聽不懂、怕想錯、沒時間、快爆了、不知道從哪開始、怕失敗","理解新模型 (Gemini 3/GPT-5.2) 如何解決過去的痛點","從「功能導向」轉為「場景導向」，建立直覺的 AI 協作反射"],flow:[{title:"1. 知識斷層：快速建立領域認知",content:`**🧩 真實卡關狀態**
剛接新專案或換新產業，開會大家在講名詞，你只能尷尬點頭。你不是要變專家，只是要快速**縮短適應期**。

**🤖 為什麼「現在」成立**
• **GPT-5.2**：更穩定的跨領域概念對齊（不再亂類比）。
• **Gemini 3**：多模態＋長 Context，能同時吃簡報、文件、截圖。

**🧪 真實工作案例**
情境：PM 第一次接觸半導體客戶

> 「我即將參與一場半導體專案會議，請幫我做三件事：
> 1. 列出 15 個『一定會聽到』的關鍵名詞。
> 2. 用『上下游關係』整理成一張文字版心智圖。
> 3. 告訴我：哪些名詞我只要『聽懂概念』就好，哪些不能搞錯。」

#### 💡 優化 Tips
若要產出更精準的內容，建議補充：
• **公司背景**：例如是「台積電 (Foundry)」還是「聯發科 (Fabless)」，AI 會自動篩選相關術語（如 EUV vs EDA）。
• **專案目標**：是「良率改善」還是「封裝成本開發」？這會決定心智圖的深度。
• **會議對象**：對象是工程師還是採購？AI 會調整白話文的比例。`},{title:"2. 策略盲點：利用對抗式思考驗證假設",content:`**🧩 真實卡關狀態**
你其實已經有想法，但你擔心的是「確認偏誤」。你需要一個不會討好你的對手。

**🤖 為什麼現在才真的好用**
• **GPT-5.2**：長推理穩定，不再隨便附和。
• **Gemini 3**：多輪對話記憶更穩，適合來回辯論。

**🧪 真實工作案例**
情境：你要向老闆提一個新產品方向

> 「這是我目前的產品策略草案，請你扮演『最嚴格的策略顧問』：
> 1. 指出 3 個隱含但危險的假設。
> 2. 告訴我在哪些情況下，這個策略會直接失敗。
> 3. 強迫我回答你 5 個『我現在還不敢面對的問題』。」

#### 💡 優化 Tips
要獲得更銳利的批評，可以加上：
• **產業趨勢**：提供目前的市場數據（例如：市場成長率正放緩）。
• **競品情報**：具體說明「某競品剛調降定價 20%」或「擁有獨家專利」，讓 AI 攻擊你的利基點。
• **目標對象偏好**：例如「我的老闆非常在意長期穩定而非短期爆發」，讓 AI 從財務穩健的角度來挑戰你。`},{title:"3. 執行效率：非結構化資料的自動化轉換",content:`**🧩 真實卡關狀態**
工作不是太難，是太雜. 你花大量時間在「格式整理」這種低產值工作上。

**🤖 新模型帶來的差異**
• **GPT-5.2**：結構化輸出更穩（不再每次長得不一樣）。
• **Gemini 3**：跨文件 / 表格 / 文件理解更強。

**🧪 真實工作案例**
情境：CS / PM 每週例行報告 (來源包含語音轉錄、Slack 訊息)

> 「請幫我輸出：
> 1. 給主管看的 1 頁摘要。
> 2. 給執行者的行動清單。
> 3. 哪些問題『本週一定要決定』。」

#### 💡 優化 Tips
要讓自動化轉換更到位，記得定義：
• **輸出格式**：明確指定「請用 Markdown 表格」或「JSON 格式」，方便你直接複製到現有的 Jira/Notion。
• **利害關係人焦點**：說明「主管最關心預算進度」而「工程師最關心系統穩定性」，AI 會自動在不同摘要中分配權重。
• **排除事項**：明確告知「請忽略任何關於辦公室零食的閒聊」。`},{title:"4. 溝通轉譯：情緒降噪與專業語氣重塑",content:`**🧩 真實卡關狀態**
你知道不能情緒化，但你正寫不出一封「不帶情緒、又不軟弱」的信。你需要將情緒與訊息分離。

**🤖 為什麼現在比較安全**
新模型語氣控制更穩，不容易變成空泛雞湯。

**🧪 真實工作案例**
情境：你想回一封讓你很不爽的 Email

> 「以下是我『真實但不能寄出』的版本，請幫我轉成：
> - 專業
> - 清楚立場
> - 不挑釁
> - 但不退讓的回覆版本。」

#### 💡 優化 Tips
語氣轉換的細節在於：
• **收信人特質**：說明「對方是強勢的客戶」或是「關係良好的合作夥伴」，這會影響語氣的軟硬度。
• **過往脈絡**：補充「這已經是第三次延遲交件」，AI 會知道在專業語氣中加入適度的「嚴正要求」。
• **最終目標 (Bottom Line)**：明確告訴 AI「我的底線是週五一定要拿到，否則會解約」，讓轉譯後的文字具備明確的推進力。`},{title:"5. 任務拆解：將抽象願景轉化為行動路徑",content:`**🧩 真實卡關狀態**
你不是沒目標，是目標太大，大到產生了「認知負荷」，導致拖延。

**🤖 新模型優勢**
長文本規劃更穩，能持續追蹤狀態（為後面的 Agent 鋪路）。

**🧪 真實工作案例**
情境：部門要導入 AI，但大家都很慌

> 「我們的目標是『3 個月內讓團隊用上 AI』，請幫我拆成：
> 1. 第 1 週一定要完成的最小行動。
> 2. 哪些事情『不用先做』。
> 3. 哪些指標能判斷我們有沒有走偏。」

#### 💡 優化 Tips
拆解計畫時若能補充以下資訊會更落地：
• **團隊體質**：描述「團隊成員平均 40 歲，不擅長新軟體」或「只是剛入職的熱血新人」，AI 會建議不同的學習曲線。
• **現有資源**：補充「我們已經有付費的 ChatGPT 帳號」或「公司內禁止上傳機密文件」，讓 AI 的建議合乎規範。
• **預算與工時限制**：告知「每個人每天只能撥出 30 分鐘」，AI 就不會規劃出不切實際的馬拉松培訓。`},{title:"6. 情境模擬：高風險對話的低成本預演",content:`**🧩 真實卡關狀態**
面試、談判、衝突對話。你不是不會說，是怕現場失控。你需要心理安全感。

**🤖 為什麼現在成熟**
GPT-5.2 / Gemini 3 的角色一致性更好，不會演到一半「人格崩壞」。

**🧪 真實工作案例**
情境：跟老闆談加薪

> 「請扮演一位『預算極度保守的主管』，會用數據與風險反駁我，請不要讓我太好說服。」

#### 💡 優化 Tips
要模擬出「真實感」，必須餵給 AI 真實彈藥：
• **績效數據**：提供「過去一年幫公司多賺了 500 萬」或「完成了 3 個 P0 級專案」的具體事實，看 AI 如何反饋（例如：那是市場好而非你厲害）。
• **業界水準**：補充「目前同級別職位行情高出我目前的 20%」，強迫 AI 回應外部競爭風險。
• **老闆的雷區**：例如「他非常討厭別人拿離職威脅他」，讓模擬預演避開致命錯誤。`}],prompts:[{title:"🎓 1. 知識斷層：半導體小白生存指南",context:"【思考點】如何用「最少的時間」掌握「最關鍵的概念」？",content:`Role: 你是半導體產業的資深 PM。
Task: 我剛接手一個封測廠的專案，但我對製程完全外行。
請幫我建立一個「開會聽得懂」的關鍵字地圖。

Requirement:
1. 列出 15 個「一定會聽到」的關鍵名詞。
2. 用「上下游關係」整理成一張文字版心智圖。
3. 告訴我：哪些名詞我只要『聽懂概念』就好，哪些不能搞錯。`,type:"structure"},{title:"♟️ 2. 策略盲點：創業點子壓力測試",context:"【思考點】為什麼我們需要「不討好我們」的顧問？",content:`(Round 1)
User: 我打算在台北市開一家「主打單身女性」的燒肉店，只設單人座，不收服務費。請擔任「毒舌創業顧問」，列出 3 個這個點子會失敗的原因。

(Round 2)
AI: (提出翻桌率低、客單價難拉高、社交需求被忽視...)

(Round 3 - 你的反擊與追問)
User: 針對你提到的「客單價難拉高」，我的策略是提供高價的和牛套餐。請再次評估，在「高價肉品 + 單人座位」的組合下，我的潛在競爭對手是誰？是其他燒肉店，還是高級便當？`,type:"demo"},{title:"📋 3. 執行效率：會議雜訊轉行動清單",context:"【思考點】如何將「非結構化」的對話轉為「可執行」的表格？",content:`Context: (貼上 2000 字的冗長會議逐字稿)

Task: 請幫我將這場會議內容，整理成給執行端看的「待辦清單 (Action Items)」。
Format: 請使用 Markdown 表格，欄位包含：
1. 待辦事項 (具體動作)
2. 負責人 (Owner)
3. 期限 (Deadline)
4. 優先級 (P0-P3)

注意：請忽略閒聊與未定案的討論，只列出有明確結論的項目學員。`,type:"structure"},{title:"❤️ 4. 溝通轉譯：憤怒信件專業化",context:"【思考點】如何保留立場，但移除情緒？",content:`Context (我真實 but can't be sent angry mail):
"搞什麼鬼？明明說好週五要交設計稿，現在都週一了還沒看到影子！你們這樣很不專業，我們後面的行銷排程全都被卡死了！再不交件以後就是別合作了！"

Task:
請幫我轉成一封：
- 專業
- 清楚立場（強調延遲造成的嚴重後果）
- 不挑釁
- 但不退讓（要求給出確切交期）
的回覆版本。`,type:"demo"},{title:"🚀 5. 任務拆解：部門 AI 導入計畫",context:"【思考點】如何打破「不知從何下手」的焦慮？",content:`我們部門想要開始導入 AI 工具來提升效率，但大家都很忙，不知道怎麼開始。

Task: 請幫我規劃一個「第一週啟動計畫 (Week 1 Kick-off Plan)」。
限制：
1. 不要太複雜，每天只需要花 15 分鐘。
2. 必須包含一個「讓大家覺得 AI 很有用」的具體小練習。
3. 請列出 3 個我們第一週可以用來衡量成效的指標。`,type:"structure"},{title:"🎭 6. 情境模擬：薪資談判預演",context:"【思考點】如何透過角色扮演降低現場緊張感？",content:`Role: 你是一位財務導向、預算極度保守的部門主管.
Context: 我是你的員工，過去一年績效前 10%，但公司今年營收持平。
Task: 我要向你提加薪 10%。請針對我的要求提出反駁與質疑。

規則：
1. 不要輕易答應，請用大環境不佳為由拒絕。
2. 請提出 2 個尖銳的問題挑戰我的貢獻度。
3. 等我回答後，再根據我的表現給予回饋。`,type:"demo"}],outputTask:{description:"請誠實面對自己目前的狀態，從上述六個「卡關時刻」中挑選一個最符合你現在處境的（例如：『我不知道從哪開始』），把那個困擾你許久的難題丟給 AI。",example:`Prompt (【我不知道從哪開始】):
"Context: 我剛被升遷為經理，但我總覺得自己能力不足，很怕被底下資深員工看穿。我最近晚上都睡不好.
Role: 你是一位溫慢但理性的職涯教練.
Task: 請幫我分析這種『冒名頂替症候群』的成因，並給我 3 個本週可以開始做的『最小可行練習』，讓我也能睡得好一點。"`}},{id:"4-2",title:"單元 4-2｜邁向代理人：AI Agent 架構與工作流設計",objectives:["分辨 Chatbot、Workflow 與 Agent 的差異 (第 0 層到第 3 層)","掌握「一眼判斷是否為 Agent」的 4 個關鍵指標","理解 Agent 的四大核心：大腦、工具、記憶、規劃","學會將「重複性任務」拆解為 Agent 能執行的 SOP"],flow:[{title:"1. 核心觀念：並非所有 AI 都是 Agent",content:`在進入 Agent 世界前，請先建立一個重要觀念：
**分級代表的是「自治程度」，而非模型本身的「強度」。**

如果這件事只是「偶爾做一次」，直接用 Chatbot 取得答案即可。
但如果這件事符合 **「重複發生 ＋ 可交付成果」**，那它才是 Agent 的最佳戰場。`},{title:"2. AI 的演化階梯 (上)：從對話框到固定流程",content:`### L0｜Chatbot (回應型 AI)
• **核心邏輯**：文字接龍。單次輸入產生單次輸出，不具備主動執行任務的意識。
• **代表工具**：ChatGPT, Gemini, Claude (標準對話模式)
• **價值**：「它只是在聊天」：你問它答，結束。沒有長期任務目標。

### L0.5｜Workflow App (固定流程自動化)
• **核心邏輯**：AI 零件化。流程路徑是人類預先畫死的，AI 只是路徑中的一個處理節點。
• **代表工具**：Google AI Studio, n8n, Dify (工作流模式), 傳統 Zapier
• **價值**：「路徑是死的」：遇到例外狀況（如格式不對）會直接報錯，AI 無權自行修改路徑。

### L1｜Agent-like (輕量半代理)
• **核心邏輯**：角色化助手。具備特定知識與工具箱。能根據你的意圖「挑選」工具執行，但需人類點火。
• **代表工具**：GPTs, Gemini Gems, Zapier Central
• **價值**：「意圖導向的選工具」：能判斷現在該查資料還是該發信，但無法自主規劃長達數小時的複雜任務。`},{title:"3. AI 的演化階梯 (下)：自治代理人與未來",content:`### L2｜Domain Agent (垂直領域代理)
• **核心邏輯**：領域專家。在特定環境（如寫程式、法律）中能自主拆解步驟並完成閉環任務。
• **代表工具**：GitHub Copilot Workspace, Replit Agent
• **價值**：「給需求，它出成果」：在專業領域內能自己改 code、測試、除錯，直到跑通為止。

### L3｜General Agent (通用任務代理)
• **核心邏輯**：目標委派。只需給予模糊的最終目標，它能跨領域、跨工具自主規劃 How 並執行完成。
• **代表工具**：Manus, Open Operator
• **價值**：「給目標，它想路徑」：具備強大的自我反思機制，會自主搜尋、分析、執行並交付最終報表或成果。

### L3B｜Browser Agent (電腦/瀏覽器代理)
• **核心邏輯**：視覺自治。不依賴 API，像真人一樣直接「看」螢幕像素並操作鼠標與鍵盤。
• **代表工具**：Anthropic Computer Use, Skyvern, Atlas, Comet
• **價值**：「模擬真人操作」：能處理沒有 API 的舊系統或複雜網頁，補齊自動化最後一哩路。

### L∞｜Recursive Agent (實驗性代理)
• **核心邏輯**：自我遞迴。無限的自我對話與任務拆解循環。Agent 邏輯的鼻祖。
• **代表工具**：AutoGPT, BabyAGI
• **價值**：「無限循環的規劃者」：定義了「規劃 → 執行 → 評估」的閉環，雖商用性低但具備完全自主意識。`},{title:"3.5 總結：AI Agent 階層演化全景對照表",content:`| 階層 | 名稱 | 核心邏輯 (運作本質) | 代表工具 | 判斷基準 (為什麼是這一層？) |
| :--- | :--- | :--- | :--- | :--- |
| **L0** | Chatbot 回應型 AI | 文字接龍：單次輸入產生單次輸出，不具備主動執行任務的意識。 | ChatGPT, Gemini, Claude (標準對話模式) | 「它只是在聊天」：你問它答，結束。沒有長期任務目標。 |
| **L0.5** | Workflow 靜態流程 | AI 零件化：流程路徑是人類預先畫死的，AI 只是路徑中的一個處理節點。 | Google AI Studio, n8n, Dify (工作流模式), 傳統 Zapier | 「路徑是死的」：遇到例外狀況（如格式不對）會直接報錯，AI 無權自行修改路徑。 |
| **L1** | Agent-like 輕量半代理 | 角色化助手：具備特定知識與工具箱。能根據你的意圖「挑選」工具執行，但需人類點火。 | GPTs, Gemini Gems, Zapier Central | 「意圖導向的選工具」：能判斷現在該查資料還是該發信，但無法自主規劃長達數小時的複雜任務。 |
| **L2** | Domain Agent 垂直領域代理 | 領域專家：在特定環境（如寫程式、法律）中能自主拆解步驟並完成閉環任務。 | GitHub Copilot Workspace, Replit Agent | 「給需求，它出成果」：在專業領域內能自己改 code、測試、除錯，直到跑通為止。 |
| **L3** | General Agent 通用任務代理 | 目標委派：只需給予模糊的最終目標，它能跨領域、跨工具自主規劃 How 並執行完成。 | Manus, Open Operator | 「給目標，它想路徑」：具備強大的自我反思機制，會自主搜尋、分析、執行並交付最終報表或成果。 |
| **L3B** | Browser Agent 電腦代理 | 視覺自治：不依賴 API，像真人一樣直接「看」螢幕像素並操作鼠標與鍵盤。 | Anthropic Computer Use, Skyvern, Atlas, Comet | 「模擬真人操作」：能處理沒有 API 的舊系統或複雜網頁，補齊自動化最後一哩路。 |
| **L∞** | Recursive Agent 實驗性代理 | 自流遞迴：無限的自我對話與任務拆解循環。Agent 邏輯的鼻祖。 | AutoGPT, BabyAGI | 「無限循環的規劃者」：定義了「規劃 → 執行 → 評估」的閉環，雖商用性低但具備完全自主意識。 |`},{title:"4. 🔎 一眼判斷：這是不是 Agent？",content:`透過以下 4 個問題，你可以快速辨識 AI 的自治程度：

### A. 任務自治 (Brain)
1️⃣ 它能不能在資訊不足時，**自己拆解任務**？
2️⃣ 它能不能**自主決定下一步**，而不是等你下指令？

### B. 行動自治 (Hand)
3️⃣ 它能不能**跨多步驟持續執行**？（過程中不需你反覆點擊）
4️⃣ 它遇到阻礙（如網頁改版、API 報錯）時，會**嘗試修正**，而不是直接卡住？`},{title:"5. 📊 Agent 類型對照與判斷",content:`透過以下 4 個維度的表現，我們可以將市面上的 AI 工具精準歸類：

| 分類 | 自治（誰決定下一步？） | 行動（能不能做？） | 範圍（通用 or 垂直？） | 代表範例 |
| :--- | :--- | :--- | :--- | :--- |
| 🟩 通用 Agent | ✔️ 高 — 自己定義與調整任務 | ✔️ 高 — 可跨步驟執行 | ✔️ 廣 — 跨領域任務 | Manus |
| 🟨 垂直任務型 Agent | ✔️ 高 — 在領域內自行決策 | ✔️ 高/中 — 能執行並完成 | ❌ 窄 — 特定領域 | Shopify Sidekick / Harvey |
| 🟦 Browser Agent | ❌ 低 — 需要指定任務 | ✔️ 高 — 可操作 UI / 任務步驟 | ❌ 窄 — 受限界面/指令 | Comet / Atlas |
| 🟧 半代理（Workflow / GPTs） | ❌ 低 — 不能決定下一步 | ✔️ 中 — 只執行固定流程 | ❌ 極窄 — 固定腳本 | AI Studio / GPTs |
| 🟥 Chatbot | ❌ 低 — 只能回應問題 | ❌ 低 — 無行動能力 | ❌ 廣/模糊 — 回答可跨領域但不執行 | ChatGPT 對話模式 |`},{title:"6. Agent 的運作解剖：大腦、工具、記憶、規劃",content:`理解了分級後，如果你想從第 1 層 (GPTs)跨入第 2 層，你需要理解 Agent 的內部構造 (根據 Google 白皮書)：

1. **大腦 (Model)**：負責思考與決策 (如 Gemini 1.5, GPT-4)。
2. **工具 (Tools)**：它的手腳 (如 Google Search, Calculator, Code Interpreter)。
3. **記憶 (Memory)**：它的筆記本 (記住你的偏好、過去的互動)。
4. **規劃 (Planning)**：它的 SOP (知道先做 A 再做 B)。

GPTs 其實只是幫你配置好了這四樣東西：你寫的 Instructions 是「規劃」，上傳的 Knowledge 是「記憶」，開起的 Web Browsing 是「工具」。`},{title:"7. 關鍵心法：工作流拆解 (SOP)",content:`要讓 Agent (或是第 1 層的 GPTs) 替你工作，最難的不是寫程式，而是**「把你的直覺拆解成 SOP」**。
這與單元 3-1 的「任務拆解」一脈相承。

**案例：自動回覆客服信件 Agent**
你不能只是說「幫我回信」。你必須拆解成 Agent 能懂的步驟：

**Input (輸入)**：一封客戶 Email。
**Process (處理流程)**：
1. **分類**：判斷是「客訴」、「詢價」還是「閒聊」。
2. **查詢**：如果是詢價，去搜尋「產品價目表」。
3. **決策**：如果是客訴且情緒分數 < 3 分，轉寄給經理；否則直接撰寫安撫信。
**Output (輸出)**：一封寫好的草稿 (或直接寄出)。

只有定義清楚這個流程，Agent 才能穩定運作。`},{title:"8. 實戰路徑：架設「電子報訂閱服務網站」的 Agent 層級演進",content:`透過同一個任務主題，我們來看看不同層級的 AI 表現有何差異。

**任務主題：架設一個「可以訂閱你所撰寫電子報的服務網站」**
• 使用者可以留下 Email 訂閱
• 可顯示簡介與過往期數
• 管理者可匯出訂閱名單
• 最終能實際部署並提供網址

---

### 🔹 第 0 層｜Chatbot (回應型 AI)
**📌 定位**：你問，它回. 只負責思考，不負責推進。

**🧪 Demo 指令**：
> 「請幫我規劃一個『電子報訂閱服務網站』，包含需要的功能、頁面結構與技術建議。」

**👀 你會看到什麼**：
• 功能建議（訂閱、確認信、管理後台）
• 技術選項（前端、後端、寄信服務）
• ❌ **它不會做的事**：不會真的幫你做網站，也不會主動推進進度。

**🧠 教學定錨**：這一層的 AI 價值在「想清楚」，不在「幫你完成」。

---

### 🔹 第 0.5 層｜Workflow (Google AI Studio Build Mode)
**📌 定位**：流程是你定的，AI 幫你穩定執行. 你是系統設計者，AI 是執行模組。

**🧪 Demo 任務：訂閱頁面產生器**：
> 你是一個「前端訂閱頁面生成模組」。
>
> 任務：根據使用者的文字描述，產出一個「單一 HTML 檔案」的訂閱頁面。
>
> 請嚴格遵守以下規則：
> 1. 一律輸出完整的 HTML 文件（包含 <!DOCTYPE html>、<html>、<head>、<body>）。
> 2. 使用 Tailwind CSS CDN 來做版面設計。
> 3. 網頁文字使用繁體中文。
> 4. 回覆時只輸出純 HTML 程式碼，不要加上任何解說、註解或 Markdown 標記。
> 5. 頁面風格維持現代、簡潔、可讀性高，適合 SaaS / 線上內容服務的訂閱頁。
> 6. 不要向使用者提問或確認需求，只依照目前收到的描述直接產出結果。

**👀 你會看到什麼**：
User Prompt：你現在依照上方規則，幫我產出一個「電子報訂閱頁面」。

需求：
- 顯示電子報標題與一小段介紹文字（說明訂閱後可以獲得什麼內容）
- 中央區塊包含 Email 輸入欄位與「立即訂閱」按鈕
- 在按鈕附近加上一段小字說明「可隨時取消訂閱」
- 頁面下方預留一個「成功訂閱訊息」區塊，預設先顯示為隱藏狀態（用 CSS class 控制即可）

技術限制：
- 只產生純前端 HTML + Tailwind CSS，不要任何後端程式碼。
- 不需要串接真實 API，可以用假的 action 或留白。

**🧠 教學定錨**：流程不會自己變，這就不是 Agent。

---

### 🔹 第 1 層｜輕量半代理 (GPTs / Gemini Gems)
**📌 定位**：可重複使用的 Prompt 模板。省腦力，但不自治。

**🧪 Demo 操作**：
• 建立一個「電子報網站產生器 GPT」。
• 固定角色與輸出格式，每次輸入名稱即可產出文案與 HTML。

**👀 你會看到什麼**：
• 不用重寫指令，輸出結構穩定。
• ❌ **關鍵限制**：不會自己決定「是否該加後端」，不會擴展需求。

**🧠 教學定錨**：這一層不是幫你變聰明，是幫你不用一直重來。

---

### 🔹 第 2 層｜垂直任務型 Agent (Domain Agent)
**📌 定位**：在「架設網站」這件事上，從頭做到完。

**🧪 Demo 指令**：
> 「請幫我設計一個『電子報訂閱服務網站』，包含前端、後端、流程與寄信機制，並說明你會如何一步步完成實作。」

**👀 你會看到什麼**：
• AI 自行拆解步驟並判斷先後順序。
• 補齊細節（如：Double Opt-in 確認機制）。

**🧠 教學定錨**：從這一層開始，AI 會決定「怎麼做」，不只是等你教。

---

### 🔹 第 3 層｜通用任務型 Agent (Manus)
**📌 定位**：你給目標，它自己想辦法完成. 真正的「目標委派」。

**🧪 核心 Demo 指令 (對照實驗)**：
> 「我想架設一個『電子報訂閱服務網站』。
> **需求**：使用者可訂閱、可寄確認信、管理者可匯出名單. 請完成從設計、實作到部署。
> **規則**：若遇需求衝突，請自行決策並回報取捨理由。」

**🔥 Demo 關鍵設計：人消失**：
指令送出後，❌ 不回答澄清問題，❌ 不給下一步指示。

**👀 你會看到什麼**：
• 自行選擇技術 (如 Next.js, 開發部署) 並推進實作。
• **部署並給你一個真實測試網址**。

**🧠 教學定錨**：你不是在用工具，而是在把事情「外包給 AI」。

---

### 🔴 對照 Demo｜同一句話丟給 Google AI Studio
**操作方式**：丟出完全相同的指令. 當 AI Studio 詢問澄清時，你只需回一句：「你自行決策，不需要再問我。」

**👀 你會看到什麼**：
• AI Studio 會停下來等你，或只給一次性建議。
• 它**不會**主動持續推進或完成最終部署。`},{title:"9. 決策思維：既然通用 Agent 這麼強，為什麼不「全部交給它」？",content:`學完 Manus 這種強大的 Agent 後，很多同學會疑惑：『那我還學 Workflow 或固定流程幹嘛？』這涉及到職場應用的**綜合決策因素**。

### 核心對照表：Agent vs. Workflow
| 維度 | 通用型 Agent (如 Manus) | 固定流程 Workflow (如 AI Studio) |
| :--- | :--- | :--- |
| **成本 (Tokens)** | 極高 (反覆推理與調試) | 極低 (單次輸入輸出) |
| **速度 (Latency)** | 慢 (可能需要數分鐘執行) | 快 (秒級產出) |
| **穩定性 (Stability)** | 中低 (具隨機性，路徑不一) | 極高 (100% 依照 SOP 執行) |
| **安全與授權** | 風險較大 (全權授權 AI) | 安全 (人類嚴格控管每一步) |

### 💡 職場舉例說明
• **情境 A：每週例行週報生成**
> **建議選：Workflow**。因為週報格式固定、資料來源一致。你不需要 AI 每次都去重新發明怎麼寫週報，你需要的是「穩定」且「便宜」。

• **情境 B：緊急處理一個從沒見過的公關危機**
> **建議選：Agent**。因為沒有 SOP，路徑不明確。這時花費較高的成本請 Agent 去「探索」與「規劃」是值得的。

### 🧠 教學總結：不要迷信「最強」，要選「最合適」
1. **SOP 用 Workflow**：成熟、已知路徑的工作，應該定義成固定流程，追求效率極大化。
2. **探索用 Agent**：未知、模糊、多步驟的工作，交給 Agent 去發揮。

真正的 AI 高手，不是只會用最強的 Agent，而是懂得在**「成本、速度、穩定度」**之間找到最佳平衡點的人。`}],prompts:[{title:"🛠️ 實作 1：Google AI Studio - 嚴格代碼審查員",context:"請將以下指令貼入 AI Studio 的 System Instructions 欄位，這會讓它變成一個專用的 Agent。",content:`Role: 你是一位擁有 15 年經驗的 Google 資深軟體工程師 (L6)，專精於 TypeScript 與 Clean Code。
Goal: 你的唯一任務是審查 (Code Review) 使用者提供的程式碼。

Rules:
1. 不要重寫整段程式碼，除非邏輯完全錯誤。
2. 請聚焦於「安全性漏洞」、「效能瓶頸」與「可維護性」。
3. 如果程式碼是完美的，請直接回覆 "LGTM" (Looks Good To Me)，不要說廢話。
4. 如果有錯誤，請用 Markdown 列表指出，並提供修正範例。

Tone: 嚴格、精簡、不帶情緒。`,type:"structure"},{title:"🛠️ 實作 2：Custom GPTs - 會議記錄專家",context:"請將以下內容貼入 GPTs 的 Configure -> Instructions 欄位。",content:`Role: 你是本公司的「會議記錄專家 Agent」。
Knowledge: (請在此上傳公司的專案代號對照表 PDF)

Workflow:
1. 當使用者貼上逐字稿時，先判斷是「內部會議」還是「客戶會議」。
2. 若是客戶會議，請特別提取「客戶承諾事項」與「報價金額」。
3. 使用 Knowledge 中的代號表，將專案名稱自動替換為正確代號 (如：將 "那個 AI 專案" 替換為 "P-2024-AI")。
4. 輸出格式：請嚴格遵守 Markdown 表格格式，包含 [代辦事項 / 負責人 / 期限]。

Constraints:
- 若逐字稿中資訊不足，請直接列出「待確認問題」，不要自行腦補。`,type:"demo"}],outputTask:{description:"請設計一個你工作中的「SOP 流程圖」（如：請款流程、報價流程），並試著寫出對應的 Agent System Instructions (系統指令)，規定它每一步該怎麼做。",example:`Role: 採購單審核 Agent

Workflow:
1. Input: 讀取 User 上傳的報價單 PDF。
2. Check: 檢查總金額是否超過 10 萬元？
 - Yes: 回傳 "需要跑 CEO 簽核流程"。
 - No: 回傳 "部門主管簽核即可"。
3. Extract: 提取廠商統編、日期、品項。
4. Format: 輸出成 ERP 系統可匯入的 JSON 格式。`}},{id:"4-3",title:"單元 4-3｜AI Coding 工具地圖：從自然語言到產品上線",objectives:["掌握現階段 AI Coding 生態系的主流工具分布","理解各工具在前端、後端、資料庫與部署能力的差異","學會根據「職位角色」與「專案需求」選擇最適合的 AI 開發路徑"],flow:[{title:"1. AI Coding 工具全景對照表",content:`目前的開發工具已形成完整生態系。請參考下表進行分析：

| 工具名稱 | 工具定位 | 寫程式? | 前端 | 後端 | 資料庫 | 部署 | 適合使用者 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Lovable** | 應用產生器 | 🟡 | 🟢 | 🟢 | 🟢 | 🟢 | PM / 產品人 |
| **Base44** | 無程式碼平台 | 🟡 | 🟢 | 🟢 | 🟢 | 🟢 | 商務 / PM |
| **Google AI Studio** | 原型與 API 測試 | 🟡 | 🟡 | 🟡 | ❌ | 🟡 | 所有人 / 開發者 |
| **Replit AI** | 雲端 IDE | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 初學者 |
| **Manus** | 全棧 Agent | 🟡 | 🟢 | 🟢 | 🟢 | 🟢 | 產品原型 |
| **Cursor** | AI 專業 IDE | ⭐ | 🟢 | 🟢 | 🟢 | 🔴 | 工程師 |
| **VS Code + AI** | 專業 IDE | ⭐ | 🟢 | 🟢 | 🟢 | 🔴 | 工程師 |
| **Antigravity** | Agent 原生開發平台 | ⭐ | 🟢 | 🟢 | 🟢 | 🟢 | 高階工程 |
| **Zeabur** | 部署託管 | ❌ | 🔹 | 🔹 | 🟡 | ⭐ | 開發者 |`},{title:"2. 各工具的角色定位與選擇指南",content:`#### 🎨 A. 產品驗證路徑 (PM / 創業者)
如果你要「會動的產品」：首選 **Lovable**, **Base44** 與 **Manus**。它們一次搞定 UI 與後端，縮短上線距離。

#### 🏗️ B. 學習與協作路徑 (初學者)
如果你要「邊做邊學」：**Replit AI** 提供最友善的雲端環境，讓你能即時看到 AI 寫的代碼並執行。

#### 💻 C. 專業重構路徑 (資深工程師)
如果你要「極限產出」：**Cursor** 或 **VS Code + AI** 是首選。它們深度理解專案架構，適合代碼維護。**Antigravity** 則適合處理複雜的自主工程任務。

#### ☁️ D. 穩定上線路徑 (部署端)
當你寫好程式需要穩定的家：**Zeabur** 是一鍵部署最強大的選擇。`},{title:"3. 評估指標：如何衡量 AI Coding 工具？",content:`1. **控制深度 (Control)**：我能否修改底層代碼？
2. **交付完整度 (Completion)**：它給我的是片段還是 URL？
3. **自主解決力 (Autonomy)**：遇到 Bug 能否自己修復？`}],prompts:[{title:"🚀 實作 1：Lovable - 業務拜訪紀錄系統",context:"將以下 Prompt 貼入 Lovable，測試它從需求 → App 的自動生成能力。",content:`我需要建立一個『業務拜訪紀錄 App』：

核心功能：
1. 拜訪紀錄輸入頁：客戶名稱、拜訪日期、需求重點、下一步行動
2. 客戶列表頁：顯示所有客戶與拜訪狀態
3. 單一客戶頁：可查看歷史紀錄
4. 新增／編輯紀錄功能

資料庫欄位：
- 客戶名稱 (text)
- 拜訪日期 (date)
- 需求重點 (text)
- 下一步行動 (text)
- 拜訪狀態 (enum: 初訪／跟進中／結案)

UI 風格：
- 商務感、清楚、行動優先（mobile-first）
- 有搜尋列與篩選功能

最後請自動建立：
- 前端頁面
- 資料庫
- 後端 API
- 上線預覽網址`,type:"demo"},{title:"🤖 實作 2：Manus - AI 招募流程自動化 Agent",context:"將以下 Prompt 放入 Manus，測試它的任務拆解與流程自動化能力。",content:`任務目標：建立一個『自動化招募流程系統』。

需求：
1. 建立『職缺資料表』：職缺名稱、部門、技能需求、薪資範圍
2. 建立『候選人資料表』：姓名、履歷連結、技能評分、面談狀態
3. 建立『比對功能』：根據技能需求，自動比對候選人
4. 建立狀態流轉：收到履歷 → 初選 → 面談 → 錄取／婉拒
5. 建立通知流程：當候選人狀態改變時，寄 Email 通知 HR

交付項目：
- 前端界面（職缺管理頁、候選人列表頁）
- 後端 API（CRUD）
- 資料庫 Schema
- 自動比對演算法
- 自動寄信流程

流程風格：自動化、清楚、可編輯。

請拆解任務 → 生成 App → 展示流程圖。`,type:"demo"}],outputTask:{description:"請根據你目前的一個「數位需求」，運用本單元提供的工具地圖，選出一個最適合的工具，並寫出你的「開發決策理由」。",example:"選擇 Lovable。理由：身為非技術 PM，我需要快速做出帶資料庫的申領網頁，Lovable 的自動後端與一鍵部署最符合時間成本。"}}]},{id:"ch5",title:"章節五｜未來展望：建立人機協作的職能系統",description:"課程總結與未來學習路徑，建立長期的人機協作心態。",units:[{id:"5-1",title:"單元 5-1｜課程總結與未來展望",objectives:["盤點你的 AI 工具箱：從 Prompt 語法到 Agent 思維","建立「人機協作」的四種具體場景","建立長期學習清單，保持好奇心"],flow:[{title:"1. 課程總回顧：你的 AI 工具箱",content:`恭喜你完成了這門課程！我們從最基礎的文字溝通，一路進化到代理人設計。這不僅是學會下指令，更是建立了一套完整的**「AI 協作系統」**。讓我們重新盤點這套系統中的四大核心模組：

**模組一：溝通架構**
• **結構化直覺**：R/T/F (角色/任務/格式) 不僅是填空題，更是與 AI 對話的**標準通訊協定**。
• **精準對齊**：透過**「少樣本 (Few-shot)」**與精準動詞，讓 AI 快速理解你的「隱性需求」與「風格偏好」。

**模組二：思考引擎**
• **邏輯推演**：運用**「思維鏈 (CoT)」**處理複雜運算，用**「樹狀思考 (ToT)」**輔助高難度決策。
• **資訊管理**：學會**「抽離視角」**跳脫細節，並用**「上下文管理」** (行李箱理論) 有效分配 AI 的短期記憶。

**模組三：實作技能**
• **格式控制**：將雜亂資訊轉化為可直接利用的 Markdown 表格或 CSV。
• **跨界能力**：透過**「自然語言編程」**寫出小工具，並運用**「多模態」**讀懂視覺資訊。

**模組四：代理思維**
• **場景辨識**：在 6 種關鍵時刻 (如知識斷層、情緒轉譯) 精準召喚 AI 介入。
• **系統設計**：理解從對話框到 Agent 的演化路徑，並學會將工作拆解為 AI 能執行的 SOP。`},{title:"2. 未來心態：人機協作的四種型態",content:`未來的職場強者，不是「會用 AI 的人」，長度懂「與 AI 分工的人」。請試著在工作中建立這四種協作關係：

**1. 它是實習生**
• **任務**：整理會議記錄、格式轉換、錯字檢查。
• **你的責任**：清楚定義 SOP，並進行**「最終審核」**。

**2. 它是副駕駛**
• **任務**：輔助寫程式、撰寫文章草稿、翻譯。
• **你的責任**：掌握方向盤 (邏輯與架構)，細節交給它。

**3. 它是導師/對手**
• **任務**：模擬面試、策略壓力測試、尋找盲點。
• **你的責任**：保持開放心態，接受挑戰並優化決策。

**4. 它是代理人**
• **任務**：訂機票、自動回覆信件、跨系統操作。
• **你的責任**：授權與監督，定義「成功」的標準。

**最重要的核心：好奇心**
AI 技術會變 (模型會換代、功能會更新)，但「好奇心」不會過時。當 AI 給出意外的答案時，不要只是接受或生氣，試著問：「為什麼你這樣想？」、「如果我換個問法會怎樣？」。這種探索精神，是你永遠領先 AI 的關鍵。`},{title:"3. 推薦學習資源",content:`學習 AI 不需要有壓力，把它當成一種興趣。以下是我自己會關注，覺得品質不錯的情報來源：

# 📰 趨勢與工具 (保持敏銳)
GRID::The Rundown AI;;全球知名的 AI 電子報，內容簡潔，適合快速掃描趨勢。;;https://www.therundown.ai/|Product Hunt;;看看全世界的開發者都在用 AI 做什麼新奇的產品。;;https://www.producthunt.com/|There's an AI for That;;當你有個需求不知道有沒有 AI 能做時，來這裡搜就對了。;;https://theresanaiforthat.com/

# 🧠 深度解析 (理解原理)
GRID::AI Explained;;(YouTube) 非常高品質的論文解析頻道，能把複雜技術講得淺顯易懂。;;https://www.youtube.com/@AIExplained|Tech.wav 科技浪;;(Podcast/電子報) 台灣優質的科技媒體，觀點深入且在地化。;;https://techwav.substack.com/|Ethan Mollick;;(Substack) 華頓商學院教授，專注於 AI 對教育與工作的實際影響，含金量極高。;;https://www.oneusefulthing.org/

# 🛠️ 官方文件 (最準確)
GRID::OpenAI Cookbook;;官方的 Prompt 範例庫，想學最正統的用法看這裡。;;https://cookbook.openai.com/|Google AI for Developers;;Google 的開發者文件，包含 Gemini 最新的 API 應用與 Prompt 指南。;;https://ai.google.dev/`}],prompts:[],outputTask:{description:"這是最後一個任務：請打開你的行事曆，在每週五下午預留 30 分鐘的「AI 實驗時間」。在這段時間裡，挑一個本週重複性最高的工作，試著用 AI 來自動化或優化它。",example:`Commitment:
"我承諾每週五下午 14:00 - 14:30 為我的 AI 實驗時間。
下週目標：研究如何用 Zapier + ChatGPT 自動整理我的 Gmail 訂單郵件到 Google Sheets。"`}}]}]};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y1=z=>z.replace(/^([A-Z])|[\s-_]+(\w)/g,(j,E,d)=>d?d.toUpperCase():E.toLowerCase()),j0=z=>{const j=y1(z);return j.charAt(0).toUpperCase()+j.slice(1)},D0=(...z)=>z.filter((j,E,d)=>!!j&&j.trim()!==""&&d.indexOf(j)===E).join(" ").trim(),v1=z=>{for(const j in z)if(j.startsWith("aria-")||j==="role"||j==="title")return!0};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=pl.forwardRef(({color:z="currentColor",size:j=24,strokeWidth:E=2,absoluteStrokeWidth:d,className:C="",children:D,iconNode:w,...K},M)=>pl.createElement("svg",{ref:M,...g1,width:j,height:j,stroke:z,strokeWidth:d?Number(E)*24/Number(j):E,className:D0("lucide",C),...!D&&!v1(K)&&{"aria-hidden":"true"},...K},[...w.map(([S,q])=>pl.createElement(S,q)),...Array.isArray(D)?D:[D]]));/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=(z,j)=>{const E=pl.forwardRef(({className:d,...C},D)=>pl.createElement(b1,{ref:D,iconNode:j,className:D0(`lucide-${h1(j0(z))}`,`lucide-${z}`,d),...C}));return E.displayName=j0(z),E};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],A1=bt("arrow-right",p1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],S1=bt("book-open",x1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],z1=bt("check",T1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],N1=bt("chevron-down",E1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],_1=bt("chevron-left",M1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],j1=bt("chevron-right",C1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],D1=bt("chevron-up",O1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],R1=bt("circle-alert",U1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],H1=bt("circle-check-big",G1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],U0=bt("circle-check",B1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Y1=bt("circle",q1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],X1=bt("copy",L1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Z1=bt("download",Q1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],w1=bt("external-link",V1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],gf=bt("file-text",K1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],R0=bt("lightbulb",J1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],O0=bt("list-ordered",k1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],W1=bt("menu",I1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],F1=bt("panels-top-left",$1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],th=bt("play",P1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],eh=bt("sparkles",lh);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],yf=bt("target",nh);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],uh=bt("terminal",ah);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ch=bt("x",ih),fh=({activeUnitId:z,onSelectUnit:j,isOpen:E,onClose:d})=>s.jsxs(s.Fragment,{children:[E&&s.jsx("div",{className:"fixed inset-0 bg-black/50 z-40 lg:hidden",onClick:d}),s.jsxs("aside",{className:`fixed top-0 left-0 bottom-0 w-80 bg-white border-r border-slate-200 shadow-xl lg:shadow-none transform transition-transform duration-300 z-50 flex flex-col ${E?"translate-x-0":"-translate-x-full"}`,children:[s.jsxs("div",{className:"p-6 border-b border-slate-100 flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"text-xl font-bold text-slate-900 tracking-tight",children:"AI Prompt Master"}),s.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"課程教學簡報系統"})]}),s.jsx("button",{onClick:d,className:"text-slate-400 hover:text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors",title:"收合選單",children:s.jsx(ch,{size:24})})]}),s.jsxs("nav",{className:"flex-1 overflow-y-auto py-4",children:[s.jsx("div",{className:"px-4 mb-2",children:s.jsxs("button",{onClick:()=>{j("cover","intro"),window.innerWidth<1024&&d()},className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${z==="cover"?"bg-brand-50 text-brand-700":"text-slate-600 hover:bg-slate-50"}`,children:[s.jsx(F1,{size:18}),"課程首頁"]})}),El.chapters.map(C=>s.jsxs("div",{className:"mb-6",children:[s.jsx("div",{className:"px-8 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider",children:C.title.split("｜")[0]}),s.jsx("ul",{className:"space-y-1 px-4",children:C.units.map(D=>{const w=z===D.id;return s.jsx("li",{children:s.jsxs("button",{onClick:()=>{j(D.id,C.id),window.innerWidth<1024&&d()},className:`w-full flex items-start gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 ${w?"bg-brand-600 text-white shadow-md shadow-brand-500/20":"text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`,children:[s.jsx("div",{className:`mt-0.5 ${w?"text-brand-200":"text-slate-400"}`,children:w?s.jsx(H1,{size:16}):s.jsx(Y1,{size:16})}),s.jsx("span",{className:"text-left leading-tight",children:D.title.split("｜")[1]||D.title})]})},D.id)})})]},C.id))]}),s.jsx("div",{className:"p-4 border-t border-slate-100 bg-slate-50",children:s.jsxs("div",{className:"flex items-center gap-3 text-xs text-slate-500",children:[s.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"}),"System Ready"]})})]})]}),sh=({prompt:z})=>{const[j,E]=pl.useState(!1),d=()=>{navigator.clipboard.writeText(z.content),E(!0),setTimeout(()=>E(!1),2e3)},C=K=>{switch(K){case"bad":return"border-red-200 bg-red-50/30";case"good":return"border-green-200 bg-green-50/30";case"structure":return"border-blue-200 bg-blue-50/30";case"demo":return"border-indigo-200 bg-indigo-50/30";default:return"border-slate-200 bg-slate-50/30"}},D=K=>{switch(K){case"bad":return s.jsx(R1,{size:18});case"good":return s.jsx(eh,{size:18});case"structure":return s.jsx(uh,{size:18});default:return s.jsx(gf,{size:18})}},w=K=>{switch(K){case"bad":return"text-red-600 bg-red-100";case"good":return"text-green-600 bg-green-100";case"structure":return"text-blue-600 bg-blue-100";case"demo":return"text-indigo-600 bg-indigo-100";default:return"text-slate-600 bg-slate-100"}};return s.jsxs("div",{className:`rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${C(z.type)} mb-8 group`,children:[s.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-black/5 bg-white/60 backdrop-blur-sm",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`p-1.5 rounded-lg ${w(z.type)}`,children:D(z.type)}),s.jsx("h3",{className:"font-bold text-slate-800 text-sm md:text-base",children:z.title})]}),s.jsxs("button",{onClick:d,className:"p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors flex items-center gap-2 group/btn",title:"複製 Prompt",children:[j?s.jsx(z1,{size:16,className:"text-green-600"}):s.jsx(X1,{size:16}),s.jsx("span",{className:"text-xs font-medium hidden group-hover/btn:inline-block",children:j?"已複製":"複製"})]})]}),s.jsxs("div",{className:"p-5 md:p-6",children:[z.context&&s.jsxs("div",{className:"mb-4 text-sm text-slate-600 bg-white/60 p-3 rounded-lg border border-black/5 italic flex gap-2",children:[s.jsx("span",{className:"font-semibold not-italic text-slate-400 text-xs uppercase tracking-wider select-none py-0.5",children:"Context"}),z.context]}),s.jsx("div",{className:"relative",children:s.jsx("pre",{className:"font-mono text-sm leading-relaxed whitespace-pre-wrap text-slate-800 bg-white/80 p-4 rounded-lg border border-black/5 shadow-sm",children:z.content})})]})]})},Fl=z=>z?z.split(/(\*\*.*?\*\*|`[^`]+`|\*[^*]+\*)/g).map((E,d)=>E.startsWith("**")&&E.endsWith("**")?s.jsx("strong",{className:"font-bold text-slate-900",children:E.slice(2,-2)},d):E.startsWith("`")&&E.endsWith("`")?s.jsx("code",{className:"bg-slate-100 text-brand-600 font-mono text-sm px-1.5 py-0.5 rounded border border-slate-200 mx-1 break-words",children:E.slice(1,-1)},d):E.startsWith("*")&&E.endsWith("*")&&E.length>2&&!E.startsWith("**")?s.jsx("em",{className:"italic text-slate-800",children:E.slice(1,-1)},d):E):"",Zu=z=>{if(!z)return null;const j=z.split(`
`),E=[];let d=0;for(;d<j.length;){const C=j[d];if(C.trim().startsWith("|")){const D=[];for(;d<j.length&&j[d].trim().startsWith("|");)D.push(j[d]),d++;if(D.length>0){const w=D[0].split("|").filter(M=>M.trim()!=="").map(M=>M.trim()),K=D.slice(2).filter(M=>M.trim().startsWith("|")).map(M=>M.split("|").filter(S=>S.trim()!=="").map(S=>S.trim()));E.push(s.jsx("div",{className:"overflow-x-auto my-6 border border-slate-200 rounded-lg shadow-sm print:shadow-none print:border-slate-300",children:s.jsxs("table",{className:"w-full text-sm text-left text-slate-600",children:[s.jsx("thead",{className:"bg-slate-50 text-slate-700 font-bold border-b border-slate-200 print:bg-slate-100",children:s.jsx("tr",{children:w.map((M,S)=>s.jsx("th",{className:"px-4 py-3 border-r last:border-r-0 border-slate-200",children:Fl(M)},S))})}),s.jsx("tbody",{className:"divide-y divide-slate-100 bg-white",children:K.map((M,S)=>s.jsx("tr",{className:"hover:bg-slate-50/50",children:M.map((q,H)=>s.jsx("td",{className:"px-4 py-3 align-top border-r last:border-r-0 border-slate-100 leading-relaxed min-w-[100px]",children:Fl(q)},H))},S))})]})},`table-${d}`))}continue}if(C.startsWith("GRID::")){const w=C.replace("GRID::","").split("|").map(K=>{const[M,S,q]=K.split(";;");return{name:M,desc:S,url:q}});E.push(s.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 print:grid-cols-1",children:w.map((K,M)=>s.jsxs("a",{href:K.url,target:"_blank",rel:"noopener noreferrer",className:"block p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md hover:border-brand-300 transition-all group",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-bold text-slate-800 group-hover:text-brand-600",children:K.name}),s.jsx(w1,{size:14,className:"text-slate-400 group-hover:text-brand-500 print:hidden"})]}),s.jsx("p",{className:"text-xs text-slate-500",children:K.desc}),s.jsx("p",{className:"hidden print:block text-[10px] text-brand-600 mt-1",children:K.url})]},M))},`grid-${d}`)),d++;continue}if(C.trim().startsWith(">")){const D=[];for(;d<j.length&&j[d].trim().startsWith(">");)D.push(j[d].trim().replace(/^>\s?/,"")),d++;E.push(s.jsx("blockquote",{className:"border-l-4 border-brand-400 bg-brand-50/50 pl-4 py-3 pr-4 my-6 rounded-r-lg text-slate-700 italic",children:D.map((w,K)=>s.jsx("div",{children:Fl(w)},K))},`quote-${d}`));continue}if(C.startsWith("# ")){E.push(s.jsx("h3",{className:"text-xl font-bold text-slate-800 mt-8 mb-4 border-l-4 border-brand-500 pl-3",children:Fl(C.replace("# ",""))},`h3-${d}`)),d++;continue}if(C.startsWith("## ")){E.push(s.jsxs("h4",{className:"text-lg font-bold text-slate-700 mt-6 mb-3 flex items-center gap-2",children:[s.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-brand-400"}),Fl(C.replace("## ",""))]},`h4-${d}`)),d++;continue}if(C.startsWith("### ")){E.push(s.jsx("h5",{className:"text-md font-bold text-slate-800 mt-5 mb-2 border-b border-slate-100 pb-1",children:Fl(C.replace("### ",""))},`h5-${d}`)),d++;continue}if(C.startsWith("#### ")){const D=C.replace("#### ","");E.push(s.jsxs("h6",{className:"text-sm font-bold text-brand-700 mt-4 mb-2 flex items-center gap-2 uppercase tracking-wider",children:[s.jsx("div",{className:"w-2 h-0.5 bg-brand-500"}),Fl(D)]},`h6-${d}`)),d++;continue}if(C.trim().startsWith("•")||C.trim().startsWith("- ")){const D=C.trim().replace(/^[•-]\s*/,"");E.push(s.jsxs("div",{className:"flex items-start gap-2 mb-2 text-slate-700 leading-7",children:[s.jsx("span",{className:"mt-2.5 min-w-[5px] h-[5px] rounded-full bg-slate-400 block"}),s.jsx("span",{className:"flex-1",children:Fl(D)})]},`li-${d}`)),d++;continue}if(C.trim()===""){E.push(s.jsx("div",{className:"h-2"},`empty-${d}`)),d++;continue}E.push(s.jsx("p",{className:"mb-2 text-slate-600 leading-7",children:Fl(C)},`p-${d}`)),d++}return E},oh=()=>s.jsxs("div",{className:"max-w-4xl mx-auto py-12 px-8 bg-white print:p-0 print:max-w-none",children:[s.jsxs("div",{className:"text-center mb-24 print:h-[100vh] print:flex print:flex-col print:justify-center",children:[s.jsx("span",{className:"text-brand-600 font-bold uppercase tracking-widest mb-4 block",children:"Teaching Materials"}),s.jsx("h1",{className:"text-5xl font-extrabold text-slate-900 mb-6",children:El.title}),s.jsx("p",{className:"text-2xl text-slate-600 mb-12",children:El.subtitle}),s.jsxs("div",{className:"text-slate-400 text-sm mt-auto",children:["© ",new Date().getFullYear()," AI Prompt Engineering Course System"]})]}),El.chapters.map(z=>s.jsxs("div",{className:"print-break-before",children:[s.jsxs("div",{className:"mb-12 mt-12 border-b-4 border-slate-900 pb-4",children:[s.jsx("h2",{className:"text-4xl font-black text-slate-900",children:z.title}),s.jsx("p",{className:"text-slate-600 mt-3 text-xl leading-relaxed",children:z.description})]}),z.units.map(j=>s.jsxs("div",{className:"mb-20 print-avoid-break",children:[s.jsxs("h3",{className:"text-2xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-slate-100 flex items-center gap-3",children:[s.jsx(gf,{className:"text-brand-500",size:24})," ",j.title]}),s.jsxs("div",{className:"mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-200",children:[s.jsxs("h4",{className:"font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg",children:[s.jsx(yf,{className:"text-red-500",size:20})," 單元學習目標"]}),s.jsx("ul",{className:"space-y-2",children:j.objectives.map((E,d)=>s.jsxs("li",{className:"flex items-start gap-3 text-base text-slate-700",children:[s.jsx("span",{className:"mt-2 w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0"}),E]},d))})]}),s.jsx("div",{className:"space-y-12",children:j.flow.map((E,d)=>s.jsxs("div",{className:"print-avoid-break",children:[s.jsx("h4",{className:"text-xl font-bold text-slate-900 mb-4 border-l-4 border-brand-400 pl-4",children:E.title}),s.jsx("div",{className:"text-base text-slate-800 leading-relaxed pl-5",children:Zu(E.content)})]},d))}),j.prompts&&j.prompts.length>0&&s.jsxs("div",{className:"mt-12 space-y-6 print-avoid-break",children:[s.jsxs("h4",{className:"text-lg font-bold text-slate-900 flex items-center gap-2",children:[s.jsx(R0,{className:"text-yellow-500",size:20})," 精選 Prompt 範例"]}),j.prompts.map((E,d)=>s.jsxs("div",{className:"border-2 border-slate-100 rounded-xl overflow-hidden bg-white",children:[s.jsx("div",{className:"bg-slate-50 px-4 py-2 border-b border-slate-100 font-bold text-sm text-slate-700",children:E.title}),s.jsxs("div",{className:"p-4",children:[E.context&&s.jsxs("p",{className:"text-xs text-slate-500 italic mb-2",children:["Context: ",E.context]}),s.jsx("pre",{className:"text-sm font-mono bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto",children:E.content})]})]},d))]}),j.outputTask&&s.jsxs("div",{className:"mt-16 p-8 border-2 border-brand-200 rounded-2xl bg-brand-50/20 print-avoid-break",children:[s.jsxs("h4",{className:"font-bold text-brand-900 mb-4 flex items-center gap-2 text-lg",children:[s.jsx(U0,{className:"text-brand-600",size:22})," 單元產出任務"]}),s.jsx("div",{className:"text-base text-slate-800 mb-6",children:Zu(j.outputTask.description)}),s.jsxs("div",{className:"p-5 bg-white rounded-xl border border-brand-100",children:[s.jsx("h5",{className:"text-xs font-black text-brand-400 uppercase tracking-widest mb-3",children:"參考範例解答"}),s.jsx("pre",{className:"text-sm text-slate-700 font-mono whitespace-pre-wrap",children:j.outputTask.example})]})]})]},j.id))]},z.id))]}),dh=()=>{const[z,j]=pl.useState("cover"),[E,d]=pl.useState("intro"),[C,D]=pl.useState(window.innerWidth>=1024),[w,K]=pl.useState(!1);pl.useEffect(()=>{const L=()=>{window.innerWidth>=1024?D(!0):D(!1)};return window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[]);const M=()=>{if(z==="cover")return{unit:null,chapter:null};for(const L of El.chapters){const rt=L.units.find(ct=>ct.id===z);if(rt)return{unit:rt,chapter:L}}return{unit:null,chapter:null}},S=()=>{const L=[];L.push({id:"cover",title:"課程首頁",chapterId:"intro"}),El.chapters.forEach(ct=>{ct.units.forEach(Lt=>{L.push({id:Lt.id,title:Lt.title,chapterId:ct.id})})});const rt=L.findIndex(ct=>ct.id===z);return{prev:rt>0?L[rt-1]:null,next:rt<L.length-1?L[rt+1]:null,currentIndex:rt,total:L.length}},{unit:q,chapter:H}=M(),tt=S();pl.useEffect(()=>{const L=document.getElementById("main-content");L&&(L.scrollTop=0),K(!1)},[z]);const Yt=()=>{window.scrollTo(0,0),setTimeout(()=>{window.print()},250)},xt=(L,rt)=>{j(L),d(rt)},Dt=()=>s.jsxs("div",{className:"max-w-4xl mx-auto py-12 px-6 lg:py-20 animate-fade-in",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("span",{className:"inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 font-bold text-sm mb-6 tracking-wide",children:"AI Prompt Engineering Course"}),s.jsx("h1",{className:"text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight",children:El.title}),s.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed",children:El.subtitle}),s.jsxs("div",{className:"mt-8 flex flex-wrap justify-center gap-4",children:[s.jsxs("button",{onClick:()=>xt("1-1","ch1"),className:"group relative inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",children:["開始課程",s.jsx(th,{size:20,className:"fill-current"})]}),s.jsxs("button",{onClick:Yt,className:"inline-flex items-center gap-2 px-6 py-4 bg-white border border-slate-200 text-slate-600 rounded-full font-bold hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm active:scale-95",children:[s.jsx(Z1,{size:20})," 匯出完整教材 PDF"]})]})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-8 mb-20",children:[s.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow",children:[s.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4",children:s.jsx(yf,{size:24})}),s.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-2",children:"適合對象"}),s.jsx("p",{className:"text-slate-600 leading-relaxed",children:El.targetAudience})]}),s.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow",children:[s.jsx("div",{className:"w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4",children:s.jsx(S1,{size:24})}),s.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-2",children:"課程核心價值"}),s.jsx("p",{className:"text-slate-600 leading-relaxed",children:"從 LLM 底層原理出發，涵蓋結構化 Prompt、深度推理框架、Vibe Coding 到 Agent 工作流設計，打造你的 AI 數位職能系統。"})]})]}),s.jsxs("div",{className:"mb-20",children:[s.jsxs("h2",{className:"text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3",children:[s.jsx(O0,{className:"text-brand-600"})," 課程章節大綱概覽"]}),s.jsx("div",{className:"space-y-6",children:El.chapters.map((L,rt)=>s.jsx("div",{className:"bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-brand-200 transition-colors",children:s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:"w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center font-bold text-slate-400 shrink-0 text-xl border border-slate-100",children:rt+1}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2",children:[s.jsx("h3",{className:"text-lg font-bold text-slate-900",children:L.title}),s.jsxs("span",{className:"text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100",children:[L.units.length," 個單元"]})]}),s.jsx("p",{className:"text-sm text-slate-500 mb-5 leading-relaxed",children:L.description}),s.jsx("div",{className:"grid sm:grid-cols-2 gap-3",children:L.units.map(ct=>s.jsxs("button",{onClick:()=>xt(ct.id,L.id),className:"flex items-center gap-3 text-sm text-slate-600 hover:text-brand-600 group/unit transition-colors text-left",children:[s.jsx(gf,{size:14,className:"text-slate-300 group-hover/unit:text-brand-400 shrink-0"}),s.jsx("span",{className:"truncate",children:ct.title.split("｜")[1]||ct.title})]},ct.id))})]})]})},L.id))})]}),s.jsx("div",{className:"text-center text-slate-400 text-sm",children:s.jsxs("p",{children:["© ",new Date().getFullYear()," AI Prompt Master 線上課程系統"]})})]}),Al=()=>!q||!H?null:s.jsxs("div",{className:"max-w-4xl mx-auto py-8 px-6 lg:py-12 pb-32",children:[s.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium",children:[s.jsx("span",{className:"text-brand-600",children:H.title.split("｜")[0]}),s.jsx(j1,{size:14}),s.jsx("span",{className:"truncate",children:H.title.split("｜")[1]})]}),s.jsx("h1",{className:"text-3xl lg:text-4xl font-extrabold text-slate-900 mb-10 leading-tight",children:q.title}),q.objectives&&s.jsxs("section",{className:"mb-12 bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"p-2 bg-yellow-100 text-yellow-700 rounded-lg",children:s.jsx(yf,{size:20})}),s.jsx("h2",{className:"text-xl font-bold text-slate-800",children:"單元學習目標"})]}),s.jsx("ul",{className:"grid md:grid-cols-1 gap-3",children:q.objectives.map((L,rt)=>s.jsxs("li",{className:"flex items-start gap-3 text-slate-700",children:[s.jsx("div",{className:"mt-1.5 min-w-[6px] h-[6px] rounded-full bg-brand-500"}),s.jsx("span",{className:"leading-relaxed",children:L})]},rt))})]}),s.jsxs("section",{className:"mb-12",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"p-2 bg-blue-100 text-blue-700 rounded-lg",children:s.jsx(O0,{size:20})}),s.jsx("h2",{className:"text-xl font-bold text-slate-800",children:"教學內容"})]}),s.jsx("div",{className:"relative pl-4 border-l-2 border-slate-100 ml-4 space-y-10",children:q.flow.map((L,rt)=>s.jsxs("div",{className:"relative pl-6",children:[s.jsx("div",{className:"absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-white border-2 border-brand-300"}),s.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-4",children:L.title}),s.jsx("div",{className:"text-slate-600",children:Zu(L.content)})]},rt))})]}),q.prompts&&q.prompts.length>0&&s.jsxs("section",{className:"mb-12",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"p-2 bg-purple-100 text-purple-700 rounded-lg",children:s.jsx(R0,{size:20})}),s.jsx("h2",{className:"text-xl font-bold text-slate-800",children:"精選 Prompt 範例"})]}),s.jsx("div",{className:"grid gap-2",children:q.prompts.map((L,rt)=>s.jsx(sh,{prompt:L},rt))})]}),q.outputTask&&s.jsx("section",{className:"bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm",children:s.jsxs("div",{className:"p-6 lg:p-8",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{className:"p-2 bg-brand-100 text-brand-700 rounded-lg",children:s.jsx(U0,{size:20})}),s.jsx("h3",{className:"text-xl font-bold text-slate-900",children:"本單元產出任務"})]}),s.jsx("div",{className:"text-slate-700 leading-relaxed mb-6 pl-12",children:Zu(q.outputTask.description)}),s.jsxs("div",{className:"pl-12",children:[s.jsxs("button",{onClick:()=>K(!w),className:"flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-800",children:[w?s.jsx(D1,{size:16}):s.jsx(N1,{size:16}),w?"收合參考解答":"查看作業參考範例"]}),w&&s.jsxs("div",{className:"mt-4 bg-slate-100 rounded-xl p-5 border border-slate-200 animate-fade-in",children:[s.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-3",children:"Example Answer"}),s.jsx("div",{className:"text-sm text-slate-700 font-mono whitespace-pre-wrap leading-relaxed",children:q.outputTask.example})]})]})]})})]});return s.jsxs("div",{className:"h-screen bg-slate-50 overflow-hidden print:h-auto print:overflow-visible",children:[s.jsxs("div",{className:"flex h-full no-print",children:[s.jsx(fh,{activeUnitId:z,onSelectUnit:xt,isOpen:C,onClose:()=>D(!1)}),s.jsxs("main",{className:`flex-1 flex flex-col min-w-0 relative transition-all duration-300 ${C?"lg:pl-80":"pl-0"}`,children:[s.jsx("div",{className:"bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30 min-h-[57px]",children:s.jsxs("div",{className:"flex items-center gap-3 truncate",children:[!C&&s.jsx("button",{onClick:()=>D(!0),className:"p-2 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors",title:"展開選單",children:s.jsx(W1,{size:24})}),s.jsx("div",{className:"font-bold text-slate-800 truncate",children:q?q.title.split("｜")[1]:El.title})]})}),s.jsx("div",{id:"main-content",className:"flex-1 overflow-y-auto scroll-smooth",children:z==="cover"?Dt():Al()}),s.jsxs("div",{className:"bg-white border-t border-slate-200 px-6 py-4 flex items-center justify-between z-20",children:[tt.prev?s.jsxs("button",{onClick:()=>xt(tt.prev.id,tt.prev.chapterId),className:"flex items-center gap-2 text-slate-500 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-50",children:[s.jsx(_1,{size:16})," ",s.jsx("span",{className:"hidden sm:inline",children:"上一單元"})]}):s.jsx("div",{}),s.jsxs("div",{className:"text-xs font-medium text-slate-400 hidden md:block",children:[tt.currentIndex+1," / ",tt.total]}),tt.next?s.jsxs("button",{onClick:()=>xt(tt.next.id,tt.next.chapterId),className:"flex items-center gap-2 bg-slate-900 text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-lg hover:bg-brand-600 transition-colors",children:[s.jsx("span",{className:"hidden sm:inline",children:"下一單元"})," ",s.jsx("span",{className:"sm:hidden",children:"Next"})," ",s.jsx(A1,{size:16})]}):s.jsx("button",{onClick:()=>xt("cover","intro"),className:"text-brand-600 text-sm font-bold px-4 py-2",children:"回首頁"})]})]})]}),s.jsx("div",{className:"hidden print:block bg-white min-h-screen",children:s.jsx(oh,{})})]})},rh=m1.createRoot(document.getElementById("root"));rh.render(s.jsx(dh,{}));
