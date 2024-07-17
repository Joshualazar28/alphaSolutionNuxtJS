import { d as _imports_0, c as _imports_1, e as _imports_2, f as _imports_3, g as _imports_0$1, a as __nuxt_component_0$1, b as __nuxt_component_1 } from "./logo-db90386b.js";
import __nuxt_component_2 from "./PageTitle-91a918ca.js";
import { mergeProps, useSSRContext, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_1$1 } from "./line-s4-98b62ee4.js";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./nuxt-link-15b2078b.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "destr";
import "defu";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-area" }, _attrs))}><div class="contact-info-light" data-aos="fade-up" data-aos-duration="1000"><div class="contact-info-content"><div class="contact-info-item"><div class="icon"><img class="icon-img"${ssrRenderAttr("src", _imports_0)} alt="Icon"></div><div class="content"><h4>Call Us.</h4><img class="line-icon"${ssrRenderAttr("src", _imports_1)} alt="Icon"><a href="tel://(786) 779 7582">(786) 779 7582</a></div></div><div class="contact-info-item"><div class="icon"><img class="icon-img"${ssrRenderAttr("src", _imports_2)} alt="Icon"></div><div class="content"><h4>Email.</h4><img class="line-icon"${ssrRenderAttr("src", _imports_1)} alt="Icon"><a href="mailto://alphahomesolutions55@gmail.com">alphahomesolutions@gmail.com</a></div></div><div class="contact-info-item"><div class="icon"><img class="icon-img"${ssrRenderAttr("src", _imports_3)} alt="Icon"></div><div class="content"><h4>Location.</h4><img class="line-icon"${ssrRenderAttr("src", _imports_1)} alt="Icon"><p>7300 NW 174th <br>Ter Hialeah Florida 33015</p></div></div></div></div><div class="container"><div class="row"><div class="col-lg-12"><div class="contact-colunm" data-aos="fade-up" data-aos-duration="1000"><div class="contact-map-area"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.103627398312!2d-80.32231182479887!3d25.931821977245374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a51fb77486f5%3A0xb69f7e7b7b4c6044!2s7300%20NW%20174th%20Terrace%2C%20Hialeah%2C%20FL%2033015%2C%20USA!5e0!3m2!1sen!2s!4v1720879309941!5m2!1sen!2s" width="600" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div><div class="contact-form"><form class="contact-form-wrapper"><div class="row"><div class="col-lg-12"><div class="section-title"><div class="subtitle-content"><img${ssrRenderAttr("src", _imports_1$1)} alt="shape"><h5 class="text-light">Contact Us</h5></div><h2 class="title text-light"> Get In <span>Touch.</span></h2><div class="separator-line"><img${ssrRenderAttr("src", _imports_1$1)} alt="shape"><img${ssrRenderAttr("src", _imports_1$1)} alt="shape"></div></div></div></div><div class="row"><div class="col-md-12"><div class="form-group"><input class="form-control" type="text" name="con_name" placeholder="Name"></div></div><div class="col-md-12"><div class="form-group"><input class="form-control" type="email" name="con_email" placeholder="Email"></div></div><div class="col-md-12"><div class="form-group"><input class="form-control" type="text" name="con_phone" placeholder="Phone"></div></div><div class="col-md-12"><div class="form-group mb-0"><textarea name="con_message" placeholder="Message"></textarea></div></div><div class="col-md-12"><div class="form-group mb-0"><button class="btn btn-theme" type="submit"> Submit Now <i class="icofont-long-arrow-right"></i></button></div></div></div></form></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactWrapper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const ContactWrapper = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_3
});
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: "footer-area bg-img-cover",
    style: { backgroundImage: `url('/images/photos/bg-footer.jpg')` }
  }, _attrs))}><div class="container" data-aos="fade-up" data-aos-duration="1000"><div class="row"><div class="col-md-9 col-lg-4 col-xl-4"><div class="widget-item mt-0"><div class="about-widget">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "footer-logo"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: "Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has industry&#39;s standard dummy text ever printer took a galley.</p><div class="widget-newsletter"><form><input type="email" class="form-control" placeholder="Enter your email"><button type="submit" class="btn btn-theme"> Subscribe Now <i class="icon icofont-long-arrow-right"></i></button></form></div></div></div></div><div class="col-md-8 col-lg-4 col-xl-4"><div class="widget-item menu-wrap-two-column"><h4 class="widget-title">All Services</h4><img class="line-shape"${ssrRenderAttr("src", _imports_1)} alt="shape"><nav class="widget-menu-wrap"><div class="row"><div><ul class="nav-menu nav"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Customer Retention`);
      } else {
        return [
          createTextVNode("Customer Retention")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Outbound Requests`);
      } else {
        return [
          createTextVNode("Outbound Requests")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Inbound Requests`);
      } else {
        return [
          createTextVNode("Inbound Requests")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Customer Support`);
      } else {
        return [
          createTextVNode("Customer Support")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Billing and Payment`);
      } else {
        return [
          createTextVNode("Billing and Payment")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Live Chat Support`);
      } else {
        return [
          createTextVNode("Live Chat Support")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></nav></div></div><div class="col-md-4 col-lg-4 col-xl-4 lg-pr-0"><div class="widget-item menu-wrap-column"><h4 class="widget-title">Useful Links</h4><img class="line-shape"${ssrRenderAttr("src", _imports_1)} alt="Virtuf-HasTech"><nav class="widget-menu-wrap"><ul class="nav-menu nav"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Us`);
      } else {
        return [
          createTextVNode("About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Service`);
      } else {
        return [
          createTextVNode("Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Us`);
      } else {
        return [
          createTextVNode("Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div></div></div></div><div class="footer-bottom"><div class="container"><div class="footer-bottom-content"><div class="row align-items-center"><div class="col-md-6 order-2 order-md-1"><div class="widget-copyright"><p>© 2023 Made By <span>Dexter Matthew</span></p></div></div><div class="col-md-6 order-1 order-md-2"><div class="widget-social-icons"><a href="#"><i class="icofont-facebook"></i></a><a href="#"><i class="icofont-skype"></i></a><a href="#"><i class="icofont-instagram"></i></a><a href="#"><i class="icofont-twitter"></i></a></div></div></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const FooterTwo = /* @__PURE__ */ Object.freeze({
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
    ContactWrapper: () => Promise.resolve().then(function() {
      return ContactWrapper;
    }),
    FooterTwo: () => Promise.resolve().then(function() {
      return FooterTwo;
    })
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_PageTitle = __nuxt_component_2;
  const _component_ContactWrapper = __nuxt_component_3;
  const _component_FooterTwo = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_PageTitle, {
    title: "Contact Us",
    breadcrumbTitle: "Contact"
  }, null, _parent));
  _push(ssrRenderComponent(_component_ContactWrapper, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterTwo, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contact as default
};
//# sourceMappingURL=contact-f4ffa443.js.map
