import { c as create_ssr_component, v as validate_component } from "../../chunks/index-13c0de55.js";
import { T as Title } from "../../chunks/global-6ff3ff0a.js";
/* empty css                                                         */var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1tjgm4e{display:flex;justify-content:center}main.svelte-1tjgm4e{max-width:960px;margin:20px auto}footer.svelte-1tjgm4e{text-align:center}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-1tjgm4e"}">${validate_component(Title, "Title").$$render($$result, { title: "Ninja Gaming Guides" }, {}, {})}</header>

<main class="${"svelte-1tjgm4e"}">
  ${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1tjgm4e"}"><p>Copyright 2022 Ninja Gaming Guides</p>
</footer>`;
});
export { _layout as default };
