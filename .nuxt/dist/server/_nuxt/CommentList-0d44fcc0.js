import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { c as _imports_1 } from "./logo-db90386b.js";
import { _ as _export_sfc } from "../server.mjs";
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
const _imports_0 = "" + __publicAssetsURL("images/blog/c1.jpg");
const _imports_2 = "" + __publicAssetsURL("images/blog/c2.jpg");
const _imports_3 = "" + __publicAssetsURL("images/blog/c3.jpg");
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
export {
  CommentList as default
};
//# sourceMappingURL=CommentList-0d44fcc0.js.map
