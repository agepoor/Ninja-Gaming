import { c as create_ssr_component } from "../../chunks/index-13c0de55.js";
/* empty css                                                         */var about_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about.svelte-uwjm0p{text-align:center;display:block;margin:20px auto}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"about svelte-uwjm0p"}"><h2>About Us</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non autem,
    nihil quia ducimus iure, libero repellendus sint sit inventore maxime alias,
    iusto provident animi velit voluptas placeat qui? At.
  </p>
  <a href="${"/guides"}">View Guides</a>
  <a href="${"/"}">Home</a>
</div>`;
});
export { About as default };
