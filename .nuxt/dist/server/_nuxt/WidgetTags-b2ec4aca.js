import { _ as __nuxt_component_0 } from "./nuxt-link-15b2078b.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
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
      tags: [
        "Business",
        "Consulting",
        "User Interface",
        "Corporate",
        "Agency",
        "Gardening",
        "Industry",
        "Minimal",
        "Unique"
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "widget",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, _attrs))}><h3 class="widget-title">Popular Tags</h3><div class="separator-line"><img class="me-1"${ssrRenderAttr("src", _imports_0)} alt="shape"><img${ssrRenderAttr("src", _imports_1)} alt="shape"></div><div class="widget-tags"><ul><!--[-->`);
  ssrRenderList($data.tags, (tag, index) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(tag)}`);
        } else {
          return [
            createTextVNode(toDisplayString(tag), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WidgetTags.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WidgetTags = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  WidgetTags as default
};
//# sourceMappingURL=WidgetTags-b2ec4aca.js.map
