'use strict';
function a(a) {
    a = new dc(a.clientWidth, a.clientHeight);
    a.equals(this.get("size")) || this.set("size", a)
}
function b(b) {
    la.addListener(b, "resize", Bb(a, this, b));
    a.call(this, b)
}
function c(a, b) {
    var c = document.getElementsByTagName("head")[0], d = '<script src="' + a + '" ' + Xb + '="this.ownerDocument.z = 1"></script>', e = mb.createElement("iframe");
    e.style.display = "none";
    c.appendChild(e);
    var f = e.contentDocument;
    e.onload = function () {
        1 != f.z && b && b();
        e.onload = null;
        c.removeChild(this)
    };
    try {
        f.write(d), f.close()
    } catch (g) {
    }
    c = null
}
function e(a, b, d, e, f) {
    var gd = mb.createElement("script");
    $a.push({name: a, sender: gd});
    gd.setAttribute("type", "text/javascript");
    gd.setAttribute("charset", f || "GBK");
    gd.async = !0;
    var g = null, Im = !1;
    gd[Xb] = function () {
        Bc.test(this.readyState) && (F(a), g ? d && d(g) : Im || e && e())
    };
    sb[a] = function (a) {
        g = a
    };
    gd.onerror = function () {
        Im = !0;
        e && e();
        F(a)
    };
    f = ["output=jsonp", "pf=jsapi", "ref=jsapi", "cb=" + Xa + "." + a];
    fb && f.unshift("key=" + fb);
    f = b + (-1 === b.indexOf("?") ? "?" : "&") + f.join("&");
    gd.src = f;
    Mc && c(b, function () {
        gd.onerror()
    });
    b = document.getElementsByTagName("head")[0];
    b.insertBefore(gd, b.firstChild);
    b = null
}
function F(a) {
    if (a) {
        for (var b = 0, c = $a.length, d = null; b < c; b++)if ($a[b].name === a) {
            d = $a.splice(b, 1)[0];
            break
        }
        d && (b = d.sender, b.clearAttributes && b.clearAttributes(), b[Xb] = b.onerror = null, b.parentNode && b.parentNode.removeChild(b));
        sb[a] && delete sb[a]
    }
}
function ka(a, b, c, d) {
    this.minX = this.minY = Infinity;
    this.maxX = this.maxY = -Infinity;
    kb(a) && kb(b) && this.extend(new ua(a, b));
    kb(c) && kb(d) && this.extend(new ua(c, d))
}
function m(a, b) {
    var c = this.areas = {};
    pb(Eb, function (a, b) {
        c[a] = []
    })
}
function ra(a) {
    for (var b = 0, c = 0, d = a.length; c < d; ++c)b = Math.max(a[c].height, b);
    for (var d = c = 0, e = a.length; 0 < e; --e) {
        var f = a[e - 1];
        if (b === f.height) {
            f.width > c && f.width > f.height ? c = f.height : d = f.width;
            break
        } else c = Math.max(f.height, c)
    }
    return new Ab(d, c)
}
function K(a, b, c, d) {
    var e = [], f = 0, g = 0;
    Yd(a, function (a) {
        var La = a.element, s = Oc(La), y = Oc(La, !0), l = Sb(La), m = Sb(La, !0), t = La.style, y = ("left" === b ? f : f + (s - y)) + "px", m = ("top" === c ? 0 : l - m) + "px";
        if (t[b] != y || t[c] != m)t[b] = y, t[c] = m, Aa.trigger(La, "positionupdate");
        y = f + s;
        for (g = Math.max(g, l); f < y; ++f)d[f] = g;
        f = y;
        a.border || e.push(new Ab(f, l));
        La.style.visibility = ""
    });
    for (a = d.length; f < a; ++f)d[f] = g;
    return ra(e)
}
function ja(a, b, c, d) {
    var e = 0, f = [];
    Yd(a, function (a) {
        var La = a.element, g = Oc(La), s = Sb(La), y = Oc(La, !0), l = Sb(La, !0);
        e = Math.max(d[g] || 0, e);
        var m = La.style, y = ("left" === b ? 0 : g - y) + "px", l = ("top" === c ? e : e + s - l) + "px";
        if (m[b] != y || m[c] != l)m[b] = y, m[c] = l, Aa.trigger(La, "positionupdate");
        e += s;
        a.border || f.push(new Ab(g, e));
        La.style.visibility = ""
    });
    return ra(f)
}
function ya(a, b, c) {
    var d = 0, e = 0;
    Yd(a, function (a) {
        var c = a.element, La = Oc(c), Hm = Sb(c), f = Sb(c, !0), f = ("top" === b ? 0 : Hm - f) + "px";
        c.style[b] != f && (c.style[b] = f, Aa.trigger(c, "positionupdate"));
        d += La;
        a.border || (e = Math.max(Hm, e))
    });
    var f = (c - d) / 2;
    Yd(a, function (a) {
        a = a.element;
        a.style.left = f + "px";
        f += Oc(a);
        a.style.visibility = ""
    });
    return e
}
function Ea(a, b, c, d) {
    var e = 0, f = 0;
    Yd(a, function (a) {
        var La = a.element, d = Oc(La), fo = Sb(La), g = Oc(La, !0);
        "left" === b ? La.style.left = 0 : "right" === b ? La.style.right = d - g + "px" : La.style.left = (c - d) / 2 + "px";
        e += fo;
        a.border || (f = Math.max(d, f))
    });
    var g = (d - e) / 2;
    Yd(a, function (a) {
        a = a.element;
        a.style.top = g + "px";
        g += Sb(a);
        a.style.visibility = ""
    });
    return f
}
function Ga(a) {
    var b = null;
    zc(pc, function (c) {
        if (c.url === a)return b = c, !1
    });
    return b
}
function Va() {
    var a = "shape image rect oval fill stroke imagedata group textbox".split(" ");
    if (!document.namespaces.v) {
        document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
        var b = document.createStyleSheet();
        wc(a, function (a) {
            b.addRule("v\\:" + a, "behavior:url(#default#VML);");
            document.createElement("v:" + a)
        })
    }
}
function X(a) {
    var b = mc[a], c;
    if (!b) {
        b = document.createDocumentFragment();
        if (a === Ja.VMLIMAGE) {
            jb || (Va(), jb = !0);
            var d = document.createElement("v:image");
            c = d.style;
            c.position = "absolute";
            c.left = c.top = c.margin = c.padding = c.border = Zd(0);
            Yb(d);
            d.galleryImg = !1;
            d.className = "csssprite";
            d.setAttribute(Pc, Ja.VMLIMAGE);
            b.appendChild(d)
        } else if (d = document.createElement("img"), c = d.style, c.position = "absolute", c.left = c.top = c.margin = c.padding = c.border = Zd(0), Yb(d), d.galleryImg = !1, b.appendChild(d), a === Ja.ALPHA) {
            var e = document.createElement("div");
            e.style.position = "absolute";
            c.left = c.top = c.margin = c.padding = c.border = c.fontSize = Zd(0);
            b.appendChild(e);
            d.className = "smnoscreen";
            e.className = "smnoprint";
            d.setAttribute(Pc, Ja.ALPHA);
            e.setAttribute(Pc, Ja.ALPHA)
        } else a === Ja.IMAGE && (d.className = "csssprite", d.setAttribute(Pc, Ja.IMAGE));
        mc[a] = b
    }
    if (b)return b.cloneNode(!0)
}
function E(a, b, c, d, e, f, g, l, m) {
    var s = arguments;
    0 < b.toUpperCase().indexOf(".PNG") && xb ? Zc ? va.apply(null, s) : ab.apply(null, s) : da.apply(null, s)
}
function vb(a, b) {
    var c;
    wc(a.childNodes, function (d) {
        (c = d.getAttribute(Pc)) && c != b && a.removeChild(d)
    })
}
function R(a, b, c, d) {
    var e = null;
    wc(a.childNodes, function (a) {
        if ((!d || "tag" === a.nodeName) && (!c || a.className === c) && a.getAttribute(Pc) == b)return e = a, !1
    });
    return e
}
function va(a, b, c, d, e, f, g, l, m) {
    vb(a, Ja.VMLIMAGE);
    l = R(a, Ja.VMLIMAGE);
    if (!l) {
        var s = X(Ja.VMLIMAGE);
        l = s.childNodes[0];
        jc(a, s)
    }
    ic(l, e, f);
    xc(l, c, d);
    yc(l, g);
    l.src = b;
    l && m && kc(l, m)
}
function da(a, b, c, d, e, f, g, l, m) {
    vb(a, Ja.IMAGE);
    l = R(a, Ja.IMAGE, "csssprite");
    if (!l) {
        var s = X(Ja.IMAGE);
        l = s.childNodes[0];
        Yb(l);
        jc(a, s)
    }
    ic(l, e, f);
    xc(l, c, d);
    a = l.style;
    a.maxWidth = a.minWidth = Zd(c);
    a.maxHeight = a.minHeight = Zd(d);
    yc(l, g);
    l.__src__ !== b && (l.__src__ = b, l.src = b);
    l && m && kc(l, m)
}
function ab(a, b, c, d, e, f, g, l, m) {
    vb(a, Ja.ALPHA);
    var s = R(a, Ja.ALPHA, "smnoscreen", "img"), y = R(a, Ja.ALPHA, "smnoprint", "div");
    if (!s || !y) {
        s && a.removeChild(s);
        y && a.removeChild(y);
        var t = X(Ja.ALPHA), s = t.childNodes[0], y = t.childNodes[1];
        jc(a, t)
    }
    ic(y, e, f);
    xc(y, c, d);
    y.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + b + "', sizingMethod='scale')";
    ic(s, e, f);
    xc(s, c, d);
    yc(s, g);
    s.src = b;
    s.style.display = l ? "none" : "";
    s && m && kc(s, m)
}
function wb(a) {
    this.delay = a || 0;
    this._forceEvt = Jd.addListener(this, "forcedraw", Kd(this.forcedraw, this))
}
function eb(a, b) {
    $b.call(this, 500);
    this.M = b;
    sd(a, "position", "absolute");
    sd(a, "zIndex", 1e6);
    sd(a, "margin", "2px 5px 0 2px");
    var c = this.link = document.createElement("a");
    c.title = bc.Copyright.home;
    c.target = "_blank";
    a.appendChild(c);
    7 == Ke && rd.addDomListener(c, "click", function () {
        window.open(c.href)
    });
    sd(c, "position", "static");
    sd(c, "overflow", "visible");
    sd(c, "float", "none");
    sd(c, "display", "inline");
    var d = xe(null, c, null);
    sd(d, "cursor", "pointer");
    var e = oc + (1 == b ? pe ? "logo1_hd" : "logo1" : pe ? "logo_hd" : "logo") + ".png";
    ze(e, function (b, c) {
        b && c && (Rd(d, e, null, new Rb(80, 18)), Gd(d, 80, 18), rd.trigger(a, "resize"))
    });
    this.updateLink()
}
function Fa(a) {
    Hd.call(this, 200);
    this.container = a;
    ma(a, "position", "absolute");
    ma(a, "zIndex", 1000002);
    ma(a, "background-color", "#FFFFFF");
    ma(a, "border", "1px solid #EEEEEE");
    ma(a, "font-family", "Arial, sans-serif");
    ma(a, "color", "#222222");
    ma(a, "webkit-box-shadow", "rgba(0, 0, 0, 0.2) 0px 4px 16px");
    ma(a, "box-shadow", "rgba(0, 0, 0, 0.2) 0px 4px 16px");
    ma(a, "moz-box-shadow", "rgba(0, 0, 0, 0.2) 0px 4px 16px");
    Hc(a, Id, lc);
    var b = Ve(null, a);
    ma(b, "position", "relative");
    ma(b, "margin", "15px 20px");
    var c = Ve(null, b);
    ma(c, "padding", "0 0 10px");
    ma(c, "font-size", "16px");
    Yc(c, "\u5730\u56fe\u6570\u636e");
    b = Ve(null, b);
    ma(b, "font-size", "13px");
    a = Ve(null, a, 100);
    ma(a, "position", "absolute");
    ma(a, "top", "10px");
    ma(a, "right", "10px");
    ma(a, "padding", "0 10px");
    ma(a, "cursor", "pointer");
    a.innerHTML = "X";
    this.contentDiv = b;
    var d = this;
    uc.addDomListener(a, "click", function () {
        d.set("visible", !1);
        uc.trigger(d, "close")
    })
}
function Lb(a) {
    Lc.call(this, 100);
    this.changeKeys = {};
    this.container = a;
    $d(a, "position", "absolute");
    $d(a, "zIndex", 1e6);
    qe(a);
    Ld(a);
    var b = Md(a), c = $c("span", b);
    ue(c);
    b = $c("a", b);
    ue(b);
    $d(b, "display", "none");
    $d(b, "text-decoration", "underline");
    $d(b, "cursor", "pointer");
    bd(b, "\u5730\u56fe\u6570\u636e");
    this.span = c;
    this.link = b;
    var d = document.createElement("div"), e = this.panel = new te(d);
    e.bindTo("size", this);
    De.addListener(e, "close", function () {
        De.trigger(f, "closepanel", d)
    });
    var f = this;
    De.addDomListener(b, "click", function () {
        e.set("visible", !0);
        De.trigger(f, "openpanel", d)
    });
    De.addListener(a, "positionupdate", re(this.resize, this));
    this.updateData()
}
function yb() {
    this.p = new qd(0, 0)
}
function Ee(a, b, c, d, e) {
    var f = a.get("projection");
    a = a.get("zoom");
    return f && b && We(a) && (b = Xd(f, b, a)) ? (c = b.x - Math.round(c), d = b.y - Math.round(d), e && e.x == c && e.y == d ? e : new qd(c, d)) : null
}
function tb(a, b, c, d, e, f) {
    var g = a.get("projection"), l = a.get("zoom");
    if (b && We(l)) {
        if (!We(b.x) || !We(b.y))throw Error("from" + e + "PixelToLatLng: Point.x and Point.y must be of type number");
        a = a.p;
        a.x = b.x + Math.round(c);
        a.y = b.y + Math.round(d);
        return Se(g, a, l, f)
    }
}
var bi = function (a) {
    a.style.display = "none"
}, dc = oa, la = d, Bb = V;
f(b, l);
var dd = navigator.userAgent.toLowerCase(), Xe = "opera msie chrome applewebkit firefox mozilla".split(" "), ub = "x11 macintosh windows android iphone ipad".split(" "), Ya = 0, hd, qb, Tb, xa = 0, t, Ba;
for (hd = Xe.length; Ya < hd; Ya++)if (qb = Xe[Ya], -1 != dd.indexOf(qb) && (xa = Ya + 1, Tb = RegExp(qb + "[ /]?([0-9]+(.[0-9]+)?)").exec(dd))) {
    t = parseFloat(Tb[1]);
    break
}
if (6 == xa) {
    if (Tb = /^mozilla\/.*gecko\/.*(minefield|shiretoko)[ /]?([0-9]+(.[0-9]+)?)/.exec(dd))xa = 5, t = parseFloat(Tb[2]);
    if (Tb = /trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(dd))xa = 2, t = parseFloat(Tb[1])
}
1 == xa && (Tb = /^opera\/9.[89].*version\/?([0-9]+(.[0-9]+)?)/.exec(dd)) && (t = parseFloat(Tb[1]));
Ya = 0;
for (hd = ub.length; Ya < hd; Ya++)if (qb = ub[Ya], -1 != dd.indexOf(qb)) {
    Ba = Ya + 1;
    break
}
var fa = [xa, t, Ba], B = fa[2], vf = !1;
if (5 == B || 6 == B || 2 == B) {
    var Zb = /OS (?:X )?(\d+[_.]\d)/.exec(Hb);
    Zb && (vf = parseFloat(Zb[1].replace("_", ".")))
}
var ac = vf, zb = Oa[0][1], Nc = 6 === za || 7 === za || 8 === za, fb = zb, mb = window.document, Bc = /loaded|complete|undefined/i, Xb = mb.dispatchEvent ? "onload" : "onreadystatechange", Mc = 0 < Ph, sb = {}, Xa = Te("_svcb" + B, sb).join("."), $a = [], Nb = 0, gb = {
    send: function (a, b, c, d) {
        a || (a = "cb" + (new Date).getTime().toString(36) + (Nb++).toString(36));
        vg(function () {
            F(a);
            e(a, b, c, d)
        });
        return a
    }, cancel: F
}, Fe = function (a, b, c) {
    if (document.defaultView && c) {
        b = b.replace(/[A-Z]/g, function (a) {
            return "-" + a.toLowerCase()
        });
        try {
            return document.defaultView.getComputedStyle(a, null).getPropertyValue(b)
        } catch (d) {
            return ""
        }
    }
    b = b.replace(/-(\D)/g, function (a, b) {
        return b.toUpperCase()
    });
    "float" == b && (b = za ? "styleFloat" : "cssFloat");
    return a.currentStyle && c ? a.currentStyle[b] : a.style ? a.style[b] : void 0
}, ad = function (a) {
    return "none" !== Fe(a, "display")
}, Nd = function (a, b) {
    if (!ad(a))return 0;
    var c = !b && parseInt(a.getAttribute("controlWidth"));
    if (!C(c) || isNaN(c))c = a.offsetWidth;
    var d = parseInt(Fe(a, "marginLeft")) || 0, e = parseInt(Fe(a, "marginRight")) || 0;
    return c + d + e
}, Pd = function (a, b) {
    if (!ad(a))return 0;
    var c = !b && parseInt(a.getAttribute("controlHeight"));
    if (!C(c) || isNaN(c))c = a.offsetHeight;
    var d = parseInt(Fe(a, "marginTop")) || 0, e = parseInt(Fe(a, "marginBottom")) || 0;
    return c + d + e
}, ua = P, kb = C, Ub = ka.prototype;
Ub.isEmpty = function () {
    return !(this.minX <= this.maxX && this.minY <= this.maxY)
};
Ub.getCenter = function () {
    return new ua((this.minX + this.maxX) / 2, (this.minY + this.maxY) / 2)
};
Ub.extend = function (a) {
    a && (this.minX = Math.min(this.minX, a.x), this.maxX = Math.max(this.maxX, a.x), this.minY = Math.min(this.minY, a.y), this.maxY = Math.max(this.maxY, a.y))
};
Ub.equals = function (a) {
    return !a ? !1 : this.minX == a.minX && this.minY == a.minY && this.maxX == a.maxX && this.maxY == a.maxY
};
Ub.containsBounds = function (a) {
    return a.minX >= this.minX && a.maxX <= this.maxX && a.minY >= this.minY && a.maxY <= this.maxY
};
Ub.containsPoint = function (a) {
    return a.x >= this.minX && a.x <= this.maxX && a.y >= this.minY && a.y <= this.maxY
};
Ub.intersects = function (a) {
    if (!this.isEmpty() && !a.isEmpty() && !(a.maxX < this.minX || a.minX > this.maxX || a.maxY < this.minY || a.minY > this.maxY)) {
        var b = Math.max(this.minX, a.minX), c = Math.min(this.maxX, a.maxX), d = Math.max(this.minY, a.minY);
        a = Math.min(this.maxY, a.maxY);
        return new ka(b, d, c, a)
    }
};
Ub.getMin = function () {
    return new ua(this.minX, this.minY)
};
Ub.getMax = function () {
    return new ua(this.maxX, this.maxY)
};
Ub.clone = function () {
    return new ka(this.minX, this.minY, this.maxX, this.maxY)
};
Ub.toString = function () {
    return this.minX + "," + this.minY + "," + this.maxX + "," + this.maxY
};
var Ab = oa, Aa = d, pb = U, Yd = g, Eb = od, Oc = Nd, Sb = Pd;
f(m, l);
var Wa = m.prototype;
Wa.container_changed = function () {
    var a = this.get("container");
    a && (pb(this.areas, function (b) {
        Yd(b, function (b) {
            a.appendChild(b.element)
        })
    }), this.draw())
};
Wa.size_changed = function () {
    this.draw()
};
Wa.addElement = function (a, b, c, d) {
    if (b = this.areas[b]) {
        var e = b.length;
        d = C(d) ? d : e;
        for (var f = 0; f < e && d >= b[f].index;)f++;
        var g = this, e = Aa.addListener(a, "resize", function () {
            g.draw()
        });
        b.splice(f, 0, {element: a, border: c, index: d, listener: e});
        "absolute" !== a.style.position && (a.style.position = "absolute");
        a.style.visibility = "hidden";
        if (c = this.get("container"))c.appendChild(a), this.draw()
    }
};
Wa.removeElement = function (a) {
    a.parentNode && a.parentNode.removeChild(a);
    var b = this;
    pb(b.areas, function (c) {
        for (var d = 0, e = c.length, f = 0; d < e; d++)c[d] && a === c[d].element && (Aa.removeListener(c[d].listener), c.splice(d--, 1), f++);
        f && (a.style.top = "auto", a.style.bottom = "auto", a.style.left = "auto", a.style.right = "auto");
        b.draw()
    })
};
Wa.draw = function () {
    var a = this.get("size") || new Ab(0, 0), b = a.getWidth(), a = a.getHeight(), c = this.areas, d = Array(b), e = K(c[1], "left", "top", d), f = ja(c[5], "left", "top", d), d = Array(b), g = K(c[10], "left", "bottom", d), l = ja(c[6], "left", "bottom", d), d = Array(b), m = K(c[3], "right", "top", d), s = ja(c[7], "right", "top", d), d = Array(b), y = K(c[12], "right", "bottom", d), d = ja(c[9], "right", "bottom", d), t = ya(c[11], "bottom", b), x = ya(c[2], "top", b), G = Ea(c[4], "left", b, a), C = Ea(c[8], "right", b, a);
    Ea(c[13], "center", b, a);
    c = Math.max(G, e.width, f.width, g.width, l.width) || 0;
    C = Math.max(C, m.width, s.width, y.width, d.width) || 0;
    e = Math.max(x, e.height, f.height, m.height, s.height) || 0;
    g = Math.max(t, g.height, l.height, y.height, d.height) || 0;
    this.set("bounds", new ka(Math.min(c, b - C), Math.min(e, a - g), Math.max(c, b - C), Math.max(e, a - g)))
};
var ae = 5 == B || 6 == B, td = fa[1], ia = fa[0], Cc = function (a) {
    if (-1 === Hb.toLowerCase().indexOf("x920e") && (ae || 2 == B && 10.6 <= ac && 4 == ia && 533.19 <= td || 4 == B && 4 == ia && 534 <= td || 3 == ia && (21 <= td && (1 == B || 2 == B || 3 == B) || 18 <= td && 4 == B)))a.style.WebkitTransform = "translateZ(0)"
}, Ta = function (a) {
    return Math.round(a) + "px"
}, Jc = null;
vg(function () {
    Jc || (Jc = document.createElement("div"), Jc.style.cssText = "position:absolute;width:0px;height:0px;display:none;")
});
var Kc = function (a, b) {
    a.useMap = "#" + b
}, zc = g, pc = [], Sa = {}, Wd = function (a, b, c) {
    var e;
    if (e = Ga(a))return b(e.width, e.height, a, e.image), e.image;
    if (e = Sa[a])e.cbs.push(b); else {
        var f = Sa[a] = {url: a, cbs: [b]}, g = new Image;
        b = function () {
            d.removeListener(l);
            d.removeListener(m);
            pc.push({url: a, width: g.width, height: g.height});
            zc(f.cbs, function (b) {
                b(g.width, g.height, a)
            });
            f.cbs.length = 0;
            delete Sa[a];
            g = null
        };
        var l = d.addDomListener(g, "load", b), m = d.addDomListener(g, "error", b);
        g.src = a;
        g && c && Kc(g, c)
    }
}, oe = Oa[6][1], pe = 1 < ug();
/webkit/i.test(Hb) && "WebKitCSSMatrix" in window && new window.WebKitCSSMatrix;
var tc = function (a) {
    if ("number" == typeof a)return a + "px";
    if ("string" == typeof a)return a = a.replace(RegExp("\\s", "g"), ""), /^\d+(px|%)+$/i.exec(a) || "auto" === a ? a : /^\d+$/.exec(a) ? a + "px" : "0px"
}, pa = function (a, b, c) {
    null != b && (a.style.left = tc(b));
    null != c && (a.style.top = tc(c))
}, Ag = function (a, b) {
    a = a || document.documentElement;
    for (var c = 0, d; d = b[c]; c++)if (d in a.style)return d;
    return null
}, Xc = Ag(null, ["WebkitUserSelect", "MozUserSelect", "msUserSelect"]), Ic, Qc = function (a) {
    var b = !1;
    if (Ob(Ic)) {
        var c = document.createElement("span");
        Ic = !Ob(c.draggable)
    }
    Ic ? a.draggable = !1 : b = !0;
    Xc ? a.style[Xc] = "none" : b = !0;
    b && a.setAttribute("unselectable", "on");
    a.onselectstart = pf
}, ga = function (a, b, c) {
    null != b && (a.style.width = tc(b));
    null != c && (a.style.height = tc(c))
}, rb = function (a) {
    var b = document, c = b.createElement("style");
    c.setAttribute("type", "text/css");
    c.styleSheet ? c.styleSheet.cssText = a : (a = b.createTextNode(a), c.appendChild(a));
    a = b.getElementsByTagName("head");
    a.length ? a[0].appendChild(c) : b.documentElement.appendChild(c)
}, wc = g, ic = pa, xc = ga, yc = nc, Yb = Qc, jc = function (a, b, c) {
    c = c || 0;
    a.childNodes.length > c ? a.insertBefore(b, a.childNodes[c]) : a.appendChild(b)
}, Zd = Ta, kc = Kc, Pc = "dn", xb = 5 <= za && 7 > za;
xb && vg(function () {
    try {
        document.body.filters && (xb = !0)
    } catch (a) {
    }
});
var Zc = 6 <= za && 9 > za;
xb && rb("@media screen{.smnoscreen {display:none}} @media print{.smnoprint{display:none}}");
var Ja = {ALPHA: 1, IMAGE: 2, VMLIMAGE: 3}, mc = {}, jb = !1, Cb = function (a, b, c, d, e, f, g, l) {
    var m = Fe(a, "position");
    "relative" !== m && "absolute" !== m && (a.style.position = "relative");
    if (b) {
        var s = d ? d.getWidth() : 0, y = d ? d.getHeight() : 0, t = c ? c.length ? -c[0] : -c.getX() : 0, x = c ? c.length ? -c[1] : -c.getY() : 0;
        a.style.overflow = "hidden";
        !d || f ? Wd(b, function (c, d) {
            E(a, b, s || c, y || d, t, x, e, g, l)
        }, l) : E(a, b, s, y, t, x, e, g, l)
    }
}, Jd = d, Kd = V;
f(wb, l);
wb.prototype.redraw = function () {
    var a = this;
    a.timer || (a.timer = window.setTimeout(function () {
        a.timer = void 0;
        a.draw()
    }, a.delay))
};
wb.prototype.forcedraw = function () {
    this.timer && window.clearTimeout(this.timer);
    this.timer = void 0;
    this.draw()
};
wb.prototype.destroyRender = function () {
    Jd.removeListener(this._forceEvt)
};
var $b = wb, bc = Td, xe = T, sd = L, Rd = Cb, oc = Qb, ze = Wd, Rb = oa, rd = d, Gd = ga, Ke = za;
f(eb, $b);
var Gc = eb.prototype;
Gc.changed = function () {
    this.redraw()
};
Gc.updateLink = function () {
    this.forcedraw()
};
Gc.draw = function () {
    var a = this.link, b;
    if (a) {
        if (0 == this.M) {
            b = {};
            var c = this.get("center"), d = this.get("zoom");
            c && (b.center = c.toUrlValue());
            C(d) && (b.l = d)
        } else if (1 == this.M) {
            b = {};
            var c = this.get("pano"), d = this.get("pov"), e = this.get("zoom");
            c && (b.pano = c, d && (d.heading && (b.heading = d.heading), d.pitch && (b.pitch = d.pitch)), C(e) && (b.zoom = e))
        }
        b = pd(b);
        a.href = b ? oe + "?" + b : oe
    }
};
var nf = function (a, b) {
    if (Z(a)) {
        var c = [];
        g(a, function (a, d) {
            a = b ? S(a) ? a.replace(/(^\s*)|(\s*$)/g, "") : a : a;
            -1 == sf(c, a) && c.push(a)
        });
        return c
    }
    return a
}, di = 2 == ia && 7 > td, ei = function (a, b) {
    var c = T(null, a);
    L(c, "position", "absolute");
    L(c, "width", "100%");
    L(c, "height", "100%");
    nc(c, .7);
    var d = T(null, c);
    L(d, "background-color", b || "#F5F5F5");
    L(d, "width", "auto");
    L(d, "height", "100%");
    L(d, "margin-left", "1px");
    di && setTimeout(function () {
        L(d, "width", "auto")
    }, 0);
    return c
}, Le = function (a) {
    L(a, "font-family", "Arial, sans-serif");
    L(a, "white-space", "nowrap");
    L(a, "font-size", "10px");
    L(a, "color", "#222222");
    L(a, "line-height", "16px");
    L(a, "direction", "ltr");
    L(a, "text-align", "right");
    L(a, "font-weight", "normal");
    L(a, "font-style", "normal");
    L(a, "background-color", "transparent")
}, fi = function (a) {
    a = T(null, a);
    Le(a);
    L(a, "position", "relative");
    L(a, "padding", "0 5px");
    return a
}, wf = function (a, b) {
    S(a.innerText) ? a.innerText = b : a.textContent = b
}, Hc = ga, ma = L, uc = d, Yc = wf, Ve = T, Hd = wb, Id = 300, lc = 180;
f(Fa, Hd);
var be = Fa.prototype;
be.content_changed = function () {
    var a = this.get("content");
    this.contentDiv.innerHTML = a || ""
};
be.visible_changed = function () {
    this.forcedraw()
};
be.size_changed = be.resize = function () {
    this.redraw()
};
be.draw = function () {
    var a = this.get("size");
    if (a && this.get("visible")) {
        var b = a.getWidth() - 10, a = a.getHeight() - 10, b = Math.min(Id, b), a = Math.min(lc, a);
        Hc(this.container, b, a);
        uc.trigger(this.container, "resize")
    }
};
var Lc = wb, $c = T, qe = Qc, bd = wf, De = d, $d = L, re = V, Ld = ei, Md = fi, te = Fa, ue = Le;
f(Lb, Lc);
var Ye = Lb.prototype;
Ye.changed = function (a) {
    this.changeKeys[a] = !0;
    this.redraw()
};
Ye.draw = function () {
    var a = this.changeKeys;
    this.changeKeys = {};
    (a.data || a.sno || a.mapTypeCps || a.overlayMapTypeCps) && this.updateData();
    a.size && this.resize()
};
Ye.resize = function () {
    var a = this.container, b = this.span, c = this.link, d = a.offsetWidth, e = a.offsetLeft, f = this.get("size");
    d && f && (c.style.display = "none", b.style.display = "", b.style.visibility = "hidden", e + a.offsetWidth > f.getWidth() ? (c.style.display = "", b.style.display = "none") : (c.style.display = "none", b.style.display = ""), b.style.visibility = "");
    De.trigger(a, "resize")
};
Ye.updateData = function () {
    var a = [], b = Td.Copyright;
    a.push(b.prefix);
    var c = this.get("sno");
    c && a.push(c);
    c = this.get("data");
    Z(c) && 0 < c.length && a.push(b.dataPrefix + c.join("&"));
    var c = [], d = this.get("mapTypeCps");
    Z(d) && 0 < d.length && (c = c.concat(d));
    d = this.get("overlayMapTypeCps");
    Z(d) && 0 < d.length && (c = c.concat(d));
    var c = nf(c, !0), d = c.length, e = [], f = [];
    if (0 < d)for (var g = 0; g < d; g++) {
        var l = c[g];
        -1 < l.indexOf("image:") ? e.push(l.replace(/image\:/g, "")) : f.push(l)
    }
    0 < f.length && a.push(b.dataPrefix + " " + f.join(", "));
    0 < e.length && a.push(b.imagePrefix + " " + e.join(", "));
    a = a.join(" - ");
    bd(this.span, a);
    this.panel.set("content", a);
    this.resize()
};
var ve = C, of = function (a, b) {
    g(b, function (b, c) {
        function e(b) {
            if (b) {
                var d = b.index, d = ve(d) ? parseInt(d) : 1e3, d = Math.max(d, -999);
                b.style.zIndex = Math.min(999999, b.style.zIndex || 0);
                a.addElement(b, c, !1, d)
            }
        }

        b && (b.forEach(e), d.addListener(b, "insert_at", function (a) {
            e(a)
        }), d.addListener(b, "remove_at", function (b) {
            a.removeElement(b)
        }))
    })
}, qc = function () {
    var a = Od, b = 4 == ia && ae, c = 4 == ia && 4 == B && 534 <= td, d = 3 == ia && 4 == B, e = 2 == ia && 0 < navigator.msMaxTouchPoints, f = 2 == ia && 0 < navigator.maxTouchPoints, a = 1 == B || 2 == B ? !1 : a("touchstart") && a("touchmove") && a("touchend");
    return b || c || d || e || f || a ? !0 : !1
}(), we = Ag(null, ["boxShadow", "WebkitBoxShadow", "MozBoxShadow"]), Qe = function (a, b) {
    a.style[we] = b
};
rb("@media screen{.smnoscreen {display:none}} @media print{.smnoprint{display:none}}");
var Bg = {NO_SCREEN: "smnoscreen", NO_PRINT: "smnoprint"}, Re = function (a) {
    a.style.display = ""
}, ud = null, gi = function (a, b, c, d) {
    c = Math.pow(2, c);
    ud || (ud = new P(0, 0));
    ud.x = b.x / c;
    ud.y = b.y / c;
    return a.fromPointToLatLng(ud, d)
}, Ze = function (a, b, c) {
    if (a = a.fromLatLngToPoint(b))c = Math.pow(2, c), a.x *= c, a.y *= c;
    return a
}, tf = function (a, b) {
    if (a && C(b)) {
        var c = Ze(a, new D(0, 179.999999), b), d = Ze(a, new D(0, -179.999999), b), e = c.x - d.x, c = c.y - d.y;
        return Math.sqrt(e * e + c * c)
    }
    return 0
}, uf = function (a, b) {
    var c = new ka;
    c.minX = a.minX * b;
    c.maxX = a.maxX * b;
    c.minY = a.minY * b;
    c.maxY = a.maxY * b;
    return c
}, tg = function (a, b, c) {
    c = uf(b, 1 / Math.pow(2, c));
    b = new P(c.minX, c.minY);
    c = new P(c.maxX, c.maxY);
    b = a.fromPointToLatLng(b, !0);
    var d = a.fromPointToLatLng(c, !0);
    c = Math.min(b.getLat(), d.getLat());
    a = Math.max(b.getLat(), d.getLat());
    var e = Math.min(b.getLng(), d.getLng());
    b = Math.max(b.getLng(), d.getLng());
    c = new D(c, e, !0);
    a = new D(a, b, !0);
    return new ib(c, a)
}, qd = P, Se = gi, Xd = Ze, We = C;
f(yb, l);
var vd = yb.prototype;
vd.fromLatLngToContainerPixel = function (a) {
    var b = this.get("projectionTopLeft");
    return b ? Ee(this, a, b.x, b.y) : null
};
vd.fromLatLngToDivPixel = function (a, b) {
    var c = this.get("offset");
    return c ? Ee(this, a, c.width, c.height, b) : null
};
vd.fromDivPixelToLatLng = function (a, b) {
    var c = this.get("offset");
    return c ? tb(this, a, c.width, c.height, "Div", b) : null
};
vd.fromContainerPixelToLatLng = function (a, b) {
    var c = this.get("projectionTopLeft");
    return c ? tb(this, a, c.x, c.y, "Container", b) : null
};
vd.getWorldWidth = function () {
    return tf(this.get("projection"), this.get("zoom"))
};
var Ce = 0, Mb = function (a, b) {
    return !b && a.__QmapId__ || (a.__QmapId__ = "QM" + ++Ce)
}, Ue = {}, xf = function (a, b, c) {
    c = c || Ue;
    var d = Mb(a), e = c[d];
    !c[d] && $(b) && (e = c[d] = b(a));
    return e
}, Cg = function (a, b, c) {
    c = c || Ue;
    var d = Mb(a), e = c[d];
    e && $(b) && b(a, e);
    c[d] = null;
    delete c[d];
    return e
}, Dg = function (a, b) {
    return !a || !b ? !1 : a.contains ? a !== b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
}, yf = null, Fd = function (a, b) {
    yf || (yf = Od("mousewheel") ? "mousewheel" : "DOMMouseScroll");
    return d.addDomListener(a, yf, function (c) {
        var d = 0;
        c.wheelDelta ? (d = c.wheelDelta / 120, window.opera && 10 > window.opera.version() && (d = -d)) : c.detail && (d = -c.detail / 3);
        c.delta = Math.round(d);
        b.call(a, c)
    })
};
G.$setExports(gb);
(0, function () {
    return eval(arguments[0])
})