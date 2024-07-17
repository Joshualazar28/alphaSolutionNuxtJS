import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./line-s2-d4bf72eb.js";
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
const _sfc_main = {
  data() {
    return {
      socialList: [
        {
          iconName: "icofont-facebook",
          title: "Facebook",
          url: "#"
        },
        {
          iconName: "icofont-pinterest",
          title: "Pinterest",
          url: "#"
        },
        {
          iconName: "icofont-instagram",
          title: "Instagram",
          url: "#"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "widget",
    "data-aos": "fade-up",
    "data-aos-duration": "1200"
  }, _attrs))}><h3 class="widget-title">Share Now.</h3><div class="separator-line"><img class="me-1"${ssrRenderAttr("src", _imports_0)} alt="Image-HasTech"><img${ssrRenderAttr("src", _imports_1)} alt="Image-HasTech"></div><div class="widget-social"><!--[-->`);
  ssrRenderList($data.socialList, (social, index) => {
    _push(`<div class="social-item"><a${ssrRenderAttr("href", social.url)}><div class="icon"><i class="${ssrRenderClass(social.iconName)}"></i></div><span>${ssrInterpolate(social.title)}</span></a></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WidgetSocial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=WidgetSocial-f263891f.js.map
