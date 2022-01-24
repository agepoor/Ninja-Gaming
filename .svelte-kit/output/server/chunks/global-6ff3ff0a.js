import { c as create_ssr_component, a as add_attribute, e as escape } from "./index-13c0de55.js";
/* empty css                                              */const css = {
  code: ".title.svelte-wk7zc2.svelte-wk7zc2{display:flex;flex:auto}.title.svelte-wk7zc2 img.svelte-wk7zc2{display:inline-block;filter:invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg)\r\n      brightness(100%) contrast(90%)}.title.svelte-wk7zc2 h1.svelte-wk7zc2{margin-left:10px}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Ninja Gaming" } = $$props;
  let { justify = "justify-content: center" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  $$result.css.add(css);
  return `<div class="${"title svelte-wk7zc2"}"${add_attribute("style", justify, 0)}><img src="${"/controller.svg"}" alt="${"site logo"}" class="${"svelte-wk7zc2"}">
  <h1 class="${"svelte-wk7zc2"}">${escape(title)}</h1>
</div>`;
});
var global = "";
export { Title as T };
