import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "funfact-area funfact-default-area" }, _attrs))}><div class="container"><div class="row"><div class="col-sm-10 col-md-6 col-lg-5 offset-lg-1 col-xl-5 offset-xl-1"><div class="section-title xs-text-center" data-aos="fade-up" data-aos-duration="1000"><h2 class="title">Successfully Complete <span class="text-theme-color bottom-style">2,500</span> Project.</h2>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/service",
    class: "btn btn-theme btn-border"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Our Services <i class="icon icofont-long-arrow-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" Our Services "),
          createVNode("i", { class: "icon icofont-long-arrow-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-md-6 col-lg-6 col-xl-4 offset-xl-1"><div class="row funfact-items-style1"><div class="col-6 col-sm-6"><div class="funfact-item mt-20" data-aos="fade-up" data-aos-duration="1000"><div class="number"><h2><span class="counter-animate">98</span>+</h2></div><p class="title">Team Member</p></div></div><div class="col-6 col-sm-6"><div class="funfact-item" data-aos="fade-up" data-aos-duration="1000"><div class="number"><h2><span class="counter-animate">2,500</span></h2></div><p class="title">Complete Project</p></div></div><div class="col-6 col-sm-6"><div class="funfact-item mt-20" data-aos="fade-up" data-aos-duration="1200"><div class="number"><h2><span class="counter-animate">895</span></h2></div><p class="title">Cup of Coffee</p></div></div><div class="col-6 col-sm-6"><div class="funfact-item" data-aos="fade-up" data-aos-duration="1200"><div class="number"><h2><span class="counter-animate">78</span>k</h2></div><p class="title">Happy Clients</p></div></div></div></div></div></div><div class="shape-line-style"></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FunFactOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FunFactOne = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FunFactOne as default };
//# sourceMappingURL=FunFactOne-04037aac.mjs.map
