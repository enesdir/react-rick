/// <reference types="vite/client" />
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import { VitePWA } from 'vite-plugin-pwa'

const vitePluginPWA = () =>
	VitePWA({
		registerType: 'autoUpdate',
		injectRegister: 'auto',
		devOptions: {
			enabled: true,
		},
		workbox: {
			globPatterns: ['**/*'],
		},
		includeAssets: ['**/*'],
		manifest: {
			id: 'com.enesesen.reactrick',
			name: 'React rick',
			short_name: 'react-rick',
			description: 'Vite PWA React',
			lang: 'en',
			dir: 'ltr',
			scope: '/',
			start_url: '/',
			display: 'standalone',
			orientation: 'portrait',
			background_color: '#FFFFFF',
			theme_color: '#0059BC',
			prefer_related_applications: false,
		},
	})

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	return {
		// vite config
		plugins: [million.vite({ auto: true }), react(), Inspect(), vitePluginPWA()],
		server: {
			open: false,
			strictPort: true,
			port: 3000, // you can replace this port with any port
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
				'~': resolve(__dirname, './'),
			},
		},
		esbuild: {
			loader: 'tsx',
			include: 'src/**/*.{ts,tsx,js,jsx}',
		},
		optimizeDeps: {
			esbuildOptions: {
				loader: {
					'.js': 'jsx',
					'.ts': 'tsx',
				},
			},
		},
	}
})
