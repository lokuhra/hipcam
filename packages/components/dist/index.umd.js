!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@emotion/styled"),require("@material-ui/core")):"function"==typeof define&&define.amd?define(["@emotion/styled","@material-ui/core"],t):t(e.styled,e.core)}(this,function(e,t){function r(e,t){return e(t={exports:{}},t.exports),t.exports}e=e&&e.hasOwnProperty("default")?e.default:e;var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var s in r=Object(arguments[c]))o.call(r,s)&&(u[s]=r[s]);if(n){i=n(r);for(var l=0;l<i.length;l++)a.call(r,i[l])&&(u[i[l]]=r[i[l]])}}return u},u="function"==typeof Symbol&&Symbol.for,c=u?Symbol.for("react.element"):60103,s=u?Symbol.for("react.portal"):60106,l=u?Symbol.for("react.fragment"):60107,f=u?Symbol.for("react.strict_mode"):60108,p=u?Symbol.for("react.profiler"):60114,d=u?Symbol.for("react.provider"):60109,y=u?Symbol.for("react.context"):60110,m=u?Symbol.for("react.forward_ref"):60112,v=u?Symbol.for("react.suspense"):60113,h=u?Symbol.for("react.memo"):60115,b=u?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C={};function S(e,t,r){this.props=e,this.context=t,this.refs=C,this.updater=r||_}function k(){}function j(e,t,r){this.props=e,this.context=t,this.refs=C,this.updater=r||_}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(w(85));this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=S.prototype;var R=j.prototype=new k;R.constructor=j,i(R,S.prototype),R.isPureReactComponent=!0;var x={current:null},E=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,n)&&!O.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:c,type:e,key:a,ref:i,props:o,_owner:x.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var A=/\/+/g,N=[];function I(e,t,r,n){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function T(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var i=!1;if(null===t)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case c:case s:i=!0}}if(i)return n(o,t,""===r?"."+q(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var u=0;u<t.length;u++){var l=r+q(a=t[u],u);i+=e(a,l,n,o)}else if("function"==typeof(l=null===t||"object"!=typeof t?null:"function"==typeof(l=g&&t[g]||t["@@iterator"])?l:null))for(t=l.call(t),u=0;!(a=t.next()).done;)i+=e(a=a.value,l=r+q(a,u++),n,o);else if("object"===a)throw n=""+t,Error(w(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return i}(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?z(e,n,r,function(e){return e}):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(A,"$&/")+"/")+r)),n.push(e))}function z(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(A,"$&/")+"/"),T(e,U,t=I(t,a,n,o)),D(t)}var V={current:null};function B(){var e=V.current;if(null===e)throw Error(w(321));return e}var H={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return z(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;T(e,F,t=I(null,null,t,r)),D(t)},count:function(e){return T(e,function(){return null},null)},toArray:function(e){var t=[];return z(e,t,null,function(e){return e}),t},only:function(e){if(!$(e))throw Error(w(143));return e}},Component:S,Fragment:l,Profiler:p,PureComponent:j,StrictMode:f,Suspense:v,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:V,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:i},cloneElement:function(e,t,r){if(null==e)throw Error(w(267,e));var n=i({},e.props),o=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=x.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)E.call(t,l)&&!O.hasOwnProperty(l)&&(n[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)n.children=r;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];n.children=s}return{$$typeof:c,type:e.type,key:o,ref:a,props:n,_owner:u}},createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:y,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},createElement:P,createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},createRef:function(){return{current:null}},forwardRef:function(e){return{$$typeof:m,render:e}},isValidElement:$,lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return B().useCallback(e,t)},useContext:function(e,t){return B().useContext(e,t)},useDebugValue:function(){},useEffect:function(e,t){return B().useEffect(e,t)},useImperativeHandle:function(e,t,r){return B().useImperativeHandle(e,t,r)},useLayoutEffect:function(e,t){return B().useLayoutEffect(e,t)},useMemo:function(e,t){return B().useMemo(e,t)},useReducer:function(e,t,r){return B().useReducer(e,t,r)},useRef:function(e){return B().useRef(e)},useState:function(e){return B().useState(e)},version:"16.13.1"},L=function(){};if("production"!==process.env.NODE_ENV){var M="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",W={},Y=Function.call.bind(Object.prototype.hasOwnProperty);L=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function J(e,t,r,n,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(Y(e,a)){var i;try{if("function"!=typeof e[a]){var u=Error((n||"React class")+": "+r+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw u.name="Invariant Violation",u}i=e[a](t,a,n,r,null,M)}catch(e){i=e}if(!i||i instanceof Error||L((n||"React class")+": type specification of "+r+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in W)){W[i.message]=!0;var c=o?o():"";L("Failed "+r+" type: "+i.message+(null!=c?c:""))}}}J.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(W={})};var X=J,G=r(function(e,t){"production"!==process.env.NODE_ENV&&function(){var e=i,r=X,n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,_=n?Symbol.for("react.scope"):60119,C="function"==typeof Symbol&&Symbol.iterator,S="@@iterator";function k(e){if(null===e||"object"!=typeof e)return null;var t=C&&e[C]||e[S];return"function"==typeof t?t:null}var j={current:null},R={current:null},x=/^(.*)[\\\/]/,E=1;function O(e){if(null==e)return null;if("number"==typeof e.tag&&D("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case u:return"Fragment";case a:return"Portal";case s:return"Profiler";case c:return"StrictMode";case y:return"Suspense";case m:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case f:return"Context.Consumer";case l:return"Context.Provider";case d:return o=(n=e.render).displayName||n.name||"",e.displayName||(""!==o?"ForwardRef("+o+")":"ForwardRef");case v:return O(e.type);case b:return O(e.render);case h:var t=(r=e)._status===E?r._result:null;if(t)return O(t)}var r,n,o;return null}var P={},$=null;function A(e){$=e}P.getCurrentStack=null,P.getStackAddendum=function(){var e="";if($){var t=O($.type),r=$._owner;e+=function(e,t,r){var n="";if(t){var o=t.fileName,a=o.replace(x,"");if(/^index\./.test(a)){var i=o.match(x);if(i){var u=i[1];u&&(a=u.replace(x,"")+"/"+a)}}n=" (at "+a+":"+t.lineNumber+")"}else r&&(n=" (created by "+r+")");return"\n    in "+(e||"Unknown")+n}(t,$._source,r&&O(r.type))}var n=P.getCurrentStack;return n&&(e+=n()||""),e};var N={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:R,IsSomeRendererActing:{current:!1},assign:e};function I(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];T("warn",e,r)}function D(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];T("error",e,r)}function T(e,t,r){if(!(r.length>0&&"string"==typeof r[r.length-1]&&0===r[r.length-1].indexOf("\n    in"))){var n=N.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]))}var o=r.map(function(e){return""+e});o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o);try{var a=0,i="Warning: "+t.replace(/%s/g,function(){return r[a++]});throw new Error(i)}catch(e){}}e(N,{ReactDebugCurrentFrame:P,ReactComponentTreeHook:{}});var q={};function F(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;q[o]||(D("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),q[o]=!0)}var U={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){F(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){F(e,"replaceState")},enqueueSetState:function(e,t,r,n){F(e,"setState")}},z={};function V(e,t,r){this.props=e,this.context=t,this.refs=z,this.updater=r||U}Object.freeze(z),V.prototype.isReactComponent={},V.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},V.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var B={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},H=function(e,t){Object.defineProperty(V.prototype,e,{get:function(){I("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var L in B)B.hasOwnProperty(L)&&H(L,B[L]);function M(){}function W(e,t,r){this.props=e,this.context=t,this.refs=z,this.updater=r||U}M.prototype=V.prototype;var Y=W.prototype=new M;Y.constructor=W,e(Y,V.prototype),Y.isPureReactComponent=!0;var J,G,K,Q=Object.prototype.hasOwnProperty,Z={key:!0,ref:!0,__self:!0,__source:!0};function ee(e){if(Q.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function te(e){if(Q.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}K={};var re=function(e,t,r,n,a,i,u){var c={$$typeof:o,type:e,key:t,ref:r,props:u,_owner:i,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function ne(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var oe=".",ae=":",ie=!1,ue=/\/+/g;function ce(e){return(""+e).replace(ue,"$&/")}var se,le=10,fe=[];function pe(e,t,r,n){if(fe.length){var o=fe.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function de(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,fe.length<le&&fe.push(e)}function ye(e,t,r){return null==e?0:function e(t,r,n,i){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c,s=!1;if(null===t)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case o:case a:s=!0}}if(s)return n(i,t,""===r?oe+me(t,0):r),1;var l=0,f=""===r?oe:r+ae;if(Array.isArray(t))for(var p=0;p<t.length;p++)l+=e(c=t[p],f+me(c,p),n,i);else{var d=k(t);if("function"==typeof d){d===t.entries&&(ie||I("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead."),ie=!0);for(var y,m=d.call(t),v=0;!(y=m.next()).done;)l+=e(c=y.value,f+me(c,v++),n,i)}else if("object"===u){var h;h=" If you meant to render a collection of children, use an array instead."+P.getStackAddendum();var b=""+t;throw Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(t).join(", ")+"}":b)+")."+h)}}return l}(e,"",t,r)}function me(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r={"=":"=0",":":"=2"},"$"+(""+e.key).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var r}function ve(e,t,r){e.func.call(e.context,t,e.count++)}function he(e,t,r){var n,o,a=e.result,i=e.keyPrefix,u=e.func.call(e.context,t,e.count++);Array.isArray(u)?be(u,a,r,function(e){return e}):null!=u&&(ne(u)&&(n=u,o=i+(!u.key||t&&t.key===u.key?"":ce(u.key)+"/")+r,u=re(n.type,o,n.ref,n._self,n._source,n._owner,n.props)),a.push(u))}function be(e,t,r,n,o){var a="";null!=r&&(a=ce(r)+"/");var i=pe(t,a,n,o);ye(e,he,i),de(i)}function ge(e){return"string"==typeof e||"function"==typeof e||e===u||e===p||e===s||e===c||e===y||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===l||e.$$typeof===f||e.$$typeof===d||e.$$typeof===g||e.$$typeof===w||e.$$typeof===_||e.$$typeof===b)}function we(){var e=j.current;if(null===e)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");return e}function _e(){if(R.current){var e=O(R.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}se=!1;var Ce={};function Se(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=_e();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Ce[r]){Ce[r]=!0;var n="";e&&e._owner&&e._owner!==R.current&&(n=" It was passed a child from "+O(e._owner.type)+"."),A(e),D('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.',r,n),A(null)}}}function ke(e,t){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];ne(n)&&Se(n,t)}else if(ne(e))e._store&&(e._store.validated=!0);else if(e){var o=k(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)ne(a.value)&&Se(a.value,t)}}function je(e){var t=e.type;if(null!=t&&"string"!=typeof t){var n,o=O(t);if("function"==typeof t)n=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==d&&t.$$typeof!==v)return;n=t.propTypes}n?(A(e),r(n,e.props,"prop",o,P.getStackAddendum),A(null)):void 0===t.PropTypes||se||(se=!0,D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")),"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Re(e,t,r){var n,a,i=ge(e);if(!i){var c,s="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),s+=(null!=(n=t)&&void 0!==(a=n.__source)?"\n\nCheck your code at "+a.fileName.replace(/^.*[\\\/]/,"")+":"+a.lineNumber+".":"")||_e(),null===e?c="null":Array.isArray(e)?c="array":void 0!==e&&e.$$typeof===o?(c="<"+(O(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,D("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,s)}var l=function(e,t,r){var n,o={},a=null,i=null,u=null,c=null;if(null!=t)for(n in ee(t)&&(i=t.ref,function(e){if("string"==typeof e.ref&&R.current&&e.__self&&R.current.stateNode!==e.__self){var t=O(R.current.type);K[t]||(D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref',O(R.current.type),e.ref),K[t]=!0)}}(t)),te(t)&&(a=""+t.key),u=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)Q.call(t,n)&&!Z.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(s>1){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||i){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&function(e,t){var r=function(){J||(J=!0,D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(o,d),i&&function(e,t){var r=function(){G||(G=!0,D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(o,d)}return re(e,a,i,u,c,R.current,o)}.apply(this,arguments);if(null==l)return l;if(i)for(var f=2;f<arguments.length;f++)ke(arguments[f],e);return e===u?function(e){A(e);for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n);break}}null!==e.ref&&D("Invalid attribute `ref` supplied to `React.Fragment`."),A(null)}(l):je(l),l}var xe=!1;try{var Ee=Object.freeze({}),Oe=new Map([[Ee,null]]),Pe=new Set([Ee]);Oe.set(0,0),Pe.add(0)}catch(e){}var $e=Re;t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return be(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;var n=pe(null,null,t,r);ye(e,ve,n),de(n)},count:function(e){return ye(e,function(){return null},null)},toArray:function(e){var t=[];return be(e,t,null,function(e){return e}),t},only:function(e){if(!ne(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=V,t.Fragment=u,t.Profiler=s,t.PureComponent=W,t.StrictMode=c,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(t,r,n){for(var o=function(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o,a,i=e({},t.props),u=t.key,c=t.ref,s=t._self,l=t._source,f=t._owner;if(null!=r)for(o in ee(r)&&(c=r.ref,f=R.current),te(r)&&(u=""+r.key),t.type&&t.type.defaultProps&&(a=t.type.defaultProps),r)Q.call(r,o)&&!Z.hasOwnProperty(o)&&(i[o]=void 0===r[o]&&void 0!==a?a[o]:r[o]);var p=arguments.length-2;if(1===p)i.children=n;else if(p>1){for(var d=Array(p),y=0;y<p;y++)d[y]=arguments[y+2];i.children=d}return re(t.type,u,c,s,l,f,i)}.apply(this,arguments),a=2;a<arguments.length;a++)ke(arguments[a],o.type);return je(o),o},t.createContext=function(e,t){void 0===t?t=null:null!==t&&"function"!=typeof t&&D("createContext: Expected the optional second argument to be a function. Instead received: %s",t);var r={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null};r.Provider={$$typeof:l,_context:r};var n=!1,o=!1,a={$$typeof:f,_context:r,_calculateChangedBits:r._calculateChangedBits};return Object.defineProperties(a,{Provider:{get:function(){return o||(o=!0,D("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),r.Provider},set:function(e){r.Provider=e}},_currentValue:{get:function(){return r._currentValue},set:function(e){r._currentValue=e}},_currentValue2:{get:function(){return r._currentValue2},set:function(e){r._currentValue2=e}},_threadCount:{get:function(){return r._threadCount},set:function(e){r._threadCount=e}},Consumer:{get:function(){return n||(n=!0,D("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),r.Consumer}}}),r.Consumer=a,r._currentRenderer=null,r._currentRenderer2=null,r},t.createElement=$e,t.createFactory=function(e){var t=Re.bind(null,e);return t.type=e,xe||(xe=!0,I("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return I("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){return null!=e&&e.$$typeof===v?D("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?D("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&D("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||D("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?")),{$$typeof:d,render:e}},t.isValidElement=ne,t.lazy=function(e){var t,r,n={$$typeof:h,_ctor:e,_status:-1,_result:null};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){D("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){D("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},t.memo=function(e,t){return ge(e)||D("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e),{$$typeof:v,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return we().useCallback(e,t)},t.useContext=function(e,t){var r=we();if(void 0!==t&&D("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"==typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks":""),void 0!==e._context){var n=e._context;n.Consumer===e?D("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&D("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return r.useContext(e,t)},t.useDebugValue=function(e,t){return we().useDebugValue(e,t)},t.useEffect=function(e,t){return we().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return we().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return we().useLayoutEffect(e,t)},t.useMemo=function(e,t){return we().useMemo(e,t)},t.useReducer=function(e,t,r){return we().useReducer(e,t,r)},t.useRef=function(e){return we().useRef(e)},t.useState=function(e){return we().useState(e)},t.version="16.13.1"}()}),K=r(function(e){e.exports="production"===process.env.NODE_ENV?H:G}),Q=Object.freeze(["\n  padding: 12px 24px;\n  background-color: #121a3e;\n  font-size: 16px;\n  border-radius: 4px;\n  color: #fff;\n  cursor: pointer;\n"]),Z=e.button(Q);module.exports={Button:function(e){return K.createElement(Z,{onClick:e.onClick},e.children)},Modal:function(e){var r=e.showTC,n=e.handleDecline,o=e.handleAccept,a=K.useState(!1),i=a[0],u=a[1];K.useEffect(function(){u(r)},[r]);var c=K.createElement(t.Box,{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},K.createElement(t.Box,{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-between",width:"35%",height:"75%",className:"modal-term"},K.createElement(t.Box,{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",width:"50%",height:"10%"},K.createElement(t.Typography,{variant:"h5",component:"h2",id:"simple-modal-title-terms",className:"title-modal"},"Terms and Conditions")),K.createElement(t.Box,{direction:"row",justify:"center",alignItems:"center",width:"90%",height:"80%",className:"container-terms"},K.createElement("p",{className:"terms"},'Nuestros Términos de Servicio se actualizaron el 01 de Abril de 2018. Hipcam Global LLC y sus filiales (colectivamente, "Hipcam") proporcionan: (1) el sitio web de Hipcam ubicado en www.hipcam.com y todos los sitios asociados vinculados con www.hipcam.com, incluidos el sitio web de la cuenta de usuario de Hipcam al que se puede acceder desde web.hipcam.com y el sitio web de Hipcam al que se puede acceder desde www.hipcam.com (cada uno, un "Sitio"), (2) servicios accesibles a través de los Sitios ("Aplicaciones web"), (3) software que puede descargarse en su smartphone o tableta para acceder a los servicios ("Aplicaciones móviles"), y (4) servicios de suscripción, incluidos aquellos a los que se puede acceder mediante las Aplicaciones web y las Aplicaciones móviles ("Servicios de suscripción"), todo ello para ser utilizado junto con los productos de hardware de Hipcam ("Productos") y de otras formas dispuestas por Hipcam. Algunos Productos y Servicios de Hipcam pueden utilizarse juntos o de forma que se integren con productos y servicios de terceros. El término "Servicios" se refiere a Sitios, Aplicaciones web, Aplicaciones móviles y Servicios de suscripción. Algunos Productos y Servicios de Hipcam pueden utilizarse juntos o de forma que se integren con productos y servicios de terceros. El término "Servicios" se refiere a Sitios, Aplicaciones web, Aplicaciones móviles y Servicios de suscripción.')),K.createElement(t.Box,{display:"flex",direction:"row",justifyContent:"space-around",width:"60%",alignItems:"center",height:"10%"},K.createElement(t.Button,{variant:"outlined",color:"primary",onClick:n,className:"btn-term btn-term-decline"},"DECLINE"),K.createElement(t.Button,{variant:"contained",color:"primary",onClick:o,className:"btn-term btn-term-accept"},"ACCEPT"))));return K.createElement(t.Modal,{open:i,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",closeAfterTransition:!0,BackdropComponent:t.Backdrop,BackdropProps:{timeout:500}},c)}}});
//# sourceMappingURL=index.umd.js.map
