import {
    d as M,
    t as m,
    I as S,
    bX as D,
    c4 as A,
    o as n,
    i as V,
    ao as F,
    f as v,
    B as f,
    F as T,
    j as W,
    au as X,
    m as q,
    x as P,
    as as U,
    D as $,
    at as H,
    w as k,
    ah as I,
    E as x,
    az as G,
    ai as Q,
    G as N,
    dI as J,
    dJ as w,
    y as c,
    aW as j,
    e as a,
    aL as Y,
    aM as Z,
    dK as ee,
    z,
    aI as ae,
    n as te,
    bA as se,
    J as E,
    am as oe,
    k as le,
    ak as ne
} from "./main-d3200a92.js";
import { c as re } from "./utils-c92527c4.js";
import { V as O } from "./VChip-a6de0ffd.js";
import { V as ie } from "./VSpacer-92b60b12.js";
import { _ as ce } from "./AppTextField.vue_vue_type_script_setup_true_lang-ea0dc63c.js";
import { V as de } from "./VCheckbox-ac3ca1e2.js";
import { a as ue } from "./VInput-a4774bed.js";
import { l as R } from "./lodash-470102d3.js";
const me = { class: "pa-5" },
    pe = M({
        __name: "Masonry",
        props: { items: Array, isLoading: Boolean, grid: Object },
        emits: ["load"],
        setup(s, { emit: p }) {
            const r = m(),
                e = m(),
                i = m(),
                C = async o => {
                    o[0].isIntersecting && p("load");
                };
            return (
                S(async () => {
                    (r.value = new IntersectionObserver(C, { rootMargin: "10px" })), p("load"), r.value.observe(e.value);
                }),
                D(() => r.value && r.value.disconnect()),
                (o, y) => {
                    const d = A("masonry-tile"),
                        g = A("masonry");
                    return (
                        n(),
                        V(
                            "div",
                            { ref_key: "container", ref: i },
                            [
                                F(
                                    (n(),
                                    v(
                                        H,
                                        { class: "me-0 mx-auto", "transition-duration": "0.3s", "item-selector": ".item" },
                                        {
                                            default: f(() => [
                                                (n(!0),
                                                V(
                                                    T,
                                                    null,
                                                    W(s.items, (h, _) =>
                                                        F(
                                                            (n(),
                                                            v(
                                                                X,
                                                                q(
                                                                    { key: h.id + "_" + _, class: "item" },
                                                                    s.grid || { cols: 12, md: 4, sm: 6, xl: 3 }
                                                                ),
                                                                {
                                                                    default: f(() => [
                                                                        P(
                                                                            o.$slots,
                                                                            "default",
                                                                            { item: h, index: _, redrawVueMasonry: o.$redrawVueMasonry },
                                                                            () => [U($(h), 1)]
                                                                        )
                                                                    ]),
                                                                    _: 2
                                                                },
                                                                1040
                                                            )),
                                                            [[d]]
                                                        )
                                                    ),
                                                    128
                                                ))
                                            ]),
                                            _: 3
                                        }
                                    )),
                                    [[g]]
                                ),
                                k(
                                    "div",
                                    { ref_key: "sentinel", ref: e, class: "d-flex justify-center py-5" },
                                    [k("span", me, [s.isLoading ? (n(), v(I, { key: 0, icon: "svg-spinners:tadpole" })) : x("", !0)])],
                                    512
                                )
                            ],
                            512
                        )
                    );
                }
            );
        }
    }),
    fe = {};
