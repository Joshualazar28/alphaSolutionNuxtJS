import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("images/photos/page-not-found.png");
const _sfc_main = {
  props: ["error"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "error404" }, _attrs))} data-v-7ee6a842><div class="container" data-v-7ee6a842><div class="row" data-v-7ee6a842><div class="col-md-12 text-center" data-v-7ee6a842><div class="error-image" data-v-7ee6a842><img class="img-fluid"${ssrRenderAttr("src", _imports_0)} alt="Not Found Image" data-v-7ee6a842></div>`);
  if ($props.error.statusCode === 404) {
    _push(`<h1 class="error-404-title text-white" data-v-7ee6a842>Oops! Page not found!</h1>`);
  } else {
    _push(`<h1 class="error-404-title text-white" data-v-7ee6a842>An error occurred</h1>`);
  }
  _push(`<div class="error-buttons" data-v-7ee6a842>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "btn btn-primary btn-hover-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="button-text" data-v-7ee6a842${_scopeId}>Go back to homepage</span>`);
      } else {
        return [
          createVNode("span", { class: "button-text" }, "Go back to homepage")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7ee6a842"]]);

export { error as default };
//# sourceMappingURL=error-component-e3223771.mjs.map
