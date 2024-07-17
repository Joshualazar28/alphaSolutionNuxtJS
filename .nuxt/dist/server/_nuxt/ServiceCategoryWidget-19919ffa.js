import { _ as __nuxt_component_0 } from "./nuxt-link-15b2078b.js";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./line-s2-d4bf72eb.js";
import { c as _imports_1 } from "./logo-db90386b.js";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {
  data() {
    return {
      categories: ["Business Management", "Customer Service", "Digital Marketing", "User Interface Design"]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "widget",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, _attrs))}><h3 class="widget-title">Service Category</h3><div class="separator-line"><img class="me-1"${ssrRenderAttr("src", _imports_0)} alt="Image-HasTech"><img${ssrRenderAttr("src", _imports_1)} alt="Image-HasTech"></div><div class="widget-category"><!--[-->`);
  ssrRenderList($data.categories, (category, index) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/service",
      key: index
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="icofont-double-right"${_scopeId}></i> ${ssrInterpolate(category)}`);
        } else {
          return [
            createVNode("i", { class: "icofont-double-right" }),
            createTextVNode(" " + toDisplayString(category), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceCategoryWidget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=ServiceCategoryWidget-19919ffa.js.map
