(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2mql":function(e,t,r){"use strict";r("ioFf"),r("HAE/");var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function u(e){return n.isMemo(e)?c:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=c;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var c=f(r);l&&(c=c.concat(l(r)));for(var i=u(t),b=u(r),h=0;h<c.length;++h){var m=c[h];if(!(a[m]||n&&n[m]||b&&b[m]||i&&i[m])){var v=p(r,m);try{s(t,m,v)}catch(g){}}}}return t}},DW2E:function(e,t,r){var n=r("0/R4"),o=r("Z6vF").onFreeze;r("Xtr8")("freeze",(function(e){return function(t){return e&&n(t)?e(o(t)):t}}))},JX7q:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},"YP/F":function(e,t,r){"use strict";r.r(t);var n=r("wTIg"),o=r("q1tI"),a=r.n(o),c=r("Bl7J"),i=r("vrFN"),u=(r("V+eJ"),r("dZ+Y"),r("LK8F"),r("2Spj"),r("VRzm"),r("Btvt"),r("91GP"),r("DW2E"),r("f3/d"),r("zLVn")),s=r("wx14"),f=r("JX7q"),l=r("dI71"),p=r("2mql"),d=r.n(p);function y(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var b=a.a.createContext();var h=function(e){return e};function m(e){var t=e.resolve,r=void 0===t?h:t,n=e.render,o=e.onLoad;function c(e,t){void 0===t&&(t={});var c=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),i={};function p(e){return t.cacheKey?t.cacheKey(e):c.resolve?c.resolve(e):null}var d,h=function(e){function a(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:p(r)},n.promise=null,y(!r.__chunkExtractor||c.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(c.requireAsync(r).catch((function(){})),n.loadSync(),r.__chunkExtractor.addChunk(c.chunkName(r))),Object(f.a)(n)):(!1!==t.ssr&&c.isReady&&c.isReady(r)&&n.loadSync(),n)}Object(l.a)(a,e),a.getDerivedStateFromProps=function(e,t){var r=p(e);return Object(s.a)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var d=a.prototype;return d.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},d.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},d.componentWillUnmount=function(){this.mounted=!1},d.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},d.triggerOnLoad=function(){var e=this;o&&setTimeout((function(){o(e.state.result,e.props)}))},d.loadSync=function(){if(this.state.loading)try{var e=c.requireSync(this.props),t=r(e,{Loadable:v});this.state.result=t,this.state.loading=!1}catch(n){this.state.error=n}},d.getCacheKey=function(){return p(this.props)||JSON.stringify(this.props)},d.getCache=function(){return i[this.getCacheKey()]},d.setCache=function(e){i[this.getCacheKey()]=e},d.loadAsync=function(){var e=this;if(!this.promise){var n=this.props,o=(n.__chunkExtractor,n.forwardedRef,Object(u.a)(n,["__chunkExtractor","forwardedRef"]));this.promise=c.requireAsync(o).then((function(n){var o=r(n,{Loadable:v});t.suspense&&e.setCache(o),e.safeSetState({result:r(n,{Loadable:v}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},d.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,Object(u.a)(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,i=c.error,f=c.loading,l=c.result;if(t.suspense){var p=this.getCache();if(!p)throw this.loadAsync();return n({loading:!1,fallback:null,result:p,options:t,props:Object(s.a)({},a,{ref:r})})}if(i)throw i;var d=o||t.fallback||null;return f?d:n({loading:f,fallback:d,result:l,options:t,props:Object(s.a)({},a,{ref:r})})},a}(a.a.Component),m=(d=h,function(e){return a.a.createElement(b.Consumer,null,(function(t){return a.a.createElement(d,Object.assign({__chunkExtractor:t},e))}))}),v=a.a.forwardRef((function(e,t){return a.a.createElement(m,Object.assign({forwardedRef:t},e))}));return v.preload=function(e){c.requireAsync(e)},v.load=function(e){return c.requireAsync(e)},v}return{loadable:c,lazy:function(e,t){return c(e,Object(s.a)({},t,{suspense:!0}))}}}var v=m({resolve:function(e,t){var r=t.Loadable,n=e.__esModule?e.default:e.default||e;return d()(r,n,{preload:!0}),n},render:function(e){var t=e.result,r=e.props;return a.a.createElement(t,r)}}),g=v.loadable,S=v.lazy,O=m({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,n=e.props;return!r&&n.children?n.children(t):null}}),w=O.loadable,j=O.lazy;var $=g;$.lib=w,S.lib=j;var _=$,x=r("qKvR"),C=_((function(){return Promise.all([r.e(2),r.e(3),r.e(18)]).then(r.bind(null,"Da+c"))}));var E=function(){return Object(x.b)("div",null,Object(x.b)(C,null))},P=Object(n.a)("div",{target:"euk8c5b0"})({name:"1r8e12f",styles:"margin:0 auto;max-width:2000px;padding:1.45rem 1.0875rem;"});t.default=function(){return Object(x.b)(c.a,null,Object(x.b)(i.a,{title:"Covid19"}),Object(x.b)(P,null,Object(x.b)("h1",null,"Covid19 Simulator"),Object(x.b)(E,null)))}},dI71:function(e,t,r){"use strict";function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}r.d(t,"a",(function(){return n}))},qT12:function(e,t,r){"use strict";r("rE2o"),r("ioFf");var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,b=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,S=n?Symbol.for("react.responder"):60118,O=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case p:case c:case u:case i:case y:return e;default:switch(e=e&&e.$$typeof){case f:case d:case m:case h:case s:return e;default:return t}}case a:return t}}}function j(e){return w(e)===p}t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=f,t.ContextProvider=s,t.Element=o,t.ForwardRef=d,t.Fragment=c,t.Lazy=m,t.Memo=h,t.Portal=a,t.Profiler=u,t.StrictMode=i,t.Suspense=y,t.isAsyncMode=function(e){return j(e)||w(e)===l},t.isConcurrentMode=j,t.isContextConsumer=function(e){return w(e)===f},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===c},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===u},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===y},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===p||e===u||e===i||e===y||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===f||e.$$typeof===d||e.$$typeof===g||e.$$typeof===S||e.$$typeof===O||e.$$typeof===v)},t.typeOf=w},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},zLVn:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-covid-19-js-1e301d5c88da799fbe2f.js.map