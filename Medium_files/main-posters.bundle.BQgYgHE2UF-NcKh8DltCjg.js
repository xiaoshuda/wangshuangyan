(function(z){
var wF = function(a) {
  var b = [];
  (0,z.Pc)(a, b, !1);
  return b.join("")
};
var xF = function(a) {
  return a.vf.Bidi
};
var yF = function(a) {
  var b;
  if(b = a.t()) {
    b = a.t().Rb
  }
  return b
};
var zF = function(a) {
  a.S.innerHTML = '\x3cdiv class\x3d\'highlight-menu-inner\'\x3e\x3cul class\x3d"highlight-menu-buttons"\x3e\x3cli class\x3d"highlight-menu-button highlight-menu-bold"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"bold"\x3e\x3cspan class\x3d"icons icons-bold"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlight-menu-button highlight-menu-italic"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"italic"\x3e\x3cspan class\x3d"icons icons-italic"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlight-menu-button highlight-menu-h2"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"h2"\x3e\x3cspan class\x3d"icons icons-h1"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlight-menu-button highlight-menu-h3"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"h3"\x3e\x3cspan class\x3d"icons icons-h2"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlight-menu-button highlight-menu-blockquote"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"blockquote"\x3e\x3cspan class\x3d"icons icons-blockquote"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlight-menu-button highlight-menu-anchor"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"link"\x3e\x3cspan class\x3d"icons icons-link"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' + 
  (a.Dl ? '\x3cli class\x3d"highlight-menu-button highlight-menu-notes"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"highlight"\x3e\x3cspan class\x3d"icons icons-notes"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : "") + (a.Hy ? '\x3cli class\x3d"highlight-menu-button highlight-menu-drop-cap"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"drop-cap"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : "") + '\x3c/ul\x3e\x3cdiv class\x3d"highlight-menu-button highlight-menu-linkinput"\x3e\x3cinput class\x3d\'highlight-menu-linkinput-field\' type\x3d"text" placeholder\x3d"Paste or type a link"\x3e\x3c/input\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"cancelLink"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d\'highlight-menu-arrow-clip\'\x3e\x3cspan class\x3d\'highlight-menu-arrow\'\x3e\x3c/span\x3e\x3c/div\x3e'
};
var AF = function(a) {
  if(1 !== a.type || 1 !== a.fb.length) {
    return!1
  }
  var b = a.fb[0];
  if(3 != b.l()) {
    return!1
  }
  var c = /^(\s*)(.*?)(\s*)$/.exec(a.text), d = c[1], e = c[3], c = c[2];
  return(0,z.Fj)(b) > d.length || (0,z.Gj)(b) < a.text.length - e.length ? !1 : b.mg() === c
};
var BF = function(a, b, c, d, e) {
  var f = new z.Ab, h = a.confirm(b, c, d, e);
  h ? (h.h(z.Pv, function() {
    f.Oa(!0)
  }, a), h.h(z.Qv, function() {
    h.close();
    f.cancel()
  }, a)) : f.cancel();
  return f
};
var CF = function(a, b) {
  return(0,z.O)(a, "backgroundImage", b)
};
var DF = function(a, b) {
  b in a.hi && ((0,z.Zh)(a.hi[b]), delete a.hi[b])
};
var EF = function(a, b, c) {
  for(var d = (b = 1 == b) ? a.fa() : a.ua(), e = b ? a.Va() : a.Cb(), f = (0,z.Rx)(a);d != f && d != c && !(b && 0 != e || !b && e != (0,z.Vx)(d));) {
    var h = d.parentNode, d = (0,z.Ya)(h.childNodes, d), e = b ? d : d + 1, d = h
  }
  return(0,z.Qx)(b ? d : a.fa(), b ? e : a.Va(), b ? a.ua() : d, b ? a.Cb() : e)
};
var FF = function(a) {
  return a.getAttribute && "true" == a.getAttribute("g_editable")
};
var GF = function(a, b, c) {
  return a = '\x3cdiv class\x3d"system-page"\x3e\x3cdiv class\x3d"wrapper drafts-user" tabindex\x3d"-1"\x3e\x3cdiv class\x3d"wrapper-inner"\x3e\x3ch1 class\x3d"jumbo-bucket-title"\x3eDrafts\x3c/h1\x3e' + ((0,z.Wo)((0,z.yf)(a, {sections:[{filterBy:"Mine", title:"Mine", url:"/me/drafts"}, {filterBy:"Shared with Me", title:"Shared with Me", url:"/me/drafts/shared"}], filterBy:a.isShared ? "Shared with Me" : "Mine"}), c) + (0,z.Vo)((0,z.yf)(a, {md:!0, sections:[], yx:"drafts", Kw:!a.isShared}), c) + 
  "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e")
};
var HF = function(a, b) {
  var c = new z.IC;
  c.Tc = function(c) {
    var e = (0,z.Ya)(c.Aa, a);
    -1 != e && (b((0,z.kC)(c, e)), (0,z.mC)(c, e), (0,z.oC)(c))
  };
  return c
};
var IF = function(a) {
  var b = new z.IC;
  b.Tc = function(b) {
    var d = (0,z.Ya)(b.Aa, a);
    -1 != d && ((0,z.rC)(b, d), (0,z.oC)(b))
  };
  return b
};
var JF = function(a) {
  return'We were unable to delete your post.  \x3ca href\x3d"/p/' + (0,z.V)(a.postId) + '"\x3eNavigate back and try again.\x3c/a\x3e'
};
var KF = function() {
  return"Your latest changes will be lost! Are you sure?"
};
var LF = function() {
  for(var a = (0,z.yf)({TE:z.Eg}, {ZE:[{key:"k", description:"link"}, {key:"b", description:"bold"}, {key:"i", description:"italics"}, {key:"0", description:"new paragraph"}, {key:"1", description:"h1"}, {key:"2", description:"h2"}, {key:"5", description:"blockquote"}, {key:"6", description:"codeblock"}, {key:"7", description:"pullquote"}]}), b = "", c = a.TE ? "⌘" : "ctrl", a = a.ZE, d = a.length, e = 0;e < d;e++) {
    var f = a[e], b = b + ('\x3cdt class\x3d"overlay-dialog-keyboard-term"\x3e\x3cspan class\x3d"overlay-dialog-keyboard-key"\x3e' + (0,z.U)(c) + '\x3c/span\x3e +\x3cspan class\x3d"overlay-dialog-keyboard-key"\x3e' + (0,z.U)(f.key) + '\x3c/span\x3e\x3c/dt\x3e\x3cdd class\x3d"overlay-dialog-keyboard-def"\x3e' + (0,z.U)(f.description) + "\x3c/dd\x3e")
  }
  return'\x3cdl class\x3d"overlay-dialog-keyboard-list"\x3e' + b + "\x3c/dl\x3e"
};
var MF = function(a) {
  a = a || {};
  return a.postId ? 'Congrats, your post is published. \x3cbutton class\x3d"btn btn-chromeless butter-bar-link" title\x3d"Share this post on Twitter" data-action\x3d"butter-bar-action"\x3eShare it on Twitter.\x3c/button\x3e' : "Your changes have been published."
};
var NF = function(a, b, c) {
  return'\x3cp class\x3d"share-draft-copy"\x3eCopy and email this link to friends or colleagues to get feedback on your draft. Collaborators who leave notes before you publish will get access to write.\x3c/p\x3e\x3cinput class\x3d"text-input text-input-post-url" value\x3d"' + (0,z.V)(c.baseUrl) + (0,z.V)(a.BF) + '" /\x3e' + (c.variants.can_send_to_editorial ? '\x3cp class\x3d"share-draft-request-copyedit"\x3eOr, we can forward it to an editor, who can leave notes on your draft.\x3cbr\x3e\x3cbr\x3e\x3cbutton class\x3d"btn btn-primary btn-link" title\x3d"Request an edit" data-action\x3d"request-copyedit"\x3eRequest an edit\x3c/button\x3e\x3c/p\x3e' : 
  "")
};
var OF = function(a, b) {
  var c = EF(a, 1, b), c = EF(c, 0, b), d = c.fa(), e = c.ua(), f = c.Va(), c = c.Cb();
  if(d == e) {
    for(;e != b && 0 == f && c == (0,z.Vx)(e);) {
      d = e.parentNode, f = (0,z.Ya)(d.childNodes, e), c = f + 1, e = d
    }
    d = e
  }
  return(0,z.Ax)(d, f, e, c)
};
var PF = function(a) {
  var b = arguments, c = b.length, d = 0, e = new z.Xc;
  e.next = function() {
    try {
      if(d >= c) {
        throw z.Zc;
      }
      return(0,z.Yc)(b[d]).next()
    }catch(a) {
      if(a !== z.Zc || d >= c) {
        throw a;
      }
      d++;
      return this.next()
    }
  };
  return e
};
var QF = function(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    (0,z.la)(d) ? QF.apply(null, d) : (0,z.gc)(d)
  }
};
var RF = function(a, b) {
  var c = b || {}, d;
  for(d in c) {
    var e = ("" + c[d]).replace(/\$/g, "$$$$");
    a = a.replace(RegExp("\\{\\$" + d + "\\}", "gi"), e)
  }
  return a
};
var SF = function(a) {
  this.Vq = a;
  this.vr = []
};
var TF = function(a) {
  a.hr || (a.hr = wF(a.hc()));
  return a.hr
};
var UF = function(a) {
  (0,z.Ic)(a.Vq);
  for(a.Vq = null;a.vr.length;) {
    (0,z.Ic)(a.vr.pop())
  }
};
var VF = function(a, b, c) {
  var d = a.hc();
  d.href = c;
  var e = TF(a);
  b != e && (c = (0,z.Cy)(d), c.nodeType == z.Rc && (c = c.parentNode), wF(c) != e && (c = d), (0,z.Vy)(c), d = (0,z.mc)(c), c.appendChild(d.createTextNode(b)), a.hr = null)
};
var WF = function(a) {
  a = a.hc();
  if(z.$t) {
    var b;
    b = a.nextSibling;
    b && b.nodeType == z.Rc && ((0,z.Aa)(b.data, " ") || (0,z.Aa)(b.data, " ")) || (b = (0,z.mc)(a).createTextNode(" "), (0,z.Gc)(b, a));
    (0,z.Ax)(b, 1, b, 1).select()
  }else {
    (0,z.qz)(a, !1)
  }
};
var XF = function(a, b, c) {
  var d = new SF(a);
  d.hc().href = "/";
  b && (a.target = b);
  c && (d.vr = c);
  return d
};
var YF = function(a) {
  if(/\s/.test(a) || ZF.test(a)) {
    return!1
  }
  var b = !1;
  /^[^:\/?#.]+:/.test(a) || (a = "http://" + a, b = !0);
  a = (0,z.Lg)(a);
  if(-1 != (0,z.Ya)(["mailto", "aim"], a[1])) {
    return!0
  }
  var c = a[3];
  if(!c || b && -1 == c.indexOf(".") || /[^\w\d\-\u0100-\uffff.%]/.test(c)) {
    return!1
  }
  b = a[5];
  return!b || 0 == b.indexOf("/")
};
var $F = function() {
  z.$.call(this)
};
var aG = function(a) {
  return yF(a).kd()
};
var bG = function(a) {
  if(z.B || z.Id) {
    var b = a.Nd(), c = (0,z.Rx)(b), d = aG(a);
    cG.lastIndex = 0;
    cG.test(c.innerHTML) && (a = b.fa() && b.ua() ? new z.Sx(b) : null, "P" == c.tagName ? dG(c, !0) : (b = c.innerHTML.replace(cG, '\x3cp$1 trtempbr\x3d"temp_br"\x3e'), (0,z.rz)(c, b), c = (0,z.cb)(c.getElementsByTagName("P")), (0,z.tz)(c, function(a) {
      if("temp_br" == a.getAttribute("trtempbr")) {
        a.removeAttribute("trtempbr");
        var b = (0,z.Mc)(a);
        /[^\t\n\r ]/.test(b) || (b = z.B ? d.createTextNode(" ") : d.createElement("BR"), a.appendChild(b));
        dG(a)
      }
    })), a.restore())
  }
};
var dG = function(a, b) {
  if(z.B || z.Id) {
    var c = a.outerHTML.replace(/<(\/?)p/gi, "\x3c$1div");
    b && (c = c.replace(cG, "\x3c/div\x3e\x3cdiv$1\x3e"));
    z.Id && !/<\/div>$/i.test(c) && (c += "\x3c/div\x3e");
    a.outerHTML = c
  }
};
var eG = function(a) {
  return 0 == a.indexOf("+") ? a.substring(1) : a
};
var fG = function(a) {
  a = (0,z.Uc)(a, z.cy, !0);
  a.align && (a.style.textAlign = a.align, a.removeAttribute("align"))
};
var gG = function(a, b, c, d, e) {
  var f = null;
  d && (f = a.t().queryCommandValue("rtl") ? "rtl" : a.t().queryCommandValue("ltr") ? "ltr" : null);
  b = eG(b);
  var h, k;
  if(z.B) {
    var l = b;
    k = [];
    d = null;
    var m = a.Nd();
    h = yF(a);
    if(l in hG) {
      var r = m && (0,z.Rx)(m);
      if(r) {
        for(var C = (0,z.qc)(window.document, "BLOCKQUOTE", null, r), H, Oa = 0;Oa < C.length;Oa++) {
          if(m.containsNode(C[Oa])) {
            H = C[Oa];
            break
          }
        }
        if(r = H || (0,z.Tc)(r, "BLOCKQUOTE")) {
          d = h.pb("div", {style:"height:0"}), r.appendChild(d), k.push(d), H ? m = (0,z.Ax)(H, 0, d, 0) : m.containsNode(d) && (m = (0,z.Qx)(m.fa(), m.Va(), d, 0)), m.select()
        }
      }
    }
    H = a.t();
    !H.Yc() && !d && l in iG && (H = H.L(), m && m.isCollapsed() && (void 0 != H.firstElementChild ? !H.firstElementChild : !(0,z.Uy)(H.firstChild, !0)) && (d = m.oe(0).Oc(), m = d.duplicate(), m.moveToElementText(H), m.collapse(!1), m.isEqual(d) && (m = h.createTextNode(" "), H.appendChild(m), d.move("character", 1), d.move("character", -1), d.select(), k.push(m))), d = h.pb("div", {style:"height:0"}), H.appendChild(d), k.push(d));
    h = k[0];
    k = k[1]
  }
  if(z.Wc) {
    h = b;
    var ea;
    jG[h] && (ea = yF(a).pb("div", {style:"height: 0"}, "x"), a.t().L().appendChild(ea));
    kG[h] && (h = a.t().L(), ea = yF(a).pb("div", {style:"height: 0"}, "x"), h.insertBefore(ea, h.firstChild));
    h = ea
  }
  z.K && (ea = b, (0,z.$b)("1.9") && "formatblock" == ea.toLowerCase() && (ea = a.Nd(), H = ea.fa(), ea.isCollapsed() && H && "BODY" == H.tagName && (d = ea.Va(), (H = H.childNodes[d]) && "BR" == H.tagName && (ea = ea.Oc(), ea.setStart(H, 0), ea.setEnd(H, 0)))));
  z.eu && "fontsize" == b.toLowerCase() && lG(a);
  ea = aG(a);
  e && z.Vt && (ea.execCommand("styleWithCSS", !1, !0), z.Id && mG(a));
  ea.execCommand(b, !1, c);
  e && z.Vt && ea.execCommand("styleWithCSS", !1, !1);
  z.Wc && !(0,z.$b)("526") && "formatblock" == b.toLowerCase() && c && /^[<]?h\d[>]?$/i.test(c) && nG(a);
  /insert(un)?orderedlist/i.test(b) && (z.Wc && oG(a), z.B && (pG(a), k && (0,z.F)(k)));
  h && (0,z.F)(h);
  f && a.t().execCommand(f)
};
var qG = function(a, b, c) {
  var d = null, e = [], f = b && (0,z.Rx)(b);
  if(f && "IMG" == f.tagName) {
    return null
  }
  if(b && b.isCollapsed()) {
    b = b.oe(0).Oc(), z.Ot ? (d = yF(a).createElement("A"), b.insertNode(d)) : z.Nt && (b.pasteHTML("\x3ca id\x3d'newLink'\x3e\x3c/a\x3e"), d = yF(a).L("newLink"), d.removeAttribute("id"))
  }else {
    var h = "goog_" + z.$s++;
    gG(a, "CreateLink", h);
    (0,z.Ac)(a.t().L().getElementsByTagName("A"), function(a) {
      (0,z.Ca)(a.href, h) && e.push(a)
    });
    e.length && (d = e.pop())
  }
  return XF(d, c, e)
};
var lG = function(a) {
  var b = OF((0,z.Uz)(a.t()), a.t().L());
  (0,z.tz)((0,z.ly)(b, function(a, d, e) {
    return 1 == e.Fb && b.containsNode(a)
  }), function(a) {
    (0,z.Zd)(a, "font-size", "");
    z.K && 0 == a.style.length && null != a.getAttribute("style") && a.removeAttribute("style")
  })
};
var nG = function(a) {
  (0,z.tz)(a.Nd(), function(a) {
    "Apple-style-span" == a.className && (a.style.fontSize = "", a.style.fontWeight = "")
  })
};
var oG = function(a) {
  var b = !1;
  (0,z.tz)(a.Nd(), function(a) {
    var d = a.tagName;
    if("UL" == d || "OL" == d) {
      if(b) {
        if(d = void 0 != a.previousElementSibling ? a.previousElementSibling : (0,z.Uy)(a.previousSibling, !1)) {
          var e = a.ownerDocument.createRange();
          e.setStartAfter(d);
          e.setEndBefore(a);
          if((0,z.Da)(e.toString()) && d.nodeName == a.nodeName) {
            for(;d.lastChild;) {
              a.insertBefore(d.lastChild, a.firstChild)
            }
            d.parentNode.removeChild(d)
          }
        }
      }else {
        b = !0
      }
    }
  })
};
var pG = function(a) {
  for(a = (a = a.Nd()) && a.yc();a && "UL" != a.tagName && "OL" != a.tagName;) {
    a = a.parentNode
  }
  a && (a = a.parentNode);
  if(a) {
    var b = (0,z.cb)(a.getElementsByTagName("UL"));
    (0,z.gb)(b, (0,z.cb)(a.getElementsByTagName("OL")));
    (0,z.Ac)(b, function(a) {
      var b = a.type;
      b && !("UL" == a.tagName ? rG : sG)[b] && (a.type = "")
    })
  }
};
var mG = function(a) {
  var b = [], c = (0,z.Rx)((0,z.Uz)(a.t()));
  do {
    b.push(c)
  }while(c = c.parentNode);
  a = PF((0,z.Yc)((0,z.Uz)(a.t())), (0,z.Yc)(b));
  a = (0,z.ly)(a, z.cy);
  (0,z.tz)(a, function(a) {
    var b = a.style.outline;
    a.style.outline = "0px solid red";
    a.style.outline = b
  })
};
var tG = function(a) {
  var b = null;
  (0,z.tz)(a, function(a, d, e) {
    if(-1 != e.Fb) {
      a = (0,z.Uc)(a, z.cy, !0).tagName;
      b = b || a;
      if(b != a) {
        throw b = null, z.Zc;
      }
      e.nl()
    }
  });
  return b
};
var uG = function(a, b) {
  var c = b.replace("+justify", "").toLowerCase();
  "full" == c && (c = "justify");
  var d = xF(a.t());
  if(d) {
    return c == d.uJ()
  }
  var e = a.Nd();
  if(!e) {
    return!1
  }
  for(var f = (0,z.Rx)(e), d = (0,z.zn)(f.childNodes, function(a) {
    return(0,z.jy)(a) && e.containsNode(a, !0)
  }), d = d.length ? d : [f], f = 0;f < d.length;f++) {
    var h = (0,z.Uc)(d[f], z.cy, !0);
    if(c != vG(h)) {
      return!1
    }
  }
  return!0
};
var vG = function(a) {
  var b = (0,z.de)(a, "textAlign"), b = b.replace(/^-(moz|webkit)-/, "");
  wG[b] || (b = a.align || "left");
  return b
};
var xG = function(a, b, c, d, e) {
  d = eG(d);
  if(e) {
    var f = aG(a);
    f.execCommand("styleWithCSS", !1, !0)
  }
  a = b ? c.queryCommandState(d) : c.queryCommandValue(d);
  e && f.execCommand("styleWithCSS", !1, !1);
  return a
};
var yG = function() {
  z.$.call(this)
};
var zG = function() {
  z.$.call(this)
};
var AG = function() {
  this.Zu = null
};
var BG = function(a, b) {
  this.mC = a;
  this.Vp = b
};
var CG = function(a, b) {
  this.mv = a;
  this.Xg = b
};
var DG = function(a) {
  z.$.call(this);
  this.pm = a.get("media-resource-frames");
  this.Da = new z.uk
};
var EG = function(a) {
  this.de = a
};
var FG = function() {
  z.$.call(this)
};
var GG = function() {
  z.RD.call(this, z.Hv)
};
var HG = function(a) {
  z.$.call(this);
  this.Ea = a;
  this.zC = [a.h("hide", this.tA, this), a.h("update", this.CD, this), a.h("cancelLink", this.Uo, this), a.h("h2", this.yp, this), a.h("h3", this.yp, this), a.h("drop-cap", this.yp, this), a.h("bold", this.tp.bind(this, "M_1"), this), a.h("italic", this.tp.bind(this, "M_2"), this), a.h("blockquote", this.Fz, this), a.h("link", this.tp.bind(this, "+link"), this)];
  this.S = this.Ea.L();
  this.h = this.Ea.h.bind(this.Ea);
  this.eb = null;
  this.ga = [];
  IG(this)
};
var IG = function(a) {
  0 < a.ga.length && ((0,z.pe)(a.ga), a.ga = []);
  a.eb = a.ub("input");
  a.eb && (a.ga.push((0,z.L)(a.eb, "keyup", a.dq, a)), a.ga.push((0,z.L)(a.eb, "blur", a.TA, a)))
};
var JG = function(a) {
  (0,z.Gx)(a.Ea);
  a.t().hg();
  var b = a.eb.value;
  b.match(/^[a-z]+:/i) || (b = "http://" + b);
  if(a.Vd) {
    var c = TF(a.Vd);
    VF(a.Vd, c || b, b);
    WF(a.Vd);
    a.Vd = null
  }
  a.t().pf();
  (0,z.Vz)(a.t())
};
var KG = function(a, b, c, d) {
  z.oD.call(this, b);
  this.w = a;
  this.aa(new z.UC);
  this.aa(new $F);
  this.aa(new FG);
  this.aa(new z.qD(c));
  this.aa(new z.EC);
  this.aa(new zG);
  this.aa(new DG(this.w));
  this.aa(new GG);
  this.aa(new z.MD(!0));
  this.aa(new z.WD(!0));
  d && this.aa(new HG(d));
  (0,z.P)("variants.show_editor_inspector") && this.aa(new yG)
};
var LG = function(a, b, c) {
  this.ez = a;
  this.Xg = b;
  this.jD = c
};
var MG = function(a, b) {
  this.KA = a;
  this.AA = b
};
var NG = function(a, b, c) {
  return'\x3cbutton class\x3d"btn-chromeless icons icons-remove" data-action\x3d"remove-inline-image"\x3e\x3c/button\x3e' + (c.variants.enable_image_layout ? '\x3cdiv class\x3d"resize-inline-image"\x3e\x3cbutton class\x3d"btn-chromeless icons icons-enlarge enlarge-btn" data-action\x3d"enlarge-inline-image"\x3e\x3c/button\x3e\x3cbutton class\x3d"btn-chromeless icons icons-shrink shrink-btn" data-action\x3d"shrink-inline-image"\x3e\x3c/button\x3e\x3c/div\x3e\x3cspan class\x3d"drag-messaging"\x3e(Drag to move)\x3c/span\x3e' : 
  "")
};
var OG = function(a) {
  z.$.call(this);
  this.w = a;
  this.Mg = a.get("image");
  this.ia = a.get("dom-monitor");
  this.J = a.get("dialog");
  a = window.document.createElement("div");
  a.className = "inline-tooltip";
  a.innerHTML = '\x3cspan class\x3d"inline-tooltip-control"  data-action\x3d"pick-inline-image"\x3e\x3cspan class\x3d"inline-tooltip-text"\x3eAdd Image\x3c/span\x3e\x3cspan class\x3d"icons icons-add-circled"\x3e\x3c/span\x3e\x3c/span\x3e';
  this.fh = a;
  a = window.document.createElement("div");
  a.className = "inline-media-overlay";
  a.innerHTML = (0,z.tf)(NG);
  a.draggable = !0;
  this.kc = a;
  this.Nm = {};
  this.Qj = null;
  this.em = !1;
  this.Lg = new z.Sk;
  this.Lg.h("start", this.pA, this);
  this.Lg.h("success", this.qA, this);
  this.Lg.h("error", this.nA, this);
  this.Lg.h("preview", this.oA, this);
  this.ze = this.$a = null;
  this.rp = this.qp = 0
};
var PG = function(a) {
  var b = a.Jo;
  return b ? (0,z.Py)(a.t().L(), b) : null
};
var QG = function(a, b) {
  var c = a.t().L(), d = b.getBoundingClientRect(), e = c.offsetParent.getBoundingClientRect(), c = c.getBoundingClientRect(), f = (0,z.co)(b.parentNode.className);
  a.kc.style.top = d.top - e.top + "px";
  a.kc.style.height = d.bottom - d.top + "px";
  1 == f || 3 == f && c.left < d.left ? (a.kc.style.left = c.left - e.left + "px", a.kc.style.width = c.right - c.left + "px") : (a.kc.style.left = d.left - e.left + "px", a.kc.style.width = d.right - d.left + "px")
};
var RG = function(a, b, c) {
  var d = b && b.querySelector("img"), d = d && d.getAttribute("data-id");
  (0,z.JC)(new MG(b, c), a.t());
  a.$g();
  d && SG(a, d)
};
var TG = function(a, b) {
  var c = a.Fd && UG(a, a.Fd);
  if(!c) {
    return a.Fd = null, (0,z.Ob)(!0)
  }
  (0,z.JC)(HF(c.parentNode, b), a.t());
  a.$g();
  return SG(a, a.Fd)
};
var SG = function(a, b) {
  var c = UG(a, b), d = c && c.getAttribute("data-delayed-src");
  return d ? (0,z.y)(a.Mg.load(d), function() {
    if(c = UG(this, b)) {
      c.src = d
    }
  }, a) : (0,z.Ob)(!0)
};
var UG = function(a, b) {
  return a.t().L().querySelector('[data-id\x3d"' + b + '"]')
};
var VG = function(a, b) {
  var c = b.getAttribute("name");
  c || b !== a.t().L() || (c = "@");
  if(!c) {
    return null
  }
  if(!a.Nm[c]) {
    var d = a.t().L().offsetParent, d = (0,z.he)(b, d);
    a.Nm[c] = {top:d.y, bottom:d.y + b.offsetHeight}
  }
  return a.Nm[c]
};
var WG = function(a, b) {
  if(!a.Qd()) {
    var c = a.t().L(), d = b.clientY - c.offsetParent.getBoundingClientRect().top, e = (0,z.Me)(c);
    e.length || (e = [c]);
    a.Qj = null;
    a.em = !1;
    a: {
      for(var c = e, f = e = 0;f < c.length;f++) {
        var h = c[f], k = VG(a, h), l = 10, m = 10;
        0 === f ? l = 30 : m = (k.top - VG(a, c[f - 1]).bottom) / 2;
        f === c.length - 1 ? m = 60 : l = (VG(a, c[f + 1]).top - k.bottom) / 2;
        var r = k && k.top - l <= d && d < k.bottom + m, h = (0,z.Le)(h);
        if(r) {
          for(l = k.top - l, r = 0;r < h.length;r++) {
            var C = VG(a, h[r]);
            if(l <= d && d < C.top + 10) {
              a.fh.style.top = Math.round((C.top + l) / 2) + "px";
              a.Qj = e;
              a.em = !0;
              break a
            }
            l = C.bottom;
            e++;
            if(r === h.length - 1 && l < d && d < k.bottom + m) {
              a.fh.style.top = Math.round((l + k.bottom + m) / 2) + "px";
              a.Qj = e;
              a.em = !1;
              break a
            }
          }
        }else {
          e += h.length
        }
      }
    }
    d = null !== a.Qj;
    (0,z.cd)(a.fh, "inline-tooltip-active", d);
    d || a.li()
  }
};
var XG = function(a) {
  z.$.call(this);
  this.Gc = a
};
var YG = function(a, b, c) {
  z.D.call(this);
  this.Yk = a;
  this.Kr = b;
  this.qe = c;
  this.br = (0,z.wa)(this.sF, this)
};
var ZG = function() {
  z.$.call(this);
  this.Vs = null;
  this.BC = new YG(this.av, $G, this)
};
var aH = function() {
  z.$.call(this)
};
var bH = function(a, b, c, d) {
  z.oD.call(this, b);
  this.w = a;
  this.aa(new z.UC);
  this.aa(new $F);
  this.aa(new FG);
  this.aa(new ZG);
  this.aa(new z.qD(c));
  this.aa(new z.EC);
  this.aa(new zG);
  this.aa(new DG(this.w));
  this.aa(new GG);
  this.aa(new z.MD(!0));
  this.aa(new aH);
  this.aa(new z.WD(!0));
  d && this.aa(new HG(d));
  (0,z.P)("variants.show_editor_inspector") && this.aa(new yG)
};
var cH = function(a, b) {
  z.Ml.call(this, a, b)
};
var dH = function() {
  return'\x3cbutton class\x3d"btn btn-small" title\x3d"Edit Display Author" data-action\x3d"edit-display-author"\x3eEdit Display Author\x3c/button\x3e'
};
var eH = function(a) {
  return'\x3cinput type\x3d"text" class\x3d"display-author-input" placeholder\x3d"Enter the displayed author name here" value\x3d"' + (0,z.V)(a.displayAuthor) + '"/\x3e\x3cbutton class\x3d"btn btn-primary btn-tiny" data-action\x3d"save-display-author"\x3eUpdate\x3c/button\x3e'
};
var fH = function(a, b, c) {
  z.D.call(this);
  this.V = b;
  this.lc = a.get("popover");
  this.Aq = a.get("request");
  this.U = a.get("datastore");
  this.El = window.document.createElement("li");
  this.El.innerHTML = (0,z.tf)(dH);
  (0,z.Hc)(c, this.El, 0);
  (0,z.wg)(this.El).g("edit-display-author", this.Dd, this);
  (0,z.rg)("save-display-author", this.ad, this)
};
var gH = function(a, b) {
  this.U = a.get("datastore");
  this.V = b;
  this.Mf = this.wi = null
};
var hH = function(a, b) {
  a.V = b.id || null;
  a.V && (0,z.xi)(a.U, b);
  a.wi = b.versionId;
  a.Mf || (a.Mf = a.wi);
  if(!a.isPublished() && a.V && a.U.Ba.drafts) {
    var c = a.U.Ba.drafts;
    c.hl(String(a.V));
    c.jh(b, 0)
  }
};
var iH = function(a) {
  var b = a.Pc();
  b.set("latestPublishedVersion", b.get("latestVersion"));
  b.set("acceptedAt", Date.now());
  a.U.Ba.drafts && a.U.Ba.drafts.hl(String(a.V))
};
var jH = function(a, b) {
  z.Hk.call(this);
  this.Ae = a;
  this.ia = b.get("dom-monitor")
};
var kH = function(a, b, c) {
  z.Xi.call(this, a);
  this.Zt = (0,z.Ca)(b.path, "/edit");
  this.ea = new gH(a, b.postId);
  this.na = b.collectionSlug || null;
  this.qk = a.get("twitter");
  this.ei = c || {};
  this.Wg = c.Zk || this.na || "";
  this.gn = "";
  this.Jf = [];
  this.uc = this.Oj = this.sj = this.Zm = this.dg = null;
  this.ba = a.get("app");
  this.U = a.get("datastore");
  this.ha = a.get("request");
  this.J = a.get("dialog");
  this.ia = a.get("dom-monitor");
  this.lc = a.get("popover");
  this.Kf = new z.Ab;
  this.ci = this.Sg = this.Wd = null;
  this.ga = [];
  this.Ta = (0,z.Yi)(this, "butter-bar");
  this.Zo = (0,z.Yi)(this, "coreactions");
  this.Up = [];
  this.Ws = a.get("activity-monitor");
  this.qu = Math.round(1E4 * Math.random());
  this.Ky = (0,z.Vk)(5E3, this.GC, this);
  this.Dc = new z.Kl
};
var lH = function(a) {
  return!a.nj && (!!a.Wd || mH(a) || nH(a) || (a.Sg ? !oH(a).Wb(a.Sg) : !1))
};
var pH = function(a, b) {
  b.h("change", a.Mt.bind(a, b));
  a.Jf.push(b)
};
var qH = function(a, b, c) {
  b != a.ik && (a.ik = b, c || a.Yf())
};
var mH = function(a) {
  return(0,z.Lb)(a.Jf, function(a) {
    return a.Qd()
  })
};
var nH = function(a) {
  for(var b = 0;b < a.Up.length;b++) {
    if(a.Up[b].Qd()) {
      return!0
    }
  }
  return!1
};
var rH = function(a, b) {
  qH(a, "publishing");
  var c = {};
  b && (c.collectionId = b);
  return(0,z.y)(a.ha.post("/p/" + a.ea.xa() + "/publish", c, {Z:!0}), a.EB, a)
};
var sH = function(a) {
  a.Wd && (a.Wd.cancel(), a.Wd = null)
};
var tH = function(a, b) {
  return a.ba.navigate(b, {hash:a.ei.hash, Zk:a.Wg, $b:a.ei.$b})
};
var uH = function(a) {
  var b = (0,z.pD)(a.uc), c = {collectionSlug:a.na, postIds:[a.ea.xa()]};
  (0,z.wj)(b).forEach(function(a) {
    4 == a.l() ? c.imageCount = c.imageCount ? c.imageCount + 1 : 1 : 11 == a.l() && (c.iframeCount = c.iframeCount ? c.iframeCount + 1 : 1)
  });
  return c
};
var vH = function(a) {
  DF(a.U, a.ea.xa());
  return(0,z.y)((0,z.A)(BF(a.J, "This post has been deleted in another composer window.  Would you like to recover the post?", "Post Deleted", "Recover"), function() {
    this.nj = !0;
    this.ba.navigate("")
  }, a), function() {
    (0,z.gc)(this.Gc);
    (0,z.gc)(this.cc);
    this.Gc = this.cc = null;
    sH(this);
    this.ci = null;
    this.Sg = new z.lm;
    this.ea = new gH(this.w, null);
    qH(this, "unsaved");
    this.ad()
  }, a)
};
var wH = function(a) {
  var b = [];
  a.dg.la() || b.push("title");
  a.uc.la() || b.push(xH.body.englishName);
  0 === b.length ? b = "" : 1 === b.length ? b = "the " + b[0] : (a = b.pop(), b = "the " + b.join(", the ") + " and the " + a);
  return b
};
var oH = function(a) {
  var b = a.dg ? a.dg.la() : "", c = new z.mm;
  a.uc.la() && (0,z.jx)(c, (0,z.pD)(a.uc));
  var d = a.sj.la();
  d && (0,z.O)(c, "caption", d);
  (d = a.Oj.la()) && c.ml(d);
  (d = a.Zm.la()) && (0,z.O)(c, "subtitle", d);
  b = (new z.lm).Kh(b).We(c);
  b = (0,z.O)(b, "collectionSlug", a.na);
  a.ea.xa() && b.Cf(a.ea.xa());
  return b
};
var yH = function(a, b) {
  return a.R(".post-field." + b)
};
var zH = function(a) {
  var b = a.R(".post-article");
  return b && "false" != b.getAttribute("data-allow-notes") && 1E3 < window.document.body.clientWidth && (0,z.Ox)(a.U).get("allowNotes")
};
var AH = function(a) {
  window.clearInterval(a.tj);
  a.tj = window.setInterval(a.lt.bind(a), 2E4)
};
var BH = function(a, b) {
  z.Xi.call(this, a);
  this.wb = b.path;
  this.U = a.get("datastore");
  this.mc = (this.Mp = -1 != this.wb.indexOf("shared")) ? "shared-drafts" : "drafts"
};
z.mf.prototype.xa = (0,z.u)(58, function() {
  return(0,z.N)(this, "postId")
});
z.yq.prototype.xa = (0,z.u)(57, function() {
  return(0,z.N)(this, "postId")
});
z.zq.prototype.xa = (0,z.u)(56, function() {
  return(0,z.N)(this, "postId")
});
z.$h.prototype.hl = (0,z.u)(51, function(a) {
  return(a = (0,z.bi)(this, "id", a)) ? this.remove(a) : !1
});
z.Sp.prototype.hl = (0,z.u)(50, function() {
  throw Error("Not implemented");
});
z.ad.prototype.nl = (0,z.u)(49, function() {
  var a = this.Ib ? -1 : 1;
  this.Fb == a && (this.Fb = -1 * a, this.depth += this.Fb * (this.Ib ? -1 : 1))
});
z.td.prototype.nl = (0,z.u)(48, function() {
  z.td.s.nl.apply(this);
  if((0,z.Kc)(this.C, this.oa)) {
    throw z.Zc;
  }
});
z.pd.prototype.po = (0,z.u)(30, function(a) {
  this.isCollapsed() || this.sd();
  return this.insertNode(a, !0)
});
z.Md.prototype.po = (0,z.u)(29, function(a) {
  a = this.insertNode(a, !0);
  this.isCollapsed() || this.sd();
  return a
});
z.vd.prototype.sd = (0,z.u)(28, function() {
  var a = this.X;
  a.extractContents();
  if(a.startContainer.hasChildNodes() && (a = a.startContainer.childNodes[a.startOffset])) {
    var b = a.previousSibling;
    "" == wF(a) && (0,z.F)(a);
    b && "" == wF(b) && (0,z.F)(b)
  }
});
z.Ad.prototype.sd = (0,z.u)(27, function() {
  if(!this.isCollapsed() && this.X.htmlText) {
    var a = this.fa(), b = this.ua(), c = this.X.text, d = this.X.duplicate();
    d.moveStart("character", 1);
    d.moveStart("character", -1);
    d.text == c && (this.X = d);
    this.X.text = "";
    this.Kd();
    c = this.fa();
    d = this.Va();
    try {
      var e = a.nextSibling;
      a == b && a.parentNode && a.nodeType == z.Rc && e && e.nodeType == z.Rc && (a.nodeValue += e.nodeValue, (0,z.F)(e), this.X = (0,z.Bd)(c), this.X.move("character", d), this.Kd())
    }catch(f) {
    }
  }
});
z.Jd.prototype.sd = (0,z.u)(26, function() {
  (0,z.Ld)(this).sd();
  this.Kd()
});
z.Md.prototype.sd = (0,z.u)(25, function() {
  if(this.X) {
    for(var a = [], b = 0, c = this.X.length;b < c;b++) {
      a.push(this.X.item(b))
    }
    (0,z.Ac)(a, z.F);
    this.collapse(!1)
  }
});
z.kx.prototype.sd = (0,z.u)(24, function() {
  (0,z.Ac)((0,z.qd)(this), function(a) {
    a.sd()
  })
});
z.oD.prototype.Zn = (0,z.u)(12, function(a) {
  this.field.dispatchEvent("distraction-free-" + (a ? "on" : "off"))
});
var CH = /[^A-Za-z0-9\s]/g, DH = /\s+/, xH = {image:{type:"image", defaultValue:null, englishName:"image", Ww:!0, DL:["caption"], strategy:{cover:{type:"crop-preserve", height:0.42}, contain:{type:"resample", width:700}}}, caption:{type:"oneliner", defaultValue:"Photo description / credit (optional)", englishName:"image caption", Ww:!0, eF:!0}, body:{type:"html", defaultValue:"Type your post", englishName:"article text", iJ:!0}, subtitle:{type:"oneliner", defaultValue:"Type your subtitle", englishName:"subtitle", 
Ww:!0}};
SF.prototype.hc = (0,z.ca)("Vq");
SF.prototype.lE = function(a) {
  var b;
  b = TF(this);
  (b = YF(b) ? 0 > b.search(/:/) ? "http://" + b.replace(/^[\s\xa0]+/, "") : b : ZF.test(b) ? "mailto:" + b : null) ? (this.hc().href = b, WF(this), a.execCommand("updateLinkBubble")) : a.execCommand("link", this)
};
var ZF = /^[\w-]+(\.[\w-]+)*\@([\w-]+\.)+(\d+|\w\w+)$/i;
RF("Link");
RF("Edit Link");
RF("Text to display:");
var EH = RF("Link to:");
RF("Web address");
RF("Link to a page or file somewhere else on the web");
RF("Test this link");
RF("{$startBold}Not sure what to put in the box?{$endBold} First, find the page on the web that you want to link to. (A {$searchEngineLink}search engine{$endLink} might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.", {startBold:"\x3cb\x3e", endBold:"\x3c/b\x3e", searchEngineLink:"\x3ca href\x3d'http://www.google.com/' target\x3d'_new'\x3e", endLink:"\x3c/a\x3e"});
RF("To what URL should this link go?");
RF("Email address");
RF("Link to an email address");
RF("Invalid email address");
RF("To what email address should this link?");
RF("{$preb}Be careful.{$postb} Remember that any time you include an email address on a web page, nasty spammers can find it too.", {preb:"\x3cb\x3e", postb:"\x3c/b\x3e"});
RF("Open this link in a new window");
RF("Image");
(0,z.v)($F, z.$);
$F.prototype.Wa = (0,z.n)("BTF");
var FH = (0,z.rb)({$G:"+link", DG:"+formatBlock", OG:"+indent", fH:"+outdent", qH:"+strikeThrough", JG:"+insertHorizontalRule", rH:"+subscript", sH:"+superscript", wH:"+underline", oG:"+bold", VG:"+italic", CG:"+fontSize", BG:"+fontName", AG:"+foreColor", jG:"+backColor", eH:"+insertOrderedList", zH:"+insertUnorderedList", WG:"+justifyCenter", XG:"+justifyFull", ZG:"+justifyRight", YG:"+justifyLeft"});
z.q = $F.prototype;
z.q.tf = function(a) {
  return a in FH
};
z.q.Nd = function() {
  return(0,z.Uz)(this.t())
};
z.q.ow = function(a, b) {
  var c, d, e, f, h, k = b;
  switch(a) {
    case "+backColor":
      if(null !== k) {
        if(z.Xt) {
          d = k;
          e = (0,z.Uz)(this.t());
          var l, m;
          e && e.isCollapsed() && (l = yF(this).createTextNode(z.K ? " " : ""), k = e.fa(), m = 1 == k.nodeType ? k : k.parentNode, "" == m.innerHTML ? (m.style.textIndent = "-10000px", m.appendChild(l)) : (m = yF(this).pb("span", {style:"text-indent:-10000px"}, l), e.po(m)), (0,z.Sd)(l).select());
          gG(this, "hiliteColor", d, !1, !0);
          l && (z.K && (l.data = ""), m.style.textIndent = "")
        }else {
          z.Id ? gG(this, "hiliteColor", k) : gG(this, a, k)
        }
      }
      break;
    case "+link":
      a: {
        h = k;
        this.t().Un || yF(this).Mb().focus();
        e = (d = this.Nd()) && (0,z.Rx)(d);
        if((e = (0,z.Tc)(e, "A")) && (0,z.Uc)(e, FF)) {
          (0,z.Ic)(e)
        }else {
          if(h = qG(this, d, h)) {
            if(!this.t().execCommand("link", h)) {
              if(d = this.t().on.prompt(EH, "http://")) {
                VF(h, TF(h) || d, d), WF(h)
              }else {
                d = (0,z.Sd)(h.hc());
                d = new z.Ay(d);
                UF(h);
                d.restore().select();
                h = null;
                break a
              }
            }
            break a
          }
        }
        h = null
      }
      break;
    case "+justifyCenter":
    ;
    case "+justifyFull":
    ;
    case "+justifyRight":
    ;
    case "+justifyLeft":
      gG(this, a, null, !1, !0);
      z.K && gG(this, a, null, !1, !0);
      z.Vt && z.K || (0,z.tz)((0,z.Uz)(this.t()), fG);
      break;
    default:
      z.B && "+formatBlock" == a && k && (k = "\x3c" + k + "\x3e");
      if("+foreColor" == a && null === k) {
        break
      }
      switch(a) {
        case "+indent":
        ;
        case "+outdent":
          z.Vt && (z.K && (d = !0), z.Id && (d = "+outdent" == a ? !aG(this).queryCommandEnabled("outdent") : !0));
        case "+insertOrderedList":
        ;
        case "+insertUnorderedList":
          if(l = z.cu) {
            l = aG(this), l = xG(this, !0, l, a, void 0)
          }
          l ? e = "P" != this.t().queryCommandValue("+defaultTag") : z.du || bG(this);
          z.K && z.bu && !this.queryCommandValue(a) && (l = this.t().queryCommandValue("+defaultTag"), "P" == l || "DIV" == l ? l = !1 : (l = this.Nd(), l.isCollapsed() && l.yc().nodeType != z.Rc ? (c = yF(this).createTextNode(" "), l.insertNode(c, !1), (0,z.Sd)(c).select(), l = !0) : l = !1), f |= l);
        case "+formatBlock":
          c = !!xF(this.t());
          break;
        case "+subscript":
        ;
        case "+superscript":
          z.au && !this.queryCommandValue(a) && (l = "+subscript" == a ? "+superscript" : "+subscript", m = eG(l), this.queryCommandValue(l) || aG(this).execCommand(m, !1, null), aG(this).execCommand(m, !1, null));
          break;
        case "+underline":
        ;
        case "+bold":
        ;
        case "+italic":
          d = z.K && z.Vt && this.queryCommandValue(a);
          break;
        case "+foreColor":
        ;
        case "+fontName":
          d = z.Vt && z.K
      }
      gG(this, a, k, c, !!d);
      f && aG(this).execCommand("Delete", !1, !0);
      e && aG(this).execCommand("FormatBlock", !1, "\x3cdiv\x3e")
  }
  if(d = z.K) {
    d = !this.t().IE
  }
  d && yF(this).Mb().focus();
  return h
};
z.q.queryCommandValue = function(a) {
  var b;
  switch(a) {
    case "+link":
      return a = (a = this.Nd()) && (0,z.Rx)(a), a = (0,z.Tc)(a, "A"), !!a && !!(0,z.Uc)(a, FF);
    case "+justifyCenter":
    ;
    case "+justifyFull":
    ;
    case "+justifyRight":
    ;
    case "+justifyLeft":
      return uG(this, a);
    case "+formatBlock":
      return tG((0,z.Uz)(this.t()));
    case "+indent":
    ;
    case "+outdent":
    ;
    case "+insertHorizontalRule":
      return!1;
    case "+fontSize":
    ;
    case "+fontName":
    ;
    case "+foreColor":
    ;
    case "+backColor":
      return this.no(aG(this), a, z.Vt && z.K);
    case "+underline":
    ;
    case "+bold":
    ;
    case "+italic":
      b = z.Vt && z.K;
    default:
      var c = aG(this);
      return xG(this, !0, c, a, b)
  }
};
z.q.Cx = function(a) {
  z.Tt && a.match(/^\s*<script/i) && (a = "\x26nbsp;" + a);
  z.Ut && (a = a.replace(/<(\/?)strong([^\w])/gi, "\x3c$1b$2"), a = a.replace(/<(\/?)em([^\w])/gi, "\x3c$1i$2"));
  return a
};
z.q.un = function(a) {
  a = a.getElementsByTagName("IMG");
  for(var b = 0, c;c = a[b];b++) {
    if(z.B) {
      c.removeAttribute("tabIndex");
      c.removeAttribute("tabIndexSet");
      var d = c;
      "removeAttribute" in d && d.removeAttribute(z.ra);
      try {
        delete d[z.ra]
      }catch(e) {
      }
      c.qF && (c.tabIndex = c.qF)
    }
  }
};
z.q.YD = function(a) {
  if(z.Wc) {
    for(var b = this.t(), b = (0,z.qc)(b.Rb.vb, "HEAD", void 0, void 0), c = [], d = b.length, e = 1;e < d;++e) {
      for(var f = b[e].getElementsByTagName("STYLE"), h = f.length, k = 0;k < h;++k) {
        c.push(f[k].outerHTML)
      }
    }
    return c.join("") + a
  }
  return a
};
z.q.On = function(a, b, c) {
  if(!c) {
    return!1
  }
  var d;
  switch(b) {
    case "b":
      d = "+bold";
      break;
    case "i":
      d = "+italic";
      break;
    case "u":
      d = "+underline";
      break;
    case "s":
      return!0
  }
  return d ? (this.t().execCommand(d), !0) : !1
};
var cG = z.B ? /<br([^\/>]*)\/?>/gi : /<br([^\/>]*)\/?>(?!<\/(div|p)>)/gi, iG = {indent:1, outdent:1, insertOrderedList:1, insertUnorderedList:1, justifyCenter:1, justifyFull:1, justifyRight:1, justifyLeft:1, ltr:1, rtl:1}, hG = {insertOrderedList:1, insertUnorderedList:1}, sG = {1:1, a:1, A:1, i:1, I:1}, rG = {disc:1, circle:1, square:1}, jG = {justifyCenter:1, justifyFull:1, justifyRight:1, justifyLeft:1, formatBlock:1}, kG = {insertOrderedList:1, insertUnorderedList:1}, wG = {center:1, justify:1, 
right:1, left:1};
$F.prototype.no = function(a, b, c) {
  return xG(this, !1, a, b, c)
};
(0,z.v)(yG, z.$);
yG.prototype.Wa = (0,z.wb)("DebugPlugin");
yG.prototype.enable = function(a) {
  yG.s.enable.call(this, a);
  a.addEventListener(z.Fz, this.zd, !1, this);
  this.pa = window.document.createElement("pre");
  this.pa.style.position = "fixed";
  this.pa.style.top = "65px";
  this.pa.style.marginBottom = "-65px";
  this.pa.style.left = "10px";
  this.pa.style.height = "100%";
  this.pa.style.width = "400px";
  this.pa.style.fontSize = "x-small";
  this.pa.style.overflow = "auto";
  window.document.body.appendChild(this.pa);
  this.zd(null)
};
yG.prototype.disable = function(a) {
  yG.s.disable.call(this, a);
  a.removeEventListener(z.Fz, this.zd, !1, this);
  this.pa && (window.document.body.removeChild(this.pa), this.pa = null)
};
yG.prototype.zd = function() {
  var a = (0,z.bA)(this.t()).replace(/\n/g, ""), a = a.replace(/<\/(p|h2|h3|blockquote)>/g, "\x3c/$1\x3e\n\n");
  this.pa.innerHTML = (0,z.Fa)(a).replace(/\n/g, "\x3cbr\x3e")
};
(0,z.v)(zG, z.$);
zG.prototype.Wa = (0,z.wb)("DisableLinksPlugin");
zG.prototype.enable = function(a) {
  zG.s.enable.call(this, a);
  (0,z.yr)(a.Hb, "click", this.Zl, !1, this)
};
zG.prototype.disable = function(a) {
  (0,z.Hr)(a.Hb, "click", this.Zl, !1, this);
  zG.s.disable.call(this, a)
};
zG.prototype.Zl = function(a) {
  "A" == a.target.tagName && (a.preventDefault(), a.stopPropagation())
};
(0,z.v)(AG, z.IC);
AG.prototype.Tc = function(a) {
  var b = a.getSelection(), c = b.start.da, d = b.start.offset, e = (0,z.kC)(a, c), f = b.end.da, h = (0,z.zC)(a, c);
  (0,z.BD)(e, b.start.offset);
  (0,z.pC)(a, !1);
  c != f ? a.tc(c + 1, 0) : e.text || 10 != e.type && 9 != e.type ? (b = a.Sc() && (0,z.zC)(a, c - 1) !== h ? null : (0,z.kC)(a, c - 1), 0 === d && 0 < c && !(b && 5 != b.type || 1 != e.type || e.text) ? a.tc(c, 0) : (d = e.split(d), d.type = d.text ? e.type : 10 == e.type || 9 == e.type ? e.type : 1, f = !1, b && 1 == e.type && !e.text && (f = 1 == b.type || !(0,z.Lx)(b.type) && !b.text), f && !a.Sc() && (e.type = 5), e.text || !d.text && !f || (d.name = e.name, e.name = ""), f && a.Sc() ? (h && 
  (0,z.Ij)(h) == c || (0,z.BC)(a, c, new z.Hj), a.tc(c, 0)) : ((0,z.mC)(a, c), (0,z.iC)(a, c + 1, d), a.tc(c + 1, 0), (e = (0,z.kC)(a, c)) && AF(e) && (this.Zu = a.Aa[c])))) : (e.type = 1, (0,z.mC)(a, c), a.tc(c, 0))
};
(0,z.v)(BG, z.IC);
BG.prototype.Tc = function(a) {
  var b = (0,z.Ya)(a.Aa, this.mC), c = (0,z.kC)(a, b).Wc();
  c.jc(11);
  var d = (0,z.Dj)((0,z.Cj)((0,z.Ye)(new z.Bj, !0).to((0,z.Wh)(this.Vp, "mediaResourceId")), (0,z.Xh)(this.Vp, "iframeWidth")), (0,z.Xh)(this.Vp, "iframeHeight"));
  (0,z.O)(c, "iframe", d);
  (0,z.mC)(a, b, (0,z.un)(c));
  (0,z.oC)(a)
};
(0,z.v)(CG, z.IC);
CG.prototype.Tc = function(a) {
  var b = (0,z.zC)(a, this.Xg), c = b.Md().fields, d;
  for(d in c) {
    "startIndex" != d && (0,z.bf)(this.mv, d) && (0,z.O)(b, d, (0,z.N)(this.mv, d))
  }
  d = this.Xg;
  var e = (0,z.lC)(a), c = (0,z.zC)(a, d);
  if((0,z.Ij)(c) !== d) {
    throw Error("Section not found at " + d);
  }
  e = e.indexOf(c);
  c = (0,z.Cc)((0,z.Pn)(c, z.sf) + "\x3c/div\x3e\x3c/section\x3e");
  d = (0,z.Va)(c.childNodes, z.ze);
  var e = a.wc[e], f = (0,z.Va)(e.childNodes, z.ze);
  (0,z.Fc)(d, f.childNodes);
  (0,z.my)(c, e);
  c = (0,z.lC)(a);
  b = (0,z.Ya)(c, b);
  (0,z.mz)(a.wc[b]);
  (0,z.oC)(a)
};
(0,z.v)(DG, z.$);
DG.prototype.Wa = (0,z.wb)("EnterPlugin");
DG.prototype.Ac = function(a) {
  if(13 == a.keyCode && !a.shiftKey) {
    var b = this.t();
    if(!(0,z.Uz)(b)) {
      return!1
    }
    if((0,z.P)("variants.enable_section_layouts")) {
      var c = (0,z.hC)(b), d = c.getSelection(), e = d.start.da, f = (0,z.kC)(c, e);
      if(d.isCollapsed()) {
        var h;
        "fuckyeahsarahvowell" === f.text ? h = CF((0,z.Lj)((0,z.Kj)(new z.Hj, 2), 2), f.metadata && z.Dk.Fa(f.metadata)) : "fuckyeahpenguins" === f.text && (h = CF((0,z.Lj)((0,z.Kj)(new z.Hj, 1), 1), null));
        null != h && (c = (0,z.Ij)((0,z.zC)(c, e)), (0,z.JC)(new CG(h, c), b))
      }
    }
    h = new AG;
    (0,z.JC)(h, b);
    (0,z.P)("variants.enable_editor_embeds") && (h = h.Zu) && (b = h.querySelector("a").href, h = h.getAttribute("name"), (0,z.y)(this.Da.Ob((0,z.Ex)(this.pm, b)), this.Jy.bind(this, h)));
    a.preventDefault();
    return!0
  }
  return!1
};
DG.prototype.Jy = function(a) {
  var b = this.t(), c = (a = (0,z.Py)(b.L(), a)) && (0,z.ro)(a);
  c && AF(c) && (c = a.querySelector("a").href, (0,z.qx)(this.pm, c) && (c = this.pm.ff[this.pm.Ug[c]], ((0,z.Wh)(c, "iframeSrc") || c.get("tweet")) && (0,z.JC)(new BG(a, c), b)))
};
DG.prototype.q = function() {
  DG.s.q.call(this);
  (0,z.gc)(this.Da)
};
(0,z.v)(EG, z.IC);
var GH = /^(?:1[\.\)]|[\*\-\+])[ \x0A]?/;
EG.prototype.Tc = function(a) {
  var b = a.getSelection(), c = (0,z.kC)(a, b.start.da), d = GH.exec(c.text)[0].length;
  c.type = this.de;
  (0,z.Fn)(c, 0, d);
  (0,z.mC)(a, b.start.da);
  a.tc(b.start.da, b.start.offset - d)
};
(0,z.v)(FG, z.$);
FG.prototype.Wa = (0,z.wb)("ListCreationPlugin");
FG.prototype.Ac = function(a) {
  var b = 32 == a.keyCode, c = 13 == a.keyCode && !a.shiftKey;
  if(b || c) {
    var d = this.t(), e = (0,z.Uz)(d);
    if(!e || !e.isCollapsed()) {
      return!1
    }
    var f = (0,z.pz)(e.yc(), d.L());
    if(!f || 1 != (0,z.jo)(f)) {
      return!1
    }
    var h = (0,z.ro)(f), h = GH.exec(h ? h.text : ""), e = (0,z.Oy)((0,z.ay)(e, !0), f);
    if(!h || !c && e != h[0].length) {
      return!1
    }
    (0,z.JC)(new EG("1" == h[0].charAt(0) ? 10 : 9), d);
    a.preventDefault();
    return b
  }
  return!1
};
(0,z.v)(GG, z.RD);
GG.prototype.Wa = (0,z.wb)("PostSanitizationPlugin");
GG.prototype.un = function() {
  throw Error("Not supported");
};
(0,z.v)(HG, z.sA);
var HH = "+bold +italic +link P_1 P_2 P_3 P_6 P_7".split(" ");
z.q = HG.prototype;
z.q.Wa = (0,z.wb)("HighlightMenuPlugin");
z.q.Rj = !1;
z.q.Vd = null;
z.q.q = function() {
  this.Ea.ig || this.zC.forEach(this.Ea.tl.bind(this.Ea));
  (0,z.pe)(this.ga);
  (0,z.F)(this.S);
  this.S = null;
  HG.s.q.call(this)
};
z.q.tf = function(a) {
  return"link" == a
};
z.q.execCommand = function(a, b) {
  if(this.Rj) {
    return!0
  }
  this.Rj = !0;
  this.Vd = b;
  (0,z.sz)();
  (0,z.Fx)(this.Ea, this.Vd.hc().getBoundingClientRect());
  (0,z.G)(this.S, "highlight-menu-linkmode");
  var c = this.eb;
  c.value = "";
  (0,window.setTimeout)(function() {
    c.focus()
  }, 10);
  (0,z.Vz)(this.t());
  return!0
};
z.q.Cr = function() {
  (0,z.Do)(this.Ea);
  return!1
};
z.q.Qk = function() {
  this.Rj || (0,z.Do)(this.Ea);
  return!1
};
z.q.Pk = function() {
  this.Rj || (0,z.Gx)(this.Ea)
};
z.q.tA = function() {
  this.Rj = !1
};
z.q.CD = function() {
  var a = (0,z.xx)();
  !a || a.isCollapsed() ? (0,z.Gx)(this.Ea) : (0,z.Fx)(this.Ea, a.Oc().getBoundingClientRect());
  var b = this.t();
  a && (0,z.Kc)(b.field, (0,z.Rx)(a)) ? (zF(this.Ea), a = b.queryCommandValue(HH), b = a["+bold"] && !(a.P_2 || a.P_3), (0,z.cd)(this.ub(".highlight-menu-bold"), "active", b), (0,z.cd)(this.ub(".highlight-menu-italic"), "active", a["+italic"]), (0,z.cd)(this.ub(".highlight-menu-anchor"), "active", a["+link"]), (0,z.cd)(this.ub(".highlight-menu-h2"), "active", a.P_2), (0,z.cd)(this.ub(".highlight-menu-h3"), "active", a.P_3), b = this.ub(".highlight-menu-blockquote"), (0,z.cd)(b, "active", a.P_6 || 
  a.P_7), (0,z.cd)(b, "bq-mode", a.P_6), (0,z.cd)(b, "pq-mode", a.P_7)) : (0,z.Bo)(this.Ea);
  IG(this)
};
z.q.TA = function() {
  this.eb.value ? JG(this) : this.Uo()
};
z.q.dq = function(a) {
  13 == a.keyCode ? JG(this) : 27 == a.keyCode && this.Uo()
};
z.q.Uo = function() {
  (0,z.Gx)(this.Ea);
  if(this.Vd) {
    var a = this.Vd.hc().lastChild;
    UF(this.Vd);
    this.Vd = null;
    (0,z.qz)(a, !1)
  }
  this.t().pf()
};
z.q.Fz = function() {
  var a = this.t(), b = a.queryCommandValue(["P_6", "P_7"]);
  b.P_6 ? a.execCommand("P_7") : b.P_7 ? a.execCommand("P_7") : a.execCommand("P_6")
};
z.q.yp = function(a) {
  var b = null;
  if("h2" == a.vd) {
    b = "P_2"
  }else {
    if("h3" == a.vd) {
      b = "P_3"
    }else {
      if("drop-cap" == a.vd) {
        b = "SET_HAS_DROP_CAP"
      }else {
        if("blockquote" == a.vd) {
          b = "P_6"
        }else {
          throw Error("Unrecognized highlight block type: " + a.vd);
        }
      }
    }
  }
  this.t().execCommand(b)
};
z.q.tp = function(a) {
  this.t().execCommand(a)
};
z.q.ub = function(a) {
  return this.S.querySelector(a)
};
(0,z.v)(KG, z.oD);
KG.prototype.nn = function() {
  return"" !== this.la()
};
(0,z.v)(LG, z.IC);
LG.prototype.Tc = function(a) {
  var b = new z.vn(null, "", this.ez, 1, null), c = !1, d = null;
  this.jD && this.Xg && (d = (0,z.zC)(a, this.Xg)) && (0,z.Ij)(d) === this.Xg && (c = !0);
  var e = this.Xg;
  null != e ? (c && (0,z.DC)(a, e), (0,z.iC)(a, e, b), c && (0,z.BC)(a, e, d), a.tc(e, 0)) : (d = a.getSelection(), c = d.start.da, e = (0,z.kC)(a, c), e.text || 1 != e.type ? (d = e.split(d.start.offset), (0,z.mC)(a, c), (0,z.iC)(a, c + 1, b), (0,z.iC)(a, c + 2, d), a.tc(c + 1, 0)) : ((0,z.mC)(a, c, b), a.tc(c, 0)))
};
(0,z.v)(MG, z.IC);
MG.prototype.Tc = function(a) {
  var b;
  b = (0,z.sC)(a, this.KA);
  if((b = -1 == b ? null : (0,z.kC)(a, b)) && (4 == b.type || 11 == b.type)) {
    b.layout = this.AA;
    var c = (0,z.Ya)(a.Xd, b);
    (0,z.mC)(a, c);
    a.tc(c, b.text.length)
  }
};
(0,z.v)(OG, z.$);
z.q = OG.prototype;
z.q.vi = null;
z.q.Fd = null;
z.q.dn = null;
z.q.Jo = null;
z.q.ga = null;
z.q.Wl = !1;
z.q.tm = 0;
z.q.xu = 0;
z.q.Wa = (0,z.wb)("MediaPlugin");
z.q.enable = function(a) {
  OG.s.enable.call(this, a);
  a.addEventListener(z.Fz, this.zd, !1, this);
  a = a.L();
  (0,z.Gc)(this.fh, a);
  (0,z.Gc)(this.kc, a);
  this.ga = [(0,z.L)(window.document.body, "mousemove", (0,z.Wk)(20, this.Bp, this)), (0,z.L)(a, "mouseover", this.Zz, this), (0,z.L)(this.kc, "mouseover", (0,z.Vk)(50, this.li, this)), (0,z.L)(window.document.body, "dragenter", (0,z.ve)(z.fa)), (0,z.L)(window.document.body, "dragexit", (0,z.ve)(z.fa)), (0,z.L)(window.document.body, "dragover", (0,z.ve)(this.Bp), this), (0,z.L)(a, "dragmove", (0,z.Vk)(50, this.Bp, this)), (0,z.L)(window.document.body, "drop", (0,z.ve)(this.Pz), this), (0,z.L)(this.kc, 
  "dragstart", this.Qz, this)];
  (0,z.rg)("pick-inline-image", this.cA, this);
  (0,z.rg)("remove-inline-image", this.gA, this);
  (0,z.rg)("enlarge-inline-image", this.Nt.bind(this, 3));
  (0,z.rg)("shrink-inline-image", this.Nt.bind(this, 1));
  this.ia.h("resize-end", this.Pm, this);
  this.ia.h("inner-resize-end", this.Pm, this)
};
z.q.disable = function(a) {
  a.removeEventListener(z.Fz, this.zd, !1, this);
  this.ia.ma("resize-end", this.Pm, this);
  this.ia.ma("inner-resize-end", this.Pm, this);
  (0,z.pe)(this.ga);
  (0,z.ug)("pick-inline-image");
  (0,z.ug)("remove-inline-image");
  (0,z.ug)("enlarge-inline-image");
  (0,z.ug)("shrink-inline-image");
  OG.s.disable.call(this, a)
};
z.q.q = function() {
  this.Lg.bb();
  (0,z.F)(this.kc);
  (0,z.F)(this.fh);
  OG.s.q.call(this)
};
z.q.Qk = function() {
  this.$g();
  this.li();
  return!1
};
z.q.Ac = function() {
  this.$g();
  this.li();
  return!1
};
z.q.Qd = function() {
  return!!this.vi
};
z.q.li = function() {
  (0,z.I)(this.fh, "inline-tooltip-active")
};
z.q.$g = function() {
  "none" != this.kc.style.display && (this.kc.style.display = "none")
};
z.q.Pm = function() {
  var a = PG(this);
  (a = a && a.querySelector("img, iframe")) && QG(this, a)
};
z.q.zd = function() {
  this.Nm = {}
};
z.q.cA = function() {
  (0,z.W)(z.fv, {type:"tooltip"});
  this.Qd() || (this.Wl = !0, this.tm = 0, this.Lg.el())
};
z.q.gA = function() {
  var a = PG(this);
  a && (0,z.JC)(IF(a), this.t());
  this.Jo = null;
  this.$g()
};
z.q.Nt = function(a) {
  RG(this, PG(this), a)
};
z.q.Zz = function(a) {
  var b = a.target && "IMG" == a.target.tagName, c = a.target && "IFRAME" == a.target.tagName;
  if((b || c) && !this.ze) {
    a = a.target;
    var d = this.t().L(), c = (0,z.co)(a.parentNode.className);
    this.li();
    this.Jo = (0,z.pz)(a, d).getAttribute("name");
    b && (b = a.width < Number(a.getAttribute("data-width")), (0,z.cd)(this.kc, "enable-enlarge", b && 1 == c), (0,z.cd)(this.kc, "enable-shrink", 3 == c));
    QG(this, a);
    this.kc.style.display = "block"
  }
};
z.q.Bp = function(a) {
  if(this.ze) {
    this.$a.style.left = (0,window.parseInt)(this.$a.style.left, 10) + a.clientX - this.qp + "px";
    this.$a.style.top = (0,window.parseInt)(this.$a.style.top, 10) + a.clientY - this.rp + "px";
    this.qp = a.clientX;
    this.rp = a.clientY;
    var b = this.t().L().getBoundingClientRect();
    this.$a.getBoundingClientRect();
    a = a.clientX - b.left;
    this.ze.className = a < 0.2 * b.width ? "dragging " + (0,z.bo)(4) : a < 0.4 * b.width ? "dragging " + (0,z.bo)(2) : "dragging " + (0,z.bo)(1);
    b = this.ze.querySelector("img, iframe");
    a = b.getAttribute("data-width");
    a >= this.ze.offsetWidth && (b.style.width = a + "px");
    (0,z.Zd)(this.$a, "transform", "scale(" + b.offsetWidth / this.$a.offsetWidth + ")")
  }else {
    this.Wl ? (this.tm++, (0,window.clearTimeout)(this.xu), 3 < this.tm ? (this.Wl = !1, WG(this, a)) : this.xu = (0,window.setTimeout)(function() {
      this.tm = 0
    }.bind(this), 150)) : WG(this, a)
  }
};
z.q.Qz = function(a) {
  if(a.target == this.kc) {
    var b = PG(this);
    (0,z.G)(b, "dragging");
    (0,z.G)(window.document.body, "dragging-body");
    this.ze = b;
    this.qp = a.clientX;
    this.rp = a.clientY;
    var c = b.querySelector("img"), b = b.querySelector("iframe");
    if(c) {
      this.$a = window.document.createElement("img"), this.$a.src = c.src, c.style.width = "auto", c.style.height = "auto"
    }else {
      if(b) {
        this.$a = window.document.createElement("div");
        this.$a.appendChild(b.cloneNode(!1));
        var d = window.document.createElement("div");
        d.className = "dragging-clone-glass";
        this.$a.appendChild(d)
      }else {
        throw Error("no embed to drag");
      }
    }
    c = (c || b).getBoundingClientRect();
    b = a.clientX - c.left + "px " + (a.clientY - c.top) + "px";
    this.$a.className = "dragging-clone";
    this.$a.style.width = c.width + "px";
    this.$a.style.height = c.height + "px";
    this.$a.style.top = c.top + "px";
    this.$a.style.left = c.left + "px";
    (0,z.Zd)(this.$a, "transform-origin", b);
    window.document.body.appendChild(this.$a);
    (0,z.L)(this.$a, "mouseup", this.Lt, this);
    (0,z.L)(this.$a, "mouseout", this.Lt, this);
    (0,z.Xk)(this.$g, this);
    a.preventDefault()
  }
};
z.q.Lt = function() {
  if(this.ze) {
    var a = this.ze.querySelector("img, iframe").getBoundingClientRect(), b = this.$a.getBoundingClientRect(), c = a.left - b.left, a = a.top - b.top, b = (0,z.be)(this.$a, "transform");
    (0,z.Zd)(this.$a, "transform", "translate(" + c + "px, " + a + "px) " + b);
    (0,z.oe)(this.$a, z.cj, (0,z.wa)(this.Rz, this, this.ze));
    this.ze = null
  }
};
z.q.Rz = function(a) {
  (0,z.I)(window.document.body, "dragging-body");
  (0,z.F)(this.$a);
  this.$a = null;
  RG(this, a, (0,z.co)(a.className))
};
z.q.Pz = function(a) {
  !this.Qd() && (0,z.ed)(this.fh, "inline-tooltip-active") && a.dataTransfer && a.dataTransfer.files && a.dataTransfer.files[0] && ((0,z.W)(z.fv, {type:"drop"}), this.Lg.start(a.dataTransfer.files[0]))
};
z.q.pA = function() {
  var a = String(Math.round(Math.random() * Date.now())), b = {mediaId:a, type:"image", metadata:{}};
  (0,z.JC)(new LG(a, this.Qj, this.em), this.t());
  this.vi = b;
  this.Fd = a;
  UG(this, a).src = "";
  this.Wl = !1
};
z.q.oA = function(a, b) {
  var c = this;
  this.Fd && (0,z.y)((0,z.Fl)(b, !0), function(a) {
    this.dn = a;
    var b = this.vi.metadata, f = window.document.createElement("img");
    f.onload = function() {
      b.originalWidth = f.width;
      b.originalHeight = f.height;
      TG(c, function(a) {
        a.metadata.originalWidth = f.width;
        a.metadata.originalHeight = f.height
      })
    };
    f.src = a;
    var h = this.Fd && UG(this, this.Fd);
    h && (h.src = a)
  }, this)
};
z.q.nA = function(a, b) {
  var c = this.Fd && UG(this, this.Fd);
  c && (0,z.JC)(IF(c.parentNode), this.t());
  this.Fd = this.vi = null;
  this.mt();
  this.$g();
  this.li();
  switch(b.Jr) {
    case 413:
      c = (0,z.Qk)();
      break;
    case 415:
      c = (0,z.Rk)();
      break;
    default:
      c = "An error occurred while uploading the inline image, please try again.", (0,z.Ph)(b)
  }
  this.J.error(c)
};
z.q.qA = function(a, b) {
  this.vi.metadata.id = b;
  (0,z.Gb)(TG(this, function(a) {
    a.metadata.id = b
  }), this.mt, this);
  this.Fd = this.vi = null
};
z.q.mt = function() {
  this.dn && (window.URL.revokeObjectURL(this.dn), this.dn = null)
};
(0,z.v)(XG, z.$);
XG.prototype.Wa = (0,z.wb)("NotesPlugin");
XG.prototype.Qk = function() {
  this.Gc.hF();
  return!1
};
(0,z.v)(YG, z.D);
z.q = YG.prototype;
z.q.fj = !1;
z.q.cl = 0;
z.q.Mh = null;
z.q.Ik = function() {
  this.Mh || this.cl ? this.fj = !0 : this.Me()
};
z.q.stop = function() {
  this.Mh && (z.Mb.clearTimeout(this.Mh), this.Mh = null, this.fj = !1)
};
z.q.pause = function() {
  this.cl++
};
z.q.jl = function() {
  this.cl--;
  this.cl || !this.fj || this.Mh || (this.fj = !1, this.Me())
};
z.q.q = function() {
  YG.s.q.call(this);
  this.stop()
};
z.q.sF = function() {
  this.Mh = null;
  this.fj && !this.cl && (this.fj = !1, this.Me())
};
z.q.Me = function() {
  this.Mh = (0,z.xz)(this.br, this.Kr);
  this.Yk.call(this.qe)
};
(0,z.v)(ZG, z.$);
var $G = 100;
z.q = ZG.prototype;
z.q.Wa = (0,z.wb)("ActiveSectionPlugin");
z.q.Qk = function() {
  this.BC.Ik();
  return!1
};
z.q.queryCommandValue = function() {
  return this.av()
};
z.q.ln = z.ct;
z.q.av = function() {
  var a = this.Vs, b;
  var c = (0,z.Uz)(this.t());
  if(c) {
    b = this.t().L();
    var d;
    d = c.fa();
    d = (0,z.Ee)(d, z.De, b);
    c = c.ua();
    b = (0,z.Ee)(c, z.De, b);
    b = d && b && d == b ? d : null
  }else {
    b = null
  }
  b = b && b.getAttribute("name") || null;
  b !== a && (this.Vs = b, this.t().dispatchEvent({type:"SECTION_CHANGE", VK:a, QK:b}));
  return b
};
z.q.tf = function(a) {
  return"ACTIVE_SECTION" === a
};
(0,z.v)(aH, z.$);
aH.prototype.Wa = (0,z.wb)("SectionPlugin");
aH.prototype.tf = function(a) {
  return"new-section" === a
};
aH.prototype.ow = function(a, b) {
  var c = (0,z.hC)(this.t()), d = b || c.Aa.length;
  (0,z.iC)(c, d, new z.tn("", 1, ""));
  (0,z.BC)(c, d, new z.Hj);
  c.tc(d, 0)
};
(0,z.v)(bH, z.oD);
bH.prototype.nn = function() {
  return"" !== this.la()
};
bH.prototype.Sc = z.ct;
(0,z.v)(cH, z.Ml);
cH.prototype.Zv = function(a, b, c, d) {
  return new z.Zy(a, b, c, d)
};
(0,z.v)(fH, z.D);
fH.prototype.Dd = function(a) {
  (0,z.Op)(this.lc, a.target, (0,z.tf)(eH, {displayAuthor:this.U.Pc(this.V).get("displayAuthor") || ""}), "display-author-editor-popover")
};
fH.prototype.ad = function() {
  var a = window.document.querySelector(".display-author-input").value || "";
  (0,z.A)((0,z.y)(this.Aq.put("/p/" + this.V + "/display-author", {postDisplayAuthor:a}, {Z:!0}), function() {
    this.U.Pc(this.V).set("displayAuthor", a);
    this.lc.remove()
  }, this), z.Ph)
};
fH.prototype.q = function() {
  (0,z.wg)(this.El).clear("edit-display-author");
  (0,z.ug)("save-display-author");
  fH.s.q.call(this)
};
gH.prototype.xa = (0,z.ca)("V");
gH.prototype.Pc = function() {
  return this.V ? this.U.Pc(this.V) : null
};
gH.prototype.isPublished = function() {
  var a = this.Pc();
  return!(!a || !a.get("latestPublishedVersion"))
};
(0,z.v)(jH, z.Hk);
z.q = jH.prototype;
z.q.ef = !1;
z.q.jv = 0;
z.q.q = function() {
  jH.s.q.call(this)
};
z.q.W = function() {
  jH.s.W.call(this);
  for(var a = 0;a < this.Ae.length;a++) {
    this.Ae[a].h("change", this.Bu, this)
  }
  this.ia.h("scroll", this.$c, this);
  this.Xa(window, "mousemove", this.MA, this)
};
z.q.ja = function() {
  for(var a = 0;a < this.Ae.length;a++) {
    this.Ae[a].ma("change", this.Bu, this)
  }
  this.ia.ma("scroll", this.$c, this);
  jH.s.ja.call(this)
};
z.q.$c = function() {
  this.ef = !0;
  (0,window.clearTimeout)(this.jv);
  this.jv = (0,window.setTimeout)(function() {
    this.ef = !1
  }.bind(this), 100)
};
z.q.Rg = function() {
  return(0,z.ed)(window.document.body, "distraction-free")
};
z.q.Bu = function() {
  if(!this.Rg()) {
    for(var a = 0;a < this.Ae.length;a++) {
      if(!this.Ae[a].nn()) {
        return
      }
    }
    (0,z.G)(window.document.body, "distraction-free");
    for(a = 0;a < this.Ae.length;a++) {
      this.Ae[a].Zn(!0)
    }
  }
};
z.q.MA = function() {
  if(!this.ef && this.Rg()) {
    (0,z.I)(window.document.body, "distraction-free");
    for(var a = 0;a < this.Ae.length;a++) {
      this.Ae[a].Zn(!1)
    }
  }
};
(0,z.v)(kH, z.Zi);
var IH = {saved:"Saved", saving:"Saving…", unsaved:"Saving…", publishing:"Publishing post…"};
z.q = kH.prototype;
z.q.sb = z.Ni;
z.q.fe = z.xv;
z.q.Dc = null;
z.q.Sf = null;
z.q.nj = !1;
z.q.Vj = null;
z.q.Gc = null;
z.q.wp = null;
z.q.cc = null;
z.q.Qa = null;
z.q.ik = "saved";
z.q.Tl = null;
z.q.pb = function() {
  var a = this.Zt ? "/" + this.cf() + "/edit" : "/_/p/blank" + (this.na ? "?collectionSlug\x3d" + (0,window.encodeURIComponent)(this.na) : "");
  (0,z.Yi)(this, "request").get(a, {Kc:!0}).fg(this.Kf);
  (0,z.y)((0,z.y)((0,z.y)(this.Kf, this.nv, this), this.jf, this), this.Ra, this)
};
z.q.Sd = function(a) {
  this.nv(a);
  this.Kf.Oa(null)
};
z.q.nv = function(a) {
  var b = (0,z.Ki)(a.value, a.references), c = (a = (0,z.Ki)(a.contextCollection, a.references)) ? a.slug : this.na, d = "Editing " + b.title;
  (0,z.Vi)(new z.Ui(d, d, "website"));
  hH(this.ea, b);
  this.na = c;
  return{post:b, collection:a}
};
z.q.jf = function(a) {
  var b = this.o, c;
  c = a.post;
  a = a.collection;
  c.id = this.ea.xa();
  var d = (0,z.sn)(c);
  c = {mode:"edit", post:c, contextCollection:a, xx:(0,z.Mn)(c, d, z.sf, !!(0,z.P)("variants.can_write_stories"))};
  b.innerHTML = (0,z.tf)(z.Pl, c)
};
z.q.Ra = function() {
  this.Xe(new z.Ui("Editing", "Editing", "website"));
  (0,z.wg)(this.o).g("publish", this.eA, this).g("save-draft", this.iA, this).g("share-draft", this.kA, this).g("request-copyedit", this.hA, this).g("cancel", this.Jz, this).g("delete-post", this.Nz, this).g("insert-new-section", this.Uz, this);
  this.Sf = this.R(".metabar-message");
  var a = this.w, b = this.R(".post-title");
  this.dg = new z.YD(b, "Type your title");
  this.dg.aa(new z.ZD(100, !1));
  pH(this, this.dg);
  this.Zm = new z.YD(yH(this, "subtitle"), xH.subtitle.defaultValue);
  pH(this, this.Zm);
  this.sj = new z.YD(yH(this, "caption"), xH.caption.defaultValue);
  pH(this, this.sj);
  var b = this.Oj = new cH(a, yH(this, "image")), c = xH.image.strategy;
  c && (b.D.nk = c);
  b.h(z.Tv, this.Mt.bind(this, b));
  b.h(z.Rv, this.Yf, this);
  b.h(z.Vv, this.Yf, this);
  b.h(z.Wv, this.Yf, this);
  b.h(z.Uv, this.Yf, this);
  this.Jf.push(b);
  b = this.Qa = new z.zo;
  c = zH(this);
  b.Dl = c;
  b.S = window.document.createElement("div");
  b.S.className = "highlight-menu";
  zF(b);
  (0,z.Co)(b);
  (0,z.Gc)(this.Qa.L(), this.R(".notes-source"));
  b = xH.body.defaultValue;
  this.uc = new ((0,z.P)("variants.can_write_stories") ? bH : KG)(this.w, yH(this, "body"), b, this.Qa);
  pH(this, this.uc);
  (0,z.P)("useragent").supportsFileAPI && (a = new OG(a), this.uc.aa(a, !0), this.Up.push(a));
  this.Dc.Ob(new jH(this.Jf, this.w));
  a = this.ea.xa();
  (0,z.P)("variants.can_edit_display_author") && a && (this.Tl = new fH(this.w, a, this.o.querySelector(".metabar-actions-btns")))
};
z.q.Ie = function() {
  return(0,z.P)("variants.can_create_post") ? (0,z.P)("useragent.supportsEdit") ? this.Kf : (0,z.y)(this.Kf, function() {
    this.fi();
    throw new z.Tb(this.Kf);
  }, this) : (0,z.y)((0,z.y)(this.Kf, function() {
    var a = new z.Ab;
    this.J.open({title:"Permission Required", bodyHtml:"Sorry, you don’t currently have permission to post.", type:z.wl}).h("close", a.Oa, a);
    return a
  }, this), function() {
    this.fi();
    throw new z.Tb(this.Kf);
  }, this)
};
z.q.nc = function() {
  (0,z.hm)(window.document.body, ["template-flex-article", "post-edit-mode", "post-edit-mode-initialized"]);
  this.Jf.forEach(function(a) {
    a.W()
  });
  this.uc.field.addEventListener("selectionchange", this.FD, !1, this);
  this.ci = this.Sg = oH(this);
  var a = this.Zt ? this.uc : this.dg;
  (0,z.P)("variants.enable_notes") && (this.Vj = (0,z.A)((0,z.y)((0,z.Mo)(this.w, "notes"), this.bv, this), z.Ph));
  (0,z.P)("variants.enable_followups_in_editor") && (this.wp = this.xq());
  a.focus();
  this.ia.h("resize-end", this.Kg, this);
  this.Kg();
  if(this.ei.scrollTop) {
    var a = this.ei.scrollTop, b = this.R(".image-picker-wrap.no-image");
    b && (a += b.offsetHeight + 20);
    this.sb().scrollTop = a
  }
  this.$s = window.setInterval(this.ad.bind(this, !1), 5E3);
  this.Ws.h("statechange", this.Cu, this);
  AH(this);
  this.ga.push((0,z.L)(window, "keydown", this.xB, this));
  this.ia.h("scroll", this.qv, this);
  this.ga.push((0,z.L)(this.R(".btn-new-section"), "click", this.Iy, this));
  this.ga.push((0,z.L)(window, "mousemove", this.cD, this));
  (0,z.G)(this.o, "can_write_stories");
  this.Dc.W()
};
z.q.pn = function() {
  return lH(this) ? "You have unsaved changes, are you sure you want to navigate away?" : !1
};
z.q.ja = function() {
  this.Dc.ja();
  (0,z.gm)(window.document.body, ["template-flex-article", "post-edit-mode"]);
  this.Jf.forEach(function(a) {
    a.ja()
  });
  this.Vj && this.Vj.cancel();
  this.wp && this.wp.cancel();
  (0,z.gc)(this.Gc);
  (0,z.gc)(this.cc);
  this.cc = this.Gc = null;
  this.ia.ma("resize-end", this.Kg, this);
  this.ia.ma("scroll", this.qv, this);
  window.clearInterval(this.$s);
  window.clearInterval(this.tj);
  this.Ws.ma("statechange", this.Cu, this)
};
z.q.q = function() {
  window.clearInterval(this.$s);
  window.clearInterval(this.tj);
  (0,z.zg)(this.o);
  (0,z.gc)(this.Dc);
  QF(this.Jf);
  this.Jf.length = 0;
  this.dg = this.uc = this.Zm = this.Oj = this.sj = null;
  (0,z.pe)(this.ga);
  (0,z.gc)(this.Qa);
  (0,z.gc)(this.Tl);
  kH.s.q.call(this)
};
z.q.Kg = function() {
  var a = yH(this, "body");
  (0,z.wo)(a);
  (0,z.vo)(a)
};
z.q.cD = z.fa;
z.q.qv = z.fa;
z.q.Iy = function() {
  this.uc.field.execCommand("new-section")
};
z.q.Uz = function(a) {
  var b = (0,z.Ee)(a.target, z.De, this.o);
  a = b.parentNode;
  var c = (0,z.Me)(a), b = c[c.indexOf(b) + 1], c = null;
  b && (b = (0,z.Le)(b)[0], a = (0,z.Le)(a), c = b ? a.indexOf(b) : null);
  this.uc.field.execCommand("new-section", c)
};
z.q.yr = function() {
  return this.na || ""
};
z.q.xB = function(a) {
  (a.metaKey || a.ctrlKey) && 191 === a.keyCode && this.J.open({title:"Keyboard Shortcuts", bodyHtml:LF()});
  (0,z.I)(this.o, "new-section-show")
};
z.q.Yf = function() {
  if(this.gn) {
    this.Sf.innerHTML = this.gn, (0,z.G)(this.Sf, "active")
  }else {
    if((0,z.I)(this.Sf, "active"), this.ea.wi !== this.ea.Mf || "unsaved" != this.ik) {
      switch(this.ik) {
        case "unsaved":
        ;
        case "saved":
        ;
        case "saving":
          this.Sf.innerHTML = IH[this.ik];
          (0,z.G)(this.Sf, "active");
          break;
        case "published":
          var a = this.ea.isPublished() ? null : {postId:this.ea.xa()};
          this.Ta.W(MF(a), "success");
          (0,z.Rp)(this.Ta, function() {
            var a = this.ea.Pc();
            this.qk.ej((0,z.Wh)(a, "title"), (0,z.Wh)(a, "creator.username"), this.ea.xa(), "post-publish")
          }, this);
          (0,z.I)(this.Sf, "active");
          break;
        case "error":
          this.Ta.W("Post could not be saved", "error"), (0,z.I)(this.Sf, "active")
      }
    }
  }
};
z.q.kA = function(a) {
  (0,z.Op)(this.lc, a.target, (0,z.tf)(NF, {BF:"/" + (this.na || "p") + "/" + this.ea.xa()}));
  this.ga.push((0,z.L)(this.lc.R(".text-input-post-url"), "click", function(a) {
    a.target.select()
  }));
  (0,z.W)(z.Au, {collectionSlug:this.na, postIds:[this.ea.xa()]})
};
z.q.hA = function() {
  this.lc.remove();
  (0,z.A)((0,z.y)(this.ha.put("/_/copyedits/" + this.ea.xa()), function() {
    this.J.open({title:"Request Sent", bodyHtml:"Your post has been sent to an editor.", type:z.wl})
  }, this), function() {
    this.J.open({title:"Uh oh!", bodyHtml:"Sorry, your request couldn’t be sent at this time. Please try again later.", type:z.wl})
  }, this)
};
z.q.Nz = function() {
  var a = (0,z.we)(this.R(".post-title")) || "Untitled";
  (0,z.y)(BF((0,z.Yi)(this, "dialog"), "Are you sure? Deleted posts cannot be recovered.", "Delete this post?", "Delete", !0), function() {
    var b = this.Wg, c = {$b:this.ei.$b};
    -1 !== b.indexOf("/" + this.ea.xa()) && (this.na ? b = this.na : (b = "", c = void 0));
    var d = (0,z.fl)(this.ba, b, c);
    this.ea.xa() && (0,z.y)((0,z.A)(this.ha.oc("/p/" + this.ea.xa()), (0,z.vl)(this.J, JF({postId:this.ea.xa()}))), function() {
      this.Ta.W('"' + (0,z.U)(a) + '" has been deleted', "success");
      d || this.ba.navigate(b, c)
    }, this);
    DF(this.U, this.ea.xa());
    this.ea.xa() && !d || this.ba.navigate(b, c)
  }, this)
};
z.q.eA = function(a) {
  if(this.ea.xa() || lH(this)) {
    if(mH(this) || nH(this)) {
      this.J.open({title:"You can’t publish the post yet", bodyHtml:"We haven’t finished uploading your image.", type:z.wl})
    }else {
      var b = wH(this);
      b ? this.J.open({title:"You can’t publish the post yet", bodyHtml:"Please enter " + (0,z.U)(b) + ".", type:z.wl}) : (b = this.ad(!0), this.na || this.ea.isPublished() ? (a = BF(this.J, "Are you sure you want to publish?"), (0,z.y)((0,z.Hb)(b, a), function() {
        return rH(this)
      }, this)) : (a = (0,z.cq)(this.Zo, z.ct, !0, "Select a collection to publish to", a.target), (0,z.y)((0,z.Hb)(b, a), function(a) {
        return rH(this, a && a.get("id"))
      }, this)), (0,z.A)(b, (0,z.vl)(this.J, "An error occurred, and we were unable to publish your post.")))
    }
  }else {
    this.J.error("You haven’t written anything yet, so there is nothing to post!")
  }
};
z.q.Mt = function(a) {
  qH(this, "unsaved");
  this.Yf();
  this.Gc && this.Gc.Js();
  a == this.Oj && this.sj.dj(!!a.la())
};
z.q.Jz = function() {
  sH(this);
  qH(this, "canceled");
  var a = lH(this), b = this.ea.xa();
  this.ea.Mf || b || a ? this.ea.Mf ? this.ea.wi === this.ea.Mf ? a ? (0,window.confirm)(KF()) && this.fi() : this.fi() : (0,window.confirm)(KF()) && (0,z.A)((0,z.y)((0,z.Yi)(this, "request").post("/p/" + b + "/revert?versionId\x3d" + this.ea.Mf), this.fi, this), (0,z.vl)(this.J, "An error occurred, please try again.")) : (0,window.confirm)("Are you sure? All changes will be lost.") && (b ? ((0,z.A)((0,z.y)((0,z.Yi)(this, "request").oc("/p/" + b), this.vm, this), z.Ph), DF((0,z.Yi)(this, "datastore"), 
  b)) : this.vm()) : this.vm()
};
z.q.iA = function() {
  (0,z.A)((0,z.y)(this.ad(), this.fi, this), (0,z.vl)(this.J, "An error occurred, and we were unable to save your changes."))
};
z.q.FD = function() {
  (0,z.Xk)(function() {
    if(this.uc) {
      var a = (0,z.Uz)(this.uc.field);
      (a = a && a.Lb()) ? (a = a.replace(CH, " ").trim(), CH.lastIndex = 0, a = "" === a ? 0 : a.split(DH).length, a = (0,z.U)(a) + " word" + (1 != a ? "s" : "")) : a = "";
      this.gn = a;
      this.Yf()
    }
  }, this);
  this.Ky()
};
z.q.GC = function() {
  this.gn = ""
};
z.q.fi = function() {
  this.nj = !0;
  return this.ea.xa() ? tH(this, this.cf()) : this.vm()
};
z.q.vm = function() {
  this.nj = !0;
  return this.ba.navigate(this.Wg, {$b:this.ei.$b})
};
z.q.ad = function(a) {
  var b = oH(this);
  if(b.Wb(this.Sg)) {
    return this.ea.wi === this.ea.Mf || qH(this, "saved"), (0,z.Ob)(null)
  }
  if(this.Wd && b.Wb(this.ci)) {
    return this.Wd.Je()
  }
  sH(this);
  var c = "Editing " + b.Od();
  (0,z.Vi)(new z.Ui(c, c, "website"));
  qH(this, "saving", a);
  this.ci = b;
  var d = !this.ea.xa();
  a = "?logLockId\x3d" + this.qu;
  c = d ? "/" + (this.na || "p") + "/new-post" : "/p/" + this.ea.xa();
  this.Wd = (0,z.A)((0,z.A)((0,z.y)((0,z.y)((0,z.Yi)(this, "request").post(c + a, b, {Tn:!0, Z:!0, Ti:0, background:!0}), function() {
    this.ci = null;
    this.Sg = b;
    (0,z.W)(d ? z.Ku : z.Lu, {collectionSlug:this.na, postIds:[this.ea.xa()]})
  }, this), this.HB, this), this.Ge, this), z.Ph);
  return this.Wd.Je()
};
z.q.HB = function(a) {
  if(!this.ig) {
    var b = (0,z.Ki)(a.value, a.references);
    a = this.ea.xa();
    hH(this.ea, b);
    b = this.ea.xa();
    a != b && (this.Sg.Cf(b), (0,z.Yi)(this, "app").update(this.cf() + "/edit"));
    qH(this, "saved");
    this.Wd = null;
    !this.Gc && this.Vj && zH(this) && (0,z.y)(this.Vj, this.bv, this);
    !this.Tl && (0,z.P)("variants.can_edit_display_author") && (this.Tl = new fH(this.w, b, this.o.querySelector(".metabar-actions-btns")))
  }
};
z.q.EB = function(a) {
  a.contextCollection && (a = (0,z.Ki)(a.contextCollection, a.references), this.na = a.slug, (0,z.Hi)(this.U, a));
  if(this.na) {
    a = String(this.na);
    var b = (0,z.zi)(this.U), c = this.U.yd[a] || null;
    !(0,z.bi)(b, "slug", a) && c && b.jh(c, 0)
  }
  this.nj = !0;
  (0,z.y)(tH(this, this.cf()), function() {
    this.Yf()
  }, this);
  a = this.ea.Pc();
  qH(this, "published", !0);
  (0,z.W)(a.get("latestPublishedVersion") ? z.Nu : z.Mu, uH(this));
  iH(this.ea)
};
z.q.Ge = function(a) {
  if(410 == a.status && !this.J.Hf) {
    return vH(this)
  }
  a instanceof z.Tb || ((0,z.Ph)(a), qH(this, "error"));
  this.Wd = this.ci = null
};
z.q.cf = function() {
  return(this.na || "p") + "/" + this.ea.xa()
};
z.q.bv = function(a) {
  var b = this.ea.Pc();
  !this.Gc && zH(this) && b && (this.Gc = a.Ei(b, this.R(".post-article"), !0, this.Qa), this.uc.aa(new XG(this.Gc)))
};
z.q.xq = function() {
  var a = this.ea.Pc();
  return a && !this.cc ? (this.cc = (0,z.Yi)(this, "follow-ups").Ei(a, this.R(".post-article"), !0), (0,z.y)(this.cc.Rc(this.R(".post-follow-ups")), function() {
    (0,z.G)(this.o, "post-supplemental-loaded");
    var a = (0,z.Hq)(this.cc);
    a && (0,z.Iq)(this.cc, a)
  }, this)) : (0,z.Ob)(!0)
};
z.q.lt = function() {
  this.ea.xa() && !this.Wd && (0,z.A)((0,z.A)((0,z.y)(this.ha.get("/p/" + this.ea.xa() + "/version", {Kc:!0, background:!0}), function(a) {
    var b = this.ea.wi;
    a = a.value.latestVersion;
    a != b && ((0,z.W)(z.Bu, {postId:this.ea.xa(), lockId:this.qu, latestVersion:a, localVersion:b}), this.w.get("app").reload())
  }, this), function(a) {
    400 <= a.status && 500 > a.status && (window.clearInterval(this.tj), 410 != a.status || this.J.Hf || vH(this))
  }, this), z.Ph)
};
z.q.Cu = function(a) {
  a == z.Zq ? (this.lt(), AH(this)) : "idle" == a && window.clearInterval(this.tj)
};
(0,z.v)(BH, z.Zi);
z.q = BH.prototype;
z.q.fe = z.xv;
z.q.Pa = null;
z.q.Ha = null;
z.q.$ = null;
z.q.sb = z.Ni;
z.q.Ie = (0,z.ca)("Pa");
z.q.pb = function() {
  this.Pa = (0,z.y)((0,z.y)(this.Sp(), this.jf, this), this.Ra, this)
};
z.q.Ra = function() {
  this.Xe(new z.Ui("Drafts", "Drafts", "website"));
  this.Ha = (0,z.tp)((0,z.sp)((0,z.rp)(new z.qp(this.w), this.$), this.o).Jh(this.sb()), {yx:"drafts", Kw:!this.Mp})
};
z.q.Sd = function(a) {
  this.Fc({value:a.user, posts:a.posts, references:{User:{}, Collection:{}}})
};
z.q.nc = function() {
  this.Ha && this.Ha.W()
};
z.q.q = function() {
  (0,z.gc)(this.Ha);
  this.Ha = null;
  BH.s.q.call(this)
};
z.q.ja = function() {
  this.Ha && this.Ha.ja()
};
z.q.Sp = function() {
  return this.U.Ba[this.mc] ? (this.$ = this.U.Ba[this.mc], (0,z.Ob)(!0)) : (0,z.y)((0,z.Yi)(this, "request").get("/" + this.wb, {Z:!0}), this.Fc, this)
};
z.q.Fc = function(a) {
  this.U.Ba[this.mc] ? this.$ = this.U.Ba[this.mc] : (a = (0,z.Ki)(a.posts, a.references), this.$ = (0,z.Di)(this.U, this.mc, "/" + this.wb + "/load-more", "POST"), this.$.ee(a))
};
z.q.jf = function() {
  var a = this.$.Ya();
  this.o.innerHTML = (0,z.tf)(GF, {posts:a, isShared:this.Mp})
};
var JH = z.gr, KH = JH.w;
KH.add("PostEditScreen", kH);
KH.add("DraftsScreen", BH);
(0,z.ir)(JH, "posters");
})(_mdm);
//@ sourceURL=fingerprint:posters