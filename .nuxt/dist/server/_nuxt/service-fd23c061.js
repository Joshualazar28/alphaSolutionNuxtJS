import { a as __nuxt_component_0$1, b as __nuxt_component_1 } from "./logo-db90386b.js";
import __nuxt_component_2 from "./PageTitle-91a918ca.js";
import { _ as __nuxt_component_0 } from "./ServiceItem-af0770f9.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { a as __nuxt_component_4, b as __nuxt_component_5 } from "./Footer-5a36eb2a.js";
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
const _sfc_main$1 = {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ServiceItem = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-area" }, _attrs))}><div class="container"><div class="row icon-box-style1"><!--[-->`);
  ssrRenderList($data.services, (service2, index) => {
    _push(`<div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1100">`);
    _push(ssrRenderComponent(_component_ServiceItem, { service: service2 }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const ServiceWrapper = /* @__PURE__ */ Object.freeze({
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
    ServiceWrapper: () => Promise.resolve().then(function() {
      return ServiceWrapper;
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
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_PageTitle = __nuxt_component_2;
  const _component_ServiceWrapper = __nuxt_component_3;
  const _component_ContactDevider = __nuxt_component_4;
  const _component_Footer = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-page-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_PageTitle, {
    title: "Services",
    breadcrumbTitle: "Services"
  }, null, _parent));
  _push(ssrRenderComponent(_component_ServiceWrapper, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactDevider, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const service = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  service as default
};
//# sourceMappingURL=service-fd23c061.js.map
