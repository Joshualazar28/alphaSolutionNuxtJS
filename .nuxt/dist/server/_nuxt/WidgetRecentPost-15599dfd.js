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
      recentPosts: [
        {
          imgSrc: "/images/blog/s1.jpg",
          title: "Make type specimen book only five.",
          date: "07 June, 2021"
        },
        {
          imgSrc: "/images/blog/s2.jpg",
          title: "We work in the fields of UI/UX design",
          date: "26 July, 2021"
        },
        {
          imgSrc: "/images/blog/s3.jpg",
          title: "printing industry has been printer.",
          date: "18 March, 2021"
        }
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
  }, _attrs))}><h3 class="widget-title">Recent Post</h3><div class="separator-line"><img class="me-1"${ssrRenderAttr("src", _imports_0)} alt="image"><img${ssrRenderAttr("src", _imports_1)} alt="image"></div><div class="widget-blog-post"><ul><!--[-->`);
  ssrRenderList($data.recentPosts, (post, index) => {
    _push(`<li class="recent-post-item"><div class="thumb">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", post.imgSrc)}${ssrRenderAttr("alt", post.title)}${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: post.imgSrc,
              alt: post.title
            }, null, 8, ["src", "alt"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="content">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(post.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(post.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<span><i class="icofont-ui-calendar"></i>${ssrInterpolate(post.date)}</span></div></li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WidgetRecentPost.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WidgetRecentPost = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  WidgetRecentPost as default
};
//# sourceMappingURL=WidgetRecentPost-15599dfd.js.map
