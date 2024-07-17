import { _ as __nuxt_component_0$1 } from "./nuxt-link-15b2078b.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "main-menu nav justify-content-center" }, _attrs))}><li>`);
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
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
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
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/Blog" }, {
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
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const Navigation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$2
});
const _imports_0$3 = "" + __publicAssetsURL("images/logo/alfaLight.png");
const _imports_1$2 = "" + __publicAssetsURL("images/logo/alfaDark.png");
const _sfc_main$2 = {
  components: {
    Navigation: () => Promise.resolve().then(function() {
      return Navigation;
    })
  },
  data() {
    return {
      isSticky: false
    };
  },
  methods: {
    // offcanvas mobile-menu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_Navigation = __nuxt_component_1$2;
  _push(`<header${ssrRenderAttrs(mergeProps({
    class: ["header-area header-default transparent sticky-header", { "is-sticky": $data.isSticky }]
  }, _attrs))}><div class="container"><div class="row"><div class="col-6 col-sm-4 col-lg-3"><div class="header-logo-area">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="logo-main"${ssrRenderAttr("src", _imports_0$3)} alt="Logo"${_scopeId}><img class="logo-light"${ssrRenderAttr("src", _imports_1$2)} alt="Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "logo-main",
            src: _imports_0$3,
            alt: "Logo"
          }),
          createVNode("img", {
            class: "logo-light",
            src: _imports_1$2,
            alt: "Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-6 col-sm-8 col-lg-9"><div class="header-align"><div class="header-navigation-area navigation-style-two">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`</div><div class="header-action-area"><button class="btn-menu d-xl-none"><span></span><span></span><span></span></button>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    class: "btn-theme btn-style"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` (786) 779 7582 <i class="icon-style icofont-double-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" (786) 779 7582 "),
          createVNode("i", { class: "icon-style icofont-double-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const Header = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const MobileNavigation_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  mounted() {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");
    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }
    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;
    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }
    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
    const sideMenuExpand = (e) => {
      e.currentTarget.parentElement.classList.toggle("active");
    };
    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
      offcanvasMobileMenu.classList.remove("active");
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-navigation" }, _attrs))}><nav class="offcanvas-navigation" id="offcanvas-navigation"><ul><li>`);
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
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="has-children">`);
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
  _push(`<ul class="sub-menu"><li>`);
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
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Service Details`);
      } else {
        return [
          createTextVNode("Service Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="has-children">`);
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
  _push(`<ul class="sub-menu"><li>`);
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
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog Details`);
      } else {
        return [
          createTextVNode("Blog Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileNavigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const MobileNavigation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$1
});
const _imports_0$2 = "" + __publicAssetsURL("images/logo/logo-light.png");
const _sfc_main = {
  components: {
    MobileNavigation: () => Promise.resolve().then(function() {
      return MobileNavigation;
    })
  },
  methods: {
    // offcanvas menu close
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_MobileNavigation = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "offcanvas-mobile-menu",
    id: "offcanvas-menu"
  }, _attrs))}><div class="mobile-menu-overlay"></div><div class="inner"><div class="mobile-header"><div class="logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="brand logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$2,
            alt: "brand logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><button class="mobile-close-btn"></button></div><div class="menu-content">`);
  _push(ssrRenderComponent(_component_MobileNavigation, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OffCanvasMobileMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const OffCanvasMobileMenu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1
});
const _imports_1$1 = "" + __publicAssetsURL("images/shape/1.png");
const _imports_5 = "" + __publicAssetsURL("images/shape/4.png");
const _imports_6 = "" + __publicAssetsURL("images/shape/5.png");
const _imports_4 = "" + __publicAssetsURL("images/shape/3.png");
const _imports_0$1 = "" + __publicAssetsURL("images/icons/c1.png");
const _imports_1 = "" + __publicAssetsURL("images/shape/line-s1.png");
const _imports_2 = "" + __publicAssetsURL("images/icons/c2.png");
const _imports_3 = "" + __publicAssetsURL("images/icons/c3.png");
const _imports_0 = "" + __publicAssetsURL("images/logo/logo.png");
export {
  Header as H,
  OffCanvasMobileMenu as O,
  _imports_1$1 as _,
  __nuxt_component_0 as a,
  __nuxt_component_1 as b,
  _imports_1 as c,
  _imports_0$1 as d,
  _imports_2 as e,
  _imports_3 as f,
  _imports_0 as g,
  _imports_4 as h,
  _imports_5 as i,
  _imports_6 as j
};
//# sourceMappingURL=logo-db90386b.js.map
