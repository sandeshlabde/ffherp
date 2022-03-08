var Mo = Object.defineProperty,
  Ro = Object.defineProperties,
  Po = Object.getOwnPropertyDescriptors,
  hs = Object.getOwnPropertySymbols,
  ko = Object.prototype.hasOwnProperty,
  Vo = Object.prototype.propertyIsEnumerable,
  us = (g, p, A) =>
    p in g
      ? Mo(g, p, { enumerable: !0, configurable: !0, writable: !0, value: A })
      : (g[p] = A),
  h = (g, p) => {
    for (var A in p || (p = {})) ko.call(p, A) && us(g, A, p[A]);
    if (hs) for (var A of hs(p)) Vo.call(p, A) && us(g, A, p[A]);
    return g;
  },
  Ot = (g, p) => Ro(g, Po(p));
!(function (g, p) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = p(require("@popperjs/core")))
    : "function" == typeof define && define.amd
    ? define(["@popperjs/core"], p)
    : ((g =
        "undefined" != typeof globalThis ? globalThis : g || self).bootstrap =
        p(g.Popper));
})(this, function (g) {
  "use strict";
  function p(s) {
    if (s && s.__esModule) return s;
    const t = Object.create(null);
    if (s)
      for (const e in s)
        if ("default" !== e) {
          const i = Object.getOwnPropertyDescriptor(s, e);
          Object.defineProperty(
            t,
            e,
            i.get ? i : { enumerable: !0, get: () => s[e] }
          );
        }
    return (t.default = s), Object.freeze(t);
  }
  const A = p(g),
    Dt = "transitionend",
    Ft = (s) => {
      let t = s.getAttribute("data-bs-target");
      if (!t || "#" === t) {
        let e = s.getAttribute("href");
        if (!e || (!e.includes("#") && !e.startsWith("."))) return null;
        e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`),
          (t = e && "#" !== e ? e.trim() : null);
      }
      return t;
    },
    $t = (s) => {
      const t = Ft(s);
      return t && document.querySelector(t) ? t : null;
    },
    L = (s) => {
      const t = Ft(s);
      return t ? document.querySelector(t) : null;
    },
    zt = (s) => {
      s.dispatchEvent(new Event(Dt));
    },
    k = (s) =>
      !(!s || "object" != typeof s) &&
      (void 0 !== s.jquery && (s = s[0]), void 0 !== s.nodeType),
    w = (s) =>
      k(s)
        ? s.jquery
          ? s[0]
          : s
        : "string" == typeof s && s.length > 0
        ? document.querySelector(s)
        : null,
    y = (s, t, e) => {
      Object.keys(e).forEach((i) => {
        const n = e[i],
          o = t[i],
          a =
            o && k(o)
              ? "element"
              : ((s) =>
                  null == s
                    ? `${s}`
                    : {}.toString
                        .call(s)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase())(o);
        if (!new RegExp(n).test(a))
          throw new TypeError(
            `${s.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${n}".`
          );
      });
    },
    J = (s) =>
      !(!k(s) || 0 === s.getClientRects().length) &&
      "visible" === getComputedStyle(s).getPropertyValue("visibility"),
    V = (s) =>
      !(
        s &&
        s.nodeType === Node.ELEMENT_NODE &&
        !s.classList.contains("disabled")
      ) ||
      (void 0 !== s.disabled
        ? s.disabled
        : s.hasAttribute("disabled") && "false" !== s.getAttribute("disabled")),
    Gt = (s) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof s.getRootNode) {
        const t = s.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      }
      return s instanceof ShadowRoot
        ? s
        : s.parentNode
        ? Gt(s.parentNode)
        : null;
    },
    Et = () => {},
    qt = () => {
      const { jQuery: s } = window;
      return s && !document.body.hasAttribute("data-bs-no-jquery") ? s : null;
    },
    Lt = [],
    T = () => "rtl" === document.documentElement.dir,
    S = (s) => {
      ((s) => {
        "loading" === document.readyState
          ? (Lt.length ||
              document.addEventListener("DOMContentLoaded", () => {
                Lt.forEach((t) => t());
              }),
            Lt.push(s))
          : s();
      })(() => {
        const t = qt();
        if (t) {
          const e = s.NAME,
            i = t.fn[e];
          (t.fn[e] = s.jQueryInterface),
            (t.fn[e].Constructor = s),
            (t.fn[e].noConflict = () => ((t.fn[e] = i), s.jQueryInterface));
        }
      });
    },
    H = (s) => {
      "function" == typeof s && s();
    },
    Xt = (s, t, e = !0) => {
      if (!e) return void H(s);
      const n =
        ((s) => {
          if (!s) return 0;
          let { transitionDuration: t, transitionDelay: e } =
            window.getComputedStyle(s);
          const i = Number.parseFloat(t),
            n = Number.parseFloat(e);
          return i || n
            ? ((t = t.split(",")[0]),
              (e = e.split(",")[0]),
              1e3 * (Number.parseFloat(t) + Number.parseFloat(e)))
            : 0;
        })(t) + 5;
      let o = !1;
      const a = ({ target: c }) => {
        c === t && ((o = !0), t.removeEventListener(Dt, a), H(s));
      };
      t.addEventListener(Dt, a),
        setTimeout(() => {
          o || zt(t);
        }, n);
    },
    Qt = (s, t, e, i) => {
      let n = s.indexOf(t);
      if (-1 === n) return s[!e && i ? s.length - 1 : 0];
      const o = s.length;
      return (
        (n += e ? 1 : -1),
        i && (n = (n + o) % o),
        s[Math.max(0, Math.min(n, o - 1))]
      );
    },
    gs = /[^.]*(?=\..*)\.|.*/,
    As = /\..*/,
    Ts = /::\d+$/,
    wt = {};
  let Zt = 1;
  const bs = { mouseenter: "mouseover", mouseleave: "mouseout" },
    Ns = /^(mouseenter|mouseleave)/i,
    Jt = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function te(s, t) {
    return (t && `${t}::${Zt++}`) || s.uidEvent || Zt++;
  }
  function ee(s) {
    const t = te(s);
    return (s.uidEvent = t), (wt[t] = wt[t] || {}), wt[t];
  }
  function se(s, t, e = null) {
    const i = Object.keys(s);
    for (let n = 0, o = i.length; n < o; n++) {
      const a = s[i[n]];
      if (a.originalHandler === t && a.delegationSelector === e) return a;
    }
    return null;
  }
  function ie(s, t, e) {
    const i = "string" == typeof t,
      n = i ? e : t;
    let o = oe(s);
    return Jt.has(o) || (o = s), [i, n, o];
  }
  function ne(s, t, e, i, n) {
    if ("string" != typeof t || !s) return;
    if ((e || ((e = i), (i = null)), Ns.test(t))) {
      const Z = (yt) =>
        function (P) {
          if (
            !P.relatedTarget ||
            (P.relatedTarget !== P.delegateTarget &&
              !P.delegateTarget.contains(P.relatedTarget))
          )
            return yt.call(this, P);
        };
      i ? (i = Z(i)) : (e = Z(e));
    }
    const [o, a, c] = ie(t, e, i),
      u = ee(s),
      d = u[c] || (u[c] = {}),
      f = se(d, a, o ? e : null);
    if (f) return void (f.oneOff = f.oneOff && n);
    const _ = te(a, t.replace(gs, "")),
      E = o
        ? (function Cs(s, t, e) {
            return function i(n) {
              const o = s.querySelectorAll(t);
              for (let { target: a } = n; a && a !== this; a = a.parentNode)
                for (let c = o.length; c--; )
                  if (o[c] === a)
                    return (
                      (n.delegateTarget = a),
                      i.oneOff && r.off(s, n.type, t, e),
                      e.apply(a, [n])
                    );
              return null;
            };
          })(s, e, i)
        : (function Ss(s, t) {
            return function e(i) {
              return (
                (i.delegateTarget = s),
                e.oneOff && r.off(s, i.type, t),
                t.apply(s, [i])
              );
            };
          })(s, e);
    (E.delegationSelector = o ? e : null),
      (E.originalHandler = a),
      (E.oneOff = n),
      (E.uidEvent = _),
      (d[_] = E),
      s.addEventListener(c, E, o);
  }
  function It(s, t, e, i, n) {
    const o = se(t[e], i, n);
    !o || (s.removeEventListener(e, o, Boolean(n)), delete t[e][o.uidEvent]);
  }
  function oe(s) {
    return (s = s.replace(As, "")), bs[s] || s;
  }
  const r = {
      on(s, t, e, i) {
        ne(s, t, e, i, !1);
      },
      one(s, t, e, i) {
        ne(s, t, e, i, !0);
      },
      off(s, t, e, i) {
        if ("string" != typeof t || !s) return;
        const [n, o, a] = ie(t, e, i),
          c = a !== t,
          u = ee(s),
          d = t.startsWith(".");
        if (void 0 !== o) {
          if (!u || !u[a]) return;
          return void It(s, u, a, o, n ? e : null);
        }
        d &&
          Object.keys(u).forEach((_) => {
            !(function vs(s, t, e, i) {
              const n = t[e] || {};
              Object.keys(n).forEach((o) => {
                if (o.includes(i)) {
                  const a = n[o];
                  It(s, t, e, a.originalHandler, a.delegationSelector);
                }
              });
            })(s, u, _, t.slice(1));
          });
        const f = u[a] || {};
        Object.keys(f).forEach((_) => {
          const E = _.replace(Ts, "");
          if (!c || t.includes(E)) {
            const Z = f[_];
            It(s, u, a, Z.originalHandler, Z.delegationSelector);
          }
        });
      },
      trigger(s, t, e) {
        if ("string" != typeof t || !s) return null;
        const i = qt(),
          n = oe(t),
          o = t !== n,
          a = Jt.has(n);
        let c,
          u = !0,
          d = !0,
          f = !1,
          _ = null;
        return (
          o &&
            i &&
            ((c = i.Event(t, e)),
            i(s).trigger(c),
            (u = !c.isPropagationStopped()),
            (d = !c.isImmediatePropagationStopped()),
            (f = c.isDefaultPrevented())),
          a
            ? ((_ = document.createEvent("HTMLEvents")), _.initEvent(n, u, !0))
            : (_ = new CustomEvent(t, { bubbles: u, cancelable: !0 })),
          void 0 !== e &&
            Object.keys(e).forEach((E) => {
              Object.defineProperty(_, E, { get: () => e[E] });
            }),
          f && _.preventDefault(),
          d && s.dispatchEvent(_),
          _.defaultPrevented && void 0 !== c && c.preventDefault(),
          _
        );
      },
    },
    I = new Map(),
    tt = {
      set(s, t, e) {
        I.has(s) || I.set(s, new Map());
        const i = I.get(s);
        i.has(t) || 0 === i.size
          ? i.set(t, e)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(i.keys())[0]
              }.`
            );
      },
      get: (s, t) => (I.has(s) && I.get(s).get(t)) || null,
      remove(s, t) {
        if (!I.has(s)) return;
        const e = I.get(s);
        e.delete(t), 0 === e.size && I.delete(s);
      },
    };
  class v {
    constructor(t) {
      (t = w(t)) &&
        ((this._element = t),
        tt.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      tt.remove(this._element, this.constructor.DATA_KEY),
        r.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, i = !0) {
      Xt(t, e, i);
    }
    static getInstance(t) {
      return tt.get(w(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const pt = (s, t = "hide") => {
      const i = s.NAME;
      r.on(
        document,
        `click.dismiss${s.EVENT_KEY}`,
        `[data-bs-dismiss="${i}"]`,
        function (n) {
          if (
            (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
            V(this))
          )
            return;
          const o = L(this) || this.closest(`.${i}`);
          s.getOrCreateInstance(o)[t]();
        }
      );
    },
    re = ".bs.alert",
    Ds = `close${re}`,
    $s = `closed${re}`;
  class et extends v {
    static get NAME() {
      return "alert";
    }
    close() {
      if (r.trigger(this._element, Ds).defaultPrevented) return;
      this._element.classList.remove("show");
      const e = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, e);
    }
    _destroyElement() {
      this._element.remove(), r.trigger(this._element, $s), this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = et.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  pt(et, "close"), S(et);
  const ae = '[data-bs-toggle="button"]';
  class st extends v {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = st.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function ce(s) {
    return (
      "true" === s ||
      ("false" !== s &&
        (s === Number(s).toString()
          ? Number(s)
          : "" === s || "null" === s
          ? null
          : s))
    );
  }
  function Mt(s) {
    return s.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  r.on(document, "click.bs.button.data-api", ae, (s) => {
    s.preventDefault();
    const t = s.target.closest(ae);
    st.getOrCreateInstance(t).toggle();
  }),
    S(st);
  const m = {
      setDataAttribute(s, t, e) {
        s.setAttribute(`data-bs-${Mt(t)}`, e);
      },
      removeDataAttribute(s, t) {
        s.removeAttribute(`data-bs-${Mt(t)}`);
      },
      getDataAttributes(s) {
        if (!s) return {};
        const t = {};
        return (
          Object.keys(s.dataset)
            .filter((e) => e.startsWith("bs"))
            .forEach((e) => {
              let i = e.replace(/^bs/, "");
              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                (t[i] = ce(s.dataset[e]));
            }),
          t
        );
      },
      getDataAttribute: (s, t) => ce(s.getAttribute(`data-bs-${Mt(t)}`)),
      offset(s) {
        const t = s.getBoundingClientRect();
        return {
          top: t.top + window.pageYOffset,
          left: t.left + window.pageXOffset,
        };
      },
      position: (s) => ({ top: s.offsetTop, left: s.offsetLeft }),
    },
    l = {
      find: (s, t = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(t, s)),
      findOne: (s, t = document.documentElement) =>
        Element.prototype.querySelector.call(t, s),
      children: (s, t) => [].concat(...s.children).filter((e) => e.matches(t)),
      parents(s, t) {
        const e = [];
        let i = s.parentNode;
        for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
          i.matches(t) && e.push(i), (i = i.parentNode);
        return e;
      },
      prev(s, t) {
        let e = s.previousElementSibling;
        for (; e; ) {
          if (e.matches(t)) return [e];
          e = e.previousElementSibling;
        }
        return [];
      },
      next(s, t) {
        let e = s.nextElementSibling;
        for (; e; ) {
          if (e.matches(t)) return [e];
          e = e.nextElementSibling;
        }
        return [];
      },
      focusableChildren(s) {
        const t = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((e) => `${e}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(t, s).filter((e) => !V(e) && J(e));
      },
    },
    le = "carousel",
    b = ".bs.carousel",
    he = ".data-api",
    ue = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    Bs = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    K = "next",
    Y = "prev",
    W = "left",
    it = "right",
    xs = { ArrowLeft: it, ArrowRight: W },
    Us = `slide${b}`,
    de = `slid${b}`,
    js = `keydown${b}`,
    Fs = `mouseenter${b}`,
    zs = `mouseleave${b}`,
    Gs = `touchstart${b}`,
    qs = `touchmove${b}`,
    Xs = `touchend${b}`,
    Qs = `pointerdown${b}`,
    Zs = `pointerup${b}`,
    Js = `dragstart${b}`,
    ti = `load${b}${he}`,
    ei = `click${b}${he}`,
    B = "active",
    mt = ".active.carousel-item";
  class O extends v {
    constructor(t, e) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(e)),
        (this._indicatorsElement = l.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return ue;
    }
    static get NAME() {
      return le;
    }
    next() {
      this._slide(K);
    }
    nextWhenVisible() {
      !document.hidden && J(this._element) && this.next();
    }
    prev() {
      this._slide(Y);
    }
    pause(t) {
      t || (this._isPaused = !0),
        l.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (zt(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = l.findOne(mt, this._element);
      const e = this._getItemIndex(this._activeElement);
      if (!(t > this._items.length - 1 || t < 0)) {
        if (!this._isSliding)
          return e === t
            ? (this.pause(), void this.cycle())
            : void this._slide(t > e ? K : Y, this._items[t]);
        r.one(this._element, de, () => this.to(t));
      }
    }
    _getConfig(t) {
      return (
        (t = h(
          h(h({}, ue), m.getDataAttributes(this._element)),
          "object" == typeof t ? t : {}
        )),
        y(le, t, Bs),
        t
      );
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? it : W);
    }
    _addEventListeners() {
      this._config.keyboard && r.on(this._element, js, (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (r.on(this._element, Fs, (t) => this.pause(t)),
          r.on(this._element, zs, (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (o) =>
          this._pointerEvent &&
          ("pen" === o.pointerType || "touch" === o.pointerType),
        e = (o) => {
          t(o)
            ? (this.touchStartX = o.clientX)
            : this._pointerEvent || (this.touchStartX = o.touches[0].clientX);
        },
        i = (o) => {
          this.touchDeltaX =
            o.touches && o.touches.length > 1
              ? 0
              : o.touches[0].clientX - this.touchStartX;
        },
        n = (o) => {
          t(o) && (this.touchDeltaX = o.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (a) => this.cycle(a),
                500 + this._config.interval
              )));
        };
      l.find(".carousel-item img", this._element).forEach((o) => {
        r.on(o, Js, (a) => a.preventDefault());
      }),
        this._pointerEvent
          ? (r.on(this._element, Qs, (o) => e(o)),
            r.on(this._element, Zs, (o) => n(o)),
            this._element.classList.add("pointer-event"))
          : (r.on(this._element, Gs, (o) => e(o)),
            r.on(this._element, qs, (o) => i(o)),
            r.on(this._element, Xs, (o) => n(o)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = xs[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? l.find(".carousel-item", t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      return Qt(this._items, e, t === K, this._config.wrap);
    }
    _triggerSlideEvent(t, e) {
      const i = this._getItemIndex(t),
        n = this._getItemIndex(l.findOne(mt, this._element));
      return r.trigger(this._element, Us, {
        relatedTarget: t,
        direction: e,
        from: n,
        to: i,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = l.findOne(".active", this._indicatorsElement);
        e.classList.remove(B), e.removeAttribute("aria-current");
        const i = l.find("[data-bs-target]", this._indicatorsElement);
        for (let n = 0; n < i.length; n++)
          if (
            Number.parseInt(i[n].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            i[n].classList.add(B), i[n].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t = this._activeElement || l.findOne(mt, this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = e))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const i = this._directionToOrder(t),
        n = l.findOne(mt, this._element),
        o = this._getItemIndex(n),
        a = e || this._getItemByOrder(i, n),
        c = this._getItemIndex(a),
        u = Boolean(this._interval),
        d = i === K,
        f = d ? "carousel-item-start" : "carousel-item-end",
        _ = d ? "carousel-item-next" : "carousel-item-prev",
        E = this._orderToDirection(i);
      if (a && a.classList.contains(B)) return void (this._isSliding = !1);
      if (
        this._isSliding ||
        this._triggerSlideEvent(a, E).defaultPrevented ||
        !n ||
        !a
      )
        return;
      (this._isSliding = !0),
        u && this.pause(),
        this._setActiveIndicatorElement(a),
        (this._activeElement = a);
      const yt = () => {
        r.trigger(this._element, de, {
          relatedTarget: a,
          direction: E,
          from: o,
          to: c,
        });
      };
      this._element.classList.contains("slide")
        ? (a.classList.add(_),
          n.classList.add(f),
          a.classList.add(f),
          this._queueCallback(
            () => {
              a.classList.remove(f, _),
                a.classList.add(B),
                n.classList.remove(B, _, f),
                (this._isSliding = !1),
                setTimeout(yt, 0);
            },
            n,
            !0
          ))
        : (n.classList.remove(B),
          a.classList.add(B),
          (this._isSliding = !1),
          yt()),
        u && this.cycle();
    }
    _directionToOrder(t) {
      return [it, W].includes(t)
        ? T()
          ? t === W
            ? Y
            : K
          : t === W
          ? K
          : Y
        : t;
    }
    _orderToDirection(t) {
      return [K, Y].includes(t)
        ? T()
          ? t === Y
            ? W
            : it
          : t === Y
          ? it
          : W
        : t;
    }
    static carouselInterface(t, e) {
      const i = O.getOrCreateInstance(t, e);
      let { _config: n } = i;
      "object" == typeof e && (n = h(h({}, n), e));
      const o = "string" == typeof e ? e : n.slide;
      if ("number" == typeof e) i.to(e);
      else if ("string" == typeof o) {
        if (void 0 === i[o]) throw new TypeError(`No method named "${o}"`);
        i[o]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        O.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = L(this);
      if (!e || !e.classList.contains("carousel")) return;
      const i = h(h({}, m.getDataAttributes(e)), m.getDataAttributes(this)),
        n = this.getAttribute("data-bs-slide-to");
      n && (i.interval = !1),
        O.carouselInterface(e, i),
        n && O.getInstance(e).to(n),
        t.preventDefault();
    }
  }
  r.on(
    document,
    ei,
    "[data-bs-slide], [data-bs-slide-to]",
    O.dataApiClickHandler
  ),
    r.on(window, ti, () => {
      const s = l.find('[data-bs-ride="carousel"]');
      for (let t = 0, e = s.length; t < e; t++)
        O.carouselInterface(s[t], O.getInstance(s[t]));
    }),
    S(O);
  const _e = "collapse",
    fe = "bs.collapse",
    nt = `.${fe}`,
    Ee = { toggle: !0, parent: null },
    Ti = { toggle: "boolean", parent: "(null|element)" },
    bi = `show${nt}`,
    Ni = `shown${nt}`,
    Si = `hide${nt}`,
    Ci = `hidden${nt}`,
    vi = `click${nt}.data-api`,
    Rt = "show",
    q = "collapse",
    gt = "collapsing",
    pe = "collapsed",
    me = `:scope .${q} .${q}`,
    Pt = '[data-bs-toggle="collapse"]';
  class x extends v {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = []);
      const i = l.find(Pt);
      for (let n = 0, o = i.length; n < o; n++) {
        const a = i[n],
          c = $t(a),
          u = l.find(c).filter((d) => d === this._element);
        null !== c &&
          u.length &&
          ((this._selector = c), this._triggerArray.push(a));
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return Ee;
    }
    static get NAME() {
      return _e;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let e,
        t = [];
      if (this._config.parent) {
        const d = l.find(me, this._config.parent);
        t = l
          .find(".collapse.show, .collapse.collapsing", this._config.parent)
          .filter((f) => !d.includes(f));
      }
      const i = l.findOne(this._selector);
      if (t.length) {
        const d = t.find((f) => i !== f);
        if (((e = d ? x.getInstance(d) : null), e && e._isTransitioning))
          return;
      }
      if (r.trigger(this._element, bi).defaultPrevented) return;
      t.forEach((d) => {
        i !== d && x.getOrCreateInstance(d, { toggle: !1 }).hide(),
          e || tt.set(d, fe, null);
      });
      const o = this._getDimension();
      this._element.classList.remove(q),
        this._element.classList.add(gt),
        (this._element.style[o] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const u = `scroll${o[0].toUpperCase() + o.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(gt),
            this._element.classList.add(q, Rt),
            (this._element.style[o] = ""),
            r.trigger(this._element, Ni);
        },
        this._element,
        !0
      ),
        (this._element.style[o] = `${this._element[u]}px`);
    }
    hide() {
      if (
        this._isTransitioning ||
        !this._isShown() ||
        r.trigger(this._element, Si).defaultPrevented
      )
        return;
      const e = this._getDimension();
      (this._element.style[e] = `${
        this._element.getBoundingClientRect()[e]
      }px`),
        this._element.classList.add(gt),
        this._element.classList.remove(q, Rt);
      const i = this._triggerArray.length;
      for (let o = 0; o < i; o++) {
        const a = this._triggerArray[o],
          c = L(a);
        c && !this._isShown(c) && this._addAriaAndCollapsedClass([a], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[e] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(gt),
              this._element.classList.add(q),
              r.trigger(this._element, Ci);
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(Rt);
    }
    _getConfig(t) {
      return (
        ((t = h(h(h({}, Ee), m.getDataAttributes(this._element)), t)).toggle =
          Boolean(t.toggle)),
        (t.parent = w(t.parent)),
        y(_e, t, Ti),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = l.find(me, this._config.parent);
      l.find(Pt, this._config.parent)
        .filter((e) => !t.includes(e))
        .forEach((e) => {
          const i = L(e);
          i && this._addAriaAndCollapsedClass([e], this._isShown(i));
        });
    }
    _addAriaAndCollapsedClass(t, e) {
      !t.length ||
        t.forEach((i) => {
          e ? i.classList.remove(pe) : i.classList.add(pe),
            i.setAttribute("aria-expanded", e);
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = {};
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const i = x.getOrCreateInstance(this, e);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t]();
        }
      });
    }
  }
  r.on(document, vi, Pt, function (s) {
    ("A" === s.target.tagName ||
      (s.delegateTarget && "A" === s.delegateTarget.tagName)) &&
      s.preventDefault();
    const t = $t(this);
    l.find(t).forEach((i) => {
      x.getOrCreateInstance(i, { toggle: !1 }).toggle();
    });
  }),
    S(x);
  const kt = "dropdown",
    U = ".bs.dropdown",
    Vt = ".data-api",
    At = "Escape",
    Ht = "ArrowUp",
    Tt = "ArrowDown",
    wi = new RegExp(`${Ht}|${Tt}|${At}`),
    Ii = `hide${U}`,
    Mi = `hidden${U}`,
    Ri = `show${U}`,
    Pi = `shown${U}`,
    Te = `click${U}${Vt}`,
    be = `keydown${U}${Vt}`,
    ki = `keyup${U}${Vt}`,
    X = "show",
    ot = '[data-bs-toggle="dropdown"]',
    Kt = ".dropdown-menu",
    xi = T() ? "top-end" : "top-start",
    Ui = T() ? "top-start" : "top-end",
    ji = T() ? "bottom-end" : "bottom-start",
    Fi = T() ? "bottom-start" : "bottom-end",
    zi = T() ? "left-start" : "right-start",
    Gi = T() ? "right-start" : "left-start",
    qi = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    Xi = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class N extends v {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return qi;
    }
    static get DefaultType() {
      return Xi;
    }
    static get NAME() {
      return kt;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (V(this._element) || this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      if (r.trigger(this._element, Ri, t).defaultPrevented) return;
      const i = N.getParentFromElement(this._element);
      this._inNavbar
        ? m.setDataAttribute(this._menu, "popper", "none")
        : this._createPopper(i),
        "ontouchstart" in document.documentElement &&
          !i.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((n) => r.on(n, "mouseover", Et)),
        this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(X),
        this._element.classList.add(X),
        r.trigger(this._element, Pi, t);
    }
    hide() {
      !V(this._element) &&
        this._isShown(this._menu) &&
        this._completeHide({ relatedTarget: this._element });
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      r.trigger(this._element, Ii, t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((i) => r.off(i, "mouseover", Et)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(X),
        this._element.classList.remove(X),
        this._element.setAttribute("aria-expanded", "false"),
        m.removeDataAttribute(this._menu, "popper"),
        r.trigger(this._element, Mi, t));
    }
    _getConfig(t) {
      if (
        ((t = h(
          h(
            h({}, this.constructor.Default),
            m.getDataAttributes(this._element)
          ),
          t
        )),
        y(kt, t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !k(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          `${kt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper(t) {
      if (void 0 === A)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let e = this._element;
      "parent" === this._config.reference
        ? (e = t)
        : k(this._config.reference)
        ? (e = w(this._config.reference))
        : "object" == typeof this._config.reference &&
          (e = this._config.reference);
      const i = this._getPopperConfig(),
        n = i.modifiers.find(
          (o) => "applyStyles" === o.name && !1 === o.enabled
        );
      (this._popper = A.createPopper(e, this._menu, i)),
        n && m.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(t = this._element) {
      return t.classList.contains(X);
    }
    _getMenuElement() {
      return l.next(this._element, Kt)[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return zi;
      if (t.classList.contains("dropstart")) return Gi;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? Ui : xi) : e ? Fi : ji;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        h(
          h({}, t),
          "function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig
        )
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = l
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter(J);
      !i.length || Qt(i, e, t === Tt, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = N.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
        return;
      const e = l.find(ot);
      for (let i = 0, n = e.length; i < n; i++) {
        const o = N.getInstance(e[i]);
        if (!o || !1 === o._config.autoClose || !o._isShown()) continue;
        const a = { relatedTarget: o._element };
        if (t) {
          const c = t.composedPath(),
            u = c.includes(o._menu);
          if (
            c.includes(o._element) ||
            ("inside" === o._config.autoClose && !u) ||
            ("outside" === o._config.autoClose && u) ||
            (o._menu.contains(t.target) &&
              (("keyup" === t.type && "Tab" === t.key) ||
                /input|select|option|textarea|form/i.test(t.target.tagName)))
          )
            continue;
          "click" === t.type && (a.clickEvent = t);
        }
        o._completeHide(a);
      }
    }
    static getParentFromElement(t) {
      return L(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? "Space" === t.key ||
            (t.key !== At &&
              ((t.key !== Tt && t.key !== Ht) || t.target.closest(Kt)))
          : !wi.test(t.key)
      )
        return;
      const e = this.classList.contains(X);
      if (
        (!e && t.key === At) ||
        (t.preventDefault(), t.stopPropagation(), V(this))
      )
        return;
      const i = this.matches(ot) ? this : l.prev(this, ot)[0],
        n = N.getOrCreateInstance(i);
      if (t.key !== At)
        return t.key === Ht || t.key === Tt
          ? (e || n.show(), void n._selectMenuItem(t))
          : void ((!e || "Space" === t.key) && N.clearMenus());
      n.hide();
    }
  }
  r.on(document, be, ot, N.dataApiKeydownHandler),
    r.on(document, be, Kt, N.dataApiKeydownHandler),
    r.on(document, Te, N.clearMenus),
    r.on(document, ki, N.clearMenus),
    r.on(document, Te, ot, function (s) {
      s.preventDefault(), N.getOrCreateInstance(this).toggle();
    }),
    S(N);
  const Ne = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    Se = ".sticky-top";
  class Yt {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
        this._setElementAttributes(Ne, "paddingRight", (e) => e + t),
        this._setElementAttributes(Se, "marginRight", (e) => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (a) => {
        if (a !== this._element && window.innerWidth > a.clientWidth + n)
          return;
        this._saveInitialAttribute(a, e);
        const c = window.getComputedStyle(a)[e];
        a.style[e] = `${i(Number.parseFloat(c))}px`;
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(Ne, "paddingRight"),
        this._resetElementAttributes(Se, "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const i = t.style[e];
      i && m.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (n) => {
        const o = m.getDataAttribute(n, e);
        void 0 === o
          ? n.style.removeProperty(e)
          : (m.removeDataAttribute(n, e), (n.style[e] = o));
      });
    }
    _applyManipulationCallback(t, e) {
      k(t) ? e(t) : l.find(t, this._element).forEach(e);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const Qi = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    Zi = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    },
    Ce = "backdrop",
    ye = `mousedown.bs.${Ce}`;
  class Oe {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && this._getElement(),
          this._getElement().classList.add("show"),
          this._emulateAnimation(() => {
            H(t);
          }))
        : H(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove("show"),
          this._emulateAnimation(() => {
            this.dispose(), H(t);
          }))
        : H(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return (
        ((t = h(h({}, Qi), "object" == typeof t ? t : {})).rootElement = w(
          t.rootElement
        )),
        y(Ce, t, Zi),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.append(this._getElement()),
        r.on(this._getElement(), ye, () => {
          H(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      !this._isAppended ||
        (r.off(this._element, ye),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      Xt(t, this._getElement(), this._config.isAnimated);
    }
  }
  const tn = { trapElement: null, autofocus: !0 },
    en = { trapElement: "element", autofocus: "boolean" },
    bt = ".bs.focustrap",
    nn = `focusin${bt}`,
    on = `keydown.tab${bt}`,
    De = "backward";
  class $e {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      const { trapElement: t, autofocus: e } = this._config;
      this._isActive ||
        (e && t.focus(),
        r.off(document, bt),
        r.on(document, nn, (i) => this._handleFocusin(i)),
        r.on(document, on, (i) => this._handleKeydown(i)),
        (this._isActive = !0));
    }
    deactivate() {
      !this._isActive || ((this._isActive = !1), r.off(document, bt));
    }
    _handleFocusin(t) {
      const { target: e } = t,
        { trapElement: i } = this._config;
      if (e === document || e === i || i.contains(e)) return;
      const n = l.focusableChildren(i);
      0 === n.length
        ? i.focus()
        : this._lastTabNavDirection === De
        ? n[n.length - 1].focus()
        : n[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? De : "forward");
    }
    _getConfig(t) {
      return (
        (t = h(h({}, tn), "object" == typeof t ? t : {})),
        y("focustrap", t, en),
        t
      );
    }
  }
  const C = ".bs.modal",
    Ie = { backdrop: !0, keyboard: !0, focus: !0 },
    ln = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    },
    hn = `hide${C}`,
    un = `hidePrevented${C}`,
    Me = `hidden${C}`,
    Re = `show${C}`,
    dn = `shown${C}`,
    Pe = `resize${C}`,
    ke = `click.dismiss${C}`,
    Ve = `keydown.dismiss${C}`,
    _n = `mouseup.dismiss${C}`,
    He = `mousedown.dismiss${C}`,
    fn = `click${C}.data-api`,
    Ke = "modal-open",
    Wt = "modal-static";
  class j extends v {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = l.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new Yt());
    }
    static get Default() {
      return Ie;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        r.trigger(this._element, Re, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(Ke),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        r.on(this._dialog, He, () => {
          r.one(this._element, _n, (i) => {
            i.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide() {
      if (
        !this._isShown ||
        this._isTransitioning ||
        r.trigger(this._element, hn).defaultPrevented
      )
        return;
      this._isShown = !1;
      const e = this._isAnimated();
      e && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove("show"),
        r.off(this._element, ke),
        r.off(this._dialog, He),
        this._queueCallback(() => this._hideModal(), this._element, e);
    }
    dispose() {
      [window, this._dialog].forEach((t) => r.off(t, C)),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Oe({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new $e({ trapElement: this._element });
    }
    _getConfig(t) {
      return (
        (t = h(
          h(h({}, Ie), m.getDataAttributes(this._element)),
          "object" == typeof t ? t : {}
        )),
        y("modal", t, ln),
        t
      );
    }
    _showElement(t) {
      const e = this._isAnimated(),
        i = l.findOne(".modal-body", this._dialog);
      (!this._element.parentNode ||
        this._element.parentNode.nodeType !== Node.ELEMENT_NODE) &&
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        i && (i.scrollTop = 0),
        this._element.classList.add("show"),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              r.trigger(this._element, dn, { relatedTarget: t });
          },
          this._dialog,
          e
        );
    }
    _setEscapeEvent() {
      this._isShown
        ? r.on(this._element, Ve, (t) => {
            this._config.keyboard && "Escape" === t.key
              ? (t.preventDefault(), this.hide())
              : !this._config.keyboard &&
                "Escape" === t.key &&
                this._triggerBackdropTransition();
          })
        : r.off(this._element, Ve);
    }
    _setResizeEvent() {
      this._isShown
        ? r.on(window, Pe, () => this._adjustDialog())
        : r.off(window, Pe);
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(Ke),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            r.trigger(this._element, Me);
        });
    }
    _showBackdrop(t) {
      r.on(this._element, ke, (e) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : e.target === e.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (r.trigger(this._element, un).defaultPrevented) return;
      const { classList: e, scrollHeight: i, style: n } = this._element,
        o = i > document.documentElement.clientHeight;
      (!o && "hidden" === n.overflowY) ||
        e.contains(Wt) ||
        (o || (n.overflowY = "hidden"),
        e.add(Wt),
        this._queueCallback(() => {
          e.remove(Wt),
            o ||
              this._queueCallback(() => {
                n.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      ((!i && t && !T()) || (i && !t && T())) &&
        (this._element.style.paddingLeft = `${e}px`),
        ((i && !t && !T()) || (!i && t && T())) &&
          (this._element.style.paddingRight = `${e}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = j.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  r.on(document, fn, '[data-bs-toggle="modal"]', function (s) {
    const t = L(this);
    ["A", "AREA"].includes(this.tagName) && s.preventDefault(),
      r.one(t, Re, (n) => {
        n.defaultPrevented ||
          r.one(t, Me, () => {
            J(this) && this.focus();
          });
      });
    const e = l.findOne(".modal.show");
    e && j.getInstance(e).hide(), j.getOrCreateInstance(t).toggle(this);
  }),
    pt(j),
    S(j);
  const We = "offcanvas",
    F = ".bs.offcanvas",
    Be = ".data-api",
    Tn = `load${F}${Be}`,
    xe = { backdrop: !0, keyboard: !0, scroll: !1 },
    Nn = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    je = ".offcanvas.show",
    Cn = `show${F}`,
    vn = `shown${F}`,
    yn = `hide${F}`,
    Fe = `hidden${F}`,
    On = `click${F}${Be}`,
    Dn = `keydown.dismiss${F}`;
  class M extends v {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return We;
    }
    static get Default() {
      return xe;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        r.trigger(this._element, Cn, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new Yt().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add("show"),
        this._queueCallback(
          () => {
            this._config.scroll || this._focustrap.activate(),
              r.trigger(this._element, vn, { relatedTarget: t });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        !r.trigger(this._element, yn).defaultPrevented &&
        (this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.remove("show"),
        this._backdrop.hide(),
        this._queueCallback(
          () => {
            this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._element.style.visibility = "hidden"),
              this._config.scroll || new Yt().reset(),
              r.trigger(this._element, Fe);
          },
          this._element,
          !0
        ));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(t) {
      return (
        (t = h(
          h(h({}, xe), m.getDataAttributes(this._element)),
          "object" == typeof t ? t : {}
        )),
        y(We, t, Nn),
        t
      );
    }
    _initializeBackDrop() {
      return new Oe({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new $e({ trapElement: this._element });
    }
    _addEventListeners() {
      r.on(this._element, Dn, (t) => {
        this._config.keyboard && "Escape" === t.key && this.hide();
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = M.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  r.on(document, On, '[data-bs-toggle="offcanvas"]', function (s) {
    const t = L(this);
    if ((["A", "AREA"].includes(this.tagName) && s.preventDefault(), V(this)))
      return;
    r.one(t, Fe, () => {
      J(this) && this.focus();
    });
    const e = l.findOne(je);
    e && e !== t && M.getInstance(e).hide(),
      M.getOrCreateInstance(t).toggle(this);
  }),
    r.on(window, Tn, () =>
      l.find(je).forEach((s) => M.getOrCreateInstance(s).show())
    ),
    pt(M),
    S(M);
  const Ln = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    In = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Mn =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Rn = (s, t) => {
      const e = s.nodeName.toLowerCase();
      if (t.includes(e))
        return (
          !Ln.has(e) || Boolean(In.test(s.nodeValue) || Mn.test(s.nodeValue))
        );
      const i = t.filter((n) => n instanceof RegExp);
      for (let n = 0, o = i.length; n < o; n++) if (i[n].test(e)) return !0;
      return !1;
    };
  function ze(s, t, e) {
    if (!s.length) return s;
    if (e && "function" == typeof e) return e(s);
    const n = new window.DOMParser().parseFromString(s, "text/html"),
      o = [].concat(...n.body.querySelectorAll("*"));
    for (let a = 0, c = o.length; a < c; a++) {
      const u = o[a],
        d = u.nodeName.toLowerCase();
      if (!Object.keys(t).includes(d)) {
        u.remove();
        continue;
      }
      const f = [].concat(...u.attributes),
        _ = [].concat(t["*"] || [], t[d] || []);
      f.forEach((E) => {
        Rn(E, _) || u.removeAttribute(E.nodeName);
      });
    }
    return n.body.innerHTML;
  }
  const Ge = "tooltip",
    D = ".bs.tooltip",
    Vn = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Hn = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    Kn = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: T() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: T() ? "right" : "left",
    },
    Yn = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    Wn = {
      HIDE: `hide${D}`,
      HIDDEN: `hidden${D}`,
      SHOW: `show${D}`,
      SHOWN: `shown${D}`,
      INSERTED: `inserted${D}`,
      CLICK: `click${D}`,
      FOCUSIN: `focusin${D}`,
      FOCUSOUT: `focusout${D}`,
      MOUSEENTER: `mouseenter${D}`,
      MOUSELEAVE: `mouseleave${D}`,
    },
    Nt = "fade",
    rt = "show",
    at = "show",
    qe = ".tooltip-inner",
    Qe = "hide.bs.modal",
    ct = "hover",
    xt = "focus";
  class z extends v {
    constructor(t, e) {
      if (void 0 === A)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return Yn;
    }
    static get NAME() {
      return Ge;
    }
    static get Event() {
      return Wn;
    }
    static get DefaultType() {
      return Hn;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains(rt))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        r.off(this._element.closest(".modal"), Qe, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = r.trigger(this._element, this.constructor.Event.SHOW),
        e = Gt(this._element),
        i =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !i) return;
      "tooltip" === this.constructor.NAME &&
        this.tip &&
        this.getTitle() !== this.tip.querySelector(qe).innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null));
      const n = this.getTipElement(),
        o = ((s) => {
          do {
            s += Math.floor(1e6 * Math.random());
          } while (document.getElementById(s));
          return s;
        })(this.constructor.NAME);
      n.setAttribute("id", o),
        this._element.setAttribute("aria-describedby", o),
        this._config.animation && n.classList.add(Nt);
      const a =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, n, this._element)
            : this._config.placement,
        c = this._getAttachment(a);
      this._addAttachmentClass(c);
      const { container: u } = this._config;
      tt.set(n, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (u.append(n),
          r.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = A.createPopper(
              this._element,
              n,
              this._getPopperConfig(c)
            )),
        n.classList.add(rt);
      const d = this._resolvePossibleFunction(this._config.customClass);
      d && n.classList.add(...d.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((E) => {
            r.on(E, "mouseover", Et);
          });
      const _ = this.tip.classList.contains(Nt);
      this._queueCallback(
        () => {
          const E = this._hoverState;
          (this._hoverState = null),
            r.trigger(this._element, this.constructor.Event.SHOWN),
            "out" === E && this._leave(null, this);
        },
        this.tip,
        _
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        r.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove(rt),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((o) => r.off(o, "mouseover", Et)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger[xt] = !1),
        (this._activeTrigger[ct] = !1);
      const n = this.tip.classList.contains(Nt);
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            (this._hoverState !== at && t.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            r.trigger(this._element, this.constructor.Event.HIDDEN),
            this._disposePopper());
        },
        this.tip,
        n
      ),
        (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      t.innerHTML = this._config.template;
      const e = t.children[0];
      return (
        this.setContent(e), e.classList.remove(Nt, rt), (this.tip = e), this.tip
      );
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), qe);
    }
    _sanitizeAndSetContent(t, e, i) {
      const n = l.findOne(i, t);
      e || !n ? this.setElementContent(n, e) : n.remove();
    }
    setElementContent(t, e) {
      if (null !== t) {
        if (k(e))
          return (
            (e = w(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
              : (t.textContent = e.textContent))
          );
        this._config.html
          ? (this._config.sanitize &&
              (e = ze(e, this._config.allowList, this._config.sanitizeFn)),
            (t.innerHTML = e))
          : (t.textContent = e);
      }
    }
    getTitle() {
      const t =
        this._element.getAttribute("data-bs-original-title") ||
        this._config.title;
      return this._resolvePossibleFunction(t);
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      return (
        e ||
        this.constructor.getOrCreateInstance(
          t.delegateTarget,
          this._getDelegateConfig()
        )
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (i) => this._handlePopperPlacementChange(i),
          },
        ],
        onFirstUpdate: (i) => {
          i.options.placement !== i.placement &&
            this._handlePopperPlacementChange(i);
        },
      };
      return h(
        h({}, e),
        "function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig
      );
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
      );
    }
    _getAttachment(t) {
      return Kn[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((e) => {
        if ("click" === e)
          r.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (i) => this.toggle(i)
          );
        else if ("manual" !== e) {
          const n =
            e === ct
              ? this.constructor.Event.MOUSELEAVE
              : this.constructor.Event.FOCUSOUT;
          r.on(
            this._element,
            e === ct
              ? this.constructor.Event.MOUSEENTER
              : this.constructor.Event.FOCUSIN,
            this._config.selector,
            (o) => this._enter(o)
          ),
            r.on(this._element, n, this._config.selector, (o) =>
              this._leave(o)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        r.on(this._element.closest(".modal"), Qe, this._hideModalHandler),
        this._config.selector
          ? (this._config = Ot(h({}, this._config), {
              trigger: "manual",
              selector: "",
            }))
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        t &&
          !this._element.getAttribute("aria-label") &&
          !this._element.textContent &&
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? xt : ct] = !0),
        e.getTipElement().classList.contains(rt) || e._hoverState === at
          ? (e._hoverState = at)
          : (clearTimeout(e._timeout),
            (e._hoverState = at),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  e._hoverState === at && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      if (
        ((e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? xt : ct] =
            e._element.contains(t.relatedTarget)),
        !e._isWithActiveTrigger())
      ) {
        if (
          (clearTimeout(e._timeout),
          (e._hoverState = "out"),
          !e._config.delay || !e._config.delay.hide)
        )
          return void e.hide();
        e._timeout = setTimeout(() => {
          "out" === e._hoverState && e.hide();
        }, e._config.delay.hide);
      }
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = m.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((i) => {
          Vn.has(i) && delete e[i];
        }),
        ((t = h(
          h(h({}, this.constructor.Default), e),
          "object" == typeof t && t ? t : {}
        )).container = !1 === t.container ? document.body : w(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        y(Ge, t, this.constructor.DefaultType),
        t.sanitize && (t.template = ze(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
        i = t.getAttribute("class").match(e);
      null !== i &&
        i.length > 0 &&
        i.map((n) => n.trim()).forEach((n) => t.classList.remove(n));
    }
    _getBasicClassPrefix() {
      return "bs-tooltip";
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      !e ||
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = z.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  S(z);
  const $ = ".bs.popover",
    zn = Ot(h({}, z.Default), {
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    Gn = Ot(h({}, z.DefaultType), { content: "(string|element|function)" }),
    qn = {
      HIDE: `hide${$}`,
      HIDDEN: `hidden${$}`,
      SHOW: `show${$}`,
      SHOWN: `shown${$}`,
      INSERTED: `inserted${$}`,
      CLICK: `click${$}`,
      FOCUSIN: `focusin${$}`,
      FOCUSOUT: `focusout${$}`,
      MOUSEENTER: `mouseenter${$}`,
      MOUSELEAVE: `mouseleave${$}`,
    };
  class St extends z {
    static get Default() {
      return zn;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return qn;
    }
    static get DefaultType() {
      return Gn;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
        this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = St.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  S(St);
  const Ze = "scrollspy",
    Ct = ".bs.scrollspy",
    Je = { offset: 10, method: "auto", target: "" },
    Jn = { offset: "number", method: "string", target: "(string|element)" },
    to = `activate${Ct}`,
    eo = `scroll${Ct}`,
    so = `load${Ct}.data-api`,
    ts = "dropdown-item",
    Q = "active",
    Ut = ".nav-link",
    es = ".list-group-item",
    jt = `${Ut}, ${es}, .${ts}`,
    ss = "position";
  class lt extends v {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        r.on(this._scrollElement, eo, () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return Je;
    }
    static get NAME() {
      return Ze;
    }
    refresh() {
      const e =
          "auto" === this._config.method
            ? this._scrollElement === this._scrollElement.window
              ? "offset"
              : ss
            : this._config.method,
        i = e === ss ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        l
          .find(jt, this._config.target)
          .map((o) => {
            const a = $t(o),
              c = a ? l.findOne(a) : null;
            if (c) {
              const u = c.getBoundingClientRect();
              if (u.width || u.height) return [m[e](c).top + i, a];
            }
            return null;
          })
          .filter((o) => o)
          .sort((o, a) => o[0] - a[0])
          .forEach((o) => {
            this._offsets.push(o[0]), this._targets.push(o[1]);
          });
    }
    dispose() {
      r.off(this._scrollElement, Ct), super.dispose();
    }
    _getConfig(t) {
      return (
        ((t = h(
          h(h({}, Je), m.getDataAttributes(this._element)),
          "object" == typeof t && t ? t : {}
        )).target = w(t.target) || document.documentElement),
        y(Ze, t, Jn),
        t
      );
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        i = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
        const n = this._targets[this._targets.length - 1];
        this._activeTarget !== n && this._activate(n);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let n = this._offsets.length; n--; )
          this._activeTarget !== this._targets[n] &&
            t >= this._offsets[n] &&
            (void 0 === this._offsets[n + 1] || t < this._offsets[n + 1]) &&
            this._activate(this._targets[n]);
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = jt
          .split(",")
          .map((n) => `${n}[data-bs-target="${t}"],${n}[href="${t}"]`),
        i = l.findOne(e.join(","), this._config.target);
      i.classList.add(Q),
        i.classList.contains(ts)
          ? l
              .findOne(".dropdown-toggle", i.closest(".dropdown"))
              .classList.add(Q)
          : l.parents(i, ".nav, .list-group").forEach((n) => {
              l.prev(n, `${Ut}, ${es}`).forEach((o) => o.classList.add(Q)),
                l.prev(n, ".nav-item").forEach((o) => {
                  l.children(o, Ut).forEach((a) => a.classList.add(Q));
                });
            }),
        r.trigger(this._scrollElement, to, { relatedTarget: t });
    }
    _clear() {
      l.find(jt, this._config.target)
        .filter((t) => t.classList.contains(Q))
        .forEach((t) => t.classList.remove(Q));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = lt.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  r.on(window, so, () => {
    l.find('[data-bs-spy="scroll"]').forEach((s) => new lt(s));
  }),
    S(lt);
  const ht = ".bs.tab",
    uo = `hide${ht}`,
    _o = `hidden${ht}`,
    fo = `show${ht}`,
    Eo = `shown${ht}`,
    po = `click${ht}.data-api`,
    ut = "active",
    os = ".active",
    rs = ":scope > li > .active";
  class dt extends v {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(ut)
      )
        return;
      let t;
      const e = L(this._element),
        i = this._element.closest(".nav, .list-group");
      i &&
        ((t = l.find("UL" === i.nodeName || "OL" === i.nodeName ? rs : os, i)),
        (t = t[t.length - 1]));
      const n = t ? r.trigger(t, uo, { relatedTarget: this._element }) : null;
      if (
        r.trigger(this._element, fo, { relatedTarget: t }).defaultPrevented ||
        (null !== n && n.defaultPrevented)
      )
        return;
      this._activate(this._element, i);
      const a = () => {
        r.trigger(t, _o, { relatedTarget: this._element }),
          r.trigger(this._element, Eo, { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, a) : a();
    }
    _activate(t, e, i) {
      const o = (
          !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
            ? l.children(e, os)
            : l.find(rs, e)
        )[0],
        a = i && o && o.classList.contains("fade"),
        c = () => this._transitionComplete(t, o, i);
      o && a
        ? (o.classList.remove("show"), this._queueCallback(c, t, !0))
        : c();
    }
    _transitionComplete(t, e, i) {
      if (e) {
        e.classList.remove(ut);
        const o = l.findOne(":scope > .dropdown-menu .active", e.parentNode);
        o && o.classList.remove(ut),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !1);
      }
      t.classList.add(ut),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        t.classList.contains("fade") && t.classList.add("show");
      let n = t.parentNode;
      if (
        (n && "LI" === n.nodeName && (n = n.parentNode),
        n && n.classList.contains("dropdown-menu"))
      ) {
        const o = t.closest(".dropdown");
        o && l.find(".dropdown-toggle", o).forEach((a) => a.classList.add(ut)),
          t.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = dt.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  r.on(
    document,
    po,
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (s) {
      ["A", "AREA"].includes(this.tagName) && s.preventDefault(),
        V(this) || dt.getOrCreateInstance(this).show();
    }
  ),
    S(dt);
  const R = ".bs.toast",
    So = `mouseover${R}`,
    Co = `mouseout${R}`,
    vo = `focusin${R}`,
    yo = `focusout${R}`,
    Oo = `hide${R}`,
    Do = `hidden${R}`,
    $o = `show${R}`,
    Lo = `shown${R}`,
    _t = "show",
    vt = "showing",
    Io = { animation: "boolean", autohide: "boolean", delay: "number" },
    ls = { animation: !0, autohide: !0, delay: 5e3 };
  class ft extends v {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return Io;
    }
    static get Default() {
      return ls;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      r.trigger(this._element, $o).defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove("hide"),
        this._element.classList.add(_t),
        this._element.classList.add(vt),
        this._queueCallback(
          () => {
            this._element.classList.remove(vt),
              r.trigger(this._element, Lo),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this._element.classList.contains(_t) &&
        !r.trigger(this._element, Oo).defaultPrevented &&
        (this._element.classList.add(vt),
        this._queueCallback(
          () => {
            this._element.classList.add("hide"),
              this._element.classList.remove(vt),
              this._element.classList.remove(_t),
              r.trigger(this._element, Do);
          },
          this._element,
          this._config.animation
        ));
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(_t) &&
          this._element.classList.remove(_t),
        super.dispose();
    }
    _getConfig(t) {
      return (
        (t = h(
          h(h({}, ls), m.getDataAttributes(this._element)),
          "object" == typeof t && t ? t : {}
        )),
        y("toast", t, this.constructor.DefaultType),
        t
      );
    }
    _maybeScheduleHide() {
      !this._config.autohide ||
        this._hasMouseInteraction ||
        this._hasKeyboardInteraction ||
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      r.on(this._element, So, (t) => this._onInteraction(t, !0)),
        r.on(this._element, Co, (t) => this._onInteraction(t, !1)),
        r.on(this._element, vo, (t) => this._onInteraction(t, !0)),
        r.on(this._element, yo, (t) => this._onInteraction(t, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ft.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    pt(ft),
    S(ft),
    {
      Alert: et,
      Button: st,
      Carousel: O,
      Collapse: x,
      Dropdown: N,
      Modal: j,
      Offcanvas: M,
      Popover: St,
      ScrollSpy: lt,
      Tab: dt,
      Toast: ft,
      Tooltip: z,
    }
  );
});
