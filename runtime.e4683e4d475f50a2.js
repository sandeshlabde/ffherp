(() => {
  "use strict";
  var e,
    v = {},
    y = {};
  function r(e) {
    var f = y[e];
    if (void 0 !== f) return f.exports;
    var t = (y[e] = { id: e, loaded: !1, exports: {} });
    return v[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports;
  }
  (r.m = v),
    (e = []),
    (r.O = (f, t, o, i) => {
      if (!t) {
        var a = 1 / 0;
        for (n = 0; n < e.length; n++) {
          for (var [t, o, i] = e[n], l = !0, d = 0; d < t.length; d++)
            (!1 & i || a >= i) && Object.keys(r.O).every((b) => r.O[b](t[d]))
              ? t.splice(d--, 1)
              : ((l = !1), i < a && (a = i));
          if (l) {
            e.splice(n--, 1);
            var u = o();
            void 0 !== u && (f = u);
          }
        }
        return f;
      }
      i = i || 0;
      for (var n = e.length; n > 0 && e[n - 1][2] > i; n--) e[n] = e[n - 1];
      e[n] = [t, o, i];
    }),
    (() => {
      var f,
        e = Object.getPrototypeOf
          ? (t) => Object.getPrototypeOf(t)
          : (t) => t.__proto__;
      r.t = function (t, o) {
        if (
          (1 & o && (t = this(t)),
          8 & o ||
            ("object" == typeof t &&
              t &&
              ((4 & o && t.__esModule) ||
                (16 & o && "function" == typeof t.then))))
        )
          return t;
        var i = Object.create(null);
        r.r(i);
        var n = {};
        f = f || [null, e({}), e([]), e(e)];
        for (
          var a = 2 & o && t;
          "object" == typeof a && !~f.indexOf(a);
          a = e(a)
        )
          Object.getOwnPropertyNames(a).forEach((l) => (n[l] = () => t[l]));
        return (n.default = () => t), r.d(i, n), i;
      };
    })(),
    (r.d = (e, f) => {
      for (var t in f)
        r.o(f, t) &&
          !r.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: f[t] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((f, t) => (r.f[t](e, f), f), []))),
    (r.u = (e) => e + ".abd78e9f0a3da00c.js"),
    (r.miniCssF = (e) => {}),
    (r.o = (e, f) => Object.prototype.hasOwnProperty.call(e, f)),
    (() => {
      var e = {},
        f = "MyProject:";
      r.l = (t, o, i, n) => {
        if (e[t]) e[t].push(o);
        else {
          var a, l;
          if (void 0 !== i)
            for (
              var d = document.getElementsByTagName("script"), u = 0;
              u < d.length;
              u++
            ) {
              var c = d[u];
              if (
                c.getAttribute("src") == t ||
                c.getAttribute("data-webpack") == f + i
              ) {
                a = c;
                break;
              }
            }
          a ||
            ((l = !0),
            ((a = document.createElement("script")).type = "module"),
            (a.charset = "utf-8"),
            (a.timeout = 120),
            r.nc && a.setAttribute("nonce", r.nc),
            a.setAttribute("data-webpack", f + i),
            (a.src = r.tu(t))),
            (e[t] = [o]);
          var s = (g, b) => {
              (a.onerror = a.onload = null), clearTimeout(p);
              var h = e[t];
              if (
                (delete e[t],
                a.parentNode && a.parentNode.removeChild(a),
                h && h.forEach((_) => _(b)),
                g)
              )
                return g(b);
            },
            p = setTimeout(
              s.bind(null, void 0, { type: "timeout", target: a }),
              12e4
            );
          (a.onerror = s.bind(null, a.onerror)),
            (a.onload = s.bind(null, a.onload)),
            l && document.head.appendChild(a);
        }
      };
    })(),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      r.tu = (f) => (
        void 0 === e &&
          ((e = { createScriptURL: (t) => t }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy("angular#bundler", e))),
        e.createScriptURL(f)
      );
    })(),
    (r.p = ""),
    (() => {
      var e = { 666: 0 };
      (r.f.j = (o, i) => {
        var n = r.o(e, o) ? e[o] : void 0;
        if (0 !== n)
          if (n) i.push(n[2]);
          else if (666 != o) {
            var a = new Promise((c, s) => (n = e[o] = [c, s]));
            i.push((n[2] = a));
            var l = r.p + r.u(o),
              d = new Error();
            r.l(
              l,
              (c) => {
                if (r.o(e, o) && (0 !== (n = e[o]) && (e[o] = void 0), n)) {
                  var s = c && ("load" === c.type ? "missing" : c.type),
                    p = c && c.target && c.target.src;
                  (d.message =
                    "Loading chunk " + o + " failed.\n(" + s + ": " + p + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = s),
                    (d.request = p),
                    n[1](d);
                }
              },
              "chunk-" + o,
              o
            );
          } else e[o] = 0;
      }),
        (r.O.j = (o) => 0 === e[o]);
      var f = (o, i) => {
          var d,
            u,
            [n, a, l] = i,
            c = 0;
          if (n.some((p) => 0 !== e[p])) {
            for (d in a) r.o(a, d) && (r.m[d] = a[d]);
            if (l) var s = l(r);
          }
          for (o && o(i); c < n.length; c++)
            r.o(e, (u = n[c])) && e[u] && e[u][0](), (e[n[c]] = 0);
          return r.O(s);
        },
        t = (self.webpackChunkMyProject = self.webpackChunkMyProject || []);
      t.forEach(f.bind(null, 0)), (t.push = f.bind(null, t.push.bind(t)));
    })();
})();
