(function(z){
var YH = function(a) {
  return a = "" + ("“" + (0,z.U)((0,z.ag)(a.quote, a.Fo - (4 + a.username.length + a.Ho))) + "” —@" + (0,z.U)(a.username) + " " + (0,z.U)(a.url))
};
var ZH = function(a, b, c, d, e) {
  z.AE.call(this, a, b, c, d);
  this.qk = a.get("twitter");
  this.ia = a.get("dom-monitor");
  this.ia.h("resize-end", this.zm, this);
  this.ia.h("inner-resize-end", this.zm, this);
  b.get("isPublished");
  (0,z.wg)(this.Ch).g("select-highlight", this.KB, this);
  (0,z.wg)(this.Ab).g("hide-reply", this.vB, this).g("start-note", this.PB, this).g("show-note-permalink", this.OB, this);
  e.h("update", this.Su, this);
  e.h("highlight", this.Gu, this);
  e.h("twitter", this.Fu, this);
  this.Ea = e;
  this.za.push((0,z.L)(this.Sa, "click", this.LB, this));
  this.za.push((0,z.L)(window.document.body, "click", this.WA, this, !0));
  this.kh.h("historyUpdate", this.Hu, this)
};
var $H = function(a, b) {
  (0,z.PE)(a, b.Bc);
  aI(a);
  (0,z.UE)(a, b);
  a.hb && a.hb.focus()
};
var bI = function(a, b) {
  (0,z.y)((0,z.NE)(a, b), function() {
    (0,z.IE)(this) || (0,z.UE)(this, b);
    cI(this);
    this.Td.scrollTop = (0,z.Ge)(this.rc[b]) - 100
  }, a)
};
var dI = function(a, b, c) {
  if(a.ca) {
    b = (0,z.he)(b, a.Ab).y + (0,z.Ty)(b, "padding").top;
    c = c ? (0,z.he)(a.ib, c).y : 0;
    var d = b + c, e = d + a.ib.offsetHeight;
    (0,z.Je)(a.Ci, function(a) {
      var b = (0,z.he)(a, this.Ab).y + (0,z.Ty)(a, "padding").top, c = b + a.offsetHeight;
      (0,z.cd)(a, "grid-breaking-slide", b < e && c > d)
    }, a);
    a.ib.style.top = b + c + "px"
  }
};
var eI = function(a, b, c) {
  var d = a.hc(a.ca);
  if(!a.isAuthenticated) {
    var e = a.ca;
    a.ed && (e += "--highlight-" + a.ed.startIndex + "-" + a.ed.endIndex);
    a.ib.querySelector(".notes-add-sign-in").setAttribute("data-action-value", window.location.pathname + "#" + e)
  }
  d && (e = d.querySelector(".notes-highlight"), c = !c && e ? e : d, dI(a, c, b), 1E3 >= window.innerWidth ? b.scrollIntoView(!0) : (0,z.mz)(c))
};
var aI = function(a) {
  var b = a.ib.querySelector(".notes-new-note, .notes-add-sign-in");
  b && eI(a, b)
};
var fI = function(a, b, c) {
  b = a.ib.querySelector('[data-note-id\x3d"' + b + '"]');
  eI(a, b, c)
};
var cI = function(a) {
  if(a.ca) {
    var b = (0,z.rE)(a.data, a.ca), c = b.count();
    (b = c ? (0,z.Wh)((0,z.ai)(b, 0), "id") : null) ? (1 == c && (0,z.RE)(a, b), fI(a, b, !0)) : aI(a)
  }
};
var gI = function(a, b) {
  return b == a.ca ? (0,z.y)((0,z.NE)(a, null), z.bt) : (0,z.y)((0,z.NE)(a, b), (0,z.wb)(!!b))
};
var hI = function(a, b, c) {
  var d = (0,z.Tc)(b.target, null, "notes-note");
  !d || b.relatedTarget && (0,z.Kc)(d, b.relatedTarget) || !(b = (0,z.qE)(a.data, d.getAttribute("data-note-id"), a.ca)) || (d = null, c ? d = (0,z.Wh)(b, "highlightId") : a.Id && (d = (0,z.Wh)((0,z.qE)(a.data, a.Id, a.ca), "highlightId")), (0,z.PE)(a, d ? a.data.$h[d] || null : null, a.Lr))
};
var iI = function(a) {
  z.D.call(this);
  this.w = a
};
(0,z.v)(ZH, z.AE);
z.q = ZH.prototype;
z.q.tg = 3;
z.q.Pj = !1;
z.q.Zh = null;
z.q.Ea = null;
z.q.Pl = 0;
z.q.Wr = function() {
  var a = Date.now();
  this.Bk = null;
  this.Pj = !0;
  this.Js();
  this.isAuthenticated && ((0,z.cd)(this.ib, "notes-is-creator", this.data.hf.userId === this.currentUser.userId), (0,z.uz)(this.R(".notes-post-creator"), this.data.hf.name));
  this.Hu();
  this.za.push((0,z.L)(this.Ab, "mouseover", this.bB, this));
  this.za.push((0,z.L)(this.Ab, "mouseout", this.aB, this));
  z.Kv || (this.za.push((0,z.L)(this.Sa, "mouseover", this.UB, this)), this.za.push((0,z.L)(this.Sa, "mouseout", this.TB, this)));
  this.za.push((0,z.L)(this.ib, "click", this.YA, this));
  this.za.push((0,z.L)(this.Ci, z.cj, this.YB, this));
  (0,z.si)("notes.renderMarkers", Date.now() - a)
};
z.q.Hu = function() {
  var a = (0,z.TE)(this);
  if(a.anchor) {
    if(bI(this, a.anchor), a.Bc) {
      (0,z.RE)(this, a.Bc.id, !0), fI(this, a.Bc.id), "reply" == a.Xv && (0,z.OE)(this)
    }else {
      if("highlight" == a.Xv) {
        var b = this.hc(a.anchor), c = a.Bc.startIndex, d = a.Bc.endIndex, e = (0,z.NC)(b, c, b, d);
        e && (a = new z.uE(e, b, new z.eE({anchor:a.anchor, startIndex:c, endIndex:d, content:e.Lb()})), $H(this, a))
      }
    }
  }
};
z.q.Zr = function(a) {
  var b = (0,z.rE)(this.data, this.ca);
  a.newHighlight && (this.data.$h[a.highlightId] = new z.eE(new z.eE(a.newHighlight)), delete a.newHighlight);
  b.add(a);
  this.hb.clear();
  (0,z.RE)(this, a.id);
  (0,z.G)(this.ib, "notes-hide-editor");
  (0,z.FE)(this, z.Tu, (0,z.bi)(b, "id", a.id))
};
z.q.rw = function() {
  if(this.hb) {
    aI(this), this.hb.focus()
  }else {
    var a;
    a: {
      a = this.zb;
      for(var b in a) {
        a = a[b];
        break a
      }
      a = void 0
    }
    if(b = a && a.Uj) {
      (0,z.RE)(this, b), fI(this, b), a.focus()
    }
  }
};
z.q.Nh = function() {
  var a = this.Td.scrollTop, b = this.Sa.parentNode;
  b.style.height = "";
  var c = (0,z.Ge)(this.Ab), d = (0,z.Ge)(b);
  this.ca && (c = this.rc[this.ca].offsetTop + this.ib.offsetHeight + c, d + b.offsetHeight < c && (b.style.height = c - d + "px", this.Td.scrollTop = a))
};
z.q.as = function(a) {
  (0,z.y)(gI(this, a.value), function(a) {
    a && ((0,z.IE)(this) || ((a = this.getSelection()) && a.Bc.anchor == this.ca ? ((0,z.PE)(this, a.Bc), (0,z.UE)(this, a)) : (0,z.UE)(this, this.ca), this.hb && this.hb.focus()), cI(this))
  }, this)
};
z.q.$r = function(a) {
  (0,z.SE)(this, (0,z.Wh)(a, "anchor"));
  (0,z.Wh)(a, "id") == this.Id && (0,z.PE)(this, null)
};
z.q.xs = function(a) {
  (0,z.I)((0,z.Tc)(a.target, null, "notes-replies"), "notes-replies-hidden");
  this.Nh()
};
z.q.LB = function(a) {
  if(!this.$t && "A" != a.target.tagName && (z.Kv || this.ca)) {
    var b = this.getSelection();
    if(!b || b.Nv != this.ca) {
      if(this.ca && 1E3 >= window.innerWidth) {
        return(0,z.NE)(this, null)
      }
      a = (a = (0,z.Ee)(a.target, z.Qy, this.Sa)) && a.getAttribute("name") || null;
      (0,z.y)(gI(this, a), function(a) {
        a && ((0,z.IE)(this) || (0,z.UE)(this, this.ca), cI(this))
      }, this)
    }
  }
};
z.q.zm = function() {
  this.Js()
};
z.q.WA = function(a) {
  if(this.ca) {
    var b = a.target, b = (0,z.Ee)(b, function(a) {
      return a == this.ib || a == this.Ch || a == this.Ea.L() || a.getAttribute("data-action") && "zoom" != a.getAttribute("data-action")
    }.bind(this));
    window.document.body === b && (1400 >= window.innerWidth && (a.stopPropagation(), a.preventDefault()), (0,z.NE)(this, null))
  }
};
z.q.KB = function(a) {
  var b = (a = this.data.$h[a.value] || null) && a.anchor;
  b && (b = this.hc(b), (a = (0,z.NC)(b, a.startIndex, b, a.endIndex)) && a.select())
};
z.q.OB = function(a) {
  (0,z.gl)(this.kh, a.value)
};
z.q.UB = function(a) {
  (a = (a = (0,z.Ee)(a.target, z.Qy, this.Sa)) ? a.getAttribute("name") : null) && this.rc[a] && (this.Zh && (0,z.I)(this.Zh, "notes-marker-highlighted"), a = this.rc[a], (0,z.G)(a, "notes-marker-highlighted"), this.Zh = a, (0,window.clearTimeout)(this.Pl))
};
z.q.TB = function() {
  (0,window.clearTimeout)(this.Pl);
  this.Pl = (0,window.setTimeout)(function() {
    this.Zh && ((0,z.I)(this.Zh, "notes-marker-highlighted"), this.Zh = null)
  }.bind(this), 1E3)
};
z.q.bB = function(a) {
  hI(this, a, !0)
};
z.q.aB = function(a) {
  hI(this, a, !1)
};
z.q.Su = function() {
  var a = (0,z.xx)();
  if(!a || a.isCollapsed()) {
    (0,z.Gx)(this.Ea)
  }else {
    var b = (0,z.Rx)(a);
    (0,z.Ee)(b, z.Qy, this.Sa) ? (0,z.Fx)(this.Ea, a.Oc().getBoundingClientRect()) : (0,z.Gx)(this.Ea)
  }
};
z.q.Gu = function() {
  (0,z.Gx)(this.Ea);
  var a = this.getSelection();
  a && $H(this, a);
  return!1
};
z.q.Fu = function() {
  (0,z.Gx)(this.Ea);
  var a = (0,z.xx)();
  if(!a || a.isCollapsed()) {
    return!1
  }
  var a = a.Lb(), b = this.postId;
  this.qk.Am(YH({quote:a, username:this.data.hf.username, url:window.location.href, Fo:140, Ho:25}));
  (0,z.W)(z.Fu, {postId:b, type:"highlight", dest:"twitter"});
  return!1
};
z.q.vB = function(a) {
  a = a.value.split(",");
  var b = a[0], c = a[1];
  (0,z.A)((0,z.y)(this.data.gb.put("/p/" + this.data.V + "/notes/" + b + "/" + c + "/state", {state:"HIDDEN"}, {Z:!0}), function() {
    for(var a = (0,z.qE)(this.data, b, this.ca), e = a.get("replies"), f = 0;f < e.length;f++) {
      if(e[f].replyId == c) {
        a.removeItem("replies", f);
        break
      }
    }
    (0,z.FE)(this, z.$u, (0,z.qE)(this.data, b, this.ca), {replyId:c});
    this.Di.W("The reply has been dismissed", "success")
  }, this), (0,z.vl)(this.Ck, "Sorry, we couldn't hide the reply. Please try again later and make sure you are logged in."))
};
z.q.YA = function(a) {
  a = a.target;
  var b = (0,z.Tc)(a, null, "notes-note");
  if(b) {
    var c = b.getAttribute("data-note-id");
    c == this.Id ? (0,z.Ee)(a, function(a) {
      return!!a.getAttribute("data-action") || (0,z.ed)(a, "editable")
    }, b, !0) == b && (0,z.RE)(this, null) : ((0,z.RE)(this, c), fI(this, c))
  }
};
z.q.PB = function() {
  var a = this.getSelection();
  (0,z.RE)(this, null);
  a && (0,z.PE)(this, a.Bc);
  (0,z.UE)(this, a || this.ca);
  this.hb && (a && aI(this), this.hb.focus())
};
z.q.YB = function(a) {
  (a = a.target.getAttribute("name")) && (0,z.Py)(this.Sa, a) && (0,z.JE)(this, a, a == this.ca)
};
z.q.Js = function() {
  this.Pj && (this.ig ? (0,z.Jh)(Error("UpdateUI called after dispose")) : ((0,z.ME)(this), this.Id ? fI(this, this.Id) : cI(this)))
};
z.q.hF = function() {
  if(this.ca) {
    var a = (0,z.xx)();
    if(a) {
      var a = (0,z.Rx)(a), b = this.hc(this.ca);
      b && (0,z.Kc)(b, a) || (0,z.NE)(this, null)
    }
  }
};
z.q.q = function() {
  this.ia.ma("resize-end", this.zm, this);
  this.ia.ma("inner-resize-end", this.zm, this);
  this.Ea.ma("update", this.Su, this);
  this.Ea.ma("highlight", this.Gu, this);
  this.Ea.ma("twitter", this.Fu, this);
  ZH.s.q.call(this)
};
(0,z.v)(iI, z.D);
iI.prototype.Ei = function(a, b, c, d) {
  return new ZH(this.w, a, b, c, d)
};
var jI = z.gr, kI = jI.w;
kI.add("notes", new iI(kI));
(0,z.ir)(jI, "notes");
})(_mdm);
//@ sourceURL=fingerprint:notes