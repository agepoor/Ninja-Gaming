export const manifest = {
	appDir: "_app",
	assets: new Set(["controller.svg","favicon.png"]),
	_: {
		mime: {".svg":"image/svg+xml",".png":"image/png"},
		entry: {"file":"start-40a727b2.js","js":["start-40a727b2.js","chunks/vendor-b8521e77.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/guides\/?$/,
				params: null,
				path: "/guides",
				a: [3,4],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/guides\/hello\/?$/,
				params: null,
				path: "/guides/hello",
				a: [3,5],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/guides\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [3,6],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,7],
				b: [1]
			}
		]
	}
};
