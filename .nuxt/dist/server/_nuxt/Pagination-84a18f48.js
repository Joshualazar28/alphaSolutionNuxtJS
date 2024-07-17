import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "destr";
import "defu";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "pagination-area text-center pt-0 pb-70",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, _attrs))}><nav><ul class="page-numbers"><li><a class="page-number" href="#">1</a></li><li><a class="page-number" href="#">2</a></li><li><a class="page-number" href="#">3</a></li><li><a class="page-number next" href="#"><i class="icofont-double-right"></i></a></li></ul></nav></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Pagination as default
};
//# sourceMappingURL=Pagination-84a18f48.js.map
