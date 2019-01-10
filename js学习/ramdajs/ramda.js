! function (t, n) {
  "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(t.R = {})
}(this, function (t) {
  "use strict";

  function n(t) {
    return null != t && "object" == typeof t && !0 === t["@@functional/placeholder"]
  }

  function r(t) {
    return function r(e) {
      return 0 === arguments.length || n(e) ? r : t.apply(this, arguments)
    }
  }

  function e(t) {
    return function e(u, i) {
      switch (arguments.length) {
        case 0:
          return e;
        case 1:
          return n(u) ? e : r(function (n) {
            return t(u, n)
          });
        default:
          return n(u) && n(i) ? e : n(u) ? r(function (n) {
            return t(n, i)
          }) : n(i) ? r(function (n) {
            return t(u, n)
          }) : t(u, i)
      }
    }
  }

  function u(t, n) {
    t = t || [], n = n || [];
    var r, e = t.length,
      u = n.length,
      i = [];
    for (r = 0; e > r;) i[i.length] = t[r], r += 1;
    for (r = 0; u > r;) i[i.length] = n[r], r += 1;
    return i
  }

  function i(t, n) {
    switch (t) {
      case 0:
        return function () {
          return n.apply(this, arguments)
        };
      case 1:
        return function (t) {
          return n.apply(this, arguments)
        };
      case 2:
        return function (t, r) {
          return n.apply(this, arguments)
        };
      case 3:
        return function (t, r, e) {
          return n.apply(this, arguments)
        };
      case 4:
        return function (t, r, e, u) {
          return n.apply(this, arguments)
        };
      case 5:
        return function (t, r, e, u, i) {
          return n.apply(this, arguments)
        };
      case 6:
        return function (t, r, e, u, i, o) {
          return n.apply(this, arguments)
        };
      case 7:
        return function (t, r, e, u, i, o, c) {
          return n.apply(this, arguments)
        };
      case 8:
        return function (t, r, e, u, i, o, c, a) {
          return n.apply(this, arguments)
        };
      case 9:
        return function (t, r, e, u, i, o, c, a, s) {
          return n.apply(this, arguments)
        };
      case 10:
        return function (t, r, e, u, i, o, c, a, s, f) {
          return n.apply(this, arguments)
        };
      default:
        throw Error("First argument to _arity must be a non-negative integer no greater than ten")
    }
  }

  function o(t, r, e) {
    return function () {
      for (var u = [], c = 0, a = t, s = 0; r.length > s || arguments.length > c;) {
        var f;
        s >= r.length || n(r[s]) && arguments.length > c ? (f = arguments[c], c += 1) : f = r[s], u[s] = f, n(f) || (a -= 1), s += 1
      }
      return a > 0 ? i(a, o(t, u, e)) : e.apply(this, u)
    }
  }

  function c(t) {
    return function u(i, o, c) {
      switch (arguments.length) {
        case 0:
          return u;
        case 1:
          return n(i) ? u : e(function (n, r) {
            return t(i, n, r)
          });
        case 2:
          return n(i) && n(o) ? u : n(i) ? e(function (n, r) {
            return t(n, o, r)
          }) : n(o) ? e(function (n, r) {
            return t(i, n, r)
          }) : r(function (n) {
            return t(i, o, n)
          });
        default:
          return n(i) && n(o) && n(c) ? u : n(i) && n(o) ? e(function (n, r) {
            return t(n, r, c)
          }) : n(i) && n(c) ? e(function (n, r) {
            return t(n, o, r)
          }) : n(o) && n(c) ? e(function (n, r) {
            return t(i, n, r)
          }) : n(i) ? r(function (n) {
            return t(n, o, c)
          }) : n(o) ? r(function (n) {
            return t(i, n, c)
          }) : n(c) ? r(function (n) {
            return t(i, o, n)
          }) : t(i, o, c)
      }
    }
  }

  function a(t) {
    return "function" == typeof t["@@transducer/step"]
  }

  function s(t, n, r) {
    return function () {
      if (0 === arguments.length) return r();
      var e = Array.prototype.slice.call(arguments, 0),
        u = e.pop();
      if (!At(u)) {
        for (var i = 0; t.length > i;) {
          if ("function" == typeof u[t[i]]) return u[t[i]].apply(u, e);
          i += 1
        }
        if (a(u)) return n.apply(null, e)(u)
      }
      return r.apply(this, arguments)
    }
  }

  function f(t) {
    return t && t["@@transducer/reduced"] ? t : {
      "@@transducer/value": t,
      "@@transducer/reduced": !0
    }
  }

  function l(t, n) {
    this.xf = n, this.f = t, this.all = !0
  }

  function p(t, n) {
    for (var r = 0, e = n.length, u = Array(e); e > r;) u[r] = t(n[r]), r += 1;
    return u
  }

  function h(t) {
    return "[object String]" === Object.prototype.toString.call(t)
  }

  function y(t) {
    this.f = t
  }

  function d(t) {
    return new y(t)
  }

  function g(t, n, r) {
    for (var e = 0, u = r.length; u > e;) {
      if ((n = t["@@transducer/step"](n, r[e])) && n["@@transducer/reduced"]) {
        n = n["@@transducer/value"];
        break
      }
      e += 1
    }
    return t["@@transducer/result"](n)
  }

  function v(t, n, r) {
    for (var e = r.next(); !e.done;) {
      if ((n = t["@@transducer/step"](n, e.value)) && n["@@transducer/reduced"]) {
        n = n["@@transducer/value"];
        break
      }
      e = r.next()
    }
    return t["@@transducer/result"](n)
  }

  function m(t, n, r, e) {
    return t["@@transducer/result"](r[e](qt(t["@@transducer/step"], t), n))
  }

  function b(t, n, r) {
    if ("function" == typeof t && (t = d(t)), _t(r)) return g(t, n, r);
    if ("function" == typeof r["fantasy-land/reduce"]) return m(t, n, r, "fantasy-land/reduce");
    if (null != r[kt]) return v(t, n, r[kt]());
    if ("function" == typeof r.next) return v(t, n, r);
    if ("function" == typeof r.reduce) return m(t, n, r, "reduce");
    throw new TypeError("reduce: list must be array or iterable")
  }

  function x(t, n) {
    this.xf = n, this.f = t
  }

  function w(t, n) {
    return Object.prototype.hasOwnProperty.call(n, t)
  }

  function j(t, n) {
    this.xf = n, this.f = t, this.any = !1
  }

  function A(t, n) {
    this.xf = n, this.pos = 0, this.full = !1, this.acc = Array(t)
  }

  function O(t) {
    return "[object Function]" === Object.prototype.toString.call(t)
  }

  function S(t) {
    return function n(r) {
      for (var e, u, i, o = [], c = 0, a = r.length; a > c;) {
        if (_t(r[c]))
          for (i = 0, u = (e = t ? n(r[c]) : r[c]).length; u > i;) o[o.length] = e[i], i += 1;
        else o[o.length] = r[c];
        c += 1
      }
      return o
    }
  }

  function E(t) {
    return {
      "@@transducer/value": t,
      "@@transducer/reduced": !0
    }
  }

  function _(t) {
    return RegExp(t.source, (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : ""))
  }

  function q(t, n, r, e) {
    var u = function (u) {
      for (var i = n.length, o = 0; i > o;) {
        if (t === n[o]) return r[o];
        o += 1
      }
      n[o + 1] = t, r[o + 1] = u;
      for (var c in t) u[c] = e ? q(t[c], n, r, !0) : t[c];
      return u
    };
    switch (mn(t)) {
      case "Object":
        return u({});
      case "Array":
        return u([]);
      case "Date":
        return new Date(t.valueOf());
      case "RegExp":
        return _(t);
      default:
        return t
    }
  }

  function k(t, n) {
    return function () {
      return n.call(this, t.apply(this, arguments))
    }
  }

  function N(t, n) {
    return function () {
      var r = arguments.length;
      if (0 === r) return n();
      var e = arguments[r - 1];
      return At(e) || "function" != typeof e[t] ? n.apply(this, arguments) : e[t].apply(e, Array.prototype.slice.call(arguments, 0, r - 1))
    }
  }

  function I() {
    if (0 === arguments.length) throw Error("pipe requires at least one argument");
    return i(arguments[0].length, Mt(k, arguments[0], On(arguments)))
  }

  function W() {
    if (0 === arguments.length) throw Error("compose requires at least one argument");
    return I.apply(this, Sn(arguments))
  }

  function P() {
    if (0 === arguments.length) throw Error("composeK requires at least one argument");
    var t = Array.prototype.slice.call(arguments),
      n = t.pop();
    return W(W.apply(this, Rt(gn, t)), n)
  }

  function C(t, n) {
    return function () {
      var r = this;
      return t.apply(r, arguments).then(function (t) {
        return n.call(r, t)
      })
    }
  }

  function T() {
    if (0 === arguments.length) throw Error("pipeP requires at least one argument");
    return i(arguments[0].length, Mt(C, arguments[0], On(arguments)))
  }

  function B(t) {
    for (var n, r = []; !(n = t.next()).done;) r.push(n.value);
    return r
  }

  function F(t, n, r) {
    for (var e = 0, u = r.length; u > e;) {
      if (t(n, r[e])) return !0;
      e += 1
    }
    return !1
  }

  function R(t) {
    var n = (t + "").match(/^function (\w*)/);
    return null == n ? "" : n[1]
  }

  function U(t, n, r, e) {
    function u(t, n) {
      return D(t, n, r.slice(), e.slice())
    }
    var i = B(t);
    return !F(function (t, n) {
      return !F(u, n, t)
    }, B(n), i)
  }

  function D(t, n, r, e) {
    if (En(t, n)) return !0;
    var u = mn(t);
    if (u !== mn(n)) return !1;
    if (null == t || null == n) return !1;
    if ("function" == typeof t["fantasy-land/equals"] || "function" == typeof n["fantasy-land/equals"]) return "function" == typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](n) && "function" == typeof n["fantasy-land/equals"] && n["fantasy-land/equals"](t);
    if ("function" == typeof t.equals || "function" == typeof n.equals) return "function" == typeof t.equals && t.equals(n) && "function" == typeof n.equals && n.equals(t);
    switch (u) {
      case "Arguments":
      case "Array":
      case "Object":
        if ("function" == typeof t.constructor && "Promise" === R(t.constructor)) return t === n;
        break;
      case "Boolean":
      case "Number":
      case "String":
        if (typeof t != typeof n || !En(t.valueOf(), n.valueOf())) return !1;
        break;
      case "Date":
        if (!En(t.valueOf(), n.valueOf())) return !1;
        break;
      case "Error":
        return t.name === n.name && t.message === n.message;
      case "RegExp":
        if (t.source !== n.source || t.global !== n.global || t.ignoreCase !== n.ignoreCase || t.multiline !== n.multiline || t.sticky !== n.sticky || t.unicode !== n.unicode) return !1
    }
    for (var i = r.length - 1; i >= 0;) {
      if (r[i] === t) return e[i] === n;
      i -= 1
    }
    switch (u) {
      case "Map":
        return t.size === n.size && U(t.entries(), n.entries(), r.concat([t]), e.concat([n]));
      case "Set":
        return t.size === n.size && U(t.values(), n.values(), r.concat([t]), e.concat([n]));
      case "Arguments":
      case "Array":
      case "Object":
      case "Boolean":
      case "Number":
      case "String":
      case "Date":
      case "Error":
      case "RegExp":
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "ArrayBuffer":
        break;
      default:
        return !1
    }
    var o = Ft(t);
    if (o.length !== Ft(n).length) return !1;
    var c = r.concat([t]),
      a = e.concat([n]);
    for (i = o.length - 1; i >= 0;) {
      var s = o[i];
      if (!w(s, n) || !D(n[s], t[s], c, a)) return !1;
      i -= 1
    }
    return !0
  }

  function z(t, n, r) {
    var e, u;
    if ("function" == typeof t.indexOf) switch (typeof n) {
      case "number":
        if (0 === n) {
          for (e = 1 / n; t.length > r;) {
            if (0 === (u = t[r]) && 1 / u === e) return r;
            r += 1
          }
          return -1
        }
        if (n !== n) {
          for (; t.length > r;) {
            if ("number" == typeof (u = t[r]) && u !== u) return r;
            r += 1
          }
          return -1
        }
        return t.indexOf(n, r);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return t.indexOf(n, r);
      case "object":
        if (null === n) return t.indexOf(n, r)
    }
    for (; t.length > r;) {
      if (_n(t[r], n)) return r;
      r += 1
    }
    return -1
  }

  function M(t, n) {
    return z(n, t, 0) >= 0
  }

  function L(t) {
    return '"' + t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0").replace(/"/g, '\\"') + '"'
  }

  function K(t) {
    return function () {
      return !t.apply(this, arguments)
    }
  }

  function V(t, n) {
    for (var r = 0, e = n.length, u = []; e > r;) t(n[r]) && (u[u.length] = n[r]), r += 1;
    return u
  }

  function $(t) {
    return "[object Object]" === Object.prototype.toString.call(t)
  }

  function H(t, n) {
    this.xf = n, this.f = t
  }

  function J(t, n) {
    var r = function (r) {
        var e = n.concat([t]);
        return M(r, e) ? "<Circular>" : J(r, e)
      },
      e = function (t, n) {
        return p(function (n) {
          return L(n) + ": " + r(t[n])
        }, n.slice().sort())
      };
    switch (Object.prototype.toString.call(t)) {
      case "[object Arguments]":
        return "(function() { return arguments; }(" + p(r, t).join(", ") + "))";
      case "[object Array]":
        return "[" + p(r, t).concat(e(t, In(function (t) {
          return /^\d+$/.test(t)
        }, Ft(t)))).join(", ") + "]";
      case "[object Boolean]":
        return "object" == typeof t ? "new Boolean(" + r(t.valueOf()) + ")" : "" + t;
      case "[object Date]":
        return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : L(kn(t))) + ")";
      case "[object Null]":
        return "null";
      case "[object Number]":
        return "object" == typeof t ? "new Number(" + r(t.valueOf()) + ")" : 1 / t == -1 / 0 ? "-0" : t.toString(10);
      case "[object String]":
        return "object" == typeof t ? "new String(" + r(t.valueOf()) + ")" : L(t);
      case "[object Undefined]":
        return "undefined";
      default:
        if ("function" == typeof t.toString) {
          var u = "" + t;
          if ("[object Object]" !== u) return u
        }
        return "{" + e(t, Ft(t)).join(", ") + "}"
    }
  }

  function X(t, n, r, e) {
    this.valueFn = t, this.valueAcc = n, this.keyFn = r, this.xf = e, this.inputs = {}
  }

  function Y(t, n) {
    this.xf = n, this.n = t
  }

  function Z(t, n) {
    this.xf = n, this.n = t, this.i = 0
  }

  function G(t, n) {
    this.xf = n, this.pos = 0, this.full = !1, this.acc = Array(t)
  }

  function Q(t, n) {
    this.f = t, this.retained = [], this.xf = n
  }

  function tt(t, n) {
    this.xf = n, this.pred = t, this.lastValue = void 0, this.seenFirstValue = !1
  }

  function nt(t, n) {
    this.xf = n, this.f = t
  }

  function rt(t, n) {
    this.xf = n, this.f = t, this.found = !1
  }

  function et(t, n) {
    this.xf = n, this.f = t, this.idx = -1, this.found = !1
  }

  function ut(t, n) {
    this.xf = n, this.f = t
  }

  function it(t, n) {
    this.xf = n, this.f = t, this.idx = -1, this.lastIdx = -1
  }

  function ot(t) {
    return t
  }

  function ct() {
    this._nativeSet = "function" == typeof Set ? new Set : null, this._items = {}
  }

  function at(t, n, r) {
    var e, u = typeof t;
    switch (u) {
      case "string":
      case "number":
        return 0 === t && 1 / t == -1 / 0 ? !!r._items["-0"] || (n && (r._items["-0"] = !0), !1) : null !== r._nativeSet ? n ? (e = r._nativeSet.size, r._nativeSet.add(t), r._nativeSet.size === e) : r._nativeSet.has(t) : u in r._items ? t in r._items[u] || (n && (r._items[u][t] = !0), !1) : (n && (r._items[u] = {}, r._items[u][t] = !0), !1);
      case "boolean":
        if (u in r._items) {
          var i = t ? 1 : 0;
          return !!r._items[u][i] || (n && (r._items[u][i] = !0), !1)
        }
        return n && (r._items[u] = t ? [!1, !0] : [!0, !1]), !1;
      case "function":
        return null !== r._nativeSet ? n ? (e = r._nativeSet.size, r._nativeSet.add(t), r._nativeSet.size === e) : r._nativeSet.has(t) : u in r._items ? !!M(t, r._items[u]) || (n && r._items[u].push(t), !1) : (n && (r._items[u] = [t]), !1);
      case "undefined":
        return !!r._items[u] || (n && (r._items[u] = !0), !1);
      case "object":
        if (null === t) return !!r._items.null || (n && (r._items.null = !0), !1);
      default:
        return (u = Object.prototype.toString.call(t)) in r._items ? !!M(t, r._items[u]) || (n && r._items[u].push(t), !1) : (n && (r._items[u] = [t]), !1)
    }
  }

  function st(t) {
    if (a(t)) return t;
    if (_t(t)) return $r;
    if ("string" == typeof t) return Hr;
    if ("object" == typeof t) return Jr;
    throw Error("Cannot create transformer for " + t)
  }

  function ft(t) {
    return "[object Number]" === Object.prototype.toString.call(t)
  }

  function lt(t) {
    return e(function (n, r) {
      return i(Math.max(0, n.length - r.length), function () {
        return n.apply(this, t(r, arguments))
      })
    })
  }

  function pt(t, n) {
    this.xf = n, this.f = t
  }

  function ht(t, n) {
    this.xf = n, this.f = t
  }

  function yt(t) {
    return "[object RegExp]" === Object.prototype.toString.call(t)
  }
  var dt = r(function (t) {
      return function () {
        return t
      }
    }),
    gt = dt(!1),
    vt = dt(!0),
    mt = {
      "@@functional/placeholder": !0
    },
    bt = e(function (t, n) {
      return +t + +n
    }),
    xt = e(function (t, n) {
      return 1 === t ? r(n) : i(t, o(t, [], n))
    }),
    wt = r(function (t) {
      return xt(t.length, function () {
        var n = 0,
          r = arguments[0],
          e = arguments[arguments.length - 1],
          i = Array.prototype.slice.call(arguments, 0);
        return i[0] = function () {
          var t = r.apply(this, u(arguments, [n, e]));
          return n += 1, t
        }, t.apply(this, i)
      })
    }),
    jt = c(function (t, n, r) {
      if (n >= r.length || -r.length > n) return r;
      var e = (0 > n ? r.length : 0) + n,
        i = u(r);
      return i[e] = t(r[e]), i
    }),
    At = Array.isArray || function (t) {
      return null != t && t.length >= 0 && "[object Array]" === Object.prototype.toString.call(t)
    },
    Ot = {
      init: function () {
        return this.xf["@@transducer/init"]()
      },
      result: function (t) {
        return this.xf["@@transducer/result"](t)
      }
    };
  l.prototype["@@transducer/init"] = Ot.init, l.prototype["@@transducer/result"] = function (t) {
    return this.all && (t = this.xf["@@transducer/step"](t, !0)), this.xf["@@transducer/result"](t)
  }, l.prototype["@@transducer/step"] = function (t, n) {
    return this.f(n) || (this.all = !1, t = f(this.xf["@@transducer/step"](t, !1))), t
  };
  var St = e(s(["all"], e(function (t, n) {
      return new l(t, n)
    }), function (t, n) {
      for (var r = 0; n.length > r;) {
        if (!t(n[r])) return !1;
        r += 1
      }
      return !0
    })),
    Et = e(function (t, n) {
      return n > t ? n : t
    }),
    _t = r(function (t) {
      return !!At(t) || !!t && ("object" == typeof t && (!h(t) && (1 === t.nodeType ? !!t.length : 0 === t.length || t.length > 0 && (t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1)))))
    });
  y.prototype["@@transducer/init"] = function () {
    throw Error("init not implemented on XWrap")
  }, y.prototype["@@transducer/result"] = function (t) {
    return t
  }, y.prototype["@@transducer/step"] = function (t, n) {
    return this.f(t, n)
  };
  var qt = e(function (t, n) {
      return i(t.length, function () {
        return t.apply(n, arguments)
      })
    }),
    kt = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
  x.prototype["@@transducer/init"] = Ot.init, x.prototype["@@transducer/result"] = Ot.result, x.prototype["@@transducer/step"] = function (t, n) {
    return this.xf["@@transducer/step"](t, this.f(n))
  };
  var Nt = e(function (t, n) {
      return new x(t, n)
    }),
    It = Object.prototype.toString,
    Wt = function () {
      return "[object Arguments]" === It.call(arguments) ? function (t) {
        return "[object Arguments]" === It.call(t)
      } : function (t) {
        return w("callee", t)
      }
    },
    Pt = !{
      toString: null
    }.propertyIsEnumerable("toString"),
    Ct = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
    Tt = function () {
      return arguments.propertyIsEnumerable("length")
    }(),
    Bt = function (t, n) {
      for (var r = 0; t.length > r;) {
        if (t[r] === n) return !0;
        r += 1
      }
      return !1
    },
    Ft = r("function" != typeof Object.keys || Tt ? function (t) {
      if (Object(t) !== t) return [];
      var n, r, e = [],
        u = Tt && Wt(t);
      for (n in t) !w(n, t) || u && "length" === n || (e[e.length] = n);
      if (Pt)
        for (r = 6; r >= 0;) w(n = Ct[r], t) && !Bt(e, n) && (e[e.length] = n), r -= 1;
      return e
    } : function (t) {
      return Object(t) !== t ? [] : Object.keys(t)
    }),
    Rt = e(s(["fantasy-land/map", "map"], Nt, function (t, n) {
      switch (Object.prototype.toString.call(n)) {
        case "[object Function]":
          return xt(n.length, function () {
            return t.call(this, n.apply(this, arguments))
          });
        case "[object Object]":
          return b(function (r, e) {
            return r[e] = t(n[e]), r
          }, {}, Ft(n));
        default:
          return p(t, n)
      }
    })),
    Ut = e(function (t, n) {
      for (var r = n, e = 0; t.length > e;) {
        if (null == r) return;
        r = r[t[e]], e += 1
      }
      return r
    }),
    Dt = e(function (t, n) {
      return Ut([t], n)
    }),
    zt = e(function (t, n) {
      return Rt(Dt(t), n)
    }),
    Mt = c(b),
    Lt = r(function (t) {
      return xt(Mt(Et, 0, zt("length", t)), function () {
        for (var n = 0, r = t.length; r > n;) {
          if (!t[n].apply(this, arguments)) return !1;
          n += 1
        }
        return !0
      })
    }),
    Kt = e(function (t, n) {
      return t && n
    });
  j.prototype["@@transducer/init"] = Ot.init, j.prototype["@@transducer/result"] = function (t) {
    return this.any || (t = this.xf["@@transducer/step"](t, !1)), this.xf["@@transducer/result"](t)
  }, j.prototype["@@transducer/step"] = function (t, n) {
    return this.f(n) && (this.any = !0, t = f(this.xf["@@transducer/step"](t, !0))), t
  };
  var Vt = e(function (t, n) {
      return new j(t, n)
    }),
    $t = e(s(["any"], Vt, function (t, n) {
      for (var r = 0; n.length > r;) {
        if (t(n[r])) return !0;
        r += 1
      }
      return !1
    })),
    Ht = r(function (t) {
      return xt(Mt(Et, 0, zt("length", t)), function () {
        for (var n = 0, r = t.length; r > n;) {
          if (t[n].apply(this, arguments)) return !0;
          n += 1
        }
        return !1
      })
    }),
    Jt = e(function (t, n) {
      return "function" == typeof n["fantasy-land/ap"] ? n["fantasy-land/ap"](t) : "function" == typeof t.ap ? t.ap(n) : "function" == typeof t ? function (r) {
        return t(r)(n(r))
      } : b(function (t, r) {
        return u(t, Rt(r, n))
      }, [], t)
    });
  A.prototype["@@transducer/init"] = Ot.init, A.prototype["@@transducer/result"] = function (t) {
    return this.acc = null, this.xf["@@transducer/result"](t)
  }, A.prototype["@@transducer/step"] = function (t, n) {
    return this.store(n), this.full ? this.xf["@@transducer/step"](t, this.getCopy()) : t
  }, A.prototype.store = function (t) {
    this.acc[this.pos] = t, (this.pos += 1) === this.acc.length && (this.pos = 0, this.full = !0)
  }, A.prototype.getCopy = function () {
    return u(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos))
  };
  var Xt = e(s([], e(function (t, n) {
      return new A(t, n)
    }), function (t, n) {
      for (var r = 0, e = n.length - (t - 1), u = Array(0 > e ? 0 : e); e > r;) u[r] = Array.prototype.slice.call(n, r, r + t), r += 1;
      return u
    })),
    Yt = e(function (t, n) {
      return u(n, [t])
    }),
    Zt = e(function (t, n) {
      return t.apply(this, n)
    }),
    Gt = r(function (t) {
      for (var n = Ft(t), r = n.length, e = [], u = 0; r > u;) e[u] = t[n[u]], u += 1;
      return e
    }),
    Qt = r(function t(n) {
      return n = Rt(function (n) {
        return "function" == typeof n ? n : t(n)
      }, n), xt(Mt(Et, 0, zt("length", Gt(n))), function () {
        var t = arguments;
        return Rt(function (n) {
          return Zt(n, t)
        }, n)
      })
    }),
    tn = e(function (t, n) {
      return n(t)
    }),
    nn = c(function (t, n, r) {
      var e = t(n),
        u = t(r);
      return u > e ? -1 : e > u ? 1 : 0
    }),
    rn = c(function (t, n, r) {
      var e = {};
      for (var u in r) e[u] = r[u];
      return e[t] = n, e
    }),
    en = Number.isInteger || function (t) {
      return t << 0 === t
    },
    un = r(function (t) {
      return null == t
    }),
    on = c(function t(n, r, e) {
      if (0 === n.length) return r;
      var u = n[0];
      if (n.length > 1) {
        var i = !un(e) && w(u, e) ? e[u] : en(n[1]) ? [] : {};
        r = t(Array.prototype.slice.call(n, 1), r, i)
      }
      if (en(u) && At(e)) {
        var o = [].concat(e);
        return o[u] = r, o
      }
      return rn(u, r, e)
    }),
    cn = e(function (t, n) {
      switch (t) {
        case 0:
          return function () {
            return n.call(this)
          };
        case 1:
          return function (t) {
            return n.call(this, t)
          };
        case 2:
          return function (t, r) {
            return n.call(this, t, r)
          };
        case 3:
          return function (t, r, e) {
            return n.call(this, t, r, e)
          };
        case 4:
          return function (t, r, e, u) {
            return n.call(this, t, r, e, u)
          };
        case 5:
          return function (t, r, e, u, i) {
            return n.call(this, t, r, e, u, i)
          };
        case 6:
          return function (t, r, e, u, i, o) {
            return n.call(this, t, r, e, u, i, o)
          };
        case 7:
          return function (t, r, e, u, i, o, c) {
            return n.call(this, t, r, e, u, i, o, c)
          };
        case 8:
          return function (t, r, e, u, i, o, c, a) {
            return n.call(this, t, r, e, u, i, o, c, a)
          };
        case 9:
          return function (t, r, e, u, i, o, c, a, s) {
            return n.call(this, t, r, e, u, i, o, c, a, s)
          };
        case 10:
          return function (t, r, e, u, i, o, c, a, s, f) {
            return n.call(this, t, r, e, u, i, o, c, a, s, f)
          };
        default:
          throw Error("First argument to nAry must be a non-negative integer no greater than ten")
      }
    }),
    an = r(function (t) {
      return cn(2, t)
    }),
    sn = e(function (t, n) {
      var r = xt(t, n);
      return xt(t, function () {
        return b(Jt, Rt(r, arguments[0]), Array.prototype.slice.call(arguments, 1))
      })
    }),
    fn = r(function (t) {
      return sn(t.length, t)
    }),
    ln = e(function (t, n) {
      return O(t) ? function () {
        return t.apply(this, arguments) && n.apply(this, arguments)
      } : fn(Kt)(t, n)
    }),
    pn = r(function (t) {
      return xt(t.length, t)
    }),
    hn = pn(function (t) {
      return t.apply(this, Array.prototype.slice.call(arguments, 1))
    }),
    yn = function (t) {
      return {
        "@@transducer/init": Ot.init,
        "@@transducer/result": function (n) {
          return t["@@transducer/result"](n)
        },
        "@@transducer/step": function (n, r) {
          var e = t["@@transducer/step"](n, r);
          return e["@@transducer/reduced"] ? E(e) : e
        }
      }
    },
    dn = function (t) {
      var n = yn(t);
      return {
        "@@transducer/init": Ot.init,
        "@@transducer/result": function (t) {
          return n["@@transducer/result"](t)
        },
        "@@transducer/step": function (t, r) {
          return _t(r) ? b(n, t, r) : b(n, t, [r])
        }
      }
    },
    gn = e(s(["fantasy-land/chain", "chain"], e(function (t, n) {
      return Rt(t, dn(n))
    }), function (t, n) {
      return "function" == typeof n ? function (r) {
        return t(n(r))(r)
      } : S(!1)(Rt(t, n))
    })),
    vn = c(function (t, n, r) {
      if (t > n) throw Error("min must not be greater than max in clamp(min, max, value)");
      return t > r ? t : r > n ? n : r
    }),
    mn = r(function (t) {
      return null === t ? "Null" : void 0 === t ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1)
    }),
    bn = r(function (t) {
      return null != t && "function" == typeof t.clone ? t.clone() : q(t, [], [], !0)
    }),
    xn = r(function (t) {
      return function (n, r) {
        return t(n, r) ? -1 : t(r, n) ? 1 : 0
      }
    }),
    wn = r(function (t) {
      return !t
    }),
    jn = fn(wn),
    An = c(N("slice", function (t, n, r) {
      return Array.prototype.slice.call(r, t, n)
    })),
    On = r(N("tail", An(1, 1 / 0))),
    Sn = r(function (t) {
      return h(t) ? t.split("").reverse().join("") : Array.prototype.slice.call(t, 0).reverse()
    }),
    En = e(function (t, n) {
      return t === n ? 0 !== t || 1 / t == 1 / n : t !== t && n !== n
    }),
    _n = e(function (t, n) {
      return D(t, n, [], [])
    }),
    qn = function (t) {
      return (10 > t ? "0" : "") + t
    },
    kn = "function" == typeof Date.prototype.toISOString ? function (t) {
      return t.toISOString()
    } : function (t) {
      return t.getUTCFullYear() + "-" + qn(t.getUTCMonth() + 1) + "-" + qn(t.getUTCDate()) + "T" + qn(t.getUTCHours()) + ":" + qn(t.getUTCMinutes()) + ":" + qn(t.getUTCSeconds()) + "." + (t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
    };
  H.prototype["@@transducer/init"] = Ot.init, H.prototype["@@transducer/result"] = Ot.result, H.prototype["@@transducer/step"] = function (t, n) {
    return this.f(n) ? this.xf["@@transducer/step"](t, n) : t
  };
  var Nn = e(s(["filter"], e(function (t, n) {
      return new H(t, n)
    }), function (t, n) {
      return $(n) ? b(function (r, e) {
        return t(n[e]) && (r[e] = n[e]), r
      }, {}, Ft(n)) : V(t, n)
    })),
    In = e(function (t, n) {
      return Nn(K(t), n)
    }),
    Wn = r(function (t) {
      return J(t, [])
    }),
    Pn = e(function (t, n) {
      if (At(t)) {
        if (At(n)) return t.concat(n);
        throw new TypeError(Wn(n) + " is not an array")
      }
      if (h(t)) {
        if (h(n)) return t + n;
        throw new TypeError(Wn(n) + " is not a string")
      }
      if (null != t && O(t["fantasy-land/concat"])) return t["fantasy-land/concat"](n);
      if (null != t && O(t.concat)) return t.concat(n);
      throw new TypeError(Wn(t) + ' does not have a method named "concat" or "fantasy-land/concat"')
    }),
    Cn = r(function (t) {
      return i(Mt(Et, 0, Rt(function (t) {
        return t[0].length
      }, t)), function () {
        for (var n = 0; t.length > n;) {
          if (t[n][0].apply(this, arguments)) return t[n][1].apply(this, arguments);
          n += 1
        }
      })
    }),
    Tn = e(function (t, n) {
      if (t > 10) throw Error("Constructor with greater than ten arguments");
      return 0 === t ? function () {
        return new n
      } : pn(cn(t, function (t, r, e, u, i, o, c, a, s, f) {
        switch (arguments.length) {
          case 1:
            return new n(t);
          case 2:
            return new n(t, r);
          case 3:
            return new n(t, r, e);
          case 4:
            return new n(t, r, e, u);
          case 5:
            return new n(t, r, e, u, i);
          case 6:
            return new n(t, r, e, u, i, o);
          case 7:
            return new n(t, r, e, u, i, o, c);
          case 8:
            return new n(t, r, e, u, i, o, c, a);
          case 9:
            return new n(t, r, e, u, i, o, c, a, s);
          case 10:
            return new n(t, r, e, u, i, o, c, a, s, f)
        }
      }))
    }),
    Bn = r(function (t) {
      return Tn(t.length, t)
    }),
    Fn = e(M),
    Rn = e(function (t, n) {
      return xt(Mt(Et, 0, zt("length", n)), function () {
        var r = arguments,
          e = this;
        return t.apply(e, p(function (t) {
          return t.apply(e, r)
        }, n))
      })
    });
  X.prototype["@@transducer/init"] = Ot.init, X.prototype["@@transducer/result"] = function (t) {
    var n;
    for (n in this.inputs)
      if (w(n, this.inputs) && (t = this.xf["@@transducer/step"](t, this.inputs[n]))["@@transducer/reduced"]) {
        t = t["@@transducer/value"];
        break
      } return this.inputs = null, this.xf["@@transducer/result"](t)
  }, X.prototype["@@transducer/step"] = function (t, n) {
    var r = this.keyFn(n);
    return this.inputs[r] = this.inputs[r] || [r, this.valueAcc], this.inputs[r][1] = this.valueFn(this.inputs[r][1], n), t
  };
  var Un = o(4, [], s([], o(4, [], function (t, n, r, e) {
      return new X(t, n, r, e)
    }), function (t, n, r, e) {
      return b(function (e, u) {
        var i = r(u);
        return e[i] = t(w(i, e) ? e[i] : n, u), e
      }, {}, e)
    })),
    Dn = Un(function (t, n) {
      return t + 1
    }, 0),
    zn = bt(-1),
    Mn = e(function (t, n) {
      return null == n || n !== n ? t : n
    }),
    Ln = c(function (t, n, r) {
      var e = t(n),
        u = t(r);
      return e > u ? -1 : u > e ? 1 : 0
    }),
    Kn = e(function (t, n) {
      for (var r = [], e = 0, u = t.length; u > e;) M(t[e], n) || M(t[e], r) || (r[r.length] = t[e]), e += 1;
      return r
    }),
    Vn = c(function (t, n, r) {
      for (var e = [], u = 0, i = n.length; i > u;) F(t, n[u], r) || F(t, n[u], e) || e.push(n[u]), u += 1;
      return e
    }),
    $n = e(function (t, n) {
      var r = {};
      for (var e in n) r[e] = n[e];
      return delete r[t], r
    }),
    Hn = c(function (t, n, r) {
      var e = Array.prototype.slice.call(r, 0);
      return e.splice(t, n), e
    }),
    Jn = c(function (t, n, r) {
      return jt(dt(n), t, r)
    }),
    Xn = e(function t(n, r) {
      switch (n.length) {
        case 0:
          return r;
        case 1:
          return en(n[0]) ? Hn(n[0], 1, r) : $n(n[0], r);
        default:
          var e = n[0],
            u = Array.prototype.slice.call(n, 1);
          return null == r[e] ? r : en(n[0]) ? Jn(e, t(u, r[e]), r) : rn(e, t(u, r[e]), r)
      }
    }),
    Yn = e(function (t, n) {
      return t / n
    });
  Y.prototype["@@transducer/init"] = Ot.init, Y.prototype["@@transducer/result"] = Ot.result, Y.prototype["@@transducer/step"] = function (t, n) {
    return this.n > 0 ? (this.n -= 1, t) : this.xf["@@transducer/step"](t, n)
  };
  var Zn = e(s(["drop"], e(function (t, n) {
    return new Y(t, n)
  }), function (t, n) {
    return An(Math.max(0, t), 1 / 0, n)
  }));
  Z.prototype["@@transducer/init"] = Ot.init, Z.prototype["@@transducer/result"] = Ot.result, Z.prototype["@@transducer/step"] = function (t, n) {
    this.i += 1;
    var r = 0 === this.n ? t : this.xf["@@transducer/step"](t, n);
    return 0 > this.n || this.n > this.i ? r : f(r)
  };
  var Gn = e(s(["take"], e(function (t, n) {
    return new Z(t, n)
  }), function (t, n) {
    return An(0, 0 > t ? 1 / 0 : t, n)
  }));
  G.prototype["@@transducer/init"] = Ot.init, G.prototype["@@transducer/result"] = function (t) {
    return this.acc = null, this.xf["@@transducer/result"](t)
  }, G.prototype["@@transducer/step"] = function (t, n) {
    return this.full && (t = this.xf["@@transducer/step"](t, this.acc[this.pos])), this.store(n), t
  }, G.prototype.store = function (t) {
    this.acc[this.pos] = t, (this.pos += 1) === this.acc.length && (this.pos = 0, this.full = !0)
  };
  var Qn = e(s([], e(function (t, n) {
    return new G(t, n)
  }), function (t, n) {
    return Gn(n.length > t ? n.length - t : 0, n)
  }));
  Q.prototype["@@transducer/init"] = Ot.init, Q.prototype["@@transducer/result"] = function (t) {
    return this.retained = null, this.xf["@@transducer/result"](t)
  }, Q.prototype["@@transducer/step"] = function (t, n) {
    return this.f(n) ? this.retain(t, n) : this.flush(t, n)
  }, Q.prototype.flush = function (t, n) {
    return t = b(this.xf["@@transducer/step"], t, this.retained), this.retained = [], this.xf["@@transducer/step"](t, n)
  }, Q.prototype.retain = function (t, n) {
    return this.retained.push(n), t
  };
  var tr = e(s([], e(function (t, n) {
    return new Q(t, n)
  }), function (t, n) {
    for (var r = n.length - 1; r >= 0 && t(n[r]);) r -= 1;
    return An(0, r + 1, n)
  }));
  tt.prototype["@@transducer/init"] = Ot.init, tt.prototype["@@transducer/result"] = Ot.result, tt.prototype["@@transducer/step"] = function (t, n) {
    var r = !1;
    return this.seenFirstValue ? this.pred(this.lastValue, n) && (r = !0) : this.seenFirstValue = !0, this.lastValue = n, r ? t : this.xf["@@transducer/step"](t, n)
  };
  var nr = e(function (t, n) {
      return new tt(t, n)
    }),
    rr = e(function (t, n) {
      var r = 0 > t ? n.length + t : t;
      return h(n) ? n.charAt(r) : n[r]
    }),
    er = rr(-1),
    ur = e(s([], nr, function (t, n) {
      var r = [],
        e = 1,
        u = n.length;
      if (0 !== u)
        for (r[0] = n[0]; u > e;) t(er(r), n[e]) || (r[r.length] = n[e]), e += 1;
      return r
    })),
    ir = r(s([], nr(_n), ur(_n)));
  nt.prototype["@@transducer/init"] = Ot.init, nt.prototype["@@transducer/result"] = Ot.result, nt.prototype["@@transducer/step"] = function (t, n) {
    if (this.f) {
      if (this.f(n)) return t;
      this.f = null
    }
    return this.xf["@@transducer/step"](t, n)
  };
  var or = e(s(["dropWhile"], e(function (t, n) {
      return new nt(t, n)
    }), function (t, n) {
      for (var r = 0, e = n.length; e > r && t(n[r]);) r += 1;
      return An(r, 1 / 0, n)
    })),
    cr = e(function (t, n) {
      return t || n
    }),
    ar = e(function (t, n) {
      return O(t) ? function () {
        return t.apply(this, arguments) || n.apply(this, arguments)
      } : fn(cr)(t, n)
    }),
    sr = r(function (t) {
      return null != t && "function" == typeof t["fantasy-land/empty"] ? t["fantasy-land/empty"]() : null != t && null != t.constructor && "function" == typeof t.constructor["fantasy-land/empty"] ? t.constructor["fantasy-land/empty"]() : null != t && "function" == typeof t.empty ? t.empty() : null != t && null != t.constructor && "function" == typeof t.constructor.empty ? t.constructor.empty() : At(t) ? [] : h(t) ? "" : $(t) ? {} : Wt(t) ? function () {
        return arguments
      }() : void 0
    }),
    fr = e(function (t, n) {
      return Zn(0 > t ? 0 : n.length - t, n)
    }),
    lr = e(function (t, n) {
      return _n(fr(t.length, n), t)
    }),
    pr = c(function (t, n, r) {
      return _n(t(n), t(r))
    }),
    hr = c(function (t, n, r) {
      return _n(n[t], r[t])
    }),
    yr = e(function t(n, r) {
      var e, u, i, o = {};
      for (u in r) i = typeof (e = n[u]), o[u] = "function" === i ? e(r[u]) : e && "object" === i ? t(e, r[u]) : r[u];
      return o
    });
  rt.prototype["@@transducer/init"] = Ot.init, rt.prototype["@@transducer/result"] = function (t) {
    return this.found || (t = this.xf["@@transducer/step"](t, void 0)), this.xf["@@transducer/result"](t)
  }, rt.prototype["@@transducer/step"] = function (t, n) {
    return this.f(n) && (this.found = !0, t = f(this.xf["@@transducer/step"](t, n))), t
  };
  var dr = e(s(["find"], e(function (t, n) {
    return new rt(t, n)
  }), function (t, n) {
    for (var r = 0, e = n.length; e > r;) {
      if (t(n[r])) return n[r];
      r += 1
    }
  }));
  et.prototype["@@transducer/init"] = Ot.init, et.prototype["@@transducer/result"] = function (t) {
    return this.found || (t = this.xf["@@transducer/step"](t, -1)), this.xf["@@transducer/result"](t)
  }, et.prototype["@@transducer/step"] = function (t, n) {
    return this.idx += 1, this.f(n) && (this.found = !0, t = f(this.xf["@@transducer/step"](t, this.idx))), t
  };
  var gr = e(s([], e(function (t, n) {
    return new et(t, n)
  }), function (t, n) {
    for (var r = 0, e = n.length; e > r;) {
      if (t(n[r])) return r;
      r += 1
    }
    return -1
  }));
  ut.prototype["@@transducer/init"] = Ot.init, ut.prototype["@@transducer/result"] = function (t) {
    return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t, this.last))
  }, ut.prototype["@@transducer/step"] = function (t, n) {
    return this.f(n) && (this.last = n), t
  };
  var vr = e(s([], e(function (t, n) {
    return new ut(t, n)
  }), function (t, n) {
    for (var r = n.length - 1; r >= 0;) {
      if (t(n[r])) return n[r];
      r -= 1
    }
  }));
  it.prototype["@@transducer/init"] = Ot.init, it.prototype["@@transducer/result"] = function (t) {
    return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t, this.lastIdx))
  }, it.prototype["@@transducer/step"] = function (t, n) {
    return this.idx += 1, this.f(n) && (this.lastIdx = this.idx), t
  };
  var mr = e(s([], e(function (t, n) {
      return new it(t, n)
    }), function (t, n) {
      for (var r = n.length - 1; r >= 0;) {
        if (t(n[r])) return r;
        r -= 1
      }
      return -1
    })),
    br = r(S(!0)),
    xr = r(function (t) {
      return xt(t.length, function (n, r) {
        var e = Array.prototype.slice.call(arguments, 0);
        return e[0] = r, e[1] = n, t.apply(this, e)
      })
    }),
    wr = e(N("forEach", function (t, n) {
      for (var r = n.length, e = 0; r > e;) t(n[e]), e += 1;
      return n
    })),
    jr = e(function (t, n) {
      for (var r = Ft(n), e = 0; r.length > e;) {
        var u = r[e];
        t(n[u], u, n), e += 1
      }
      return n
    }),
    Ar = r(function (t) {
      for (var n = {}, r = 0; t.length > r;) n[t[r][0]] = t[r][1], r += 1;
      return n
    }),
    Or = e(N("groupBy", Un(function (t, n) {
      return null == t && (t = []), t.push(n), t
    }, null))),
    Sr = e(function (t, n) {
      for (var r = [], e = 0, u = n.length; u > e;) {
        for (var i = e + 1; u > i && t(n[i - 1], n[i]);) i += 1;
        r.push(n.slice(e, i)), e = i
      }
      return r
    }),
    Er = e(function (t, n) {
      return t > n
    }),
    _r = e(function (t, n) {
      return t >= n
    }),
    qr = e(w),
    kr = e(function (t, n) {
      return t in n
    }),
    Nr = rr(0),
    Ir = r(ot),
    Wr = c(function (t, n, r) {
      return xt(Math.max(t.length, n.length, r.length), function () {
        return t.apply(this, arguments) ? n.apply(this, arguments) : r.apply(this, arguments)
      })
    }),
    Pr = bt(1),
    Cr = Un(function (t, n) {
      return n
    }, null),
    Tr = e(function (t, n) {
      return "function" != typeof n.indexOf || At(n) ? z(n, t, 0) : n.indexOf(t)
    }),
    Br = An(0, -1),
    Fr = c(function (t, n, r) {
      return V(function (n) {
        return F(t, n, r)
      }, n)
    }),
    Rr = c(function (t, n, r) {
      t = r.length > t && t >= 0 ? t : r.length;
      var e = Array.prototype.slice.call(r, 0);
      return e.splice(t, 0, n), e
    }),
    Ur = c(function (t, n, r) {
      return t = r.length > t && t >= 0 ? t : r.length, [].concat(Array.prototype.slice.call(r, 0, t), n, Array.prototype.slice.call(r, t))
    });
  ct.prototype.add = function (t) {
    return !at(t, !0, this)
  }, ct.prototype.has = function (t) {
    return at(t, !1, this)
  };
  var Dr = e(function (t, n) {
      for (var r, e, u = new ct, i = [], o = 0; n.length > o;) r = t(e = n[o]), u.add(r) && i.push(e), o += 1;
      return i
    }),
    zr = Dr(Ir),
    Mr = e(function (t, n) {
      var r, e;
      return t.length > n.length ? (r = t, e = n) : (r = n, e = t), zr(V(xr(M)(r), e))
    }),
    Lr = e(N("intersperse", function (t, n) {
      for (var r = [], e = 0, u = n.length; u > e;) e === u - 1 ? r.push(n[e]) : r.push(n[e], t), e += 1;
      return r
    })),
    Kr = "function" == typeof Object.assign ? Object.assign : function (t) {
      if (null == t) throw new TypeError("Cannot convert undefined or null to object");
      for (var n = Object(t), r = 1, e = arguments.length; e > r;) {
        var u = arguments[r];
        if (null != u)
          for (var i in u) w(i, u) && (n[i] = u[i]);
        r += 1
      }
      return n
    },
    Vr = e(function (t, n) {
      var r = {};
      return r[t] = n, r
    }),
    $r = {
      "@@transducer/init": Array,
      "@@transducer/step": function (t, n) {
        return t.push(n), t
      },
      "@@transducer/result": ot
    },
    Hr = {
      "@@transducer/init": String,
      "@@transducer/step": function (t, n) {
        return t + n
      },
      "@@transducer/result": ot
    },
    Jr = {
      "@@transducer/init": Object,
      "@@transducer/step": function (t, n) {
        return Kr(t, _t(n) ? Vr(n[0], n[1]) : n)
      },
      "@@transducer/result": ot
    },
    Xr = c(function (t, n, r) {
      return a(t) ? b(n(t), t["@@transducer/init"](), r) : b(n(st(t)), q(t, [], [], !1), r)
    }),
    Yr = r(function (t) {
      for (var n = Ft(t), r = n.length, e = 0, u = {}; r > e;) {
        var i = n[e],
          o = t[i],
          c = w(o, u) ? u[o] : u[o] = [];
        c[c.length] = i, e += 1
      }
      return u
    }),
    Zr = r(function (t) {
      for (var n = Ft(t), r = n.length, e = 0, u = {}; r > e;) {
        var i = n[e];
        u[t[i]] = i, e += 1
      }
      return u
    }),
    Gr = e(function (t, n) {
      return xt(t + 1, function () {
        var r = arguments[t];
        if (null != r && O(r[n])) return r[n].apply(r, Array.prototype.slice.call(arguments, 0, t));
        throw new TypeError(Wn(r) + ' does not have a method named "' + n + '"')
      })
    }),
    Qr = e(function (t, n) {
      return null != n && n.constructor === t || n instanceof t
    }),
    te = r(function (t) {
      return null != t && _n(t, sr(t))
    }),
    ne = Gr(1, "join"),
    re = r(function (t) {
      return Rn(function () {
        return Array.prototype.slice.call(arguments, 0)
      }, t)
    }),
    ee = r(function (t) {
      var n, r = [];
      for (n in t) r[r.length] = n;
      return r
    }),
    ue = e(function (t, n) {
      if ("function" != typeof n.lastIndexOf || At(n)) {
        for (var r = n.length - 1; r >= 0;) {
          if (_n(n[r], t)) return r;
          r -= 1
        }
        return -1
      }
      return n.lastIndexOf(t)
    }),
    ie = r(function (t) {
      return null != t && ft(t.length) ? t.length : NaN
    }),
    oe = e(function (t, n) {
      return function (r) {
        return function (e) {
          return Rt(function (t) {
            return n(t, e)
          }, r(t(e)))
        }
      }
    }),
    ce = r(function (t) {
      return oe(rr(t), Jn(t))
    }),
    ae = r(function (t) {
      return oe(Ut(t), on(t))
    }),
    se = r(function (t) {
      return oe(Dt(t), rn(t))
    }),
    fe = e(function (t, n) {
      return n > t
    }),
    le = e(function (t, n) {
      return n >= t
    }),
    pe = c(function (t, n, r) {
      for (var e = 0, u = r.length, i = [], o = [n]; u > e;) o = t(o[0], r[e]), i[e] = o[1], e += 1;
      return [o[0], i]
    }),
    he = c(function (t, n, r) {
      for (var e = r.length - 1, u = [], i = [n]; e >= 0;) i = t(r[e], i[0]), u[e] = i[1], e -= 1;
      return [u, i[0]]
    }),
    ye = e(function (t, n) {
      return b(function (r, e) {
        return r[e] = t(n[e], e, n), r
      }, {}, Ft(n))
    }),
    de = e(function (t, n) {
      return n.match(t) || []
    }),
    ge = e(function (t, n) {
      return en(t) ? !en(n) || 1 > n ? NaN : (t % n + n) % n : NaN
    }),
    ve = c(function (t, n, r) {
      return t(r) > t(n) ? r : n
    }),
    me = Mt(bt, 0),
    be = r(function (t) {
      return me(t) / t.length
    }),
    xe = r(function (t) {
      var n = t.length;
      if (0 === n) return NaN;
      var r = 2 - n % 2,
        e = (n - r) / 2;
      return be(Array.prototype.slice.call(t, 0).sort(function (t, n) {
        return n > t ? -1 : t > n ? 1 : 0
      }).slice(e, e + r))
    }),
    we = e(function (t, n) {
      var r = {};
      return i(n.length, function () {
        var e = t.apply(this, arguments);
        return w(e, r) || (r[e] = n.apply(this, arguments)), r[e]
      })
    }),
    je = we(function () {
      return Wn(arguments)
    }),
    Ae = e(function (t, n) {
      return Kr({}, t, n)
    }),
    Oe = r(function (t) {
      return Kr.apply(null, [{}].concat(t))
    }),
    Se = c(function (t, n, r) {
      var e, u = {};
      for (e in n) w(e, n) && (u[e] = w(e, r) ? t(e, n[e], r[e]) : n[e]);
      for (e in r) w(e, r) && !w(e, u) && (u[e] = r[e]);
      return u
    }),
    Ee = c(function t(n, r, e) {
      return Se(function (r, e, u) {
        return $(e) && $(u) ? t(n, e, u) : n(r, e, u)
      }, r, e)
    }),
    _e = e(function (t, n) {
      return Ee(function (t, n, r) {
        return n
      }, t, n)
    }),
    qe = e(function (t, n) {
      return Ee(function (t, n, r) {
        return r
      }, t, n)
    }),
    ke = c(function (t, n, r) {
      return Ee(function (n, r, e) {
        return t(r, e)
      }, n, r)
    }),
    Ne = c(function (t, n, r) {
      return Se(function (n, r, e) {
        return t(r, e)
      }, n, r)
    }),
    Ie = e(function (t, n) {
      return t > n ? n : t
    }),
    We = c(function (t, n, r) {
      return t(r) < t(n) ? r : n
    }),
    Pe = e(function (t, n) {
      return t % n
    }),
    Ce = e(function (t, n) {
      return t * n
    }),
    Te = r(function (t) {
      return -t
    }),
    Be = e(K(s(["any"], Vt, $t))),
    Fe = r(function (t) {
      return xt(0 > t ? 1 : t + 1, function () {
        return rr(t, arguments)
      })
    }),
    Re = c(function (t, n, r) {
      return t(n(r))
    }),
    Ue = r(function (t) {
      return [t]
    }),
    De = e(function (t, n) {
      for (var r = {}, e = {}, u = 0, i = t.length; i > u;) e[t[u]] = 1, u += 1;
      for (var o in n) e.hasOwnProperty(o) || (r[o] = n[o]);
      return r
    }),
    ze = r(function (t) {
      var n, r = !1;
      return i(t.length, function () {
        return r ? n : (r = !0, n = t.apply(this, arguments))
      })
    }),
    Me = function (t) {
      return {
        value: t,
        map: function (n) {
          return Me(n(t))
        }
      }
    },
    Le = c(function (t, n, r) {
      return t(function (t) {
        return Me(n(t))
      })(r).value
    }),
    Ke = e(function (t, n) {
      return [t, n]
    }),
    Ve = lt(u),
    $e = lt(xr(u)),
    He = re([Nn, In]),
    Je = c(function (t, n, r) {
      return _n(Ut(t, r), n)
    }),
    Xe = c(function (t, n, r) {
      return Mn(t, Ut(n, r))
    }),
    Ye = c(function (t, n, r) {
      return n.length > 0 && t(Ut(n, r))
    }),
    Ze = e(function (t, n) {
      for (var r = {}, e = 0; t.length > e;) t[e] in n && (r[t[e]] = n[t[e]]), e += 1;
      return r
    }),
    Ge = e(function (t, n) {
      for (var r = {}, e = 0, u = t.length; u > e;) {
        var i = t[e];
        r[i] = n[i], e += 1
      }
      return r
    }),
    Qe = e(function (t, n) {
      var r = {};
      for (var e in n) t(n[e], e, n) && (r[e] = n[e]);
      return r
    }),
    tu = e(function (t, n) {
      return u([t], n)
    }),
    nu = Mt(Ce, 1),
    ru = e(function (t, n) {
      return xt(n.length, function () {
        for (var r = [], e = 0; n.length > e;) r.push(n[e].call(this, arguments[e])), e += 1;
        return t.apply(this, r.concat(Array.prototype.slice.call(arguments, n.length)))
      })
    }),
    eu = ru(p, [Ge, Ir]),
    uu = c(function (t, n, r) {
      return _n(n, r[t])
    }),
    iu = c(function (t, n, r) {
      return Qr(t, r[n])
    }),
    ou = c(function (t, n, r) {
      return null != r && w(n, r) ? r[n] : t
    }),
    cu = c(function (t, n, r) {
      return t(r[n])
    }),
    au = e(function (t, n) {
      for (var r = t.length, e = [], u = 0; r > u;) e[u] = n[t[u]], u += 1;
      return e
    }),
    su = e(function (t, n) {
      if (!ft(t) || !ft(n)) throw new TypeError("Both arguments to range must be numbers");
      for (var r = [], e = t; n > e;) r.push(e), e += 1;
      return r
    }),
    fu = c(function (t, n, r) {
      for (var e = r.length - 1; e >= 0;) n = t(r[e], n), e -= 1;
      return n
    }),
    lu = o(4, [], function (t, n, r, e) {
      return b(function (r, e) {
        return t(r, e) ? n(r, e) : f(r)
      }, r, e)
    }),
    pu = r(f),
    hu = e(function (t, n) {
      var r, e = +n,
        u = 0;
      if (0 > e || isNaN(e)) throw new RangeError("n must be a non-negative number");
      for (r = Array(e); e > u;) r[u] = t(u), u += 1;
      return r
    }),
    yu = e(function (t, n) {
      return hu(dt(t), n)
    }),
    du = c(function (t, n, r) {
      return r.replace(t, n)
    }),
    gu = c(function (t, n, r) {
      for (var e = 0, u = r.length, i = [n]; u > e;) n = t(n, r[e]), i[e + 1] = n, e += 1;
      return i
    }),
    vu = e(function (t, n) {
      return "function" == typeof n.sequence ? n.sequence(t) : fu(function (t, n) {
        return Jt(Rt(tu, t), n)
      }, t([]), n)
    }),
    mu = c(function (t, n, r) {
      return Le(t, dt(n), r)
    }),
    bu = e(function (t, n) {
      return Array.prototype.slice.call(n, 0).sort(t)
    }),
    xu = e(function (t, n) {
      return Array.prototype.slice.call(n, 0).sort(function (n, r) {
        var e = t(n),
          u = t(r);
        return u > e ? -1 : e > u ? 1 : 0
      })
    }),
    wu = e(function (t, n) {
      return Array.prototype.slice.call(n, 0).sort(function (n, r) {
        for (var e = 0, u = 0; 0 === e && t.length > u;) e = t[u](n, r), u += 1;
        return e
      })
    }),
    ju = Gr(1, "split"),
    Au = e(function (t, n) {
      return [An(0, t, n), An(t, ie(n), n)]
    }),
    Ou = e(function (t, n) {
      if (0 >= t) throw Error("First argument to splitEvery must be a positive integer");
      for (var r = [], e = 0; n.length > e;) r.push(An(e, e += t, n));
      return r
    }),
    Su = e(function (t, n) {
      for (var r = 0, e = n.length, u = []; e > r && !t(n[r]);) u.push(n[r]), r += 1;
      return [u, Array.prototype.slice.call(n, r)]
    }),
    Eu = e(function (t, n) {
      return _n(Gn(t.length, n), t)
    }),
    _u = e(function (t, n) {
      return +t - +n
    }),
    qu = e(function (t, n) {
      return Pn(Kn(t, n), Kn(n, t))
    }),
    ku = c(function (t, n, r) {
      return Pn(Vn(t, n, r), Vn(t, r, n))
    }),
    Nu = e(function (t, n) {
      for (var r = n.length - 1; r >= 0 && t(n[r]);) r -= 1;
      return An(r + 1, 1 / 0, n)
    });
  pt.prototype["@@transducer/init"] = Ot.init, pt.prototype["@@transducer/result"] = Ot.result, pt.prototype["@@transducer/step"] = function (t, n) {
    return this.f(n) ? this.xf["@@transducer/step"](t, n) : f(t)
  };
  var Iu = e(s(["takeWhile"], e(function (t, n) {
    return new pt(t, n)
  }), function (t, n) {
    for (var r = 0, e = n.length; e > r && t(n[r]);) r += 1;
    return An(0, r, n)
  }));
  ht.prototype["@@transducer/init"] = Ot.init, ht.prototype["@@transducer/result"] = Ot.result, ht.prototype["@@transducer/step"] = function (t, n) {
    return this.f(n), this.xf["@@transducer/step"](t, n)
  };
  var Wu = e(s([], e(function (t, n) {
      return new ht(t, n)
    }), function (t, n) {
      return t(n), n
    })),
    Pu = e(function (t, n) {
      if (!yt(t)) throw new TypeError("â€˜testâ€™ requires a value of type RegExp as its first argument; received " + Wn(t));
      return _(t).test(n)
    }),
    Cu = Gr(0, "toLowerCase"),
    Tu = r(function (t) {
      var n = [];
      for (var r in t) w(r, t) && (n[n.length] = [r, t[r]]);
      return n
    }),
    Bu = r(function (t) {
      var n = [];
      for (var r in t) n[n.length] = [r, t[r]];
      return n
    }),
    Fu = Gr(0, "toUpperCase"),
    Ru = xt(4, function (t, n, r, e) {
      return b(t("function" == typeof n ? d(n) : n), r, e)
    }),
    Uu = r(function (t) {
      for (var n = 0, r = []; t.length > n;) {
        for (var e = t[n], u = 0; e.length > u;) void 0 === r[u] && (r[u] = []), r[u].push(e[u]), u += 1;
        n += 1
      }
      return r
    }),
    Du = c(function (t, n, r) {
      return "function" == typeof r["fantasy-land/traverse"] ? r["fantasy-land/traverse"](n, t) : vu(t, Rt(n, r))
    }),
    zu = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",
    Mu = r(!("function" == typeof String.prototype.trim) || zu.trim() ? function (t) {
      var n = RegExp("^[" + zu + "][" + zu + "]*"),
        r = RegExp("[" + zu + "][" + zu + "]*$");
      return t.replace(n, "").replace(r, "")
    } : function (t) {
      return t.trim()
    }),
    Lu = e(function (t, n) {
      return i(t.length, function () {
        try {
          return t.apply(this, arguments)
        } catch (t) {
          return n.apply(this, u([t], arguments))
        }
      })
    }),
    Ku = r(function (t) {
      return function () {
        return t(Array.prototype.slice.call(arguments, 0))
      }
    }),
    Vu = r(function (t) {
      return cn(1, t)
    }),
    $u = e(function (t, n) {
      return xt(t, function () {
        for (var r, e = 1, u = n, i = 0; t >= e && "function" == typeof u;) r = e === t ? arguments.length : i + u.length, u = u.apply(this, Array.prototype.slice.call(arguments, i, r)), e += 1, i = r;
        return u
      })
    }),
    Hu = e(function (t, n) {
      for (var r = t(n), e = []; r && r.length;) e[e.length] = r[0], r = t(r[1]);
      return e
    }),
    Ju = e(W(zr, u)),
    Xu = e(function (t, n) {
      for (var r, e = 0, u = n.length, i = []; u > e;) F(t, r = n[e], i) || (i[i.length] = r), e += 1;
      return i
    }),
    Yu = c(function (t, n, r) {
      return Xu(t, u(n, r))
    }),
    Zu = c(function (t, n, r) {
      return t(r) ? r : n(r)
    }),
    Gu = gn(ot),
    Qu = c(function (t, n, r) {
      for (var e = r; !t(e);) e = n(e);
      return e
    }),
    ti = r(function (t) {
      var n, r = [];
      for (n in t) r[r.length] = t[n];
      return r
    }),
    ni = function (t) {
      return {
        value: t,
        "fantasy-land/map": function () {
          return this
        }
      }
    },
    ri = e(function (t, n) {
      return t(ni)(n).value
    }),
    ei = c(function (t, n, r) {
      return t(r) ? n(r) : r
    }),
    ui = e(function (t, n) {
      for (var r in t)
        if (w(r, t) && !t[r](n[r])) return !1;
      return !0
    }),
    ii = e(function (t, n) {
      return ui(Rt(_n, t), n)
    }),
    oi = e(function (t, n) {
      return In(xr(M)(t), n)
    }),
    ci = e(function (t, n) {
      for (var r, e = 0, u = t.length, i = n.length, o = []; u > e;) {
        for (r = 0; i > r;) o[o.length] = [t[e], n[r]], r += 1;
        e += 1
      }
      return o
    }),
    ai = e(function (t, n) {
      for (var r = [], e = 0, u = Math.min(t.length, n.length); u > e;) r[e] = [t[e], n[e]], e += 1;
      return r
    }),
    si = e(function (t, n) {
      for (var r = 0, e = Math.min(t.length, n.length), u = {}; e > r;) u[t[r]] = n[r], r += 1;
      return u
    }),
    fi = c(function (t, n, r) {
      for (var e = [], u = 0, i = Math.min(n.length, r.length); i > u;) e[u] = t(n[u], r[u]), u += 1;
      return e
    });
  t.F = gt, t.T = vt, t.__ = mt, t.add = bt, t.addIndex = wt, t.adjust = jt, t.all = St, t.allPass = Lt, t.always = dt, t.and = Kt, t.any = $t, t.anyPass = Ht, t.ap = Jt, t.aperture = Xt, t.append = Yt, t.apply = Zt, t.applySpec = Qt, t.applyTo = tn, t.ascend = nn, t.assoc = rn, t.assocPath = on, t.binary = an, t.bind = qt, t.both = ln, t.call = hn, t.chain = gn, t.clamp = vn, t.clone = bn, t.comparator = xn, t.complement = jn, t.compose = W, t.composeK = P, t.composeP = function () {
    if (0 === arguments.length) throw Error("composeP requires at least one argument");
    return T.apply(this, Sn(arguments))
  }, t.concat = Pn, t.cond = Cn, t.construct = Bn, t.constructN = Tn, t.contains = Fn, t.converge = Rn, t.countBy = Dn, t.curry = pn, t.curryN = xt, t.dec = zn, t.defaultTo = Mn, t.descend = Ln, t.difference = Kn, t.differenceWith = Vn, t.dissoc = $n, t.dissocPath = Xn, t.divide = Yn, t.drop = Zn, t.dropLast = Qn, t.dropLastWhile = tr, t.dropRepeats = ir, t.dropRepeatsWith = ur, t.dropWhile = or, t.either = ar, t.empty = sr, t.endsWith = lr, t.eqBy = pr, t.eqProps = hr, t.equals = _n, t.evolve = yr, t.filter = Nn, t.find = dr, t.findIndex = gr, t.findLast = vr, t.findLastIndex = mr, t.flatten = br, t.flip = xr, t.forEach = wr, t.forEachObjIndexed = jr, t.fromPairs = Ar, t.groupBy = Or, t.groupWith = Sr, t.gt = Er, t.gte = _r, t.has = qr, t.hasIn = kr, t.head = Nr, t.identical = En, t.identity = Ir, t.ifElse = Wr, t.inc = Pr, t.indexBy = Cr, t.indexOf = Tr, t.init = Br, t.innerJoin = Fr, t.insert = Rr, t.insertAll = Ur, t.intersection = Mr, t.intersperse = Lr, t.into = Xr, t.invert = Yr, t.invertObj = Zr, t.invoker = Gr, t.is = Qr, t.isEmpty = te, t.isNil = un, t.join = ne, t.juxt = re, t.keys = Ft, t.keysIn = ee, t.last = er, t.lastIndexOf = ue, t.length = ie, t.lens = oe, t.lensIndex = ce, t.lensPath = ae, t.lensProp = se, t.lift = fn, t.liftN = sn, t.lt = fe, t.lte = le, t.map = Rt, t.mapAccum = pe, t.mapAccumRight = he, t.mapObjIndexed = ye, t.match = de, t.mathMod = ge, t.max = Et, t.maxBy = ve, t.mean = be, t.median = xe, t.memoize = je, t.memoizeWith = we, t.merge = Ae, t.mergeAll = Oe, t.mergeDeepLeft = _e, t.mergeDeepRight = qe, t.mergeDeepWith = ke, t.mergeDeepWithKey = Ee, t.mergeWith = Ne, t.mergeWithKey = Se, t.min = Ie, t.minBy = We, t.modulo = Pe, t.multiply = Ce, t.nAry = cn, t.negate = Te, t.none = Be, t.not = wn, t.nth = rr, t.nthArg = Fe, t.o = Re, t.objOf = Vr, t.of = Ue, t.omit = De, t.once = ze, t.or = cr, t.over = Le, t.pair = Ke, t.partial = Ve, t.partialRight = $e, t.partition = He, t.path = Ut, t.pathEq = Je, t.pathOr = Xe, t.pathSatisfies = Ye, t.pick = Ze, t.pickAll = Ge, t.pickBy = Qe, t.pipe = I, t.pipeK = function () {
    if (0 === arguments.length) throw Error("pipeK requires at least one argument");
    return P.apply(this, Sn(arguments))
  }, t.pipeP = T, t.pluck = zt, t.prepend = tu, t.product = nu, t.project = eu, t.prop = Dt, t.propEq = uu, t.propIs = iu, t.propOr = ou, t.propSatisfies = cu, t.props = au, t.range = su, t.reduce = Mt, t.reduceBy = Un, t.reduceRight = fu, t.reduceWhile = lu, t.reduced = pu, t.reject = In, t.remove = Hn, t.repeat = yu, t.replace = du, t.reverse = Sn, t.scan = gu, t.sequence = vu, t.set = mu, t.slice = An, t.sort = bu, t.sortBy = xu, t.sortWith = wu, t.split = ju, t.splitAt = Au, t.splitEvery = Ou, t.splitWhen = Su, t.startsWith = Eu, t.subtract = _u, t.sum = me, t.symmetricDifference = qu, t.symmetricDifferenceWith = ku, t.tail = On, t.take = Gn, t.takeLast = fr, t.takeLastWhile = Nu, t.takeWhile = Iu, t.tap = Wu, t.test = Pu, t.times = hu, t.toLower = Cu, t.toPairs = Tu, t.toPairsIn = Bu, t.toString = Wn, t.toUpper = Fu, t.transduce = Ru, t.transpose = Uu, t.traverse = Du, t.trim = Mu, t.tryCatch = Lu, t.type = mn, t.unapply = Ku, t.unary = Vu, t.uncurryN = $u, t.unfold = Hu, t.union = Ju, t.unionWith = Yu, t.uniq = zr, t.uniqBy = Dr, t.uniqWith = Xu, t.unless = Zu, t.unnest = Gu, t.until = Qu, t.update = Jn, t.useWith = ru, t.values = Gt, t.valuesIn = ti, t.view = ri, t.when = ei, t.where = ui, t.whereEq = ii, t.without = oi, t.xprod = ci, t.zip = ai, t.zipObj = si, t.zipWith = fi, Object.defineProperty(t, "__esModule", {
    value: !0
  })
});