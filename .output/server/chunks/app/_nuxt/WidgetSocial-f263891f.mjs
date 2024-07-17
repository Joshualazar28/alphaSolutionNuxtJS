import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './line-s2-d4bf72eb.mjs';
import { c as _imports_1 } from './logo-db90386b.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../handlers/renderer.mjs';
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

export { __nuxt_component_3 as default };
//# sourceMappingURL=WidgetSocial-f263891f.mjs.map
