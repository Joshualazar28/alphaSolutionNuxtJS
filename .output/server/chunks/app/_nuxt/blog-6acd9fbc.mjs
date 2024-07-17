import { a as __nuxt_component_0, b as __nuxt_component_1, c as _imports_1 } from './logo-db90386b.mjs';
import __nuxt_component_2 from './PageTitle-91a918ca.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-15b2078b.mjs';
import __nuxt_component_1$1 from './ServiceCategoryWidget-19919ffa.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './line-s2-d4bf72eb.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { a as __nuxt_component_4, b as __nuxt_component_5 } from './Footer-5a36eb2a.mjs';
import '../../handlers/renderer.mjs';
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

const _sfc_main$1 = {
  components: {
    Pagination: () => import('./Pagination-84a18f48.mjs'),
    WidgetSearch: () => import('./WidgetSearch-d262a046.mjs'),
    ServiceCategoryWidget: () => import('./ServiceCategoryWidget-19919ffa.mjs'),
    WidgetVideo: () => import('./WidgetVideo-63d54c05.mjs'),
    WidgetSocial: () => import('./WidgetSocial-f263891f.mjs'),
    WidgetRecentPost: () => import('./WidgetRecentPost-15599dfd.mjs'),
    WidgetTags: () => import('./WidgetTags-b2ec4aca.mjs')
  },
  data() {
    return {
      blogs: [
        {
          imgSrc: "/images/blog/blog1.jpg",
          title: "Enhancing Customer Satisfaction in CSR: Key Strategies for Success",
          excerpt: "Customer satisfaction is a crucial element in the realm of Corporate Social Responsibility (CSR). Companies that prioritize customer satisfaction in their CSR initiatives not only build a loyal customer base but also foster a positive brand image. This blog explores the significance of customer satisfaction in CSR and outlines effective strategies for businesses to achieve it.",
          date: "21 March, 2021",
          comment: 2566,
          like: 750,
          author: "Alvin Malone",
          category: "Business/Marketing"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_ServiceCategoryWidget = __nuxt_component_1$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-grid-area" }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="blog-content-column"><div class="blog-content-area post-items-style2"><!--[-->`);
  ssrRenderList($data.blogs, (blog2, index) => {
    _push(`<div class="post-item" data-aos="fade-up" data-aos-duration="1000"><div class="thumb">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", blog2.imgSrc)}${ssrRenderAttr("alt", blog2.title)}${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: blog2.imgSrc,
              alt: blog2.title
            }, null, 8, ["src", "alt"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="content"><h4 class="title">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(blog2.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(blog2.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h4><div class="separator-line"><img class="me-1"${ssrRenderAttr("src", _imports_0)} alt="shape"><img${ssrRenderAttr("src", _imports_1)} alt="shape"></div><p>${ssrInterpolate(blog2.excerpt)}</p>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/blog-details",
      class: "btn btn-theme btn-border btn-gray"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Read More <i class="icon icofont-long-arrow-right"${_scopeId}></i>`);
        } else {
          return [
            createTextVNode("Read More "),
            createVNode("i", { class: "icon icofont-long-arrow-right" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div><div class="sidebar-area">`);
  _push(ssrRenderComponent(_component_ServiceCategoryWidget, null, null, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const BlogWrapper = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_3
});
const _sfc_main = {
  components: {
    Header: () => import('./logo-db90386b.mjs').then(function(n) {
      return n.H;
    }),
    OffCanvasMobileMenu: () => import('./logo-db90386b.mjs').then(function(n) {
      return n.O;
    }),
    PageTitle: () => import('./PageTitle-91a918ca.mjs'),
    BlogWrapper: () => Promise.resolve().then(function() {
      return BlogWrapper;
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
  const _component_Header = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_PageTitle = __nuxt_component_2;
  const _component_BlogWrapper = __nuxt_component_3;
  const _component_ContactDevider = __nuxt_component_4;
  const _component_Footer = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-page-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_PageTitle, {
    title: "Blog Post",
    breadcrumbTitle: "Blog"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BlogWrapper, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactDevider, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { blog as default };
//# sourceMappingURL=blog-6acd9fbc.mjs.map
