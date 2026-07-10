// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	server: {
		host: true,
		port: 4321,
	},

	vite: {
		// @ts-ignore
		plugins: [tailwindcss()],
		server: {
			proxy: {
				"/nest-api": {
					target: "http://nest-api:5000",
					changeOrigin: true,
				},
			},
		},
	},

	integrations: [react()],
});
