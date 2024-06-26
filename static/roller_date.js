/**
 * Rolldate 3.1.3
 * Copyright 2018-2020
 * weijhfly https://github.com/weijhfly/rolldate
 * Licensed under MIT
 * Released on: aug 4, 2018
 */

!function(t, i) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = t || self).Rolldate = i()
}(this, function() {
    "use strict";
    !function(t, i) {
        void 0 === i && (i = {});
        var e = i.insertAt;
        if (t && "undefined" != typeof document) {
            var o = document.head || document.getElementsByTagName("head")[0]
              , s = document.createElement("style");
            s.type = "text/css",
            "top" === e && o.firstChild ? o.insertBefore(s, o.firstChild) : o.appendChild(s),
            s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(document.createTextNode(t))
        }
    }(".rolldate-container{font-size:20px;color:#333;text-align:center}.rolldate-container ul{margin:0;padding:0}.rolldate-container li{list-style-type:none}.rolldate-container header{position:relative;line-height:60px;font-size:18px;border-bottom:1px solid #e0e0e0}.rolldate-container .rolldate-mask{position:fixed;width:100%;height:100%;top:0;left:0;z-index:999;background-color:rgba(37,38,45,.4)}.rolldate-container .rolldate-panel{position:fixed;bottom:0;left:0;width:100%;height:273px;z-index:1000;background:#fff;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate3d(0,273px,0);transform:translate3d(0,273px,0)}.rolldate-container .rolldate-btn{position:absolute;left:0;top:0;height:100%;padding:0 15px;color:#666;font-size:16px;cursor:pointer;-webkit-tap-highlight-color:transparent}.rolldate-container .rolldate-confirm{left:auto;right:0;color:#007bff}.rolldate-container .rolldate-content{position:relative;top:20px}.rolldate-container .rolldate-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.rolldate-container .rolldate-wrapper>div{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:173px;line-height:36px;overflow:hidden;-webkit-flex-basis:-8e;-ms-flex-preferred-size:-8e;flex-basis:-8e;width:1%}.rolldate-container .rolldate-wrapper ul{margin-top:68px}.rolldate-container .rolldate-wrapper li{height:36px}.rolldate-container .rolldate-dim{position:absolute;left:0;top:0;width:100%;height:68px;background:-o-linear-gradient(bottom,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));background:-webkit-gradient(linear, left bottom, left top, from(hsla(0, 0%, 100%, 0.4)), to(hsla(0, 0%, 100%, 0.8)));background:-o-linear-gradient(bottom, hsla(0, 0%, 100%, 0.4), hsla(0, 0%, 100%, 0.8));background:linear-gradient(0deg,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));pointer-events:none;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.rolldate-container .mask-top{border-bottom:1px solid #ebebeb}.rolldate-container .mask-bottom{top:auto;bottom:1px;border-top:1px solid #ebebeb}.rolldate-container .fadeIn{-webkit-transform:translateZ(0);transform:translateZ(0)}.rolldate-container .fadeOut{-webkit-transform:translate3d(0,273px,0);transform:translate3d(0,273px,0)}@media screen and (max-width:414px){.rolldate-container{font-size:18px}}@media screen and (max-width:320px){.rolldate-container{font-size:15px}}");
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    function S(t, i) {
        return "string" != typeof t && t.nodeType ? t : i ? document.querySelectorAll(t) : document.querySelector(t)
    }
    var t, Y = (function(t, i) {
        t.exports = function() {
            function s(t, i) {
                for (; i + 1 < t.length; i++)
                    t[i] = t[i + 1];
                t.pop()
            }
            var h = function(t, i) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return function(t, i) {
                        var e = []
                          , o = !0
                          , s = !1
                          , n = void 0;
                        try {
                            for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (e.push(r.value),
                            !i || e.length !== i); o = !0)
                                ;
                        } catch (t) {
                            s = !0,
                            n = t
                        } finally {
                            try {
                                !o && a.return && a.return()
                            } finally {
                                if (s)
                                    throw n
                            }
                        }
                        return e
                    }(t, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
              , e = "undefined" != typeof window
              , t = e && navigator.userAgent.toLowerCase()
              , i = t && /wechatdevtools/.test(t)
              , o = t && 0 < t.indexOf("android");
            function b() {
                return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date
            }
            function l(t) {
                for (var i = arguments.length, e = Array(1 < i ? i - 1 : 0), o = 1; o < i; o++)
                    e[o - 1] = arguments[o];
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    for (var r in n)
                        t[r] = n[r]
                }
                return t
            }
            function c(t) {
                return null == t
            }
            var n = e && document.createElement("div").style
              , r = function() {
                if (!e)
                    return !1;
                var t = {
                    webkit: "webkitTransform",
                    Moz: "MozTransform",
                    O: "OTransform",
                    ms: "msTransform",
                    standard: "transform"
                };
                for (var i in t)
                    if (void 0 !== n[t[i]])
                        return i;
                return !1
            }();
            function a(t) {
                return !1 !== r && ("standard" === r ? "transitionEnd" === t ? "transitionend" : t : r + t.charAt(0).toUpperCase() + t.substr(1))
            }
            function d(t, i, e, o) {
                t.addEventListener(i, e, {
                    passive: !1,
                    capture: !!o
                })
            }
            function p(t, i, e, o) {
                t.removeEventListener(i, e, {
                    passive: !1,
                    capture: !!o
                })
            }
            function u(t) {
                for (var i = 0, e = 0; t; )
                    i -= t.offsetLeft,
                    e -= t.offsetTop,
                    t = t.offsetParent;
                return {
                    left: i,
                    top: e
                }
            }
            r && "standard" !== r && r.toLowerCase();
            var m = a("transform")
              , f = a("transition")
              , v = e && a("perspective")in n
              , g = e && ("ontouchstart"in window || i)
              , w = !1 !== m
              , y = e && f in n
              , x = {
                transform: m,
                transition: f,
                transitionTimingFunction: a("transitionTimingFunction"),
                transitionDuration: a("transitionDuration"),
                transitionDelay: a("transitionDelay"),
                transformOrigin: a("transformOrigin"),
                transitionEnd: a("transitionEnd")
            }
              , T = {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2
            };
            function S(t) {
                if (t instanceof window.SVGElement) {
                    var i = t.getBoundingClientRect();
                    return {
                        top: i.top,
                        left: i.left,
                        width: i.width,
                        height: i.height
                    }
                }
                return {
                    top: t.offsetTop,
                    left: t.offsetLeft,
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }
            }
            function Y(t, i) {
                for (var e in i)
                    if (i[e].test(t[e]))
                        return !0;
                return !1
            }
            function D(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "click"
                  , e = void 0;
                "mouseup" === t.type || "mousecancel" === t.type ? e = t : "touchend" !== t.type && "touchcancel" !== t.type || (e = t.changedTouches[0]);
                var o = {};
                e && (o.screenX = e.screenX || 0,
                o.screenY = e.screenY || 0,
                o.clientX = e.clientX || 0,
                o.clientY = e.clientY || 0);
                var s = void 0
                  , n = !0
                  , r = !0;
                if ("undefined" != typeof MouseEvent)
                    try {
                        s = new MouseEvent(i,l({
                            bubbles: n,
                            cancelable: r
                        }, o))
                    } catch (t) {
                        a()
                    }
                else
                    a();
                function a() {
                    (s = document.createEvent("Event")).initEvent(i, n, r),
                    l(s, o)
                }
                s.forwardedTouchEvent = !0,
                s._constructed = !0,
                t.target.dispatchEvent(s)
            }
            var M = {
                startX: 0,
                startY: 0,
                scrollX: !1,
                scrollY: !0,
                freeScroll: !1,
                directionLockThreshold: 5,
                eventPassthrough: "",
                click: !1,
                tap: !1,
                bounce: !0,
                bounceTime: 800,
                momentum: !0,
                momentumLimitTime: 300,
                momentumLimitDistance: 15,
                swipeTime: 2500,
                swipeBounceTime: 500,
                deceleration: .0015,
                flickLimitTime: 200,
                flickLimitDistance: 100,
                resizePolling: 60,
                probeType: 0,
                preventDefault: !0,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
                },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0,
                bindToWrapper: !1,
                disableMouse: g,
                disableTouch: !g,
                observeDOM: !0,
                autoBlur: !0,
                wheel: !1,
                snap: !1,
                scrollbar: !1,
                pullDownRefresh: !1,
                pullUpLoad: !1,
                mouseWheel: !1,
                stopPropagation: !1,
                zoom: !1,
                infinity: !1,
                dblclick: !1
            }
              , X = {
                swipe: {
                    style: "cubic-bezier(0.23, 1, 0.32, 1)",
                    fn: function(t) {
                        return 1 + --t * t * t * t * t
                    }
                },
                swipeBounce: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(t) {
                        return t * (2 - t)
                    }
                },
                bounce: {
                    style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
                    fn: function(t) {
                        return 1 - --t * t * t * t
                    }
                }
            };
            function _(t, i, e, o, s, n, r) {
                var a = t - i
                  , l = Math.abs(a) / e
                  , h = r.deceleration
                  , c = r.itemHeight
                  , d = r.swipeBounceTime
                  , p = r.wheel
                  , u = r.swipeTime
                  , m = p ? 4 : 15
                  , f = t + l / h * (a < 0 ? -1 : 1);
                return p && c && (f = Math.round(f / c) * c),
                f < o ? (f = n ? Math.max(o - n / 4, o - n / m * l) : o,
                u = d) : s < f && (f = n ? Math.min(s + n / 4, s + n / m * l) : s,
                u = d),
                {
                    destination: Math.round(f),
                    duration: u
                }
            }
            function E() {}
            var k, L, O, P, H, I = e ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
                return window.setTimeout(t, (t.interval || 100 / 60) / 2)
            }
            : E, z = e ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(t) {
                window.clearTimeout(t)
            }
            : E;
            function W(t) {
                console.error("[BScroll warn]: " + t)
            }
            function C(t, i) {
                this.wrapper = "string" == typeof t ? document.querySelector(t) : t,
                this.wrapper || W("Can not resolve the wrapper DOM."),
                this.scroller = this.wrapper.children[0],
                this.scroller || W("The wrapper need at least one child element to be scroller."),
                this.scrollerStyle = this.scroller.style,
                this._init(i)
            }
            return (k = C).prototype._init = function(t) {
                this._handleOptions(t),
                this._events = {},
                this.x = 0,
                this.y = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.setScale(1),
                this._addDOMEvents(),
                this._initExtFeatures(),
                this._watchTransition(),
                this.options.observeDOM && this._initDOMObserver(),
                this.options.autoBlur && this._handleAutoBlur(),
                this.refresh(),
                this.options.snap || this.scrollTo(this.options.startX, this.options.startY),
                this.enable()
            }
            ,
            k.prototype.setScale = function(t) {
                this.lastScale = c(this.scale) ? t : this.scale,
                this.scale = t
            }
            ,
            k.prototype._handleOptions = function(t) {
                this.options = l({}, M, t),
                this.translateZ = this.options.HWCompositing && v ? " translateZ(0)" : "",
                this.options.useTransition = this.options.useTransition && y,
                this.options.useTransform = this.options.useTransform && w,
                this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
                this.options.scrollX = "horizontal" !== this.options.eventPassthrough && this.options.scrollX,
                this.options.scrollY = "vertical" !== this.options.eventPassthrough && this.options.scrollY,
                this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
                this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
                !0 === this.options.tap && (this.options.tap = "tap")
            }
            ,
            k.prototype._addDOMEvents = function() {
                var t = d;
                this._handleDOMEvents(t)
            }
            ,
            k.prototype._removeDOMEvents = function() {
                var t = p;
                this._handleDOMEvents(t)
            }
            ,
            k.prototype._handleDOMEvents = function(t) {
                var i = this.options.bindToWrapper ? this.wrapper : window;
                t(window, "orientationchange", this),
                t(window, "resize", this),
                this.options.click && t(this.wrapper, "click", this, !0),
                this.options.disableMouse || (t(this.wrapper, "mousedown", this),
                t(i, "mousemove", this),
                t(i, "mousecancel", this),
                t(i, "mouseup", this)),
                g && !this.options.disableTouch && (t(this.wrapper, "touchstart", this),
                t(i, "touchmove", this),
                t(i, "touchcancel", this),
                t(i, "touchend", this)),
                t(this.scroller, x.transitionEnd, this)
            }
            ,
            k.prototype._initExtFeatures = function() {
                this.options.snap && this._initSnap(),
                this.options.scrollbar && this._initScrollbar(),
                this.options.pullUpLoad && this._initPullUp(),
                this.options.pullDownRefresh && this._initPullDown(),
                this.options.wheel && this._initWheel(),
                this.options.mouseWheel && this._initMouseWheel(),
                this.options.zoom && this._initZoom(),
                this.options.infinity && this._initInfinite()
            }
            ,
            k.prototype._watchTransition = function() {
                if ("function" == typeof Object.defineProperty) {
                    var s = this
                      , n = !1
                      , t = this.options.useTransition ? "isInTransition" : "isAnimating";
                    Object.defineProperty(this, t, {
                        get: function() {
                            return n
                        },
                        set: function(t) {
                            n = t;
                            for (var i = s.scroller.children.length ? s.scroller.children : [s.scroller], e = n && !s.pulling ? "none" : "auto", o = 0; o < i.length; o++)
                                i[o].style.pointerEvents = e
                        }
                    })
                }
            }
            ,
            k.prototype._handleAutoBlur = function() {
                this.on("scrollStart", function() {
                    var t = document.activeElement;
                    !t || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || t.blur()
                })
            }
            ,
            k.prototype._initDOMObserver = function() {
                var n = this;
                if ("undefined" != typeof MutationObserver) {
                    var r = void 0
                      , t = new MutationObserver(function(t) {
                        if (!n._shouldNotRefresh()) {
                            for (var i = !1, e = !1, o = 0; o < t.length; o++) {
                                var s = t[o];
                                if ("attributes" !== s.type) {
                                    i = !0;
                                    break
                                }
                                if (s.target !== n.scroller) {
                                    e = !0;
                                    break
                                }
                            }
                            i ? n.refresh() : e && (clearTimeout(r),
                            r = setTimeout(function() {
                                n._shouldNotRefresh() || n.refresh()
                            }, 60))
                        }
                    }
                    );
                    t.observe(this.scroller, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    }),
                    this.on("destroy", function() {
                        t.disconnect()
                    })
                } else
                    this._checkDOMUpdate()
            }
            ,
            k.prototype._shouldNotRefresh = function() {
                var t = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;
                return this.isInTransition || this.stopFromTransition || t
            }
            ,
            k.prototype._checkDOMUpdate = function() {
                var o = S(this.scroller)
                  , s = o.width
                  , n = o.height;
                (function e() {
                    var t = this;
                    setTimeout(function() {
                        (function() {
                            if (!this.destroyed) {
                                var t = (o = S(this.scroller)).width
                                  , i = o.height;
                                s === t && n === i || this.refresh(),
                                s = t,
                                n = i,
                                e.call(this)
                            }
                        }
                        ).call(t)
                    }, 1e3)
                }
                ).call(this)
            }
            ,
            k.prototype.handleEvent = function(t) {
                switch (t.type) {
                case "touchstart":
                case "mousedown":
                    this._start(t),
                    this.options.zoom && t.touches && 1 < t.touches.length && this._zoomStart(t);
                    break;
                case "touchmove":
                case "mousemove":
                    this.options.zoom && t.touches && 1 < t.touches.length ? this._zoom(t) : this._move(t);
                    break;
                case "touchend":
                case "mouseup":
                case "touchcancel":
                case "mousecancel":
                    this.scaled ? this._zoomEnd(t) : this._end(t);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(t);
                    break;
                case "click":
                    this.enabled && !t._constructed && (Y(t.target, this.options.preventDefaultException) || (t.preventDefault(),
                    t.stopPropagation()));
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._onMouseWheel(t)
                }
            }
            ,
            k.prototype.refresh = function() {
                var t = "static" === window.getComputedStyle(this.wrapper, null).position
                  , i = S(this.wrapper);
                this.wrapperWidth = i.width,
                this.wrapperHeight = i.height;
                var e = S(this.scroller);
                this.scrollerWidth = Math.round(e.width * this.scale),
                this.scrollerHeight = Math.round(e.height * this.scale),
                this.relativeX = e.left,
                this.relativeY = e.top,
                t && (this.relativeX -= i.left,
                this.relativeY -= i.top),
                this.minScrollX = 0,
                this.minScrollY = 0;
                var o = this.options.wheel;
                o ? (this.items = this.scroller.children,
                this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0,
                void 0 === this.selectedIndex && (this.selectedIndex = o.selectedIndex || 0),
                this.options.startY = -this.selectedIndex * this.itemHeight,
                this.maxScrollX = 0,
                this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
                this.options.infinity || (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
                this.maxScrollX < 0 ? (this.maxScrollX -= this.relativeX,
                this.minScrollX = -this.relativeX) : 1 < this.scale && (this.maxScrollX = this.maxScrollX / 2 - this.relativeX,
                this.minScrollX = this.maxScrollX),
                this.maxScrollY < 0 ? (this.maxScrollY -= this.relativeY,
                this.minScrollY = -this.relativeY) : 1 < this.scale && (this.maxScrollY = this.maxScrollY / 2 - this.relativeY,
                this.minScrollY = this.maxScrollY)),
                this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX,
                this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY,
                this.hasHorizontalScroll || (this.maxScrollX = this.minScrollX,
                this.scrollerWidth = this.wrapperWidth),
                this.hasVerticalScroll || (this.maxScrollY = this.minScrollY,
                this.scrollerHeight = this.wrapperHeight),
                this.endTime = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.wrapperOffset = u(this.wrapper),
                this.trigger("refresh"),
                this.scaled || this.resetPosition()
            }
            ,
            k.prototype.enable = function() {
                this.enabled = !0
            }
            ,
            k.prototype.disable = function() {
                this.enabled = !1
            }
            ,
            (L = C).prototype._start = function(t) {
                var i = T[t.type];
                if ((1 === i || 0 === t.button) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== i)) {
                    this.initiated = i,
                    this.options.preventDefault && !Y(t.target, this.options.preventDefaultException) && t.preventDefault(),
                    this.options.stopPropagation && t.stopPropagation(),
                    this.moved = !1,
                    this.distX = 0,
                    this.distY = 0,
                    this.directionX = 0,
                    this.directionY = 0,
                    this.movingDirectionX = 0,
                    this.movingDirectionY = 0,
                    this.directionLocked = 0,
                    this._transitionTime(),
                    this.startTime = b(),
                    this.options.wheel && (this.target = t.target),
                    this.stop();
                    var e = t.touches ? t.touches[0] : t;
                    this.startX = this.x,
                    this.startY = this.y,
                    this.absStartX = this.x,
                    this.absStartY = this.y,
                    this.pointX = e.pageX,
                    this.pointY = e.pageY,
                    this.trigger("beforeScrollStart")
                }
            }
            ,
            L.prototype._move = function(t) {
                if (this.enabled && !this.destroyed && T[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault(),
                    this.options.stopPropagation && t.stopPropagation();
                    var i = t.touches ? t.touches[0] : t
                      , e = i.pageX - this.pointX
                      , o = i.pageY - this.pointY;
                    this.pointX = i.pageX,
                    this.pointY = i.pageY,
                    this.distX += e,
                    this.distY += o;
                    var s = Math.abs(this.distX)
                      , n = Math.abs(this.distY)
                      , r = b();
                    if (!(r - this.endTime > this.options.momentumLimitTime && n < this.options.momentumLimitDistance && s < this.options.momentumLimitDistance)) {
                        if (this.directionLocked || this.options.freeScroll || (s > n + this.options.directionLockThreshold ? this.directionLocked = "h" : n >= s + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"),
                        "h" === this.directionLocked) {
                            if ("vertical" === this.options.eventPassthrough)
                                t.preventDefault();
                            else if ("horizontal" === this.options.eventPassthrough)
                                return void (this.initiated = !1);
                            o = 0
                        } else if ("v" === this.directionLocked) {
                            if ("horizontal" === this.options.eventPassthrough)
                                t.preventDefault();
                            else if ("vertical" === this.options.eventPassthrough)
                                return void (this.initiated = !1);
                            e = 0
                        }
                        e = this.hasHorizontalScroll ? e : 0,
                        o = this.hasVerticalScroll ? o : 0,
                        this.movingDirectionX = 0 < e ? -1 : e < 0 ? 1 : 0,
                        this.movingDirectionY = 0 < o ? -1 : o < 0 ? 1 : 0;
                        var a = this.x + e
                          , l = this.y + o
                          , h = !1
                          , c = !1
                          , d = !1
                          , p = !1
                          , u = this.options.bounce;
                        !1 !== u && (h = void 0 === u.top || u.top,
                        c = void 0 === u.bottom || u.bottom,
                        d = void 0 === u.left || u.left,
                        p = void 0 === u.right || u.right),
                        (a > this.minScrollX || a < this.maxScrollX) && (a = a > this.minScrollX && d || a < this.maxScrollX && p ? this.x + e / 3 : a > this.minScrollX ? this.minScrollX : this.maxScrollX),
                        (l > this.minScrollY || l < this.maxScrollY) && (l = l > this.minScrollY && h || l < this.maxScrollY && c ? this.y + o / 3 : l > this.minScrollY ? this.minScrollY : this.maxScrollY),
                        this.moved || (this.moved = !0,
                        this.trigger("scrollStart")),
                        this._translate(a, l),
                        r - this.startTime > this.options.momentumLimitTime && (this.startTime = r,
                        this.startX = this.x,
                        this.startY = this.y,
                        1 === this.options.probeType && this.trigger("scroll", {
                            x: this.x,
                            y: this.y
                        })),
                        1 < this.options.probeType && this.trigger("scroll", {
                            x: this.x,
                            y: this.y
                        });
                        var m = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft
                          , f = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                          , v = this.pointX - m
                          , g = this.pointY - f;
                        (v > document.documentElement.clientWidth - this.options.momentumLimitDistance || v < this.options.momentumLimitDistance || g < this.options.momentumLimitDistance || g > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(t)
                    }
                }
            }
            ,
            L.prototype._end = function(t) {
                if (this.enabled && !this.destroyed && T[t.type] === this.initiated) {
                    this.initiated = !1,
                    this.options.preventDefault && !Y(t.target, this.options.preventDefaultException) && t.preventDefault(),
                    this.options.stopPropagation && t.stopPropagation(),
                    this.trigger("touchEnd", {
                        x: this.x,
                        y: this.y
                    }),
                    this.isInTransition = !1;
                    var i = Math.round(this.x)
                      , e = Math.round(this.y)
                      , o = i - this.absStartX
                      , s = e - this.absStartY;
                    if (this.directionX = 0 < o ? -1 : o < 0 ? 1 : 0,
                    this.directionY = 0 < s ? -1 : s < 0 ? 1 : 0,
                    !this.options.pullDownRefresh || !this._checkPullDown())
                        if (this._checkClick(t))
                            this.trigger("scrollCancel");
                        else if (!this.resetPosition(this.options.bounceTime, X.bounce)) {
                            this._translate(i, e),
                            this.endTime = b();
                            var n = this.endTime - this.startTime
                              , r = Math.abs(i - this.startX)
                              , a = Math.abs(e - this.startY);
                            if (this._events.flick && n < this.options.flickLimitTime && r < this.options.flickLimitDistance && a < this.options.flickLimitDistance)
                                this.trigger("flick");
                            else {
                                var l = 0;
                                if (this.options.momentum && n < this.options.momentumLimitTime && (a > this.options.momentumLimitDistance || r > this.options.momentumLimitDistance)) {
                                    var h = !1
                                      , c = !1
                                      , d = !1
                                      , p = !1
                                      , u = this.options.bounce;
                                    !1 !== u && (h = void 0 === u.top || u.top,
                                    c = void 0 === u.bottom || u.bottom,
                                    d = void 0 === u.left || u.left,
                                    p = void 0 === u.right || u.right);
                                    var m = -1 === this.directionX && d || 1 === this.directionX && p ? this.wrapperWidth : 0
                                      , f = -1 === this.directionY && h || 1 === this.directionY && c ? this.wrapperHeight : 0
                                      , v = this.hasHorizontalScroll ? _(this.x, this.startX, n, this.maxScrollX, this.minScrollX, m, this.options) : {
                                        destination: i,
                                        duration: 0
                                    }
                                      , g = this.hasVerticalScroll ? _(this.y, this.startY, n, this.maxScrollY, this.minScrollY, f, this.options) : {
                                        destination: e,
                                        duration: 0
                                    };
                                    i = v.destination,
                                    e = g.destination,
                                    l = Math.max(v.duration, g.duration),
                                    this.isInTransition = !0
                                } else
                                    this.options.wheel && (e = Math.round(e / this.itemHeight) * this.itemHeight,
                                    l = this.options.wheel.adjustTime || 400);
                                var w = X.swipe;
                                if (this.options.snap) {
                                    var y = this._nearestSnap(i, e);
                                    this.currentPage = y,
                                    l = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(i - y.x), 1e3), Math.min(Math.abs(e - y.y), 1e3)), 300),
                                    i = y.x,
                                    e = y.y,
                                    this.directionX = 0,
                                    this.directionY = 0,
                                    w = this.options.snap.easing || X.bounce
                                }
                                if (i !== this.x || e !== this.y)
                                    return (i > this.minScrollX || i < this.maxScrollX || e > this.minScrollY || e < this.maxScrollY) && (w = X.swipeBounce),
                                    void this.scrollTo(i, e, l, w);
                                this.options.wheel && (this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight))),
                                this.trigger("scrollEnd", {
                                    x: this.x,
                                    y: this.y
                                })
                            }
                        }
                }
            }
            ,
            L.prototype._checkClick = function(t) {
                var i, e, o, s, n, r = this.stopFromTransition && !this.pulling;
                if (this.stopFromTransition = !1,
                this.moved)
                    return !1;
                if (this.options.wheel) {
                    if (this.target && this.target.classList.contains(this.options.wheel.wheelWrapperClass)) {
                        var a = Math.abs(Math.round(this.y / this.itemHeight))
                          , l = Math.round((this.pointY + (s = this.wrapper,
                        {
                            left: -((n = s.getBoundingClientRect()).left + window.pageXOffset),
                            top: -(n.top + window.pageYOffset)
                        }).top - this.wrapperHeight / 2) / this.itemHeight);
                        this.target = this.items[a + l]
                    }
                    return this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, !0, !0, X.swipe),
                    !0
                }
                if (r)
                    return !1;
                var h = this.options.dblclick
                  , c = !1;
                if (h && this.lastClickTime) {
                    var d = h.delay
                      , p = void 0 === d ? 300 : d;
                    b() - this.lastClickTime < p && (c = !0,
                    D(t, "dblclick"))
                }
                return this.options.tap && (i = t,
                e = this.options.tap,
                (o = document.createEvent("Event")).initEvent(e, !0, !0),
                o.pageX = i.pageX,
                o.pageY = i.pageY,
                i.target.dispatchEvent(o)),
                this.options.click && !Y(t.target, this.options.preventDefaultException) && D(t),
                this.lastClickTime = c ? null : b(),
                !0
            }
            ,
            L.prototype._resize = function() {
                var t = this;
                this.enabled && (o && (this.wrapper.scrollTop = 0),
                clearTimeout(this.resizeTimeout),
                this.resizeTimeout = setTimeout(function() {
                    t.refresh()
                }, this.options.resizePolling))
            }
            ,
            L.prototype._startProbe = function() {
                z(this.probeTimer),
                this.probeTimer = I(function t() {
                    var i = e.getComputedPosition();
                    e.trigger("scroll", i),
                    e.isInTransition ? e.probeTimer = I(t) : e.trigger("scrollEnd", i)
                });
                var e = this
            }
            ,
            L.prototype._transitionTime = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (this.scrollerStyle[x.transitionDuration] = t + "ms",
                this.options.wheel)
                    for (var i = 0; i < this.items.length; i++)
                        this.items[i].style[x.transitionDuration] = t + "ms";
                if (this.indicators)
                    for (var e = 0; e < this.indicators.length; e++)
                        this.indicators[e].transitionTime(t)
            }
            ,
            L.prototype._transitionTimingFunction = function(t) {
                if (this.scrollerStyle[x.transitionTimingFunction] = t,
                this.options.wheel)
                    for (var i = 0; i < this.items.length; i++)
                        this.items[i].style[x.transitionTimingFunction] = t;
                if (this.indicators)
                    for (var e = 0; e < this.indicators.length; e++)
                        this.indicators[e].transitionTimingFunction(t)
            }
            ,
            L.prototype._transitionEnd = function(t) {
                t.target === this.scroller && this.isInTransition && (this._transitionTime(),
                this.pulling && 1 !== this.movingDirectionY || this.resetPosition(this.options.bounceTime, X.bounce) || (this.isInTransition = !1,
                3 !== this.options.probeType && this.trigger("scrollEnd", {
                    x: this.x,
                    y: this.y
                })))
            }
            ,
            L.prototype._translate = function(t, i, e) {
                if (function(t) {
                    if (!t)
                        throw new Error("[BScroll] Translate x or y is null or undefined.")
                }(!c(t) && !c(i)),
                c(e) && (e = this.scale),
                this.options.useTransform ? this.scrollerStyle[x.transform] = "translate(" + t + "px," + i + "px) scale(" + e + ")" + this.translateZ : (t = Math.round(t),
                i = Math.round(i),
                this.scrollerStyle.left = t + "px",
                this.scrollerStyle.top = i + "px"),
                this.options.wheel)
                    for (var o = this.options.wheel.rotate, s = void 0 === o ? 25 : o, n = 0; n < this.items.length; n++) {
                        var r = s * (i / this.itemHeight + n);
                        this.items[n].style[x.transform] = "rotateX(" + r + "deg)"
                    }
                if (this.x = t,
                this.y = i,
                this.setScale(e),
                this.indicators)
                    for (var a = 0; a < this.indicators.length; a++)
                        this.indicators[a].updatePosition()
            }
            ,
            L.prototype._animate = function(r, a, l, h) {
                var c = this
                  , d = this.x
                  , p = this.y
                  , u = this.lastScale
                  , m = this.scale
                  , f = b()
                  , v = f + l;
                this.isAnimating = !0,
                z(this.animateTimer),
                function t() {
                    var i = b();
                    if (v <= i)
                        return c.isAnimating = !1,
                        c._translate(r, a, m),
                        c.trigger("scroll", {
                            x: c.x,
                            y: c.y
                        }),
                        void (c.pulling || c.resetPosition(c.options.bounceTime) || c.trigger("scrollEnd", {
                            x: c.x,
                            y: c.y
                        }));
                    var e = h(i = (i - f) / l)
                      , o = (r - d) * e + d
                      , s = (a - p) * e + p
                      , n = (m - u) * e + u;
                    c._translate(o, s, n),
                    c.isAnimating && (c.animateTimer = I(t)),
                    3 === c.options.probeType && c.trigger("scroll", {
                        x: c.x,
                        y: c.y
                    })
                }()
            }
            ,
            L.prototype.scrollBy = function(t, i) {
                var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0
                  , o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : X.bounce;
                t = this.x + t,
                i = this.y + i,
                this.scrollTo(t, i, e, o)
            }
            ,
            L.prototype.scrollTo = function(t, i) {
                var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0
                  , o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : X.bounce;
                this.x === t && this.y === i || (this.isInTransition = this.options.useTransition && 0 < e && (t !== this.x || i !== this.y),
                !e || this.options.useTransition ? (this._transitionTimingFunction(o.style),
                this._transitionTime(e),
                this._translate(t, i),
                e && 3 === this.options.probeType && this._startProbe(),
                e || (this.trigger("scroll", {
                    x: t,
                    y: i
                }),
                this._reflow = document.body.offsetHeight,
                this.resetPosition(this.options.bounceTime, X.bounce) || this.trigger("scrollEnd", {
                    x: t,
                    y: i
                })),
                this.options.wheel && (i > this.minScrollY ? this.selectedIndex = 0 : i < this.maxScrollY ? this.selectedIndex = this.items.length - 1 : this.selectedIndex = Math.round(Math.abs(i / this.itemHeight)))) : this._animate(t, i, e, o.fn))
            }
            ,
            L.prototype.scrollToElement = function(t, i, e, o, s) {
                if (t && (t = t.nodeType ? t : this.scroller.querySelector(t),
                !this.options.wheel || t.classList.contains(this.options.wheel.wheelItemClass))) {
                    var n = u(t);
                    n.left -= this.wrapperOffset.left,
                    n.top -= this.wrapperOffset.top,
                    !0 === e && (e = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                    !0 === o && (o = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                    n.left -= e || 0,
                    n.top -= o || 0,
                    n.left = n.left > this.minScrollX ? this.minScrollX : n.left < this.maxScrollX ? this.maxScrollX : n.left,
                    n.top = n.top > this.minScrollY ? this.minScrollY : n.top < this.maxScrollY ? this.maxScrollY : n.top,
                    this.options.wheel && (n.top = Math.round(n.top / this.itemHeight) * this.itemHeight),
                    this.scrollTo(n.left, n.top, i, s)
                }
            }
            ,
            L.prototype.resetPosition = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
                  , i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : X.bounce
                  , e = this.x
                  , o = Math.round(e);
                !this.hasHorizontalScroll || o > this.minScrollX ? e = this.minScrollX : o < this.maxScrollX && (e = this.maxScrollX);
                var s = this.y
                  , n = Math.round(s);
                return !this.hasVerticalScroll || n > this.minScrollY ? s = this.minScrollY : n < this.maxScrollY && (s = this.maxScrollY),
                (e !== this.x || s !== this.y) && (this.scrollTo(e, s, t, i),
                !0)
            }
            ,
            L.prototype.getComputedPosition = function() {
                var t = window.getComputedStyle(this.scroller, null)
                  , i = void 0
                  , e = void 0;
                return e = this.options.useTransform ? (i = +((t = t[x.transform].split(")")[0].split(", "))[12] || t[4]),
                +(t[13] || t[5])) : (i = +t.left.replace(/[^-\d.]/g, ""),
                +t.top.replace(/[^-\d.]/g, "")),
                {
                    x: i,
                    y: e
                }
            }
            ,
            L.prototype.stop = function() {
                if (this.options.useTransition && this.isInTransition) {
                    this.isInTransition = !1,
                    z(this.probeTimer);
                    var t = this.getComputedPosition();
                    this._translate(t.x, t.y),
                    this.options.wheel ? this.target = this.items[Math.round(-t.y / this.itemHeight)] : this.trigger("scrollEnd", {
                        x: this.x,
                        y: this.y
                    }),
                    this.stopFromTransition = !0
                } else
                    !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
                    z(this.animateTimer),
                    this.trigger("scrollEnd", {
                        x: this.x,
                        y: this.y
                    }),
                    this.stopFromTransition = !0)
            }
            ,
            L.prototype.destroy = function() {
                this.destroyed = !0,
                this.trigger("destroy"),
                this.options.useTransition ? z(this.probeTimer) : z(this.animateTimer),
                this._removeDOMEvents(),
                this._events = {}
            }
            ,
            (O = C).prototype.on = function(t, i) {
                var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this;
                this._events[t] || (this._events[t] = []),
                this._events[t].push([i, e])
            }
            ,
            O.prototype.once = function(t, i) {
                var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this;
                function o() {
                    this.off(t, o),
                    i.apply(e, arguments)
                }
                o.fn = i,
                this.on(t, o)
            }
            ,
            O.prototype.off = function(t, i) {
                var e = this._events[t];
                if (e)
                    for (var o = e.length; o--; )
                        (e[o][0] === i || e[o][0] && e[o][0].fn === i) && s(e, o)
            }
            ,
            O.prototype.trigger = function(t) {
                var i = this._events[t];
                if (i)
                    for (var e = i.length, o = [].concat(function(t) {
                        if (Array.isArray(t)) {
                            for (var i = 0, e = Array(t.length); i < t.length; i++)
                                e[i] = t[i];
                            return e
                        }
                        return Array.from(t)
                    }(i)), s = 0; s < e; s++) {
                        var n = o[s]
                          , r = h(n, 2)
                          , a = r[0]
                          , l = r[1];
                        a && a.apply(l, [].slice.call(arguments, 1))
                    }
            }
            ,
            (P = C).prototype.wheelTo = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (this.options.wheel) {
                    var i = -t * this.itemHeight;
                    this.scrollTo(0, i)
                }
            }
            ,
            P.prototype.getSelectedIndex = function() {
                return this.options.wheel && this.selectedIndex
            }
            ,
            P.prototype._initWheel = function() {
                var t = this.options.wheel;
                t.wheelWrapperClass || (t.wheelWrapperClass = "wheel-scroll"),
                t.wheelItemClass || (t.wheelItemClass = "wheel-item"),
                void 0 === t.selectedIndex && (t.selectedIndex = 0,
                W("wheel option selectedIndex is required!"))
            }
            ,
            (H = C).prototype._initMouseWheel = function() {
                var t = this;
                this._handleMouseWheelEvent(d),
                this.on("destroy", function() {
                    clearTimeout(t.mouseWheelTimer),
                    clearTimeout(t.mouseWheelEndTimer),
                    t._handleMouseWheelEvent(p)
                }),
                this.firstWheelOpreation = !0
            }
            ,
            H.prototype._handleMouseWheelEvent = function(t) {
                t(this.wrapper, "wheel", this),
                t(this.wrapper, "mousewheel", this),
                t(this.wrapper, "DOMMouseScroll", this)
            }
            ,
            H.prototype._onMouseWheel = function(t) {
                var i = this;
                if (this.enabled) {
                    t.preventDefault(),
                    this.options.stopPropagation && t.stopPropagation(),
                    this.firstWheelOpreation && this.trigger("scrollStart"),
                    this.firstWheelOpreation = !1;
                    var e = this.options.mouseWheel
                      , o = e.speed
                      , s = void 0 === o ? 20 : o
                      , n = e.invert
                      , r = void 0 !== n && n
                      , a = e.easeTime
                      , l = void 0 === a ? 300 : a;
                    clearTimeout(this.mouseWheelTimer),
                    this.mouseWheelTimer = setTimeout(function() {
                        i.options.snap || l || i.trigger("scrollEnd", {
                            x: i.x,
                            y: i.y
                        }),
                        i.firstWheelOpreation = !0
                    }, 400);
                    var h = void 0
                      , c = void 0;
                    switch (!0) {
                    case "deltaX"in t:
                        c = 1 === t.deltaMode ? (h = -t.deltaX * s,
                        -t.deltaY * s) : (h = -t.deltaX,
                        -t.deltaY);
                        break;
                    case "wheelDeltaX"in t:
                        h = t.wheelDeltaX / 120 * s,
                        c = t.wheelDeltaY / 120 * s;
                        break;
                    case "wheelDelta"in t:
                        h = c = t.wheelDelta / 120 * s;
                        break;
                    case "detail"in t:
                        h = c = -t.detail / 3 * s;
                        break;
                    default:
                        return
                    }
                    var d = r ? -1 : 1;
                    h *= d,
                    c *= d,
                    this.hasVerticalScroll || (h = c,
                    c = 0);
                    var p = void 0
                      , u = void 0;
                    if (this.options.snap)
                        return p = this.currentPage.pageX,
                        u = this.currentPage.pageY,
                        0 < h ? p-- : h < 0 && p++,
                        0 < c ? u-- : c < 0 && u++,
                        void this._goToPage(p, u);
                    p = this.x + Math.round(this.hasHorizontalScroll ? h : 0),
                    u = this.y + Math.round(this.hasVerticalScroll ? c : 0),
                    this.movingDirectionX = this.directionX = 0 < h ? -1 : h < 0 ? 1 : 0,
                    this.movingDirectionY = this.directionY = 0 < c ? -1 : c < 0 ? 1 : 0,
                    p > this.minScrollX ? p = this.minScrollX : p < this.maxScrollX && (p = this.maxScrollX),
                    u > this.minScrollY ? u = this.minScrollY : u < this.maxScrollY && (u = this.maxScrollY);
                    var m = this.y === u;
                    this.scrollTo(p, u, l, X.swipe),
                    this.trigger("scroll", {
                        x: this.x,
                        y: this.y
                    }),
                    clearTimeout(this.mouseWheelEndTimer),
                    m && (this.mouseWheelEndTimer = setTimeout(function() {
                        i.trigger("scrollEnd", {
                            x: i.x,
                            y: i.y
                        })
                    }, l))
                }
            }
            ,
            C.Version = "1.14.1",
            C
        }()
    }(t = {
        exports: {}
    }, t.exports),
    t.exports);
    function i() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
          , i = this
          , e = void 0;
        if (i.extend(t),
        t.el) {
            if (!(e = S(t.el)) || e.bindRolldate)
                return;
            e.bindRolldate = 1,
            i.tap(e, function() {
                i.show()
            })
        }
        if (t.value) {
            t.el && ("input" == e.nodeName.toLowerCase() ? e.value = t.value : e.innerText = t.value);
            var o = t.value.replace(/-/g, "/").replace(/[^\d/:\s]/g, "")
              , s = new Date(o);
            s && "Invalid Date" != s ? t.el ? e.bindDate = s : i.bindDate = s : console.error("Invalid Date：" + o)
        }
    }
    return i.prototype = {
        constructor: i,
        baseData: function() {
            return {
                domId: {
                    YYYY: "rolldate-year",
                    MM: "rolldate-month",
                    DD: "rolldate-day",
                    hh: "rolldate-hour",
                    mm: "rolldate-min",
                    ss: "rolldate-sec"
                },
                opts: {
                    el: "",
                    format: "YYYY-MM-DD",
                    beginYear: 2e4,
                    endYear: 2025,
                    init: null,
                    moveEnd: null,
                    confirm: null,
                    cancel: null,
                    minStep: 1,
                    trigger: "tap",
                    lang: {
                        title: "Выбрать",
                        cancel: "Отменить",
                        confirm: "Применить",
                        year: "",
                        month: "",
                        day: "",
                        hour: "",
                        min: "",
                    }
                }
            }
        },
        extend: function(t) {
            var i = this.baseData().opts;
            for (var e in i)
                if (i[e] && "[object Object]" == Object.prototype.toString.call(i[e]))
                    for (var o in t[e])
                        i[e][o] = null == t[e][o] ? i[e][o] : t[e][o];
                else
                    i[e] = t[e] || i[e];
            this.config = i
        },
        createUI: function() {
            for (var n = this, t = n.baseData(), r = n.config, a = t.domId, l = r.format.split(/-|\/|\s|:/g), i = l.length, e = "", h = r.el ? S(r.el).bindDate || new Date : n.bindDate || new Date, c = r.lang, o = 0; o < i; o++) {
                var s = l[o]
                  , d = 0;
                if (e += '<div id="' + a[s] + '"><ul class="wheel-scroll">',
                "YYYY" == s)
                    for (var p = r.beginYear; p <= r.endYear; p++)
                        e += '<li class="wheel-item ' + (p == h.getFullYear() ? "active" : "") + '" data-index="' + d + '">' + p + c.year + "</li>",
                        d++;
                else if ("MM" == s)
                    for (var u = 1; u <= 12; u++)
                        e += '<li class="wheel-item ' + (u == h.getMonth() + 1 ? "active" : "") + '" data-index="' + d + '">' + (u < 10 ? "0" + u : u) + c.month + "</li>",
                        d++;
                else if ("DD" == s)
                    for (var m = n.getMonthlyDay(h.getFullYear(), h.getMonth() + 1), f = 1; f <= m; f++)
                        e += '<li class="wheel-item ' + (f == h.getDate() ? "active" : "") + '" data-index="' + d + '">' + (f < 10 ? "0" + f : f) + c.day + "</li>",
                        d++;
                else if ("hh" == s)
                    for (var v = 0; v <= 23; v++)
                        e += '<li class="wheel-item ' + (v == h.getHours() ? "active" : "") + '" data-index="' + d + '">' + (v < 10 ? "0" + v : v) + c.hour + "</li>",
                        d++;
                else if ("mm" == s)
                    for (var g = 0; g <= 59; g += r.minStep)
                        e += '<li class="wheel-item ' + (g == h.getMinutes() ? "active" : "") + '" data-index="' + d + '">' + (g < 10 ? "0" + g : g) + c.min + "</li>",
                        d++;
                else if ("ss" == s)
                    for (var w = 0; w <= 59; w++)
                        e += '<li class="wheel-item ' + (w == h.getSeconds() ? "active" : "") + '" data-index="' + d + '">' + (w < 10 ? "0" + w : w) + c.sec + "</li>",
                        d++;
                e += "</ul></div>"
            }
            var y = '<div class="rolldate-mask"></div>\n            <div class="rolldate-panel">\n                <header>\n                    <span class="rolldate-btn rolldate-cancel">' + c.cancel + "</span>\n                    " + c.title + '\n                    <span class="rolldate-btn rolldate-confirm">' + c.confirm + '</span>\n                </header>\n                <section class="rolldate-content">\n                    <div class="rolldate-dim mask-top"></div>\n                    <div class="rolldate-dim mask-bottom"></div>\n                    <div class="rolldate-wrapper">\n                        ' + e + "\n                    </div>\n                </section>\n            </div>"
              , b = document.createElement("div");
            b.className = "rolldate-container",
            b.innerHTML = y,
            document.body.appendChild(b),
            n.scroll = {};
            for (var x = function(t) {
                var i = a[l[t]];
                n.scroll[l[t]] = new Y("#" + i,{
                    wheel: {
                        selectedIndex: 0
                    }
                });
                var o = n.scroll[l[t]]
                  , e = S("#" + i + " .active")
                  , s = e ? e.getAttribute("data-index") : Math.round(h.getMinutes() / r.minStep);
                o.wheelTo(s),
                o.on("scrollEnd", function() {
                    if (r.moveEnd && r.moveEnd.call(n, o),
                    -1 != [a.YYYY, a.MM].indexOf(o.wrapper.id) && n.scroll.YYYY && n.scroll.MM && n.scroll.DD) {
                        var t = n.getMonthlyDay(n.getSelected(n.scroll.YYYY), n.getSelected(n.scroll.MM))
                          , i = "";
                        if (t != S("#" + a.DD + " li", 1).length) {
                            for (var e = 1; e <= t; e++)
                                i += '<li class="wheel-item">' + (e < 10 ? "0" + e : e) + c.day + "</li>";
                            S("#" + a.DD + " ul").innerHTML = i,
                            n.scroll.DD.refresh()
                        }
                    }
                })
            }, T = 0; T < i; T++)
                x(T);
            S(".rolldate-panel").className = "rolldate-panel fadeIn"
        },
        tap: function(t, e) {
            if ("ontouchstart"in window && "tap" == this.config.trigger) {
                var o = {}
                  , i = function(t) {
                    var i = t.touches[0];
                    o.startX = i.pageX,
                    o.startY = i.pageY,
                    o.sTime = +new Date
                }
                  , s = function(t) {
                    var i = t.changedTouches[0];
                    o.endX = i.pageX,
                    o.endY = i.pageY,
                    +new Date - o.sTime < 300 && Math.abs(o.endX - o.startX) + Math.abs(o.endY - o.startY) < 20 && (t.preventDefault(),
                    e.call(this, t)),
                    o = {}
                };
                "function" == typeof e ? (t.addEventListener("touchstart", i),
                t.addEventListener("touchend", s)) : (t.removeEventListener("touchstart", i),
                t.removeEventListener("touchend", s))
            } else {
                var n = function(t) {
                    e.call(this, t)
                };
                "function" == typeof e ? t.addEventListener("click", n) : t.removeEventListener("click", n)
            }
        },
        show: function() {
            var t = this.config
              , i = void 0;
            if (t.el) {
                if (!(i = S(t.el)).bindRolldate)
                    return;
                "input" == i.nodeName.toLowerCase() && i.blur()
            }
            S(".rolldate-container") || t.init && !1 === t.init.call(this) || (this.createUI(),
            this.event())
        },
        hide: function(t) {
            var i = S(".rolldate-panel.fadeIn");
            i && (i.className = "rolldate-panel fadeOut",
            this.destroy(t))
        },
        event: function() {
            var a = this
              , t = S(".rolldate-mask")
              , i = S(".rolldate-cancel")
              , e = S(".rolldate-confirm");
            a.tap(t, function() {
                a.hide(1)
            }),
            a.tap(i, function() {
                a.hide(1)
            }),
            a.tap(e, function() {
                var t = a.config
                  , i = void 0
                  , e = t.format
                  , o = new Date;
                for (var s in a.scroll) {
                    var n = a.getSelected(a.scroll[s]);
                    e = e.replace(s, n),
                    "YYYY" == s ? o.setFullYear(n) : "MM" == s ? o.setMonth(n - 1) : "DD" == s ? o.setDate(n) : "hh" == s ? o.setHours(n) : "mm" == s ? o.setMinutes(n) : "ss" == s && o.setSeconds(n)
                }
                if (t.confirm) {
                    var r = t.confirm.call(a, e);
                    if (!1 === r)
                        return !1;
                    r && (e = r)
                }
                t.el ? ("input" == (i = S(t.el)).nodeName.toLowerCase() ? i.value = e : i.innerText = e,
                i.bindDate = o) : a.bindDate = o,
                a.hide()
            })
        },
        getMonthlyDay: function(t, i) {
            var e = void 0;
            return 1 == i || 3 == i || 5 == i || 7 == i || 8 == i || 10 == i || 12 == i ? e = 31 : 4 == i || 6 == i || 11 == i || 9 == i ? e = 30 : 2 == i && (e = t % 4 != 0 || t % 100 == 0 && t % 400 != 0 ? 28 : 29),
            e
        },
        destroy: function(t) {
            var i = this
              , e = i.config;
            for (var o in i.scroll)
                i.scroll[o].destroy();
            t && e.cancel && e.cancel.call(i),
            i.tap(S(".rolldate-mask"), 0),
            i.tap(S(".rolldate-cancel"), 0),
            i.tap(S(".rolldate-confirm"), 0),
            setTimeout(function() {
                var t = S(".rolldate-container");
                t && document.body.removeChild(t),
                t = null
            }, 300)
        },
        getSelected: function(t) {
            return S("#" + t.wrapper.id + " li", 1)[t.getSelectedIndex()].innerText.replace(/\D/g, "")
        }
    },
    i.version = "3.1.3",
    i
});
