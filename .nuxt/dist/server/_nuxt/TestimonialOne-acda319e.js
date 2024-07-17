import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./Footer-5a36eb2a.js";
import { _ as _export_sfc } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper/core";
const _imports_1 = "" + __publicAssetsURL("images/shape/11.png");
const _imports_2$1 = "" + __publicAssetsURL("images/shape/12.png");
const _imports_3$1 = "" + __publicAssetsURL("images/shape/13.png");
const _imports_4 = "" + __publicAssetsURL("images/shape/14.png");
const _sfc_main$1 = {
  data() {
    return {
      logos: [
        {
          logoSrc: "/images/brand-logo/1.png",
          alt: "logo 01"
        },
        {
          logoSrc: "/images/brand-logo/2.png",
          alt: "logo 02"
        },
        {
          logoSrc: "/images/brand-logo/3.png",
          alt: "logo 03"
        },
        {
          logoSrc: "/images/brand-logo/4.png",
          alt: "logo 04"
        },
        {
          logoSrc: "/images/brand-logo/5.png",
          alt: "logo 05"
        },
        {
          logoSrc: "/images/brand-logo/6.png",
          alt: "logo 06"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "brand-logo-area brand-logo-default-area",
    style: { backgroundImage: `url('/images/photos/bg-brand.jpg')` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5 col-xl-5"><div class="section-title xs-text-center" data-aos="fade-up" data-aos-duration="1000"><div class="subtitle-content xs-d-i-flex"><img${ssrRenderAttr("src", _imports_0$1)} alt="image"><h5>Trusted Partner</h5></div><h2 class="title text-white mb-lg-40 mb-80">We’re Work With Long <span>Time.</span></h2><a href="#" class="btn btn-theme btn-border">Join Us Today <i class="icon icofont-long-arrow-right"></i></a></div></div><div class="col-lg-7 col-xl-6 offset-xl-1"><div class="brand-logo-content" data-aos="fade-up" data-aos-duration="1000"><div class="row"><!--[-->`);
  ssrRenderList($data.logos, (logo, index) => {
    _push(`<div class="col-sm-4 col-6"><div class="brand-logo-item"><img${ssrRenderAttr("src", logo.logoSrc)}${ssrRenderAttr("alt", logo.alt)}></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div><div class="layer-shape"><img class="shape-style1"${ssrRenderAttr("src", _imports_1)} alt="image"><img class="shape-style2"${ssrRenderAttr("src", _imports_2$1)} alt="image"><img class="shape-style3"${ssrRenderAttr("src", _imports_3$1)} alt="image"><img class="shape-style4"${ssrRenderAttr("src", _imports_4)} alt="image"></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandLogoSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const BrandLogoSection = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_7
});
const _imports_0 = "" + __publicAssetsURL("images/testimonial/happyclient.jpg");
const _imports_2 = "" + __publicAssetsURL("images/shape/line2.png");
const _imports_3 = "" + __publicAssetsURL("images/icons/quote-icon.png");
SwiperCore.use([Navigation]);
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      testimonialSlider: {
        navigation: {
          nextEl: ".testimonial-slider-container .swiper-button-next",
          prevEl: ".testimonial-slider-container .swiper-button-prev"
        }
      },
      testimonials: [
        {
          name: "Reinaldo Thurman",
          designation: "Senior Consultant",
          imgSrc: "/images/icons/t1.png",
          desc: "It is long established fact that reader will distract by the readable content a page when looking atten layout. The point of using  and that it has a more normal distribution of letters, as opposed using making it look like readable English."
        },
        {
          name: "Jannat Maya",
          designation: "Marketing Consultant",
          imgSrc: "/images/icons/t1.png",
          desc: "Lorem ipsum dolor sit amet, marketing consultant elit eiusmod tempor incididunt labore et doloreant magna aliqua. Enim minim veniam, adritu ullamco marketing consultant normal distribution opostent using making it look like readable English."
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial-area testimonial-default-area" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5 col-xl-5 md-text-center"><div class="shape-layer tilt-animation" data-aos="fade-up" data-aos-duration="1100"><img${ssrRenderAttr("src", _imports_0)} alt="Virtuf-HasTech"></div></div><div class="col-lg-7 col-xl-7"><div class="section-title xs-text-center" data-aos="fade-up" data-aos-duration="1000"><div class="subtitle-content xs-d-i-flex"><img${ssrRenderAttr("src", _imports_0$1)} alt="Virtuf-HasTech"><h5>Testimonial</h5></div><h2 class="title">Happy Clients. They Are Think <span>About Us.</span></h2><div class="separator-line"><img${ssrRenderAttr("src", _imports_0$1)} alt="Virtuf-HasTech"><img${ssrRenderAttr("src", _imports_2)} alt="Virtuf-HasTech"></div></div><div class="testimonial-content md-pl-0 pl-lg-30 pl-70" data-aos="fade-up" data-aos-duration="1100"><div class="testimonial-slider-content position-relative"><div class="testimonial-slider-container">`);
  _push(ssrRenderComponent(_component_swiper, {
    speed: 1e3,
    navigation: $data.testimonialSlider.navigation
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.testimonials, (testimonial, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            class: "testimonial-single",
            key: index
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="client-content"${_scopeId2}><p${_scopeId2}>${ssrInterpolate(testimonial.desc)}</p><img class="quote-icon"${ssrRenderAttr("src", _imports_3)} alt="Icon"${_scopeId2}></div><div class="client-info"${_scopeId2}><img class="shape-line-img"${ssrRenderAttr("src", _imports_0$1)} alt="Virtuf-HasTech"${_scopeId2}><h4 class="name"${_scopeId2}>${ssrInterpolate(testimonial.name)}</h4><h6 class="designation"${_scopeId2}>${ssrInterpolate(testimonial.designation)}</h6></div><div class="icon-box"${_scopeId2}><img${ssrRenderAttr("src", testimonial.imgSrc)}${ssrRenderAttr("alt", testimonial.name)}${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", { class: "client-content" }, [
                    createVNode("p", null, toDisplayString(testimonial.desc), 1),
                    createVNode("img", {
                      class: "quote-icon",
                      src: _imports_3,
                      alt: "Icon"
                    })
                  ]),
                  createVNode("div", { class: "client-info" }, [
                    createVNode("img", {
                      class: "shape-line-img",
                      src: _imports_0$1,
                      alt: "Virtuf-HasTech"
                    }),
                    createVNode("h4", { class: "name" }, toDisplayString(testimonial.name), 1),
                    createVNode("h6", { class: "designation" }, toDisplayString(testimonial.designation), 1)
                  ]),
                  createVNode("div", { class: "icon-box" }, [
                    createVNode("img", {
                      src: testimonial.imgSrc,
                      alt: testimonial.name
                    }, null, 8, ["src", "alt"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.testimonials, (testimonial, index) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              class: "testimonial-single",
              key: index
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "client-content" }, [
                  createVNode("p", null, toDisplayString(testimonial.desc), 1),
                  createVNode("img", {
                    class: "quote-icon",
                    src: _imports_3,
                    alt: "Icon"
                  })
                ]),
                createVNode("div", { class: "client-info" }, [
                  createVNode("img", {
                    class: "shape-line-img",
                    src: _imports_0$1,
                    alt: "Virtuf-HasTech"
                  }),
                  createVNode("h4", { class: "name" }, toDisplayString(testimonial.name), 1),
                  createVNode("h6", { class: "designation" }, toDisplayString(testimonial.designation), 1)
                ]),
                createVNode("div", { class: "icon-box" }, [
                  createVNode("img", {
                    src: testimonial.imgSrc,
                    alt: testimonial.name
                  }, null, 8, ["src", "alt"])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="swiper-button-next"><i class="icofont-long-arrow-up"></i></div><div class="swiper-button-prev"><i class="icofont-long-arrow-down"></i></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const TestimonialOne = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_6
});
export {
  BrandLogoSection as B,
  TestimonialOne as T,
  __nuxt_component_7 as _,
  __nuxt_component_6 as a
};
//# sourceMappingURL=TestimonialOne-acda319e.js.map
