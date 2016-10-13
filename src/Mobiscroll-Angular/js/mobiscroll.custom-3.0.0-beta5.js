(function(I, k) {
    "function" === typeof define && define.amd ? define(["angular"], k) : "object" === typeof exports ? module.exports = k(require("angular")) : I.mobiscroll = k(I.angular)
})(this, function(I) {
    var k = k || {};
    (function(i, e, b) {
        function c(a) {
            return "function" === typeof a
        }

        function a(a) {
            return "object" === typeof a
        }

        function f(a) {
            return a.replace(/-+(.)?/g, function(a, t) {
                return t ? t.toUpperCase() : ""
            })
        }

        function d(a, c, t) {
            for (var v in c)
                if (t && (r.isPlainObject(c[v]) || r.isArray(c[v]))) {
                    if (r.isPlainObject(c[v]) && !r.isPlainObject(a[v]) ||
                        r.isArray(c[v]) && !r.isArray(a[v])) a[v] = {};
                    d(a[v], c[v], t)
                } else c[v] !== b && (a[v] = c[v])
        }

        function o(a) {
            return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }
        var E = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            },
            s = {
                readonly: "readOnly"
            },
            m = [],
            j = Array.prototype.slice,
            g = function() {
                var d = function(a) {
                        for (var b = 0, b = 0; b < a.length; b++) this[b] = a[b];
                        this.length = a.length;
                        return g(this)
                    },
                    g = function(a,
                        b) {
                        var h = [],
                            f = 0;
                        if (a && !b && a instanceof d) return a;
                        if (c(a)) return g(e).ready(a);
                        if (a)
                            if ("string" === typeof a) {
                                var p, a = f = a.trim();
                                if (0 <= f.indexOf("<") && 0 <= f.indexOf(">")) {
                                    p = "div";
                                    0 === f.indexOf("<li") && (p = "ul");
                                    0 === f.indexOf("<tr") && (p = "tbody");
                                    if (0 === f.indexOf("<td") || 0 === f.indexOf("<th")) p = "tr";
                                    0 === f.indexOf("<tbody") && (p = "table");
                                    0 === f.indexOf("<option") && (p = "select");
                                    p = e.createElement(p);
                                    p.innerHTML = f;
                                    for (f = 0; f < p.childNodes.length; f++) h.push(p.childNodes[f])
                                } else {
                                    !b && "#" === a[0] && !a.match(/[ .<>:~]/) ?
                                        p = [e.getElementById(a.split("#")[1])] : (b instanceof d && (b = b[0]), p = (b || e).querySelectorAll(a));
                                    for (f = 0; f < p.length; f++) p[f] && h.push(p[f])
                                }
                            } else if (a.nodeType || a === i || a === e) h.push(a);
                        else if (0 < a.length && a[0].nodeType)
                            for (f = 0; f < a.length; f++) h.push(a[f]);
                        else g.isArray(a) && (h = a);
                        return new d(h)
                    };
                d.prototype = {
                    ready: function(a) {
                        /complete|loaded|interactive/.test(e.readyState) && e.body ? a(g) : e.addEventListener("DOMContentLoaded", function() {
                            a(g)
                        }, !1);
                        return this
                    },
                    concat: m.concat,
                    empty: function() {
                        return this.each(function() {
                            this.innerHTML =
                                ""
                        })
                    },
                    map: function(a) {
                        return g(g.map(this, function(b, h) {
                            return a.call(b, h, b)
                        }))
                    },
                    slice: function() {
                        return g(j.apply(this, arguments))
                    },
                    addClass: function(a) {
                        if ("undefined" === typeof a) return this;
                        for (var a = a.split(" "), b = 0; b < a.length; b++)
                            for (var h = 0; h < this.length; h++) "undefined" !== typeof this[h].classList && "" !== a[b] && this[h].classList.add(a[b]);
                        return this
                    },
                    removeClass: function(a) {
                        for (var a = a.split(" "), b = 0; b < a.length; b++)
                            for (var h = 0; h < this.length; h++) "undefined" !== typeof this[h].classList && "" !== a[b] &&
                                this[h].classList.remove(a[b]);
                        return this
                    },
                    hasClass: function(a) {
                        return this[0] ? this[0].classList.contains(a) : !1
                    },
                    toggleClass: function(a) {
                        for (var a = a.split(" "), b = 0; b < a.length; b++)
                            for (var h = 0; h < this.length; h++) "undefined" !== typeof this[h].classList && this[h].classList.toggle(a[b]);
                        return this
                    },
                    closest: function(b, c) {
                        var h = this[0],
                            f = !1;
                        for (a(b) && (f = g(b)); h && !(f ? 0 <= f.indexOf(h) : g.matches(h, b));) h = h !== c && h.nodeType !== h.DOCUMENT_NODE && h.parentNode;
                        return g(h)
                    },
                    attr: function(a, c) {
                        var h;
                        if (1 === arguments.length &&
                            "string" === typeof a && this.length) return h = this[0].getAttribute(a), this[0] && (h || "" === h) ? h : b;
                        for (h = 0; h < this.length; h++)
                            if (2 === arguments.length) this[h].setAttribute(a, c);
                            else
                                for (var g in a) this[h][g] = a[g], this[h].setAttribute(g, a[g]);
                        return this
                    },
                    removeAttr: function(a) {
                        for (var b = 0; b < this.length; b++) this[b].removeAttribute(a);
                        return this
                    },
                    prop: function(a, c) {
                        a = s[a] || a;
                        if (1 === arguments.length && "string" === typeof a) return this[0] ? this[0][a] : b;
                        for (var h = 0; h < this.length; h++) this[h][a] = c;
                        return this
                    },
                    val: function(a) {
                        if ("undefined" ===
                            typeof a) return this.length && this[0].multiple ? g.map(this.find("option:checked"), function(a) {
                            return a.value
                        }) : this[0] ? this[0].value : b;
                        if (this.length && this[0].multiple) g.each(this[0].options, function() {
                            this.selected = -1 != a.indexOf(this.value)
                        });
                        else
                            for (var c = 0; c < this.length; c++) this[c].value = a;
                        return this
                    },
                    on: function(a, b, h, f) {
                        function d(a) {
                            var t, c;
                            t = a.target;
                            if (g(t).is(b)) h.call(t, a);
                            else {
                                c = g(t).parents();
                                for (t = 0; t < c.length; t++) g(c[t]).is(b) && h.call(c[t], a)
                            }
                        }

                        function l(a, b, h, t) {
                            b = b.split(".");
                            a.DomNameSpaces ||
                                (a.DomNameSpaces = []);
                            a.DomNameSpaces.push({
                                namespace: b[1],
                                event: b[0],
                                listener: h,
                                capture: t
                            });
                            a.addEventListener(b[0], h, t)
                        }
                        var a = a.split(" "),
                            e, j;
                        for (e = 0; e < this.length; e++)
                            if (c(b) || !1 === b) {
                                c(b) && (f = h || !1, h = b);
                                for (j = 0; j < a.length; j++) - 1 != a[j].indexOf(".") ? l(this[e], a[j], h, f) : this[e].addEventListener(a[j], h, f)
                            } else
                                for (j = 0; j < a.length; j++) this[e].DomLiveListeners || (this[e].DomLiveListeners = []), this[e].DomLiveListeners.push({
                                    listener: h,
                                    liveListener: d
                                }), -1 != a[j].indexOf(".") ? l(this[e], a[j], d, f) : this[e].addEventListener(a[j],
                                    d, f);
                        return this
                    },
                    off: function(a, b, h, g) {
                        function f(a) {
                            var b, h, t;
                            b = a.split(".");
                            var a = b[0],
                                c = b[1];
                            for (b = 0; b < m.length; ++b)
                                if (m[b].DomNameSpaces) {
                                    for (h = 0; h < m[b].DomNameSpaces.length; ++h)
                                        if (t = m[b].DomNameSpaces[h], t.namespace == c && (t.event == a || !a)) m[b].removeEventListener(t.event, t.listener, t.capture), t.removed = !0;
                                    for (h = m[b].DomNameSpaces.length - 1; 0 <= h; --h) m[b].DomNameSpaces[h].removed && m[b].DomNameSpaces.splice(h, 1)
                                }
                        }
                        var d, e, j, m = this,
                            a = a.split(" ");
                        for (d = 0; d < a.length; d++)
                            for (e = 0; e < this.length; e++)
                                if (c(b) ||
                                    !1 === b) c(b) && (g = h || !1, h = b), 0 === a[d].indexOf(".") ? f(a[d].substr(1), h, g) : this[e].removeEventListener(a[d], h, g);
                                else {
                                    if (this[e].DomLiveListeners)
                                        for (j = 0; j < this[e].DomLiveListeners.length; j++) this[e].DomLiveListeners[j].listener === h && this[e].removeEventListener(a[d], this[e].DomLiveListeners[j].liveListener, g);
                                    this[e].DomNameSpaces && this[e].DomNameSpaces.length && a[d] && f(a[d])
                                }
                        return this
                    },
                    trigger: function(a, b) {
                        for (var h = a.split(" "), c = 0; c < h.length; c++)
                            for (var g = 0; g < this.length; g++) {
                                var d;
                                try {
                                    d = new CustomEvent(h[c], {
                                        detail: b,
                                        bubbles: !0,
                                        cancelable: !0
                                    })
                                } catch (f) {
                                    d = e.createEvent("Event"), d.initEvent(h[c], !0, !0), d.detail = b
                                }
                                this[g].dispatchEvent(d)
                            }
                        return this
                    },
                    width: function(a) {
                        return a !== b ? this.css("width", a) : this[0] === i ? i.innerWidth : this[0] === e ? e.documentElement.scrollWidth : 0 < this.length ? parseFloat(this.css("width")) : null
                    },
                    height: function(a) {
                        if (a !== b) return this.css("height", a);
                        if (this[0] === i) return i.innerHeight;
                        if (this[0] === e) {
                            var a = e.body,
                                c = e.documentElement;
                            return Math.max(a.scrollHeight, a.offsetHeight, c.clientHeight,
                                c.scrollHeight, c.offsetHeight)
                        }
                        return 0 < this.length ? parseFloat(this.css("height")) : null
                    },
                    innerWidth: function() {
                        var a = this;
                        if (0 < this.length) {
                            if (this[0].innerWidth) return this[0].innerWidth;
                            var b = this[0].offsetWidth;
                            ["left", "right"].forEach(function(h) {
                                b -= parseInt(a.css(f("border-" + h + "-width")) || 0, 10)
                            });
                            return b
                        }
                    },
                    innerHeight: function() {
                        var a = this;
                        if (0 < this.length) {
                            if (this[0].innerHeight) return this[0].innerHeight;
                            var b = this[0].offsetHeight;
                            ["top", "bottom"].forEach(function(h) {
                                b -= parseInt(a.css(f("border-" +
                                    h + "-width")) || 0, 10)
                            });
                            return b
                        }
                    },
                    offset: function() {
                        if (0 < this.length) {
                            var a = this[0],
                                b = a.getBoundingClientRect(),
                                h = e.body;
                            return {
                                top: b.top + (i.pageYOffset || a.scrollTop) - (a.clientTop || h.clientTop || 0),
                                left: b.left + (i.pageXOffset || a.scrollLeft) - (a.clientLeft || h.clientLeft || 0)
                            }
                        }
                    },
                    hide: function() {
                        for (var a = 0; a < this.length; a++) this[a].style.display = "none";
                        return this
                    },
                    show: function() {
                        for (var a = 0; a < this.length; a++) "none" == this[a].style.display && (this[a].style.display = "block"), "none" == this[a].style.getPropertyValue("display") &&
                            (this[a].style.display = "block");
                        return this
                    },
                    clone: function() {
                        return this.map(function() {
                            return this.cloneNode(!0)
                        })
                    },
                    styles: function() {
                        return this[0] ? i.getComputedStyle(this[0], null) : b
                    },
                    css: function(a, b) {
                        var h, c, d, f, e = this[0],
                            j = "";
                        if (2 > arguments.length) {
                            if (!e) return;
                            h = getComputedStyle(e, "");
                            if ("string" === typeof a) return e.style[a] || h.getPropertyValue(a);
                            if (g.isArray(a)) return f = {}, g.each(a, function(a, b) {
                                f[b] = e.style[b] || h.getPropertyValue(b)
                            }), f
                        }
                        if ("string" === typeof a) !b && 0 !== b ? this.each(function() {
                                this.style.removeProperty(o(a))
                            }) :
                            j = o(a) + ":" + ("number" == typeof b && !E[o(a)] ? b + "px" : b);
                        else
                            for (d in a)
                                if (!a[d] && 0 !== a[d])
                                    for (c = 0; c < this.length; c++) this[c].style.removeProperty(o(d));
                                else j += o(d) + ":" + ("number" == typeof a[d] && !E[o(d)] ? a[d] + "px" : a[d]) + ";"; return this.each(function() {
                            this.style.cssText += ";" + j
                        })
                    },
                    each: function(a) {
                        for (var b = 0; b < this.length && !1 !== a.apply(this[b], [b, this[b]]); b++);
                        return this
                    },
                    filter: function(a) {
                        for (var b = [], h = 0; h < this.length; h++) c(a) ? a.call(this[h], h, this[h]) && b.push(this[h]) : g.matches(this[h], a) && b.push(this[h]);
                        return new d(b)
                    },
                    html: function(a) {
                        if ("undefined" === typeof a) return this[0] ? this[0].innerHTML : b;
                        this.empty();
                        for (var c = 0; c < this.length; c++) this[c].innerHTML = a;
                        return this
                    },
                    text: function(a) {
                        if ("undefined" === typeof a) return this[0] ? this[0].textContent.trim() : null;
                        for (var b = 0; b < this.length; b++) this[b].textContent = a;
                        return this
                    },
                    is: function(a) {
                        return 0 < this.length && g.matches(this[0], a)
                    },
                    not: function(d) {
                        var f = [];
                        if (c(d) && d.call !== b) this.each(function(a) {
                            d.call(this, a) || f.push(this)
                        });
                        else {
                            var h = "string" ==
                                typeof d ? this.filter(d) : "number" == typeof d.length && c(d.item) ? j.call(d) : g(d);
                            a(h) && (h = g.map(h, function(a) {
                                return a
                            }));
                            this.each(function(a, b) {
                                0 > h.indexOf(b) && f.push(b)
                            })
                        }
                        return g(f)
                    },
                    indexOf: function(a) {
                        for (var b = 0; b < this.length; b++)
                            if (this[b] === a) return b
                    },
                    index: function(a) {
                        return a ? this.indexOf(g(a)[0]) : this.parent().children().indexOf(this[0])
                    },
                    get: function(a) {
                        return a === b ? j.call(this) : this[0 <= a ? a : a + this.length]
                    },
                    eq: function(a) {
                        if ("undefined" === typeof a) return this;
                        var b = this.length;
                        return a > b -
                            1 ? new d([]) : 0 > a ? (a = b + a, 0 > a ? new d([]) : new d([this[a]])) : new d([this[a]])
                    },
                    append: function(a) {
                        var b, h;
                        for (b = 0; b < this.length; b++)
                            if ("string" === typeof a) {
                                h = e.createElement("div");
                                for (h.innerHTML = a; h.firstChild;) this[b].appendChild(h.firstChild)
                            } else if (a instanceof d)
                            for (h = 0; h < a.length; h++) this[b].appendChild(a[h]);
                        else this[b].appendChild(a);
                        return this
                    },
                    appendTo: function(a) {
                        g(a).append(this);
                        return this
                    },
                    prepend: function(a) {
                        var b, h;
                        for (b = 0; b < this.length; b++)
                            if ("string" === typeof a) {
                                var c = e.createElement("div");
                                c.innerHTML = a;
                                for (h = c.childNodes.length - 1; 0 <= h; h--) this[b].insertBefore(c.childNodes[h], this[b].childNodes[0])
                            } else if (a instanceof d)
                            for (h = 0; h < a.length; h++) this[b].insertBefore(a[h], this[b].childNodes[0]);
                        else this[b].insertBefore(a, this[b].childNodes[0]);
                        return this
                    },
                    prependTo: function(a) {
                        g(a).prepend(this);
                        return this
                    },
                    insertBefore: function(a) {
                        for (var a = g(a), b = 0; b < this.length; b++)
                            if (1 === a.length) a[0].parentNode.insertBefore(this[b], a[0]);
                            else if (1 < a.length)
                            for (var h = 0; h < a.length; h++) a[h].parentNode.insertBefore(this[b].cloneNode(!0),
                                a[h]);
                        return this
                    },
                    insertAfter: function(a) {
                        for (var a = g(a), b = 0; b < this.length; b++)
                            if (1 === a.length) a[0].parentNode.insertBefore(this[b], a[0].nextSibling);
                            else if (1 < a.length)
                            for (var h = 0; h < a.length; h++) a[h].parentNode.insertBefore(this[b].cloneNode(!0), a[h].nextSibling);
                        return this
                    },
                    next: function(a) {
                        return 0 < this.length ? a ? this[0].nextElementSibling && g(this[0].nextElementSibling).is(a) ? new d([this[0].nextElementSibling]) : new d([]) : this[0].nextElementSibling ? new d([this[0].nextElementSibling]) : new d([]) :
                            new d([])
                    },
                    nextAll: function(a) {
                        var b = [],
                            h = this[0];
                        if (!h) return new d([]);
                        for (; h.nextElementSibling;) h = h.nextElementSibling, a ? g(h).is(a) && b.push(h) : b.push(h);
                        return new d(b)
                    },
                    prev: function(a) {
                        return 0 < this.length ? a ? this[0].previousElementSibling && g(this[0].previousElementSibling).is(a) ? new d([this[0].previousElementSibling]) : new d([]) : this[0].previousElementSibling ? new d([this[0].previousElementSibling]) : new d([]) : new d([])
                    },
                    prevAll: function(a) {
                        var b = [],
                            h = this[0];
                        if (!h) return new d([]);
                        for (; h.previousElementSibling;) h =
                            h.previousElementSibling, a ? g(h).is(a) && b.push(h) : b.push(h);
                        return new d(b)
                    },
                    parent: function(a) {
                        for (var b = [], h = 0; h < this.length; h++) null !== this[h].parentNode && (a ? g(this[h].parentNode).is(a) && b.push(this[h].parentNode) : b.push(this[h].parentNode));
                        return g(g.unique(b))
                    },
                    parents: function(a) {
                        for (var b = [], h = 0; h < this.length; h++)
                            for (var c = this[h].parentNode; c;) a ? g(c).is(a) && b.push(c) : b.push(c), c = c.parentNode;
                        return g(g.unique(b))
                    },
                    find: function(a) {
                        for (var b = [], h = 0; h < this.length; h++)
                            for (var c = this[h].querySelectorAll(a),
                                    g = 0; g < c.length; g++) b.push(c[g]);
                        return new d(b)
                    },
                    children: function(a) {
                        for (var b = [], h = 0; h < this.length; h++)
                            for (var c = this[h].childNodes, f = 0; f < c.length; f++) a ? 1 === c[f].nodeType && g(c[f]).is(a) && b.push(c[f]) : 1 === c[f].nodeType && b.push(c[f]);
                        return new d(g.unique(b))
                    },
                    remove: function() {
                        for (var a = 0; a < this.length; a++) this[a].parentNode && this[a].parentNode.removeChild(this[a]);
                        return this
                    },
                    add: function() {
                        var a, b;
                        for (a = 0; a < arguments.length; a++) {
                            var h = g(arguments[a]);
                            for (b = 0; b < h.length; b++) this[this.length] = h[b],
                                this.length++
                        }
                        return this
                    },
                    before: function(a) {
                        g(a).insertBefore(this);
                        return this
                    },
                    after: function(a) {
                        g(a).insertAfter(this);
                        return this
                    },
                    scrollTop: function(a) {
                        if (this.length) {
                            var c = "scrollTop" in this[0];
                            return a === b ? c ? this[0].scrollTop : this[0].pageYOffset : this.each(c ? function() {
                                this.scrollTop = a
                            } : function() {
                                this.scrollTo(this.scrollX, a)
                            })
                        }
                    },
                    scrollLeft: function(a) {
                        if (this.length) {
                            var c = "scrollLeft" in this[0];
                            return a === b ? c ? this[0].scrollLeft : this[0].pageXOffset : this.each(c ? function() {
                                this.scrollLeft =
                                    a
                            } : function() {
                                this.scrollTo(a, this.scrollY)
                            })
                        }
                    },
                    contents: function() {
                        return this.map(function(a, b) {
                            return j.call(b.childNodes)
                        })
                    },
                    nextUntil: function(a) {
                        for (var b = this, h = []; b.length && !b.filter(a).length;) h.push(b[0]), b = b.next();
                        return g(h)
                    },
                    prevUntil: function(a) {
                        for (var b = this, h = []; b.length && !g(b).filter(a).length;) h.push(b[0]), b = b.prev();
                        return g(h)
                    },
                    detach: function() {
                        return this.remove()
                    }
                };
                g.fn = d.prototype;
                return g
            }(),
            r = g;
        k.$ = g;
        r.inArray = function(a, b, c) {
            return m.indexOf.call(b, a, c)
        };
        r.extend = function(a) {
            var b,
                c = j.call(arguments, 1);
            "boolean" == typeof a && (b = a, a = c.shift());
            a = a || {};
            c.forEach(function(c) {
                d(a, c, b)
            });
            return a
        };
        r.isFunction = c;
        r.isArray = function(a) {
            return "[object Array]" === Object.prototype.toString.apply(a)
        };
        r.isPlainObject = function(b) {
            return a(b) && null !== b && b !== b.window && Object.getPrototypeOf(b) == Object.prototype
        };
        r.each = function(b, c) {
            var d;
            if (a(b) && c) {
                if (r.isArray(b) || b instanceof g)
                    for (d = 0; d < b.length && !1 !== c.call(b[d], d, b[d]); d++);
                else
                    for (d in b)
                        if (b.hasOwnProperty(d) && "length" !== d && !1 === c.call(b[d],
                                d, b[d])) break; return this
            }
        };
        r.unique = function(a) {
            for (var b = [], c = 0; c < a.length; c++) - 1 === b.indexOf(a[c]) && b.push(a[c]);
            return b
        };
        r.map = function(a, b) {
            var c, d = [],
                h;
            if ("number" == typeof a.length)
                for (h = 0; h < a.length; h++) c = b(a[h], h), null !== c && d.push(c);
            else
                for (h in a) c = b(a[h], h), null !== c && d.push(c);
            return 0 < d.length ? r.fn.concat.apply([], d) : d
        };
        r.matches = function(a, b) {
            return !b || !a || 1 !== a.nodeType ? !1 : (a.matchesSelector || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector).call(a, b)
        }
    })(window, document);
    k = k || {};
    (function(i, e, b) {
        function c(a) {
            for (var c in a)
                if (r[a[c]] !== b) return !0;
            return !1
        }

        function a(a, c, d) {
            var g = a;
            if ("object" === typeof c) return a.each(function() {
                j[this.id] && j[this.id].destroy();
                new k.classes[c.component || "Scroller"](this, c)
            });
            "string" === typeof c && a.each(function() {
                var a;
                if ((a = j[this.id]) && a[c])
                    if (a = a[c].apply(this, Array.prototype.slice.call(d, 1)), a !== b) return g = a, !1
            });
            return g
        }

        function f(a) {
            if (d.tapped && !a.tap && !("TEXTAREA" == a.target.nodeName && "mousedown" == a.type)) return a.stopPropagation(),
                a.preventDefault(), !1
        }
        var d, o, E, s = "undefined" == typeof jQuery ? k.$ : jQuery,
            m = +new Date,
            j = {},
            g = s.extend;
        E = navigator.userAgent.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i);
        var r = e.createElement("modernizr").style,
            i = c(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]),
            A = c(["flex", "msFlex", "WebkitBoxDirection"]),
            u = function() {
                var a = ["Webkit", "Moz", "O", "ms"],
                    b;
                for (b in a)
                    if (c([a[b] + "Transform"])) return "-" + a[b].toLowerCase() + "-";
                return ""
            }(),
            t = u.replace(/^\-/,
                "").replace(/\-$/, "").replace("moz", "Moz"),
            v = [];
        /Android/i.test(E) ? (o = "android", (E = navigator.userAgent.match(/Android\s+([\d\.]+)/i)) && (v = E[0].replace("Android ", "").split("."))) : /iPhone|iPad|iPod/i.test(E) ? (o = "ios", (E = navigator.userAgent.match(/OS\s+([\d\_]+)/i)) && (v = E[0].replace(/_/g, ".").replace("OS ", "").split("."))) : /Windows Phone/i.test(E) ? o = "wp" : /Windows|MSIE/i.test(E) && (o = "windows");
        d = k = {
            $: s,
            version: "3.0.0-beta5",
            util: {
                prefix: u,
                jsPrefix: t,
                has3d: i,
                hasFlex: A,
                preventClick: function() {
                    d.tapped++;
                    setTimeout(function() {
                        d.tapped--
                    }, 500)
                },
                testTouch: function(a, b) {
                    if (a.type == "touchstart") s(b).attr("data-touch", "1");
                    else if (s(b).attr("data-touch")) {
                        s(b).removeAttr("data-touch");
                        return false
                    }
                    return true
                },
                objectToArray: function(a) {
                    var b = [],
                        c;
                    for (c in a) b.push(a[c]);
                    return b
                },
                arrayToObject: function(a) {
                    var b = {},
                        c;
                    if (a)
                        for (c = 0; c < a.length; c++) b[a[c]] = a[c];
                    return b
                },
                isNumeric: function(a) {
                    return a - parseFloat(a) >= 0
                },
                isString: function(a) {
                    return typeof a === "string"
                },
                getCoord: function(a, b, c) {
                    var d = a.originalEvent ||
                        a,
                        b = (c ? "page" : "client") + b;
                    return d.targetTouches && d.targetTouches[0] ? d.targetTouches[0][b] : d.changedTouches && d.changedTouches[0] ? d.changedTouches[0][b] : a[b]
                },
                getPosition: function(a, c) {
                    var d = getComputedStyle(a[0]),
                        g;
                    s.each(["t", "webkitT", "MozT", "OT", "msT"], function(a, c) {
                        if (d[c + "ransform"] !== b) {
                            g = d[c + "ransform"];
                            return false
                        }
                    });
                    g = g.split(")")[0].split(", ");
                    return c ? g[13] || g[5] : g[12] || g[4]
                },
                constrain: function(a, b, c) {
                    return Math.max(b, Math.min(a, c))
                },
                vibrate: function(a) {
                    "vibrate" in navigator && navigator.vibrate(a ||
                        50)
                }
            },
            tapped: 0,
            autoTheme: "mobiscroll",
            presets: {
                scroller: {},
                numpad: {},
                listview: {},
                menustrip: {}
            },
            themes: {
                form: {},
                frame: {},
                listview: {},
                menustrip: {},
                progress: {}
            },
            platform: {
                name: o,
                majorVersion: v[0],
                minorVersion: v[1]
            },
            i18n: {},
            instances: j,
            classes: {},
            components: {},
            settings: {},
            setDefaults: function(a) {
                g(this.settings, a)
            },
            presetShort: function(c, f, e) {
                d[c] = function(a, g) {
                    var m, i, o = {},
                        n = g || {};
                    s.extend(n, {
                        preset: e === false ? b : c
                    });
                    s(a).each(function() {
                        j[this.id] && j[this.id].destroy();
                        m = new d.classes[f || "Scroller"](this,
                            n);
                        o[this.id] = m
                    });
                    i = Object.keys(o);
                    return i.length == 1 ? o[i[0]] : o
                };
                this.components[c] = function(d) {
                    return a(this, g(d, {
                        component: f,
                        preset: e === false ? b : c
                    }), arguments)
                }
            }
        };
        s.mobiscroll = k;
        s.fn.mobiscroll = function(b) {
            g(this, k.components);
            return a(this, b, arguments)
        };
        k.classes.Base = function(a, b) {
            var c, d, f, e, i, o, n = k,
                E = n.util,
                q = E.getCoord,
                r = this;
            r.settings = {};
            r._presetLoad = function() {};
            r._init = function(j) {
                for (var m in r.settings) delete r.settings[m];
                f = r.settings;
                g(b, j);
                if (r._hasDef) o = n.settings;
                g(f, r._defaults,
                    o, b);
                if (r._hasTheme) {
                    i = f.theme;
                    if (i == "auto" || !i) i = n.autoTheme;
                    i == "default" && (i = "mobiscroll");
                    b.theme = i;
                    e = n.themes[r._class] ? n.themes[r._class][i] : {}
                }
                r._hasLang && (c = n.i18n[f.lang]);
                r._hasTheme && r.trigger("onThemeLoad", {
                    lang: c,
                    settings: b
                });
                g(f, e, c, o, b);
                if (r._hasPreset) {
                    r._presetLoad(f);
                    if (d = n.presets[r._class][f.preset]) {
                        d = d.call(a, r);
                        g(f, d, b)
                    }
                }
            };
            r._destroy = function() {
                if (r) {
                    r.trigger("onDestroy", []);
                    delete j[a.id];
                    r = null
                }
            };
            r.tap = function(a, b, c) {
                function d(a) {
                    if (!p) {
                        c && a.preventDefault();
                        p = this;
                        j = q(a,
                            "X");
                        n = q(a, "Y");
                        m = false
                    }
                }

                function h(a) {
                    if (p && !m && (Math.abs(q(a, "X") - j) > 9 || Math.abs(q(a, "Y") - n) > 9)) m = true
                }

                function g(a) {
                    if (p) {
                        if (!m) {
                            a.preventDefault();
                            b.call(p, a, r)
                        }
                        p = false;
                        E.preventClick()
                    }
                }

                function e() {
                    p = false
                }
                var j, n, p, m;
                if (f.tap) a.on("touchstart.mbsc", d).on("touchcancel.mbsc", e).on("touchmove.mbsc", h).on("touchend.mbsc", g);
                a.on("click.mbsc", function(a) {
                    a.preventDefault();
                    b.call(this, a, r)
                })
            };
            r.trigger = function(c, g) {
                var f, j, n, p = [o, e, d, b];
                for (j = 0; j < 4; j++)(n = p[j]) && n[c] && (f = n[c].call(a, g || {}, r));
                return f
            };
            r.option = function(a, b) {
                var c = {};
                typeof a === "object" ? c = a : c[a] = b;
                r.init(c)
            };
            r.getInst = function() {
                return r
            };
            b = b || {};
            s(a).addClass("mbsc-comp");
            if (!a.id) a.id = "mobiscroll" + ++m;
            j[a.id] = r
        };
        e.addEventListener && s.each(["mouseover", "mousedown", "mouseup", "click"], function(a, b) {
            e.addEventListener(b, f, true)
        })
    })(window, document);
    k.i18n.hu = {
        setText: "OK",
        cancelText: "M\u00e9gse",
        clearText: "T\u00f6rl\u00e9s",
        selectedText: "{count} kiv\u00e1lasztva",
        dateFormat: "yy.mm.dd.",
        dayNames: "Vas\u00e1rnap,H\u00e9tf\u0151,Kedd,Szerda,Cs\u00fct\u00f6rt\u00f6k,P\u00e9ntek,Szombat".split(","),
        dayNamesShort: "Va,H\u00e9,Ke,Sze,Cs\u00fc,P\u00e9,Szo".split(","),
        dayNamesMin: "V,H,K,Sz,Cs,P,Sz".split(","),
        dayText: "Nap",
        delimiter: ".",
        hourText: "\u00d3ra",
        minuteText: "Perc",
        monthNames: "Janu\u00e1r,Febru\u00e1r,M\u00e1rcius,\u00c1prilis,M\u00e1jus,J\u00fanius,J\u00falius,Augusztus,Szeptember,Okt\u00f3ber,November,December".split(","),
        monthNamesShort: "Jan,Feb,M\u00e1r,\u00c1pr,M\u00e1j,J\u00fan,J\u00fal,Aug,Szep,Okt,Nov,Dec".split(","),
        monthText: "H\u00f3nap",
        secText: "M\u00e1sodperc",
        timeFormat: "H:ii",
        yearText: "\u00c9v",
        nowText: "Most",
        pmText: "de",
        amText: "du",
        firstDay: 1,
        dateText: "D\u00e1tum",
        timeText: "Id\u0151",
        calendarText: "Napt\u00e1r",
        todayText: "Ma",
        prevMonthText: "El\u0151z\u0151 h\u00f3nap",
        nextMonthText: "K\u00f6vetkez\u0151 h\u00f3nap",
        prevYearText: "El\u0151z\u0151 \u00e9v",
        nextYearText: "K\u00f6vetkez\u0151 \u00e9v",
        closeText: "Bez\u00e1r",
        eventText: "esem\u00e9ny",
        eventsText: "esem\u00e9ny",
        fromText: "Eleje",
        toText: "V\u00e9ge",
        wholeText: "Eg\u00e9sz",
        fractionText: "T\u00f6rt",
        unitText: "Egys\u00e9g",
        labels: "\u00c9v,H\u00f3nap,Nap,\u00d3ra,Perc,M\u00e1sodperc,".split(","),
        labelsShort: "\u00c9v,H\u00f3.,Nap,\u00d3ra,Perc,Mp.,".split(","),
        startText: "Ind\u00edt",
        stopText: "Meg\u00e1ll\u00edt",
        resetText: "Vissza\u00e1ll\u00edt",
        lapText: "Lap",
        hideText: "Elrejt",
        backText: "Vissza",
        undoText: "Visszavon",
        offText: "Ki",
        onText: "Be",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.de = {
        setText: "OK",
        cancelText: "Abbrechen",
        clearText: "L\u00f6schen",
        selectedText: "{count} ausgew\u00e4hlt",
        dateFormat: "dd.mm.yy",
        dayNames: "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","),
        dayNamesShort: "So,Mo,Di,Mi,Do,Fr,Sa".split(","),
        dayNamesMin: "S,M,D,M,D,F,S".split(","),
        dayText: "Tag",
        delimiter: ".",
        hourText: "Stunde",
        minuteText: "Minuten",
        monthNames: "Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","),
        monthNamesShort: "Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","),
        monthText: "Monat",
        secText: "Sekunden",
        timeFormat: "HH:ii",
        yearText: "Jahr",
        nowText: "Jetzt",
        pmText: "nachm.",
        amText: "vorm.",
        todayText: "Heute",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Zeit",
        calendarText: "Kalender",
        closeText: "Schlie\u00dfen",
        fromText: "Von",
        toText: "Um",
        wholeText: "Ganze Zahl",
        fractionText: "Bruchzahl",
        unitText: "Ma\u00dfeinheit",
        labels: "Jahre,Monate,Tage,Stunden,Minuten,Sekunden,".split(","),
        labelsShort: "Jahr.,Mon.,Tag.,Std.,Min.,Sek.,".split(","),
        startText: "Starten",
        stopText: "Stoppen",
        resetText: "Zur\u00fccksetzen",
        lapText: "Lap",
        hideText: "Ausblenden",
        backText: "Zur\u00fcck",
        undoText: "R\u00fcckg\u00e4ngig machen",
        offText: "Aus",
        onText: "Ein",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.es = {
        setText: "Aceptar",
        cancelText: "Cancelar",
        clearText: "Borrar",
        selectedText: "{count} seleccionado",
        selectedPluralText: "{count} seleccionados",
        dateFormat: "dd/mm/yy",
        dayNames: "Domingo,Lunes,Martes,Mi&#xE9;rcoles,Jueves,Viernes,S&#xE1;bado".split(","),
        dayNamesShort: "Do,Lu,Ma,Mi,Ju,Vi,S&#xE1;".split(","),
        dayNamesMin: "D,L,M,M,J,V,S".split(","),
        dayText: "D&#237;a",
        hourText: "Horas",
        minuteText: "Minutos",
        monthNames: "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre".split(","),
        monthNamesShort: "Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic".split(","),
        monthText: "Mes",
        secText: "Segundos",
        timeFormat: "HH:ii",
        yearText: "A&ntilde;o",
        nowText: "Ahora",
        pmText: "pm",
        amText: "am",
        todayText: "Hoy",
        firstDay: 1,
        dateText: "Fecha",
        timeText: "Tiempo",
        calendarText: "Calendario",
        closeText: "Cerrar",
        fromText: "Iniciar",
        toText: "Final",
        wholeText: "Entero",
        fractionText: "Fracci\u00f3n",
        unitText: "Unidad",
        labels: "A\u00f1os,Meses,D\u00edas,Horas,Minutos,Segundos,".split(","),
        labelsShort: "A\u00f1o,Mes,D\u00eda,Hora,Min,Seg,".split(","),
        startText: "Iniciar",
        stopText: "Det\u00e9ngase",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "Volver",
        undoText: "Deshacer",
        offText: "No",
        onText: "S\u00ed",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.fr = {
        setText: "Terminer",
        cancelText: "Annuler",
        clearText: "Effacer",
        selectedText: "{count} s\u00e9lectionn\u00e9",
        selectedPluralText: "{count} s\u00e9lectionn\u00e9s",
        dateFormat: "dd/mm/yy",
        dayNames: "&#68;imanche,Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi".split(","),
        dayNamesShort: "&#68;im.,Lun.,Mar.,Mer.,Jeu.,Ven.,Sam.".split(","),
        dayNamesMin: "&#68;,L,M,M,J,V,S".split(","),
        dayText: "Jour",
        monthText: "Mois",
        monthNames: "Janvier,F\u00e9vrier,Mars,Avril,Mai,Juin,Juillet,Ao\u00fbt,Septembre,Octobre,Novembre,D\u00e9cembre".split(","),
        monthNamesShort: "Janv.,F\u00e9vr.,Mars,Avril,Mai,Juin,Juil.,Ao\u00fbt,Sept.,Oct.,Nov.,D\u00e9c.".split(","),
        hourText: "Heures",
        minuteText: "Minutes",
        secText: "Secondes",
        timeFormat: "HH:ii",
        yearText: "Ann\u00e9e",
        nowText: "Maintenant",
        pmText: "apr\u00e8s-midi",
        amText: "avant-midi",
        todayText: "Aujourd'hui",
        firstDay: 1,
        dateText: "Date",
        timeText: "Heure",
        calendarText: "Calendrier",
        closeText: "Fermer",
        fromText: "D\u00e9marrer",
        toText: "Fin",
        wholeText: "Entier",
        fractionText: "Fraction",
        unitText: "Unit\u00e9",
        labels: "Ans,Mois,Jours,Heures,Minutes,Secondes,".split(","),
        labelsShort: "Ans,Mois,Jours,Hrs,Min,Sec,".split(","),
        startText: "D\u00e9marrer",
        stopText: "Arr\u00eater",
        resetText: "R\u00e9initialiser",
        lapText: "Lap",
        hideText: "Cachez",
        backText: "Arri\u00e8re",
        undoText: "D\u00e9faire",
        offText: "Non",
        onText: "Oui",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.it = {
        setText: "OK",
        cancelText: "Annulla",
        clearText: "Chiarire",
        selectedText: "{count} selezionato",
        selectedPluralText: "{count} selezionati",
        dateFormat: "dd/mm/yy",
        dayNames: "Domenica,Luned\u00ec,Merted\u00ec,Mercoled\u00ec,Gioved\u00ec,Venerd\u00ec,Sabato".split(","),
        dayNamesShort: "Do,Lu,Ma,Me,Gi,Ve,Sa".split(","),
        dayNamesMin: "D,L,M,M,G,V,S".split(","),
        dayText: "Giorno",
        hourText: "Ore",
        minuteText: "Minuti",
        monthNames: "Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre".split(","),
        monthNamesShort: "Gen,Feb,Mar,Apr,Mag,Giu,Lug,Ago,Set,Ott,Nov,Dic".split(","),
        monthText: "Mese",
        secText: "Secondi",
        timeFormat: "HH:ii",
        yearText: "Anno",
        nowText: "Ora",
        pmText: "pm",
        amText: "am",
        todayText: "Oggi",
        firstDay: 1,
        dateText: "Data",
        timeText: "Volta",
        calendarText: "Calendario",
        closeText: "Chiudere",
        fromText: "Inizio",
        toText: "Fine",
        wholeText: "Intero",
        fractionText: "Frazione",
        unitText: "Unit\u00e0",
        labels: "Anni,Mesi,Giorni,Ore,Minuti,Secondi,".split(","),
        labelsShort: "Anni,Mesi,Gio,Ore,Min,Sec,".split(","),
        startText: "Inizio",
        stopText: "Arresto",
        resetText: "Ripristina",
        lapText: "Lap",
        hideText: "Nascondi",
        backText: "Indietro",
        undoText: "Annulla",
        offText: "Via",
        onText: "Su",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.no = {
        setText: "OK",
        cancelText: "Avbryt",
        clearText: "T\u00f8mme",
        selectedText: "{count} valgt",
        dateFormat: "dd.mm.yy",
        dayNames: "S\u00f8ndag,Mandag,Tirsdag,Onsdag,Torsdag,Fredag,L\u00f8rdag".split(","),
        dayNamesShort: "S\u00f8,Ma,Ti,On,To,Fr,L\u00f8".split(","),
        dayNamesMin: "S,M,T,O,T,F,L".split(","),
        dayText: "Dag",
        delimiter: ".",
        hourText: "Time",
        minuteText: "Minutt",
        monthNames: "Januar,Februar,Mars,April,Mai,Juni,Juli,August,September,Oktober,November,Desember".split(","),
        monthNamesShort: "Jan,Feb,Mar,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Des".split(","),
        monthText: "M\u00e5ned",
        secText: "Sekund",
        timeFormat: "HH:ii",
        yearText: "\u00c5r",
        nowText: "N\u00e5",
        pmText: "pm",
        amText: "am",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Dato",
        timeText: "Tid",
        calendarText: "Kalender",
        closeText: "Lukk",
        fromText: "Start",
        toText: "End",
        wholeText: "Hele",
        fractionText: "Fraksjon",
        unitText: "Enhet",
        labels: "\u00c5r,M\u00e5neder,Dager,Timer,Minutter,Sekunder,".split(","),
        labelsShort: "\u00c5r,M\u00e5n,Dag,Time,Min,Sek,".split(","),
        startText: "Start",
        stopText: "Stopp",
        resetText: "Tilbakestille",
        lapText: "Runde",
        hideText: "Skjul",
        backText: "Tilbake",
        undoText: "Angre",
        offText: "Av",
        onText: "P\u00e5",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n["pt-BR"] = {
        setText: "Selecionar",
        cancelText: "Cancelar",
        clearText: "Claro",
        selectedText: "{count} selecionado",
        selectedPluralText: "{count} selecionados",
        dateFormat: "dd/mm/yy",
        dayNames: "Domingo,Segunda-feira,Ter\u00e7a-feira,Quarta-feira,Quinta-feira,Sexta-feira,S\u00e1bado".split(","),
        dayNamesShort: "Dom,Seg,Ter,Qua,Qui,Sex,S\u00e1b".split(","),
        dayNamesMin: "D,S,T,Q,Q,S,S".split(","),
        dayText: "Dia",
        hourText: "Hora",
        minuteText: "Minutos",
        monthNames: "Janeiro,Fevereiro,Mar\u00e7o,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro".split(","),
        monthNamesShort: "Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez".split(","),
        monthText: "M\u00eas",
        secText: "Segundo",
        timeFormat: "HH:ii",
        yearText: "Ano",
        nowText: "Agora",
        pmText: "da tarde",
        amText: "da manh\u00e3",
        todayText: "Hoje",
        dateText: "Data",
        timeText: "Tempo",
        calendarText: "Calend\u00e1rio",
        closeText: "Fechar",
        fromText: "In&iacute;cio",
        toText: "Fim",
        wholeText: "Inteiro",
        fractionText: "Fra\u00e7\u00e3o",
        unitText: "Unidade",
        labels: "Anos,Meses,Dias,Horas,Minutos,Segundos,".split(","),
        labelsShort: "Ano,M&ecirc;s,Dia,Hora,Min,Seg,".split(","),
        startText: "Come\u00e7ar",
        stopText: "Pare",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "De volta",
        undoText: "Desfazer",
        offText: "Desl",
        onText: "Lig",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.zh = {
        setText: "\u786e\u5b9a",
        cancelText: "\u53d6\u6d88",
        clearText: "\u660e\u786e",
        selectedText: "{count} \u9009",
        dateFormat: "yy/mm/dd",
        dayNames: "\u5468\u65e5,\u5468\u4e00,\u5468\u4e8c,\u5468\u4e09,\u5468\u56db,\u5468\u4e94,\u5468\u516d".split(","),
        dayNamesShort: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
        dayNamesMin: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
        dayText: "\u65e5",
        hourText: "\u65f6",
        minuteText: "\u5206",
        monthNames: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
        monthNamesShort: "\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d,\u4e03,\u516b,\u4e5d,\u5341,\u5341\u4e00,\u5341\u4e8c".split(","),
        monthText: "\u6708",
        secText: "\u79d2",
        timeFormat: "HH:ii",
        yearText: "\u5e74",
        nowText: "\u5f53\u524d",
        pmText: "\u4e0b\u5348",
        amText: "\u4e0a\u5348",
        todayText: "\u4eca\u5929",
        dateText: "\u65e5",
        timeText: "\u65f6\u95f4",
        calendarText: "\u65e5\u5386",
        closeText: "\u5173\u95ed",
        fromText: "\u5f00\u59cb\u65f6\u95f4",
        toText: "\u7ed3\u675f\u65f6\u95f4",
        wholeText: "\u5408\u8ba1",
        fractionText: "\u5206\u6570",
        unitText: "\u5355\u4f4d",
        labels: "\u5e74,\u6708,\u65e5,\u5c0f\u65f6,\u5206\u949f,\u79d2,".split(","),
        labelsShort: "\u5e74,\u6708,\u65e5,\u70b9,\u5206,\u79d2,".split(","),
        startText: "\u5f00\u59cb",
        stopText: "\u505c\u6b62",
        resetText: "\u91cd\u7f6e",
        lapText: "\u5708",
        hideText: "\u9690\u85cf",
        backText: "\u80cc\u90e8",
        undoText: "\u590d\u539f",
        offText: "\u5173\u95ed",
        onText: "\u5f00\u542f",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.nl = {
        setText: "Instellen",
        cancelText: "Annuleren",
        clearText: "Duidelijk",
        selectedText: "{count} gekozen",
        dateFormat: "dd-mm-yy",
        dayNames: "zondag,maandag,Dinsdag,Woensdag,Donderdag,Vrijdag,Zaterdag".split(","),
        dayNamesShort: "zo,ma,di,wo,do,vr,za".split(","),
        dayNamesMin: "z,m,d,w,d,v,z".split(","),
        dayText: "Dag",
        hourText: "Uur",
        minuteText: "Minuten",
        monthNames: "januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december".split(","),
        monthNamesShort: "jan,feb,mrt,apr,mei,jun,jul,aug,sep,okt,nov,dec".split(","),
        monthText: "Maand",
        secText: "Seconden",
        timeFormat: "HH:ii",
        yearText: "Jaar",
        nowText: "Nu",
        pmText: "pm",
        amText: "am",
        todayText: "Vandaag",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Tijd",
        calendarText: "Kalender",
        closeText: "Sluiten",
        fromText: "Start",
        toText: "Einde",
        wholeText: "geheel",
        fractionText: "fractie",
        unitText: "eenheid",
        labels: "Jaren,Maanden,Dagen,Uren,Minuten,Seconden,".split(","),
        labelsShort: "j,m,d,u,min,sec,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Ronde",
        hideText: "Verbergen",
        backText: "Terug",
        undoText: "Onged. maken",
        offText: "Uit",
        onText: "Aan",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.tr = {
        setText: "Se\u00e7",
        cancelText: "\u0130ptal",
        clearText: "Temizleyin",
        selectedText: "{count} se\u00e7ilmi\u015f",
        dateFormat: "dd.mm.yy",
        dayNames: "Pazar,Pazartesi,Sal\u0131,\u00c7ar\u015famba,Per\u015fembe,Cuma,Cumartesi".split(","),
        dayNamesShort: "Paz,Pzt,Sal,\u00c7ar,Per,Cum,Cmt".split(","),
        dayNamesMin: "P,P,S,\u00c7,P,C,C".split(","),
        dayText: "G\u00fcn",
        delimiter: ".",
        hourText: "Saat",
        minuteText: "Dakika",
        monthNames: "Ocak,\u015eubat,Mart,Nisan,May\u0131s,Haziran,Temmuz,A\u011fustos,Eyl\u00fcl,Ekim,Kas\u0131m,Aral\u0131k".split(","),
        monthNamesShort: "Oca,\u015eub,Mar,Nis,May,Haz,Tem,A\u011fu,Eyl,Eki,Kas,Ara".split(","),
        monthText: "Ay",
        secText: "Saniye",
        timeFormat: "HH:ii",
        yearText: "Y\u0131l",
        nowText: "\u015eimdi",
        pmText: "ak\u015fam",
        amText: "sabah",
        todayText: "Bug\u00fcn",
        firstDay: 1,
        dateText: "Tarih",
        timeText: "Zaman",
        calendarText: "Takvim",
        closeText: "Kapatmak",
        fromText: "Ba\u015fla",
        toText: "Son",
        wholeText: "Tam",
        fractionText: "Kesir",
        unitText: "Birim",
        labels: "Y\u0131l,Ay,G\u00fcn,Saat,Dakika,Saniye,".split(","),
        labelsShort: "Y\u0131l,Ay,G\u00fcn,Sa,Dak,Sn,".split(","),
        startText: "Ba\u015fla",
        stopText: "Durdur",
        resetText: "S\u0131f\u0131rla",
        lapText: "Tur",
        hideText: "Gizle",
        backText: "Geri",
        undoText: "Geri Al",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: "."
    };
    k.i18n.ja = {
        setText: "\u30bb\u30c3\u30c8",
        cancelText: "\u30ad\u30e3\u30f3\u30bb\u30eb",
        clearText: "\u30af\u30ea\u30a2",
        selectedText: "{count} \u9078\u629e",
        dateFormat: "yy\u5e74mm\u6708dd\u65e5",
        dayNames: "\u65e5,\u6708,\u706b,\u6c34,\u6728,\u91d1,\u571f".split(","),
        dayNamesShort: "\u65e5,\u6708,\u706b,\u6c34,\u6728,\u91d1,\u571f".split(","),
        dayNamesMin: "\u65e5,\u6708,\u706b,\u6c34,\u6728,\u91d1,\u571f".split(","),
        dayText: "\u65e5",
        hourText: "\u6642",
        minuteText: "\u5206",
        monthNames: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
        monthNamesShort: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
        monthText: "\u6708",
        secText: "\u79d2",
        timeFormat: "HH:ii",
        yearText: "\u5e74",
        nowText: "\u4eca",
        pmText: "\u5348\u5f8c",
        amText: "\u5348\u524d",
        yearSuffix: "\u5e74",
        monthSuffix: "\u6708",
        daySuffix: "\u65e5",
        todayText: "\u4eca\u65e5",
        dateText: "\u65e5\u4ed8",
        timeText: "\u6642\u9593",
        calendarText: "\u30ab\u30ec\u30f3\u30c0\u30fc",
        closeText: "\u30af\u30ed\u30fc\u30ba",
        fromText: "\u958b\u59cb",
        toText: "\u7d42\u308f\u308a",
        wholeText: "\u5168\u6570",
        fractionText: "\u5206\u6570",
        unitText: "\u5358\u4f4d",
        labels: "\u5e74\u9593,\u6708\u9593,\u65e5\u9593,\u6642\u9593,\u5206,\u79d2,".split(","),
        labelsShort: "\u5e74\u9593,\u6708\u9593,\u65e5\u9593,\u6642\u9593,\u5206,\u79d2,".split(","),
        startText: "\u958b\u59cb",
        stopText: "\u505c\u6b62",
        resetText: "\u30ea\u30bb\u30c3\u30c8",
        lapText: "\u30e9\u30c3\u30d7",
        hideText: "\u96a0\u3059",
        backText: "\u30d0\u30c3\u30af",
        undoText: "\u30a2\u30f3\u30c9\u30a5"
    };
    k.i18n["pt-PT"] = {
        setText: "Seleccionar",
        cancelText: "Cancelar",
        clearText: "Claro",
        selectedText: "{count} selecionado",
        selectedPluralText: "{count} selecionados",
        dateFormat: "dd-mm-yy",
        dayNames: "Domingo,Segunda-feira,Ter\u00e7a-feira,Quarta-feira,Quinta-feira,Sexta-feira,S&aacute;bado".split(","),
        dayNamesShort: "Dom,Seg,Ter,Qua,Qui,Sex,S&aacute;b".split(","),
        dayNamesMin: "D,S,T,Q,Q,S,S".split(","),
        dayText: "Dia",
        hourText: "Horas",
        minuteText: "Minutos",
        monthNames: "Janeiro,Fevereiro,Mar&ccedil;o,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro".split(","),
        monthNamesShort: "Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez".split(","),
        monthText: "M&ecirc;s",
        secText: "Segundo",
        timeFormat: "HH:ii",
        yearText: "Ano",
        nowText: "Actualizar",
        pmText: "da tarde",
        amText: "da manh\u00e3",
        todayText: "Hoy",
        firstDay: 1,
        dateText: "Data",
        timeText: "Tempo",
        calendarText: "Calend&aacute;rio",
        closeText: "Fechar",
        fromText: "In&iacute;cio",
        toText: "Fim",
        wholeText: "Inteiro",
        fractionText: "Frac&ccedil;&atilde;o",
        unitText: "Unidade",
        labels: "Anos,Meses,Dias,Horas,Minutos,Segundos,".split(","),
        labelsShort: "Ano,M&ecirc;s,Dia,Hora,Min,Seg,".split(","),
        startText: "Come&ccedil;ar",
        stopText: "Parar",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "De volta",
        undoText: "Anular",
        offText: "Desl",
        onText: "Lig",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.sv = {
        setText: "OK",
        cancelText: "Avbryt",
        clearText: "Klara",
        selectedText: "{count} vald",
        dateFormat: "yy-mm-dd",
        dayNames: "S\u00f6ndag,M\u00e5ndag,Tisdag,Onsdag,Torsdag,Fredag,L\u00f6rdag".split(","),
        dayNamesShort: "S\u00f6,M\u00e5,Ti,On,To,Fr,L\u00f6".split(","),
        dayNamesMin: "S,M,T,O,T,F,L".split(","),
        dayText: "Dag",
        hourText: "Timme",
        minuteText: "Minut",
        monthNames: "Januari,Februari,Mars,April,Maj,Juni,Juli,Augusti,September,Oktober,November,December".split(","),
        monthNamesShort: "Jan,Feb,Mar,Apr,Maj,Jun,Jul,Aug,Sep,Okt,Nov,Dec".split(","),
        monthText: "M\u00e5nad",
        secText: "Sekund",
        timeFormat: "HH:ii",
        yearText: "\u00c5r",
        nowText: "Nu",
        pmText: "pm",
        amText: "am",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Tid",
        calendarText: "Kalender",
        closeText: "St\u00e4ng",
        fromText: "Start",
        toText: "Slut",
        wholeText: "Hela",
        fractionText: "Br\u00e5k",
        unitText: "Enhet",
        labels: "\u00c5r,M\u00e5nader,Dagar,Timmar,Minuter,Sekunder,".split(","),
        labelsShort: "\u00c5r,M\u00e5n,Dag,Tim,Min,Sek,".split(","),
        startText: "Start",
        stopText: "Stopp",
        resetText: "\u00c5terst\u00e4ll",
        lapText: "Varv",
        hideText: "D\u00f6lj",
        backText: "Tillbaka",
        undoText: "\u00c5ngra",
        offText: "Av",
        onText: "P\u00e5"
    };
    k.i18n["en-GB"] = k.i18n["en-UK"] = {
        dateFormat: "dd/mm/yy",
        timeFormat: "HH:ii"
    };
    k.i18n.cs = {
        setText: "Zadej",
        cancelText: "Storno",
        clearText: "Vymazat",
        selectedText: "Ozna\u010den\u00fd: {count}",
        dateFormat: "dd.mm.yy",
        dayNames: "Ned\u011ble,Pond\u011bl\u00ed,\u00dater\u00fd,St\u0159eda,\u010ctvrtek,P\u00e1tek,Sobota".split(","),
        dayNamesShort: "Ne,Po,\u00dat,St,\u010ct,P\u00e1,So".split(","),
        dayNamesMin: "N,P,\u00da,S,\u010c,P,S".split(","),
        dayText: "Den",
        hourText: "Hodiny",
        minuteText: "Minuty",
        monthNames: "Leden,\u00danor,B\u0159ezen,Duben,Kv\u011bten,\u010cerven,\u010cervenec,Srpen,Z\u00e1\u0159\u00ed,\u0158\u00edjen,Listopad,Prosinec".split(","),
        monthNamesShort: "Led,\u00dano,B\u0159e,Dub,Kv\u011b,\u010cer,\u010cvc,Spr,Z\u00e1\u0159,\u0158\u00edj,Lis,Pro".split(","),
        monthText: "M\u011bs\u00edc",
        secText: "Sekundy",
        timeFormat: "HH:ii",
        yearText: "Rok",
        nowText: "Te\u010f",
        amText: "am",
        pmText: "pm",
        todayText: "Dnes",
        firstDay: 1,
        dateText: "Datum",
        timeText: "\u010cas",
        calendarText: "Kalend\u00e1\u0159",
        closeText: "Zav\u0159\u00edt",
        fromText: "Za\u010d\u00e1tek",
        toText: "Konec",
        wholeText: "Cel\u00fd",
        fractionText: "\u010c\u00e1st",
        unitText: "Jednotka",
        labels: "Roky,M\u011bs\u00edce,Dny,Hodiny,Minuty,Sekundy,".split(","),
        labelsShort: "Rok,M\u011bs,Dny,Hod,Min,Sec,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetovat",
        lapText: "Etapa",
        hideText: "Schovat",
        backText: "Zp\u011bt",
        undoText: "Rozlepit",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.sk = {
        setText: "Zadaj",
        cancelText: "Zru\u0161i\u0165",
        clearText: "Vymaza\u0165",
        selectedText: "Ozna\u010den\u00fd: {count}",
        dateFormat: "d.m.yy",
        dayNames: "Nede\u013ea,Pondelok,Utorok,Streda,\u0160tvrtok,Piatok,Sobota".split(","),
        dayNamesShort: "Ne,Po,Ut,St,\u0160t,Pi,So".split(","),
        dayNamesMin: "N,P,U,S,\u0160,P,S".split(","),
        dayText: "\u010ee\u0148",
        hourText: "Hodiny",
        minuteText: "Min\u00faty",
        monthNames: "Janu\u00e1r,Febru\u00e1r,Marec,Apr\u00edl,M\u00e1j,J\u00fan,J\u00fal,August,September,Okt\u00f3ber,November,December".split(","),
        monthNamesShort: "Jan,Feb,Mar,Apr,M\u00e1j,J\u00fan,J\u00fal,Aug,Sep,Okt,Nov,Dec".split(","),
        monthText: "Mesiac",
        secText: "Sekundy",
        timeFormat: "H:ii",
        yearText: "Rok",
        nowText: "Teraz",
        amText: "am",
        pmText: "pm",
        todayText: "Dnes",
        firstDay: 1,
        dateText: "Datum",
        timeText: "\u010cas",
        calendarText: "Kalend\u00e1r",
        closeText: "Zavrie\u0165",
        fromText: "Za\u010diatok",
        toText: "Koniec",
        wholeText: "Cel\u00fd",
        fractionText: "\u010cas\u0165",
        unitText: "Jednotka",
        labels: "Roky,Mesiace,Dni,Hodiny,Min\u00faty,Sekundy,".split(","),
        labelsShort: "Rok,Mes,Dni,Hod,Min,Sec,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetova\u0165",
        lapText: "Etapa",
        hideText: "Schova\u0165",
        backText: "Sp\u00e4\u0165",
        undoText: "Sp\u00e4\u0165",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.ro = {
        setText: "Setare",
        cancelText: "Anulare",
        clearText: "\u015etergere",
        selectedText: "{count} selectat",
        selectedPluralText: "{count} selectate",
        dateFormat: "dd.mm.yy",
        dayNames: "Duminic\u0103,Luni,Mar\u021bi,Miercuri,Joi,Vineri,S\u00e2mb\u0103t\u0103".split(","),
        dayNamesShort: "Du,Lu,Ma,Mi,Jo,Vi,S\u00e2".split(","),
        dayNamesMin: "D,L,M,M,J,V,S".split(","),
        dayText: " Ziua",
        delimiter: ".",
        hourText: " Ore ",
        minuteText: "Minute",
        monthNames: "Ianuarie,Februarie,Martie,Aprilie,Mai,Iunie,Iulie,August,Septembrie,Octombrie,Noiembrie,Decembrie".split(","),
        monthNamesShort: "Ian.,Feb.,Mar.,Apr.,Mai,Iun.,Iul.,Aug.,Sept.,Oct.,Nov.,Dec.".split(","),
        monthText: "Luna",
        secText: "Secunde",
        timeFormat: "HH:ii",
        yearText: "Anul",
        nowText: "Acum",
        amText: "am",
        pmText: "pm",
        todayText: "Ast\u0103zi",
        firstDay: 1,
        dateText: "Data",
        timeText: "Ora",
        calendarText: "Calendar",
        closeText: "\u00cenchidere",
        fromText: "Start",
        toText: "Final",
        wholeText: "Complet",
        fractionText: "Par\u0163ial",
        unitText: "Unitate",
        labels: "Ani,Luni,Zile,Ore,Minute,Secunde,".split(","),
        labelsShort: "Ani,Luni,Zile,Ore,Min.,Sec.,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetare",
        lapText: "Tur\u0103",
        hideText: "Ascundere",
        backText: "\u00cenapoi",
        undoText: "Anula\u0163i",
        offText: "Nu",
        onText: "Da",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.pl = {
        setText: "Zestaw",
        cancelText: "Anuluj",
        clearText: "Oczy\u015bci\u0107",
        selectedText: "Wyb\u00f3r: {count}",
        dateFormat: "yy-mm-dd",
        dayNames: "Niedziela,Poniedzia\u0142ek,Wtorek,\u015aroda,Czwartek,Pi\u0105tek,Sobota".split(","),
        dayNamesShort: "Niedz.,Pon.,Wt.,\u015ar.,Czw.,Pt.,Sob.".split(","),
        dayNamesMin: "N,P,W,\u015a,C,P,S".split(","),
        dayText: "Dzie\u0144",
        hourText: "Godziny",
        minuteText: "Minuty",
        monthNames: "Stycze\u0144,Luty,Marzec,Kwiecie\u0144,Maj,Czerwiec,Lipiec,Sierpie\u0144,Wrzesie\u0144,Pa\u017adziernik,Listopad,Grudzie\u0144".split(","),
        monthNamesShort: "Sty,Lut,Mar,Kwi,Maj,Cze,Lip,Sie,Wrz,Pa\u017a,Lis,Gru".split(","),
        monthText: "Miesi\u0105c",
        secText: "Sekundy",
        timeFormat: "HH:ii",
        yearText: "Rok",
        nowText: "Teraz",
        amText: "rano",
        pmText: "po po\u0142udniu",
        todayText: "Dzisiaj",
        firstDay: 1,
        dateText: "Data",
        timeText: "Czas",
        calendarText: "Kalendarz",
        closeText: "Zako\u0144czenie",
        fromText: "Rozpocz\u0119cie",
        toText: "Koniec",
        wholeText: "Ca\u0142y",
        fractionText: "U\u0142amek",
        unitText: "Jednostka",
        labels: "Lata,Miesi\u0105c,Dni,Godziny,Minuty,Sekundy,".split(","),
        labelsShort: "R,M,Dz,Godz,Min,Sek,".split(","),
        startText: "Rozpocz\u0119cie",
        stopText: "Zatrzyma\u0107",
        resetText: "Zresetowa\u0107",
        lapText: "Zak\u0142adka",
        hideText: "Ukry\u0107",
        backText: "Z powrotem",
        undoText: "Cofnij",
        offText: "Wy\u0142",
        onText: "W\u0142",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n["ru-UA"] = {
        setText: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
        cancelText: "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",
        clearText: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044cr",
        selectedText: "{count} \u0412\u0456\u0431\u0440\u0430\u0442\u044c",
        dateFormat: "dd.mm.yy",
        dayNames: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0432\u0442\u043e\u0440\u043d\u0438\u043a,\u0441\u0440\u0435\u0434\u0430,\u0447\u0435\u0442\u0432\u0435\u0440\u0433,\u043f\u044f\u0442\u043d\u0438\u0446\u0430,\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(","),
        dayNamesShort: "\u0432\u0441,\u043f\u043d,\u0432\u0442,\u0441\u0440,\u0447\u0442,\u043f\u0442,\u0441\u0431".split(","),
        dayNamesMin: "\u0432,\u043f,\u0432,\u0441,\u0447,\u043f,\u0441".split(","),
        dayText: "\u0414\u0435\u043d\u044c",
        delimiter: ".",
        hourText: "\u0427\u0430\u0441\u044b",
        minuteText: "\u041c\u0438\u043d\u0443\u0442\u044b",
        monthNames: "\u042f\u043d\u0432\u0430\u0440\u044c,\u0424\u0435\u0432\u0440\u0430\u043b\u044c,\u041c\u0430\u0440\u0442,\u0410\u043f\u0440\u0435\u043b\u044c,\u041c\u0430\u0439,\u0418\u044e\u043d\u044c,\u0418\u044e\u043b\u044c,\u0410\u0432\u0433\u0443\u0441\u0442,\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c,\u041e\u043a\u0442\u044f\u0431\u0440\u044c,\u041d\u043e\u044f\u0431\u0440\u044c,\u0414\u0435\u043a\u0430\u0431\u0440\u044c".split(","),
        monthNamesShort: "\u042f\u043d\u0432.,\u0424\u0435\u0432\u0440.,\u041c\u0430\u0440\u0442,\u0410\u043f\u0440.,\u041c\u0430\u0439,\u0418\u044e\u043d\u044c,\u0418\u044e\u043b\u044c,\u0410\u0432\u0433.,\u0421\u0435\u043d\u0442.,\u041e\u043a\u0442.,\u041d\u043e\u044f\u0431.,\u0414\u0435\u043a.".split(","),
        monthText: "\u041c\u0435\u0441\u044f\u0446\u044b",
        secText: "\u0421\u0438\u043a\u0443\u043d\u0434\u044b",
        timeFormat: "HH:ii",
        yearText: "\u0413\u043e\u0434",
        nowText: "\u0421\u0435\u0439\u0447\u0430\u0441",
        amText: "\u0414\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f",
        pmText: "\u041f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f",
        todayText: "C\u0435\u0433\u043e\u0434\u043d\u044f",
        firstDay: 1,
        dateText: "\u0414\u0430\u0442\u0430",
        timeText: "\u0412\u0440\u0435\u043c\u044f",
        calendarText: "\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c",
        closeText: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
        fromText: "\u041d\u0430\u0447\u0430\u043b\u043e",
        toText: "\u041a\u043e\u043d\u0435\u0446",
        wholeText: "\u0412\u0435\u0441\u044c",
        fractionText: "\u0427\u0430\u0441\u0442\u044c",
        unitText: "\u0415\u0434\u0438\u043d\u0438\u0446\u0430",
        labels: "\u0413\u043e\u0434\u044b, \u041c\u0435\u0441\u044f\u0446\u044b , \u0414\u043d\u0438 , \u0427\u0430\u0441\u044b , \u041c\u0438\u043d\u0443\u0442\u044b , \u0421\u0435\u043a\u0443\u043d\u0434\u044b,".split(","),
        labelsShort: "\u0413\u043e\u0434,\u041c\u0435\u0441.,\u0414\u043d.,\u0427.,\u041c\u0438\u043d.,\u0421\u0435\u043a.,".split(","),
        startText: "\u0421\u0442\u0430\u0440\u0442",
        stopText: "\u0421\u0442\u043e\u043f",
        resetText: " \u0421\u0431\u0440\u043e\u0441 ",
        lapText: " \u042d\u0442\u0430\u043f ",
        hideText: " \u0421\u043a\u0440\u044b\u0442\u044c ",
        backText: "\u043d\u0430\u0437\u0430\u0434",
        undoText: "\u0430\u043d\u043d\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    (function() {
        var i = {
            gDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            jDaysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29],
            jalaliToGregorian: function(e, b, c) {
                for (var e = parseInt(e), b = parseInt(b), c = parseInt(c), e = e - 979, b = b - 1, a =
                        c - 1, e = 365 * e + 8 * parseInt(e / 33) + parseInt((e % 33 + 3) / 4), c = 0; c < b; ++c) e += i.jDaysInMonth[c];
                b = e + a + 79;
                e = 1600 + 400 * parseInt(b / 146097);
                b %= 146097;
                a = !0;
                36525 <= b && (b--, e += 100 * parseInt(b / 36524), b %= 36524, 365 <= b ? b++ : a = !1);
                e += 4 * parseInt(b / 1461);
                b %= 1461;
                366 <= b && (a = !1, b--, e += parseInt(b / 365), b %= 365);
                for (c = 0; b >= i.gDaysInMonth[c] + (1 == c && a); c++) b -= i.gDaysInMonth[c] + (1 == c && a);
                return [e, c + 1, b + 1]
            },
            checkDate: function(e, b, c) {
                return !(0 > e || 32767 < e || 1 > b || 12 < b || 1 > c || c > i.jDaysInMonth[b - 1] + (12 == b && 0 === (e - 979) % 33 % 4))
            },
            gregorianToJalali: function(e,
                b, c) {
                for (var e = parseInt(e), b = parseInt(b), c = parseInt(c), e = e - 1600, b = b - 1, a = c - 1, f = 365 * e + parseInt((e + 3) / 4) - parseInt((e + 99) / 100) + parseInt((e + 399) / 400), c = 0; c < b; ++c) f += i.gDaysInMonth[c];
                1 < b && (0 === e % 4 && 0 !== e % 100 || 0 === e % 400) && ++f;
                e = f + a - 79;
                c = parseInt(e / 12053);
                e %= 12053;
                b = 979 + 33 * c + 4 * parseInt(e / 1461);
                e %= 1461;
                366 <= e && (b += parseInt((e - 1) / 365), e = (e - 1) % 365);
                for (c = 0; 11 > c && e >= i.jDaysInMonth[c]; ++c) e -= i.jDaysInMonth[c];
                return [b, c + 1, e + 1]
            }
        };
        k.i18n.fa = {
            setText: "\u062a\u0627\u064a\u064a\u062f",
            cancelText: "\u0627\u0646\u0635\u0631\u0627\u0641",
            clearText: "\u0648\u0627\u0636\u062d ",
            selectedText: "{count} \u0645\u0646\u062a\u062e\u0628",
            dateFormat: "yy/mm/dd",
            dayNames: "\u064a\u06a9\u0634\u0646\u0628\u0647,\u062f\u0648\u0634\u0646\u0628\u0647,\u0633\u0647\u200c\u0634\u0646\u0628\u0647,\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647,\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647,\u062c\u0645\u0639\u0647,\u0634\u0646\u0628\u0647".split(","),
            dayNamesShort: "\u06cc,\u062f,\u0633,\u0686,\u067e,\u062c,\u0634".split(","),
            dayNamesMin: "\u06cc,\u062f,\u0633,\u0686,\u067e,\u062c,\u0634".split(","),
            dayText: "\u0631\u0648\u0632",
            hourText: "\u0633\u0627\u0639\u062a",
            minuteText: "\u062f\u0642\u064a\u0642\u0647",
            monthNames: "\u0641\u0631\u0648\u0631\u062f\u064a\u0646,\u0627\u0631\u062f\u064a\u0628\u0647\u0634\u062a,\u062e\u0631\u062f\u0627\u062f,\u062a\u064a\u0631,\u0645\u0631\u062f\u0627\u062f,\u0634\u0647\u0631\u064a\u0648\u0631,\u0645\u0647\u0631,\u0622\u0628\u0627\u0646,\u0622\u0630\u0631,\u062f\u06cc,\u0628\u0647\u0645\u0646,\u0627\u0633\u0641\u0646\u062f".split(","),
            monthNamesShort: "\u0641\u0631\u0648\u0631\u062f\u064a\u0646,\u0627\u0631\u062f\u064a\u0628\u0647\u0634\u062a,\u062e\u0631\u062f\u0627\u062f,\u062a\u064a\u0631,\u0645\u0631\u062f\u0627\u062f,\u0634\u0647\u0631\u064a\u0648\u0631,\u0645\u0647\u0631,\u0622\u0628\u0627\u0646,\u0622\u0630\u0631,\u062f\u06cc,\u0628\u0647\u0645\u0646,\u0627\u0633\u0641\u0646\u062f".split(","),
            monthText: "\u0645\u0627\u0647",
            secText: "\u062b\u0627\u0646\u064a\u0647",
            timeFormat: "HH:ii",
            yearText: "\u0633\u0627\u0644",
            nowText: "\u0627\u06a9\u0646\u0648\u0646",
            amText: "\u0628",
            pmText: "\u0635",
            todayText: "\u0627\u0645\u0631\u0648\u0632",
            getYear: function(e) {
                return i.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[0]
            },
            getMonth: function(e) {
                return --i.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[1]
            },
            getDay: function(e) {
                return i.gregorianToJalali(e.getFullYear(), e.getMonth() +
                    1, e.getDate())[2]
            },
            getDate: function(e, b, c, a, f, d, o) {
                0 > b && (e += Math.floor(b / 12), b = 12 + b % 12);
                11 < b && (e += Math.floor(b / 12), b %= 12);
                e = i.jalaliToGregorian(e, +b + 1, c);
                return new Date(e[0], e[1] - 1, e[2], a || 0, f || 0, d || 0, o || 0)
            },
            getMaxDayOfMonth: function(e, b) {
                for (var c = 31; !1 === i.checkDate(e, b + 1, c);) c--;
                return c
            },
            firstDay: 6,
            rtl: !0,
            dateText: "\u062a\u0627\u0631\u06cc\u062e ",
            timeText: "\u0632\u0645\u0627\u0646 ",
            calendarText: "\u062a\u0642\u0648\u06cc\u0645",
            closeText: "\u0646\u0632\u062f\u06cc\u06a9",
            fromText: "\u0634\u0631\u0648\u0639 ",
            toText: "\u067e\u0627\u06cc\u0627\u0646",
            wholeText: "\u062a\u0645\u0627\u0645",
            fractionText: "\u06a9\u0633\u0631",
            unitText: "\u0648\u0627\u062d\u062f",
            labels: "\u0633\u0627\u0644,\u0645\u0627\u0647,\u0631\u0648\u0632,\u0633\u0627\u0639\u062a,\u062f\u0642\u06cc\u0642\u0647,\u062b\u0627\u0646\u06cc\u0647,".split(","),
            labelsShort: "\u0633\u0627\u0644,\u0645\u0627\u0647,\u0631\u0648\u0632,\u0633\u0627\u0639\u062a,\u062f\u0642\u06cc\u0642\u0647,\u062b\u0627\u0646\u06cc\u0647,".split(","),
            startText: "\u0634\u0631\u0648\u0639",
            stopText: "\u067e\u0627\u064a\u0627\u0646",
            resetText: "\u062a\u0646\u0638\u06cc\u0645 \u0645\u062c\u062f\u062f",
            lapText: "Lap",
            hideText: "\u067e\u0646\u0647\u0627\u0646 \u06a9\u0631\u062f\u0646",
            backText: "\u067e\u0634\u062a",
            undoText: "\u0648\u0627\u0686\u06cc\u062f\u0646"
        }
    })();
    k.i18n["ru-RU"] = k.i18n.ru = {
        setText: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
        cancelText: "\u041e\u0442\u043c\u0435\u043d\u0430",
        clearText: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",
        selectedText: "{count} \u0412\u044b\u0431\u0440\u0430\u0442\u044c",
        dateFormat: "dd.mm.yy",
        dayNames: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0432\u0442\u043e\u0440\u043d\u0438\u043a,\u0441\u0440\u0435\u0434\u0430,\u0447\u0435\u0442\u0432\u0435\u0440\u0433,\u043f\u044f\u0442\u043d\u0438\u0446\u0430,\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(","),
        dayNamesShort: "\u0432\u0441,\u043f\u043d,\u0432\u0442,\u0441\u0440,\u0447\u0442,\u043f\u0442,\u0441\u0431".split(","),
        dayNamesMin: "\u0432,\u043f,\u0432,\u0441,\u0447,\u043f,\u0441".split(","),
        dayText: "\u0414\u0435\u043d\u044c",
        delimiter: ".",
        hourText: "\u0427\u0430\u0441",
        minuteText: "\u041c\u0438\u043d\u0443\u0442",
        monthNames: "\u042f\u043d\u0432\u0430\u0440\u044c,\u0424\u0435\u0432\u0440\u0430\u043b\u044c,\u041c\u0430\u0440\u0442,\u0410\u043f\u0440\u0435\u043b\u044c,\u041c\u0430\u0439,\u0418\u044e\u043d\u044c,\u0418\u044e\u043b\u044c,\u0410\u0432\u0433\u0443\u0441\u0442,\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c,\u041e\u043a\u0442\u044f\u0431\u0440\u044c,\u041d\u043e\u044f\u0431\u0440\u044c,\u0414\u0435\u043a\u0430\u0431\u0440\u044c".split(","),
        monthNamesShort: "\u042f\u043d\u0432,\u0424\u0435\u0432,\u041c\u0430\u0440,\u0410\u043f\u0440,\u041c\u0430\u0439,\u0418\u044e\u043d,\u0418\u044e\u043b,\u0410\u0432\u0433,\u0421\u0435\u043d,\u041e\u043a\u0442,\u041d\u043e\u044f,\u0414\u0435\u043a".split(","),
        monthText: "\u041c\u0435\u0441\u044f\u0446",
        secText: "\u0421\u0435\u043a\u0443\u043d\u0434",
        timeFormat: "HH:ii",
        yearText: "\u0413\u043e\u0434",
        nowText: "\u0421\u0435\u0439\u0447\u0430\u0441",
        amText: "\u0414\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f",
        pmText: "\u041f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f",
        todayText: "C\u0435\u0433\u043e\u0434\u043d\u044f",
        firstDay: 1,
        dateText: "\u0414\u0430\u0442\u0430",
        timeText: "\u0412\u0440\u0435\u043c\u044f",
        calendarText: "\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c",
        closeText: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
        fromText: "\u041d\u0430\u0447\u0430\u043b\u043e",
        toText: "\u041a\u043e\u043d\u0435\u0446",
        wholeText: "\u0426\u0435\u043b\u043e\u0435",
        fractionText: "\u0414\u0440\u043e\u0431\u043d\u043e\u0435",
        unitText: "\u0415\u0434\u0438\u043d\u0438\u0446\u0430",
        labels: "\u041b\u0435\u0442,\u041c\u0435\u0441\u044f\u0446\u0435\u0432,\u0414\u043d\u0435\u0439,\u0427\u0430\u0441\u043e\u0432,\u041c\u0438\u043d\u0443\u0442,\u0421\u0435\u043a\u0443\u043d\u0434,".split(","),
        labelsShort: "\u041b\u0435\u0442,\u041c\u0435\u0441,\u0414\u043d,\u0427\u0430\u0441,\u041c\u0438\u043d,\u0421\u0435\u043a,".split(","),
        startText: "\u0421\u0442\u0430\u0440\u0442",
        stopText: "\u0421\u0442\u043e\u043f",
        resetText: "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c",
        lapText: "\u041a\u0440\u0443\u0433",
        hideText: "\u0421\u043a\u0440\u044b\u0442\u044c",
        backText: "\u043d\u0430\u0437\u0430\u0434",
        undoText: "\u0430\u043d\u043d\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.lt = {
        setText: "OK",
        cancelText: "At\u0161aukti",
        clearText: "I\u0161valyti",
        selectedText: "Pasirinktas {count}",
        selectedPluralText: "Pasirinkti {count}",
        dateFormat: "yy-mm-dd",
        dayNames: "Sekmadienis,Pirmadienis,Antradienis,Tre\u010diadienis,Ketvirtadienis,Penktadienis,\u0160e\u0161tadienis".split(","),
        dayNamesShort: "S,Pr,A,T,K,Pn,\u0160".split(","),
        dayNamesMin: "S,Pr,A,T,K,Pn,\u0160".split(","),
        dayText: "Diena",
        hourText: "Valanda",
        minuteText: "Minutes",
        monthNames: "Sausis,Vasaris,Kovas,Balandis,Gegu\u017e\u0117,Bir\u017eelis,Liepa,Rugpj\u016btis,Rugs\u0117jis,Spalis,Lapkritis,Gruodis".split(","),
        monthNamesShort: "Sau,Vas,Kov,Bal,Geg,Bir,Lie,Rugp,Rugs,Spa,Lap,Gruo".split(","),
        monthText: "M\u0117nuo",
        secText: "Sekundes",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH:ii",
        yearText: "Metai",
        nowText: "Dabar",
        todayText: "\u0160iandien",
        firstDay: 1,
        dateText: "Data",
        timeText: "Laikas",
        calendarText: "Kalendorius",
        closeText: "U\u017edaryti",
        fromText: "Nuo",
        toText: "Iki",
        wholeText: "Visas",
        fractionText: "Frakcija",
        unitText: "Vienetas",
        labels: "Metai,M\u0117nesiai,Dienos,Valandos,Minutes,Sekundes,".split(","),
        labelsShort: "m,m\u0117n.,d,h,min,s,".split(","),
        startText: "Prad\u0117ti",
        stopText: "Sustabdyti",
        resetText: "I\u0161naujo",
        lapText: "Ratas",
        hideText: "Sl\u0117pti",
        backText: "Atgal",
        undoText: "At\u0161aukti veiksm\u0105",
        offText: "I\u0161j.",
        onText: "\u012ej.",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    k.i18n.ca = {
        setText: "Acceptar",
        cancelText: "Cancel\u00b7lar",
        clearText: "Esborrar",
        selectedText: "{count} seleccionat",
        selectedPluralText: "{count} seleccionats",
        dateFormat: "dd/mm/yy",
        dayNames: "Diumenge,Dilluns,Dimarts,Dimecres,Dijous,Divendres,Dissabte".split(","),
        dayNamesShort: "Dg,Dl,Dt,Dc,Dj,Dv,Ds".split(","),
        dayNamesMin: "Dg,Dl,Dt,Dc,Dj,Dv,Ds".split(","),
        dayText: "Dia",
        hourText: "Hores",
        minuteText: "Minuts",
        monthNames: "Gener,Febrer,Mar&ccedil;,Abril,Maig,Juny,Juliol,Agost,Setembre,Octubre,Novembre,Desembre".split(","),
        monthNamesShort: "Gen,Feb,Mar,Abr,Mai,Jun,Jul,Ago,Set,Oct,Nov,Des".split(","),
        monthText: "Mes",
        secText: "Segons",
        timeFormat: "HH:ii",
        yearText: "Any",
        nowText: "Ara",
        pmText: "pm",
        amText: "am",
        todayText: "Avui",
        firstDay: 1,
        dateText: "Data",
        timeText: "Temps",
        calendarText: "Calendari",
        closeText: "Tancar",
        fromText: "Iniciar",
        toText: "Final",
        wholeText: "Sencer",
        fractionText: "Fracci\u00f3",
        unitText: "Unitat",
        labels: "Anys,Mesos,Dies,Hores,Minuts,Segons,".split(","),
        labelsShort: "Anys,Mesos,Dies,Hrs,Mins,Secs,".split(","),
        startText: "Iniciar",
        stopText: "Aturar",
        resetText: "Reiniciar",
        lapText: "Volta",
        hideText: "Amagar",
        backText: "Tornar",
        undoText: "Desfer",
        offText: "No",
        onText: "Si"
    };
    k.i18n.da = {
        setText: "S\u00e6t",
        cancelText: "Annuller",
        clearText: "Ryd",
        selectedText: "{count} valgt",
        selectedPluralText: "{count} valgt",
        dateFormat: "dd/mm/yy",
        dayNames: "S\u00f8ndag,Mandag,Tirsdag,Onsdag,Torsdag,Fredag,L\u00f8rdag".split(","),
        dayNamesShort: "S\u00f8n,Man,Tir,Ons,Tor,Fre,L\u00f8r".split(","),
        dayNamesMin: "S,M,T,O,T,F,L".split(","),
        dayText: "Dag",
        hourText: "Timer",
        minuteText: "Minutter",
        monthNames: "Januar,Februar,Marts,April,Maj,Juni,Juli,August,September,Oktober,November,December".split(","),
        monthNamesShort: "Jan,Feb,Mar,Apr,Maj,Jun,Jul,Aug,Sep,Okt,Nov,Dec".split(","),
        monthText: "M\u00e5ned",
        secText: "Sekunder",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH.ii",
        yearText: "\u00c5r",
        nowText: "Nu",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Dato",
        timeText: "Tid",
        calendarText: "Kalender",
        closeText: "Luk",
        fromText: "Start",
        toText: "Slut",
        wholeText: "Hele",
        fractionText: "Dele",
        unitText: "Enhed",
        labels: "\u00c5r,M\u00e5neder,Dage,Timer,Minutter,Sekunder,".split(","),
        labelsShort: "\u00c5r,Mdr,Dg,Timer,Min,Sek,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Nulstil",
        lapText: "Omgang",
        hideText: "Skjul",
        offText: "Fra",
        onText: "Til",
        backText: "Tilbage",
        undoText: "Fortryd"
    };
    k.i18n.he = {
        rtl: !0,
        setText: "\u05e9\u05de\u05d9\u05e8\u05d4",
        cancelText: "\u05d1\u05d9\u05d8\u05d5\u05dc",
        clearText: "\u05e0\u05e7\u05d4",
        selectedText: "{count} \u05e0\u05d1\u05d7\u05e8",
        selectedPluralText: "{count} \u05e0\u05d1\u05d7\u05e8\u05d5",
        dateFormat: "dd/mm/yy",
        dayNames: "\u05e8\u05d0\u05e9\u05d5\u05df,\u05e9\u05e0\u05d9,\u05e9\u05dc\u05d9\u05e9\u05d9,\u05e8\u05d1\u05d9\u05e2\u05d9,\u05d7\u05de\u05d9\u05e9\u05d9,\u05e9\u05d9\u05e9\u05d9,\u05e9\u05d1\u05ea".split(","),
        dayNamesShort: "\u05d0',\u05d1',\u05d2',\u05d3',\u05d4',\u05d5',\u05e9'".split(","),
        dayNamesMin: "\u05d0,\u05d1,\u05d2,\u05d3,\u05d4,\u05d5,\u05e9".split(","),
        dayText: "\u05d9\u05d5\u05dd",
        hourText: "\u05e9\u05e2\u05d5\u05ea",
        minuteText: "\u05d3\u05e7\u05d5\u05ea",
        monthNames: "\u05d9\u05e0\u05d5\u05d0\u05e8,\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8,\u05de\u05e8\u05e5,\u05d0\u05e4\u05e8\u05d9\u05dc,\u05de\u05d0\u05d9,\u05d9\u05d5\u05e0\u05d9,\u05d9\u05d5\u05dc\u05d9,\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8,\u05e1\u05e4\u05d8\u05de\u05d1\u05e8,\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8,\u05e0\u05d5\u05d1\u05de\u05d1\u05e8,\u05d3\u05e6\u05de\u05d1\u05e8".split(","),
        monthNamesShort: "\u05d9\u05e0\u05d5,\u05e4\u05d1\u05e8,\u05de\u05e8\u05e5,\u05d0\u05e4\u05e8,\u05de\u05d0\u05d9,\u05d9\u05d5\u05e0,\u05d9\u05d5\u05dc,\u05d0\u05d5\u05d2,\u05e1\u05e4\u05d8,\u05d0\u05d5\u05e7,\u05e0\u05d5\u05d1,\u05d3\u05e6\u05de".split(","),
        monthText: "\u05d7\u05d5\u05d3\u05e9",
        secText: "\u05e9\u05e0\u05d9\u05d5\u05ea",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH:ii",
        yearText: "\u05e9\u05e0\u05d4",
        nowText: "\u05e2\u05db\u05e9\u05d9\u05d5",
        firstDay: 0,
        dateText: "\u05ea\u05d0\u05e8\u05d9\u05da",
        timeText: "\u05d6\u05de\u05df",
        calendarText: "\u05ea\u05d0\u05e8\u05d9\u05db\u05d5\u05df",
        closeText: "\u05e1\u05d2\u05d9\u05e8\u05d4",
        todayText: "\u05d4\u05d9\u05d5\u05dd",
        eventText: "\u05de\u05b4\u05e7\u05e8\u05b6\u05d4",
        eventsText: "\u05de\u05b4\u05e7\u05e8\u05b6\u05d4",
        fromText: "\u05d4\u05ea\u05d7\u05dc\u05d4",
        toText: "\u05e1\u05d9\u05d5\u05dd",
        wholeText: "\u05db\u05bc\u05b9\u05dc",
        fractionText: "\u05e9\u05d1\u05e8\u05d9\u05e8",
        unitText: "\u05d9\u05d7\u05d9\u05d3\u05d4",
        labels: "\u05e9\u05e0\u05d9\u05dd,\u05d7\u05d5\u05d3\u05e9\u05d9\u05dd,\u05d9\u05de\u05d9\u05dd,\u05e9\u05e2\u05d5\u05ea,\u05d3\u05e7\u05d5\u05ea,\u05e9\u05e0\u05d9\u05d9\u05dd,".split(","),
        labelsShort: "\u05e9\u05e0\u05d9\u05dd,\u05d7\u05d5\u05d3\u05e9\u05d9\u05dd,\u05d9\u05de\u05d9\u05dd,\u05e9\u05e2\u05d5\u05ea,\u05d3\u05e7\u05d5\u05ea,\u05e9\u05e0\u05d9\u05d9\u05dd,".split(","),
        startText: "\u05d4\u05ea\u05d7\u05dc",
        stopText: "\u05e2\u05e6\u05d5\u05e8",
        resetText: "\u05d0\u05ea\u05d7\u05d5\u05dc",
        lapText: "\u05d4\u05e7\u05e4\u05d4",
        hideText: "\u05d4\u05e1\u05ea\u05e8",
        offText: "\u05db\u05d9\u05d1\u05d5\u05d9",
        onText: "\u05d4\u05e4\u05e2\u05dc\u05d4",
        backText: "\u05d7\u05d6\u05d5\u05e8",
        undoText: "\u05d1\u05d9\u05d8\u05d5\u05dc \u05e4\u05e2\u05d5\u05dc\u05d4"
    };
    (function(i) {
        var e = function() {},
            b = k,
            c = b.$;
        b.util.addIcon = function(a, b) {
            var d = {},
                e = a.parent(),
                i = e.find(".mbsc-err-msg"),
                s = a.attr("data-icon-align") || "left",
                m = a.attr("data-icon");
            c('<span class="mbsc-input-wrap"></span>').insertAfter(a).append(a);
            i && e.find(".mbsc-input-wrap").append(i);
            m && (-1 !== m.indexOf("{") ? d = JSON.parse(m) : d[s] = m);
            if (m || b) c.extend(d, b), e.addClass((d.right ? "mbsc-ic-right " : "") + (d.left ? " mbsc-ic-left" : "")).find(".mbsc-input-wrap").append(d.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' +
                d.left + '"></span>' : "").append(d.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + d.right + '"></span>' : "")
        };
        b.classes.Progress = function(a, f, d) {
            function o() {
                var a = E("value", v);
                a !== l && s(a)
            }

            function E(a, b) {
                var c = j.attr(a);
                return c === i || "" === c ? b : +c
            }

            function s(a, b, c, d) {
                a = k.running && Math.min(h, Math.max(a, v));
                r.css("width", 100 * (a - v) / (h - v) + "%");
                c === i && (c = !0);
                d === i && (d = c);
                (a !== l || b) && G._display(a);
                a !== l && (l = a, c && j.attr("value", l), d && j.trigger("change"))
            }
            var m, j, g, r, A, u, t, v, h, D, p, l, Q, G = this;
            b.classes.Base.call(this, a, f, !0);
            G._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1fce1711cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            G._onInit = e;
            G._onDestroy = e;
            G._display = function(a) {
                Q = p && D.returnAffix ? p.replace(/\{value\}/, a).replace(/\{max\}/, h) : a;
                A && A.html(Q);
                m && m.html(Q)
            };
            G._attachChange = function() {
                j.on("change", o)
            };
            G.init = function(d) {
                var f, e, o;
                G._processItem(c, 0);
                G._init(d);
                D = G.settings;
                j = c(a);
                o = j.parent().hasClass("mbsc-input-wrap");
                g = G._$parent = o ? g : j.parent();
                v = G._min =
                    d.min === i ? E("min", D.min) : d.min;
                h = G._max = d.max === i ? E("max", D.max) : d.max;
                l = E("value", v);
                f = j.attr("data-val") || D.val;
                e = (e = j.attr("data-step-labels")) ? JSON.parse(e) : D.stepLabels;
                p = j.attr("data-template") || (100 == h && !D.template ? "{value}%" : D.template);
                o ? (f && (m.remove(), g.removeClass("mbsc-progress-value-" + ("right" == f ? "right" : "left"))), e && c(".mbsc-progress-step-label", u).remove()) : (G._wrap && b.util.addIcon(j), g.find(".mbsc-input-wrap").append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>'),
                    r = G._$progress = g.find(".mbsc-progress-bar"), u = G._$track = g.find(".mbsc-progress-track"));
                t && g.removeClass(t);
                t = G._css + " mbsc-progress-w mbsc-" + D.theme + (D.baseTheme ? " mbsc-" + D.baseTheme : "");
                g.addClass(t);
                j.attr("min", v).attr("max", h);
                f && (m = c('<span class="mbsc-progress-value"></span>'), g.addClass("mbsc-progress-value-" + ("right" == f ? "right" : "left")).find(".mbsc-input-wrap").append(m));
                if (e)
                    for (f = 0; f < e.length; ++f) u.append('<span class="mbsc-progress-step-label" style="left: ' + 100 * (e[f] - v) / (h - v) + '%" >' +
                        e[f] + "</span>");
                A = c(j.attr("data-target") || D.target);
                o || (G._onInit(d), G._attachChange());
                G.refresh();
                G.trigger("onInit")
            };
            G.refresh = function() {
                s(E("value", v), !0, !1)
            };
            G.destroy = function(a) {
                G._onDestroy();
                g.find(".mbsc-progress-cont").remove();
                g.removeClass(t).find(".mbsc-input-wrap").before(j).remove();
                j.removeClass("mbsc-control").off("change", o);
                a || G._destroy()
            };
            G.getVal = function() {
                return l
            };
            G.setVal = function(a, b, c) {
                s(a, !0, b, c)
            };
            d || G.init(f)
        };
        b.classes.Progress.prototype = {
            _class: "progress",
            _css: "mbsc-progress",
            _hasTheme: !0,
            _wrap: !0,
            _defaults: {
                min: 0,
                max: 100,
                returnAffix: !0
            }
        };
        b.presetShort("progress", "Progress")
    })();
    (function(i) {
        var e = function() {},
            b = k,
            c = b.$,
            a = b.util,
            f = a.getCoord,
            d = a.testTouch;
        b.classes.Slider = function(o, E, s) {
            function m(a) {
                d(a, this) && !M && !o.disabled && k.running && (S.stopProp && a.stopPropagation(), M = !0, ga = pa = !1, ia = f(a, "X"), R = f(a, "Y"), X = ia, x.removeClass("mbsc-progress-anim"), C = qa ? c(".mbsc-slider-handle", this) : w, n = C.parent().addClass("mbsc-active"), V = +C.attr("data-index"), P = x[0].offsetWidth, L = x.offset().left,
                    "mousedown" === a.type && (a.preventDefault(), c(document).on("mousemove", j).on("mouseup", g)))
            }

            function j(a) {
                if (M) {
                    X = f(a, "X");
                    aa = f(a, "Y");
                    U = X - ia;
                    T = aa - R;
                    if (5 < Math.abs(U) || pa) pa = !0, 50 < Math.abs(ka - new Date) && (ka = new Date, p(X, S.round, ea));
                    pa ? a.preventDefault() : 7 < Math.abs(T) && D(a)
                }
            }

            function g(b) {
                M && (b.preventDefault(), qa || x.addClass("mbsc-progress-anim"), p(X, !0, !0), !pa && !ga && (a.preventClick(), K._onTap(fa[V])), D())
            }

            function r() {
                M && D()
            }

            function A() {
                var a = K._readValue(c(this)),
                    b = +c(this).attr("data-index");
                a !==
                    fa[b] && (fa[b] = a, G(a, b))
            }

            function u(a) {
                a.stopPropagation()
            }

            function t(a) {
                a.preventDefault()
            }

            function v(a) {
                var b;
                if (!o.disabled) {
                    switch (a.keyCode) {
                        case 38:
                        case 39:
                            b = 1;
                            break;
                        case 40:
                        case 37:
                            b = -1
                    }
                    b && (a.preventDefault(), I || (V = +c(this).attr("data-index"), G(fa[V] + Y * b, V, !0), I = setInterval(function() {
                        G(fa[V] + Y * b, V, !0)
                    }, 200)))
                }
            }

            function h(a) {
                a.preventDefault();
                clearInterval(I);
                I = null
            }

            function D() {
                M = !1;
                n.removeClass("mbsc-active");
                c(document).off("mousemove", j).off("mouseup", g)
            }

            function p(a, b, c) {
                a = b ? Math.min(100 *
                    Math.round(Math.max(100 * (a - L) / P, 0) / Ba / Y) * Y / (O - da), 100) : Math.max(0, Math.min(100 * (a - L) / P, 100));
                G(Math.round((da + a / Ba) * xa) / xa, V, c, a)
            }

            function l(a) {
                return 100 * (a - da) / (O - da)
            }

            function Q(a, b) {
                var c = J.attr(a);
                return c === i || "" === c ? b : "true" === c
            }

            function G(a, b, c, d, h, f) {
                var g = w.eq(b),
                    e = g.parent(),
                    a = Math.min(O, Math.max(a, da));
                f === i && (f = c);
                la ? 0 === b ? (a = Math.min(a, fa[1]), z.css({
                        width: l(fa[1]) - l(a) + "%",
                        left: l(a) + "%"
                    })) : (a = Math.max(a, fa[0]), z.css({
                        width: l(a) - l(fa[0]) + "%"
                    })) : qa || !B ? e.css({
                        left: (d || l(a)) + "%",
                        right: "auto"
                    }) :
                    z.css("width", (d || l(a)) + "%");
                Z && H.eq(b).html(a);
                a > da ? e.removeClass("mbsc-slider-start") : (fa[b] > da || h) && e.addClass("mbsc-slider-start");
                !qa && (fa[b] != a || h) && K._display(a);
                c && fa[b] != a && (ga = !0, fa[b] = a, K._fillValue(a, b, f));
                g.attr("aria-valuenow", a)
            }
            var J, C, n, w, q, N, z, H, x, M, ga, U, T, L, X, aa, V, B, Z, la, ea, O, da, pa, qa, Y, S, Ba, ia, R, xa, I, P, fa, K = this,
                ka = new Date;
            b.classes.Progress.call(this, o, E, !0);
            K._onTap = e;
            K.__onInit = e;
            K._readValue = function(a) {
                return +a.val()
            };
            K._fillValue = function(a, b, c) {
                J.eq(b).val(a);
                c && J.eq(b).trigger("change")
            };
            K._attachChange = function() {
                J.on(S.changeEvent, A)
            };
            K._onInit = function(a) {
                var b;
                K.__onInit();
                N ? (N.removeClass("mbsc-slider-has-tooltip"), 1 != Y && c(".mbsc-slider-step", x).remove()) : (N = K._$parent, x = K._$track, z = K._$progress, J = N.find("input"));
                S = K.settings;
                da = K._min;
                O = K._max;
                Y = a.step === i ? +J.attr("step") || S.step : a.step;
                ea = Q("data-live", S.live);
                Z = Q("data-tooltip", S.tooltip);
                B = Q("data-highlight", S.highlight) && 3 > J.length;
                xa = 0 !== Y % 1 ? 100 / (100 * +(Y % 1).toFixed(2)) : 1;
                Ba = 100 / (O - da) || 100;
                qa = 1 < J.length;
                la = B && 2 == J.length;
                fa = [];
                Z && N.addClass("mbsc-slider-has-tooltip");
                if (1 != Y) {
                    b = (O - da) / Y;
                    for (a = 0; a <= b; ++a) x.append('<span class="mbsc-slider-step" style="left:' + 100 / b * a + '%"></span>')
                }
                w || (J.each(function(a) {
                    fa[a] = K._readValue(c(this));
                    c(this).attr("data-index", a).attr("min", da).attr("max", O).attr("step", Y);
                    S.handle && (B ? z : x).append('<span class="mbsc-slider-handle-cont' + (la && !a ? " mbsc-slider-handle-left" : "") + '"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + da + '" aria-valuemax="' + O + '" data-index="' + a + '"></span>' +
                        (Z ? '<span class="mbsc-slider-tooltip"></span>' : "") + "</span>")
                }), w = N.find(".mbsc-slider-handle"), H = N.find(".mbsc-slider-tooltip"), q = N.find(qa ? ".mbsc-slider-handle-cont" : ".mbsc-progress-cont"), w.on("keydown", v).on("keyup", h).on("blur", h), q.on("touchstart mousedown", m).on("touchmove", j).on("touchend touchcancel", g).on("pointercancel", r), J.on("click", u), N.on("click", t))
            };
            K._onDestroy = function() {
                N.off("click", t);
                J.off(S.changeEvent, A).off("click", u);
                w.off("keydown", v).off("keyup", h).off("blur", h);
                q.off("touchstart mousedown",
                    m).off("touchmove", j).off("touchend", g).off("touchcancel pointercancel", r)
            };
            K.refresh = function() {
                J.each(function(a) {
                    G(K._readValue(c(this)), a, !0, !1, !0, !1)
                })
            };
            K.getVal = function() {
                return qa ? fa.slice(0) : fa[0]
            };
            K.setVal = K._setVal = function(a, b, d) {
                c.isArray(a) || (a = [a]);
                c.each(a, function(a, b) {
                    G(b, a, !0, !1, !0, d)
                })
            };
            s || K.init(E)
        };
        b.classes.Slider.prototype = {
            _class: "progress",
            _css: "mbsc-progress mbsc-slider",
            _hasTheme: !0,
            _wrap: !0,
            _defaults: {
                changeEvent: "change",
                stopProp: !0,
                min: 0,
                max: 100,
                step: 1,
                live: !0,
                highlight: !0,
                handle: !0,
                round: !0,
                returnAffix: !0
            }
        };
        b.presetShort("slider", "Slider")
    })();
    (function(i, e, b) {
        var c, a, f = k,
            d = f.$,
            o = f.platform,
            E = f.util,
            s = E.constrain,
            m = E.isString,
            j = E.getCoord,
            g = /(iphone|ipod)/i.test(navigator.userAgent) && 7 <= o.majorVersion,
            o = "ios" == o.name && 8 == o.majorVersion,
            r = function() {},
            A = function(a) {
                a.preventDefault()
            };
        f.classes.Frame = function(o, t, k) {
            function h(a) {
                V && V.removeClass("mbsc-fr-btn-a");
                V = d(this);
                !V.hasClass("mbsc-fr-btn-d") && !V.hasClass("mbsc-fr-btn-nhl") && V.addClass("mbsc-fr-btn-a");
                if ("mousedown" ===
                    a.type) d(e).on("mouseup", D);
                else if ("pointerdown" === a.type) d(e).on("pointerup", D)
            }

            function D(a) {
                V && (V.removeClass("mbsc-fr-btn-a"), V = null);
                "mouseup" === a.type ? d(e).off("mouseup", D) : "pointerup" === a.type && d(e).off("pointerup", D)
            }

            function p(a) {
                13 == a.keyCode ? F.select() : 27 == a.keyCode && F.cancel()
            }

            function l(h) {
                var g = c,
                    e = P.focusOnClose;
                F._markupRemove();
                M.remove();
                ea && (x.removeClass(da), Ba && (z.css({
                    top: "",
                    left: ""
                }), L.scrollLeft(fa), L.scrollTop(ka)));
                h || (g || (g = ma), setTimeout(function() {
                    if (!f.activeInstance)
                        if (e ===
                            b || e === true) {
                            a = true;
                            g[0].focus()
                        } else e && d(e)[0].focus()
                }, 200));
                c = null;
                O = F._isVisible = !1;
                Z("onHide")
            }

            function Q(a) {
                clearTimeout(ha[a.type]);
                ha[a.type] = setTimeout(function() {
                    var b = "scroll" == a.type;
                    if (!b || K) F.position(!b), "orientationchange" == a.type && (R.style.display = "none", R.style.display = "")
                }, 200)
            }

            function G(a) {
                a.target.nodeType && !R.contains(a.target) && R.focus()
            }

            function J() {
                d(e.activeElement).is("input,textarea") && e.activeElement.blur()
            }

            function C(b, d) {
                b && b();
                !1 !== F.show() && (c = d, setTimeout(function() {
                    a = !1
                }, 300))
            }

            function n() {
                F._fillValue();
                Z("onSet", {
                    valueText: F._value
                })
            }

            function w() {
                Z("onCancel", {
                    valueText: F._value
                })
            }

            function q() {
                F.setVal(null, !0)
            }
            var N, z, H, x, M, ga, U, T, L, X, aa, V, B, Z, la, ea, O, da, pa, qa, Y, S, Ba, ia, R, xa, I, P, fa, K, ka, W, na, F = this,
                ma = d(o),
                Qa = [],
                ha = {};
            f.classes.Base.call(this, o, t, !0);
            F.position = function(a) {
                var c, h, g, j, p, m, i, o, n = {},
                    l = pa.offsetHeight,
                    r = pa.offsetWidth,
                    q = o = 0,
                    E = 0,
                    x = 0;
                if (!(W === r && na === l && a || I || !O))
                    if ((F._isFullScreen || /top|bottom/.test(P.display)) && T.width(r), !1 !== Z("onPosition", {
                            target: pa,
                            windowWidth: r,
                            windowHeight: l
                        }) && ea) {
                        d(".mbsc-comp", M).each(function() {
                            var a = f.instances[this.id];
                            a !== F && a.position && a.position()
                        });
                        !F._isFullScreen && /center|bubble/.test(P.display) && (d(".mbsc-w-p", M).each(function() {
                            i = this.getBoundingClientRect().width;
                            x += i;
                            E = i > E ? i : E
                        }), X.css({
                            width: x > r ? E : x,
                            "white-space": x > r ? "" : "nowrap"
                        }));
                        qa = R.offsetWidth;
                        Y = R.offsetHeight;
                        F.scrollLock = K = Y <= l && qa <= r;
                        S && (o = L.scrollLeft(), q = L.scrollTop());
                        "center" == P.display ? (j = Math.max(0, o + (r - qa) / 2), o = Math.max(0, q + (l - Y) /
                            2)) : "bubble" == P.display ? (c = P.anchor === b ? ma : d(P.anchor), j = d(".mbsc-fr-arr-i", M)[0], a = c.offset(), h = a.top + (la ? q - z.offset().top : 0), g = a.left + (la ? o - z.offset().left : 0), a = c[0].offsetWidth, c = c[0].offsetHeight, p = j.offsetWidth, m = j.offsetHeight, j = s(g - (qa - a) / 2, o + 8, o + r - qa - 8), o = h - Y - m / 2, o < q || h > q + l ? (T.removeClass("mbsc-fr-bubble-top").addClass("mbsc-fr-bubble-bottom"), o = h + c + m / 2) : T.removeClass("mbsc-fr-bubble-bottom").addClass("mbsc-fr-bubble-top"), d(".mbsc-fr-arr", M).css({
                            left: s(g + a / 2 - (j + (qa - p) / 2), 0, p)
                        })) : (j = o, o =
                            "top" == P.display ? q : Math.max(0, q + l - Y));
                        if (S && (a = Math.max(o + Y, la ? z[0].scrollHeight : d(e).height()), g = Math.max(j + qa, la ? z[0].scrollWidth : d(e).width()), U.css({
                                width: g,
                                height: a
                            }), "bubble" == P.display && (o + Y + 8 > q + l || h > q + l || h + c < q))) I = !0, setTimeout(function() {
                            I = false
                        }, 300), L.scrollTop(Math.min(h, o + Y - l + 8, a - l));
                        n.top = o;
                        n.left = j;
                        T.css(n);
                        W = r;
                        na = l
                    }
            };
            F.attachShow = function(b, c) {
                var h, g = d(b),
                    f = g.prop("readonly");
                if ("inline" !== P.display) {
                    if ((P.showOnFocus || P.showOnTap) && g.is("input,select")) g.prop("readonly", !0).on("mousedown.mbsc",
                        function(a) {
                            a.preventDefault()
                        }).on("focus.mbsc", function() {
                        F._isVisible && this.blur()
                    }), h = d('label[for="' + g.attr("id") + '"]'), h.length || (h = g.closest("label"));
                    if (!g.is("select")) {
                        if (P.showOnFocus) g.on("focus.mbsc", function() {
                            a || C(c, g)
                        });
                        P.showOnTap && (g.on("keydown.mbsc", function(a) {
                            if (32 == a.keyCode || 13 == a.keyCode) a.preventDefault(), a.stopPropagation(), C(c, g)
                        }), F.tap(g, function() {
                            C(c, g)
                        }), h && h.length && F.tap(h, function() {
                            C(c, g)
                        }));
                        Qa.push({
                            readOnly: f,
                            el: g,
                            lbl: h
                        })
                    }
                }
            };
            F.select = function() {
                ea ? F.hide(!1,
                    "set", !1, n) : n()
            };
            F.cancel = function() {
                ea ? F.hide(!1, "cancel", !1, w) : w()
            };
            F.clear = function() {
                F._clearValue();
                Z("onClear");
                ea && F._isVisible && !F.live ? F.hide(!1, "clear", !1, q) : q()
            };
            F.enable = function() {
                P.disabled = !1;
                F._isInput && ma.prop("disabled", !1)
            };
            F.disable = function() {
                P.disabled = !0;
                F._isInput && ma.prop("disabled", !0)
            };
            F.show = function(a, c) {
                var e, o;
                if (!P.disabled && !F._isVisible) {
                    F._readValue();
                    if (!1 === Z("onBeforeShow")) return !1;
                    B = P.animate;
                    S = la || "bubble" == P.display;
                    Ba = g && !S;
                    e = 0 < aa.length;
                    if (!1 !== B)
                        if ("top" ==
                            P.display) B = "slidedown";
                        else if ("bottom" == P.display) B = "slideup";
                    else if ("center" == P.display || "bubble" == P.display) B = P.animate || "pop";
                    ea && (da = "mbsc-fr-lock" + (Ba ? " mbsc-fr-lock-ios" : "") + (la ? " mbsc-fr-lock-ctx" : ""), ka = L.scrollTop(), fa = L.scrollLeft(), na = W = 0, Ba && (x.scrollTop(0), z.css({
                        top: -ka + "px",
                        left: -fa + "px"
                    })), x.addClass(da), J(), f.activeInstance && f.activeInstance.hide(), f.activeInstance = F);
                    o = '<div lang="' + P.lang + '" class="mbsc-fr mbsc-' + P.theme + (P.baseTheme ? " mbsc-" + P.baseTheme : "") + " mbsc-fr-" + P.display +
                        " " + (P.cssClass || "") + " " + (P.compClass || "") + (F._isLiquid ? " mbsc-fr-liq" : "") + (Ba ? " mbsc-platform-ios" : "") + (e ? 3 <= aa.length ? " mbsc-fr-btn-block " : "" : " mbsc-fr-nobtn") + '">' + (ea ? '<div class="mbsc-fr-persp"><div class="mbsc-fr-overlay"></div><div role="dialog" tabindex="-1" class="mbsc-fr-scroll">' : "") + '<div class="mbsc-fr-popup' + (P.rtl ? " mbsc-rtl" : " mbsc-ltr") + (P.headerText ? " mbsc-fr-has-hdr" : "") + '">' + ("bubble" === P.display ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' :
                            "") + '<div class="mbsc-fr-w"><div aria-live="assertive" class="mbsc-fr-aria mbsc-fr-hdn"></div>' + (P.headerText ? '<div class="mbsc-fr-hdr">' + (m(P.headerText) ? P.headerText : "") + "</div>" : "") + '<div class="mbsc-fr-c">';
                    o += F._generateContent();
                    o += "</div>";
                    e && (o += '<div class="mbsc-fr-btn-cont">', d.each(aa, function(a, c) {
                        c = m(c) ? F.buttons[c] : c;
                        if (c.handler === "set") c.parentClass = "mbsc-fr-btn-s";
                        if (c.handler === "cancel") c.parentClass = "mbsc-fr-btn-c";
                        o = o + ("<div" + (P.btnWidth ? ' style="width:' + 100 / aa.length + '%"' : "") +
                            ' class="mbsc-fr-btn-w ' + (c.parentClass || "") + '"><div tabindex="0" role="button" class="mbsc-fr-btn' + a + " mbsc-fr-btn-e " + (c.cssClass === b ? P.btnClass : c.cssClass) + (c.icon ? " mbsc-ic mbsc-ic-" + c.icon : "") + '">' + (c.text || "") + "</div></div>")
                    }), o += "</div>");
                    o += "</div></div></div></div>" + (ea ? "</div></div>" : "");
                    M = d(o);
                    U = d(".mbsc-fr-persp", M);
                    ga = d(".mbsc-fr-scroll", M);
                    X = d(".mbsc-fr-w", M);
                    H = d(".mbsc-fr-hdr", M);
                    T = d(".mbsc-fr-popup", M);
                    N = d(".mbsc-fr-aria", M);
                    pa = M[0];
                    ia = ga[0];
                    R = T[0];
                    F._markup = M;
                    F._header = H;
                    F._isVisible = !0;
                    xa = "orientationchange resize";
                    F._markupReady(M);
                    Z("onMarkupReady", {
                        target: pa
                    });
                    if (ea) {
                        d(i).on("keydown", p);
                        if (P.scrollLock) M.on("touchmove mousewheel wheel", function(a) {
                            K && a.preventDefault()
                        });
                        if (P.focusTrap) L.on("focusin", G);
                        if (P.closeOnOverlayTap) {
                            var l, n, r, q;
                            ga.on("touchstart mousedown", function(a) {
                                if (!n && a.target == ga[0]) {
                                    n = true;
                                    l = false;
                                    r = j(a, "X");
                                    q = j(a, "Y")
                                }
                            }).on("touchmove mousemove", function(a) {
                                if (n && !l && (Math.abs(j(a, "X") - r) > 9 || Math.abs(j(a, "Y") - q) > 9)) l = true
                            }).on("touchcancel", function() {
                                n =
                                    false
                            }).on("touchend touchcancel mouseup", function(a) {
                                if (n && !l) {
                                    F.cancel();
                                    a.type != "mouseup" && E.preventClick()
                                }
                                n = false
                            })
                        }
                        S && (xa += " scroll")
                    }
                    M.on("selectstart mousedown", A).on("click", ".mbsc-fr-btn-e", A).on("keydown", ".mbsc-fr-btn-e", function(a) {
                        if (a.keyCode == 32) {
                            a.preventDefault();
                            a.stopPropagation();
                            this.click()
                        }
                    }).on("keydown", function(a) {
                        if (a.keyCode == 32) a.preventDefault();
                        else if (a.keyCode == 9 && ea && P.focusTrap) {
                            var b = M.find('[tabindex="0"]').filter(function() {
                                    return this.offsetWidth > 0 || this.offsetHeight >
                                        0
                                }),
                                c = b.index(d(":focus", M)),
                                h = b.length - 1,
                                g = 0;
                            if (a.shiftKey) {
                                h = 0;
                                g = -1
                            }
                            if (c === h) {
                                b.eq(g)[0].focus();
                                a.preventDefault()
                            }
                        }
                    }).on("touchstart mousedown pointerdown", ".mbsc-fr-btn-e", h).on("touchend", ".mbsc-fr-btn-e", D);
                    d("input,select,textarea", M).on("selectstart mousedown", function(a) {
                        a.stopPropagation()
                    }).on("keydown", function(a) {
                        a.keyCode == 32 && a.stopPropagation()
                    });
                    d.each(aa, function(a, b) {
                        F.tap(d(".mbsc-fr-btn" + a, M), function(a) {
                            b = m(b) ? F.buttons[b] : b;
                            (m(b.handler) ? F.handlers[b.handler] : b.handler).call(this,
                                a, F)
                        }, true)
                    });
                    F._attachEvents(M);
                    setTimeout(function() {
                        ea ? M.appendTo(z) : ma.is("div") && !F._hasContent ? ma.empty().append(M) : M.insertAfter(ma);
                        O = true;
                        F._markupInserted(M);
                        Z("onMarkupInserted", {
                            target: pa
                        });
                        F.position();
                        L.on(xa, Q);
                        if (ea)
                            if (B && !a) M.addClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + B).on("webkitAnimationEnd.mbsc animationend.mbsc", function() {
                                M.off("webkitAnimationEnd.mbsc animationend.mbsc").removeClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + B).find(".mbsc-fr-popup").removeClass("mbsc-anim-" +
                                    B);
                                c || ia.focus();
                                F.ariaMessage(P.ariaMessage)
                            }).find(".mbsc-fr-popup").addClass("mbsc-anim-" + B);
                            else {
                                c || ia.focus();
                                F.ariaMessage(P.ariaMessage)
                            }
                        Z("onShow", {
                            target: pa,
                            valueText: F._tempValue
                        })
                    }, Ba ? 100 : 0)
                }
            };
            F.hide = function(a, b, c, h) {
                if (!F._isVisible || !c && !F._isValid && "set" == b || !c && !1 === Z("onBeforeClose", {
                        valueText: F._tempValue,
                        button: b
                    })) return !1;
                M && (ea && B && !a && !M.hasClass("mbsc-anim-trans") ? M.addClass("mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-" + B).on("webkitAnimationEnd.mbsc animationend.mbsc",
                    function() {
                        M.off("webkitAnimationEnd.mbsc animationend.mbsc");
                        l(a)
                    }).find(".mbsc-fr-popup").addClass("mbsc-anim-" + B) : l(a), F._detachEvents(M), L.off(xa, Q).off("focusin", G));
                ea && (J(), d(i).off("keydown", p), delete f.activeInstance);
                h && h();
                Z("onClose", {
                    valueText: F._value
                })
            };
            F.ariaMessage = function(a) {
                N.html("");
                setTimeout(function() {
                    N.html(a)
                }, 100)
            };
            F.isVisible = function() {
                return F._isVisible
            };
            F.setVal = r;
            F.getVal = r;
            F._generateContent = r;
            F._attachEvents = r;
            F._detachEvents = r;
            F._readValue = r;
            F._clearValue = r;
            F._fillValue =
                r;
            F._markupReady = r;
            F._markupInserted = r;
            F._markupRemove = r;
            F._processSettings = r;
            F._presetLoad = function(a) {
                a.buttons = a.buttons || ("inline" !== a.display ? ["set", "cancel"] : []);
                a.headerText = a.headerText === b ? "inline" !== a.display ? "{value}" : !1 : a.headerText
            };
            F.destroy = function() {
                F.hide(!0, !1, !0);
                d.each(Qa, function(a, b) {
                    b.el.off(".mbsc").prop("readonly", b.readOnly);
                    b.lbl && b.lbl.off(".mbsc")
                });
                F._destroy()
            };
            F.init = function(a) {
                F._isVisible && F.hide(!0, !1, !0);
                F._init(a);
                F._isLiquid = "liquid" === (P.layout || (/top|bottom/.test(P.display) ?
                    "liquid" : ""));
                F._processSettings();
                ma.off(".mbsc");
                aa = P.buttons || [];
                ea = "inline" !== P.display;
                la = "body" != P.context;
                F._window = L = d(la ? P.context : i);
                F._context = z = d(P.context);
                x = la ? z : d("body,html");
                F.live = !0;
                d.each(aa, function(a, b) {
                    if ("ok" == b || "set" == b || "set" == b.handler) return F.live = !1
                });
                F.buttons.set = {
                    text: P.setText,
                    handler: "set"
                };
                F.buttons.cancel = {
                    text: F.live ? P.closeText : P.cancelText,
                    handler: "cancel"
                };
                F.buttons.clear = {
                    text: P.clearText,
                    handler: "clear"
                };
                F._isInput = ma.is("input");
                Z("onInit");
                ea ? (F._readValue(),
                    F._hasContent || F.attachShow(ma)) : F.show();
                ma.on("change.mbsc", function() {
                    F._preventChange || F.setVal(ma.val(), true, false);
                    F._preventChange = false
                })
            };
            F.buttons = {};
            F.handlers = {
                set: F.select,
                cancel: F.cancel,
                clear: F.clear
            };
            F._value = null;
            F._isValid = !0;
            F._isVisible = !1;
            P = F.settings;
            Z = F.trigger;
            k || F.init(t)
        };
        f.classes.Frame.prototype._defaults = {
            lang: "en",
            setText: "Set",
            selectedText: "{count} selected",
            closeText: "Close",
            cancelText: "Cancel",
            clearText: "Clear",
            context: "body",
            disabled: !1,
            closeOnOverlayTap: !0,
            showOnFocus: !1,
            showOnTap: !0,
            display: "center",
            scrollLock: !0,
            tap: !0,
            btnClass: "mbsc-fr-btn",
            btnWidth: !0,
            focusTrap: !0,
            focusOnClose: !o
        };
        f.themes.frame.mobiscroll = {
            rows: 5,
            showLabel: !1,
            headerText: !1,
            btnWidth: !1,
            selectedLineBorder: 1,
            weekDays: "min",
            checkIcon: "ion-ios7-checkmark-empty",
            btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
            btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
        };
        d(i).on("focus", function() {
            c && (a = !0)
        })
    })(window, document);
    k.themes.frame["android-holo"] = {
        dateDisplay: "Mddyy",
        rows: 5,
        minWidth: 76,
        height: 36,
        showLabel: !1,
        selectedLineBorder: 2,
        useShortLabels: !0,
        icon: {
            filled: "star3",
            empty: "star"
        },
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down6",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up6"
    };
    (function() {
        var i = k,
            e = i.$;
        i.themes.frame.wp = {
            minWidth: 76,
            height: 76,
            dateDisplay: "mmMMddDDyy",
            headerText: !1,
            showLabel: !1,
            deleteIcon: "backspace4",
            icon: {
                filled: "star3",
                empty: "star"
            },
            btnWidth: !1,
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left2",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right2",
            btnPlusClass: "mbsc-ic mbsc-ic-plus",
            btnMinusClass: "mbsc-ic mbsc-ic-minus",
            onMarkupInserted: function(b, c) {
                var a, f, d, o = e(b.target),
                    i = c.settings;
                e(".mbsc-sc-whl", o).on("touchstart mousedown wheel mousewheel", function(b) {
                    var c;
                    if (!(c = "mousedown" === b.type && f)) c = e(this).attr("data-index"), c = e.isArray(i.readonly) ? i.readonly[c] : i.readonly;
                    c || (f = "touchstart" === b.type, a = !0, d = e(this).hasClass("mbsc-sc-whl-wpa"), e(".mbsc-sc-whl", o).removeClass("mbsc-sc-whl-wpa"), e(this).addClass("mbsc-sc-whl-wpa"))
                }).on("touchmove mousemove",
                    function() {
                        a = !1
                    }).on("touchend mouseup", function(b) {
                    a && d && e(b.target).closest(".mbsc-sc-itm").hasClass("mbsc-sc-itm-sel") && e(this).removeClass("mbsc-sc-whl-wpa");
                    "mouseup" === b.type && (f = !1);
                    a = !1
                })
            },
            onInit: function(b, c) {
                var a = c.buttons;
                a.set.icon = "checkmark";
                a.cancel.icon = "close";
                a.clear.icon = "close";
                a.ok && (a.ok.icon = "checkmark");
                a.close && (a.close.icon = "close");
                a.now && (a.now.icon = "loop2");
                a.toggle && (a.toggle.icon = "play3");
                a.start && (a.start.icon = "play3");
                a.stop && (a.stop.icon = "pause2");
                a.reset && (a.reset.icon =
                    "stop2");
                a.lap && (a.lap.icon = "loop2");
                a.hide && (a.hide.icon = "close")
            }
        }
    })();
    (function() {
        var i = k,
            e = i.$;
        i.themes.frame.material = {
            showLabel: !1,
            headerText: !1,
            btnWidth: !1,
            selectedLineBorder: 2,
            weekDays: "min",
            deleteIcon: "material-backspace",
            icon: {
                filled: "material-star",
                empty: "material-star-outline"
            },
            checkIcon: "material-check",
            btnPlusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-down",
            btnMinusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-up",
            btnCalPrevClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-left",
            btnCalNextClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-right",
            onMarkupReady: function(b) {
                i.themes.material.initRipple(e(b.target), ".mbsc-fr-btn-e", "mbsc-fr-btn-d", "mbsc-fr-btn-nhl")
            },
            onEventBubbleShow: function(b) {
                var c = e(b.eventList),
                    b = 2 > e(b.target).closest(".mbsc-cal-row").index(),
                    a = e(".mbsc-cal-event-color", c).eq(b ? 0 : -1).css("background-color");
                e(".mbsc-cal-events-arr", c).css("border-color", b ? "transparent transparent " + a + " transparent" : a + "transparent transparent transparent")
            }
        }
    })();
    k.themes.frame.ios = {
        display: "bottom",
        dateDisplay: "MMdyy",
        rows: 5,
        height: 34,
        minWidth: 55,
        scroll3d: !0,
        headerText: !1,
        showLabel: !1,
        btnWidth: !1,
        selectedLineBorder: 1,
        useShortLabels: !0,
        deleteIcon: "ios-backspace",
        checkIcon: "ion-ios7-checkmark-empty",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5"
    };
    (function() {
        var i = k,
            e = i.$;
        i.themes.frame.bootstrap = {
            dateDisplay: "Mddyy",
            disabledClass: "disabled",
            activeClass: "btn-primary",
            activeTabClass: "active",
            todayClass: "text-primary",
            btnCalPrevClass: "",
            btnCalNextClass: "",
            onMarkupInserted: function(b) {
                b = e(b.target);
                e(".mbsc-fr-popup", b).addClass("popover");
                e(".mbsc-fr-w", b).addClass("popover-content");
                e(".mbsc-fr-hdr", b).addClass("popover-title");
                e(".mbsc-fr-arr-i", b).addClass("popover");
                e(".mbsc-fr-arr", b).addClass("arrow");
                e(".mbsc-fr-btn", b).addClass("btn btn-default");
                e(".mbsc-fr-btn-s .mbsc-fr-btn", b).removeClass("btn-default").addClass("btn btn-primary");
                e(".mbsc-sc-btn-plus", b).addClass("glyphicon glyphicon-chevron-down");
                e(".mbsc-sc-btn-minus", b).addClass("glyphicon glyphicon-chevron-up");
                e(".mbsc-cal-next .mbsc-cal-btn-txt", b).prepend('<i class="glyphicon glyphicon-chevron-right"></i>');
                e(".mbsc-cal-prev .mbsc-cal-btn-txt", b).prepend('<i class="glyphicon glyphicon-chevron-left"></i>');
                e(".mbsc-cal-tabs ul", b).addClass("nav nav-tabs");
                e(".mbsc-cal-sc-c", b).addClass("popover");
                e(".mbsc-cal-week-nrs-c", b).addClass("popover");
                e(".mbsc-cal-events", b).addClass("popover");
                e(".mbsc-cal-events-arr", b).addClass("arrow");
                e(".mbsc-range-btn",
                    b).addClass("btn btn-sm btn-small btn-default");
                e(".mbsc-np-btn", b).addClass("btn btn-default")
            },
            onPosition: function(b) {
                setTimeout(function() {
                    e(".mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i", b.target).removeClass("bottom").addClass("top");
                    e(".mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i", b.target).removeClass("top").addClass("bottom")
                }, 10)
            },
            onEventBubbleShow: function(b) {
                var c = e(b.eventList);
                e(".mbsc-cal-event-list", c).addClass("list-group");
                e(".mbsc-cal-event", c).addClass("list-group-item");
                setTimeout(function() {
                    c.hasClass("mbsc-cal-events-b") ? c.removeClass("top").addClass("bottom") : c.removeClass("bottom").addClass("top")
                }, 10)
            }
        }
    })();
    (function(i, e, b) {
        var c, a = k,
            f = a.$,
            d = f.extend,
            o = a.classes,
            E = a.util,
            s = E.prefix,
            m = E.jsPrefix,
            j = E.getCoord,
            g = E.testTouch,
            r = E.vibrate,
            A = 1,
            u = function() {},
            t = i.requestAnimationFrame || function(a) {
                a()
            },
            v = i.cancelAnimationFrame || u,
            h = "webkitAnimationEnd animationend",
            D = "transparent";
        o.ListView = function(a, l) {
            function Q() {
                pb = Tb = !1;
                jc = ma = 0;
                kc = new Date;
                Ta = wa.width();
                jb = Y(wa);
                ua = jb.index(ba);
                za = ba[0].offsetHeight;
                Xa = ba[0].offsetTop;
                Ea = Bb[ba.attr("data-type") || "defaults"];
                Nb = Ea.stages
            }

            function G(a) {
                var b;
                "touchstart" === a.type && (db = !0, clearTimeout(Cb));
                if (g(a, this) && !W && !qb && !c && !Ub && k.running && (Qa = W = !0, Vb = j(a, "X"), Wb = j(a, "Y"), Wa = La = 0, b = ba = f(this), Q(), cc = ca.onItemTap || Ea.tap || ba.hasClass("mbsc-lv-parent") || ba.hasClass("mbsc-lv-back"), Ka.offset(), Db = ba.offset().top, cc && (F = setTimeout(function() {
                            b.addClass("mbsc-lv-item-active");
                            ja("onItemActivate", {
                                target: b[0],
                                domEvent: a
                            })
                        },
                        120)), $.sortable && !ba.hasClass("mbsc-lv-back") && (($.sortable.group || (ub = ba.nextUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item"), vb = ba.prevUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item")), cb = (!$.sortable.group ? vb.length ? vb.eq(-1) : ba : wa.children("li").eq(0))[0].offsetTop - Xa, Ma = (!$.sortable.group ? ub.length ? ub.eq(-1) : ba : wa.children("li").eq(-1))[0].offsetTop - Xa, $.sortable.handle) ? f(a.target).hasClass("mbsc-lv-handle") && (clearTimeout(F), "Moz" === m ? (a.preventDefault(), N()) : Xb = setTimeout(function() {
                            N()
                        },
                        100)) : Xb = setTimeout(function() {
                        Na.appendTo(ba);
                        Na[0].style[m + "Animation"] = "mbsc-lv-fill " + (ca.sortDelay - 100) + "ms linear";
                        clearTimeout($a);
                        clearTimeout(F);
                        Qa = false;
                        Xb = setTimeout(function() {
                            Na[0].style[m + "Animation"] = "";
                            N()
                        }, ca.sortDelay - 80)
                    }, 80)), "mousedown" == a.type)) f(e).on("mousemove", J).on("mouseup", C)
            }

            function J(a) {
                var b = !1,
                    c = !0;
                if (W)
                    if (Eb = j(a, "X"), Ya = j(a, "Y"), La = Eb - Vb, Wa = Ya - Wb, clearTimeout($a), !kb && !rb && !Fb && !ba.hasClass("mbsc-lv-back") && (10 < Math.abs(Wa) ? (Fb = !0, a.type = "mousemove" == a.type ? "mouseup" :
                            "touchend", C(a), clearTimeout(F)) : 7 < Math.abs(La) ? n() : "touchmove" === a.type && ($a = setTimeout(function() {
                            a.type = "touchend";
                            C(a)
                        }, 300))), rb) a.preventDefault(), ma = 100 * (La / Ta), w();
                    else if (kb) {
                    a.preventDefault();
                    var d, h = Oa.scrollTop(),
                        g = Math.max(cb, Math.min(Wa + Gb, Ma)),
                        f = Ua ? Db - dc + h - Gb : Db;
                    Hb + h < f + g + za ? (Oa.scrollTop(f + g - Hb + za), d = !0) : f + g < h && (Oa.scrollTop(f + g), d = !0);
                    d && (Gb += Oa.scrollTop() - h);
                    if (eb && ($.sortable.multiLevel && Ga.hasClass("mbsc-lv-parent") ? Xa + za / 4 + g > eb ? b = !0 : Xa + za - za / 4 + g > eb && (Ca = Ga.addClass("mbsc-lv-item-hl"),
                            c = !1) : Xa + za / 2 + g > eb && (Ga.hasClass("mbsc-lv-back") ? $.sortable.multiLevel && (Pa = Ga.addClass("mbsc-lv-item-hl"), c = !1) : b = !0), b)) ab.insertAfter(Ga), ya = Ga, Ga = Ba(Ga, "next"), Fa = eb, eb = Ga.length && Ga[0].offsetTop, Ra++;
                    if (!b && Fa && ($.sortable.multiLevel && ya.hasClass("mbsc-lv-parent") ? Xa + za - za / 4 + g < Fa ? b = !0 : Xa + za / 4 + g < Fa && (Ca = ya.addClass("mbsc-lv-item-hl"), c = !1) : Xa + za / 2 + g < Fa && (ya.hasClass("mbsc-lv-back") ? $.sortable.multiLevel && (Pa = ya.addClass("mbsc-lv-item-hl"), c = !1) : b = !0), b)) ab.insertBefore(ya), Ga = ya, ya = Ba(ya, "prev"),
                        eb = Fa, Fa = ya.length && ya[0].offsetTop + ya[0].offsetHeight, Ra--;
                    if (c && (Ca && (Ca.removeClass("mbsc-lv-item-hl"), Ca = !1), Pa)) Pa.removeClass("mbsc-lv-item-hl"), Pa = !1;
                    b && ja("onSortChange", [ba, Ra]);
                    V(ba, g);
                    ja("onSort", [ba, Ra])
                } else(5 < Math.abs(La) || 5 < Math.abs(Wa)) && B()
            }

            function C(a) {
                var b, c, d = ba;
                if (W) {
                    W = !1;
                    B();
                    "mouseup" == a.type && f(e).off("mousemove", J).off("mouseup", C);
                    Fb || (Cb = setTimeout(function() {
                        db = !1
                    }, 300));
                    if (rb || Fb || kb) pb = !0;
                    rb ? q() : kb ? (b = wa, Ca ? (O(ba.detach()), a = gb[Ca.attr("data-ref")], Ra = Y(a.child).length,
                        Ca.removeClass("mbsc-lv-item-hl"), ca.navigateOnDrop ? P(Ca, function() {
                            $.add(null, ba, null, null, Ca, !0);
                            xa(ba);
                            z(ba, ua, b, !0)
                        }) : ($.add(null, ba, null, null, Ca, !0), z(ba, ua, b, !0))) : Pa ? (O(ba.detach()), a = gb[Pa.attr("data-back")], Ra = Y(a.parent).index(a.item) + 1, Pa.removeClass("mbsc-lv-item-hl"), ca.navigateOnDrop ? P(Pa, function() {
                        $.add(null, ba, Ra, null, wa, !0);
                        xa(ba);
                        z(ba, ua, b, !0)
                    }) : ($.add(null, ba, Ra, null, a.parent, !0), z(ba, ua, b, !0))) : (a = ab[0].offsetTop - Xa, V(ba, a, 6 * Math.abs(a - Math.max(cb, Math.min(Wa + Gb, Ma))), function() {
                        O(ba);
                        ba.insertBefore(ab);
                        z(ba, ua, b, Ra !== ua)
                    })), kb = !1) : !Fb && 5 > Math.abs(La) && 5 > Math.abs(Wa) && (Ea.tap && (c = Ea.tap.call(Za, {
                        target: ba,
                        index: ua,
                        domEvent: a
                    }, $)), cc && ("touchend" === a.type && E.preventClick(), ba.addClass("mbsc-lv-item-active"), ja("onItemActivate", {
                        target: ba[0],
                        domEvent: a
                    })), c = ja("onItemTap", {
                        target: ba[0],
                        index: ua,
                        domEvent: a
                    }), !1 !== c && P(ba));
                    clearTimeout(F);
                    setTimeout(function() {
                        d.removeClass("mbsc-lv-item-active");
                        ja("onItemDeactivate", {
                            target: d[0]
                        })
                    }, 100);
                    Fb = !1;
                    oa = null
                }
            }

            function n() {
                if (rb = da(Ea.swipe, {
                        target: ba[0],
                        index: ua,
                        direction: 0 < La ? "right" : "left"
                    })) B(), clearTimeout(F), Ea.actions ? (na = R(Ea, La), ta.html(Ea.icons).show().children().css("width", na + "%"), Ja.hide(), f(".mbsc-lv-ic-m", Ha).removeClass("mbsc-lv-ic-disabled"), f(Ea.leftMenu).each(ga), f(Ea.rightMenu).each(ga)) : (Ja.show(), ta.hide(), ra = Ea.start + (0 < La ? 0 : 1), wb = Nb[ra - 1], fb = Nb[ra]), ba.addClass("mbsc-lv-item-swiping").removeClass("mbsc-lv-item-active"), Yb.css("line-height", za + "px"), Ha.css({
                    top: Xa,
                    height: za,
                    backgroundColor: (0 < La ? Ea.right : Ea.left).color ||
                        D
                }).addClass("mbsc-lv-stage-c-v").appendTo(wa.parent()), ca.iconSlide && ba.append(Ja), ja("onSlideStart", {
                    target: ba[0],
                    index: ua
                })
            }

            function w() {
                var a = !1;
                if (!Zb) {
                    if (Ea.actions) Ha.attr("class", "mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-" + (0 > ma ? "right" : "left"));
                    else if (wb && ma <= wb.percent ? (ra--, fb = wb, wb = Nb[ra], a = !0) : fb && ma >= fb.percent && (ra++, wb = fb, fb = Nb[ra], a = !0), a)
                        if (oa = 0 < ma ? wb : fb) Z(oa, ca.iconSlide), ja("onStageChange", {
                            target: ba[0],
                            index: ua,
                            stage: oa
                        });
                    Ib || (Zb = !0, lc = t(L))
                }
            }

            function q(a) {
                var b, d, h = !1;
                v(lc);
                Zb = !1;
                Ib || L();
                if (Ea.actions) 10 < Math.abs(ma) && na && (aa(ba, 0 > ma ? -na : na, 200), c = h = !0, ha = ba, Va = ua, f(e).on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(b) {
                    b.preventDefault();
                    X(ba, !0, a)
                }));
                else if (ma && (ca.quickSwipe && !Ib && (d = new Date - kc, b = 300 > d && -50 > La, d = 300 > d && 50 < La, b ? (Tb = !0, oa = Ea.left, Z(oa, ca.iconSlide)) : d && (Tb = !0, oa = Ea.right, Z(oa, ca.iconSlide))), oa && oa.action)) Mb = da(oa.disabled, {
                    target: ba[0],
                    index: ua
                }), Mb || (h = !0, (c = Ib || da(oa.confirm, {
                    target: ba[0],
                    index: ua
                })) ? (aa(ba, 100 * (0 > ma ? -1 : 1) * Ja[0].offsetWidth /
                    Ta, 200, !0), T(oa, ba, ua, !1, a)) : U(oa, ba, ua, a));
                h || X(ba, !0, a);
                rb = !1
            }

            function N() {
                kb = !0;
                Pa = Ca = !1;
                Gb = 0;
                Ra = ua;
                ca.vibrate && r();
                Ga = Ba(ba, "next");
                eb = Ga.length && Ga[0].offsetTop;
                ya = Ba(ba, "prev");
                Fa = ya.length && ya[0].offsetTop + ya[0].offsetHeight;
                ab.height(za).insertAfter(ba);
                ba.css({
                    top: Xa
                }).addClass("mbsc-lv-item-dragging").removeClass("mbsc-lv-item-active").appendTo(Ob);
                ja("onSortStart", {
                    target: ba[0],
                    index: Ra
                })
            }

            function z(a, b, c, d) {
                a.removeClass("mbsc-lv-item-dragging");
                ab.remove();
                ja("onSortEnd", {
                    target: a[0],
                    index: Ra
                });
                ca.vibrate && r();
                d && ($.addUndoAction(function(d) {
                    $.move(a, b, null, d, c, !0)
                }, !0), ja("onSortUpdate", {
                    target: a[0],
                    index: Ra
                }))
            }

            function H() {
                db || (clearTimeout(Jb), c && f(e).trigger("touchstart"), sb && ($.close(va, Da), sb = !1, va = null))
            }

            function x() {
                clearTimeout(Ab);
                Ab = setTimeout(function() {
                    Hb = Oa[0].innerHeight || Oa.innerHeight();
                    dc = Ua ? Oa.offset().top : 0;
                    W && (Xa = ba[0].offsetTop, za = ba[0].offsetHeight, Ha.css({
                        top: Xa,
                        height: za
                    }))
                }, 200)
            }

            function M() {
                if (kb || !W) {
                    var a = f(this).scrollTop(),
                        b = Ka.offset().top;
                    tb.each(function(c,
                        d) {
                        if (f(d).offset().top - (Ua ? b : 0) < a) xb = c
                    });
                    Sa = tb[xb];
                    b < (Ua ? Oa.offset().top : a) && a < (Ua ? Ka[0].scrollHeight : b + Ka.height()) ? sa.empty().append(f(Sa).clone()).show() : sa.hide()
                }
            }

            function ga(a, b) {
                da(b.disabled, {
                    target: ba[0],
                    index: ua
                }) && f(".mbsc-ic-" + b.icon, Ha).addClass("mbsc-lv-ic-disabled")
            }

            function U(a, b, c, d) {
                var h, g = {
                    icon: "undo2",
                    text: ca.undoText,
                    color: "#b1b1b1",
                    action: function() {
                        $.undo()
                    }
                };
                a.undo && ($.startActionTrack(), f.isFunction(a.undo) && $.addUndoAction(function() {
                    a.undo.call(Za, b, $, c)
                }), $b = b.attr("data-ref"));
                h = a.action.call(Za, {
                    target: b[0],
                    index: c
                }, $);
                a.undo ? ($.endActionTrack(), !1 !== h && aa(b, 0 > +b.attr("data-pos") ? -100 : 100, 200), ab.height(za).insertAfter(b), b.css("top", Xa).addClass("mbsc-lv-item-undo"), ta.hide(), Ja.show(), Ha.append(Ja), Z(g), T(g, b, c, !0, d)) : X(b, h, d)
            }

            function T(a, b, d, h, g) {
                var W, o;
                c = !0;
                f(e).off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(a) {
                    a.preventDefault();
                    h && ea(b);
                    X(b, !0, g)
                });
                if (!mb) Ja.off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf",
                    function(a) {
                        a.stopPropagation();
                        W = j(a, "X");
                        o = j(a, "Y")
                    }).on("touchend.mbsc-lv-conf mouseup.mbsc-lv-conf", function(c) {
                    c.preventDefault();
                    "touchend" === c.type && E.preventClick();
                    10 > Math.abs(j(c, "X") - W) && 10 > Math.abs(j(c, "Y") - o) && (U(a, b, d, g), h && (ac = null, ea(b)))
                })
            }

            function L() {
                aa(ba, jc + 100 * La / Ta);
                Zb = !1
            }

            function X(a, b, d) {
                f(e).off(".mbsc-lv-conf");
                Ja.off(".mbsc-lv-conf");
                !1 !== b ? aa(a, 0, "0" !== a.attr("data-pos") ? 200 : 0, !1, function() {
                    la(a, d);
                    O(a)
                }) : la(a, d);
                c = !1
            }

            function aa(a, b, c, d, h) {
                b = Math.max("right" == rb ? 0 : -100,
                    Math.min(b, "left" == rb ? 0 : 100));
                lb = a[0].style;
                a.attr("data-pos", b);
                lb[m + "Transform"] = "translate3d(" + (d ? Ta * b / 100 + "px" : b + "%") + ",0,0)";
                lb[m + "Transition"] = s + "transform " + (c || 0) + "ms";
                h && (qb++, setTimeout(function() {
                    h();
                    qb--
                }, c));
                ma = b
            }

            function V(a, b, c, d) {
                b = Math.max(cb, Math.min(b, Ma));
                lb = a[0].style;
                lb[m + "Transform"] = "translate3d(0," + b + "px,0)";
                lb[m + "Transition"] = s + "transform " + (c || 0) + "ms ease-out";
                d && (qb++, setTimeout(function() {
                    d();
                    qb--
                }, c))
            }

            function B() {
                clearTimeout(Xb);
                !Qa && $.sortable && (Qa = !0, Na.remove())
            }

            function Z(a, b) {
                var c = da(a.text, {
                    target: ba[0],
                    index: ua
                }) || "";
                da(a.disabled, {
                    target: ba[0],
                    index: ua
                }) ? Ha.addClass("mbsc-lv-ic-disabled") : Ha.removeClass("mbsc-lv-ic-disabled");
                Ha.css("background-color", a.color || (0 === a.percent ? (0 < ma ? Ea.right : Ea.left).color || D : D));
                Ja.attr("class", "mbsc-lv-ic-c mbsc-lv-ic-" + (b ? "move-" : "") + (0 > ma ? "right" : "left"));
                yb.attr("class", " mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-" + (a.icon || "none"));
                Yb.attr("class", "mbsc-lv-ic-text" + (a.icon ? "" : " mbsc-lv-ic-text-only") + (c ? "" : " mbsc-lv-ic-only")).html(c ||
                    "&nbsp;");
                ca.animateIcons && (Tb ? yb.addClass("mbsc-lv-ic-v") : setTimeout(function() {
                    yb.addClass("mbsc-lv-ic-a")
                }, 10))
            }

            function la(a, b) {
                W || (yb.attr("class", "mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"), Ha.attr("style", "").removeClass("mbsc-lv-stage-c-v"), Yb.html(""));
                Ha.removeClass("mbsc-lv-left mbsc-lv-right");
                a && (ja("onSlideEnd", {
                    target: a[0],
                    index: ua
                }), b && b())
            }

            function ea(a) {
                a.css("top", "").removeClass("mbsc-lv-item-undo");
                ac ? $.animate(ab, "collapse", function() {
                    ab.remove()
                }) : ab.remove();
                la();
                ac = $b =
                    null
            }

            function O(a) {
                lb = a[0].style;
                lb[m + "Transform"] = "";
                lb[m + "Transition"] = "";
                lb.top = "";
                a.removeClass("mbsc-lv-item-swiping")
            }

            function da(a, b) {
                return f.isFunction(a) ? a.call(this, b, $) : a
            }

            function pa(a) {
                var b;
                a.attr("data-ref") || (b = A++, a.attr("data-ref", b), gb[b] = {
                    item: a,
                    child: a.children("ul,ol"),
                    parent: a.parent(),
                    ref: a.parent()[0] === Za ? null : a.parent().parent().attr("data-ref")
                });
                a.addClass("mbsc-lv-item");
                $.sortable.handle && "list-divider" != a.attr("data-role") && !a.children(".mbsc-lv-handle-c").length &&
                    a.append(Pb);
                if (ca.enhance && !a.hasClass("mbsc-lv-item-enhanced")) {
                    b = a.attr("data-icon");
                    var c = a.find("img").eq(0).addClass("mbsc-lv-img");
                    c.is(":first-child") ? a.addClass("mbsc-lv-img-" + (ca.rtl ? "right" : "left")) : c.length && a.addClass("mbsc-lv-img-" + (ca.rtl ? "left" : "right"));
                    a.addClass("mbsc-lv-item-enhanced").children().each(function(a, b) {
                        b = f(b);
                        b.is("p, h1, h2, h3, h4, h5, h6") && b.addClass("mbsc-lv-txt")
                    });
                    b && a.addClass("mbsc-lv-item-ic-" + (a.attr("data-icon-align") || (ca.rtl ? "right" : "left"))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' +
                        b + '"></div')
                }
                a.append($._processItem(f, 0.2))
            }

            function qa(a) {
                f("li", a).not(".mbsc-lv-item").each(function() {
                    pa(f(this))
                });
                f('li[data-role="list-divider"]', a).removeClass("mbsc-lv-item").addClass("mbsc-lv-gr-title");
                f("ul,ol", a).not(".mbsc-lv").addClass("mbsc-lv").prepend(Qb).parent().addClass("mbsc-lv-parent").prepend(y);
                f(".mbsc-lv-back", a).each(function() {
                    f(this).attr("data-back", f(this).parent().parent().attr("data-ref"))
                })
            }

            function Y(a) {
                return a.children("li").not(".mbsc-lv-back").not(".mbsc-lv-removed").not(".mbsc-lv-ph")
            }

            function S(a) {
                "object" !== typeof a && (a = f('li[data-id="' + a + '"]', Aa));
                return f(a)
            }

            function Ba(a, b) {
                for (a = a[b](); a.length && (!a.hasClass("mbsc-lv-item") || a.hasClass("mbsc-lv-ph") || a.hasClass("mbsc-lv-item-dragging"));) {
                    if (!$.sortable.group && a.hasClass("mbsc-lv-gr-title")) return !1;
                    a = a[b]()
                }
                return a
            }

            function ia(a) {
                return E.isNumeric(a) ? a + "" : 0
            }

            function R(a, b) {
                return +(0 > b ? ia((a.actionsWidth || 0).right) || ia(a.actionsWidth) || ia(ca.actionsWidth.right) || ia(ca.actionsWidth) : ia((a.actionsWidth || 0).left) || ia(a.actionsWidth) ||
                    ia(ca.actionsWidth.left) || ia(ca.actionsWidth))
            }

            function xa(a, b) {
                if (a) {
                    var c = Oa.scrollTop(),
                        d = a.is(".mbsc-lv-item") ? a[0].offsetHeight : 0,
                        h = a.offset().top + (Ua ? c - dc : 0);
                    b ? (h < c || h > c + Hb) && Oa.scrollTop(h) : h < c ? Oa.scrollTop(h) : h + d > c + Hb && Oa.scrollTop(h + d - Hb / 2)
                }
            }

            function I(a, b, c, d, h) {
                var g = b.parent(),
                    f = b.prev(),
                    d = d || u;
                f[0] === Ja[0] && (f = Ja.prev());
                wa[0] !== b[0] ? (ja("onNavStart", {
                    level: Kb,
                    direction: a,
                    list: b[0]
                }), ec.prepend(b.addClass("mbsc-lv-v mbsc-lv-sl-new")), xa(Aa), fa(ec, "mbsc-lv-sl-" + a, function() {
                    wa.removeClass("mbsc-lv-sl-curr");
                    b.removeClass("mbsc-lv-sl-new").addClass("mbsc-lv-sl-curr");
                    ib && ib.length ? wa.removeClass("mbsc-lv-v").insertAfter(ib) : ob.append(wa.removeClass("mbsc-lv-v"));
                    ib = f;
                    ob = g;
                    wa = b;
                    xa(c, h);
                    d.call(Za, c);
                    ja("onNavEnd", {
                        level: Kb,
                        direction: a,
                        list: b[0]
                    })
                })) : (xa(c, h), d.call(Za, c))
            }

            function P(a, b) {
                qb || (a.hasClass("mbsc-lv-parent") ? (Kb++, I("r", gb[a.attr("data-ref")].child, null, b)) : a.hasClass("mbsc-lv-back") && (Kb--, I("l", gb[a.attr("data-back")].parent, gb[a.attr("data-back")].item, b)))
            }

            function fa(a, b, c) {
                function d() {
                    clearTimeout(g);
                    qb--;
                    a.off(h, d).removeClass(b);
                    c.call(Za, a)
                }
                var g, c = c || u;
                ca.animation && "mbsc-lv-item-none" !== b ? (qb++, a.on(h, d).addClass(b), g = setTimeout(d, 500)) : c.call(Za, a)
            }

            function K(a, b) {
                var c, d = a.attr("data-ref");
                c = fc[d] = fc[d] || [];
                b && c.push(b);
                a.attr("data-action") || (b = c.shift(), a.attr("data-action", 1), b(function() {
                    a.removeAttr("data-action");
                    c.length ? K(a) : delete fc[d]
                }))
            }

            function ka(a, c, h) {
                var g, e;
                a && a.length && (g = 100 / (a.length + 2), f.each(a, function(f, W) {
                    W.key === b && (W.key = gc++);
                    W.percent === b && (W.percent = c * g * (f +
                        1), h && (e = d({}, W), e.key = gc++, e.percent = -g * (f + 1), a.push(e), bc[e.key] = e));
                    bc[W.key] = W
                }))
            }
            var W, na, F, ma, Qa, ha, Va, Aa, Ra, Sa, wa, ib, ob, jb, oa, ra, Ab, mb, Mb, La, Wa, Ca, Pa, kb, Ob, $a, Eb, Ya, ja, Na, nb, sa, tb, xb, bb, hb, Ua, Pb, zb, va, sb, Da, Rb, Jb, Qb, y, yb, Ja, Ha, Ta, ba, za, ua, Db, Ma, cb, ta, Ga, eb, fb, ub, pb, db, Cb, vb, ab, ya, Fa, wb, Tb, lc, Zb, ca, Fb, Ib, ec, gc, Nb, jc, kc, Vb, Wb, lb, rb, hc, mc, cc, Yb, Xb, Ea, Bb, $b, ac, Oa, Hb, Gb, dc, $ = this,
                Za = a,
                Ka = f(Za),
                qb = 0,
                Kb = 0,
                Xa = 0,
                bc = {},
                fc = {},
                gb = {};
            o.Base.call(this, a, l, !0);
            $._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1fce1711cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            $.animate = function(a, b, c) {
                fa(a, "mbsc-lv-item-" + b, c)
            };
            $.add = function(a, c, d, h, g, e) {
                var W, j, o, p, i, l, m = "",
                    n = g === b ? Ka : S(g),
                    r = n,
                    q = "object" !== typeof c ? f('<li data-ref="' + A++ + '" data-id="' + a + '">' + c + "</li>") : c,
                    F = 0 > q.attr("data-pos") ? "left" : "right",
                    na = q.attr("data-ref"),
                    h = h || u;
                na || (na = A++, q.addClass("mbsc-lv-item").attr("data-ref", na));
                pa(q);
                e || $.addUndoAction(function(a) {
                    p ?
                        $.navigate(n, function() {
                            r.remove();
                            n.removeClass("mbsc-lv-parent").children(".mbsc-lv-arr").remove();
                            i.child = n.children("ul,ol");
                            $.remove(q, null, a, true)
                        }) : $.remove(q, null, a, true)
                }, !0);
                K(q, function(a) {
                    O(q.css("top", "").removeClass("mbsc-lv-item-undo"));
                    if (n.is("li")) {
                        l = n.attr("data-ref");
                        if (!n.children("ul,ol").length) {
                            p = true;
                            n.append("<ul></ul>")
                        }
                    } else l = n.children(".mbsc-lv-back").attr("data-back");
                    if (i = gb[l])
                        if (i.child.length) r = i.child;
                        else {
                            n.addClass("mbsc-lv-parent").prepend(y);
                            r = n.children("ul,ol").prepend(Qb).addClass("mbsc-lv");
                            i.child = r;
                            f(".mbsc-lv-back", n).attr("data-back", l)
                        }
                    gb[na] = {
                        item: q,
                        child: q.children("ul,ol"),
                        parent: r,
                        ref: l
                    };
                    o = Y(r);
                    j = o.length;
                    if (d === b || d === null) d = j;
                    e && (m = "mbsc-lv-item-new-" + (e ? F : ""));
                    qa(q.addClass(m));
                    if (d !== false)
                        if (j) d < j ? q.insertBefore(o.eq(d)) : q.insertAfter(o.eq(j - 1));
                        else {
                            W = f(".mbsc-lv-back", r);
                            W.length ? q.insertAfter(W) : r.append(q)
                        }
                    if (r.hasClass("mbsc-lv-v")) $.animate(q.height(q[0].offsetHeight), e && $b === na ? "none" : "expand", function(b) {
                        $.animate(b.height(""), e ? "add-" + F : "pop-in", function(b) {
                            h.call(Za,
                                b.removeClass(m));
                            a()
                        })
                    });
                    else {
                        h.call(Za, q.removeClass(m));
                        a()
                    }
                    Aa.trigger("mbsc-enhance", [{
                        theme: ca.theme,
                        lang: ca.lang
                    }]);
                    ja("onItemAdd", {
                        target: q[0]
                    })
                })
            };
            $.swipe = function(a, c, d, h, g) {
                ba = a = S(a);
                mb = h;
                W = Ib = !0;
                d = d === b ? 300 : d;
                La = 0 < c ? 1 : -1;
                Q();
                n();
                aa(a, c, d);
                clearTimeout(mc);
                clearInterval(hc);
                hc = setInterval(function() {
                    ma = 100 * (E.getPosition(a) / Ta);
                    w()
                }, 10);
                mc = setTimeout(function() {
                    clearInterval(hc);
                    ma = c;
                    w();
                    q(g);
                    W = Ib = mb = !1
                }, d)
            };
            $.openStage = function(a, b, c, d) {
                bc[b] && $.swipe(a, bc[b].percent, c, d)
            };
            $.openActions =
                function(a, b, c, d) {
                    var a = S(a),
                        h = R(Bb[a.attr("data-type") || "defaults"], "left" == b ? -1 : 1);
                    $.swipe(a, "left" == b ? -h : h, c, d)
                };
            $.close = function(a, b) {
                $.swipe(a, 0, b)
            };
            $.remove = function(a, b, c, d) {
                var h, g, c = c || u,
                    a = S(a);
                a.length && (g = a.parent(), h = Y(g).index(a), d || (a.attr("data-ref") === $b && (ac = !0), $.addUndoAction(function(b) {
                    $.add(null, a, h, b, g, !0)
                }, !0)), K(a, function(h) {
                    b = b || a.attr("data-pos") < 0 ? "left" : "right";
                    if (g.hasClass("mbsc-lv-v")) $.animate(a.addClass("mbsc-lv-removed"), d ? "pop-out" : "remove-" + b, function(a) {
                        $.animate(a.height(a[0].offsetHeight),
                            "collapse",
                            function(a) {
                                O(a.height("").removeClass("mbsc-lv-removed"));
                                c.call(Za, a) !== false && a.remove();
                                h()
                            })
                    });
                    else {
                        c.call(Za, a) !== false && a.remove();
                        h()
                    }
                    ja("onItemRemove", {
                        target: a[0]
                    })
                }))
            };
            $.move = function(a, b, c, d, h, g) {
                a = S(a);
                g || $.startActionTrack();
                Ha.append(Ja);
                $.remove(a, c, null, g);
                $.add(null, a, b, d, h, g);
                g || $.endActionTrack()
            };
            $.navigate = function(a, b) {
                var c, d, a = S(a);
                c = gb[a.attr("data-ref")];
                d = 0;
                for (var h = gb[a.attr("data-ref")]; h.ref;) d++, h = gb[h.ref];
                c && (I(d >= Kb ? "r" : "l", c.parent, a, b, !0), Kb = d)
            };
            $.init =
                function(a) {
                    var d;
                    d = Ka.find("ul,ol").length ? "left" : "right";
                    var h = 0,
                        g = "",
                        e = "",
                        W = "";
                    $._init(a);
                    a = ca.sort || ca.sortable;
                    "group" === a && (a = {
                        group: !1,
                        multiLevel: !0
                    });
                    !0 === a && (a = {
                        group: !0,
                        multiLevel: !0,
                        handle: ca.sortHandle
                    });
                    a && a.handle === b && (a.handle = ca.sortHandle);
                    $.sortable = a || !1;
                    a = "mbsc-lv-cont mbsc-lv-" + ca.theme + (ca.rtl ? " mbsc-lv-rtl" : "") + (ca.baseTheme ? " mbsc-lv-" + ca.baseTheme : "") + (ca.animateIcons ? " mbsc-lv-ic-anim" : "") + (ca.striped ? " mbsc-lv-alt-row " : "") + (ca.fixedHeader ? " mbsc-lv-has-fixed-header " :
                        "");
                    Aa ? (Aa.attr("class", a), $.sortable.handle && f(".mbsc-lv-handle-c", Ka).remove(), f("li:not(.mbsc-lv-back)", Ka).removeClass("mbsc-lv-item")) : (g += '<div class="mbsc-lv-multi-c"></div><div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>', Ka.addClass("mbsc-lv mbsc-lv-v mbsc-lv-root").show(), Ha = f('<div class="mbsc-lv-stage-c">' + g + "</div>"), Ja = f(".mbsc-lv-ic-c", Ha), ta = f(".mbsc-lv-multi-c", Ha), yb = f(".mbsc-lv-ic-s", Ha), Yb = f(".mbsc-lv-ic-text",
                        Ha), ab = f('<li class="mbsc-lv-item mbsc-lv-ph"></li>'), Na = f('<div class="mbsc-lv-fill-item"></div>'), Aa = f('<div class="' + a + '"><ul class="mbsc-lv mbsc-lv-dummy"></ul><div class="mbsc-lv-sl-c"></div></div>'), Ua = "body" !== ca.context, Oa = f(Ua ? ca.context : i), Ob = f(".mbsc-lv-dummy", Aa), Aa.insertAfter(Ka), Oa.on("orientationchange resize", x), x(), Aa.on("touchstart mousedown", ".mbsc-lv-item", G).on("touchmove", ".mbsc-lv-item", J).on("touchend touchcancel", ".mbsc-lv-item", C), Za.addEventListener && Za.addEventListener("click",
                        function(a) {
                            if (pb) {
                                a.stopPropagation();
                                a.preventDefault();
                                pb = false
                            }
                        }, !0), Aa.on("touchstart mousedown", ".mbsc-lv-ic-m", function(a) {
                        if (!mb) {
                            a.stopPropagation();
                            a.preventDefault()
                        }
                        Vb = j(a, "X");
                        Wb = j(a, "Y")
                    }).on("touchend mouseup", ".mbsc-lv-ic-m", function(a) {
                        if (!mb) {
                            a.type === "touchend" && E.preventClick();
                            c && !f(this).hasClass("mbsc-lv-ic-disabled") && Math.abs(j(a, "X") - Vb) < 10 && Math.abs(j(a, "Y") - Wb) < 10 && U((ma < 0 ? Ea.rightMenu : Ea.leftMenu)[f(this).index()], ha, Va)
                        }
                    }), ec = f(".mbsc-lv-sl-c", Aa).append(Ka.addClass("mbsc-lv-sl-curr")).attr("data-ref",
                        A++), wa = Ka, ob = Aa);
                    Qb = '<li class="mbsc-lv-item mbsc-lv-back">' + ca.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + ca.leftArrowClass + '"></div></li>';
                    y = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + ca.rightArrowClass + '"></div>';
                    $.sortable.handle && (hb = !0 === $.sortable.handle ? d : $.sortable.handle, Pb = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + hb + ' mbsc-lv-handle"><div class="' + ca.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + ca.handleMarkup + "</div></div>", Aa.addClass("mbsc-lv-handle-" + hb));
                    qa(Ka);
                    gc = 0;
                    Bb = ca.itemGroups || {};
                    Bb.defaults = {
                        swipeleft: ca.swipeleft,
                        swiperight: ca.swiperight,
                        stages: ca.stages,
                        actions: ca.actions,
                        actionsWidth: ca.actionsWidth
                    };
                    f.each(Bb, function(a, c) {
                        c.swipe = c.swipe !== b ? c.swipe : ca.swipe;
                        c.stages = c.stages || [];
                        ka(c.stages, 1, true);
                        ka(c.stages.left, 1);
                        ka(c.stages.right, -1);
                        if (c.stages.left || c.stages.right) c.stages = [].concat(c.stages.left || [], c.stages.right || []);
                        nb = false;
                        if (!c.stages.length) {
                            c.swipeleft && c.stages.push({
                                percent: -30,
                                action: c.swipeleft
                            });
                            c.swiperight && c.stages.push({
                                percent: 30,
                                action: c.swiperight
                            })
                        }
                        f.each(c.stages, function(a, b) {
                            if (b.percent === 0) {
                                nb = true;
                                return false
                            }
                        });
                        nb || c.stages.push({
                            percent: 0
                        });
                        c.stages.sort(function(a, b) {
                            return a.percent - b.percent
                        });
                        f.each(c.stages, function(a, b) {
                            if (b.percent === 0) {
                                c.start = a;
                                return false
                            }
                        });
                        if (nb) c.left = c.right = c.stages[c.start];
                        else {
                            c.left = c.stages[c.start - 1] || {};
                            c.right = c.stages[c.start + 1] || {}
                        }
                        if (c.actions) {
                            c.leftMenu = c.actions.left || c.actions;
                            c.rightMenu = c.actions.right || c.leftMenu;
                            W = e = "";
                            for (h = 0; h < c.leftMenu.length; h++) e = e + ("<div " +
                                (c.leftMenu[h].color ? 'style="background-color: ' + c.leftMenu[h].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + c.leftMenu[h].icon + '">' + (c.leftMenu[h].text || "") + "</div>");
                            for (h = 0; h < c.rightMenu.length; ++h) W = W + ("<div " + (c.rightMenu[h].color ? 'style="background-color: ' + c.rightMenu[h].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + c.rightMenu[h].icon + '">' + (c.rightMenu[h].text || "") + "</div>");
                            if (c.actions.left) c.swipe = c.actions.right ? c.swipe : "right";
                            if (c.actions.right) c.swipe =
                                c.actions.left ? c.swipe : "left";
                            c.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + e + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + W + "</div>"
                        }
                    });
                    ca.fixedHeader && (d = "mbsc-lv-fixed-header" + (Ua ? " mbsc-lv-fixed-header-ctx mbsc-lv-" + ca.theme + (ca.baseTheme ? " mbsc-lv-" + ca.baseTheme : "") : ""), sa ? sa.attr("class", d) : (sa = f('<div class="' + d + '"></div>'), tb = f(".mbsc-lv-gr-title", Ka), Ua ? Oa.before(sa) : Aa.prepend(sa), Oa.on("scroll touchmove", M)));
                    if (ca.hover) {
                        if (!Da) Aa.on("mouseover.mbsc-lv", ".mbsc-lv-item",
                            function() {
                                if (!va || va[0] != this) {
                                    H();
                                    va = f(this);
                                    if (Bb[va.attr("data-type") || "defaults"].actions) Jb = setTimeout(function() {
                                        if (db) va = null;
                                        else {
                                            sb = true;
                                            $.openActions(va, zb, Da, false)
                                        }
                                    }, Rb)
                                }
                            }).on("mouseleave.mbsc-lv", H);
                        Da = ca.hover.time || 200;
                        Rb = ca.hover.timeout || 200;
                        zb = ca.hover.direction || ca.hover || "right"
                    }
                    Ka.is("[mbsc-enhance]") && (bb = !0, Ka.removeAttr("mbsc-enhance"), Aa.attr("mbsc-enhance", ""));
                    Aa.trigger("mbsc-enhance", [{
                        theme: ca.theme,
                        lang: ca.lang
                    }]);
                    ja("onInit")
                };
            $.destroy = function() {
                ob.append(wa);
                Ua &&
                    sa && sa.remove();
                bb && Ka.attr("mbsc-enhance", "");
                Aa.find(".mbsc-lv-txt,.mbsc-lv-img").removeClass("mbsc-lv-txt mbsc-lv-img");
                Aa.find("ul,ol").removeClass("mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr").find("li").removeClass("mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right").removeAttr("data-ref");
                f(".mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic", Aa).remove();
                Ka.insertAfter(Aa);
                Aa.remove();
                Ha.remove();
                Oa.off("scroll touchmove", M).off("orientationchange resize", x);
                $._destroy()
            };
            var Ub, nc = [],
                Lb = [],
                ic = [],
                Sb = 0;
            $.startActionTrack = function() {
                Sb || (ic = []);
                Sb++
            };
            $.endActionTrack = function() {
                Sb--;
                Sb || Lb.push(ic)
            };
            $.addUndoAction = function(a, b) {
                var c = {
                    action: a,
                    async: b
                };
                Sb ? ic.push(c) : (Lb.push([c]), Lb.length > ca.undoLimit && Lb.shift())
            };
            $.undo = function() {
                function a() {
                    0 > d ? (Ub = !1, b()) : (c = h[d], d--, c.async ? c.action(a) : (c.action(), a()))
                }

                function b() {
                    if (h = nc.shift()) Ub = !0, d = h.length - 1, a()
                }
                var c, d, h;
                Lb.length &&
                    nc.push(Lb.pop());
                Ub || b()
            };
            ca = $.settings;
            ja = $.trigger;
            $.init(l)
        };
        o.ListView.prototype = {
            _class: "listview",
            _hasDef: !0,
            _hasTheme: !0,
            _hasLang: !0,
            _defaults: {
                context: "body",
                actionsWidth: 90,
                sortDelay: 250,
                undoLimit: 10,
                swipe: !0,
                quickSwipe: !0,
                animateIcons: !0,
                animation: !0,
                revert: !0,
                vibrate: !0,
                handleClass: "",
                handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
                leftArrowClass: "mbsc-ic-arrow-left4",
                rightArrowClass: "mbsc-ic-arrow-right4",
                backText: "Back",
                undoText: "Undo",
                stages: []
            }
        };
        a.themes.listview.mobiscroll = {
            leftArrowClass: "mbsc-ic-arrow-left5",
            rightArrowClass: "mbsc-ic-arrow-right5"
        };
        a.presetShort("listview", "ListView")
    })(window, document);
    (function() {
        var i = k,
            e = i.$;
        i.themes.listview.material = {
            leftArrowClass: "mbsc-ic-material-keyboard-arrow-left",
            rightArrowClass: "mbsc-ic-material-keyboard-arrow-right",
            onItemActivate: function(b) {
                i.themes.material.addRipple(e(b.target), b.domEvent)
            },
            onItemDeactivate: function() {
                i.themes.material.removeRipple()
            },
            onSlideStart: function(b) {
                e(".mbsc-ripple", b.target).remove()
            },
            onSortStart: function(b) {
                e(".mbsc-ripple", b.target).remove()
            }
        }
    })();
    k.themes.listview.ios = {
        leftArrowClass: "mbsc-ic-ion-ios7-arrow-back",
        rightArrowClass: "mbsc-ic-ion-ios7-arrow-forward"
    };
    (function(i) {
        var e, b = function() {},
            c = k,
            a = c.$,
            f = c.util,
            d = f.getCoord,
            o = f.testTouch;
        c.classes.Form = function(i, s) {
            function m(b) {
                var c = {},
                    d = b[0],
                    h = b.parent(),
                    g = b.attr("data-password-toggle"),
                    e = b.attr("data-icon-show") || "eye",
                    j = b.attr("data-icon-hide") || "eye-blocked";
                g && (c.right = "password" == d.type ? e : j);
                f.addIcon(b, c);
                g && p.tap(h.find(".mbsc-right-ic"), function() {
                    if (d.type == "text") {
                        d.type = "password";
                        a(this).addClass("mbsc-ic-" + e).removeClass("mbsc-ic-" + j)
                    } else {
                        d.type = "text";
                        a(this).removeClass("mbsc-ic-" + e).addClass("mbsc-ic-" + j)
                    }
                })
            }

            function j() {
                if (!a(this).hasClass("mbsc-textarea-scroll")) {
                    var b = this.offsetHeight + (this.scrollHeight - this.offsetHeight);
                    this.scrollTop = 0;
                    this.style.height = b + "px"
                }
            }

            function g(b) {
                var c, d;
                if (b.offsetHeight && (b.style.height = "", c = b.scrollHeight -
                        b.offsetHeight, c = b.offsetHeight + (0 < c ? c : 0), d = Math.round(c / 24), 10 < d ? (b.scrollTop = c, c = 240 + (c - 24 * d), a(b).addClass("mbsc-textarea-scroll")) : a(b).removeClass("mbsc-textarea-scroll"), c)) b.style.height = c + "px"
            }

            function r() {
                clearTimeout(t);
                t = setTimeout(function() {
                    a("textarea.mbsc-control", D).each(function() {
                        g(this)
                    })
                }, 100)
            }

            function A(a) {
                return !(!a.id || !c.instances[a.id])
            }
            var u, t, v, h = "",
                D = a(i),
                p = this;
            c.classes.Base.call(this, i, s, !0);
            p._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1fce1711cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            p.refresh = function() {
                a("input,select,textarea,progress,button", D).each(function() {
                    function b() {
                        a("input", q).val(-1 != n.selectedIndex ? n.options[n.selectedIndex].text : "")
                    }
                    var h, i, r, E, n = this,
                        s = a(n),
                        q = s.parent();
                    h = s.attr("data-role");
                    var N = s.attr("type") || n.nodeName.toLowerCase();
                    s.hasClass("mbsc-control") || ("button" != N && "submit" != N ? q : s).prepend(p._processItem(a,
                        0.2));
                    if ("false" != s.attr("data-enhance") && k.running) {
                        /(switch|range|segmented|stepper)/.test(h) && (N = h);
                        if (s.hasClass("mbsc-control")) /(switch|range|progress)/.test(N) && A(n) && c.instances[n.id].option({
                            theme: u.theme,
                            onText: u.onText,
                            offText: u.offText,
                            stopProp: u.stopProp
                        });
                        else switch ("button" != N && "submit" != N && "segmented" != N && (q.find("label").addClass("mbsc-label"), q.contents().filter(function() {
                                return 3 == this.nodeType && this.nodeValue && /\S/.test(this.nodeValue)
                            }).each(function() {
                                a('<span class="mbsc-label"></span>').insertAfter(this).append(this)
                            })),
                            s.addClass("mbsc-control"), N) {
                            case "button":
                            case "submit":
                                h = s.attr("data-icon");
                                s.addClass("mbsc-btn");
                                h && (s.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + h + '"></span>'), "" === s.text() && s.addClass("mbsc-btn-icon-only"));
                                break;
                            case "switch":
                                A(n) || (q.addClass("mbsc-control-w"), new c.classes.Switch(n, {
                                    theme: u.theme,
                                    onText: u.onText,
                                    offText: u.offText,
                                    stopProp: u.stopProp
                                }));
                                break;
                            case "checkbox":
                                q.prepend(s).addClass("mbsc-checkbox mbsc-control-w");
                                s.after('<span class="mbsc-checkbox-box"></span>');
                                break;
                            case "range":
                                !q.hasClass("mbsc-slider") && !A(n) && (q.addClass("mbsc-control-w"), new c.classes.Slider(n, {
                                    theme: u.theme,
                                    stopProp: u.stopProp
                                }));
                                break;
                            case "progress":
                                A(n) || (q.addClass("mbsc-control-w"), new c.classes.Progress(n, {
                                    theme: u.theme
                                }));
                                break;
                            case "radio":
                                q.addClass("mbsc-radio mbsc-control-w");
                                s.after('<span class="mbsc-radio-box"><span></span></span>');
                                break;
                            case "select":
                            case "select-one":
                            case "select-multiple":
                                h = s.prev().is("input.mbsc-control") ? s.prev() : a('<input tabindex="-1" type="text" class="mbsc-control mbsc-control-ev" readonly>');
                                m(s);
                                q.addClass("mbsc-input mbsc-select mbsc-control-w");
                                s.after(h);
                                h.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>');
                                break;
                            case "textarea":
                                m(s);
                                q.addClass("mbsc-input mbsc-textarea mbsc-control-w");
                                break;
                            case "segmented":
                                var z, H;
                                s.parent().hasClass("mbsc-segmented-item") || (H = a('<div class="mbsc-segmented"></div>'), q.after(H), a('input[name="' + s.attr("name") + '"]', D).each(function(b, c) {
                                    z = a(c).parent().addClass("mbsc-segmented-item");
                                    a('<span class="mbsc-segmented-content">' +
                                        (a(c).attr("data-icon") ? ' <span class="mbsc-ic mbsc-ic-' + a(c).attr("data-icon") + '"></span> ' : "") + "</span>").append(z.contents()).appendTo(z);
                                    z.prepend(c);
                                    H.append(z)
                                }));
                                break;
                            case "stepper":
                                A(n) || (q.addClass("mbsc-control-w"), new c.classes.Stepper(n, {
                                    form: p
                                }));
                                break;
                            case "hidden":
                                break;
                            default:
                                m(s), q.addClass("mbsc-input mbsc-control-w")
                        }
                        if (!s.hasClass("mbsc-control-ev")) {
                            /select/.test(N) && !s.hasClass("mbsc-comp") && (s.on("change.mbsc-form", b), b());
                            if ("textarea" == N) s.on("keydown.mbsc-form input.mbsc-form",
                                function() {
                                    clearTimeout(t);
                                    t = setTimeout(function() {
                                        g(n)
                                    }, 100)
                                }).on("scroll.mbsc-form", j);
                            s.addClass("mbsc-control-ev").on("touchstart.mbsc-form mousedown.mbsc-form", function(b) {
                                if (o(b, this)) {
                                    r = d(b, "X");
                                    E = d(b, "Y");
                                    e && e.removeClass("mbsc-active");
                                    if (!n.disabled) {
                                        i = true;
                                        e = a(this);
                                        a(this).addClass("mbsc-active");
                                        v("onControlActivate", {
                                            target: this,
                                            domEvent: b
                                        })
                                    }
                                }
                            }).on("touchmove.mbsc-form mousemove.mbsc-form", function(a) {
                                if (i && Math.abs(d(a, "X") - r) > 9 || Math.abs(d(a, "Y") - E) > 9) {
                                    s.removeClass("mbsc-active");
                                    v("onControlDeactivate", {
                                        target: s[0],
                                        domEvent: a
                                    });
                                    i = false
                                }
                            }).on("touchend.mbsc-form touchcancel.mbsc-form mouseleave.mbsc-form mouseup.mbsc-form", function(a) {
                                if (i && a.type == "touchend" && !n.readOnly) {
                                    n.focus();
                                    /(button|submit|checkbox|switch|radio)/.test(N) && a.preventDefault();
                                    if (!/select/.test(N)) {
                                        var b = (a.originalEvent || a).changedTouches[0],
                                            c = document.createEvent("MouseEvents");
                                        c.initMouseEvent("click", true, true, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, false, false, false, false, 0, null);
                                        c.tap =
                                            true;
                                        n.dispatchEvent(c);
                                        f.preventClick()
                                    }
                                }
                                i && setTimeout(function() {
                                    s.removeClass("mbsc-active");
                                    v("onControlDeactivate", {
                                        target: s[0],
                                        domEvent: a
                                    })
                                }, 100);
                                i = false;
                                e = null
                            })
                        }
                    }
                });
                r()
            };
            p.init = function(d) {
                p._init(d);
                c.themes.form[u.theme] || (u.theme = "mobiscroll");
                D.hasClass("mbsc-form") || (D.on("touchstart", b).show(), a(window).on("resize orientationchange", r));
                h && D.removeClass(h);
                h = "mbsc-form mbsc-" + u.theme + (u.baseTheme ? " mbsc-" + u.baseTheme : "") + (u.rtl ? " mbsc-rtl" : " mbsc-ltr");
                D.addClass(h);
                p.refresh();
                p.trigger("onInit")
            };
            p.destroy = function() {
                D.removeClass(h).off("touchstart", b);
                a(window).off("resize orientationchange", r);
                a(".mbsc-control", D).off(".mbsc-form").removeClass("mbsc-control-ev");
                p._destroy();
                a(".mbsc-progress progress", D).mobiscroll("destroy");
                a(".mbsc-slider input", D).mobiscroll("destroy");
                a(".mbsc-stepper input", D).mobiscroll("destroy");
                a(".mbsc-switch input", D).mobiscroll("destroy")
            };
            u = p.settings;
            v = p.trigger;
            p.init(s)
        };
        c.classes.Form.prototype = {
            _hasDef: !0,
            _hasTheme: !0,
            _hasLang: !0,
            _class: "form",
            _defaults: {
                tap: !0,
                stopProp: !0,
                lang: "en"
            }
        };
        c.themes.form.mobiscroll = {};
        c.presetShort("form", "Form");
        c.classes.Stepper = function(b, f) {
            function e(c) {
                32 == c.keyCode && (c.preventDefault(), !J && !b.disabled && (p = a(this).addClass("mbsc-active"), v(c)))
            }

            function j(a) {
                J && (a.preventDefault(), h(!0))
            }

            function g(c) {
                if (o(c, this) && !b.disabled && k.running && (p = a(this).addClass("mbsc-active").trigger("focus"), ea && ea.trigger("onControlActivate", {
                        target: p[0],
                        domEvent: c
                    }), v(c), "mousedown" === c.type)) a(document).on("mousemove", A).on("mouseup", r)
            }

            function r(b) {
                J && (b.preventDefault(), h(!0, b), "mouseup" === b.type && a(document).off("mousemove", A).off("mouseup", r))
            }

            function A(a) {
                J && (N = d(a, "X"), z = d(a, "Y"), n = N - T, w = z - L, (7 < Math.abs(n) || 7 < Math.abs(w)) && h())
            }

            function u() {
                var c;
                b.disabled || (c = parseFloat(a(this).val()), t(isNaN(c) ? X : c))
            }

            function t(a, b, c) {
                la = X;
                b === i && (b = !0);
                c === i && (c = b);
                X = a !== i ? Math.min(x, Math.max(Math.round(a / ga) * ga, M)) : Math.min(x, Math.max(X + (p.hasClass("mbsc-stepper-minus") ? -ga : ga), M));
                C = !0;
                G.removeClass("mbsc-step-disabled");
                b && V.val(X);
                X == M ? Q.addClass("mbsc-step-disabled") : X == x && l.addClass("mbsc-step-disabled");
                X !== la && c && V.trigger("change")
            }

            function v(a) {
                J || (J = !0, C = !1, T = d(a, "X"), L = d(a, "Y"), clearInterval(H), clearTimeout(H), H = setTimeout(function() {
                    t();
                    H = setInterval(function() {
                        t()
                    }, 150)
                }, 300))
            }

            function h(a, b) {
                clearInterval(H);
                clearTimeout(H);
                !C && a && t();
                C = J = !1;
                p.removeClass("mbsc-active");
                ea && setTimeout(function() {
                    ea.trigger("onControlDeactivate", {
                        target: p[0],
                        domEvent: b
                    })
                }, 100)
            }

            function D(a, b) {
                var c = V.attr(a);
                return c === i || "" === c ?
                    b : +c
            }
            var p, l, Q, G, J, C, n, w, q, N, z, H, x, M, ga, U, T, L, X, aa = this,
                V = a(b),
                B, Z, la = X,
                ea = f.form;
            c.classes.Base.call(this, b, f, !0);
            aa._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1fce1711cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            aa.getVal = function() {
                var a = parseFloat(V.val()),
                    a = isNaN(a) ? X : a;
                return Math.min(x, Math.max(Math.round(a / ga) * ga, M))
            };
            aa.setVal = function(a, b, c) {
                a = parseFloat(a);
                t(isNaN(a) ? X : a, b, c)
            };
            aa.init = function(c) {
                Z = (B = V.parent().hasClass("mbsc-stepper")) ? V.closest(".mbsc-stepper-cont") : V.parent();
                aa._init(c);
                U = aa.settings;
                M = c.min === i ? D("min", U.min) : c.min;
                x = c.max === i ? D("max", U.max) : c.max;
                ga = c.step === i ? D("step", U.step) : c.step;
                q = V.attr("data-val") || U.val;
                X = Math.min(x, Math.max(Math.round(+b.value / ga) * ga || 0, M));
                B || Z.addClass("mbsc-stepper-cont").append('<span class="mbsc-segmented mbsc-stepper"></span>').find(".mbsc-stepper").append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (X == M ? "mbsc-step-disabled" : "") + '"  tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' +
                    (X == x ? "mbsc-step-disabled" : "") + '"  tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span> </span></span>').prepend(V);
                Q = a(".mbsc-stepper-minus", Z);
                l = a(".mbsc-stepper-plus", Z);
                B || ("left" == q ? (Z.addClass("mbsc-stepper-val-left"), V.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : "right" == q ? (Z.addClass("mbsc-stepper-val-right"), l.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) :
                    Q.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>'));
                V.val(X).attr("data-role", "stepper").attr("min", M).attr("max", x).attr("step", ga).on("change", u);
                G = a(".mbsc-stepper-control", Z).on("keydown", e).on("keyup", j).on("mousedown touchstart", g).on("touchmove", A).on("touchend touchcancel", r);
                V.addClass("mbsc-stepper-ready mbsc-control");
                V.hasClass("mbsc-control") || ("button" != type && "submit" != type ? Z : V).prepend(aa._processItem(a, 0.2))
            };
            aa.destroy =
                function() {
                    V.removeClass("mbsc-control").off("change", u);
                    G.off("keydown", e).off("keyup", j).off("mousedown touchstart", g).off("touchmove", A).off("touchend touchcancel", r);
                    aa._destroy()
                };
            aa.init(f)
        };
        c.classes.Stepper.prototype = {
            _class: "stepper",
            _defaults: {
                min: 0,
                max: 100,
                step: 1
            }
        };
        c.presetShort("stepper", "Stepper");
        c.classes.Switch = function(b, d) {
            var f, e, g, o = this,
                d = d || {};
            a.extend(d, {
                changeEvent: "click",
                min: 0,
                max: 1,
                step: 1,
                live: !1,
                round: !1,
                handle: !1,
                highlight: !1
            });
            c.classes.Slider.call(this, b, d, !0);
            o._readValue =
                function() {
                    return b.checked ? 1 : 0
                };
            o._fillValue = function(a, b, c) {
                f.prop("checked", !!a);
                c && f.trigger("change")
            };
            o._onTap = function(a) {
                o._setVal(a ? 0 : 1)
            };
            o.__onInit = function() {
                g = o.settings;
                f = a(b);
                e = f.parent();
                e.find(".mbsc-switch-track").length || (e.prepend(f), f.attr("data-role", "switch").after('<span class="mbsc-progress-cont mbsc-switch-track"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-slider-handle-cont"><span class="mbsc-slider-handle mbsc-switch-handle" data-index="0"><span class="mbsc-switch-txt-off">' +
                    g.offText + '</span><span class="mbsc-switch-txt-on">' + g.onText + "</span></span></span></span></span>"), o._$track = e.find(".mbsc-progress-track"))
            };
            o.getVal = function() {
                return b.checked
            };
            o.setVal = function(a, b, c) {
                o._setVal(a ? 1 : 0, b, c)
            };
            o.init(d)
        };
        c.classes.Switch.prototype = {
            _class: "switch",
            _css: "mbsc-switch",
            _hasTheme: !0,
            _hasLang: !0,
            _defaults: {
                stopProp: !0,
                offText: "Off",
                onText: "On"
            }
        };
        c.presetShort("switch", "Switch");
        a(function() {
            a("[mbsc-enhance]").each(function() {
                a(this).mobiscroll().form()
            });
            a(document).on("mbsc-enhance",
                function(b, c) {
                    a(b.target).is("[mbsc-enhance]") ? a(b.target).mobiscroll().form(c) : a("[mbsc-enhance]", b.target).each(function() {
                        a(this).mobiscroll().form(c)
                    })
                });
            a(document).on("mbsc-refresh", function(b) {
                a(b.target).is("[mbsc-enhance]") ? a(b.target).mobiscroll("refresh") : a("[mbsc-enhance]", b.target).each(function() {
                    a(this).mobiscroll("refresh")
                })
            })
        })
    })();
    k.themes.form["android-holo"] = {};
    k.themes.form.wp = {};
    (function() {
        var i = k.$;
        k.themes.form.material = {
            onControlActivate: function(e) {
                var b, c = i(e.target);
                if ("button" == c[0].type || "submit" == c[0].type) b = c;
                "segmented" == c.attr("data-role") && (b = c.next());
                c.hasClass("mbsc-stepper-control") && !c.hasClass("mbsc-step-disabled") && (b = c.find(".mbsc-segmented-content"));
                b && k.themes.material.addRipple(b, e.domEvent)
            },
            onControlDeactivate: function() {
                k.themes.material.removeRipple()
            }
        }
    })();
    k.themes.form.ios = {};
    (function(i) {
        var e = k,
            b = e.$,
            c = e.util.isNumeric,
            a = function() {},
            f = e.classes;
        f.Numpad = function(a, e, E) {
            function s(c) {
                var g, f = (g = h.validate.call(a, {
                    values: p.slice(0),
                    variables: N
                }, n) || []) && g.disabled || [];
                n._isValid = g.invalid ? !1 : !0;
                n._tempValue = h.formatValue.call(a, p.slice(0), N, n);
                v = p.length;
                l = g.length || G;
                if (n._isVisible && k.running) {
                    b(".mbsc-np-ph", A).each(function(a) {
                        b(this).html("ltr" == h.fill ? a >= v ? t : D || p[a] : a >= G - l ? a + v < G ? t : D || p[a + v - G] : "")
                    });
                    b(".mbsc-np-cph", A).each(function() {
                        b(this).html(N[b(this).attr("data-var")] || b(this).attr("data-ph"))
                    });
                    if (v === G)
                        for (g = 0; 9 >= g; g++) f.push(g);
                    b(".mbsc-np-btn", A).removeClass(u);
                    for (g = 0; g < f.length; g++) b('.mbsc-np-btn[data-val="' +
                        f[g] + '"]', A).addClass(u);
                    n._isValid ? b(".mbsc-fr-btn-s .mbsc-fr-btn", A).removeClass(u) : b(".mbsc-fr-btn-s .mbsc-fr-btn", A).addClass(u);
                    n.live && (n._hasValue = c || n._hasValue, m(c, !1, c), c && Q("onSet", {
                        valueText: n._value
                    }))
                }
            }

            function m(a, c, d, h) {
                c && s();
                h || (J = p.slice(0), z = b.extend({}, N), w = q.slice(0), n._value = n._hasValue ? n._tempValue : null);
                a && (n._isInput && C.val(n._hasValue && n._isValid ? n._value : ""), Q("onFill", {
                    valueText: n._hasValue ? n._tempValue : "",
                    change: d
                }), d && (n._preventChange = !0, C.trigger("change")))
            }

            function j(a) {
                var b,
                    c = a || [],
                    d = [];
                q = [];
                N = {};
                for (a = 0; a < c.length; a++) /:/.test(c[a]) ? (b = c[a].split(":"), N[b[0]] = b[1], q.push(b[0])) : (d.push(c[a]), q.push("digit"));
                return d
            }

            function g(a, b) {
                if (!(!v && !b && !h.allowLeadingZero || a.hasClass("mbsc-fr-btn-d") || a.hasClass("mbsc-np-btn-empty")) && v < G && k.running) q.push("digit"), p.push(b), s(!0)
            }

            function r() {
                var a, b, c = q.pop();
                if (v || "digit" !== c) {
                    if ("digit" !== c && N[c]) {
                        delete N[c];
                        b = q.slice(0);
                        q = [];
                        for (a = 0; a < b.length; a++) b[a] !== c && q.push(b[a])
                    } else p.pop();
                    s(!0)
                }
            }
            var A, u, t, v, h, D, p, l, Q, G, J,
                C = b(a),
                n = this,
                w = [],
                q = [],
                N = {},
                z = {},
                H = {
                    48: 0,
                    49: 1,
                    50: 2,
                    51: 3,
                    52: 4,
                    53: 5,
                    54: 6,
                    55: 7,
                    56: 8,
                    57: 9,
                    96: 0,
                    97: 1,
                    98: 2,
                    99: 3,
                    100: 4,
                    101: 5,
                    102: 6,
                    103: 7,
                    104: 8,
                    105: 9
                };
            f.Frame.call(this, a, e, !0);
            n.setVal = n._setVal = function(c, g, f, e) {
                n._hasValue = null !== c && c !== i;
                p = j(b.isArray(c) ? c.slice(0) : h.parseValue.call(a, c, n));
                m(g, !0, f === i ? g : f, e)
            };
            n.getVal = n._getVal = function(a) {
                return n._hasValue || a ? n[a ? "_tempValue" : "_value"] : null
            };
            n.setArrayVal = n.setVal;
            n.getArrayVal = function(a) {
                return a ? p.slice(0) : n._hasValue ? J.slice(0) : null
            };
            n._processItem =
                new Function("$, p", function() {
                    var a = [5, 2],
                        b;
                    a: {
                        b = a[0];
                        var c;
                        for (c = 0; 16 > c; ++c)
                            if (1 == b * c % 16) {
                                b = [c, a[1]];
                                break a
                            }
                        b = void 0
                    }
                    a = b[0];
                    b = b[1];
                    c = "";
                    var d;
                    for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1fce1711cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                        a * b) % 16 + 16) % 16];
                    b = c;
                    c = b.length;
                    a = [];
                    for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                    b = "";
                    c = a.length;
                    for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                    b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                    return b
                }());
            n._readValue = function() {
                var b = C.val() || "";
                "" !== b && (n._hasValue = !0);
                D ? (N = {}, q = [], p = []) : (N = n._hasValue ? z : {}, q = n._hasValue ? w : [], p = n._hasValue && J ? J.slice(0) : j(h.parseValue.call(a, b, n)), m(!1, !0))
            };
            n._fillValue = function() {
                n._hasValue = !0;
                m(!0, !1, !0)
            };
            n._generateContent = function() {
                var a, c, d, g = 1;
                a = "";
                var f;
                f = "" + ('<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' +
                    h.deleteText + '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' + h.deleteIcon + '"></div><div class="mbsc-np-dsp">');
                a = h.template.replace(/d/g, '<span class="mbsc-np-ph">' + t + "</span>").replace(/&#100;/g, "d");
                a = a.replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>');
                f = f + a + '</div></div><div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">';
                for (a = 0; 4 > a; a++) {
                    f += '<div class="mbsc-np-row">';
                    for (c = 0; 3 > c; c++) d = g, 10 == g || 12 == g ? d = "" : 11 == g &&
                        (d = 0), f = "" === d ? 10 == g && h.leftKey ? f + ('<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (h.leftKey.variable ? 'data-var="' + h.leftKey.variable + '"' : "") + ' data-val="' + (h.leftKey.value || "") + '" >' + h.leftKey.text + "</div>") : 12 == g && h.rightKey ? f + ('<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (h.rightKey.variable ? 'data-var="' + h.rightKey.variable + '"' : "") + ' data-val="' + (h.rightKey.value || "") + '" >' + h.rightKey.text + "</div>") : f + '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>' :
                        f + ('<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' + d + '">' + d + n._processItem(b, 0.2) + "</div>"), g++;
                    f += "</div>"
                }
                return f + "</div></div>"
            };
            n._markupReady = function() {
                A = n._markup;
                s()
            };
            n._attachEvents = function(a) {
                a.on("keydown", function(a) {
                    H[a.keyCode] !== i ? g(b('.mbsc-np-btn[data-val="' + H[a.keyCode] + '"]'), H[a.keyCode]) : 8 == a.keyCode && (a.preventDefault(), r())
                });
                n.tap(b(".mbsc-np-btn", a), function() {
                    var a = b(this);
                    if (a.hasClass("mbsc-np-btn-custom")) {
                        var d = a.attr("data-val"),
                            h = a.attr("data-var");
                        if (!a.hasClass("mbsc-fr-btn-d")) {
                            h && (a = h.split(":"), q.push(a[0]), N[a[0]] = a[1]);
                            if (d.length + v <= l)
                                for (a = 0; a < d.length; ++a) q.push("digit"), p.push(c(d[a]) ? +d[a] : d[a]);
                            s(!0)
                        }
                    } else g(a, +a.attr("data-val"))
                });
                n.tap(b(".mbsc-np-del", a), r)
            };
            n._processSettings = function() {
                h = n.settings;
                h.headerText = (h.headerText || "").replace("{value}", "");
                h.cssClass = (h.cssClass || "") + " mbsc-np";
                h.template = h.template.replace(/\\d/, "&#100;");
                t = h.placeholder;
                G = (h.template.match(/d/g) || []).length;
                u = "mbsc-fr-btn-d " + (h.disabledClass ||
                    "");
                D = h.mask;
                Q = n.trigger;
                D && C.is("input") && C.attr("type", "password")
            };
            n._indexOf = function(a, b) {
                var c;
                for (c = 0; c < a.length; ++c)
                    if (a[c].toString() === b.toString()) return c;
                return -1
            };
            E || n.init(e)
        };
        f.Numpad.prototype = {
            _hasDef: !0,
            _hasTheme: !0,
            _hasLang: !0,
            _hasPreset: !0,
            _class: "numpad",
            _defaults: b.extend({}, f.Frame.prototype._defaults, {
                template: "dd.dd",
                placeholder: "0",
                deleteIcon: "backspace",
                allowLeadingZero: !1,
                fill: "rtl",
                deleteText: "Delete",
                decimalSeparator: ".",
                thousandsSeparator: ",",
                validate: a,
                parseValue: a,
                formatValue: function(a, c, f) {
                    var e, i = 1;
                    e = f.settings;
                    var f = e.placeholder,
                        j = e.template,
                        g = a.length,
                        r = j.length,
                        A = "";
                    for (e = 0; e < r; e++) "d" == j[r - e - 1] ? (A = i <= g ? a[g - i] + A : f + A, i++) : A = j[r - e - 1] + A;
                    b.each(c, function(a, b) {
                        A = A.replace("{" + a + "}", b)
                    });
                    return b("<div>" + A + "</div>").text()
                }
            })
        };
        e.themes.numpad = e.themes.frame;
        e.presetShort("numpad", "Numpad", !1)
    })();
    (function() {
        var i = k,
            e = i.$,
            b = {
                min: 0,
                max: 99.99,
                scale: 2,
                prefix: "",
                suffix: "",
                returnAffix: !1
            };
        i.presets.numpad.decimal = function(c) {
            function a(a) {
                var b;
                b = a.slice(0);
                for (a =
                    0; b.length;) a = 10 * a + b.shift();
                for (b = 0; b < o.scale; b++) a /= 10;
                return a
            }

            function f(b) {
                return a(b).toFixed(o.scale).replace(".", o.decimalSeparator).replace(/\B(?=(\d{3})+(?!\d))/g, o.thousandsSeparator)
            }
            var d = e.extend({}, c.settings),
                o = e.extend(c.settings, b, d);
            c.getVal = function(a) {
                a = c._getVal(a);
                return i.util.isNumeric(a) ? +a : a
            };
            return {
                template: o.prefix.replace(/d/g, "\\d") + Array((Math.floor(o.max) + "").length + 1).join("d") + (o.scale ? "." + Array(o.scale + 1).join("d") : "") + o.suffix.replace(/d/g, "\\d"),
                parseValue: function(a) {
                    var b,
                        c;
                    b = a || o.defaultValue;
                    a = [];
                    if (b && (c = (b + "").match(/\d+\.?\d*/g))) {
                        c = (+c[0]).toFixed(o.scale);
                        for (b = 0; b < c.length; b++) "." != c[b] && (+c[b] ? a.push(+c[b]) : a.length && a.push(0))
                    }
                    return a
                },
                formatValue: function(a) {
                    a = f(a);
                    return o.returnAffix ? o.prefix + a + o.suffix : a
                },
                validate: function(b) {
                    var b = b.values,
                        d = f(b),
                        i = a(b),
                        j = [];
                    !b.length && !o.allowLeadingZero && j.push(0);
                    c.isVisible() && e(".mbsc-np-dsp", c._markup).html(o.prefix + d + o.suffix);
                    return {
                        disabled: j,
                        invalid: i > o.max || i < o.min || (o.invalid ? -1 != c._indexOf(o.invalid, i) :
                            !1)
                    }
                }
            }
        }
    })();
    (function() {
        function i(a) {
            for (var b = 0, c = 1, e = 0; a.length;) 3 < b ? c = 3600 : 1 < b && (c = 60), e += a.pop() * c * (b % 2 ? 10 : 1), b++;
            return e
        }
        var e = k,
            b = e.$,
            c = ["h", "m", "s"],
            a = {
                min: 0,
                max: 362439,
                defaultValue: 0,
                hourTextShort: "h",
                minuteTextShort: "m",
                secTextShort: "s"
            };
        e.presets.numpad.timespan = function(f) {
            function d(a) {
                var d, g = "",
                    f = 3600;
                b(c).each(function(b, c) {
                    d = Math.floor(a / f);
                    a -= d * f;
                    f /= 60;
                    if (0 < d || "s" == c && !g) g = g + (g ? " " : "") + d + s[c]
                });
                return g
            }
            var o = b.extend({}, f.settings),
                E = b.extend(f.settings, a, o),
                s = {
                    h: E.hourTextShort.replace(/d/g,
                        "\\d"),
                    m: E.minuteTextShort.replace(/d/g, "\\d"),
                    s: E.secTextShort.replace(/d/g, "\\d")
                },
                o = 'd<span class="mbsc-np-sup mbsc-np-time">' + s.s + "</span>";
            9 < E.max && (o = "d" + o);
            99 < E.max && (o = '<span class="mbsc-np-ts-m">' + (639 < E.max ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + s.m + "</span>" + o);
            6039 < E.max && (o = '<span class="mbsc-np-ts-h">' + (38439 < E.max ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + s.h + "</span>" + o);
            f.setVal = function(a, b, c, o) {
                e.util.isNumeric(a) && (a = d(a));
                return f._setVal(a,
                    b, c, o)
            };
            f.getVal = function(a) {
                return f._hasValue || a ? i(f.getArrayVal(a)) : null
            };
            return {
                template: o,
                parseValue: function(a) {
                    var f, g = a || d(E.defaultValue),
                        e = [];
                    g && b(c).each(function(a, b) {
                        (f = RegExp("(\\d+)" + s[b], "gi").exec(g)) ? (f = +f[1], 9 < f ? (e.push(Math.floor(f / 10)), e.push(f % 10)) : (e.length && e.push(0), (f || e.length) && e.push(f))) : e.length && (e.push(0), e.push(0))
                    });
                    return e
                },
                formatValue: function(a) {
                    return d(i(a))
                },
                validate: function(a) {
                    var a = a.values,
                        b = i(a.slice(0)),
                        c = [];
                    a.length || c.push(0);
                    return {
                        disabled: c,
                        invalid: b >
                            E.max || b < E.min || (E.invalid ? -1 != f._indexOf(E.invalid, +b) : !1)
                    }
                }
            }
        }
    })();
    (function() {
        var i = k,
            e = i.$,
            b = {
                timeFormat: "hh:ii A",
                amText: "am",
                pmText: "pm"
            };
        i.presets.numpad.time = function(c) {
            function a(a, b) {
                var c, d = "";
                for (c = 0; c < a.length; ++c) d += a[c] + (c % 2 == (1 == a.length % 2 ? 0 : 1) && c != a.length - 1 ? ":" : "");
                e.each(b, function(a, b) {
                    d += " " + b
                });
                return d
            }
            var f = e.extend({}, c.settings),
                d = e.extend(c.settings, b, f),
                o = d.timeFormat.split(":"),
                i = d.timeFormat.match(/a/i),
                s = i ? "a" == i[0] ? d.amText : d.amText.toUpperCase() : "",
                m = i ? "a" == i[0] ? d.pmText :
                d.pmText.toUpperCase() : "",
                j = 0,
                g = d.min ? "" + d.min.getHours() : "",
                r = d.max ? "" + d.max.getHours() : "",
                A = d.min ? "" + (10 > d.min.getMinutes() ? "0" + d.min.getMinutes() : d.min.getMinutes()) : "",
                u = d.max ? "" + (10 > d.max.getMinutes() ? "0" + d.max.getMinutes() : d.max.getMinutes()) : "",
                t = d.min ? "" + (10 > d.min.getSeconds() ? "0" + d.min.getSeconds() : d.min.getSeconds()) : "",
                k = d.max ? "" + (10 > d.max.getSeconds() ? "0" + d.max.getSeconds() : d.max.getSeconds()) : "";
            d.min && d.min.setFullYear(2014, 7, 20);
            d.max && d.max.setFullYear(2014, 7, 20);
            return {
                placeholder: "-",
                allowLeadingZero: !0,
                template: (3 == o.length ? "dd:dd:dd" : 2 == o.length ? "dd:dd" : "dd") + (i ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ""),
                leftKey: i ? {
                    text: s,
                    variable: "ampm:" + s,
                    value: "00"
                } : {
                    text: ":00",
                    value: "00"
                },
                rightKey: i ? {
                    text: m,
                    variable: "ampm:" + m,
                    value: "00"
                } : {
                    text: ":30",
                    value: "30"
                },
                parseValue: function(a) {
                    var b, c = a || d.defaultValue,
                        g = [];
                    if (c) {
                        c += "";
                        if (b = c.match(/\d/g))
                            for (a = 0; a < b.length; a++) g.push(+b[a]);
                        i && g.push("ampm:" + (c.match(RegExp(d.pmText, "gi")) ? m : s))
                    }
                    return g
                },
                formatValue: function(b, c) {
                    return a(b,
                        c)
                },
                validate: function(b) {
                    var f = b.values,
                        b = a(f, b.variables),
                        e = 3 <= f.length ? new Date(2014, 7, 20, "" + f[0] + (0 === f.length % 2 ? f[1] : ""), "" + f[0 === f.length % 2 ? 2 : 1] + f[0 === f.length % 2 ? 3 : 2]) : "",
                        l, m, s, J, C, n, w = [];
                    j = l = 2 * o.length;
                    f.length || (i && (w.push(0), w.push(d.leftKey.value)), w.push(d.rightKey.value));
                    if (!i && (2 > l - f.length || 1 != f[0] && (2 < f[0] || 3 < f[1]) && 2 >= l - f.length)) w.push("30"), w.push("00");
                    if ((i ? 1 < f[0] || 2 < f[1] : 1 != f[0] && (2 < f[0] || 3 < f[1])) && f[0]) f.unshift(0), j = l - 1;
                    if (f.length == l)
                        for (l = 0; 9 >= l; ++l) w.push(l);
                    else if (1 == f.length &&
                        i && 1 == f[0] || f.length && 0 === f.length % 2 || !i && 2 == f[0] && 3 < f[1] && 1 == f.length % 2)
                        for (l = 6; 9 >= l; ++l) w.push(l);
                    s = void 0 !== f[1] ? "" + f[0] + f[1] : "";
                    J = +u == +(void 0 !== f[3] ? "" + f[2] + f[3] : 0);
                    if (d.invalid)
                        for (l = 0; l < d.invalid.length; ++l)
                            if (m = d.invalid[l].getHours(), C = d.invalid[l].getMinutes(), n = d.invalid[l].getSeconds(), m == +s)
                                if (2 == o.length && (10 > C ? 0 : +("" + C)[0]) == +f[2]) {
                                    w.push(10 > C ? C : +("" + C)[1]);
                                    break
                                } else if ((10 > n ? 0 : +("" + n)[0]) == +f[4]) {
                        w.push(10 > n ? n : +("" + n)[1]);
                        break
                    }
                    if (d.min || d.max) {
                        m = +g == +s;
                        C = (s = +r == +s) && J;
                        J = m && J;
                        if (0 ===
                            f.length) {
                            for (l = i ? 2 : 19 < g ? g[0] : 3; l <= (1 == g[0] ? 9 : g[0] - 1); ++l) w.push(l);
                            if (10 <= g && (w.push(0), 2 == g[0]))
                                for (l = 3; 9 >= l; ++l) w.push(l);
                            if (r && 10 > r || g && 10 <= g)
                                for (l = r && 10 > r ? +r[0] + 1 : 0; l < (g && 10 <= g ? g[0] : 10); ++l) w.push(l)
                        }
                        if (1 == f.length) {
                            if (0 === f[0])
                                for (l = 0; l < g[0]; ++l) w.push(l);
                            if (g && 0 !== f[0] && (i ? 1 == f[0] : 2 == f[0]))
                                for (l = i ? 3 : 4; 9 >= l; ++l) w.push(l);
                            if (f[0] == g[0])
                                for (l = 0; l < g[1]; ++l) w.push(l);
                            if (f[0] == r[0] && !i)
                                for (l = +r[1] + 1; 9 >= l; ++l) w.push(l)
                        }
                        if (2 == f.length && (m || s))
                            for (l = s ? +u[0] + 1 : 0; l < (m ? +A[0] : 10); ++l) w.push(l);
                        if (3 == f.length &&
                            (s && f[2] == u[0] || m && f[2] == A[0]))
                            for (l = s && f[2] == u[0] ? +u[1] + 1 : 0; l < (m && f[2] == A[0] ? +A[1] : 10); ++l) w.push(l);
                        if (4 == f.length && (J || C))
                            for (l = C ? +k[0] + 1 : 0; l < (J ? +t[0] : 10); ++l) w.push(l);
                        if (5 == f.length && (J && f[4] == t[0] || C && f[4] == k[0]))
                            for (l = C && f[4] == k[0] ? +k[1] + 1 : 0; l < (J && f[4] == t[0] ? +t[1] : 10); ++l) w.push(l)
                    }
                    return {
                        disabled: w,
                        length: j,
                        invalid: (i ? !RegExp("^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9]) (?:" + d.amText + "|" + d.pmText + ")$", "i").test(b) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(b)) || (d.invalid ? -1 !=
                            c._indexOf(d.invalid, e) : !1) || !((d.min ? d.min <= e : 1) && (d.max ? e <= d.max : 1))
                    }
                }
            }
        }
    })();
    (function() {
        var i = k,
            e = i.$,
            b = {
                dateOrder: "mdy",
                dateFormat: "mm/dd/yy",
                delimiter: "/"
            };
        i.presets.numpad.date = function(c) {
            function a(a) {
                return new Date(+("" + a[f] + a[f + 1] + a[f + 2] + a[f + 3]), +("" + a[d] + a[d + 1]) - 1, +("" + a[o] + a[o + 1]))
            }
            var f, d, o, k, s = [];
            k = e.extend({}, c.settings);
            var m = e.extend(c.settings, i.util.datetime.defaults, b, k),
                j = m.dateOrder,
                g = m.min ? "" + (m.getMonth(m.min) + 1) : 0,
                r = m.max ? "" + (m.getMonth(m.max) + 1) : 0,
                A = m.min ? "" + m.getDay(m.min) :
                0,
                u = m.max ? "" + m.getDay(m.max) : 0,
                t = m.min ? "" + m.getYear(m.min) : 0,
                v = m.max ? "" + m.getYear(m.max) : 0,
                j = j.replace(/y+/gi, "yyyy"),
                j = j.replace(/m+/gi, "mm"),
                j = j.replace(/d+/gi, "dd");
            f = j.toUpperCase().indexOf("Y");
            d = j.toUpperCase().indexOf("M");
            o = j.toUpperCase().indexOf("D");
            j = "";
            s.push({
                val: f,
                n: "yyyy"
            }, {
                val: d,
                n: "mm"
            }, {
                val: o,
                n: "dd"
            });
            s.sort(function(a, b) {
                return a.val - b.val
            });
            e.each(s, function(a, b) {
                j += b.n
            });
            f = j.indexOf("y");
            d = j.indexOf("m");
            o = j.indexOf("d");
            j = "";
            for (k = 0; 8 > k; ++k)
                if (j += "d", k + 1 == f || k + 1 == d || k + 1 == o) j +=
                    m.delimiter;
            c.getVal = function(b) {
                return c._hasValue || b ? a(c.getArrayVal(b)) : null
            };
            return {
                placeholder: "-",
                fill: "ltr",
                allowLeadingZero: !0,
                template: j,
                parseValue: function(a) {
                    var b, c = [];
                    b = a || m.defaultValue;
                    a = i.util.datetime.parseDate(m.dateFormat, b, m);
                    if (b)
                        for (b = 0; b < s.length; ++b) c = /m/i.test(s[b].n) ? c.concat(((9 > m.getMonth(a) ? "0" : "") + (m.getMonth(a) + 1)).split("")) : /d/i.test(s[b].n) ? c.concat(((10 > m.getDay(a) ? "0" : "") + m.getDay(a)).split("")) : c.concat((m.getYear(a) + "").split(""));
                    return c
                },
                formatValue: function(b) {
                    return i.util.datetime.formatDate(m.dateFormat,
                        a(b), m)
                },
                validate: function(b) {
                    var b = b.values,
                        e = a(b),
                        i, j, s, k, E = [],
                        C = void 0 !== b[f + 3] ? "" + b[f] + b[f + 1] + b[f + 2] + b[f + 3] : "",
                        n = void 0 !== b[d + 1] ? "" + b[d] + b[d + 1] : "",
                        w = void 0 !== b[o + 1] ? "" + b[o] + b[o + 1] : "",
                        q = "" + m.getMaxDayOfMonth(C || 2012, n - 1 || 0),
                        N = t === C && +g === +n,
                        z = v === C && +r === +n;
                    if (m.invalid)
                        for (i = 0; i < m.invalid.length; ++i) {
                            j = m.getYear(m.invalid[i]);
                            s = m.getMonth(m.invalid[i]);
                            k = m.getDay(m.invalid[i]);
                            if (j == +C && s + 1 == +n && (10 > k ? 0 : +("" + k)[0]) == +b[o]) {
                                E.push(10 > k ? k : +("" + k)[1]);
                                break
                            }
                            if (s + 1 == +n && k == +w && ("" + j).substring(0,
                                    3) == "" + b[f] + b[f + 1] + b[f + 2]) {
                                E.push(("" + j)[3]);
                                break
                            }
                            if (j == +C && k == +w && (10 > s ? 0 : +("" + (s + 1))[0]) == +b[d]) {
                                E.push(10 > s ? s : +("" + (s + 1))[1]);
                                break
                            }
                        }
                    if ("31" == w && (b.length == d || b.length == d + 1)) 1 != b[d] ? E.push(2, 4, 6, 9, 11) : E.push(1);
                    "30" == w && 0 === b[d] && b.length <= d + 1 && E.push(2);
                    if (b.length == d) {
                        for (i = v === C && 10 > +r ? 1 : 2; 9 >= i; ++i) E.push(i);
                        t === C && 10 <= +g && E.push(0)
                    }
                    if (b.length == d + 1) {
                        if (1 == b[d]) {
                            for (i = v === C ? +r[1] + 1 : 3; 9 >= i; ++i) E.push(i);
                            if (t == C)
                                for (i = 0; i < +g[1]; ++i) E.push(i)
                        }
                        if (0 === b[d] && (E.push(0), v === C || t === C))
                            for (i = v === C ?
                                +w > +u ? +r : +r + 1 : 0; i <= (t === C ? +g - 1 : 9); ++i) E.push(i)
                    }
                    if (b.length == o) {
                        for (i = z ? (10 < +u ? +u[0] : 0) + 1 : +q[0] + 1; 9 >= i; ++i) E.push(i);
                        if (N)
                            for (i = 0; i < (10 > +A ? 0 : A[0]); ++i) E.push(i)
                    }
                    if (b.length == o + 1) {
                        if (3 <= b[o] || "02" == n)
                            for (i = +q[1] + 1; 9 >= i; ++i) E.push(i);
                        if (z && +u[0] == b[o])
                            for (i = +u[1] + 1; 9 >= i; ++i) E.push(i);
                        if (N && A[0] == b[o])
                            for (i = 0; i < +A[1]; ++i) E.push(i);
                        if (0 === b[o] && (E.push(0), z || N))
                            for (i = z ? +u + 1 : 1; i <= (N ? +A - 1 : 9); ++i) E.push(i)
                    }
                    if (void 0 !== b[f + 2] && "02" == n && "29" == w)
                        for (j = +("" + b[f] + b[f + 1] + b[f + 2] + 0); j <= +("" + b[f] + b[f + 1] + b[f + 2] + 9); ++j) E.push(!(0 ===
                            j % 4 && 0 !== j % 100 || 0 === j % 400) ? j % 10 : "");
                    if (b.length == f) {
                        if (m.min)
                            for (i = 0; i < +t[0]; ++i) E.push(i);
                        if (m.max)
                            for (i = +v[0] + 1; 9 >= i; ++i) E.push(i);
                        E.push(0)
                    }
                    if (m.min || m.max)
                        for (j = 1; 4 > j; ++j)
                            if (b.length == f + j) {
                                if (b[f + j - 1] == +t[j - 1] && (3 == j ? b[f + j - 2] == +t[j - 2] : 1))
                                    for (i = 0; i < +t[j] + (3 == j && b[d + 1] && +g > +n ? 1 : 0); ++i) E.push(i);
                                if (b[f + j - 1] == +v[j - 1] && (3 == j ? b[f + j - 2] == +v[j - 2] : 1))
                                    for (i = +v[j] + (3 == j && +r < +n ? 0 : 1); 9 >= i; ++i) E.push(i)
                            }
                    return {
                        disabled: E,
                        invalid: !("Invalid Date" != e && (m.min ? m.min <= e : 1) && (m.max ? e <= m.max : 1)) || (m.invalid ? -1 != c._indexOf(m.invalid,
                            e) : !1)
                    }
                }
            }
        }
    })();
    (function(i, e, b) {
        var c = k,
            a = c.$,
            f = a.extend,
            d = c.classes,
            i = c.platform,
            o = c.util,
            E = o.jsPrefix,
            s = o.prefix,
            m = o.getCoord,
            j = o.testTouch,
            g = "wp" == i.name || "android" == i.name || "ios" == i.name && 8 > i.majorVersion;
        c.presetShort("scroller", "Scroller", !1);
        d.Scroller = function(i, A, u) {
            function t(b) {
                var c = a(this).attr("data-index");
                b.stopPropagation();
                "mousedown" === b.type && b.preventDefault();
                if (j(b, this) && !(a.isArray(R.readonly) ? R.readonly[c] : R.readonly))
                    if (T = a(this).addClass("mbsc-sc-btn-a"), pa = m(b, "X"), qa =
                        m(b, "Y"), O = !0, da = !1, setTimeout(function() {
                            C(c, "inc" == T.attr("data-dir") ? 1 : -1)
                        }, 100), "mousedown" === b.type) a(e).on("mousemove", v).on("mouseup", h)
            }

            function v(a) {
                (7 < Math.abs(pa - m(a, "X")) || 7 < Math.abs(qa - m(a, "Y"))) && n(!0)
            }

            function h(b) {
                n();
                b.preventDefault();
                "mouseup" === b.type && a(e).off("mousemove", v).off("mouseup", h)
            }

            function D(b) {
                var c = a(this).attr("data-index"),
                    d, f;
                38 == b.keyCode ? (d = !0, f = -1) : 40 == b.keyCode ? (d = !0, f = 1) : 32 == b.keyCode && (d = !0, J(c));
                d && (b.stopPropagation(), b.preventDefault(), f && !O && (O = !0, da = !1, C(c, f)))
            }

            function p() {
                n()
            }

            function l(a, b) {
                return (a._array ? a._map[b] : a.getIndex(b)) || 0
            }

            function Q(b, c) {
                var d = b.data;
                if (c >= b.min && c <= b.max) return b._array ? b.circular ? a(d).get(c % b._length) : d[c] : a.isFunction(d) ? d(c) : ""
            }

            function G(c) {
                return a.isPlainObject(c) ? c.value !== b ? c.value : c.display : c
            }

            function J(a, c) {
                var d = P[a],
                    f = c || d._$markup.find('.mbsc-sc-itm[data-val="' + Y[a] + '"]'),
                    g = +f.attr("data-index"),
                    g = G(Q(d, g)),
                    h = K._tempSelected[a],
                    e = o.isNumeric(d.multiple) ? d.multiple : Infinity;
                if (d.multiple && !d._disabled[g]) return h[g] !==
                    b ? (f.removeClass(Z).removeAttr("aria-selected"), delete h[g]) : o.objectToArray(h).length < e && (f.addClass(Z).attr("aria-selected", "true"), h[g] = g), !0
            }

            function C(a, b) {
                da || w(a, b);
                O && k.running && (clearInterval(ea), ea = setInterval(function() {
                    w(a, b)
                }, R.delay))
            }

            function n(a) {
                clearInterval(ea);
                da = a;
                O = !1;
                T && T.removeClass("mbsc-sc-btn-a")
            }

            function w(a, b) {
                var c = P[a];
                M(c, a, c._current + b, aa, 1 == b ? 1 : 2)
            }

            function q(c, d, g) {
                var h = c._index - c._batch;
                c.data = c.data || [];
                c.key = c.key !== b ? c.key : d;
                c.label = c.label !== b ? c.label : d;
                c._map = {};
                c._array = a.isArray(c.data);
                c._array && (c._length = c.data.length, a.each(c.data, function(a, b) {
                    c._map[G(b)] = a
                }));
                c.circular = R.circular === b ? c.circular === b ? c._array && c._length > R.rows : c.circular : a.isArray(R.circular) ? R.circular[d] : R.circular;
                c.min = c._array ? c.circular ? -Infinity : 0 : c.min === b ? -Infinity : c.min;
                c.max = c._array ? c.circular ? Infinity : c._length - 1 : c.max === b ? Infinity : c.max;
                c._nr = d;
                c._index = l(c, Y[d]);
                c._disabled = {};
                c._batch = 0;
                c._current = c._index;
                c._first = c._index - X;
                c._last = c._index + X;
                c._offset = c._first;
                g ? (c._offset -= c._margin / S + (c._index - h), c._margin += (c._index - h) * S) : c._margin = 0;
                c._refresh = function(a) {
                    var b = -(c.min - c._offset + (c.multiple && !B ? Math.floor(R.rows / 2) : 0)) * S,
                        d = Math.min(b, -(c.max - c._offset - (c.multiple && !B ? Math.floor(R.rows / 2) : 0)) * S);
                    f(c._scroller.settings, {
                        minScroll: d,
                        maxScroll: b
                    });
                    c._scroller.refresh(a)
                };
                return fa[c.key] = c
            }

            function N(c, d, f, g, h) {
                for (var e, i, j, o, n, q, m = "", r = K._tempSelected[d], l = c._disabled || {}; f <= g; f++) e = i = Q(c, f), e = a.isPlainObject(e) ? e.display : e, o = e === b ? "" : e + K._processItem(a,
                        0.2), j = G(i), e = i && i.cssClass !== b ? i.cssClass : "", n = i && i.label !== b ? i.label : "", i = i && i.invalid, q = j !== b && j == Y[d] && !c.multiple, m += '<div role="option" aria-selected="' + (r[j] ? !0 : !1) + '" class="mbsc-sc-itm ' + (h ? "mbsc-sc-itm-3d " : "") + e + " " + (q ? "mbsc-sc-itm-sel " : "") + (r[j] ? Z : "") + (j === b ? " mbsc-sc-itm-ph" : " mbsc-btn-e") + (i ? " mbsc-sc-itm-inv-h mbsc-btn-d" : "") + (l[j] ? " mbsc-sc-itm-inv mbsc-btn-d" : "") + '" data-index="' + f + '" data-val="' + j + '"' + (n ? ' aria-label="' + n + '"' : "") + (q ? ' aria-selected="true"' : "") + ' style="height:' +
                    S + "px;line-height:" + S + "px;" + (h ? s + "transform:rotateX(" + (c._offset - f) * V % 360 + "deg) translateZ(" + S * R.rows / 2 + "px);" : "") + '">' + (1 < Ia ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(S / Ia) + "px;font-size:" + Math.round(0.8 * (S / Ia)) + 'px;">' : "") + o + (1 < Ia ? "</div>" : "") + "</div>";
                return m
            }

            function z(a) {
                var b = R.headerText;
                return b ? "function" === typeof b ? b.call(i, a) : b.replace(/\{value\}/i, a) : ""
            }

            function H(a, c, d, f) {
                var a = P[a],
                    f = f || a._disabled,
                    g = l(a, c),
                    h = c,
                    e = c,
                    i = 0,
                    j = 0;
                c === b && (c = G(Q(a, g)));
                if (f[c]) {
                    for (c = 0; g -
                        i >= a.min && f[h] && 100 > c;) c++, i++, h = G(Q(a, g - i));
                    for (c = 0; g + j < a.max && f[e] && 100 > c;) c++, j++, e = G(Q(a, g + j));
                    c = (j < i && j && 2 !== d || !i || 0 > g - i || 1 == d) && !f[e] ? e : h
                }
                return c
            }

            function x(c, d, f, g, h) {
                var e, j, o, n, q = K._isVisible;
                ia = !0;
                n = R.validate.call(i, {
                    values: Y.slice(0),
                    index: d,
                    direction: f
                }, K) || {};
                ia = !1;
                n.valid && (K._tempWheelArray = Y = n.valid.slice(0));
                I("onValidated");
                a.each(P, function(g, i) {
                    q && i._$markup.find(".mbsc-sc-itm-inv").removeClass("mbsc-sc-itm-inv mbsc-btn-d");
                    i._disabled = {};
                    n.disabled && n.disabled[g] && a.each(n.disabled[g],
                        function(a, b) {
                            i._disabled[b] = true;
                            q && i._$markup.find('.mbsc-sc-itm[data-val="' + b + '"]').addClass("mbsc-sc-itm-inv mbsc-btn-d")
                        });
                    Y[g] = i.multiple ? Y[g] : H(g, Y[g], f);
                    if (q) {
                        (!i.multiple || d === b) && i._$markup.find(".mbsc-sc-itm-sel").removeClass(Z).removeAttr("aria-selected");
                        if (i.multiple) {
                            if (d === b)
                                for (var m in K._tempSelected[g]) i._$markup.find('.mbsc-sc-itm[data-val="' + m + '"]').addClass(Z).attr("aria-selected", "true")
                        } else i._$markup.find('.mbsc-sc-itm[data-val="' + Y[g] + '"]').addClass("mbsc-sc-itm-sel").attr("aria-selected",
                            "true");
                        j = l(i, Y[g]);
                        e = j - i._index + i._batch;
                        if (Math.abs(e) > 2 * X + 1) {
                            o = e + (2 * X + 1) * (e > 0 ? -1 : 1);
                            i._offset = i._offset + o;
                            i._margin = i._margin - o * S;
                            i._refresh()
                        }
                        i._index = j + i._batch;
                        i._scroller.scroll(-(j - i._offset + i._batch) * S, d === g || d === b ? c : aa, h)
                    }
                });
                K._tempValue = R.formatValue(Y, K);
                q && K._header.html(z(K._tempValue));
                K.live && (K._hasValue = g || K._hasValue, ga(g, g, 0, !0), g && I("onSet", {
                    valueText: K._value
                }));
                g && I("onChange", {
                    valueText: K._tempValue
                })
            }

            function M(a, c, d, f, g, h) {
                var e = G(Q(a, d));
                e !== b && (Y[c] = e, a._batch = a._array ?
                    Math.floor(d / a._length) * a._length : 0, setTimeout(function() {
                        x(f, c, g, !0, h)
                    }, 10))
            }

            function ga(a, b, c, d, g) {
                d || x(c);
                g || (K._wheelArray = Y.slice(0), K._value = K._hasValue ? K._tempValue : null, K._selected = f(!0, {}, K._tempSelected));
                a && (K._isInput && ka.val(K._hasValue ? K._tempValue : ""), I("onFill", {
                    valueText: K._hasValue ? K._tempValue : "",
                    change: b
                }), b && (K._preventChange = !0, ka.trigger("change")))
            }
            var U, T, L, X = 40,
                aa = 1E3,
                V, B, Z, la, ea, O, da, pa, qa, Y, S, Ba, ia, R, I, Ia, P, fa, K = this,
                ka = a(i);
            d.Frame.call(this, i, A, !0);
            K.setVal = K._setVal =
                function(c, d, f, g, h) {
                    K._hasValue = null !== c && c !== b;
                    K._tempWheelArray = Y = a.isArray(c) ? c.slice(0) : R.parseValue.call(i, c, K) || [];
                    ga(d, f === b ? d : f, h, !1, g)
                };
            K.getVal = K._getVal = function(a) {
                a = K._hasValue || a ? K[a ? "_tempValue" : "_value"] : null;
                return o.isNumeric(a) ? +a : a
            };
            K.setArrayVal = K.setVal;
            K.getArrayVal = function(a) {
                return a ? K._tempWheelArray : K._wheelArray
            };
            K.changeWheel = function(c, d, g) {
                var h, e;
                a.each(c, function(a, b) {
                    e = fa[a];
                    h = e._nr;
                    e && (f(e, b), q(e, h, !0), K._isVisible && (B && e._$3d.html(N(e, h, e._first + X - L + 1, e._last -
                        X + L, !0)), e._$scroller.html(N(e, h, e._first, e._last)).css("margin-top", e._margin + "px"), e._refresh(ia)))
                });
                K._isVisible && !ia && K.position();
                ia || x(d, b, b, g)
            };
            K.getValidValue = H;
            K._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1fce1711cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            K._generateContent = function() {
                var c, d = "",
                    g = B ? s + "transform: translateZ(" + (S * R.rows / 2 + 3) + "px);" : "",
                    h = '<div class="mbsc-sc-whl-l" style="' + g + "height:" + S + "px;margin-top:-" + (S / 2 + (R.selectedLineBorder || 0)) + 'px;"></div>',
                    e = 0;
                a.each(R.wheels, function(i, j) {
                    d += '<div class="mbsc-w-p mbsc-sc-whl-gr-c' + (R.showLabel ? " mbsc-sc-lbl-v" : "") + '">' + h + '<div class="mbsc-sc-whl-gr' +
                        (B ? " mbsc-sc-whl-gr-3d" : "") + (la ? " mbsc-sc-cp" : "") + '">';
                    a.each(j, function(a, i) {
                        K._tempSelected[e] = f({}, K._selected[e]);
                        P[e] = q(i, e);
                        c = i.label !== b ? i.label : a;
                        d += '<div class="mbsc-sc-whl-w ' + (i.cssClass || "") + (i.multiple ? " mbsc-sc-whl-multi" : "") + '" style="' + (R.width ? "width:" + (R.width[e] || R.width) + "px;" : (R.minWidth ? "min-width:" + (R.minWidth[e] || R.minWidth) + "px;" : "") + (R.maxWidth ? "max-width:" + (R.maxWidth[e] || R.maxWidth) + "px;" : "")) + '"><div class="mbsc-sc-whl-o" style="' + g + '"></div>' + h + '<div tabindex="0" aria-live="off" aria-label="' +
                            c + '"' + (i.multiple ? ' aria-multiselectable="true"' : "") + ' role="listbox" data-index="' + e + '" class="mbsc-sc-whl" style="height:' + R.rows * S * (B ? 1.1 : 1) + 'px;">' + (la ? '<div data-index="' + e + '" data-dir="inc" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (R.btnPlusClass || "") + '" style="height:' + S + "px;line-height:" + S + 'px;"></div><div data-index="' + e + '" data-dir="dec" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (R.btnMinusClass || "") + '" style="height:' + S + "px;line-height:" + S + 'px;"></div>' : "") + '<div class="mbsc-sc-lbl">' + c + '</div><div class="mbsc-sc-whl-c" style="height:' +
                            Ba + "px;margin-top:-" + (Ba / 2 + 1) + "px;" + g + '"><div class="mbsc-sc-whl-sc" style="top:' + (Ba - S) / 2 + 'px;">';
                        d += N(i, e, i._first, i._last) + "</div></div>";
                        B && (d += '<div class="mbsc-sc-whl-3d" style="height:' + S + "px;margin-top:-" + S / 2 + 'px;">', d += N(i, e, i._first + X - L + 1, i._last - X + L, !0), d += "</div>");
                        d += "</div></div>";
                        e++
                    });
                    d += "</div></div>"
                });
                return d
            };
            K._attachEvents = function(b) {
                a(".mbsc-sc-btn", b).on("touchstart mousedown", t).on("touchmove", v).on("touchend touchcancel", h);
                a(".mbsc-sc-whl", b).on("keydown", D).on("keyup",
                    p)
            };
            K._detachEvents = function(b) {
                a(".mbsc-sc-whl", b).mobiscroll("destroy")
            };
            K._markupReady = function(b) {
                U = b;
                a(".mbsc-sc-whl", U).each(function(b) {
                    var d, f = a(this),
                        g = P[b],
                        e = -(g.min - g._offset + (g.multiple && !B ? Math.floor(R.rows / 2) : 0)) * S,
                        h = Math.min(e, -(g.max - g._offset - (g.multiple && !B ? Math.floor(R.rows / 2) : 0)) * S);
                    g._$markup = f;
                    g._$scroller = a(".mbsc-sc-whl-sc", this);
                    g._$3d = a(".mbsc-sc-whl-3d", this);
                    g._scroller = new c.classes.ScrollView(this, {
                        mousewheel: R.mousewheel,
                        moveElement: g._$scroller,
                        initialPos: (g._first -
                            g._index) * S,
                        contSize: 0,
                        snap: S,
                        minScroll: h,
                        maxScroll: e,
                        maxSnapScroll: X,
                        prevDef: !0,
                        stopProp: !0,
                        timeUnit: 3,
                        easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                        sync: function(a, b, c) {
                            B && (g._$3d[0].style[E + "Transition"] = b ? s + "transform " + Math.round(b) + "ms " + c : "", g._$3d[0].style[E + "Transform"] = "rotateX(" + -a / S * V + "deg)")
                        },
                        onStart: function(c, d) {
                            d.settings.readonly = a.isArray(R.readonly) ? R.readonly[b] : R.readonly
                        },
                        onGestureStart: function() {
                            f.addClass("mbsc-sc-whl-a mbsc-sc-whl-anim");
                            I("onWheelGestureStart", {
                                index: b
                            })
                        },
                        onGestureEnd: function(a) {
                            var c = 90 == a.direction ? 1 : 2,
                                f = a.duration;
                            d = Math.round(-a.destinationY / S) + g._offset;
                            M(g, b, d, f, c)
                        },
                        onAnimationStart: function() {
                            f.addClass("mbsc-sc-whl-anim")
                        },
                        onAnimationEnd: function() {
                            f.removeClass("mbsc-sc-whl-a mbsc-sc-whl-anim");
                            I("onWheelAnimationEnd", {
                                index: b
                            });
                            g._$3d.find(".mbsc-sc-itm-del").remove()
                        },
                        onMove: function(c) {
                            var c = Math.round(-c.posY / S) + g._offset,
                                d = c - g._current,
                                f = g._first,
                                e = g._last,
                                h = f + X - L + 1,
                                i = e - X + L;
                            d && (g._first += d, g._last += d, g._current = c, 0 < d ? (g._$scroller.append(N(g,
                                    b, Math.max(e + 1, f + d), e + d)), a(".mbsc-sc-itm", g._$scroller).slice(0, Math.min(d, e - f + 1)).remove(), B && (g._$3d.append(N(g, b, Math.max(i + 1, h + d), i + d, !0)), a(".mbsc-sc-itm", g._$3d).slice(0, Math.min(d, i - h + 1)).attr("class", "mbsc-sc-itm-del"))) : 0 > d && (g._$scroller.prepend(N(g, b, f + d, Math.min(f - 1, e + d))), a(".mbsc-sc-itm", g._$scroller).slice(Math.max(d, f - e - 1)).remove(), B && (g._$3d.prepend(N(g, b, h + d, Math.min(h - 1, i + d), !0)), a(".mbsc-sc-itm", g._$3d).slice(Math.max(d, h - i - 1)).attr("class", "mbsc-sc-itm-del"))), g._margin += d *
                                S, g._$scroller.css("margin-top", g._margin + "px"))
                        },
                        onBtnTap: function(c) {
                            var c = a(c.target),
                                d = +c.attr("data-index");
                            J(b, c) && (d = g._current);
                            !1 !== I("onItemTap", {
                                target: c[0],
                                selected: c.hasClass("mbsc-itm-sel")
                            }) && (M(g, b, d, aa, !0, !0), K.live && !g.multiple && (!0 === R.setOnTap || R.setOnTap[b]) && setTimeout(function() {
                                K.select()
                            }, 200))
                        }
                    })
                });
                x()
            };
            K._fillValue = function() {
                K._hasValue = !0;
                ga(!0, !0, 0, !0)
            };
            K._clearValue = function() {
                a(".mbsc-sc-whl-multi .mbsc-sc-itm-sel", U).removeClass(Z).removeAttr("aria-selected")
            };
            K._readValue =
                function() {
                    var b = ka.val() || "",
                        c = 0;
                    "" !== b && (K._hasValue = !0);
                    K._tempWheelArray = Y = K._hasValue && K._wheelArray ? K._wheelArray.slice(0) : R.parseValue.call(i, b, K) || [];
                    K._tempSelected = f(!0, {}, K._selected);
                    a.each(R.wheels, function(b, d) {
                        a.each(d, function(a, b) {
                            P[c] = q(b, c);
                            c++
                        })
                    });
                    ga();
                    I("onRead")
                };
            K._processSettings = function() {
                R = K.settings;
                R.cssClass = (R.cssClass || "") + " mbsc-sc";
                I = K.trigger;
                la = R.showScrollArrows;
                B = R.scroll3d && !g && !la;
                S = R.height;
                Ba = B ? 2 * Math.round((S - 0.03 * (S * R.rows / 2 + 3)) / 2) : S;
                Ia = R.multiline;
                Z = "mbsc-sc-itm-sel mbsc-ic mbsc-ic-" +
                    R.checkIcon;
                P = [];
                fa = {};
                L = Math.round(1.8 * R.rows);
                V = 360 / (2 * L);
                K._isLiquid = "liquid" === (R.layout || (/top|bottom/.test(R.display) && 1 == R.wheels.length ? "liquid" : ""));
                1 < Ia && (R.cssClass = (R.cssClass || "") + " dw-ml");
                la && (R.rows = Math.max(3, R.rows))
            };
            K._getItemValue = G;
            K._tempSelected = {};
            K._selected = {};
            u || K.init(A)
        };
        d.Scroller.prototype = {
            _hasDef: !0,
            _hasTheme: !0,
            _hasLang: !0,
            _hasPreset: !0,
            _class: "scroller",
            _defaults: f({}, d.Frame.prototype._defaults, {
                minWidth: 80,
                height: 40,
                rows: 3,
                multiline: 1,
                delay: 300,
                readonly: !1,
                showLabel: !0,
                setOnTap: !1,
                wheels: [],
                preset: "",
                speedUnit: 0.0012,
                timeUnit: 0.08,
                validate: function() {},
                formatValue: function(a) {
                    return a.join(" ")
                },
                parseValue: function(c, d) {
                    var g = [],
                        f = [],
                        e = 0,
                        h, i;
                    null !== c && c !== b && (g = (c + "").split(" "));
                    a.each(d.settings.wheels, function(b, c) {
                        a.each(c, function(b, c) {
                            i = c.data;
                            h = d._getItemValue(i[0]);
                            a.each(i, function(a, b) {
                                if (g[e] == d._getItemValue(b)) return h = d._getItemValue(b), !1
                            });
                            f.push(h);
                            e++
                        })
                    });
                    return f
                }
            })
        };
        c.themes.scroller = c.themes.frame
    })(window, document);
    (function() {
        function i(b,
            a, f, d, e, i, s) {
            b = new Date(b, a, f, d || 0, e || 0, i || 0, s || 0);
            23 == b.getHours() && 0 === (d || 0) && b.setHours(b.getHours() + 2);
            return b
        }
        var e = k,
            b = e.$;
        e.util.datetime = {
            defaults: {
                shortYearCutoff: "+10",
                monthNames: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                dayNamesMin: "S,M,T,W,T,F,S".split(","),
                amText: "am",
                pmText: "pm",
                getYear: function(b) {
                    return b.getFullYear()
                },
                getMonth: function(b) {
                    return b.getMonth()
                },
                getDay: function(b) {
                    return b.getDate()
                },
                getDate: i,
                getMaxDayOfMonth: function(b, a) {
                    return 32 - (new Date(b, a, 32, 12)).getDate()
                },
                getWeekNumber: function(b) {
                    b = new Date(b);
                    b.setHours(0, 0, 0);
                    b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                    var a = new Date(b.getFullYear(), 0, 1);
                    return Math.ceil(((b - a) / 864E5 + 1) / 7)
                }
            },
            adjustedDate: i,
            formatDate: function(c, a, f) {
                if (!a) return null;
                var f = b.extend({}, e.util.datetime.defaults, f),
                    d = function(a) {
                        for (var b = 0; s + 1 < c.length && c.charAt(s + 1) == a;) b++, s++;
                        return b
                    },
                    i = function(a, b, c) {
                        b = "" + b;
                        if (d(a))
                            for (; b.length < c;) b = "0" + b;
                        return b
                    },
                    k = function(a, b, c, g) {
                        return d(a) ? g[b] : c[b]
                    },
                    s, m, j = "",
                    g = !1;
                for (s = 0; s < c.length; s++)
                    if (g) "'" == c.charAt(s) && !d("'") ? g = !1 : j += c.charAt(s);
                    else switch (c.charAt(s)) {
                        case "d":
                            j += i("d", f.getDay(a), 2);
                            break;
                        case "D":
                            j += k("D", a.getDay(), f.dayNamesShort, f.dayNames);
                            break;
                        case "o":
                            j += i("o", (a.getTime() - (new Date(a.getFullYear(),
                                0, 0)).getTime()) / 864E5, 3);
                            break;
                        case "m":
                            j += i("m", f.getMonth(a) + 1, 2);
                            break;
                        case "M":
                            j += k("M", f.getMonth(a), f.monthNamesShort, f.monthNames);
                            break;
                        case "y":
                            m = f.getYear(a);
                            j += d("y") ? m : (10 > m % 100 ? "0" : "") + m % 100;
                            break;
                        case "h":
                            m = a.getHours();
                            j += i("h", 12 < m ? m - 12 : 0 === m ? 12 : m, 2);
                            break;
                        case "H":
                            j += i("H", a.getHours(), 2);
                            break;
                        case "i":
                            j += i("i", a.getMinutes(), 2);
                            break;
                        case "s":
                            j += i("s", a.getSeconds(), 2);
                            break;
                        case "a":
                            j += 11 < a.getHours() ? f.pmText : f.amText;
                            break;
                        case "A":
                            j += 11 < a.getHours() ? f.pmText.toUpperCase() :
                                f.amText.toUpperCase();
                            break;
                        case "'":
                            d("'") ? j += "'" : g = !0;
                            break;
                        default:
                            j += c.charAt(s)
                    }
                    return j
            },
            parseDate: function(c, a, f) {
                var f = b.extend({}, e.util.datetime.defaults, f),
                    d = f.defaultValue && f.defaultValue.getTime ? f.defaultValue : new Date;
                if (!c || !a) return d;
                if (a.getTime) return a;
                var a = "object" == typeof a ? a.toString() : a + "",
                    i = f.shortYearCutoff,
                    k = f.getYear(d),
                    s = f.getMonth(d) + 1,
                    m = f.getDay(d),
                    j = -1,
                    g = d.getHours(),
                    r = d.getMinutes(),
                    A = 0,
                    u = -1,
                    t = !1,
                    v = function(a) {
                        (a = l + 1 < c.length && c.charAt(l + 1) == a) && l++;
                        return a
                    },
                    h =
                    function(b) {
                        v(b);
                        b = a.substr(p).match(RegExp("^\\d{1," + ("@" == b ? 14 : "!" == b ? 20 : "y" == b ? 4 : "o" == b ? 3 : 2) + "}"));
                        if (!b) return 0;
                        p += b[0].length;
                        return parseInt(b[0], 10)
                    },
                    D = function(b, c, d) {
                        b = v(b) ? d : c;
                        for (c = 0; c < b.length; c++)
                            if (a.substr(p, b[c].length).toLowerCase() == b[c].toLowerCase()) return p += b[c].length, c + 1;
                        return 0
                    },
                    p = 0,
                    l;
                for (l = 0; l < c.length; l++)
                    if (t) "'" == c.charAt(l) && !v("'") ? t = !1 : p++;
                    else switch (c.charAt(l)) {
                        case "d":
                            m = h("d");
                            break;
                        case "D":
                            D("D", f.dayNamesShort, f.dayNames);
                            break;
                        case "o":
                            j = h("o");
                            break;
                        case "m":
                            s =
                                h("m");
                            break;
                        case "M":
                            s = D("M", f.monthNamesShort, f.monthNames);
                            break;
                        case "y":
                            k = h("y");
                            break;
                        case "H":
                            g = h("H");
                            break;
                        case "h":
                            g = h("h");
                            break;
                        case "i":
                            r = h("i");
                            break;
                        case "s":
                            A = h("s");
                            break;
                        case "a":
                            u = D("a", [f.amText, f.pmText], [f.amText, f.pmText]) - 1;
                            break;
                        case "A":
                            u = D("A", [f.amText, f.pmText], [f.amText, f.pmText]) - 1;
                            break;
                        case "'":
                            v("'") ? p++ : t = !0;
                            break;
                        default:
                            p++
                    }
                    100 > k && (k += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (k <= ("string" != typeof i ? i : (new Date).getFullYear() % 100 + parseInt(i, 10)) ? 0 :
                    -100));
                if (-1 < j) {
                    s = 1;
                    m = j;
                    do {
                        i = 32 - (new Date(k, s - 1, 32, 12)).getDate();
                        if (m <= i) break;
                        s++;
                        m -= i
                    } while (1)
                }
                g = f.getDate(k, s - 1, m, -1 == u ? g : u && 12 > g ? g + 12 : !u && 12 == g ? 0 : g, r, A);
                return f.getYear(g) != k || f.getMonth(g) + 1 != s || f.getDay(g) != m ? d : g
            }
        }
    })();
    (function(i, e, b) {
        var c = k,
            a = c.$,
            f = c.presets.scroller,
            d = c.util,
            o = d.datetime.adjustedDate,
            E = d.jsPrefix,
            s = d.testTouch,
            m = d.getCoord,
            j = {
                controls: ["calendar"],
                firstDay: 0,
                weekDays: "short",
                maxMonthWidth: 170,
                months: 1,
                preMonths: 1,
                highlight: !0,
                outerMonthChange: !0,
                quickNav: !0,
                yearChange: !0,
                todayClass: "mbsc-cal-today",
                btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6",
                btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6",
                dateText: "Date",
                timeText: "Time",
                calendarText: "Calendar",
                todayText: "Today",
                prevMonthText: "Previous Month",
                nextMonthText: "Next Month",
                prevYearText: "Previous Year",
                nextYearText: "Next Year"
            };
        f.calbase = function(g) {
            function i(b) {
                var c;
                $a = a(this);
                Eb = !1;
                "keydown" != b.type ? (kb = m(b, "X"), Ob = m(b, "Y"), c = s(b, this)) : c = 32 === b.keyCode;
                if (!Ya && c && !$a.hasClass("mbsc-fr-btn-d") && (Ya = !0, setTimeout(t,
                        100), "mousedown" == b.type)) a(e).on("mousemove", A).on("mouseup", u)
            }

            function A(a) {
                if (7 < Math.abs(kb - m(a, "X")) || 7 < Math.abs(Ob - m(a, "Y"))) Ya = !1, $a.removeClass("mbsc-fr-btn-a")
            }

            function u(b) {
                "touchend" == b.type && b.preventDefault();
                $a && !Eb && t();
                Ya = !1;
                "mouseup" == b.type && a(e).off("mousemove", A).off("mouseup", u)
            }

            function t() {
                Eb = !0;
                $a.hasClass("mbsc-cal-prev-m") ? M() : $a.hasClass("mbsc-cal-next-m") ? x() : $a.hasClass("mbsc-cal-prev-y") ? U($a) : $a.hasClass("mbsc-cal-next-y") && ga($a)
            }

            function v(b, c, d) {
                var g, f, e, i, h = {},
                    j = ta + nb;
                b && a.each(b, function(a, b) {
                    g = b.d || b.start || b;
                    f = g + "";
                    if (b.start && b.end)
                        for (i = new Date(b.start); i <= b.end;) e = o(i.getFullYear(), i.getMonth(), i.getDate()), h[e] = h[e] || [], h[e].push(b), i.setDate(i.getDate() + 1);
                    else if (g.getTime) e = o(g.getFullYear(), g.getMonth(), g.getDate()), h[e] = h[e] || [], h[e].push(b);
                    else if (f.match(/w/i)) {
                        var n = +f.replace("w", ""),
                            q = 0,
                            m = y.getDate(c, d - ta - sa, 1).getDay();
                        1 < y.firstDay - m + 1 && (q = 7);
                        for (Z = 0; Z < 5 * Na; Z++) e = y.getDate(c, d - ta - sa, 7 * Z - q - m + 1 + n), h[e] = h[e] || [], h[e].push(b)
                    } else if (f =
                        f.split("/"), f[1]) 11 <= d + j && (e = y.getDate(c + 1, f[0] - 1, f[1]), h[e] = h[e] || [], h[e].push(b)), 1 >= d - j && (e = y.getDate(c - 1, f[0] - 1, f[1]), h[e] = h[e] || [], h[e].push(b)), e = y.getDate(c, f[0] - 1, f[1]), h[e] = h[e] || [], h[e].push(b);
                    else
                        for (Z = 0; Z < Na; Z++) e = y.getDate(c, d - ta - sa + Z, f[0]), y.getDay(e) == f[0] && (h[e] = h[e] || [], h[e].push(b))
                });
                return h
            }

            function h(a, b) {
                La = v(y.invalid, a, b);
                Mb = v(y.valid, a, b);
                g.onGenMonth(a, b)
            }

            function D(a, b, c, d, g, f, e) {
                var h = '<div class="mbsc-cal-h mbsc-cal-sc-c mbsc-cal-' + a + "-c " + (y.calendarClass || "") + '"><div class="mbsc-cal-sc"><div class="mbsc-cal-sc-p"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">';
                for (B = 1; B <= b; B++) h = 12 >= B || B > c ? h + '<div class="mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-sc-empty"><div class="mbsc-cal-sc-cell-i">&nbsp;</div></div>' : h + ('<div tabindex="0" role="button"' + (f ? ' aria-label="' + f[B - 13] + '"' : "") + ' class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-' + a + '-s" data-val=' + (d + B - 13) + '><div class="mbsc-cal-sc-cell-i mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-cell">' + (e ? e[B - 13] : d + B - 13 + g) + "</div></div></div>"), B < b && (0 === B % 12 ? h += '</div></div></div><div class="mbsc-cal-sc-p" style="' +
                    (Ma ? "top" : za ? "right" : "left") + ":" + 100 * Math.round(B / 12) + '%"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">' : 0 === B % 3 && (h += '</div><div class="mbsc-cal-sc-row">'));
                return h + "</div></div></div></div></div>"
            }

            function p(c, d) {
                var f, e, h, i, j, n, q, m, s, r, l, p, C, L, k = 1,
                    B = 0;
                f = y.getDate(c, d, 1);
                var V = y.getYear(f),
                    F = y.getMonth(f),
                    w = null === y.defaultValue && !g._hasValue ? null : g.getDate(!0),
                    u = y.getDate(V, F, 1).getDay(),
                    t = '<div class="mbsc-cal-table">',
                    z = '<div class="mbsc-cal-week-nr-c">';
                1 < y.firstDay - u + 1 && (B = 7);
                for (L = 0; 42 > L; L++) C = L + y.firstDay - B, f = y.getDate(V, F, C - u + 1), e = f.getFullYear(), h = f.getMonth(), i = f.getDate(), j = y.getMonth(f), n = y.getDay(f), p = y.getMaxDayOfMonth(e, h), q = e + "-" + h + "-" + i, h = a.extend({
                    valid: f < o(ib.getFullYear(), ib.getMonth(), ib.getDate()) || f > ob ? !1 : La[f] === b || Mb[f] !== b,
                    selected: w && w.getFullYear() === e && w.getMonth() === h && w.getDate() === i
                }, g.getDayProps(f, w)), m = h.valid, s = h.selected, e = h.cssClass, r = (new Date(f)).setHours(12, 0, 0, 0) === (new Date).setHours(12, 0, 0, 0), l = j !== F, Rb[q] = h, 0 === L % 7 && (t += (L ? "</div>" :
                    "") + '<div class="mbsc-cal-row' + (y.highlight && w && 0 <= w - f && 6048E5 > w - f ? " mbsc-cal-week-hl" : "") + '">'), Ja && 1 == f.getDay() && ("month" == Ja && l && 1 < k ? k = 1 == i ? 1 : 2 : "year" == Ja && (k = y.getWeekNumber(f)), z += '<div class="mbsc-cal-week-nr"><div class="mbsc-cal-week-nr-i">' + k + "</div></div>", k++), t += '<div role="button" tabindex="-1" aria-label="' + (r ? y.todayText + ", " : "") + y.dayNames[f.getDay()] + ", " + y.monthNames[j] + " " + n + " " + (h.ariaLabel ? ", " + h.ariaLabel : "") + '"' + (l && !xb ? ' aria-hidden="true"' : "") + (s ? ' aria-selected="true"' :
                    "") + (m ? "" : ' aria-disabled="true"') + ' data-day="' + C % 7 + '" data-full="' + q + '"class="mbsc-cal-day ' + (y.dayClass || "") + (s ? " mbsc-cal-day-sel" : "") + (r ? " " + y.todayClass : "") + (e ? " " + e : "") + (1 == n ? " mbsc-cal-day-first" : "") + (n == p ? " mbsc-cal-day-last" : "") + (l ? " mbsc-cal-day-diff" : "") + (m ? " mbsc-cal-day-v mbsc-fr-btn-e mbsc-fr-btn-nhl" : " mbsc-cal-day-inv") + '"><div class="mbsc-cal-day-i ' + (s ? db : "") + " " + (y.innerDayClass || "") + '"><div class="mbsc-cal-day-fg">' + n + g._processItem(a, 0.06) + "</div>" + (h.markup || "") + '<div class="mbsc-cal-day-frame"></div></div></div>';
                return t + ("</div></div>" + z + "</div>")
            }

            function l(b, c, d) {
                var f = y.getDate(b, c, 1),
                    g = y.getYear(f),
                    f = y.getMonth(f),
                    e = g + pb;
                if (cb) {
                    hb && hb.removeClass("mbsc-cal-sc-sel").removeAttr("aria-selected").find(".mbsc-cal-sc-cell-i").removeClass(db);
                    Ua && Ua.removeClass("mbsc-cal-sc-sel").removeAttr("aria-selected").find(".mbsc-cal-sc-cell-i").removeClass(db);
                    hb = a('.mbsc-cal-year-s[data-val="' + g + '"]', O).addClass("mbsc-cal-sc-sel").attr("aria-selected", "true");
                    Ua = a('.mbsc-cal-month-s[data-val="' + f + '"]', O).addClass("mbsc-cal-sc-sel").attr("aria-selected",
                        "true");
                    hb.find(".mbsc-cal-sc-cell-i").addClass(db);
                    Ua.find(".mbsc-cal-sc-cell-i").addClass(db);
                    bb && bb.scroll(hb, d);
                    a(".mbsc-cal-month-s", O).removeClass("mbsc-fr-btn-d");
                    if (g === ha)
                        for (B = 0; B < Aa; B++) a('.mbsc-cal-month-s[data-val="' + B + '"]', O).addClass("mbsc-fr-btn-d");
                    if (g === Va)
                        for (B = Ra + 1; 12 >= B; B++) a('.mbsc-cal-month-s[data-val="' + B + '"]', O).addClass("mbsc-fr-btn-d")
                }
                1 == ma.length && ma.attr("aria-label", g).html(e);
                for (B = 0; B < ja; ++B) f = y.getDate(b, c - sa + B, 1), g = y.getYear(f), f = y.getMonth(f), e = g + pb, a(na[B]).attr("aria-label",
                    y.monthNames[f] + (Ga ? "" : " " + g)).html((!Ga && Qa < F ? e + " " : "") + K[f] + (!Ga && Qa > F ? " " + e : "")), 1 < ma.length && a(ma[B]).html(e);
                y.getDate(b, c - sa - 1, 1) < Sa ? G(a(".mbsc-cal-prev-m", O)) : Q(a(".mbsc-cal-prev-m", O));
                y.getDate(b, c + ja - sa, 1) > wa ? G(a(".mbsc-cal-next-m", O)) : Q(a(".mbsc-cal-next-m", O));
                y.getDate(b, c, 1).getFullYear() <= Sa.getFullYear() ? G(a(".mbsc-cal-prev-y", O)) : Q(a(".mbsc-cal-prev-y", O));
                y.getDate(b, c, 1).getFullYear() >= wa.getFullYear() ? G(a(".mbsc-cal-next-y", O)) : Q(a(".mbsc-cal-next-y", O))
            }

            function Q(a) {
                a.removeClass(ab).find(".mbsc-cal-btn-txt").removeAttr("aria-disabled")
            }

            function G(a) {
                a.addClass(ab).find(".mbsc-cal-btn-txt").attr("aria-disabled", "true")
            }

            function J(b, c) {
                if (ia && ("calendar" === Ca || c)) {
                    var d, f, e = y.getDate(oa, ra, 1),
                        h = Math.abs(12 * (y.getYear(b) - y.getYear(e)) + y.getMonth(b) - y.getMonth(e));
                    g.needsSlide && h && (oa = y.getYear(b), ra = y.getMonth(b), b > e ? (f = h > ta - sa + ja - 1, ra -= f ? 0 : h - ta, d = "next") : b < e && (f = h > ta + sa, ra += f ? 0 : h - ta, d = "prev"), q(oa, ra, d, Math.min(h, ta), f, !0));
                    c || (jb = b, g.trigger("onDayHighlight", {
                        date: b
                    }), y.highlight && (a(".mbsc-cal-day-sel .mbsc-cal-day-i", pa).removeClass(db),
                        a(".mbsc-cal-day-sel", pa).removeClass("mbsc-cal-day-sel").removeAttr("aria-selected"), a(".mbsc-cal-week-hl", pa).removeClass("mbsc-cal-week-hl"), (null !== y.defaultValue || g._hasValue) && a('.mbsc-cal-day[data-full="' + b.getFullYear() + "-" + b.getMonth() + "-" + b.getDate() + '"]', pa).addClass("mbsc-cal-day-sel").attr("aria-selected", "true").find(".mbsc-cal-day-i").addClass(db).closest(".mbsc-cal-row").addClass("mbsc-cal-week-hl")));
                    g.needsSlide = !0
                }
            }

            function C(a, c, d) {
                d || g.trigger("onMonthLoading", {
                    year: a,
                    month: c
                });
                h(a, c);
                for (B = 0; B < Na; B++) va[B].html(p(a, c - sa - ta + B));
                w();
                tb = b;
                g.trigger("onMonthLoaded", {
                    year: a,
                    month: c
                })
            }

            function n(b, c, d) {
                var f = ta,
                    g = ta;
                if (d) {
                    for (; g && y.getDate(b, c + f + ja - sa - 1, 1) > wa;) g--;
                    for (; f && y.getDate(b, c - g - sa, 1) < Sa;) f--
                }
                a.extend(ka.settings, {
                    contSize: ja * Y,
                    snap: Y,
                    minScroll: S - (za ? f : g) * Y,
                    maxScroll: S + (za ? g : f) * Y
                });
                ka.refresh()
            }

            function w() {
                Ja && Ia.html(a(".mbsc-cal-week-nr-c", va[ta]).html());
                a(".mbsc-cal-slide-a .mbsc-cal-day", qa).attr("tabindex", 0)
            }

            function q(c, d, f, e, i, j, o) {
                c && sb.push({
                    y: c,
                    m: d,
                    dir: f,
                    slideNr: e,
                    load: i,
                    active: j,
                    callback: o
                });
                if (!Pa) {
                    var m = sb.shift(),
                        c = m.y,
                        d = m.m,
                        f = "next" === m.dir,
                        e = m.slideNr,
                        i = m.load,
                        j = m.active,
                        o = m.callback || Jb,
                        m = y.getDate(c, d, 1),
                        c = y.getYear(m),
                        d = y.getMonth(m);
                    Pa = !0;
                    g.changing = !0;
                    g.trigger("onMonthChange", {
                        year: c,
                        month: d
                    });
                    g.trigger("onMonthLoading", {
                        year: c,
                        month: d
                    });
                    h(c, d);
                    if (i)
                        for (B = 0; B < ja; B++) va[f ? Na - ja + B : B].html(p(c, d - sa + B));
                    j && zb.addClass("mbsc-cal-slide-a");
                    setTimeout(function() {
                        g.ariaMessage(y.monthNames[d] + " " + c);
                        l(c, d, 200);
                        S = f ? S - Y * e * ua : S + Y * e * ua;
                        ka.scroll(S,
                            j ? 200 : 0, !1,
                            function() {
                                var h;
                                if (va.length) {
                                    zb.removeClass("mbsc-cal-slide-a").attr("aria-hidden", "true");
                                    if (f) {
                                        h = va.splice(0, e);
                                        for (B = 0; B < e; B++) {
                                            va.push(h[B]);
                                            z(va[va.length - 1], +va[va.length - 2].attr("data-curr") + 100 * ua)
                                        }
                                    } else {
                                        h = va.splice(Na - e, e);
                                        for (B = e - 1; B >= 0; B--) {
                                            va.unshift(h[B]);
                                            z(va[0], +va[1].attr("data-curr") - 100 * ua)
                                        }
                                    }
                                    for (B = 0; B < e; B++) {
                                        va[f ? Na - e + B : B].html(p(c, d - sa - ta + B + (f ? Na - e : 0)));
                                        i && va[f ? B : Na - e + B].html(p(c, d - sa - ta + B + (f ? 0 : Na - e)))
                                    }
                                    for (B = 0; B < ja; B++) va[ta + B].addClass("mbsc-cal-slide-a").removeAttr("aria-hidden");
                                    n(c, d, true);
                                    Pa = false
                                }
                                if (sb.length) setTimeout(function() {
                                    q()
                                }, 10);
                                else {
                                    oa = c;
                                    ra = d;
                                    g.changing = false;
                                    a(".mbsc-cal-day", qa).attr("tabindex", -1);
                                    w();
                                    tb !== b ? C(c, d, tb) : g.trigger("onMonthLoaded", {
                                        year: c,
                                        month: d
                                    });
                                    o()
                                }
                            })
                    }, 10)
                }
            }

            function N() {
                var b = a(this),
                    c = g.live,
                    d = g.getDate(!0),
                    f = b.attr("data-full"),
                    e = f.split("-"),
                    e = o(e[0], e[1], e[2]),
                    d = o(e.getFullYear(), e.getMonth(), e.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()),
                    h = b.hasClass("mbsc-cal-day-sel");
                if ((xb || !b.hasClass("mbsc-cal-day-diff")) && !1 !== g.trigger("onDayChange",
                        a.extend(Rb[f], {
                            date: d,
                            target: this,
                            selected: h
                        }))) g.needsSlide = !1, I = !0, g.setDate(d, c, 0.2, !c, !0), y.outerMonthChange && (Ya = !0, e < y.getDate(oa, ra - sa, 1) ? M() : e > y.getDate(oa, ra - sa + ja, 0) && x(), Ya = !1), g.live && g.trigger("onSet", {
                    valueText: g._value
                })
            }

            function z(a, b) {
                a.attr("data-curr", b);
                a[0].style[E + "Transform"] = "translate3d(" + (Ma ? "0," + b + "%," : b + "%,0,") + "0)"
            }

            function H(a) {
                g.isVisible() && ia && (g.changing ? tb = a : C(oa, ra, a))
            }

            function x() {
                Ya && y.getDate(oa, ra + ja - sa, 1) <= wa && k.running && q(oa, ++ra, "next", 1, !1, !0, x)
            }

            function M() {
                Ya &&
                    y.getDate(oa, ra - sa - 1, 1) >= Sa && k.running && q(oa, --ra, "prev", 1, !1, !0, M)
            }

            function ga(a) {
                Ya && y.getDate(oa, ra, 1) <= y.getDate(y.getYear(wa) - 1, y.getMonth(wa) - nb, 1) && k.running ? q(++oa, ra, "next", ta, !0, !0, function() {
                    ga(a)
                }) : Ya && !a.hasClass("mbsc-fr-btn-d") && k.running && q(y.getYear(wa), y.getMonth(wa) - nb, "next", ta, !0, !0)
            }

            function U(a) {
                Ya && y.getDate(oa, ra, 1) >= y.getDate(y.getYear(Sa) + 1, y.getMonth(Sa) + sa, 1) && k.running ? q(--oa, ra, "prev", ta, !0, !0, function() {
                    U(a)
                }) : Ya && !a.hasClass("mbsc-fr-btn-d") && k.running && q(y.getYear(Sa),
                    y.getMonth(Sa) + sa, "prev", ta, !0, !0)
            }

            function T(a, b) {
                a.hasClass("mbsc-cal-v") || (a.addClass("mbsc-cal-v" + (b ? "" : " mbsc-cal-p-in")).removeClass("mbsc-cal-p-out mbsc-cal-h"), g.trigger("onSelectShow"))
            }

            function L(a, b) {
                a.hasClass("mbsc-cal-v") && a.removeClass("mbsc-cal-v mbsc-cal-p-in").addClass("mbsc-cal-h" + (b ? "" : " mbsc-cal-p-out"))
            }

            function X(a, b) {
                (b || a).hasClass("mbsc-cal-v") ? L(a) : T(a)
            }

            function aa() {
                a(this).removeClass("mbsc-cal-p-out mbsc-cal-p-in")
            }
            var V, B, Z, la, ea, O, da, pa, qa, Y, S, I, ia, R, xa, Ia, P, fa, K, ka,
                W, na, F, ma, Qa, ha, Va, Aa, Ra, Sa, wa, ib, ob, jb, oa, ra, Ab, mb, Mb, La, Wa, Ca, Pa, kb, Ob, $a, Eb, Ya, ja, Na, nb, sa, tb, xb, bb, hb, Ua, Pb = this,
                zb = [],
                va = [],
                sb = [],
                Da = {},
                Rb = {},
                Jb = function() {},
                Qb = a.extend({}, g.settings),
                y = a.extend(g.settings, j, Qb),
                yb = "full" == y.weekDays ? "" : "min" == y.weekDays ? "Min" : "Short",
                Ja = y.weekCounter,
                Ha = y.layout || (/top|bottom/.test(y.display) ? "liquid" : ""),
                Ta = "liquid" == Ha && "bubble" !== y.display,
                ba = "center" == y.display,
                za = y.rtl,
                ua = za ? -1 : 1,
                Db = Ta ? null : y.calendarWidth,
                Ma = "vertical" == y.calendarScroll,
                cb = y.quickNav,
                ta = y.preMonths,
                Ga = y.yearChange,
                eb = y.controls.join(","),
                fb = (!0 === y.tabs || !1 !== y.tabs && Ta) && 1 < y.controls.length,
                ub = !fb && y.tabs === b && !Ta && 1 < y.controls.length,
                pb = y.yearSuffix || "",
                db = y.activeClass || "",
                Cb = "mbsc-cal-tab-sel " + (y.activeTabClass || ""),
                vb = y.activeTabInnerClass || "",
                ab = "mbsc-fr-btn-d " + (y.disabledClass || ""),
                ya = "",
                Fa = "";
            eb.match(/calendar/) ? ia = !0 : cb = !1;
            eb.match(/date/) && (Da.date = 1);
            eb.match(/time/) && (Da.time = 1);
            ia && Da.date && (fb = !0, ub = !1);
            y.layout = Ha;
            y.preset = (Da.date || ia ? "date" : "") + (Da.time ? "time" :
                "");
            if ("inline" == y.display) a(this).closest('[data-role="page"]').on("pageshow", function() {
                g.position()
            });
            g.changing = !1;
            g.needsSlide = !0;
            g.getDayProps = Jb;
            g.onGenMonth = Jb;
            g.prepareObj = v;
            g.refresh = function() {
                H(false)
            };
            g.redraw = function() {
                H(true)
            };
            g.navigate = function(a, b) {
                var c, d, f = g.isVisible();
                if (b && f) J(a, true);
                else {
                    c = y.getYear(a);
                    d = y.getMonth(a);
                    if (f && (c != oa || d != ra)) {
                        g.trigger("onMonthChange", {
                            year: c,
                            month: d
                        });
                        l(c, d);
                        C(c, d);
                        n(a.getFullYear(), a.getMonth(), true)
                    }
                    oa = c;
                    ra = d
                }
            };
            g.showMonthView = function() {
                if (cb &&
                    !fa) {
                    L(Fa, true);
                    L(ya, true);
                    T(P, true);
                    fa = true
                }
            };
            g.changeTab = function(b) {
                if (g._isVisible && Da[b] && Ca != b) {
                    Ca = b;
                    a(".mbsc-cal-pnl", O).removeClass("mbsc-cal-p-in").addClass("mbsc-cal-pnl-h");
                    a(".mbsc-cal-tab", O).removeClass(Cb).removeAttr("aria-selected").find(".mbsc-cal-tab-i").removeClass(vb);
                    a('.mbsc-cal-tab[data-control="' + b + '"]', O).addClass(Cb).attr("aria-selected", "true").find(".mbsc-cal-tab-i").addClass(vb);
                    Da[Ca].removeClass("mbsc-cal-pnl-h").addClass("mbsc-cal-p-in");
                    if (Ca == "calendar") {
                        V = g.getDate(true);
                        (V.getFullYear() !== jb.getFullYear() || V.getMonth() !== jb.getMonth() || V.getDate() !== jb.getDate()) && J(V)
                    }
                    g.showMonthView();
                    g.trigger("onTabChange", {
                        tab: Ca
                    })
                }
            };
            la = f.datetime.call(this, g);
            F = y.dateFormat.search(/m/i);
            Qa = y.dateFormat.search(/y/i);
            a.extend(la, {
                ariaMessage: y.calendarText,
                onMarkupReady: function(f) {
                    var e, h = "";
                    O = a(f.target);
                    da = y.display == "inline" ? a(this).is("div") ? a(this) : a(this).parent() : g._window;
                    jb = g.getDate(true);
                    if (!oa) {
                        oa = y.getYear(jb);
                        ra = y.getMonth(jb)
                    }
                    S = 0;
                    xa = true;
                    Pa = false;
                    K = y.monthNames;
                    Ca = "calendar";
                    if (y.min) {
                        Sa = o(y.min.getFullYear(), y.min.getMonth(), 1);
                        ib = y.min
                    } else ib = Sa = o(y.startYear, 0, 1);
                    if (y.max) {
                        wa = o(y.max.getFullYear(), y.max.getMonth(), 1);
                        ob = y.max
                    } else ob = wa = o(y.endYear, 11, 31, 23, 59, 59);
                    O.addClass("mbsc-calendar");
                    ea = a(".mbsc-fr-popup", O);
                    Wa = a(".mbsc-fr-c", O);
                    Da.date ? Da.date = a(".mbsc-sc-whl-gr-c", O).eq(0) : ia && a(".mbsc-sc-whl-gr-c", O).eq(0).addClass("mbsc-cal-hdn");
                    if (Da.time) Da.time = a(".mbsc-sc-whl-gr-c", O).eq(1);
                    if (ia) {
                        ja = y.months == "auto" ? Math.max(1, Math.min(3, Math.floor((Db ||
                            da[0].innerWidth || da.innerWidth()) / 280))) : y.months;
                        Na = ja + 2 * ta;
                        nb = Math.floor(ja / 2);
                        sa = Math.round(ja / 2) - 1;
                        xb = y.showOuterDays === b ? ja < 2 : y.showOuterDays;
                        Ma = Ma && ja < 2;
                        f = '<div class="mbsc-cal-btnw"><div class="' + (za ? "mbsc-cal-next-m" : "mbsc-cal-prev-m") + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (y.btnCalPrevClass || "") + '" aria-label="' + y.prevMonthText + '"></div></div>';
                        for (B = 0; B < ja; ++B) f = f + ('<div class="mbsc-cal-btnw-m" style="width: ' +
                            100 / ja + '%"><span role="button" class="mbsc-cal-month"></span></div>');
                        f = f + ('<div class="' + (za ? "mbsc-cal-prev-m" : "mbsc-cal-next-m") + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (y.btnCalNextClass || "") + '" aria-label="' + y.nextMonthText + '"></div></div></div>');
                        Ga && (h = '<div class="mbsc-cal-btnw"><div class="' + (za ? "mbsc-cal-next-y" : "mbsc-cal-prev-y") + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' +
                            (y.btnCalPrevClass || "") + '" aria-label="' + y.prevYearText + '"></div></div><span role="button" class="mbsc-cal-year"></span><div class="' + (za ? "mbsc-cal-prev-y" : "mbsc-cal-next-y") + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (y.btnCalNextClass || "") + '" aria-label="' + y.nextYearText + '"></div></div></div>');
                        if (cb) {
                            ha = y.getYear(Sa);
                            Va = y.getYear(wa);
                            Aa = y.getMonth(Sa);
                            Ra = y.getMonth(wa);
                            mb = Math.ceil((Va - ha + 1) / 12) + 2;
                            ya = D("month", 36, 24, 0, "", y.monthNames,
                                y.monthNamesShort);
                            Fa = D("year", mb * 12, Va - ha + 13, ha, pb)
                        }
                        R = '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal mbsc-cal-hl-now' + (ja > 1 ? " mbsc-cal-multi " : "") + (Ja ? " mbsc-cal-weeks " : "") + (Ma ? " mbsc-cal-vertical" : "") + (xb ? "" : " mbsc-cal-hide-diff ") + (y.calendarClass || "") + '"><div class="mbsc-cal-header"><div class="mbsc-cal-btnc ' + (Ga ? "mbsc-cal-btnc-ym" : "mbsc-cal-btnc-m") + '">' + (Qa < F || ja > 1 ? h + f : f + h) + '</div></div><div class="mbsc-cal-body"><div class="mbsc-cal-m-c mbsc-cal-v"><div class="mbsc-cal-days-c">';
                        for (Z = 0; Z < ja; ++Z) {
                            R = R + ('<div aria-hidden="true" class="mbsc-cal-days" style="width: ' + 100 / ja + '%"><table cellpadding="0" cellspacing="0"><tr>');
                            for (B = 0; B < 7; B++) R = R + ("<th>" + y["dayNames" + yb][(B + y.firstDay) % 7] + "</th>");
                            R = R + "</tr></table></div>"
                        }
                        R = R + ('</div><div class="mbsc-cal-week-nrs-c ' + (y.weekNrClass || "") + '"><div class="mbsc-cal-week-nrs"></div></div><div class="mbsc-cal-anim-c ' + (y.calendarClass || "") + '"><div class="mbsc-cal-anim">');
                        for (B = 0; B < ja + 2 * ta; B++) R = R + '<div class="mbsc-cal-slide" aria-hidden="true"></div>';
                        R = R + ("</div></div></div>" + ya + Fa + "</div></div></div>");
                        Da.calendar = a(R)
                    }
                    a.each(y.controls, function(b, c) {
                        Da[c] = a('<div class="mbsc-cal-pnl" id="' + (Pb.id + "_dw_pnl_" + b) + '"></div>').append(a('<div class="mbsc-cal-pnl-i"></div>').append(Da[c])).appendTo(Wa)
                    });
                    e = '<div class="mbsc-cal-tabs"><ul role="tablist">';
                    a.each(y.controls, function(a, b) {
                        Da[b] && (e = e + ('<li role="tab" aria-controls="' + (Pb.id + "_dw_pnl_" + a) + '" class="mbsc-cal-tab ' + (a ? "" : Cb) + '" data-control="' + b + '"><a href="#" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-tab-i ' +
                            (!a ? vb : "") + '">' + y[b + "Text"] + "</a></li>"))
                    });
                    e = e + "</ul></div>";
                    Wa.before(e);
                    pa = a(".mbsc-cal-anim-c", O);
                    qa = a(".mbsc-cal-anim", pa);
                    Ia = a(".mbsc-cal-week-nrs", O);
                    if (ia) {
                        fa = true;
                        zb = a(".mbsc-cal-slide", qa).each(function(b, c) {
                            va.push(a(c))
                        });
                        zb.slice(ta, ta + ja).addClass("mbsc-cal-slide-a").removeAttr("aria-hidden");
                        for (B = 0; B < Na; B++) z(va[B], 100 * (B - ta) * ua);
                        C(oa, ra);
                        ka = new c.classes.ScrollView(pa[0], {
                            axis: Ma ? "Y" : "X",
                            easing: "",
                            contSize: 0,
                            snap: 1,
                            maxSnapScroll: ta,
                            moveElement: qa,
                            mousewheel: y.mousewheel,
                            time: 200,
                            lock: true,
                            stopProp: false,
                            onAnimationEnd: function(a) {
                                (a = Math.round(((Ma ? a.posY : a.posX) - S) / Y) * ua) && q(oa, ra - a, a > 0 ? "prev" : "next", a > 0 ? a : -a)
                            }
                        })
                    }
                    na = a(".mbsc-cal-month", O);
                    ma = a(".mbsc-cal-year", O);
                    P = a(".mbsc-cal-m-c", O);
                    if (cb) {
                        P.on("webkitAnimationEnd animationend", aa);
                        ya = a(".mbsc-cal-month-c", O).on("webkitAnimationEnd animationend", aa);
                        Fa = a(".mbsc-cal-year-c", O).on("webkitAnimationEnd animationend", aa);
                        a(".mbsc-cal-sc-p", O);
                        Ab = {
                            axis: Ma ? "Y" : "X",
                            contSize: 0,
                            snap: 1,
                            maxSnapScroll: 1,
                            rtl: y.rtl,
                            mousewheel: y.mousewheel,
                            time: 200
                        };
                        bb = new c.classes.ScrollView(Fa[0], Ab);
                        W = new c.classes.ScrollView(ya[0], Ab)
                    }
                    Ta ? O.addClass("mbsc-cal-liq") : a(".mbsc-cal", O).width(Db || 280 * ja);
                    y.calendarHeight && a(".mbsc-cal-anim-c", O).height(y.calendarHeight);
                    g.tap(pa, function(b) {
                        b = a(b.target);
                        if (!Pa && !ka.scrolled && y.readonly !== true) {
                            b = b.closest(".mbsc-cal-day", this);
                            b.hasClass("mbsc-cal-day-v") && N.call(b[0])
                        }
                    });
                    a(".mbsc-cal-btn", O).on("touchstart mousedown keydown", i).on("touchmove", A).on("touchend touchcancel keyup", u);
                    a(".mbsc-cal-tab",
                        O).on("touchstart click", function(b) {
                        s(b, this) && k.running && g.changeTab(a(this).attr("data-control"))
                    });
                    if (cb) {
                        g.tap(a(".mbsc-cal-month", O), function() {
                            if (!Fa.hasClass("mbsc-cal-v")) {
                                X(P);
                                fa = P.hasClass("mbsc-cal-v")
                            }
                            X(ya);
                            L(Fa)
                        });
                        g.tap(a(".mbsc-cal-year", O), function() {
                            Fa.hasClass("mbsc-cal-v") || bb.scroll(hb);
                            if (!ya.hasClass("mbsc-cal-v")) {
                                X(P);
                                fa = P.hasClass("mbsc-cal-v")
                            }
                            X(Fa);
                            L(ya)
                        });
                        g.tap(a(".mbsc-cal-month-s", O), function() {
                            !W.scrolled && !a(this).hasClass("mbsc-fr-btn-d") && g.navigate(y.getDate(oa,
                                a(this).attr("data-val"), 1))
                        });
                        g.tap(a(".mbsc-cal-year-s", O), function() {
                            if (!bb.scrolled) {
                                V = y.getDate(a(this).attr("data-val"), ra, 1);
                                g.navigate(new Date(d.constrain(V, Sa, wa)))
                            }
                        });
                        g.tap(Fa, function() {
                            if (!bb.scrolled) {
                                L(Fa);
                                T(P);
                                fa = true
                            }
                        });
                        g.tap(ya, function() {
                            if (!W.scrolled) {
                                L(ya);
                                T(P);
                                fa = true
                            }
                        })
                    }
                },
                onShow: function() {
                    ia && l(oa, ra)
                },
                onPosition: function(b) {
                    var c, d, f, e = 0,
                        h = 0,
                        i = 0,
                        j = b.windowHeight;
                    if (Ta) {
                        ba && pa.height("");
                        Wa.height("");
                        qa.width("")
                    }
                    Y && (f = Y);
                    ia && (Y = Math.round(Math.round(pa[0][Ma ? "offsetHeight" :
                        "offsetWidth"
                    ]) / ja));
                    if (Y) {
                        O.removeClass("mbsc-cal-m mbsc-cal-l");
                        Y > 1024 ? O.addClass("mbsc-cal-l") : Y > 640 && O.addClass("mbsc-cal-m")
                    }
                    if (fb && (xa || Ta) || ub) {
                        a(".mbsc-cal-pnl", O).removeClass("mbsc-cal-pnl-h");
                        a.each(Da, function(a, b) {
                            c = b[0].offsetWidth;
                            e = Math.max(e, c);
                            h = Math.max(h, b[0].offsetHeight);
                            i = i + c
                        });
                        if (fb || ub && i > (da[0].innerWidth || da.innerWidth())) {
                            d = true;
                            Ca = a(".mbsc-cal-tabs .mbsc-cal-tab-sel", O).attr("data-control");
                            ea.addClass("mbsc-cal-tabbed")
                        } else {
                            Ca = "calendar";
                            h = e = "";
                            ea.removeClass("mbsc-cal-tabbed");
                            Wa.css({
                                width: "",
                                height: ""
                            })
                        }
                    }
                    if (Ta && ba && ia) {
                        g._isFullScreen = true;
                        d && Wa.height(Da.calendar[0].offsetHeight);
                        b = ea[0].offsetHeight;
                        j >= b && pa.height(j - b + pa[0].offsetHeight);
                        h = Math.max(h, Da.calendar[0].offsetHeight)
                    }
                    if (d) {
                        Wa.css({
                            width: Ta ? "" : e,
                            height: h
                        });
                        ia && (Y = Math.round(Math.round(pa[0][Ma ? "offsetHeight" : "offsetWidth"]) / ja))
                    }
                    if (Y) {
                        qa[Ma ? "height" : "width"](Y);
                        if (Y !== f) {
                            if (Ga) {
                                K = y.maxMonthWidth > a(".mbsc-cal-btnw-m", O).width() ? y.monthNamesShort : y.monthNames;
                                for (B = 0; B < ja; ++B) a(na[B]).text(K[y.getMonth(y.getDate(oa,
                                    ra - sa + B, 1))])
                            }
                            if (cb) {
                                b = Fa[0][Ma ? "offsetHeight" : "offsetWidth"];
                                a.extend(bb.settings, {
                                    contSize: b,
                                    snap: b,
                                    minScroll: (2 - mb) * b,
                                    maxScroll: -b
                                });
                                a.extend(W.settings, {
                                    contSize: b,
                                    snap: b,
                                    minScroll: -b,
                                    maxScroll: -b
                                });
                                bb.refresh();
                                W.refresh();
                                Fa.hasClass("mbsc-cal-v") && bb.scroll(hb)
                            }
                            if (Ta && !xa && f) {
                                b = S / f;
                                S = b * Y
                            }
                            n(oa, ra, !f)
                        }
                    } else Y = f;
                    if (d) {
                        a(".mbsc-cal-pnl", O).addClass("mbsc-cal-pnl-h");
                        Da[Ca].removeClass("mbsc-cal-pnl-h")
                    }
                    g.trigger("onCalResize");
                    xa = false
                },
                onHide: function() {
                    sb = [];
                    va = [];
                    ra = oa = Ca = null;
                    Pa = true;
                    Y = 0;
                    ka &&
                        ka.destroy();
                    if (cb && bb && W) {
                        bb.destroy();
                        W.destroy()
                    }
                },
                onValidated: function(a) {
                    var b, c, d;
                    c = g.getDate(true);
                    if (I) b = "calendar";
                    else
                        for (d in g.order) d && g.order[d] === a && (b = /[mdy]/.test(d) ? "date" : "time");
                    g.trigger("onSetDate", {
                        date: c,
                        control: b
                    });
                    J(c);
                    I = false
                }
            });
            return la
        }
    })(window, document);
    (function(i) {
        var e = k,
            b = e.$,
            c = e.classes,
            a = e.util,
            f = a.constrain,
            d = a.jsPrefix,
            o = a.prefix,
            E = a.getCoord,
            s = a.getPosition,
            m = a.testTouch,
            j = a.isNumeric,
            g = a.isString,
            r = /(iphone|ipod|ipad)/i.test(navigator.userAgent),
            A = window.requestAnimationFrame ||
            function(a) {
                a()
            },
            u = window.cancelAnimationFrame || function() {};
        c.ScrollView = function(a, e, h) {
            function D(a) {
                ka("onStart");
                ha.stopProp && a.stopPropagation();
                (ha.prevDef || "mousedown" == a.type) && a.preventDefault();
                if (!(ha.readonly || ha.lock && la) && m(a, this) && !Z && k.running)
                    if (n && n.removeClass("mbsc-btn-a"), X = !1, la || (n = b(a.target).closest(".mbsc-btn-e", this), n.length && !n.hasClass("mbsc-btn-d") && (X = !0, w = setTimeout(function() {
                            n.addClass("mbsc-btn-a")
                        }, 100))), Z = !0, ea = pa = !1, na.scrolled = la, xa = E(a, "X"), Ia = E(a, "Y"),
                        U = xa, H = z = N = 0, R = new Date, ia = +s(fa, W) || 0, la && C(ia, r ? 0 : 1), "mousedown" === a.type) b(document).on("mousemove", p).on("mouseup", Q)
            }

            function p(a) {
                if (Z) {
                    ha.stopProp && a.stopPropagation();
                    U = E(a, "X");
                    T = E(a, "Y");
                    N = U - xa;
                    z = T - Ia;
                    H = W ? z : N;
                    if (X && (5 < Math.abs(z) || 5 < Math.abs(N))) clearTimeout(w), n.removeClass("mbsc-btn-a"), X = !1;
                    if (na.scrolled || !ea && 5 < Math.abs(H)) pa || ka("onGestureStart", L), na.scrolled = pa = !0, da || (da = !0, O = A(l));
                    W || ha.scrollLock ? a.preventDefault() : na.scrolled ? a.preventDefault() : 7 < Math.abs(z) && (ea = !0, na.scrolled = !0, Va.trigger("touchend"))
                }
            }

            function l() {
                V && (H = f(H, -S * V, S * V));
                C(f(ia + H, B - ga, aa + ga));
                da = !1
            }

            function Q(a) {
                if (Z) {
                    var c;
                    c = new Date - R;
                    ha.stopProp && a.stopPropagation();
                    u(O);
                    da = !1;
                    !ea && na.scrolled && (ha.momentum && 300 > c && (c = H / c, H = Math.max(Math.abs(H), c * c / ha.speedUnit) * (0 > H ? -1 : 1)), J(H));
                    X && (clearTimeout(w), n.addClass("mbsc-btn-a"), setTimeout(function() {
                        n.removeClass("mbsc-btn-a")
                    }, 100), !ea && !na.scrolled && ka("onBtnTap", {
                        target: n[0]
                    }));
                    "mouseup" == a.type && b(document).off("mousemove", p).off("mouseup", Q);
                    Z = !1
                }
            }

            function G(a) {
                a = a.originalEvent || a;
                H = W ? a.deltaY || a.wheelDelta || a.detail : a.deltaX;
                ka("onStart");
                ha.stopProp && a.stopPropagation();
                if (H && k.running && (a.preventDefault(), !ha.readonly)) H = 0 > H ? 20 : -20, ia = F, pa || (L = {
                    posX: W ? 0 : F,
                    posY: W ? F : 0,
                    originX: W ? 0 : ia,
                    originY: W ? ia : 0,
                    direction: 0 < H ? W ? 270 : 360 : W ? 90 : 180
                }, ka("onGestureStart", L)), da || (da = !0, O = A(l)), pa = !0, clearTimeout(qa), qa = setTimeout(function() {
                    u(O);
                    pa = da = false;
                    J(H)
                }, 200)
            }

            function J(a) {
                var b;
                V && (a = f(a, -S * V, S * V));
                ma = Math.round((ia + a) / S);
                b = f(ma * S, B, aa);
                if (I) {
                    if (0 >
                        a)
                        for (a = I.length - 1; 0 <= a; a--) {
                            if (Math.abs(b) + q >= I[a].breakpoint) {
                                ma = a;
                                Qa = 2;
                                b = I[a].snap2;
                                break
                            }
                        } else if (0 <= a)
                            for (a = 0; a < I.length; a++)
                                if (Math.abs(b) <= I[a].breakpoint) {
                                    ma = a;
                                    Qa = 1;
                                    b = I[a].snap1;
                                    break
                                }
                    b = f(b, B, aa)
                }
                a = ha.time || (F < B || F > aa ? 1E3 : Math.max(1E3, Math.abs(b - F) * ha.timeUnit));
                L.destinationX = W ? 0 : b;
                L.destinationY = W ? b : 0;
                L.duration = a;
                L.transitionTiming = M;
                ka("onGestureEnd", L);
                C(b, a)
            }

            function C(a, b, c, f) {
                var g = a != F,
                    e = 1 < b,
                    h = function() {
                        clearInterval(Y);
                        clearTimeout(K);
                        la = !1;
                        F = a;
                        L.posX = W ? 0 : a;
                        L.posY = W ? a : 0;
                        g && ka("onMove",
                            L);
                        e && ka("onAnimationEnd", L);
                        f && f()
                    };
                L = {
                    posX: W ? 0 : F,
                    posY: W ? F : 0,
                    originX: W ? 0 : ia,
                    originY: W ? ia : 0,
                    direction: 0 < a - F ? W ? 270 : 360 : W ? 90 : 180
                };
                F = a;
                e && (L.destinationX = W ? 0 : a, L.destinationY = W ? a : 0, L.duration = b, L.transitionTiming = M, ka("onAnimationStart", L));
                P[d + "Transition"] = b ? o + "transform " + Math.round(b) + "ms " + M : "";
                P[d + "Transform"] = "translate3d(" + (W ? "0," + a + "px," : a + "px,0,") + "0)";
                !g && !la || !b || 1 >= b ? h() : b && (la = !c, clearInterval(Y), Y = setInterval(function() {
                    var b = +s(fa, W) || 0;
                    L.posX = W ? 0 : b;
                    L.posY = W ? b : 0;
                    ka("onMove", L);
                    Math.abs(b -
                        a) < 2 && h()
                }, 100), clearTimeout(K), K = setTimeout(function() {
                    h()
                }, b));
                ha.sync && ha.sync(a, b, M)
            }
            var n, w, q, N, z, H, x, M, ga, U, T, L, X, aa, V, B, Z, la, ea, O, da, pa, qa, Y, S, I, ia, R, xa, Ia, P, fa, K, ka, W, na = this,
                F, ma = 0,
                Qa = 1,
                ha = e,
                Va = b(a);
            c.Base.call(this, a, e, !0);
            na.scrolled = !1;
            na.scroll = function(c, d, g, e) {
                c = j(c) ? Math.round(c / S) * S : Math.ceil((b(c, a).length ? Math.round(fa.offset()[x] - b(c, a).offset()[x]) : F) / S) * S;
                ma = Math.round(c / S);
                ia = F;
                C(f(c, B, aa), d, g, e)
            };
            na.refresh = function(a) {
                var b;
                q = ha.contSize === i ? W ? Va.height() : Va.width() : ha.contSize;
                B = ha.minScroll === i ? W ? q - fa.height() : q - fa.width() : ha.minScroll;
                aa = ha.maxScroll === i ? 0 : ha.maxScroll;
                !W && ha.rtl && (b = aa, aa = -B, B = -b);
                g(ha.snap) && (I = [], fa.find(ha.snap).each(function() {
                    var a = W ? this.offsetTop : this.offsetLeft,
                        b = W ? this.offsetHeight : this.offsetWidth;
                    I.push({
                        breakpoint: a + b / 2,
                        snap1: -a,
                        snap2: q - a - b
                    })
                }));
                S = j(ha.snap) ? ha.snap : 1;
                V = ha.snap ? ha.maxSnapScroll : 0;
                M = ha.easing;
                ga = ha.elastic ? j(ha.snap) ? S : j(ha.elastic) ? ha.elastic : 0 : 0;
                F === i && (F = ha.initialPos, ma = Math.round(F / S));
                a || na.scroll(ha.snap ? I ? I[ma]["snap" +
                    Qa
                ] : ma * S : F)
            };
            na.init = function(b) {
                na._init(b);
                x = (W = "Y" == ha.axis) ? "top" : "left";
                fa = ha.moveElement || Va.children().eq(0);
                P = fa[0].style;
                na.refresh();
                Va.on("touchstart mousedown", D).on("touchmove", p).on("touchend touchcancel", Q);
                if (ha.mousewheel) Va.on("wheel mousewheel", G);
                a.addEventListener && a.addEventListener("click", function(a) {
                    na.scrolled && (na.scrolled = !1, a.stopPropagation(), a.preventDefault())
                }, !0)
            };
            na.destroy = function() {
                clearInterval(Y);
                Va.off("touchstart mousedown", D).off("touchmove", p).off("touchend touchcancel",
                    Q).off("wheel mousewheel", G);
                na._destroy()
            };
            ha = na.settings;
            ka = na.trigger;
            h || na.init(e)
        };
        c.ScrollView.prototype = {
            _class: "scrollview",
            _defaults: {
                speedUnit: 0.0022,
                timeUnit: 3,
                initialPos: 0,
                axis: "Y",
                easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                stopProp: !0,
                momentum: !0,
                mousewheel: !0,
                elastic: !0
            }
        };
        e.presetShort("scrollview", "ScrollView", !1)
    })();
    (function(i) {
        var e = k,
            b = e.$,
            c = {
                invalid: [],
                showInput: !0,
                inputClass: ""
            };
        e.presets.scroller.list = function(a) {
            function f(a, b, c) {
                var f = 0,
                    g, h, j = [
                        []
                    ],
                    n = J;
                if (b)
                    for (g = 0; g <
                        b; g++) A ? j[0][g] = {} : j[g] = [{}];
                for (; f < a.length;) {
                    A ? j[0][f] = e(n, C[f]) : j[f] = [e(n, C[f])];
                    g = 0;
                    for (b = i; g < n.length && b === i;) {
                        if (n[g].key == a[f] && (c !== i && f <= c || c === i)) b = g;
                        g++
                    }
                    if (b !== i && n[b].children) f++, n = n[b].children;
                    else if ((h = d(n)) && h.children) f++, n = h.children;
                    else break
                }
                return j
            }

            function d(a, b) {
                if (!a) return !1;
                for (var c = 0, d; c < a.length;)
                    if (!(d = a[c++]).invalid) return b ? c - 1 : d;
                return !1
            }

            function e(a, b) {
                for (var c = {
                        data: [],
                        label: b
                    }, d = 0; d < a.length;) c.data.push({
                    value: a[d].key,
                    display: a[d].value
                }), d++;
                return c
            }

            function k(c) {
                a._isVisible &&
                    b(".mbsc-sc-whl-w", a._markup).css("display", "").slice(c).hide()
            }

            function s(a, b) {
                var c = [],
                    f = J,
                    g = 0,
                    e = !1,
                    h, j;
                if (a[g] !== i && g <= b) {
                    e = 0;
                    h = a[g];
                    for (j = i; e < f.length && j === i;) f[e].key == a[g] && !f[e].invalid && (j = e), e++
                } else j = d(f, !0), h = f[j].key;
                e = j !== i ? f[j].children : !1;
                for (c[g] = h; e;) {
                    f = f[j].children;
                    g++;
                    if (a[g] !== i && g <= b) {
                        e = 0;
                        h = a[g];
                        for (j = i; e < f.length && j === i;) f[e].key == a[g] && !f[e].invalid && (j = e), e++
                    } else j = d(f, !0), j = !1 === j ? i : j, h = f[j].key;
                    e = j !== i && d(f[j].children) ? f[j].children : !1;
                    c[g] = h
                }
                return {
                    lvl: g + 1,
                    nVector: c
                }
            }

            function m(c) {
                var d = [];
                p = p > l++ ? p : l;
                c.children("li").each(function(c) {
                    var f = b(this),
                        g = f.clone();
                    g.children("ul,ol").remove();
                    var g = a._processMarkup ? a._processMarkup(g) : g.html().replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
                        e = f.attr("data-invalid") ? !0 : !1,
                        c = {
                            key: f.attr("data-val") === i || null === f.attr("data-val") ? c : f.attr("data-val"),
                            value: g,
                            invalid: e,
                            children: null
                        },
                        f = f.children("ul,ol");
                    f.length && (c.children = m(f));
                    d.push(c)
                });
                l--;
                return d
            }

            function j(b, c, d) {
                for (var g = (c || 0) + 1, e = [], i = {}, j = {}, i = f(b, null, c),
                        c = 0; c < b.length; c++) a._tempWheelArray[c] = b[c] = d.nVector[c] || 0;
                for (; g < d.lvl;) j[g] = A ? i[0][g] : i[g][0], e.push(g++);
                k(d.lvl);
                G = b.slice(0);
                e.length && (h = !0, a.changeWheel(j))
            }
            var g = b.extend({}, a.settings),
                r = b.extend(a.settings, c, g),
                g = r.layout || (/top|bottom/.test(r.display) ? "liquid" : ""),
                A = "liquid" == g,
                u = r.readonly,
                t = b(this),
                v, h, D = this.id + "_dummy",
                p = 0,
                l = 0,
                Q, G = [],
                J = r.wheelArray || m(t),
                C = function(a) {
                    var b = [],
                        c;
                    for (c = 0; c < a; c++) b[c] = r.labels && r.labels[c] ? r.labels[c] : c;
                    return b
                }(p),
                n = function(a) {
                    var b = [],
                        c;
                    c = !0;
                    for (var f =
                            0; c;) c = d(a), b[f++] = c.key, (c = c.children) && (a = c);
                    return b
                }(J),
                w = f(n, p);
            b("#" + D).remove();
            r.showInput && (v = b('<input type="text" id="' + D + '" value="" class="' + r.inputClass + '" placeholder="' + (r.placeholder || "") + '" readonly />').insertBefore(t), r.anchor = v, a.attachShow(v));
            r.wheelArray || t.hide();
            return {
                wheels: w,
                layout: g,
                headerText: !1,
                setOnTap: 1 == p,
                formatValue: function(a) {
                    if (Q === i) Q = s(a, a.length).lvl;
                    return a.slice(0, Q).join(" ")
                },
                parseValue: function(a) {
                    return a ? (a + "").split(" ") : (r.defaultValue || n).slice(0)
                },
                onBeforeShow: function() {
                    var b = a.getArrayVal(true);
                    G = b.slice(0);
                    r.wheels = f(b, p, p);
                    h = true
                },
                onWheelGestureStart: function(a) {
                    for (var b = p, a = a.index, c = []; b;) c[--b] = true;
                    c[a] = false;
                    r.readonly = c
                },
                onWheelAnimationEnd: function(b) {
                    var b = b.index,
                        c = a.getArrayVal(true),
                        d = s(c, b);
                    Q = d.lvl;
                    r.readonly = u;
                    c[b] != G[b] && j(c, b, d)
                },
                onFill: function(a) {
                    Q = i;
                    v && v.val(a.valueText)
                },
                validate: function(a) {
                    var b = a.values,
                        a = a.index,
                        c = s(b, b.length);
                    Q = c.lvl;
                    if (a === i) {
                        k(c.lvl);
                        h || j(b, a, c)
                    }
                    h = false;
                    for (var a = Q, c = J, d = 0, f = []; d < a;) {
                        for (var g =
                                f, e = d, n = 0, o = void 0, m = c, r = []; n < d;) {
                            var l = b[n];
                            for (o in m)
                                if (m[o].key == l) {
                                    m = m[o].children;
                                    break
                                }
                            n++
                        }
                        for (n = 0; n < m.length;) {
                            m[n].invalid && r.push(m[n].key);
                            n++
                        }
                        g[e] = r;
                        d++
                    }
                    return {
                        disabled: f
                    }
                },
                onDestroy: function() {
                    v && v.remove();
                    t.show()
                }
            }
        }
    })();
    (function(i) {
        var e = k,
            b = e.$,
            c = {
                batch: 50,
                min: 0,
                max: 100,
                defaultUnit: "",
                units: null,
                unitNames: null,
                invalid: [],
                sign: !1,
                step: 0.05,
                scale: 2,
                convert: function(a) {
                    return a
                },
                signText: "&nbsp;",
                wholeText: "Whole",
                fractionText: "Fraction",
                unitText: "Unit"
            };
        e.presets.scroller.measurement =
            function(a) {
                function f(a) {
                    return Math.max(X, Math.min(aa, C ? 0 > a ? Math.ceil(a) : Math.floor(a) : s(Math.round(a - Z), N) + Z))
                }

                function d(a) {
                    return C ? s((Math.abs(a) - Math.abs(f(a))) * q - la, N) + la : 0
                }

                function e(a) {
                    var b = f(a),
                        c = d(a);
                    c >= q && (0 > a ? b-- : b++, c = 0);
                    return [0 > a ? "-" : "+", b, c]
                }

                function k(a) {
                    var b = +a[ga];
                    return (l && "-" == a[0] ? -1 : 1) * (b + (C ? a[M] / q * (0 > b ? -1 : 1) : 0))
                }

                function s(a, b) {
                    return Math.round(a / b) * b
                }

                function m(a, b) {
                    for (a += ""; a.length < b;) a = "0" + a;
                    return a
                }

                function j(a, b, c) {
                    return b === c || !t.convert ? a : t.convert.call(this,
                        a, b, c)
                }

                function g(a, b, c) {
                    a = a > c ? c : a;
                    return a < b ? b : a
                }

                function r(a) {
                    var b;
                    T = j(t.min, G, a);
                    L = j(t.max, G, a);
                    C ? (X = 0 > T ? Math.ceil(T) : Math.floor(T), aa = 0 > L ? Math.ceil(L) : Math.floor(L), V = d(T), B = d(L)) : (X = Math.round(T), aa = Math.round(L), aa = X + Math.floor((aa - X) / N) * N, Z = X % N);
                    a = X;
                    b = aa;
                    l && (b = Math.abs(a) > Math.abs(b) ? Math.abs(a) : Math.abs(b), a = 0 > a ? 0 : a);
                    D.min = 0 > a ? Math.ceil(a / n) : Math.floor(a / n);
                    D.max = 0 > b ? Math.ceil(b / n) : Math.floor(b / n)
                }

                function A(a) {
                    return k(a).toFixed(C ? w : 0) + (Q ? " " + J[a[U]] : "")
                }
                var u = b.extend({}, a.settings),
                    t =
                    b.extend(a.settings, c, u),
                    v = {},
                    u = [
                        []
                    ],
                    h = {},
                    D = {},
                    v = {},
                    p = [],
                    l = t.sign,
                    Q = t.units && t.units.length,
                    G = Q ? t.defaultUnit || t.units[0] : "",
                    J = [],
                    C = 1 > t.step,
                    n = 1 < t.step ? t.step : 1,
                    w = C ? Math.max(t.scale, (t.step + "").split(".")[1].length) : 1,
                    q = Math.pow(10, w),
                    N = Math.round(C ? t.step * q : t.step),
                    z, H, x, M, ga, U, T, L, X, aa, V, B, Z = 0,
                    la = 0,
                    ea, O, da = 0;
                a.setVal = function(c, d, f, g, e) {
                    a._setVal(b.isArray(c) ? A(c) : c, d, f, g, e)
                };
                if (t.units)
                    for (O = 0; O < t.units.length; ++O) ea = t.units[O], J.push(t.unitNames ? t.unitNames[ea] || ea : ea);
                if (l)
                    if (l = !1, Q)
                        for (O = 0; O <
                            t.units.length; O++) 0 > j(t.min, G, t.units[O]) && (l = !0);
                    else l = 0 > t.min;
                l && (u[0].push({
                    data: ["-", "+"],
                    label: t.signText
                }), da++);
                D = {
                    label: t.wholeText,
                    data: function(a) {
                        return X % n + a * n
                    },
                    getIndex: function(a) {
                        return Math.round((a - X % n) / n)
                    }
                };
                u[0].push(D);
                ga = da++;
                r(G);
                if (C) {
                    u[0].push(v);
                    v.data = [];
                    v.label = t.fractionText;
                    for (O = la; O < q; O += N) p.push(O), v.data.push({
                        value: O,
                        display: "." + m(O, w)
                    });
                    M = da++;
                    z = Math.ceil(100 / N);
                    t.invalid && t.invalid.length && (b.each(t.invalid, function(a, b) {
                        var c = b > 0 ? Math.floor(b) : Math.ceil(b);
                        c ===
                            0 && (c = b <= 0 ? -0.001 : 0.001);
                        h[c] = (h[c] || 0) + 1;
                        if (b === 0) {
                            c = 0.001;
                            h[c] = (h[c] || 0) + 1
                        }
                    }), b.each(h, function(a, b) {
                        b < z ? delete h[a] : h[a] = a
                    }))
                }
                if (Q) {
                    v = {
                        data: [],
                        label: t.unitText,
                        circular: !1
                    };
                    for (O = 0; O < t.units.length; O++) v.data.push({
                        value: O,
                        display: J[O]
                    });
                    u[0].push(v)
                }
                U = da;
                return {
                    wheels: u,
                    minWidth: l && C ? 70 : 80,
                    showLabel: !1,
                    formatValue: A,
                    parseValue: function(a) {
                        var c = (((typeof a === "number" ? a + "" : a) || t.defaultValue) + "").split(" "),
                            a = +c[0],
                            d = [],
                            f = "";
                        if (Q) {
                            f = b.inArray(c[1], J);
                            f = f == -1 ? b.inArray(G, t.units) : f;
                            f = f == -1 ? 0 : f
                        }
                        x =
                            Q ? t.units[f] : "";
                        r(x);
                        a = isNaN(a) ? 0 : a;
                        a = g(a, T, L);
                        c = e(a);
                        c[1] = g(c[1], X, aa);
                        H = a;
                        if (l) {
                            d[0] = c[0];
                            c[1] = Math.abs(c[1])
                        }
                        d[ga] = c[1];
                        C && (d[M] = c[2]);
                        Q && (d[U] = f);
                        return d
                    },
                    onCancel: function() {
                        H = i
                    },
                    validate: function(c) {
                        var d, f, m, q, w = c.values;
                        m = c.index;
                        var c = c.direction,
                            u = {},
                            A = [],
                            v = {},
                            z = Q ? t.units[w[U]] : "";
                        l && m === 0 && (H = Math.abs(H) * (w[0] == "-" ? -1 : 1));
                        if (m === ga || m === M && C || H === i || m === i) {
                            H = k(w);
                            x = z
                        }
                        if (Q && m === U && x !== z || m === i) {
                            r(z);
                            H = j(H, x, z);
                            x = z;
                            f = e(H);
                            if (m !== i) {
                                v[ga] = D;
                                a.changeWheel(v)
                            }
                            l && (w[0] = f[0])
                        }
                        A[ga] = [];
                        if (l) {
                            A[0] = [];
                            if (T > 0) {
                                A[0].push("-");
                                w[0] = "+"
                            }
                            if (L < 0) {
                                A[0].push("+");
                                w[0] = "-"
                            }
                            m = Math.abs(w[0] == "-" ? X : aa);
                            for (da = m + n; da < m + 20 * n; da = da + n) {
                                A[ga].push(da);
                                u[da] = true
                            }
                        }
                        H = g(H, T, L);
                        f = e(H);
                        m = l ? Math.abs(f[1]) : f[1];
                        d = l ? w[0] == "-" : H < 0;
                        w[ga] = m;
                        d && (f[0] = "-");
                        C && (w[M] = f[2]);
                        b.each(C ? h : t.invalid, function(a, b) {
                            if (l && d)
                                if (b <= 0) b = Math.abs(b);
                                else return;
                            b = s(j(b, G, z), C ? 1 : N);
                            u[b] = true;
                            A[ga].push(b)
                        });
                        w[ga] = a.getValidValue(ga, m, c, u);
                        f[1] = w[ga] * (l && d ? -1 : 1);
                        if (C) {
                            A[M] = [];
                            c = l ? w[0] + w[1] : (H < 0 ? "-" : "+") + Math.abs(f[1]);
                            m = (T < 0 ? "-" : "+") + Math.abs(X);
                            v = (L < 0 ? "-" : "+") + Math.abs(aa);
                            c === m && b(p).each(function(a, b) {
                                (d ? b > V : b < V) && A[M].push(b)
                            });
                            c === v && b(p).each(function(a, b) {
                                (d ? b < B : b > B) && A[M].push(b)
                            });
                            b.each(t.invalid, function(a, b) {
                                q = e(j(b, G, z));
                                (f[0] === q[0] || f[1] === 0 && q[1] === 0 && q[2] === 0) && f[1] === q[1] && A[M].push(q[2])
                            })
                        }
                        return {
                            disabled: A,
                            valid: w
                        }
                    }
                }
            };
        e.presetShort("measurement")
    })();
    (function(i) {
        var e = k,
            b = e.$,
            c = e.util.datetime,
            a = c.adjustedDate,
            f = new Date,
            d = {
                startYear: f.getFullYear() - 100,
                endYear: f.getFullYear() + 1,
                separator: " ",
                dateFormat: "mm/dd/yy",
                dateDisplay: "MMddyy",
                timeFormat: "h:ii A",
                dayText: "Day",
                monthText: "Month",
                yearText: "Year",
                hourText: "Hours",
                minuteText: "Minutes",
                ampmText: "&nbsp;",
                secText: "Seconds",
                nowText: "Now",
                todayText: "Today"
            },
            o = function(f) {
                function o(a, b, c, d) {
                    return Math.min(d, Math.floor(a / b) * b + c)
                }

                function m(a) {
                    return 10 > a ? "0" + a : a
                }

                function j(b) {
                    var c, d, f, g = [];
                    if (b) {
                        for (c = 0; c < b.length; c++)
                            if (d = b[c], d.start && d.start.getTime)
                                for (f = new Date(d.start); f <= d.end;) g.push(a(f.getFullYear(), f.getMonth(), f.getDate())), f.setDate(f.getDate() + 1);
                            else g.push(d);
                        return g
                    }
                    return b
                }

                function g(a) {
                    return {
                        value: a,
                        display: (/yy/i.test(V) ? a : (a + "").substr(2, 2)) + (x.yearSuffix || "")
                    }
                }

                function r(a) {
                    return a
                }

                function k(a, b, c, d) {
                    return q[b] !== i && (a = +a[q[b]], !isNaN(a)) ? a : c ? ka[b](c) : N[b] !== i ? N[b] : ka[b](d)
                }

                function u(a) {
                    var b, c = new Date((new Date).setHours(0, 0, 0, 0));
                    if (null === a) return a;
                    q.dd !== i && (b = new Date((new Date(a[q.dd])).setHours(0, 0, 0, 0)));
                    q.tt !== i && (b = new Date((b || c).getTime() + 1E3 * (a[q.tt] % 86400)));
                    var d = k(a, "y", b, c),
                        f = k(a, "m", b, c),
                        g = Math.min(k(a, "d", b, c), x.getMaxDayOfMonth(d,
                            f)),
                        e = k(a, "h", b, c);
                    return x.getDate(d, f, g, ea && k(a, "a", b, c) ? e + 12 : e, k(a, "i", b, c), k(a, "s", b, c), k(a, "u", b, c))
                }

                function t(a, b) {
                    var c, d, f = "y,m,d,a,h,i,s,u,dd,tt".split(","),
                        g = [];
                    if (null === a || a === i) return a;
                    for (c = 0; c < f.length; c++) d = f[c], q[d] !== i && (g[q[d]] = ka[d](a)), b && (N[c] = ka[d](a));
                    return g
                }

                function v(a, b) {
                    return b ? Math.floor((new Date(a)).setHours(12, 0, 0, 0) / 864E5) : a.getMonth() + 12 * (a.getFullYear() - 1970)
                }

                function h(a) {
                    var b = /d/i.test(a);
                    return {
                        label: "",
                        cssClass: "mbsc-dt-whl-date",
                        min: v(B, b),
                        max: v(Z, b),
                        data: function(d) {
                            var f = new Date((new Date).setHours(0, 0, 0, 0)),
                                d = b ? new Date(1970, 0, 1 + d) : new Date(1970, d, 1);
                            return {
                                invalid: b && !l(d, !0),
                                value: c.formatDate("yy-mm-dd", d, x),
                                display: f.getTime() == d.getTime() ? x.todayText : c.formatDate(a, d, x)
                            }
                        },
                        getIndex: function(a) {
                            return v(new Date(a), b)
                        }
                    }
                }

                function D(a) {
                    var b, d, f, g = [];
                    /s/i.test(a) ? d = qa : /i/i.test(a) ? d = 60 * I : /h/i.test(a) && (d = 3600 * da);
                    C = fa.tt = d;
                    for (b = 0; 86400 > b; b += d) f = new Date((new Date).setHours(0, 0, 0, 0) + 1E3 * b), g.push({
                        value: b,
                        display: c.formatDate(a, f, x)
                    });
                    return {
                        label: "",
                        cssClass: "mbsc-dt-whl-time",
                        data: g
                    }
                }

                function p(a, b) {
                    var c, d, f = !1,
                        g = !1,
                        e = 0,
                        h = 0;
                    B = u(t(B));
                    Z = u(t(Z));
                    if (l(a)) return a;
                    a < B && (a = B);
                    a > Z && (a = Z);
                    d = c = a;
                    if (2 !== b)
                        for (f = l(c); !f && c < Z;) c = new Date(c.getTime() + 864E5), f = l(c), e++;
                    if (1 !== b)
                        for (g = l(d); !g && d > B;) d = new Date(d.getTime() - 864E5), g = l(d), h++;
                    return 1 === b && f ? c : 2 === b && g ? d : h <= e && g ? d : c
                }

                function l(a, b) {
                    return !b && a < B || !b && a > Z ? !1 : Q(a, ga) ? !0 : Q(a, M) ? !1 : !0
                }

                function Q(a, b) {
                    var c, d, f;
                    if (b)
                        for (d = 0; d < b.length; d++)
                            if (c = b[d], f = c + "", !c.start)
                                if (c.getTime) {
                                    if (a.getFullYear() ==
                                        c.getFullYear() && a.getMonth() == c.getMonth() && a.getDate() == c.getDate()) return !0
                                } else if (f.match(/w/i)) {
                        if (f = +f.replace("w", ""), f == a.getDay()) return !0
                    } else if (f = f.split("/"), f[1]) {
                        if (f[0] - 1 == a.getMonth() && f[1] == a.getDate()) return !0
                    } else if (f[0] == a.getDate()) return !0;
                    return !1
                }

                function G(a, b, c, d, f, g, e) {
                    var h, i, j;
                    if (a)
                        for (i = 0; i < a.length; i++)
                            if (h = a[i], j = h + "", !h.start)
                                if (h.getTime) x.getYear(h) == b && x.getMonth(h) == c && (g[x.getDay(h)] = e);
                                else if (j.match(/w/i)) {
                        j = +j.replace("w", "");
                        for (h = j - d; h < f; h += 7) 0 <= h && (g[h +
                            1] = e)
                    } else j = j.split("/"), j[1] ? j[0] - 1 == c && (g[j[1]] = e) : g[j[0]] = e
                }

                function J(a, b, c, d, f, g, e, h) {
                    var j, n, m, q, r, l, k, p, L, w, B, V, u, t = {},
                        A = x.getDate(d, f, g),
                        E = ["a", "h", "i", "s"];
                    if (a) {
                        for (r = 0; r < a.length; r++)
                            if (n = a[r], n.start && (n.apply = !1, j = n.d, k = j + "", L = k.split("/"), j && (j.getTime && d == x.getYear(j) && f == x.getMonth(j) && g == x.getDay(j) || !k.match(/w/i) && (L[1] && g == L[1] && f == L[0] - 1 || !L[1] && g == L[0]) || k.match(/w/i) && A.getDay() == +k.replace("w", "")))) n.apply = !0, t[A] = !0;
                        for (r = 0; r < a.length; r++)
                            if (n = a[r], B = d = 0, g = Ia[c], j = P[c],
                                w = L = !0, f = !1, n.start && (n.apply || !n.d && !t[A])) {
                                k = n.start.split(":");
                                p = n.end.split(":");
                                for (l = 0; 3 > l; l++) k[l] === i && (k[l] = 0), p[l] === i && (p[l] = 59), k[l] = +k[l], p[l] = +p[l];
                                if ("tt" == c) g = o(Math.round(((new Date(A)).setHours(k[0], k[1], k[2]) - (new Date(A)).setHours(0, 0, 0, 0)) / 1E3), C, 0, 86400), j = o(Math.round(((new Date(A)).setHours(p[0], p[1], p[2]) - (new Date(A)).setHours(0, 0, 0, 0)) / 1E3), C, 0, 86400);
                                else {
                                    k.unshift(11 < k[0] ? 1 : 0);
                                    p.unshift(11 < p[0] ? 1 : 0);
                                    ea && (12 <= k[1] && (k[1] -= 12), 12 <= p[1] && (p[1] -= 12));
                                    for (l = 0; l < b; l++)
                                        if (z[l] !==
                                            i) {
                                            V = o(k[l], fa[E[l]], Ia[E[l]], P[E[l]]);
                                            u = o(p[l], fa[E[l]], Ia[E[l]], P[E[l]]);
                                            q = m = n = 0;
                                            ea && 1 == l && (n = k[0] ? 12 : 0, m = p[0] ? 12 : 0, q = z[0] ? 12 : 0);
                                            L || (V = 0);
                                            w || (u = P[E[l]]);
                                            if ((L || w) && V + n < z[l] + q && z[l] + q < u + m) f = !0;
                                            z[l] != V && (L = !1);
                                            z[l] != u && (w = !1)
                                        }
                                    if (!h)
                                        for (l = b + 1; 4 > l; l++) 0 < k[l] && (d = fa[c]), p[l] < P[E[l]] && (B = fa[c]);
                                    f || (V = o(k[b], fa[c], Ia[c], P[c]) + d, u = o(p[b], fa[c], Ia[c], P[c]) - B, L && (g = V), w && (j = u))
                                }
                                if (L || w || f)
                                    for (l = g; l <= j; l += fa[c]) e[l] = !h
                            }
                    }
                }
                var C, n, w, q = {},
                    N = {},
                    z = [],
                    H = function(a) {
                        var b, d, f = {};
                        if (a.is("input")) {
                            switch (a.attr("type")) {
                                case "date":
                                    b =
                                        "yy-mm-dd";
                                    break;
                                case "datetime":
                                    b = "yy-mm-ddTHH:ii:ssZ";
                                    break;
                                case "datetime-local":
                                    b = "yy-mm-ddTHH:ii:ss";
                                    break;
                                case "month":
                                    b = "yy-mm";
                                    f.dateOrder = "mmyy";
                                    break;
                                case "time":
                                    b = "HH:ii:ss"
                            }
                            f.format = b;
                            d = a.attr("min");
                            a = a.attr("max");
                            d && (f.min = c.parseDate(b, d));
                            a && (f.max = c.parseDate(b, a))
                        }
                        return f
                    }(b(this));
                w = b.extend({}, f.settings);
                var x = b.extend(f.settings, e.util.datetime.defaults, d, H, w),
                    M = j(x.invalid),
                    ga = j(x.valid),
                    U = x.preset,
                    T = "datetime" == U ? x.dateFormat + x.separator + x.timeFormat : "time" == U ? x.timeFormat :
                    x.dateFormat,
                    L = H.format || T,
                    X = x.dateWheels || x.dateFormat,
                    aa = x.timeWheels || x.timeFormat,
                    V = x.dateWheels || x.dateDisplay,
                    H = x.baseTheme || x.theme,
                    B = x.min || a(x.startYear, 0, 1),
                    Z = x.max || a(x.endYear, 11, 31, 23, 59, 59),
                    la = /time/i.test(U),
                    ea = /h/.test(aa),
                    O = /D/.test(V);
                w = x.steps || {};
                var da = w.hour || x.stepHour || 1,
                    I = w.minute || x.stepMinute || 1,
                    qa = w.second || x.stepSecond || 1,
                    Y = (w = w.zeroBased) ? 0 : B.getHours() % da,
                    S = w ? 0 : B.getMinutes() % I,
                    Ba = w ? 0 : B.getSeconds() % qa,
                    ia = Math.floor(((ea ? 11 : 23) - Y) / da) * da + Y,
                    R = Math.floor((59 - S) / I) * I + S,
                    xa = Math.floor((59 - S) / I) * I + S,
                    Ia = {
                        y: B.getFullYear(),
                        m: 0,
                        d: 1,
                        h: Y,
                        i: S,
                        s: Ba,
                        a: 0,
                        tt: 0
                    },
                    P = {
                        y: Z.getFullYear(),
                        m: 11,
                        d: 31,
                        h: ia,
                        i: R,
                        s: xa,
                        a: 1,
                        tt: 86400
                    },
                    fa = {
                        y: 1,
                        m: 1,
                        d: 1,
                        h: da,
                        i: I,
                        s: qa,
                        a: 1,
                        tt: 1
                    },
                    K = {
                        "android-holo": 40,
                        bootstrap: 46,
                        ios: 50,
                        jqm: 46,
                        material: 46,
                        mobiscroll: 46,
                        wp: 50
                    },
                    ka = {
                        y: function(a) {
                            return x.getYear(a)
                        },
                        m: function(a) {
                            return x.getMonth(a)
                        },
                        d: function(a) {
                            return x.getDay(a)
                        },
                        h: function(a) {
                            a = a.getHours();
                            a = ea && 12 <= a ? a - 12 : a;
                            return o(a, da, Y, ia)
                        },
                        i: function(a) {
                            return o(a.getMinutes(), I, S, R)
                        },
                        s: function(a) {
                            return o(a.getSeconds(),
                                qa, Ba, xa)
                        },
                        u: function(a) {
                            return a.getMilliseconds()
                        },
                        a: function(a) {
                            return 11 < a.getHours() ? 1 : 0
                        },
                        dd: function(a) {
                            return a.getFullYear() + "-" + m(a.getMonth() + 1) + "-" + m(a.getDate())
                        },
                        tt: function(a) {
                            return o(Math.round((a.getTime() - (new Date(a)).setHours(0, 0, 0, 0)) / 1E3), C, 0, 86400)
                        }
                    };
                f.getDate = f.getVal = function(a) {
                    return f._hasValue || a ? u(f.getArrayVal(a)) : null
                };
                f.setDate = function(a, b, c, d, g) {
                    f.setArrayVal(t(a), b, g, d, c)
                };
                w = function() {
                    var a, b, c, d, f, e = 0,
                        j = [],
                        o = [],
                        l = [];
                    if (U.match(/date/i)) {
                        a = X.split(/\|/.test(X) ?
                            "|" : "");
                        for (c = 0; c < a.length; c++)
                            if (b = a[c], d = 0, b.length)
                                if (/y/i.test(b) && d++, /m/i.test(b) && d++, /d/i.test(b) && d++, 1 < d && q.dd === i) q.dd = e, e++, o.push(h(b)), l = o, n = !0;
                                else if (/y/i.test(b) && q.y === i) q.y = e, e++, o.push({
                            cssClass: "mbsc-dt-whl-y",
                            label: x.yearText,
                            min: x.getYear(B),
                            max: x.getYear(Z),
                            data: g,
                            getIndex: r
                        });
                        else if (/m/i.test(b) && q.m === i) {
                            q.m = e;
                            d = [];
                            e++;
                            for (b = 0; 12 > b; b++) f = V.replace(/[dy]/gi, "").replace(/mm/, m(b + 1) + (x.monthSuffix || "")).replace(/m/, b + 1 + (x.monthSuffix || "")), d.push({
                                value: b,
                                display: /MM/.test(f) ?
                                    f.replace(/MM/, '<span class="mbsc-dt-month">' + x.monthNames[b] + "</span>") : f.replace(/M/, '<span class="mbsc-dt-month">' + x.monthNamesShort[b] + "</span>")
                            });
                            o.push({
                                cssClass: "mbsc-dt-whl-m",
                                label: x.monthText,
                                data: d
                            })
                        } else if (/d/i.test(b) && q.d === i) {
                            q.d = e;
                            d = [];
                            e++;
                            for (b = 1; 32 > b; b++) d.push({
                                value: b,
                                display: (/dd/i.test(V) ? m(b) : b) + (x.daySuffix || "")
                            });
                            o.push({
                                cssClass: "mbsc-dt-whl-d",
                                label: x.dayText,
                                data: d
                            })
                        }
                        j.push(o)
                    }
                    if (U.match(/time/i)) {
                        a = aa.split(/\|/.test(aa) ? "|" : "");
                        for (c = 0; c < a.length; c++)
                            if (b = a[c], d = 0,
                                b.length && (/h/i.test(b) && d++, /i/i.test(b) && d++, /s/i.test(b) && d++, /a/i.test(b) && d++), 1 < d && q.tt === i) q.tt = e, e++, l.push(D(b));
                            else if (/h/i.test(b) && q.h === i) {
                            d = [];
                            q.h = e;
                            e++;
                            for (b = Y; b < (ea ? 12 : 24); b += da) d.push({
                                value: b,
                                display: ea && 0 === b ? 12 : /hh/i.test(aa) ? m(b) : b
                            });
                            l.push({
                                cssClass: "mbsc-dt-whl-h",
                                label: x.hourText,
                                data: d
                            })
                        } else if (/i/i.test(b) && q.i === i) {
                            d = [];
                            q.i = e;
                            e++;
                            for (b = S; 60 > b; b += I) d.push({
                                value: b,
                                display: /ii/i.test(aa) ? m(b) : b
                            });
                            l.push({
                                cssClass: "mbsc-dt-whl-i",
                                label: x.minuteText,
                                data: d
                            })
                        } else if (/s/i.test(b) &&
                            q.s === i) {
                            d = [];
                            q.s = e;
                            e++;
                            for (b = Ba; 60 > b; b += qa) d.push({
                                value: b,
                                display: /ss/i.test(aa) ? m(b) : b
                            });
                            l.push({
                                cssClass: "mbsc-dt-whl-s",
                                label: x.secText,
                                data: d
                            })
                        } else /a/i.test(b) && q.a === i && (q.a = e, e++, l.push({
                            cssClass: "mbsc-dt-whl-a",
                            label: x.ampmText,
                            data: /A/.test(b) ? [{
                                value: 0,
                                display: x.amText.toUpperCase()
                            }, {
                                value: 1,
                                display: x.pmText.toUpperCase()
                            }] : [{
                                value: 0,
                                display: x.amText
                            }, {
                                value: 1,
                                display: x.pmText
                            }]
                        }));
                        l != o && j.push(l)
                    }
                    return j
                }();
                f.format = T;
                f.order = q;
                f.handlers.now = function() {
                    f.setDate(new Date, f.live, 1E3, !0, !0)
                };
                f.buttons.now = {
                    text: x.nowText,
                    handler: "now"
                };
                return {
                    minWidth: n && la ? K[H] : i,
                    compClass: "mbsc-dt",
                    wheels: w,
                    headerText: x.headerText ? function() {
                        return c.formatDate(T, u(f.getArrayVal(!0)), x)
                    } : !1,
                    formatValue: function(a) {
                        return c.formatDate(L, u(a), x)
                    },
                    parseValue: function(a) {
                        a || (N = {});
                        return t(a ? c.parseDate(L, a, x) : x.defaultValue && x.defaultValue.getTime ? x.defaultValue : new Date, !!a && !!a.getTime)
                    },
                    validate: function(a) {
                        var c, d, g, e;
                        c = a.index;
                        var h = a.direction,
                            j = f.settings.wheels[0][q.d],
                            n = p(u(a.values),
                                h),
                            a = t(n),
                            o = [],
                            m = {},
                            l = ka.y(n),
                            r = ka.m(n),
                            k = x.getMaxDayOfMonth(l, r),
                            s = !0,
                            L = !0;
                        b.each("dd,y,m,d,tt,a,h,i,s".split(","), function(a, c) {
                            if (q[c] !== i) {
                                var f = Ia[c],
                                    g = P[c],
                                    e = ka[c](n);
                                o[q[c]] = [];
                                s && B && (f = ka[c](B));
                                L && Z && (g = ka[c](Z));
                                if (c != "y" && c != "dd")
                                    for (d = Ia[c]; d <= P[c]; d = d + fa[c])(d < f || d > g) && o[q[c]].push(d);
                                e < f && (e = f);
                                e > g && (e = g);
                                s && (s = e == f);
                                L && (L = e == g);
                                if (c == "d") {
                                    f = x.getDate(l, r, 1).getDay();
                                    g = {};
                                    G(M, l, r, f, k, g, 1);
                                    G(ga, l, r, f, k, g, 0);
                                    b.each(g, function(a, b) {
                                        b && o[q[c]].push(a)
                                    })
                                }
                            }
                        });
                        la && b.each(["a", "h", "i", "s", "tt"],
                            function(a, c) {
                                var d = ka[c](n),
                                    g = ka.d(n),
                                    e = {};
                                q[c] !== i && (J(M, a, c, l, r, g, e, 0), J(ga, a, c, l, r, g, e, 1), b.each(e, function(a, b) {
                                    b && o[q[c]].push(a)
                                }), z[a] = f.getValidValue(q[c], d, h, e))
                            });
                        if (j && (j._length !== k || O && (c === i || c === q.y || c === q.m))) {
                            m[q.d] = j;
                            j.data = [];
                            for (c = 1; c <= k; c++) e = x.getDate(l, r, c).getDay(), g = V.replace(/[my]/gi, "").replace(/dd/, (10 > c ? "0" + c : c) + (x.daySuffix || "")).replace(/d/, c + (x.daySuffix || "")), j.data.push({
                                value: c,
                                display: g.match(/DD/) ? g.replace(/DD/, '<span class="mbsc-dt-day">' + x.dayNames[e] + "</span>") : g.replace(/D/, '<span class="mbsc-dt-day">' + x.dayNamesShort[e] + "</span>")
                            });
                            f._tempWheelArray[q.d] = a[q.d];
                            f.changeWheel(m)
                        }
                        return {
                            disabled: o,
                            valid: a
                        }
                    }
                }
            };
        b.each(["date", "time", "datetime"], function(a, b) {
            e.presets.scroller[b] = o
        })
    })();
    (function() {
        function i(a) {
            var b = [Math.round(a.r).toString(16), Math.round(a.g).toString(16), Math.round(a.b).toString(16)];
            o.each(b, function(a, c) {
                1 == c.length && (b[a] = "0" + c)
            });
            return "#" + b.join("")
        }

        function e(a) {
            a = parseInt(-1 < a.indexOf("#") ? a.substring(1) : a, 16);
            return {
                r: a >> 16,
                g: (a & 65280) >> 8,
                b: a & 255
            }
        }

        function b(a) {
            var b, c, d;
            b = a.h;
            var f = 255 * a.s / 100,
                a = 255 * a.v / 100;
            if (0 === f) b = c = d = a;
            else {
                var f = (255 - f) * a / 255,
                    e = (a - f) * (b % 60) / 60;
                360 == b && (b = 0);
                60 > b ? (b = a, d = f, c = f + e) : 120 > b ? (c = a, d = f, b = a - e) : 180 > b ? (c = a, b = f, d = f + e) : 240 > b ? (d = a, b = f, c = a - e) : 300 > b ? (d = a, c = f, b = f + e) : 360 > b ? (b = a, c = f, d = a - e) : b = c = d = 0
            }
            return {
                r: b,
                g: c,
                b: d
            }
        }

        function c(a) {
            var b = 0,
                c;
            c = Math.min(a.r, a.g, a.b);
            var d = Math.max(a.r, a.g, a.b),
                b = d - c,
                b = (c = d ? 255 * b / d : 0) ? a.r == d ? (a.g - a.b) / b : a.g == d ? 2 + (a.b - a.r) / b : 4 + (a.r - a.g) / b : -1,
                b = 60 * b;
            0 > b && (b += 360);
            return {
                h: b,
                s: c * (100 / 255),
                v: d * (100 / 255)
            }
        }

        function a(a) {
            return i(b(a))
        }

        function f(a) {
            return c(e(a))
        }
        var d = k,
            o = d.$,
            E = d.util.prefix,
            s = d.presets.scroller,
            m = {
                preview: !0,
                previewText: !0,
                label: "Color",
                refineLabel: "Refine",
                step: 10,
                nr: 10,
                format: "hex",
                hueText: "Hue",
                saturationText: "Saturation",
                valueText: "Value"
            };
        d.presetShort("color");
        s.color = function(d) {
            function e(a) {
                return isNaN(+a) ? 0 : +a
            }

            function i(c) {
                return "hsv" == D ? c.join(",") : "rgb" == D ? (c = b({
                        h: c[0],
                        s: c[1],
                        v: c[2]
                    }), Math.round(c.r) + "," + Math.round(c.g) + "," + Math.round(c.b)) :
                    a({
                        h: c[0],
                        s: c[1],
                        v: c[2]
                    })
            }

            function k(a, b, c) {
                a[0].style.backgroundImage = E + ("-webkit-" == E ? "gradient(linear,left top,left bottom,from(" + b + "),to(" + c + "))" : "linear-gradient(" + b + "," + c + ")")
            }

            function s(c, f) {
                var e = d._tempWheelArray;
                1 !== f && 2 !== f && k(o(".mbsc-sc-whl-sc", c).eq(1), a({
                    h: e[0],
                    s: 0,
                    v: 100
                }), a({
                    h: e[0],
                    s: 100,
                    v: 100
                }));
                2 !== f && k(o(".mbsc-sc-whl-sc", c).eq(2), a({
                    h: e[0],
                    s: e[1],
                    v: 0
                }), a({
                    h: e[0],
                    s: e[1],
                    v: 100
                }));
                if (p) {
                    var g = b({
                            h: e[0],
                            s: e[1],
                            v: e[2]
                        }),
                        g = 0.299 * g.r + 0.587 * g.g + 0.114 * g.b;
                    o(".mbsc-color-preview", c).attr("style",
                        "background:" + a({
                            h: e[0],
                            s: e[1],
                            v: e[2]
                        }) + ";color:" + (130 < g ? "#000" : "#fff")).text(l ? i(e) : "")
                }
            }
            var t = o.extend({}, d.settings),
                v = o.extend(d.settings, m, t),
                t = o.isArray(v.colors) ? v.colors : [v.colors],
                h = v.defaultValue || t[0],
                D = v.format,
                p = v.preview,
                l = v.previewText,
                Q = v.hueText,
                G = v.saturationText,
                J = v.valueText;
            return {
                minWidth: 70,
                height: 15,
                rows: 13,
                speedUnit: 0.006,
                timeUnit: 0.05,
                showLabel: !0,
                scroll3d: !1,
                wheels: function() {
                    for (var b = 0, c = {
                            data: [],
                            label: Q
                        }, d = {
                            circular: !1,
                            data: [],
                            label: G
                        }, f = {
                            circular: !1,
                            data: [],
                            label: J
                        }; 360 >
                        b; b += 3) c.data.push({
                        value: b,
                        label: b,
                        display: '<div class="mbsc-color-itm" style="background:' + a({
                            h: b,
                            s: 100,
                            v: 100
                        }) + '"><div class="mbsc-color-itm-a"></div></div>'
                    });
                    for (b = 0; 101 > b; b += 1) d.data.push({
                        value: b,
                        label: b,
                        display: '<div class="mbsc-color-itm"><div class="mbsc-color-itm-a"></div></div>'
                    }), f.data.push({
                        value: b,
                        label: b,
                        display: '<div class="mbsc-color-itm"><div class="mbsc-color-itm-a"></div></div>'
                    });
                    return [
                        [c, d, f]
                    ]
                }(),
                compClass: "mbsc-color",
                parseValue: function(a) {
                    if (a = a || h) {
                        "hsv" == D ? (a = a.split(","),
                            a = {
                                h: e(a[0]),
                                s: e(a[1]),
                                v: e(a[2])
                            }) : "rgb" == D ? (a = a.split(","), a = c({
                            r: e(a[0]),
                            g: e(a[1]),
                            b: e(a[2])
                        })) : (a = a.replace("#", ""), 3 == a.length && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), a = f(a));
                        var b = Math.round(a.h);
                        return [3 * Math.floor(b / 3), Math.round(a.s), Math.round(a.v)]
                    }
                    return [0, 100, 100]
                },
                formatValue: i,
                onBeforeShow: function() {
                    p && (v.headerText = !1)
                },
                onMarkupReady: function(a) {
                    a = o(a.target);
                    p && a.find(".mbsc-sc-whl-gr-c").before('<div class="mbsc-color-preview"></div>');
                    s(a)
                },
                validate: function(a) {
                    d._isVisible && s(d._markup,
                        a.index)
                }
            }
        };
        d.util.color = {
            hsv2hex: a,
            hsv2rgb: b,
            rgb2hsv: c,
            rgb2hex: i,
            hex2rgb: e,
            hex2hsv: f
        }
    })();
    (function(i) {
        var e = k,
            b = e.$,
            c = {
                autostart: !1,
                step: 1,
                useShortLabels: !1,
                labels: "Years,Months,Days,Hours,Minutes,Seconds,".split(","),
                labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
                startText: "Start",
                stopText: "Stop",
                resetText: "Reset",
                lapText: "Lap",
                hideText: "Hide"
            };
        e.presetShort("timer");
        e.presets.scroller.timer = function(a) {
            function f(a) {
                return new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(),
                    a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds())
            }

            function d(a) {
                var c = {};
                if (X && w[U].index > w.days.index) {
                    var d, e, g, h;
                    d = new Date;
                    var i = p ? d : L;
                    d = p ? L : d;
                    d = f(d);
                    i = f(i);
                    c.years = i.getFullYear() - d.getFullYear();
                    c.months = i.getMonth() - d.getMonth();
                    c.days = i.getDate() - d.getDate();
                    c.hours = i.getHours() - d.getHours();
                    c.minutes = i.getMinutes() - d.getMinutes();
                    c.seconds = i.getSeconds() - d.getSeconds();
                    c.fract = (i.getMilliseconds() - d.getMilliseconds()) / 10;
                    for (d = n.length; 0 < d; d--) e = n[d - 1], g = w[e], h = n[b.inArray(e, n) -
                        1], w[h] && 0 > c[e] && (c[h]--, c[e] += "months" == h ? 32 - (new Date(i.getFullYear(), i.getMonth(), 32)).getDate() : g.until + 1);
                    "months" == U && (c.months += 12 * c.years, delete c.years)
                } else b(n).each(function(b, d) {
                    w[d].index <= w[U].index && (c[d] = Math.floor(a / w[d].limit), a -= c[d] * w[d].limit)
                });
                return c
            }

            function e(a) {
                var c = 1,
                    d = w[a],
                    f = d.wheel,
                    h = d.prefix,
                    i = d.until,
                    j = w[n[b.inArray(a, n) - 1]];
                if (d.index <= w[U].index && (!j || j.limit > I))
                    if (q[a] || aa[0].push(f), q[a] = 1, f.data = [], f.label = d.label || "", f.cssClass = "mbsc-timer-whl-" + a, I >= d.limit &&
                        (c = Math.max(Math.round(I / d.limit), 1), A = c * d.limit), a == U) f.min = 0, f.data = function(a) {
                        return {
                            value: a,
                            display: k(a, h, d.label)
                        }
                    }, f.getIndex = function(a) {
                        return a
                    };
                    else
                        for (g = 0; g <= i; g += c) f.data.push({
                            value: g,
                            display: k(g, h, d.label)
                        })
            }

            function k(a, b, c) {
                return (b || "") + (10 > a ? "0" : "") + a + '<span class="mbsc-timer-lbl">' + c + "</span>"
            }

            function s(a) {
                var c = [],
                    f, e = d(a);
                b(n).each(function(a, b) {
                    q[b] && (f = Math.max(Math.round(I / w[b].limit), 1), c.push(Math.round(e[b] / f) * f))
                });
                return c
            }

            function m(a) {
                X ? (h = L - new Date, 0 > h ? (h *= -1, p = !0) : p = !1, D = 0, M = !0) : (L !== i ? (M = !1, h = 1E3 * L, p = "countdown" != J.mode) : (h = 0, M = p = "countdown" != J.mode), a && (D = 0))
            }

            function j() {
                H ? (b(".mbsc-fr-w", l).addClass("mbsc-timer-running mbsc-timer-locked"), b(".mbsc-timer-btn-toggle-c > div", l).text(J.stopText), a.buttons.start.icon && b(".mbsc-timer-btn-toggle-c > div", l).removeClass("mbsc-ic-" + a.buttons.start.icon), a.buttons.stop.icon && b(".mbsc-timer-btn-toggle-c > div", l).addClass("mbsc-ic-" + a.buttons.stop.icon), "stopwatch" == J.mode && (b(".mbsc-timer-btn-resetlap-c > div",
                    l).text(J.lapText), a.buttons.reset.icon && b(".mbsc-timer-btn-resetlap-c > div", l).removeClass("mbsc-ic-" + a.buttons.reset.icon), a.buttons.lap.icon && b(".mbsc-timer-btn-resetlap-c > div", l).addClass("mbsc-ic-" + a.buttons.lap.icon))) : (b(".mbsc-fr-w", l).removeClass("mbsc-timer-running"), b(".mbsc-timer-btn-toggle-c > div", l).text(J.startText), a.buttons.start.icon && b(".mbsc-timer-btn-toggle-c > div", l).addClass("mbsc-ic-" + a.buttons.start.icon), a.buttons.stop.icon && b(".mbsc-timer-btn-toggle-c > div", l).removeClass("mbsc-ic-" +
                    a.buttons.stop.icon), "stopwatch" == J.mode && (b(".mbsc-timer-btn-resetlap-c > div", l).text(J.resetText), a.buttons.reset.icon && b(".mbsc-timer-btn-resetlap-c > div", l).addClass("mbsc-ic-" + a.buttons.reset.icon), a.buttons.lap.icon && b(".mbsc-timer-btn-resetlap-c > div", l).removeClass("mbsc-ic-" + a.buttons.lap.icon)))
            }
            var g, r, A, u, t, v, h, D, p, l, Q, G = b.extend({}, a.settings),
                J = b.extend(a.settings, c, G),
                C = J.useShortLabels ? J.labelsShort : J.labels,
                G = ["toggle", "resetlap"],
                n = "years,months,days,hours,minutes,seconds,fract".split(","),
                w = {
                    years: {
                        index: 6,
                        until: 10,
                        limit: 31536E6,
                        label: C[0],
                        wheel: {}
                    },
                    months: {
                        index: 5,
                        until: 11,
                        limit: 2592E6,
                        label: C[1],
                        wheel: {}
                    },
                    days: {
                        index: 4,
                        until: 31,
                        limit: 864E5,
                        label: C[2],
                        wheel: {}
                    },
                    hours: {
                        index: 3,
                        until: 23,
                        limit: 36E5,
                        label: C[3],
                        wheel: {}
                    },
                    minutes: {
                        index: 2,
                        until: 59,
                        limit: 6E4,
                        label: C[4],
                        wheel: {}
                    },
                    seconds: {
                        index: 1,
                        until: 59,
                        limit: 1E3,
                        label: C[5],
                        wheel: {}
                    },
                    fract: {
                        index: 0,
                        until: 99,
                        limit: 10,
                        label: C[6],
                        prefix: ".",
                        wheel: {}
                    }
                },
                q = {},
                N = [],
                z = 0,
                H = !1,
                x = !0,
                M = !1,
                I = Math.max(10, 1E3 * J.step),
                U = J.maxWheel,
                T = "stopwatch" == J.mode ||
                X,
                L = J.targetTime,
                X = L && L.getTime !== i,
                aa = [
                    []
                ];
            a.start = function() {
                x && a.reset();
                if (!H && (m(), M || !(D >= h))) H = !0, x = !1, t = new Date, u = D, J.readonly = !0, a.setVal(s(p ? D : h - D), !0, !0, !1, 100), r = setInterval(function() {
                    D = new Date - t + u;
                    a.setVal(s(p ? D : h - D), !0, !0, !1, Math.min(100, A - 10));
                    !M && D + A >= h && (clearInterval(r), setTimeout(function() {
                        a.stop();
                        D = h;
                        a.setVal(s(p ? D : 0), !0, !0, !1, 100);
                        a.trigger("onFinish", {
                            time: h
                        });
                        x = !0
                    }, h - D))
                }, A), j(), a.trigger("onStart")
            };
            a.stop = function() {
                H && (H = !1, clearInterval(r), D = new Date - t + u, j(), a.trigger("onStop", {
                    ellapsed: D
                }))
            };
            a.toggle = function() {
                H ? a.stop() : a.start()
            };
            a.reset = function() {
                a.stop();
                D = 0;
                N = [];
                z = 0;
                a.setVal(s(p ? 0 : h), !0, !0, !1, 100);
                a.settings.readonly = T;
                x = !0;
                T || b(".mbsc-fr-w", l).removeClass("mbsc-timer-locked");
                a.trigger("onReset")
            };
            a.lap = function() {
                H && (v = new Date - t + u, Q = v - z, z = v, N.push(v), a.trigger("onLap", {
                    ellapsed: v,
                    lap: Q,
                    laps: N
                }))
            };
            a.resetlap = function() {
                H && "stopwatch" == J.mode ? a.lap() : a.reset()
            };
            a.getTime = function() {
                return h
            };
            a.setTime = function(a) {
                L = a / 1E3;
                h = a
            };
            a.getElapsedTime = a.getEllapsedTime =
                function() {
                    return H ? new Date - t + u : 0
                };
            a.setElapsedTime = a.setEllapsedTime = function(b, c) {
                x || (u = D = b, t = new Date, a.setVal(s(p ? D : h - D), !0, c, !1, 100))
            };
            m(!0);
            !U && !h && (U = "minutes");
            "inline" !== J.display && G.push("hide");
            U || b(n).each(function(a, b) {
                if (!U && h >= w[b].limit) return U = b, !1
            });
            b(n).each(function(a, b) {
                e(b)
            });
            A = Math.max(87, A);
            J.autostart && setTimeout(function() {
                a.start()
            }, 0);
            a.handlers.toggle = a.toggle;
            a.handlers.start = a.start;
            a.handlers.stop = a.stop;
            a.handlers.resetlap = a.resetlap;
            a.handlers.reset = a.reset;
            a.handlers.lap =
                a.lap;
            a.buttons.toggle = {
                parentClass: "mbsc-timer-btn-toggle-c",
                text: J.startText,
                handler: "toggle"
            };
            a.buttons.start = {
                text: J.startText,
                handler: "start"
            };
            a.buttons.stop = {
                text: J.stopText,
                handler: "stop"
            };
            a.buttons.reset = {
                text: J.resetText,
                handler: "reset"
            };
            a.buttons.lap = {
                text: J.lapText,
                handler: "lap"
            };
            a.buttons.resetlap = {
                parentClass: "mbsc-timer-btn-resetlap-c",
                text: J.resetText,
                handler: "resetlap"
            };
            a.buttons.hide = {
                parentClass: "mbsc-timer-btn-hide-c",
                text: J.hideText,
                handler: "cancel"
            };
            return {
                wheels: aa,
                headerText: !1,
                readonly: T,
                buttons: G,
                mode: "countdown",
                compClass: "mbsc-timer",
                parseValue: function() {
                    return s(p ? 0 : h)
                },
                formatValue: function(a) {
                    var c = "",
                        d = 0;
                    b(n).each(function(b, f) {
                        "fract" != f && q[f] && (c += a[d] + ("seconds" == f && q.fract ? "." + a[d + 1] : "") + " " + C[b] + " ", d++)
                    });
                    return c
                },
                validate: function(a) {
                    var c = a.values,
                        a = a.index,
                        d = 0;
                    x && a !== i && (L = 0, b(n).each(function(a, b) {
                        q[b] && (L += w[b].limit * c[d], d++)
                    }), L /= 1E3, m(!0))
                },
                onBeforeShow: function() {
                    J.showLabel = !0
                },
                onMarkupReady: function(a) {
                    l = b(a.target);
                    j();
                    T && b(".mbsc-fr-w", l).addClass("mbsc-timer-locked")
                },
                onPosition: function(a) {
                    b(".mbsc-fr-w", a.target).css("min-width", 0).css("min-width", b(".mbsc-fr-btn-cont", a.target)[0].offsetWidth)
                },
                onDestroy: function() {
                    clearInterval(r)
                }
            }
        }
    })();
    (function(i) {
        var e = k,
            b = e.$,
            c = e.presets.scroller,
            a = e.util.datetime,
            f = e.util.testTouch,
            d = {
                autoCorrect: !0,
                showSelector: !0,
                minRange: 1,
                rangeTap: !0,
                fromText: "Start",
                toText: "End"
            };
        e.presetShort("range");
        c.range = function(e) {
            function k(a, b) {
                a && (a.setFullYear(b.getFullYear()), a.setMonth(b.getMonth()), a.setDate(b.getDate()))
            }

            function s(c,
                d) {
                var f = !0;
                c && p && l && (l - p > z.maxRange - 1 && (q ? p = new Date(l - z.maxRange + 1) : l = new Date(+p + z.maxRange - 1)), l - p < z.minRange - 1 && (q ? p = new Date(l - z.minRange + 1) : l = new Date(+p + z.minRange - 1)));
                if (!p || !l) f = !1;
                if (d) {
                    var e, i, j, n, m, o = 0,
                        k = x || !q ? " mbsc-cal-day-hl mbsc-cal-sel-start" : " mbsc-cal-sel-start",
                        s = x || q ? " mbsc-cal-day-hl mbsc-cal-sel-end" : " mbsc-cal-sel-end";
                    h = p ? a.formatDate(A, p, z) : "";
                    D = l ? a.formatDate(A, l, z) : "";
                    if (g && (b(".mbsc-range-btn-v-start", g).html(h || "&nbsp;"), b(".mbsc-range-btn-v-end", g).html(D || "&nbsp;"),
                            e = p ? new Date(p) : null, j = l ? new Date(l) : null, !e && j && (e = new Date(j)), !j && e && (j = new Date(e)), m = q ? j : e, b(".mbsc-cal-table .mbsc-cal-day-sel .mbsc-cal-day-i", g).removeClass(M), b(".mbsc-cal-table .mbsc-cal-day-hl", g).removeClass(U), b(".mbsc-cal-table .mbsc-cal-day-sel", g).removeClass("mbsc-cal-day-sel mbsc-cal-sel-start mbsc-cal-sel-end").removeAttr("aria-selected"), e && j)) {
                        i = e.setHours(0, 0, 0, 0);
                        for (n = j.setHours(0, 0, 0, 0); j >= e && 84 > o;) b('.mbsc-cal-day[data-full="' + m.getFullYear() + "-" + m.getMonth() + "-" + m.getDate() +
                            '"]', g).addClass("mbsc-cal-day-sel" + (m.getTime() === i ? k : "") + (m.getTime() === n ? s : "")).attr("aria-selected", "true").find(".mbsc-cal-day-i ").addClass(M), m.setDate(m.getDate() + (q ? -1 : 1)), o++
                    }
                }
                return f
            }

            function m() {
                C && g && (b(".mbsc-range-btn-c", g).removeClass("mbsc-range-btn-sel").removeAttr("aria-checked").find(".mbsc-range-btn", g).removeClass(M), b(".mbsc-range-btn-c", g).eq(q).addClass("mbsc-range-btn-sel").attr("aria-checked", "true").find(".mbsc-range-btn").addClass(M))
            }
            var j, g, r, A, u, t, v, h, D, p, l, Q, G, J,
                C, n = e._startDate,
                w = e._endDate,
                q = 0;
            u = new Date;
            var N = b.extend({}, e.settings),
                z = b.extend(e.settings, d, N),
                H = z.anchor,
                x = z.rangeTap,
                M = z.activeClass || "",
                I = "mbsc-fr-btn-d " + (z.disabledClass || ""),
                U = "mbsc-cal-day-hl",
                T = null === z.defaultValue ? [] : z.defaultValue || [new Date(u.setHours(0, 0, 0, 0)), new Date(u.getFullYear(), u.getMonth(), u.getDate() + 6, 23, 59, 59, 999)];
            x && (z.tabs = !0);
            u = c.calbase.call(this, e);
            j = b.extend({}, u);
            A = e.format;
            Q = "time" === z.controls.join("");
            C = 1 == z.controls.length && "calendar" == z.controls[0] ? z.showSelector :
                !0;
            z.startInput && (G = b(z.startInput).prop("readonly"), e.attachShow(b(z.startInput).prop("readonly", !0), function() {
                q = 0;
                z.anchor = H || b(z.startInput)
            }));
            z.endInput && (J = b(z.endInput).prop("readonly"), e.attachShow(b(z.endInput).prop("readonly", !0), function() {
                q = 1;
                z.anchor = H || b(z.endInput)
            }));
            e.setVal = function(b, c, d, f, g) {
                var m = b || [];
                if (m[0] === i || m[0] === null || m[0].getTime) {
                    v = true;
                    h = (p = m[0] || null) ? a.formatDate(A, p, z) : "";
                    q || (b = j.parseValue(h, e))
                }
                if (m[1] === i || m[1] === null || m[1].getTime) {
                    v = true;
                    D = (l = m[1] || null) ?
                        a.formatDate(A, l, z) : "";
                    q && (b = j.parseValue(D, e))
                }
                if (!f) {
                    e._startDate = n = p;
                    e._endDate = w = l
                }
                e._setVal(b, c, d, f, g)
            };
            e.getVal = function(a) {
                return a ? [p, l] : e._hasValue ? [n, w] : null
            };
            e.getDayProps = function(a) {
                var b = p ? new Date(p.getFullYear(), p.getMonth(), p.getDate()) : null,
                    c = l ? new Date(l.getFullYear(), l.getMonth(), l.getDate()) : null;
                return {
                    selected: b && c && a >= b && a <= l,
                    cssClass: ((x || !q) && b && b.getTime() === a.getTime() || (x || q) && c && c.getTime() === a.getTime() ? U : "") + (b && b.getTime() === a.getTime() ? " mbsc-cal-sel-start" : "") + (c &&
                        c.getTime() === a.getTime() ? " mbsc-cal-sel-end" : "")
                }
            };
            e.setActiveDate = function(a) {
                q = a == "start" ? 0 : 1;
                a = a == "start" ? p : l;
                if (e.isVisible()) {
                    m();
                    if (!x) {
                        b(".mbsc-cal-table .mbsc-cal-day-hl", g).removeClass(U);
                        a && b('.mbsc-cal-day[data-full="' + a.getFullYear() + "-" + a.getMonth() + "-" + a.getDate() + '"]', g).addClass(U)
                    }
                    if (a) {
                        t = true;
                        e.setDate(a, false, 1E3, true)
                    }
                }
            };
            e.getValue = e.getVal;
            b.extend(u, {
                highlight: !1,
                outerMonthChange: !1,
                formatValue: function() {
                    return h + (z.endInput ? "" : D ? " - " + D : "")
                },
                parseValue: function(c) {
                    c = c ? c.split(" - ") : [];
                    z.defaultValue = T[1];
                    w = z.endInput ? b(z.endInput).val() ? a.parseDate(A, b(z.endInput).val(), z) : T[1] : c[1] ? a.parseDate(A, c[1], z) : T[1];
                    z.defaultValue = T[0];
                    n = z.startInput ? b(z.startInput).val() ? a.parseDate(A, b(z.startInput).val(), z) : T[0] : c[0] ? a.parseDate(A, c[0], z) : T[0];
                    z.defaultValue = T[q];
                    h = n ? a.formatDate(A, n, z) : "";
                    D = w ? a.formatDate(A, w, z) : "";
                    e._startDate = n;
                    e._endDate = w;
                    return j.parseValue(q ? D : h, e)
                },
                onFill: function(a) {
                    a = a.change;
                    e._startDate = n = p;
                    e._endDate = w = l;
                    if (z.startInput) {
                        b(z.startInput).val(h);
                        a && b(z.startInput).trigger("change")
                    }
                    if (z.endInput) {
                        b(z.endInput).val(D);
                        a && b(z.endInput).trigger("change")
                    }
                },
                onBeforeClose: function(a) {
                    if (a.button === "set" && !s(true, true)) {
                        e.setActiveDate(q ? "start" : "end");
                        return false
                    }
                },
                onHide: function() {
                    j.onHide.call(e);
                    q = 0;
                    g = null;
                    z.anchor = H
                },
                onClear: function() {
                    x && (q = 0)
                },
                onBeforeShow: function() {
                    z.headerText = false;
                    p = n;
                    l = w;
                    if (z.counter) z.headerText = function() {
                        var a = p && l ? Math.max(1, Math.round(((new Date(l)).setHours(0, 0, 0, 0) - (new Date(p)).setHours(0, 0, 0, 0)) / 864E5) + 1) : 0;
                        return (a > 1 ? z.selectedPluralText || z.selectedText : z.selectedText).replace(/{count}/,
                            a)
                    };
                    v = true
                },
                onMarkupReady: function(a) {
                    g = b(a.target);
                    if (p) {
                        t = true;
                        e.setDate(p, false, 0, true);
                        p = e.getDate(true)
                    }
                    if (l) {
                        t = true;
                        e.setDate(l, false, 0, true);
                        l = e.getDate(true)
                    }
                    if (q && l || !q && p) {
                        t = true;
                        e.setDate(q ? l : p, false, 0, true)
                    }
                    j.onMarkupReady.call(this, a);
                    g.addClass("mbsc-range");
                    if (C) {
                        a = '<div class="mbsc-range-btn-t" role="radiogroup"><div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + z.fromText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' +
                            (h || "&nbsp;") + '</div></div></div><div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + z.toText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' + (D || "&nbsp;") + "</div></div></div></div>";
                        b(".mbsc-cal-tabs", g).before(a);
                        m()
                    }
                    b(".mbsc-range-btn-c", g).on("touchstart click", function(a) {
                        if (f(a, this)) {
                            e.showMonthView();
                            e.setActiveDate(b(this).index() ? "end" : "start")
                        }
                    })
                },
                onDayChange: function(a) {
                    a.active = q ? "end" : "start";
                    r = true
                },
                onSetDate: function(a) {
                    var c =
                        a.date,
                        d = e.order;
                    if (!t) {
                        d.h === i && c.setHours(q ? 23 : 0);
                        d.i === i && c.setMinutes(q ? 59 : 0);
                        d.s === i && c.setSeconds(q ? 59 : 0);
                        c.setMilliseconds(q ? 999 : 0);
                        if (!v || r) {
                            if (x && r) {
                                q == 1 && c < p && (q = 0);
                                q ? c.setHours(23, 59, 59, 999) : c.setHours(0, 0, 0, 0)
                            }
                            q ? l = new Date(c) : p = new Date(c);
                            if (Q) {
                                k(p, c);
                                k(l, c)
                            }
                            x && r && !q && (l = null)
                        }
                    }
                    e._isValid = s(v || r || z.autoCorrect, !t);
                    a.active = q ? "end" : "start";
                    if (!t && x) {
                        r && (q = q ? 0 : 1);
                        m()
                    }
                    e.isVisible() && (e._isValid ? b(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup).removeClass(I) : b(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup).addClass(I));
                    t = v = r = false
                },
                onTabChange: function(a) {
                    a.tab != "calendar" && e.setDate(q ? l : p, false, 1E3, true);
                    s(true, true)
                },
                onDestroy: function() {
                    b(z.startInput).prop("readonly", G);
                    b(z.endInput).prop("readonly", J)
                }
            });
            return u
        }
    })();
    (function() {
        var i = k,
            e = i.presets.scroller;
        e.number = e.measurement;
        i.presetShort("number")
    })();
    (function(i, e, b) {
        var c = k,
            a = c.$,
            f = a.extend,
            d = c.util.datetime,
            o = d.adjustedDate,
            E = c.presets.scroller,
            s = {
                labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs".split(","),
                eventText: "event",
                eventsText: "events"
            };
        c.presetShort("eventcalendar");
        E.eventcalendar = function(e) {
            function j(b) {
                if (b) {
                    if (w[b]) return w[b];
                    var c = a('<div style="background-color:' + b + ';"></div>').appendTo("body"),
                        d = (i.getComputedStyle ? getComputedStyle(c[0]) : c[0].style).backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","),
                        d = 130 < 0.299 * d[0] + 0.587 * d[1] + 0.114 * d[2] ? "#000" : "#fff";
                    c.remove();
                    return w[b] = d
                }
            }

            function g(a) {
                return a.sort(function(a, b) {
                    var c = a.d || a.start,
                        d = b.d || b.start,
                        c = !c.getTime ? 0 : a.start && a.end && a.start.toDateString() !== a.end.toDateString() ? 1 : c.getTime(),
                        d = !d.getTime ? 0 : b.start && b.end && b.start.toDateString() !== b.end.toDateString() ? 1 : d.getTime();
                    return c - d
                })
            }

            function k(b) {
                var c;
                c = a(".mbsc-cal-c", v)[0].offsetHeight;
                var d = b[0].offsetHeight,
                    f = b[0].offsetWidth,
                    e = b.offset().top - a(".mbsc-cal-c", v).offset().top,
                    g = 2 > b.closest(".mbsc-cal-row").index();
                c = h.addClass("mbsc-cal-events-t").css({
                    top: g ? e + d : "0",
                    bottom: g ? "0" : c - e
                }).addClass("mbsc-cal-events-v").height();
                h.css(g ? "bottom" : "top", "auto").removeClass("mbsc-cal-events-t");
                Q.css("max-height", c);
                l.refresh();
                l.scroll(0);
                g ? h.addClass("mbsc-cal-events-b") : h.removeClass("mbsc-cal-events-b");
                a(".mbsc-cal-events-arr", h).css("left", b.offset().left - h.offset().left + f / 2)
            }

            function A(b, c) {
                var f = p[b];
                if (f) {
                    var i, n, o, s, w, u = '<ul class="mbsc-cal-event-list">';
                    D = c;
                    c.addClass(N).find(".mbsc-cal-day-i").addClass(H);
                    c.hasClass(z) && c.attr("data-hl", "true").removeClass(z);
                    g(f);
                    a.each(f, function(a, b) {
                        s = b.d || b.start;
                        w = b.start && b.end && b.start.toDateString() !== b.end.toDateString();
                        o = b.color;
                        j(o);
                        n = i = "";
                        s.getTime && (i = d.formatDate((w ?
                            "MM d yy " : "") + q.timeFormat, s));
                        b.end && (n = d.formatDate((w ? "MM d yy " : "") + q.timeFormat, b.end));
                        var c = u,
                            f = '<li role="button" aria-label="' + b.text + (i ? ", " + q.fromText + " " + i : "") + (n ? ", " + q.toText + " " + n : "") + '" class="mbsc-cal-event"><div class="mbsc-cal-event-color" style="' + (o ? "background:" + o + ";" : "") + '"></div><div class="mbsc-cal-event-text">' + (s.getTime && !w ? '<div class="mbsc-cal-event-time">' + d.formatDate(q.timeFormat, s) + "</div>" : "") + b.text + "</div>",
                            e;
                        if (b.start && b.end) {
                            e = q.labelsShort;
                            var g = Math.abs(b.end -
                                    b.start) / 1E3,
                                h = g / 60,
                                m = h / 60,
                                l = m / 24,
                                k = l / 365;
                            e = '<div class="mbsc-cal-event-dur">' + (45 > g && Math.round(g) + " " + e[5].toLowerCase() || 45 > h && Math.round(h) + " " + e[4].toLowerCase() || 24 > m && Math.round(m) + " " + e[3].toLowerCase() || 30 > l && Math.round(l) + " " + e[2].toLowerCase() || 365 > l && Math.round(l / 30) + " " + e[1].toLowerCase() || Math.round(k) + " " + e[0].toLowerCase()) + "</div>"
                        } else e = "";
                        u = c + (f + e + "</li>")
                    });
                    u += "</ul>";
                    G.html(u);
                    e.trigger("onEventBubbleShow", {
                        target: D[0],
                        eventList: h[0]
                    });
                    k(D);
                    e.tap(a(".mbsc-cal-event", G), function(c) {
                        l.scrolled ||
                            e.trigger("onEventSelect", {
                                domEvent: c,
                                event: f[a(this).index()],
                                date: b
                            })
                    });
                    J = !0
                }
            }

            function u() {
                h && h.removeClass("mbsc-cal-events-v");
                D && (D.removeClass(N).find(".mbsc-cal-day-i").removeClass(H), D.attr("data-hl") && D.removeAttr("data-hl").addClass(z));
                J = !1
            }
            var t, v, h, D, p, l, Q, G, J, C, n, w = {};
            C = f({}, e.settings);
            var q = f(e.settings, s, C),
                N = "mbsc-cal-day-sel mbsc-cal-day-ev",
                z = "mbsc-cal-day-hl",
                H = q.activeClass || "",
                x = q.showEventCount,
                M = 0,
                I = f(!0, [], q.data);
            C = E.calbase.call(this, e);
            t = f({}, C);
            a.each(I, function(a, c) {
                c._id ===
                    b && (c._id = M++)
            });
            e.onGenMonth = function(a, b) {
                p = e.prepareObj(I, a, b)
            };
            e.getDayProps = function(b) {
                var c = p[b] ? p[b] : !1,
                    d = c ? p[b].length + " " + (1 < p[b].length ? q.eventsText : q.eventText) : 0,
                    f = c && c[0] && c[0].color,
                    e = x && d ? j(f) : "",
                    g = "",
                    h = "";
                if (c) {
                    for (b = 0; b < c.length; b++) c[b].icon && (g += '<span class="mbsc-ic mbsc-ic-' + c[b].icon + '"' + (c[b].text ? "" : c[b].color ? ' style="color:' + c[b].color + ';"' : "") + "></span>\n");
                    h = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
                    for (b = 0; b < c.length; b++) h += '<div class="mbsc-cal-day-m-c"' +
                        (c[b].color ? ' style="background:' + c[b].color + ';"' : "") + "></div>";
                    h += "</div></div>"
                }
                return {
                    marked: c,
                    selected: !1,
                    cssClass: c ? "mbsc-cal-day-marked" : "",
                    ariaLabel: x ? d : "",
                    markup: x && d ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + a("<div>" + d + "</div>").text() + '"' + (f ? ' style="background:' + f + ";color:" + e + ';text-shadow:none;"' : "") + ">" + g + d + "</div></div>" : x && g ? '<div class="mbsc-cal-day-ic-c">' + g + "</div>" : c ? h : ""
                }
            };
            e.addEvent = function(c) {
                var d = [],
                    c = f(!0, [], a.isArray(c) ? c : [c]);
                a.each(c, function(a,
                    c) {
                    c._id === b && (c._id = M++);
                    I.push(c);
                    d.push(c._id)
                });
                u();
                e.redraw();
                return d
            };
            e.removeEvent = function(b) {
                b = a.isArray(b) ? b : [b];
                a.each(b, function(b, c) {
                    a.each(I, function(a, b) {
                        if (b._id === c) return I.splice(a, 1), !1
                    })
                });
                u();
                e.redraw()
            };
            e.getEvents = function(a) {
                var b;
                return a ? (a.setHours(0, 0, 0, 0), b = e.prepareObj(I, a.getFullYear(), a.getMonth()), b[a] ? g(b[a]) : []) : f(!0, [], I)
            };
            e.setEvents = function(c) {
                var d = [];
                I = f(!0, [], c);
                a.each(I, function(a, c) {
                    c._id === b && (c._id = M++);
                    d.push(c._id)
                });
                u();
                e.redraw();
                return d
            };
            f(C, {
                highlight: !1,
                outerMonthChange: !1,
                headerText: !1,
                buttons: "inline" !== q.display ? ["cancel"] : q.buttons,
                onMarkupReady: function(b) {
                    t.onMarkupReady.call(this, b);
                    v = a(b.target);
                    x && a(".mbsc-cal", v).addClass("mbsc-cal-ev");
                    v.addClass("mbsc-cal-em");
                    h = a('<div class="mbsc-cal-events ' + (q.eventBubbleClass || "") + '"><div class="mbsc-cal-events-arr"></div><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div></div></div>').appendTo(a(".mbsc-cal-c", v));
                    Q = a(".mbsc-cal-events-i", h);
                    G = a(".mbsc-cal-events-sc", h);
                    l = new c.classes.ScrollView(Q[0]);
                    J = !1;
                    e.tap(Q, function() {
                        l.scrolled || u()
                    })
                },
                onMonthChange: function() {
                    u()
                },
                onSelectShow: function() {
                    u()
                },
                onMonthLoaded: function() {
                    n && (A(n.d, a('.mbsc-cal-day-v[data-full="' + n.full + '"]:not(.mbsc-cal-day-diff)', v)), n = !1)
                },
                onDayChange: function(b) {
                    var c = o(b.date.getFullYear(), b.date.getMonth(), b.date.getDate()),
                        d = a(b.target);
                    u();
                    d.hasClass("mbsc-cal-day-ev") || setTimeout(function() {
                        e.changing ? n = {
                            d: c,
                            full: d.attr("data-full")
                        } : A(c, d)
                    }, 10);
                    return !1
                },
                onCalResize: function() {
                    J && k(D)
                }
            });
            return C
        }
    })(window, document);
    (function() {
        var i = k,
            e = i.$,
            b = i.presets.scroller,
            c = {
                min: 0,
                max: 100,
                defaultUnit: "km",
                units: "m,km,in,ft,yd,mi".split(",")
            },
            a = {
                mm: 0.001,
                cm: 0.01,
                dm: 0.1,
                m: 1,
                dam: 10,
                hm: 100,
                km: 1E3,
                "in": 0.0254,
                ft: 0.3048,
                yd: 0.9144,
                ch: 20.1168,
                fur: 201.168,
                mi: 1609.344,
                lea: 4828.032
            };
        i.presetShort("distance");
        b.distance = function(f) {
            var d = e.extend({}, c, f.settings);
            e.extend(f.settings, d, {
                sign: !1,
                convert: function(b, c, d) {
                    return b * a[c] / a[d]
                }
            });
            return b.measurement.call(this, f)
        }
    })();
    (function() {
        var i = k,
            e = i.$,
            b = i.presets.scroller,
            c = {
                min: 0,
                max: 100,
                defaultUnit: "N",
                units: ["N", "kp", "lbf", "pdl"]
            },
            a = {
                N: 1,
                kp: 9.80665,
                lbf: 4.448222,
                pdl: 0.138255
            };
        i.presetShort("force");
        b.force = function(f) {
            var d = e.extend({}, c, f.settings);
            e.extend(f.settings, d, {
                sign: !1,
                convert: function(b, c, d) {
                    return b * a[c] / a[d]
                }
            });
            return b.measurement.call(this, f)
        }
    })();
    (function() {
        var i = k,
            e = i.$,
            b = i.presets.scroller,
            c = {
                min: 0,
                max: 1E3,
                defaultUnit: "kg",
                units: ["g", "kg", "oz", "lb"],
                unitNames: {
                    tlong: "t (long)",
                    tshort: "t (short)"
                }
            },
            a = {
                mg: 0.001,
                cg: 0.01,
                dg: 0.1,
                g: 1,
                dag: 10,
                hg: 100,
                kg: 1E3,
                t: 1E6,
                drc: 1.7718452,
                oz: 28.3495,
                lb: 453.59237,
                st: 6350.29318,
                qtr: 12700.58636,
                cwt: 50802.34544,
                tlong: 1016046.9088,
                tshort: 907184.74
            };
        i.presetShort("mass");
        b.mass = function(f) {
            var d = e.extend({}, c, f.settings);
            e.extend(f.settings, d, {
                sign: !1,
                convert: function(b, c, d) {
                    return b * a[c] / a[d]
                }
            });
            return b.measurement.call(this, f)
        }
    })();
    (function() {
        var i = k,
            e = i.$,
            b = i.presets.scroller,
            c = {
                min: 0,
                max: 100,
                defaultUnit: "kph",
                units: ["kph", "mph", "mps", "fps", "knot"],
                unitNames: {
                    kph: "km/h",
                    mph: "mi/h",
                    mps: "m/s",
                    fps: "ft/s",
                    knot: "knot"
                }
            },
            a = {
                kph: 1,
                mph: 1.60934,
                mps: 3.6,
                fps: 1.09728,
                knot: 1.852
            };
        i.presetShort("speed");
        b.speed = function(f) {
            var d = e.extend({}, c, f.settings);
            e.extend(f.settings, d, {
                sign: !1,
                convert: function(b, c, d) {
                    return b * a[c] / a[d]
                }
            });
            return b.measurement.call(this, f)
        }
    })();
    (function() {
        var i = k,
            e = i.$,
            b = i.presets.scroller,
            c = {
                min: -20,
                max: 40,
                defaultUnit: "c",
                units: ["c", "k", "f", "r"],
                unitNames: {
                    c: "\u00b0C",
                    k: "K",
                    f: "\u00b0F",
                    r: "\u00b0R"
                }
            },
            a = {
                c2k: function(a) {
                    return a + 273.15
                },
                c2f: function(a) {
                    return 9 * a / 5 + 32
                },
                c2r: function(a) {
                    return 9 * (a + 273.15) /
                        5
                },
                k2c: function(a) {
                    return a - 273.15
                },
                k2f: function(a) {
                    return 9 * a / 5 - 459.67
                },
                k2r: function(a) {
                    return 9 * a / 5
                },
                f2c: function(a) {
                    return 5 * (a - 32) / 9
                },
                f2k: function(a) {
                    return 5 * (a + 459.67) / 9
                },
                f2r: function(a) {
                    return a + 459.67
                },
                r2c: function(a) {
                    return 5 * (a - 491.67) / 9
                },
                r2k: function(a) {
                    return 5 * a / 9
                },
                r2f: function(a) {
                    return a - 459.67
                }
            };
        i.presetShort("temperature");
        b.temperature = function(f) {
            var d = e.extend({}, c, f.settings);
            e.extend(f.settings, d, {
                sign: !0,
                convert: function(b, c, d) {
                    return a[c + "2" + d](b)
                }
            });
            return b.measurement.call(this,
                f)
        }
    })();
    (function(i, e, b) {
        var c = k,
            a = c.$,
            f = a.extend,
            d = c.classes;
        d.MenuStrip = function(e, k) {
            function s(a) {
                clearTimeout(n);
                n = setTimeout(function() {
                    u("load" !== a.type)
                }, 200)
            }

            function m(c, d) {
                if (c.length) {
                    var f = c.offset().left,
                        e = c[0].offsetLeft,
                        h = c[0].offsetWidth,
                        i = v.offset().left;
                    t = c;
                    d === b && (d = !J);
                    w && d && (J ? c.attr("data-selected") ? g(c) : j(c) : (g(a(".mbsc-ms-item-sel", T)), j(c)));
                    "a" == z ? f < i ? N.scroll(-e, I, !0) : f + h > i + p && N.scroll(p - e - h, I, !0) : N.scroll(p / 2 - e - h / 2, I, !0);
                    d && M("onItemTap", {
                        target: c[0]
                    })
                }
            }

            function j(a) {
                a.addClass(q).attr("data-selected",
                    "true").attr("aria-selected", "true")
            }

            function g(a) {
                a.removeClass(q).removeAttr("data-selected").removeAttr("aria-selected")
            }

            function r(b) {
                "object" !== typeof b && (b = T.children('[data-id="' + b + '"]'));
                return a(b)
            }

            function A() {
                M("onMarkupInit");
                T.children().each(function(b) {
                    var c, d = a(this),
                        f = w && "true" == d.attr("data-selected"),
                        e = "true" == d.attr("data-disabled"),
                        g = d.attr("data-icon");
                    0 === b && (h = d);
                    w && !J && f && (t = d);
                    1 !== d.children().length && a("<span></span>").append(d.contents()).appendTo(d);
                    c = d.children().eq(0);
                    g && (l = !0);
                    c.hasClass("mbsc-ms-item-i") || (c.html() && (Q = !0), b = a('<span class="mbsc-ms-item-i-t"><span class="mbsc-ms-item-i-c"></span></span>'), b.find(".mbsc-ms-item-i-c").append(c.contents()), c.addClass("mbsc-ms-item-i" + (g ? " mbsc-ms-ic mbsc-ic mbsc-ic-" + g : "")).append(b), d.attr("data-role", "button").attr("aria-selected", f ? "true" : null).attr("aria-disabled", e ? "true" : null).addClass("mbsc-ms-item mbsc-btn-e " + (H.itemClass || "") + (f ? q : "") + (e ? " mbsc-btn-d " + (H.disabledClass || "") : "")), d.find(".mbsc-ms-item-i").append(U._processItem(a,
                        0.2)))
                });
                l && v.addClass("mbsc-ms-icons");
                Q && v.addClass("mbsc-ms-txt")
            }

            function u(a, b) {
                var d = H.itemWidth,
                    e = H.layout;
                U.contWidth = p = v.width();
                a && C === p || (C = p, c.util.isNumeric(e) && (G = p ? p / e : d, G < d && (e = "liquid")), d && ("liquid" == e ? G = p ? p / Math.min(Math.floor(p / d), T.children().length) : d : "fixed" == e && (G = d)), G && T.children().css("width", G + "px"), T.contents().filter(function() {
                    return this.nodeType == 3 && !/\S/.test(this.nodeValue)
                }).remove(), U.totalWidth = x = T.width(), f(N.settings, {
                    contSize: p,
                    maxSnapScroll: H.paging ? 1 : !1,
                    maxScroll: 0,
                    minScroll: x > p ? p - x : 0,
                    snap: H.paging ? p : H.snap ? G || ".mbsc-ms-item" : !1,
                    elastic: x > p ? G || p : !1
                }), N.refresh(b))
            }
            var t, v, h, D, p, l, Q, G, J, C, n, w, q, N, z, H, x, M, I = 1E3,
                U = this,
                T = a(e);
            d.Base.call(this, e, k, !0);
            U._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1fce1711cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            U.navigate = function(a, b) {
                m(r(a), b)
            };
            U.next = function(a) {
                var b = t ? t.next() : h;
                b.length && (t = b, m(t, a))
            };
            U.prev = function(a) {
                var b = t ? t.prev() : h;
                b.length && (t = b, m(t, a))
            };
            U.select = function(b) {
                J || g(a(".mbsc-ms-item-sel", T));
                j(r(b))
            };
            U.deselect = function(a) {
                g(r(a))
            };
            U.enable = function(a) {
                r(a).removeClass("mbsc-btn-d").removeAttr("data-disabled").removeAttr("aria-disabled")
            };
            U.disable = function(a) {
                r(a).addClass("mbsc-btn-d").attr("data-disabled", "true").attr("aria-disabled", "true")
            };
            U.refresh = U.position = function(a) {
                T.height("");
                A();
                u(!1, a);
                T.height(T.height())
            };
            U.init = function(d) {
                U._init(d);
                D = a("body" == H.context ? i : H.context);
                "tabs" == H.type ? (H.select = H.select || "single", H.variant = H.variant || "b") : "options" == H.type ? (H.select = H.select || "multiple", H.variant = H.variant || "a") : "menu" == H.type && (H.select = H.select || "off", H.variant = H.variant || "a");
                H.itemWidth && H.snap === b && (H.snap = !0);
                z = H.variant;
                w = "off" != H.select;
                J = "multiple" == H.select;
                q = " mbsc-ms-item-sel " + (H.activeClass || "");
                d = "mbsc-ms-c mbsc-ms-" + z + " mbsc-ms-" + H.display + " mbsc-" + H.theme + " " + (H.baseTheme ? " mbsc-" + H.baseTheme : "") + " " + (H.cssClass || "") + " " + (H.wrapperClass || "") + (H.rtl ? " mbsc-ms-rtl" : " mbsc-ms-ltr") + (H.itemWidth ? " mbsc-ms-hasw" : "") + ("body" == H.context ? "" : " mbsc-ms-ctx") + (w ? "" : " mbsc-ms-nosel");
                v ? (T.height(""), v.attr("class", d)) : (v = a('<div class="' + d + '"><div class="mbsc-ms-sc"></div></div>').insertAfter(T), v.find(".mbsc-ms-sc").append(T),
                    N = new c.classes.ScrollView(v[0], {
                        axis: "X",
                        contSize: 0,
                        maxScroll: 0,
                        maxSnapScroll: 1,
                        minScroll: 0,
                        snap: 1,
                        elastic: 1,
                        rtl: H.rtl,
                        mousewheel: H.mousewheel,
                        onBtnTap: function(b) {
                            m(a(b.target), true)
                        },
                        onGestureStart: function(a) {
                            M("onGestureStart", a)
                        },
                        onGestureEnd: function(a) {
                            M("onGestureEnd", a)
                        },
                        onMove: function(a) {
                            M("onMove", a)
                        },
                        onAnimationStart: function(a) {
                            M("onAnimationStart", a)
                        },
                        onAnimationEnd: function(a) {
                            M("onAnimationEnd", a)
                        }
                    }));
                T.css("display", "").addClass("mbsc-ms " + (H.groupClass || ""));
                A();
                M("onMarkupReady", {
                    target: v[0]
                });
                T.height(T.height());
                u();
                v.find("img").on("load", s);
                D.on("orientationchange resize", s);
                M("onInit")
            };
            U.destroy = function() {
                D.off("orientationchange resize", s);
                T.height("").insertAfter(v).find(".mbsc-ms-item").width("");
                v.remove();
                N.destroy();
                U._destroy()
            };
            H = U.settings;
            M = U.trigger;
            U.init(k)
        };
        d.MenuStrip.prototype = {
            _class: "menustrip",
            _hasDef: !0,
            _hasTheme: !0,
            _defaults: {
                context: "body",
                type: "options",
                display: "inline",
                layout: "liquid"
            }
        };
        c.presetShort("menustrip", "MenuStrip")
    })(window, document);
    k.themes.menustrip["android-holo"] = {};
    k.themes.menustrip.wp = {};
    (function() {
        var i = k.$;
        k.themes.menustrip.material = {
            onInit: function() {
                k.themes.material.initRipple(i(this), ".mbsc-ms-item", "mbsc-btn-d", "mbsc-btn-nhl")
            },
            onMarkupInit: function() {
                i(".mbsc-ripple", this).remove()
            }
        }
    })();
    k.themes.menustrip.ios = {};
    k.themes.menustrip.bootstrap = {
        wrapperClass: "popover panel panel-default",
        groupClass: "btn-group",
        activeClass: "btn-primary",
        disabledClass: "disabled",
        itemClass: "btn btn-default"
    };
    (function() {
        var i = k,
            e =
            i.$,
            b = i.classes;
        b.Widget = function(c, a, f) {
            function d(a) {
                e(".dwcc", a).append(j._processItem(e, 0.7));
                !e(".mbsc-fr-c", a).hasClass("mbsc-wdg-c") && k.running && (e(".mbsc-fr-c", a).addClass("mbsc-wdg-c").append(m.show()), e(".mbsc-w-p", a).length || e(".mbsc-fr-c", a).addClass("mbsc-w-p"))
            }
            var i, E, s, m = e(c),
                j = this;
            b.Frame.call(this, c, a, !0);
            j._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c +=
                    "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1fce1711cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                        a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            j._generateContent = function() {
                return ""
            };
            j._markupReady = function(a) {
                "inline" != i.display && d(a)
            };
            j._markupInserted = function(a) {
                "inline" == i.display && d(a);
                a.trigger("mbsc-enhance", [{
                    theme: i.theme,
                    lang: i.lang
                }])
            };
            j._markupRemove = function() {
                m.hide();
                E ? E.prepend(m) : s.after(m)
            };
            j._processSettings = function() {
                i = j.settings;
                j.buttons.close = {
                    text: i.closeText,
                    handler: "cancel"
                };
                j.buttons.ok = {
                    text: i.okText,
                    handler: "set"
                };
                i.buttons = i.buttons || ("inline" == i.display ? [] : ["ok"]);
                i.cssClass = (i.cssClass || "") + " mbsc-wdg";
                !E && !s && (s = m.prev(), s.length || (E = m.parent()));
                m.hide()
            };
            f || j.init(a)
        };
        b.Widget.prototype = {
            _hasDef: !0,
            _hasTheme: !0,
            _hasContent: !0,
            _class: "widget",
            _defaults: e.extend({}, b.Frame.prototype._defaults, {
                okText: "OK"
            })
        };
        i.themes.widget = i.themes.frame;
        i.presetShort("widget", "Widget", !1)
    })();
    (function(i) {
        var e = k,
            b = e.$,
            c = {
                wheelOrder: "hhiiss",
                useShortLabels: !1,
                min: 0,
                max: Infinity,
                labels: "Years,Months,Days,Hours,Minutes,Seconds".split(","),
                labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs".split(",")
            };
        e.presetShort("timespan");
        e.presets.scroller.timespan = function(a) {
            function f(a) {
                var c = {};
                b(v).each(function(b, d) {
                    c[d] = l[d] ? Math.floor(a / h[d].limit) : 0;
                    a -= c[d] * h[d].limit
                });
                return c
            }

            function d(a) {
                var b = !1,
                    c = p[l[a] - 1] || 1,
                    d = h[a],
                    f = d.label,
                    e = d.wheel;
                e.data = [];
                e.label = d.label;
                t.match(RegExp(d.re + d.re, "i")) && (b = !0);
                if (a == Q) e.min = g[a], e.max = r[a], e.data = function(a) {
                    return {
                        value: a,
                        display: o(a * c, b, f)
                    }
                }, e.getIndex = function(a) {
                    return Math.round(a / c)
                };
                else
                    for (s = 0; s <= d.until; s += c) e.data.push({
                        value: s,
                        display: o(s, b, f)
                    })
            }

            function o(a, b, c) {
                return (10 > a && b ? "0" : "") + a + '<span class="mbsc-ts-lbl">' + c + "</span>"
            }

            function k(a) {
                var c = 0;
                b.each(D, function(b, d) {
                    isNaN(+a[0]) || (c += h[d.v].limit * a[b])
                });
                return c
            }
            var s, m, j, g, r, A = b.extend({}, a.settings),
                u = b.extend(a.settings, c, A),
                t = u.wheelOrder,
                A = u.useShortLabels ? u.labelsShort : u.labels,
                v = "years,months,days,hours,minutes,seconds".split(","),
                h = {
                    years: {
                        ord: 0,
                        index: 6,
                        until: 10,
                        limit: 31536E6,
                        label: A[0],
                        re: "y",
                        wheel: {}
                    },
                    months: {
                        ord: 1,
                        index: 5,
                        until: 11,
                        limit: 2592E6,
                        label: A[1],
                        re: "m",
                        wheel: {}
                    },
                    days: {
                        ord: 2,
                        index: 4,
                        until: 31,
                        limit: 864E5,
                        label: A[2],
                        re: "d",
                        wheel: {}
                    },
                    hours: {
                        ord: 3,
                        index: 3,
                        until: 23,
                        limit: 36E5,
                        label: A[3],
                        re: "h",
                        wheel: {}
                    },
                    minutes: {
                        ord: 4,
                        index: 2,
                        until: 59,
                        limit: 6E4,
                        label: A[4],
                        re: "i",
                        wheel: {}
                    },
                    seconds: {
                        ord: 5,
                        index: 1,
                        until: 59,
                        limit: 1E3,
                        label: A[5],
                        re: "s",
                        wheel: {}
                    }
                },
                D = [],
                p = u.steps || [],
                l = {},
                Q = "seconds",
                G = u.defaultValue || Math.max(u.min, Math.min(0, u.max)),
                J = [
                    []
                ];
            b(v).each(function(a, b) {
                m = t.search(RegExp(h[b].re, "i")); - 1 < m && (D.push({
                    o: m,
                    v: b
                }), h[b].index > h[Q].index && (Q = b))
            });
            D.sort(function(a, b) {
                return a.o > b.o ? 1 : -1
            });
            b.each(D, function(a, b) {
                l[b.v] = a + 1;
                J[0].push(h[b.v].wheel)
            });
            g = f(u.min);
            r = f(u.max);
            b.each(D, function(a, b) {
                d(b.v)
            });
            a.getVal = function(b, c) {
                return c ? a._getVal(b) : a._hasValue || b ? k(a.getArrayVal(b)) : null
            };
            return {
                showLabel: !0,
                wheels: J,
                compClass: "mbsc-ts",
                parseValue: function(a) {
                    var c = [],
                        d;
                    e.util.isNumeric(a) || !a ? (j = f(a || G), b.each(D, function(a, b) {
                            c.push(j[b.v])
                        })) :
                        b.each(D, function(b, f) {
                            d = RegExp("(\\d+)\\s?(" + u.labels[h[f.v].ord] + "|" + u.labelsShort[h[f.v].ord] + ")", "gi").exec(a);
                            c.push(d ? d[1] : 0)
                        });
                    b(c).each(function(a, b) {
                        c[a] = Math.floor(b / (p[a] || 1)) * (p[a] || 1)
                    });
                    return c
                },
                formatValue: function(a) {
                    var c = "";
                    b.each(D, function(b, d) {
                        c += +a[b] ? a[b] + " " + h[d.v].label + " " : ""
                    });
                    return c ? c.replace(/\s+$/g, "") : 0
                },
                validate: function(c) {
                    var d, e, j, m, o = c.values,
                        s = c.direction,
                        p = [],
                        t = !0,
                        u = !0;
                    b(v).each(function(c, v) {
                        if (l[v] !== i) {
                            j = l[v] - 1;
                            p[j] = [];
                            m = {};
                            if (v != Q) {
                                if (t)
                                    for (e = r[v] + 1; e <=
                                        h[v].until; e++) m[e] = !0;
                                if (u)
                                    for (e = 0; e < g[v]; e++) m[e] = !0
                            }
                            o[j] = a.getValidValue(j, o[j], s, m);
                            d = f(k(o));
                            t = t && d[v] == r[v];
                            u = u && d[v] == g[v];
                            b.each(m, function(a) {
                                p[j].push(a)
                            })
                        }
                    });
                    return {
                        disabled: p
                    }
                }
            }
        }
    })();
    (function(i) {
        var e = k,
            b = e.$,
            c = e.util,
            a = c.isString,
            f = {
                inputClass: "",
                invalid: [],
                rtl: !1,
                showInput: !0,
                groupLabel: "Groups",
                checkIcon: "checkmark",
                dataText: "text",
                dataValue: "value",
                dataGroup: "group",
                dataDisabled: "disabled"
            };
        e.presetShort("select");
        e.presets.scroller.select = function(d) {
            function e() {
                var a, c, d, f, g, j =
                    0,
                    m = 0,
                    n = {};
                Q = {};
                h = {};
                l = [];
                v = [];
                aa.length = 0;
                I ? b.each(w.data, function(b, e) {
                    f = e[w.dataText];
                    g = e[w.dataValue];
                    c = e[w.dataGroup];
                    d = {
                        value: g,
                        text: f,
                        index: b
                    };
                    Q[g] = d;
                    l.push(d);
                    U && (n[c] === i ? (a = {
                        text: c,
                        value: m,
                        options: [],
                        index: m
                    }, h[m] = a, n[c] = m, v.push(a), m++) : a = h[n[c]], L && (d.index = a.options.length), d.group = n[c], a.options.push(d));
                    e[w.dataDisabled] && aa.push(g)
                }) : U ? b("optgroup", C).each(function(a) {
                    h[a] = {
                        text: this.label,
                        value: a,
                        options: [],
                        index: a
                    };
                    v.push(h[a]);
                    b("option", this).each(function(b) {
                        d = {
                            value: this.value,
                            text: this.text,
                            index: L ? b : j++,
                            group: a
                        };
                        Q[this.value] = d;
                        l.push(d);
                        h[a].options.push(d);
                        this.disabled && aa.push(this.value)
                    })
                }) : b("option", C).each(function(a) {
                    d = {
                        value: this.value,
                        text: this.text,
                        index: a
                    };
                    Q[this.value] = d;
                    l.push(d);
                    this.disabled && aa.push(this.value)
                });
                l.length && (u = l[0].value);
                X && (l = [], j = 0, b.each(h, function(a, c) {
                    g = "__group" + a;
                    d = {
                        text: c.text,
                        value: g,
                        group: a,
                        index: j++,
                        cssClass: "mbsc-sel-gr"
                    };
                    Q[g] = d;
                    l.push(d);
                    aa.push(d.value);
                    b.each(c.options, function(a, b) {
                        b.index = j++;
                        l.push(b)
                    })
                }))
            }

            function k(a,
                b, c) {
                var d, f = [];
                for (d = 0; d < a.length; d++) f.push({
                    value: a[d].value,
                    display: a[d].text,
                    cssClass: a[d].cssClass
                });
                return {
                    circular: !1,
                    multiple: b,
                    data: f,
                    label: c
                }
            }

            function s() {
                return k(L ? h[t].options : l, z, M)
            }

            function m() {
                var a, b = [
                    []
                ];
                T && (a = k(v, !1, w.groupLabel), N ? b[0][D] = a : b[D] = [a]);
                a = s();
                N ? b[0][G] = a : b[G] = [a];
                return b
            }

            function j(c) {
                z && (c && a(c) && (c = c.split(",")), b.isArray(c) && (c = c[0]));
                p = c === i || null === c || "" === c || !Q[c] ? u : c;
                T && (t = Q[p] ? Q[p].group : null)
            }

            function g() {
                var a = d.getVal();
                A.val(d._tempValue);
                C.val(a)
            }

            function r() {
                var a = {};
                a[G] = s();
                J = !0;
                d.changeWheel(a)
            }
            var A, u, t, v, h, D, p, l, Q, G, J, C = b(this),
                n = b.extend({}, d.settings),
                w = b.extend(d.settings, f, n),
                q = w.readonly,
                n = w.layout || (/top|bottom/.test(w.display) ? "liquid" : ""),
                N = "liquid" == n,
                z = c.isNumeric(w.select) ? w.select : "multiple" == w.select || C.prop("multiple"),
                H = this.id + "_dummy",
                x = b('label[for="' + this.id + '"]').attr("for", H),
                M = w.label !== i ? w.label : x.length ? x.text() : C.attr("name"),
                I = !!w.data,
                U = I ? !!w.group : b("optgroup", C).length,
                x = w.group,
                T = U && x && !1 !== x.groupWheel,
                L = U && x && T && !0 === x.clustered,
                X = U && (!x || !1 !== x.header && !L),
                x = C.val() || [],
                aa = [];
            d.setVal = function(b, f, e, g, h) {
                z && (b && a(b) && (b = b.split(",")), d._tempSelected[G] = c.arrayToObject(b), g || (d._selected[G] = c.arrayToObject(b)), b = b ? b[0] : null);
                d._setVal(b, f, e, g, h)
            };
            d.getVal = function(a, b) {
                var f;
                f = z ? c.objectToArray(a ? d._tempSelected[G] : d._selected[G]) : (f = a ? d._tempWheelArray : d._hasValue ? d._wheelArray : null) ? w.group && b ? f : f[G] : null;
                return f
            };
            d.refresh = function() {
                var a = {};
                e();
                w.wheels = m();
                j(p);
                a[G] = s();
                d._tempWheelArray[G] = p;
                T && (a[D] = k(v, !1, w.groupLabel),
                    d._tempWheelArray[D] = t);
                d._isVisible && d.changeWheel(a, 0, !0)
            };
            w.invalid.length || (w.invalid = aa);
            T ? (D = 0, G = 1) : (D = -1, G = 0);
            z && (C.prop("multiple", !0), d._selected[G] = {}, x && a(x) && (x = x.split(",")), d._selected[G] = c.arrayToObject(x));
            b("#" + H).remove();
            C.next().is("input.mbsc-control") ? A = C.off(".mbsc-form").next().removeAttr("tabindex") : (A = b('<input type="text" id="' + H + '" class="mbsc-control mbsc-control-ev ' + w.inputClass + '" readonly />'), w.showInput && A.insertBefore(C));
            d.attachShow(A.attr("placeholder", w.placeholder ||
                ""));
            C.addClass("mbsc-sel-hdn").attr("tabindex", -1);
            e();
            j(C.val());
            return {
                layout: n,
                headerText: !1,
                anchor: A,
                compClass: "mbsc-sel" + (T ? " mbsc-sel-gr-whl" : "") + (z ? " mbsc-sel-multi" : ""),
                setOnTap: T ? [!1, !0] : !0,
                formatValue: function(a) {
                    var b, c = [];
                    if (z) {
                        for (b in d._tempSelected[G]) c.push(Q[b] ? Q[b].text : "");
                        return c.join(", ")
                    }
                    a = a[G];
                    return Q[a] ? Q[a].text : ""
                },
                parseValue: function(a) {
                    j(a === i ? C.val() : a);
                    return T ? [t, p] : [p]
                },
                validate: function(a) {
                    var a = a.index,
                        b = [];
                    b[G] = w.invalid;
                    L && !J && a === i && r();
                    J = false;
                    return {
                        disabled: b
                    }
                },
                onRead: g,
                onFill: g,
                onBeforeShow: function() {
                    if (z && w.counter) w.headerText = function() {
                        var a = 0;
                        b.each(d._tempSelected[G], function() {
                            a++
                        });
                        return (a > 1 ? w.selectedPluralText || w.selectedText : w.selectedText).replace(/{count}/, a)
                    };
                    j(C.val());
                    d.settings.wheels = m();
                    J = true
                },
                onWheelGestureStart: function(a) {
                    if (a.index == D) w.readonly = [false, true]
                },
                onWheelAnimationEnd: function(a) {
                    var b = d.getArrayVal(true);
                    if (a.index == D) {
                        w.readonly = q;
                        if (b[D] != t) {
                            t = b[D];
                            p = h[t].options[0].value;
                            b[G] = p;
                            L ? r() : d.setArrayVal(b, false, false,
                                true, 1E3)
                        }
                    } else if (a.index == G && b[G] != p) {
                        p = b[G];
                        if (T && Q[p].group != t) {
                            t = Q[p].group;
                            b[D] = t;
                            d.setArrayVal(b, false, false, true, 1E3)
                        }
                    }
                },
                onDestroy: function() {
                    A.hasClass("mbsc-control") || A.remove();
                    C.removeClass("mbsc-sel-hdn").removeAttr("tabindex")
                }
            }
        }
    })();
    (function(i) {
        var e = k,
            b = e.$,
            c = {
                inputClass: "",
                values: 5,
                order: "desc",
                style: "icon",
                invalid: [],
                icon: {
                    filled: "star3",
                    empty: "star3"
                }
            };
        e.presetShort("rating");
        e.presets.scroller.rating = function(a) {
            var f = b.extend({}, a.settings),
                d = b.extend(a.settings, c, f),
                o = b(this),
                f = this.id + "_dummy",
                k = b('label[for="' + this.id + '"]').attr("for", f),
                s = d.label !== i ? d.label : k.length ? k.text() : o.attr("name"),
                m = d.defaultValue,
                k = [
                    []
                ],
                s = {
                    data: [],
                    label: s,
                    circular: !1
                },
                j = {},
                g = [],
                r, A = !1,
                u, t, v, h, D, p, l = "grade" === d.style ? "circle" : "icon";
            o.is("select") && (d.values = {}, b("option", o).each(function() {
                d.values[b(this).val()] = b(this).text()
            }), b("#" + f).remove());
            if (b.isArray(d.values))
                for (u = 0; u < d.values.length; u++) v = +d.values[u], isNaN(v) && (v = u + 1, A = !0), g.push({
                    order: v,
                    key: d.values[u],
                    value: d.values[u]
                });
            else if (b.isPlainObject(d.values))
                for (t in u = 1, A = !0, d.values) v = +t, isNaN(v) && (v = u), g.push({
                    order: v,
                    key: t,
                    value: d.values[t]
                }), u++;
            else
                for (u = 1; u <= d.values; u++) g.push({
                    order: u,
                    key: u,
                    value: u
                });
            d.showText === i && A && (d.showText = !0);
            d.icon.empty === i && (d.icon.empty = d.icon.filled);
            g.sort(function(a, b) {
                return d.order == "desc" ? b.order - a.order : a.order - b.order
            });
            p = "desc" == d.order ? g[0].order : g[g.length - 1].order;
            for (u = 0; u < g.length; u++) {
                D = g[u].order;
                v = g[u].key;
                h = g[u].value;
                A = "";
                for (t = 1; t < D + 1; t++) A += '<span class="mbsc-rating-' +
                    l + ("circle" === l ? "" : " mbsc-ic mbsc-ic-" + d.icon.filled) + ' ">' + ("circle" == l ? t : " ") + "</span>";
                for (t = D + 1; t <= p; t++) A += '<span class="mbsc-rating-' + l + ("circle" === l ? " mbsc-rating-circle-unf" : " mbsc-ic mbsc-ic-" + (d.icon.empty ? d.icon.empty + " mbsc-rating-icon-unf" : "") + (d.icon.empty === d.icon.filled ? " mbsc-rating-icon-same" : "")) + '"></span>';
                m === i && (m = v);
                A += d.showText ? '<span class="mbsc-rating-txt">' + h + "</span>" : "";
                s.data.push({
                    value: v,
                    display: A,
                    label: h
                });
                j[v] = h
            }
            o.is("select") && (r = b('<input type="text" id="' + f +
                '" value="' + j[o.val()] + '" class="' + d.inputClass + '" placeholder="' + (d.placeholder || "") + '" readonly />').insertBefore(o));
            k[0].push(s);
            r && a.attachShow(r);
            o.is("select") && o.hide().closest(".ui-field-contain").trigger("create");
            a.getVal = function(b) {
                b = a._hasValue ? a[b ? "_tempWheelArray" : "_wheelArray"][0] : null;
                return e.util.isNumeric(b) ? +b : b
            };
            return {
                anchor: r,
                wheels: k,
                headerText: !1,
                compClass: "mbsc-rating",
                setOnTap: !0,
                formatValue: function(a) {
                    return j[a[0]]
                },
                parseValue: function(a) {
                    for (var b in j)
                        if (r && b == a ||
                            !r && j[b] == a) return [b];
                    return [m]
                },
                validate: function() {
                    return {
                        disabled: [d.invalid]
                    }
                },
                onFill: function(b) {
                    if (r) {
                        r.val(b.valueText);
                        o.val(a._tempWheelArray[0])
                    }
                },
                onDestroy: function() {
                    r && r.remove();
                    o.show()
                }
            }
        }
    })();
    (function() {
        k.$.each(["date", "time", "datetime"], function(i, e) {
            k.presetShort(e)
        })
    })();
    (function(i, e, b) {
        var e = k,
            c = e.$,
            a = c.extend,
            f = e.util,
            d = f.datetime,
            o = d.adjustedDate,
            E = e.presets.scroller,
            s = {};
        e.presetShort("calendar");
        E.calendar = function(e) {
            function j(a) {
                return o(a.getFullYear(), a.getMonth(),
                    a.getDate())
            }
            var g, k, A, u, t, v, h, D = {};
            h = a({}, e.settings);
            var p = a(e.settings, s, h),
                l = p.activeClass || "",
                I = "multiple" == p.select || 1 < p.select || "week" == p.selectType,
                G = f.isNumeric(p.select) ? p.select : Infinity,
                J = !!p.events,
                C = {};
            h = E.calbase.call(this, e);
            g = a({}, h);
            A = p.firstSelectDay === b ? p.firstDay : p.firstSelectDay;
            if (I && p.defaultValue && p.defaultValue.length)
                for (u = 0; u < p.defaultValue.length; u++) C[j(p.defaultValue[u])] = p.defaultValue[u];
            e.onGenMonth = function(a, b) {
                t = e.prepareObj(p.events || p.marked, a, b)
            };
            e.getDayProps =
                function(a) {
                    var d, f = I ? C[a] !== b : b,
                        e = (a = t[a] ? t[a] : !1) && a[0] && a[0].text,
                        g = a && a[0] && a[0].color;
                    if (J && e)
                        if (g)
                            if (D[g]) d = D[g];
                            else {
                                d = c('<div style="background-color:' + g + ';"></div>').appendTo("body");
                                var h = (i.getComputedStyle ? getComputedStyle(d[0]) : d[0].style).backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","),
                                    h = 130 < 0.299 * h[0] + 0.587 * h[1] + 0.114 * h[2] ? "#000" : "#fff";
                                d.remove();
                                d = D[g] = h
                            }
                    else d = void 0;
                    else d = "";
                    var h = d,
                        j = "",
                        m = "";
                    if (a) {
                        for (d = 0; d < a.length; d++) a[d].icon && (j += '<span class="mbsc-ic mbsc-ic-' +
                            a[d].icon + '"' + (a[d].text ? "" : a[d].color ? ' style="color:' + a[d].color + ';"' : "") + "></span>\n");
                        m = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
                        for (d = 0; d < a.length; d++) m += '<div class="mbsc-cal-day-m-c"' + (a[d].color ? ' style="background:' + a[d].color + ';"' : "") + "></div>";
                        m += "</div></div>"
                    }
                    return {
                        marked: a,
                        selected: f,
                        cssClass: a ? "mbsc-cal-day-marked" : "",
                        ariaLabel: J ? e : "",
                        markup: J && e ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + c("<div>" + e + "</div>").text() + '"' + (g ? ' style="background:' +
                            g + ";color:" + h + ';text-shadow:none;"' : "") + ">" + j + e + "</div></div>" : J && j ? '<div class="mbsc-cal-day-ic-c">' + j + "</div>" : a ? m : ""
                    }
                };
            e.addValue = function(a) {
                C[j(a)] = a;
                e.refresh()
            };
            e.removeValue = function(a) {
                delete C[j(a)];
                e.refresh()
            };
            e.setVal = function(a, b, c, d, f) {
                if (I) {
                    var g = a;
                    C = {};
                    if (g && g.length)
                        for (u = 0; u < g.length; u++) C[j(g[u])] = g[u];
                    a = a ? a[0] : null
                }
                e._setVal(a, b, c, d, f);
                e.refresh()
            };
            e.getVal = function(a) {
                return I ? f.objectToArray(C) : e.getDate(a)
            };
            a(h, {
                highlight: !I,
                outerMonthChange: !I,
                parseValue: function(a) {
                    var b,
                        c;
                    if (I && a && "string" === typeof a) {
                        C = {};
                        a = a.split(",");
                        for (b = 0; b < a.length; b++) c = d.parseDate(e.format, a[b].replace(/^\s+|\s+$/g, ""), p), C[j(c)] = c;
                        a = a[0]
                    }
                    I && p.defaultValue && p.defaultValue.length && (p.defaultValue = p.defaultValue[0]);
                    return g.parseValue.call(this, a)
                },
                formatValue: function(a) {
                    var b, c = [];
                    if (I) {
                        for (b in C) c.push(d.formatDate(e.format, C[b], p));
                        return c.join(", ")
                    }
                    return g.formatValue.call(this, a)
                },
                onClear: function() {
                    I && (C = {}, e.refresh())
                },
                onBeforeShow: function() {
                    if (p.setOnDayTap === b && (!p.buttons ||
                            !p.buttons.length)) p.setOnDayTap = !0;
                    p.setOnDayTap && "inline" != p.display && (p.outerMonthChange = !1);
                    p.counter && I && (p.headerText = function() {
                        var a = 0,
                            b = p.selectType == "week" ? 7 : 1;
                        c.each(C, function() {
                            a++
                        });
                        a = Math.round(a / b);
                        return (a > 1 ? p.selectedPluralText || p.selectedText : p.selectedText).replace(/{count}/, a)
                    })
                },
                onMarkupReady: function(b) {
                    g.onMarkupReady.call(this, b);
                    k = c(b.target);
                    I && (c(".mbsc-fr-hdr", k).attr("aria-live", "off"), v = a({}, C));
                    J && c(".mbsc-cal", k).addClass("mbsc-cal-ev")
                },
                onDayChange: function(a) {
                    var b =
                        a.date,
                        d = j(b),
                        g = c(a.target),
                        a = a.selected;
                    if (I)
                        if ("week" == p.selectType) {
                            var h, i = d.getDay() - A,
                                i = 0 > i ? 7 + i : i;
                            "multiple" != p.select && (C = {});
                            for (g = 0; 7 > g; g++) h = o(d.getFullYear(), d.getMonth(), d.getDate() - i + g), a ? delete C[h] : f.objectToArray(C).length / 7 < G && (C[h] = h);
                            e.refresh()
                        } else g = c('.mbsc-cal .mbsc-cal-day[data-full="' + g.attr("data-full") + '"]', k), a ? (g.removeClass("mbsc-cal-day-sel").removeAttr("aria-selected").find(".mbsc-cal-day-i").removeClass(l), delete C[d]) : f.objectToArray(C).length < G && (g.addClass("mbsc-cal-day-sel").attr("aria-selected",
                            "true").find(".mbsc-cal-day-i").addClass(l), C[d] = d);
                    if (p.setOnDayTap && "multiple" != p.select && "inline" != p.display) return e.needsSlide = !1, e.setDate(b), e.select(), !1
                },
                onCancel: function() {
                    !e.live && I && (C = a({}, v))
                }
            });
            return h
        }
    })(window, document);
    (function() {
        var i = k,
            e = i.presets.scroller;
        e.treelist = e.list;
        i.presetShort("list");
        i.presetShort("treelist")
    })();
    (function() {
        var i = k,
            e = i.$,
            b = i.presets.scroller;
        i.presetShort("image");
        b.image = function(c) {
            c.settings.enhance && (c._processMarkup = function(a) {
                var b = a.attr("data-icon");
                a.children().each(function(a, b) {
                    b = e(b);
                    b.is("img") ? e('<div class="mbsc-img-c"></div>').insertAfter(b).append(b.addClass("mbsc-img")) : b.is("p") && b.addClass("mbsc-img-txt")
                });
                b && a.prepend('<div class="mbsc-ic mbsc-ic-' + b + '"></div');
                a.html('<div class="mbsc-img-w">' + a.html() + "</div>");
                return a.html()
            });
            return b.list.call(this, c)
        }
    })();
    (function() {
        function i(a, b) {
            var d = E(b, "X", !0),
                g = E(b, "Y", !0),
                i = a.offset(),
                k = d - i.left,
                o = g - i.top,
                k = Math.max(k, a[0].offsetWidth - k),
                o = Math.max(o, a[0].offsetHeight - o),
                o = 2 * Math.sqrt(Math.pow(k,
                    2) + Math.pow(o, 2));
            e(c);
            c = f('<span class="mbsc-ripple"></span>').css({
                width: o,
                height: o,
                top: g - i.top - o / 2,
                left: d - i.left - o / 2
            }).appendTo(a);
            setTimeout(function() {
                c.addClass("mbsc-ripple-scaled mbsc-ripple-visible")
            }, 10)
        }

        function e(a) {
            setTimeout(function() {
                a && (a.removeClass("mbsc-ripple-visible"), setTimeout(function() {
                    a.remove()
                }, 2E3))
            }, 100)
        }
        var b, c, a = k,
            f = a.$,
            d = a.util,
            o = d.testTouch,
            E = d.getCoord;
        a.themes.material = {
            addRipple: i,
            removeRipple: function() {
                e(c)
            },
            initRipple: function(a, d, j, g) {
                var k, A;
                a.off(".mbsc-ripple").on("touchstart.mbsc-ripple mousedown.mbsc-ripple",
                    d,
                    function(a) {
                        o(a, this) && (k = E(a, "X"), A = E(a, "Y"), b = f(this), !b.hasClass(j) && !b.hasClass(g) ? i(b, a) : b = null)
                    }).on("touchmove.mbsc-ripple mousemove.mbsc-ripple", d, function(a) {
                    if (b && 9 < Math.abs(E(a, "X") - k) || 9 < Math.abs(E(a, "Y") - A)) e(c), b = null
                }).on("touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple", d, function() {
                    b && (setTimeout(function() {
                        e(c)
                    }, 100), b = null)
                })
            }
        }
    })();
    k.themes.frame["ios-dark"] = {
        baseTheme: "ios",
        display: "bottom",
        dateOrder: "MMdyy",
        rows: 5,
        height: 34,
        minWidth: 55,
        scroll3d: !0,
        headerText: !1,
        showLabel: !1,
        btnWidth: !1,
        selectedLineBorder: 1,
        useShortLabels: !0,
        deleteIcon: "ios-backspace",
        checkIcon: "ion-ios7-checkmark-empty",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5"
    };
    k.themes.listview["ios-dark"] = {
        baseTheme: "ios"
    };
    k.themes.menustrip["ios-dark"] = {
        baseTheme: "ios"
    };
    k.themes.form["ios-dark"] = {
        baseTheme: "ios"
    };
    k.themes.progress["ios-dark"] = {
        baseTheme: "ios"
    };
    (function() {
        var i = k.$;
        k.themes.frame["material-dark"] = {
            baseTheme: "material",
            showLabel: !1,
            headerText: !1,
            btnWidth: !1,
            selectedLineBorder: 2,
            dateOrder: "MMddyy",
            weekDays: "min",
            deleteIcon: "material-backspace",
            icon: {
                filled: "material-star",
                empty: "material-star-outline"
            },
            checkIcon: "material-check",
            btnPlusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-down",
            btnMinusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-up",
            btnCalPrevClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-left",
            btnCalNextClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-right",
            onMarkupReady: function(e) {
                k.themes.material.initRipple(i(e.target), ".mbsc-fr-btn-e", "mbsc-fr-btn-d", "mbsc-fr-btn-nhl")
            },
            onEventBubbleShow: function(e) {
                var b = i(e.eventList),
                    e = 2 > i(e.target).closest(".mbsc-cal-row").index(),
                    c = i(".mbsc-cal-event-color", b).eq(e ? 0 : -1).css("background-color");
                i(".mbsc-cal-events-arr", b).css("border-color", e ? "transparent transparent " + c + " transparent" : c + "transparent transparent transparent")
            }
        };
        k.themes.listview["material-dark"] = {
            baseTheme: "material",
            onItemActivate: function(e) {
                k.themes.material.addRipple(i(e.target),
                    e.domEvent)
            },
            onItemDeactivate: function() {
                k.themes.material.removeRipple()
            },
            onSlideStart: function(e) {
                i(".mbsc-ripple", e.target).remove()
            },
            onSortStart: function(e) {
                i(".mbsc-ripple", e.target).remove()
            }
        };
        k.themes.menustrip["material-dark"] = {
            baseTheme: "material",
            onInit: function() {
                k.themes.material.initRipple(i(this), ".mbsc-ms-item", "mbsc-btn-d", "mbsc-btn-nhl")
            }
        };
        k.themes.form["material-dark"] = {
            baseTheme: "material",
            onControlActivate: function(e) {
                var b, c = i(e.target);
                if ("button" == c[0].type || "submit" == c[0].type) b =
                    c;
                "segmented" == c.attr("data-role") && (b = c.next());
                c.hasClass("mbsc-stepper-control") && !c.hasClass("mbsc-step-disabled") && (b = c.find(".mbsc-segmented-content"));
                b && k.themes.material.addRipple(b, e.domEvent)
            },
            onControlDeactivate: function() {
                k.themes.material.removeRipple()
            }
        };
        k.themes.progress["material-dark"] = {
            baseTheme: "material"
        }
    })();
    k.themes.frame["android-holo-light"] = {
        baseTheme: "android-holo",
        dateOrder: "Mddyy",
        rows: 5,
        minWidth: 76,
        height: 36,
        showLabel: !1,
        selectedLineBorder: 2,
        useShortLabels: !0,
        icon: {
            filled: "star3",
            empty: "star"
        },
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down6",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up6"
    };
    k.themes.listview["android-holo-light"] = {
        baseTheme: "android-holo"
    };
    k.themes.menustrip["android-holo-light"] = {
        baseTheme: "android-holo"
    };
    k.themes.form["android-holo-light"] = {
        baseTheme: "android-holo"
    };
    k.themes.progress["android-holo-light"] = {
        baseTheme: "android-holo"
    };
    (function() {
        var i = k.$;
        k.themes.frame["wp-light"] = {
            baseTheme: "wp",
            minWidth: 76,
            height: 76,
            dateDisplay: "mmMMddDDyy",
            headerText: !1,
            showLabel: !1,
            deleteIcon: "backspace4",
            icon: {
                filled: "star3",
                empty: "star"
            },
            btnWidth: !1,
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left2",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right2",
            btnPlusClass: "mbsc-ic mbsc-ic-plus",
            btnMinusClass: "mbsc-ic mbsc-ic-minus",
            onMarkupInserted: function(e, b) {
                var c, a, f, d = e.target,
                    k = b.settings;
                i(".mbsc-sc-whl", d).on("touchstart mousedown wheel mousewheel", function(b) {
                    var e;
                    if (!(e = "mousedown" === b.type && a)) e = i(this).attr("data-index"), e = i.isArray(k.readonly) ? k.readonly[e] : k.readonly;
                    e || (a = "touchstart" ===
                        b.type, c = !0, f = i(this).hasClass("mbsc-sc-whl-wpa"), i(".mbsc-sc-whl", d).removeClass("mbsc-sc-whl-wpa"), i(this).addClass("mbsc-sc-whl-wpa"))
                }).on("touchmove mousemove", function() {
                    c = !1
                }).on("touchend mouseup", function(b) {
                    c && f && i(b.target).closest(".mbsc-sc-itm").hasClass("mbsc-sc-itm-sel") && i(this).removeClass("mbsc-sc-whl-wpa");
                    "mouseup" === b.type && (a = !1);
                    c = !1
                })
            },
            onInit: function(e, b) {
                var c = b.buttons;
                c.set.icon = "checkmark";
                c.cancel.icon = "close";
                c.clear.icon = "close";
                c.ok && (c.ok.icon = "checkmark");
                c.close &&
                    (c.close.icon = "close");
                c.now && (c.now.icon = "loop2");
                c.toggle && (c.toggle.icon = "play3");
                c.start && (c.start.icon = "play3");
                c.stop && (c.stop.icon = "pause2");
                c.reset && (c.reset.icon = "stop2");
                c.lap && (c.lap.icon = "loop2");
                c.hide && (c.hide.icon = "close")
            }
        };
        k.themes.listview["wp-light"] = {
            baseTheme: "wp"
        };
        k.themes.menustrip["wp-light"] = {
            baseTheme: "wp"
        };
        k.themes.form["wp-light"] = {
            baseTheme: "wp"
        };
        k.themes.progress["wp-light"] = {
            baseTheme: "wp"
        }
    })();
    k.themes.frame["mobiscroll-dark"] = {
        baseTheme: "mobiscroll",
        rows: 5,
        showLabel: !1,
        headerText: !1,
        btnWidth: !1,
        selectedLineBorder: 1,
        dateOrder: "MMddyy",
        weekDays: "min",
        checkIcon: "ion-ios7-checkmark-empty",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
    };
    k.themes.listview["mobiscroll-dark"] = {
        baseTheme: "mobiscroll"
    };
    k.themes.menustrip["mobiscroll-dark"] = {
        baseTheme: "mobiscroll"
    };
    k.themes.form["mobiscroll-dark"] = {
        baseTheme: "mobiscroll"
    };
    k.themes.progress["mobiscroll-dark"] = {
        baseTheme: "mobiscroll"
    };
    I = I || {
        module: function() {
            return this
        },
        directive: function() {
            return this
        },
        animation: function() {
            return this
        }
    };
    k = k || {};
    k.ng = {};
    (function() {
        var i = k.$,
            e = k.instances;
        k.ng = {
            getDDO: function(b, c, a, e, d, o, E, s) {
                d = d || k.ng.read;
                e = e || k.ng.render;
                o = o || k.ng.parse;
                E = E || k.ng.format;
                return {
                    restrict: "A",
                    require: "?ngModel",
                    priority: I.version && 1 == I.version.major && 2 == I.version.minor ? 1 : void 0,
                    link: function(m, j, g, r) {
                        j = i(j[0]);
                        k.ng.addWatch(b, m, r, j, g, c, e, d, o, E);
                        j.mobiscroll(I.extend(k.ng.getOpt(m, g, c,
                            r, s, j), a || {}));
                        g.mobiscrollInstance && b(g.mobiscrollInstance).assign(m, j.mobiscroll("getInst"))
                    }
                }
            },
            getOpt: function(b, c, a, e, d, i) {
                var E = b.$eval(c.mobiscrollOptions || "{}"),
                    i = d ? i.closest("[mbsc-form-opt]") : null;
                d && (E = I.extend({}, k.ng.formOptions[i.attr("id")] || {}, E));
                e && I.extend(E, b.$eval(c[a] || "{}"));
                return E
            },
            read: function(b, c, a, f, d, i, k) {
                var s = e[a.attr("id")];
                s && (a = k(a, s.getVal()), i ? i.$setViewValue(a) : d[c] && b(d[c]).assign(f, a))
            },
            render: function(b, c) {
                var a = e[b.attr("id")];
                a && !I.equals(a.getVal(), c) &&
                    a.setVal(c, !0, !1)
            },
            parse: function(b) {
                b = i(b[0]).mobiscroll("getVal");
                return i.isArray(b) && !b.length ? null : b
            },
            format: function(b, c) {
                return i.isArray(c) && !c.length ? null : c
            },
            addWatch: function(b, c, a, e, d, i, E, s, m, j) {
                E = E || k.ng.render;
                s = s || k.ng.read;
                m = m || k.ng.parse;
                j = j || k.ng.format;
                a && (a.$render = function() {}, a.$parsers.unshift(function(a) {
                    return m(e, a)
                }), a.$formatters.push(function(a) {
                    return j(e, a)
                }));
                c.$watch(function() {
                    return a ? a.$modelValue : b(d[i])(c)
                }, function(a) {
                    E(e, a)
                }, !0);
                e.on("change", function() {
                    c.$$phase ?
                        s(b, i, e, c, d, a, j) : c.$apply(function() {
                            s(b, i, e, c, d, a, j)
                        })
                })
            },
            formOptions: {}
        };
        I.module("mobiscroll-scroller", []).directive("mobiscrollScroller", ["$parse", function(b) {
            return k.ng.getDDO(b, "mobiscrollScroller")
        }])
    })();
    (function() {
        var i, e, b = k,
            c = b.platform,
            a = b.themes,
            f = b.$;
        "android" == c.name ? i = 5 <= c.majorVersion ? "material" : "android-holo" : "ios" == c.name ? i = "ios" : "wp" == c.name && (i = "wp");
        f.each(a, function(a, c) {
            f.each(c, function(a, c) {
                if (c.baseTheme == i && "android-holo-light" != a && "material-dark" != a && "wp-light" != a &&
                    "ios-dark" != a) return b.autoTheme = a, e = !0, !1;
                a == i && (b.autoTheme = a)
            });
            if (e) return !1
        })
    })();
    (function() {
        I.module("mobiscroll-progress", []).directive("mobiscrollProgress", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollProgress", {
                component: "Progress"
            }, void 0, void 0, void 0, void 0, !0)
        }])
    })();
    (function() {
        I.module("mobiscroll-slider", []).directive("mobiscrollSlider", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollSlider", {
                component: "Slider"
            }, void 0, void 0, void 0, void 0, !0)
        }])
    })();
    (function() {
        function i(a,
            b, d) {
            a = c(c.parseHTML ? c.parseHTML(a) : a);
            1 == a.length && a.is("li") || c(a[0]).is("li") ? (a = a.clone(), c(a[0]).attr("ng-repeat-start", "item in " + b), c(a).filter("li").eq(-1).attr("ng-repeat-end", "").attr("mobiscroll-listview-item", d)) : (a = c("<li></li>").append(a.clone()), a.attr("ng-repeat", "item in " + b).attr("mobiscroll-listview-item", d));
            return a
        }

        function e(a) {
            var b = 0,
                c = 0;
            if (!a) return b;
            for (c; c < a.length; c++) b++, a[c].children && a[c].children.length && (b += e(a[c].children));
            return b
        }
        var b, c = k.$,
            a = +new Date,
            f = [],
            d = {},
            o = {};
        try {
            b = I.module("ngAnimate")
        } catch (E) {}
        b && f.push("ngAnimate");
        I.module("mobiscroll-listview", f).directive("mobiscrollListviewItem", ["$compile", "$timeout", function(a, b) {
            return {
                link: function(e, f, i) {
                    var k, o, t = c(f[0]),
                        v = t.parent("ul"),
                        f = i.mobiscrollListviewItem,
                        h = d[f],
                        i = t.parents(".mbsc-lv-cont").length;
                    h.nodesLeft--;
                    if (v && (i || 0 === h.nodesLeft)) i ? (k = v.children("li").not(".mbsc-lv-back").index(t), t.addClass("mbsc-lv-item").hide(), v.hasClass("mbsc-lv-root") ? b(function() {
                        v.mobiscroll("add", null,
                            t.show(), k, void 0, v)
                    }) : b(function() {
                        v.prepend(v.children(".mbsc-lv-back"));
                        o = v.parent("li");
                        c(h.rootNode).mobiscroll("add", null, t.show(), k, void 0, o.length ? o : v)
                    })) : e.$emit("mbscLvLastItemAdded", h.rootNode);
                    t.append(a('<div style="display:none;"><ul><li mobiscroll-listview-hitem="' + f + '" ng-repeat="item in item.children"></li></ul></div>')(e)[0])
                }
            }
        }]).directive("mobiscrollListviewHitem", ["$compile", "$timeout", function(a) {
            return {
                link: function(b, d, e) {
                    var f = c(d[0]).parent(),
                        d = f.parent().hasClass("mbsc-lv-ng-init"),
                        e = e.mobiscrollListviewHitem;
                    1 >= f.children("li").not(".mbsc-lv-back").length && !d && f.parent().addClass("mbsc-lv-ng-init").parent().append(a(c("<ul></ul>").append(i(o[e], "item.children", e)))(b.$parent)[0]);
                    b.$on("$destroy", function() {
                        f && !f.children("li").length && (f = f.parent().parent().children("ul"), f.remove())
                    })
                }
            }
        }]).directive("mobiscrollListview", ["$compile", "$parse", "$timeout", function(b, f, j) {
            return {
                restrict: "A",
                require: "?ngModel",
                compile: function(f) {
                    var k, m = a++,
                        u = f.html().replace(/(mbsc-ng-)|(ms-ng-)/g,
                            "ng-").trim();
                    return function(a, f, g, E) {
                        var p, l = c(f[0]);
                        E || g.mobiscrollData ? (p = a.$eval(g.mobiscrollListview || "{}"), f = g.mobiscrollData || g.ngModel) : (p = a.$eval(g.mobiscrollOptions || "{}"), f = g.mobiscrollListview);
                        E = e(a.$eval(f));
                        d[m] = {
                            rootNode: l,
                            allNodes: E,
                            nodesLeft: E
                        };
                        o[m] = u;
                        k = c("<div></div>").append(i(u, f, m));
                        l.empty().append(c(b(k)(a)[0]).contents());
                        a.$on("mbscLvLastItemAdded", function(b, c) {
                            l[0] == c[0] && j(function() {
                                l.mobiscroll().listview(p);
                                g.mobiscrollInstance && (a[g.mobiscrollInstance] = l.mobiscroll("getInst"))
                            })
                        });
                        0 === E && a.$emit("mbscLvLastItemAdded", l)
                    }
                }
            }
        }]);
        b && I.module("mobiscroll-listview").animation(".mbsc-lv-item", function() {
            return {
                leave: function(a, b) {
                    var d = c(a[0]);
                    d.closest(".mbsc-lv-cont").find(".mbsc-lv-root").mobiscroll("remove", d, "right", b)
                }
            }
        })
    })();
    (function() {
        var i = +new Date,
            e = k.$;
        I.module("mobiscroll-form", []).directive("mobiscrollForm", ["$parse", function(b) {
            return {
                restrict: "A",
                compile: function() {
                    return {
                        pre: function(b, a, e) {
                            b = k.ng.getOpt(b, e, "mobiscrollForm", !0);
                            e = e.id;
                            e || (e = "mbsc-form-" + i++, a.attr("id",
                                e));
                            a.attr("mbsc-form-opt", "");
                            k.ng.formOptions[e] = {
                                theme: b.theme,
                                lang: b.lang
                            }
                        },
                        post: function(c, a, f) {
                            var d = e(a[0]);
                            d.mobiscroll().form(k.ng.getOpt(c, f, "mobiscrollForm", !0));
                            f.mobiscrollInstance && b(f.mobiscrollInstance).assign(c, d.mobiscroll("getInst"));
                            c.$on("mbscFormRefresh", function() {
                                d.mobiscroll("refresh")
                            })
                        }
                    }
                }
            }
        }]).directive("mobiscrollSwitch", ["$parse", function(b) {
            return k.ng.getDDO(b, "mobiscrollSwitch", {
                component: "Switch"
            }, void 0, void 0, void 0, void 0, !0)
        }]).directive("mobiscrollStepper", ["$parse",
            function(b) {
                return k.ng.getDDO(b, "mobiscrollStepper", {
                    component: "Stepper"
                })
            }
        ])
    })();
    (function() {
        I.module("mobiscroll-numpad", []).directive("mobiscrollNumpad", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollNumpad", {
                component: "Numpad"
            })
        }])
    })();
    (function() {
        I.module("mobiscroll-color", []).directive("mobiscrollColor", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollColor", {
                preset: "color"
            })
        }])
    })();
    (function() {
        function i(a, b, d, e, i, k) {
            d = c(d[0]);
            k ? k.$setViewValue(d.mobiscroll("getEllapsedTime")) :
                a(i[b]).assign(e, d.mobiscroll("getEllapsedTime"))
        }

        function e(a, b) {
            var d = c(a[0]);
            d.mobiscroll("setEllapsedTime", b, !1).val(d.mobiscroll("getInst")._value)
        }

        function b(a) {
            return c(a[0]).mobiscroll("getEllapsedTime")
        }
        var c = k.$;
        I.module("mobiscroll-timer", []).directive("mobiscrollTimer", ["$parse", function(a) {
            return k.ng.getDDO(a, "mobiscrollTimer", {
                preset: "timer"
            }, e, i, b)
        }])
    })();
    (function() {
        I.module("mobiscroll-range", []).directive("mobiscrollRange", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollRange", {
                preset: "range"
            })
        }])
    })();
    (function() {
        I.module("mobiscroll-number", []).directive("mobiscrollNumber", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollNumber", {
                preset: "number"
            })
        }])
    })();
    (function() {
        var i = k.$;
        I.module("mobiscroll-eventcalendar", []).directive("mobiscrollEventcalendar", ["$parse", function(e) {
            return {
                restrict: "A",
                link: function(b, c, a) {
                    var f = i(c[0]).mobiscroll(I.extend({}, b.$eval(a.mobiscrollEventcalendar || "{}"), {
                        preset: "eventcalendar",
                        data: []
                    })).mobiscroll("getInst");
                    a.mobiscrollInstance &&
                        e(a.mobiscrollInstance).assign(b, f);
                    b.$watch(function() {
                        return e(a.mobiscrollData)(b)
                    }, function(a) {
                        void 0 !== a && !I.equals(f.getEvents(), a) && f.setEvents(a)
                    }, !0)
                }
            }
        }])
    })();
    (function() {
        I.module("mobiscroll-measurement", []).directive("mobiscrollTemperature", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollTemperature", {
                preset: "temperature"
            })
        }]).directive("mobiscrollSpeed", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollSpeed", {
                preset: "speed"
            })
        }]).directive("mobiscrollMass", ["$parse", function(i) {
            return k.ng.getDDO(i,
                "mobiscrollMass", {
                    preset: "mass"
                })
        }]).directive("mobiscrollForce", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollForce", {
                preset: "force"
            })
        }]).directive("mobiscrollDistance", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollDistance", {
                preset: "distance"
            })
        }])
    })();
    (function() {
        var i = k.$,
            e = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"];
        I.module("mobiscroll-menustrip", []).directive("mobiscrollRepeatRender", function() {
            return function(b) {
                b.$emit("mbscRepeatRender")
            }
        }).directive("mobiscrollMenustrip", ["$parse", "$timeout", function(b, c) {
            var a = k.ng.getDDO(b, "mobiscrollMenustrip", {
                component: "MenuStrip"
            }, function() {}, function() {});
            a.compile = function(a) {
                var d, k, a = i(a[0]);
                a.find("li").each(function() {
                    for (k = 0; k < e.length; k++)
                        if (i(this).attr(e[k])) return d = !0, !1
                });
                d && a.children().attr("mobiscroll-repeat-render", "");
                return function(a, e, f) {
                    var j, g = i(e[0]),
                        k = a.$eval(f.mobiscrollMenustrip || "{}");
                    d ? a.$on("mbscRepeatRender", function() {
                        clearTimeout(j);
                        j = setTimeout(function() {
                            g.mobiscroll().menustrip(k);
                            if (f.mobiscrollInstance) {
                                var c =
                                    b(f.mobiscrollInstance).assign;
                                c(a, g.mobiscroll("getInst"))
                            }
                        }, 1)
                    }) : g.children().length && c(function() {
                        g.mobiscroll().menustrip(k);
                        if (f.mobiscrollInstance) {
                            var c = b(f.mobiscrollInstance).assign;
                            c(a, g.mobiscroll("getInst"))
                        }
                    })
                }
            };
            return a
        }])
    })();
    (function() {
        I.module("mobiscroll-widget", []).directive("mobiscrollWidget", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollWidget", {
                component: "Widget"
            })
        }])
    })();
    (function() {
        I.module("mobiscroll-timespan", []).directive("mobiscrollTimespan", ["$parse", function(i) {
            return k.ng.getDDO(i,
                "mobiscrollTimespan", {
                    preset: "timespan"
                })
        }])
    })();
    (function() {
        var i = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"],
            e = k.$;
        I.module("mobiscroll-select", []).directive("mobiscrollSelectOption", function() {
            return {
                link: function(b, c, a) {
                    var f = e(c[0]).closest("select");
                    b.$watch(a.ngValue, function() {
                        b.$emit("mbscSelectRefresh", f)
                    });
                    b.$on("$destroy", function() {
                        b.$emit("mbscSelectRefresh", f)
                    })
                }
            }
        }).directive("mobiscrollSelect", ["$parse", function(b) {
            var c = k.ng.getDDO(b, "mobiscrollSelect", {
                preset: "select"
            });
            c.link = void 0;
            c.compile = function(a) {
                var c, d;
                e(a[0]).find("option").each(function() {
                    for (d = 0; d < i.length; d++)
                        if (e(this).attr(i[d])) return e(this).attr("mobiscroll-select-option", ""), c = !0, !1
                });
                return function(a, d, i, m) {
                    var j = k.ng.getOpt(a, i, "mobiscrollSelect", m),
                        g = e(d[0]),
                        r;
                    i.mobiscrollData && (I.extend(j, {
                        data: a.$eval(i.mobiscrollData) || []
                    }), a.$watchCollection(i.mobiscrollData, function() {
                        var b = g.mobiscroll("getInst"),
                            c = a.$eval(i.mobiscrollData);
                        I.equals(b.settings.data, c) || (b.settings.data = c, b.refresh())
                    }));
                    k.ng.addWatch(b, a, m, g, i, "mobiscrollSelect");
                    c ? a.$on("mbscSelectRefresh", function(c, d) {
                        if (g[0] == d[0]) {
                            clearTimeout(r);
                            r = setTimeout(function() {
                                g.mobiscroll().select(j);
                                k.ng.render(g, m ? m.$modelValue : b(i.mobiscrollSelect)(a));
                                i.mobiscrollInstance && b(i.mobiscrollInstance).assign(a, g.mobiscroll("getInst"))
                            }, 10)
                        }
                    }) : (g.mobiscroll().select(j), i.mobiscrollInstance && b(i.mobiscrollInstance).assign(a, g.mobiscroll("getInst")))
                }
            };
            return c
        }])
    })();
    (function() {
        I.module("mobiscroll-rating", []).directive("mobiscrollRating", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollRating", {
                preset: "rating"
            })
        }])
    })();
    (function() {
        I.module("mobiscroll-datetime", []).directive("mobiscrollDatetime", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollDatetime", {
                preset: "datetime"
            })
        }]).directive("mobiscrollDate", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollDate", {
                preset: "date"
            })
        }]).directive("mobiscrollTime", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollTime", {
                preset: "time"
            })
        }])
    })();
    (function() {
        I.module("mobiscroll-calendar", []).directive("mobiscrollCalendar", ["$parse", function(i) {
            return k.ng.getDDO(i, "mobiscrollCalendar", {
                preset: "calendar"
            })
        }])
    })();
    (function() {
        var i = k.$,
            e = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"];
        I.module("mobiscroll-list", []).directive("mobiscrollRepeatRender", function() {
            return function(b) {
                b.$emit("mbscRepeatRender")
            }
        }).directive("mobiscrollList", ["$parse", function(b) {
            var c = k.ng.getDDO(b, "mobiscrollList", {
                preset: "list"
            });
            c.link = void 0;
            c.compile = function(a) {
                var c, a = i(a[0]),
                    d;
                a.find("li").each(function() {
                    for (d = 0; d < e.length; d++)
                        if (i(this).attr(e[d])) return c = !0, !1
                });
                c && a.children().attr("mobiscroll-repeat-render", "");
                return function(a, d, e, m) {
                    var j, g = i(d[0]),
                        r = k.ng.getOpt(a, e, "mobiscrollList", m);
                    k.ng.addWatch(b, a, m, g, e, "mobiscrollList");
                    c ? a.$on("mbscRepeatRender", function() {
                        clearTimeout(j);
                        j = setTimeout(function() {
                            g.mobiscroll().treelist(r);
                            e.mobiscrollInstance && b(e.mobiscrollInstance).assign(a, g.mobiscroll("getInst"))
                        }, 1)
                    }) : g.children().length && (g.mobiscroll().treelist(r),
                        e.mobiscrollInstance && b(e.mobiscrollInstance).assign(a, g.mobiscroll("getInst")))
                }
            };
            return c
        }])
    })();
    (function() {
        var i = k.$,
            e = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"];
        I.module("mobiscroll-image", []).directive("mobiscrollRepeatRender", function() {
            return function(b) {
                b.$emit("mbscRepeatRender")
            }
        }).directive("mobiscrollImage", ["$parse", function(b) {
            var c = k.ng.getDDO(b, "mobiscrollImage", {
                preset: "image"
            });
            c.link = void 0;
            c.compile = function(a) {
                var c, a = i(a[0]),
                    d;
                a.find("li").each(function() {
                    for (d =
                        0; d < e.length; d++)
                        if (i(this).attr(e[d])) return c = !0, !1
                });
                c && a.children().attr("mobiscroll-repeat-render", "");
                return function(a, d, e, m) {
                    var j, g = i(d[0]),
                        r = k.ng.getOpt(a, e, "mobiscrollImage", m);
                    k.ng.addWatch(b, a, m, g, e, "mobiscrollImage");
                    c ? a.$on("mbscRepeatRender", function() {
                        clearTimeout(j);
                        j = setTimeout(function() {
                            g.mobiscroll().image(r);
                            e.mobiscrollInstance && b(e.mobiscrollInstance).assign(a, g.mobiscroll("getInst"))
                        }, 1)
                    }) : g.children().length && (g.mobiscroll().image(r), e.mobiscrollInstance && b(e.mobiscrollInstance).assign(a,
                        g.mobiscroll("getInst")))
                }
            };
            return c
        }])
    })();
    return k
});