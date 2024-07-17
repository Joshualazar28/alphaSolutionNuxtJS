import { c as _imports_1, a as __nuxt_component_0$1, b as __nuxt_component_1 } from "./logo-db90386b.js";
import __nuxt_component_2 from "./PageTitle-91a918ca.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-15b2078b.js";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { a as __nuxt_component_4, b as __nuxt_component_5 } from "./Footer-5a36eb2a.js";
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
      currentItem: 4,
      portfolioData: [
        {
          imgSrc: "/images/portfolio/1.jpg",
          title: "Business Management",
          category: "business"
        },
        {
          imgSrc: "/images/portfolio/2.jpg",
          title: "Market Statics & Analysis.",
          category: "marketing"
        },
        {
          imgSrc: "/images/portfolio/3.jpg",
          title: "Digital Marketing",
          category: "consulting"
        },
        {
          imgSrc: "/images/portfolio/4.jpg",
          title: "Business Consultation",
          category: "digital"
        },
        {
          imgSrc: "/images/portfolio/5.jpg",
          title: "Link Building Services",
          category: "business"
        },
        {
          imgSrc: "/images/portfolio/6.jpg",
          title: "Social Media Marketing",
          category: "marketing"
        }
      ]
    };
  },
  computed: {
    portfolios() {
      return this.portfolioData.slice(0, this.currentItem);
    }
  },
  methods: {
    loadMore() {
      this.currentItem += 2;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-area" }, _attrs))}><div class="container"><div class="row portfolio-grid gutter-50" data-aos="fade-up" data-aos-duration="1000"><!--[-->`);
  ssrRenderList($options.portfolios, (portfolio, index) => {
    _push(`<div class="${ssrRenderClass([portfolio.category, "col-md-6 portfolio-item"])}"><div class="inner-content"><div class="thumb">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/project-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", portfolio.imgSrc)}${ssrRenderAttr("alt", portfolio.title)}${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: portfolio.imgSrc,
              alt: portfolio.title
            }, null, 8, ["src", "alt"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="portfolio-info"><div class="content"><img class="shape-line-img"${ssrRenderAttr("src", _imports_1)} alt="shape image"><h3 class="title">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/project-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(portfolio.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(portfolio.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h3>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/project-details",
      class: "category"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(portfolio.category)}`);
        } else {
          return [
            createTextVNode(toDisplayString(portfolio.category), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/project-details",
      class: "btn-icon"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="icofont-long-arrow-right"${_scopeId}></i>`);
        } else {
          return [
            createVNode("i", { class: "icofont-long-arrow-right" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div><div class="portfolio-footer text-center" data-aos="fade-up" data-aos-duration="1300">`);
  if ($data.currentItem < $data.portfolioData.length) {
    _push(`<button class="btn btn-theme btn-lg mb-1">Load More</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const PortfolioWrapper = /* @__PURE__ */ Object.freeze({
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
    PortfolioWrapper: () => Promise.resolve().then(function() {
      return PortfolioWrapper;
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
  const _component_PortfolioWrapper = __nuxt_component_3;
  const _component_ContactDevider = __nuxt_component_4;
  const _component_Footer = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio-page-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_PageTitle, {
    title: "Projects",
    breadcrumbTitle: "Projects"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PortfolioWrapper, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactDevider, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const project = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  project as default
};
//# sourceMappingURL=project-4ba8e1b3.js.map