function ve(s, p) {
    return n(), v(Q, { variant: "tonal", size: "26" });
}
const ye = G(fe, [["render", ve]]),
    _e = { class: "w-100 h-100 rounded bg-surface border media-card overflow-hidden position-relative" },
    ge = { class: "position-absolute w-100 d-flex align-center", style: { top: "0", "padding-block": "2px" } },
    he = { class: "position-absolute w-100 d-flex align-center", style: { bottom: "0", "padding-block": "2px" } },
    be = ["title"],
    we = M({ inheritAttrs: !1 }),
    xe = M({
        ...we,
        __name: "Media",
        props: {
            hasTitle: { type: Boolean, default: !1 },
            isPreview: { type: Boolean, default: !1 },
            deletable: { type: Boolean, default: !1 },
            heading: { type: Boolean, default: !0 },
            footer: { type: Boolean },
            media: null
        },
        emits: ["onDelete"],
        setup(s, { emit: p }) {
            const r = s;
            m(r.isPreview);
            const e = m(r.media),
                i = N(() => re(e.value.status)),
                C = { video: "/assets/video_placeholder.gif", image: "/assets/image-placeholder.jpg", pdf: "/assets/pdf_placeholder.png" },
                o = N(() => e.value.thumb_url || C[e.value.type]),
                y = J(),
                d = () => {
                    y.openMediaDialog({ thumb: o, url: e.value.url });
                };
            let g;
            const h = async () => {
                    try {
                        const t = await y.getById(e.value.id);
                        (e.value = t), t.status === w.Completed && clearInterval(g);
                    } catch {}
                },
                _ = async () => {
                    try {
                        const t = await y.retry(e.value.id);
                        e.value = t;
                    } catch {}
                },
                l = t => {
                    p("onDelete", t.id);
                };
            return (
                S(() => {
                    (e.value.status === w.Pending || e.value.status === w.Processing) && (g = setInterval(h, 5e3));
                }),
                D(() => {
                    clearInterval(g);
                }),
                (t, u) => {
                    const B = ye;
                    return (
                        n(),
                        V("div", _e, [
                            c(
                                ae,
                                {
                                    color: "surface",
                                    style: { "aspect-ratio": "16/9" },
                                    class: z([s.hasTitle ? "rounded-b-0" : "rounded", "h-100 w-100"])
                                },
                                {
                                    default: f(() => [
                                        c(j, { src: a(o), class: "w-100 h-100", cover: "" }, null, 8, ["src"]),
                                        c(
                                            j,
                                            {
                                                src: a(o),
                                                style: { top: "0" },
                                                class: "w-100 h-100 position-absolute blurred-background rounded"
                                            },
                                            null,
                                            8,
                                            ["src"]
                                        ),
                                        k("div", ge, [
                                            c(
                                                Y,
                                                { size: "26", class: "ml-1", color: "#fff", variant: "text" },
                                                {
                                                    default: f(() => [
                                                        c(
                                                            I,
                                                            {
                                                                size: "18",
                                                                icon: a(e).type === "video" ? "tabler:video" : "mdi-image-outline"
                                                            },
                                                            null,
                                                            8,
                                                            ["icon"]
                                                        )
                                                    ]),
                                                    _: 1
                                                }
                                            ),
                                            a(e).status !== a(w).Completed
                                                ? (n(),
                                                  v(
                                                      O,
                                                      { key: 0, size: "x-small", class: "ma-1", color: a(i).color },
                                                      {
                                                          default: f(() => [
                                                              c(I, { start: "", size: "16", icon: a(i).icon }, null, 8, ["icon"]),
                                                              U(" " + $(a(i).lable), 1)
                                                          ]),
                                                          _: 1
                                                      },
                                                      8,
                                                      ["color"]
                                                  ))
                                                : x("", !0),
                                            a(e).status === a(w).Error
                                                ? (n(), v(B, { key: 1, onClick: _, icon: "tabler:refresh", color: "error", class: "ml-1" }))
                                                : x("", !0),
                                            P(t.$slots, "toolbar", {}, void 0, !0),
                                            c(ie),
                                            s.deletable
                                                ? (n(),
                                                  v(B, {
                                                      key: 2,
                                                      onClick: u[0] || (u[0] = Z(L => l(a(e)), ["stop"])),
                                                      icon: "tabler-trash",
                                                      color: "error",
                                                      class: "mr-1 text-error"
                                                  }))
                                                : x("", !0)
                                        ]),
                                        k("div", he, [
                                            a(e).type === "video" && a(e).status === a(w).Completed
                                                ? (n(),
                                                  V(
                                                      T,
                                                      { key: 0 },
                                                      [
                                                          c(
                                                              O,
                                                              {
                                                                  rounded: "sm",
                                                                  size: "x-small",
                                                                  class: "ml-1",
                                                                  color: "#fff",
                                                                  variant: "tonal"
                                                              },
                                                              {
                                                                  default: f(() => [
                                                                      c(I, { start: "", size: "16", icon: "mdi-clock-fast" }),
                                                                      k("span", null, $(a(ee)(a(e).duration)), 1)
                                                                  ]),
                                                                  _: 1
                                                              }
                                                          ),
                                                          c(B, {
                                                              onClick: d,
                                                              icon: "mdi-play-circle",
                                                              color: "#fff",
                                                              class: "text-",
                                                              variant: "text"
                                                          })
                                                      ],
                                                      64
                                                  ))
                                                : x("", !0)
                                        ])
                                    ]),
                                    _: 3
                                },
                                8,
                                ["class"]
                            ),
                            s.hasTitle
                                ? (n(), V("p", { key: 0, class: "truncate px-2 py-2 ma-0", title: a(e).name }, $(a(e).name), 9, be))
                                : x("", !0),
                            P(t.$slots, "default", {}, void 0, !0)
                        ])
                    );
                }
            );
        }
    });
