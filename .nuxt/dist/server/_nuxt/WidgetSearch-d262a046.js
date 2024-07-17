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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "widget",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, _attrs))}><div class="widget-search-box"><form><div class="form-input-item"><label for="search2" class="sr-only">Search Here</label><input type="text" id="search2" placeholder="Search Here"><button type="submit" class="btn-src"><i class="icofont-search-2"></i></button></div></form></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WidgetSearch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WidgetSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  WidgetSearch as default
};
//# sourceMappingURL=WidgetSearch-d262a046.js.map
