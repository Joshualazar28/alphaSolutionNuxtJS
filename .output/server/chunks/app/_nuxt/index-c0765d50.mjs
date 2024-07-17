import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { a as __nuxt_component_0$1, b as __nuxt_component_1, _ as _imports_1$1$1, h as _imports_4$1, i as _imports_5, j as _imports_6, c as _imports_1$2 } from './logo-db90386b.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-15b2078b.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, EffectFade } from 'swiper/core';
import { useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as __nuxt_component_4$1, b as __nuxt_component_5$1, _ as _imports_0$2 } from './Footer-5a36eb2a.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$3 } from './ServiceItem-af0770f9.mjs';
import { _ as _imports_0$3 } from './line-s2-d4bf72eb.mjs';
import { a as __nuxt_component_6, _ as __nuxt_component_7 } from './TestimonialOne-acda319e.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_1$1 = "" + publicAssetsURL("images/slider/line1.jpg");
const _imports_2$1 = "" + publicAssetsURL("images/shape/2.png");
const _imports_7 = "" + publicAssetsURL("images/slider/header2.jpg");
SwiperCore.use([Navigation, EffectFade]);
const _sfc_main$6 = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: ".home-slider-container .swiper-button-next",
          prevEl: ".home-slider-container .swiper-button-prev"
        }
      }
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "home-slider-area slider-default" }, _attrs))}><div class="home-slider-content"><div class="home-slider-container">`);
  _push(ssrRenderComponent(_component_swiper, {
    speed: 1e3,
    navigation: $data.swiperOptions.navigation,
    effect: "fade",
    loop: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, {
          class: "home-slider-item",
          style: { backgroundImage: `url('/images/slider/bg1.jpg')` }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="slider-content-area"${_scopeId2}><div class="content"${_scopeId2}><div class="subtitle-content"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$2)} alt="Images"${_scopeId2}><h6${_scopeId2}>Since 1985</h6></div><div class="tittle-wrp"${_scopeId2}><h2${_scopeId2}>Your Satisfaction, <span${_scopeId2}>Our Priority.</span></h2></div><p${_scopeId2}> Lorem Ipsum is simply dummy text printing typesetting industry. orem Ipsum has been the industry. </p>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                to: "/service",
                class: "btn btn-theme btn-theme-color2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`All Services <i class="icon icofont-long-arrow-right"${_scopeId3}></i>`);
                  } else {
                    return [
                      createTextVNode("All Services "),
                      createVNode("i", { class: "icon icofont-long-arrow-right" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="layer-style"${_scopeId2}><div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_1$1)} alt="Images"${_scopeId2}></div><div class="success-rate"${_scopeId2}><div class="content"${_scopeId2}>98% <span${_scopeId2}>Successful Project</span></div></div><div class="shape-style1"${_scopeId2}><img${ssrRenderAttr("src", _imports_1$1$1)} alt="Images"${_scopeId2}></div><div class="shape-style2"${_scopeId2}><img${ssrRenderAttr("src", _imports_2$1)} alt="Images"${_scopeId2}></div><div class="shape-style3"${_scopeId2}><img${ssrRenderAttr("src", _imports_4$1)} alt="Images"${_scopeId2}></div><div class="shape-style4"${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} alt="Images"${_scopeId2}></div><div class="shape-style5"${_scopeId2}><img${ssrRenderAttr("src", _imports_6)} alt="Images"${_scopeId2}></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "slider-content-area" }, [
                  createVNode("div", { class: "content" }, [
                    createVNode("div", { class: "subtitle-content" }, [
                      createVNode("img", {
                        src: _imports_0$2,
                        alt: "Images"
                      }),
                      createVNode("h6", null, "Since 1985")
                    ]),
                    createVNode("div", { class: "tittle-wrp" }, [
                      createVNode("h2", null, [
                        createTextVNode("Your Satisfaction, "),
                        createVNode("span", null, "Our Priority.")
                      ])
                    ]),
                    createVNode("p", null, " Lorem Ipsum is simply dummy text printing typesetting industry. orem Ipsum has been the industry. "),
                    createVNode(_component_nuxt_link, {
                      to: "/service",
                      class: "btn btn-theme btn-theme-color2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("All Services "),
                        createVNode("i", { class: "icon icofont-long-arrow-right" })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "layer-style" }, [
                    createVNode("div", { class: "thumb" }, [
                      createVNode("img", {
                        src: _imports_1$1,
                        alt: "Images"
                      })
                    ]),
                    createVNode("div", { class: "success-rate" }, [
                      createVNode("div", { class: "content" }, [
                        createTextVNode("98% "),
                        createVNode("span", null, "Successful Project")
                      ])
                    ]),
                    createVNode("div", { class: "shape-style1" }, [
                      createVNode("img", {
                        src: _imports_1$1$1,
                        alt: "Images"
                      })
                    ]),
                    createVNode("div", { class: "shape-style2" }, [
                      createVNode("img", {
                        src: _imports_2$1,
                        alt: "Images"
                      })
                    ]),
                    createVNode("div", { class: "shape-style3" }, [
                      createVNode("img", {
                        src: _imports_4$1,
                        alt: "Images"
                      })
                    ]),
                    createVNode("div", { class: "shape-style4" }, [
                      createVNode("img", {
                        src: _imports_5,
                        alt: "Images"
                      })
                    ]),
                    createVNode("div", { class: "shape-style5" }, [
                      createVNode("img", {
                        src: _imports_6,
                        alt: "Images"
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, {
          class: "home-slider-item",
          style: { backgroundImage: `url('/images/slider/bg1.jpg')` }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="slider-content-area"${_scopeId2}><div class="content"${_scopeId2}><div class="subtitle-content"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$2)} alt="Images"${_scopeId2}><h6${_scopeId2}>Since 1995</h6></div><div class="tittle-wrp"${_scopeId2}><h2${_scopeId2}>Transforming <span${_scopeId2}>Customer Service.</span></h2></div><p${_scopeId2}> Lorem Ipsum is simply dummy text printing typesetting industry. orem Ipsum has been the industry. </p>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                to: "/service",
                class: "btn btn-theme btn-theme-color2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`All Services <i class="icon icofont-long-arrow-right"${_scopeId3}></i>`);
                  } else {
                    return [
                      createTextVNode("All Services "),
                      createVNode("i", { class: "icon icofont-long-arrow-right" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="layer-style"${_scopeId2}><div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_7)} alt="Images"${_scopeId2}></div><div class="success-rate"${_scopeId2}><div class="content"${_scopeId2}>85% <span${_scopeId2}>Successful Project</span></div></div><div class="shape-style1"${_scopeId2}><img${ssrRenderAttr("src", _imports_1$1$1)} alt="Images"${_scopeId2}></div><div class="shape-style2"${_scopeId2}><img${ssrRenderAttr("src", _imports_2$1)} alt="Images"${_scopeId2}></div><div class="shape-style3"${_scopeId2}><img${ssrRenderAttr("src", _imports_4$1)} alt="Images"${_scopeId2}></div><div class="shape-style4"${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} alt="Images"${_scopeId2}></div><div class="shape-style5"${_scopeId2}><img${ssrRenderAttr("src", _imports_6)} alt="Images"${_scopeId2}></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "slider-content-area" }, [
                  createVNode("div", { class: "content" }, [
                    createVNode("div", { class: "subtitle-content" }, [
                      createVNode("img", {
                        src: _imports_0$2,
                        alt: "Images"
                      }),
                      createVNode("h6", null, "Since 1995")
                    ]),
                    createVNode("div", { class: "tittle-wrp" }, [
                      createVNode("h2", null, [
                        createTextVNode("Transforming "),
                        createVNode("span", null, "Customer Service.")
                      ])
                    ]),
                    createVNode("p", null, " Lorem Ipsum is simply dummy text printing typesetting industry. orem Ipsum has been the industry. "),
                    createVNode(_component_nuxt_link, {
                      to: "/service",
                      class: "btn btn-theme btn-theme-color2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("All Services "),
                        createVNode("i", { class: "icon icofont-long-arrow-right" })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "layer-style" }, [
                    createVNode("div", { class: "thumb" }, [
                      createVNode("img", {
                        src: _imports_7,
                        alt: "Images"
                      })
                    ]),
                    createVNode("div", { class: "success-rate" }, [
                      createVNode("div", { class: "content" }, [
                        createTextVNode("85% "),
                        createVNode("span", null, "Successful Project")
                      ])
                    ]),
                    createVNode("div", { class: "shape-style1" }, [
                      createVNode("img", {
                        src: _imports_1$1$1,
                        alt: "Images"
                      })
                    ]),
                    createVNode("div", { class: "shape-style2" }, [
                      createVNode("img", {
                        src: _imports_2$1,
                        alt: "Images"
                      })
                    ]),
                    createVNode("div", { class: "shape-style3" }, [
                      createVNode("img", {
                        src: _imports_4$1,
                        alt: "Images"
                      })
                    ]),
                    createVNode("div", { class: "shape-style4" }, [
                      createVNode("img", {
                        src: _imports_5,
                        alt: "Images"
                      })
                    ]),
                    createVNode("div", { class: "shape-style5" }, [
                      createVNode("img", {
                        src: _imports_6,
                        alt: "Images"
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, {
            class: "home-slider-item",
            style: { backgroundImage: `url('/images/slider/bg1.jpg')` }
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "slider-content-area" }, [
                createVNode("div", { class: "content" }, [
                  createVNode("div", { class: "subtitle-content" }, [
                    createVNode("img", {
                      src: _imports_0$2,
                      alt: "Images"
                    }),
                    createVNode("h6", null, "Since 1985")
                  ]),
                  createVNode("div", { class: "tittle-wrp" }, [
                    createVNode("h2", null, [
                      createTextVNode("Your Satisfaction, "),
                      createVNode("span", null, "Our Priority.")
                    ])
                  ]),
                  createVNode("p", null, " Lorem Ipsum is simply dummy text printing typesetting industry. orem Ipsum has been the industry. "),
                  createVNode(_component_nuxt_link, {
                    to: "/service",
                    class: "btn btn-theme btn-theme-color2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("All Services "),
                      createVNode("i", { class: "icon icofont-long-arrow-right" })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "layer-style" }, [
                  createVNode("div", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_1$1,
                      alt: "Images"
                    })
                  ]),
                  createVNode("div", { class: "success-rate" }, [
                    createVNode("div", { class: "content" }, [
                      createTextVNode("98% "),
                      createVNode("span", null, "Successful Project")
                    ])
                  ]),
                  createVNode("div", { class: "shape-style1" }, [
                    createVNode("img", {
                      src: _imports_1$1$1,
                      alt: "Images"
                    })
                  ]),
                  createVNode("div", { class: "shape-style2" }, [
                    createVNode("img", {
                      src: _imports_2$1,
                      alt: "Images"
                    })
                  ]),
                  createVNode("div", { class: "shape-style3" }, [
                    createVNode("img", {
                      src: _imports_4$1,
                      alt: "Images"
                    })
                  ]),
                  createVNode("div", { class: "shape-style4" }, [
                    createVNode("img", {
                      src: _imports_5,
                      alt: "Images"
                    })
                  ]),
                  createVNode("div", { class: "shape-style5" }, [
                    createVNode("img", {
                      src: _imports_6,
                      alt: "Images"
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["style"]),
          createVNode(_component_swiper_slide, {
            class: "home-slider-item",
            style: { backgroundImage: `url('/images/slider/bg1.jpg')` }
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "slider-content-area" }, [
                createVNode("div", { class: "content" }, [
                  createVNode("div", { class: "subtitle-content" }, [
                    createVNode("img", {
                      src: _imports_0$2,
                      alt: "Images"
                    }),
                    createVNode("h6", null, "Since 1995")
                  ]),
                  createVNode("div", { class: "tittle-wrp" }, [
                    createVNode("h2", null, [
                      createTextVNode("Transforming "),
                      createVNode("span", null, "Customer Service.")
                    ])
                  ]),
                  createVNode("p", null, " Lorem Ipsum is simply dummy text printing typesetting industry. orem Ipsum has been the industry. "),
                  createVNode(_component_nuxt_link, {
                    to: "/service",
                    class: "btn btn-theme btn-theme-color2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("All Services "),
                      createVNode("i", { class: "icon icofont-long-arrow-right" })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "layer-style" }, [
                  createVNode("div", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_7,
                      alt: "Images"
                    })
                  ]),
                  createVNode("div", { class: "success-rate" }, [
                    createVNode("div", { class: "content" }, [
                      createTextVNode("85% "),
                      createVNode("span", null, "Successful Project")
                    ])
                  ]),
                  createVNode("div", { class: "shape-style1" }, [
                    createVNode("img", {
                      src: _imports_1$1$1,
                      alt: "Images"
                    })
                  ]),
                  createVNode("div", { class: "shape-style2" }, [
                    createVNode("img", {
                      src: _imports_2$1,
                      alt: "Images"
                    })
                  ]),
                  createVNode("div", { class: "shape-style3" }, [
                    createVNode("img", {
                      src: _imports_4$1,
                      alt: "Images"
                    })
                  ]),
                  createVNode("div", { class: "shape-style4" }, [
                    createVNode("img", {
                      src: _imports_5,
                      alt: "Images"
                    })
                  ]),
                  createVNode("div", { class: "shape-style5" }, [
                    createVNode("img", {
                      src: _imports_6,
                      alt: "Images"
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["style"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="swiper-button-next"><i class="icofont-rounded-double-right"></i></div><div class="swiper-button-prev"><i class="icofont-rounded-double-left"></i></div></div></div><div class="home-slider-sidebar" data-aos="fade-zoom-in" data-aos-duration="1300"><div class="social-icon"><a href="#"><i class="icofont-facebook"></i></a><a href="#"><i class="icofont-skype"></i></a><a href="#"><i class="icofont-twitter"></i></a></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSlider.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const HeroSlider = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_2
});
const _imports_0$1 = "" + publicAssetsURL("images/about/about1.jpg");
const _imports_1 = "" + publicAssetsURL("images/shape/circle-line1.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-area about-default-area" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5 md-text-center"><div class="layer-style" data-aos="fade-up" data-aos-duration="1000"><div class="thumb tilt-animation"><img${ssrRenderAttr("src", _imports_0$1)} alt="Images"></div><div class="shape-style1"><img${ssrRenderAttr("src", _imports_1)} alt="Images"></div><div class="experience-time"><div class="content"> 32<sup>+</sup> <span>Years of Experience</span></div></div></div></div><div class="col-lg-6 offset-lg-1"><div class="about-content"><div class="section-title xs-text-center" data-aos="fade-up" data-aos-duration="1000"><h2 class="title"> We Have Leadership Strong <span class="bottom-style">Experience</span> In Business. </h2><div class="desc"><p class="mt-20"> Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever <u class="text-theme-color2">since the 1500s, when an unknown printer took</u> type specimen book survived not only centuries. </p></div></div><div class="list-icon-style" data-aos="fade-up" data-aos-duration="1200"><ul><li><i class="icon icofont-clock-time"></i> Save Your Time</li><li><i class="icon icofont-chart-growth"></i> Grow Business</li><li><i class="icon icofont-live-support"></i> 24/7 Support</li><li><i class="icon icofont-badge"></i> Trusted Partner</li></ul></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutOne.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const AboutOne = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_3
});
const _imports_2 = "" + publicAssetsURL("images/shape/6.png");
const _imports_3$1 = "" + publicAssetsURL("images/shape/7.png");
const _sfc_main$4 = {
  data() {
    return {
      services: [
        {
          icon: "/images/icons/s1.png",
          title: "Customer Retention",
          desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
        },
        {
          icon: "/images/icons/s2.png",
          title: "Outbound Requests",
          desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
        },
        {
          icon: "/images/icons/s3.png",
          title: "Inbound Requests",
          desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
        },
        {
          icon: "/images/icons/s4.png",
          title: "Customer Support",
          desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
        },
        {
          icon: "/images/icons/s5.png",
          title: "Billing and Payment",
          desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
        },
        {
          icon: "/images/icons/s6.png",
          title: "Live Chat Support",
          desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
        }
      ]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ServiceItem = __nuxt_component_0$3;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-area service-default-area" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8 col-xl-6 m-auto"><div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000"><h2 class="title">What We Do?</h2><div class="separator-line mt-14"><img class="me-1"${ssrRenderAttr("src", _imports_0$3)} alt="Images"><img${ssrRenderAttr("src", _imports_1$2)} alt="Images"></div><div class="desc"><p class="mt-21">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry&#39;s standard dummy text ever since the printer took</p></div></div></div></div><div class="row icon-box-style1"><!--[-->`);
  ssrRenderList($data.services, (service, index2) => {
    _push(`<div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1100">`);
    _push(ssrRenderComponent(_component_ServiceItem, { service }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="layer-shape"><img class="layer-shape-one"${ssrRenderAttr("src", _imports_2)} alt="shape"><img class="layer-shape-two"${ssrRenderAttr("src", _imports_3$1)} alt="shape"></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceOne.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const ServiceOne = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_4
});
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion" }, _attrs))}><div class="accordion" id="accordionExample"><div class="accordion-item card"><h2 class="card-header" id="headingOne"><button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><span class="icon-box"><i class="icon icofont-plus"></i><i class="icon icofont-minus"></i></span> What services do you offer? </button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body"> Lorem Ipsum is simply dummy text of the printing and typesetting industry has industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book. It has survived not only centuries, but also the leap into electronic. </div></div></div><div class="accordion-item card"><h2 class="card-header" id="headingTwo"><button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span class="icon-box"><i class="icon icofont-plus"></i><i class="icon icofont-minus"></i></span> Can you handle technical support for my product? </button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body"> Lorem Ipsum is simply dummy text of the printing and typesetting industry has industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book. It has survived not only centuries, but also the leap into electronic. </div></div></div><div class="accordion-item card"><h2 class="card-header" id="headingThree"><button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span class="icon-box"><i class="icon icofont-plus"></i><i class="icon icofont-minus"></i></span> How do you ensure the quality of your support services? </button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body"> Lorem Ipsum is simply dummy text of the printing and typesetting industry has industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book. It has survived not only centuries, but also the leap into electronic. </div></div></div><div class="accordion-item card"><h2 class="card-header" id="headingFour"><button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><span class="icon-box"><i class="icon icofont-plus"></i><i class="icon icofont-minus"></i></span> What if I have a billing issue? </button></h2><div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample"><div class="accordion-body"> Lorem Ipsum is simply dummy text of the printing and typesetting industry has industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book. It has survived not only centuries, but also the leap into electronic. </div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccordionStyleOne.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const AccordionStyleOne = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const _imports_0 = "" + publicAssetsURL("images/photos/faq01.jpg");
const _imports_3 = "" + publicAssetsURL("images/shape/circle-line2.png");
const _imports_4 = "" + publicAssetsURL("images/shape/circle-line3.png");
const _sfc_main$2 = {
  components: {
    AccordionStyleOne: () => Promise.resolve().then(function() {
      return AccordionStyleOne;
    })
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AccordionStyleOne = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "faq-area faq-default-area",
    style: { backgroundImage: `url('/images/photos/bg-faq.jpg')` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8"><div class="faq-content" data-aos="fade-up" data-aos-duration="1100"><div class="section-title xs-text-center"><h2 class="title text-white">You Are Confused! Question &amp; <span class="bottom-color-style2">Answers.</span></h2></div><div class="accordion-content">`);
  _push(ssrRenderComponent(_component_AccordionStyleOne, null, null, _parent));
  _push(`</div></div></div></div></div><div class="layer-shape"><div class="layer-shape-one" data-aos="fade-up" data-aos-duration="1000"><img class="img-shape1 tilt-animation"${ssrRenderAttr("src", _imports_0)} alt="Virtuf-Image"><img class="img-shape2"${ssrRenderAttr("src", _imports_1$1$1)} alt="Virtuf-Image"><img class="img-shape3"${ssrRenderAttr("src", _imports_2$1)} alt="Virtuf-Image"></div><div class="layer-shape-two"><img${ssrRenderAttr("src", _imports_3)} alt="Virtuf-Image"></div><div class="layer-shape-three"><img${ssrRenderAttr("src", _imports_4)} alt="Virtuf-Image"></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqOne.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const FaqOne = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_5
});
const _sfc_main$1 = {
  data() {
    return {
      blogs: [
        {
          id: 101,
          imgSrc: "/images/blog/blog1.jpg",
          title: "Enhancing Customer Satisfaction in CSR:",
          excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard printer.",
          date: "21 March, 2021",
          comment: 2566,
          like: 750,
          category: "Business/Marketing"
        },
        {
          id: 102,
          imgSrc: "/images/blog/conpany2.jpg",
          title: "Alway make the client upto date with our Service Provider Team.",
          excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard printer.",
          date: "17 June, 2021",
          comment: 3345,
          like: 980,
          category: "Development/Design"
        },
        {
          id: 103,
          imgSrc: "/images/blog/company3.jpg",
          title: "We help our client and make them happy.",
          excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard printer.",
          date: "28 May, 2021",
          comment: 1450,
          like: 380,
          category: "Fashion/Style"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-area blog-default-area" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6 m-auto"><div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000"><h2 class="title">News Of Company</h2><div class="separator-line mt-14"><img class="me-1"${ssrRenderAttr("src", _imports_0$3)} alt="image"><img${ssrRenderAttr("src", _imports_1$2)} alt="image"></div><div class="desc"><p class="mt-21">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry&#39;s standard dummy text ever since the printer took</p></div></div></div></div><div class="row" data-aos="fade-up" data-aos-duration="1100"><!--[-->`);
  ssrRenderList($data.blogs, (blog, index2) => {
    _push(`<div class="col-md-6 col-lg-4"><div class="post-item mb-md-50"><div class="thumb">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", blog.imgSrc)}${ssrRenderAttr("alt", blog.title)}${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: blog.imgSrc,
              alt: blog.title
            }, null, 8, ["src", "alt"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<div class="meta">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/blog",
      class: "post-date"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(blog.date)}`);
        } else {
          return [
            createTextVNode(toDisplayString(blog.date), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<button class="post-comment"><i class="icofont-speech-comments"></i> ${ssrInterpolate(blog.comment)}</button><button class="post-like"><i class="icofont-heart"></i>${ssrInterpolate(blog.like)}</button></div></div><div class="content"><h4 class="title">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(blog.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(blog.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h4><p>${ssrInterpolate(blog.excerpt)}</p>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/blog-details",
      class: "btn btn-theme btn-border btn-gray"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Read More <i class="icon icofont-long-arrow-right"${_scopeId}></i>`);
        } else {
          return [
            createTextVNode(" Read More "),
            createVNode("i", { class: "icon icofont-long-arrow-right" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const BlogSection = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_8
});
const _sfc_main = {
  components: {
    Header: () => import('./logo-db90386b.mjs').then(function(n) {
      return n.H;
    }),
    OffCanvasMobileMenu: () => import('./logo-db90386b.mjs').then(function(n) {
      return n.O;
    }),
    HeroSlider: () => Promise.resolve().then(function() {
      return HeroSlider;
    }),
    AboutOne: () => Promise.resolve().then(function() {
      return AboutOne;
    }),
    FunFactOne: () => import('./FunFactOne-04037aac.mjs'),
    ServiceOne: () => Promise.resolve().then(function() {
      return ServiceOne;
    }),
    FaqOne: () => Promise.resolve().then(function() {
      return FaqOne;
    }),
    TeamSection: () => import('./TeamSection-79856b08.mjs'),
    PortfolioSection: () => import('./PortfolioSection-f6749236.mjs'),
    TestimonialOne: () => import('./TestimonialOne-acda319e.mjs').then(function(n) {
      return n.T;
    }),
    BrandLogoSection: () => import('./TestimonialOne-acda319e.mjs').then(function(n) {
      return n.B;
    }),
    BlogSection: () => Promise.resolve().then(function() {
      return BlogSection;
    }),
    ContactDevider: () => import('./Footer-5a36eb2a.mjs').then(function(n) {
      return n.C;
    }),
    Footer: () => import('./Footer-5a36eb2a.mjs').then(function(n) {
      return n.F;
    })
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_HeroSlider = __nuxt_component_2;
  const _component_AboutOne = __nuxt_component_3;
  const _component_ServiceOne = __nuxt_component_4;
  const _component_FaqOne = __nuxt_component_5;
  const _component_TestimonialOne = __nuxt_component_6;
  const _component_BrandLogoSection = __nuxt_component_7;
  const _component_BlogSection = __nuxt_component_8;
  const _component_ContactDevider = __nuxt_component_4$1;
  const _component_Footer = __nuxt_component_5$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroSlider, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutOne, null, null, _parent));
  _push(ssrRenderComponent(_component_ServiceOne, null, null, _parent));
  _push(ssrRenderComponent(_component_FaqOne, null, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialOne, null, null, _parent));
  _push(ssrRenderComponent(_component_BrandLogoSection, null, null, _parent));
  _push(ssrRenderComponent(_component_BlogSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactDevider, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-c0765d50.mjs.map
