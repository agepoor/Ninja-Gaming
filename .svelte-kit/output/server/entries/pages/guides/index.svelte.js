import { c as create_ssr_component, b as each, a as add_attribute, e as escape } from "../../../chunks/index-13c0de55.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".guides.svelte-1ialdvz{margin-top:20px}ul.svelte-1ialdvz{list-style-type:none;padding:0}a.svelte-1ialdvz{display:inline-block;margin-top:10px;padding:10px;border:1px dotted rgba(255, 255, 255, 0.2)}",
  map: null
};
async function load({ fetch }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const guides = await res.json();
  if (res.ok) {
    return { props: { guides } };
  }
  return {
    status: res.status,
    error: new Error("Could not fetch the guides")
  };
}
const Guides = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { guides } = $$props;
  if ($$props.guides === void 0 && $$bindings.guides && guides !== void 0)
    $$bindings.guides(guides);
  $$result.css.add(css);
  return `<div class="${"guides svelte-1ialdvz"}"><ul class="${"svelte-1ialdvz"}">${each(guides, (guide) => {
    return `<li><a${add_attribute("href", `/guides/${guide.id}`, 0)} class="${"svelte-1ialdvz"}">${escape(guide.title)}</a></li>`;
  })}</ul>
</div>`;
});
export { Guides as default, load };
