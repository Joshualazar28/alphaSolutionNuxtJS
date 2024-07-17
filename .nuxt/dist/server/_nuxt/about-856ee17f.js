import { _ as _imports_1, a as __nuxt_component_0, b as __nuxt_component_1 } from "./logo-db90386b.js";
import __nuxt_component_2 from "./PageTitle-91a918ca.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _imports_1$1 } from "./line-s4-98b62ee4.js";
import { _ as _imports_0$1, a as __nuxt_component_4$1, b as __nuxt_component_5 } from "./Footer-5a36eb2a.js";
import { _ as __nuxt_component_7, a as __nuxt_component_6 } from "./TestimonialOne-acda319e.js";
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
import "swiper/vue";
import "swiper/core";
const _sfc_main$2 = {
  data() {
    return {
      features: [
        {
          iconSrc: "/images/icons/f1.png",
          title: "Who We Are?"
        },
        {
          iconSrc: "/images/icons/f2.png",
          title: " Mission & Vission"
        },
        {
          iconSrc: "/images/icons/f3.png",
          title: "What We Do?"
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "feature-area feature-about-area" }, _attrs))}><div class="container"><div class="row feature-list" data-aos="fade-up" data-aos-duration="1000"><!--[-->`);
  ssrRenderList($data.features, (feature, index) => {
    _push(`<div class="col-lg-4"><div class="feature-list-item"><div class="icon"><img class="img-icon"${ssrRenderAttr("src", feature.iconSrc)}${ssrRenderAttr("alt", feature.title)}></div> ${ssrInterpolate(feature.title)}</div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const FeatureList = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_3
});
const _imports_0 = "" + __publicAssetsURL("images/about/grow1.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-area" }, _attrs))}><div class="position-relative"><div class="container"><div class="row"><div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-0"><div class="layer-about-style" data-aos="fade-up" data-aos-duration="1000"><div class="thumb tilt-animation"><img${ssrRenderAttr("src", _imports_0)} alt="image"></div><div class="shape-style1"><img${ssrRenderAttr("src", _imports_1)} alt="image"></div><div class="experience-time"><div class="content"> 32<sup>+</sup><div class="line-separetor"><img${ssrRenderAttr("src", _imports_1$1)} alt="image"><img${ssrRenderAttr("src", _imports_1$1)} alt="image"></div><span>Years of Experience</span></div></div></div></div><div class="col-lg-12 col-xl-6"><div class="about-content-style2"><div class="section-title" data-aos="fade-up" data-aos-duration="1000"><div class="subtitle-content"><img${ssrRenderAttr("src", _imports_0$1)} alt="image"><h5>About Us.</h5></div><h2 class="title">Ensuring every customer interaction is <span>exceptional.</span></h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever centuries.</p></div><div class="inner-content" data-aos="fade-up" data-aos-duration="1200"><p><span class="text-block">B</span>omply dummy text of the printing and typesetting industry. has standard dummy text ever since the 1500s, when an unknown printer scrambled it to make a type and specimen book. It has survived not only five leap into electronic typesetting, remaining essentially unchanged popularise with the release Letraset sheets containing.</p><p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type electronic typesetting, remaining essentially.</p><div class="inline-style"><a href="#" class="btn btn-theme btn-border"> Team Members <i class="icon icofont-long-arrow-right"></i></a></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const AboutTwo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_4
});
const _sfc_main = {
  components: {
    Header: () => import("./logo-db90386b.js").then(function(n) {
      return n.H;
    }),
    OffCanvasMobileMenu: () => import("./logo-db90386b.js").then(function(n) {
      return n.O;
    }),
    PageTitle: () => import("./PageTitle-91a918ca.js"),
    FeatureList: () => Promise.resolve().then(function() {
      return FeatureList;
    }),
    AboutTwo: () => Promise.resolve().then(function() {
      return AboutTwo;
    }),
    FunFactOne: () => import("./FunFactOne-04037aac.js"),
    TeamSection: () => import("./TeamSection-79856b08.js"),
    BrandLogoSection: () => import("./TestimonialOne-acda319e.js").then(function(n) {
      return n.B;
    }),
    TestimonialOne: () => import("./TestimonialOne-acda319e.js").then(function(n) {
      return n.T;
    }),
    ContactDevider: () => import("./Footer-5a36eb2a.js").then(function(n) {
      return n.C;
    }),
    Footer: () => import("./Footer-5a36eb2a.js").then(function(n) {
      return n.F;
    })
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_PageTitle = __nuxt_component_2;
  const _component_FeatureList = __nuxt_component_3;
  const _component_AboutTwo = __nuxt_component_4;
  const _component_BrandLogoSection = __nuxt_component_7;
  const _component_TestimonialOne = __nuxt_component_6;
  const _component_ContactDevider = __nuxt_component_4$1;
  const _component_Footer = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-page-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_PageTitle, {
    title: "About Us",
    breadcrumbTitle: "About"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureList, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_BrandLogoSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialOne, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactDevider, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-856ee17f.js.map
