import { _ as __nuxt_component_0 } from "./nuxt-link-15b2078b.js";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { d as _imports_0$1, c as _imports_1$1, e as _imports_2, f as _imports_3, g as _imports_0$2 } from "./logo-db90386b.js";
const _imports_0 = "" + __publicAssetsURL("images/shape/line1.png");
const _imports_1 = "" + __publicAssetsURL("images/shape/15.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "contact-divider-area",
    style: { backgroundColor: "#f6f7fc" }
  }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-md-9 col-lg-8"><div class="contact-divider-content" data-aos="fade-up" data-aos-duration="1100"><div class="section-title"><div class="subtitle-content"><img${ssrRenderAttr("src", _imports_0)} alt="shape"><h5>Contact Us.</h5></div><h2 class="title">Contact Us For Any Information of <span class="bottom-style">Company.</span></h2></div></div></div><div class="col-md-3 col-lg-4 text-left text-md-right">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    class: "btn btn-theme",
    "data-aos": "fade-up",
    "data-aos-duration": "1100"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Now <i class="icon icofont-long-arrow-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode("Contact Now "),
          createVNode("i", { class: "icon icofont-long-arrow-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="layer-shape"><img class="shape-style1"${ssrRenderAttr("src", _imports_1)} alt="shape"></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactDevider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const ContactDevider = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_4
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: "footer-area bg-img-cover",
    style: { backgroundImage: `url('/images/photos/bg-footer.jpg')` }
  }, _attrs))}><div class="footer-top" data-aos="fade-up" data-aos-duration="1000"><div class="container"><div class="row"><div class="col-12"><div class="contact-info-content"><div class="contact-info-item"><div class="icon"><img class="icon-img"${ssrRenderAttr("src", _imports_0$1)} alt="Icon"></div><div class="content"><h4>Call Us.</h4><img class="line-icon"${ssrRenderAttr("src", _imports_1$1)} alt="Icon"><a href="tel://(786) 779 7582">(786) 779 7582</a></div></div><div class="contact-info-item"><div class="icon"><img class="icon-img"${ssrRenderAttr("src", _imports_2)} alt="Icon"></div><div class="content"><h4>Email.</h4><img class="line-icon"${ssrRenderAttr("src", _imports_1$1)} alt="Icon"><a href="mailto://alphahomesolutions55@gmail.com">alphahomesolutions@gmail.com</a></div></div><div class="contact-info-item"><div class="icon"><img class="icon-img"${ssrRenderAttr("src", _imports_3)} alt="Icon"></div><div class="content"><h4>Location.</h4><img class="line-icon"${ssrRenderAttr("src", _imports_1$1)} alt="Icon"><p>7300 NW 174th <br>Ter Hialeah Florida 33015</p></div></div></div></div></div></div></div><div class="container" data-aos="fade-up" data-aos-duration="1000"><div class="row"><div class="col-md-9 col-lg-4 col-xl-4"><div class="widget-item mt-0"><div class="about-widget">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "footer-logo"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$2,
            alt: "Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has industry&#39;s standard dummy text ever printer took a galley.</p><div class="widget-newsletter"><form><input type="email" class="form-control" placeholder="Enter your email"><button type="submit" class="btn btn-theme"> Subscribe Now <i class="icon icofont-long-arrow-right"></i></button></form></div></div></div></div><div class="col-md-8 col-lg-4 col-xl-4"><div class="widget-item menu-wrap-two-column"><h4 class="widget-title">All Services</h4><img class="line-shape"${ssrRenderAttr("src", _imports_1$1)} alt="shape"><nav class="widget-menu-wrap"><div class="row"><div><ul class="nav-menu nav"><li>`);
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
  _push(`</li></ul></div></div></nav></div></div><div class="col-md-4 col-lg-4 col-xl-4 lg-pr-0"><div class="widget-item menu-wrap-column"><h4 class="widget-title">Useful Links</h4><img class="line-shape"${ssrRenderAttr("src", _imports_1$1)} alt="Virtuf-HasTech"><nav class="widget-menu-wrap"><ul class="nav-menu nav"><li>`);
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
  _push(`</li></ul></nav></div></div></div></div><div class="footer-bottom"><div class="container"><div class="footer-bottom-content"><div class="row align-items-center"><div class="col-md-6 order-2 order-md-1"><div class="widget-copyright"><p>© 2023 Made By <span>Risen Enterprises</span></p></div></div><div class="col-md-6 order-1 order-md-2"><div class="widget-social-icons"><a href="#"><i class="icofont-facebook"></i></a><a href="#"><i class="icofont-skype"></i></a><a href="#"><i class="icofont-instagram"></i></a><a href="#"><i class="icofont-twitter"></i></a></div></div></div></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const Footer = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_5
});
export {
  ContactDevider as C,
  Footer as F,
  _imports_0 as _,
  __nuxt_component_4 as a,
  __nuxt_component_5 as b
};
//# sourceMappingURL=Footer-5a36eb2a.js.map
