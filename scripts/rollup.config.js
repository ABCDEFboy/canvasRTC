import json from "rollup-plugin-json";
import typescript from "rollup-plugin-typescript2";

export default {
	input: "src/index.ts",
	output: [
		{
			file: "build/CanvasRTC.js",
			format: "umd",
			indent: "\t",
			name: "CanvasRTC",
			sourcemap: true
		},
		{
			file: "build/CanvasRTC.module.js",
			format: "es",
			indent: "\t",
			sourcemap: false
		}
	],
	plugins: [
		json(),
		typescript({
			tsconfig: "./tsconfig.json"
		})
	]
};
