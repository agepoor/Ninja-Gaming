import { c as create_ssr_component } from "../../chunks/index-13c0de55.js";
/* empty css                                                         */var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".index.svelte-u5o6ua{text-align:center;display:block;margin:20px auto}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"index svelte-u5o6ua"}"><h2>Welcome</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aspernatur,
    in modi ea rem quaerat suscipit, eveniet impedit reprehenderit quae
    provident molestias quisquam quibusdam necessitatibus explicabo. Ab
    exercitationem ipsa officiis.
  </p>
  <a href="${"/guides"}">View Guides</a>
  <a href="${"/about"}">About</a>
</div>`;
});
export { Routes as default };
