import { Swiper, SwiperSlide } from "swiper/vue";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./line-s2-d4bf72eb.js";
import { c as _imports_1 } from "./logo-db90386b.js";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-15b2078b.js";
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
const _imports_2 = "" + __publicAssetsURL("images/team/1.jpg");
const _imports_3 = "" + __publicAssetsURL("images/shape/8.png");
const _imports_4 = "" + __publicAssetsURL("images/shape/9.png");
const _imports_5 = "" + __publicAssetsURL("images/shape/10.png");
const _imports_6 = "" + __publicAssetsURL("images/team/2.jpg");
const _imports_7 = "" + __publicAssetsURL("images/team/3.jpg");
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
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
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-area" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8 m-auto"><div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000"><h2 class="title">We’ve Awesome Team</h2><div class="separator-line mt-14"><img class="me-1"${ssrRenderAttr("src", _imports_0)} alt="Images"><img${ssrRenderAttr("src", _imports_1)} alt="Images"></div><div class="desc"><p class="mt-21">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been <br>the industry&#39;s standard dummy text ever since the printer took</p></div></div></div></div><div class="row"><div class="col-lg-12"><div class="team-slider-content" data-aos="fade-up" data-aos-duration="1200"><div class="team-slider-container">`);
  _push(ssrRenderComponent(_component_swiper, {
    speed: 1e3,
    "space-between": 30,
    "centered-slides": true,
    breakpoints: $data.swiperOptions.breakpoints,
    loop: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "team-member" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt="Image"${_scopeId2}></div><div class="content"${_scopeId2}><div class="member-info"${_scopeId2}><div class="separator-line"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="Images"${_scopeId2}></div><h4 class="name"${_scopeId2}>Hosea Steiner</h4><h6 class="designation"${_scopeId2}>UI/UX Designer</h6><div class="progress-item"${_scopeId2}><div class="progress-line"${_scopeId2}><div class="progress-bar-line" style="${ssrRenderStyle({ "width": "75%" })}"${_scopeId2}><span class="percent"${_scopeId2}>75%</span></div></div><div class="progress-info"${_scopeId2}><span class="title"${_scopeId2}>Professional Skill</span></div></div></div></div><div class="shape-style"${_scopeId2}><img class="shape-style1"${ssrRenderAttr("src", _imports_3)} alt="Image"${_scopeId2}><img class="shape-style2"${ssrRenderAttr("src", _imports_4)} alt="Image"${_scopeId2}><img class="shape-style3"${ssrRenderAttr("src", _imports_5)} alt="Image"${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", { class: "thumb" }, [
                  createVNode("img", {
                    src: _imports_2,
                    alt: "Image"
                  })
                ]),
                createVNode("div", { class: "content" }, [
                  createVNode("div", { class: "member-info" }, [
                    createVNode("div", { class: "separator-line" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "Images"
                      })
                    ]),
                    createVNode("h4", { class: "name" }, "Hosea Steiner"),
                    createVNode("h6", { class: "designation" }, "UI/UX Designer"),
                    createVNode("div", { class: "progress-item" }, [
                      createVNode("div", { class: "progress-line" }, [
                        createVNode("div", {
                          class: "progress-bar-line",
                          style: { "width": "75%" }
                        }, [
                          createVNode("span", { class: "percent" }, "75%")
                        ])
                      ]),
                      createVNode("div", { class: "progress-info" }, [
                        createVNode("span", { class: "title" }, "Professional Skill")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "shape-style" }, [
                  createVNode("img", {
                    class: "shape-style1",
                    src: _imports_3,
                    alt: "Image"
                  }),
                  createVNode("img", {
                    class: "shape-style2",
                    src: _imports_4,
                    alt: "Image"
                  }),
                  createVNode("img", {
                    class: "shape-style3",
                    src: _imports_5,
                    alt: "Image"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "team-member" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_6)} alt="Image"${_scopeId2}></div><div class="content"${_scopeId2}><div class="member-info"${_scopeId2}><div class="separator-line"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="Images"${_scopeId2}></div><h4 class="name"${_scopeId2}>Rosario Matthew</h4><h6 class="designation"${_scopeId2}>Web Developer</h6><div class="progress-item"${_scopeId2}><div class="progress-line"${_scopeId2}><div class="progress-bar-line" style="${ssrRenderStyle({ "width": "90%" })}"${_scopeId2}><span class="percent"${_scopeId2}>90%</span></div></div><div class="progress-info"${_scopeId2}><span class="title"${_scopeId2}>Professional Skill</span></div></div></div></div><div class="shape-style"${_scopeId2}><img class="shape-style1"${ssrRenderAttr("src", _imports_3)} alt="Image"${_scopeId2}><img class="shape-style2"${ssrRenderAttr("src", _imports_4)} alt="Image"${_scopeId2}><img class="shape-style3"${ssrRenderAttr("src", _imports_5)} alt="Image"${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", { class: "thumb" }, [
                  createVNode("img", {
                    src: _imports_6,
                    alt: "Image"
                  })
                ]),
                createVNode("div", { class: "content" }, [
                  createVNode("div", { class: "member-info" }, [
                    createVNode("div", { class: "separator-line" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "Images"
                      })
                    ]),
                    createVNode("h4", { class: "name" }, "Rosario Matthew"),
                    createVNode("h6", { class: "designation" }, "Web Developer"),
                    createVNode("div", { class: "progress-item" }, [
                      createVNode("div", { class: "progress-line" }, [
                        createVNode("div", {
                          class: "progress-bar-line",
                          style: { "width": "90%" }
                        }, [
                          createVNode("span", { class: "percent" }, "90%")
                        ])
                      ]),
                      createVNode("div", { class: "progress-info" }, [
                        createVNode("span", { class: "title" }, "Professional Skill")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "shape-style" }, [
                  createVNode("img", {
                    class: "shape-style1",
                    src: _imports_3,
                    alt: "Image"
                  }),
                  createVNode("img", {
                    class: "shape-style2",
                    src: _imports_4,
                    alt: "Image"
                  }),
                  createVNode("img", {
                    class: "shape-style3",
                    src: _imports_5,
                    alt: "Image"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "team-member" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_7)} alt="Image"${_scopeId2}></div><div class="content"${_scopeId2}><div class="member-info"${_scopeId2}><div class="separator-line"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="Images"${_scopeId2}></div><h4 class="name"${_scopeId2}>Tyson Holiday</h4><h6 class="designation"${_scopeId2}>Digital Marketer</h6><div class="progress-item"${_scopeId2}><div class="progress-line"${_scopeId2}><div class="progress-bar-line" style="${ssrRenderStyle({ "width": "80%" })}"${_scopeId2}><span class="percent"${_scopeId2}>80%</span></div></div><div class="progress-info"${_scopeId2}><span class="title"${_scopeId2}>Professional Skill</span></div></div></div></div><div class="shape-style"${_scopeId2}><img class="shape-style1"${ssrRenderAttr("src", _imports_3)} alt="Image"${_scopeId2}><img class="shape-style2"${ssrRenderAttr("src", _imports_4)} alt="Image"${_scopeId2}><img class="shape-style3"${ssrRenderAttr("src", _imports_5)} alt="Image"${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", { class: "thumb" }, [
                  createVNode("img", {
                    src: _imports_7,
                    alt: "Image"
                  })
                ]),
                createVNode("div", { class: "content" }, [
                  createVNode("div", { class: "member-info" }, [
                    createVNode("div", { class: "separator-line" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "Images"
                      })
                    ]),
                    createVNode("h4", { class: "name" }, "Tyson Holiday"),
                    createVNode("h6", { class: "designation" }, "Digital Marketer"),
                    createVNode("div", { class: "progress-item" }, [
                      createVNode("div", { class: "progress-line" }, [
                        createVNode("div", {
                          class: "progress-bar-line",
                          style: { "width": "80%" }
                        }, [
                          createVNode("span", { class: "percent" }, "80%")
                        ])
                      ]),
                      createVNode("div", { class: "progress-info" }, [
                        createVNode("span", { class: "title" }, "Professional Skill")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "shape-style" }, [
                  createVNode("img", {
                    class: "shape-style1",
                    src: _imports_3,
                    alt: "Image"
                  }),
                  createVNode("img", {
                    class: "shape-style2",
                    src: _imports_4,
                    alt: "Image"
                  }),
                  createVNode("img", {
                    class: "shape-style3",
                    src: _imports_5,
                    alt: "Image"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "team-member" }, {
            default: withCtx(() => [
              createVNode("div", { class: "thumb" }, [
                createVNode("img", {
                  src: _imports_2,
                  alt: "Image"
                })
              ]),
              createVNode("div", { class: "content" }, [
                createVNode("div", { class: "member-info" }, [
                  createVNode("div", { class: "separator-line" }, [
                    createVNode("img", {
                      src: _imports_1,
                      alt: "Images"
                    })
                  ]),
                  createVNode("h4", { class: "name" }, "Hosea Steiner"),
                  createVNode("h6", { class: "designation" }, "UI/UX Designer"),
                  createVNode("div", { class: "progress-item" }, [
                    createVNode("div", { class: "progress-line" }, [
                      createVNode("div", {
                        class: "progress-bar-line",
                        style: { "width": "75%" }
                      }, [
                        createVNode("span", { class: "percent" }, "75%")
                      ])
                    ]),
                    createVNode("div", { class: "progress-info" }, [
                      createVNode("span", { class: "title" }, "Professional Skill")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "shape-style" }, [
                createVNode("img", {
                  class: "shape-style1",
                  src: _imports_3,
                  alt: "Image"
                }),
                createVNode("img", {
                  class: "shape-style2",
                  src: _imports_4,
                  alt: "Image"
                }),
                createVNode("img", {
                  class: "shape-style3",
                  src: _imports_5,
                  alt: "Image"
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "team-member" }, {
            default: withCtx(() => [
              createVNode("div", { class: "thumb" }, [
                createVNode("img", {
                  src: _imports_6,
                  alt: "Image"
                })
              ]),
              createVNode("div", { class: "content" }, [
                createVNode("div", { class: "member-info" }, [
                  createVNode("div", { class: "separator-line" }, [
                    createVNode("img", {
                      src: _imports_1,
                      alt: "Images"
                    })
                  ]),
                  createVNode("h4", { class: "name" }, "Rosario Matthew"),
                  createVNode("h6", { class: "designation" }, "Web Developer"),
                  createVNode("div", { class: "progress-item" }, [
                    createVNode("div", { class: "progress-line" }, [
                      createVNode("div", {
                        class: "progress-bar-line",
                        style: { "width": "90%" }
                      }, [
                        createVNode("span", { class: "percent" }, "90%")
                      ])
                    ]),
                    createVNode("div", { class: "progress-info" }, [
                      createVNode("span", { class: "title" }, "Professional Skill")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "shape-style" }, [
                createVNode("img", {
                  class: "shape-style1",
                  src: _imports_3,
                  alt: "Image"
                }),
                createVNode("img", {
                  class: "shape-style2",
                  src: _imports_4,
                  alt: "Image"
                }),
                createVNode("img", {
                  class: "shape-style3",
                  src: _imports_5,
                  alt: "Image"
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "team-member" }, {
            default: withCtx(() => [
              createVNode("div", { class: "thumb" }, [
                createVNode("img", {
                  src: _imports_7,
                  alt: "Image"
                })
              ]),
              createVNode("div", { class: "content" }, [
                createVNode("div", { class: "member-info" }, [
                  createVNode("div", { class: "separator-line" }, [
                    createVNode("img", {
                      src: _imports_1,
                      alt: "Images"
                    })
                  ]),
                  createVNode("h4", { class: "name" }, "Tyson Holiday"),
                  createVNode("h6", { class: "designation" }, "Digital Marketer"),
                  createVNode("div", { class: "progress-item" }, [
                    createVNode("div", { class: "progress-line" }, [
                      createVNode("div", {
                        class: "progress-bar-line",
                        style: { "width": "80%" }
                      }, [
                        createVNode("span", { class: "percent" }, "80%")
                      ])
                    ]),
                    createVNode("div", { class: "progress-info" }, [
                      createVNode("span", { class: "title" }, "Professional Skill")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "shape-style" }, [
                createVNode("img", {
                  class: "shape-style1",
                  src: _imports_3,
                  alt: "Image"
                }),
                createVNode("img", {
                  class: "shape-style2",
                  src: _imports_4,
                  alt: "Image"
                }),
                createVNode("img", {
                  class: "shape-style3",
                  src: _imports_5,
                  alt: "Image"
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TeamSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TeamSection as default
};
//# sourceMappingURL=TeamSection-79856b08.js.map
