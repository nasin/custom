/*! jQuery Printelement - v2.0.0 - 2012-04-19
* https://github.com/erikzaadi/jQuery.printElement
* Copyright (c) 2012 erikzaadi; Licensed MIT, GPL */
(function(a,b){function e(b,e){var g=i(b,e),h=null,j=null;if(e.printMode.toLowerCase()==="popup")h=a.open("about:blank","printElementWindow","width=650,height=440,scrollbars=yes"),j=h.document;else{var k="printElement_"+Math.round(Math.random()*99999).toString(),l=c.createElement("IFRAME");d(l).attr({style:e.iframeElementOptions.styleToAdd,id:k,className:e.iframeElementOptions.classNameToAdd,frameBorder:0,scrolling:"no",src:"about:blank"}),c.body.appendChild(l),j=l.contentWindow||l.contentDocument,j.document&&(j=j.document),l=c.frames?c.frames[k]:c.getElementById(k),h=l.contentWindow||l}focus(),j.open(),j.write(g),j.close(),f(h)}function f(a){a&&a.printPage?a.printPage():setTimeout(function(){f(a)},50)}function g(a){var b=d(a);d(":checked",b).each(function(){this.setAttribute("checked","checked")}),d("input[type='text']",b).each(function(){this.setAttribute("value",d(this).val())}),d("select",b).each(function(){var a=d(this);d("option",a).each(function(){a.val()===d(this).val()&&this.setAttribute("selected","selected")})}),d("textarea",b).each(function(){var a=d(this).attr("value");d.browser.mozilla&&this.firstChild?this.firstChild.textContent=a:this.innerHTML=a});var c=d("<div></div>").append(b.clone()).html();return c}function h(){var b=a.location.port?":"+a.location.port:"";return a.location.protocol+"//"+a.location.hostname+b+a.location.pathname}function i(a,b){var e=d(a),f=g(a),i=[];i.push("<html><head><title>"+b.pageTitle+"</title>");if(b.overrideElementCSS){if(b.overrideElementCSS.length>0)for(var j=0;j<b.overrideElementCSS.length;j++){var k=b.overrideElementCSS[j];typeof k=="string"?i.push('<link type="text/css" rel="stylesheet" href="'+k+'" >'):i.push('<link type="text/css" rel="stylesheet" href="'+k.href+'" media="'+k.media+'" >')}}else d("link",c).filter(function(){return d(this).attr("rel").toLowerCase()==="stylesheet"}).each(function(){i.push('<link type="text/css" rel="stylesheet" href="'+d(this).attr("href")+'" media="'+d(this).attr("media")+'" >')});return i.push('<base href="'+h()+'" />'),i.push('</head><body style="'+b.printBodyOptions.styleToAdd+'" class="'+b.printBodyOptions.classNameToAdd+'">'),i.push('<div class="'+e.attr("class")+'">'+f+"</div>"),i.push('<script type="text/javascript">function printPage(){focus();print();'+(!d.browser.opera&&!b.leaveOpen&&b.printMode.toLowerCase()==="popup"?"close();":"")+"}</script>"),i.push("</body></html>"),i.join("")}var c=a.document,d=a.jQuery;d.fn.printElement=function(a){var b=d.extend({},d.fn.printElement.defaults,a);return b.printMode==="iframe"&&(d.browser.opera||/chrome/.test(navigator.userAgent.toLowerCase()))&&(b.printMode="popup"),d("[id^='printElement_']").remove(),this.each(function(){var a=d.meta?d.extend({},b,d(this).data()):b;e(d(this),a)})},d.fn.printElement.defaults={printMode:"iframe",pageTitle:"",overrideElementCSS:null,printBodyOptions:{styleToAdd:"padding:10px;margin:10px;",classNameToAdd:""},leaveOpen:!1,iframeElementOptions:{styleToAdd:"border:none;position:absolute;width:0px;height:0px;bottom:0px;left:0px;",classNameToAdd:""}},d.fn.printElement.cssElement={href:"",media:""}})(window);

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;
g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,
c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&
a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,
c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,
a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&
(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};
j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,
0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,
e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=
i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=
i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=
g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));
return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&
c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=
function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};
b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,
b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=
function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||
u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};
b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);


// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

// Custom Easing
jQuery.extend(jQuery.easing,{easeInOutExpo:function(a,b,c,d,e){if(b==0){return c}if(b==e){return c+d}if((b/=e/2)<1){return d/2*Math.pow(2,10*(b-1))+c}return d/2*(-Math.pow(2,-10*--b)+2)+c}});


// ColorBox v1.3.19 - jQuery lightbox plugin
// (c) 2011 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function Z(c,d,e){var g=b.createElement(c);return d&&(g.id=f+d),e&&(g.style.cssText=e),a(g)}function $(a){var b=y.length,c=(Q+a)%b;return c<0?b+c:c}function _(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function ba(a){return K.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(a)}function bb(){var b;K=a.extend({},a.data(P,e));for(b in K)a.isFunction(K[b])&&b.slice(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function bc(b,c){a.event.trigger(b),c&&c.call(P)}function bd(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(K.loop||y[Q+1])a=setTimeout(W.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(W.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,function(){W.next(),d()}),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function be(b){U||(P=b,bb(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e).rel||this.rel;return b===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1)),S||(S=T=!0,r.show(),K.returnFocus&&a(P).blur().one(l,function(){a(this).focus()}),q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=_(K.initialWidth,"x"),K.h=_(K.initialHeight,"y"),W.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),bc(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()),W.load(!0))}function bf(){!r&&b.body&&(Y=!1,z=a(c),r=Z(X).attr({id:e,"class":n?f+(o?"IE6":"IE"):""}).hide(),q=Z(X,"Overlay",o?"position:absolute":"").hide(),s=Z(X,"Wrapper"),t=Z(X,"Content").append(A=Z(X,"LoadedContent","width:0; height:0; overflow:hidden"),C=Z(X,"LoadingOverlay").add(Z(X,"LoadingGraphic")),D=Z(X,"Title"),E=Z(X,"Current"),G=Z(X,"Next"),H=Z(X,"Previous"),F=Z(X,"Slideshow").bind(h,bd),I=Z(X,"Close")),s.append(Z(X).append(Z(X,"TopLeft"),u=Z(X,"TopCenter"),Z(X,"TopRight")),Z(X,!1,"clear:left").append(v=Z(X,"MiddleLeft"),t,w=Z(X,"MiddleRight")),Z(X,!1,"clear:left").append(Z(X,"BottomLeft"),x=Z(X,"BottomCenter"),Z(X,"BottomRight"))).find("div div").css({"float":"left"}),B=Z(X,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),J=G.add(H).add(E).add(F),a(b.body).append(q,r.append(s,B)))}function bg(){return r?(Y||(Y=!0,L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}),G.click(function(){W.next()}),H.click(function(){W.prev()}),I.click(function(){W.close()}),q.click(function(){K.overlayClose&&W.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),W.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))}),a("."+g,b).live("click",function(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||(a.preventDefault(),be(this))})),!0):!1}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=!a.support.opacity&&!a.support.style,o=n&&!c.XMLHttpRequest,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X="div",Y;if(a.colorbox)return;a(bf),W=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{},bf();if(bg()){if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b))}).addClass(g),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&be(f[0])}return f},W.position=function(a,b){function i(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var c=0,d=0,e=r.offset(),g=z.scrollTop(),h=z.scrollLeft();z.unbind("resize."+f),r.css({top:-9e4,left:-9e4}),K.fixed&&!o?(e.top-=g,e.left-=h,r.css({position:"fixed"})):(c=g,d=h,r.css({position:"absolute"})),K.right!==!1?d+=Math.max(z.width()-K.w-O-M-_(K.right,"x"),0):K.left!==!1?d+=_(K.left,"x"):d+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?c+=Math.max(z.height()-K.h-N-L-_(K.bottom,"y"),0):K.top!==!1?c+=_(K.top,"y"):c+=Math.round(Math.max(z.height()-K.h-N-L,0)/2),r.css({top:e.top,left:e.left}),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:c,left:d},{duration:a,complete:function(){i(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",K.reposition&&setTimeout(function(){z.bind("resize."+f,W.position)},1),b&&b()},step:function(){i(this)}})},W.resize=function(a){S&&(a=a||{},a.width&&(K.w=_(a.width,"x")-O-M),a.innerWidth&&(K.w=_(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=_(a.height,"y")-N-L),a.innerHeight&&(K.h=_(a.innerHeight,"y")),!a.innerHeight&&!a.height&&(A.css({height:"auto"}),K.h=A.height()),A.css({height:K.h}),W.position(K.transition==="none"?0:K.speed))},W.prep=function(b){function g(){return K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function h(){return K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(!S)return;var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Z(X,"LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function q(){n&&r[0].style.removeAttribute("filter")}var b,c,g=y.length,h,i="frameBorder",k="allowTransparency",l,o,p;if(!S)return;l=function(){clearTimeout(V),C.hide(),bc(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show();if(g>1){typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",g)).show(),G[K.loop||Q<g-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),K.slideshow&&F.show();if(K.preloading){b=[$(-1),$(1)];while(c=y[b.pop()])o=a.data(c,e).href||c.href,a.isFunction(o)&&(o=o.call(c)),ba(o)&&(p=new Image,p.src=o)}}else J.hide();K.iframe?(h=Z("iframe")[0],i in h&&(h[i]=0),k in h&&(h[k]="true"),h.name=f+ +(new Date),K.fastIframe?l():a(h).one("load",l),h.src=K.href,K.scrolling||(h.scrolling="no"),a(h).addClass(f+"Iframe").appendTo(A).one(m,function(){h.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,q):q()},K.transition==="fade"?r.fadeTo(d,0,function(){W.position(0,c)}):W.position(d,c)},W.load=function(b){var c,d,e=W.prep;T=!0,R=!1,P=y[Q],b||bb(),bc(m),bc(i,K.onLoad),K.h=K.height?_(K.height,"y")-N-L:K.innerHeight&&_(K.innerHeight,"y"),K.w=K.width?_(K.width,"x")-O-M:K.innerWidth&&_(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=_(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=_(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,V=setTimeout(function(){C.show()},100),K.inline?(Z(X).hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):ba(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Z(X,"Error").text("This image could not be loaded"))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(K.loop||y[Q+1])&&(R.style.cursor="pointer",R.onclick=function(){W.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Z(X,"Error").text("Request unsuccessful: "+d.statusText):a(this).contents())})},W.next=function(){!T&&y[1]&&(K.loop||y[Q+1])&&(Q=$(1),W.load())},W.prev=function(){!T&&y[1]&&(K.loop||Q)&&(Q=$(-1),W.load())},W.close=function(){S&&!U&&(U=!0,S=!1,bc(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),bc(m),A.remove(),setTimeout(function(){U=!1,bc(l,K.onClosed)},1)}))},W.remove=function(){a([]).add(r).add(q).remove(),r=null,a("."+g).removeData(e).removeClass(g).die()},W.element=function(){return a(P)},W.settings=d})(jQuery,document,this);


