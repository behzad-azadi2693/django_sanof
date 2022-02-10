if (!function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(C, t) {
    "use strict";
    var e = []
      , w = C.document
      , i = Object.getPrototypeOf
      , r = e.slice
      , m = e.concat
      , l = e.push
      , s = e.indexOf
      , n = {}
      , o = n.toString
      , f = n.hasOwnProperty
      , a = f.toString
      , h = a.call(Object)
      , g = {};
    function v(t, e) {
        var i = (e = e || w).createElement("script");
        i.text = t,
        e.head.appendChild(i).parentNode.removeChild(i)
    }
    function u(t, e) {
        return e.toUpperCase()
    }
    var c = "3.1.1"
      , k = function(t, e) {
        return new k.fn.init(t,e)
    }
      , d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , b = /-([a-z])/g;
    function y(t) {
        var e = !!t && "length"in t && t.length
          , i = k.type(t);
        return "function" !== i && !k.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    k.fn = k.prototype = {
        jquery: c,
        constructor: k,
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(t) {
            return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            t = k.merge(this.constructor(), t);
            return t.prevObject = this,
            t
        },
        each: function(t) {
            return k.each(this, t)
        },
        map: function(i) {
            return this.pushStack(k.map(this, function(t, e) {
                return i.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , t = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= t && t < e ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: e.sort,
        splice: e.splice
    },
    k.extend = k.fn.extend = function() {
        var t, e, i, n, s, o = arguments[0] || {}, a = 1, r = arguments.length, l = !1;
        for ("boolean" == typeof o && (l = o,
        o = arguments[a] || {},
        a++),
        "object" == typeof o || k.isFunction(o) || (o = {}),
        a === r && (o = this,
        a--); a < r; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    s = o[e],
                    i = t[e],
                    o !== i && (l && i && (k.isPlainObject(i) || (n = k.isArray(i))) ? (s = n ? (n = !1,
                    s && k.isArray(s) ? s : []) : s && k.isPlainObject(s) ? s : {},
                    o[e] = k.extend(l, s, i)) : void 0 !== i && (o[e] = i));
        return o
    }
    ,
    k.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === k.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = k.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function(t) {
            return !(!t || "[object Object]" !== o.call(t) || (t = i(t)) && ("function" != typeof (t = f.call(t, "constructor") && t.constructor) || a.call(t) !== h))
        },
        isEmptyObject: function(t) {
            for (var e in t)
                return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[o.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            v(t)
        },
        camelCase: function(t) {
            return t.replace(p, "ms-").replace(b, u)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, n = 0;
            if (y(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++)
                    ;
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(d, "")
        },
        makeArray: function(t, e) {
            e = e || [];
            return null != t && (y(Object(t)) ? k.merge(e, "string" == typeof t ? [t] : t) : l.call(e, t)),
            e
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : s.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++)
                t[s++] = e[n];
            return t.length = s,
            t
        },
        grep: function(t, e, i) {
            for (var n = [], s = 0, o = t.length, a = !i; s < o; s++)
                !e(t[s], s) != a && n.push(t[s]);
            return n
        },
        map: function(t, e, i) {
            var n, s, o = 0, a = [];
            if (y(t))
                for (n = t.length; o < n; o++)
                    null != (s = e(t[o], o, i)) && a.push(s);
            else
                for (o in t)
                    s = e(t[o], o, i),
                    null != s && a.push(s);
            return m.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n;
            if ("string" == typeof e && (n = t[e],
            e = t,
            t = n),
            k.isFunction(t))
                return i = r.call(arguments, 2),
                (n = function() {
                    return t.apply(e || this, i.concat(r.call(arguments)))
                }
                ).guid = t.guid = t.guid || k.guid++,
                n
        },
        now: Date.now,
        support: g
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = e[Symbol.iterator]),
    k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        n["[object " + e + "]"] = e.toLowerCase()
    });
    var _ = function(i) {
        function c(t, e, i) {
            var n = "0x" + e - 65536;
            return n != n || i ? e : n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }
        function n() {
            C()
        }
        var t, p, _, o, s, f, d, m, x, l, h, C, w, a, k, g, r, u, v, D = "sizzle" + +new Date, b = i.document, T = 0, y = 0, P = at(), M = at(), S = at(), E = function(t, e) {
            return t === e && (h = !0),
            0
        }, I = {}.hasOwnProperty, e = [], A = e.pop, N = e.push, $ = e.push, H = e.slice, O = function(t, e) {
            for (var i = 0, n = t.length; i < n; i++)
                if (t[i] === e)
                    return i;
            return -1
        }, F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", L = "\\[" + R + "*(" + z + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + R + "*\\]", j = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + L + ")*)|.*)\\)|)", W = new RegExp(R + "+","g"), B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), q = new RegExp("^" + R + "*," + R + "*"), U = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), G = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]","g"), Y = new RegExp(j), V = new RegExp("^" + z + "$"), K = {
            ID: new RegExp("^#(" + z + ")"),
            CLASS: new RegExp("^\\.(" + z + ")"),
            TAG: new RegExp("^(" + z + "|[*])"),
            ATTR: new RegExp("^" + L),
            PSEUDO: new RegExp("^" + j),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
            bool: new RegExp("^(?:" + F + ")$","i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
        }, X = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/, et = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)","ig"), it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, nt = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }, st = gt(function(t) {
            return !0 === t.disabled && ("form"in t || "label"in t)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            $.apply(e = H.call(b.childNodes), b.childNodes),
            e[b.childNodes.length].nodeType
        } catch (t) {
            $ = {
                apply: e.length ? function(t, e) {
                    N.apply(t, H.call(e))
                }
                : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++]; )
                        ;
                    t.length = i - 1
                }
            }
        }
        function ot(t, e, i, n) {
            var s, o, a, r, l, h, u, c = e && e.ownerDocument, d = e ? e.nodeType : 9;
            if (i = i || [],
            "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d)
                return i;
            if (!n && ((e ? e.ownerDocument || e : b) !== w && C(e),
            e = e || w,
            k)) {
                if (11 !== d && (l = Z.exec(t)))
                    if (s = l[1]) {
                        if (9 === d) {
                            if (!(a = e.getElementById(s)))
                                return i;
                            if (a.id === s)
                                return i.push(a),
                                i
                        } else if (c && (a = c.getElementById(s)) && v(e, a) && a.id === s)
                            return i.push(a),
                            i
                    } else {
                        if (l[2])
                            return $.apply(i, e.getElementsByTagName(t)),
                            i;
                        if ((s = l[3]) && p.getElementsByClassName && e.getElementsByClassName)
                            return $.apply(i, e.getElementsByClassName(s)),
                            i
                    }
                if (p.qsa && !S[t + " "] && (!g || !g.test(t))) {
                    if (1 !== d)
                        c = e,
                        u = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((r = e.getAttribute("id")) ? r = r.replace(it, nt) : e.setAttribute("id", r = D),
                        o = (h = f(t)).length; o--; )
                            h[o] = "#" + r + " " + mt(h[o]);
                        u = h.join(","),
                        c = tt.test(t) && pt(e.parentNode) || e
                    }
                    if (u)
                        try {
                            return $.apply(i, c.querySelectorAll(u)),
                            i
                        } catch (t) {} finally {
                            r === D && e.removeAttribute("id")
                        }
                }
            }
            return m(t.replace(B, "$1"), e, i, n)
        }
        function at() {
            var i = [];
            function n(t, e) {
                return i.push(t + " ") > _.cacheLength && delete n[i.shift()],
                n[t + " "] = e
            }
            return n
        }
        function rt(t) {
            return t[D] = !0,
            t
        }
        function lt(t) {
            var e = w.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function ht(t, e) {
            for (var i = t.split("|"), n = i.length; n--; )
                _.attrHandle[i[n]] = e
        }
        function ut(t, e) {
            var i = e && t
              , n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === e)
                        return -1;
            return t ? 1 : -1
        }
        function ct(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && st(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function dt(a) {
            return rt(function(o) {
                return o = +o,
                rt(function(t, e) {
                    for (var i, n = a([], t.length, o), s = n.length; s--; )
                        t[i = n[s]] && (t[i] = !(e[i] = t[i]))
                })
            })
        }
        function pt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in p = ot.support = {},
        s = ot.isXML = function(t) {
            t = t && (t.ownerDocument || t).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        C = ot.setDocument = function(t) {
            var e, t = t ? t.ownerDocument || t : b;
            return t !== w && 9 === t.nodeType && t.documentElement && (a = (w = t).documentElement,
            k = !s(w),
            b !== w && (e = w.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", n, !1) : e.attachEvent && e.attachEvent("onunload", n)),
            p.attributes = lt(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            p.getElementsByTagName = lt(function(t) {
                return t.appendChild(w.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            p.getElementsByClassName = J.test(w.getElementsByClassName),
            p.getById = lt(function(t) {
                return a.appendChild(t).id = D,
                !w.getElementsByName || !w.getElementsByName(D).length
            }),
            p.getById ? (_.filter.ID = function(t) {
                var e = t.replace(et, c);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ,
            _.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && k) {
                    t = e.getElementById(t);
                    return t ? [t] : []
                }
            }
            ) : (_.filter.ID = function(t) {
                var e = t.replace(et, c);
                return function(t) {
                    t = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return t && t.value === e
                }
            }
            ,
            _.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && k) {
                    var i, n, s, o = e.getElementById(t);
                    if (o) {
                        if ((i = o.getAttributeNode("id")) && i.value === t)
                            return [o];
                        for (s = e.getElementsByName(t),
                        n = 0; o = s[n++]; )
                            if ((i = o.getAttributeNode("id")) && i.value === t)
                                return [o]
                    }
                    return []
                }
            }
            ),
            _.find.TAG = p.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var i, n = [], s = 0, o = e.getElementsByTagName(t);
                if ("*" !== t)
                    return o;
                for (; i = o[s++]; )
                    1 === i.nodeType && n.push(i);
                return n
            }
            ,
            _.find.CLASS = p.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && k)
                    return e.getElementsByClassName(t)
            }
            ,
            r = [],
            g = [],
            (p.qsa = J.test(w.querySelectorAll)) && (lt(function(t) {
                a.appendChild(t).innerHTML = "<a id='" + D + "'></a><select id='" + D + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + F + ")"),
                t.querySelectorAll("[id~=" + D + "-]").length || g.push("~="),
                t.querySelectorAll(":checked").length || g.push(":checked"),
                t.querySelectorAll("a#" + D + "+*").length || g.push(".#.+[+~]")
            }),
            lt(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = w.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && g.push("name" + R + "*[*^$|!~]?="),
                2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                a.appendChild(t).disabled = !0,
                2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (p.matchesSelector = J.test(u = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && lt(function(t) {
                p.disconnectedMatch = u.call(t, "*"),
                u.call(t, "[s!='']:x"),
                r.push("!=", j)
            }),
            g = g.length && new RegExp(g.join("|")),
            r = r.length && new RegExp(r.join("|")),
            e = J.test(a.compareDocumentPosition),
            v = e || J.test(a.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t
                  , e = e && e.parentNode;
                return t === e || !(!e || 1 !== e.nodeType || !(i.contains ? i.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            E = e ? function(t, e) {
                if (t === e)
                    return h = !0,
                    0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === i ? t === w || t.ownerDocument === b && v(b, t) ? -1 : e === w || e.ownerDocument === b && v(b, e) ? 1 : l ? O(l, t) - O(l, e) : 0 : 4 & i ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return h = !0,
                    0;
                var i, n = 0, s = t.parentNode, o = e.parentNode, a = [t], r = [e];
                if (!s || !o)
                    return t === w ? -1 : e === w ? 1 : s ? -1 : o ? 1 : l ? O(l, t) - O(l, e) : 0;
                if (s === o)
                    return ut(t, e);
                for (i = t; i = i.parentNode; )
                    a.unshift(i);
                for (i = e; i = i.parentNode; )
                    r.unshift(i);
                for (; a[n] === r[n]; )
                    n++;
                return n ? ut(a[n], r[n]) : a[n] === b ? -1 : r[n] === b ? 1 : 0
            }
            ),
            w
        }
        ,
        ot.matches = function(t, e) {
            return ot(t, null, null, e)
        }
        ,
        ot.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== w && C(t),
            e = e.replace(G, "='$1']"),
            p.matchesSelector && k && !S[e + " "] && (!r || !r.test(e)) && (!g || !g.test(e)))
                try {
                    var i = u.call(t, e);
                    if (i || p.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (t) {}
            return 0 < ot(e, w, null, [t]).length
        }
        ,
        ot.contains = function(t, e) {
            return (t.ownerDocument || t) !== w && C(t),
            v(t, e)
        }
        ,
        ot.attr = function(t, e) {
            (t.ownerDocument || t) !== w && C(t);
            var i = _.attrHandle[e.toLowerCase()]
              , i = i && I.call(_.attrHandle, e.toLowerCase()) ? i(t, e, !k) : void 0;
            return void 0 !== i ? i : p.attributes || !k ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }
        ,
        ot.escape = function(t) {
            return (t + "").replace(it, nt)
        }
        ,
        ot.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        ot.uniqueSort = function(t) {
            var e, i = [], n = 0, s = 0;
            if (h = !p.detectDuplicates,
            l = !p.sortStable && t.slice(0),
            t.sort(E),
            h) {
                for (; e = t[s++]; )
                    e === t[s] && (n = i.push(s));
                for (; n--; )
                    t.splice(i[n], 1)
            }
            return l = null,
            t
        }
        ,
        o = ot.getText = function(t) {
            var e, i = "", n = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        i += o(t)
                } else if (3 === s || 4 === s)
                    return t.nodeValue
            } else
                for (; e = t[n++]; )
                    i += o(e);
            return i
        }
        ,
        (_ = ot.selectors = {
            cacheLength: 50,
            createPseudo: rt,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(et, c),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(et, c),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Y.test(i) && (e = f(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e),
                    t[2] = i.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(et, c).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = P[t + " "];
                    return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && P(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(t) {
                        t = ot.attr(t, e);
                        return null == t ? "!=" === i : !i || (t += "",
                        "=" === i ? t === n : "!=" === i ? t !== n : "^=" === i ? n && 0 === t.indexOf(n) : "*=" === i ? n && -1 < t.indexOf(n) : "$=" === i ? n && t.slice(-n.length) === n : "~=" === i ? -1 < (" " + t.replace(W, " ") + " ").indexOf(n) : "|=" === i && (t === n || t.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(f, t, e, m, g) {
                    var v = "nth" !== f.slice(0, 3)
                      , b = "last" !== f.slice(-4)
                      , y = "of-type" === t;
                    return 1 === m && 0 === g ? function(t) {
                        return !!t.parentNode
                    }
                    : function(t, e, i) {
                        var n, s, o, a, r, l, h = v != b ? "nextSibling" : "previousSibling", u = t.parentNode, c = y && t.nodeName.toLowerCase(), d = !i && !y, p = !1;
                        if (u) {
                            if (v) {
                                for (; h; ) {
                                    for (a = t; a = a[h]; )
                                        if (y ? a.nodeName.toLowerCase() === c : 1 === a.nodeType)
                                            return !1;
                                    l = h = "only" === f && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [b ? u.firstChild : u.lastChild],
                            b && d) {
                                for (p = (r = (n = (s = (o = (a = u)[D] || (a[D] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[f] || [])[0] === T && n[1]) && n[2],
                                a = r && u.childNodes[r]; a = ++r && a && a[h] || (p = r = 0) || l.pop(); )
                                    if (1 === a.nodeType && ++p && a === t) {
                                        s[f] = [T, r, p];
                                        break
                                    }
                            } else if (d && (p = r = (n = (s = (o = (a = t)[D] || (a[D] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[f] || [])[0] === T && n[1]),
                            !1 === p)
                                for (; (a = ++r && a && a[h] || (p = r = 0) || l.pop()) && ((y ? a.nodeName.toLowerCase() !== c : 1 !== a.nodeType) || !++p || (d && ((s = (o = a[D] || (a[D] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[f] = [T, p]),
                                a !== t)); )
                                    ;
                            return (p -= g) === m || p % m == 0 && 0 <= p / m
                        }
                    }
                },
                PSEUDO: function(t, o) {
                    var e, a = _.pseudos[t] || _.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                    return a[D] ? a(o) : 1 < a.length ? (e = [t, t, "", o],
                    _.setFilters.hasOwnProperty(t.toLowerCase()) ? rt(function(t, e) {
                        for (var i, n = a(t, o), s = n.length; s--; )
                            t[i = O(t, n[s])] = !(e[i] = n[s])
                    }) : function(t) {
                        return a(t, 0, e)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: rt(function(t) {
                    var n = []
                      , s = []
                      , r = d(t.replace(B, "$1"));
                    return r[D] ? rt(function(t, e, i, n) {
                        for (var s, o = r(t, null, n, []), a = t.length; a--; )
                            (s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function(t, e, i) {
                        return n[0] = t,
                        r(n, null, i, s),
                        n[0] = null,
                        !s.pop()
                    }
                }),
                has: rt(function(e) {
                    return function(t) {
                        return 0 < ot(e, t).length
                    }
                }),
                contains: rt(function(e) {
                    return e = e.replace(et, c),
                    function(t) {
                        return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                    }
                }),
                lang: rt(function(i) {
                    return V.test(i || "") || ot.error("unsupported lang: " + i),
                    i = i.replace(et, c).toLowerCase(),
                    function(t) {
                        var e;
                        do {
                            if (e = k ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var e = i.location && i.location.hash;
                    return e && e.slice(1) === t.id
                },
                root: function(t) {
                    return t === a
                },
                focus: function(t) {
                    return t === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: ct(!1),
                disabled: ct(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !_.pseudos.empty(t)
                },
                header: function(t) {
                    return Q.test(t.nodeName)
                },
                input: function(t) {
                    return X.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (t = t.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: dt(function() {
                    return [0]
                }),
                last: dt(function(t, e) {
                    return [e - 1]
                }),
                eq: dt(function(t, e, i) {
                    return [i < 0 ? i + e : i]
                }),
                even: dt(function(t, e) {
                    for (var i = 0; i < e; i += 2)
                        t.push(i);
                    return t
                }),
                odd: dt(function(t, e) {
                    for (var i = 1; i < e; i += 2)
                        t.push(i);
                    return t
                }),
                lt: dt(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; 0 <= --n; )
                        t.push(n);
                    return t
                }),
                gt: dt(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e; )
                        t.push(n);
                    return t
                })
            }
        }).pseudos.nth = _.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            _.pseudos[t] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            _.pseudos[t] = function(i) {
                return function(t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === i
                }
            }(t);
        function ft() {}
        function mt(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++)
                n += t[e].value;
            return n
        }
        function gt(a, t, e) {
            var r = t.dir
              , l = t.next
              , h = l || r
              , u = e && "parentNode" === h
              , c = y++;
            return t.first ? function(t, e, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || u)
                        return a(t, e, i);
                return !1
            }
            : function(t, e, i) {
                var n, s, o = [T, c];
                if (i) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || u) && a(t, e, i))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || u)
                            if (n = (s = t[D] || (t[D] = {}))[t.uniqueID] || (s[t.uniqueID] = {}),
                            l && l === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((s = n[h]) && s[0] === T && s[1] === c)
                                    return o[2] = s[2];
                                if ((n[h] = o)[2] = a(t, e, i))
                                    return !0
                            }
                return !1
            }
        }
        function vt(s) {
            return 1 < s.length ? function(t, e, i) {
                for (var n = s.length; n--; )
                    if (!s[n](t, e, i))
                        return !1;
                return !0
            }
            : s[0]
        }
        function bt(t, e, i, n, s) {
            for (var o, a = [], r = 0, l = t.length, h = null != e; r < l; r++)
                (o = t[r]) && (i && !i(o, n, s) || (a.push(o),
                h && e.push(r)));
            return a
        }
        function yt(p, f, m, g, v, t) {
            return g && !g[D] && (g = yt(g)),
            v && !v[D] && (v = yt(v, t)),
            rt(function(t, e, i, n) {
                var s, o, a, r = [], l = [], h = e.length, u = t || function(t, e, i) {
                    for (var n = 0, s = e.length; n < s; n++)
                        ot(t, e[n], i);
                    return i
                }(f || "*", i.nodeType ? [i] : i, []), c = !p || !t && f ? u : bt(u, r, p, i, n), d = m ? v || (t ? p : h || g) ? [] : e : c;
                if (m && m(c, d, i, n),
                g)
                    for (s = bt(d, l),
                    g(s, [], i, n),
                    o = s.length; o--; )
                        (a = s[o]) && (d[l[o]] = !(c[l[o]] = a));
                if (t) {
                    if (v || p) {
                        if (v) {
                            for (s = [],
                            o = d.length; o--; )
                                (a = d[o]) && s.push(c[o] = a);
                            v(null, d = [], s, n)
                        }
                        for (o = d.length; o--; )
                            (a = d[o]) && -1 < (s = v ? O(t, a) : r[o]) && (t[s] = !(e[s] = a))
                    }
                } else
                    d = bt(d === e ? d.splice(h, d.length) : d),
                    v ? v(null, e, d, n) : $.apply(e, d)
            })
        }
        function _t(g, v) {
            function t(t, e, i, n, s) {
                var o, a, r, l = 0, h = "0", u = t && [], c = [], d = x, p = t || y && _.find.TAG("*", s), f = T += null == d ? 1 : Math.random() || .1, m = p.length;
                for (s && (x = e === w || e || s); h !== m && null != (o = p[h]); h++) {
                    if (y && o) {
                        for (a = 0,
                        e || o.ownerDocument === w || (C(o),
                        i = !k); r = g[a++]; )
                            if (r(o, e || w, i)) {
                                n.push(o);
                                break
                            }
                        s && (T = f)
                    }
                    b && ((o = !r && o) && l--,
                    t && u.push(o))
                }
                if (l += h,
                b && h !== l) {
                    for (a = 0; r = v[a++]; )
                        r(u, c, e, i);
                    if (t) {
                        if (0 < l)
                            for (; h--; )
                                u[h] || c[h] || (c[h] = A.call(n));
                        c = bt(c)
                    }
                    $.apply(n, c),
                    s && !t && 0 < c.length && 1 < l + v.length && ot.uniqueSort(n)
                }
                return s && (T = f,
                x = d),
                u
            }
            var b = 0 < v.length
              , y = 0 < g.length;
            return b ? rt(t) : t
        }
        return ft.prototype = _.filters = _.pseudos,
        _.setFilters = new ft,
        f = ot.tokenize = function(t, e) {
            var i, n, s, o, a, r, l, h = M[t + " "];
            if (h)
                return e ? 0 : h.slice(0);
            for (a = t,
            r = [],
            l = _.preFilter; a; ) {
                for (o in i && !(n = q.exec(a)) || (n && (a = a.slice(n[0].length) || a),
                r.push(s = [])),
                i = !1,
                (n = U.exec(a)) && (i = n.shift(),
                s.push({
                    value: i,
                    type: n[0].replace(B, " ")
                }),
                a = a.slice(i.length)),
                _.filter)
                    !(n = K[o].exec(a)) || l[o] && !(n = l[o](n)) || (i = n.shift(),
                    s.push({
                        value: i,
                        type: o,
                        matches: n
                    }),
                    a = a.slice(i.length));
                if (!i)
                    break
            }
            return e ? a.length : a ? ot.error(t) : M(t, r).slice(0)
        }
        ,
        d = ot.compile = function(t, e) {
            var i, n = [], s = [], o = S[t + " "];
            if (!o) {
                for (i = (e = e || f(t)).length; i--; )
                    ((o = function t(e) {
                        for (var n, i, s, o = e.length, a = _.relative[e[0].type], r = a || _.relative[" "], l = a ? 1 : 0, h = gt(function(t) {
                            return t === n
                        }, r, !0), u = gt(function(t) {
                            return -1 < O(n, t)
                        }, r, !0), c = [function(t, e, i) {
                            return i = !a && (i || e !== x) || ((n = e).nodeType ? h : u)(t, e, i),
                            n = null,
                            i
                        }
                        ]; l < o; l++)
                            if (i = _.relative[e[l].type])
                                c = [gt(vt(c), i)];
                            else {
                                if ((i = _.filter[e[l].type].apply(null, e[l].matches))[D]) {
                                    for (s = ++l; s < o && !_.relative[e[s].type]; s++)
                                        ;
                                    return yt(1 < l && vt(c), 1 < l && mt(e.slice(0, l - 1).concat({
                                        value: " " === e[l - 2].type ? "*" : ""
                                    })).replace(B, "$1"), i, l < s && t(e.slice(l, s)), s < o && t(e = e.slice(s)), s < o && mt(e))
                                }
                                c.push(i)
                            }
                        return vt(c)
                    }(e[i]))[D] ? n : s).push(o);
                (o = S(t, _t(s, n))).selector = t
            }
            return o
        }
        ,
        m = ot.select = function(t, e, i, n) {
            var s, o, a, r, l, h = "function" == typeof t && t, u = !n && f(t = h.selector || t);
            if (i = i || [],
            1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === e.nodeType && k && _.relative[o[1].type]) {
                    if (!(e = (_.find.ID(a.matches[0].replace(et, c), e) || [])[0]))
                        return i;
                    h && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (s = K.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s],
                !_.relative[r = a.type]); )
                    if ((l = _.find[r]) && (n = l(a.matches[0].replace(et, c), tt.test(o[0].type) && pt(e.parentNode) || e))) {
                        if (o.splice(s, 1),
                        !(t = n.length && mt(o)))
                            return $.apply(i, n),
                            i;
                        break
                    }
            }
            return (h || d(t, u))(n, e, !k, i, !e || tt.test(t) && pt(e.parentNode) || e),
            i
        }
        ,
        p.sortStable = D.split("").sort(E).join("") === D,
        p.detectDuplicates = !!h,
        C(),
        p.sortDetached = lt(function(t) {
            return 1 & t.compareDocumentPosition(w.createElement("fieldset"))
        }),
        lt(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || ht("type|href|height|width", function(t, e, i) {
            if (!i)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        p.attributes && lt(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || ht("value", function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }),
        lt(function(t) {
            return null == t.getAttribute("disabled")
        }) || ht(F, function(t, e, i) {
            if (!i)
                return !0 === t[e] ? e.toLowerCase() : (e = t.getAttributeNode(e)) && e.specified ? e.value : null
        }),
        ot
    }(C);
    k.find = _,
    k.expr = _.selectors,
    k.expr[":"] = k.expr.pseudos,
    k.uniqueSort = k.unique = _.uniqueSort,
    k.text = _.getText,
    k.isXMLDoc = _.isXML,
    k.contains = _.contains,
    k.escapeSelector = _.escape;
    function x(t, e, i) {
        for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (s && k(t).is(i))
                    break;
                n.push(t)
            }
        return n
    }
    function D(t, e) {
        for (var i = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && i.push(t);
        return i
    }
    var T = k.expr.match.needsContext
      , P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , M = /^.[^:#\[\.,]*$/;
    function S(t, i, n) {
        return k.isFunction(i) ? k.grep(t, function(t, e) {
            return !!i.call(t, e, t) !== n
        }) : i.nodeType ? k.grep(t, function(t) {
            return t === i !== n
        }) : "string" != typeof i ? k.grep(t, function(t) {
            return -1 < s.call(i, t) !== n
        }) : M.test(i) ? k.filter(i, t, n) : (i = k.filter(i, t),
        k.grep(t, function(t) {
            return -1 < s.call(i, t) !== n && 1 === t.nodeType
        }))
    }
    k.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"),
        1 === e.length && 1 === n.nodeType ? k.find.matchesSelector(n, t) ? [n] : [] : k.find.matches(t, k.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    k.fn.extend({
        find: function(t) {
            var e, i, n = this.length, s = this;
            if ("string" != typeof t)
                return this.pushStack(k(t).filter(function() {
                    for (e = 0; e < n; e++)
                        if (k.contains(s[e], this))
                            return !0
                }));
            for (i = this.pushStack([]),
            e = 0; e < n; e++)
                k.find(t, s[e], i);
            return 1 < n ? k.uniqueSort(i) : i
        },
        filter: function(t) {
            return this.pushStack(S(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(S(this, t || [], !0))
        },
        is: function(t) {
            return !!S(this, "string" == typeof t && T.test(t) ? k(t) : t || [], !1).length
        }
    });
    var E, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(t, e, i) {
        if (!t)
            return this;
        if (i = i || E,
        "string" != typeof t)
            return t.nodeType ? (this[0] = t,
            this.length = 1,
            this) : k.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(k) : k.makeArray(t, this);
        if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : I.exec(t)) || !n[1] && e)
            return (!e || e.jquery ? e || i : this.constructor(e)).find(t);
        if (n[1]) {
            if (e = e instanceof k ? e[0] : e,
            k.merge(this, k.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : w, !0)),
            P.test(n[1]) && k.isPlainObject(e))
                for (var n in e)
                    k.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this
        }
        return (t = w.getElementById(n[2])) && (this[0] = t,
        this.length = 1),
        this
    }
    ).prototype = k.fn,
    E = k(w);
    var A = /^(?:parents|prev(?:Until|All))/
      , N = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function $(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    k.fn.extend({
        has: function(t) {
            var e = k(t, this)
              , i = e.length;
            return this.filter(function() {
                for (var t = 0; t < i; t++)
                    if (k.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            var i, n = 0, s = this.length, o = [], a = "string" != typeof t && k(t);
            if (!T.test(t))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? -1 < a.index(i) : 1 === i.nodeType && k.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? s.call(k(t), this[0]) : s.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    k.each({
        parent: function(t) {
            t = t.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(t) {
            return x(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return x(t, "parentNode", i)
        },
        next: function(t) {
            return $(t, "nextSibling")
        },
        prev: function(t) {
            return $(t, "previousSibling")
        },
        nextAll: function(t) {
            return x(t, "nextSibling")
        },
        prevAll: function(t) {
            return x(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return x(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return x(t, "previousSibling", i)
        },
        siblings: function(t) {
            return D((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return D(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || k.merge([], t.childNodes)
        }
    }, function(n, s) {
        k.fn[n] = function(t, e) {
            var i = k.map(this, s, t);
            return "Until" !== n.slice(-5) && (e = t),
            e && "string" == typeof e && (i = k.filter(e, i)),
            1 < this.length && (N[n] || k.uniqueSort(i),
            A.test(n) && i.reverse()),
            this.pushStack(i)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;
    function O(t) {
        return t
    }
    function F(t) {
        throw t
    }
    function R(t, e, i) {
        var n;
        try {
            t && k.isFunction(n = t.promise) ? n.call(t).done(e).fail(i) : t && k.isFunction(n = t.then) ? n.call(t, e, i) : e.call(void 0, t)
        } catch (t) {
            i.call(void 0, t)
        }
    }
    k.Callbacks = function(n) {
        var t, i;
        n = "string" == typeof n ? (t = n,
        i = {},
        k.each(t.match(H) || [], function(t, e) {
            i[e] = !0
        }),
        i) : k.extend({}, n);
        function s() {
            for (r = n.once,
            a = o = !0; h.length; u = -1)
                for (e = h.shift(); ++u < l.length; )
                    !1 === l[u].apply(e[0], e[1]) && n.stopOnFalse && (u = l.length,
                    e = !1);
            n.memory || (e = !1),
            o = !1,
            r && (l = e ? [] : "")
        }
        var o, e, a, r, l = [], h = [], u = -1, c = {
            add: function() {
                return l && (e && !o && (u = l.length - 1,
                h.push(e)),
                function i(t) {
                    k.each(t, function(t, e) {
                        k.isFunction(e) ? n.unique && c.has(e) || l.push(e) : e && e.length && "string" !== k.type(e) && i(e)
                    })
                }(arguments),
                e && !o && s()),
                this
            },
            remove: function() {
                return k.each(arguments, function(t, e) {
                    for (var i; -1 < (i = k.inArray(e, l, i)); )
                        l.splice(i, 1),
                        i <= u && u--
                }),
                this
            },
            has: function(t) {
                return t ? -1 < k.inArray(t, l) : 0 < l.length
            },
            empty: function() {
                return l = l && [],
                this
            },
            disable: function() {
                return r = h = [],
                l = e = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return r = h = [],
                e || o || (l = e = ""),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(t, e) {
                return r || (e = [t, (e = e || []).slice ? e.slice() : e],
                h.push(e),
                o || s()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!a
            }
        };
        return c
    }
    ,
    k.extend({
        Deferred: function(t) {
            var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]]
              , s = "pending"
              , a = {
                state: function() {
                    return s
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                catch: function(t) {
                    return a.then(null, t)
                },
                pipe: function() {
                    var s = arguments;
                    return k.Deferred(function(n) {
                        k.each(o, function(t, e) {
                            var i = k.isFunction(s[e[4]]) && s[e[4]];
                            r[e[1]](function() {
                                var t = i && i.apply(this, arguments);
                                t && k.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this, i ? [t] : arguments)
                            })
                        }),
                        s = null
                    }).promise()
                },
                then: function(e, i, n) {
                    var l = 0;
                    function h(s, o, a, r) {
                        return function() {
                            function t() {
                                var t, e;
                                if (!(s < l)) {
                                    if ((t = a.apply(i, n)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    e = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                    k.isFunction(e) ? r ? e.call(t, h(l, o, O, r), h(l, o, F, r)) : (l++,
                                    e.call(t, h(l, o, O, r), h(l, o, F, r), h(l, o, O, o.notifyWith))) : (a !== O && (i = void 0,
                                    n = [t]),
                                    (r || o.resolveWith)(i, n))
                                }
                            }
                            var i = this
                              , n = arguments
                              , e = r ? t : function() {
                                try {
                                    t()
                                } catch (t) {
                                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(t, e.stackTrace),
                                    l <= s + 1 && (a !== F && (i = void 0,
                                    n = [t]),
                                    o.rejectWith(i, n))
                                }
                            }
                            ;
                            s ? e() : (k.Deferred.getStackHook && (e.stackTrace = k.Deferred.getStackHook()),
                            C.setTimeout(e))
                        }
                    }
                    return k.Deferred(function(t) {
                        o[0][3].add(h(0, t, k.isFunction(n) ? n : O, t.notifyWith)),
                        o[1][3].add(h(0, t, k.isFunction(e) ? e : O)),
                        o[2][3].add(h(0, t, k.isFunction(i) ? i : F))
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? k.extend(t, a) : a
                }
            }
              , r = {};
            return k.each(o, function(t, e) {
                var i = e[2]
                  , n = e[5];
                a[e[1]] = i.add,
                n && i.add(function() {
                    s = n
                }, o[3 - t][2].disable, o[0][2].lock),
                i.add(e[3].fire),
                r[e[0]] = function() {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ,
                r[e[0] + "With"] = i.fireWith
            }),
            a.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(t) {
            function e(e) {
                return function(t) {
                    s[e] = this,
                    o[e] = 1 < arguments.length ? r.call(arguments) : t,
                    --i || a.resolveWith(s, o)
                }
            }
            var i = arguments.length
              , n = i
              , s = Array(n)
              , o = r.call(arguments)
              , a = k.Deferred();
            if (i <= 1 && (R(t, a.done(e(n)).resolve, a.reject),
            "pending" === a.state() || k.isFunction(o[n] && o[n].then)))
                return a.then();
            for (; n--; )
                R(o[n], e(n), a.reject);
            return a.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(t, e) {
        C.console && C.console.warn && t && z.test(t.name) && C.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }
    ,
    k.readyException = function(t) {
        C.setTimeout(function() {
            throw t
        })
    }
    ;
    var L = k.Deferred();
    function j() {
        w.removeEventListener("DOMContentLoaded", j),
        C.removeEventListener("load", j),
        k.ready()
    }
    k.fn.ready = function(t) {
        return L.then(t).catch(function(t) {
            k.readyException(t)
        }),
        this
    }
    ,
    k.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? k.readyWait++ : k.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --k.readyWait : k.isReady) || ((k.isReady = !0) !== t && 0 < --k.readyWait || L.resolveWith(w, [k]))
        }
    }),
    k.ready.then = L.then,
    "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? C.setTimeout(k.ready) : (w.addEventListener("DOMContentLoaded", j),
    C.addEventListener("load", j));
    function W(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }
    var B = function(t, e, i, n, s, o, a) {
        var r = 0
          , l = t.length
          , h = null == i;
        if ("object" === k.type(i))
            for (r in s = !0,
            i)
                B(t, e, r, i[r], !0, o, a);
        else if (void 0 !== n && (s = !0,
        k.isFunction(n) || (a = !0),
        h && (e = a ? (e.call(t, n),
        null) : (h = e,
        function(t, e, i) {
            return h.call(k(t), i)
        }
        )),
        e))
            for (; r < l; r++)
                e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
        return s ? t : h ? e.call(t) : l ? e(t[0], i) : o
    };
    function q() {
        this.expando = k.expando + q.uid++
    }
    q.uid = 1,
    q.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {},
            W(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e)
                s[k.camelCase(e)] = i;
            else
                for (n in e)
                    s[k.camelCase(n)] = e[n];
            return s
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][k.camelCase(e)]
        },
        access: function(t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i),
            void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = k.isArray(e) ? e.map(k.camelCase) : (e = k.camelCase(e))in n ? [e] : e.match(H) || []).length;
                    for (; i--; )
                        delete n[e[i]]
                }
                void 0 !== e && !k.isEmptyObject(n) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            t = t[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var U = new q
      , G = new q
      , Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , V = /[A-Z]/g;
    function K(t, e, i) {
        var n, s;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(V, "-$&").toLowerCase(),
            "string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : Y.test(s) ? JSON.parse(s) : s)
                } catch (t) {}
                G.set(t, e, i)
            } else
                i = void 0;
        return i
    }
    k.extend({
        hasData: function(t) {
            return G.hasData(t) || U.hasData(t)
        },
        data: function(t, e, i) {
            return G.access(t, e, i)
        },
        removeData: function(t, e) {
            G.remove(t, e)
        },
        _data: function(t, e, i) {
            return U.access(t, e, i)
        },
        _removeData: function(t, e) {
            U.remove(t, e)
        }
    }),
    k.fn.extend({
        data: function(i, t) {
            var e, n, s, o = this[0], a = o && o.attributes;
            if (void 0 !== i)
                return "object" == typeof i ? this.each(function() {
                    G.set(this, i)
                }) : B(this, function(t) {
                    var e;
                    return o && void 0 === t ? void 0 !== (e = G.get(o, i)) || void 0 !== (e = K(o, i)) ? e : void 0 : void this.each(function() {
                        G.set(this, i, t)
                    })
                }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (s = G.get(o),
            1 === o.nodeType && !U.get(o, "hasDataAttrs"))) {
                for (e = a.length; e--; )
                    a[e] && (0 === (n = a[e].name).indexOf("data-") && (n = k.camelCase(n.slice(5)),
                    K(o, n, s[n])));
                U.set(o, "hasDataAttrs", !0)
            }
            return s
        },
        removeData: function(t) {
            return this.each(function() {
                G.remove(this, t)
            })
        }
    }),
    k.extend({
        queue: function(t, e, i) {
            var n;
            if (t)
                return e = (e || "fx") + "queue",
                n = U.get(t, e),
                i && (!n || k.isArray(i) ? n = U.access(t, e, k.makeArray(i)) : n.push(i)),
                n || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = k.queue(t, e)
              , n = i.length
              , s = i.shift()
              , o = k._queueHooks(t, e);
            "inprogress" === s && (s = i.shift(),
            n--),
            s && ("fx" === e && i.unshift("inprogress"),
            delete o.stop,
            s.call(t, function() {
                k.dequeue(t, e)
            }, o)),
            !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return U.get(t, i) || U.access(t, i, {
                empty: k.Callbacks("once memory").add(function() {
                    U.remove(t, [e + "queue", i])
                })
            })
        }
    }),
    k.fn.extend({
        queue: function(e, i) {
            var t = 2;
            return "string" != typeof e && (i = e,
            e = "fx",
            t--),
            arguments.length < t ? k.queue(this[0], e) : void 0 === i ? this : this.each(function() {
                var t = k.queue(this, e, i);
                k._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && k.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                k.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            function i() {
                --s || o.resolveWith(a, [a])
            }
            var n, s = 1, o = k.Deferred(), a = this, r = this.length;
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; r--; )
                (n = U.get(a[r], t + "queueHooks")) && n.empty && (s++,
                n.empty.add(i));
            return i(),
            o.promise(e)
        }
    });
    function X(t, e, i, n) {
        var s, o = {};
        for (s in e)
            o[s] = t.style[s],
            t.style[s] = e[s];
        for (s in n = i.apply(t, n || []),
        e)
            t.style[s] = o[s];
        return n
    }
    var c = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Q = new RegExp("^(?:([+-])=|)(" + c + ")([a-z%]*)$","i")
      , J = ["Top", "Right", "Bottom", "Left"]
      , Z = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && k.contains(t.ownerDocument, t) && "none" === k.css(t, "display")
    };
    function tt(t, e, i, n) {
        var s, o = 1, a = 20, r = n ? function() {
            return n.cur()
        }
        : function() {
            return k.css(t, e, "")
        }
        , l = r(), h = i && i[3] || (k.cssNumber[e] ? "" : "px"), u = (k.cssNumber[e] || "px" !== h && +l) && Q.exec(k.css(t, e));
        if (u && u[3] !== h)
            for (h = h || u[3],
            i = i || [],
            u = +l || 1; o = o || ".5",
            u /= o,
            k.style(t, e, u + h),
            o !== (o = r() / l) && 1 !== o && --a; )
                ;
        return i && (u = +u || +l || 0,
        s = i[1] ? u + (i[1] + 1) * i[2] : +i[2],
        n && (n.unit = h,
        n.start = u,
        n.end = s)),
        s
    }
    var et = {};
    function it(t, e) {
        for (var i, n, s, o, a, r = [], l = 0, h = t.length; l < h; l++)
            (n = t[l]).style && (i = n.style.display,
            e ? ("none" === i && (r[l] = U.get(n, "display") || null,
            r[l] || (n.style.display = "")),
            "" === n.style.display && Z(n) && (r[l] = (a = o = void 0,
            o = (s = n).ownerDocument,
            a = s.nodeName,
            (s = et[a]) || (o = o.body.appendChild(o.createElement(a)),
            s = k.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === s && (s = "block"),
            et[a] = s)))) : "none" !== i && (r[l] = "none",
            U.set(n, "display", i)));
        for (l = 0; l < h; l++)
            null != r[l] && (t[l].style.display = r[l]);
        return t
    }
    k.fn.extend({
        show: function() {
            return it(this, !0)
        },
        hide: function() {
            return it(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Z(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var nt = /^(?:checkbox|radio)$/i
      , st = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , ot = /^$|\/(?:java|ecma)script/i
      , at = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function rt(t, e) {
        var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && k.nodeName(t, e) ? k.merge([t], i) : i
    }
    function lt(t, e) {
        for (var i = 0, n = t.length; i < n; i++)
            U.set(t[i], "globalEval", !e || U.get(e[i], "globalEval"))
    }
    at.optgroup = at.option,
    at.tbody = at.tfoot = at.colgroup = at.caption = at.thead,
    at.th = at.td;
    var ht = /<|&#?\w+;/;
    function ut(t, e, i, n, s) {
        for (var o, a, r, l, h, u = e.createDocumentFragment(), c = [], d = 0, p = t.length; d < p; d++)
            if ((o = t[d]) || 0 === o)
                if ("object" === k.type(o))
                    k.merge(c, o.nodeType ? [o] : o);
                else if (ht.test(o)) {
                    for (a = a || u.appendChild(e.createElement("div")),
                    r = (st.exec(o) || ["", ""])[1].toLowerCase(),
                    r = at[r] || at._default,
                    a.innerHTML = r[1] + k.htmlPrefilter(o) + r[2],
                    h = r[0]; h--; )
                        a = a.lastChild;
                    k.merge(c, a.childNodes),
                    (a = u.firstChild).textContent = ""
                } else
                    c.push(e.createTextNode(o));
        for (u.textContent = "",
        d = 0; o = c[d++]; )
            if (n && -1 < k.inArray(o, n))
                s && s.push(o);
            else if (l = k.contains(o.ownerDocument, o),
            a = rt(u.appendChild(o), "script"),
            l && lt(a),
            i)
                for (h = 0; o = a[h++]; )
                    ot.test(o.type || "") && i.push(o);
        return u
    }
    e = w.createDocumentFragment().appendChild(w.createElement("div")),
    (_ = w.createElement("input")).setAttribute("type", "radio"),
    _.setAttribute("checked", "checked"),
    _.setAttribute("name", "t"),
    e.appendChild(_),
    g.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
    e.innerHTML = "<textarea>x</textarea>",
    g.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    var ct = w.documentElement
      , dt = /^key/
      , pt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , ft = /^([^.]*)(?:\.(.+)|)/;
    function mt() {
        return !0
    }
    function gt() {
        return !1
    }
    function vt() {
        try {
            return w.activeElement
        } catch (t) {}
    }
    function bt(t, e, i, n, s, o) {
        var a, r;
        if ("object" == typeof e) {
            for (r in "string" != typeof i && (n = n || i,
            i = void 0),
            e)
                bt(t, r, i, n, e[r], o);
            return t
        }
        if (null == n && null == s ? (s = i,
        n = i = void 0) : null == s && ("string" == typeof i ? (s = n,
        n = void 0) : (s = n,
        n = i,
        i = void 0)),
        !1 === s)
            s = gt;
        else if (!s)
            return t;
        return 1 === o && (a = s,
        (s = function(t) {
            return k().off(t),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = k.guid++)),
        t.each(function() {
            k.event.add(this, e, s, n, i)
        })
    }
    k.event = {
        global: {},
        add: function(e, t, i, n, s) {
            var o, a, r, l, h, u, c, d, p, f = U.get(e);
            if (f)
                for (i.handler && (i = (o = i).handler,
                s = o.selector),
                s && k.find.matchesSelector(ct, s),
                i.guid || (i.guid = k.guid++),
                (r = f.events) || (r = f.events = {}),
                (a = f.handle) || (a = f.handle = function(t) {
                    return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(H) || [""]).length; l--; )
                    c = p = (h = ft.exec(t[l]) || [])[1],
                    d = (h[2] || "").split(".").sort(),
                    c && (u = k.event.special[c] || {},
                    c = (s ? u.delegateType : u.bindType) || c,
                    u = k.event.special[c] || {},
                    h = k.extend({
                        type: c,
                        origType: p,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && k.expr.match.needsContext.test(s),
                        namespace: d.join(".")
                    }, o),
                    (p = r[c]) || ((p = r[c] = []).delegateCount = 0,
                    u.setup && !1 !== u.setup.call(e, n, d, a) || e.addEventListener && e.addEventListener(c, a)),
                    u.add && (u.add.call(e, h),
                    h.handler.guid || (h.handler.guid = i.guid)),
                    s ? p.splice(p.delegateCount++, 0, h) : p.push(h),
                    k.event.global[c] = !0)
        },
        remove: function(t, e, i, n, s) {
            var o, a, r, l, h, u, c, d, p, f, m, g = U.hasData(t) && U.get(t);
            if (g && (l = g.events)) {
                for (h = (e = (e || "").match(H) || [""]).length; h--; )
                    if (p = m = (r = ft.exec(e[h]) || [])[1],
                    f = (r[2] || "").split(".").sort(),
                    p) {
                        for (c = k.event.special[p] || {},
                        d = l[p = (n ? c.delegateType : c.bindType) || p] || [],
                        r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = d.length; o--; )
                            u = d[o],
                            !s && m !== u.origType || i && i.guid !== u.guid || r && !r.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(o, 1),
                            u.selector && d.delegateCount--,
                            c.remove && c.remove.call(t, u));
                        a && !d.length && (c.teardown && !1 !== c.teardown.call(t, f, g.handle) || k.removeEvent(t, p, g.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            k.event.remove(t, p + e[h], i, n, !0);
                k.isEmptyObject(l) && U.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, i, n, s, o, a = k.event.fix(t), r = new Array(arguments.length), l = (U.get(this, "events") || {})[a.type] || [], t = k.event.special[a.type] || {};
            for (r[0] = a,
            e = 1; e < arguments.length; e++)
                r[e] = arguments[e];
            if (a.delegateTarget = this,
            !t.preDispatch || !1 !== t.preDispatch.call(this, a)) {
                for (o = k.event.handlers.call(this, a, l),
                e = 0; (n = o[e++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = n.elem,
                    i = 0; (s = n.handlers[i++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s,
                        a.data = s.data,
                        void 0 !== (s = ((k.event.special[s.origType] || {}).handle || s.handler).apply(n.elem, r)) && !1 === (a.result = s) && (a.preventDefault(),
                        a.stopPropagation()));
                return t.postDispatch && t.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, a, r = [], l = e.delegateCount, h = t.target;
            if (l && h.nodeType && !("click" === t.type && 1 <= t.button))
                for (; h !== this; h = h.parentNode || this)
                    if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                        for (o = [],
                        a = {},
                        i = 0; i < l; i++)
                            void 0 === a[s = (n = e[i]).selector + " "] && (a[s] = n.needsContext ? -1 < k(s, this).index(h) : k.find(s, this, null, [h]).length),
                            a[s] && o.push(n);
                        o.length && r.push({
                            elem: h,
                            handlers: o
                        })
                    }
            return h = this,
            l < e.length && r.push({
                elem: h,
                handlers: e.slice(l)
            }),
            r
        },
        addProp: function(e, t) {
            Object.defineProperty(k.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: k.isFunction(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(t) {
            return t[k.expando] ? t : new k.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== vt() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === vt() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && k.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(t) {
                    return k.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    k.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }
    ,
    k.Event = function(t, e) {
        return this instanceof k.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? mt : gt,
        this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
        this.currentTarget = t.currentTarget,
        this.relatedTarget = t.relatedTarget) : this.type = t,
        e && k.extend(this, e),
        this.timeStamp = t && t.timeStamp || k.now(),
        void (this[k.expando] = !0)) : new k.Event(t,e)
    }
    ,
    k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: gt,
        isPropagationStopped: gt,
        isImmediatePropagationStopped: gt,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = mt,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = mt,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = mt,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && dt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && pt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, k.event.addProp),
    k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, s) {
        k.event.special[t] = {
            delegateType: s,
            bindType: s,
            handle: function(t) {
                var e, i = t.relatedTarget, n = t.handleObj;
                return i && (i === this || k.contains(this, i)) || (t.type = n.origType,
                e = n.handler.apply(this, arguments),
                t.type = s),
                e
            }
        }
    }),
    k.fn.extend({
        on: function(t, e, i, n) {
            return bt(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return bt(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj)
                return n = t.handleObj,
                k(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
            if ("object" != typeof t)
                return !1 !== e && "function" != typeof e || (i = e,
                e = void 0),
                !1 === i && (i = gt),
                this.each(function() {
                    k.event.remove(this, t, i, e)
                });
            for (s in t)
                this.off(s, e, t[s]);
            return this
        }
    });
    var yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , _t = /<script|<style|<link/i
      , xt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ct = /^true\/(.*)/
      , wt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function kt(t, e) {
        return k.nodeName(t, "table") && k.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") && t.getElementsByTagName("tbody")[0] || t
    }
    function Dt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function Tt(t) {
        var e = Ct.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function Pt(t, e) {
        var i, n, s, o, a, r;
        if (1 === e.nodeType) {
            if (U.hasData(t) && (o = U.access(t),
            a = U.set(e, o),
            r = o.events))
                for (s in delete a.handle,
                a.events = {},
                r)
                    for (i = 0,
                    n = r[s].length; i < n; i++)
                        k.event.add(e, s, r[s][i]);
            G.hasData(t) && (t = G.access(t),
            t = k.extend({}, t),
            G.set(e, t))
        }
    }
    function Mt(i, n, s, o) {
        n = m.apply([], n);
        var t, e, a, r, l, h, u = 0, c = i.length, d = c - 1, p = n[0], f = k.isFunction(p);
        if (f || 1 < c && "string" == typeof p && !g.checkClone && xt.test(p))
            return i.each(function(t) {
                var e = i.eq(t);
                f && (n[0] = p.call(this, t, e.html())),
                Mt(e, n, s, o)
            });
        if (c && (e = (t = ut(n, i[0].ownerDocument, !1, i, o)).firstChild,
        1 === t.childNodes.length && (t = e),
        e || o)) {
            for (r = (a = k.map(rt(t, "script"), Dt)).length; u < c; u++)
                l = t,
                u !== d && (l = k.clone(l, !0, !0),
                r && k.merge(a, rt(l, "script"))),
                s.call(i[u], l, u);
            if (r)
                for (h = a[a.length - 1].ownerDocument,
                k.map(a, Tt),
                u = 0; u < r; u++)
                    l = a[u],
                    ot.test(l.type || "") && !U.access(l, "globalEval") && k.contains(h, l) && (l.src ? k._evalUrl && k._evalUrl(l.src) : v(l.textContent.replace(wt, ""), h))
        }
        return i
    }
    function St(t, e, i) {
        for (var n, s = e ? k.filter(e, t) : t, o = 0; null != (n = s[o]); o++)
            i || 1 !== n.nodeType || k.cleanData(rt(n)),
            n.parentNode && (i && k.contains(n.ownerDocument, n) && lt(rt(n, "script")),
            n.parentNode.removeChild(n));
        return t
    }
    k.extend({
        htmlPrefilter: function(t) {
            return t.replace(yt, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, s, o, a, r, l, h, u = t.cloneNode(!0), c = k.contains(t.ownerDocument, t);
            if (!(g.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || k.isXMLDoc(t)))
                for (a = rt(u),
                n = 0,
                s = (o = rt(t)).length; n < s; n++)
                    r = o[n],
                    l = a[n],
                    h = void 0,
                    "input" === (h = l.nodeName.toLowerCase()) && nt.test(r.type) ? l.checked = r.checked : "input" !== h && "textarea" !== h || (l.defaultValue = r.defaultValue);
            if (e)
                if (i)
                    for (o = o || rt(t),
                    a = a || rt(u),
                    n = 0,
                    s = o.length; n < s; n++)
                        Pt(o[n], a[n]);
                else
                    Pt(t, u);
            return 0 < (a = rt(u, "script")).length && lt(a, !c && rt(t, "script")),
            u
        },
        cleanData: function(t) {
            for (var e, i, n, s = k.event.special, o = 0; void 0 !== (i = t[o]); o++)
                if (W(i)) {
                    if (e = i[U.expando]) {
                        if (e.events)
                            for (n in e.events)
                                s[n] ? k.event.remove(i, n) : k.removeEvent(i, n, e.handle);
                        i[U.expando] = void 0
                    }
                    i[G.expando] && (i[G.expando] = void 0)
                }
        }
    }),
    k.fn.extend({
        detach: function(t) {
            return St(this, t, !0)
        },
        remove: function(t) {
            return St(this, t)
        },
        text: function(t) {
            return B(this, function(t) {
                return void 0 === t ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return Mt(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || kt(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return Mt(this, arguments, function(t) {
                var e;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = kt(this, t)).insertBefore(t, e.firstChild)
            })
        },
        before: function() {
            return Mt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return Mt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (k.cleanData(rt(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return k.clone(this, t, e)
            })
        },
        html: function(t) {
            return B(this, function(t) {
                var e = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !_t.test(t) && !at[(st.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = k.htmlPrefilter(t);
                    try {
                        for (; i < n; i++)
                            1 === (e = this[i] || {}).nodeType && (k.cleanData(rt(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return Mt(this, arguments, function(t) {
                var e = this.parentNode;
                k.inArray(this, i) < 0 && (k.cleanData(rt(this)),
                e && e.replaceChild(t, this))
            }, i)
        }
    }),
    k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, a) {
        k.fn[t] = function(t) {
            for (var e, i = [], n = k(t), s = n.length - 1, o = 0; o <= s; o++)
                e = o === s ? this : this.clone(!0),
                k(n[o])[a](e),
                l.apply(i, e.get());
            return this.pushStack(i)
        }
    });
    var Et, It, At, Nt, $t, Ht, Ot = /^margin/, Ft = new RegExp("^(" + c + ")(?!px)[a-z%]+$","i"), Rt = function(t) {
        var e = t.ownerDocument.defaultView;
        return e && e.opener || (e = C),
        e.getComputedStyle(t)
    };
    function zt() {
        var t;
        Ht && (Ht.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
        Ht.innerHTML = "",
        ct.appendChild($t),
        t = C.getComputedStyle(Ht),
        Et = "1%" !== t.top,
        Nt = "2px" === t.marginLeft,
        It = "4px" === t.width,
        Ht.style.marginRight = "50%",
        At = "4px" === t.marginRight,
        ct.removeChild($t),
        Ht = null)
    }
    function Lt(t, e, i) {
        var n, s, o = t.style;
        return (i = i || Rt(t)) && ("" !== (s = i.getPropertyValue(e) || i[e]) || k.contains(t.ownerDocument, t) || (s = k.style(t, e)),
        !g.pixelMarginRight() && Ft.test(s) && Ot.test(e) && (n = o.width,
        t = o.minWidth,
        e = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = s,
        s = i.width,
        o.width = n,
        o.minWidth = t,
        o.maxWidth = e)),
        void 0 !== s ? s + "" : s
    }
    function jt(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    $t = w.createElement("div"),
    (Ht = w.createElement("div")).style && (Ht.style.backgroundClip = "content-box",
    Ht.cloneNode(!0).style.backgroundClip = "",
    g.clearCloneStyle = "content-box" === Ht.style.backgroundClip,
    $t.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
    $t.appendChild(Ht),
    k.extend(g, {
        pixelPosition: function() {
            return zt(),
            Et
        },
        boxSizingReliable: function() {
            return zt(),
            It
        },
        pixelMarginRight: function() {
            return zt(),
            At
        },
        reliableMarginLeft: function() {
            return zt(),
            Nt
        }
    }));
    var Wt = /^(none|table(?!-c[ea]).+)/
      , Bt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , qt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ut = ["Webkit", "Moz", "ms"]
      , Gt = w.createElement("div").style;
    function Yt(t) {
        if (t in Gt)
            return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = Ut.length; i--; )
            if ((t = Ut[i] + e)in Gt)
                return t
    }
    function Vt(t, e, i) {
        var n = Q.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }
    function Kt(t, e, i, n, s) {
        for (var o = 0, a = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; a < 4; a += 2)
            "margin" === i && (o += k.css(t, i + J[a], !0, s)),
            n ? ("content" === i && (o -= k.css(t, "padding" + J[a], !0, s)),
            "margin" !== i && (o -= k.css(t, "border" + J[a] + "Width", !0, s))) : (o += k.css(t, "padding" + J[a], !0, s),
            "padding" !== i && (o += k.css(t, "border" + J[a] + "Width", !0, s)));
        return o
    }
    function Xt(t, e, i) {
        var n, s = !0, o = Rt(t), a = "border-box" === k.css(t, "boxSizing", !1, o);
        if (t.getClientRects().length && (n = t.getBoundingClientRect()[e]),
        n <= 0 || null == n) {
            if (((n = Lt(t, e, o)) < 0 || null == n) && (n = t.style[e]),
            Ft.test(n))
                return n;
            s = a && (g.boxSizingReliable() || n === t.style[e]),
            n = parseFloat(n) || 0
        }
        return n + Kt(t, e, i || (a ? "border" : "content"), s, o) + "px"
    }
    function Qt(t, e, i, n, s) {
        return new Qt.prototype.init(t,e,i,n,s)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        t = Lt(t, "opacity");
                        return "" === t ? "1" : t
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, a, r = k.camelCase(e), l = t.style;
                return e = k.cssProps[r] || (k.cssProps[r] = Yt(r) || r),
                a = k.cssHooks[e] || k.cssHooks[r],
                void 0 === i ? a && "get"in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e] : ("string" === (o = typeof i) && (s = Q.exec(i)) && s[1] && (i = tt(t, e, s),
                o = "number"),
                void (null != i && i == i && ("number" === o && (i += s && s[3] || (k.cssNumber[r] ? "" : "px")),
                g.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                a && "set"in a && void 0 === (i = a.set(t, i, n)) || (l[e] = i))))
            }
        },
        css: function(t, e, i, n) {
            var s, o = k.camelCase(e);
            return e = k.cssProps[o] || (k.cssProps[o] = Yt(o) || o),
            (o = k.cssHooks[e] || k.cssHooks[o]) && "get"in o && (s = o.get(t, !0, i)),
            void 0 === s && (s = Lt(t, e, n)),
            "normal" === s && e in qt && (s = qt[e]),
            "" === i || i ? (e = parseFloat(s),
            !0 === i || isFinite(e) ? e || 0 : s) : s
        }
    }),
    k.each(["height", "width"], function(t, o) {
        k.cssHooks[o] = {
            get: function(t, e, i) {
                if (e)
                    return !Wt.test(k.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Xt(t, o, i) : X(t, Bt, function() {
                        return Xt(t, o, i)
                    })
            },
            set: function(t, e, i) {
                var n, s = i && Rt(t), s = i && Kt(t, o, i, "border-box" === k.css(t, "boxSizing", !1, s), s);
                return s && (n = Q.exec(e)) && "px" !== (n[3] || "px") && (t.style[o] = e,
                e = k.css(t, o)),
                Vt(0, e, s)
            }
        }
    }),
    k.cssHooks.marginLeft = jt(g.reliableMarginLeft, function(t, e) {
        if (e)
            return (parseFloat(Lt(t, "marginLeft")) || t.getBoundingClientRect().left - X(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
    }),
    k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(s, o) {
        k.cssHooks[s + o] = {
            expand: function(t) {
                for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++)
                    i[s + J[e] + o] = n[e] || n[e - 2] || n[0];
                return i
            }
        },
        Ot.test(s) || (k.cssHooks[s + o].set = Vt)
    }),
    k.fn.extend({
        css: function(t, e) {
            return B(this, function(t, e, i) {
                var n, s, o = {}, a = 0;
                if (k.isArray(e)) {
                    for (n = Rt(t),
                    s = e.length; a < s; a++)
                        o[e[a]] = k.css(t, e[a], !1, n);
                    return o
                }
                return void 0 !== i ? k.style(t, e, i) : k.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }),
    (k.Tween = Qt).prototype = {
        constructor: Qt,
        init: function(t, e, i, n, s, o) {
            this.elem = t,
            this.prop = i,
            this.easing = s || k.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = o || (k.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = Qt.propHooks[this.prop];
            return (t && t.get ? t : Qt.propHooks._default).get(this)
        },
        run: function(t) {
            var e, i = Qt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = k.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (i && i.set ? i : Qt.propHooks._default).set(this),
            this
        }
    },
    Qt.prototype.init.prototype = Qt.prototype,
    Qt.propHooks = {
        _default: {
            get: function(t) {
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (t = k.css(t.elem, t.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(t) {
                k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[k.cssProps[t.prop]] && !k.cssHooks[t.prop] ? t.elem[t.prop] = t.now : k.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    },
    Qt.propHooks.scrollTop = Qt.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    k.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    k.fx = Qt.prototype.init,
    k.fx.step = {};
    var Jt, Zt, te = /^(?:toggle|show|hide)$/, ee = /queueHooks$/;
    function ie() {
        Zt && (C.requestAnimationFrame(ie),
        k.fx.tick())
    }
    function ne() {
        return C.setTimeout(function() {
            Jt = void 0
        }),
        Jt = k.now()
    }
    function se(t, e) {
        var i, n = 0, s = {
            height: t
        };
        for (e = e ? 1 : 0; n < 4; n += 2 - e)
            s["margin" + (i = J[n])] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t),
        s
    }
    function oe(t, e, i) {
        for (var n, s = (ae.tweeners[e] || []).concat(ae.tweeners["*"]), o = 0, a = s.length; o < a; o++)
            if (n = s[o].call(i, e, t))
                return n
    }
    function ae(s, t, e) {
        var i, o, n = 0, a = ae.prefilters.length, r = k.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = Jt || ne(), t = Math.max(0, h.startTime + h.duration - t), e = 1 - (t / h.duration || 0), i = 0, n = h.tweens.length; i < n; i++)
                h.tweens[i].run(e);
            return r.notifyWith(s, [h, e, t]),
            e < 1 && n ? t : (r.resolveWith(s, [h]),
            !1)
        }, h = r.promise({
            elem: s,
            props: k.extend({}, t),
            opts: k.extend(!0, {
                specialEasing: {},
                easing: k.easing._default
            }, e),
            originalProperties: t,
            originalOptions: e,
            startTime: Jt || ne(),
            duration: e.duration,
            tweens: [],
            createTween: function(t, e) {
                t = k.Tween(s, h.opts, t, e, h.opts.specialEasing[t] || h.opts.easing);
                return h.tweens.push(t),
                t
            },
            stop: function(t) {
                var e = 0
                  , i = t ? h.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; e < i; e++)
                    h.tweens[e].run(1);
                return t ? (r.notifyWith(s, [h, 1, 0]),
                r.resolveWith(s, [h, t])) : r.rejectWith(s, [h, t]),
                this
            }
        }), u = h.props;
        for (function(t, e) {
            var i, n, s, o, a;
            for (i in t)
                if (n = k.camelCase(i),
                s = e[n],
                o = t[i],
                k.isArray(o) && (s = o[1],
                o = t[i] = o[0]),
                i !== n && (t[n] = o,
                delete t[i]),
                a = k.cssHooks[n],
                a && "expand"in a)
                    for (i in o = a.expand(o),
                    delete t[n],
                    o)
                        i in t || (t[i] = o[i],
                        e[i] = s);
                else
                    e[n] = s
        }(u, h.opts.specialEasing); n < a; n++)
            if (i = ae.prefilters[n].call(h, s, u, h.opts))
                return k.isFunction(i.stop) && (k._queueHooks(h.elem, h.opts.queue).stop = k.proxy(i.stop, i)),
                i;
        return k.map(u, oe, h),
        k.isFunction(h.opts.start) && h.opts.start.call(s, h),
        k.fx.timer(k.extend(l, {
            elem: s,
            anim: h,
            queue: h.opts.queue
        })),
        h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }
    k.Animation = k.extend(ae, {
        tweeners: {
            "*": [function(t, e) {
                var i = this.createTween(t, e);
                return tt(i.elem, t, Q.exec(e), i),
                i
            }
            ]
        },
        tweener: function(t, e) {
            for (var i, n = 0, s = (t = k.isFunction(t) ? (e = t,
            ["*"]) : t.match(H)).length; n < s; n++)
                i = t[n],
                ae.tweeners[i] = ae.tweeners[i] || [],
                ae.tweeners[i].unshift(e)
        },
        prefilters: [function(t, e, i) {
            var n, s, o, a, r, l, h, u = "width"in e || "height"in e, c = this, d = {}, p = t.style, f = t.nodeType && Z(t), m = U.get(t, "fxshow");
            for (n in i.queue || (null == (a = k._queueHooks(t, "fx")).unqueued && (a.unqueued = 0,
            r = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || r()
            }
            ),
            a.unqueued++,
            c.always(function() {
                c.always(function() {
                    a.unqueued--,
                    k.queue(t, "fx").length || a.empty.fire()
                })
            })),
            e)
                if (s = e[n],
                te.test(s)) {
                    if (delete e[n],
                    o = o || "toggle" === s,
                    s === (f ? "hide" : "show")) {
                        if ("show" !== s || !m || void 0 === m[n])
                            continue;
                        f = !0
                    }
                    d[n] = m && m[n] || k.style(t, n)
                }
            if ((l = !k.isEmptyObject(e)) || !k.isEmptyObject(d))
                for (n in u && 1 === t.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (h = m && m.display) && (h = U.get(t, "display")),
                "none" === (u = k.css(t, "display")) && (h ? u = h : (it([t], !0),
                h = t.style.display || h,
                u = k.css(t, "display"),
                it([t]))),
                ("inline" === u || "inline-block" === u && null != h) && "none" === k.css(t, "float") && (l || (c.done(function() {
                    p.display = h
                }),
                null == h && (u = p.display,
                h = "none" === u ? "" : u)),
                p.display = "inline-block")),
                i.overflow && (p.overflow = "hidden",
                c.always(function() {
                    p.overflow = i.overflow[0],
                    p.overflowX = i.overflow[1],
                    p.overflowY = i.overflow[2]
                })),
                l = !1,
                d)
                    l || (m ? "hidden"in m && (f = m.hidden) : m = U.access(t, "fxshow", {
                        display: h
                    }),
                    o && (m.hidden = !f),
                    f && it([t], !0),
                    c.done(function() {
                        for (n in f || it([t]),
                        U.remove(t, "fxshow"),
                        d)
                            k.style(t, n, d[n])
                    })),
                    l = oe(f ? m[n] : 0, n, c),
                    n in m || (m[n] = l.start,
                    f && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(t, e) {
            e ? ae.prefilters.unshift(t) : ae.prefilters.push(t)
        }
    }),
    k.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? k.extend({}, t) : {
            complete: i || !i && e || k.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !k.isFunction(e) && e
        };
        return k.fx.off || w.hidden ? n.duration = 0 : "number" != typeof n.duration && (n.duration in k.fx.speeds ? n.duration = k.fx.speeds[n.duration] : n.duration = k.fx.speeds._default),
        null != n.queue && !0 !== n.queue || (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            k.isFunction(n.old) && n.old.call(this),
            n.queue && k.dequeue(this, n.queue)
        }
        ,
        n
    }
    ,
    k.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Z).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(e, t, i, n) {
            var s = k.isEmptyObject(e)
              , o = k.speed(t, i, n)
              , n = function() {
                var t = ae(this, k.extend({}, e), o);
                (s || U.get(this, "finish")) && t.stop(!0)
            };
            return n.finish = n,
            s || !1 === o.queue ? this.each(n) : this.queue(o.queue, n)
        },
        stop: function(s, t, o) {
            function a(t) {
                var e = t.stop;
                delete t.stop,
                e(o)
            }
            return "string" != typeof s && (o = t,
            t = s,
            s = void 0),
            t && !1 !== s && this.queue(s || "fx", []),
            this.each(function() {
                var t = !0
                  , e = null != s && s + "queueHooks"
                  , i = k.timers
                  , n = U.get(this);
                if (e)
                    n[e] && n[e].stop && a(n[e]);
                else
                    for (e in n)
                        n[e] && n[e].stop && ee.test(e) && a(n[e]);
                for (e = i.length; e--; )
                    i[e].elem !== this || null != s && i[e].queue !== s || (i[e].anim.stop(o),
                    t = !1,
                    i.splice(e, 1));
                !t && o || k.dequeue(this, s)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var t, e = U.get(this), i = e[a + "queue"], n = e[a + "queueHooks"], s = k.timers, o = i ? i.length : 0;
                for (e.finish = !0,
                k.queue(this, a, []),
                n && n.stop && n.stop.call(this, !0),
                t = s.length; t--; )
                    s[t].elem === this && s[t].queue === a && (s[t].anim.stop(!0),
                    s.splice(t, 1));
                for (t = 0; t < o; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete e.finish
            })
        }
    }),
    k.each(["toggle", "show", "hide"], function(t, n) {
        var s = k.fn[n];
        k.fn[n] = function(t, e, i) {
            return null == t || "boolean" == typeof t ? s.apply(this, arguments) : this.animate(se(n, !0), t, e, i)
        }
    }),
    k.each({
        slideDown: se("show"),
        slideUp: se("hide"),
        slideToggle: se("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, n) {
        k.fn[t] = function(t, e, i) {
            return this.animate(n, t, e, i)
        }
    }),
    k.timers = [],
    k.fx.tick = function() {
        var t, e = 0, i = k.timers;
        for (Jt = k.now(); e < i.length; e++)
            (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || k.fx.stop(),
        Jt = void 0
    }
    ,
    k.fx.timer = function(t) {
        k.timers.push(t),
        t() ? k.fx.start() : k.timers.pop()
    }
    ,
    k.fx.interval = 13,
    k.fx.start = function() {
        Zt = Zt || (C.requestAnimationFrame ? C.requestAnimationFrame(ie) : C.setInterval(k.fx.tick, k.fx.interval))
    }
    ,
    k.fx.stop = function() {
        C.cancelAnimationFrame ? C.cancelAnimationFrame(Zt) : C.clearInterval(Zt),
        Zt = null
    }
    ,
    k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    k.fn.delay = function(n, t) {
        return n = k.fx && k.fx.speeds[n] || n,
        t = t || "fx",
        this.queue(t, function(t, e) {
            var i = C.setTimeout(t, n);
            e.stop = function() {
                C.clearTimeout(i)
            }
        })
    }
    ,
    e = w.createElement("input"),
    c = w.createElement("select").appendChild(w.createElement("option")),
    e.type = "checkbox",
    g.checkOn = "" !== e.value,
    g.optSelected = c.selected,
    (e = w.createElement("input")).value = "t",
    e.type = "radio",
    g.radioValue = "t" === e.value;
    var re, le = k.expr.attrHandle;
    k.fn.extend({
        attr: function(t, e) {
            return B(this, k.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                k.removeAttr(this, t)
            })
        }
    }),
    k.extend({
        attr: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === t.getAttribute ? k.prop(t, e, i) : (1 === o && k.isXMLDoc(t) || (s = k.attrHooks[e.toLowerCase()] || (k.expr.match.bool.test(e) ? re : void 0)),
                void 0 !== i ? null === i ? void k.removeAttr(t, e) : s && "set"in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""),
                i) : s && "get"in s && null !== (n = s.get(t, e)) ? n : null == (n = k.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!g.radioValue && "radio" === e && k.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e),
                        i && (t.value = i),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n = 0, s = e && e.match(H);
            if (s && 1 === t.nodeType)
                for (; i = s[n++]; )
                    t.removeAttribute(i)
        }
    }),
    re = {
        set: function(t, e, i) {
            return !1 === e ? k.removeAttr(t, i) : t.setAttribute(i, i),
            i
        }
    },
    k.each(k.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var a = le[e] || k.find.attr;
        le[e] = function(t, e, i) {
            var n, s, o = e.toLowerCase();
            return i || (s = le[o],
            le[o] = n,
            n = null != a(t, e, i) ? o : null,
            le[o] = s),
            n
        }
    });
    var he = /^(?:input|select|textarea|button)$/i
      , ue = /^(?:a|area)$/i;
    function ce(t) {
        return (t.match(H) || []).join(" ")
    }
    function de(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    k.fn.extend({
        prop: function(t, e) {
            return B(this, k.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[k.propFix[t] || t]
            })
        }
    }),
    k.extend({
        prop: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && k.isXMLDoc(t) || (e = k.propFix[e] || e,
                s = k.propHooks[e]),
                void 0 !== i ? s && "set"in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get"in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = k.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : he.test(t.nodeName) || ue.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    g.optSelected || (k.propHooks.selected = {
        get: function(t) {
            t = t.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(t) {
            t = t.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }),
    k.fn.extend({
        addClass: function(e) {
            var t, i, n, s, o, a, r = 0;
            if (k.isFunction(e))
                return this.each(function(t) {
                    k(this).addClass(e.call(this, t, de(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(H) || []; i = this[r++]; )
                    if (a = de(i),
                    n = 1 === i.nodeType && " " + ce(a) + " ") {
                        for (o = 0; s = t[o++]; )
                            n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        a !== (a = ce(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, s, o, a, r = 0;
            if (k.isFunction(e))
                return this.each(function(t) {
                    k(this).removeClass(e.call(this, t, de(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(H) || []; i = this[r++]; )
                    if (a = de(i),
                    n = 1 === i.nodeType && " " + ce(a) + " ") {
                        for (o = 0; s = t[o++]; )
                            for (; -1 < n.indexOf(" " + s + " "); )
                                n = n.replace(" " + s + " ", " ");
                        a !== (a = ce(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(s, e) {
            var o = typeof s;
            return "boolean" == typeof e && "string" == o ? e ? this.addClass(s) : this.removeClass(s) : k.isFunction(s) ? this.each(function(t) {
                k(this).toggleClass(s.call(this, t, de(this), e), e)
            }) : this.each(function() {
                var t, e, i, n;
                if ("string" == o)
                    for (e = 0,
                    i = k(this),
                    n = s.match(H) || []; t = n[e++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== s && "boolean" != o || ((t = de(this)) && U.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", !t && !1 !== s && U.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            for (var e, i = 0, n = " " + t + " "; e = this[i++]; )
                if (1 === e.nodeType && -1 < (" " + ce(de(e)) + " ").indexOf(n))
                    return !0;
            return !1
        }
    });
    var pe = /\r/g;
    k.fn.extend({
        val: function(e) {
            var i, t, n, s = this[0];
            return arguments.length ? (n = k.isFunction(e),
            this.each(function(t) {
                1 === this.nodeType && (null == (t = n ? e.call(this, t, k(this).val()) : e) ? t = "" : "number" == typeof t ? t += "" : k.isArray(t) && (t = k.map(t, function(t) {
                    return null == t ? "" : t + ""
                })),
                (i = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set"in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : s ? (i = k.valHooks[s.type] || k.valHooks[s.nodeName.toLowerCase()]) && "get"in i && void 0 !== (t = i.get(s, "value")) ? t : "string" == typeof (t = s.value) ? t.replace(pe, "") : null == t ? "" : t : void 0
        }
    }),
    k.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = k.find.attr(t, "value");
                    return null != e ? e : ce(k.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i = t.options, n = t.selectedIndex, s = "select-one" === t.type, o = s ? null : [], a = s ? n + 1 : i.length, r = n < 0 ? a : s ? n : 0; r < a; r++)
                        if (((e = i[r]).selected || r === n) && !e.disabled && (!e.parentNode.disabled || !k.nodeName(e.parentNode, "optgroup"))) {
                            if (e = k(e).val(),
                            s)
                                return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = k.makeArray(e), a = s.length; a--; )
                        ((n = s[a]).selected = -1 < k.inArray(k.valHooks.option.get(n), o)) && (i = !0);
                    return i || (t.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(t, e) {
                if (k.isArray(e))
                    return t.checked = -1 < k.inArray(k(t).val(), e)
            }
        },
        g.checkOn || (k.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var fe = /^(?:focusinfocus|focusoutblur)$/;
    k.extend(k.event, {
        trigger: function(t, e, i, n) {
            var s, o, a, r, l, h, u = [i || w], c = f.call(t, "type") ? t.type : t, d = f.call(t, "namespace") ? t.namespace.split(".") : [], p = o = i = i || w;
            if (3 !== i.nodeType && 8 !== i.nodeType && !fe.test(c + k.event.triggered) && (-1 < c.indexOf(".") && (c = (d = c.split(".")).shift(),
            d.sort()),
            r = c.indexOf(":") < 0 && "on" + c,
            (t = t[k.expando] ? t : new k.Event(c,"object" == typeof t && t)).isTrigger = n ? 2 : 3,
            t.namespace = d.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            e = null == e ? [t] : k.makeArray(e, [t]),
            h = k.event.special[c] || {},
            n || !h.trigger || !1 !== h.trigger.apply(i, e))) {
                if (!n && !h.noBubble && !k.isWindow(i)) {
                    for (a = h.delegateType || c,
                    fe.test(a + c) || (p = p.parentNode); p; p = p.parentNode)
                        u.push(p),
                        o = p;
                    o === (i.ownerDocument || w) && u.push(o.defaultView || o.parentWindow || C)
                }
                for (s = 0; (p = u[s++]) && !t.isPropagationStopped(); )
                    t.type = 1 < s ? a : h.bindType || c,
                    (l = (U.get(p, "events") || {})[t.type] && U.get(p, "handle")) && l.apply(p, e),
                    (l = r && p[r]) && l.apply && W(p) && (t.result = l.apply(p, e),
                    !1 === t.result && t.preventDefault());
                return t.type = c,
                n || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(u.pop(), e) || !W(i) || r && k.isFunction(i[c]) && !k.isWindow(i) && ((o = i[r]) && (i[r] = null),
                i[k.event.triggered = c](),
                k.event.triggered = void 0,
                o && (i[r] = o)),
                t.result
            }
        },
        simulate: function(t, e, i) {
            t = k.extend(new k.Event, i, {
                type: t,
                isSimulated: !0
            });
            k.event.trigger(t, null, e)
        }
    }),
    k.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                k.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i)
                return k.event.trigger(t, e, i, !0)
        }
    }),
    k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, i) {
        k.fn[i] = function(t, e) {
            return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
        }
    }),
    k.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    g.focusin = "onfocusin"in C,
    g.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, n) {
        function s(t) {
            k.event.simulate(n, t.target, k.event.fix(t))
        }
        k.event.special[n] = {
            setup: function() {
                var t = this.ownerDocument || this
                  , e = U.access(t, n);
                e || t.addEventListener(i, s, !0),
                U.access(t, n, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this
                  , e = U.access(t, n) - 1;
                e ? U.access(t, n, e) : (t.removeEventListener(i, s, !0),
                U.remove(t, n))
            }
        }
    });
    var me = C.location
      , ge = k.now()
      , ve = /\?/;
    k.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t)
            return null;
        try {
            e = (new C.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + t),
        e
    }
    ;
    var be = /\[\]$/
      , ye = /\r?\n/g
      , _e = /^(?:submit|button|image|reset|file)$/i
      , xe = /^(?:input|select|textarea|keygen)/i;
    k.param = function(t, e) {
        function i(t, e) {
            e = k.isFunction(e) ? e() : e,
            s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e)
        }
        var n, s = [];
        if (k.isArray(t) || t.jquery && !k.isPlainObject(t))
            k.each(t, function() {
                i(this.name, this.value)
            });
        else
            for (n in t)
                !function i(n, t, s, o) {
                    if (k.isArray(t))
                        k.each(t, function(t, e) {
                            s || be.test(n) ? o(n, e) : i(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, s, o)
                        });
                    else if (s || "object" !== k.type(t))
                        o(n, t);
                    else
                        for (var e in t)
                            i(n + "[" + e + "]", t[e], s, o)
                }(n, t[n], e, i);
        return s.join("&")
    }
    ,
    k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = k.prop(this, "elements");
                return t ? k.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !k(this).is(":disabled") && xe.test(this.nodeName) && !_e.test(t) && (this.checked || !nt.test(t))
            }).map(function(t, e) {
                var i = k(this).val();
                return null == i ? null : k.isArray(i) ? k.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ye, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(ye, "\r\n")
                }
            }).get()
        }
    });
    var Ce = /%20/g
      , we = /#.*$/
      , ke = /([?&])_=[^&]*/
      , De = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Te = /^(?:GET|HEAD)$/
      , Pe = /^\/\//
      , Me = {}
      , Se = {}
      , Ee = "*/".concat("*")
      , Ie = w.createElement("a");
    function Ae(o) {
        return function(t, e) {
            "string" != typeof t && (e = t,
            t = "*");
            var i, n = 0, s = t.toLowerCase().match(H) || [];
            if (k.isFunction(e))
                for (; i = s[n++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (o[i] = o[i] || []).unshift(e)) : (o[i] = o[i] || []).push(e)
        }
    }
    function Ne(e, n, s, o) {
        var a = {}
          , r = e === Se;
        function l(t) {
            var i;
            return a[t] = !0,
            k.each(e[t] || [], function(t, e) {
                e = e(n, s, o);
                return "string" != typeof e || r || a[e] ? r ? !(i = e) : void 0 : (n.dataTypes.unshift(e),
                l(e),
                !1)
            }),
            i
        }
        return l(n.dataTypes[0]) || !a["*"] && l("*")
    }
    function $e(t, e) {
        var i, n, s = k.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((s[i] ? t : n = n || {})[i] = e[i]);
        return n && k.extend(!0, t, n),
        t
    }
    Ie.href = me.href,
    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: me.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(me.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ee,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? $e($e(t, k.ajaxSettings), e) : $e(k.ajaxSettings, t)
        },
        ajaxPrefilter: Ae(Me),
        ajaxTransport: Ae(Se),
        ajax: function(t, e) {
            "object" == typeof t && (e = t,
            t = void 0),
            e = e || {};
            var l, h, u, i, c, n, d, p, s, f = k.ajaxSetup({}, e), m = f.context || f, g = f.context && (m.nodeType || m.jquery) ? k(m) : k.event, v = k.Deferred(), b = k.Callbacks("once memory"), y = f.statusCode || {}, o = {}, a = {}, r = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (d) {
                        if (!i)
                            for (i = {}; e = De.exec(u); )
                                i[e[1].toLowerCase()] = e[2];
                        e = i[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return d ? u : null
                },
                setRequestHeader: function(t, e) {
                    return null == d && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t,
                    o[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return null == d && (f.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    if (t)
                        if (d)
                            _.always(t[_.status]);
                        else
                            for (var e in t)
                                y[e] = [y[e], t[e]];
                    return this
                },
                abort: function(t) {
                    t = t || r;
                    return l && l.abort(t),
                    x(0, t),
                    this
                }
            };
            if (v.promise(_),
            f.url = ((t || f.url || me.href) + "").replace(Pe, me.protocol + "//"),
            f.type = e.method || e.type || f.method || f.type,
            f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [""],
            null == f.crossDomain) {
                n = w.createElement("a");
                try {
                    n.href = f.url,
                    n.href = n.href,
                    f.crossDomain = Ie.protocol + "//" + Ie.host != n.protocol + "//" + n.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = k.param(f.data, f.traditional)),
            Ne(Me, f, e, _),
            d)
                return _;
            for (s in (p = k.event && f.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !Te.test(f.type),
            h = f.url.replace(we, ""),
            f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ce, "+")) : (t = f.url.slice(h.length),
            f.data && (h += (ve.test(h) ? "&" : "?") + f.data,
            delete f.data),
            !1 === f.cache && (h = h.replace(ke, "$1"),
            t = (ve.test(h) ? "&" : "?") + "_=" + ge++ + t),
            f.url = h + t),
            f.ifModified && (k.lastModified[h] && _.setRequestHeader("If-Modified-Since", k.lastModified[h]),
            k.etag[h] && _.setRequestHeader("If-None-Match", k.etag[h])),
            (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && _.setRequestHeader("Content-Type", f.contentType),
            _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ee + "; q=0.01" : "") : f.accepts["*"]),
            f.headers)
                _.setRequestHeader(s, f.headers[s]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, _, f) || d))
                return _.abort();
            if (r = "abort",
            b.add(f.complete),
            _.done(f.success),
            _.fail(f.error),
            l = Ne(Se, f, e, _)) {
                if (_.readyState = 1,
                p && g.trigger("ajaxSend", [_, f]),
                d)
                    return _;
                f.async && 0 < f.timeout && (c = C.setTimeout(function() {
                    _.abort("timeout")
                }, f.timeout));
                try {
                    d = !1,
                    l.send(o, x)
                } catch (t) {
                    if (d)
                        throw t;
                    x(-1, t)
                }
            } else
                x(-1, "No Transport");
            function x(t, e, i, n) {
                var s, o, a, r = e;
                d || (d = !0,
                c && C.clearTimeout(c),
                l = void 0,
                u = n || "",
                _.readyState = 0 < t ? 4 : 0,
                n = 200 <= t && t < 300 || 304 === t,
                i && (a = function(t, e, i) {
                    for (var n, s, o, a, r = t.contents, l = t.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (s in r)
                            if (r[s] && r[s].test(n)) {
                                l.unshift(s);
                                break
                            }
                    if (l[0]in i)
                        o = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                o = s;
                                break
                            }
                            a = a || s
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        i[o]
                }(f, _, i)),
                a = function(t, e, i, n) {
                    var s, o, a, r, l, h = {}, u = t.dataTypes.slice();
                    if (u[1])
                        for (a in t.converters)
                            h[a.toLowerCase()] = t.converters[a];
                    for (o = u.shift(); o; )
                        if (t.responseFields[o] && (i[t.responseFields[o]] = e),
                        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        l = o,
                        o = u.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(a = h[l + " " + o] || h["* " + o]))
                                    for (s in h)
                                        if (r = s.split(" "),
                                        r[1] === o && (a = h[l + " " + r[0]] || h["* " + r[0]])) {
                                            !0 === a ? a = h[s] : !0 !== h[s] && (o = r[0],
                                            u.unshift(r[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && t.throws)
                                        e = a(e);
                                    else
                                        try {
                                            e = a(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: a ? t : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(f, a, _, n),
                n ? (f.ifModified && ((i = _.getResponseHeader("Last-Modified")) && (k.lastModified[h] = i),
                (i = _.getResponseHeader("etag")) && (k.etag[h] = i)),
                204 === t || "HEAD" === f.type ? r = "nocontent" : 304 === t ? r = "notmodified" : (r = a.state,
                s = a.data,
                n = !(o = a.error))) : (o = r,
                !t && r || (r = "error",
                t < 0 && (t = 0))),
                _.status = t,
                _.statusText = (e || r) + "",
                n ? v.resolveWith(m, [s, r, _]) : v.rejectWith(m, [_, r, o]),
                _.statusCode(y),
                y = void 0,
                p && g.trigger(n ? "ajaxSuccess" : "ajaxError", [_, f, n ? s : o]),
                b.fireWith(m, [_, r]),
                p && (g.trigger("ajaxComplete", [_, f]),
                --k.active || k.event.trigger("ajaxStop")))
            }
            return _
        },
        getJSON: function(t, e, i) {
            return k.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return k.get(t, void 0, e, "script")
        }
    }),
    k.each(["get", "post"], function(t, s) {
        k[s] = function(t, e, i, n) {
            return k.isFunction(e) && (n = n || i,
            i = e,
            e = void 0),
            k.ajax(k.extend({
                url: t,
                type: s,
                dataType: n,
                data: e,
                success: i
            }, k.isPlainObject(t) && t))
        }
    }),
    k._evalUrl = function(t) {
        return k.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    k.fn.extend({
        wrapAll: function(t) {
            return this[0] && (k.isFunction(t) && (t = t.call(this[0])),
            t = k(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)),
            this
        },
        wrapInner: function(i) {
            return k.isFunction(i) ? this.each(function(t) {
                k(this).wrapInner(i.call(this, t))
            }) : this.each(function() {
                var t = k(this)
                  , e = t.contents();
                e.length ? e.wrapAll(i) : t.append(i)
            })
        },
        wrap: function(e) {
            var i = k.isFunction(e);
            return this.each(function(t) {
                k(this).wrapAll(i ? e.call(this, t) : e)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    k.expr.pseudos.hidden = function(t) {
        return !k.expr.pseudos.visible(t)
    }
    ,
    k.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }
    ,
    k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var He = {
        0: 200,
        1223: 204
    }
      , Oe = k.ajaxSettings.xhr();
    g.cors = !!Oe && "withCredentials"in Oe,
    g.ajax = Oe = !!Oe,
    k.ajaxTransport(function(s) {
        var o, a;
        if (g.cors || Oe && !s.crossDomain)
            return {
                send: function(t, e) {
                    var i, n = s.xhr();
                    if (n.open(s.type, s.url, s.async, s.username, s.password),
                    s.xhrFields)
                        for (i in s.xhrFields)
                            n[i] = s.xhrFields[i];
                    for (i in s.mimeType && n.overrideMimeType && n.overrideMimeType(s.mimeType),
                    s.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"),
                    t)
                        n.setRequestHeader(i, t[i]);
                    o = function(t) {
                        return function() {
                            o && (o = a = n.onload = n.onerror = n.onabort = n.onreadystatechange = null,
                            "abort" === t ? n.abort() : "error" === t ? "number" != typeof n.status ? e(0, "error") : e(n.status, n.statusText) : e(He[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                                binary: n.response
                            } : {
                                text: n.responseText
                            }, n.getAllResponseHeaders()))
                        }
                    }
                    ,
                    n.onload = o(),
                    a = n.onerror = o("error"),
                    void 0 !== n.onabort ? n.onabort = a : n.onreadystatechange = function() {
                        4 === n.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        n.send(s.hasContent && s.data || null)
                    } catch (t) {
                        if (o)
                            throw t
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    k.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }),
    k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return k.globalEval(t),
                t
            }
        }
    }),
    k.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    k.ajaxTransport("script", function(i) {
        var n, s;
        if (i.crossDomain)
            return {
                send: function(t, e) {
                    n = k("<script>").prop({
                        charset: i.scriptCharset,
                        src: i.url
                    }).on("load error", s = function(t) {
                        n.remove(),
                        s = null,
                        t && e("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    w.head.appendChild(n[0])
                },
                abort: function() {
                    s && s()
                }
            }
    });
    var Fe = []
      , Re = /(=)\?(?=&|$)|\?\?/;
    function ze(t) {
        return k.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Fe.pop() || k.expando + "_" + ge++;
            return this[t] = !0,
            t
        }
    }),
    k.ajaxPrefilter("json jsonp", function(t, e, i) {
        var n, s, o, a = !1 !== t.jsonp && (Re.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Re.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return n = t.jsonpCallback = k.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(Re, "$1" + n) : !1 !== t.jsonp && (t.url += (ve.test(t.url) ? "&" : "?") + t.jsonp + "=" + n),
            t.converters["script json"] = function() {
                return o || k.error(n + " was not called"),
                o[0]
            }
            ,
            t.dataTypes[0] = "json",
            s = C[n],
            C[n] = function() {
                o = arguments
            }
            ,
            i.always(function() {
                void 0 === s ? k(C).removeProp(n) : C[n] = s,
                t[n] && (t.jsonpCallback = e.jsonpCallback,
                Fe.push(n)),
                o && k.isFunction(s) && s(o[0]),
                o = s = void 0
            }),
            "script"
    }),
    g.createHTMLDocument = ((e = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === e.childNodes.length),
    k.parseHTML = function(t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e,
        e = !1),
        e || (g.createHTMLDocument ? ((n = (e = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href,
        e.head.appendChild(n)) : e = w),
        n = !i && [],
        (i = P.exec(t)) ? [e.createElement(i[1])] : (i = ut([t], e, n),
        n && n.length && k(n).remove(),
        k.merge([], i.childNodes)));
        var n
    }
    ,
    k.fn.load = function(t, e, i) {
        var n, s, o, a = this, r = t.indexOf(" ");
        return -1 < r && (n = ce(t.slice(r)),
        t = t.slice(0, r)),
        k.isFunction(e) ? (i = e,
        e = void 0) : e && "object" == typeof e && (s = "POST"),
        0 < a.length && k.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            a.html(n ? k("<div>").append(k.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            a.each(function() {
                i.apply(this, o || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        k.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    k.expr.pseudos.animated = function(e) {
        return k.grep(k.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    k.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, a, r = k.css(t, "position"), l = k(t), h = {};
            "static" === r && (t.style.position = "relative"),
            o = l.offset(),
            n = k.css(t, "top"),
            a = k.css(t, "left"),
            a = ("absolute" === r || "fixed" === r) && -1 < (n + a).indexOf("auto") ? (s = (r = l.position()).top,
            r.left) : (s = parseFloat(n) || 0,
            parseFloat(a) || 0),
            k.isFunction(e) && (e = e.call(t, i, k.extend({}, o))),
            null != e.top && (h.top = e.top - o.top + s),
            null != e.left && (h.left = e.left - o.left + a),
            "using"in e ? e.using.call(t, h) : l.css(h)
        }
    },
    k.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    k.offset.setOffset(this, e, t)
                });
            var t, i, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect()).width || t.height ? (n = ze(i = n.ownerDocument),
            i = i.documentElement,
            {
                top: t.top + n.pageYOffset - i.clientTop,
                left: t.left + n.pageXOffset - i.clientLeft
            }) : t : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0], n = {
                    top: 0,
                    left: 0
                };
                return "fixed" === k.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                k.nodeName(t[0], "html") || (n = t.offset()),
                n = {
                    top: n.top + k.css(t[0], "borderTopWidth", !0),
                    left: n.left + k.css(t[0], "borderLeftWidth", !0)
                }),
                {
                    top: e.top - n.top - k.css(i, "marginTop", !0),
                    left: e.left - n.left - k.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === k.css(t, "position"); )
                    t = t.offsetParent;
                return t || ct
            })
        }
    }),
    k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, s) {
        var o = "pageYOffset" === s;
        k.fn[e] = function(t) {
            return B(this, function(t, e, i) {
                var n = ze(t);
                return void 0 === i ? n ? n[s] : t[e] : void (n ? n.scrollTo(o ? n.pageXOffset : i, o ? i : n.pageYOffset) : t[e] = i)
            }, e, t, arguments.length)
        }
    }),
    k.each(["top", "left"], function(t, i) {
        k.cssHooks[i] = jt(g.pixelPosition, function(t, e) {
            if (e)
                return e = Lt(t, i),
                Ft.test(e) ? k(t).position()[i] + "px" : e
        })
    }),
    k.each({
        Height: "height",
        Width: "width"
    }, function(a, r) {
        k.each({
            padding: "inner" + a,
            content: r,
            "": "outer" + a
        }, function(n, o) {
            k.fn[o] = function(t, e) {
                var i = arguments.length && (n || "boolean" != typeof t)
                  , s = n || (!0 === t || !0 === e ? "margin" : "border");
                return B(this, function(t, e, i) {
                    var n;
                    return k.isWindow(t) ? 0 === o.indexOf("outer") ? t["inner" + a] : t.document.documentElement["client" + a] : 9 === t.nodeType ? (n = t.documentElement,
                    Math.max(t.body["scroll" + a], n["scroll" + a], t.body["offset" + a], n["offset" + a], n["client" + a])) : void 0 === i ? k.css(t, e, s) : k.style(t, e, i, s)
                }, r, i ? t : void 0, i)
            }
        })
    }),
    k.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }),
    k.parseJSON = JSON.parse,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Le = C.jQuery
      , je = C.$;
    return k.noConflict = function(t) {
        return C.$ === k && (C.$ = je),
        t && C.jQuery === k && (C.jQuery = Le),
        k
    }
    ,
    t || (C.jQuery = C.$ = k),
    k
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(u) {
    u.extend(u.fn, {
        validate: function(t) {
            if (this.length) {
                var n = u.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"),
                n = new u.validator(t,this[0]),
                u.data(this[0], "validator", n),
                n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                    n.settings.submitHandler && (n.submitButton = t.target),
                    u(this).hasClass("cancel") && (n.cancelSubmit = !0),
                    void 0 !== u(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                }),
                this.on("submit.validate", function(i) {
                    function t() {
                        var t, e;
                        return !n.settings.submitHandler || (n.submitButton && (t = u("<input type='hidden'/>").attr("name", n.submitButton.name).val(u(n.submitButton).val()).appendTo(n.currentForm)),
                        e = n.settings.submitHandler.call(n, n.currentForm, i),
                        n.submitButton && t.remove(),
                        void 0 !== e && e)
                    }
                    return n.settings.debug && i.preventDefault(),
                    n.cancelSubmit ? (n.cancelSubmit = !1,
                    t()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : t() : (n.focusInvalid(),
                    !1)
                })),
                n)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var t, e, i;
            return u(this[0]).is("form") ? t = this.validate().form() : (i = [],
            t = !0,
            e = u(this[0].form).validate(),
            this.each(function() {
                (t = e.element(this) && t) || (i = i.concat(e.errorList))
            }),
            e.errorList = i),
            t
        },
        rules: function(t, e) {
            var i, n, s, o, a, r = this[0];
            if (null != r && null != r.form) {
                if (t)
                    switch (i = u.data(r.form, "validator").settings,
                    n = i.rules,
                    s = u.validator.staticRules(r),
                    t) {
                    case "add":
                        u.extend(s, u.validator.normalizeRule(e)),
                        delete s.messages,
                        n[r.name] = s,
                        e.messages && (i.messages[r.name] = u.extend(i.messages[r.name], e.messages));
                        break;
                    case "remove":
                        return e ? (a = {},
                        u.each(e.split(/\s/), function(t, e) {
                            a[e] = s[e],
                            delete s[e],
                            "required" === e && u(r).removeAttr("aria-required")
                        }),
                        a) : (delete n[r.name],
                        s)
                    }
                return (t = u.validator.normalizeRules(u.extend({}, u.validator.classRules(r), u.validator.attributeRules(r), u.validator.dataRules(r), u.validator.staticRules(r)), r)).required && (o = t.required,
                delete t.required,
                t = u.extend({
                    required: o
                }, t),
                u(r).attr("aria-required", "true")),
                t.remote && (o = t.remote,
                delete t.remote,
                t = u.extend(t, {
                    remote: o
                })),
                t
            }
        }
    }),
    u.extend(u.expr[":"], {
        blank: function(t) {
            return !u.trim("" + u(t).val())
        },
        filled: function(t) {
            t = u(t).val();
            return null !== t && !!u.trim("" + t)
        },
        unchecked: function(t) {
            return !u(t).prop("checked")
        }
    }),
    u.validator = function(t, e) {
        this.settings = u.extend(!0, {}, u.validator.defaults, t),
        this.currentForm = e,
        this.init()
    }
    ,
    u.validator.format = function(i, t) {
        return 1 === arguments.length ? function() {
            var t = u.makeArray(arguments);
            return t.unshift(i),
            u.validator.format.apply(this, t)
        }
        : (void 0 === t || (2 < arguments.length && t.constructor !== Array && (t = u.makeArray(arguments).slice(1)),
        t.constructor !== Array && (t = [t]),
        u.each(t, function(t, e) {
            i = i.replace(new RegExp("\\{" + t + "\\}","g"), function() {
                return e
            })
        })),
        i)
    }
    ,
    u.extend(u.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: u([]),
            errorLabelContainer: u([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t, e) {
                9 === e.which && "" === this.elementValue(t) || -1 !== u.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(t, e, i) {
                ("radio" === t.type ? this.findByName(t.name) : u(t)).addClass(e).removeClass(i)
            },
            unhighlight: function(t, e, i) {
                ("radio" === t.type ? this.findByName(t.name) : u(t)).removeClass(e).addClass(i)
            }
        },
        setDefaults: function(t) {
            u.extend(u.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: u.validator.format("Please enter no more than {0} characters."),
            minlength: u.validator.format("Please enter at least {0} characters."),
            rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
            range: u.validator.format("Please enter a value between {0} and {1}."),
            max: u.validator.format("Please enter a value less than or equal to {0}."),
            min: u.validator.format("Please enter a value greater than or equal to {0}."),
            step: u.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0]);
                    var e = u.data(this.form, "validator")
                      , i = "on" + t.type.replace(/^validate/, "")
                      , n = e.settings;
                    n[i] && !u(this).is(n.ignore) && n[i].call(e, this, t)
                }
                this.labelContainer = u(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm),
                this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var i, n = this.groups = {};
                u.each(this.settings.groups, function(i, t) {
                    "string" == typeof t && (t = t.split(/\s/)),
                    u.each(t, function(t, e) {
                        n[e] = i
                    })
                }),
                i = this.settings.rules,
                u.each(i, function(t, e) {
                    i[t] = u.validator.normalizeRule(e)
                }),
                u(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t),
                this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                u(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                u.extend(this.submitted, this.errorMap),
                this.invalid = u.extend({}, this.errorMap),
                this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
                    this.check(e[t]);
                return this.valid()
            },
            element: function(t) {
                var e, i, n = this.clean(t), s = this.validationTargetFor(n), o = this, a = !0;
                return void 0 === s ? delete this.invalid[n.name] : (this.prepareElement(s),
                this.currentElements = u(s),
                (i = this.groups[s.name]) && u.each(this.groups, function(t, e) {
                    e === i && t !== s.name && ((n = o.validationTargetFor(o.clean(o.findByName(t)))) && n.name in o.invalid && (o.currentElements.push(n),
                    a = o.check(n) && a))
                }),
                e = !1 !== this.check(s),
                a = a && e,
                this.invalid[s.name] = !e,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                u(t).attr("aria-invalid", !e)),
                a
            },
            showErrors: function(e) {
                var i;
                e && (i = this,
                u.extend(this.errorMap, e),
                this.errorList = u.map(this.errorMap, function(t, e) {
                    return {
                        message: t,
                        element: i.findByName(e)[0]
                    }
                }),
                this.successList = u.grep(this.successList, function(t) {
                    return !(t.name in e)
                })),
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                u.fn.resetForm && u(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++)
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""),
                        this.findByName(t[e].name).removeClass(this.settings.validClass);
                else
                    t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, i = 0;
                for (e in t)
                    t[e] && i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""),
                this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === u.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this
                  , i = {};
                return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var t = this.name || u(this).attr("name");
                    return !t && e.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0]),
                    !(t in i || !e.objectLength(u(this).rules()) || (i[t] = !0,
                    0))
                })
            },
            clean: function(t) {
                return u(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return u(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = u([]),
                this.toHide = u([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = u([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(),
                this.toHide = this.errorsFor(t)
            },
            elementValue: function(t) {
                var e = u(t)
                  , i = t.type;
                return "radio" === i || "checkbox" === i ? this.findByName(t.name).filter(":checked").val() : "number" === i && void 0 !== t.validity ? t.validity.badInput ? "NaN" : e.val() : (e = t.hasAttribute("contenteditable") ? e.text() : e.val(),
                "file" === i ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (i = e.lastIndexOf("/")) ? e.substr(i + 1) : 0 <= (i = e.lastIndexOf("\\")) ? e.substr(i + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var t, i, n, s = u(e).rules(), o = u.map(s, function(t, e) {
                    return e
                }).length, a = !1, r = this.elementValue(e);
                if ("function" == typeof s.normalizer) {
                    if ("string" != typeof (r = s.normalizer.call(e, r)))
                        throw new TypeError("The normalizer should return a string value.");
                    delete s.normalizer
                }
                for (i in s) {
                    n = {
                        method: i,
                        parameters: s[i]
                    };
                    try {
                        if ("dependency-mismatch" === (t = u.validator.methods[i].call(this, r, e, n.parameters)) && 1 === o) {
                            a = !0;
                            continue
                        }
                        if (a = !1,
                        "pending" === t)
                            return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!t)
                            return this.formatAndAdd(e, n),
                            !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method.", t),
                        t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method."),
                        t
                    }
                }
                if (!a)
                    return this.objectLength(s) && this.successList.push(e),
                    !0
            },
            customDataMessage: function(t, e) {
                return u(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || u(t).data("msg")
            },
            customMessage: function(t, e) {
                t = this.settings.messages[t];
                return t && (t.constructor === String ? t : t[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t])
                        return arguments[t]
            },
            defaultMessage: function(t, e) {
                "string" == typeof e && (e = {
                    method: e
                });
                var i = this.findDefined(this.customMessage(t.name, e.method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, u.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>")
                  , n = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, e.parameters, t) : n.test(i) && (i = u.validator.format(i.replace(n, "{$1}"), e.parameters)),
                i
            },
            formatAndAdd: function(t, e) {
                var i = this.defaultMessage(t, e);
                this.errorList.push({
                    message: i,
                    element: t,
                    method: e.method
                }),
                this.errorMap[t.name] = i,
                this.submitted[t.name] = i
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))),
                t
            },
            defaultShowErrors: function() {
                for (var t, e, i = 0; this.errorList[i]; i++)
                    e = this.errorList[i],
                    this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(e.element, e.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (i = 0; this.successList[i]; i++)
                        this.showLabel(this.successList[i]);
                if (this.settings.unhighlight)
                    for (i = 0,
                    t = this.validElements(); t[i]; i++)
                        this.settings.unhighlight.call(this, t[i], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return u(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, e) {
                var i, n, s, o = this.errorsFor(t), a = this.idOrName(t), r = u(t).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                o.html(e)) : (i = o = u("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(e || ""),
                this.settings.wrapper && (i = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, u(t)) : i.insertAfter(t),
                o.is("label") ? o.attr("for", a) : 0 === o.parents("label[for='" + this.escapeCssMeta(a) + "']").length && (a = o.attr("id"),
                r ? r.match(new RegExp("\\b" + this.escapeCssMeta(a) + "\\b")) || (r += " " + a) : r = a,
                u(t).attr("aria-describedby", r),
                (n = this.groups[t.name]) && (s = this,
                u.each(s.groups, function(t, e) {
                    e === n && u("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", o.attr("id"))
                })))),
                !e && this.settings.success && (o.text(""),
                "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, t)),
                this.toShow = this.toShow.add(o)
            },
            errorsFor: function(t) {
                var e = this.escapeCssMeta(this.idOrName(t))
                  , t = u(t).attr("aria-describedby")
                  , e = "label[for='" + e + "'], label[for='" + e + "'] *";
                return t && (e = e + ", #" + this.escapeCssMeta(t).replace(/\s+/g, ", #")),
                this.errors().filter(e)
            },
            escapeCssMeta: function(t) {
                return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(t) {
                return this.groups[t.name] || !this.checkable(t) && t.id || t.name
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)),
                u(t).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(t) {
                return u(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, e) {
                switch (e.nodeName.toLowerCase()) {
                case "select":
                    return u("option:selected", e).length;
                case "input":
                    if (this.checkable(e))
                        return this.findByName(e.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t) {
                    return t
                },
                string: function(t, e) {
                    return !!u(t, e.form).length
                },
                function: function(t, e) {
                    return t(e)
                }
            },
            optional: function(t) {
                var e = this.elementValue(t);
                return !u.validator.methods.required.call(this, e, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                u(t).addClass(this.settings.pendingClass),
                this.pending[t.name] = !0)
            },
            stopRequest: function(t, e) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[t.name],
                u(t).removeClass(this.settings.pendingClass),
                e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(),
                this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t, e) {
                return e = "string" == typeof e && e || "remote",
                u.data(t, "previousValue") || u.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: e
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, e) {
            t.constructor === String ? this.classRuleSettings[t] = e : u.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var e = {}
              , t = u(t).attr("class");
            return t && u.each(t.split(" "), function() {
                this in u.validator.classRuleSettings && u.extend(e, u.validator.classRuleSettings[this])
            }),
            e
        },
        normalizeAttributeRule: function(t, e, i, n) {
            /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n),
            isNaN(n) && (n = void 0)),
            n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
        },
        attributeRules: function(t) {
            var e, i, n = {}, s = u(t), o = t.getAttribute("type");
            for (e in u.validator.methods)
                i = "required" === e ? (i = t.getAttribute(e),
                "" === i && (i = !0),
                !!i) : s.attr(e),
                this.normalizeAttributeRule(n, o, e, i);
            return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength,
            n
        },
        dataRules: function(t) {
            var e, i, n = {}, s = u(t), o = t.getAttribute("type");
            for (e in u.validator.methods)
                i = s.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()),
                this.normalizeAttributeRule(n, o, e, i);
            return n
        },
        staticRules: function(t) {
            var e = {}
              , i = u.data(t.form, "validator");
            return i.settings.rules && (e = u.validator.normalizeRule(i.settings.rules[t.name]) || {}),
            e
        },
        normalizeRules: function(n, s) {
            return u.each(n, function(t, e) {
                if (!1 !== e) {
                    if (e.param || e.depends) {
                        var i = !0;
                        switch (typeof e.depends) {
                        case "string":
                            i = !!u(e.depends, s.form).length;
                            break;
                        case "function":
                            i = e.depends.call(s, s)
                        }
                        i ? n[t] = void 0 === e.param || e.param : (u.data(s.form, "validator").resetElements(u(s)),
                        delete n[t])
                    }
                } else
                    delete n[t]
            }),
            u.each(n, function(t, e) {
                n[t] = u.isFunction(e) && "normalizer" !== t ? e(s) : e
            }),
            u.each(["minlength", "maxlength"], function() {
                n[this] && (n[this] = Number(n[this]))
            }),
            u.each(["rangelength", "range"], function() {
                var t;
                n[this] && (u.isArray(n[this]) ? n[this] = [Number(n[this][0]), Number(n[this][1])] : "string" == typeof n[this] && (t = n[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                n[this] = [Number(t[0]), Number(t[1])]))
            }),
            u.validator.autoCreateRanges && (null != n.min && null != n.max && (n.range = [n.min, n.max],
            delete n.min,
            delete n.max),
            null != n.minlength && null != n.maxlength && (n.rangelength = [n.minlength, n.maxlength],
            delete n.minlength,
            delete n.maxlength)),
            n
        },
        normalizeRule: function(t) {
            var e;
            return "string" == typeof t && (e = {},
            u.each(t.split(/\s/), function() {
                e[this] = !0
            }),
            t = e),
            t
        },
        addMethod: function(t, e, i) {
            u.validator.methods[t] = e,
            u.validator.messages[t] = void 0 !== i ? i : u.validator.messages[t],
            e.length < 3 && u.validator.addClassRules(t, u.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, e, i) {
                if (!this.depend(i, e))
                    return "dependency-mismatch";
                if ("select" !== e.nodeName.toLowerCase())
                    return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < t.length;
                e = u(e).val();
                return e && 0 < e.length
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            minlength: function(t, e, i) {
                t = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || i <= t
            },
            maxlength: function(t, e, i) {
                t = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || t <= i
            },
            rangelength: function(t, e, i) {
                t = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || i <= t
            },
            max: function(t, e, i) {
                return this.optional(e) || t <= i
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            step: function(t, e, i) {
                function n(t) {
                    return (t = ("" + t).match(/(?:\.(\d+))?$/)) && t[1] ? t[1].length : 0
                }
                function s(t) {
                    return Math.round(t * Math.pow(10, o))
                }
                var o, a = u(e).attr("type"), r = "Step attribute on input type " + a + " is not supported.", l = new RegExp("\\b" + a + "\\b"), h = !0;
                if (a && !l.test(["text", "number", "range"].join()))
                    throw new Error(r);
                return o = n(i),
                (n(t) > o || s(t) % s(i) != 0) && (h = !1),
                this.optional(e) || h
            },
            equalTo: function(t, e, i) {
                i = u(i);
                return this.settings.onfocusout && i.not(".validate-equalTo-blur").length && i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    u(e).valid()
                }),
                t === i.val()
            },
            remote: function(n, s, t, o) {
                if (this.optional(s))
                    return "dependency-mismatch";
                o = "string" == typeof o && o || "remote";
                var a, e, r = this.previousValue(s, o);
                return this.settings.messages[s.name] || (this.settings.messages[s.name] = {}),
                r.originalMessage = r.originalMessage || this.settings.messages[s.name][o],
                this.settings.messages[s.name][o] = r.message,
                t = "string" == typeof t ? {
                    url: t
                } : t,
                e = u.param(u.extend({
                    data: n
                }, t.data)),
                r.old === e ? r.valid : (r.old = e,
                (a = this).startRequest(s),
                (e = {})[s.name] = n,
                u.ajax(u.extend(!0, {
                    mode: "abort",
                    port: "validate" + s.name,
                    dataType: "json",
                    data: e,
                    context: a.currentForm,
                    success: function(t) {
                        var e, i = !0 === t || "true" === t;
                        a.settings.messages[s.name][o] = r.originalMessage,
                        i ? (e = a.formSubmitted,
                        a.resetInternals(),
                        a.toHide = a.errorsFor(s),
                        a.formSubmitted = e,
                        a.successList.push(s),
                        a.invalid[s.name] = !1,
                        a.showErrors()) : (e = {},
                        t = t || a.defaultMessage(s, {
                            method: o,
                            parameters: n
                        }),
                        e[s.name] = r.message = t,
                        a.invalid[s.name] = !0,
                        a.showErrors(e)),
                        r.valid = i,
                        a.stopRequest(s, i)
                    }
                }, t)),
                "pending")
            }
        }
    });
    var n, s = {};
    u.ajaxPrefilter ? u.ajaxPrefilter(function(t, e, i) {
        var n = t.port;
        "abort" === t.mode && (s[n] && s[n].abort(),
        s[n] = i)
    }) : (n = u.ajax,
    u.ajax = function(t) {
        var e = ("mode"in t ? t : u.ajaxSettings).mode
          , i = ("port"in t ? t : u.ajaxSettings).port;
        return "abort" === e ? (s[i] && s[i].abort(),
        s[i] = n.apply(this, arguments),
        s[i]) : n.apply(this, arguments)
    }
    )
}),
window.Modernizr = function(n, u, a) {
    function s(t, e, i, n) {
        var s, o, a, r = u.createElement("div"), l = u.body, h = l || u.createElement("body");
        if (parseInt(i, 10))
            for (; i--; )
                (o = u.createElement("div")).id = n ? n[i] : d + (i + 1),
                r.appendChild(o);
        return s = ["&#173;", '<style id="s', d, '">', t, "</style>"].join(""),
        r.id = d,
        (l ? r : h).innerHTML += s,
        h.appendChild(r),
        l || (h.style.background = "",
        h.style.overflow = "hidden",
        a = c.style.overflow,
        c.style.overflow = "hidden",
        c.appendChild(h)),
        t = e(r, t),
        l ? r.parentNode.removeChild(r) : (h.parentNode.removeChild(h),
        c.style.overflow = a),
        !!t
    }
    var t, o, r, e, l = {}, c = u.documentElement, d = "modernizr", h = u.createElement(d).style, p = u.createElement("input"), f = ":)", i = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), g = "Webkit Moz O ms", v = g.split(" "), b = g.toLowerCase().split(" "), y = "http://www.w3.org/2000/svg", _ = {}, x = {}, C = {}, w = [], k = w.slice, D = (r = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img"
    },
    function(t, e) {
        e = e || u.createElement(r[t] || "div");
        var i = (t = "on" + t)in e;
        return i || (e.setAttribute || (e = u.createElement("div")),
        e.setAttribute && e.removeAttribute && (e.setAttribute(t, ""),
        i = M(e[t], "function"),
        void 0 !== e[t] && (e[t] = a),
        e.removeAttribute(t))),
        e = null,
        i
    }
    ), T = {}.hasOwnProperty;
    function P(t) {
        h.cssText = t
    }
    function M(t, e) {
        return typeof t === e
    }
    function S(t, e) {
        return !!~("" + t).indexOf(e)
    }
    function E(t, e) {
        for (var i in t) {
            var n = t[i];
            if (!S(n, "-") && h[n] !== a)
                return "pfx" != e || n
        }
        return !1
    }
    function I(t, e, i) {
        var n = t.charAt(0).toUpperCase() + t.slice(1)
          , s = (t + " " + v.join(n + " ") + n).split(" ");
        return M(e, "string") || void 0 === e ? E(s, e) : function(t, e, i) {
            for (var n in t) {
                var s = e[t[n]];
                if (s !== a)
                    return !1 === i ? t[n] : M(s, "function") ? s.bind(i || e) : s
            }
            return !1
        }(s = (t + " " + b.join(n + " ") + n).split(" "), e, i)
    }
    for (e in o = void 0 !== T && void 0 !== T.call ? function(t, e) {
        return T.call(t, e)
    }
    : function(t, e) {
        return e in t && void 0 === t.constructor.prototype[e]
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(i) {
        var n = this;
        if ("function" != typeof n)
            throw new TypeError;
        var s = k.call(arguments, 1)
          , o = function() {
            if (this instanceof o) {
                var t = function() {};
                t.prototype = n.prototype;
                var e = new t
                  , t = n.apply(e, s.concat(k.call(arguments)));
                return Object(t) === t ? t : e
            }
            return n.apply(i, s.concat(k.call(arguments)))
        };
        return o
    }
    ),
    _.flexbox = function() {
        return I("flexWrap")
    }
    ,
    _.flexboxlegacy = function() {
        return I("boxDirection")
    }
    ,
    _.canvas = function() {
        var t = u.createElement("canvas");
        return !(!t.getContext || !t.getContext("2d"))
    }
    ,
    _.canvastext = function() {
        return !(!l.canvas || !M(u.createElement("canvas").getContext("2d").fillText, "function"))
    }
    ,
    _.webgl = function() {
        return !!n.WebGLRenderingContext
    }
    ,
    _.touch = function() {
        var e;
        return "ontouchstart"in n || n.DocumentTouch && u instanceof DocumentTouch ? e = !0 : s(["@media (", m.join("touch-enabled),("), d, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
            e = 9 === t.offsetTop
        }),
        e
    }
    ,
    _.geolocation = function() {
        return "geolocation"in navigator
    }
    ,
    _.postmessage = function() {
        return !!n.postMessage
    }
    ,
    _.websqldatabase = function() {
        return !!n.openDatabase
    }
    ,
    _.indexedDB = function() {
        return !!I("indexedDB", n)
    }
    ,
    _.hashchange = function() {
        return D("hashchange", n) && (u.documentMode === a || 7 < u.documentMode)
    }
    ,
    _.history = function() {
        return !(!n.history || !history.pushState)
    }
    ,
    _.draganddrop = function() {
        var t = u.createElement("div");
        return "draggable"in t || "ondragstart"in t && "ondrop"in t
    }
    ,
    _.websockets = function() {
        return "WebSocket"in n || "MozWebSocket"in n
    }
    ,
    _.rgba = function() {
        return P("background-color:rgba(150,255,150,.5)"),
        S(h.backgroundColor, "rgba")
    }
    ,
    _.hsla = function() {
        return P("background-color:hsla(120,40%,100%,.5)"),
        S(h.backgroundColor, "rgba") || S(h.backgroundColor, "hsla")
    }
    ,
    _.multiplebgs = function() {
        return P("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(h.background)
    }
    ,
    _.backgroundsize = function() {
        return I("backgroundSize")
    }
    ,
    _.borderimage = function() {
        return I("borderImage")
    }
    ,
    _.borderradius = function() {
        return I("borderRadius")
    }
    ,
    _.boxshadow = function() {
        return I("boxShadow")
    }
    ,
    _.textshadow = function() {
        return "" === u.createElement("div").style.textShadow
    }
    ,
    _.opacity = function() {
        return P(m.join("opacity:.55;") + ""),
        /^0.55$/.test(h.opacity)
    }
    ,
    _.cssanimations = function() {
        return I("animationName")
    }
    ,
    _.csscolumns = function() {
        return I("columnCount")
    }
    ,
    _.cssgradients = function() {
        var t = "background-image:";
        return P((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + m.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)),
        S(h.backgroundImage, "gradient")
    }
    ,
    _.cssreflections = function() {
        return I("boxReflect")
    }
    ,
    _.csstransforms = function() {
        return !!I("transform")
    }
    ,
    _.csstransforms3d = function() {
        var i = !!I("perspective");
        return i && "webkitPerspective"in c.style && s("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, e) {
            i = 9 === t.offsetLeft && 3 === t.offsetHeight
        }),
        i
    }
    ,
    _.csstransitions = function() {
        return I("transition")
    }
    ,
    _.fontface = function() {
        var n;
        return s('@font-face {font-family:"font";src:url("https://")}', function(t, e) {
            var i = u.getElementById("smodernizr")
              , i = i.sheet || i.styleSheet
              , i = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
            n = /src/i.test(i) && 0 === i.indexOf(e.split(" ")[0])
        }),
        n
    }
    ,
    _.generatedcontent = function() {
        var e;
        return s(["#", d, "{font:0/0 a}#", d, ':after{content:"', f, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = 3 <= t.offsetHeight
        }),
        e
    }
    ,
    _.video = function() {
        var t = u.createElement("video")
          , e = !1;
        try {
            (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            e.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            e.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (t) {}
        return e
    }
    ,
    _.audio = function() {
        var t = u.createElement("audio")
          , e = !1;
        try {
            (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            e.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            e.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            e.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (t) {}
        return e
    }
    ,
    _.localstorage = function() {
        try {
            return localStorage.setItem(d, d),
            localStorage.removeItem(d),
            !0
        } catch (t) {
            return !1
        }
    }
    ,
    _.sessionstorage = function() {
        try {
            return sessionStorage.setItem(d, d),
            sessionStorage.removeItem(d),
            !0
        } catch (t) {
            return !1
        }
    }
    ,
    _.webworkers = function() {
        return !!n.Worker
    }
    ,
    _.applicationcache = function() {
        return !!n.applicationCache
    }
    ,
    _.svg = function() {
        return !!u.createElementNS && !!u.createElementNS(y, "svg").createSVGRect
    }
    ,
    _.inlinesvg = function() {
        var t = u.createElement("div");
        return t.innerHTML = "<svg/>",
        (t.firstChild && t.firstChild.namespaceURI) == y
    }
    ,
    _.smil = function() {
        return !!u.createElementNS && /SVGAnimate/.test(i.call(u.createElementNS(y, "animate")))
    }
    ,
    _.svgclippaths = function() {
        return !!u.createElementNS && /SVGClipPath/.test(i.call(u.createElementNS(y, "clipPath")))
    }
    ,
    _)
        o(_, e) && (t = e.toLowerCase(),
        l[t] = _[e](),
        w.push((l[t] ? "" : "no-") + t));
    return l.input || (l.input = function(t) {
        for (var e = 0, i = t.length; e < i; e++)
            C[t[e]] = !!(t[e]in p);
        return C.list && (C.list = !(!u.createElement("datalist") || !n.HTMLDataListElement)),
        C
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
    l.inputtypes = function(t) {
        for (var e, i, n, s = 0, o = t.length; s < o; s++)
            p.setAttribute("type", i = t[s]),
            (e = "text" !== p.type) && (p.value = f,
            p.style.cssText = "position:absolute;visibility:hidden;",
            /^range$/.test(i) && p.style.WebkitAppearance !== a ? (c.appendChild(p),
            e = (n = u.defaultView).getComputedStyle && "textfield" !== n.getComputedStyle(p, null).WebkitAppearance && 0 !== p.offsetHeight,
            c.removeChild(p)) : /^(search|tel)$/.test(i) || (e = /^(url|email)$/.test(i) ? p.checkValidity && !1 === p.checkValidity() : p.value != f)),
            x[t[s]] = !!e;
        return x
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))),
    l.addTest = function(t, e) {
        if ("object" == typeof t)
            for (var i in t)
                o(t, i) && l.addTest(i, t[i]);
        else {
            if (t = t.toLowerCase(),
            l[t] !== a)
                return l;
            e = "function" == typeof e ? e() : e,
            c.className += " " + (e ? "" : "no-") + t,
            l[t] = e
        }
        return l
    }
    ,
    P(""),
    p = null,
    function(t, r) {
        var l, h, e = t.html5 || {}, n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, s = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, i = "_html5shiv", o = 0, a = {};
        function u() {
            var t = f.elements;
            return "string" == typeof t ? t.split(" ") : t
        }
        function c(t) {
            var e = a[t[i]];
            return e || (e = {},
            o++,
            t[i] = o,
            a[o] = e),
            e
        }
        function d(t, e, i) {
            return e = e || r,
            h ? e.createElement(t) : (e = (i = i || c(e)).cache[t] ? i.cache[t].cloneNode() : s.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t)).canHaveChildren && !n.test(t) ? i.frag.appendChild(e) : e
        }
        function p(t) {
            var e, i, n, s, o, a = c(t = t || r);
            return !f.shivCSS || l || a.hasCSS || (a.hasCSS = (i = "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}",
            n = (e = t).createElement("p"),
            e = e.getElementsByTagName("head")[0] || e.documentElement,
            n.innerHTML = "x<style>" + i + "</style>",
            !!e.insertBefore(n.lastChild, e.firstChild))),
            h || (s = t,
            (o = a).cache || (o.cache = {},
            o.createElem = s.createElement,
            o.createFrag = s.createDocumentFragment,
            o.frag = o.createFrag()),
            s.createElement = function(t) {
                return f.shivMethods ? d(t, s, o) : o.createElem(t)
            }
            ,
            s.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + u().join().replace(/\w+/g, function(t) {
                return o.createElem(t),
                o.frag.createElement(t),
                'c("' + t + '")'
            }) + ");return n}")(f, o.frag)),
            t
        }
        !function() {
            try {
                var t = r.createElement("a");
                t.innerHTML = "<xyz></xyz>",
                l = "hidden"in t,
                h = 1 == t.childNodes.length || function() {
                    r.createElement("a");
                    var t = r.createDocumentFragment();
                    return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                }()
            } catch (t) {
                h = l = !0
            }
        }();
        var f = {
            elements: e.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: !1 !== e.shivCSS,
            supportsUnknownElements: h,
            shivMethods: !1 !== e.shivMethods,
            type: "default",
            shivDocument: p,
            createElement: d,
            createDocumentFragment: function(t, e) {
                if (t = t || r,
                h)
                    return t.createDocumentFragment();
                for (var i = (e = e || c(t)).frag.cloneNode(), n = 0, s = u(), o = s.length; n < o; n++)
                    i.createElement(s[n]);
                return i
            }
        };
        t.html5 = f,
        p(r)
    }(this, u),
    l._version = "2.6.2",
    l._prefixes = m,
    l._domPrefixes = b,
    l._cssomPrefixes = v,
    l.mq = function(t) {
        var e, i = n.matchMedia || n.msMatchMedia;
        return i ? i(t).matches : (s("@media " + t + " { #" + d + " { position: absolute; } }", function(t) {
            e = "absolute" == (n.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
        }),
        e)
    }
    ,
    l.hasEvent = D,
    l.testProp = function(t) {
        return E([t])
    }
    ,
    l.testAllProps = I,
    l.testStyles = s,
    l.prefixed = function(t, e, i) {
        return e ? I(t, e, i) : I(t, "pfx")
    }
    ,
    c.className = c.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + w.join(" ")),
    l
}(this, this.document),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
!function() {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 3 < t[0])
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(n) {
    "use strict";
    n.fn.emulateTransitionEnd = function(t) {
        var e = !1
          , i = this;
        n(this).one("bsTransitionEnd", function() {
            e = !0
        });
        return setTimeout(function() {
            e || n(i).trigger(n.support.transition.end)
        }, t),
        this
    }
    ,
    n(function() {
        n.support.transition = function() {
            var t, e = document.createElement("bootstrap"), i = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (t in i)
                if (void 0 !== e.style[t])
                    return {
                        end: i[t]
                    };
            return !1
        }(),
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(o) {
    "use strict";
    function a(t) {
        o(t).on("click", e, this.close)
    }
    var e = '[data-dismiss="alert"]';
    a.VERSION = "3.3.7",
    a.TRANSITION_DURATION = 150,
    a.prototype.close = function(t) {
        function e() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var i = o(this)
          , n = i.attr("data-target");
        n || (n = (n = i.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var s = o("#" === n ? [] : n);
        t && t.preventDefault(),
        s.length || (s = i.closest(".alert")),
        s.trigger(t = o.Event("close.bs.alert")),
        t.isDefaultPrevented() || (s.removeClass("in"),
        o.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", e).emulateTransitionEnd(a.TRANSITION_DURATION) : e())
    }
    ;
    var t = o.fn.alert;
    o.fn.alert = function(i) {
        return this.each(function() {
            var t = o(this)
              , e = t.data("bs.alert");
            e || t.data("bs.alert", e = new a(this)),
            "string" == typeof i && e[i].call(t)
        })
    }
    ,
    o.fn.alert.Constructor = a,
    o.fn.alert.noConflict = function() {
        return o.fn.alert = t,
        this
    }
    ,
    o(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery),
function(o) {
    "use strict";
    function i(n) {
        return this.each(function() {
            var t = o(this)
              , e = t.data("bs.button")
              , i = "object" == typeof n && n;
            e || t.data("bs.button", e = new s(this,i)),
            "toggle" == n ? e.toggle() : n && e.setState(n)
        })
    }
    var s = function(t, e) {
        this.$element = o(t),
        this.options = o.extend({}, s.DEFAULTS, e),
        this.isLoading = !1
    };
    s.VERSION = "3.3.7",
    s.DEFAULTS = {
        loadingText: "loading..."
    },
    s.prototype.setState = function(t) {
        var e = "disabled"
          , i = this.$element
          , n = i.is("input") ? "val" : "html"
          , s = i.data();
        t += "Text",
        null == s.resetText && i.data("resetText", i[n]()),
        setTimeout(o.proxy(function() {
            i[n]((null == s[t] ? this.options : s)[t]),
            "loadingText" == t ? (this.isLoading = !0,
            i.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1,
            i.removeClass(e).removeAttr(e).prop(e, !1))
        }, this), 0)
    }
    ,
    s.prototype.toggle = function() {
        var t, e = !0, i = this.$element.closest('[data-toggle="buttons"]');
        i.length ? ("radio" == (t = this.$element.find("input")).prop("type") ? (t.prop("checked") && (e = !1),
        i.find(".active").removeClass("active"),
        this.$element.addClass("active")) : "checkbox" == t.prop("type") && (t.prop("checked") !== this.$element.hasClass("active") && (e = !1),
        this.$element.toggleClass("active")),
        t.prop("checked", this.$element.hasClass("active")),
        e && t.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
        this.$element.toggleClass("active"))
    }
    ;
    var t = o.fn.button;
    o.fn.button = i,
    o.fn.button.Constructor = s,
    o.fn.button.noConflict = function() {
        return o.fn.button = t,
        this
    }
    ,
    o(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var e = o(t.target).closest(".btn");
        i.call(e, "toggle"),
        o(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(),
        (e.is("input,button") ? e : e.find("input:visible,button:visible").first()).trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        o(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function(h) {
    "use strict";
    function s(s) {
        return this.each(function() {
            var t = h(this)
              , e = t.data("bs.carousel")
              , i = h.extend({}, u.DEFAULTS, t.data(), "object" == typeof s && s)
              , n = "string" == typeof s ? s : i.slide;
            e || t.data("bs.carousel", e = new u(this,i)),
            "number" == typeof s ? e.to(s) : n ? e[n]() : i.interval && e.pause().cycle()
        })
    }
    function u(t, e) {
        this.$element = h(t),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = e,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", h.proxy(this.keydown, this)),
        "hover" != this.options.pause || "ontouchstart"in document.documentElement || this.$element.on("mouseenter.bs.carousel", h.proxy(this.pause, this)).on("mouseleave.bs.carousel", h.proxy(this.cycle, this))
    }
    u.VERSION = "3.3.7",
    u.TRANSITION_DURATION = 600,
    u.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    u.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            t.preventDefault()
        }
    }
    ,
    u.prototype.cycle = function(t) {
        return t || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(h.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    u.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"),
        this.$items.index(t || this.$active)
    }
    ,
    u.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap)
            return e;
        t = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(t)
    }
    ,
    u.prototype.to = function(t) {
        var e = this
          , i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : i == t ? this.pause().cycle() : this.slide(i < t ? "next" : "prev", this.$items.eq(t))
    }
    ,
    u.prototype.pause = function(t) {
        return t || (this.paused = !0),
        this.$element.find(".next, .prev").length && h.support.transition && (this.$element.trigger(h.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    u.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    u.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    u.prototype.slide = function(t, e) {
        var i = this.$element.find(".item.active")
          , n = e || this.getItemForDirection(t, i)
          , s = this.interval
          , o = "next" == t ? "left" : "right"
          , a = this;
        if (n.hasClass("active"))
            return this.sliding = !1;
        var r = n[0]
          , e = h.Event("slide.bs.carousel", {
            relatedTarget: r,
            direction: o
        });
        if (this.$element.trigger(e),
        !e.isDefaultPrevented()) {
            this.sliding = !0,
            s && this.pause(),
            this.$indicators.length && (this.$indicators.find(".active").removeClass("active"),
            (e = h(this.$indicators.children()[this.getItemIndex(n)])) && e.addClass("active"));
            var l = h.Event("slid.bs.carousel", {
                relatedTarget: r,
                direction: o
            });
            return h.support.transition && this.$element.hasClass("slide") ? (n.addClass(t),
            n[0].offsetWidth,
            i.addClass(o),
            n.addClass(o),
            i.one("bsTransitionEnd", function() {
                n.removeClass([t, o].join(" ")).addClass("active"),
                i.removeClass(["active", o].join(" ")),
                a.sliding = !1,
                setTimeout(function() {
                    a.$element.trigger(l)
                }, 0)
            }).emulateTransitionEnd(u.TRANSITION_DURATION)) : (i.removeClass("active"),
            n.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(l)),
            s && this.cycle(),
            this
        }
    }
    ;
    var t = h.fn.carousel;
    function e(t) {
        var e, i = h(this), n = h(i.attr("data-target") || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
        n.hasClass("carousel") && (e = h.extend({}, n.data(), i.data()),
        (i = i.attr("data-slide-to")) && (e.interval = !1),
        s.call(n, e),
        i && n.data("bs.carousel").to(i),
        t.preventDefault())
    }
    h.fn.carousel = s,
    h.fn.carousel.Constructor = u,
    h.fn.carousel.noConflict = function() {
        return h.fn.carousel = t,
        this
    }
    ,
    h(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
    h(window).on("load", function() {
        h('[data-ride="carousel"]').each(function() {
            var t = h(this);
            s.call(t, t.data())
        })
    })
}(jQuery),
function(s) {
    "use strict";
    function i(t) {
        var e = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
        return s(e)
    }
    function o(n) {
        return this.each(function() {
            var t = s(this)
              , e = t.data("bs.collapse")
              , i = s.extend({}, a.DEFAULTS, t.data(), "object" == typeof n && n);
            !e && i.toggle && /show|hide/.test(n) && (i.toggle = !1),
            e || t.data("bs.collapse", e = new a(this,i)),
            "string" == typeof n && e[n]()
        })
    }
    var a = function(t, e) {
        this.$element = s(t),
        this.options = s.extend({}, a.DEFAULTS, e),
        this.$trigger = s('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    a.VERSION = "3.3.7",
    a.TRANSITION_DURATION = 350,
    a.DEFAULTS = {
        toggle: !0
    },
    a.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }
    ,
    a.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(t && t.length && ((n = t.data("bs.collapse")) && n.transitioning))) {
                var e = s.Event("show.bs.collapse");
                if (this.$element.trigger(e),
                !e.isDefaultPrevented()) {
                    t && t.length && (o.call(t, "hide"),
                    n || t.data("bs.collapse", null));
                    var i = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var n = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[i](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!s.support.transition)
                        return n.call(this);
                    t = s.camelCase(["scroll", i].join("-"));
                    this.$element.one("bsTransitionEnd", s.proxy(n, this)).emulateTransitionEnd(a.TRANSITION_DURATION)[i](this.$element[0][t])
                }
            }
        }
    }
    ,
    a.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = s.Event("hide.bs.collapse");
            if (this.$element.trigger(t),
            !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                t = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                }
                ;
                return s.support.transition ? void this.$element[e](0).one("bsTransitionEnd", s.proxy(t, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : t.call(this)
            }
        }
    }
    ,
    a.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    a.prototype.getParent = function() {
        return s(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(s.proxy(function(t, e) {
            e = s(e);
            this.addAriaAndCollapsedClass(i(e), e)
        }, this)).end()
    }
    ,
    a.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i),
        e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    }
    ;
    var t = s.fn.collapse;
    s.fn.collapse = o,
    s.fn.collapse.Constructor = a,
    s.fn.collapse.noConflict = function() {
        return s.fn.collapse = t,
        this
    }
    ,
    s(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var e = s(this);
        e.attr("data-target") || t.preventDefault();
        t = i(e),
        e = t.data("bs.collapse") ? "toggle" : e.data();
        o.call(t, e)
    })
}(jQuery),
function(s) {
    "use strict";
    function o(t) {
        var e = t.attr("data-target");
        e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        e = e && s(e);
        return e && e.length ? e : t.parent()
    }
    function a(n) {
        n && 3 === n.which || (s(".dropdown-backdrop").remove(),
        s(r).each(function() {
            var t = s(this)
              , e = o(t)
              , i = {
                relatedTarget: this
            };
            e.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && s.contains(e[0], n.target) || (e.trigger(n = s.Event("hide.bs.dropdown", i)),
            n.isDefaultPrevented() || (t.attr("aria-expanded", "false"),
            e.removeClass("open").trigger(s.Event("hidden.bs.dropdown", i)))))
        }))
    }
    function n(t) {
        s(t).on("click.bs.dropdown", this.toggle)
    }
    var r = '[data-toggle="dropdown"]';
    n.VERSION = "3.3.7",
    n.prototype.toggle = function(t) {
        var e = s(this);
        if (!e.is(".disabled, :disabled")) {
            var i = o(e)
              , n = i.hasClass("open");
            if (a(),
            !n) {
                "ontouchstart"in document.documentElement && !i.closest(".navbar-nav").length && s(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(s(this)).on("click", a);
                n = {
                    relatedTarget: this
                };
                if (i.trigger(t = s.Event("show.bs.dropdown", n)),
                t.isDefaultPrevented())
                    return;
                e.trigger("focus").attr("aria-expanded", "true"),
                i.toggleClass("open").trigger(s.Event("shown.bs.dropdown", n))
            }
            return !1
        }
    }
    ,
    n.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var e = s(this);
            if (t.preventDefault(),
            t.stopPropagation(),
            !e.is(".disabled, :disabled")) {
                var i = o(e)
                  , n = i.hasClass("open");
                if (!n && 27 != t.which || n && 27 == t.which)
                    return 27 == t.which && i.find(r).trigger("focus"),
                    e.trigger("click");
                e = i.find(".dropdown-menu li:not(.disabled):visible a");
                e.length && (i = e.index(t.target),
                38 == t.which && 0 < i && i--,
                40 == t.which && i < e.length - 1 && i++,
                ~i || (i = 0),
                e.eq(i).trigger("focus"))
            }
        }
    }
    ;
    var t = s.fn.dropdown;
    s.fn.dropdown = function(i) {
        return this.each(function() {
            var t = s(this)
              , e = t.data("bs.dropdown");
            e || t.data("bs.dropdown", e = new n(this)),
            "string" == typeof i && e[i].call(t)
        })
    }
    ,
    s.fn.dropdown.Constructor = n,
    s.fn.dropdown.noConflict = function() {
        return s.fn.dropdown = t,
        this
    }
    ,
    s(document).on("click.bs.dropdown.data-api", a).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, n.prototype.toggle).on("keydown.bs.dropdown.data-api", r, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
}(jQuery),
function(o) {
    "use strict";
    function s(n, s) {
        return this.each(function() {
            var t = o(this)
              , e = t.data("bs.modal")
              , i = o.extend({}, a.DEFAULTS, t.data(), "object" == typeof n && n);
            e || t.data("bs.modal", e = new a(this,i)),
            "string" == typeof n ? e[n](s) : i.show && e.show(s)
        })
    }
    function a(t, e) {
        this.options = e,
        this.$body = o(document.body),
        this.$element = o(t),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, o.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    }
    a.VERSION = "3.3.7",
    a.TRANSITION_DURATION = 300,
    a.BACKDROP_TRANSITION_DURATION = 150,
    a.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    a.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }
    ,
    a.prototype.show = function(i) {
        var n = this
          , t = o.Event("show.bs.modal", {
            relatedTarget: i
        });
        this.$element.trigger(t),
        this.isShown || t.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', o.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(t) {
                o(t.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var t = o.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body),
            n.$element.show().scrollTop(0),
            n.adjustDialog(),
            t && n.$element[0].offsetWidth,
            n.$element.addClass("in"),
            n.enforceFocus();
            var e = o.Event("shown.bs.modal", {
                relatedTarget: i
            });
            t ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(a.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(e)
        }))
    }
    ,
    a.prototype.hide = function(t) {
        t && t.preventDefault(),
        t = o.Event("hide.bs.modal"),
        this.$element.trigger(t),
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        o(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        o.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", o.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    a.prototype.enforceFocus = function() {
        o(document).off("focusin.bs.modal").on("focusin.bs.modal", o.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    a.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", o.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    a.prototype.resize = function() {
        this.isShown ? o(window).on("resize.bs.modal", o.proxy(this.handleUpdate, this)) : o(window).off("resize.bs.modal")
    }
    ,
    a.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.$body.removeClass("modal-open"),
            t.resetAdjustments(),
            t.resetScrollbar(),
            t.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    a.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    a.prototype.backdrop = function(t) {
        var e, i = this, n = this.$element.hasClass("fade") ? "fade" : "";
        this.isShown && this.options.backdrop ? (e = o.support.transition && n,
        this.$backdrop = o(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body),
        this.$element.on("click.dismiss.bs.modal", o.proxy(function(t) {
            return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)),
        e && this.$backdrop[0].offsetWidth,
        this.$backdrop.addClass("in"),
        t && (e ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : t())) : !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
        e = function() {
            i.removeBackdrop(),
            t && t()
        }
        ,
        o.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : e()) : t && t()
    }
    ,
    a.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    a.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }
    ,
    a.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    a.prototype.checkScrollbar = function() {
        var t, e = window.innerWidth;
        e || (e = (t = document.documentElement.getBoundingClientRect()).right - Math.abs(t.left)),
        this.bodyIsOverflowing = document.body.clientWidth < e,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    a.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }
    ,
    a.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    a.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure",
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t),
        e
    }
    ;
    var t = o.fn.modal;
    o.fn.modal = s,
    o.fn.modal.Constructor = a,
    o.fn.modal.noConflict = function() {
        return o.fn.modal = t,
        this
    }
    ,
    o(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var e = o(this)
          , i = e.attr("href")
          , n = o(e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""))
          , i = n.data("bs.modal") ? "toggle" : o.extend({
            remote: !/#/.test(i) && i
        }, n.data(), e.data());
        e.is("a") && t.preventDefault(),
        n.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                e.is(":visible") && e.trigger("focus")
            })
        }),
        s.call(n, i, this)
    })
}(jQuery),
function(l) {
    "use strict";
    function h(t, e) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", t, e)
    }
    h.VERSION = "3.3.7",
    h.TRANSITION_DURATION = 150,
    h.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    h.prototype.init = function(t, e, i) {
        if (this.enabled = !0,
        this.type = t,
        this.$element = l(e),
        this.options = this.getOptions(i),
        this.$viewport = this.options.viewport && l(l.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--; ) {
            var o, a = n[s];
            "click" == a ? this.$element.on("click." + this.type, this.options.selector, l.proxy(this.toggle, this)) : "manual" != a && (o = "hover" == a ? "mouseenter" : "focusin",
            a = "hover" == a ? "mouseleave" : "focusout",
            this.$element.on(o + "." + this.type, this.options.selector, l.proxy(this.enter, this)),
            this.$element.on(a + "." + this.type, this.options.selector, l.proxy(this.leave, this)))
        }
        this.options.selector ? this._options = l.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    h.prototype.getDefaults = function() {
        return h.DEFAULTS
    }
    ,
    h.prototype.getOptions = function(t) {
        return (t = l.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }),
        t
    }
    ,
    h.prototype.getDelegateOptions = function() {
        var i = {}
          , n = this.getDefaults();
        return this._options && l.each(this._options, function(t, e) {
            n[t] != e && (i[t] = e)
        }),
        i
    }
    ,
    h.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t : l(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        l(t.currentTarget).data("bs." + this.type, e)),
        t instanceof l.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0),
        e.tip().hasClass("in") || "in" == e.hoverState ? void (e.hoverState = "in") : (clearTimeout(e.timeout),
        e.hoverState = "in",
        e.options.delay && e.options.delay.show ? void (e.timeout = setTimeout(function() {
            "in" == e.hoverState && e.show()
        }, e.options.delay.show)) : e.show())
    }
    ,
    h.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t])
                return !0;
        return !1
    }
    ,
    h.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t : l(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        l(t.currentTarget).data("bs." + this.type, e)),
        t instanceof l.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1),
        !e.isInStateTrue())
            return clearTimeout(e.timeout),
            e.hoverState = "out",
            e.options.delay && e.options.delay.hide ? void (e.timeout = setTimeout(function() {
                "out" == e.hoverState && e.hide()
            }, e.options.delay.hide)) : e.hide()
    }
    ,
    h.prototype.show = function() {
        var e, t, i, n, s, o, a, r = l.Event("show.bs." + this.type);
        this.hasContent() && this.enabled && (this.$element.trigger(r),
        i = l.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]),
        !r.isDefaultPrevented() && i && (t = (e = this).tip(),
        o = this.getUID(this.type),
        this.setContent(),
        t.attr("id", o),
        this.$element.attr("aria-describedby", o),
        this.options.animation && t.addClass("fade"),
        a = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement,
        (s = (n = /\s?auto?\s?/i).test(a)) && (a = a.replace(n, "") || "top"),
        t.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(a).data("bs." + this.type, this),
        this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element),
        this.$element.trigger("inserted.bs." + this.type),
        r = this.getPosition(),
        i = t[0].offsetWidth,
        o = t[0].offsetHeight,
        s && (n = a,
        s = this.getPosition(this.$viewport),
        a = "bottom" == a && r.bottom + o > s.bottom ? "top" : "top" == a && r.top - o < s.top ? "bottom" : "right" == a && r.right + i > s.width ? "left" : "left" == a && r.left - i < s.left ? "right" : a,
        t.removeClass(n).addClass(a)),
        o = this.getCalculatedOffset(a, r, i, o),
        this.applyPlacement(o, a),
        a = function() {
            var t = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
            e.hoverState = null,
            "out" == t && e.leave(e)
        }
        ,
        l.support.transition && this.$tip.hasClass("fade") ? t.one("bsTransitionEnd", a).emulateTransitionEnd(h.TRANSITION_DURATION) : a()))
    }
    ,
    h.prototype.applyPlacement = function(t, e) {
        var i = this.tip()
          , n = i[0].offsetWidth
          , s = i[0].offsetHeight
          , o = parseInt(i.css("margin-top"), 10)
          , a = parseInt(i.css("margin-left"), 10);
        isNaN(o) && (o = 0),
        isNaN(a) && (a = 0),
        t.top += o,
        t.left += a,
        l.offset.setOffset(i[0], l.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, t), 0),
        i.addClass("in");
        var r = i[0].offsetWidth
          , o = i[0].offsetHeight;
        "top" == e && o != s && (t.top = t.top + s - o);
        a = this.getViewportAdjustedDelta(e, t, r, o);
        a.left ? t.left += a.left : t.top += a.top;
        e = /top|bottom/.test(e),
        s = e ? 2 * a.left - n + r : 2 * a.top - s + o,
        o = e ? "offsetWidth" : "offsetHeight";
        i.offset(t),
        this.replaceArrow(s, i[0][o], e)
    }
    ,
    h.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }
    ,
    h.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
        t.removeClass("fade in top bottom left right")
    }
    ,
    h.prototype.hide = function(t) {
        function e() {
            "in" != i.hoverState && n.detach(),
            i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type),
            t && t()
        }
        var i = this
          , n = l(this.$tip)
          , s = l.Event("hide.bs." + this.type);
        if (this.$element.trigger(s),
        !s.isDefaultPrevented())
            return n.removeClass("in"),
            l.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", e).emulateTransitionEnd(h.TRANSITION_DURATION) : e(),
            this.hoverState = null,
            this
    }
    ,
    h.prototype.fixTitle = function() {
        var t = this.$element;
        !t.attr("title") && "string" == typeof t.attr("data-original-title") || t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }
    ,
    h.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    h.prototype.getPosition = function(t) {
        var e = (t = t || this.$element)[0]
          , i = "BODY" == e.tagName
          , n = e.getBoundingClientRect();
        null == n.width && (n = l.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        e = window.SVGElement && e instanceof window.SVGElement,
        e = i ? {
            top: 0,
            left: 0
        } : e ? null : t.offset(),
        t = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        },
        i = i ? {
            width: l(window).width(),
            height: l(window).height()
        } : null;
        return l.extend({}, n, t, i, e)
    }
    ,
    h.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }
    ,
    h.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return s;
        var o, a = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
        return /right|left/.test(t) ? (t = e.top - a - r.scroll,
        o = e.top + a - r.scroll + n,
        t < r.top ? s.top = r.top - t : o > r.top + r.height && (s.top = r.top + r.height - o)) : (o = e.left - a,
        i = e.left + a + i,
        o < r.left ? s.left = r.left - o : i > r.right && (s.left = r.left + r.width - i)),
        s
    }
    ,
    h.prototype.getTitle = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }
    ,
    h.prototype.getUID = function(t) {
        for (; t += ~~(1e6 * Math.random()),
        document.getElementById(t); )
            ;
        return t
    }
    ,
    h.prototype.tip = function() {
        if (!this.$tip && (this.$tip = l(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    h.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    h.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    h.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    h.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    h.prototype.toggle = function(t) {
        var e = this;
        t && ((e = l(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        l(t.currentTarget).data("bs." + this.type, e))),
        t ? (e.inState.click = !e.inState.click,
        e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }
    ,
    h.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type),
            t.$tip && t.$tip.detach(),
            t.$tip = null,
            t.$arrow = null,
            t.$viewport = null,
            t.$element = null
        })
    }
    ;
    var t = l.fn.tooltip;
    l.fn.tooltip = function(n) {
        return this.each(function() {
            var t = l(this)
              , e = t.data("bs.tooltip")
              , i = "object" == typeof n && n;
            !e && /destroy|hide/.test(n) || (e || t.data("bs.tooltip", e = new h(this,i)),
            "string" == typeof n && e[n]())
        })
    }
    ,
    l.fn.tooltip.Constructor = h,
    l.fn.tooltip.noConflict = function() {
        return l.fn.tooltip = t,
        this
    }
}(jQuery),
function(s) {
    "use strict";
    function o(t, e) {
        this.init("popover", t, e)
    }
    if (!s.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    o.VERSION = "3.3.7",
    o.DEFAULTS = s.extend({}, s.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    ((o.prototype = s.extend({}, s.fn.tooltip.Constructor.prototype)).constructor = o).prototype.getDefaults = function() {
        return o.DEFAULTS
    }
    ,
    o.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle()
          , i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
        t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i),
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    }
    ,
    o.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    o.prototype.getContent = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }
    ,
    o.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var t = s.fn.popover;
    s.fn.popover = function(n) {
        return this.each(function() {
            var t = s(this)
              , e = t.data("bs.popover")
              , i = "object" == typeof n && n;
            !e && /destroy|hide/.test(n) || (e || t.data("bs.popover", e = new o(this,i)),
            "string" == typeof n && e[n]())
        })
    }
    ,
    s.fn.popover.Constructor = o,
    s.fn.popover.noConflict = function() {
        return s.fn.popover = t,
        this
    }
}(jQuery),
function(s) {
    "use strict";
    function o(t, e) {
        this.$body = s(document.body),
        this.$scrollElement = s(s(t).is(document.body) ? window : t),
        this.options = s.extend({}, o.DEFAULTS, e),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function e(n) {
        return this.each(function() {
            var t = s(this)
              , e = t.data("bs.scrollspy")
              , i = "object" == typeof n && n;
            e || t.data("bs.scrollspy", e = new o(this,i)),
            "string" == typeof n && e[n]()
        })
    }
    o.VERSION = "3.3.7",
    o.DEFAULTS = {
        offset: 10
    },
    o.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    o.prototype.refresh = function() {
        var t = this
          , i = "offset"
          , n = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        s.isWindow(this.$scrollElement[0]) || (i = "position",
        n = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var t = s(this)
              , e = t.data("target") || t.attr("href")
              , t = /^#./.test(e) && s(e);
            return t && t.length && t.is(":visible") ? [[t[i]().top + n, e]] : null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            t.offsets.push(this[0]),
            t.targets.push(this[1])
        })
    }
    ,
    o.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), n = this.options.offset + i - this.$scrollElement.height(), s = this.offsets, o = this.targets, a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(),
        n <= e)
            return a != (t = o[o.length - 1]) && this.activate(t);
        if (a && e < s[0])
            return this.activeTarget = null,
            this.clear();
        for (t = s.length; t--; )
            a != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t])
    }
    ,
    o.prototype.activate = function(t) {
        this.activeTarget = t,
        this.clear();
        t = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
        t = s(t).parents("li").addClass("active");
        t.parent(".dropdown-menu").length && (t = t.closest("li.dropdown").addClass("active")),
        t.trigger("activate.bs.scrollspy")
    }
    ,
    o.prototype.clear = function() {
        s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var t = s.fn.scrollspy;
    s.fn.scrollspy = e,
    s.fn.scrollspy.Constructor = o,
    s.fn.scrollspy.noConflict = function() {
        return s.fn.scrollspy = t,
        this
    }
    ,
    s(window).on("load.bs.scrollspy.data-api", function() {
        s('[data-spy="scroll"]').each(function() {
            var t = s(this);
            e.call(t, t.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";
    function e(i) {
        return this.each(function() {
            var t = a(this)
              , e = t.data("bs.tab");
            e || t.data("bs.tab", e = new r(this)),
            "string" == typeof i && e[i]()
        })
    }
    function r(t) {
        this.element = a(t)
    }
    r.VERSION = "3.3.7",
    r.TRANSITION_DURATION = 150,
    r.prototype.show = function() {
        var t, e, i, n = this.element, s = n.closest("ul:not(.dropdown-menu)"), o = n.data("target");
        o || (o = (o = n.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")),
        n.parent("li").hasClass("active") || (t = s.find(".active:last a"),
        e = a.Event("hide.bs.tab", {
            relatedTarget: n[0]
        }),
        i = a.Event("show.bs.tab", {
            relatedTarget: t[0]
        }),
        t.trigger(e),
        n.trigger(i),
        i.isDefaultPrevented() || e.isDefaultPrevented() || (o = a(o),
        this.activate(n.closest("li"), s),
        this.activate(o, o.parent(), function() {
            t.trigger({
                type: "hidden.bs.tab",
                relatedTarget: n[0]
            }),
            n.trigger({
                type: "shown.bs.tab",
                relatedTarget: t[0]
            })
        })))
    }
    ,
    r.prototype.activate = function(t, e, i) {
        function n() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            o ? (t[0].offsetWidth,
            t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            i && i()
        }
        var s = e.find("> .active")
          , o = i && a.support.transition && (s.length && s.hasClass("fade") || !!e.find("> .fade").length);
        s.length && o ? s.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n(),
        s.removeClass("in")
    }
    ;
    var t = a.fn.tab;
    function i(t) {
        t.preventDefault(),
        e.call(a(this), "show")
    }
    a.fn.tab = e,
    a.fn.tab.Constructor = r,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = t,
        this
    }
    ,
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function(a) {
    "use strict";
    function i(n) {
        return this.each(function() {
            var t = a(this)
              , e = t.data("bs.affix")
              , i = "object" == typeof n && n;
            e || t.data("bs.affix", e = new r(this,i)),
            "string" == typeof n && e[n]()
        })
    }
    var r = function(t, e) {
        this.options = a.extend({}, r.DEFAULTS, e),
        this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(t),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    r.VERSION = "3.3.7",
    r.RESET = "affix affix-top affix-bottom",
    r.DEFAULTS = {
        offset: 0,
        target: window
    },
    r.prototype.getState = function(t, e, i, n) {
        var s = this.$target.scrollTop()
          , o = this.$element.offset()
          , a = this.$target.height();
        if (null != i && "top" == this.affixed)
            return s < i && "top";
        if ("bottom" == this.affixed)
            return null != i ? !(s + this.unpin <= o.top) && "bottom" : !(s + a <= t - n) && "bottom";
        var r = null == this.affixed
          , o = r ? s : o.top;
        return null != i && s <= i ? "top" : null != n && t - n <= o + (r ? a : e) && "bottom"
    }
    ,
    r.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(r.RESET).addClass("affix");
        var t = this.$target.scrollTop()
          , e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }
    ,
    r.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }
    ,
    r.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height()
              , e = this.options.offset
              , i = e.top
              , n = e.bottom
              , s = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof e && (n = i = e),
            "function" == typeof i && (i = e.top(this.$element)),
            "function" == typeof n && (n = e.bottom(this.$element));
            var o = this.getState(s, t, i, n);
            if (this.affixed != o) {
                null != this.unpin && this.$element.css("top", "");
                e = "affix" + (o ? "-" + o : ""),
                i = a.Event(e + ".bs.affix");
                if (this.$element.trigger(i),
                i.isDefaultPrevented())
                    return;
                this.affixed = o,
                this.unpin = "bottom" == o ? this.getPinnedOffset() : null,
                this.$element.removeClass(r.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == o && this.$element.offset({
                top: s - t - n
            })
        }
    }
    ;
    var t = a.fn.affix;
    a.fn.affix = i,
    a.fn.affix.Constructor = r,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = t,
        this
    }
    ,
    a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var t = a(this)
              , e = t.data();
            e.offset = e.offset || {},
            null != e.offsetBottom && (e.offset.bottom = e.offsetBottom),
            null != e.offsetTop && (e.offset.top = e.offsetTop),
            i.call(t, e)
        })
    })
}(jQuery),
window.matchMedia = window.matchMedia || function(t) {
    var e, i = t.documentElement, n = i.firstElementChild || i.firstChild, s = t.createElement("body"), o = t.createElement("div");
    return o.id = "mq-test-1",
    o.style.cssText = "position:absolute;top:-100em",
    s.style.background = "none",
    s.appendChild(o),
    function(t) {
        return o.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>',
        i.insertBefore(s, n),
        e = 42 == o.offsetWidth,
        i.removeChild(s),
        {
            matches: e,
            media: t
        }
    }
}(document),
function(r) {
    var f, m, g, v, b, l, y, h, _, u, t, c, d, x, C, w, k, D, i, n;
    function e() {
        D(!0)
    }
    r.respond = {},
    respond.update = function() {}
    ,
    respond.mediaQueriesSupported = r.matchMedia && r.matchMedia("only all").matches,
    respond.mediaQueriesSupported || (f = r.document,
    m = f.documentElement,
    g = [],
    v = [],
    b = [],
    l = {},
    y = f.getElementsByTagName("head")[0] || m,
    h = f.getElementsByTagName("base")[0],
    _ = y.getElementsByTagName("link"),
    u = [],
    t = function() {
        for (var t, e, i, n, s = _, o = s.length, a = 0; a < o; a++)
            e = (t = s[a]).href,
            i = t.media,
            n = t.rel && "stylesheet" === t.rel.toLowerCase(),
            e && n && !l[e] && (t.styleSheet && t.styleSheet.rawCssText ? (d(t.styleSheet.rawCssText, e, i),
            l[e] = !0) : (/^([a-zA-Z:]*\/\/)/.test(e) || h) && e.replace(RegExp.$1, "").split("/")[0] !== r.location.host || u.push({
                href: e,
                media: i
            }));
        c()
    }
    ,
    c = function() {
        var e;
        u.length && (e = u.shift(),
        i(e.href, function(t) {
            d(t, e.href, e.media),
            l[e.href] = !0,
            c()
        }))
    }
    ,
    d = function(t, e, i) {
        function n(t) {
            return t.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + e + "$2$3")
        }
        var s, o, a, r, l, h = t.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi), u = h && h.length || 0, c = !u && i, d = 0;
        for ((e = e.substring(0, e.lastIndexOf("/"))).length && (e += "/"),
        c && (u = 1); d < u; d++)
            for (s = 0,
            c ? (o = i,
            v.push(n(t))) : (o = h[d].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1,
            v.push(RegExp.$2 && n(RegExp.$2))),
            l = (r = o.split(",")).length; s < l; s++)
                a = r[s],
                g.push({
                    media: a.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) && RegExp.$2 || "all",
                    rules: v.length - 1,
                    hasquery: -1 < a.indexOf("("),
                    minw: a.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw: a.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                });
        D()
    }
    ,
    w = function() {
        var t, e = f.createElement("div"), i = f.body, n = !1;
        return e.style.cssText = "position:absolute;font-size:1em;width:1em",
        i || ((i = n = f.createElement("body")).style.background = "none"),
        i.appendChild(e),
        m.insertBefore(i, m.firstChild),
        t = e.offsetWidth,
        n ? m.removeChild(i) : i.removeChild(e),
        k = parseFloat(t)
    }
    ,
    D = function(t) {
        var e, i = "clientWidth", n = m[i], s = "CSS1Compat" === f.compatMode && n || f.body[i] || n, o = {}, a = _[_.length - 1], n = (new Date).getTime();
        if (t && x && n - x < 30)
            return clearTimeout(C),
            void (C = setTimeout(D, 30));
        for (e in x = n,
        g) {
            var r = g[e]
              , l = null === (u = r.minw)
              , h = null === (c = r.maxw)
              , u = u && parseFloat(u) * (-1 < u.indexOf("em") ? k || w() : 1)
              , c = c && parseFloat(c) * (-1 < c.indexOf("em") ? k || w() : 1);
            r.hasquery && (l && h || !(l || u <= s) || !(h || s <= c)) || (o[r.media] || (o[r.media] = []),
            o[r.media].push(v[r.rules]))
        }
        for (e in b)
            b[e] && b[e].parentNode === y && y.removeChild(b[e]);
        for (e in o) {
            var d = f.createElement("style")
              , p = o[e].join("\n");
            d.type = "text/css",
            d.media = e,
            y.insertBefore(d, a.nextSibling),
            d.styleSheet ? d.styleSheet.cssText = p : d.appendChild(f.createTextNode(p)),
            b.push(d)
        }
    }
    ,
    i = function(t, e) {
        var i = n();
        i && (i.open("GET", t, !0),
        i.onreadystatechange = function() {
            4 != i.readyState || 200 != i.status && 304 != i.status || e(i.responseText)
        }
        ,
        4 != i.readyState && i.send(null))
    }
    ,
    n = function() {
        var e = !1;
        try {
            e = new XMLHttpRequest
        } catch (t) {
            e = new ActiveXObject("Microsoft.XMLHTTP")
        }
        return function() {
            return e
        }
    }(),
    t(),
    respond.update = t,
    r.addEventListener ? r.addEventListener("resize", e, !1) : r.attachEvent && r.attachEvent("onresize", e))
}(this),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(C) {
    function t() {
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        C.extend(this._defaults, this.regional[""]),
        this.regional.en = C.extend(!0, {}, this.regional[""]),
        this.regional["en-US"] = C.extend(!0, {}, this.regional.en),
        this.dpDiv = i(C("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function i(t) {
        var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.on("mouseout", e, function() {
            C(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && C(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && C(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", e, o)
    }
    function o() {
        C.datepicker._isDisabledDatepicker((it.inline ? it.dpDiv.parent() : it.input)[0]) || (C(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
        C(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") && C(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") && C(this).addClass("ui-datepicker-next-hover"))
    }
    function l(t, e) {
        for (var i in C.extend(t, e),
        e)
            null == e[i] && (t[i] = e[i]);
        return t
    }
    function e(e) {
        return function() {
            var t = this.element.val();
            e.apply(this, arguments),
            this._refresh(),
            t !== this.element.val() && this._trigger("change")
        }
    }
    C.ui = C.ui || {},
    C.ui.version = "1.12.1";
    var n, s, w, k, a, r, h, u, c, D, d, p = 0, f = Array.prototype.slice;
    function T(t, e, i) {
        return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)]
    }
    function P(t, e) {
        return parseInt(C.css(t, e), 10) || 0
    }
    C.cleanData = (d = C.cleanData,
    function(t) {
        for (var e, i, n = 0; null != (i = t[n]); n++)
            try {
                (e = C._data(i, "events")) && e.remove && C(i).triggerHandler("remove")
            } catch (t) {}
        d(t)
    }
    ),
    C.widget = function(t, i, e) {
        var n, s, o, a = {}, r = t.split(".")[0], l = r + "-" + (t = t.split(".")[1]);
        return e || (e = i,
        i = C.Widget),
        C.isArray(e) && (e = C.extend.apply(null, [{}].concat(e))),
        C.expr[":"][l.toLowerCase()] = function(t) {
            return !!C.data(t, l)
        }
        ,
        C[r] = C[r] || {},
        n = C[r][t],
        s = C[r][t] = function(t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new s(t,e)
        }
        ,
        C.extend(s, n, {
            version: e.version,
            _proto: C.extend({}, e),
            _childConstructors: []
        }),
        (o = new i).options = C.widget.extend({}, o.options),
        C.each(e, function(e, n) {
            return C.isFunction(n) ? void (a[e] = function() {
                var t, e = this._super, i = this._superApply;
                return this._super = s,
                this._superApply = o,
                t = n.apply(this, arguments),
                this._super = e,
                this._superApply = i,
                t
            }
            ) : void (a[e] = n);
            function s() {
                return i.prototype[e].apply(this, arguments)
            }
            function o(t) {
                return i.prototype[e].apply(this, t)
            }
        }),
        s.prototype = C.widget.extend(o, {
            widgetEventPrefix: n && o.widgetEventPrefix || t
        }, a, {
            constructor: s,
            namespace: r,
            widgetName: t,
            widgetFullName: l
        }),
        n ? (C.each(n._childConstructors, function(t, e) {
            var i = e.prototype;
            C.widget(i.namespace + "." + i.widgetName, s, e._proto)
        }),
        delete n._childConstructors) : i._childConstructors.push(s),
        C.widget.bridge(t, s),
        s
    }
    ,
    C.widget.extend = function(t) {
        for (var e, i, n = f.call(arguments, 1), s = 0, o = n.length; s < o; s++)
            for (e in n[s])
                i = n[s][e],
                n[s].hasOwnProperty(e) && void 0 !== i && (t[e] = C.isPlainObject(i) ? C.isPlainObject(t[e]) ? C.widget.extend({}, t[e], i) : C.widget.extend({}, i) : i);
        return t
    }
    ,
    C.widget.bridge = function(o, e) {
        var a = e.prototype.widgetFullName || o;
        C.fn[o] = function(i) {
            var t = "string" == typeof i
              , n = f.call(arguments, 1)
              , s = this;
            return t ? this.length || "instance" !== i ? this.each(function() {
                var t, e = C.data(this, a);
                return "instance" === i ? (s = e,
                !1) : e ? C.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, n)) !== e && void 0 !== t ? (s = t && t.jquery ? s.pushStack(t.get()) : t,
                !1) : void 0 : C.error("no such method '" + i + "' for " + o + " widget instance") : C.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'")
            }) : s = void 0 : (n.length && (i = C.widget.extend.apply(null, [i].concat(n))),
            this.each(function() {
                var t = C.data(this, a);
                t ? (t.option(i || {}),
                t._init && t._init()) : C.data(this, a, new e(i,this))
            })),
            s
        }
    }
    ,
    C.Widget = function() {}
    ,
    C.Widget._childConstructors = [],
    C.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = C(e || this.defaultElement || this)[0],
            this.element = C(e),
            this.uuid = p++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = C(),
            this.hoverable = C(),
            this.focusable = C(),
            this.classesElementLookup = {},
            e !== this && (C.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }),
            this.document = C(e.style ? e.ownerDocument : e.document || e),
            this.window = C(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = C.widget.extend({}, this.options, this._getCreateOptions(), t),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: C.noop,
        _create: C.noop,
        _init: C.noop,
        destroy: function() {
            var i = this;
            this._destroy(),
            C.each(this.classesElementLookup, function(t, e) {
                i._removeClass(e, t)
            }),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: C.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, n, s, o = t;
            if (0 === arguments.length)
                return C.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {},
                t = (i = t.split(".")).shift(),
                i.length) {
                    for (n = o[t] = C.widget.extend({}, this.options[t]),
                    s = 0; i.length - 1 > s; s++)
                        n[i[s]] = n[i[s]] || {},
                        n = n[i[s]];
                    if (t = i.pop(),
                    1 === arguments.length)
                        return void 0 === n[t] ? null : n[t];
                    n[t] = e
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = e
                }
            return this._setOptions(o),
            this
        },
        _setOptions: function(t) {
            for (var e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e),
            this.options[t] = e,
            "disabled" === t && this._setOptionDisabled(e),
            this
        },
        _setOptionClasses: function(t) {
            var e, i, n;
            for (e in t)
                n = this.classesElementLookup[e],
                t[e] !== this.options.classes[e] && n && n.length && (i = C(n.get()),
                this._removeClass(n, e),
                i.addClass(this._classes({
                    element: i,
                    keys: e,
                    classes: t,
                    add: !0
                })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(s) {
            function t(t, e) {
                for (var i, n = 0; t.length > n; n++)
                    i = a.classesElementLookup[t[n]] || C(),
                    i = s.add ? C(C.unique(i.get().concat(s.element.get()))) : C(i.not(s.element).get()),
                    a.classesElementLookup[t[n]] = i,
                    o.push(t[n]),
                    e && s.classes[t[n]] && o.push(s.classes[t[n]])
            }
            var o = []
              , a = this;
            return s = C.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, s),
            this._on(s.element, {
                remove: "_untrackClassesElement"
            }),
            s.keys && t(s.keys.match(/\S+/g) || [], !0),
            s.extra && t(s.extra.match(/\S+/g) || []),
            o.join(" ")
        },
        _untrackClassesElement: function(i) {
            var n = this;
            C.each(n.classesElementLookup, function(t, e) {
                -1 !== C.inArray(i.target, e) && (n.classesElementLookup[t] = C(e.not(i.target).get()))
            })
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, n) {
            n = "boolean" == typeof n ? n : i;
            var s = "string" == typeof t || null === t
              , t = {
                extra: s ? e : i,
                keys: s ? t : e,
                element: s ? this.element : t,
                add: n
            };
            return t.element.toggleClass(this._classes(t), n),
            this
        },
        _on: function(s, o, t) {
            var a, r = this;
            "boolean" != typeof s && (t = o,
            o = s,
            s = !1),
            t ? (o = a = C(o),
            this.bindings = this.bindings.add(o)) : (t = o,
            o = this.element,
            a = this.widget()),
            C.each(t, function(t, e) {
                function i() {
                    return s || !0 !== r.options.disabled && !C(this).hasClass("ui-state-disabled") ? ("string" == typeof e ? r[e] : e).apply(r, arguments) : void 0
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || C.guid++);
                var n = t.match(/^([\w:-]*)\s*(.*)$/)
                  , t = n[1] + r.eventNamespace
                  , n = n[2];
                n ? a.on(t, n, i) : o.on(t, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.off(e).off(e),
            this.bindings = C(this.bindings.not(t).get()),
            this.focusable = C(this.focusable.not(t).get()),
            this.hoverable = C(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    this._addClass(C(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(C(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    this._addClass(C(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(C(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var n, s, o = this.options[t];
            if (i = i || {},
            (e = C.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            e.target = this.element[0],
            s = e.originalEvent)
                for (n in s)
                    n in e || (e[n] = s[n]);
            return this.element.trigger(e, i),
            !(C.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    },
    C.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(o, a) {
        C.Widget.prototype["_" + o] = function(e, t, i) {
            "string" == typeof t && (t = {
                effect: t
            });
            var n, s = t ? !0 !== t && "number" != typeof t && t.effect || a : o;
            "number" == typeof (t = t || {}) && (t = {
                duration: t
            }),
            n = !C.isEmptyObject(t),
            t.complete = i,
            t.delay && e.delay(t.delay),
            n && C.effects && C.effects.effect[s] ? e[o](t) : s !== o && e[s] ? e[s](t.duration, t.easing, i) : e.queue(function(t) {
                C(this)[o](),
                i && i.call(e[0]),
                t()
            })
        }
    }),
    C.widget,
    w = Math.max,
    k = Math.abs,
    a = /left|center|right/,
    r = /top|center|bottom/,
    h = /[\+\-]\d+(\.[\d]+)?%?/,
    u = /^\w+/,
    c = /%$/,
    D = C.fn.position,
    C.position = {
        scrollbarWidth: function() {
            if (void 0 !== s)
                return s;
            var t, e = C("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), i = e.children()[0];
            return C("body").append(e),
            t = i.offsetWidth,
            e.css("overflow", "scroll"),
            t === (i = i.offsetWidth) && (i = e[0].clientWidth),
            e.remove(),
            s = t - i
        },
        getScrollInfo: function(t) {
            var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
              , i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
              , e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
            return {
                width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? C.position.scrollbarWidth() : 0,
                height: e ? C.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(t) {
            var e = C(t || window)
              , i = C.isWindow(e[0])
              , n = !!e[0] && 9 === e[0].nodeType;
            return {
                element: e,
                isWindow: i,
                isDocument: n,
                offset: !i && !n ? C(t).offset() : {
                    left: 0,
                    top: 0
                },
                scrollLeft: e.scrollLeft(),
                scrollTop: e.scrollTop(),
                width: e.outerWidth(),
                height: e.outerHeight()
            }
        }
    },
    C.fn.position = function(c) {
        if (!c || !c.of)
            return D.apply(this, arguments);
        c = C.extend({}, c);
        var d, p, f, m, g, t, v = C(c.of), b = C.position.getWithinInfo(c.within), y = C.position.getScrollInfo(b), _ = (c.collision || "flip").split(" "), x = {}, e = 9 === (t = (e = v)[0]).nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : C.isWindow(t) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : t.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: t.pageY,
                left: t.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        };
        return v[0].preventDefault && (c.at = "left top"),
        p = e.width,
        f = e.height,
        m = e.offset,
        g = C.extend({}, m),
        C.each(["my", "at"], function() {
            var t, e, i = (c[this] || "").split(" ");
            1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : r.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
            i[0] = a.test(i[0]) ? i[0] : "center",
            i[1] = r.test(i[1]) ? i[1] : "center",
            t = h.exec(i[0]),
            e = h.exec(i[1]),
            x[this] = [t ? t[0] : 0, e ? e[0] : 0],
            c[this] = [u.exec(i[0])[0], u.exec(i[1])[0]]
        }),
        1 === _.length && (_[1] = _[0]),
        "right" === c.at[0] ? g.left += p : "center" === c.at[0] && (g.left += p / 2),
        "bottom" === c.at[1] ? g.top += f : "center" === c.at[1] && (g.top += f / 2),
        d = T(x.at, p, f),
        g.left += d[0],
        g.top += d[1],
        this.each(function() {
            var i, t, a = C(this), r = a.outerWidth(), l = a.outerHeight(), e = P(this, "marginLeft"), n = P(this, "marginTop"), s = r + e + P(this, "marginRight") + y.width, o = l + n + P(this, "marginBottom") + y.height, h = C.extend({}, g), u = T(x.my, a.outerWidth(), a.outerHeight());
            "right" === c.my[0] ? h.left -= r : "center" === c.my[0] && (h.left -= r / 2),
            "bottom" === c.my[1] ? h.top -= l : "center" === c.my[1] && (h.top -= l / 2),
            h.left += u[0],
            h.top += u[1],
            i = {
                marginLeft: e,
                marginTop: n
            },
            C.each(["left", "top"], function(t, e) {
                C.ui.position[_[t]] && C.ui.position[_[t]][e](h, {
                    targetWidth: p,
                    targetHeight: f,
                    elemWidth: r,
                    elemHeight: l,
                    collisionPosition: i,
                    collisionWidth: s,
                    collisionHeight: o,
                    offset: [d[0] + u[0], d[1] + u[1]],
                    my: c.my,
                    at: c.at,
                    within: b,
                    elem: a
                })
            }),
            c.using && (t = function(t) {
                var e = m.left - h.left
                  , i = e + p - r
                  , n = m.top - h.top
                  , s = n + f - l
                  , o = {
                    target: {
                        element: v,
                        left: m.left,
                        top: m.top,
                        width: p,
                        height: f
                    },
                    element: {
                        element: a,
                        left: h.left,
                        top: h.top,
                        width: r,
                        height: l
                    },
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: s < 0 ? "top" : 0 < n ? "bottom" : "middle"
                };
                p < r && p > k(e + i) && (o.horizontal = "center"),
                f < l && f > k(n + s) && (o.vertical = "middle"),
                o.important = w(k(e), k(i)) > w(k(n), k(s)) ? "horizontal" : "vertical",
                c.using.call(this, t, o)
            }
            ),
            a.offset(C.extend(h, {
                using: t
            }))
        })
    }
    ,
    C.ui.position = {
        fit: {
            left: function(t, e) {
                var i = e.within
                  , n = i.isWindow ? i.scrollLeft : i.offset.left
                  , s = i.width
                  , o = t.left - e.collisionPosition.marginLeft
                  , a = n - o
                  , r = o + e.collisionWidth - s - n;
                e.collisionWidth > s ? 0 < a && r <= 0 ? (i = t.left + a + e.collisionWidth - s - n,
                t.left += a - i) : t.left = !(0 < r && a <= 0) && r < a ? n + s - e.collisionWidth : n : 0 < a ? t.left += a : 0 < r ? t.left -= r : t.left = w(t.left - o, t.left)
            },
            top: function(t, e) {
                var i = e.within
                  , n = i.isWindow ? i.scrollTop : i.offset.top
                  , s = e.within.height
                  , o = t.top - e.collisionPosition.marginTop
                  , a = n - o
                  , r = o + e.collisionHeight - s - n;
                e.collisionHeight > s ? 0 < a && r <= 0 ? (i = t.top + a + e.collisionHeight - s - n,
                t.top += a - i) : t.top = !(0 < r && a <= 0) && r < a ? n + s - e.collisionHeight : n : 0 < a ? t.top += a : 0 < r ? t.top -= r : t.top = w(t.top - o, t.top)
            }
        },
        flip: {
            left: function(t, e) {
                var i = e.within
                  , n = i.offset.left + i.scrollLeft
                  , s = i.width
                  , o = i.isWindow ? i.scrollLeft : i.offset.left
                  , a = t.left - e.collisionPosition.marginLeft
                  , r = a - o
                  , l = a + e.collisionWidth - s - o
                  , h = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0
                  , i = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0
                  , a = -2 * e.offset[0];
                r < 0 ? ((n = t.left + h + i + a + e.collisionWidth - s - n) < 0 || k(r) > n) && (t.left += h + i + a) : 0 < l && ((0 < (o = t.left - e.collisionPosition.marginLeft + h + i + a - o) || l > k(o)) && (t.left += h + i + a))
            },
            top: function(t, e) {
                var i = e.within
                  , n = i.offset.top + i.scrollTop
                  , s = i.height
                  , o = i.isWindow ? i.scrollTop : i.offset.top
                  , a = t.top - e.collisionPosition.marginTop
                  , r = a - o
                  , l = a + e.collisionHeight - s - o
                  , h = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0
                  , i = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0
                  , a = -2 * e.offset[1];
                r < 0 ? ((n = t.top + h + i + a + e.collisionHeight - s - n) < 0 || k(r) > n) && (t.top += h + i + a) : 0 < l && ((0 < (o = t.top - e.collisionPosition.marginTop + h + i + a - o) || l > k(o)) && (t.top += h + i + a))
            }
        },
        flipfit: {
            left: function() {
                C.ui.position.flip.left.apply(this, arguments),
                C.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                C.ui.position.flip.top.apply(this, arguments),
                C.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    C.ui.position,
    C.extend(C.expr[":"], {
        data: C.expr.createPseudo ? C.expr.createPseudo(function(e) {
            return function(t) {
                return !!C.data(t, e)
            }
        }) : function(t, e, i) {
            return !!C.data(t, i[3])
        }
    }),
    C.fn.extend({
        disableSelection: (n = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown",
        function() {
            return this.on(n + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        }
        ),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    });
    var m, g, v, b, y, _, x, M, S, E, I, A, N, $, H, O, F, R, z, L, j, W = "ui-effects-", B = "ui-effects-style", q = "ui-effects-animated", U = C;
    function G(t, e, i, n) {
        return C.isPlainObject(t) && (t = (e = t).effect),
        t = {
            effect: t
        },
        null == e && (e = {}),
        C.isFunction(e) && (n = e,
        i = null,
        e = {}),
        "number" != typeof e && !C.fx.speeds[e] || (n = i,
        i = e,
        e = {}),
        C.isFunction(i) && (n = i,
        i = null),
        e && C.extend(t, e),
        i = i || e.duration,
        t.duration = C.fx.off ? 0 : "number" == typeof i ? i : i in C.fx.speeds ? C.fx.speeds[i] : C.fx.speeds._default,
        t.complete = n || e.complete,
        t
    }
    function Y(t) {
        return !t || "number" == typeof t || C.fx.speeds[t] || ("string" == typeof t && !C.effects.effect[t] || (C.isFunction(t) || "object" == typeof t && !t.effect))
    }
    function V(t, e) {
        var i = e.outerWidth()
          , e = e.outerHeight()
          , t = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, e, 0];
        return {
            top: parseFloat(t[1]) || 0,
            right: "auto" === t[2] ? i : parseFloat(t[2]),
            bottom: "auto" === t[3] ? e : parseFloat(t[3]),
            left: parseFloat(t[4]) || 0
        }
    }
    function K(t) {
        var e, i, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, s = {};
        if (n && n.length && n[0] && n[n[0]])
            for (i = n.length; i--; )
                "string" == typeof n[e = n[i]] && (s[C.camelCase(e)] = n[e]);
        else
            for (e in n)
                "string" == typeof n[e] && (s[e] = n[e]);
        return s
    }
    function X(t, e, i) {
        var n = R[e.type] || {};
        return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t),
        isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : t < 0 ? 0 : n.max < t ? n.max : t)
    }
    function Q(n) {
        var s = O()
          , o = s._rgba = [];
        return n = n.toLowerCase(),
        j(H, function(t, e) {
            var i = e.re.exec(n)
              , i = i && e.parse(i)
              , e = e.space || "rgba";
            return i ? (i = s[e](i),
            s[F[e].cache] = i[F[e].cache],
            o = s._rgba = i._rgba,
            !1) : A
        }),
        o.length ? ("0,0,0,0" === o.join() && I.extend(o, N.transparent),
        s) : N[n]
    }
    function J(t, e, i) {
        return 6 * (i = (i + 1) % 1) < 1 ? t + 6 * (e - t) * i : 2 * i < 1 ? e : 3 * i < 2 ? t + 6 * (e - t) * (2 / 3 - i) : t
    }
    C.effects = {
        effect: {}
    },
    $ = /^([\-+])=\s*(\d+\.?\d*)/,
    H = [{
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(t) {
            return [t[1], t[2], t[3], t[4]]
        }
    }, {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(t) {
            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
        }
    }, {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
        parse: function(t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
        }
    }, {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
        parse: function(t) {
            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
        }
    }, {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function(t) {
            return [t[1], t[2] / 100, t[3] / 100, t[4]]
        }
    }],
    O = (I = U).Color = function(t, e, i, n) {
        return new I.Color.fn.parse(t,e,i,n)
    }
    ,
    F = {
        rgba: {
            props: {
                red: {
                    idx: 0,
                    type: "byte"
                },
                green: {
                    idx: 1,
                    type: "byte"
                },
                blue: {
                    idx: 2,
                    type: "byte"
                }
            }
        },
        hsla: {
            props: {
                hue: {
                    idx: 0,
                    type: "degrees"
                },
                saturation: {
                    idx: 1,
                    type: "percent"
                },
                lightness: {
                    idx: 2,
                    type: "percent"
                }
            }
        }
    },
    R = {
        byte: {
            floor: !0,
            max: 255
        },
        percent: {
            max: 1
        },
        degrees: {
            mod: 360,
            floor: !0
        }
    },
    z = O.support = {},
    L = I("<p>")[0],
    j = I.each,
    L.style.cssText = "background-color:rgba(1,1,1,.5)",
    z.rgba = -1 < L.style.backgroundColor.indexOf("rgba"),
    j(F, function(t, e) {
        e.cache = "_" + t,
        e.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    }),
    O.fn = I.extend(O.prototype, {
        parse: function(s, t, e, i) {
            if (s === A)
                return this._rgba = [null, null, null, null],
                this;
            (s.jquery || s.nodeType) && (s = I(s).css(t),
            t = A);
            var o = this
              , n = I.type(s)
              , a = this._rgba = [];
            return t !== A && (s = [s, t, e, i],
            n = "array"),
            "string" === n ? this.parse(Q(s) || N._default) : "array" === n ? (j(F.rgba.props, function(t, e) {
                a[e.idx] = X(s[e.idx], e)
            }),
            this) : "object" === n ? (j(F, s instanceof O ? function(t, e) {
                s[e.cache] && (o[e.cache] = s[e.cache].slice())
            }
            : function(t, i) {
                var n = i.cache;
                j(i.props, function(t, e) {
                    if (!o[n] && i.to) {
                        if ("alpha" === t || null == s[t])
                            return;
                        o[n] = i.to(o._rgba)
                    }
                    o[n][e.idx] = X(s[t], e, !0)
                }),
                o[n] && I.inArray(null, o[n].slice(0, 3)) < 0 && (o[n][3] = 1,
                i.from && (o._rgba = i.from(o[n])))
            }
            ),
            this) : A
        },
        is: function(t) {
            var s = O(t)
              , o = !0
              , a = this;
            return j(F, function(t, e) {
                var i, n = s[e.cache];
                return n && (i = a[e.cache] || e.to && e.to(a._rgba) || [],
                j(e.props, function(t, e) {
                    return null != n[e.idx] ? o = n[e.idx] === i[e.idx] : A
                })),
                o
            }),
            o
        },
        _space: function() {
            var i = []
              , n = this;
            return j(F, function(t, e) {
                n[e.cache] && i.push(t)
            }),
            i.pop()
        },
        transition: function(t, a) {
            var e = (h = O(t))._space()
              , i = F[e]
              , t = 0 === this.alpha() ? O("transparent") : this
              , r = t[i.cache] || i.to(t._rgba)
              , l = r.slice()
              , h = h[i.cache];
            return j(i.props, function(t, e) {
                var i = e.idx
                  , n = r[i]
                  , s = h[i]
                  , o = R[e.type] || {};
                null !== s && (null === n ? l[i] = s : (o.mod && (o.mod / 2 < s - n ? n += o.mod : o.mod / 2 < n - s && (n -= o.mod)),
                l[i] = X((s - n) * a + n, e)))
            }),
            this[e](l)
        },
        blend: function(t) {
            if (1 === this._rgba[3])
                return this;
            var e = this._rgba.slice()
              , i = e.pop()
              , n = O(t)._rgba;
            return O(I.map(e, function(t, e) {
                return (1 - i) * n[e] + i * t
            }))
        },
        toRgbaString: function() {
            var t = "rgba("
              , e = I.map(this._rgba, function(t, e) {
                return null == t ? 2 < e ? 1 : 0 : t
            });
            return 1 === e[3] && (e.pop(),
            t = "rgb("),
            t + e.join() + ")"
        },
        toHslaString: function() {
            var t = "hsla("
              , e = I.map(this.hsla(), function(t, e) {
                return null == t && (t = 2 < e ? 1 : 0),
                e && e < 3 && (t = Math.round(100 * t) + "%"),
                t
            });
            return 1 === e[3] && (e.pop(),
            t = "hsl("),
            t + e.join() + ")"
        },
        toHexString: function(t) {
            var e = this._rgba.slice()
              , i = e.pop();
            return t && e.push(~~(255 * i)),
            "#" + I.map(e, function(t) {
                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
            }).join("")
        },
        toString: function() {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    }),
    O.fn.parse.prototype = O.fn,
    F.hsla.to = function(t) {
        if (null == t[0] || null == t[1] || null == t[2])
            return [null, null, null, t[3]];
        var e = t[0] / 255
          , i = t[1] / 255
          , n = t[2] / 255
          , s = t[3]
          , o = Math.max(e, i, n)
          , a = Math.min(e, i, n)
          , r = o - a
          , l = o + a
          , t = .5 * l
          , i = a === o ? 0 : e === o ? 60 * (i - n) / r + 360 : i === o ? 60 * (n - e) / r + 120 : 60 * (e - i) / r + 240
          , l = 0 == r ? 0 : t <= .5 ? r / l : r / (2 - l);
        return [Math.round(i) % 360, l, t, null == s ? 1 : s]
    }
    ,
    F.hsla.from = function(t) {
        if (null == t[0] || null == t[1] || null == t[2])
            return [null, null, null, t[3]];
        var e = t[0] / 360
          , i = t[1]
          , n = t[2]
          , t = t[3]
          , i = n <= .5 ? n * (1 + i) : n + i - n * i
          , n = 2 * n - i;
        return [Math.round(255 * J(n, i, e + 1 / 3)), Math.round(255 * J(n, i, e)), Math.round(255 * J(n, i, e - 1 / 3)), t]
    }
    ,
    j(F, function(r, t) {
        var o = t.props
          , a = t.cache
          , l = t.to
          , h = t.from;
        O.fn[r] = function(t) {
            if (l && !this[a] && (this[a] = l(this._rgba)),
            t === A)
                return this[a].slice();
            var e, i = I.type(t), n = "array" === i || "object" === i ? t : arguments, s = this[a].slice();
            return j(o, function(t, e) {
                t = n["object" === i ? t : e.idx];
                null == t && (t = s[e.idx]),
                s[e.idx] = X(t, e)
            }),
            h ? ((e = O(h(s)))[a] = s,
            e) : O(s)
        }
        ,
        j(o, function(o, a) {
            O.fn[o] || (O.fn[o] = function(t) {
                var e = I.type(t)
                  , i = "alpha" === o ? this._hsla ? "hsla" : "rgba" : r
                  , n = this[i]()
                  , s = n[a.idx];
                return "undefined" === e ? s : ("function" === e && (t = t.call(this, s),
                e = I.type(t)),
                null == t && a.empty ? this : ("string" === e && ((e = $.exec(t)) && (t = s + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1))),
                n[a.idx] = t,
                this[i](n)))
            }
            )
        })
    }),
    O.hook = function(t) {
        t = t.split(" ");
        j(t, function(t, o) {
            I.cssHooks[o] = {
                set: function(t, e) {
                    var i, n, s = "";
                    if ("transparent" !== e && ("string" !== I.type(e) || (i = Q(e)))) {
                        if (e = O(i || e),
                        !z.rgba && 1 !== e._rgba[3]) {
                            for (n = "backgroundColor" === o ? t.parentNode : t; ("" === s || "transparent" === s) && n && n.style; )
                                try {
                                    s = I.css(n, "backgroundColor"),
                                    n = n.parentNode
                                } catch (t) {}
                            e = e.blend(s && "transparent" !== s ? s : "_default")
                        }
                        e = e.toRgbaString()
                    }
                    try {
                        t.style[o] = e
                    } catch (t) {}
                }
            },
            I.fx.step[o] = function(t) {
                t.colorInit || (t.start = O(t.elem, o),
                t.end = O(t.end),
                t.colorInit = !0),
                I.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos))
            }
        })
    }
    ,
    O.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),
    I.cssHooks.borderColor = {
        expand: function(i) {
            var n = {};
            return j(["Top", "Right", "Bottom", "Left"], function(t, e) {
                n["border" + e + "Color"] = i
            }),
            n
        }
    },
    N = I.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    },
    S = ["add", "remove", "toggle"],
    E = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
    },
    C.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, e) {
        C.fx.step[e] = function(t) {
            ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (U.style(t.elem, e, t.end),
            t.setAttr = !0)
        }
    }),
    C.fn.addBack || (C.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
    ),
    C.effects.animateClass = function(s, t, e, i) {
        var o = C.speed(t, e, i);
        return this.queue(function() {
            var i = C(this)
              , t = i.attr("class") || ""
              , e = (e = o.children ? i.find("*").addBack() : i).map(function() {
                return {
                    el: C(this),
                    start: K(this)
                }
            })
              , n = function() {
                C.each(S, function(t, e) {
                    s[e] && i[e + "Class"](s[e])
                })
            };
            n(),
            e = e.map(function() {
                return this.end = K(this.el[0]),
                this.diff = function(t, e) {
                    var i, n, s = {};
                    for (i in e)
                        n = e[i],
                        t[i] !== n && (E[i] || !C.fx.step[i] && isNaN(parseFloat(n)) || (s[i] = n));
                    return s
                }(this.start, this.end),
                this
            }),
            i.attr("class", t),
            e = e.map(function() {
                var t = this
                  , e = C.Deferred()
                  , i = C.extend({}, o, {
                    queue: !1,
                    complete: function() {
                        e.resolve(t)
                    }
                });
                return this.el.animate(this.diff, i),
                e.promise()
            }),
            C.when.apply(C, e.get()).done(function() {
                n(),
                C.each(arguments, function() {
                    var e = this.el;
                    C.each(this.diff, function(t) {
                        e.css(t, "")
                    })
                }),
                o.complete.call(i[0])
            })
        })
    }
    ,
    C.fn.extend({
        addClass: (M = C.fn.addClass,
        function(t, e, i, n) {
            return e ? C.effects.animateClass.call(this, {
                add: t
            }, e, i, n) : M.apply(this, arguments)
        }
        ),
        removeClass: (x = C.fn.removeClass,
        function(t, e, i, n) {
            return 1 < arguments.length ? C.effects.animateClass.call(this, {
                remove: t
            }, e, i, n) : x.apply(this, arguments)
        }
        ),
        toggleClass: (_ = C.fn.toggleClass,
        function(t, e, i, n, s) {
            return "boolean" == typeof e || void 0 === e ? i ? C.effects.animateClass.call(this, e ? {
                add: t
            } : {
                remove: t
            }, i, n, s) : _.apply(this, arguments) : C.effects.animateClass.call(this, {
                toggle: t
            }, e, i, n)
        }
        ),
        switchClass: function(t, e, i, n, s) {
            return C.effects.animateClass.call(this, {
                add: e,
                remove: t
            }, i, n, s)
        }
    }),
    C.expr && C.expr.filters && C.expr.filters.animated && (C.expr.filters.animated = (y = C.expr.filters.animated,
    function(t) {
        return !!C(t).data(q) || y(t)
    }
    )),
    !1 !== C.uiBackCompat && C.extend(C.effects, {
        save: function(t, e) {
            for (var i = 0, n = e.length; i < n; i++)
                null !== e[i] && t.data(W + e[i], t[0].style[e[i]])
        },
        restore: function(t, e) {
            for (var i, n = 0, s = e.length; n < s; n++)
                null !== e[n] && (i = t.data(W + e[n]),
                t.css(e[n], i))
        },
        setMode: function(t, e) {
            return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
            e
        },
        createWrapper: function(i) {
            if (i.parent().is(".ui-effects-wrapper"))
                return i.parent();
            var n = {
                width: i.outerWidth(!0),
                height: i.outerHeight(!0),
                float: i.css("float")
            }
              , t = C("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
            })
              , e = {
                width: i.width(),
                height: i.height()
            }
              , s = document.activeElement;
            try {
                s.id
            } catch (t) {
                s = document.body
            }
            return i.wrap(t),
            i[0] !== s && !C.contains(i[0], s) || C(s).trigger("focus"),
            t = i.parent(),
            "static" === i.css("position") ? (t.css({
                position: "relative"
            }),
            i.css({
                position: "relative"
            })) : (C.extend(n, {
                position: i.css("position"),
                zIndex: i.css("z-index")
            }),
            C.each(["top", "left", "bottom", "right"], function(t, e) {
                n[e] = i.css(e),
                isNaN(parseInt(n[e], 10)) && (n[e] = "auto")
            }),
            i.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })),
            i.css(e),
            t.css(n).show()
        },
        removeWrapper: function(t) {
            var e = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
            t[0] !== e && !C.contains(t[0], e) || C(e).trigger("focus")),
            t
        }
    }),
    C.extend(C.effects, {
        version: "1.12.1",
        define: function(t, e, i) {
            return i || (i = e,
            e = "effect"),
            C.effects.effect[t] = i,
            C.effects.effect[t].mode = e,
            i
        },
        scaledDimensions: function(t, e, i) {
            if (0 === e)
                return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            var n = "horizontal" !== i ? (e || 100) / 100 : 1
              , e = "vertical" !== i ? (e || 100) / 100 : 1;
            return {
                height: t.height() * e,
                width: t.width() * n,
                outerHeight: t.outerHeight() * e,
                outerWidth: t.outerWidth() * n
            }
        },
        clipToBox: function(t) {
            return {
                width: t.clip.right - t.clip.left,
                height: t.clip.bottom - t.clip.top,
                left: t.clip.left,
                top: t.clip.top
            }
        },
        unshift: function(t, e, i) {
            var n = t.queue();
            1 < e && n.splice.apply(n, [1, 0].concat(n.splice(e, i))),
            t.dequeue()
        },
        saveStyle: function(t) {
            t.data(B, t[0].style.cssText)
        },
        restoreStyle: function(t) {
            t[0].style.cssText = t.data(B) || "",
            t.removeData(B)
        },
        mode: function(t, e) {
            t = t.is(":hidden");
            return "toggle" === e && (e = t ? "show" : "hide"),
            (t ? "hide" === e : "show" === e) && (e = "none"),
            e
        },
        getBaseline: function(t, e) {
            var i, n;
            switch (t[0]) {
            case "top":
                i = 0;
                break;
            case "middle":
                i = .5;
                break;
            case "bottom":
                i = 1;
                break;
            default:
                i = t[0] / e.height
            }
            switch (t[1]) {
            case "left":
                n = 0;
                break;
            case "center":
                n = .5;
                break;
            case "right":
                n = 1;
                break;
            default:
                n = t[1] / e.width
            }
            return {
                x: n,
                y: i
            }
        },
        createPlaceholder: function(t) {
            var e, i = t.css("position"), n = t.position();
            return t.css({
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight")
            }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),
            /^(static|relative)/.test(i) && (i = "absolute",
            e = C("<" + t[0].nodeName + ">").insertAfter(t).css({
                display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                visibility: "hidden",
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight"),
                float: t.css("float")
            }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),
            t.data(W + "placeholder", e)),
            t.css({
                position: i,
                left: n.left,
                top: n.top
            }),
            e
        },
        removePlaceholder: function(t) {
            var e = W + "placeholder"
              , i = t.data(e);
            i && (i.remove(),
            t.removeData(e))
        },
        cleanUp: function(t) {
            C.effects.restoreStyle(t),
            C.effects.removePlaceholder(t)
        },
        setTransition: function(n, t, s, o) {
            return o = o || {},
            C.each(t, function(t, e) {
                var i = n.cssUnit(e);
                0 < i[0] && (o[e] = i[0] * s + i[1])
            }),
            o
        }
    }),
    C.fn.extend({
        effect: function() {
            function t(t) {
                function e() {
                    C.isFunction(r) && r.call(i[0]),
                    C.isFunction(t) && t()
                }
                var i = C(this);
                n.mode = h.shift(),
                !1 === C.uiBackCompat || o ? "none" === n.mode ? (i[l](),
                e()) : s.call(i[0], n, function() {
                    i.removeData(q),
                    C.effects.cleanUp(i),
                    "hide" === n.mode && i.hide(),
                    e()
                }) : (i.is(":hidden") ? "hide" === l : "show" === l) ? (i[l](),
                e()) : s.call(i[0], n, e)
            }
            function e(t) {
                var e = C(this)
                  , i = C.effects.mode(e, l) || o;
                e.data(q, !0),
                h.push(i),
                o && ("show" === i || i === o && "hide" === i) && e.show(),
                o && "none" === i || C.effects.saveStyle(e),
                C.isFunction(t) && t()
            }
            var n = G.apply(this, arguments)
              , s = C.effects.effect[n.effect]
              , o = s.mode
              , i = n.queue
              , a = i || "fx"
              , r = n.complete
              , l = n.mode
              , h = [];
            return C.fx.off || !s ? l ? this[l](n.duration, r) : this.each(function() {
                r && r.call(this)
            }) : !1 === i ? this.each(e).each(t) : this.queue(a, e).queue(a, t)
        },
        show: (b = C.fn.show,
        function(t) {
            if (Y(t))
                return b.apply(this, arguments);
            var e = G.apply(this, arguments);
            return e.mode = "show",
            this.effect.call(this, e)
        }
        ),
        hide: (v = C.fn.hide,
        function(t) {
            if (Y(t))
                return v.apply(this, arguments);
            var e = G.apply(this, arguments);
            return e.mode = "hide",
            this.effect.call(this, e)
        }
        ),
        toggle: (g = C.fn.toggle,
        function(t) {
            if (Y(t) || "boolean" == typeof t)
                return g.apply(this, arguments);
            var e = G.apply(this, arguments);
            return e.mode = "toggle",
            this.effect.call(this, e)
        }
        ),
        cssUnit: function(t) {
            var i = this.css(t)
              , n = [];
            return C.each(["em", "px", "%", "pt"], function(t, e) {
                0 < i.indexOf(e) && (n = [parseFloat(i), e])
            }),
            n
        },
        cssClip: function(t) {
            return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : V(this.css("clip"), this)
        },
        transfer: function(t, e) {
            var i = C(this)
              , n = C(t.to)
              , s = "fixed" === n.css("position")
              , o = C("body")
              , a = s ? o.scrollTop() : 0
              , r = s ? o.scrollLeft() : 0
              , o = n.offset()
              , o = {
                top: o.top - a,
                left: o.left - r,
                height: n.innerHeight(),
                width: n.innerWidth()
            }
              , n = i.offset()
              , l = C("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                top: n.top - a,
                left: n.left - r,
                height: i.innerHeight(),
                width: i.innerWidth(),
                position: s ? "fixed" : "absolute"
            }).animate(o, t.duration, t.easing, function() {
                l.remove(),
                C.isFunction(e) && e()
            })
        }
    }),
    C.fx.step.clip = function(t) {
        t.clipInit || (t.start = C(t.elem).cssClip(),
        "string" == typeof t.end && (t.end = V(t.end, t.elem)),
        t.clipInit = !0),
        C(t.elem).cssClip({
            top: t.pos * (t.end.top - t.start.top) + t.start.top,
            right: t.pos * (t.end.right - t.start.right) + t.start.right,
            bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
            left: t.pos * (t.end.left - t.start.left) + t.start.left
        })
    }
    ,
    m = {},
    C.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, t) {
        m[t] = function(t) {
            return Math.pow(t, e + 2)
        }
    }),
    C.extend(m, {
        Sine: function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        Circ: function(t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        Elastic: function(t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        },
        Back: function(t) {
            return t * t * (3 * t - 2)
        },
        Bounce: function(t) {
            for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; )
                ;
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
    }),
    C.each(m, function(t, e) {
        C.easing["easeIn" + t] = e,
        C.easing["easeOut" + t] = function(t) {
            return 1 - e(1 - t)
        }
        ,
        C.easing["easeInOut" + t] = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
        }
    });
    var Z, tt;
    C.effects;
    C.effects.define("blind", "hide", function(t, e) {
        var i = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        }
          , n = C(this)
          , s = t.direction || "up"
          , o = n.cssClip()
          , a = {
            clip: C.extend({}, o)
        }
          , r = C.effects.createPlaceholder(n);
        a.clip[i[s][0]] = a.clip[i[s][1]],
        "show" === t.mode && (n.cssClip(a.clip),
        r && r.css(C.effects.clipToBox(a)),
        a.clip = o),
        r && r.animate(C.effects.clipToBox(a), t.duration, t.easing),
        n.animate(a, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    C.effects.define("bounce", function(t, e) {
        var i, n, s = C(this), o = t.mode, a = "hide" === o, r = "show" === o, l = t.direction || "up", h = t.distance, u = t.times || 5, o = 2 * u + (r || a ? 1 : 0), c = t.duration / o, d = t.easing, p = "up" === l || "down" === l ? "top" : "left", f = "up" === l || "left" === l, m = 0, t = s.queue().length;
        for (C.effects.createPlaceholder(s),
        l = s.css(p),
        h = h || s["top" == p ? "outerHeight" : "outerWidth"]() / 3,
        r && ((n = {
            opacity: 1
        })[p] = l,
        s.css("opacity", 0).css(p, f ? 2 * -h : 2 * h).animate(n, c, d)),
        a && (h /= Math.pow(2, u - 1)),
        (n = {})[p] = l; m < u; m++)
            (i = {})[p] = (f ? "-=" : "+=") + h,
            s.animate(i, c, d).animate(n, c, d),
            h = a ? 2 * h : h / 2;
        a && ((i = {
            opacity: 0
        })[p] = (f ? "-=" : "+=") + h,
        s.animate(i, c, d)),
        s.queue(e),
        C.effects.unshift(s, t, 1 + o)
    }),
    C.effects.define("clip", "hide", function(t, e) {
        var i = {}
          , n = C(this)
          , s = t.direction || "vertical"
          , o = "both" === s
          , a = o || "horizontal" === s
          , o = o || "vertical" === s
          , s = n.cssClip();
        i.clip = {
            top: o ? (s.bottom - s.top) / 2 : s.top,
            right: a ? (s.right - s.left) / 2 : s.right,
            bottom: o ? (s.bottom - s.top) / 2 : s.bottom,
            left: a ? (s.right - s.left) / 2 : s.left
        },
        C.effects.createPlaceholder(n),
        "show" === t.mode && (n.cssClip(i.clip),
        i.clip = s),
        n.animate(i, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    C.effects.define("drop", "hide", function(t, e) {
        var i = C(this)
          , n = "show" === t.mode
          , s = t.direction || "left"
          , o = "up" === s || "down" === s ? "top" : "left"
          , a = "up" === s || "left" === s ? "-=" : "+="
          , r = "+=" == a ? "-=" : "+="
          , l = {
            opacity: 0
        };
        C.effects.createPlaceholder(i),
        s = t.distance || i["top" == o ? "outerHeight" : "outerWidth"](!0) / 2,
        l[o] = a + s,
        n && (i.css(l),
        l[o] = r + s,
        l.opacity = 1),
        i.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    C.effects.define("explode", "hide", function(t, e) {
        function i() {
            m.push(this),
            m.length === l * h && (u.css({
                visibility: "visible"
            }),
            C(m).remove(),
            e())
        }
        for (var n, s, o, a, r, l = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, h = l, u = C(this), c = "show" === t.mode, d = u.show().css("visibility", "hidden").offset(), p = Math.ceil(u.outerWidth() / h), f = Math.ceil(u.outerHeight() / l), m = [], g = 0; g < l; g++)
            for (o = d.top + g * f,
            r = g - (l - 1) / 2,
            n = 0; n < h; n++)
                s = d.left + n * p,
                a = n - (h - 1) / 2,
                u.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -n * p,
                    top: -g * f
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: p,
                    height: f,
                    left: s + (c ? a * p : 0),
                    top: o + (c ? r * f : 0),
                    opacity: c ? 0 : 1
                }).animate({
                    left: s + (c ? 0 : a * p),
                    top: o + (c ? 0 : r * f),
                    opacity: c ? 1 : 0
                }, t.duration || 500, t.easing, i)
    }),
    C.effects.define("fade", "toggle", function(t, e) {
        var i = "show" === t.mode;
        C(this).css("opacity", i ? 0 : 1).animate({
            opacity: i ? 1 : 0
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    C.effects.define("fold", "hide", function(e, t) {
        var i = C(this)
          , n = e.mode
          , s = "show" === n
          , o = "hide" === n
          , a = e.size || 15
          , r = /([0-9]+)%/.exec(a)
          , l = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"]
          , h = e.duration / 2
          , u = C.effects.createPlaceholder(i)
          , c = i.cssClip()
          , d = {
            clip: C.extend({}, c)
        }
          , p = {
            clip: C.extend({}, c)
        }
          , f = [c[l[0]], c[l[1]]]
          , n = i.queue().length;
        r && (a = parseInt(r[1], 10) / 100 * f[o ? 0 : 1]),
        d.clip[l[0]] = a,
        p.clip[l[0]] = a,
        p.clip[l[1]] = 0,
        s && (i.cssClip(p.clip),
        u && u.css(C.effects.clipToBox(p)),
        p.clip = c),
        i.queue(function(t) {
            u && u.animate(C.effects.clipToBox(d), h, e.easing).animate(C.effects.clipToBox(p), h, e.easing),
            t()
        }).animate(d, h, e.easing).animate(p, h, e.easing).queue(t),
        C.effects.unshift(i, n, 4)
    }),
    C.effects.define("highlight", "show", function(t, e) {
        var i = C(this)
          , n = {
            backgroundColor: i.css("backgroundColor")
        };
        "hide" === t.mode && (n.opacity = 0),
        C.effects.saveStyle(i),
        i.css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(n, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    C.effects.define("size", function(n, e) {
        var s, i = C(this), t = ["fontSize"], o = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], a = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], r = n.mode, l = "effect" !== r, h = n.scale || "both", u = n.origin || ["middle", "center"], c = i.css("position"), d = i.position(), p = C.effects.scaledDimensions(i), f = n.from || p, m = n.to || C.effects.scaledDimensions(i, 0);
        C.effects.createPlaceholder(i),
        "show" === r && (r = f,
        f = m,
        m = r),
        s = {
            from: {
                y: f.height / p.height,
                x: f.width / p.width
            },
            to: {
                y: m.height / p.height,
                x: m.width / p.width
            }
        },
        "box" !== h && "both" !== h || (s.from.y !== s.to.y && (f = C.effects.setTransition(i, o, s.from.y, f),
        m = C.effects.setTransition(i, o, s.to.y, m)),
        s.from.x !== s.to.x && (f = C.effects.setTransition(i, a, s.from.x, f),
        m = C.effects.setTransition(i, a, s.to.x, m))),
        "content" !== h && "both" !== h || s.from.y === s.to.y || (f = C.effects.setTransition(i, t, s.from.y, f),
        m = C.effects.setTransition(i, t, s.to.y, m)),
        u && (u = C.effects.getBaseline(u, p),
        f.top = (p.outerHeight - f.outerHeight) * u.y + d.top,
        f.left = (p.outerWidth - f.outerWidth) * u.x + d.left,
        m.top = (p.outerHeight - m.outerHeight) * u.y + d.top,
        m.left = (p.outerWidth - m.outerWidth) * u.x + d.left),
        i.css(f),
        "content" !== h && "both" !== h || (o = o.concat(["marginTop", "marginBottom"]).concat(t),
        a = a.concat(["marginLeft", "marginRight"]),
        i.find("*[width]").each(function() {
            var t = C(this)
              , e = C.effects.scaledDimensions(t)
              , i = {
                height: e.height * s.from.y,
                width: e.width * s.from.x,
                outerHeight: e.outerHeight * s.from.y,
                outerWidth: e.outerWidth * s.from.x
            }
              , e = {
                height: e.height * s.to.y,
                width: e.width * s.to.x,
                outerHeight: e.height * s.to.y,
                outerWidth: e.width * s.to.x
            };
            s.from.y !== s.to.y && (i = C.effects.setTransition(t, o, s.from.y, i),
            e = C.effects.setTransition(t, o, s.to.y, e)),
            s.from.x !== s.to.x && (i = C.effects.setTransition(t, a, s.from.x, i),
            e = C.effects.setTransition(t, a, s.to.x, e)),
            l && C.effects.saveStyle(t),
            t.css(i),
            t.animate(e, n.duration, n.easing, function() {
                l && C.effects.restoreStyle(t)
            })
        })),
        i.animate(m, {
            queue: !1,
            duration: n.duration,
            easing: n.easing,
            complete: function() {
                var t = i.offset();
                0 === m.opacity && i.css("opacity", f.opacity),
                l || (i.css("position", "static" === c ? "relative" : c).offset(t),
                C.effects.saveStyle(i)),
                e()
            }
        })
    }),
    C.effects.define("scale", function(t, e) {
        var i = C(this)
          , n = t.mode
          , n = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) || "effect" !== n ? 0 : 100)
          , n = C.extend(!0, {
            from: C.effects.scaledDimensions(i),
            to: C.effects.scaledDimensions(i, n, t.direction || "both"),
            origin: t.origin || ["middle", "center"]
        }, t);
        t.fade && (n.from.opacity = 1,
        n.to.opacity = 0),
        C.effects.effect.size.call(this, n, e)
    }),
    C.effects.define("puff", "hide", function(t, e) {
        t = C.extend(!0, {}, t, {
            fade: !0,
            percent: parseInt(t.percent, 10) || 150
        });
        C.effects.effect.scale.call(this, t, e)
    }),
    C.effects.define("pulsate", "show", function(t, e) {
        var i = C(this)
          , n = t.mode
          , s = "show" === n
          , n = s || "hide" === n
          , o = 2 * (t.times || 5) + (n ? 1 : 0)
          , a = t.duration / o
          , r = 0
          , l = 1
          , n = i.queue().length;
        for (!s && i.is(":visible") || (i.css("opacity", 0).show(),
        r = 1); l < o; l++)
            i.animate({
                opacity: r
            }, a, t.easing),
            r = 1 - r;
        i.animate({
            opacity: r
        }, a, t.easing),
        i.queue(e),
        C.effects.unshift(i, n, 1 + o)
    }),
    C.effects.define("shake", function(t, e) {
        var i = 1
          , n = C(this)
          , s = t.direction || "left"
          , o = t.distance || 20
          , a = t.times || 3
          , r = 2 * a + 1
          , l = Math.round(t.duration / r)
          , h = "up" === s || "down" === s ? "top" : "left"
          , u = "up" === s || "left" === s
          , c = {}
          , d = {}
          , p = {}
          , s = n.queue().length;
        for (C.effects.createPlaceholder(n),
        c[h] = (u ? "-=" : "+=") + o,
        d[h] = (u ? "+=" : "-=") + 2 * o,
        p[h] = (u ? "-=" : "+=") + 2 * o,
        n.animate(c, l, t.easing); i < a; i++)
            n.animate(d, l, t.easing).animate(p, l, t.easing);
        n.animate(d, l, t.easing).animate(c, l / 2, t.easing).queue(e),
        C.effects.unshift(n, s, 1 + r)
    }),
    C.effects.define("slide", "show", function(t, e) {
        var i, n, s = C(this), o = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"]
        }, a = t.mode, r = t.direction || "left", l = "up" === r || "down" === r ? "top" : "left", h = "up" === r || "left" === r, u = t.distance || s["top" == l ? "outerHeight" : "outerWidth"](!0), c = {};
        C.effects.createPlaceholder(s),
        i = s.cssClip(),
        n = s.position()[l],
        c[l] = (h ? -1 : 1) * u + n,
        c.clip = s.cssClip(),
        c.clip[o[r][1]] = c.clip[o[r][0]],
        "show" === a && (s.cssClip(c.clip),
        s.css(l, c[l]),
        c.clip = i,
        c[l] = n),
        s.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    !1 !== C.uiBackCompat && C.effects.define("transfer", function(t, e) {
        C(this).transfer(t, e)
    }),
    C.ui.focusable = function(t, e) {
        var i, n, s, o, a = t.nodeName.toLowerCase();
        return "area" === a ? (n = (i = t.parentNode).name,
        !(!t.href || !n || "map" !== i.nodeName.toLowerCase()) && (0 < (o = C("img[usemap='#" + n + "']")).length && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(a) ? (s = !t.disabled) && ((o = C(t).closest("fieldset")[0]) && (s = !o.disabled)) : s = "a" === a && t.href || e,
        s && C(t).is(":visible") && function(t) {
            for (var e = t.css("visibility"); "inherit" === e; )
                e = (t = t.parent()).css("visibility");
            return "hidden" !== e
        }(C(t)))
    }
    ,
    C.extend(C.expr[":"], {
        focusable: function(t) {
            return C.ui.focusable(t, null != C.attr(t, "tabindex"))
        }
    }),
    C.ui.focusable,
    C.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : C(this[0].form)
    }
    ,
    C.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = C(this);
            setTimeout(function() {
                var t = e.data("ui-form-reset-instances");
                C.each(t, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            var t;
            this.form = this.element.form(),
            this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t))
        },
        _unbindFormResetHandler: function() {
            var t;
            this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(C.inArray(this, t), 1),
            t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
        }
    },
    "1.7" === C.fn.jquery.substring(0, 3) && (C.each(["Width", "Height"], function(t, i) {
        function n(t, e, i, n) {
            return C.each(s, function() {
                e -= parseFloat(C.css(t, "padding" + this)) || 0,
                i && (e -= parseFloat(C.css(t, "border" + this + "Width")) || 0),
                n && (e -= parseFloat(C.css(t, "margin" + this)) || 0)
            }),
            e
        }
        var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
          , o = i.toLowerCase()
          , a = {
            innerWidth: C.fn.innerWidth,
            innerHeight: C.fn.innerHeight,
            outerWidth: C.fn.outerWidth,
            outerHeight: C.fn.outerHeight
        };
        C.fn["inner" + i] = function(t) {
            return void 0 === t ? a["inner" + i].call(this) : this.each(function() {
                C(this).css(o, n(this, t) + "px")
            })
        }
        ,
        C.fn["outer" + i] = function(t, e) {
            return "number" != typeof t ? a["outer" + i].call(this, t) : this.each(function() {
                C(this).css(o, n(this, t, !0, e) + "px")
            })
        }
    }),
    C.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
    ),
    C.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    },
    C.ui.escapeSelector = (tt = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,
    function(t) {
        return t.replace(tt, "\\$1")
    }
    ),
    C.fn.labels = function() {
        var t, e, i;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"),
        (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()),
        t = "label[for='" + C.ui.escapeSelector(t) + "']",
        e = e.add(i.find(t).addBack(t))),
        this.pushStack(e))
    }
    ,
    C.fn.scrollParent = function(t) {
        var e = this.css("position")
          , i = "absolute" === e
          , n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , t = this.parents().filter(function() {
            var t = C(this);
            return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }).eq(0);
        return "fixed" !== e && t.length ? t : C(this[0].ownerDocument || document)
    }
    ,
    C.extend(C.expr[":"], {
        tabbable: function(t) {
            var e = C.attr(t, "tabindex")
              , i = null != e;
            return (!i || 0 <= e) && C.ui.focusable(t, i)
        }
    }),
    C.fn.extend({
        uniqueId: (Z = 0,
        function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++Z)
            })
        }
        ),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && C(this).removeAttr("id")
            })
        }
    }),
    C.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = C(),
            this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
            this.element.attr("role", "tablist"),
            t.collapsible || !1 !== t.active && null != t.active || (t.active = 0),
            this._processPanels(),
            t.active < 0 && (t.active += this.headers.length),
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : C()
            }
        },
        _createIcons: function() {
            var t, e = this.options.icons;
            e && (t = C("<span>"),
            this._addClass(t, "ui-accordion-header-icon", "ui-icon " + e.header),
            t.prependTo(this.headers),
            t = this.active.children(".ui-accordion-header-icon"),
            this._removeClass(t, e.header)._addClass(t, null, e.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"),
            this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"),
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),
            this._destroyIcons(),
            t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),
            "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event),
            this._setupEvents(e)),
            this._super(t, e),
            "collapsible" !== t || e || !1 !== this.options.active || this._activate(0),
            void ("icons" === t && (this._destroyIcons(),
            e && this._createIcons())))
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t),
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
        },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var e = C.ui.keyCode
                  , i = this.headers.length
                  , n = this.headers.index(t.target)
                  , s = !1;
                switch (t.keyCode) {
                case e.RIGHT:
                case e.DOWN:
                    s = this.headers[(n + 1) % i];
                    break;
                case e.LEFT:
                case e.UP:
                    s = this.headers[(n - 1 + i) % i];
                    break;
                case e.SPACE:
                case e.ENTER:
                    this._eventHandler(t);
                    break;
                case e.HOME:
                    s = this.headers[0];
                    break;
                case e.END:
                    s = this.headers[i - 1]
                }
                s && (C(t.target).attr("tabIndex", -1),
                C(s).attr("tabIndex", 0),
                C(s).trigger("focus"),
                t.preventDefault())
            }
        },
        _panelKeyDown: function(t) {
            t.keyCode === C.ui.keyCode.UP && t.ctrlKey && C(t.currentTarget).prev().trigger("focus")
        },
        refresh: function() {
            var t = this.options;
            this._processPanels(),
            !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1,
            this.active = C()) : !1 === t.active ? this._activate(0) : this.active.length && !C.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1,
            this.active = C()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active),
            this._destroyIcons(),
            this._refresh()
        },
        _processPanels: function() {
            var t = this.headers
              , e = this.panels;
            this.headers = this.element.find(this.options.header),
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"),
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"),
            e && (this._off(t.not(this.headers)),
            this._off(e.not(this.panels)))
        },
        _refresh: function() {
            var i, t = this.options, e = t.heightStyle, n = this.element.parent();
            this.active = this._findActive(t.active),
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"),
            this._addClass(this.active.next(), "ui-accordion-content-active"),
            this.active.next().show(),
            this.headers.attr("role", "tab").each(function() {
                var t = C(this)
                  , e = t.uniqueId().attr("id")
                  , i = t.next()
                  , n = i.uniqueId().attr("id");
                t.attr("aria-controls", n),
                i.attr("aria-labelledby", e)
            }).next().attr("role", "tabpanel"),
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(),
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(t.event),
            "fill" === e ? (i = n.height(),
            this.element.siblings(":visible").each(function() {
                var t = C(this)
                  , e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }),
            this.headers.each(function() {
                i -= C(this).outerHeight(!0)
            }),
            this.headers.next().each(function() {
                C(this).height(Math.max(0, i - C(this).innerHeight() + C(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0,
            this.headers.next().each(function() {
                var t = C(this).is(":visible");
                t || C(this).show(),
                i = Math.max(i, C(this).css("height", "").height()),
                t || C(this).hide()
            }).height(i))
        },
        _activate: function(t) {
            t = this._findActive(t)[0];
            t !== this.active[0] && (t = t || this.active[0],
            this._eventHandler({
                target: t,
                currentTarget: t,
                preventDefault: C.noop
            }))
        },
        _findActive: function(t) {
            return "number" == typeof t ? this.headers.eq(t) : C()
        },
        _setupEvents: function(t) {
            var i = {
                keydown: "_keydown"
            };
            t && C.each(t.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }),
            this._hoverable(this.headers),
            this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var e = this.options
              , i = this.active
              , n = C(t.currentTarget)
              , s = n[0] === i[0]
              , o = s && e.collapsible
              , a = o ? C() : n.next()
              , r = i.next()
              , a = {
                oldHeader: i,
                oldPanel: r,
                newHeader: o ? C() : n,
                newPanel: a
            };
            t.preventDefault(),
            s && !e.collapsible || !1 === this._trigger("beforeActivate", t, a) || (e.active = !o && this.headers.index(n),
            this.active = s ? C() : n,
            this._toggle(a),
            this._removeClass(i, "ui-accordion-header-active", "ui-state-active"),
            e.icons && (i = i.children(".ui-accordion-header-icon"),
            this._removeClass(i, null, e.icons.activeHeader)._addClass(i, null, e.icons.header)),
            s || (this._removeClass(n, "ui-accordion-header-collapsed")._addClass(n, "ui-accordion-header-active", "ui-state-active"),
            e.icons && (s = n.children(".ui-accordion-header-icon"),
            this._removeClass(s, null, e.icons.header)._addClass(s, null, e.icons.activeHeader)),
            this._addClass(n.next(), "ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var e = t.newPanel
              , i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0),
            this.prevShow = e,
            this.prevHide = i,
            this.options.animate ? this._animate(e, i, t) : (i.hide(),
            e.show(),
            this._toggleComplete(t)),
            i.attr({
                "aria-hidden": "true"
            }),
            i.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }),
            e.length && i.length ? i.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : e.length && this.headers.filter(function() {
                return 0 === parseInt(C(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1),
            e.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(t, i, e) {
            var n, s, o, a = this, r = 0, l = t.css("box-sizing"), h = t.length && (!i.length || t.index() < i.index()), u = this.options.animate || {}, c = h && u.down || u, h = function() {
                a._toggleComplete(e)
            };
            return "number" == typeof c && (o = c),
            "string" == typeof c && (s = c),
            s = s || c.easing || u.easing,
            o = o || c.duration || u.duration,
            i.length ? t.length ? (n = t.show().outerHeight(),
            i.animate(this.hideProps, {
                duration: o,
                easing: s,
                step: function(t, e) {
                    e.now = Math.round(t)
                }
            }),
            void t.hide().animate(this.showProps, {
                duration: o,
                easing: s,
                complete: h,
                step: function(t, e) {
                    e.now = Math.round(t),
                    "height" !== e.prop ? "content-box" === l && (r += e.now) : "content" !== a.options.heightStyle && (e.now = Math.round(n - i.outerHeight() - r),
                    r = 0)
                }
            })) : i.animate(this.hideProps, o, s, h) : t.animate(this.showProps, o, s, h)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel
              , i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"),
            this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"),
            e.length && (e.parent()[0].className = e.parent()[0].className),
            this._trigger("activate", null, t)
        }
    }),
    C.ui.safeActiveElement = function(e) {
        var i;
        try {
            i = e.activeElement
        } catch (t) {
            i = e.body
        }
        return (i = i || e.body).nodeName || (i = e.body),
        i
    }
    ,
    C.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }),
            this._addClass("ui-menu", "ui-widget ui-widget-content"),
            this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item": function(t) {
                    var e = C(t.target)
                      , i = C(C.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t),
                    t.isPropagationStopped() || (this.mouseHandled = !0),
                    e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    var e, i;
                    this.previousFilter || (e = C(t.target).closest(".ui-menu-item"),
                    i = C(t.currentTarget),
                    e[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"),
                    this.focus(t, i)))
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(t) {
                    this._delay(function() {
                        C.contains(this.element[0], C.ui.safeActiveElement(this.document[0])) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),
            t.children().each(function() {
                var t = C(this);
                t.data("ui-menu-submenu-caret") && t.remove()
            })
        },
        _keydown: function(t) {
            var e, i, n, s = !0;
            switch (t.keyCode) {
            case C.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case C.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case C.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case C.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case C.ui.keyCode.UP:
                this.previous(t);
                break;
            case C.ui.keyCode.DOWN:
                this.next(t);
                break;
            case C.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case C.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case C.ui.keyCode.ENTER:
            case C.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case C.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                s = !1,
                e = this.previousFilter || "",
                n = !1,
                i = 96 <= t.keyCode && t.keyCode <= 105 ? "" + (t.keyCode - 96) : String.fromCharCode(t.keyCode),
                clearTimeout(this.filterTimer),
                i === e ? n = !0 : i = e + i,
                e = this._filterMenuItems(i),
                (e = n && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length || (i = String.fromCharCode(t.keyCode),
                e = this._filterMenuItems(i)),
                e.length ? (this.focus(t, e),
                this.previousFilter = i,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter
            }
            s && t.preventDefault()
        },
        _activate: function(t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var t, e, n = this, s = this.options.icons.submenu, i = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
            e = i.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = C(this)
                  , e = t.prev()
                  , i = C("<span>").data("ui-menu-submenu-caret", !0);
                n._addClass(i, "ui-menu-icon", "ui-icon " + s),
                e.attr("aria-haspopup", "true").prepend(i),
                t.attr("aria-labelledby", e.attr("id"))
            }),
            this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"),
            (t = i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var t = C(this);
                n._isDivider(t) && n._addClass(t, "ui-menu-divider", "ui-widget-content")
            }),
            i = (e = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            this._addClass(e, "ui-menu-item")._addClass(i, "ui-menu-item-wrapper"),
            t.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !C.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            var i;
            "icons" === t && (i = this.element.find(".ui-menu-icon"),
            this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)),
            this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", t + ""),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function(t, e) {
            var i;
            this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            this.active = e.first(),
            i = this.active.children(".ui-menu-item-wrapper"),
            this._addClass(i, null, "ui-state-active"),
            this.options.role && this.element.attr("aria-activedescendant", i.attr("id")),
            i = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),
            this._addClass(i, null, "ui-state-active"),
            t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay),
            (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i),
            this.activeMenu = e.parent(),
            this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(t) {
            var e, i, n;
            this._hasScroll() && (i = parseFloat(C.css(this.activeMenu[0], "borderTopWidth")) || 0,
            n = parseFloat(C.css(this.activeMenu[0], "paddingTop")) || 0,
            e = t.offset().top - this.activeMenu.offset().top - i - n,
            i = this.activeMenu.scrollTop(),
            n = this.activeMenu.height(),
            t = t.outerHeight(),
            e < 0 ? this.activeMenu.scrollTop(i + e) : n < e + t && this.activeMenu.scrollTop(i + e - n + t))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer),
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", t, {
                item: this.active
            }),
            this.active = null)
        },
        _startOpening: function(t) {
            clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(),
                this._open(t)
            }, this.delay))
        },
        _open: function(t) {
            var e = C.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var t = i ? this.element : C(e && e.target).closest(this.element.find(".ui-menu"));
                t.length || (t = this.element),
                this._close(t),
                this.blur(e),
                this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"),
                this.activeMenu = t
            }, this.delay)
        },
        _close: function(t) {
            (t = t || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(t) {
            return !C(t.target).closest(".ui-menu").length
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(),
            this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()),
            this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
            n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()),
            this.focus(i, n)
        },
        nextPage: function(t) {
            var e, i, n;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top,
            n = this.element.height(),
            this.active.nextAll(".ui-menu-item").each(function() {
                return (e = C(this)).offset().top - i - n < 0
            }),
            this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t)
        },
        previousPage: function(t) {
            var e, i, n;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top,
            n = this.element.height(),
            this.active.prevAll(".ui-menu-item").each(function() {
                return 0 < (e = C(this)).offset().top - i + n
            }),
            this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || C(t.target).closest(".ui-menu-item");
            var e = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0),
            this._trigger("select", t, e)
        },
        _filterMenuItems: function(t) {
            var t = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
              , e = RegExp("^" + t, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return e.test(C.trim(C(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    }),
    C.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var i, n, s, t = this.element[0].nodeName.toLowerCase(), e = "textarea" === t, t = "input" === t;
            this.isMultiLine = e || !t && this._isContentEditable(this.element),
            this.valueMethod = this.element[e || t ? "val" : "text"],
            this.isNewMenu = !0,
            this._addClass("ui-autocomplete-input"),
            this.element.attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(t) {
                    if (this.element.prop("readOnly"))
                        n = s = i = !0;
                    else {
                        n = s = i = !1;
                        var e = C.ui.keyCode;
                        switch (t.keyCode) {
                        case e.PAGE_UP:
                            i = !0,
                            this._move("previousPage", t);
                            break;
                        case e.PAGE_DOWN:
                            i = !0,
                            this._move("nextPage", t);
                            break;
                        case e.UP:
                            i = !0,
                            this._keyEvent("previous", t);
                            break;
                        case e.DOWN:
                            i = !0,
                            this._keyEvent("next", t);
                            break;
                        case e.ENTER:
                            this.menu.active && (i = !0,
                            t.preventDefault(),
                            this.menu.select(t));
                            break;
                        case e.TAB:
                            this.menu.active && this.menu.select(t);
                            break;
                        case e.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                            this.close(t),
                            t.preventDefault());
                            break;
                        default:
                            n = !0,
                            this._searchTimeout(t)
                        }
                    }
                },
                keypress: function(t) {
                    if (i)
                        return i = !1,
                        void (this.isMultiLine && !this.menu.element.is(":visible") || t.preventDefault());
                    if (!n) {
                        var e = C.ui.keyCode;
                        switch (t.keyCode) {
                        case e.PAGE_UP:
                            this._move("previousPage", t);
                            break;
                        case e.PAGE_DOWN:
                            this._move("nextPage", t);
                            break;
                        case e.UP:
                            this._keyEvent("previous", t);
                            break;
                        case e.DOWN:
                            this._keyEvent("next", t)
                        }
                    }
                },
                input: function(t) {
                    return s ? (s = !1,
                    void t.preventDefault()) : void this._searchTimeout(t)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching),
                    this.close(t),
                    void this._change(t))
                }
            }),
            this._initSource(),
            this.menu = C("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"),
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
            this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur,
                        this.element[0] !== C.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function(t, e) {
                    var i;
                    return this.isNewMenu && (this.isNewMenu = !1,
                    t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(),
                    void this.document.one("mousemove", function() {
                        C(t.target).trigger(t.originalEvent)
                    })) : (i = e.item.data("ui-autocomplete-item"),
                    !1 !== this._trigger("focus", t, {
                        item: i
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(i.value),
                    void ((i = e.item.attr("aria-label") || i.value) && C.trim(i).length && (this.liveRegion.children().hide(),
                    C("<div>").text(i).appendTo(this.liveRegion))))
                },
                menuselect: function(t, e) {
                    var i = e.item.data("ui-autocomplete-item")
                      , n = this.previous;
                    this.element[0] !== C.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = n,
                    this._delay(function() {
                        this.previous = n,
                        this.selectedItem = i
                    })),
                    !1 !== this._trigger("select", t, {
                        item: i
                    }) && this._value(i.value),
                    this.term = this._value(),
                    this.close(t),
                    this.selectedItem = i
                }
            }),
            this.liveRegion = C("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(t) {
            var e = this.menu.element[0];
            return t.target === this.element[0] || t.target === e || C.contains(e, t.target)
        },
        _closeOnClickOutside: function(t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return (t = t && (t.jquery || t.nodeType ? C(t) : this.document.find(t).eq(0))) && t[0] || (t = this.element.closest(".ui-front, dialog")),
            t.length || (t = this.document[0].body),
            t
        },
        _initSource: function() {
            var i, n, s = this;
            C.isArray(this.options.source) ? (i = this.options.source,
            this.source = function(t, e) {
                e(C.ui.autocomplete.filter(i, t.term))
            }
            ) : "string" == typeof this.options.source ? (n = this.options.source,
            this.source = function(t, e) {
                s.xhr && s.xhr.abort(),
                s.xhr = C.ajax({
                    url: n,
                    data: t,
                    dataType: "json",
                    success: function(t) {
                        e(t)
                    },
                    error: function() {
                        e([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(n) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                var t = this.term === this._value()
                  , e = this.menu.element.is(":visible")
                  , i = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                t && (!t || e || i) || (this.selectedItem = null,
                this.search(null, n))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(),
            this.term = this._value(),
            t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++,
            this._addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var e = ++this.requestIndex;
            return C.proxy(function(t) {
                e === this.requestIndex && this.__response(t),
                this.pending--,
                this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(t) {
            t = t && this._normalize(t),
            this._trigger("response", null, {
                content: t
            }),
            !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t),
            this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0,
            this._close(t)
        },
        _close: function(t) {
            this._off(this.document, "mousedown"),
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : C.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : C.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function(t) {
            var e = this.menu.element.empty();
            this._renderMenu(e, t),
            this.isNewMenu = !0,
            this.menu.refresh(),
            e.show(),
            this._resizeMenu(),
            e.position(C.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next(),
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(i, t) {
            var n = this;
            C.each(t, function(t, e) {
                n._renderItemData(i, e)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(t, e) {
            return C("<li>").append(C("<div>").text(e.label)).appendTo(t)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term),
            void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e),
            e.preventDefault())
        },
        _isContentEditable: function(t) {
            if (!t.length)
                return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }),
    C.extend(C.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, e) {
            var i = RegExp(C.ui.autocomplete.escapeRegex(e), "i");
            return C.grep(t, function(t) {
                return i.test(t.label || t.value || t)
            })
        }
    }),
    C.widget("ui.autocomplete", C.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var e;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults,
            this.liveRegion.children().hide(),
            C("<div>").text(e).appendTo(this.liveRegion))
        }
    }),
    C.ui.autocomplete;
    var et, it, nt = /ui-corner-([a-z]){2,6}/g;
    C.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"),
            this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy"),
            this.childWidgets.removeData("ui-controlgroup-data"),
            this.element.removeAttr("role"),
            this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var o = this
              , a = [];
            C.each(this.options.items, function(n, t) {
                var e, s;
                return t ? "controlgroupLabel" === n ? ((e = o.element.find(t)).each(function() {
                    var t = C(this);
                    t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }),
                o._addClass(e, null, "ui-widget ui-widget-content ui-state-default"),
                void (a = a.concat(e.get()))) : void (C.fn[n] && (s = o["_" + n + "Options"] ? o["_" + n + "Options"]("middle") : {
                    classes: {}
                },
                o.element.find(t).each(function() {
                    var t = C(this)
                      , e = t[n]("instance")
                      , i = C.widget.extend({}, s);
                    "button" === n && t.parent(".ui-spinner").length || ((e = e || t[n]()[n]("instance")) && (i.classes = o._resolveClassesValues(i.classes, e)),
                    t[n](i),
                    i = t[n]("widget"),
                    C.data(i[0], "ui-controlgroup-data", e || t[n]("instance")),
                    a.push(i[0]))
                }))) : void 0
            }),
            this.childWidgets = C(C.unique(a)),
            this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var t = C(this).data("ui-controlgroup-data");
                t && t[e] && t[e]()
            })
        },
        _updateCornerClass: function(t, e) {
            e = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),
            this._addClass(t, null, e)
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction
              , n = {
                classes: {}
            };
            return n.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t],
            n
        },
        _spinnerOptions: function(t) {
            t = this._buildSimpleOptions(t, "ui-spinner");
            return t.classes["ui-spinner-up"] = "",
            t.classes["ui-spinner-down"] = "",
            t
        },
        _buttonOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(t) {
            var e = "vertical" === this.options.direction;
            return {
                width: e && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[t]
            }
        },
        _resolveClassesValues: function(i, n) {
            var s = {};
            return C.each(i, function(t) {
                var e = n.options.classes[t] || ""
                  , e = C.trim(e.replace(nt, ""));
                s[t] = (e + " " + i[t]).replace(/\s+/g, " ")
            }),
            s
        },
        _setOption: function(t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction),
            this._super(t, e),
            "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
        },
        refresh: function() {
            var s, o = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction),
            "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"),
            this._initWidgets(),
            s = this.childWidgets,
            this.options.onlyVisible && (s = s.filter(":visible")),
            s.length && (C.each(["first", "last"], function(t, e) {
                var i, n = s[e]().data("ui-controlgroup-data");
                n && o["_" + n.widgetName + "Options"] ? ((i = o["_" + n.widgetName + "Options"](1 === s.length ? "only" : e)).classes = o._resolveClassesValues(i.classes, n),
                n.element[n.widgetName](i)) : o._updateCornerClass(s[e](), e)
            }),
            this._callChildMethod("refresh"))
        }
    }),
    C.widget("ui.checkboxradio", [C.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var t, e = this, i = this._super() || {};
            return this._readType(),
            t = this.element.labels(),
            this.label = C(t[t.length - 1]),
            this.label.length || C.error("No label found for checkboxradio widget"),
            this.originalLabel = "",
            this.label.contents().not(this.element[0]).each(function() {
                e.originalLabel += 3 === this.nodeType ? C(this).text() : this.outerHTML
            }),
            this.originalLabel && (i.label = this.originalLabel),
            null != (t = this.element[0].disabled) && (i.disabled = t),
            i
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(),
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled),
            this._setOption("disabled", this.options.disabled),
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"),
            "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"),
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel),
            this._enhance(),
            t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"),
            this.icon && this._addClass(this.icon, null, "ui-state-hover")),
            this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var t = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type,
            "input" === t && /radio|checkbox/.test(this.type) || C.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var t = this.element[0].name
              , e = "input[name='" + C.ui.escapeSelector(t) + "']";
            return t ? (this.form.length ? C(this.form[0].elements).filter(e) : C(e).filter(function() {
                return 0 === C(this).form().length
            })).not(this.element) : C([])
        },
        _toggleClasses: function() {
            var t = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t),
            "radio" === this.type && this._getRadioGroup().each(function() {
                var t = C(this).checkboxradio("instance");
                t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() {
            this._unbindFormResetHandler(),
            this.icon && (this.icon.remove(),
            this.iconSpace.remove())
        },
        _setOption: function(t, e) {
            return "label" !== t || e ? (this._super(t, e),
            "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e),
            void (this.element[0].disabled = e)) : void this.refresh()) : void 0
        },
        _updateIcon: function(t) {
            var e = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = C("<span>"),
            this.iconSpace = C("<span> </span>"),
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
            "checkbox" === this.type ? (e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank",
            this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : e += "ui-icon-blank",
            this._addClass(this.icon, "ui-checkboxradio-icon", e),
            t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(),
            this.iconSpace.remove(),
            delete this.icon)
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])),
            this.iconSpace && (t = t.not(this.iconSpace[0])),
            t.remove(),
            this.label.append(this.options.label)
        },
        refresh: function() {
            var t = this.element[0].checked
              , e = this.element[0].disabled;
            this._updateIcon(t),
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
            null !== this.options.label && this._updateLabel(),
            e !== this.options.disabled && this._setOptions({
                disabled: e
            })
        }
    }]),
    C.ui.checkboxradio,
    C.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"),
            null != (t = this.element[0].disabled) && (e.disabled = t),
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(),
            this.originalLabel && (e.label = this.originalLabel),
            e
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0),
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1),
            this.hasTitle = !!this.element.attr("title"),
            this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)),
            this._addClass("ui-button", "ui-widget"),
            this._setOption("disabled", this.options.disabled),
            this._enhance(),
            this.element.is("a") && this._on({
                keyup: function(t) {
                    t.keyCode === C.ui.keyCode.SPACE && (t.preventDefault(),
                    this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"),
            this.options.icon && (this._updateIcon("icon", this.options.icon),
            this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"),
            this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(t, e) {
            var i = "iconPosition" !== t
              , n = i ? this.options.iconPosition : e
              , t = "top" === n || "bottom" === n;
            this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = C("<span>"),
            this._addClass(this.icon, "ui-button-icon", "ui-icon"),
            this.options.showLabel || this._addClass("ui-button-icon-only")),
            i && this._addClass(this.icon, null, e),
            this._attachIcon(n),
            t ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = C("<span> </span>"),
            this._addClass(this.iconSpace, "ui-button-icon-space")),
            this._removeClass(this.icon, null, "ui-wiget-icon-block"),
            this._attachIconSpace(n))
        },
        _destroy: function() {
            this.element.removeAttr("role"),
            this.icon && this.icon.remove(),
            this.iconSpace && this.iconSpace.remove(),
            this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(t) {
            var e = (void 0 === t.showLabel ? this.options : t).showLabel
              , i = (void 0 === t.icon ? this.options : t).icon;
            e || i || (t.showLabel = !0),
            this._super(t)
        },
        _setOption: function(t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(),
            this.iconSpace && this.iconSpace.remove())),
            "iconPosition" === t && this._updateIcon(t, e),
            "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e),
            this._updateTooltip()),
            "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e),
            this.icon && (this._attachIcon(this.options.iconPosition),
            this._attachIconSpace(this.options.iconPosition)))),
            this._super(t, e),
            "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e),
            (this.element[0].disabled = e) && this.element.blur())
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({
                disabled: t
            }),
            this._updateTooltip()
        }
    }),
    !1 !== C.uiBackCompat && (C.widget("ui.button", C.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text),
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel),
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary,
            this.options.iconPosition = "end"),
            this._super()
        },
        _setOption: function(t, e) {
            return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e),
            "icon" === t && (this.options.icons.primary = e),
            "icons" === t && (e.primary ? (this._super("icon", e.primary),
            this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary),
            this._super("iconPosition", "end"))),
            void this._superApply(arguments))
        }
    }),
    C.fn.button = (et = C.fn.button,
    function() {
        return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? et.apply(this, arguments) : (C.ui.checkboxradio || C.error("Checkboxradio widget missing"),
        0 === arguments.length ? this.checkboxradio({
            icon: !1
        }) : this.checkboxradio.apply(this, arguments))
    }
    ),
    C.fn.buttonset = function() {
        return C.ui.controlgroup || C.error("Controlgroup widget missing"),
        "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }),
        this.controlgroup.apply(this, arguments))
    }
    ),
    C.ui.button,
    C.extend(C.ui, {
        datepicker: {
            version: "1.12.1"
        }
    }),
    C.extend(t.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return l(this._defaults, t || {}),
            this
        },
        _attachDatepicker: function(t, e) {
            var i, n = t.nodeName.toLowerCase(), s = "div" === n || "span" === n;
            t.id || (this.uuid += 1,
            t.id = "dp" + this.uuid),
            (i = this._newInst(C(t), s)).settings = C.extend({}, e || {}),
            "input" === n ? this._connectDatepicker(t, i) : s && this._inlineDatepicker(t, i)
        },
        _newInst: function(t, e) {
            return {
                id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: e,
                dpDiv: e ? i(C("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, e) {
            var i = C(t);
            e.append = C([]),
            e.trigger = C([]),
            i.hasClass(this.markerClassName) || (this._attachments(i, e),
            i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp),
            this._autoSize(e),
            C.data(t, "datepicker", e),
            e.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, e) {
            var i, n = this._get(e, "appendText"), s = this._get(e, "isRTL");
            e.append && e.append.remove(),
            n && (e.append = C("<span class='" + this._appendClass + "'>" + n + "</span>"),
            t[s ? "before" : "after"](e.append)),
            t.off("focus", this._showDatepicker),
            e.trigger && e.trigger.remove(),
            "focus" !== (i = this._get(e, "showOn")) && "both" !== i || t.on("focus", this._showDatepicker),
            "button" !== i && "both" !== i || (n = this._get(e, "buttonText"),
            i = this._get(e, "buttonImage"),
            e.trigger = C(this._get(e, "buttonImageOnly") ? C("<img/>").addClass(this._triggerClass).attr({
                src: i,
                alt: n,
                title: n
            }) : C("<button type='button'></button>").addClass(this._triggerClass).html(i ? C("<img/>").attr({
                src: i,
                alt: n,
                title: n
            }) : n)),
            t[s ? "before" : "after"](e.trigger),
            e.trigger.on("click", function() {
                return C.datepicker._datepickerShowing && C.datepicker._lastInput === t[0] ? C.datepicker._hideDatepicker() : (C.datepicker._datepickerShowing && C.datepicker._lastInput !== t[0] && C.datepicker._hideDatepicker(),
                C.datepicker._showDatepicker(t[0])),
                !1
            }))
        },
        _autoSize: function(t) {
            var e, i, n, s, o, a;
            this._get(t, "autoSize") && !t.inline && (o = new Date(2009,11,20),
            (a = this._get(t, "dateFormat")).match(/[DM]/) && (e = function(t) {
                for (s = n = i = 0; t.length > s; s++)
                    t[s].length > i && (i = t[s].length,
                    n = s);
                return n
            }
            ,
            o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))),
            o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())),
            t.input.attr("size", this._formatDate(t, o).length))
        },
        _inlineDatepicker: function(t, e) {
            var i = C(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv),
            C.data(t, "datepicker", e),
            this._setDate(e, this._getDefaultDate(e), !0),
            this._updateDatepicker(e),
            this._updateAlternate(e),
            e.settings.disabled && this._disableDatepicker(t),
            e.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, e, i, n, s) {
            var o, a = this._dialogInst;
            return a || (this.uuid += 1,
            o = "dp" + this.uuid,
            this._dialogInput = C("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.on("keydown", this._doKeyDown),
            C("body").append(this._dialogInput),
            (a = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {},
            C.data(this._dialogInput[0], "datepicker", a)),
            l(a.settings, n || {}),
            e = e && e.constructor === Date ? this._formatDate(a, e) : e,
            this._dialogInput.val(e),
            this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null,
            this._pos || (o = document.documentElement.clientWidth,
            n = document.documentElement.clientHeight,
            e = document.documentElement.scrollLeft || document.body.scrollLeft,
            s = document.documentElement.scrollTop || document.body.scrollTop,
            this._pos = [o / 2 - 100 + e, n / 2 - 150 + s]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            a.settings.onSelect = i,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            C.blockUI && C.blockUI(this.dpDiv),
            C.data(this._dialogInput[0], "datepicker", a),
            this
        },
        _destroyDatepicker: function(t) {
            var e, i = C(t), n = C.data(t, "datepicker");
            i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(),
            C.removeData(t, "datepicker"),
            "input" === e ? (n.append.remove(),
            n.trigger.remove(),
            i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== e && "span" !== e || i.removeClass(this.markerClassName).empty(),
            it === n && (it = null))
        },
        _enableDatepicker: function(e) {
            var t, i = C(e), n = C.data(e, "datepicker");
            i.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !1,
            n.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== t && "span" !== t || ((i = i.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"),
            i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
            this._disabledInputs = C.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var t, i = C(e), n = C.data(e, "datepicker");
            i.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !0,
            n.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== t && "span" !== t || ((i = i.children("." + this._inlineClass)).children().addClass("ui-state-disabled"),
            i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
            this._disabledInputs = C.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }),
            this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t)
                return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t)
                    return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return C.data(t, "datepicker")
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, e, i) {
            var n, s, o, a, r = this._getInst(t);
            return 2 === arguments.length && "string" == typeof e ? "defaults" === e ? C.extend({}, C.datepicker._defaults) : r ? "all" === e ? C.extend({}, r.settings) : this._get(r, e) : null : (n = e || {},
            "string" == typeof e && ((n = {})[e] = i),
            void (r && (this._curInst === r && this._hideDatepicker(),
            s = this._getDateDatepicker(t, !0),
            o = this._getMinMaxDate(r, "min"),
            a = this._getMinMaxDate(r, "max"),
            l(r.settings, n),
            null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (r.settings.minDate = this._formatDate(r, o)),
            null !== a && void 0 !== n.dateFormat && void 0 === n.maxDate && (r.settings.maxDate = this._formatDate(r, a)),
            "disabled"in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)),
            this._attachments(C(t), r),
            this._autoSize(r),
            this._setDate(r, s),
            this._updateAlternate(r),
            this._updateDatepicker(r))))
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            t = this._getInst(t);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(t, e) {
            t = this._getInst(t);
            t && (this._setDate(t, e),
            this._updateDatepicker(t),
            this._updateAlternate(t))
        },
        _getDateDatepicker: function(t, e) {
            t = this._getInst(t);
            return t && !t.inline && this._setDateFromField(t, e),
            t ? this._getDate(t) : null
        },
        _doKeyDown: function(t) {
            var e, i, n = C.datepicker._getInst(t.target), s = !0, o = n.dpDiv.is(".ui-datepicker-rtl");
            if (n._keyEvent = !0,
            C.datepicker._datepickerShowing)
                switch (t.keyCode) {
                case 9:
                    C.datepicker._hideDatepicker(),
                    s = !1;
                    break;
                case 13:
                    return (i = C("td." + C.datepicker._dayOverClass + ":not(." + C.datepicker._currentClass + ")", n.dpDiv))[0] && C.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, i[0]),
                    (e = C.datepicker._get(n, "onSelect")) ? (i = C.datepicker._formatDate(n),
                    e.apply(n.input ? n.input[0] : null, [i, n])) : C.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    C.datepicker._hideDatepicker();
                    break;
                case 33:
                    C.datepicker._adjustDate(t.target, t.ctrlKey ? -C.datepicker._get(n, "stepBigMonths") : -C.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 34:
                    C.datepicker._adjustDate(t.target, t.ctrlKey ? +C.datepicker._get(n, "stepBigMonths") : +C.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && C.datepicker._clearDate(t.target),
                    s = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && C.datepicker._gotoToday(t.target),
                    s = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && C.datepicker._adjustDate(t.target, o ? 1 : -1, "D"),
                    s = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && C.datepicker._adjustDate(t.target, t.ctrlKey ? -C.datepicker._get(n, "stepBigMonths") : -C.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && C.datepicker._adjustDate(t.target, -7, "D"),
                    s = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && C.datepicker._adjustDate(t.target, o ? -1 : 1, "D"),
                    s = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && C.datepicker._adjustDate(t.target, t.ctrlKey ? +C.datepicker._get(n, "stepBigMonths") : +C.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && C.datepicker._adjustDate(t.target, 7, "D"),
                    s = t.ctrlKey || t.metaKey;
                    break;
                default:
                    s = !1
                }
            else
                36 === t.keyCode && t.ctrlKey ? C.datepicker._showDatepicker(this) : s = !1;
            s && (t.preventDefault(),
            t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var e, i = C.datepicker._getInst(t.target);
            return C.datepicker._get(i, "constrainInput") ? (e = C.datepicker._possibleChars(C.datepicker._get(i, "dateFormat")),
            i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode),
            t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i)) : void 0
        },
        _doKeyUp: function(t) {
            var e = C.datepicker._getInst(t.target);
            if (e.input.val() !== e.lastVal)
                try {
                    C.datepicker.parseDate(C.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, C.datepicker._getFormatConfig(e)) && (C.datepicker._setDateFromField(e),
                    C.datepicker._updateAlternate(e),
                    C.datepicker._updateDatepicker(e))
                } catch (t) {}
            return !0
        },
        _showDatepicker: function(t) {
            var e, i, n, s;
            "input" !== (t = t.target || t).nodeName.toLowerCase() && (t = C("input", t.parentNode)[0]),
            C.datepicker._isDisabledDatepicker(t) || C.datepicker._lastInput === t || (s = C.datepicker._getInst(t),
            C.datepicker._curInst && C.datepicker._curInst !== s && (C.datepicker._curInst.dpDiv.stop(!0, !0),
            s && C.datepicker._datepickerShowing && C.datepicker._hideDatepicker(C.datepicker._curInst.input[0])),
            !1 !== (i = (n = C.datepicker._get(s, "beforeShow")) ? n.apply(t, [t, s]) : {}) && (l(s.settings, i),
            s.lastVal = null,
            C.datepicker._lastInput = t,
            C.datepicker._setDateFromField(s),
            C.datepicker._inDialog && (t.value = ""),
            C.datepicker._pos || (C.datepicker._pos = C.datepicker._findPos(t),
            C.datepicker._pos[1] += t.offsetHeight),
            e = !1,
            C(t).parents().each(function() {
                return !(e |= "fixed" === C(this).css("position"))
            }),
            n = {
                left: C.datepicker._pos[0],
                top: C.datepicker._pos[1]
            },
            C.datepicker._pos = null,
            s.dpDiv.empty(),
            s.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }),
            C.datepicker._updateDatepicker(s),
            n = C.datepicker._checkOffset(s, n, e),
            s.dpDiv.css({
                position: C.datepicker._inDialog && C.blockUI ? "static" : e ? "fixed" : "absolute",
                display: "none",
                left: n.left + "px",
                top: n.top + "px"
            }),
            s.inline || (i = C.datepicker._get(s, "showAnim"),
            n = C.datepicker._get(s, "duration"),
            s.dpDiv.css("z-index", function(t) {
                for (var e, i; t.length && t[0] !== document; ) {
                    if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10),
                    !isNaN(i) && 0 !== i))
                        return i;
                    t = t.parent()
                }
                return 0
            }(C(t)) + 1),
            C.datepicker._datepickerShowing = !0,
            C.effects && C.effects.effect[i] ? s.dpDiv.show(i, C.datepicker._get(s, "showOptions"), n) : s.dpDiv[i || "show"](i ? n : null),
            C.datepicker._shouldFocusInput(s) && s.input.trigger("focus"),
            C.datepicker._curInst = s)))
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4,
            (it = t).dpDiv.empty().append(this._generateHTML(t)),
            this._attachHandlers(t);
            var e, i = this._getNumberOfMonths(t), n = i[1], s = t.dpDiv.find("." + this._dayOverClass + " a");
            0 < s.length && o.apply(s.get(0)),
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            1 < n && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"),
            t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
            t === C.datepicker._curInst && C.datepicker._datepickerShowing && C.datepicker._shouldFocusInput(t) && t.input.trigger("focus"),
            t.yearshtml && (e = t.yearshtml,
            setTimeout(function() {
                e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),
                e = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(t, e, i) {
            var n = t.dpDiv.outerWidth()
              , s = t.dpDiv.outerHeight()
              , o = t.input ? t.input.outerWidth() : 0
              , a = t.input ? t.input.outerHeight() : 0
              , r = document.documentElement.clientWidth + (i ? 0 : C(document).scrollLeft())
              , l = document.documentElement.clientHeight + (i ? 0 : C(document).scrollTop());
            return e.left -= this._get(t, "isRTL") ? n - o : 0,
            e.left -= i && e.left === t.input.offset().left ? C(document).scrollLeft() : 0,
            e.top -= i && e.top === t.input.offset().top + a ? C(document).scrollTop() : 0,
            e.left -= Math.min(e.left, e.left + n > r && n < r ? Math.abs(e.left + n - r) : 0),
            e.top -= Math.min(e.top, e.top + s > l && s < l ? Math.abs(s + a) : 0),
            e
        },
        _findPos: function(t) {
            for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || C.expr.filters.hidden(t)); )
                t = t[i ? "previousSibling" : "nextSibling"];
            return [(e = C(t).offset()).left, e.top]
        },
        _hideDatepicker: function(t) {
            var e, i, n = this._curInst;
            !n || t && n !== C.data(t, "datepicker") || this._datepickerShowing && (e = this._get(n, "showAnim"),
            i = this._get(n, "duration"),
            t = function() {
                C.datepicker._tidyDialog(n)
            }
            ,
            C.effects && (C.effects.effect[e] || C.effects[e]) ? n.dpDiv.hide(e, C.datepicker._get(n, "showOptions"), i, t) : n.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, t),
            e || t(),
            this._datepickerShowing = !1,
            (t = this._get(n, "onClose")) && t.apply(n.input ? n.input[0] : null, [n.input ? n.input.val() : "", n]),
            this._lastInput = null,
            this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }),
            C.blockUI && (C.unblockUI(),
            C("body").append(this.dpDiv))),
            this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            var e;
            C.datepicker._curInst && (e = C(t.target),
            t = C.datepicker._getInst(e[0]),
            (e[0].id === C.datepicker._mainDivId || 0 !== e.parents("#" + C.datepicker._mainDivId).length || e.hasClass(C.datepicker.markerClassName) || e.closest("." + C.datepicker._triggerClass).length || !C.datepicker._datepickerShowing || C.datepicker._inDialog && C.blockUI) && (!e.hasClass(C.datepicker.markerClassName) || C.datepicker._curInst === t) || C.datepicker._hideDatepicker())
        },
        _adjustDate: function(t, e, i) {
            var n = C(t)
              , t = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(t, e + ("M" === i ? this._get(t, "showCurrentAtPos") : 0), i),
            this._updateDatepicker(t))
        },
        _gotoToday: function(t) {
            var e = C(t)
              , i = this._getInst(e[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay,
            i.drawMonth = i.selectedMonth = i.currentMonth,
            i.drawYear = i.selectedYear = i.currentYear) : (t = new Date,
            i.selectedDay = t.getDate(),
            i.drawMonth = i.selectedMonth = t.getMonth(),
            i.drawYear = i.selectedYear = t.getFullYear()),
            this._notifyChange(i),
            this._adjustDate(e)
        },
        _selectMonthYear: function(t, e, i) {
            var n = C(t)
              , t = this._getInst(n[0]);
            t["selected" + ("M" === i ? "Month" : "Year")] = t["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10),
            this._notifyChange(t),
            this._adjustDate(n)
        },
        _selectDay: function(t, e, i, n) {
            var s = C(t);
            C(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(s[0]) || ((s = this._getInst(s[0])).selectedDay = s.currentDay = C("a", n).html(),
            s.selectedMonth = s.currentMonth = e,
            s.selectedYear = s.currentYear = i,
            this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
        },
        _clearDate: function(t) {
            t = C(t);
            this._selectDate(t, "")
        },
        _selectDate: function(t, e) {
            var i = C(t)
              , t = this._getInst(i[0]);
            e = null != e ? e : this._formatDate(t),
            t.input && t.input.val(e),
            this._updateAlternate(t),
            (i = this._get(t, "onSelect")) ? i.apply(t.input ? t.input[0] : null, [e, t]) : t.input && t.input.trigger("change"),
            t.inline ? this._updateDatepicker(t) : (this._hideDatepicker(),
            this._lastInput = t.input[0],
            "object" != typeof t.input[0] && t.input.trigger("focus"),
            this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var e, i, n = this._get(t, "altField");
            n && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"),
            i = this._getDate(t),
            t = this.formatDate(e, i, this._getFormatConfig(t)),
            C(n).val(t))
        },
        noWeekends: function(t) {
            t = t.getDay();
            return [0 < t && t < 6, ""]
        },
        iso8601Week: function(t) {
            var e = new Date(t.getTime());
            return e.setDate(e.getDate() + 4 - (e.getDay() || 7)),
            t = e.getTime(),
            e.setMonth(0),
            e.setDate(1),
            Math.floor(Math.round((t - e) / 864e5) / 7) + 1
        },
        parseDate: function(e, s, t) {
            if (null == e || null == s)
                throw "Invalid arguments";
            if ("" === (s = "object" == typeof s ? "" + s : s + ""))
                return null;
            function o(t) {
                return (t = e.length > x + 1 && e.charAt(x + 1) === t) && x++,
                t
            }
            function i(t) {
                var e = o(t)
                  , e = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2
                  , e = RegExp("^\\d{" + ("y" === t ? e : 1) + "," + e + "}");
                if (!(e = s.substring(u).match(e)))
                    throw "Missing number at position " + u;
                return u += e[0].length,
                parseInt(e[0], 10)
            }
            function n(t, e, i) {
                var n = -1
                  , e = C.map(o(t) ? i : e, function(t, e) {
                    return [[e, t]]
                }).sort(function(t, e) {
                    return -(t[1].length - e[1].length)
                });
                if (C.each(e, function(t, e) {
                    var i = e[1];
                    return s.substr(u, i.length).toLowerCase() === i.toLowerCase() ? (n = e[0],
                    u += i.length,
                    !1) : void 0
                }),
                -1 !== n)
                    return n + 1;
                throw "Unknown name at position " + u
            }
            function a() {
                if (s.charAt(u) !== e.charAt(x))
                    throw "Unexpected literal at position " + u;
                u++
            }
            for (var r, l, h, u = 0, c = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff, c = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10), d = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort, p = (t ? t.dayNames : null) || this._defaults.dayNames, f = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort, m = (t ? t.monthNames : null) || this._defaults.monthNames, g = -1, v = -1, b = -1, y = -1, _ = !1, x = 0; e.length > x; x++)
                if (_)
                    "'" !== e.charAt(x) || o("'") ? a() : _ = !1;
                else
                    switch (e.charAt(x)) {
                    case "d":
                        b = i("d");
                        break;
                    case "D":
                        n("D", d, p);
                        break;
                    case "o":
                        y = i("o");
                        break;
                    case "m":
                        v = i("m");
                        break;
                    case "M":
                        v = n("M", f, m);
                        break;
                    case "y":
                        g = i("y");
                        break;
                    case "@":
                        g = (h = new Date(i("@"))).getFullYear(),
                        v = h.getMonth() + 1,
                        b = h.getDate();
                        break;
                    case "!":
                        g = (h = new Date((i("!") - this._ticksTo1970) / 1e4)).getFullYear(),
                        v = h.getMonth() + 1,
                        b = h.getDate();
                        break;
                    case "'":
                        o("'") ? a() : _ = !0;
                        break;
                    default:
                        a()
                    }
            if (s.length > u && (l = s.substr(u),
            !/^\s+/.test(l)))
                throw "Extra/unparsed characters found in date: " + l;
            if (-1 === g ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= c ? 0 : -100)),
            -1 < y)
                for (v = 1,
                b = y; !(b <= (r = this._getDaysInMonth(g, v - 1))); )
                    v++,
                    b -= r;
            if ((h = this._daylightSavingAdjust(new Date(g,v - 1,b))).getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== b)
                throw "Invalid date";
            return h
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t)
                return "";
            function s(t) {
                return (t = e.length > a + 1 && e.charAt(a + 1) === t) && a++,
                t
            }
            function n(t, e, i) {
                var n = "" + e;
                if (s(t))
                    for (; i > n.length; )
                        n = "0" + n;
                return n
            }
            function o(t, e, i, n) {
                return (s(t) ? n : i)[e]
            }
            var a, r = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, l = (i ? i.dayNames : null) || this._defaults.dayNames, h = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, u = (i ? i.monthNames : null) || this._defaults.monthNames, c = "", d = !1;
            if (t)
                for (a = 0; e.length > a; a++)
                    if (d)
                        "'" !== e.charAt(a) || s("'") ? c += e.charAt(a) : d = !1;
                    else
                        switch (e.charAt(a)) {
                        case "d":
                            c += n("d", t.getDate(), 2);
                            break;
                        case "D":
                            c += o("D", t.getDay(), r, l);
                            break;
                        case "o":
                            c += n("o", Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime() - new Date(t.getFullYear(),0,0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            c += n("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            c += o("M", t.getMonth(), h, u);
                            break;
                        case "y":
                            c += s("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                            break;
                        case "@":
                            c += t.getTime();
                            break;
                        case "!":
                            c += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            s("'") ? c += "'" : d = !0;
                            break;
                        default:
                            c += e.charAt(a)
                        }
            return c
        },
        _possibleChars: function(e) {
            function t(t) {
                return (t = e.length > s + 1 && e.charAt(s + 1) === t) && s++,
                t
            }
            for (var i = "", n = !1, s = 0; e.length > s; s++)
                if (n)
                    "'" !== e.charAt(s) || t("'") ? i += e.charAt(s) : n = !1;
                else
                    switch (e.charAt(s)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        t("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += e.charAt(s)
                    }
            return i
        },
        _get: function(t, e) {
            return (void 0 !== t.settings[e] ? t.settings : this._defaults)[e]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat")
                  , n = t.lastVal = t.input ? t.input.val() : null
                  , s = this._getDefaultDate(t)
                  , o = s
                  , a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, n, a) || s
                } catch (t) {
                    n = e ? "" : n
                }
                t.selectedDay = o.getDate(),
                t.drawMonth = t.selectedMonth = o.getMonth(),
                t.drawYear = t.selectedYear = o.getFullYear(),
                t.currentDay = n ? o.getDate() : 0,
                t.currentMonth = n ? o.getMonth() : 0,
                t.currentYear = n ? o.getFullYear() : 0,
                this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(r, t, e) {
            var i, n, t = null == t || "" === t ? e : "string" == typeof t ? function(t) {
                try {
                    return C.datepicker.parseDate(C.datepicker._get(r, "dateFormat"), t, C.datepicker._getFormatConfig(r))
                } catch (t) {}
                for (var e = (t.toLowerCase().match(/^c/) ? C.datepicker._getDate(r) : null) || new Date, i = e.getFullYear(), n = e.getMonth(), s = e.getDate(), o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, a = o.exec(t); a; ) {
                    switch (a[2] || "d") {
                    case "d":
                    case "D":
                        s += parseInt(a[1], 10);
                        break;
                    case "w":
                    case "W":
                        s += 7 * parseInt(a[1], 10);
                        break;
                    case "m":
                    case "M":
                        n += parseInt(a[1], 10),
                        s = Math.min(s, C.datepicker._getDaysInMonth(i, n));
                        break;
                    case "y":
                    case "Y":
                        i += parseInt(a[1], 10),
                        s = Math.min(s, C.datepicker._getDaysInMonth(i, n))
                    }
                    a = o.exec(t)
                }
                return new Date(i,n,s)
            }(t) : "number" == typeof t ? isNaN(t) ? e : (i = t,
            (n = new Date).setDate(n.getDate() + i),
            n) : new Date(t.getTime());
            return (t = t && "Invalid Date" == "" + t ? e : t) && (t.setHours(0),
            t.setMinutes(0),
            t.setSeconds(0),
            t.setMilliseconds(0)),
            this._daylightSavingAdjust(t)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0),
            t) : null
        },
        _setDate: function(t, e, i) {
            var n = !e
              , s = t.selectedMonth
              , o = t.selectedYear
              , e = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = e.getDate(),
            t.drawMonth = t.selectedMonth = t.currentMonth = e.getMonth(),
            t.drawYear = t.selectedYear = t.currentYear = e.getFullYear(),
            s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(n ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))
        },
        _attachHandlers: function(t) {
            var e = this._get(t, "stepMonths")
              , i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        C.datepicker._adjustDate(i, -e, "M")
                    },
                    next: function() {
                        C.datepicker._adjustDate(i, +e, "M")
                    },
                    hide: function() {
                        C.datepicker._hideDatepicker()
                    },
                    today: function() {
                        C.datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return C.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return C.datepicker._selectMonthYear(i, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return C.datepicker._selectMonthYear(i, this, "Y"),
                        !1
                    }
                };
                C(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, n, s, o, a, r, l, h, u, c, d, p, f, m, g, v, b, y, _, x, C, w, k, D, T, P, M, S, E, I, A, N = new Date, $ = this._daylightSavingAdjust(new Date(N.getFullYear(),N.getMonth(),N.getDate())), H = this._get(t, "isRTL"), O = this._get(t, "showButtonPanel"), F = this._get(t, "hideIfNoPrevNext"), R = this._get(t, "navigationAsDateFormat"), z = this._getNumberOfMonths(t), L = this._get(t, "showCurrentAtPos"), N = this._get(t, "stepMonths"), j = 1 !== z[0] || 1 !== z[1], W = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9)), B = this._getMinMaxDate(t, "min"), q = this._getMinMaxDate(t, "max"), U = t.drawMonth - L, G = t.drawYear;
            if (U < 0 && (U += 12,
            G--),
            q)
                for (e = this._daylightSavingAdjust(new Date(q.getFullYear(),q.getMonth() - z[0] * z[1] + 1,q.getDate())),
                e = B && e < B ? B : e; this._daylightSavingAdjust(new Date(G,U,1)) > e; )
                    --U < 0 && (U = 11,
                    G--);
            for (t.drawMonth = U,
            t.drawYear = G,
            L = this._get(t, "prevText"),
            L = R ? this.formatDate(L, this._daylightSavingAdjust(new Date(G,U - N,1)), this._getFormatConfig(t)) : L,
            i = this._canAdjustMonth(t, -1, G, U) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + L + "'><span class='ui-icon ui-icon-circle-triangle-" + (H ? "e" : "w") + "'>" + L + "</span></a>" : F ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + L + "'><span class='ui-icon ui-icon-circle-triangle-" + (H ? "e" : "w") + "'>" + L + "</span></a>",
            L = this._get(t, "nextText"),
            L = R ? this.formatDate(L, this._daylightSavingAdjust(new Date(G,U + N,1)), this._getFormatConfig(t)) : L,
            n = this._canAdjustMonth(t, 1, G, U) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + L + "'><span class='ui-icon ui-icon-circle-triangle-" + (H ? "w" : "e") + "'>" + L + "</span></a>" : F ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + L + "'><span class='ui-icon ui-icon-circle-triangle-" + (H ? "w" : "e") + "'>" + L + "</span></a>",
            F = this._get(t, "currentText"),
            L = this._get(t, "gotoCurrent") && t.currentDay ? W : $,
            F = R ? this.formatDate(F, L, this._getFormatConfig(t)) : F,
            R = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
            R = O ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (H ? R : "") + (this._isInRange(t, L) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + F + "</button>" : "") + (H ? "" : R) + "</div>" : "",
            s = parseInt(this._get(t, "firstDay"), 10),
            s = isNaN(s) ? 0 : s,
            o = this._get(t, "showWeek"),
            a = this._get(t, "dayNames"),
            r = this._get(t, "dayNamesMin"),
            l = this._get(t, "monthNames"),
            h = this._get(t, "monthNamesShort"),
            u = this._get(t, "beforeShowDay"),
            c = this._get(t, "showOtherMonths"),
            d = this._get(t, "selectOtherMonths"),
            p = this._getDefaultDate(t),
            f = "",
            g = 0; z[0] > g; g++) {
                for (v = "",
                this.maxRows = 4,
                b = 0; z[1] > b; b++) {
                    if (y = this._daylightSavingAdjust(new Date(G,U,t.selectedDay)),
                    _ = " ui-corner-all",
                    x = "",
                    j) {
                        if (x += "<div class='ui-datepicker-group",
                        1 < z[1])
                            switch (b) {
                            case 0:
                                x += " ui-datepicker-group-first",
                                _ = " ui-corner-" + (H ? "right" : "left");
                                break;
                            case z[1] - 1:
                                x += " ui-datepicker-group-last",
                                _ = " ui-corner-" + (H ? "left" : "right");
                                break;
                            default:
                                x += " ui-datepicker-group-middle",
                                _ = ""
                            }
                        x += "'>"
                    }
                    for (x += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + _ + "'>" + (/all|left/.test(_) && 0 === g ? H ? n : i : "") + (/all|right/.test(_) && 0 === g ? H ? i : n : "") + this._generateMonthYearHeader(t, U, G, B, q, 0 < g || 0 < b, l, h) + "</div><table class='ui-datepicker-calendar'><thead><tr>",
                    C = o ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                    m = 0; m < 7; m++)
                        C += "<th scope='col'" + (5 <= (m + s + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + a[w = (m + s) % 7] + "'>" + r[w] + "</span></th>";
                    for (x += C + "</tr></thead><tbody>",
                    D = this._getDaysInMonth(G, U),
                    G === t.selectedYear && U === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, D)),
                    k = (this._getFirstDayOfMonth(G, U) - s + 7) % 7,
                    D = Math.ceil((k + D) / 7),
                    T = j && this.maxRows > D ? this.maxRows : D,
                    this.maxRows = T,
                    P = this._daylightSavingAdjust(new Date(G,U,1 - k)),
                    M = 0; M < T; M++) {
                        for (x += "<tr>",
                        S = o ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(P) + "</td>" : "",
                        m = 0; m < 7; m++)
                            E = u ? u.apply(t.input ? t.input[0] : null, [P]) : [!0, ""],
                            A = (I = P.getMonth() !== U) && !d || !E[0] || B && P < B || q && q < P,
                            S += "<td class='" + (5 <= (m + s + 6) % 7 ? " ui-datepicker-week-end" : "") + (I ? " ui-datepicker-other-month" : "") + (P.getTime() === y.getTime() && U === t.selectedMonth && t._keyEvent || p.getTime() === P.getTime() && p.getTime() === y.getTime() ? " " + this._dayOverClass : "") + (A ? " " + this._unselectableClass + " ui-state-disabled" : "") + (I && !c ? "" : " " + E[1] + (P.getTime() === W.getTime() ? " " + this._currentClass : "") + (P.getTime() === $.getTime() ? " ui-datepicker-today" : "")) + "'" + (I && !c || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (A ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (I && !c ? "&#xa0;" : A ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === $.getTime() ? " ui-state-highlight" : "") + (P.getTime() === W.getTime() ? " ui-state-active" : "") + (I ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>",
                            P.setDate(P.getDate() + 1),
                            P = this._daylightSavingAdjust(P);
                        x += S + "</tr>"
                    }
                    11 < ++U && (U = 0,
                    G++),
                    v += x += "</tbody></table>" + (j ? "</div>" + (0 < z[0] && b === z[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                f += v
            }
            return f += R,
            t._keyEvent = !1,
            f
        },
        _generateMonthYearHeader: function(t, e, i, n, s, o, a, r) {
            var l, h, u, c, d, p, f, m = this._get(t, "changeMonth"), g = this._get(t, "changeYear"), v = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (o || !m)
                y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else {
                for (l = n && n.getFullYear() === i,
                h = s && s.getFullYear() === i,
                y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                u = 0; u < 12; u++)
                    (!l || u >= n.getMonth()) && (!h || s.getMonth() >= u) && (y += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                y += "</select>"
            }
            if (v || (b += y + (!o && m && g ? "" : "&#xa0;")),
            !t.yearshtml)
                if (t.yearshtml = "",
                o || !g)
                    b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (c = this._get(t, "yearRange").split(":"),
                    d = (new Date).getFullYear(),
                    p = (a = function(t) {
                        t = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                        return isNaN(t) ? d : t
                    }
                    )(c[0]),
                    f = Math.max(p, a(c[1] || "")),
                    p = n ? Math.max(p, n.getFullYear()) : p,
                    f = s ? Math.min(f, s.getFullYear()) : f,
                    t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p <= f; p++)
                        t.yearshtml += "<option value='" + p + "'" + (p === i ? " selected='selected'" : "") + ">" + p + "</option>";
                    t.yearshtml += "</select>",
                    b += t.yearshtml,
                    t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"),
            v && (b += (!o && m && g ? "" : "&#xa0;") + y),
            b + "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var n = t.selectedYear + ("Y" === i ? e : 0)
              , s = t.selectedMonth + ("M" === i ? e : 0)
              , e = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0)
              , e = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n,s,e)));
            t.selectedDay = e.getDate(),
            t.drawMonth = t.selectedMonth = e.getMonth(),
            t.drawYear = t.selectedYear = e.getFullYear(),
            "M" !== i && "Y" !== i || this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min")
              , t = this._getMinMaxDate(t, "max")
              , e = i && e < i ? i : e;
            return t && t < e ? t : e
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            t = this._get(t, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t,e,32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t,e,1).getDay()
        },
        _canAdjustMonth: function(t, e, i, n) {
            var s = this._getNumberOfMonths(t)
              , s = this._daylightSavingAdjust(new Date(i,n + (e < 0 ? e : s[0] * s[1]),1));
            return e < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())),
            this._isInRange(t, s)
        },
        _isInRange: function(t, e) {
            var i = this._getMinMaxDate(t, "min")
              , n = this._getMinMaxDate(t, "max")
              , s = null
              , o = null
              , a = this._get(t, "yearRange");
            return a && (t = a.split(":"),
            a = (new Date).getFullYear(),
            s = parseInt(t[0], 10),
            o = parseInt(t[1], 10),
            t[0].match(/[+\-].*/) && (s += a),
            t[1].match(/[+\-].*/) && (o += a)),
            (!i || e.getTime() >= i.getTime()) && (!n || e.getTime() <= n.getTime()) && (!s || e.getFullYear() >= s) && (!o || o >= e.getFullYear())
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return {
                shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, n) {
            e || (t.currentDay = t.selectedDay,
            t.currentMonth = t.selectedMonth,
            t.currentYear = t.selectedYear);
            e = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n,i,e)) : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), e, this._getFormatConfig(t))
        }
    }),
    C.fn.datepicker = function(t) {
        if (!this.length)
            return this;
        C.datepicker.initialized || (C(document).on("mousedown", C.datepicker._checkExternalClick),
        C.datepicker.initialized = !0),
        0 === C("#" + C.datepicker._mainDivId).length && C("body").append(C.datepicker.dpDiv);
        var e = Array.prototype.slice.call(arguments, 1);
        return "string" == typeof t && ("isDisabled" === t || "getDate" === t || "widget" === t) || "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? C.datepicker["_" + t + "Datepicker"].apply(C.datepicker, [this[0]].concat(e)) : this.each(function() {
            "string" == typeof t ? C.datepicker["_" + t + "Datepicker"].apply(C.datepicker, [this].concat(e)) : C.datepicker._attachDatepicker(this, t)
        })
    }
    ,
    C.datepicker = new t,
    C.datepicker.initialized = !1,
    C.datepicker.uuid = (new Date).getTime(),
    C.datepicker.version = "1.12.1",
    C.datepicker,
    C.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var st = !1;
    C(document).on("mouseup", function() {
        st = !1
    }),
    C.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function(t) {
                return !0 === C.data(t.target, e.widgetName + ".preventClickEvent") ? (C.removeData(t.target, e.widgetName + ".preventClickEvent"),
                t.stopImmediatePropagation(),
                !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName),
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!st) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(t),
                this._mouseDownEvent = t;
                var e = this
                  , i = 1 === t.which
                  , n = !("string" != typeof this.options.cancel || !t.target.nodeName) && C(t.target).closest(this.options.cancel).length;
                return i && !n && this._mouseCapture(t) && (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    e.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t),
                !this._mouseStarted) ? t.preventDefault() : (!0 === C.data(t.target, this.widgetName + ".preventClickEvent") && C.removeData(t.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(t) {
                    return e._mouseMove(t)
                }
                ,
                this._mouseUpDelegate = function(t) {
                    return e._mouseUp(t)
                }
                ,
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                st = !0)),
                !0
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (C.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button)
                    return this._mouseUp(t);
                if (!t.which)
                    if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey)
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich)
                        return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t),
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(t) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && C.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
            delete this._mouseDelayTimer),
            this.ignoreMissingWhich = !1,
            st = !1,
            t.preventDefault()
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }),
    C.ui.plugin = {
        add: function(t, e, i) {
            var n, s = C.ui[t].prototype;
            for (n in i)
                s.plugins[n] = s.plugins[n] || [],
                s.plugins[n].push([e, i[n]])
        },
        call: function(t, e, i, n) {
            var s, o = t.plugins[e];
            if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (s = 0; o.length > s; s++)
                    t.options[o[s][0]] && o[s][1].apply(t.element, i)
        }
    },
    C.ui.safeBlur = function(t) {
        t && "body" !== t.nodeName.toLowerCase() && C(t).trigger("blur")
    }
    ,
    C.widget("ui.draggable", C.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(),
            this.options.addClasses && this._addClass("ui-draggable"),
            this._setHandleClassName(),
            this._mouseInit()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "handle" === t && (this._removeHandleClassName(),
            this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this._removeHandleClassName(),
            void this._mouseDestroy())
        },
        _mouseCapture: function(t) {
            var e = this.options;
            return !(this.helper || e.disabled || 0 < C(t.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(t),
            !!this.handle && (this._blurActiveElement(t),
            this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix),
            !0))
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map(function() {
                var t = C(this);
                return C("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var e = C.ui.safeActiveElement(this.document[0]);
            C(t.target).closest(e).length || C.ui.safeBlur(e)
        },
        _mouseStart: function(t) {
            var e = this.options;
            return this.helper = this._createHelper(t),
            this._addClass(this.helper, "ui-draggable-dragging"),
            this._cacheHelperProportions(),
            C.ui.ddmanager && (C.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(!0),
            this.offsetParent = this.helper.offsetParent(),
            this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
                return "fixed" === C(this).css("position")
            }).length,
            this.positionAbs = this.element.offset(),
            this._refreshOffsets(t),
            this.originalPosition = this.position = this._generatePosition(t, !1),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt),
            this._setContainment(),
            !1 === this._trigger("start", t) ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            C.ui.ddmanager && !e.dropBehaviour && C.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            C.ui.ddmanager && C.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            },
            this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, e) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
            this.position = this._generatePosition(t, !0),
            this.positionAbs = this._convertPositionTo("absolute"),
            !e) {
                e = this._uiHash();
                if (!1 === this._trigger("drag", t, e))
                    return this._mouseUp(new C.Event("mouseup",t)),
                    !1;
                this.position = e.position
            }
            return this.helper[0].style.left = this.position.left + "px",
            this.helper[0].style.top = this.position.top + "px",
            C.ui.ddmanager && C.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var e = this
              , i = !1;
            return C.ui.ddmanager && !this.options.dropBehaviour && (i = C.ui.ddmanager.drop(this, t)),
            this.dropped && (i = this.dropped,
            this.dropped = !1),
            "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || C.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? C(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== e._trigger("stop", t) && e._clear()
            }) : !1 !== this._trigger("stop", t) && this._clear(),
            !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(),
            C.ui.ddmanager && C.ui.ddmanager.dragStop(this, t),
            this.handleElement.is(t.target) && this.element.trigger("focus"),
            C.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new C.Event("mouseup",{
                target: this.element[0]
            })) : this._clear(),
            this
        },
        _getHandle: function(t) {
            return !this.options.handle || !!C(t.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
            this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(t) {
            var e = this.options
              , i = C.isFunction(e.helper)
              , t = i ? C(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
            return t.parents("body").length || t.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo),
            i && t[0] === this.element[0] && this._setPositionRelative(),
            t[0] === this.element[0] || /(fixed|absolute)/.test(t.css("position")) || t.css("position", "absolute"),
            t
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            C.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset()
              , e = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== e && C.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition)
                return {
                    top: 0,
                    left: 0
                };
            var t = this.element.position()
              , e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, e = this.options, i = this.document[0];
            return this.relativeContainer = null,
            e.containment ? "window" === e.containment ? void (this.containment = [C(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, C(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, C(window).scrollLeft() + C(window).width() - this.helperProportions.width - this.margins.left, C(window).scrollTop() + (C(window).height() || i.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void (this.containment = [0, 0, C(i).width() - this.helperProportions.width - this.margins.left, (C(i).height() || i.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void (this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode),
            void ((i = (t = C(e.containment))[0]) && (e = /(scroll|auto)/.test(t.css("overflow")),
            this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (e ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
            this.relativeContainer = t))) : void (this.containment = null)
        },
        _convertPositionTo: function(t, e) {
            e = e || this.position;
            var i = "absolute" === t ? 1 : -1
              , t = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : t ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : t ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t, e) {
            var i, n = this.options, s = this._isRootNode(this.scrollParent[0]), o = t.pageX, a = t.pageY;
            return s && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }),
            e && (this.containment && (i = this.relativeContainer ? (i = this.relativeContainer.offset(),
            [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : this.containment,
            t.pageX - this.offset.click.left < i[0] && (o = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] && (a = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] && (o = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] && (a = i[3] + this.offset.click.top)),
            n.grid && (t = n.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY,
            a = !i || t - this.offset.click.top >= i[1] || t - this.offset.click.top > i[3] ? t : t - this.offset.click.top >= i[1] ? t - n.grid[1] : t + n.grid[1],
            t = n.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX,
            o = !i || t - this.offset.click.left >= i[0] || t - this.offset.click.left > i[2] ? t : t - this.offset.click.left >= i[0] ? t - n.grid[0] : t + n.grid[0]),
            "y" === n.axis && (o = this.originalPageX),
            "x" === n.axis && (a = this.originalPageY)),
            {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1,
            this.destroyOnClear && this.destroy()
        },
        _trigger: function(t, e, i) {
            return i = i || this._uiHash(),
            C.ui.plugin.call(this, t, [e, i, this], !0),
            /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"),
            i.offset = this.positionAbs),
            C.Widget.prototype._trigger.call(this, t, e, i)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    C.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, t, i) {
            var n = C.extend({}, t, {
                item: i.element
            });
            i.sortables = [],
            C(i.options.connectToSortable).each(function() {
                var t = C(this).sortable("instance");
                t && !t.options.disabled && (i.sortables.push(t),
                t.refreshPositions(),
                t._trigger("activate", e, n))
            })
        },
        stop: function(e, t, i) {
            var n = C.extend({}, t, {
                item: i.element
            });
            i.cancelHelperRemoval = !1,
            C.each(i.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0,
                i.cancelHelperRemoval = !0,
                t.cancelHelperRemoval = !1,
                t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                },
                t._mouseStop(e),
                t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0,
                t._trigger("deactivate", e, n))
            })
        },
        drag: function(i, n, s) {
            C.each(s.sortables, function() {
                var t = !1
                  , e = this;
                e.positionAbs = s.positionAbs,
                e.helperProportions = s.helperProportions,
                e.offset.click = s.offset.click,
                e._intersectsWith(e.containerCache) && (t = !0,
                C.each(s.sortables, function() {
                    return this.positionAbs = s.positionAbs,
                    this.helperProportions = s.helperProportions,
                    this.offset.click = s.offset.click,
                    this !== e && this._intersectsWith(this.containerCache) && C.contains(e.element[0], this.element[0]) && (t = !1),
                    t
                })),
                t ? (e.isOver || (e.isOver = 1,
                s._parent = n.helper.parent(),
                e.currentItem = n.helper.appendTo(e.element).data("ui-sortable-item", !0),
                e.options._helper = e.options.helper,
                e.options.helper = function() {
                    return n.helper[0]
                }
                ,
                i.target = e.currentItem[0],
                e._mouseCapture(i, !0),
                e._mouseStart(i, !0, !0),
                e.offset.click.top = s.offset.click.top,
                e.offset.click.left = s.offset.click.left,
                e.offset.parent.left -= s.offset.parent.left - e.offset.parent.left,
                e.offset.parent.top -= s.offset.parent.top - e.offset.parent.top,
                s._trigger("toSortable", i),
                s.dropped = e.element,
                C.each(s.sortables, function() {
                    this.refreshPositions()
                }),
                s.currentItem = s.element,
                e.fromOutside = s),
                e.currentItem && (e._mouseDrag(i),
                n.position = e.position)) : e.isOver && (e.isOver = 0,
                e.cancelHelperRemoval = !0,
                e.options._revert = e.options.revert,
                e.options.revert = !1,
                e._trigger("out", i, e._uiHash(e)),
                e._mouseStop(i, !0),
                e.options.revert = e.options._revert,
                e.options.helper = e.options._helper,
                e.placeholder && e.placeholder.remove(),
                n.helper.appendTo(s._parent),
                s._refreshOffsets(i),
                n.position = s._generatePosition(i, !0),
                s._trigger("fromSortable", i),
                s.dropped = !1,
                C.each(s.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }),
    C.ui.plugin.add("draggable", "cursor", {
        start: function(t, e, i) {
            var n = C("body")
              , i = i.options;
            n.css("cursor") && (i._cursor = n.css("cursor")),
            n.css("cursor", i.cursor)
        },
        stop: function(t, e, i) {
            i = i.options;
            i._cursor && C("body").css("cursor", i._cursor)
        }
    }),
    C.ui.plugin.add("draggable", "opacity", {
        start: function(t, e, i) {
            e = C(e.helper),
            i = i.options;
            e.css("opacity") && (i._opacity = e.css("opacity")),
            e.css("opacity", i.opacity)
        },
        stop: function(t, e, i) {
            i = i.options;
            i._opacity && C(e.helper).css("opacity", i._opacity)
        }
    }),
    C.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(t, e, i) {
            var n = i.options
              , s = !1
              , o = i.scrollParentNotHidden[0]
              , a = i.document[0];
            o !== a && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = s = o.scrollTop + n.scrollSpeed : t.pageY - i.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = s = o.scrollTop - n.scrollSpeed)),
            n.axis && "y" === n.axis || (i.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = s = o.scrollLeft + n.scrollSpeed : t.pageX - i.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = s = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - C(a).scrollTop() < n.scrollSensitivity ? s = C(a).scrollTop(C(a).scrollTop() - n.scrollSpeed) : C(window).height() - (t.pageY - C(a).scrollTop()) < n.scrollSensitivity && (s = C(a).scrollTop(C(a).scrollTop() + n.scrollSpeed))),
            n.axis && "y" === n.axis || (t.pageX - C(a).scrollLeft() < n.scrollSensitivity ? s = C(a).scrollLeft(C(a).scrollLeft() - n.scrollSpeed) : C(window).width() - (t.pageX - C(a).scrollLeft()) < n.scrollSensitivity && (s = C(a).scrollLeft(C(a).scrollLeft() + n.scrollSpeed)))),
            !1 !== s && C.ui.ddmanager && !n.dropBehaviour && C.ui.ddmanager.prepareOffsets(i, t)
        }
    }),
    C.ui.plugin.add("draggable", "snap", {
        start: function(t, e, i) {
            var n = i.options;
            i.snapElements = [],
            C(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var t = C(this)
                  , e = t.offset();
                this !== i.element[0] && i.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: e.top,
                    left: e.left
                })
            })
        },
        drag: function(t, e, i) {
            for (var n, s, o, a, r, l, h, u, c, d = i.options, p = d.snapTolerance, f = e.offset.left, m = f + i.helperProportions.width, g = e.offset.top, v = g + i.helperProportions.height, b = i.snapElements.length - 1; 0 <= b; b--)
                l = (r = i.snapElements[b].left - i.margins.left) + i.snapElements[b].width,
                u = (h = i.snapElements[b].top - i.margins.top) + i.snapElements[b].height,
                m < r - p || l + p < f || v < h - p || u + p < g || !C.contains(i.snapElements[b].item.ownerDocument, i.snapElements[b].item) ? (i.snapElements[b].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, C.extend(i._uiHash(), {
                    snapItem: i.snapElements[b].item
                })),
                i.snapElements[b].snapping = !1) : ("inner" !== d.snapMode && (n = p >= Math.abs(h - v),
                s = p >= Math.abs(u - g),
                o = p >= Math.abs(r - m),
                a = p >= Math.abs(l - f),
                n && (e.position.top = i._convertPositionTo("relative", {
                    top: h - i.helperProportions.height,
                    left: 0
                }).top),
                s && (e.position.top = i._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top),
                o && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: r - i.helperProportions.width
                }).left),
                a && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left)),
                c = n || s || o || a,
                "outer" !== d.snapMode && (n = p >= Math.abs(h - g),
                s = p >= Math.abs(u - v),
                o = p >= Math.abs(r - f),
                a = p >= Math.abs(l - m),
                n && (e.position.top = i._convertPositionTo("relative", {
                    top: h,
                    left: 0
                }).top),
                s && (e.position.top = i._convertPositionTo("relative", {
                    top: u - i.helperProportions.height,
                    left: 0
                }).top),
                o && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: r
                }).left),
                a && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l - i.helperProportions.width
                }).left)),
                !i.snapElements[b].snapping && (n || s || o || a || c) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, C.extend(i._uiHash(), {
                    snapItem: i.snapElements[b].item
                })),
                i.snapElements[b].snapping = n || s || o || a || c)
        }
    }),
    C.ui.plugin.add("draggable", "stack", {
        start: function(t, e, i) {
            var n, i = i.options, i = C.makeArray(C(i.stack)).sort(function(t, e) {
                return (parseInt(C(t).css("zIndex"), 10) || 0) - (parseInt(C(e).css("zIndex"), 10) || 0)
            });
            i.length && (n = parseInt(C(i[0]).css("zIndex"), 10) || 0,
            C(i).each(function(t) {
                C(this).css("zIndex", n + t)
            }),
            this.css("zIndex", n + i.length))
        }
    }),
    C.ui.plugin.add("draggable", "zIndex", {
        start: function(t, e, i) {
            e = C(e.helper),
            i = i.options;
            e.css("zIndex") && (i._zIndex = e.css("zIndex")),
            e.css("zIndex", i.zIndex)
        },
        stop: function(t, e, i) {
            i = i.options;
            i._zIndex && C(e.helper).css("zIndex", i._zIndex)
        }
    }),
    C.ui.draggable,
    C.widget("ui.resizable", C.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseFloat(t) || 0
        },
        _isNumber: function(t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function(t, e) {
            if ("hidden" === C(t).css("overflow"))
                return !1;
            var i = e && "left" === e ? "scrollLeft" : "scrollTop"
              , e = !1;
            return 0 < t[i] || (t[i] = 1,
            e = 0 < t[i],
            t[i] = 0,
            e)
        },
        _create: function() {
            var t, e = this.options, i = this;
            this._addClass("ui-resizable"),
            C.extend(this, {
                _aspectRatio: !!e.aspectRatio,
                aspectRatio: e.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(C("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
            this.elementIsWrapper = !0,
            t = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            },
            this.element.css(t),
            this.originalElement.css("margin", 0),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css(t),
            this._proportionallyResize()),
            this._setupHandles(),
            e.autoHide && C(this.element).on("mouseenter", function() {
                e.disabled || (i._removeClass("ui-resizable-autohide"),
                i._handles.show())
            }).on("mouseleave", function() {
                e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"),
                i._handles.hide())
            }),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            function t(t) {
                C(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            }
            var e;
            return this.elementIsWrapper && (t(this.element),
            e = this.element,
            this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e),
            e.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            t(this.originalElement),
            this
        },
        _setOption: function(t, e) {
            "handles" === (this._super(t, e),
            t) && (this._removeHandles(),
            this._setupHandles())
        },
        _setupHandles: function() {
            var t, e, i, n, s, o = this.options, a = this;
            if (this.handles = o.handles || (C(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this._handles = C(),
            this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                i = this.handles.split(","),
                this.handles = {},
                e = 0; i.length > e; e++)
                    n = "ui-resizable-" + (t = C.trim(i[e])),
                    s = C("<div>"),
                    this._addClass(s, "ui-resizable-handle " + n),
                    s.css({
                        zIndex: o.zIndex
                    }),
                    this.handles[t] = ".ui-resizable-" + t,
                    this.element.append(s);
            this._renderAxis = function(t) {
                var e, i, n;
                for (e in t = t || this.element,
                this.handles)
                    this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = C(this.handles[e]),
                    this._on(this.handles[e], {
                        mousedown: a._mouseDown
                    })),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = C(this.handles[e], this.element),
                    n = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(),
                    i = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""),
                    t.css(i, n),
                    this._proportionallyResize()),
                    this._handles = this._handles.add(this.handles[e])
            }
            ,
            this._renderAxis(this.element),
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
            this._handles.disableSelection(),
            this._handles.on("mouseover", function() {
                a.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                a.axis = s && s[1] ? s[1] : "se")
            }),
            o.autoHide && (this._handles.hide(),
            this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(t) {
            var e, i, n = !1;
            for (e in this.handles)
                i = C(this.handles[e])[0],
                i !== t.target && !C.contains(i, t.target) || (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(t) {
            var e, i, n = this.options, s = this.element;
            return this.resizing = !0,
            this._renderProxy(),
            e = this._num(this.helper.css("left")),
            i = this._num(this.helper.css("top")),
            n.containment && (e += C(n.containment).scrollLeft() || 0,
            i += C(n.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: e,
                top: i
            },
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: s.width(),
                height: s.height()
            },
            this.originalSize = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            },
            this.sizeDiff = {
                width: s.outerWidth() - s.width(),
                height: s.outerHeight() - s.height()
            },
            this.originalPosition = {
                left: e,
                top: i
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            n = C(".ui-resizable-" + this.axis).css("cursor"),
            C("body").css("cursor", "auto" === n ? this.axis + "-resize" : n),
            this._addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(t) {
            var e = this.originalMousePosition
              , i = this.axis
              , n = t.pageX - e.left || 0
              , e = t.pageY - e.top || 0
              , i = this._change[i];
            return this._updatePrevProperties(),
            i && (e = i.apply(this, [t, n, e]),
            this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)),
            e = this._respectSize(e, t),
            this._updateCache(e),
            this._propagate("resize", t),
            e = this._applyChanges(),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            C.isEmptyObject(e) || (this._updatePrevProperties(),
            this._trigger("resize", t, this.ui()),
            this._applyChanges())),
            !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var e, i, n, s = this.options, o = this;
            return this._helper && (n = (e = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : o.sizeDiff.height,
            i = e ? 0 : o.sizeDiff.width,
            e = {
                width: o.helper.width() - i,
                height: o.helper.height() - n
            },
            i = parseFloat(o.element.css("left")) + (o.position.left - o.originalPosition.left) || null,
            n = parseFloat(o.element.css("top")) + (o.position.top - o.originalPosition.top) || null,
            s.animate || this.element.css(C.extend(e, {
                top: n,
                left: i
            })),
            o.helper.height(o.size.height),
            o.helper.width(o.size.width),
            this._helper && !s.animate && this._proportionallyResize()),
            C("body").css("cursor", "auto"),
            this._removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            },
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
            this.helper.css(t),
            t
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, n = this.options, s = {
                minWidth: this._isNumber(n.minWidth) ? n.minWidth : 0,
                maxWidth: this._isNumber(n.maxWidth) ? n.maxWidth : 1 / 0,
                minHeight: this._isNumber(n.minHeight) ? n.minHeight : 0,
                maxHeight: this._isNumber(n.maxHeight) ? n.maxHeight : 1 / 0
            };
            (this._aspectRatio || t) && (e = s.minHeight * this.aspectRatio,
            i = s.minWidth / this.aspectRatio,
            n = s.maxHeight * this.aspectRatio,
            t = s.maxWidth / this.aspectRatio,
            e > s.minWidth && (s.minWidth = e),
            i > s.minHeight && (s.minHeight = i),
            s.maxWidth > n && (s.maxWidth = n),
            s.maxHeight > t && (s.maxHeight = t)),
            this._vBoundaries = s
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(),
            this._isNumber(t.left) && (this.position.left = t.left),
            this._isNumber(t.top) && (this.position.top = t.top),
            this._isNumber(t.height) && (this.size.height = t.height),
            this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position
              , i = this.size
              , n = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
            "sw" === n && (t.left = e.left + (i.width - t.width),
            t.top = null),
            "nw" === n && (t.top = e.top + (i.height - t.height),
            t.left = e.left + (i.width - t.width)),
            t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries
              , i = this.axis
              , n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width
              , s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height
              , o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width
              , a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height
              , r = this.originalPosition.left + this.originalSize.width
              , l = this.originalPosition.top + this.originalSize.height
              , h = /sw|nw|w/.test(i)
              , i = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth),
            a && (t.height = e.minHeight),
            n && (t.width = e.maxWidth),
            s && (t.height = e.maxHeight),
            o && h && (t.left = r - e.minWidth),
            n && h && (t.left = r - e.maxWidth),
            a && i && (t.top = l - e.minHeight),
            s && i && (t.top = l - e.maxHeight),
            t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
            t
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++)
                i[e] = parseFloat(n[e]) || 0,
                i[e] += parseFloat(s[e]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++)
                    t = this._proportionallyResizeElements[e],
                    this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
                    t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
        },
        _renderProxy: function() {
            var t = this.element
              , e = this.options;
            this.elementOffset = t.offset(),
            this._helper ? (this.helper = this.helper || C("<div style='overflow:hidden;'></div>"),
            this._addClass(this.helper, this._helper),
            this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++e.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var n = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: n.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, e, i) {
                return C.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            },
            sw: function(t, e, i) {
                return C.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            },
            ne: function(t, e, i) {
                return C.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            },
            nw: function(t, e, i) {
                return C.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            }
        },
        _propagate: function(t, e) {
            C.ui.plugin.call(this, t, [e, this.ui()]),
            "resize" !== t && this._trigger(t, e, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    C.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = C(this).resizable("instance")
              , t = i.options
              , n = i._proportionallyResizeElements
              , s = n.length && /textarea/i.test(n[0].nodeName)
              , o = s && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height
              , a = s ? 0 : i.sizeDiff.width
              , s = {
                width: i.size.width - a,
                height: i.size.height - o
            }
              , a = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null
              , o = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(C.extend(s, o && a ? {
                top: o,
                left: a
            } : {}), {
                duration: t.animateDuration,
                easing: t.animateEasing,
                step: function() {
                    var t = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    n && n.length && C(n[0]).css({
                        width: t.width,
                        height: t.height
                    }),
                    i._updateCache(t),
                    i._propagate("resize", e)
                }
            })
        }
    }),
    C.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i, n, s = C(this).resizable("instance"), t = s.options, e = s.element, o = t.containment, a = o instanceof C ? o.get(0) : /parent/.test(o) ? e.parent().get(0) : o;
            a && (s.containerElement = C(a),
            /document/.test(o) || o === document ? (s.containerOffset = {
                left: 0,
                top: 0
            },
            s.containerPosition = {
                left: 0,
                top: 0
            },
            s.parentData = {
                element: C(document),
                left: 0,
                top: 0,
                width: C(document).width(),
                height: C(document).height() || document.body.parentNode.scrollHeight
            }) : (i = C(a),
            n = [],
            C(["Top", "Right", "Left", "Bottom"]).each(function(t, e) {
                n[t] = s._num(i.css("padding" + e))
            }),
            s.containerOffset = i.offset(),
            s.containerPosition = i.position(),
            s.containerSize = {
                height: i.innerHeight() - n[3],
                width: i.innerWidth() - n[1]
            },
            t = s.containerOffset,
            e = s.containerSize.height,
            o = s.containerSize.width,
            o = s._hasScroll(a, "left") ? a.scrollWidth : o,
            e = s._hasScroll(a) ? a.scrollHeight : e,
            s.parentData = {
                element: a,
                left: t.left,
                top: t.top,
                width: o,
                height: e
            }))
        },
        resize: function(t) {
            var e = C(this).resizable("instance")
              , i = e.options
              , n = e.containerOffset
              , s = e.position
              , o = e._aspectRatio || t.shiftKey
              , a = {
                top: 0,
                left: 0
            }
              , r = e.containerElement
              , t = !0;
            r[0] !== document && /static/.test(r.css("position")) && (a = n),
            s.left < (e._helper ? n.left : 0) && (e.size.width = e.size.width + (e._helper ? e.position.left - n.left : e.position.left - a.left),
            o && (e.size.height = e.size.width / e.aspectRatio,
            t = !1),
            e.position.left = i.helper ? n.left : 0),
            s.top < (e._helper ? n.top : 0) && (e.size.height = e.size.height + (e._helper ? e.position.top - n.top : e.position.top),
            o && (e.size.width = e.size.height * e.aspectRatio,
            t = !1),
            e.position.top = e._helper ? n.top : 0),
            i = e.containerElement.get(0) === e.element.parent().get(0),
            s = /relative|absolute/.test(e.containerElement.css("position")),
            i && s ? (e.offset.left = e.parentData.left + e.position.left,
            e.offset.top = e.parentData.top + e.position.top) : (e.offset.left = e.element.offset().left,
            e.offset.top = e.element.offset().top),
            s = Math.abs(e.sizeDiff.width + (e._helper ? e.offset.left - a.left : e.offset.left - n.left)),
            n = Math.abs(e.sizeDiff.height + (e._helper ? e.offset.top - a.top : e.offset.top - n.top)),
            s + e.size.width >= e.parentData.width && (e.size.width = e.parentData.width - s,
            o && (e.size.height = e.size.width / e.aspectRatio,
            t = !1)),
            n + e.size.height >= e.parentData.height && (e.size.height = e.parentData.height - n,
            o && (e.size.width = e.size.height * e.aspectRatio,
            t = !1)),
            t || (e.position.left = e.prevPosition.left,
            e.position.top = e.prevPosition.top,
            e.size.width = e.prevSize.width,
            e.size.height = e.prevSize.height)
        },
        stop: function() {
            var t = C(this).resizable("instance")
              , e = t.options
              , i = t.containerOffset
              , n = t.containerPosition
              , s = t.containerElement
              , o = C(t.helper)
              , a = o.offset()
              , r = o.outerWidth() - t.sizeDiff.width
              , o = o.outerHeight() - t.sizeDiff.height;
            t._helper && !e.animate && /relative/.test(s.css("position")) && C(this).css({
                left: a.left - n.left - i.left,
                width: r,
                height: o
            }),
            t._helper && !e.animate && /static/.test(s.css("position")) && C(this).css({
                left: a.left - n.left - i.left,
                width: r,
                height: o
            })
        }
    }),
    C.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = C(this).resizable("instance").options;
            C(t.alsoResize).each(function() {
                var t = C(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseFloat(t.width()),
                    height: parseFloat(t.height()),
                    left: parseFloat(t.css("left")),
                    top: parseFloat(t.css("top"))
                })
            })
        },
        resize: function(t, i) {
            var e = C(this).resizable("instance")
              , n = e.options
              , s = e.originalSize
              , o = e.originalPosition
              , a = {
                height: e.size.height - s.height || 0,
                width: e.size.width - s.width || 0,
                top: e.position.top - o.top || 0,
                left: e.position.left - o.left || 0
            };
            C(n.alsoResize).each(function() {
                var t = C(this)
                  , n = C(this).data("ui-resizable-alsoresize")
                  , s = {}
                  , e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                C.each(e, function(t, e) {
                    var i = (n[e] || 0) + (a[e] || 0);
                    i && 0 <= i && (s[e] = i || null)
                }),
                t.css(s)
            })
        },
        stop: function() {
            C(this).removeData("ui-resizable-alsoresize")
        }
    }),
    C.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = C(this).resizable("instance")
              , e = t.size;
            t.ghost = t.originalElement.clone(),
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: e.height,
                width: e.width,
                margin: 0,
                left: 0,
                top: 0
            }),
            t._addClass(t.ghost, "ui-resizable-ghost"),
            !1 !== C.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost),
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = C(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = C(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }),
    C.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t, e = C(this).resizable("instance"), i = e.options, n = e.size, s = e.originalSize, o = e.originalPosition, a = e.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, l = r[0] || 1, h = r[1] || 1, u = Math.round((n.width - s.width) / l) * l, c = Math.round((n.height - s.height) / h) * h, d = s.width + u, p = s.height + c, f = i.maxWidth && d > i.maxWidth, m = i.maxHeight && p > i.maxHeight, g = i.minWidth && i.minWidth > d, n = i.minHeight && i.minHeight > p;
            i.grid = r,
            g && (d += l),
            n && (p += h),
            f && (d -= l),
            m && (p -= h),
            /^(se|s|e)$/.test(a) ? (e.size.width = d,
            e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = d,
            e.size.height = p,
            e.position.top = o.top - c) : /^(sw)$/.test(a) ? (e.size.width = d,
            e.size.height = p,
            e.position.left = o.left - u) : ((p - h <= 0 || d - l <= 0) && (t = e._getPaddingPlusBorderDimensions(this)),
            0 < p - h ? (e.size.height = p,
            e.position.top = o.top - c) : (p = h - t.height,
            e.size.height = p,
            e.position.top = o.top + s.height - p),
            0 < d - l ? (e.size.width = d,
            e.position.left = o.left - u) : (d = l - t.width,
            e.size.width = d,
            e.position.left = o.left + s.width - d))
        }
    }),
    C.ui.resizable,
    C.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var e = C(this).css(t).offset().top;
                    e < 0 && C(this).css("top", t.top - e)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            },
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            },
            this.originalTitle = this.element.attr("title"),
            null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle),
            this.options.disabled && (this.options.disabled = !1),
            this._createWrapper(),
            this.element.show().removeAttr("title").appendTo(this.uiDialog),
            this._addClass("ui-dialog-content", "ui-widget-content"),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && C.fn.draggable && this._makeDraggable(),
            this.options.resizable && C.fn.resizable && this._makeResizable(),
            this._isOpen = !1,
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? C(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(),
            this._destroyOverlay(),
            this.element.removeUniqueId().css(this.originalCss).detach(),
            this.uiDialog.remove(),
            this.originalTitle && this.element.attr("title", this.originalTitle),
            (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: C.noop,
        enable: C.noop,
        close: function(t) {
            var e = this;
            this._isOpen && !1 !== this._trigger("beforeClose", t) && (this._isOpen = !1,
            this._focusedElement = null,
            this._destroyOverlay(),
            this._untrackInstance(),
            this.opener.filter(":focusable").trigger("focus").length || C.ui.safeBlur(C.ui.safeActiveElement(this.document[0])),
            this._hide(this.uiDialog, this.options.hide, function() {
                e._trigger("close", t)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, e) {
            var i = !1
              , n = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +C(this).css("z-index")
            }).get()
              , n = Math.max.apply(null, n);
            return n >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", n + 1),
            i = !0),
            i && !e && this._trigger("focus", t),
            i
        },
        open: function() {
            var t = this;
            return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0,
            this.opener = C(C.ui.safeActiveElement(this.document[0])),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
            this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(),
                t._trigger("focus")
            }),
            this._makeFocusTarget(),
            void this._trigger("open"))
        },
        _focusTabbable: function() {
            var t = this._focusedElement;
            (t = t || this.element.find("[autofocus]")).length || (t = this.element.find(":tabbable")),
            t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
            t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
            t.length || (t = this.uiDialog),
            t.eq(0).trigger("focus")
        },
        _keepFocus: function(t) {
            function e() {
                var t = C.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === t || C.contains(this.uiDialog[0], t) || this._focusTabbable()
            }
            t.preventDefault(),
            e.call(this),
            this._delay(e)
        },
        _createWrapper: function() {
            this.uiDialog = C("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()),
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"),
            this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === C.ui.keyCode.ESCAPE)
                        return t.preventDefault(),
                        void this.close(t);
                    var e, i, n;
                    t.keyCode !== C.ui.keyCode.TAB || t.isDefaultPrevented() || (e = this.uiDialog.find(":tabbable"),
                    i = e.filter(":first"),
                    n = e.filter(":last"),
                    t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() {
                        n.trigger("focus")
                    }),
                    t.preventDefault()) : (this._delay(function() {
                        i.trigger("focus")
                    }),
                    t.preventDefault()))
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }),
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = C("<div>"),
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"),
            this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    C(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }),
            this.uiDialogTitlebarClose = C("<button type='button'></button>").button({
                label: C("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar),
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
            this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(),
                    this.close(t)
                }
            }),
            t = C("<span>").uniqueId().prependTo(this.uiDialogTitlebar),
            this._addClass(t, "ui-dialog-title"),
            this._title(t),
            this.uiDialogTitlebar.prependTo(this.uiDialog),
            this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = C("<div>"),
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"),
            this.uiButtonSet = C("<div>").appendTo(this.uiDialogButtonPane),
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
            this._createButtons()
        },
        _createButtons: function() {
            var n = this
              , t = this.options.buttons;
            return this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            C.isEmptyObject(t) || C.isArray(t) && !t.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (C.each(t, function(t, e) {
                var i;
                e = C.isFunction(e) ? {
                    click: e,
                    text: t
                } : e,
                e = C.extend({
                    type: "button"
                }, e),
                i = e.click,
                t = {
                    icon: e.icon,
                    iconPosition: e.iconPosition,
                    showLabel: e.showLabel,
                    icons: e.icons,
                    text: e.text
                },
                delete e.click,
                delete e.icon,
                delete e.iconPosition,
                delete e.showLabel,
                delete e.icons,
                "boolean" == typeof e.text && delete e.text,
                C("<button></button>", e).button(t).appendTo(n.uiButtonSet).on("click", function() {
                    i.apply(n.element[0], arguments)
                })
            }),
            this._addClass(this.uiDialog, "ui-dialog-buttons"),
            void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function s(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var o = this
              , a = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(t, e) {
                    o._addClass(C(this), "ui-dialog-dragging"),
                    o._blockFrames(),
                    o._trigger("dragStart", t, s(e))
                },
                drag: function(t, e) {
                    o._trigger("drag", t, s(e))
                },
                stop: function(t, e) {
                    var i = e.offset.left - o.document.scrollLeft()
                      , n = e.offset.top - o.document.scrollTop();
                    a.position = {
                        my: "left top",
                        at: "left" + (0 <= i ? "+" : "") + i + " top" + (0 <= n ? "+" : "") + n,
                        of: o.window
                    },
                    o._removeClass(C(this), "ui-dialog-dragging"),
                    o._unblockFrames(),
                    o._trigger("dragStop", t, s(e))
                }
            })
        },
        _makeResizable: function() {
            function s(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var o = this
              , a = this.options
              , t = a.resizable
              , e = this.uiDialog.css("position")
              , t = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: a.maxWidth,
                maxHeight: a.maxHeight,
                minWidth: a.minWidth,
                minHeight: this._minHeight(),
                handles: t,
                start: function(t, e) {
                    o._addClass(C(this), "ui-dialog-resizing"),
                    o._blockFrames(),
                    o._trigger("resizeStart", t, s(e))
                },
                resize: function(t, e) {
                    o._trigger("resize", t, s(e))
                },
                stop: function(t, e) {
                    var i = o.uiDialog.offset()
                      , n = i.left - o.document.scrollLeft()
                      , i = i.top - o.document.scrollTop();
                    a.height = o.uiDialog.height(),
                    a.width = o.uiDialog.width(),
                    a.position = {
                        my: "left top",
                        at: "left" + (0 <= n ? "+" : "") + n + " top" + (0 <= i ? "+" : "") + i,
                        of: o.window
                    },
                    o._removeClass(C(this), "ui-dialog-resizing"),
                    o._unblockFrames(),
                    o._trigger("resizeStop", t, s(e))
                }
            }).css("position", e)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget(),
                    this._focusedElement = C(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance(),
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances()
              , e = C.inArray(this, t);
            -1 !== e && t.splice(e, 1)
        },
        _trackingInstances: function() {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [],
            this.document.data("ui-dialog-instances", t)),
            t
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            t || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this
              , n = !1
              , s = {};
            C.each(t, function(t, e) {
                i._setOption(t, e),
                t in i.sizeRelatedOptions && (n = !0),
                t in i.resizableRelatedOptions && (s[t] = e)
            }),
            n && (this._size(),
            this._position()),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function(t, e) {
            var i, n = this.uiDialog;
            "disabled" !== t && (this._super(t, e),
            "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === t && this._createButtons(),
            "closeText" === t && this.uiDialogTitlebarClose.button({
                label: C("<a>").text("" + this.options.closeText).html()
            }),
            "draggable" === t && ((i = n.is(":data(ui-draggable)")) && !e && n.draggable("destroy"),
            !i && e && this._makeDraggable()),
            "position" === t && this._position(),
            "resizable" === t && ((i = n.is(":data(ui-resizable)")) && !e && n.resizable("destroy"),
            i && "string" == typeof e && n.resizable("option", "handles", e),
            i || !1 === e || this._makeResizable()),
            "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, e, i, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }),
            n.minWidth > n.width && (n.width = n.minWidth),
            t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(),
            e = Math.max(0, n.minHeight - t),
            i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none",
            "auto" === n.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t)),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = C(this);
                return C("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return !!C(t.target).closest(".ui-dialog").length || !!C(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            var e;
            this.options.modal && (e = !0,
            this._delay(function() {
                e = !1
            }),
            this.document.data("ui-dialog-overlays") || this._on(this.document, {
                focusin: function(t) {
                    e || this._allowInteraction(t) || (t.preventDefault(),
                    this._trackingInstances()[0]._focusTabbable())
                }
            }),
            this.overlay = C("<div>").appendTo(this._appendTo()),
            this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
            this._on(this.overlay, {
                mousedown: "_keepFocus"
            }),
            this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1))
        },
        _destroyOverlay: function() {
            var t;
            this.options.modal && this.overlay && ((t = this.document.data("ui-dialog-overlays") - 1) ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"),
            this.document.removeData("ui-dialog-overlays")),
            this.overlay.remove(),
            this.overlay = null)
        }
    }),
    !1 !== C.uiBackCompat && C.widget("ui.dialog", C.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(),
            this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
            this._superApply(arguments)
        }
    }),
    C.ui.dialog,
    C.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t, e = this.options, i = e.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = C.isFunction(i) ? i : function(t) {
                return t.is(i)
            }
            ,
            this.proportions = function() {
                return arguments.length ? void (t = arguments[0]) : t = t || {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }
            ,
            this._addToManager(e.scope),
            e.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(t) {
            C.ui.ddmanager.droppables[t] = C.ui.ddmanager.droppables[t] || [],
            C.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function(t) {
            for (var e = 0; t.length > e; e++)
                t[e] === this && t.splice(e, 1)
        },
        _destroy: function() {
            var t = C.ui.ddmanager.droppables[this.options.scope];
            this._splice(t)
        },
        _setOption: function(t, e) {
            var i;
            "accept" === t ? this.accept = C.isFunction(e) ? e : function(t) {
                return t.is(e)
            }
            : "scope" === t && (i = C.ui.ddmanager.droppables[this.options.scope],
            this._splice(i),
            this._addToManager(e)),
            this._super(t, e)
        },
        _activate: function(t) {
            var e = C.ui.ddmanager.current;
            this._addActiveClass(),
            e && this._trigger("activate", t, this.ui(e))
        },
        _deactivate: function(t) {
            var e = C.ui.ddmanager.current;
            this._removeActiveClass(),
            e && this._trigger("deactivate", t, this.ui(e))
        },
        _over: function(t) {
            var e = C.ui.ddmanager.current;
            e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._addHoverClass(),
            this._trigger("over", t, this.ui(e)))
        },
        _out: function(t) {
            var e = C.ui.ddmanager.current;
            e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._removeHoverClass(),
            this._trigger("out", t, this.ui(e)))
        },
        _drop: function(e, t) {
            var i = t || C.ui.ddmanager.current
              , n = !1;
            return !(!i || (i.currentItem || i.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var t = C(this).droppable("instance");
                return t.options.greedy && !t.options.disabled && t.options.scope === i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && at(i, C.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance, e) ? !(n = !0) : void 0
            }),
            !n && (!!this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeActiveClass(),
            this._removeHoverClass(),
            this._trigger("drop", e, this.ui(i)),
            this.element)))
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    var ot, at = C.ui.intersect = function(t, e, i, n) {
        if (!e.offset)
            return !1;
        var s = (t.positionAbs || t.position.absolute).left + t.margins.left
          , o = (t.positionAbs || t.position.absolute).top + t.margins.top
          , a = s + t.helperProportions.width
          , r = o + t.helperProportions.height
          , l = e.offset.left
          , h = e.offset.top
          , u = l + e.proportions().width
          , c = h + e.proportions().height;
        switch (i) {
        case "fit":
            return l <= s && a <= u && h <= o && r <= c;
        case "intersect":
            return s + t.helperProportions.width / 2 > l && u > a - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > h && c > r - t.helperProportions.height / 2;
        case "pointer":
            return rt(n.pageY, h, e.proportions().height) && rt(n.pageX, l, e.proportions().width);
        case "touch":
            return (h <= o && o <= c || h <= r && r <= c || o < h && c < r) && (l <= s && s <= u || l <= a && a <= u || s < l && u < a);
        default:
            return !1
        }
    }
    ;
    function rt(t, e, i) {
        return e <= t && t < e + i
    }
    !(C.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(t, e) {
            var i, n, s = C.ui.ddmanager.droppables[t.options.scope] || [], o = e ? e.type : null, a = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            t: for (i = 0; s.length > i; i++)
                if (!(s[i].options.disabled || t && !s[i].accept.call(s[i].element[0], t.currentItem || t.element))) {
                    for (n = 0; a.length > n; n++)
                        if (a[n] === s[i].element[0]) {
                            s[i].proportions().height = 0;
                            continue t
                        }
                    s[i].visible = "none" !== s[i].element.css("display"),
                    s[i].visible && ("mousedown" === o && s[i]._activate.call(s[i], e),
                    s[i].offset = s[i].element.offset(),
                    s[i].proportions({
                        width: s[i].element[0].offsetWidth,
                        height: s[i].element[0].offsetHeight
                    }))
                }
        },
        drop: function(t, e) {
            var i = !1;
            return C.each((C.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && at(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0,
                this.isover = !1,
                this._deactivate.call(this, e)))
            }),
            i
        },
        dragStart: function(t, e) {
            t.element.parentsUntil("body").on("scroll.droppable", function() {
                t.options.refreshPositions || C.ui.ddmanager.prepareOffsets(t, e)
            })
        },
        drag: function(s, o) {
            s.options.refreshPositions && C.ui.ddmanager.prepareOffsets(s, o),
            C.each(C.ui.ddmanager.droppables[s.options.scope] || [], function() {
                var t, e, i, n;
                this.options.disabled || this.greedyChild || !this.visible || (n = !(i = at(s, this, this.options.tolerance, o)) && this.isover ? "isout" : i && !this.isover ? "isover" : null) && (this.options.greedy && (e = this.options.scope,
                (i = this.element.parents(":data(ui-droppable)").filter(function() {
                    return C(this).droppable("instance").options.scope === e
                })).length && ((t = C(i[0]).droppable("instance")).greedyChild = "isover" === n)),
                t && "isover" === n && (t.isover = !1,
                t.isout = !0,
                t._out.call(t, o)),
                this[n] = !0,
                this["isout" === n ? "isover" : "isout"] = !1,
                this["isover" === n ? "_over" : "_out"].call(this, o),
                t && "isout" === n && (t.isout = !1,
                t.isover = !0,
                t._over.call(t, o)))
            })
        },
        dragStop: function(t, e) {
            t.element.parentsUntil("body").off("scroll.droppable"),
            t.options.refreshPositions || C.ui.ddmanager.prepareOffsets(t, e)
        }
    }) !== C.uiBackCompat && C.widget("ui.droppable", C.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super(),
            this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super(),
            this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super(),
            this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super(),
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    }),
    C.ui.droppable,
    C.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(),
            this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }),
            this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
            this.valueDiv = C("<div>").appendTo(this.element),
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"),
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),
            this.valueDiv.remove()
        },
        value: function(t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t),
            void this._refreshValue())
        },
        _constrainedValue: function(t) {
            return void 0 === t && (t = this.options.value),
            this.indeterminate = !1 === t,
            "number" != typeof t && (t = 0),
            !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value,
            this._super(t),
            this.options.value = this._constrainedValue(e),
            this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)),
            this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value
              , e = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).width(e.toFixed(0) + "%"),
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate),
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv || (this.overlayDiv = C("<div>").appendTo(this.valueDiv),
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }),
            this.overlayDiv && (this.overlayDiv.remove(),
            this.overlayDiv = null)),
            this.oldValue !== t && (this.oldValue = t,
            this._trigger("change")),
            t === this.options.max && this._trigger("complete")
        }
    }),
    C.widget("ui.selectable", C.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var i = this;
            this._addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                i.elementPos = C(i.element[0]).offset(),
                i.selectees = C(i.options.filter, i.element[0]),
                i._addClass(i.selectees, "ui-selectee"),
                i.selectees.each(function() {
                    var t = C(this)
                      , e = t.offset()
                      , e = {
                        left: e.left - i.elementPos.left,
                        top: e.top - i.elementPos.top
                    };
                    C.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: e.left,
                        top: e.top,
                        right: e.left + t.outerWidth(),
                        bottom: e.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }
            ,
            this.refresh(),
            this._mouseInit(),
            this.helper = C("<div>"),
            this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"),
            this._mouseDestroy()
        },
        _mouseStart: function(i) {
            var n = this
              , t = this.options;
            this.opos = [i.pageX, i.pageY],
            this.elementPos = C(this.element[0]).offset(),
            this.options.disabled || (this.selectees = C(t.filter, this.element[0]),
            this._trigger("start", i),
            C(t.appendTo).append(this.helper),
            this.helper.css({
                left: i.pageX,
                top: i.pageY,
                width: 0,
                height: 0
            }),
            t.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function() {
                var t = C.data(this, "selectable-item");
                t.startselected = !0,
                i.metaKey || i.ctrlKey || (n._removeClass(t.$element, "ui-selected"),
                t.selected = !1,
                n._addClass(t.$element, "ui-unselecting"),
                t.unselecting = !0,
                n._trigger("unselecting", i, {
                    unselecting: t.element
                }))
            }),
            C(i.target).parents().addBack().each(function() {
                var t, e = C.data(this, "selectable-item");
                return e ? (t = !i.metaKey && !i.ctrlKey || !e.$element.hasClass("ui-selected"),
                n._removeClass(e.$element, t ? "ui-unselecting" : "ui-selected")._addClass(e.$element, t ? "ui-selecting" : "ui-unselecting"),
                e.unselecting = !t,
                e.selecting = t,
                (e.selected = t) ? n._trigger("selecting", i, {
                    selecting: e.element
                }) : n._trigger("unselecting", i, {
                    unselecting: e.element
                }),
                !1) : void 0
            }))
        },
        _mouseDrag: function(n) {
            if (this.dragged = !0,
            !this.options.disabled) {
                var t, s = this, o = this.options, a = this.opos[0], r = this.opos[1], l = n.pageX, h = n.pageY;
                return l < a && (t = l,
                l = a,
                a = t),
                h < r && (t = h,
                h = r,
                r = t),
                this.helper.css({
                    left: a,
                    top: r,
                    width: l - a,
                    height: h - r
                }),
                this.selectees.each(function() {
                    var t = C.data(this, "selectable-item")
                      , e = !1
                      , i = {};
                    t && t.element !== s.element[0] && (i.left = t.left + s.elementPos.left,
                    i.right = t.right + s.elementPos.left,
                    i.top = t.top + s.elementPos.top,
                    i.bottom = t.bottom + s.elementPos.top,
                    "touch" === o.tolerance ? e = !(i.left > l || a > i.right || i.top > h || r > i.bottom) : "fit" === o.tolerance && (e = i.left > a && l > i.right && i.top > r && h > i.bottom),
                    e ? (t.selected && (s._removeClass(t.$element, "ui-selected"),
                    t.selected = !1),
                    t.unselecting && (s._removeClass(t.$element, "ui-unselecting"),
                    t.unselecting = !1),
                    t.selecting || (s._addClass(t.$element, "ui-selecting"),
                    t.selecting = !0,
                    s._trigger("selecting", n, {
                        selecting: t.element
                    }))) : (t.selecting && ((n.metaKey || n.ctrlKey) && t.startselected ? (s._removeClass(t.$element, "ui-selecting"),
                    t.selecting = !1,
                    s._addClass(t.$element, "ui-selected"),
                    t.selected = !0) : (s._removeClass(t.$element, "ui-selecting"),
                    t.selecting = !1,
                    t.startselected && (s._addClass(t.$element, "ui-unselecting"),
                    t.unselecting = !0),
                    s._trigger("unselecting", n, {
                        unselecting: t.element
                    }))),
                    t.selected && (n.metaKey || n.ctrlKey || t.startselected || (s._removeClass(t.$element, "ui-selected"),
                    t.selected = !1,
                    s._addClass(t.$element, "ui-unselecting"),
                    t.unselecting = !0,
                    s._trigger("unselecting", n, {
                        unselecting: t.element
                    })))))
                }),
                !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1,
            C(".ui-unselecting", this.element[0]).each(function() {
                var t = C.data(this, "selectable-item");
                i._removeClass(t.$element, "ui-unselecting"),
                t.unselecting = !1,
                t.startselected = !1,
                i._trigger("unselected", e, {
                    unselected: t.element
                })
            }),
            C(".ui-selecting", this.element[0]).each(function() {
                var t = C.data(this, "selectable-item");
                i._removeClass(t.$element, "ui-selecting")._addClass(t.$element, "ui-selected"),
                t.selecting = !1,
                t.selected = !0,
                t.startselected = !0,
                i._trigger("selected", e, {
                    selected: t.element
                })
            }),
            this._trigger("stop", e),
            this.helper.remove(),
            !1
        }
    }),
    C.widget("ui.selectmenu", [C.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var t = this.element.uniqueId().attr("id");
            this.ids = {
                element: t,
                button: t + "-button",
                menu: t + "-menu"
            },
            this._drawButton(),
            this._drawMenu(),
            this._bindFormResetHandler(),
            this._rendered = !1,
            this.menuItems = C()
        },
        _drawButton: function() {
            var t, e = this, i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button),
            this._on(this.labels, {
                click: function(t) {
                    this.button.focus(),
                    t.preventDefault()
                }
            }),
            this.element.hide(),
            this.button = C("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element),
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"),
            t = C("<span>").appendTo(this.button),
            this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button),
            this.buttonItem = this._renderButtonItem(i).appendTo(this.button),
            !1 !== this.options.width && this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one("focusin", function() {
                e._rendered || e._refreshMenu()
            })
        },
        _drawMenu: function() {
            var i = this;
            this.menu = C("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }),
            this.menuWrap = C("<div>").append(this.menu),
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
            this.menuWrap.appendTo(this._appendTo()),
            this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(t, e) {
                    t.preventDefault(),
                    i._setSelection(),
                    i._select(e.item.data("ui-selectmenu-item"), t)
                },
                focus: function(t, e) {
                    e = e.item.data("ui-selectmenu-item");
                    null != i.focusIndex && e.index !== i.focusIndex && (i._trigger("focus", t, {
                        item: e
                    }),
                    i.isOpen || i._select(e, t)),
                    i.focusIndex = e.index,
                    i.button.attr("aria-activedescendant", i.menuItems.eq(e.index).attr("id"))
                }
            }).menu("instance"),
            this.menuInstance._off(this.menu, "mouseleave"),
            this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }
            ,
            this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu(),
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})),
            null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function() {
            var t = this.element.find("option");
            this.menu.empty(),
            this._parseOptions(t),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),
            this._rendered = !0,
            t.length && (t = this._getSelectedItem(),
            this.menuInstance.focus(null, t),
            this._setAria(t.data("ui-selectmenu-item")),
            this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"),
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(),
            this.menuItems.length && (this.isOpen = !0,
            this._toggleAttr(),
            this._resizeMenu(),
            this._position(),
            this._on(this.document, this._documentClick),
            this._trigger("open", t)))
        },
        _position: function() {
            this.menuWrap.position(C.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(t) {
            this.isOpen && (this.isOpen = !1,
            this._toggleAttr(),
            this.range = null,
            this._off(this.document),
            this._trigger("close", t))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(t) {
            var e = C("<span>");
            return this._setText(e, t.label),
            this._addClass(e, "ui-selectmenu-text"),
            e
        },
        _renderMenu: function(n, t) {
            var s = this
              , o = "";
            C.each(t, function(t, e) {
                var i;
                e.optgroup !== o && (i = C("<li>", {
                    text: e.optgroup
                }),
                s._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")),
                i.appendTo(n),
                o = e.optgroup),
                s._renderItemData(n, e)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e)
        },
        _renderItem: function(t, e) {
            var i = C("<li>")
              , n = C("<div>", {
                title: e.element.attr("title")
            });
            return e.disabled && this._addClass(i, null, "ui-state-disabled"),
            this._setText(n, e.label),
            i.append(n).appendTo(t)
        },
        _setText: function(t, e) {
            e ? t.text(e) : t.html("&#160;")
        },
        _move: function(t, e) {
            var i, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"),
            n += ":not(.ui-state-disabled)"),
            (n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, n)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(t) {
            this[this.isOpen ? "close" : "open"](t)
        },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(),
            t.addRange(this.range)) : this.range.select(),
            this.button.focus())
        },
        _documentClick: {
            mousedown: function(t) {
                this.isOpen && (C(t.target).closest(".ui-selectmenu-menu, #" + C.ui.escapeSelector(this.ids.button)).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
            },
            click: function(t) {
                this._setSelection(),
                this._toggle(t)
            },
            keydown: function(t) {
                var e = !0;
                switch (t.keyCode) {
                case C.ui.keyCode.TAB:
                case C.ui.keyCode.ESCAPE:
                    this.close(t),
                    e = !1;
                    break;
                case C.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(t);
                    break;
                case C.ui.keyCode.UP:
                    t.altKey ? this._toggle(t) : this._move("prev", t);
                    break;
                case C.ui.keyCode.DOWN:
                    t.altKey ? this._toggle(t) : this._move("next", t);
                    break;
                case C.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                    break;
                case C.ui.keyCode.LEFT:
                    this._move("prev", t);
                    break;
                case C.ui.keyCode.RIGHT:
                    this._move("next", t);
                    break;
                case C.ui.keyCode.HOME:
                case C.ui.keyCode.PAGE_UP:
                    this._move("first", t);
                    break;
                case C.ui.keyCode.END:
                case C.ui.keyCode.PAGE_DOWN:
                    this._move("last", t);
                    break;
                default:
                    this.menu.trigger(t),
                    e = !1
                }
                e && t.preventDefault()
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index,
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)),
            this._setAria(t),
            this._trigger("select", e, {
                item: t
            }),
            t.index !== i && this._trigger("change", e, {
                item: t
            }),
            this.close(e)
        },
        _setAria: function(t) {
            t = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": t,
                "aria-activedescendant": t
            }),
            this.menu.attr("aria-activedescendant", t)
        },
        _setOption: function(t, e) {
            var i;
            "icons" === t && (i = this.button.find("span.ui-icon"),
            this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)),
            this._super(t, e),
            "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
            "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.menuInstance.option("disabled", t),
            this.button.attr("aria-disabled", t),
            this._toggleClass(this.button, null, "ui-state-disabled", t),
            this.element.prop("disabled", t),
            t ? (this.button.attr("tabindex", -1),
            this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return (t = t && (t.jquery || t.nodeType ? C(t) : this.document.find(t).eq(0))) && t[0] || (t = this.element.closest(".ui-front, dialog")),
            t.length || (t = this.document[0].body),
            t
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen),
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen),
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var t = this.options.width;
            return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(),
            this.element.hide()),
            void this.button.outerWidth(t))
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"),
            t
        },
        _parseOptions: function(t) {
            var i = this
              , n = [];
            t.each(function(t, e) {
                n.push(i._parseOption(C(e), t))
            }),
            this.items = n
        },
        _parseOption: function(t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler(),
            this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.labels.attr("for", this.ids.element)
        }
    }]),
    C.widget("ui.slider", C.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"),
            this._refresh(),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var t, e = this.options, i = this.element.find(".ui-slider-handle"), n = [], s = e.values && e.values.length || 1;
            for (i.length > s && (i.slice(s).remove(),
            i = i.slice(0, s)),
            t = i.length; t < s; t++)
                n.push("<span tabindex='0'></span>");
            this.handles = i.add(C(n.join("")).appendTo(this.element)),
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
            this.handle = this.handles.eq(0),
            this.handles.each(function(t) {
                C(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var t = this.options;
            t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : C.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = C("<div>").appendTo(this.element),
            this._addClass(this.range, "ui-slider-range")),
            "min" !== t.range && "max" !== t.range || this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range && this.range.remove(),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i, n, s, o, e, a, r = this, l = this.options;
            return !l.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            a = {
                x: t.pageX,
                y: t.pageY
            },
            i = this._normValueFromMouse(a),
            n = this._valueMax() - this._valueMin() + 1,
            this.handles.each(function(t) {
                var e = Math.abs(i - r.values(t));
                (e < n || n === e && (t === r._lastChangedValue || r.values(t) === l.min)) && (n = e,
                s = C(this),
                o = t)
            }),
            !1 !== this._start(t, o) && (this._mouseSliding = !0,
            this._handleIndex = o,
            this._addClass(s, null, "ui-state-active"),
            s.trigger("focus"),
            e = s.offset(),
            a = !C(t.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = a ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - e.left - s.width() / 2,
                top: t.pageY - e.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(t, o, i),
            this._animateOff = !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }
              , e = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, e),
            !1
        },
        _mouseStop: function(t) {
            return this._removeClass(this.handles, null, "ui-state-active"),
            this._mouseSliding = !1,
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, t = "horizontal" === this.orientation ? (e = this.elementSize.width,
            t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height,
            t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = t / e;
            return 1 < t && (t = 1),
            t < 0 && (t = 0),
            "vertical" === this.orientation && (t = 1 - t),
            e = this._valueMax() - this._valueMin(),
            e = this._valueMin() + t * e,
            this._trimAlignValue(e)
        },
        _uiHash: function(t, e, i) {
            var n = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t),
            n.values = i || this.values()),
            n
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function(t, e, i) {
            var n, s = this.value(), o = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1),
            s = this.values(e),
            2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
            o[e] = i),
            i === s || !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
        },
        _stop: function(t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e,
            this._trigger("change", t, this._uiHash(e)))
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t),
            this._refreshValue(),
            void this._change(null, 0)) : this._value()
        },
        values: function(t, e) {
            var i, n, s;
            if (1 < arguments.length)
                return this.options.values[t] = this._trimAlignValue(e),
                this._refreshValue(),
                void this._change(null, t);
            if (!arguments.length)
                return this._values();
            if (!C.isArray(t))
                return this._hasMultipleValues() ? this._values(t) : this.value();
            for (i = this.options.values,
            n = t,
            s = 0; i.length > s; s += 1)
                i[s] = this._trimAlignValue(n[s]),
                this._change(null, s);
            this._refreshValue()
        },
        _setOption: function(t, e) {
            var i, n = 0;
            switch ("range" === t && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            C.isArray(this.options.values) && (n = this.options.values.length),
            this._super(t, e),
            t) {
            case "orientation":
                this._detectOrientation(),
                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.options.range && this._refreshRange(e),
                this.handles.css("horizontal" === e ? "bottom" : "left", "");
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                i = n - 1; 0 <= i; i--)
                    this._change(null, i);
                this._animateOff = !1;
                break;
            case "step":
            case "min":
            case "max":
                this._animateOff = !0,
                this._calculateNewMax(),
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function() {
            var t = this.options.value;
            return this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, n;
            if (arguments.length)
                return e = this.options.values[t],
                this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(),
                n = 0; i.length > n; n += 1)
                    i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t)
                return this._valueMin();
            if (t >= this._valueMax())
                return this._valueMax();
            var e = 0 < this.options.step ? this.options.step : 1
              , i = (t - this._valueMin()) % e
              , t = t - i;
            return 2 * Math.abs(i) >= e && (t += 0 < i ? e : -e),
            parseFloat(t.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max
              , e = this._valueMin()
              , i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i),
            this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
            t
        },
        _precisionOf: function(t) {
            var e = "" + t
              , t = e.indexOf(".");
            return -1 === t ? 0 : e.length - t - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }),
            "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var e, i, t, n, s, o = this.options.range, a = this.options, r = this, l = !this._animateOff && a.animate, h = {};
            this._hasMultipleValues() ? this.handles.each(function(t) {
                i = (r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100,
                h["horizontal" === r.orientation ? "left" : "bottom"] = i + "%",
                C(this).stop(1, 1)[l ? "animate" : "css"](h, a.animate),
                !0 === r.options.range && ("horizontal" === r.orientation ? (0 === t && r.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: i + "%"
                }, a.animate),
                1 === t && r.range[l ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === t && r.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: i + "%"
                }, a.animate),
                1 === t && r.range[l ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))),
                e = i
            }) : (t = this.value(),
            n = this._valueMin(),
            s = this._valueMax(),
            i = s !== n ? (t - n) / (s - n) * 100 : 0,
            h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
            this.handle.stop(1, 1)[l ? "animate" : "css"](h, a.animate),
            "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: i + "%"
            }, a.animate),
            "max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: 100 - i + "%"
            }, a.animate),
            "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: i + "%"
            }, a.animate),
            "max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: 100 - i + "%"
            }, a.animate))
        },
        _handleEvents: {
            keydown: function(t) {
                var e, i, n, s = C(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                case C.ui.keyCode.HOME:
                case C.ui.keyCode.END:
                case C.ui.keyCode.PAGE_UP:
                case C.ui.keyCode.PAGE_DOWN:
                case C.ui.keyCode.UP:
                case C.ui.keyCode.RIGHT:
                case C.ui.keyCode.DOWN:
                case C.ui.keyCode.LEFT:
                    if (t.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    this._addClass(C(t.target), null, "ui-state-active"),
                    !1 === this._start(t, s)))
                        return
                }
                switch (n = this.options.step,
                e = i = this._hasMultipleValues() ? this.values(s) : this.value(),
                t.keyCode) {
                case C.ui.keyCode.HOME:
                    i = this._valueMin();
                    break;
                case C.ui.keyCode.END:
                    i = this._valueMax();
                    break;
                case C.ui.keyCode.PAGE_UP:
                    i = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case C.ui.keyCode.PAGE_DOWN:
                    i = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case C.ui.keyCode.UP:
                case C.ui.keyCode.RIGHT:
                    if (e === this._valueMax())
                        return;
                    i = this._trimAlignValue(e + n);
                    break;
                case C.ui.keyCode.DOWN:
                case C.ui.keyCode.LEFT:
                    if (e === this._valueMin())
                        return;
                    i = this._trimAlignValue(e - n)
                }
                this._slide(t, s, i)
            },
            keyup: function(t) {
                var e = C(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(t, e),
                this._change(t, e),
                this._removeClass(C(t.target), null, "ui-state-active"))
            }
        }
    }),
    C.widget("ui.sortable", C.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return e <= t && t < e + i
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function() {
            this.containerCache = {},
            this._addClass("ui-sortable"),
            this.refresh(),
            this.offset = this.element.offset(),
            this._mouseInit(),
            this._setHandleClassName(),
            this.ready = !0
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var t = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
            C.each(this.items, function() {
                t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var t = this.items.length - 1; 0 <= t; t--)
                this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(t, e) {
            var i = null
              , n = !1
              , s = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t),
            C(t.target).parents().each(function() {
                return C.data(this, s.widgetName + "-item") === s ? (i = C(this),
                !1) : void 0
            }),
            C.data(t.target, s.widgetName + "-item") === s && (i = C(t.target)),
            !!i && (!(this.options.handle && !e && (C(this.options.handle, i).find("*").addBack().each(function() {
                this === t.target && (n = !0)
            }),
            !n)) && (this.currentItem = i,
            this._removeCurrentsFromItems(),
            !0))))
        },
        _mouseStart: function(t, e, i) {
            var n, s, o = this.options;
            if ((this.currentContainer = this).refreshPositions(),
            this.helper = this._createHelper(t),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            C.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            o.containment && this._setContainment(),
            o.cursor && "auto" !== o.cursor && (s = this.document.find("body"),
            this.storedCursor = s.css("cursor"),
            s.css("cursor", o.cursor),
            this.storedStylesheet = C("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)),
            o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", o.opacity)),
            o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", o.zIndex)),
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", t, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !i)
                for (n = this.containers.length - 1; 0 <= n; n--)
                    this.containers[n]._trigger("activate", t, this._uiHash(this));
            return C.ui.ddmanager && (C.ui.ddmanager.current = this),
            C.ui.ddmanager && !o.dropBehaviour && C.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this._addClass(this.helper, "ui-sortable-helper"),
            this._mouseDrag(t),
            !0
        },
        _mouseDrag: function(t) {
            var e, i, n, s, o = this.options, a = !1;
            for (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)),
            t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))),
            !1 !== a && C.ui.ddmanager && !o.dropBehaviour && C.ui.ddmanager.prepareOffsets(this, t)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            e = this.items.length - 1; 0 <= e; e--)
                if (n = (i = this.items[e]).item[0],
                (s = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === s ? "next" : "prev"]()[0] !== n && !C.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !C.contains(this.element[0], n))) {
                    if (this.direction = 1 === s ? "down" : "up",
                    "pointer" !== this.options.tolerance && !this._intersectsWithSides(i))
                        break;
                    this._rearrange(t, i),
                    this._trigger("change", t, this._uiHash());
                    break
                }
            return this._contactContainers(t),
            C.ui.ddmanager && C.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, e) {
            var i, n, s, o;
            if (t)
                return C.ui.ddmanager && !this.options.dropBehaviour && C.ui.ddmanager.drop(this, t),
                this.options.revert ? (n = (i = this).placeholder.offset(),
                o = {},
                (s = this.options.axis) && "x" !== s || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                s && "y" !== s || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                this.reverting = !0,
                C(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                    i._clear(t)
                })) : this._clear(t, e),
                !1
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new C.Event("mouseup",{
                    target: null
                })),
                "original" === this.options.helper ? (this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var t = this.containers.length - 1; 0 <= t; t--)
                    this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)),
                    this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            C.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? C(this.domPosition.prev).after(this.currentItem) : C(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(e) {
            var t = this._getItemsAsjQuery(e && e.connected)
              , i = [];
            return e = e || {},
            C(t).each(function() {
                var t = (C(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                t && i.push((e.key || t[1] + "[]") + "=" + (e.key && e.expression ? t[1] : t[2]))
            }),
            !i.length && e.key && i.push(e.key + "="),
            i.join("&")
        },
        toArray: function(t) {
            var e = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            e.each(function() {
                i.push(C(t.item || this).attr(t.attribute || "id") || "")
            }),
            i
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left
              , i = e + this.helperProportions.width
              , n = this.positionAbs.top
              , s = n + this.helperProportions.height
              , o = t.left
              , a = o + t.width
              , r = t.top
              , l = r + t.height
              , h = this.offset.click.top
              , u = this.offset.click.left
              , h = "x" === this.options.axis || r < n + h && n + h < l
              , u = "y" === this.options.axis || o < e + u && e + u < a
              , u = h && u;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > r && l > s - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height)
              , t = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !!(e && t) && (e = this._getDragVerticalDirection(),
            t = this._getDragHorizontalDirection(),
            this.floating ? "right" === t || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height)
              , i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width)
              , n = this._getDragVerticalDirection()
              , t = this._getDragHorizontalDirection();
            return this.floating && t ? "right" === t && i || "left" === t && !i : n && ("down" === n && e || "up" === n && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != t && (0 < t ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != t && (0 < t ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(t) {
            function e() {
                a.push(this)
            }
            var i, n, s, o, a = [], r = [], l = this._connectWith();
            if (l && t)
                for (i = l.length - 1; 0 <= i; i--)
                    for (n = (s = C(l[i], this.document[0])).length - 1; 0 <= n; n--)
                        (o = C.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && r.push([C.isFunction(o.options.items) ? o.options.items.call(o.element) : C(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (r.push([C.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : C(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            i = r.length - 1; 0 <= i; i--)
                r[i][0].each(e);
            return C(a)
        },
        _removeCurrentsFromItems: function() {
            var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = C.grep(this.items, function(t) {
                for (var e = 0; i.length > e; e++)
                    if (i[e] === t.item[0])
                        return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [],
            this.containers = [this];
            var e, i, n, s, o, a, r, l, h = this.items, u = [[C.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : C(this.options.items, this.element), this]], c = this._connectWith();
            if (c && this.ready)
                for (e = c.length - 1; 0 <= e; e--)
                    for (i = (n = C(c[e], this.document[0])).length - 1; 0 <= i; i--)
                        (s = C.data(n[i], this.widgetFullName)) && s !== this && !s.options.disabled && (u.push([C.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
                            item: this.currentItem
                        }) : C(s.options.items, s.element), s]),
                        this.containers.push(s));
            for (e = u.length - 1; 0 <= e; e--)
                for (o = u[e][1],
                i = 0,
                l = (a = u[e][0]).length; i < l; i++)
                    (r = C(a[i])).data(this.widgetName + "-item", o),
                    h.push({
                        item: r,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(t) {
            var e, i, n, s;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)),
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
            e = this.items.length - 1; 0 <= e; e--)
                (i = this.items[e]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? C(this.options.toleranceElement, i.item) : i.item,
                t || (i.width = n.outerWidth(),
                i.height = n.outerHeight()),
                s = n.offset(),
                i.left = s.left,
                i.top = s.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (e = this.containers.length - 1; 0 <= e; e--)
                    s = this.containers[e].element.offset(),
                    this.containers[e].containerCache.left = s.left,
                    this.containers[e].containerCache.top = s.top,
                    this.containers[e].containerCache.width = this.containers[e].element.outerWidth(),
                    this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
            return this
        },
        _createPlaceholder: function(i) {
            var n, s = (i = i || this).options;
            s.placeholder && s.placeholder.constructor !== String || (n = s.placeholder,
            s.placeholder = {
                element: function() {
                    var t = i.currentItem[0].nodeName.toLowerCase()
                      , e = C("<" + t + ">", i.document[0]);
                    return i._addClass(e, "ui-sortable-placeholder", n || i.currentItem[0].className)._removeClass(e, "ui-sortable-helper"),
                    "tbody" === t ? i._createTrPlaceholder(i.currentItem.find("tr").eq(0), C("<tr>", i.document[0]).appendTo(e)) : "tr" === t ? i._createTrPlaceholder(i.currentItem, e) : "img" === t && e.attr("src", i.currentItem.attr("src")),
                    n || e.css("visibility", "hidden"),
                    e
                },
                update: function(t, e) {
                    n && !s.forcePlaceholderSize || (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)),
                    e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            i.placeholder = C(s.placeholder.element.call(i.element, i.currentItem)),
            i.currentItem.after(i.placeholder),
            s.placeholder.update(i, i.placeholder)
        },
        _createTrPlaceholder: function(t, e) {
            var i = this;
            t.children().each(function() {
                C("<td>&#160;</td>", i.document[0]).attr("colspan", C(this).attr("colspan") || 1).appendTo(e)
            })
        },
        _contactContainers: function(t) {
            for (var e, i, n, s, o, a, r, l, h, u = null, c = null, d = this.containers.length - 1; 0 <= d; d--)
                if (!C.contains(this.currentItem[0], this.containers[d].element[0]))
                    if (this._intersectsWith(this.containers[d].containerCache)) {
                        if (u && C.contains(this.containers[d].element[0], u.element[0]))
                            continue;
                        u = this.containers[d],
                        c = d
                    } else
                        this.containers[d].containerCache.over && (this.containers[d]._trigger("out", t, this._uiHash(this)),
                        this.containers[d].containerCache.over = 0);
            if (u)
                if (1 === this.containers.length)
                    this.containers[c].containerCache.over || (this.containers[c]._trigger("over", t, this._uiHash(this)),
                    this.containers[c].containerCache.over = 1);
                else {
                    for (i = 1e4,
                    n = null,
                    s = (l = u.floating || this._isFloating(this.currentItem)) ? "left" : "top",
                    o = l ? "width" : "height",
                    h = l ? "pageX" : "pageY",
                    e = this.items.length - 1; 0 <= e; e--)
                        C.contains(this.containers[c].element[0], this.items[e].item[0]) && this.items[e].item[0] !== this.currentItem[0] && (a = this.items[e].item.offset()[s],
                        r = !1,
                        t[h] - a > this.items[e][o] / 2 && (r = !0),
                        i > Math.abs(t[h] - a) && (i = Math.abs(t[h] - a),
                        n = this.items[e],
                        this.direction = r ? "up" : "down"));
                    (n || this.options.dropOnEmpty) && (this.currentContainer !== this.containers[c] ? (n ? this._rearrange(t, n, null, !0) : this._rearrange(t, null, this.containers[c].element, !0),
                    this._trigger("change", t, this._uiHash()),
                    this.containers[c]._trigger("change", t, this._uiHash(this)),
                    this.currentContainer = this.containers[c],
                    this.options.placeholder.update(this.currentContainer, this.placeholder),
                    this.containers[c]._trigger("over", t, this._uiHash(this)),
                    this.containers[c].containerCache.over = 1) : this.currentContainer.containerCache.over || (this.containers[c]._trigger("over", t, this._uiHash()),
                    this.currentContainer.containerCache.over = 1))
                }
        },
        _createHelper: function(t) {
            var e = this.options
              , t = C.isFunction(e.helper) ? C(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
            return t.parents("body").length || C("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(t[0]),
            t[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            t[0].style.width && !e.forceHelperSize || t.width(this.currentItem.width()),
            t[0].style.height && !e.forceHelperSize || t.height(this.currentItem.height()),
            t
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            C.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && C.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && C.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition)
                return {
                    top: 0,
                    left: 0
                };
            var t = this.currentItem.position();
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, e, i = this.options;
            "parent" === i.containment && (i.containment = this.helper[0].parentNode),
            "document" !== i.containment && "window" !== i.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === i.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === i.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(i.containment) || (t = C(i.containment)[0],
            e = C(i.containment).offset(),
            i = "hidden" !== C(t).css("overflow"),
            this.containment = [e.left + (parseInt(C(t).css("borderLeftWidth"), 10) || 0) + (parseInt(C(t).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(C(t).css("borderTopWidth"), 10) || 0) + (parseInt(C(t).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(C(t).css("borderLeftWidth"), 10) || 0) - (parseInt(C(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(C(t).css("borderTopWidth"), 10) || 0) - (parseInt(C(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, e) {
            e = e || this.position;
            var i = "absolute" === t ? 1 : -1
              , n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && C.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , t = /(html|body)/i.test(n[0].tagName);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : t ? 0 : n.scrollTop()) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : t ? 0 : n.scrollLeft()) * i
            }
        },
        _generatePosition: function(t) {
            var e = this.options
              , i = t.pageX
              , n = t.pageY
              , s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && C.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , o = /(html|body)/i.test(s[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (i = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] && (n = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] && (i = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] && (n = this.containment[3] + this.offset.click.top)),
            e.grid && (t = this.originalPageY + Math.round((n - this.originalPageY) / e.grid[1]) * e.grid[1],
            n = !this.containment || t - this.offset.click.top >= this.containment[1] && t - this.offset.click.top <= this.containment[3] ? t : t - this.offset.click.top >= this.containment[1] ? t - e.grid[1] : t + e.grid[1],
            t = this.originalPageX + Math.round((i - this.originalPageX) / e.grid[0]) * e.grid[0],
            i = !this.containment || t - this.offset.click.left >= this.containment[0] && t - this.offset.click.left <= this.containment[2] ? t : t - this.offset.click.left >= this.containment[0] ? t - e.grid[0] : t + e.grid[0])),
            {
                top: n - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()),
                left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function() {
                s === this.counter && this.refreshPositions(!n)
            })
        },
        _clear: function(t, e) {
            function i(e, i, n) {
                return function(t) {
                    n._trigger(e, t, i._uiHash(i))
                }
            }
            this.reverting = !1;
            var n, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS)
                    "auto" !== this._storedCSS[n] && "static" !== this._storedCSS[n] || (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }),
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }),
            this !== this.currentContainer && (e || (s.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }),
            s.push(function(e) {
                return function(t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            s.push(function(e) {
                return function(t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            n = this.containers.length - 1; 0 <= n; n--)
                e || s.push(i("deactivate", this, this.containers[n])),
                this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])),
                this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
            this.dragging = !1,
            e || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null),
            !e) {
                for (n = 0; s.length > n; n++)
                    s[n].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !this.cancelHelperRemoval
        },
        _trigger: function() {
            !1 === C.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(t) {
            var e = t || this;
            return {
                helper: e.helper,
                placeholder: e.placeholder || C([]),
                position: e.position,
                originalPosition: e.originalPosition,
                offset: e.positionAbs,
                item: e.currentItem,
                sender: t ? t.element : null
            }
        }
    }),
    C.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            "" !== this.value() && this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var n = this._super()
              , s = this.element;
            return C.each(["min", "max", "step"], function(t, e) {
                var i = s.attr(e);
                null != i && i.length && (n[e] = i)
            }),
            n
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(),
                this._refresh(),
                void (this.previous !== this.element.val() && this._trigger("change", t)))
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t))
                        return !1;
                    this._spin((0 < e ? 1 : -1) * this.options.step, t),
                    clearTimeout(this.mousewheelTimer),
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t)
                    }, 100),
                    t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function e() {
                    this.element[0] === C.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"),
                    this.previous = i,
                    this._delay(function() {
                        this.previous = i
                    }))
                }
                var i = this.element[0] === C.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();
                t.preventDefault(),
                e.call(this),
                this.cancelBlur = !0,
                this._delay(function() {
                    delete this.cancelBlur,
                    e.call(this)
                }),
                !1 !== this._start(t) && this._repeat(null, C(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                return C(t.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(t) && void this._repeat(null, C(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function() {
            this._enhance(),
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"),
            this._addClass("ui-spinner-input"),
            this.element.attr("role", "spinbutton"),
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            }),
            this._removeClass(this.buttons, "ui-corner-all"),
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"),
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"),
            this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }),
            this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }),
            this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function(t) {
            var e = this.options
              , i = C.ui.keyCode;
            switch (t.keyCode) {
            case i.UP:
                return this._repeat(null, 1, t),
                !0;
            case i.DOWN:
                return this._repeat(null, -1, t),
                !0;
            case i.PAGE_UP:
                return this._repeat(null, e.page, t),
                !0;
            case i.PAGE_DOWN:
                return this._repeat(null, -e.page, t),
                !0
            }
            return !1
        },
        _start: function(t) {
            return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1),
            this.spinning = !0)
        },
        _repeat: function(t, e, i) {
            t = t || 500,
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                this._repeat(40, e, i)
            }, t),
            this._spin(e * this.options.step, i)
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1),
            i = this._adjustValue(i + t * this._increment(this.counter)),
            this.spinning && !1 === this._trigger("spin", e, {
                value: i
            }) || (this._value(i),
            this.counter++)
        },
        _increment: function(t) {
            var e = this.options.incremental;
            return e ? C.isFunction(e) ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
            t
        },
        _precisionOf: function(t) {
            var e = "" + t
              , t = e.indexOf(".");
            return -1 === t ? 0 : e.length - t - 1
        },
        _adjustValue: function(t) {
            var e = this.options
              , i = null !== e.min ? e.min : 0
              , n = t - i;
            return t = i + Math.round(n / e.step) * e.step,
            t = parseFloat(t.toFixed(this._precision())),
            null !== e.max && t > e.max ? e.max : null !== e.min && e.min > t ? e.min : t
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            this.counter = 0,
            this.spinning = !1,
            this._trigger("stop", t))
        },
        _setOption: function(t, e) {
            var i;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()),
            this.options[t] = e,
            void this.element.val(this._format(i))) : ("max" !== t && "min" !== t && "step" !== t || "string" != typeof e || (e = this._parse(e)),
            "icons" === t && (i = this.buttons.first().find(".ui-icon"),
            this._removeClass(i, null, this.options.icons.up),
            this._addClass(i, null, e.up),
            i = this.buttons.last().find(".ui-icon"),
            this._removeClass(i, null, this.options.icons.down),
            this._addClass(i, null, e.down)),
            void this._super(t, e))
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
            this.element.prop("disabled", !!t),
            this.buttons.button(t ? "disable" : "enable")
        },
        _setOptions: e(function(t) {
            this._super(t)
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
            "" === t || isNaN(t) ? null : t
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var t = this.value();
            return null !== t && t === this._adjustValue(t)
        },
        _value: function(t, e) {
            var i;
            "" === t || null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)),
            t = this._format(i)),
            this.element.val(t),
            this._refresh()
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function(t) {
            this._stepUp(t)
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step),
            this._stop())
        },
        stepDown: e(function(t) {
            this._stepDown(t)
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step),
            this._stop())
        },
        pageUp: e(function(t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function(t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function(t) {
            return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    }),
    !1 !== C.uiBackCompat && C.widget("ui.spinner", C.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        },
        _uiSpinnerHtml: function() {
            return "<span>"
        },
        _buttonHtml: function() {
            return "<a></a><a></a>"
        }
    }),
    C.ui.spinner,
    C.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (ot = /#.*$/,
        function(t) {
            var e = t.href.replace(ot, "")
              , i = location.href.replace(ot, "");
            try {
                e = decodeURIComponent(e)
            } catch (t) {}
            try {
                i = decodeURIComponent(i)
            } catch (t) {}
            return 1 < t.hash.length && e === i
        }
        ),
        _create: function() {
            var e = this
              , t = this.options;
            this.running = !1,
            this._addClass("ui-tabs", "ui-widget ui-widget-content"),
            this._toggleClass("ui-tabs-collapsible", null, t.collapsible),
            this._processTabs(),
            t.active = this._initialActive(),
            C.isArray(t.disabled) && (t.disabled = C.unique(t.disabled.concat(C.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()),
            this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(t.active) : C(),
            this._refresh(),
            this.active.length && this.load(t.active)
        },
        _initialActive: function() {
            var i = this.options.active
              , t = this.options.collapsible
              , n = location.hash.substring(1);
            return null === i && (n && this.tabs.each(function(t, e) {
                return C(e).attr("aria-controls") === n ? (i = t,
                !1) : void 0
            }),
            null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            null !== i && -1 !== i || (i = !!this.tabs.length && 0)),
            !1 !== i && (-1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0)),
            !t && !1 === i && this.anchors.length && (i = 0),
            i
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : C()
            }
        },
        _tabKeydown: function(t) {
            var e = C(C.ui.safeActiveElement(this.document[0])).closest("li")
              , i = this.tabs.index(e)
              , n = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                case C.ui.keyCode.RIGHT:
                case C.ui.keyCode.DOWN:
                    i++;
                    break;
                case C.ui.keyCode.UP:
                case C.ui.keyCode.LEFT:
                    n = !1,
                    i--;
                    break;
                case C.ui.keyCode.END:
                    i = this.anchors.length - 1;
                    break;
                case C.ui.keyCode.HOME:
                    i = 0;
                    break;
                case C.ui.keyCode.SPACE:
                    return t.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(i);
                case C.ui.keyCode.ENTER:
                    return t.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(i !== this.options.active && i);
                default:
                    return
                }
                t.preventDefault(),
                clearTimeout(this.activating),
                i = this._focusNextTab(i, n),
                t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"),
                this.tabs.eq(i).attr("aria-selected", "true"),
                this.activating = this._delay(function() {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === C.ui.keyCode.UP && (t.preventDefault(),
            this.active.trigger("focus"))
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === C.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0) : t.altKey && t.keyCode === C.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0) : void 0
        },
        _findNextTab: function(t, e) {
            for (var i = this.tabs.length - 1; -1 !== C.inArray((i < t && (t = 0),
            t < 0 && (t = i),
            t), this.options.disabled); )
                t = e ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e),
            this.tabs.eq(t).trigger("focus"),
            t
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : (this._super(t, e),
            "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e),
            e || !1 !== this.options.active || this._activate(0)),
            "event" === t && this._setupEvents(e),
            void ("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options
              , e = this.tablist.children(":has(a[href])");
            t.disabled = C.map(e.filter(".ui-state-disabled"), function(t) {
                return e.index(t)
            }),
            this._processTabs(),
            !1 !== t.active && this.anchors.length ? this.active.length && !C.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1,
            this.active = C()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1,
            this.active = C()),
            this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }),
            this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
            this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var l = this
              , t = this.tabs
              , e = this.anchors
              , i = this.panels;
            this.tablist = this._getList().attr("role", "tablist"),
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"),
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t) {
                C(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                C(this).closest("li").is(".ui-state-disabled") && this.blur()
            }),
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }),
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
            this.anchors = this.tabs.map(function() {
                return C("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }),
            this._addClass(this.anchors, "ui-tabs-anchor"),
            this.panels = C(),
            this.anchors.each(function(t, e) {
                var i, n, s, o = C(e).uniqueId().attr("id"), a = C(e).closest("li"), r = a.attr("aria-controls");
                l._isLocal(e) ? (s = (i = e.hash).substring(1),
                n = l.element.find(l._sanitizeSelector(i))) : (i = "#" + (s = a.attr("aria-controls") || C({}).uniqueId()[0].id),
                (n = l.element.find(i)).length || (n = l._createPanel(s)).insertAfter(l.panels[t - 1] || l.tablist),
                n.attr("aria-live", "polite")),
                n.length && (l.panels = l.panels.add(n)),
                r && a.data("ui-tabs-aria-controls", r),
                a.attr({
                    "aria-controls": s,
                    "aria-labelledby": o
                }),
                n.attr("aria-labelledby", o)
            }),
            this.panels.attr("role", "tabpanel"),
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
            t && (this._off(t.not(this.tabs)),
            this._off(e.not(this.anchors)),
            this._off(i.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(t) {
            return C("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(t) {
            var e, i;
            for (C.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1),
            i = 0; e = this.tabs[i]; i++)
                e = C(e),
                !0 === t || -1 !== C.inArray(i, t) ? (e.attr("aria-disabled", "true"),
                this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"),
                this._removeClass(e, null, "ui-state-disabled"));
            this.options.disabled = t,
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t)
        },
        _setupEvents: function(t) {
            var i = {};
            t && C.each(t.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault()
                }
            }),
            this._on(this.anchors, i),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, e = this.element.parent();
            "fill" === t ? (i = e.height(),
            i -= this.element.outerHeight() - this.element.height(),
            this.element.siblings(":visible").each(function() {
                var t = C(this)
                  , e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }),
            this.element.children().not(this.panels).each(function() {
                i -= C(this).outerHeight(!0)
            }),
            this.panels.each(function() {
                C(this).height(Math.max(0, i - C(this).innerHeight() + C(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0,
            this.panels.each(function() {
                i = Math.max(i, C(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var e = this.options
              , i = this.active
              , n = C(t.currentTarget).closest("li")
              , s = n[0] === i[0]
              , o = s && e.collapsible
              , a = o ? C() : this._getPanelForTab(n)
              , r = i.length ? this._getPanelForTab(i) : C()
              , i = {
                oldTab: i,
                oldPanel: r,
                newTab: o ? C() : n,
                newPanel: a
            };
            t.preventDefault(),
            n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || s && !e.collapsible || !1 === this._trigger("beforeActivate", t, i) || (e.active = !o && this.tabs.index(n),
            this.active = s ? C() : n,
            this.xhr && this.xhr.abort(),
            r.length || a.length || C.error("jQuery UI Tabs: Mismatching fragment identifier."),
            a.length && this.load(this.tabs.index(n), t),
            this._toggle(t, i))
        },
        _toggle: function(t, e) {
            function i() {
                s.running = !1,
                s._trigger("activate", t, e)
            }
            function n() {
                s._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                o.length && s.options.show ? s._show(o, s.options.show, i) : (o.show(),
                i())
            }
            var s = this
              , o = e.newPanel
              , a = e.oldPanel;
            this.running = !0,
            a.length && this.options.hide ? this._hide(a, this.options.hide, function() {
                s._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                n()
            }) : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
            a.hide(),
            n()),
            a.attr("aria-hidden", "true"),
            e.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }),
            o.length && a.length ? e.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                return 0 === C(this).attr("tabIndex")
            }).attr("tabIndex", -1),
            o.attr("aria-hidden", "false"),
            e.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var t = this._findActive(t);
            t[0] !== this.active[0] && (t.length || (t = this.active),
            t = t.find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: t,
                currentTarget: t,
                preventDefault: C.noop
            }))
        },
        _findActive: function(t) {
            return !1 === t ? C() : this.tabs.eq(t)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + C.ui.escapeSelector(t) + "']"))),
            t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(),
            this.tablist.removeAttr("role").off(this.eventNamespace),
            this.anchors.removeAttr("role tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each(function() {
                C.data(this, "ui-tabs-destroy") ? C(this).remove() : C(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }),
            this.tabs.each(function() {
                var t = C(this)
                  , e = t.data("ui-tabs-aria-controls");
                e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }),
            this.panels.show(),
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var t = this.options.disabled;
            !1 !== t && (t = void 0 !== i && (i = this._getIndex(i),
            C.isArray(t) ? C.map(t, function(t) {
                return t !== i ? t : null
            }) : C.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })),
            this._setOptionDisabled(t))
        },
        disable: function(t) {
            var e = this.options.disabled;
            if (!0 !== e) {
                if (void 0 === t)
                    e = !0;
                else {
                    if (t = this._getIndex(t),
                    -1 !== C.inArray(t, e))
                        return;
                    e = C.isArray(e) ? C.merge([t], e).sort() : [t]
                }
                this._setOptionDisabled(e)
            }
        },
        load: function(t, n) {
            t = this._getIndex(t);
            function s(t, e) {
                "abort" === e && o.panels.stop(!1, !0),
                o._removeClass(i, "ui-tabs-loading"),
                a.removeAttr("aria-busy"),
                t === o.xhr && delete o.xhr
            }
            var o = this
              , i = this.tabs.eq(t)
              , t = i.find(".ui-tabs-anchor")
              , a = this._getPanelForTab(i)
              , r = {
                tab: i,
                panel: a
            };
            this._isLocal(t[0]) || (this.xhr = C.ajax(this._ajaxSettings(t, n, r)),
            this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i, "ui-tabs-loading"),
            a.attr("aria-busy", "true"),
            this.xhr.done(function(t, e, i) {
                setTimeout(function() {
                    a.html(t),
                    o._trigger("load", n, r),
                    s(i, e)
                }, 1)
            }).fail(function(t, e) {
                setTimeout(function() {
                    s(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, n) {
            var s = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""),
                beforeSend: function(t, e) {
                    return s._trigger("beforeLoad", i, C.extend({
                        jqXHR: t,
                        ajaxSettings: e
                    }, n))
                }
            }
        },
        _getPanelForTab: function(t) {
            t = C(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + t))
        }
    }),
    !1 !== C.uiBackCompat && C.widget("ui.tabs", C.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments),
            this._addClass(this.tabs, "ui-tab")
        }
    }),
    C.ui.tabs,
    C.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var t = C(this).attr("title") || "";
                return C("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(t, e) {
            var i = (t.attr("aria-describedby") || "").split(/\s+/);
            i.push(e),
            t.data("ui-tooltip-id", e).attr("aria-describedby", C.trim(i.join(" ")))
        },
        _removeDescribedBy: function(t) {
            var e = t.data("ui-tooltip-id")
              , i = (t.attr("aria-describedby") || "").split(/\s+/)
              , e = C.inArray(e, i);
            -1 !== e && i.splice(e, 1),
            t.removeData("ui-tooltip-id"),
            (i = C.trim(i.join(" "))) ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }),
            this.tooltips = {},
            this.parents = {},
            this.liveRegion = C("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this.disabledTitles = C([])
        },
        _setOption: function(t, e) {
            var i = this;
            this._super(t, e),
            "content" === t && C.each(this.tooltips, function(t, e) {
                i._updateContent(e.element)
            })
        },
        _setOptionDisabled: function(t) {
            this[t ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var n = this;
            C.each(this.tooltips, function(t, e) {
                var i = C.Event("blur");
                i.target = i.currentTarget = e.element[0],
                n.close(i, !0)
            }),
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var t = C(this);
                return t.is("[title]") ? t.data("ui-tooltip-title", t.attr("title")).removeAttr("title") : void 0
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var t = C(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            }),
            this.disabledTitles = C([])
        },
        open: function(t) {
            var i = this
              , e = C(t ? t.target : this.element).closest(this.options.items);
            e.length && !e.data("ui-tooltip-id") && (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")),
            e.data("ui-tooltip-open", !0),
            t && "mouseover" === t.type && e.parents().each(function() {
                var t, e = C(this);
                e.data("ui-tooltip-open") && ((t = C.Event("blur")).target = t.currentTarget = this,
                i.close(t, !0)),
                e.attr("title") && (e.uniqueId(),
                i.parents[this.id] = {
                    element: this,
                    title: e.attr("title")
                },
                e.attr("title", ""))
            }),
            this._registerCloseHandlers(t, e),
            this._updateContent(e, t))
        },
        _updateContent: function(e, i) {
            var t = this.options.content
              , n = this
              , s = i ? i.type : null;
            return "string" == typeof t || t.nodeType || t.jquery ? this._open(i, e, t) : void ((t = t.call(e[0], function(t) {
                n._delay(function() {
                    e.data("ui-tooltip-open") && (i && (i.type = s),
                    this._open(i, e, t))
                })
            })) && this._open(i, e, t))
        },
        _open: function(t, e, i) {
            function n(t) {
                r.of = t,
                o.is(":hidden") || o.position(r)
            }
            var s, o, a, r = C.extend({}, this.options.position);
            i && ((s = this._find(e)) ? s.tooltip.find(".ui-tooltip-content").html(i) : (e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")),
            s = this._tooltip(e),
            o = s.tooltip,
            this._addDescribedBy(e, o.attr("id")),
            o.find(".ui-tooltip-content").html(i),
            this.liveRegion.children().hide(),
            (i = C("<div>").html(o.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),
            i.removeAttr("id").find("[id]").removeAttr("id"),
            i.appendTo(this.liveRegion),
            this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                mousemove: n
            }),
            n(t)) : o.position(C.extend({
                of: e
            }, this.options.position)),
            o.hide(),
            this._show(o, this.options.show),
            this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function() {
                o.is(":visible") && (n(r.of),
                clearInterval(a))
            }, C.fx.interval)),
            this._trigger("open", t, {
                tooltip: o
            })))
        },
        _registerCloseHandlers: function(t, e) {
            var i = {
                keyup: function(t) {
                    t.keyCode === C.ui.keyCode.ESCAPE && ((t = C.Event(t)).currentTarget = e[0],
                    this.close(t, !0))
                }
            };
            e[0] !== this.element[0] && (i.remove = function() {
                this._removeTooltip(this._find(e).tooltip)
            }
            ),
            t && "mouseover" !== t.type || (i.mouseleave = "close"),
            t && "focusin" !== t.type || (i.focusout = "close"),
            this._on(!0, e, i)
        },
        close: function(t) {
            var e, i = this, n = C(t ? t.currentTarget : this.element), s = this._find(n);
            return s ? (e = s.tooltip,
            void (s.closing || (clearInterval(this.delayedShow),
            n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")),
            this._removeDescribedBy(n),
            s.hiding = !0,
            e.stop(!0),
            this._hide(e, this.options.hide, function() {
                i._removeTooltip(C(this))
            }),
            n.removeData("ui-tooltip-open"),
            this._off(n, "mouseleave focusout keyup"),
            n[0] !== this.element[0] && this._off(n, "remove"),
            this._off(this.document, "mousemove"),
            t && "mouseleave" === t.type && C.each(this.parents, function(t, e) {
                C(e.element).attr("title", e.title),
                delete i.parents[t]
            }),
            s.closing = !0,
            this._trigger("close", t, {
                tooltip: e
            }),
            s.hiding || (s.closing = !1)))) : void n.removeData("ui-tooltip-open")
        },
        _tooltip: function(t) {
            var e = C("<div>").attr("role", "tooltip")
              , i = C("<div>").appendTo(e)
              , n = e.uniqueId().attr("id");
            return this._addClass(i, "ui-tooltip-content"),
            this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"),
            e.appendTo(this._appendTo(t)),
            this.tooltips[n] = {
                element: t,
                tooltip: e
            }
        },
        _find: function(t) {
            t = t.data("ui-tooltip-id");
            return t ? this.tooltips[t] : null
        },
        _removeTooltip: function(t) {
            t.remove(),
            delete this.tooltips[t.attr("id")]
        },
        _appendTo: function(t) {
            t = t.closest(".ui-front, dialog");
            return t.length || (t = this.document[0].body),
            t
        },
        _destroy: function() {
            var n = this;
            C.each(this.tooltips, function(t, e) {
                var i = C.Event("blur")
                  , e = e.element;
                i.target = i.currentTarget = e[0],
                n.close(i, !0),
                C("#" + t).remove(),
                e.data("ui-tooltip-title") && (e.attr("title") || e.attr("title", e.data("ui-tooltip-title")),
                e.removeData("ui-tooltip-title"))
            }),
            this.liveRegion.remove()
        }
    }),
    !1 !== C.uiBackCompat && C.widget("ui.tooltip", C.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass),
            t
        }
    }),
    C.ui.tooltip
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(u) {
    u.extend(u.fn, {
        validate: function(t) {
            if (this.length) {
                var n = u.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"),
                n = new u.validator(t,this[0]),
                u.data(this[0], "validator", n),
                n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                    n.settings.submitHandler && (n.submitButton = t.target),
                    u(this).hasClass("cancel") && (n.cancelSubmit = !0),
                    void 0 !== u(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                }),
                this.on("submit.validate", function(i) {
                    function t() {
                        var t, e;
                        return !n.settings.submitHandler || (n.submitButton && (t = u("<input type='hidden'/>").attr("name", n.submitButton.name).val(u(n.submitButton).val()).appendTo(n.currentForm)),
                        e = n.settings.submitHandler.call(n, n.currentForm, i),
                        n.submitButton && t.remove(),
                        void 0 !== e && e)
                    }
                    return n.settings.debug && i.preventDefault(),
                    n.cancelSubmit ? (n.cancelSubmit = !1,
                    t()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : t() : (n.focusInvalid(),
                    !1)
                })),
                n)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var t, e, i;
            return u(this[0]).is("form") ? t = this.validate().form() : (i = [],
            t = !0,
            e = u(this[0].form).validate(),
            this.each(function() {
                (t = e.element(this) && t) || (i = i.concat(e.errorList))
            }),
            e.errorList = i),
            t
        },
        rules: function(t, e) {
            var i, n, s, o, a, r = this[0];
            if (null != r && null != r.form) {
                if (t)
                    switch (i = u.data(r.form, "validator").settings,
                    n = i.rules,
                    s = u.validator.staticRules(r),
                    t) {
                    case "add":
                        u.extend(s, u.validator.normalizeRule(e)),
                        delete s.messages,
                        n[r.name] = s,
                        e.messages && (i.messages[r.name] = u.extend(i.messages[r.name], e.messages));
                        break;
                    case "remove":
                        return e ? (a = {},
                        u.each(e.split(/\s/), function(t, e) {
                            a[e] = s[e],
                            delete s[e],
                            "required" === e && u(r).removeAttr("aria-required")
                        }),
                        a) : (delete n[r.name],
                        s)
                    }
                return (t = u.validator.normalizeRules(u.extend({}, u.validator.classRules(r), u.validator.attributeRules(r), u.validator.dataRules(r), u.validator.staticRules(r)), r)).required && (o = t.required,
                delete t.required,
                t = u.extend({
                    required: o
                }, t),
                u(r).attr("aria-required", "true")),
                t.remote && (o = t.remote,
                delete t.remote,
                t = u.extend(t, {
                    remote: o
                })),
                t
            }
        }
    }),
    u.extend(u.expr[":"], {
        blank: function(t) {
            return !u.trim("" + u(t).val())
        },
        filled: function(t) {
            t = u(t).val();
            return null !== t && !!u.trim("" + t)
        },
        unchecked: function(t) {
            return !u(t).prop("checked")
        }
    }),
    u.validator = function(t, e) {
        this.settings = u.extend(!0, {}, u.validator.defaults, t),
        this.currentForm = e,
        this.init()
    }
    ,
    u.validator.format = function(i, t) {
        return 1 === arguments.length ? function() {
            var t = u.makeArray(arguments);
            return t.unshift(i),
            u.validator.format.apply(this, t)
        }
        : (void 0 === t || (2 < arguments.length && t.constructor !== Array && (t = u.makeArray(arguments).slice(1)),
        t.constructor !== Array && (t = [t]),
        u.each(t, function(t, e) {
            i = i.replace(new RegExp("\\{" + t + "\\}","g"), function() {
                return e
            })
        })),
        i)
    }
    ,
    u.extend(u.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: u([]),
            errorLabelContainer: u([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t, e) {
                9 === e.which && "" === this.elementValue(t) || -1 !== u.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(t, e, i) {
                ("radio" === t.type ? this.findByName(t.name) : u(t)).addClass(e).removeClass(i)
            },
            unhighlight: function(t, e, i) {
                ("radio" === t.type ? this.findByName(t.name) : u(t)).removeClass(e).addClass(i)
            }
        },
        setDefaults: function(t) {
            u.extend(u.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: u.validator.format("Please enter no more than {0} characters."),
            minlength: u.validator.format("Please enter at least {0} characters."),
            rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
            range: u.validator.format("Please enter a value between {0} and {1}."),
            max: u.validator.format("Please enter a value less than or equal to {0}."),
            min: u.validator.format("Please enter a value greater than or equal to {0}."),
            step: u.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0]);
                    var e = u.data(this.form, "validator")
                      , i = "on" + t.type.replace(/^validate/, "")
                      , n = e.settings;
                    n[i] && !u(this).is(n.ignore) && n[i].call(e, this, t)
                }
                this.labelContainer = u(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm),
                this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var i, n = this.groups = {};
                u.each(this.settings.groups, function(i, t) {
                    "string" == typeof t && (t = t.split(/\s/)),
                    u.each(t, function(t, e) {
                        n[e] = i
                    })
                }),
                i = this.settings.rules,
                u.each(i, function(t, e) {
                    i[t] = u.validator.normalizeRule(e)
                }),
                u(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t),
                this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                u(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                u.extend(this.submitted, this.errorMap),
                this.invalid = u.extend({}, this.errorMap),
                this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
                    this.check(e[t]);
                return this.valid()
            },
            element: function(t) {
                var e, i, n = this.clean(t), s = this.validationTargetFor(n), o = this, a = !0;
                return void 0 === s ? delete this.invalid[n.name] : (this.prepareElement(s),
                this.currentElements = u(s),
                (i = this.groups[s.name]) && u.each(this.groups, function(t, e) {
                    e === i && t !== s.name && ((n = o.validationTargetFor(o.clean(o.findByName(t)))) && n.name in o.invalid && (o.currentElements.push(n),
                    a = o.check(n) && a))
                }),
                e = !1 !== this.check(s),
                a = a && e,
                this.invalid[s.name] = !e,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                u(t).attr("aria-invalid", !e)),
                a
            },
            showErrors: function(e) {
                var i;
                e && (i = this,
                u.extend(this.errorMap, e),
                this.errorList = u.map(this.errorMap, function(t, e) {
                    return {
                        message: t,
                        element: i.findByName(e)[0]
                    }
                }),
                this.successList = u.grep(this.successList, function(t) {
                    return !(t.name in e)
                })),
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                u.fn.resetForm && u(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++)
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""),
                        this.findByName(t[e].name).removeClass(this.settings.validClass);
                else
                    t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, i = 0;
                for (e in t)
                    t[e] && i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""),
                this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === u.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this
                  , i = {};
                return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var t = this.name || u(this).attr("name");
                    return !t && e.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0]),
                    !(t in i || !e.objectLength(u(this).rules()) || (i[t] = !0,
                    0))
                })
            },
            clean: function(t) {
                return u(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return u(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = u([]),
                this.toHide = u([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = u([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(),
                this.toHide = this.errorsFor(t)
            },
            elementValue: function(t) {
                var e = u(t)
                  , i = t.type;
                return "radio" === i || "checkbox" === i ? this.findByName(t.name).filter(":checked").val() : "number" === i && void 0 !== t.validity ? t.validity.badInput ? "NaN" : e.val() : (e = t.hasAttribute("contenteditable") ? e.text() : e.val(),
                "file" === i ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (i = e.lastIndexOf("/")) ? e.substr(i + 1) : 0 <= (i = e.lastIndexOf("\\")) ? e.substr(i + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var t, i, n, s = u(e).rules(), o = u.map(s, function(t, e) {
                    return e
                }).length, a = !1, r = this.elementValue(e);
                if ("function" == typeof s.normalizer) {
                    if ("string" != typeof (r = s.normalizer.call(e, r)))
                        throw new TypeError("The normalizer should return a string value.");
                    delete s.normalizer
                }
                for (i in s) {
                    n = {
                        method: i,
                        parameters: s[i]
                    };
                    try {
                        if ("dependency-mismatch" === (t = u.validator.methods[i].call(this, r, e, n.parameters)) && 1 === o) {
                            a = !0;
                            continue
                        }
                        if (a = !1,
                        "pending" === t)
                            return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!t)
                            return this.formatAndAdd(e, n),
                            !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method.", t),
                        t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method."),
                        t
                    }
                }
                if (!a)
                    return this.objectLength(s) && this.successList.push(e),
                    !0
            },
            customDataMessage: function(t, e) {
                return u(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || u(t).data("msg")
            },
            customMessage: function(t, e) {
                t = this.settings.messages[t];
                return t && (t.constructor === String ? t : t[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t])
                        return arguments[t]
            },
            defaultMessage: function(t, e) {
                "string" == typeof e && (e = {
                    method: e
                });
                var i = this.findDefined(this.customMessage(t.name, e.method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, u.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>")
                  , n = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, e.parameters, t) : n.test(i) && (i = u.validator.format(i.replace(n, "{$1}"), e.parameters)),
                i
            },
            formatAndAdd: function(t, e) {
                var i = this.defaultMessage(t, e);
                this.errorList.push({
                    message: i,
                    element: t,
                    method: e.method
                }),
                this.errorMap[t.name] = i,
                this.submitted[t.name] = i
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))),
                t
            },
            defaultShowErrors: function() {
                for (var t, e, i = 0; this.errorList[i]; i++)
                    e = this.errorList[i],
                    this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(e.element, e.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (i = 0; this.successList[i]; i++)
                        this.showLabel(this.successList[i]);
                if (this.settings.unhighlight)
                    for (i = 0,
                    t = this.validElements(); t[i]; i++)
                        this.settings.unhighlight.call(this, t[i], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return u(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, e) {
                var i, n, s, o = this.errorsFor(t), a = this.idOrName(t), r = u(t).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                o.html(e)) : (i = o = u("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(e || ""),
                this.settings.wrapper && (i = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, u(t)) : i.insertAfter(t),
                o.is("label") ? o.attr("for", a) : 0 === o.parents("label[for='" + this.escapeCssMeta(a) + "']").length && (a = o.attr("id"),
                r ? r.match(new RegExp("\\b" + this.escapeCssMeta(a) + "\\b")) || (r += " " + a) : r = a,
                u(t).attr("aria-describedby", r),
                (n = this.groups[t.name]) && (s = this,
                u.each(s.groups, function(t, e) {
                    e === n && u("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", o.attr("id"))
                })))),
                !e && this.settings.success && (o.text(""),
                "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, t)),
                this.toShow = this.toShow.add(o)
            },
            errorsFor: function(t) {
                var e = this.escapeCssMeta(this.idOrName(t))
                  , t = u(t).attr("aria-describedby")
                  , e = "label[for='" + e + "'], label[for='" + e + "'] *";
                return t && (e = e + ", #" + this.escapeCssMeta(t).replace(/\s+/g, ", #")),
                this.errors().filter(e)
            },
            escapeCssMeta: function(t) {
                return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(t) {
                return this.groups[t.name] || !this.checkable(t) && t.id || t.name
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)),
                u(t).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(t) {
                return u(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, e) {
                switch (e.nodeName.toLowerCase()) {
                case "select":
                    return u("option:selected", e).length;
                case "input":
                    if (this.checkable(e))
                        return this.findByName(e.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t) {
                    return t
                },
                string: function(t, e) {
                    return !!u(t, e.form).length
                },
                function: function(t, e) {
                    return t(e)
                }
            },
            optional: function(t) {
                var e = this.elementValue(t);
                return !u.validator.methods.required.call(this, e, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                u(t).addClass(this.settings.pendingClass),
                this.pending[t.name] = !0)
            },
            stopRequest: function(t, e) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[t.name],
                u(t).removeClass(this.settings.pendingClass),
                e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(),
                this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t, e) {
                return e = "string" == typeof e && e || "remote",
                u.data(t, "previousValue") || u.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: e
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, e) {
            t.constructor === String ? this.classRuleSettings[t] = e : u.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var e = {}
              , t = u(t).attr("class");
            return t && u.each(t.split(" "), function() {
                this in u.validator.classRuleSettings && u.extend(e, u.validator.classRuleSettings[this])
            }),
            e
        },
        normalizeAttributeRule: function(t, e, i, n) {
            /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n),
            isNaN(n) && (n = void 0)),
            n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
        },
        attributeRules: function(t) {
            var e, i, n = {}, s = u(t), o = t.getAttribute("type");
            for (e in u.validator.methods)
                i = "required" === e ? (i = t.getAttribute(e),
                "" === i && (i = !0),
                !!i) : s.attr(e),
                this.normalizeAttributeRule(n, o, e, i);
            return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength,
            n
        },
        dataRules: function(t) {
            var e, i, n = {}, s = u(t), o = t.getAttribute("type");
            for (e in u.validator.methods)
                i = s.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()),
                this.normalizeAttributeRule(n, o, e, i);
            return n
        },
        staticRules: function(t) {
            var e = {}
              , i = u.data(t.form, "validator");
            return i.settings.rules && (e = u.validator.normalizeRule(i.settings.rules[t.name]) || {}),
            e
        },
        normalizeRules: function(n, s) {
            return u.each(n, function(t, e) {
                if (!1 !== e) {
                    if (e.param || e.depends) {
                        var i = !0;
                        switch (typeof e.depends) {
                        case "string":
                            i = !!u(e.depends, s.form).length;
                            break;
                        case "function":
                            i = e.depends.call(s, s)
                        }
                        i ? n[t] = void 0 === e.param || e.param : (u.data(s.form, "validator").resetElements(u(s)),
                        delete n[t])
                    }
                } else
                    delete n[t]
            }),
            u.each(n, function(t, e) {
                n[t] = u.isFunction(e) && "normalizer" !== t ? e(s) : e
            }),
            u.each(["minlength", "maxlength"], function() {
                n[this] && (n[this] = Number(n[this]))
            }),
            u.each(["rangelength", "range"], function() {
                var t;
                n[this] && (u.isArray(n[this]) ? n[this] = [Number(n[this][0]), Number(n[this][1])] : "string" == typeof n[this] && (t = n[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                n[this] = [Number(t[0]), Number(t[1])]))
            }),
            u.validator.autoCreateRanges && (null != n.min && null != n.max && (n.range = [n.min, n.max],
            delete n.min,
            delete n.max),
            null != n.minlength && null != n.maxlength && (n.rangelength = [n.minlength, n.maxlength],
            delete n.minlength,
            delete n.maxlength)),
            n
        },
        normalizeRule: function(t) {
            var e;
            return "string" == typeof t && (e = {},
            u.each(t.split(/\s/), function() {
                e[this] = !0
            }),
            t = e),
            t
        },
        addMethod: function(t, e, i) {
            u.validator.methods[t] = e,
            u.validator.messages[t] = void 0 !== i ? i : u.validator.messages[t],
            e.length < 3 && u.validator.addClassRules(t, u.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, e, i) {
                if (!this.depend(i, e))
                    return "dependency-mismatch";
                if ("select" !== e.nodeName.toLowerCase())
                    return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < t.length;
                e = u(e).val();
                return e && 0 < e.length
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            minlength: function(t, e, i) {
                t = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || i <= t
            },
            maxlength: function(t, e, i) {
                t = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || t <= i
            },
            rangelength: function(t, e, i) {
                t = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || i <= t
            },
            max: function(t, e, i) {
                return this.optional(e) || t <= i
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            step: function(t, e, i) {
                function n(t) {
                    return (t = ("" + t).match(/(?:\.(\d+))?$/)) && t[1] ? t[1].length : 0
                }
                function s(t) {
                    return Math.round(t * Math.pow(10, o))
                }
                var o, a = u(e).attr("type"), r = "Step attribute on input type " + a + " is not supported.", l = new RegExp("\\b" + a + "\\b"), h = !0;
                if (a && !l.test(["text", "number", "range"].join()))
                    throw new Error(r);
                return o = n(i),
                (n(t) > o || s(t) % s(i) != 0) && (h = !1),
                this.optional(e) || h
            },
            equalTo: function(t, e, i) {
                i = u(i);
                return this.settings.onfocusout && i.not(".validate-equalTo-blur").length && i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    u(e).valid()
                }),
                t === i.val()
            },
            remote: function(n, s, t, o) {
                if (this.optional(s))
                    return "dependency-mismatch";
                o = "string" == typeof o && o || "remote";
                var a, e, r = this.previousValue(s, o);
                return this.settings.messages[s.name] || (this.settings.messages[s.name] = {}),
                r.originalMessage = r.originalMessage || this.settings.messages[s.name][o],
                this.settings.messages[s.name][o] = r.message,
                t = "string" == typeof t ? {
                    url: t
                } : t,
                e = u.param(u.extend({
                    data: n
                }, t.data)),
                r.old === e ? r.valid : (r.old = e,
                (a = this).startRequest(s),
                (e = {})[s.name] = n,
                u.ajax(u.extend(!0, {
                    mode: "abort",
                    port: "validate" + s.name,
                    dataType: "json",
                    data: e,
                    context: a.currentForm,
                    success: function(t) {
                        var e, i = !0 === t || "true" === t;
                        a.settings.messages[s.name][o] = r.originalMessage,
                        i ? (e = a.formSubmitted,
                        a.resetInternals(),
                        a.toHide = a.errorsFor(s),
                        a.formSubmitted = e,
                        a.successList.push(s),
                        a.invalid[s.name] = !1,
                        a.showErrors()) : (e = {},
                        t = t || a.defaultMessage(s, {
                            method: o,
                            parameters: n
                        }),
                        e[s.name] = r.message = t,
                        a.invalid[s.name] = !0,
                        a.showErrors(e)),
                        r.valid = i,
                        a.stopRequest(s, i)
                    }
                }, t)),
                "pending")
            }
        }
    });
    var n, s = {};
    u.ajaxPrefilter ? u.ajaxPrefilter(function(t, e, i) {
        var n = t.port;
        "abort" === t.mode && (s[n] && s[n].abort(),
        s[n] = i)
    }) : (n = u.ajax,
    u.ajax = function(t) {
        var e = ("mode"in t ? t : u.ajaxSettings).mode
          , i = ("port"in t ? t : u.ajaxSettings).port;
        return "abort" === e ? (s[i] && s[i].abort(),
        s[i] = n.apply(this, arguments),
        s[i]) : n.apply(this, arguments)
    }
    )
}),
function(l) {
    var t, a = l.validator, r = "unobtrusiveValidation";
    function h(t, e, i) {
        t.rules[e] = i,
        t.message && (t.messages[e] = t.message)
    }
    function u(t) {
        return t.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
    }
    function i(t) {
        return t.substr(0, t.lastIndexOf(".") + 1)
    }
    function c(t, e) {
        return 0 === t.indexOf("*.") && (t = t.replace("*.", e)),
        t
    }
    function d() {
        var t = l(this)
          , e = "__jquery_unobtrusive_validation_form_reset";
        if (!t.data(e)) {
            t.data(e, !0);
            try {
                t.data("validator").resetForm()
            } finally {
                t.removeData(e)
            }
            t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors"),
            t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
        }
    }
    function p(i) {
        function t(t, e) {
            (t = o[t]) && l.isFunction(t) && t.apply(i, e)
        }
        var e = l(i)
          , n = e.data(r)
          , s = l.proxy(d, i)
          , o = a.unobtrusive.options || {};
        return n || (n = {
            options: {
                errorClass: o.errorClass || "input-validation-error",
                errorElement: o.errorElement || "span",
                errorPlacement: function() {
                    (function(t, e) {
                        var i = l(this).find("[data-valmsg-for='" + u(e[0].name) + "']")
                          , e = (e = i.attr("data-valmsg-replace")) ? !1 !== l.parseJSON(e) : null;
                        i.removeClass("field-validation-valid").addClass("field-validation-error"),
                        t.data("unobtrusiveContainer", i),
                        e ? (i.empty(),
                        t.removeClass("input-validation-error").appendTo(i)) : t.hide()
                    }
                    ).apply(i, arguments),
                    t("errorPlacement", arguments)
                },
                invalidHandler: function() {
                    (function(t, e) {
                        var i = l(this).find("[data-valmsg-summary=true]")
                          , n = i.find("ul");
                        n && n.length && e.errorList.length && (n.empty(),
                        i.addClass("validation-summary-errors").removeClass("validation-summary-valid"),
                        l.each(e.errorList, function() {
                            l("<li />").html(this.message).appendTo(n)
                        }))
                    }
                    ).apply(i, arguments),
                    t("invalidHandler", arguments)
                },
                messages: {},
                rules: {},
                success: function() {
                    (function(t) {
                        var e = t.data("unobtrusiveContainer")
                          , i = (i = e.attr("data-valmsg-replace")) ? l.parseJSON(i) : null;
                        e && (e.addClass("field-validation-valid").removeClass("field-validation-error"),
                        t.removeData("unobtrusiveContainer"),
                        i && e.empty())
                    }
                    ).apply(i, arguments),
                    t("success", arguments)
                }
            },
            attachValidation: function() {
                e.off("reset." + r, s).on("reset." + r, s).validate(this.options)
            },
            validate: function() {
                return e.validate(),
                e.valid()
            }
        },
        e.data(r, n)),
        n
    }
    a.unobtrusive = {
        adapters: [],
        parseElement: function(n, t) {
            var e, s, o, a = l(n), r = a.parents("form")[0];
            r && ((e = p(r)).options.rules[n.name] = s = {},
            e.options.messages[n.name] = o = {},
            l.each(this.adapters, function() {
                var t = "data-val-" + this.name
                  , e = a.attr(t)
                  , i = {};
                void 0 !== e && (t += "-",
                l.each(this.params, function() {
                    i[this] = a.attr(t + this)
                }),
                this.adapt({
                    element: n,
                    form: r,
                    message: e,
                    params: i,
                    rules: s,
                    messages: o
                }))
            }),
            l.extend(s, {
                __dummy__: !0
            }),
            t || e.attachValidation())
        },
        parse: function(t) {
            var e = l(t)
              , t = e.parents().addBack().filter("form").add(e.find("form")).has("[data-val=true]");
            e.find("[data-val=true]").each(function() {
                a.unobtrusive.parseElement(this, !0)
            }),
            t.each(function() {
                var t = p(this);
                t && t.attachValidation()
            })
        }
    },
    (t = a.unobtrusive.adapters).add = function(t, e, i) {
        return i || (i = e,
        e = []),
        this.push({
            name: t,
            params: e,
            adapt: i
        }),
        this
    }
    ,
    t.addBool = function(e, i) {
        return this.add(e, function(t) {
            h(t, i || e, !0)
        })
    }
    ,
    t.addMinMax = function(t, n, s, o, e, i) {
        return this.add(t, [e || "min", i || "max"], function(t) {
            var e = t.params.min
              , i = t.params.max;
            e && i ? h(t, o, [e, i]) : e ? h(t, n, e) : i && h(t, s, i)
        })
    }
    ,
    t.addSingleVal = function(e, i, n) {
        return this.add(e, [i || "val"], function(t) {
            h(t, n || e, t.params[i])
        })
    }
    ,
    a.addMethod("__dummy__", function() {
        return !0
    }),
    a.addMethod("regex", function(t, e, i) {
        return !!this.optional(e) || (i = new RegExp(i).exec(t)) && 0 === i.index && i[0].length === t.length
    }),
    a.addMethod("nonalphamin", function(t, e, i) {
        var n;
        return i && (n = (n = t.match(/\W/g)) && n.length >= i),
        n
    }),
    a.methods.extension ? (t.addSingleVal("accept", "mimtype"),
    t.addSingleVal("extension", "extension")) : t.addSingleVal("extension", "extension", "accept"),
    t.addSingleVal("regex", "pattern"),
    t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"),
    t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range"),
    t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength"),
    t.add("equalto", ["other"], function(t) {
        var e = i(t.element.name)
          , e = c(t.params.other, e);
        h(t, "equalTo", l(t.form).find(":input").filter("[name='" + u(e) + "']")[0])
    }),
    t.add("required", function(t) {
        "INPUT" === t.element.tagName.toUpperCase() && "CHECKBOX" === t.element.type.toUpperCase() || h(t, "required", !0)
    }),
    t.add("remote", ["url", "type", "additionalfields"], function(n) {
        var s = {
            url: n.params.url,
            type: n.params.type || "GET",
            data: {}
        }
          , o = i(n.element.name);
        l.each((n.params.additionalfields || n.element.name).replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g), function(t, e) {
            var i = c(e, o);
            s.data[i] = function() {
                var t = l(n.form).find(":input").filter("[name='" + u(i) + "']");
                return t.is(":checkbox") ? t.filter(":checked").val() || t.filter(":hidden").val() || "" : t.is(":radio") ? t.filter(":checked").val() || "" : t.val()
            }
        }),
        h(n, "remote", s)
    }),
    t.add("password", ["min", "nonalphamin", "regex"], function(t) {
        t.params.min && h(t, "minlength", t.params.min),
        t.params.nonalphamin && h(t, "nonalphamin", t.params.nonalphamin),
        t.params.regex && h(t, "regex", t.params.regex)
    }),
    l(function() {
        a.unobtrusive.parse(document)
    })
}(jQuery),
function(r) {
    var s = "unobtrusiveAjaxClick"
      , o = "unobtrusiveAjaxClickTarget";
    function l(t, e) {
        for (var i = window, n = (t || "").split("."); i && n.length; )
            i = i[n.shift()];
        return "function" == typeof i ? i : (e.push(t),
        Function.constructor.apply(null, e))
    }
    function h(t) {
        return "GET" === t || "POST" === t
    }
    function n(a, t) {
        var n, s, o, e = a.getAttribute("data-ajax-confirm");
        e && !window.confirm(e) || (n = r(a.getAttribute("data-ajax-loading")),
        o = parseInt(a.getAttribute("data-ajax-loading-duration"), 10) || 0,
        r.extend(t, {
            type: a.getAttribute("data-ajax-method") || void 0,
            url: a.getAttribute("data-ajax-url") || void 0,
            cache: !!a.getAttribute("data-ajax-cache"),
            beforeSend: function(t) {
                var e, i;
                return e = t,
                h(i = s) || e.setRequestHeader("X-HTTP-Method-Override", i),
                !1 !== (i = l(a.getAttribute("data-ajax-begin"), ["xhr"]).apply(a, arguments)) && n.show(o),
                i
            },
            complete: function() {
                n.hide(o),
                l(a.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(a, arguments)
            },
            success: function(t, e, i) {
                var n, s, o;
                n = a,
                s = t,
                -1 === (i.getResponseHeader("Content-Type") || "text/html").indexOf("application/x-javascript") && (o = (n.getAttribute("data-ajax-mode") || "").toUpperCase(),
                r(n.getAttribute("data-ajax-update")).each(function(t, e) {
                    var i;
                    switch (o) {
                    case "BEFORE":
                        i = e.firstChild,
                        r("<div />").html(s).contents().each(function() {
                            e.insertBefore(this, i)
                        });
                        break;
                    case "AFTER":
                        r("<div />").html(s).contents().each(function() {
                            e.appendChild(this)
                        });
                        break;
                    case "REPLACE-WITH":
                        r(e).replaceWith(s);
                        break;
                    default:
                        r(e).html(s)
                    }
                })),
                l(a.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(a, arguments)
            },
            error: function() {
                l(a.getAttribute("data-ajax-failure"), ["xhr", "status", "error"]).apply(a, arguments)
            }
        }),
        t.data.push({
            name: "X-Requested-With",
            value: "XMLHttpRequest"
        }),
        h(s = t.type.toUpperCase()) || (t.type = "POST",
        t.data.push({
            name: "X-HTTP-Method-Override",
            value: s
        })),
        r.ajax(t))
    }
    r(document).on("click", "a[data-ajax=true]", function(t) {
        t.preventDefault(),
        n(this, {
            url: this.href,
            type: "GET",
            data: []
        })
    }),
    r(document).on("click", "form[data-ajax=true] input[type=image]", function(t) {
        var e = t.target.name
          , i = r(t.target)
          , n = r(i.parents("form")[0])
          , i = i.offset();
        n.data(s, [{
            name: e + ".x",
            value: Math.round(t.pageX - i.left)
        }, {
            name: e + ".y",
            value: Math.round(t.pageY - i.top)
        }]),
        setTimeout(function() {
            n.removeData(s)
        }, 0)
    }),
    r(document).on("click", "form[data-ajax=true] :submit", function(t) {
        var e = t.currentTarget.name
          , i = r(t.target)
          , n = r(i.parents("form")[0]);
        n.data(s, e ? [{
            name: e,
            value: t.currentTarget.value
        }] : []),
        n.data(o, i),
        setTimeout(function() {
            n.removeData(s),
            n.removeData(o)
        }, 0)
    }),
    r(document).on("submit", "form[data-ajax=true]", function(t) {
        var e = r(this).data(s) || []
          , i = r(this).data(o)
          , i = i && i.hasClass("cancel");
        t.preventDefault(),
        !i && ((i = r(i = this).data("unobtrusiveValidation")) && i.validate && !i.validate()) || n(this, {
            url: this.action,
            type: this.method || "GET",
            data: e.concat(r(this).serializeArray())
        })
    })
}(jQuery),
$(document).ready(function() {
    $.ajax({
        url: "/Home/GetProductGroup/",
        type: "post",
        timeout: 1e4,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function() {},
        success: function(t) {
            for (var e = new Object, i = 0; i < t.value.length; i++)
                switch (t.value[i].SequenceNo.toString()) {
                case "1":
                    $("#ProductMenuBox1-Header").append("<a href=/" + t.lang + "/Product-of-Group/" + t.value[i].Id + "/" + t.value[i].UrlGroupName + ">" + t.value[i].Name + "</a><span class='glyphicon glyphicon-stop IconFloatSetting' style='font-size: 16px;color:rgb(67, 82, 90)'></span>"),
                    e.groupId = t.value[i].Id,
                    $.ajax({
                        url: "/Home/GetProduct/",
                        type: "post",
                        timeout: 1e4,
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: function() {},
                        success: function(t) {
                            for (var e = 0, i = 0; i < t.value.length; i++)
                                if (!(0 < i && t.value[i].ProductModelName.trim() === t.value[i - 1].ProductModelName.trim()) && ($("#ProductMenuBox1-Product").append("<a href=/" + t.lang + "/Product/" + t.value[i].Id + "/" + t.value[i].UrlProductName + ">" + t.value[i].ProductModelName + "</a></br>"),
                                3 == ++e)) {
                                    $("#ProductMenuBox1-Product").append("<div class='PaddingTop5'><a style='font-size: 15px !important;  margin-top: 10px;' href= /" + t.lang + "/Product-of-Group/" + t.value[i].ProductGroupId + ">" + t.SeeAnotherProductOfThisGroup + "</a></div>");
                                    break
                                }
                        },
                        error: function() {},
                        complete: function() {}
                    });
                    break;
                case "2":
                    $("#ProductMenuBox2-Header").append("<a href=/" + t.lang + "/Product-of-Group/" + t.value[i].Id + "/" + t.value[i].UrlGroupName + ">" + t.value[i].Name + "</a><span class='glyphicon glyphicon-stop IconFloatSetting' style='font-size: 16px;color:rgb(67, 82, 90)'></span>"),
                    e.groupId = t.value[i].Id,
                    $.ajax({
                        url: "/Home/GetProduct/",
                        type: "post",
                        timeout: 1e4,
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: function() {},
                        success: function(t) {
                            for (var e = 0, i = 0; i < t.value.length; i++)
                                if (!(0 < i && t.value[i].ProductModelName.trim() === t.value[i - 1].ProductModelName.trim()) && ($("#ProductMenuBox2-Product").append("<a href=/" + t.lang + "/Product/" + t.value[i].Id + "/" + t.value[i].UrlProductName + ">" + t.value[i].ProductModelName + "</a></br>"),
                                3 == ++e)) {
                                    $("#ProductMenuBox2-Product").append("<div class='PaddingTop5'><a style='font-size: 15px !important;  margin-top: 10px;' href= /" + t.lang + "/Product-of-Group/" + t.value[i].ProductGroupId + ">" + t.SeeAnotherProductOfThisGroup + "</a></div>");
                                    break
                                }
                        },
                        error: function() {},
                        complete: function() {}
                    });
                    break;
                case "3":
                    $("#ProductMenuBox3-Header").append("<a href=/" + t.lang + "/Product-of-Group/" + t.value[i].Id + "/" + t.value[i].UrlGroupName + ">" + t.value[i].Name + "</a><span class='glyphicon glyphicon-stop IconFloatSetting' style='font-size: 16px;color:rgb(67, 82, 90)'></span>"),
                    e.groupId = t.value[i].Id,
                    $.ajax({
                        url: "/Home/GetProduct/",
                        type: "post",
                        timeout: 1e4,
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: function() {},
                        success: function(t) {
                            for (var e = 0, i = 0; i < t.value.length; i++)
                                if (!(0 < i && t.value[i].ProductModelName.trim() === t.value[i - 1].ProductModelName.trim()) && ($("#ProductMenuBox3-Product").append("<a href=/" + t.lang + "/Product/" + t.value[i].Id + "/" + t.value[i].UrlProductName + ">" + t.value[i].ProductModelName + "</a></br>"),
                                3 == ++e)) {
                                    $("#ProductMenuBox3-Product").append("<div class='PaddingTop5'><a style='font-size: 15px !important;  margin-top: 10px;' href= /" + t.lang + "/Product-of-Group/" + t.value[i].ProductGroupId + ">" + t.SeeAnotherProductOfThisGroup + "</a></div>");
                                    break
                                }
                        },
                        error: function() {},
                        complete: function() {}
                    });
                    break;
                case "4":
                    $("#ProductMenuBox4-Header").append("<a href=/" + t.lang + "/Product-of-Group/" + t.value[i].Id + "/" + t.value[i].UrlGroupName + ">" + t.value[i].Name + "</a><span class='glyphicon glyphicon-stop IconFloatSetting' style='font-size: 16px;color:rgb(67, 82, 90)'></span>"),
                    e.groupId = t.value[i].Id,
                    $.ajax({
                        url: "/Home/GetProduct/",
                        type: "post",
                        timeout: 1e4,
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: function() {},
                        success: function(t) {
                            for (var e = 0, i = 0; i < t.value.length; i++)
                                if (!(0 < i && t.value[i].ProductModelName.trim() === t.value[i - 1].ProductModelName.trim()) && ($("#ProductMenuBox4-Product").append("<a href=/" + t.lang + "/Product/" + t.value[i].Id + "/" + t.value[i].UrlProductName + ">" + t.value[i].ProductModelName + "</a></br>"),
                                3 == ++e)) {
                                    $("#ProductMenuBox4-Product").append("<div class='PaddingTop5'><a style='font-size: 15px !important;  margin-top: 10px;' href= /" + t.lang + "/Product-of-Group/" + t.value[i].ProductGroupId + ">" + t.SeeAnotherProductOfThisGroup + "</a></div>");
                                    break
                                }
                        },
                        error: function() {},
                        complete: function() {}
                    });
                    break;
                case "5":
                    $("#ProductMenuBox5-Header").append("<a href=/" + t.lang + "/Product-of-Group/" + t.value[i].Id + "/" + t.value[i].UrlGroupName + ">" + t.value[i].Name + "</a><span class='glyphicon glyphicon-stop IconFloatSetting' style='font-size: 16px;color:rgb(67, 82, 90)'></span>"),
                    e.groupId = t.value[i].Id,
                    $.ajax({
                        url: "/Home/GetProduct/",
                        type: "post",
                        timeout: 1e4,
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: function() {},
                        success: function(t) {
                            for (var e = 0, i = 0; i < t.value.length; i++)
                                if (!(0 < i && t.value[i].ProductModelName.trim() === t.value[i - 1].ProductModelName.trim()) && ($("#ProductMenuBox5-Product").append("<a href=/" + t.lang + "/Product/" + t.value[i].Id + "/" + t.value[i].UrlProductName + ">" + t.value[i].ProductModelName + "</a></br>"),
                                3 == ++e)) {
                                    $("#ProductMenuBox5-Product").append("<div class='PaddingTop5'><a style='font-size: 15px !important;  margin-top: 10px;' href= /" + t.lang + "/Product-of-Group/" + t.value[i].ProductGroupId + ">" + t.SeeAnotherProductOfThisGroup + "</a></div>");
                                    break
                                }
                        },
                        error: function() {},
                        complete: function() {}
                    });
                    break;
                case "6":
                    $("#ProductMenuBox6-Header").append("<a href=/" + t.lang + "/Product-of-Group/" + t.value[i].Id + "/" + t.value[i].UrlGroupName + ">" + t.value[i].Name + "</a><span class='glyphicon glyphicon-stop IconFloatSetting' style='font-size: 16px;color:rgb(67, 82, 90)'></span>"),
                    e.groupId = t.value[i].Id,
                    $.ajax({
                        url: "/Home/GetProduct/",
                        type: "post",
                        timeout: 1e4,
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: function() {},
                        success: function(t) {
                            for (var e = 0, i = 0; i < t.value.length; i++)
                                if (!(0 < i && t.value[i].ProductModelName.trim() === t.value[i - 1].ProductModelName.trim()) && ($("#ProductMenuBox6-Product").append("<a href=/" + t.lang + "/Product/" + t.value[i].Id + "/" + t.value[i].UrlProductName + ">" + t.value[i].ProductModelName + "</a></br>"),
                                3 == ++e)) {
                                    $("#ProductMenuBox6-Product").append("<div class='PaddingTop5'><a style='font-size: 15px !important;  margin-top: 10px;' href= /" + t.lang + "/Product-of-Group/" + t.value[i].ProductGroupId + ">" + t.SeeAnotherProductOfThisGroup + "</a></div>");
                                    break
                                }
                        },
                        error: function() {},
                        complete: function() {}
                    });
                    break;
                case "7":
                    $("#ProductMenuBox7-Header").append("<a href=/" + t.lang + "/Product-of-Group/" + t.value[i].Id + "/" + t.value[i].UrlGroupName + ">" + t.value[i].Name + "</a><span class='glyphicon glyphicon-stop IconFloatSetting' style='font-size: 16px;color:rgb(67, 82, 90)'></span>"),
                    e.groupId = t.value[i].Id,
                    $.ajax({
                        url: "/Home/GetProduct/",
                        type: "post",
                        timeout: 1e4,
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: function() {},
                        success: function(t) {
                            for (var e = 0, i = 0; i < t.value.length; i++)
                                if (!(0 < i && t.value[i].ProductModelName.trim() === t.value[i - 1].ProductModelName.trim()) && ($("#ProductMenuBox7-Product").append("<a href=/" + t.lang + "/Product/" + t.value[i].Id + "/" + t.value[i].UrlProductName + ">" + t.value[i].ProductModelName + "</a></br>"),
                                3 == ++e)) {
                                    $("#ProductMenuBox7-Product").append("<div class='PaddingTop5'><a style='font-size: 15px !important;  margin-top: 10px;' href= /" + t.lang + "/Product-of-Group/" + t.value[i].ProductGroupId + ">" + t.SeeAnotherProductOfThisGroup + "</a></div>");
                                    break
                                }
                        },
                        error: function() {},
                        complete: function() {}
                    });
                    break;
                case "8":
                    $("#ProductMenuBox8-Header").append("<a href=/" + t.lang + "/Product-of-Group/" + t.value[i].Id + "/" + t.value[i].UrlGroupName + ">" + t.value[i].Name + "</a><span class='glyphicon glyphicon-stop IconFloatSetting' style='font-size: 16px;color:rgb(67, 82, 90)'></span>"),
                    e.groupId = t.value[i].Id,
                    $.ajax({
                        url: "/Home/GetProduct/",
                        type: "post",
                        timeout: 1e4,
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: function() {},
                        success: function(t) {
                            for (var e = 0, i = 0; i < t.value.length; i++)
                                if (!(0 < i && t.value[i].ProductModelName.trim() === t.value[i - 1].ProductModelName.trim()) && ($("#ProductMenuBox8-Product").append("<a href=/" + t.lang + "/Product/" + t.value[i].Id + "/" + t.value[i].UrlProductName + ">" + t.value[i].ProductModelName + "</a></br>"),
                                3 == ++e)) {
                                    $("#ProductMenuBox8-Product").append("<div class='PaddingTop5'><a style='font-size: 15px !important;  margin-top: 10px;' href= /" + t.lang + "/Product-of-Group/" + t.value[i].ProductGroupId + ">" + t.SeeAnotherProductOfThisGroup + "</a></div>");
                                    break
                                }
                        },
                        error: function() {},
                        complete: function() {}
                    });
                    break;
                case "9":
                    $("#ProductMenuBox9-Header").append("<a href=/" + t.lang + "/Product-of-Group/" + t.value[i].Id + "/" + t.value[i].UrlGroupName + ">" + t.value[i].Name + "</a><span class='glyphicon glyphicon-stop IconFloatSetting' style='font-size: 16px;color:rgb(67, 82, 90)'></span>"),
                    e.groupId = t.value[i].Id,
                    $.ajax({
                        url: "/Home/GetProduct/",
                        type: "post",
                        timeout: 1e4,
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: function() {},
                        success: function(t) {
                            for (var e = 0, i = 0; i < t.value.length; i++)
                                if (!(0 < i && t.value[i].ProductModelName.trim() === t.value[i - 1].ProductModelName.trim()) && ($("#ProductMenuBox9-Product").append("<a href=/" + t.lang + "/Product/" + t.value[i].Id + "/" + t.value[i].UrlProductName + ">" + t.value[i].ProductModelName + "</a></br>"),
                                3 == ++e)) {
                                    $("#ProductMenuBox9-Product").append("<div class='PaddingTop5'><a style='font-size: 15px !important;  margin-top: 10px;' href= /" + t.lang + "/Product-of-Group/" + t.value[i].ProductGroupId + ">" + t.SeeAnotherProductOfThisGroup + "</a></div>");
                                    break
                                }
                        },
                        error: function() {},
                        complete: function() {}
                    });
                    break;
                case "10":
                    $("#ProductMenuBox10-Header").append("<a href=/" + t.lang + "/Product-of-Group/" + t.value[i].Id + "/" + t.value[i].UrlGroupName + ">" + t.value[i].Name + "</a><span class='glyphicon glyphicon-stop IconFloatSetting' style='font-size: 16px;color:rgb(67, 82, 90)'></span>"),
                    e.groupId = t.value[i].Id,
                    $.ajax({
                        url: "/Home/GetProduct/",
                        type: "post",
                        timeout: 1e4,
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: function() {},
                        success: function(t) {
                            for (var e = 0, i = 0; i < t.value.length; i++)
                                if (!(0 < i && t.value[i].ProductModelName.trim() === t.value[i - 1].ProductModelName.trim()) && ($("#ProductMenuBox10-Product").append("<a href=/" + t.lang + "/Product/" + t.value[i].Id + "/" + t.value[i].UrlProductName + ">" + t.value[i].ProductModelName + "</a></br>"),
                                3 == ++e)) {
                                    $("#ProductMenuBox10-Product").append("<div class='PaddingTop5'><a style='font-size: 15px !important;  margin-top: 10px;' href= /" + t.lang + "/Product-of-Group/" + t.value[i].ProductGroupId + ">" + t.SeeAnotherProductOfThisGroup + "</a></div>");
                                    break
                                }
                        },
                        error: function() {},
                        complete: function() {}
                    });
                    break;
                case "11":
                    $("#ProductMenuBox11-Header").append("<a href=/" + t.lang + "/Product-of-Group/" + t.value[i].Id + "/" + t.value[i].UrlGroupName + ">" + t.value[i].Name + "</a><span class='glyphicon glyphicon-stop IconFloatSetting' style='font-size: 16px;color:rgb(67, 82, 90)'></span>"),
                    e.groupId = t.value[i].Id,
                    $.ajax({
                        url: "/Home/GetProduct/",
                        type: "post",
                        timeout: 1e4,
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: function() {},
                        success: function(t) {
                            for (var e = 0, i = 0; i < t.value.length; i++)
                                if (!(0 < i && t.value[i].ProductModelName.trim() === t.value[i - 1].ProductModelName.trim()) && ($("#ProductMenuBox11-Product").append("<a href=/" + t.lang + "/Product/" + t.value[i].Id + "/" + t.value[i].UrlProductName + ">" + t.value[i].ProductModelName + "</a></br>"),
                                3 == ++e)) {
                                    $("#ProductMenuBox11-Product").append("<div class='PaddingTop5'><a style='font-size: 15px !important;  margin-top: 10px;' href= /" + t.lang + "/Product-of-Group/" + t.value[i].ProductGroupId + ">" + t.SeeAnotherProductOfThisGroup + "</a></div>");
                                    break
                                }
                        },
                        error: function() {},
                        complete: function() {}
                    });
                    break;
                case "12":
                    $("#ProductMenuBox12-Header").append("<a href=/" + t.lang + "/Product-of-Group/" + t.value[i].Id + "/" + t.value[i].UrlGroupName + ">" + t.value[i].Name + "</a><span class='glyphicon glyphicon-stop IconFloatSetting' style='font-size: 16px;color:rgb(67, 82, 90)'></span>"),
                    e.groupId = t.value[i].Id,
                    $.ajax({
                        url: "/Home/GetProduct/",
                        type: "post",
                        timeout: 1e4,
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: function() {},
                        success: function(t) {
                            for (var e = 0, i = 0; i < t.value.length; i++)
                                if (!(0 < i && t.value[i].ProductModelName.trim() === t.value[i - 1].ProductModelName.trim()) && ($("#ProductMenuBox12-Product").append("<a href=/" + t.lang + "/Product/" + t.value[i].Id + "/" + t.value[i].UrlProductName + ">" + t.value[i].ProductModelName + "</a></br>"),
                                3 == ++e)) {
                                    $("#ProductMenuBox12-Product").append("<div class='PaddingTop5'><a style='font-size: 15px !important;  margin-top: 10px;' href= /" + t.lang + "/Product-of-Group/" + t.value[i].ProductGroupId + ">" + t.SeeAnotherProductOfThisGroup + "</a></div>");
                                    break
                                }
                        },
                        error: function() {},
                        complete: function() {}
                    })
                }
        },
        error: function() {},
        complete: function() {}
    }),
    $("#MobileMenuButton").click(function() {
        return "0" === $("#MobileMenuOpenCloseFlag").val() ? ($("#HomePage").removeClass("MenuTabBackColor"),
        $("#ProductAndServices").removeClass("MenuTabBackColor"),
        $("#AboutAbadgrarn").removeClass("MenuTabBackColor"),
        $("#ContactAbadgaran").removeClass("MenuTabBackColor"),
        $("#WorkingWithAbadgaran").removeClass("MenuTabBackColor"),
        $("#NewChemicalProduct").removeClass("MenuTabBackColor"),
        $("#HomePageExpandMenuDiv").removeClass("ExpandMenuDivDisplay").addClass("ExpandMenuDivHidden"),
        $("#ProductAndServicesExpandMenuDiv").removeClass("ExpandMenuDivDisplay").addClass("ExpandMenuDivHidden"),
        $("#AboutAbadgrarnExpandMenuDiv").removeClass("ExpandMenuDivDisplay").addClass("ExpandMenuDivHidden"),
        $("#ContactAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").addClass("ExpandMenuDivHidden"),
        $("#WorkingWithAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").addClass("ExpandMenuDivHidden"),
        $("#NewChemicalProductExpandMenuDiv").removeClass("ExpandMenuDivDisplay").addClass("ExpandMenuDivHidden"),
        $("#MobileMenuOpenCloseFlag").val("1"),
        $(".HorizontalNavigationDivider").removeClass("hidden-xs").addClass("col-xs-12"),
        $("#HomePage").removeClass("hidden-xs").addClass("col-xs-12"),
        $("#ProductAndServices").removeClass("hidden-xs").addClass("col-xs-12"),
        $("#AboutAbadgrarn").removeClass("hidden-xs").addClass("col-xs-12"),
        $("#ContactAbadgaran").removeClass("hidden-xs").addClass("col-xs-12"),
        $("#SearchBox").removeClass("hidden-xs").addClass("col-xs-12"),
        $("#WorkingWithAbadgaran").removeClass("hidden-xs").addClass("col-xs-12"),
        void $("#NewChemicalProduct").removeClass("hidden-xs").addClass("col-xs-12")) : "1" === $("#MobileMenuOpenCloseFlag").val() ? ($("#ProductAndServices").removeClass("MenuTabBackColor"),
        $("#AboutAbadgrarn").removeClass("MenuTabBackColor"),
        $("#ContactAbadgaran").removeClass("MenuTabBackColor"),
        $("#WorkingWithAbadgaran").removeClass("MenuTabBackColor"),
        $("#HomePageLink").removeClass("MenuTabBackColor"),
        $("#NewChemicalProduct").removeClass("MenuTabBackColor"),
        $("#HomePageExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#ProductAndServicesExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#AboutAbadgrarnExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#ContactAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#WorkingWithAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#NewChemicalProductExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#MobileMenuOpenCloseFlag").val("0"),
        $(".HorizontalNavigationDivider").removeClass("col-xs-12").addClass("hidden-xs"),
        $("#ProductAndServices").removeClass("col-xs-12").addClass("hidden-xs"),
        $("#AboutAbadgrarn").removeClass("col-xs-12").addClass("hidden-xs"),
        $("#ContactAbadgaran").removeClass("col-xs-12").addClass("hidden-xs"),
        $("#SearchBox").removeClass("col-xs-12").addClass("hidden-xs"),
        $("#WorkingWithAbadgaran").removeClass("col-xs-12").addClass("hidden-xs"),
        $("#HomePageLink").removeClass("col-xs-12").addClass("hidden-xs"),
        void $("#NewChemicalProduct").removeClass("col-xs-12").addClass("hidden-xs")) : void 0
    }),
    $("#HomePageLink").click(function() {
        window.location.href = "/" + $("#LanguageCulture").val()
    }),
    $("#SearchButton").click(function() {
        var t;
        "" !== $("#HeaderSearchText").val() && (t = $("#HeaderSearchText").val(),
        window.location.href = "/" + $("#LanguageCulture").val() + "/Search/?productName=" + t)
    }),
    $(document).on("click", ".ui-menu-item-wrapper", function() {
        var t = $(this).text();
        window.location.href = "/" + $("#LanguageCulture").val() + "/Search/?productName=" + t
    }),
    $(document).keypress(function(t) {
        13 === t.which && "" !== $("#HeaderSearchText").val() && (t = $("#HeaderSearchText").val(),
        window.location.href = "/" + $("#LanguageCulture").val() + "/Search/?productName=" + t)
    }),
    $(document).on("mouseleave", ".ExpandMenuDivDisplay", function() {
        $("#ProductAndServices").removeClass("MenuTabBackColor"),
        $("#AboutAbadgrarn").removeClass("MenuTabBackColor"),
        $("#WorkingWithAbadgaran").removeClass("MenuTabBackColor"),
        $("#ContactAbadgaran").removeClass("MenuTabBackColor"),
        $("#NewChemicalProduct").removeClass("MenuTabBackColor"),
        $("#ProductAndServicesExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#AboutAbadgrarnExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#WorkingWithAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#ContactAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#NewChemicalProductExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#MenuTabOpenId").val("")
    }),
    $("#ProductAndServices").click(function() {
        return $("#MenuTabOpenId").val() === $(this).attr("Id") ? ($(this).removeClass("MenuTabBackColor"),
        $("#ProductAndServicesExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        void $("#MenuTabOpenId").val("")) : ("1" === $("#MobileMenuOpenCloseFlag").val() && window.scrollTo(0, 300),
        $("#MenuTabOpenId").val($(this).attr("Id")),
        $(this).addClass("MenuTabBackColor"),
        $("#HomePage").removeClass("MenuTabBackColor"),
        $("#AboutAbadgrarn").removeClass("MenuTabBackColor"),
        $("#ContactAbadgaran").removeClass("MenuTabBackColor"),
        $("#WorkingWithAbadgaran").removeClass("MenuTabBackColor"),
        $("#NewChemicalProduct").removeClass("MenuTabBackColor"),
        $("#HomePageExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#AboutAbadgrarnExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#ContactAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#WorkingWithAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#NewChemicalProductExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        void ("1" === $("#MobileMenuOpenCloseFlag").val() ? $("#ProductAndServicesExpandMenuDiv").removeClass("ExpandMenuDivHidden").addClass("ExpandMenuDivDisplay").addClass("ResetPositionProp") : $("#ProductAndServicesExpandMenuDiv").removeClass("ExpandMenuDivHidden").addClass("ExpandMenuDivDisplay")))
    }),
    $("#AboutAbadgrarn").click(function() {
        return $("#MenuTabOpenId").val() === $(this).attr("Id") ? ($(this).removeClass("MenuTabBackColor"),
        $("#AboutAbadgrarnExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        void $("#MenuTabOpenId").val("")) : ("1" === $("#MobileMenuOpenCloseFlag").val() && window.scrollTo(0, 300),
        $("#MenuTabOpenId").val($(this).attr("Id")),
        $(this).addClass("MenuTabBackColor"),
        $("#HomePage").removeClass("MenuTabBackColor"),
        $("#ProductAndServices").removeClass("MenuTabBackColor"),
        $("#ContactAbadgaran").removeClass("MenuTabBackColor"),
        $("#WorkingWithAbadgaran").removeClass("MenuTabBackColor"),
        $("#NewChemicalProduct").removeClass("MenuTabBackColor"),
        $("#HomePageExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#ProductAndServicesExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#ContactAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#WorkingWithAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#NewChemicalProductExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        void ("1" === $("#MobileMenuOpenCloseFlag").val() ? $("#AboutAbadgrarnExpandMenuDiv").removeClass("ExpandMenuDivHidden").addClass("ExpandMenuDivDisplay").addClass("ResetPositionProp") : $("#AboutAbadgrarnExpandMenuDiv").removeClass("ExpandMenuDivHidden").addClass("ExpandMenuDivDisplay")))
    }),
    $("#ContactAbadgaran").click(function() {
        return $("#MenuTabOpenId").val() === $(this).attr("Id") ? ($(this).removeClass("MenuTabBackColor"),
        $("#ContactAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        void $("#MenuTabOpenId").val("")) : ("1" === $("#MobileMenuOpenCloseFlag").val() && window.scrollTo(0, 300),
        $("#MenuTabOpenId").val($(this).attr("Id")),
        $(this).addClass("MenuTabBackColor"),
        $("#HomePage").removeClass("MenuTabBackColor"),
        $("#ProductAndServices").removeClass("MenuTabBackColor"),
        $("#AboutAbadgrarn").removeClass("MenuTabBackColor"),
        $("#WorkingWithAbadgaran").removeClass("MenuTabBackColor"),
        $("#NewChemicalProduct").removeClass("MenuTabBackColor"),
        $("#HomePageExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#ProductAndServicesExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#AboutAbadgrarnExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#WorkingWithAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#NewChemicalProductExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        void ("1" === $("#MobileMenuOpenCloseFlag").val() ? $("#ContactAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivHidden").addClass("ExpandMenuDivDisplay").addClass("ResetPositionProp") : $("#ContactAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivHidden").addClass("ExpandMenuDivDisplay")))
    }),
    $("#WorkingWithAbadgaran").click(function() {
        return $("#MenuTabOpenId").val() === $(this).attr("Id") ? ($(this).removeClass("MenuTabBackColor"),
        $("#WorkingWithAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        void $("#MenuTabOpenId").val("")) : ("1" === $("#MobileMenuOpenCloseFlag").val() && window.scrollTo(0, 300),
        $("#MenuTabOpenId").val($(this).attr("Id")),
        $(this).addClass("MenuTabBackColor"),
        $("#HomePage").removeClass("MenuTabBackColor"),
        $("#ProductAndServices").removeClass("MenuTabBackColor"),
        $("#AboutAbadgrarn").removeClass("MenuTabBackColor"),
        $("#ContactAbadgaran").removeClass("MenuTabBackColor"),
        $("#NewChemicalProduct").removeClass("MenuTabBackColor"),
        $("#HomePageExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#ProductAndServicesExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#AboutAbadgrarnExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#ContactAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#NewChemicalProductExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        void ("1" === $("#MobileMenuOpenCloseFlag").val() ? $("#WorkingWithAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivHidden").addClass("ExpandMenuDivDisplay").addClass("ResetPositionProp") : $("#WorkingWithAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivHidden").addClass("ExpandMenuDivDisplay")))
    }),
    $("#NewChemicalProduct").click(function() {
        return $("#MenuTabOpenId").val() === $(this).attr("Id") ? ($(this).removeClass("MenuTabBackColor"),
        $("#NewChemicalProductExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        void $("#MenuTabOpenId").val("")) : ("1" === $("#MobileMenuOpenCloseFlag").val() && window.scrollTo(0, 300),
        $("#MenuTabOpenId").val($(this).attr("Id")),
        $(this).addClass("MenuTabBackColor"),
        $("#HomePage").removeClass("MenuTabBackColor"),
        $("#ProductAndServices").removeClass("MenuTabBackColor"),
        $("#AboutAbadgrarn").removeClass("MenuTabBackColor"),
        $("#ContactAbadgaran").removeClass("MenuTabBackColor"),
        $("#WorkingWithAbadgaran").removeClass("MenuTabBackColor"),
        $("#HomePageExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#ProductAndServicesExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#AboutAbadgrarnExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#ContactAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        $("#WorkingWithAbadgaranExpandMenuDiv").removeClass("ExpandMenuDivDisplay").removeClass("ResetPositionProp").addClass("ExpandMenuDivHidden"),
        void ("1" === $("#MobileMenuOpenCloseFlag").val() ? $("#NewChemicalProductExpandMenuDiv").removeClass("ExpandMenuDivHidden").addClass("ExpandMenuDivDisplay").addClass("ResetPositionProp") : $("#NewChemicalProductExpandMenuDiv").removeClass("ExpandMenuDivHidden").addClass("ExpandMenuDivDisplay")))
    })
}),
$(document).ready(function(t) {
    $(function() {
        $("#HeaderSearchText").autocomplete({
            source: function(t, i) {
                var n = []
                  , e = new Object;
                e.prefix = $("#HeaderSearchText").val(),
                $.ajax({
                    url: "/Home/ProvideDataForAutocomplete/",
                    type: "post",
                    timeout: 1e4,
                    data: JSON.stringify(e),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    beforeSend: function() {},
                    success: function(t) {
                        for (var e = 0; e < t.value.length; e++)
                            n[e] = t.value[e].ProductFullName;
                        i(n)
                    },
                    error: function(t, e, i) {},
                    complete: function() {}
                })
            }
        })
    })
}),
$(document).ready(function() {
    $(".FirstPageChildContentImage,.ContentHeaderIsHide").mouseenter(function() {
        $(this).parent().find(".ContentHeaderIsHide").addClass("FirstPageContentHeader")
    }),
    $(".FirstPageChildContentImage,.ContentHeaderIsHide").mouseout(function() {
        $(this).parent().find(".ContentHeaderIsHide").removeClass("FirstPageContentHeader")
    })
}),
$(document).ready(function() {
    $(document).on("click", ".ProductGroupExpand", function() {
        $(this).removeClass("ProductGroupExpand").removeClass("glyphicon glyphicon-plus").addClass("ProductGroupClose").addClass("glyphicon glyphicon-remove"),
        $("#ProductGroupShortExplain" + $(this).attr("id")).addClass("ProductGroupDetailHide").removeClass("ProductGroupDetailDisplay"),
        $("#ProductGroupMainExplain" + $(this).attr("id")).addClass("ProductGroupDetailDisplay").removeClass("ProductGroupDetailHide"),
        $("#ProductGroupImageBox" + $(this).attr("id")).addClass("ProductGroupDetailDisplay").removeClass("ProductGroupDetailHide"),
        $("#ProductGroupProductBox" + $(this).attr("id")).addClass("ProductGroupDetailDisplay").removeClass("ProductGroupDetailHide")
    }),
    $(document).on("click", ".ProductGroupClose", function() {
        $(this).removeClass("ProductGroupClose").removeClass("glyphicon glyphicon-remove").addClass("ProductGroupExpand").addClass("glyphicon glyphicon-plus"),
        $("#ProductGroupShortExplain" + $(this).attr("id")).addClass("ProductGroupDetailDisplay").removeClass("ProductGroupDetailHide"),
        $("#ProductGroupMainExplain" + $(this).attr("id")).addClass("ProductGroupDetailHide").removeClass("ProductGroupDetailDisplay"),
        $("#ProductGroupImageBox" + $(this).attr("id")).addClass("ProductGroupDetailHide").removeClass("ProductGroupDetailDisplay"),
        $("#ProductGroupProductBox" + $(this).attr("id")).addClass("ProductGroupDetailHide").removeClass("ProductGroupDetailDisplay")
    })
}),
$(document).ready(function() {
    $("#BtnSendMassage").click(function() {
        "" === $("#MassageBody").val() ? ($("#FeedBackMassage").addClass("TdFeedBackMassageFailed"),
        $("#FeedBackMassage").text("متن پیام نمیتواند خالی باشد.")) : ($("#MassageBody").val(""),
        $("#MassageOwnerEmail").val(""),
        $("#MassageOwnerMobile").val(""),
        $("#MassageOwnerLastName").val(""),
        $("#MassageOwnerName").val(""),
        $("#FeedBackMassage").removeClass("TdFeedBackMassageFailed"),
        $("#FeedBackMassage").addClass("TdFeedBackMassageSuccesse"),
        $("#FeedBackMassage").text("پیام شما با موفقیت ذخیره شد."))
    })
}),
$(document).ready(function(t) {
    $("#DrpDwonState").change(function() {
        var t = {
            stateId: $(this).val()
        };
        "" !== t.stateId && $.ajax({
            url: "/Home/DrpDwonStateChanged/",
            type: "Post",
            timeout: 2e4,
            data: JSON.stringify(t),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function() {},
            success: function(t) {
                if ("-1" !== t.value) {
                    $("#DrpDwonCity").find("option:not([value=''])").remove();
                    for (var e = 0; e < t.value.length; e++) {
                        var i = "<option value='" + t.value[e].Id + "'>" + t.value[e].Name + "</option>";
                        $("#DrpDwonCity").append(i)
                    }
                }
            },
            error: function(t, e, i) {},
            complete: function() {}
        })
    }),
    $("#DrpDwonProductGroup").change(function() {
        var t = {
            groupId: $(this).val()
        };
        "" !== t.groupId && $.ajax({
            url: "/Home/GetProduct/",
            type: "Post",
            timeout: 2e4,
            data: JSON.stringify(t),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function() {},
            success: function(t) {
                if ("-1" !== t.value) {
                    $("#DrpDwonProduct").find("option:not([value=''])").remove();
                    for (var e = 0; e < t.value.length; e++) {
                        var i = "<option value='" + t.value[e].Id + "'>" + t.value[e].ProductFullName + "</option>";
                        $("#DrpDwonProduct").append(i)
                    }
                }
            },
            error: function(t, e, i) {},
            complete: function() {}
        })
    }),
    $("#AddProductGroup").click(function() {
        var t = {
            productId: $("#DrpDwonProduct").val()
        };
        "" !== t.productId && $.ajax({
            url: "/Home/AddProductToSaleRequest/",
            type: "Post",
            timeout: 2e4,
            data: JSON.stringify(t),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function() {},
            success: function(t) {
                if ("-1" !== t.value) {
                    $("#SaleRequestProduct").find("div").remove();
                    for (var e = 0; e < t.value.length; e++) {
                        0 === e && $("#SaleRequestProduct").append(" <div  class='TblProductHeader  col-lg-10 col-md-10 col-sm-12 col-xs-12 pull-right'><div  class='TblProductHeaderField col-lg-4 col-md-4 col-sm-4 col-xs-12'>حذف</div><div  class='TblProductHeaderField col-lg-4 col-md-4 col-sm-4 col-xs-12'>نام محصول</div><div  class='TblProductHeaderField col-lg-4 col-md-4 col-sm-4 col-xs-12'> نام گروه</div></div>");
                        var i = "<div  class='TblProductRow  col-lg-10 col-md-10 col-sm-12 col-xs-12 pull-right'><div id=" + t.value[e].ProductId + "  class='TblProductRowRemove col-lg-4 col-md-4 col-sm-4 col-xs-12'><span class='glyphicon glyphicon-remove'></span></div><div  class='TblProductRowField col-lg-4 col-md-4 col-sm-4 col-xs-12'>" + t.value[e].ProductName + "</div><div  class='TblProductRowField col-lg-4 col-md-4 col-sm-4 col-xs-12 '>" + t.value[e].ProductGroupName + "</div></div>";
                        $("#SaleRequestProduct").append(i)
                    }
                }
            },
            error: function(t, e, i) {},
            complete: function() {}
        })
    }),
    $(document).on("click", ".TblProductRowRemove", function() {
        var t = {
            productId: $(this).attr("Id")
        };
        "" !== t.productId && $.ajax({
            url: "/Home/RemoveProductFromSaleRequest/",
            type: "Post",
            timeout: 2e4,
            data: JSON.stringify(t),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function() {},
            success: function(t) {
                if ("-1" !== t.value) {
                    $("#SaleRequestProduct").find("div").remove();
                    for (var e = 0; e < t.value.length; e++) {
                        0 === e && $("#SaleRequestProduct").append(" <div  class='TblProductHeader  col-lg-10 col-md-10 col-sm-12 col-xs-12 pull-right'><div  class='TblProductHeaderField col-lg-4 col-md-4 col-sm-4 col-xs-12'>حذف</div><div  class='TblProductHeaderField col-lg-4 col-md-4 col-sm-4 col-xs-12'>نام محصول</div><div  class='TblProductHeaderField col-lg-4 col-md-4 col-sm-4 col-xs-12'> نام گروه</div></div>");
                        var i = "<div  class='TblProductRow  col-lg-10 col-md-10 col-sm-12 col-xs-12 pull-right'><div id=" + t.value[e].ProductId + "  class='TblProductRowRemove col-lg-4 col-md-4 col-sm-4 col-xs-12'><span class='glyphicon glyphicon-remove'></span></div><div  class='TblProductRowField col-lg-4 col-md-4 col-sm-4 col-xs-12'>" + t.value[e].ProductName + "</div><div  class='TblProductRowField col-lg-4 col-md-4 col-sm-4 col-xs-12 '>" + t.value[e].ProductGroupName + "</div></div>";
                        $("#SaleRequestProduct").append(i)
                    }
                }
            },
            error: function(t, e, i) {},
            complete: function() {}
        })
    })
}),
$(document).ready(function(t) {
    $("#DrpDwonProductGroup").change(function() {
        var t = {
            groupId: $(this).val()
        };
        "" !== t.groupId && $.ajax({
            url: $("#baseUrl").val() + "Home/GetProduct/",
            type: "Post",
            timeout: 2e4,
            data: JSON.stringify(t),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function() {},
            success: function(t) {
                if ("-1" !== t.value) {
                    $("#DrpDwonProduct").find("option:not([value=''])").remove();
                    for (var e = 0; e < t.value.length; e++) {
                        var i = "<option value='" + t.value[e].Id + "'>" + t.value[e].ProductFullName + "</option>";
                        $("#DrpDwonProduct").append(i)
                    }
                }
            },
            error: function(t, e, i) {},
            complete: function() {}
        })
    })
}),
$(document).ready(function() {
    var e = null
      , i = null;
    $.ajax({
        url: "/Home/WebSiteUserMassageSuccessAndAlert/",
        type: "post",
        timeout: 1e4,
        data: JSON.stringify(),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function() {},
        success: function(t) {
            e = t.SuccessValue,
            i = t.FailureValue
        },
        error: function() {},
        complete: function() {}
    }),
    $("#BtnSendMassage").click(function() {
        var t;
        "" === $("#MassageBody").val() ? ($("#FeedBackMassage").addClass("TdFeedBackMassageFailed"),
        $("#FeedBackMassage").text(i)) : ((t = new Object).FName = $("#MassageOwnerName").val(),
        t.LName = $("#MassageOwnerLastName").val(),
        t.Email = $("#MassageOwnerEmail").val(),
        t.Subject = $("#MassageOwnerSubject").val(),
        t.Text = $("#MassageBody").val(),
        t.Mobile = $("#MassageOwnerMobile").val(),
        $.ajax({
            url: "/Home/WebSiteUserMassage/",
            type: "post",
            timeout: 1e4,
            data: JSON.stringify(t),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function() {},
            success: function() {
                $("#MassageBody").val(""),
                $("#MassageOwnerEmail").val(""),
                $("#MassageOwnerMobile").val(""),
                $("#MassageOwnerLastName").val(""),
                $("#MassageOwnerName").val(""),
                $("#MassageOwnerSubject").val(""),
                $("#FeedBackMassage").removeClass("TdFeedBackMassageFailed"),
                $("#FeedBackMassage").addClass("TdFeedBackMassageSuccesse"),
                $("#FeedBackMassage").text(e)
            },
            error: function() {},
            complete: function() {}
        }))
    })
}),
$(document).ready(function() {
    $("#languageSelectDrp").on("change", function() {
        window.location.href = "/" + this.value + "/change_language/?lang=" + this.value
    }),
    $("#languageSelectDrpMobile").on("change", function() {
        window.location.href = "/" + this.value + "/change_language/?lang=" + this.value

    })
});