const Ve = G(xe, [["__scopeId", "data-v-8b791e53"]]),
    ke = M({ inheritAttrs: !1 }),
    Me = M({
        ...ke,
        __name: "CustomCheckboxe",
        props: { selected: { type: Boolean } },
        setup(s, { emit: p }) {
            return (r, e) => (
                n(),
                v(
                    ue,
                    {
                        class: z([
                            "custom-input custom-checkbox rounded-lg cursor-pointer w-100 overflow-hidden pa-0",
                            s.selected ? "active" : ""
                        ])
                    },
                    {
                        default: f(() => [
                            c(de, te(se(r.$attrs)), null, 16),
                            P(r.$slots, "default", { class: z(s.selected ? "custom-checkbox-image bg-primary" : "custom-checkbox-image") })
                        ]),
                        _: 3
                    },
                    8,
                    ["class"]
                )
            );
        }
    });
const Te = M({
    __name: "GalleryView",
    props: {
        selectable: { type: Boolean, default: !1 },
        deletable: { type: Boolean, default: !1 },
        options: null,
        grid: null,
        modelValue: { default: () => [] },
        searchPosisions: null,
        maxNumberSelectableFiles: { default: 5 },
        allowedFileTypes: null
    },
    emits: ["onDelete", "onChange", "update:model-value"],
    setup(s, { emit: p }) {
        const r = s,
            e = J(),
            i = m([]),
            C = m(!1),
            o = m(r.modelValue.map(({ id: l }) => l));
        E(o, l => {
            p(
                "update:model-value",
                i.value.filter(({ id: t }) => l.includes(t))
            );
        });
        const y = m(0),
            d = m({ page: 1, itemsPerPage: 10, sortBy: [], groupBy: [], search: void 0, ...r.options }),
            g = R.debounce(async () => {
                i.value.length < y.value && (d.value.page++, i.value.push(...(await _())));
            }, 500);
        E(
            () => d.value.search,
            R.debounce(async () => {
                (d.value.page = 1), (i.value = await _());
            }, 500)
        );
        const h = async l => {
                await e.delete(l), (i.value = i.value.filter(({ id: t }) => t !== l)), p("onDelete", l);
            },
            _ = async () => {
                var l, t;
                try {
                    const u = await e.get({ ...d.value, types: r.allowedFileTypes });
                    return (
                        (d.value.page = ((l = u.meta) == null ? void 0 : l.current_page) || 1),
                        (y.value = ((t = u.meta) == null ? void 0 : t.total) || 0),
                        Promise.resolve(u.data)
                    );
                } catch (u) {
                    throw u;
                }
            };
        return (
            S(async () => {
                d.value.page = 1;
                const l = await _();
                i.value = l;
            }),
            D(() => {
                e.$reset();
            }),
            (l, t) => {
                const u = ce,
                    B = Ve,
                    L = pe;
                return (
                    n(),
                    V(
                        T,
                        null,
                        [
                            k(
                                "div",
                                {
                                    class: "mb-5 position-sticky bg-surface rounded pa-4 px-3",
                                    style: oe({ top: s.searchPosisions || "0px", "z-index": 10 })
                                },
                                [
                                    c(
                                        u,
                                        {
                                            modelValue: a(d).search,
                                            "onUpdate:modelValue": t[0] || (t[0] = b => (a(d).search = b)),
                                            placeholder: l.$t("Search"),
                                            density: "compact"
                                        },
                                        null,
                                        8,
                                        ["modelValue", "placeholder"]
                                    )
                                ],
                                4
                            ),
                            c(
                                L,
                                { grid: s.grid, "is-loading": a(C), onLoad: a(g), items: a(i) },
                                {
                                    default: f(({ item: b }) => [
                                        (n(),
                                        v(
                                            le(s.selectable ? Me : "div"),
                                            {
                                                modelValue: a(o),
                                                "onUpdate:modelValue": t[1] || (t[1] = K => (ne(o) ? (o.value = K) : null)),
                                                disabled: a(o).length >= s.maxNumberSelectableFiles && !a(o).includes(b.id),
                                                selected: a(o).includes(b.id),
                                                value: b.id
                                            },
                                            {
                                                default: f(() => [
                                                    c(
                                                        B,
                                                        { deletable: s.deletable, media: b, onOnDelete: h, "has-title": "", heading: "" },
                                                        null,
                                                        8,
                                                        ["deletable", "media"]
                                                    )
                                                ]),
                                                _: 2
                                            },
                                            1032,
                                            ["modelValue", "disabled", "selected", "value"]
                                        ))
                                    ]),
                                    _: 1
                                },
                                8,
                                ["grid", "is-loading", "onLoad", "items"]
                            )
                        ],
                        64
                    )
                );
            }
        );
    }
});
export { Te as _, Ve as a, ye as b };