/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);






/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);


/**
 * Copyright (c) 2005 - 2010, James Auldridge
 * All rights reserved.
 *
 * Licensed under the BSD, MIT, and GPL (your choice!) Licenses:
 *  http://code.google.com/p/cookies/wiki/License
 *
 */
var jaaulde=window.jaaulde||{};jaaulde.utils=jaaulde.utils||{};jaaulde.utils.cookies=(function(){var resolveOptions,assembleOptionsString,parseCookies,constructor,defaultOptions={expiresAt:null,path:'/',domain:null,secure:false};resolveOptions=function(options){var returnValue,expireDate;if(typeof options!=='object'||options===null){returnValue=defaultOptions;}else
{returnValue={expiresAt:defaultOptions.expiresAt,path:defaultOptions.path,domain:defaultOptions.domain,secure:defaultOptions.secure};if(typeof options.expiresAt==='object'&&options.expiresAt instanceof Date){returnValue.expiresAt=options.expiresAt;}else if(typeof options.hoursToLive==='number'&&options.hoursToLive!==0){expireDate=new Date();expireDate.setTime(expireDate.getTime()+(options.hoursToLive*60*60*1000));returnValue.expiresAt=expireDate;}if(typeof options.path==='string'&&options.path!==''){returnValue.path=options.path;}if(typeof options.domain==='string'&&options.domain!==''){returnValue.domain=options.domain;}if(options.secure===true){returnValue.secure=options.secure;}}return returnValue;};assembleOptionsString=function(options){options=resolveOptions(options);return((typeof options.expiresAt==='object'&&options.expiresAt instanceof Date?'; expires='+options.expiresAt.toGMTString():'')+'; path='+options.path+(typeof options.domain==='string'?'; domain='+options.domain:'')+(options.secure===true?'; secure':''));};parseCookies=function(){var cookies={},i,pair,name,value,separated=document.cookie.split(';'),unparsedValue;for(i=0;i<separated.length;i=i+1){pair=separated[i].split('=');name=pair[0].replace(/^\s*/,'').replace(/\s*$/,'');try
{value=decodeURIComponent(pair[1]);}catch(e1){value=pair[1];}if(typeof JSON==='object'&&JSON!==null&&typeof JSON.parse==='function'){try
{unparsedValue=value;value=JSON.parse(value);}catch(e2){value=unparsedValue;}}cookies[name]=value;}return cookies;};constructor=function(){};constructor.prototype.get=function(cookieName){var returnValue,item,cookies=parseCookies();if(typeof cookieName==='string'){returnValue=(typeof cookies[cookieName]!=='undefined')?cookies[cookieName]:null;}else if(typeof cookieName==='object'&&cookieName!==null){returnValue={};for(item in cookieName){if(typeof cookies[cookieName[item]]!=='undefined'){returnValue[cookieName[item]]=cookies[cookieName[item]];}else
{returnValue[cookieName[item]]=null;}}}else
{returnValue=cookies;}return returnValue;};constructor.prototype.filter=function(cookieNameRegExp){var cookieName,returnValue={},cookies=parseCookies();if(typeof cookieNameRegExp==='string'){cookieNameRegExp=new RegExp(cookieNameRegExp);}for(cookieName in cookies){if(cookieName.match(cookieNameRegExp)){returnValue[cookieName]=cookies[cookieName];}}return returnValue;};constructor.prototype.set=function(cookieName,value,options){if(typeof options!=='object'||options===null){options={};}if(typeof value==='undefined'||value===null){value='';options.hoursToLive=-8760;}else if(typeof value!=='string'){if(typeof JSON==='object'&&JSON!==null&&typeof JSON.stringify==='function'){value=JSON.stringify(value);}else
{throw new Error('cookies.set() received non-string value and could not serialize.');}}var optionsString=assembleOptionsString(options);document.cookie=cookieName+'='+encodeURIComponent(value)+optionsString;};constructor.prototype.del=function(cookieName,options){var allCookies={},name;if(typeof options!=='object'||options===null){options={};}if(typeof cookieName==='boolean'&&cookieName===true){allCookies=this.get();}else if(typeof cookieName==='string'){allCookies[cookieName]=true;}for(name in allCookies){if(typeof name==='string'&&name!==''){this.set(name,null,options);}}};constructor.prototype.test=function(){var returnValue=false,testName='cT',testValue='data';this.set(testName,testValue);if(this.get(testName)===testValue){this.del(testName);returnValue=true;}return returnValue;};constructor.prototype.setOptions=function(options){if(typeof options!=='object'){options=null;}defaultOptions=resolveOptions(options);};return new constructor();})();(function(){if(window.jQuery){(function($){$.cookies=jaaulde.utils.cookies;var extensions={cookify:function(options){return this.each(function(){var i,nameAttrs=['name','id'],name,$this=$(this),value;for(i in nameAttrs){if(!isNaN(i)){name=$this.attr(nameAttrs[i]);if(typeof name==='string'&&name!==''){if($this.is(':checkbox, :radio')){if($this.attr('checked')){value=$this.val();}}else if($this.is(':input')){value=$this.val();}else
{value=$this.html();}if(typeof value!=='string'||value===''){value=null;}$.cookies.set(name,value,options);break;}}}});},cookieFill:function(){return this.each(function(){var n,getN,nameAttrs=['name','id'],name,$this=$(this),value;getN=function(){n=nameAttrs.pop();return!!n;};while(getN()){name=$this.attr(n);if(typeof name==='string'&&name!==''){value=$.cookies.get(name);if(value!==null){if($this.is(':checkbox, :radio')){if($this.val()===value){$this.attr('checked','checked');}else
{$this.removeAttr('checked');}}else if($this.is(':input')){$this.val(value);}else
{$this.html(value);}}break;}}});},cookieBind:function(options){return this.each(function(){var $this=$(this);$this.cookieFill().change(function(){$this.cookify(options);});});}};$.each(extensions,function(i){$.fn[i]=this;});})(window.jQuery);}})();




/**
 * --------------------------------------------------------------------
 * jQuery-Plugin "pngFix"
 * Version: 1.2, 09.03.2009
 * by Andreas Eberhard, andreas.eberhard@gmail.com
 *                      http://jquery.andreaseberhard.de/
 *
 * Copyright (c) 2007 Andreas Eberhard
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 * --------------------------------------------------------------------
 */
