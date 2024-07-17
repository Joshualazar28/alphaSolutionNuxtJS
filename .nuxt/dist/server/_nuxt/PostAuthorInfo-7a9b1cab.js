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
const _imports_0 = "" + __publicAssetsURL("images/blog/author-01.jpg");
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
export {
  PostAuthorInfo as default
};
//# sourceMappingURL=PostAuthorInfo-7a9b1cab.js.map
