import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_1$1, i as _imports_5, j as _imports_6, h as _imports_4 } from './logo-db90386b.mjs';
import { _ as _export_sfc } from '../server.mjs';
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

const _imports_0 = "" + publicAssetsURL("images/shape/line-s3.png");
const _sfc_main = {
  props: ["title", "breadcrumbTitle"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "page-title-area",
    style: { backgroundImage: `url('/images/photos/bg-page-title.jpg')` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="page-title-content"><h2 class="title text-white">${ssrInterpolate($props.title)}</h2><div class="bread-crumbs"><img class="line-shape"${ssrRenderAttr("src", _imports_0)} alt="shape">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home <span class="breadcrumb-sep"${_scopeId}>/</span>`);
      } else {
        return [
          createTextVNode(" Home "),
          createVNode("span", { class: "breadcrumb-sep" }, "/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="active">${ssrInterpolate($props.breadcrumbTitle)}</span></div></div></div></div></div><div class="page-sidebar" data-aos="fade-right" data-aos-duration="1100"><div class="social-icon"><a href="#"><i class="icofont-facebook"></i></a><a href="#"><i class="icofont-skype"></i></a><a href="#"><i class="icofont-twitter"></i></a></div></div><div class="layer-shape"><img class="layer-shape-one"${ssrRenderAttr("src", _imports_1$1)} alt="shape"><img class="layer-shape-two"${ssrRenderAttr("src", _imports_5)} alt="shape"><img class="layer-shape-three"${ssrRenderAttr("src", _imports_6)} alt="shape"><img class="layer-shape-four"${ssrRenderAttr("src", _imports_4)} alt="shape"></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=PageTitle-91a918ca.mjs.map
