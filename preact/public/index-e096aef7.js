var t,e,n,o,r,i,l,u={},p=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(t,e){for(var n in e)t[n]=e[n];return t}function s(t){var e=t.parentNode;e&&e.removeChild(t)}function _(t,e,n){var o,r=arguments,i={};for(o in e)"key"!==o&&"ref"!==o&&(i[o]=e[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===i[o]&&(i[o]=t.defaultProps[o]);return f(t,i,e&&e.key,e&&e.ref,null)}function f(e,n,o,r,i){var l={type:e,props:n,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return null==i&&(l.__v=l),t.vnode&&t.vnode(l),l}function h(t){return t.children}function d(t,e){this.props=t,this.context=e}function y(t,e){if(null==e)return t.__?y(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?y(t):null}function v(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return v(t)}}function m(e){(!e.__d&&(e.__d=!0)&&n.push(e)&&!g.__r++||r!==t.debounceRendering)&&((r=t.debounceRendering)||o)(g)}function g(){for(var t;g.__r=n.length;)t=n.sort((function(t,e){return t.__v.__b-e.__v.__b})),n=[],t.some((function(t){var e,n,o,r,i,l,u;t.__d&&(l=(i=(e=t).__v).__e,(u=e.__P)&&(n=[],(o=c({},i)).__v=o,r=D(u,i,o,e.__n,void 0!==u.ownerSVGElement,null,n,null==l?y(i):l),P(n,i),r!=l&&v(i)))}))}function b(t,e,n,o,r,i,l,a,c,_){var d,v,m,g,b,k,x,w=o&&o.__k||p,S=w.length;for(c==u&&(c=null!=l?l[0]:S?y(o,0):null),n.__k=[],d=0;d<e.length;d++)if(null!=(g=n.__k[d]=null==(g=e[d])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?f(null,g,null,null,g):Array.isArray(g)?f(h,{children:g},null,null,null):null!=g.__e||null!=g.__c?f(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=w[d])||m&&g.key==m.key&&g.type===m.type)w[d]=void 0;else for(v=0;v<S;v++){if((m=w[v])&&g.key==m.key&&g.type===m.type){w[v]=void 0;break}m=null}b=D(t,g,m=m||u,r,i,l,a,c,_),(v=g.ref)&&m.ref!=v&&(x||(x=[]),m.ref&&x.push(m.ref,null,g),x.push(v,g.__c||b,g)),null!=b?(null==k&&(k=b),c=C(t,g,m,w,l,b,c),"option"==n.type?t.value="":"function"==typeof n.type&&(n.__d=c)):c&&m.__e==c&&c.parentNode!=t&&(c=y(m))}if(n.__e=k,null!=l&&"function"!=typeof n.type)for(d=l.length;d--;)null!=l[d]&&s(l[d]);for(d=S;d--;)null!=w[d]&&T(w[d],w[d]);if(x)for(d=0;d<x.length;d++)E(x[d],x[++d],x[++d])}function k(t){return null==t||"boolean"==typeof t?[]:Array.isArray(t)?p.concat.apply([],t.map(k)):[t]}function C(t,e,n,o,r,i,l){var u,p,a;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(r==n||i!=l||null==i.parentNode)t:if(null==l||l.parentNode!==t)t.appendChild(i),u=null;else{for(p=l,a=0;(p=p.nextSibling)&&a<o.length;a+=2)if(p==i)break t;t.insertBefore(i,l),u=l}return void 0!==u?u:i.nextSibling}function x(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===a.test(e)?n+"px":null==n?"":n}function w(t,e,n,o,r){var i,l,u,p,a;if(r?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof o&&(i.cssText="",o=null),o)for(p in o)n&&p in n||x(i,p,"");if(n)for(a in n)o&&n[a]===o[a]||x(i,a,n[a])}else"o"===e[0]&&"n"===e[1]?(l=e!==(e=e.replace(/Capture$/,"")),u=e.toLowerCase(),e=(u in t?u:e).slice(2),n?(o||t.addEventListener(e,S,l),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,S,l)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!r&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function S(e){this.l[e.type](t.event?t.event(e):e)}function U(t,e,n){var o,r;for(o=0;o<t.__k.length;o++)(r=t.__k[o])&&(r.__=t,r.__e&&("function"==typeof r.type&&r.__k.length>1&&U(r,e,n),e=C(n,r,r,t.__k,null,r.__e,e),"function"==typeof t.type&&(t.__d=e)))}function D(e,n,o,r,i,l,u,p,a){var s,_,f,y,v,m,g,k,C,x,w,S=n.type;if(void 0!==n.constructor)return null;(s=t.__b)&&s(n);try{t:if("function"==typeof S){if(k=n.props,C=(s=S.contextType)&&r[s.__c],x=s?C?C.props.value:s.__:r,o.__c?g=(_=n.__c=o.__c).__=_.__E:("prototype"in S&&S.prototype.render?n.__c=_=new S(k,x):(n.__c=_=new d(k,x),_.constructor=S,_.render=N),C&&C.sub(_),_.props=k,_.state||(_.state={}),_.context=x,_.__n=r,f=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=S.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=c({},_.__s)),c(_.__s,S.getDerivedStateFromProps(k,_.__s))),y=_.props,v=_.state,f)null==S.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==S.getDerivedStateFromProps&&k!==y&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(k,x),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(k,_.__s,x)||n.__v===o.__v){_.props=k,_.state=_.__s,n.__v!==o.__v&&(_.__d=!1),_.__v=n,n.__e=o.__e,n.__k=o.__k,_.__h.length&&u.push(_),U(n,p,e);break t}null!=_.componentWillUpdate&&_.componentWillUpdate(k,_.__s,x),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(y,v,m)}))}_.context=x,_.props=k,_.state=_.__s,(s=t.__r)&&s(n),_.__d=!1,_.__v=n,_.__P=e,s=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(r=c(c({},r),_.getChildContext())),f||null==_.getSnapshotBeforeUpdate||(m=_.getSnapshotBeforeUpdate(y,v)),w=null!=s&&s.type==h&&null==s.key?s.props.children:s,b(e,Array.isArray(w)?w:[w],n,o,r,i,l,u,p,a),_.base=n.__e,_.__h.length&&u.push(_),g&&(_.__E=_.__=null),_.__e=!1}else null==l&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=A(o.__e,n,o,r,i,l,u,a);(s=t.diffed)&&s(n)}catch(e){n.__v=null,t.__e(e,n,o)}return n.__e}function P(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(t){t.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function A(t,e,n,o,r,i,l,a){var c,s,_,f,h,d=n.props,y=e.props;if(r="svg"===e.type||r,null!=i)for(c=0;c<i.length;c++)if(null!=(s=i[c])&&((null===e.type?3===s.nodeType:s.localName===e.type)||t==s)){t=s,i[c]=null;break}if(null==t){if(null===e.type)return document.createTextNode(y);t=r?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,y.is&&{is:y.is}),i=null,a=!1}if(null===e.type)d!==y&&t.data!=y&&(t.data=y);else{if(null!=i&&(i=p.slice.call(t.childNodes)),_=(d=n.props||u).dangerouslySetInnerHTML,f=y.dangerouslySetInnerHTML,!a){if(null!=i)for(d={},h=0;h<t.attributes.length;h++)d[t.attributes[h].name]=t.attributes[h].value;(f||_)&&(f&&_&&f.__html==_.__html||(t.innerHTML=f&&f.__html||""))}(function(t,e,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in e||w(t,i,null,n[i],o);for(i in e)r&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||w(t,i,e[i],n[i],o)})(t,y,d,r,a),f?e.__k=[]:(c=e.props.children,b(t,Array.isArray(c)?c:[c],e,n,o,"foreignObject"!==e.type&&r,i,l,u,a)),a||("value"in y&&void 0!==(c=y.value)&&c!==t.value&&w(t,"value",c,d.value,!1),"checked"in y&&void 0!==(c=y.checked)&&c!==t.checked&&w(t,"checked",c,d.checked,!1))}return t}function E(e,n,o){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,o)}}function T(e,n,o){var r,i,l;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||E(r,null,n)),o||"function"==typeof e.type||(o=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&T(r[l],n,o);null!=i&&s(i)}function N(t,e,n){return this.constructor(t,n)}function O(e,n,o){var r,l,a;t.__&&t.__(e,n),l=(r=o===i)?null:o&&o.__k||n.__k,e=_(h,null,[e]),a=[],D(n,(r?n:o||n).__k=e,l||u,u,void 0!==n.ownerSVGElement,o&&!r?[o]:l?null:n.childNodes.length?p.slice.call(n.childNodes):null,a,o||u,r),P(a,e)}function R(t,e){var n,o;for(o in e=c(c({},t.props),e),arguments.length>2&&(e.children=p.slice.call(arguments,2)),n={},e)"key"!==o&&"ref"!==o&&(n[o]=e[o]);return f(t.type,n,e.key||t.key,e.ref||t.ref,null)}t={__e:function(t,e){for(var n,o;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(t)),o)return m(n.__E=n)}catch(e){t=e}throw t}},e=function(t){return null!=t&&void 0===t.constructor},d.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&c(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),m(this))},d.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),m(this))},d.prototype.render=h,n=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,i=u,l=0;var L=Object.freeze({__proto__:null,render:O,hydrate:function(t,e){O(t,e,i)},createElement:_,h:_,Fragment:h,createRef:function(){return{current:null}},get isValidElement(){return e},Component:d,cloneElement:R,createContext:function(t){var e={},n={__c:"__cC"+l++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var o,r=this;return this.getChildContext||(o=[],this.getChildContext=function(){return e[n.__c]=r,e},this.shouldComponentUpdate=function(t){r.props.value!==t.value&&o.some((function(e){e.context=t.value,m(e)}))},this.sub=function(t){o.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){o.splice(o.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n.Provider.__=n,n},toChildArray:k,__u:T,get options(){return t}});function j(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}j("*{background-color:bisque}");var M={};function W(t,e){for(var n in e)t[n]=e[n];return t}function I(t,e,n){var o,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),l={};if(i&&i[1])for(var u=i[1].split("&"),p=0;p<u.length;p++){var a=u[p].split("=");l[decodeURIComponent(a[0])]=decodeURIComponent(a.slice(1).join("="))}t=$(t.replace(r,"")),e=$(e||"");for(var c=Math.max(t.length,e.length),s=0;s<c;s++)if(e[s]&&":"===e[s].charAt(0)){var _=e[s].replace(/(^:|[+*?]+$)/g,""),f=(e[s].match(/[+*?]+$/)||M)[0]||"",h=~f.indexOf("+"),d=~f.indexOf("*"),y=t[s]||"";if(!y&&!d&&(f.indexOf("?")<0||h)){o=!1;break}if(l[_]=decodeURIComponent(y),h||d){l[_]=t.slice(s).map(decodeURIComponent).join("/");break}}else if(e[s]!==t[s]){o=!1;break}return(!0===n.default||!1!==o)&&l}function F(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function K(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,$(e).map(B).join(""));var e}(t),t.props}function $(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function B(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var H=null,q=[],z=[],V={};function G(){var t;return""+((t=H&&H.location?H.location:H&&H.getCurrentLocation?H.getCurrentLocation():"undefined"!=typeof location?location:V).pathname||"")+(t.search||"")}function J(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=q.length;e--;)if(q[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),H&&H[e]?H[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),Q(t)}function Q(t){for(var e=!1,n=0;n<q.length;n++)!0===q[n].routeTo(t)&&(e=!0);for(var o=z.length;o--;)z[o](t);return e}function X(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return J(e)}}function Y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return X(t.currentTarget||t.target||this),Z(t)}function Z(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function tt(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(X(e))return Z(t)}}while(e=e.parentNode)}}var et=!1;var nt=function(t){function e(e){t.call(this,e),e.history&&(H=e.history),this.state={url:e.url||G()},et||("function"==typeof addEventListener&&(H||addEventListener("popstate",(function(){Q(G())})),addEventListener("click",tt)),et=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=k(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){q.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;H&&(this.unlisten=H.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),q.splice(q.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(K).sort(F).map((function(t){var o=I(e,t.props.path,t.props);if(o){if(!1!==n){var r={url:e,matches:o};return W(r,o),delete r.ref,delete r.key,R(t,r)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=this.getMatchingChildren(k(n),r,!0),l=i[0]||null,u=this.previousUrl;return r!==u&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:u,active:i,current:l})),l},e}(d);nt.subscribers=z,nt.getCurrentUrl=G,nt.route=J,nt.Router=nt,nt.Route=function(t){return _(t.component,t)},nt.Link=function(t){return _("a",W({onClick:Y},t))},nt.exec=I;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var ot=function(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}((function(t,e){var n,o;t.exports=(n=L,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this));return n.state={componentData:null},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.loadComponent=function(){var t=this;if(this.props.component)return this.setState({componentData:this.props.component});var e,n=this.props.getComponent(this.props.url,(function(e){var n=e.component;n&&t.setState({componentData:n})}),o({},this.props,this.props.matches));n&&n.then&&(e=this.props.url,n.then((function(n){e===t.props.url?t.setState({componentData:n}):t.setState({componentData:null},(function(){t.loadComponent()}))})))},e.prototype.componentWillReceiveProps=function(t){var e=this;this.props.path&&this.props.path!==t.path&&this.setState({componentData:null},(function(){e.loadComponent()}))},e.prototype.componentWillMount=function(){this.loadComponent()},e.prototype.render=function(){return this.state.componentData?n.h(this.state.componentData,this.props):this.props.loading?this.props.loading():null},e}(n.Component))})),rt=new URL("assets/rollup-b67304fe.svg",import.meta.url).href,it=function(){return _("div",{class:"bg-dark-blue"},_("h2",null,"google"),_("img",{src:rt}),_("h2",{class:"text-blue-500"},"Home 🏛"))};function lt(){return _("header",null,_("h2",null,"Demo"),_("nav",null,_("a",{href:"/"},"Home"),_("a",{href:"/about"},"About"),_("a",{href:"/view"},"Drop File")))}O(_((function(){return _("div",{class:"bg-blue-600"},_(lt,null),_(nt,null,_(it,{path:"/"}),_(ot,{path:"/about",getComponent:function(){return import("./index-3f003916.js").then((function(t){return t.default}))}}),_(ot,{path:"/view",getComponent:function(){return import("./index-34cb229a.js").then((function(t){return t.default}))}})))}),null),document.body);export{j as s,_ as v};
