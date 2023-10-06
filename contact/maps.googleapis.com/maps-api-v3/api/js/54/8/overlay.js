google.maps.__gjsload__('overlay', function(_) {
    var Rx = function(a) {
            this.g = a
        },
        Hpa = function() {},
        Sx = function(a) {
            a.gu = a.gu || new Hpa;
            return a.gu
        },
        Ipa = function(a) {
            this.Ja = new _.ij(() => {
                const b = a.gu;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Qr && a.onAdd) a.onAdd();
                        b.Qr = !0;
                        a.draw()
                    }
                } else {
                    if (b.Qr)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Qr = !1
                }
            }, 0)
        },
        Jpa = function(a, b) {
            const c = Sx(a);
            let d = c.Xq;
            d || (d = c.Xq = new Ipa(a));
            _.ub(c.ab || [], _.Vg);
            var e = c.wb = c.wb || new _.Ula;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.py = c.py || new Rx(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.jj(d.Ja);
            c.ab = [_.Tg(a, "panes_changed", e), _.Tg(f, "zoom_changed", e), _.Tg(f, "offset_changed", e), _.Tg(b, "projection_changed", e), _.Tg(f, "projectioncenterq_changed", e)];
            _.jj(d.Ja);
            b instanceof _.lh ? (_.ai(b, "Ox"), _.Zh(b, 148440)) : b instanceof _.ri && (_.ai(b, "Oxs"),
                _.Zh(b, 181451))
        },
        Opa = function(a) {
            if (a) {
                var b = a.getMap();
                if (Kpa(a) !== b && b && b instanceof _.lh) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Lpa(b, a, c.overlayLayer) : c.yb.then(({
                        ka: d
                    }) => {
                        const e = new Mpa(b, d);
                        d.Ub(e);
                        c.overlayLayer = e;
                        Npa(a);
                        Opa(a)
                    })
                }
            }
        },
        Npa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.gf(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Kpa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Ppa = function(a, b) {
            a.g.get("projection") !=
                b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        };
    _.ua(Rx, _.gh);
    Rx.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Wf(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var Tx = {};
    _.ua(Ipa, _.gh);
    Tx.Ee = function(a) {
        if (a) {
            var b = a.getMap();
            (Sx(a).Xx || null) !== b && (b && Jpa(a, b), Sx(a).Xx = b)
        }
    };
    Tx.gf = function(a) {
        const b = Sx(a);
        var c = b.wb;
        c && c.unbindAll();
        (c = b.py) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.ab && _.ub(b.ab, _.Vg);
        b.ab = null;
        b.Xq && (b.Xq.Ja.Vc(), b.Xq = null);
        delete Sx(a).Xx
    };
    var Ux = {},
        Lpa = class {
            constructor(a, b, c) {
                this.map = a;
                this.g = b;
                this.j = c;
                this.h = !1;
                _.ai(this.map, "Ox");
                _.Zh(this.map, 148440);
                c.Ee(this)
            }
            draw() {
                this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
                this.g.draw && this.g.draw()
            }
        },
        Mpa = class {
            constructor(a, b) {
                this.o = a;
                this.j = b;
                this.g = null;
                this.h = []
            }
            dispose() {}
            oc(a, b, c, d, e, f, g, k) {
                const m = this.g = this.g || new _.Ht(this.o, this.j, () => {});
                m.oc(a, b, c, d, e, f, g, k);
                for (const q of this.h) Ppa(q, m), q.draw()
            }
            Ee(a) {
                this.h.push(a);
                this.g && Ppa(a, this.g);
                this.j.refresh()
            }
            gf(a) {
                _.Eb(this.h,
                    a)
            }
        };
    Ux.Ee = Opa;
    Ux.gf = Npa;
    _.Jg("overlay", {
        nw: function(a) {
            if (a) {
                (0, Tx.gf)(a);
                (0, Ux.gf)(a);
                var b = a.getMap();
                b && (b instanceof _.lh ? (0, Ux.Ee)(a) : (0, Tx.Ee)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.ip(a, {
                Ye: ({
                    event: b
                }) => {
                    _.$n(b.Pa)
                },
                Fd: b => _.Vo(b),
                Qj: b => _.Wo(b),
                xe: b => _.Wo(b),
                Ud: b => _.Xo(b)
            }).Jl(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.Rg);
            a.addEventListener("contextmenu", _.Rg);
            a.addEventListener("dblclick", _.Rg);
            a.addEventListener("mousedown", _.Rg);
            a.addEventListener("mousemove", _.Rg);
            a.addEventListener("MSPointerDown",
                _.Rg);
            a.addEventListener("pointerdown", _.Rg);
            a.addEventListener("touchstart", _.Rg);
            a.addEventListener("wheel", _.Rg)
        }
    });
});