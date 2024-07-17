import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
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
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "comment-form",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, _attrs))}><h2 class="title">Leav a <span>Reply</span></h2><form><div class="comment-form-content"><div class="row"><div class="col-md-12"><div class="form-group"><input class="form-control" type="text" placeholder="Name" required=""></div></div><div class="col-md-12"><div class="form-group"><input class="form-control" type="email" placeholder="Email Address" required=""></div></div><div class="col-md-12"><div class="form-group"><textarea class="form-control textarea" name="comment" id="comment" cols="45" rows="7" placeholder="Message" required=""></textarea></div></div></div><div class="row"><div class="col-md-12"><div class="form-group group-style mb-0"><button class="btn btn-theme" type="submit">Submit Now <i class="icon icofont-long-arrow-right"></i></button></div></div></div></div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommentForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommentForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CommentForm as default };
//# sourceMappingURL=CommentForm-1e16e13c.mjs.map
