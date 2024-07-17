import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { c as _imports_1 } from './logo-db90386b.mjs';
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
import './nuxt-link-15b2078b.mjs';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + publicAssetsURL("images/blog/author-01.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "author-info",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, _attrs))}><div class="thumb"><img${ssrRenderAttr("src", _imports_0)} alt="Image"></div><div class="author-details"><h4 class="title">Marcella Moody</h4><img class="line-shape"${ssrRenderAttr("src", _imports_1)} alt="image"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industr standard dummy text ever since the 1500swhean an unknown printer took an galley of type and scrambled.</p><div class="social-icons"><a href="#"><i class="icofont-facebook"></i></a><a href="#"><i class="icofont-skype"></i></a><a href="#"><i class="icofont-instagram"></i></a></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PostAuthorInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PostAuthorInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PostAuthorInfo as default };
//# sourceMappingURL=PostAuthorInfo-7a9b1cab.mjs.map
