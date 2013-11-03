PLOVR_MODULE_INFO={"creators":["posters"],"export":["base"],"stories":["base"],"stats":["base"],"followup-editor":["has-editor"],"settings":["has-editor"],"base":[],"has-editor":["base"],"notes":["has-editor"],"posters":["has-editor"],"notes-mobile":["has-editor"],"profile":["has-editor"]};
PLOVR_MODULE_URIS={"creators":"fingerprint:creators","export":"fingerprint:export","stories":"fingerprint:stories","stats":"fingerprint:stats","followup-editor":"fingerprint:followup-editor","settings":"fingerprint:settings","base":"fingerprint:base","has-editor":"fingerprint:has-editor","notes":"fingerprint:notes","posters":"fingerprint:posters","notes-mobile":"fingerprint:notes-mobile","profile":"fingerprint:profile"};
PLOVR_MODULE_USE_DEBUG_MODE=false;
_mdm={};(function(z){
var sa;
var da;
z.aa = function() {
  return function(a) {
    return a
  }
};
z.g = function() {
  return function() {
  }
};
z.ba = function(a) {
  return function(b) {
    this[a] = b
  }
};
z.ca = function(a) {
  return function() {
    return this[a]
  }
};
z.n = function(a) {
  return function() {
    return a
  }
};
z.s = function(a) {
  return function() {
    return da[a].apply(this, arguments)
  }
};
z.u = function(a, b) {
  return da[a] = b
};
z.fa = function() {
};
var ha = function(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
};
z.ia = function(a) {
  return void 0 !== a
};
z.ja = function(a) {
  return"array" == ha(a)
};
z.la = function(a) {
  var b = ha(a);
  return"array" == b || "object" == b && "number" == typeof a.length
};
z.ma = function(a) {
  return"string" == typeof a
};
z.na = function(a) {
  return"number" == typeof a
};
z.oa = function(a) {
  return"function" == ha(a)
};
z.pa = function(a) {
  var b = typeof a;
  return"object" == b && null != a || "function" == b
};
z.qa = function(a) {
  return a[z.ra] || (a[z.ra] = ++sa)
};
var ta = function(a, b, c) {
  return a.call.apply(a.bind, arguments)
};
var va = function(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
};
z.wa = function(a, b, c) {
  z.wa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ta : va;
  return z.wa.apply(null, arguments)
};
z.xa = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b)
  }
};
z.v = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.s = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
};
var za = function(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, za) : this.stack = Error().stack || "";
  a && (this.message = String(a))
};
z.Aa = function(a, b) {
  return 0 == a.lastIndexOf(b, 0)
};
z.Ca = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c
};
z.Da = function(a) {
  return/^[\s\xa0]*$/.test(a)
};
var Ea = function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
z.Fa = function(a) {
  if(!Ga.test(a)) {
    return a
  }
  -1 != a.indexOf("\x26") && (a = a.replace(Ia, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(Ja, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(Ka, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(La, "\x26quot;"));
  return a
};
z.Na = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
var Pa = function(a, b) {
  for(var c = 0, d = Ea(String(a)).split("."), e = Ea(String(b)).split("."), f = Math.max(d.length, e.length), h = 0;0 == c && h < f;h++) {
    var k = d[h] || "", l = e[h] || "", m = RegExp("(\\d*)(\\D*)", "g"), r = RegExp("(\\d*)(\\D*)", "g");
    do {
      var C = m.exec(k) || ["", "", ""], H = r.exec(l) || ["", "", ""];
      if(0 == C[0].length && 0 == H[0].length) {
        break
      }
      c = ((0 == C[1].length ? 0 : (0,window.parseInt)(C[1], 10)) < (0 == H[1].length ? 0 : (0,window.parseInt)(H[1], 10)) ? -1 : (0 == C[1].length ? 0 : (0,window.parseInt)(C[1], 10)) > (0 == H[1].length ? 0 : (0,window.parseInt)(H[1], 10)) ? 1 : 0) || ((0 == C[2].length) < (0 == H[2].length) ? -1 : (0 == C[2].length) > (0 == H[2].length) ? 1 : 0) || (C[2] < H[2] ? -1 : C[2] > H[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
};
z.Ra = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
};
var Sa = function(a) {
  var b = (0,z.ma)(void 0) ? (0,z.Na)(void 0) : "\\s";
  return a.replace(RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase()
  })
};
z.Ta = function(a) {
  return a[a.length - 1]
};
z.Va = function(a, b, c) {
  a: {
    for(var d = a.length, e = (0,z.ma)(a) ? a.split("") : a, f = 0;f < d;f++) {
      if(f in e && b.call(c, e[f], f, a)) {
        b = f;
        break a
      }
    }
    b = -1
  }
  return 0 > b ? null : (0,z.ma)(a) ? a.charAt(b) : a[b]
};
var Wa = function(a, b) {
  for(var c = a.length, d = (0,z.ma)(a) ? a.split("") : a, c = c - 1;0 <= c;c--) {
    if(c in d && b.call(void 0, d[c], c, a)) {
      return c
    }
  }
  return-1
};
z.Xa = function(a, b) {
  return 0 <= (0,z.Ya)(a, b)
};
z.Za = function(a, b) {
  var c = (0,z.Ya)(a, b), d;
  (d = 0 <= c) && ab.splice.call(a, c, 1);
  return d
};
var bb = function(a) {
  return ab.concat.apply(ab, arguments)
};
z.cb = function(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
};
z.gb = function(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if((0,z.ja)(d) || (e = (0,z.la)(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) {
      a.push.apply(a, d)
    }else {
      if(e) {
        for(var f = a.length, h = d.length, k = 0;k < h;k++) {
          a[f + k] = d[k]
        }
      }else {
        a.push(d)
      }
    }
  }
};
var hb = function(a, b, c, d) {
  ab.splice.apply(a, (0,z.ib)(arguments, 1))
};
z.ib = function(a, b, c) {
  return 2 >= arguments.length ? ab.slice.call(a, b) : ab.slice.call(a, b, c)
};
z.jb = function(a, b) {
  ab.sort.call(a, b || z.kb)
};
z.kb = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
};
var lb = function(a, b) {
  for(var c in a) {
    b.call(void 0, a[c], c, a)
  }
};
var nb = function(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
};
var ob = function(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
};
z.pb = function(a, b) {
  for(var c in a) {
    if(a[c] == b) {
      return!0
    }
  }
  return!1
};
z.qb = function(a) {
  var b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  return b
};
z.rb = function(a) {
  var b = {}, c;
  for(c in a) {
    b[a[c]] = c
  }
  return b
};
var sb = function(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < tb.length;f++) {
      c = tb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
};
var ub = function(a) {
  var b = arguments.length;
  if(1 == b && (0,z.ja)(arguments[0])) {
    return ub.apply(null, arguments[0])
  }
  if(b % 2) {
    throw Error("Uneven number of arguments");
  }
  for(var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1]
  }
  return c
};
z.vb = function(a) {
  var b = arguments.length;
  if(1 == b && (0,z.ja)(arguments[0])) {
    return z.vb.apply(null, arguments[0])
  }
  for(var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0
  }
  return c
};
z.wb = function(a) {
  return function() {
    return a
  }
};
var xb = function(a) {
  return function() {
    throw a;
  }
};
z.yb = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for(var a, e = 0;e < c;e++) {
      a = b[e].apply(this, arguments)
    }
    return a
  }
};
var zb = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for(var a = 0;a < c;a++) {
      if(!b[a].apply(this, arguments)) {
        return!1
      }
    }
    return!0
  }
};
z.Ab = function(a, b) {
  this.qo = [];
  this.mx = a;
  this.cw = b || null;
  this.Ok = this.hd = !1;
  this.aj = void 0;
  this.ys = this.PD = this.Yq = !1;
  this.yo = 0;
  this.Zb = null;
  this.qn = 0
};
var Bb = function(a, b, c) {
  a.hd = !0;
  a.aj = c;
  a.Ok = !b;
  Cb(a)
};
var Db = function(a) {
  if(a.hd) {
    if(!a.ys) {
      throw new Eb(a);
    }
    a.ys = !1
  }
};
z.y = function(a, b, c) {
  return Fb(a, b, null, c)
};
z.A = function(a, b, c) {
  return Fb(a, null, b, c)
};
z.Gb = function(a, b, c) {
  return Fb(a, b, b, c)
};
var Fb = function(a, b, c, d) {
  a.qo.push([b, c, d]);
  a.hd && Cb(a);
  return a
};
z.Hb = function(a, b) {
  return(0,z.y)(a, (0,z.wa)(b.Je, b))
};
var Ib = function(a) {
  return(0,z.Lb)(a.qo, function(a) {
    return(0,z.oa)(a[1])
  })
};
var Cb = function(a) {
  a.yo && a.hd && Ib(a) && (z.Mb.clearTimeout(a.yo), delete a.yo);
  a.Zb && (a.Zb.qn--, delete a.Zb);
  for(var b = a.aj, c = !1, d = !1;a.qo.length && !a.Yq;) {
    var e = a.qo.shift(), f = e[0], h = e[1], e = e[2];
    if(f = a.Ok ? h : f) {
      try {
        var k = f.call(e || a.cw, b);
        (0,z.ia)(k) && (a.Ok = a.Ok && (k == b || k instanceof Error), a.aj = b = k);
        b instanceof z.Ab && (d = !0, a.Yq = !0)
      }catch(l) {
        b = l, a.Ok = !0, Ib(a) || (c = !0)
      }
    }
  }
  a.aj = b;
  d && (Fb(b, (0,z.wa)(a.Yv, a, !0), (0,z.wa)(a.Yv, a, !1)), b.PD = !0);
  c && (a.yo = Nb.call(z.Mb, xb(b), 0))
};
z.Ob = function(a) {
  var b = new z.Ab;
  b.Oa(a);
  return b
};
var Pb = function(a) {
  var b = new z.Ab;
  b.jg(a);
  return b
};
var Qb = function() {
  var a = new z.Ab;
  a.cancel();
  return a
};
var Rb = function(a, b, c) {
  return a instanceof z.Ab ? (0,z.y)(a.Je(!0), b, c) : (0,z.y)((0,z.Ob)(a), b, c)
};
var Eb = function(a) {
  za.call(this);
  this.qb = a
};
z.Tb = function(a) {
  za.call(this);
  this.qb = a
};
z.Ub = function(a) {
  this.vb = a
};
var Vb = function(a) {
  a = (a.vb.cookie || "").split(Wb);
  for(var b = [], c = [], d, e, f = 0;e = a[f];f++) {
    d = e.indexOf("\x3d"), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
  }
  return{keys:b, ul:c}
};
var Xb = function() {
  return z.Mb.navigator ? z.Mb.navigator.userAgent : null
};
var Yb = function() {
  return z.Mb.navigator
};
var Zb = function() {
  var a = z.Mb.document;
  return a ? a.documentMode : void 0
};
z.$b = function(a) {
  return ac[a] || (ac[a] = 0 <= Pa(bc, a))
};
z.cc = function(a) {
  return z.B && dc >= a
};
z.D = function() {
  0 != ec && (fc[(0,z.qa)(this)] = this)
};
z.gc = function(a) {
  a && "function" == typeof a.bb && a.bb()
};
z.ic = function(a) {
  a = a.className;
  return(0,z.ma)(a) && a.match(/\S+/g) || []
};
z.jc = function(a, b) {
  for(var c = (0,z.ic)(a), d = (0,z.ib)(arguments, 1), e = c.length + d.length, f = c, h = 0;h < d.length;h++) {
    (0,z.Xa)(f, d[h]) || f.push(d[h])
  }
  a.className = c.join(" ");
  return c.length == e
};
z.kc = function(a, b) {
  this.x = (0,z.ia)(a) ? a : 0;
  this.y = (0,z.ia)(b) ? b : 0
};
z.lc = function(a, b) {
  this.width = a;
  this.height = b
};
z.mc = function(a) {
  return a ? new nc((0,z.oc)(a)) : pc || (pc = new nc)
};
z.qc = function(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if(b) {
      d = {};
      for(var e = 0, f = 0, h;h = a[f];f++) {
        b == h.nodeName && (d[e++] = h)
      }
      d.length = e;
      return d
    }
    return a
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    d = {};
    for(f = e = 0;h = a[f];f++) {
      b = h.className, "function" == typeof b.split && (0,z.Xa)(b.split(/\s+/), c) && (d[e++] = h)
    }
    d.length = e;
    return d
  }
  return a
};
z.sc = function(a, b) {
  lb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in tc ? a.setAttribute(tc[d], b) : (0,z.Aa)(d, "aria-") || (0,z.Aa)(d, "data-") ? a.setAttribute(d, b) : a[d] = b
  })
};
z.uc = function(a) {
  a = a.document;
  a = (0,z.vc)(a) ? a.documentElement : a.body;
  return new z.lc(a.clientWidth, a.clientHeight)
};
z.wc = function(a) {
  return a ? a.parentWindow || a.defaultView : window
};
z.xc = function(a, b) {
  var c = b[0], d = b[1];
  if(!yc && d && (d.name || d.type)) {
    c = ["\x3c", c];
    d.name && c.push(' name\x3d"', (0,z.Fa)(d.name), '"');
    if(d.type) {
      c.push(' type\x3d"', (0,z.Fa)(d.type), '"');
      var e = {};
      sb(e, d);
      delete e.type;
      d = e
    }
    c.push("\x3e");
    c = c.join("")
  }
  c = a.createElement(c);
  d && ((0,z.ma)(d) ? c.className = d : (0,z.ja)(d) ? z.jc.apply(null, [c].concat(d)) : (0,z.sc)(c, d));
  2 < b.length && zc(a, c, b, 2);
  return c
};
var zc = function(a, b, c, d) {
  function e(c) {
    c && b.appendChild((0,z.ma)(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var f = c[d];
    !(0,z.la)(f) || (0,z.pa)(f) && 0 < f.nodeType ? e(f) : (0,z.Ac)(Bc(f) ? (0,z.cb)(f) : f, e)
  }
};
z.Cc = function(a) {
  return Dc(a)
};
var Dc = function(a) {
  var b = window.document, c = b.createElement("div");
  z.B ? (c.innerHTML = "\x3cbr\x3e" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
  if(1 == c.childNodes.length) {
    return c.removeChild(c.firstChild)
  }
  for(a = b.createDocumentFragment();c.firstChild;) {
    a.appendChild(c.firstChild)
  }
  return a
};
z.vc = function(a) {
  return"CSS1Compat" == a.compatMode
};
z.Ec = function(a) {
  if(1 != a.nodeType) {
    return!1
  }
  switch(a.tagName) {
    case "APPLET":
    ;
    case "AREA":
    ;
    case "BASE":
    ;
    case "BR":
    ;
    case "COL":
    ;
    case "COMMAND":
    ;
    case "EMBED":
    ;
    case "FRAME":
    ;
    case "HR":
    ;
    case "IMG":
    ;
    case "INPUT":
    ;
    case "IFRAME":
    ;
    case "ISINDEX":
    ;
    case "KEYGEN":
    ;
    case "LINK":
    ;
    case "NOFRAMES":
    ;
    case "NOSCRIPT":
    ;
    case "META":
    ;
    case "OBJECT":
    ;
    case "PARAM":
    ;
    case "SCRIPT":
    ;
    case "SOURCE":
    ;
    case "STYLE":
    ;
    case "TRACK":
    ;
    case "WBR":
      return!1
  }
  return!0
};
z.Fc = function(a, b) {
  zc((0,z.oc)(a), a, arguments, 1)
};
z.Gc = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
};
z.Hc = function(a, b, c) {
  a.insertBefore(b, a.childNodes[c] || null)
};
z.F = function(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
z.Ic = function(a) {
  var b, c = a.parentNode;
  if(c && 11 != c.nodeType) {
    if(a.removeNode) {
      return a.removeNode(!1)
    }
    for(;b = a.firstChild;) {
      c.insertBefore(b, a)
    }
    return(0,z.F)(a)
  }
};
z.Jc = function(a) {
  return(0,z.pa)(a) && 1 == a.nodeType
};
z.Kc = function(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
};
z.Lc = function(a) {
  var b, c = arguments.length;
  if(!c) {
    return null
  }
  if(1 == c) {
    return arguments[0]
  }
  var d = [], e = window.Infinity;
  for(b = 0;b < c;b++) {
    for(var f = [], h = arguments[b];h;) {
      f.unshift(h), h = h.parentNode
    }
    d.push(f);
    e = Math.min(e, f.length)
  }
  f = null;
  for(b = 0;b < e;b++) {
    for(var h = d[0][b], k = 1;k < c;k++) {
      if(h != d[k][b]) {
        return f
      }
    }
    f = h
  }
  return f
};
z.oc = function(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
};
z.Mc = function(a) {
  if(Oc && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var b = [];
    (0,z.Pc)(a, b, !0);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  Oc || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a
};
z.Pc = function(a, b, c) {
  if(!(a.nodeName in Qc)) {
    if(a.nodeType == z.Rc) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Sc) {
        b.push(Sc[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          (0,z.Pc)(a, b, c), a = a.nextSibling
        }
      }
    }
  }
};
var Bc = function(a) {
  if(a && "number" == typeof a.length) {
    if((0,z.pa)(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if((0,z.oa)(a)) {
      return"function" == typeof a.item
    }
  }
  return!1
};
z.Tc = function(a, b, c) {
  if(!b && !c) {
    return null
  }
  var d = b ? b.toUpperCase() : null;
  return(0,z.Uc)(a, function(a) {
    return(!d || a.nodeName == d) && (!c || (0,z.Xa)((0,z.ic)(a), c))
  }, !0)
};
z.Uc = function(a, b, c) {
  c || (a = a.parentNode);
  for(c = 0;a;) {
    if(b(a)) {
      return a
    }
    a = a.parentNode;
    c++
  }
  return null
};
var nc = function(a) {
  this.vb = a || z.Mb.document || window.document
};
var Vc = function(a) {
  var b = a.vb;
  a = !z.Wc && (0,z.vc)(b) ? b.documentElement : b.body;
  b = b.parentWindow || b.defaultView;
  return z.B && (0,z.$b)("10") && b.pageYOffset != a.scrollTop ? new z.kc(a.scrollLeft, a.scrollTop) : new z.kc(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
};
z.Xc = function() {
};
z.Yc = function(a) {
  if(a instanceof z.Xc) {
    return a
  }
  if("function" == typeof a.Dg) {
    return a.Dg(!1)
  }
  if((0,z.la)(a)) {
    var b = 0, c = new z.Xc;
    c.next = function() {
      for(;;) {
        if(b >= a.length) {
          throw z.Zc;
        }
        if(b in a) {
          return a[b++]
        }
        b++
      }
    };
    return c
  }
  throw Error("Not implemented");
};
z.$c = function(a) {
  try {
    return(0,z.Yc)(a).next()
  }catch(b) {
    if(b != z.Zc) {
      throw b;
    }
    return null
  }
};
z.ad = function(a, b, c, d, e) {
  this.Ib = !!b;
  a && (0,z.bd)(this, a, d);
  this.depth = void 0 != e ? e : this.Fb || 0;
  this.Ib && (this.depth *= -1);
  this.wn = !c
};
z.bd = function(a, b, c, d) {
  if(a.C = b) {
    a.Fb = (0,z.na)(c) ? c : 1 != a.C.nodeType ? 0 : a.Ib ? -1 : 1
  }
  (0,z.na)(d) && (a.depth = d)
};
z.cd = function(a, b, c) {
  c ? (0,z.G)(a, b) : (0,z.I)(a, b)
};
z.dd = function(a, b) {
  var c = !(0,z.ed)(a, b);
  (0,z.cd)(a, b, c)
};
z.gd = function(a, b, c) {
  (0,z.I)(a, b);
  (0,z.G)(a, c)
};
var hd = function(a) {
  if("function" == typeof a.pe) {
    return a.pe()
  }
  if((0,z.ma)(a)) {
    return a.split("")
  }
  if((0,z.la)(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return nb(a)
};
var id = function(a) {
  if("function" == typeof a.ne) {
    return a.ne()
  }
  if("function" != typeof a.pe) {
    if((0,z.la)(a) || (0,z.ma)(a)) {
      var b = [];
      a = a.length;
      for(var c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return ob(a)
  }
};
var jd = function(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if((0,z.la)(a) || (0,z.ma)(a)) {
      (0,z.Ac)(a, b, c)
    }else {
      for(var d = id(a), e = hd(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
};
z.kd = function(a, b) {
  this.rd = {};
  this.cb = [];
  this.vl = this.ob = 0;
  var c = arguments.length;
  if(1 < c) {
    if(c % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.ee(a)
  }
};
var md = function(a, b) {
  return a === b
};
var nd = function(a) {
  if(a.ob != a.cb.length) {
    for(var b = 0, c = 0;b < a.cb.length;) {
      var d = a.cb[b];
      od(a.rd, d) && (a.cb[c++] = d);
      b++
    }
    a.cb.length = c
  }
  if(a.ob != a.cb.length) {
    for(var e = {}, c = b = 0;b < a.cb.length;) {
      d = a.cb[b], od(e, d) || (a.cb[c++] = d, e[d] = 1), b++
    }
    a.cb.length = c
  }
};
var od = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
};
z.pd = function() {
};
z.qd = function(a) {
  for(var b = [], c = 0, d = a.Hi();c < d;c++) {
    b.push(a.oe(c))
  }
  return b
};
z.rd = function(a, b) {
  z.ad.call(this, a, b, !0)
};
z.sd = function() {
};
z.td = function(a, b, c, d, e) {
  var f;
  a && (this.sa = a, this.va = b, this.oa = c, this.ta = d, 1 == a.nodeType && "BR" != a.tagName && (a = a.childNodes, (b = a[b]) ? (this.sa = b, this.va = 0) : (a.length && (this.sa = (0,z.Ta)(a)), f = !0)), 1 == c.nodeType && ((this.oa = c.childNodes[d]) ? this.ta = 0 : this.oa = c));
  z.ad.call(this, e ? this.oa : this.sa, e, !0);
  if(f) {
    try {
      this.next()
    }catch(h) {
      if(h != z.Zc) {
        throw h;
      }
    }
  }
};
z.ud = function() {
};
z.vd = function(a) {
  this.X = a
};
var wd = function(a) {
  var b = (0,z.oc)(a).createRange();
  if(a.nodeType == z.Rc) {
    b.setStart(a, 0), b.setEnd(a, a.length)
  }else {
    if(xd(a)) {
      for(var c, d = a;(c = d.firstChild) && xd(c);) {
        d = c
      }
      b.setStart(d, 0);
      for(d = a;(c = d.lastChild) && xd(c);) {
        d = c
      }
      b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
    }else {
      c = a.parentNode, a = (0,z.Ya)(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1)
    }
  }
  return b
};
var yd = function(a, b, c, d) {
  var e = (0,z.oc)(a).createRange();
  e.setStart(a, b);
  e.setEnd(c, d);
  return e
};
z.zd = function(a) {
  this.X = a
};
z.Ad = function(a, b) {
  this.X = a;
  this.Dn = b
};
z.Bd = function(a) {
  var b = (0,z.oc)(a).body.createTextRange();
  if(1 == a.nodeType) {
    b.moveToElementText(a), xd(a) && !a.childNodes.length && b.collapse(!1)
  }else {
    for(var c = 0, d = a;d = d.previousSibling;) {
      var e = d.nodeType;
      if(e == z.Rc) {
        c += d.length
      }else {
        if(1 == e) {
          b.moveToElementText(d);
          break
        }
      }
    }
    d || b.moveToElementText(a.parentNode);
    b.collapse(!d);
    c && b.move("character", c);
    b.moveEnd("character", a.length)
  }
  return b
};
var Cd = function(a, b) {
  for(var c = b.childNodes, d = 0, e = c.length;d < e;d++) {
    var f = c[d];
    if(xd(f)) {
      var h = (0,z.Bd)(f), k = h.htmlText != f.outerHTML;
      if(a.isCollapsed() && k ? 0 <= a.Ld(h, 1, 1) && 0 >= a.Ld(h, 1, 0) : a.X.inRange(h)) {
        return Cd(a, f)
      }
    }
  }
  return b
};
var Dd = function(a, b, c) {
  c = c || a.yc();
  if(!c || !c.firstChild) {
    return c
  }
  for(var d = 1 == b, e = 0, f = c.childNodes.length;e < f;e++) {
    var h = d ? e : f - e - 1, k = c.childNodes[h], l;
    try {
      l = Ed(k)
    }catch(m) {
      continue
    }
    var r = l.X;
    if(a.isCollapsed()) {
      if(!xd(k)) {
        if(0 == a.Ld(r, 1, 1)) {
          a.va = a.ta = h;
          break
        }
      }else {
        if(l.mf(a)) {
          return Dd(a, b, k)
        }
      }
    }else {
      if(a.mf(l)) {
        if(!xd(k)) {
          d ? a.va = h : a.ta = h + 1;
          break
        }
        return Dd(a, b, k)
      }
      if(0 > a.Ld(r, 1, 0) && 0 < a.Ld(r, 0, 1)) {
        return Dd(a, b, k)
      }
    }
  }
  return c
};
var Fd = function(a, b) {
  var c = 1 == b, d = c ? a.fa() : a.ua();
  if(1 == d.nodeType) {
    for(var d = d.childNodes, e = d.length, f = c ? 1 : -1, h = c ? 0 : e - 1;0 <= h && h < e;h += f) {
      var k = d[h];
      if(!xd(k) && 0 == a.X.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Ed(k).X)) {
        return c ? h : h + 1
      }
    }
    return-1 == h ? 0 : h
  }
  e = a.X.duplicate();
  f = (0,z.Bd)(d);
  e.setEndPoint(c ? "EndToEnd" : "StartToStart", f);
  e = e.text.length;
  return c ? d.length - e : e
};
z.Gd = function(a) {
  this.X = a
};
z.Hd = function(a) {
  this.X = a
};
var Ed = function(a) {
  if(z.B && !(0,z.cc)(9)) {
    var b = new z.Ad((0,z.Bd)(a), (0,z.oc)(a));
    if(xd(a)) {
      for(var c, d = a;(c = d.firstChild) && xd(c);) {
        d = c
      }
      b.sa = d;
      b.va = 0;
      for(d = a;(c = d.lastChild) && xd(c);) {
        d = c
      }
      b.oa = d;
      b.ta = 1 == d.nodeType ? d.childNodes.length : d.length;
      b.Ve = a
    }else {
      b.sa = b.oa = b.Ve = a.parentNode, b.va = (0,z.Ya)(b.Ve.childNodes, a), b.ta = b.va + 1
    }
    a = b
  }else {
    a = z.Wc ? new z.Hd(wd(a)) : z.K ? new z.zd(wd(a)) : z.Id ? new z.Gd(wd(a)) : new z.vd(wd(a))
  }
  return a
};
var xd = function(a) {
  return(0,z.Ec)(a) || a.nodeType == z.Rc
};
z.Jd = function() {
};
z.Kd = function(a, b) {
  var c = new z.Jd;
  c.lh = a;
  c.te = !!b;
  return c
};
z.Ld = function(a) {
  var b;
  if(!(b = a.lh)) {
    b = a.fa();
    var c = a.Va(), d = a.ua(), e = a.Cb();
    if(z.B && !(0,z.cc)(9)) {
      var f = b, h = c, k = d, l = e, m = !1;
      1 == f.nodeType && (h = f.childNodes[h], m = !h, f = h || f.lastChild || f, h = 0);
      var r = (0,z.Bd)(f);
      h && r.move("character", h);
      f == k && h == l ? r.collapse(!0) : (m && r.collapse(!1), m = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, m = !h), f = (0,z.Bd)(k), f.collapse(!m), l && f.moveEnd("character", l), r.setEndPoint("EndToEnd", f));
      l = new z.Ad(r, (0,z.oc)(b));
      l.sa = b;
      l.va = c;
      l.oa = d;
      l.ta = e;
      b = l
    }else {
      b = z.Wc ? new z.Hd(yd(b, c, d, e)) : z.K ? new z.zd(yd(b, c, d, e)) : z.Id ? new z.Gd(yd(b, c, d, e)) : new z.vd(yd(b, c, d, e))
    }
    b = a.lh = b
  }
  return b
};
z.Md = function() {
};
z.Nd = function(a) {
  var b = new z.Md;
  b.X = a;
  return b
};
var Od = function(a) {
  for(var b = (0,z.oc)(arguments[0]).body.createControlRange(), c = 0, d = arguments.length;c < d;c++) {
    b.addElement(arguments[c])
  }
  return(0,z.Nd)(b)
};
z.Pd = function(a) {
  if(!a.Sb && (a.Sb = [], a.X)) {
    for(var b = 0;b < a.X.length;b++) {
      a.Sb.push(a.X.item(b))
    }
  }
  return a.Sb
};
var Qd = function(a) {
  a.ol || (a.ol = (0,z.Pd)(a).concat(), a.ol.sort(function(a, c) {
    return a.sourceIndex - c.sourceIndex
  }));
  return a.ol
};
var Rd = function(a) {
  a && (this.Sb = Qd(a), this.sa = this.Sb.shift(), this.oa = (0,z.Ta)(this.Sb) || this.sa);
  z.ad.call(this, this.sa, !1, !0)
};
z.Sd = function(a) {
  return(0,z.Kd)(Ed(a), void 0)
};
var Td = function(a) {
  return(a = a.exec(Xb())) ? a[1] : ""
};
var Xd = function() {
  return z.Wc ? "Webkit" : z.K ? "Moz" : z.B ? "ms" : z.Id ? "O" : null
};
z.Yd = function(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
};
z.Zd = function(a, b, c) {
  (0,z.ma)(b) ? $d(a, c, b) : lb(b, (0,z.xa)($d, a))
};
var $d = function(a, b, c) {
  (c = ae(a, c)) && (a.style[c] = b)
};
var ae = function(a, b) {
  var c = (0,z.Ra)(b);
  if(void 0 === a.style[c]) {
    var d = Xd() + Sa(b);
    if(void 0 !== a.style[d]) {
      return d
    }
  }
  return c
};
z.be = function(a, b) {
  var c = a.style[(0,z.Ra)(b)];
  return"undefined" !== typeof c ? c : a.style[ae(a, b)] || ""
};
z.ce = function(a, b) {
  var c = (0,z.oc)(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
};
z.de = function(a, b) {
  return(0,z.ce)(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
};
var ee = function(a) {
  var b;
  try {
    b = a.getBoundingClientRect()
  }catch(c) {
    return{left:0, top:0, right:0, bottom:0}
  }
  z.B && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
};
z.fe = function(a) {
  if(z.B && !(0,z.cc)(8)) {
    return a.offsetParent
  }
  var b = (0,z.oc)(a), c = (0,z.de)(a, "position"), d = "fixed" == c || "absolute" == c;
  for(a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = (0,z.de)(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a
    }
  }
  return null
};
z.ge = function(a) {
  var b, c = (0,z.oc)(a), d = (0,z.de)(a, "position"), e = z.K && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new z.kc(0, 0), h;
  b = c ? (0,z.oc)(c) : window.document;
  (h = !z.B) || (h = (0,z.cc)(9)) || (h = (0,z.mc)(b), h = (0,z.vc)(h.vb));
  h = h ? b.documentElement : b.body;
  if(a == h) {
    return f
  }
  if(a.getBoundingClientRect) {
    b = ee(a), a = Vc((0,z.mc)(c)), f.x = b.left + a.x, f.y = b.top + a.y
  }else {
    if(c.getBoxObjectFor && !e) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY
    }else {
      e = a;
      do {
        f.x += e.offsetLeft;
        f.y += e.offsetTop;
        e != a && (f.x += e.clientLeft || 0, f.y += e.clientTop || 0);
        if(z.Wc && "fixed" == (0,z.de)(e, "position")) {
          f.x += c.body.scrollLeft;
          f.y += c.body.scrollTop;
          break
        }
        e = e.offsetParent
      }while(e && e != a);
      if(z.Id || z.Wc && "absolute" == d) {
        f.y -= c.body.offsetTop
      }
      for(e = a;(e = (0,z.fe)(e)) && e != c.body && e != h;) {
        f.x -= e.scrollLeft, z.Id && "TR" == e.tagName || (f.y -= e.scrollTop)
      }
    }
  }
  return f
};
z.he = function(a, b) {
  var c = ie(a), d = ie(b);
  return new z.kc(c.x - d.x, c.y - d.y)
};
var ie = function(a) {
  if(1 == a.nodeType) {
    var b;
    if(a.getBoundingClientRect) {
      b = ee(a), b = new z.kc(b.left, b.top)
    }else {
      b = Vc((0,z.mc)(a));
      var c = (0,z.ge)(a);
      b = new z.kc(c.x - b.x, c.y - b.y)
    }
    if(z.K && !(0,z.$b)(12)) {
      var d;
      z.B ? d = "-ms-transform" : z.Wc ? d = "-webkit-transform" : z.Id ? d = "-o-transform" : z.K && (d = "-moz-transform");
      var e;
      d && (e = (0,z.de)(a, d));
      e || (e = (0,z.de)(a, "transform"));
      a = e ? (a = e.match(je)) ? new z.kc((0,window.parseFloat)(a[1]), (0,window.parseFloat)(a[2])) : new z.kc(0, 0) : new z.kc(0, 0);
      a = new z.kc(b.x + a.x, b.y + a.y)
    }else {
      a = b
    }
    return a
  }
  d = (0,z.oa)(a.uw);
  e = a;
  a.targetTouches ? e = a.targetTouches[0] : d && a.je.targetTouches && (e = a.je.targetTouches[0]);
  return new z.kc(e.clientX, e.clientY)
};
var ke = function(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
};
z.le = function(a, b) {
  var c = (0,z.mc)(b), d = null, d = c.kd();
  if(z.B && d.createStyleSheet) {
    c = d = d.createStyleSheet(), z.B ? c.cssText = a : c.innerHTML = a
  }else {
    var e = (0,z.qc)(c.vb, "head", void 0, void 0)[0];
    e || (d = (0,z.qc)(c.vb, "body", void 0, void 0)[0], e = c.pb("head"), d.parentNode.insertBefore(e, d));
    var f = d = c.pb("style");
    z.B ? f.cssText = a : f.innerHTML = a;
    c.appendChild(e, d)
  }
  return d
};
var me = function(a) {
  (0,z.F)(a.ownerNode || a.owningElement || a)
};
var ne = function(a) {
  ne[" "](a);
  return a
};
z.oe = function(a, b, c) {
  var d = (0,z.L)(a, b, function() {
    (0,z.pe)(d);
    c.apply(this, arguments)
  }, void 0, void 0)
};
z.L = function(a, b, c, d, e) {
  if(!a) {
    throw Error("Can not add listener, element is not defined");
  }
  return(0,z.qe)(a, b, c, d, e)
};
z.qe = function(a, b, c, d, e) {
  function f(b) {
    b = re(b);
    c.call(d || a, b)
  }
  if(!a) {
    return null
  }
  b = se ? b : "on" + b;
  e = e || !1;
  a[te](b, f, e);
  return{o:a, type:b, Ji:f, capture:e}
};
z.pe = function(a) {
  if(a) {
    if((0,z.ja)(a)) {
      for(var b = 0;b < a.length;b++) {
        (0,z.pe)(a[b])
      }
    }else {
      a.o[ue](a.type, a.Ji, a.capture)
    }
  }
};
var re = function(a) {
  var b = a || window.event;
  b.preventDefault || (b.preventDefault = function() {
    b.returnValue = !1
  });
  b.stopPropagation || (b.stopPropagation = function() {
    b.cancelBubble = !0
  });
  "mouseover" != b.type || b.relatedTarget || (b.relatedTarget = b.fromElement);
  "mouseout" != b.type || b.relatedTarget || (b.relatedTarget = b.toElement);
  return b
};
z.ve = function(a) {
  return function(b) {
    b.stopPropagation();
    b.preventDefault();
    return a ? a.call(this, b) : !1
  }
};
z.we = function(a) {
  return a.innerText || a.textContent
};
z.xe = function(a) {
  return!!ye[a.tagName] && !(0,z.ze)(a)
};
z.Ae = function(a) {
  return"LI" == a.tagName ? !0 : (0,z.Be)(a) ? !1 : (0,z.xe)(a)
};
z.ze = function(a) {
  return"DIV" === a.tagName && (0,z.ed)(a, "section-inner")
};
z.De = function(a) {
  return"SECTION" === a.tagName
};
z.Ee = function(a, b, c, d) {
  for(var e = c || window.document.body;a && a != e && !b(a);) {
    a = a.parentNode
  }
  return c && !d && e == a || a && e != a && !(0,z.Kc)(e, a) ? null : a
};
var Fe = function(a, b) {
  for(var c = {x:0, y:0}, d = b || window.document.body;a && a != d;) {
    c.y += a.offsetTop, c.x += a.offsetLeft, a = a.offsetParent
  }
  return c
};
z.Ge = function(a) {
  return Fe(a, (0,z.He)(a)).y
};
z.He = function(a, b) {
  for(var c = b ? a : a.parentNode;c.parentNode && "auto" != (0,z.de)(c, "overflowY");c = c.parentNode) {
  }
  c == window.document && (c = window.document.body);
  return c
};
z.Ie = function(a) {
  ne(a.offsetHeight)
};
z.Je = function(a, b, c) {
  (0,z.Ke)(a, z.Ae, (0,z.yb)(b, (0,z.wb)(!0)), c)
};
z.Le = function(a) {
  var b = [];
  (0,z.Je)(a, b.push, b);
  return b
};
z.Me = function(a) {
  var b = [];
  a = (0,z.cb)(a.childNodes);
  for(var c = 0;c < a.length;c++) {
    var d = a[c];
    "SECTION" === d.tagName && b.push(d)
  }
  return b
};
z.Ke = function(a, b, c, d) {
  if("SECTION" === a.tagName) {
    var e = (0,z.Va)(a.childNodes, z.ze);
    if(e) {
      return(0,z.Ke)(e, b, c, d)
    }
  }
  for(var e = 0, f = a.children.length;e < f;e++) {
    var h = a.children[e], k = h.tagName, l = "SECTION" == k;
    if("OL" == k || "UL" == k || l) {
      if((0,z.Ke)(h, b, c, d)) {
        continue
      }else {
        return!1
      }
    }
    if(b(h) && !c.call(d, h)) {
      return!1
    }
  }
  return!0
};
z.Be = function(a) {
  a = a.tagName;
  return"OL" == a || "UL" == a
};
var Ne = function() {
  "animation-name" in Oe || (Oe["animation-name"] = {});
  if(!("a" in Oe["animation-name"])) {
    var a = Oe["animation-name"], b;
    "CSS" in window && "supports" in window.CSS ? b = window.CSS.supports("animation-name", "a") ? "native" : window.CSS.supports((z.Wc ? "-webkit" : z.K ? "-moz" : z.B ? "-ms" : z.Id ? "-o" : null) + "-animation-name", "a") ? "prefixed" : "unsupported" : (b = window.document.createElement("div"), b = (0,z.Ra)("animation-name") in b.style ? "native" : Xd() + Sa("animation-name") in b.style ? "prefixed" : "unsupported");
    a.a = b
  }
  return Oe["animation-name"].a
};
z.Pe = function(a, b) {
  z.Ab.call(this);
  this.ya = a;
  this.Km = (0,z.ja)(b) ? b : [b];
  this.Il = {};
  this.Qo = null;
  (0,z.A)(this, this.pause, this);
  (0,z.Gb)(this, this.lz, this)
};
var Qe = function(a) {
  return"prefixed" == Ne() ? Xd().toLowerCase() + "Animation" + a.charAt(0).toUpperCase() + a.substr(1) : "animation" + a
};
z.Re = function(a, b, c, d) {
  var e = c ? (0,z.vb)(c) : null;
  a.Km.forEach(function(a) {
    e && !(a.name in e) || d && !d.call(this, a.name) || (a.paused = b)
  }, a);
  Se(a);
  return a
};
var Se = function(a) {
  var b = (0,z.Te)(a.Km, function(a) {
    a.paused || (this.Il[a.name] = !1);
    return a.paused ? "paused" : "running"
  }, a);
  (0,z.Zd)(a.ya, "animationPlayState", b.join(","))
};
var Ue = function(a) {
  this.jq = a;
  this.bu = !1
};
var Ve = function(a) {
  if(!a.bu) {
    for(var b = a.jq.split("/"), c = {}, d = 0;d < b.length;d++) {
      if(":" == b[d].charAt(0)) {
        var e = We.exec(b[d]);
        if(!e) {
          throw Error("Parse error " + a.jq);
        }
        c[e[1]] = new Xe(d, null == e[2] ? null : Number(e[2]));
        b[d] = ":" + e[1]
      }
    }
    a.kq = c;
    a.Bm = b;
    a.bu = !0
  }
};
var Xe = function(a, b) {
  this.index = a;
  this.padding = b
};
var M = function() {
  this.D = {};
  this.Dv = !1;
  Object.preventExtensions && Object.preventExtensions(this)
};
z.Ye = function(a, b) {
  a.Dv = b;
  return a
};
var Ze = function(a, b) {
  var c = a.Md().fields[b];
  if(!c) {
    if($e[b]) {
      return null
    }
    throw Error("Unrecognized field " + b);
  }
  return c
};
z.N = function(a, b) {
  Ze(a, b);
  return b in a.D ? a.D[b] : af(a, b)
};
z.bf = function(a, b) {
  Ze(a, b);
  return b in a.D
};
z.O = function(a, b, c) {
  var d = Ze(a, b);
  if(a.Dv && d) {
    if(d.F()) {
      if(!Array.isArray(c)) {
        throw Error("Type mismatch. Expected Array. Actual: " + c);
      }
      for(var e = 0;e < c.length;e++) {
        cf(b, d, c[e])
      }
    }else {
      cf(b, d, c)
    }
  }
  a.D[b] = c;
  return a
};
var cf = function(a, b, c) {
  b = b.l();
  var d = b.name || b, e = !1;
  if(b == Number) {
    e = "number" == typeof c
  }else {
    if(b == String) {
      e = "string" == typeof c
    }else {
      if(b == Boolean) {
        e = "boolean" == typeof c
      }else {
        if(b == Object) {
          e = c && "object" == typeof c && !(c instanceof M)
        }else {
          if(b.prototype instanceof M) {
            e = c instanceof b
          }else {
            if(b.$isProtoEnum) {
              e = "number" == typeof c && (0,z.pb)(b, c)
            }else {
              throw Error("I don't know how to type-check " + d + " on field " + a);
            }
          }
        }
      }
    }
  }
  if(!e) {
    throw Error("Type mismatch. Expected: " + d + " on field " + a + ", Value " + c);
  }
};
var af = function(a, b) {
  var c = Ze(a, b);
  if(!c || c.F()) {
    return null
  }
  var d = c.defaultValue();
  if(void 0 !== d) {
    return d
  }
  c = c.l();
  switch(c) {
    case Number:
      return 0;
    case String:
      return"";
    case Boolean:
      return!1;
    case Object:
      return null;
    default:
      if(c.$isProtoEnum) {
        for(var e in c) {
          if(c.hasOwnProperty(e) && "number" == typeof c[e]) {
            return c[e]
          }
        }
      }
      return null
  }
};
var df = function(a, b, c) {
  a.cH = c.name;
  a.tH = c.table;
  a.GG = c.tb;
  a.kH = c.lb.toString();
  a.xG = c.fields;
  a.TG = void 0 === c.re || c.re;
  a.UG = void 0 === c.WE ? !1 : c.WE;
  a.prototype.Md = function() {
    return c
  };
  a.jL = function(a) {
    return c.lb.parse(a)
  };
  a = a.prototype;
  var d = {}, e;
  for(e in c.fields) {
    c.fields[e] ? (d[c.fields[e].N()] = e, ef(a, e)) : delete c.fields[e]
  }
  c.nM = d;
  b && a && (Object.defineProperty(a, "id", {get:M.prototype.xw, set:(0,z.g)()}), ef(a, "column"), Object.defineProperty(a, "hashKey", {get:M.prototype.xw}), Object.defineProperty(a, "rangeKey", {get:M.prototype.pE}))
};
var ff = function(a, b, c, d) {
  b = b.l();
  if(b == String || b == Boolean || b == Number || b.$isProtoEnum) {
    return c === d
  }
  if(b.prototype instanceof M) {
    return c === d || c && d && c.Wb(d)
  }
  if(b == Object) {
    return gf(a, c, d)
  }
  throw Error("no equality metric");
};
var gf = function(a, b, c) {
  if(!b || !c || "object" != typeof b || "object" != typeof c) {
    return!1
  }
  for(var d in b) {
    if(null !== b[d] && "object" == typeof b[d]) {
      if(!gf(a, b[d], c[d])) {
        return!1
      }
    }else {
      if(b[d] != c[d]) {
        return!1
      }
    }
  }
  return!0
};
var ef = function(a, b) {
  if(b in a) {
    throw Error('Can not define setters/getters for "' + b + '", property name already exists.');
  }
  Object.defineProperty(a, b, {get:function() {
    return(0,z.N)(this, b)
  }, set:function(a) {
    (0,z.O)(this, b, a)
  }})
};
var hf = function() {
};
var jf = function() {
};
var kf = function(a, b, c, d) {
  b = b.l();
  if(b == String || b == Number || b == Boolean || b == Object || b.$isProtoEnum) {
    return c
  }
  if(b.prototype instanceof M) {
    return a.Wc(b, c, d)
  }
  throw Error('Unknown schema type "' + b + '"');
};
var lf = function(a, b, c) {
  b = b.l();
  if(b == String || b == Number || b == Boolean || b == Object || b.$isProtoEnum) {
    return c
  }
  if(b.prototype instanceof M) {
    return a.jd(c)
  }
  throw Error('Unknown schema type "' + b + '"');
};
z.mf = function() {
  M.call(this)
};
var nf = function() {
  M.call(this)
};
var of = function() {
  M.call(this)
};
var pf = function(a, b) {
  this.start = a < b ? a : b;
  this.end = a < b ? b : a
};
var qf = function(a, b, c, d) {
  a = (d ? Math.ceil : Math.floor)(a / c) * c;
  return Math.max(Math.min(a, b.end), b.start)
};
z.P = function(a) {
  a = a.split(".");
  var b;
  b = a.shift();
  b = rf[b] || b;
  for(var c = z.sf[b];c && (b = a.shift());) {
    c = c[b]
  }
  return c
};
z.tf = function(a, b) {
  return a(b || {}, null, z.sf)
};
z.uf = function(a, b) {
  return(0,z.Cc)((0,z.tf)(a, b))
};
var vf = function() {
  var a = window.GLOBALS;
  z.sf = {};
  for(var b in rf) {
    z.sf[rf[b]] = a[b]
  }
  z.sf.deviceWidth = wf(function() {
    return window.document.body.clientWidth
  });
  z.sf.deviceWidthImageBucket = wf(function() {
    return qf(window.document.body.clientWidth || 1200, xf, 200, !0)
  });
  z.sf.pr = wf(function() {
    return window.document.body.clientHeight
  })
};
var wf = function(a) {
  return{valueOf:a, toString:function() {
    return String(Number(this))
  }}
};
z.yf = function(a, b) {
  function c() {
  }
  c.prototype = a;
  var d = new c, e;
  for(e in b) {
    d[e] = b[e]
  }
  return d
};
var zf = function(a) {
  var b = [], c;
  for(c in a) {
    b.push(c)
  }
  return b
};
var Af = function(a, b, c) {
  var d = "key_" + a + ":" + b, e = Bf[d];
  if(void 0 === e || 0 > e) {
    Bf[d] = 0, Cf[d] = c
  }else {
    if(0 == e) {
      throw Error('Encountered two active delegates with the same priority ("' + a + ":" + b + '").');
    }
  }
};
z.Df = function(a, b) {
  var c = Cf["key_" + a + ":" + b];
  c || "" == b || (c = Cf["key_" + a + ":"]);
  return c ? c : Ef;
  throw Error('Found no active impl for delegate call to "' + a + ":" + b + '" (and not allowemptydefault\x3d"true").');
};
var Ef = function() {
  return""
};
z.U = function(a) {
  return a && a.nf && a.nf === Ff ? a.content : String(a).replace(Gf, Hf)
};
z.V = function(a) {
  a && a.nf && a.nf === Ff ? (a = String(a.content).replace(If, "").replace(Jf, "\x26lt;"), a = String(a).replace(Kf, Hf)) : a = String(a).replace(Gf, Hf);
  return a
};
var Lf = function(a) {
  return"%" + a.charCodeAt(0).toString(16)
};
var Mf = function(a) {
  if(a && a.nf === Nf) {
    return String(a).replace(Of, Vf)
  }
  a = (0,window.encodeURIComponent)(String(String(a)));
  Wf.lastIndex = 0;
  return Wf.test(a) ? a.replace(Wf, Lf) : a
};
z.Xf = function(a) {
  return a && a.nf == Nf ? String(a).replace(Of, Vf) : Yf(a)
};
z.Zf = function(a) {
  return a && a.nf === $f ? "zSoyz" : String(a)
};
z.ag = function(a, b) {
  var c = !0;
  a = String(a);
  if(a.length <= b) {
    return a
  }
  c && (3 < b ? b -= 3 : c = !1);
  55296 <= a.charAt(b - 1) && 56319 >= a.charAt(b - 1) && 56320 <= a.charAt(b) && 57343 >= a.charAt(b) && (b -= 1);
  a = a.substring(0, b);
  c && (a += "...");
  return a
};
var Hf = function(a) {
  return bg[a]
};
var Vf = function(a) {
  return cg[a]
};
var Yf = function(a) {
  a = String(a);
  return dg.test(a) ? a.replace(Of, Vf) : "#zSoyz"
};
var eg = function() {
  return fg.test("iframe") ? "iframe" : "zSoyz"
};
z.gg = function(a, b, c) {
  b = "";
  if(a.imageId) {
    var d = c.useragent.isMobile && a.Tr ? a.Tr : a.width ? a.width : c.deviceWidthImageBucket ? c.deviceWidthImageBucket : c.deviceWidth, e = c.useragent.isMobile && a.lF ? a.lF : a.height ? a.height : 0.8 * d, f = a.An ? a.An : "c";
    b += (0,z.U)(c.miroUrl) + "/";
    switch(a.strategy) {
      case "resample":
        b += "max/" + (0,z.U)(d);
        break;
      case "crop-fixed":
        b += "fit/" + (0,z.U)(f) + "/" + (0,z.U)(d) + "/" + (0,z.U)(e);
        break;
      case "crop-preserve":
        b += "fit/" + (0,z.U)(f) + "/" + (0,z.U)(d) + "/" + (0,z.U)(a.height * d);
        break;
      default:
        b += "proxy"
    }
    b += (a.filter ? "/desat/" + (0,z.U)(a.filter) + "-m/" + (0,z.U)(a.filter) + "-o" : "") + "/" + (0,z.U)(a.imageId)
  }
  return b
};
var hg = function(a, b) {
  return ig(a) + (!a.post.latestPublishedVersion && a.post.creatorId == b.currentUser.userId && b.useragent.supportsEdit ? "/edit" : "")
};
var ig = function(a) {
  return"/" + (a.Lc ? (0,z.U)(a.Lc) : a.collection ? (0,z.U)(a.collection.slug) : a.post.homeCollection ? (0,z.U)(a.post.homeCollection.slug) : "p") + "/" + (0,z.U)(a.post.id)
};
z.jg = function(a) {
  return a.user.userId ? "/@" + (0,z.U)(a.user.username) : "/m/errors/404"
};
var kg = function(a, b, c) {
  b = "";
  var d = a.imageId ? (0,z.gg)({imageId:a.imageId, strategy:"crop-fixed", width:"150", height:"150", An:"t"}, 0, c) : "https:" + (0,z.U)(c.defaultPreviewImage);
  return b += "https://www.facebook.com/dialog/feed? app_id\x3d" + Mf(c.facebookKey) + "\x26 link\x3d" + Mf(a.url) + "\x26 name\x3d" + Mf(a.title) + "\x26 display\x3dpopup\x26 picture\x3d" + Mf(d) + "\x26 caption\x3d" + Mf(a.caption) + "\x26 description\x3d" + Mf(a.description) + "\x26 redirect_uri\x3d" + Mf(a.FF)
};
var lg = function(a) {
  this.w = a;
  this.ba = a.get("app");
  this.J = a.get("dialog");
  this.$ = a.get("datastore").Ba[mg];
  this.V = "";
  this.eu = (0,z.L)(window.document.body, "keyup", this.dq, this)
};
var ng = function(a, b) {
  (0,z.Jc)(b) ? a.appendChild(b) : (0,z.ja)(b) ? b.forEach(function(b) {
    ng(a, b)
  }) : a.appendChild(window.document.createTextNode(String(b)))
};
var og = function(a) {
  var b = Array.prototype.splice.call(arguments, 0), c;
  "string" == typeof b[0] ? (c = window.document.createElement(b[0]), b.shift()) : c = window.document.createElement("div");
  if(null == b[0]) {
    b.shift()
  }else {
    if("string" == typeof b[0]) {
      c.className = b[0], b.shift()
    }else {
      if(!(0,z.Jc)(b[0])) {
        for(var d in b[0]) {
          c.setAttribute(d, b[0][d])
        }
        b.shift()
      }
    }
  }
  for(d = 0;d < b.length;d++) {
    ng(c, b[d])
  }
  return c
};
var pg = function(a) {
  this.id = a;
  this.lf = {}
};
var qg = function(a, b) {
  if("undefined" == typeof b) {
    for(var c in a.lf) {
      return!0
    }
    return!1
  }
  return!!a.lf[b]
};
z.rg = function(a, b, c) {
  sg();
  tg.g(a, b, c);
  return tg
};
z.ug = function(a) {
  vg && tg.clear(a)
};
z.wg = function(a) {
  sg();
  var b;
  "string" == typeof a ? b = a : (b = a.getAttribute("data-action-scope"), b || (b = "_actionscope_" + xg++, a.setAttribute("data-action-scope", b)));
  yg[b] || (yg[b] = new pg(b));
  return yg[b]
};
z.zg = function(a) {
  a = "string" == typeof a ? a : a instanceof pg ? a.id : a.getAttribute("data-action-scope");
  yg[a] && (yg[a].clear(), delete yg[a])
};
var sg = function() {
  vg || (vg = !0, (0,z.L)(window.document.body, "click", Ag), (0,z.L)(window.document.body, "mousedown", Bg), (0,z.L)(window.document, "keydown", Cg), tg = (0,z.wg)(window.document.body))
};
var Dg = function(a) {
  return z.B && !(0,z.$b)(9) ? 1 == a.button : z.Wc && z.Eg ? !a.button && !a.ctrlKey : !a.button
};
var Hg = function(a) {
  return"true" == a.contentEditable || "INPUT" == a.tagName && "text" == a.type || "TEXTAREA" == a.tagName
};
var Bg = function(a) {
  if(Dg(a)) {
    var b = Ig(a), c = a.target;
    b && !(0,z.Uc)(c, Hg, !0) && a.preventDefault()
  }
};
var Ag = function(a) {
  !Dg(a) || !Jg(a) || a.metaKey || a.shiftKey || a.altKey || a.ctrlKey || (a.preventDefault(), a.stopPropagation())
};
var Cg = function(a) {
  13 == a.keyCode && Jg(a) && a.preventDefault()
};
var Ig = function(a) {
  for(var b = a.target;b && b != window.document;) {
    var c = b.getAttribute("data-action");
    if(c) {
      return{vd:c, target:b, value:b.getAttribute("data-action-value"), event:a, Pn:a.metaKey || a.shiftKey || a.altKey || a.ctrlKey}
    }
    b = b.parentNode
  }
  return null
};
var Jg = function(a) {
  return vg ? (a = Ig(a)) ? Kg(a) : !1 : !1
};
var Kg = function(a) {
  if(a.target.disabled) {
    return!1
  }
  for(var b = a.target, c = !1;b && b != window.document;) {
    var d = yg[b.getAttribute("data-action-scope")];
    if(d) {
      if(d = d.Ik(a)) {
        return!0
      }
      c = c || !1 === d
    }
    b = b.parentNode
  }
  return c
};
z.Lg = function(a) {
  if(Mg) {
    Mg = !1;
    var b = z.Mb.location;
    if(b) {
      var c = b.href;
      if(c && (c = (c = (0,z.Lg)(c)[3] || null) && (0,window.decodeURIComponent)(c)) && c != b.hostname) {
        throw Mg = !0, Error();
      }
    }
  }
  return a.match(Ng)
};
var Og = function(a, b) {
  var c;
  if(a instanceof Og) {
    this.Pd = (0,z.ia)(b) ? b : a.Pd, Pg(this, a.Hh), c = a.Ao, Qg(this), this.Ao = c, this.rs(a.In()), Rg(this, a.jo), c = a.bl, Qg(this), this.bl = c, Sg(this, a.xg.Fa()), c = a.Gn, Qg(this), this.Gn = c
  }else {
    if(a && (c = (0,z.Lg)(String(a)))) {
      this.Pd = !!b;
      Pg(this, c[1] || "", !0);
      var d = c[2] || "";
      Qg(this);
      this.Ao = d ? (0,window.decodeURIComponent)(d) : "";
      this.rs(c[3] || "", !0);
      Rg(this, c[4]);
      d = c[5] || "";
      Qg(this);
      this.bl = d ? (0,window.decodeURIComponent)(d) : "";
      Sg(this, c[6] || "", !0);
      c = c[7] || "";
      Qg(this);
      this.Gn = c ? (0,window.decodeURIComponent)(c) : ""
    }else {
      this.Pd = !!b, this.xg = new Tg(null, 0, this.Pd)
    }
  }
};
var Pg = function(a, b, c) {
  Qg(a);
  a.Hh = c ? b ? (0,window.decodeURIComponent)(b) : "" : b;
  a.Hh && (a.Hh = a.Hh.replace(/:$/, ""))
};
var Rg = function(a, b) {
  Qg(a);
  if(b) {
    b = Number(b);
    if((0,window.isNaN)(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.jo = b
  }else {
    a.jo = null
  }
};
var Sg = function(a, b, c) {
  Qg(a);
  b instanceof Tg ? (a.xg = b, a.xg.us(a.Pd)) : (c || (b = Ug(b, Vg)), a.xg = new Tg(b, 0, a.Pd))
};
var Qg = function(a) {
  if(a.UE) {
    throw Error("Tried to modify a read-only Uri");
  }
};
var Ug = function(a, b) {
  return(0,z.ma)(a) ? (0,window.encodeURI)(a).replace(b, Wg) : null
};
var Wg = function(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
};
var Tg = function(a, b, c) {
  this.gd = a || null;
  this.Pd = !!c
};
var Xg = function(a) {
  if(!a.Eb && (a.Eb = new z.kd, a.ob = 0, a.gd)) {
    for(var b = a.gd.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = (0,window.decodeURIComponent)(e.replace(/\+/g, " "));
      e = Yg(a, e);
      a.add(e, f ? (0,window.decodeURIComponent)(f.replace(/\+/g, " ")) : "")
    }
  }
};
var Zg = function(a, b, c) {
  a.remove(b);
  0 < c.length && (a.gd = null, a.Eb.set(Yg(a, b), (0,z.cb)(c)), a.ob += c.length)
};
var Yg = function(a, b) {
  var c = String(b);
  a.Pd && (c = c.toLowerCase());
  return c
};
var $g = function() {
  z.D.call(this);
  this.ud = [];
  this.ue = {}
};
var ah = function(a) {
  delete a.ud;
  delete a.ue;
  delete a.dl
};
var bh = function(a) {
  this.Jm = a;
  this.Ej = {}
};
var ch = function(a) {
  if(dh) {
    for(var b = {}, c = a.ne(), d = 0;d < c.length;d++) {
      b[c[d]] = a.get(c[d])
    }
    return b
  }
  return a.Ej
};
var eh = function(a, b) {
  this.pD = b;
  this.vj = (0,z.fh)() + ":" + String(Math.random()).substr(2);
  this.Ua = new bh("MUTEX_" + a)
};
var gh = function(a) {
  var b = String(a.Ua.get("Y") || "");
  return"" === b || Number(b.split("|")[1]) < (0,z.fh)() - a.pD
};
var hh = function(a, b, c) {
  var d;
  try {
    d = b.call(c)
  }finally {
    d instanceof z.Ab ? (0,z.Gb)(d, a.nt, a) : a.nt()
  }
};
var ih = function(a, b, c, d) {
  this.ha = a.get("request");
  this.wb = b;
  this.Ml = this.hD = c;
  this.EA = d;
  this.HA = new eh(b, 3E4);
  this.Ua = new bh(b);
  this.Hc = null;
  this.Rm = !1;
  this.Ny = String(Math.random()).substr(2);
  this.cp = 0;
  (0,z.L)(window, "beforeunload", this.Cp, this)
};
var jh = function(a, b) {
  if(!b) {
    throw Error("Client reports a null stat");
  }
  a.cp = (a.cp + 1) % a.EA;
  a.Ua.put(a.Ny + "|" + a.cp, b);
  kh(a)
};
var kh = function(a) {
  a.Rm || null != a.Hc || (a.Hc = window.setTimeout(a.dv.bind(a), a.Ml))
};
var lh = function() {
};
var mh = function() {
};
var nh = function() {
  var a = oh(ph);
  return a ? new window.ActiveXObject(a) : new window.XMLHttpRequest
};
var oh = function(a) {
  if(!a.Mw && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new window.ActiveXObject(d), a.Mw = d
      }catch(e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.Mw
};
var qh = function(a, b, c, d) {
  var e = !1, f = new z.Ab(function() {
    e = !0;
    h.abort();
    h.onreadystatechange = z.fa
  }), h = rh(a, b, c, d, function(a) {
    e || (e = !0, f.Oa(a))
  }, function(a) {
    e || (e = !0, f.jg(a))
  });
  return f
};
var rh = function(a, b, c, d, e, f) {
  d = d || {};
  var h = e || z.fa, k = f || z.fa, l, m = nh();
  try {
    m.open(a, b, !0)
  }catch(r) {
    return k(new Ah("Error opening XHR: " + r.message, b, m)), m
  }
  m.onreadystatechange = function() {
    if(4 == m.readyState) {
      window.clearTimeout(l);
      var a;
      a: {
        switch(m.status) {
          case 200:
          ;
          case 201:
          ;
          case 202:
          ;
          case 204:
          ;
          case 206:
          ;
          case 304:
          ;
          case 1223:
            a = !0;
            break a;
          default:
            a = !1
        }
      }
      !a && (a = 0 === m.status) && (a = (0,z.Lg)(b)[1] || null, !a && window.self.location && (a = window.self.location.protocol, a = a.substr(0, a.length - 1)), a = a ? a.toLowerCase() : "", a = !("http" == a || "https" == a || "" == a));
      a ? h(m) : k(new Bh(m.status, b, m))
    }
  };
  e = !1;
  if(d.headers) {
    for(var C in d.headers) {
      m.setRequestHeader(C, d.headers[C])
    }
    e = "Content-Type" in d.headers
  }
  "POST" != a || e || m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  d.withCredentials && (m.withCredentials = d.withCredentials);
  d.Sr && m.overrideMimeType(d.Sr);
  0 < d.Gs && (l = window.setTimeout(function() {
    m.onreadystatechange = z.fa;
    m.abort();
    k(new Ch(b, m))
  }, d.Gs));
  try {
    m.send(c)
  }catch(H) {
    k(new Ah("Error sending XHR: " + H.message, b, m))
  }
  return m
};
var Ah = function(a, b, c) {
  za.call(this, a + ", url\x3d" + b);
  this.url = b;
  this.Ls = c
};
var Bh = function(a, b, c) {
  Ah.call(this, "Request Failed, status\x3d" + a, b, c);
  this.status = a
};
var Ch = function(a, b) {
  Ah.call(this, "Request timed out", a, b)
};
var Dh = function(a, b) {
  Eh[a] = b
};
var Fh = function(a, b, c) {
  a.mj || (a.mj = {});
  a.mj[b] = c
};
var Gh = function(a) {
  if(Hh) {
    throw Error("Guard reporter already configured");
  }
  Hh = a
};
var Ih = function() {
  var a = window || window, b = a.onerror;
  a.onerror = function(a, d, e) {
    b && b(a, d, e);
    d = String(d).split(/[\/\\]/).pop();
    (0,z.Jh)({message:a, fileName:d, Rr:e});
    return!0
  }
};
var Kh = function(a) {
  return"function" != typeof a ? a : function() {
    try {
      a.apply(this, arguments)
    }catch(b) {
      var c;
      c = b;
      c.stack ? (c = c.stack.split("\n"), c = /[^@]+@.*\/_\/fp\/js\//.test(c[0]) || /\/_\/fp\/js\//.test(c[1])) : c = c.fileName ? /\/_\/fp\/js\//.test(c.fileName) : !0;
      c && (0,z.Jh)(b);
      throw b;
    }
  }
};
var Lh = function() {
  var a = rh;
  rh = function(b, c, d, e, f, h) {
    return a(b, c, d, e, f ? Kh(f) : null, h ? Kh(h) : null)
  }
};
var Mh = function() {
  var a = z.L;
  z.L = function(b, c, d, e, f) {
    return a(b, c, Kh(d), e, f)
  }
};
var Nh = function() {
  var a = window, b = a.setTimeout;
  a.setTimeout = function(a, d) {
    a = Kh(a);
    return b.call ? b.call(this, a, d) : b(a, d)
  }
};
var Oh = function() {
  var a = window, b = a.setInterval;
  a.setInterval = function(a, d) {
    a = Kh(a);
    return b.call ? b.call(this, a, d) : b(a, d)
  }
};
z.Ph = function(a) {
  "string" == typeof a && (a = Error(a));
  (0,z.Jh)(a)
};
z.Jh = function(a) {
  var b;
  a: {
    b = a.message + a.stack;
    for(var c = 0;c < Qh.length;c++) {
      var d = Qh[c];
      if("string" == typeof d) {
        if(-1 != b.indexOf(d)) {
          b = !0;
          break a
        }
      }else {
        if(a instanceof d) {
          b = !0;
          break a
        }
      }
    }
    b = !1
  }
  if(!b) {
    b = {};
    for(var e in Eh) {
      b[e] = String(Eh[e])
    }
    if(a.mj) {
      for(e in a.mj) {
        b[e] = String(a.mj[e])
      }
    }
    a = {message:a.message, name:a.name, lineNumber:a.lineNumber || a.line || "Not available", fileName:a.fileName || a.filename || a.sourceURL || window.location.href, stack:a.stack || "Not available", timestamp:(new Date).getTime(), extra:b};
    Hh ? jh(Hh, a) : Rh.push(a)
  }
};
z.Sh = function() {
  $g.call(this);
  this.fk = [];
  this.Ts = !0
};
var Th = function(a, b) {
  for(var c = 0;c < a.fk.length;c++) {
    if(a.fk[c][0] == b) {
      return a.fk[c][1]
    }
  }
  return null
};
z.Uh = function(a) {
  z.Sh.call(this);
  this.Ua = a || {};
  this.lp = {}
};
var Vh = function(a) {
  return(0,z.Te)(a, function(a) {
    return a.Ya()
  })
};
z.Wh = function(a, b) {
  var c = a.get(b);
  return null != c ? String(c) : ""
};
z.Xh = function(a, b) {
  var c = a.get(b);
  return null != c ? Number(c) : 0
};
var Yh = function(a) {
  return!!a.get("latestPublishedVersion")
};
z.Zh = function(a) {
  a.H("remove", a)
};
z.$h = function(a) {
  z.Sh.call(this);
  this.wa = a || [];
  this.dx = {}
};
z.ai = function(a, b) {
  return a.wa[b] || null
};
z.bi = function(a, b, c) {
  return a.find(function(a) {
    return a.get(b) === c
  })
};
var ci = function(a, b) {
  for(var c = 0;c < a.wa.length;c++) {
    if(a.wa[c].get("id") === b) {
      return c
    }
  }
  return-1
};
var di = function(a, b) {
  b.h("change", a.Ku, a);
  b.h("remove", a.Mu, a)
};
var ei = function(a, b) {
  b.ma("change", a.Ku, a);
  b.ma("remove", a.Mu, a)
};
var fi = function(a) {
  z.$h.call(this);
  this.Fh = a.get("request");
  this.qb = (0,z.A)(new z.Ab, z.Jh);
  this.Ql = 0
};
var gi = function(a) {
  if(!a.wh) {
    var b = (0,z.Gb)((0,z.A)((0,z.y)(a.Fh.send(a.cm, a.wb, {}, {Z:!0, background:!0}), a.rF, a), a.nx, a), a.Jx, a);
    a.qb = a.fg(b);
    a.wh = !0
  }
  return hi(a, a.qb)
};
var ii = function(a, b) {
  if(!a.bm) {
    return hi(a, a.qb)
  }
  a.Ql = Math.max(a.Ql, b + a.count());
  a.wh && !a.qb.hd ? (0,z.Gb)(a.qb, a.Ct, a) : a.Ct();
  return hi(a, a.qb)
};
var hi = function(a, b) {
  return(0,z.y)(b.Je(), function() {
    return this
  }, a)
};
var ji = function(a, b) {
  fi.call(this, a);
  this.wb = b
};
var ki = function(a, b) {
  return{count:b, ignore:(0,z.Te)(a.wa, function(a) {
    return a.get("id")
  })}
};
z.W = function(a, b) {
  var c = a.name;
  li(["_trackEvent", "Event", c]);
  mi(["record", c, (0,z.qb)(b)]);
  ni(a, b)
};
var oi = function(a, b) {
  pi[a] = b
};
var ni = function(a, b) {
  var c = a.name, d;
  for(d in pi) {
    var e = pi[d];
    b[d] = "function" == typeof e ? e() : e
  }
  qi({type:"e", key:c, data:b})
};
z.ri = function(a) {
  a = "string" === typeof a ? a : a.name;
  qi({type:"i", key:a});
  li(["_trackEvent", "Impression", a])
};
z.si = function(a, b) {
  b = Math.max(0, b);
  3E4 < b || (qi({type:"t", key:a, value:b}), li(["_trackEvent", "Timer", a, null, b, !0]))
};
var qi = function(a) {
  a.timestamp = Date.now();
  a.eventId = Date.now().toString(36) + Math.round(1E16 * Math.random()).toString(36);
  jh(ti, a)
};
var ui = function(a) {
  ti = a
};
var li = function(a) {
  (0,z.P)("variants.dont_track_user") || window._gaq && window._gaq.push(a)
};
var mi = function(a) {
  (0,z.P)("variants.dont_track_user") || window._kmq && window._kmq.push(a)
};
z.vi = function(a, b, c) {
  var d;
  a: {
    switch(a) {
      case 1:
        d = "page-type";
        break a;
      case 2:
        d = "user";
        break a
    }
    d = "unknown"
  }
  li(["_setCustomVar", a, d, b, c || 3])
};
var wi = function(a) {
  this.w = a;
  this.gb = a.get("request");
  this.hi = {};
  this.yd = {};
  this.Ba = {};
  this.wj = {};
  this.Dj = null
};
z.xi = function(a, b) {
  if(!yi(b)) {
    var c = Error("An unpopulated object was sent in to upsertPostMeta");
    Fh(c, "post", b);
    (0,z.Jh)(c)
  }
  c = b.id;
  if(!c) {
    throw Error("Upserted data without id");
  }
  var d = a.hi[c];
  d ? d.Ih(b) : (d = new z.Uh(b), a.hi[c] = d);
  return d
};
z.zi = function(a) {
  return a.wj["my-collections"]
};
var Ai = function(a, b, c) {
  if(a.wj[b]) {
    throw Error("Collection list already exists with id\x3d" + b);
  }
  c = new Bi(a.w, c);
  c.wf = Ci;
  return a.wj[b] = c
};
z.Di = function(a, b, c, d) {
  if(a.Ba[b]) {
    throw Error("Post list already exists with id\x3d" + b);
  }
  c = new Ei(a.w, c);
  c.cm = d.toUpperCase();
  c.uo("id", b);
  c.wf = Ci;
  return a.Ba[b] = c
};
var Fi = function(a, b, c) {
  c = c || "recommended";
  var d = b + ":" + c + ":" + (0,z.Gi)();
  a = (0,z.Di)(a, d, "/" + b + "/load-more?sortBy\x3d" + c, "POST");
  a.uo("preferredCollection", b);
  return a
};
z.Hi = function(a, b) {
  if(!yi(b)) {
    var c = Error("An unpopulated object was sent in to upsertCollectionMeta");
    Fh(c, "collection", b);
    (0,z.Jh)(c)
  }
  var c = b.slug, d = a.yd[c];
  d ? d.Ih(b) : (d = new z.Uh(b), a.yd[c] = d);
  return d
};
z.Gi = function() {
  var a = Math.round(1E3 * Math.random());
  return Date.now() - Ii + "." + a
};
var Ci = function(a) {
  return a.value ? (0,z.Ki)(a.value, a.references) : a
};
var Ei = function(a, b) {
  ji.call(this, a, b);
  this.U = a.get("datastore")
};
var Bi = function(a, b) {
  ji.call(this, a, b);
  this.U = a.get("datastore")
};
var X = function(a) {
  this.name = a
};
var Li = function(a) {
  this.name = a
};
var Z = function(a) {
  this.name = a
};
var Mi = function() {
  return!!(0,z.P)("useragent.requiresBodyScroll")
};
z.Ni = function() {
  if(Mi()) {
    return window.document.body
  }
  if(1E3 < window.innerWidth) {
    var a = this.o.querySelector(".wrapper");
    if(a) {
      return a
    }
  }
  return this.o
};
var Oi = function(a, b, c) {
  a == window.document.body && (a = window);
  "function" == typeof a.scrollTo ? a.scrollTo(b, c) : (a.scrollTop = c, a.scrollLeft = b)
};
var Pi = function(a) {
  this.Tp = a;
  this.eh = {}
};
var Qi = function(a) {
  Pi.call(this, a)
};
var Ri = function(a) {
  this.Hj = a;
  this.pj = !1
};
var Si = function() {
};
var Ti = function() {
};
z.Ui = function(a, b, c) {
  this.title = a;
  this.image = null;
  this.description = b;
  this.type = c;
  this.name = this.username = this.es = this.fs = this.author = null
};
z.Vi = function(a) {
  for(var b = window.document.getElementsByTagName("meta"), c = {}, d = {}, e = 0;e < b.length;e++) {
    c[b[e].getAttribute("property")] = b[e], d[b[e].getAttribute("name")] = b[e]
  }
  Wi(c, "og:url", window.location.href, "property");
  a.title ? (window.document.title = a.title, Wi(d, "title", a.title, "name"), Wi(c, "og:title", a.title, "property")) : window.document.title = (0,z.P)("productName");
  a.image && Wi(c, "og:image", a.image, "property");
  a.description && Wi(c, "og:description", a.description, "property");
  Wi(c, "og:type", a.type, "property");
  "article" == a.type && (a.author && Wi(c, "article:author", a.author, "property"), a.fs && Wi(c, "article:publisher", a.fs, "property"), a.es && Wi(c, "article:published_time", a.es, "property"));
  "profile" == a.type && (a.username && Wi(c, "profile:username", a.username, "property"), a.name && (d = a.name.split(" "), 1 == d.length ? Wi(c, "profile:first_name", a.name, "property") : (b = d.slice(0, -1).join(" "), d = d.slice(-1).join(" "), Wi(c, "profile:first_name", b, "property"), Wi(c, "profile:last_name", d, "property"))));
  a = a.type;
  var f;
  if("article" != a) {
    for(f in c) {
      f && "article" === f.split(":")[0] && c[f].parentNode.removeChild(c[f])
    }
  }
  if("profile" != a) {
    for(f in c) {
      f && "profile" === f.split(":")[0] && c[f].parentNode.removeChild(c[f])
    }
  }
};
var Wi = function(a, b, c, d) {
  a[b] ? a[b].content = c : (a = window.document.createElement("meta"), a.setAttribute(d, b), a.content = c, window.document.getElementsByTagName("head")[0].appendChild(a))
};
z.Xi = function(a) {
  z.D.call(this);
  this.w = a
};
z.Yi = function(a, b) {
  return a.w.get(b)
};
z.Zi = function(a) {
  z.Xi.call(this, a)
};
z.$i = function(a, b) {
  z.Xi.call(this, a);
  var c = b.path;
  if(0 === c.indexOf("/") || 0 === c.indexOf("http")) {
    throw Error("You cannot construct an html screen with an absolute path. Try removing the leading slash.");
  }
  this.wb = c
};
var aj = function(a, b) {
  z.$i.call(this, a, b);
  this.ba = a.get("app");
  this.U = a.get("datastore");
  this.$ = this.U.Ba[mg];
  this.Zg = null
};
var bj = function(a) {
  var b = a.R(".welcome-wrapper");
  b && (0,window.setTimeout)(function() {
    (0,z.G)(b, "hiding");
    this.ce = (0,z.L)(b, z.cj, function() {
      (0,z.G)(b, "hidden");
      (0,z.pe)(this.ce);
      this.ce = null
    }, this)
  }.bind(a), 3E3)
};
var dj = function(a) {
  return a.user && a.user.userId ? '\x3ca href\x3d"' + (0,z.jg)(a) + '" data-id\x3d"' + (0,z.V)(a.user.userId) + '" title\x3d"Go to the profile of ' + (0,z.V)(a.user.name) + '"' + (a.rel ? ' rel\x3d"' + (0,z.V)(a.rel) + '"' : "") + ej(a) + "\x3e" + (0,z.U)(a.user.name) + "\x3c/a\x3e" : "Unknown User"
};
var fj = function(a) {
  return'\x3ca href\x3d"/' + (0,z.V)(a.collection.slug) + '" title\x3d"Go to ' + (0,z.V)(a.collection.name) + '" data-collection-slug\x3d"' + (0,z.V)(a.collection.slug) + '" data-id\x3d"' + (0,z.V)(a.collection.id) + '"' + ej(a) + "\x3e" + (0,z.U)(a.collection.name) + "\x3c/a\x3e"
};
var ej = function(a) {
  a = a || {};
  return(a.Ma ? ' class\x3d"' + (0,z.V)(a.Ma) + '"' : "") + (a.Ic ? ' data-action\x3d"' + (0,z.V)(a.Ic) + '"' : "") + (a.Jc ? ' data-action-value\x3d"' + (0,z.V)(a.Jc) + '"' : "")
};
z.gj = function(a, b) {
  return hj((0,z.yf)(a, {width:64, height:64}), b)
};
z.ij = function(a, b) {
  return hj((0,z.yf)(a, {width:100, height:100}), b)
};
z.jj = function(a, b) {
  return hj((0,z.yf)(a, {width:190, height:190}), b)
};
var hj = function(a, b) {
  var c = "", d = a.miroUrl ? a.miroUrl : b.miroUrl, e = !a.Dk && a.user && a.user.name;
  if(e) {
    var f = "Go to the profile of " + a.user.name, c = c + ('\x3ca href\x3d"' + (0,z.jg)(a) + '"' + (a.Ma ? ' class\x3d"' + (0,z.V)(a.Ma) + '"' : "") + (a.Ic ? ' data-action\x3d"' + (0,z.V)(a.Ic) + '"' : "") + (a.tabIndex ? '  tabindex\x3d"' + (0,z.V)(a.tabIndex) + '"' : "") + (a.Jc ? ' data-action-value\x3d"' + (0,z.V)(a.Jc) + '"' : "") + ' title\x3d"' + (0,z.V)(a.ij ? a.ij : f) + '" \x3e')
  }else {
    c += "\x3cspan" + (a.Ma ? ' class\x3d"' + (0,z.V)(a.Ma) + '"' : "") + "\x3e"
  }
  return c += '\x3cimg src\x3d"' + (a.user && a.user.imageId ? (0,z.V)((0,z.Xf)(d)) + "/fit/c/" + (0,z.V)(a.width) + "/" + (0,z.V)(a.height) + "/" + (0,z.V)(a.user.imageId) : b.defaultUserImage ? (0,z.V)((0,z.Xf)(b.defaultUserImage)) : "") + '"' + (a.od ? ' class\x3d"' + (0,z.V)(a.od) + '"' : "") + (a.ij ? ' data-tooltip\x3d"' + (0,z.V)(a.ij) + '"' : "") + (a.ij || a.user ? ' title\x3d"' + (0,z.V)(a.ij ? a.ij : a.user.name) + '"' : "") + (e ? "" : (a.Ic ? ' data-action\x3d"' + (0,z.V)(a.Ic) + '"' : 
  "") + (a.Jc ? ' data-action-value\x3d"' + (0,z.V)(a.Jc) + '"' : "")) + "\x3e" + (a.user && a.user.name && a.JE ? "\x3cspan " + (a.hx ? 'class\x3d"' + (0,z.V)(a.hx) + '"' : "") + "\x3e" + (0,z.U)(a.user.name) + "\x3c/span\x3e" : "") + (e ? "\x3c/a\x3e" : "\x3c/span\x3e")
};
var kj = function(a) {
  return'\x3cspan class\x3d"reading-time"\x3e' + (0,z.U)(Math.ceil(a.readingTime)) + " min read\x3c/span\x3e"
};
var lj = function(a, b, c) {
  b = "";
  c.variants.can_read_later && c.isAuthenticated ? a.isOnReadingList ? (b += '\x3cspan class\x3d"reading-list-status on-reading-list" data-post-id\x3d"' + (0,z.V)(a.postId) + '" data-reading-time\x3d"' + (0,z.V)(a.readingTime) + '" data-action\x3d"remove-from-reading-list" data-action-value\x3d"' + (0,z.V)(a.postId) + '"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e', c = a.YE && 1E3 > c.deviceWidth, b += '\x3cspan class\x3d"reading-list-status-' + (0,z.V)(c ? "display" : 
  "message") + '"\x3eBookmarked\x3c/span\x3e' + (c ? "" : kj(a)) + "\x3c/span\x3e") : b += '\x3cspan class\x3d"reading-list-status" data-post-id\x3d"' + (0,z.V)(a.postId) + '" data-reading-time\x3d"' + (0,z.V)(a.readingTime) + '" data-action\x3d"add-to-reading-list" data-action-value\x3d"' + (0,z.V)(a.postId) + '"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e\x3cspan class\x3d"reading-list-status-message"\x3eBookmark\x3c/span\x3e' + kj(a) + "\x3c/span\x3e" : b += 
  kj(a);
  return b
};
var mj = function(a, b) {
  return'\x3cul class\x3d"post-item-meta"\x3e' + (a.RL && a.post.providerName && b.variants.can_view_prl_homepage ? (0,z.Df)("b", "prl")(a, null, b) : (0,z.Df)("b", "")(a, null, b)) + (b.variants.enable_debug && !a.FE ? '\x3cli class\x3d"post-item-meta-item" data-tooltip\x3d"Detected language (debug only)"\x3e' + (a.post.detectedLanguage ? (0,z.U)(a.post.detectedLanguage) : "n/a") + "\x3c/li\x3e" : "") + (b.variants.can_see_reading_time ? '\x3cli class\x3d"post-item-meta-item"\x3e' + lj({postId:a.post.id, 
  isOnReadingList:a.post.virtuals.isOnReadingList, readingTime:a.post.virtuals.readingTime}, 0, b) + "\x3c/li\x3e" : "") + "\x3c/ul\x3e"
};
var nj = function(a, b, c) {
  return'\x3cdiv class\x3d"email-share-form"\x3e\x3cdiv class\x3d"email-address-container"\x3e\x3cinput type\x3d"text" class\x3d"text-input text-input-border share-email-address" placeholder\x3d"name@example.com, name@example.com"\x3e\x3c/div\x3e\x3cdiv class\x3d"share-comment"\x3e\x3ctextarea class\x3d"textarea-seamless sender-comment" placeholder\x3d"Write something..."\x3e\x3c/textarea\x3e\x3cdiv class\x3d"share-post-data"\x3e\x3cdiv class\x3d"post-author-image-container"\x3e' + hj((0,z.yf)({user:a.post.creator, 
  Ma:"post-author-image", Ic:"stat-link", Jc:"post-discovery.author.image"}, {width:40, height:40}), c) + '\x3c/div\x3e\x3cdiv class\x3d"share-post-text-container"\x3e\x3cdiv class\x3d"share-post-text"\x3e\x3cdiv class\x3d"share-post-title"\x3e' + (0,z.U)(a.post.title) + '\x3c/div\x3e\x3cdiv class\x3d"share-post-subtitle"\x3e' + (0,z.U)(a.post.virtuals.draftSnippet) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
};
var oj = function(a, b, c) {
  b = a.users.length || a.collections.length || a.posts.length ? "" : '\x3cspan class\x3d"site-nav-search-no-results"\x3e\x3cspan class\x3d"site-nav-search-no-results-icon"\x3e:(\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-info"\x3e\x3cspan class\x3d"site-nav-search-result-title"\x3eNo matches\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-snippet"\x3eTry \x3ca href\x3d"/collections" title\x3d"Go to featured collections"\x3efeatured collections\x3c/a\x3e for good reads.\x3c/span\x3e\x3c/span\x3e\x3c/span\x3e';
  var d;
  if(a.users.length) {
    d = "";
    for(var e = a.users, f = e.length, h = 0;h < f;h++) {
      var k = e[h];
      d += '\x3cbutton class\x3d"btn-link site-nav-search-result" data-action\x3d"navigate-to-search-result" data-action-value\x3d"/@' + (0,z.V)(k.username) + ",user," + (0,z.V)(h) + '"\x3e\x3cspan class\x3d"icons-avatar-user"\x3e' + (0,z.gj)({user:k, Dk:!0, od:"icons-avatar-user-img"}, c) + '\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-info"\x3e\x3cspan class\x3d"site-nav-search-result-title"\x3e' + (0,z.U)(k.name) + "\x3c/span\x3e" + (k.virtuals.bioHTML ? '\x3cspan class\x3d"site-nav-search-result-snippet"\x3e' + 
      (0,z.Zf)(k.virtuals.bioHTML) + "\x3c/span\x3e" : "") + "\x3c/span\x3e\x3c/button\x3e"
    }
  }else {
    d = ""
  }
  b += d;
  if(a.collections.length) {
    d = "";
    e = a.collections;
    f = e.length;
    for(h = 0;h < f;h++) {
      k = e[h];
      d += '\x3cbutton class\x3d"btn-link site-nav-search-result" data-action\x3d"navigate-to-search-result" data-action-value\x3d"/' + (0,z.V)(k.slug) + ",collection," + (0,z.V)(h) + '"\x3e';
      var l = (0,z.gg)({imageId:k.image.imageId, strategy:"crop-fixed", width:"20", height:"20", An:"t"}, 0, c);
      d += '\x3cspan class\x3d"collection-icon" style\x3d"background-image: url(\'' + (0,z.V)((0,z.Xf)(l)) + '\')"\x3e\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-info"\x3e\x3cspan class\x3d"site-nav-search-result-title"\x3e' + (0,z.U)(k.name) + '\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-snippet"\x3e' + (0,z.U)(k.metadata.postCount) + " posts" + (k.description ? " \x26middot; " + (0,z.U)(k.description) : "") + "\x3c/span\x3e\x3c/span\x3e\x3c/button\x3e"
    }
    c = d
  }else {
    c = ""
  }
  c = b + c;
  if(a.posts.length) {
    b = "";
    a = a.posts;
    d = a.length;
    for(e = 0;e < d;e++) {
      f = a[e], b += '\x3cbutton class\x3d"btn-link site-nav-search-result" data-action\x3d"navigate-to-search-result" data-action-value\x3d"' + ig({post:f}) + ",post," + (0,z.V)(e) + '"\x3e\x3cspan class\x3d"icons icons-draft"\x3e\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-info"\x3e\x3cspan class\x3d"site-nav-search-result-title"\x3e' + (0,z.U)(f.title) + '\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-snippet"\x3e' + (0,z.U)(f.creator.name) + " \x26middot; " + kj(f.virtuals) + 
      "\x3c/span\x3e\x3c/span\x3e\x3c/button\x3e"
    }
    a = b
  }else {
    a = ""
  }
  return c + a
};
var pj = function(a) {
  var b = '\x3cdiv class\x3d"overlay"\x3e\x3cbutton class\x3d"overlay-close" data-action\x3d"overlay-close"\x3e\x26times;\x3c/button\x3e\x3cdiv class\x3d"overlay-dialog ' + (a.type ? "overlay-dialog-" + (0,z.V)(a.type) : "") + '" tabindex\x3d"-1"\x3e' + (a.title ? '\x3ch3 class\x3d"overlay-title"\x3e' + (0,z.U)(a.title) + "\x3c/h3\x3e" : "") + '\x3cdiv class\x3d"overlay-content"\x3e' + (0,z.Zf)(a.bodyHtml) + "\x3c/div\x3e";
  a = a.type ? (0,z.Df)("d", a.type)(a, null, void 0) : "";
  return b += (a ? '\x3cdiv class\x3d"overlay-actions"\x3e' + (0,z.Zf)(a) + "\x3c/div\x3e" : "") + "\x3c/div\x3e\x3c/div\x3e"
};
var qj = function(a) {
  a = a || {};
  return'\x3ca class\x3d"site-nav-list-item-btn" title\x3d"' + (a.dF ? (0,z.V)(a.dF) : "Go home") + '" href\x3d"' + (a.cF ? (0,z.V)((0,z.Xf)(a.cF)) : "/") + '" tabindex\x3d"-1" \x3e\x3cspan class\x3d"icons icons-logo-m"\x3e\x3c/span\x3eHome\x3c/a\x3e'
};
var rj = function(a, b) {
  z.$i.call(this, a, b);
  this.ba = a.get("app");
  this.U = a.get("datastore");
  this.ha = a.get("request")
};
z.sj = function(a, b, c) {
  z.Sh.call(this);
  if(!a) {
    throw Error("Missing element for TemplateView");
  }
  this.o = a;
  this.D = b;
  this.yv = c
};
z.tj = function(a, b, c) {
  a.sk = b;
  a.jp = c;
  a.ki && a.ao();
  return a
};
z.uj = function(a, b) {
  b instanceof z.Uh && (b = a.Rf.call(null, b));
  if(a.sk) {
    a.sk[a.jp] = b;
    var c = (0,z.tf)(a.yv, a.sk);
    delete a.sk[a.jp];
    return c
  }
  return(0,z.tf)(a.yv, b)
};
z.vj = function() {
  M.call(this)
};
z.wj = function(a) {
  return(0,z.N)(a, "paragraphs")
};
var xj = function() {
  M.call(this)
};
var yj = function() {
  M.call(this)
};
z.zj = function(a, b) {
  return(0,z.O)(a, "originalWidth", b)
};
z.Aj = function(a, b) {
  return(0,z.O)(a, "originalHeight", b)
};
z.Bj = function() {
  M.call(this)
};
z.Cj = function(a, b) {
  return(0,z.O)(a, "iframeWidth", b)
};
z.Dj = function(a, b) {
  return(0,z.O)(a, "iframeHeight", b)
};
z.Ej = function() {
  M.call(this)
};
z.Fj = function(a) {
  return(0,z.N)(a, "start")
};
z.Gj = function(a) {
  return(0,z.N)(a, "end")
};
z.Hj = function() {
  M.call(this)
};
z.Ij = function(a) {
  return(0,z.N)(a, "startIndex")
};
z.Jj = function(a, b) {
  return(0,z.O)(a, "startIndex", b)
};
z.Kj = function(a, b) {
  return(0,z.O)(a, "textLayout", b)
};
z.Lj = function(a, b) {
  return(0,z.O)(a, "imageLayout", b)
};
z.Mj = function() {
  this.Vc = {}
};
var Nj = function(a, b) {
  var c = new z.Oj(a);
  c.sg = !1;
  b ? a.Vc[b] = c : a.nr = c
};
z.Pj = function(a) {
  var b = new z.Oj(a);
  b.qd = !1;
  b.sg = !0;
  a.nr = b
};
z.bk = function(a, b, c, d) {
  var e = new z.Oj(a);
  e.qd = !0;
  c && ((0,z.ja)(c) ? e.attributes = (0,z.vb)(c) : e.attributes = c);
  if(d) {
    for(e.qd = b, c = 0;c < d.length;c++) {
      a.Vc[d[c].toUpperCase()] = e
    }
  }
  return a.Vc[b] = e
};
z.Oj = function(a) {
  this.attributes = {};
  this.qc = a;
  this.qd = !1;
  this.sg = !0
};
var ck = function() {
  var a = new z.Mj;
  Nj(a, "SCRIPT");
  Nj(a, "STYLE");
  Nj(a, "HEAD");
  (0,z.Pj)(a);
  return a
};
var dk = function() {
  var a = ck();
  (0,z.bk)(a, "P", {name:!0, "class":["image-inset-left", "image-outset-left", "image-outset-center"]}, ["DIV"]).qc = ek;
  (0,z.bk)(a, "FIGURE", {name:!0, "class":["image-inset-left", "image-outset-left", "image-outset-center"]}).qc = fk;
  (0,z.bk)(a, "UL").qc = gk;
  (0,z.bk)(a, "OL").qc = gk;
  (0,z.bk)(a, "HR", ["name"]).qc = hk;
  (0,z.bk)(a, "H2", ["name"]).qc = ik;
  (0,z.bk)(a, "H3", ["name"]).qc = ik;
  (0,z.bk)(a, "BLOCKQUOTE", {name:!0, "class":["pullquote"]}).qc = ik;
  (0,z.bk)(a, "PRE", ["name"]).qc = ik;
  return a
};
z.jk = function(a) {
  return a ? a.replace(/[&"'><]/g, function(a) {
    return kk[a]
  }) : a
};
z.lk = function(a, b) {
  var c;
  try {
    c = new Og(a)
  }catch(d) {
    return window.console.warn("Malformed URI: ", a, d.stack), ""
  }
  if("javascript" == c.Hh) {
    return window.console.warn("Attempted to pass JavaScript URI"), ""
  }
  var e = mk(c), f = e && "/r/" == c.bl;
  return!b && f ? String(c.xg.get("url")) : !b || e || f ? a : "/r/?url\x3d" + (0,window.encodeURIComponent)(a)
};
var mk = function(a) {
  "string" == typeof a && (a = new Og(a));
  a = a.In();
  return!a || nk[a] || "localhost" == a
};
var ok = function(a) {
  return 2 == a ? Math.round(350) : 4 == a ? Math.round(525) : 3 == a ? 900 : 700
};
var pk = function(a, b) {
  if(!(0,z.Aa)(b, a)) {
    return""
  }
  var c = /\/([^\/]*)$/.exec(b);
  return c && c[1] || ""
};
var qk = function(a) {
  return'\x3ctextarea class\x3d"post-css-editor-textarea" placeholder\x3d"Type your CSS here"\x3e' + (a.nh && a.nh.nf && a.nh.nf === Ff ? String(a.nh.content).replace(Kf, Hf) : String(a.nh).replace(Gf, Hf)) + '\x3c/textarea\x3e\x3cbutton class\x3d"btn" data-action\x3d"install-css"\x3ePreview CSS\x3c/button\x3e\x3cbutton class\x3d"btn btn-primary" data-action\x3d"save-css"\x3eSave CSS\x3c/button\x3e'
};
var rk = function(a) {
  return'\x3cspan class\x3d"post-css-editor-link" data-action\x3d"popover-css-editor"\x3eEdit CSS' + (a.nh ? " (!)" : "") + "\x3c/span\x3e"
};
var sk = function(a, b, c) {
  z.D.call(this);
  this.w = a;
  this.Gm = b;
  this.Qg = null;
  this.lc = a.get("popover");
  this.Aq = a.get("request");
  a = window.document.createElement("div");
  a.className = "post-css-editor";
  c.appendChild(a);
  this.S = a;
  this.Dd()
};
var tk = function(a, b) {
  z.D.call(this);
  this.Wg = a;
  this.mc = b
};
z.uk = function() {
  z.D.call(this);
  this.Da = {}
};
var vk = function(a, b, c) {
  this.w = a;
  this.U = a.get("datastore");
  this.ba = a.get("app");
  this.V = b;
  this.Ri = c;
  this.Da = new z.uk
};
var wk = function(a) {
  a.Ri = new tk(a.Ri.Wg, mg);
  return mg
};
var xk = function(a) {
  var b = a.Qe();
  return b ? (0,z.tf)(ig, {post:b.Ya(), Lc:a.$.Mk("preferredCollection")}) : null
};
var yk = function(a) {
  this.S = a;
  this.cn = zk;
  this.Us = null
};
var zk = function(a, b) {
  if(!b) {
    return a.style.display = "none", a.style.visibility = "hidden", null
  }
  b.style.display = "block";
  b.style.visibility = "visible";
  a && (a.style.visibility = "hidden");
  a && (a.style.display = "none");
  return null
};
var Ak = function(a, b) {
  var c = "_obv.shell._surface_" + Bk++, d = og("div", {id:c, "class":"surface"});
  a.cn(d, null);
  ng(a.S, d);
  ng(d, b);
  return c
};
z.Ck = function(a, b, c, d, e, f) {
  this.hp = f;
  this.Zc = (0,z.Aj)((0,z.zj)((new yj).Cf(a), b), c).ro(d).Bf(e);
  this.kC = z.Dk.Fa(this.Zc);
  this.nk = "resample"
};
z.Ek = function(a, b, c) {
  b = {imageId:b || a.Zc.zc()};
  var d = c || a.Zc.lg();
  c = (0,z.N)(a.Zc, "filter");
  if("object" == typeof a.nk) {
    a = a.nk["*"] || a.nk[d];
    b.strategy = a.type;
    for(var e in a) {
      b[e] = a[e]
    }
  }else {
    b.strategy = a.nk
  }
  c && (b.filter = c);
  return(0,z.tf)(z.gg, b)
};
z.Fk = function(a, b) {
  this.ya = b;
  this.D = a;
  this.kb = z.Gk
};
z.Hk = function() {
  z.Sh.call(this);
  this.Of = !1;
  this.ga = []
};
var Ik = function(a, b) {
  z.Hk.call(this);
  this.ya = a;
  this.Vb = b
};
var Jk = function(a, b, c, d) {
  z.Hk.call(this);
  this.w = a;
  this.D = c;
  this.Ec = d;
  this.ya = b
};
var Kk = function(a, b) {
  this.fn = a;
  this.qj = b;
  this.Kb = new z.Sh;
  this.kb = Lk;
  this.Em = [];
  this.h = this.Kb.h.bind(this.Kb)
};
var Mk = function(a) {
  "])}while(1);\x3c/x\x3e" == a.substr(0, 16) && (a = a.substring(16));
  return a
};
var Nk = function(a) {
  for(var b = Lk, c = 0;c < a.Em.length;c++) {
    b = Math.max(b, a.Em[c].state)
  }
  a.kb != b && (a.kb = b, a.Kb.H("statechange", b))
};
var Ok = function(a) {
  var b = [], c;
  for(c in a) {
    b.push((0,window.encodeURIComponent)(c) + "\x3d" + (0,window.encodeURIComponent)(a[c]))
  }
  return b.join("\x26")
};
var Pk = function() {
  return"This operation was canceled by the user."
};
z.Qk = function() {
  return"The image you are trying to upload is too big. Please resize it so that it is under 5MB."
};
z.Rk = function() {
  return"The file you tried to upload is a type we don’t understand.  Supported formats are JPEG, PNG, and GIF."
};
z.Sk = function() {
  $g.call(this)
};
var Tk = function(a) {
  this.SC = a
};
var Uk = function(a) {
  this.OC = a
};
z.Vk = function(a, b, c) {
  function d() {
    var d = arguments, h = c || this;
    (0,window.clearTimeout)(e);
    e = (0,window.setTimeout)(function() {
      e = null;
      h instanceof z.D && h.ig || b.apply(h, d)
    }, a)
  }
  var e;
  d.cancel = function() {
    (0,window.clearTimeout)(e);
    e = null
  };
  return d
};
z.Wk = function(a, b, c) {
  var d = -window.Infinity;
  return function() {
    var e = c || this;
    if(!(e instanceof z.D && e.ig)) {
      var f = Date.now();
      f - d >= a && (b.apply(e, arguments), d = f)
    }
  }
};
z.Xk = function(a, b) {
  (0,window.setTimeout)(function() {
    a.call(b)
  }, 0)
};
var Yk = function(a) {
  var b = new z.Ab;
  (0,window.setTimeout)(b.Oa.bind(b, !0), a);
  return b
};
var Zk = function(a, b, c) {
  z.Sh.call(this);
  this.So = a;
  this.w = b;
  this.iz = c || window.document.title;
  this.hk = this.Cm = this.Qh = this.xd = this.mb = null;
  this.xb = {};
  this.$m = new yk(window.document.getElementById("container"));
  this.gv = {};
  this.sq = [];
  this.Oo = [];
  this.Gl = null;
  this.ga = [];
  window.setInterval(this.LC.bind(this), $k)
};
var al = function(a, b) {
  a.hk = b;
  return a
};
var bl = function(a, b) {
  a.sq.push(b);
  return a
};
var cl = function(a, b) {
  a.Oo.push(b);
  return a
};
var dl = function(a) {
  var b = !!(0,z.P)("useragent.requiresBodyScroll");
  a.bn = b;
  return a
};
var el = function(a) {
  return a.mb
};
z.fl = function(a, b, c) {
  c = c || {};
  return!!a.xb[b] && a.xb[b].fe.qg(b, c, a.xb[b])
};
z.gl = function(a, b) {
  a.Qh.hash != b && (a.Qh.hash = b, hl(a, a.mb.Od(), a.xd, a.Qh, !0))
};
var il = function(a, b, c, d, e) {
  var f = b.path, h = a.hk.Kn(f, z.sf);
  if(h) {
    return il(a, {path:h, hash:b.hash}, c, d, e)
  }
  a.H("startNav", f, c);
  if(!e && f == a.xd) {
    return b.hash ? ((0,z.gl)(a, b.hash), a.H("historyUpdate"), (0,z.Gb)((0,z.Ob)(a.mb), a.gk.bind(a, "endNav", f, !0))) : (0,z.A)(Qb(), a.gk.bind(a, "endNav", f, !1))
  }
  var k = c || {};
  k.hash = b.hash || k.hash || "";
  k.Zk = k.Zk || a.xd;
  k.rl = k.rl || null;
  b = a.mb && a.mb.pn();
  "string" == typeof b && (b = !(0,window.confirm)(b));
  if(b) {
    return(0,z.A)(Qb(), a.gk.bind(a, "endNav", f, !1))
  }
  b = null;
  if(b = jl(a, f, k)) {
    b = (0,z.Ob)(b)
  }else {
    if(b = kl(a, f)) {
      b = Rb(b.factory.create(a.w, b.eo, k), function(a) {
        a.Ds = Ak(this.$m, a.Ln())
      }, a)
    }else {
      return b = new ll(f), a.H("endNav", f, !1, b), Pb(b)
    }
  }
  a.Cm && (a.Cm.cancel(), a.Cm = null);
  a.$u();
  var l = new z.Ab;
  (0,z.y)(b, function(a) {
    var b = a.Ie();
    b ? ((0,z.y)(b, this.Fv.bind(this, a, k.rl)), (0,z.A)(b, this.aA.bind(this, f, a))) : b = this.Fv(a, k.rl);
    this.Cm = b;
    (0,z.y)(b, function() {
      hl(this, a.Od(), f, k, !!d);
      a.getMetadata() && (0,z.Vi)(a.getMetadata())
    }, this);
    (0,z.y)(b, this.ED.bind(this, k, a));
    (0,z.y)(b, this.Bz.bind(this, f, k, a));
    (0,z.y)(b, this.gk.bind(this, "endNav", f, !0));
    (0,z.A)(b, this.gk.bind(this, "endNav", f, !1));
    b.fg(l)
  }, a);
  (0,z.A)(b, l.jg, l);
  return l
};
var ml = function(a, b, c) {
  var d = new z.Ab;
  nl ? (0,z.Xk)(function() {
    Oi(a, b, c);
    d.Oa(null)
  }) : (Oi(a, b, c), d.Oa(null));
  return d
};
var hl = function(a, b, c, d, e) {
  b = b || a.iz;
  d.Gr || (d.Gr = "h" + Date.now());
  var f = {path:c, isNavigate:!0, data:window.JSON.stringify(d)};
  c = (a.So + c).replace("//", "/");
  var h;
  if(h = window.location.search) {
    "?" == h.charAt(0) && (h = h.substr(1));
    h = new Tg(h);
    for(var k = h.ne(), l = 0;l < k.length;l++) {
      for(var m = 0;m < a.sq.length;m++) {
        var r = k[l], C = a.sq[m];
        if("string" == typeof C && r == C || C.test && C.test(r)) {
          h.remove(r);
          break
        }
      }
    }
    h = h.Sn() ? "" : "?" + h.toString()
  }else {
    h = ""
  }
  c += h;
  d.hash && (c += "#" + d.hash);
  if(ol) {
    try {
      e ? window.history.replaceState(f, b, c) : window.history.pushState(f, b, c)
    }catch(H) {
      (0,z.Ph)(H)
    }
  }
  window.document.title = b;
  a.gp = d.Gr
};
var pl = function(a, b, c) {
  try {
    c.bb.call(c)
  }catch(d) {
    (0,z.Ph)(d)
  }
  delete a.xb[b];
  a.$m.remove(c.Ds)
};
var ql = function(a) {
  a = a.split("#");
  return{path:a[0], hash:a[1] || ""}
};
var kl = function(a, b) {
  var c;
  var d = rl(a.hk.ak, sl(b), 0, a.hk.ak.Hs, [], null);
  (c = d && d.object) && c.screen ? (d = d.matches, d.path = b, c = {screen:c.screen, eo:d}) : c = null;
  if(!c) {
    return null
  }
  d = c.screen;
  return{eo:c.eo, factory:"string" === typeof d ? new Tk(d) : new Uk(d)}
};
var jl = function(a, b, c) {
  var d = null;
  (0,z.fl)(a, b, c) ? d = a.xb[b] : a.xb[b] && pl(a, b, a.xb[b]);
  return d
};
var tl = function(a, b, c) {
  var d = a.hk.Kn(b, z.sf);
  if(d) {
    return tl(a, d, c)
  }
  c = c || {};
  b = ql(b).path;
  return b == a.xd ? (0,z.Ob)(a.mb) : (d = jl(a, b, c)) ? (0,z.Ob)(d) : (d = kl(a, b)) ? (c = d.factory.create(a.w, d.eo, c), Rb(c, function(a) {
    a.Ds = Ak(this.$m, a.Ln());
    a.fe = new Ri(a.fe);
    this.xb[b] = a
  }, a)) : Pb(Error("No screen or factory for " + b))
};
var ll = function(a) {
  this.path = a
};
z.ul = function(a) {
  this.w = a;
  this.Hf = null
};
z.vl = function(a, b, c) {
  return function(a) {
    a && a instanceof z.Tb || (c || (0,z.Ph)(a), this.open({title:"Uh oh!", bodyHtml:b, type:z.wl}))
  }.bind(a)
};
var xl = function(a, b, c, d) {
  z.Sh.call(this);
  this.w = a;
  this.Ij = !!c;
  this.xz = !!d;
  a = window.document.createElement("div");
  a.innerHTML = pj(b);
  this.S = a.children[0];
  this.J = this.S.getElementsByClassName("overlay-dialog")[0];
  this.xz || (0,z.L)(this.S, "click", function(a) {
    a.target === this.S && this.close()
  }, this);
  this.w.get("app").h("endNav", this.close, this);
  (0,z.wg)(this.S).g("overlay-close", this.close, this).g("overlay-confirm", this.az, this).g("overlay-cancel", this.Wh, this).g("overlay-refresh", this.AC, this).g("overlay-submit", this.mD, this)
};
var yl = function(a) {
  $g.call(this);
  this.w = a;
  this.J = a.get("dialog")
};
var zl = function(a) {
  this.ya = a;
  this.Jq = null
};
var Al = function(a) {
  var b = 10;
  a.Jq = window.setInterval(function() {
    this.set(Math.floor(100 - b));
    b *= 0.95
  }.bind(a), 50)
};
var Bl = function(a, b, c) {
  for(var d = [], e = 0;e < c;e++) {
    d.push(a[b + e])
  }
  return d
};
var Cl = function(a, b) {
  return Bl(a, b, 2).map(function(a) {
    return a.toString(16)
  }).join("")
};
var Dl = function(a, b, c) {
  return(a[b + (c ? 1 : 0)] << 8) + a[b + (c ? 0 : 1)]
};
var El = function(a, b, c) {
  a = (((a[b + (c ? 3 : 0)] << 8) + a[b + (c ? 2 : 1)] << 8) + a[b + (c ? 1 : 2)] << 8) + a[b + (c ? 0 : 3)];
  0 > a && (a += 4294967296);
  return a
};
z.Fl = function(a, b) {
  var c = new z.Ab, d = new window.FileReader;
  d.onload = function(b) {
    var d = Gl(new window.Uint8Array(b.target.result)), h = window.URL.createObjectURL(a);
    if(1 == d) {
      c.Oa(h)
    }else {
      var k = new window.Image;
      k.onload = function() {
        var a, b;
        1E3 < k.width ? (a = 1E3, b = 1E3 * k.height / k.width) : (a = k.width, b = k.height);
        var e = window.document.createElement("canvas"), C = e.getContext("2d");
        6 == d || 8 == d ? (e.width = b, e.height = a) : (e.width = a, e.height = b);
        var H = Math.max(a, b);
        C.translate(H / 2, H / 2);
        switch(d) {
          case 3:
            C.rotate(Math.PI);
            break;
          case 6:
            C.rotate(Math.PI / 2);
            break;
          case 8:
            C.rotate(1.5 * Math.PI)
        }
        var Oa = -a / 2, ea = -b / 2;
        H == a ? ea -= (b - H) / 2 : Oa -= (a - H) / 2;
        C.drawImage(k, Oa, ea, a, b);
        a = e.toDataURL();
        c.Oa(a);
        window.URL.revokeObjectURL(h)
      };
      k.src = h
    }
  };
  d.readAsArrayBuffer(a);
  b || (0,z.y)(c, function(a) {
    (0,window.setTimeout)(function() {
      window.URL.revokeObjectURL(a)
    }, 5E3);
    return a
  });
  return c
};
var Gl = function(a) {
  var b;
  b: {
    b = [];
    for(var c = 0;6 > c;c++) {
      b.push("Exif\x00\x00".charCodeAt(c))
    }
    for(var d = c = 0;c < a.length && 2E4 > c;) {
      if(d == b.length) {
        b = c - d;
        break b
      }
      a[c] == b[d] ? d++ : d = 0;
      c++
    }
    b = -1
  }
  if(0 > b) {
    a = {}
  }else {
    b += 6;
    c = "4949" == Cl(a, b);
    b = b + 2 + 2;
    b += El(a, b, c) - 4;
    d = Dl(a, b, c);
    b += 2;
    for(var e = {}, f = 0;f < d;f++) {
      var h = Dl(a, b, c);
      e[h] = {mM:h, type:Dl(a, b + 2, c), count:El(a, b + 4, c), data:Bl(a, b + 8, 4)};
      b += 12
    }
    e.hE = c;
    a = e
  }
  return a[274] ? Dl(a[274].data, 0, a.hE) : 1
};
var Hl = function(a) {
  this.ya = a
};
var Il = function(a, b, c, d, e, f) {
  this.Mg = a.get("image");
  this.J = a.get("dialog");
  this.nb = b;
  this.ii = new zl(c.querySelector(".progress-bar"));
  this.rq = new Hl(c.querySelector(".upload-feedback-preview"));
  this.D = d;
  this.Ec = f;
  this.kb = e;
  this.Vb = Jl ? new z.Sk : new yl(a);
  this.Vb.h("start", this.fC, this);
  this.Vb.h("progress", this.eC, this);
  this.Vb.h("success", this.bC, this);
  this.Vb.h("error", this.cC, this);
  this.Vb.h("abort", this.aC, this);
  this.Vb.h("preview", this.dC, this)
};
z.Kl = function() {
  z.Hk.call(this);
  this.Dc = []
};
var Ll = function(a, b) {
  a.Dc.forEach(function(a) {
    try {
      b.call(this, a)
    }catch(d) {
      (0,z.Ph)(d)
    }
  })
};
z.Ml = function(a, b) {
  z.Kl.call(this);
  this.ya = b;
  this.D = new z.Ck(b.getAttribute("data-id") || "", Number(b.getAttribute("data-width")), Number(b.getAttribute("data-height")), b.getAttribute("data-image-style") || z.Nl, b.getAttribute("data-filter"), b.getAttribute("data-url"));
  this.kb = new z.Fk(this.D, b);
  this.Ec = this.Zv(a, b, this.D, this.kb);
  this.Vb = new Il(a, this, b, this.D, this.kb, this.Ec);
  this.Ob(new Ik(b, this.Vb));
  (0,z.P)("variants.can_view_story_covers") && this.Ob(new Jk(a, b, this.D, this.Ec));
  this.kb.reset()
};
var Ol = function(a, b) {
  return'\x3cbutton class\x3d"btn btn-follow no-user-select ' + (a.collection.virtuals.isSubscribed ? "active" : "") + '"' + (b.isAuthenticated ? 'data-action\x3d"toggle-subscribe-collection" data-action-value\x3d"' + (0,z.V)(a.collection.slug) + '" data-collection-id\x3d"' + (0,z.V)(a.collection.id) + '"' : 'data-action\x3d"sign-in-prompt" data-requires-token\x3d"true" data-popover-type\x3d"sign-in" data-redirect\x3d"/_/subscribe/' + (0,z.V)(a.collection.slug) + '" data-popover\x3d"Sign in to follow this collection" data-popover-position\x3d"bottom" data-popover-signin-action\x3d"follow-collection"') + 
  "\x3e" + (a.SF ? '\x3cspan class\x3d"icons icons-follow"\x3e\x3c/span\x3e' : "") + '\x3cspan class\x3d"follow-label" data-suffix\x3d"ing"\x3eFollow\x3c/span\x3e\x3c/button\x3e'
};
z.Pl = function(a, b, c) {
  b = '\x3carticle class\x3d"post-article ' + ("edit" == a.mode ? "grid-breaking " : "") + (0 < a.post.vote ? " has-vote" : "") + '" data-allow-notes\x3d"' + (0,z.V)(a.post.virtuals.allowNotes) + '"\x3e';
  var d = '\x3cdiv class\x3d"metabar' + (!a.post.isPublished || "owner" == a.mode || "edit" == a.mode || "pending" == a.postStatus || "rejected" == a.postStatus || a.isCrossPoster ? " active" : "") + '"\x3e', e = "owner" != a.mode || c.variants.can_edit_post ? "edit" == a.mode || a.post.latestPublishedVersion ? "" : "Draft" : "Editing is currently unavailable.", d = d + (("edit" == a.mode || e ? '\x3csection class\x3d"metabar-status"\x3e\x3cspan class\x3d"metabar-message' + (e ? " active" : "") + 
  '"\x3e' + (0,z.Zf)(e) + "\x3c/span\x3e\x3c/section\x3e" : "") + '\x3cdiv class\x3d"metabar-actions metabar-mode-' + (0,z.V)(a.mode) + " " + ("edit" == a.mode ? "distraction-free-component" : "") + '"\x3e\x3cul class\x3d"metabar-actions-btns"\x3e');
  switch(a.mode) {
    case "owner":
      e = ig({collection:a.contextCollection, post:a.post});
      d += (a.contextCollection ? '\x3cli\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Remove from this collection" data-action\x3d"remove-crosspost"\x3eRemove from Collection\x3c/button\x3e\x3c/li\x3e' : "") + '\x3cli class\x3d"metabar-actions-edit"\x3e' + (c.variants.can_edit_post && c.useragent.supportsEdit ? "owner" == a.mode && a.post.isPublished && !a.post.isLatestVersion ? '\x3ca class\x3d"btn btn-small" data-action\x3d"post-edit" data-tooltip\x3d"This post has unpublished edits" href\x3d"' + 
      (0,z.V)((0,z.Xf)(e)) + '/edit"\x3e\x3cspan class\x3d"icons icons-info"\x3e\x3c/span\x3eEdit\x3c/a\x3e' : '\x3ca class\x3d"btn btn-small" data-action\x3d"post-edit" href\x3d"' + (0,z.V)((0,z.Xf)(e)) + '/edit"\x3eEdit\x3c/a\x3e' : '\x3cbutton class\x3d"btn btn-small" disabled\x3d"disabled" title\x3d"Edit mode not supported"\x3eEdit\x3c/button\x3e') + "\x3c/li\x3e";
      break;
    case "edit":
      d += '\x3cli\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Delete this post" data-action\x3d"delete-post"\x3eDelete\x3c/button\x3e\x3c/li\x3e' + (a.post.latestPublishedVersion ? '\x3cli\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Exit edit mode, discarding changes" data-action\x3d"cancel"\x3eCancel\x3c/button\x3e\x3c/li\x3e\x3cli\x3e\x3cbutton class\x3d"btn btn-primary btn-small btn-publish" title\x3d"Publish" data-action\x3d"publish"\x3ePublish Changes\x3c/button\x3e\x3c/li\x3e' : 
      '\x3cli\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Share Draft" data-action\x3d"share-draft"\x3eShare Draft\x3c/button\x3e\x3c/li\x3e\x3cli\x3e\x3cbutton class\x3d"btn btn-primary btn-small btn-publish" title\x3d"Publish" data-action\x3d"publish"\x3ePublish\x3c/button\x3e\x3c/li\x3e');
      break;
    default:
      d += a.isCrossPoster || a.contextCollection && a.contextCollection.virtuals.canAdminister ? '\x3cli\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Remove from this collection" data-action\x3d"remove-crosspost"\x3eRemove from Collection\x3c/button\x3e\x3c/li\x3e' : ""
  }
  b = b + (d + "\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e") + '\x3csection class\x3d"post-page-wrapper ' + (a.post.content.image.backgroundSize ? " post-page-wrapper-" + (0,z.V)(a.post.content.image.backgroundSize) : "") + '"\x3e\x3cdiv class\x3d"post-page-wrapper-inner"\x3e' + (("cover" != a.post.content.image.backgroundSize ? '\x3cdiv class\x3d"post-author-side"\x3e' + ("edit" != a.mode ? Ql(a, c) : "") + "\x3c/div\x3e" : "") + Rl((0,z.yf)(a, {image:a.post.content.image}), c) + '\x3cheader class\x3d"post-header post-header-top"\x3e' + 
  ("cover" == a.post.content.image.backgroundSize ? '\x3cdiv class\x3d"post-author-side"\x3e' + ("edit" != a.mode ? Ql(a, c) : "") + "\x3c/div\x3e" : "") + ('\x3cul class\x3d"post-meta"\x3e' + (a.contextCollection ? '\x3cli class\x3d"post-meta-item"\x3e\x3cspan class\x3d"post-meta-author"\x3e' + (a.post.displayAuthor ? (0,z.U)(a.post.displayAuthor) : dj({user:a.post.creator, Ma:"post-author"})) + '\x3c/span\x3e\x3cspan class\x3d"divider-word"\x3e in \x3c/span\x3e\x3ca href\x3d"/' + (0,z.V)(a.contextCollection.slug) + 
  '" data-collection-slug\x3d"' + (0,z.V)(a.contextCollection.slug) + '" title\x3d"Go to ' + (0,z.V)(a.contextCollection.name) + '"\x3e' + (0,z.U)(a.contextCollection.name) + "\x3c/a\x3e\x3c/li\x3e" : '\x3cli class\x3d"post-meta-item post-meta-author"\x3e' + (a.post.displayAuthor ? (0,z.U)(a.post.displayAuthor) : dj({user:a.post.creator, Ma:"post-author"})) + "\x3c/li\x3e") + (c.variants.can_see_reading_time && a.post.virtuals.readingTime ? '\x3cli class\x3d"post-meta-item post-meta-reading-time"\x3e' + 
  (c.isAuthenticated && a.post.latestPublishedVersion ? lj({postId:a.post.id, isOnReadingList:a.post.virtuals.isOnReadingList, readingTime:a.post.virtuals.readingTime}, 0, c) : kj(a.post.virtuals)) + (c.variants.can_resume_from_last_read_location && a.post.virtuals.userPostRelation.lastReadParagraphName ? '\x3cspan class\x3d"resume-reading" data-action\x3d"resume" data-action-value\x3d"' + (0,z.V)(a.post.virtuals.userPostRelation.lastReadParagraphName) + '" data-tooltip\x3d"Jump to where you last left off"\x3eResume\x3c/span\x3e' : 
  "") + "\x3c/li\x3e" : "") + "\x3c/ul\x3e") + "\x3c/header\x3e");
  d = '\x3cdiv class\x3d"post-content"\x3e\x3cdiv class\x3d"post-content-inner"\x3e\x3cdiv class\x3d"notes-source"\x3e' + ('\x3cheader class\x3d"post-header post-header-headline"\x3e\x3ch1 itemprop\x3d"name" name\x3d"title" class\x3d"post-title"\x3e' + (0,z.U)(a.post.title) + "\x3c/h1\x3e" + ("edit" == a.mode || a.post.content.subtitle ? '\x3ch2 name\x3d"subtitle" class\x3d"post-field subtitle"\x3e' + (0,z.U)(a.post.content.subtitle) + "\x3c/h2\x3e" : "") + "\x3c/header\x3e") + '\x3cdiv class\x3d"post-field body"' + 
  (a.QF ? 'data-sections\x3d"' + (0,z.V)(a.QF) + '"' : "") + "\x3e" + (0,z.Zf)(a.xx) + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"post-follow-ups post-supplemental"\x3e\x3c/div\x3e';
  if("edit" != a.mode) {
    e = "";
    a.post.latestPublishedVersion && (e += '\x3cbutton class\x3d"btn btn-primary recommend-button no-user-select' + (0 < a.post.vote ? " active" : "") + '"', e = c.isAuthenticated ? e + ('data-action\x3d"' + (0,z.V)(c.useragent.supportsInteract && c.variants.can_vote ? 0 < a.post.vote ? "unvote" : "upvote" : "disabled") + '" data-action-value\x3d"' + (0,z.V)(a.post.id) + '"') : e + ('data-action\x3d"sign-in-prompt" data-redirect\x3d"/_/vote/' + (a.post.homeCollection ? (0,z.V)(a.post.homeCollection.slug) : 
    "p") + "/" + (0,z.V)(a.post.id) + '" data-requires-token\x3d"true" data-popover-type\x3d"sign-in" data-popover\x3d"Sign in to recommend" data-popover-position\x3d"bottom" data-popover-signin-action\x3d"recommend"'), e += 'title\x3d"Recommend this post"\x3e\x3cspan class\x3d"icons icons-solid-check"\x3e\x3c/span\x3e\x3cspan class\x3d"recommend-button-label" data-suffix\x3d"ed"\x3eRecommend\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"vote-widget"\x3e\x3c/div\x3e');
    var e = '\x3cdiv class\x3d"post-footer-actions post-supplemental"\x3e\x3cdiv class\x3d"btn-set"\x3e' + e + '\x3cdiv class\x3d"post-footer-secondary-actions"\x3e' + (a.post.latestPublishedVersion ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"Share this post on Twitter" data-action\x3d"share-on-twitter" data-action-value\x3d"' + (0,z.V)(a.post.id) + '"\x3e\x3ci class\x3d"icons icons-twitter icons-twitter-dark"\x3e\x3c/i\x3e\x3c/a\x3e' + (c.variants.can_share_to_facebook ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"Share this post on Facebook" data-action\x3d"share-on-facebook" data-action-value\x3d"' + 
    (0,z.V)(a.post.id) + '"\x3e\x3ci class\x3d"icons icons-facebook"\x3e\x3c/i\x3e\x3c/a\x3e' : "") + (c.variants.can_share_by_email ? '\x3ca class\x3d"btn btn-chromeless share-by-email" title\x3d"Share by email" data-action\x3d"share-by-email" data-action-value\x3d"' + (0,z.V)(a.post.id) + '" \x3e\x3ci class\x3d"icons icons-email"\x3e\x3c/i\x3e\x3c/a\x3e' : "") : "") + (c.isAuthenticated && c.variants.can_cross_post && a.post.latestPublishedVersion ? '\x3ca class\x3d"btn btn-chromeless" data-action\x3d"crosspost-to-collection" data-action-value\x3d"' + 
    (0,z.V)(a.post.id) + '" title\x3d"Add this post to an additional collection"\x3e\x3ci class\x3d"icons icons-add-to-collection"\x3e\x3c/i\x3e\x3c/a\x3e' : "") + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"post-footer-cards"\x3e', f = '\x3cdiv class\x3d"post-footer-card ' + (a.post.homeCollection ? "" : "post-footer-card-wide") + '"\x3e\x3cdiv class\x3d"post-footer-card-media"\x3e' + (0,z.jj)({user:a.post.creator, Ma:"post-author-image", Ic:"stat-link", Jc:"post-discovery.author.image"}, c) + '\x3c/div\x3e\x3cdiv class\x3d"post-footer-card-text"\x3e\x3ch4 class\x3d"post-footer-card-heading"\x3e' + 
    (a.post.displayAuthor ? "Published by" : "Written by") + '\x3c/h4\x3e\x3ch3 class\x3d"post-footer-card-name"\x3e' + dj({user:a.post.creator, Ic:"stat-link", Jc:"post-discovery.author.name", rel:"author"}) + '\x3c/h3\x3e\x3cp class\x3d"post-footer-card-description"\x3e' + (a.post.creator.virtuals.bioHTML && "null" != a.post.creator.virtuals.bioHTML ? (0,z.Zf)(a.post.creator.virtuals.bioHTML) : "") + '\x3c/p\x3e\x3cdiv class\x3d"post-footer-author-additional"\x3e' + ('\x3cdiv class\x3d"post-footer-card-description-additional post-footer-card-published"\x3e' + 
    (a.post.firstPublishedAt || a.post.latestPublishedVersion ? a.post.latestPublishedAt > a.post.firstPublishedAt && a.post.virtuals.latestPublishedAtEnglish != a.post.virtuals.firstPublishedAtEnglish ? '\x3cspan data-tooltip\x3d"Originally published ' + (0,z.V)(a.post.virtuals.firstPublishedAtEnglish) + '"\x3eUpdated\x3c/span\x3e' : "\x3cspan\x3ePublished\x3c/span\x3e" : "\x3cspan\x3eDraft\x3c/span\x3e") + ' \x3cspan\x3e\x3ctime class\x3d"post-date"\x3e' + (a.post.latestPublishedAt > a.post.firstPublishedAt && 
    a.post.latestPublishedAt ? (0,z.U)(a.post.virtuals.latestPublishedAtEnglish) : a.post.firstPublishedAt ? (0,z.U)(a.post.virtuals.firstPublishedAtEnglish) : a.post.createdAt ? (0,z.U)(a.post.virtuals.createdAtEnglish) : "") + "\x3c/time\x3e\x3c/span\x3e\x3c/div\x3e") + (a.post.displayAuthor ? '\x3cdiv class\x3d"post-footer-card-description-additional"\x3e\x3ch4 class\x3d"post-footer-card-description-context"\x3eWritten by\x3c/h4\x3e\x3cp\x3e' + (0,z.U)(a.post.displayAuthor) + "\x3c/p\x3e\x3c/div\x3e" : 
    ""), h = "";
    if(a.collaborators && a.collaborators.length) {
      for(var h = h + ('\x3cdiv class\x3d"post-footer-card-description-additional post-collaborators"\x3e\x3ch4 class\x3d"post-footer-card-description-context" data-tooltip\x3d"The following people helped ' + (0,z.V)(a.post.creator.name) + ' with this post by adding notes to provide feedback before the post was published."\x3eThanks to:\x3c/h4\x3e'), k = a.collaborators, l = k.length, m = 0;m < l;m++) {
        var r = k[m], h = h + ('\x3cspan class\x3d"post-collaborator-item post-collaborator-' + (0,z.V)(r.state) + '"\x3e'), h = h + ('\x3ca class\x3d"post-collaborator-link' + (0,z.V)("dnf" == r.user.username ? " post-collaborator-throb" : "") + '" href\x3d"/@' + (0,z.V)(r.user.username) + '"\x3e' + (0,z.U)(r.user.name) + "\x3c/a\x3e" + (a.post.creator.userId == c.currentUser.userId ? "hidden-author" == r.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"show-collaborator" data-action-value\x3d"' + 
        (0,z.V)(r.user.userId) + '"\x3e(show)\x3c/button\x3e' : "visible" == r.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"hide-collaborator" data-action-value\x3d"' + (0,z.V)(r.user.userId) + '"\x3e(hide)\x3c/button\x3e' : '\x3cspan class\x3d"post-collaborator-decline"\x3e(declined)\x3c/span\x3e' : r.user.userId == c.currentUser.userId ? "hidden-collab" == r.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"show-collaborator" data-action-value\x3d"' + (0,z.V)(r.user.userId) + 
        '"\x3e(show)\x3c/button\x3e' : "visible" == r.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"hide-collaborator" data-action-value\x3d"' + (0,z.V)(r.user.userId) + '"\x3e(hide)\x3c/button\x3e' : "" : "") + "\x3c/span\x3e")
      }
      h += "\x3c/div\x3e"
    }
    e += f + h + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
    c.variants.enable_subscribe_collection && a.post.homeCollection ? (f = {collection:a.post.homeCollection}, h = c.miroUrl + "/fit/c/160/160/" + f.collection.image.imageId, c = '\x3cdiv class\x3d"post-footer-card"\x3e\x3cdiv class\x3d"post-footer-card-media"\x3e' + ('\x3ca href\x3d"/' + (0,z.V)(f.collection.slug) + '" title\x3d"Go to ' + (0,z.V)(f.collection.name) + '"\x3e\x3cimg class\x3d"post-footer-card-collection" title\x3d"Go to ' + (0,z.V)(f.collection.name) + '" src\x3d"' + (0,z.V)((0,z.Xf)(h)) + 
    '" /\x3e\x3c/a\x3e\x3cdiv class\x3d"follow-wrapper"\x3e' + Ol(f, c) + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"post-footer-card-text"\x3e\x3ch4 class\x3d"post-footer-card-heading"\x3ePublished in\x3c/h4\x3e\x3ch3 class\x3d"post-footer-card-name"\x3e\x3ca href\x3d"/' + (0,z.V)(f.collection.slug) + '" title\x3d"Go to ' + (0,z.V)(f.collection.name) + '"\x3e' + (0,z.U)(f.collection.name) + '\x3c/a\x3e\x3c/h3\x3e\x3cp class\x3d"post-footer-card-description"\x3e' + (0,z.U)(f.collection.description) + 
    "\x3c/p\x3e\x3c/div\x3e\x3c/div\x3e")) : c = "";
    c = e + c + "\x3c/div\x3e\x3c/div\x3e"
  }else {
    c = ""
  }
  return b + (d + c + "\x3c/div\x3e\x3c/div\x3e") + "\x3c/div\x3e\x3c/section\x3e" + ("edit" == a.mode ? '\x3cfooter class\x3d"post-footer-editor"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-new-section"\x3e\x3cspan data-tooltip\x3d"Add new section" class\x3d"icons icons-add-circled"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/footer\x3e' : "edit" != a.mode ? '\x3cfooter class\x3d"post-footer post-supplemental"\x3e\x3c/footer\x3e' : "") + "\x3c/article\x3e"
};
var Rl = function(a, b) {
  var c = "";
  if("edit" == a.mode || a.image.imageId) {
    var d = (0,z.gg)((0,z.yf)(a.image, {An:"t"}), 0, b), c = c + ('\x3cdiv class\x3d"post-field image image-picker-wrap ' + (a.image.backgroundSize ? " background-size-" + (0,z.V)(a.image.backgroundSize) : "") + '" data-url\x3d"' + (0,z.V)((0,z.Xf)(d)) + '" data-id\x3d"' + (a.image.imageId ? (0,z.V)(a.image.imageId) : "") + '" data-image-style\x3d"' + (0,z.V)(a.image.backgroundSize) + '" data-filter\x3d"' + (b.variants.can_view_story_covers ? (0,z.V)(a.image.filter) : "") + '" data-width\x3d"' + 
    (0,z.V)(a.image.originalWidth) + '" data-height\x3d"' + (0,z.V)(a.image.originalHeight) + '"\x3e\x3cdiv class\x3d"post-header-image-wrap" data-load-img\x3d".post-header-image-cover"\x3e');
    "edit" == a.mode ? c += '\x3cdiv class\x3d"cover-edit"\x3e' + Sl() + '\x3cimg class\x3d"picker-target post-header-image-cover" src\x3d"' + (0,z.V)((0,z.Xf)(d)) + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"contain-edit"\x3e\x3cimg class\x3d"picker-target post-header-image-contain" src\x3d"' + (0,z.V)((0,z.Xf)(d)) + '" width\x3d"' + (0,z.V)(b.postColumnWidth) + '" ' + (a.image.imageId ? "" : 'style\x3d"display: none"') + "\x3e\x3c/div\x3e" : (c += Tl(a, b), "cover" == a.image.backgroundSize ? c += Sl() + 
    '\x3cimg class\x3d"post-header-image-cover" src\x3d"' + (0,z.V)((0,z.Xf)(d)) + '"\x3e' : (c += '\x3cimg class\x3d"post-header-image-contain" src\x3d"' + (0,z.V)((0,z.Xf)(d)) + '" alt\x3d"' + (a.post.content ? (0,z.V)(a.post.content.caption) : "") + '"  ', a.image.originalWidth && "contain" == a.image.backgroundSize && (d = b.postColumnWidth * a.image.originalHeight / a.image.originalWidth, c += 'width\x3d"' + (0,z.V)(b.postColumnWidth) + '" height\x3d"' + (0,z.V)(d) + '"'), c += "\x3e"));
    var d = "\x3c/div\x3e" + ("edit" == a.mode || a.post.content && a.post.content.caption ? '\x3cdiv class\x3d"post-field caption" data-action\x3d"dummy"\x3e' + (0,z.U)(a.post.content.caption) + "\x3c/div\x3e" : ""), e;
    if("edit" == a.mode) {
      if(b.variants.full_width_flex_template) {
        e = "";
        if(b.variants.can_view_story_covers) {
          e += '\x3cul class\x3d"image-washes"\x3e';
          for(var f = "grey blue yellow teal purple red ".split(" "), h = f.length, k = 0;k < h;k++) {
            e += '\x3cli class\x3d"image-washes-item"\x3e\x3cbutton class\x3d"btn-image-wash" data-action\x3d"wash" data-action-value\x3d"' + (0,z.V)(f[k]) + '"\x3e\x3c/button\x3e\x3c/li\x3e'
          }
          e += "\x3c/ul\x3e"
        }
        e = '\x3cbutton class\x3d"resize-header-image btn-chromeless distraction-free-component" data-action\x3d"toggle-background-size"\x3e\x3cspan class\x3d"icons icons-enlarge enlarge-btn"\x3e\x3c/span\x3e\x3cspan class\x3d"icons icons-shrink shrink-btn"\x3e\x3c/span\x3e\x3c/button\x3e' + e
      }else {
        e = ""
      }
      e = '\x3cbutton class\x3d"btn-chromeless btn-replace-image distraction-free-component" data-action\x3d"pick-image"\x3e\x3cspan class\x3d"icons icons-replace-image" data-tooltip\x3d"Add optional feature image"\x3e\x3c/span\x3e\x3cspan class\x3d"screen-reader-text"\x3eAdd optional feature image\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"replace-image-message distraction-free-component" data-action\x3d"pick-image"\x3e\x3cspan class\x3d"icons icons-replace-image"\x3e\x3c/span\x3e\x3cspan class\x3d"message"\x3eDrag‘n drop or click to replace image\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"upload-feedback" data-action\x3d"dummy"\x3e\x3cdiv class\x3d"upload-feedback-preview"\x3e\x3c/div\x3e\x3cdiv class\x3d"upload-feedback-inner"\x3e\x3cdiv class\x3d"progress-bar-wrap"\x3e\x3cdiv class\x3d"progress-bar"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv data-action\x3d"cancel-upload" class\x3d"cancel-button no-user-select"\x3e\x26#215;\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cbutton class\x3d"remove-header-image btn-chromeless icons icons-remove distraction-free-component" data-action\x3d"remove-image"\x3e\x3c/button\x3e' + 
      e
    }else {
      e = ""
    }
    c += d + e + "\x3c/div\x3e"
  }
  return c
};
var Ul = function(a, b, c) {
  b = "" + ('\x3cul class\x3d"upvoters ' + (a.count ? "fade" : "") + '"\x3e');
  for(var d = Math.min(a.count, 3), e = 0;e < d;e++) {
    b += '\x3cli class\x3d"upvoters-item"\x3e' + (0,z.gj)({user:a.users[e], Ma:"avatar-chromeless avatar-icon"}, c) + "\x3c/li\x3e"
  }
  return b + "\x3c/ul\x3e"
};
var Vl = function(a, b, c) {
  b = '\x3cdiv class\x3d"recommended-posts post-footer-section"\x3e\x3cdiv class\x3d"post-content"\x3e\x3ch4 class\x3d"title"\x3eRecommended Posts on ' + (0,z.U)(c.productName) + "\x3c/h4\x3e\x3cul\x3e";
  a = a.recommendations;
  c = a.length;
  for(var d = 0;d < c;d++) {
    var e = a[d], f = ig({post:e.post, collection:e.post.homeCollection});
    b += '\x3cli class\x3d"recommended-post"\x3e\x3cspan class\x3d"recommended-post-title"\x3e\x3ca href\x3d"' + (0,z.V)((0,z.Xf)(f)) + '" data-action\x3d"stat-link" title\x3d"' + (0,z.V)(e.post.title) + '" data-action-value\x3d"post-discovery.recommended.title.' + (0,z.V)(d) + "." + (0,z.V)(e.source) + '"\x3e' + (0,z.U)(e.post.title) + "\x3c/a\x3e\x3c/span\x3e" + dj({user:e.post.creator, Ma:"recommended-post-author", Ic:"stat-link", Jc:"post-discovery.recommended.author." + (0,z.U)(d) + "." + (0,z.U)(e.source)}) + 
    "\x3c/li\x3e"
  }
  return b + "\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e"
};
var Tl = function(a, b) {
  return'\x3cdiv class\x3d"post-preview' + (a.image && a.image.imageId ? " post-preview-with-image" : "") + '"\x3e\x3cdiv class\x3d"post-preview-content post-content"\x3e\x3cdiv class\x3d"post-preview-description"\x3eRead next\x3c/div\x3e\x3ch3 class\x3d"post-preview-title"\x3e' + (0,z.U)(a.post.title) + '\x3c/h3\x3e\x3ch4 class\x3d"post-preview-subtitle"\x3e' + (0,z.U)(a.post.virtuals.draftSnippet) + "\x3c/h4\x3e" + mj((0,z.yf)(a, {nd:!0, FE:!0}), b) + "\x3c/div\x3e\x3c/div\x3e"
};
var Wl = function(a) {
  var b = (0,z.yf)(a, {index:0}), c = "", d = b.recommendations[b.index].post;
  ig({post:d});
  c += '\x3cdiv class\x3d"read-next-primary"\x3e\x3cdiv class\x3d"read-next-header"\x3e' + Xl((0,z.yf)(b, {content:"Read Next", Ma:"read-next-prompt"})) + '\x3c/div\x3e\x3cdiv class\x3d"post-content"\x3e\x3ch1 class\x3d"read-next-title"\x3e' + Xl((0,z.yf)(b, {Ma:"read-next-title-link"})) + '\x3c/h1\x3e\x3cdiv class\x3d"read-next-meta"\x3e' + Yl(b) + "\x3c/div\x3e" + (d.virtuals.snippet ? "\x3cdiv class \x3d 'read-next-snippet'\x3e" + Xl((0,z.yf)(b, {content:d.virtuals.snippet, Ma:"read-next-snippet-content"})) + 
  Xl((0,z.yf)(b, {content:"Continue reading", Ma:"read-next-snippet-prompt"})) + "\x3c/div\x3e" : "") + "\x3c/div\x3e\x3c/div\x3e";
  return'\x3cdiv class\x3d"read-next"\x3e' + c + (3 <= a.recommendations.length ? '\x3cdiv class\x3d"read-next-secondary-posts"\x3e\x3cdiv class\x3d"post-content"\x3e' + Zl((0,z.yf)(a, {index:1})) + Zl((0,z.yf)(a, {index:2})) + "\x3c/div\x3e\x3c/div\x3e" : "") + "\x3c/div\x3e"
};
var Zl = function(a) {
  var b = "";
  ig({post:a.recommendations[a.index].post});
  return b += '\x3cdiv class\x3d"read-next-secondary"\x3e' + Xl((0,z.yf)(a, {Ma:"read-next-secondary-title"})) + '\x3cdiv class\x3d"read-next-secondary-source"\x3e' + Yl(a) + "\x3c/div\x3e\x3c/div\x3e"
};
var Yl = function(a) {
  var b = a.recommendations[a.index].post;
  return a = "" + (dj({user:b.creator, Ma:"read-next-meta-link", Ic:"stat-link", Jc:$l((0,z.yf)(a, {target:"profile"}))}) + (b.homeCollection ? " in " + fj({collection:b.homeCollection, Ma:"read-next-meta-link", Ic:"stat-link", Jc:$l((0,z.yf)(a, {target:"collection"}))}) : ""))
};
var Xl = function(a) {
  var b = a.recommendations[a.index].post, c = b.title ? b.title : "Untitled", d = "", b = '\x3ca href\x3d"' + ig({post:b}) + '" title\x3d"' + (0,z.V)(c) + '"' + (a.Ma ? ' class\x3d"' + (0,z.V)(a.Ma) + '"' : "") + ' data-id\x3d"' + (0,z.V)(b.id) + '" ', e;
  e = (0,z.yf)(a, {target:"post"});
  e = 'data-action\x3d"stat-link" data-action-value\x3d"' + ("post-discovery.recommended." + (0,z.V)(e.target) + "." + (0,z.V)(e.index) + "." + (0,z.V)(e.recommendations[e.index].source)) + '"';
  return a = d + (b + e + ' data-source\x3d"related" \x3e' + (a.content ? (0,z.U)(a.content) : (0,z.U)(c)) + "\x3c/a\x3e")
};
var $l = function(a) {
  return"post-discovery.recommended." + (0,z.U)(a.target) + "." + (0,z.U)(a.index) + "." + (0,z.U)(a.recommendations[a.index].source)
};
var Ql = function(a, b) {
  return'\x3cdiv class\x3d"post-author-card"\x3e' + (0,z.jj)({user:a.post.creator, Ma:"post-author-image", Ic:"stat-link", Jc:"post-discovery.author.image"}, b) + '\x3cdiv class\x3d"post-author-info"\x3e' + dj({user:a.post.creator, Ma:"post-author-name", Ic:"stat-link", Jc:"post-discovery.author.name", rel:"author"}) + "\x3cp\x3e" + (a.post.creator.virtuals.bioHTML && "null" != a.post.creator.virtuals.bioHTML ? (0,z.Zf)(a.post.creator.virtuals.bioHTML) : "") + "\x3cp\x3e\x3c/div\x3e\x3c/div\x3e"
};
var Sl = function() {
  return'\x3cimg class\x3d"post-header-image-aspect-ratio" src\x3d"data:image/gif;base64,R0lGODlhMgAVAPAAAP///wAAACH5BAEAAAAALAAAAAAyABUAAAIfhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8dTAQA7"\x3e'
};
var am = function(a) {
  return'\x3cdiv class\x3d"post-to-post" data-action\x3d"next-post"\x3e\x3cspan class\x3d"icons icons-read-next post-to-post-icon"\x3e\x3c/span\x3e\x3cdiv class\x3d"post-to-post-preview"\x3e\x3cdiv class\x3d"post-content"\x3e\x3cdiv class\x3d"post-to-post-reason"\x3eRead next\x3c/div\x3e\x3cdiv class\x3d"post-to-post-title"\x3e' + (0,z.U)(a.post.title) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
};
var bm = function(a, b, c) {
  return'\x3cdiv class\x3d"footer-post-preview post-preview-enabled" data-action\x3d"next-post"\x3e' + (a.TF ? Rl((0,z.yf)(a, {image:a.post.virtuals.previewImage}), c) : Tl(a, c)) + "\x3c/div\x3e"
};
var cm = function(a, b, c, d) {
  vk.call(this, a, c, d);
  this.Wf = b;
  this.Yn = dm;
  this.source = "read-next"
};
var em = function(a) {
  a = a.Qe();
  if(!a) {
    return!1
  }
  a = a.get("virtuals.previewImage");
  return a.imageId && (a.backgroundSize != z.Nl || 400 <= a.originalHeight)
};
var fm = function(a, b, c) {
  var d = new z.Pe(b, {name:"fade-back-out", duration:400});
  (0,z.y)(d, function() {
    b.style.visibility = "hidden";
    b.style.display = "none";
    (0,z.Ie)(b);
    (0,z.gm)(c, ["post-preview-enabled", "transition-from-post-footer"]);
    (0,z.Zd)(c, "transform", "")
  });
  a = a.bf.getBoundingClientRect();
  c.style.display = "block";
  c.style.visibility = "visible";
  (0,z.Zd)(c, "transform", "translateY(" + a.top + "px)");
  (0,z.hm)(c, ["post-preview-enabled", "pre-transition-from-post-footer"]);
  (0,z.Ie)(c);
  (0,z.gd)(c, "pre-transition-from-post-footer", "transition-from-post-footer");
  (0,z.Zd)(c, "transform", "translateY(0)");
  d.start();
  return d
};
var im = function(a, b) {
  var c = new z.Pe(a, {name:"fade-back-out", duration:500}), d = new z.Pe(b, {name:"slide-up-in", duration:500});
  (0,z.y)(c, function() {
    a.style.visibility = "hidden";
    a.style.display = "none";
    (0,z.Ie)(a)
  });
  b.style.display = "block";
  b.style.visibility = "visible";
  (0,z.Ie)(b);
  d.start();
  c.start();
  return d
};
var jm = function(a, b, c, d) {
  vk.call(this, a, c, d);
  this.Wf = b;
  this.Yn = km;
  this.source = "skip-post"
};
z.lm = function() {
  M.call(this)
};
z.mm = function() {
  M.call(this)
};
z.nm = function() {
  M.call(this)
};
z.om = function() {
  M.call(this)
};
z.pm = function() {
  M.call(this)
};
var qm = function() {
  M.call(this)
};
var rm = function() {
  M.call(this)
};
var sm = function() {
  M.call(this)
};
z.tm = function() {
  M.call(this)
};
z.um = function() {
  M.call(this)
};
z.vm = function() {
  M.call(this)
};
z.wm = function() {
  M.call(this)
};
var xm = function(a) {
  this.Ka = a
};
var ym = function(a, b, c) {
  z.zm[a] = b;
  z.Am[a] = c
};
var Bm = function(a) {
  return this.Ka.l() == a.Ka.l() ? a.Ka : null
};
var Cm = function(a) {
  return this.Ka.l() == a.Ka.l() && this.Ka.ld() == a.Ka.ld() ? a.Ka : null
};
z.Dm = function(a) {
  for(var b = [], c = 0;c < a.length;c++) {
    var d = a[c];
    b.length || (0,z.Jj)(d, 0);
    var e = (0,z.Ta)(b);
    (!e || (0,z.Ij)(d) > (0,z.Ij)(e)) && b.push(d)
  }
  b.length || b.push((0,z.Jj)(new z.Hj, 0));
  return b
};
z.Em = function(a, b, c) {
  var d = (0,z.Ij)(a[b]);
  return b + 1 >= a.length ? c - d : (0,z.Ij)(a[b + 1]) - d
};
z.Fm = function(a) {
  this.Ka = a
};
z.Gm = function(a) {
  this.Ka = a
};
z.kn = function(a) {
  this.Ka = a
};
z.ln = function(a) {
  this.Ka = a
};
z.mn = function(a) {
  this.Ka = a
};
z.nn = function(a) {
  this.Ka = a
};
z.on = function(a) {
  this.Ka = a
};
z.pn = function(a) {
  this.Ka = a
};
z.qn = function(a) {
  this.Ka = a
};
z.rn = function(a) {
  this.Ka = a
};
z.sn = function(a) {
  if(!a.content) {
    throw Error("No body available for post " + a.postId);
  }
  return a.content.bodyModel ? z.Dk.Wc(z.vj, a.content.bodyModel) : null
};
z.tn = function(a, b, c) {
  this.name = a || "";
  this.type = b;
  this.text = c;
  this.hasDropCap = !1;
  this.fb = []
};
z.un = function(a) {
  var b = null, b = 4 == a.l() ? new z.vn(a.getName(), a.Lb(), (0,z.N)(a, "dataId"), (0,z.N)(a, "layout"), a.getMetadata()) : 11 == a.l() ? new wn(a.getName(), a.Lb(), (0,z.N)(a, "iframe"), (0,z.N)(a, "layout")) : new z.tn(a.getName(), a.l(), a.Lb());
  b.hasDropCap = (0,z.N)(a, "hasDropCap");
  if(a = (0,z.N)(a, "markups")) {
    for(var c = 0;c < a.length;c++) {
      (0,z.xn)(b, a[c])
    }
  }
  return b
};
z.yn = function(a, b) {
  a.fb = (0,z.zn)(a.fb, function(a) {
    return a.l() != b
  })
};
z.An = function(a, b) {
  for(var c = 0;c < a.fb.length;c++) {
    var d = a.fb[c];
    3 == d.l() && b(d)
  }
};
z.xn = function(a, b) {
  for(var c = a.fb, d = 0;d < c.length;d++) {
    var e = c[d], f;
    if(e.l() != b.l()) {
      f = null
    }else {
      if(e.Wb(b)) {
        f = e
      }else {
        if(3 == e.l()) {
          f = e;
          var h = b, k = f.mg() == h.mg() && f.Od() == h.Od() && (0,z.N)(f, "rel") == (0,z.N)(h, "rel");
          f = (0,z.Bn)(f, (0,z.Fj)(h), k) || (0,z.Bn)(f, k ? (0,z.Gj)(h) : (0,z.Gj)(h) - 1, k) || (0,z.Bn)(h, (0,z.Fj)(f), k) ? k ? (0,z.Cn)(Math.min((0,z.Fj)(f), (0,z.Fj)(h)), Math.max((0,z.Gj)(f), (0,z.Gj)(h)), f.mg(), f.Od(), (0,z.N)(f, "rel")) : h : null
        }else {
          4 == e.l() ? e.getName() == b.getName() ? (f = Math.min((0,z.Fj)(e), (0,z.Fj)(b)), h = Math.max((0,z.Gj)(e), (0,z.Gj)(b)), k = e.getName(), f = (0,z.Dn)(4, f, h).Ud(k)) : f = null : f = (0,z.Bn)(e, (0,z.Fj)(b), !0) || (0,z.Bn)(e, (0,z.Gj)(b), !0) || (0,z.Bn)(b, (0,z.Fj)(e), !0) ? (0,z.Dn)(e.l(), Math.min((0,z.Fj)(e), (0,z.Fj)(b)), Math.max((0,z.Gj)(e), (0,z.Gj)(b))) : null
        }
      }
    }
    if(f) {
      if(f == e || f.Wb(e)) {
        return!1
      }
      ab.splice.call(c, d, 1);
      b = f;
      d = -1
    }
  }
  var c = a.fb, d = b, l, e = En || z.kb;
  f = 0;
  for(h = c.length;f < h;) {
    var k = f + h >> 1, m;
    m = e(d, c[k]);
    0 < m ? f = k + 1 : (h = k, l = !m)
  }
  l = l ? f : ~f;
  0 > l && hb(c, -(l + 1), 0, d);
  return!0
};
z.Fn = function(a, b, c) {
  b = Math.min(b, a.text.length);
  c = Math.min(c, a.text.length);
  var d = c - b;
  a.text = a.text.substring(0, b) + a.text.substring(c);
  c = a.fb;
  for(var e = 0;e < c.length;e++) {
    var f = c[e];
    (0,z.Fj)(f) >= b && f.setStart(Math.max((0,z.Fj)(f) - d, b));
    (0,z.Gj)(f) >= b && f.setEnd(Math.max((0,z.Gj)(f) - d, b))
  }
  (0,z.Gn)(a)
};
z.Gn = function(a) {
  a.fb = (0,z.zn)(a.fb, function(a) {
    return(0,z.Gj)(a) > (0,z.Fj)(a)
  })
};
var Hn = function(a) {
  var b = {0:!0};
  b[a.text.length] = !0;
  a = a.fb;
  for(var c = 0;c < a.length;c++) {
    var d = a[c];
    b[(0,z.Fj)(d)] = !0;
    b[(0,z.Gj)(d)] = !0
  }
  b = ob(b);
  b = (0,z.Te)(b, Number);
  (0,z.jb)(b);
  return b
};
var In = function(a, b) {
  for(var c = a.fb, d = [], e = 0;e < b.length;e++) {
    var f = b[e], h = [];
    d.push(h);
    for(var k = 0;k < c.length;k++) {
      var l = c[k];
      (0,z.Bn)(l, f, !1) && h.push(l)
    }
  }
  return d
};
z.vn = function(a, b, c, d, e) {
  z.tn.call(this, a, 4, b);
  this.dataId = c;
  this.layout = d;
  this.metadata = e
};
var wn = function(a, b, c, d) {
  z.tn.call(this, a, 11, b);
  this.layout = d;
  this.metadata = c
};
z.Dn = function(a, b, c) {
  return(new z.Ej).jc(a).setStart(b).setEnd(c)
};
z.Bn = function(a, b, c) {
  return b >= (0,z.Fj)(a) && (c ? b <= (0,z.Gj)(a) : b < (0,z.Gj)(a))
};
var En = function(a, b) {
  var c = Jn[a.l()] - Jn[b.l()];
  if(0 !== c) {
    return c
  }
  c = (0,z.Fj)(a) - (0,z.Fj)(b);
  if(0 !== c) {
    return c
  }
  c = (0,z.Gj)(a) - (0,z.Gj)(b);
  return 0 !== c ? c : (0,z.kb)(JSON.stringify(z.Dk.jd(a)), JSON.stringify(z.Dk.jd(b)))
};
z.Cn = function(a, b, c, d, e) {
  a = (0,z.Dn)(3, a, b).ts(c).Kh(d);
  return(0,z.O)(a, "rel", e)
};
z.Kn = function(a) {
  for(var b = 0;b < a.length;b++) {
    (0,z.yn)(a[b], 4), (0,z.yn)(a[b], 5)
  }
};
var Ln = function(a, b) {
  for(var c = 0;c < a.length;c++) {
    (0,z.An)(a[c], function(a) {
      a.mg() && a.ts((0,z.lk)(a.mg(), b))
    })
  }
};
z.Mn = function(a, b, c, d) {
  return b ? (0,z.Nn)(b, c, {Jk:!0, isPublished:a.isPublished, media:a.media, sections:d}) : ""
};
z.Nn = function(a, b, c) {
  for(var d = c.isPublished, e = c.media, f = (0,z.wj)(a) || [], h = [], k = 0;k < f.length;k++) {
    var l = h[k] = (0,z.un)(f[k]), m = l.dataId;
    m && e && e[m] && e[m].metadata && (l.metadata = z.Dk.Wc(yj, e[m].metadata))
  }
  (0,z.Kn)(h);
  Ln(h, !d);
  a = (0,z.Dm)((0,z.N)(a, "sections") || []);
  d = [];
  for(e = 0;e < a.length;e++) {
    d.push(On(e, h, a, b, c))
  }
  return d.join("")
};
var On = function(a, b, c, d, e) {
  var f = c[a];
  a = (0,z.Ij)(c[a]) + (0,z.Em)(c, a, b.length);
  if((0,z.Ij)(f) >= a) {
    return""
  }
  c = [];
  e.sections && c.push((0,z.Pn)(f, d));
  for(var h = null, f = (0,z.Ij)(f);f < a;f++) {
    var k = b[f], l = 10 == k.type ? "ol" : 9 == k.type ? "ul" : null;
    l != h && (h && c.push("\x3c/", h, "\x3e"), l && c.push("\x3c", l, "\x3e"));
    h = l;
    c.push((0,z.Qn)(k, !0) + (0,z.Rn)(k, d, e) + (0,z.Sn)(k, !0))
  }
  h && c.push("\x3c/", h, "\x3e");
  e.sections && c.push("\x3c/div\x3e\x3c/section\x3e");
  return c.join("")
};
z.Rn = function(a, b, c) {
  var d = c.Jk, e = Hn(a), f = In(a, e), h = 4 == a.type, k = 11 == a.type, l = "";
  if(h) {
    if(l = Tn(a, b) + Un(a, d), d && (0,z.Da)(a.text)) {
      return l
    }
  }else {
    if(k && (l = Vn(a, b) + Un(a, d), d && (0,z.Da)(a.text))) {
      return l
    }
  }
  b = a.text;
  for(var m = [], r = 0;r < e.length;r++) {
    for(var C = 0 === r, H = r == e.length - 2, Oa = e[r], ea = f[r], fd = 0;fd < ea.length;fd++) {
      var Fg = ea[fd];
      if(m[fd] != Fg) {
        for(;m.length > fd;) {
          l += Wn(m.pop())
        }
        var Ji = Xn(Fg, a, c);
        Ji && (l += Ji, m.push(Fg))
      }
    }
    for(;m.length > fd;) {
      l += Wn(m.pop())
    }
    ea = b.substring(Oa, e[r + 1] || b.length);
    a.hasDropCap && ea && 0 === Oa && (l += d ? '\x3cspan class\x3d"drop-cap"\x3e' + (0,z.Fa)(ea[0]) + "\x3c/span\x3e" : '\x3cspan class\x3d"drop-cap drop-cap-editable"\x3e\x3cbr\x3e\x3c/span\x3e\x3cspan class\x3d"drop-cap" contenteditable\x3d"false"\x3e' + (0,z.Fa)(ea[0]) + "\x3c/span\x3e", ea = ea.slice(1));
    var Gg = ea.split("\n"), l = l + (0,z.Te)(Gg, function(b, c) {
      var d = (0,z.Fa)(b);
      8 != a.type && (" " != d.charAt(0) || !C && 0 === c || (d = " " + d.substring(1)), " " != d.charAt(d.length - 1) || !H && c == Gg.length - 1 || (d = d.substring(0, d.length - 1) + " "));
      return d = d.replace(/ — /g, " — ")
    }).join("\x3cbr\x3e"), Oa = H && 1 < Gg.length && "" === (0,z.Ta)(Gg), ea = !b;
    5 != a.type && (Oa || ea) && (l += "\x3cbr\x3e")
  }
  if(h || k) {
    l += "\x3c/figcaption\x3e"
  }
  return l
};
var Tn = function(a, b) {
  var c = a.metadata, d = a.layout, e = Yn(b, c && c.originalWidth || 0, c && c.originalHeight || 0, a), d = ok(d), d = qf(d || 1200, xf, 200, !0), d = c && c.id && b.miroUrl + "/max/" + d + "/" + c.id, c = c ? z.Dk.jd(c) : {}, f = a.dataId;
  return"\x3cimg" + ((c.originalWidth ? ' data-width\x3d"' + (0,z.V)(c.originalWidth) + '"' : "") + (c.originalHeight ? ' data-height\x3d"' + (0,z.V)(c.originalHeight) + '"' : "") + (c.filter ? ' data-filter\x3d"' + (0,z.V)(c.filter) + '"' : "") + (e.width && e.height ? ' width\x3d"' + (0,z.V)(e.width) + '" height\x3d"' + (0,z.V)(e.height) + '"' : "") + (c.originalWidth > e.width ? ' data-action\x3d"zoom" data-action-value\x3d"' + (0,z.V)(c.id) + '"' : "")) + (f ? ' data-id\x3d"' + (0,z.V)(f) + '"' : 
  "") + (d ? ' src\x3d"' + (0,z.V)((0,z.Xf)(d)) + '"' : "") + "\x3e"
};
var Un = function(a, b) {
  return b && (0,z.Da)(a.text) ? "" : '\x3cfigcaption class\x3d"image-caption"' + (4 == a.type ? ' data-image-id\x3d"' + (0,z.Fa)(a.dataId) + '"' : "") + "\x3e"
};
var Vn = function(a, b) {
  var c = a.metadata;
  if(!c || !c.zw()) {
    return""
  }
  var d = (0,z.N)(c, "iframeWidth") || Zn.width, e = (0,z.N)(c, "iframeHeight") || Zn.height, d = Yn(b, d, e, a), c = z.Dk.jd(c);
  return"\x3c" + eg() + (c.iframeWidth ? ' data-width\x3d"' + (0,z.V)(c.iframeWidth) + '"' : "") + (c.iframeHeight ? ' data-height\x3d"' + (0,z.V)(c.iframeHeight) + '"' : "") + (d.width && d.height ? ' width\x3d"' + (0,z.V)(d.width) + '" height\x3d"' + (0,z.V)(d.height) + '"' : "") + ' src\x3d"/media/' + (0,z.V)(c.mediaResourceId) + "?maxWidth\x3d" + Mf(d.width) + '" data-media-id\x3d"' + (0,z.V)(c.mediaResourceId) + '" frameborder\x3d"0"\x3e\x3c/' + eg() + "\x3e"
};
var Yn = function(a, b, c, d) {
  var e = ok(d.layout);
  11 === d.type && Number(a.deviceWidth) && (e = Math.min(e, Number(a.deviceWidth) - 65), e = qf(e, $n, 100, !1));
  b = new z.lc(b, c);
  return b.width > e ? new z.lc(e, Math.round(e * b.height / b.width)) : b
};
var ao = function(a) {
  var b = a.contentWindow || (0,z.wc)(a.contentDocument || a.contentWindow.document);
  if(b && b.document && b.document.body && "about:blank" !== b.location.toString()) {
    a = a.style;
    var c = (0,z.mc)(b).Mb(), b = c.document, d = 0;
    if(b) {
      var c = (0,z.uc)(c).height, d = b.body, e = b.documentElement;
      if((0,z.vc)(b) && e.scrollHeight) {
        d = e.scrollHeight != c ? e.scrollHeight : e.offsetHeight
      }else {
        var b = e.scrollHeight, f = e.offsetHeight;
        e.clientHeight != f && (b = d.scrollHeight, f = d.offsetHeight);
        d = b > c ? b > f ? b : f : b < f ? b : f
      }
    }
    a.height = d + "px"
  }
};
z.bo = function(a) {
  if(2 == a) {
    return"image-inset-left"
  }
  if(1 == a) {
    return""
  }
  if(4 == a) {
    return"image-outset-left"
  }
  if(3 == a) {
    return"image-outset-center"
  }
  throw Error("unknown layout " + a);
};
z.co = function(a) {
  a = a.match(/\S+/g) || [];
  for(var b in eo) {
    var c = eo[b], d = (0,z.bo)(c);
    if(d && (0,z.Xa)(a, d)) {
      return c
    }
  }
  return 1
};
z.Qn = function(a, b) {
  var c = a.type, d = "";
  a.name && (d += ' name\x3d"' + (0,z.Fa)(a.name) + '"');
  a.hasDropCap && (d += " data-has-drop-cap");
  if(5 == c) {
    return"\x3chr" + d + "\x3e"
  }
  if(4 == c || 11 == c) {
    return c = a.layout && (0,z.bo)(a.layout), "\x3cfigure" + d + (c ? ' class\x3d"' + c + '"' : "") + "\x3e"
  }
  if(7 == c) {
    return'\x3cblockquote class\x3d"pullquote"' + d + "\x3e"
  }
  var e = "", f = "";
  if(9 == c) {
    e = "li", b || (f = "\x3cul\x3e")
  }else {
    if(10 == c) {
      e = "li", b || (f = "\x3col\x3e")
    }else {
      if(6 == c) {
        e = "blockquote"
      }else {
        if(10 == c) {
          e = "li"
        }else {
          if(12 == c) {
            e = "h1"
          }else {
            if(2 == c) {
              e = "h2"
            }else {
              if(3 == c) {
                e = "h3"
              }else {
                if(1 == c) {
                  e = "p"
                }else {
                  if(8 == c) {
                    e = "pre"
                  }else {
                    throw Error("unknown type " + c);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return f + "\x3c" + e + d + "\x3e"
};
z.Sn = function(a, b) {
  var c = a.type;
  if(5 == c) {
    return""
  }
  if(4 == c || 11 == c) {
    return"\x3c/figure\x3e"
  }
  if(6 == c || 7 == c) {
    return"\x3c/blockquote\x3e"
  }
  if(9 == c) {
    return"\x3c/li\x3e" + (b ? "" : "\x3c/ul\x3e")
  }
  if(10 == c) {
    return"\x3c/li\x3e" + (b ? "" : "\x3c/ol\x3e")
  }
  if(12 == c) {
    return"\x3c/h1\x3e"
  }
  if(2 == c) {
    return"\x3c/h2\x3e"
  }
  if(3 == c) {
    return"\x3c/h3\x3e"
  }
  if(1 == c) {
    return"\x3c/p\x3e"
  }
  if(8 == c) {
    return"\x3c/pre\x3e"
  }
  throw Error("unknown type " + c);
};
z.Pn = function(a, b) {
  var c = {name:a.getName(), textLayout:fo[(0,z.N)(a, "textLayout")], imageLayout:go[(0,z.N)(a, "imageLayout")], ex:2 === (0,z.N)(a, "textLayout") ? 0.9 : 0}, d = "\x3csection" + (c.name ? ' name\x3d"' + (0,z.V)(c.name) + '"' : "") + (c.textLayout || c.imageLayout || c.Ki ? ' class\x3d"' + (c.Ki ? "active-section" : "") + (c.textLayout ? " " + (0,z.V)(c.textLayout) : "") + (c.imageLayout ? " " + (0,z.V)(c.imageLayout) : "") + '"' : "");
  c.ex && b.pr ? ((c = Math.round(b.pr * c.ex)) && c.nf === ho ? c = c.content : null == c ? c = "" : (c = String(c), c = io.test(c) ? c : "zSoyz"), c = ' style\x3d"min-height: ' + (0,z.V)(c) + 'px;"') : c = "";
  return d + c + '\x3e\x3cdiv class\x3d"section-inner"\x3e'
};
var Xn = function(a, b, c) {
  var d = a.l();
  if(1 == d) {
    return"\x3cstrong\x3e"
  }
  if(2 == d) {
    return"\x3cem\x3e"
  }
  if(4 == d) {
    return'\x3cspan class\x3d"notes-highlight" ' + (a.getName() ? ' name\x3d"' + (0,z.Fa)(a.getName()) + '"' : "") + "\x3e"
  }
  if(5 == d) {
    return'\x3cspan class\x3d"warning"\x3e'
  }
  if(3 == d) {
    var d = a.mg(), e;
    try {
      e = "#zSoyz" !== Yf(d)
    }catch(f) {
      e = !1
    }
    if(e) {
      e = a.Od();
      var h = (0,z.N)(a, "rel"), k = mk(d);
      a = !c.Jk && d && d != b.text.substring((0,z.Fj)(a), (0,z.Gj)(a));
      a = "\x3ca" + (k ? "" : ' target\x3d"_blank"') + ' href\x3d"' + (0,z.V)((0,z.Xf)(d)) + '"' + (e ? ' title\x3d"' + (0,z.V)(e) + '"' : "") + (h ? ' rel\x3d"' + (0,z.V)(h) + '"' : "") + (a ? ' data-tooltip\x3d"' + (0,z.V)(d) + '" data-tooltip-position\x3d"bottom" data-tooltip-type\x3d"link"' : "") + "\x3e"
    }else {
      a = ""
    }
    return a
  }
  throw Error("unknown type " + d);
};
var Wn = function(a) {
  a = a.l();
  if(1 == a) {
    return"\x3c/strong\x3e"
  }
  if(2 == a) {
    return"\x3c/em\x3e"
  }
  if(3 == a) {
    return"\x3c/a\x3e"
  }
  if(4 == a || 5 == a) {
    return"\x3c/span\x3e"
  }
  throw Error("unknown type " + a);
};
z.jo = function(a) {
  var b = a.tagName;
  if("BLOCKQUOTE" == b) {
    return(0,z.ed)(a, "pullquote") ? 7 : 6
  }
  if("LI" == b) {
    var c = a.parentNode && a.parentNode.tagName;
    if("UL" == c) {
      return 9
    }
    if("OL" == c) {
      return 10
    }
  }
  if("H1" == b) {
    return 12
  }
  if("H2" == b) {
    return 2
  }
  if("H3" == b) {
    return 3
  }
  if("PRE" == b) {
    return 8
  }
  if("HR" == b) {
    return 5
  }
  if("P" == b || "DIV" == b || "FIGURE" == b) {
    return 0 !== a.getElementsByTagName("IMG").length ? 4 : 0 !== a.getElementsByTagName("iframe").length ? 11 : 1
  }
  throw Error("invalid node " + b);
};
var ko = function(a) {
  var b = a.tagName;
  if("STRONG" == b || "B" == b) {
    return 1
  }
  if("EM" == b || "I" == b) {
    return 2
  }
  if("A" == b) {
    return 3
  }
  if("SPAN" == b) {
    if(a.getAttribute("name") && (0,z.ed)(a, "notes-highlight")) {
      return 4
    }
    if((0,z.ed)(a, "warning")) {
      return 5
    }
  }
  return null
};
z.lo = function(a) {
  return a.hasAttribute("data-has-drop-cap")
};
z.mo = function(a) {
  for(var b = [], c = 0, d = 0;d < a.length;d++) {
    var e = a[d];
    b.push(no(e, c));
    c += (0,z.Le)(e).length
  }
  return b
};
var no = function(a, b) {
  for(var c = (0,z.Jj)((new z.Hj).Ud(a.getAttribute("name") || ""), b), d = oo(a), e = 0;e < d.length;e++) {
    var f = po[d[e]];
    f && (0,z.Kj)(c, Number(f));
    (f = qo[d[e]]) && (0,z.Lj)(c, Number(f))
  }
  return c
};
z.ro = function(a, b) {
  var c = (0,z.jo)(a), d = a.getAttribute("name");
  if(4 == c) {
    var e = a.getElementsByTagName("IMG")[0], f = (0,z.co)(a.className), c = a.querySelector("figcaption"), h = pk(String((0,z.P)("miroUrl")), e.src || "") || pk(String((0,z.P)("miroUrl")), e.getAttribute("data-delayed-src") || ""), h = (0,z.Aj)((0,z.zj)((new yj).Cf(h), Number(e.getAttribute("data-width") || 0)), Number(e.getAttribute("data-height") || 0)), k = e.getAttribute("data-filter");
    k && h.Bf(k);
    d = new z.vn(d, "", e.getAttribute("data-id"), f, h);
    return c ? so(d, c) : d
  }
  if(11 == c) {
    return f = a.getElementsByTagName("iframe")[0], e = (0,z.co)(a.className), c = a.querySelector("figcaption"), f = (0,z.Dj)((0,z.Cj)((new z.Bj).to(f.getAttribute("data-media-id") || ""), Number(f.getAttribute("data-width") || f.width) || 0), Number(f.getAttribute("data-height") || f.height) || 0), d = new wn(d, "", f, e), c ? so(d, c) : d
  }
  d = new z.tn(d, c, "");
  return 5 == c ? d : so(d, a, b)
};
var to = function(a, b) {
  this.vc = a;
  this.Gv = b;
  this.zv = [];
  this.nm = [];
  this.fd = 0
};
var uo = function(a, b, c) {
  a.zv.push(b);
  b = b.length;
  if(a.Gv) {
    c = (0,z.Jc)(c) ? c : c.parentNode;
    var d = (0,z.ce)(c, "fontWeight");
    (-1 != d.indexOf("bold") || Number(d) && 600 < Number(d)) && (0,z.xn)(a.vc, (0,z.Dn)(1, a.fd, a.fd + b));
    "italic" === (0,z.ce)(c, "fontStyle") && (0,z.xn)(a.vc, (0,z.Dn)(2, a.fd, a.fd + b))
  }
  a.fd += b
};
var so = function(a, b, c) {
  var d = new z.ad(b), e = null;
  c = new to(a, !!c);
  for(var f = !1;e = (0,z.$c)(d);) {
    if(e != b) {
      if(e.nodeType == z.Rc) {
        if(!f) {
          var h = e.nodeValue, h = 8 == a.type ? h.replace(/\xA0/g, " ") : h.replace(/[\s\xA0]/g, " ");
          uo(c, h, e)
        }
      }else {
        if(1 == e.nodeType) {
          if((0,z.ed)(e, "drop-cap-editable")) {
            f = !f
          }else {
            if(!f) {
              var k;
              if(-1 == d.Fb) {
                k = ko(e);
                if(null != k) {
                  var h = c, l = h.nm.pop();
                  l.end = h.fd;
                  (!h.Gv || 1 !== k && 2 !== k) && (0,z.xn)(h.vc, l)
                }
                "BR" == e.tagName && uo(c, "\n", e)
              }else {
                1 == d.Fb && (k = ko(e), 3 == k ? (h = (0,z.lk)(e.href, !1), e = (0,z.Cn)(c.fd, c.fd, h, e.title, e.rel), c.nm.push(e)) : 4 == k ? (e = e.getAttribute("name"), e = (0,z.Dn)(4, c.fd, c.fd).Ud(e), c.nm.push(e)) : k && (e = (0,z.Dn)(k, c.fd, c.fd), c.nm.push(e)))
              }
            }
          }
        }
      }
    }
  }
  a.hasDropCap = (0,z.lo)(b);
  return c.vk(b.getAttribute("data-default-value"))
};
z.vo = function(a) {
  a = a.querySelectorAll("iframe");
  (0,z.Ac)(a, function(a) {
    var c = (0,z.ro)(a.parentNode);
    c && (c = Vn(c, z.sf), c = Dc(c), c.getAttribute("src") != a.getAttribute("src") && (a.setAttribute("width", c.getAttribute("width")), a.setAttribute("height", c.getAttribute("height")), a.setAttribute("src", c.getAttribute("src"))))
  })
};
z.wo = function(a) {
  a = (0,z.Me)(a);
  for(var b = (0,z.mo)(a), c = 0;c < a.length;c++) {
    var d = a[c], e = 2 === (0,z.N)(b[c], "textLayout") ? 0.9 : 0;
    e && (d.style.minHeight = Math.round(e * Number((0,z.P)("deviceHeight"))) + "px")
  }
};
var xo = function(a, b, c) {
  z.Hk.call(this);
  this.ha = a.get("request");
  this.ia = a.get("dom-monitor");
  this.xe = b;
  this.Xd = (0,z.Le)(b.querySelector(".body"));
  this.ka = c;
  this.km = this.iu = 0;
  this.Dm = null;
  this.xt = (0,z.Vk)(yo, this.cv, this)
};
z.zo = function() {
  z.Sh.call(this);
  this.Hy = !!(0,z.P)("variants.can_see_drop_caps");
  this.za = [];
  this.za.push((0,z.L)(window.document.body, "keyup", this.Du, this));
  this.za.push((0,z.L)(window.document.body, "mouseup", this.Du, this))
};
var Ao = function(a, b, c) {
  a.Dl = b;
  a.tv = c;
  a.S = window.document.createElement("div");
  a.S.className = "highlight-menu";
  (0,z.Bo)(a);
  (0,z.Co)(a)
};
z.Bo = function(a) {
  a.S.innerHTML = "\x3cdiv class\x3d'highlight-menu-inner'\x3e\x3cul class\x3d\"highlight-menu-buttons\"\x3e" + (a.Dl ? '\x3cli class\x3d"highlight-menu-button highlight-menu-notes"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"highlight"\x3e\x3cspan class\x3d"icons icons-notes"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : "") + (a.tv ? '\x3cli class\x3d"highlight-menu-button highlight-menu-twitter"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"twitter"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : 
  "") + "\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d'highlight-menu-arrow-clip'\x3e\x3cspan class\x3d'highlight-menu-arrow'\x3e\x3c/span\x3e\x3c/div\x3e"
};
z.Do = function(a) {
  window.clearTimeout(a.Hc);
  a.Hc = window.setTimeout(a.BD.bind(a), 20)
};
z.Co = function(a) {
  (0,z.wg)(a.S).g("*", function(a) {
    this.H(a.vd, a)
  }, a);
  (0,z.L)(a.S, "mousedown", a.yB, a)
};
var Eo = function(a) {
  $g.call(this);
  this.Lv = window.innerWidth;
  this.Kv = window.innerHeight;
  this.ba = a.get("app");
  this.fu = -window.Infinity;
  this.Hc = this.ec = null;
  this.HC = (0,z.L)(window, "resize", this.Pu, this);
  window._resizeIframe = (0,z.wa)(this.Tz, this);
  this.ba.h("endNav", this.Xj, this)
};
var Fo = function(a, b, c) {
  b = '\x3cdiv class\x3d"logged-out-post-footer" style\x3d"background-image: url(\'' + (0,z.V)((0,z.Xf)(c.welcomeFooterImg)) + '\')"\x3e\x3cdiv class\x3d"post-content"\x3e\x3cdiv class\x3d"logged-out-branding"\x3e\x3cdiv class\x3d"logged-out-branding-title"\x3e\x3cspan class\x3d"logged-out-branding-welcome"\x3eWelcome to\x3c/span\x3e\x3cspan class\x3d"logged-out-branding-name"\x3e' + (0,z.U)(c.productName) + '\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"logged-out-sections"\x3e\x3cdiv class\x3d"logged-out-section"\x3e';
  return b += '\x3ca href\x3d"' + (0,z.V)((0,z.Xf)("https://medium.com/help-center/128f049a7ad")) + '" class\x3d"welcome-footer-item"\x3e\x3cspan class\x3d"item-backdrop"\x3e\x3c/span\x3e\x3cspan class\x3d"icons icons-draft"\x3e\x3c/span\x3e\x3c/a\x3e\x3cdiv class\x3d"logged-out-section-message"\x3e\x3cdiv class\x3d"message-text"\x3eWrite beautiful posts with collaborators\x3c/div\x3e\x3ca class\x3d"logged-out-section-link" href\x3d"' + (0,z.V)((0,z.Xf)("https://medium.com/help-center/128f049a7ad")) + 
  '"\x3eLearn about the editor\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"logged-out-section"\x3e\x3ca href\x3d"/" class\x3d"welcome-footer-item"\x3e\x3cspan class\x3d"item-backdrop"\x3e\x3c/span\x3e\x3cspan class\x3d"icons icons-read"\x3e\x3c/span\x3e\x3c/a\x3e\x3cdiv class\x3d"logged-out-section-message"\x3e\x3cdiv class\x3d"message-text"\x3eRead, share, and recommend stories\x3c/div\x3e\x3ca class\x3d"logged-out-section-link" href\x3d"/"\x3ePeruse popular posts\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"logged-out-section"\x3e\x3ca href\x3d"/collections" class\x3d"welcome-footer-item"\x3e\x3cspan class\x3d"item-backdrop"\x3e\x3c/span\x3e\x3cspan class\x3d"icons icons-collections"\x3e\x3c/span\x3e\x3c/a\x3e\x3cdiv class\x3d"logged-out-section-message"\x3e\x3cdiv class\x3d"message-text"\x3eFollow collections that intrigue you\x3c/div\x3e\x3ca class\x3d"logged-out-section-link" href\x3d"/collections"\x3eExplore collections\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"actions"\x3e\x3ca class\x3d"btn btn-primary" title\x3d"Sign in with Twitter" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"' + 
  (0,z.V)(a.is) + '" tabindex\x3d"-1"\x3e\x3cspan class\x3d"icons icons-twitter-small"\x3e\x3c/span\x3eSign in with Twitter\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'
};
var Go = function(a, b, c) {
  z.Xi.call(this, a);
  this.w = a;
  this.V = b.postId;
  this.na = b.collectionSlug;
  this.ba = a.get("app");
  this.Zo = (0,z.Yi)(this, "coreactions");
  this.U = a.get("datastore");
  this.ha = a.get("request");
  this.J = a.get("dialog");
  this.ia = a.get("dom-monitor");
  this.qk = a.get("twitter");
  this.yz = a.get("facebook");
  this.sz = a.get("email");
  this.hv = a.get("scroll-tracker");
  this.ga = [];
  this.Da = null;
  this.Ta = (0,z.Yi)(this, "butter-bar");
  this.lC = c;
  this.$ = this.Yh(c.$b);
  this.Sj = new tk(c.Zk || this.na || "", this.$ ? String(this.$.Mk("id")) : "");
  this.St = this.Np = !1;
  this.Dc = new z.Kl;
  Ho++
};
var Io = function(a) {
  return a.ka.get("creator.userId") == (0,z.P)("currentUser.userId")
};
var Jo = function(a) {
  var b = a.o.getElementsByClassName("post-author-card")[0], c = (0,z.Ge)(b) + b.offsetHeight;
  (0,z.G)(a.xe, "grid-breaking");
  (0,z.Je)(a.Uh, function(a) {
    var b = (0,z.Ge)(a) < c;
    (0,z.cd)(a, "grid-breaking-override", b)
  }, a)
};
var Ko = function(a) {
  return!0 === (0,z.P)("variants.enable_notes") && "false" != a.xe.getAttribute("data-allow-notes")
};
var Lo = function(a) {
  var b = 500 >= window.innerWidth ? "notes-mobile" : "notes";
  Ko(a) ? (0,z.A)((0,z.y)((0,z.y)(a.Da.Ob(Yk(250)), function() {
    return(0,z.Mo)(this.w, b)
  }, a), function(a) {
    this.Gc = a.Ei(this.ka, this.xe, Io(this), this.Ea)
  }, a), z.Ph) : (0,z.Ob)(!0)
};
var No = function(a) {
  var b = !(0,z.P)("isAuthenticated") && (0,z.P)("variants.can_see_post_welcome_footer") && 0 === Ho % 3;
  if(!Yh(a.ka) || a.St) {
    return(0,z.Ob)(!0)
  }
  a.St = !0;
  b ? a = (0,z.y)(a.Da.Ob(Yk(500)), a.$C, a) : (0,z.P)("variants.enable_next_post_in_footer") ? (a.Zp = new cm(a.w, a.R(".post-footer"), a.V, a.Sj), a.Zp.Rc(), a = (0,z.Ob)(!0)) : a = (0,z.P)("variants.can_see_recommended_posts") ? Oo(a) : (0,z.Ob)(!0);
  return a
};
var Po = function(a) {
  return Yh(a.ka) ? (0,z.A)((0,z.y)((0,z.y)(a.Da.Ob(Yk(500)), function() {
    return this.ha.get("/p/" + this.V + "/upvotes", {Z:!0, background:!0})
  }, a), a.uv, a), z.Ph) : (0,z.Ob)(!0)
};
var Oo = function(a) {
  return(0,z.A)((0,z.y)((0,z.y)(a.Da.Ob(Yk(500)), function() {
    return this.ha.get("/" + this.cf() + "/recommended", {Z:!0, background:!0})
  }, a), a.aD, a), z.Ph)
};
var Qo = function(a) {
  a.ba.navigate(a.Sj.Wg, {$b:a.Sj.mc})
};
var Ro = function(a) {
  a.gh.set("count", (0,z.Xh)(a.gh, "count") + (a.ka.get("vote") ? 1 : -1));
  a.gh.set("users", So(a, a.gh.get("users")));
  a.uv()
};
var So = function(a, b) {
  var c = (0,z.P)("currentUser");
  c && (b = b.filter(function(a) {
    return a.userId != c.userId
  }), a.ka.get("vote") && b.unshift(c));
  return b
};
var To = function() {
  var a = window.document.getElementById("temp-experimental-css");
  a && (0,z.F)(a)
};
var Uo = function(a) {
  this.Tp = a;
  this.xb = {}
};
z.Vo = function(a, b) {
  return'\x3cdiv class\x3d"bucket post-bucket' + (a.className ? " " + (0,z.V)(a.className) : "") + '"\x3e' + (0,z.Wo)(a, b) + (a.QL ? '\x3cdiv class\x3d"welcome-wrapper"\x3e\x3cdiv class\x3d"loading-indicator-wrapper"\x3e\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"loader-label"\x3eFinding the best posts for you based on collections you\'re following...\x3c/div\x3e\x3c/div\x3e' : "") + Xo(a, 0, b) + "\x3c/div\x3e"
};
var Xo = function(a, b, c) {
  b = "";
  var d = a.posts, e = d.length;
  if(0 < e) {
    for(var f = 0;f < e;f++) {
      var h = d[f];
      b += !a.ax || f < a.ax ? (0,z.Df)("f", a.yx)((0,z.yf)(a, {post:h}), null, c) : ""
    }
  }else {
    c = b, a = a || {}, a = '\x3cdiv class\x3d"empty-bucket"\x3e\x3ch3 class\x3d"empty-bucket-title"\x3e' + (a.ph && a.ph.title ? (0,z.Zf)(a.ph.title) : "There's nothing here yet.") + '\x3c/h3\x3e\x3cp class\x3d"empty-bucket-description"\x3e' + (a.ph && a.ph.description ? (0,z.Zf)(a.ph.description) : 'Check out our \x3ca href\x3d"/collections" title\x3d"Go to featured collections"\x3efeatured collections\x3c/a\x3e for good reads.') + "\x3c/p\x3e\x3c/div\x3e", b = c + a
  }
  return b
};
z.Yo = function(a, b) {
  for(var c = '\x3cdiv class\x3d"bucket collection-bucket"\x3e' + (0,z.Wo)(a, b) + '\x3cdiv class\x3d"bucket-grid"\x3e', d = a.collections, e = d.length, f = 0;f < e;f++) {
    var h = (0,z.yf)(a, {collection:d[f]}), k = b, l = "", m = k.miroUrl + "/max/300/" + h.collection.image.imageId, l = l + (h.Dk ? '\x3cdiv class\x3d"collection-item ' + (h.collection.virtuals.isSubscribed ? "active" : "") + '" href\x3d"/' + (0,z.V)(h.collection.slug) + '" style\x3d"background-image:url(' + (0,z.V)((0,z.Xf)(m)) + ')" data-action\x3d"toggle-subscribe-collection" data-action-value\x3d"' + (0,z.V)(h.collection.slug) + '" data-collection-id\x3d"' + (0,z.V)(h.collection.id) + '" \x3e' + 
    Zo(h, k) + "\x3c/div\x3e" : '\x3ca class\x3d"collection-item" href\x3d"/' + (0,z.V)(h.collection.slug) + '" style\x3d"background-image:url(' + (0,z.V)((0,z.Xf)(m)) + ')"\x3e' + Zo(h, k) + "\x3c/a\x3e"), c = c + l
  }
  return c + "\x3c/div\x3e\x3c/div\x3e"
};
var Zo = function(a, b) {
  return'\x3cdiv class\x3d"collection-item-inner-wrapper"\x3e\x3cdiv class\x3d"collection-item-header follow-wrapper"\x3e' + (a.ws ? $o(a, 0, b) : "") + '\x3c/div\x3e\x3cdiv class\x3d"collection-item-body"\x3e\x3ch3 class\x3d"collection-item-title"\x3e' + (0,z.U)(a.collection.name) + '\x3c/h3\x3e\x3cdiv class\x3d"collection-item-meta"\x3e' + (a.PL ? (0,z.U)(a.collection.shortDescription) : b.variants.can_view_collection_metrics ? (0,z.U)(a.collection.metadata.followerCount) + " follower" + (1 != 
  a.collection.metadata.followerCount ? "s" : "") : (0,z.U)(a.collection.metadata.postCount) + " post" + (1 != a.collection.metadata.postCount ? "s" : "")) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
};
var $o = function(a, b, c) {
  return'\x3cbutton class\x3d"btn btn-follow no-user-select ' + (a.collection.virtuals.isSubscribed ? "active" : "") + '"' + (c.isAuthenticated ? 'data-action\x3d"toggle-subscribe-collection" data-action-value\x3d"' + (0,z.V)(a.collection.slug) + '" data-collection-id\x3d"' + (0,z.V)(a.collection.id) + '"' : 'data-action\x3d"sign-in-prompt" data-requires-token\x3d"true" data-popover-type\x3d"sign-in" data-redirect\x3d"/_/subscribe/' + (0,z.V)(a.collection.slug) + '" data-popover\x3d"Sign in to follow this collection" data-popover-position\x3d"bottom" data-popover-signin-action\x3d"follow-collection"') + 
  '\x3e\x3cspan class\x3d"icons icons-follow"\x3e\x3c/span\x3e\x3cspan class\x3d"follow-label" data-suffix\x3d"ing"\x3eFollow\x3c/span\x3e\x3c/button\x3e'
};
z.Wo = function(a, b) {
  var c = "";
  if(a.sections.length) {
    for(var c = c + ('\x3cdiv class\x3d"bucket-header' + (1 < a.sections.length ? " bucket-header-list" : "") + (b.variants.show_subtitles ? " show-subtitles-variant" : "") + '"\x3e\x3cnav class\x3d"bucket-sort"\x3e'), d = a.sections, e = d.length, f = 0;f < e;f++) {
      var h = d[f], k = (a.Cg ? a.Cg : "") + (h.url ? h.url : ""), c = c + ('\x3ch5 class\x3d"bucket-title' + (a.filterBy && a.filterBy == h.filterBy ? " active" : "") + '"\x3e' + (k ? '\x3ca href\x3d"' + (0,z.V)((0,z.Xf)(k)) + '" title\x3d"' + (0,z.V)(h.title) + '"\x3e\x3cspan class\x3d"bucket-header-title"\x3e' + (0,z.U)(h.title) + "\x3c/span\x3e " + (1 == a.sections.length ? '\x3cspan class\x3d"bucket-header-chevron"\x3emore \x3cspan class\x3d"icons icons-arrow-right"\x3e\x3c/span\x3e\x3c/span\x3e' : 
      "") + "\x3c/a\x3e" : '\x3cspan class\x3d"no-link"\x3e' + (0,z.U)(h.title) + "\x3c/span\x3e") + "\x3c/h5\x3e")
    }
    c += "\x3c/nav\x3e\x3c/div\x3e"
  }
  return c
};
z.ap = function(a, b) {
  var c = "", d = a.collection ? (0,z.bp)({imageId:a.collection.image.imageId}, b) : "", e = a.Nc ? "" : b.useragent.isMobile || b.useragent.isTablet ? "" : b.isAuthenticated && a.collection.virtuals.canPost && b.useragent.supportsEdit ? '\x3ca class\x3d"btn ' + (b.variants.enable_subscribe_collection ? "btn-chromeless" : "btn-primary") + ' btn-new-post" data-action\x3d"new-post" title\x3d"Write a new post" href\x3d"/' + (0,z.V)(a.collection.slug) + '/new-post"\x3e\x3cspan class\x3d"icons icons-new-post"\x3e\x3c/span\x3e\x3c/a\x3e' : 
  b.isAuthenticated && "open" == a.collection.collectionType ? '\x3ca class\x3d"btn" title\x3d"How do I post?" href\x3d"' + (0,z.V)((0,z.Xf)(b.howToPostUrl)) + '"\x3eHow do I post?\x3c/a\x3e' : "", f = !a.Nc && b.variants.enable_subscribe_collection ? Ol({collection:a.collection, SF:!0}, b) : "", h = !a.Nc && b.isAuthenticated && a.collection.user && b.currentUser.userId == a.collection.user.userId ? '\x3ca class\x3d"btn btn-edit ' + (b.variants.enable_subscribe_collection ? "btn-chromeless" : "") + 
  '" title\x3d"Edit ' + (0,z.V)(a.collection.name) + '" href\x3d"/' + (0,z.V)(a.collection.slug) + '/settings"\x3e' + (b.variants.enable_subscribe_collection ? '\x3cspan class\x3d"icons icons-settings"\x3e\x3c/span\x3e' : "Edit") + "\x3c/a\x3e" : "";
  return c += '\x3caside class\x3d"cover cover-collection" data-load-img\x3d".cover-img"\x3e\x3cdiv class\x3d"cover-img collection-img" style\x3d"background-image: url(\'' + (0,z.V)((0,z.Xf)(d)) + "')\"\x3e" + (a.Nc ? '\x3cdiv class\x3d"image-picker-region"\x3e\x3c/div\x3e\x3ca class\x3d"image-controls" data-action\x3d"pick-image" href\x3d"#"\x3e\x3cspan class\x3d"icons icons-replace-image replace-image-button" title\x3d"Replace image" data-action\x3d"pick-image"\x3e\x3c/span\x3e\x3c/a\x3e\x3cdiv class\x3d"upload-feedback"\x3e\x3cdiv class\x3d"progress-bar-wrap"\x3e\x3cdiv class\x3d"progress-bar"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e' : 
  "") + '\x3c/div\x3e\x3cdiv class\x3d"cover-body"\x3e\x3cdiv class\x3d"cover-body-inner"\x3e\x3ch1 class\x3d"cover-title collection-title"\x3e' + (a.collection ? (0,z.U)(a.collection.name) : "") + '\x3c/h1\x3e\x3cp class\x3d"cover-description collection-description"\x3e' + (a.collection ? (0,z.U)(a.collection.description) : "") + '\x3c/p\x3e\x3cdiv class\x3d"cover-meta"\x3e' + (a.collection && a.collection.user ? "By " + dj({user:a.collection.user}) : b.isAuthenticated && a.Nc ? "By " + dj({user:b.currentUser}) : 
  "By Unknown User") + (a.collection ? (b.variants.can_view_collection_metrics ? " · " + (0,z.U)(a.collection.metadata.followerCount) + " Follower" + (1 != a.collection.metadata.followerCount ? "s" : "") : " · " + (0,z.U)(a.collection.metadata.postCount) + " Post" + (1 != a.collection.metadata.postCount ? "s" : "")) + (a.Nc || "open" == a.collection.collectionType ? "" : " · Invite Only") : "") + "\x3c/div\x3e" + (a.Nc || e || f || h ? '\x3cdiv class\x3d"cover-actions ' + (f ? "cover-has-subscribe-action" : 
  "") + '"\x3e' + (a.Nc ? '\x3cbutton class\x3d"btn btn-primary btn-save-settings" data-action\x3d"collection-save"\x3e' + (a.collection ? "Save" : "Create") + '\x3c/button\x3e\x3ca href\x3d"/' + (a.collection ? (0,z.V)(a.collection.slug) : "") + '" class\x3d"btn"\x3eCancel\x3c/a\x3e' + (a.collection && 0 == a.collection.metadata.postCount ? '\x3cbutton class\x3d"btn btn-delete" data-action\x3d"collection-delete"\x3eDelete\x3c/button\x3e' : "") : '\x3cdiv class\x3d"cover-primary-actions"\x3e' + (0,z.Zf)(f) + 
  '\x3c/div\x3e\x3cdiv class\x3d"cover-secondary-actions"\x3e' + (0,z.Zf)(e) + (0,z.Zf)(h) + "\x3c/div\x3e") + "\x3c/div\x3e" : "") + "\x3c/div\x3e\x3c/div\x3e\x3c/aside\x3e"
};
z.bp = function(a, b) {
  return(0,z.gg)({imageId:a.imageId, strategy:"resample", width:"1000", Tr:"640"}, 0, b)
};
z.cp = function(a, b) {
  var c = '\x3cdiv class\x3d"wrapper-section jacket" data-load-img\x3d".jacket-img"\x3e\x3cdiv class\x3d"jacket-img collection-img" style\x3d"background-image: url(\'' + (a.collection ? (0,z.bp)({imageId:a.collection.image.imageId}, b) : "") + '\')"\x3e\x3cdiv class\x3d"jacket-img-filter"\x3e\x3c/div\x3e' + (a.Nc ? '\x3cdiv class\x3d"image-picker-region"\x3e\x3c/div\x3e\x3ca class\x3d"image-controls" data-action\x3d"pick-image" href\x3d"#"\x3e\x3cspan class\x3d"icons icons-replace-image replace-image-button" title\x3d"Replace image" data-action\x3d"pick-image"\x3e\x3c/span\x3e\x3c/a\x3e\x3cdiv class\x3d"upload-feedback"\x3e\x3cdiv class\x3d"progress-bar-wrap"\x3e\x3cdiv class\x3d"progress-bar"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e' : 
  "") + '\x3c/div\x3e\x3cdiv class\x3d"jacket-body-wrapper"\x3e\x3cdiv class\x3d"jacket-body"\x3e\x3ch1 class\x3d"jacket-title collection-title"\x3e' + (a.collection ? (0,z.U)(a.collection.name) : "") + '\x3c/h1\x3e\x3cp class\x3d"jacket-description collection-description"\x3e' + (a.collection ? (0,z.U)(a.collection.description) : "") + "\x3c/p\x3e" + (!a.Nc && b.variants.enable_subscribe_collection ? '\x3cbutton class\x3d"btn btn-follow jacket-follow-btn no-user-select ' + (a.collection.virtuals.isSubscribed ? 
  "active" : "") + '"' + (b.isAuthenticated ? 'data-action\x3d"toggle-subscribe-collection" data-action-value\x3d"' + (0,z.V)(a.collection.slug) + '" data-collection-id\x3d"' + (0,z.V)(a.collection.id) + '"' : 'data-action\x3d"sign-in-prompt" data-requires-token\x3d"true" data-popover-type\x3d"sign-in" data-redirect\x3d"/_/subscribe/' + (0,z.V)(a.collection.slug) + '" data-popover\x3d"Sign in to follow this collection" data-popover-position\x3d"bottom" data-popover-signin-action\x3d"follow-collection"') + 
  '\x3e\x3cspan class\x3d"icons icons-follow"\x3e\x3c/span\x3e\x3cspan class\x3d"follow-label" data-suffix\x3d"ing"\x3eFollow\x3c/span\x3e\x3c/button\x3e' : "") + '\x3c/div\x3e\x3c/div\x3e\x3cul class\x3d"jacket-tools"\x3e' + (a.Nc ? '\x3cli class\x3d"jacket-tool"\x3e\x3cbutton class\x3d"btn btn-primary btn-save-settings" data-action\x3d"collection-save"\x3e' + (a.collection ? "Save" : "Create") + '\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"jacket-tool"\x3e\x3ca href\x3d"/' + (a.collection ? (0,z.V)(a.collection.slug) : 
  "") + '" class\x3d"btn"\x3eCancel\x3c/a\x3e\x3c/li\x3e' + (a.collection && 0 == a.collection.metadata.postCount ? '\x3cli class\x3d"jacket-tool"\x3e\x3cbutton class\x3d"btn btn-delete" data-action\x3d"collection-delete"\x3eDelete\x3c/button\x3e\x3c/li\x3e' : "") : '\x3cli class\x3d"jacket-tool"\x3e' + (a.Nc ? "" : b.useragent.isMobile || b.useragent.isTablet ? "" : b.isAuthenticated && a.collection.virtuals.canPost && b.useragent.supportsEdit ? '\x3ca class\x3d"btn ' + (b.variants.enable_subscribe_collection ? 
  "btn-chromeless" : "btn-primary") + ' btn-new-post" data-action\x3d"new-post" title\x3d"Write a new post" href\x3d"/' + (0,z.V)(a.collection.slug) + '/new-post"\x3e\x3cspan class\x3d"icons icons-new-post"\x3e\x3c/span\x3e\x3c/a\x3e' : b.isAuthenticated && "open" == a.collection.collectionType ? '\x3ca class\x3d"btn" title\x3d"How do I post?" href\x3d"' + (0,z.V)((0,z.Xf)(b.howToPostUrl)) + '"\x3eHow do I post?\x3c/a\x3e' : "") + '\x3c/li\x3e\x3cli class\x3d"jacket-tool"\x3e' + (!a.Nc && b.isAuthenticated && 
  a.collection.user && b.currentUser.userId == a.collection.user.userId ? '\x3ca class\x3d"btn btn-edit ' + (b.variants.enable_subscribe_collection ? "btn-chromeless" : "") + '" title\x3d"Edit ' + (0,z.V)(a.collection.name) + '" href\x3d"/' + (0,z.V)(a.collection.slug) + '/settings"\x3e' + (b.variants.enable_subscribe_collection ? '\x3cspan class\x3d"icons icons-settings"\x3e\x3c/span\x3e' : "Edit") + "\x3c/a\x3e" : "") + "\x3c/li\x3e") + "\x3c/ul\x3e", d = a.gx || a.$w || a.lx;
  return c += (d ? '\x3cdiv class\x3d"jacket-footer"\x3e\x3cdiv class\x3d"jacket-post"\x3e\x3ca href\x3d"/' + (0,z.V)(a.collection.slug) + "/" + (0,z.V)(d.id) + '"\x3e\x3cp class\x3d"jacket-post-reason"\x3e' + (a.gx ? "Most Recommended" : a.$w ? "Latest Post" : a.lx ? "First Post" : "") + '\x3c/p\x3e\x3ch3 class\x3d"jacket-post-title"\x3e' + (0,z.U)(d.title) + '\x3c/h3\x3e\x3cp class\x3d"jacket-post-snippet"\x3e' + (0,z.U)(d.virtuals.snippet) + "\x3c/p\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e" : "") + 
  "\x3c/div\x3e"
};
var dp = function(a, b, c) {
  b = "";
  var d = c.isAuthenticated && a.collection.virtuals.canPost && c.useragent.supportsEdit ? '\x3ca href\x3d"/' + (0,z.V)(a.collection.slug) + '/new-post" title\x3d"Create a new post in ' + (0,z.V)(a.collection.name) + '" class\x3d"btn btn-primary btn-new-post"\x3e\x3cspan class\x3d"icons icons-new-post"\x3e\x3c/span\x3eNew Post\x3c/a\x3e' : 'Check back soon to see new posts in this collection. In the meantime, browse our \x3ca title\x3d"Go home" href\x3d"/"\x3erecommended posts\x3c/a\x3e.', e = "/" + 
  a.collection.slug;
  b += (c.variants.enable_full_collection_covers ? "" : (0,z.ap)(a, c)) + '\x3csection class\x3d"wrapper ' + (c.variants.enable_full_collection_covers ? "wrapper-jacket" : "") + '" tabindex\x3d"-1"\x3e' + (c.variants.enable_full_collection_covers ? (0,z.cp)((0,z.yf)(a, {gx:a.recommendedPosts[0], $w:a.latestPosts[0], lx:a.oldestPosts[0]}), c) : "") + '\x3cdiv class\x3d"wrapper-section collection-content"\x3e\x3cdiv class\x3d"wrapper-inner"\x3e';
  a.oldestPosts && a.oldestPosts.length ? b += (0,z.Vo)((0,z.yf)(a, {nd:!0, posts:a.oldestPosts, Cg:e, sections:[], className:"collection-by-oldest"}), c) : a.recommendedPosts && !a.recommendedPosts.length ? b += (0,z.Vo)((0,z.yf)(a, {posts:[], sections:[], ph:{title:"There’s nothing here… yet.", description:d}}), c) : a.recommendedPosts ? b += (0,z.Vo)((0,z.yf)(a, {nd:!0, posts:a.recommendedPosts, Cg:e, sections:[{title:"Most Recommended", url:"/recommended"}], className:"collection-by-recommended", 
  source:"recommended"}), c) + (0,z.Vo)((0,z.yf)(a, {posts:a.latestPosts, lo:!0, nd:!0, Cg:e, sections:[{title:"Latest", url:"/latest"}], className:"collection-by-latest", source:"latest"}), c) : (d = a.filterBy, b += "latest" == a.filterBy ? (0,z.Vo)((0,z.yf)(a, {sections:[{title:"Latest"}], nd:!0, source:d}), c) : "oldest" == a.filterBy ? (0,z.Vo)((0,z.yf)(a, {sections:[{title:"By Publication Date"}], nd:!0, source:d}), c) : (0,z.Vo)((0,z.yf)(a, {sections:[{title:"Most Recommended"}], nd:!0, source:d}), 
  c));
  return b + "\x3c/div\x3e\x3c/div\x3e\x3c/section\x3e"
};
var ep = function(a, b, c) {
  return'\x3cdiv class\x3d"wrapper-section related-collections"\x3e\x3cdiv class\x3d"wrapper-inner"\x3e' + (0,z.Yo)((0,z.yf)(a, {collections:a.collections, sections:[{title:"Suggested Collections"}], ws:!0}), c) + "\x3c/div\x3e\x3c/div\x3e"
};
var fp = function(a) {
  this.D = a;
  this.Fm = this.dk = null
};
var gp = function(a, b) {
  if(a.dk) {
    throw Error("Called populate() before the previous populate() was complete");
  }
  a.dk = b;
  return a
};
var hp = function(a, b) {
  if(!a.dk) {
    throw Error("Cannot call as() before populate()");
  }
  if(a.Fm) {
    throw Error("Cannot call as() twice");
  }
  a.Fm = b;
  return a
};
var ip = function(a, b) {
  var c = a.D, d;
  b = b || {};
  var e = a.dk.split(".");
  if(c) {
    for(var f = Array.isArray(c) ? c : [c];e.length && f.length;) {
      for(var h = e.shift(), k = 0 < e.length, l = [], c = 0;c < f.length;c++) {
        var m = f[c];
        if(k) {
          if(m = m[h], Array.isArray(m)) {
            for(d = 0;d < m.length;d++) {
              l.push(m[d])
            }
          }else {
            "object" === typeof m && m && l.push(m)
          }
        }else {
          var r = a.Fm || h;
          if(Array.isArray(m[h])) {
            for(d = 0;d < m[h].length;d++) {
              b[m[h][d]] && (m[r][d] = b[m[h][d]])
            }
          }else {
            "string" === typeof m[h] && b[m[h]] && (m[r] = b[m[h]])
          }
        }
      }
      f = l
    }
  }
  a.dk = a.Fm = null
};
z.Ki = function(a, b) {
  if(!b || "object" !== typeof b) {
    throw Error("References are now a required argument for autoPopulate()");
  }
  if(!a) {
    return a
  }
  var c = Array.isArray(a);
  if(c && 0 === a.length) {
    return a
  }
  var d;
  d = new fp(a);
  var e = c ? a[0].type : a.type, c = c ? a : [a];
  if("Collection" == e) {
    ip(hp(gp(d, "creatorId"), "user"), b.User)
  }else {
    if("Post" == e) {
      ip(hp(gp(d, "creatorId"), "creator"), b.User), ip(hp(gp(d, "homeCollectionId"), "homeCollection"), b.Collection), ip(hp(gp(d, "virtuals.postedIn.collectionId"), "collection"), b.Collection)
    }else {
      if("RecommendedPost" == e) {
        for(d = c.length - 1;0 <= d;d--) {
          (e = c[d].post) && "object" == typeof e ? (0,z.Ki)(e, b) : (window.console.warn("Missing post data in RecommendedPost for post ID: " + e), c.splice(d, 1))
        }
      }else {
        if("RelatedCollectionReference" == e) {
          for(ip(hp(gp(d, "collectionId"), "collection"), b.Collection), d = 0;d < c.length;d++) {
            (0,z.Ki)(c[d].collection, b)
          }
        }else {
          "FollowUp" == e ? (ip(hp(gp(d, "value.mediaResourceId"), "mediaResource"), b.MediaResource), ip(hp(gp(d, "value.creatorId"), "creator"), b.User), (0,z.Ki)(a.value.mediaResource, b)) : "MediaResource" == e && "MediaResourceMediumPost" == a.value.mediaResourceType && (ip(hp(gp(d, "value.mediumPost.postId"), "post"), b.Post), (0,z.Ki)(a.value.mediumPost.post, b))
        }
      }
    }
  }
  for(d = 0;d < c.length;d++) {
    c[d]._isPopulated = !0
  }
  return a
};
var yi = function(a) {
  a = Array.isArray(a) ? a : [a];
  for(var b = 0;b < a.length;b++) {
    if(!a[b]._isPopulated) {
      return!1
    }
  }
  return!0
};
var jp = function(a, b) {
  z.Xi.call(this, a);
  this.Lc = b.collectionSlug;
  this.path = b.path;
  this.filterBy = this.iq(b.path);
  this.kh = a.get("app");
  this.oh = a.get("datastore");
  this.Fh = a.get("request");
  this.Ta = (0,z.Yi)(this, "butter-bar")
};
var kp = function(a, b) {
  jp.call(this, a, b);
  this.Dp = !1
};
var lp = function(a, b, c) {
  if(c = a.R(c)) {
    a.Hm[b] = c, mp(c, a.kh, a.Ba[b])
  }
};
var mp = function(a, b, c) {
  (0,z.wg)(a).g("open-post", np.bind(null, b, String(c.Mk("id"))))
};
var op = function(a) {
  (0,z.wg)(a).clear("open-post")
};
var np = function(a, b, c) {
  if(!c.Pn) {
    var d = c.value;
    0 === c.value.indexOf("/") && (d = d.substr(1));
    b = {$b:b};
    if(c = c.target.getAttribute("data-source")) {
      b.source = c
    }
    a.navigate(d, b)
  }
  return!1
};
z.pp = function(a, b, c) {
  z.D.call(this);
  this.ia = a.get("dom-monitor");
  this.Fq = this.ai = !1;
  this.Tb = b;
  this.fm = !!(0,z.P)("variants.can_infinite_scroll") || !1;
  this.om = c
};
z.qp = function(a) {
  z.Sh.call(this);
  this.w = a;
  this.ba = a.get("app");
  this.U = a.get("datastore")
};
z.rp = function(a, b) {
  if(a.$) {
    throw Error("The post list should not be set twice.");
  }
  b && (a.$ = b, a.$.h("add", a.ym, a), a.$.h("remove", a.Ou, a));
  return a
};
z.sp = function(a, b) {
  if(a.$e) {
    throw Error("The container element should not be set twice.");
  }
  a.$e = b;
  return a
};
z.tp = function(a, b) {
  a.yq = b;
  return a
};
var up = function(a, b, c) {
  jp.call(this, a, b);
  this.$b = c.$b || ""
};
var vp = function(a) {
  this.w = a;
  this.pq = this.oq = this.Bv = this.Wt = this.Hp = this.Rh = null;
  this.ga = [];
  a.get("app").h("endNav", this.IA, this);
  (0,z.rg)("zoom", this.HD, this)
};
var wp = function(a, b) {
  a.Rh && (b ? a.Rh.bb() : a.Rh.close(), (0,z.pe)(a.ga), a.Rh = null)
};
var xp = function(a, b) {
  this.ae = this.Zj = null;
  this.Eg = el(b.get("app")).sb();
  this.yb = a;
  this.Ht = Number(a.getAttribute("data-width") || 0);
  a.getAttribute("data-height");
  this.Qp = this.Pa = this.Gt = null;
  z.D.call(this)
};
var yp = function(a) {
  var b = {imageId:a.getAttribute("data-action-value")};
  if(a.getAttribute("data-width")) {
    b.width = a.getAttribute("data-width");
    b.height = a.getAttribute("data-height");
    var c = b.width, d = b.height, e = (0,z.uc)(window), f = qf(e.width, new pf(200, 2560), 200, !0), e = qf(e.height, new pf(200, 4096), 200, !0), f = Math.min(f / c, e / d);
    a.width && (f = Math.max(f, Number(a.width) / c));
    f = Math.min(f, 1);
    b.height = Math.round(d * f);
    b.width = Math.round(c * f)
  }
  b.strategy = b.width && b.width == b.height ? "crop-fixed" : "resample";
  return(0,z.tf)(z.gg, b)
};
var zp = function(a) {
  var b = window.document.createElement("img");
  b.src = yp(a.yb);
  (0,z.G)(b, "zoom-img");
  a.Pa = new z.Ab;
  a.Qp = (0,z.L)(b, z.Ap, a.Pa.Oa, a.Pa);
  (0,z.W)(Bp, {imageId:a.yb.getAttribute("data-action-value"), source:window.location.pathname});
  a.Gt = b;
  a.Ht ? Cp(a) : (0,z.y)(a.Pa, function() {
    this.Ht = Number(b.width);
    Cp(this)
  }, a)
};
var Cp = function(a) {
  a.ae = window.document.createElement("div");
  (0,z.G)(a.ae, "zoom-img-wrap");
  a.yb.parentNode.insertBefore(a.ae, a.yb);
  a.ae.appendChild(a.yb);
  (0,z.G)(a.yb, "zoom-img");
  a.Zj = window.document.createElement("div");
  (0,z.G)(a.Zj, "zoom-overlay");
  window.document.body.appendChild(a.Zj);
  (0,z.Ie)(a.yb);
  var b = a.yb.getAttribute("data-width"), c = a.yb.getAttribute("data-height");
  (0,z.Kc)(a.Eg, a.yb);
  var d = b / a.yb.width, e = window.innerHeight - Dp, f = window.innerWidth - Dp;
  a.vA = b < f && c < e ? d : b / c < f / e ? e / c * d : f / b * d;
  Ep(a)
};
var Ep = function(a) {
  (0,z.Ie)(a.yb);
  var b = Fe(a.yb), c = ((0,z.Kc)(a.Eg, a.yb) ? a.Eg.scrollTop : 0) + window.innerHeight / 2, d = window.innerWidth / 2, e = b.x + a.yb.width / 2;
  a.zD = c - (b.y + a.yb.height / 2);
  a.yD = d - e;
  a.ce = (0,z.L)(a.ae, z.cj, function() {
    (0,z.y)(this.Pa, function() {
      this.yb.src = this.Gt.src
    }, this);
    (0,z.pe)(this.ce)
  }, a);
  (0,z.Zd)(a.yb, "transform", "scale(" + a.vA + ")");
  (0,z.Zd)(a.ae, "transform", "translate(" + a.yD + "px, " + a.zD + "px) translateZ(0)");
  (0,z.G)(window.document.body, "zoom-overlay-open")
};
var Fp = function(a, b) {
  z.Hk.call(this);
  this.Gy = a;
  this.hz = "mouseover" === a ? "mouseout" : Gp;
  this.Pa = null;
  this.fv = (0,z.Vk)(Hp, this.IC, this);
  this.rz = b
};
z.Ip = function() {
  this.enabled = !1;
  this.Sa = this.o = null;
  this.dp = "";
  this.ve = this.op = this.pp = null;
  this.dr = "tooltip";
  this.Ai = "fade";
  this.Qv = "tooltip-arrow";
  this.Pv = 20;
  this.enable()
};
var Jp = function(a, b, c) {
  a = Math.min(Math.abs(c), b - a.Pv);
  return 0 < c ? -a : a
};
var Kp = function(a) {
  return"bottom" == a ? "top" : "top" == a ? "bottom" : "left" == a ? "right" : "left"
};
var Lp = function(a, b, c) {
  var d = c.getBoundingClientRect(), e = d.width, f = d.height;
  a.o.style.visibility = "hidden";
  (0,z.hm)(a.o, [a.dr, a.Ai]);
  var h = d.top, k = d.left, l = k + e / 2, m = h + f / 2, r, C, H, Oa;
  if("top" == b || "bottom" == b) {
    c = a.o.offsetWidth;
    r = a.o.offsetHeight;
    Oa = "bottom" == b ? window.innerHeight - h - f / 2 - r / 2 : h + f / 2 - r / 2;
    H = f / 2 + r / 2;
    f = H > Oa ? -1 * H : H;
    "top" == b && (f *= -1);
    if("top" == b && 0 < f || "bottom" == b && 0 > f) {
      b = Kp(b)
    }
    Oa = -1 * (k + e / 2);
    h = window.innerWidth - k - e / 2;
    e = c / 2 > h ? h - c / 2 : -(c / 2) < Oa ? c / 2 + Oa : 0;
    H = Jp(a, c / 2, e)
  }else {
    c = a.o.offsetWidth;
    r = a.o.offsetHeight;
    Oa = "right" == b ? window.innerWidth - k - e / 2 - c / 2 : k + e / 2 - c / 2;
    C = e / 2 + c / 2;
    e = C > Oa ? -1 * C : C;
    "left" == b && (e *= -1);
    if("left" == b && 0 < e || "right" == b && 0 > e) {
      b = Kp(b)
    }
    Oa = -1 * (h + f / 2);
    h = window.innerHeight - h - f / 2;
    f = r / 2 > h ? h - r / 2 : -(r / 2) < Oa ? r / 2 + Oa : 0;
    C = Jp(a, r / 2, f)
  }
  m = Math.ceil(m + f - r / 2);
  l = Math.ceil(l + e - c / 2);
  e = (0,z.ge)(a.Sa).y - d.top;
  d = a.o;
  m += e;
  e = (0,z.ge)(d);
  l instanceof z.kc && (m = l.y, l = l.x);
  l = d.offsetLeft + (l - e.x);
  f = d.offsetTop + (m - e.y);
  e = z.K && (z.Eg || Mp) && (0,z.$b)("1.9");
  l instanceof z.kc ? (m = l.x, l = l.y) : (m = l, l = f);
  d.style.left = ke(m, e);
  d.style.top = ke(l, e);
  d = a.o.getElementsByClassName(a.Qv)[0];
  d.style.left = H ? H + Math.ceil(c / 2) + "px" : "";
  d.style.top = C ? C + Math.ceil(r / 2) + "px" : "";
  (0,z.G)(a.o, a.dr + "-" + b);
  a.o.style.visibility = ""
};
z.Np = function(a) {
  z.Ip.call(this);
  this.pa = this.Vl = this.Ul = this.Pa = null;
  this.dr = "popover";
  this.Ai = "fade";
  this.Qv = "popover-arrow";
  this.Pv = 30;
  this.ia = a.get("dom-monitor")
};
z.Op = function(a, b, c, d) {
  if(!b || !c) {
    return Pb(Error("Missing content"))
  }
  a.remove();
  var e = b.getAttribute("data-popover-position") || "top", f = b.getAttribute("data-popover-type") || "html-content";
  if("sign-in" == f && !b.getAttribute("data-popover-signin-action")) {
    return Pb(Error("Missing action"))
  }
  a.o || (a.o = window.document.createElement("div"));
  a.Sa = b;
  var h = (0,z.He)(b);
  h != a.pa && (a.pa && a.pa.removeChild(a.o), a.pa = h, a.pa.appendChild(a.o));
  "html-content" == f ? a.o.innerHTML = a.ac({$D:c, fx:d || ""}) : "sign-in" == f && (f = b.getAttribute("data-popover-signin-action"), h = b.getAttribute("data-redirect"), d = a.o, c = '\x3cdiv class\x3d"popover-inner"\x3e\x3ch2\x3e' + (0,z.U)(c) + '\x3c/h2\x3e\x3cdiv class\x3d"subtitle"\x3e' + (0,z.Df)("e", f)(null, null, void 0) + '\x3c/div\x3e\x3ca class\x3d"btn btn-primary" title\x3d"Sign in with Twitter" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"' + (0,z.V)(h) + '" tabindex\x3d"-1"\x3e\x3cspan class\x3d"icons icons-twitter-small"\x3e\x3c/span\x3eSign in with Twitter\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e', 
  d.innerHTML = c);
  Lp(a, e, b);
  (0,z.pe)(a.ve);
  a.Ul || (a.Ul = (0,z.L)(window.document, "click", a.Kz, a, !0));
  a.Vl || (a.Vl = (0,z.L)(window.document, "touchend", a.mA, a, !0));
  a.ia.h("resize-end", a.Ot, a);
  a.Pa = new z.Ab;
  return a.Pa
};
var Pp = function(a, b) {
  (0,z.Op)(a, b, b.getAttribute("data-popover"))
};
var Qp = function(a, b) {
  this.Ta = a;
  this.ba = b.get("app");
  this.Kb = new z.Sh;
  this.h = this.Kb.h.bind(this.Kb);
  (0,z.wg)(a).g("butter-bar-action", this.yC, this).g("butter-bar-dismiss", this.kz, this).g("undo", this.$B, this)
};
z.Rp = function(a, b, c) {
  function d() {
    e.call(this);
    b.apply(c || this)
  }
  function e() {
    this.Kb.ma("action", d, this);
    this.Kb.ma("deactivate", e, this)
  }
  a.Kb.h("action", d, a);
  a.Kb.h("deactivate", e, a)
};
z.Sp = function(a) {
  z.$h.call(this);
  this.Tb = a;
  this.Tb.h("add", this.Ju, this);
  this.Tb.h("remove", this.Nu, this);
  this.Tb.h("change", this.Lu, this);
  (0,z.Tp)(this)
};
z.Tp = function(a) {
  a.wa = (a.up ? a.Tb.filter(a.up, a.Dt) : a.Tb.wa).slice(a.ip, a.ip + a.om)
};
var Up = function(a) {
  var b = a.wa;
  (0,z.Tp)(a);
  for(var c = 0;c < b.length;c++) {
    Vp(b[c], a.wa) || a.H("remove", b[c], a)
  }
  for(var c = [], d = 0;d < a.wa.length;d++) {
    Vp(a.wa[d], b) || c.push(a.wa[d])
  }
  c.length && a.H("add", c, a)
};
var Vp = function(a, b) {
  return!!(0,z.Va)(b, function(b) {
    return b === a
  })
};
var Wp = function(a) {
  var b = '\x3cdiv class\x3d"sidepanel-glass"\x3e\x3cdiv class\x3d"sidepanel-panel" tabIndex\x3d"-1"\x3e';
  if(a.items) {
    b += '\x3cdiv class\x3d"sidepanel-info"\x3e' + (a.Vx ? '\x3cbutton class\x3d"btn btn-primary" data-action\x3d"pick" data-action-value\x3d""\x3eSkip\x3c/button\x3e' : "") + (0,z.U)(a.Ow) + '\x3c/div\x3e\x3cdiv class\x3d"sidepanel-items"\x3e\x3cdiv class\x3d"sidepanel-heading"\x3e' + (0,z.U)(a.fF) + "\x3c/div\x3e";
    a = a.items;
    for(var c = a.length, d = 0;d < c;d++) {
      var e = a[d], b = b + ('\x3cdiv class\x3d"sidepanel-item' + (e.disabled ? " sidepanel-item-disabled" : "") + '"' + (e.disabled ? "" : 'data-action\x3d"select"') + "\x3e" + (e.disabled ? "" : '\x3cbutton class\x3d"btn btn-primary" data-action\x3d"pick" data-action-value\x3d"' + (0,z.V)(e.id) + '"\x3eAdd\x3c/button\x3e\x3cbutton class\x3d"btn" data-action\x3d"cancel"\x3eCancel\x3c/button\x3e') + '\x3cspan class\x3d"sidepanel-item-text"\x3e' + (e.name ? (0,z.U)(e.name) : (0,z.U)(e.id)) + "\x3c/span\x3e\x3c/div\x3e")
    }
    b += "\x3c/div\x3e"
  }else {
    b += '\x3cdiv class\x3d"sidepanel-info"\x3eNothing to show.\x3c/div\x3e'
  }
  return b + "\x3c/div\x3e\x3c/div\x3e"
};
var Xp = function(a, b, c) {
  b = "";
  if(a.items) {
    b += '\x3cdiv class\x3d"list-choice-info"\x3e' + (0,z.U)(a.Ow) + (a.Vx ? '\x3cem class\x3d"list-choice-info-or"\x3e \x26nbsp;or\x26nbsp; \x3c/em\x3e\x3ca data-action\x3d"pick" data-action-value\x3d""\x3eSkip for now\x3c/a\x3e' : "") + '\x3c/div\x3e\x3cdiv class\x3d"list-choice-items" tabindex\x3d"-1"\x3e';
    a = a.items;
    for(var d = a.length, e = 0;e < d;e++) {
      var f = a[e];
      b += '\x3cdiv class\x3d"list-choice-item" data-action\x3d"pick" data-action-value\x3d"' + (0,z.V)(f.id) + '"\x3e\x3cdiv class\x3d"list-choice-avatar-container"\x3e';
      b = f.imageId ? b + ('\x3cdiv class\x3d"avatar-list-choice" style\x3d"background-image: url(\'' + (0,z.V)((0,z.Xf)(c.miroUrl + "/fit/c/190/190/" + f.imageId)) + "')\"\x3e\x3c/div\x3e") : b + '\x3cdiv class\x3d"avatar-list-choice"\x3e\x26nbsp;\x3c/div\x3e';
      b += '\x3c/div\x3e\x3cdiv class\x3d"list-choice-item-text"\x3e\x3ch3\x3e' + (0,z.U)(f.name) + '\x3c/h3\x3e\x3cdiv class\x3d"list-choice-item-description"\x3e' + (0,z.U)(f.description) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
    }
    b += "\x3c/div\x3e"
  }else {
    b += "\x3cdiv\x3eNothing to show.\x3c/div\x3e"
  }
  return b
};
var Yp = function(a, b) {
  z.D.call(this);
  this.lc = a.get("popover");
  this.ba = a.get("app");
  this.D = b;
  this.en = !1
};
var Zp = function(a) {
  a = a.ba.mb.sb();
  return a === window ? window.document.body : a
};
var $p = function(a) {
  a = a.lc.L();
  var b = a.querySelector(".list-choice-items"), c = a.getBoundingClientRect(), d = (0,z.uc)(window), e = 0;
  20 > c.top ? (e = c.top - 20, a.style.top = a.offsetTop - e + "px") : 20 > d.height - c.bottom && (e = d.height - c.bottom - 20);
  e && (b.style.height = b.offsetHeight + e + "px")
};
var aq = function(a) {
  this.w = a;
  this.ha = a.get("request");
  this.U = a.get("datastore");
  this.ba = a.get("app");
  this.ba.h("startNav", this.fq, this);
  this.Ta = a.get("butter-bar");
  this.lc = a.get("popover");
  this.J = null;
  this.uq = {};
  this.Tg = null;
  this.Rt = !1;
  (0,z.rg)("sign-in-with-twitter", this.eD, this).g("sign-in-prompt", this.Ly, this).g("disabled", this.Fy, this).g("stat-link", this.kD, this).g("dismiss-interstitial", this.At, this).g("add-to-reading-list", this.Av, this).g("remove-from-reading-list", this.Av, this).g("toggle-subscribe-collection", this.uD, this)
};
var bq = function(a, b, c, d) {
  for(var e = {}, f = a.U.Pc(b).get("virtuals.postedIn"), h = 0;h < f.length;h++) {
    e[f[h].collectionId] = 1
  }
  (0,z.y)((0,z.cq)(a, function(a) {
    return!e[a.get("id")] && !(0,z.Xa)(c, a.get("slug"))
  }, !1, "Select a collection to cross-post to", d), function(a) {
    a && dq(this, b, a.get("slug"))
  }, a)
};
z.cq = function(a, b, c, d, e) {
  function f() {
    for(var a = m, c = {}, d = 0, e = 0;e < a.length;) {
      var f = a[e++], h = (0,z.pa)(f) ? "o" + (0,z.qa)(f) : (typeof f).charAt(0) + f;
      Object.prototype.hasOwnProperty.call(c, h) || (c[h] = !0, a[d++] = f)
    }
    a.length = d;
    return(new z.Sp(new z.$h(m))).Bf(b)
  }
  function h(a) {
    return{id:a.get("slug"), name:a.get("name"), description:a.get("description"), imageId:a.get("image.imageId")}
  }
  b = zb(b, function(a) {
    return a.get("virtuals.canPost")
  });
  var k = (0,z.zi)(a.U), l = a.U.wj["recently-viewed"], m = [];
  return(0,z.y)((0,z.y)((0,z.y)((0,z.Hb)(gi(k), gi(l)), function() {
    m = k.wa.concat().concat(l.wa.concat());
    if(3 > f().me()) {
      var a = this.U.wj.recommended;
      return(0,z.y)(gi(a), function() {
        (0,z.gb)(m, a.wa.concat())
      })
    }
  }, a), function() {
    var a = new Yp(this.w, f());
    a.Vt = d;
    a.nu = "Collections";
    a.Ij = !0;
    a = a.so(h);
    a.sv = c;
    e && (a.Sh = e);
    return eq(this, a)
  }, a), function(a) {
    return a ? this.U.yd[a] || null : null
  }, a)
};
var dq = function(a, b, c) {
  (0,z.A)((0,z.y)(a.ha.put("/" + c + "/" + b, {}, {Z:!0}), function() {
    (0,z.W)(fq, {collectionSlug:c, postIds:[b]});
    this.Ta.W("Post added to " + (0,z.U)(c), "success")
  }, a), (0,z.vl)(a.J, "Sorry, cross-posting failed."))
};
var eq = function(a, b) {
  a.Tg && a.Tg.close();
  b.ac();
  a.Tg = b;
  return(0,z.Gb)(b.open(), function() {
    this.Tg.close();
    this.Tg = null
  }, a)
};
var gq = function(a, b, c) {
  (a = a.U.Pc(b)) && a.set("virtuals.isOnReadingList", c);
  a = window.document.body.querySelectorAll('.reading-list-status[data-post-id\x3d"' + b + '"]');
  if(a.length) {
    var d = a[0].getAttribute("data-reading-time");
    b = (0,z.tf)(lj, {postId:b, isOnReadingList:c, readingTime:d, YE:!0});
    for(c = 0;c < a.length;c++) {
      a[c] && (a[c].outerHTML = b)
    }
  }
};
var hq = function(a) {
  this.ha = a.get("request");
  this.ba = a.get("app");
  this.wb = "/_/activity-status";
  this.Cl = new z.Uh({newActivityCount:0});
  this.ba.h("endNav", this.eq, this)
};
var iq = function(a) {
  (0,z.P)("isAuthenticated") && (0,z.P)("variants.can_view_activity") && (0,z.y)(a.ha.get(a.wb, {Z:!0, background:!0}), function(a) {
    a.value.hasOwnProperty("newActivityCount") && this.Cl.set("newActivityCount", a.value.newActivityCount)
  }, a)
};
var jq = function(a, b, c) {
  b = "";
  var d = '\x3cp class\x3d"cover-description"\x3eThe most-read posts each month.\x3c/p\x3e\x3cdiv class\x3d"cover-actions"\x3e' + (a.prevSlug ? '\x3ca href\x3d"/top-100/' + (0,z.V)(a.prevSlug) + '"\x3e\x3cdiv class\x3d"icons icons-arrow-left"\x3e\x3c/div\x3e\x3c/a\x3e' : "") + (a.nextSlug ? '\x3ca href\x3d"/top-100/' + (0,z.V)(a.nextSlug) + '"\x3e\x3cdiv class\x3d"icons icons-arrow-right"\x3e\x3c/div\x3e\x3c/a\x3e' : "") + '\x3cspan class\x3d"month-year-name"\x3e' + (0,z.U)(a.month) + " " + (0,z.U)(a.year) + 
  "\x3c/span\x3e\x3c/div\x3e", d = (0,z.yf)(a, {className:"bestof", title:"The Medium Top 100", eE:d}), e = '\x3caside class\x3d"cover cover-' + (0,z.V)(d.className) + '" data-load-img\x3d".cover-img"\x3e', f;
  if(c.variants.can_view_prl_homepage && c.variants.can_view_prl_debug) {
    f = '\x3cdiv class\x3d"prl-debug-providers"\x3eProviders\x3cul\x3e';
    for(var h = zf(d.providerPerformance), k = h.length, l = 0;l < k;l++) {
      var m = h[l];
      f += "\x3cli\x3e" + (0,z.U)(m) + "\x3cbr\x3e";
      for(var r = zf(d.providerPerformance[m]), C = r.length, H = 0;H < C;H++) {
        var Oa = r[H];
        f += (0,z.U)(Oa) + ": " + (0,z.U)(d.providerPerformance[m][Oa]) + " " + (H % 2 ? "\x3cbr\x3e" : "")
      }
      f += "\x3c/li\x3e"
    }
    f += "\x3c/ul\x3e\x3c/div\x3e"
  }else {
    f = ""
  }
  d = e + f + '\x3cdiv class\x3d"cover-img" style\x3d"background-image: url(\'' + (0,z.V)((0,z.Xf)(d.coverImgUrl)) + '\')"\x3e\x3c/div\x3e\x3cdiv class\x3d"cover-body"\x3e\x3cdiv class\x3d"cover-body-inner"\x3e\x3ch1 class\x3d"cover-title"\x3e' + (0,z.U)(d.title) + "\x3c/h1\x3e" + (d.subtitle ? '\x3ch2 class\x3d"cover-title"\x3e' + (0,z.U)(d.subtitle) + "\x3c/h2\x3e" : "") + '\x3cp class\x3d"cover-description"\x3e' + (0,z.Zf)(d.eE) + "\x3c/p\x3e" + (d.RD ? (0,z.Zf)(d.RD) : "") + "\x3c/div\x3e\x3c/div\x3e\x3c/aside\x3e";
  return b += d + '\x3cdiv class\x3d"wrapper ordered-posts bestof-page" tabindex\x3d"-1"\x3e\x3cdiv class\x3d"wrapper-inner"\x3e' + (0,z.Vo)((0,z.yf)(a, {posts:a.posts, sections:[], lo:!0, tF:!0, Wx:!0}), c) + "\x3c/div\x3e\x3c/div\x3e"
};
var kq = function(a, b) {
  z.Xi.call(this, a);
  this.ha = a.get("request");
  this.wb = b.path;
  this.sm = this.wb.split("/")[1];
  this.di = this.sm.split("-")[0];
  this.hn = this.sm.split("-")[1];
  this.U = a.get("datastore");
  this.mc = "bestof:" + this.hn + ":" + this.di
};
var lq = function(a) {
  return a.di.charAt(0).toUpperCase() + a.di.slice(1) + " " + a.hn
};
var mq = function() {
  this.De = {};
  this.ga = {};
  this.gi = {}
};
var nq = function(a) {
  return 0 === a.indexOf("//") ? window.location.protocol + a : a
};
var oq = function(a, b) {
  var c = new window.Image, d = [];
  d.push((0,z.L)(c, "load", a.Yj, a));
  d.push((0,z.L)(c, "abort", a.Ge, a));
  d.push((0,z.L)(c, "error", a.Ge, a));
  a.ga[b] = d;
  c.src = b
};
var pq = function(a, b) {
  a.ga[b] && ((0,z.pe)(a.ga[b]), delete a.ga[b])
};
var qq = function(a, b) {
  this.w = a;
  this.Hz = b;
  this.ha = a.get("request");
  this.ff = {};
  this.Ug = {};
  this.rm = {}
};
z.rq = function(a, b) {
  b = b.value;
  var c = b.mediaResourceId;
  c in a.ff ? a.ff[c].Ih(b) : (a.ff[c] = new z.Uh(b), a.Ug[b.href] = c);
  return a.ff[c]
};
z.sq = function(a, b, c) {
  z.sj.call(this, a, b, c);
  this.dm = "_obv.data._list_" + tq++;
  this.du = ""
};
z.uq = function(a, b) {
  a.du = b;
  return a
};
var vq = function(a, b, c) {
  var d = window.document.createElement("div");
  d.className = a.du;
  d.id = a.dm + (0,z.qa)(b);
  d.innerHTML = (0,z.uj)(a, b);
  (0,z.Hc)(a.o, d, "undefined" != typeof c ? c : a.o.children.length);
  return d
};
var wq = function(a) {
  return'\x3ch5 class\x3d"follow-ups-title"\x3eFurther Reading\x3c/h5\x3e\x3cdiv class\x3d"follow-ups-list"\x3e\x3c/div\x3e\x3cdiv class\x3d"follow-up-new"\x3e\x3cbutton class\x3d"btn btn-chromeless follow-up-start follow-up-link-prompt"' + (a.VD ? 'data-action\x3d"start-new-follow-up"' : 'data-action\x3d"sign-in-prompt" data-redirect\x3d"' + ig(a) + '#follow-up-editor" data-popover-type\x3d"sign-in" data-popover\x3d"Sign in to suggest further\x26nbsp;reading" data-popover-position\x3d"bottom" data-popover-signin-action\x3d"followUp"') + 
  '\x3e\x3cspan class\x3d"icons icons-add-further-reading"\x3e\x3c/span\x3e\x3cspan class\x3d"follow-ups-prompt"\x3eSuggest a link\x3c/span\x3e\x3cspan class\x3d"follow-ups-empty-prompt"\x3eSuggest a link for further reading\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"follow-up follow-up-new-editor"\x3e\x3c/div\x3e\x3c/div\x3e'
};
var xq = function(a, b, c) {
  return(a.canAdminister ? '\x3cul class\x3d"follow-up-visibility follow-up-visibility-dropdown" data-follow-up-id\x3d"' + (0,z.V)(a.followUp.followUpId) + '"\x3e' + (a.followUp.visibility == a.visibility.Go ? '\x3cli class\x3d"follow-up-visibility-item"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icons follow-up-visibility-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + 
  (0,z.V)(a.visibility.uy) + '"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : '\x3cli class\x3d"follow-up-visibility-item"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icons follow-up-visibility-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + (0,z.V)(a.visibility.Go) + '"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3c/li\x3e') + 
  (a.followUp.creatorId != a.ko ? '\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + (0,z.V)(a.visibility.ny) + '"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : a.followUp.visibility != a.visibility.Go ? '\x3cul class\x3d"follow-up-visibility" data-follow-up-id\x3d"' + (0,z.V)(a.followUp.followUpId) + '"\x3e\x3cli class\x3d"follow-up-visibility-item" data-tooltip\x3d"This link is only visible to you and the author, unless the author chooses to make it public."\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : 
  "") + (0,z.Df)("g", a.followUp.mediaResource.mediaResourceType)(a, null, c)
};
z.yq = function() {
  M.call(this)
};
z.zq = function() {
  M.call(this)
};
var Aq = function(a, b, c) {
  z.Sh.call(this);
  this.w = a;
  this.ha = a.get("request");
  this.Vg = a.get("media-resource");
  this.V = b;
  this.Yg = c;
  this.Fj = !1;
  this.dc = new z.$h;
  a = new z.Sp(this.dc);
  a.Bf(this.xA, this);
  this.Az = a;
  this.xi = {}
};
var Bq = function(a, b) {
  return(0,z.bi)(a.dc, "followUpId", b)
};
var Cq = function(a, b) {
  var c = new z.yq;
  c.Kh(b.title);
  (0,z.O)(c, "description", b.description);
  c.to(b.mediaResourceId);
  var d = z.Dk.jd(c);
  d.creator = (0,z.P)("currentUser");
  d.creatorId = d.creator.userId;
  d.visibility = a.Yg == d.creator.userId ? 2 : 1;
  d.mediaResource = a.Vg.ff[d.mediaResourceId].Ya();
  var e = new z.Uh(d);
  a.dc.add(e);
  return(0,z.A)((0,z.y)(a.ha.post("/p/" + a.V + "/follow-ups/new", c, {Z:!0, Tn:!0}), function(a) {
    Dq(this, a.value, a.references, e)
  }, a), z.Ph)
};
var Eq = function(a, b) {
  var c = Bq(a, b), d = a.dc.indexOf(c);
  a.dc.remove(c);
  return(0,z.A)((0,z.y)(a.ha.oc("/p/" + a.V + "/follow-ups/" + b), function() {
    (0,z.Zh)(c)
  }), function(a) {
    (0,z.Ph)(a);
    this.dc.jh(c, d)
  }, a)
};
var Fq = function(a, b, c) {
  a.xi[b] && a.xi[b].cancel();
  var d = Bq(a, b), e = d.get("visibility");
  d.set("visibility", c);
  return a.xi[b] = (0,z.A)((0,z.Gb)(a.ha.put("/p/" + a.V + "/follow-ups/" + b + "/visibility", {visibility:c}, {Z:!0}), function() {
    delete this.xi[b]
  }, a), function(a) {
    a instanceof z.Tb || ((0,z.Ph)(a), d.set("visibility", e))
  })
};
var Dq = function(a, b, c, d) {
  b = (0,z.Ki)(b, c).value;
  b.mediaResource ? (c = (0,z.rq)(a.Vg, b.mediaResource), b.mediaResource = c.Ya()) : (0,z.Ph)("Missing mediaResource in FU " + b.followUpId + " at id " + b.mediaResourceId);
  (d = d || (0,z.bi)(a.dc, "followUpId", b.followUpId)) ? d.Ih(b) : a.dc.add(b)
};
var Gq = function(a, b, c) {
  z.D.call(this);
  this.w = a;
  this.ba = a.get("app");
  this.J = a.get("dialog");
  this.Di = a.get("butter-bar");
  this.ka = b;
  this.V = (0,z.Wh)(b, "id");
  this.Yg = (0,z.Wh)(b, "creatorId");
  this.it = !!(0,z.P)("isAuthenticated");
  this.Oy = c;
  this.pa = this.Cj();
  this.D = new Aq(a, this.V, this.Yg);
  this.Da = new z.uk;
  (0,z.wg)(this.pa).g("start-new-follow-up", this.Ru, this).g("delete-follow-up", this.fB, this).g("set-follow-up-visibility", this.NB, this);
  (0,z.L)(this.pa, "click", this.XA, this)
};
z.Hq = function(a) {
  if(0 !== window.document.location.hash.indexOf("#fr-")) {
    return""
  }
  var b = window.document.location.hash.substr(4);
  (0,z.gl)(a.ba, "");
  return b
};
z.Iq = function(a, b) {
  var c = a.pa.querySelector('[data-follow-up-id\x3d"' + b + '"]');
  c && c.scrollIntoView(!0)
};
var Jq = function(a, b, c) {
  c = c || {};
  c.postId = a.V;
  (0,z.W)(b, c)
};
var Kq = function(a, b, c) {
  var d = Bq(a.D, b).get("visibility");
  (0,z.A)((0,z.y)(a.Da.Ob(Fq(a.D, b, c)), a.Dz.bind(a, b, d)), a.Ez, a)
};
var Lq = function(a) {
  z.D.call(this);
  this.w = a
};
var Mq = function() {
  (0,z.P)("currentUser") && mi(["identify", (0,z.P)("currentUser.userId")]);
  var a = (0,z.P)("variants.is_super_user") ? "superuser" : (0,z.P)("variants.can_create_post") ? "creator" : (0,z.P)("isAuthenticated") ? "loggedin" : "anonymous";
  (0,z.vi)(2, a, 1);
  mi(["set", {userType:a}]);
  a = {};
  a.NH = !!(0,z.P)("variants.can_use_new_homepage");
  a.WF = !!(0,z.P)("variants.can_see_post_welcome_footer");
  a.YW = !!(0,z.P)("variants.can_see_logged_out_homepage");
  a.NW = !(0,z.P)("variants.can_see_logged_out_homepage");
  a.YO = !!(0,z.P)("variants.can_see_onboarding");
  a.NO = !(0,z.P)("variants.can_see_onboarding");
  for(var b in a) {
    var c = "testBucket-" + b, d = "string" == typeof a[b] ? a[b] : "number" == typeof a[b] ? String(a[b]) : a[b] ? "true" : "false";
    mi(["set", ub(c, d)]);
    ni(Nq, {testName:c, testBucket:d})
  }
};
var Oq = function(a, b, c) {
  c = (b = a.username == (c.currentUser && c.currentUser.username)) ? "I just published " : "by @" + a.username + " ";
  var d = "";
  if(b && a.collaborators && a.collaborators.length) {
    for(var d = d + " Thanks to ", e = a.collaborators, f = e.length, h = 0;h < f;h++) {
      d += "@" + e[h].user.username + " "
    }
  }
  return a = "" + ((b ? c : "") + "“" + (0,z.ag)(a.title, a.Fo - c.length - a.Ho - 3) + "” " + (b ? "" : c) + a.url + d)
};
var Pq = function(a) {
  this.w = a
};
var Qq = function(a) {
  this.w = a
};
z.Rq = function(a) {
  return!!a.trim().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
};
var Sq = function(a) {
  for(var b = 0;b < a.length;b++) {
    if(!(0,z.Rq)(a[b])) {
      return!1
    }
  }
  return!0
};
var Tq = function(a) {
  this.Ta = a.get("butter-bar");
  this.J = a.get("dialog");
  this.ha = a.get("request")
};
var Uq = function() {
  this.Hs = {}
};
var rl = function(a, b, c, d, e, f) {
  if(c >= b.length) {
    if(d && d.object) {
      a = {};
      f && (a["*"] = f);
      for(b = 0;b < d.matches.length;b++) {
        a[d.matches[b]] = e[b]
      }
      return{object:d.object, matches:a}
    }
    return null
  }
  f = b[c];
  var h = null;
  if(d[f] && (h = rl(a, b, c + 1, d[f], e, null))) {
    return h
  }
  for(var k in d["@"]) {
    if("parent" != k) {
      var h = d["@"][k], l = {};
      h.tq in l || (l[h.tq] = h.EF.test(f));
      if(l[h.tq]) {
        e.push(f);
        if(h = rl(a, b, c + 1, h, e, null)) {
          return h
        }
        e.pop()
      }
    }
  }
  if(d[":"]) {
    e.push(f);
    if(h = rl(a, b, c + 1, d[":"], e, null)) {
      return h
    }
    e.pop()
  }
  return d["*"] ? rl(a, b, b.length, d["*"], e, b.slice(c)) : null
};
var sl = function(a) {
  return a.replace(/(^\/|\/$)/g, "").split("/")
};
var Vq = function() {
  this.DA = {};
  this.KC = {};
  this.ak = new Uq
};
var Wq = function(a) {
  this.path = a;
  this.screen = this.vk = this.jF = null;
  this.GF = []
};
var Xq = function(a, b) {
  a.screen = b;
  return a
};
var Yq = function() {
  z.Sh.call(this);
  this.nz = [];
  this.kb = z.Zq;
  var a = window.document, b = [(0,z.L)(a, "mousedown", this.Tf, this), (0,z.L)(a, "mouseup", this.Tf, this), (0,z.L)(a, "mouseover", this.Tf, this), (0,z.L)(a, "click", this.Tf, this), (0,z.L)(a, "dblclick", this.Tf, this), (0,z.L)(a, "keydown", this.Tf, this), (0,z.L)(a, "keyup", this.Tf, this), (0,z.L)(a.defaultView, "focus", this.Tf, this), (0,z.L)(a.defaultView, "blur", this.Iu, this)];
  this.nz.push({fJ:a, CL:b})
};
var $q = function(a, b) {
  a.kb != b && (a.kb = b, a.H("statechange", a.kb))
};
var ar = function(a, b, c) {
  return c.isAuthenticated ? "\x3cp\x3eYou are logged out.\x3c/p\x3e" : "\x3cp\x3eYou need to be logged in to continue.\x3c/p\x3e"
};
var br = function(a, b) {
  this.w = a;
  this.qj = b;
  a.get("app").h("startNav", this.fq, this);
  a.get("app").h("endNav", this.rB, this);
  a.get("request").h("send", this.MB, this);
  a.get("request").h("successresponse", this.GB, this);
  this.J = a.get("dialog");
  this.wt = [];
  cr(this);
  window.OB_loadErrors && (window.OB_loadErrors.forEach(this.Ge, this), window.OB_loadErrors.length = 0, window.OB_loadErrors.push = this.Ge.bind(this))
};
var cr = function(a) {
  var b = Date.now();
  window.OB_startTime && window.setTimeout(function() {
    var a = b - window.OB_startTime;
    (0,z.ri)("pageload");
    (0,z.si)("client.loadtime", a);
    3E4 < a && (0,z.ri)("slowload")
  }.bind(a), 0);
  window.performance && window.performance.timing && window.addEventListener("load", function() {
    window.setTimeout(function() {
      var a = window.performance.timing, d = a.navigationStart;
      (0,z.si)("client.perf.dns", a.domainLookupEnd - a.domainLookupStart);
      (0,z.si)("client.perf.firstByte", a.responseStart - d);
      (0,z.si)("client.perf.lastByte", a.responseEnd - d);
      (0,z.si)("client.perf.appstart", b - d);
      (0,z.si)("client.perf.domComplete", a.domComplete - d);
      (0,z.si)("client.perf.loadEnd", a.loadEventEnd - d)
    }, 500)
  }, !0)
};
var dr = function(a) {
  this.w = a;
  this.wq = er;
  this.bg = [];
  this.ku = null;
  a.get("app").h("startNav", this.iD, this);
  a.get("app").h("endNav", this.vz, this)
};
var fr = function(a) {
  if(z.gr) {
    throw Error("Tried to make two module managers. Whooops!");
  }
  z.gr = this;
  this.w = a;
  this.vu = {};
  this.wu = {};
  this.hm = {};
  this.Da = {};
  this.np = {}
};
var hr = function(a, b) {
  var c = a.vu[b], d = a.wu[b];
  if(!c || !d) {
    return Pb(Error("Module " + b + " cannot be found"))
  }
  if(a.hm[b]) {
    return(0,z.Ob)(!0)
  }
  if(a.Da[b]) {
    return a.Da[b].Je()
  }
  for(var e = (0,z.Ob)(!0), f = 0;f < c.length;f++) {
    a.hm[c[f]] || (0,z.Hb)(e, hr(a, c[f]))
  }
  c = new z.Ab;
  a.Da[b] = c;
  (0,z.A)((0,z.y)(e, function() {
    if((0,z.ja)(d)) {
      for(var a = (0,z.Ob)(!0), c = 0;c < d.length;c++) {
        (0,z.y)(a, this.pu.bind(this, d[c]))
      }
      this.np[b] = a
    }else {
      this.pu(d)
    }
  }, a), c.jg, c);
  return c.Je()
};
z.ir = function(a, b) {
  var c = a.Da[b];
  if(!c) {
    throw Error('Called finishLoading on "' + b + '", which looks like it was not in the process of loading.');
  }
  (0,z.y)(a.np[b] || (0,z.Ob)(!0), function() {
    delete this.Da[b];
    delete this.np[b];
    this.hm[b] = !0;
    c.Oa(!0)
  }, a)
};
var jr = function() {
  this.w = {};
  this.pi = {}
};
z.Mo = function(a, b) {
  if(a.w[b]) {
    return(0,z.Ob)(a.get(b))
  }
  if(!a.pi[b]) {
    throw Error('No service registered with id "' + b + '"');
  }
  return(0,z.y)(hr(z.gr, a.pi[b]), function() {
    var a = this.get(b);
    "function" == typeof a.Rc && a.Rc();
    return a
  }, a)
};
var kr = function(a, b, c) {
  if(a.w[b] || a.pi[b]) {
    throw Error('Service already registered with id "' + b + '"');
  }
  a.pi[b] = c
};
var lr = function(a) {
  this.ba = a.get("app");
  this.ha = a.get("request");
  this.im = 0;
  this.ba.h("startNav", this.mk, this);
  this.ba.h("endNav", this.uz, this);
  this.ha.h("statechange", this.refresh, this)
};
var mr = function(a) {
  a.get("app").h("endNav", this.Xj, this)
};
var nr = function(a, b) {
  var c = window.document.createElement("img");
  (0,z.oe)(c, "load", function() {
    (0,z.G)(b, "img-loaded")
  });
  c.src = a
};
z.or = function(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
};
var pr = function(a, b) {
  a && this.og(a, b)
};
var qr = function(a) {
  try {
    return!(!a || !a[rr])
  }catch(b) {
    return!1
  }
};
var sr = function(a, b, c, d, e) {
  this.Ah = a;
  this.mo = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.Ji = e;
  this.key = ++tr;
  this.$i = this.rn = !1
};
var ur = function(a) {
  a.$i = !0;
  a.Ah = null;
  a.mo = null;
  a.src = null;
  a.Ji = null
};
var vr = function(a) {
  this.src = a;
  this.za = {};
  this.sl = 0
};
var wr = function(a, b) {
  var c = b.type;
  if(!(c in a.za)) {
    return!1
  }
  var d = (0,z.Za)(a.za[c], b);
  d && (ur(b), 0 == a.za[c].length && (delete a.za[c], a.sl--));
  return d
};
var xr = function(a, b, c, d) {
  for(var e = 0;e < a.length;++e) {
    var f = a[e];
    if(!f.$i && f.Ah == b && f.capture == !!c && f.Ji == d) {
      return e
    }
  }
  return-1
};
z.yr = function(a, b, c, d, e) {
  if((0,z.ja)(b)) {
    for(var f = 0;f < b.length;f++) {
      (0,z.yr)(a, b[f], c, d, e)
    }
    return null
  }
  c = zr(c);
  if(qr(a)) {
    a = a.Xa(b, c, d, e)
  }else {
    if(!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, h = Ar(a);
    h || (a[Br] = h = new vr(a));
    c = h.add(b, c, !1, d, e);
    c.mo || (d = Cr(), c.mo = d, d.src = a, d.Ah = c, a.addEventListener ? a.addEventListener(b, d, f) : a.attachEvent(b in Dr ? Dr[b] : Dr[b] = "on" + b, d), Er++);
    a = c
  }
  return a
};
var Cr = function() {
  var a = Fr, b = Gr ? function(c) {
    return a.call(b.src, b.Ah, c)
  } : function(c) {
    c = a.call(b.src, b.Ah, c);
    if(!c) {
      return c
    }
  };
  return b
};
z.Hr = function(a, b, c, d, e) {
  if((0,z.ja)(b)) {
    for(var f = 0;f < b.length;f++) {
      (0,z.Hr)(a, b[f], c, d, e)
    }
  }else {
    c = zr(c), qr(a) ? a.Is(b, c, d, e) : a && (a = Ar(a)) && (b = a.Lk(b, c, !!d, e)) && (0,z.Cs)(b)
  }
};
z.Cs = function(a) {
  if((0,z.na)(a) || !a || a.$i) {
    return!1
  }
  var b = a.src;
  if(qr(b)) {
    return wr(b.kg, a)
  }
  var c = a.type, d = a.mo;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in Dr ? Dr[c] : Dr[c] = "on" + c, d);
  Er--;
  (c = Ar(b)) ? (wr(c, a), 0 == c.sl && (c.src = null, b[Br] = null)) : ur(a);
  return!0
};
var Ds = function(a, b, c, d) {
  var e = 1;
  if(a = Ar(a)) {
    if(b = a.za[b]) {
      for(b = (0,z.cb)(b), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.capture == c && !f.$i && (e &= !1 !== Es(f, d))
      }
    }
  }
  return Boolean(e)
};
var Es = function(a, b) {
  var c = a.Ah, d = a.Ji || a.src;
  a.rn && (0,z.Cs)(a);
  return c.call(d, b)
};
var Fr = function(a, b) {
  if(a.$i) {
    return!0
  }
  if(!Gr) {
    var c;
    if(!(c = b)) {
      a: {
        c = ["window", "event"];
        for(var d = z.Mb, e;e = c.shift();) {
          if(null != d[e]) {
            d = d[e]
          }else {
            c = null;
            break a
          }
        }
        c = d
      }
    }
    e = c;
    c = new pr(e, this);
    d = !0;
    if(!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(h) {
            f = !0
          }
        }
        if(f || void 0 == e.returnValue) {
          e.returnValue = !0
        }
      }
      e = [];
      for(f = c.currentTarget;f;f = f.parentNode) {
        e.push(f)
      }
      for(var f = a.type, k = e.length - 1;!c.wg && 0 <= k;k--) {
        c.currentTarget = e[k], d &= Ds(e[k], f, !0, c)
      }
      for(k = 0;!c.wg && k < e.length;k++) {
        c.currentTarget = e[k], d &= Ds(e[k], f, !1, c)
      }
    }
    return d
  }
  return Es(a, new pr(b, this))
};
var Ar = function(a) {
  a = a[Br];
  return a instanceof vr ? a : null
};
var zr = function(a) {
  return(0,z.oa)(a) ? a : a[Fs] || (a[Fs] = function(b) {
    return a.handleEvent(b)
  })
};
var Gs = function(a, b) {
  fi.call(this, a);
  this.ou = b
};
var Hs = function(a, b) {
  this.w = b;
  this.lD = b.get("activity").Cl;
  this.ha = b.get("request");
  this.S = a;
  this.Tb = this.lm = null;
  this.Ta = b.get("butter-bar");
  this.J = b.get("dialog");
  this.kk = null;
  Is(this);
  this.If()
};
var Is = function(a) {
  (0,z.A)((0,z.y)((0,z.y)(a.ha.get("/me/activity", {Z:!0, background:!0}), function(a) {
    var c = a.value;
    a = a.links.loadMore;
    0 < c.length && a && (this.Tb = new Gs(this.w, a), this.Tb.ee(c), this.Tb.h("add", this.CC, this));
    this.kk = new z.pp(this.w, this.Tb, 3);
    this.kk.Jh(this.S)
  }, a), a.Dd, a), z.Ph)
};
var Js = function(a, b) {
  this.gb = b.get("request");
  this.ba = b.get("app");
  this.Sm = a;
  this.kv = a.getElementsByClassName("site-nav-search")[0];
  this.Hq = a.getElementsByClassName("site-nav-search-wrapper")[0];
  this.ah = a.getElementsByClassName("site-nav-search-input-mobile")[0];
  this.oi = a.getElementsByClassName("site-nav-search-input")[0];
  this.lk = a.getElementsByClassName("site-nav-search-results")[0];
  this.lv = a.getElementsByClassName("site-nav-search-open-trigger")[0];
  this.ps = !1;
  this.If()
};
var Ks = function(a) {
  (0,z.G)(a.Sm, "site-nav-search-fade-in-bg")
};
var Ls = function(a, b, c) {
  b = "";
  if(0 < a.activities.length) {
    b += '\x3cul class\x3d"notifications-list"\x3e\x3cli class\x3d"notifications-list-heading"\x3eNotifications\x3c/li\x3e';
    for(var d = a.activities, e = d.length, f = 0;f < e;f++) {
      b += Ms({Ga:d[f], lastViewedActivityAt:a.lastViewedActivityAt}, 0, c)
    }
    b += '\x3cli class\x3d"navigable-list-item"\x3e\x3cbutton title\x3d"See Older Notifications" class\x3d"no-link btn-chromeless notifications-more" data-action\x3d"notifications-more"\x3eSee Older Notifications\x26hellip;\x3c/button\x3e\x3c/li\x3e\x3c/ul\x3e'
  }
  return b
};
var Ms = function(a, b, c) {
  b = "";
  var d = a.Ga.metadata.actors && 1 == a.Ga.metadata.actors.length ? a.Ga.metadata.actors[0] : a.Ga.metadata.actor, e = a.Ga.metadata.post, f = a.Ga.metadata.collection, h = a.Ga.metadata.note, k = a.Ga.metadata.followUp;
  if(d) {
    b += '\x3cli class\x3d"notifications-list-item ' + (a.Ga.createdAt > a.lastViewedActivityAt ? " notifications-list-item-new" : "") + ' navigable-list-item"\x3e\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.gj)({user:d, cy:d ? d.name : "", od:"icons-avatar-user-img", tabIndex:-1}, c) + '\x3c/div\x3e\x3ca class\x3d"notifications-list-item-btn" tabindex\x3d"-1" href\x3d"' + Ns({type:a.Ga.metadata.activityType, post:e, collection:f, actor:d, note:h, followUp:k}, c) + '" data-source\x3d"activity"\x3e' + 
    (0,z.U)(d.name) + " " + (0,z.Df)("i", a.Ga.metadata.activityType)({post:e, followUp:k, collection:f}, null, c) + "\x3c/a\x3e\x3c/li\x3e"
  }else {
    b += '\x3cli class\x3d"notifications-list-item ' + (a.Ga.metadata.actors && 1 < a.Ga.metadata.actors.length ? "extra-notification-avatars" : "") + ' navigable-list-item"\x3e' + (a.Ga.metadata.actors && 1 < a.Ga.metadata.actors.length ? '\x3cspan class\x3d"icons icons-circle-check notifications-icons-recommendation"\x3e\x3c/span\x3e' : '\x3cspan class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.gj)({user:d, cy:d ? d.name : "", od:"icons-avatar-user-img", tabIndex:-1}, c) + "\x3c/span\x3e") + 
    '\x3ca class\x3d"notifications-list-item-btn" tabindex\x3d"-1" href\x3d"' + Ns({type:a.Ga.metadata.activityType, post:e, collection:f, actor:d, note:h, followUp:k}, c) + '"\x3e';
    d = a.Ga.metadata.count;
    switch(d) {
      case 1:
        b += (0,z.U)(a.Ga.metadata.actors[0].name) + " ";
        break;
      case 2:
        b += (0,z.U)(a.Ga.metadata.actors[0].name) + " and " + (0,z.U)(a.Ga.metadata.actors[1].name) + " ";
        break;
      case 3:
        b += (0,z.U)(a.Ga.metadata.actors[0].name) + ", " + (0,z.U)(a.Ga.metadata.actors[1].name) + ", and " + (0,z.U)(a.Ga.metadata.actors[2].name) + " ";
        break;
      default:
        b += (0,z.U)(a.Ga.metadata.actors[0].name) + ", " + (0,z.U)(a.Ga.metadata.actors[1].name) + ", " + (0,z.U)(a.Ga.metadata.actors[2].name) + ", and " + (0,z.U)(d - 3) + " other" + (4 < d ? "s" : "") + " "
    }
    b += (0,z.Df)("i", a.Ga.metadata.activityType)({post:e, followUp:k, collection:f}, null, c) + "\x3c/a\x3e";
    if(a.Ga.metadata.actors && 1 < a.Ga.metadata.actors.length) {
      b += '\x3cdiv class\x3d"notification-user-avatar-icon-wrapper"\x3e';
      f = a.Ga.metadata.actors;
      k = f.length;
      for(d = 0;d < k;d++) {
        h = f[d], b += 3 > d ? '\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.gj)({user:h, cy:h ? h.name : "", od:"icons-avatar-user-img", tabIndex:-1}, c) + "\x3c/div\x3e" : ""
      }
      b += (3 < a.Ga.metadata.actors.length ? '\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon icons-extra"\x3e\x3cbutton class\x3d"notification-item-more" data-action\x3d"view-actors" data-action-value\x3d"' + (0,z.V)(a.Ga.links.actors) + '" dialog-title\x3d"Recommended ' + (0,z.V)(e.title) + '"\x3e\x26hellip;\x3c/button\x3e\x3c/div\x3e' : "") + "\x3c/div\x3e"
    }
    b += "\x3c/li\x3e"
  }
  return b
};
var Os = function(a, b, c) {
  var d = '\x3cul class\x3d"notification-actors-list"\x3e';
  b = a.actors;
  for(var e = b.length, f = 0;f < e;f++) {
    var h;
    h = (0,z.yf)(a, {user:b[f], od:"avatar-icon notification-actors-list-icon", Ma:"notification-actors-list-link", hx:"notification-actors-list-name"});
    var k = c;
    h = hj((0,z.yf)(h, {width:64, height:64, JE:!0}), k);
    d += '\x3cli class\x3d"notification-actors-list-item"\x3e' + h + "\x3c/li\x3e"
  }
  return d + "\x3c/ul\x3e"
};
var Ns = function(a, b) {
  var c = "";
  switch(a.type) {
    case "follow_up_published":
    ;
    case "follow_up_created":
    ;
    case "post_added_as_follow_up":
      c += hg(a, b) + "#fr-" + (0,z.V)(a.followUp.value.followUpId);
      break;
    case "post_recommended":
    ;
    case "post_collaborated_published":
      c += hg(a, b);
      break;
    case "post_cross_posted":
    ;
    case "collection_cross_posted":
    ;
    case "collection_posted":
      c += hg(a, b);
      break;
    case "post_noted":
    ;
    case "note_replied":
    ;
    case "post_note_replied":
    ;
    case "note_published":
    ;
    case "mention_in_note":
    ;
    case "mention_in_note_reply":
      c += hg(a, b) + "#" + (0,z.V)(a.note.anchor) + "-" + (0,z.V)(a.note.noteId)
  }
  return c
};
var Ps = function(a, b) {
  this.w = b;
  this.ba = b.get("app");
  this.Cl = b.get("activity").Cl;
  this.gb = b.get("request");
  this.Ta = b.get("butter-bar");
  this.ia = b.get("dom-monitor");
  this.$f = a;
  this.gm = !1;
  this.vv = window.document.body.getElementsByClassName("site-nav-overlay")[0];
  this.bi = !1;
  this.we = 0;
  (0,z.P)("isAuthenticated") && (0,z.P)("variants.can_view_activity") && new Hs(a.getElementsByClassName("site-nav-scrollable-container")[0], b);
  (0,z.P)("variants.enable_search") && (this.PC = new Js(a.getElementsByClassName("site-nav-scrollable-container")[0], b));
  this.If()
};
var Qs = function(a) {
  var b = window.document.getElementsByClassName("site-nav-list-item-active")[0];
  b && (0,z.I)(b, "site-nav-list-item-active");
  a && ((0,z.G)(a, "site-nav-list-item-active"), a.querySelector("*:not(.avatar-icon) \x3e a, input, button").focus())
};
var Rs = function(a) {
  a.gm && (a.ia.ma("scroll", a.Yd, a), a.gm = !1)
};
var Ss = function(a) {
  z.Sh.call(this);
  this.Tj = this.be = this.Jv = this.ec = null;
  this.ia = a.get("dom-monitor");
  this.ia.h("scroll", this.$c, this);
  this.ba = a.get("app");
  this.ba.h("endNav", this.Xj, this);
  Ts(this)
};
var Us = function(a) {
  if(a.ec) {
    var b = a.ec.scrollTop, c = a.ec.getBoundingClientRect().height, d = a.ec.scrollHeight, e = Date.now(), f = Math.abs(a.hu - e);
    500 < f && 1E4 < f && (a.H(Vs, {viewStartedAt:a.Jv, scrollTop:b, scrollBottom:b + c, scrollableHeight:d, loggedAt:e}), a.zA = b, a.hu = e)
  }
};
var Ts = function(a, b) {
  a.Tj = !a.Tj || b ? 2E3 : 2 * a.Tj;
  18E5 >= a.Tj && (a.be = (0,window.setTimeout)(a.VB.bind(a), a.Tj))
};
z.Ws = function() {
  return"An error occurred, and we were unable to send your verification email."
};
z.Xs = function() {
  z.D.call(this);
  this.kg = new vr(this);
  this.ID = this
};
var Ys = function(a, b, c, d) {
  b = a.kg.za[b];
  if(!b) {
    return!0
  }
  b = (0,z.cb)(b);
  for(var e = !0, f = 0;f < b.length;++f) {
    var h = b[f];
    if(h && !h.$i && h.capture == c) {
      var k = h.Ah, l = h.Ji || h.src;
      h.rn && wr(a.kg, h);
      e = !1 !== k.call(l, d) && e
    }
  }
  return e && !1 != d.Mx
};
z.Zs = function(a) {
  z.D.call(this);
  this.qe = a;
  this.cb = {}
};
da = [];
z.Mb = this;
z.ra = "closure_uid_" + (1E9 * Math.random() >>> 0);
sa = 0;
z.fh = Date.now || function() {
  return+new Date
};
(0,z.v)(za, Error);
za.prototype.name = "CustomError";
var Ga;
var La;
var Ka;
var Ja;
var Ia;
Ia = /&/g;
Ja = /</g;
Ka = />/g;
La = /\"/g;
Ga = /[&<>\"]/;
z.$s = 2147483648 * Math.random() | 0;
var ab;
ab = Array.prototype;
z.Ya = ab.indexOf ? function(a, b, c) {
  return ab.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if((0,z.ma)(a)) {
    return(0,z.ma)(b) && 1 == b.length ? a.indexOf(b, c) : -1
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
};
z.Ac = ab.forEach ? function(a, b, c) {
  ab.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = (0,z.ma)(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
z.zn = ab.filter ? function(a, b, c) {
  return ab.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, h = (0,z.ma)(a) ? a.split("") : a, k = 0;k < d;k++) {
    if(k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[f++] = l)
    }
  }
  return e
};
z.Te = ab.map ? function(a, b, c) {
  return ab.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), f = (0,z.ma)(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && (e[h] = b.call(c, f[h], h, a))
  }
  return e
};
z.Lb = ab.some ? function(a, b, c) {
  return ab.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = (0,z.ma)(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && b.call(c, e[f], f, a)) {
      return!0
    }
  }
  return!1
};
z.at = ab.every ? function(a, b, c) {
  return ab.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = (0,z.ma)(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && !b.call(c, e[f], f, a)) {
      return!1
    }
  }
  return!0
};
var tb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
Function.prototype.bind || (Function.prototype.bind = function(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.wa.apply(null, b)
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.Ya.apply(null, b)
});
Array.prototype.map || (Array.prototype.map = function(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.Te.apply(null, b)
});
Date.now || (Date.now = function() {
  return(new Date).valueOf()
});
Array.isArray || (Array.isArray = z.ja);
Object.keys || (Object.keys = ob);
(function() {
  for(var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0;c < b.length && !window.requestAnimationFrame;++c) {
    window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"]
  }
  window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
    var c = (new Date).getTime(), f = Math.max(0, 16 - (c - a)), h = window.setTimeout(function() {
      b(window.NaN)
    }, f);
    a = c + f;
    return h
  });
  window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
    (0,window.clearTimeout)(a)
  })
})();
window.URL = window.URL || window.webkitURL || window;
var dt;
z.bt = (0,z.wb)(!1);
z.ct = (0,z.wb)(!0);
dt = (0,z.wb)(null);
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Nb = z.Mb.setTimeout;
z.q = z.Ab.prototype;
z.q.cancel = function(a) {
  if(this.hd) {
    this.aj instanceof z.Ab && this.aj.cancel()
  }else {
    if(this.Zb) {
      var b = this.Zb;
      delete this.Zb;
      a ? b.cancel(a) : (b.qn--, 0 >= b.qn && b.cancel())
    }
    this.mx ? this.mx.call(this.cw, this) : this.ys = !0;
    this.hd || this.jg(new z.Tb(this))
  }
};
z.q.Yv = function(a, b) {
  this.Yq = !1;
  Bb(this, a, b)
};
z.q.Oa = function(a) {
  Db(this);
  Bb(this, !0, a)
};
z.q.jg = function(a) {
  Db(this);
  Bb(this, !1, a)
};
z.q.fg = function(a) {
  Fb(this, a.Oa, a.jg, a);
  return this
};
z.q.Je = function(a) {
  var b = new z.Ab;
  this.fg(b);
  a && (b.Zb = this, this.qn++);
  return b
};
(0,z.v)(Eb, za);
Eb.prototype.message = "Deferred has already fired";
Eb.prototype.name = "AlreadyCalledError";
(0,z.v)(z.Tb, za);
z.Tb.prototype.message = "Deferred was canceled";
z.Tb.prototype.name = "CanceledError";
var Wb = /\s*;\s*/;
z.q = z.Ub.prototype;
z.q.isEnabled = (0,z.s)(35);
z.q.set = function(a, b, c, d, e, f) {
  if(/[;=\s]/.test(a)) {
    throw Error('Invalid cookie name "' + a + '"');
  }
  if(/[;\r\n]/.test(b)) {
    throw Error('Invalid cookie value "' + b + '"');
  }
  (0,z.ia)(c) || (c = -1);
  e = e ? ";domain\x3d" + e : "";
  d = d ? ";path\x3d" + d : "";
  f = f ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires\x3d" + (new Date(1970, 1, 1)).toUTCString() : ";expires\x3d" + (new Date((0,z.fh)() + 1E3 * c)).toUTCString();
  this.vb.cookie = a + "\x3d" + b + e + d + c + f
};
z.q.get = function(a, b) {
  for(var c = a + "\x3d", d = (this.vb.cookie || "").split(Wb), e = 0, f;f = d[e];e++) {
    if(0 == f.lastIndexOf(c, 0)) {
      return f.substr(c.length)
    }
    if(f == a) {
      return""
    }
  }
  return b
};
z.q.remove = function(a, b, c) {
  var d = this.mh(a);
  this.set(a, "", 0, b, c);
  return d
};
z.q.ne = function() {
  return Vb(this).keys
};
z.q.pe = function() {
  return Vb(this).ul
};
z.q.Sn = function() {
  return!this.vb.cookie
};
z.q.me = function() {
  return this.vb.cookie ? (this.vb.cookie || "").split(Wb).length : 0
};
z.q.mh = function(a) {
  return(0,z.ia)(this.get(a))
};
z.q.clear = function() {
  for(var a = Vb(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
var et = new z.Ub(window.document);
et.bH = 3950;
var pt;
var ot;
var lt;
var kt;
var Mp;
var it;
var ht;
var gt;
var ft;
it = ht = gt = ft = !1;
var mt;
if(mt = Xb()) {
  var nt = Yb();
  ft = (0,z.Aa)(mt, "Opera");
  gt = !ft && (-1 != mt.indexOf("MSIE") || -1 != mt.indexOf("Trident"));
  (ht = !ft && -1 != mt.indexOf("WebKit")) && mt.indexOf("Mobile");
  it = !ft && !ht && !gt && "Gecko" == nt.product
}
z.Id = ft;
z.B = gt;
z.K = it;
z.Wc = ht;
pt = Yb();
ot = pt && pt.platform || "";
z.Eg = -1 != ot.indexOf("Mac");
z.jt = -1 != ot.indexOf("Win");
ot.indexOf("Linux");
Mp = !!Yb() && -1 != (Yb().appVersion || "").indexOf("X11");
var qt = Xb();
qt && qt.indexOf("Android");
kt = !!qt && -1 != qt.indexOf("iPhone");
lt = !!qt && -1 != qt.indexOf("iPad");
var bc;
a: {
  var rt = "", st;
  if(z.Id && z.Mb.opera) {
    var tt = z.Mb.opera.version, rt = "function" == typeof tt ? tt() : tt
  }else {
    if(z.K ? st = /rv\:([^\);]+)(\)|;)/ : z.B ? st = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : z.Wc && (st = /WebKit\/(\S+)/), st) {
      var ut = st.exec(Xb()), rt = ut ? ut[1] : ""
    }
  }
  if(z.B) {
    var vt = Zb();
    if(vt > (0,window.parseFloat)(rt)) {
      bc = String(vt);
      break a
    }
  }
  bc = rt
}
var ac = {}, wt = z.Mb.document, dc = wt && z.B ? Zb() || ("CSS1Compat" == wt.compatMode ? (0,window.parseInt)(bc, 10) : 5) : void 0;
var ec = 0, fc = {};
z.D.prototype.ig = !1;
z.D.prototype.bb = function() {
  if(!this.ig && (this.ig = !0, this.q(), 0 != ec)) {
    var a = (0,z.qa)(this);
    delete fc[a]
  }
};
z.D.prototype.q = function() {
  if(this.ox) {
    for(;this.ox.length;) {
      this.ox.shift()()
    }
  }
};
var pc, yc = !z.B || (0,z.cc)(9);
!z.K && !z.B || z.B && (0,z.cc)(9) || z.K && (0,z.$b)("1.9.1");
var Oc = z.B && !(0,z.$b)("9");
z.Rc = 3;
z.q = z.kc.prototype;
z.q.Fa = function() {
  return new z.kc(this.x, this.y)
};
z.q.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this
};
z.q.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this
};
z.q.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this
};
z.q.translate = function(a, b) {
  a instanceof z.kc ? (this.x += a.x, this.y += a.y) : (this.x += a, (0,z.na)(b) && (this.y += b));
  return this
};
z.q.scale = (0,z.s)(23);
z.q = z.lc.prototype;
z.q.Fa = function() {
  return new z.lc(this.width, this.height)
};
z.q.Na = function() {
  return this.width * this.height
};
z.q.Sn = function() {
  return!this.Na()
};
z.q.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
z.q.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
z.q.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
z.q.scale = (0,z.s)(22);
var tc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"}, Qc = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Sc = {IMG:" ", BR:"\n"};
z.q = nc.prototype;
z.q.kd = (0,z.ca)("vb");
z.q.L = function(a) {
  return(0,z.ma)(a) ? this.vb.getElementById(a) : a
};
z.q.Ns = nc.prototype.L;
z.q.pb = function(a, b, c) {
  return(0,z.xc)(this.vb, arguments)
};
z.q.createElement = function(a) {
  return this.vb.createElement(a)
};
z.q.createTextNode = function(a) {
  return this.vb.createTextNode(String(a))
};
z.q.Mb = function() {
  return this.vb.parentWindow || this.vb.defaultView
};
z.q.appendChild = function(a, b) {
  a.appendChild(b)
};
z.q.append = z.Fc;
z.q.removeNode = z.F;
z.q.mE = z.Ic;
z.q.contains = z.Kc;
z.Zc = "StopIteration" in z.Mb ? z.Mb.StopIteration : Error("StopIteration");
z.Xc.prototype.next = function() {
  throw z.Zc;
};
z.Xc.prototype.Dg = function() {
  return this
};
(0,z.v)(z.ad, z.Xc);
z.q = z.ad.prototype;
z.q.C = null;
z.q.Fb = 0;
z.q.Cs = !1;
z.q.of = function(a) {
  this.C = a.C;
  this.Fb = a.Fb;
  this.depth = a.depth;
  this.Ib = a.Ib;
  this.wn = a.wn
};
z.q.Fa = function() {
  return new z.ad(this.C, this.Ib, !this.wn, this.Fb, this.depth)
};
z.q.nl = (0,z.s)(49);
z.q.next = function() {
  var a;
  if(this.Cs) {
    if(!this.C || this.wn && 0 == this.depth) {
      throw z.Zc;
    }
    a = this.C;
    var b = this.Ib ? -1 : 1;
    if(this.Fb == b) {
      var c = this.Ib ? a.lastChild : a.firstChild;
      c ? (0,z.bd)(this, c) : (0,z.bd)(this, a, -1 * b)
    }else {
      (c = this.Ib ? a.previousSibling : a.nextSibling) ? (0,z.bd)(this, c) : (0,z.bd)(this, a.parentNode, -1 * b)
    }
    this.depth += this.Fb * (this.Ib ? -1 : 1)
  }else {
    this.Cs = !0
  }
  a = this.C;
  if(!this.C) {
    throw z.Zc;
  }
  return a
};
z.q.Wb = function(a) {
  return a.C == this.C && (!this.C || a.Fb == this.Fb)
};
z.q.splice = function(a) {
  var b = this.C, c = this.Ib ? 1 : -1;
  this.Fb == c && (this.Fb = -1 * c, this.depth += this.Fb * (this.Ib ? -1 : 1));
  this.Ib = !this.Ib;
  z.ad.prototype.next.call(this);
  this.Ib = !this.Ib;
  for(var c = (0,z.la)(arguments[0]) ? arguments[0] : arguments, d = c.length - 1;0 <= d;d--) {
    (0,z.Gc)(c[d], b)
  }
  (0,z.F)(b)
};
var oo;
var xt;
xt = !!z.Mb.DOMTokenList;
oo = xt ? function(a) {
  return a.classList
} : function(a) {
  a = a.className;
  return(0,z.ma)(a) && a.match(/\S+/g) || []
};
z.ed = xt ? function(a, b) {
  return a.classList.contains(b)
} : function(a, b) {
  return(0,z.Xa)(oo(a), b)
};
z.G = xt ? function(a, b) {
  a.classList.add(b)
} : function(a, b) {
  (0,z.ed)(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
};
z.hm = xt ? function(a, b) {
  (0,z.Ac)(b, function(b) {
    (0,z.G)(a, b)
  })
} : function(a, b) {
  var c = {};
  (0,z.Ac)(oo(a), function(a) {
    c[a] = !0
  });
  (0,z.Ac)(b, function(a) {
    c[a] = !0
  });
  a.className = "";
  for(var d in c) {
    a.className += 0 < a.className.length ? " " + d : d
  }
};
z.I = xt ? function(a, b) {
  a.classList.remove(b)
} : function(a, b) {
  (0,z.ed)(a, b) && (a.className = (0,z.zn)(oo(a), function(a) {
    return a != b
  }).join(" "))
};
z.gm = xt ? function(a, b) {
  (0,z.Ac)(b, function(b) {
    (0,z.I)(a, b)
  })
} : function(a, b) {
  a.className = (0,z.zn)(oo(a), function(a) {
    return!(0,z.Xa)(b, a)
  }).join(" ")
};
z.q = z.kd.prototype;
z.q.me = (0,z.ca)("ob");
z.q.pe = function() {
  nd(this);
  for(var a = [], b = 0;b < this.cb.length;b++) {
    a.push(this.rd[this.cb[b]])
  }
  return a
};
z.q.ne = function() {
  nd(this);
  return this.cb.concat()
};
z.q.mh = function(a) {
  return od(this.rd, a)
};
z.q.Wb = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.ob != a.me()) {
    return!1
  }
  var c = b || md;
  nd(this);
  for(var d, e = 0;d = this.cb[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
z.q.Sn = function() {
  return 0 == this.ob
};
z.q.clear = function() {
  this.rd = {};
  this.vl = this.ob = this.cb.length = 0
};
z.q.remove = function(a) {
  return od(this.rd, a) ? (delete this.rd[a], this.ob--, this.vl++, this.cb.length > 2 * this.ob && nd(this), !0) : !1
};
z.q.get = function(a, b) {
  return od(this.rd, a) ? this.rd[a] : b
};
z.q.set = function(a, b) {
  od(this.rd, a) || (this.ob++, this.cb.push(a), this.vl++);
  this.rd[a] = b
};
z.q.ee = function(a) {
  var b;
  a instanceof z.kd ? (b = a.ne(), a = a.pe()) : (b = ob(a), a = nb(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
z.q.Fa = function() {
  return new z.kd(this)
};
z.q.dy = (0,z.s)(60);
z.q.hj = function() {
  nd(this);
  for(var a = {}, b = 0;b < this.cb.length;b++) {
    var c = this.cb[b];
    a[c] = this.rd[c]
  }
  return a
};
z.q.Dg = function(a) {
  nd(this);
  var b = 0, c = this.cb, d = this.rd, e = this.vl, f = this, h = new z.Xc;
  h.next = function() {
    for(;;) {
      if(e != f.vl) {
        throw Error("The map has changed since the iterator was created");
      }
      if(b >= c.length) {
        throw z.Zc;
      }
      var h = c[b++];
      return a ? h : d[h]
    }
  };
  return h
};
z.q = z.pd.prototype;
z.q.Rd = (0,z.n)(!1);
z.q.kd = function() {
  return(0,z.oc)(z.B ? this.yc() : this.fa())
};
z.q.Mb = function() {
  return(0,z.wc)(this.kd())
};
z.q.containsNode = function(a, b) {
  return this.mf((0,z.Sd)(a), b)
};
z.q.po = (0,z.s)(30);
(0,z.v)(z.rd, z.ad);
(0,z.v)(z.sd, z.pd);
z.sd.prototype.mf = function(a, b) {
  var c = (0,z.qd)(this), d = (0,z.qd)(a);
  return(b ? z.Lb : z.at)(d, function(a) {
    return(0,z.Lb)(c, function(c) {
      return c.mf(a, b)
    })
  })
};
z.sd.prototype.insertNode = (0,z.s)(69);
z.sd.prototype.Ff = (0,z.s)(34);
(0,z.v)(z.td, z.rd);
z.q = z.td.prototype;
z.q.sa = null;
z.q.oa = null;
z.q.va = 0;
z.q.ta = 0;
z.q.fa = (0,z.ca)("sa");
z.q.ua = (0,z.ca)("oa");
z.q.Vk = function() {
  return this.Cs && this.C == this.oa && (!this.ta || 1 != this.Fb)
};
z.q.next = function() {
  if(this.Vk()) {
    throw z.Zc;
  }
  return z.td.s.next.call(this)
};
z.q.nl = (0,z.s)(48);
z.q.of = function(a) {
  this.sa = a.sa;
  this.oa = a.oa;
  this.va = a.va;
  this.ta = a.ta;
  this.te = a.te;
  z.td.s.of.call(this, a)
};
z.q.Fa = function() {
  var a = new z.td(this.sa, this.va, this.oa, this.ta, this.te);
  a.of(this);
  return a
};
z.q = z.ud.prototype;
z.q.Gi = (0,z.s)(47);
z.q.Kk = (0,z.s)(62);
z.q.mf = function(a, b) {
  var c = b && !a.isCollapsed(), d = a.X;
  try {
    return c ? 0 <= this.Ld(d, 0, 1) && 0 >= this.Ld(d, 1, 0) : 0 <= this.Ld(d, 0, 0) && 0 >= this.Ld(d, 1, 1)
  }catch(e) {
    if(!z.B) {
      throw e;
    }
    return!1
  }
};
z.q.containsNode = function(a, b) {
  return this.mf(Ed(a), b)
};
z.q.Dg = function() {
  return new z.td(this.fa(), this.Va(), this.ua(), this.Cb())
};
(0,z.v)(z.vd, z.ud);
z.q = z.vd.prototype;
z.q.Fa = function() {
  return new this.constructor(this.X.cloneRange())
};
z.q.yc = function() {
  return this.X.commonAncestorContainer
};
z.q.fa = function() {
  return this.X.startContainer
};
z.q.Va = function() {
  return this.X.startOffset
};
z.q.ua = function() {
  return this.X.endContainer
};
z.q.Cb = function() {
  return this.X.endOffset
};
z.q.Ld = function(a, b, c) {
  return this.X.compareBoundaryPoints(1 == c ? 1 == b ? z.Mb.Range.START_TO_START : z.Mb.Range.START_TO_END : 1 == b ? z.Mb.Range.END_TO_START : z.Mb.Range.END_TO_END, a)
};
z.q.isCollapsed = function() {
  return this.X.collapsed
};
z.q.Lb = function() {
  return this.X.toString()
};
z.q.select = function(a) {
  var b = (0,z.wc)((0,z.oc)(this.fa()));
  this.ll(b.getSelection(), a)
};
z.q.ll = function(a) {
  a.removeAllRanges();
  a.addRange(this.X)
};
z.q.sd = (0,z.s)(28);
z.q.insertNode = (0,z.s)(68);
z.q.Ff = (0,z.s)(33);
z.q.collapse = function(a) {
  this.X.collapse(a)
};
(0,z.v)(z.zd, z.vd);
z.zd.prototype.ll = function(a, b) {
  !b || this.isCollapsed() ? z.zd.s.ll.call(this, a, b) : (a.collapse(this.ua(), this.Cb()), a.extend(this.fa(), this.Va()))
};
(0,z.v)(z.Ad, z.ud);
z.q = z.Ad.prototype;
z.q.Ve = null;
z.q.sa = null;
z.q.oa = null;
z.q.va = -1;
z.q.ta = -1;
z.q.Fa = function() {
  var a = new z.Ad(this.X.duplicate(), this.Dn);
  a.Ve = this.Ve;
  a.sa = this.sa;
  a.oa = this.oa;
  return a
};
z.q.Kd = function() {
  this.Ve = this.sa = this.oa = null;
  this.va = this.ta = -1
};
z.q.yc = function() {
  if(!this.Ve) {
    var a = this.X.text, b = this.X.duplicate(), c = a.replace(/ +$/, "");
    (c = a.length - c.length) && b.moveEnd("character", -c);
    c = b.parentElement();
    b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
    if(this.isCollapsed() && 0 < b) {
      return this.Ve = c
    }
    for(;b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) {
      c = c.parentNode
    }
    for(;1 == c.childNodes.length && c.innerText == (c.firstChild.nodeType == z.Rc ? c.firstChild.nodeValue : c.firstChild.innerText) && xd(c.firstChild);) {
      c = c.firstChild
    }
    0 == a.length && (c = Cd(this, c));
    this.Ve = c
  }
  return this.Ve
};
z.q.fa = function() {
  this.sa || (this.sa = Dd(this, 1), this.isCollapsed() && (this.oa = this.sa));
  return this.sa
};
z.q.Va = function() {
  0 > this.va && (this.va = Fd(this, 1), this.isCollapsed() && (this.ta = this.va));
  return this.va
};
z.q.ua = function() {
  if(this.isCollapsed()) {
    return this.fa()
  }
  this.oa || (this.oa = Dd(this, 0));
  return this.oa
};
z.q.Cb = function() {
  if(this.isCollapsed()) {
    return this.Va()
  }
  0 > this.ta && (this.ta = Fd(this, 0), this.isCollapsed() && (this.va = this.ta));
  return this.ta
};
z.q.Ld = function(a, b, c) {
  return this.X.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
};
z.q.Se = (0,z.s)(79);
z.q.isCollapsed = function() {
  return 0 == this.X.compareEndPoints("StartToEnd", this.X)
};
z.q.Lb = function() {
  return this.X.text
};
z.q.select = function() {
  this.X.select()
};
z.q.sd = (0,z.s)(27);
z.q.insertNode = (0,z.s)(67);
z.q.Ff = (0,z.s)(32);
z.q.collapse = function(a) {
  this.X.collapse(a);
  a ? (this.oa = this.sa, this.ta = this.va) : (this.sa = this.oa, this.va = this.ta)
};
(0,z.v)(z.Gd, z.vd);
z.Gd.prototype.ll = function(a) {
  a.collapse(this.fa(), this.Va());
  this.ua() == this.fa() && this.Cb() == this.Va() || a.extend(this.ua(), this.Cb());
  0 == a.rangeCount && a.addRange(this.X)
};
(0,z.v)(z.Hd, z.vd);
z.Hd.prototype.Ld = function(a, b, c) {
  return(0,z.$b)("528") ? z.Hd.s.Ld.call(this, a, b, c) : this.X.compareBoundaryPoints(1 == c ? 1 == b ? z.Mb.Range.START_TO_START : z.Mb.Range.END_TO_START : 1 == b ? z.Mb.Range.START_TO_END : z.Mb.Range.END_TO_END, a)
};
z.Hd.prototype.ll = function(a, b) {
  a.removeAllRanges();
  b ? a.setBaseAndExtent(this.ua(), this.Cb(), this.fa(), this.Va()) : a.setBaseAndExtent(this.fa(), this.Va(), this.ua(), this.Cb())
};
(0,z.v)(z.Jd, z.pd);
z.q = z.Jd.prototype;
z.q.lh = null;
z.q.sa = null;
z.q.va = null;
z.q.oa = null;
z.q.ta = null;
z.q.te = !1;
z.q.Fa = function() {
  var a = new z.Jd;
  a.lh = this.lh;
  a.sa = this.sa;
  a.va = this.va;
  a.oa = this.oa;
  a.ta = this.ta;
  a.te = this.te;
  return a
};
z.q.l = (0,z.n)("text");
z.q.Oc = (0,z.s)(83);
z.q.Kd = function() {
  this.sa = this.va = this.oa = this.ta = null
};
z.q.Hi = (0,z.n)(1);
z.q.oe = function() {
  return this
};
z.q.yc = function() {
  return(0,z.Ld)(this).yc()
};
z.q.fa = function() {
  return this.sa || (this.sa = (0,z.Ld)(this).fa())
};
z.q.Va = function() {
  return null != this.va ? this.va : this.va = (0,z.Ld)(this).Va()
};
z.q.Gi = (0,z.s)(46);
z.q.ua = function() {
  return this.oa || (this.oa = (0,z.Ld)(this).ua())
};
z.q.Cb = function() {
  return null != this.ta ? this.ta : this.ta = (0,z.Ld)(this).Cb()
};
z.q.Kk = (0,z.s)(61);
z.q.Rd = (0,z.ca)("te");
z.q.mf = function(a, b) {
  var c = a.l();
  return"text" == c ? (0,z.Ld)(this).mf((0,z.Ld)(a), b) : "control" == c ? (c = (0,z.Pd)(a), (b ? z.Lb : z.at)(c, function(a) {
    return this.containsNode(a, b)
  }, this)) : !1
};
z.q.Se = (0,z.s)(78);
z.q.isCollapsed = function() {
  return(0,z.Ld)(this).isCollapsed()
};
z.q.Lb = function() {
  return(0,z.Ld)(this).Lb()
};
z.q.Dg = function() {
  return new z.td(this.fa(), this.Va(), this.ua(), this.Cb())
};
z.q.select = function() {
  (0,z.Ld)(this).select(this.te)
};
z.q.sd = (0,z.s)(26);
z.q.insertNode = (0,z.s)(66);
z.q.Ff = (0,z.s)(31);
z.q.kl = (0,z.s)(81);
z.q.collapse = function(a) {
  a = this.Rd() ? !a : a;
  this.lh && this.lh.collapse(a);
  a ? (this.oa = this.sa, this.ta = this.va) : (this.sa = this.oa, this.va = this.ta);
  this.te = !1
};
(0,z.v)(z.Md, z.sd);
z.q = z.Md.prototype;
z.q.X = null;
z.q.Sb = null;
z.q.ol = null;
z.q.Kd = function() {
  this.ol = this.Sb = null
};
z.q.Fa = function() {
  return Od.apply(this, (0,z.Pd)(this))
};
z.q.l = (0,z.n)("control");
z.q.Oc = (0,z.s)(82);
z.q.Hi = function() {
  return this.X ? this.X.length : 0
};
z.q.oe = function(a) {
  a = this.X.item(a);
  return(0,z.Kd)(Ed(a), void 0)
};
z.q.yc = function() {
  return z.Lc.apply(null, (0,z.Pd)(this))
};
z.q.fa = function() {
  return Qd(this)[0]
};
z.q.Va = (0,z.n)(0);
z.q.ua = function() {
  var a = Qd(this), b = (0,z.Ta)(a);
  return(0,z.Va)(a, function(a) {
    return(0,z.Kc)(a, b)
  })
};
z.q.Cb = function() {
  return this.ua().childNodes.length
};
z.q.Se = (0,z.s)(77);
z.q.isCollapsed = function() {
  return!this.X || !this.X.length
};
z.q.Lb = (0,z.n)("");
z.q.Dg = function() {
  return new Rd(this)
};
z.q.select = function() {
  this.X && this.X.select()
};
z.q.sd = (0,z.s)(25);
z.q.po = (0,z.s)(29);
z.q.kl = (0,z.s)(80);
z.q.collapse = function() {
  this.X = null;
  this.Kd()
};
(0,z.v)(Rd, z.rd);
z.q = Rd.prototype;
z.q.sa = null;
z.q.oa = null;
z.q.Sb = null;
z.q.fa = (0,z.ca)("sa");
z.q.ua = (0,z.ca)("oa");
z.q.Vk = function() {
  return!this.depth && !this.Sb.length
};
z.q.next = function() {
  if(this.Vk()) {
    throw z.Zc;
  }
  if(!this.depth) {
    var a = this.Sb.shift();
    (0,z.bd)(this, a, 1, 1);
    return a
  }
  return Rd.s.next.call(this)
};
z.q.of = function(a) {
  this.Sb = a.Sb;
  this.sa = a.sa;
  this.oa = a.oa;
  Rd.s.of.call(this, a)
};
z.q.Fa = function() {
  var a = new Rd(null);
  a.of(this);
  return a
};
(0,z.vb)("ADDRESS", "ARTICLE", "ASIDE", "BLOCKQUOTE", "BODY", "CAPTION", "CENTER", "COL", "COLGROUP", "DETAILS", "DIR", "DIV", "DL", "DD", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "ISINDEX", "OL", "LI", "MAP", "MENU", "NAV", "OPTGROUP", "OPTION", "P", "PRE", "SECTION", "SUMMARY", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL");
(0,z.vb)("IMG", "IFRAME", "EMBED");
var nl;
var Lt;
var Kt;
var Ht;
var Gt;
var yt, zt, At, Bt, Ct, Dt, Et;
Et = Dt = Ct = Bt = At = zt = yt = !1;
var Ft = Xb();
Ft && (-1 != Ft.indexOf("Firefox") ? yt = !0 : -1 != Ft.indexOf("Camino") ? zt = !0 : -1 != Ft.indexOf("iPhone") || -1 != Ft.indexOf("iPod") ? At = !0 : -1 != Ft.indexOf("iPad") ? Bt = !0 : -1 != Ft.indexOf("Chrome") ? Dt = !0 : -1 != Ft.indexOf("Android") ? Ct = !0 : -1 != Ft.indexOf("Safari") && (Et = !0));
Gt = yt;
Ht = zt;
z.It = At;
z.Jt = Bt;
Kt = Ct;
Lt = Dt;
nl = Et;
var Mt = function() {
  if(Gt) {
    return Td(/Firefox\/([0-9.]+)/)
  }
  if(z.B || z.Id) {
    return bc
  }
  if(Lt) {
    return Td(/Chrome\/([0-9.]+)/)
  }
  if(nl) {
    return Td(/Version\/([0-9.]+)/)
  }
  if(z.It || z.Jt) {
    var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Xb());
    if(a) {
      return a[1] + "." + a[2]
    }
  }else {
    if(Kt) {
      return(a = Td(/Android\s+([0-9.]+)/)) ? a : Td(/Version\/([0-9.]+)/)
    }
    if(Ht) {
      return Td(/Camino\/([0-9.]+)/)
    }
  }
  return""
}();
z.Nt = z.B && !(0,z.cc)(9);
z.Ot = z.K || z.Wc || z.Id || z.B && (0,z.cc)(9);
z.Pt = z.B || z.Wc || z.Id || !1;
z.Qt = z.Wc || !1;
z.Rt = z.B || z.Wc || z.Id;
z.Wc && (0,z.$b)("534.16");
z.St = z.K && !0;
z.Tt = z.K || z.Wc || z.Id;
z.Ut = z.K || z.Id;
z.B && (0,z.$b)("7.0");
z.Vt = z.K && (0,z.$b)("1.8") || z.Wc || z.Id;
z.Wt = z.Wc || z.B && (0,z.$b)("9");
z.B || z.Id || z.K && (0,z.$b)("1.9");
z.Xt = z.K || z.Wc && !(0,z.$b)("527");
z.Yt = z.B || z.Id;
z.Zt = z.B || z.Wc && (0,z.$b)("525");
z.Wc && (0,z.$b)("531");
z.$t = z.Wc && !(0,z.$b)("528");
z.K && (0,z.$b)("1.9") || z.B || z.Id || z.Wc && (0,z.$b)("531");
z.au = z.B || z.K || z.Id;
z.bu = z.K || z.Wc && !(0,z.$b)("526");
z.cu = z.B || z.Id;
z.du = !z.B && !z.Id;
z.eu = !z.Wc;
Lt && 0 <= Pa(Mt, "4") || nl && (0,z.$b)("533") || z.K && (0,z.$b)("2.0") || z.B && (0,z.$b)("10");
z.Id && (0,z.$b)("11.10");
Lt && Pa(Mt, "12");
var Gp;
z.fu = z.B ? "focusin" : "DOMFocusIn";
Gp = z.B ? "focusout" : "DOMFocusOut";
z.Ap = "load";
z.cj = z.Wc ? "webkitTransitionEnd" : z.Id ? "otransitionend" : "transitionend";
z.q = z.Yd.prototype;
z.q.Fa = function() {
  return new z.Yd(this.left, this.top, this.width, this.height)
};
z.q.contains = function(a) {
  return a instanceof z.Yd ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
z.q.Mc = (0,z.s)(18);
z.q.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
z.q.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
z.q.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
z.q.translate = function(a, b) {
  a instanceof z.kc ? (this.left += a.x, this.top += a.y) : (this.left += a, (0,z.na)(b) && (this.top += b));
  return this
};
z.q.scale = (0,z.s)(21);
var je = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
(0,z.vb)("text", "file", "url");
ne[" "] = z.fa;
var ye = {BLOCKQUOTE:!0, PRE:!0, P:!0, H1:!0, H2:!0, H3:!0, HR:!0, DIV:!0, FIGURE:!0, UL:!0, OL:!0}, se = !!window.addEventListener, te = se ? "addEventListener" : "attachEvent", ue = se ? "removeEventListener" : "detachEvent";
var Oe = {};
(0,z.v)(z.Pe, z.Ab);
Qe("start");
Qe("iteration");
var gu = Qe("end");
z.q = z.Pe.prototype;
z.q.lz = function() {
  (0,z.pe)(this.Qo);
  this.Qo = null;
  (0,z.Zd)(this.ya, "animation", "")
};
z.q.start = function() {
  if("unsupported" == Ne()) {
    return this.Oa(), this
  }
  (0,z.be)(this.ya, "animation");
  var a = (0,z.Te)(this.Km, function(a) {
    var c = [a.name, a.duration + "ms"];
    a.timing && c.push(a.timing);
    a.pc && c.push(a.pc + "ms");
    a.fill && c.push(a.fill);
    a.direction && c.push(a.direction);
    a.XE && c.push(a.XE);
    return c.join(" ")
  });
  this.Qo = (0,z.L)(this.ya, gu, this.QA, this);
  (0,z.Zd)(this.ya, "animation", a.join(","));
  Se(this);
  return this
};
z.q.pause = function(a) {
  return(0,z.Re)(this, !0, a)
};
z.q.jl = (0,z.s)(44);
z.q.QA = function(a) {
  var b = this.Il[a.animationName] = !0;
  this.Km.forEach(function(c) {
    b = b && !!this.Il[c.name];
    c.name == a.animationName && (c.paused = !0)
  }, this);
  b && this.Oa()
};
z.q = Ue.prototype;
z.q.Bm = null;
z.q.kq = null;
z.q.toString = (0,z.ca)("jq");
z.q.vk = function(a) {
  Ve(this);
  var b = this.Bm.concat(), c;
  for(c in this.kq) {
    var d = this.kq[c];
    b[d.index] = d.qa(a[c])
  }
  return b.join("/")
};
z.q.parse = function(a) {
  Ve(this);
  a = a.split("/").map(window.decodeURIComponent);
  for(var b = {}, c = 0;c < a.length;c++) {
    ":" == this.Bm[c].charAt(0) && (b[this.Bm[c].substr(1)] = a[c])
  }
  return b
};
var We = /^:([^\[]*)(?:\[pad=([0-9]+)\])?$/;
Xe.prototype.qa = function(a) {
  a = String(a);
  if(null != this.padding) {
    var b = Math.max(0, this.padding - a.length);
    a = Array(b + 1).join("0") + a
  }else {
    if("number" === typeof a) {
      throw Error("All numeric range keys must be padded: " + a);
    }
  }
  return(0,window.encodeURIComponent)(a)
};
var $e = {id:!0, column:!0, hashKey:!0, rangeKey:!0};
z.q = M.prototype;
z.q.t = function(a) {
  Ze(this, a);
  return a in this.D ? this.D[a].hj() : null
};
z.q.Ih = function(a) {
  for(var b in a) {
    b in this.Md().fields ? (0,z.O)(this, b, a[b]) : (z.Mb.console && "column" !== b && window.console.warn("Trying to set field not in schema:", b, this.Md().name), this.D[b] = a[b])
  }
  return this
};
z.q.xw = function() {
  return this.D[this.Md().tb]
};
z.q.pE = function() {
  return this.D.column || this.Md().lb.vk(this.D)
};
z.q.hj = function() {
  var a = {}, b = this.Md().fields, c;
  for(c in b) {
    var d = b[c];
    "object" == typeof d && d.l().prototype instanceof M ? a[c] = this.t(c) : a[c] = (0,z.N)(this, c)
  }
  this.D.id && (a.id = this.D.id);
  return a
};
z.q.re = function() {
  var a = this.Md();
  return void 0 === a.re || a.re
};
z.q.Wb = function(a) {
  if(this.constructor != a.constructor) {
    return!1
  }
  var b = this.Md().fields, c;
  for(c in b) {
    var d = b[c], e = this.D[c], f = a.D[c], h = !1, h = d.F() ? e && f ? e.length == f.length && e.every(function(a, b) {
      return ff(this, d, a, f[b])
    }, this) : e === f : ff(this, d, e, f);
    if(!h) {
      return!1
    }
  }
  return!0
};
hf.prototype.jd = function() {
  throw Error();
};
hf.prototype.Wc = function() {
  throw Error();
};
hf.prototype.Fa = function(a) {
  return this.Wc(a.constructor, this.jd(a))
};
(0,z.v)(jf, hf);
z.Dk = new jf;
jf.prototype.jd = function(a) {
  var b = {}, c = a.Md().fields, d;
  for(d in c) {
    if((0,z.bf)(a, d)) {
      var e = b, f = d, h;
      h = c[d];
      var k = (0,z.N)(a, d);
      if(h.F()) {
        if(!Array.isArray(k)) {
          throw Error("malformed message " + k);
        }
        for(var l = [], m = 0;m < k.length;m++) {
          l[m] = lf(this, h, k[m])
        }
        h = l
      }else {
        h = lf(this, h, k)
      }
      e[f] = h
    }
  }
  return b
};
jf.prototype.Wc = function(a, b, c) {
  if(b instanceof M) {
    throw Error("Already a PB message");
  }
  a = new a;
  (0,z.Ye)(a, !!c);
  var d = a.Md().fields, e;
  for(e in b) {
    if(d.hasOwnProperty(e)) {
      var f = a, h = e, k;
      k = d[e];
      var l = b[e], m = !!c;
      if(k.F()) {
        if(!Array.isArray(l)) {
          throw Error("Expected array, found " + l);
        }
        for(var r = [], C = 0;C < l.length;C++) {
          r[C] = kf(this, k, l[C], m)
        }
        k = r
      }else {
        k = kf(this, k, l, m)
      }
      (0,z.O)(f, h, k)
    }else {
      f = 'Trying to set field "' + e + '" not in schema "' + a.Md().name + '"';
      if(c) {
        throw Error(f);
      }
      z.Mb.console && z.Mb.console.warn && window.console.warn(f)
    }
  }
  return a
};
var hu = {iH:1, sG:2, jH:3, mH:4, iG:5, IG:6, $isProtoEnum:!0};
(0,z.v)(z.mf, M);
df(z.mf, !1, {name:"InternalReferrer", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{type:{l:function() {
  return hu
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, postId:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}, collectionId:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(4), defaultValue:(0,z.g)()}, profileId:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(5), defaultValue:(0,z.g)()}}});
z.mf.prototype.l = function() {
  return(0,z.N)(this, "type")
};
z.mf.prototype.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
z.mf.prototype.xa = (0,z.s)(58);
(0,z.v)(nf, M);
df(nf, !1, {name:"SearchReferrer", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{domain:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, keywords:{l:function() {
  return String
}, F:(0,z.n)(!0), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}}});
nf.prototype.In = function() {
  return(0,z.N)(this, "domain")
};
nf.prototype.rs = function(a) {
  return(0,z.O)(this, "domain", a)
};
(0,z.v)(of, M);
df(of, !1, {name:"SiteReferrer", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{href:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, title:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}}});
of.prototype.mg = function() {
  return(0,z.N)(this, "href")
};
of.prototype.ts = function(a) {
  return(0,z.O)(this, "href", a)
};
of.prototype.Od = function() {
  return(0,z.N)(this, "title")
};
of.prototype.Kh = function(a) {
  return(0,z.O)(this, "title", a)
};
var Zn = new z.lc(500, 250), rf = (0,z.rb)({baseUrl:"baseUrl", bestOfFirstSlug:"bestOfFirstSlug", bestOfLatestSlug:"bestOfLatestSlug", buildLabel:"buildLabel", contributeSoonUrl:"contributeSoonUrl", currentUser:"currentUser", defaultPreviewImage:"defaultPreviewImage", defaultUserImage:"defaultUserImage", pr:"deviceHeight", deviceWidth:"deviceWidth", bJ:"deviceWidthImageBucket", embedded:"embedded", facebookKey:"facebookKey", howToPostUrl:"howToPostUrl", isCurrentUserVerified:"isCurrentUserVerified", 
isAuthenticated:"isAuthenticated", language:"language", miroUrl:"miroUrl", moduleUrls:"moduleUrls", postColumnWidth:"postColumnWidth", productName:"productName", useragent:"useragent", variants:"variants", welcomeFooterImg:"welcomeFooterImg", welcomeUrl:"welcomeUrl"});
Object.keys(rf);
z.iu = RegExp("(^|[^a-z0-9_!#$%^\x26*@＠/])(?:[@＠])([a-z0-9_]{1,15})", "gi");
pf.prototype.Fa = function() {
  return new pf(this.start, this.end)
};
var ju = "sz", xf = new pf(600, 2E3), $n = new pf(200, 2E3);
z.sf = {};
z.ku = {"":1, n:Math.pow(1024, -3), u:Math.pow(1024, -2), m:1 / 1024, k:1024, K:1024, M:Math.pow(1024, 2), G:Math.pow(1024, 3), T:Math.pow(1024, 4), P:Math.pow(1024, 5)};
z.B && (0,z.$b)(8);
var Ff = {}, Nf = {}, ho = {}, $f = {};
var Bf = {}, Cf = {}, Wf = /['()]/g, bg = {"\x00":"\x26#0;", '"':"\x26quot;", "\x26":"\x26amp;", "'":"\x26#39;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", "\t":"\x26#9;", "\n":"\x26#10;", "\x0B":"\x26#11;", "\f":"\x26#12;", "\r":"\x26#13;", " ":"\x26#32;", "-":"\x26#45;", "/":"\x26#47;", "\x3d":"\x26#61;", "`":"\x26#96;", "":"\x26#133;", " ":"\x26#160;", "\u2028":"\x26#8232;", "\u2029":"\x26#8233;"}, cg = {"\x00":"%00", "":"%01", "":"%02", "":"%03", "":"%04", "":"%05", "":"%06", "":"%07", "\b":"%08", 
"\t":"%09", "\n":"%0A", "\x0B":"%0B", "\f":"%0C", "\r":"%0D", "":"%0E", "":"%0F", "":"%10", "":"%11", "":"%12", "":"%13", "":"%14", "":"%15", "":"%16", "":"%17", "":"%18", "":"%19", "":"%1A", "":"%1B", "":"%1C", "":"%1D", "":"%1E", "":"%1F", " ":"%20", '"':"%22", "'":"%27", "(":"%28", ")":"%29", "\x3c":"%3C", "\x3e":"%3E", "\\":"%5C", "{":"%7B", "}":"%7D", "":"%7F", "":"%C2%85", " ":"%C2%A0", "\u2028":"%E2%80%A8", "\u2029":"%E2%80%A9", "！":"%EF%BC%81", "＃":"%EF%BC%83", "＄":"%EF%BC%84", 
"＆":"%EF%BC%86", "＇":"%EF%BC%87", "（":"%EF%BC%88", "）":"%EF%BC%89", "＊":"%EF%BC%8A", "＋":"%EF%BC%8B", "，":"%EF%BC%8C", "／":"%EF%BC%8F", "：":"%EF%BC%9A", "；":"%EF%BC%9B", "＝":"%EF%BC%9D", "？":"%EF%BC%9F", "＠":"%EF%BC%A0", "［":"%EF%BC%BB", "］":"%EF%BC%BD"}, Gf = /[\x00\x22\x26\x27\x3c\x3e]/g, Kf = /[\x00\x22\x27\x3c\x3e]/g, Of = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, io = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i, 
dg = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i, fg = /^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i, If = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, Jf = /</g;
(0,z.v)(lg, z.D);
lg.prototype.q = function() {
  (0,z.pe)(this.eu);
  delete this.eu;
  lg.s.q.call(this)
};
lg.prototype.Qe = function() {
  var a = this.V ? ci(this.$, this.V) + 1 : 0, b = (0,z.ai)(this.$, a);
  return b ? (0,z.Ob)(b) : (0,z.y)(ii(this.$, 5), function() {
    return(0,z.ai)(this.$, a)
  }, this)
};
lg.prototype.dq = function(a) {
  39 == a.keyCode && "INPUT" != a.target.tagName && "TEXTAREA" != a.target.tagName && (0,z.y)(this.Qe(), function(a) {
    a ? (this.V = a.get("id"), a = (0,z.tf)(ig, {post:a.Ya()}), this.ba.navigate(a, {rl:this.cn.bind(this)})) : this.J.open({title:"No more posts", bodyHtml:"You have come to the end of your PRL", type:z.wl})
  }, this)
};
lg.prototype.cn = function(a, b) {
  var c = new z.Pe(a, {name:"fade-back-out", duration:500}), d = new z.Pe(b, {name:"slide-left-in", duration:500});
  (0,z.y)(c, function() {
    a.style.visibility = "hidden";
    a.style.display = "none";
    (0,z.Ie)(a)
  });
  b.style.display = "block";
  b.style.visibility = "visible";
  (0,z.Ie)(b);
  d.start();
  c.start();
  return d
};
pg.prototype.g = function(a, b, c) {
  this.lf[a] || (this.lf[a] = []);
  this.lf[a].push({Fn:b, yn:c});
  return this
};
pg.prototype.clear = function(a) {
  return"undefined" == typeof a ? (this.lf = {}, !0) : qg(this, a) ? (delete this.lf[a], !0) : !1
};
pg.prototype.Ik = function(a) {
  var b, c = [];
  qg(this, a.vd || "") && (0,z.gb)(c, this.lf[a.vd]);
  qg(this, "*") && (0,z.gb)(c, this.lf["*"]);
  for(var d = 0;d < c.length;d++) {
    b = b || !!c[d].Fn.call(c[d].yn, a)
  }
  return b
};
var tg = null, vg = !1, yg = {}, xg = 0;
var Ng = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), Mg = z.Wc;
z.q = Og.prototype;
z.q.Hh = "";
z.q.Ao = "";
z.q.rr = "";
z.q.jo = null;
z.q.bl = "";
z.q.Gn = "";
z.q.UE = !1;
z.q.Pd = !1;
z.q.toString = function() {
  var a = [], b = this.Hh;
  b && a.push(Ug(b, lu), ":");
  if(b = this.In()) {
    a.push("//");
    var c = this.Ao;
    c && a.push(Ug(c, lu), "@");
    a.push((0,window.encodeURIComponent)(String(b)));
    b = this.jo;
    null != b && a.push(":", String(b))
  }
  if(b = this.bl) {
    this.rr && "/" != b.charAt(0) && a.push("/"), a.push(Ug(b, "/" == b.charAt(0) ? mu : nu))
  }
  (b = this.xg.toString()) && a.push("?", b);
  (b = this.Gn) && a.push("#", Ug(b, ou));
  return a.join("")
};
z.q.Fa = function() {
  return new Og(this)
};
z.q.In = (0,z.ca)("rr");
z.q.rs = function(a, b) {
  Qg(this);
  this.rr = b ? a ? (0,window.decodeURIComponent)(a) : "" : a;
  return this
};
z.q.us = function(a) {
  this.Pd = a;
  this.xg && this.xg.us(a);
  return this
};
var lu = /[#\/\?@]/g, nu = /[\#\?:]/g, mu = /[\#\?]/g, Vg = /[\#\?@]/g, ou = /#/g;
z.q = Tg.prototype;
z.q.Eb = null;
z.q.ob = null;
z.q.me = function() {
  Xg(this);
  return this.ob
};
z.q.add = function(a, b) {
  Xg(this);
  this.gd = null;
  a = Yg(this, a);
  var c = this.Eb.get(a);
  c || this.Eb.set(a, c = []);
  c.push(b);
  this.ob++;
  return this
};
z.q.remove = function(a) {
  Xg(this);
  a = Yg(this, a);
  return this.Eb.mh(a) ? (this.gd = null, this.ob -= this.Eb.get(a).length, this.Eb.remove(a)) : !1
};
z.q.clear = function() {
  this.Eb = this.gd = null;
  this.ob = 0
};
z.q.Sn = function() {
  Xg(this);
  return 0 == this.ob
};
z.q.mh = function(a) {
  Xg(this);
  a = Yg(this, a);
  return this.Eb.mh(a)
};
z.q.ne = function() {
  Xg(this);
  for(var a = this.Eb.pe(), b = this.Eb.ne(), c = [], d = 0;d < b.length;d++) {
    for(var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
z.q.pe = function(a) {
  Xg(this);
  var b = [];
  if((0,z.ma)(a)) {
    this.mh(a) && (b = bb(b, this.Eb.get(Yg(this, a))))
  }else {
    a = this.Eb.pe();
    for(var c = 0;c < a.length;c++) {
      b = bb(b, a[c])
    }
  }
  return b
};
z.q.set = function(a, b) {
  Xg(this);
  this.gd = null;
  a = Yg(this, a);
  this.mh(a) && (this.ob -= this.Eb.get(a).length);
  this.Eb.set(a, [b]);
  this.ob++;
  return this
};
z.q.get = function(a, b) {
  var c = a ? this.pe(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
z.q.toString = function() {
  if(this.gd) {
    return this.gd
  }
  if(!this.Eb) {
    return""
  }
  for(var a = [], b = this.Eb.ne(), c = 0;c < b.length;c++) {
    for(var d = b[c], e = (0,window.encodeURIComponent)(String(d)), d = this.pe(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "\x3d" + (0,window.encodeURIComponent)(String(d[f])));
      a.push(h)
    }
  }
  return this.gd = a.join("\x26")
};
z.q.Fa = function() {
  var a = new Tg;
  a.gd = this.gd;
  this.Eb && (a.Eb = this.Eb.Fa(), a.ob = this.ob);
  return a
};
z.q.us = function(a) {
  a && !this.Pd && (Xg(this), this.gd = null, jd(this.Eb, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), Zg(this, d, a))
  }, this));
  this.Pd = a
};
z.q.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    jd(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
(0,z.v)($g, z.D);
z.q = $g.prototype;
z.q.Xw = 1;
z.q.fl = 0;
z.q.h = function(a, b, c) {
  var d = this.ue[a];
  d || (d = this.ue[a] = []);
  var e = this.Xw;
  this.ud[e] = a;
  this.ud[e + 1] = b;
  this.ud[e + 2] = c;
  this.Xw = e + 3;
  d.push(e);
  return e
};
z.q.ma = function(a, b, c) {
  if(a = this.ue[a]) {
    var d = this.ud;
    if(a = (0,z.Va)(a, function(a) {
      return d[a + 1] == b && d[a + 2] == c
    })) {
      return this.tl(a)
    }
  }
  return!1
};
z.q.tl = function(a) {
  if(0 != this.fl) {
    return this.dl || (this.dl = []), this.dl.push(a), !1
  }
  var b = this.ud[a];
  if(b) {
    var c = this.ue[b];
    c && (0,z.Za)(c, a);
    delete this.ud[a];
    delete this.ud[a + 1];
    delete this.ud[a + 2]
  }
  return!!b
};
z.q.H = function(a, b) {
  var c = this.ue[a];
  if(c) {
    this.fl++;
    for(var d = (0,z.ib)(arguments, 1), e = 0, f = c.length;e < f;e++) {
      var h = c[e];
      this.ud[h + 1].apply(this.ud[h + 2], d)
    }
    this.fl--;
    if(this.dl && 0 == this.fl) {
      for(;c = this.dl.pop();) {
        this.tl(c)
      }
      this.ig && ah(this)
    }
    return 0 != e
  }
  return!1
};
z.q.clear = function(a) {
  if(a) {
    var b = this.ue[a];
    b && ((0,z.Ac)(b, this.tl, this), delete this.ue[a])
  }else {
    this.ud.length = 0, this.ue = {}
  }
};
z.q.me = function(a) {
  if(a) {
    var b = this.ue[a];
    return b ? b.length : 0
  }
  a = 0;
  for(b in this.ue) {
    a += this.me(b)
  }
  return a
};
z.q.q = function() {
  $g.s.q.call(this);
  if(0 != this.fl) {
    for(var a = 1;a < this.ud.length;a += 3) {
      this.tl(a)
    }
  }else {
    ah(this)
  }
};
var dh = function() {
  try {
    if(!window.localStorage) {
      return!1
    }
    window.localStorage.setItem("storage-test", "1");
    return!!window.localStorage.getItem("storage-test")
  }catch(a) {
    return!1
  }
}();
z.q = bh.prototype;
z.q.put = function(a, b) {
  var c = this.Jm + "|" + a;
  dh ? window.localStorage.setItem(c, JSON.stringify(b)) : this.Ej[c] = b
};
z.q.get = function(a) {
  a = this.Jm + "|" + a;
  if(dh) {
    if(a = window.localStorage.getItem(a)) {
      try {
        return JSON.parse(a)
      }catch(b) {
      }
    }
  }else {
    return this.Ej[a]
  }
};
z.q.remove = function(a) {
  a = this.Jm + "|" + a;
  dh ? window.localStorage.removeItem(a) : delete this.Ej[a]
};
z.q.ne = function() {
  if(dh) {
    var a = [], b = this.Jm + "|", c;
    for(c in window.localStorage) {
      (0,z.Aa)(c, b) && a.push(c.substr(b.length))
    }
    a.sort();
    return a
  }
  return ob(this.Ej)
};
z.q.pe = function() {
  return nb(ch(this))
};
z.q.me = function() {
  return this.ne().length
};
eh.prototype.ms = function(a, b) {
  this.Ua.put("X", this.vj);
  gh(this) ? (this.Ua.put("Y", this.vj + "|" + (0,z.fh)()), String(this.Ua.get("X") || "") != this.vj ? window.setTimeout(function() {
    String(this.Ua.get("Y") || "").split("|")[0] == this.vj ? hh(this, a, b) : window.setTimeout(this.ms.bind(this, a, b), 500)
  }.bind(this), Math.round(100 * Math.random())) : hh(this, a, b)) : window.setTimeout(this.ms.bind(this, a, b), 500)
};
eh.prototype.nt = function() {
  String(this.Ua.get("Y") || "").split("|")[0] == this.vj && this.Ua.remove("Y")
};
ih.prototype.dv = function() {
  this.Rm || this.HA.ms(function() {
    var a = ch(this.Ua), b = nb(a);
    if(0 === b.length) {
      return null
    }
    var c = 0, b = b.filter(function(a) {
      a || (c += 1);
      return a
    });
    if(0 < c) {
      for(var d in a) {
        this.Ua.get(d) || this.Ua.remove(d)
      }
      d = dh ? "LocalStorage" : "InMemoryStorage";
      0 === b.length ? (0,z.Jh)(Error("All reported stats are null from " + d)) : (0,z.Jh)(Error("Some reported stats are null from " + d))
    }
    if(0 === b.length) {
      return null
    }
    this.Rm = !0;
    window.clearTimeout(this.Hc);
    this.Hc = null;
    return(0,z.Gb)((0,z.y)(this.ha.post(this.wb, b, {Z:!0, Ti:3, background:!0}), function() {
      for(var b in a) {
        this.Ua.remove(b)
      }
    }, this), function() {
      this.Rm = !1;
      this.Ua.me() ? (this.Ml = Math.min(3E5, 2 * this.Ml), kh(this)) : this.Ml = this.hD
    }, this)
  }, this)
};
ih.prototype.Cp = function() {
  this.dv()
};
lh.prototype.Sv = null;
lh.prototype.Aw = function() {
  var a;
  (a = this.Sv) || (a = {}, oh(this) && (a[0] = !0, a[1] = !0), a = this.Sv = a);
  return a
};
var ph;
(0,z.v)(mh, lh);
ph = new mh;
(0,z.v)(Ah, za);
Ah.prototype.name = "XhrError";
(0,z.v)(Bh, Ah);
Bh.prototype.name = "XhrHttpError";
(0,z.v)(Ch, Ah);
Ch.prototype.name = "XhrTimeoutError";
var Hh, Rh = [], Eh = {}, Qh = [];
(0,z.v)(z.Sh, $g);
z.q = z.Sh.prototype;
z.q.H = function(a, b) {
  return this.Ts ? $g.prototype.H.apply(this, arguments) : !1
};
z.q.h = function(a, b, c) {
  var d = Th(this, b);
  d || (d = function() {
    try {
      b.apply(this, arguments)
    }catch(a) {
      (0,z.Ph)(a)
    }
  }, this.fk.push([b, d]));
  return z.Sh.s.h.call(this, a, d, c)
};
z.q.ma = function(a, b, c) {
  return(b = Th(this, b)) ? z.Sh.s.ma.call(this, a, b, c) : !1
};
z.q.W = function() {
  this.setActive(!0)
};
z.q.ja = function() {
  this.setActive(!1)
};
z.q.setActive = (0,z.ba)("Ts");
z.q.q = function() {
  this.fk.length = 0;
  this.setActive(!1);
  z.Sh.s.q.call(this)
};
(0,z.v)(z.Uh, z.Sh);
z.q = z.Uh.prototype;
z.q.Ih = function(a) {
  for(var b in a) {
    this.set(b, a[b])
  }
  return this
};
z.q.set = function(a, b) {
  for(var c = a.split("."), d = c[0], e = this.Ua;1 < c.length;) {
    if(e = this.Ua[c.shift()], !e || "object" != typeof e) {
      throw Error("Unable to call set() on non-object for key\x3d" + a);
    }
  }
  c = c[0];
  e[c] != b && (e[c] = b, this.lp[d] = 1, this.H(d, this.Ua[d], this), this.H("change", d, this));
  return this
};
z.q.add = function(a, b, c) {
  if(!this.Ua[a]) {
    this.Ua[a] = []
  }else {
    if(!(0,z.ja)(this.Ua[a])) {
      throw Error("add() called on non array, key\x3d" + a);
    }
  }
  "undefined" == typeof c ? this.Ua[a].push(b) : this.Ua[a][c] = b;
  this.lp[a] = 1;
  this.H(a, b, this);
  this.H("change", a, this);
  return this
};
z.q.removeItem = function(a, b) {
  if(!(0,z.ja)(this.Ua[a])) {
    throw Error("removeItem() called on non array, key\x3d" + a);
  }
  this.Ua[a].splice(b, 1);
  this.lp[a] = 1;
  this.H(a, this.Ua[a], this);
  this.H("change", a, this);
  return this
};
z.q.get = function(a) {
  a = a.split(".");
  for(var b, c = this.Ua;(b = a.shift()) && (c = c[b]);) {
  }
  return c
};
z.q.Ya = (0,z.ca)("Ua");
(0,z.v)(z.$h, z.Sh);
z.q = z.$h.prototype;
z.q.add = function(a) {
  this.jh(a, this.wa.length)
};
z.q.jh = function(a, b) {
  a && (a = a instanceof z.Uh ? a : this.zk(a), di(this, a), hb(this.wa, b, 0, a), this.H("add", [a], this))
};
z.q.ee = function(a) {
  for(var b = [], c = 0;c < a.length;c++) {
    var d = a[c] instanceof z.Uh ? a[c] : this.zk(a[c]);
    di(this, d);
    this.wa.push(d);
    b.push(d)
  }
  this.H("add", b, this)
};
z.q.remove = function(a) {
  var b = (0,z.Za)(this.wa, a);
  b && (ei(this, a), this.H("remove", a, this));
  return b
};
z.q.hl = (0,z.s)(51);
z.q.update = function(a) {
  if(0 === this.count()) {
    this.ee(a)
  }else {
    for(var b = {}, c = {}, d = 0;d < this.wa.length;d++) {
      var e = this.wa[d].get("id");
      b[e] = this.wa[d];
      c[e] = d
    }
    d = [];
    for(e = this.wa.length = 0;e < a.length;e++) {
      var f = a[e].get("id"), h = b[f];
      h ? (c[f] != e && (this.H("remove", h, this), d.push(h)), this.wa.push(h), h !== a[e] && h.Ih(a[e].Ya())) : (d.push(a[e]), this.wa.push(a[e]), di(this, a[e]));
      delete b[f]
    }
    for(var k in b) {
      ei(this, b[k]), this.H("remove", b[k], this)
    }
    this.H("add", d, this)
  }
  return this
};
z.q.me = function() {
  return this.wa.length
};
z.q.count = function() {
  return this.me()
};
z.q.Qb = function(a, b) {
  (0,z.Ac)(this.wa, a, b)
};
z.q.filter = function(a, b) {
  return(0,z.zn)(this.wa, a, b)
};
z.q.find = function(a, b) {
  return(0,z.Va)(this.wa, a, b)
};
z.q.indexOf = function(a) {
  for(var b = 0;b < this.wa.length;b++) {
    if(this.wa[b] === a) {
      return b
    }
  }
  return-1
};
z.q.Ya = function(a, b) {
  var c = a ? this.filter(a, b) : this.wa;
  return(0,z.Te)(c, function(a) {
    return a.Ya()
  })
};
z.q.uo = function(a, b) {
  this.dx[a] = String(b);
  return this
};
z.q.Mk = function(a) {
  return this.dx[a] || null
};
z.q.zk = function(a) {
  return new z.Uh(a)
};
z.q.Ku = function(a, b) {
  this.H("change", [{Ur:b, mI:[a]}])
};
z.q.Mu = function(a) {
  this.remove(a)
};
(0,z.v)(fi, z.$h);
z.q = fi.prototype;
z.q.wh = !1;
z.q.bm = !0;
z.q.Ct = function() {
  var a = this.count();
  if(a >= this.Ql || !this.bm) {
    return(0,z.Ob)(this)
  }
  a = this.Qx(this.Ql - a);
  this.wh || a.fg(this.qb);
  this.wh = !0;
  this.qb = a;
  (0,z.A)((0,z.y)((0,z.Gb)(a, this.Jx, this), this.wC, this), this.nx, this);
  return hi(this, this.qb)
};
z.q.wC = function(a) {
  var b = this.wf(a);
  (this.bm = this.Sx(a, b)) && b && this.ee(b)
};
z.q.fg = function(a) {
  this.wh || this.qb.hd ? this.wh && !this.qb.hd && (0,z.Hb)(a, this.qb) : a.fg(this.qb);
  return a
};
z.q.nx = function(a) {
  a instanceof Ah || (0,z.Ph)(a)
};
z.q.Jx = function() {
  this.qb = (0,z.Ob)(this)
};
(0,z.v)(ji, fi);
ji.prototype.cm = "GET";
ji.prototype.Sx = function(a, b) {
  return 0 !== b.length
};
ji.prototype.wf = (0,z.aa)();
ji.prototype.Qx = function(a) {
  a = ki(this, a);
  var b = this.wb;
  if("GET" == this.cm) {
    var b = b + (-1 == b.indexOf("?") ? "?" : "\x26"), c = id(a);
    if("undefined" == typeof c) {
      throw Error("Keys are undefined");
    }
    for(var d = new Tg(null, 0, void 0), e = hd(a), f = 0;f < c.length;f++) {
      var h = c[f], k = e[f];
      (0,z.ja)(k) ? Zg(d, h, k) : d.add(h, k)
    }
    b += d
  }
  return this.Fh.send(this.cm, b, a, {Z:!0})
};
fi.prototype.rF = function(a) {
  a = this.wf(a);
  a = (0,z.Te)(a, this.zk, this);
  this.update(a);
  return this
};
var ti = null, pi = {};
var Ii = Date.now(), mg = "home";
wi.prototype.Rc = function() {
  var a = (0,z.Di)(this, "myposts", "/me/posts", "GET");
  (0,z.Di)(this, mg, "/home/load-more", "POST");
  var b = Ai(this, "my-collections", "/me/collections"), c = Ai(this, "recommended", "/collections/recommended"), d = Ai(this, "recently-viewed", "/me/collections/viewed");
  (0,z.P)("isAuthenticated") && ((0,z.P)("variants.can_cross_post") || (0,z.P)("variants.can_create_post")) && window.setTimeout(function() {
    gi(a);
    gi(b);
    gi(c);
    gi(d)
  }.bind(this), 5E3)
};
wi.prototype.Pc = function(a) {
  if(!a) {
    throw Error("Missing id");
  }
  return this.hi[a]
};
(0,z.v)(Ei, ji);
Ei.prototype.zk = function(a) {
  return(0,z.xi)(this.U, a)
};
(0,z.v)(Bi, ji);
Bi.prototype.zk = function(a) {
  return(0,z.Hi)(this.U, a)
};
var Nq;
var ov;
var nv;
var kv;
var jv;
var iv;
var hv;
var gv;
var Bp;
var ev;
var dv;
var cv;
var bv;
var av;
var dm;
var km;
var Ju;
var Iu;
var Hu;
var Gu;
var Eu;
var Du;
var Cu;
var zu;
var fq;
var yu;
var xu;
var wu;
var vu;
var uu;
var tu;
var su;
var ru;
var qu;
var pu;
(0,z.v)(Li, X);
(0,z.v)(Z, X);
pu = new X("homepage.viewed");
qu = new X("homepage.prlPostClicked");
ru = new X("onboarding.started");
su = new X("onboarding.finished");
tu = new X("collection.loaded");
uu = new X("collection.followed");
vu = new X("collection.unfollowed");
wu = new X("post.started");
xu = new X("post.recommendClicked");
yu = new X("post.crosspostClicked");
fq = new X("post.crosspostSuccess");
zu = new X("post.crosspostRemoved");
z.Au = new X("post.shareDraftClicked");
z.Bu = new X("post.postEditorLocked");
Cu = new X("post.clientUpvote");
Du = new X("post.clientUnvote");
Eu = new X("post.clientRead");
z.Fu = new X("post.share");
Gu = new X("post.shareOpen");
Hu = new X("post.addedBookmark");
Iu = new X("post.removedBookmark");
Ju = new X("post.readNext");
km = new X("post.skipPost");
dm = new X("post.nextPost");
z.Ku = new X("post.clientCreated");
z.Lu = new X("post.saved");
z.Mu = new X("post.published");
z.Nu = new X("post.republished");
z.Ou = new X("profile.viewed");
z.Pu = new X("profile.enterEdit");
z.Qu = new X("profile.cancelEdit");
z.Ru = new X("profile.saved");
new X("notes.ui.showToolbar");
z.Su = new X("notes.ui.showNotes");
z.Tu = new X("notes.ui.noteCreated");
z.Uu = new X("notes.ui.noteEdited");
z.Vu = new X("notes.ui.noteDeleted");
z.Wu = new X("notes.ui.noteStateChanged");
z.Xu = new X("notes.ui.replyCreated");
z.Yu = new X("notes.ui.replyEdited");
z.Zu = new X("notes.ui.replyDeleted");
z.$u = new X("notes.ui.replyHidden");
av = new X("followUp.ui.started");
bv = new X("followUp.ui.created");
cv = new X("followUp.ui.deleted");
dv = new X("followUp.ui.visibilityChanged");
ev = new X("followUp.ui.clicked");
new X("activity.viewed");
Bp = new X("ui.imageZoom");
z.fv = new X("ui.imageInsert");
gv = new X("post.scrolled");
hv = new X("search.opened");
iv = new X("search.queried");
jv = new X("search.returnedResults");
kv = new X("search.resultClicked");
nv = new X("site.loginClicked");
ov = new X("client.error.imageLoad");
Nq = new X("user.testBucketSet");
new X("user.testBucketSet");
var pv = new X("user.sendVerificationEmailButterShown"), qv = new X("user.sendVerificationEmailButterClicked"), rv = new X("user.writeAccessPromptShown"), sv = new X("user.writeAccessPromptDismissed"), tv = new X("user.writeAccessPromptClicked"), uv = new Z("collection.viewed"), vv = new Z("post.viewed"), wv = new X("post.draftViewed");
new Z("posts.presented");
new Z("posts.prlFiltered");
new X("server.prl.displayed");
new X("server.prl.lowVolume");
new Z("post.read");
new Z("post.read.unique");
new Z("post.read.reread");
new Z("post.read.total");
new Z("post.detectLanguage");
new X("email.queued");
new X("email.send");
new X("email.send.success");
new X("email.send.failure");
new Z("email.send.regular");
new Z("email.send.required");
new Z("email.sendVerify");
new X("embedly.success");
new X("embedly.failure");
new Z("post.approved");
new Z("post.created");
new Z("post.updated");
new Z("post.upvoted");
new Z("post.unvoted");
new Z("post.flaggedSpam");
new Z("post.unflaggedSpam");
new Z("post.accepted");
new Z("collaborator.added");
new Z("collaborator.addToWhitelist");
new X("user.writeAccessGranted");
new Z("user.created");
new Z("collection.subscribed");
new Z("collection.unsubscribed");
new Z("notes.db.noteCreated");
new Z("post.checkAndSchedule");
new X("notes.db.noteRemoved");
new X("notes.db.noteUpdated");
new X("notes.db.noteUpdateWhitelist");
new X("notes.db.noteHidden");
new X("notes.db.noteApproved");
new X("notes.db.noteUnapproved");
new X("notes.db.replyCreated");
new X("notes.db.replyUpdated");
new X("notes.db.replyRemoved");
new X("notes.db.replyHidden");
new Z("followUps.db.followUpCreated");
new X("followUps.db.followUpDismissed");
new X("followUps.db.followUpApproved");
new X("followUps.db.followUpUnapproved");
new X("followUps.db.followUpRemoved");
new X("followUps.db.followUpUpdated");
new X("highlight.created");
new Li("feed.cacheMiss");
new Li("feed.cacheHit");
new Li("zcache.hit");
new Li("zcache.miss");
new Li("zcache.put");
new Li("sharedCache.hitratio");
new Li("sharedCache.get.time");
new Li("sharedCache.mget.time");
new Li("sharedCache.set.time");
new Li("sharedCache.mset.time");
new Li("sharedCache.timeout.count");
new Li("inMemoryCache.keys");
new Li("sharedCache.get.time.99p");
new Li("sharedCache.mget.time.99p");
new Li("sharedCache.set.time.99p");
new Li("sharedCache.mset.time.99p");
new Li("bloomd.connected");
new Li("bloomd.disconnected");
new Li("bloomd.unavailable");
new Li("bloomd.check");
new Li("bloomd.multiCheck");
new Li("bloomd.set");
new Li("bloomd.bulkSet");
new Li("bloomd.create");
new Z("user.readPostFilterBackfill");
new Z("post.magnitudeForTimespan");
new Z("post.magnitudeForTimespanPostMetrics");
new Z("homepage.generateFromTimespanMagnitude");
new Z("collection.recommendedPostAggregation");
new Z("user.recommendedPostAggregation");
new Z("user.maybeSendPendingActivity");
new Z("post.fixCollectionsPostCounts");
new Z("collection.fixPostCount");
new Z("collection.badCollectionFound");
new Z("user.generateCollectionSubPostSuggestions");
new Z("collection.fixSubscriberCounts");
new Z("post.fixPostPublishedTimes");
new Z("post.fixPostFirstPublishedTime");
new Z("post.fillPostPublishedAt");
new Z("post.deleteUnpublishedVersion");
new Z("post.createIndex");
new Z("post.deleteOldUnpublishedVersions");
new Z("collection.addAcceptedAtToAll");
new Z("user.fixUsernameEntry");
new Z("user.fixTwitterName");
new Z("post.addAcceptedAt");
new Z("activity.postRecommended");
new Z("activity.postCrossPosted");
new Z("activity.postPublished");
new Z("activity.postCollaboratedPublished");
new Z("activity.followUpCreated");
new Z("activity.followUpPublished");
new Z("activity.postAddedAsFollowUp");
new Z("activity.note");
new Z("activity.reply");
new Z("activity.notePublished");
new Z("activity.mentionInNote");
new Z("activity.mentionInNoteUpdate");
new Z("activity.mentionInNoteReply");
new Z("activity.mentionInNoteReplyUpdate");
new Z("collection.fixUserCollectionLinks");
new Z("user.fixUserCollectionLinks");
new Z("posts.forEachInMedium");
new Z("collections.forEachInMedium");
new Z("posts.forEachInCollection");
new Z("users.forEachInMedium");
new Z("users.forEachWithPendingActivity");
new Z("posts.forEachByUser");
new Z("votes.forEachByUser");
new Z("votes.indexForEachVote");
new Z("countHealing.userReadCounts");
new Z("countHealing.userStats");
new Z("countHealing.userTotals");
new Z("user.fillUserCreatedAt");
new Z("countHealing.postTotals");
new Z("collection.backfillCollectionAdmin");
new Z("user.subscribeToCollection");
new Z("collection.fillCollectionActiveAt");
new Z("post.migratePostStats");
new Z("bestOf.postsForMonth");
new Z("collections.postCrossPosted");
new Z("collections.backPopulateCrossPostsList");
new Z("facebook.postChanged");
new Z("search.postIndexRequest");
new Z("search.userIndexRequest");
new Z("search.collectionIndexRequest");
new Z("streamItems.followUpPublished");
new Z("personalizedReadingList.sendEmail");
new Z("personalizedReadingList.sendEmails");
new X("personalizedReadingList.sendEmailFailed");
new Z("post.backfillCreatorPostRelation");
new Z("post.fixCreatorPostIndex");
new Z("user.backfillUserPostRelationVotes");
new Z("user.migrateUserCollectionLinks");
new Z("collection.migrateCollectionPostRelation");
new Z("post.migratePostCollectionRelation");
z.q = Pi.prototype;
z.q.re = (0,z.n)(!0);
z.q.Ni = function(a, b) {
  var c = this.zh(b);
  c && delete this.eh[(0,z.qa)(b)];
  return c
};
z.q.qg = function(a, b, c) {
  (a = !this.zh(c)) || delete this.eh[(0,z.qa)(c)];
  return a
};
z.q.kj = function(a) {
  a = (0,z.qa)(a);
  this.eh[a] || (this.eh[a] = this.now())
};
z.q.zh = function(a) {
  a = (0,z.qa)(a);
  return!(a in this.eh) || this.now() - this.eh[a] >= this.Tp
};
z.q.now = function() {
  return(new Date).getTime()
};
(0,z.v)(Qi, Pi);
Qi.prototype.qg = function(a, b, c) {
  return b.Nr ? Qi.s.qg.call(this, a, b, c) : (delete this.eh[(0,z.qa)(c)], !1)
};
z.q = Ri.prototype;
z.q.re = function(a, b) {
  return this.pj ? this.Hj.re(a, b) : !0
};
z.q.Ni = function(a, b) {
  return this.pj ? this.Hj.Ni(a, b) : !1
};
z.q.qg = function(a, b, c) {
  return this.pj ? this.Hj.qg(a, b, c) : !0
};
z.q.kj = function(a) {
  this.Hj.kj(a);
  this.pj = !0
};
z.q.zh = function(a) {
  return this.pj ? this.Hj.zh(a) : !1
};
Si.prototype.re = (0,z.n)(!1);
Si.prototype.Ni = (0,z.n)(!1);
Si.prototype.qg = (0,z.n)(!1);
Si.prototype.kj = z.fa;
z.xv = new Si;
Ti.prototype.re = (0,z.n)(!0);
Ti.prototype.Ni = (0,z.n)(!1);
Ti.prototype.qg = (0,z.n)(!0);
Ti.prototype.kj = z.fa;
var yv = new Ti;
(0,z.v)(z.Xi, z.D);
z.q = z.Xi.prototype;
z.q.o = null;
z.q.fe = new Qi(3E5);
z.q.qD = null;
z.q.tu = null;
z.q.R = function(a) {
  return this.o ? this.o.querySelector(a) : null
};
z.q.Wi = function(a) {
  return this.o ? (0,z.cb)(this.o.querySelectorAll(a)) : []
};
z.q.find = function(a) {
  return this.R(a)
};
z.q.Od = (0,z.ca)("qD");
z.q.Xe = (0,z.ba)("tu");
z.q.getMetadata = (0,z.ca)("tu");
z.q.Ln = (0,z.n)(null);
z.q.pn = (0,z.g)();
z.q.ja = (0,z.g)();
z.q.Ie = (0,z.n)(null);
z.q.nc = (0,z.g)();
z.q.sb = function() {
  return"function" == typeof window.scrollTo ? window : window.document.body
};
(0,z.v)(z.Zi, z.Xi);
z.q = z.Zi.prototype;
z.q.pb = (0,z.g)();
z.q.Ra = (0,z.g)();
z.q.Sd = (0,z.g)();
z.q.Ln = function() {
  if(!this.o) {
    var a = (0,z.P)("embedded");
    if("undefined" != typeof a) {
      var b = ["embedded"], c;
      c = b.shift();
      c = rf[c] || c;
      for(var d = z.sf;null != d[c];) {
        if(0 === b.length) {
          d[c] = null;
          break
        }
        d = d[c];
        c = b.shift()
      }
    }
    a && this.Sd(a);
    (a = window.document.getElementById("prerendered")) ? (a.id = null, this.o = a, this.Ra()) : (this.o = window.document.createElement("div"), this.pb());
    (0,z.G)(this.o, "screen-content");
    this.o.tabIndex = -1
  }
  return this.o
};
z.q.sb = function() {
  return Mi() ? window.document.body : this.o
};
(0,z.v)(z.$i, z.Zi);
z.$i.prototype.Pa = null;
z.$i.prototype.Ie = (0,z.ca)("Pa");
z.$i.prototype.pb = function() {
  var a = "/" + this.wb + (-1 == this.wb.indexOf("?") ? "?" : "\x26") + "format\x3dfragment";
  this.Pa = (0,z.y)((0,z.Yi)(this, "request").get(a, {headers:{"X-Response-Type":"html-body"}}), this.Dd, this)
};
z.$i.prototype.Dd = function(a) {
  this.o.innerHTML = a;
  this.Ra()
};
(0,z.v)(aj, z.$i);
z.q = aj.prototype;
z.q.sb = z.Ni;
z.q.fe = new Pi(36E5);
z.q.q = function() {
  this.Zg && op(this.Zg);
  this.Zg = null;
  (0,z.zg)(this.o);
  aj.s.q.call(this)
};
z.q.Sd = function(a) {
  a.posts && this.$.update(a.posts)
};
z.q.Ra = function() {
  var a = (0,z.P)("productName");
  this.Xe(new z.Ui(a, a, "website"));
  (0,z.wg)(this.o).g("toggle-prl-debug", this.rD, this);
  if(this.Zg = this.R(".homepage-posts")) {
    mp(this.Zg, this.ba, this.$), (0,z.P)("variants.can_view_prl_homepage") && (0,z.wg)(this.Zg).g("open-post", this.CB, this)
  }
};
z.q.nc = function() {
  var a = {};
  (0,z.P)("variants.can_view_prl_homepage") && (a.count = this.$.count());
  (0,z.W)(pu, a);
  (0,z.vi)(1, "home");
  bj(this)
};
z.q.Yh = function() {
  return this.U.Ba[mg] ? this.U.Ba[mg] : (0,z.Di)(this.U, mg, "/home/load-more", "POST")
};
z.q.rD = function() {
  (0,z.dd)(this.o, "prl-debug-enable")
};
z.q.CB = function(a) {
  var b = (a = (a = (0,z.Tc)(a.target, null, "post-item")) && a.getAttribute("data-post-id")) && this.U.Pc(a), c = b && b.get("providerName");
  if(c) {
    var d = b.get("reasons"), e = {};
    if(d) {
      for(var f in d) {
        var h = d[f];
        e[f] = {weight:h.weight, suggestionData:h.suggestionData}
      }
    }
    (0,z.W)(qu, {postId:a, providerName:c, ranking:b.get("ranking"), reasons:e})
  }
};
Af("a", "", function(a) {
  for(var b = "", c = zf(a.reason.suggestionData), d = c.length, e = 0;e < d;e++) {
    var f = c[e], b = b + ("  " + (0,z.U)(f) + ": " + (0,z.U)(a.reason.suggestionData[f]) + "\n")
  }
  return b
});
Af("b", "", function(a) {
  return!a.md || a.post.homeCollection && !a.nd ? '\x3cli class\x3d"post-item-meta-item"\x3e' + (a.md ? "" : a.post.displayAuthor ? (0,z.U)(a.post.displayAuthor) : dj({user:a.post.creator, Ma:"post-item-author"})) + (a.post.homeCollection && !a.nd ? (a.md ? "" : " ") + "in " + fj({collection:a.post.homeCollection}) : "") + "\x3c/li\x3e" : ""
});
Af("b", "prl", function(a, b, c) {
  if(a.post.providerName) {
    b = '\x3cli class\x3d"post-item-meta-item"\x3e' + (0,z.Df)("c", a.post.providerName)((0,z.yf)(a, {reason:a.post.reasons[a.post.providerName], BM:!0}), null, c) + "\x3c/li\x3e";
    if(c.variants.can_view_prl_debug) {
      for(var d = "\x3cpre\x3eID: " + (0,z.U)(a.post.id) + ", Weight: " + (0,z.U)(a.post.weight) + ", Magnitude: " + (0,z.U)(a.post.magnitude) + "\n", e = zf(a.post.reasons), f = e.length, h = 0;h < f;h++) {
        var k = e[h], d = d + ("\n" + (0,z.U)(k) + ": Weight: " + (0,z.U)(a.post.reasons[k].weight) + "\n" + (0,z.Df)("a", k)({reason:a.post.reasons[k]}, null, c))
      }
      c = '\x3cdiv class\x3d"prl-debug"\x3e' + (d + "\x3c/pre\x3e") + "\x3c/div\x3e"
    }else {
      c = ""
    }
    c = b + c
  }else {
    c = ""
  }
  return c + (!a.md || a.post.homeCollection && !a.nd ? '\x3cli class\x3d"post-item-meta-item"\x3e' + (a.md ? "" : a.post.displayAuthor ? (0,z.U)(a.post.displayAuthor) : dj({user:a.post.creator, Ma:"post-item-author"})) + (a.post.homeCollection && !a.nd && "collectionSubscriptionsByUserId" != a.post.providerName ? (a.md ? "" : " ") + "in " + fj({collection:a.post.homeCollection}) : "") + "\x3c/li\x3e" : "")
});
Af("d", "confirm", function(a) {
  a = a || {};
  return'\x3cbutton class\x3d"btn btn-primary btn-overlay-confirm" data-action\x3d"overlay-confirm"\x3e' + (a.xk ? (0,z.U)(a.xk) : "Confirm") + '\x3c/button\x3e\x3cbutton class\x3d"btn" data-action\x3d"overlay-cancel"\x3eCancel\x3c/button\x3e'
});
Af("d", "alert", (0,z.n)('\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-close"\x3eClose\x3c/button\x3e'));
Af("d", "refresh", (0,z.n)('\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-refresh"\x3eRefresh\x3c/button\x3e'));
Af("d", "signin", function(a) {
  return'\x3ca href\x3d"/m/account/authenticate-twitter?redirect\x3d' + Mf(a.is) + '" class\x3d"btn btn-primary"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3eSign in with Twitter\x3c/a\x3e\x3cbutton class\x3d"btn" data-action\x3d"overlay-close"\x3eClose\x3c/button\x3e'
});
Af("d", "form", function(a) {
  a = a || {};
  return'\x3cbutton class\x3d"btn btn-primary btn-overlay-confirm" data-action\x3d"overlay-submit"\x3e' + (a.xk ? (0,z.U)(a.xk) : "Submit") + '\x3c/button\x3e\x3cbutton class\x3d"btn" data-action\x3d"overlay-cancel"\x3eCancel\x3c/button\x3e'
});
Af("e", "recommend", (0,z.n)("Give this writer the props they deserve."));
Af("e", "followUp", (0,z.n)("Continue the conversation with related\x26nbsp;links."));
Af("e", "noteAdd", (0,z.n)("Speak up, spark a conversation."));
Af("e", "noteReply", (0,z.n)("The strong, silent type is overrated—keep the conversation going."));
Af("e", "readingList", (0,z.n)("Don’t let great posts slip into the Internet ether."));
(0,z.v)(rj, z.$i);
z.q = rj.prototype;
z.q.q = function() {
  (0,z.zg)(this.o);
  rj.s.q.call(this)
};
z.q.Ra = function() {
  (0,z.wg)(this.o).g("finish-onboard", this.Cz, this);
  for(var a = this.o.querySelectorAll(".follow-wrapper"), b = 0;b < a.length;b++) {
    var c = a[b].querySelector(".btn-follow").getAttribute("data-action-value"), d = this.U.yd[c] || null;
    if(!d) {
      (0,z.Ph)(Error("OnboardScreen: Trouble getting collectionMeta for " + c));
      break
    }
    (0,z.tj)(new z.sj(a[b], d, $o), {}, "collection").ac()
  }
};
z.q.nc = function() {
  (0,z.W)(ru, {})
};
z.q.Sd = function(a) {
  for(var b = 0;b < a.collections.length;b++) {
    (0,z.Hi)(this.U, a.collections[b])
  }
};
z.q.Cz = function() {
  (0,z.A)((0,z.y)(this.ha.put("/me/settings/flag-seen-collection-follow-onboarding", {value:1}, {Z:!0}), function() {
    var a = window.document.querySelector(".jacket-home-link");
    if(a) {
      var b = (0,z.tf)(qj);
      a.innerHTML = b
    }
    (0,z.W)(su, {});
    this.ba.navigate("")
  }, this), z.Ph)
};
(0,z.v)(z.sj, z.Sh);
z.q = z.sj.prototype;
z.q.ki = !1;
z.q.om = window.Infinity;
z.q.Rf = function(a) {
  return a.Ya()
};
z.q.sk = null;
z.q.jp = null;
z.q.gu = null;
z.q.zt = null;
z.q.q = function() {
  this.D.ma("change", this.Ui, this);
  this.D instanceof z.$h && (this.D.ma("add", this.Xr, this), this.D.ma("remove", this.Yr, this));
  this.zt && !this.ki && this.zt.cancel();
  this.ki = !1;
  this.o.innerHTML = "";
  delete this.o;
  z.sj.s.q.call(this)
};
z.q.getData = (0,z.s)(71);
z.q.ac = function() {
  this.ki = !0;
  this.D.h("change", this.Ui, this);
  this.D instanceof z.$h && (this.D.h("add", this.Xr, this), this.D.h("remove", this.Yr, this));
  this.ao(!0);
  return this
};
z.q.so = function(a, b) {
  this.Rf = a.bind(b);
  this.ao();
  return this
};
z.q.ao = function() {
  this.Ui(null)
};
z.q.Xr = function() {
  this.Ui(null)
};
z.q.Yr = function() {
  this.Ui(null)
};
z.q.Ui = function() {
  if(this.ki) {
    var a;
    a = this.D instanceof z.$h ? (0,z.Te)(this.D.wa.concat(), this.Rf) : this.Rf.call(null, this.D);
    a = (0,z.uj)(this, a);
    a != this.gu && (this.gu = this.o.innerHTML = a)
  }
};
var zv = {ry:1, dH:10, LG:11, FG:12, py:2, qy:3, NG:4, KG:5, my:6, sy:7, ty:8, vH:9, $isProtoEnum:!0}, eo = {RG:1, SG:2, gH:3, hH:4, $isProtoEnum:!0}, Av = {vy:1, oy:2, A:3, HG:4, HH:5, $isProtoEnum:!0}, Bv = {yG:1, pG:2, $isProtoEnum:!0}, Cv = {NONE:1, EG:2, $isProtoEnum:!0};
(0,z.v)(z.vj, M);
df(z.vj, !1, {name:"RichTextModel", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{paragraphs:{l:function() {
  return xj
}, F:(0,z.n)(!0), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, sections:{l:function() {
  return z.Hj
}, F:(0,z.n)(!0), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}}});
(0,z.v)(xj, M);
df(xj, !1, {name:"ParagraphPb", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{name:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, type:{l:function() {
  return zv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, text:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}, markups:{l:function() {
  return z.Ej
}, F:(0,z.n)(!0), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(4), defaultValue:(0,z.g)()}, dataId:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(5), defaultValue:(0,z.g)()}, layout:{l:function() {
  return eo
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(6), defaultValue:(0,z.g)()}, metadata:{l:function() {
  return yj
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(7), defaultValue:(0,z.g)()}, iframe:{l:function() {
  return z.Bj
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(8), defaultValue:(0,z.g)()}, hasDropCap:{l:function() {
  return Boolean
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(9), defaultValue:(0,z.g)()}}});
z.q = xj.prototype;
z.q.getName = function() {
  return(0,z.N)(this, "name")
};
z.q.Ud = function(a) {
  return(0,z.O)(this, "name", a)
};
z.q.l = function() {
  return(0,z.N)(this, "type")
};
z.q.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
z.q.Lb = function() {
  return(0,z.N)(this, "text")
};
z.q.wo = function(a) {
  return(0,z.O)(this, "text", a)
};
z.q.getMetadata = function() {
  return(0,z.N)(this, "metadata")
};
z.q.Xe = function(a) {
  return(0,z.O)(this, "metadata", a)
};
(0,z.v)(yj, M);
df(yj, !1, {name:"ImageMetadata", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{id:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, originalWidth:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, originalHeight:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}, backgroundSize:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(4), defaultValue:(0,z.n)("contain")}, filter:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(5), defaultValue:(0,z.g)()}}});
z.q = yj.prototype;
z.q.zc = function() {
  return(0,z.N)(this, "id")
};
z.q.Cf = function(a) {
  return(0,z.O)(this, "id", a)
};
z.q.lg = function() {
  return(0,z.N)(this, "backgroundSize")
};
z.q.ro = function(a) {
  return(0,z.O)(this, "backgroundSize", a)
};
z.q.Bf = function(a) {
  return(0,z.O)(this, "filter", a)
};
(0,z.v)(z.Bj, M);
df(z.Bj, !1, {name:"IframeMetadata", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{mediaResourceId:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, iframeWidth:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, iframeHeight:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}, iframeSrc:null}});
z.Bj.prototype.zw = function() {
  return(0,z.N)(this, "mediaResourceId")
};
z.Bj.prototype.to = function(a) {
  return(0,z.O)(this, "mediaResourceId", a)
};
(0,z.v)(z.Ej, M);
df(z.Ej, !1, {name:"MarkupModel", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{type:{l:function() {
  return Av
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, start:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, end:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}, href:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(4), defaultValue:(0,z.g)()}, title:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(5), defaultValue:(0,z.g)()}, rel:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(6), defaultValue:(0,z.g)()}, name:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(7), defaultValue:(0,z.g)()}}});
z.q = z.Ej.prototype;
z.q.l = function() {
  return(0,z.N)(this, "type")
};
z.q.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
z.q.setStart = function(a) {
  return(0,z.O)(this, "start", a)
};
z.q.setEnd = function(a) {
  return(0,z.O)(this, "end", a)
};
z.q.mg = function() {
  return(0,z.N)(this, "href")
};
z.q.ts = function(a) {
  return(0,z.O)(this, "href", a)
};
z.q.Od = function() {
  return(0,z.N)(this, "title")
};
z.q.Kh = function(a) {
  return(0,z.O)(this, "title", a)
};
z.q.getName = function() {
  return(0,z.N)(this, "name")
};
z.q.Ud = function(a) {
  return(0,z.O)(this, "name", a)
};
(0,z.v)(z.Hj, M);
df(z.Hj, !1, {name:"SectionModel", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{name:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, startIndex:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, backgroundImage:{l:function() {
  return yj
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}, textLayout:{l:function() {
  return Bv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(4), defaultValue:(0,z.g)()}, imageLayout:{l:function() {
  return Cv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(5), defaultValue:(0,z.g)()}}});
z.Hj.prototype.getName = function() {
  return(0,z.N)(this, "name")
};
z.Hj.prototype.Ud = function(a) {
  return(0,z.O)(this, "name", a)
};
z.Dv = RegExp("([\\S\\s]*?)(\\b(?:mailto:)?([\\w.+-]+@[A-Za-z0-9.-]+\\.(?:com|org|net|edu|gov|aero|biz|cat|coop|info|int|jobs|mobi|museum|name|pro|travel|arpa|asia|xxx|[a-z][a-z])\\b)|\\b(?:(https?|ftp)://|www\\.)\\w[\\w~#-@!\\[\\]]*|$)", "g");
var Iv;
var Gv;
var hk = new z.Mj;
Nj(hk, null);
z.Ev = ck();
z.Fv = ck();
(0,z.bk)(z.Fv, "BR");
var ik = ck();
(0,z.bk)(ik, "A", ["href", "title", "rel"]);
(0,z.bk)(ik, "BR");
(0,z.bk)(ik, "STRONG", ["id"], ["B"]);
(0,z.bk)(ik, "EM", [], ["I"]);
var ek = ck();
ek.Vc = (0,z.qb)(ik.Vc);
(0,z.bk)(ek, "IMG", ["data-id", "src", "width", "height"]).qc = hk;
var fk = ck();
(0,z.bk)(fk, "IMG", ["data-id", "src", "width", "height"]).qc = hk;
(0,z.bk)(fk, "FIGCAPTION", {"class":["content-caption", "image-caption"], "data-image-id":!0}).qc = ik;
var gk = ck();
(0,z.bk)(gk, "LI", ["name"]).qc = ik;
Gv = dk();
Iv = dk();
(0,z.bk)(Iv, "SECTION", {name:!0, "class":!0}).qc = Gv;
z.Hv = Iv;
var kk = {"\x26":"\x26amp;", "\x3e":"\x26gt;", "\x3c":"\x26lt;", '"':"\x26quot;", "'":"\x26#39;"}, nk = (0,z.vb)(["cupstep.com", "hatch.dm", "medium.com", "localhost"]);
(0,z.v)(sk, z.D);
z.q = sk.prototype;
z.q.Dd = function() {
  this.S.innerHTML = (0,z.tf)(rk, {nh:this.Gm.get("experimentalCss")});
  (0,z.wg)(this.S).g("popover-css-editor", this.EC, this);
  (0,z.rg)("install-css", this.Xt, this);
  (0,z.rg)("save-css", this.NC, this)
};
z.q.EC = function(a) {
  (0,z.Op)(this.lc, a.target, (0,z.tf)(qk, {nh:this.Gm.get("experimentalCss")}), "post-css-editor-popover")
};
z.q.Xt = function() {
  this.Qg && (me(this.Qg), this.Qg = null);
  var a = window.document.querySelector(".post-css-editor-textarea").value;
  a && (this.Qg = (0,z.le)(a))
};
z.q.NC = function() {
  this.Xt();
  var a = window.document.querySelector(".post-css-editor-textarea").value || "";
  (0,z.y)(this.Aq.post("/p/" + (0,z.Wh)(this.Gm, "id") + "/updateCss", {postCss:a}, {Z:!0}), function() {
    this.Gm.set("experimentalCss", a);
    this.lc.remove()
  }, this)
};
z.q.q = function() {
  (0,z.zg)(this.S);
  (0,z.ug)("install-css");
  (0,z.ug)("save-css");
  this.Qg && (me(this.Qg), this.Qg = null);
  sk.s.q.call(this)
};
(0,z.v)(tk, z.D);
tk.prototype.q = function() {
  tk.s.q.call(this)
};
tk.prototype.hj = function(a) {
  var b = {Zk:this.Wg, $b:this.mc};
  a && sb(b, a);
  return b
};
(0,z.v)(z.uk, z.D);
z.uk.prototype.q = function() {
  for(var a in this.Da) {
    this.Da[a].cancel()
  }
  z.uk.s.q.call(this)
};
z.uk.prototype.Ob = function(a) {
  var b = (0,z.qa)(a);
  b in this.Da || (this.Da[b] = a, (0,z.Gb)(a, function() {
    delete this.Da[b]
  }, this));
  return a
};
(0,z.v)(vk, z.D);
z.q = vk.prototype;
z.q.source = null;
z.q.Yn = null;
z.q.$ = null;
z.q.qq = null;
z.q.Xp = null;
z.q.q = function() {
  this.Xp = this.qq = this.$ = null;
  (0,z.gc)(this.Da);
  vk.s.q.call(this)
};
z.q.Rc = function() {
  var a = this.Ri.mc;
  a && this.U.Ba[a] || (a = wk(this));
  this.$ = this.U.Ba[a];
  (0,z.P)("variants.enable_post_to_post_navigation") && (this.Qe() ? this.Dd() : (0,z.y)(this.Da.Ob(ii(this.$, 5)), this.Dd, this))
};
z.q.Dd = function() {
  this.Qe() ? this.ac() : this.Ri.mc != mg && (wk(this), this.Rc())
};
z.q.Qe = function() {
  return(0,z.ai)(this.$, ci(this.$, this.V) + 1)
};
z.q.Bx = function() {
  if(!this.qq) {
    var a = xk(this);
    a && (this.qq = this.Da.Ob(tl(this.ba, a, this.Ri.hj())))
  }
};
z.q.ix = function() {
  var a = xk(this), b = this.Qe();
  a && !this.Xp && (this.Yn && (0,z.W)(this.Yn, {toPostId:b.get("id"), fromPostId:this.V}), b = this.Ri.hj({rl:this.jx.bind(this)}), this.source && (b.source = this.source), this.Xp = this.ba.navigate(a, b))
};
var Bk = Date.now();
yk.prototype.show = function(a, b) {
  var c = window.document.getElementById(a), d = (b || this.cn)(this.Us, c);
  this.Us = c;
  return d
};
yk.prototype.remove = function(a) {
  (0,z.F)(window.document.getElementById(a))
};
z.q = z.Ck.prototype;
z.q.la = (0,z.s)(54);
z.q.zc = function() {
  return this.Zc.zc()
};
z.q.lg = function() {
  return this.Zc.lg()
};
z.q.Cf = function(a) {
  this.Zc.Cf(a)
};
z.q.ro = function(a) {
  this.Zc.ro(a)
};
z.q.Bf = function(a) {
  this.Zc.Bf(a)
};
z.Gk = "pending-image";
z.Fk.prototype.reset = function() {
  this.D.zc() ? this.set("has-image") : this.set("no-image")
};
z.Fk.prototype.set = function(a) {
  this.kb != a && ((0,z.I)(this.ya, this.kb), (0,z.G)(this.ya, a), this.kb = a)
};
z.Fk.prototype.get = (0,z.ca)("kb");
z.Fk.prototype.Qd = (0,z.s)(17);
(0,z.v)(z.Hk, z.Sh);
z.q = z.Hk.prototype;
z.q.W = function() {
  this.Of = !0
};
z.q.ja = function() {
  this.Of = !1;
  (0,z.pe)(this.ga);
  this.ga.length = 0
};
z.q.Ki = (0,z.ca)("Of");
z.q.Xa = function(a, b, c, d, e) {
  this.ga.push((0,z.L)(a, b, c, d, e));
  return this
};
z.q.q = function() {
  this.Of && this.ja();
  z.Hk.s.q.call(this)
};
(0,z.v)(Ik, z.Hk);
z.q = Ik.prototype;
z.q.W = function() {
  Ik.s.W.call(this);
  this.Xa(this.ya, "dragstart", (0,z.ve)(this.lB), this);
  this.Xa(this.ya, "dragenter", (0,z.ve)(this.jB), this);
  this.Xa(this.ya, "dragleave", (0,z.ve)(this.kB), this);
  this.Xa(this.ya, "dragexit", (0,z.ve)(z.fa), this);
  this.Xa(this.ya, "dragover", (0,z.ve)(z.fa), this);
  this.Xa(this.ya, "drop", (0,z.ve)(this.mB), this)
};
z.q.lB = function(a) {
  a.KH = "copy"
};
z.q.jB = function(a) {
  (0,z.G)(a.currentTarget, "image-picker-dragover")
};
z.q.kB = function(a) {
  var b = a.currentTarget.getBoundingClientRect();
  (a.x < b.left || a.clientX > b.right || a.y > b.bottom || a.clientY < b.top) && (0,z.I)(a.currentTarget, "image-picker-dragover")
};
z.q.mB = function(a) {
  (0,z.I)(a.currentTarget, "image-picker-dragover");
  a.dataTransfer && a.dataTransfer.files && a.dataTransfer.files[0] && this.Vb.start(a.dataTransfer.files[0])
};
(0,z.v)(Jk, z.Hk);
Jk.prototype.W = function() {
  Jk.s.W.call(this);
  (0,z.wg)(this.ya).g("wash", this.rA, this)
};
Jk.prototype.ja = function() {
  Jk.s.ja.call(this);
  (0,z.wg)(this.ya).clear("wash")
};
Jk.prototype.rA = function(a) {
  this.D.Bf(a.value);
  this.Ec.IF()
};
var Lk = 0, Jv = {};
z.q = Kk.prototype;
z.q.get = function(a, b) {
  return this.send("get", a, null, b)
};
z.q.oc = function(a, b) {
  return this.send("delete", a, null, b)
};
z.q.put = function(a, b, c) {
  return this.send("put", a, b, c)
};
z.q.post = function(a, b, c) {
  return this.send("post", a, b, c)
};
z.q.send = function(a, b, c, d) {
  function e() {
    l && (l.state = 2, Nk(this));
    this.Kb.H("send", !!l);
    return(0,z.y)((0,z.A)(qh(a, b, String(k), f), function(a) {
      if(h < f.Ti && a instanceof Bh && a.status && 500 <= a.status) {
        return h++, Jv
      }
    }, this), function(a) {
      if(a === Jv) {
        a = 1 == h ? 200 * Math.round(Math.random()) : 2 == h ? 200 * Math.round(3 * Math.random()) : Math.round(Math.random() * (Math.pow(2, h) - 1) * 200);
        l && (l.state = 1, l.time = a, Nk(this));
        var b = (0,z.Ob)(null), c = new z.Ab;
        window.setTimeout(c.Oa.bind(c), a);
        return(0,z.y)((0,z.Hb)(b, c), e, this)
      }
    }, this)
  }
  a = a.toUpperCase();
  var f = this.Aw(d || null), h = 0, k = c;
  k && "object" == typeof k && (f.Tn && (k = z.Dk.jd(k)), k = f.Pr ? window.JSON.stringify(k) : Ok(k));
  c = e.call(this);
  if(!f.background) {
    var l = {qb:c, state:2, time:0};
    this.Em.push(l);
    Nk(this);
    (0,z.Gb)(c, function() {
      (0,z.Za)(this.Em, l);
      Nk(this)
    }, this)
  }
  (0,z.Gb)(c, function(a) {
    if(a instanceof Error) {
      a instanceof Bh && a.status && this.Kb.H("httperror", a.status, f)
    }else {
      if(a) {
        var b = a.getResponseHeader("X-Obvious-DbInfo") || "";
        this.Kb.H("successresponse", a.responseText, f, b)
      }else {
        throw this.Kb.H("httperror", 511, f), Error("Unexpected error : 511");
      }
    }
  }, this);
  f.Gx || ((0,z.y)(c, function(a) {
    return a.responseText
  }), f.Kc && (0,z.y)(c, this.nC, this));
  return(0,z.A)(c, function(a) {
    (0,z.pa)(a) && Fh(a, "requestUrl", b);
    throw a;
  })
};
z.q.Aw = function(a) {
  a = a || {};
  var b = a.headers || {};
  b["X-XSRF-Token"] = "1";
  if(a.Pr || a.Z) {
    b["Content-Type"] = "application/json"
  }
  if(a.Kc || a.Z) {
    b.Accept = "application/json"
  }
  return{headers:b, Gs:a.Gs || 3E4, Sr:a.Sr, Tn:a.Tn, Pr:a.Pr || a.Z, Kc:a.Kc || a.Z, Gx:!!a.Gx, Ti:"undefined" == typeof a.Ti ? 10 : a.Ti, background:!!a.background}
};
z.q.nC = function(a) {
  a = Mk(a);
  a = window.JSON.parse(a);
  if("success" in a && ("payload" in a || "error" in a)) {
    a.v && a.b && this.fn && this.qj && (this.fn != a.v || this.qj != a.b) && (this.Kb.H("versionchange", a.v, a.b, this.fn, this.qj), this.fn = a.v, this.qj = a.b);
    if(a.success) {
      return a.payload
    }
    throw a.error;
  }
  return a
};
(0,z.v)(z.Sk, $g);
z.q = z.Sk.prototype;
z.q.eb = null;
z.q.fc = null;
z.q.el = function() {
  this.eb && window.document.body.removeChild(this.eb);
  this.eb = window.document.createElement("input");
  this.eb.type = "file";
  this.eb.name = "uploadedFile";
  this.eb.value = "";
  this.eb.style.position = "absolute";
  this.eb.style.left = "-9999px";
  this.eb.style.top = "-9999px";
  window.document.body.appendChild(this.eb);
  (0,z.L)(this.eb, "change", this.wB, this);
  this.eb.click()
};
z.q.start = function(a) {
  this.abort();
  if(5242880 < a.size) {
    a = Error("File is too big"), a.Jr = 413, this.H("error", this, a)
  }else {
    var b = new window.FormData;
    b.append("uploadedFile", a);
    this.fc = nh();
    (0,z.L)(this.fc.upload, "progress", this.DB, this);
    (0,z.L)(this.fc, "load", this.Yj, this);
    (0,z.L)(this.fc, "error", this.Ge, this);
    (0,z.L)(this.fc, "timeout", this.Ge, this);
    (0,z.L)(this.fc, "abort", this.NA, this);
    this.fc.open("POST", "/_/upload");
    this.fc.setRequestHeader("X-XSRF-Token", "1");
    this.fc.send(b);
    this.H("start", this);
    this.H("preview", this, a)
  }
};
z.q.abort = function() {
  this.fc && (this.fc.abort(), this.fc = null)
};
z.q.q = function() {
  this.abort();
  this.Hg();
  z.Sk.s.q.call(this)
};
z.q.wB = function() {
  this.eb && this.eb.files[0] && this.start(this.eb.files[0])
};
z.q.DB = function(a) {
  this.H("progress", this, a.loaded, a.lengthComputable ? a.total : 0)
};
z.q.Yj = function() {
  if(4 == this.fc.readyState) {
    if(200 == this.fc.status) {
      var a = Mk(this.fc.responseText);
      try {
        var b = window.JSON.parse(a);
        this.H("success", this, b.payload.value.fileId)
      }catch(c) {
        this.H("error", this, c)
      }
    }else {
      a = Error("Upload error"), a.Jr = this.fc.status, this.H("error", this, a)
    }
    this.Hg()
  }
};
z.q.Ge = function(a) {
  this.H("error", this, a || Error("Unknown upload error"));
  this.Hg()
};
z.q.NA = function() {
  this.H("abort", this, Pk());
  this.Hg()
};
z.q.Hg = function() {
  this.fc = null;
  this.eb && (window.document.body.removeChild(this.eb), this.eb = null)
};
Tk.prototype.create = function(a, b, c) {
  return(0,z.y)((0,z.Mo)(a, this.SC), function(d) {
    return new d(a, b, c)
  }, this)
};
Uk.prototype.create = function(a, b, c) {
  return new this.OC(a, b, c)
};
var Jl;
var ol;
var Lv;
z.Kv = "ontouchstart" in window.document.documentElement;
Lv = window.navigator.msPointerEnabled;
ol = "pushState" in window.history && "replaceState" in window.history;
Jl = "FileReader" in window;
(0,z.v)(Zk, z.Sh);
var $k = 6E4, Mv = !1;
z.q = Zk.prototype;
z.q.gp = "";
z.q.bn = !1;
z.q.og = function(a) {
  this.Gl || (this.Gl = (0,z.L)(window.document, "click", this.Oz, this));
  var b = this.ga;
  b.push((0,z.L)(window, "popstate", this.dA, this));
  this.bn && b.push((0,z.L)(window, "scroll", (0,z.Vk)(200, this.$u, this), this));
  z.K && b.push((0,z.L)(window.document.documentElement, "keydown", this.fD, this));
  window.onbeforeunload = this.Cp.bind(this);
  return this.replace(a)
};
z.q.fD = function(a) {
  if(32 == a.keyCode) {
    for(var b = !!a.shiftKey, c = a.target;c;c = c.parentNode) {
      if("true" === c.contentEditable || "INPUT" === c.tagName) {
        return
      }
    }
    c = (0,z.He)(a.target, !0);
    c !== window.document.body && c === window.document.activeElement && (c.scrollTop = Math.max(0, c.scrollTop + (b ? -1 : 1) * c.offsetHeight), a.preventDefault())
  }
};
z.q.navigate = function(a, b) {
  if(!(0,z.ma)(a)) {
    return(0,z.Ph)("Bad path " + a), Qb()
  }
  a = Ea(a);
  if(ol) {
    return il(this, ql(a), b, !1)
  }
  window.location = "/" + a;
  return Qb()
};
z.q.reload = function(a) {
  if(null != this.xd) {
    var b = ql(this.xd);
    il(this, b, a, !0, !0)
  }else {
    throw Error("Invalid use of reload. No active path.");
  }
};
z.q.replace = function(a, b) {
  return il(this, ql(a), b, !0)
};
z.q.update = function(a, b) {
  var c = ql(a), d = b || this.Qh;
  d.hash = c.hash;
  delete this.xb[this.xd];
  this.xb[c.path] = this.mb;
  hl(this, this.mb.Od(), c.path, d, !0);
  this.xd = c.path;
  this.Qh = d
};
z.q.Fv = function(a, b) {
  return Rb(this.$m.show(a.Ds, b), function() {
    this.mb && this.mb.ja();
    return a
  }, this)
};
z.q.ED = function(a, b) {
  var c = b.sb(), d = (0,z.Ob)(b);
  if(a.Nr) {
    if(this.bn) {
      var e = this.gv[a.Gr] || {scrollX:0, scrollY:0};
      c.focus();
      (0,z.Hb)(d, ml(c, e.scrollX, e.scrollY))
    }else {
      c.focus()
    }
  }else {
    c.focus(), (0,z.Hb)(d, ml(c, 0, 0))
  }
  return d
};
z.q.Bz = function(a, b, c) {
  try {
    c.nc.call(c)
  }catch(d) {
    (0,z.Ph)(d)
  }
  c.fe.kj(c);
  null == this.xd || this.mb.fe.re(this.xd, this.mb) || pl(this, this.xd, this.mb);
  this.mb = this.xb[a] = c;
  this.xd = a;
  this.Qh = b;
  return c
};
z.q.$u = function() {
  this.bn && this.gp && (this.gv[this.gp] = {scrollX:window.scrollX, scrollY:window.scrollY})
};
z.q.aA = function(a, b, c) {
  pl(this, a, b);
  return c
};
z.q.dA = function(a) {
  if(a.state && a.state.isNavigate) {
    var b = a.state.path, c = {};
    if(a.state.data) {
      try {
        c = window.JSON.parse(a.state.data)
      }catch(d) {
      }
    }
    c.Nr = !0;
    this.replace(b, c);
    a.preventDefault()
  }
};
z.q.Cp = function(a) {
  if(!Mv) {
    Mv = !0;
    (0,window.setTimeout)(function() {
      Mv = !1
    }, 500);
    var b = this.mb && this.mb.pn();
    if("string" == typeof b) {
      return z.B && (a.returnValue = b), b
    }
    if(b) {
      return z.B && (a.returnValue = "Are you sure you want to leave?  Unsaved changes may be lost."), "Are you sure you want to leave?  Unsaved changes may be lost."
    }
    z.B && (a.returnValue = void 0)
  }
};
z.q.Oz = function(a) {
  if(!(a.metaKey || a.shiftKey || a.altKey || a.ctrlKey || z.B && 1 != a.button || !z.B && a.button)) {
    for(var b = a.target;"A" != b.tagName;) {
      if(b = b.parentNode, !b) {
        return
      }
    }
    if(b.hostname == window.location.hostname) {
      var c = b.pathname;
      if((0,z.Aa)(c, this.So) && !c.match(/\.\w+$/)) {
        for(var d = 0;d < this.Oo.length;d++) {
          if(c.match(this.Oo[d])) {
            return
          }
        }
        var c = c.substr(this.So.length), c = c + (b.search + b.hash), e = !1, d = {};
        if(b = b.getAttribute("data-source")) {
          d.source = b
        }
        (0,z.A)(this.navigate(c, d), function(a) {
          e = !(a instanceof z.Tb)
        });
        e || a.preventDefault()
      }
    }
  }
};
z.q.gk = function(a, b) {
  this.H.apply(this, arguments)
};
z.q.LC = function() {
  for(var a in this.xb) {
    var b = this.xb[a];
    b != this.mb && b.fe.Ni(a, b) && pl(this, a, b)
  }
};
z.q.q = function() {
  (0,z.pe)(this.ga);
  Zk.s.q.call(this)
};
(0,z.v)(ll, Error);
var Nv;
z.ul.prototype.iB = function() {
  this.Hf = null
};
z.ul.prototype.open = function(a, b) {
  if(this.Hf) {
    return null
  }
  this.Hf = (new xl(this.w, a, !0, b)).open();
  this.Hf.h(Nv, this.iB, this);
  return this.Hf
};
z.ul.prototype.error = function(a) {
  return this.open({title:"Uh oh!", bodyHtml:a, type:z.wl})
};
z.ul.prototype.confirm = function(a, b, c, d) {
  return this.open({title:b || "Confirm", bodyHtml:a, type:z.Ov, xk:c}, d)
};
(0,z.v)(xl, z.Sh);
z.Pv = "confirm";
z.Qv = "cancel";
Nv = "dispose";
z.wl = "alert";
z.Ov = "confirm";
z.q = xl.prototype;
z.q.jm = !1;
z.q.open = function() {
  this.Bt = (0,z.L)(window, "keydown", this.wz, this);
  window.document.body.appendChild(this.S);
  (0,z.G)(window.document.body, "overlay-dialog-open");
  this.J.focus();
  this.jm = !0;
  this.H("open", this);
  return this
};
z.q.close = function() {
  if(this.jm) {
    return this.Bt && (0,z.pe)(this.Bt), this.S.parentNode && (0,z.F)(this.S), this.jm = !1, (0,z.I)(window.document.body, "overlay-dialog-open"), this.H("close", this), this.Ij && this.q(), this
  }
};
z.q.R = function(a) {
  return this.S ? this.S.querySelector(a) : null
};
z.q.az = function() {
  this.H(z.Pv, this);
  this.close()
};
z.q.Wh = function() {
  this.H(z.Qv, this);
  this.close()
};
z.q.AC = function() {
  this.w.get("app").reload()
};
z.q.mD = function() {
  this.H("submit", this)
};
z.q.wz = function(a) {
  27 === a.keyCode && this.close()
};
z.q.q = function() {
  (0,z.zg)(this.S);
  this.jm && (this.Ij = !1, this.close());
  this.w.get("app").ma("endNav", this.close, this);
  this.H(Nv, this);
  xl.s.q.call(this)
};
(0,z.v)(yl, $g);
z.q = yl.prototype;
z.q.Yl = "";
z.q.Ce = null;
z.q.df = null;
z.q.Ip = !1;
z.q.el = function() {
  this.abort();
  this.Ip = !0;
  this.Yl = "ie9_upload_frame_" + Math.floor(1E3 * Math.random());
  if(this.df = this.J.open({title:"Please choose an image", bodyHtml:'\x3cdiv class\x3d"ie9-dialog"\x3e\x3cform action\x3d"/_/iframe-upload" method\x3d"post" accept-charset\x3d"utf-8" enctype\x3d"multipart/form-data" target\x3d"' + (0,z.V)(this.Yl) + '"\x3e\x3cp\x3e\x3cinput type\x3d"file" name\x3d"uploadedFile"\x3e\x3c/p\x3e\x3c/form\x3e\x3cdiv class\x3d"spinner-overlay"\x3e\x3c/div\x3e\x3c/div\x3e'})) {
    this.df.h("close", this.$A, this);
    var a = this.df.R('input[type\x3d"file"]');
    (0,z.L)(a, "change", this.$p, this)
  }
  this.H("start", this)
};
z.q.abort = function() {
  this.Ip && (this.H("abort", this, Pk()), this.Hg())
};
z.q.start = function(a) {
  if(a) {
    throw Error("Direct file uploads not supported");
  }
};
z.q.q = function() {
  this.abort();
  yl.s.q.call(this)
};
z.q.$p = function(a) {
  this.Ce = window.document.createElement("iframe");
  this.Ce.setAttribute("style", "position:absolute;top:-9999px;left:-9999px;");
  this.Ce.setAttribute("id", this.Yl);
  this.Ce.setAttribute("name", this.Yl);
  window.document.body.appendChild(this.Ce);
  (0,z.L)(this.Ce, "load", this.Yj, this);
  this.df && (this.df.R("form").submit(), (0,z.G)(this.df.R(".overlay-dialog"), "uploading-image"));
  a.preventDefault()
};
z.q.$A = function() {
  this.abort()
};
z.q.Yj = function() {
  var a = (0,z.we)(this.Ce.contentWindow.document.body);
  a && (this.H("success", this, a), this.Hg())
};
z.q.Hg = function() {
  this.Ip = !1;
  this.Ce && (0,z.F)(this.Ce);
  this.df.close();
  this.Ce = this.df = null
};
zl.prototype.set = function(a) {
  this.ya && (this.ya.style.width = a + "%")
};
zl.prototype.ZD = function() {
  (0,window.clearInterval)(this.Jq);
  this.Jq = null
};
Hl.prototype.reset = function() {
  this.ya && (this.ya.style.backgroundImage = "")
};
Hl.prototype.show = function(a) {
  this.ya && (0,z.y)((0,z.Fl)(a), function(a) {
    this.ya.style.backgroundImage = 'url("' + a + '")';
    this.ya.style.display = "block"
  }, this)
};
z.q = Il.prototype;
z.q.el = function() {
  this.Vb.el()
};
z.q.start = function(a) {
  this.Vb.start(a)
};
z.q.abort = function() {
  this.Vb.abort()
};
z.q.fC = function() {
  this.kb.set("uploading-image");
  this.ii.set(0);
  this.rq.reset();
  this.nb.H(z.Rv, this)
};
z.q.eC = function(a, b, c) {
  c && this.ii.set(Math.floor(b / c * 90));
  this.nb.H(Sv, this, b, c)
};
z.q.bC = function(a, b) {
  this.D.Bf("");
  var c = (0,z.Ek)(this.D, b);
  Al(this.ii);
  (0,z.A)((0,z.y)((0,z.Gb)(this.Mg.load(c), this.ii.ZD, this.ii), function() {
    this.ii.set(100);
    this.nb.H(z.Tv, this, this.Ec.vs(b));
    this.nb.H(z.Uv, this, b)
  }, this), function(a) {
    (0,z.Ph)(a);
    this.nb.H(z.Vv, this, Error("Couldn't load file " + b))
  }, this)
};
z.q.cC = function(a, b) {
  var c = b.Jr;
  this.J.error(413 == c ? (0,z.Qk)() : 415 == c ? (0,z.Rk)() : "Sorry, an error occured while uploading an image.");
  this.Ec.ls();
  this.nb.H(z.Vv, this, b)
};
z.q.aC = function(a, b) {
  this.Ec.ls();
  this.nb.H(z.Wv, this, b)
};
z.q.dC = function(a, b) {
  this.rq.show(b)
};
(0,z.v)(z.Kl, z.Hk);
z.Kl.prototype.Ob = function(a) {
  this.Dc.push(a);
  if(this.Ki()) {
    try {
      a.W()
    }catch(b) {
      (0,z.Ph)(b)
    }
  }
  return this
};
z.Kl.prototype.W = function() {
  z.Kl.s.W.call(this);
  Ll(this, function(a) {
    a.W()
  })
};
z.Kl.prototype.ja = function() {
  Ll(this, function(a) {
    a.ja()
  });
  z.Kl.s.ja.call(this)
};
z.Kl.prototype.q = function() {
  Ll(this, function(a) {
    a.bb()
  });
  this.Dc.length = 0;
  z.Kl.s.q.call(this)
};
var Sv;
(0,z.v)(z.Ml, z.Kl);
z.Rv = "start";
Sv = "progress";
z.Uv = "complete";
z.Vv = "error";
z.Wv = "abort";
z.Tv = "change";
z.Nl = "contain";
z.Xv = {vG:"cover", uG:z.Nl};
z.q = z.Ml.prototype;
z.q.focus = (0,z.g)();
z.q.dj = (0,z.s)(45);
z.q.la = (0,z.s)(53);
z.q.Qd = (0,z.s)(16);
z.q.W = function() {
  z.Ml.s.W.call(this);
  (0,z.wg)(this.ya).g("pick-image", this.Vb.el, this.Vb).g("cancel-upload", this.abort, this).g("remove-image", function() {
    this.abort();
    this.Ec.JF()
  }, this).g("toggle-background-size", this.Ec.aG, this.Ec);
  this.D.zc() && this.Ec.Ax()
};
z.q.ja = function() {
  (0,z.zg)(this.ya);
  this.abort();
  z.Ml.s.ja.call(this)
};
z.q.reset = function() {
  this.abort();
  this.Ec.ls();
  this.kb.reset();
  this.Vb.rq.reset()
};
z.q.abort = function() {
  this.Vb && this.Vb.abort();
  this.kb.reset()
};
z.q.nn = z.ct;
z.q.Zn = z.fa;
(0,z.v)(cm, vk);
cm.prototype.bf = null;
cm.prototype.q = function() {
  this.bf && ((0,z.zg)(this.bf), (0,z.F)(this.bf));
  this.bf = null;
  cm.s.q.call(this)
};
cm.prototype.ac = function() {
  this.bf = (0,z.uf)(bm, {post:this.Qe().Ya(), TF:em(this)});
  (0,z.wg)(this.bf).g("next-post", this.ix, this);
  z.Kv || (0,z.L)(this.bf, "mouseover", this.Bx, this);
  this.Wf.appendChild(this.bf)
};
cm.prototype.jx = function(a, b) {
  return!this.Qe() || Mi() ? zk(a, b) : em(this) ? fm(this, a, b) : im(a, b)
};
(0,z.v)(jm, vk);
jm.prototype.ag = null;
jm.prototype.q = function() {
  this.ag && ((0,z.zg)(this.ag), (0,z.F)(this.ag));
  this.ag = null;
  jm.s.q.call(this)
};
jm.prototype.ac = function() {
  this.ag = (0,z.uf)(am, {post:this.Qe().Ya()});
  (0,z.wg)(this.ag).g("next-post", this.ix, this);
  (0,z.L)(this.ag, "mouseover", this.Bx, this);
  this.Wf.appendChild(this.ag)
};
jm.prototype.jx = function(a, b) {
  var c = new z.Pe(a, {name:"fade-back-out", duration:350}), d = new z.Pe(b, {name:"slide-up-in", duration:350});
  (0,z.y)(c, function() {
    a.style.visibility = "hidden";
    a.style.display = "none";
    (0,z.Ie)(a)
  });
  b.style.display = "block";
  b.style.visibility = "visible";
  (0,z.Ie)(b);
  d.start();
  c.start();
  return d
};
(0,z.v)(z.lm, M);
df(z.lm, !1, {name:"PostPayload", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{id:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, title:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, content:{l:function() {
  return z.mm
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}, postTypeName:null, collectionSlug:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(5), defaultValue:(0,z.g)()}}});
z.q = z.lm.prototype;
z.q.zc = function() {
  return(0,z.N)(this, "id")
};
z.q.Cf = function(a) {
  return(0,z.O)(this, "id", a)
};
z.q.Od = function() {
  return(0,z.N)(this, "title")
};
z.q.Kh = function(a) {
  return(0,z.O)(this, "title", a)
};
z.q.la = (0,z.s)(52);
z.q.We = (0,z.s)(55);
(0,z.v)(z.mm, M);
df(z.mm, !1, {name:"PostContent", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{body:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, subtitle:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, caption:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}, image:{l:function() {
  return yj
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(4), defaultValue:(0,z.g)()}, bodyModel:{l:function() {
  return z.vj
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(5), defaultValue:(0,z.g)()}}});
z.mm.prototype.Jn = (0,z.s)(75);
z.mm.prototype.ml = (0,z.s)(73);
var Yv = {PG:1, DH:10, nH:2, CH:3, FH:4, EH:5, BH:6, AH:7, QG:8, oH:9, $isProtoEnum:!0};
(0,z.v)(z.nm, M);
df(z.nm, !1, {name:"InsertParagraphAt", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{type:{l:function() {
  return Yv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, index:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, paragraph:{l:function() {
  return xj
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}}});
z.q = z.nm.prototype;
z.q.l = function() {
  return(0,z.N)(this, "type")
};
z.q.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
z.q.ld = function() {
  return(0,z.N)(this, "index")
};
z.q.td = (0,z.s)(41);
z.q.qf = (0,z.s)(11);
(0,z.v)(z.om, M);
df(z.om, !1, {name:"RemoveParagraphAt", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{type:{l:function() {
  return Yv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, index:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}}});
z.om.prototype.l = function() {
  return(0,z.N)(this, "type")
};
z.om.prototype.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
z.om.prototype.ld = function() {
  return(0,z.N)(this, "index")
};
z.om.prototype.td = (0,z.s)(40);
(0,z.v)(z.pm, M);
df(z.pm, !1, {name:"UpdateParagraphAt", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{type:{l:function() {
  return Yv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, index:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, paragraph:{l:function() {
  return xj
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}}});
z.q = z.pm.prototype;
z.q.l = function() {
  return(0,z.N)(this, "type")
};
z.q.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
z.q.ld = function() {
  return(0,z.N)(this, "index")
};
z.q.td = (0,z.s)(39);
z.q.qf = (0,z.s)(10);
(0,z.v)(qm, M);
df(qm, !1, {name:"UpdateTitle", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{type:{l:function() {
  return Yv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, text:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}}});
qm.prototype.l = function() {
  return(0,z.N)(this, "type")
};
qm.prototype.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
qm.prototype.Lb = function() {
  return(0,z.N)(this, "text")
};
qm.prototype.wo = function(a) {
  return(0,z.O)(this, "text", a)
};
(0,z.v)(rm, M);
df(rm, !1, {name:"UpdateSubtitle", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{type:{l:function() {
  return Yv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, text:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}}});
rm.prototype.l = function() {
  return(0,z.N)(this, "type")
};
rm.prototype.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
rm.prototype.Lb = function() {
  return(0,z.N)(this, "text")
};
rm.prototype.wo = function(a) {
  return(0,z.O)(this, "text", a)
};
(0,z.v)(sm, M);
df(sm, !1, {name:"UpdateCaption", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{type:{l:function() {
  return Yv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, text:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}}});
sm.prototype.l = function() {
  return(0,z.N)(this, "type")
};
sm.prototype.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
sm.prototype.Lb = function() {
  return(0,z.N)(this, "text")
};
sm.prototype.wo = function(a) {
  return(0,z.O)(this, "text", a)
};
(0,z.v)(z.tm, M);
df(z.tm, !1, {name:"UpdateImage", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{type:{l:function() {
  return Yv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, image:{l:function() {
  return yj
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}}});
z.tm.prototype.l = function() {
  return(0,z.N)(this, "type")
};
z.tm.prototype.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
z.tm.prototype.Jn = (0,z.s)(74);
z.tm.prototype.ml = (0,z.s)(72);
(0,z.v)(z.um, M);
df(z.um, !1, {name:"InsertSectionAt", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{type:{l:function() {
  return Yv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, index:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, section:{l:function() {
  return z.Hj
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}}});
z.q = z.um.prototype;
z.q.l = function() {
  return(0,z.N)(this, "type")
};
z.q.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
z.q.ld = function() {
  return(0,z.N)(this, "index")
};
z.q.td = (0,z.s)(38);
z.q.Nk = (0,z.s)(43);
(0,z.v)(z.vm, M);
df(z.vm, !1, {name:"RemoveSectionAt", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{type:{l:function() {
  return Yv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, index:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}}});
z.vm.prototype.l = function() {
  return(0,z.N)(this, "type")
};
z.vm.prototype.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
z.vm.prototype.ld = function() {
  return(0,z.N)(this, "index")
};
z.vm.prototype.td = (0,z.s)(37);
(0,z.v)(z.wm, M);
df(z.wm, !1, {name:"UpdateSectionAt", table:"MISSING_TABLE_IN_PROTO_DEFINITION", tb:"", lb:new Ue("undefined"), fields:{type:{l:function() {
  return Yv
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, index:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, section:{l:function() {
  return z.Hj
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}}});
z.q = z.wm.prototype;
z.q.l = function() {
  return(0,z.N)(this, "type")
};
z.q.jc = function(a) {
  return(0,z.O)(this, "type", a)
};
z.q.ld = function() {
  return(0,z.N)(this, "index")
};
z.q.td = (0,z.s)(36);
z.q.Nk = (0,z.s)(42);
z.Am = {};
z.zm = {};
xm.prototype.ug = dt;
z.Zv = (0,z.Jj)(new z.Hj, 0);
(0,z.v)(z.Fm, xm);
ym(1, z.nm, z.Fm);
z.Fm.prototype.Gb = (0,z.s)(9);
(0,z.v)(z.Gm, xm);
ym(2, z.om, z.Gm);
z.Gm.prototype.Gb = (0,z.s)(8);
(0,z.v)(z.kn, xm);
ym(3, z.pm, z.kn);
z.kn.prototype.Gb = (0,z.s)(7);
z.kn.prototype.ug = Cm;
(0,z.v)(z.ln, xm);
ym(4, qm, z.ln);
z.ln.prototype.Gb = (0,z.s)(6);
z.ln.prototype.ug = Bm;
(0,z.v)(z.mn, xm);
ym(5, rm, z.mn);
z.mn.prototype.Gb = (0,z.s)(5);
z.mn.prototype.ug = Bm;
(0,z.v)(z.nn, xm);
ym(6, z.tm, z.nn);
z.nn.prototype.Gb = (0,z.s)(4);
z.nn.prototype.ug = Bm;
(0,z.v)(z.on, xm);
ym(7, sm, z.on);
z.on.prototype.Gb = (0,z.s)(3);
z.on.prototype.ug = Bm;
(0,z.v)(z.pn, xm);
ym(8, z.um, z.pn);
z.pn.prototype.Gb = (0,z.s)(2);
(0,z.v)(z.qn, xm);
ym(9, z.vm, z.qn);
z.qn.prototype.Gb = (0,z.s)(1);
(0,z.v)(z.rn, xm);
ym(10, z.wm, z.rn);
z.rn.prototype.Gb = (0,z.s)(0);
z.rn.prototype.ug = Cm;
z.q = z.tn.prototype;
z.q.Fa = function() {
  return(0,z.un)(this.Wc())
};
z.q.Wc = function() {
  var a;
  a = (0,z.Ye)(new xj, !0).jc(this.type).wo(this.text);
  a = (0,z.O)(a, "markups", this.fb);
  a = (0,z.O)(a, "hasDropCap", this.hasDropCap);
  4 == this.type && (this.dataId && (0,z.O)(a, "dataId", this.dataId), this.layout && (0,z.O)(a, "layout", this.layout), this.metadata && a.Xe(this.metadata));
  11 == this.type && (this.layout && (0,z.O)(a, "layout", this.layout), this.metadata && (0,z.O)(a, "iframe", this.metadata));
  this.name && a.Ud(this.name);
  return z.Dk.Fa(a)
};
z.q.append = function(a) {
  var b = this.text.length;
  this.text += a.text;
  for(var c = 0;c < a.fb.length;c++) {
    var d = z.Dk.Wc(z.Ej, z.Dk.jd(a.fb[c]));
    d.setStart((0,z.Fj)(d) + b);
    d.setEnd((0,z.Gj)(d) + b);
    (0,z.xn)(this, d)
  }
};
z.q.split = function(a) {
  for(var b = new z.tn(null, this.type, this.text.substring(a)), c = 0;c < this.fb.length;c++) {
    var d = this.fb[c];
    if((0,z.Gj)(d) > a) {
      var e = z.Dk.Wc(z.Ej, z.Dk.jd(d));
      e.setStart(Math.max(0, (0,z.Fj)(d) - a));
      e.setEnd((0,z.Gj)(d) - a);
      (0,z.xn)(b, e)
    }
  }
  (0,z.Fn)(this, a, this.text.length);
  return b
};
z.q.Wb = function(a) {
  if(this.name != a.name || this.type != a.type || this.text != a.text || this.fb.length != a.fb.length) {
    return!1
  }
  for(var b = 0;b < this.fb.length;b++) {
    if(!this.fb[b].Wb(a.fb[b])) {
      return!1
    }
  }
  return!0
};
(0,z.v)(z.vn, z.tn);
z.vn.prototype.Wb = function(a) {
  return z.vn.s.Wb.call(this, a) && this.dataId == a.dataId && this.layout == a.layout
};
(0,z.v)(wn, z.tn);
wn.prototype.Wb = function(a) {
  return wn.s.Wb.call(this, a) && (this.metadata && a.metadata ? this.metadata.Wb(a.metadata) : this.metadata == a.metadata)
};
var Jn = {4:1, 3:2, 1:3, 2:4, 5:5};
z.Mb.window && (z.Mb.window._resizeIframe = ao);
var po = {"section-text-bottom":2}, fo = (0,z.rb)(po), qo = {"section-image-full":2}, go = (0,z.rb)(qo);
to.prototype.vk = function(a) {
  this.vc.text = this.zv.join("");
  (0,z.Ca)(this.vc.text, "\n") && (0,z.Fn)(this.vc, this.vc.text.length - 1, this.vc.text.length);
  a && this.vc.text.toLowerCase() == a.toLowerCase() && (0,z.Fn)(this.vc, 0, this.vc.text.length);
  return this.vc
};
(0,z.v)(xo, z.Hk);
var yo = 2E3;
xo.prototype.W = function() {
  xo.s.W.call(this);
  this.ia.h($v, this.$c, this)
};
xo.prototype.ja = function() {
  this.ia.ma($v, this.$c, this);
  this.xt.cancel();
  this.cv();
  xo.s.ja.call(this)
};
xo.prototype.$c = function(a, b) {
  for(var c = b.top > this.iu, d = this.km, e = d;0 <= e && e < this.Xd.length;e += c ? 1 : -1) {
    var f = Fe(this.Xd[e], a).y;
    if(c) {
      if(f < b.top) {
        d = e
      }else {
        break
      }
    }else {
      if(f < b.top) {
        d = e;
        break
      }
    }
  }
  this.iu = b.top;
  this.km != d && (this.km = d, this.xt())
};
xo.prototype.cv = function() {
  this.Dm && this.Dm.cancel();
  var a = this.Xd[this.km], b = (0,z.Ee)(a, z.De, this.xe), a = a.getAttribute("name"), c = b.getAttribute("name");
  a && c && (b = "/p/" + this.ka.get("id") + "/state/location", a = {versionId:this.ka.get("latestVersion"), sectionName:c, paragraphName:a}, this.Dm = (0,z.A)((0,z.Gb)((0,z.y)(this.ha.put(b, a, {Z:!0}), function(a) {
    this.ka.set("userPostRelation", a.value.value)
  }, this), function() {
    this.Dm = null
  }, this), z.Ph))
};
(0,z.v)(z.zo, z.Sh);
z.q = z.zo.prototype;
z.q.Of = !1;
z.q.S = null;
z.q.Dl = !0;
z.q.tv = !1;
z.q.L = (0,z.ca)("S");
z.q.q = function() {
  window.clearTimeout(this.Hc);
  (0,z.zg)(this.S);
  (0,z.F)(this.S);
  (0,z.pe)(this.za);
  z.zo.s.q.call(this)
};
z.q.yB = function(a) {
  "INPUT" != a.target.tagName && (a.preventDefault(), a.stopPropagation())
};
z.q.Du = function(a) {
  (0,z.Kc)(this.S, a.target) || (0,z.Do)(this)
};
z.q.BD = function() {
  this.H("update")
};
(0,z.v)(Eo, $g);
var $v = "scroll-throttled";
z.q = Eo.prototype;
z.q.q = function() {
  (0,z.pe)(this.HC);
  (0,z.pe)(this.Eq);
  (0,window.clearTimeout)(this.Hc);
  window._resizeIframe = ao;
  Eo.s.q.call(this)
};
z.q.Xj = function() {
  this.Eq && (0,z.pe)(this.Eq);
  this.ec = this.ba.mb.sb();
  this.Eq = (0,z.L)(this.ec == window.document.body ? window : this.ec, "scroll", this.$c, this)
};
z.q.$c = function() {
  var a = new z.Yd(this.ec.scrollLeft, this.ec.scrollTop, this.ec.scrollWidth, this.ec.scrollHeight);
  this.H("scroll", this.ec, a);
  var b = Date.now();
  200 <= b - this.fu && (this.H($v, this.ec, a), this.fu = b)
};
z.q.Pu = function() {
  this.H("resize");
  if(lt || kt) {
    var a = window.innerWidth, b = window.innerHeight;
    if(a === this.Lv && 2 > Math.abs(b - this.Kv)) {
      return
    }
    this.Lv = a;
    this.Kv = b
  }
  this.Hc ? (0,window.clearTimeout)(this.Hc) : ((0,z.G)(window.document.body, "resizing"), this.H("resize-start"));
  this.Hc = (0,window.setTimeout)(function() {
    this.H("resize-end");
    (0,z.I)(window.document.body, "resizing");
    this.Hc = null
  }.bind(this), 200)
};
z.q.Tz = function(a) {
  ao(a);
  this.Pu()
};
(0,z.v)(Go, z.Zi);
var Ho = 0;
z.q = Go.prototype;
z.q.vt = null;
z.q.lq = null;
z.q.xe = null;
z.q.Uh = null;
z.q.tt = null;
z.q.Aj = null;
z.q.Jl = 0;
z.q.ka = null;
z.q.gh = null;
z.q.xj = null;
z.q.Pp = null;
z.q.cc = null;
z.q.Kq = null;
z.q.Zp = null;
z.q.Ea = null;
z.q.Et = null;
z.q.Ie = function() {
  this.Da = new z.uk;
  return this.Pp
};
z.q.Sd = function(a) {
  if(!a.value || !a.references) {
    var b = Error("trying to process bad embedded data in post/ShowScreen");
    Fh(b, "badData", JSON.stringify(a));
    throw b;
  }
  b = (0,z.Ki)(a.value, a.references);
  b = this.ka = (0,z.xi)(this.U, b);
  this.$ && -1 == this.$.indexOf(b) && this.$.add(b);
  if(a.contextCollection) {
    var c = (0,z.Ki)(a.contextCollection, a.references);
    this.xj = (0,z.Hi)(this.U, c)
  }
  this.Ty = a.collaborators;
  if((0,z.P)("useragent.supportsEdit") && !Yh(this.ka) && b.get("creator.userId") == (0,z.P)("currentUser.userId")) {
    throw this.ba.navigate(this.cf() + "/edit", this.lC), new z.Tb(this.Pp);
  }
};
z.q.pb = function() {
  this.Pp = (0,z.y)((0,z.y)((0,z.y)((0,z.Yi)(this, "request").get("/" + this.cf(), {Z:!0}), this.Sd, this), this.jf, this), this.Ra, this)
};
z.q.Ra = function() {
  var a = [this.ka.get("title")];
  this.xj && a.push(this.xj.get("name"));
  a.push((0,z.P)("productName"));
  a = new z.Ui(a.join(" — "), (0,z.Wh)(this.ka, "virtuals.snippet"), "article");
  a.author = (0,z.Wh)(this.ka, "creator.name");
  a.fs = "https://www.facebook.com/medium";
  a.es = (0,z.Wh)(this.ka, "firstPublishedAt");
  this.Xe(a);
  this.xe = this.R(".post-article");
  this.Uh = this.xe.getElementsByClassName("body")[0];
  if(this.tt = this.R(".background-size-cover")) {
    this.Aj = this.R(".post-header-image-cover")
  }
  (0,z.wg)(this.o).g("sign-in", this.dD, this).g("remove-crosspost", this.fA, this).g("upvote", this.Mv, this).g("unvote", this.Mv, this).g("crosspost-to-collection", this.dz, this).g("post-edit", this.pz, this).g("show-collaborator", this.Ev, this).g("hide-collaborator", this.Ev, this).g("share-on-twitter", this.WC, this).g("share-on-facebook", this.VC, this).g("share-by-email", this.UC, this).g("resume", this.JC, this);
  (0,z.P)("variants.experimental_css_editing") && (0,z.P)("variants.is_super_user") && (this.vt = new sk(this.w, this.ka, this.xe.querySelector(".post-author-card")));
  (0,z.P)("currentUser.isAuthenticated") && this.Dc.Ob(new xo(this.w, this.xe, this.ka))
};
z.q.nc = function() {
  (0,z.vi)(1, "post");
  !Io(this) && this.ka && Yh(this.ka) && ((0,z.A)(this.ha.put("/p/" + this.V + "/state/viewed", null, {background:!0, Kc:!0}), z.Ph), (0,z.W)(vv, {postId:this.V}));
  Yh(this.ka) || (0,z.W)(wv, {postId:this.V});
  (0,z.G)(window.document.body, "template-flex-article");
  500 >= window.innerWidth || (this.Ea = new z.zo, Ao(this.Ea, Ko(this), Yh(this.ka)), (0,z.Gc)(this.Ea.L(), this.xe.querySelector(".notes-source")));
  Lo(this);
  (0,z.P)("variants.enable_skip_post") && Yh(this.ka) && (this.Kq = new jm(this.w, this.o, this.V, this.Sj), this.Kq.Rc());
  var a = this.xq(), b = Po(this), c = No(this);
  (0,z.Gb)((0,z.Gb)((0,z.Gb)(a, function() {
    return c
  }), function() {
    return b
  }), function() {
    (0,z.G)(this.o, "post-supplemental-loaded")
  }, this);
  this.Gj = (0,z.Vk)(1E3, this.cB);
  this.ia.h("scroll", this.Gj, this);
  this.ia.h("resize-end", this.Kg, this);
  z.Kv || this.ia.h("scroll", this.$c, this);
  this.Gj.call(this);
  this.Kg();
  if((0,z.P)("variants.use_experimental_css")) {
    if(a = (0,z.Wh)(this.ka, "experimentalCss")) {
      this.lq = (0,z.le)(a)
    }
    To()
  }
  this.hv.h(Vs, this.Yu, this);
  this.Dc.W()
};
z.q.ja = function() {
  this.Dc.ja();
  this.lq && me(this.lq);
  To();
  (0,z.I)(this.o, "post-supplemental-loaded");
  (0,z.pe)(this.ga);
  this.Gj.cancel();
  (0,z.I)(window.document.body, "template-flex-article");
  (0,z.gc)(this.Da);
  (0,z.gc)(this.Gc);
  (0,z.gc)(this.Ea);
  (0,z.gc)(this.cc);
  (0,z.gc)(this.Kq);
  (0,z.gc)(this.Zp);
  this.ia.ma("resize-end", this.Kg, this);
  this.ia.ma("scroll", this.Gj, this);
  this.ia.ma("scroll", this.$c, this);
  this.hv.ma(Vs, this.Yu, this);
  (0,z.gc)(this.vt)
};
z.q.Yh = function(a) {
  return a && this.U.Ba[a] ? this.U.Ba[a] : this.na ? Fi(this.U, this.na) : null
};
z.q.WC = function(a) {
  this.qk.ej((0,z.Wh)(this.ka, "title"), (0,z.Wh)(this.ka, "creator.username"), this.V, a.target.getAttribute("data-action-type") || "post", this.Ty)
};
z.q.UC = function(a) {
  this.sz.ej(this.ka.Ya(), a.target.getAttribute("data-action-type") || "post")
};
z.q.Yu = function(a) {
  a = (0,z.qb)(a);
  a.postId = this.V;
  ni(gv, a)
};
z.q.VC = function(a) {
  this.yz.ej((0,z.Wh)(this.ka, "title"), (0,z.Wh)(this.ka, "creator.name"), (0,z.Wh)(this.ka, "virtuals.snippet"), (0,z.Wh)(this.ka, "content.image.imageId"), this.V, a.target.getAttribute("data-action-type") || "post")
};
z.q.Kg = function() {
  (0,z.wo)(this.Uh);
  (0,z.vo)(this.Uh);
  Jo(this)
};
z.q.q = function() {
  (0,z.zg)(this.o);
  (0,z.gc)(this.Et);
  this.Et = null;
  this.Dc.bb();
  this.$ = null;
  Go.s.q.call(this)
};
z.q.jf = function(a) {
  var b = this.ka.Ya(), c = (0,z.sn)(b);
  this.o.innerHTML = (0,z.tf)(z.Pl, {post:b, contextCollection:this.xj ? this.xj.Ya() : void 0, mode:a.mode, collaborators:a.collaborators, postStatus:a.postStatus, isCrossPoster:a.isCrossPoster, xx:(0,z.Mn)(b, c, z.sf, !0)})
};
z.q.xq = function() {
  return(0,z.A)((0,z.y)(this.Da.Ob(Yk(500)), function() {
    this.cc = (0,z.Yi)(this, "follow-ups").Ei(this.ka, Io(this));
    return(0,z.y)((0,z.y)(this.cc.Rc(this.R(".post-follow-ups")), this.cc.iF, this.cc), function() {
      var a = (0,z.Hq)(this.cc);
      a && (0,z.Iq)(this.cc, a)
    }, this)
  }, this), z.Ph)
};
z.q.$C = function() {
  this.R(".post-footer").appendChild((0,z.uf)(Fo, {is:window.location.href}))
};
z.q.dD = function(a) {
  (0,z.ed)(a.target, "recommend-button") ? ((0,z.W)(xu, {collectionSlug:this.na, postIds:[this.V]}), a = "/m/signin?addToken\x3dtrue\x26redirect\x3d" + (0,window.encodeURIComponent)("/_/vote/" + (this.na || "p") + "/" + this.V)) : a = "/m/signin?redirect\x3d" + (0,window.encodeURIComponent)("/" + this.cf());
  window.location = a
};
z.q.dz = function(a) {
  var b = (0,z.Te)(this.Wi(".collection-link"), function(a) {
    return a.getAttribute("data-collection-slug")
  });
  (0,z.W)(yu, {collectionSlug:this.na, postIds:[this.V]});
  bq(this.Zo, this.V, b, a.target)
};
z.q.$c = function() {
  this.tt && (this.Jl = this.Jl || this.R(".background-size-cover").offsetHeight) && (this.Aj.style.visibility = this.sb().scrollTop > this.Jl ? "hidden" : "")
};
z.q.cB = function() {
  if(this.ka && Yh(this.ka)) {
    var a = (0,z.he)(this.Uh, this.o).y + this.Uh.offsetHeight;
    this.o.scrollTop + this.o.offsetHeight >= a - 100 && ((0,z.A)(this.ha.put("/p/" + this.V + "/state/read", null, {background:!0, Kc:!0}), z.Ph), (0,z.W)(Eu, {collectionSlug:this.na, postIds:[this.V]}), this.ia.ma("scroll", this.Gj, this))
  }
};
z.q.fA = function() {
  (0,window.confirm)("Are you sure you want to remove this post from this collection?") && (this.V ? ((0,z.W)(zu, {collectionSlug:this.na, postIds:[this.V]}), (0,z.A)((0,z.y)(this.ha.oc("/" + this.na + "/" + this.V), function() {
    this.ka.get("homeCollection.slug") == this.na && (this.ka.set("homeCollection", null), this.ka.set("homeCollectionId", ""));
    this.$.remove(this.ka);
    Qo(this)
  }, this), z.Jh)) : Qo(this))
};
z.q.cf = function() {
  return(this.na || "p") + "/" + this.V
};
z.q.yr = function() {
  return this.na || ""
};
z.q.Mv = function(a) {
  if(!this.Np) {
    this.Np = !0;
    var b = "unvote" == a.vd, c = a.target, d = "/" + (this.na || "p") + "/" + a.value + "/vote";
    this.ka.set("vote", !b);
    Ro(this);
    b ? ((0,z.W)(Du, {collectionSlug:this.na, postIds:[this.V]}), (0,z.I)(this.R(".post-article"), "has-vote"), (0,z.I)(c, "active"), c.setAttribute("data-action", "upvote"), d = this.ha.oc(d, {Kc:!0})) : ((0,z.W)(Cu, {collectionSlug:this.na, postIds:[this.V]}), (0,z.I)(this.R(".post-article"), "has-vote"), (0,z.G)(c, "active"), c.setAttribute("data-action", "unvote"), d = this.ha.put(d, null, {Kc:!0}));
    (0,z.Gb)(d, function() {
      this.Np = !1
    }, this);
    (0,z.A)(d, function() {
      (0,z.dd)(c, "active");
      (0,z.dd)(this.R(".post-article"), "has-vote");
      c.setAttribute("data-action", a.vd);
      this.ka.set("vote", b);
      Ro(this)
    }, this);
    (0,z.A)(d, (0,z.vl)(this.J, "We were unable to save your recommendation.  Please try again later."))
  }
};
z.q.uv = function(a) {
  var b = this.R(".vote-widget");
  !this.gh && a && (a.value.users = So(this, a.value.users), this.gh = new z.Uh(a.value));
  b.innerHTML = (0,z.tf)(Ul, this.gh.Ya())
};
z.q.aD = function(a) {
  a = (0,z.Ki)(a.value, a.references);
  var b = this.R(".post-footer");
  a.length && ((0,z.P)("variants.enable_read_next") ? (b.appendChild((0,z.uf)(Wl, {recommendations:a})), a = b.querySelector(".read-next"), (0,z.L)(a, "click", this.ZA, this), (0,z.G)(this.o, "read-next-enabled")) : (b.appendChild((0,z.uf)(Vl, {recommendations:a})), (0,z.G)(this.o, "recommended-posts-enabled")))
};
z.q.ZA = function(a) {
  var b = a.target;
  if("stat-link" == b.getAttribute("data-action")) {
    a = b.getAttribute("data-id");
    b = b.getAttribute("data-action-value").split(".").slice(-3);
    b = {fromPostId:this.V, destinationType:b[0], position:b[1], algorithm:b[2]};
    switch(b.destinationType) {
      case "post":
        b.toPostId = a;
        break;
      case "profile":
        b.toUserId = a;
        break;
      case "collection":
        b.toCollectionId = a
    }
    (0,z.W)(Ju, b)
  }
};
z.q.pz = function(a) {
  this.ba.navigate(a.target.pathname.substr(1), this.Sj.hj({scrollTop:this.sb().scrollTop}))
};
z.q.Ev = function(a) {
  function b(b) {
    (0,z.cd)(c, "post-collaborator-visible", !b);
    a.target.setAttribute("data-action", b ? "show-collaborator" : "hide-collaborator");
    a.target.innerHTML = b ? "(show)" : "(hide)"
  }
  var c = (0,z.Tc)(a.target, "SPAN"), d = "hide-collaborator" == a.vd, e = {state:d ? "hidden" : "visible"};
  b(d);
  (0,z.Gb)(this.ha.post("/p/" + this.V + "/collaborators/" + a.value, e, {Z:!0}), function(a) {
    a instanceof Error || !1 === a ? (this.Ta.W("Failed to " + (d ? "hide" : "show") + " collaborator", "error"), b(!d)) : this.Ta.W("Collaborator " + (d ? "Hidden" : "Shown"), "success")
  }, this)
};
z.q.JC = function(a) {
  var b = this.R('[name\x3d"' + a.value + '"]');
  b && b.scrollIntoView(!0);
  (0,z.F)(a.target)
};
z.q = Uo.prototype;
z.q.re = function(a, b) {
  var c = (0,z.qa)(b);
  this.xb[c] || (this.xb[c] = {time:this.now(), $b:b.$b});
  return!0
};
z.q.Ni = function(a, b) {
  var c = this.zh(b);
  c && delete this.xb[(0,z.qa)(b)];
  return c
};
z.q.qg = function(a, b, c) {
  a = (0,z.qa)(c);
  return this.xb[a] ? ((b = !this.zh(c) && (!!b.Nr || b.$b == this.xb[a].$b)) || delete this.xb[a], b) : !1
};
z.q.kj = z.fa;
z.q.now = function() {
  return(new Date).getTime()
};
z.q.zh = function(a) {
  a = (0,z.qa)(a);
  return!(a in this.xb) || this.now() - this.xb[a].time >= this.Tp
};
Af("f", "", function(a, b, c) {
  b = "";
  a.collection ? (0,z.U)(a.collection.slug) : a.post.homeCollection && a.post.homeCollection.slug && (0,z.U)(a.post.homeCollection.slug);
  var d = ig(a);
  b += '\x3carticle data-post-id\x3d"' + (0,z.V)(a.post.id) + '" class\x3d"post-item' + (a.lo ? " post-item-small" : "") + (a.zx ? " post-item-grid" : "") + (a.md ? " hide-author" : "") + (a.nd ? " hide-collection" : "") + (a.post.isRead ? " post-read-" + (0,z.V)(a.post.isRead) : "") + " post-status-" + (a.post.isPublished ? a.post.status ? (0,z.V)(a.post.status) : "" : "draft") + (c.variants.show_subtitles ? " show-subtitles-variant" : "") + '" \x3e';
  var e = a.post.creator ? a.post.creator.name : "Deleted User";
  return b += (a.post.creator ? '\x3ca href\x3d"/@' + (0,z.V)(a.post.creator.username) + '" title\x3d"Go to the profile of ' + (0,z.V)(a.post.creator.name) + '"\x3e' + (0,z.ij)((0,z.yf)(a, {user:a.post.creator, od:"post-item-avatar"}), c) + "\x3c/a\x3e" : "") + '\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.V)((0,z.Xf)(d)) + '" title\x3d"' + (0,z.V)(a.post.title) + " by " + (0,z.V)(e) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.V)(d) + '"' + (a.source ? ' data-source\x3d"' + 
  (0,z.V)(a.source) + '" ' : "") + "\x3e" + (a.post.title ? (0,z.U)(a.post.title) : "Untitled") + "\x3c/a\x3e\x3c/h3\x3e" + (c.variants.show_subtitles ? "" : mj(a, c)) + (a.Wx && c.variants.show_subtitles || !a.lo && !a.zx ? '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.V)((0,z.Xf)(d)) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.V)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.V)(a.source) + '" ' : "") + "\x3e" + (c.variants.show_subtitles ? "\x3cp\x3e" + (0,z.U)(a.post.virtuals.draftSnippet) + 
  "\x3c/p\x3e" : "\x3cp\x3e" + (0,z.U)(a.post.virtuals.snippet) + "\x3c/p\x3e") + "\x3c/a\x3e" : "") + (c.variants.show_subtitles ? mj(a, c) : "") + "\x3c/article\x3e"
});
Af("f", "drafts", function(a, b, c) {
  b = "";
  var d = hg(a, c), e = a.post.creator ? a.post.creator.name : "Deleted User";
  return b += '\x3carticle data-post-id\x3d"' + (0,z.V)(a.post.id) + '" class\x3d"post-item post-status-draft"\x3e' + (!a.Kw && a.post.creator ? '\x3ca href\x3d"/@' + (0,z.V)(a.post.creator.username) + '" title\x3d"Go to the profile of ' + (0,z.V)(a.post.creator.name) + '"\x3e' + (0,z.ij)((0,z.yf)(a, {user:a.post.creator, od:"post-item-avatar"}), c) + "\x3c/a\x3e" : "") + '\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.V)((0,z.Xf)(d)) + '" title\x3d"' + (0,z.V)(a.post.title) + " by " + 
  (0,z.V)(e) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.V)(d) + '"\x3e' + (a.post.title ? (0,z.U)(a.post.title) : "Untitled") + '\x3c/a\x3e\x3c/h3\x3e\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.V)((0,z.Xf)(d)) + '" title\x3d"' + (0,z.V)(a.post.title) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.V)(d) + '"\x3e\x3cp\x3e' + (0,z.U)(a.post.virtuals.draftSnippet) + "\x3c/p\x3e\x3c/a\x3e\x3c/article\x3e"
});
(0,z.v)(jp, z.Zi);
z.q = jp.prototype;
z.q.fe = new Uo(3E5);
z.q.qb = null;
z.q.Le = null;
z.q.ek = null;
z.q.Ha = null;
z.q.sb = z.Ni;
z.q.Ie = (0,z.ca)("qb");
z.q.Ra = function() {
  var a = this.Le.get("name") + " — " + (0,z.P)("productName"), b = this.Le.get("description");
  this.Xe(new z.Ui(a, b, "website"));
  (0,z.wg)(this.o).g("new-post", this.Yp, this);
  this.ek && (this.Ha = new z.qp(this.w), (0,z.tp)((0,z.sp)((0,z.rp)(this.Ha, this.ek), this.o).Jh(this.sb()), {collection:this.Le.Ya(), nd:!0}), this.Ha.h(aw, this.ym, this))
};
z.q.nc = function() {
  (0,z.W)(uv, {collectionId:this.Le.get("id"), collectionSlug:this.Lc});
  (0,z.vi)(1, "collection");
  this.Ha && this.Ha.W()
};
z.q.q = function() {
  (0,z.zg)(this.o);
  this.Ha && ((0,z.gc)(this.Ha), this.Ha = null);
  jp.s.q.call(this)
};
z.q.ja = function() {
  this.Ha && this.Ha.ja();
  jp.s.ja.call(this)
};
z.q.yr = (0,z.ca)("Lc");
z.q.Yp = function() {
  (0,z.W)(wu, {source:"collection"});
  this.kh.navigate(this.Lc + "/new-post");
  return!1
};
z.q.iq = function(a) {
  a = a.split("/");
  return a[1] ? a[1] : "overview"
};
z.q.ym = function(a) {
  a = (0,z.Te)(a, function(a) {
    return a.get("id")
  });
  (0,z.W)(tu, {collectionSlug:this.Lc, postIds:a})
};
(0,z.v)(kp, jp);
z.q = kp.prototype;
z.q.Hd = null;
z.q.Mm = null;
z.q.Ba = {};
z.q.Hm = {};
z.q.pb = function() {
  this.qb = (0,z.y)((0,z.y)(this.Fh.get("/" + this.path + "?posts\x3dtrue", {Z:!0}), this.Fc, this), this.Ra, this)
};
z.q.Ra = function() {
  this.ap();
  lp(this, "latest", ".collection-by-latest");
  lp(this, "recommended", ".collection-by-recommended");
  lp(this, "oldest", ".collection-by-oldest");
  kp.s.Ra.call(this)
};
z.q.Sd = function(a) {
  this.Fc({value:a.collection, latestPosts:a.latestPosts, oldestPosts:a.oldestPosts, recommendedPosts:a.recommendedPosts, references:{User:{}}})
};
z.q.nc = function() {
  kp.s.nc.call(this);
  for(var a in this.Ba) {
  }
  a = {collectionSlug:this.Lc, postIds:[].map(function(a) {
    return a.get("id")
  })};
  (0,z.W)(tu, a);
  this.ek || this.Dp || !(0,z.P)("variants.can_see_related_collections") || (this.Mm = (0,z.Gb)((0,z.A)((0,z.y)(this.Fh.get("/" + this.yr() + "/related", {Z:!0, background:!0}), this.bD, this), z.Ph), function() {
    this.Mm = null
  }, this))
};
z.q.q = function() {
  (0,z.gc)(this.Hd);
  this.Hd = null;
  for(var a in this.Ba) {
  }
  for(var b in this.Hm) {
    op(this.Hm[b])
  }
  this.Hm = {};
  kp.s.q.call(this)
};
z.q.ja = function() {
  this.Mm && this.Mm.cancel();
  kp.s.ja.call(this)
};
z.q.Fc = function(a) {
  var b = (0,z.Ki)(a.value, a.references);
  this.Le = (0,z.Hi)(this.oh, b);
  this.Yh(a.latestPosts, a.references, "latest");
  this.Yh(a.recommendedPosts, a.references, "recommended");
  this.Yh(a.oldestPosts, a.references, "oldest");
  "oldest" == this.Le.get("collectionSort") && (this.ek = this.Ba.oldest)
};
z.q.Yh = function(a, b, c) {
  a = (0,z.Ki)(a, b);
  this.Ba[c] = Fi(this.oh, this.Lc, c);
  this.Ba[c].ee(a)
};
z.q.ap = function() {
  var a = {feedUrl:"/feed/" + this.Lc, latestPosts:this.Ba.latest.Ya(), recommendedPosts:this.Ba.recommended.Ya(), oldestPosts:this.Ba.oldest.Ya(), user:(0,z.P)("currentUser"), filterBy:this.filterBy};
  this.Hd = (0,z.tj)(new z.sj(this.o, this.Le, dp), a, "collection").ac()
};
z.q.bD = function(a) {
  var b = (0,z.Ki)(a.value, a.references);
  a = this.R(".wrapper");
  b.length && !this.Dp && (b = b.map(function(a) {
    return a.collection
  }), b = b.filter(function(a) {
    return!!a
  }), a.appendChild((0,z.uf)(ep, {collections:b})), (0,z.G)(this.o, "related-collections-enabled"), this.Dp = !0)
};
(0,z.v)(z.pp, z.D);
z.q = z.pp.prototype;
z.q.Jh = (0,z.ba)("ni");
z.q.og = function() {
  this.fm ? this.ia.h($v, this.Yd, this) : (0,z.rg)("load-more-items", this.ev, this);
  this.fm && this.Yd()
};
z.q.disable = (0,z.s)(65);
z.q.enable = function() {
  this.ai = !1
};
z.q.q = function() {
  this.ia.ma($v, this.Yd, this);
  (0,z.ug)("load-more-items");
  z.pp.s.q.call(this)
};
z.q.Yd = function() {
  if(this.ai) {
    this.Fq = !0
  }else {
    this.Fq = !1;
    var a = this.ni.scrollTop, b = this.ni.scrollHeight, c = Math.min(this.ni.offsetHeight, (0,z.uc)(window).height);
    a + 3 * c > b && this.ev()
  }
};
z.q.ev = function() {
  this.ai || (this.ai = !0, (0,z.A)((0,z.Gb)(ii(this.Tb, this.om), function() {
    this.ai = !1;
    this.Fq && this.Yd()
  }, this), z.Ph))
};
(0,z.v)(z.qp, z.Sh);
z.qp.prototype.$ = null;
z.qp.prototype.$e = null;
z.qp.prototype.ni = null;
z.qp.prototype.yq = null;
var aw = "add";
z.q = z.qp.prototype;
z.q.Jh = function(a) {
  this.ni = a;
  return this
};
z.q.W = function() {
  this.$e && mp(this.$e, this.ba, this.$);
  this.Ng = new z.pp(this.w, this.$, 10);
  this.Ng.Jh(this.ni);
  (0,window.setTimeout)(function() {
    this.Ng && this.Ng.og()
  }.bind(this), 250)
};
z.q.ja = function() {
  (0,z.gc)(this.Ng);
  this.Ng = null;
  this.$e && op(this.$e)
};
z.q.q = function() {
  this.$ && (this.$.ma("add", this.ym, this), this.$.ma("remove", this.Ou, this), this.$ = null)
};
z.q.ym = function(a) {
  var b = {posts:Vh(a)}, c;
  for(c in this.yq) {
    b[c] = this.yq[c]
  }
  b = (0,z.Cc)((0,z.tf)(Xo, b));
  this.$e.querySelector(".bucket").appendChild(b);
  (0,z.F)(this.$e.querySelector(".empty-bucket"));
  this.Ng && (b = this.Ng, b.fm && b.Yd());
  this.H(aw, a, this)
};
z.q.Ou = function(a) {
  var b = this.$e.querySelector('.post-item[data-post-id\x3d"' + a.get("id") + '"]');
  (0,z.F)(b);
  this.H("remove", a, this)
};
(0,z.v)(up, jp);
z.q = up.prototype;
z.q.Hd = null;
z.q.$ = null;
z.q.pb = function() {
  var a = this.oh.yd[this.Lc] || null, b = this.$b && !!this.oh.Ba[this.$b];
  a && b ? (this.Le = a, this.$ = this.oh.Ba[this.$b], this.Ra()) : this.qb = (0,z.y)((0,z.y)(this.Fh.get("/" + this.path + "?posts\x3dtrue", {Z:!0}), this.Fc, this), this.Ra, this)
};
z.q.Ra = function() {
  this.ap();
  up.s.Ra.call(this)
};
z.q.Sd = function(a) {
  this.Fc({value:a.collection, posts:a.posts, references:{User:{}}})
};
z.q.nc = function() {
  var a = {collectionSlug:this.Lc, postIds:this.$.wa.concat().map(function(a) {
    return a.get("id")
  })};
  (0,z.W)(tu, a);
  up.s.nc.call(this)
};
z.q.q = function() {
  (0,z.gc)(this.Hd);
  this.Hd = null;
  up.s.q.call(this)
};
z.q.ja = function() {
  up.s.ja.call(this)
};
z.q.Fc = function(a) {
  var b = (0,z.Ki)(a.value, a.references);
  this.Le = (0,z.Hi)(this.oh, b);
  a = (0,z.Ki)(a.posts, a.references);
  this.$ = Fi(this.oh, this.Lc, this.filterBy);
  this.$.ee(a);
  this.ek = this.$
};
z.q.ap = function() {
  var a = {feedUrl:"/feed/" + this.Lc, user:(0,z.P)("currentUser"), posts:this.$.Ya(), nd:!0, filterBy:this.filterBy};
  this.Hd = (0,z.tj)(new z.sj(this.o, this.Le, dp), a, "collection").ac()
};
z.q = vp.prototype;
z.q.HD = function(a) {
  !(a = a.event.target) || "IMG" != a.tagName || a.width >= window.innerWidth - Dp || (wp(this, !0), this.Rh = new xp(a, this.w), zp(this.Rh), this.Eg = el(this.w.get("app")).sb(), this.ga.push((0,z.L)(this.Eg, "scroll", (0,z.Wk)(100, this.Yd, this), this)), this.ga.push((0,z.L)(window.document, "click", this.Ry, this, !0)), this.ga.push((0,z.L)(window.document, "keyup", this.yA, this)), this.ga.push((0,z.L)(window.document, "touchstart", this.wD, this)))
};
z.q.IA = function(a, b) {
  function c(a) {
    var b = window.document.createElement("img");
    b.src = yp(a);
    this.pq = (0,z.L)(b, z.Ap, function() {
      if(a.width === a.height && !a.getAttribute("data-width")) {
        var c = Math.min(b.width, b.height);
        a.setAttribute("data-width", c);
        a.setAttribute("data-height", c);
        return b.src = yp(a)
      }
      a.src = b.src;
      a.getAttribute("data-width") || (a.setAttribute("data-width", b.width), a.setAttribute("data-height", b.height));
      d.call(this)
    }, this)
  }
  function d() {
    if(this.oq.length) {
      var a = this.oq.shift();
      c.call(this, a)
    }
  }
  b && (wp(this, !0), this.pq && (0,z.pe)(this.pq), this.oq = Array.prototype.slice.call(el(this.w.get("app")).Wi('[data-action\x3d"zoom"]')), d.call(this))
};
z.q.Yd = function() {
  null === this.Hp && (this.Hp = this.Eg.scrollTop);
  40 <= Math.abs(this.Hp - this.Eg.scrollTop) && wp(this)
};
z.q.yA = function(a) {
  27 == a.keyCode && wp(this)
};
z.q.Ry = function(a) {
  a.stopPropagation();
  a.preventDefault();
  wp(this)
};
z.q.wD = function(a) {
  this.Wt = a.touches[0].pageY;
  this.Bv = (0,z.L)(a.target, "touchmove", this.vD, this)
};
z.q.vD = function(a) {
  10 < Math.abs(a.touches[0].pageY - this.Wt) && (wp(this), (0,z.pe)(this.Bv))
};
(0,z.v)(xp, z.D);
var Dp = 80;
xp.prototype.close = function() {
  (0,z.I)(window.document.body, "zoom-overlay-open");
  (0,z.G)(window.document.body, "zoom-overlay-transitioning");
  (0,z.Zd)(this.yb, "transform", "");
  (0,z.Zd)(this.ae, "transform", "");
  z.B && !(0,z.$b)(10) ? this.bb() : this.ce = (0,z.L)(this.yb, z.cj, this.bb, this)
};
xp.prototype.bb = function() {
  this.Pa.hd || this.Pa.cancel();
  this.Qp && (0,z.pe)(this.Qp);
  this.ce && (0,z.pe)(this.ce);
  this.ae && this.ae.parentNode && ((0,z.I)(this.yb, "zoom-img"), this.ae.parentNode.replaceChild(this.yb, this.ae), this.Zj.parentNode.removeChild(this.Zj), (0,z.I)(window.document.body, "zoom-overlay-transitioning"))
};
(0,z.v)(Fp, z.Hk);
var Hp = 500;
Fp.prototype.W = function() {
  Fp.s.W.call(this);
  this.Pa = new z.Ab;
  (0,z.y)(this.Pa, this.bb, this);
  this.rz.forEach(function(a) {
    this.Xa(a, this.hz, this.Mz, this);
    this.Xa(a, this.Gy, this.Iz, this)
  }, this)
};
Fp.prototype.Iz = function() {
  this.fv.cancel()
};
Fp.prototype.IC = function() {
  this.Pa.Oa(!0)
};
Fp.prototype.Mz = function(a) {
  var b = a.currentTarget;
  (a = a.relatedTarget) && (0,z.Kc)(b, a) || this.fv()
};
z.q = z.Ip.prototype;
z.q.enable = function() {
  this.enabled || z.Kv || (this.pp = (0,z.L)(window.document, "mouseover", this.It, this), this.op = (0,z.L)(window.document, z.fu, this.It, this), this.o = window.document.createElement("div"), window.document.body.appendChild(this.o), this.enabled = !0)
};
z.q.disable = (0,z.s)(64);
z.q.R = function(a) {
  return this.o.querySelector(a)
};
z.q.Wi = function(a) {
  return this.o ? (0,z.cb)(this.o.querySelectorAll(a)) : []
};
z.q.ac = function(a) {
  return'\x3cdiv class\x3d"tooltip-inner"\x3e' + (a.SE ? '\x3ca href\x3d"' + (0,z.V)((0,z.Xf)(a.er)) + '" target\x3d"_blank"\x3e' + (0,z.U)(a.er) + "\x3c/a\x3e" : (0,z.U)(a.er)) + '\x3c/div\x3e\x3cdiv class\x3d"tooltip-arrow"\x3e\x3c/div\x3e'
};
z.q.It = function(a) {
  var b = a.target;
  if(b && b.getAttribute && this.Sa !== b && b.getAttribute("data-tooltip")) {
    a && a.preventDefault();
    var c = b.getAttribute("data-tooltip-position") || "top", d = b.getAttribute("data-tooltip"), e = "link" === b.getAttribute("data-tooltip-type");
    (0,z.cd)(this.o, "tooltip-link", e);
    d != this.dp && (this.o.innerHTML = this.ac({er:d, SE:e}), this.dp = d);
    this.Sa = b;
    Lp(this, c, b);
    (0,z.pe)(this.ve);
    (0,z.gc)(this.oj);
    this.oj = new Fp(a.type, [this.o, this.Sa]);
    this.oj.W();
    (0,z.y)(this.oj.Pa.Je(), this.remove, this)
  }
};
z.q.remove = function() {
  var a = this.o;
  (0,z.ed)(a, this.Ai) && ((0,z.gc)(this.oj), this.oj = null, (0,z.I)(a, this.Ai), (0,z.pe)(this.ve), this.ve = (0,z.L)(a, z.cj, function() {
    a.style.visibility = "hidden";
    (0,z.pe)(this.ve)
  }, this), this.Sa = null)
};
(0,z.v)(z.Np, z.Ip);
z.q = z.Np.prototype;
z.q.L = (0,z.ca)("o");
z.q.enable = function() {
  this.enabled || (this.enabled = !0)
};
z.q.disable = (0,z.s)(63);
z.q.Kz = function(a) {
  (0,z.Kc)(this.o, a.target) || this.remove()
};
z.q.mA = function(a) {
  (0,z.Kc)(this.o, a.target) || this.remove()
};
z.q.Ot = function() {
  var a = this.Sa;
  this.remove();
  Pp(this, a)
};
z.q.remove = function() {
  var a = this.o;
  a && (0,z.ed)(a, this.Ai) && ((0,z.I)(a, this.Ai), (0,z.pe)(this.ve), this.ve = (0,z.L)(a, z.cj, function() {
    a.style.visibility = "hidden";
    (0,z.pe)(this.ve)
  }, this), (0,z.pe)(this.Ul), (0,z.pe)(this.Vl), this.Vl = this.Ul = this.Sa = null, this.ia.ma("resize-end", this.Ot, this), this.Pa.Oa(!0), this.Pa = null)
};
z.q.ac = function(a) {
  return'\x3cdiv class\x3d"popover-inner ' + (a.fx ? (0,z.V)(a.fx) : "") + '"\x3e' + (0,z.Zf)(a.$D) + '\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e'
};
Qp.prototype.be = null;
var bw = "dismiss";
z.q = Qp.prototype;
z.q.W = function(a, b) {
  var c = "string" == typeof b ? {type:b} : b || {}, d = this.ba.mb.R(".cover"), e = "butter-bar active ";
  c.type && (e += c.type + " ");
  d || (e += "butter-bar-center ");
  this.Ta.className = e;
  var d = this.Ta, e = c.jj, f = c.Vw, e = '\x3cp class\x3d"butter-bar-message"\x3e' + (0,z.Zf)(a) + (e ? '\x3cspan class\x3d"butter-bar-actions"\x3e・\x3cbutton class\x3d"btn btn-chromeless butter-bar-action" data-action\x3d"undo"\x3eUndo\x3c/button\x3e\x3c/span\x3e' : "") + (f ? '\x3cbutton data-action\x3d"butter-bar-dismiss" class\x3d"butter-bar-dismiss btn-chromeless icons icons-remove"\x3e\x3c/button\x3e' : "") + "\x3c/p\x3e";
  d.innerHTML = e;
  this.be && (0,window.clearTimeout)(this.be);
  c.Vw ? this.ba.h("endNav", this.ja, this) : -1 != c.by && (this.be = (0,window.setTimeout)(this.ja.bind(this), c.by || 5E3));
  this.Kb.H("activate", this);
  return this.oC = new z.Ab
};
z.q.ja = function() {
  (0,z.I)(this.Ta, "active");
  this.ba.ma("endNav", this.ja, this);
  this.Kb.H("deactivate", this);
  this.Kb.clear();
  this.be = null
};
z.q.kz = function() {
  this.Kb.H(bw, this);
  this.ja()
};
z.q.$B = function() {
  this.oC.Oa(null)
};
z.q.yC = function() {
  this.Kb.H("action", this)
};
(0,z.v)(z.Sp, z.$h);
z.q = z.Sp.prototype;
z.q.up = null;
z.q.Dt = null;
z.q.ip = 0;
z.q.om = window.Infinity;
z.q.Bf = function(a, b) {
  this.up = a;
  this.Dt = b || null;
  (0,z.Tp)(this);
  return this
};
z.q.tc = (0,z.s)(19);
z.q.add = function() {
  throw Error("Not implemented");
};
z.q.jh = function() {
  throw Error("Not implemented");
};
z.q.ee = function() {
  throw Error("Not implemented");
};
z.q.remove = function() {
  throw Error("Not implemented");
};
z.q.hl = (0,z.s)(50);
z.q.update = function() {
  throw Error("Not implemented");
};
z.q.q = function() {
  this.Tb.ma("add", this.Ju, this);
  this.Tb.ma("remove", this.Nu, this);
  this.Tb.ma("change", this.Lu, this);
  this.wa = this.Tb = null;
  z.Sp.s.q.call(this)
};
z.q.uo = function(a, b) {
  this.Tb.uo(a, b);
  return this
};
z.q.Mk = function(a) {
  return this.Tb.Mk(a)
};
z.q.Ju = function() {
  Up(this)
};
z.q.Nu = function() {
  Up(this)
};
z.q.Lu = function(a) {
  var b = this.wa;
  Up(this);
  for(var c = [], d = 0;d < a.length;d++) {
    var e = a[d].Ur;
    Vp(e, this.wa) && Vp(e, b) && c.push(a[d])
  }
  c.length && this.H("change", c)
};
(0,z.v)(Yp, z.D);
z.q = Yp.prototype;
z.q.Ij = !1;
z.q.Sh = null;
z.q.Xf = null;
z.q.S = null;
z.q.Hd = null;
z.q.Vt = "";
z.q.nu = "";
z.q.sv = !1;
z.q.bh = null;
z.q.Rf = null;
z.q.so = function(a) {
  this.Rf = a;
  return this
};
z.q.ac = function(a) {
  var b = (0,z.P)("variants.enable_new_cross_post") && !(0,z.P)("useragent.requiresBodyScroll") && this.Sh && 1E3 < window.document.body.clientWidth;
  this.S = window.document.createElement("div");
  this.S.className = b ? "list-choice" : "sidepanel";
  var c = {Ow:this.Vt, fF:this.nu, Vx:this.sv};
  this.Hd = (0,z.tj)(new z.sj(this.S, this.D, b ? Xp : Wp), c, "items");
  this.Rf && this.Hd.so(this.Rf);
  this.Hd.ac();
  a = a || window.document.body;
  b ? (a = "uid" + (0,z.qa)(this.Sh), (0,z.Gb)((0,z.Op)(this.lc, this.Sh, '\x3cdiv id\x3d"' + a + '"\x3e\x3c/div\x3e', "list-choice-popover"), this.close, this), window.document.getElementById(a).appendChild(this.S), a = (0,z.uc)(window).height / 2 < this.Sh.getBoundingClientRect().top ? "bottom" : "top", Lp(this.lc, a, this.Sh), $p(this), this.en = !0) : (a.appendChild(this.S), this.en = !1);
  (0,z.wg)(this.S).g("select", this.QC, this).g("cancel", this.jt, this).g("pick", this.pC, this);
  if(b) {
    (0,z.G)(Zp(this), "list-choice-open")
  }else {
    var d = this.S.querySelector(".sidepanel-glass");
    (0,z.L)(d, "click", function(a) {
      a.target == d && this.close()
    }, this)
  }
};
z.q.open = function() {
  var a = this.S;
  window.setTimeout(function() {
    this.en ? a.querySelector(".list-choice-items").focus() : ((0,z.G)(a, "sidepanel-open"), a.querySelector(".sidepanel-panel").focus())
  }.bind(this), 10);
  return this.Xf = new z.Ab
};
z.q.close = function() {
  (0,z.I)(Zp(this), "list-choice-open");
  this.en ? this.lc.remove() : (0,z.I)(this.S, "sidepanel-open");
  this.Xf && !this.Xf.hd && this.Xf.cancel();
  this.Xf = null;
  this.Ij && window.setTimeout(this.bb.bind(this), 1E3)
};
z.q.q = function() {
  this.Xf && this.close();
  (0,z.gc)(this.Hd);
  (0,z.gc)(this.D);
  (0,z.zg)(this.S);
  (0,z.F)(this.S);
  Yp.s.q.call(this)
};
z.q.QC = function(a) {
  this.bh && (0,z.I)(this.bh, "sidepanel-selected");
  this.bh = a.target;
  (0,z.G)(this.bh, "sidepanel-selected")
};
z.q.jt = function() {
  this.bh && ((0,z.I)(this.bh, "sidepanel-selected"), this.bh = null)
};
z.q.pC = function(a) {
  this.Xf.Oa(a.value);
  this.jt()
};
z.q = aq.prototype;
z.q.Rc = function() {
  this.J = this.w.get("dialog")
};
z.q.fq = function() {
  this.Tg && this.Tg.close();
  this.Rt && this.At();
  this.Rt = !0
};
z.q.Fy = function() {
  this.J.error("This featured is currently disabled.")
};
z.q.eD = function(a) {
  var b = {location:window.location.href}, c = a.target.getAttribute("data-login-source");
  c && (b.source = c);
  (0,z.W)(nv, b);
  if((0,z.P)("variants.auth_in_popup")) {
    b = "/m/signin/refresh";
    a.value && (b += "?action\x3d" + (0,window.encodeURIComponent)(a.value));
    var b = (window.location.origin || "http://" + window.location.host) + "/m/account/authenticate-twitter?redirect\x3d" + (0,window.encodeURIComponent)(b), c = Math.max(window.screenX + Math.round(window.outerWidth / 2 - 335), 0), d = Math.max(window.screenY + Math.round(window.outerHeight / 2 - 345), 0);
    if(b = window.open(b, "login", ["scrollbars\x3dyes,resizable\x3dyes,toolbar\x3dno,location\x3dyes,width\x3d670,height\x3d690", "left\x3d" + c, "top\x3d" + d].join())) {
      b.focus();
      return
    }
  }
  b = window.location.pathname + window.location.search + window.location.hash;
  window.location = "/m/account/authenticate-twitter?redirect\x3d" + (0,window.encodeURIComponent)(a.value || b)
};
z.q.Ly = function(a) {
  var b;
  b = window.location.pathname + window.location.search + window.location.hash;
  var c = a.target.getAttribute("data-redirect") || b, d = this.lc;
  null != a.target.getAttribute("data-requires-token") ? (b = this.ha.get("/m/token", {Kc:!0, background:!0}), (0,z.y)(b, function(b) {
    a.target.setAttribute("data-redirect", (0,window.encodeURIComponent)(c + "?token\x3d" + b.value));
    a.target.removeAttribute("data-requires-token");
    Pp(d, a.target)
  }), (0,z.A)(b, function() {
    window.location = "/m/signin?addToken\x3dtrue\x26redirect\x3d" + (0,window.encodeURIComponent)(c)
  })) : Pp(d, a.target)
};
z.q.kD = function(a) {
  a.value && (0,z.ri)(a.value);
  if(!a.Pn) {
    var b = a.target;
    if(b.href) {
      if(b.hostname == window.location.hostname) {
        var c = b.pathname;
        "/" === b.pathname.charAt(0) && (c = c.substr(1));
        b = {};
        if(a = a.target.getAttribute("data-source")) {
          b.source = a
        }
        this.ba.navigate(c, b)
      }else {
        window.location = b.href
      }
    }
  }
};
z.q.At = function() {
  (0,z.F)(window.document.querySelector(".overlay-interstitial"))
};
z.q.Av = function(a) {
  var b = a.value;
  if(!this.uq[b]) {
    var c = "add-to-reading-list" == a.vd;
    a = "/p/" + a.value + "/bookmarks";
    gq(this, b, c);
    a = c ? this.ha.put(a, null, {Kc:!0}) : this.ha.oc(a, {Kc:!0});
    this.uq[b] = a;
    (0,z.Gb)(a, function() {
      delete this.uq[b]
    }, this);
    (0,z.y)(a, function() {
      var a = c ? Hu : Iu, e = this.U.Pc(b), f = {postId:b};
      e && (f.readingTime = e.get("virtuals.readingTime"));
      (0,z.W)(a, f)
    }, this);
    (0,z.A)(a, function() {
      this.Ta.W("Sorry, we’re having trouble updating your bookmarks. Please try again.", "error");
      gq(this, b, !c)
    }, this)
  }
};
z.q.uD = function(a) {
  var b = a.value, c = a.target.getAttribute("data-collection-id"), d = this.U.yd[b] || null, b = "/me/subscriptions/collection/" + b, e, f, h, k = (0,z.ed)(a.target, "active");
  k ? (f = "delete", h = vu, e = "An error occurred. Please try unfollowing the collection again.") : (f = "put", h = uu, e = "An error occurred. Please try following the collection again.");
  d && d.set("virtuals.isSubscribed", !k);
  (0,z.cd)(a.target, "active", !k);
  (0,z.A)((0,z.y)(this.ha.send(f, b, {}, {Z:!0}), function() {
    (0,z.W)(h, {collectionId:c})
  }, this), function(b) {
    d && d.set("virtuals.isSubscribed", k);
    (0,z.cd)(a.target, "active", k);
    this.Ta.W(e, "error");
    (0,z.Ph)(b)
  }, this)
};
hq.prototype.eq = function() {
  iq(this)
};
var cw = "january february march april may june july august september october november december".split(" ");
(0,z.v)(kq, z.Zi);
z.q = kq.prototype;
z.q.fe = yv;
z.q.Pa = null;
z.q.Ha = null;
z.q.$ = null;
z.q.ut = "";
z.q.sb = z.Ni;
z.q.Ie = (0,z.ca)("Pa");
z.q.pb = function() {
  this.Pa = (0,z.y)((0,z.y)(this.Sp(), this.jf, this), this.Ra, this)
};
z.q.Ra = function() {
  var a = (0,z.P)("productName") + " Top 100 - " + lq(this) + " - " + (0,z.P)("productName"), b = "The most read posts of " + lq(this) + ".";
  this.Xe(new z.Ui(a, b, "website"));
  this.Ha = (0,z.tp)((0,z.sp)((0,z.rp)(new z.qp(this.w), this.$), this.o).Jh(this.sb()), {lo:!0, tF:!0, Wx:!0})
};
z.q.Sd = function(a) {
  this.Fc({value:a.posts, coverImgUrl:a.coverImgUrl, references:{User:{}, Collection:{}}})
};
z.q.nc = function() {
  this.Ha && this.Ha.W()
};
z.q.ja = function() {
  this.Ha && this.Ha.ja()
};
z.q.Sp = function() {
  return this.U.Ba[this.mc] ? (this.$ = this.U.Ba[this.mc], (0,z.Ob)(!0)) : (0,z.y)(this.ha.get("/" + this.wb, {Z:!0}), this.Fc, this)
};
z.q.Fc = function(a) {
  var b = (0,z.Ki)(a.value, a.references), c = "/top-100/" + this.di + "-" + this.hn + "/load-more";
  this.U.Ba[this.mc] ? this.$ = this.U.Ba[this.mc] : (this.$ = (0,z.Di)(this.U, this.mc, c, "POST"), this.$.ee(b), this.ut = a.coverImgUrl)
};
z.q.jf = function() {
  var a = this.$.Ya(), b = this.di.charAt(0).toUpperCase() + this.di.slice(1), c = (0,z.P)("bestOfFirstSlug").toString(), d = (0,z.P)("bestOfLatestSlug").toString(), e = this.o, f = this.ut, h = this.hn, k;
  k = this.sm;
  k == d ? k = null : (d = k.split("-")[0], d = (cw.indexOf(d) + 1) % cw.length, k = (0,window.parseInt)(k.split("-")[1], 10), k = cw[d] + "-" + (d ? k : k + 1).toString());
  d = this.sm;
  d == c ? c = null : (c = d.split("-")[0], c = cw.indexOf(c) - 1, d = (0,window.parseInt)(d.split("-")[1], 10), 0 > c && (c = cw.length - c, d--), c = cw[c] + "-" + d.toString());
  e.innerHTML = (0,z.tf)(jq, {posts:a, coverImgUrl:f, month:b, year:h, nextSlug:k, prevSlug:c})
};
z.q = mq.prototype;
z.q.load = function(a) {
  a = nq(a);
  if(this.se(a)) {
    return(0,z.Ob)(this.De[a])
  }
  this.De[a] || (this.De[a] = new z.Ab, this.gi[a] = 0, oq(this, a));
  return this.De[a].Je()
};
z.q.se = function(a) {
  a = nq(a);
  a = this.De[a];
  return!!a && !!a.url
};
z.q.Wk = function(a) {
  a = nq(a);
  a = this.De[a];
  return!!a && !a.url
};
z.q.Yj = function(a) {
  var b = a.target || a.currentTarget;
  a = b.src;
  pq(this, a);
  if(this.Wk(a)) {
    var c = this.De[a], b = {url:a, width:b.width, height:b.height};
    this.De[a] = b;
    delete this.gi[a];
    c.Oa(b)
  }else {
    (0,z.Ph)("finished loading an image, but we could not find the deferred. DOh!")
  }
};
z.q.Ge = function(a) {
  a = (a.target || a.currentTarget).src;
  pq(this, a);
  if(2 > this.gi[a]) {
    (0,z.Ph)("Failed loading image " + a + ", retrying."), this.gi[a] += 1, oq(this, a)
  }else {
    if(this.Wk(a)) {
      var b = this.De[a];
      delete this.De[a];
      delete this.gi[a];
      b.jg(a)
    }else {
      (0,z.Ph)("error encountered while loading an image, but we could not find the deferred. DOh!")
    }
  }
};
(0,z.v)(z.sq, z.sj);
var tq = Date.now();
z.q = z.sq.prototype;
z.q.getData = (0,z.s)(70);
z.q.ao = function(a) {
  if(this.ki && a) {
    a = this.D.wa.concat();
    for(var b = 0;b < a.length;b++) {
      var c = vq(this, a[b]);
      this.H("after-draw", a[b], c)
    }
  }
};
z.q.Xr = function(a, b) {
  for(var c = 0;c < a.length;c++) {
    var d = b.indexOf(a[c]), d = vq(this, a[c], d);
    this.H("after-draw", a[c], d)
  }
};
z.q.Yr = function(a) {
  var b = window.document.getElementById(this.dm + (0,z.qa)(a));
  this.H("before-clear", a, b);
  this.H("destroy", a, b);
  (0,z.F)(b)
};
z.q.Ui = function(a) {
  for(var b = 0;b < a.length;b++) {
    var c = a[b].Ur, d = window.document.getElementById(this.dm + (0,z.qa)(c));
    this.H("before-clear", c, d);
    d.innerHTML = (0,z.uj)(this, c);
    this.H("after-draw", c, d)
  }
};
var dw = {uy:1, Go:2, ny:3, $isProtoEnum:!0};
Af("g", "", function(a, b, c) {
  b = a.followUp.creatorId == c.currentUser.userId && !a.Li;
  return a = "" + ('\x3cdiv class\x3d"follow-up-content"\x3e' + (a.Li ? '\x3cdiv class\x3d"follow-up-link"\x3e' : '\x3ca class\x3d"follow-up-link" href\x3d"' + (0,z.V)((0,z.Xf)(a.followUp.mediaResource.href)) + '"\x3e') + '\x3ch3 class\x3d"follow-up-title"\x3e' + (a.followUp && a.followUp.title ? (0,z.U)(a.followUp.title) : (0,z.U)(a.followUp.mediaResource.title)) + '\x3c/h3\x3e\x26thinsp;\x26mdash;\x26thinsp;\x3cp class\x3d"follow-up-description"\x3e' + (a.followUp && a.followUp.description ? (0,z.U)(a.followUp.description) : 
  (0,z.U)((0,z.ag)(a.followUp.mediaResource.description, 140))) + "\x3c/p\x3e" + (a.Li ? "\x3c/div\x3e" : "\x3c/a\x3e") + '\x3cdiv class\x3d"follow-up-footer"\x3e\x3cspan class\x3d"follow-up-footer-item"\x3e' + (a.followUp.creatorId != a.ko ? "via " + dj({user:a.followUp.creator, Ma:"follow-up-footer-link"}) + " " : "") + 'on \x3ca href\x3d"' + (0,z.V)((0,z.Xf)(a.followUp.mediaResource.href)) + '" class\x3d"follow-up-footer-link"\x3e' + (0,z.U)(a.followUp.mediaResource.virtuals.domain) + (b ? "" : 
  " \x26rarr;") + "\x3c/a\x3e\x3c/span\x3e" + (b ? '\x3cbutton class\x3d"btn btn-chromeless follow-up-footer-item follow-up-footer-link follow-up-delete" data-action\x3d"delete-follow-up" data-action-value\x3d"' + (0,z.V)(a.followUp.followUpId) + '"\x3eDelete\x3c/button\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e")
});
Af("g", "MediaResourceMediumPost", function(a, b, c) {
  b = a.followUp.mediaResource.mediumPost.post;
  return a = "" + ('\x3cdiv class\x3d"follow-up-content follow-up-type-medium-post"\x3e' + (a.Li ? '\x3cdiv class\x3d"follow-up-link"\x3e' : '\x3ca class\x3d"follow-up-link" href\x3d"' + (0,z.V)((0,z.Xf)(a.followUp.mediaResource.href)) + '"\x3e') + '\x3ch3 class\x3d"follow-up-title"\x3e' + (a.followUp && a.followUp.title ? (0,z.U)(a.followUp.title) : (0,z.U)(b.title)) + '\x3c/h3\x3e\x26thinsp;\x26mdash;\x26thinsp;\x3cp class\x3d"follow-up-description"\x3e' + (a.followUp && a.followUp.description ? 
  (0,z.U)(a.followUp.description) : (0,z.U)(b.virtuals.draftSnippet)) + "\x3c/p\x3e" + (a.Li ? "\x3c/div\x3e" : "\x3c/a\x3e") + '\x3cdiv class\x3d"follow-up-footer"\x3e' + (a.followUp.creatorId != a.ko ? '\x3cspan class\x3d"follow-up-footer-item follow-up-author"\x3evia ' + dj({user:a.followUp.creator, Ma:"follow-up-footer-link"}) + "\x3c/span\x3e" : "") + (a.followUp.creatorId != c.currentUser.userId || a.Li ? "" : '\x3cbutton class\x3d"btn btn-chromeless follow-up-footer-item follow-up-footer-link" data-action\x3d"delete-follow-up" data-action-value\x3d"' + 
  (0,z.V)(a.followUp.followUpId) + '"\x3eDelete\x3c/button\x3e') + "\x3c/div\x3e\x3c/div\x3e")
});
(0,z.v)(z.yq, M);
df(z.yq, !0, {name:"FollowUp", table:"followUp", tb:"postId", lb:new Ue("/item/:followUpId"), UD:864E5, fields:{postId:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, followUpId:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, addedAt:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}, updatedAt:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(4), defaultValue:(0,z.g)()}, creatorId:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(5), defaultValue:(0,z.g)()}, visibility:{l:function() {
  return dw
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(6), defaultValue:(0,z.g)()}, visibilityUpdatedAt:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(7), defaultValue:(0,z.g)()}, mediaResourceId:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(8), defaultValue:(0,z.g)()}, creatorNote:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(9), defaultValue:(0,z.g)()}, title:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(10), defaultValue:(0,z.g)()}, description:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(11), defaultValue:(0,z.g)()}, removedAt:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(12), defaultValue:(0,z.g)()}}});
z.q = z.yq.prototype;
z.q.xa = (0,z.s)(57);
z.q.zw = function() {
  return(0,z.N)(this, "mediaResourceId")
};
z.q.to = function(a) {
  return(0,z.O)(this, "mediaResourceId", a)
};
z.q.Od = function() {
  return(0,z.N)(this, "title")
};
z.q.Kh = function(a) {
  return(0,z.O)(this, "title", a)
};
(0,z.v)(z.zq, M);
df(z.zq, !0, {name:"FollowUpOrder", table:"followUpOrder", tb:"postId", lb:new Ue("/order"), UD:864E5, fields:{postId:{l:function() {
  return String
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(1), defaultValue:(0,z.g)()}, followUps:{l:function() {
  return String
}, F:(0,z.n)(!0), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(2), defaultValue:(0,z.g)()}, version:{l:function() {
  return Number
}, F:(0,z.n)(!1), O:(0,z.n)(!1), Q:(0,z.n)(!1), N:(0,z.n)(3), defaultValue:(0,z.g)()}}});
z.zq.prototype.xa = (0,z.s)(56);
z.zq.prototype.ww = function() {
  return(0,z.N)(this, "followUps")
};
(0,z.v)(Aq, z.Sh);
z.q = Aq.prototype;
z.q.q = function() {
  for(var a in this.xi) {
    this.xi[a].cancel()
  }
  Aq.s.q.call(this)
};
z.q.load = function() {
  return(0,z.A)((0,z.y)((0,z.y)(this.ha.get("/p/" + this.V + "/follow-ups", {Z:!0, background:!0}), this.xC, this), function() {
    this.Fj = !0
  }, this), z.Ph)
};
z.q.se = (0,z.ca)("Fj");
z.q.ww = (0,z.ca)("Az");
z.q.xA = function(a) {
  return 3 !== a.get("visibility")
};
z.q.xC = function(a) {
  for(var b = a.value, c = 0;c < b.length;c++) {
    Dq(this, b[c], a.references)
  }
};
(0,z.v)(Gq, z.D);
z.q = Gq.prototype;
z.q.Wf = null;
z.q.Jj = null;
z.q.dc = null;
z.q.xp = null;
z.q.Pj = !1;
z.q.q = function() {
  this.it && this.Pj && this.mp();
  this.dc && (this.dc.ma("add", this.uj, this), this.dc.ma("remove", this.uj, this));
  (0,z.gc)(this.Da);
  (0,z.zg)(this.pa);
  (0,z.F)(this.pa);
  this.pa = null;
  Gq.s.q.call(this)
};
z.q.Rc = function(a) {
  this.Wf = a;
  return(0,z.y)(this.Da.Ob(this.D.load()), this.wA, this)
};
z.q.Cj = function() {
  var a = window.document.createElement("div");
  a.className = "follow-ups-container";
  return a
};
z.q.iF = function() {
  "#follow-up-editor" == window.document.location.hash && (this.Ru(), (0,z.gl)(this.ba, ""), this.ub(".follow-up-new").scrollIntoView(!0))
};
z.q.wA = function() {
  this.pa.innerHTML = (0,z.tf)(wq, {VD:this.it, post:this.ka.Ya()});
  this.dc = this.D.ww();
  this.dc.h("add", this.uj, this);
  this.dc.h("remove", this.uj, this);
  this.uj();
  var a = this.ub(".follow-ups-list");
  this.xp = (0,z.tj)((0,z.uq)(new z.sq(a, this.dc, xq), "follow-up"), {canAdminister:this.Oy, ko:this.Yg, visibility:dw}, "followUp");
  this.xp.h("after-draw", this.OA, this);
  this.xp.ac();
  this.Wf.appendChild(this.pa);
  this.Pj = !0
};
z.q.OA = function(a, b) {
  b.setAttribute("data-follow-up-id", (0,z.Wh)(a, "followUpId"))
};
z.q.uj = function() {
  (0,z.cd)(this.pa, "follow-ups-empty", !this.dc.count())
};
z.q.ub = function(a) {
  return this.pa.querySelector(a)
};
z.q.XA = function(a) {
  if((a = (0,z.Tc)(a.target, null, "follow-up-link")) && a.href) {
    a = (0,z.Tc)(a, null, "follow-up").getAttribute("data-follow-up-id");
    var b = Bq(this.D, a);
    Jq(this, ev, {followUpId:a, visibility:b.get("visibility"), mediaResourceType:b.get("mediaResource").mediaResourceType})
  }
};
z.q.Ru = function() {
  (0,z.y)(this.Da.Ob((0,z.Mo)(this.w, "FollowUpEditor")), function(a) {
    (0,z.G)(this.ub(".follow-up-new"), "follow-up-editor-active");
    var b = this.ub(".follow-up-new-editor");
    this.Jj = (new a(this.w, this.Yg, b)).ac();
    this.Jj.h("save", this.cz, this);
    this.Jj.h("cancel", this.mp, this);
    Jq(this, av)
  }, this)
};
z.q.fB = function(a) {
  this.J.confirm("Are you sure you want to delete this link?").h(z.Pv, this.jz.bind(this, a.value))
};
z.q.jz = function(a) {
  (0,z.A)((0,z.y)(this.Da.Ob(Eq(this.D, a)), function() {
    Jq(this, cv, {followUpId:a})
  }, this), (0,z.vl)(this.J, "An error occurred, and we were unable to delete your link.", !0))
};
z.q.NB = function(a) {
  var b = a.target.parentNode.getAttribute("data-follow-up-id");
  a = (0,window.parseInt)(a.value, 10);
  var c = null, d;
  for(d in dw) {
    if(a == dw[d]) {
      c = dw[d];
      break
    }
  }
  Kq(this, b, c)
};
z.q.Dz = function(a, b) {
  var c = Bq(this.D, a).get("visibility"), d = null;
  2 == c ? d = "The link is now public" : 1 == c ? d = "The link is now private" : 3 == c && (d = "The link is dismissed");
  (0,z.y)(this.Di.W(d, {type:"success", jj:!0}), function() {
    Kq(this, a, b)
  }, this);
  Jq(this, dv, {followUpId:a, visibility:c})
};
z.q.Ez = function(a) {
  a instanceof z.Tb || this.Di.W("An error occurred, and we could not change the link’s visibility.", "error")
};
z.q.cz = function(a, b, c) {
  this.mp();
  (0,z.A)((0,z.y)(this.Da.Ob(Cq(this.D, {title:a, description:b, mediaResourceId:c})), function(a) {
    Jq(this, bv, {followUpId:a.value.value.followUpId})
  }, this), (0,z.vl)(this.J, "An error occurred, and we were unable to create your link.", !0))
};
z.q.mp = function() {
  (0,z.gc)(this.Jj);
  this.Jj = null;
  (0,z.I)(this.ub(".follow-up-new"), "follow-up-editor-active")
};
(0,z.v)(Lq, z.D);
Lq.prototype.Ei = function(a, b) {
  return new Gq(this.w, a, b)
};
Pq.prototype.ej = function(a, b, c, d, e) {
  this.Am((0,z.tf)(Oq, {title:a, username:b, url:window.location.href, collaborators:e, Fo:140, Ho:25}));
  (0,z.W)(z.Fu, {postId:c, type:d, dest:"twitter"})
};
Pq.prototype.Am = function(a) {
  var b = window.screen.height, c = Math.round(window.screen.width / 2 - 275), b = 420 < b ? Math.round(b / 2 - 210) : 0;
  (a = window.open("https://twitter.com/intent/tweet?text\x3d" + (0,window.encodeURIComponent)(a), "intent", ["scrollbars\x3dyes,resizable\x3dyes,toolbar\x3dno,location\x3dyes,width\x3d550,height\x3d420", "left\x3d" + c, "top\x3d" + b].join())) && a.focus()
};
var ew = "https://" + window.document.location.hostname + "/m/facebook/close";
Qq.prototype.ej = function(a, b, c, d, e, f) {
  (0,z.P)("variants.can_share_to_facebook") && (a = (0,z.jk)(a), c = (0,z.jk)(c), a = (0,z.tf)(kg, {url:window.location.href, title:a, caption:"by " + b, description:c, imageId:d, FF:ew}), this.Am(a), (0,z.W)(z.Fu, {postId:e, type:f, dest:"facebook"}))
};
Qq.prototype.Am = function(a) {
  var b = window.screen.height, c = Math.round(window.screen.width / 2 - 275), b = 320 < b ? Math.round(b / 2 - 160) : 0;
  (a = window.open(a, "intent", ["scrollbars\x3dyes,resizable\x3dyes,toolbar\x3dno,location\x3dyes,width\x3d550,height\x3d320", "left\x3d" + c, "top\x3d" + b].join())) && a.focus()
};
Tq.prototype.ej = function(a, b) {
  (0,z.W)(Gu, {postId:a.id, type:b, dest:"email"});
  this.J.open({title:"Share via Email", bodyHtml:(0,z.tf)(nj, {post:a}), xk:"Send", type:"form"}).h("submit", this.GD.bind(this, a.id))
};
Tq.prototype.GD = function(a) {
  var b = this.J.Hf, c = b.R(".share-email-address"), d = c.value.split(",").map(function(a) {
    return a.trim()
  }), e = b.R(".sender-comment"), e = e ? e.value : null;
  Sq(d) ? ((0,z.A)((0,z.y)(this.ha.post("/_/share/email", {postId:a, recipients:d, comment:e}, {Z:!0}), this.qB.bind(this, a)), this.pB, this), b.close()) : (new z.Pe(c, {name:"shimmy-shake", duration:400})).start()
};
Tq.prototype.qB = function(a) {
  this.Ta.W("Your email was successfully sent.", "success");
  (0,z.W)(z.Fu, {postId:a, type:"post", dest:"email"})
};
Tq.prototype.pB = function(a) {
  this.Ta.W("Sorry, we couldn't send your email. Please try again later.", "failure");
  (0,z.Ph)(a)
};
Uq.prototype.add = function(a, b) {
  for(var c = sl(a), d = [], e = this.Hs, f = [], h = 0;h < c.length;h++) {
    var k, l;
    k = l = c[h];
    if("*" == l && h != c.length - 1) {
      throw Error("Invalid path [" + a + "], * must only be at the end.");
    }
    if(":" == l[0]) {
      k = ":", d.push(l.substr(1)), f.push(null)
    }else {
      if("@" == l[0]) {
        k = l.indexOf(":");
        var m = l.substr(1, k - 1);
        l = l.substr(k + 1);
        k = "@";
        e["@"] || (e["@"] = {parent:e});
        e["@"][m] || (e["@"][m] = {EF:RegExp(l), parent:e["@"], tq:l});
        d.push(m);
        e = e["@"][m];
        f.push(null);
        continue
      }else {
        f.push(k)
      }
    }
    e[k] || (e[k] = {parent:e});
    e = e[k]
  }
  if(e.object) {
    throw Error("Can not register [" + a + "], path is ambiguous. [" + e.fullPath + "] previously registered.");
  }
  e.matches = d;
  e.fullPath = a;
  e.object = b;
  return function(a) {
    for(var b = [], c = 0, d = 0;d < f.length;d++) {
      null == f[d] ? b.push(arguments[c++]) : "*" == f[d] ? b.push(Array.prototype.slice.call(arguments, c).join("/")) : b.push(f[d])
    }
    return"/" + b.join("/")
  }
};
Vq.prototype.add = function(a) {
  var b = a.path;
  a.vk = this.ak.add(b, a);
  this.KC[b] = a;
  this.DA[b] = a.jF;
  return this
};
Vq.prototype.Kn = function(a, b) {
  var c = rl(this.ak, sl(a), 0, this.ak.Hs, [], null);
  return(c = c && c.object) && c.Kn(a, b)
};
Wq.prototype.Kn = function(a, b) {
  var c = this.GF;
  if(!c) {
    return null
  }
  for(var d = 0;d < c.length;d++) {
    var e = (0,c[d])(a, b);
    if(e) {
      return e
    }
  }
  return null
};
var fw = new Wq("/"), gw = new Wq("/latest"), hw = new Wq("/collections"), iw = new Wq("/collections/all"), jw = new Wq("/top-100"), kw = new Wq("/top-100/:monthYearSlug"), lw = new Wq("/p/new-post"), mw = new Wq("/p/:postId"), nw = new Wq("/p/:postId/edit"), ow = new Wq("/m/error/:errorCode"), pw = new Wq("/m/tos"), qw = new Wq("/m/signin"), rw = new Wq("/m/welcome"), sw = new Wq("/@twitterName:@.*"), tw = new Wq("/@twitterName:@.*/latest"), uw = new Wq("/@twitterName:@.*/recommended"), vw = new Wq("/@twitterName:@.*/has-recommended"), 
ww = new Wq("/@twitterName:@.*/collections"), xw = new Wq("/me/drafts"), yw = new Wq("/@twitterName:@.*/drafts"), zw = new Wq("/me/drafts/shared"), Aw = new Wq("/@twitterName:@.*/drafts/shared"), Bw = new Wq("/me/export"), Cw = new Wq("/me/bookmarks"), Dw = new Wq("/me/settings"), Ew = new Wq("/me/stats"), Fw = new Wq("/@twitterName:@.*/stats"), Gw = new Wq("/new-collection"), Hw = new Wq("/:collectionSlug"), Iw = new Wq("/:collectionSlug/settings"), Jw = new Wq("/:collectionSlug/recommended"), Kw = 
new Wq("/:collectionSlug/latest"), Lw = new Wq("/:collectionSlug/removed"), Mw = new Wq("/:collectionSlug/new-post"), Nw = new Wq("/:collectionSlug/:postId"), Ow = new Wq("/:collectionSlug/:postId/edit"), Pw = new Wq("/search/:q"), Qw = new Wq("/p/:postId/referrers");
(0,z.v)(Yq, z.Sh);
z.Zq = "active";
Yq.prototype.be = null;
Yq.prototype.Tf = function() {
  $q(this, z.Zq);
  window.clearTimeout(this.be);
  this.be = window.setTimeout(this.Iu.bind(this), 6E4)
};
Yq.prototype.Iu = function() {
  $q(this, "idle")
};
Af("h", "", function(a) {
  a = a || {};
  var b = '\x3cdiv class\x3d"error-message"\x3e\x3ci class\x3d"icons ' + (a.SK ? "icons-logo" : "icons-error") + '"\x3e\x3c/i\x3e\x3cdiv class\x3d"error-message-wrap"\x3e\x3cp\x3e';
  if(a.message) {
    b += (0,z.Zf)(a.message)
  }else {
    switch(a.errorCode) {
      case 400:
        b += "We didn’t understand your request.";
        break;
      case 401:
        b += "This page requires authentication.";
        break;
      case 403:
        b += "You do not have access to this page.";
        break;
      case 404:
        b += "Sorry, but nothing exists here.";
        break;
      case 410:
        b += "Looks like this item has been removed.";
        break;
      default:
        b += "Yikes! Something happened. We’ll fix it as soon as we can."
    }
  }
  return b + '\x3c/p\x3e\x3cspan class\x3d"error-message-wrap-small"\x3eFind something \x3ca href\x3d"/"\x3einteresting to read\x3c/a\x3e.\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e'
});
Af("h", "Blacklisted", (0,z.n)('\x3cdiv class\x3d"error-message"\x3e\x3ci class\x3d"icons icons-error"\x3e\x3c/i\x3e\x3cdiv class\x3d"error-message-wrap"\x3e\x3cp\x3eThis page was in violation of the  \x3ca href\x3d"https://medium.com/help-center/30e5502c4eb4"\x3eMedium Rules\x3c/a\x3e.\x3c/p\x3e\x3cspan class\x3d"error-message-wrap-small"\x3ePeruse popular Medium posts on \x3ca href\x3d"/"\x3eour homepage\x3c/a\x3e.\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e'));
Af("h", "RemovedByUser", (0,z.n)('\x3cdiv class\x3d"error-message"\x3e\x3ci class\x3d"icons icons-error"\x3e\x3c/i\x3e\x3cdiv class\x3d"error-message-wrap"\x3e\x3cp\x3eThe author deleted this Medium post.\x3c/p\x3e\x3cspan class\x3d"error-message-wrap-small"\x3ePeruse popular Medium posts on \x3ca href\x3d"/"\x3eour homepage\x3c/a\x3e.\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e'));
z.q = br.prototype;
z.q.dh = window.performance && window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : window.OB_startTime || Date.now();
z.q.fq = function() {
  this.wt.length = 0;
  this.dh = Date.now()
};
z.q.rB = function(a, b, c) {
  var d = Date.now() - this.dh;
  c instanceof z.Tb || c instanceof ll || ((0,z.ri)("nav." + (b ? "success" : "failure")), (0,z.si)("client.nav.duration", d), b || (c ? ((0,z.Jh)(c), 401 == c.status ? this.J.open({title:"Uh oh!", bodyHtml:(0,z.tf)(ar), type:"signin", is:"/" + a}) : 404 == c.status ? this.J.error("Ooops, that page does not exist anymore.  Sorry.") : this.J.error("Something went wrong. Try refreshing the page and trying again.")) : (this.J.error("Something went wrong. Try refreshing the page and trying again."), 
  (0,z.Jh)(Error("Unknown navigation error")))))
};
z.q.Ge = function(a) {
  if("IMG" == a.target.tagName) {
    var b = a.target.MD || 0;
    (0,z.W)(ov, {src:a.target.src, className:a.target.className, attempts:b});
    3 > b && (a.target.src = a.target.src, a.target.MD = b + 1)
  }
};
z.q.MB = (0,z.g)();
z.q.GB = function(a, b, c) {
  this.wt.push(c)
};
var er = window.document.referrer;
dr.prototype.Ol = null;
dr.prototype.Lp = !1;
dr.prototype.iD = function(a, b) {
  this.Lp = !0;
  var c = "";
  b && b.source && (c = b.source);
  this.bg.push(ub(a, c))
};
dr.prototype.vz = function(a, b) {
  this.Lp = !1;
  var c = Wa(this.bg, function(b) {
    return a in b
  }), c = this.bg.splice(c, 1)[0];
  if(b) {
    var d = this.bg.indexOf(this.ku);
    -1 !== d && this.bg.splice(d, 1);
    this.ku = c;
    this.bg.push(c);
    this.Ol && (this.wq = this.Ol);
    this.Ol = "/" + a
  }
};
fr.prototype.pu = function(a) {
  var b = new z.Ab, c = window.document.createElement("script");
  c.setAttribute("charset", "UTF-8");
  c.onload = function() {
    b.Oa(!0)
  };
  c.src = a;
  window.document.body.appendChild(c);
  return b
};
jr.prototype.Rc = function() {
  for(var a in this.w) {
    "function" == typeof this.w[a].Rc && this.w[a].Rc()
  }
};
jr.prototype.get = function(a) {
  if(!this.w[a]) {
    throw Error('Can not synchronously load "' + a + '"');
  }
  return this.w[a]
};
jr.prototype.add = function(a, b) {
  if(this.w[a]) {
    throw Error('Service already registered with id "' + a + '"');
  }
  this.pi[a] && delete this.pi[a];
  this.w[a] = b;
  return this
};
z.q = lr.prototype;
z.q.refresh = function() {
  (0,z.cd)(window.document.body, "app-loading", !(!this.im && 2 != this.ha.kb))
};
z.q.Ob = function(a) {
  this.mk();
  (0,z.Gb)(a, this.sp, this)
};
z.q.mk = function() {
  this.im++;
  this.refresh()
};
z.q.sp = function() {
  this.im--;
  this.refresh()
};
z.q.uz = function() {
  this.im = 0;
  this.refresh()
};
mr.prototype.Xj = function(a, b, c) {
  if(b) {
    for(a = c.Wi("[data-load-img]"), b = 0;b < a.length;b++) {
      (c = a[b].getAttribute("data-load-img")) && (c = a[b].querySelector(c)) && (c = "IMG" != c.tagName ? c.style.backgroundImage && c.style.backgroundImage.match(/url\(['"]?([^\)'"]*)/)[1] : c.src) && nr(c, a[b])
    }
  }
};
var Gr = !z.B || (0,z.cc)(9), Rw = z.B && !(0,z.$b)("9");
!z.Wc || (0,z.$b)("528");
z.K && (0,z.$b)("1.9b") || z.B && (0,z.$b)("8") || z.Id && (0,z.$b)("9.5") || z.Wc && (0,z.$b)("528");
z.K && !(0,z.$b)("8") || z.B && (0,z.$b)("9");
z.q = z.or.prototype;
z.q.q = (0,z.g)();
z.q.bb = (0,z.g)();
z.q.wg = !1;
z.q.defaultPrevented = !1;
z.q.Mx = !0;
z.q.stopPropagation = function() {
  this.wg = !0
};
z.q.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Mx = !1
};
(0,z.v)(pr, z.or);
z.q = pr.prototype;
z.q.target = null;
z.q.relatedTarget = null;
z.q.offsetX = 0;
z.q.offsetY = 0;
z.q.clientX = 0;
z.q.clientY = 0;
z.q.screenX = 0;
z.q.screenY = 0;
z.q.button = 0;
z.q.keyCode = 0;
z.q.charCode = 0;
z.q.ctrlKey = !1;
z.q.altKey = !1;
z.q.shiftKey = !1;
z.q.metaKey = !1;
z.q.je = null;
z.q.og = function(a, b) {
  var c = this.type = a.type;
  z.or.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(z.K) {
      var e;
      a: {
        try {
          ne(d.nodeName);
          e = !0;
          break a
        }catch(f) {
        }
        e = !1
      }
      e || (d = null)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = z.Wc || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = z.Wc || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.je = a;
  a.defaultPrevented && this.preventDefault();
  delete this.wg
};
z.q.stopPropagation = function() {
  pr.s.stopPropagation.call(this);
  this.je.stopPropagation ? this.je.stopPropagation() : this.je.cancelBubble = !0
};
z.q.preventDefault = function() {
  pr.s.preventDefault.call(this);
  var a = this.je;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, Rw) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
z.q.uw = (0,z.ca)("je");
z.q.q = (0,z.g)();
var rr = "closure_listenable_" + (1E6 * Math.random() | 0), tr = 0;
vr.prototype.add = function(a, b, c, d, e) {
  var f = this.za[a];
  f || (f = this.za[a] = [], this.sl++);
  var h = xr(f, b, d, e);
  -1 < h ? (a = f[h], c || (a.rn = !1)) : (a = new sr(b, this.src, a, !!d, e), a.rn = c, f.push(a));
  return a
};
vr.prototype.remove = function(a, b, c, d) {
  if(!(a in this.za)) {
    return!1
  }
  var e = this.za[a];
  b = xr(e, b, c, d);
  return-1 < b ? (ur(e[b]), ab.splice.call(e, b, 1), 0 == e.length && (delete this.za[a], this.sl--), !0) : !1
};
vr.prototype.Zi = function(a) {
  var b = 0, c;
  for(c in this.za) {
    if(!a || c == a) {
      for(var d = this.za[c], e = 0;e < d.length;e++) {
        ++b, ur(d[e])
      }
      delete this.za[c];
      this.sl--
    }
  }
  return b
};
vr.prototype.Lk = function(a, b, c, d) {
  a = this.za[a];
  var e = -1;
  a && (e = xr(a, b, c, d));
  return-1 < e ? a[e] : null
};
var Br = "closure_lm_" + (1E6 * Math.random() | 0), Dr = {}, Er = 0, Fs = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
(0,z.v)(Gs, fi);
Gs.prototype.Sx = function(a) {
  return!!a.links.loadMore
};
Gs.prototype.Qx = function() {
  return this.Fh.get(this.ou, {Z:!0})
};
Gs.prototype.wf = function(a) {
  a.links.loadMore && (this.ou = a.links.loadMore);
  return a.value
};
z.q = Hs.prototype;
z.q.If = function() {
  this.lD.h("change", this.RB, this);
  (0,z.wg)(this.S).g("view-actors", this.Iv, this);
  (0,z.rg)("notifications-more", this.tz, this).g("view-actors", this.Iv, this)
};
z.q.Dd = function(a) {
  a = (0,z.uf)(Ls, {activities:a.value, activityUser:a.activityUser, lastViewedActivityAt:a.lastViewedActivityAt});
  this.S.appendChild(a);
  this.lm = this.S.getElementsByClassName("notifications-list")[0]
};
z.q.tz = function() {
  this.kk.og();
  var a = window.document.getElementsByClassName("notifications-more")[0];
  a.parentNode.removeChild(a)
};
z.q.CC = function(a) {
  for(var b = "", c = 0;c < a.length;c++) {
    b += (0,z.tf)(Ms, {Ga:a[c].Ya()})
  }
  a = Dc(b);
  this.lm.appendChild(a);
  this.kk && (a = this.kk, a.fm && a.Yd())
};
z.q.Iv = function(a) {
  (0,z.A)((0,z.y)(this.ha.get(String(a.value), {Z:!0}), function(b) {
    this.J.open({title:a.target.getAttribute("dialog-title"), bodyHtml:(0,z.tf)(Os, {actors:b.value}), type:"scroller"})
  }, this), z.Ph)
};
z.q.RB = function(a, b) {
  if((0,z.P)("variants.can_view_activity")) {
    var c = (0,z.Xh)(b, "newActivityCount");
    this.lm && ((0,z.F)(this.lm), Is(this));
    (0,z.cd)(window.document.body, "site-nav-new-activity", 0 < c)
  }
};
z.q = Js.prototype;
z.q.ce = null;
z.q.Qm = null;
z.q.If = function() {
  var a = z.Kv ? "touchend" : "click";
  (0,z.L)(this.oi, "keyup", this.Qt, this);
  (0,z.L)(this.lk, a, this.jA, this);
  (0,z.L)(this.ah, "focus", this.jC, this);
  (0,z.L)(this.ah, "keyup", this.Qt, this);
  (0,z.wg)(this.Sm).g("open-search", this.iC, this).g("close-search", this.Wv, this).g("clear-search", this.ot, this).g("query-search", this.Pt, this).g("navigate-to-search-result", this.JA, this)
};
z.q.iC = function() {
  this.ps = !0;
  (0,z.I)(this.lv, "navigable-list-item");
  (0,z.G)(window.document.body, "site-nav-search-open");
  (0,z.G)(this.Hq, "site-nav-search-wrapper-fade-in");
  this.ce = (0,z.L)(this.Hq, z.cj, function() {
    this.oi.focus();
    (0,z.pe)(this.ce);
    this.ce = null
  }, this);
  (0,z.W)(hv, {})
};
z.q.jC = function() {
  Ks(this);
  var a = window.innerWidth, b = a - 150, a = a - 90;
  (0,z.G)(window.document.body, "site-nav-search-open");
  (0,z.Zd)(this.ah, "width", b + "px");
  (0,z.Zd)(this.kv, "width", a + "px")
};
z.q.ot = function() {
  this.ah.value = ""
};
z.q.Qt = function(a) {
  13 == a.keyCode && this.Pt()
};
z.q.jA = function() {
  this.lk.children.length || this.Wv()
};
z.q.JA = function(a) {
  a = a.value.split(",");
  var b = {type:a[1], index:a[2]};
  this.ba.navigate(a[0].substr(1));
  (0,z.W)(kv, b)
};
z.q.Pt = function() {
  this.Qm && this.Qm.cancel();
  var a = this.oi.value || this.ah.value;
  a ? ((0,z.W)(iv, {query:a}), this.Qm = (0,z.Gb)((0,z.A)((0,z.y)(this.gb.get("/search/all/" + (0,window.encodeURIComponent)(a), {Kc:!0}), this.sC, this), z.Ph), function() {
    this.Qm = null
  }, this)) : this.lk.innerHTML = ""
};
z.q.sC = function(a) {
  Ks(this);
  var b = (0,z.tf)(oj, {users:a.value.users.slice(0, 3), collections:a.value.collections.slice(0, 3), posts:(0,z.Ki)(a.value.posts, a.references)});
  this.lk.innerHTML = b;
  (0,z.W)(jv, {query:this.oi.value, numResults:a.value.posts.length + a.value.users.length + a.value.collections.length})
};
z.q.Wv = function() {
  this.ps = !1;
  this.lk.innerHTML = "";
  this.oi.value = "";
  this.oi.blur();
  500 >= window.innerWidth ? (this.ot(), this.ah.blur(), (0,z.Zd)(this.kv, "width", 0), (0,z.Zd)(this.ah, "width", "20px"), (0,z.I)(window.document.body, "site-nav-search-open"), (0,z.I)(this.Sm, "site-nav-search-fade-in-bg")) : ((0,z.G)(this.lv, "navigable-list-item"), (0,z.I)(this.Sm, "site-nav-search-fade-in-bg"), (0,z.I)(this.Hq, "site-nav-search-wrapper-fade-in"), (0,window.setTimeout)(function() {
    (0,z.I)(window.document.body, "site-nav-search-open")
  }.bind(this), 100))
};
Af("i", "post_recommended", function(a) {
  return"recommended " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled")
});
Af("i", "post_cross_posted", function(a) {
  return"added " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled") + " to " + (0,z.U)(a.collection.name)
});
Af("i", "collection_cross_posted", function(a) {
  return"added " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled") + " to " + (0,z.U)(a.collection.name)
});
Af("i", "collection_posted", function(a) {
  return"published " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled") + " in " + (0,z.U)(a.collection.name)
});
Af("i", "post_collaborated_published", function(a) {
  return"published " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled") + ", which you collaborated on."
});
Af("i", "follow_up_created", function(a) {
  return"suggested further reading for " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled")
});
Af("i", "follow_up_published", function(a) {
  return"published your suggested further reading for " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled")
});
Af("i", "post_added_as_follow_up", function(a) {
  return"added " + (a.followUp.value.title ? (0,z.U)(a.followUp.value.title) : "Untitled") + " as further reading for " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled")
});
Af("i", "post_noted", function(a) {
  return"left a new note on " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled")
});
Af("i", "note_replied", function(a) {
  return"replied to your note on " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled")
});
Af("i", "post_note_replied", function(a) {
  return"replied to a note on " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled")
});
Af("i", "note_published", function(a) {
  return"published your note on " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled")
});
Af("i", "mention_in_note", function(a) {
  return"mentioned you in a note on " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled")
});
Af("i", "mention_in_note_update", function(a) {
  return"updated a note mentioning you on " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled")
});
Af("i", "mention_in_note_reply", function(a) {
  return"mentioned you in a note on " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled")
});
Af("i", "mention_in_note_reply_update", function(a) {
  return"updated a reply mentioning you on " + (a.post.title ? (0,z.U)(a.post.title) : "Untitled")
});
z.q = Ps.prototype;
z.q.um = !1;
z.q.If = function() {
  var a = z.Kv ? "touchend" : "click", a = Lv ? "MSPointerDown" : a;
  (0,z.L)(this.$f, "keydown", this.Vz, this);
  (0,z.L)(this.$f, a, this.Lz, this);
  (0,z.L)(this.$f, "mouseover", this.Om, this);
  (0,z.L)(this.vv, a, this.Hl, this);
  this.ia.h("resize-end", this.ru, this);
  this.ba.h("endNav", this.eq, this);
  this.gb.h("httperror", this.FB, this);
  (0,z.rg)("open-new-post", this.Yp, this).g("open-nav", this.hC, this)
};
z.q.Lz = function(a) {
  a.metaKey || a.shiftKey || a.altKey || a.ctrlKey || (this.bi = !!(0,z.Tc)(a.target, null, "site-nav-list-item-btn"))
};
z.q.Yp = function(a) {
  (0,z.W)(wu, {source:(0,z.Tc)(a.target, null, "site-nav") ? "site-nav" : (0,z.Tc)(a.target, null, "cover-home") ? "home-cover" : null});
  this.ba.navigate("p/new-post")
};
z.q.Vz = function(a) {
  var b = this.$f.getElementsByClassName("navigable-list-item");
  if(40 == a.keyCode) {
    this.we = Math.min(++this.we, b.length - 1), Qs(b[this.we])
  }else {
    if(38 == a.keyCode) {
      this.we = Math.max(--this.we, 0), Qs(b[this.we])
    }else {
      if(this.we && 13 == a.keyCode) {
        var c = b[this.we].querySelector("[data-action]");
        c ? (a = c.getAttribute("data-action"), this.bi = !0, c = Math.max(--this.we, 0), "open-search" != a && Qs(b[c]), vg && Kg({vd:a, value:void 0, target:window.document.body, event:{}, Pn:!1})) : (b = a.target.querySelector("[href]")) && this.ba.navigate(b.pathname.substr(1))
      }else {
        9 == a.keyCode ? (this.Om(), this.bi = !1, this.PC.ps || this.Hl()) : 27 == a.keyCode && (this.Om(), this.bi = !1, this.Hl())
      }
    }
  }
};
z.q.Om = function() {
  this.$f.blur();
  this.we = 0
};
z.q.hC = function(a) {
  a.preventDefault && (a.preventDefault(), a.stopPropagation());
  this.Om();
  this.um = !0;
  (0,z.G)(window.document.body, "site-nav-transition");
  (0,z.I)(window.document.body, "site-nav-new-activity");
  (0,z.P)("isAuthenticated") && (0,z.P)("variants.can_view_activity") && this.gb.post("/me/activity/last-viewed", null, {background:!0});
  (0,z.G)(window.document.body, "site-nav-drawer-open");
  this.$f.focus()
};
z.q.Hl = function(a) {
  if(!this.bi && this.um) {
    var b = window.document.getElementById("container"), c = (0,z.L)(b, z.cj, function(a) {
      if(a.target === b) {
        (0,z.pe)(c);
        this.um || (0,z.I)(window.document.body, "site-nav-transition");
        a = (0,z.cb)(window.document.getElementsByClassName("notifications-list-item-new"));
        for(var e = 0;e < a.length;e++) {
          a[e].className = "notifications-list-item"
        }
      }
    }, this);
    (0,z.I)(window.document.body, "site-nav-drawer-open");
    this.um = !1;
    a && a.preventDefault()
  }
};
z.q.eq = function(a, b) {
  this.bi = !1;
  this.Hl();
  window.document.body.removeChild(this.$f);
  window.document.body.insertBefore(this.$f, this.vv);
  b && this.ba.mb && (Rs(this), this.ru())
};
z.q.ru = function() {
  if(1E3 >= window.innerWidth) {
    if(!this.gm) {
      var a = this.ba.mb;
      a && a.o ? (this.gm = !0, this.ia.h("scroll", this.Yd, this)) : (0,z.Ph)("sitenav: activeScreen not ready for scroll listener")
    }
  }else {
    (0,z.I)(window.document.body, "site-nav-hidden"), Rs(this)
  }
};
z.q.Yd = function(a) {
  5 > a.scrollTop ? (0,z.I)(window.document.body, "site-nav-hidden") : (0,z.G)(window.document.body, "site-nav-hidden")
};
z.q.FB = function(a, b) {
  b.background && 401 == a && this.Ta.W("You've been logged out. Please log in.", "error")
};
(0,z.v)(Ss, z.Sh);
var Vs = "track";
z.q = Ss.prototype;
z.q.zA = null;
z.q.hu = null;
z.q.q = function() {
  (0,window.clearTimeout)(this.be);
  this.ia.ma("scroll", this.$c, this);
  Ss.s.q.call(this)
};
z.q.Xj = function() {
  this.ec = this.ba.mb.sb();
  this.ec == window && (this.ec = window.document.body);
  this.Jv = Date.now()
};
z.q.$c = function() {
  (0,window.clearTimeout)(this.be);
  Us(this);
  Ts(this, !0)
};
z.q.VB = function() {
  Us(this);
  Ts(this)
};
(function() {
  function a() {
    var a = [Xq(fw, aj), Xq(gw, aj), Xq(hw, z.$i), Xq(iw, z.$i), Xq(jw, kq), Xq(kw, kq), Xq(ow, z.$i), Xq(pw, z.$i), Xq(qw, z.$i), Xq(rw, rj), Xq(sw, "ProfileScreen"), Xq(tw, "ProfileScreen"), Xq(uw, "ProfileScreen"), Xq(vw, "ProfileScreen"), Xq(ww, "ProfileScreen"), Xq(xw, "DraftsScreen"), Xq(zw, "DraftsScreen"), Xq(yw, "DraftsScreen"), Xq(Aw, "DraftsScreen"), Xq(Bw, "ExportScreen"), Xq(Cw, z.$i), Xq(Dw, "SettingsScreen"), Xq(Ew, "StatsScreen"), Xq(Fw, "StatsScreen"), Xq(Gw, "CollectionCreateScreen"), 
    Xq(Hw, kp), Xq(Iw, "CollectionSettingsScreen"), Xq(Jw, up), Xq(Kw, up), Xq(Lw, up), Xq(Pw, z.$i)];
    ((0,z.P)("variants.can_view_own_referrers") || (0,z.P)("variants.can_view_all_referrers")) && a.push(Xq(Qw, "ReferrersScreen"));
    a.push(Xq(mw, Go), Xq(Nw, Go));
    a.push(Xq(lw, "PostEditScreen"), Xq(nw, "PostEditScreen"), Xq(Mw, "PostEditScreen"), Xq(Ow, "PostEditScreen"));
    var b = new Vq;
    a.forEach(function(a) {
      b.add(a)
    });
    return b
  }
  function b() {
    et.set(ju, String(window.document.body.clientWidth), 604800, "/")
  }
  function c() {
    if((0,z.P)("currentUser.isAuthenticated") && !(0,z.P)("isCurrentUserVerified")) {
      (0,z.W)(pv, {});
      var a = h.get("butter-bar");
      a.W('Complete your account registration. \x3cbutton class\x3d"btn btn-chromeless butter-bar-link" title\x3d"Send verification email" data-action\x3d"butter-bar-action"\x3eSend verification email.\x3c/button\x3e', {type:"success", by:-1});
      (0,z.Rp)(a, function() {
        (0,z.W)(qv, {});
        (0,z.A)((0,z.y)(h.get("request").post("/me/send-verify", {}, {Z:!0}), function(b) {
          a.ja();
          a.W("Verification email sent to " + (0,z.U)(b.value) + '. \x3cbutton class\x3d"btn btn-chromeless butter-bar-link" title\x3d"Change email" data-action\x3d"butter-bar-action"\x3eChange email\x3c/button\x3e', "success");
          (0,z.Rp)(a, function() {
            h.get("app").navigate("me/settings")
          })
        }), (0,z.vl)(h.get("dialog"), (0,z.Ws)()))
      }, this);
      return!0
    }
    return!1
  }
  function d() {
    var a = Number((0,z.P)("currentUser.flagSeenWritePrompt"));
    (0,z.P)("variants.can_create_post") && !(0,z.P)("currentUser.lastPostCreatedAt") && 10 > a && !/\/new-post\/?$/.test(window.location.pathname) && ((0,z.W)(rv, {}), e(a + 1), a = h.get("butter-bar"), a.W('You\'re invited to write on Medium. \x3cbutton class\x3d"btn btn-chromeless butter-bar-link" title\x3d"Start writing" data-action\x3d"butter-bar-action"\x3eStart writing\x3c/button\x3e', {type:"success", Vw:!0}), (0,z.Rp)(a, function() {
      (0,z.W)(tv, {});
      e(100);
      h.get("app").navigate("/p/new-post")
    }, this), a.h(bw, function() {
      (0,z.W)(sv, {});
      e(100)
    }, this))
  }
  function e(a) {
    (0,z.A)(h.get("request").put("/me/settings/flag-seen-write-prompt", {value:a}, {Z:!0}), z.Jh)
  }
  vf();
  var f = String((0,z.P)("buildLabel"));
  (function() {
    z.B ? Ih() : (Lh(), Mh(), Nh(), Oh());
    Qh.push(z.Tb);
    Qh.push(Bh);
    Qh.push("domIsDirty");
    Dh("user", (0,z.P)("currentUser.userId"));
    Eh.build = f;
    Eh.userAgent = window.navigator.userAgent;
    Dh("location", {toString:function() {
      return window.document.location.href
    }})
  })();
  var h = window.__obv = new jr;
  h.add("activity-monitor", new Yq);
  h.add("request", function() {
    var a = new Kk(2, f);
    a.h("versionchange", function(a, b, c, d) {
      a > c && window.location.reload(!0);
      b != d && (a = h.get("app"), (0,z.pe)(a.Gl), a.Gl = null)
    });
    return a
  }());
  h.add("datastore", new wi(h));
  for(Gh(new ih(h, "/_/oh-noes", 5E3, 15));Rh.length;) {
    jh(Hh, Rh.shift())
  }
  ui(new ih(h, "/_/stat", 5E3, window.Infinity));
  Mq();
  h.add("image", new mq);
  h.add("app", new Zk("/", h, String((0,z.P)("productName"))));
  h.add("dom-monitor", new Eo(h));
  h.add("butter-bar", new Qp(window.document.querySelector(".butter-bar"), h));
  h.add("twitter", new Pq(h));
  h.add("facebook", new Qq(h));
  h.add("tooltip", new z.Ip);
  h.add("popover", new z.Np(h));
  h.add("dialog", new z.ul(h));
  h.add("email", new Tq(h));
  h.add("coreactions", new aq(h));
  h.add("zoom", new vp(h));
  h.add("activity", new hq(h));
  h.add("sitenav", new Ps(window.document.getElementsByClassName("site-nav")[0], h));
  h.add("referrer-tracker", new dr(h));
  h.add("scroll-tracker", new Ss(h));
  h.add("loading-indicator", new lr(h));
  h.add("media-resource", new qq(h, !1));
  h.add("media-resource-frames", new qq(h, !0));
  h.add("follow-ups", new Lq(h));
  kr(h, "notes", "notes");
  kr(h, "notes-mobile", "notes-mobile");
  kr(h, "SettingsScreen", "settings");
  kr(h, "ProfileScreen", "profile");
  kr(h, "CollectionCreateScreen", "creators");
  kr(h, "CollectionSettingsScreen", "creators");
  kr(h, "FollowUpEditor", "followup-editor");
  kr(h, "DraftsScreen", "posters");
  kr(h, "PostEditScreen", "posters");
  kr(h, "ExportScreen", "export");
  kr(h, "StatsScreen", "stats");
  kr(h, "ReferrersScreen", "stats");
  (function() {
    var a = new fr(h), b = window.PLOVR_MODULE_URIS, c = window.PLOVR_MODULE_INFO;
    a.vu = c;
    for(var d in c) {
      0 === c[d].length && (a.hm[d] = !0)
    }
    0 === b.base.indexOf("fingerprint:") && (b = (0,z.P)("moduleUrls"));
    a.wu = b
  })();
  (function() {
    oi("userId", (0,z.P)("currentUser.userId"));
    oi("referrer", function() {
      var a = h.get("referrer-tracker"), b = a.wq;
      a.Lp && (b = a.Ol || a.wq);
      0 !== a.bg.length && (a = a.bg.slice(-1)[0], a = a[Object.keys(a)[0]], b = 0 === a.length ? b : b + (-1 == b.indexOf("?") ? "?" : "\x26") + "source\x3d" + a);
      return b
    })
  })();
  h.Rc();
  (function() {
    var b = al(dl(cl(cl(bl(bl(bl(bl(bl(h.get("app"), /^utm_/), /^km_/), "kme"), "kmi"), "interstitial"), /^\/r\/?$/), /^\/feed\/.*/)), a());
    b.h("endNav", function(a, b) {
      b && (f || li(["_trackPageview", "/" + a]), mi(["record", "pageview", {path:"/" + a}]))
    });
    new mr(h);
    (0,z.P)("variants.enable_cover_flow") && new lg(h);
    var e = window.location.pathname.substr(1) + window.location.hash, f = !0;
    (0,z.A)((0,z.y)((0,z.Gb)(b.og(e), function() {
      f = !1
    }), function() {
      "m/welcome" != e && (c() || d())
    }), (0,z.g)())
  })();
  new br(h, f);
  (0,z.rg)("navigate", function(a) {
    h.get("app").navigate(a.value)
  });
  b();
  h.get("dom-monitor").h("resize-end", b);
  et.set("tz", String((new Date).getTimezoneOffset()), 604800, "/")
})();
(0,z.v)(z.Xs, z.D);
z.Xs.prototype[rr] = !0;
z.q = z.Xs.prototype;
z.q.fo = null;
z.q.vo = (0,z.s)(59);
z.q.addEventListener = function(a, b, c, d) {
  (0,z.yr)(this, a, b, c, d)
};
z.q.removeEventListener = function(a, b, c, d) {
  (0,z.Hr)(this, a, b, c, d)
};
z.q.dispatchEvent = function(a) {
  var b, c = this.fo;
  if(c) {
    for(b = [];c;c = c.fo) {
      b.push(c)
    }
  }
  var c = this.ID, d = a.type || a;
  if((0,z.ma)(a)) {
    a = new z.or(a, c)
  }else {
    if(a instanceof z.or) {
      a.target = a.target || c
    }else {
      var e = a;
      a = new z.or(d, c);
      sb(a, e)
    }
  }
  var e = !0, f;
  if(b) {
    for(var h = b.length - 1;!a.wg && 0 <= h;h--) {
      f = a.currentTarget = b[h], e = Ys(f, d, !0, a) && e
    }
  }
  a.wg || (f = a.currentTarget = c, e = Ys(f, d, !0, a) && e, a.wg || (e = Ys(f, d, !1, a) && e));
  if(b) {
    for(h = 0;!a.wg && h < b.length;h++) {
      f = a.currentTarget = b[h], e = Ys(f, d, !1, a) && e
    }
  }
  return e
};
z.q.q = function() {
  z.Xs.s.q.call(this);
  this.kg && this.kg.Zi(void 0);
  this.fo = null
};
z.q.Xa = function(a, b, c, d) {
  return this.kg.add(a, b, !1, c, d)
};
z.q.Is = function(a, b, c, d) {
  return this.kg.remove(a, b, c, d)
};
z.q.Lk = function(a, b, c, d) {
  return this.kg.Lk(a, b, c, d)
};
(0,z.v)(z.Zs, z.D);
var Sw = [];
z.q = z.Zs.prototype;
z.q.Xa = function(a, b, c, d, e) {
  (0,z.ja)(b) || (Sw[0] = b, b = Sw);
  for(var f = 0;f < b.length;f++) {
    var h = (0,z.yr)(a, b[f], c || this, d || !1, e || this.qe || this);
    if(!h) {
      break
    }
    this.cb[h.key] = h
  }
  return this
};
z.q.Is = function(a, b, c, d, e) {
  if((0,z.ja)(b)) {
    for(var f = 0;f < b.length;f++) {
      this.Is(a, b[f], c, d, e)
    }
  }else {
    e = e || this.qe || this, c = zr(c || this), d = !!d, b = qr(a) ? a.Lk(b, c, d, e) : a ? (a = Ar(a)) ? a.Lk(b, c, d, e) : null : null, b && ((0,z.Cs)(b), delete this.cb[b.key])
  }
  return this
};
z.q.Zi = function() {
  lb(this.cb, z.Cs);
  this.cb = {}
};
z.q.q = function() {
  z.Zs.s.q.call(this);
  this.Zi()
};
z.q.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
})(_mdm);