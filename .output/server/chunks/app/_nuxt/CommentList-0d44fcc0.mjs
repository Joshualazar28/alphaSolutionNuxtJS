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

const _imports_0 = "" + publicAssetsURL("images/blog/c1.jpg");
const _imports_2 = "" + publicAssetsURL("images/blog/c2.jpg");
const _imports_3 = "" + publicAssetsURL("images/blog/c3.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "comment-content",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, _attrs))}><div class="single-comment"><div class="author-info"><div class="thumb"><img${ssrRenderAttr("src", _imports_0)} alt="Image"></div><div class="author-details"><h4 class="name">Marcella Moody</h4><img class="line-shape"${ssrRenderAttr("src", _imports_1)} alt="image"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p><button class="btn-reply"><i class="icofont-reply"></i> Reply</button></div><div class="comment-date">07 Jan, 2021</div></div></div><div class="single-comment pl-xxs-30 pl-70"><div class="author-info"><div class="thumb"><img${ssrRenderAttr("src", _imports_2)} alt="Image"></div><div class="author-details"><h4 class="name">Jan Roberts</h4><img class="line-shape"${ssrRenderAttr("src", _imports_1)} alt="image"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p><button class="btn-reply"><i class="icofont-reply"></i> Reply</button></div><div class="comment-date">15 Mar, 2021</div></div></div><div class="single-comment"><div class="author-info"><div class="thumb"><img${ssrRenderAttr("src", _imports_3)} alt="Image"></div><div class="author-details"><h4 class="name">Kristy Kelly</h4><img class="line-shape"${ssrRenderAttr("src", _imports_1)} alt="image"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p><button class="btn-reply"><i class="icofont-reply"></i> Reply</button></div><div class="comment-date">24 Sep, 2021</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommentList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommentList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CommentList as default };
//# sourceMappingURL=CommentList-0d44fcc0.mjs.map
