var t,e,n,o,r,i,l,u={},a=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function p(t,e){for(var n in e)t[n]=e[n];return t}function _(t){var e=t.parentNode;e&&e.removeChild(t)}function s(t,e,n){var o,r=arguments,i={};for(o in e)"key"!==o&&"ref"!==o&&(i[o]=e[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===i[o]&&(i[o]=t.defaultProps[o]);return f(t,i,e&&e.key,e&&e.ref,null)}function f(e,n,o,r,i){var l={type:e,props:n,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return null==i&&(l.__v=l),t.vnode&&t.vnode(l),l}function h(t){return t.children}function d(t,e){this.props=t,this.context=e}function m(t,e){if(null==e)return t.__?m(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?m(t):null}function v(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return v(t)}}function y(e){(!e.__d&&(e.__d=!0)&&n.push(e)&&!g.__r++||r!==t.debounceRendering)&&((r=t.debounceRendering)||o)(g)}function g(){for(var t;g.__r=n.length;)t=n.sort((function(t,e){return t.__v.__b-e.__v.__b})),n=[],t.some((function(t){var e,n,o,r,i,l,u;t.__d&&(l=(i=(e=t).__v).__e,(u=e.__P)&&(n=[],(o=p({},i)).__v=o,r=A(u,i,o,e.__n,void 0!==u.ownerSVGElement,null,n,null==l?m(i):l),P(n,i),r!=l&&v(i)))}))}function b(t,e,n,o,r,i,l,c,p,s){var d,v,y,g,b,k,C,w=o&&o.__k||a,E=w.length;for(p==u&&(p=null!=l?l[0]:E?m(o,0):null),n.__k=[],d=0;d<e.length;d++)if(null!=(g=n.__k[d]=null==(g=e[d])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?f(null,g,null,null,g):Array.isArray(g)?f(h,{children:g},null,null,null):null!=g.__e||null!=g.__c?f(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(y=w[d])||y&&g.key==y.key&&g.type===y.type)w[d]=void 0;else for(v=0;v<E;v++){if((y=w[v])&&g.key==y.key&&g.type===y.type){w[v]=void 0;break}y=null}b=A(t,g,y=y||u,r,i,l,c,p,s),(v=g.ref)&&y.ref!=v&&(C||(C=[]),y.ref&&C.push(y.ref,null,g),C.push(v,g.__c||b,g)),null!=b?(null==k&&(k=b),p=x(t,g,y,w,l,b,p),"option"==n.type?t.value="":"function"==typeof n.type&&(n.__d=p)):p&&y.__e==p&&p.parentNode!=t&&(p=m(y))}if(n.__e=k,null!=l&&"function"!=typeof n.type)for(d=l.length;d--;)null!=l[d]&&_(l[d]);for(d=E;d--;)null!=w[d]&&T(w[d],w[d]);if(C)for(d=0;d<C.length;d++)U(C[d],C[++d],C[++d])}function k(t){return null==t||"boolean"==typeof t?[]:Array.isArray(t)?a.concat.apply([],t.map(k)):[t]}function x(t,e,n,o,r,i,l){var u,a,c;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(r==n||i!=l||null==i.parentNode)t:if(null==l||l.parentNode!==t)t.appendChild(i),u=null;else{for(a=l,c=0;(a=a.nextSibling)&&c<o.length;c+=2)if(a==i)break t;t.insertBefore(i,l),u=l}return void 0!==u?u:i.nextSibling}function C(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===c.test(e)?n+"px":null==n?"":n}function w(t,e,n,o,r){var i,l,u,a,c;if(r?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof o&&(i.cssText="",o=null),o)for(a in o)n&&a in n||C(i,a,"");if(n)for(c in n)o&&n[c]===o[c]||C(i,c,n[c])}else"o"===e[0]&&"n"===e[1]?(l=e!==(e=e.replace(/Capture$/,"")),u=e.toLowerCase(),e=(u in t?u:e).slice(2),n?(o||t.addEventListener(e,E,l),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,E,l)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!r&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function E(e){this.l[e.type](t.event?t.event(e):e)}function S(t,e,n){var o,r;for(o=0;o<t.__k.length;o++)(r=t.__k[o])&&(r.__=t,r.__e&&("function"==typeof r.type&&r.__k.length>1&&S(r,e,n),e=x(n,r,r,t.__k,null,r.__e,e),"function"==typeof t.type&&(t.__d=e)))}function A(e,n,o,r,i,l,u,a,c){var _,s,f,m,v,y,g,k,x,C,w,E=n.type;if(void 0!==n.constructor)return null;(_=t.__b)&&_(n);try{t:if("function"==typeof E){if(k=n.props,x=(_=E.contextType)&&r[_.__c],C=_?x?x.props.value:_.__:r,o.__c?g=(s=n.__c=o.__c).__=s.__E:("prototype"in E&&E.prototype.render?n.__c=s=new E(k,C):(n.__c=s=new d(k,C),s.constructor=E,s.render=N),x&&x.sub(s),s.props=k,s.state||(s.state={}),s.context=C,s.__n=r,f=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=E.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=p({},s.__s)),p(s.__s,E.getDerivedStateFromProps(k,s.__s))),m=s.props,v=s.state,f)null==E.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==E.getDerivedStateFromProps&&k!==m&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(k,C),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(k,s.__s,C)||n.__v===o.__v){s.props=k,s.state=s.__s,n.__v!==o.__v&&(s.__d=!1),s.__v=n,n.__e=o.__e,n.__k=o.__k,s.__h.length&&u.push(s),S(n,a,e);break t}null!=s.componentWillUpdate&&s.componentWillUpdate(k,s.__s,C),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(m,v,y)}))}s.context=C,s.props=k,s.state=s.__s,(_=t.__r)&&_(n),s.__d=!1,s.__v=n,s.__P=e,_=s.render(s.props,s.state,s.context),s.state=s.__s,null!=s.getChildContext&&(r=p(p({},r),s.getChildContext())),f||null==s.getSnapshotBeforeUpdate||(y=s.getSnapshotBeforeUpdate(m,v)),w=null!=_&&_.type==h&&null==_.key?_.props.children:_,b(e,Array.isArray(w)?w:[w],n,o,r,i,l,u,a,c),s.base=n.__e,s.__h.length&&u.push(s),g&&(s.__E=s.__=null),s.__e=!1}else null==l&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=D(o.__e,n,o,r,i,l,u,c);(_=t.diffed)&&_(n)}catch(e){n.__v=null,t.__e(e,n,o)}return n.__e}function P(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(t){t.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function D(t,e,n,o,r,i,l,c){var p,_,s,f,h,d=n.props,m=e.props;if(r="svg"===e.type||r,null!=i)for(p=0;p<i.length;p++)if(null!=(_=i[p])&&((null===e.type?3===_.nodeType:_.localName===e.type)||t==_)){t=_,i[p]=null;break}if(null==t){if(null===e.type)return document.createTextNode(m);t=r?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,m.is&&{is:m.is}),i=null,c=!1}if(null===e.type)d!==m&&t.data!=m&&(t.data=m);else{if(null!=i&&(i=a.slice.call(t.childNodes)),s=(d=n.props||u).dangerouslySetInnerHTML,f=m.dangerouslySetInnerHTML,!c){if(null!=i)for(d={},h=0;h<t.attributes.length;h++)d[t.attributes[h].name]=t.attributes[h].value;(f||s)&&(f&&s&&f.__html==s.__html||(t.innerHTML=f&&f.__html||""))}(function(t,e,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in e||w(t,i,null,n[i],o);for(i in e)r&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||w(t,i,e[i],n[i],o)})(t,m,d,r,c),f?e.__k=[]:(p=e.props.children,b(t,Array.isArray(p)?p:[p],e,n,o,"foreignObject"!==e.type&&r,i,l,u,c)),c||("value"in m&&void 0!==(p=m.value)&&p!==t.value&&w(t,"value",p,d.value,!1),"checked"in m&&void 0!==(p=m.checked)&&p!==t.checked&&w(t,"checked",p,d.checked,!1))}return t}function U(e,n,o){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,o)}}function T(e,n,o){var r,i,l;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||U(r,null,n)),o||"function"==typeof e.type||(o=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&T(r[l],n,o);null!=i&&_(i)}function N(t,e,n){return this.constructor(t,n)}function O(e,n,o){var r,l,c;t.__&&t.__(e,n),l=(r=o===i)?null:o&&o.__k||n.__k,e=s(h,null,[e]),c=[],A(n,(r?n:o||n).__k=e,l||u,u,void 0!==n.ownerSVGElement,o&&!r?[o]:l?null:n.childNodes.length?a.slice.call(n.childNodes):null,c,o||u,r),P(c,e)}function R(t,e){var n,o;for(o in e=p(p({},t.props),e),arguments.length>2&&(e.children=a.slice.call(arguments,2)),n={},e)"key"!==o&&"ref"!==o&&(n[o]=e[o]);return f(t.type,n,e.key||t.key,e.ref||t.ref,null)}t={__e:function(t,e){for(var n,o;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(t)),o)return y(n.__E=n)}catch(e){t=e}throw t}},e=function(t){return null!=t&&void 0===t.constructor},d.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&p(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),y(this))},d.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),y(this))},d.prototype.render=h,n=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,i=u,l=0;var j=Object.freeze({__proto__:null,render:O,hydrate:function(t,e){O(t,e,i)},createElement:s,h:s,Fragment:h,createRef:function(){return{current:null}},get isValidElement(){return e},Component:d,cloneElement:R,createContext:function(t){var e={},n={__c:"__cC"+l++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var o,r=this;return this.getChildContext||(o=[],this.getChildContext=function(){return e[n.__c]=r,e},this.shouldComponentUpdate=function(t){r.props.value!==t.value&&o.some((function(e){e.context=t.value,y(e)}))},this.sub=function(t){o.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){o.splice(o.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n.Provider.__=n,n},toChildArray:k,__u:T,get options(){return t}});function L(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}L("*{background-color:bisque}");var M={};function W(t,e){for(var n in e)t[n]=e[n];return t}function H(t,e,n){var o,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),l={};if(i&&i[1])for(var u=i[1].split("&"),a=0;a<u.length;a++){var c=u[a].split("=");l[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}t=K(t.replace(r,"")),e=K(e||"");for(var p=Math.max(t.length,e.length),_=0;_<p;_++)if(e[_]&&":"===e[_].charAt(0)){var s=e[_].replace(/(^:|[+*?]+$)/g,""),f=(e[_].match(/[+*?]+$/)||M)[0]||"",h=~f.indexOf("+"),d=~f.indexOf("*"),m=t[_]||"";if(!m&&!d&&(f.indexOf("?")<0||h)){o=!1;break}if(l[s]=decodeURIComponent(m),h||d){l[s]=t.slice(_).map(decodeURIComponent).join("/");break}}else if(e[_]!==t[_]){o=!1;break}return(!0===n.default||!1!==o)&&l}function F(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function I(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,K(e).map(q).join(""));var e}(t),t.props}function K(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function q(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var $=null,B=[],z=[],V={};function G(){var t;return""+((t=$&&$.location?$.location:$&&$.getCurrentLocation?$.getCurrentLocation():"undefined"!=typeof location?location:V).pathname||"")+(t.search||"")}function Y(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=B.length;e--;)if(B[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),$&&$[e]?$[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),J(t)}function J(t){for(var e=!1,n=0;n<B.length;n++)!0===B[n].routeTo(t)&&(e=!0);for(var o=z.length;o--;)z[o](t);return e}function Q(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return Y(e)}}function X(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return Q(t.currentTarget||t.target||this),Z(t)}function Z(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function tt(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(Q(e))return Z(t)}}while(e=e.parentNode)}}var et=!1;var nt=function(t){function e(e){t.call(this,e),e.history&&($=e.history),this.state={url:e.url||G()},et||("function"==typeof addEventListener&&($||addEventListener("popstate",(function(){J(G())})),addEventListener("click",tt)),et=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=k(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){B.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;$&&(this.unlisten=$.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),B.splice(B.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(I).sort(F).map((function(t){var o=H(e,t.props.path,t.props);if(o){if(!1!==n){var r={url:e,matches:o};return W(r,o),delete r.ref,delete r.key,R(t,r)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=this.getMatchingChildren(k(n),r,!0),l=i[0]||null,u=this.previousUrl;return r!==u&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:u,active:i,current:l})),l},e}(d);nt.subscribers=z,nt.getCurrentUrl=G,nt.route=Y,nt.Router=nt,nt.Route=function(t){return s(t.component,t)},nt.Link=function(t){return s("a",W({onClick:X},t))},nt.exec=H;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var ot=function(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}((function(t,e){var n,o;t.exports=(n=j,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this));return n.state={componentData:null},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.loadComponent=function(){var t=this;if(this.props.component)return this.setState({componentData:this.props.component});var e,n=this.props.getComponent(this.props.url,(function(e){var n=e.component;n&&t.setState({componentData:n})}),o({},this.props,this.props.matches));n&&n.then&&(e=this.props.url,n.then((function(n){e===t.props.url?t.setState({componentData:n}):t.setState({componentData:null},(function(){t.loadComponent()}))})))},e.prototype.componentWillReceiveProps=function(t){var e=this;this.props.path&&this.props.path!==t.path&&this.setState({componentData:null},(function(){e.loadComponent()}))},e.prototype.componentWillMount=function(){this.loadComponent()},e.prototype.render=function(){return this.state.componentData?n.h(this.state.componentData,this.props):this.props.loading?this.props.loading():null},e}(n.Component))}));function rt(){return s("header",null,s("h2",null,"Demo"),s("nav",null,s("a",{href:"/"},"Home"),s("a",{href:"/about"},"About"),s("a",{href:"/view"},"Drop File")))}var it,lt=[],ut=t.__r,at=t.diffed,ct=t.__c,pt=t.unmount;function _t(){lt.some((function(e){if(e.__P)try{e.__H.__h.forEach(ft),e.__H.__h.forEach(ht),e.__H.__h=[]}catch(n){return e.__H.__h=[],t.__e(n,e.__v),!0}})),lt=[]}t.__r=function(t){ut&&ut(t),0;var e=t.__c.__H;e&&(e.__h.forEach(ft),e.__h.forEach(ht),e.__h=[])},t.diffed=function(e){at&&at(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==lt.push(n)&&it===t.requestAnimationFrame||((it=t.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(o),st&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);st&&(e=requestAnimationFrame(n))})(_t))},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(ft),e.__h=e.__h.filter((function(t){return!t.__||ht(t)}))}catch(o){n.some((function(t){t.__h&&(t.__h=[])})),n=[],t.__e(o,e.__v)}})),ct&&ct(e,n)},t.unmount=function(e){pt&&pt(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(ft)}catch(e){t.__e(e,n.__v)}};var st="function"==typeof requestAnimationFrame;function ft(t){"function"==typeof t.u&&t.u()}function ht(t){t.u=t.__()}L("main{height:70vh;padding-top:10vh}#drop-area{border:2px dashed #ccc;border-radius:10px;width:80vw;max-width:480px;font-family:sans-serif;margin:auto;padding:20px}#drop-area.highlight{border-color:purple}p{margin:0}p#formError{visibility:hidden;background-color:#c00;border-radius:6px;color:#fff;text-align:center;padding:8px 0;width:80vw;max-width:480px;margin:1rem auto 0}.my-form{margin-bottom:10px}#gallery{margin-top:10px}#gallery img{width:150px;margin-bottom:10px;margin-right:10px;vertical-align:middle}.button{display:inline-block;padding:10px;background:#ccc;cursor:pointer;border-radius:5px;border:1px solid #ccc}.button:hover{background:#ddd}#fileElem{display:none}");var dt=function(){var t;return s("div",null,s("main",null,s("section",null,s("div",{id:"drop-area",onDrop:function(t){return console.log(t)}},s("form",{class:"my-form",enctype:"multipart/form-data"},s("p",null,"You can drag an drop multiple files onto this area to upload them."),s("input",{type:"file",id:"fileElem",multiple:!0,accept:"image/*",onChange:(t=void 0,console.log(t))}),s("label",{for:"fileElem",class:"button"},"Select some files"),s("div",{id:"gallery"}))),s("p",{id:"formError"}))))},mt=Object.freeze({__proto__:null,default:dt});O(s((function(){return s("div",{class:"bg-blue-600"},s(rt,null),s(nt,null,s(dt,{path:"/"}),s(ot,{path:"/about",getComponent:function(){return import("./index-ee00e191.js").then((function(t){return t.default}))}}),s(ot,{path:"/view",getComponent:function(){return Promise.resolve().then((function(){return mt})).then((function(t){return t.default}))}})))}),null),document.body);export{s as v};
