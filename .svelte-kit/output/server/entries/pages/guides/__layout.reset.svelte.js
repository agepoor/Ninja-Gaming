import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-13c0de55.js";
import { T as Title } from "../../../chunks/global-6ff3ff0a.js";
/* empty css                                                            */var __layout_reset_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-aeolbj{background-color:rgba(0, 0, 0, 0.1)}main.svelte-aeolbj{max-width:960px;margin:20px auto}footer.svelte-aeolbj{text-align:center}.links.svelte-aeolbj{margin-left:auto}a.svelte-aeolbj{margin-left:10px}nav.svelte-aeolbj{display:flex;justify-content:space-between;align-items:center;max-width:960px;margin:0 auto}",
  map: null
};
let justify = "justify-content: left";
const _layout_reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-aeolbj"}"><nav class="${"svelte-aeolbj"}">${validate_component(Title, "Title").$$render($$result, { title: "Ninja Gaming Guides", justify }, {}, {})}
    <div class="${"links svelte-aeolbj"}"><a href="${"/"}" class="${"svelte-aeolbj"}">Home</a>
      <a href="${"/about"}" class="${"svelte-aeolbj"}">About</a>
      <a href="${"/guides"}" class="${"svelte-aeolbj"}">Guides</a></div></nav></header>

<main class="${"svelte-aeolbj"}">
  ${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-aeolbj"}"><p>Copyright 2022 Ninja Gaming Guides</p>
</footer>`;
});
export { _layout_reset as default };
