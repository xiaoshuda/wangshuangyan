(function(z){
var Tw = function(a) {
  return a.Rd() ? a.Va() : a.Cb()
};
var Uw = function(a) {
  return a.Rd() ? a.fa() : a.ua()
};
var Vw = function(a) {
  return a.Rd() ? a.Cb() : a.Va()
};
var Ww = function(a) {
  return a.Rd() ? a.ua() : a.fa()
};
var Xw = function() {
  z.D.call(this)
};
var Yw = function(a) {
  this.Sb = (0,z.Pd)(a)
};
var Zw = function(a) {
  this.Ov = Ww(a);
  this.KD = Vw(a);
  this.sw = Uw(a);
  this.nE = Tw(a)
};
var $w = function(a, b) {
  for(var c = b;c = c.previousSibling;) {
    if(c == a) {
      return-1
    }
  }
  return 1
};
var ax = function(a, b) {
  var c = a.parentNode;
  if(c == b) {
    return-1
  }
  for(var d = b;d.parentNode != c;) {
    d = d.parentNode
  }
  return $w(d, a)
};
var bx = function(a, b) {
  if(a == b) {
    return 0
  }
  if(a.compareDocumentPosition) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1
  }
  if(z.B && !(0,z.cc)(9)) {
    if(9 == a.nodeType) {
      return-1
    }
    if(9 == b.nodeType) {
      return 1
    }
  }
  if("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
    var c = 1 == a.nodeType, d = 1 == b.nodeType;
    if(c && d) {
      return a.sourceIndex - b.sourceIndex
    }
    var e = a.parentNode, f = b.parentNode;
    return e == f ? $w(a, b) : !c && (0,z.Kc)(e, b) ? -1 * ax(a, b) : !d && (0,z.Kc)(f, a) ? ax(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
  }
  d = (0,z.oc)(a);
  c = d.createRange();
  c.selectNode(a);
  c.collapse(!0);
  d = d.createRange();
  d.selectNode(b);
  d.collapse(!0);
  return c.compareBoundaryPoints(z.Mb.Range.START_TO_END, d)
};
var cx = function(a, b, c, d) {
  if(a == c) {
    return d < b
  }
  var e;
  if(1 == a.nodeType && b) {
    if(e = a.childNodes[b]) {
      a = e, b = 0
    }else {
      if((0,z.Kc)(a, c)) {
        return!0
      }
    }
  }
  if(1 == c.nodeType && d) {
    if(e = c.childNodes[d]) {
      c = e, d = 0
    }else {
      if((0,z.Kc)(c, a)) {
        return!1
      }
    }
  }
  return 0 < (bx(a, c) || b - d)
};
var dx = function(a) {
  a.gj || (a.gj = (0,z.qd)(a), a.gj.sort(function(a, c) {
    var d = a.fa(), e = a.Va(), f = c.fa(), h = c.Va();
    return d == f && e == h ? 0 : cx(d, e, f, h) ? 1 : -1
  }));
  return a.gj
};
var ex = function(a) {
  a && (this.rg = (0,z.Te)(dx(a), function(a) {
    return(0,z.Yc)(a)
  }));
  z.rd.call(this, a ? this.fa() : null, !1)
};
var fx = function(a) {
  this.ns = (0,z.Te)((0,z.qd)(a), function(a) {
    return a.kl()
  })
};
var gx = function(a) {
  return z.B && !(0,z.cc)(9) ? new z.Ad(a, (0,z.oc)(a.parentElement())) : z.Wc ? new z.Hd(a) : z.K ? new z.zd(a) : z.Id ? new z.Gd(a) : new z.vd(a)
};
var hx = function(a) {
  if(a.getSelection) {
    return a.getSelection()
  }
  a = a.document;
  var b = a.selection;
  if(b) {
    try {
      var c = b.createRange();
      if(c.parentElement) {
        if(c.parentElement().document != a) {
          return null
        }
      }else {
        if(!c.length || c.item(0).document != a) {
          return null
        }
      }
    }catch(d) {
      return null
    }
    return b
  }
  return null
};
var ix = function(a) {
  var b = a.la();
  if(b) {
    return b
  }
  b = new z.mm;
  a.We(b);
  return b
};
z.jx = function(a, b) {
  return(0,z.O)(a, "bodyModel", b)
};
z.kx = function() {
  this.Ke = [];
  this.Xi = [];
  this.xn = this.gj = null
};
var lx = function(a, b) {
  var c;
  c = -1;
  for(var d = 0;d < a.length;d++) {
    if(b >= (0,z.Ij)(a[d])) {
      c = d
    }else {
      break
    }
  }
  return-1 == c ? null : a[c]
};
var mx = function(a) {
  a = ix(a);
  var b = (0,z.N)(a, "bodyModel");
  if(b) {
    return b
  }
  b = new z.vj;
  (0,z.jx)(a, b);
  return b
};
var nx = function(a, b) {
  return(0,z.O)(a, "sections", b)
};
var ox = function(a, b) {
  return(0,z.O)(a, "paragraphs", b)
};
var px = function(a) {
  var b, c = !1;
  if(a.createRange) {
    try {
      b = a.createRange()
    }catch(d) {
      return null
    }
  }else {
    if(a.rangeCount) {
      if(1 < a.rangeCount) {
        b = new z.kx;
        for(var c = 0, e = a.rangeCount;c < e;c++) {
          b.Ke.push(a.getRangeAt(c))
        }
        return b
      }
      b = a.getRangeAt(0);
      c = cx(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
    }else {
      return null
    }
  }
  return b && b.addElement ? (0,z.Nd)(b) : (0,z.Kd)(gx(b), c)
};
z.qx = function(a, b) {
  return b in a.Ug && a.Ug[b] in a.ff
};
var rx = function(a, b, c) {
  for(var d = lx(a, b), d = (0,z.Ya)(a, d), e = 0;e < a.length;e++) {
    var f = a[e];
    (0,z.Ij)(f) > b && (0,z.Jj)(f, (0,z.Ij)(f) - 1)
  }
  (0,z.Em)(a, d, c) || a.splice(d, 1)
};
var sx = function(a, b) {
  for(var c = 0;c < a.length;c++) {
    var d = a[c];
    (0,z.Ij)(d) && (0,z.Ij)(d) >= b && (0,z.Jj)(d, (0,z.Ij)(d) + 1)
  }
};
var tx = function(a) {
  if(!a.length) {
    return!0
  }
  for(var b = -1, c = 0;c < a.length;c++) {
    if(a[c]) {
      if((0,z.Ij)(a[c]) <= b) {
        return!1
      }
      b = (0,z.Ij)(a[c])
    }
  }
  return!0
};
var ux = function(a) {
  a = mx(a);
  var b = (0,z.N)(a, "sections");
  if(b) {
    return b
  }
  b = (0,z.Dm)([]);
  nx(a, b);
  return b
};
var vx = function(a) {
  a = mx(a);
  var b = (0,z.wj)(a);
  if(b) {
    return b
  }
  b = [];
  ox(a, b);
  return b
};
var wx = function(a, b, c) {
  var d = (0,z.qa)(c);
  if(!b[d]) {
    b[d] = !0;
    for(var e in c.Vc) {
      var d = c.Vc[e], f = a.Vc[e];
      f || (f = a.Vc[e] = new z.Oj(a), f.sg = !1, f.qd = !1);
      f.sg = f.sg || d.sg;
      f.qd = f.qd || d.qd;
      for(var h in d.attributes) {
        var k = d.attributes[h];
        if(!0 === k || !0 === f.attributes[h]) {
          f.attributes[h] = !0
        }else {
          if((0,z.ja)(k)) {
            var l = f.attributes[h];
            (0,z.ja)(l) || (l = f.attributes[h] = []);
            (0,z.gb)(l, k)
          }
        }
      }
      wx(a, b, d.qc)
    }
  }
};
z.xx = function(a) {
  return(a = hx(a || window)) && px(a)
};
var yx = function(a) {
  var b = new z.kx;
  b.Xi = a;
  b.Ke = (0,z.Te)(a, function(a) {
    return a.Oc()
  });
  return b
};
var zx = function(a) {
  if(z.B && !(0,z.cc)(9)) {
    var b = !1;
    try {
      b = a.parentNode
    }catch(c) {
    }
    return!!b
  }
  return(0,z.Kc)(a.ownerDocument.body, a)
};
z.Ax = function(a, b, c, d) {
  var e = new z.Jd;
  e.te = cx(a, b, c, d);
  if((0,z.Jc)(a) && !(0,z.Ec)(a)) {
    var f = a.parentNode;
    b = (0,z.Ya)(f.childNodes, a);
    a = f
  }
  (0,z.Jc)(c) && !(0,z.Ec)(c) && (f = c.parentNode, d = (0,z.Ya)(f.childNodes, c), c = f);
  e.te ? (e.sa = c, e.va = d, e.oa = a, e.ta = b) : (e.sa = a, e.va = b, e.oa = c, e.ta = d);
  return e
};
var Bx = function(a, b, c) {
  var d;
  d = d || (0,z.mc)(a.parentElement());
  var e;
  1 != b.nodeType && (e = !0, b = d.pb("DIV", null, b));
  a.collapse(c);
  c = d || (0,z.mc)(a.parentElement());
  var f, h = f = b.id;
  f || (f = b.id = "goog_" + z.$s++);
  a.pasteHTML(b.outerHTML);
  (b = c.L(f)) && (h || b.removeAttribute("id"));
  e && (a = b.firstChild, d.mE(b), b = a);
  return b
};
var Cx = function(a, b) {
  return a.Ne.L(b ? a.Yx : a.mw)
};
var Dx = function(a, b) {
  var c = window.document.getElementById(a.dm + (0,z.qa)(b));
  a.H("before-clear", b, c);
  c.innerHTML = (0,z.uj)(a, b);
  a.H("after-draw", b, c)
};
z.Ex = function(a, b) {
  if((0,z.qx)(a, b)) {
    return(0,z.Ob)(a.ff[a.Ug[b]])
  }
  if(!a.rm[b]) {
    var c = "/_/media-resources/" + (0,window.encodeURIComponent)(b);
    a.Hz && (c += "?frame\x3dtrue");
    a.rm[b] = (0,z.y)((0,z.Gb)(a.ha.get(c, {Z:!0}), function() {
      delete this.rm[b]
    }, a), function(a) {
      a = (0,z.Ki)(a.value, a.references);
      a = (0,z.rq)(this, a);
      this.Ug[b] = (0,z.Wh)(a, "mediaResourceId");
      return a
    }, a)
  }
  return a.rm[b].Je()
};
z.Fx = function(a, b) {
  window.clearTimeout(a.Hc);
  var c = a.S.offsetWidth, d = a.S.offsetHeight, e = a.S.offsetLeft, f = a.S.offsetTop, h = window.document.documentElement.scrollTop || window.document.body.scrollTop || 0, k = Math.round(b.left + b.width / 2 - c / 2), d = Math.round(b.top + h - d + -2);
  if(30 < Math.abs(e - k) || f != d) {
    k + c > window.document.body.clientWidth ? (k -= c / 2, (0,z.gd)(a.S, "far-left", "far-right")) : 0 >= k ? (k += c / 2, (0,z.gd)(a.S, "far-right", "far-left")) : (0,z.gm)(a.S, ["far-left", "far-right"]), c = a.S.parentNode.getBoundingClientRect(), a.S.style.left = k - c.left + "px", a.S.style.top = d - c.top + "px"
  }
  (0,z.Ie)(a.S);
  (0,z.G)(a.S, "highlight-menu-active");
  a.Of = !0;
  a.H("show")
};
z.Gx = function(a) {
  a.Of && ((0,z.gm)(a.S, ["highlight-menu-active", "highlight-menu-linkmode"]), a.Of = !1, a.H("hide"))
};
var Hx = function(a, b, c) {
  c = Math.min(c, a.text.length);
  a.text = a.text.substring(0, c) + b + a.text.substring(c);
  a = a.fb;
  for(var d = 0;d < a.length;d++) {
    var e = a[d];
    (3 != e.l() ? (0,z.Gj)(e) >= c : (0,z.Gj)(e) > c) && e.setEnd((0,z.Gj)(e) + b.length);
    0 !== (0,z.Fj)(e) && (0,z.Fj)(e) >= c && e.setStart((0,z.Fj)(e) + b.length)
  }
};
var Ix = function(a, b) {
  for(var c = a.fb, d = 0;d < c.length;d++) {
    var e = c[d];
    if(e.l() == b.l() && ((0,z.Bn)(b, (0,z.Fj)(e), !1) && e.setStart((0,z.Gj)(b)), (0,z.Bn)(b, (0,z.Gj)(e), !0) && e.setEnd((0,z.Fj)(b)), (0,z.Bn)(e, (0,z.Fj)(b), !1) && (0,z.Bn)(e, (0,z.Gj)(b), !0))) {
      c = z.Dk.Wc(z.Ej, z.Dk.jd(e));
      c.setStart((0,z.Gj)(b));
      e.setEnd((0,z.Fj)(b));
      (0,z.xn)(a, c);
      break
    }
  }
  (0,z.Gn)(a)
};
var Jx = function(a) {
  return 5 != a.type && 4 != a.type && 11 != a.type && (0,z.Da)(a.text)
};
var Kx = function(a) {
  var b;
  do {
    b = Math.round(65535 * Math.random()).toString(16), b = Array(4 - b.length + 1).join("0") + b
  }while(a[b]);
  a[b] = !0;
  return b
};
z.Lx = function(a) {
  return 5 == a || 4 == a || 11 == a
};
var Mx = function(a, b, c) {
  a = a.attributes[b];
  if(!0 === a) {
    return c
  }
  if((0,z.ja)(a)) {
    return"class" == b ? (c.match(/\S+/g) || []).filter((0,z.xa)(z.Xa, a)).join(" ") : (0,z.Xa)(a, c) ? c : null
  }
  if(a instanceof RegExp) {
    for(var d = "";b = a.exec(c);) {
      d += b[0]
    }
    return d || null
  }
  return null
};
var Nx = function() {
  var a = z.Hv, b = new z.Mj;
  (0,z.Pj)(b);
  wx(b, {}, a);
  return b
};
z.Ox = function(a) {
  a.Dj || (a.Dj = new z.Uh((0,z.P)("currentUser")));
  return a.Dj
};
var Px = function(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
};
z.Qx = function(a, b, c, d) {
  return(0,z.Ax)(a, b, c, d)
};
z.Rx = function(a) {
  a = a.yc();
  return 1 == a.nodeType ? a : a.parentNode
};
z.Sx = function(a) {
  z.D.call(this);
  this.Yx = "goog_" + z.$s++;
  this.mw = "goog_" + z.$s++;
  this.zf = a.Rd();
  this.Ne = (0,z.mc)(a.kd());
  a.Ff(this.Ne.pb("SPAN", {id:this.Yx}), this.Ne.pb("SPAN", {id:this.mw}))
};
var Tx = function(a, b) {
  this.C = a;
  this.offset = b
};
var Ux = function(a) {
  var b = a.C.parentNode;
  return new Tx(b, (0,z.Ya)(b.childNodes, a.C))
};
z.Vx = function(a) {
  return a.length || a.childNodes.length
};
var Wx = function(a, b, c, d) {
  for(;1 == a.nodeType;) {
    var e = a.childNodes[b];
    if(e || a.lastChild) {
      if(e) {
        var f = e.previousSibling;
        if(c && f) {
          if(d && 1 == f.nodeType && !(0,z.Ec)(f)) {
            break
          }
          a = f;
          b = (0,z.Vx)(a)
        }else {
          if(d && 1 == e.nodeType && !(0,z.Ec)(e)) {
            break
          }
          a = e;
          b = 0
        }
      }else {
        if(d && 1 == a.lastChild.nodeType && !(0,z.Ec)(a.lastChild)) {
          break
        }
        a = a.lastChild;
        b = (0,z.Vx)(a)
      }
    }else {
      break
    }
  }
  return new Tx(a, b)
};
var Xx = function(a, b) {
  for(var c = null, d;a != b && (d = a.parentNode);) {
    for(var e = a, f = d.cloneNode(!1);e.nextSibling;) {
      f.appendChild(e.nextSibling)
    }
    c && f.insertBefore(c, f.firstChild);
    c = f;
    a = d
  }
  return c
};
var Yx = function(a) {
  for(;a.firstChild;) {
    a.parentNode && a.parentNode.insertBefore(a.firstChild, a)
  }
  (0,z.F)(a)
};
var Zx = function(a) {
  var b = !1;
  function c(a) {
    return a.nodeType == z.Rc ? b ? (0,z.Da)(a.nodeValue) : 0 === a.nodeValue.length : "HR" == a.tagName || "IMG" == a.tagName || "IFRAME" == a.tagName ? !1 : (0,z.at)(a.childNodes, c)
  }
  return c(a)
};
var $x = function(a) {
  var b;
  if(a.C.nodeType == z.Rc) {
    for(b = a.C.previousSibling;b && b.nodeType == z.Rc;b = b.previousSibling) {
      a.offset += (0,z.Vx)(b)
    }
  }else {
    b = a.C.previousSibling
  }
  var c = a.C.parentNode;
  a.C = b ? b.nextSibling : c.firstChild;
  return a
};
z.ay = function(a, b) {
  return b ? Wx(a.fa(), a.Va()) : Wx(a.ua(), a.Cb())
};
var by = function(a) {
  for(var b = null, c = a.firstChild;c;) {
    var d = c.nextSibling;
    c.nodeType == z.Rc ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c : (by(c), b = null);
    c = d
  }
};
z.cy = function(a) {
  var b = a && a.nodeName.toLowerCase();
  return!(!a || "block" != (1 != a.nodeType ? null : z.B ? a.currentStyle ? a.currentStyle.display : null : (0,z.ce)(a, "display")) && "td" != b && "table" != b && "li" != b)
};
var dy = function(a, b, c) {
  this.kx = a;
  this.MF = !!c;
  a && !b && this.next()
};
var ey = function(a, b, c, d) {
  if(null != a) {
    for(a = a.firstChild;a;) {
      if(b(a) && (c.push(a), d) || ey(a, b, c, d)) {
        return!0
      }
      a = a.nextSibling
    }
  }
  return!1
};
var fy = function(a, b) {
  var c = Xx(b, a);
  (0,z.Gc)(c, a);
  for(var c = null, d = b;d != a && !c;d = d.parentNode) {
    c = d.previousSibling
  }
  c = c ? Xx(c, a) : a;
  d = c == a && (0,z.xe)(a) && !b.nextSibling && b.parentNode == a;
  Yx(b);
  if(!d || "P" == a.tagName && "P" != b.tagName) {
    (0,z.Gc)(b, a), b.appendChild(c)
  }
};
var gy = function(a) {
  for(a = a.firstChild;a;a = a.nextSibling) {
    if("FIGCAPTION" != a.tagName && (a.nodeType == z.Rc && 0 !== a.nodeValue.length || 1 == a.nodeType && !gy(a))) {
      return!1
    }
  }
  return!0
};
var hy = function(a) {
  return Zx(a)
};
var iy = function(a) {
  var b = a.Rd(), c = $x((0,z.ay)(a, !b)), d = Ux(c), e = c.C.previousSibling;
  c.C.nodeType == z.Rc && (c.C = null);
  var f = $x((0,z.ay)(a, b)), h = Ux(f), k = f.C.previousSibling;
  f.C.nodeType == z.Rc && (f.C = null);
  return function() {
    !c.C && e && (c.C = e.nextSibling, c.C || (c = new Tx(e, (0,z.Vx)(e))));
    !f.C && k && (f.C = k.nextSibling, f.C || (f = new Tx(k, (0,z.Vx)(k))));
    return(0,z.Ax)(c.C || d.C.firstChild || d.C, c.offset, f.C || h.C.firstChild || h.C, f.offset)
  }
};
z.jy = function(a) {
  return 1 == a.nodeType || a.nodeType == z.Rc && !!/[^\t\n\r ]/.test(a.nodeValue)
};
var ky = function(a, b, c) {
  (0,z.ia)(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
  dy.call(this, a.childNodes[c], !0, b)
};
z.ly = function(a, b) {
  var c = (0,z.Yc)(a), d = new z.Xc;
  d.next = function() {
    for(;;) {
      var a = c.next();
      if(b.call(void 0, a, void 0, c)) {
        return a
      }
    }
  };
  return d
};
z.my = function(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b)
};
var ny = function(a) {
  var b;
  b = [];
  if(b = ey(a, z.xe, b, !0) ? b[0] : void 0) {
    return Zx(b) ? (0,z.F)(b) : fy(a, b), !0
  }
  if((0,z.Jc)(a) && "UL" != a.tagName && "OL" != a.tagName) {
    b = a.getElementsByTagName("BR");
    for(var c = 0;c < b.length;c++) {
      var d = b[c], e = d.nextSibling;
      if(e && "BR" == e.tagName) {
        return(0,z.F)(e), fy(a, d), (0,z.F)(d), !0
      }
    }
  }
  return!(b = 1 == a.nodeType && a.querySelectorAll("img")) || !b.length || 1 === b.length && gy(a) ? !1 : (b = b[0], c = window.document.createElement("FIGURE"), (0,z.my)(c, b), c.appendChild(b), fy(a, c), !0)
};
var oy = function(a, b) {
  if(b) {
    var c = iy(b), d;
    d = (0,z.Rx)(b);
    d = (0,z.Uc)(d, z.cy, !0)
  }
  d ? (d = (0,z.Lc)(d, a), z.B ? by(d) : d.normalize()) : a && (z.B ? by(a) : a.normalize());
  return c ? c() : null
};
var py = function(a, b) {
  var c;
  if(a && 1 == a.nodeType) {
    var d = (0,z.ly)(new ky(a, b), z.jy);
    try {
      c = d.next()
    }catch(e) {
      c = null
    }
  }else {
    c = null
  }
  return c
};
var qy = function(a) {
  return(0,z.Jc)(a) && ("IMG" == a.tagName || 0 !== a.getElementsByTagName("IMG").length)
};
var ry = function(a) {
  this.Cq = a;
  (0,z.zn)(this.Cq.getElementsByTagName("*"), z.xe)
};
var sy = function(a, b) {
  for(var c, d = [], e = a.text;c = b.exec(e);) {
    var f = c.index;
    d.push([f, f + c[0].length])
  }
  for(c = d.length - 1;0 <= c;c--) {
    (0,z.Fn)(a, d[c][0], d[c][1])
  }
};
var ty = function(a) {
  Zx(a) && 0 === a.getElementsByTagName("BR").length && a.appendChild(window.document.createElement("br"))
};
var uy = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return"\x26";
      case "lt":
        return"\x3c";
      case "gt":
        return"\x3e";
      case "quot":
        return'"';
      default:
        if("#" == c.charAt(0)) {
          var d = Number("0" + c.substr(1));
          if(!(0,window.isNaN)(d)) {
            return String.fromCharCode(d)
          }
        }
        return a
    }
  })
};
var vy = function(a) {
  var b = {"\x26amp;":"\x26", "\x26lt;":"\x3c", "\x26gt;":"\x3e", "\x26quot;":'"'}, c = window.document.createElement("div");
  return a.replace(wy, function(a, e) {
    var f = b[a];
    if(f) {
      return f
    }
    if("#" == e.charAt(0)) {
      var h = Number("0" + e.substr(1));
      (0,window.isNaN)(h) || (f = String.fromCharCode(h))
    }
    f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
    return b[a] = f
  })
};
var xy = function(a) {
  for(var b = 0;b < a.length;b++) {
    var c = a[b];
    8 != c.type && (sy(c, /\s+(?=\s)/g), sy(c, /^\s|\s$/g))
  }
};
var yy = function(a) {
  for(var b = {}, c = 0, c = 0;c < a.length;c++) {
    var d = a[c].getName();
    d in b ? a[c].Ud("") : b[d] = !0
  }
  for(c = 0;c < a.length;c++) {
    var d = a[c], e = b;
    d.getName() || d.Ud(Kx(e))
  }
};
var zy = function(a) {
  var b = (0,z.wj)(a) || [];
  a = (0,z.jx)(new z.mm, a);
  a = (new z.lm).We(a);
  for(var c = 0;c < b.length;c++) {
    var d = b[c], e;
    e = d.l();
    var f = d.Lb();
    (e = 5 != e && 4 != e && 11 != e && (0,z.Da)(f)) || (e = d.l(), d = (0,z.N)(d, "dataId"), e = 4 == e && !d);
    e && (d = a, e = (new z.zm[2]).jc(2).td(c), (new (z.Am[e.l()])(e)).Gb(d), c--)
  }
  for(;b.length && 5 == (0,z.Ta)(b).l();) {
    c = a, d = (new z.zm[2]).jc(2).td(b.length - 1), (new (z.Am[d.l()])(d)).Gb(c)
  }
};
z.Ay = function(a) {
  z.Sx.call(this, a)
};
var By = function(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null, d;
  if(c) {
    if(/^\d+px?$/.test(c)) {
      d = (0,window.parseInt)(c, 10)
    }else {
      d = a.style.left;
      var e = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = c;
      c = a.style.pixelLeft;
      a.style.left = d;
      a.runtimeStyle.left = e;
      d = c
    }
  }else {
    d = 0
  }
  return d
};
z.Cy = function(a) {
  for(var b;b = py(a, !1);) {
    a = b
  }
  return a
};
var Dy = function(a) {
  for(var b;b = py(a, !0);) {
    a = b
  }
  return a
};
var Ey = function(a, b, c, d) {
  z.ad.call(this, a, b, c, null, d)
};
var Fy = function(a) {
  return-1 != a.indexOf("\x26") ? "document" in z.Mb ? vy(a) : uy(a) : a
};
var Gy = function(a, b) {
  return b + " " + (1 == b ? a : "s" == a.charAt(a.length - 1) ? a + "es" : a + "s") + " ago"
};
var Hy = function(a) {
  a = (a = a.getAttribute("data-sections")) && JSON.parse(a);
  var b = null;
  a && (0,z.ja)(a) && (b = a.map(z.Dk.Wc.bind(z.Dk, z.Hj)));
  return(0,z.Dm)(b || [])
};
var Iy = function(a, b, c) {
  xy(a);
  (0,z.Kn)(a);
  a = a.map(function(a) {
    return a.Wc()
  });
  yy(c ? a.concat(b) : a);
  b = nx(ox(new z.vj, a), b);
  zy(b);
  return b
};
var Jy = function(a) {
  var b = !1, c = 1E4;
  do {
    for(var b = !1, d = a.firstChild;d;d = d.nextSibling) {
      if(ny(d)) {
        b = !0;
        c--;
        break
      }
    }
    if(0 > c) {
      throw Error("infinite loop");
    }
  }while(b);
  for(var b = [], e = !1, c = (0,z.cb)(a.childNodes), d = 0;d < c.length;d++) {
    var f = c[d];
    if((0,z.xe)(f)) {
      b.push(new ry(f)), e = !1
    }else {
      if(e && !qy(f) || b.length && "SPAN" == f.tagName && !f.childNodes.length && f.id && (0,z.Aa)(f.id, "goog_")) {
        var h = (0,z.Ta)(b);
        h.Cq.appendChild(f);
        (0,z.zn)(h.Cq.getElementsByTagName("*"), z.xe)
      }else {
        e = window.document.createElement("p"), e.appendChild(f), b.push(new ry(e)), c[d + 1] ? a.insertBefore(e, c[d + 1]) : a.appendChild(e), e = !qy(f)
      }
    }
  }
  a.firstChild && (!(0,z.Ae)(a.firstChild) || !(0,z.Lx)((0,z.jo)(a.firstChild))) || a.insertBefore(window.document.createElement("P"), a.firstChild);
  a.lastChild && (!(0,z.Ae)(a.lastChild) || !(0,z.Lx)((0,z.jo)(a.lastChild))) || a.appendChild(window.document.createElement("P"));
  (0,z.Je)(a, ty);
  for(a = a.lastChild;a;a = a.previousSibling) {
    b = a.nextSibling, c = a.tagName, !b || c != b.tagName || "UL" != c && "OL" != c || ((0,z.Fc)(a, b.childNodes), (0,z.F)(b))
  }
};
var Ky = function(a) {
  a = a.replace(/&nbsp;/g, " ");
  return a = a.replace(/ +/g, " ")
};
var Ly = function(a) {
  a = a.replace(/<div>\s*(<br>)*\s*<\/div>/ig, "\x3cp\x3e");
  a = a.replace(/\s*(<br>)+\s*<\/p>/ig, "\x3c/p\x3e");
  return a = a.replace(/<(\/?)p>\s*<\1p>/ig, "\x3c$1p\x3e")
};
var My = function(a, b) {
  var c = b || {};
  "rel" in c || (c.rel = "nofollow");
  "target" in c || (c.target = "_blank");
  var d = [], e;
  for(e in c) {
    c.hasOwnProperty(e) && c[e] && d.push((0,z.Fa)(e), '\x3d"', (0,z.Fa)(c[e]), '" ')
  }
  var f = d.join("");
  return a.replace(z.Dv, function(a, b, c, d, e) {
    a = [(0,z.Fa)(b)];
    if(!c) {
      return a[0]
    }
    a.push("\x3ca ", f, 'href\x3d"');
    d ? (a.push("mailto:"), c = d, d = "") : (e || a.push("http://"), (d = c.match(Ny)) ? (c = d[1], d = d[2]) : d = "");
    c = (0,z.Fa)(c);
    d = (0,z.Fa)(d);
    a.push(c, '"\x3e', c, "\x3c/a\x3e", d);
    return a.join("")
  })
};
z.Oy = function(a, b) {
  a.C.firstChild && (a = Wx(a.C, a.offset));
  for(var c = new Ey(b), d, e = 0;d = (0,z.$c)(c);) {
    if(a.C == d) {
      return e + a.offset
    }
    d.nodeType == z.Rc ? e += d.nodeValue.length : "BR" == d.tagName && (e += 1)
  }
  return-1
};
z.Py = function(a, b) {
  return a.querySelector('[name\x3d"' + b + '"]')
};
z.Qy = function(a) {
  return!!Ry[a.tagName] && !!a.getAttribute("name")
};
var Sy = function(a, b) {
  var c = a.fa(), d = a.ua();
  if(c && d) {
    var e = function(a) {
      return a == b
    }, c = (0,z.Uc)(c, e, !0), d = (0,z.Uc)(d, e, !0);
    if(c && d) {
      return a.Fa()
    }
    if(c) {
      return d = Dy(b), (0,z.Qx)(a.fa(), a.Va(), d, (0,z.Vx)(d))
    }
    if(d) {
      return(0,z.Qx)((0,z.Cy)(b), 0, a.ua(), a.Cb())
    }
  }
  return null
};
z.Ty = function(a, b) {
  if(z.B) {
    var c = By(a, b + "Left"), d = By(a, b + "Right"), e = By(a, b + "Top"), f = By(a, b + "Bottom");
    return new Px(e, d, f, c)
  }
  c = (0,z.ce)(a, b + "Left");
  d = (0,z.ce)(a, b + "Right");
  e = (0,z.ce)(a, b + "Top");
  f = (0,z.ce)(a, b + "Bottom");
  return new Px((0,window.parseFloat)(e), (0,window.parseFloat)(d), (0,window.parseFloat)(f), (0,window.parseFloat)(c))
};
z.Uy = function(a, b) {
  for(;a && 1 != a.nodeType;) {
    a = b ? a.nextSibling : a.previousSibling
  }
  return a
};
z.Vy = function(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
};
var Wy = function(a, b, c) {
  return(0,z.xc)(window.document, arguments)
};
var Xy = function(a) {
  if((0,window.isNaN)(a)) {
    return"some time ago"
  }
  var b = Date.now(), c = Math.floor((b - a) / 6E4);
  if(0 === c) {
    return"just now"
  }
  if(60 > c) {
    return Gy("minute", c)
  }
  c = Math.floor(c / 60);
  if(24 > c) {
    return Gy("hour", c)
  }
  b = new Date(b);
  b.setHours(0);
  b.setMinutes(0);
  b.setSeconds(0);
  b.setMilliseconds(0);
  a = Math.ceil((b.getTime() - a) / 864E5);
  if(14 > a) {
    return Gy("day", a)
  }
  b = Math.floor(a / 7);
  if(4 >= b) {
    return Gy("week", b)
  }
  b = Math.floor(a / 30);
  if(23 >= b) {
    return Gy("month", b)
  }
  a = Math.round(a / 365);
  return Gy("year", a)
};
var Yy = function(a) {
  a = a.cloneNode(!0);
  var b = (0,z.Le)(a).map(function(a) {
    return(0,z.ro)(a)
  }), c = (0,z.Me)(a), d = !!c.length;
  a = d ? (0,z.mo)(c) : Hy(a);
  return Iy(b, a, d)
};
z.Zy = function(a, b, c, d) {
  this.Mg = a.get("image");
  this.BA = a.get("loading-indicator");
  this.element = b;
  this.D = c;
  this.kb = d
};
var $y = function(a, b) {
  if(a.D.zc()) {
    var c = a.D.lg();
    a.D.ro(b);
    var d = (0,z.Ek)(a.D);
    (0,z.Gb)(a.Mg.load(d), function() {
      this.D.lg() == b && ((0,z.I)(this.element, "background-size-" + c), (0,z.G)(this.element, "background-size-" + b), az(this, d))
    }, a)
  }
};
var az = function(a, b) {
  if(b != a.D.hp) {
    var c = a.Bw();
    a.D.hp = b || "";
    if(b) {
      a.Ux(c, b);
      var d = new window.Image;
      d.onload = function() {
        if(this.D.hp == b) {
          var a = d.height;
          (0,z.Aj)((0,z.zj)(this.D.Zc, d.width), a)
        }
      }.bind(a);
      d.src = b
    }else {
      a.Lw(c), (0,z.Aj)((0,z.zj)(a.D.Zc, 0), 0)
    }
  }
};
var bz = function(a) {
  var b = cz;
  if(!b) {
    b = cz = Nx();
    (0,z.bk)(b, "SPAN");
    b.Vc.IMG.attributes = {"data-id":!0};
    for(var c in b.Vc) {
      var d = b.Vc[c];
      d.sg || dz.push(RegExp("\x3c" + c + "[^\x3e]*\x3e[\\s\\S]*?\x3c\\/" + c + "\x3e", "gi"));
      d.attributes.style = /(font-weight|font-style) *: *[\w]*;/g
    }
  }
  a = a.replace(/\x3c!--[\s\S]*?--\x3e/g, "");
  dz.forEach(function(b) {
    a = a.replace(b, "")
  });
  a = a.replace(ez, function(a, c, d) {
    a = b.Vc[d.toUpperCase()] || b.nr;
    if(!a.qd) {
      return""
    }
    (0,z.ma)(a.qd) && (d = a.qd);
    if(fz.test(c)) {
      c = "\x3c/" + d.toLowerCase() + "\x3e"
    }else {
      d = "\x3c" + d.toLowerCase();
      for(var k in a.attributes) {
        var l = c.match(RegExp(k + "\\s*\x3d\\s*(['\"])(.+?)\\1"));
        if(l = l && l[2] && Mx(a, k, l[2])) {
          "href" == k && (l = (0,z.Fa)((0,z.lk)(Fy(l), !0))), d += " " + k + '\x3d"' + l + '"'
        }
      }
      c = d + "\x3e"
    }
    return c
  });
  a = a.replace(/<img>/g, "");
  a = Ly(a);
  return a = Ky(a)
};
var gz = function(a) {
  return a.replace(z.iu, '$1\x3ca href\x3d"/@$2" title\x3d"Medium profile for @$2"\x3e@$2\x3c/a\x3e')
};
z.hz = function(a, b) {
  a || (a = "");
  a = a.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  b && !1 === b.eF ? a = (0,z.jk)(a) : (a = My(a), a = a.replace(/((?:^|[^a-zA-Z0-9_!#$%&*@＠]|RT:?))([@＠])([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_-]{0,24})?/g, '$1\x3ca href\x3d"http://twitter.com/$3$4" target\x3d"_blank" title\x3d"Twitter profile for @$3$4"\x3e@$3$4\x3c/a\x3e'));
  b && !1 === b.uI || (a = a.replace(/\n/g, "\x3cbr\x3e"));
  b && !1 === b.aE || (a = "\x3cp\x3e" + a.replace(/<br><br>/g, "\x3c/p\x3e\x3cp\x3e").replace(/\n\n/g, "\x3c/p\x3e\x3cp\x3e") + "\x3c/p\x3e");
  return a
};
var iz = function(a) {
  a = a.match("(?:(https?|ftp)://|www\\.)\\w[\\w~#-@!\\[\\]]*");
  return null != a ? a[0] : ""
};
var jz = function(a, b, c) {
  b = '\x3cdiv class\x3d"popover-inner"\x3e\x3cul\x3e';
  a = a.items;
  for(var d = a.length, e = 0;e < d;e++) {
    var f = a[e];
    b += '\x3cli class\x3d"typeahead-item" data-username\x3d"@' + (0,z.V)(f.username) + '" data-action\x3d"typeahead-populate"\x3e' + (0,z.gj)({user:f, od:"avatar-micro", Dk:!0}, c) + '\x3cstrong class\x3d"typeahead-name"\x3e' + (0,z.U)(f.name) + '\x3c/strong\x3e \x3cem class\x3d"typeahead-username"\x3e@' + (0,z.U)(f.username) + "\x3c/em\x3e\x3c/li\x3e"
  }
  return b + '\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e'
};
var kz = function(a, b) {
  if(0 > a) {
    return null
  }
  for(var c = new Ey(b), d;d = (0,z.$c)(c);) {
    var e = 0;
    d.nodeType == z.Rc ? e = d.nodeValue.length : "BR" == d.tagName && (e = 1);
    a -= e;
    if(0 > a) {
      return new Tx(d, e + a)
    }
  }
  return 0 === a ? Wx(b, b.childNodes.length) : null
};
var lz = function(a, b, c) {
  var d = (0,z.Py)(a, "title");
  d && b.call(c, d);
  (d = (0,z.Py)(a, "subtitle")) && b.call(c, d);
  (0,z.Ke)(a.querySelector(".body"), z.Qy, (0,z.yb)(b, (0,z.wb)(!0)), c)
};
z.mz = function(a) {
  a = a.nodeType == z.Rc || "BR" == a.tagName ? a.parentNode : a;
  if(a.scrollIntoViewIfNeeded) {
    a.scrollIntoViewIfNeeded(!1)
  }else {
    var b = (0,z.He)(a), c = (0,z.ge)(a), d = (0,z.ge)(b);
    if(c.y < d.y) {
      a.scrollIntoView(!0)
    }else {
      for(var d = new Px(0, window.Infinity, window.Infinity, 0), e = (0,z.mc)(b), f = e.kd().body, h = e.kd().documentElement, k = !z.Wc && (0,z.vc)(e.vb) ? e.vb.documentElement : e.vb.body;b = (0,z.fe)(b);) {
        if(!(z.B && 0 == b.clientWidth || z.Wc && 0 == b.clientHeight && b == f || b == f || b == h || "visible" == (0,z.de)(b, "overflow"))) {
          var l = (0,z.ge)(b), m;
          m = b;
          if(z.K && !(0,z.$b)("1.9")) {
            var r = (0,window.parseFloat)((0,z.ce)(m, "borderLeftWidth"));
            if("rtl" == (0,z.de)(m, "direction")) {
              var C = m.offsetWidth - m.clientWidth - r - (0,window.parseFloat)((0,z.ce)(m, "borderRightWidth")), r = r + C
            }
            m = new z.kc(r, (0,window.parseFloat)((0,z.ce)(m, "borderTopWidth")))
          }else {
            m = new z.kc(m.clientLeft, m.clientTop)
          }
          l.x += m.x;
          l.y += m.y;
          d.top = Math.max(d.top, l.y);
          d.right = Math.min(d.right, l.x + b.clientWidth);
          d.bottom = Math.min(d.bottom, l.y + b.clientHeight);
          d.left = Math.max(d.left, l.x)
        }
      }
      f = k.scrollLeft;
      k = k.scrollTop;
      d.left = Math.max(d.left, f);
      d.top = Math.max(d.top, k);
      e = e.Mb();
      e = (0,z.uc)(e || window);
      d.right = Math.min(d.right, f + e.width);
      d.bottom = Math.min(d.bottom, k + e.height);
      (d = 0 <= d.top && 0 <= d.left && d.bottom > d.top && d.right > d.left ? d : null) && c.y + a.offsetHeight > d.bottom && a.scrollIntoView(!1)
    }
  }
};
var nz = function(a) {
  var b = a.nodeType;
  b == z.Rc ? nz(a.parentNode) : 1 == b && a.focus()
};
var oz = function(a, b) {
  for(var c = null, d = a.firstChild;d;d = c) {
    c = d.nextSibling, oz(d, b)
  }
  b(a) && Yx(a)
};
z.pz = function(a, b) {
  return(0,z.Ee)(a, z.Ae, b)
};
z.qz = function(a, b) {
  var c = a.parentNode, d = (0,z.Ya)(c.childNodes, a) + (b ? 0 : 1), c = Wx(c, d, b, !0);
  (0,z.Ax)(c.C, c.offset, c.C, c.offset).select()
};
z.rz = function(a, b) {
  z.B && (0,z.Vy)(a);
  a.innerHTML = b
};
z.sz = function(a) {
  if(a = hx(a || window)) {
    if(a.empty) {
      try {
        a.empty()
      }catch(b) {
      }
    }else {
      try {
        a.removeAllRanges()
      }catch(c) {
      }
    }
  }
};
z.tz = function(a, b, c) {
  if((0,z.la)(a)) {
    try {
      (0,z.Ac)(a, b, c)
    }catch(d) {
      if(d !== z.Zc) {
        throw d;
      }
    }
  }else {
    a = (0,z.Yc)(a);
    try {
      for(;;) {
        b.call(c, a.next(), void 0, a)
      }
    }catch(e) {
      if(e !== z.Zc) {
        throw e;
      }
    }
  }
};
z.uz = function(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == z.Rc) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      (0,z.Vy)(a), a.appendChild((0,z.oc)(a).createTextNode(String(b)))
    }
  }
};
z.vz = function(a) {
  if(a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) {
    return!1
  }
  switch(a.keyCode) {
    case 18:
    ;
    case 20:
    ;
    case 93:
    ;
    case 17:
    ;
    case 40:
    ;
    case 35:
    ;
    case 27:
    ;
    case 36:
    ;
    case 45:
    ;
    case 37:
    ;
    case 224:
    ;
    case 91:
    ;
    case 144:
    ;
    case 12:
    ;
    case 34:
    ;
    case 33:
    ;
    case 19:
    ;
    case 255:
    ;
    case 44:
    ;
    case 39:
    ;
    case 145:
    ;
    case 16:
    ;
    case 38:
    ;
    case 224:
    ;
    case 92:
      return!1;
    case 0:
      return!z.K;
    default:
      return 166 > a.keyCode || 183 < a.keyCode
  }
};
var wz = function(a) {
  var b;
  b = b || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
  }
};
z.xz = function(a, b) {
  if(!(0,z.oa)(a)) {
    if(a && "function" == typeof a.handleEvent) {
      a = (0,z.wa)(a.handleEvent, a)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : z.Mb.setTimeout(a, b || 0)
};
var yz = function(a, b, c) {
  z.D.call(this);
  this.Yk = a;
  this.Kr = b || 0;
  this.qe = c;
  this.br = (0,z.wa)(this.Me, this)
};
var zz = function(a) {
  a.Ki() && a.Ik()
};
z.$ = function() {
  z.Xs.call(this);
  this.sr = this.ln()
};
var Az = function(a, b, c) {
  this.pw = a;
  this.As = b;
  this.qw = this.Xq = !1;
  this.wr = c || {}
};
var Bz = function(a) {
  this.$v = a
};
var Cz = function(a, b) {
  z.Xs.call(this);
  this.rf = this.id = a;
  this.Rb = null;
  this.vf = {};
  this.yh = {};
  for(var c in Dz) {
    this.yh[c] = []
  }
  this.gr = "";
  this.Ef = {};
  this.Ef[Ez] = 1;
  this.Ef[z.Fz] = 1;
  this.Mr = this.Mi = !1;
  this.Cn = new yz(this.iw, Gz, this);
  this.mr = {};
  for(var d in Hz) {
    this.mr[Hz[d]] = 0
  }
  z.K && (this.ge = new yz(this.Mn, Iz, this));
  this.Pe = new z.Zs(this);
  this.fG = [];
  this.Bh = Jz;
  this.Vi = (0,z.mc)(b || window.document);
  this.Hb = this.Vi.L(this.id);
  this.on = this.Vi.Mb()
};
var Kz = function(a) {
  var b = !(a.ctrlKey || a.metaKey) && a.keyCode in Lz;
  return(a.ctrlKey || a.metaKey) && a.keyCode in Mz || b
};
var Nz = function(a, b) {
  a.Bh = 2;
  a.field = b;
  a.Rb = (0,z.mc)(b);
  a.Mi = !1;
  a.Mr = !1;
  b.setAttribute("g_editable", "true");
  b.setAttribute("role", "textbox")
};
var Oz = function(a) {
  a.Bh = Jz;
  for(var b in a.vf) {
    var c = a.vf[b];
    c.ln() || c.disable(a)
  }
  a.field = null;
  a.Rb = null
};
var Pz = function(a) {
  a.Pe && a.Pe.Zi();
  if((z.It || z.Jt) && a.Yc() && a.Tx()) {
    try {
      var b = a.Rb.Mb();
      b.removeEventListener("keydown", a.uk, !1);
      b.removeEventListener("touchend", a.uk, !1)
    }catch(c) {
    }
    delete a.uk
  }
  if(z.Id && a.Yc()) {
    try {
      b = a.Rb.Mb(), b.removeEventListener("focus", a.$q, !1), b.removeEventListener("blur", a.Zq, !1)
    }catch(d) {
    }
    delete a.$q;
    delete a.Zq
  }
  a.ge && a.ge.stop();
  a.Cn.stop()
};
var Qz = function(a, b) {
  if(9 == b.keyCode && !a.dispatchEvent({type:"beforetab", shiftKey:b.shiftKey, altKey:b.altKey, ctrlKey:b.ctrlKey}) || z.K && b.metaKey && (37 == b.keyCode || 39 == b.keyCode)) {
    return b.preventDefault(), !1
  }
  var c;
  (c = b.charCode) || (c = Kz(b) ? !0 : !(!z.K || b.ctrlKey || b.metaKey || z.K && !b.charCode));
  a.Ar = c;
  a.Ar && a.hg();
  return!0
};
var Rz = function(a, b, c) {
  var d = {};
  a = a.oo(8, b || "", d);
  (0,z.Zd)(c, d);
  (0,z.rz)(c, a)
};
var Sz = function(a, b) {
  if(!b.altKey) {
    var c = z.Eg ? b.metaKey : b.ctrlKey;
    if(c || Tz[b.keyCode]) {
      var d = b.charCode || b.keyCode;
      17 != d && a.Uk(5, b, String.fromCharCode(d).toLowerCase(), c) && b.preventDefault()
    }
  }
};
z.Uz = function(a) {
  return(a = a.Rb && a.Rb.Mb()) && (0,z.xx)(a)
};
z.Vz = function(a, b, c) {
  if(!Wz(a, "selectionchange")) {
    var d = (0,z.Uz)(a), d = d && (0,z.Rx)(d);
    a.Un = !!d && (0,z.Kc)(a.L(), d);
    a.dispatchEvent("cvc");
    a.dispatchEvent({type:"selectionchange", bL:b && b.type});
    a.Uk(4, b, c)
  }
};
var Xz = function(a) {
  a.ge && zz(a.ge);
  a.Ef[Ez] = 1;
  Yz(a);
  a.Ef[z.Fz] = 1
};
var Zz = function(a, b, c) {
  !b && a.ge && zz(a.ge);
  a.Ef[Ez] = 0;
  a.Ef[z.Fz] = 0;
  b && a.Mn();
  c && a.iw()
};
var Wz = function(a, b) {
  return!!a.Ef[b] || a.mr[b] && 500 >= (0,z.fh)() - a.mr[b]
};
var $z = function(a, b, c, d) {
  Xz(a);
  try {
    b.call(d)
  }finally {
    a.se() && (c ? (a.Ef[Ez] = 0, a.Mn(), a.Ef[z.Fz] = 0) : a.pf())
  }
};
var Yz = function(a) {
  a.ge && zz(a.ge);
  zz(a.Cn)
};
var aA = function(a) {
  (0,z.Tc)(a.target, "A") && a.preventDefault()
};
z.bA = function(a) {
  if(a.queryCommandValue("usinglorem")) {
    return" "
  }
  if(!a.se()) {
    return a.Hb.innerHTML
  }
  var b = a.L(), c = b.cloneNode(!1), b = b.innerHTML;
  z.B && b.match(/^\s*<script/i) && (b = " " + b);
  c.innerHTML = b;
  a.QE(11, c);
  return a.oo(10, c.innerHTML)
};
var cA = function(a) {
  z.B && (0,z.sz)(a.Rb.Mb());
  dA != a.id && a.execCommand("updatelorem");
  if((z.It || z.Jt) && a.Yc() && a.Tx()) {
    var b = a.Rb.Mb();
    a.uk = (0,z.wa)(b.focus, b);
    b.addEventListener("keydown", a.uk, !1);
    b.addEventListener("touchend", a.uk, !1)
  }
  z.Id && a.Yc() ? (a.$q = (0,z.wa)(a.qr, a), a.Zq = (0,z.wa)(a.hw, a), b = a.Rb.Mb(), b.addEventListener("focus", a.$q, !1), b.addEventListener("blur", a.Zq, !1)) : (z.Yt ? (a.addListener("focus", a.jw), a.addListener(z.fu, a.gw)) : a.addListener("focus", a.qr), a.addListener("blur", a.hw, z.K));
  z.K ? z.Qt || !a.Yc() ? a.Pe.Xa(a.L(), "DOMSubtreeModified", a.Dr) : (b = a.Rb.kd(), a.Pe.Xa(b, eA, a.Dr, !0), a.Pe.Xa(b, "DOMAttrModified", (0,z.wa)(a.xE, a, a.Dr), !0)) : (a.addListener(["beforecut", "beforepaste", "drop", "dragend"], a.hg), a.addListener(["cut", "paste"], wz(a.pf)), a.addListener("drop", a.Fw));
  a.addListener(z.Wc ? "dragend" : "dragdrop", a.Fw);
  a.addListener("keydown", a.Br);
  a.addListener("keypress", a.zE);
  a.addListener("keyup", a.BE);
  a.qs = new yz(a.DE, 250, a);
  z.Wt && a.addListener("click", aA);
  a.addListener("mousedown", a.CE);
  a.Ks ? (a.Pe.Xa(a.Rb.kd(), "mouseup", a.Hw), a.addListener("dragstart", a.yE)) : a.addListener("mouseup", a.Hw);
  a.Sw();
  Zz(a);
  a.dispatchEvent("load");
  for(var c in a.vf) {
    a.vf[c].enable(a)
  }
};
var fA = function(a) {
  if(!(0,z.ia)(a.Or) && (a.Or = !1, z.B && a.Yc())) {
    for(var b = a.Vi.Mb();b != b.parent;) {
      try {
        b = b.parent
      }catch(c) {
        break
      }
    }
    b = b.location;
    a.Or = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps")
  }
  return a.Or
};
var gA = function(a) {
  a.xr && ((0,z.Cs)(a.xr), a.xr = null)
};
var hA = function(a) {
  a = "padding:0;" + a.Hb.style.cssText;
  (0,z.Ca)(a, ";") || (a += ";");
  a += "background-color:white;";
  z.B && (a += "overflow:visible;");
  return{frameBorder:0, style:a}
};
var iA = function(a, b) {
  z.D.call(this);
  this.$n = [];
  for(this.Xn = [];a && "BODY" != a.nodeName && a != b;) {
    for(var c = 0, d = a.previousSibling;d;) {
      d = d.previousSibling, ++c
    }
    this.$n.unshift(c);
    this.Xn.unshift(a.nodeName);
    a = a.parentNode
  }
};
var jA = function(a, b) {
  for(var c, d = b, e = 0;c = a.Xn[e];++e) {
    if(d = d.childNodes[a.$n[e]], !d || d.nodeName != c) {
      return null
    }
  }
  return d
};
var kA = function(a) {
  z.Xs.call(this);
  this.LD = a
};
var lA = function() {
  z.Xs.call(this);
  this.gF = 100;
  this.Xc = [];
  this.Eh = [];
  this.ho = []
};
var mA = function(a, b, c) {
  if(b.length) {
    var d = b.pop();
    c.push(d);
    a.ho.push({type:b == a.Xc ? "before_undo" : "before_redo", tw:b == a.Xc ? d.jj : d.js, state:d});
    1 == a.ho.length && a.Me();
    0 != b.length && 1 != c.length || a.dispatchEvent("state_change")
  }
};
var nA = function(a) {
  z.$.call(this);
  a = a || new lA;
  this.cx && (0,z.Cs)(this.cx);
  this.wd = a;
  this.cx = (0,z.yr)(this.wd, "state_change", this.gE, !1, this);
  this.rh = {};
  this.Ak = {};
  this.Pw = null;
  this.QD = (0,z.wa)(this.KF, this)
};
var oA = function(a, b) {
  var c = b.rf, d, e;
  b.queryCommandValue("usinglorem") ? (d = "", e = null) : (d = b.L().innerHTML, e = new pA(b), e = e.Vn ? e : null);
  var f = a.Ak[c];
  if(f) {
    if(f.Bg == d) {
      return
    }
    if("" == d || "" == f.Bg) {
      var h = b.oo(8, "", {});
      if(d == h && "" == f.Bg || f.Bg == h && "" == d) {
        return
      }
    }
    f.ks = d;
    f.HF = e;
    h = a.wd;
    if(0 == h.Xc.length || !f.Wb(h.Xc[h.Xc.length - 1])) {
      h.Xc.push(f);
      h.Xc.length > h.gF && h.Xc.shift();
      var k = h.Eh.length;
      h.Eh.length = 0;
      h.dispatchEvent({type:"state_added", state:f});
      (1 == h.Xc.length || k) && h.dispatchEvent("state_change")
    }
  }
  a.Ak[c] = new qA(c, d, e, a.QD)
};
var qA = function(a, b, c, d) {
  kA.call(this, !0);
  this.Gk = a;
  this.Lx = d;
  this.Bg = b;
  this.gy = c
};
var pA = function(a) {
  this.th = a;
  var b = a.Rb.Mb();
  a = (a = (0,z.Uz)(a)) && a.Se() && a.Mb() == b ? a : null;
  if(z.Ot) {
    if(b = a, this.Vn = !1, b) {
      var c = Ww(b), d = Uw(b);
      if(c && d) {
        a = Vw(b);
        var c = new iA(c, this.th.L()), e = Tw(b), d = new iA(d, this.th.L());
        b.Rd() ? (this.va = d, this.Bs = e, this.ta = c, this.tr = a) : (this.va = c, this.Bs = a, this.ta = d, this.tr = e);
        this.Vn = !0
      }
    }
  }else {
    z.Nt && (b = a, this.Vn = !1, b && (a = b.oe(0).Oc(), (0,z.Kc)(this.th.L(), a.parentElement()) && (b = this.th.Rb.kd().body.createTextRange(), b.moveToElementText(this.th.L()), d = a.duplicate(), d.collapse(!0), d.setEndPoint("StartToStart", b), this.va = rA(d), a = a.duplicate(), a.setEndPoint("StartToStart", b), this.ta = rA(a), this.Vn = !0)))
  }
};
var rA = function(a) {
  var b = a.duplicate(), c = a.text, d = c.length;
  b.collapse(!0);
  b.moveEnd("character", d);
  for(var e, f = 10;(e = b.compareEndPoints("EndToEnd", a)) && (d -= e, b.moveEnd("character", -e), --f, 0 != f);) {
  }
  a = 0;
  for(b = c.indexOf("\n\r");-1 != b;) {
    ++a, b = c.indexOf("\n\r", b + 1)
  }
  return d + a
};
z.sA = function() {
  z.$.call(this)
};
var dC = function(a, b, c) {
  this.S = a;
  this.Aa = (0,z.Le)(this.S);
  this.Gd = c.lj;
  this.Hv = c.zo;
  this.Xd = [];
  this.Xd.length = this.Aa.length;
  this.kf = null;
  this.wc = this.Gd ? (0,z.Me)(a) : null;
  b ? (a = eC(this, (0,z.ay)(b, !0)), c = eC(this, (0,z.ay)(b, !1)), b = new fC(a, c, b.Rd())) : b = new fC(new gC(0, 0), new gC(0, 0), !1);
  this.Zd = b;
  b = this.Aa;
  this.wc && (b = b.concat(this.wc));
  a = {};
  for(c = 0;c < b.length;c++) {
    var d = b[c].getAttribute("name");
    d && (a[d] = !0)
  }
  this.Po = a
};
z.hC = function(a) {
  a = new dC(a.L(), (0,z.Uz)(a), {lj:a.Sc(), zo:!1});
  a.Aa[0] || ((0,z.iC)(a, 0, new z.tn("", 1, "")), a.tc(0, 0));
  return a
};
var jC = function(a, b) {
  var c = b.lj, d = (0,z.xx)(window), d = (d = d && Sy(d, a)) && new z.Ay(d), e = (0,z.cb)(a.childNodes), f = c;
  if(!f) {
    for(c = 0;c < e.length;c++) {
      if("SECTION" === e[c].tagName) {
        f = !0;
        break
      }
    }
  }
  if(f) {
    for(var h = null, f = null, c = 0;c < e.length;c++) {
      f = e[c], "SECTION" === f.tagName ? h = null : (h || (h = Wy("section"), (0,z.Gc)(h, f)), h.appendChild(f))
    }
    e = (0,z.cb)(a.childNodes);
    for(c = 0;c < e.length;c++) {
      f = e[c], h = (0,z.Va)(f.childNodes, z.ze), h || (h = Wy("div", "section-inner"), (0,z.Fc)(h, f.childNodes), f.appendChild(h)), Jy(h)
    }
  }else {
    Jy(a)
  }
  d && d.restore();
  var h = b.zo && !(0,z.Kc)(window.document.body, a), k = a.style.visibility;
  h && (a.style.visibility = "hidden", window.document.body.appendChild(a));
  d = new dC(a, null, b);
  e = [];
  f = 0;
  c = d.Aa.length;
  for(f = 0;f < c;f++) {
    e.push((0,z.kC)(d, f).Wc())
  }
  h && (window.document.body.removeChild(a), a.style.visibility = k);
  f = e;
  h = (0,z.lC)(d);
  b.lj && (f = f.concat(h));
  yy(f);
  for(f = 0;f < c;f++) {
    (0,z.kC)(d, f).name = e[f].getName(), (0,z.mC)(d, f)
  }
  if(b.lj) {
    for(f = 0;f < d.wc.length;f++) {
      d.wc[f].setAttribute("name", h[f].getName())
    }
  }
  return d
};
var nC = function(a, b, c, d, e) {
  a.Zd = new fC(new gC(b, c), new gC(d, e), !1);
  (0,z.oC)(a)
};
z.pC = function(a, b) {
  var c = a.Zd.start, d = a.Zd.end;
  if(!a.Zd.isCollapsed()) {
    var e = (0,z.kC)(a, c.da), f = (0,z.kC)(a, d.da);
    qC(a, function(a, b, c) {
      b < c && (0,z.Fn)(a, b, c)
    }, a, !1);
    if(e != f) {
      b && e.append(f);
      var h = d.da - c.da - 1;
      b && h++;
      for(var k = 0;k < h;k++) {
        (0,z.rC)(a, c.da + 1)
      }
    }
    (0,z.mC)(a, c.da);
    e == f || b || (0,z.mC)(a, c.da + 1);
    d.da = c.da;
    d.offset = c.offset
  }
};
var qC = function(a, b, c, d) {
  var e = a.Zd.Fa(), f = e.end, h = e.start;
  0 === f.offset && f.da > h.da && (f.da--, f.offset = (0,z.kC)(a, f.da).text.length);
  for(var f = e.start.da, h = e.end.da, k = f;k <= h;k++) {
    var l = (0,z.kC)(a, k);
    b.call(c, l, k == f ? e.start.offset : 0, k == h ? e.end.offset : l.text.length);
    d && (0,z.mC)(a, k)
  }
};
z.kC = function(a, b) {
  var c = a.Xd[b];
  if(!c) {
    var d = a.Aa[b];
    d && (c = a.Xd[b] = (0,z.ro)(d, a.Hv))
  }
  return c
};
z.sC = function(a, b) {
  var c = (0,z.pz)(b, a.S);
  return c ? (0,z.Ya)(a.Aa, c) : -1
};
var eC = function(a, b) {
  var c = (0,z.sC)(a, b.C);
  return-1 == c ? new gC(0, 0) : new gC(c, (0,z.Oy)(b, a.Aa[c]))
};
var tC = function(a, b) {
  var c = a.Aa[b.da];
  return c && kz(b.offset, c)
};
z.mC = function(a, b, c) {
  var d = a.Aa[b];
  c && (a.Xd[b] = c);
  var e = (0,z.kC)(a, b);
  e.name || (e.name = Kx(a.Po));
  c = (0,z.Cc)((0,z.Qn)(e, !1) + (0,z.Rn)(e, z.sf, uC) + (0,z.Sn)(e, !1));
  (0,z.Ae)(c) || (c = c.firstChild);
  vC(e, c);
  var f;
  a: {
    if((4 == e.type || 11 == e.type) && (0,z.jo)(d) == e.type && d.outerHTML.replace(wC, "") === c.outerHTML.replace(wC, "")) {
      f = d.querySelector("figcaption");
      var h = c.querySelector("figcaption");
      if(f && h) {
        (0,z.my)(h, f);
        f = !0;
        break a
      }
    }
    f = !1
  }
  if(!f) {
    if(4 == e.type && (f = (0,z.ro)(d, a.Hv), 4 == f.type && f.dataId == e.dataId)) {
      f = d.getElementsByTagName("img")[0].src;
      var h = c.getElementsByTagName("img")[0], k = h.src;
      f && k != f && (k && h.setAttribute("data-delayed-src", k), h.src = f)
    }
    c.tagName == d.tagName || "LI" != c.tagName && "LI" != d.tagName ? (0,z.my)(c, d) : "LI" == c.tagName ? (e = window.document.createElement(10 == e.type ? "OL" : "UL"), e.appendChild(c), (0,z.my)(e, d), xC(e)) : (e = d.parentNode, f = yC(e, d), (0,z.Gc)(c, e), (0,z.F)(d), e.childNodes.length || (0,z.F)(e), f.childNodes.length || (0,z.F)(f));
    a.Aa[b] = c
  }
};
var xC = function(a) {
  var b = void 0 != a.previousElementSibling ? a.previousElementSibling : (0,z.Uy)(a.previousSibling, !1), c = void 0 != a.nextElementSibling ? a.nextElementSibling : (0,z.Uy)(a.nextSibling, !0);
  if(b && b.tagName === a.tagName) {
    for(;a.firstChild;) {
      b.appendChild(a.firstChild)
    }
    (0,z.F)(a);
    a = b
  }
  if(c && c.tagName === a.tagName) {
    for(;c.firstChild;) {
      a.appendChild(c.firstChild)
    }
    (0,z.F)(c)
  }
};
z.oC = function(a) {
  var b;
  b = a.Zd;
  var c = tC(a, b.start), d = tC(a, b.end);
  c && d ? (a = b.Ib ? d : c, b = b.Ib ? c : d, b = (0,z.Ax)(a.C, a.offset, b.C, b.offset)) : b = null;
  b && (b.select(), nz(b.ua()), (0,z.mz)(b.ua()))
};
z.rC = function(a, b) {
  (0,z.F)(a.Aa[b]);
  a.Aa.splice(b, 1);
  a.Xd.splice(b, 1);
  var c = a.Aa[b];
  c && "LI" === c.tagName && xC(c.parentNode);
  c = (0,z.lC)(a);
  if(a.Gd) {
    var d = (0,z.zC)(a, b), d = (0,z.Ya)(c, d), e = a.wc[d];
    (0,z.Le)(e).length || ((0,z.F)(e), a.wc.splice(d, 1))
  }
  rx(c, b, a.Aa.length);
  AC(a);
  c = a.Zd.start;
  c.da >= b && (c.da = Math.max(c.da - 1, 0));
  c = a.Zd.end;
  c.da >= b && (c.da = Math.max(c.da - 1, 0))
};
z.iC = function(a, b, c) {
  var d = 0 === b ? null : a.Aa[b - 1];
  d && "LI" == d.tagName && (null != (void 0 != d.nextElementSibling ? d.nextElementSibling : (0,z.Uy)(d.nextSibling, !0)) && yC(d.parentNode, d), d = d.parentNode);
  c.name || (c.name = Kx(a.Po));
  var e;
  e = (0,z.Cc)((0,z.Qn)(c, !1) + (0,z.Rn)(c, z.sf, uC) + (0,z.Sn)(c, !1));
  vC(c, e);
  var f = (0,z.lC)(a);
  0 === f.length ? (0,z.BC)(a, 0, new z.Hj) : sx(f, b);
  AC(a);
  d ? (0,z.Gc)(e, d) : a.Gd ? (0,z.Hc)(CC(a, 0), e, 0) : (0,z.Hc)(a.S, e, 0);
  d = e;
  (0,z.Be)(e) && (d = e.firstChild, xC(e));
  a.Aa.splice(b, 0, d);
  a.Xd.splice(b, 0, c);
  c = a.Zd.start;
  c.da >= b && c.da++;
  a = a.Zd.end;
  a.da >= b && a.da++
};
var yC = function(a, b) {
  var c = window.document.createElement(a.tagName);
  for((0,z.Gc)(c, a);a.lastChild != b;) {
    (0,z.Hc)(c, a.lastChild, 0)
  }
  return c
};
var vC = function(a, b) {
  (0,z.Lx)(a.type) && (b.contentEditable = !1);
  var c = b.querySelector("figcaption");
  if(c) {
    var d = 4 == a.type ? "Type caption for image (optional)" : 11 == a.type ? "Type caption for embed (optional)" : "";
    d && (c.contentEditable = !0, c.setAttribute("data-default-value", d), a.text || ((0,z.G)(c, "default-value"), c.innerHTML = d))
  }
};
z.BC = function(a, b, c) {
  var d = (0,z.zC)(a, b);
  if(d && (0,z.Ij)(d) === b) {
    throw Error("Tried to overwrite a section");
  }
  if(a.Gd) {
    var e = a.Po;
    c.getName() || c.Ud(Kx(e))
  }
  var e = (0,z.lC)(a), f = d ? (0,z.Ya)(e, d) : -1;
  e.splice(f + 1, 0, c);
  if(a.Gd) {
    var h = a.wc[f], d = CC(a, f), k = (0,z.Cc)((0,z.Pn)(c, z.sf) + "\x3c/div\x3e\x3c/section\x3e"), e = (0,z.Va)(k.childNodes, z.ze);
    a.S.insertBefore(k, h && h.nextSibling);
    a.wc.splice(f + 1, 0, k);
    if(f = a.Aa[b]) {
      for(f = (0,z.Ya)(d.childNodes, "LI" === f.tagName ? f.parentNode : f);d.childNodes[f];) {
        e.appendChild(d.childNodes[f])
      }
    }
  }
  (0,z.Jj)(c, b);
  AC(a)
};
z.DC = function(a, b) {
  var c = (0,z.lC)(a), d = (0,z.zC)(a, b);
  if(1 === c.length) {
    throw Error("Cannot remove last section");
  }
  if((0,z.Ij)(d) !== b) {
    throw Error("Section not found at " + b);
  }
  d = (0,z.Ya)(c, d);
  c.splice(d, 1);
  if(a.Gd) {
    var c = a.wc[d], e = CC(a, d);
    a.wc.splice(d, 1);
    var e = (0,z.cb)(e.childNodes), f = CC(a, Math.max(0, d - 1));
    if(0 === d) {
      for(;e.length;) {
        (0,z.Hc)(f, e.pop(), 0)
      }
    }else {
      (0,z.Fc)(f, e)
    }
    (0,z.F)(c)
  }
  AC(a)
};
z.zC = function(a, b) {
  return lx((0,z.lC)(a), b)
};
var CC = function(a, b) {
  return a.wc[b] && (0,z.Va)(a.wc[b].childNodes, z.ze)
};
z.lC = function(a) {
  a.kf || (a.kf = a.Gd ? (0,z.mo)(a.wc) : Hy(a.S));
  return a.kf
};
var AC = function(a) {
  a.kf = (0,z.Dm)((0,z.lC)(a));
  if(!a.Gd) {
    if(!a.kf || !a.kf.length || 1 === a.kf.length && a.kf[0].Wb(z.Zv)) {
      a.S.setAttribute("data-sections", "")
    }else {
      var b;
      b = a.kf.map(z.Dk.jd, z.Dk);
      a.S.setAttribute("data-sections", JSON.stringify(b))
    }
  }
};
var fC = function(a, b, c) {
  this.start = a;
  this.end = b;
  this.Ib = c
};
var gC = function(a, b) {
  this.da = a;
  this.offset = b
};
z.EC = function() {
  z.$.call(this)
};
var FC = function(a, b) {
  return(0,z.Ee)(b, function(a) {
    return a.getAttribute && a.getAttribute("data-default-value")
  }, a.t().L(), !0)
};
var GC = function(a) {
  var b = HC(a);
  b && (0,z.qz)(a.firstChild, !0);
  return b
};
var HC = function(a) {
  var b = a.getAttribute("data-default-value");
  if(!b) {
    return!1
  }
  if("FIGCAPTION" === a.tagName) {
    return(0,z.we)(a).trim().toLowerCase() == b.toLowerCase()
  }
  a = (0,z.Le)(a);
  return 1 === a.length && (0,z.we)(a[0]).trim().toLowerCase() == b.toLowerCase()
};
z.IC = function() {
};
z.JC = function(a, b) {
  b.hg();
  $z(b, a.GA.bind(a, b));
  (0,z.Vz)(b)
};
var KC = function(a, b) {
  this.Jg = a;
  this.de = b
};
var LC = function(a, b, c) {
  var d = a.Jg ? 1 : -1, e = a.Jg ? b.length : -1;
  c = a.Jg ? c : c - 1;
  if(1 == a.de) {
    return d
  }
  var f = -1;
  if(3 == a.de) {
    f = a.Jg ? b.indexOf("\n", c) : b.lastIndexOf("\n", c)
  }else {
    a = !1;
    for(var h = c;0 <= h && h < b.length && -1 == f;h += d) {
      var k = b.charAt(h);
      " " == k || "\n" == k ? a && (f = h) : a = !0
    }
  }
  return-1 == f ? e - c : f == c ? d : f - c
};
var MC = function(a, b, c) {
  var d = a.Jg ? 1 : -1, e = c + d, f = (0,z.kC)(b, c), h = (0,z.kC)(b, e);
  if(h) {
    if(b.Sc()) {
      var k = 0 < d ? e : c;
      if((0,z.Ij)((0,z.zC)(b, k)) == k) {
        (0,z.DC)(b, k);
        return
      }
    }
    Jx(f) ? (b.tc(e, a.Jg ? 0 : h.text.length), (0,z.rC)(b, c)) : (0,z.Lx)(h.type) || Jx(h) ? (0,z.rC)(b, e) : (0,z.Lx)(f.type) || (a = b.getSelection(), 0 < d ? (a.start.offset = a.end.offset = f.text.length, f.append(h), (0,z.rC)(b, e), (0,z.mC)(b, c)) : (a.start.offset = a.end.offset = h.text.length, h.append(f), (0,z.rC)(b, c), (0,z.mC)(b, e)))
  }
};
z.NC = function(a, b, c, d) {
  a = kz(b, a);
  c = kz(d, c);
  return a && c && (0,z.Ax)(a.C, a.offset, c.C, c.offset)
};
var OC = function() {
  z.$.call(this)
};
var PC = function(a, b) {
  Cz.call(this, a, b)
};
var QC = function(a) {
  Cz.call(this, a, void 0);
  this.Gd = !1
};
var RC = function(a) {
  this.sA = a
};
var SC = function(a, b) {
  this.de = a;
  this.ti = b
};
var TC = function(a) {
  this.de = a;
  this.ti = void 0
};
z.UC = function() {
  z.$.call(this);
  this.Pf = {};
  this.lu = null;
  this.vq = !1
};
var VC = function(a) {
  for(var b in a.Pf) {
    delete a.Pf[b]
  }
};
var WC = function(a) {
  if(!a.vq) {
    return!0
  }
  var b = a.lu, c = (0,z.Uz)(a.t());
  if(!c || !c.isCollapsed()) {
    return!0
  }
  c = XC(a, c);
  if(!b || !c) {
    return!0
  }
  var d = b.C == c.C || b.C.getAttribute("name") && b.C.getAttribute("name") == c.C.getAttribute("name");
  if(d && c.offset === b.offset) {
    return!1
  }
  if(!(d && c.offset > b.offset)) {
    return!0
  }
  b = (0,z.NC)(c.C, b.offset, c.C, c.offset);
  if(!b) {
    return!0
  }
  b.select();
  for(var e in a.Pf) {
    a.Pf[e] && a.execCommand(e)
  }
  a = (0,z.xx)();
  if(!a) {
    return!0
  }
  a.collapse(!1);
  a.select();
  return!0
};
var XC = function(a, b) {
  var c = a.t().L(), d = (0,z.ay)(b, !1);
  return(c = (0,z.pz)(d.C, c)) ? new Tx(c, (0,z.Oy)(d, c)) : null
};
var YC = function() {
  z.$.call(this)
};
var ZC = function(a) {
  z.Xs.call(this);
  this.lw = a;
  this.Qr = new z.Zs(this);
  this.qe = new z.Zs(this);
  $C && this.qe.Xa(a, "compositionstart", this.vE).Xa(a, "compositionend", this.uE).Xa(a, "compositionupdate", this.Iw);
  this.qe.Xa(a, "textInput", this.EE).Xa(a, "text", this.Iw).Xa(a, "keydown", this.Br)
};
var aD = function(a, b) {
  z.or.call(this, a);
  this.reason = b
};
var bD = function(a, b) {
  a.xh || (z.Wc && !$C && a.Qr.Xa(a.lw, "keyup", a.AE), a.xh = !0, a.dispatchEvent(new aD("startIme", b)))
};
var cD = function(a, b) {
  a.xh = !1;
  a.Qr.Zi();
  a.dispatchEvent(new aD("endIme", b))
};
var dD = function(a) {
  switch(a.keyCode) {
    case 16:
    ;
    case 17:
      return!1;
    default:
      return!0
  }
};
var eD = function() {
  z.$.call(this);
  this.Gp = null
};
var fD = function() {
  z.$.call(this);
  this.Iq = {};
  this.am = {}
};
var gD = function(a) {
  (0,z.oa)(z.Mb.setImmediate) ? z.Mb.setImmediate(a) : (hD || (hD = iD()), hD(a))
};
var iD = function() {
  var a = z.Mb.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = window.document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    window.document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = b.location.protocol + "//" + b.location.host, a = (0,z.wa)(function(a) {
      if(a.origin == d || a.data == c) {
        this.port1.onmessage()
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d)
    }}
  });
  if("undefined" !== typeof a) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      c = c.next;
      var a = c.Vv;
      c.Vv = null;
      a()
    };
    return function(a) {
      d.next = {Vv:a};
      d = d.next;
      b.port2.postMessage(0)
    }
  }
  return"undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("script") ? function(a) {
    var b = window.document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null
    };
    window.document.documentElement.appendChild(b)
  } : function(a) {
    z.Mb.setTimeout(a, 0)
  }
};
var jD = function() {
  z.$.call(this);
  this.ga = []
};
var kD = function(a) {
  return a.nodeType == z.Rc ? !1 : (0,z.ed)(a, "drop-cap")
};
var lD = function(a) {
  var b = a.target;
  return z.Wc && "LI" == b.tagName && a.clientX < b.getBoundingClientRect().left
};
var mD = function(a, b, c, d) {
  var e = (0,z.Uz)(a.t());
  if(d && !e.Gi()) {
    return!0
  }
  var e = d ? e.fa() : e.ua(), f = (0,z.pz)(e, a.t().L()), h = b.getSelection();
  d = d ? h.start : h.end;
  return f ? 1 === d.offset && (0,z.lo)(f) && (0,z.Ee)(e, kD, f) ? (d.offset = c ? 2 : 0, !0) : !1 : (f = nD(a, e, c), f || (c = !c, f = nD(a, e, c)), f && (a = (0,z.Ya)(b.Aa, f), -1 != a && (d.da = a, d.offset = c ? 0 : (0,z.kC)(b, a).text.length)), !0)
};
var nD = function(a, b, c) {
  var d = a.t().L(), e = null;
  (0,z.tz)(new z.ad(b, !c, !0), function(a) {
    if(a === d) {
      throw z.Zc;
    }
    if((0,z.Ae)(a)) {
      throw e = a, z.Zc;
    }
  }, a);
  return e
};
z.oD = function(a) {
  z.Sh.call(this);
  var b = a.id;
  b || (b = a.id = "editor_" + (0,z.qa)(a));
  this.Ut = b;
  this.ck = [];
  this.ov = new fD;
  this.aa(new YC);
  this.aa(new OC);
  this.aa(new eD);
  this.aa(new jD);
  this.bk = !1
};
z.pD = function(a) {
  if(!a.Vh || a.field.Mi) {
    var b = a.field.L();
    HC(b) ? a.Vh = nx(ox(new z.vj, []), []) : a.Vh = Yy(b)
  }
  return a.Vh
};
z.qD = function(a) {
  z.$.call(this);
  var b = window.document.createElement("div");
  b.innerHTML = a;
  this.yt = b.textContent
};
var rD = function(a) {
  var b = a.t(), c = (0,z.hC)(b);
  a = new z.tn((0,z.kC)(c, 0).name, 1, a.yt);
  (0,z.mC)(c, 0, a);
  (0,z.G)(b.L(), "default-value")
};
var sD = function(a) {
  this.uA = a
};
var tD = function(a, b) {
  if(a in b) {
    return""
  }
  b[a] = !0;
  return a
};
var uD = function() {
};
var vD = function(a) {
  var b = new uD;
  (0,z.oa)(a) ? b.Rw = a : b.Rw = function(b, d) {
    for(var e = 0, f = 0;f < a.length;f++) {
      e += a[f](b, d), d += e
    }
    return e
  };
  return b
};
var wD = function(a, b) {
  if(".." == a.text.substring(Math.max(0, b - 2), b)) {
    return Hx(a, "…", b), (0,z.Fn)(a, b - 2, b), -1
  }
  Hx(a, ".", b);
  return 1
};
var xD = function(a, b) {
  return yD("-", a, b)
};
var zD = function(a, b) {
  return yD("–", a, b)
};
var yD = function(a, b, c) {
  var d = b.text.charAt(c - 1), e = b.text, e = e.substring(e.lastIndexOf(" ", c) + 1, c);
  if(d != a || iz(e) === e) {
    return Hx(b, a, c), 1
  }
  d = b.text.charAt(c - 2);
  if("\x3c" == d) {
    return Hx(b, "←", c), (0,z.Fn)(b, c - 2, c), -1
  }
  Hx(b, "—", c);
  (0,z.Fn)(b, c - 1, c);
  return 0
};
var AD = function(a, b) {
  if("—" == a.text.charAt(b - 1)) {
    return Hx(a, "→", b), (0,z.Fn)(a, b - 1, b), 0
  }
  Hx(a, "\x3e", b);
  return 1
};
z.BD = function(a, b) {
  var c = a.text, d = c.lastIndexOf(" ", b), c = c.substring(d + 1, b), e;
  if(e = c) {
    if(e = iz(c) == c) {
      a: {
        e = d + 1;
        for(var f = a.fb, h = 0;h < f.length;h++) {
          var k = f[h];
          if(3 == k.l() && (0,z.Fj)(k) < b && (0,z.Gj)(k) > e) {
            e = !0;
            break a
          }
        }
        e = !1
      }
      e = !e
    }
  }
  e && (0,z.xn)(a, (0,z.Cn)(d + 1, b, c, "", ""));
  return 0
};
var CD = function(a, b) {
  for(var c = a.text, d = b;" " == c[d];) {
    d--
  }
  var d = c.lastIndexOf(" ", d) + 1, e = c.indexOf(" ", d);
  -1 == e && (e = c.length);
  return{start:d, end:e, text:c.substring(d, e)}
};
var DD = function(a, b) {
  var c = CD(a, b);
  (0,z.An)(a, function(b) {
    (0,z.Fj)(b) <= c.start && (0,z.Gj)(b) >= c.end && "contact" == (0,z.N)(b, "rel") && Ix(a, (0,z.Dn)(3, c.start, c.end))
  });
  c.text && ED.test(c.text) && (0,z.xn)(a, (0,z.Cn)(c.start, c.end, "/" + c.text, "", "contact"));
  return 0
};
var FD = function(a) {
  return function(b, c) {
    var d = CD(b, c);
    return d.text && ED.test(d.text) ? ((0,z.Fn)(b, d.start, d.end), Hx(b, a, d.start), d.start + a.length - c) : 0
  }
};
var GD = function(a, b) {
  var c = a.text, d = c.charAt(b - 1);
  if((" " == d || " " == d) && 8 != a.type) {
    return 0
  }
  if("-" == d || "–" == d) {
    if(c = c.charAt(b - 2), " " == c || " " == c) {
      Hx(a, "—", b), (0,z.Fn)(a, b - 1, b)
    }
  }
  Hx(a, " ", b);
  return 1
};
var HD = function(a, b) {
  return ID(!1, a, b)
};
var JD = function(a, b) {
  return ID(!0, a, b)
};
var ID = function(a, b, c) {
  var d = b.text.charAt(c - 1);
  Hx(b, KD[d] ? a ? "“" : "‘" : (0,window.isNaN)(d) ? a ? "”" : "’" : a ? '"' : "'", c);
  return 1
};
var LD = function() {
};
z.MD = function(a) {
  z.$.call(this);
  this.Lo = a;
  this.Nq = !1;
  this.Ub = window.document.createElement("div");
  this.Ub.setAttribute("contenteditable", "true");
  this.Ub.style.position = "absolute";
  this.Ub.style.top = "0px";
  this.Ub.style.left = "-9999px";
  this.Ub.style.width = "100px";
  this.Ub.style.height = "100px";
  this.Ub.tabIndex = -1;
  this.Ub.style.overflow = "hidden";
  window.document.body.appendChild(this.Ub)
};
var ND = function(a, b) {
  a.Lo && (b = bz(b));
  return b
};
var OD = function(a, b) {
  a.t();
  (0,z.JC)(new sD(b), a.t());
  (0,z.JC)(new LD, a.t());
  var c = (0,z.xx)();
  c && (c.collapse(!1), c.select())
};
var PD = function(a, b) {
  var c = b.clipboardData;
  if(!c || !c.types || !(0,z.la)(c.types)) {
    return null
  }
  if(a.Lo && !a.Nq) {
    if(-1 !== (0,z.Ya)(c.types, "text/html")) {
      return c.getData("text/html")
    }
    if(!(0,z.at)(c.types, function(a) {
      return-1 !== a.indexOf("plain")
    })) {
      return null
    }
  }
  return-1 !== (0,z.Ya)(c.types, "text/plain") ? (0,z.hz)(b.clipboardData.getData("text/plain")) : null
};
var QD = function(a, b) {
  for(var c = null, d = a.firstChild;d;d = c) {
    if(c = d.nextSibling, d.nodeType != z.Rc) {
      if(1 != d.nodeType) {
        (0,z.F)(d)
      }else {
        var e = b.Vc[d.tagName] || b.nr;
        if(!e) {
          throw Error("Missing default tag policy");
        }
        if(e.sg) {
          if(e.qd) {
            for(var f = (0,z.ma)(e.qd) ? e.qd : "", f = f && f != d.tagName ? window.document.createElement(f) : null, h = d.attributes.length - 1;0 <= h;h--) {
              var k = d.attributes[h].nodeName, l = d.getAttribute(k);
              (l = Mx(e, k, l)) ? (f || d).setAttribute(k, l) : f || d.removeAttribute(k)
            }
            f && ((0,z.Fc)(f, d.childNodes), (0,z.Gc)(f, d), (0,z.F)(d), d = f);
            QD(d, e.qc)
          }else {
            for(;d.lastChild;) {
              (0,z.Gc)(d.lastChild, d)
            }
            c = d.nextSibling;
            (0,z.F)(d)
          }
        }else {
          (0,z.F)(d)
        }
      }
    }
  }
};
z.RD = function(a) {
  z.$.call(this);
  this.qC = a
};
var SD = function() {
  z.$.call(this)
};
var TD = function(a, b) {
  this.gC = a;
  this.Sy = b
};
var VD = function(a) {
  var b = (0,z.xx)();
  return!b.isCollapsed() && !!(0,z.pz)(b.yc(), a.L())
};
z.WD = function(a) {
  z.$.call(this);
  this.My = a
};
var XD = function(a, b) {
  var c = 34 == b, d = 39 == b, e = 45 == b, f = 8211 == b, h = 46 == b, k = 62 == b, l = 40 == b, m = a.t();
  if(!(c || d || e || k || h || l || f)) {
    return!1
  }
  var r = (0,z.hC)(m), C = r.getSelection().start.da;
  if(8 == (0,z.kC)(r, C).type) {
    if(VD(m)) {
      if(d) {
        return(0,z.JC)(new TD("'", "'"), m), !0
      }
      if(c) {
        return(0,z.JC)(new TD('"', '"'), m), !0
      }
      if(l) {
        return(0,z.JC)(new TD("(", ")"), m), !0
      }
    }
    return!1
  }
  return c ? (VD(m) ? (0,z.JC)(new TD("“", "”"), m) : (0,z.JC)(vD(JD), m), !0) : d ? (VD(m) ? (0,z.JC)(new TD("‘", "’"), m) : (0,z.JC)(vD(HD), m), !0) : e ? ((0,z.JC)(vD(xD), m), !0) : f ? ((0,z.JC)(vD(zD), m), !0) : k ? ((0,z.JC)(vD(AD), m), !0) : h ? ((0,z.JC)(vD(wD), m), !0) : l && VD(m) ? ((0,z.JC)(new TD("(", ")"), m), !0) : !1
};
z.YD = function(a, b) {
  z.oD.call(this, a);
  this.aa(new z.qD(b));
  this.aa(new z.EC);
  this.aa(new z.MD(!1));
  this.aa(new z.RD(z.Ev));
  this.aa(new SD);
  this.aa(new z.WD(!1));
  this.bk = !0
};
z.ZD = function(a, b) {
  z.$.call(this);
  this.Bd = a;
  this.Xs = b
};
z.$D = function(a, b) {
  z.Ml.call(this, a, b)
};
var aE = function(a, b, c, d) {
  z.Zy.call(this, a, b, c, d)
};
var bE = function(a) {
  z.D.call(this);
  var b = (0,z.xx)();
  this.mk = b && new cE((0,z.ay)(b, !0), a);
  this.sp = b && new cE((0,z.ay)(b, !1), a)
};
var cE = function(a, b) {
  this.vc = a;
  this.zz = b;
  var c = (0,z.pz)(a.C, b);
  this.Zs = (this.Mo = c) && c.getAttribute("name");
  this.Au = c ? (0,z.Oy)(a, c) : -1
};
var dE = function(a) {
  var b = window.document.body;
  return(0,z.Kc)(b, a.vc.C) ? a.vc : a.Mo && (0,z.Kc)(b, a.Mo) ? kz(a.Au, a.Mo) : a.Zs && (b = (0,z.Py)(a.zz, a.Zs)) ? kz(a.Au, b) : null
};
z.eE = function(a) {
  this.id = a.id;
  this.anchor = a.anchor;
  this.startIndex = Number(a.startIndex);
  this.endIndex = Number(a.endIndex);
  this.content = a.content
};
var fE = function(a) {
  z.$.call(this);
  this.wv = this.He = this.Wp = this.vp = !1;
  this.ub = "";
  this.Gq = this.Lm = null;
  this.ga = [];
  this.su = [];
  this.ha = a.get("request");
  this.ba = a.get("app");
  this.Qa = null
};
var gE = function(a) {
  var b = a.Qa.querySelector(".active");
  b && (b = b.getAttribute("data-username"), (0,z.JC)(vD([FD(b), DD]), a.t()));
  hE(a)
};
var iE = function(a, b) {
  if(a.He) {
    switch(b.keyCode) {
      case 13:
      ;
      case 9:
      ;
      case 27:
        b.preventDefault();
        break;
      case 38:
        b.preventDefault();
        var c = a.Qa.querySelector(".active");
        c && (0,z.I)(c, "active");
        (c = c && c.previousSibling) || (c = a.Qa.querySelector(".typeahead-item:last-child"));
        (0,z.G)(c, "active");
        break;
      case 40:
        b.preventDefault(), (c = a.Qa.querySelector(".active")) && (0,z.I)(c, "active"), (c = c && c.nextSibling) || (c = a.Qa.querySelector(".typeahead-item")), (0,z.G)(c, "active")
    }
    b.stopPropagation()
  }
};
var hE = function(a) {
  a.He && (0,z.F)(a.Qa);
  a.He = !1
};
var jE = function(a, b, c, d, e) {
  z.oD.call(this, b);
  this.w = a;
  this.aa(new z.qD(c));
  this.aa(new z.EC);
  this.aa(new z.MD(!1));
  this.aa(new z.RD(z.Fv));
  1E3 <= window.innerWidth && (this.rk = new fE(a), this.aa(this.rk));
  this.aa(new z.WD(!1));
  this.aa(new z.ZD(d, !0));
  this.bk = !0;
  this.Bd = d;
  this.gb = a.get("request");
  this.J = a.get("dialog");
  this.Uj = e;
  this.W()
};
var kE = function(a) {
  a.We(a.Og);
  a.H("cancel")
};
var lE = function(a, b, c, d) {
  jE.call(this, a, b, "Leave a note", 400, d || null);
  this.V = c
};
var mE = function(a, b, c) {
  a.No = b;
  a.Ys = c
};
z.nE = function(a, b, c, d) {
  a.Fp = b;
  a.Ep = c;
  a.Tt = d
};
var oE = function(a, b, c, d, e) {
  jE.call(this, a, b, "Leave a reply", 200, d);
  this.V = c;
  this.zq = e || null
};
var pE = function(a, b, c) {
  z.Sh.call(this);
  this.yu = {};
  this.$h = {};
  this.Wu = {};
  this.hf = null;
  this.w = a;
  this.gb = a.get("request");
  this.V = b;
  this.$t = c;
  this.Fj = !1
};
z.qE = function(a, b, c) {
  a = (0,z.rE)(a, c);
  return(0,z.bi)(a, "id", b)
};
z.rE = function(a, b) {
  var c = a.yu[b];
  c || (c = a.yu[b] = new z.$h, a.H("new_note_list", c, a));
  return c
};
var sE = function(a, b) {
  if(!b) {
    return!1
  }
  var c = b.text;
  if(a.content == c.substring(a.startIndex, a.endIndex)) {
    return!0
  }
  var d = RegExp((0,z.Na)(a.content), "gi"), e = d.exec(c), c = e && d.exec(c);
  return e && !c ? (c = a.endIndex - a.startIndex, a.startIndex = e.index, a.endIndex = e.index + c, a.content = e[0], !0) : !1
};
var tE = function(a, b, c) {
  var d = (0,z.Wh)(b, "id"), e = (0,z.rE)(a, (0,z.Wh)(b, "anchor")), f = e ? e.indexOf(b) : -1;
  b.get("state");
  b.set("state", c);
  "HIDDEN" == c && (0,z.Zh)(b);
  var h = e ? e.indexOf(b) : -1;
  return{qb:a.gb.put("/p/" + a.V + "/notes/" + d + "/state", {state:c}, {Z:!0}), Nx:function() {
    -1 == h && (-1 == f ? e.add(b) : e.jh(b, f))
  }}
};
z.uE = function(a, b, c) {
  this.range = a;
  this.anchor = b;
  this.Nv = b.getAttribute("name");
  this.Bc = c
};
var vE = function(a) {
  return'\x3cspan class\x3d"notes-marker-icon icons icons-notes"\x3e\x3c/span\x3e' + ("remove" == a.count ? '\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3e' : 0 == a.count ? '\x3cspan class\x3d"notes-marker-nocount"\x3e+\x3c/span\x3e' : '\x3cspan class\x3d"notes-marker-count"\x3e' + (0,z.U)(a.count) + "\x3c/span\x3e")
};
var wE = function(a, b, c) {
  return'\x3cbutton class\x3d"btn btn-chromeless notes-dismiss" data-action\x3d"dismiss-note"\x3e' + vE({count:"remove"}) + '\x3c/button\x3e\x3cdiv class\x3d"notes-list-fade"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-list"\x3e\x3cdiv class\x3d"notes-items"\x3e\x3c/div\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-new-note"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-add" data-action\x3d"start-note"\x3e\x3cspan class\x3d"notes-add-icon icons icons-add-circled"\x3e\x3c/span\x3e\x3cspan class\x3d"notes-add-text"\x3eLeave a note for \x3cspan class\x3d"notes-post-creator"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"notes-add-creator-text"\x3eLeave a note\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"notes-edit notes-edit-mode"\x3e' + 
  (0,z.gj)({Dk:!0, od:"notes-avatar notes-author-icon", user:c.currentUser}, c) + '\x3cdiv class\x3d"notes-author"\x3e' + (0,z.U)(c.currentUser.name) + '\x3c/div\x3e\x3cdiv class\x3d"notes-note-editor notes-editor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-note"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-note"\x3eCancel\x3c/button\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-disclaimer"\x3eThis note is only visible to you and the author, unless the author chooses to make it public.\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e' : 
  xE({fy:"note"})) + "\x3c/div\x3e"
};
var yE = function(a, b, c) {
  var d = a.note.author ? a.note.author.userId : null;
  b = '\x3cdiv class\x3d"notes-note-inner"\x3e\x3cdiv class\x3d"notes-note-main"\x3e' + ('\x3cspan class\x3d"notes-state-border"\x3e\x3c/span\x3e\x3cdiv class\x3d"notes-controls"\x3e' + (a.canAdminister ? '\x3cul class\x3d"notes-state notes-state-dropdown" data-action\x3d"toggle-note-dropdown"\x3e' + ("NEW" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icons notes-state-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"approve-note" data-action-value\x3d"' + 
  (0,z.V)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3c/li\x3e' : "PUBLIC" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icons notes-state-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"unapprove-note" data-action-value\x3d"' + (0,z.V)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : "") + (a.cs.userId != d ? '\x3cli data-action\x3d"hide-note" data-action-value\x3d"' + 
  (0,z.V)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : "PUBLIC" != a.note.state ? '\x3cul class\x3d"notes-state"\x3e\x3cli data-tooltip\x3d"This note is only visible to you and the author, unless the author chooses to make it public."\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : "") + ("PUBLIC" == a.note.state ? '\x3cbutton data-action\x3d"show-note-permalink" data-action-value\x3d"' + 
  (0,z.V)(a.note.anchor) + "-" + (0,z.V)(a.note.noteId) + '" class\x3d"notes-link icons icons-link" data-tooltip\x3d"Click to update the address bar with this note’s shareable URL"\x3e' : "") + "\x3c/div\x3e" + (0,z.gj)({Ma:"notes-avatar", od:"notes-author-icon", user:a.note.author}, c) + '\x3cdiv class\x3d"notes-author"\x3e' + (d ? '\x3ca href\x3d"/@' + (0,z.V)(a.note.author.username) + '" title\x3d"Go to the profile of ' + (0,z.V)(a.note.author.name) + '"\x3e' + (0,z.U)(a.note.author.name) + "\x3c/a\x3e" : 
  "\x3ci\x3eA Deleted User\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notes-content"\x3e' + (0,z.Zf)(String(a.note.uh).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")) + "\x3c/div\x3e" + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-foot no-user-select"\x3e' + (d == c.currentUser.userId ? '\x3cbutton class\x3d"btn btn-chromeless notes-text-action" data-action\x3d"edit-note" data-action-value\x3d"' + (0,z.V)(a.note.noteId) + '"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-note" data-action-value\x3d"' + 
  (0,z.V)(a.note.noteId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-note" data-action-value\x3d"' + (0,z.V)(a.note.noteId) + '"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"delete-note" data-action-value\x3d"' + (0,z.V)(a.note.noteId) + '"\x3eDelete\x3c/button\x3e' : "") + "\x3c/div\x3e" : "") + "\x3c/div\x3e");
  var e = a.note.replies.length, f = Math.max(a.note.replies.length - a.tg, 0);
  if(e) {
    b += '\x3cdiv class\x3d"notes-replies ' + (0 < f ? "notes-replies-hidden" : "") + '"\x3e\x3cdiv class\x3d"notes-replies-inner"\x3e';
    if(0 < f) {
      b += '\x3cbutton data-action\x3d"show-hidden-note-replies" class\x3d"btn btn-chromeless notes-replies-hidden-btn"\x3eView ' + (0,z.U)(f) + " " + (a.tg ? "more" : "") + " " + (1 < f ? "replies" : "reply") + '\x3c/button\x3e\x3cdiv class\x3d"notes-replies-hidden-container"\x3e';
      for(var h = a.note.replies, k = h.length, l = 0;l < k;l++) {
        var m = h[l];
        b += l < f ? zE((0,z.yf)(a, {Cc:m}), c) : ""
      }
      b += "\x3c/div\x3e"
    }
    h = a.note.replies;
    k = h.length;
    for(l = 0;l < k;l++) {
      m = h[l], b += l >= f ? zE((0,z.yf)(a, {Cc:m}), c) : ""
    }
    b += "\x3c/div\x3e\x3c/div\x3e"
  }
  return b += '\x3cdiv class\x3d"notes-replies-footer"\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-reply notes-reply-edit notes-edit-mode"\x3e' + (0,z.gj)({Ma:"notes-avatar", od:"notes-author-icon", user:c.currentUser}, c) + '\x3cdiv class\x3d"notes-author"\x3e\x3ca href\x3d"/@' + (0,z.V)(c.currentUser.username) + '" title\x3d"Go to the profile of ' + (0,z.V)(c.currentUser.name) + '"\x3e' + (0,z.U)(c.currentUser.name) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-reply-editor notes-editor"\x3eLeave a reply\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-reply" data-action-value\x3d"' + 
  (0,z.V)(a.note.noteId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-reply" data-action-value\x3d"' + (0,z.V)(a.note.noteId) + '"\x3eCancel\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-link-reply" data-action\x3d"start-reply" data-action-value\x3d"' + (0,z.V)(a.note.noteId) + '"\x3e' + (e || !a.note.author ? "Reply to conversation" : d == c.currentUser.userId ? "Leave a reply" : "Reply to " + 
  (0,z.U)(a.note.author.name)) + "\x3c/button\x3e" : xE({fy:"reply"})) + "\x3c/div\x3e\x3c/div\x3e"
};
var zE = function(a, b) {
  return'\x3cdiv class\x3d"notes-reply"\x3e' + (a.canAdminister && a.Cc.author.userId != b.currentUser.userId ? '\x3cdiv class\x3d"notes-hide-reply" data-action\x3d"hide-reply" data-action-value\x3d"' + (0,z.V)(a.note.noteId) + "," + (0,z.V)(a.Cc.replyId) + '" data-tooltip\x3d"Dismiss this reply"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3e\x3c/div\x3e' : "") + (0,z.gj)({Ma:"notes-avatar", od:"notes-author-icon", user:a.Cc.author}, b) + '\x3cdiv class\x3d"notes-author"\x3e' + (a.Cc.author ? 
  '\x3ca href\x3d"/@' + (0,z.V)(a.Cc.author.username) + '" title\x3d"Go to the profile of ' + (0,z.V)(a.Cc.author.name) + '"\x3e' + (0,z.U)(a.Cc.author.name) + "\x3c/a\x3e" : "\x3ci\x3eA Deleted User\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notes-content"\x3e' + (0,z.Zf)(String(a.Cc.uh).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")) + "\x3c/div\x3e" + (b.isAuthenticated ? a.Cc.author && a.Cc.author.userId == b.currentUser.userId ? '\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-text-action" data-action\x3d"edit-reply" data-action-value\x3d"' + 
  (0,z.V)(a.note.noteId) + "," + (0,z.V)(a.Cc.replyId) + '"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-reply" data-action-value\x3d"' + (0,z.V)(a.Cc.replyId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-reply" data-action-value\x3d"' + (0,z.V)(a.Cc.replyId) + '"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"delete-reply" data-action-value\x3d"' + 
  (0,z.V)(a.Cc.replyId) + '"\x3eDelete\x3c/button\x3e\x3c/div\x3e' : "" : "") + "\x3c/div\x3e"
};
var xE = function(a) {
  return'\x3ca class\x3d"btn btn-chromeless notes-add notes-add-sign-in" title\x3d"Sign in with Twitter to leave a note" data-action\x3d"sign-in-with-twitter" href\x3d"/m/account/authenticate-twitter"\x3e\x3cspan class\x3d"icons icons-twitter notes-add-icon"\x3e\x3c/span\x3eSign in with Twitter to leave a ' + (0,z.U)(a.fy) + "\x3c/a\x3e"
};
z.AE = function(a, b, c, d) {
  z.D.call(this);
  this.w = a;
  this.kh = a.get("app");
  this.zF = b;
  this.rc = {};
  this.zb = {};
  this.za = [];
  this.Di = a.get("butter-bar");
  this.Ck = a.get("dialog");
  this.Sa = c.querySelector(".notes-source");
  this.Ab = this.Cj(this.Sa);
  this.Ci = c.querySelector(".body");
  this.ib = this.Ab.querySelector(".notes-list");
  this.Td = (0,z.He)(this.Sa);
  c = window.document.createElement("div");
  c.className = "notes-markers";
  (0,z.Gc)(c, this.Ab);
  this.Ch = c;
  this.isAuthenticated = !!(0,z.P)("isAuthenticated");
  this.currentUser = (0,z.P)("currentUser");
  this.postId = (0,z.Wh)(b, "id");
  this.canAdminister = d;
  this.Lr = "true" == this.Ci.contentEditable;
  this.data = new pE(a, this.postId, this.Lr);
  this.data.h("new_note_list", this.zB, this);
  this.Bk = (0,z.y)(this.data.load(), this.Wr, this);
  (0,z.wg)(this.Ch).g("select-anchor", this.as, this);
  (0,z.wg)(this.Ab).g("show-hidden-note-replies", this.qx, this).g("start-reply", this.QB, this).g("save-reply", this.JB, this).g("edit-reply", this.oB, this).g("cancel-reply", this.VA, this).g("delete-reply", this.hB, this).g("approve-note", this.RA, this).g("unapprove-note", this.ZB, this).g("edit-note", this.nB, this).g("save-note", this.IB, this).g("cancel-note", this.UA, this).g("delete-note", this.gB, this).g("hide-note", this.uB, this)
};
var BE = function(a) {
  if(a.hb && a.hb.Fr()) {
    return!0
  }
  for(var b in a.zb) {
    if(a.zb[b].Fr()) {
      return!0
    }
  }
  return!1
};
var CE = function(a) {
  var b = new z.Ab, c = a.Ck.open({title:"Uh oh!", bodyHtml:"You have unsaved notes. Are you sure you want to abandon them?", type:z.Ov});
  c ? (c.h(z.Pv, b.Oa.bind(b, !0)), c.h(z.Qv, function() {
    this.rw();
    b.cancel()
  }, a)) : b.cancel();
  return b
};
var DE = function(a) {
  (0,z.gc)(a.hb);
  a.hb = null;
  for(var b in a.zb) {
    (0,z.gc)(a.zb[b]), delete a.zb[b]
  }
};
var EE = function(a, b, c) {
  var d = b.get("state"), e = "PUBLIC" == c ? "Note was made public" : "HIDDEN" == c ? "Note was dismissed" : "NEW" == c ? "Note was made private" : "", f = tE(a.data, b, c);
  (0,z.A)((0,z.y)(f.qb, function() {
    (0,z.y)(this.Di.W(e, {type:"success", jj:!0}), function() {
      f.Nx();
      EE(this, b, d)
    }, this);
    (0,z.FE)(this, z.Wu, b, {noteState:c, previousNoteState:d})
  }, a), function() {
    this.Di.W("Could not change note state", "error");
    f.Nx();
    EE(this, b, d)
  }, a);
  return f.qb
};
var GE = function(a, b) {
  var c = b.value;
  return c ? a.zb[c] : a.hb
};
var HE = function(a, b) {
  var c = a.data.qf(a.hc(b));
  return c ? c.text : ""
};
z.IE = function(a) {
  return a.ca ? !!(0,z.rE)(a.data, a.ca).count() : !1
};
z.JE = function(a, b, c) {
  var d = a.hc(b);
  if(d) {
    (0,z.cd)(d, "notes-source-active", c);
    var e = a.rc[b];
    e && ((0,z.cd)(e, "notes-active", c), c = (0,z.ce)(d, "float"), e.style.left = "left" == c ? "0" : -1 * (0,z.Ty)(d, "margin").right + "px", a = (0,z.Py)(a.Sa, b)) && (a = (0,z.co)(a.className), (0,z.cd)(e, "notes-source-floated", 2 == a || 4 == a))
  }
};
var KE = function(a, b, c) {
  if(a.rc[c]) {
    return a.rc[c]
  }
  var d = (0,z.rE)(a.data, c), d = d ? d.count() : 0, e = window.document.createElement("div");
  e.className = "notes-marker no-user-select";
  e.setAttribute("data-action", "select-anchor");
  e.setAttribute("data-action-value", c);
  e.innerHTML = (0,z.tf)(vE, {count:d});
  a.Ch.appendChild(e);
  0 < d && ((0,z.G)(b, "notes-source-hasnotes"), (0,window.setTimeout)(function() {
    (0,z.G)(e, "notes-hasnotes")
  }, 0));
  return a.rc[c] = e
};
var LE = function(a) {
  var b = {};
  lz(a.Sa, function(a) {
    var d = a.getAttribute("name");
    !d || d in b || (b[d] = (0,z.he)(a, this.Ab).y + (0,z.Ty)(a, "padding").top)
  }, a);
  return b
};
z.ME = function(a) {
  var b = LE(a), c = {};
  lz(a.Sa, function(a) {
    var d = a.getAttribute("name");
    d && !c[d] && (KE(this, a, d).style.top = b[d] + "px", (0,z.JE)(this, d, d == this.ca), c[d] = !0)
  }, a);
  for(var d in a.rc) {
    c[d] || (d == a.ca && (0,z.NE)(a, null), (0,z.F)(a.rc[d]), delete a.rc[d])
  }
};
z.OE = function(a, b) {
  var c = b || a.Id, d = (0,z.qE)(a.data, c, a.ca), e = a.ib.querySelector('[data-note-id\x3d"' + c + '"]');
  (0,z.G)(e, "notes-show-reply-editor");
  var f = a.zb["reply_" + c];
  f || (e = e.querySelector(".notes-reply-editor"), f = new oE(a.w, e, a.postId, c), f.h("change", a.Nh, a), f.h("cancel", function() {
    f.clear()
  }, a), f.h("save", function(a) {
    f.clear();
    d.add("replies", a);
    (0,z.FE)(this, z.Xu, d, {replyId:a.id})
  }, a), a.zb["reply_" + c] = f);
  f.focus()
};
z.FE = function(a, b, c, d) {
  d = d || {};
  d.postId = a.postId;
  d.noteId = (0,z.Wh)(c, "id");
  d.noteType = c.get("highlightId") ? "highlight" : "paragraph";
  (0,z.W)(b, d)
};
z.PE = function(a, b, c) {
  var d = c && new bE(a.Sa);
  (0,z.y)((0,z.NE)(a, b && b.anchor || a.ca), function() {
    if(b != this.ed) {
      var a = this.ed;
      a && (0,z.QE)(this, a, !1);
      b && (0,z.QE)(this, b, !0);
      this.ed = b
    }
    (a = d && d.restore()) && a.select()
  }, a)
};
z.QE = function(a, b, c) {
  var d = b.anchor, e = (0,z.Py)(a.Sa, d);
  if(e = a.data.qf(e)) {
    (0,z.yn)(e, 4);
    if(c) {
      if(!sE(b, e)) {
        return
      }
      (0,z.xn)(e, (0,z.Dn)(4, b.startIndex, b.endIndex).Ud(b.id))
    }
    a.hc(d).innerHTML = (0,z.Rn)(e, z.sf, {Jk:!a.Lr, isPublished:!a.zF.get("latestPublishedVersion"), media:null, sections:!0})
  }
};
z.RE = function(a, b, c) {
  if(b != a.Id) {
    c || (0,z.gl)(a.kh, "");
    (c = a.ib.querySelector(".notes-active-note")) && (0,z.I)(c, "notes-active-note");
    c = a.Id = null;
    if(b && a.ca) {
      var d = (0,z.qE)(a.data, b, a.ca);
      d && (c = a.ib.querySelector('[data-note-id\x3d"' + b + '"]')) && ((0,z.G)(c, "notes-active-note"), a.Id = b, b = (0,z.Wh)(d, "highlightId"), (0,z.PE)(a, (b ? a.data.$h[b] || null : null) || null))
    }
    (0,z.cd)(a.ib, "notes-note-selected", !!c)
  }
};
z.NE = function(a, b) {
  var c = b != a.ca;
  if(c && BE(a)) {
    return(0,z.y)(CE(a), function() {
      DE(this);
      return(0,z.NE)(this, b)
    }, a)
  }
  a.ed && ((0,z.QE)(a, a.ed, !1), a.ed = null);
  if(!c) {
    return(0,z.Ob)()
  }
  (0,z.RE)(a, null);
  a.ca && (0,z.JE)(a, a.ca, !1);
  DE(a);
  (0,z.gc)(a.Ue);
  a.Ue = null;
  (0,z.G)(a.ib, "notes-hide-editor");
  a.ca = b && a.rc[b] ? b : "";
  if(a.ca) {
    var c = a.R(".notes-items"), d = (0,z.rE)(a.data, b);
    d.Qb(function(a) {
      a.set("age", Xy(Number(a.get("createdAt"))))
    });
    a.Ue = (0,z.tj)((0,z.uq)(new z.sq(c, d, yE), "notes-note").so(a.Gz), {canAdminister:a.canAdminister, cs:a.data.hf, tg:a.tg}, "note");
    a.Ue.h("before-clear", a.SA, a);
    a.Ue.h("after-draw", a.PA, a);
    a.Ue.ac();
    (0,z.JE)(a, a.ca, !0);
    (0,z.G)(window.document.body, "notes-list-visible");
    (0,z.ri)(z.Su)
  }else {
    (0,z.gl)(a.kh, ""), (0,z.I)(window.document.body, "notes-list-visible"), (0,z.Je)(a.Ci, function(a) {
      (0,z.I)(a, "grid-breaking-slide")
    })
  }
  a.Nh();
  return(0,z.Ob)()
};
z.SE = function(a, b) {
  if(a.data.se()) {
    var c = b || a.ca, d = a.rc[c], c = (0,z.rE)(a.data, c).me();
    d.innerHTML = (0,z.tf)(vE, {count:c});
    (0,z.cd)(d, "notes-hasnotes", 0 < c)
  }
};
z.TE = function(a) {
  var b = (window.document.location.hash ? window.document.location.hash.substr(1) : "").split("-"), c = b[0], d = b[1] || null;
  return{Xv:b[2] || null, anchor:a.rc[c] && c, Bc:d && {startIndex:Number(b[3]), endIndex:Number(b[4]), id:d}}
};
z.UE = function(a, b) {
  if(a.isAuthenticated) {
    (0,z.gc)(a.hb);
    var c = a.R(".notes-note-editor"), d = null, e = null;
    if("string" == typeof b) {
      d = b
    }else {
      if(b instanceof z.uE) {
        e = b.Bc, d = e.anchor
      }else {
        throw Error("Missing assoc for note editor");
      }
    }
    c.innerHTML = "";
    a.hb = new lE(a.w, c, a.postId);
    mE(a.hb, d, HE(a, d));
    e && (0,z.nE)(a.hb, e.startIndex, e.endIndex, e.content);
    a.hb.h("change", a.Nh, a);
    a.hb.h("save", a.Zr, a);
    a.hb.h("cancel", function() {
      (0,z.rE)(this.data, d).count() ? (0,z.G)(this.ib, "notes-hide-editor") : (0,z.NE)(this, null);
      (0,z.RE)(this, null)
    }, a);
    (0,z.I)(a.ib, "notes-hide-editor")
  }
};
(0,z.v)(Xw, z.D);
Xw.prototype.restore = (0,z.s)(20);
(0,z.v)(Yw, Xw);
Yw.prototype.zg = (0,z.s)(14);
Yw.prototype.q = function() {
  Yw.s.q.call(this);
  delete this.Sb
};
(0,z.v)(Zw, Xw);
Zw.prototype.zg = (0,z.s)(15);
Zw.prototype.q = function() {
  Zw.s.q.call(this);
  this.sw = this.Ov = null
};
z.Jd.prototype.Oc = (0,z.u)(83, function() {
  return(0,z.Ld)(this).X
});
z.Md.prototype.Oc = (0,z.u)(82, function() {
  return this.X || window.document.body.createControlRange()
});
z.Jd.prototype.kl = (0,z.u)(81, function() {
  return new Zw(this)
});
z.Md.prototype.kl = (0,z.u)(80, function() {
  return new Yw(this)
});
(0,z.v)(ex, z.rd);
z.q = ex.prototype;
z.q.rg = null;
z.q.Bn = 0;
z.q.fa = function() {
  return this.rg[0].fa()
};
z.q.ua = function() {
  return(0,z.Ta)(this.rg).ua()
};
z.q.Vk = function() {
  return this.rg[this.Bn].Vk()
};
z.q.next = function() {
  try {
    var a = this.rg[this.Bn], b = a.next();
    (0,z.bd)(this, a.C, a.Fb, a.depth);
    return b
  }catch(c) {
    if(c !== z.Zc || this.rg.length - 1 == this.Bn) {
      throw c;
    }
    this.Bn++;
    return this.next()
  }
};
z.q.of = function(a) {
  this.rg = (0,z.cb)(a.rg);
  ex.s.of.call(this, a)
};
z.q.Fa = function() {
  var a = new ex(null);
  a.of(this);
  return a
};
(0,z.v)(fx, Xw);
fx.prototype.zg = (0,z.s)(13);
fx.prototype.q = function() {
  fx.s.q.call(this);
  (0,z.Ac)(this.ns, function(a) {
    a.bb()
  });
  delete this.ns
};
(0,z.v)(z.kx, z.sd);
z.q = z.kx.prototype;
z.q.Kd = function() {
  this.Xi = [];
  this.xn = this.gj = null
};
z.q.Fa = function() {
  var a = new z.kx;
  a.Ke = (0,z.cb)(this.Ke);
  return a
};
z.q.l = (0,z.n)("mutli");
z.q.Oc = function() {
  return this.Ke[0]
};
z.q.Hi = function() {
  return this.Ke.length
};
z.q.oe = function(a) {
  this.Xi[a] || (this.Xi[a] = (0,z.Kd)(gx(this.Ke[a]), void 0));
  return this.Xi[a]
};
z.q.yc = function() {
  if(!this.xn) {
    for(var a = [], b = 0, c = this.Hi();b < c;b++) {
      a.push(this.oe(b).yc())
    }
    this.xn = z.Lc.apply(null, a)
  }
  return this.xn
};
z.q.fa = function() {
  return dx(this)[0].fa()
};
z.q.Va = function() {
  return dx(this)[0].Va()
};
z.q.ua = function() {
  return(0,z.Ta)(dx(this)).ua()
};
z.q.Cb = function() {
  return(0,z.Ta)(dx(this)).Cb()
};
z.q.Se = (0,z.s)(76);
z.q.isCollapsed = function() {
  return 0 == this.Ke.length || 1 == this.Ke.length && this.oe(0).isCollapsed()
};
z.q.Lb = function() {
  return(0,z.Te)((0,z.qd)(this), function(a) {
    return a.Lb()
  }).join("")
};
z.q.Dg = function() {
  return new ex(this)
};
z.q.select = function() {
  var a = hx(this.Mb());
  a.removeAllRanges();
  for(var b = 0, c = this.Hi();b < c;b++) {
    a.addRange(this.oe(b).Oc())
  }
};
z.q.sd = (0,z.s)(24);
z.q.kl = function() {
  return new fx(this)
};
z.q.collapse = function(a) {
  if(!this.isCollapsed()) {
    var b = a ? this.oe(0) : this.oe(this.Hi() - 1);
    this.Kd();
    b.collapse(a);
    this.Xi = [b];
    this.gj = [b];
    this.Ke = [b.Oc()]
  }
};
z.Ad.prototype.Se = (0,z.u)(79, function() {
  var a = this.Dn.body.createTextRange();
  a.moveToElementText(this.Dn.body);
  return this.mf(new z.Ad(a, this.Dn), !0)
});
z.Jd.prototype.Se = (0,z.u)(78, function() {
  return(!this.sa || zx(this.sa)) && (!this.oa || zx(this.oa)) && (!(z.B && !(0,z.cc)(9)) || (0,z.Ld)(this).Se())
});
z.Md.prototype.Se = (0,z.u)(77, function() {
  var a = !1;
  try {
    a = (0,z.at)((0,z.Pd)(this), function(a) {
      return z.B ? !!a.parentNode : (0,z.Kc)(a.ownerDocument.body, a)
    })
  }catch(b) {
  }
  return a
});
z.kx.prototype.Se = (0,z.u)(76, function() {
  return(0,z.at)((0,z.qd)(this), function(a) {
    return a.Se()
  })
});
z.mm.prototype.Jn = (0,z.u)(75, function() {
  return(0,z.N)(this, "image")
});
z.tm.prototype.Jn = (0,z.u)(74, function() {
  return(0,z.N)(this, "image")
});
z.mm.prototype.ml = (0,z.u)(73, function(a) {
  return(0,z.O)(this, "image", a)
});
z.tm.prototype.ml = (0,z.u)(72, function(a) {
  return(0,z.O)(this, "image", a)
});
z.sj.prototype.getData = (0,z.u)(71, (0,z.ca)("D"));
z.sq.prototype.getData = (0,z.u)(70, function() {
  return z.sq.s.getData.call(this)
});
z.sd.prototype.insertNode = (0,z.u)(69, function(a, b) {
  if(b) {
    var c = this.fa();
    c.parentNode && c.parentNode.insertBefore(a, c)
  }else {
    (0,z.Gc)(a, this.ua())
  }
  return a
});
z.vd.prototype.insertNode = (0,z.u)(68, function(a, b) {
  var c = this.X.cloneRange();
  c.collapse(b);
  c.insertNode(a);
  c.detach();
  return a
});
z.Ad.prototype.insertNode = (0,z.u)(67, function(a, b) {
  var c = Bx(this.X.duplicate(), a, b);
  this.Kd();
  return c
});
z.Jd.prototype.insertNode = (0,z.u)(66, function(a, b) {
  var c = (0,z.Ld)(this).insertNode(a, b);
  this.Kd();
  return c
});
z.pp.prototype.disable = (0,z.u)(65, function() {
  this.ai = !0
});
z.Ip.prototype.disable = (0,z.u)(64, function() {
  this.enabled && (this.pp && (0,z.pe)(this.pp), this.op && (0,z.pe)(this.op), this.ve && (0,z.pe)(this.ve), this.remove(), window.document.body.removeChild(this.o), this.dp = "", this.enabled = !1)
});
z.Np.prototype.disable = (0,z.u)(63, function() {
  this.enabled && (this.remove(), this.pa.removeChild(this.o), this.pa = this.o = null, (0,z.pe)(this.ve))
});
z.ud.prototype.Kk = (0,z.u)(62, function() {
  var a = this.X.getClientRects();
  return a.length ? (a = (0,z.Ta)(a), new z.kc(a.right, a.bottom)) : null
});
z.Jd.prototype.Kk = (0,z.u)(61, function() {
  return this.Rd() ? (0,z.Ld)(this).Gi() : (0,z.Ld)(this).Kk()
});
z.lm.prototype.We = (0,z.u)(55, function(a) {
  return(0,z.O)(this, "content", a)
});
z.Ck.prototype.la = (0,z.u)(54, function() {
  return this.zc() && z.Dk.Fa(this.Zc)
});
z.Ml.prototype.la = (0,z.u)(53, function() {
  return this.D.la()
});
z.lm.prototype.la = (0,z.u)(52, function() {
  return(0,z.N)(this, "content")
});
z.ud.prototype.Gi = (0,z.u)(47, function() {
  var a = this.X.getClientRects();
  return a.length ? new z.kc(a[0].left, a[0].top) : null
});
z.Jd.prototype.Gi = (0,z.u)(46, function() {
  return this.Rd() ? (0,z.Ld)(this).Kk() : (0,z.Ld)(this).Gi()
});
z.Ml.prototype.dj = (0,z.u)(45, function(a) {
  this.Ec.dj(a)
});
z.um.prototype.Nk = (0,z.u)(43, function() {
  return(0,z.N)(this, "section")
});
z.wm.prototype.Nk = (0,z.u)(42, function() {
  return(0,z.N)(this, "section")
});
z.nm.prototype.td = (0,z.u)(41, function(a) {
  return(0,z.O)(this, "index", a)
});
z.om.prototype.td = (0,z.u)(40, function(a) {
  return(0,z.O)(this, "index", a)
});
z.pm.prototype.td = (0,z.u)(39, function(a) {
  return(0,z.O)(this, "index", a)
});
z.um.prototype.td = (0,z.u)(38, function(a) {
  return(0,z.O)(this, "index", a)
});
z.vm.prototype.td = (0,z.u)(37, function(a) {
  return(0,z.O)(this, "index", a)
});
z.wm.prototype.td = (0,z.u)(36, function(a) {
  return(0,z.O)(this, "index", a)
});
z.Ub.prototype.isEnabled = (0,z.u)(35, function() {
  return window.navigator.cookieEnabled
});
z.sd.prototype.Ff = (0,z.u)(34, function(a, b) {
  this.insertNode(a, !0);
  this.insertNode(b, !1)
});
z.vd.prototype.Ff = (0,z.u)(33, function(a, b) {
  var c = (0,z.wc)((0,z.oc)(this.fa()));
  if(c = (0,z.xx)(c)) {
    var d = c.fa(), e = c.ua(), f = c.Va(), h = c.Cb()
  }
  var k = this.X.cloneRange(), l = this.X.cloneRange();
  k.collapse(!1);
  l.collapse(!0);
  k.insertNode(b);
  l.insertNode(a);
  k.detach();
  l.detach();
  if(c) {
    if(d.nodeType == z.Rc) {
      for(;f > d.length;) {
        f -= d.length;
        do {
          d = d.nextSibling
        }while(d == a || d == b)
      }
    }
    if(e.nodeType == z.Rc) {
      for(;h > e.length;) {
        h -= e.length;
        do {
          e = e.nextSibling
        }while(e == a || e == b)
      }
    }
    (0,z.Ax)(d, f, e, h).select()
  }
});
z.Ad.prototype.Ff = (0,z.u)(32, function(a, b) {
  var c = this.X.duplicate(), d = this.X.duplicate();
  Bx(c, a, !0);
  Bx(d, b, !1);
  this.Kd()
});
z.Jd.prototype.Ff = (0,z.u)(31, function(a, b) {
  (0,z.Ld)(this).Ff(a, b);
  this.Kd()
});
Xw.prototype.restore = (0,z.u)(20, function(a) {
  var b = this.zg();
  a || this.bb();
  return b
});
z.Sp.prototype.tc = (0,z.u)(19, function(a) {
  this.ip = a;
  (0,z.Tp)(this);
  return this
});
z.Fk.prototype.Qd = (0,z.u)(17, function() {
  return this.kb === z.Gk || "uploading-image" === this.kb
});
z.Ml.prototype.Qd = (0,z.u)(16, function() {
  return this.kb.Qd()
});
Zw.prototype.zg = (0,z.u)(15, function() {
  return(0,z.Ax)(this.Ov, this.KD, this.sw, this.nE)
});
Yw.prototype.zg = (0,z.u)(14, function() {
  for(var a = (this.Sb.length ? (0,z.oc)(this.Sb[0]) : window.document).body.createControlRange(), b = 0, c = this.Sb.length;b < c;b++) {
    a.addElement(this.Sb[b])
  }
  return(0,z.Nd)(a)
});
fx.prototype.zg = (0,z.u)(13, function() {
  var a = (0,z.Te)(this.ns, function(a) {
    return a.restore()
  });
  return yx(a)
});
z.nm.prototype.qf = (0,z.u)(11, function() {
  return(0,z.N)(this, "paragraph")
});
z.pm.prototype.qf = (0,z.u)(10, function() {
  return(0,z.N)(this, "paragraph")
});
z.Fm.prototype.Gb = (0,z.u)(9, function(a) {
  var b = vx(a), c = this.Ka.ld();
  if(b.length < c) {
    throw Error("Paragraph cannot be inserted at invalid index " + c);
  }
  a = ux(a);
  b.splice(c, 0, this.Ka.qf());
  sx(a, c)
});
z.Gm.prototype.Gb = (0,z.u)(8, function(a) {
  var b = vx(a), c = this.Ka.ld();
  if(b.length <= c) {
    throw Error("Paragraph does not exist at index " + c);
  }
  a = ux(a);
  b.splice(c, 1);
  rx(a, c, b.length)
});
z.kn.prototype.Gb = (0,z.u)(7, function(a) {
  var b = this.Ka.ld();
  a = vx(a);
  if(a.length <= b) {
    throw Error("Paragraph does not exist at index " + b);
  }
  a[b] = this.Ka.qf()
});
z.ln.prototype.Gb = (0,z.u)(6, function(a) {
  a.Kh(this.Ka.Lb())
});
z.mn.prototype.Gb = (0,z.u)(5, function(a) {
  a = ix(a);
  var b = this.Ka.Lb();
  (0,z.O)(a, "subtitle", b)
});
z.nn.prototype.Gb = (0,z.u)(4, function(a) {
  ix(a).ml(this.Ka.Jn())
});
z.on.prototype.Gb = (0,z.u)(3, function(a) {
  a = ix(a);
  var b = this.Ka.Lb();
  (0,z.O)(a, "caption", b)
});
z.pn.prototype.Gb = (0,z.u)(2, function(a) {
  var b = this.Ka.ld(), c = this.Ka.Nk(), d = ux(a);
  if(d.length < b) {
    throw Error("Section cannot be inserted at invalid index " + b);
  }
  var e = (0,z.Ij)(c);
  if(0 === b && 0 !== e || vx(a).length <= e || !tx([d[b - 1], c, d[b]])) {
    throw Error("Section has invalid start index " + (0,z.Ij)(c));
  }
  d.splice(b, 0, c)
});
z.qn.prototype.Gb = (0,z.u)(1, function(a) {
  a = ux(a);
  var b = this.Ka.ld();
  if(a.length <= b) {
    throw Error("Section does not exist at index " + b);
  }
  if(0 === b) {
    throw Error("The first section cannot be removed");
  }
  a.splice(b, 1)
});
z.rn.prototype.Gb = (0,z.u)(0, function(a) {
  var b = this.Ka.ld(), c = this.Ka.Nk(), d = ux(a);
  if(d.length <= b) {
    throw Error("Section does not exist at index " + b);
  }
  var e = (0,z.Ij)(c);
  if(0 === b && 0 !== e || vx(a).length <= e || !tx([d[b - 1], c, d[b + 1]])) {
    throw Error("Section has invalid start index " + (0,z.Ij)(c));
  }
  d[b] = c
});
z.q = Px.prototype;
z.q.Fa = function() {
  return new Px(this.top, this.right, this.bottom, this.left)
};
z.q.contains = function(a) {
  return this && a ? a instanceof Px ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
z.q.expand = function(a, b, c, d) {
  (0,z.pa)(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
  return this
};
z.q.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this
};
z.q.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this
};
z.q.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this
};
z.q.translate = function(a, b) {
  a instanceof z.kc ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, (0,z.na)(b) && (this.top += b, this.bottom += b));
  return this
};
z.q.scale = function(a, b) {
  var c = (0,z.na)(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= c;
  this.bottom *= c;
  return this
};
(0,z.v)(z.Sx, Xw);
z.Sx.prototype.il = function(a) {
  (0,z.F)(Cx(this, !0));
  (0,z.F)(Cx(this, !1));
  return a
};
z.Sx.prototype.zg = function() {
  var a = null, b = Cx(this, !this.zf), c = Cx(this, this.zf);
  if(b && c) {
    var a = b.parentNode, b = (0,z.Ya)(a.childNodes, b), d = c.parentNode, c = (0,z.Ya)(d.childNodes, c);
    d == a && (this.zf ? b-- : c--);
    a = (0,z.Ax)(a, b, d, c);
    a = this.il(a);
    a.select()
  }else {
    this.il()
  }
  return a
};
z.Sx.prototype.q = function() {
  this.il();
  this.Ne = null
};
(0,z.v)(dy, z.Xc);
dy.prototype.next = function() {
  var a = this.kx;
  if(!a) {
    throw z.Zc;
  }
  this.kx = this.MF ? a.previousSibling : a.nextSibling;
  return a
};
(0,z.v)(ky, dy);
var wy = /&([^;\s<&]+);?/g, Ny = /^(.*?)([:;,\.?>\]\)!]+)$/, Ry = {BLOCKQUOTE:!0, PRE:!0, P:!0, H1:!0, H2:!0, H3:!0, FIGURE:!0, LI:!0};
(0,z.v)(z.Ay, z.Sx);
z.Ay.prototype.il = function(a) {
  var b = Cx(this, !0), c = Cx(this, !1), b = b && c ? (0,z.Lc)(b, c) : b || c;
  z.Ay.s.il.call(this);
  if(a) {
    return oy(b, a)
  }
  b && (a = (0,z.xx)((0,z.wc)((0,z.oc)(b))), (a = oy(b, a)) && a.select())
};
(0,z.v)(Ey, z.ad);
Ey.prototype.next = function() {
  do {
    Ey.s.next.call(this)
  }while(-1 == this.Fb);
  return this.C
};
var dz = [], cz = null, fz = /^<\//, ez = /(<\/?(\w*)([^>]*)>)/gi, uC = {Jk:!1, isPublished:!1, media:null, sections:!0};
z.q = z.Zy.prototype;
z.q.Ax = function() {
  for(var a in z.Xv) {
    var b = (0,z.Ek)(this.D, this.D.zc(), z.Xv[a]);
    this.Mg.load(b)
  }
};
z.q.vs = function(a) {
  a = a || "";
  this.D.Cf(a);
  a ? (this.Ax(), this.element.setAttribute("data-id", a)) : this.element.removeAttribute("data-id");
  this.kb.reset();
  var b = (0,z.Ek)(this.D);
  az(this, b);
  return{id:a, url:b}
};
z.q.dj = function(a) {
  this.element.style.display = a ? "" : "none"
};
z.q.ls = function() {
  var a = this.D.kC;
  this.vs(a.zc());
  $y(this, a.lg());
  var b = (0,z.N)(a, "originalWidth"), a = (0,z.N)(a, "originalHeight");
  (0,z.Aj)((0,z.zj)(this.D.Zc, b), a);
  az(this, (0,z.Ek)(this.D))
};
z.q.JF = function() {
  $y(this, z.Nl);
  az(this, null);
  this.vs("")
};
z.q.aG = function() {
  $y(this, "cover" == this.D.lg() ? z.Nl : "cover")
};
z.q.IF = function() {
  if(this.D.zc()) {
    var a = (0,z.Ek)(this.D);
    this.BA.Ob((0,z.Gb)(this.Mg.load(a), function() {
      az(this, a)
    }, this))
  }
};
z.q.Bw = function() {
  var a = "." + this.D.lg() + "-edit .picker-target";
  return this.element.querySelector(a)
};
z.q.Ux = function(a, b) {
  a.src = b;
  a.style.display = ""
};
z.q.Lw = function(a) {
  a.style.display = "none"
};
var ED = /^[@＠][a-z0-9_]{1,15}$/i;
(0,z.ir)(z.gr, "has-editor");
(0,z.v)(yz, z.D);
z.q = yz.prototype;
z.q.Re = 0;
z.q.q = function() {
  yz.s.q.call(this);
  this.stop();
  delete this.Yk;
  delete this.qe
};
z.q.start = function(a) {
  this.stop();
  this.Re = (0,z.xz)(this.br, (0,z.ia)(a) ? a : this.Kr)
};
z.q.stop = function() {
  this.Ki() && z.Mb.clearTimeout(this.Re);
  this.Re = 0
};
z.q.Ik = function() {
  this.stop();
  this.Me()
};
z.q.Ki = function() {
  return 0 != this.Re
};
z.q.Me = function() {
  this.Re = 0;
  this.Yk && this.Yk.call(this.qe)
};
(0,z.v)(z.$, z.Xs);
z.q = z.$.prototype;
z.q.Hk = null;
z.q.ND = !0;
z.q.t = (0,z.ca)("Hk");
z.q.hy = function() {
  this.t() && (this.disable(this.t()), this.Hk = null)
};
z.q.enable = function(a) {
  this.t() == a && (this.sr = !0)
};
z.q.disable = function(a) {
  this.t() == a && (this.sr = !1)
};
z.q.isEnabled = function(a) {
  return this.t() == a ? this.sr : !1
};
z.q.ln = z.bt;
z.q.VE = z.bt;
z.q.q = function() {
  this.t() && this.hy(this.t());
  z.$.s.q.call(this)
};
var Dz = (0,z.rb)({Ac:1, Gw:2, Cr:3, Qk:4, On:5, execCommand:6, queryCommandValue:7, Cx:8, YD:10, un:11}), VE = (0,z.vb)(8, 10, 11);
z.$.prototype.execCommand = function(a, b) {
  var c = this.VE(a);
  c || (z.K && Xz(this.t()), this.t().hg());
  try {
    var d = this.ow.apply(this, arguments)
  }finally {
    c || (this.t().pf(), (0,z.Vz)(this.t()))
  }
  return d
};
z.$.prototype.tf = (0,z.n)(!1);
var dA;
var Jz;
var Hz;
var Ez;
(0,z.v)(Cz, z.Xs);
Cz.prototype.field = null;
Cz.prototype.Hb = null;
Ez = "change";
z.Fz = "delayedchange";
Hz = {tG:"cvc", aH:"load", yH:"unload", kG:"beforechange", rG:Ez, wG:z.Fz, lG:"beforefocus", zG:"focus", nG:"blur", mG:"beforetab", MG:"ifrsz", pH:"selectionchange"};
Jz = 0;
dA = null;
z.q = Cz.prototype;
z.q.IE = !1;
z.q.Ks = !1;
z.q.Co = !1;
z.q.L = (0,z.ca)("field");
z.q.addListener = function(a, b, c, d) {
  var e = this.L();
  z.St && e && this.Yc() && (e = e.ownerDocument);
  this.Pe.Xa(e, a, b, c, d)
};
z.q.aa = function(a) {
  var b = a.Wa();
  this.vf[b] = a;
  for(var c in Dz) {
    a[Dz[c]] && this.yh[c].push(a)
  }
  a.Hk = this;
  this.se() && a.enable(this)
};
var Iz = 15, Gz = 250;
Cz.prototype.Yc = z.ct;
Cz.prototype.Tx = z.bt;
var Lz = {46:!0, 8:!0};
z.B || (Lz[9] = !0);
var Mz = {86:!0, 88:!0};
z.jt && !z.K && (Lz[229] = !0);
Cz.prototype.q = function() {
  this.Wk() || this.se();
  this.Hb && this.execCommand("clearlorem");
  Oz(this);
  Pz(this);
  gA(this);
  this.Vi = null;
  this.Pe && (this.Pe.bb(), this.Pe = null);
  for(var a;a = this.fG.pop();) {
    a.bb()
  }
  dA == this.id && (dA = null);
  for(var b in this.vf) {
    a = this.vf[b], a.ND && a.bb()
  }
  delete this.vf;
  Cz.s.q.call(this)
};
var eA = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"], WE = {8:1, 9:1, 13:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 46:1}, XE = {65:!0, 86:!0, 88:!0}, Tz = {8:1, 9:1, 13:1, 27:1, 33:1, 34:1, 37:1, 38:1, 39:1, 40:1};
z.q = Cz.prototype;
z.q.Uk = function(a, b) {
  for(var c = this.yh[a], d = (0,z.ib)(arguments, 1), e = 0;e < c.length;++e) {
    var f = c[e];
    if((f.isEnabled(this) || VE[a]) && f[Dz[a]].apply(f, d)) {
      return!0
    }
  }
  return!1
};
z.q.QE = function(a, b) {
  for(var c = this.yh[a], d = (0,z.ib)(arguments, 1), e = 0;e < c.length;++e) {
    var f = c[e];
    (f.isEnabled(this) || VE[a]) && f[Dz[a]].apply(f, d)
  }
};
z.q.oo = function(a, b, c) {
  for(var d = this.yh[a], e = (0,z.ib)(arguments, 1), f = 0;f < d.length;++f) {
    var h = d[f];
    if(h.isEnabled(this) || VE[a]) {
      e[0] = h[Dz[a]].apply(h, e)
    }
  }
  return e[0]
};
z.q.Br = function(a) {
  (z.K || Qz(this, a)) && !this.Uk(1, a) && z.Zt && Sz(this, a)
};
z.q.zE = function(a) {
  if(z.K) {
    if(!Qz(this, a)) {
      return
    }
  }else {
    this.Ar = !0, this.hg()
  }
  this.Uk(2, a) || z.Zt || Sz(this, a)
};
z.q.BE = function(a) {
  z.K || !this.Ar && !Kz(a) || this.Mn();
  this.Uk(3, a);
  Wz(this, "selectionchange") || (WE[a.keyCode] || (a.ctrlKey || a.metaKey) && XE[a.keyCode]) && this.qs.start()
};
z.q.execCommand = function(a, b) {
  for(var c = arguments, d, e = this.yh[6], f = 0;f < e.length;++f) {
    var h = e[f];
    if(h.isEnabled(this) && h.tf(a)) {
      d = h.execCommand.apply(h, c);
      break
    }
  }
  return d
};
z.q.queryCommandValue = function(a) {
  var b = this.se() && this.Un;
  if((0,z.ma)(a)) {
    return this.no(a, b)
  }
  for(var c = {}, d = 0;d < a.length;d++) {
    c[a[d]] = this.no(a[d], b)
  }
  return c
};
z.q.no = function(a, b) {
  for(var c = this.yh[7], d = 0;d < c.length;++d) {
    var e = c[d];
    if(e.isEnabled(this) && e.tf(a) && (b || e.ln())) {
      return e.queryCommandValue(a)
    }
  }
  return b ? null : !1
};
z.q.xE = function(a, b) {
  if(!Wz(this, Ez)) {
    var c = b.je;
    try {
      if(c.originalTarget.prefix || "scrollbar" == c.originalTarget.nodeName) {
        return
      }
    }catch(d) {
      return
    }
    c.prevValue != c.newValue && a.call(this, c)
  }
};
z.q.Dr = function(a) {
  Wz(this, Ez) || (a = a.uw ? a.je : a, a.target.firebugIgnore || (this.Mr = this.Mi = !0, this.ge.start()))
};
z.q.Fw = function() {
  z.B && this.execCommand("clearlorem", !0);
  z.K && this.qr();
  this.pf()
};
z.q.DE = function() {
  var a = this.Px;
  this.Px = null;
  (0,z.Vz)(this, void 0, a)
};
z.q.hg = function() {
  Wz(this, "beforechange") || this.dispatchEvent("beforechange")
};
z.q.pf = function(a) {
  Zz(this, !0, a)
};
z.q.Mn = function() {
  Wz(this, Ez) || (this.ge && this.ge.stop(), this.Mr = this.Mi = !0, Wz(this, z.Fz) || this.Cn.start())
};
z.q.iw = function() {
  Wz(this, z.Fz) || (this.Cn.stop(), this.Mi = !1, this.dispatchEvent(z.Fz))
};
z.q.qr = function() {
  this.gw();
  this.jw()
};
z.q.gw = function() {
  Wz(this, "beforefocus") || (this.execCommand("clearlorem", !0), this.dispatchEvent("beforefocus"))
};
z.q.jw = function() {
  if(!Wz(this, "focus")) {
    dA = this.id;
    this.Un = !0;
    this.dispatchEvent("focus");
    if(z.K) {
      var a = this.L(), b = (0,z.Uz)(this);
      if(b) {
        var c = Uw(b);
        0 != Tw(b) || c && c != a && "BODY" != c.tagName || (a = (0,z.Cy)(a), (0,z.Ax)(a, 0, a, 0).select())
      }
    }
    !z.Rt && this.Yc() && this.Rb.Mb().parent.getSelection().removeAllRanges()
  }
};
z.q.hw = function() {
  Wz(this, "blur") || (dA == this.id && (dA = null), this.Un = !1, this.dispatchEvent("blur"))
};
z.q.CE = function(a) {
  dA = this.id;
  if(z.B) {
    var b = a.target;
    b && "A" == b.tagName && a.ctrlKey && this.Vi.Mb().open(b.href)
  }
  this.Co = !0
};
z.q.yE = function() {
  this.Co = !1
};
z.q.Hw = function(a) {
  if(!this.Ks || this.Co) {
    this.Co = !1, (0,z.Vz)(this, a), z.B && (this.Px = a.target, this.qs.start())
  }
};
z.q.ey = function() {
  var a = this.Rb.kd();
  a.designMode = "on";
  z.Vt && a.execCommand("styleWithCSS", !1, !1)
};
z.q.Sw = function() {
  this.gr && fA(this) && (0,z.le)(this.gr, this.L())
};
z.q.se = function() {
  return 2 == this.Bh
};
z.q.Wk = function() {
  return 1 == this.Bh
};
z.q.focus = function() {
  if(!z.Pt && this.Yc()) {
    this.Rb.Mb().focus()
  }else {
    if(z.Id) {
      var a = this.on.pageXOffset, b = this.on.pageYOffset
    }
    this.L().focus();
    z.Id && this.on.scrollTo(a, b)
  }
};
z.q.bx = function(a) {
  var b = this.Hb;
  if(b) {
    var b = b.innerHTML, c = {}, b = this.oo(8, b, c), d = this.Vi.pb("IFRAME", hA(this));
    if(fA(this)) {
      var e = (0,z.wa)(this.Nw, this, d, b, c);
      this.xr = (0,z.yr)(d, z.Ap, e, !0);
      a && (d.src = a)
    }
    a = this.Hb;
    d.className = a.className;
    d.id = a.id;
    (0,z.my)(d, a);
    fA(this) || this.Nw(d, b, c)
  }
};
z.q.Kx = function() {
  var a = this.Hb;
  if(a) {
    var b;
    b = this.Yc() && (b = this.Rb) ? (b = b.Mb()) && b.frameElement : null;
    b && (0,z.my)(a, b)
  }
};
z.q.Nw = function(a, b, c) {
  gA(this);
  a.allowTransparency = "true";
  var d = (0,z.mc)(this.Hb);
  c = new Az(this.id, (0,z.vc)(d.vb), c);
  if(fA(this)) {
    var e = (a.contentDocument || a.contentWindow.document).body;
    z.Pt && (e.contentEditable = !0);
    e.className = "editable";
    e.setAttribute("g_editable", !0);
    e.hideFocus = !0;
    e.id = c.pw;
    (0,z.Zd)(e, c.wr);
    e.innerHTML = b
  }else {
    var d = new Bz(this.gr), f = [];
    c.Xq && c.As && f.push("\x3c!DOCTYPE HTML\x3e");
    f.push('\x3chtml style\x3d"background:none transparent;min-width:0;');
    c.Xq && f.push("height:", c.qw ? "100%" : "auto");
    f.push('"\x3e');
    f.push("\x3chead\x3e\x3cstyle\x3e");
    d && d.$v && f.push(d.$v);
    z.K && c.As && f.push(" img {-moz-force-broken-image-icon: 1;}");
    f.push("\x3c/style\x3e\x3c/head\x3e");
    f.push('\x3cbody g_editable\x3d"true" hidefocus\x3d"true" ');
    z.Pt && f.push("contentEditable ");
    f.push('class\x3d"editable ');
    f.push('" id\x3d"', c.pw, '" style\x3d"min-width:0;');
    z.K && c.Xq && (f.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", c.As ? "100%" : "auto"), c.qw ? f.push(";overflow:auto") : f.push(";overflow-y:hidden;overflow-x:auto"));
    z.Id && f.push(";outline:hidden");
    for(e in c.wr) {
      f.push(";" + e + ":" + c.wr[e])
    }
    f.push('"\x3e', b, "\x3c/body\x3e\x3c/html\x3e");
    b = f.join("");
    e = a.contentDocument || a.contentWindow.document;
    e.open();
    e.write(b);
    e.close()
  }
  Nz(this, (a.contentDocument || a.contentWindow.document).body);
  !z.Pt && this.Yc() && this.ey();
  cA(this)
};
(0,z.v)(iA, z.D);
iA.prototype.toString = function() {
  for(var a = [], b, c = 0;b = this.Xn[c];c++) {
    a.push(this.$n[c] + "," + b)
  }
  return a.join("\n")
};
iA.prototype.q = function() {
  delete this.$n;
  delete this.Xn
};
(0,z.v)(kA, z.Xs);
(0,z.v)(lA, z.Xs);
z.q = lA.prototype;
z.q.Qn = null;
z.q.jj = function() {
  mA(this, this.Xc, this.Eh)
};
z.q.js = function() {
  mA(this, this.Eh, this.Xc)
};
z.q.Me = function() {
  if(!this.Qn && 0 != this.ho.length) {
    var a = this.ho.shift();
    this.dispatchEvent({type:a.type, state:a.state}) && (a.state.LD ? (this.Qn = (0,z.yr)(a.state, "action_completed", this.kE, !1, this), a.tw.call(a.state)) : (a.tw.call(a.state), this.Me()))
  }
};
z.q.kE = function() {
  (0,z.Cs)(this.Qn);
  this.Qn = null;
  this.Me()
};
(0,z.v)(nA, z.$);
nA.prototype.Tk = null;
var YE = (0,z.rb)({xH:"+undo", lH:"+redo"});
z.q = nA.prototype;
z.q.tf = function(a) {
  return a in YE
};
z.q.hy = function(a) {
  this.disable(a);
  this.Hk = null
};
z.q.enable = function(a) {
  if(!this.isEnabled(a)) {
    Yz(a);
    var b = new z.Zs(this);
    z.K || b.Xa(a, "beforechange", this.sE);
    b.Xa(a, z.Fz, this.wE);
    b.Xa(a, "blur", this.tE);
    this.rh[a.rf] = b;
    oA(this, a)
  }
};
z.q.disable = function(a) {
  Yz(a);
  var b = this.rh[a.rf];
  b && (b.bb(), delete this.rh[a.rf]);
  this.Ak[a.rf] && delete this.Ak[a.rf]
};
z.q.isEnabled = function(a) {
  return!!this.rh[a.rf]
};
z.q.q = function() {
  nA.s.q.call(this);
  for(var a in this.rh) {
    this.rh[a].bb(), delete this.rh[a]
  }
  this.Hk = null;
  this.wd && (this.wd.bb(), delete this.wd)
};
z.q.Wa = (0,z.n)("UndoRedo");
z.q.execCommand = function(a) {
  "+undo" == a ? this.wd.jj() : "+redo" == a && this.wd.js()
};
z.q.queryCommandValue = function(a) {
  var b = null;
  "+undo" == a ? b = 0 < this.wd.Xc.length : "+redo" == a && (b = 0 < this.wd.Eh.length);
  return b
};
z.q.gE = function() {
  this.t().dispatchEvent({type:"cvc", sI:["+redo", "+undo"]})
};
z.q.KF = function(a, b, c) {
  var d = this.t();
  if(d) {
    Xz(d);
    try {
      d.hg();
      d.execCommand("clearlorem", !0);
      (0,z.rz)(d.L(), b);
      c && c.select();
      var e = this.t();
      d.focus();
      e && e.rf != a.Gk && e.execCommand("updatelorem");
      var f = this.Ak[a.Gk];
      f.Bg = b;
      f.gy = c
    }catch(h) {
    }finally {
      this.Tk = a, d.pf(), (0,z.Vz)(d)
    }
  }
};
z.q.On = function(a, b, c) {
  if(c) {
    var d;
    "z" == b ? d = a.shiftKey ? "+redo" : "+undo" : "y" == b && (d = "+redo");
    if(d) {
      return(a = "+undo" == d ? this.wd.Xc[this.wd.Xc.length - 1] : this.wd.Eh[this.wd.Eh.length - 1]) && a.Gk ? this.t().execCommand(d) : this.execCommand(d), !0
    }
  }
  return!1
};
z.q.sE = function(a) {
  if(!this.Tk) {
    a = a.target;
    var b = a.rf;
    this.Pw != b && (this.Pw = b, oA(this, a))
  }
};
z.q.wE = function(a) {
  this.Tk ? (a = this.Tk, this.Tk = null, a.dispatchEvent("action_completed")) : oA(this, a.target)
};
z.q.tE = function(a) {
  (a = a.target) && Yz(a)
};
(0,z.v)(qA, kA);
qA.prototype.jj = function() {
  this.Lx(this, this.Bg, this.gy)
};
qA.prototype.js = function() {
  this.Lx(this, this.ks, this.HF)
};
qA.prototype.Wb = function(a) {
  return this.Gk == a.Gk && this.Bg == a.Bg && this.ks == a.ks
};
pA.prototype.toString = function() {
  return z.Ot ? "W3C:" + this.va.toString() + "\n" + this.Bs + ":" + this.ta.toString() + "\n" + this.tr : "IE:" + this.va + "," + this.ta
};
pA.prototype.select = function() {
  var a = this.Nd(this.th.L());
  a && (z.Nt && this.th.L().focus(), (a && a.addElement ? (0,z.Nd)(a) : (0,z.Kd)(gx(a), void 0)).select())
};
pA.prototype.Nd = function(a) {
  if(z.Ot) {
    var b = jA(this.va, a);
    a = jA(this.ta, a);
    return b && a ? (0,z.Ax)(b, this.Bs, a, this.tr).Oc() : null
  }
  b = a.ownerDocument.body.createTextRange();
  b.moveToElementText(a);
  b.collapse(!0);
  b.moveEnd("character", this.ta);
  b.moveStart("character", this.va);
  return b
};
(0,z.v)(z.sA, z.$);
z.q = z.sA.prototype;
z.q.Wa = (0,z.wb)("FocusHandlingPlugin");
z.q.enable = function(a) {
  z.sA.s.enable.call(this, a);
  a.addEventListener("focus", this.Nn, !1, this);
  a.addEventListener("blur", this.Pk, !1, this)
};
z.q.disable = function(a) {
  z.sA.s.disable.call(this, a);
  a.removeEventListener("focus", this.Nn, !1, this);
  a.removeEventListener("blur", this.Pk, !1, this)
};
z.q.Nn = (0,z.g)();
z.q.Pk = (0,z.g)();
dC.prototype.L = (0,z.ca)("S");
dC.prototype.getSelection = (0,z.ca)("Zd");
dC.prototype.tc = function(a, b) {
  nC(this, a, b, a, b)
};
var wC = /<figcaption.*?<\/figcaption>/;
dC.prototype.Sc = (0,z.ca)("Gd");
fC.prototype.isCollapsed = function() {
  return this.start.da == this.end.da && this.start.offset == this.end.offset
};
fC.prototype.Fa = function() {
  return new fC(this.start.Fa(), this.end.Fa(), this.Ib)
};
gC.prototype.Fa = function() {
  return new gC(this.da, this.offset)
};
(0,z.v)(z.EC, z.$);
z.q = z.EC.prototype;
z.q.Wa = (0,z.wb)("DefaultTextPlugin");
z.q.enable = function(a) {
  z.EC.s.enable.call(this, a);
  (0,z.yr)(a.L(), "mousedown", this.$l, !1, this);
  (0,z.yr)(a, "beforechange", this.Mj, !1, this)
};
z.q.disable = function(a) {
  (0,z.Hr)(a, "beforechange", this.Mj, !1, this);
  (0,z.Hr)(a.Hb, "mousedown", this.$l, !1, this);
  z.EC.s.disable.call(this, a)
};
z.q.un = function(a) {
  HC(a) && (0,z.Vy)(a);
  a = a.querySelectorAll("[data-default-value]");
  for(var b = a.length, c = 0;c < b;c++) {
    var d = a[c];
    HC(d) && (0,z.Vy)(d)
  }
};
z.q.Ac = function(a) {
  if(9 == a.keyCode) {
    return!1
  }
  var b = (0,z.Uz)(this.t());
  if((b = b && FC(this, b.fa())) && GC(b)) {
    if((0,z.vz)(a) || 0 === a.keyCode && 0 === a.charCode || 86 == a.keyCode) {
      (0,z.Sd)(b).select(), (0,z.I)(b, "default-value")
    }else {
      return a.preventDefault(), !0
    }
  }
  return!1
};
z.q.$l = function(a) {
  var b = FC(this, a.target);
  b && GC(b) && (b.focus(), a.preventDefault())
};
z.q.Mj = function() {
  var a = this.t(), b = (0,z.Uz)(a);
  if((b = b ? FC(this, b.fa()) : null) && HC(b)) {
    if(b === a.L()) {
      var a = (0,z.hC)(a), c = new z.tn((0,z.kC)(a, 0).name, 1, "");
      (0,z.mC)(a, 0, c);
      a.tc(0, 0)
    }else {
      (0,z.Vy)(b), ty(b), (0,z.qz)(b.firstChild, !0)
    }
    (0,z.I)(b, "default-value")
  }
};
z.IC.prototype.GA = function(a) {
  a = (0,z.hC)(a);
  this.Tc(a);
  var b = a.Aa[0], c = a.Aa[a.Aa.length - 1];
  b && !(0,z.Lx)((0,z.jo)(b)) || (0,z.iC)(a, 0, new z.tn("", 1, ""));
  c && (0,z.Lx)((0,z.jo)(c)) && (0,z.iC)(a, a.Aa.length, new z.tn("", 1, ""))
};
z.IC.prototype.Wn = z.fa;
z.IC.prototype.Tc = function(a) {
  qC(a, function(a, c, d) {
    this.Wn(a, c, d)
  }, this, !0);
  (0,z.oC)(a)
};
(0,z.v)(KC, z.IC);
KC.prototype.Tc = function(a) {
  var b = a.getSelection();
  if(b.isCollapsed()) {
    var c = b.start, d = c.offset, c = c.da, e = (0,z.kC)(a, c);
    if(this.Jg) {
      d < e.text.length ? ((0,z.Fn)(e, d, d + LC(this, e.text, d)), (0,z.mC)(a, c)) : MC(this, a, c)
    }else {
      if(0 < d) {
        var f = LC(this, e.text, d);
        (0,z.Fn)(e, d + f, d);
        b.start.offset = b.end.offset = d + f;
        (0,z.mC)(a, c)
      }else {
        10 == e.type || 9 == e.type ? (e.type = 1, (0,z.mC)(a, c)) : MC(this, a, c)
      }
    }
  }else {
    (0,z.pC)(a, !0)
  }
  (0,z.oC)(a)
};
(0,z.v)(OC, z.$);
OC.prototype.Wa = (0,z.wb)("DeletePlugin");
OC.prototype.Ac = function(a) {
  var b = 46 == a.keyCode, c = 8 == a.keyCode;
  return b || c ? (c = 1, a.altKey && !a.metaKey ? c = 2 : a.metaKey && !a.altKey && (c = 3), (0,z.JC)(new KC(b, c), this.t()), a.preventDefault(), !0) : !1
};
(0,z.v)(PC, Cz);
z.q = PC.prototype;
z.q.Yc = (0,z.n)(!1);
z.q.ey = z.fa;
z.q.Sw = (0,z.g)();
z.q.bx = function() {
  var a = this.Hb;
  a && (Nz(this, a), a.contentEditable = !0, Rz(this, a.innerHTML, a), cA(this))
};
z.q.Kx = z.fa;
(0,z.v)(QC, PC);
QC.prototype.Sc = (0,z.ca)("Gd");
(0,z.v)(RC, z.IC);
RC.prototype.Wn = function(a) {
  (0,z.Lx)(a.type) || (a.hasDropCap = this.sA)
};
(0,z.v)(SC, z.IC);
SC.prototype.Wn = function(a) {
  (0,z.Lx)(a.type) || (this.ti && a.type != this.de && (a.type = this.de), this.ti || a.type != this.de || (a.type = 1))
};
(0,z.v)(TC, z.IC);
TC.prototype.Wn = function(a, b, c) {
  if(!(0,z.Lx)(a.type)) {
    if(void 0 === this.ti) {
      var d = (0,z.Dn)(this.de, b, c);
      this.ti = (0,z.xn)(a, d)
    }
    b = (0,z.Dn)(this.de, b, c);
    this.ti ? (0,z.xn)(a, b) : Ix(a, b)
  }
};
(0,z.v)(z.UC, z.$);
z.UC.prototype.Wa = (0,z.wb)("FormattingPlugin");
var ZE = (0,z.rb)({ry:"P_1", py:"P_2", qy:"P_3", my:"P_6", sy:"P_7", ty:"P_8", vy:"M_1", oy:"M_2", qG:"SET_HAS_DROP_CAP"});
z.q = z.UC.prototype;
z.q.tf = function(a) {
  return a in ZE
};
z.q.Ac = function(a) {
  (0,z.vz)(a) ? (this.vq = !0, (0,window.setTimeout)(function() {
    (0,z.pb)(this.Pf, !0) && WC(this) && VC(this);
    this.vq = !1
  }.bind(this), 0)) : 40 != a.keyCode && 38 != a.keyCode && 37 != a.keyCode && 39 != a.keyCode || VC(this);
  return!1
};
z.q.Qk = function() {
  (0,z.pb)(this.Pf, !0) && WC(this) && VC(this);
  return!1
};
z.q.execCommand = function(a) {
  var b = this.t();
  if("SET_HAS_DROP_CAP" == a) {
    (0,z.JC)(new RC(!b.queryCommandValue(a)), b)
  }else {
    if(0 === a.indexOf("P_")) {
      (0,z.JC)(new SC(Number(a.substring(2)), !b.queryCommandValue(a)), b)
    }else {
      if(0 === a.indexOf("M_")) {
        var c = Number(a.substring(2)), d = (0,z.Uz)(b);
        if(d && d.isCollapsed()) {
          if(this.Pf[a] = !this.Pf[a], a = XC(this, d)) {
            this.lu = a
          }
        }else {
          (0,z.JC)(new TC(c), b)
        }
      }
    }
  }
};
z.q.queryCommandValue = function(a) {
  var b = this.t().L(), c = (0,z.Uz)(this.t());
  if("SET_HAS_DROP_CAP" == a) {
    return(c = c && (0,z.pz)(c.fa(), b)) && (0,z.lo)(c)
  }
  if(0 === a.indexOf("P_")) {
    a = Number(a.substring(2));
    var d;
    if(d = c) {
      d = c.fa(), d = (0,z.Ee)(d, z.xe, b)
    }
    var e;
    if(e = c) {
      e = c.ua(), e = (0,z.Ee)(e, z.xe, b)
    }
    b = e;
    if(!d || !b) {
      return!1
    }
    for(e = d;e && e != b.nextSibling;e = e.nextSibling) {
      if(e != b || e == d || 0 !== (0,z.Oy)((0,z.ay)(c, !1), b)) {
        if(!(0,z.Ae)(e) || (0,z.jo)(e) != a) {
          return!1
        }
      }
    }
    return!0
  }
  throw Error("No handler for command " + a);
};
(0,z.v)(YC, z.$);
YC.prototype.Wa = (0,z.wb)("FormattingShortcutsPlugin");
var $E = {u:"DO NOTHING", k:"+link", b:"M_1", i:"M_2", 0:"P_1", 1:"P_2", 2:"P_3", 5:"P_6", 6:"P_8", 7:"P_7"};
YC.prototype.Ac = function(a) {
  return 73 == a.keyCode && a.ctrlKey && z.Eg ? (a.preventDefault(), !0) : !1
};
YC.prototype.On = function(a, b, c) {
  return c ? "k" != b || a.shiftKey ? (b = $E[b]) ? (this.t().execCommand(b), z.K && a.stopPropagation(), !0) : !1 : ((a = this.t().execCommand("+link")) && a.lE(this.t()), !0) : !1
};
(0,z.v)(ZC, z.Xs);
(0,z.v)(aD, z.or);
var $C = z.K || z.Wc && (0,z.$b)(532);
z.q = ZC.prototype;
z.q.xh = !1;
z.q.Zw = 0;
z.q.vE = function(a) {
  bD(this, a)
};
z.q.uE = function(a) {
  cD(this, a)
};
z.q.Iw = function(a) {
  this.xh && this.dispatchEvent(new aD("updateIme", a))
};
z.q.Br = function(a) {
  if(!$C) {
    var b = this.xh;
    b || 229 != a.keyCode ? b && 229 != a.keyCode ? dD(a) && cD(this, a) : b && this.dispatchEvent(new aD("updateIme", a)) : bD(this, a)
  }
  dD(a) && (this.Zw = a.keyCode)
};
z.q.EE = function(a) {
  !$C && z.Wc && 229 == this.Zw && this.xh && cD(this, a)
};
z.q.AE = function(a) {
  if(this.xh) {
    switch(a.keyCode) {
      case 13:
      ;
      case 9:
      ;
      case 27:
        cD(this, a)
    }
  }
};
z.q.q = function() {
  this.qe.bb();
  this.Qr.bb();
  this.lw = null;
  ZC.s.q.call(this)
};
(0,z.v)(eD, z.$);
eD.prototype.Wa = (0,z.wb)("ImePlugin");
eD.prototype.enable = function(a) {
  eD.s.enable.call(this, a);
  this.Gp = new ZC(a.L());
  a = wz(a.pf.bind(a));
  this.Gp.addEventListener("endIme", a)
};
eD.prototype.disable = function(a) {
  (0,z.gc)(this.Gp);
  eD.s.disable.call(this, a)
};
(0,z.v)(fD, z.$);
fD.prototype.Wa = (0,z.wb)("KeyboardShortcutPlugin");
fD.prototype.On = function(a, b, c) {
  return c && b in this.Iq ? (this.Iq[b].Fn.call(this.Iq[b].yn), !0) : !1
};
fD.prototype.Bi = function(a, b, c) {
  this.am[a] = {Fn:b, yn:c}
};
fD.prototype.Ac = function(a) {
  return a.keyCode in this.am ? !!this.am[a.keyCode].Fn.call(this.am[a.keyCode].yn, a) : !1
};
var hD;
(0,z.v)(jD, z.$);
z.q = jD.prototype;
z.q.Wa = (0,z.wb)("SelectionNormalizingPlugin");
z.q.enable = function(a) {
  jD.s.enable.call(this, a);
  var b = a.L();
  this.ga.push((0,z.L)(b, "mouseup", this.$z, this));
  this.ga.push((0,z.L)(b, "mousedown", this.$l, this));
  (0,z.P)("variants.can_see_drop_caps") && a.addEventListener("beforechange", this.Mj, !1, this)
};
z.q.disable = function(a) {
  jD.s.disable.call(this, a);
  (0,z.pe)(this.ga);
  this.ga.length = 0;
  a.removeEventListener("beforechange", this.Mj, !1, this)
};
z.q.$z = function(a) {
  if(lD(a)) {
    var b = kz(0, a.target), c = (0,z.xx)(window);
    c && ((0,z.Qx)(Ww(c), Vw(c), b.C, b.offset).select(), a.preventDefault())
  }
};
z.q.$l = function(a) {
  if(lD(a)) {
    var b = kz(0, a.target);
    (0,z.Xk)(function() {
      (0,z.Ax)(b.C, b.offset, b.C, b.offset).select()
    })
  }
};
z.q.Ac = function(a) {
  switch(a.keyCode) {
    case 39:
    ;
    case 37:
    ;
    case 40:
    ;
    case 38:
      gD(this.LA.bind(this, a.keyCode));
      break;
    case 65:
      if(z.Eg ? a.metaKey : a.ctrlKey) {
        var b = this.t(), c = (0,z.Uz)(b);
        if(b = (b = c && (0,z.pz)(c.yc(), b.L())) && b.querySelector("figcaption")) {
          return(0,z.Sd)(b).select(), a.preventDefault(), !0
        }
      }
  }
  return!1
};
z.q.LA = function(a) {
  var b = this.t();
  if((0,z.Uz)(b)) {
    var b = (0,z.hC)(b), c = 39 === a || 40 === a;
    a = mD(this, b, c, !0);
    c = mD(this, b, c, !1);
    (a || c) && (0,z.oC)(b)
  }
};
z.q.Mj = function() {
  var a = this.t(), b = (0,z.Uz)(a);
  if(b) {
    var c = (0,z.pz)(b.yc(), a.L()), d;
    if(d = c) {
      d = b.fa(), d = (0,z.lo)(c) ? (0,z.Ee)(d, kD, c) : null
    }
    d && b.isCollapsed() && (a = (0,z.hC)(a), c = (0,z.Ya)(a.Aa, c), -1 != c && gD(this.AD.bind(this, c)))
  }
};
z.q.AD = function(a) {
  var b = (0,z.hC)(this.t()), c = b.Aa[a], c = (c = c && c.querySelector(".drop-cap-editable")) ? (0,z.we)(c) : "";
  if(!(0,z.Da)(c)) {
    var d = (0,z.kC)(b, a);
    d.text = c + d.text;
    (0,z.mC)(b, a);
    (0,z.oC)(b)
  }
};
(0,z.v)(z.oD, z.Sh);
z.q = z.oD.prototype;
z.q.field = null;
z.q.rj = null;
z.q.Vh = null;
z.q.cu = !0;
z.q.Rg = !0;
z.q.isEnabled = (0,z.ca)("Rg");
z.q.Rx = function(a) {
  a != this.Rg && this.field && (this.field.Hb.contentEditable = a);
  this.Rg = a
};
z.q.Bi = function(a, b, c) {
  this.ov.Bi(a, b, c)
};
z.q.aa = function(a, b) {
  if(this.field) {
    if(b) {
      throw Error("Can only prepend plugins before editor is activated");
    }
    this.field.aa(a)
  }else {
    b ? this.ck.unshift(a) : this.ck.push(a)
  }
};
z.q.select = function() {
  (0,z.Sd)(this.field.L()).select()
};
z.q.execCommand = function(a, b) {
  this.field.execCommand.apply(this.field, arguments)
};
z.q.queryCommandValue = function(a, b) {
  return this.field.queryCommandValue.apply(this.field, arguments)
};
z.q.la = function() {
  if(!this.rj || this.field.Mi) {
    var a;
    if(this.bk) {
      a = (0,z.bA)(this.field).replace(/<br>/g, "\n");
      if(-1 != a.indexOf("\x3c")) {
        throw Error("Sanitization plugin failure");
      }
      a = Fy(a)
    }else {
      a = (0,z.pD)(this), a = (0,z.Nn)(a, z.sf, {Jk:!0, isPublished:!0, media:null, sections:this.Sc()})
    }
    this.rj = a
  }
  return this.rj
};
z.q.q = function() {
  if(this.field) {
    if(this.field.Bh != Jz) {
      var a = this.field;
      if(a.Bh == Jz) {
        throw Error("makeUneditable: Field is already uneditable");
      }
      Yz(a);
      zz(a.qs);
      a.execCommand("clearlorem");
      gA(a);
      var b = a.Hb;
      dA == b.id && (dA = null);
      Pz(a);
      if((0,z.ma)(null)) {
        (0,z.rz)(b, null);
        var c = a.Hb;
        c.removeAttribute("contentEditable");
        c.removeAttribute("g_editable");
        c.removeAttribute("role");
        a.id ? c.id = a.id : c.removeAttribute("id");
        c.className = a.OF || "";
        var d = a.cssText;
        d ? (0,z.sc)(c, {style:d}) : c.removeAttribute("style");
        (0,z.ma)(a.sx) && ((0,z.Zd)(c, "lineHeight", a.sx), a.sx = null)
      }
      a.Kx();
      Oz(a);
      z.Wc && b.blur();
      a.execCommand("updatelorem");
      a.dispatchEvent("unload");
      this.field.Hb.contentEditable = !1
    }
    this.field.bb();
    this.field = null
  }
  z.oD.s.q.call(this)
};
z.q.Qd = (0,z.n)(!1);
z.q.focus = function(a) {
  if(a) {
    try {
      (0,z.qz)(this.field.L().lastChild, !1)
    }catch(b) {
      this.field.focus()
    }
  }else {
    this.field.focus()
  }
};
z.q.dj = function(a) {
  this.field && this.field.L() && (this.field.L().style.visibility = a ? "" : "hidden");
  this.cu = a
};
z.q.Sc = z.bt;
z.q.W = function() {
  z.oD.s.W.call(this);
  if(!this.field) {
    if(!window.document.getElementById(this.Ut)) {
      throw Error("Element must be in DOM before editor is activated");
    }
    this.field = new QC(this.Ut);
    var a = this.Sc();
    this.field.Gd = a;
    this.field.Ks = !0;
    this.field.aa(new nA);
    this.field.aa(this.ov);
    for(a = 0;a < this.ck.length;a++) {
      this.field.aa(this.ck[a])
    }
    this.field.addEventListener(z.Fz, this.$p, !1, this);
    if(this.Rg) {
      a = this.field;
      a.Bh = 1;
      var b = a.Hb;
      a.nodeName = b.nodeName;
      a.OF = b.className;
      a.cssText = b.style.cssText;
      b.className += " editable";
      a.bx(void 0)
    }
    this.ck.length = 0
  }
  this.dj(this.cu)
};
z.q.We = function(a) {
  this.bk && (a = (0,z.Fa)(a).replace(/\n/g, "\x3cbr\x3e"));
  var b = this.field;
  if(!b.Wk()) {
    b.execCommand("clearlorem");
    var c = b.L();
    if(c) {
      if(b.Yc() && z.Wc) {
        for(var d = c.ownerDocument.getElementsByTagName("HEAD"), e = d.length - 1;1 <= e;--e) {
          d[e].parentNode.removeChild(d[e])
        }
      }
    }else {
      c = b.Hb
    }
    c && Rz(b, a, c);
    b.execCommand("updatelorem");
    b.se() && b.pf()
  }
  this.Vh = this.rj = null
};
z.q.$p = function() {
  this.Vh = this.rj = null;
  this.H("change")
};
z.q.nn = z.ct;
z.q.Zn = (0,z.s)(12);
(0,z.v)(z.qD, z.sA);
z.q = z.qD.prototype;
z.q.Wa = (0,z.wb)("DefaultFieldTextPlugin");
z.q.enable = function(a) {
  z.qD.s.enable.call(this, a);
  a.L().setAttribute("data-default-value", this.yt);
  (hy(this.t().L()) || HC(this.t().L())) && rD(this)
};
z.q.disable = function(a) {
  a.Hb.removeAttribute("data-default-value");
  z.qD.s.disable.call(this, a)
};
z.q.tf = function(a) {
  return"updatelorem" == a
};
z.q.execCommand = function() {
  (hy(this.t().L()) || HC(this.t().L())) && rD(this)
};
z.q.Nn = function() {
  GC(this.t().L())
};
z.q.Pk = function() {
  this.t();
  hy(this.t().L()) && rD(this)
};
(0,z.v)(sD, z.IC);
sD.prototype.RE = function(a) {
  return a.id ? (0,z.Aa)(a.id, "internal-source-marker_") || (0,z.Aa)(a.id, "docs-internal-guid") : !1
};
sD.prototype.Tc = function(a) {
  var b = a.Sc(), c = window.document.createElement("div");
  c.innerHTML = this.uA;
  oz(c, this.RE.bind(this));
  var d = jC(c, {lj:b, zo:!0});
  if(d.Aa.length) {
    c = (0,z.kC)(a, a.getSelection().end.da).name;
    (0,z.pC)(a, !0);
    for(var e = a.getSelection().start, f = (0,z.kC)(a, e.da), h = f.split(e.offset), k = d.Sc(), l = 0, m = null, r = !1;m = (0,z.kC)(d, l);) {
      var C = 5 == m.type;
      Jx(m) || k && C ? ((0,z.rC)(d, l), r = r || C) : (k && r && (m = (0,z.zC)(d, l), l != (0,z.Ij)(m) && (0,z.BC)(d, l, new z.Hj)), r = !1, l++)
    }
    k = a.Sc();
    l = {};
    m = 0;
    r = a.Aa.length;
    for(m = 0;m < r;m++) {
      l[(0,z.kC)(a, m).name] = !0, k && (l[(0,z.zC)(a, m).getName()] = !0)
    }
    r = d.Aa.length;
    for(m = 0;m < r;m++) {
      C = (0,z.kC)(d, m), C.name = tD(C.name, l), k && (C = (0,z.zC)(d, m), (0,z.Ij)(C) == m && C.Ud(tD(C.getName(), l)))
    }
    for(m = 0;m < r;m++) {
      if(C = (0,z.kC)(d, m), C.name || (C.name = Kx(l)), k) {
        var C = (0,z.zC)(d, m), H = l;
        C.getName() || C.Ud(Kx(H))
      }
    }
    f.append((0,z.kC)(d, 0).Fa());
    (0,z.mC)(a, e.da);
    k = d.Aa.length;
    for(l = 1;l < k;l++) {
      m = e.da + l, (0,z.iC)(a, m, (0,z.kC)(d, l).Fa()), b && (r = (0,z.zC)(d, l), l == (0,z.Ij)(r) && m != (0,z.Ij)((0,z.zC)(a, m)) && (0,z.BC)(a, m, z.Dk.Fa(r)))
    }
    b = e.da + d.Aa.length - 1;
    d = (0,z.kC)(a, b);
    d.append(h);
    f != d && c != f.name && (d.name = c);
    (0,z.mC)(a, b);
    nC(a, e.da, e.offset, b, d.text.length - h.text.length)
  }
};
(0,z.v)(uD, z.IC);
uD.prototype.Tc = function(a) {
  (0,z.pC)(a, !0);
  var b = a.getSelection(), c = this.Rw((0,z.kC)(a, b.start.da), b.start.offset);
  b.start.offset += c;
  b.end.offset += c;
  (0,z.mC)(a, b.start.da);
  (0,z.oC)(a)
};
var KD = (0,z.vb)("", "(", "[", "{", " ", " ", "\n");
(0,z.v)(LD, z.IC);
LD.prototype.Tc = function(a) {
  var b = a.getSelection(), c = b.start.da;
  if(8 != (0,z.kC)(a, c).type) {
    var d = b.start.offset, e = b.end.da, b = (0,z.kC)(a, e).text.length - b.end.offset;
    qC(a, this.nF, this, !0);
    nC(a, c, d, e, (0,z.kC)(a, e).text.length - b)
  }
};
LD.prototype.nF = function(a, b, c) {
  for(var d = "", e = b;e < c;e++) {
    var f = a.text.charAt(e), h = 0, d = d + f;
    /\b/.test(f) && (d = "");
    if(iz(d) === d) {
      for(;e < c && !/\b/.test(a.text.charAt(e));) {
        e++
      }
    }else {
      " " == f || " " == f ? ((0,z.Fn)(a, e, e + 1), (0,z.BD)(a, e), h = GD(a, e) - 1) : "-" == f && 1 <= e - b ? ((0,z.Fn)(a, e, e + 1), h = xD(a, e) - 1) : "–" == f && 1 <= e - b ? ((0,z.Fn)(a, e, e + 1), h = zD(a, e) - 1) : "\x3e" == f && 1 <= e - b ? ((0,z.Fn)(a, e, e + 1), h = AD(a, e) - 1) : "." == f && 2 <= e - b ? ((0,z.Fn)(a, e, e + 1), h = wD(a, e) - 1) : "'" == f ? ((0,z.Fn)(a, e, e + 1), h = HD(a, e) - 1) : '"' == f && ((0,z.Fn)(a, e, e + 1), h = JD(a, e) - 1), e += h, c += h
    }
  }
  (0,z.BD)(a, c)
};
(0,z.v)(z.MD, z.$);
z.q = z.MD.prototype;
z.q.Xu = null;
z.q.Wa = (0,z.wb)("PastePlugin");
z.q.enable = function(a) {
  z.MD.s.enable.call(this, a);
  this.Xu = (0,z.L)(a.L(), "paste", this.bA, this)
};
z.q.disable = function(a) {
  z.MD.s.disable.call(this, a);
  (0,z.pe)(this.Xu)
};
z.q.q = function() {
  window.document.body.removeChild(this.Ub);
  this.Ub = null;
  z.MD.s.q.call(this)
};
z.q.Ac = function(a) {
  if(86 == a.keyCode && a.shiftKey && (a.metaKey || a.ctrlKey)) {
    this.Nq = !0;
    var b = this;
    (0,window.setTimeout)(function() {
      b.Nq = !1
    }, 0)
  }
  return!1
};
z.q.bA = function(a) {
  var b = PD(this, a);
  if(null !== b) {
    b = ND(this, b), a.preventDefault(), OD(this, b)
  }else {
    var c = this.t().L(), d = (a = (0,z.Uz)(this.t())) && (a.fa() && a.ua() ? new z.Sx(a) : null), e = c.innerHTML;
    "" === c.textContent.trim() && (c.innerHTML = "|");
    this.Ub.style.top = (window.document.documentElement.scrollTop || window.document.body.scrollTop || 0) + 50 + "px";
    this.Ub.style.display = "block";
    this.Ub.innerHTML = "";
    this.Ub.focus();
    (0,window.setTimeout)(function() {
      var a = this.Lo ? this.Ub.innerHTML : (0,z.Fa)(this.Ub.textContent);
      this.Ub.style.display = "none";
      a = ND(this, a);
      c.innerHTML = e;
      d && d.restore();
      c.focus();
      OD(this, a)
    }.bind(this), 0)
  }
};
(0,z.v)(z.RD, z.$);
z.RD.prototype.Wa = (0,z.wb)("SanitizationPlugin");
z.RD.prototype.Cx = function(a) {
  var b = {lj:this.t().Sc(), zo:!1}, c = window.document.createElement("div");
  c.innerHTML = a;
  return jC(c, b).L().innerHTML
};
z.RD.prototype.un = function(a) {
  QD(a, this.qC)
};
(0,z.v)(SD, z.$);
SD.prototype.Wa = (0,z.wb)("SingleLinePlugin");
SD.prototype.Ac = function(a) {
  return 13 == a.keyCode ? (a.preventDefault(), !0) : !1
};
(0,z.v)(TD, z.IC);
TD.prototype.Tc = function(a) {
  var b = a.getSelection(), c = b.start.offset, d = b.end.offset, e = (0,z.kC)(a, b.start.da);
  Hx(e, this.Sy, d);
  Hx(e, this.gC, c);
  b.start.offset++;
  b.end.offset++;
  (0,z.mC)(a, b.start.da);
  (0,z.oC)(a)
};
(0,z.v)(z.WD, z.$);
z.WD.prototype.Wa = (0,z.wb)("SmartTextPlugin");
z.WD.prototype.Ac = function(a) {
  return 32 == a.keyCode ? ((0,z.JC)(vD(this.My ? [z.BD, GD] : GD), this.t()), a.preventDefault(), !0) : !1
};
z.WD.prototype.Gw = function(a) {
  return XD(this, a.je.charCode) ? (a.preventDefault(), !0) : !1
};
(0,z.v)(z.YD, z.oD);
(0,z.v)(z.ZD, z.$);
z.q = z.ZD.prototype;
z.q.Wa = (0,z.wb)("MaxLengthPlugin");
z.q.enable = function(a) {
  z.ZD.s.enable.call(this, a);
  a.addEventListener(z.Fz, this.zd, !1, this);
  a = a.Hb;
  a.setAttribute("data-length", (0,z.we)(a).length);
  a.setAttribute("data-max-length", this.Bd)
};
z.q.disable = function(a) {
  a.removeEventListener(z.Fz, this.zd, !1, this);
  (0,z.gm)(a.Hb, ["max-length", "close-to-max-length"]);
  z.ZD.s.disable.call(this, a)
};
z.q.Ac = function(a) {
  return!this.Xs && (0,z.vz)(a) && 8 != a.keyCode && this.t().L().textContent.length >= this.Bd && window.getSelection().isCollapsed ? (a.preventDefault(), !0) : !1
};
z.q.Cr = function() {
  var a = this.t().L();
  a.setAttribute("data-length", (0,z.we)(a).length);
  return!1
};
z.q.zd = function() {
  var a = this.t(), b = a.L(), c = (0,z.we)(b), d = c.length;
  b.setAttribute("data-length", d);
  (0,z.cd)(b, "max-length", d > this.Bd);
  (0,z.cd)(b, "close-to-max-length", d > 0.66 * this.Bd);
  !this.Xs && d > this.Bd && (a.hg(), $z(a, function() {
    b.innerHTML = "";
    b.innerHTML = (0,z.Fa)(c.substr(0, this.Bd))
  }, !1, this))
};
(0,z.v)(z.$D, z.Ml);
z.$D.prototype.Zv = function(a, b, c, d) {
  return new aE(a, b, c, d)
};
(0,z.v)(aE, z.Zy);
aE.prototype.Bw = (0,z.ca)("element");
aE.prototype.Ux = function(a, b) {
  a.style.backgroundImage = "url(" + b + ")"
};
aE.prototype.Lw = function(a) {
  a.style.backgroundImage = ""
};
(0,z.v)(bE, Xw);
bE.prototype.zg = function() {
  if(!this.mk) {
    return null
  }
  var a = dE(this.mk);
  if(!a) {
    return null
  }
  var b = dE(this.sp);
  return b ? (0,z.Ax)(a.C, a.offset, b.C, b.offset) : null
};
(0,z.v)(fE, z.sA);
z.q = fE.prototype;
z.q.Wa = (0,z.wb)("TypeaheadPlugin");
z.q.enable = function(a) {
  fE.s.enable.call(this, a);
  this.Gq = this.ba.mb.sb();
  this.ga = [(0,z.L)(a.L(), "click", this.Zl, this)];
  this.Qa = window.document.createElement("div");
  this.Qa.className = "typeahead popover popover-bottom";
  this.su = [(0,z.L)(this.Qa, "click", this.Wz, this), (0,z.L)(this.Qa, "mouseover", this.Yz, this), (0,z.L)(this.Qa, "mouseout", this.Xz, this)]
};
z.q.disable = function(a) {
  (0,z.F)(this.Qa);
  (0,z.pe)(this.ga);
  (0,z.pe)(this.su);
  this.Qa = null;
  this.ub = "";
  this.Lm = null;
  fE.s.disable.call(this, a)
};
z.q.Ac = function(a) {
  this.wv = !!~[40, 38, 9, 13, 27].indexOf(a.keyCode);
  iE(this, a);
  return!1
};
z.q.Gw = function(a) {
  if(this.wv) {
    return!1
  }
  iE(this, a);
  return!1
};
z.q.Cr = function(a) {
  switch(a.keyCode) {
    case 40:
    ;
    case 38:
    ;
    case 16:
    ;
    case 17:
    ;
    case 18:
      break;
    case 9:
    ;
    case 13:
      if(!this.He) {
        break
      }
      gE(this);
      break;
    case 27:
      if(!this.He) {
        break
      }
      hE(this);
      break;
    default:
      a = this.t(), (0,z.Uz)(a).isCollapsed() && (0,z.JC)(vD(DD), a), a = (0,z.Rx)((0,z.Uz)(a)), "contact" != a.getAttribute("rel") ? hE(this) : this.Lm != a && (this.Lm = a, this.ub = (0,z.Mc)(a).substring(1), !this.ub || 2 > this.ub.length ? hE(this) : (0,z.y)(this.ha.get("/search/users/" + (0,window.encodeURIComponent)(this.ub), {Z:!0}), this.uC, this))
  }
  return!1
};
z.q.Nn = function() {
  this.vp = !0
};
z.q.Pk = function() {
  this.vp = !1;
  !this.Wp && this.He && hE(this)
};
z.q.Zl = function(a) {
  "A" == a.target.tagName && (a.preventDefault(), a.stopPropagation())
};
z.q.Wz = function(a) {
  a.stopPropagation();
  a.preventDefault();
  gE(this);
  return!1
};
z.q.Yz = function(a) {
  this.Wp = !0;
  var b = this.Qa.querySelector(".active");
  b && (0,z.I)(b, "active");
  a.target != this.Qa && (a = (0,z.Tc)(a.target, null, "typeahead-item")) && (0,z.G)(a, "active")
};
z.q.Xz = function(a) {
  (0,z.Kc)(this.Qa, a.relatedTarget) || (this.Wp = !1, !this.vp && this.He && hE(this))
};
z.q.uC = function(a) {
  a = a.value;
  if(!a.length) {
    return hE(this)
  }
  this.Dd(a.slice(0, 8))
};
z.q.Dd = function(a) {
  this.Qa.innerHTML = (0,z.tf)(jz, {items:a});
  this.Qa.parentNode || this.Gq.appendChild(this.Qa);
  a = this.Lm.getBoundingClientRect();
  this.Qa.style.top = a.top + this.Gq.scrollTop + a.height - 5 + "px";
  this.Qa.style.left = a.left - this.Qa.offsetWidth / 2 + 6 + "px";
  this.He = !0
};
(0,z.v)(jE, z.oD);
z.q = jE.prototype;
z.q.Dq = !1;
z.q.Og = "";
z.q.jk = 0;
z.q.Fr = function() {
  return this.Og.trim() != this.la().trim()
};
z.q.clear = function() {
  this.We("")
};
z.q.save = function() {
  this.la().length < this.Bd && this.ad()
};
z.q.or = function() {
  this.Uv() && (0,window.confirm)(this.vw()) ? ((0,z.A)(this.gb.oc(this.zr()), (0,z.vl)(this.J, "Sorry, your attempt to delete failed. Please try again.")), this.H("delete")) : kE(this)
};
z.q.q = function() {
  (0,window.clearTimeout)(this.jk);
  jE.s.q.call(this)
};
z.q.W = function() {
  function a(a) {
    a.stopPropagation()
  }
  jE.s.W.call(this);
  this.Og = this.la();
  this.We(this.Og);
  this.Bi(13, this.bq, this);
  this.Bi(27, this.cq, this);
  this.field.addEventListener("blur", this.aq, !1, this);
  var b = this.field.L();
  (0,z.L)(b, "keydown", a);
  (0,z.L)(b, "keyup", a);
  (0,z.L)(b, "keypress", a)
};
z.q.wf = (0,z.aa)();
z.q.ad = function() {
  if(this.isEnabled()) {
    var a = this.la().trim();
    a ? (this.Rx(!1), (0,z.Gb)((0,z.A)((0,z.y)(this.gb.send(this.Cw(), this.zr(), this.Dw(a), {Z:!0}), this.BB, this), (0,z.vl)(this.J, "Saving failed. You may be having connectivity issues or notes might be disabled on this post. Please try again.")), this.Rx.bind(this, !0))) : (0,z.Xk)(this.or, this)
  }
};
z.q.BB = function(a) {
  a = (0,z.Ki)(a.value, a.references);
  this.H("save", this.wf(a))
};
z.q.bq = function(a) {
  if(this.rk && this.rk.He) {
    return!1
  }
  a.shiftKey || (a.preventDefault(), this.save());
  return!0
};
z.q.cq = function(a) {
  if(this.rk && this.rk.He) {
    return!1
  }
  a.preventDefault();
  kE(this);
  return!1
};
z.q.aq = function() {
  this.Dq && (this.la().length >= this.Bd ? (0,window.confirm)(this.Ew()) ? kE(this) : this.focus() : this.jk = (0,window.setTimeout)(this.ad.bind(this), 100))
};
(0,z.v)(lE, jE);
z.q = lE.prototype;
z.q.No = null;
z.q.Ys = null;
z.q.Fp = null;
z.q.Ep = null;
z.q.Tt = null;
z.q.vw = (0,z.n)("Are you sure you want to delete this note?");
z.q.Ew = (0,z.n)("Your note is too long, do you want to abandon your changes?");
z.q.Uv = function() {
  return!!this.Uj
};
z.q.wf = function(a) {
  return{id:a.noteId, author:(0,z.P)("currentUser"), postId:a.postId, anchor:a.anchor, noteId:a.noteId, content:a.content, state:a.state, createdAt:a.createdAt, replies:[], Tq:"just now", newHighlight:a.newHighlight || null, highlightId:a.highlightId || null}
};
z.q.Cw = function() {
  return this.Uj ? "put" : "post"
};
z.q.zr = function() {
  return"/p/" + this.V + "/notes/" + (this.Uj || "new")
};
z.q.Dw = function(a) {
  a = {content:a};
  this.No && (a.anchor = this.No, a.anchorContent = this.Ys);
  null != this.Fp && null != this.Ep && (a.highlightStart = this.Fp, a.highlightEnd = this.Ep, a.highlightContent = this.Tt);
  return a
};
(0,z.v)(oE, jE);
z.q = oE.prototype;
z.q.vw = (0,z.n)("Are you sure you want to delete this reply?");
z.q.Ew = (0,z.n)("Your reply is too long, do you want to abandon your changes?");
z.q.Uv = function() {
  return!!this.zq
};
z.q.wf = function(a) {
  return{id:a.replyId, author:(0,z.P)("currentUser"), postId:a.postId, noteId:a.noteId, replyId:a.replyId, content:a.content, createdAt:a.createdAt, Tq:"just now"}
};
z.q.Cw = function() {
  return this.zq ? "put" : "post"
};
z.q.zr = function() {
  return"/p/" + this.V + "/notes/" + this.Uj + "/" + (this.zq || "new-reply")
};
z.q.Dw = function(a) {
  return{content:a}
};
(0,z.v)(pE, z.Sh);
pE.prototype.load = function() {
  return(0,z.A)((0,z.y)(this.gb.get("/p/" + this.V + "/notes", {Z:!0, background:!0}), this.vC, this), z.Ph)
};
pE.prototype.se = (0,z.ca)("Fj");
pE.prototype.qf = function(a) {
  var b = a && a.getAttribute("name");
  if(!b || !a) {
    return null
  }
  var c = this.Wu[b];
  return c && !this.$t ? c : this.Wu[b] = (0,z.ro)(a)
};
pE.prototype.vC = function(a) {
  var b = a.references.User;
  this.hf = b[a.post.creatorId];
  var c = a.value;
  if(c) {
    for(var d = 0;d < c.length;d++) {
      var e = c[d];
      if("HIDDEN" != e.state) {
        var f = e.replies, h = b;
        if(f) {
          for(var k = 0;k < f.length;k++) {
            var l = f[k];
            l.author = h[l.author];
            l.Tq = Xy(Number(l.createdAt))
          }
        }
        f = e;
        h = b;
        (0,z.rE)(this, e.anchor).add({id:f.noteId, author:h[f.author], postId:this.V, highlightId:f.highlightId, anchor:f.anchor, noteId:f.noteId, content:f.content, state:f.state, createdAt:f.createdAt, replies:f.replies || [], Tq:Xy(Number(f.createdAt))})
      }
    }
  }
  if(a = a.highlights) {
    for(b = 0;b < a.length;b++) {
      this.$h[a[b].id] = new z.eE(new z.eE(a[b]))
    }
  }
  this.Fj = !0
};
(0,z.v)(z.AE, z.D);
z.q = z.AE.prototype;
z.q.hb = null;
z.q.Id = null;
z.q.ed = null;
z.q.Ue = null;
z.q.ca = "";
z.q.tg = 0;
z.q.q = function() {
  DE(this);
  (0,z.NE)(this, null);
  this.gf && (0,z.pe)(this.gf);
  (0,z.pe)(this.za);
  this.za.length = 0;
  (0,window.clearTimeout)(this.Pl);
  (0,z.zg)(this.Ch);
  (0,z.zg)(this.Ab);
  (0,z.F)(this.Ch);
  (0,z.F)(this.Ab);
  this.data.bb();
  this.Bk && this.Bk.cancel();
  this.gf = this.Bk = this.data = this.Ch = this.Ab = this.Sa = this.rc = null;
  (0,z.G)(window.document.documentElement, "mobile-notes-variant");
  z.AE.s.q.call(this)
};
z.q.Wr = (0,z.g)();
z.q.$r = (0,z.g)();
z.q.Zr = (0,z.g)();
z.q.as = (0,z.g)();
z.q.px = (0,z.g)();
z.q.Nh = (0,z.g)();
z.q.rw = (0,z.g)();
z.q.Gz = function(a) {
  a = a.Ya();
  a.uh = My(a.content, {rel:"", target:""});
  a.uh = gz(a.uh);
  for(var b = 0;b < a.replies.length;++b) {
    a.replies[b].uh = My(a.replies[b].content, {rel:"", target:""}), a.replies[b].uh = gz(a.replies[b].uh)
  }
  return a
};
z.q.QB = function(a) {
  (0,z.OE)(this, a.value)
};
z.q.JB = function(a) {
  (a = this.zb["reply_" + a.value]) && a.save()
};
z.q.VA = function(a) {
  var b = this.zb["reply_" + a.value];
  b && kE(b);
  (a = (0,z.Tc)(a.target, null, "notes-note")) && (0,z.I)(a, "notes-show-reply-editor")
};
z.q.oB = function(a) {
  function b() {
    (0,z.I)(h, "notes-edit-mode");
    (0,z.I)(f, "notes-reply-edit-mode");
    (0,z.gc)(k);
    delete this.zb["reply_" + e]
  }
  var c = a.value.split(","), d = c[0], e = c[1], f = (0,z.Tc)(a.target, null, "notes-note"), h = (0,z.Tc)(a.target, null, "notes-reply");
  (0,z.G)(h, "notes-edit-mode");
  (0,z.I)(f, "notes-show-reply-editor");
  (0,z.G)(f, "notes-reply-edit-mode");
  a = h.querySelector(".notes-content");
  var k = new oE(this.w, a, this.postId, d, e);
  k.h("save", function(a) {
    for(var c = (0,z.qE)(this.data, d, this.ca), f = c.get("replies"), h = 0;h < f.length;h++) {
      if(f[h].replyId == e) {
        c.add("replies", a, h);
        break
      }
    }
    (0,z.FE)(this, z.Yu, c, {replyId:e});
    b.call(this)
  }, this);
  k.h("delete", function() {
    for(var a = (0,z.qE)(this.data, d, this.ca), c = a.get("replies"), f = 0;f < c.length;f++) {
      if(c[f].replyId == e) {
        a.removeItem("replies", f);
        break
      }
    }
    (0,z.FE)(this, z.Zu, a, {replyId:e});
    b.call(this)
  }, this);
  k.h("cancel", function() {
    var a = (0,z.qE)(this.data, d, this.ca);
    Dx(this.Ue, a);
    b.call(this)
  }, this);
  k.h("change", this.Nh, this);
  k.focus(!0);
  this.zb["reply_" + e] = k
};
z.q.hB = function(a) {
  (a = this.zb["reply_" + a.value]) && a.or()
};
z.q.SA = function(a) {
  a = a.get("id");
  this.zb[a] && ((0,z.gc)(this.zb[a]), delete this.zb[a]);
  this.zb["reply_" + a] && ((0,z.gc)(this.zb["reply_" + a]), delete this.zb["reply_" + a])
};
z.q.PA = function(a, b) {
  (0,z.I)(b, "notes-show-reply-editor");
  b.setAttribute("data-note-id", (0,z.Wh)(a, "id"))
};
z.q.RA = function(a) {
  (0,z.A)(EE(this, (0,z.qE)(this.data, a.value, this.ca), "PUBLIC"), (0,z.vl)(this.Ck, "Sorry, we couldn't approve the note. Please try again later and make sure you are logged in."))
};
z.q.ZB = function(a) {
  (0,z.A)(EE(this, (0,z.qE)(this.data, a.value, this.ca), "NEW"), (0,z.vl)(this.Ck, "Sorry, we couldn't unapprove the note. Please try again later and make sure you are logged in."))
};
z.q.nB = function(a) {
  function b() {
    (0,z.I)(d, "notes-edit-mode");
    (0,z.gc)(f);
    delete this.zb[c]
  }
  var c = a.value, d = (0,z.Tc)(a.target, null, "notes-note");
  (0,z.G)(d, "notes-edit-mode");
  (0,z.I)(d, "notes-show-reply-editor");
  var e = d.querySelector(".notes-content"), f = new lE(this.w, e, this.postId, a.value);
  f.h("save", function(a) {
    var d = (0,z.qE)(this.data, c, this.ca);
    a.replies = d.get("replies");
    d.Ih(a);
    (0,z.FE)(this, z.Uu, d);
    b.call(this)
  }, this);
  f.h("delete", function() {
    var a = (0,z.qE)(this.data, c, this.ca);
    (0,z.FE)(this, z.Vu, a);
    (0,z.Zh)(a);
    b.call(this)
  }, this);
  f.h("cancel", function() {
    var a = (0,z.qE)(this.data, c, this.ca);
    Dx(this.Ue, a);
    b.call(this)
  }, this);
  f.h("change", this.Nh, this);
  f.focus(!0);
  this.zb[c] = f
};
z.q.IB = function(a) {
  (a = GE(this, a)) && a.save()
};
z.q.UA = function(a) {
  (a = GE(this, a)) && kE(a)
};
z.q.gB = function(a) {
  (a = GE(this, a)) && a.or()
};
z.q.AB = function(a) {
  for(var b = 0;b < a.length;b++) {
    (0,z.SE)(this, (0,z.Wh)(a[b], "anchor"))
  }
};
z.q.uB = function(a) {
  a = a.value;
  this.Id == a && (this.Id = null);
  (0,z.A)(EE(this, (0,z.qE)(this.data, a, this.ca), "HIDDEN"), (0,z.vl)(this.Ck, "Sorry, we couldn't hide the note. Please try again later and make sure you are logged in."))
};
z.q.zB = function(a) {
  a.h("add", this.AB, this);
  a.h("change", this.px, this);
  a.h("remove", this.$r, this)
};
z.q.Cj = function(a) {
  var b = window.document.createElement("div");
  b.className = "notes-container";
  b.innerHTML = (0,z.tf)(wE);
  (0,z.Gc)(b, a);
  return b
};
z.q.hc = function(a) {
  return(0,z.Py)(this.Sa, a)
};
z.q.R = function(a) {
  return this.Ab.querySelector(a)
};
z.q.qx = function(a) {
  this.xs(a)
};
z.q.xs = function(a) {
  (a = (0,z.Tc)(a.target, null, "notes-replies")) && (0,z.I)(a, "notes-replies-hidden")
};
z.q.getSelection = function() {
  var a = (0,z.xx)();
  if(!a || a.isCollapsed()) {
    return null
  }
  var b = (0,z.Rx)(a);
  if(!(0,z.Kc)(this.Sa, b)) {
    return null
  }
  var c = (b = (0,z.Ee)(b, z.Qy, this.Sa)) && this.data.qf(b);
  if(!b) {
    return null
  }
  var d = (0,z.Oy)((0,z.ay)(a, !0), b), e = (0,z.Oy)((0,z.ay)(a, !1), b);
  return-1 == d || -1 == e ? null : new z.uE(a, b, new z.eE({anchor:b.getAttribute("name"), startIndex:d, endIndex:e, content:c.text.substring(d, e)}))
};
})(_mdm);
//@ sourceURL=fingerprint:has-editor