(function($) {

jQuery.fn.pngFix = function(settings) {

	// Settings
	settings = jQuery.extend({
		blankgif: 'blank.gif'
	}, settings);

	var ie55 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 5.5") != -1);
	var ie6 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);

	if (jQuery.browser.msie && (ie55 || ie6)) {

		//fix images with png-source
		jQuery(this).find("img[src$='.png']").each(function() {
		//jQuery(this).find("img[src$=.png]").each(function() {

			jQuery(this).attr('width',jQuery(this).width());
			jQuery(this).attr('height',jQuery(this).height());

			var prevStyle = '';
			var strNewHTML = '';
			var imgId = (jQuery(this).attr('id')) ? 'id="' + jQuery(this).attr('id') + '" ' : '';
			var imgClass = (jQuery(this).attr('class')) ? 'class="' + jQuery(this).attr('class') + '" ' : '';
			var imgTitle = (jQuery(this).attr('title')) ? 'title="' + jQuery(this).attr('title') + '" ' : '';
			var imgAlt = (jQuery(this).attr('alt')) ? 'alt="' + jQuery(this).attr('alt') + '" ' : '';
			var imgAlign = (jQuery(this).attr('align')) ? 'float:' + jQuery(this).attr('align') + ';' : '';
			var imgHand = (jQuery(this).parent().attr('href')) ? 'cursor:hand;' : '';
			if (this.style.border) {
				prevStyle += 'border:'+this.style.border+';';
				this.style.border = '';
			}
			if (this.style.padding) {
				prevStyle += 'padding:'+this.style.padding+';';
				this.style.padding = '';
			}
			if (this.style.margin) {
				prevStyle += 'margin:'+this.style.margin+';';
				this.style.margin = '';
			}
			var imgStyle = (this.style.cssText);

			strNewHTML += '<span '+imgId+imgClass+imgTitle+imgAlt;
			strNewHTML += 'style="position:relative;white-space:pre-line;display:inline-block;background:transparent;'+imgAlign+imgHand;
			strNewHTML += 'width:' + jQuery(this).width() + 'px;' + 'height:' + jQuery(this).height() + 'px;';
			strNewHTML += 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader' + '(src=\'' + jQuery(this).attr('src') + '\', sizingMethod=\'scale\');';
			strNewHTML += imgStyle+'"></span>';
			if (prevStyle != ''){
				strNewHTML = '<span style="position:relative;display:inline-block;'+prevStyle+imgHand+'width:' + jQuery(this).width() + 'px;' + 'height:' + jQuery(this).height() + 'px;'+'">' + strNewHTML + '</span>';
			}

			jQuery(this).hide();
			jQuery(this).after(strNewHTML);

		});

		// fix css background pngs
		jQuery(this).find("*").each(function(){
			var bgIMG = jQuery(this).css('background-image');
			if(bgIMG.indexOf(".png")!=-1){
				var iebg = bgIMG.split('url("')[1].split('")')[0];
				jQuery(this).css('background-image', 'none');
				jQuery(this).get(0).runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + iebg + "',sizingMethod='scale')";
			}
		});
		
		//fix input with png-source
		jQuery(this).find("input[src$=.png]").each(function() {
			var bgIMG = jQuery(this).attr('src');
			jQuery(this).get(0).runtimeStyle.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader' + '(src=\'' + bgIMG + '\', sizingMethod=\'scale\');';
   		jQuery(this).attr('src', settings.blankgif)
		});
	
	}
	
	return jQuery;

};

})(jQuery);


/**
 * Equal Heights Plugin
 * Equalize the heights of elements. Great for columns or any elements
 * that need to be the same size (floats, etc).
 * 
 * Version 1.0
 * Updated 12/10/2008
 *
 * Copyright (c) 2008 Rob Glazebrook (cssnewbie.com) 
 *
 * Usage: $(object).equalHeights([minHeight], [maxHeight]);
 * 
 * Example 1: $(".cols").equalHeights(); Sets all columns to the same height.
 * Example 2: $(".cols").equalHeights(400); Sets all cols to at least 400px tall.
 * Example 3: $(".cols").equalHeights(100,300); Cols are at least 100 but no more
 * than 300 pixels tall. Elements with too much content will gain a scrollbar.
 * 
 */

(function ($) {
  $.fn.equalHeights = function (minHeight, maxHeight) {
    tallest = (minHeight) ? minHeight : 0;
    this.each(function () {
      if ($.browser.msie && $.browser.version < 7) {
        $(this).css("height", "");
      }
      $(this).css("min-height", "");
    });
    this.each(function () {
      if ($(this).height() > tallest) {
        tallest = $(this).height();
      }
    });
    if ((maxHeight) && tallest > maxHeight) tallest = maxHeight;
    return this.each(function () {
      if ($.browser.msie && $.browser.version < 7) {
        $(this).css("height", tallest + "px");
      }
      $(this).css("min-height", tallest + "px");
    });
  }
})(jQuery);



/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);



