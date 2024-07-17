import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { c as _imports_1$1 } from "./logo-db90386b.js";
import { _ as _export_sfc } from "../server.mjs";
const _imports_1 = "" + __publicAssetsURL("images/shape/s1.png");
const _imports_2 = "" + __publicAssetsURL("images/shape/s2.png");
const _imports_3 = "" + __publicAssetsURL("images/shape/s3.png");
const _sfc_main = {
  props: ["service"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "icon-box-item" }, _attrs))}><div class="icon-box"><img class="icon-img"${ssrRenderAttr("src", $props.service.icon)} alt="Icon"></div><div class="content"><div class="separator-line"><img${ssrRenderAttr("src", _imports_1$1)} alt="Image"></div><h4>${ssrInterpolate($props.service.title)}</h4><p>${ssrInterpolate($props.service.desc)}</p></div><div class="icon-shape"><img class="shape-img1"${ssrRenderAttr("src", _imports_1)} alt="Icon"><img class="shape-img2"${ssrRenderAttr("src", _imports_2)} alt="Icon"><img class="shape-img3"${ssrRenderAttr("src", _imports_3)} alt="Icon"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=ServiceItem-af0770f9.js.map
