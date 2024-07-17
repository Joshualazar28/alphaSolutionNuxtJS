import { c as _imports_1, a as __nuxt_component_0$1, b as __nuxt_component_1$1 } from "./logo-db90386b.js";
import __nuxt_component_2$1 from "./PageTitle-91a918ca.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-15b2078b.js";
import __nuxt_component_1 from "./ServiceCategoryWidget-19919ffa.js";
import __nuxt_component_2 from "./WidgetVideo-63d54c05.js";
import __nuxt_component_3$1 from "./WidgetSocial-f263891f.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./line-s2-d4bf72eb.js";
import { _ as _export_sfc } from "../server.mjs";
import { a as __nuxt_component_4, b as __nuxt_component_5 } from "./Footer-5a36eb2a.js";
import "ufo";
import "hookable";
import "./play-d4f9c4c3.js";
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
const _imports_0 = "" + __publicAssetsURL("images/photos/service1.jpg");
const _imports_3 = "" + __publicAssetsURL("images/photos/signature.png");
const _sfc_main$1 = {
  components: {
    ServiceCategoryWidget: () => import("./ServiceCategoryWidget-19919ffa.js"),
    WidgetVideo: () => import("./WidgetVideo-63d54c05.js"),
    WidgetSocial: () => import("./WidgetSocial-f263891f.js")
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_ServiceCategoryWidget = __nuxt_component_1;
  const _component_WidgetVideo = __nuxt_component_2;
  const _component_WidgetSocial = __nuxt_component_3$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-details-area" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="service-details-column"><div class="service-details-content"><div class="thumb" data-aos="fade-up" data-aos-duration="1000"><img${ssrRenderAttr("src", _imports_0)} alt="image"></div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/service",
    class: "category"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Business / Marketing`);
      } else {
        return [
          createTextVNode("Business / Marketing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="title">Business Consulting.</h2><div class="separator-line"><img class="me-1"${ssrRenderAttr("src", _imports_0$1)} alt="shape image"><img${ssrRenderAttr("src", _imports_1)} alt="shape image"></div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39; standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p><p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39; standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book.</p><blockquote class="blockquote" data-aos="fade-up" data-aos-duration="1000"><p>Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s, scrambled it make a type specimen book.</p><img class="me-1"${ssrRenderAttr("src", _imports_3)} alt="shape image"></blockquote><h2 class="title">How To Work?</h2><div class="separator-line"><img class="me-1"${ssrRenderAttr("src", _imports_0$1)} alt="shape image"><img${ssrRenderAttr("src", _imports_1)} alt="shape image"></div><p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39; standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book.</p><ul class="list-style2"><li><span class="icon"><i class="icofont-checked"></i></span> <span>Industry&#39; standard dummy text ever since the type book.</span></li><li><span class="icon"><i class="icofont-checked"></i></span> <span>It is a long established fact that reader will be distracted content.</span></li><li><span class="icon"><i class="icofont-checked"></i></span> <span>Many desktop publishing packages and web page editors.</span></li><li><span class="icon"><i class="icofont-checked"></i></span> <span>Variou version have evolved over the year sometimes accident.</span></li></ul><p class="mb-34">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39; standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p><h2 class="title">Find Solution.</h2><div class="separator-line"><img class="me-1"${ssrRenderAttr("src", _imports_0$1)} alt="shape image"><img${ssrRenderAttr("src", _imports_1)} alt="shape image"></div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39; standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39; standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book.</p></div><div class="sidebar-area">`);
  _push(ssrRenderComponent(_component_ServiceCategoryWidget, null, null, _parent));
  _push(ssrRenderComponent(_component_WidgetVideo, null, null, _parent));
  _push(ssrRenderComponent(_component_WidgetSocial, null, null, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceDetailsWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const ServiceDetailsWrapper = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_3
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
    ServiceDetailsWrapper: () => Promise.resolve().then(function() {
      return ServiceDetailsWrapper;
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
  const _component_Header = __nuxt_component_0$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_1$1;
  const _component_PageTitle = __nuxt_component_2$1;
  const _component_ServiceDetailsWrapper = __nuxt_component_3;
  const _component_ContactDevider = __nuxt_component_4;
  const _component_Footer = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-details-page-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_PageTitle, {
    title: "Business Consulting",
    breadcrumbTitle: "Service Details"
  }, null, _parent));
  _push(ssrRenderComponent(_component_ServiceDetailsWrapper, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactDevider, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const serviceDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  serviceDetails as default
};
//# sourceMappingURL=service-details-83ea5423.js.map