/*!
* qTip2 - Pretty powerful tooltips
* http://craigsworks.com/projects/qtip2/
*
* Version: nightly
* Copyright 2009-2010 Craig Michael Thompson - http://craigsworks.com
*
* Dual licensed under MIT or GPLv2 licenses
*   http://en.wikipedia.org/wiki/MIT_License
*   http://en.wikipedia.org/wiki/GNU_General_Public_License
*
* Date: Tue Jul  3 15:45:43.0000000000 2012
*//*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true *//*global window: false, jQuery: false, console: false, define: false */(function(a){typeof define==="function"&&define.amd?define(["jquery"],a):a(jQuery)})(function(a){function M(o,p){function I(a){var b=a.precedance===g,c=x[b?h:i],d=x[b?i:h],e=a.string().indexOf(n)>-1,f=c*(e?.5:1),j=Math.pow,k=Math.round,l,m,o,p=Math.sqrt(j(f,2)+j(d,2)),q=[z/f*p,z/d*p];q[2]=Math.sqrt(j(q[0],2)-j(z,2)),q[3]=Math.sqrt(j(q[1],2)-j(z,2)),l=p+q[2]+q[3]+(e?0:q[0]),m=l/p,o=[k(m*d),k(m*c)];return{height:o[b?0:1],width:o[b?1:0]}}function H(b){var c=u.titlebar&&b.y===j,d=c?u.titlebar:u.content,e=a.browser.mozilla,f=e?"-moz-":a.browser.webkit?"-webkit-":"",g=b.y+(e?"":"-")+b.x,h=f+(e?"border-radius-"+g:"border-"+g+"-radius");return parseInt(d.css(h),10)||parseInt(v.css(h),10)||0}function G(a,b,c){b=b?b:a[a.precedance];var d=v.hasClass(C),e=u.titlebar&&a.y===j,f=e?u.titlebar:u.tooltip,g="border-"+b+"-width",h;v.addClass(C),h=parseInt(f.css(g),10),h=(c?h||parseInt(v.css(g),10):h)||0,v.toggleClass(C,d);return h}function F(a,d,h,i){if(u.tip){var p=r.corner.clone(),s=h.adjusted,v=o.options.position.adjust.method.split(" "),x=v[0],y=v[1]||v[0],z={left:c,top:c,x:0,y:0},A,B={},C;r.corner.fixed!==b&&(x===q&&p.precedance===f&&s.left&&p.y!==n?p.precedance=p.precedance===f?g:f:x!==q&&s.left&&(p.x=p.x===n?s.left>0?k:m:p.x===k?m:k),y===q&&p.precedance===g&&s.top&&p.x!==n?p.precedance=p.precedance===g?f:g:y!==q&&s.top&&(p.y=p.y===n?s.top>0?j:l:p.y===j?l:j),p.string()!==w.corner.string()&&(w.top!==s.top||w.left!==s.left)&&r.update(p,c)),A=r.position(p,s),A[p.x]+=G(p,p.x,b),A[p.y]+=G(p,p.y,b),A.right!==e&&(A.left=-A.right),A.bottom!==e&&(A.top=-A.bottom),A.user=Math.max(0,t.offset);if(z.left=x===q&&!!s.left)p.x===n?B["margin-left"]=z.x=A["margin-left"]-s.left:(C=A.right!==e?[s.left,-A.left]:[-s.left,A.left],(z.x=Math.max(C[0],C[1]))>C[0]&&(h.left-=s.left,z.left=c),B[A.right!==e?m:k]=z.x);if(z.top=y===q&&!!s.top)p.y===n?B["margin-top"]=z.y=A["margin-top"]-s.top:(C=A.bottom!==e?[s.top,-A.top]:[-s.top,A.top],(z.y=Math.max(C[0],C[1]))>C[0]&&(h.top-=s.top,z.top=c),B[A.bottom!==e?l:j]=z.y);u.tip.css(B).toggle(!(z.x&&z.y||p.x===n&&z.y||p.y===n&&z.x)),h.left-=A.left.charAt?A.user:x!==q||z.top||!z.left&&!z.top?A.left:0,h.top-=A.top.charAt?A.user:y!==q||z.left||!z.left&&!z.top?A.top:0,w.left=s.left,w.top=s.top,w.corner=p.clone()}}function E(){x.width=t.width,x.height=t.height}function D(){x.width=t.height,x.height=t.width}var r=this,t=o.options.style.tip,u=o.elements,v=u.tooltip,w={top:0,left:0},x={width:t.width,height:t.height},y={},z=t.border||0,A=".qtip-tip",B=!!(a("<canvas />")[0]||{}).getContext;r.mimic=r.corner=d,r.border=z,r.offset=t.offset,r.size=x,o.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){r.init()||r.destroy(),o.reposition()},"^style.tip.(height|width)$":function(){x={width:t.width,height:t.height},r.create(),r.update(),o.reposition()},"^content.title.text|style.(classes|widget)$":function(){u.tip&&u.tip.length&&r.update()}},a.extend(r,{init:function(){var b=r.detectCorner()&&(B||a.browser.msie);b&&(r.create(),r.update(),v.unbind(A).bind("tooltipmove"+A,F));return b},detectCorner:function(){var a=t.corner,d=o.options.position,e=d.at,f=d.my.string?d.my.string():d.my;if(a===c||f===c&&e===c)return c;a===b?r.corner=new s.Corner(f):a.string||(r.corner=new s.Corner(a),r.corner.fixed=b),w.corner=new s.Corner(r.corner.string());return r.corner.string()!=="centercenter"},detectColours:function(b){var c,d,e,f=u.tip.css("cssText",""),g=b||r.corner,h=g[g.precedance],i="border-"+h+"-color",k="border"+h.charAt(0)+h.substr(1)+"Color",l=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,m="background-color",o="transparent",p=" !important",q=u.titlebar&&(g.y===j||g.y===n&&f.position().top+x.height/2+t.offset<u.titlebar.outerHeight(1)),s=q?u.titlebar:u.tooltip;v.addClass(C),y.fill=d=f.css(m),y.border=e=f[0].style[k]||f.css(i)||v.css(i);if(!d||l.test(d))y.fill=s.css(m)||o,l.test(y.fill)&&(y.fill=v.css(m)||d);if(!e||l.test(e)||e===a(document.body).css("color")){y.border=s.css(i)||o;if(l.test(y.border)||y.border===s.css("color"))y.border=v.css(i)||v.css(k)||e}a("*",f).add(f).css("cssText",m+":"+o+p+";border:0"+p+";"),v.removeClass(C)},create:function(){var b=x.width,c=x.height,d;u.tip&&u.tip.remove(),u.tip=a("<div />",{"class":"ui-tooltip-tip"}).css({width:b,height:c}).prependTo(v),B?a("<canvas />").appendTo(u.tip)[0].getContext("2d").save():(d='<vml:shape coordorigin="0,0" style="display:inline-block; position:absolute; behavior:url(#default#VML);"></vml:shape>',u.tip.html(d+d),a("*",u.tip).bind("click mousedown",function(a){a.stopPropagation()}))},update:function(e,h){var i=u.tip,o=i.children(),p=x.width,q=x.height,A="px solid ",C="px dashed transparent",F=t.mimic,H=Math.round,J,K,M,N,O;e||(e=w.corner||r.corner),F===c?F=e:(F=new s.Corner(F),F.precedance=e.precedance,F.x==="inherit"?F.x=e.x:F.y==="inherit"?F.y=e.y:F.x===F.y&&(F[e.precedance]=e[e.precedance])),J=F.precedance,e.precedance===f?D():E(),u.tip.css({width:p=x.width,height:q=x.height}),r.detectColours(e),y.border!=="transparent"?(z=G(e,d,b),t.border===0&&z>0&&(y.fill=y.border),r.border=z=t.border!==b?t.border:z):r.border=z=0,M=L(F,p,q),r.size=O=I(e),i.css(O),e.precedance===g?N=[H(F.x===k?z:F.x===m?O.width-p-z:(O.width-p)/2),H(F.y===j?O.height-q:0)]:N=[H(F.x===k?O.width-p:0),H(F.y===j?z:F.y===l?O.height-q-z:(O.height-q)/2)],B?(o.attr(O),K=o[0].getContext("2d"),K.restore(),K.save(),K.clearRect(0,0,3e3,3e3),K.fillStyle=y.fill,K.strokeStyle=y.border,K.lineWidth=z*2,K.lineJoin="miter",K.miterLimit=100,K.translate(N[0],N[1]),K.beginPath(),K.moveTo(M[0][0],M[0][1]),K.lineTo(M[1][0],M[1][1]),K.lineTo(M[2][0],M[2][1]),K.closePath(),z&&(v.css("background-clip")==="border-box"&&(K.strokeStyle=y.fill,K.stroke()),K.strokeStyle=y.border,K.stroke()),K.fill()):(M="m"+M[0][0]+","+M[0][1]+" l"+M[1][0]+","+M[1][1]+" "+M[2][0]+","+M[2][1]+" xe",N[2]=z&&/^(r|b)/i.test(e.string())?parseFloat(a.browser.version,10)===8?2:1:0,o.css({antialias:""+(F.string().indexOf(n)>-1),left:N[0]-N[2]*Number(J===f),top:N[1]-N[2]*Number(J===g),width:p+z,height:q+z}).each(function(b){var c=a(this);c[c.prop?"prop":"attr"]({coordsize:p+z+" "+(q+z),path:M,fillcolor:y.fill,filled:!!b,stroked:!b}).css({display:z||b?"block":"none"}),!b&&c.html()===""&&c.html('<vml:stroke weight="'+z*2+'px" color="'+y.border+'" miterlimit="1000" joinstyle="miter"  style="behavior:url(#default#VML); display:inline-block;" />')})),h!==c&&r.position(e)},position:function(b){var d=u.tip,e={},l=Math.max(0,t.offset),m,o,p;if(t.corner===c||!d)return c;b=b||r.corner,m=b.precedance,o=I(b),p=[b.x,b.y],m===f&&p.reverse(),a.each(p,function(a,c){var d,f;c===n?(d=m===g?k:j,e[d]="50%",e["margin-"+d]=-Math.round(o[m===g?h:i]/2)+l):(d=G(b,c),f=H(b),e[c]=a?0:l+(f>d?f:-d))}),e[b[m]]-=o[m===f?h:i],d.css({top:"",bottom:"",left:"",right:"",margin:""}).css(e);return e},destroy:function(){u.tip&&u.tip.remove(),u.tip=!1,v.unbind(A)}}),r.init()}function L(a,b,c){var d=Math.ceil(b/2),e=Math.ceil(c/2),f={bottomright:[[0,0],[b,c],[b,0]],bottomleft:[[0,0],[b,0],[0,c]],topright:[[0,c],[b,0],[b,c]],topleft:[[0,0],[0,c],[b,c]],topcenter:[[0,c],[d,0],[b,c]],bottomcenter:[[0,0],[b,0],[d,c]],rightcenter:[[0,0],[b,e],[0,c]],leftcenter:[[b,0],[b,c],[0,e]]};f.lefttop=f.bottomright,f.righttop=f.bottomleft,f.leftbottom=f.topright,f.rightbottom=f.topleft;return f[a.string()]}function K(e,f){var g,h,i,j,k,l=a(this),m=a(document.body),n=this===document?m:l,o=l.metadata?l.metadata(f.metadata):d,p=f.metadata.type==="html5"&&o?o[f.metadata.name]:d,q=l.data(f.metadata.name||"qtipopts");try{q=typeof q==="string"?(new Function("return "+q))():q}catch(t){H("Unable to parse HTML5 attribute data: "+q)}j=a.extend(b,{},r.defaults,f,typeof q==="object"?I(q):d,I(p||o)),h=j.position,j.id=e;if("boolean"===typeof j.content.text){i=l.attr(j.content.attr);if(j.content.attr!==c&&i)j.content.text=i;else{H("Unable to locate content for tooltip! Aborting render of tooltip on element: ",l);return c}}h.container.length||(h.container=m),h.target===c&&(h.target=n),j.show.target===c&&(j.show.target=n),j.show.solo===b&&(j.show.solo=h.container.closest("body")),j.hide.target===c&&(j.hide.target=n),j.position.viewport===b&&(j.position.viewport=h.container),h.container=h.container.eq(0),h.at=new s.Corner(h.at),h.my=new s.Corner(h.my);if(a.data(this,"qtip"))if(j.overwrite)l.qtip("destroy");else if(j.overwrite===c)return c;j.suppress&&(k=a.attr(this,"title"))&&a(this).removeAttr("title").attr(F,k).attr("title",""),g=new J(l,j,e,!!i),a.data(this,"qtip",g),l.bind("remove.qtip-"+e+" removeqtip.qtip-"+e,function(){g.destroy()});return g}function J(f,g,o,p){function X(){var b=[g.show.target[0],g.hide.target[0],q.rendered&&M.tooltip[0],g.position.container[0],g.position.viewport[0],window,document];q.rendered?a([]).pushStack(a.grep(b,function(a){return typeof a==="object"})).unbind(L):g.show.target.unbind(L+"-create")}function W(){function m(a){q.rendered&&K[0].offsetWidth>0&&q.reposition(a)}function l(a){if(K.hasClass(x))return c;clearTimeout(q.timers.inactive),q.timers.inactive=setTimeout(function(){q.hide(a)},g.hide.inactive)}function k(b){if(K.hasClass(x)||H||J)return c;var f=a(b.relatedTarget||b.target),h=f.closest(y)[0]===K[0],i=f[0]===e.show[0];clearTimeout(q.timers.show),clearTimeout(q.timers.hide);if(d.target==="mouse"&&h||g.hide.fixed&&(/mouse(out|leave|move)/.test(b.type)&&(h||i)))try{b.preventDefault(),b.stopImmediatePropagation()}catch(j){}else g.hide.delay>0?q.timers.hide=setTimeout(function(){q.hide(b)},g.hide.delay):q.hide(b)}function j(a){if(K.hasClass(x))return c;clearTimeout(q.timers.show),clearTimeout(q.timers.hide);var d=function(){q.toggle(b,a)};g.show.delay>0?q.timers.show=setTimeout(d,g.show.delay):d()}var d=g.position,e={show:g.show.target,hide:g.hide.target,viewport:a(d.viewport),document:a(document),body:a(document.body),window:a(window)},h={show:a.trim(""+g.show.event).split(" "),hide:a.trim(""+g.hide.event).split(" ")},i=a.browser.msie&&parseInt(a.browser.version,10)===6;K.bind("mouseenter"+L+" mouseleave"+L,function(a){var b=a.type==="mouseenter";b&&q.focus(a),K.toggleClass(B,b)}),/mouse(out|leave)/i.test(g.hide.event)&&(g.hide.leave==="window"&&e.window.bind("mouseleave"+L+" blur"+L,function(a){!/select|option/.test(a.target.nodeName)&&!a.relatedTarget&&q.hide(a)})),g.hide.fixed?(e.hide=e.hide.add(K),K.bind("mouseover"+L,function(){K.hasClass(x)||clearTimeout(q.timers.hide)})):/mouse(over|enter)/i.test(g.show.event)&&e.hide.bind("mouseleave"+L,function(a){clearTimeout(q.timers.show)}),(""+g.hide.event).indexOf("unfocus")>-1&&d.container.closest("html").bind("mousedown"+L,function(b){var c=a(b.target),d=q.rendered&&!K.hasClass(x)&&K[0].offsetWidth>0,e=c.parents(y).filter(K[0]).length>0;c[0]!==f[0]&&c[0]!==K[0]&&!e&&!f.has(c[0]).length&&!c.attr("disabled")&&q.hide(b)}),"number"===typeof g.hide.inactive&&(e.show.bind("qtip-"+o+"-inactive",l),a.each(r.inactiveEvents,function(a,b){e.hide.add(M.tooltip).bind(b+L+"-inactive",l)})),a.each(h.hide,function(b,c){var d=a.inArray(c,h.show),f=a(e.hide);d>-1&&f.add(e.show).length===f.length||c==="unfocus"?(e.show.bind(c+L,function(a){K[0].offsetWidth>0?k(a):j(a)}),delete h.show[d]):e.hide.bind(c+L,k)}),a.each(h.show,function(a,b){e.show.bind(b+L,j)}),"number"===typeof g.hide.distance&&e.show.add(K).bind("mousemove"+L,function(a){var b=N.origin||{},c=g.hide.distance,d=Math.abs;(d(a.pageX-b.pageX)>=c||d(a.pageY-b.pageY)>=c)&&q.hide(a)}),d.target==="mouse"&&(e.show.bind("mousemove"+L,function(a){t={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}}),d.adjust.mouse&&(g.hide.event&&(K.bind("mouseleave"+L,function(a){(a.relatedTarget||a.target)!==e.show[0]&&q.hide(a)}),M.target.bind("mouseenter"+L+" mouseleave"+L,function(a){N.onTarget=a.type==="mouseenter"})),e.document.bind("mousemove"+L,function(a){q.rendered&&N.onTarget&&!K.hasClass(x)&&K[0].offsetWidth>0&&q.reposition(a||t)}))),(d.adjust.resize||e.viewport.length)&&(a.event.special.resize?e.viewport:e.window).bind("resize"+L,m),(e.viewport.length||i&&K.css("position")==="fixed")&&e.viewport.bind("scroll"+L,m)}function V(b,d){function h(b){function i(e){e&&(delete h[e.src],clearTimeout(q.timers.img[e.src]),a(e).unbind(L)),a.isEmptyObject(h)&&(q.redraw(),d!==c&&q.reposition(N.event),b())}var f,h={};if((f=g.find("img[src]:not([height]):not([width])")).length===0)return i();f.each(function(b,c){if(h[c.src]===e){var d=0,f=3;(function g(){if(c.height||c.width||d>f)return i(c);d+=1,q.timers.img[c.src]=setTimeout(g,700)})(),a(c).bind("error"+L+" load"+L,function(){i(this)}),h[c.src]=c}})}var g=M.content;if(!q.rendered||!b)return c;a.isFunction(b)&&(b=b.call(f,N.event,q)||""),b.jquery&&b.length>0?g.empty().append(b.css({display:"block"})):g.html(b),q.rendered<0?K.queue("fx",h):(J=0,h(a.noop));return q}function U(b,d){var e=M.title;if(!q.rendered||!b)return c;a.isFunction(b)&&(b=b.call(f,N.event,q));if(b===c||!b&&b!=="")return Q(c);b.jquery&&b.length>0?e.empty().append(b.css({display:"block"})):e.html(b),q.redraw(),d!==c&&q.rendered&&K[0].offsetWidth>0&&q.reposition(N.event)}function T(a){var b=M.button,d=M.title;if(!q.rendered)return c;a?(d||S(),R()):b.remove()}function S(){var c=E+"-title";M.titlebar&&Q(),M.titlebar=a("<div />",{"class":v+"-titlebar "+(g.style.widget?"ui-widget-header":"")}).append(M.title=a("<div />",{id:c,"class":v+"-title","aria-atomic":b})).insertBefore(M.content).delegate(".ui-tooltip-close","mousedown keydown mouseup keyup mouseout",function(b){a(this).toggleClass("ui-state-active ui-state-focus",b.type.substr(-4)==="down")}).delegate(".ui-tooltip-close","mouseover mouseout",function(b){a(this).toggleClass("ui-state-hover",b.type==="mouseover")}),g.content.title.button?R():q.rendered&&q.redraw()}function R(){var b=g.content.title.button,d=typeof b==="string",e=d?b:"Close tooltip";M.button&&M.button.remove(),b.jquery?M.button=b:M.button=a("<a />",{"class":"ui-state-default ui-tooltip-close "+(g.style.widget?"":v+"-icon"),title:e,"aria-label":e}).prepend(a("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),M.button.appendTo(M.titlebar).attr("role","button").click(function(a){K.hasClass(x)||q.hide(a);return c}),q.redraw()}function Q(a){M.title&&(M.titlebar.remove(),M.titlebar=M.title=M.button=d,a!==c&&q.reposition())}function P(){var a=g.style.widget;K.toggleClass(w,a).toggleClass(z,g.style.def&&!a),M.content.toggleClass(w+"-content",a),M.titlebar&&M.titlebar.toggleClass(w+"-header",a),M.button&&M.button.toggleClass(v+"-icon",!a)}function O(a){var b=0,c,d=g,e=a.split(".");while(d=d[e[b++]])b<e.length&&(c=d);return[c||g,e.pop()]}var q=this,D=document.body,E=v+"-"+o,H=0,J=0,K=a(),L=".qtip-"+o,M,N;q.id=o,q.destroyed=q.rendered=c,q.elements=M={target:f},q.timers={img:{}},q.options=g,q.checks={},q.plugins={},q.cache=N={event:{},target:a(),disabled:c,attr:p,onTarget:c,lastClass:""},q.checks.builtin={"^id$":function(d,e,f){var g=f===b?r.nextid:f,h=v+"-"+g;g!==c&&g.length>0&&!a("#"+h).length&&(K[0].id=h,M.content[0].id=h+"-content",M.title[0].id=h+"-title")},"^content.text$":function(a,b,c){V(c)},"^content.title.text$":function(a,b,c){if(!c)return Q();!M.title&&c&&S(),U(c)},"^content.title.button$":function(a,b,c){T(c)},"^position.(my|at)$":function(a,b,c){"string"===typeof c&&(a[b]=new s.Corner(c))},"^position.container$":function(a,b,c){q.rendered&&K.appendTo(c)},"^show.ready$":function(){q.rendered?q.toggle(b):q.render(1)},"^style.classes$":function(a,b,c){K.attr("class",v+" qtip ui-helper-reset "+c)},"^style.widget|content.title":P,"^events.(render|show|move|hide|focus|blur)$":function(b,c,d){K[(a.isFunction(d)?"":"un")+"bind"]("tooltip"+c,d)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var a=g.position;K.attr("tracking",a.target==="mouse"&&a.adjust.mouse),X(),W()}},a.extend(q,{render:function(d){if(q.rendered)return q;var e=g.content.text,h=g.content.title.text,i=g.position,j=a.Event("tooltiprender");a.attr(f[0],"aria-describedby",E),K=M.tooltip=a("<div/>",{id:E,"class":v+" qtip ui-helper-reset "+z+" "+g.style.classes+" "+v+"-pos-"+g.position.my.abbrev(),width:g.style.width||"",height:g.style.height||"",tracking:i.target==="mouse"&&i.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":c,"aria-describedby":E+"-content","aria-hidden":b}).toggleClass(x,N.disabled).data("qtip",q).appendTo(g.position.container).append(M.content=a("<div />",{"class":v+"-content",id:E+"-content","aria-atomic":b})),q.rendered=-1,H=J=1,h&&(S(),a.isFunction(h)||U(h,c)),a.isFunction(e)||V(e,c),q.rendered=b,P(),a.each(g.events,function(b,c){a.isFunction(c)&&K.bind(b==="toggle"?"tooltipshow tooltiphide":"tooltip"+b,c)}),a.each(s,function(){this.initialize==="render"&&this(q)}),W(),K.queue("fx",function(a){j.originalEvent=N.event,K.trigger(j,[q]),H=J=0,q.redraw(),(g.show.ready||d)&&q.toggle(b,N.event,c),a()});return q},get:function(a){var b,c;switch(a.toLowerCase()){case"dimensions":b={height:K.outerHeight(),width:K.outerWidth()};break;case"offset":b=s.offset(K,g.position.container);break;default:c=O(a.toLowerCase()),b=c[0][c[1]],b=b.precedance?b.string():b}return b},set:function(e,f){function n(a,b){var c,d,e;for(c in l)for(d in l[c])if(e=(new RegExp(d,"i")).exec(a))b.push(e),l[c][d].apply(q,b)}var h=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,i=/^content\.(title|attr)|style/i,j=c,k=c,l=q.checks,m;"string"===typeof e?(m=e,e={},e[m]=f):e=a.extend(b,{},e),a.each(e,function(b,c){var d=O(b.toLowerCase()),f;f=d[0][d[1]],d[0][d[1]]="object"===typeof c&&c.nodeType?a(c):c,e[b]=[d[0],d[1],c,f],j=h.test(b)||j,k=i.test(b)||k}),I(g),H=J=1,a.each(e,n),H=J=0,q.rendered&&K[0].offsetWidth>0&&(j&&q.reposition(g.position.target==="mouse"?d:N.event),k&&q.redraw());return q},toggle:function(e,f){function u(){e?(a.browser.msie&&K[0].style.removeAttribute("filter"),K.css("overflow",""),"string"===typeof i.autofocus&&a(i.autofocus,K).focus(),i.target.trigger("qtip-"+o+"-inactive")):K.css({display:"",visibility:"",opacity:"",left:"",top:""}),s=a.Event("tooltip"+(e?"visible":"hidden")),s.originalEvent=f?N.event:d,K.trigger(s,[q])}if(!q.rendered)return e?q.render(1):q;var h=e?"show":"hide",i=g[h],j=g[e?"hide":"show"],k=g.position,l=g.content,m=K[0].offsetWidth>0,n=e||i.target.length===1,p=!f||i.target.length<2||N.target[0]===f.target,r,s;(typeof e).search("boolean|number")&&(e=!m);if(!K.is(":animated")&&m===e&&p)return q;if(f){if(/over|enter/.test(f.type)&&/out|leave/.test(N.event.type)&&g.show.target.add(f.target).length===g.show.target.length&&K.has(f.relatedTarget).length)return q;N.event=a.extend({},f)}s=a.Event("tooltip"+h),s.originalEvent=f?N.event:d,K.trigger(s,[q,90]);if(s.isDefaultPrevented())return q;a.attr(K[0],"aria-hidden",!e),e?(N.origin=a.extend({},t),q.focus(f),a.isFunction(l.text)&&V(l.text,c),a.isFunction(l.title.text)&&U(l.title.text,c),!G&&k.target==="mouse"&&k.adjust.mouse&&(a(document).bind("mousemove.qtip",function(a){t={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}}),G=b),q.reposition(f,arguments[2]),(s.solo=!!i.solo)&&a(y,i.solo).not(K).qtip("hide",s)):(clearTimeout(q.timers.show),delete N.origin,G&&!a(y+'[tracking="true"]:visible',i.solo).not(K).length&&(a(document).unbind("mousemove.qtip"),G=c),q.blur(f)),i.effect===c||n===c?(K[h](),u.call(K)):a.isFunction(i.effect)?(K.stop(1,1),i.effect.call(K,q),K.queue("fx",function(a){u(),a()})):K.fadeTo(90,e?1:0,u),e&&i.target.trigger("qtip-"+o+"-inactive");return q},show:function(a){return q.toggle(b,a)},hide:function(a){return q.toggle(c,a)},focus:function(b){if(!q.rendered)return q;var c=a(y),d=parseInt(K[0].style.zIndex,10),e=r.zindex+c.length,f=a.extend({},b),g,h;K.hasClass(A)||(h=a.Event("tooltipfocus"),h.originalEvent=f,K.trigger(h,[q,e]),h.isDefaultPrevented()||(d!==e&&(c.each(function(){this.style.zIndex>d&&(this.style.zIndex=this.style.zIndex-1)}),c.filter("."+A).qtip("blur",f)),K.addClass(A)[0].style.zIndex=e));return q},blur:function(b){var c=a.extend({},b),d;K.removeClass(A),d=a.Event("tooltipblur"),d.originalEvent=c,K.trigger(d,[q]);return q},reposition:function(b,d){if(!q.rendered||H)return q;H=1;var e=g.position.target,f=g.position,h=f.my,i=f.at,o=f.adjust,p=o.method.split(" "),r=K.outerWidth(),u=K.outerHeight(),v=0,w=0,x=a.Event("tooltipmove"),y=K.css("position")==="fixed",z=f.viewport,A={left:0,top:0},B=f.container,C=K[0].offsetWidth>0,D,E,F;if(a.isArray(e)&&e.length===2)i={x:k,y:j},A={left:e[0],top:e[1]};else if(e==="mouse"&&(b&&b.pageX||N.event.pageX))i={x:k,y:j},b=(b&&(b.type==="resize"||b.type==="scroll")?N.event:b&&b.pageX&&b.type==="mousemove"?b:t&&t.pageX&&(o.mouse||!b||!b.pageX)?{pageX:t.pageX,pageY:t.pageY}:!o.mouse&&N.origin&&N.origin.pageX&&g.show.distance?N.origin:b)||b||N.event||t||{},A={top:b.pageY,left:b.pageX};else{e==="event"&&b&&b.target&&b.type!=="scroll"&&b.type!=="resize"?N.target=a(b.target):e!=="event"&&(N.target=a(e.jquery?e:M.target)),e=N.target,e=a(e).eq(0);if(e.length===0)return q;e[0]===document||e[0]===window?(v=s.iOS?window.innerWidth:e.width(),w=s.iOS?window.innerHeight:e.height(),e[0]===window&&(A={top:(z||e).scrollTop(),left:(z||e).scrollLeft()})):s.imagemap&&e.is("area")?D=s.imagemap(q,e,i,s.viewport?p:c):s.svg&&typeof e[0].xmlbase==="string"?D=s.svg(q,e,i,s.viewport?p:c):(v=e.outerWidth(),w=e.outerHeight(),A=s.offset(e,B)),D&&(v=D.width,w=D.height,E=D.offset,A=D.position);if(s.iOS>3.1&&s.iOS<4.1||s.iOS>=4.3&&s.iOS<4.33||!s.iOS&&y)F=a(window),A.left-=F.scrollLeft(),A.top-=F.scrollTop();A.left+=i.x===m?v:i.x===n?v/2:0,A.top+=i.y===l?w:i.y===n?w/2:0}A.left+=o.x+(h.x===m?-r:h.x===n?-r/2:0),A.top+=o.y+(h.y===l?-u:h.y===n?-u/2:0),s.viewport?(A.adjusted=s.viewport(q,A,f,v,w,r,u),E&&A.adjusted.left&&(A.left+=E.left),E&&A.adjusted.top&&(A.top+=E.top)):A.adjusted={left:0,top:0},x.originalEvent=a.extend({},b),K.trigger(x,[q,A,z.elem||z]);if(x.isDefaultPrevented())return q;delete A.adjusted,d===c||!C||isNaN(A.left)||isNaN(A.top)||e==="mouse"||!a.isFunction(f.effect)?K.css(A):a.isFunction(f.effect)&&(f.effect.call(K,q,a.extend({},A)),K.queue(function(b){a(this).css({opacity:"",height:""}),a.browser.msie&&this.style.removeAttribute("filter"),b()})),H=0;return q},redraw:function(){if(q.rendered<1||J)return q;var a=g.position.container,b,c,d,e;J=1,g.style.height&&K.css(i,g.style.height),g.style.width?K.css(h,g.style.width):(K.css(h,"").addClass(C),c=K.width()+1,d=K.css("max-width")||"",e=K.css("min-width")||"",b=(d+e).indexOf("%")>-1?a.width()/100:0,d=(d.indexOf("%")>-1?b:1)*parseInt(d,10)||c,e=(e.indexOf("%")>-1?b:1)*parseInt(e,10)||0,c=d+e?Math.min(Math.max(c,e),d):c,K.css(h,Math.round(c)).removeClass(C)),J=0;return q},disable:function(b){"boolean"!==typeof b&&(b=!K.hasClass(x)&&!N.disabled),q.rendered?(K.toggleClass(x,b),a.attr(K[0],"aria-disabled",b)):N.disabled=!!b;return q},enable:function(){return q.disable(c)},destroy:function(){var c=f[0],d=a.attr(c,F),e=f.data("qtip");q.destroyed=b,q.rendered&&(K.stop(1,0).remove(),a.each(q.plugins,function(){this.destroy&&this.destroy()})),clearTimeout(q.timers.show),clearTimeout(q.timers.hide),X();if(!e||q===e)a.removeData(c,"qtip"),g.suppress&&d&&(a.attr(c,"title",d),f.removeAttr(F)),f.removeAttr("aria-describedby");f.unbind(".qtip-"+o),delete u[q.id];return f}})}function I(b){var e;if(!b||"object"!==typeof b)return c;if(b.metadata===d||"object"!==typeof b.metadata)b.metadata={type:b.metadata};if("content"in b){if(b.content===d||"object"!==typeof b.content||b.content.jquery)b.content={text:b.content};e=b.content.text||c,!a.isFunction(e)&&(!e&&!e.attr||e.length<1||"object"===typeof e&&!e.jquery)&&(b.content.text=c);if("title"in b.content){if(b.content.title===d||"object"!==typeof b.content.title)b.content.title={text:b.content.title};e=b.content.title.text||c,!a.isFunction(e)&&(!e&&!e.attr||e.length<1||"object"===typeof e&&!e.jquery)&&(b.content.title.text=c)}}if("position"in b)if(b.position===d||"object"!==typeof b.position)b.position={my:b.position,at:b.position};if("show"in b)if(b.show===d||"object"!==typeof b.show)b.show.jquery?b.show={target:b.show}:b.show={event:b.show};if("hide"in b)if(b.hide===d||"object"!==typeof b.hide)b.hide.jquery?b.hide={target:b.hide}:b.hide={event:b.hide};if("style"in b)if(b.style===d||"object"!==typeof b.style)b.style={classes:b.style};a.each(s,function(){this.sanitize&&this.sanitize(b)});return b}function H(){H.history=H.history||[],H.history.push(arguments);if("object"===typeof console){var a=console[console.warn?"warn":"log"],b=Array.prototype.slice.call(arguments),c;typeof arguments[0]==="string"&&(b[0]="qTip2: "+b[0]),c=a.apply?a.apply(console,b):a(b)}}"use strict";var b=!0,c=!1,d=null,e,f="x",g="y",h="width",i="height",j="top",k="left",l="bottom",m="right",n="center",o="flip",p="flipinvert",q="shift",r,s,t,u={},v="ui-tooltip",w="ui-widget",x="ui-state-disabled",y="div.qtip."+v,z=v+"-default",A=v+"-focus",B=v+"-hover",C=v+"-fluid",D="-31000px",E="_replacedByqTip",F="oldtitle",G;r=a.fn.qtip=function(f,g,h){var i=(""+f).toLowerCase(),j=d,k=a.makeArray(arguments).slice(1),l=k[k.length-1],m=this[0]?a.data(this[0],"qtip"):d;if(!arguments.length&&m||i==="api")return m;if("string"===typeof f){this.each(function(){var d=a.data(this,"qtip");if(!d)return b;l&&l.timeStamp&&(d.cache.event=l);if(i!=="option"&&i!=="options"||!g)d[i]&&d[i].apply(d[i],k);else if(a.isPlainObject(g)||h!==e)d.set(g,h);else{j=d.get(g);return c}});return j!==d?j:this}if("object"===typeof f||!arguments.length){m=I(a.extend(b,{},f));return r.bind.call(this,m,l)}},r.bind=function(d,f){return this.each(function(g){function n(b){function d(){l.render(typeof b==="object"||h.show.ready),i.show.add(i.hide).unbind(k)}if(l.cache.disabled)return c;l.cache.event=a.extend({},b),l.cache.target=b?a(b.target):[e],h.show.delay>0?(clearTimeout(l.timers.show),l.timers.show=setTimeout(d,h.show.delay),j.show!==j.hide&&i.hide.bind(j.hide,function(){clearTimeout(l.timers.show)})):d()}var h,i,j,k,l,m;m=a.isArray(d.id)?d.id[g]:d.id,m=!m||m===c||m.length<1||u[m]?r.nextid++:u[m]=m,k=".qtip-"+m+"-create",l=K.call(this,m,d);if(l===c)return b;h=l.options,a.each(s,function(){this.initialize==="initialize"&&this(l)}),i={show:h.show.target,hide:h.hide.target},j={show:a.trim(""+h.show.event).replace(/ /g,k+" ")+k,hide:a.trim(""+h.hide.event).replace(/ /g,k+" ")+k},/mouse(over|enter)/i.test(j.show)&&!/mouse(out|leave)/i.test(j.hide)&&(j.hide+=" mouseleave"+k),i.show.bind("mousemove"+k,function(a){t={pageX:a.pageX,pageY:a.pageY,type:"mousemove"},l.cache.onTarget=b}),i.show.bind(j.show,n),(h.show.ready||h.prerender)&&n(f)})},s=r.plugins={Corner:function(a){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,n).toLowerCase(),this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var b=a.charAt(0);this.precedance=b==="t"||b==="b"?g:f,this.string=function(){return this.precedance===g?this.y+this.x:this.x+this.y},this.abbrev=function(){var a=this.x.substr(0,1),b=this.y.substr(0,1);return a===b?a:this.precedance===g?b+a:a+b},this.invertx=function(a){this.x=this.x===k?m:this.x===m?k:a||this.x},this.inverty=function(a){this.y=this.y===j?l:this.y===l?j:a||this.y},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(b,c){function j(a,b){d.left+=b*a.scrollLeft(),d.top+=b*a.scrollTop()}var d=b.offset(),e=b.closest("body")[0],f=c,g,h,i;if(f){do f.css("position")!=="static"&&(h=f.position(),d.left-=h.left+(parseInt(f.css("borderLeftWidth"),10)||0)+(parseInt(f.css("marginLeft"),10)||0),d.top-=h.top+(parseInt(f.css("borderTopWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0),!g&&(i=f.css("overflow"))!=="hidden"&&i!=="visible"&&(g=f));while((f=a(f[0].offsetParent)).length);g&&g[0]!==e&&j(g,1)}return d},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||c,fn:{attr:function(b,c){if(this.length){var d=this[0],e="title",f=a.data(d,"qtip");if(b===e&&f&&"object"===typeof f&&f.options.suppress){if(arguments.length<2)return a.attr(d,F);f&&f.options.content.attr===e&&f.cache.attr&&f.set("content.text",c);return this.attr(F,c)}}return a.fn["attr"+E].apply(this,arguments)},clone:function(b){var c=a([]),d="title",e=a.fn["clone"+E].apply(this,arguments);b||e.filter("["+F+"]").attr("title",function(){return a.attr(this,F)}).removeAttr(F);return e}}},a.each(s.fn,function(c,d){if(!d||a.fn[c+E])return b;var e=a.fn[c+E]=a.fn[c];a.fn[c]=function(){return d.apply(this,arguments)||e.apply(this,arguments)}}),a.ui||(a["cleanData"+E]=a.cleanData,a.cleanData=function(b){for(var c=0,d;(d=b[c])!==e;c++)try{a(d).triggerHandler("removeqtip")}catch(f){}a["cleanData"+E](b)}),r.version="nightly",r.nextid=0,r.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),r.zindex=15e3,r.defaults={prerender:c,id:c,overwrite:b,suppress:b,content:{text:b,attr:"title",title:{text:c,button:c}},position:{my:"top left",at:"bottom right",target:c,container:c,viewport:c,adjust:{x:0,y:0,mouse:b,resize:b,method:"flip flip"},effect:function(b,d,e){a(this).animate(d,{duration:200,queue:c})}},show:{target:c,event:"mouseenter",effect:b,delay:90,solo:c,ready:c,autofocus:c},hide:{target:c,event:"mouseleave",effect:b,delay:0,fixed:c,inactive:c,leave:"window",distance:c},style:{classes:"",widget:c,width:c,height:c,def:b},events:{render:d,move:d,show:d,hide:d,toggle:d,visible:d,hidden:d,focus:d,blur:d}},s.tip=function(a){var b=a.plugins.tip;return"object"===typeof b?b:a.plugins.tip=new M(a)},s.tip.initialize="render",s.tip.sanitize=function(a){var c=a.style,d;c&&"tip"in c&&(d=a.style.tip,typeof d!=="object"&&(a.style.tip={corner:d}),/string|boolean/i.test(typeof d.corner)||(d.corner=b),typeof d.width!=="number"&&delete d.width,typeof d.height!=="number"&&delete d.height,typeof d.border!=="number"&&d.border!==b&&delete d.border,typeof d.offset!=="number"&&delete d.offset)},a.extend(b,r.defaults,{style:{tip:{corner:b,mimic:c,width:6,height:6,border:b,offset:0}}})})

/* tiny scroll */
/*
 * Tiny Scrollbar
 * http://www.baijs.nl/tinyscrollbar/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/gpl-2.0.php
 *
 * Date: 13 / 08 / 2012
 * @version 1.81
 * @author Maarten Baijs
 *
 */
;( function( $ ) 
{
    $.tiny = $.tiny || { };

    $.tiny.scrollbar = {
        options: {
                axis         : 'y'    // vertical or horizontal scrollbar? ( x || y ).
            ,   wheel        : 40     // how many pixels must the mouswheel scroll at a time.
            ,   scroll       : true   // enable or disable the mousewheel.
            ,   lockscroll   : true   // return scrollwheel to browser if there is no more content.
            ,   size         : 'auto' // set the size of the scrollbar to auto or a fixed number.
            ,   sizethumb    : 'auto' // set the size of the thumb to auto or a fixed number.
            ,   invertscroll : false  // Enable mobile invert style scrolling
        }
    };

    $.fn.tinyscrollbar = function( params )
    {
        var options = $.extend( {}, $.tiny.scrollbar.options, params );
        
        this.each( function()
        { 
            $( this ).data('tsb', new Scrollbar( $( this ), options ) ); 
        });

        return this;
    };

    $.fn.tinyscrollbar_update = function(sScroll)
    {
        return $( this ).data( 'tsb' ).update( sScroll ); 
    };

    function Scrollbar( root, options )
    {
        var oSelf       = this
        ,   oWrapper    = root
        ,   oViewport   = { obj: $( '.viewport', root ) }
        ,   oContent    = { obj: $( '.overview', root ) }
        ,   oScrollbar  = { obj: $( '.scrollbar', root ) }
        ,   oTrack      = { obj: $( '.track', oScrollbar.obj ) }
        ,   oThumb      = { obj: $( '.thumb', oScrollbar.obj ) }
        ,   sAxis       = options.axis === 'x'
        ,   sDirection  = sAxis ? 'left' : 'top'
        ,   sSize       = sAxis ? 'Width' : 'Height'
        ,   iScroll     = 0
        ,   iPosition   = { start: 0, now: 0 }
        ,   iMouse      = {}
        ,   touchEvents = 'ontouchstart' in document.documentElement
        ;

        function initialize()
        {
            oSelf.update();
            setEvents();

            return oSelf;
        }

        this.update = function( sScroll )
        {
            oViewport[ options.axis ] = oViewport.obj[0][ 'offset'+ sSize ];
            oContent[ options.axis ]  = oContent.obj[0][ 'scroll'+ sSize ];
            oContent.ratio            = oViewport[ options.axis ] / oContent[ options.axis ];

            oScrollbar.obj.toggleClass( 'disable', oContent.ratio >= 1 );

            oTrack[ options.axis ] = options.size === 'auto' ? oViewport[ options.axis ] : options.size;
            oThumb[ options.axis ] = Math.min( oTrack[ options.axis ], Math.max( 0, ( options.sizethumb === 'auto' ? ( oTrack[ options.axis ] * oContent.ratio ) : options.sizethumb ) ) );
        
            oScrollbar.ratio = options.sizethumb === 'auto' ? ( oContent[ options.axis ] / oTrack[ options.axis ] ) : ( oContent[ options.axis ] - oViewport[ options.axis ] ) / ( oTrack[ options.axis ] - oThumb[ options.axis ] );
            
            iScroll = ( sScroll === 'relative' && oContent.ratio <= 1 ) ? Math.min( ( oContent[ options.axis ] - oViewport[ options.axis ] ), Math.max( 0, iScroll )) : 0;
            iScroll = ( sScroll === 'bottom' && oContent.ratio <= 1 ) ? ( oContent[ options.axis ] - oViewport[ options.axis ] ) : isNaN( parseInt( sScroll, 10 ) ) ? iScroll : parseInt( sScroll, 10 );
            
            setSize();
        };

        function setSize()
        {
            var sCssSize = sSize.toLowerCase();

            oThumb.obj.css( sDirection, iScroll / oScrollbar.ratio );
            oContent.obj.css( sDirection, -iScroll );
            iMouse.start = oThumb.obj.offset()[ sDirection ];

            oScrollbar.obj.css( sCssSize, oTrack[ options.axis ] );
            oTrack.obj.css( sCssSize, oTrack[ options.axis ] );
            oThumb.obj.css( sCssSize, oThumb[ options.axis ] );
        }

        function setEvents()
        {
            if( ! touchEvents )
            {
                oThumb.obj.bind( 'mousedown', start );
                oTrack.obj.bind( 'mouseup', drag );
            }
            else
            {
                oViewport.obj[0].ontouchstart = function( event )
                {   
                    if( 1 === event.touches.length )
                    {
                        start( event.touches[ 0 ] );
                        event.stopPropagation();
                    }
                };
            }

            if( options.scroll && window.addEventListener )
            {
                oWrapper[0].addEventListener( 'DOMMouseScroll', wheel, false );
                oWrapper[0].addEventListener( 'mousewheel', wheel, false );
                oWrapper[0].addEventListener( 'MozMousePixelScroll', function( event ){
                    event.preventDefault();
                }, false);
            }
            else if( options.scroll )
            {
                oWrapper[0].onmousewheel = wheel;
            }
        }

        function start( event )
        {
            $( "body" ).addClass( "noSelect" );

            var oThumbDir   = parseInt( oThumb.obj.css( sDirection ), 10 );
            iMouse.start    = sAxis ? event.pageX : event.pageY;
            iPosition.start = oThumbDir == 'auto' ? 0 : oThumbDir;
            
            if( ! touchEvents )
            {
                $( document ).bind( 'mousemove', drag );
                $( document ).bind( 'mouseup', end );
                oThumb.obj.bind( 'mouseup', end );
            }
            else
            {
                document.ontouchmove = function( event )
                {
                    event.preventDefault();
                    drag( event.touches[ 0 ] );
                };
                document.ontouchend = end;        
            }
        }

        function wheel( event )
        {
            if( oContent.ratio < 1 )
            {
                var oEvent = event || window.event
                ,   iDelta = oEvent.wheelDelta ? oEvent.wheelDelta / 120 : -oEvent.detail / 3
                ;

                iScroll -= iDelta * options.wheel;
                iScroll = Math.min( ( oContent[ options.axis ] - oViewport[ options.axis ] ), Math.max( 0, iScroll ));

                oThumb.obj.css( sDirection, iScroll / oScrollbar.ratio );
                oContent.obj.css( sDirection, -iScroll );

                if( options.lockscroll || ( iScroll !== ( oContent[ options.axis ] - oViewport[ options.axis ] ) && iScroll !== 0 ) )
                {
                    oEvent = $.event.fix( oEvent );
                    oEvent.preventDefault();
                }
            }
        }

        function drag( event )
        {
            if( oContent.ratio < 1 )
            {
                if( options.invertscroll && touchEvents )
                {
                    iPosition.now = Math.min( ( oTrack[ options.axis ] - oThumb[ options.axis ] ), Math.max( 0, ( iPosition.start + ( iMouse.start - ( sAxis ? event.pageX : event.pageY ) ))));
                }
                else
                {
                     iPosition.now = Math.min( ( oTrack[ options.axis ] - oThumb[ options.axis ] ), Math.max( 0, ( iPosition.start + ( ( sAxis ? event.pageX : event.pageY ) - iMouse.start))));
                }

                iScroll = iPosition.now * oScrollbar.ratio;
                oContent.obj.css( sDirection, -iScroll );
                oThumb.obj.css( sDirection, iPosition.now );
            }
        }
        
        function end()
        {
            $( "body" ).removeClass( "noSelect" );
            $( document ).unbind( 'mousemove', drag );
            $( document ).unbind( 'mouseup', end );
            oThumb.obj.unbind( 'mouseup', end );
            document.ontouchmove = document.ontouchend = null;
        }

        return initialize();
    }

}(jQuery));


