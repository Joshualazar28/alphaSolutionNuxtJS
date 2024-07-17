import { _ as __nuxt_component_0 } from "./nuxt-link-15b2078b.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./Footer-5a36eb2a.js";
import { c as _imports_1 } from "./logo-db90386b.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "destr";
import "defu";
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      portfolioSliderContainer: {
        breakpoints: {
          1800: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          1400: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false
          },
          0: {
            slidesPerView: 1
          }
        }
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-area portfolio-default-area" }, _attrs))}><div class="container pb-sm-50 pb-xl-70 pb-120"><div class="row align-items-center" data-aos="fade-up" data-aos-duration="1000"><div class="col-sm-8"><div class="section-title xs-text-center"><div class="subtitle-content xs-d-i-flex"><img${ssrRenderAttr("src", _imports_0)} alt="Virtuf-HasTech"><h5>Portfolio</h5></div><h2 class="title">We Have Leadership Strong Experience In <span>Business.</span></h2></div></div><div class="col-sm-4 text-right">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/project",
    class: "btn btn-theme btn-border btn-theme-color2 xs-d-none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`All Projects <i class="icon icofont-long-arrow-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode("All Projects "),
          createVNode("i", { class: "icon icofont-long-arrow-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="container custom-container"><div class="row"><div class="col-lg-12"><div class="portfolio-slider-content" data-aos="fade-up" data-aos-duration="1000"><div class="swiper-container portfolio-slider-container">`);
  _push(ssrRenderComponent(_component_swiper, {
    speed: 1e3,
    "space-between": 30,
    "centered-slides": true,
    breakpoints: $data.portfolioSliderContainer.breakpoints,
    loop: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "portfolio-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-content"${_scopeId2}><div class="thumb" style="${ssrRenderStyle({ backgroundImage: `url('/images/portfolio/callcenter2.jpg')` })}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_nuxt_link, { to: "/project-details" }, null, _parent3, _scopeId2));
              _push3(`</div><div class="portfolio-info"${_scopeId2}><div class="content"${_scopeId2}><img class="shape-line-img"${ssrRenderAttr("src", _imports_1)} alt="Virtuf-HasTech"${_scopeId2}><h3 class="title"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_nuxt_link, { to: "/project-details" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Market Statics &amp; Analysis.`);
                  } else {
                    return [
                      createTextVNode("Market Statics & Analysis.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h3>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                to: "/project-details",
                class: "category"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Business / Marketing`);
                  } else {
                    return [
                      createTextVNode("Business / Marketing")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                to: "/project-details",
                class: "btn btn-theme btn-border btn-portfolio"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`View Details <i class="icon icofont-long-arrow-right"${_scopeId3}></i>`);
                  } else {
                    return [
                      createTextVNode("View Details "),
                      createVNode("i", { class: "icon icofont-long-arrow-right" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-content" }, [
                  createVNode("div", {
                    class: "thumb",
                    style: { backgroundImage: `url('/images/portfolio/callcenter2.jpg')` }
                  }, [
                    createVNode(_component_nuxt_link, { to: "/project-details" })
                  ], 4),
                  createVNode("div", { class: "portfolio-info" }, [
                    createVNode("div", { class: "content" }, [
                      createVNode("img", {
                        class: "shape-line-img",
                        src: _imports_1,
                        alt: "Virtuf-HasTech"
                      }),
                      createVNode("h3", { class: "title" }, [
                        createVNode(_component_nuxt_link, { to: "/project-details" }, {
                          default: withCtx(() => [
                            createTextVNode("Market Statics & Analysis.")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_nuxt_link, {
                        to: "/project-details",
                        class: "category"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Business / Marketing")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_nuxt_link, {
                      to: "/project-details",
                      class: "btn btn-theme btn-border btn-portfolio"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("View Details "),
                        createVNode("i", { class: "icon icofont-long-arrow-right" })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "portfolio-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-content"${_scopeId2}><div class="thumb" style="${ssrRenderStyle({ backgroundImage: `url('/images/portfolio/callcenter3.jpg')` })}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_nuxt_link, { to: "/project-details" }, null, _parent3, _scopeId2));
              _push3(`</div><div class="portfolio-info"${_scopeId2}><div class="content"${_scopeId2}><img class="shape-line-img"${ssrRenderAttr("src", _imports_1)} alt="Virtuf-HasTech"${_scopeId2}><h3 class="title"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_nuxt_link, { to: "/project-details" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Market Statics &amp; Analysis.`);
                  } else {
                    return [
                      createTextVNode("Market Statics & Analysis.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h3>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                to: "/project-details",
                class: "category"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Business / Marketing`);
                  } else {
                    return [
                      createTextVNode("Business / Marketing")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                to: "/project-details",
                class: "btn btn-theme btn-border btn-portfolio"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`View Details <i class="icon icofont-long-arrow-right"${_scopeId3}></i>`);
                  } else {
                    return [
                      createTextVNode("View Details "),
                      createVNode("i", { class: "icon icofont-long-arrow-right" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-content" }, [
                  createVNode("div", {
                    class: "thumb",
                    style: { backgroundImage: `url('/images/portfolio/callcenter3.jpg')` }
                  }, [
                    createVNode(_component_nuxt_link, { to: "/project-details" })
                  ], 4),
                  createVNode("div", { class: "portfolio-info" }, [
                    createVNode("div", { class: "content" }, [
                      createVNode("img", {
                        class: "shape-line-img",
                        src: _imports_1,
                        alt: "Virtuf-HasTech"
                      }),
                      createVNode("h3", { class: "title" }, [
                        createVNode(_component_nuxt_link, { to: "/project-details" }, {
                          default: withCtx(() => [
                            createTextVNode("Market Statics & Analysis.")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_nuxt_link, {
                        to: "/project-details",
                        class: "category"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Business / Marketing")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_nuxt_link, {
                      to: "/project-details",
                      class: "btn btn-theme btn-border btn-portfolio"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("View Details "),
                        createVNode("i", { class: "icon icofont-long-arrow-right" })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "portfolio-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-content"${_scopeId2}><div class="thumb" style="${ssrRenderStyle({ backgroundImage: `url('/images/portfolio/callcenter1.jpg')` })}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_nuxt_link, { to: "/project-details" }, null, _parent3, _scopeId2));
              _push3(`</div><div class="portfolio-info"${_scopeId2}><div class="content"${_scopeId2}><img class="shape-line-img"${ssrRenderAttr("src", _imports_1)} alt="Virtuf-HasTech"${_scopeId2}><h3 class="title"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_nuxt_link, { to: "/project-details" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Market Statics &amp; Analysis.`);
                  } else {
                    return [
                      createTextVNode("Market Statics & Analysis.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h3>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                to: "/project-details",
                class: "category"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Business / Marketing`);
                  } else {
                    return [
                      createTextVNode("Business / Marketing")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                to: "/project-details",
                class: "btn btn-theme btn-border btn-portfolio"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`View Details <i class="icon icofont-long-arrow-right"${_scopeId3}></i>`);
                  } else {
                    return [
                      createTextVNode("View Details "),
                      createVNode("i", { class: "icon icofont-long-arrow-right" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-content" }, [
                  createVNode("div", {
                    class: "thumb",
                    style: { backgroundImage: `url('/images/portfolio/callcenter1.jpg')` }
                  }, [
                    createVNode(_component_nuxt_link, { to: "/project-details" })
                  ], 4),
                  createVNode("div", { class: "portfolio-info" }, [
                    createVNode("div", { class: "content" }, [
                      createVNode("img", {
                        class: "shape-line-img",
                        src: _imports_1,
                        alt: "Virtuf-HasTech"
                      }),
                      createVNode("h3", { class: "title" }, [
                        createVNode(_component_nuxt_link, { to: "/project-details" }, {
                          default: withCtx(() => [
                            createTextVNode("Market Statics & Analysis.")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_nuxt_link, {
                        to: "/project-details",
                        class: "category"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Business / Marketing")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_nuxt_link, {
                      to: "/project-details",
                      class: "btn btn-theme btn-border btn-portfolio"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("View Details "),
                        createVNode("i", { class: "icon icofont-long-arrow-right" })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "portfolio-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-content" }, [
                createVNode("div", {
                  class: "thumb",
                  style: { backgroundImage: `url('/images/portfolio/callcenter2.jpg')` }
                }, [
                  createVNode(_component_nuxt_link, { to: "/project-details" })
                ], 4),
                createVNode("div", { class: "portfolio-info" }, [
                  createVNode("div", { class: "content" }, [
                    createVNode("img", {
                      class: "shape-line-img",
                      src: _imports_1,
                      alt: "Virtuf-HasTech"
                    }),
                    createVNode("h3", { class: "title" }, [
                      createVNode(_component_nuxt_link, { to: "/project-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Market Statics & Analysis.")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_nuxt_link, {
                      to: "/project-details",
                      class: "category"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Business / Marketing")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_nuxt_link, {
                    to: "/project-details",
                    class: "btn btn-theme btn-border btn-portfolio"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("View Details "),
                      createVNode("i", { class: "icon icofont-long-arrow-right" })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "portfolio-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-content" }, [
                createVNode("div", {
                  class: "thumb",
                  style: { backgroundImage: `url('/images/portfolio/callcenter3.jpg')` }
                }, [
                  createVNode(_component_nuxt_link, { to: "/project-details" })
                ], 4),
                createVNode("div", { class: "portfolio-info" }, [
                  createVNode("div", { class: "content" }, [
                    createVNode("img", {
                      class: "shape-line-img",
                      src: _imports_1,
                      alt: "Virtuf-HasTech"
                    }),
                    createVNode("h3", { class: "title" }, [
                      createVNode(_component_nuxt_link, { to: "/project-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Market Statics & Analysis.")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_nuxt_link, {
                      to: "/project-details",
                      class: "category"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Business / Marketing")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_nuxt_link, {
                    to: "/project-details",
                    class: "btn btn-theme btn-border btn-portfolio"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("View Details "),
                      createVNode("i", { class: "icon icofont-long-arrow-right" })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "portfolio-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-content" }, [
                createVNode("div", {
                  class: "thumb",
                  style: { backgroundImage: `url('/images/portfolio/callcenter1.jpg')` }
                }, [
                  createVNode(_component_nuxt_link, { to: "/project-details" })
                ], 4),
                createVNode("div", { class: "portfolio-info" }, [
                  createVNode("div", { class: "content" }, [
                    createVNode("img", {
                      class: "shape-line-img",
                      src: _imports_1,
                      alt: "Virtuf-HasTech"
                    }),
                    createVNode("h3", { class: "title" }, [
                      createVNode(_component_nuxt_link, { to: "/project-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Market Statics & Analysis.")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_nuxt_link, {
                      to: "/project-details",
                      class: "category"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Business / Marketing")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_nuxt_link, {
                    to: "/project-details",
                    class: "btn btn-theme btn-border btn-portfolio"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("View Details "),
                      createVNode("i", { class: "icon icofont-long-arrow-right" })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PortfolioSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PortfolioSection as default
};
//# sourceMappingURL=PortfolioSection-f6749236.js.map
